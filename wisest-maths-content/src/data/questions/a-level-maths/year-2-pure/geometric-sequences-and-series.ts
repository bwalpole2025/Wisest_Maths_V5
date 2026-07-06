import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.geometric-series.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "nth term",
      "common ratio"
    ],
    "questionText": "A geometric sequence has first term $a = 3$ and common ratio $r = 2$. Find the $6$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "In a geometric sequence every term is reached from the first term $a$ by multiplying by the common ratio $r$ a fixed number of times. To land on the $n$th term you multiply by $r$ exactly $n-1$ times, which is what $a r^{n-1}$ records.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 3, \\quad r = 2, \\quad n = 6",
          "explanation": "We are given the first term and the common ratio, and we want the $6$th term, so $n = 6$. Writing the values down first keeps the substitution clean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "u_6 = 3 \\times 2^{6-1}",
          "explanation": "Replacing $a$, $r$ and $n$ turns the general rule into a single calculation. The exponent is $n-1 = 5$ because the first term needs no multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "u_6 = 3 \\times 2^{5} = 3 \\times 32",
          "explanation": "Powers come before multiplication, so we first work out $2^5 = 32$ (doubling five times from $1$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the multiplication",
          "workingLatex": "u_6 = 96",
          "explanation": "Multiplying $3 \\times 32$ gives the value of the sixth term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "u_6 = 96",
          "explanation": "So the $6$th term of the sequence is $96$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_6 = 96$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "nth term",
      "common ratio"
    ],
    "questionText": "The first three terms of a geometric sequence are $3$, $12$, $48$. State the first term $a$ and the common ratio $r$, then find the $6$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term",
          "workingLatex": "a = 3",
          "explanation": "The first term $a$ is simply the number the sequence starts with, which is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the common ratio",
          "workingLatex": "r = \\dfrac{12}{3} = 4",
          "explanation": "In a geometric sequence you get from one term to the next by multiplying by the same fixed number $r$. Dividing any term by the one before it recovers that multiplier: $12 \\div 3 = 4$, and checking $48 \\div 12 = 4$ confirms it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "To reach the $n$th term you start at $a$ and multiply by $r$ exactly $n-1$ times, because the first term needs no multiplication. That is exactly what $a r^{n-1}$ records.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List the known values",
          "workingLatex": "a = 3, \\quad r = 4, \\quad n = 6",
          "explanation": "We want the $6$th term, so $n = 6$. Writing the values down first keeps the substitution tidy.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the formula",
          "workingLatex": "u_6 = 3 \\times 4^{6-1} = 3 \\times 4^{5}",
          "explanation": "Replacing $a$, $r$ and $n$ turns the general rule into one calculation. The exponent is $n-1 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power",
          "workingLatex": "u_6 = 3 \\times 1024",
          "explanation": "Powers are worked out before multiplication, so first find $4^{5} = 1024$ (multiplying by $4$ five times).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Complete the multiplication",
          "workingLatex": "u_6 = 3072",
          "explanation": "Multiplying $3 \\times 1024$ gives the value of the sixth term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "a = 3, \\quad r = 4, \\quad u_6 = 3072",
          "explanation": "So the sequence has first term $3$ and common ratio $4$, and its $6$th term is $3072$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$, $r = 4$, and $u_6 = 3072$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "nth term"
    ],
    "questionText": "A geometric sequence has first term $a = 5$ and common ratio $r = 3$. Find the $5$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "Every term of a geometric sequence comes from the first term $a$ multiplied by the common ratio $r$ a number of times. Reaching the $n$th term needs $n-1$ multiplications, giving $a r^{n-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 5, \\quad r = 3, \\quad n = 5",
          "explanation": "We are given the first term and common ratio and want the $5$th term, so $n = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "u_5 = 5 \\times 3^{5-1} = 5 \\times 3^{4}",
          "explanation": "Putting the values in place gives a single expression to evaluate. The exponent is $n-1 = 4$ because the first term is not multiplied.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "3^{4} = 81",
          "explanation": "Work out the power first: $3^{4} = 3 \\times 3 \\times 3 \\times 3 = 81$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the multiplication",
          "workingLatex": "u_5 = 5 \\times 81 = 405",
          "explanation": "Multiplying $5 \\times 81$ gives the value of the fifth term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "u_5 = 405",
          "explanation": "So the $5$th term of the sequence is $405$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_5 = 405$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "nth term",
      "decreasing sequence"
    ],
    "questionText": "A geometric sequence has first term $a = 64$ and common ratio $r = \\dfrac{1}{2}$. Find the $7$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "The same rule applies whether the sequence grows or shrinks: the $n$th term is $a$ multiplied by $r$ exactly $n-1$ times.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the values and the effect of r",
          "workingLatex": "a = 64, \\quad r = \\dfrac{1}{2}, \\quad n = 7",
          "explanation": "Because $\\left| r \\right| < 1$, each term is half the previous one, so the sequence decreases towards zero. We want the $7$th term, so $n = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "u_7 = 64 \\times \\left( \\dfrac{1}{2} \\right)^{7-1} = 64 \\times \\left( \\dfrac{1}{2} \\right)^{6}",
          "explanation": "Replacing the values gives one expression to evaluate, with exponent $n-1 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "\\left( \\dfrac{1}{2} \\right)^{6} = \\dfrac{1}{2^{6}} = \\dfrac{1}{64}",
          "explanation": "Raising a fraction to a power raises the top and bottom separately: $1^{6} = 1$ and $2^{6} = 64$, giving $\\dfrac{1}{64}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the multiplication",
          "workingLatex": "u_7 = 64 \\times \\dfrac{1}{64} = 1",
          "explanation": "Multiplying by $\\dfrac{1}{64}$ is the same as dividing by $64$, and $64 \\div 64 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "u_7 = 1",
          "explanation": "So the $7$th term of this decreasing sequence is $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_7 = 1$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "nth term",
      "negative ratio"
    ],
    "questionText": "A geometric sequence has first term $a = 1$ and common ratio $r = -2$. Find the $6$th term and comment on the sign of the terms as $n$ increases.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "A negative common ratio still fits the same rule: the $n$th term is $a$ multiplied by $r$ exactly $n-1$ times.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 1, \\quad r = -2, \\quad n = 6",
          "explanation": "We want the $6$th term, so $n = 6$. Keeping the sign of $r$ attached is important here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "u_6 = 1 \\times (-2)^{6-1} = (-2)^{5}",
          "explanation": "Substituting gives $(-2)^{5}$; wrapping $-2$ in brackets makes sure the minus sign is included in the power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "(-2)^{5} = -32",
          "explanation": "A negative number raised to an odd power stays negative, because there is an odd number of minus signs to multiply. Here $2^{5} = 32$, so $(-2)^{5} = -32$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the sixth term",
          "workingLatex": "u_6 = -32",
          "explanation": "So the sixth term equals $-32$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment on the sign pattern",
          "workingLatex": "1, \\; -2, \\; 4, \\; -8, \\; 16, \\; -32, \\ldots",
          "explanation": "Because $r$ is negative, the sign flips at every step, so the terms alternate positive and negative. Odd-numbered terms use an even power of $r$ and are positive; even-numbered terms use an odd power of $r$ and are negative, which is why $u_6$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "u_6 = -32",
          "explanation": "So the $6$th term is $-32$, and the terms alternate in sign, growing in size with each step.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_6 = -32$; the terms alternate in sign (odd terms positive, even terms negative)."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "geometric sequences",
      "nth term rule",
      "common ratio"
    ],
    "questionText": "The $n$th term of a sequence is given by $u_n = 2 \\times 5^{\\,n-1}$. Write down the first three terms and state the common ratio.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the rule",
          "workingLatex": "u_n = 2 \\times 5^{\\,n-1}",
          "explanation": "To generate a term you substitute its position number $n$ into the rule. Doing this for $n = 1, 2, 3$ produces the first three terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first term",
          "workingLatex": "u_1 = 2 \\times 5^{\\,1-1} = 2 \\times 5^{0} = 2",
          "explanation": "With $n = 1$ the exponent is $0$, and anything to the power $0$ is $1$, so $u_1 = 2 \\times 1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the second term",
          "workingLatex": "u_2 = 2 \\times 5^{\\,2-1} = 2 \\times 5^{1} = 10",
          "explanation": "With $n = 2$ the exponent is $1$, so $u_2 = 2 \\times 5 = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the third term",
          "workingLatex": "u_3 = 2 \\times 5^{\\,3-1} = 2 \\times 5^{2} = 50",
          "explanation": "With $n = 3$ the exponent is $2$, so $u_3 = 2 \\times 25 = 50$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the common ratio",
          "workingLatex": "r = \\dfrac{u_2}{u_1} = \\dfrac{10}{2} = 5",
          "explanation": "The base of the power in the rule is the common ratio, since each extra step multiplies by another $5$. Dividing consecutive terms confirms $r = 5$ (and $50 \\div 10 = 5$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "2, \\; 10, \\; 50, \\quad r = 5",
          "explanation": "So the first three terms are $2$, $10$ and $50$, and the common ratio is $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "First three terms: $2$, $10$, $50$; common ratio $r = 5$."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "common ratio",
      "nth term"
    ],
    "questionText": "A geometric sequence has first term $a = 4$, and its $3$rd term is $36$. Given that the common ratio is positive, find $r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "The $n$th term is the first term multiplied by $r$ a total of $n-1$ times. We use this to write an equation for the term we know.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write an expression for the 3rd term",
          "workingLatex": "u_3 = a r^{3-1} = 4 r^{2}",
          "explanation": "The third term is reached by multiplying the first term by $r$ twice, so $u_3 = a r^{2}$, and with $a = 4$ this is $4 r^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the expression equal to the known term",
          "workingLatex": "4 r^{2} = 36",
          "explanation": "We are told the third term equals $36$, so the expression for it must equal $36$. This gives an equation in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the power of r",
          "workingLatex": "r^{2} = \\dfrac{36}{4} = 9",
          "explanation": "Dividing both sides by $4$ leaves $r^{2}$ on its own, which is easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "r = \\pm \\sqrt{9} = \\pm 3",
          "explanation": "Undoing a square by taking a square root gives two possibilities, one positive and one negative, because both $3^{2}$ and $(-3)^{2}$ equal $9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the correct root",
          "workingLatex": "r = 3",
          "explanation": "We are told the common ratio is positive, so we discard $-3$ and keep $r = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r = 3",
          "explanation": "So the common ratio is $3$. As a check, $4 \\times 3^{2} = 4 \\times 9 = 36$, matching the given third term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 3$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "nth term",
      "term number"
    ],
    "questionText": "The first three terms of a geometric sequence are $2$, $6$, $18$. Which term of the sequence is equal to $486$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a and r",
          "workingLatex": "a = 2, \\quad r = \\dfrac{6}{2} = 3",
          "explanation": "The first term is $a = 2$, and dividing consecutive terms gives the common ratio: $6 \\div 2 = 3$ (and $18 \\div 6 = 3$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "The $n$th term is $a r^{n-1}$. To find which term equals $486$ we set this expression equal to $486$ and solve for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation",
          "workingLatex": "2 \\times 3^{\\,n-1} = 486",
          "explanation": "Substituting $a = 2$ and $r = 3$ into the formula and setting it equal to the target value gives this equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the power",
          "workingLatex": "3^{\\,n-1} = \\dfrac{486}{2} = 243",
          "explanation": "Dividing both sides by $2$ leaves just the power of $3$ on the left, which we can compare against known powers of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write 243 as a power of 3",
          "workingLatex": "243 = 3^{5}",
          "explanation": "Since $3^{1} = 3$, $3^{2} = 9$, $3^{3} = 27$, $3^{4} = 81$, $3^{5} = 243$, we can rewrite $243$ exactly as $3^{5}$, avoiding the need for logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equate the exponents",
          "workingLatex": "n - 1 = 5",
          "explanation": "If two powers of the same base $3$ are equal, their exponents must be equal, so $n - 1 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for n",
          "workingLatex": "n = 6",
          "explanation": "Adding $1$ to both sides gives $n = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "n = 6",
          "explanation": "So $486$ is the $6$th term. As a check, $2 \\times 3^{5} = 2 \\times 243 = 486$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$486$ is the $6$th term ($n = 6$)."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "geometric sequences",
      "nth term",
      "common ratio",
      "simultaneous"
    ],
    "questionText": "In a geometric sequence, the $2$nd term is $6$ and the $5$th term is $48$. Find the first term $a$ and common ratio $r$, and hence write down an expression for the $n$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "Each term is the first term $a$ multiplied by the common ratio $r$ exactly $n-1$ times. We use this to write an equation for each given term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write an equation for the 2nd term",
          "workingLatex": "a r^{1} = 6",
          "explanation": "The second term is $a r^{2-1} = a r$, and we are told this equals $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write an equation for the 5th term",
          "workingLatex": "a r^{4} = 48",
          "explanation": "The fifth term is $a r^{5-1} = a r^{4}$, and we are told this equals $48$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the equations to eliminate a",
          "workingLatex": "\\dfrac{a r^{4}}{a r^{1}} = \\dfrac{48}{6}",
          "explanation": "Dividing the two equations cancels the unknown $a$ and leaves only $r$, because the same $a$ appears in both. This is the key trick for two-term problems.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the ratio",
          "workingLatex": "r^{3} = 8",
          "explanation": "On the left the powers of $r$ subtract: $r^{4} \\div r^{1} = r^{3}$. On the right $48 \\div 6 = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for r",
          "workingLatex": "r = \\sqrt[3]{8} = 2",
          "explanation": "Taking the cube root undoes the cube; since $2^{3} = 8$, the common ratio is $r = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back to find a",
          "workingLatex": "a \\times 2 = 6",
          "explanation": "Putting $r = 2$ into the simpler equation $a r = 6$ gives an equation for $a$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a = \\dfrac{6}{2} = 3",
          "explanation": "Dividing both sides by $2$ gives the first term $a = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the nth term",
          "workingLatex": "u_n = 3 \\times 2^{\\,n-1}",
          "explanation": "Substituting $a = 3$ and $r = 2$ into $u_n = a r^{n-1}$ gives the general expression for any term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check against a known term",
          "workingLatex": "u_5 = 3 \\times 2^{4} = 3 \\times 16 = 48",
          "explanation": "Testing the formula on the fifth term gives $48$, which matches the information given, confirming the values are correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "a = 3, \\quad r = 2, \\quad u_n = 3 \\times 2^{\\,n-1}",
          "explanation": "So the first term is $3$, the common ratio is $2$, and the $n$th term is $u_n = 3 \\times 2^{\\,n-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$, $r = 2$, and $u_n = 3 \\times 2^{\\,n-1}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "common ratio",
      "nth term"
    ],
    "questionText": "In a geometric sequence, the $3$rd term is $24$ and the $6$th term is $192$. Find the common ratio $r$ and the first term $a$, and hence find the $8$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "Each term is the first term $a$ multiplied by the common ratio $r$ exactly $n-1$ times. We write an equation for each known term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write an equation for the 3rd term",
          "workingLatex": "a r^{2} = 24",
          "explanation": "The third term is $a r^{3-1} = a r^{2}$, and we are told this equals $24$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write an equation for the 6th term",
          "workingLatex": "a r^{5} = 192",
          "explanation": "The sixth term is $a r^{6-1} = a r^{5}$, and we are told this equals $192$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the equations to eliminate a",
          "workingLatex": "\\dfrac{a r^{5}}{a r^{2}} = \\dfrac{192}{24}",
          "explanation": "Dividing the equations cancels the common unknown $a$, leaving an equation in $r$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the ratio",
          "workingLatex": "r^{3} = 8",
          "explanation": "The powers of $r$ subtract: $r^{5} \\div r^{2} = r^{3}$, and $192 \\div 24 = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for r",
          "workingLatex": "r = \\sqrt[3]{8} = 2",
          "explanation": "Taking the cube root undoes the cube; since $2^{3} = 8$, the common ratio is $r = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back to find a",
          "workingLatex": "a \\times 2^{2} = 24 \\;\\Rightarrow\\; 4a = 24",
          "explanation": "Putting $r = 2$ into $a r^{2} = 24$ gives $4a = 24$, an equation in $a$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a = \\dfrac{24}{4} = 6",
          "explanation": "Dividing both sides by $4$ gives the first term $a = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the 8th term",
          "workingLatex": "u_8 = a r^{8-1} = 6 \\times 2^{7}",
          "explanation": "Now that $a$ and $r$ are known, use the formula with $n = 8$; the exponent is $n-1 = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the power",
          "workingLatex": "2^{7} = 128",
          "explanation": "Work out the power first: doubling seven times from $1$ gives $2^{7} = 128$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Complete the multiplication",
          "workingLatex": "u_8 = 6 \\times 128 = 768",
          "explanation": "Multiplying $6 \\times 128$ gives the value of the eighth term.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "a = 6, \\quad r = 2, \\quad u_8 = 768",
          "explanation": "So the first term is $6$, the common ratio is $2$, and the $8$th term is $768$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 6$, $r = 2$, and $u_8 = 768$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "nth term"
    ],
    "questionText": "A geometric sequence has first term $a = 7$ and common ratio $r = 2$. Find the $8$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "In a geometric sequence you reach any term by starting at the first term $a$ and multiplying by the common ratio $r$ repeatedly. To land on the $n$th term you multiply by $r$ exactly $n-1$ times, which is what $a r^{n-1}$ records.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 7, \\quad r = 2, \\quad n = 8",
          "explanation": "We are told the first term and the common ratio, and we want the $8$th term, so $n = 8$. Writing the values down first keeps the substitution tidy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "u_8 = 7 \\times 2^{8-1}",
          "explanation": "Replacing $a$, $r$ and $n$ turns the general rule into a single sum. The exponent is $n-1$ because the first term is already in place and needs no multiplying.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the exponent",
          "workingLatex": "u_8 = 7 \\times 2^{7}",
          "explanation": "There are $8 - 1 = 7$ steps of doubling from the first term to the eighth term, so the power is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "u_8 = 7 \\times 128",
          "explanation": "Powers are worked out before multiplication, so first find $2^{7} = 128$ (doubling seven times from $1$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete the multiplication",
          "workingLatex": "u_8 = 896",
          "explanation": "Multiplying $7 \\times 128$ gives the value of the eighth term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "u_8 = 896",
          "explanation": "So the $8$th term of the sequence is $896$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_8 = 896$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "common ratio",
      "nth term"
    ],
    "questionText": "A geometric sequence begins $81, \\ 27, \\ 9, \\ \\ldots$. State the common ratio $r$ and find the $6$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the common ratio",
          "workingLatex": "r = \\dfrac{u_2}{u_1} = \\dfrac{27}{81} = \\dfrac{1}{3}",
          "explanation": "The common ratio is what you multiply one term by to get the next, so dividing any term by the one before it recovers $r$. Here $27 \\div 81 = \\dfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the ratio is consistent",
          "workingLatex": "\\dfrac{u_3}{u_2} = \\dfrac{9}{27} = \\dfrac{1}{3}",
          "explanation": "A sequence is only geometric if the same ratio works everywhere. Checking the next pair gives $\\dfrac{1}{3}$ again, confirming $r = \\dfrac{1}{3}$. Because $r$ is positive but less than $1$, the terms shrink, which matches a decreasing sequence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "To reach the $6$th term we again use the rule that every term is the first term multiplied by $r$ a number of times.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List the known values",
          "workingLatex": "a = 81, \\quad r = \\dfrac{1}{3}, \\quad n = 6",
          "explanation": "The first term is $81$ and we want the $6$th term, so $n = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the formula",
          "workingLatex": "u_6 = 81 \\times \\left(\\dfrac{1}{3}\\right)^{5}",
          "explanation": "The exponent is $6 - 1 = 5$: we divide by $3$ five times as we move from the first term to the sixth.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power",
          "workingLatex": "\\left(\\dfrac{1}{3}\\right)^{5} = \\dfrac{1}{243}",
          "explanation": "Raising a fraction to a power raises top and bottom separately, so $\\dfrac{1^5}{3^5} = \\dfrac{1}{243}$ since $3^5 = 243$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Complete the multiplication",
          "workingLatex": "u_6 = \\dfrac{81}{243} = \\dfrac{1}{3}",
          "explanation": "Multiplying gives $\\dfrac{81}{243}$, and dividing top and bottom by $81$ simplifies it to $\\dfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "r = \\dfrac{1}{3}, \\quad u_6 = \\dfrac{1}{3}",
          "explanation": "So the common ratio is $\\dfrac{1}{3}$ and the $6$th term is $\\dfrac{1}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = \\dfrac{1}{3}$, $\\; u_6 = \\dfrac{1}{3}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "common ratio"
    ],
    "questionText": "A geometric sequence has first term $a = 2$ and $4$th term $u_4 = 54$. Find the positive common ratio $r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "The $4$th term is the first term multiplied by $r$ three times, so the general rule $a r^{n-1}$ connects what we know ($a$ and $u_4$) to what we want ($r$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write an equation for the 4th term",
          "workingLatex": "u_4 = a r^{3} = 2 r^{3} = 54",
          "explanation": "Putting $n = 4$ gives an exponent of $4 - 1 = 3$. Substituting $a = 2$ and $u_4 = 54$ turns the rule into an equation in $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the power of r",
          "workingLatex": "r^{3} = \\dfrac{54}{2} = 27",
          "explanation": "Dividing both sides by $2$ frees $r^{3}$, leaving a clean number to take the cube root of.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the cube root",
          "workingLatex": "r = \\sqrt[3]{27} = 3",
          "explanation": "The cube root undoes the cube. Since $3^3 = 27$, the cube root of $27$ is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the required root",
          "workingLatex": "r = 3 \\quad (r > 0)",
          "explanation": "A cube root of a positive number has a single real value, and it is positive, which matches the requirement for a positive ratio.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify with the sequence",
          "workingLatex": "2, \\ 6, \\ 18, \\ 54 \\ \\checkmark",
          "explanation": "Multiplying by $3$ each time gives $2, 6, 18, 54$, so the $4$th term really is $54$; this confirms $r = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r = 3",
          "explanation": "So the positive common ratio is $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 3$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "nth term"
    ],
    "questionText": "The $n$th term of a geometric sequence is given by $u_n = 2 \\times 5^{\\,n-1}$. Find the $4$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the structure of the rule",
          "workingLatex": "u_n = a r^{n-1} \\ \\Rightarrow \\ a = 2, \\ r = 5",
          "explanation": "The rule is already in the standard form $a r^{n-1}$, so the number out front is the first term $a = 2$ and the base of the power is the common ratio $r = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the required term number",
          "workingLatex": "u_4 = 2 \\times 5^{\\,4-1}",
          "explanation": "For the $4$th term we simply replace $n$ with $4$; there is no separate formula to recall because the rule is given.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the exponent",
          "workingLatex": "u_4 = 2 \\times 5^{3}",
          "explanation": "The exponent becomes $4 - 1 = 3$, meaning we multiply the first term by $5$ three times to reach the fourth term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "5^{3} = 125",
          "explanation": "Work out the power before multiplying: $5 \\times 5 \\times 5 = 125$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the multiplication",
          "workingLatex": "u_4 = 2 \\times 125 = 250",
          "explanation": "Finally multiply by the front coefficient $2$ to get the value of the fourth term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "u_4 = 250",
          "explanation": "So the $4$th term of the sequence is $250$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_4 = 250$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "which term",
      "powers"
    ],
    "questionText": "A geometric sequence begins $3, \\ 6, \\ 12, \\ \\ldots$. Which term of the sequence is equal to $384$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term and common ratio",
          "workingLatex": "a = 3, \\quad r = \\dfrac{6}{3} = 2",
          "explanation": "Dividing the second term by the first gives the ratio: $6 \\div 3 = 2$, and the first term is $3$. Each term is double the one before.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the nth term",
          "workingLatex": "u_n = 3 \\times 2^{\\,n-1}",
          "explanation": "Substituting $a = 3$ and $r = 2$ into $a r^{n-1}$ gives a formula for any term in terms of its position $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the nth term equal to the target",
          "workingLatex": "3 \\times 2^{\\,n-1} = 384",
          "explanation": "Asking which term equals $384$ means finding the value of $n$ that makes the formula give $384$, so we set them equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by the first term",
          "workingLatex": "2^{\\,n-1} = \\dfrac{384}{3} = 128",
          "explanation": "Dividing both sides by $3$ isolates the power of $2$, leaving a number we can recognise as a power of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the target as a power of 2",
          "workingLatex": "128 = 2^{7}",
          "explanation": "Doubling from $1$ gives $2, 4, 8, 16, 32, 64, 128$, which is seven doublings, so $128 = 2^{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equate the exponents",
          "workingLatex": "2^{\\,n-1} = 2^{7} \\ \\Rightarrow \\ n - 1 = 7",
          "explanation": "If two powers with the same base are equal, their exponents must match, so $n - 1 = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for n",
          "workingLatex": "n = 8",
          "explanation": "Adding $1$ to both sides gives the position of the term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "u_8 = 384",
          "explanation": "So $384$ is the $8$th term of the sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$384$ is the $8$th term ($n = 8$)"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "geometric sequences",
      "oscillating",
      "nth term"
    ],
    "questionText": "A geometric sequence has first term $a = 5$ and common ratio $r = -2$. State, with a reason, whether the sequence is increasing, decreasing or oscillating, and find the $5$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the sign of the common ratio",
          "workingLatex": "r = -2 < 0",
          "explanation": "The behaviour of a geometric sequence is controlled by $r$. The key feature here is that $r$ is negative, so we focus on what a negative ratio does.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the effect of a negative ratio",
          "workingLatex": "5, \\ -10, \\ 20, \\ -40, \\ \\ldots",
          "explanation": "Multiplying by a negative number flips the sign each time, so the terms swing positive, negative, positive, negative. A sequence whose terms keep changing sign like this neither steadily rises nor steadily falls, so it is oscillating.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "To find a particular term we use the standard rule that every term is the first term multiplied by $r$ a fixed number of times.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the 5th term",
          "workingLatex": "u_5 = 5 \\times (-2)^{5-1}",
          "explanation": "For the $5$th term we set $n = 5$, giving an exponent of $5 - 1 = 4$. Keeping the ratio in brackets, $(-2)$, makes sure the sign is handled correctly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "(-2)^{4} = 16",
          "explanation": "An even power of a negative number is positive, because the minus signs pair up: $(-2)^4 = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete the multiplication",
          "workingLatex": "u_5 = 5 \\times 16 = 80",
          "explanation": "Multiplying by the first term $5$ gives the value of the fifth term, which is positive as expected for an even-numbered power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r < 0 \\ \\Rightarrow \\ \\text{oscillating}, \\quad u_5 = 80",
          "explanation": "Because $r = -2 < 0$ the terms alternate in sign, so the sequence oscillates; the $5$th term is $u_5 = 80$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sequence oscillates because $r = -2 < 0$ makes the terms alternate in sign; $u_5 = 80$."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "geometric sequences",
      "common ratio",
      "nth term"
    ],
    "questionText": "In a geometric sequence the $3$rd term is $18$ and the $6$th term is $486$. Find the first term $a$ and common ratio $r$, and hence write down an expression for the $n$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each given term using the formula",
          "workingLatex": "u_3 = a r^{2} = 18, \\qquad u_6 = a r^{5} = 486",
          "explanation": "Both terms come from the same rule $a r^{n-1}$: the $3$rd term uses exponent $2$ and the $6$th term uses exponent $5$. This gives two equations linking the two unknowns $a$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the equations to eliminate a",
          "workingLatex": "\\dfrac{u_6}{u_3} = \\dfrac{a r^{5}}{a r^{2}} = r^{3}",
          "explanation": "Dividing one equation by the other cancels the shared factor $a$, and the powers subtract ($5 - 2 = 3$), leaving a single equation in $r$. This is the standard trick when two non-adjacent terms are known.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the numerical ratio",
          "workingLatex": "r^{3} = \\dfrac{486}{18} = 27",
          "explanation": "The left side is $r^3$, and the right side is just the two given values divided: $486 \\div 18 = 27$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the cube root",
          "workingLatex": "r = \\sqrt[3]{27} = 3",
          "explanation": "The cube root undoes the cube; since $3^3 = 27$, we get $r = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute r back to find a",
          "workingLatex": "a (3)^{2} = 18",
          "explanation": "Now that $r$ is known, put it into the simpler equation $a r^2 = 18$ to solve for the first term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "9a = 18",
          "explanation": "Squaring the ratio gives $3^2 = 9$, so the equation becomes $9a = 18$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for a",
          "workingLatex": "a = 2",
          "explanation": "Dividing both sides by $9$ gives the first term $a = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the nth term",
          "workingLatex": "u_n = 2 \\times 3^{\\,n-1}",
          "explanation": "Substituting $a = 2$ and $r = 3$ into $a r^{n-1}$ gives a formula for any term of the sequence.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check against the given terms",
          "workingLatex": "u_3 = 2 \\times 3^{2} = 18, \\quad u_6 = 2 \\times 3^{5} = 486 \\ \\checkmark",
          "explanation": "Testing $n = 3$ and $n = 6$ reproduces $18$ and $486$, confirming the values of $a$ and $r$ are correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "a = 2, \\ r = 3, \\quad u_n = 2 \\times 3^{\\,n-1}",
          "explanation": "So the first term is $2$, the common ratio is $3$, and the $n$th term is $u_n = 2 \\times 3^{\\,n-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2$, $r = 3$, $\\; u_n = 2 \\times 3^{\\,n-1}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "geometric mean",
      "common ratio"
    ],
    "questionText": "The numbers $4, \\ x, \\ 9$ are three consecutive terms of a geometric sequence, where $x > 0$. Find the value of $x$ and the common ratio $r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the constant-ratio property",
          "workingLatex": "\\dfrac{x}{4} = \\dfrac{9}{x}",
          "explanation": "In a geometric sequence the ratio between consecutive terms is constant, so the ratio from the first to the middle term equals the ratio from the middle to the last term. Setting these equal is the key relationship.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cross-multiply to form the geometric-mean equation",
          "workingLatex": "x^{2} = 4 \\times 9",
          "explanation": "Cross-multiplying clears the fractions and gives $x^2$ equal to the product of the outer two terms. This is the geometric-mean property: the middle term squared equals the product of its neighbours.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the product",
          "workingLatex": "x^{2} = 36",
          "explanation": "Multiplying the neighbours gives $4 \\times 9 = 36$, so $x^2 = 36$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "x = \\pm 6",
          "explanation": "Undoing the square gives two possibilities, $+6$ and $-6$, because both square to $36$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the given condition",
          "workingLatex": "x > 0 \\ \\Rightarrow \\ x = 6",
          "explanation": "We are told $x > 0$, so we keep the positive root and discard $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the common ratio",
          "workingLatex": "r = \\dfrac{x}{4} = \\dfrac{6}{4}",
          "explanation": "The common ratio is the middle term divided by the first term, using the value of $x$ just found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the ratio",
          "workingLatex": "r = \\dfrac{3}{2}",
          "explanation": "Dividing top and bottom of $\\dfrac{6}{4}$ by $2$ gives the simplified ratio $\\dfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with the third term",
          "workingLatex": "6 \\times \\dfrac{3}{2} = 9 \\ \\checkmark",
          "explanation": "Multiplying the middle term by the ratio should return the last term $9$, and it does, confirming the values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "x = 6, \\quad r = \\dfrac{3}{2}",
          "explanation": "So the missing term is $x = 6$ and the common ratio is $\\dfrac{3}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 6$, $\\; r = \\dfrac{3}{2}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric mean",
      "geometric sequences"
    ],
    "questionText": "Find the geometric mean of the two positive numbers $6$ and $24$, and explain the relationship it satisfies.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the geometric mean",
          "workingLatex": "6, \\ g, \\ 24",
          "explanation": "The geometric mean $g$ of two numbers is the value that sits between them so that all three form a geometric sequence. Picturing $6, g, 24$ makes the required relationship visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the constant-ratio condition",
          "workingLatex": "\\dfrac{g}{6} = \\dfrac{24}{g}",
          "explanation": "For a geometric sequence the ratio from term to term is constant, so the ratio $g$ to $6$ must equal the ratio $24$ to $g$. This is what forces $g$ to be the geometric mean rather than the ordinary average.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cross-multiply",
          "workingLatex": "g^{2} = 6 \\times 24",
          "explanation": "Cross-multiplying removes the fractions and shows the defining relationship of a geometric mean: its square equals the product of the two numbers, $g^2 = pq$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the geometric-mean formula",
          "workingLatex": "g = \\sqrt{6 \\times 24}",
          "explanation": "Taking the square root gives $g = \\sqrt{pq}$, the standard formula for the geometric mean of two positive numbers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the product",
          "workingLatex": "6 \\times 24 = 144",
          "explanation": "Multiplying the two numbers gives $144$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the squared value",
          "workingLatex": "g^{2} = 144",
          "explanation": "So the square of the geometric mean is $144$, a perfect square, which will give a whole-number answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the positive square root",
          "workingLatex": "g = \\sqrt{144} = 12",
          "explanation": "The geometric mean of positive numbers is taken to be positive, and $\\sqrt{144} = 12$ because $12^2 = 144$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the ratios agree",
          "workingLatex": "\\dfrac{12}{6} = 2, \\quad \\dfrac{24}{12} = 2 \\ \\checkmark",
          "explanation": "The sequence $6, 12, 24$ has the same ratio $2$ at each step, confirming $12$ really is the geometric mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "g = 12",
          "explanation": "So the geometric mean is $12$, satisfying $g^2 = 6 \\times 24$, i.e. it is the value whose square equals the product of the two numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g = 12$ (since $g^2 = 6 \\times 24 = 144$)"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "logarithms",
      "which term"
    ],
    "questionText": "A geometric sequence has first term $a = 5$ and common ratio $r = 2$. Using logarithms, find the first term of the sequence that exceeds $1000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the nth term",
          "workingLatex": "u_n = 5 \\times 2^{\\,n-1}",
          "explanation": "Substituting $a = 5$ and $r = 2$ into $a r^{n-1}$ gives the value of the $n$th term, which is what we need to compare with $1000$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the inequality",
          "workingLatex": "5 \\times 2^{\\,n-1} > 1000",
          "explanation": "Wanting the term to exceed $1000$ means the $n$th term must be greater than $1000$, so we write that as an inequality and solve for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the first term",
          "workingLatex": "2^{\\,n-1} > 200",
          "explanation": "Dividing both sides by the positive number $5$ isolates the power of $2$ and does not change the inequality direction ($1000 \\div 5 = 200$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\log\\left(2^{\\,n-1}\\right) > \\log 200",
          "explanation": "The unknown is stuck in an exponent, and logarithms bring exponents down. Since $\\log$ is an increasing function, applying it to both sides keeps the inequality pointing the same way.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the power law of logs",
          "workingLatex": "(n-1)\\log 2 > \\log 200",
          "explanation": "The law $\\log(a^b) = b\\log a$ lets us bring the exponent $n-1$ down as a multiplier, turning the problem into a linear inequality in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by log 2",
          "workingLatex": "n - 1 > \\dfrac{\\log 200}{\\log 2}",
          "explanation": "Because $\\log 2 > 0$, dividing by it keeps the inequality direction unchanged. This isolates $n - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the logarithms",
          "workingLatex": "n - 1 > \\dfrac{2.3010}{0.3010} = 7.644\\ldots",
          "explanation": "Using $\\log 200 \\approx 2.3010$ and $\\log 2 \\approx 0.3010$, the right-hand side is about $7.644$, so $n - 1$ must be bigger than this.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round up to the next integer",
          "workingLatex": "n - 1 \\geq 8 \\ \\Rightarrow \\ n = 9",
          "explanation": "Since $n$ counts term positions it must be a whole number, and $n - 1$ must be strictly greater than $7.644$, so the smallest allowed value is $n - 1 = 8$, giving $n = 9$. We round up, not to the nearest integer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the boundary",
          "workingLatex": "u_8 = 5 \\times 2^{7} = 640, \\quad u_9 = 5 \\times 2^{8} = 1280",
          "explanation": "Checking either side confirms the cutoff: the $8$th term is $640$ (not yet over $1000$) while the $9$th term is $1280$ (the first to exceed $1000$). So the answer is the $9$th term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "n = 9, \\quad u_9 = 1280",
          "explanation": "So the first term of the sequence to exceed $1000$ is the $9$th term, with value $1280$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $9$th term is the first to exceed $1000$ ($u_9 = 1280$)."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sum of n terms",
      "finite sum"
    ],
    "questionText": "A geometric series has first term $a = 2$ and common ratio $r = 3$. Find the sum of the first $5$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1} \\quad \\text{or} \\quad S_n = \\dfrac{a(1 - r^n)}{1 - r}",
          "explanation": "Adding the first few terms of a geometric series one by one works, but the sum formula does it in a single line. The two versions shown are equal; we pick whichever keeps the arithmetic tidiest for the given $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 2, \\quad r = 3, \\quad n = 5",
          "explanation": "Writing the three pieces of information down first — the first term, the common ratio and how many terms — makes the substitution clean and reduces slips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the convenient form",
          "workingLatex": "S_5 = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "Because $r = 3 > 1$, the version $\\dfrac{a(r^n - 1)}{r - 1}$ keeps both the top and the bottom positive, so there are no awkward negative signs to track.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "S_5 = \\dfrac{2(3^5 - 1)}{3 - 1}",
          "explanation": "Replacing $a$, $r$ and $n$ turns the general rule into one concrete calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "3^5 = 243",
          "explanation": "Powers are worked out before anything else: $3^5$ means multiplying $3$ by itself five times, which gives $243$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "S_5 = \\dfrac{2(243 - 1)}{2} = \\dfrac{2 \\times 242}{2}",
          "explanation": "The bracket becomes $243 - 1 = 242$ and the denominator is $3 - 1 = 2$, so the factor of $2$ on top cancels the $2$ underneath.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "S_5 = 242",
          "explanation": "So the first five terms of the series add up to $242$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_5 = 242$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sum of n terms",
      "powers of 2"
    ],
    "questionText": "Find the sum of the first $6$ terms of the geometric series $1 + 2 + 4 + 8 + \\cdots$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term and common ratio",
          "workingLatex": "a = 1, \\quad r = \\dfrac{2}{1} = 2",
          "explanation": "Each term is found by multiplying the previous one by the same number. Dividing any term by the one before it, $\\dfrac{2}{1} = 2$, confirms the common ratio is $2$, and the first term is clearly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "The sum formula lets us add many terms at once. Since $r = 2 > 1$, the form $\\dfrac{a(r^n - 1)}{r - 1}$ keeps every quantity positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the number of terms",
          "workingLatex": "n = 6",
          "explanation": "We are asked for the first six terms, so $n = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "S_6 = \\dfrac{1(2^6 - 1)}{2 - 1}",
          "explanation": "Substituting $a = 1$, $r = 2$ and $n = 6$ gives a single expression to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "2^6 = 64",
          "explanation": "$2^6$ means doubling six times from $1$: $2, 4, 8, 16, 32, 64$, so $2^6 = 64$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "S_6 = \\dfrac{64 - 1}{1} = 63",
          "explanation": "The denominator is $2 - 1 = 1$, so the fraction is simply $64 - 1 = 63$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "S_6 = 63",
          "explanation": "So the first six terms of the series add up to $63$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_6 = 63$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric series",
      "finite sum",
      "fractional ratio"
    ],
    "questionText": "A geometric series has first term $a = 16$ and common ratio $r = \\dfrac{1}{2}$. Find the sum of the first $5$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(1 - r^n)}{1 - r}",
          "explanation": "For a geometric sum with $\\left| r \\right| < 1$, the form $\\dfrac{a(1 - r^n)}{1 - r}$ is neatest, because $1 - r$ is a small positive number rather than a negative one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 16, \\quad r = \\dfrac{1}{2}, \\quad n = 5",
          "explanation": "Note the values before substituting: first term $16$, ratio $\\dfrac{1}{2}$, and $5$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "S_5 = \\dfrac{16\\left(1 - \\left(\\tfrac{1}{2}\\right)^5\\right)}{1 - \\tfrac{1}{2}}",
          "explanation": "Substituting each quantity into the chosen formula sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "\\left(\\dfrac{1}{2}\\right)^5 = \\dfrac{1}{32}",
          "explanation": "Raising a fraction to a power raises the top and bottom separately: $\\left(\\dfrac{1}{2}\\right)^5 = \\dfrac{1^5}{2^5} = \\dfrac{1}{32}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator bracket",
          "workingLatex": "S_5 = \\dfrac{16\\left(1 - \\tfrac{1}{32}\\right)}{\\tfrac{1}{2}} = \\dfrac{16 \\times \\tfrac{31}{32}}{\\tfrac{1}{2}}",
          "explanation": "The bracket becomes $1 - \\dfrac{1}{32} = \\dfrac{31}{32}$, so the top of the big fraction is $16 \\times \\dfrac{31}{32}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out the numerator",
          "workingLatex": "16 \\times \\dfrac{31}{32} = \\dfrac{31}{2}",
          "explanation": "Multiplying, $16 \\times \\dfrac{31}{32} = \\dfrac{16 \\times 31}{32} = \\dfrac{31}{2}$, since $\\dfrac{16}{32} = \\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the denominator",
          "workingLatex": "S_5 = \\dfrac{\\tfrac{31}{2}}{\\tfrac{1}{2}} = 31",
          "explanation": "Dividing by $\\dfrac{1}{2}$ is the same as multiplying by $2$, so $\\dfrac{31}{2} \\times 2 = 31$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "S_5 = 31",
          "explanation": "So the first five terms of the series add up to $31$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_5 = 31$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sum of n terms",
      "finite sum"
    ],
    "questionText": "A geometric series has first term $a = 3$, common ratio $r = 4$ and $4$ terms. Find the sum of the series.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1} \\quad \\text{or} \\quad S_n = \\dfrac{a(1 - r^n)}{1 - r}",
          "explanation": "Both versions add up a geometric series in one line and give the same result; we choose whichever keeps the numbers tidiest.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 3, \\quad r = 4, \\quad n = 4",
          "explanation": "Recording the given information first makes the substitution clean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the convenient form",
          "workingLatex": "S_4 = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "Since $r = 4 > 1$, the version $\\dfrac{a(r^n - 1)}{r - 1}$ keeps both the numerator and denominator positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "S_4 = \\dfrac{3(4^4 - 1)}{4 - 1}",
          "explanation": "Replacing $a$, $r$ and $n$ turns the formula into a single calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "4^4 = 256",
          "explanation": "$4^4 = 4 \\times 4 \\times 4 \\times 4 = 256$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "S_4 = \\dfrac{3(256 - 1)}{3} = \\dfrac{3 \\times 255}{3}",
          "explanation": "The bracket becomes $255$, and the factor of $3$ on top cancels the $3$ in the denominator ($4 - 1 = 3$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "S_4 = 255",
          "explanation": "So the four terms of the series add up to $255$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_4 = 255$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric series",
      "nth term",
      "sum of n terms"
    ],
    "questionText": "A geometric series has first term $3$ and common ratio $2$. Its last term is $96$. Find the number of terms in the series, and hence find the sum of the series.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "Every term of a geometric sequence is the first term multiplied by the ratio a fixed number of times; reaching the $n$th term takes $n-1$ multiplications, which is why the formula is $a r^{n-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the nth term equal to the last term",
          "workingLatex": "a r^{n-1} = 96",
          "explanation": "The last term is just the $n$th term for the unknown number of terms $n$, so we set the formula equal to $96$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "3 \\times 2^{n-1} = 96",
          "explanation": "Putting in $a = 3$ and $r = 2$ leaves $n$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the power",
          "workingLatex": "2^{n-1} = 32",
          "explanation": "Dividing both sides by $3$ isolates the power of $2$, since $96 \\div 3 = 32$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write 32 as a power of 2",
          "workingLatex": "2^{n-1} = 2^5",
          "explanation": "Recognising that $32 = 2^5$ lets us compare two powers of the same base.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equate the exponents",
          "workingLatex": "n - 1 = 5 \\implies n = 6",
          "explanation": "With equal bases the exponents must match, so $n - 1 = 5$ and therefore $n = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "Now that we know there are $6$ terms, we can add them. As $r = 2 > 1$, the form $\\dfrac{a(r^n - 1)}{r - 1}$ is tidiest.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "S_6 = \\dfrac{3(2^6 - 1)}{2 - 1}",
          "explanation": "Substituting $a = 3$, $r = 2$ and $n = 6$ gives a single calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the power",
          "workingLatex": "2^6 = 64",
          "explanation": "$2^6 = 64$ by doubling six times from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the fraction",
          "workingLatex": "S_6 = \\dfrac{3(64 - 1)}{1} = 3 \\times 63 = 189",
          "explanation": "The denominator is $2 - 1 = 1$, so the sum is $3 \\times 63 = 189$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answers",
          "workingLatex": "n = 6, \\quad S_6 = 189",
          "explanation": "So the series has $6$ terms and they add up to $189$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 6, \\ S_6 = 189$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric series",
      "common ratio",
      "sum of n terms"
    ],
    "questionText": "In a geometric series, the second term is $6$ and the fourth term is $54$. Given that the common ratio is positive, find the first term and the common ratio, and hence find the sum of the first $8$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express the given terms using the nth term formula",
          "workingLatex": "u_2 = a r = 6, \\quad u_4 = a r^3 = 54",
          "explanation": "The second term is $a$ multiplied by $r$ once, and the fourth term is $a$ multiplied by $r$ three times; writing both gives two equations in $a$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the equations to eliminate a",
          "workingLatex": "\\dfrac{a r^3}{a r} = \\dfrac{54}{6}",
          "explanation": "Dividing the fourth-term equation by the second-term equation cancels the unknown $a$, leaving an equation in $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to find r squared",
          "workingLatex": "r^2 = 9",
          "explanation": "On the left the $a$'s cancel and $\\dfrac{r^3}{r} = r^2$; on the right $\\dfrac{54}{6} = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the positive root",
          "workingLatex": "r = 3",
          "explanation": "Since the ratio is stated to be positive, we take $r = \\sqrt{9} = 3$ rather than $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the first term",
          "workingLatex": "a \\times 3 = 6 \\implies a = 2",
          "explanation": "Substituting $r = 3$ into $a r = 6$ gives $a = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "With $a$ and $r$ known we can add eight terms. As $r = 3 > 1$, the form $\\dfrac{a(r^n - 1)}{r - 1}$ keeps the numbers positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "S_8 = \\dfrac{2(3^8 - 1)}{3 - 1}",
          "explanation": "Substituting $a = 2$, $r = 3$ and $n = 8$ sets up the sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the power",
          "workingLatex": "3^8 = 6561",
          "explanation": "Build up in stages: $3^4 = 81$, then $81^2 = 6561$, so $3^8 = 6561$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the fraction",
          "workingLatex": "S_8 = \\dfrac{2(6561 - 1)}{2} = \\dfrac{2 \\times 6560}{2}",
          "explanation": "The bracket becomes $6560$, and the factor of $2$ on top cancels the denominator $3 - 1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Complete the calculation",
          "workingLatex": "S_8 = 6560",
          "explanation": "After cancelling, the sum of the first eight terms is $6560$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answers",
          "workingLatex": "a = 2, \\quad r = 3, \\quad S_8 = 6560",
          "explanation": "So the first term is $2$, the common ratio is $3$, and the first eight terms add up to $6560$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2, \\ r = 3, \\ S_8 = 6560$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric series",
      "negative ratio",
      "sum of n terms"
    ],
    "questionText": "A geometric series has first term $3$ and common ratio $-2$. Find the sum of the first $10$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(1 - r^n)}{1 - r}",
          "explanation": "The sum formula works for any common ratio, including negative ones. With $r = -2$ the form $\\dfrac{a(1 - r^n)}{1 - r}$ keeps the denominator $1 - r$ positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 3, \\quad r = -2, \\quad n = 10",
          "explanation": "Note the values before substituting: first term $3$, ratio $-2$, and $10$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the effect of the negative ratio",
          "workingLatex": "3, \\ -6, \\ 12, \\ -24, \\ 48, \\ \\ldots",
          "explanation": "Because $r$ is negative, the terms alternate in sign, swinging positive and negative as they grow in size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "S_{10} = \\dfrac{3\\left(1 - (-2)^{10}\\right)}{1 - (-2)}",
          "explanation": "Substitute carefully, keeping the negative ratio inside its own brackets so the power applies to the whole of $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Handle the sign of the power",
          "workingLatex": "(-2)^{10} = 2^{10} = 1024",
          "explanation": "An even power of a negative number is positive, so $(-2)^{10}$ equals $2^{10} = 1024$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "1 - 1024 = -1023",
          "explanation": "The top bracket becomes $1 - 1024 = -1023$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the denominator",
          "workingLatex": "1 - (-2) = 1 + 2 = 3",
          "explanation": "Subtracting a negative is the same as adding, so $1 - (-2) = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine into a single fraction",
          "workingLatex": "S_{10} = \\dfrac{3 \\times (-1023)}{3}",
          "explanation": "Putting the simplified numerator and denominator together gives a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel and evaluate",
          "workingLatex": "S_{10} = -1023",
          "explanation": "The factor of $3$ on top cancels the $3$ underneath, leaving $-1023$. The total is negative because the largest terms in the series are the negative ones.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "S_{10} = -1023",
          "explanation": "So the sum of the first ten terms is $-1023$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{10} = -1023$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric series",
      "solve for n",
      "powers"
    ],
    "questionText": "The sum of the first $n$ terms of a geometric series is $5115$. The first term is $5$ and the common ratio is $2$. Find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "The sum of the first $n$ terms is given by this formula; with $r = 2 > 1$ the $\\dfrac{a(r^n - 1)}{r - 1}$ version keeps the numbers positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values",
          "workingLatex": "5115 = \\dfrac{5(2^n - 1)}{2 - 1}",
          "explanation": "We know the sum, the first term and the ratio, so substituting them leaves $n$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the denominator",
          "workingLatex": "5115 = 5(2^n - 1)",
          "explanation": "The denominator $2 - 1 = 1$ disappears, simplifying the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by 5",
          "workingLatex": "2^n - 1 = 1023",
          "explanation": "Dividing both sides by $5$ isolates the power, since $5115 \\div 5 = 1023$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the power",
          "workingLatex": "2^n = 1024",
          "explanation": "Adding $1$ to both sides leaves the power of $2$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write 1024 as a power of 2",
          "workingLatex": "2^n = 2^{10}",
          "explanation": "Recognising that $1024 = 2^{10}$ rewrites the right-hand side as a power of the same base.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the exponents",
          "workingLatex": "n = 10",
          "explanation": "Equal bases force equal exponents, so $n = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the result",
          "workingLatex": "5(2^{10} - 1) = 5 \\times 1023 = 5115 \\ \\checkmark",
          "explanation": "Substituting $n = 10$ back gives $5115$, which matches the given sum, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "n = 10",
          "explanation": "So the series has $10$ terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 10$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric series",
      "solve for n",
      "powers"
    ],
    "questionText": "A geometric series has first term $2$ and common ratio $3$. The sum of the first $n$ terms is $2186$. Find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "This formula links the sum, first term, ratio and number of terms. With $r = 3 > 1$ we use $\\dfrac{a(r^n - 1)}{r - 1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values",
          "workingLatex": "2186 = \\dfrac{2(3^n - 1)}{3 - 1}",
          "explanation": "Putting in the sum, first term and ratio leaves $n$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the denominator",
          "workingLatex": "2186 = \\dfrac{2(3^n - 1)}{2} = 3^n - 1",
          "explanation": "The factor of $2$ on top cancels the $2$ in the denominator ($3 - 1 = 2$), leaving a much simpler equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the power",
          "workingLatex": "3^n = 2187",
          "explanation": "Adding $1$ to both sides leaves the power of $3$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find which power of 3 equals 2187",
          "workingLatex": "3^5 = 243, \\quad 3^6 = 729, \\quad 3^7 = 2187",
          "explanation": "Working up the powers of $3$, we reach $2187$ at $3^7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Match the powers",
          "workingLatex": "3^n = 3^7",
          "explanation": "Both sides are now powers of the same base $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the exponents",
          "workingLatex": "n = 7",
          "explanation": "With equal bases the exponents must be equal, so $n = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the result",
          "workingLatex": "S_7 = 3^7 - 1 = 2187 - 1 = 2186 \\ \\checkmark",
          "explanation": "Substituting $n = 7$ back gives $2186$, which matches the given sum, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "n = 7",
          "explanation": "So the series has $7$ terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 7$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric series",
      "modelling",
      "sum of n terms"
    ],
    "questionText": "As part of a savings challenge, Maria saves $\\pounds 2$ in the first month, and each month she saves double the amount she saved the previous month. Find the total amount she has saved after $10$ months.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the structure as a geometric series",
          "workingLatex": "\\pounds 2, \\ \\pounds 4, \\ \\pounds 8, \\ \\pounds 16, \\ \\ldots",
          "explanation": "Doubling the amount each month multiplies by the same factor of $2$ every time, which is exactly what makes a sequence geometric.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the first term and common ratio",
          "workingLatex": "a = 2, \\quad r = 2",
          "explanation": "The first month's saving of $\\pounds 2$ is the first term $a$, and doubling each month gives the common ratio $r = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the number of terms",
          "workingLatex": "n = 10",
          "explanation": "Ten months of saving means we are adding $10$ terms, so $n = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the finite geometric sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "The total saved is the sum of all the monthly amounts. As $r = 2 > 1$, the form $\\dfrac{a(r^n - 1)}{r - 1}$ keeps the numbers positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "S_{10} = \\dfrac{2(2^{10} - 1)}{2 - 1}",
          "explanation": "Substituting $a = 2$, $r = 2$ and $n = 10$ sets up the total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power",
          "workingLatex": "2^{10} = 1024",
          "explanation": "$2^{10} = 1024$ by doubling ten times from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction",
          "workingLatex": "S_{10} = \\dfrac{2(1024 - 1)}{1} = 2 \\times 1023",
          "explanation": "The denominator is $2 - 1 = 1$, and the bracket becomes $1023$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Complete the calculation",
          "workingLatex": "S_{10} = 2046",
          "explanation": "Multiplying, $2 \\times 1023 = 2046$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the answer in context",
          "workingLatex": "\\text{Total saved} = \\pounds 2046",
          "explanation": "So over ten months Maria saves a total of $\\pounds 2046$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\pounds 2046$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sigma notation",
      "finite sum"
    ],
    "questionText": "Evaluate $\\sum_{r=1}^{6} 2 \\times 3^{r-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the sum as a geometric series",
          "workingLatex": "\\sum_{r=1}^{6} 2 \\times 3^{r-1}",
          "explanation": "Each term has the form $2 \\times 3^{r-1}$. As $r$ increases by $1$ the term is multiplied by $3$, and multiplying by a fixed number to move on is exactly the pattern of a geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, r and n",
          "workingLatex": "a = 2, \\quad r = 3, \\quad n = 6",
          "explanation": "The first term (at $r=1$) is $2 \\times 3^{0} = 2$, the constant multiplier between terms is $3$, and the top limit $6$ tells us there are $6$ terms in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the finite sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "Because $r = 3 > 1$, this version keeps both the numerator and denominator positive, which avoids fiddly negative signs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "S_6 = \\dfrac{2(3^{6} - 1)}{3 - 1}",
          "explanation": "Replacing $a$, $r$ and $n$ turns the general formula into a single arithmetic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "3^{6} = 729",
          "explanation": "The power must be worked out before anything else; $3^6$ is six threes multiplied together, giving $729$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "S_6 = \\dfrac{2(729 - 1)}{2} = \\dfrac{2 \\times 728}{2}",
          "explanation": "Subtract inside the bracket first, then notice the factor of $2$ appears on both the top and the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the value",
          "workingLatex": "S_6 = 728",
          "explanation": "The $2$s cancel, leaving $728$ as the total of the six terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=1}^{6} 2 \\times 3^{r-1} = 728$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sigma notation",
      "fractional ratio"
    ],
    "questionText": "Evaluate $\\sum_{r=1}^{5} 4 \\times \\left(\\dfrac{1}{2}\\right)^{r-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the sum as a geometric series",
          "workingLatex": "\\sum_{r=1}^{5} 4 \\times \\left(\\dfrac{1}{2}\\right)^{r-1}",
          "explanation": "Every term is the previous one multiplied by $\\dfrac{1}{2}$, so this is a geometric series with terms that halve each time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, r and n",
          "workingLatex": "a = 4, \\quad r = \\dfrac{1}{2}, \\quad n = 5",
          "explanation": "At $r=1$ the term is $4 \\times \\left(\\tfrac{1}{2}\\right)^{0} = 4$, the multiplier is $\\dfrac{1}{2}$, and the top limit $5$ means there are $5$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the finite sum formula",
          "workingLatex": "S_n = \\dfrac{a(1 - r^n)}{1 - r}",
          "explanation": "Since $r = \\dfrac{1}{2} < 1$, using $1 - r^n$ on the top and $1 - r$ on the bottom keeps everything positive and tidy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "S_5 = \\dfrac{4\\left(1 - \\left(\\tfrac{1}{2}\\right)^{5}\\right)}{1 - \\tfrac{1}{2}}",
          "explanation": "Putting in $a = 4$, $r = \\tfrac{1}{2}$ and $n = 5$ sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "\\left(\\dfrac{1}{2}\\right)^{5} = \\dfrac{1}{32}",
          "explanation": "Raising a fraction to a power raises the top and bottom separately, so $\\dfrac{1^5}{2^5} = \\dfrac{1}{32}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the top and bottom",
          "workingLatex": "S_5 = \\dfrac{4\\left(1 - \\tfrac{1}{32}\\right)}{\\tfrac{1}{2}} = \\dfrac{4 \\times \\tfrac{31}{32}}{\\tfrac{1}{2}}",
          "explanation": "Inside the bracket $1 - \\dfrac{1}{32} = \\dfrac{31}{32}$, and the denominator $1 - \\dfrac{1}{2} = \\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the fraction",
          "workingLatex": "S_5 = 8 \\times \\dfrac{31}{32} = \\dfrac{31}{4}",
          "explanation": "Dividing by $\\dfrac{1}{2}$ is the same as multiplying by $2$, so $4 \\times 2 = 8$, and $8 \\times \\dfrac{31}{32} = \\dfrac{31}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the value",
          "workingLatex": "S_5 = \\dfrac{31}{4} = 7.75",
          "explanation": "So the five terms add up to $\\dfrac{31}{4}$, which as a decimal is $7.75$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_5 = \\dfrac{31}{4} = 7.75$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "geometric series",
      "sigma notation",
      "number of terms"
    ],
    "questionText": "Write the series $3 + 6 + 12 + \\dots + 384$ in sigma notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the first term and common ratio",
          "workingLatex": "a = 3, \\quad r = \\dfrac{6}{3} = 2",
          "explanation": "The first term is $3$, and dividing any term by the one before it gives the common ratio: $\\dfrac{6}{3} = 2$, confirmed by $\\dfrac{12}{6} = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general term",
          "workingLatex": "u_k = 3 \\times 2^{k-1}",
          "explanation": "In a geometric series the $k$th term is the first term multiplied by $r$ a total of $k-1$ times, giving $3 \\times 2^{k-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the general term equal to the last term",
          "workingLatex": "3 \\times 2^{k-1} = 384",
          "explanation": "To find how many terms there are, we ask which value of $k$ produces the final term $384$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the power of 2",
          "workingLatex": "2^{k-1} = \\dfrac{384}{3} = 128",
          "explanation": "Dividing both sides by $3$ leaves a pure power of $2$ to identify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for k",
          "workingLatex": "128 = 2^{7} \\; \\Rightarrow \\; k - 1 = 7 \\; \\Rightarrow \\; k = 8",
          "explanation": "Since $128 = 2^{7}$, matching exponents gives $k - 1 = 7$, so there are $k = 8$ terms in the series.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the sigma notation",
          "workingLatex": "\\sum_{r=1}^{8} 3 \\times 2^{r-1}",
          "explanation": "Using the general term with the counter running from $1$ up to the final index $8$ captures every term exactly once.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "3 + 6 + 12 + \\dots + 384 = \\sum_{r=1}^{8} 3 \\times 2^{r-1}",
          "explanation": "This compact form represents the same eight terms $3, 6, 12, \\dots, 384$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=1}^{8} 3 \\times 2^{r-1}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sigma notation",
      "finite sum"
    ],
    "questionText": "Evaluate $\\sum_{r=1}^{4} 5 \\times 2^{r-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the sum as a geometric series",
          "workingLatex": "\\sum_{r=1}^{4} 5 \\times 2^{r-1}",
          "explanation": "Each term has the shape $5 \\times 2^{r-1}$, doubling as $r$ increases, so this is a geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, r and n",
          "workingLatex": "a = 5, \\quad r = 2, \\quad n = 4",
          "explanation": "At $r=1$ the term is $5 \\times 2^{0} = 5$, the multiplier is $2$, and the top limit $4$ tells us there are $4$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the finite sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "With $r = 2 > 1$, this form keeps the numerator and denominator positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "S_4 = \\dfrac{5(2^{4} - 1)}{2 - 1}",
          "explanation": "Inserting $a = 5$, $r = 2$ and $n = 4$ prepares the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power",
          "workingLatex": "2^{4} = 16",
          "explanation": "Doubling from $1$ four times gives $2^4 = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "S_4 = \\dfrac{5(16 - 1)}{1} = 5 \\times 15",
          "explanation": "The denominator $2 - 1 = 1$ disappears, leaving $5 \\times 15$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the value",
          "workingLatex": "S_4 = 75",
          "explanation": "So the four terms $5 + 10 + 20 + 40$ total $75$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_4 = 75$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sigma notation",
      "shifted limits"
    ],
    "questionText": "Evaluate $\\sum_{r=3}^{8} 2^{r}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out what the sigma means",
          "workingLatex": "\\sum_{r=3}^{8} 2^{r} = 2^{3} + 2^{4} + 2^{5} + 2^{6} + 2^{7} + 2^{8}",
          "explanation": "The counter $r$ runs from $3$ to $8$ inclusive, so we substitute each of those values in turn. The lower limit is $3$, not $1$, so the first term is not $2^{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm it is geometric",
          "workingLatex": "\\dfrac{2^{r+1}}{2^{r}} = 2",
          "explanation": "Each term is exactly double the one before, so the terms form a geometric series with common ratio $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the first term",
          "workingLatex": "a = 2^{3} = 8",
          "explanation": "The series does not start at $2^{1}$; the very first term is the one at $r = 3$, which is $2^{3} = 8$. This is the crucial care point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the number of terms",
          "workingLatex": "n = 8 - 3 + 1 = 6",
          "explanation": "When the counter runs from $3$ to $8$ inclusive, the number of terms is top minus bottom plus one, because both ends are included.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the common ratio",
          "workingLatex": "r = 2",
          "explanation": "We confirmed above that consecutive terms differ by a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the finite sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "Since $r = 2 > 1$, this arrangement keeps the numbers positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "S_6 = \\dfrac{8(2^{6} - 1)}{2 - 1}",
          "explanation": "Use $a = 8$ (the first term), $r = 2$ and $n = 6$ (the number of terms), not the original limits.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the power",
          "workingLatex": "2^{6} = 64",
          "explanation": "Doubling from $1$ six times gives $64$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the fraction",
          "workingLatex": "S_6 = \\dfrac{8(64 - 1)}{1} = 8 \\times 63",
          "explanation": "The denominator is $1$, leaving $8 \\times 63$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the value",
          "workingLatex": "S_6 = 504",
          "explanation": "Multiplying gives $8 \\times 63 = 504$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify by direct addition",
          "workingLatex": "8 + 16 + 32 + 64 + 128 + 256 = 504",
          "explanation": "Adding the six actual terms confirms the total, so $\\sum_{r=3}^{8} 2^{r} = 504$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=3}^{8} 2^{r} = 504$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "geometric series",
      "convergence",
      "sum to infinity"
    ],
    "questionText": "Determine whether the geometric series $27 + 18 + 12 + 8 + \\dots$ converges. State the condition you use and explain what convergence means for this series.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the common ratio",
          "workingLatex": "r = \\dfrac{18}{27} = \\dfrac{2}{3}",
          "explanation": "Dividing a term by the one before it gives the common ratio. Here $\\dfrac{18}{27}$ cancels to $\\dfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the ratio is consistent",
          "workingLatex": "\\dfrac{12}{18} = \\dfrac{2}{3}, \\quad \\dfrac{8}{12} = \\dfrac{2}{3}",
          "explanation": "For the series to be genuinely geometric the same ratio must appear throughout, and it does, confirming $r = \\dfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the convergence condition",
          "workingLatex": "\\text{converges} \\iff \\left| r \\right| < 1",
          "explanation": "A geometric series settles down to a finite total precisely when the size of the common ratio is less than $1$, so each term is smaller than the last.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the size of r",
          "workingLatex": "\\left| r \\right| = \\dfrac{2}{3} \\approx 0.667",
          "explanation": "The common ratio is already positive, so its absolute value is just $\\dfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with 1",
          "workingLatex": "\\dfrac{2}{3} < 1",
          "explanation": "Since $\\dfrac{2}{3}$ is less than $1$, the convergence condition is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude convergence",
          "workingLatex": "\\left| r \\right| < 1 \\; \\Rightarrow \\; \\text{the series converges}",
          "explanation": "Because the terms keep shrinking towards zero, adding more and more of them does not blow up; the series converges.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain what convergence means",
          "workingLatex": "S_n \\to S_\\infty \\text{ as } n \\to \\infty",
          "explanation": "Convergence means the running total (the partial sum $S_n$) gets closer and closer to one fixed finite number as we include more terms, rather than growing without bound.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the limit it approaches",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r} = \\dfrac{27}{1 - \\tfrac{2}{3}} = \\dfrac{27}{\\tfrac{1}{3}} = 81",
          "explanation": "The fixed value the partial sums approach is the sum to infinity. Here it works out to $81$, so no matter how many terms we add the total never passes $81$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\left| r \\right| = \\dfrac{2}{3} < 1 \\; \\Rightarrow \\; \\text{converges to } 81",
          "explanation": "The series converges because $\\left| r \\right| < 1$, and its partial sums home in on the finite limit $81$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The series converges because $\\left| r \\right| = \\dfrac{2}{3} < 1$. Convergence means its partial sums approach the finite limit $S_\\infty = 81$ as more terms are added."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sum to infinity",
      "convergence"
    ],
    "questionText": "A convergent geometric series has first term $a = 8$ and common ratio $r = \\dfrac{1}{2}$. Find its sum to infinity, stating the condition that allows it to be found.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note what is required",
          "workingLatex": "S_\\infty = ?",
          "explanation": "We want the value the partial sums approach as we keep adding terms forever, which is the sum to infinity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the known values",
          "workingLatex": "a = 8, \\quad r = \\dfrac{1}{2}",
          "explanation": "The first term and common ratio are given directly, so we record them before choosing a formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the convergence condition",
          "workingLatex": "\\left| r \\right| = \\dfrac{1}{2} < 1",
          "explanation": "A sum to infinity only exists when $\\left| r \\right| < 1$. Here $\\dfrac{1}{2} < 1$, so it is safe to proceed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm a finite total exists",
          "workingLatex": "\\left| r \\right| < 1 \\; \\Rightarrow \\; S_\\infty \\text{ exists}",
          "explanation": "Because the terms shrink towards zero, the running total settles on a finite number rather than growing without limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "The endless total of a convergent geometric series is the first term divided by $1$ minus the common ratio.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values",
          "workingLatex": "S_\\infty = \\dfrac{8}{1 - \\tfrac{1}{2}}",
          "explanation": "Insert $a = 8$ and $r = \\dfrac{1}{2}$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the denominator",
          "workingLatex": "1 - \\dfrac{1}{2} = \\dfrac{1}{2}",
          "explanation": "Working out the bottom of the fraction first makes the division clear.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide",
          "workingLatex": "S_\\infty = \\dfrac{8}{\\tfrac{1}{2}} = 8 \\times 2 = 16",
          "explanation": "Dividing by $\\dfrac{1}{2}$ is the same as multiplying by $2$, giving $16$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "S_\\infty = 16",
          "explanation": "So no matter how many terms are added, the total approaches $16$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_\\infty = 16$ (valid since $\\left| r \\right| = \\dfrac{1}{2} < 1$)"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sum to infinity",
      "negative ratio"
    ],
    "questionText": "Find the sum to infinity of the geometric series $9 - 3 + 1 - \\dfrac{1}{3} + \\dots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term and common ratio",
          "workingLatex": "a = 9, \\quad r = \\dfrac{-3}{9} = -\\dfrac{1}{3}",
          "explanation": "The signs alternate, so the ratio must be negative. Dividing the second term by the first gives $\\dfrac{-3}{9} = -\\dfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the ratio is consistent",
          "workingLatex": "\\dfrac{1}{-3} = -\\dfrac{1}{3}",
          "explanation": "Checking the next pair of terms gives the same ratio, confirming the series is geometric with $r = -\\dfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the convergence condition",
          "workingLatex": "\\left| r \\right| = \\left| -\\dfrac{1}{3} \\right| = \\dfrac{1}{3} < 1",
          "explanation": "The condition uses the size of $r$, and the absolute value ignores the minus sign: $\\left| -\\dfrac{1}{3} \\right| = \\dfrac{1}{3}$, which is less than $1$, so the series converges.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "For a convergent geometric series the endless total is the first term divided by $1 - r$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute carefully",
          "workingLatex": "S_\\infty = \\dfrac{9}{1 - \\left(-\\tfrac{1}{3}\\right)}",
          "explanation": "Because $r$ is negative, the denominator contains a subtraction of a negative, so we must handle the double sign carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Resolve the double negative",
          "workingLatex": "1 - \\left(-\\dfrac{1}{3}\\right) = 1 + \\dfrac{1}{3} = \\dfrac{4}{3}",
          "explanation": "Subtracting a negative is the same as adding, so the denominator becomes $1 + \\dfrac{1}{3} = \\dfrac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the fraction",
          "workingLatex": "S_\\infty = \\dfrac{9}{\\tfrac{4}{3}} = 9 \\times \\dfrac{3}{4} = \\dfrac{27}{4}",
          "explanation": "Dividing by $\\dfrac{4}{3}$ means multiplying by its reciprocal $\\dfrac{3}{4}$, giving $\\dfrac{27}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write as a decimal",
          "workingLatex": "S_\\infty = \\dfrac{27}{4} = 6.75",
          "explanation": "Converting the fraction to a decimal gives $6.75$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "S_\\infty = \\dfrac{27}{4} = 6.75",
          "explanation": "Even though the terms alternate in sign, the partial sums settle towards $\\dfrac{27}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_\\infty = \\dfrac{27}{4} = 6.75$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sum to infinity",
      "nth term",
      "reverse"
    ],
    "questionText": "A convergent geometric series has sum to infinity $S_\\infty = 20$ and first term $a = 5$. Find the common ratio $r$, and hence find the $4$th term of the series.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}, \\quad \\left| r \\right| < 1",
          "explanation": "The sum to infinity links the first term, the ratio and the total, so we can work backwards from a known total to find $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the known values",
          "workingLatex": "S_\\infty = 20, \\quad a = 5",
          "explanation": "Recording the given total and first term makes the substitution clean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "20 = \\dfrac{5}{1 - r}",
          "explanation": "Putting the known values in produces a single equation whose only unknown is $r$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the fraction",
          "workingLatex": "20(1 - r) = 5",
          "explanation": "Multiplying both sides by $1 - r$ removes the denominator so we can solve normally.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the bracket",
          "workingLatex": "20 - 20r = 5",
          "explanation": "Distributing the $20$ across the bracket gives a linear equation in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the r term",
          "workingLatex": "-20r = 5 - 20 = -15",
          "explanation": "Subtracting $20$ from both sides isolates the term containing $r$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for r",
          "workingLatex": "r = \\dfrac{-15}{-20} = \\dfrac{3}{4}",
          "explanation": "Dividing both sides by $-20$; the two negatives cancel to give a positive $\\dfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the convergence condition",
          "workingLatex": "\\left| \\dfrac{3}{4} \\right| = \\dfrac{3}{4} < 1",
          "explanation": "The answer must satisfy $\\left| r \\right| < 1$ for a sum to infinity to exist, and $\\dfrac{3}{4}$ does, so it is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "To find a specific term we multiply the first term by the ratio a fixed number of times.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the term number",
          "workingLatex": "n = 4",
          "explanation": "We want the $4$th term, so $n = 4$ and the exponent will be $n - 1 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute into the nth term formula",
          "workingLatex": "u_4 = 5 \\times \\left(\\dfrac{3}{4}\\right)^{3}",
          "explanation": "Using $a = 5$, $r = \\dfrac{3}{4}$ and $n = 4$ sets up the term calculation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the power",
          "workingLatex": "\\left(\\dfrac{3}{4}\\right)^{3} = \\dfrac{27}{64}",
          "explanation": "Cubing the fraction cubes the top and bottom: $\\dfrac{3^3}{4^3} = \\dfrac{27}{64}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiply through",
          "workingLatex": "u_4 = 5 \\times \\dfrac{27}{64} = \\dfrac{135}{64}",
          "explanation": "Multiplying the whole number by the fraction gives $\\dfrac{5 \\times 27}{64} = \\dfrac{135}{64}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Write as a decimal",
          "workingLatex": "u_4 = \\dfrac{135}{64} = 2.109375",
          "explanation": "Dividing out gives the decimal form $2.109375$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State both results",
          "workingLatex": "r = \\dfrac{3}{4}, \\quad u_4 = \\dfrac{135}{64} \\approx 2.109",
          "explanation": "So the common ratio is $\\dfrac{3}{4}$ and the fourth term is $\\dfrac{135}{64}$, about $2.109$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = \\dfrac{3}{4}, \\quad u_4 = \\dfrac{135}{64} \\approx 2.109$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "geometric series",
      "finite sum",
      "logarithms",
      "inequality"
    ],
    "questionText": "A geometric series has first term $a = 3$ and common ratio $r = 2$. Find the least value of $n$ for which the sum of the first $n$ terms, $S_n$, first exceeds $3000$. Use logarithms and verify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the finite sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "Since $r = 2 > 1$, this form of the sum formula keeps the numbers positive and is easiest to work with.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the knowns and target",
          "workingLatex": "a = 3, \\quad r = 2, \\quad S_n > 3000",
          "explanation": "We are chasing the first $n$ that pushes the running total past $3000$, so we set up an inequality rather than an equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the inequality",
          "workingLatex": "\\dfrac{3(2^n - 1)}{2 - 1} > 3000",
          "explanation": "Replacing $a$ and $r$ turns the requirement into an inequality involving $2^n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the denominator",
          "workingLatex": "3(2^n - 1) > 3000",
          "explanation": "The denominator $2 - 1 = 1$, so it disappears and the expression tidies up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 3",
          "workingLatex": "2^n - 1 > 1000",
          "explanation": "Dividing by the positive number $3$ keeps the inequality direction the same.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Isolate the power",
          "workingLatex": "2^n > 1001",
          "explanation": "Adding $1$ to both sides leaves a clean power of $2$ to solve for.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\log(2^n) > \\log(1001)",
          "explanation": "The logarithm is an increasing function, so applying it to both sides preserves the direction of the inequality and lets us bring $n$ down from the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the power law of logs",
          "workingLatex": "n \\log 2 > \\log 1001",
          "explanation": "The rule $\\log(x^n) = n \\log x$ moves the exponent to the front, turning the unknown into a simple coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Isolate n",
          "workingLatex": "n > \\dfrac{\\log 1001}{\\log 2}",
          "explanation": "Dividing by $\\log 2$, which is positive, keeps the inequality pointing the same way.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the logarithms",
          "workingLatex": "\\log 1001 \\approx 3.0004, \\quad \\log 2 \\approx 0.3010",
          "explanation": "Using base-$10$ logs, these values come straight from a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the bound",
          "workingLatex": "n > \\dfrac{3.0004}{0.3010} \\approx 9.967",
          "explanation": "Dividing gives the exact cut-off: any $n$ larger than about $9.967$ works.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Round up to the least integer",
          "workingLatex": "n = 10",
          "explanation": "Because $n$ counts terms it must be a whole number, and it has to be greater than $9.967$, so we round up (not down) to the smallest integer that qualifies, $10$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify n = 10 works",
          "workingLatex": "S_{10} = 3(2^{10} - 1) = 3 \\times 1023 = 3069 > 3000",
          "explanation": "Checking directly: $2^{10} = 1024$, so $S_{10} = 3069$, which does exceed $3000$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify n = 9 fails",
          "workingLatex": "S_{9} = 3(2^{9} - 1) = 3 \\times 511 = 1533 < 3000",
          "explanation": "The term just below must fail for $10$ to be the least: $S_{9} = 1533$, which is below $3000$, confirming the boundary.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "n = 10",
          "explanation": "So the smallest number of terms whose sum first exceeds $3000$ is $n = 10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 10$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sum to infinity",
      "convergence"
    ],
    "questionText": "A geometric series has first term $a = 24$ and common ratio $r = \\dfrac{1}{3}$. Find the sum to infinity of the series.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the convergence condition",
          "workingLatex": "\\left| r \\right| < 1",
          "explanation": "A geometric series only settles to a finite total when its terms shrink towards zero. That happens exactly when the common ratio has size less than $1$, written $\\left| r \\right| < 1$. So before summing to infinity we must check this holds.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "When $\\left| r \\right| < 1$, adding infinitely many shrinking terms gives a finite value. The whole infinite sum collapses to the first term divided by $1 - r$, because the leftover tail after any point is just a scaled copy of the whole series.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the known values",
          "workingLatex": "a = 24, \\quad r = \\dfrac{1}{3}",
          "explanation": "Writing down the first term and common ratio before substituting keeps the arithmetic tidy and avoids slips.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the series converges",
          "workingLatex": "\\left| \\dfrac{1}{3} \\right| = \\dfrac{1}{3} < 1",
          "explanation": "The common ratio $\\dfrac{1}{3}$ has size $\\dfrac{1}{3}$, which is less than $1$, so the terms shrink and the sum to infinity exists. We are safe to use the formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the formula",
          "workingLatex": "S_\\infty = \\dfrac{24}{1 - \\frac{1}{3}}",
          "explanation": "Replacing $a$ with $24$ and $r$ with $\\dfrac{1}{3}$ turns the general rule into a single calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the denominator",
          "workingLatex": "1 - \\dfrac{1}{3} = \\dfrac{2}{3}",
          "explanation": "Subtracting $\\dfrac{1}{3}$ from a whole $1$ leaves $\\dfrac{2}{3}$. It helps to finish the denominator before dividing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the fraction",
          "workingLatex": "S_\\infty = \\dfrac{24}{\\frac{2}{3}} = 24 \\times \\dfrac{3}{2}",
          "explanation": "Dividing by $\\dfrac{2}{3}$ is the same as multiplying by its reciprocal $\\dfrac{3}{2}$. Turning division into multiplication makes the value easy to compute.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "S_\\infty = \\dfrac{72}{2} = 36",
          "explanation": "Here $24 \\times 3 = 72$, and dividing by $2$ gives $36$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "S_\\infty = 36",
          "explanation": "So the infinitely many terms of this series add up to a finite total of $36$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_\\infty = 36$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sum to infinity",
      "negative ratio"
    ],
    "questionText": "A geometric series has first term $a = 40$ and common ratio $r = -\\dfrac{1}{4}$. Find its sum to infinity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the convergence condition",
          "workingLatex": "\\left| r \\right| < 1",
          "explanation": "A geometric series has a finite sum to infinity only when the size of the common ratio is below $1$. The sign of $r$ does not matter here; what matters is its magnitude $\\left| r \\right|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "When $\\left| r \\right| < 1$ the terms shrink towards zero and the endless sum still lands on a single finite number, given by the first term divided by $1 - r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the known values",
          "workingLatex": "a = 40, \\quad r = -\\dfrac{1}{4}",
          "explanation": "Recording the values first, keeping the minus sign attached to $r$, avoids errors when we substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the series converges",
          "workingLatex": "\\left| -\\dfrac{1}{4} \\right| = \\dfrac{1}{4} < 1",
          "explanation": "The magnitude of $-\\dfrac{1}{4}$ is $\\dfrac{1}{4}$, which is less than $1$, so the series converges and the formula applies.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the formula",
          "workingLatex": "S_\\infty = \\dfrac{40}{1 - \\left(-\\frac{1}{4}\\right)}",
          "explanation": "Substituting $a = 40$ and $r = -\\dfrac{1}{4}$ gives the calculation. Keep the ratio inside brackets so the double negative is handled carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Deal with the double negative",
          "workingLatex": "1 - \\left(-\\dfrac{1}{4}\\right) = 1 + \\dfrac{1}{4} = \\dfrac{5}{4}",
          "explanation": "Subtracting a negative is the same as adding, so $1 - (-\\tfrac{1}{4})$ becomes $1 + \\dfrac{1}{4} = \\dfrac{5}{4}$. This is the most common place to slip, so it is worth writing out.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the fraction",
          "workingLatex": "S_\\infty = \\dfrac{40}{\\frac{5}{4}} = 40 \\times \\dfrac{4}{5}",
          "explanation": "Dividing by $\\dfrac{5}{4}$ means multiplying by its reciprocal $\\dfrac{4}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "S_\\infty = \\dfrac{160}{5} = 32",
          "explanation": "Here $40 \\times 4 = 160$, and dividing by $5$ gives $32$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the sign",
          "workingLatex": "40 - 10 + 2.5 - 0.625 + \\cdots \\to 32",
          "explanation": "Because $r$ is negative the terms alternate in sign, so the running total zig-zags towards its limit. The first term $40$ dominates, so a positive answer a little below $40$ is exactly what we expect.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "S_\\infty = 32",
          "explanation": "So the alternating series adds up to a finite total of $32$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_\\infty = 32$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurring decimal",
      "sum to infinity",
      "fraction"
    ],
    "questionText": "Express the recurring decimal $0.\\overline{27} = 0.2727\\ldots$ as an infinite geometric series, and hence write it as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the decimal as a sum of blocks",
          "workingLatex": "0.2727\\ldots = 0.27 + 0.0027 + 0.000027 + \\cdots",
          "explanation": "The block $27$ repeats forever. Splitting the decimal into successive two-digit blocks turns it into an addition, where each block sits two decimal places further to the right than the one before.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the first term",
          "workingLatex": "a = 0.27 = \\dfrac{27}{100}",
          "explanation": "The first block $0.27$ is the first term of the series. Writing it as $\\dfrac{27}{100}$ makes the final fraction work clean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the common ratio",
          "workingLatex": "r = \\dfrac{0.0027}{0.27} = \\dfrac{1}{100}",
          "explanation": "Each block is $100$ times smaller than the one before it, because it is shifted two decimal places to the right. Dividing consecutive terms confirms the constant ratio $\\dfrac{1}{100}$, so this really is geometric.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the series converges",
          "workingLatex": "\\left| \\dfrac{1}{100} \\right| = \\dfrac{1}{100} < 1",
          "explanation": "Since the ratio has size less than $1$, the terms shrink towards zero and the infinite sum reaches a finite value, so we may use the sum to infinity formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "The exact value of the recurring decimal is the total of the infinite series, which the sum to infinity formula gives directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values",
          "workingLatex": "S_\\infty = \\dfrac{\\frac{27}{100}}{1 - \\frac{1}{100}}",
          "explanation": "Putting $a = \\dfrac{27}{100}$ and $r = \\dfrac{1}{100}$ into the formula sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the denominator",
          "workingLatex": "1 - \\dfrac{1}{100} = \\dfrac{99}{100}",
          "explanation": "Taking $\\dfrac{1}{100}$ away from a whole $1$ leaves $\\dfrac{99}{100}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide the fractions",
          "workingLatex": "S_\\infty = \\dfrac{27}{100} \\div \\dfrac{99}{100} = \\dfrac{27}{100} \\times \\dfrac{100}{99} = \\dfrac{27}{99}",
          "explanation": "Dividing by $\\dfrac{99}{100}$ means multiplying by $\\dfrac{100}{99}$. The factors of $100$ cancel, leaving $\\dfrac{27}{99}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{27}{99} = \\dfrac{27 \\div 9}{99 \\div 9} = \\dfrac{3}{11}",
          "explanation": "Both numerator and denominator share a factor of $9$, so dividing top and bottom by $9$ gives the fraction in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the result",
          "workingLatex": "\\dfrac{3}{11} = 0.2727\\ldots",
          "explanation": "Dividing $3$ by $11$ does indeed produce $0.2727\\ldots$, confirming the fraction matches the original recurring decimal.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "0.2727\\ldots = \\dfrac{3}{11}",
          "explanation": "So the recurring decimal $0.\\overline{27}$ equals the exact fraction $\\dfrac{3}{11}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.2727\\ldots = \\dfrac{3}{11}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "sum to infinity",
      "common ratio",
      "rearranging"
    ],
    "questionText": "The sum to infinity of a convergent geometric series is equal to four times its first term, so $S_\\infty = 4a$. Find the common ratio $r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}, \\quad \\left| r \\right| < 1",
          "explanation": "The relationship between the sum to infinity, the first term and the ratio is captured by this formula, which holds whenever the series converges, that is when $\\left| r \\right| < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the given information",
          "workingLatex": "S_\\infty = 4a",
          "explanation": "We are told the infinite sum is exactly four times the first term. This is the extra fact that lets us pin down $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the two expressions equal",
          "workingLatex": "\\dfrac{a}{1 - r} = 4a",
          "explanation": "Both the formula and the given statement describe the same sum to infinity, so we can equate them and then solve for $r$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by the first term",
          "workingLatex": "\\dfrac{1}{1 - r} = 4",
          "explanation": "The first term $a$ appears on both sides and is non-zero (otherwise there would be no series), so dividing by $a$ cancels it and simplifies the equation to one in $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply up to clear the fraction",
          "workingLatex": "1 = 4(1 - r)",
          "explanation": "Multiplying both sides by $1 - r$ removes the fraction, giving a straightforward linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "1 = 4 - 4r",
          "explanation": "Multiplying out $4(1 - r)$ gives $4 - 4r$, ready to be rearranged.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for the term in r",
          "workingLatex": "4r = 4 - 1 = 3",
          "explanation": "Moving the $r$ term to one side and the constants to the other collects everything neatly before the final division.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "r = \\dfrac{3}{4}",
          "explanation": "Dividing both sides by $4$ isolates the common ratio.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check convergence",
          "workingLatex": "\\left| \\dfrac{3}{4} \\right| = \\dfrac{3}{4} < 1",
          "explanation": "The ratio must satisfy $\\left| r \\right| < 1$ for a sum to infinity to exist. Since $\\dfrac{3}{4} < 1$, the answer is valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "r = \\dfrac{3}{4}",
          "explanation": "So a common ratio of $\\dfrac{3}{4}$ makes the sum to infinity four times the first term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = \\dfrac{3}{4}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "compound interest",
      "modelling",
      "geometric growth"
    ],
    "questionText": "$\\pounds 2000$ is invested in an account paying $5\\%$ compound interest per year. Find the value of the investment after $10$ years, giving your answer to the nearest penny.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the percentage into a multiplier",
          "workingLatex": "1 + \\dfrac{5}{100} = 1.05",
          "explanation": "Adding $5\\%$ to an amount means keeping the whole $100\\%$ and adding $5\\%$ more, which is $105\\%$ of the amount, or a multiplier of $1.05$. Using a single multiplier is far cleaner than adding interest separately each year.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise a geometric model",
          "workingLatex": "2000, \\; 2000(1.05), \\; 2000(1.05)^2, \\; \\ldots",
          "explanation": "Each year the balance is multiplied by the same factor $1.05$, so the yearly values form a geometric sequence with first term $2000$ and common ratio $1.05$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fix the indexing",
          "workingLatex": "V_n = 2000 \\times 1.05^{\\,n}",
          "explanation": "Take the starting $\\pounds 2000$ as the value at year $0$. Then the value after $n$ years is $2000 \\times 1.05^{n}$; in sequence terms this is the $(n+1)$th term. Stating this avoids the classic off-by-one error.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the number of years",
          "workingLatex": "V_{10} = 2000 \\times 1.05^{10}",
          "explanation": "We want the value after $10$ full years, so we set $n = 10$ in the model.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Build up the power (part 1)",
          "workingLatex": "1.05^{2} = 1.1025, \\quad 1.05^{5} = 1.2762815625",
          "explanation": "Powers are easiest to compute in stages. Squaring gives $1.05^2 = 1.1025$, and continuing to the fifth power gives $1.2762815625$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Build up the power (part 2)",
          "workingLatex": "1.05^{10} = \\left(1.05^{5}\\right)^{2} = 1.6288946268",
          "explanation": "Since $10 = 5 \\times 2$, squaring $1.05^5$ gives $1.05^{10} = 1.6288946268$ (to $10$ decimal places). Building it this way keeps the rounding under control.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by the initial amount",
          "workingLatex": "V_{10} = 2000 \\times 1.6288946268 = 3257.7892535",
          "explanation": "Multiplying the growth factor by the starting $\\pounds 2000$ gives the value after ten years before rounding.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to the nearest penny",
          "workingLatex": "V_{10} \\approx 3257.79",
          "explanation": "Money is quoted to the nearest penny, so we round $3257.7892\\ldots$ to two decimal places, giving $\\pounds 3257.79$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "V_{10} = \\pounds 3257.79",
          "explanation": "So after $10$ years the investment is worth about $\\pounds 3257.79$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$V_{10} = \\pounds 3257.79$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "depreciation",
      "modelling",
      "geometric decay"
    ],
    "questionText": "A car is worth $\\pounds 20000$ when new. Its value falls by $20\\%$ each year. Find its value after $3$ years.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the loss into a multiplier",
          "workingLatex": "1 - \\dfrac{20}{100} = 0.8",
          "explanation": "Losing $20\\%$ leaves $80\\%$ of the value behind, so each year the worth is multiplied by $0.8$. A single decay multiplier is much cleaner than subtracting the loss separately each year.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise a geometric model",
          "workingLatex": "20000, \\; 20000(0.8), \\; 20000(0.8)^2, \\; \\ldots",
          "explanation": "Multiplying by the same factor $0.8$ every year makes the yearly values a geometric sequence with first term $20000$ and common ratio $0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fix the indexing",
          "workingLatex": "V_n = 20000 \\times 0.8^{\\,n}",
          "explanation": "Treat the new price $\\pounds 20000$ as the value at year $0$. Then the value after $n$ years is $20000 \\times 0.8^{n}$, which makes the counting unambiguous.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the number of years",
          "workingLatex": "V_3 = 20000 \\times 0.8^{3}",
          "explanation": "We want the value after $3$ years, so set $n = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the power (part 1)",
          "workingLatex": "0.8^{2} = 0.64",
          "explanation": "Squaring the multiplier first gives $0.8 \\times 0.8 = 0.64$, a convenient stepping stone to the cube.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out the power (part 2)",
          "workingLatex": "0.8^{3} = 0.64 \\times 0.8 = 0.512",
          "explanation": "Multiplying $0.64$ by another factor of $0.8$ completes the cube, giving $0.512$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by the original value",
          "workingLatex": "V_3 = 20000 \\times 0.512 = 10240",
          "explanation": "Applying the three-year decay factor to the starting price gives the value after three years.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sanity check",
          "workingLatex": "10240 < 20000",
          "explanation": "After three years of losing value the car should be worth clearly less than when new, and just over half its original price is reasonable for a $20\\%$ annual drop.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "V_3 = \\pounds 10240",
          "explanation": "So after $3$ years the car is worth $\\pounds 10240$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$V_3 = \\pounds 10240$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "modelling",
      "sum to infinity",
      "steady state"
    ],
    "questionText": "A patient takes a $30$ mg tablet of a drug at the same time each day. During each day the body removes two-thirds of the drug present, so one-third of it remains when the next tablet is taken. Find the long-term amount of the drug in the body just after a tablet is taken, and interpret your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the amount after the first tablet",
          "workingLatex": "A_1 = 30 \\text{ mg}",
          "explanation": "Right after the very first tablet there is nothing left over from before, so the body holds exactly the $30$ mg just taken.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the fraction that remains",
          "workingLatex": "\\text{fraction remaining} = 1 - \\dfrac{2}{3} = \\dfrac{1}{3}",
          "explanation": "If two-thirds is removed during the day, then one-third stays. This surviving fraction $\\dfrac{1}{3}$ acts as the common ratio linking one day to the next.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Track the amount just before the second tablet",
          "workingLatex": "30 \\times \\dfrac{1}{3} = 10 \\text{ mg}",
          "explanation": "By the time a day has passed, only one-third of the $30$ mg is left, which is $10$ mg carried over.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Amount just after the second tablet",
          "workingLatex": "A_2 = 10 + 30 = 40 \\text{ mg}",
          "explanation": "The next tablet adds a fresh $30$ mg on top of the $10$ mg left over, giving $40$ mg immediately after dosing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Amount just after the third tablet",
          "workingLatex": "A_3 = 40 \\times \\dfrac{1}{3} + 30 = \\dfrac{40}{3} + 30 = \\dfrac{130}{3} \\approx 43.3 \\text{ mg}",
          "explanation": "Each day the previous total is cut to one-third, then a new $30$ mg is added. The level is creeping up but by ever-smaller amounts, which hints at a limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the level just after the nth tablet as a series",
          "workingLatex": "A_n = 30 + 30\\left(\\dfrac{1}{3}\\right) + 30\\left(\\dfrac{1}{3}\\right)^2 + \\cdots + 30\\left(\\dfrac{1}{3}\\right)^{n-1}",
          "explanation": "The newest dose contributes a full $30$ mg, the dose from the day before has been reduced once, the one before that twice, and so on. Adding these surviving pieces gives the total just after the $n$th tablet.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise a geometric series",
          "workingLatex": "a = 30, \\quad r = \\dfrac{1}{3}",
          "explanation": "Each contribution is $\\dfrac{1}{3}$ of the one before, so this is a geometric series with first term $30$ and common ratio $\\dfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the long-term level as a sum to infinity",
          "workingLatex": "A_\\infty = \\lim_{n \\to \\infty} A_n",
          "explanation": "The long-term amount just after a dose is what $A_n$ approaches as the number of days grows without bound, which is exactly the sum to infinity of the series.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check convergence",
          "workingLatex": "\\left| \\dfrac{1}{3} \\right| = \\dfrac{1}{3} < 1",
          "explanation": "Because the ratio has size less than $1$, the older doses fade away and the total settles to a finite steady value rather than growing forever.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "A_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "For a convergent geometric series the endless sum equals the first term divided by $1 - r$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the values",
          "workingLatex": "A_\\infty = \\dfrac{30}{1 - \\frac{1}{3}}",
          "explanation": "Putting $a = 30$ and $r = \\dfrac{1}{3}$ into the formula sets up the final calculation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the denominator",
          "workingLatex": "1 - \\dfrac{1}{3} = \\dfrac{2}{3}",
          "explanation": "Removing $\\dfrac{1}{3}$ from a whole $1$ leaves $\\dfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the sum to infinity",
          "workingLatex": "A_\\infty = \\dfrac{30}{\\frac{2}{3}} = 30 \\times \\dfrac{3}{2} = 45 \\text{ mg}",
          "explanation": "Dividing by $\\dfrac{2}{3}$ is multiplying by $\\dfrac{3}{2}$, giving $45$ mg.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the answer",
          "workingLatex": "A_n \\to 45 \\text{ mg}",
          "explanation": "In the long run the amount of drug just after each tablet levels off at $45$ mg. The drug does not accumulate without limit, because each day the body clears enough to balance the new dose. This steady level is important for safe, effective dosing.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "A_\\infty = 45 \\text{ mg}",
          "explanation": "So the long-term amount of drug in the body just after a tablet is taken is $45$ mg.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A_\\infty = 45$ mg"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "modelling",
      "bouncing ball",
      "sum to infinity"
    ],
    "questionText": "A ball is dropped from a height of $10$ m onto a level floor. After each bounce it rises to $\\dfrac{3}{5}$ of the height it fell from. Assuming it keeps bouncing, find the total vertical distance it travels before coming to rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Break the journey into parts",
          "workingLatex": "\\text{total} = \\text{initial drop} + \\text{all the up-and-down bounces}",
          "explanation": "The ball first falls straight down once, and after that every bounce carries it up to some height and then back down the same height. Separating the single opening drop from the repeated bounces stops us double counting.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the initial drop",
          "workingLatex": "\\text{initial drop} = 10 \\text{ m}",
          "explanation": "The very first movement is a fall of $10$ m. It happens only once and only downward, so it is counted a single time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the first rebound height",
          "workingLatex": "10 \\times \\dfrac{3}{5} = 6 \\text{ m}",
          "explanation": "After hitting the floor the ball rises to $\\dfrac{3}{5}$ of the $10$ m it fell, which is $6$ m.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the second rebound height",
          "workingLatex": "6 \\times \\dfrac{3}{5} = \\dfrac{18}{5} = 3.6 \\text{ m}",
          "explanation": "Each new peak is $\\dfrac{3}{5}$ of the previous one, so the second rebound reaches $3.6$ m. The heights are steadily shrinking.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the general rebound height",
          "workingLatex": "h_k = 10 \\times \\left(\\dfrac{3}{5}\\right)^{k}, \\quad k = 1, 2, 3, \\ldots",
          "explanation": "After $k$ bounces the ball has been reduced by the factor $\\dfrac{3}{5}$ a total of $k$ times, so the $k$th rebound peak is $10\\left(\\dfrac{3}{5}\\right)^{k}$. This confirms the heights keep the same constant ratio.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the geometric series of rebound heights",
          "workingLatex": "a = 6, \\quad r = \\dfrac{3}{5}",
          "explanation": "The rebound peaks $6, 3.6, \\ldots$ form a geometric series with first term $6$ and common ratio $\\dfrac{3}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note that each rebound is travelled twice",
          "workingLatex": "\\text{each rebound: up then down} = 2 \\times \\text{height}",
          "explanation": "Every rebound peak is reached going up and then fallen from going down, so the distance from a bounce is twice its height. Only the opening drop is one-directional.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the total distance as one expression",
          "workingLatex": "\\text{total} = 10 + 2\\left(6 + 6\\cdot\\tfrac{3}{5} + 6\\cdot\\left(\\tfrac{3}{5}\\right)^2 + \\cdots\\right) = 10 + 2S_\\infty",
          "explanation": "Combining the pieces, the total distance is the single opening drop plus twice the endless sum of rebound heights. Building the whole expression before computing keeps the logic clear.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the bounces converge",
          "workingLatex": "\\left| \\dfrac{3}{5} \\right| = \\dfrac{3}{5} < 1",
          "explanation": "Since the ratio has size below $1$, the heights fade towards zero, the ball eventually stops, and the total distance is a finite number we can find with the sum to infinity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "The endless total of all the rebound heights is a convergent geometric sum, given by the first term over $1 - r$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sum the rebound heights",
          "workingLatex": "S_\\infty = \\dfrac{6}{1 - \\frac{3}{5}} = \\dfrac{6}{\\frac{2}{5}} = 6 \\times \\dfrac{5}{2} = 15 \\text{ m}",
          "explanation": "With $a = 6$ and $r = \\dfrac{3}{5}$ the denominator is $\\dfrac{2}{5}$; dividing by it (multiplying by $\\dfrac{5}{2}$) gives $15$ m of total rising height.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute into the total expression",
          "workingLatex": "\\text{total} = 10 + 2 \\times 15",
          "explanation": "The rebound heights sum to $15$ m, and each is covered up and down, so we double it and add back the one-off opening drop of $10$ m.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the total",
          "workingLatex": "\\text{total} = 10 + 30 = 40 \\text{ m}",
          "explanation": "Doubling $15$ gives $30$ m from the bounces, and adding the initial $10$ m drop gives $40$ m.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "\\text{total distance} = 40 \\text{ m}",
          "explanation": "So before finally coming to rest the ball travels a total vertical distance of $40$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "$40$ m"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "modelling",
      "logarithms",
      "geometric growth"
    ],
    "questionText": "An investment of $\\pounds 5000$ grows by $8\\%$ each year. Find the first year at the end of which the investment is worth more than $\\pounds 10000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn the growth into a multiplier",
          "workingLatex": "1 + \\dfrac{8}{100} = 1.08",
          "explanation": "Growth of $8\\%$ means each year the value becomes $108\\%$ of the year before, a multiplier of $1.08$. A single multiplier lets us model many years at once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the value after n years",
          "workingLatex": "V_n = 5000 \\times 1.08^{\\,n}",
          "explanation": "Taking the starting $\\pounds 5000$ as year $0$, after $n$ years the value has been multiplied by $1.08$ a total of $n$ times.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the inequality",
          "workingLatex": "5000 \\times 1.08^{\\,n} > 10000",
          "explanation": "We want the first whole year when the value passes $\\pounds 10000$, so we look for the smallest $n$ making the value strictly greater than the threshold.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide through by the initial amount",
          "workingLatex": "1.08^{\\,n} > 2",
          "explanation": "Dividing both sides by $5000$ isolates the growth factor. Reaching $\\pounds 10000$ from $\\pounds 5000$ simply means the investment has doubled.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\log\\left(1.08^{\\,n}\\right) > \\log 2",
          "explanation": "The unknown $n$ is stuck in the exponent. Logarithms are the tool that brings an exponent down where we can solve for it, and $\\log$ is increasing so the inequality direction is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the power law of logs",
          "workingLatex": "n \\log 1.08 > \\log 2",
          "explanation": "The rule $\\log(x^n) = n \\log x$ moves the exponent to the front as a multiplier, turning the problem into a linear inequality in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the log of the multiplier",
          "workingLatex": "n > \\dfrac{\\log 2}{\\log 1.08}",
          "explanation": "Since $1.08 > 1$, its logarithm is positive, so dividing by $\\log 1.08$ keeps the inequality pointing the same way. Had the base been less than $1$ its log would be negative and we would flip the sign.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the logarithms",
          "workingLatex": "n > \\dfrac{0.30103}{0.03342} = 9.006\\ldots",
          "explanation": "Using $\\log 2 = 0.30103$ and $\\log 1.08 = 0.03342$, the quotient is about $9.006$, so $n$ must be larger than $9.006$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Choose the smallest whole year",
          "workingLatex": "n = 10",
          "explanation": "Only whole numbers of years make sense, and the smallest integer greater than $9.006$ is $10$. So year $10$ is the candidate answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain why we check the boundary",
          "workingLatex": "9.006 \\text{ is close to } 9, \\text{ so test } n = 9 \\text{ and } n = 10",
          "explanation": "Because the logarithm value is only just above $9$, it is worth checking the actual amounts either side of the boundary rather than trusting the rounding blindly. This catches any slip in the log calculation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the year just below",
          "workingLatex": "5000 \\times 1.08^{9} = 5000 \\times 1.99900 = 9995.02",
          "explanation": "At the end of year $9$ the value is $\\pounds 9995.02$, which is still just under $\\pounds 10000$, so the threshold has not yet been passed. This confirms year $9$ is too early.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the chosen year",
          "workingLatex": "5000 \\times 1.08^{10} = 5000 \\times 2.15892 = 10794.62",
          "explanation": "At the end of year $10$ the value is $\\pounds 10794.62$, which is above $\\pounds 10000$. Checking both sides of the boundary makes sure the rounding went the right way.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the boundary check",
          "workingLatex": "9995.02 < 10000 < 10794.62",
          "explanation": "The value crosses $\\pounds 10000$ somewhere during year $10$, so year $10$ is the first whole year at whose end the investment is worth more than $\\pounds 10000$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "n = 10",
          "explanation": "So the first year at the end of which the investment exceeds $\\pounds 10000$ is year $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The investment first exceeds $\\pounds 10000$ at the end of year $10$."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "modelling",
      "savings",
      "finite geometric sum"
    ],
    "questionText": "At the end of each year, $\\pounds 1000$ is paid into a savings account that earns $4\\%$ compound interest per year. Find the total value of the account immediately after the $10$th payment, giving your answer to the nearest penny.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the yearly multiplier",
          "workingLatex": "1 + \\dfrac{4}{100} = 1.04",
          "explanation": "Each year a balance grows by $4\\%$, which is a multiplier of $1.04$ per year of investment. Every deposit will grow by this factor for as many years as it sits in the account.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Value of the final deposit",
          "workingLatex": "1000 \\times 1.04^{0} = 1000",
          "explanation": "The $10$th payment is made at the very moment we take the total, so it has earned no interest yet and is worth just its $\\pounds 1000$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Value of the previous deposit",
          "workingLatex": "1000 \\times 1.04^{1}",
          "explanation": "The $9$th payment was made one year earlier, so it has had a single year to grow, giving a factor of $1.04$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Value of the first deposit",
          "workingLatex": "1000 \\times 1.04^{9}",
          "explanation": "The very first payment has been invested for $9$ years by the time the $10$th is made, so it grows by $1.04^{9}$. Each earlier deposit earns interest for one more year than the next.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add up all ten deposits",
          "workingLatex": "T = 1000\\left(1 + 1.04 + 1.04^{2} + \\cdots + 1.04^{9}\\right)",
          "explanation": "The total is the sum of every deposit with the interest each has earned. Factoring out the common $\\pounds 1000$ leaves a sum of powers of $1.04$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise a finite geometric series",
          "workingLatex": "a = 1000, \\quad r = 1.04, \\quad n = 10",
          "explanation": "Inside the bracket each term is $1.04$ times the one before, so this is a geometric series with first term $1000$, ratio $1.04$ and $10$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose the finite sum formula",
          "workingLatex": "S_n = \\dfrac{a\\left(r^{n} - 1\\right)}{r - 1}",
          "explanation": "Because the ratio $r = 1.04$ is greater than $1$, this form keeps every quantity positive and is the tidiest to use here.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "T = \\dfrac{1000\\left(1.04^{10} - 1\\right)}{1.04 - 1}",
          "explanation": "Putting $a = 1000$, $r = 1.04$ and $n = 10$ into the formula sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Build up the power (part 1)",
          "workingLatex": "1.04^{5} = 1.2166529024",
          "explanation": "Computing the fifth power first is a convenient halfway stage, since the tenth power is its square.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Build up the power (part 2)",
          "workingLatex": "1.04^{10} = \\left(1.04^{5}\\right)^{2} = 1.4802442849",
          "explanation": "Squaring $1.04^5$ gives $1.04^{10} = 1.4802442849$ (to $10$ decimal places), keeping the rounding tightly controlled.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the numerator",
          "workingLatex": "1.04^{10} - 1 = 0.4802442849",
          "explanation": "Subtracting $1$ from the growth factor gives the numerator of the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the denominator",
          "workingLatex": "1.04 - 1 = 0.04",
          "explanation": "The denominator $r - 1$ is simply the decimal interest rate $0.04$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Divide the two parts",
          "workingLatex": "\\dfrac{0.4802442849}{0.04} = 12.0061071",
          "explanation": "Dividing the numerator by $0.04$ gives the combined growth multiplier for the whole series of ten deposits.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Multiply by the deposit amount",
          "workingLatex": "T = 1000 \\times 12.0061071 = 12006.1071",
          "explanation": "Scaling by the $\\pounds 1000$ deposit gives the account total before rounding.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Round to the nearest penny",
          "workingLatex": "T \\approx 12006.11",
          "explanation": "Money is given to two decimal places, so $12006.1071$ rounds to $\\pounds 12006.11$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the answer",
          "workingLatex": "T = \\pounds 12006.11",
          "explanation": "So immediately after the $10$th payment the account is worth $\\pounds 12006.11$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = \\pounds 12006.11$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "compound interest",
      "logarithms",
      "geometric growth"
    ],
    "questionText": "An investor deposits $\\pounds 5000$ into an account earning $4\\%$ compound interest per year. Find the least number of whole years after which the amount in the account first exceeds $\\pounds 8000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the yearly multiplier",
          "workingLatex": "\\text{multiplier} = 1 + \\dfrac{4}{100} = 1.04",
          "explanation": "Each year the balance grows by $4\\%$, which means it becomes $100\\% + 4\\% = 104\\%$ of its previous value. Turning a percentage increase into a multiplier of $1.04$ lets us apply the growth repeatedly just by multiplying.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model the amount after n years",
          "workingLatex": "A_n = 5000 \\times 1.04^{n}",
          "explanation": "Starting from $\\pounds 5000$ and multiplying by $1.04$ once per year, after $n$ years we have multiplied by $1.04$ a total of $n$ times. Here $n$ is the number of full years elapsed, so the value after $n$ years is $a r^{n}$ rather than $a r^{n-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the inequality",
          "workingLatex": "5000 \\times 1.04^{n} > 8000",
          "explanation": "We want the first time the balance passes $\\pounds 8000$, so we ask for which $n$ the amount is strictly greater than $8000$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the power",
          "workingLatex": "1.04^{n} > \\dfrac{8000}{5000} = 1.6",
          "explanation": "Dividing both sides by the starting amount $5000$ removes it from the problem and leaves a clean statement about how much the money must grow: it must at least multiply by $1.6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\log\\left(1.04^{n}\\right) > \\log(1.6)",
          "explanation": "The unknown $n$ is trapped in the exponent. Logarithms are the tool that pulls an exponent down to ground level, and since $\\log$ is an increasing function it preserves the direction of the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the power law of logarithms",
          "workingLatex": "n \\log(1.04) > \\log(1.6)",
          "explanation": "The rule $\\log(x^n) = n \\log x$ brings the exponent out as a multiplier, turning the equation into a simple linear one in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide to isolate n",
          "workingLatex": "n > \\dfrac{\\log(1.6)}{\\log(1.04)}",
          "explanation": "We divide by $\\log(1.04)$. Because $1.04 > 1$ its logarithm is positive, so dividing keeps the inequality pointing the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the logarithms",
          "workingLatex": "n > \\dfrac{0.20412}{0.01703} = 11.98\\ldots",
          "explanation": "Substituting the numerical values of the logarithms gives a threshold of about $11.98$. This tells us $11$ whole years is not quite enough.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round up to a whole year",
          "workingLatex": "n = 12",
          "explanation": "Interest is credited in whole years, and $n$ must exceed $11.98$, so the smallest whole number that works is $12$. We always round up here because $11$ falls short of the requirement.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the boundary either side",
          "workingLatex": "5000 \\times 1.04^{11} = 7697.27, \\quad 5000 \\times 1.04^{12} = 8005.16",
          "explanation": "Testing the two candidate years confirms the choice: after $11$ years the balance is $\\pounds 7697.27$ (still below target), while after $12$ years it is $\\pounds 8005.16$, which is the first time it exceeds $\\pounds 8000$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "n = 12 \\text{ years}",
          "explanation": "So the amount first exceeds $\\pounds 8000$ after $12$ whole years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 12$ years"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "common ratio",
      "sum of terms"
    ],
    "questionText": "The third term of a geometric sequence is $12$ and the sixth term is $96$. Find the first term $a$, the common ratio $r$, and the sum of the first $8$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a r^{n-1}",
          "explanation": "Every term of a geometric sequence is the first term $a$ multiplied by the common ratio $r$ a fixed number of times. This formula lets us translate the two pieces of information we are given into equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write equations for the given terms",
          "workingLatex": "a r^{2} = 12, \\qquad a r^{5} = 96",
          "explanation": "The third term uses $n=3$ (so exponent $2$) and the sixth term uses $n=6$ (so exponent $5$). This gives two equations in the two unknowns $a$ and $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide the equations to eliminate a",
          "workingLatex": "\\dfrac{a r^{5}}{a r^{2}} = \\dfrac{96}{12}",
          "explanation": "Dividing one equation by the other cancels the common factor $a$ entirely, leaving an equation in $r$ alone. This is the standard trick for two-term problems.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify to a power of r",
          "workingLatex": "r^{3} = 8",
          "explanation": "On the left the $a$ cancels and $r^{5} \\div r^{2} = r^{3}$; on the right $96 \\div 12 = 8$. The gap of three positions between the terms is exactly why we get $r^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the common ratio",
          "workingLatex": "r = \\sqrt[3]{8} = 2",
          "explanation": "Taking the cube root undoes the cube. Since $2^3 = 8$, the common ratio is $r = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the first term",
          "workingLatex": "a \\times 2^{2} = 12 \\ \\Rightarrow\\ 4a = 12 \\ \\Rightarrow\\ a = 3",
          "explanation": "Substituting $r=2$ back into $a r^2 = 12$ gives a simple equation for $a$. Dividing by $4$ gives the first term $a = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{a\\left(r^{n} - 1\\right)}{r - 1}",
          "explanation": "Because $r = 2 > 1$ we use the version of the sum formula with $r^n - 1$ on top, which keeps every quantity positive and easy to handle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the known values",
          "workingLatex": "S_8 = \\dfrac{3\\left(2^{8} - 1\\right)}{2 - 1}",
          "explanation": "We put in $a = 3$, $r = 2$ and $n = 8$. The denominator $r - 1 = 1$ conveniently disappears.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the power",
          "workingLatex": "2^{8} = 256",
          "explanation": "Working out the power first (doubling eight times from $1$) keeps the arithmetic organised.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the sum",
          "workingLatex": "S_8 = 3 \\times (256 - 1) = 3 \\times 255 = 765",
          "explanation": "Subtracting $1$ then multiplying by $3$ gives the total of the first eight terms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answers",
          "workingLatex": "a = 3, \\quad r = 2, \\quad S_8 = 765",
          "explanation": "So the sequence starts at $3$, multiplies by $2$ each time, and its first eight terms add to $765$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3,\\ r = 2,\\ S_8 = 765$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric series",
      "sum of terms",
      "logarithms"
    ],
    "questionText": "A geometric series has first term $2$ and common ratio $3$. Find the least number of terms required for the sum of the series to exceed $1000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{a\\left(r^{n} - 1\\right)}{r - 1}",
          "explanation": "Since $r = 3 > 1$ we use the form with $r^n - 1$ on top so every term stays positive. This gives a formula for the running total of the first $n$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values",
          "workingLatex": "S_n = \\dfrac{2\\left(3^{n} - 1\\right)}{3 - 1} = 3^{n} - 1",
          "explanation": "Putting in $a = 2$ and $r = 3$ gives a denominator of $2$, which cancels the $2$ on top and simplifies the sum to the tidy expression $3^{n} - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the inequality",
          "workingLatex": "3^{n} - 1 > 1000",
          "explanation": "We want the first time the running total passes $1000$, so we require the sum to be strictly greater than $1000$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the power",
          "workingLatex": "3^{n} > 1001",
          "explanation": "Adding $1$ to both sides leaves the exponential term by itself, ready for logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logarithms",
          "workingLatex": "n \\log 3 > \\log 1001",
          "explanation": "The unknown $n$ sits in the exponent, so we take logs of both sides and use $\\log(3^{n}) = n \\log 3$ to bring it down. As $\\log$ is increasing, the inequality direction is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for n",
          "workingLatex": "n > \\dfrac{\\log 1001}{\\log 3}",
          "explanation": "Dividing by $\\log 3$ (which is positive, since $3 > 1$) isolates $n$ without flipping the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "n > \\dfrac{3.00043}{0.47712} = 6.29\\ldots",
          "explanation": "The numerical value shows the threshold is about $6.29$, so six terms is not quite enough.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round up to a whole number",
          "workingLatex": "n = 7",
          "explanation": "The number of terms must be a whole number greater than $6.29$, so the least value is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the boundary either side",
          "workingLatex": "S_6 = 3^{6} - 1 = 728, \\quad S_7 = 3^{7} - 1 = 2186",
          "explanation": "Six terms give a sum of $728$, still below $1000$, while seven terms give $2186$, which is the first total to exceed $1000$. This confirms $n = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "n = 7 \\text{ terms}",
          "explanation": "So at least $7$ terms are needed for the sum to exceed $1000$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 7$ terms"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "sum to infinity",
      "convergence",
      "common ratio"
    ],
    "questionText": "A convergent geometric series has first term $10$ and sum to infinity $40$. Find the common ratio, confirm that the series converges, and find the second term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}, \\qquad \\left| r \\right| < 1",
          "explanation": "A geometric series only has a finite sum to infinity when the terms shrink, which happens precisely when $\\left| r \\right| < 1$. The formula connects that total to the first term $a$ and the ratio $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values",
          "workingLatex": "40 = \\dfrac{10}{1 - r}",
          "explanation": "We are told the first term is $10$ and the infinite sum is $40$, so we place those numbers into the formula to get one equation in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for the denominator",
          "workingLatex": "1 - r = \\dfrac{10}{40} = \\dfrac{1}{4}",
          "explanation": "Multiplying both sides by $(1-r)$ and dividing by $40$ isolates $1 - r$. This turns the fraction equation into something we can solve directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for r",
          "workingLatex": "r = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}",
          "explanation": "Subtracting from $1$ gives the common ratio. A ratio of $\\dfrac{3}{4}$ means each term is three-quarters of the one before.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the ratio as a decimal",
          "workingLatex": "r = 0.75",
          "explanation": "Expressing $r$ as a decimal makes the convergence check and the term calculation easy to carry out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm convergence",
          "workingLatex": "\\left| 0.75 \\right| = 0.75 < 1",
          "explanation": "Because the modulus of the ratio is less than $1$, the terms get smaller and smaller, so the series genuinely converges and the sum to infinity is valid.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify against the given sum",
          "workingLatex": "\\dfrac{10}{1 - 0.75} = \\dfrac{10}{0.25} = 40",
          "explanation": "Substituting our ratio back reproduces the stated sum of $40$, which is a reassuring check that no slip was made.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the second term",
          "workingLatex": "u_2 = a r = 10 \\times 0.75",
          "explanation": "The second term is the first term multiplied once by the common ratio, so $u_2 = a r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the second term",
          "workingLatex": "u_2 = 7.5",
          "explanation": "Multiplying gives the value of the second term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answers",
          "workingLatex": "r = \\dfrac{3}{4}, \\quad \\left| r \\right| < 1, \\quad u_2 = 7.5",
          "explanation": "So the common ratio is $\\dfrac{3}{4}$, the series converges, and the second term is $7.5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = \\dfrac{3}{4},\\ u_2 = 7.5$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "sum to infinity",
      "partial sum",
      "simultaneous conditions"
    ],
    "questionText": "The sum of the first three terms of a geometric series is $7$, and its sum to infinity is $8$. Given that the series converges, find the first term $a$ and the common ratio $r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum to infinity",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}, \\qquad \\left| r \\right| < 1",
          "explanation": "The infinite sum exists only for a convergent series, meaning $\\left| r \\right| < 1$. This is one of our two given facts written algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum of the first three terms",
          "workingLatex": "S_3 = \\dfrac{a\\left(1 - r^{3}\\right)}{1 - r}",
          "explanation": "The partial sum formula with $n = 3$ gives the total of the first three terms. Writing it with $1 - r$ on the bottom lines it up nicely with the infinite sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Relate the two sums",
          "workingLatex": "S_3 = \\dfrac{a}{1 - r}\\left(1 - r^{3}\\right) = S_\\infty\\left(1 - r^{3}\\right)",
          "explanation": "The factor $\\dfrac{a}{1 - r}$ inside $S_3$ is exactly $S_\\infty$. Spotting this shared factor lets us combine the two conditions into a single equation in $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given values",
          "workingLatex": "7 = 8\\left(1 - r^{3}\\right)",
          "explanation": "Replacing $S_3$ with $7$ and $S_\\infty$ with $8$ removes $a$ from the problem for now and leaves an equation purely in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the bracket",
          "workingLatex": "1 - r^{3} = \\dfrac{7}{8}",
          "explanation": "Dividing both sides by $8$ isolates the expression containing $r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for r cubed",
          "workingLatex": "r^{3} = 1 - \\dfrac{7}{8} = \\dfrac{1}{8}",
          "explanation": "Rearranging shows that $r^3$ equals $\\dfrac{1}{8}$. The infinite tail beyond the third term accounts for exactly the missing $\\dfrac{1}{8}$ of the total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the cube root",
          "workingLatex": "r = \\sqrt[3]{\\dfrac{1}{8}} = \\dfrac{1}{2}",
          "explanation": "Cube-rooting undoes the cube. Since $\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8}$, the common ratio is $\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check convergence",
          "workingLatex": "\\left| \\dfrac{1}{2} \\right| = \\dfrac{1}{2} < 1",
          "explanation": "The ratio has modulus less than $1$, so the series really does converge and the use of $S_\\infty$ was justified.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the infinite sum to find a",
          "workingLatex": "8 = \\dfrac{a}{1 - \\tfrac{1}{2}} = \\dfrac{a}{\\tfrac{1}{2}} = 2a",
          "explanation": "Now that $r$ is known we return to the sum-to-infinity equation. Dividing by $\\dfrac{1}{2}$ is the same as multiplying by $2$, giving $8 = 2a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for a",
          "workingLatex": "a = 4",
          "explanation": "Dividing by $2$ gives the first term $a = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the first three terms sum",
          "workingLatex": "4 + 2 + 1 = 7 \\ \\checkmark",
          "explanation": "The terms are $4$, then $4 \\times \\tfrac{1}{2} = 2$, then $2 \\times \\tfrac{1}{2} = 1$. Their total is $7$, matching the first condition exactly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the sum to infinity",
          "workingLatex": "\\dfrac{4}{1 - \\tfrac{1}{2}} = \\dfrac{4}{\\tfrac{1}{2}} = 8 \\ \\checkmark",
          "explanation": "The infinite sum also comes out to $8$, so both stated conditions are satisfied by our values.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "a = 4, \\quad r = \\dfrac{1}{2}",
          "explanation": "So the series has first term $4$ and common ratio $\\dfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 4,\\ r = \\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "geometric sequences",
      "product of terms",
      "quadratic"
    ],
    "questionText": "Three numbers are consecutive terms of a geometric sequence. Their product is $64$ and their sum is $14$. Find the three numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a symmetric representation",
          "workingLatex": "\\dfrac{a}{r}, \\quad a, \\quad a r",
          "explanation": "Writing three consecutive geometric terms as $\\dfrac{a}{r}$, $a$, $ar$ centres them on the middle term $a$. This clever choice makes the product collapse beautifully, because the $r$'s will cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the product equation",
          "workingLatex": "\\dfrac{a}{r} \\times a \\times a r = a^{3} = 64",
          "explanation": "Multiplying the three terms, the $\\dfrac{1}{r}$ and the $r$ cancel, leaving simply $a^3$. This is exactly why the symmetric form is so useful for product problems.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the middle term",
          "workingLatex": "a = \\sqrt[3]{64} = 4",
          "explanation": "Taking the cube root of $64$ gives the middle term directly: $a = 4$. We now know the centre of the sequence without ever touching $r$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the sum equation",
          "workingLatex": "\\dfrac{a}{r} + a + a r = 14",
          "explanation": "The second condition is that the three terms add to $14$. We use the same symmetric form so we can substitute the known $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the middle term",
          "workingLatex": "\\dfrac{4}{r} + 4 + 4 r = 14",
          "explanation": "Replacing $a$ with $4$ leaves an equation involving only $r$, which we can now solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "\\dfrac{4}{r} + 4 r = 10",
          "explanation": "Subtracting the constant $4$ from both sides clears away the middle term and leaves the two outer terms balanced against $10$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "4 + 4 r^{2} = 10 r",
          "explanation": "Multiplying every term by $r$ removes the fraction. This is essential for turning the equation into a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange into standard form",
          "workingLatex": "4 r^{2} - 10 r + 4 = 0",
          "explanation": "Collecting all terms on one side gives a quadratic in $r$, which we can now factorise.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the quadratic",
          "workingLatex": "2 r^{2} - 5 r + 2 = 0",
          "explanation": "Every coefficient is even, so dividing by $2$ gives smaller numbers that are easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise",
          "workingLatex": "(2 r - 1)(r - 2) = 0",
          "explanation": "The quadratic factorises neatly. Setting each bracket to zero will give the possible ratios.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for r",
          "workingLatex": "r = \\dfrac{1}{2} \\quad \\text{or} \\quad r = 2",
          "explanation": "There are two possible common ratios. As we will see, they describe the very same set of three numbers, one read forwards and one backwards.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "List the terms for r = 2",
          "workingLatex": "\\dfrac{4}{2} = 2, \\quad 4, \\quad 4 \\times 2 = 8",
          "explanation": "Using $r = 2$ with middle term $4$ gives the three numbers $2$, $4$, $8$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the other ratio gives the same set",
          "workingLatex": "r = \\dfrac{1}{2} \\ \\Rightarrow\\ 8, \\ 4, \\ 2",
          "explanation": "Taking $r = \\dfrac{1}{2}$ just reverses the order, producing $8$, $4$, $2$. The three numbers are identical, so both ratios describe one answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify both conditions",
          "workingLatex": "2 \\times 4 \\times 8 = 64, \\quad 2 + 4 + 8 = 14 \\ \\checkmark",
          "explanation": "The product is $64$ and the sum is $14$, so both stated conditions hold exactly.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "2, \\quad 4, \\quad 8",
          "explanation": "So the three numbers are $2$, $4$ and $8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2,\\ 4,\\ 8$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "compound interest",
      "logarithms",
      "modelling"
    ],
    "questionText": "A sum of $\\pounds 2000$ is invested in an account that pays $6\\%$ compound interest per year. Find the least number of complete years after which the value of the investment first exceeds $\\pounds 3000$, and state the value at that time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the yearly multiplier",
          "workingLatex": "\\text{multiplier} = 1 + \\dfrac{6}{100} = 1.06",
          "explanation": "A $6\\%$ annual increase means the balance becomes $106\\%$ of its previous value each year. Using the multiplier $1.06$ lets us model repeated growth by repeated multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Model the value after n years",
          "workingLatex": "A_n = 2000 \\times 1.06^{n}",
          "explanation": "After $n$ complete years the initial $\\pounds 2000$ has been multiplied by $1.06$ exactly $n$ times. Here $n$ counts full years elapsed, so the value after $n$ years is $a r^{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the inequality",
          "workingLatex": "2000 \\times 1.06^{n} > 3000",
          "explanation": "We want the first year the balance climbs above $\\pounds 3000$, so we require the value to exceed $3000$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the power",
          "workingLatex": "1.06^{n} > \\dfrac{3000}{2000} = 1.5",
          "explanation": "Dividing by the starting amount reduces the problem to how much the money must grow: it must at least multiply by $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logarithms",
          "workingLatex": "\\log\\left(1.06^{n}\\right) > \\log(1.5)",
          "explanation": "The unknown $n$ is an exponent, and logarithms are what bring an exponent down to where we can solve for it. As $\\log$ is increasing, the inequality is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the power law",
          "workingLatex": "n \\log(1.06) > \\log(1.5)",
          "explanation": "The rule $\\log(x^n) = n \\log x$ turns the exponent into a coefficient, giving a linear inequality in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide to isolate n",
          "workingLatex": "n > \\dfrac{\\log(1.5)}{\\log(1.06)}",
          "explanation": "Because $1.06 > 1$, its logarithm is positive, so dividing keeps the inequality facing the same way.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "n > \\dfrac{0.17609}{0.02531} = 6.96\\ldots",
          "explanation": "The threshold is about $6.96$, which tells us six complete years is just short of the target.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round up",
          "workingLatex": "n = 7",
          "explanation": "Interest is added only at whole years, and $n$ must exceed $6.96$, so the least whole number of years is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check six years",
          "workingLatex": "2000 \\times 1.06^{6} = 2837.04",
          "explanation": "After six years the value is $\\pounds 2837.04$, still below $\\pounds 3000$, confirming that six years is not enough.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check seven years",
          "workingLatex": "2000 \\times 1.06^{7} = 3007.26",
          "explanation": "After seven years the value is $\\pounds 3007.26$, which is the first time it rises above $\\pounds 3000$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the result",
          "workingLatex": "n = 7 \\text{ complete years}",
          "explanation": "The boundary checks confirm that $7$ complete years is the first point at which the investment exceeds $\\pounds 3000$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer with the value",
          "workingLatex": "n = 7, \\quad A_7 \\approx \\pounds 3007.26",
          "explanation": "So after $7$ complete years the investment first exceeds $\\pounds 3000$, reaching about $\\pounds 3007.26$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7$ complete years, value $\\approx \\pounds 3007.26$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "sum to infinity",
      "quadratic in r",
      "convergence"
    ],
    "questionText": "A convergent geometric series has sum to infinity $8$ and second term $-6$. Form a quadratic equation in the common ratio $r$, solve it, and hence find the first term $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum to infinity",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r} = 8",
          "explanation": "The infinite sum is $8$, giving one relationship between $a$ and $r$. Convergence also requires $\\left| r \\right| < 1$, a fact we will use to pick the correct root later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make a the subject",
          "workingLatex": "a = 8(1 - r)",
          "explanation": "Multiplying both sides by $(1 - r)$ expresses the first term in terms of $r$, so we can eliminate $a$ from the second piece of information.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the second-term condition",
          "workingLatex": "u_2 = a r = -6",
          "explanation": "The second term is the first term multiplied once by $r$, and we are told it equals $-6$. A negative second term hints that $r$ itself is negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for a",
          "workingLatex": "8(1 - r)\\,r = -6",
          "explanation": "Replacing $a$ with $8(1 - r)$ produces a single equation in $r$, which will expand into a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand",
          "workingLatex": "8 r - 8 r^{2} = -6",
          "explanation": "Multiplying out the bracket prepares the equation for rearrangement into standard quadratic form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to standard form",
          "workingLatex": "8 r^{2} - 8 r - 6 = 0",
          "explanation": "Moving every term to one side and ordering by descending powers of $r$ gives the quadratic in its usual layout.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the quadratic",
          "workingLatex": "4 r^{2} - 4 r - 3 = 0",
          "explanation": "All coefficients share a factor of $2$, so dividing through by $2$ gives cleaner numbers to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise",
          "workingLatex": "(2 r - 3)(2 r + 1) = 0",
          "explanation": "The quadratic factorises exactly. Each bracket set to zero yields a candidate value of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the two roots",
          "workingLatex": "r = \\dfrac{3}{2} \\quad \\text{or} \\quad r = -\\dfrac{1}{2}",
          "explanation": "Solving each factor gives two possible common ratios. We must now decide which one gives a genuinely convergent series.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the first root",
          "workingLatex": "\\left| \\dfrac{3}{2} \\right| = 1.5 \\ \\geq\\ 1",
          "explanation": "For $r = \\dfrac{3}{2}$ the modulus is $1.5$, which is not less than $1$. Such a series has terms that grow without bound, so it has no sum to infinity and this root must be rejected.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the second root",
          "workingLatex": "\\left| -\\dfrac{1}{2} \\right| = \\dfrac{1}{2} \\ <\\ 1",
          "explanation": "For $r = -\\dfrac{1}{2}$ the modulus is $\\dfrac{1}{2} < 1$, so the terms shrink and the series converges. This is the root we keep.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Select the valid ratio",
          "workingLatex": "r = -\\dfrac{1}{2}",
          "explanation": "Only the convergent root is consistent with the problem stating a sum to infinity, so $r = -\\dfrac{1}{2}$ is chosen.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the first term",
          "workingLatex": "a = 8\\left(1 - \\left(-\\dfrac{1}{2}\\right)\\right) = 8 \\times \\dfrac{3}{2} = 12",
          "explanation": "Substituting $r = -\\dfrac{1}{2}$ into $a = 8(1 - r)$ gives $a = 12$. Note $1 - (-\\tfrac{1}{2}) = \\tfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the second term",
          "workingLatex": "u_2 = 12 \\times \\left(-\\dfrac{1}{2}\\right) = -6 \\ \\checkmark",
          "explanation": "Checking, the second term is $-6$ as required, so our values are consistent with the second condition.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify the sum to infinity",
          "workingLatex": "\\dfrac{12}{1 - \\left(-\\tfrac{1}{2}\\right)} = \\dfrac{12}{\\tfrac{3}{2}} = 8 \\ \\checkmark",
          "explanation": "The infinite sum also returns $8$, confirming both stated conditions hold.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the answer",
          "workingLatex": "r = -\\dfrac{1}{2}, \\quad a = 12",
          "explanation": "So the series has common ratio $-\\dfrac{1}{2}$ and first term $12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = -\\dfrac{1}{2},\\ a = 12$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "sum to infinity",
      "geometric modelling",
      "areas"
    ],
    "questionText": "A square has side length $8$ cm. A second square is drawn inside it by joining the midpoints of its sides; a third square is drawn by joining the midpoints of the second square, and this process continues indefinitely. Find the total area of all the squares.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the area of the first square",
          "workingLatex": "A_1 = 8^{2} = 64 \\text{ cm}^{2}",
          "explanation": "The largest square has side $8$ cm, so its area is $8^2 = 64$ square centimetres. This will be the first term of our series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the side of the next square",
          "workingLatex": "\\text{side} = \\sqrt{4^{2} + 4^{2}} = \\sqrt{32} = 4\\sqrt{2}",
          "explanation": "Joining midpoints, each side of the new square spans from one midpoint to an adjacent one, forming the hypotenuse of a right triangle with legs of $\\dfrac{8}{2} = 4$ cm. Pythagoras gives its length as $4\\sqrt{2}$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the area of the next square",
          "workingLatex": "A_2 = \\left(4\\sqrt{2}\\right)^{2} = 32 \\text{ cm}^{2}",
          "explanation": "Squaring the new side gives $16 \\times 2 = 32$ square centimetres, which is exactly half of the previous area. The midpoint construction always halves the area.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common ratio",
          "workingLatex": "r = \\dfrac{A_2}{A_1} = \\dfrac{32}{64} = \\dfrac{1}{2}",
          "explanation": "Each square has half the area of the one before, so the areas form a geometric sequence with common ratio $\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the pattern with the third square",
          "workingLatex": "A_3 = 32 \\times \\dfrac{1}{2} = 16 \\text{ cm}^{2}",
          "explanation": "Applying the same midpoint construction again halves the area once more, giving the third square an area of $16$ cm$^2$. Seeing the areas fall $64, 32, 16$ makes the constant halving ratio unmistakable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write out the series of areas",
          "workingLatex": "64 + 32 + 16 + 8 + \\cdots",
          "explanation": "The total area we want is the sum of all these square areas, which is an infinite geometric series because the process never stops.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the first term and ratio",
          "workingLatex": "a = 64, \\qquad r = \\dfrac{1}{2}",
          "explanation": "Identifying $a$ and $r$ is all we need to apply the sum-to-infinity formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check convergence",
          "workingLatex": "\\left| \\dfrac{1}{2} \\right| = \\dfrac{1}{2} < 1",
          "explanation": "Because the ratio has modulus less than $1$, the areas shrink toward zero and the total is finite, so a sum to infinity exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the sum to infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "This formula adds up infinitely many shrinking terms to a single finite value, which represents the combined area of all the squares.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the values",
          "workingLatex": "S_\\infty = \\dfrac{64}{1 - \\tfrac{1}{2}}",
          "explanation": "We place the first area $64$ on top and the ratio $\\dfrac{1}{2}$ into the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the denominator",
          "workingLatex": "1 - \\dfrac{1}{2} = \\dfrac{1}{2}",
          "explanation": "Working out $1 - \\dfrac{1}{2} = \\dfrac{1}{2}$ prepares the fraction for the final division.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the total",
          "workingLatex": "S_\\infty = \\dfrac{64}{\\tfrac{1}{2}} = 64 \\times 2 = 128",
          "explanation": "Dividing by $\\dfrac{1}{2}$ is the same as multiplying by $2$, giving a total area of $128$ square centimetres.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "S_\\infty = 128 \\text{ cm}^{2}",
          "explanation": "So the total area of all the squares, however many are drawn, is $128$ cm$^2$ — never more, no matter how far the process is continued.",
          "diagram": null
        }
      ],
      "finalAnswer": "$128 \\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "interval",
    "tags": [
      "convergence",
      "sum to infinity",
      "inequality"
    ],
    "questionText": "A geometric series is $4 + \\dfrac{4x}{3} + \\dfrac{4x^{2}}{9} + \\dfrac{4x^{3}}{27} + \\cdots$. Find the set of values of $x$ for which the series converges, and find its sum to infinity in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term",
          "workingLatex": "a = 4",
          "explanation": "The very first term of the series, with no factor of $x$ attached, is $4$. This is the constant $a$ in all our formulae.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the common ratio from the first two terms",
          "workingLatex": "r = \\dfrac{4x/3}{4} = \\dfrac{x}{3}",
          "explanation": "The common ratio is any term divided by the one before it. Dividing the second term by the first, the $4$'s cancel and leave $\\dfrac{x}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm the ratio with the next terms",
          "workingLatex": "\\dfrac{4x^{2}/9}{4x/3} = \\dfrac{x}{3}",
          "explanation": "Dividing the third term by the second gives the same ratio $\\dfrac{x}{3}$, confirming the series is genuinely geometric with $r = \\dfrac{x}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the convergence condition",
          "workingLatex": "\\left| r \\right| < 1",
          "explanation": "A geometric series converges precisely when the modulus of its common ratio is less than $1$, because only then do the terms shrink toward zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the condition",
          "workingLatex": "\\left| \\dfrac{x}{3} \\right| < 1",
          "explanation": "Substituting our ratio turns the convergence requirement into an inequality involving $x$ that we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the constant",
          "workingLatex": "\\dfrac{\\left| x \\right|}{3} < 1 \\ \\Rightarrow\\ \\left| x \\right| < 3",
          "explanation": "Since $\\left| \\dfrac{x}{3} \\right| = \\dfrac{\\left| x \\right|}{3}$, multiplying both sides by the positive number $3$ gives $\\left| x \\right| < 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the modulus as a double inequality",
          "workingLatex": "-3 < x < 3",
          "explanation": "The statement $\\left| x \\right| < 3$ means $x$ lies within $3$ units of zero, which is exactly the interval from $-3$ to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the convergence set",
          "workingLatex": "x \\in (-3, 3)",
          "explanation": "So the series converges for all $x$ strictly between $-3$ and $3$. Outside this range the terms do not shrink and no finite sum exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the sum to infinity",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "On the convergence set the infinite sum is finite and given by this formula, which we now express in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute a and r",
          "workingLatex": "S_\\infty = \\dfrac{4}{1 - \\dfrac{x}{3}}",
          "explanation": "Putting $a = 4$ and $r = \\dfrac{x}{3}$ into the formula gives the sum, though the denominator still needs tidying.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine the denominator",
          "workingLatex": "1 - \\dfrac{x}{3} = \\dfrac{3 - x}{3}",
          "explanation": "Writing $1$ as $\\dfrac{3}{3}$ lets us subtract the fractions and express the denominator as a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Divide by the fraction",
          "workingLatex": "S_\\infty = 4 \\div \\dfrac{3 - x}{3} = 4 \\times \\dfrac{3}{3 - x}",
          "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal, which clears the nested fraction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the sum",
          "workingLatex": "S_\\infty = \\dfrac{12}{3 - x}",
          "explanation": "Multiplying out the top gives a clean expression for the sum to infinity in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the full answer",
          "workingLatex": "-3 < x < 3, \\qquad S_\\infty = \\dfrac{12}{3 - x}",
          "explanation": "So the series converges exactly when $-3 < x < 3$, and on that interval its sum to infinity is $\\dfrac{12}{3 - x}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3 < x < 3,\\ S_\\infty = \\dfrac{12}{3 - x}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "geometric means",
      "geometric progression",
      "common ratio"
    ],
    "questionText": "Insert two geometric means between $4$ and $108$ so that the four numbers form a geometric progression. Find the two means and the common ratio.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the four-term progression",
          "workingLatex": "4, \\; 4r, \\; 4r^{2}, \\; 108",
          "explanation": "Inserting two geometric means between $4$ and $108$ produces a geometric progression with four terms. The first term is $4$ and each following term multiplies by the common ratio $r$, so the four terms are $4,\\ 4r,\\ 4r^{2}$ and finally $108$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write 108 as the fourth term",
          "workingLatex": "u_4 = 4r^{3} = 108",
          "explanation": "The last of the four terms is $108$. Using $u_n = a r^{n-1}$ with $a = 4$ and $n = 4$, the fourth term is $4r^{3}$, and this must equal $108$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate r cubed",
          "workingLatex": "r^{3} = \\dfrac{108}{4} = 27",
          "explanation": "Dividing both sides by $4$ leaves $r^{3}$ on its own. This strips away the first term so we can concentrate on the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the cube root",
          "workingLatex": "r = \\sqrt[3]{27} = 3",
          "explanation": "The cube root undoes the cube. Since $3^{3} = 27$, the common ratio is $r = 3$. A positive real cube root is the natural choice because all the given terms are positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the first mean",
          "workingLatex": "4r = 4 \\times 3 = 12",
          "explanation": "The first geometric mean is the second term, found by multiplying the first term $4$ by $r = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the second mean",
          "workingLatex": "4r^{2} = 4 \\times 9 = 36",
          "explanation": "The second geometric mean is the third term, $4r^{2}$. With $r^{2} = 9$ this gives $36$; equivalently it is $12 \\times 3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the fourth term",
          "workingLatex": "36 \\times 3 = 108",
          "explanation": "Multiplying the last mean by $r$ should return the given final value $108$, and it does, confirming the progression is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the progression",
          "workingLatex": "4, \\; 12, \\; 36, \\; 108",
          "explanation": "The completed geometric progression is $4, 12, 36, 108$, with each term three times the previous one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\text{means } 12 \\text{ and } 36, \\quad r = 3",
          "explanation": "So the two geometric means are $12$ and $36$, and the common ratio is $r = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The two geometric means are $12$ and $36$, with common ratio $r = 3$."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "sum to infinity",
      "recurring decimal",
      "geometric series"
    ],
    "questionText": "Express the recurring decimal $0.\\overline{27} = 0.272727\\ldots$ as a fraction in its simplest form by writing it as an infinite geometric series.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the decimal into repeating blocks",
          "workingLatex": "0.\\overline{27} = 0.27 + 0.0027 + 0.000027 + \\cdots",
          "explanation": "The digits $27$ repeat forever. Writing the number as $0.27$ plus $0.0027$ plus $0.000027$ and so on shows each block is the previous one shifted two decimal places to the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise a geometric series",
          "workingLatex": "a = \\dfrac{27}{100}, \\quad r = \\dfrac{1}{100}",
          "explanation": "Each term is $\\dfrac{1}{100}$ of the one before, because shifting two places right divides by $100$. So this is an infinite geometric series with first term $a = 0.27 = \\dfrac{27}{100}$ and common ratio $r = \\dfrac{1}{100}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the convergence condition",
          "workingLatex": "\\left| r \\right| = \\dfrac{1}{100} < 1",
          "explanation": "An infinite geometric series has a finite sum only when $\\left| r \\right| < 1$. Here $r = \\dfrac{1}{100}$ is comfortably inside that range, so the sum to infinity exists.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the sum to infinity",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "For a convergent geometric series the infinite sum collapses to the single fraction $\\dfrac{a}{1-r}$. This value will be the exact worth of the decimal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "S_\\infty = \\dfrac{\\frac{27}{100}}{1 - \\frac{1}{100}}",
          "explanation": "Putting $a = \\dfrac{27}{100}$ and $r = \\dfrac{1}{100}$ into the formula sets up the exact fraction we now simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the denominator",
          "workingLatex": "1 - \\dfrac{1}{100} = \\dfrac{99}{100}",
          "explanation": "Writing $1$ as $\\dfrac{100}{100}$ and subtracting gives $\\dfrac{99}{100}$ for the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide the fractions",
          "workingLatex": "S_\\infty = \\dfrac{27}{100} \\times \\dfrac{100}{99} = \\dfrac{27}{99}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal. The factors of $100$ cancel, leaving $\\dfrac{27}{99}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{27}{99} = \\dfrac{3}{11}",
          "explanation": "Both $27$ and $99$ share a factor of $9$; dividing top and bottom by $9$ gives the fraction in its lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by division",
          "workingLatex": "3 \\div 11 = 0.2727\\ldots",
          "explanation": "Dividing $3$ by $11$ reproduces the original recurring decimal, confirming the fraction is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "0.\\overline{27} = \\dfrac{3}{11}",
          "explanation": "So the recurring decimal equals $\\dfrac{3}{11}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.\\overline{27} = \\dfrac{3}{11}$"
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "proof",
      "geometric series",
      "sum formula"
    ],
    "questionText": "A geometric series has first term $a$ and common ratio $r$, with $r \\neq 1$. Prove that the sum of the first $n$ terms is $S_n = \\dfrac{a(1 - r^{n})}{1 - r}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the aim",
          "workingLatex": "S_n = a + ar + ar^{2} + \\cdots + ar^{n-1}",
          "explanation": "We want a closed formula for the sum of the first $n$ terms of a geometric series with first term $a$ and common ratio $r$. We begin by writing that sum out in full.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the partial sum",
          "workingLatex": "S_n = \\sum_{k=0}^{n-1} ar^{k}",
          "explanation": "Giving the sum the name $S_n$ lets us treat it as a single object to manipulate. The exponents run from $0$ (the first term $a$) up to $n-1$ (the last term).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the final term",
          "workingLatex": "\\text{last term} = ar^{n-1}",
          "explanation": "The $n$th term uses the exponent $n-1$ because the first term needs no multiplication by $r$. Keeping track of this final term matters for the subtraction to come.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the whole sum by r",
          "workingLatex": "rS_n = ar + ar^{2} + ar^{3} + \\cdots + ar^{n}",
          "explanation": "Multiplying every term by $r$ pushes each one up to the next power. This is the key idea: the new series is almost identical to the old one, just displaced by one position.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Align the two series",
          "workingLatex": "S_n = a + ar + ar^{2} + \\cdots + ar^{n-1}",
          "explanation": "We place $S_n$ and $rS_n$ underneath one another so equal powers of $r$ line up in the same column. Every middle term $ar, ar^{2}, \\ldots, ar^{n-1}$ appears in both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Restate the multiplied series",
          "workingLatex": "rS_n = \\quad\\; ar + ar^{2} + \\cdots + ar^{n-1} + ar^{n}",
          "explanation": "Written this way, only the first line has a lone $a$ at the start, and only the second line has a lone $ar^{n}$ at the end; everything between them matches term for term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract the two equations",
          "workingLatex": "S_n - rS_n = a - ar^{n}",
          "explanation": "Subtracting the second line from the first cancels every matching middle term in pairs. All that survives is the very first term $a$ and the very last term $-ar^{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor the left-hand side",
          "workingLatex": "S_n(1 - r) = a - ar^{n}",
          "explanation": "On the left, $S_n$ is common to both terms, so it factors out as $S_n(1 - r)$. This is why the multiply-and-subtract trick works so well: it turns a long sum into a product.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factor the right-hand side",
          "workingLatex": "S_n(1 - r) = a(1 - r^{n})",
          "explanation": "On the right, $a$ is common to both terms, giving $a(1 - r^{n})$. Both sides are now compact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Divide by (1 - r)",
          "workingLatex": "S_n = \\dfrac{a(1 - r^{n})}{1 - r}, \\quad r \\neq 1",
          "explanation": "Dividing by $1 - r$ isolates $S_n$. This step is valid only when $r \\neq 1$, since dividing by zero is not allowed; the case $r = 1$ is treated separately.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the special case",
          "workingLatex": "r = 1 \\implies S_n = a + a + \\cdots + a = na",
          "explanation": "If $r = 1$ every term equals $a$, so the sum is simply $na$. The formula does not apply there, which is exactly why the derivation required $r \\neq 1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Give the equivalent form",
          "workingLatex": "S_n = \\dfrac{a(r^{n} - 1)}{r - 1}",
          "explanation": "Multiplying numerator and denominator by $-1$ gives an equivalent version that is tidier when $r > 1$, since it keeps both parts positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the result",
          "workingLatex": "S_n = \\dfrac{a(1 - r^{n})}{1 - r} \\quad (r \\neq 1) \\qquad \\blacksquare",
          "explanation": "We have shown, purely by algebra, that the sum of the first $n$ terms of any geometric series with $r \\neq 1$ is $\\dfrac{a(1 - r^{n})}{1 - r}$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "It is proved that $S_n = \\dfrac{a(1 - r^{n})}{1 - r}$ for $r \\neq 1$ (and $S_n = na$ when $r = 1$)."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "proof",
      "sum to infinity",
      "convergence"
    ],
    "questionText": "Starting from the formula for the sum of the first $n$ terms, explain why a geometric series with $\\left| r \\right| < 1$ has the sum to infinity $S_\\infty = \\dfrac{a}{1 - r}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the finite sum formula",
          "workingLatex": "S_n = \\dfrac{a(1 - r^{n})}{1 - r}",
          "explanation": "The sum to infinity is the limit of the partial sums, so we begin with the known formula for the sum of the first $n$ terms of a geometric series (valid for $r \\neq 1$).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the fraction into two parts",
          "workingLatex": "S_n = \\dfrac{a}{1 - r} - \\dfrac{a\\,r^{n}}{1 - r}",
          "explanation": "Separating the $1$ and the $r^{n}$ in the numerator shows the partial sum as a fixed piece $\\dfrac{a}{1-r}$ minus a piece that depends on $n$. Isolating the $n$-dependent part lets us watch what it does as $n$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Focus on the n-dependent term",
          "workingLatex": "\\dfrac{a\\,r^{n}}{1 - r}",
          "explanation": "Only $r^{n}$ changes as $n$ increases; $a$ and $1-r$ are constants. So the behaviour of the whole sum as $n \\to \\infty$ is controlled entirely by $r^{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assume the convergence condition",
          "workingLatex": "\\left| r \\right| < 1",
          "explanation": "Suppose the common ratio satisfies $\\left| r \\right| < 1$, meaning each term is smaller in size than the one before. This is the condition under which the series can settle to a finite total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe repeated multiplication",
          "workingLatex": "\\left| r^{n} \\right| = \\left| r \\right|^{n}",
          "explanation": "Raising $r$ to the $n$th power multiplies a number of size less than $1$ by itself $n$ times. Each multiplication shrinks the magnitude, so $\\left| r \\right|^{n}$ keeps getting smaller.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Illustrate with a value",
          "workingLatex": "r = \\tfrac{1}{2}: \\; r^{1} = \\tfrac{1}{2}, \\; r^{2} = \\tfrac{1}{4}, \\; r^{10} = \\tfrac{1}{1024}",
          "explanation": "Taking $r = \\dfrac{1}{2}$ as an example, the powers march towards $0$ very quickly. Nothing halts this shrinking, so the powers can be made as close to $0$ as we wish.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the limit of the powers",
          "workingLatex": "\\left| r \\right| < 1 \\implies r^{n} \\to 0 \\ \\text{as} \\ n \\to \\infty",
          "explanation": "Because the magnitude $\\left| r \\right|^{n}$ decreases without bound towards $0$, the term $r^{n}$ itself tends to $0$. This is the crucial fact that makes the infinite sum finite.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the limit of the n-dependent term",
          "workingLatex": "\\dfrac{a\\,r^{n}}{1 - r} \\to \\dfrac{a \\times 0}{1 - r} = 0",
          "explanation": "Since $r^{n} \\to 0$ and the rest is constant, the whole $n$-dependent piece vanishes in the limit. The tail of the series contributes nothing once infinitely many terms are added.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Let n tend to infinity",
          "workingLatex": "S_\\infty = \\lim_{n \\to \\infty} S_n = \\dfrac{a}{1 - r} - 0",
          "explanation": "The partial sum is the constant part minus the vanishing part. As $n \\to \\infty$ only the constant part remains.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the sum to infinity",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "So the partial sums close in on the single value $\\dfrac{a}{1-r}$. This limiting value is the sum to infinity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Explain why the condition is essential",
          "workingLatex": "\\left| r \\right| \\geq 1 \\implies r^{n} \\not\\to 0",
          "explanation": "If $\\left| r \\right| \\geq 1$ the powers $r^{n}$ do not shrink to $0$ — they stay the same size or grow — so the $n$-dependent term never disappears and no finite limit exists. The series then diverges.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the result",
          "workingLatex": "S_1, S_2, S_3, \\ldots \\to \\dfrac{a}{1 - r}",
          "explanation": "Adding more and more terms produces partial sums that get ever closer to $\\dfrac{a}{1-r}$ without overshooting it. The infinite sum is defined as exactly this limiting value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\left| r \\right| < 1 \\implies S_\\infty = \\dfrac{a}{1 - r} \\qquad \\blacksquare",
          "explanation": "We have derived, as a limit of the finite-sum formula, that when $\\left| r \\right| < 1$ the sum to infinity is $\\dfrac{a}{1-r}$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "It is shown that when $\\left| r \\right| < 1$, $r^{n} \\to 0$ and hence $S_n \\to S_\\infty = \\dfrac{a}{1 - r}$."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "geometric series",
      "logarithms",
      "sum of terms"
    ],
    "questionText": "The geometric series $3 + 6 + 12 + \\cdots$ is summed term by term. Find the least number of terms required for the sum first to exceed $3\\,000\\,000$, and state that sum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the series",
          "workingLatex": "a = 3, \\quad r = \\dfrac{6}{3} = 2",
          "explanation": "The terms $3, 6, 12, \\ldots$ double each time, so this is a geometric series with first term $a = 3$ and common ratio $r = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Select the sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^{n} - 1)}{r - 1}",
          "explanation": "Because $r = 2 > 1$ it is neatest to use the version with $r^{n} - 1$ on top and $r - 1$ underneath, keeping every quantity positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "S_n = \\dfrac{3(2^{n} - 1)}{2 - 1} = 3(2^{n} - 1)",
          "explanation": "With $a = 3$ and $r = 2$ the denominator is $1$, so the sum simplifies neatly to $3(2^{n} - 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the required inequality",
          "workingLatex": "3(2^{n} - 1) > 3\\,000\\,000",
          "explanation": "We need the running total to exceed three million, so we set the sum formula greater than $3\\,000\\,000$ and solve for the smallest whole number $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 3",
          "workingLatex": "2^{n} - 1 > 1\\,000\\,000",
          "explanation": "Dividing through by $3$ clears the front factor and reduces the target to one million.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Isolate the power",
          "workingLatex": "2^{n} > 1\\,000\\,001",
          "explanation": "Adding $1$ to both sides leaves the power of $2$ by itself, ready for logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\log(2^{n}) > \\log(1\\,000\\,001)",
          "explanation": "The unknown $n$ is trapped in an exponent, and logarithms are the tool that brings an exponent down to ground level. Logarithm is an increasing function, so the inequality direction is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the power law of logs",
          "workingLatex": "n \\log 2 > \\log(1\\,000\\,001)",
          "explanation": "The law $\\log(x^{n}) = n\\log x$ moves $n$ out in front as a simple multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide by log 2",
          "workingLatex": "n > \\dfrac{\\log(1\\,000\\,001)}{\\log 2}",
          "explanation": "Since $\\log 2 > 0$, dividing by it keeps the inequality pointing the same way and isolates $n$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the logarithms",
          "workingLatex": "n > \\dfrac{6.0000004}{0.30103} = 19.93\\ldots",
          "explanation": "Using $\\log(1\\,000\\,001) \\approx 6.0000004$ and $\\log 2 \\approx 0.30103$, the quotient is about $19.93$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round up to the next integer",
          "workingLatex": "n = 20",
          "explanation": "Since $n$ counts terms it must be a whole number, and it must be strictly greater than $19.93$. The smallest such integer is $20$, so we round up rather than to the nearest.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the term below",
          "workingLatex": "S_{19} = 3(2^{19} - 1) = 3(524\\,287) = 1\\,572\\,861",
          "explanation": "Testing $n = 19$: the sum is $1\\,572\\,861$, which is below three million. So $19$ terms are not enough, confirming we truly need more.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check n = 20",
          "workingLatex": "S_{20} = 3(2^{20} - 1) = 3(1\\,048\\,575) = 3\\,145\\,725",
          "explanation": "Testing $n = 20$: the sum is $3\\,145\\,725$, which does exceed three million. So $20$ is the first term count that works.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "n = 20, \\quad S_{20} = 3\\,145\\,725",
          "explanation": "So $20$ terms are needed for the sum first to exceed $3\\,000\\,000$, and that sum is $3\\,145\\,725$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 20$ terms are required, giving $S_{20} = 3\\,145\\,725$."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic progression",
      "geometric progression",
      "common ratio"
    ],
    "questionText": "The $1$st, $2$nd and $4$th terms of an arithmetic progression (with non-zero first term and non-zero common difference) form a geometric progression. Find the common ratio of the geometric progression.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the arithmetic progression terms",
          "workingLatex": "u_1 = a, \\quad u_2 = a + d, \\quad u_4 = a + 3d",
          "explanation": "An arithmetic progression has first term $a$ and common difference $d$, so its $n$th term is $a + (n-1)d$. The $1$st, $2$nd and $4$th terms are therefore $a$, $a+d$ and $a+3d$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the geometric condition",
          "workingLatex": "\\dfrac{u_2}{u_1} = \\dfrac{u_4}{u_2}",
          "explanation": "For three numbers to form a geometric progression the ratio between consecutive terms must be constant. Equivalently, the middle term is the geometric mean of its neighbours.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the geometric-mean relationship",
          "workingLatex": "u_2^{\\,2} = u_1 \\, u_4",
          "explanation": "Cross-multiplying the equal ratios gives the tidy condition that the square of the middle term equals the product of the two outer terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the AP expressions",
          "workingLatex": "(a + d)^{2} = a(a + 3d)",
          "explanation": "Replacing each term by its arithmetic-progression expression turns the geometric condition into an equation in $a$ and $d$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the left-hand side",
          "workingLatex": "a^{2} + 2ad + d^{2} = a(a + 3d)",
          "explanation": "Expanding $(a+d)^{2}$ with the square-of-a-sum pattern prepares both sides for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the right-hand side",
          "workingLatex": "a^{2} + 2ad + d^{2} = a^{2} + 3ad",
          "explanation": "Multiplying out the right-hand side gives $a^{2} + 3ad$, so both sides are now fully expanded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract common terms",
          "workingLatex": "2ad + d^{2} = 3ad",
          "explanation": "The $a^{2}$ terms are identical on both sides and cancel, simplifying the equation considerably.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all terms on one side",
          "workingLatex": "d^{2} - ad = 0",
          "explanation": "Bringing the $3ad$ across and combining with $2ad$ leaves $d^{2} - ad = 0$, a neat factorable relation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factor out d",
          "workingLatex": "d(d - a) = 0",
          "explanation": "Both terms share a factor of $d$, so factoring gives a product equal to zero. A product is zero exactly when one of its factors is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Read off the possibilities",
          "workingLatex": "d = 0 \\quad \\text{or} \\quad d = a",
          "explanation": "Either the common difference is $0$, or it equals the first term $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Discard the trivial case",
          "workingLatex": "d = 0 \\implies u_1 = u_2 = u_4 = a",
          "explanation": "If $d = 0$ the arithmetic progression is constant, giving a degenerate geometric progression of ratio $1$. Since the common difference is stated to be non-zero, we take $d = a$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the three terms with d = a",
          "workingLatex": "u_1 = a, \\quad u_2 = 2a, \\quad u_4 = 4a",
          "explanation": "Putting $d = a$ into the three terms gives $a$, $2a$ and $4a$: the actual numbers that form the geometric progression.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the common ratio",
          "workingLatex": "r = \\dfrac{u_2}{u_1} = \\dfrac{2a}{a} = 2",
          "explanation": "Dividing the second term by the first gives the common ratio of the geometric progression.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify with the next ratio",
          "workingLatex": "\\dfrac{u_4}{u_2} = \\dfrac{4a}{2a} = 2 = r",
          "explanation": "The ratio from the second term to the fourth is also $2$, confirming $a, 2a, 4a$ is genuinely geometric with common ratio $2$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "r = 2",
          "explanation": "So the common ratio of the geometric progression is $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The common ratio of the geometric progression is $r = 2$ (occurring when $d = a$)."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "sum to infinity",
      "common ratio",
      "geometric series"
    ],
    "questionText": "A convergent geometric series has first term $a$ and common ratio $r$. Its sum to infinity is $4$ times its first term, so $S_\\infty = 4a$. Find $r$, and hence find the sum of the first three terms as a fraction of $S_\\infty$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the sum to infinity",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "A convergent geometric series with first term $a$ and ratio $r$ (with $\\left| r \\right| < 1$) sums to $\\dfrac{a}{1-r}$. We will use the given relationship to pin down $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the given relationship",
          "workingLatex": "\\dfrac{a}{1 - r} = 4a",
          "explanation": "We are told the sum to infinity is four times the first term, so we set $\\dfrac{a}{1-r}$ equal to $4a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide through by a",
          "workingLatex": "\\dfrac{1}{1 - r} = 4 \\qquad (a \\neq 0)",
          "explanation": "Assuming $a \\neq 0$ (otherwise every term is zero), we cancel $a$ from both sides, leaving an equation in $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for 1 - r",
          "workingLatex": "1 - r = \\dfrac{1}{4}",
          "explanation": "Taking reciprocals of both sides (both are non-zero) turns $\\dfrac{1}{1-r} = 4$ into $1 - r = \\dfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find r",
          "workingLatex": "r = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}",
          "explanation": "Rearranging gives $r = \\dfrac{3}{4}$, the common ratio.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the convergence condition",
          "workingLatex": "\\left| r \\right| = \\dfrac{3}{4} < 1",
          "explanation": "The sum to infinity exists only when $\\left| r \\right| < 1$. Since $\\dfrac{3}{4} < 1$, using $S_\\infty$ was legitimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the sum of the first three terms",
          "workingLatex": "S_3 = \\dfrac{a(1 - r^{3})}{1 - r}",
          "explanation": "The sum of the first three terms uses the finite geometric-sum formula with $n = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the ratio of the two sums",
          "workingLatex": "\\dfrac{S_3}{S_\\infty} = \\dfrac{\\dfrac{a(1 - r^{3})}{1 - r}}{\\dfrac{a}{1 - r}}",
          "explanation": "Rather than compute both sums separately, we compare them directly by dividing. Much will cancel, which is quicker and avoids needing the value of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel common factors",
          "workingLatex": "\\dfrac{S_3}{S_\\infty} = 1 - r^{3}",
          "explanation": "The factors $a$ and $\\dfrac{1}{1-r}$ appear in both numerator and denominator and cancel, leaving the elegant result $1 - r^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate r cubed",
          "workingLatex": "r^{3} = \\left(\\dfrac{3}{4}\\right)^{3} = \\dfrac{27}{64}",
          "explanation": "Cubing $\\dfrac{3}{4}$ means cubing top and bottom: $3^{3} = 27$ and $4^{3} = 64$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute 1 minus r cubed",
          "workingLatex": "1 - \\dfrac{27}{64} = \\dfrac{37}{64}",
          "explanation": "Writing $1$ as $\\dfrac{64}{64}$ and subtracting gives $\\dfrac{37}{64}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the fraction",
          "workingLatex": "\\dfrac{S_3}{S_\\infty} = \\dfrac{37}{64}",
          "explanation": "So the sum of the first three terms is $\\dfrac{37}{64}$ of the sum to infinity — already most of the way to the infinite total.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sanity check with a value",
          "workingLatex": "a = 4: \\; S_\\infty = 16, \\; S_3 = 4 + 3 + \\tfrac{9}{4} = \\tfrac{37}{4}, \\; \\dfrac{37/4}{16} = \\tfrac{37}{64}",
          "explanation": "Choosing $a = 4$ gives $S_\\infty = 16$ and $S_3 = \\dfrac{37}{4}$; their ratio is indeed $\\dfrac{37}{64}$, confirming the result independently.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "r = \\dfrac{3}{4}, \\qquad \\dfrac{S_3}{S_\\infty} = \\dfrac{37}{64}",
          "explanation": "So the common ratio is $r = \\dfrac{3}{4}$, and the first three terms make up $\\dfrac{37}{64}$ of the sum to infinity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = \\dfrac{3}{4}$, and the first three terms give $\\dfrac{S_3}{S_\\infty} = \\dfrac{37}{64}$."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "sum to infinity",
      "modelling",
      "bouncing ball"
    ],
    "questionText": "A ball is dropped from a height of $10$ m onto a level floor. After each bounce it rises to $0.6$ of the height from which it fell. Assuming it keeps bouncing, find the total vertical distance the ball travels.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Account for the initial drop",
          "workingLatex": "\\text{initial drop} = 10 \\text{ m}",
          "explanation": "Before any bounce the ball simply falls $10$ m. This first descent stands on its own and is not part of the repeating bounce pattern, so we set it aside to add at the end.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first rebound height",
          "workingLatex": "10 \\times 0.6 = 6 \\text{ m}",
          "explanation": "After hitting the floor the ball rises to $0.6$ of the fall height, so the first rebound reaches $6$ m. It will then fall the same $6$ m back down.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the rebound heights",
          "workingLatex": "6, \\; 6 \\times 0.6 = 3.6, \\; 3.6 \\times 0.6 = 2.16, \\; \\ldots",
          "explanation": "Each rebound is $0.6$ of the previous one, so the successive peak heights $6, 3.6, 2.16, \\ldots$ form a geometric sequence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note each rebound is travelled twice",
          "workingLatex": "\\text{each bounce distance} = 2 \\times (\\text{peak height})",
          "explanation": "Every rebound to a peak height is followed by a fall of the same height, so each bounce after the first drop contributes twice its peak height to the total distance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the geometric series of peaks",
          "workingLatex": "a = 6, \\quad r = 0.6",
          "explanation": "The peak heights form a geometric series with first term $a = 6$ and common ratio $r = 0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the convergence condition",
          "workingLatex": "\\left| r \\right| = 0.6 < 1",
          "explanation": "Because $\\left| r \\right| < 1$ the rebounds shrink towards nothing, so the total of infinitely many bounces is a finite number and $S_\\infty$ may be used.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sum the peak heights to infinity",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r} = \\dfrac{6}{1 - 0.6}",
          "explanation": "The sum to infinity formula adds up all the peak heights at once. This gives the total upward distance travelled over all the bounces.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the sum of peaks",
          "workingLatex": "S_\\infty = \\dfrac{6}{0.4} = 15 \\text{ m}",
          "explanation": "Dividing $6$ by $0.4$ gives $15$ m as the total of all the rising distances combined.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Include the matching descents",
          "workingLatex": "\\text{bounce distance} = 2 \\times 15 = 30 \\text{ m}",
          "explanation": "Each of those $15$ m of rising is mirrored by an equal $15$ m of falling, so the bouncing phase covers $30$ m in total.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the initial drop",
          "workingLatex": "\\text{total} = 10 + 30",
          "explanation": "Finally we bring back the initial $10$ m descent that we set aside, adding it to the $30$ m of bouncing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the total distance",
          "workingLatex": "\\text{total} = 40 \\text{ m}",
          "explanation": "Adding gives a grand total of $40$ m of vertical travel.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check with a combined form",
          "workingLatex": "10 + 2\\left(\\dfrac{6}{0.4}\\right) = 10 + 30 = 40",
          "explanation": "Writing the whole calculation in one line — first drop plus twice the sum of the rebound peaks — reproduces $40$ m, a useful check on the structure.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on the finite total",
          "workingLatex": "\\left| r \\right| = 0.6 < 1 \\Rightarrow \\text{total is finite}",
          "explanation": "Even though the ball bounces infinitely often, the distances shrink fast enough that the total settles to a finite $40$ m — the hallmark of a convergent geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "\\text{total distance} = 40 \\text{ m}",
          "explanation": "So the ball travels a total vertical distance of $40$ m.",
          "diagram": null
        }
      ],
      "finalAnswer": "The ball travels a total vertical distance of $40$ m."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "sum to infinity",
      "quadratic",
      "common ratio"
    ],
    "questionText": "A convergent geometric series has sum to infinity $S_\\infty = 9$, and the sum of its first two terms is $u_1 + u_2 = 5$. Form and solve a quadratic in $r$, and find all valid values of the first term $a$ and common ratio $r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the sum to infinity equation",
          "workingLatex": "\\dfrac{a}{1 - r} = 9",
          "explanation": "The sum to infinity of the series is $9$, so $\\dfrac{a}{1-r} = 9$. This ties together the first term $a$ and the ratio $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make a the subject",
          "workingLatex": "a = 9(1 - r)",
          "explanation": "Multiplying both sides by $1 - r$ expresses $a$ in terms of $r$. Having $a$ ready to substitute lets us reduce everything to one unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the sum of the first two terms",
          "workingLatex": "u_1 + u_2 = a + ar = 5",
          "explanation": "The first term is $a$ and the second is $ar$, so their sum is $a + ar$, which is given as $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor the second equation",
          "workingLatex": "a(1 + r) = 5",
          "explanation": "Factoring out $a$ gives $a(1 + r) = 5$, a compact form ready for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute a into the second equation",
          "workingLatex": "9(1 - r)(1 + r) = 5",
          "explanation": "Replacing $a$ with $9(1-r)$ removes $a$ entirely, leaving a single equation in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand using difference of squares",
          "workingLatex": "9(1 - r^{2}) = 5",
          "explanation": "The product $(1-r)(1+r)$ is the difference of two squares, $1 - r^{2}$, which tidies the equation nicely.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply out",
          "workingLatex": "9 - 9r^{2} = 5",
          "explanation": "Distributing the $9$ gives $9 - 9r^{2} = 5$, a quadratic in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect into a quadratic",
          "workingLatex": "9r^{2} = 4",
          "explanation": "Moving terms across gives $9r^{2} = 4$. There is no linear term, so this is a straightforward quadratic to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for r squared",
          "workingLatex": "r^{2} = \\dfrac{4}{9}",
          "explanation": "Dividing by $9$ isolates $r^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take square roots",
          "workingLatex": "r = \\pm \\dfrac{2}{3}",
          "explanation": "Taking the square root gives two possibilities, $r = \\dfrac{2}{3}$ or $r = -\\dfrac{2}{3}$. Both signs must be considered.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the convergence condition for each",
          "workingLatex": "\\left| \\tfrac{2}{3} \\right| < 1 \\quad \\text{and} \\quad \\left| -\\tfrac{2}{3} \\right| < 1",
          "explanation": "The sum to infinity is only valid when $\\left| r \\right| < 1$. Both values have magnitude $\\dfrac{2}{3} < 1$, so both are genuinely acceptable and each gives a valid convergent series.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find a for the first ratio",
          "workingLatex": "r = \\tfrac{2}{3}: \\; a = 9\\left(1 - \\tfrac{2}{3}\\right) = 9 \\times \\tfrac{1}{3} = 3",
          "explanation": "Substituting $r = \\dfrac{2}{3}$ into $a = 9(1-r)$ gives $a = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find a for the second ratio",
          "workingLatex": "r = -\\tfrac{2}{3}: \\; a = 9\\left(1 + \\tfrac{2}{3}\\right) = 9 \\times \\tfrac{5}{3} = 15",
          "explanation": "Substituting $r = -\\dfrac{2}{3}$ gives $a = 9 \\times \\dfrac{5}{3} = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify both solutions",
          "workingLatex": "(a,r)=(3,\\tfrac{2}{3}): \\, 3 + 2 = 5; \\quad (15,-\\tfrac{2}{3}): \\, 15 - 10 = 5",
          "explanation": "Checking $u_1 + u_2$: for $(3, \\tfrac{2}{3})$ it is $3 + 2 = 5$, and for $(15, -\\tfrac{2}{3})$ it is $15 - 10 = 5$. Both satisfy every condition, and each has $S_\\infty = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "(a, r) = \\left(3, \\tfrac{2}{3}\\right) \\quad \\text{or} \\quad \\left(15, -\\tfrac{2}{3}\\right)",
          "explanation": "So there are two valid geometric series: $a = 3$ with $r = \\dfrac{2}{3}$, or $a = 15$ with $r = -\\dfrac{2}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two solutions: $a = 3,\\ r = \\dfrac{2}{3}$ or $a = 15,\\ r = -\\dfrac{2}{3}$ (both satisfy $\\left| r \\right| < 1$)."
    }
  },
  {
    "id": "al.y2.pure.geometric-series.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Geometric sequences and series",
    "subtopicId": "al.y2.pure.geometric-series",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "geometric progression",
      "simultaneous equations",
      "common ratio"
    ],
    "questionText": "Three positive numbers are in geometric progression. Their product is $64$ and their sum is $14$. Find the three numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the terms symmetrically",
          "workingLatex": "\\dfrac{a}{r}, \\quad a, \\quad ar",
          "explanation": "Writing three geometric terms as $\\dfrac{a}{r}$, $a$, $ar$ makes the middle term the anchor. This symmetric choice makes the product especially simple because the $r$ factors will cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the product",
          "workingLatex": "\\dfrac{a}{r} \\times a \\times ar = a^{3}",
          "explanation": "Multiplying the three terms, the $\\dfrac{1}{r}$ and the $r$ cancel, leaving just $a^{3}$. This is exactly why the symmetric labelling is so convenient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the product equal to 64",
          "workingLatex": "a^{3} = 64",
          "explanation": "The product of the three numbers is given as $64$, so $a^{3} = 64$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the middle term",
          "workingLatex": "a = \\sqrt[3]{64} = 4",
          "explanation": "Taking the cube root, the middle term is $a = 4$. We take the positive root because the numbers are stated to be positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the sum",
          "workingLatex": "\\dfrac{a}{r} + a + ar = 14",
          "explanation": "Now use the second piece of information: the three terms add to $14$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute a = 4",
          "workingLatex": "\\dfrac{4}{r} + 4 + 4r = 14",
          "explanation": "Putting $a = 4$ into the sum gives an equation in $r$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Isolate the r terms",
          "workingLatex": "\\dfrac{4}{r} + 4r = 10",
          "explanation": "Subtracting the middle term $4$ from both sides leaves the outer two terms on the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the equation",
          "workingLatex": "\\dfrac{2}{r} + 2r = 5",
          "explanation": "Dividing every term by $2$ keeps the numbers small and manageable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply through by r",
          "workingLatex": "2 + 2r^{2} = 5r",
          "explanation": "Multiplying by $r$ removes the fraction (valid since $r \\neq 0$). This produces an ordinary quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write in standard form",
          "workingLatex": "2r^{2} - 5r + 2 = 0",
          "explanation": "Rearranging into the form $Ar^{2} + Br + C = 0$ prepares the equation for factorising or the quadratic formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise the quadratic",
          "workingLatex": "(2r - 1)(r - 2) = 0",
          "explanation": "Factoring gives $(2r - 1)(r - 2)$. You can check by expanding: $2r^{2} - 4r - r + 2 = 2r^{2} - 5r + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for r",
          "workingLatex": "r = \\dfrac{1}{2} \\quad \\text{or} \\quad r = 2",
          "explanation": "Setting each factor to zero gives two ratios. They are reciprocals of each other, so they produce the same set of three numbers, just listed in opposite order.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the numbers for r = 2",
          "workingLatex": "\\dfrac{4}{2} = 2, \\quad 4, \\quad 4 \\times 2 = 8",
          "explanation": "Taking $r = 2$ gives $\\dfrac{4}{2} = 2$, then $4$, then $8$: the three numbers are $2, 4, 8$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check sum and product",
          "workingLatex": "2 + 4 + 8 = 14, \\qquad 2 \\times 4 \\times 8 = 64",
          "explanation": "The three numbers sum to $14$ and multiply to $64$, matching both conditions, and they are all positive as required.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "2, \\; 4, \\; 8",
          "explanation": "So the three numbers in geometric progression are $2, 4, 8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The three numbers are $2$, $4$ and $8$."
    }
  }
];
