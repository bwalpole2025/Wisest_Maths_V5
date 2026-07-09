import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.substitution.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["substitution", "expressions", "multiplication", "positive integer"],
    "questionText": "Work out the value of $3x$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand what substitution means.", "workingLatex": "x = 4", "explanation": "Substituting simply means swapping the letter for the number it stands for, then working out the value.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "3x", "explanation": "The term $3x$ is short for $3$ multiplied by $x$, so there is a hidden multiplication sign here.", "diagram": null },
        { "stepNumber": 3, "description": "Replace $x$ with its value.", "workingLatex": "3 \\times 4", "explanation": "Everywhere the letter $x$ appears, we put the number $4$ in its place.", "diagram": null },
        { "stepNumber": 4, "description": "Carry out the multiplication.", "workingLatex": "3 \\times 4 = 12", "explanation": "Three lots of four gives twelve.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "3x = 12", "explanation": "This is the value of the expression when $x = 4$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer is sensible.", "workingLatex": "12 \\div 3 = 4", "explanation": "Dividing back by $3$ returns the original $x = 4$, which confirms the working.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["substitution", "expressions", "addition", "positive integer"],
    "questionText": "Find the value of $x + 5$ when $x = 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 7", "explanation": "We replace the letter $x$ with the number it represents and then simplify.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x + 5", "explanation": "The expression tells us to take the value of $x$ and add five to it.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "7 + 5", "explanation": "Putting $7$ in place of $x$ turns the expression into a plain sum.", "diagram": null },
        { "stepNumber": 4, "description": "Carry out the addition.", "workingLatex": "7 + 5 = 12", "explanation": "Adding five to seven gives twelve.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "x + 5 = 12", "explanation": "This is the value of the expression when $x = 7$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by reversing.", "workingLatex": "12 - 5 = 7", "explanation": "Subtracting the five we added returns the original $x = 7$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "expressions", "order of operations", "positive integer"],
    "questionText": "Work out the value of $2x - 1$ when $x = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 6", "explanation": "We swap $x$ for $6$ and then follow the order of operations to finish.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "2x - 1", "explanation": "Here $2x$ means $2$ times $x$, and then one is subtracted from that product.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "2 \\times 6 - 1", "explanation": "Replacing $x$ with $6$ makes the hidden multiplication visible.", "diagram": null },
        { "stepNumber": 4, "description": "Do the multiplication first.", "workingLatex": "2 \\times 6 = 12", "explanation": "Under BIDMAS, multiplication happens before subtraction, so we handle $2 \\times 6$ first.", "diagram": null },
        { "stepNumber": 5, "description": "Now subtract.", "workingLatex": "12 - 1 = 11", "explanation": "Taking one away from twelve leaves eleven.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "2x - 1 = 11", "explanation": "This is the value of the expression when $x = 6$.", "diagram": null }
      ],
      "finalAnswer": "$11$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["substitution", "powers", "squaring", "positive integer"],
    "questionText": "Find the value of $x^{2}$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 5", "explanation": "We replace $x$ with $5$ and then work out the power.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x^{2}", "explanation": "The small $2$ means $x$ is multiplied by itself once, so $x^{2} = x \\times x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "5^{2}", "explanation": "Putting $5$ in place of $x$ gives $5$ squared.", "diagram": null },
        { "stepNumber": 4, "description": "Write the power as a product.", "workingLatex": "5 \\times 5", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply.", "workingLatex": "5 \\times 5 = 25", "explanation": "Five lots of five gives twenty-five.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "x^{2} = 25", "explanation": "This is the value of the expression when $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$25$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["substitution", "division", "expressions", "positive integer"],
    "questionText": "Work out the value of $\\dfrac{x}{2}$ when $x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 10", "explanation": "We replace $x$ with $10$ and then carry out the division.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "\\frac{x}{2}", "explanation": "The fraction bar means \u2018divide by\u2019, so this expression halves the value of $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "\\frac{10}{2}", "explanation": "Putting $10$ on top of the fraction sets up the division we need.", "diagram": null },
        { "stepNumber": 4, "description": "Carry out the division.", "workingLatex": "10 \\div 2 = 5", "explanation": "Sharing ten into two equal parts gives five in each part.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "\\frac{x}{2} = 5", "explanation": "This is the value of the expression when $x = 10$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by reversing.", "workingLatex": "5 \\times 2 = 10", "explanation": "Multiplying the answer by $2$ returns the original $x = 10$, confirming the result.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["substitution", "expressions", "multiplication", "positive integer"],
    "questionText": "Find the value of $5x$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 3", "explanation": "We replace the letter $x$ with $3$ and then evaluate.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "5x", "explanation": "The term $5x$ means $5$ multiplied by $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "5 \\times 3", "explanation": "Putting $3$ in place of $x$ makes the multiplication explicit.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply.", "workingLatex": "5 \\times 3 = 15", "explanation": "Five lots of three gives fifteen.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "5x = 15", "explanation": "This is the value of the expression when $x = 3$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "15 \\div 5 = 3", "explanation": "Dividing back by $5$ recovers $x = 3$, confirming the work.", "diagram": null }
      ],
      "finalAnswer": "$15$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["substitution", "subtraction", "expressions", "positive integer"],
    "questionText": "Work out the value of $x - 3$ when $x = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 9", "explanation": "We replace $x$ with $9$ and simplify what remains.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x - 3", "explanation": "This expression means we take the value of $x$ and subtract three.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "9 - 3", "explanation": "Putting $9$ in for $x$ turns the expression into a simple subtraction.", "diagram": null },
        { "stepNumber": 4, "description": "Carry out the subtraction.", "workingLatex": "9 - 3 = 6", "explanation": "Taking three away from nine leaves six.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "x - 3 = 6", "explanation": "This is the value of the expression when $x = 9$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by reversing.", "workingLatex": "6 + 3 = 9", "explanation": "Adding the three back returns the original $x = 9$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "order of operations", "expressions", "positive integer"],
    "questionText": "Find the value of $4x + 2$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 5", "explanation": "We swap $x$ for $5$ and then follow the order of operations.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "4x + 2", "explanation": "The term $4x$ means $4$ times $x$, and then two is added.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "4 \\times 5 + 2", "explanation": "Replacing $x$ with $5$ reveals the multiplication and addition.", "diagram": null },
        { "stepNumber": 4, "description": "Do the multiplication first.", "workingLatex": "4 \\times 5 = 20", "explanation": "BIDMAS tells us to multiply before adding, so we work out $4 \\times 5$ first.", "diagram": null },
        { "stepNumber": 5, "description": "Now add.", "workingLatex": "20 + 2 = 22", "explanation": "Adding two to twenty gives twenty-two.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "4x + 2 = 22", "explanation": "This is the value of the expression when $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$22$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "subtraction", "order of operations", "positive integer"],
    "questionText": "Work out the value of $10 - x$ when $x = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 6", "explanation": "We replace $x$ with $6$ and then evaluate the expression.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "10 - x", "explanation": "This means we start from ten and subtract the value of $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "10 - 6", "explanation": "Putting $6$ in for $x$ turns this into a plain subtraction.", "diagram": null },
        { "stepNumber": 4, "description": "Carry out the subtraction.", "workingLatex": "10 - 6 = 4", "explanation": "Taking six away from ten leaves four.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "10 - x = 4", "explanation": "This is the value of the expression when $x = 6$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by reversing.", "workingLatex": "4 + 6 = 10", "explanation": "Adding $x$ back on returns the ten we started with, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "powers", "order of operations", "positive integer"],
    "questionText": "Find the value of $x^{2} + 1$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 4", "explanation": "We replace $x$ with $4$ and follow the order of operations.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x^{2} + 1", "explanation": "First we square $x$, then we add one to the result.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "4^{2} + 1", "explanation": "Putting $4$ in place of $x$ gives $4$ squared plus one.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the power first.", "workingLatex": "4^{2} = 16", "explanation": "Under BIDMAS, powers come before addition, so we square first: $4 \\times 4 = 16$.", "diagram": null },
        { "stepNumber": 5, "description": "Now add.", "workingLatex": "16 + 1 = 17", "explanation": "Adding one to sixteen gives seventeen.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "x^{2} + 1 = 17", "explanation": "This is the value of the expression when $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$17$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "order of operations", "expressions", "positive integer"],
    "questionText": "Work out the value of $3x + 4$ when $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 2", "explanation": "We replace $x$ with $2$ and evaluate carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "3x + 4", "explanation": "The term $3x$ means $3$ times $x$, and then four is added on.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "3 \\times 2 + 4", "explanation": "Replacing $x$ with $2$ shows the multiplication and the addition.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "3 \\times 2 = 6", "explanation": "Multiplication is done before addition, so $3 \\times 2$ comes first.", "diagram": null },
        { "stepNumber": 5, "description": "Now add.", "workingLatex": "6 + 4 = 10", "explanation": "Adding four to six gives ten.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "3x + 4 = 10", "explanation": "This is the value of the expression when $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["substitution", "multiplication", "expressions", "positive integer"],
    "questionText": "Find the value of $7x$ when $x = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 8", "explanation": "We swap the letter $x$ for the number $8$ and then evaluate.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "7x", "explanation": "The term $7x$ means $7$ multiplied by $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "7 \\times 8", "explanation": "Putting $8$ in place of $x$ makes the multiplication explicit.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply.", "workingLatex": "7 \\times 8 = 56", "explanation": "Seven lots of eight gives fifty-six.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "7x = 56", "explanation": "This is the value of the expression when $x = 8$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "56 \\div 7 = 8", "explanation": "Dividing back by $7$ recovers $x = 8$, confirming the work.", "diagram": null }
      ],
      "finalAnswer": "$56$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["substitution", "division", "expressions", "positive integer"],
    "questionText": "Work out the value of $\\dfrac{x}{3}$ when $x = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 12", "explanation": "We replace $x$ with $12$ and then divide.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "\\frac{x}{3}", "explanation": "The fraction bar means \u2018divide by three\u2019.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "\\frac{12}{3}", "explanation": "Putting $12$ on top of the fraction sets up the division.", "diagram": null },
        { "stepNumber": 4, "description": "Carry out the division.", "workingLatex": "12 \\div 3 = 4", "explanation": "Sharing twelve into three equal parts gives four in each part.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "\\frac{x}{3} = 4", "explanation": "This is the value of the expression when $x = 12$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by reversing.", "workingLatex": "4 \\times 3 = 12", "explanation": "Multiplying the answer by $3$ returns the original $x = 12$, confirming the result.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "order of operations", "expressions", "positive integer"],
    "questionText": "Find the value of $2x + 7$ when $x = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 9", "explanation": "We replace $x$ with $9$ and follow the order of operations.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "2x + 7", "explanation": "The term $2x$ means $2$ times $x$, and then seven is added.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "2 \\times 9 + 7", "explanation": "Putting $9$ in for $x$ reveals the multiplication and addition.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "2 \\times 9 = 18", "explanation": "Multiplication is carried out before addition.", "diagram": null },
        { "stepNumber": 5, "description": "Now add.", "workingLatex": "18 + 7 = 25", "explanation": "Adding seven to eighteen gives twenty-five.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "2x + 7 = 25", "explanation": "This is the value of the expression when $x = 9$.", "diagram": null }
      ],
      "finalAnswer": "$25$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "powers", "cubes", "positive integer"],
    "questionText": "Work out the value of $x^{3}$ when $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 2", "explanation": "We replace $x$ with $2$ and then work out the power.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x^{3}", "explanation": "The small $3$ means $x$ is multiplied by itself three times: $x \\times x \\times x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "2^{3}", "explanation": "Putting $2$ in place of $x$ gives $2$ cubed.", "diagram": null },
        { "stepNumber": 4, "description": "Write the power as a product.", "workingLatex": "2 \\times 2 \\times 2", "explanation": "Cubing means multiplying the number by itself twice more.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply step by step.", "workingLatex": "2 \\times 2 = 4, \\quad 4 \\times 2 = 8", "explanation": "Working left to right, two times two is four, and four times two is eight.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "x^{3} = 8", "explanation": "This is the value of the expression when $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "order of operations", "subtraction", "positive integer"],
    "questionText": "Find the value of $6x - 5$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 4", "explanation": "We replace $x$ with $4$ and follow the order of operations.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "6x - 5", "explanation": "The term $6x$ means $6$ times $x$, and then five is subtracted.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "6 \\times 4 - 5", "explanation": "Putting $4$ in for $x$ shows the multiplication and subtraction.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "6 \\times 4 = 24", "explanation": "Multiplication comes before subtraction under BIDMAS.", "diagram": null },
        { "stepNumber": 5, "description": "Now subtract.", "workingLatex": "24 - 5 = 19", "explanation": "Taking five from twenty-four leaves nineteen.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "6x - 5 = 19", "explanation": "This is the value of the expression when $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$19$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "powers", "order of operations", "positive integer"],
    "questionText": "Work out the value of $x^{2} - 2$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 5", "explanation": "We replace $x$ with $5$ and follow the order of operations.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x^{2} - 2", "explanation": "First we square $x$, then we subtract two.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "5^{2} - 2", "explanation": "Putting $5$ in place of $x$ gives five squared minus two.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the power first.", "workingLatex": "5^{2} = 25", "explanation": "Powers are dealt with before subtraction, so we square first.", "diagram": null },
        { "stepNumber": 5, "description": "Now subtract.", "workingLatex": "25 - 2 = 23", "explanation": "Taking two from twenty-five leaves twenty-three.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "x^{2} - 2 = 23", "explanation": "This is the value of the expression when $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$23$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "order of operations", "subtraction", "positive integer"],
    "questionText": "Find the value of $8 - 2x$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 3", "explanation": "We replace $x$ with $3$ and then simplify.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "8 - 2x", "explanation": "The term $2x$ means $2$ times $x$, and this product is subtracted from eight.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "8 - 2 \\times 3", "explanation": "Putting $3$ in for $x$ makes the multiplication visible.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "2 \\times 3 = 6", "explanation": "Multiplication is done before subtraction, so we work out $2 \\times 3$ first.", "diagram": null },
        { "stepNumber": 5, "description": "Now subtract.", "workingLatex": "8 - 6 = 2", "explanation": "Taking six away from eight leaves two.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "8 - 2x = 2", "explanation": "This is the value of the expression when $x = 3$.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "division", "order of operations", "positive integer"],
    "questionText": "Work out the value of $\\dfrac{x}{4} + 1$ when $x = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 8", "explanation": "We replace $x$ with $8$ and follow the order of operations.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "\\frac{x}{4} + 1", "explanation": "First we divide $x$ by four, then we add one.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "\\frac{8}{4} + 1", "explanation": "Putting $8$ on top of the fraction sets up the division.", "diagram": null },
        { "stepNumber": 4, "description": "Do the division first.", "workingLatex": "8 \\div 4 = 2", "explanation": "Division is done before addition, so we work out $\\frac{8}{4}$ first.", "diagram": null },
        { "stepNumber": 5, "description": "Now add.", "workingLatex": "2 + 1 = 3", "explanation": "Adding one to two gives three.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "\\frac{x}{4} + 1 = 3", "explanation": "This is the value of the expression when $x = 8$.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["substitution", "multiplication", "expressions", "positive integer"],
    "questionText": "Find the value of $9x$ when $x = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 6", "explanation": "We swap the letter $x$ for $6$ and then evaluate.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "9x", "explanation": "The term $9x$ means $9$ multiplied by $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "9 \\times 6", "explanation": "Putting $6$ in place of $x$ makes the multiplication explicit.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply.", "workingLatex": "9 \\times 6 = 54", "explanation": "Nine lots of six gives fifty-four.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "9x = 54", "explanation": "This is the value of the expression when $x = 6$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "54 \\div 9 = 6", "explanation": "Dividing back by $9$ recovers $x = 6$, confirming the work.", "diagram": null }
      ],
      "finalAnswer": "$54$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "order of operations", "subtraction", "positive integer"],
    "questionText": "Work out the value of $5x - 3$ when $x = 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 7", "explanation": "We replace $x$ with $7$ and follow the order of operations.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "5x - 3", "explanation": "The term $5x$ means $5$ times $x$, and then three is subtracted.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "5 \\times 7 - 3", "explanation": "Putting $7$ in for $x$ reveals the multiplication and subtraction.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "5 \\times 7 = 35", "explanation": "Multiplication is done before subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Now subtract.", "workingLatex": "35 - 3 = 32", "explanation": "Taking three from thirty-five leaves thirty-two.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "5x - 3 = 32", "explanation": "This is the value of the expression when $x = 7$.", "diagram": null }
      ],
      "finalAnswer": "$32$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "powers", "order of operations", "positive integer"],
    "questionText": "Find the value of $x^{2} + x$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 3", "explanation": "We replace every $x$ with $3$ and follow the order of operations.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x^{2} + x", "explanation": "The letter $x$ appears twice, so both occurrences take the value $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "3^{2} + 3", "explanation": "Putting $3$ in for each $x$ gives three squared plus three.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the power first.", "workingLatex": "3^{2} = 9", "explanation": "Powers come before addition, so we square first: $3 \\times 3 = 9$.", "diagram": null },
        { "stepNumber": 5, "description": "Now add.", "workingLatex": "9 + 3 = 12", "explanation": "Adding the remaining three to nine gives twelve.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "x^{2} + x = 12", "explanation": "This is the value of the expression when $x = 3$.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "division", "order of operations", "positive integer"],
    "questionText": "Work out the value of $\\dfrac{3x}{2}$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 4", "explanation": "We replace $x$ with $4$ and then simplify the fraction.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "\\frac{3x}{2}", "explanation": "The top of the fraction is $3x$, meaning three times $x$, and the whole thing is then divided by two.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "\\frac{3 \\times 4}{2}", "explanation": "Putting $4$ in for $x$ makes the top of the fraction a plain product.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the top first.", "workingLatex": "3 \\times 4 = 12", "explanation": "We simplify the numerator before dividing.", "diagram": null },
        { "stepNumber": 5, "description": "Now divide.", "workingLatex": "\\frac{12}{2} = 6", "explanation": "Sharing twelve into two equal parts gives six.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "\\frac{3x}{2} = 6", "explanation": "This is the value of the expression when $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["substitution", "order of operations", "subtraction", "positive integer"],
    "questionText": "Find the value of $100 - 5x$ when $x = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 8", "explanation": "We replace $x$ with $8$ and follow the order of operations.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "100 - 5x", "explanation": "The term $5x$ means $5$ times $x$, and this product is subtracted from one hundred.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "100 - 5 \\times 8", "explanation": "Putting $8$ in for $x$ makes the multiplication visible.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "5 \\times 8 = 40", "explanation": "Multiplication is done before subtraction under BIDMAS.", "diagram": null },
        { "stepNumber": 5, "description": "Now subtract.", "workingLatex": "100 - 40 = 60", "explanation": "Taking forty away from one hundred leaves sixty.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "100 - 5x = 60", "explanation": "This is the value of the expression when $x = 8$.", "diagram": null }
      ],
      "finalAnswer": "$60$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "quadratic expression", "powers", "order of operations"],
    "questionText": "Work out the value of $3x^{2} - 2x + 1$ when $x = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 4", "explanation": "We replace every $x$ with $4$ and then work through the expression using BIDMAS.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "3x^{2} - 2x + 1", "explanation": "This has three parts: a squared term, a linear term, and a constant.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$ into every term.", "workingLatex": "3 \\times 4^{2} - 2 \\times 4 + 1", "explanation": "Each $x$ becomes $4$; keeping brackets in mind helps us apply the power to the right thing.", "diagram": null },
        { "stepNumber": 4, "description": "Deal with the power first.", "workingLatex": "4^{2} = 16", "explanation": "Under BIDMAS, indices come before multiplication, so we square the $4$ before multiplying by $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the first term.", "workingLatex": "3 \\times 16 = 48", "explanation": "Now the squared value can be multiplied by its coefficient $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the middle term.", "workingLatex": "2 \\times 4 = 8", "explanation": "The linear term $2x$ becomes $2 \\times 4 = 8$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the expression with the numbers.", "workingLatex": "48 - 8 + 1", "explanation": "Replacing each term with its value leaves a simple left-to-right calculation.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "48 - 8 = 40", "explanation": "Working left to right, we first take eight from forty-eight.", "diagram": null },
        { "stepNumber": 9, "description": "Add the constant.", "workingLatex": "40 + 1 = 41", "explanation": "Finally we add the one on the end.", "diagram": null },
        { "stepNumber": 10, "description": "State the result.", "workingLatex": "3x^{2} - 2x + 1 = 41", "explanation": "This is the value of the expression when $x = 4$.", "diagram": null }
      ],
      "finalAnswer": "$41$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "brackets", "order of operations", "expressions"],
    "questionText": "Work out the value of $2(x + 3)$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 5", "explanation": "We replace $x$ with $5$ and then simplify, being careful with the brackets.", "diagram": null },
        { "stepNumber": 2, "description": "Note the structure of the expression.", "workingLatex": "2(x + 3)", "explanation": "The bracket $(x + 3)$ is worked out first, then multiplied by the $2$ in front.", "diagram": null },
        { "stepNumber": 3, "description": "Write down the expression.", "workingLatex": "2(x + 3)", "explanation": "Keeping the bracket in place reminds us to add before we multiply.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the value of $x$.", "workingLatex": "2(5 + 3)", "explanation": "Putting $5$ in for $x$ fills in the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Focus on the bracket first.", "workingLatex": "(5 + 3)", "explanation": "BIDMAS tells us brackets are the very first thing to evaluate.", "diagram": null },
        { "stepNumber": 6, "description": "Add inside the bracket.", "workingLatex": "5 + 3 = 8", "explanation": "Adding five and three gives eight.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the expression.", "workingLatex": "2 \\times 8", "explanation": "With the bracket done, only the multiplication remains.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply.", "workingLatex": "2 \\times 8 = 16", "explanation": "Two lots of eight gives sixteen.", "diagram": null },
        { "stepNumber": 9, "description": "State the result.", "workingLatex": "2(x + 3) = 16", "explanation": "This is the value of the expression when $x = 5$.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "brackets", "squaring", "order of operations"],
    "questionText": "Work out the value of $(x + 1)^{2}$ when $x = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 6", "explanation": "We replace $x$ with $6$ and then evaluate, respecting the bracket and the power.", "diagram": null },
        { "stepNumber": 2, "description": "Note the structure of the expression.", "workingLatex": "(x + 1)^{2}", "explanation": "The whole bracket is squared, so we must finish the addition inside before applying the power.", "diagram": null },
        { "stepNumber": 3, "description": "Write down the expression.", "workingLatex": "(x + 1)^{2}", "explanation": "The bracket keeps the $x + 1$ together as one quantity.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the value of $x$.", "workingLatex": "(6 + 1)^{2}", "explanation": "Putting $6$ in for $x$ fills in the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the bracket first.", "workingLatex": "6 + 1 = 7", "explanation": "Brackets come before powers, so we add inside first.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite with the bracket done.", "workingLatex": "7^{2}", "explanation": "Now the single value $7$ is what gets squared.", "diagram": null },
        { "stepNumber": 7, "description": "Write the power as a product.", "workingLatex": "7 \\times 7", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply.", "workingLatex": "7 \\times 7 = 49", "explanation": "Seven lots of seven gives forty-nine.", "diagram": null },
        { "stepNumber": 9, "description": "State the result.", "workingLatex": "(x + 1)^{2} = 49", "explanation": "This is the value of the expression when $x = 6$.", "diagram": null }
      ],
      "finalAnswer": "$49$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "negative numbers", "order of operations", "expressions"],
    "questionText": "Work out the value of $5x - 2$ when $x = -3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = -3", "explanation": "We replace $x$ with $-3$; it is safest to write the negative value inside a bracket.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "5x - 2", "explanation": "The term $5x$ means $5$ times $x$, and then two is subtracted.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "5 \\times (-3) - 2", "explanation": "Using a bracket around $-3$ keeps the negative sign attached to the number.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "5 \\times (-3) = -15", "explanation": "A positive times a negative gives a negative, so five lots of minus three is minus fifteen.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "-15 - 2", "explanation": "Now only the subtraction is left.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract.", "workingLatex": "-15 - 2 = -17", "explanation": "Starting at minus fifteen and going two further down the number line reaches minus seventeen.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "5x - 2 = -17", "explanation": "This is the value of the expression when $x = -3$.", "diagram": null },
        { "stepNumber": 8, "description": "Sense-check the sign.", "workingLatex": "x < 0 \\Rightarrow 5x < 0", "explanation": "A negative $x$ makes $5x$ negative, and subtracting two makes it more negative, so a negative answer is expected.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final value.", "workingLatex": "-17", "explanation": "The reasoning and the arithmetic agree, so the answer stands.", "diagram": null }
      ],
      "finalAnswer": "$-17$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "negative numbers", "powers", "order of operations"],
    "questionText": "Work out the value of $x^{2} + 2x$ when $x = -4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = -4", "explanation": "We replace both $x$ terms with $-4$, using brackets to protect the negative sign.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x^{2} + 2x", "explanation": "There is a squared term and a linear term, both involving $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "(-4)^{2} + 2 \\times (-4)", "explanation": "Writing $(-4)^{2}$ makes clear the whole $-4$ is being squared.", "diagram": null },
        { "stepNumber": 4, "description": "Square the negative number.", "workingLatex": "(-4)^{2} = 16", "explanation": "A negative times a negative is positive, so $(-4) \\times (-4) = 16$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the linear term.", "workingLatex": "2 \\times (-4) = -8", "explanation": "A positive times a negative gives a negative, so this term is minus eight.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "16 + (-8)", "explanation": "Adding a negative is the same as subtracting.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify.", "workingLatex": "16 - 8 = 8", "explanation": "Taking eight from sixteen leaves eight.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "x^{2} + 2x = 8", "explanation": "This is the value of the expression when $x = -4$.", "diagram": null },
        { "stepNumber": 9, "description": "Sense-check the squaring.", "workingLatex": "(-4)^{2} = 16 \\ne -16", "explanation": "Remembering that squaring a negative gives a positive is the key to getting this right.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "two variables", "order of operations", "expressions"],
    "questionText": "Work out the value of $3a + 2b$ when $a = 4$ and $b = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "a = 4, \\quad b = 5", "explanation": "This expression has two different letters, each with its own value to substitute.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "3a + 2b", "explanation": "The term $3a$ means $3$ times $a$, and $2b$ means $2$ times $b$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute both values.", "workingLatex": "3 \\times 4 + 2 \\times 5", "explanation": "We replace $a$ with $4$ and $b$ with $5$ at the same time.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the first term.", "workingLatex": "3 \\times 4 = 12", "explanation": "Multiplication is done before addition, so we handle $3a$ first.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the second term.", "workingLatex": "2 \\times 5 = 10", "explanation": "Similarly, the term $2b$ becomes $2 \\times 5 = 10$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "12 + 10", "explanation": "With both products known, only the addition remains.", "diagram": null },
        { "stepNumber": 7, "description": "Add.", "workingLatex": "12 + 10 = 22", "explanation": "Adding twelve and ten gives twenty-two.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "3a + 2b = 22", "explanation": "This is the value of the expression when $a = 4$ and $b = 5$.", "diagram": null },
        { "stepNumber": 9, "description": "Check the terms are in the right place.", "workingLatex": "3(4) = 12, \\ 2(5) = 10", "explanation": "Matching each coefficient to its own letter avoids mixing the values up.", "diagram": null }
      ],
      "finalAnswer": "$22$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "three variables", "order of operations", "expressions"],
    "questionText": "Work out the value of $ab - c$ when $a = 3$, $b = 6$ and $c = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "a = 3, \\ b = 6, \\ c = 5", "explanation": "Three letters means three values to substitute; we keep track of which is which.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "ab - c", "explanation": "Two letters written together, $ab$, means $a$ multiplied by $b$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the values.", "workingLatex": "3 \\times 6 - 5", "explanation": "We replace $a$ with $3$, $b$ with $6$ and $c$ with $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the product first.", "workingLatex": "3 \\times 6 = 18", "explanation": "Multiplication comes before subtraction, so we find $ab$ first.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "18 - 5", "explanation": "Now only the subtraction of $c$ is left.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract.", "workingLatex": "18 - 5 = 13", "explanation": "Taking five from eighteen leaves thirteen.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "ab - c = 13", "explanation": "This is the value of the expression when $a = 3$, $b = 6$ and $c = 5$.", "diagram": null },
        { "stepNumber": 8, "description": "Check the multiplication is done before subtracting.", "workingLatex": "3 \\times 6 - 5 \\ne 3 \\times (6 - 5)", "explanation": "Following BIDMAS matters: subtracting first would give the wrong answer.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final value.", "workingLatex": "13", "explanation": "The order of operations and the arithmetic both support this answer.", "diagram": null }
      ],
      "finalAnswer": "$13$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "negative numbers", "powers", "order of operations"],
    "questionText": "Work out the value of $x^{2} - 3x$ when $x = -2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = -2", "explanation": "We replace both $x$ terms with $-2$, using brackets to keep the negative sign safe.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x^{2} - 3x", "explanation": "There is a squared term and a linear term, both involving $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "(-2)^{2} - 3 \\times (-2)", "explanation": "Brackets make it clear the whole $-2$ is squared and multiplied.", "diagram": null },
        { "stepNumber": 4, "description": "Square the negative number.", "workingLatex": "(-2)^{2} = 4", "explanation": "A negative times a negative is positive, so $(-2) \\times (-2) = 4$.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the linear term.", "workingLatex": "3 \\times (-2) = -6", "explanation": "A positive times a negative is negative, so $3x$ becomes minus six.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "4 - (-6)", "explanation": "The expression subtracts the term $3x$, and that term is itself negative.", "diagram": null },
        { "stepNumber": 7, "description": "Handle the double negative.", "workingLatex": "4 - (-6) = 4 + 6", "explanation": "Subtracting a negative is the same as adding, which is the trickiest part of this question.", "diagram": null },
        { "stepNumber": 8, "description": "Add.", "workingLatex": "4 + 6 = 10", "explanation": "Adding six to four gives ten.", "diagram": null },
        { "stepNumber": 9, "description": "State the result.", "workingLatex": "x^{2} - 3x = 10", "explanation": "This is the value of the expression when $x = -2$.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "decimals", "order of operations", "expressions"],
    "questionText": "Work out the value of $4x + 1$ when $x = 2.5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 2.5", "explanation": "We replace $x$ with the decimal $2.5$ and then evaluate carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "4x + 1", "explanation": "The term $4x$ means $4$ times $x$, and then one is added.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "4 \\times 2.5 + 1", "explanation": "Putting $2.5$ in for $x$ makes the multiplication and addition explicit.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "4 \\times 2.5 = 10", "explanation": "Four lots of two-and-a-half is ten; you can think of it as $4 \\times 2 = 8$ plus $4 \\times 0.5 = 2$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "10 + 1", "explanation": "With the product known, only the addition is left.", "diagram": null },
        { "stepNumber": 6, "description": "Add.", "workingLatex": "10 + 1 = 11", "explanation": "Adding one to ten gives eleven.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "4x + 1 = 11", "explanation": "This is the value of the expression when $x = 2.5$.", "diagram": null },
        { "stepNumber": 8, "description": "Sense-check the size.", "workingLatex": "2.5 \\text{ is between } 2 \\text{ and } 3", "explanation": "Since $4 \\times 2 + 1 = 9$ and $4 \\times 3 + 1 = 13$, an answer of $11$ sits sensibly between them.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final value.", "workingLatex": "11", "explanation": "The estimate and the exact calculation agree, so the answer stands.", "diagram": null }
      ],
      "finalAnswer": "$11$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "decimals", "order of operations", "expressions"],
    "questionText": "Work out the value of $0.5x + 3$ when $x = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 8", "explanation": "We replace $x$ with $8$; the coefficient here is the decimal $0.5$.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "0.5x + 3", "explanation": "Multiplying by $0.5$ is the same as halving, and then three is added.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "0.5 \\times 8 + 3", "explanation": "Putting $8$ in for $x$ makes the calculation explicit.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "0.5 \\times 8 = 4", "explanation": "Since $0.5$ means one half, half of eight is four.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "4 + 3", "explanation": "With the product known, only the addition is left.", "diagram": null },
        { "stepNumber": 6, "description": "Add.", "workingLatex": "4 + 3 = 7", "explanation": "Adding three to four gives seven.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "0.5x + 3 = 7", "explanation": "This is the value of the expression when $x = 8$.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret the coefficient.", "workingLatex": "0.5x = \\tfrac{1}{2}x", "explanation": "Recognising $0.5$ as a half makes the multiplication quick and reliable.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final value.", "workingLatex": "7", "explanation": "The result matches our reasoning, so the answer stands.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "fractions", "multiplication", "expressions"],
    "questionText": "Work out the value of $6x$ when $x = \\dfrac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = \\frac{1}{2}", "explanation": "We replace $x$ with the fraction one half and then multiply.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "6x", "explanation": "The term $6x$ means $6$ multiplied by $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "6 \\times \\frac{1}{2}", "explanation": "Putting one half in for $x$ turns this into multiplying a whole number by a fraction.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the whole number by the fraction.", "workingLatex": "6 \\times \\frac{1}{2} = \\frac{6}{2}", "explanation": "Multiplying by a fraction multiplies the numerator, so $6 \\times \\frac{1}{2} = \\frac{6 \\times 1}{2}$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the fraction.", "workingLatex": "\\frac{6}{2} = 3", "explanation": "Six divided by two is three.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "6x = 3", "explanation": "This is the value of the expression when $x = \\frac{1}{2}$.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret the multiplication.", "workingLatex": "6 \\times \\tfrac{1}{2} = \\text{half of } 6", "explanation": "Multiplying by a half is the same as halving, and half of six is three.", "diagram": null },
        { "stepNumber": 8, "description": "Sense-check the size.", "workingLatex": "0 < \\tfrac{1}{2} < 1", "explanation": "Multiplying by a value less than one makes the result smaller than $6$, which fits an answer of $3$.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final value.", "workingLatex": "3", "explanation": "Both methods give the same result, so the answer stands.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "negative numbers", "powers", "order of operations"],
    "questionText": "Work out the value of $2x^{2} + 1$ when $x = -3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = -3", "explanation": "We replace $x$ with $-3$, using a bracket so the negative is squared correctly.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "2x^{2} + 1", "explanation": "Here $x$ is squared first, then multiplied by $2$, then one is added.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "2 \\times (-3)^{2} + 1", "explanation": "The bracket makes clear that the whole $-3$ is being squared.", "diagram": null },
        { "stepNumber": 4, "description": "Square the negative number first.", "workingLatex": "(-3)^{2} = 9", "explanation": "Under BIDMAS, indices come before multiplication, and a negative squared is positive.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by the coefficient.", "workingLatex": "2 \\times 9 = 18", "explanation": "Now the squared value is multiplied by $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "18 + 1", "explanation": "Only the addition of the constant remains.", "diagram": null },
        { "stepNumber": 7, "description": "Add.", "workingLatex": "18 + 1 = 19", "explanation": "Adding one to eighteen gives nineteen.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "2x^{2} + 1 = 19", "explanation": "This is the value of the expression when $x = -3$.", "diagram": null },
        { "stepNumber": 9, "description": "Highlight the common slip.", "workingLatex": "2 \\times (-3)^{2} \\ne (2 \\times -3)^{2}", "explanation": "Only the $x$ is squared, not the coefficient, so squaring must happen before multiplying by $2$.", "diagram": null }
      ],
      "finalAnswer": "$19$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "formula", "perimeter", "two variables"],
    "questionText": "The perimeter of a rectangle is given by $P = 2(l + w)$. Work out $P$ when $l = 7$ and $w = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "P = 2(l + w)", "explanation": "The perimeter is twice the sum of the length and width, because a rectangle has two lengths and two widths.", "diagram": null },
        { "stepNumber": 2, "description": "Note the given values.", "workingLatex": "l = 7, \\quad w = 4", "explanation": "These are the two measurements we substitute into the formula.", "diagram": null },
        { "stepNumber": 3, "description": "Write down the formula.", "workingLatex": "P = 2(l + w)", "explanation": "The bracket must be worked out before multiplying by two.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the values.", "workingLatex": "P = 2(7 + 4)", "explanation": "We replace $l$ with $7$ and $w$ with $4$ inside the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the bracket first.", "workingLatex": "7 + 4 = 11", "explanation": "Brackets are the first thing to evaluate under BIDMAS.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the formula.", "workingLatex": "P = 2 \\times 11", "explanation": "With the bracket done, only the multiplication is left.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply.", "workingLatex": "2 \\times 11 = 22", "explanation": "Two lots of eleven gives twenty-two.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "P = 22", "explanation": "The perimeter of the rectangle is $22$ units.", "diagram": null },
        { "stepNumber": 9, "description": "Check by adding all four sides.", "workingLatex": "7 + 4 + 7 + 4 = 22", "explanation": "Adding the four sides directly gives the same total, confirming the formula worked correctly.", "diagram": null }
      ],
      "finalAnswer": "$P = 22$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "formula", "area", "decimals"],
    "questionText": "The area of a rectangle is given by $A = lw$. Work out $A$ when $l = 8$ and $w = 3.5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "A = lw", "explanation": "The area of a rectangle is its length multiplied by its width.", "diagram": null },
        { "stepNumber": 2, "description": "Note the given values.", "workingLatex": "l = 8, \\quad w = 3.5", "explanation": "These are the two measurements to substitute.", "diagram": null },
        { "stepNumber": 3, "description": "Write down the formula.", "workingLatex": "A = l \\times w", "explanation": "The letters written together mean length times width.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the values.", "workingLatex": "A = 8 \\times 3.5", "explanation": "We replace $l$ with $8$ and $w$ with $3.5$.", "diagram": null },
        { "stepNumber": 5, "description": "Split the decimal to multiply.", "workingLatex": "8 \\times 3 = 24, \\quad 8 \\times 0.5 = 4", "explanation": "Breaking $3.5$ into $3 + 0.5$ makes the multiplication easier to do accurately.", "diagram": null },
        { "stepNumber": 6, "description": "Add the two parts.", "workingLatex": "24 + 4 = 28", "explanation": "Recombining the parts gives the full product.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "A = 28", "explanation": "The area of the rectangle is $28$ square units.", "diagram": null },
        { "stepNumber": 8, "description": "Sense-check the size.", "workingLatex": "8 \\times 3 = 24, \\ 8 \\times 4 = 32", "explanation": "Since $3.5$ is between $3$ and $4$, an area of $28$ sits sensibly between $24$ and $32$.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final value.", "workingLatex": "28", "explanation": "The estimate and the exact answer agree, so the result stands.", "diagram": null }
      ],
      "finalAnswer": "$A = 28$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "formula", "area", "triangle"],
    "questionText": "The area of a triangle is given by $A = \\tfrac{1}{2}bh$. Work out $A$ when $b = 10$ and $h = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "A = \\tfrac{1}{2}bh", "explanation": "A triangle fills half of the rectangle around it, so its area is half the base times the height.", "diagram": null },
        { "stepNumber": 2, "description": "Note the given values.", "workingLatex": "b = 10, \\quad h = 6", "explanation": "These are the base and height to substitute.", "diagram": null },
        { "stepNumber": 3, "description": "Write down the formula.", "workingLatex": "A = \\tfrac{1}{2} \\times b \\times h", "explanation": "The formula multiplies a half, the base and the height together.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the values.", "workingLatex": "A = \\tfrac{1}{2} \\times 10 \\times 6", "explanation": "We replace $b$ with $10$ and $h$ with $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the base and height first.", "workingLatex": "10 \\times 6 = 60", "explanation": "It is often easiest to multiply the two whole numbers before halving.", "diagram": null },
        { "stepNumber": 6, "description": "Now take a half.", "workingLatex": "\\tfrac{1}{2} \\times 60 = 30", "explanation": "Half of sixty is thirty.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "A = 30", "explanation": "The area of the triangle is $30$ square units.", "diagram": null },
        { "stepNumber": 8, "description": "Check with the surrounding rectangle.", "workingLatex": "10 \\times 6 = 60, \\ \\tfrac{1}{2}(60) = 30", "explanation": "The triangle is half of a $10$ by $6$ rectangle, and half of $60$ is $30$, confirming the answer.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final value.", "workingLatex": "30", "explanation": "The formula and the picture agree, so the answer stands.", "diagram": null }
      ],
      "finalAnswer": "$A = 30$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "formula", "speed", "division"],
    "questionText": "Speed is given by the formula $\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}$. A car travels $150$ km in $3$ hours. Work out its speed in km/h.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "\\text{speed} = \\frac{\\text{distance}}{\\text{time}}", "explanation": "Speed measures how much distance is covered in each unit of time, so we divide distance by time.", "diagram": null },
        { "stepNumber": 2, "description": "Note the given values.", "workingLatex": "\\text{distance} = 150, \\ \\text{time} = 3", "explanation": "The car covers $150$ km in $3$ hours.", "diagram": null },
        { "stepNumber": 3, "description": "Write down the formula.", "workingLatex": "\\text{speed} = \\frac{\\text{distance}}{\\text{time}}", "explanation": "We keep the fraction form so we can substitute directly.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the values.", "workingLatex": "\\text{speed} = \\frac{150}{3}", "explanation": "Distance goes on top and time goes on the bottom.", "diagram": null },
        { "stepNumber": 5, "description": "Carry out the division.", "workingLatex": "150 \\div 3 = 50", "explanation": "Dividing one hundred and fifty into three equal parts gives fifty in each.", "diagram": null },
        { "stepNumber": 6, "description": "Attach the units.", "workingLatex": "\\text{speed} = 50 \\text{ km/h}", "explanation": "Since distance was in km and time in hours, the speed is in kilometres per hour.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "50 \\text{ km/h}", "explanation": "The car is travelling at fifty kilometres per hour.", "diagram": null },
        { "stepNumber": 8, "description": "Check by reversing.", "workingLatex": "50 \\times 3 = 150", "explanation": "Travelling at $50$ km/h for $3$ hours covers $150$ km, matching the question.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final value.", "workingLatex": "50 \\text{ km/h}", "explanation": "The check confirms the calculation, so the answer stands.", "diagram": null }
      ],
      "finalAnswer": "$50 \\text{ km/h}$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "brackets", "order of operations", "expressions"],
    "questionText": "Work out the value of $4(2x - 1)$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 3", "explanation": "We replace $x$ with $3$ and then simplify, working inside the bracket first.", "diagram": null },
        { "stepNumber": 2, "description": "Note the structure of the expression.", "workingLatex": "4(2x - 1)", "explanation": "The bracket $(2x - 1)$ is evaluated first, then multiplied by the $4$ outside.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "4(2 \\times 3 - 1)", "explanation": "We replace $x$ with $3$ inside the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply inside the bracket first.", "workingLatex": "2 \\times 3 = 6", "explanation": "Within the bracket, BIDMAS still applies, so the multiplication comes before the subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract inside the bracket.", "workingLatex": "6 - 1 = 5", "explanation": "Now the bracket simplifies to five.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "4 \\times 5", "explanation": "With the bracket done, only the outer multiplication remains.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply.", "workingLatex": "4 \\times 5 = 20", "explanation": "Four lots of five gives twenty.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "4(2x - 1) = 20", "explanation": "This is the value of the expression when $x = 3$.", "diagram": null },
        { "stepNumber": 9, "description": "Check by expanding first.", "workingLatex": "4(2x - 1) = 8x - 4 = 8(3) - 4 = 20", "explanation": "Multiplying out the bracket before substituting gives the same answer, confirming the result.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "two variables", "powers", "difference of squares"],
    "questionText": "Work out the value of $x^{2} - y^{2}$ when $x = 5$ and $y = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 5, \\quad y = 3", "explanation": "Two letters are each squared, so we substitute both values carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "x^{2} - y^{2}", "explanation": "We square $x$, square $y$, then subtract the second from the first.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute both values.", "workingLatex": "5^{2} - 3^{2}", "explanation": "We replace $x$ with $5$ and $y$ with $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the first value.", "workingLatex": "5^{2} = 25", "explanation": "Five multiplied by itself is twenty-five.", "diagram": null },
        { "stepNumber": 5, "description": "Square the second value.", "workingLatex": "3^{2} = 9", "explanation": "Three multiplied by itself is nine.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "25 - 9", "explanation": "With both squares known, only the subtraction is left.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract.", "workingLatex": "25 - 9 = 16", "explanation": "Taking nine from twenty-five leaves sixteen.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "x^{2} - y^{2} = 16", "explanation": "This is the value of the expression when $x = 5$ and $y = 3$.", "diagram": null },
        { "stepNumber": 9, "description": "Check using factorisation.", "workingLatex": "(x - y)(x + y) = (2)(8) = 16", "explanation": "The identity $x^{2} - y^{2} = (x - y)(x + y)$ gives $2 \\times 8 = 16$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "three variables", "order of operations", "expressions"],
    "questionText": "Work out the value of $3x + 2y - z$ when $x = 2$, $y = 4$ and $z = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 2, \\ y = 4, \\ z = 5", "explanation": "Three letters each have their own value; we substitute them all at once.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "3x + 2y - z", "explanation": "There are two multiplied terms and one single letter to subtract.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the values.", "workingLatex": "3 \\times 2 + 2 \\times 4 - 5", "explanation": "Each letter is replaced by its number in the correct place.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the first term.", "workingLatex": "3 \\times 2 = 6", "explanation": "The term $3x$ becomes six.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the second term.", "workingLatex": "2 \\times 4 = 8", "explanation": "The term $2y$ becomes eight.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "6 + 8 - 5", "explanation": "Replacing each term with its value leaves a left-to-right calculation.", "diagram": null },
        { "stepNumber": 7, "description": "Add the first two.", "workingLatex": "6 + 8 = 14", "explanation": "Working left to right, we add six and eight first.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract the last term.", "workingLatex": "14 - 5 = 9", "explanation": "Finally we subtract the value of $z$.", "diagram": null },
        { "stepNumber": 9, "description": "State the result.", "workingLatex": "3x + 2y - z = 9", "explanation": "This is the value of the expression for the given values.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm the term matching.", "workingLatex": "3(2) + 2(4) - 5", "explanation": "Checking each coefficient is paired with the right letter guards against mixing up the values.", "diagram": null }
      ],
      "finalAnswer": "$9$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "brackets", "squaring", "order of operations"],
    "questionText": "Work out the value of $(2x)^{2}$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 3", "explanation": "We replace $x$ with $3$, noting that the whole of $2x$ is inside the bracket that is squared.", "diagram": null },
        { "stepNumber": 2, "description": "Note the structure.", "workingLatex": "(2x)^{2}", "explanation": "The bracket means both the $2$ and the $x$ are squared, not just the $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "(2 \\times 3)^{2}", "explanation": "We replace $x$ with $3$ inside the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the bracket first.", "workingLatex": "2 \\times 3 = 6", "explanation": "Brackets come before powers, so we finish the multiplication inside first.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite with the bracket done.", "workingLatex": "6^{2}", "explanation": "Now the single value $6$ is what gets squared.", "diagram": null },
        { "stepNumber": 6, "description": "Write the power as a product.", "workingLatex": "6 \\times 6", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply.", "workingLatex": "6 \\times 6 = 36", "explanation": "Six lots of six gives thirty-six.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "(2x)^{2} = 36", "explanation": "This is the value of the expression when $x = 3$.", "diagram": null },
        { "stepNumber": 9, "description": "Compare with a common mistake.", "workingLatex": "(2x)^{2} = 36 \\ne 2x^{2} = 18", "explanation": "Because the bracket squares the $2$ as well, the answer is different from $2x^{2}$.", "diagram": null }
      ],
      "finalAnswer": "$36$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "fractions", "two variables", "order of operations"],
    "questionText": "Work out the value of $\\dfrac{x}{2} + \\dfrac{y}{3}$ when $x = 6$ and $y = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 6, \\quad y = 9", "explanation": "Each fraction has its own variable, so we substitute both values.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "\\frac{x}{2} + \\frac{y}{3}", "explanation": "We divide $x$ by two, divide $y$ by three, then add the results.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the values.", "workingLatex": "\\frac{6}{2} + \\frac{9}{3}", "explanation": "We replace $x$ with $6$ and $y$ with $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the first fraction.", "workingLatex": "\\frac{6}{2} = 3", "explanation": "Six divided by two is three.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the second fraction.", "workingLatex": "\\frac{9}{3} = 3", "explanation": "Nine divided by three is three.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "3 + 3", "explanation": "With both divisions done, only the addition remains.", "diagram": null },
        { "stepNumber": 7, "description": "Add.", "workingLatex": "3 + 3 = 6", "explanation": "Adding three and three gives six.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "\\frac{x}{2} + \\frac{y}{3} = 6", "explanation": "This is the value of the expression when $x = 6$ and $y = 9$.", "diagram": null },
        { "stepNumber": 9, "description": "Check each division separately.", "workingLatex": "3 \\times 2 = 6, \\ 3 \\times 3 = 9", "explanation": "Reversing each division returns the original values, confirming the work.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "powers", "negative result", "order of operations"],
    "questionText": "Work out the value of $-x^{2} + 4$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 3", "explanation": "We replace $x$ with $3$; the key is that $-x^{2}$ means the negative of $x$ squared.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the expression carefully.", "workingLatex": "-x^{2} = -(x^{2})", "explanation": "The square applies to $x$ first, and the minus sign is applied afterwards.", "diagram": null },
        { "stepNumber": 3, "description": "Write down the expression.", "workingLatex": "-x^{2} + 4", "explanation": "We square $x$, make it negative, then add four.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the value of $x$.", "workingLatex": "-(3)^{2} + 4", "explanation": "We replace $x$ with $3$, keeping the minus sign outside the square.", "diagram": null },
        { "stepNumber": 5, "description": "Square the value first.", "workingLatex": "3^{2} = 9", "explanation": "Under BIDMAS, the power is evaluated before the sign is applied.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the minus sign.", "workingLatex": "-(9) = -9", "explanation": "The negative in front makes the squared term minus nine.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the expression.", "workingLatex": "-9 + 4", "explanation": "Now only the addition of four is left.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify.", "workingLatex": "-9 + 4 = -5", "explanation": "Starting at minus nine and moving four to the right reaches minus five.", "diagram": null },
        { "stepNumber": 9, "description": "State the result.", "workingLatex": "-x^{2} + 4 = -5", "explanation": "This is the value of the expression when $x = 3$.", "diagram": null },
        { "stepNumber": 10, "description": "Highlight the common slip.", "workingLatex": "-x^{2} \\ne (-x)^{2}", "explanation": "There is no bracket, so we do not square the minus sign; that is why the result is negative.", "diagram": null }
      ],
      "finalAnswer": "$-5$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "negative numbers", "order of operations", "expressions"],
    "questionText": "Work out the value of $5 - 2x$ when $x = -4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = -4", "explanation": "We replace $x$ with $-4$, using a bracket to keep the negative sign attached.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "5 - 2x", "explanation": "The term $2x$ means $2$ times $x$, and this is subtracted from five.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "5 - 2 \\times (-4)", "explanation": "The bracket around $-4$ prevents sign errors.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "2 \\times (-4) = -8", "explanation": "A positive times a negative is negative, so $2x$ is minus eight here.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "5 - (-8)", "explanation": "We are subtracting the term $2x$, which has come out negative.", "diagram": null },
        { "stepNumber": 6, "description": "Handle the double negative.", "workingLatex": "5 - (-8) = 5 + 8", "explanation": "Subtracting a negative is the same as adding, which is the crucial step here.", "diagram": null },
        { "stepNumber": 7, "description": "Add.", "workingLatex": "5 + 8 = 13", "explanation": "Adding eight to five gives thirteen.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "5 - 2x = 13", "explanation": "This is the value of the expression when $x = -4$.", "diagram": null },
        { "stepNumber": 9, "description": "Sense-check.", "workingLatex": "x < 0 \\Rightarrow -2x > 0", "explanation": "A negative $x$ makes $-2x$ positive, so the answer is larger than five, which fits.", "diagram": null }
      ],
      "finalAnswer": "$13$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "two variables", "powers", "Pythagoras"],
    "questionText": "Work out the value of $a^{2} + b^{2}$ when $a = 3$ and $b = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "a = 3, \\quad b = 4", "explanation": "Both letters are squared, then the results are added.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "a^{2} + b^{2}", "explanation": "We square each letter separately before adding.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute both values.", "workingLatex": "3^{2} + 4^{2}", "explanation": "We replace $a$ with $3$ and $b$ with $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the first value.", "workingLatex": "3^{2} = 9", "explanation": "Three multiplied by itself is nine.", "diagram": null },
        { "stepNumber": 5, "description": "Square the second value.", "workingLatex": "4^{2} = 16", "explanation": "Four multiplied by itself is sixteen.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the expression.", "workingLatex": "9 + 16", "explanation": "With both squares known, only the addition is left.", "diagram": null },
        { "stepNumber": 7, "description": "Add.", "workingLatex": "9 + 16 = 25", "explanation": "Adding nine and sixteen gives twenty-five.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "a^{2} + b^{2} = 25", "explanation": "This is the value of the expression when $a = 3$ and $b = 4$.", "diagram": null },
        { "stepNumber": 9, "description": "Connect to Pythagoras.", "workingLatex": "3^{2} + 4^{2} = 5^{2}", "explanation": "This is the famous $3$, $4$, $5$ triangle, since twenty-five is $5$ squared.", "diagram": null }
      ],
      "finalAnswer": "$25$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "brackets", "two variables", "squaring"],
    "questionText": "Work out the value of $2(x + y)^{2}$ when $x = 1$ and $y = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 1, \\quad y = 2", "explanation": "We substitute both values, then work bracket, then power, then multiply.", "diagram": null },
        { "stepNumber": 2, "description": "Note the order of operations.", "workingLatex": "2(x + y)^{2}", "explanation": "Brackets first, then the square, then multiply by the $2$ in front.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the values.", "workingLatex": "2(1 + 2)^{2}", "explanation": "We replace $x$ with $1$ and $y$ with $2$ inside the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the bracket first.", "workingLatex": "1 + 2 = 3", "explanation": "Brackets are always evaluated before powers.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite with the bracket done.", "workingLatex": "2 \\times 3^{2}", "explanation": "Now the value $3$ is what gets squared.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the power.", "workingLatex": "3^{2} = 9", "explanation": "The square is done before the multiplication under BIDMAS.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the expression.", "workingLatex": "2 \\times 9", "explanation": "Only the multiplication by two remains.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply.", "workingLatex": "2 \\times 9 = 18", "explanation": "Two lots of nine gives eighteen.", "diagram": null },
        { "stepNumber": 9, "description": "State the result.", "workingLatex": "2(x + y)^{2} = 18", "explanation": "This is the value of the expression when $x = 1$ and $y = 2$.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm the ordering.", "workingLatex": "2(3)^{2} \\ne (2 \\times 3)^{2}", "explanation": "The $2$ multiplies after the square, so we must not square it as well.", "diagram": null }
      ],
      "finalAnswer": "$18$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["substitution", "decimals", "order of operations", "expressions"],
    "questionText": "Work out the value of $3.2x - 1.5$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 5", "explanation": "We replace $x$ with $5$; the expression uses decimal numbers throughout.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "3.2x - 1.5", "explanation": "The term $3.2x$ means $3.2$ times $x$, and then $1.5$ is subtracted.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "3.2 \\times 5 - 1.5", "explanation": "Putting $5$ in for $x$ makes the multiplication explicit.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply first.", "workingLatex": "3.2 \\times 5 = 16", "explanation": "You can think of it as $3 \\times 5 = 15$ plus $0.2 \\times 5 = 1$, giving sixteen.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "16 - 1.5", "explanation": "With the product known, only the subtraction remains.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract.", "workingLatex": "16 - 1.5 = 14.5", "explanation": "Taking one-and-a-half from sixteen leaves fourteen-and-a-half.", "diagram": null },
        { "stepNumber": 7, "description": "State the result.", "workingLatex": "3.2x - 1.5 = 14.5", "explanation": "This is the value of the expression when $x = 5$.", "diagram": null },
        { "stepNumber": 8, "description": "Sense-check the size.", "workingLatex": "16 - 2 = 14, \\ 16 - 1 = 15", "explanation": "Subtracting $1.5$ should land between $14$ and $15$, and $14.5$ does.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the final value.", "workingLatex": "14.5", "explanation": "The estimate and the exact answer agree, so the result stands.", "diagram": null }
      ],
      "finalAnswer": "$14.5$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "formula", "kinematics", "physics"],
    "questionText": "The final velocity of an object is given by $v = u + at$, where $u$ is the initial velocity, $a$ is the acceleration and $t$ is the time. Work out $v$ when $u = 5$, $a = 3$ and $t = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "v = u + at", "explanation": "The final velocity is the starting velocity plus however much speed the acceleration adds over the time.", "diagram": null },
        { "stepNumber": 2, "description": "Identify what each letter means.", "workingLatex": "u \\to \\text{start}, \\ a \\to \\text{acceleration}, \\ t \\to \\text{time}", "explanation": "Knowing what each symbol stands for helps us place the numbers correctly.", "diagram": null },
        { "stepNumber": 3, "description": "State the quantity we want.", "workingLatex": "v = ?", "explanation": "We are finding $v$, the final velocity.", "diagram": null },
        { "stepNumber": 4, "description": "List the initial velocity.", "workingLatex": "u = 5", "explanation": "The object starts at five units of speed.", "diagram": null },
        { "stepNumber": 5, "description": "List the acceleration.", "workingLatex": "a = 3", "explanation": "The speed increases by three units every second.", "diagram": null },
        { "stepNumber": 6, "description": "List the time.", "workingLatex": "t = 4", "explanation": "The motion lasts four seconds.", "diagram": null },
        { "stepNumber": 7, "description": "Note the order of operations.", "workingLatex": "at \\text{ before } u + \\ldots", "explanation": "The term $at$ is a multiplication, and multiplication is done before the addition.", "diagram": null },
        { "stepNumber": 8, "description": "Write down the formula.", "workingLatex": "v = u + at", "explanation": "We keep the formula in front of us before substituting.", "diagram": null },
        { "stepNumber": 9, "description": "Substitute the values.", "workingLatex": "v = 5 + 3 \\times 4", "explanation": "Each letter is replaced by its number in the correct position.", "diagram": null },
        { "stepNumber": 10, "description": "Work out the product first.", "workingLatex": "3 \\times 4 = 12", "explanation": "The acceleration term $at$ is evaluated before adding the starting speed.", "diagram": null },
        { "stepNumber": 11, "description": "Rewrite the formula.", "workingLatex": "v = 5 + 12", "explanation": "With the product known, only the addition is left.", "diagram": null },
        { "stepNumber": 12, "description": "Add.", "workingLatex": "5 + 12 = 17", "explanation": "Adding twelve to five gives seventeen.", "diagram": null },
        { "stepNumber": 13, "description": "State the result.", "workingLatex": "v = 17", "explanation": "The final velocity is $17$ units of speed.", "diagram": null },
        { "stepNumber": 14, "description": "Interpret in context.", "workingLatex": "5 \\to 17 \\text{ over } 4\\text{ s}", "explanation": "Gaining three units of speed each second for four seconds adds twelve, taking the object from five up to seventeen, which matches.", "diagram": null }
      ],
      "finalAnswer": "$v = 17$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "kinematics", "powers"],
    "questionText": "The distance travelled is given by $s = ut + \\tfrac{1}{2}at^{2}$. Work out $s$ when $u = 6$, $a = 2$ and $t = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "s = ut + \\tfrac{1}{2}at^{2}", "explanation": "The distance has two parts: the steady part from the starting speed and the extra part caused by acceleration.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "s = ?", "explanation": "We are finding $s$, the total distance travelled.", "diagram": null },
        { "stepNumber": 3, "description": "List the initial velocity.", "workingLatex": "u = 6", "explanation": "The object starts at six units of speed.", "diagram": null },
        { "stepNumber": 4, "description": "List the acceleration.", "workingLatex": "a = 2", "explanation": "The speed increases by two units each second.", "diagram": null },
        { "stepNumber": 5, "description": "List the time.", "workingLatex": "t = 5", "explanation": "The motion lasts five seconds.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "s = ut + \\tfrac{1}{2}at^{2}", "explanation": "We keep the formula in view before substituting each value.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "s = 6 \\times 5 + \\tfrac{1}{2} \\times 2 \\times 5^{2}", "explanation": "Each letter is replaced by its number, keeping the power on the $t$ in the second term.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the first term.", "workingLatex": "6 \\times 5 = 30", "explanation": "The steady part $ut$ is six units of speed for five seconds, giving thirty.", "diagram": null },
        { "stepNumber": 9, "description": "Deal with the power in the second term.", "workingLatex": "5^{2} = 25", "explanation": "Under BIDMAS, indices come before multiplication, so we square the time first.", "diagram": null },
        { "stepNumber": 10, "description": "Multiply the acceleration by the squared time.", "workingLatex": "2 \\times 25 = 50", "explanation": "Now the acceleration multiplies the squared time.", "diagram": null },
        { "stepNumber": 11, "description": "Take a half.", "workingLatex": "\\tfrac{1}{2} \\times 50 = 25", "explanation": "The factor of one half halves the result to give the acceleration part of the distance.", "diagram": null },
        { "stepNumber": 12, "description": "Rewrite the formula.", "workingLatex": "s = 30 + 25", "explanation": "With both parts known, only the addition remains.", "diagram": null },
        { "stepNumber": 13, "description": "Add.", "workingLatex": "30 + 25 = 55", "explanation": "Adding the two distances gives the total.", "diagram": null },
        { "stepNumber": 14, "description": "State the result.", "workingLatex": "s = 55", "explanation": "The object travels a total distance of $55$ units.", "diagram": null },
        { "stepNumber": 15, "description": "Interpret in context.", "workingLatex": "30 + 25 = 55", "explanation": "Thirty comes from the initial steady speed and twenty-five from the speeding-up, which together make sense for accelerating motion.", "diagram": null }
      ],
      "finalAnswer": "$s = 55$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "formula", "temperature", "fractions"],
    "questionText": "The formula $C = \\tfrac{5}{9}(F - 32)$ converts a temperature in Fahrenheit to Celsius. Work out $C$ when $F = 68$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "C = \\tfrac{5}{9}(F - 32)", "explanation": "To convert Fahrenheit to Celsius we first remove the $32$ offset, then scale by the fraction $\\tfrac{5}{9}$.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "C = ?", "explanation": "We are finding the Celsius temperature.", "diagram": null },
        { "stepNumber": 3, "description": "Note the given value.", "workingLatex": "F = 68", "explanation": "The temperature is sixty-eight degrees Fahrenheit.", "diagram": null },
        { "stepNumber": 4, "description": "Note the order of operations.", "workingLatex": "\\text{bracket first}", "explanation": "The bracket $(F - 32)$ must be worked out before multiplying by the fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Write down the formula.", "workingLatex": "C = \\tfrac{5}{9}(F - 32)", "explanation": "We keep the formula in front of us before substituting.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the value.", "workingLatex": "C = \\tfrac{5}{9}(68 - 32)", "explanation": "We replace $F$ with $68$ inside the bracket.", "diagram": null },
        { "stepNumber": 7, "description": "Work out the bracket first.", "workingLatex": "68 - 32 = 36", "explanation": "Subtracting the offset gives thirty-six.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the formula.", "workingLatex": "C = \\tfrac{5}{9} \\times 36", "explanation": "Now we multiply the fraction by the result of the bracket.", "diagram": null },
        { "stepNumber": 9, "description": "Divide by the denominator first.", "workingLatex": "36 \\div 9 = 4", "explanation": "Multiplying by $\\tfrac{5}{9}$ is easiest as \u2018divide by nine, then times five\u2019, and dividing thirty-six by nine gives four.", "diagram": null },
        { "stepNumber": 10, "description": "Multiply by the numerator.", "workingLatex": "4 \\times 5 = 20", "explanation": "Multiplying the four by five completes the fraction calculation.", "diagram": null },
        { "stepNumber": 11, "description": "State the result.", "workingLatex": "C = 20", "explanation": "The temperature is twenty degrees Celsius.", "diagram": null },
        { "stepNumber": 12, "description": "Attach the unit.", "workingLatex": "C = 20^{\\circ}\\text{C}", "explanation": "The answer is a Celsius temperature, so we write the degree symbol.", "diagram": null },
        { "stepNumber": 13, "description": "Interpret in context.", "workingLatex": "68^{\\circ}\\text{F} = 20^{\\circ}\\text{C}", "explanation": "Sixty-eight Fahrenheit is a mild room temperature, and twenty Celsius is exactly that, so the answer is reasonable.", "diagram": null }
      ],
      "finalAnswer": "$C = 20^{\\circ}\\text{C}$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "formula", "area", "trapezium"],
    "questionText": "The area of a trapezium is given by $A = \\tfrac{1}{2}(a + b)h$. Work out $A$ when $a = 6$, $b = 10$ and $h = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "A = \\tfrac{1}{2}(a + b)h", "explanation": "The area of a trapezium uses the average of the two parallel sides, multiplied by the distance between them.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "A = ?", "explanation": "We are finding the area of the trapezium.", "diagram": null },
        { "stepNumber": 3, "description": "List the parallel sides.", "workingLatex": "a = 6, \\quad b = 10", "explanation": "These are the two parallel sides of the trapezium.", "diagram": null },
        { "stepNumber": 4, "description": "List the height.", "workingLatex": "h = 4", "explanation": "This is the perpendicular distance between the parallel sides.", "diagram": null },
        { "stepNumber": 5, "description": "Note the order of operations.", "workingLatex": "\\text{bracket first}", "explanation": "We add the parallel sides in the bracket before multiplying.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "A = \\tfrac{1}{2}(a + b)h", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "A = \\tfrac{1}{2}(6 + 10) \\times 4", "explanation": "Each letter is replaced by its measurement.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the bracket first.", "workingLatex": "6 + 10 = 16", "explanation": "Adding the two parallel sides gives sixteen.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite the formula.", "workingLatex": "A = \\tfrac{1}{2} \\times 16 \\times 4", "explanation": "Now we have a half times sixteen times four.", "diagram": null },
        { "stepNumber": 10, "description": "Take a half of the bracket.", "workingLatex": "\\tfrac{1}{2} \\times 16 = 8", "explanation": "Halving sixteen gives eight, the average of the two parallel sides.", "diagram": null },
        { "stepNumber": 11, "description": "Multiply by the height.", "workingLatex": "8 \\times 4 = 32", "explanation": "Multiplying the average width by the height gives the area.", "diagram": null },
        { "stepNumber": 12, "description": "State the result.", "workingLatex": "A = 32", "explanation": "The area of the trapezium is $32$ square units.", "diagram": null },
        { "stepNumber": 13, "description": "Interpret in context.", "workingLatex": "\\text{average width } 8 \\times \\text{height } 4", "explanation": "The trapezium behaves like a rectangle of width eight and height four, and $8 \\times 4 = 32$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$A = 32$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "compound interest", "powers"],
    "questionText": "The amount in a savings account is given by $A = P\\left(1 + \\dfrac{r}{100}\\right)^{n}$. Work out $A$ when $P = 2000$, $r = 5$ and $n = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "A = P\\left(1 + \\tfrac{r}{100}\\right)^{n}", "explanation": "Each year the money is multiplied by a growth factor, and raising it to the power $n$ applies that growth for $n$ years.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "A = ?", "explanation": "We are finding the total amount after the interest is applied.", "diagram": null },
        { "stepNumber": 3, "description": "List the principal.", "workingLatex": "P = 2000", "explanation": "The starting amount invested is two thousand pounds.", "diagram": null },
        { "stepNumber": 4, "description": "List the interest rate.", "workingLatex": "r = 5", "explanation": "The account grows by five percent each year.", "diagram": null },
        { "stepNumber": 5, "description": "List the number of years.", "workingLatex": "n = 2", "explanation": "The money is invested for two years.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "A = P\\left(1 + \\tfrac{r}{100}\\right)^{n}", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "A = 2000\\left(1 + \\tfrac{5}{100}\\right)^{2}", "explanation": "Each letter is replaced by its number.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the fraction inside the bracket.", "workingLatex": "\\tfrac{5}{100} = 0.05", "explanation": "Five percent as a decimal is $0.05$.", "diagram": null },
        { "stepNumber": 9, "description": "Add inside the bracket.", "workingLatex": "1 + 0.05 = 1.05", "explanation": "This $1.05$ is the yearly growth factor: keep the original amount and add five percent.", "diagram": null },
        { "stepNumber": 10, "description": "Apply the power.", "workingLatex": "1.05^{2} = 1.05 \\times 1.05 = 1.1025", "explanation": "Raising the growth factor to the power two applies the growth across both years.", "diagram": null },
        { "stepNumber": 11, "description": "Rewrite the formula.", "workingLatex": "A = 2000 \\times 1.1025", "explanation": "Now we multiply the starting amount by the two-year growth factor.", "diagram": null },
        { "stepNumber": 12, "description": "Multiply.", "workingLatex": "2000 \\times 1.1025 = 2205", "explanation": "Two thousand times $1.1025$ gives two thousand two hundred and five.", "diagram": null },
        { "stepNumber": 13, "description": "Attach the unit.", "workingLatex": "A = \\pounds 2205", "explanation": "The amount is money, so we write it in pounds.", "diagram": null },
        { "stepNumber": 14, "description": "Interpret in context.", "workingLatex": "2205 - 2000 = 205", "explanation": "The account has earned $\\pounds 205$ of interest over the two years, a sensible amount for five percent growth.", "diagram": null }
      ],
      "finalAnswer": "$A = \\pounds 2205$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "Pythagoras", "square root"],
    "questionText": "The length of the hypotenuse is given by $c = \\sqrt{a^{2} + b^{2}}$. Work out $c$ when $a = 6$ and $b = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "c = \\sqrt{a^{2} + b^{2}}", "explanation": "By Pythagoras, the longest side of a right-angled triangle is the square root of the sum of the squares of the two shorter sides.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "c = ?", "explanation": "We are finding the length of the hypotenuse.", "diagram": null },
        { "stepNumber": 3, "description": "List the two shorter sides.", "workingLatex": "a = 6, \\quad b = 8", "explanation": "These are the two sides that meet at the right angle.", "diagram": null },
        { "stepNumber": 4, "description": "Note the order of operations.", "workingLatex": "\\text{squares, then add, then root}", "explanation": "We square each side, add the results inside the root, and take the square root last.", "diagram": null },
        { "stepNumber": 5, "description": "Write down the formula.", "workingLatex": "c = \\sqrt{a^{2} + b^{2}}", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the values.", "workingLatex": "c = \\sqrt{6^{2} + 8^{2}}", "explanation": "We replace $a$ with $6$ and $b$ with $8$.", "diagram": null },
        { "stepNumber": 7, "description": "Square the first side.", "workingLatex": "6^{2} = 36", "explanation": "Six multiplied by itself is thirty-six.", "diagram": null },
        { "stepNumber": 8, "description": "Square the second side.", "workingLatex": "8^{2} = 64", "explanation": "Eight multiplied by itself is sixty-four.", "diagram": null },
        { "stepNumber": 9, "description": "Add inside the root.", "workingLatex": "36 + 64 = 100", "explanation": "Adding the two squares gives one hundred.", "diagram": null },
        { "stepNumber": 10, "description": "Rewrite the formula.", "workingLatex": "c = \\sqrt{100}", "explanation": "Now only the square root remains.", "diagram": null },
        { "stepNumber": 11, "description": "Take the square root.", "workingLatex": "\\sqrt{100} = 10", "explanation": "Ten multiplied by itself is one hundred, so the square root of one hundred is ten.", "diagram": null },
        { "stepNumber": 12, "description": "State the result.", "workingLatex": "c = 10", "explanation": "The hypotenuse has length ten units.", "diagram": null },
        { "stepNumber": 13, "description": "Interpret in context.", "workingLatex": "6, 8, 10 \\text{ triangle}", "explanation": "This is a scaled-up $3$, $4$, $5$ triangle, and the hypotenuse being the longest side at $10$ confirms the answer is sensible.", "diagram": null }
      ],
      "finalAnswer": "$c = 10$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "kinematics", "square root"],
    "questionText": "The formula $v^{2} = u^{2} + 2as$ relates velocity to displacement. Work out $v$ when $u = 0$, $a = 10$ and $s = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "v^{2} = u^{2} + 2as", "explanation": "This links final velocity to starting velocity, acceleration and distance, without needing the time.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "v = ?", "explanation": "We must find $v$, but the formula first gives us $v^{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "List the initial velocity.", "workingLatex": "u = 0", "explanation": "The object starts from rest.", "diagram": null },
        { "stepNumber": 4, "description": "List the acceleration.", "workingLatex": "a = 10", "explanation": "The acceleration is ten units.", "diagram": null },
        { "stepNumber": 5, "description": "List the displacement.", "workingLatex": "s = 5", "explanation": "The object moves five units of distance.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "v^{2} = u^{2} + 2as", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "v^{2} = 0^{2} + 2 \\times 10 \\times 5", "explanation": "Each letter is replaced by its number.", "diagram": null },
        { "stepNumber": 8, "description": "Deal with the power.", "workingLatex": "0^{2} = 0", "explanation": "Zero squared is zero, so the starting-velocity term vanishes.", "diagram": null },
        { "stepNumber": 9, "description": "Work out the second term.", "workingLatex": "2 \\times 10 \\times 5 = 100", "explanation": "Multiplying two, ten and five gives one hundred.", "diagram": null },
        { "stepNumber": 10, "description": "Add.", "workingLatex": "v^{2} = 0 + 100 = 100", "explanation": "The sum gives the value of $v^{2}$.", "diagram": null },
        { "stepNumber": 11, "description": "Undo the square.", "workingLatex": "v = \\sqrt{100}", "explanation": "Since the formula gives $v^{2}$, we take the square root to find $v$ itself.", "diagram": null },
        { "stepNumber": 12, "description": "Take the square root.", "workingLatex": "\\sqrt{100} = 10", "explanation": "Ten squared is one hundred, so the square root is ten.", "diagram": null },
        { "stepNumber": 13, "description": "State the result.", "workingLatex": "v = 10", "explanation": "The final velocity is ten units of speed.", "diagram": null },
        { "stepNumber": 14, "description": "Interpret in context.", "workingLatex": "\\text{starts at rest, speeds up}", "explanation": "Starting from rest and accelerating over a distance, the object naturally ends up moving, so a positive final speed of ten is sensible.", "diagram": null }
      ],
      "finalAnswer": "$v = 10$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "kinetic energy", "powers"],
    "questionText": "The kinetic energy of a moving object is given by $E = \\tfrac{1}{2}mv^{2}$. Work out $E$ when $m = 4$ and $v = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "E = \\tfrac{1}{2}mv^{2}", "explanation": "Kinetic energy depends on the mass and on the square of the speed, so speed matters a lot.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "E = ?", "explanation": "We are finding the kinetic energy.", "diagram": null },
        { "stepNumber": 3, "description": "List the mass.", "workingLatex": "m = 4", "explanation": "The object has a mass of four units.", "diagram": null },
        { "stepNumber": 4, "description": "List the speed.", "workingLatex": "v = 5", "explanation": "The object moves at five units of speed.", "diagram": null },
        { "stepNumber": 5, "description": "Note the order of operations.", "workingLatex": "v^{2} \\text{ first}", "explanation": "The square applies only to $v$, so it must be evaluated before multiplying by the mass and the half.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "E = \\tfrac{1}{2}mv^{2}", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "E = \\tfrac{1}{2} \\times 4 \\times 5^{2}", "explanation": "Each letter is replaced by its number, keeping the power on $v$.", "diagram": null },
        { "stepNumber": 8, "description": "Deal with the power first.", "workingLatex": "5^{2} = 25", "explanation": "Under BIDMAS, we square the speed before any multiplication.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite the formula.", "workingLatex": "E = \\tfrac{1}{2} \\times 4 \\times 25", "explanation": "Now only multiplications and the half remain.", "diagram": null },
        { "stepNumber": 10, "description": "Multiply the mass by the squared speed.", "workingLatex": "4 \\times 25 = 100", "explanation": "Multiplying the whole numbers first keeps the arithmetic simple.", "diagram": null },
        { "stepNumber": 11, "description": "Take a half.", "workingLatex": "\\tfrac{1}{2} \\times 100 = 50", "explanation": "Halving one hundred gives fifty.", "diagram": null },
        { "stepNumber": 12, "description": "State the result.", "workingLatex": "E = 50", "explanation": "The kinetic energy is fifty units.", "diagram": null },
        { "stepNumber": 13, "description": "Interpret in context.", "workingLatex": "E \\propto v^{2}", "explanation": "Because energy depends on the square of speed, even a modest speed of five produces a sizeable energy, which fits our answer.", "diagram": null }
      ],
      "finalAnswer": "$E = 50$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "formula", "temperature", "fractions"],
    "questionText": "The formula $C = \\tfrac{5}{9}(F - 32)$ converts Fahrenheit to Celsius. Work out $C$ when $F = 212$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "C = \\tfrac{5}{9}(F - 32)", "explanation": "We first remove the $32$ offset, then scale by $\\tfrac{5}{9}$ to reach the Celsius value.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "C = ?", "explanation": "We are converting to a Celsius temperature.", "diagram": null },
        { "stepNumber": 3, "description": "Note the given value.", "workingLatex": "F = 212", "explanation": "The temperature is two hundred and twelve degrees Fahrenheit.", "diagram": null },
        { "stepNumber": 4, "description": "Note the order of operations.", "workingLatex": "\\text{bracket first}", "explanation": "The bracket must be evaluated before multiplying by the fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Write down the formula.", "workingLatex": "C = \\tfrac{5}{9}(F - 32)", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the value.", "workingLatex": "C = \\tfrac{5}{9}(212 - 32)", "explanation": "We replace $F$ with $212$ inside the bracket.", "diagram": null },
        { "stepNumber": 7, "description": "Work out the bracket first.", "workingLatex": "212 - 32 = 180", "explanation": "Subtracting the offset gives one hundred and eighty.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the formula.", "workingLatex": "C = \\tfrac{5}{9} \\times 180", "explanation": "Now we multiply the fraction by the bracket result.", "diagram": null },
        { "stepNumber": 9, "description": "Divide by the denominator first.", "workingLatex": "180 \\div 9 = 20", "explanation": "Dividing by nine before multiplying keeps the numbers small; one hundred and eighty divided by nine is twenty.", "diagram": null },
        { "stepNumber": 10, "description": "Multiply by the numerator.", "workingLatex": "20 \\times 5 = 100", "explanation": "Multiplying the twenty by five finishes the fraction.", "diagram": null },
        { "stepNumber": 11, "description": "State the result.", "workingLatex": "C = 100", "explanation": "The temperature is one hundred degrees Celsius.", "diagram": null },
        { "stepNumber": 12, "description": "Attach the unit.", "workingLatex": "C = 100^{\\circ}\\text{C}", "explanation": "The answer is a Celsius temperature, so we write the degree symbol.", "diagram": null },
        { "stepNumber": 13, "description": "Interpret in context.", "workingLatex": "212^{\\circ}\\text{F} = 100^{\\circ}\\text{C}", "explanation": "This is the boiling point of water, a well-known fixed point, which confirms the conversion is correct.", "diagram": null }
      ],
      "finalAnswer": "$C = 100^{\\circ}\\text{C}$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "formula", "negative numbers", "kinematics"],
    "questionText": "Using $v = u + at$, work out $v$ when $u = 20$, $a = -4$ and $t = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "v = u + at", "explanation": "A negative acceleration means the object is slowing down, so the added amount will be negative.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "v = ?", "explanation": "We are finding the final velocity.", "diagram": null },
        { "stepNumber": 3, "description": "List the initial velocity.", "workingLatex": "u = 20", "explanation": "The object starts at twenty units of speed.", "diagram": null },
        { "stepNumber": 4, "description": "List the acceleration.", "workingLatex": "a = -4", "explanation": "The acceleration is negative, meaning the object decelerates by four units each second.", "diagram": null },
        { "stepNumber": 5, "description": "List the time.", "workingLatex": "t = 3", "explanation": "The motion lasts three seconds.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "v = u + at", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "v = 20 + (-4) \\times 3", "explanation": "The bracket around $-4$ keeps its negative sign safe during the multiplication.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the product first.", "workingLatex": "(-4) \\times 3 = -12", "explanation": "A negative times a positive is negative, so the acceleration term is minus twelve.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite the formula.", "workingLatex": "v = 20 + (-12)", "explanation": "Adding a negative is the same as subtracting.", "diagram": null },
        { "stepNumber": 10, "description": "Simplify.", "workingLatex": "20 - 12 = 8", "explanation": "Taking twelve from twenty leaves eight.", "diagram": null },
        { "stepNumber": 11, "description": "State the result.", "workingLatex": "v = 8", "explanation": "The final velocity is eight units of speed.", "diagram": null },
        { "stepNumber": 12, "description": "Interpret in context.", "workingLatex": "20 \\to 8", "explanation": "Because the acceleration is negative, the object slows from twenty down to eight, which matches a deceleration.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final value.", "workingLatex": "8", "explanation": "The sign reasoning and the arithmetic agree, so the answer stands.", "diagram": null }
      ],
      "finalAnswer": "$v = 8$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "negative numbers", "kinematics"],
    "questionText": "Using $s = ut + \\tfrac{1}{2}at^{2}$, work out $s$ when $u = 15$, $a = -2$ and $t = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "s = ut + \\tfrac{1}{2}at^{2}", "explanation": "With a negative acceleration the second part of the distance is negative, because the object is slowing.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "s = ?", "explanation": "We are finding the distance travelled.", "diagram": null },
        { "stepNumber": 3, "description": "List the initial velocity.", "workingLatex": "u = 15", "explanation": "The object starts at fifteen units of speed.", "diagram": null },
        { "stepNumber": 4, "description": "List the acceleration.", "workingLatex": "a = -2", "explanation": "The negative acceleration means the object is decelerating.", "diagram": null },
        { "stepNumber": 5, "description": "List the time.", "workingLatex": "t = 4", "explanation": "The motion lasts four seconds.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "s = ut + \\tfrac{1}{2}at^{2}", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "s = 15 \\times 4 + \\tfrac{1}{2} \\times (-2) \\times 4^{2}", "explanation": "The bracket around $-2$ keeps the negative sign attached.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the first term.", "workingLatex": "15 \\times 4 = 60", "explanation": "The steady part $ut$ is fifteen units for four seconds, giving sixty.", "diagram": null },
        { "stepNumber": 9, "description": "Deal with the power in the second term.", "workingLatex": "4^{2} = 16", "explanation": "Indices come before multiplication, so we square the time first.", "diagram": null },
        { "stepNumber": 10, "description": "Multiply the acceleration by the squared time.", "workingLatex": "(-2) \\times 16 = -32", "explanation": "A negative times a positive is negative, so this product is minus thirty-two.", "diagram": null },
        { "stepNumber": 11, "description": "Take a half.", "workingLatex": "\\tfrac{1}{2} \\times (-32) = -16", "explanation": "Halving minus thirty-two gives minus sixteen.", "diagram": null },
        { "stepNumber": 12, "description": "Rewrite the formula.", "workingLatex": "s = 60 + (-16)", "explanation": "Adding a negative is the same as subtracting.", "diagram": null },
        { "stepNumber": 13, "description": "Simplify.", "workingLatex": "60 - 16 = 44", "explanation": "Taking sixteen from sixty leaves forty-four.", "diagram": null },
        { "stepNumber": 14, "description": "State the result.", "workingLatex": "s = 44", "explanation": "The object travels forty-four units of distance.", "diagram": null },
        { "stepNumber": 15, "description": "Interpret in context.", "workingLatex": "60 - 16 = 44", "explanation": "The deceleration reduces the distance below the sixty units it would have covered at a steady speed, which makes physical sense.", "diagram": null }
      ],
      "finalAnswer": "$s = 44$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "formula", "area", "decimals"],
    "questionText": "The area of a trapezium is $A = \\tfrac{1}{2}(a + b)h$. Work out $A$ when $a = 3.5$, $b = 6.5$ and $h = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "A = \\tfrac{1}{2}(a + b)h", "explanation": "We average the two parallel sides and multiply by the height, even when the sides are decimals.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "A = ?", "explanation": "We are finding the area of the trapezium.", "diagram": null },
        { "stepNumber": 3, "description": "List the parallel sides.", "workingLatex": "a = 3.5, \\quad b = 6.5", "explanation": "These are the two parallel sides.", "diagram": null },
        { "stepNumber": 4, "description": "List the height.", "workingLatex": "h = 4", "explanation": "This is the perpendicular height.", "diagram": null },
        { "stepNumber": 5, "description": "Write down the formula.", "workingLatex": "A = \\tfrac{1}{2}(a + b)h", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the values.", "workingLatex": "A = \\tfrac{1}{2}(3.5 + 6.5) \\times 4", "explanation": "Each letter is replaced by its measurement.", "diagram": null },
        { "stepNumber": 7, "description": "Work out the bracket first.", "workingLatex": "3.5 + 6.5 = 10", "explanation": "The two decimals add neatly to a whole number, ten.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the formula.", "workingLatex": "A = \\tfrac{1}{2} \\times 10 \\times 4", "explanation": "Now we have a half times ten times four.", "diagram": null },
        { "stepNumber": 9, "description": "Take a half of the bracket.", "workingLatex": "\\tfrac{1}{2} \\times 10 = 5", "explanation": "Halving ten gives five, the average of the parallel sides.", "diagram": null },
        { "stepNumber": 10, "description": "Multiply by the height.", "workingLatex": "5 \\times 4 = 20", "explanation": "Multiplying the average width by the height gives the area.", "diagram": null },
        { "stepNumber": 11, "description": "State the result.", "workingLatex": "A = 20", "explanation": "The area of the trapezium is $20$ square units.", "diagram": null },
        { "stepNumber": 12, "description": "Sense-check the size.", "workingLatex": "3.5 < 5 < 6.5", "explanation": "The average width of five lies between the two parallel sides, exactly as an average should.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final value.", "workingLatex": "20", "explanation": "The reasoning and the arithmetic agree, so the answer stands.", "diagram": null }
      ],
      "finalAnswer": "$A = 20$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "negative numbers", "cubic expression", "order of operations"],
    "questionText": "Work out the value of $2x^{3} - 3x^{2} + x$ when $x = -2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = -2", "explanation": "We substitute $-2$ into every term, using brackets so the negative is handled correctly in each power.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the expression.", "workingLatex": "2x^{3} - 3x^{2} + x", "explanation": "There is a cubic term, a squared term and a linear term.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the value of $x$.", "workingLatex": "2(-2)^{3} - 3(-2)^{2} + (-2)", "explanation": "Brackets around $-2$ make each power unambiguous.", "diagram": null },
        { "stepNumber": 4, "description": "Cube the negative number.", "workingLatex": "(-2)^{3} = -8", "explanation": "A negative raised to an odd power stays negative, so $(-2) \\times (-2) \\times (-2) = -8$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by the coefficient.", "workingLatex": "2 \\times (-8) = -16", "explanation": "The first term becomes minus sixteen.", "diagram": null },
        { "stepNumber": 6, "description": "Square the negative number.", "workingLatex": "(-2)^{2} = 4", "explanation": "A negative raised to an even power is positive, so this is four.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply by the coefficient.", "workingLatex": "3 \\times 4 = 12", "explanation": "This is the size of the second term before its sign is applied.", "diagram": null },
        { "stepNumber": 8, "description": "Note the third term.", "workingLatex": "x = -2", "explanation": "The final linear term is simply $-2$.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite the whole expression.", "workingLatex": "-16 - 12 + (-2)", "explanation": "We combine the three evaluated terms, keeping the minus in front of the second term.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the first two.", "workingLatex": "-16 - 12 = -28", "explanation": "Going further down the number line from minus sixteen by twelve reaches minus twenty-eight.", "diagram": null },
        { "stepNumber": 11, "description": "Add the last term.", "workingLatex": "-28 + (-2) = -30", "explanation": "Adding another minus two takes us to minus thirty.", "diagram": null },
        { "stepNumber": 12, "description": "State the result.", "workingLatex": "2x^{3} - 3x^{2} + x = -30", "explanation": "This is the value of the expression when $x = -2$.", "diagram": null },
        { "stepNumber": 13, "description": "Highlight the sign rule.", "workingLatex": "(-2)^{3} < 0, \\ (-2)^{2} > 0", "explanation": "Odd powers of a negative stay negative while even powers turn positive, which is what keeps this calculation correct.", "diagram": null }
      ],
      "finalAnswer": "$-30$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "brackets", "three variables", "order of operations"],
    "questionText": "Work out the value of $\\dfrac{(x - y)^{2}}{z}$ when $x = 7$, $y = 3$ and $z = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "x = 7, \\ y = 3, \\ z = 2", "explanation": "We substitute three values, then work through the bracket, the power and finally the division.", "diagram": null },
        { "stepNumber": 2, "description": "Note the order of operations.", "workingLatex": "\\text{bracket, power, then divide}", "explanation": "The top of the fraction must be completed before dividing by $z$.", "diagram": null },
        { "stepNumber": 3, "description": "Write down the expression.", "workingLatex": "\\frac{(x - y)^{2}}{z}", "explanation": "The whole squared bracket sits on top of the fraction.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the values.", "workingLatex": "\\frac{(7 - 3)^{2}}{2}", "explanation": "Each letter is replaced by its number.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the bracket first.", "workingLatex": "7 - 3 = 4", "explanation": "Brackets come before powers, so we subtract inside first.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite with the bracket done.", "workingLatex": "\\frac{4^{2}}{2}", "explanation": "Now the value four is what gets squared.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the power.", "workingLatex": "4^{2} = 16", "explanation": "Four multiplied by itself is sixteen.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the fraction.", "workingLatex": "\\frac{16}{2}", "explanation": "With the top finished, only the division remains.", "diagram": null },
        { "stepNumber": 9, "description": "Carry out the division.", "workingLatex": "16 \\div 2 = 8", "explanation": "Sharing sixteen into two equal parts gives eight.", "diagram": null },
        { "stepNumber": 10, "description": "State the result.", "workingLatex": "\\frac{(x - y)^{2}}{z} = 8", "explanation": "This is the value of the expression for the given values.", "diagram": null },
        { "stepNumber": 11, "description": "Check by reversing the division.", "workingLatex": "8 \\times 2 = 16", "explanation": "Multiplying the answer by $z$ recovers the numerator, confirming the division.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm the bracket handling.", "workingLatex": "(7 - 3)^{2} \\ne 7^{2} - 3^{2}", "explanation": "We must subtract inside the bracket before squaring, not square the terms separately.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm the final value.", "workingLatex": "8", "explanation": "Each check supports the result, so the answer stands.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "compound interest", "powers"],
    "questionText": "The value of an investment is $A = P\\left(1 + \\dfrac{r}{100}\\right)^{n}$. Work out $A$ when $P = 5000$, $r = 4$ and $n = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "A = P\\left(1 + \\tfrac{r}{100}\\right)^{n}", "explanation": "The growth factor is applied once for each year, which is why it is raised to the power $n$.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "A = ?", "explanation": "We are finding the value of the investment after the interest.", "diagram": null },
        { "stepNumber": 3, "description": "List the principal.", "workingLatex": "P = 5000", "explanation": "The starting amount is five thousand pounds.", "diagram": null },
        { "stepNumber": 4, "description": "List the interest rate.", "workingLatex": "r = 4", "explanation": "The investment grows by four percent each year.", "diagram": null },
        { "stepNumber": 5, "description": "List the number of years.", "workingLatex": "n = 2", "explanation": "The money is invested for two years.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "A = P\\left(1 + \\tfrac{r}{100}\\right)^{n}", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "A = 5000\\left(1 + \\tfrac{4}{100}\\right)^{2}", "explanation": "Each letter is replaced by its number.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the fraction.", "workingLatex": "\\tfrac{4}{100} = 0.04", "explanation": "Four percent as a decimal is $0.04$.", "diagram": null },
        { "stepNumber": 9, "description": "Add inside the bracket.", "workingLatex": "1 + 0.04 = 1.04", "explanation": "The growth factor keeps the original amount and adds four percent.", "diagram": null },
        { "stepNumber": 10, "description": "Apply the power.", "workingLatex": "1.04^{2} = 1.0816", "explanation": "Squaring the growth factor applies the growth across both years.", "diagram": null },
        { "stepNumber": 11, "description": "Rewrite the formula.", "workingLatex": "A = 5000 \\times 1.0816", "explanation": "Now we multiply the starting amount by the two-year growth factor.", "diagram": null },
        { "stepNumber": 12, "description": "Multiply.", "workingLatex": "5000 \\times 1.0816 = 5408", "explanation": "Five thousand times $1.0816$ gives five thousand four hundred and eight.", "diagram": null },
        { "stepNumber": 13, "description": "Attach the unit.", "workingLatex": "A = \\pounds 5408", "explanation": "The amount is money, so we write it in pounds.", "diagram": null },
        { "stepNumber": 14, "description": "Interpret in context.", "workingLatex": "5408 - 5000 = 408", "explanation": "The investment has earned $\\pounds 408$ of interest over two years, which is reasonable for four percent growth.", "diagram": null }
      ],
      "finalAnswer": "$A = \\pounds 5408$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["substitution", "formula", "temperature", "fractions"],
    "questionText": "The formula $F = \\tfrac{9}{5}C + 32$ converts Celsius to Fahrenheit. Work out $F$ when $C = 25$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "F = \\tfrac{9}{5}C + 32", "explanation": "We scale the Celsius value by $\\tfrac{9}{5}$ and then add the $32$ offset to reach Fahrenheit.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "F = ?", "explanation": "We are converting to a Fahrenheit temperature.", "diagram": null },
        { "stepNumber": 3, "description": "Note the given value.", "workingLatex": "C = 25", "explanation": "The temperature is twenty-five degrees Celsius.", "diagram": null },
        { "stepNumber": 4, "description": "Note the order of operations.", "workingLatex": "\\text{multiply before adding}", "explanation": "The term $\\tfrac{9}{5}C$ must be worked out before the $32$ is added.", "diagram": null },
        { "stepNumber": 5, "description": "Write down the formula.", "workingLatex": "F = \\tfrac{9}{5}C + 32", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the value.", "workingLatex": "F = \\tfrac{9}{5} \\times 25 + 32", "explanation": "We replace $C$ with $25$.", "diagram": null },
        { "stepNumber": 7, "description": "Divide by the denominator first.", "workingLatex": "25 \\div 5 = 5", "explanation": "Multiplying by $\\tfrac{9}{5}$ is easiest as \u2018divide by five, then times nine\u2019.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply by the numerator.", "workingLatex": "5 \\times 9 = 45", "explanation": "This completes the term $\\tfrac{9}{5}C$.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite the formula.", "workingLatex": "F = 45 + 32", "explanation": "Now only the addition of the offset remains.", "diagram": null },
        { "stepNumber": 10, "description": "Add.", "workingLatex": "45 + 32 = 77", "explanation": "Adding the offset gives seventy-seven.", "diagram": null },
        { "stepNumber": 11, "description": "State the result.", "workingLatex": "F = 77", "explanation": "The temperature is seventy-seven degrees Fahrenheit.", "diagram": null },
        { "stepNumber": 12, "description": "Attach the unit.", "workingLatex": "F = 77^{\\circ}\\text{F}", "explanation": "The answer is a Fahrenheit temperature, so we write the degree symbol.", "diagram": null },
        { "stepNumber": 13, "description": "Interpret in context.", "workingLatex": "25^{\\circ}\\text{C} = 77^{\\circ}\\text{F}", "explanation": "Twenty-five Celsius is a warm summer day, and seventy-seven Fahrenheit describes the same warmth, so the answer is sensible.", "diagram": null }
      ],
      "finalAnswer": "$F = 77^{\\circ}\\text{F}$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "kinematics", "square root"],
    "questionText": "Using $v^{2} = u^{2} + 2as$, work out $v$ when $u = 9$, $a = 8$ and $s = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "v^{2} = u^{2} + 2as", "explanation": "The formula gives $v^{2}$, so we will need a square root at the end to find $v$.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "v = ?", "explanation": "We must find the final velocity $v$.", "diagram": null },
        { "stepNumber": 3, "description": "List the initial velocity.", "workingLatex": "u = 9", "explanation": "The object starts at nine units of speed.", "diagram": null },
        { "stepNumber": 4, "description": "List the acceleration.", "workingLatex": "a = 8", "explanation": "The acceleration is eight units.", "diagram": null },
        { "stepNumber": 5, "description": "List the displacement.", "workingLatex": "s = 9", "explanation": "The object moves nine units of distance.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "v^{2} = u^{2} + 2as", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "v^{2} = 9^{2} + 2 \\times 8 \\times 9", "explanation": "Each letter is replaced by its number.", "diagram": null },
        { "stepNumber": 8, "description": "Deal with the power first.", "workingLatex": "9^{2} = 81", "explanation": "Indices come before multiplication, so we square the initial velocity first.", "diagram": null },
        { "stepNumber": 9, "description": "Work out the second term.", "workingLatex": "2 \\times 8 \\times 9 = 144", "explanation": "Multiplying two, eight and nine gives one hundred and forty-four.", "diagram": null },
        { "stepNumber": 10, "description": "Add.", "workingLatex": "v^{2} = 81 + 144 = 225", "explanation": "Adding the two parts gives the value of $v^{2}$.", "diagram": null },
        { "stepNumber": 11, "description": "Undo the square.", "workingLatex": "v = \\sqrt{225}", "explanation": "Since the formula gives $v^{2}$, we take the square root to find $v$.", "diagram": null },
        { "stepNumber": 12, "description": "Take the square root.", "workingLatex": "\\sqrt{225} = 15", "explanation": "Fifteen squared is two hundred and twenty-five, so the square root is fifteen.", "diagram": null },
        { "stepNumber": 13, "description": "State the result.", "workingLatex": "v = 15", "explanation": "The final velocity is fifteen units of speed.", "diagram": null },
        { "stepNumber": 14, "description": "Interpret in context.", "workingLatex": "9 \\to 15", "explanation": "The object speeds up from nine to fifteen as it accelerates over the distance, which is consistent with a positive acceleration.", "diagram": null }
      ],
      "finalAnswer": "$v = 15$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "kinetic energy", "decimals"],
    "questionText": "The kinetic energy of an object is $E = \\tfrac{1}{2}mv^{2}$. Work out $E$ when $m = 1.5$ and $v = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "E = \\tfrac{1}{2}mv^{2}", "explanation": "Kinetic energy uses the square of the speed, so we square before multiplying by the mass and the half.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "E = ?", "explanation": "We are finding the kinetic energy.", "diagram": null },
        { "stepNumber": 3, "description": "List the mass.", "workingLatex": "m = 1.5", "explanation": "The mass is one-and-a-half units.", "diagram": null },
        { "stepNumber": 4, "description": "List the speed.", "workingLatex": "v = 4", "explanation": "The object moves at four units of speed.", "diagram": null },
        { "stepNumber": 5, "description": "Note the order of operations.", "workingLatex": "v^{2} \\text{ first}", "explanation": "The square applies only to the speed, so it is dealt with before any multiplication.", "diagram": null },
        { "stepNumber": 6, "description": "Write down the formula.", "workingLatex": "E = \\tfrac{1}{2}mv^{2}", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "E = \\tfrac{1}{2} \\times 1.5 \\times 4^{2}", "explanation": "Each letter is replaced by its number, keeping the power on the speed.", "diagram": null },
        { "stepNumber": 8, "description": "Deal with the power first.", "workingLatex": "4^{2} = 16", "explanation": "Squaring the speed comes before multiplying.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite the formula.", "workingLatex": "E = \\tfrac{1}{2} \\times 1.5 \\times 16", "explanation": "Now only multiplication and the half remain.", "diagram": null },
        { "stepNumber": 10, "description": "Halve the mass first.", "workingLatex": "\\tfrac{1}{2} \\times 1.5 = 0.75", "explanation": "Taking half of one-and-a-half gives $0.75$; combining the half with the mass first keeps the numbers manageable.", "diagram": null },
        { "stepNumber": 11, "description": "Multiply by the squared speed.", "workingLatex": "0.75 \\times 16 = 12", "explanation": "Three quarters of sixteen is twelve.", "diagram": null },
        { "stepNumber": 12, "description": "State the result.", "workingLatex": "E = 12", "explanation": "The kinetic energy is twelve units.", "diagram": null },
        { "stepNumber": 13, "description": "Check with a different order.", "workingLatex": "1.5 \\times 16 = 24, \\ \\tfrac{1}{2}(24) = 12", "explanation": "Multiplying the mass by the squared speed first and then halving gives the same twelve, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$E = 12$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["substitution", "negative numbers", "brackets", "two variables"],
    "questionText": "Work out the value of $3(a + b)^{2} - 2ab$ when $a = 2$ and $b = -1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the instruction.", "workingLatex": "a = 2, \\quad b = -1", "explanation": "We substitute both values, taking care with the negative $b$ throughout.", "diagram": null },
        { "stepNumber": 2, "description": "Note the order of operations.", "workingLatex": "\\text{bracket, power, then the terms}", "explanation": "We finish the bracket and its square first, then handle the $2ab$ term.", "diagram": null },
        { "stepNumber": 3, "description": "Write down the expression.", "workingLatex": "3(a + b)^{2} - 2ab", "explanation": "There is a squared bracket multiplied by three, and a separate product term.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the values.", "workingLatex": "3(2 + (-1))^{2} - 2 \\times 2 \\times (-1)", "explanation": "Brackets around $-1$ keep its sign attached during every calculation.", "diagram": null },
        { "stepNumber": 5, "description": "Work out the inner bracket.", "workingLatex": "2 + (-1) = 1", "explanation": "Adding a negative one is the same as subtracting one, giving one.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite with the bracket done.", "workingLatex": "3 \\times 1^{2} - 2 \\times 2 \\times (-1)", "explanation": "Now the value inside the bracket is one.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the power.", "workingLatex": "1^{2} = 1", "explanation": "One squared is one.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the first term.", "workingLatex": "3 \\times 1 = 3", "explanation": "Three times one is three.", "diagram": null },
        { "stepNumber": 9, "description": "Work out the product in the second term.", "workingLatex": "2 \\times 2 \\times (-1) = -4", "explanation": "Multiplying two by two gives four, and the negative $b$ makes it minus four.", "diagram": null },
        { "stepNumber": 10, "description": "Rewrite the whole expression.", "workingLatex": "3 - (-4)", "explanation": "The expression subtracts the second term, and that term is negative.", "diagram": null },
        { "stepNumber": 11, "description": "Handle the double negative.", "workingLatex": "3 - (-4) = 3 + 4", "explanation": "Subtracting a negative is the same as adding, the trickiest step here.", "diagram": null },
        { "stepNumber": 12, "description": "Add.", "workingLatex": "3 + 4 = 7", "explanation": "Adding four to three gives seven.", "diagram": null },
        { "stepNumber": 13, "description": "State the result.", "workingLatex": "3(a + b)^{2} - 2ab = 7", "explanation": "This is the value of the expression when $a = 2$ and $b = -1$.", "diagram": null },
        { "stepNumber": 14, "description": "Confirm the sign work.", "workingLatex": "ab = 2 \\times (-1) = -2", "explanation": "Since $ab$ is negative, subtracting $2ab$ adds a positive amount, which is why the answer grew.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.algebra.substitution.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Substitution",
    "subtopicId": "gcse.algebra.substitution",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["substitution", "formula", "kinematics", "interpretation"],
    "questionText": "A cyclist accelerates using $v = u + at$, where speeds are in m/s and time in seconds. Work out the final speed $v$ when $u = 12$, $a = 3$ and $t = 6$, and state what it means.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the formula.", "workingLatex": "v = u + at", "explanation": "The final speed is the starting speed plus the extra speed gained from accelerating over the time.", "diagram": null },
        { "stepNumber": 2, "description": "State the quantity we want.", "workingLatex": "v = ?", "explanation": "We are finding the cyclist's final speed in metres per second.", "diagram": null },
        { "stepNumber": 3, "description": "List the initial speed.", "workingLatex": "u = 12", "explanation": "The cyclist starts at twelve metres per second.", "diagram": null },
        { "stepNumber": 4, "description": "List the acceleration.", "workingLatex": "a = 3", "explanation": "The speed increases by three metres per second every second.", "diagram": null },
        { "stepNumber": 5, "description": "List the time.", "workingLatex": "t = 6", "explanation": "The acceleration lasts six seconds.", "diagram": null },
        { "stepNumber": 6, "description": "Note the order of operations.", "workingLatex": "at \\text{ before adding } u", "explanation": "The term $at$ is a multiplication and must be done before the addition.", "diagram": null },
        { "stepNumber": 7, "description": "Write down the formula.", "workingLatex": "v = u + at", "explanation": "We keep the formula in view before substituting.", "diagram": null },
        { "stepNumber": 8, "description": "Substitute the values.", "workingLatex": "v = 12 + 3 \\times 6", "explanation": "Each letter is replaced by its number in the correct place.", "diagram": null },
        { "stepNumber": 9, "description": "Work out the product first.", "workingLatex": "3 \\times 6 = 18", "explanation": "The extra speed gained is three per second for six seconds, giving eighteen.", "diagram": null },
        { "stepNumber": 10, "description": "Rewrite the formula.", "workingLatex": "v = 12 + 18", "explanation": "With the product known, only the addition remains.", "diagram": null },
        { "stepNumber": 11, "description": "Add.", "workingLatex": "12 + 18 = 30", "explanation": "Adding eighteen to twelve gives thirty.", "diagram": null },
        { "stepNumber": 12, "description": "Attach the unit.", "workingLatex": "v = 30 \\text{ m/s}", "explanation": "Since speeds were in metres per second, the final speed is in the same unit.", "diagram": null },
        { "stepNumber": 13, "description": "State the result.", "workingLatex": "v = 30 \\text{ m/s}", "explanation": "The cyclist's final speed is thirty metres per second.", "diagram": null },
        { "stepNumber": 14, "description": "Interpret the answer in context.", "workingLatex": "12 \\to 30 \\text{ over } 6\\text{ s}", "explanation": "The cyclist gains eighteen metres per second over the six seconds, so their steady acceleration more than doubles their speed from twelve to thirty.", "diagram": null }
      ],
      "finalAnswer": "$v = 30 \\text{ m/s}$"
    }
  }
];
