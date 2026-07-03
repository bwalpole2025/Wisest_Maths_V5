import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.indices-surds.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "index laws",
      "simplifying"
    ],
    "questionText": "Simplify $x^5 \\times x^3$, leaving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the operation.",
          "workingLatex": "x^5 \\times x^3",
          "explanation": "We are multiplying two powers of the same base $x$, which is exactly the situation the multiplication law of indices handles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the relevant index law.",
          "workingLatex": "x^m \\times x^n = x^{m+n}",
          "explanation": "When multiplying powers of the same base, you keep the base and add the indices, because you are combining $5$ factors of $x$ with $3$ more.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the indices.",
          "workingLatex": "m + n = 5 + 3 = 8",
          "explanation": "Adding the two indices $5$ and $3$ gives $8$, the total number of factors of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the combined power.",
          "workingLatex": "x^5 \\times x^3 = x^{8}",
          "explanation": "Placing the summed index on the common base gives $x^8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the meaning.",
          "workingLatex": "\\underbrace{x \\cdots x}_{5} \\times \\underbrace{x \\cdots x}_{3} = \\underbrace{x \\cdots x}_{8}",
          "explanation": "Written out in full, five $x$'s times three $x$'s really is eight $x$'s multiplied together, confirming the law.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x^{8}",
          "explanation": "The simplified expression in index form is $x^8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^5 \\times x^3 = x^{5+3} = x^{8}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "index laws",
      "power of a power"
    ],
    "questionText": "Simplify $\\left(a^4\\right)^3$, leaving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the operation.",
          "workingLatex": "\\left(a^4\\right)^3",
          "explanation": "We are raising a power to another power, which the `power of a power' law of indices governs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the relevant index law.",
          "workingLatex": "\\left(a^m\\right)^n = a^{mn}",
          "explanation": "Raising a power to a power multiplies the indices, because $a^4$ is being used as a factor three times.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the indices.",
          "workingLatex": "m \\times n = 4 \\times 3 = 12",
          "explanation": "Multiplying $4$ by $3$ gives $12$; each of the three copies contributes four factors of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the combined power.",
          "workingLatex": "\\left(a^4\\right)^3 = a^{12}",
          "explanation": "Placing the product of the indices on the base gives $a^{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the meaning.",
          "workingLatex": "a^4 \\times a^4 \\times a^4 = a^{4+4+4} = a^{12}",
          "explanation": "Expanding the outer power as three factors and adding indices gives the same $a^{12}$, confirming the shortcut.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "a^{12}",
          "explanation": "The simplified expression in index form is $a^{12}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(a^4\\right)^3 = a^{4 \\times 3} = a^{12}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "index laws",
      "dividing"
    ],
    "questionText": "Simplify $\\dfrac{y^7}{y^2}$, leaving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the operation.",
          "workingLatex": "\\dfrac{y^7}{y^2}",
          "explanation": "We are dividing two powers of the same base $y$, which the division law of indices handles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the relevant index law.",
          "workingLatex": "\\dfrac{y^m}{y^n} = y^{m-n}",
          "explanation": "Dividing powers of the same base keeps the base and subtracts the indices, since two factors of $y$ cancel from the seven on top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the indices.",
          "workingLatex": "m - n = 7 - 2 = 5",
          "explanation": "Subtracting $2$ from $7$ leaves $5$ factors of $y$ after cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the simplified power.",
          "workingLatex": "\\dfrac{y^7}{y^2} = y^{5}",
          "explanation": "Placing the difference of indices on the base gives $y^5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check by cancelling.",
          "workingLatex": "\\dfrac{y \\cdot y \\cdot y \\cdot y \\cdot y \\cdot y \\cdot y}{y \\cdot y} = y^5",
          "explanation": "Cancelling the two bottom $y$'s against two of the seven on top leaves exactly five, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "y^{5}",
          "explanation": "The simplified expression in index form is $y^5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{y^7}{y^2} = y^{7-2} = y^{5}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "negative indices",
      "evaluating"
    ],
    "questionText": "Evaluate $2^{-3}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the negative index.",
          "workingLatex": "2^{-3}",
          "explanation": "A negative index signals a reciprocal, so the first job is to turn the negative power into a positive one underneath a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the negative-index law.",
          "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}",
          "explanation": "A negative index means `one over' the corresponding positive power, because dividing repeatedly by the base is the reverse of multiplying.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the law.",
          "workingLatex": "2^{-3} = \\dfrac{1}{2^{3}}",
          "explanation": "Rewriting with a positive index puts $2^3$ in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the positive power.",
          "workingLatex": "2^3 = 8",
          "explanation": "Computing $2\\times2\\times2$ gives $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the fraction.",
          "workingLatex": "2^{-3} = \\dfrac{1}{8}",
          "explanation": "Substituting $2^3=8$ gives the exact value $\\tfrac18$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{1}{8}",
          "explanation": "The exact value of $2^{-3}$ is $\\tfrac18$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2^{-3} = \\dfrac{1}{2^{3}} = \\dfrac{1}{8}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds"
    ],
    "questionText": "Simplify $\\sqrt{50}$, giving your answer in the form $a\\sqrt{b}$ where $b$ is as small as possible.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look for a square factor.",
          "workingLatex": "50 = 25 \\times 2",
          "explanation": "To simplify a surd we split the number under the root into a perfect square times whatever is left, and $25$ is the largest square factor of $50$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the surd over the product.",
          "workingLatex": "\\sqrt{50} = \\sqrt{25 \\times 2}",
          "explanation": "Rewriting $50$ as $25\\times2$ prepares the surd to be broken apart.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the product rule for surds.",
          "workingLatex": "\\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2}",
          "explanation": "The root of a product equals the product of the roots, which lets us pull out the square part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root of 25.",
          "workingLatex": "\\sqrt{25} = 5",
          "explanation": "Since $25$ is a perfect square, its root is the whole number $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the parts.",
          "workingLatex": "\\sqrt{50} = 5\\sqrt{2}",
          "explanation": "Writing the $5$ in front of the remaining $\\sqrt2$ gives the simplified surd.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check b cannot be reduced.",
          "workingLatex": "2 \\text{ has no square factor} > 1",
          "explanation": "Since $2$ is prime, no further square can be taken out, so the surd is fully simplified.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "5\\sqrt{2}",
          "explanation": "The simplified form is $5\\sqrt2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25}\\,\\sqrt{2} = 5\\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds",
      "adding surds"
    ],
    "questionText": "Simplify $\\sqrt{12} + \\sqrt{27}$, giving your answer in the form $a\\sqrt{b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the first surd.",
          "workingLatex": "\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}",
          "explanation": "Taking out the largest square factor $4$ from $12$ turns $\\sqrt{12}$ into $2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the second surd.",
          "workingLatex": "\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}",
          "explanation": "Taking out the square factor $9$ from $27$ turns $\\sqrt{27}$ into $3\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the sum.",
          "workingLatex": "\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3}",
          "explanation": "Both surds now share the same irrational part $\\sqrt3$, so they are `like' surds that can be combined.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise like surds.",
          "workingLatex": "2\\sqrt{3} \\text{ and } 3\\sqrt{3} \\text{ have the same } \\sqrt{3}",
          "explanation": "Like surds behave just like like terms in algebra ($2x+3x$), so we add their whole-number coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the coefficients.",
          "workingLatex": "2 + 3 = 5",
          "explanation": "Adding the coefficients $2$ and $3$ gives $5$ copies of $\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine.",
          "workingLatex": "2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}",
          "explanation": "Attaching the coefficient $5$ to $\\sqrt3$ gives the combined surd.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "5\\sqrt{3}",
          "explanation": "The simplified sum is $5\\sqrt3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "indices",
      "fractional indices",
      "evaluating"
    ],
    "questionText": "Evaluate $8^{\\frac{2}{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the fractional index.",
          "workingLatex": "8^{\\frac{2}{3}} = \\left(8^{\\frac{1}{3}}\\right)^{2}",
          "explanation": "A fractional index $\\tfrac{m}{n}$ means `take the $n$th root, then raise to the power $m$'. The denominator $3$ is a cube root and the numerator $2$ is a square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the easier order.",
          "workingLatex": "\\text{root first, then power}",
          "explanation": "Taking the cube root first keeps the numbers small, which is easier than cubing $8$ and then taking a root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the cube root of 8.",
          "workingLatex": "8^{\\frac{1}{3}} = 2",
          "explanation": "Since $2^3 = 8$, the cube root of $8$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the remaining power.",
          "workingLatex": "\\left(8^{\\frac{1}{3}}\\right)^{2} = 2^{2}",
          "explanation": "The numerator $2$ now tells us to square the cube root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the square.",
          "workingLatex": "2^2 = 4",
          "explanation": "Squaring the cube root $2$ gives $2^2 = 4$, the value of the whole expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "8^{\\frac{2}{3}} = 4",
          "explanation": "The value of $8^{2/3}$ is $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8^{\\frac{2}{3}} = \\left(8^{\\frac{1}{3}}\\right)^{2} = 2^{2} = 4$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "negative fractional indices",
      "evaluating"
    ],
    "questionText": "Evaluate $16^{-\\frac{3}{4}}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the negative sign first.",
          "workingLatex": "16^{-\\frac{3}{4}} = \\dfrac{1}{16^{\\frac{3}{4}}}",
          "explanation": "A negative index means take the reciprocal, so we move the positive power $16^{3/4}$ into the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the fractional index.",
          "workingLatex": "16^{\\frac{3}{4}} = \\left(16^{\\frac{1}{4}}\\right)^{3}",
          "explanation": "The denominator $4$ is a fourth root and the numerator $3$ is a cube; doing the root first keeps the numbers small.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the fourth root of 16.",
          "workingLatex": "16^{\\frac{1}{4}} = 2",
          "explanation": "Since $2^4 = 16$, the fourth root of $16$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the remaining power.",
          "workingLatex": "\\left(16^{\\frac{1}{4}}\\right)^{3} = 2^{3}",
          "explanation": "The numerator $3$ tells us to cube the fourth root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cube.",
          "workingLatex": "2^3 = 8",
          "explanation": "Cubing $2$ gives $8$, so $16^{3/4} = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back into the reciprocal.",
          "workingLatex": "16^{-\\frac{3}{4}} = \\dfrac{1}{8}",
          "explanation": "Putting $16^{3/4}=8$ into the denominator gives $\\tfrac18$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the sign is handled.",
          "workingLatex": "\\text{negative index} \\Rightarrow \\text{a fraction} < 1",
          "explanation": "The answer is a proper fraction, which is expected because a negative index makes a number bigger than $1$ shrink.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "16^{-0.75} = 0.125 = \\tfrac{1}{8}",
          "explanation": "Evaluating the original power on a calculator gives $0.125$, which is exactly $\\tfrac18$, confirming the working.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{1}{8}",
          "explanation": "The exact value of $16^{-3/4}$ is $\\tfrac18$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$16^{-\\frac{3}{4}} = \\dfrac{1}{16^{\\frac{3}{4}}} = \\dfrac{1}{\\left(16^{1/4}\\right)^{3}} = \\dfrac{1}{2^{3}} = \\dfrac{1}{8}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds",
      "subtracting surds"
    ],
    "questionText": "Simplify $\\sqrt{72} - \\sqrt{8}$, giving your answer in the form $a\\sqrt{b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the first surd.",
          "workingLatex": "\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}",
          "explanation": "The largest square factor of $72$ is $36$, so $\\sqrt{72}=6\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the second surd.",
          "workingLatex": "\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}",
          "explanation": "The largest square factor of $8$ is $4$, so $\\sqrt8 = 2\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the difference.",
          "workingLatex": "\\sqrt{72} - \\sqrt{8} = 6\\sqrt{2} - 2\\sqrt{2}",
          "explanation": "Both surds reduce to multiples of $\\sqrt2$, so they are like surds ready to be combined.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise like surds.",
          "workingLatex": "6\\sqrt{2} \\text{ and } 2\\sqrt{2} \\text{ share } \\sqrt{2}",
          "explanation": "Because the irrational parts match, we can subtract the coefficients just like like terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the coefficients.",
          "workingLatex": "6 - 2 = 4",
          "explanation": "Subtracting $2$ from $6$ leaves $4$ copies of $\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine.",
          "workingLatex": "6\\sqrt{2} - 2\\sqrt{2} = 4\\sqrt{2}",
          "explanation": "Attaching the coefficient $4$ to $\\sqrt2$ gives the simplified surd.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check b is fully reduced.",
          "workingLatex": "2 \\text{ is prime}",
          "explanation": "Since $2$ has no square factor, the surd cannot be simplified further.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "\\sqrt{72}-\\sqrt{8} \\approx 8.49 - 2.83 = 5.66,\\quad 4\\sqrt{2} \\approx 5.66",
          "explanation": "Both the original difference and $4\\sqrt2$ evaluate to about $5.66$, confirming the simplification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "4\\sqrt{2}",
          "explanation": "The simplified difference is $4\\sqrt2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{72} - \\sqrt{8} = 6\\sqrt{2} - 2\\sqrt{2} = 4\\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator"
    ],
    "questionText": "Rationalise the denominator of $\\dfrac{1}{\\sqrt{5}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{remove the surd from the denominator}",
          "explanation": "`Rationalising' means rewriting the fraction so the bottom is a whole number, which makes it easier to interpret and combine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose what to multiply by.",
          "workingLatex": "\\text{multiply top and bottom by } \\sqrt{5}",
          "explanation": "Multiplying by $\\tfrac{\\sqrt5}{\\sqrt5}$ (which equals $1$) does not change the value but will clear the surd, since $\\sqrt5\\times\\sqrt5 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the fraction.",
          "workingLatex": "\\dfrac{1}{\\sqrt{5}} \\times \\dfrac{\\sqrt{5}}{\\sqrt{5}}",
          "explanation": "We apply the same factor to numerator and denominator to keep the fraction equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the numerator.",
          "workingLatex": "1 \\times \\sqrt{5} = \\sqrt{5}",
          "explanation": "The top becomes $\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the denominator.",
          "workingLatex": "\\sqrt{5} \\times \\sqrt{5} = 5",
          "explanation": "The bottom becomes $\\sqrt5\\times\\sqrt5 = 5$, a rational number, which was the aim.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the result.",
          "workingLatex": "\\dfrac{1}{\\sqrt{5}} = \\dfrac{\\sqrt{5}}{5}",
          "explanation": "Combining top and bottom gives $\\tfrac{\\sqrt5}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the denominator is rational.",
          "workingLatex": "5 \\in \\mathbb{Q}",
          "explanation": "The denominator is now the whole number $5$, so the fraction is rationalised.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{1}{\\sqrt5} \\approx 0.447,\\quad \\dfrac{\\sqrt5}{5} \\approx 0.447",
          "explanation": "Both forms evaluate to about $0.447$, so the rationalised fraction has the same value as the original.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{\\sqrt{5}}{5}",
          "explanation": "The rationalised form is $\\tfrac{\\sqrt5}{5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{\\sqrt{5}} = \\dfrac{1}{\\sqrt{5}} \\times \\dfrac{\\sqrt{5}}{\\sqrt{5}} = \\dfrac{\\sqrt{5}}{5}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "surds",
      "expanding brackets",
      "difference of two squares"
    ],
    "questionText": "Expand and simplify $\\left(2 + \\sqrt{3}\\right)\\left(2 - \\sqrt{3}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the structure.",
          "workingLatex": "(a+b)(a-b) \\text{ with } a = 2,\\ b = \\sqrt{3}",
          "explanation": "The two brackets are a `difference of two squares' pattern, so the cross terms will cancel and no surd should remain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the difference-of-squares identity.",
          "workingLatex": "(a+b)(a-b) = a^2 - b^2",
          "explanation": "Using this identity is quicker than expanding all four terms, and it explains why the surd disappears.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "= 2^2 - \\left(\\sqrt{3}\\right)^2",
          "explanation": "Here $a=2$ and $b=\\sqrt3$, so we square each.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the first term.",
          "workingLatex": "2^2 = 4",
          "explanation": "Squaring the first term $a=2$ gives $4$, the rational part before subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the surd.",
          "workingLatex": "\\left(\\sqrt{3}\\right)^2 = 3",
          "explanation": "Squaring a square root undoes the root, so $(\\sqrt3)^2 = 3$ — this is why the answer is rational.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract.",
          "workingLatex": "4 - 3 = 1",
          "explanation": "Taking $3$ from $4$ leaves the value $1$ after the two squares are combined.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note why the answer is rational.",
          "workingLatex": "\\text{cross terms } +2\\sqrt3 \\text{ and } -2\\sqrt3 \\text{ cancel}",
          "explanation": "Because the two brackets are conjugates, the surd cross terms cancel during expansion, leaving a purely rational result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "(2+1.732)(2-1.732) \\approx 3.732 \\times 0.268 \\approx 1",
          "explanation": "Multiplying the decimal approximations of the two brackets gives about $1$, confirming the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "1",
          "explanation": "The expression simplifies to the rational number $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(2+\\sqrt{3}\\right)\\left(2-\\sqrt{3}\\right) = 2^2 - \\left(\\sqrt{3}\\right)^2 = 4 - 3 = 1$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "indices",
      "fractional indices",
      "evaluating fractions"
    ],
    "questionText": "Evaluate $\\left(\\dfrac{27}{8}\\right)^{\\frac{2}{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the power to numerator and denominator.",
          "workingLatex": "\\left(\\dfrac{27}{8}\\right)^{\\frac{2}{3}} = \\dfrac{27^{\\frac{2}{3}}}{8^{\\frac{2}{3}}}",
          "explanation": "A power of a fraction applies to the top and bottom separately, so we can handle $27$ and $8$ independently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the fractional index.",
          "workingLatex": "x^{\\frac{2}{3}} = \\left(x^{\\frac{1}{3}}\\right)^{2}",
          "explanation": "The denominator $3$ means a cube root and the numerator $2$ means square it; both $27$ and $8$ are perfect cubes, so roots are clean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cube-root the numerator.",
          "workingLatex": "27^{\\frac{1}{3}} = 3",
          "explanation": "Since $3^3 = 27$, the cube root of $27$ is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cube-root the denominator.",
          "workingLatex": "8^{\\frac{1}{3}} = 2",
          "explanation": "Since $2^3 = 8$, the cube root of $8$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square each result.",
          "workingLatex": "3^2 = 9, \\quad 2^2 = 4",
          "explanation": "Applying the numerator power squares both roots, giving $9$ on top and $4$ on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the fraction.",
          "workingLatex": "\\dfrac{27^{2/3}}{8^{2/3}} = \\dfrac{9}{4}",
          "explanation": "Combining the two results gives $\\tfrac94$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check it cannot be simplified.",
          "workingLatex": "\\gcd(9,4) = 1",
          "explanation": "Since $9$ and $4$ share no common factor, the fraction is already in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "(27/8)^{2/3} = 3.375^{0.667} \\approx 2.25 = \\tfrac{9}{4}",
          "explanation": "Evaluating the original expression on a calculator gives about $2.25$, which equals $\\tfrac94$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{9}{4}",
          "explanation": "The value of $\\left(\\tfrac{27}{8}\\right)^{2/3}$ is $\\tfrac94$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(\\dfrac{27}{8}\\right)^{\\frac{2}{3}} = \\dfrac{27^{2/3}}{8^{2/3}} = \\dfrac{3^2}{2^2} = \\dfrac{9}{4}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations"
    ],
    "questionText": "Solve the equation $4^{x} = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both sides with a common base.",
          "workingLatex": "4 = 2^2, \\quad 8 = 2^3",
          "explanation": "Since $4$ and $8$ are both powers of $2$, rewriting everything with base $2$ lets us compare the indices directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the left-hand side.",
          "workingLatex": "4^{x} = \\left(2^2\\right)^{x} = 2^{2x}",
          "explanation": "Using the power-of-a-power law, $\\left(2^2\\right)^x = 2^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the right-hand side.",
          "workingLatex": "8 = 2^{3}",
          "explanation": "Expressing $8$ as $2^3$ puts both sides in the same form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the two expressions.",
          "workingLatex": "2^{2x} = 2^{3}",
          "explanation": "The equation now compares two powers of the same base.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "2x = 3",
          "explanation": "If two powers of the same base are equal, their indices must be equal, so we set $2x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x.",
          "workingLatex": "x = \\dfrac{3}{2}",
          "explanation": "Dividing both sides by $2$ gives $x = \\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the solution.",
          "workingLatex": "4^{3/2} = \\left(\\sqrt{4}\\right)^3 = 2^3 = 8 \\ \\checkmark",
          "explanation": "Substituting back confirms $4^{3/2} = 8$, so the solution is correct.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sense-check the size of x.",
          "workingLatex": "4^1 = 4 < 8 < 16 = 4^2 \\Rightarrow 1 < x < 2",
          "explanation": "Because $8$ lies between $4^1$ and $4^2$, the solution must sit between $1$ and $2$, and $\\tfrac32$ does — a reassuring check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x = \\dfrac{3}{2}",
          "explanation": "The solution of $4^x = 8$ is $x = \\tfrac32$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4^x = 8 \\Rightarrow 2^{2x} = 2^{3} \\Rightarrow 2x = 3 \\Rightarrow x = \\dfrac{3}{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Rationalise the denominator of $\\dfrac{1}{\\sqrt{3} + 1}$, giving your answer in the form $\\dfrac{\\sqrt{3} - 1}{c}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{remove the surd from the two-term denominator}",
          "explanation": "The denominator $\\sqrt3+1$ has two terms, so we clear the surd by multiplying by its conjugate, which produces a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the conjugate.",
          "workingLatex": "\\text{conjugate of } \\sqrt{3} + 1 \\text{ is } \\sqrt{3} - 1",
          "explanation": "The conjugate keeps the same terms but flips the sign between them, so their product has no surd.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{1}{\\sqrt{3}+1} \\times \\dfrac{\\sqrt{3}-1}{\\sqrt{3}-1}",
          "explanation": "Multiplying by $\\tfrac{\\sqrt3-1}{\\sqrt3-1}=1$ leaves the value unchanged while setting up the denominator to rationalise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the denominator.",
          "workingLatex": "(\\sqrt{3}+1)(\\sqrt{3}-1) = 3 - 1 = 2",
          "explanation": "The difference of squares gives $(\\sqrt3)^2 - 1^2 = 3 - 1 = 2$, a rational denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the numerator.",
          "workingLatex": "1 \\times (\\sqrt{3}-1) = \\sqrt{3} - 1",
          "explanation": "The top simply becomes $\\sqrt3 - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the combined fraction.",
          "workingLatex": "\\dfrac{\\sqrt{3}-1}{2}",
          "explanation": "Placing the numerator over the rational denominator gives $\\tfrac{\\sqrt3-1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the denominator is rational.",
          "workingLatex": "2 \\in \\mathbb{Q}",
          "explanation": "The denominator is now the whole number $2$, so the surd has been cleared and $c=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{1}{\\sqrt{3}+1} \\approx 0.366,\\quad \\dfrac{\\sqrt{3}-1}{2} \\approx 0.366",
          "explanation": "Both the original and rationalised forms evaluate to about $0.366$, confirming they are equal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{\\sqrt{3} - 1}{2}",
          "explanation": "The rationalised form is $\\tfrac{\\sqrt3-1}{2}$, so $c = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{\\sqrt{3}+1} = \\dfrac{1}{\\sqrt{3}+1} \\times \\dfrac{\\sqrt{3}-1}{\\sqrt{3}-1} = \\dfrac{\\sqrt{3}-1}{3-1} = \\dfrac{\\sqrt{3}-1}{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds",
      "dividing surds"
    ],
    "questionText": "Simplify $\\dfrac{\\sqrt{8} + \\sqrt{18}}{\\sqrt{2}}$, giving your answer as an integer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the first surd on top.",
          "workingLatex": "\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}",
          "explanation": "Taking out the square factor $4$ turns $\\sqrt8$ into $2\\sqrt2$, so the numerator becomes a multiple of $\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the second surd on top.",
          "workingLatex": "\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}",
          "explanation": "Taking out the square factor $9$ turns $\\sqrt{18}$ into $3\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the like surds in the numerator.",
          "workingLatex": "2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}",
          "explanation": "Both terms are multiples of $\\sqrt2$, so we add the coefficients to get $5\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the whole fraction.",
          "workingLatex": "\\dfrac{\\sqrt{8} + \\sqrt{18}}{\\sqrt{2}} = \\dfrac{5\\sqrt{2}}{\\sqrt{2}}",
          "explanation": "Replacing the numerator with its simplified form gives a much cleaner fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common surd.",
          "workingLatex": "\\dfrac{5\\sqrt{2}}{\\sqrt{2}} = 5 \\times \\dfrac{\\sqrt{2}}{\\sqrt{2}}",
          "explanation": "The $\\sqrt2$ on top and bottom are identical, so they divide to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the surd ratio.",
          "workingLatex": "\\dfrac{\\sqrt{2}}{\\sqrt{2}} = 1",
          "explanation": "Any non-zero quantity divided by itself is $1$, clearing the surd entirely.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the result.",
          "workingLatex": "5 \\times 1 = 5",
          "explanation": "Multiplying $5$ by $1$ leaves $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the answer is an integer.",
          "workingLatex": "5 \\in \\mathbb{Z}",
          "explanation": "The surds have cancelled completely, leaving the whole number $5$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Alternative check.",
          "workingLatex": "\\dfrac{5\\sqrt2}{\\sqrt2} = 5\\sqrt{\\tfrac{2}{2}} = 5\\sqrt{1} = 5",
          "explanation": "Combining the roots first gives $5\\sqrt{1}=5$, confirming the result by a second route.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{2.83 + 4.24}{1.41} \\approx 5",
          "explanation": "Approximate decimals give about $5$, a useful sanity check on the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the method.",
          "workingLatex": "\\text{simplify surds before dividing}",
          "explanation": "Simplifying each surd first turned an awkward-looking fraction into a simple cancellation — the key strategy here.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the tidy structure.",
          "workingLatex": "\\text{numerator was a multiple of the denominator}",
          "explanation": "Because the numerator reduced to $5\\sqrt2$ and the denominator was $\\sqrt2$, the division was exact.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "5",
          "explanation": "The simplified value of the expression is the integer $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sqrt{8}+\\sqrt{18}}{\\sqrt{2}} = \\dfrac{2\\sqrt{2}+3\\sqrt{2}}{\\sqrt{2}} = \\dfrac{5\\sqrt{2}}{\\sqrt{2}} = 5$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "surds",
      "expanding brackets",
      "squaring surds"
    ],
    "questionText": "Express $\\left(2 - \\sqrt{3}\\right)^{2}$ in the form $a + b\\sqrt{3}$, where $a$ and $b$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the square as a product.",
          "workingLatex": "\\left(2 - \\sqrt{3}\\right)^{2} = \\left(2 - \\sqrt{3}\\right)\\left(2 - \\sqrt{3}\\right)",
          "explanation": "Squaring means multiplying the bracket by itself, so we expand the two identical factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the expansion identity.",
          "workingLatex": "(a-b)^2 = a^2 - 2ab + b^2",
          "explanation": "Using this identity with $a=2$ and $b=\\sqrt3$ organises the expansion and reduces slips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the first term.",
          "workingLatex": "a^2 = 2^2 = 4",
          "explanation": "The first term squared is $2^2 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the middle term.",
          "workingLatex": "-2ab = -2 \\times 2 \\times \\sqrt{3} = -4\\sqrt{3}",
          "explanation": "The cross term is $-2ab$; here it gives $-4\\sqrt3$, the surd part of the answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the surd term.",
          "workingLatex": "b^2 = \\left(\\sqrt{3}\\right)^2 = 3",
          "explanation": "Squaring $\\sqrt3$ removes the root, giving the rational $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the three parts.",
          "workingLatex": "4 - 4\\sqrt{3} + 3",
          "explanation": "Collecting all three pieces gives $4 - 4\\sqrt3 + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the rational terms.",
          "workingLatex": "4 + 3 = 7",
          "explanation": "The whole-number parts $4$ and $3$ add to $7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write in the required form.",
          "workingLatex": "7 - 4\\sqrt{3}",
          "explanation": "Placing the rational part first gives the form $a+b\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify a and b.",
          "workingLatex": "a = 7, \\quad b = -4",
          "explanation": "Comparing with $a+b\\sqrt3$ gives $a=7$ and $b=-4$, both integers as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity-check the sign.",
          "workingLatex": "b < 0 \\text{ expected since } \\sqrt{3} \\text{ was subtracted}",
          "explanation": "Subtracting a surd and squaring naturally leaves a negative surd coefficient, matching $b=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify numerically.",
          "workingLatex": "(2 - 1.732)^2 \\approx 0.072,\\quad 7 - 4(1.732) \\approx 0.072",
          "explanation": "Both the original expression and $7-4\\sqrt3$ evaluate to about $0.07$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the method.",
          "workingLatex": "\\text{square the bracket, then collect rational and surd parts}",
          "explanation": "The general strategy is to expand fully and then group the rational terms separately from the surd terms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "7 - 4\\sqrt{3}",
          "explanation": "The expression equals $7 - 4\\sqrt3$, so $a=7$ and $b=-4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(2-\\sqrt{3}\\right)^2 = 4 - 4\\sqrt{3} + 3 = 7 - 4\\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "common base"
    ],
    "questionText": "Solve the equation $9^{x} = 27^{\\,x-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both bases as powers of 3.",
          "workingLatex": "9 = 3^2, \\quad 27 = 3^3",
          "explanation": "Both $9$ and $27$ are powers of $3$, so rewriting with base $3$ will let us compare indices directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the left-hand side.",
          "workingLatex": "9^{x} = \\left(3^2\\right)^{x} = 3^{2x}",
          "explanation": "Applying the power-of-a-power law gives $3^{2x}$ on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the right-hand side.",
          "workingLatex": "27^{\\,x-1} = \\left(3^3\\right)^{x-1} = 3^{3(x-1)}",
          "explanation": "Similarly the right-hand side becomes $3^{3(x-1)}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the equation with a common base.",
          "workingLatex": "3^{2x} = 3^{3(x-1)}",
          "explanation": "Both sides are now powers of $3$, so the equation reduces to comparing exponents.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "2x = 3(x-1)",
          "explanation": "Equal powers of the same base force equal indices, giving a linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket.",
          "workingLatex": "2x = 3x - 3",
          "explanation": "Multiplying out the right-hand side gives $3x - 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the x terms.",
          "workingLatex": "2x - 3x = -3",
          "explanation": "Subtracting $3x$ from both sides gathers the $x$ terms on the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify.",
          "workingLatex": "-x = -3",
          "explanation": "Combining $2x - 3x$ gives $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x.",
          "workingLatex": "x = 3",
          "explanation": "Multiplying both sides by $-1$ gives $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute back into the left side.",
          "workingLatex": "9^{3} = 729",
          "explanation": "Substituting $x=3$ into the left-hand side gives $9^3 = 729$, which we compare with the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute back into the right side.",
          "workingLatex": "27^{\\,3-1} = 27^{2} = 729",
          "explanation": "And $27^{2} = 729$, so both sides agree.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the solution.",
          "workingLatex": "729 = 729 \\ \\checkmark",
          "explanation": "Since both sides equal $729$, the solution $x=3$ is verified.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x = 3",
          "explanation": "The solution of $9^x = 27^{x-1}$ is $x = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$9^x = 27^{x-1} \\Rightarrow 3^{2x} = 3^{3(x-1)} \\Rightarrow 2x = 3x - 3 \\Rightarrow x = 3$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Rationalise the denominator of $\\dfrac{\\sqrt{5} + \\sqrt{2}}{\\sqrt{5} - \\sqrt{2}}$, giving your answer in the form $a + b\\sqrt{10}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate.",
          "workingLatex": "\\text{conjugate of } \\sqrt{5} - \\sqrt{2} \\text{ is } \\sqrt{5} + \\sqrt{2}",
          "explanation": "To clear a two-term surd denominator we multiply by its conjugate, because $(\\,)(\\,)$ then becomes a difference of two squares with no surds.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{\\sqrt{5}+\\sqrt{2}}{\\sqrt{5}-\\sqrt{2}} \\times \\dfrac{\\sqrt{5}+\\sqrt{2}}{\\sqrt{5}+\\sqrt{2}}",
          "explanation": "Multiplying by $1$ in this form keeps the value unchanged while setting up the denominator to rationalise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator.",
          "workingLatex": "\\left(\\sqrt{5}-\\sqrt{2}\\right)\\left(\\sqrt{5}+\\sqrt{2}\\right) = 5 - 2 = 3",
          "explanation": "The difference of squares gives $(\\sqrt5)^2-(\\sqrt2)^2 = 5-2 = 3$, a rational denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the numerator as a square.",
          "workingLatex": "\\left(\\sqrt{5}+\\sqrt{2}\\right)^2 = 5 + 2\\sqrt{10} + 2",
          "explanation": "The numerator is $(\\sqrt5+\\sqrt2)^2$; expanding gives $5$, the cross term $2\\sqrt{5}\\sqrt{2}=2\\sqrt{10}$, and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator.",
          "workingLatex": "5 + 2 + 2\\sqrt{10} = 7 + 2\\sqrt{10}",
          "explanation": "Adding the rational parts $5$ and $2$ gives $7 + 2\\sqrt{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the combined fraction.",
          "workingLatex": "\\dfrac{7 + 2\\sqrt{10}}{3}",
          "explanation": "Placing the simplified numerator over the rational denominator gives this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split into the required form.",
          "workingLatex": "\\dfrac{7}{3} + \\dfrac{2}{3}\\sqrt{10}",
          "explanation": "Separating the rational and surd parts writes the answer as $a + b\\sqrt{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify a and b.",
          "workingLatex": "a = \\dfrac{7}{3}, \\quad b = \\dfrac{2}{3}",
          "explanation": "Comparing with $a + b\\sqrt{10}$ gives $a=\\tfrac73$ and $b=\\tfrac23$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the denominator is rational.",
          "workingLatex": "3 \\in \\mathbb{Q}",
          "explanation": "The denominator is now the whole number $3$, so the expression is fully rationalised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note why the conjugate works.",
          "workingLatex": "(p-q)(p+q) = p^2 - q^2",
          "explanation": "The conjugate exploits the difference-of-squares identity, which squares away both surds at once.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{2.236 + 1.414}{2.236 - 1.414} \\approx 4.44",
          "explanation": "The original evaluates to about $4.44$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Match the check.",
          "workingLatex": "\\dfrac{7 + 2(3.162)}{3} \\approx 4.44",
          "explanation": "The rationalised form also gives about $4.44$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{7 + 2\\sqrt{10}}{3}",
          "explanation": "The rationalised expression is $\\tfrac{7+2\\sqrt{10}}{3}$, i.e. $\\tfrac73 + \\tfrac23\\sqrt{10}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sqrt{5}+\\sqrt{2}}{\\sqrt{5}-\\sqrt{2}} = \\dfrac{\\left(\\sqrt{5}+\\sqrt{2}\\right)^2}{5-2} = \\dfrac{7 + 2\\sqrt{10}}{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Express $\\dfrac{3 + \\sqrt{2}}{1 - \\sqrt{2}}$ in the form $a + b\\sqrt{2}$, where $a$ and $b$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate of the denominator.",
          "workingLatex": "\\text{conjugate of } 1 - \\sqrt{2} \\text{ is } 1 + \\sqrt{2}",
          "explanation": "To rationalise the two-term denominator we multiply by its conjugate, turning the bottom into a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{3+\\sqrt{2}}{1-\\sqrt{2}} \\times \\dfrac{1+\\sqrt{2}}{1+\\sqrt{2}}",
          "explanation": "Multiplying by $\\tfrac{1+\\sqrt2}{1+\\sqrt2}=1$ preserves the value while clearing the surd from the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator.",
          "workingLatex": "(1-\\sqrt{2})(1+\\sqrt{2}) = 1 - 2 = -1",
          "explanation": "The difference of squares gives $1^2 - (\\sqrt2)^2 = 1 - 2 = -1$, a rational (and negative) denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the numerator.",
          "workingLatex": "(3+\\sqrt{2})(1+\\sqrt{2}) = 3 + 3\\sqrt{2} + \\sqrt{2} + 2",
          "explanation": "Multiplying out all four products gives $3$, $3\\sqrt2$, $\\sqrt2$ and $(\\sqrt2)^2 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator.",
          "workingLatex": "3 + 2 + (3+1)\\sqrt{2} = 5 + 4\\sqrt{2}",
          "explanation": "Collecting the rational parts ($3+2=5$) and the surd parts ($3\\sqrt2+\\sqrt2=4\\sqrt2$) gives $5+4\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the fraction.",
          "workingLatex": "\\dfrac{5 + 4\\sqrt{2}}{-1}",
          "explanation": "Placing the numerator over the denominator $-1$ gives this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by minus one.",
          "workingLatex": "\\dfrac{5 + 4\\sqrt{2}}{-1} = -\\left(5 + 4\\sqrt{2}\\right)",
          "explanation": "Dividing by $-1$ simply negates every term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Distribute the negative sign.",
          "workingLatex": "-5 - 4\\sqrt{2}",
          "explanation": "Negating gives $-5 - 4\\sqrt2$, which is already in the form $a+b\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify a and b.",
          "workingLatex": "a = -5, \\quad b = -4",
          "explanation": "Comparing with $a+b\\sqrt2$ gives the integers $a=-5$ and $b=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Watch the negative denominator.",
          "workingLatex": "\\text{denominator } -1 \\text{ flips all signs}",
          "explanation": "The most common slip here is forgetting that the $-1$ changes the sign of both terms, so it is worth stating explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{3 + 1.414}{1 - 1.414} \\approx -10.66",
          "explanation": "The original expression evaluates to about $-10.66$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Match the check.",
          "workingLatex": "-5 - 4(1.414) \\approx -10.66",
          "explanation": "The answer $-5-4\\sqrt2$ also gives about $-10.66$, confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "-5 - 4\\sqrt{2}",
          "explanation": "The expression equals $-5 - 4\\sqrt2$, so $a=-5$ and $b=-4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3+\\sqrt{2}}{1-\\sqrt{2}} = \\dfrac{(3+\\sqrt{2})(1+\\sqrt{2})}{1-2} = \\dfrac{5+4\\sqrt{2}}{-1} = -5 - 4\\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "hidden quadratic"
    ],
    "questionText": "Solve the equation $2^{2x} - 6\\left(2^{x}\\right) + 8 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the hidden quadratic.",
          "workingLatex": "2^{2x} = \\left(2^{x}\\right)^{2}",
          "explanation": "Since $2^{2x}=(2^x)^2$, the equation is a quadratic in the quantity $2^x$ rather than in $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution.",
          "workingLatex": "\\text{let } y = 2^{x}",
          "explanation": "Replacing $2^x$ by $y$ turns the equation into a familiar quadratic that we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in y.",
          "workingLatex": "y^2 - 6y + 8 = 0",
          "explanation": "With $y=2^x$, the equation becomes $y^2 - 6y + 8 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "(y - 2)(y - 4) = 0",
          "explanation": "We seek two numbers multiplying to $8$ and adding to $6$, namely $2$ and $4$, giving these factors.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y.",
          "workingLatex": "y = 2 \\quad \\text{or} \\quad y = 4",
          "explanation": "Setting each factor to zero gives the two possible values of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Return to the substitution.",
          "workingLatex": "2^{x} = 2 \\quad \\text{or} \\quad 2^{x} = 4",
          "explanation": "Each value of $y$ is really $2^x$, so we now solve two simple index equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the first index equation.",
          "workingLatex": "2^{x} = 2^{1} \\Rightarrow x = 1",
          "explanation": "Writing $2$ as $2^1$ and comparing indices gives $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the second index equation.",
          "workingLatex": "2^{x} = 2^{2} \\Rightarrow x = 2",
          "explanation": "Writing $4$ as $2^2$ and comparing indices gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the solutions.",
          "workingLatex": "x = 1 \\quad \\text{or} \\quad x = 2",
          "explanation": "Both values are valid because $2^x$ is always positive, matching the positive roots $y=2,4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check x = 1.",
          "workingLatex": "2^{2} - 6(2^{1}) + 8 = 4 - 12 + 8 = 0 \\ \\checkmark",
          "explanation": "Substituting $x=1$ gives $4-12+8=0$, so it satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x = 2.",
          "workingLatex": "2^{4} - 6(2^{2}) + 8 = 16 - 24 + 8 = 0 \\ \\checkmark",
          "explanation": "Substituting $x=2$ gives $16-24+8=0$, so it also satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm no roots were lost.",
          "workingLatex": "y = 2, 4 > 0",
          "explanation": "Both $y$-values are positive, so each yields a genuine solution for $x$; none had to be rejected.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the technique.",
          "workingLatex": "\\text{substitution turns an index equation into a quadratic}",
          "explanation": "Recognising $2^{2x}=(2^x)^2$ and substituting is the key move for these `hidden quadratic' index equations.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer.",
          "workingLatex": "x = 1 \\ \\text{or} \\ x = 2",
          "explanation": "The solutions of the equation are $x=1$ and $x=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Let $y = 2^x$: then $y^2 - 6y + 8 = 0 \\Rightarrow (y-2)(y-4) = 0 \\Rightarrow 2^x = 2 \\text{ or } 4 \\Rightarrow x = 1 \\text{ or } x = 2$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "indices",
      "index laws",
      "power of a product"
    ],
    "questionText": "Simplify $\\left(2x^3\\right)^4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the structure.",
          "workingLatex": "\\left(2x^3\\right)^4",
          "explanation": "We are raising a product ($2$ times $x^3$) to a power, so the outer index applies to each factor inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the power-of-a-product law.",
          "workingLatex": "(ab)^n = a^n b^n",
          "explanation": "Every factor inside the bracket is raised to the outer power, because the whole product is used as a factor four times.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Raise the coefficient to the power.",
          "workingLatex": "2^4 = 16",
          "explanation": "The number $2$ is raised to the fourth power, giving $16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Raise the variable power.",
          "workingLatex": "\\left(x^3\\right)^4 = x^{12}",
          "explanation": "Using the power-of-a-power law, the indices multiply: $3\\times4 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two parts.",
          "workingLatex": "\\left(2x^3\\right)^4 = 16x^{12}",
          "explanation": "Multiplying the results gives the fully simplified expression $16x^{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "16x^{12}",
          "explanation": "The simplified form is $16x^{12}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(2x^3\\right)^4 = 2^4 \\left(x^3\\right)^4 = 16x^{12}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "index laws",
      "negative indices"
    ],
    "questionText": "Simplify $a^5 \\times a^{-2}$, giving your answer with a positive index.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the operation.",
          "workingLatex": "a^5 \\times a^{-2}",
          "explanation": "We are multiplying two powers of the same base $a$, so the multiplication law of indices applies even though one index is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the multiplication law.",
          "workingLatex": "a^m \\times a^n = a^{m+n}",
          "explanation": "Multiplying powers of the same base means adding the indices, and negative indices are added just like any other number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the indices.",
          "workingLatex": "5 + (-2) = 3",
          "explanation": "Adding $5$ and $-2$ gives $3$; the negative index effectively cancels two factors of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the combined power.",
          "workingLatex": "a^5 \\times a^{-2} = a^{3}",
          "explanation": "Placing the summed index on the base gives $a^3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the index is positive.",
          "workingLatex": "3 > 0",
          "explanation": "Since the resulting index is positive, no reciprocal is needed and the answer is already in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "a^{3}",
          "explanation": "The simplified expression is $a^3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a^5 \\times a^{-2} = a^{5+(-2)} = a^{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "negative indices",
      "fractions"
    ],
    "questionText": "Evaluate $\\left(\\dfrac{1}{2}\\right)^{-2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the negative index.",
          "workingLatex": "\\left(\\tfrac{1}{2}\\right)^{-2}",
          "explanation": "A negative index on a fraction tells us to take the reciprocal of the fraction and then apply the positive power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the reciprocal rule.",
          "workingLatex": "\\left(\\tfrac{a}{b}\\right)^{-n} = \\left(\\tfrac{b}{a}\\right)^{n}",
          "explanation": "Flipping the fraction turns the negative index into a positive one, because dividing by a fraction is the same as multiplying by its reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Flip the fraction.",
          "workingLatex": "\\left(\\tfrac{1}{2}\\right)^{-2} = \\left(\\tfrac{2}{1}\\right)^{2} = 2^2",
          "explanation": "Turning $\\tfrac12$ upside down gives $2$, now raised to the positive power $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power.",
          "workingLatex": "2^2 = 4",
          "explanation": "Squaring the flipped base $2$ gives $2^2 = 4$, the value of the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the size.",
          "workingLatex": "\\text{negative index of a fraction} < 1 \\Rightarrow \\text{answer} > 1",
          "explanation": "Raising a number smaller than $1$ to a negative power gives a result bigger than $1$, and $4>1$ fits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "4",
          "explanation": "The value of $\\left(\\tfrac12\\right)^{-2}$ is $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(\\tfrac{1}{2}\\right)^{-2} = \\left(\\tfrac{2}{1}\\right)^{2} = 2^2 = 4$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds"
    ],
    "questionText": "Simplify $\\sqrt{18}$, giving your answer in the form $a\\sqrt{b}$ where $b$ is as small as possible.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the largest square factor.",
          "workingLatex": "18 = 9 \\times 2",
          "explanation": "We split $18$ into a perfect square times what is left, and $9$ is the largest square that divides $18$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the surd over the product.",
          "workingLatex": "\\sqrt{18} = \\sqrt{9 \\times 2}",
          "explanation": "Rewriting $18$ as $9\\times2$ prepares the surd to be broken apart using the product rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule.",
          "workingLatex": "\\sqrt{9 \\times 2} = \\sqrt{9} \\times \\sqrt{2}",
          "explanation": "The root of a product is the product of the roots, letting us pull out the square part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root of 9.",
          "workingLatex": "\\sqrt{9} = 3",
          "explanation": "Since $9$ is a perfect square, its root is the whole number $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the parts.",
          "workingLatex": "\\sqrt{18} = 3\\sqrt{2}",
          "explanation": "Writing $3$ in front of the remaining $\\sqrt2$ gives the simplified surd; $2$ is prime so it cannot reduce further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "3\\sqrt{2}",
          "explanation": "The simplified form is $3\\sqrt2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "surds",
      "multiplying surds"
    ],
    "questionText": "Simplify $\\sqrt{8} \\times \\sqrt{2}$, giving your answer as an integer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the product rule for surds.",
          "workingLatex": "\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}",
          "explanation": "Multiplying two surds combines them under a single root, which often reveals a perfect square hidden in the product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the numbers under one root.",
          "workingLatex": "\\sqrt{8} \\times \\sqrt{2} = \\sqrt{8 \\times 2}",
          "explanation": "Placing $8$ and $2$ under one square root gives $\\sqrt{16}$ once we multiply.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the product inside.",
          "workingLatex": "8 \\times 2 = 16",
          "explanation": "Multiplying $8$ by $2$ gives $16$, which happens to be a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root.",
          "workingLatex": "\\sqrt{16} = 4",
          "explanation": "Since $16$ is a perfect square, its root is the whole number $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the surd disappears.",
          "workingLatex": "4 \\in \\mathbb{Z}",
          "explanation": "The product was a perfect square, so the surds cancel out completely and leave an integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "4",
          "explanation": "The value of $\\sqrt8 \\times \\sqrt2$ is the integer $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{8} \\times \\sqrt{2} = \\sqrt{16} = 4$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "fractional indices",
      "roots"
    ],
    "questionText": "Evaluate $27^{\\frac{1}{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the fractional index.",
          "workingLatex": "27^{\\frac{1}{3}} = \\sqrt[3]{27}",
          "explanation": "An index of $\\tfrac13$ means the cube root, so we are looking for the number that cubes to give $27$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what a cube root asks for.",
          "workingLatex": "\\text{find } n \\text{ with } n^3 = 27",
          "explanation": "The cube root of $27$ is the value $n$ whose cube is $27$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test a candidate.",
          "workingLatex": "3^3 = 27",
          "explanation": "Cubing $3$ gives $27$, so $3$ is the required number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the result.",
          "workingLatex": "27^{\\frac{1}{3}} = 3",
          "explanation": "Therefore the cube root of $27$ is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check.",
          "workingLatex": "3 \\times 3 \\times 3 = 27 \\ \\checkmark",
          "explanation": "Multiplying three $3$'s back together returns $27$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "3",
          "explanation": "The value of $27^{1/3}$ is $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$27^{\\frac{1}{3}} = \\sqrt[3]{27} = 3$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "negative indices",
      "evaluating"
    ],
    "questionText": "Evaluate $5^{-2}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the negative index.",
          "workingLatex": "5^{-2}",
          "explanation": "A negative index signals a reciprocal, so we rewrite the power as one over the corresponding positive power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the negative-index law.",
          "workingLatex": "a^{-n} = \\dfrac{1}{a^{n}}",
          "explanation": "A negative index means `one over' the positive power, since a negative exponent undoes repeated multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the law.",
          "workingLatex": "5^{-2} = \\dfrac{1}{5^{2}}",
          "explanation": "Rewriting with a positive index puts $5^2$ in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the positive power.",
          "workingLatex": "5^2 = 25",
          "explanation": "Squaring $5$ gives $5^2 = 25$, which sits in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the fraction.",
          "workingLatex": "5^{-2} = \\dfrac{1}{25}",
          "explanation": "Substituting $5^2 = 25$ gives the exact value $\\tfrac{1}{25}$, a fraction smaller than $1$ as expected for a negative index.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{1}{25}",
          "explanation": "The exact value of $5^{-2}$ is $\\tfrac{1}{25}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5^{-2} = \\dfrac{1}{5^{2}} = \\dfrac{1}{25}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds",
      "adding surds"
    ],
    "questionText": "Simplify $\\sqrt{20} + \\sqrt{45}$, giving your answer in the form $a\\sqrt{b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the first surd.",
          "workingLatex": "\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}",
          "explanation": "Taking out the largest square factor $4$ from $20$ gives $2\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the second surd.",
          "workingLatex": "\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}",
          "explanation": "Taking out the square factor $9$ from $45$ gives $3\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the sum.",
          "workingLatex": "\\sqrt{20} + \\sqrt{45} = 2\\sqrt{5} + 3\\sqrt{5}",
          "explanation": "Both surds reduce to multiples of $\\sqrt5$, so they are like surds ready to be combined.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise like surds.",
          "workingLatex": "2\\sqrt{5} \\text{ and } 3\\sqrt{5} \\text{ share } \\sqrt{5}",
          "explanation": "Because the irrational part $\\sqrt5$ matches, we add the coefficients just like like terms in algebra.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the coefficients.",
          "workingLatex": "2 + 3 = 5",
          "explanation": "Adding the coefficients $2$ and $3$ gives $5$ copies of $\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine.",
          "workingLatex": "2\\sqrt{5} + 3\\sqrt{5} = 5\\sqrt{5}",
          "explanation": "Attaching the coefficient $5$ to $\\sqrt5$ gives the simplified surd.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "5\\sqrt{5}",
          "explanation": "The simplified sum is $5\\sqrt5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{20} + \\sqrt{45} = 2\\sqrt{5} + 3\\sqrt{5} = 5\\sqrt{5}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "negative fractional indices",
      "evaluating"
    ],
    "questionText": "Evaluate $8^{-\\frac{2}{3}}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the negative sign first.",
          "workingLatex": "8^{-\\frac{2}{3}} = \\dfrac{1}{8^{\\frac{2}{3}}}",
          "explanation": "A negative index means take the reciprocal, so we move the positive power $8^{2/3}$ into the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the fractional index.",
          "workingLatex": "8^{\\frac{2}{3}} = \\left(8^{\\frac{1}{3}}\\right)^{2}",
          "explanation": "The denominator $3$ is a cube root and the numerator $2$ is a square; taking the root first keeps the numbers small.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the cube root of 8.",
          "workingLatex": "8^{\\frac{1}{3}} = 2",
          "explanation": "Since $2^3 = 8$, the cube root of $8$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the remaining power.",
          "workingLatex": "\\left(8^{\\frac{1}{3}}\\right)^{2} = 2^{2} = 4",
          "explanation": "Squaring the cube root gives $2^2 = 4$, so $8^{2/3} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the reciprocal.",
          "workingLatex": "8^{-\\frac{2}{3}} = \\dfrac{1}{4}",
          "explanation": "Putting $8^{2/3} = 4$ into the denominator gives $\\tfrac14$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check the sign.",
          "workingLatex": "\\text{negative index} \\Rightarrow \\text{fraction} < 1",
          "explanation": "A negative index turns a number bigger than $1$ into a proper fraction, and $\\tfrac14 < 1$ agrees.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify numerically.",
          "workingLatex": "8^{-0.667} \\approx 0.25 = \\tfrac{1}{4}",
          "explanation": "Evaluating the original power on a calculator gives about $0.25$, which is $\\tfrac14$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the order of operations.",
          "workingLatex": "\\text{reciprocal} \\to \\text{root} \\to \\text{power}",
          "explanation": "For a negative fractional index, handling the sign, then the root, then the power in turn keeps each stage simple and error-free.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{1}{4}",
          "explanation": "The exact value of $8^{-2/3}$ is $\\tfrac14$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8^{-\\frac{2}{3}} = \\dfrac{1}{8^{2/3}} = \\dfrac{1}{\\left(8^{1/3}\\right)^{2}} = \\dfrac{1}{2^2} = \\dfrac{1}{4}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "fractional indices",
      "evaluating"
    ],
    "questionText": "Evaluate $125^{\\frac{2}{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the base as a cube.",
          "workingLatex": "125 = 5^3",
          "explanation": "Spotting that $125$ is $5^3$ makes the cube root immediate and avoids awkward arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the fractional index.",
          "workingLatex": "125^{\\frac{2}{3}} = \\left(125^{\\frac{1}{3}}\\right)^{2}",
          "explanation": "The denominator $3$ means a cube root and the numerator $2$ means square it; doing the root first keeps numbers small.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the cube root.",
          "workingLatex": "125^{\\frac{1}{3}} = 5",
          "explanation": "Since $5^3 = 125$, the cube root of $125$ is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the remaining power.",
          "workingLatex": "\\left(125^{\\frac{1}{3}}\\right)^{2} = 5^{2}",
          "explanation": "The numerator $2$ tells us to square the cube root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the square.",
          "workingLatex": "5^2 = 25",
          "explanation": "Squaring the cube root $5$ gives $5^2 = 25$, the value of the expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the intermediate result.",
          "workingLatex": "125^{\\frac{2}{3}} = 25",
          "explanation": "Combining the steps gives $125^{2/3} = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check.",
          "workingLatex": "25^3 = 15625 = 125^2 \\ \\checkmark",
          "explanation": "Cubing $25$ gives $125^2$, confirming that $25$ is indeed $125^{2/3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "125^{0.667} \\approx 25",
          "explanation": "Evaluating the original power on a calculator gives about $25$, matching the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "25",
          "explanation": "The value of $125^{2/3}$ is $25$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$125^{\\frac{2}{3}} = \\left(125^{1/3}\\right)^{2} = 5^2 = 25$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "negative fractional indices",
      "evaluating"
    ],
    "questionText": "Evaluate $32^{-\\frac{2}{5}}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the negative sign first.",
          "workingLatex": "32^{-\\frac{2}{5}} = \\dfrac{1}{32^{\\frac{2}{5}}}",
          "explanation": "A negative index means take the reciprocal, so the positive power $32^{2/5}$ moves into the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the base as a fifth power.",
          "workingLatex": "32 = 2^5",
          "explanation": "Spotting $32 = 2^5$ makes the fifth root clean and easy to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the fractional index.",
          "workingLatex": "32^{\\frac{2}{5}} = \\left(32^{\\frac{1}{5}}\\right)^{2}",
          "explanation": "The denominator $5$ is a fifth root and the numerator $2$ is a square; the root first keeps numbers small.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the fifth root.",
          "workingLatex": "32^{\\frac{1}{5}} = 2",
          "explanation": "Since $2^5 = 32$, the fifth root of $32$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the remaining power.",
          "workingLatex": "\\left(32^{\\frac{1}{5}}\\right)^{2} = 2^2 = 4",
          "explanation": "Squaring the fifth root gives $2^2 = 4$, so $32^{2/5} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the reciprocal.",
          "workingLatex": "32^{-\\frac{2}{5}} = \\dfrac{1}{4}",
          "explanation": "Putting $32^{2/5} = 4$ into the denominator gives $\\tfrac14$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check the sign.",
          "workingLatex": "\\text{negative index} \\Rightarrow \\text{fraction} < 1",
          "explanation": "The negative index makes the value a proper fraction, and $\\tfrac14 < 1$ agrees.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "32^{-0.4} \\approx 0.25 = \\tfrac{1}{4}",
          "explanation": "Evaluating the original power gives about $0.25$, confirming the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{1}{4}",
          "explanation": "The exact value of $32^{-2/5}$ is $\\tfrac14$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$32^{-\\frac{2}{5}} = \\dfrac{1}{32^{2/5}} = \\dfrac{1}{\\left(2^5\\right)^{2/5}} = \\dfrac{1}{2^2} = \\dfrac{1}{4}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds",
      "adding and subtracting surds"
    ],
    "questionText": "Simplify $\\sqrt{48} + \\sqrt{27} - \\sqrt{12}$, giving your answer in the form $a\\sqrt{b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the first surd.",
          "workingLatex": "\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}",
          "explanation": "The largest square factor of $48$ is $16$, so $\\sqrt{48} = 4\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify the second surd.",
          "workingLatex": "\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}",
          "explanation": "The square factor $9$ comes out of $27$, giving $3\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the third surd.",
          "workingLatex": "\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}",
          "explanation": "The square factor $4$ comes out of $12$, giving $2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the whole expression.",
          "workingLatex": "4\\sqrt{3} + 3\\sqrt{3} - 2\\sqrt{3}",
          "explanation": "All three surds reduce to multiples of $\\sqrt3$, so they are like surds that can be combined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise like surds.",
          "workingLatex": "\\text{all terms are multiples of } \\sqrt{3}",
          "explanation": "Sharing the same irrational part means we simply add and subtract the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the coefficients.",
          "workingLatex": "4 + 3 - 2 = 5",
          "explanation": "Working left to right, $4+3-2 = 5$ copies of $\\sqrt3$ remain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simplified surd.",
          "workingLatex": "5\\sqrt{3}",
          "explanation": "Attaching the coefficient $5$ to $\\sqrt3$ gives the simplified expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "6.93 + 5.20 - 3.46 \\approx 8.66,\\quad 5\\sqrt{3} \\approx 8.66",
          "explanation": "Both the original expression and $5\\sqrt3$ evaluate to about $8.66$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "5\\sqrt{3}",
          "explanation": "The simplified expression is $5\\sqrt3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{48} + \\sqrt{27} - \\sqrt{12} = 4\\sqrt{3} + 3\\sqrt{3} - 2\\sqrt{3} = 5\\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "simplifying"
    ],
    "questionText": "Rationalise the denominator and simplify $\\dfrac{3}{\\sqrt{6}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{remove the surd from the denominator}",
          "explanation": "Rationalising rewrites the fraction with a whole-number denominator, which is the standard tidy form for a surd expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the surd.",
          "workingLatex": "\\dfrac{3}{\\sqrt{6}} \\times \\dfrac{\\sqrt{6}}{\\sqrt{6}}",
          "explanation": "Multiplying by $\\tfrac{\\sqrt6}{\\sqrt6} = 1$ keeps the value the same while clearing the surd, since $\\sqrt6\\times\\sqrt6 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the numerator.",
          "workingLatex": "3 \\times \\sqrt{6} = 3\\sqrt{6}",
          "explanation": "The top becomes $3\\sqrt6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the denominator.",
          "workingLatex": "\\sqrt{6} \\times \\sqrt{6} = 6",
          "explanation": "The bottom becomes the rational number $6$, which was the aim.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the fraction.",
          "workingLatex": "\\dfrac{3\\sqrt{6}}{6}",
          "explanation": "Combining top and bottom gives $\\tfrac{3\\sqrt6}{6}$, which can still be simplified.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor.",
          "workingLatex": "\\dfrac{3}{6} = \\dfrac{1}{2}",
          "explanation": "The numbers $3$ and $6$ share a factor of $3$, so the fraction reduces to $\\tfrac12$ of $\\sqrt6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simplified form.",
          "workingLatex": "\\dfrac{\\sqrt{6}}{2}",
          "explanation": "After cancelling, the expression becomes $\\tfrac{\\sqrt6}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{3}{\\sqrt6} \\approx 1.225,\\quad \\dfrac{\\sqrt6}{2} \\approx 1.225",
          "explanation": "Both forms evaluate to about $1.225$, confirming they are equal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{\\sqrt{6}}{2}",
          "explanation": "The rationalised, simplified form is $\\tfrac{\\sqrt6}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3}{\\sqrt{6}} = \\dfrac{3\\sqrt{6}}{6} = \\dfrac{\\sqrt{6}}{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "surds",
      "expanding brackets",
      "squaring"
    ],
    "questionText": "Expand and simplify $\\left(1 + \\sqrt{2}\\right)^{2}$, giving your answer in the form $a + b\\sqrt{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the square as a product.",
          "workingLatex": "\\left(1+\\sqrt{2}\\right)^2 = \\left(1+\\sqrt{2}\\right)\\left(1+\\sqrt{2}\\right)",
          "explanation": "Squaring means multiplying the bracket by itself, which we expand using the standard identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the expansion identity.",
          "workingLatex": "(a+b)^2 = a^2 + 2ab + b^2",
          "explanation": "Using this with $a=1$ and $b=\\sqrt2$ organises the expansion neatly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the first term.",
          "workingLatex": "a^2 = 1^2 = 1",
          "explanation": "The first term squared is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the middle term.",
          "workingLatex": "2ab = 2 \\times 1 \\times \\sqrt{2} = 2\\sqrt{2}",
          "explanation": "The cross term $2ab$ gives $2\\sqrt2$, which is the surd part of the answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the surd term.",
          "workingLatex": "b^2 = \\left(\\sqrt{2}\\right)^2 = 2",
          "explanation": "Squaring $\\sqrt2$ removes the root and gives the rational $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the three parts.",
          "workingLatex": "1 + 2\\sqrt{2} + 2",
          "explanation": "Collecting the pieces gives $1 + 2\\sqrt2 + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the rational terms.",
          "workingLatex": "1 + 2 = 3",
          "explanation": "The whole-number parts $1$ and $2$ add to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write in the required form.",
          "workingLatex": "3 + 2\\sqrt{2}",
          "explanation": "Placing the rational part first gives the form $a+b\\sqrt2$ with $a=3$ and $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "3 + 2\\sqrt{2}",
          "explanation": "The expanded, simplified expression is $3 + 2\\sqrt2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(1+\\sqrt{2}\\right)^2 = 1 + 2\\sqrt{2} + 2 = 3 + 2\\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "common base"
    ],
    "questionText": "Solve the equation $3^{x} = 81$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim for a common base.",
          "workingLatex": "\\text{write } 81 \\text{ as a power of } 3",
          "explanation": "Both sides should be powers of $3$ so that we can compare their indices directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express 81 as a power of 3.",
          "workingLatex": "81 = 3^4",
          "explanation": "Repeatedly multiplying $3$ gives $3,9,27,81$, so $81 = 3^4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation.",
          "workingLatex": "3^{x} = 3^{4}",
          "explanation": "Both sides are now powers of the same base $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the indices.",
          "workingLatex": "x = 4",
          "explanation": "If two powers of the same base are equal, their indices must be equal, giving $x = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the solution.",
          "workingLatex": "3^4 = 81 \\ \\checkmark",
          "explanation": "Substituting back, $3^4 = 81$, so the solution satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check the size.",
          "workingLatex": "3^3 = 27 < 81 < 243 = 3^5 \\Rightarrow 3 < x < 5",
          "explanation": "Since $81$ lies between $3^3$ and $3^5$, the solution must be between $3$ and $5$, and $4$ fits.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note uniqueness.",
          "workingLatex": "3^x \\text{ is one-to-one}",
          "explanation": "Because the exponential function is strictly increasing, there is exactly one solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connect to logarithms.",
          "workingLatex": "x = \\log_{3} 81 = 4",
          "explanation": "Equivalently, $x$ is the logarithm of $81$ to base $3$; this is another way to see that the answer is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x = 4",
          "explanation": "The solution of $3^x = 81$ is $x = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3^x = 81 = 3^4 \\Rightarrow x = 4$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "negative indices"
    ],
    "questionText": "Solve the equation $2^{x} = \\dfrac{1}{8}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Aim for a common base.",
          "workingLatex": "\\text{write } \\tfrac{1}{8} \\text{ as a power of } 2",
          "explanation": "Expressing both sides as powers of $2$ lets us compare indices; the fraction will need a negative index.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express 8 as a power of 2.",
          "workingLatex": "8 = 2^3",
          "explanation": "Since $2\\times2\\times2 = 8$, we have $8 = 2^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the reciprocal with a negative index.",
          "workingLatex": "\\dfrac{1}{8} = \\dfrac{1}{2^3} = 2^{-3}",
          "explanation": "A reciprocal corresponds to a negative index, so $\\tfrac18 = 2^{-3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation.",
          "workingLatex": "2^{x} = 2^{-3}",
          "explanation": "Both sides are now powers of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "x = -3",
          "explanation": "Equal powers of the same base force equal indices, giving $x = -3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the solution.",
          "workingLatex": "2^{-3} = \\dfrac{1}{8} \\ \\checkmark",
          "explanation": "Substituting back, $2^{-3} = \\tfrac18$, so the solution works.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check the sign.",
          "workingLatex": "\\tfrac{1}{8} < 1 \\Rightarrow x < 0",
          "explanation": "Because the right-hand side is less than $1$, the index must be negative, and $-3$ is.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the meaning.",
          "workingLatex": "2^{-3} \\text{ means } \\tfrac{1}{2^3}",
          "explanation": "A negative index is just a compact way of writing a reciprocal, consistent with the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x = -3",
          "explanation": "The solution of $2^x = \\tfrac18$ is $x = -3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2^x = \\dfrac{1}{8} = 2^{-3} \\Rightarrow x = -3$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "surds",
      "expanding brackets",
      "distributing"
    ],
    "questionText": "Simplify $\\sqrt{2}\\left(\\sqrt{8} + \\sqrt{18}\\right)$, giving your answer as an integer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan to distribute.",
          "workingLatex": "\\sqrt{2}\\left(\\sqrt{8} + \\sqrt{18}\\right) = \\sqrt{2}\\sqrt{8} + \\sqrt{2}\\sqrt{18}",
          "explanation": "We multiply the outside surd into each term in the bracket, using the product rule on each piece.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the first pair of surds.",
          "workingLatex": "\\sqrt{2} \\times \\sqrt{8} = \\sqrt{16}",
          "explanation": "Combining under one root gives $\\sqrt{2\\times8} = \\sqrt{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the first root.",
          "workingLatex": "\\sqrt{16} = 4",
          "explanation": "Since $16$ is a perfect square, this term is the whole number $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the second pair of surds.",
          "workingLatex": "\\sqrt{2} \\times \\sqrt{18} = \\sqrt{36}",
          "explanation": "Combining under one root gives $\\sqrt{2\\times18} = \\sqrt{36}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the second root.",
          "workingLatex": "\\sqrt{36} = 6",
          "explanation": "Since $36$ is a perfect square, this term is the whole number $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two results.",
          "workingLatex": "4 + 6 = 10",
          "explanation": "Adding the two whole numbers gives $10$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the surds vanish.",
          "workingLatex": "10 \\in \\mathbb{Z}",
          "explanation": "Both products were perfect squares, so no surd remains and the answer is an integer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "1.414 \\times (2.828 + 4.243) \\approx 10",
          "explanation": "Multiplying the decimal approximations gives about $10$, confirming the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "10",
          "explanation": "The simplified value of the expression is the integer $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{2}\\left(\\sqrt{8}+\\sqrt{18}\\right) = \\sqrt{16} + \\sqrt{36} = 4 + 6 = 10$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Rationalise the denominator of $\\dfrac{4}{\\sqrt{7} - \\sqrt{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate.",
          "workingLatex": "\\text{conjugate of } \\sqrt{7} - \\sqrt{3} \\text{ is } \\sqrt{7} + \\sqrt{3}",
          "explanation": "For a two-term surd denominator we multiply by its conjugate, which turns the bottom into a surd-free difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{4}{\\sqrt{7}-\\sqrt{3}} \\times \\dfrac{\\sqrt{7}+\\sqrt{3}}{\\sqrt{7}+\\sqrt{3}}",
          "explanation": "Multiplying by $1$ in this form preserves the value while setting up the denominator to rationalise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator.",
          "workingLatex": "(\\sqrt{7}-\\sqrt{3})(\\sqrt{7}+\\sqrt{3}) = 7 - 3 = 4",
          "explanation": "The difference of squares gives $(\\sqrt7)^2 - (\\sqrt3)^2 = 7 - 3 = 4$, a rational denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the numerator.",
          "workingLatex": "4\\left(\\sqrt{7} + \\sqrt{3}\\right)",
          "explanation": "The top becomes $4$ times the conjugate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the fraction.",
          "workingLatex": "\\dfrac{4\\left(\\sqrt{7}+\\sqrt{3}\\right)}{4}",
          "explanation": "Placing the numerator over the rational denominator $4$ gives this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor.",
          "workingLatex": "\\dfrac{4}{4} = 1",
          "explanation": "The factor of $4$ on top and bottom cancels neatly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simplified result.",
          "workingLatex": "\\sqrt{7} + \\sqrt{3}",
          "explanation": "After cancelling, the expression reduces to $\\sqrt7 + \\sqrt3$ with no denominator at all.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{4}{2.646 - 1.732} \\approx 4.38,\\quad \\sqrt{7} + \\sqrt{3} \\approx 4.38",
          "explanation": "Both the original and simplified forms evaluate to about $4.38$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\sqrt{7} + \\sqrt{3}",
          "explanation": "The rationalised expression is $\\sqrt7 + \\sqrt3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{4}{\\sqrt{7}-\\sqrt{3}} = \\dfrac{4\\left(\\sqrt{7}+\\sqrt{3}\\right)}{7-3} = \\dfrac{4\\left(\\sqrt{7}+\\sqrt{3}\\right)}{4} = \\sqrt{7} + \\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "common base"
    ],
    "questionText": "Solve the equation $4^{x+1} = 8^{x-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a common base.",
          "workingLatex": "4 = 2^2, \\quad 8 = 2^3",
          "explanation": "Both $4$ and $8$ are powers of $2$, so rewriting with base $2$ lets us compare indices directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the left-hand side.",
          "workingLatex": "4^{x+1} = \\left(2^2\\right)^{x+1} = 2^{2(x+1)}",
          "explanation": "Using the power-of-a-power law multiplies the indices, giving $2^{2(x+1)}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the right-hand side.",
          "workingLatex": "8^{x-1} = \\left(2^3\\right)^{x-1} = 2^{3(x-1)}",
          "explanation": "Similarly the right-hand side becomes $2^{3(x-1)}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation with equal bases.",
          "workingLatex": "2^{2(x+1)} = 2^{3(x-1)}",
          "explanation": "Both sides are now powers of $2$, so the equation reduces to comparing exponents.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "2(x+1) = 3(x-1)",
          "explanation": "Equal powers of the same base force equal indices, giving a linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the left-hand side.",
          "workingLatex": "2x + 2",
          "explanation": "Multiplying out $2(x+1)$ gives $2x + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the right-hand side.",
          "workingLatex": "3x - 3",
          "explanation": "Multiplying out $3(x-1)$ gives $3x - 3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the linear equation.",
          "workingLatex": "2x + 2 = 3x - 3",
          "explanation": "Setting the two expanded indices equal gives this equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the terms.",
          "workingLatex": "2 + 3 = 3x - 2x",
          "explanation": "Moving $x$ terms to one side and numbers to the other gives $5 = x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x.",
          "workingLatex": "x = 5",
          "explanation": "Combining the terms on each side gives the single solution $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the left-hand side.",
          "workingLatex": "4^{5+1} = 4^{6} = 4096",
          "explanation": "Substituting $x=5$, the left side is $4^6 = 4096$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the right-hand side.",
          "workingLatex": "8^{5-1} = 8^{4} = 4096",
          "explanation": "And the right side is $8^4 = 4096$, so both sides agree.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x = 5",
          "explanation": "The solution of $4^{x+1} = 8^{x-1}$ is $x = 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4^{x+1} = 8^{x-1} \\Rightarrow 2^{2(x+1)} = 2^{3(x-1)} \\Rightarrow 2x+2 = 3x-3 \\Rightarrow x = 5$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "surds",
      "expanding brackets",
      "squaring surds"
    ],
    "questionText": "Express $\\left(\\sqrt{2} + \\sqrt{3}\\right)^{2}$ in the form $a + b\\sqrt{6}$, where $a$ and $b$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the square as a product.",
          "workingLatex": "\\left(\\sqrt{2}+\\sqrt{3}\\right)^2 = \\left(\\sqrt{2}+\\sqrt{3}\\right)\\left(\\sqrt{2}+\\sqrt{3}\\right)",
          "explanation": "Squaring means multiplying the bracket by itself, which we expand with the standard identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the expansion identity.",
          "workingLatex": "(a+b)^2 = a^2 + 2ab + b^2",
          "explanation": "Using this with $a=\\sqrt2$ and $b=\\sqrt3$ keeps the expansion organised.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the first term.",
          "workingLatex": "a^2 = \\left(\\sqrt{2}\\right)^2 = 2",
          "explanation": "Squaring $\\sqrt2$ removes the root and gives the rational $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the middle term.",
          "workingLatex": "2ab = 2 \\times \\sqrt{2} \\times \\sqrt{3} = 2\\sqrt{6}",
          "explanation": "The cross term multiplies the two surds: $\\sqrt2\\times\\sqrt3 = \\sqrt6$, so $2ab = 2\\sqrt6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the second term.",
          "workingLatex": "b^2 = \\left(\\sqrt{3}\\right)^2 = 3",
          "explanation": "Squaring $\\sqrt3$ gives the rational $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the three parts.",
          "workingLatex": "2 + 2\\sqrt{6} + 3",
          "explanation": "Collecting the pieces gives $2 + 2\\sqrt6 + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the rational terms.",
          "workingLatex": "2 + 3 = 5",
          "explanation": "The whole-number parts $2$ and $3$ add to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write in the required form.",
          "workingLatex": "5 + 2\\sqrt{6}",
          "explanation": "Placing the rational part first gives $5 + 2\\sqrt6$, matching the form $a+b\\sqrt6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the surd cannot simplify.",
          "workingLatex": "6 = 2 \\times 3 \\text{ has no square factor}",
          "explanation": "Since $6$ has no square factor greater than $1$, $\\sqrt6$ is already in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify a and b.",
          "workingLatex": "a = 5, \\quad b = 2",
          "explanation": "Comparing with $a+b\\sqrt6$ gives the integers $a=5$ and $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify numerically.",
          "workingLatex": "(1.414 + 1.732)^2 \\approx 9.90",
          "explanation": "The original expression evaluates to about $9.90$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Match the check.",
          "workingLatex": "5 + 2(2.449) \\approx 9.90",
          "explanation": "The answer $5 + 2\\sqrt6$ also gives about $9.90$, confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "5 + 2\\sqrt{6}",
          "explanation": "The expression equals $5 + 2\\sqrt6$, so $a=5$ and $b=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(\\sqrt{2}+\\sqrt{3}\\right)^2 = 2 + 2\\sqrt{6} + 3 = 5 + 2\\sqrt{6}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Show that $\\dfrac{1}{\\sqrt{5} - 2} + \\dfrac{1}{\\sqrt{5} + 2}$ simplifies to $2\\sqrt{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Notice the denominators are conjugates.",
          "workingLatex": "\\sqrt{5} - 2 \\text{ and } \\sqrt{5} + 2",
          "explanation": "The two denominators are conjugates, so each rationalises very cleanly and their product is a simple rational number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rationalise the first fraction.",
          "workingLatex": "\\dfrac{1}{\\sqrt{5}-2} \\times \\dfrac{\\sqrt{5}+2}{\\sqrt{5}+2}",
          "explanation": "Multiplying the first fraction by its conjugate over itself clears the surd from its denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the first denominator.",
          "workingLatex": "(\\sqrt{5}-2)(\\sqrt{5}+2) = 5 - 4 = 1",
          "explanation": "The difference of squares gives $(\\sqrt5)^2 - 2^2 = 5 - 4 = 1$, a particularly clean denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the first fraction.",
          "workingLatex": "\\dfrac{1}{\\sqrt{5}-2} = \\sqrt{5} + 2",
          "explanation": "With denominator $1$, the first fraction is simply $\\sqrt5 + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rationalise the second fraction.",
          "workingLatex": "\\dfrac{1}{\\sqrt{5}+2} \\times \\dfrac{\\sqrt{5}-2}{\\sqrt{5}-2}",
          "explanation": "Similarly we multiply the second fraction by its conjugate over itself.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the second denominator.",
          "workingLatex": "(\\sqrt{5}+2)(\\sqrt{5}-2) = 5 - 4 = 1",
          "explanation": "Again the difference of squares gives $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the second fraction.",
          "workingLatex": "\\dfrac{1}{\\sqrt{5}+2} = \\sqrt{5} - 2",
          "explanation": "With denominator $1$, the second fraction is $\\sqrt5 - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two results.",
          "workingLatex": "\\left(\\sqrt{5} + 2\\right) + \\left(\\sqrt{5} - 2\\right)",
          "explanation": "We now add the two rationalised fractions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the constant terms.",
          "workingLatex": "+2 - 2 = 0",
          "explanation": "The $+2$ and $-2$ cancel, which is why the sum comes out as a single surd term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the surd terms.",
          "workingLatex": "\\sqrt{5} + \\sqrt{5} = 2\\sqrt{5}",
          "explanation": "Adding the two $\\sqrt5$ terms gives $2\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the simplified result.",
          "workingLatex": "2\\sqrt{5}",
          "explanation": "The sum simplifies exactly to $2\\sqrt5$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{1}{0.236} + \\dfrac{1}{4.236} \\approx 4.47 = 2\\sqrt{5}",
          "explanation": "The two fractions evaluate to about $4.24$ and $0.24$, summing to $4.47 = 2\\sqrt5$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\dfrac{1}{\\sqrt{5}-2} + \\dfrac{1}{\\sqrt{5}+2} = 2\\sqrt{5}",
          "explanation": "Both algebra and the numerical check confirm the sum equals $2\\sqrt5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{\\sqrt{5}-2} + \\dfrac{1}{\\sqrt{5}+2} = (\\sqrt{5}+2) + (\\sqrt{5}-2) = 2\\sqrt{5}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Express $\\dfrac{\\left(\\sqrt{3} + 1\\right)^{2}}{\\sqrt{3} - 1}$ in the form $a + b\\sqrt{3}$, where $a$ and $b$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand the numerator.",
          "workingLatex": "\\left(\\sqrt{3}+1\\right)^2 = 3 + 2\\sqrt{3} + 1 = 4 + 2\\sqrt{3}",
          "explanation": "Squaring the bracket first turns the numerator into the simpler surd expression $4 + 2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the fraction.",
          "workingLatex": "\\dfrac{4 + 2\\sqrt{3}}{\\sqrt{3} - 1}",
          "explanation": "Replacing the numerator with its expanded form gives a fraction with a two-term surd denominator to rationalise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the conjugate.",
          "workingLatex": "\\text{conjugate of } \\sqrt{3} - 1 \\text{ is } \\sqrt{3} + 1",
          "explanation": "To clear the denominator we multiply by its conjugate, producing a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{4 + 2\\sqrt{3}}{\\sqrt{3}-1} \\times \\dfrac{\\sqrt{3}+1}{\\sqrt{3}+1}",
          "explanation": "Multiplying by $1$ in this form preserves the value while rationalising the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the denominator.",
          "workingLatex": "(\\sqrt{3}-1)(\\sqrt{3}+1) = 3 - 1 = 2",
          "explanation": "The difference of squares gives $(\\sqrt3)^2 - 1^2 = 2$, a rational denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the numerator.",
          "workingLatex": "(4 + 2\\sqrt{3})(\\sqrt{3}+1) = 4\\sqrt{3} + 4 + 2 \\cdot 3 + 2\\sqrt{3}",
          "explanation": "Multiplying out all four products, and using $\\sqrt3\\times\\sqrt3 = 3$, gives these terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the numerator terms.",
          "workingLatex": "= 10 + 6\\sqrt{3}",
          "explanation": "The rational parts $4 + 6 = 10$ and the surd parts $4\\sqrt3 + 2\\sqrt3 = 6\\sqrt3$ combine to $10 + 6\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the fraction.",
          "workingLatex": "\\dfrac{10 + 6\\sqrt{3}}{2}",
          "explanation": "Placing the simplified numerator over the denominator $2$ gives this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide each term by 2.",
          "workingLatex": "\\dfrac{10}{2} + \\dfrac{6\\sqrt{3}}{2} = 5 + 3\\sqrt{3}",
          "explanation": "Dividing both terms by $2$ gives $5 + 3\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify a and b.",
          "workingLatex": "a = 5, \\quad b = 3",
          "explanation": "Comparing with $a+b\\sqrt3$ gives the integers $a=5$ and $b=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{(1.732+1)^2}{1.732-1} \\approx 10.20",
          "explanation": "The original expression evaluates to about $10.20$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Match the check.",
          "workingLatex": "5 + 3(1.732) \\approx 10.20",
          "explanation": "The answer $5 + 3\\sqrt3$ also gives about $10.20$, confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "5 + 3\\sqrt{3}",
          "explanation": "The expression equals $5 + 3\\sqrt3$, so $a=5$ and $b=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\left(\\sqrt{3}+1\\right)^2}{\\sqrt{3}-1} = \\dfrac{4+2\\sqrt{3}}{\\sqrt{3}-1} = \\dfrac{(4+2\\sqrt{3})(\\sqrt{3}+1)}{2} = \\dfrac{10+6\\sqrt{3}}{2} = 5 + 3\\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "hidden quadratic"
    ],
    "questionText": "Solve the equation $5^{2x} - 26\\left(5^{x}\\right) + 25 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the hidden quadratic.",
          "workingLatex": "5^{2x} = \\left(5^{x}\\right)^{2}",
          "explanation": "Since $5^{2x} = (5^x)^2$, the equation is a quadratic in the quantity $5^x$ rather than in $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution.",
          "workingLatex": "\\text{let } y = 5^{x}",
          "explanation": "Replacing $5^x$ by $y$ turns the equation into a standard quadratic we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in y.",
          "workingLatex": "y^2 - 26y + 25 = 0",
          "explanation": "With $y = 5^x$, the equation becomes $y^2 - 26y + 25 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "(y - 1)(y - 25) = 0",
          "explanation": "We need two numbers multiplying to $25$ and adding to $26$, namely $1$ and $25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y.",
          "workingLatex": "y = 1 \\quad \\text{or} \\quad y = 25",
          "explanation": "Setting each factor to zero gives the two possible values of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Return to the substitution.",
          "workingLatex": "5^{x} = 1 \\quad \\text{or} \\quad 5^{x} = 25",
          "explanation": "Each value of $y$ is really $5^x$, so we solve two simple index equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the first index equation.",
          "workingLatex": "5^{x} = 5^{0} \\Rightarrow x = 0",
          "explanation": "Since any non-zero number to the power $0$ is $1$, $5^x = 1$ gives $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the second index equation.",
          "workingLatex": "5^{x} = 5^{2} \\Rightarrow x = 2",
          "explanation": "Writing $25$ as $5^2$ and comparing indices gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the solutions.",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 2",
          "explanation": "Both values are valid because $5^x$ is always positive, matching the positive roots $y = 1, 25$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check x = 0.",
          "workingLatex": "5^{0} - 26(5^{0}) + 25 = 1 - 26 + 25 = 0 \\ \\checkmark",
          "explanation": "Substituting $x=0$ gives $1 - 26 + 25 = 0$, so it satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x = 2.",
          "workingLatex": "5^{4} - 26(5^{2}) + 25 = 625 - 650 + 25 = 0 \\ \\checkmark",
          "explanation": "Substituting $x=2$ gives $625 - 650 + 25 = 0$, so it also satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm no roots were lost.",
          "workingLatex": "y = 1, 25 > 0",
          "explanation": "Both $y$-values are positive, so each yields a genuine solution for $x$; none had to be rejected.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the technique.",
          "workingLatex": "\\text{substitution turns an index equation into a quadratic}",
          "explanation": "Recognising $5^{2x} = (5^x)^2$ and substituting is the key move for these hidden-quadratic equations.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer.",
          "workingLatex": "x = 0 \\ \\text{or} \\ x = 2",
          "explanation": "The solutions of the equation are $x = 0$ and $x = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Let $y = 5^x$: then $y^2 - 26y + 25 = 0 \\Rightarrow (y-1)(y-25) = 0 \\Rightarrow 5^x = 1 \\text{ or } 25 \\Rightarrow x = 0 \\text{ or } x = 2$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Rationalise the denominator of $\\dfrac{2\\sqrt{3}}{\\sqrt{6} - \\sqrt{2}}$, giving your answer in the form $\\dfrac{a\\sqrt{2} + \\sqrt{6}}{c}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate.",
          "workingLatex": "\\text{conjugate of } \\sqrt{6} - \\sqrt{2} \\text{ is } \\sqrt{6} + \\sqrt{2}",
          "explanation": "For the two-term surd denominator we multiply by its conjugate, producing a surd-free difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{2\\sqrt{3}}{\\sqrt{6}-\\sqrt{2}} \\times \\dfrac{\\sqrt{6}+\\sqrt{2}}{\\sqrt{6}+\\sqrt{2}}",
          "explanation": "Multiplying by $1$ in this form preserves the value while rationalising the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the denominator.",
          "workingLatex": "(\\sqrt{6}-\\sqrt{2})(\\sqrt{6}+\\sqrt{2}) = 6 - 2 = 4",
          "explanation": "The difference of squares gives $(\\sqrt6)^2 - (\\sqrt2)^2 = 6 - 2 = 4$, a rational denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the numerator.",
          "workingLatex": "2\\sqrt{3}\\left(\\sqrt{6} + \\sqrt{2}\\right) = 2\\sqrt{18} + 2\\sqrt{6}",
          "explanation": "Distributing $2\\sqrt3$ over the bracket gives $2\\sqrt{3}\\sqrt{6} = 2\\sqrt{18}$ and $2\\sqrt{3}\\sqrt{2} = 2\\sqrt6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the surd in the numerator.",
          "workingLatex": "\\sqrt{18} = 3\\sqrt{2} \\Rightarrow 2\\sqrt{18} = 6\\sqrt{2}",
          "explanation": "Since $\\sqrt{18} = 3\\sqrt2$, the first term becomes $2\\times3\\sqrt2 = 6\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the numerator.",
          "workingLatex": "6\\sqrt{2} + 2\\sqrt{6}",
          "explanation": "Collecting the terms, the numerator is $6\\sqrt2 + 2\\sqrt6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the fraction.",
          "workingLatex": "\\dfrac{6\\sqrt{2} + 2\\sqrt{6}}{4}",
          "explanation": "Placing the numerator over the rational denominator $4$ gives this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor out the common 2.",
          "workingLatex": "\\dfrac{2\\left(3\\sqrt{2} + \\sqrt{6}\\right)}{4}",
          "explanation": "Both numerator terms share a factor of $2$, which we take out ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the common factor.",
          "workingLatex": "\\dfrac{3\\sqrt{2} + \\sqrt{6}}{2}",
          "explanation": "Cancelling the $2$ against the $4$ leaves the denominator $2$, matching the required form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the constants.",
          "workingLatex": "a = 3, \\quad c = 2",
          "explanation": "Comparing with $\\tfrac{a\\sqrt2 + \\sqrt6}{c}$ gives $a = 3$ and $c = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{2(1.732)}{2.449 - 1.414} \\approx 3.35",
          "explanation": "The original expression evaluates to about $3.35$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Match the check.",
          "workingLatex": "\\dfrac{3(1.414) + 2.449}{2} \\approx 3.35",
          "explanation": "The answer $\\tfrac{3\\sqrt2 + \\sqrt6}{2}$ also gives about $3.35$, confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{3\\sqrt{2} + \\sqrt{6}}{2}",
          "explanation": "The rationalised expression is $\\tfrac{3\\sqrt2 + \\sqrt6}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2\\sqrt{3}}{\\sqrt{6}-\\sqrt{2}} = \\dfrac{2\\sqrt{3}(\\sqrt{6}+\\sqrt{2})}{6-2} = \\dfrac{6\\sqrt{2}+2\\sqrt{6}}{4} = \\dfrac{3\\sqrt{2}+\\sqrt{6}}{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "common base",
      "fractional solution"
    ],
    "questionText": "Solve the equation $9^{\\,2x-1} = 27$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a common base.",
          "workingLatex": "9 = 3^2, \\quad 27 = 3^3",
          "explanation": "Both $9$ and $27$ are powers of $3$, so rewriting with base $3$ lets us compare indices directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the left-hand side.",
          "workingLatex": "9^{\\,2x-1} = \\left(3^2\\right)^{2x-1} = 3^{\\,2(2x-1)}",
          "explanation": "Using the power-of-a-power law multiplies the indices, giving $3^{2(2x-1)}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the right-hand side.",
          "workingLatex": "27 = 3^{3}",
          "explanation": "Expressing $27$ as $3^3$ puts both sides in the same form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation with equal bases.",
          "workingLatex": "3^{\\,2(2x-1)} = 3^{3}",
          "explanation": "Both sides are now powers of $3$, so the equation reduces to comparing exponents.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "2(2x-1) = 3",
          "explanation": "Equal powers of the same base force equal indices, giving a linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket.",
          "workingLatex": "4x - 2 = 3",
          "explanation": "Multiplying out $2(2x-1)$ gives $4x - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 2 to both sides.",
          "workingLatex": "4x = 5",
          "explanation": "Moving the constant across gives $4x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide by 4.",
          "workingLatex": "x = \\dfrac{5}{4}",
          "explanation": "Dividing both sides by $4$ gives the fractional solution $x = \\tfrac54$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Work out the exponent at this x.",
          "workingLatex": "2x - 1 = 2\\left(\\tfrac{5}{4}\\right) - 1 = \\tfrac{3}{2}",
          "explanation": "Substituting $x=\\tfrac54$ into the exponent $2x-1$ gives $\\tfrac32$, ready for the check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the value.",
          "workingLatex": "9^{\\,3/2} = \\left(\\sqrt{9}\\right)^3 = 3^3 = 27 \\ \\checkmark",
          "explanation": "Since $9^{3/2}$ is the cube of $\\sqrt9 = 3$, it equals $27$, matching the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the solution.",
          "workingLatex": "27 = 27 \\ \\checkmark",
          "explanation": "Both sides equal $27$, so the solution $x = \\tfrac54$ is verified.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sense-check the exponent.",
          "workingLatex": "1 < \\tfrac{3}{2} < 2 \\text{ since } 9^1 < 27 < 9^2",
          "explanation": "Because $27$ lies between $9^1 = 9$ and $9^2 = 81$, the exponent $2x-1$ must be between $1$ and $2$, and $\\tfrac32$ is.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x = \\dfrac{5}{4}",
          "explanation": "The solution of $9^{2x-1} = 27$ is $x = \\tfrac54$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$9^{\\,2x-1} = 27 \\Rightarrow 3^{2(2x-1)} = 3^{3} \\Rightarrow 4x - 2 = 3 \\Rightarrow x = \\dfrac{5}{4}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "indices",
      "index laws",
      "power of a product"
    ],
    "questionText": "Simplify $\\left(3a^2 b^3\\right)^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the structure.",
          "workingLatex": "\\left(3a^2 b^3\\right)^{2}",
          "explanation": "We are raising a product of three factors ($3$, $a^2$ and $b^3$) to a power, so the outer index applies to each factor separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the power-of-a-product law.",
          "workingLatex": "(xyz)^n = x^n y^n z^n",
          "explanation": "Every factor inside the bracket is raised to the outer power, because the whole product is used as a factor twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Raise the coefficient.",
          "workingLatex": "3^2 = 9",
          "explanation": "The number $3$ squared gives $9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Raise the first variable power.",
          "workingLatex": "\\left(a^2\\right)^2 = a^{4}",
          "explanation": "Using the power-of-a-power law, the indices multiply: $2\\times2 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Raise the second variable power.",
          "workingLatex": "\\left(b^3\\right)^2 = b^{6}",
          "explanation": "Again the indices multiply: $3\\times2 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the parts.",
          "workingLatex": "9a^4 b^6",
          "explanation": "Multiplying the results gives the fully simplified expression $9a^4b^6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "9a^4 b^6",
          "explanation": "The simplified form is $9a^4b^6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(3a^2 b^3\\right)^{2} = 3^2 \\left(a^2\\right)^2 \\left(b^3\\right)^2 = 9a^4 b^6$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "index laws",
      "dividing",
      "negative indices"
    ],
    "questionText": "Simplify $x^{8} \\div x^{-2}$, leaving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the operation.",
          "workingLatex": "\\dfrac{x^{8}}{x^{-2}}",
          "explanation": "We are dividing two powers of the same base $x$, so the division law of indices applies even with a negative index below.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the division law.",
          "workingLatex": "\\dfrac{x^m}{x^n} = x^{m-n}",
          "explanation": "Dividing powers of the same base means subtracting the lower index from the upper one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the indices.",
          "workingLatex": "8 - (-2) = 8 + 2 = 10",
          "explanation": "Subtracting a negative index is the same as adding, so $8-(-2) = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the simplified power.",
          "workingLatex": "x^{8} \\div x^{-2} = x^{10}",
          "explanation": "Placing the resulting index on the base gives $x^{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the direction.",
          "workingLatex": "\\text{dividing by } x^{-2} = \\text{multiplying by } x^{2}",
          "explanation": "Since $x^{-2}$ is $\\tfrac{1}{x^2}$, dividing by it multiplies by $x^2$, which raises the index — consistent with $10 > 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "x^{10}",
          "explanation": "The simplified expression is $x^{10}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^{8} \\div x^{-2} = x^{8-(-2)} = x^{10}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "fractional indices",
      "evaluating"
    ],
    "questionText": "Evaluate $4^{\\frac{3}{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the fractional index.",
          "workingLatex": "4^{\\frac{3}{2}} = \\left(4^{\\frac{1}{2}}\\right)^{3}",
          "explanation": "The denominator $2$ means a square root and the numerator $3$ means cube it; taking the root first keeps the numbers small.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take the square root.",
          "workingLatex": "4^{\\frac{1}{2}} = 2",
          "explanation": "Since $2^2 = 4$, the square root of $4$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the remaining power.",
          "workingLatex": "\\left(4^{\\frac{1}{2}}\\right)^{3} = 2^{3}",
          "explanation": "The numerator $3$ tells us to cube the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the cube.",
          "workingLatex": "2^3 = 8",
          "explanation": "Cubing the square root $2$ gives $2^3 = 8$, the value of the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the intermediate result.",
          "workingLatex": "4^{\\frac{3}{2}} = 8",
          "explanation": "Combining the steps gives $4^{3/2} = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "8",
          "explanation": "The value of $4^{3/2}$ is $8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4^{\\frac{3}{2}} = \\left(4^{1/2}\\right)^{3} = 2^{3} = 8$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds"
    ],
    "questionText": "Simplify $\\sqrt{75}$, giving your answer in the form $a\\sqrt{b}$ where $b$ is as small as possible.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the largest square factor.",
          "workingLatex": "75 = 25 \\times 3",
          "explanation": "We split $75$ into a perfect square times what is left, and $25$ is the largest square dividing $75$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the surd over the product.",
          "workingLatex": "\\sqrt{75} = \\sqrt{25 \\times 3}",
          "explanation": "Rewriting $75$ as $25\\times3$ prepares the surd to be broken apart.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule.",
          "workingLatex": "\\sqrt{25 \\times 3} = \\sqrt{25}\\,\\sqrt{3}",
          "explanation": "The root of a product equals the product of the roots, letting us pull out the square part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root of 25.",
          "workingLatex": "\\sqrt{25} = 5",
          "explanation": "Since $25$ is a perfect square, its root is the whole number $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the parts.",
          "workingLatex": "\\sqrt{75} = 5\\sqrt{3}",
          "explanation": "Writing $5$ in front of the remaining $\\sqrt3$ gives the simplified surd; $3$ is prime so it cannot reduce further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "5\\sqrt{3}",
          "explanation": "The simplified form is $5\\sqrt3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds"
    ],
    "questionText": "Simplify $\\sqrt{32}$, giving your answer in the form $a\\sqrt{b}$ where $b$ is as small as possible.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the largest square factor.",
          "workingLatex": "32 = 16 \\times 2",
          "explanation": "We split $32$ into a perfect square times what is left, and $16$ is the largest square dividing $32$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the surd over the product.",
          "workingLatex": "\\sqrt{32} = \\sqrt{16 \\times 2}",
          "explanation": "Rewriting $32$ as $16\\times2$ prepares the surd to be broken apart.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product rule.",
          "workingLatex": "\\sqrt{16 \\times 2} = \\sqrt{16}\\,\\sqrt{2}",
          "explanation": "The root of a product is the product of the roots, so we can pull out the square part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the square root of 16.",
          "workingLatex": "\\sqrt{16} = 4",
          "explanation": "Since $16$ is a perfect square, its root is the whole number $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the parts.",
          "workingLatex": "\\sqrt{32} = 4\\sqrt{2}",
          "explanation": "Writing $4$ in front of the remaining $\\sqrt2$ gives the simplified surd; $2$ is prime so it cannot reduce further.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "4\\sqrt{2}",
          "explanation": "The simplified form is $4\\sqrt2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "fractional indices",
      "roots"
    ],
    "questionText": "Evaluate $81^{\\frac{1}{4}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the fractional index.",
          "workingLatex": "81^{\\frac{1}{4}} = \\sqrt[4]{81}",
          "explanation": "An index of $\\tfrac14$ means the fourth root, so we want the number that raised to the fourth power gives $81$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what the fourth root asks for.",
          "workingLatex": "\\text{find } n \\text{ with } n^4 = 81",
          "explanation": "The fourth root of $81$ is the value $n$ whose fourth power is $81$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test a candidate.",
          "workingLatex": "3^4 = 81",
          "explanation": "Since $3^2 = 9$ and $9^2 = 81$, we have $3^4 = 81$, so $3$ works.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the result.",
          "workingLatex": "81^{\\frac{1}{4}} = 3",
          "explanation": "Therefore the fourth root of $81$ is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check.",
          "workingLatex": "3^4 = 3 \\times 3 \\times 3 \\times 3 = 81 \\ \\checkmark",
          "explanation": "Multiplying four $3$'s together returns $81$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "3",
          "explanation": "The value of $81^{1/4}$ is $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$81^{\\frac{1}{4}} = \\sqrt[4]{81} = 3$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "surds",
      "subtracting surds",
      "like surds"
    ],
    "questionText": "Simplify $5\\sqrt{2} - 2\\sqrt{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise like surds.",
          "workingLatex": "5\\sqrt{2} \\text{ and } 2\\sqrt{2} \\text{ share } \\sqrt{2}",
          "explanation": "Both terms are multiples of the same surd $\\sqrt2$, so they are `like' surds that can be combined.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Treat like surds as like terms.",
          "workingLatex": "5\\sqrt{2} - 2\\sqrt{2} = (5 - 2)\\sqrt{2}",
          "explanation": "Just as $5x - 2x = 3x$, we subtract the coefficients while keeping the common $\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the coefficients.",
          "workingLatex": "5 - 2 = 3",
          "explanation": "Subtracting $2$ from $5$ leaves $3$ copies of $\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the combined surd.",
          "workingLatex": "3\\sqrt{2}",
          "explanation": "Attaching the coefficient $3$ to $\\sqrt2$ gives the simplified surd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm it is fully simplified.",
          "workingLatex": "2 \\text{ is prime}",
          "explanation": "Since $2$ has no square factor, $\\sqrt2$ cannot be reduced, so the answer is complete.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "3\\sqrt{2}",
          "explanation": "The simplified expression is $3\\sqrt2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\sqrt{2} - 2\\sqrt{2} = (5-2)\\sqrt{2} = 3\\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "indices",
      "index laws",
      "multiplying"
    ],
    "questionText": "Simplify $\\left(2a^3\\right)\\left(3a^4\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group numbers and powers separately.",
          "workingLatex": "\\left(2a^3\\right)\\left(3a^4\\right) = (2 \\times 3)\\left(a^3 \\times a^4\\right)",
          "explanation": "Multiplication can be rearranged, so we collect the number parts together and the powers of $a$ together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the coefficients.",
          "workingLatex": "2 \\times 3 = 6",
          "explanation": "Multiplying the numerical coefficients $2$ and $3$ gives $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the multiplication law of indices.",
          "workingLatex": "a^m \\times a^n = a^{m+n}",
          "explanation": "Multiplying powers of the same base means adding the indices.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the indices.",
          "workingLatex": "a^3 \\times a^4 = a^{3+4} = a^{7}",
          "explanation": "Adding $3$ and $4$ gives $7$ factors of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the parts.",
          "workingLatex": "6a^{7}",
          "explanation": "Multiplying the coefficient $6$ and the power $a^7$ gives $6a^7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "6a^{7}",
          "explanation": "The simplified expression is $6a^7$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(2a^3\\right)\\left(3a^4\\right) = 6a^{3+4} = 6a^{7}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "fractional indices",
      "evaluating"
    ],
    "questionText": "Evaluate $16^{\\frac{3}{4}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the base as a fourth power.",
          "workingLatex": "16 = 2^4",
          "explanation": "Spotting $16 = 2^4$ makes the fourth root clean and avoids awkward arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the fractional index.",
          "workingLatex": "16^{\\frac{3}{4}} = \\left(16^{\\frac{1}{4}}\\right)^{3}",
          "explanation": "The denominator $4$ is a fourth root and the numerator $3$ is a cube; the root first keeps numbers small.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the fourth root.",
          "workingLatex": "16^{\\frac{1}{4}} = 2",
          "explanation": "Since $2^4 = 16$, the fourth root of $16$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the remaining power.",
          "workingLatex": "\\left(16^{\\frac{1}{4}}\\right)^{3} = 2^{3}",
          "explanation": "The numerator $3$ tells us to cube the fourth root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cube.",
          "workingLatex": "2^3 = 8",
          "explanation": "Cubing $2$ gives $8$, so $16^{3/4} = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the intermediate result.",
          "workingLatex": "16^{\\frac{3}{4}} = 8",
          "explanation": "Combining the steps gives $16^{3/4} = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check.",
          "workingLatex": "8^{4} = 4096 = 16^{3} \\ \\checkmark",
          "explanation": "Raising $8$ to the fourth power gives $16^3$, confirming that $8$ is indeed $16^{3/4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "16^{0.75} \\approx 8",
          "explanation": "Evaluating the original power on a calculator gives about $8$, matching the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "8",
          "explanation": "The value of $16^{3/4}$ is $8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$16^{\\frac{3}{4}} = \\left(16^{1/4}\\right)^{3} = 2^3 = 8$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "negative fractional indices",
      "evaluating"
    ],
    "questionText": "Evaluate $81^{-\\frac{1}{4}}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the negative sign first.",
          "workingLatex": "81^{-\\frac{1}{4}} = \\dfrac{1}{81^{\\frac{1}{4}}}",
          "explanation": "A negative index means take the reciprocal, so the positive power $81^{1/4}$ moves into the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the fractional index.",
          "workingLatex": "81^{\\frac{1}{4}} = \\sqrt[4]{81}",
          "explanation": "An index of $\\tfrac14$ is the fourth root, so we need the number whose fourth power is $81$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the base as a fourth power.",
          "workingLatex": "81 = 3^4",
          "explanation": "Spotting $81 = 3^4$ makes the fourth root immediate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the fourth root.",
          "workingLatex": "81^{\\frac{1}{4}} = 3",
          "explanation": "Since $3^4 = 81$, the fourth root of $81$ is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the reciprocal.",
          "workingLatex": "81^{-\\frac{1}{4}} = \\dfrac{1}{3}",
          "explanation": "Putting $81^{1/4} = 3$ into the denominator gives $\\tfrac13$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check the sign.",
          "workingLatex": "\\text{negative index} \\Rightarrow \\text{fraction} < 1",
          "explanation": "A negative index turns a number bigger than $1$ into a proper fraction, and $\\tfrac13 < 1$ agrees.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify numerically.",
          "workingLatex": "81^{-0.25} \\approx 0.333 = \\tfrac{1}{3}",
          "explanation": "Evaluating the original power gives about $0.333$, confirming the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the meaning.",
          "workingLatex": "81^{-1/4} = \\dfrac{1}{\\sqrt[4]{81}}",
          "explanation": "The expression is just one over the fourth root of $81$, which is a helpful way to read a negative fractional index.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{1}{3}",
          "explanation": "The exact value of $81^{-1/4}$ is $\\tfrac13$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$81^{-\\frac{1}{4}} = \\dfrac{1}{81^{1/4}} = \\dfrac{1}{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "indices",
      "negative fractional indices",
      "fractions"
    ],
    "questionText": "Evaluate $\\left(\\dfrac{8}{27}\\right)^{-\\frac{1}{3}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the negative index first.",
          "workingLatex": "\\left(\\tfrac{8}{27}\\right)^{-\\frac{1}{3}} = \\left(\\tfrac{27}{8}\\right)^{\\frac{1}{3}}",
          "explanation": "A negative index on a fraction flips the fraction, turning the negative power into a positive one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the fractional index.",
          "workingLatex": "\\left(\\tfrac{27}{8}\\right)^{\\frac{1}{3}} = \\sqrt[3]{\\tfrac{27}{8}}",
          "explanation": "An index of $\\tfrac13$ is the cube root, which we can apply to the numerator and denominator separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the cube root.",
          "workingLatex": "\\sqrt[3]{\\tfrac{27}{8}} = \\dfrac{\\sqrt[3]{27}}{\\sqrt[3]{8}}",
          "explanation": "The cube root of a fraction is the cube root of the top over the cube root of the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cube-root the numerator.",
          "workingLatex": "\\sqrt[3]{27} = 3",
          "explanation": "Since $3^3 = 27$, the cube root of $27$ is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cube-root the denominator.",
          "workingLatex": "\\sqrt[3]{8} = 2",
          "explanation": "Since $2^3 = 8$, the cube root of $8$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the fraction.",
          "workingLatex": "\\dfrac{3}{2}",
          "explanation": "Combining the two cube roots gives $\\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check the size.",
          "workingLatex": "\\text{base} < 1 \\text{ with negative index} \\Rightarrow \\text{answer} > 1",
          "explanation": "The base $\\tfrac{8}{27}$ is less than $1$, so a negative index makes the result bigger than $1$, and $\\tfrac32 > 1$ agrees.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "(8/27)^{-0.333} \\approx 1.5 = \\tfrac{3}{2}",
          "explanation": "Evaluating the original expression gives about $1.5$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{3}{2}",
          "explanation": "The value of $\\left(\\tfrac{8}{27}\\right)^{-1/3}$ is $\\tfrac32$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(\\tfrac{8}{27}\\right)^{-\\frac{1}{3}} = \\left(\\tfrac{27}{8}\\right)^{\\frac{1}{3}} = \\dfrac{\\sqrt[3]{27}}{\\sqrt[3]{8}} = \\dfrac{3}{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "simplifying"
    ],
    "questionText": "Rationalise the denominator and simplify $\\dfrac{5}{\\sqrt{10}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{remove the surd from the denominator}",
          "explanation": "Rationalising rewrites the fraction with a whole-number denominator, the standard tidy form for a surd expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the surd.",
          "workingLatex": "\\dfrac{5}{\\sqrt{10}} \\times \\dfrac{\\sqrt{10}}{\\sqrt{10}}",
          "explanation": "Multiplying by $\\tfrac{\\sqrt{10}}{\\sqrt{10}} = 1$ keeps the value the same while clearing the surd, since $\\sqrt{10}\\times\\sqrt{10} = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the numerator.",
          "workingLatex": "5 \\times \\sqrt{10} = 5\\sqrt{10}",
          "explanation": "The top becomes $5\\sqrt{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the denominator.",
          "workingLatex": "\\sqrt{10} \\times \\sqrt{10} = 10",
          "explanation": "The bottom becomes the rational number $10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the fraction.",
          "workingLatex": "\\dfrac{5\\sqrt{10}}{10}",
          "explanation": "Combining top and bottom gives $\\tfrac{5\\sqrt{10}}{10}$, which can still be simplified.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor.",
          "workingLatex": "\\dfrac{5}{10} = \\dfrac{1}{2}",
          "explanation": "The numbers $5$ and $10$ share a factor of $5$, so the fraction reduces to $\\tfrac12$ of $\\sqrt{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simplified form.",
          "workingLatex": "\\dfrac{\\sqrt{10}}{2}",
          "explanation": "After cancelling, the expression becomes $\\tfrac{\\sqrt{10}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{5}{\\sqrt{10}} \\approx 1.581,\\quad \\dfrac{\\sqrt{10}}{2} \\approx 1.581",
          "explanation": "Both forms evaluate to about $1.581$, confirming they are equal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{\\sqrt{10}}{2}",
          "explanation": "The rationalised, simplified form is $\\tfrac{\\sqrt{10}}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{5}{\\sqrt{10}} = \\dfrac{5\\sqrt{10}}{10} = \\dfrac{\\sqrt{10}}{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "surds",
      "expanding brackets"
    ],
    "questionText": "Expand and simplify $\\left(3 + \\sqrt{5}\\right)\\left(2 - \\sqrt{5}\\right)$, giving your answer in the form $a + b\\sqrt{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the expansion.",
          "workingLatex": "\\text{multiply each term in the first bracket by each in the second}",
          "explanation": "We expand the two brackets fully (all four products), then collect rational and surd terms — the standard `FOIL' approach.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply the first terms.",
          "workingLatex": "3 \\times 2 = 6",
          "explanation": "The product of the first terms in each bracket is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the outer terms.",
          "workingLatex": "3 \\times (-\\sqrt{5}) = -3\\sqrt{5}",
          "explanation": "Multiplying $3$ by $-\\sqrt5$ gives $-3\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the inner terms.",
          "workingLatex": "\\sqrt{5} \\times 2 = 2\\sqrt{5}",
          "explanation": "Multiplying $\\sqrt5$ by $2$ gives $2\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the last terms.",
          "workingLatex": "\\sqrt{5} \\times (-\\sqrt{5}) = -5",
          "explanation": "Multiplying $\\sqrt5$ by $-\\sqrt5$ gives $-(\\sqrt5)^2 = -5$, a rational term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the rational terms.",
          "workingLatex": "6 - 5 = 1",
          "explanation": "The whole-number parts $6$ and $-5$ combine to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the surd terms.",
          "workingLatex": "-3\\sqrt{5} + 2\\sqrt{5} = -\\sqrt{5}",
          "explanation": "The surd parts $-3\\sqrt5$ and $2\\sqrt5$ combine to $-\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write in the required form.",
          "workingLatex": "1 - \\sqrt{5}",
          "explanation": "Combining gives $1 - \\sqrt5$, matching the form $a + b\\sqrt5$ with $a=1$ and $b=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "1 - \\sqrt{5}",
          "explanation": "The expanded, simplified expression is $1 - \\sqrt5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(3+\\sqrt{5}\\right)\\left(2-\\sqrt{5}\\right) = 6 - 3\\sqrt{5} + 2\\sqrt{5} - 5 = 1 - \\sqrt{5}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "fractional solution"
    ],
    "questionText": "Solve the equation $8^{x} = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a common base.",
          "workingLatex": "8 = 2^3, \\quad 4 = 2^2",
          "explanation": "Both $8$ and $4$ are powers of $2$, so rewriting with base $2$ lets us compare indices directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the left-hand side.",
          "workingLatex": "8^{x} = \\left(2^3\\right)^{x} = 2^{3x}",
          "explanation": "Using the power-of-a-power law gives $2^{3x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the right-hand side.",
          "workingLatex": "4 = 2^{2}",
          "explanation": "Expressing $4$ as $2^2$ puts both sides in the same form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the two expressions.",
          "workingLatex": "2^{3x} = 2^{2}",
          "explanation": "Both sides are now powers of $2$, so we can compare exponents.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "3x = 2",
          "explanation": "Equal powers of the same base force equal indices, giving $3x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x.",
          "workingLatex": "x = \\dfrac{2}{3}",
          "explanation": "Dividing both sides by $3$ gives the fractional solution $x = \\tfrac23$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the solution.",
          "workingLatex": "8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4 \\ \\checkmark",
          "explanation": "Substituting back, $8^{2/3} = 4$, so the solution works.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sense-check the size.",
          "workingLatex": "8^0 = 1 < 4 < 8 = 8^1 \\Rightarrow 0 < x < 1",
          "explanation": "Because $4$ lies between $8^0$ and $8^1$, the solution must be between $0$ and $1$, and $\\tfrac23$ fits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x = \\dfrac{2}{3}",
          "explanation": "The solution of $8^x = 4$ is $x = \\tfrac23$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8^x = 4 \\Rightarrow 2^{3x} = 2^{2} \\Rightarrow 3x = 2 \\Rightarrow x = \\dfrac{2}{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "negative fractional solution"
    ],
    "questionText": "Solve the equation $16^{x} = \\dfrac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a common base.",
          "workingLatex": "16 = 2^4, \\quad \\dfrac{1}{2} = 2^{-1}",
          "explanation": "Both sides can be written as powers of $2$; the fraction $\\tfrac12$ needs a negative index.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the left-hand side.",
          "workingLatex": "16^{x} = \\left(2^4\\right)^{x} = 2^{4x}",
          "explanation": "Using the power-of-a-power law gives $2^{4x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the right-hand side.",
          "workingLatex": "\\dfrac{1}{2} = 2^{-1}",
          "explanation": "A reciprocal corresponds to a negative index, so $\\tfrac12 = 2^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the two expressions.",
          "workingLatex": "2^{4x} = 2^{-1}",
          "explanation": "Both sides are now powers of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "4x = -1",
          "explanation": "Equal powers of the same base force equal indices, giving $4x = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x.",
          "workingLatex": "x = -\\dfrac{1}{4}",
          "explanation": "Dividing both sides by $4$ gives $x = -\\tfrac14$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the solution.",
          "workingLatex": "16^{-1/4} = \\dfrac{1}{16^{1/4}} = \\dfrac{1}{2} \\ \\checkmark",
          "explanation": "Substituting back, $16^{-1/4} = \\tfrac12$, so the solution works.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sense-check the sign.",
          "workingLatex": "\\tfrac{1}{2} < 1 \\Rightarrow x < 0",
          "explanation": "Because the right-hand side is less than $1$, the index must be negative, and $-\\tfrac14$ is.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "x = -\\dfrac{1}{4}",
          "explanation": "The solution of $16^x = \\tfrac12$ is $x = -\\tfrac14$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$16^x = \\dfrac{1}{2} \\Rightarrow 2^{4x} = 2^{-1} \\Rightarrow 4x = -1 \\Rightarrow x = -\\dfrac{1}{4}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "surds",
      "simplifying surds",
      "dividing"
    ],
    "questionText": "Simplify $\\dfrac{\\sqrt{12} + \\sqrt{3}}{\\sqrt{3}}$, giving your answer as an integer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Simplify the first surd in the numerator.",
          "workingLatex": "\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}",
          "explanation": "Taking out the square factor $4$ turns $\\sqrt{12}$ into $2\\sqrt3$, so the numerator becomes a multiple of $\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the numerator.",
          "workingLatex": "2\\sqrt{3} + \\sqrt{3} = 3\\sqrt{3}",
          "explanation": "The two terms are like surds, so adding the coefficients gives $3\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the whole fraction.",
          "workingLatex": "\\dfrac{\\sqrt{12} + \\sqrt{3}}{\\sqrt{3}} = \\dfrac{3\\sqrt{3}}{\\sqrt{3}}",
          "explanation": "Replacing the numerator with its simplified form gives a much cleaner fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the common surd.",
          "workingLatex": "\\dfrac{3\\sqrt{3}}{\\sqrt{3}} = 3 \\times \\dfrac{\\sqrt{3}}{\\sqrt{3}}",
          "explanation": "The $\\sqrt3$ on top and bottom are identical, so they divide to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the surd ratio.",
          "workingLatex": "\\dfrac{\\sqrt{3}}{\\sqrt{3}} = 1",
          "explanation": "Any non-zero quantity divided by itself is $1$, clearing the surd entirely.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the result.",
          "workingLatex": "3 \\times 1 = 3",
          "explanation": "Multiplying $3$ by $1$ leaves the integer $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative check.",
          "workingLatex": "\\dfrac{\\sqrt{12}}{\\sqrt{3}} + \\dfrac{\\sqrt{3}}{\\sqrt{3}} = \\sqrt{4} + 1 = 2 + 1 = 3",
          "explanation": "Splitting the fraction and using $\\tfrac{\\sqrt{12}}{\\sqrt3} = \\sqrt{4} = 2$ gives the same answer by a second route.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{3.46 + 1.73}{1.73} \\approx 3",
          "explanation": "Approximate decimals give about $3$, a useful sanity check on the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "3",
          "explanation": "The simplified value of the expression is the integer $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sqrt{12} + \\sqrt{3}}{\\sqrt{3}} = \\dfrac{2\\sqrt{3} + \\sqrt{3}}{\\sqrt{3}} = \\dfrac{3\\sqrt{3}}{\\sqrt{3}} = 3$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "indices",
      "fractional indices",
      "adding indices"
    ],
    "questionText": "Simplify $a^{\\frac{2}{3}} \\times a^{\\frac{5}{6}}$, leaving your answer as a single power of $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the operation.",
          "workingLatex": "a^{\\frac{2}{3}} \\times a^{\\frac{5}{6}}",
          "explanation": "We are multiplying two powers of the same base $a$, so the multiplication law applies even though the indices are fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the multiplication law.",
          "workingLatex": "a^m \\times a^n = a^{m+n}",
          "explanation": "Multiplying powers of the same base means adding the indices, and fractional indices are added like any other fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the sum of indices.",
          "workingLatex": "\\dfrac{2}{3} + \\dfrac{5}{6}",
          "explanation": "We must add the two fractional indices to find the combined power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find a common denominator.",
          "workingLatex": "\\dfrac{2}{3} = \\dfrac{4}{6}",
          "explanation": "Rewriting $\\tfrac23$ as $\\tfrac46$ gives both fractions the denominator $6$, ready to add.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the fractions.",
          "workingLatex": "\\dfrac{4}{6} + \\dfrac{5}{6} = \\dfrac{9}{6}",
          "explanation": "Adding the numerators over the common denominator gives $\\tfrac96$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the index.",
          "workingLatex": "\\dfrac{9}{6} = \\dfrac{3}{2}",
          "explanation": "Cancelling a factor of $3$ reduces $\\tfrac96$ to $\\tfrac32$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the single power.",
          "workingLatex": "a^{\\frac{3}{2}}",
          "explanation": "Placing the simplified index on the base gives $a^{3/2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the meaning.",
          "workingLatex": "a^{3/2} = \\sqrt{a^3}",
          "explanation": "An index of $\\tfrac32$ means the square root of $a$ cubed, a useful way to interpret the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "a^{\\frac{3}{2}}",
          "explanation": "The simplified expression is $a^{3/2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a^{\\frac{2}{3}} \\times a^{\\frac{5}{6}} = a^{\\frac{4}{6} + \\frac{5}{6}} = a^{\\frac{9}{6}} = a^{\\frac{3}{2}}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Rationalise the denominator of $\\dfrac{3}{\\sqrt{5} - \\sqrt{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate.",
          "workingLatex": "\\text{conjugate of } \\sqrt{5} - \\sqrt{2} \\text{ is } \\sqrt{5} + \\sqrt{2}",
          "explanation": "For a two-term surd denominator we multiply by its conjugate, turning the bottom into a surd-free difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{3}{\\sqrt{5}-\\sqrt{2}} \\times \\dfrac{\\sqrt{5}+\\sqrt{2}}{\\sqrt{5}+\\sqrt{2}}",
          "explanation": "Multiplying by $1$ in this form preserves the value while setting up the denominator to rationalise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator.",
          "workingLatex": "(\\sqrt{5}-\\sqrt{2})(\\sqrt{5}+\\sqrt{2}) = 5 - 2 = 3",
          "explanation": "The difference of squares gives $(\\sqrt5)^2 - (\\sqrt2)^2 = 5 - 2 = 3$, a rational denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the numerator.",
          "workingLatex": "3\\left(\\sqrt{5} + \\sqrt{2}\\right)",
          "explanation": "The top becomes $3$ times the conjugate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the fraction.",
          "workingLatex": "\\dfrac{3\\left(\\sqrt{5}+\\sqrt{2}\\right)}{3}",
          "explanation": "Placing the numerator over the rational denominator $3$ gives this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor.",
          "workingLatex": "\\dfrac{3}{3} = 1",
          "explanation": "The factor of $3$ on top and bottom cancels neatly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simplified result.",
          "workingLatex": "\\sqrt{5} + \\sqrt{2}",
          "explanation": "After cancelling, the expression reduces to $\\sqrt5 + \\sqrt2$ with no denominator at all.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{3}{2.236 - 1.414} \\approx 3.65,\\quad \\sqrt{5} + \\sqrt{2} \\approx 3.65",
          "explanation": "Both the original and simplified forms evaluate to about $3.65$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\sqrt{5} + \\sqrt{2}",
          "explanation": "The rationalised expression is $\\sqrt5 + \\sqrt2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3}{\\sqrt{5}-\\sqrt{2}} = \\dfrac{3\\left(\\sqrt{5}+\\sqrt{2}\\right)}{5-2} = \\dfrac{3\\left(\\sqrt{5}+\\sqrt{2}\\right)}{3} = \\sqrt{5} + \\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "hidden quadratic"
    ],
    "questionText": "Solve the equation $4^{x} - 5\\left(2^{x}\\right) + 4 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the hidden quadratic.",
          "workingLatex": "4^{x} = \\left(2^{x}\\right)^{2}",
          "explanation": "Since $4^x = (2^2)^x = (2^x)^2$, the equation is a quadratic in the quantity $2^x$ rather than in $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution.",
          "workingLatex": "\\text{let } y = 2^{x}",
          "explanation": "Replacing $2^x$ by $y$ turns the equation into a standard quadratic we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in y.",
          "workingLatex": "y^2 - 5y + 4 = 0",
          "explanation": "With $y = 2^x$, the equation becomes $y^2 - 5y + 4 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "(y - 1)(y - 4) = 0",
          "explanation": "We need two numbers multiplying to $4$ and adding to $5$, namely $1$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y.",
          "workingLatex": "y = 1 \\quad \\text{or} \\quad y = 4",
          "explanation": "Setting each factor to zero gives the two possible values of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Return to the substitution.",
          "workingLatex": "2^{x} = 1 \\quad \\text{or} \\quad 2^{x} = 4",
          "explanation": "Each value of $y$ is really $2^x$, so we solve two simple index equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the first index equation.",
          "workingLatex": "2^{x} = 2^{0} \\Rightarrow x = 0",
          "explanation": "Since $2^0 = 1$, the equation $2^x = 1$ gives $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the second index equation.",
          "workingLatex": "2^{x} = 2^{2} \\Rightarrow x = 2",
          "explanation": "Writing $4$ as $2^2$ and comparing indices gives $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the solutions.",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 2",
          "explanation": "Both values are valid because $2^x$ is always positive, matching the positive roots $y = 1, 4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check x = 0.",
          "workingLatex": "4^{0} - 5(2^{0}) + 4 = 1 - 5 + 4 = 0 \\ \\checkmark",
          "explanation": "Substituting $x=0$ gives $1 - 5 + 4 = 0$, so it satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x = 2.",
          "workingLatex": "4^{2} - 5(2^{2}) + 4 = 16 - 20 + 4 = 0 \\ \\checkmark",
          "explanation": "Substituting $x=2$ gives $16 - 20 + 4 = 0$, so it also satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm no roots were lost.",
          "workingLatex": "y = 1, 4 > 0",
          "explanation": "Both $y$-values are positive, so each gives a genuine solution for $x$; none had to be rejected.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x = 0 \\ \\text{or} \\ x = 2",
          "explanation": "The solutions of the equation are $x = 0$ and $x = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Let $y = 2^x$: then $y^2 - 5y + 4 = 0 \\Rightarrow (y-1)(y-4) = 0 \\Rightarrow 2^x = 1 \\text{ or } 4 \\Rightarrow x = 0 \\text{ or } x = 2$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "hidden quadratic"
    ],
    "questionText": "Solve the equation $9^{x} - 4\\left(3^{x}\\right) + 3 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the hidden quadratic.",
          "workingLatex": "9^{x} = \\left(3^{x}\\right)^{2}",
          "explanation": "Since $9^x = (3^2)^x = (3^x)^2$, the equation is a quadratic in $3^x$ rather than in $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution.",
          "workingLatex": "\\text{let } y = 3^{x}",
          "explanation": "Replacing $3^x$ by $y$ turns the equation into a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in y.",
          "workingLatex": "y^2 - 4y + 3 = 0",
          "explanation": "With $y = 3^x$, the equation becomes $y^2 - 4y + 3 = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "(y - 1)(y - 3) = 0",
          "explanation": "We need two numbers multiplying to $3$ and adding to $4$, namely $1$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for y.",
          "workingLatex": "y = 1 \\quad \\text{or} \\quad y = 3",
          "explanation": "Setting each factor to zero gives the two possible values of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Return to the substitution.",
          "workingLatex": "3^{x} = 1 \\quad \\text{or} \\quad 3^{x} = 3",
          "explanation": "Each value of $y$ is really $3^x$, so we solve two simple index equations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the first index equation.",
          "workingLatex": "3^{x} = 3^{0} \\Rightarrow x = 0",
          "explanation": "Since $3^0 = 1$, the equation $3^x = 1$ gives $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the second index equation.",
          "workingLatex": "3^{x} = 3^{1} \\Rightarrow x = 1",
          "explanation": "Writing $3$ as $3^1$ and comparing indices gives $x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the solutions.",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 1",
          "explanation": "Both values are valid because $3^x$ is always positive, matching the positive roots $y = 1, 3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check x = 0.",
          "workingLatex": "9^{0} - 4(3^{0}) + 3 = 1 - 4 + 3 = 0 \\ \\checkmark",
          "explanation": "Substituting $x=0$ gives $1 - 4 + 3 = 0$, so it satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x = 1.",
          "workingLatex": "9^{1} - 4(3^{1}) + 3 = 9 - 12 + 3 = 0 \\ \\checkmark",
          "explanation": "Substituting $x=1$ gives $9 - 12 + 3 = 0$, so it also satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the technique.",
          "workingLatex": "\\text{substitution converts an index equation to a quadratic}",
          "explanation": "Recognising $9^x = (3^x)^2$ and substituting is the key move for these hidden-quadratic equations.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x = 0 \\ \\text{or} \\ x = 1",
          "explanation": "The solutions of the equation are $x = 0$ and $x = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Let $y = 3^x$: then $y^2 - 4y + 3 = 0 \\Rightarrow (y-1)(y-3) = 0 \\Rightarrow 3^x = 1 \\text{ or } 3 \\Rightarrow x = 0 \\text{ or } x = 1$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Express $\\dfrac{2 + \\sqrt{3}}{2 - \\sqrt{3}}$ in the form $a + b\\sqrt{3}$, where $a$ and $b$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate of the denominator.",
          "workingLatex": "\\text{conjugate of } 2 - \\sqrt{3} \\text{ is } 2 + \\sqrt{3}",
          "explanation": "To rationalise the two-term denominator we multiply by its conjugate, turning the bottom into a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{2+\\sqrt{3}}{2-\\sqrt{3}} \\times \\dfrac{2+\\sqrt{3}}{2+\\sqrt{3}}",
          "explanation": "Multiplying by $1$ in this form preserves the value while clearing the surd from the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator.",
          "workingLatex": "(2-\\sqrt{3})(2+\\sqrt{3}) = 4 - 3 = 1",
          "explanation": "The difference of squares gives $2^2 - (\\sqrt3)^2 = 4 - 3 = 1$, an especially clean denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the numerator.",
          "workingLatex": "(2+\\sqrt{3})^2 = 4 + 4\\sqrt{3} + 3",
          "explanation": "The numerator is $(2+\\sqrt3)^2$; expanding gives $4$, the cross term $4\\sqrt3$, and $(\\sqrt3)^2 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator.",
          "workingLatex": "4 + 3 + 4\\sqrt{3} = 7 + 4\\sqrt{3}",
          "explanation": "Adding the rational parts $4 + 3 = 7$ gives $7 + 4\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the fraction.",
          "workingLatex": "\\dfrac{7 + 4\\sqrt{3}}{1}",
          "explanation": "Placing the numerator over the denominator $1$ gives this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by one.",
          "workingLatex": "7 + 4\\sqrt{3}",
          "explanation": "Dividing by $1$ leaves the expression unchanged, already in the form $a + b\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify a and b.",
          "workingLatex": "a = 7, \\quad b = 4",
          "explanation": "Comparing with $a + b\\sqrt3$ gives the integers $a = 7$ and $b = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note why the denominator was 1.",
          "workingLatex": "2^2 - (\\sqrt{3})^2 = 1",
          "explanation": "The clean denominator of $1$ is what makes this rationalisation especially tidy.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{2 + 1.732}{2 - 1.732} \\approx 13.93",
          "explanation": "The original expression evaluates to about $13.93$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Match the check.",
          "workingLatex": "7 + 4(1.732) \\approx 13.93",
          "explanation": "The answer $7 + 4\\sqrt3$ also gives about $13.93$, confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on the method.",
          "workingLatex": "\\text{multiply by the conjugate, then expand}",
          "explanation": "The conjugate method plus a careful expansion of the numerator is the standard route for these problems.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "7 + 4\\sqrt{3}",
          "explanation": "The expression equals $7 + 4\\sqrt3$, so $a = 7$ and $b = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2+\\sqrt{3}}{2-\\sqrt{3}} = \\dfrac{(2+\\sqrt{3})^2}{4-3} = \\dfrac{7 + 4\\sqrt{3}}{1} = 7 + 4\\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Express $\\dfrac{1}{2 - \\sqrt{3}}$ in the form $a + b\\sqrt{3}$, where $a$ and $b$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{rationalise and write as } a + b\\sqrt{3}",
          "explanation": "We must clear the surd from the denominator and then read off the integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the conjugate.",
          "workingLatex": "\\text{conjugate of } 2 - \\sqrt{3} \\text{ is } 2 + \\sqrt{3}",
          "explanation": "For the two-term denominator we multiply by its conjugate, producing a difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain why the conjugate works.",
          "workingLatex": "(2-\\sqrt{3})(2+\\sqrt{3}) = 2^2 - (\\sqrt{3})^2",
          "explanation": "The conjugate exploits the difference-of-squares identity, which squares away the surd.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{1}{2-\\sqrt{3}} \\times \\dfrac{2+\\sqrt{3}}{2+\\sqrt{3}}",
          "explanation": "Multiplying by $1$ in this form preserves the value while rationalising the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the denominator.",
          "workingLatex": "2^2 - (\\sqrt{3})^2 = 4 - 3 = 1",
          "explanation": "The difference of squares gives $4 - 3 = 1$, an especially clean denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the numerator.",
          "workingLatex": "1 \\times (2 + \\sqrt{3}) = 2 + \\sqrt{3}",
          "explanation": "The top becomes $2 + \\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the fraction.",
          "workingLatex": "\\dfrac{2 + \\sqrt{3}}{1}",
          "explanation": "Placing the numerator over the denominator $1$ gives this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify.",
          "workingLatex": "2 + \\sqrt{3}",
          "explanation": "Dividing by $1$ leaves $2 + \\sqrt3$, already in the form $a + b\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify a and b.",
          "workingLatex": "a = 2, \\quad b = 1",
          "explanation": "Comparing with $a + b\\sqrt3$ gives the integers $a = 2$ and $b = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity-check the denominator.",
          "workingLatex": "\\text{denominator became } 1",
          "explanation": "Because the conjugate product was $1$, the rationalisation was particularly simple.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{1}{2 - 1.732} \\approx 3.73",
          "explanation": "The original expression evaluates to about $3.73$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Match the check.",
          "workingLatex": "2 + 1.732 \\approx 3.73",
          "explanation": "The answer $2 + \\sqrt3$ also gives about $3.73$, confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "2 + \\sqrt{3}",
          "explanation": "The expression equals $2 + \\sqrt3$, so $a = 2$ and $b = 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{2-\\sqrt{3}} = \\dfrac{2+\\sqrt{3}}{4-3} = \\dfrac{2+\\sqrt{3}}{1} = 2 + \\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "surds",
      "rationalising the denominator",
      "conjugates"
    ],
    "questionText": "Express $\\dfrac{\\sqrt{5} + 1}{\\sqrt{5} - 1}$ in the form $a + b\\sqrt{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the conjugate.",
          "workingLatex": "\\text{conjugate of } \\sqrt{5} - 1 \\text{ is } \\sqrt{5} + 1",
          "explanation": "For the two-term surd denominator we multiply by its conjugate, producing a surd-free difference of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "\\dfrac{\\sqrt{5}+1}{\\sqrt{5}-1} \\times \\dfrac{\\sqrt{5}+1}{\\sqrt{5}+1}",
          "explanation": "Multiplying by $1$ in this form preserves the value while rationalising the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the denominator.",
          "workingLatex": "(\\sqrt{5}-1)(\\sqrt{5}+1) = 5 - 1 = 4",
          "explanation": "The difference of squares gives $(\\sqrt5)^2 - 1^2 = 5 - 1 = 4$, a rational denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the numerator.",
          "workingLatex": "(\\sqrt{5}+1)^2 = 5 + 2\\sqrt{5} + 1",
          "explanation": "The numerator is $(\\sqrt5+1)^2$; expanding gives $5$, the cross term $2\\sqrt5$, and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator.",
          "workingLatex": "5 + 1 + 2\\sqrt{5} = 6 + 2\\sqrt{5}",
          "explanation": "Adding the rational parts $5 + 1 = 6$ gives $6 + 2\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the fraction.",
          "workingLatex": "\\dfrac{6 + 2\\sqrt{5}}{4}",
          "explanation": "Placing the numerator over the denominator $4$ gives this fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out the common 2.",
          "workingLatex": "\\dfrac{2\\left(3 + \\sqrt{5}\\right)}{4}",
          "explanation": "Both numerator terms share a factor of $2$, which we take out ready to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor.",
          "workingLatex": "\\dfrac{3 + \\sqrt{5}}{2}",
          "explanation": "Cancelling the $2$ against the $4$ leaves the denominator $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split into the required form.",
          "workingLatex": "\\dfrac{3}{2} + \\dfrac{1}{2}\\sqrt{5}",
          "explanation": "Separating the rational and surd parts writes the answer as $a + b\\sqrt5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify a and b.",
          "workingLatex": "a = \\dfrac{3}{2}, \\quad b = \\dfrac{1}{2}",
          "explanation": "Comparing with $a + b\\sqrt5$ gives $a = \\tfrac32$ and $b = \\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify numerically.",
          "workingLatex": "\\dfrac{2.236 + 1}{2.236 - 1} \\approx 2.62",
          "explanation": "The original expression evaluates to about $2.62$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Match the check.",
          "workingLatex": "\\dfrac{3 + 2.236}{2} \\approx 2.62",
          "explanation": "The answer $\\tfrac{3 + \\sqrt5}{2}$ also gives about $2.62$, confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "\\dfrac{3 + \\sqrt{5}}{2}",
          "explanation": "The expression equals $\\tfrac{3 + \\sqrt5}{2}$, i.e. $\\tfrac32 + \\tfrac12\\sqrt5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sqrt{5}+1}{\\sqrt{5}-1} = \\dfrac{(\\sqrt{5}+1)^2}{5-1} = \\dfrac{6 + 2\\sqrt{5}}{4} = \\dfrac{3 + \\sqrt{5}}{2}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "surds",
      "expanding brackets",
      "cubing"
    ],
    "questionText": "Expand and simplify $\\left(1 + \\sqrt{3}\\right)^{3}$, giving your answer in the form $a + b\\sqrt{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the cube as a square times the bracket.",
          "workingLatex": "\\left(1+\\sqrt{3}\\right)^{3} = \\left(1+\\sqrt{3}\\right)^{2}\\left(1+\\sqrt{3}\\right)",
          "explanation": "Cubing is easier in two stages: first square the bracket, then multiply by one more copy of it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the square.",
          "workingLatex": "\\left(1+\\sqrt{3}\\right)^{2} = 1 + 2\\sqrt{3} + 3 = 4 + 2\\sqrt{3}",
          "explanation": "Using $(a+b)^2 = a^2 + 2ab + b^2$ with $a=1,\\ b=\\sqrt3$ gives $4 + 2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the remaining product.",
          "workingLatex": "\\left(4 + 2\\sqrt{3}\\right)\\left(1 + \\sqrt{3}\\right)",
          "explanation": "We now multiply the squared result by the final bracket to complete the cube.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first terms.",
          "workingLatex": "4 \\times 1 = 4",
          "explanation": "The product of the first terms is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the outer terms.",
          "workingLatex": "4 \\times \\sqrt{3} = 4\\sqrt{3}",
          "explanation": "Multiplying $4$ by $\\sqrt3$ gives $4\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the inner terms.",
          "workingLatex": "2\\sqrt{3} \\times 1 = 2\\sqrt{3}",
          "explanation": "Multiplying $2\\sqrt3$ by $1$ gives $2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply the last terms.",
          "workingLatex": "2\\sqrt{3} \\times \\sqrt{3} = 2 \\times 3 = 6",
          "explanation": "Multiplying $2\\sqrt3$ by $\\sqrt3$ gives $2(\\sqrt3)^2 = 6$, a rational term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the rational terms.",
          "workingLatex": "4 + 6 = 10",
          "explanation": "The whole-number parts $4$ and $6$ add to $10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the surd terms.",
          "workingLatex": "4\\sqrt{3} + 2\\sqrt{3} = 6\\sqrt{3}",
          "explanation": "The surd parts $4\\sqrt3$ and $2\\sqrt3$ combine to $6\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write in the required form.",
          "workingLatex": "10 + 6\\sqrt{3}",
          "explanation": "Combining gives $10 + 6\\sqrt3$, matching the form $a + b\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify a and b.",
          "workingLatex": "a = 10, \\quad b = 6",
          "explanation": "Comparing with $a + b\\sqrt3$ gives the integers $a = 10$ and $b = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify numerically.",
          "workingLatex": "(1 + 1.732)^3 \\approx 20.39,\\quad 10 + 6(1.732) \\approx 20.39",
          "explanation": "Both the original expression and $10 + 6\\sqrt3$ evaluate to about $20.39$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "10 + 6\\sqrt{3}",
          "explanation": "The expanded, simplified expression is $10 + 6\\sqrt3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(1+\\sqrt{3}\\right)^{3} = \\left(4 + 2\\sqrt{3}\\right)\\left(1+\\sqrt{3}\\right) = 10 + 6\\sqrt{3}$"
    }
  },
  {
    "id": "al.y1.pure.indices-surds.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Indices and surds",
    "subtopicId": "al.y1.pure.indices-surds",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "indices",
      "solving index equations",
      "common base"
    ],
    "questionText": "Solve the equation $16^{x} = 8^{\\,x+1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a common base.",
          "workingLatex": "16 = 2^4, \\quad 8 = 2^3",
          "explanation": "Both $16$ and $8$ are powers of $2$, so rewriting with base $2$ lets us compare indices directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the left-hand side.",
          "workingLatex": "16^{x} = \\left(2^4\\right)^{x} = 2^{4x}",
          "explanation": "Using the power-of-a-power law gives $2^{4x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the right-hand side.",
          "workingLatex": "8^{\\,x+1} = \\left(2^3\\right)^{x+1} = 2^{3(x+1)}",
          "explanation": "Similarly the right-hand side becomes $2^{3(x+1)}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation with equal bases.",
          "workingLatex": "2^{4x} = 2^{3(x+1)}",
          "explanation": "Both sides are now powers of $2$, so the equation reduces to comparing exponents.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "4x = 3(x+1)",
          "explanation": "Equal powers of the same base force equal indices, giving a linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the right-hand side.",
          "workingLatex": "4x = 3x + 3",
          "explanation": "Multiplying out $3(x+1)$ gives $3x + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the x terms.",
          "workingLatex": "4x - 3x = 3",
          "explanation": "Subtracting $3x$ from both sides gathers the $x$ terms on the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x.",
          "workingLatex": "x = 3",
          "explanation": "Combining $4x - 3x$ gives $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the left-hand side.",
          "workingLatex": "16^{3} = 4096",
          "explanation": "Substituting $x=3$, the left side is $16^3 = 4096$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the right-hand side.",
          "workingLatex": "8^{\\,3+1} = 8^{4} = 4096",
          "explanation": "And the right side is $8^4 = 4096$, so both sides agree.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the solution.",
          "workingLatex": "4096 = 4096 \\ \\checkmark",
          "explanation": "Since both sides equal $4096$, the solution $x = 3$ is verified.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the method.",
          "workingLatex": "\\text{common base, then equate indices}",
          "explanation": "Rewriting both sides with the same base and comparing exponents is the standard approach for these equations.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer.",
          "workingLatex": "x = 3",
          "explanation": "The solution of $16^x = 8^{x+1}$ is $x = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$16^{x} = 8^{\\,x+1} \\Rightarrow 2^{4x} = 2^{3(x+1)} \\Rightarrow 4x = 3x + 3 \\Rightarrow x = 3$"
    }
  }
];
