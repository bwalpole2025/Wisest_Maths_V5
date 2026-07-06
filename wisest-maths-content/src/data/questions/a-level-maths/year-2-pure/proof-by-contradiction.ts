import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.proof-contradiction.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "even and odd", "existence proof", "integers"],
    "questionText": "Prove by contradiction that there is no greatest even integer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } N \\text{ is the greatest even integer.}",
          "explanation": "To argue by contradiction we suppose the statement is false, so we assume a greatest even integer exists and call it $N$. The plan is to show this leads to something impossible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write N in even form",
          "workingLatex": "N = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "Every even integer is two times some integer, so we can write $N = 2k$. This lets us handle $N$ algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Construct a larger even number",
          "workingLatex": "N + 2 = 2k + 2 = 2(k+1)",
          "explanation": "Adding $2$ to an even number gives another even number, because $2(k+1)$ is still a multiple of $2$. So $N+2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with N",
          "workingLatex": "N + 2 > N",
          "explanation": "Since $2 > 0$, the number $N+2$ is strictly greater than $N$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "N + 2 \\text{ is even and } N + 2 > N",
          "explanation": "We have produced an even integer larger than $N$, yet $N$ was assumed to be the greatest even integer. These cannot both hold.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow \\text{ no greatest even integer exists}",
          "explanation": "The assumption forced an impossibility, so it must be false. Therefore there is no greatest even integer.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no greatest even integer. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "existence proof", "integers"],
    "questionText": "Prove by contradiction that there is no largest positive integer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } N \\text{ is the largest positive integer.}",
          "explanation": "We begin by assuming the statement is false, so we suppose a largest positive integer $N$ exists. We aim to derive a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the property of N",
          "workingLatex": "N \\in \\mathbb{Z}, \\quad N \\geq 1",
          "explanation": "Being a positive integer, $N$ is a whole number at least $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Construct a larger integer",
          "workingLatex": "N + 1",
          "explanation": "Adding $1$ to a positive integer gives another positive integer, so $N+1$ is also a positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with N",
          "workingLatex": "N + 1 > N",
          "explanation": "Since $1 > 0$, the integer $N+1$ is strictly larger than $N$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "N + 1 > N \\text{, yet } N \\text{ was the largest}",
          "explanation": "We have found a positive integer larger than $N$, contradicting the assumption that $N$ was the largest positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow \\text{ no largest positive integer exists}",
          "explanation": "The assumption leads to a contradiction, so it is false. Therefore there is no largest positive integer.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no largest positive integer. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "existence proof", "real numbers"],
    "questionText": "Prove by contradiction that there is no smallest positive real number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } x \\text{ is the smallest positive real number.}",
          "explanation": "We suppose the statement is false and assume a smallest positive real number $x$ exists. We will show this is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the property of x",
          "workingLatex": "x \\in \\mathbb{R}, \\quad x > 0",
          "explanation": "By assumption $x$ is a positive real number, so $x > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Construct a smaller candidate",
          "workingLatex": "\\frac{x}{2}",
          "explanation": "Halving a positive number gives a smaller positive number, so $\\frac{x}{2}$ is a natural candidate to beat $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show it is positive",
          "workingLatex": "x > 0 \\Rightarrow \\frac{x}{2} > 0",
          "explanation": "Dividing a positive number by $2$ keeps it positive, so $\\frac{x}{2}$ is a positive real number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show it is smaller than x",
          "workingLatex": "x - \\frac{x}{2} = \\frac{x}{2} > 0 \\Rightarrow \\frac{x}{2} < x",
          "explanation": "The gap between $x$ and $\\frac{x}{2}$ is $\\frac{x}{2}$, which is positive, so $\\frac{x}{2}$ is strictly less than $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction",
          "workingLatex": "0 < \\frac{x}{2} < x",
          "explanation": "We have found a positive real number smaller than $x$, contradicting the claim that $x$ was the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow \\text{ no smallest positive real number exists}",
          "explanation": "The assumption is impossible, so it is false. Therefore there is no smallest positive real number.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no smallest positive real number. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "existence proof", "rational numbers"],
    "questionText": "Prove by contradiction that there is no smallest positive rational number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } q \\text{ is the smallest positive rational number.}",
          "explanation": "We suppose the statement is false and assume a smallest positive rational number $q$ exists. We aim to reach a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write q as a fraction",
          "workingLatex": "q = \\frac{a}{b}, \\quad a, b \\in \\mathbb{Z}, \\; b > 0, \\; q > 0",
          "explanation": "Every rational number is a ratio of integers, so we write $q = \\frac{a}{b}$ with $q$ positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Construct a smaller candidate",
          "workingLatex": "\\frac{q}{2} = \\frac{a}{2b}",
          "explanation": "Halving $q$ gives $\\frac{a}{2b}$, which is again a ratio of integers, so $\\frac{q}{2}$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show it is positive",
          "workingLatex": "q > 0 \\Rightarrow \\frac{q}{2} > 0",
          "explanation": "Dividing a positive number by $2$ leaves it positive, so $\\frac{q}{2}$ is a positive rational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show it is smaller than q",
          "workingLatex": "q - \\frac{q}{2} = \\frac{q}{2} > 0 \\Rightarrow \\frac{q}{2} < q",
          "explanation": "The difference between $q$ and $\\frac{q}{2}$ is $\\frac{q}{2}$, which is positive, so $\\frac{q}{2}$ is strictly smaller than $q$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction",
          "workingLatex": "0 < \\frac{q}{2} < q",
          "explanation": "We have produced a positive rational smaller than $q$, contradicting the assumption that $q$ was the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow \\text{ no smallest positive rational number exists}",
          "explanation": "The assumption leads to a contradiction, so it is false. Therefore there is no smallest positive rational number.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no smallest positive rational number. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "integers", "inequalities"],
    "questionText": "Prove by contradiction that there is no integer $n$ satisfying $0<n<1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } n \\in \\mathbb{Z} \\text{ with } 0 < n < 1.",
          "explanation": "We suppose the statement is false and assume such an integer $n$ exists, strictly between $0$ and $1$. We aim to derive a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use that n is a positive integer",
          "workingLatex": "n > 0 \\text{ and } n \\in \\mathbb{Z} \\Rightarrow n \\text{ is a positive integer}",
          "explanation": "Since $n$ is a whole number greater than $0$, it is a positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the least positive integer",
          "workingLatex": "\\text{Smallest positive integer } = 1 \\Rightarrow n \\geq 1",
          "explanation": "The smallest positive integer is $1$, so any positive integer must satisfy $n \\geq 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the upper bound",
          "workingLatex": "n < 1",
          "explanation": "But our assumption also said $n < 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "n \\geq 1 \\text{ and } n < 1",
          "explanation": "A number cannot be both at least $1$ and strictly less than $1$, so these statements clash.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow \\text{ no integer } n \\text{ satisfies } 0 < n < 1",
          "explanation": "The assumption is impossible, so it is false. Therefore no integer lies strictly between $0$ and $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no integer $n$ with $0 < n < 1$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "existence proof", "irrational numbers"],
    "questionText": "Prove by contradiction that there is no smallest positive irrational number. (You may assume irrational numbers exist.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } x \\text{ is the smallest positive irrational number.}",
          "explanation": "We suppose the statement is false and assume a smallest positive irrational number $x$ exists. We will produce a smaller one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the property of x",
          "workingLatex": "x > 0, \\quad x \\text{ irrational}",
          "explanation": "By assumption $x$ is positive and irrational.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Construct a smaller candidate",
          "workingLatex": "\\frac{x}{2}",
          "explanation": "As before, halving $x$ gives a smaller positive number, so $\\frac{x}{2}$ is our candidate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the candidate is irrational",
          "workingLatex": "\\text{If } \\tfrac{x}{2} \\text{ were rational, then } x = 2\\cdot\\tfrac{x}{2} \\text{ would be rational.}",
          "explanation": "If $\\frac{x}{2}$ were rational, doubling it would make $x$ rational too, which contradicts $x$ being irrational. Hence $\\frac{x}{2}$ must be irrational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate it below x",
          "workingLatex": "0 < \\frac{x}{2} < x",
          "explanation": "Since $x > 0$, the number $\\frac{x}{2}$ is positive and strictly less than $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction",
          "workingLatex": "\\frac{x}{2} \\text{ is positive, irrational, and } < x",
          "explanation": "We have found a positive irrational number smaller than $x$, contradicting the assumption that $x$ was the smallest.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow \\text{ no smallest positive irrational number exists}",
          "explanation": "The assumption leads to a contradiction, so it is false. Therefore there is no smallest positive irrational number.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no smallest positive irrational number. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "parity", "even and odd", "integers"],
    "questionText": "Prove by contradiction that if $n$ is an integer and $n^2$ is even, then $n$ is even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "n^2 \\text{ even, but assume } n \\text{ is odd.}",
          "explanation": "The claim is that $n$ is even. To argue by contradiction we assume the opposite: that $n$ is odd, while $n^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write n in odd form",
          "workingLatex": "n = 2k + 1, \\quad k \\in \\mathbb{Z}",
          "explanation": "Every odd integer is one more than an even number, so we write $n = 2k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square n",
          "workingLatex": "n^2 = (2k+1)^2 = 4k^2 + 4k + 1",
          "explanation": "Expanding the bracket gives $4k^2 + 4k + 1$, which we now examine for parity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show n^2 is odd",
          "workingLatex": "n^2 = 2(2k^2 + 2k) + 1",
          "explanation": "Factoring out $2$ from the first two terms shows $n^2$ is one more than an even number, so $n^2$ is odd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "n^2 \\text{ odd, but } n^2 \\text{ was given even}",
          "explanation": "Our working shows $n^2$ is odd, yet we were told $n^2$ is even. A number cannot be both.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow n \\text{ is even}",
          "explanation": "The assumption that $n$ is odd is impossible, so it is false. Therefore $n$ must be even.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $n^2$ is even then $n$ is even. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "parity", "even and odd", "integers"],
    "questionText": "Prove by contradiction that if $n$ is an integer and $n^2$ is odd, then $n$ is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "n^2 \\text{ odd, but assume } n \\text{ is even.}",
          "explanation": "The claim is that $n$ is odd. For a proof by contradiction we assume the opposite: that $n$ is even, while $n^2$ is odd.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write n in even form",
          "workingLatex": "n = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "Every even integer is two times some integer, so we write $n = 2k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square n",
          "workingLatex": "n^2 = (2k)^2 = 4k^2",
          "explanation": "Squaring gives $4k^2$, which we now test for parity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show n^2 is even",
          "workingLatex": "n^2 = 2(2k^2)",
          "explanation": "Factoring out $2$ shows $n^2$ is a multiple of $2$, so $n^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "n^2 \\text{ even, but } n^2 \\text{ was given odd}",
          "explanation": "Our working shows $n^2$ is even, yet we were told $n^2$ is odd. These cannot both hold.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow n \\text{ is odd}",
          "explanation": "The assumption that $n$ is even is impossible, so it is false. Therefore $n$ must be odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $n^2$ is odd then $n$ is odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "parity", "even and odd", "integers"],
    "questionText": "Prove by contradiction that if 3n + 2 is odd (n an integer), then n is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "3n + 2 \\text{ odd, but assume } n \\text{ is even.}",
          "explanation": "The claim is that $n$ is odd. For a contradiction we assume the opposite: that $n$ is even, while $3n+2$ is odd.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write n in even form",
          "workingLatex": "n = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "An even integer is two times an integer, so we write $n = 2k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into 3n + 2",
          "workingLatex": "3n + 2 = 3(2k) + 2 = 6k + 2",
          "explanation": "Replacing $n$ with $2k$ gives $6k + 2$, which we now examine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the expression is even",
          "workingLatex": "6k + 2 = 2(3k + 1)",
          "explanation": "Factoring out $2$ shows $3n+2$ is a multiple of $2$, so $3n+2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "3n + 2 \\text{ even, but it was given odd}",
          "explanation": "We have shown $3n+2$ is even, yet we were told it is odd. This is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow n \\text{ is odd}",
          "explanation": "The assumption that $n$ is even leads to a contradiction, so it is false. Therefore $n$ must be odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $3n + 2$ is odd then $n$ is odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "parity", "even and odd", "integers"],
    "questionText": "Prove by contradiction that if 5n - 2 is even (n an integer), then n is even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "5n - 2 \\text{ even, but assume } n \\text{ is odd.}",
          "explanation": "The claim is that $n$ is even. For a contradiction we assume the opposite: that $n$ is odd, while $5n-2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write n in odd form",
          "workingLatex": "n = 2k + 1, \\quad k \\in \\mathbb{Z}",
          "explanation": "An odd integer is one more than an even number, so we write $n = 2k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into 5n - 2",
          "workingLatex": "5n - 2 = 5(2k+1) - 2 = 10k + 3",
          "explanation": "Replacing $n$ with $2k+1$ and simplifying gives $10k + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the expression is odd",
          "workingLatex": "10k + 3 = 2(5k + 1) + 1",
          "explanation": "Writing it as $2(5k+1)+1$ shows $5n-2$ is one more than an even number, so $5n-2$ is odd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "5n - 2 \\text{ odd, but it was given even}",
          "explanation": "We have shown $5n-2$ is odd, yet we were told it is even. This cannot happen.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow n \\text{ is even}",
          "explanation": "The assumption that $n$ is odd leads to a contradiction, so it is false. Therefore $n$ must be even.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $5n - 2$ is even then $n$ is even. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "parity", "even and odd"],
    "questionText": "Prove by contradiction that if n + 5 is even (n an integer), then n is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "n + 5 \\text{ even, but assume } n \\text{ is even.}",
          "explanation": "The claim is that $n$ is odd. For a contradiction we assume the opposite: that $n$ is even, while $n+5$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write n in even form",
          "workingLatex": "n = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "An even integer is two times an integer, so we write $n = 2k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into n + 5",
          "workingLatex": "n + 5 = 2k + 5",
          "explanation": "Replacing $n$ with $2k$ gives $2k + 5$, which we now examine for parity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the expression is odd",
          "workingLatex": "2k + 5 = 2(k + 2) + 1",
          "explanation": "Rewriting as $2(k+2)+1$ shows $n+5$ is one more than an even number, so $n+5$ is odd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "n + 5 \\text{ odd, but it was given even}",
          "explanation": "We have shown $n+5$ is odd, yet we were told it is even. This is a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow n \\text{ is odd}",
          "explanation": "The assumption that $n$ is even is impossible, so it is false. Therefore $n$ must be odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $n + 5$ is even then $n$ is odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "parity", "even and odd", "integers"],
    "questionText": "Prove by contradiction that if 7n - 4 is odd (n an integer), then n is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "7n - 4 \\text{ odd, but assume } n \\text{ is even.}",
          "explanation": "The claim is that $n$ is odd. For a contradiction we assume the opposite: that $n$ is even, while $7n-4$ is odd.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write n in even form",
          "workingLatex": "n = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "An even integer is two times an integer, so we write $n = 2k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into 7n - 4",
          "workingLatex": "7n - 4 = 7(2k) - 4 = 14k - 4",
          "explanation": "Replacing $n$ with $2k$ gives $14k - 4$, which we now examine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the expression is even",
          "workingLatex": "14k - 4 = 2(7k - 2)",
          "explanation": "Factoring out $2$ shows $7n-4$ is a multiple of $2$, so $7n-4$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "7n - 4 \\text{ even, but it was given odd}",
          "explanation": "We have shown $7n-4$ is even, yet we were told it is odd. These cannot both be true.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow n \\text{ is odd}",
          "explanation": "The assumption that $n$ is even leads to a contradiction, so it is false. Therefore $n$ must be odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $7n - 4$ is odd then $n$ is odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "parity", "even and odd", "integers"],
    "questionText": "Prove by contradiction that if a and b are integers and ab is odd, then a and b are both odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "ab \\text{ odd, but assume } a, b \\text{ are not both odd.}",
          "explanation": "The claim is that $a$ and $b$ are both odd. The negation is that they are not both odd, meaning at least one of them is even. We assume this while $ab$ is odd.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take the even factor",
          "workingLatex": "\\text{WLOG let } a \\text{ be even.}",
          "explanation": "If at least one is even, we may without loss of generality take $a$ to be the even one; the argument is symmetric if it is $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write a in even form",
          "workingLatex": "a = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "An even integer is two times an integer, so we write $a = 2k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the product",
          "workingLatex": "ab = 2kb = 2(kb)",
          "explanation": "Multiplying by $b$ keeps the factor of $2$, so $ab$ is a multiple of $2$ and therefore even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "ab \\text{ even, but it was given odd}",
          "explanation": "We have shown $ab$ is even, yet we were told $ab$ is odd. This cannot happen.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow a \\text{ and } b \\text{ are both odd}",
          "explanation": "The assumption that one of them is even leads to a contradiction, so it is false. Therefore both $a$ and $b$ must be odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $ab$ is odd then $a$ and $b$ are both odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "integers", "inequalities"],
    "questionText": "Given that $a$ and $b$ are integers with $a+b\\ge 15$, prove by contradiction that $a\\ge 8$ or $b\\ge 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } a < 8 \\text{ and } b < 8.",
          "explanation": "The claim is that $a \\geq 8$ or $b \\geq 8$. The negation of an 'or' statement is that both parts fail, so we assume $a < 8$ and $b < 8$ together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use that a and b are integers",
          "workingLatex": "a \\leq 7 \\text{ and } b \\leq 7",
          "explanation": "For integers, $a < 8$ means $a$ is at most $7$, and likewise $b \\leq 7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the inequalities",
          "workingLatex": "a + b \\leq 7 + 7 = 14",
          "explanation": "Adding the two bounds shows the sum $a+b$ can be at most $14$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the given condition",
          "workingLatex": "a + b \\geq 15",
          "explanation": "But we were told that $a + b \\geq 15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the contradiction",
          "workingLatex": "15 \\leq a + b \\leq 14",
          "explanation": "This forces $15 \\leq 14$, which is impossible. The assumption cannot hold.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude",
          "workingLatex": "\\Rightarrow a \\geq 8 \\text{ or } b \\geq 8",
          "explanation": "Since assuming both $a < 8$ and $b < 8$ gives a contradiction, at least one of $a \\geq 8$ or $b \\geq 8$ must be true.",
          "diagram": null
        }
      ],
      "finalAnswer": "At least one of $a \\geq 8$ or $b \\geq 8$ holds. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Prove by contradiction that $\\sqrt{2}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{2} \\text{ is rational.}",
          "explanation": "In a proof by contradiction we begin by supposing the opposite of what we want to show. If this supposition forces an impossibility, then the original statement must be true.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the number as a fraction in lowest terms",
          "workingLatex": "\\sqrt{2} = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "Any rational number can be written as a fraction, and we may always cancel common factors so that $a$ and $b$ share none. This 'lowest terms' condition is the fact we will eventually contradict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides",
          "workingLatex": "2 = \\frac{a^2}{b^2}",
          "explanation": "Squaring removes the square root and turns the statement into one purely about integers, which are far easier to reason about.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the denominator",
          "workingLatex": "a^2 = 2b^2",
          "explanation": "Multiplying through by $b^2$ gives a clean relationship between two integers. The right-hand side is a multiple of $2$, so $a^2$ must be even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce that a is even",
          "workingLatex": "a^2 \\text{ even} \\implies a \\text{ even}",
          "explanation": "The square of an odd number is always odd, so if $a^2$ is even then $a$ cannot be odd. Hence $a$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write a as twice an integer",
          "workingLatex": "a = 2c, \\quad c \\in \\mathbb{Z}",
          "explanation": "Being even, $a$ can be expressed as two times some integer $c$. This lets us feed the evenness back into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back into the equation",
          "workingLatex": "(2c)^2 = 2b^2 \\implies 4c^2 = 2b^2",
          "explanation": "Replacing $a$ with $2c$ keeps the equation true while exposing how the factors of $2$ are distributed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "b^2 = 2c^2",
          "explanation": "Dividing both sides by $2$ shows that $b^2$ is also a multiple of $2$, so $b^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Deduce that b is even",
          "workingLatex": "b^2 \\text{ even} \\implies b \\text{ even}",
          "explanation": "By the same reasoning as before, an even square forces an even base, so $b$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the contradiction",
          "workingLatex": "2 \\mid a \\text{ and } 2 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 2",
          "explanation": "Both $a$ and $b$ are divisible by $2$, so they share the common factor $2$. This directly contradicts our choice of a fraction in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\sqrt{2} \\text{ is irrational.}",
          "explanation": "The assumption led to an impossibility, so it must be false. Therefore $\\sqrt{2}$ cannot be written as a fraction of integers and is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{2}=\\frac{a}{b}$ in lowest terms forces both $a$ and $b$ to be even, contradicting $\\gcd(a,b)=1$; hence no such fraction exists and $\\sqrt{2}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "divisibility"],
    "questionText": "Prove by contradiction that $\\sqrt{3}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{3} \\text{ is rational.}",
          "explanation": "We suppose the opposite of the claim. If assuming $\\sqrt{3}$ is rational leads to something impossible, the assumption must be false.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the number as a fraction in lowest terms",
          "workingLatex": "\\sqrt{3} = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "Any rational number has a fully cancelled form in which numerator and denominator share no common factor. This is the condition we aim to contradict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides and clear the denominator",
          "workingLatex": "3 = \\frac{a^2}{b^2} \\implies a^2 = 3b^2",
          "explanation": "Squaring removes the surd, and multiplying by $b^2$ leaves an integer equation. The right-hand side is a multiple of $3$, so $a^2$ is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use that 3 is prime to move divisibility to a",
          "workingLatex": "3 \\text{ prime and } 3 \\mid a^2 \\implies 3 \\mid a",
          "explanation": "For a prime $p$, if $p$ divides a product it must divide one of the factors. Since $a^2 = a \\times a$, the prime $3$ dividing $a^2$ forces $3$ to divide $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as a multiple of 3",
          "workingLatex": "a = 3c, \\quad c \\in \\mathbb{Z}",
          "explanation": "Since $3$ divides $a$, we can write $a$ as three times some integer $c$, ready to substitute back.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back into the equation",
          "workingLatex": "(3c)^2 = 3b^2 \\implies 9c^2 = 3b^2",
          "explanation": "Replacing $a$ with $3c$ keeps the equation valid and reveals how the factors of $3$ are shared.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "b^2 = 3c^2",
          "explanation": "Dividing both sides by $3$ shows that $b^2$ is also a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce that b is a multiple of 3",
          "workingLatex": "3 \\mid b^2 \\implies 3 \\mid b",
          "explanation": "Applying the prime property again, $3$ dividing $b^2$ forces $3$ to divide $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the contradiction",
          "workingLatex": "3 \\mid a \\text{ and } 3 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 3",
          "explanation": "Both $a$ and $b$ are divisible by $3$, so they share the common factor $3$. This contradicts the assumption that the fraction was in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\sqrt{3} \\text{ is irrational.}",
          "explanation": "The contradiction shows the assumption was false, so $\\sqrt{3}$ cannot be written as a fraction of integers and is therefore irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{3}=\\frac{a}{b}$ in lowest terms forces $3$ to divide both $a$ and $b$, contradicting $\\gcd(a,b)=1$; hence $\\sqrt{3}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "Euclid's lemma"],
    "questionText": "Prove by contradiction that $\\sqrt{5}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{5} \\text{ is rational.}",
          "explanation": "We begin by supposing the negation of the claim, intending to derive an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the number as a fraction in lowest terms",
          "workingLatex": "\\sqrt{5} = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "Every rational number can be reduced so that numerator and denominator share no factor. This lowest-terms condition is our target for a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides and clear the denominator",
          "workingLatex": "5 = \\frac{a^2}{b^2} \\implies a^2 = 5b^2",
          "explanation": "Squaring eliminates the surd and multiplying by $b^2$ gives an integer equation in which $a^2$ is plainly a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Euclid's lemma with the prime 5",
          "workingLatex": "5 \\text{ prime and } 5 \\mid a^2 \\implies 5 \\mid a",
          "explanation": "Euclid's lemma states that if a prime divides a product it divides one of the factors. Since $a^2 = a \\times a$, the prime $5$ dividing $a^2$ forces $5 \\mid a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as a multiple of 5",
          "workingLatex": "a = 5c, \\quad c \\in \\mathbb{Z}",
          "explanation": "As $5$ divides $a$, we express $a$ as five times an integer $c$ so we can substitute it back in.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back into the equation",
          "workingLatex": "(5c)^2 = 5b^2 \\implies 25c^2 = 5b^2",
          "explanation": "Substituting $a = 5c$ preserves the equation and lets us track the factors of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "b^2 = 5c^2",
          "explanation": "Dividing by $5$ shows $b^2$ is itself a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply Euclid's lemma again to b",
          "workingLatex": "5 \\mid b^2 \\implies 5 \\mid b",
          "explanation": "By Euclid's lemma once more, the prime $5$ dividing $b^2$ forces $5$ to divide $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the contradiction",
          "workingLatex": "5 \\mid a \\text{ and } 5 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 5",
          "explanation": "Now $5$ is a common factor of $a$ and $b$, contradicting the fact that the fraction was in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\sqrt{5} \\text{ is irrational.}",
          "explanation": "Since the assumption produces a contradiction, it is false, and $\\sqrt{5}$ must be irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{5}=\\frac{a}{b}$ in lowest terms forces $5$ to divide both $a$ and $b$ by Euclid's lemma, contradicting $\\gcd(a,b)=1$; hence $\\sqrt{5}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "divisibility"],
    "questionText": "Prove by contradiction that $\\sqrt{6}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{6} \\text{ is rational.}",
          "explanation": "We suppose the opposite of what we wish to prove and aim for an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the number as a fraction in lowest terms",
          "workingLatex": "\\sqrt{6} = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "A rational number can always be reduced to lowest terms, so we may assume $a$ and $b$ share no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides and clear the denominator",
          "workingLatex": "6 = \\frac{a^2}{b^2} \\implies 6b^2 = a^2",
          "explanation": "Squaring removes the surd and rearranging gives an integer equation. Since $6b^2$ is even, $a^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce that a is even",
          "workingLatex": "2 \\mid a^2 \\implies 2 \\mid a",
          "explanation": "An even square must come from an even number, because the square of an odd number is odd. Hence $a$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as twice an integer",
          "workingLatex": "a = 2c, \\quad c \\in \\mathbb{Z}",
          "explanation": "Being even, $a$ equals $2c$ for some integer $c$; we substitute this back in.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back into the equation",
          "workingLatex": "6b^2 = (2c)^2 \\implies 6b^2 = 4c^2",
          "explanation": "Replacing $a$ with $2c$ keeps the equation true and introduces a factor of $4$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 2",
          "workingLatex": "3b^2 = 2c^2",
          "explanation": "Cancelling a common factor of $2$ simplifies the equation and shows $3b^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce that b squared is even",
          "workingLatex": "2 \\mid 3b^2 \\text{ and } \\gcd(2,3)=1 \\implies 2 \\mid b^2",
          "explanation": "Since $2$ divides $3b^2$ but shares no factor with $3$, it must divide $b^2$. This uses that $2$ and $3$ are coprime.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Deduce that b is even",
          "workingLatex": "2 \\mid b^2 \\implies 2 \\mid b",
          "explanation": "An even square again forces an even base, so $b$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the contradiction",
          "workingLatex": "2 \\mid a \\text{ and } 2 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 2",
          "explanation": "Both $a$ and $b$ are even, so $2$ is a common factor, contradicting the lowest-terms assumption.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\sqrt{6} \\text{ is irrational.}",
          "explanation": "The contradiction shows the assumption was false, so $\\sqrt{6}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{6}=\\frac{a}{b}$ in lowest terms forces both $a$ and $b$ to be even, contradicting $\\gcd(a,b)=1$; hence $\\sqrt{6}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "Euclid's lemma"],
    "questionText": "Prove by contradiction that $\\sqrt{7}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{7} \\text{ is rational.}",
          "explanation": "We suppose the negation of the claim, planning to reach an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the number as a fraction in lowest terms",
          "workingLatex": "\\sqrt{7} = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "Every rational number can be written in fully cancelled form, so $a$ and $b$ share no common factor. This is the condition we will contradict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides and clear the denominator",
          "workingLatex": "7 = \\frac{a^2}{b^2} \\implies a^2 = 7b^2",
          "explanation": "Squaring removes the surd, and multiplying by $b^2$ makes $a^2$ visibly a multiple of $7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Euclid's lemma with the prime 7",
          "workingLatex": "7 \\text{ prime and } 7 \\mid a^2 \\implies 7 \\mid a",
          "explanation": "Euclid's lemma says a prime dividing a product must divide a factor. As $a^2 = a \\times a$, the prime $7$ dividing $a^2$ forces $7 \\mid a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as a multiple of 7",
          "workingLatex": "a = 7c, \\quad c \\in \\mathbb{Z}",
          "explanation": "Because $7$ divides $a$, we can write $a$ as seven times an integer $c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back into the equation",
          "workingLatex": "(7c)^2 = 7b^2 \\implies 49c^2 = 7b^2",
          "explanation": "Substituting $a = 7c$ keeps the equation valid and exposes the shared factors of $7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "b^2 = 7c^2",
          "explanation": "Dividing by $7$ shows $b^2$ is also a multiple of $7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply Euclid's lemma again to b",
          "workingLatex": "7 \\mid b^2 \\implies 7 \\mid b",
          "explanation": "By Euclid's lemma once more, the prime $7$ dividing $b^2$ forces $7 \\mid b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the contradiction",
          "workingLatex": "7 \\mid a \\text{ and } 7 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 7",
          "explanation": "Now $7$ divides both $a$ and $b$, contradicting the assumption that the fraction was in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\sqrt{7} \\text{ is irrational.}",
          "explanation": "The assumption leads to an impossibility, so it is false and $\\sqrt{7}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{7}=\\frac{a}{b}$ in lowest terms forces $7$ to divide both $a$ and $b$ by Euclid's lemma, contradicting $\\gcd(a,b)=1$; hence $\\sqrt{7}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "divisibility"],
    "questionText": "Prove by contradiction that $\\sqrt{10}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{10} \\text{ is rational.}",
          "explanation": "We suppose the opposite of the claim and aim to derive an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the number as a fraction in lowest terms",
          "workingLatex": "\\sqrt{10} = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "A rational number can be reduced so its numerator and denominator share no factor. This is the condition we intend to break.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides and clear the denominator",
          "workingLatex": "10 = \\frac{a^2}{b^2} \\implies 10b^2 = a^2",
          "explanation": "Squaring removes the surd; rearranging leaves an integer equation. Since $10b^2$ is even, $a^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce that a is even",
          "workingLatex": "2 \\mid a^2 \\implies 2 \\mid a",
          "explanation": "An even square can only arise from an even number, since odd squared is odd. So $a$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as twice an integer",
          "workingLatex": "a = 2c, \\quad c \\in \\mathbb{Z}",
          "explanation": "As $a$ is even, we may write $a = 2c$ for some integer $c$ and substitute back.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back into the equation",
          "workingLatex": "10b^2 = (2c)^2 \\implies 10b^2 = 4c^2",
          "explanation": "Replacing $a$ with $2c$ keeps the equation true and brings a factor of $4$ to the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 2",
          "workingLatex": "5b^2 = 2c^2",
          "explanation": "Cancelling a factor of $2$ simplifies the equation and shows $5b^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce that b squared is even",
          "workingLatex": "2 \\mid 5b^2 \\text{ and } \\gcd(2,5)=1 \\implies 2 \\mid b^2",
          "explanation": "Since $2$ divides $5b^2$ but shares no factor with $5$, it must divide $b^2$. This relies on $2$ and $5$ being coprime.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Deduce that b is even",
          "workingLatex": "2 \\mid b^2 \\implies 2 \\mid b",
          "explanation": "An even square once more forces an even base, so $b$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the contradiction",
          "workingLatex": "2 \\mid a \\text{ and } 2 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 2",
          "explanation": "Both $a$ and $b$ are even, so $2$ is a shared factor, contradicting the lowest-terms assumption.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\sqrt{10} \\text{ is irrational.}",
          "explanation": "The assumption produces a contradiction, so it is false and $\\sqrt{10}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{10}=\\frac{a}{b}$ in lowest terms forces both $a$ and $b$ to be even, contradicting $\\gcd(a,b)=1$; hence $\\sqrt{10}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "Euclid's lemma"],
    "questionText": "Prove by contradiction that $\\sqrt{11}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{11} \\text{ is rational.}",
          "explanation": "We start from the negation of the claim, hoping to force an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the number as a fraction in lowest terms",
          "workingLatex": "\\sqrt{11} = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "Any rational number reduces to a fraction with no common factor between top and bottom; this lowest-terms fact is what we shall contradict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides and clear the denominator",
          "workingLatex": "11 = \\frac{a^2}{b^2} \\implies a^2 = 11b^2",
          "explanation": "Squaring eliminates the surd and multiplying by $b^2$ shows $a^2$ is a multiple of $11$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Euclid's lemma with the prime 11",
          "workingLatex": "11 \\text{ prime and } 11 \\mid a^2 \\implies 11 \\mid a",
          "explanation": "By Euclid's lemma, a prime dividing a product divides a factor. As $a^2 = a \\times a$, the prime $11$ dividing $a^2$ forces $11 \\mid a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as a multiple of 11",
          "workingLatex": "a = 11c, \\quad c \\in \\mathbb{Z}",
          "explanation": "Since $11$ divides $a$, we write $a$ as eleven times an integer $c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back into the equation",
          "workingLatex": "(11c)^2 = 11b^2 \\implies 121c^2 = 11b^2",
          "explanation": "Substituting $a = 11c$ preserves the equation and reveals the shared factors of $11$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "b^2 = 11c^2",
          "explanation": "Dividing by $11$ shows $b^2$ is a multiple of $11$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply Euclid's lemma again to b",
          "workingLatex": "11 \\mid b^2 \\implies 11 \\mid b",
          "explanation": "By Euclid's lemma once more, the prime $11$ dividing $b^2$ forces $11 \\mid b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the contradiction",
          "workingLatex": "11 \\mid a \\text{ and } 11 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 11",
          "explanation": "Now $11$ divides both $a$ and $b$, contradicting the lowest-terms assumption.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\sqrt{11} \\text{ is irrational.}",
          "explanation": "The assumption is impossible, so it is false and $\\sqrt{11}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{11}=\\frac{a}{b}$ in lowest terms forces $11$ to divide both $a$ and $b$ by Euclid's lemma, contradicting $\\gcd(a,b)=1$; hence $\\sqrt{11}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "Euclid's lemma"],
    "questionText": "Prove by contradiction that $\\sqrt{13}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{13} \\text{ is rational.}",
          "explanation": "We suppose the negation of the statement, intending to derive a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the number as a fraction in lowest terms",
          "workingLatex": "\\sqrt{13} = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "Any rational number has a reduced form with no common factor between numerator and denominator; this is the property we aim to contradict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides and clear the denominator",
          "workingLatex": "13 = \\frac{a^2}{b^2} \\implies a^2 = 13b^2",
          "explanation": "Squaring removes the surd and multiplying by $b^2$ shows $a^2$ is a multiple of $13$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Euclid's lemma with the prime 13",
          "workingLatex": "13 \\text{ prime and } 13 \\mid a^2 \\implies 13 \\mid a",
          "explanation": "Euclid's lemma guarantees that a prime dividing a product divides one factor. Since $a^2 = a \\times a$, the prime $13$ dividing $a^2$ forces $13 \\mid a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as a multiple of 13",
          "workingLatex": "a = 13c, \\quad c \\in \\mathbb{Z}",
          "explanation": "As $13$ divides $a$, we write $a$ as thirteen times an integer $c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back into the equation",
          "workingLatex": "(13c)^2 = 13b^2 \\implies 169c^2 = 13b^2",
          "explanation": "Substituting $a = 13c$ keeps the equation valid and exposes the shared factors of $13$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "b^2 = 13c^2",
          "explanation": "Dividing by $13$ shows $b^2$ is also a multiple of $13$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply Euclid's lemma again to b",
          "workingLatex": "13 \\mid b^2 \\implies 13 \\mid b",
          "explanation": "By Euclid's lemma once more, the prime $13$ dividing $b^2$ forces $13 \\mid b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the contradiction",
          "workingLatex": "13 \\mid a \\text{ and } 13 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 13",
          "explanation": "Now $13$ is a common factor of $a$ and $b$, contradicting the lowest-terms assumption.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\sqrt{13} \\text{ is irrational.}",
          "explanation": "The assumption leads to a contradiction, so it must be false and $\\sqrt{13}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{13}=\\frac{a}{b}$ in lowest terms forces $13$ to divide both $a$ and $b$ by Euclid's lemma, contradicting $\\gcd(a,b)=1$; hence $\\sqrt{13}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "divisibility"],
    "questionText": "Prove by contradiction that $\\sqrt{15}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{15} \\text{ is rational.}",
          "explanation": "We suppose the opposite of the claim and work towards an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the number as a fraction in lowest terms",
          "workingLatex": "\\sqrt{15} = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "A rational number can be reduced so numerator and denominator share no factor. Rather than argue directly with $15$, we will track the prime factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides and clear the denominator",
          "workingLatex": "15 = \\frac{a^2}{b^2} \\implies a^2 = 15b^2",
          "explanation": "Squaring removes the surd and multiplying by $b^2$ gives an integer equation. Since $15 = 3 \\times 5$, the right-hand side is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce that 3 divides a",
          "workingLatex": "3 \\mid a^2 \\implies 3 \\mid a",
          "explanation": "Because $3$ is prime, it dividing $a^2 = a \\times a$ forces it to divide $a$. We deliberately avoid claiming $15 \\mid a$, which would not follow.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as a multiple of 3",
          "workingLatex": "a = 3c, \\quad c \\in \\mathbb{Z}",
          "explanation": "Since $3$ divides $a$, we express $a$ as three times an integer $c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back into the equation",
          "workingLatex": "15b^2 = (3c)^2 \\implies 15b^2 = 9c^2",
          "explanation": "Substituting $a = 3c$ keeps the equation true and introduces a factor of $9$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by 3",
          "workingLatex": "5b^2 = 3c^2",
          "explanation": "Cancelling a common factor of $3$ simplifies the equation and shows $5b^2$ is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce that 3 divides b squared",
          "workingLatex": "3 \\mid 5b^2 \\text{ and } \\gcd(3,5)=1 \\implies 3 \\mid b^2",
          "explanation": "Since $3$ divides $5b^2$ but shares no factor with $5$, it must divide $b^2$. This uses that $3$ and $5$ are coprime.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Deduce that 3 divides b",
          "workingLatex": "3 \\mid b^2 \\implies 3 \\mid b",
          "explanation": "As $3$ is prime, dividing $b^2$ forces it to divide $b$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the contradiction",
          "workingLatex": "3 \\mid a \\text{ and } 3 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 3",
          "explanation": "Both $a$ and $b$ are divisible by $3$, contradicting the assumption that the fraction was in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\sqrt{15} \\text{ is irrational.}",
          "explanation": "The contradiction shows the assumption was false, so $\\sqrt{15}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{15}=\\frac{a}{b}$ in lowest terms forces $3$ to divide both $a$ and $b$, contradicting $\\gcd(a,b)=1$; hence $\\sqrt{15}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "rational numbers", "divisibility"],
    "questionText": "Prove by contradiction that there is no rational number $r$ such that $r^2 = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that a rational } r \\text{ with } r^2 = 2 \\text{ exists.}",
          "explanation": "We suppose such a rational number exists so that we can chase its consequences to an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write r as a fraction in lowest terms",
          "workingLatex": "r = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "Being rational, $r$ can be written as a fully cancelled fraction in which $a$ and $b$ share no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the condition r squared equals 2",
          "workingLatex": "\\left(\\frac{a}{b}\\right)^2 = 2 \\implies \\frac{a^2}{b^2} = 2",
          "explanation": "Substituting the fraction into $r^2 = 2$ turns the problem into a statement about the integers $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the denominator",
          "workingLatex": "a^2 = 2b^2",
          "explanation": "Multiplying by $b^2$ leaves a clean integer equation whose right-hand side is even, so $a^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce that a is even",
          "workingLatex": "2 \\mid a^2 \\implies 2 \\mid a",
          "explanation": "The square of an odd number is odd, so an even $a^2$ forces $a$ to be even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write a as twice an integer",
          "workingLatex": "a = 2c, \\quad c \\in \\mathbb{Z}",
          "explanation": "Because $a$ is even, it equals $2c$ for some integer $c$, ready to substitute back.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back and simplify",
          "workingLatex": "(2c)^2 = 2b^2 \\implies 4c^2 = 2b^2 \\implies b^2 = 2c^2",
          "explanation": "Substituting $a = 2c$ and dividing by $2$ shows $b^2$ is even as well.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce that b is even",
          "workingLatex": "2 \\mid b^2 \\implies 2 \\mid b",
          "explanation": "An even square forces an even base, so $b$ is even too.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the contradiction",
          "workingLatex": "2 \\mid a \\text{ and } 2 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 2",
          "explanation": "Both $a$ and $b$ are even, so they share the factor $2$, contradicting the choice of lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\text{no rational } r \\text{ satisfies } r^2 = 2.",
          "explanation": "The assumption produced an impossibility, so no such rational number can exist.",
          "diagram": null
        }
      ],
      "finalAnswer": "Any rational $r=\\frac{a}{b}$ in lowest terms with $r^2=2$ forces both $a$ and $b$ to be even, contradicting $\\gcd(a,b)=1$; hence no rational number satisfies $r^2=2$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "rational numbers", "divisibility"],
    "questionText": "Prove by contradiction that there is no rational number $r$ such that $r^2 = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume, for contradiction, that a rational } r \\text{ with } r^2 = 3 \\text{ exists.}",
          "explanation": "We suppose such a rational number exists so we can trace its consequences to an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write r as a fraction in lowest terms",
          "workingLatex": "r = \\frac{a}{b}, \\quad a,b \\in \\mathbb{Z}, \\ b \\neq 0, \\ \\gcd(a,b)=1",
          "explanation": "A rational number has a reduced form in which numerator and denominator share no common factor; this is what we shall contradict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the condition r squared equals 3",
          "workingLatex": "\\frac{a^2}{b^2} = 3 \\implies a^2 = 3b^2",
          "explanation": "Substituting the fraction into $r^2 = 3$ and clearing the denominator gives an integer equation where $a^2$ is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce that 3 divides a",
          "workingLatex": "3 \\text{ prime and } 3 \\mid a^2 \\implies 3 \\mid a",
          "explanation": "Since $3$ is prime, dividing the product $a \\times a$ means it divides $a$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as a multiple of 3",
          "workingLatex": "a = 3c, \\quad c \\in \\mathbb{Z}",
          "explanation": "Because $3$ divides $a$, we can write $a$ as three times an integer $c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back and simplify",
          "workingLatex": "(3c)^2 = 3b^2 \\implies 9c^2 = 3b^2 \\implies b^2 = 3c^2",
          "explanation": "Substituting $a = 3c$ and dividing by $3$ shows $b^2$ is also a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Deduce that 3 divides b",
          "workingLatex": "3 \\mid b^2 \\implies 3 \\mid b",
          "explanation": "The prime $3$ dividing $b^2$ forces it to divide $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the contradiction",
          "workingLatex": "3 \\mid a \\text{ and } 3 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 3",
          "explanation": "Both $a$ and $b$ are divisible by $3$, contradicting the lowest-terms assumption.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\text{no rational } r \\text{ satisfies } r^2 = 3.",
          "explanation": "The assumption leads to an impossibility, so no such rational number can exist.",
          "diagram": null
        }
      ],
      "finalAnswer": "Any rational $r=\\frac{a}{b}$ in lowest terms with $r^2=3$ forces $3$ to divide both $a$ and $b$, contradicting $\\gcd(a,b)=1$; hence no rational number satisfies $r^2=3$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "Euclid's lemma", "divisibility"],
    "questionText": "Prove by contradiction that there do not exist integers $a$ and $b$, with $b \\neq 0$ and $\\frac{a}{b}$ in lowest terms, such that $a^2 = 5b^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume such integers } a,b \\text{ exist with } b \\neq 0,\\ \\gcd(a,b)=1,\\ a^2 = 5b^2.",
          "explanation": "We suppose such a pair exists and treat the equation and the lowest-terms condition together, aiming to make them clash.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the divisibility of a squared",
          "workingLatex": "a^2 = 5b^2 \\implies 5 \\mid a^2",
          "explanation": "The right-hand side is $5$ times an integer, so $a^2$ is a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Euclid's lemma with the prime 5",
          "workingLatex": "5 \\text{ prime and } 5 \\mid a^2 \\implies 5 \\mid a",
          "explanation": "Euclid's lemma says a prime dividing a product divides a factor. As $a^2 = a \\times a$, the prime $5$ dividing $a^2$ forces $5 \\mid a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write a as a multiple of 5",
          "workingLatex": "a = 5c, \\quad c \\in \\mathbb{Z}",
          "explanation": "Since $5$ divides $a$, we can write $a$ as five times some integer $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back into the equation",
          "workingLatex": "(5c)^2 = 5b^2 \\implies 25c^2 = 5b^2",
          "explanation": "Substituting $a = 5c$ preserves the equation and exposes the shared factors of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "b^2 = 5c^2",
          "explanation": "Dividing both sides by $5$ shows $b^2$ is also a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply Euclid's lemma again to b",
          "workingLatex": "5 \\mid b^2 \\implies 5 \\mid b",
          "explanation": "By Euclid's lemma once more, the prime $5$ dividing $b^2$ forces $5 \\mid b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the contradiction",
          "workingLatex": "5 \\mid a \\text{ and } 5 \\mid b \\ \\Rightarrow\\ \\gcd(a,b) \\geq 5",
          "explanation": "Now $5$ is a common factor of $a$ and $b$, directly contradicting the stated condition $\\gcd(a,b)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ \\text{no such integers } a,b \\text{ exist.}",
          "explanation": "The equation cannot hold for a fraction already in lowest terms, so no such pair of integers exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "Any integers with $a^2=5b^2$ and $\\gcd(a,b)=1$ would force $5$ to divide both $a$ and $b$ by Euclid's lemma, contradicting $\\gcd(a,b)=1$; hence no such integers exist. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "divisibility", "modular arithmetic"],
    "questionText": "Prove by contradiction that if $n$ is an integer and $n^2$ is a multiple of $3$, then $n$ is a multiple of $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Suppose } 3 \\mid n^2 \\text{ but, for contradiction, } 3 \\nmid n.",
          "explanation": "To contradict an 'if...then' statement we keep the hypothesis and deny the conclusion: we assume $n^2$ is a multiple of $3$ yet $n$ is not.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write n in terms of its remainder on division by 3",
          "workingLatex": "3 \\nmid n \\implies n = 3k+1 \\text{ or } n = 3k+2, \\quad k \\in \\mathbb{Z}",
          "explanation": "An integer not divisible by $3$ leaves a remainder of $1$ or $2$. Checking these two cases covers every such $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the first case",
          "workingLatex": "(3k+1)^2 = 9k^2 + 6k + 1",
          "explanation": "We expand the square so we can see the remainder of $n^2$ when divided by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Group the multiple of 3 in the first case",
          "workingLatex": "9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1",
          "explanation": "Factoring $3$ out of the first two terms leaves a remainder of $1$, so $n^2 \\equiv 1 \\pmod{3}$ here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the second case",
          "workingLatex": "(3k+2)^2 = 9k^2 + 12k + 4",
          "explanation": "We expand the second possibility in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Group the multiple of 3 in the second case",
          "workingLatex": "9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1",
          "explanation": "Writing $4$ as $3+1$ and collecting terms again leaves a remainder of $1$, so $n^2 \\equiv 1 \\pmod{3}$ here too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the cases",
          "workingLatex": "\\text{In both cases } n^2 \\equiv 1 \\pmod{3}, \\text{ so } 3 \\nmid n^2.",
          "explanation": "Every $n$ not divisible by $3$ gives a square leaving remainder $1$, meaning $n^2$ is never a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the contradiction",
          "workingLatex": "3 \\nmid n^2 \\text{ contradicts the hypothesis } 3 \\mid n^2.",
          "explanation": "This clashes directly with the given fact that $n^2$ is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ 3 \\mid n^2 \\implies 3 \\mid n.",
          "explanation": "The assumption $3 \\nmid n$ is impossible, so whenever $n^2$ is a multiple of $3$, $n$ must be too.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $3 \\nmid n$ then $n \\equiv 1$ or $2 \\pmod 3$ gives $n^2 \\equiv 1 \\pmod 3$, contradicting $3 \\mid n^2$; hence $3 \\mid n^2 \\implies 3 \\mid n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "divisibility", "modular arithmetic"],
    "questionText": "Prove by contradiction that if $n$ is an integer and $n^2$ is a multiple of $5$, then $n$ is a multiple of $5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Suppose } 5 \\mid n^2 \\text{ but, for contradiction, } 5 \\nmid n.",
          "explanation": "To contradict the implication we retain the hypothesis and deny the conclusion: assume $n^2$ is a multiple of $5$ but $n$ is not.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write n in terms of its remainder on division by 5",
          "workingLatex": "5 \\nmid n \\implies n = 5k + r, \\quad r \\in \\{1,2,3,4\\}, \\ k \\in \\mathbb{Z}",
          "explanation": "An integer not divisible by $5$ leaves one of the remainders $1,2,3,4$. These four cases cover every such $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the square in general",
          "workingLatex": "n^2 = (5k+r)^2 = 25k^2 + 10kr + r^2 = 5(5k^2 + 2kr) + r^2",
          "explanation": "The first two terms are multiples of $5$, so the remainder of $n^2$ on division by $5$ is the same as that of $r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reduce to the residue of r squared",
          "workingLatex": "n^2 \\equiv r^2 \\pmod{5}",
          "explanation": "This lets us test just the four small values of $r$ rather than every integer $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the residues for r = 1 and r = 2",
          "workingLatex": "r=1:\\ 1^2 = 1;\\qquad r=2:\\ 2^2 = 4",
          "explanation": "For remainders $1$ and $2$ the square leaves remainders $1$ and $4$, neither of which is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the residues for r = 3 and r = 4",
          "workingLatex": "r=3:\\ 3^2 = 9 \\equiv 4;\\qquad r=4:\\ 4^2 = 16 \\equiv 1 \\pmod{5}",
          "explanation": "For remainders $3$ and $4$ the square again leaves remainder $4$ or $1$, never $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all four cases",
          "workingLatex": "n^2 \\equiv 1 \\text{ or } 4 \\pmod{5}, \\text{ never } 0.",
          "explanation": "Across every possible remainder, $n^2$ is congruent to $1$ or $4$, so $n^2$ is never a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the contradiction",
          "workingLatex": "5 \\nmid n^2 \\text{ contradicts the hypothesis } 5 \\mid n^2.",
          "explanation": "This directly contradicts the given fact that $n^2$ is a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\therefore \\ 5 \\mid n^2 \\implies 5 \\mid n.",
          "explanation": "The assumption $5 \\nmid n$ is impossible, so whenever $n^2$ is a multiple of $5$, $n$ must be a multiple of $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $5 \\nmid n$ then $n \\equiv 1,2,3,4 \\pmod 5$ gives $n^2 \\equiv 1$ or $4 \\pmod 5$, never $0$, contradicting $5 \\mid n^2$; hence $5 \\mid n^2 \\implies 5 \\mid n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "cube root", "number theory"],
    "questionText": "Prove by contradiction that $\\sqrt[3]{2}$ (the cube root of 2) is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt[3]{2} \\text{ is rational.}",
          "explanation": "To prove a number is irrational we suppose the opposite, that it is rational, and hunt for an impossible consequence. If assuming rationality forces a contradiction, the assumption must be false.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the assumed value as a fraction in lowest terms.",
          "workingLatex": "\\sqrt[3]{2} = \\dfrac{a}{b}, \\quad a,b \\in \\mathbb{Z}^{+}, \\quad \\gcd(a,b)=1",
          "explanation": "Any rational number can be reduced to its simplest form, so we may cancel common factors first. Insisting $\\gcd(a,b)=1$ gives us the lever: any shared factor we later uncover will be the contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cube both sides to remove the root.",
          "workingLatex": "2 = \\dfrac{a^{3}}{b^{3}}",
          "explanation": "Cubing clears the cube root and turns the statement into one about ordinary integers, which are far easier to reason about.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the denominator.",
          "workingLatex": "a^{3} = 2b^{3}",
          "explanation": "Multiplying through by $b^{3}$ gives a clean integer equation and links $a^{3}$ directly to a multiple of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce that a cubed is even.",
          "workingLatex": "2 \\mid a^{3}",
          "explanation": "The right-hand side $2b^{3}$ is a multiple of $2$, so the left-hand side must be as well. Hence $a^{3}$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Deduce that a itself is even.",
          "workingLatex": "2 \\mid a^{3} \\implies 2 \\mid a",
          "explanation": "If $a$ were odd then $a^{3}$ would be odd, since a product of odd numbers is always odd. As $a^{3}$ is even, $a$ must be even too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce the factor of 2 explicitly.",
          "workingLatex": "a = 2c, \\quad c \\in \\mathbb{Z}^{+}",
          "explanation": "Because $a$ is even we can write it as $2$ times an integer $c$. This lets us follow the factor of $2$ through the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute a = 2c back into the equation.",
          "workingLatex": "(2c)^{3} = 2b^{3} \\implies 8c^{3} = 2b^{3}",
          "explanation": "Replacing $a$ exposes exactly how many factors of $2$ the equation really contains, which is the key to forcing the contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide through by 2.",
          "workingLatex": "4c^{3} = b^{3} \\implies b^{3} = 4c^{3}",
          "explanation": "Cancelling one factor of $2$ isolates $b^{3}$ and shows that it, too, is a multiple of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce that b cubed is even.",
          "workingLatex": "b^{3} = 2\\,(2c^{3}) \\implies 2 \\mid b^{3}",
          "explanation": "The right-hand side is plainly twice an integer, so $b^{3}$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Deduce that b is even.",
          "workingLatex": "2 \\mid b^{3} \\implies 2 \\mid b",
          "explanation": "By the same parity argument as before, an even cube forces an even base, so $b$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reach the contradiction.",
          "workingLatex": "2 \\mid a \\ \\text{and}\\ 2 \\mid b \\implies \\gcd(a,b) \\geq 2",
          "explanation": "We have now shown $a$ and $b$ share the factor $2$, yet we chose them to have no common factor. This directly contradicts $\\gcd(a,b)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ \\sqrt[3]{2} \\text{ is irrational.}",
          "explanation": "The assumption of rationality led to an impossibility, so it must be false. Therefore $\\sqrt[3]{2}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt[3]{2}=\\dfrac{a}{b}$ in lowest terms forces both $a$ and $b$ to be even, contradicting $\\gcd(a,b)=1$; hence no such fraction exists and $\\sqrt[3]{2}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "cube root", "prime factors"],
    "questionText": "Prove by contradiction that $\\sqrt[3]{3}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt[3]{3} \\text{ is rational.}",
          "explanation": "We negate the claim and suppose $\\sqrt[3]{3}$ is rational, aiming to derive something impossible from that supposition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write it as a fraction in lowest terms.",
          "workingLatex": "\\sqrt[3]{3} = \\dfrac{a}{b}, \\quad a,b \\in \\mathbb{Z}^{+}, \\quad \\gcd(a,b)=1",
          "explanation": "Reducing to lowest terms is always possible for a rational, and the coprimality condition is exactly what we will later violate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cube both sides.",
          "workingLatex": "3 = \\dfrac{a^{3}}{b^{3}}",
          "explanation": "Cubing removes the cube root and moves us into the world of integers where divisibility arguments work cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the denominator.",
          "workingLatex": "a^{3} = 3b^{3}",
          "explanation": "Multiplying by $b^{3}$ shows $a^{3}$ is exactly three times an integer, so $3$ divides $a^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce that 3 divides a cubed.",
          "workingLatex": "3 \\mid a^{3}",
          "explanation": "Since $a^{3}=3b^{3}$ is a multiple of $3$, the prime $3$ certainly divides $a^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use that 3 is prime to deduce 3 divides a.",
          "workingLatex": "3 \\text{ prime and } 3 \\mid a^{3} \\implies 3 \\mid a",
          "explanation": "Euclid's lemma says a prime dividing a product must divide one of the factors. Applied to $a^{3}=a\\cdot a\\cdot a$, the prime $3$ must divide $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce the factor of 3.",
          "workingLatex": "a = 3c, \\quad c \\in \\mathbb{Z}^{+}",
          "explanation": "Because $3$ divides $a$ we can write $a=3c$, allowing us to track the factor of $3$ through the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute a = 3c.",
          "workingLatex": "(3c)^{3} = 3b^{3} \\implies 27c^{3} = 3b^{3}",
          "explanation": "Substituting reveals how many factors of $3$ each side carries, which is what will trap us in a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide through by 3.",
          "workingLatex": "9c^{3} = b^{3} \\implies b^{3} = 9c^{3}",
          "explanation": "Cancelling one factor of $3$ isolates $b^{3}$ and shows it is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce that 3 divides b cubed.",
          "workingLatex": "b^{3} = 3\\,(3c^{3}) \\implies 3 \\mid b^{3}",
          "explanation": "The right-hand side is three times an integer, so $3$ divides $b^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Deduce that 3 divides b.",
          "workingLatex": "3 \\text{ prime and } 3 \\mid b^{3} \\implies 3 \\mid b",
          "explanation": "Applying Euclid's lemma again, the prime $3$ dividing $b^{3}$ forces it to divide $b$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reach the contradiction.",
          "workingLatex": "3 \\mid a \\ \\text{and}\\ 3 \\mid b \\implies \\gcd(a,b) \\geq 3",
          "explanation": "Now $a$ and $b$ share the factor $3$, contradicting our choice that they had no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ \\sqrt[3]{3} \\text{ is irrational.}",
          "explanation": "The rational assumption produced a contradiction, so it is false and $\\sqrt[3]{3}$ must be irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt[3]{3}=\\dfrac{a}{b}$ in lowest terms forces $3$ to divide both $a$ and $b$, contradicting $\\gcd(a,b)=1$; therefore $\\sqrt[3]{3}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "square root", "Euclid's lemma", "primes"],
    "questionText": "Prove by contradiction that for any prime number $p$, $\\sqrt{p}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Let } p \\text{ be prime. Assume, for contradiction, that } \\sqrt{p} \\text{ is rational.}",
          "explanation": "We keep $p$ a general prime and suppose $\\sqrt{p}$ is rational, so that the argument proves the result for every prime at once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the root as a fraction in lowest terms.",
          "workingLatex": "\\sqrt{p} = \\dfrac{a}{b}, \\quad a,b \\in \\mathbb{Z}^{+}, \\quad \\gcd(a,b)=1",
          "explanation": "A rational number always reduces to lowest terms, and the coprimality of $a$ and $b$ is the property we will contradict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides.",
          "workingLatex": "p = \\dfrac{a^{2}}{b^{2}}",
          "explanation": "Squaring removes the square root and gives a statement purely about integers and divisibility.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the denominator.",
          "workingLatex": "p\\,b^{2} = a^{2}",
          "explanation": "Multiplying by $b^{2}$ shows $a^{2}$ equals $p$ times an integer, so $p$ divides $a^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce that p divides a squared.",
          "workingLatex": "p \\mid a^{2}",
          "explanation": "Because $a^{2}=p\\,b^{2}$ is a multiple of $p$, the prime $p$ divides $a^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply Euclid's lemma.",
          "workingLatex": "p \\text{ prime and } p \\mid a\\cdot a \\implies p \\mid a",
          "explanation": "Euclid's lemma is essential here and is why we need $p$ prime: a prime dividing $a\\cdot a$ must divide one of the factors, so $p\\mid a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce the factor of p.",
          "workingLatex": "a = p\\,c, \\quad c \\in \\mathbb{Z}^{+}",
          "explanation": "Since $p$ divides $a$, we write $a=pc$ to carry the factor of $p$ explicitly into the next step.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute a = pc.",
          "workingLatex": "p\\,b^{2} = (p\\,c)^{2} = p^{2}c^{2}",
          "explanation": "Replacing $a$ with $pc$ shows the right-hand side now carries two factors of $p$, which we can partly cancel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide through by p.",
          "workingLatex": "b^{2} = p\\,c^{2}",
          "explanation": "Cancelling one factor of $p$ leaves $b^{2}$ equal to $p$ times an integer, so $p$ divides $b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce that p divides b squared.",
          "workingLatex": "p \\mid b^{2}",
          "explanation": "The equation $b^{2}=p\\,c^{2}$ makes $b^{2}$ a multiple of $p$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply Euclid's lemma again.",
          "workingLatex": "p \\text{ prime and } p \\mid b^{2} \\implies p \\mid b",
          "explanation": "As before, the prime $p$ dividing $b\\cdot b$ forces $p$ to divide $b$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reach the contradiction.",
          "workingLatex": "p \\mid a \\ \\text{and}\\ p \\mid b \\implies \\gcd(a,b) \\geq p > 1",
          "explanation": "Both $a$ and $b$ are divisible by $p$, so they share a common factor greater than $1$, contradicting $\\gcd(a,b)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude for every prime.",
          "workingLatex": "\\therefore\\ \\sqrt{p} \\text{ is irrational for every prime } p.",
          "explanation": "The contradiction did not depend on which prime $p$ was chosen, so $\\sqrt{p}$ is irrational for all primes $p$.",
          "diagram": null
        }
      ],
      "finalAnswer": "For any prime $p$, assuming $\\sqrt{p}=\\dfrac{a}{b}$ in lowest terms forces $p$ to divide both $a$ and $b$, contradicting $\\gcd(a,b)=1$; hence $\\sqrt{p}$ is irrational for every prime $p$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "square root"],
    "questionText": "Prove by contradiction that $\\sqrt{2}+\\sqrt{3}$ is irrational. (You may assume that $\\sqrt{2}$ is irrational.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{2}+\\sqrt{3} = r \\text{ is rational.}",
          "explanation": "We suppose the sum is rational and aim to show this would make $\\sqrt{2}$ rational too, which we are told is false.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record what we are allowed to assume.",
          "workingLatex": "r \\in \\mathbb{Q}, \\qquad \\sqrt{2} \\notin \\mathbb{Q}\\ \\text{(given)}",
          "explanation": "The strategy is to reach a statement that contradicts the given fact that $\\sqrt{2}$ is irrational.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show that r is non-zero.",
          "workingLatex": "\\sqrt{2}>0,\\ \\sqrt{3}>0 \\implies r = \\sqrt{2}+\\sqrt{3} > 0",
          "explanation": "Both surds are positive, so their sum is strictly positive. We need $r\\neq 0$ so that dividing by $r$ later is valid.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate one of the surds.",
          "workingLatex": "\\sqrt{3} = r - \\sqrt{2}",
          "explanation": "Moving $\\sqrt{2}$ to the other side prepares us to square and remove the $\\sqrt{3}$ term cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square both sides.",
          "workingLatex": "(\\sqrt{3})^{2} = (r - \\sqrt{2})^{2}",
          "explanation": "Squaring eliminates the left-hand surd while turning the right-hand side into an expression we can expand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the right-hand side.",
          "workingLatex": "3 = r^{2} - 2r\\sqrt{2} + 2",
          "explanation": "Using $(x-y)^2=x^2-2xy+y^2$ with $y=\\sqrt2$ gives $(\\sqrt2)^2=2$ and leaves a single surviving surd term $-2r\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the rational terms.",
          "workingLatex": "3 = r^{2} + 2 - 2r\\sqrt{2}",
          "explanation": "Grouping the non-surd terms together makes it easy to isolate the one term that still contains $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Isolate the surd term.",
          "workingLatex": "2r\\sqrt{2} = r^{2} + 2 - 3 = r^{2} - 1",
          "explanation": "Rearranging leaves $\\sqrt{2}$ trapped on one side multiplied by the rational quantity $2r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the square root of 2.",
          "workingLatex": "\\sqrt{2} = \\dfrac{r^{2} - 1}{2r} \\qquad (r \\neq 0)",
          "explanation": "Dividing by $2r$ is allowed because $r\\neq 0$, and it expresses $\\sqrt{2}$ entirely in terms of the rational number $r$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Argue the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q} \\implies r^{2}-1 \\in \\mathbb{Q},\\ 2r \\in \\mathbb{Q}\\setminus\\{0\\} \\implies \\dfrac{r^{2}-1}{2r} \\in \\mathbb{Q}",
          "explanation": "The rationals are closed under multiplication, subtraction and division by a non-zero rational, so the whole fraction is rational.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Deduce the square root of 2 is rational.",
          "workingLatex": "\\therefore\\ \\sqrt{2} \\in \\mathbb{Q}",
          "explanation": "Since $\\sqrt{2}$ equals a rational number, it would itself have to be rational.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reach the contradiction.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts}\\ \\sqrt{2} \\notin \\mathbb{Q}",
          "explanation": "This flatly contradicts the given fact that $\\sqrt{2}$ is irrational, so our assumption must be wrong.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ \\sqrt{2}+\\sqrt{3} \\text{ is irrational.}",
          "explanation": "The assumption that the sum is rational is impossible, so $\\sqrt{2}+\\sqrt{3}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{2}+\\sqrt{3}=r$ is rational leads to $\\sqrt{2}=\\dfrac{r^{2}-1}{2r}\\in\\mathbb{Q}$, contradicting that $\\sqrt{2}$ is irrational; hence $\\sqrt{2}+\\sqrt{3}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "case analysis"],
    "questionText": "Prove by contradiction that $\\sqrt{3}-\\sqrt{2}$ is irrational. (You may assume that $\\sqrt{2}$ is irrational.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{3}-\\sqrt{2} = r \\text{ is rational.}",
          "explanation": "We suppose the difference is rational and aim to reach a statement that clashes with the given irrationality of $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate the square root of 3.",
          "workingLatex": "\\sqrt{3} = r + \\sqrt{2}",
          "explanation": "Moving $\\sqrt{2}$ across leaves a single surd on the left, ready to be removed by squaring.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides.",
          "workingLatex": "(\\sqrt{3})^{2} = (r + \\sqrt{2})^{2}",
          "explanation": "Squaring clears the left-hand surd and produces an expression we can expand on the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the right-hand side.",
          "workingLatex": "3 = r^{2} + 2r\\sqrt{2} + 2",
          "explanation": "Using $(x+y)^2=x^2+2xy+y^2$ with $y=\\sqrt2$ gives $(\\sqrt2)^2=2$ and leaves the single surd term $2r\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the rational terms.",
          "workingLatex": "3 = r^{2} + 2 + 2r\\sqrt{2}",
          "explanation": "Grouping the non-surd terms makes the lone surd term easy to isolate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Isolate the surd term.",
          "workingLatex": "2r\\sqrt{2} = 3 - r^{2} - 2 = 1 - r^{2}",
          "explanation": "Rearranging leaves $\\sqrt{2}$ multiplied by $2r$ on one side and a rational quantity on the other.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise the need for a case split.",
          "workingLatex": "\\text{To solve for } \\sqrt{2} \\text{ we divide by } 2r, \\text{ so consider } r \\neq 0 \\text{ and } r = 0 \\text{ separately.}",
          "explanation": "Dividing by $2r$ is only valid when $r\\neq 0$, so we handle the two possibilities in turn to be rigorous.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case 1: r is non-zero.",
          "workingLatex": "r \\neq 0:\\quad \\sqrt{2} = \\dfrac{1 - r^{2}}{2r}",
          "explanation": "When $r\\neq 0$ we may safely divide, expressing $\\sqrt{2}$ as a fraction built from the rational number $r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Show the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q} \\implies \\dfrac{1 - r^{2}}{2r} \\in \\mathbb{Q} \\implies \\sqrt{2} \\in \\mathbb{Q}",
          "explanation": "The rationals are closed under subtraction, multiplication and division by a non-zero rational, so $\\sqrt{2}$ would be rational.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Contradiction in Case 1.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts the given } \\sqrt{2} \\notin \\mathbb{Q}",
          "explanation": "This directly contradicts the assumed fact that $\\sqrt{2}$ is irrational, so Case 1 is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Case 2: r equals zero.",
          "workingLatex": "r = 0:\\quad \\sqrt{3} - \\sqrt{2} = 0 \\implies \\sqrt{3} = \\sqrt{2}",
          "explanation": "If $r=0$ the original difference is zero, which would make the two surds equal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Square to test Case 2.",
          "workingLatex": "(\\sqrt{3})^{2} = (\\sqrt{2})^{2} \\implies 3 = 2",
          "explanation": "Squaring the supposed equality gives $3=2$, which is plainly false.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Contradiction in Case 2.",
          "workingLatex": "3 = 2 \\text{ is false, so Case 2 is impossible.}",
          "explanation": "The false numerical statement rules out $r=0$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Combine the cases and conclude.",
          "workingLatex": "\\text{Both } r \\neq 0 \\text{ and } r = 0 \\text{ lead to contradictions} \\implies \\sqrt{3}-\\sqrt{2} \\text{ is irrational.}",
          "explanation": "Every possibility for $r$ is impossible, so the difference cannot be rational and is therefore irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Whether $r\\neq 0$ (forcing $\\sqrt{2}\\in\\mathbb{Q}$) or $r=0$ (forcing $3=2$), the assumption that $\\sqrt{3}-\\sqrt{2}=r$ is rational fails, so $\\sqrt{3}-\\sqrt{2}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "square root"],
    "questionText": "Prove by contradiction that $\\sqrt{2}+\\sqrt{5}$ is irrational. (You may assume that $\\sqrt{2}$ is irrational.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{2}+\\sqrt{5} = r \\text{ is rational.}",
          "explanation": "We suppose the sum is rational, planning to show this would force $\\sqrt{2}$ to be rational, contradicting what we are given.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that r is non-zero.",
          "workingLatex": "\\sqrt{2}>0,\\ \\sqrt{5}>0 \\implies r = \\sqrt{2}+\\sqrt{5} > 0",
          "explanation": "Both surds are positive, so $r>0$. We record $r\\neq 0$ so that dividing by $r$ later is legitimate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the square root of 5.",
          "workingLatex": "\\sqrt{5} = r - \\sqrt{2}",
          "explanation": "Placing $\\sqrt{5}$ alone lets us square to remove it and leave only a $\\sqrt{2}$ term to analyse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square both sides.",
          "workingLatex": "(\\sqrt{5})^{2} = (r - \\sqrt{2})^{2}",
          "explanation": "Squaring removes the $\\sqrt{5}$ and creates an expression we can expand.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the right-hand side.",
          "workingLatex": "5 = r^{2} - 2r\\sqrt{2} + 2",
          "explanation": "Expanding $(r-\\sqrt2)^2$ gives $(\\sqrt2)^2=2$ and the surviving surd term $-2r\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the rational terms.",
          "workingLatex": "5 = r^{2} + 2 - 2r\\sqrt{2}",
          "explanation": "Grouping the non-surd terms isolates the single term containing $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Isolate the surd term.",
          "workingLatex": "2r\\sqrt{2} = r^{2} + 2 - 5 = r^{2} - 3",
          "explanation": "Rearranging leaves $\\sqrt{2}$ multiplied by the rational quantity $2r$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the square root of 2.",
          "workingLatex": "\\sqrt{2} = \\dfrac{r^{2} - 3}{2r} \\qquad (r \\neq 0)",
          "explanation": "Dividing by $2r$ is valid because $r\\neq 0$, expressing $\\sqrt{2}$ purely in terms of the rational $r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Argue the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q} \\implies r^{2}-3 \\in \\mathbb{Q},\\ 2r \\in \\mathbb{Q}\\setminus\\{0\\} \\implies \\dfrac{r^{2}-3}{2r} \\in \\mathbb{Q}",
          "explanation": "The rationals are closed under subtraction, multiplication and division by a non-zero rational, so the fraction is rational.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce the square root of 2 is rational.",
          "workingLatex": "\\therefore\\ \\sqrt{2} \\in \\mathbb{Q}",
          "explanation": "Because $\\sqrt{2}$ equals a rational number, it would have to be rational itself.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reach the contradiction.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts}\\ \\sqrt{2} \\notin \\mathbb{Q}",
          "explanation": "This contradicts the given fact that $\\sqrt{2}$ is irrational, so the assumption is untenable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the assumption.",
          "workingLatex": "\\text{The supposition that } \\sqrt{2}+\\sqrt{5} \\in \\mathbb{Q} \\text{ is therefore false.}",
          "explanation": "Every deduction from the assumption was valid, so the impossibility we reached condemns the only free choice we made: the assumption itself.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ \\sqrt{2}+\\sqrt{5} \\text{ is irrational.}",
          "explanation": "Since assuming rationality is impossible, $\\sqrt{2}+\\sqrt{5}$ must be irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{2}+\\sqrt{5}=r$ is rational leads to $\\sqrt{2}=\\dfrac{r^{2}-3}{2r}\\in\\mathbb{Q}$, contradicting that $\\sqrt{2}$ is irrational; hence $\\sqrt{2}+\\sqrt{5}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["proof by contradiction", "infinitude of primes", "number theory", "Euclid"],
    "questionText": "Prove by contradiction that there are infinitely many prime numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that there are only finitely many primes.}",
          "explanation": "To show a set is infinite by contradiction we assume it is finite and then construct something that cannot exist under that assumption.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List every prime.",
          "workingLatex": "p_{1}, p_{2}, \\ldots, p_{n} \\quad \\text{is the complete list of all primes.}",
          "explanation": "If there are only finitely many, we can label them all. Crucially, this list is claimed to contain every prime that exists.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Construct a new number.",
          "workingLatex": "N = p_{1}p_{2}\\cdots p_{n} + 1",
          "explanation": "Multiplying all the primes and adding $1$ is Euclid's clever construction; the $+1$ is what prevents any listed prime from dividing $N$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note that N exceeds 1.",
          "workingLatex": "p_{1}p_{2}\\cdots p_{n} \\geq 2 \\implies N \\geq 3 > 1",
          "explanation": "The product of primes is at least $2$, so $N$ is at least $3$. This matters because every integer greater than $1$ has a prime factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Extract a prime factor of N.",
          "workingLatex": "N > 1 \\implies N \\text{ has a prime factor } q",
          "explanation": "By the fundamental theorem of arithmetic, every integer greater than $1$ is divisible by at least one prime.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate q in the list.",
          "workingLatex": "q \\text{ is prime} \\implies q = p_{i} \\text{ for some } i \\in \\{1,\\ldots,n\\}",
          "explanation": "Since our list was supposed to contain every prime, the prime $q$ must be one of the $p_{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note q divides the product.",
          "workingLatex": "q = p_{i} \\implies q \\mid p_{1}p_{2}\\cdots p_{n}",
          "explanation": "Because $q$ is one of the factors in the product, it certainly divides that product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall q also divides N.",
          "workingLatex": "q \\mid N \\quad \\text{and} \\quad q \\mid p_{1}p_{2}\\cdots p_{n}",
          "explanation": "We chose $q$ as a prime factor of $N$, and we have just shown it divides the product as well.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide their difference.",
          "workingLatex": "q \\mid \\bigl(N - p_{1}p_{2}\\cdots p_{n}\\bigr)",
          "explanation": "If a number divides two quantities, it divides their difference. This lets us cancel the large product and expose what remains.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the difference.",
          "workingLatex": "N - p_{1}p_{2}\\cdots p_{n} = 1 \\implies q \\mid 1",
          "explanation": "The difference is exactly the $+1$ from our construction, so $q$ would have to divide $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reach the contradiction.",
          "workingLatex": "q \\geq 2 \\ \\text{but}\\ q \\mid 1 \\text{ is impossible}",
          "explanation": "No prime, being at least $2$, can divide $1$. This is the impossibility the assumption created.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the finiteness assumption.",
          "workingLatex": "\\text{The assumption that the primes form a finite list is therefore false.}",
          "explanation": "Because each step from the assumption was valid yet the outcome was impossible, the assumption itself must be discarded.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\text{ there are infinitely many primes.}",
          "explanation": "Assuming finitely many primes led to a contradiction, so the primes cannot be finite; there are infinitely many.",
          "diagram": null
        }
      ],
      "finalAnswer": "If the primes were the finite list $p_{1},\\ldots,p_{n}$, then $N=p_{1}\\cdots p_{n}+1$ would have a prime factor dividing $1$, which is impossible; hence there are infinitely many primes. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "primes", "factorials", "number theory"],
    "questionText": "Prove by contradiction that there is no largest prime number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that there is a largest prime } P.",
          "explanation": "We negate the claim by supposing a largest prime exists, and then build a prime that is provably bigger.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what P being largest means.",
          "workingLatex": "\\text{Every prime } q \\text{ satisfies } q \\leq P.",
          "explanation": "If $P$ is the largest prime, then no prime can exceed it. This is the property we will contradict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Construct a number using the factorial.",
          "workingLatex": "N = P! + 1, \\qquad P! = 1\\cdot 2\\cdot 3 \\cdots P",
          "explanation": "The factorial $P!$ is divisible by every integer up to $P$; adding $1$ will make sure none of those small primes divides $N$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note that N exceeds 1.",
          "workingLatex": "P \\geq 2 \\implies P! \\geq 2 \\implies N = P! + 1 \\geq 3 > 1",
          "explanation": "Since $N>1$, it must have at least one prime factor, which is the object we will study.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take any prime not exceeding P.",
          "workingLatex": "\\text{Let } r \\text{ be prime with } r \\leq P.",
          "explanation": "We test whether any prime up to $P$ could divide $N$; showing none can is the heart of the argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Show r divides the factorial.",
          "workingLatex": "r \\leq P \\implies r \\mid P!",
          "explanation": "Because $r$ appears as one of the factors $1,2,\\ldots,P$, it divides the product $P!$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show r cannot divide N.",
          "workingLatex": "r \\mid P! \\ \\text{and}\\ N = P! + 1 \\implies r \\nmid N \\ (\\text{else } r \\mid 1)",
          "explanation": "If $r$ divided both $P!$ and $N=P!+1$, it would divide their difference $1$, which is impossible; so $r$ does not divide $N$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude no small prime divides N.",
          "workingLatex": "\\text{No prime } r \\leq P \\text{ divides } N.",
          "explanation": "The argument applies to every prime up to $P$, so none of them is a factor of $N$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Extract a prime factor of N.",
          "workingLatex": "N > 1 \\implies N \\text{ has a prime factor } q",
          "explanation": "Every integer greater than $1$ has a prime factor, so such a prime $q$ exists for $N$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce that this prime exceeds P.",
          "workingLatex": "q \\mid N \\ \\text{and no prime} \\leq P \\text{ divides } N \\implies q > P",
          "explanation": "Since no prime up to $P$ divides $N$, the prime factor $q$ must be strictly greater than $P$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reach the contradiction.",
          "workingLatex": "q \\text{ prime and } q > P \\ \\text{contradicts } P \\text{ being the largest prime.}",
          "explanation": "We have produced a prime larger than the supposed largest prime, which is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the assumption.",
          "workingLatex": "\\text{The supposition that a largest prime } P \\text{ exists is therefore false.}",
          "explanation": "Producing a prime larger than the supposed maximum is impossible, so the assumption that a maximum exists must be abandoned.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\text{ there is no largest prime number.}",
          "explanation": "The assumption of a largest prime collapsed, so no largest prime can exist.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $P$ were the largest prime, then $N=P!+1$ would have a prime factor $q>P$, contradicting the maximality of $P$; hence there is no largest prime. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["proof by contradiction", "infinitude of primes", "modular arithmetic", "number theory"],
    "questionText": "Prove by contradiction that there are infinitely many prime numbers of the form $4k+3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note that such primes exist.",
          "workingLatex": "3 = 4(0)+3,\\ 7 = 4(1)+3,\\ 11 = 4(2)+3 \\quad \\text{are primes} \\equiv 3 \\pmod{4}",
          "explanation": "It is worth confirming the objects we are counting actually exist, so the claim of infinitely many is meaningful.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume only finitely many primes} \\equiv 3 \\pmod{4}:\\ q_{1}, q_{2}, \\ldots, q_{m}.",
          "explanation": "We suppose there are only finitely many such primes and list them all, aiming to build one that escapes the list.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Construct a suitable number.",
          "workingLatex": "N = 4\\,q_{1}q_{2}\\cdots q_{m} - 1",
          "explanation": "This construction is engineered so that $N$ leaves remainder $3$ on division by $4$, while linking $N$ to every prime on the list.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find N modulo 4.",
          "workingLatex": "N = 4\\,q_{1}\\cdots q_{m} - 1 \\equiv -1 \\equiv 3 \\pmod{4}",
          "explanation": "The multiple of $4$ vanishes modulo $4$, leaving $-1$, which is the same as $3$ modulo $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note N is greater than 1 and odd.",
          "workingLatex": "N \\geq 4(3) - 1 = 11 > 1, \\qquad N \\text{ odd (even} - 1)",
          "explanation": "Since $4q_1\\cdots q_m$ is even, subtracting $1$ makes $N$ odd; and $N>1$ guarantees it has prime factors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the prime factors of N.",
          "workingLatex": "N \\text{ odd} \\implies 2 \\nmid N \\implies \\text{every prime factor is odd} \\equiv 1 \\text{ or } 3 \\pmod{4}",
          "explanation": "An odd number has only odd prime factors, and every odd prime is congruent to $1$ or $3$ modulo $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rule out all factors being 1 mod 4.",
          "workingLatex": "\\text{If every prime factor} \\equiv 1 \\pmod{4}, \\text{ then their product} \\equiv 1 \\pmod{4}",
          "explanation": "A product of numbers each congruent to $1$ modulo $4$ stays congruent to $1$, since $1\\times 1\\equiv 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with N modulo 4.",
          "workingLatex": "\\text{but } N \\equiv 3 \\pmod{4} \\neq 1 \\pmod{4}",
          "explanation": "Because $N\\equiv 3$, not all its prime factors can be congruent to $1$ modulo $4$; at least one must be different.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Deduce a factor congruent to 3 mod 4.",
          "workingLatex": "\\implies N \\text{ has a prime factor } r \\equiv 3 \\pmod{4}",
          "explanation": "Since the only other option for an odd prime is $3$ modulo $4$, such a prime factor $r$ must occur.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Locate r in the list.",
          "workingLatex": "r \\equiv 3 \\pmod{4} \\implies r \\in \\{q_{1}, \\ldots, q_{m}\\}",
          "explanation": "By assumption the list contains every prime congruent to $3$ modulo $4$, so $r$ must be one of the $q_i$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Show r divides the multiple.",
          "workingLatex": "r \\mid q_{1}\\cdots q_{m} \\implies r \\mid 4\\,q_{1}\\cdots q_{m}",
          "explanation": "As one of the listed primes, $r$ divides their product, and hence also $4$ times that product.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine with r dividing N.",
          "workingLatex": "r \\mid 4\\,q_{1}\\cdots q_{m} \\ \\text{and}\\ r \\mid N \\implies r \\mid \\bigl(4\\,q_{1}\\cdots q_{m} - N\\bigr)",
          "explanation": "A common divisor of two numbers divides their difference, which lets us cancel the large product.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the difference.",
          "workingLatex": "4\\,q_{1}\\cdots q_{m} - N = 4\\,q_{1}\\cdots q_{m} - (4\\,q_{1}\\cdots q_{m} - 1) = 1 \\implies r \\mid 1",
          "explanation": "The difference collapses to $1$, so $r$ would have to divide $1$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Reach the contradiction.",
          "workingLatex": "r \\geq 3 \\ \\text{but}\\ r \\mid 1 \\text{ is impossible}",
          "explanation": "A prime is at least $3$ here and cannot divide $1$, giving the contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\text{ there are infinitely many primes of the form } 4k+3.",
          "explanation": "The finiteness assumption produced an impossibility, so infinitely many primes of the form $4k+3$ must exist.",
          "diagram": null
        }
      ],
      "finalAnswer": "If the primes $\\equiv 3 \\pmod 4$ were the finite list $q_{1},\\ldots,q_{m}$, then $N=4q_{1}\\cdots q_{m}-1$ would have a prime factor $r\\equiv 3\\pmod 4$ dividing $1$, which is impossible; hence there are infinitely many primes of the form $4k+3$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "logarithms", "irrationality", "parity"],
    "questionText": "Prove by contradiction that $\\log_{2}3$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } \\log_{2}3 \\text{ is rational.}",
          "explanation": "We suppose $\\log_2 3$ is rational and aim to turn the logarithm into an integer equation that cannot hold.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the value between 1 and 2.",
          "workingLatex": "2 < 3 < 4 \\implies \\log_{2}2 < \\log_{2}3 < \\log_{2}4 \\implies 1 < \\log_{2}3 < 2",
          "explanation": "Because $\\log_2$ is increasing, $\\log_2 3$ lies strictly between $1$ and $2$; in particular it is positive, so its fraction form uses positive integers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write it as a fraction in lowest terms.",
          "workingLatex": "\\log_{2}3 = \\dfrac{p}{q}, \\quad p,q \\in \\mathbb{Z}^{+}, \\quad \\gcd(p,q)=1",
          "explanation": "A positive rational can be written with positive integers $p$ and $q$; the lowest-terms form is standard though the contradiction here comes from parity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite in exponential form.",
          "workingLatex": "\\log_{2}3 = \\dfrac{p}{q} \\iff 2^{\\,p/q} = 3",
          "explanation": "By the definition of a logarithm, $\\log_2 3=\\tfrac{p}{q}$ means exactly that $2$ raised to $\\tfrac{p}{q}$ gives $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Raise both sides to the power q.",
          "workingLatex": "\\bigl(2^{\\,p/q}\\bigr)^{q} = 3^{q} \\implies 2^{p} = 3^{q}",
          "explanation": "Both sides are positive, so raising to the $q$th power is valid and clears the fractional exponent, leaving a clean integer equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Record that the exponents are at least 1.",
          "workingLatex": "p, q \\in \\mathbb{Z}^{+} \\implies p \\geq 1,\\ q \\geq 1",
          "explanation": "Both exponents are positive integers, which is what makes the two sides genuinely even and odd respectively.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Analyse the parity of the left side.",
          "workingLatex": "p \\geq 1 \\implies 2^{p} \\text{ is even}",
          "explanation": "Any positive power of $2$ contains the factor $2$, so the left-hand side is even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Analyse the parity of the right side.",
          "workingLatex": "3^{q} \\text{ is a product of odd numbers} \\implies 3^{q} \\text{ is odd}",
          "explanation": "A product of odd numbers is odd, so the right-hand side is odd.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reach the contradiction via parity.",
          "workingLatex": "2^{p} \\text{ even} = 3^{q} \\text{ odd} \\ \\text{is impossible}",
          "explanation": "An even number can never equal an odd number, so the equation cannot hold.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reinforce using unique factorisation.",
          "workingLatex": "2^{p} = 3^{q} \\text{ needs equal prime factorisations, forcing } p=q=0",
          "explanation": "The only way a power of $2$ can equal a power of $3$ is if both are $1$, i.e. $p=q=0$; unique factorisation of integers permits nothing else.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Contradict the positivity of the exponents.",
          "workingLatex": "p = q = 0 \\ \\text{contradicts}\\ p \\geq 1,\\ q \\geq 1",
          "explanation": "But we established $p$ and $q$ are at least $1$, so they cannot be $0$; the contradiction is confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the assumption.",
          "workingLatex": "\\text{The supposition that } \\log_{2}3 \\in \\mathbb{Q} \\text{ is therefore false.}",
          "explanation": "The chain of deductions was sound, so the impossibility it reached condemns the starting assumption.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ \\log_{2}3 \\text{ is irrational.}",
          "explanation": "The rational assumption forced an impossible integer equation, so $\\log_2 3$ must be irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\log_{2}3=\\dfrac{p}{q}$ gives $2^{p}=3^{q}$, an even number equal to an odd number, which is impossible; hence $\\log_{2}3$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "logarithms", "irrationality", "prime factorisation"],
    "questionText": "Prove by contradiction that $\\log_{10}2$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } \\log_{10}2 \\text{ is rational.}",
          "explanation": "We suppose $\\log_{10}2$ is rational, planning to convert it into an integer equation involving powers of $2$ and $5$ that cannot balance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the value between 0 and 1.",
          "workingLatex": "1 < 2 < 10 \\implies 0 < \\log_{10}2 < 1",
          "explanation": "Since $\\log_{10}$ is increasing and $2$ lies between $1$ and $10$, the value is positive, so it can be written with positive integers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write it as a fraction of positive integers.",
          "workingLatex": "\\log_{10}2 = \\dfrac{p}{q}, \\quad p,q \\in \\mathbb{Z}^{+}",
          "explanation": "A positive rational number can be expressed with positive integers $p$ and $q$, giving us something concrete to manipulate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite in exponential form.",
          "workingLatex": "\\log_{10}2 = \\dfrac{p}{q} \\iff 10^{\\,p/q} = 2",
          "explanation": "By definition of the logarithm, this states that $10$ raised to the power $\\tfrac{p}{q}$ equals $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Raise both sides to the power q.",
          "workingLatex": "\\bigl(10^{\\,p/q}\\bigr)^{q} = 2^{q} \\implies 10^{p} = 2^{q}",
          "explanation": "Both sides are positive, so raising to the $q$th power clears the fractional exponent and gives an integer equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise 10 into primes.",
          "workingLatex": "10^{p} = (2 \\cdot 5)^{p} = 2^{p} \\, 5^{p} \\implies 2^{p}\\,5^{p} = 2^{q}",
          "explanation": "Writing $10=2\\times 5$ exposes the separate powers of the primes $2$ and $5$, which we can compare directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common power of 2.",
          "workingLatex": "5^{p} = 2^{\\,q-p}",
          "explanation": "Dividing both sides by $2^{p}$ leaves a pure power of $5$ equal to a pure power of $2$, which is the crux of the argument.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Show the exponent on the right is positive.",
          "workingLatex": "p \\geq 1 \\implies 5^{p} \\geq 5 > 1 \\implies 2^{\\,q-p} > 1 \\implies q - p \\geq 1",
          "explanation": "The left-hand side exceeds $1$, so the right-hand side must too, which forces the exponent $q-p$ to be a positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the left side is divisible by 5.",
          "workingLatex": "p \\geq 1 \\implies 5 \\mid 5^{p}",
          "explanation": "Any positive power of $5$ carries the factor $5$, so the left-hand side is divisible by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the right side is not divisible by 5.",
          "workingLatex": "2^{\\,q-p} \\text{ has only the prime factor } 2 \\implies 5 \\nmid 2^{\\,q-p}",
          "explanation": "By unique factorisation a power of $2$ contains no factor of $5$, so it can never be divisible by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reach the contradiction.",
          "workingLatex": "5 \\mid 5^{p} = 2^{\\,q-p} \\ \\text{but}\\ 5 \\nmid 2^{\\,q-p}",
          "explanation": "The same number would be both divisible and not divisible by $5$, which is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the assumption.",
          "workingLatex": "\\text{The supposition that } \\log_{10}2 \\in \\mathbb{Q} \\text{ is therefore false.}",
          "explanation": "Every deduction from the assumption was valid, so the divisibility clash it produced forces us to discard it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ \\log_{10}2 \\text{ is irrational.}",
          "explanation": "The rational assumption led to a contradiction in divisibility, so $\\log_{10}2$ must be irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\log_{10}2=\\dfrac{p}{q}$ gives $5^{p}=2^{\\,q-p}$, a multiple of $5$ equal to a power of $2$, which is impossible; hence $\\log_{10}2$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "modular arithmetic", "Pythagorean triples", "parity"],
    "questionText": "Prove by contradiction that if $a$, $b$, $c$ are positive integers with $a^{2}+b^{2}=c^{2}$, then $a$ and $b$ are not both odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } a \\text{ and } b \\text{ are both odd, with } a^{2}+b^{2}=c^{2}.",
          "explanation": "The claim is that they are not both odd, so we negate it by assuming they are both odd and seek an impossibility using arithmetic modulo $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the odd numbers explicitly.",
          "workingLatex": "a = 2m+1, \\quad b = 2n+1, \\qquad m,n \\in \\mathbb{Z}_{\\geq 0}",
          "explanation": "Every odd integer has the form $2\\times(\\text{integer})+1$, which lets us compute the squares precisely.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the first odd number.",
          "workingLatex": "a^{2} = (2m+1)^{2} = 4m^{2} + 4m + 1 = 4(m^{2}+m) + 1",
          "explanation": "Expanding shows every term except the final $+1$ is a multiple of $4$, isolating the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reduce the first square modulo 4.",
          "workingLatex": "a^{2} \\equiv 1 \\pmod{4}",
          "explanation": "Since $4(m^{2}+m)$ is a multiple of $4$, the square leaves remainder $1$ modulo $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the second odd number.",
          "workingLatex": "b^{2} = (2n+1)^{2} = 4(n^{2}+n) + 1 \\equiv 1 \\pmod{4}",
          "explanation": "By identical reasoning, the square of any odd number is congruent to $1$ modulo $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two squares modulo 4.",
          "workingLatex": "a^{2} + b^{2} \\equiv 1 + 1 = 2 \\pmod{4}",
          "explanation": "Adding the two remainders gives a sum congruent to $2$ modulo $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bring in the Pythagorean relation.",
          "workingLatex": "a^{2}+b^{2}=c^{2} \\implies c^{2} \\equiv 2 \\pmod{4}",
          "explanation": "Substituting the hypothesis forces the square $c^{2}$ to be congruent to $2$ modulo $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Consider c even.",
          "workingLatex": "c = 2k \\implies c^{2} = 4k^{2} \\equiv 0 \\pmod{4}",
          "explanation": "If $c$ is even, its square is a multiple of $4$, giving remainder $0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Consider c odd.",
          "workingLatex": "c = 2j+1 \\implies c^{2} = 4(j^{2}+j) + 1 \\equiv 1 \\pmod{4}",
          "explanation": "If $c$ is odd, its square leaves remainder $1$, exactly as we found for $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List the possible values of a square modulo 4.",
          "workingLatex": "\\text{For every integer } c:\\quad c^{2} \\equiv 0 \\ \\text{or}\\ 1 \\pmod{4}",
          "explanation": "The two cases exhaust all integers, so a perfect square is never congruent to $2$ or $3$ modulo $4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reach the contradiction.",
          "workingLatex": "c^{2} \\equiv 2 \\pmod{4} \\ \\text{contradicts}\\ c^{2} \\equiv 0 \\ \\text{or}\\ 1 \\pmod{4}",
          "explanation": "We needed $c^{2}\\equiv 2$, but no square can be $2$ modulo $4$; the assumption is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the assumption.",
          "workingLatex": "\\text{The supposition that } a \\text{ and } b \\text{ are both odd is therefore false.}",
          "explanation": "The modular argument was valid, so the impossibility it reached rules out both $a$ and $b$ being odd.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ a \\text{ and } b \\text{ are not both odd.}",
          "explanation": "Assuming both $a$ and $b$ odd led to a contradiction, so in any such Pythagorean triple they cannot both be odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $a$ and $b$ were both odd then $a^{2}+b^{2}\\equiv 2\\pmod 4$, forcing $c^{2}\\equiv 2\\pmod 4$, yet every square is $\\equiv 0$ or $1\\pmod 4$; this contradiction shows $a$ and $b$ cannot both be odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "infinite descent", "minimal counterexample"],
    "questionText": "Prove by contradiction that $\\sqrt{2}$ is irrational, using a smallest-denominator (minimal counterexample) argument.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{2} \\text{ is rational.}",
          "explanation": "We suppose $\\sqrt{2}$ is rational and will use a smallest-element argument to manufacture an ever-smaller denominator, which cannot go on forever.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the set of good denominators.",
          "workingLatex": "S = \\{\\, b \\in \\mathbb{Z}^{+} : b\\sqrt{2} \\in \\mathbb{Z} \\,\\}",
          "explanation": "We gather all positive integers $b$ for which $b\\sqrt2$ is a whole number; these are exactly the denominators that could express $\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show the set is non-empty.",
          "workingLatex": "\\sqrt{2} = \\dfrac{p}{q} \\implies q\\sqrt{2} = p \\in \\mathbb{Z} \\implies q \\in S",
          "explanation": "If $\\sqrt2$ is rational, its denominator $q$ makes $q\\sqrt2$ an integer, so $S$ contains at least $q$ and is non-empty.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the smallest element.",
          "workingLatex": "\\text{By well-ordering, let } b = \\min S \\text{ and set } a = b\\sqrt{2} \\in \\mathbb{Z}.",
          "explanation": "Any non-empty set of positive integers has a least element, so a smallest denominator $b$ exists; this minimality is what we will contradict.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Bound the square root of 2.",
          "workingLatex": "1 < 2 < 4 \\implies 1 < \\sqrt{2} < 2",
          "explanation": "Taking square roots of $1<2<4$ pins $\\sqrt2$ strictly between $1$ and $2$, which controls the size of $a$ relative to $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Translate the bound to a and b.",
          "workingLatex": "b > 0 \\implies b < b\\sqrt{2} < 2b \\implies b < a < 2b",
          "explanation": "Multiplying the inequality by the positive integer $b$ shows $a$ lies strictly between $b$ and $2b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Define a smaller candidate.",
          "workingLatex": "b' = a - b",
          "explanation": "We build a new potential denominator by subtracting $b$ from $a$; the aim is to show $b'$ is a valid but smaller member of $S$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Show the candidate is positive.",
          "workingLatex": "a > b \\implies b' = a - b > 0",
          "explanation": "Because $a$ exceeds $b$, the difference $b'$ is strictly positive, so it is a genuine positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Show the candidate is smaller than b.",
          "workingLatex": "a < 2b \\implies b' = a - b < b",
          "explanation": "Since $a$ is less than $2b$, subtracting $b$ leaves something below $b$, so $b'<b$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Record the size of the candidate.",
          "workingLatex": "0 < b' < b",
          "explanation": "Combining the two inequalities, $b'$ is a positive integer strictly smaller than the supposed smallest one.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the candidate times root 2.",
          "workingLatex": "b'\\sqrt{2} = (a - b)\\sqrt{2} = a\\sqrt{2} - b\\sqrt{2}",
          "explanation": "We test whether $b'$ belongs to $S$ by evaluating $b'\\sqrt2$, expanding it in terms of $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify using a = b root 2.",
          "workingLatex": "a\\sqrt{2} = (b\\sqrt{2})\\sqrt{2} = 2b, \\quad b\\sqrt{2} = a \\implies b'\\sqrt{2} = 2b - a",
          "explanation": "Since $a=b\\sqrt2$, we get $a\\sqrt2=2b$; substituting turns $b'\\sqrt2$ into the integer expression $2b-a$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Show the candidate is in the set.",
          "workingLatex": "a, b \\in \\mathbb{Z} \\implies 2b - a \\in \\mathbb{Z} \\implies b'\\sqrt{2} \\in \\mathbb{Z} \\implies b' \\in S",
          "explanation": "As $2b-a$ is an integer, $b'\\sqrt2$ is an integer, so $b'$ satisfies the defining property of $S$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Reach the contradiction.",
          "workingLatex": "b' \\in S \\ \\text{and}\\ 0 < b' < b = \\min S",
          "explanation": "We have found a member of $S$ smaller than its minimum, which is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ \\sqrt{2} \\text{ is irrational.}",
          "explanation": "The existence of a smallest denominator collapses, so no such fraction exists and $\\sqrt2$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "From the smallest $b$ with $b\\sqrt2\\in\\mathbb{Z}$ we built $b'=a-b$ with $0<b'<b$ and $b'\\sqrt2=2b-a\\in\\mathbb{Z}$, a smaller element of $S$ than its minimum; this contradiction shows $\\sqrt{2}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "fourth root", "number theory"],
    "questionText": "Prove by contradiction that the fourth root of 2, $2^{1/4}$, is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the proof by contradiction.",
          "workingLatex": "\\text{Assume, for contradiction, that } 2^{1/4} \\text{ is rational.}",
          "explanation": "We suppose the fourth root of $2$ is rational and look for an impossible consequence in the integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write it as a fraction in lowest terms.",
          "workingLatex": "2^{1/4} = \\dfrac{a}{b}, \\quad a,b \\in \\mathbb{Z}^{+}, \\quad \\gcd(a,b)=1",
          "explanation": "Every rational reduces to lowest terms, and this coprimality is precisely the condition our argument will violate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Raise both sides to the fourth power.",
          "workingLatex": "2 = \\dfrac{a^{4}}{b^{4}}",
          "explanation": "Raising to the fourth power removes the fourth root and gives an equation entirely about integers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the denominator.",
          "workingLatex": "a^{4} = 2b^{4}",
          "explanation": "Multiplying by $b^{4}$ shows $a^{4}$ is twice an integer, so $2$ divides $a^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce that a to the fourth is even.",
          "workingLatex": "2 \\mid a^{4}",
          "explanation": "The right-hand side $2b^{4}$ is even, so $a^{4}$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Deduce that a is even.",
          "workingLatex": "2 \\mid a^{4} \\implies 2 \\mid a",
          "explanation": "If $a$ were odd then $a^{4}$ would be odd, since a product of odd numbers is odd. As $a^{4}$ is even, $a$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce the factor of 2.",
          "workingLatex": "a = 2c, \\quad c \\in \\mathbb{Z}^{+}",
          "explanation": "Because $a$ is even we write $a=2c$ to follow the factor of $2$ through the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute a = 2c.",
          "workingLatex": "(2c)^{4} = 2b^{4} \\implies 16c^{4} = 2b^{4}",
          "explanation": "Replacing $a$ shows how many factors of $2$ the left side really carries, since $(2c)^4=16c^4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide through by 2.",
          "workingLatex": "8c^{4} = b^{4} \\implies b^{4} = 8c^{4}",
          "explanation": "Cancelling one factor of $2$ isolates $b^{4}$ and reveals it is a multiple of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce that b to the fourth is even.",
          "workingLatex": "b^{4} = 2\\,(4c^{4}) \\implies 2 \\mid b^{4}",
          "explanation": "The right-hand side is twice an integer, so $b^{4}$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Deduce that b is even.",
          "workingLatex": "2 \\mid b^{4} \\implies 2 \\mid b",
          "explanation": "By the same parity reasoning, an even fourth power forces an even base, so $b$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reach the contradiction.",
          "workingLatex": "2 \\mid a \\ \\text{and}\\ 2 \\mid b \\implies \\gcd(a,b) \\geq 2",
          "explanation": "Both $a$ and $b$ are even, so they share the factor $2$, contradicting $\\gcd(a,b)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ 2^{1/4} \\text{ is irrational.}",
          "explanation": "The rational assumption produced a contradiction, so $2^{1/4}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $2^{1/4}=\\dfrac{a}{b}$ in lowest terms forces both $a$ and $b$ to be even, contradicting $\\gcd(a,b)=1$; hence $2^{1/4}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Given that $\\sqrt{2}$ is irrational, prove by contradiction that $3 + \\sqrt{2}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption (the negation of what we want to prove).",
          "workingLatex": "\\text{Assume, for contradiction, that } 3 + \\sqrt{2} \\text{ is rational.}",
          "explanation": "In proof by contradiction we begin by supposing the opposite of the claim is true, then hunt for a logical clash. Here the opposite of \"$3+\\sqrt{2}$ is irrational\" is \"$3+\\sqrt{2}$ is rational\".",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the assumed rational number in fractional form.",
          "workingLatex": "3 + \\sqrt{2} = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "Saying a number is rational just means it can be written as some fraction, so we give it a name $r$ standing for a rational number. This lets us work with it algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the surd.",
          "workingLatex": "\\sqrt{2} = r - 3",
          "explanation": "By subtracting $3$ from both sides we get $\\sqrt{2}$ on its own. The plan is to show this forces $\\sqrt{2}$ to be something it cannot be.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argue that the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q}, \\ 3 \\in \\mathbb{Q} \\ \\Rightarrow \\ r - 3 \\in \\mathbb{Q}",
          "explanation": "The difference of two rational numbers is again rational, because subtracting fractions gives another fraction. So $r-3$ is definitely rational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce that the surd would be rational.",
          "workingLatex": "\\sqrt{2} = r - 3 \\in \\mathbb{Q}",
          "explanation": "Since $\\sqrt{2}$ equals the rational quantity $r-3$, it would itself have to be rational. This is the key consequence of our assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts the given fact} \\ \\sqrt{2} \\notin \\mathbb{Q}",
          "explanation": "We were told at the outset that $\\sqrt{2}$ is irrational, yet our assumption has led to $\\sqrt{2}$ being rational. Both cannot hold, so we have reached a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\ 3 + \\sqrt{2} \\ \\text{is irrational.}",
          "explanation": "Because the assumption led to an impossibility, the assumption must be false. Therefore the original statement holds: $3+\\sqrt{2}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $3 + \\sqrt{2}$ is rational forces $\\sqrt{2} = r - 3$ to be rational, contradicting the given fact that $\\sqrt{2}$ is irrational; hence $3 + \\sqrt{2}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Given that $\\sqrt{2}$ is irrational, prove by contradiction that $\\sqrt{2} - 5$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } \\sqrt{2} - 5 \\text{ is rational.}",
          "explanation": "We suppose the opposite of what we want to prove and aim to reach an impossibility. The opposite of \"$\\sqrt{2}-5$ is irrational\" is \"$\\sqrt{2}-5$ is rational\".",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express the assumed rational number as a symbol.",
          "workingLatex": "\\sqrt{2} - 5 = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "A rational number can be written as a fraction, so we name it $r$. Giving it a symbol lets us rearrange the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the surd.",
          "workingLatex": "\\sqrt{2} = r + 5",
          "explanation": "Adding $5$ to both sides leaves $\\sqrt{2}$ alone. We want to see what kind of number the right-hand side is.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q}, \\ 5 \\in \\mathbb{Q} \\ \\Rightarrow \\ r + 5 \\in \\mathbb{Q}",
          "explanation": "Adding two rational numbers always gives a rational number, since the sum of two fractions is a fraction. So $r+5$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the surd would be rational.",
          "workingLatex": "\\sqrt{2} = r + 5 \\in \\mathbb{Q}",
          "explanation": "As $\\sqrt{2}$ equals the rational quantity $r+5$, it would have to be rational too. This is the consequence forced by our assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts} \\ \\sqrt{2} \\notin \\mathbb{Q} \\ \\text{(given)}",
          "explanation": "We are given that $\\sqrt{2}$ is irrational, but the assumption makes it rational. These cannot both be true, so a contradiction has appeared.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\ \\sqrt{2} - 5 \\ \\text{is irrational.}",
          "explanation": "Since the assumption produced an impossibility, it must be false. Therefore $\\sqrt{2}-5$ is irrational, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\sqrt{2} - 5$ is rational forces $\\sqrt{2} = r + 5$ to be rational, contradicting the given fact that $\\sqrt{2}$ is irrational; hence $\\sqrt{2} - 5$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Given that $\\sqrt{3}$ is irrational, prove by contradiction that $2\\sqrt{3}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } 2\\sqrt{3} \\text{ is rational.}",
          "explanation": "We begin by supposing the opposite of the statement and look for a clash. The opposite of \"$2\\sqrt{3}$ is irrational\" is \"$2\\sqrt{3}$ is rational\".",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the assumed rational number as a symbol.",
          "workingLatex": "2\\sqrt{3} = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "Being rational means it can be written as a fraction, so we label it $r$. This makes the algebra manageable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the surd.",
          "workingLatex": "\\sqrt{3} = \\frac{r}{2}",
          "explanation": "Dividing both sides by $2$ leaves $\\sqrt{3}$ on its own. We now examine what kind of number $\\tfrac{r}{2}$ must be.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q} \\ \\Rightarrow \\ \\frac{r}{2} \\in \\mathbb{Q}",
          "explanation": "Dividing a rational number by the non-zero integer $2$ gives another rational number, since a fraction divided by $2$ is still a fraction. So $\\tfrac{r}{2}$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the surd would be rational.",
          "workingLatex": "\\sqrt{3} = \\frac{r}{2} \\in \\mathbb{Q}",
          "explanation": "Because $\\sqrt{3}$ equals the rational quantity $\\tfrac{r}{2}$, it would itself be rational. This is exactly what our assumption forces.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction.",
          "workingLatex": "\\sqrt{3} \\in \\mathbb{Q} \\ \\text{contradicts} \\ \\sqrt{3} \\notin \\mathbb{Q} \\ \\text{(given)}",
          "explanation": "We were told $\\sqrt{3}$ is irrational, yet the assumption makes it rational. A number cannot be both, so we have a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\ 2\\sqrt{3} \\ \\text{is irrational.}",
          "explanation": "The assumption led to an impossibility, so it must be false. Hence $2\\sqrt{3}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $2\\sqrt{3}$ is rational forces $\\sqrt{3} = \\tfrac{r}{2}$ to be rational, contradicting the given fact that $\\sqrt{3}$ is irrational; hence $2\\sqrt{3}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Given that $\\sqrt{2}$ is irrational, prove by contradiction that $\\dfrac{\\sqrt{2}}{3}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } \\frac{\\sqrt{2}}{3} \\text{ is rational.}",
          "explanation": "We suppose the opposite of the claim and aim to derive something impossible. The opposite of \"$\\tfrac{\\sqrt{2}}{3}$ is irrational\" is \"$\\tfrac{\\sqrt{2}}{3}$ is rational\".",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the assumed rational number as a symbol.",
          "workingLatex": "\\frac{\\sqrt{2}}{3} = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "A rational number is one that can be written as a fraction, so we call it $r$. Naming it lets us rearrange to expose the surd.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the surd.",
          "workingLatex": "\\sqrt{2} = 3r",
          "explanation": "Multiplying both sides by $3$ gives $\\sqrt{2}$ on its own. We then look at what kind of number $3r$ must be.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q} \\ \\Rightarrow \\ 3r \\in \\mathbb{Q}",
          "explanation": "Multiplying a rational number by the integer $3$ gives another rational number, because a fraction times $3$ is still a fraction. So $3r$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the surd would be rational.",
          "workingLatex": "\\sqrt{2} = 3r \\in \\mathbb{Q}",
          "explanation": "Since $\\sqrt{2}$ equals the rational quantity $3r$, it would itself be rational. This is the consequence of the assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts} \\ \\sqrt{2} \\notin \\mathbb{Q} \\ \\text{(given)}",
          "explanation": "We were given that $\\sqrt{2}$ is irrational, but the assumption makes it rational. These statements clash, giving a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\ \\frac{\\sqrt{2}}{3} \\ \\text{is irrational.}",
          "explanation": "Because the assumption led to an impossibility, it must be false. Therefore $\\tfrac{\\sqrt{2}}{3}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\tfrac{\\sqrt{2}}{3}$ is rational forces $\\sqrt{2} = 3r$ to be rational, contradicting the given fact that $\\sqrt{2}$ is irrational; hence $\\tfrac{\\sqrt{2}}{3}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "rational numbers"],
    "questionText": "Given that $\\sqrt{5}$ is irrational, prove by contradiction that $1 + \\sqrt{5}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } 1 + \\sqrt{5} \\text{ is rational.}",
          "explanation": "We suppose the reverse of what we want to prove and search for a contradiction. The reverse of \"$1+\\sqrt{5}$ is irrational\" is \"$1+\\sqrt{5}$ is rational\".",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the assumed rational number as a symbol.",
          "workingLatex": "1 + \\sqrt{5} = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "Rational means expressible as a fraction, so we name the value $r$. This gives us something concrete to manipulate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the surd.",
          "workingLatex": "\\sqrt{5} = r - 1",
          "explanation": "Subtracting $1$ from both sides leaves $\\sqrt{5}$ on its own. We now check the nature of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q}, \\ 1 \\in \\mathbb{Q} \\ \\Rightarrow \\ r - 1 \\in \\mathbb{Q}",
          "explanation": "The difference of two rational numbers is rational, because subtracting fractions produces another fraction. So $r-1$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the surd would be rational.",
          "workingLatex": "\\sqrt{5} = r - 1 \\in \\mathbb{Q}",
          "explanation": "As $\\sqrt{5}$ equals the rational quantity $r-1$, it would have to be rational as well. This is what the assumption forces.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction.",
          "workingLatex": "\\sqrt{5} \\in \\mathbb{Q} \\ \\text{contradicts} \\ \\sqrt{5} \\notin \\mathbb{Q} \\ \\text{(given)}",
          "explanation": "We are given that $\\sqrt{5}$ is irrational, yet the assumption makes it rational. A number cannot be both, so this is a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\ 1 + \\sqrt{5} \\ \\text{is irrational.}",
          "explanation": "The assumption produced an impossibility, so it is false. Hence $1+\\sqrt{5}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $1 + \\sqrt{5}$ is rational forces $\\sqrt{5} = r - 1$ to be rational, contradicting the given fact that $\\sqrt{5}$ is irrational; hence $1 + \\sqrt{5}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Given that $\\sqrt{2}$ is irrational, prove by contradiction that $4\\sqrt{2}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } 4\\sqrt{2} \\text{ is rational.}",
          "explanation": "We take the opposite of the statement as our starting point and look for a clash. The opposite of \"$4\\sqrt{2}$ is irrational\" is \"$4\\sqrt{2}$ is rational\".",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the assumed rational number as a symbol.",
          "workingLatex": "4\\sqrt{2} = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "A rational number can be written as a fraction, so we name it $r$. This lets us isolate the surd by algebra.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the surd.",
          "workingLatex": "\\sqrt{2} = \\frac{r}{4}",
          "explanation": "Dividing both sides by $4$ leaves $\\sqrt{2}$ on its own. We then look at what kind of number $\\tfrac{r}{4}$ must be.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q} \\ \\Rightarrow \\ \\frac{r}{4} \\in \\mathbb{Q}",
          "explanation": "Dividing a rational number by the non-zero integer $4$ still gives a rational number, since a fraction over $4$ is a fraction. So $\\tfrac{r}{4}$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the surd would be rational.",
          "workingLatex": "\\sqrt{2} = \\frac{r}{4} \\in \\mathbb{Q}",
          "explanation": "Because $\\sqrt{2}$ equals the rational quantity $\\tfrac{r}{4}$, it would be rational. This is the direct consequence of the assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts} \\ \\sqrt{2} \\notin \\mathbb{Q} \\ \\text{(given)}",
          "explanation": "We are given that $\\sqrt{2}$ is irrational, but the assumption makes it rational. That is impossible, so we have reached a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\ 4\\sqrt{2} \\ \\text{is irrational.}",
          "explanation": "Since the assumption led to an impossibility, it must be false. Hence $4\\sqrt{2}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $4\\sqrt{2}$ is rational forces $\\sqrt{2} = \\tfrac{r}{4}$ to be rational, contradicting the given fact that $\\sqrt{2}$ is irrational; hence $4\\sqrt{2}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Given that $\\sqrt{3}$ is irrational, prove by contradiction that $\\dfrac{\\sqrt{3}}{2}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } \\frac{\\sqrt{3}}{2} \\text{ is rational.}",
          "explanation": "We suppose the opposite of the claim and try to force an impossibility. The opposite of \"$\\tfrac{\\sqrt{3}}{2}$ is irrational\" is \"$\\tfrac{\\sqrt{3}}{2}$ is rational\".",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the assumed rational number as a symbol.",
          "workingLatex": "\\frac{\\sqrt{3}}{2} = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "Rational means it can be written as a fraction, so we label the value $r$. Naming it lets us rearrange to reveal the surd.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the surd.",
          "workingLatex": "\\sqrt{3} = 2r",
          "explanation": "Multiplying both sides by $2$ leaves $\\sqrt{3}$ alone. We now determine what kind of number $2r$ is.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the right-hand side is rational.",
          "workingLatex": "r \\in \\mathbb{Q} \\ \\Rightarrow \\ 2r \\in \\mathbb{Q}",
          "explanation": "Multiplying a rational number by the integer $2$ produces another rational number, because a fraction doubled is still a fraction. So $2r$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the surd would be rational.",
          "workingLatex": "\\sqrt{3} = 2r \\in \\mathbb{Q}",
          "explanation": "Since $\\sqrt{3}$ equals the rational quantity $2r$, it would be rational. This is what the assumption forces upon us.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the contradiction.",
          "workingLatex": "\\sqrt{3} \\in \\mathbb{Q} \\ \\text{contradicts} \\ \\sqrt{3} \\notin \\mathbb{Q} \\ \\text{(given)}",
          "explanation": "We were told $\\sqrt{3}$ is irrational, yet the assumption makes it rational. A number cannot be both, so a contradiction arises.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\ \\frac{\\sqrt{3}}{2} \\ \\text{is irrational.}",
          "explanation": "The assumption led to an impossibility, so it must be false. Hence $\\tfrac{\\sqrt{3}}{2}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\tfrac{\\sqrt{3}}{2}$ is rational forces $\\sqrt{3} = 2r$ to be rational, contradicting the given fact that $\\sqrt{3}$ is irrational; hence $\\tfrac{\\sqrt{3}}{2}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "rational numbers"],
    "questionText": "Given that $\\sqrt{2}$ is irrational, prove by contradiction that $7 - 2\\sqrt{2}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } 7 - 2\\sqrt{2} \\text{ is rational.}",
          "explanation": "We start from the opposite of what we want to prove and aim for a contradiction. The opposite of \"$7-2\\sqrt{2}$ is irrational\" is \"$7-2\\sqrt{2}$ is rational\".",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the assumed rational number as a symbol.",
          "workingLatex": "7 - 2\\sqrt{2} = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "A rational number can be written as a fraction, so we name it $r$. This gives us an equation to rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the surd term on one side.",
          "workingLatex": "2\\sqrt{2} = 7 - r",
          "explanation": "Moving the surd term across and $r$ the other way gives $2\\sqrt{2}$ by itself. We are gradually isolating the surd.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Fully isolate the surd.",
          "workingLatex": "\\sqrt{2} = \\frac{7 - r}{2}",
          "explanation": "Dividing by $2$ leaves $\\sqrt{2}$ alone. Now we can examine what kind of number the right-hand side must be.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show the right-hand side is rational.",
          "workingLatex": "7 - r \\in \\mathbb{Q} \\ \\Rightarrow \\ \\frac{7 - r}{2} \\in \\mathbb{Q}",
          "explanation": "Since $7$ and $r$ are rational, their difference $7-r$ is rational, and dividing that by $2$ keeps it rational. So the whole expression is rational.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Deduce the surd would be rational.",
          "workingLatex": "\\sqrt{2} = \\frac{7 - r}{2} \\in \\mathbb{Q}",
          "explanation": "Because $\\sqrt{2}$ equals a rational quantity, it would itself be rational. This is the consequence forced by the assumption.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the contradiction.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts} \\ \\sqrt{2} \\notin \\mathbb{Q} \\ \\text{(given)}",
          "explanation": "We are given that $\\sqrt{2}$ is irrational, yet the assumption makes it rational. These cannot both hold, so we have a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\ 7 - 2\\sqrt{2} \\ \\text{is irrational.}",
          "explanation": "The assumption led to an impossibility, so it is false. Therefore $7-2\\sqrt{2}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $7 - 2\\sqrt{2}$ is rational forces $\\sqrt{2} = \\tfrac{7 - r}{2}$ to be rational, contradicting the given fact that $\\sqrt{2}$ is irrational; hence $7 - 2\\sqrt{2}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "rational numbers", "closure", "structure of numbers"],
    "questionText": "Prove by contradiction that the sum of a rational number and an irrational number is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the general situation with named numbers.",
          "workingLatex": "\\text{Let } x \\in \\mathbb{Q} \\text{ (rational) and } y \\notin \\mathbb{Q} \\text{ (irrational).}",
          "explanation": "To prove a general statement we work with arbitrary representatives: any rational $x$ and any irrational $y$. Whatever we deduce will then hold for every such pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } x + y \\text{ is rational.}",
          "explanation": "We want to prove $x+y$ is irrational, so we assume the opposite. The plan is to show this assumption clashes with $y$ being irrational.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Name the assumed rational sum.",
          "workingLatex": "x + y = s, \\qquad s \\in \\mathbb{Q}",
          "explanation": "If the sum is rational we may call it $s$. Giving it a symbol lets us rearrange to isolate the irrational number $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to isolate the irrational number.",
          "workingLatex": "y = s - x",
          "explanation": "Subtracting $x$ from both sides expresses $y$ purely in terms of the two rationals $s$ and $x$. We now argue about what kind of number this is.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the two rationals as fractions.",
          "workingLatex": "s = \\frac{c}{d}, \\quad x = \\frac{a}{b}, \\qquad a,b,c,d \\in \\mathbb{Z}, \\ b,d \\neq 0",
          "explanation": "Every rational number is a ratio of integers with non-zero denominator. Writing them out explicitly lets us verify closure directly rather than just quoting it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the fractions.",
          "workingLatex": "s - x = \\frac{c}{d} - \\frac{a}{b} = \\frac{cb - ad}{db}",
          "explanation": "Putting the difference over a common denominator gives a single fraction. This shows the structure of the number $s-x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the result is rational (closure under subtraction).",
          "workingLatex": "cb - ad \\in \\mathbb{Z}, \\ db \\in \\mathbb{Z}, \\ db \\neq 0 \\ \\Rightarrow \\ s - x \\in \\mathbb{Q}",
          "explanation": "The numerator is an integer and the denominator is a non-zero integer, so $s-x$ is a genuine rational number. This is exactly the statement that the rationals are closed under subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce the consequence for the irrational number.",
          "workingLatex": "y = s - x \\in \\mathbb{Q}",
          "explanation": "Since $y$ equals the rational number $s-x$, the number $y$ would itself have to be rational. This is the conclusion our assumption forces.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the contradiction and conclude.",
          "workingLatex": "y \\in \\mathbb{Q} \\ \\text{contradicts} \\ y \\notin \\mathbb{Q} \\quad \\therefore \\ x + y \\text{ is irrational.}",
          "explanation": "But $y$ was chosen to be irrational, so it cannot be rational; this is the contradiction. The assumption fails, so the sum of a rational and an irrational number is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $x + y$ is rational forces the irrational $y = s - x$ to be a difference of two rationals, hence rational, which is a contradiction; therefore the sum of a rational and an irrational number is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "rational numbers", "closure", "structure of numbers"],
    "questionText": "Prove by contradiction that the product of a non-zero rational number and an irrational number is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the general situation with named numbers.",
          "workingLatex": "\\text{Let } x = \\frac{p}{q} \\in \\mathbb{Q}, \\ x \\neq 0, \\text{ and } y \\notin \\mathbb{Q}.",
          "explanation": "We take an arbitrary non-zero rational $x=\\tfrac{p}{q}$ (so $p,q$ are non-zero integers) and an arbitrary irrational $y$. Proving the result for these covers every such pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } xy \\text{ is rational.}",
          "explanation": "We want $xy$ to be irrational, so we assume the opposite. We will chase this assumption until it collides with $y$ being irrational.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Name the assumed rational product.",
          "workingLatex": "xy = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "If the product is rational we call it $r$. This symbol lets us solve for the irrational factor $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the irrational number, using that x is non-zero.",
          "workingLatex": "y = \\frac{r}{x} \\qquad (\\text{valid since } x \\neq 0)",
          "explanation": "Because $x$ is non-zero we are allowed to divide both sides by it. This isolates $y$ as a ratio of two rationals.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write both rationals as fractions.",
          "workingLatex": "r = \\frac{m}{n}, \\quad x = \\frac{p}{q}, \\qquad m,n,p,q \\in \\mathbb{Z}, \\ n,p,q \\neq 0",
          "explanation": "Each rational is a ratio of integers with non-zero denominator; note $p \\neq 0$ because $x \\neq 0$. Writing them out lets us simplify the quotient explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the quotient of fractions.",
          "workingLatex": "y = \\frac{r}{x} = \\frac{m/n}{p/q} = \\frac{mq}{np}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, giving a single fraction $\\tfrac{mq}{np}$. This exposes its structure as a ratio of integers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the result is rational.",
          "workingLatex": "mq \\in \\mathbb{Z}, \\ np \\in \\mathbb{Z}, \\ np \\neq 0 \\ \\Rightarrow \\ y = \\frac{mq}{np} \\in \\mathbb{Q}",
          "explanation": "The numerator is an integer and the denominator is a non-zero integer (since $n,p \\neq 0$), so $y$ is rational. The non-zero condition on $x$ is exactly what guarantees the denominator is not zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce the consequence for the irrational number.",
          "workingLatex": "y \\in \\mathbb{Q}",
          "explanation": "Our assumption has forced $y$ to be rational. This directly opposes the fact that $y$ was chosen irrational.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the contradiction and conclude.",
          "workingLatex": "y \\in \\mathbb{Q} \\ \\text{contradicts} \\ y \\notin \\mathbb{Q} \\quad \\therefore \\ xy \\text{ is irrational.}",
          "explanation": "The contradiction shows the assumption was false. Therefore the product of a non-zero rational number and an irrational number is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $xy$ is rational forces the irrational $y = \\tfrac{r}{x}$ to be a ratio of rationals (using $x \\neq 0$), hence rational, a contradiction; therefore the product of a non-zero rational and an irrational number is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "rational numbers", "structure of numbers"],
    "questionText": "Let $x$ be an irrational number with $x \\neq 0$. Prove by contradiction that $\\dfrac{1}{x}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restate the given information.",
          "workingLatex": "x \\notin \\mathbb{Q}, \\quad x \\neq 0.",
          "explanation": "We are given that $x$ is irrational and non-zero, so $\\tfrac{1}{x}$ is well defined. Our target is to show its reciprocal is also irrational.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } \\frac{1}{x} \\text{ is rational.}",
          "explanation": "We suppose the opposite of what we want and search for a contradiction. The opposite of \"$\\tfrac{1}{x}$ is irrational\" is \"$\\tfrac{1}{x}$ is rational\".",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Name the assumed rational reciprocal.",
          "workingLatex": "\\frac{1}{x} = r, \\qquad r \\in \\mathbb{Q}",
          "explanation": "If the reciprocal is rational we call it $r$. This lets us solve for $x$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note that r is non-zero.",
          "workingLatex": "\\frac{1}{x} \\neq 0 \\ \\Rightarrow \\ r \\neq 0",
          "explanation": "Since $\\tfrac{1}{x}$ can never equal zero (one divided by a finite number is non-zero), the value $r$ is non-zero. This matters because we are about to invert $r$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x by inverting.",
          "workingLatex": "x = \\frac{1}{r}",
          "explanation": "Taking reciprocals of both sides of $\\tfrac{1}{x}=r$ gives $x=\\tfrac{1}{r}$, which is allowed because $r \\neq 0$. Now $x$ is written in terms of a rational number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write r as a fraction of non-zero integers.",
          "workingLatex": "r = \\frac{a}{b}, \\qquad a,b \\in \\mathbb{Z}, \\ a,b \\neq 0",
          "explanation": "As $r$ is a non-zero rational, both its numerator and denominator can be taken non-zero. This is what makes its reciprocal a valid fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Express x explicitly as a fraction.",
          "workingLatex": "x = \\frac{1}{r} = \\frac{b}{a}, \\qquad a \\neq 0",
          "explanation": "The reciprocal of $\\tfrac{a}{b}$ is $\\tfrac{b}{a}$, a ratio of integers with non-zero denominator. This is precisely the form of a rational number.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce that x would be rational.",
          "workingLatex": "x = \\frac{b}{a} \\in \\mathbb{Q}",
          "explanation": "So the assumption forces $x$ to be rational. This clashes head-on with the given information.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the contradiction and conclude.",
          "workingLatex": "x \\in \\mathbb{Q} \\ \\text{contradicts} \\ x \\notin \\mathbb{Q} \\quad \\therefore \\ \\frac{1}{x} \\text{ is irrational.}",
          "explanation": "We were told $x$ is irrational, so it cannot be rational; this is the contradiction. Hence the assumption is false and $\\tfrac{1}{x}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $\\tfrac{1}{x}$ is rational (and non-zero) forces $x = \\tfrac{1}{r}$ to be rational, contradicting that $x$ is irrational; therefore $\\tfrac{1}{x}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "rational numbers", "structure of numbers"],
    "questionText": "Prove by contradiction that if $x^{2}$ is irrational, then $x$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restate the given information.",
          "workingLatex": "\\text{Given: } x^{2} \\notin \\mathbb{Q}. \\quad \\text{To prove: } x \\notin \\mathbb{Q}.",
          "explanation": "We are told the square of $x$ is irrational and must show $x$ itself is irrational. This is an implication, ideal for contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the assumption (the negation of the conclusion).",
          "workingLatex": "\\text{Assume, for contradiction, that } x \\text{ is rational.}",
          "explanation": "For an \"if...then\" statement we keep the hypothesis and assume the conclusion is false. So we suppose $x$ is rational and aim for a clash with $x^{2}$ being irrational.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write x as a fraction.",
          "workingLatex": "x = \\frac{a}{b}, \\qquad a,b \\in \\mathbb{Z}, \\ b \\neq 0",
          "explanation": "Being rational, $x$ can be written as a ratio of integers with non-zero denominator. This lets us compute its square explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square x as a product of two rationals.",
          "workingLatex": "x^{2} = x \\cdot x = \\frac{a}{b} \\cdot \\frac{a}{b}",
          "explanation": "The square is just $x$ multiplied by itself. Viewing it as a product of two rationals makes the closure argument transparent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the square.",
          "workingLatex": "x^{2} = \\frac{a^{2}}{b^{2}}",
          "explanation": "Multiplying the fractions gives $\\tfrac{a^{2}}{b^{2}}$. We now check this is a genuine rational number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the square is rational.",
          "workingLatex": "a^{2} \\in \\mathbb{Z}, \\ b^{2} \\in \\mathbb{Z}, \\ b^{2} \\neq 0 \\ \\Rightarrow \\ x^{2} \\in \\mathbb{Q}",
          "explanation": "The numerator $a^{2}$ is an integer and the denominator $b^{2}$ is a non-zero integer, so $x^{2}$ is rational. This reflects that the rationals are closed under multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Deduce the consequence for the square.",
          "workingLatex": "x^{2} \\in \\mathbb{Q}",
          "explanation": "Our assumption has made $x^{2}$ rational. This directly opposes the given fact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the contradiction.",
          "workingLatex": "x^{2} \\in \\mathbb{Q} \\ \\text{contradicts} \\ x^{2} \\notin \\mathbb{Q} \\ \\text{(given)}",
          "explanation": "We were given that $x^{2}$ is irrational, so it cannot also be rational. The assumption has produced a genuine logical clash.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude.",
          "workingLatex": "\\therefore \\ x \\text{ is irrational.}",
          "explanation": "Since the assumption led to a contradiction, it must be false. Hence if $x^{2}$ is irrational then $x$ is irrational, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $x$ is rational makes $x^{2} = \\tfrac{a^{2}}{b^{2}}$ rational, contradicting that $x^{2}$ is irrational; therefore if $x^{2}$ is irrational then $x$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "surds", "rational numbers", "structure of numbers"],
    "questionText": "Prove by contradiction that if $x$ and $y$ are rational numbers and $x + y\\sqrt{2} = 0$, then $x = 0$ and $y = 0$. (You may assume $\\sqrt{2}$ is irrational.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restate the given information.",
          "workingLatex": "x,y \\in \\mathbb{Q}, \\quad x + y\\sqrt{2} = 0.",
          "explanation": "We have two rational numbers satisfying the equation $x+y\\sqrt{2}=0$, and we must show both are zero. The irrationality of $\\sqrt{2}$ will be the key tool.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } (x,y) \\neq (0,0).",
          "explanation": "We want to prove both are zero, so we assume the opposite: at least one of $x,y$ is non-zero. We will show this cannot happen.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Focus on the case y is non-zero.",
          "workingLatex": "\\text{Suppose } y \\neq 0.",
          "explanation": "The interesting case is when $y \\neq 0$, because then we can divide by it. We will find this case impossible, which then pins down $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the surd term.",
          "workingLatex": "y\\sqrt{2} = -x",
          "explanation": "Rearranging the equation moves the rational $x$ to the other side. Now the surd is grouped by itself, ready to be divided out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the surd, using y is non-zero.",
          "workingLatex": "\\sqrt{2} = -\\frac{x}{y} \\qquad (\\text{valid since } y \\neq 0)",
          "explanation": "Dividing by $y$ is permitted because we are in the case $y \\neq 0$. This expresses $\\sqrt{2}$ as a ratio of two rational numbers.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Argue the right-hand side is rational.",
          "workingLatex": "x,y \\in \\mathbb{Q}, \\ y \\neq 0 \\ \\Rightarrow \\ -\\frac{x}{y} \\in \\mathbb{Q}",
          "explanation": "A quotient of two rationals with non-zero denominator is rational, so $-\\tfrac{x}{y}$ is rational. This makes $\\sqrt{2}$ equal to a rational number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reach the first contradiction.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts} \\ \\sqrt{2} \\notin \\mathbb{Q}",
          "explanation": "We are allowed to assume $\\sqrt{2}$ is irrational, yet we have just made it rational. This contradiction rules out the case $y \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce that y must be zero.",
          "workingLatex": "\\therefore \\ y = 0",
          "explanation": "Since $y \\neq 0$ is impossible, the only remaining possibility is $y=0$. We now feed this back into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute y = 0 to find x.",
          "workingLatex": "x + 0 \\cdot \\sqrt{2} = 0 \\ \\Rightarrow \\ x = 0",
          "explanation": "With $y=0$ the surd term vanishes, leaving $x=0$. So both numbers are forced to be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the overall contradiction and conclude.",
          "workingLatex": "(x,y) = (0,0) \\ \\text{contradicts} \\ (x,y) \\neq (0,0) \\quad \\therefore \\ x = 0, \\ y = 0.",
          "explanation": "Our assumption said $(x,y)$ was not $(0,0)$, yet we have derived $x=y=0$, a contradiction. Hence the assumption fails and necessarily $x=0$ and $y=0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $(x,y) \\neq (0,0)$ and $y \\neq 0$ makes $\\sqrt{2} = -\\tfrac{x}{y}$ rational, a contradiction, forcing $y = 0$ and then $x = 0$; therefore $x = 0$ and $y = 0$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "surds", "rational numbers", "structure of numbers"],
    "questionText": "Let $a, b, c, d$ be rational numbers with $a + b\\sqrt{2} = c + d\\sqrt{2}$. Prove by contradiction that $a = c$ and $b = d$. (You may assume $\\sqrt{2}$ is irrational.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restate the given information.",
          "workingLatex": "a,b,c,d \\in \\mathbb{Q}, \\quad a + b\\sqrt{2} = c + d\\sqrt{2}.",
          "explanation": "We have two expressions of the form (rational) plus (rational)$\\times\\sqrt{2}$ that are equal. We must show their rational parts match and their surd coefficients match.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the assumption (the negation of the claim).",
          "workingLatex": "\\text{Assume, for contradiction, that } (a,b) \\neq (c,d).",
          "explanation": "We want to prove $a=c$ and $b=d$, so we assume the opposite: the pairs differ in at least one coordinate. We will drive this to a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the equation to group rational and surd parts.",
          "workingLatex": "a - c = d\\sqrt{2} - b\\sqrt{2} = (d - b)\\sqrt{2}",
          "explanation": "Collecting the rational terms on the left and the surd terms on the right gives a clean relation. It says a rational number equals $(d-b)$ times $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Focus on the case where the surd coefficients differ.",
          "workingLatex": "\\text{Suppose } d \\neq b, \\ \\text{i.e. } d - b \\neq 0.",
          "explanation": "The decisive case is $d \\neq b$, because then $d-b$ is non-zero and we may divide by it. We aim to show this case is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the surd.",
          "workingLatex": "\\sqrt{2} = \\frac{a - c}{d - b} \\qquad (\\text{valid since } d - b \\neq 0)",
          "explanation": "Dividing both sides by the non-zero number $d-b$ isolates $\\sqrt{2}$. It now appears as a ratio of two rational quantities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Argue the right-hand side is rational.",
          "workingLatex": "a - c \\in \\mathbb{Q}, \\ d - b \\in \\mathbb{Q}, \\ d - b \\neq 0 \\ \\Rightarrow \\ \\frac{a - c}{d - b} \\in \\mathbb{Q}",
          "explanation": "Both $a-c$ and $d-b$ are differences of rationals, hence rational, and their quotient (with non-zero denominator) is rational too. So $\\sqrt{2}$ would be rational.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reach the first contradiction.",
          "workingLatex": "\\sqrt{2} \\in \\mathbb{Q} \\ \\text{contradicts} \\ \\sqrt{2} \\notin \\mathbb{Q}",
          "explanation": "We may assume $\\sqrt{2}$ is irrational, yet we have expressed it as a rational number. This contradiction eliminates the case $d \\neq b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce that the surd coefficients are equal.",
          "workingLatex": "\\therefore \\ d = b",
          "explanation": "Since $d \\neq b$ is impossible, we must have $d=b$. This is the first half of what we wanted; now we recover the rational parts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute d = b back into the relation.",
          "workingLatex": "a - c = (d - b)\\sqrt{2} = 0 \\cdot \\sqrt{2} = 0 \\ \\Rightarrow \\ a = c",
          "explanation": "With $d=b$ the right-hand side becomes zero, forcing $a-c=0$, i.e. $a=c$. So both coordinates of the pairs coincide.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the overall contradiction and conclude.",
          "workingLatex": "(a,b) = (c,d) \\ \\text{contradicts} \\ (a,b) \\neq (c,d) \\quad \\therefore \\ a = c, \\ b = d.",
          "explanation": "Our assumption said the pairs differ, yet we have shown $a=c$ and $b=d$, a contradiction. Hence the assumption is false and necessarily $a=c$ and $b=d$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $(a,b) \\neq (c,d)$ with $d \\neq b$ makes $\\sqrt{2} = \\tfrac{a - c}{d - b}$ rational, a contradiction, forcing $d = b$ and then $a = c$; therefore $a = c$ and $b = d$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "Diophantine", "divisibility", "number theory"],
    "questionText": "Prove by contradiction that there are no integers $x$ and $y$ such that $14x + 21y = 100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption to be contradicted",
          "workingLatex": "\\text{Assume } \\exists\\, x, y \\in \\mathbb{Z} \\text{ such that } 14x + 21y = 100",
          "explanation": "We begin by supposing the opposite of what we want to prove: that integers $x$ and $y$ satisfying the equation really do exist. If this leads to an impossibility, no such integers can exist.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the common factor of the coefficients",
          "workingLatex": "14 = 7 \\times 2, \\qquad 21 = 7 \\times 3",
          "explanation": "Both coefficients on the left are multiples of $7$, which hints that the entire left-hand side is divisible by $7$. Noticing this shared factor is the engine of the whole argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out 7",
          "workingLatex": "14x + 21y = 7(2x + 3y)",
          "explanation": "Taking out the factor of $7$ rewrites the left-hand side as $7$ times an integer, making its divisibility by $7$ explicit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the assumed equation",
          "workingLatex": "7(2x + 3y) = 100",
          "explanation": "Replacing the left-hand side with its factored form keeps the equation true while foregrounding the factor of $7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce an integer for the bracket",
          "workingLatex": "\\text{Let } k = 2x + 3y \\in \\mathbb{Z} \\;\\Rightarrow\\; 7k = 100",
          "explanation": "Since $x$ and $y$ are integers, $2x + 3y$ is also an integer $k$, so the equation now claims that $100$ is exactly $7$ times a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret this as a divisibility claim",
          "workingLatex": "100 = 7k \\;\\Rightarrow\\; 7 \\mid 100",
          "explanation": "If $100 = 7k$ for an integer $k$, then by definition $7$ is a factor of $100$. We now test whether this can actually hold.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide 100 by 7",
          "workingLatex": "100 = 7 \\times 14 + 2",
          "explanation": "Performing the division leaves a remainder of $2$, which is not zero. This concrete calculation is what settles the question.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce that 7 does not divide 100",
          "workingLatex": "\\text{remainder } 2 \\neq 0 \\;\\Rightarrow\\; 7 \\nmid 100",
          "explanation": "A non-zero remainder means $100$ is not a multiple of $7$, directly denying the statement we just derived from the assumption.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reach the contradiction",
          "workingLatex": "7 \\mid 100 \\;\\text{and}\\; 7 \\nmid 100 \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "The assumption forces $7$ both to divide and not to divide $100$, which is impossible. Hence the assumption must be false.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\nexists\\, x, y \\in \\mathbb{Z} : 14x + 21y = 100",
          "explanation": "Because assuming a solution produced a contradiction, no integer solution can exist.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are no integers $x$ and $y$ satisfying $14x + 21y = 100$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "parity", "factorisation", "number theory"],
    "questionText": "Prove by contradiction that there are no integers $x$ and $y$ such that $x^2 - y^2 = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption",
          "workingLatex": "\\text{Assume } \\exists\\, x, y \\in \\mathbb{Z} \\text{ such that } x^2 - y^2 = 10",
          "explanation": "We suppose, contrary to the claim, that such integers exist, and aim to derive an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the difference of two squares",
          "workingLatex": "x^2 - y^2 = (x - y)(x + y) = 10",
          "explanation": "Factorising turns the equation into a product, which lets us reason about the two factors $x - y$ and $x + y$ separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the two factors",
          "workingLatex": "(x + y) - (x - y) = 2y",
          "explanation": "The two factors differ by $2y$, which is always even. A difference that is even means the two factors are either both even or both odd.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the parity conclusion",
          "workingLatex": "x - y \\;\\text{and}\\; x + y \\text{ have the same parity}",
          "explanation": "Because they differ by an even number, $x - y$ and $x + y$ share the same parity, so only two cases can occur.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 1 — both factors odd",
          "workingLatex": "x - y = \\text{odd}, \\quad x + y = \\text{odd}",
          "explanation": "We first examine the possibility that both factors are odd, and track what that forces the product to be.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Odd times odd is odd",
          "workingLatex": "(x - y)(x + y) = \\text{odd}, \\quad \\text{but } 10 = \\text{even}",
          "explanation": "The product of two odd numbers is odd, yet $10$ is even. An odd number cannot equal an even number, so this case is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case 2 — both factors even",
          "workingLatex": "x - y = 2s, \\quad x + y = 2t \\quad (s, t \\in \\mathbb{Z})",
          "explanation": "Now suppose instead that both factors are even, writing each as twice an integer to expose their product's divisibility.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "The product is divisible by 4",
          "workingLatex": "(2s)(2t) = 4st \\;\\Rightarrow\\; 4 \\mid (x - y)(x + y)",
          "explanation": "Multiplying two even factors gives a multiple of $4$, so the right-hand side would need to be divisible by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "But 10 is not divisible by 4",
          "workingLatex": "10 = 4 \\times 2 + 2 \\;\\Rightarrow\\; 10 \\equiv 2 \\pmod{4}, \\quad 4 \\nmid 10",
          "explanation": "Since $10$ leaves remainder $2$ on division by $4$, it is not a multiple of $4$. This contradicts what the even case demands.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Both cases fail",
          "workingLatex": "\\text{Case 1: } \\Rightarrow\\Leftarrow \\qquad \\text{Case 2: } \\Rightarrow\\Leftarrow",
          "explanation": "The two factors must share a parity, but each of the only two possible parities leads to a contradiction, so no valid case remains.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude",
          "workingLatex": "\\nexists\\, x, y \\in \\mathbb{Z} : x^2 - y^2 = 10",
          "explanation": "Every possibility arising from the assumption is impossible, so no such integers exist.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are no integers $x$ and $y$ satisfying $x^2 - y^2 = 10$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "parity", "number theory"],
    "questionText": "Prove by contradiction that there are no integers $x$ and $y$ such that $x^2 = 4y + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption",
          "workingLatex": "\\text{Assume } \\exists\\, x, y \\in \\mathbb{Z} \\text{ such that } x^2 = 4y + 2",
          "explanation": "We suppose such integers exist so that we can chase the consequences to a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the right-hand side",
          "workingLatex": "x^2 = 4y + 2 = 2(2y + 1)",
          "explanation": "Factoring out $2$ shows the right-hand side is $2$ times an integer, so it is even. Hence $x^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce x is even",
          "workingLatex": "x^2 \\text{ even} \\;\\Rightarrow\\; x \\text{ even}",
          "explanation": "If $x$ were odd, then $x^2$ would be odd; since $x^2$ is even, $x$ itself must be even. This is the contrapositive at work.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write x as twice an integer",
          "workingLatex": "x = 2m \\quad (m \\in \\mathbb{Z})",
          "explanation": "Being even, $x$ can be expressed as $2m$ for some integer $m$, which we now substitute back in.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the equation",
          "workingLatex": "(2m)^2 = 4y + 2 \\;\\Rightarrow\\; 4m^2 = 4y + 2",
          "explanation": "Replacing $x$ with $2m$ gives an equation purely in terms of integers $m$ and $y$ that we can simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide through by 2",
          "workingLatex": "2m^2 = 2y + 1",
          "explanation": "Dividing every term by $2$ produces a cleaner relation whose two sides we can compare for parity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "The left-hand side is even",
          "workingLatex": "2m^2 = \\text{even}",
          "explanation": "The left-hand side is $2$ times an integer, so it is even no matter what $m$ is.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "The right-hand side is odd",
          "workingLatex": "2y + 1 = \\text{odd}",
          "explanation": "The right-hand side is one more than an even number, so it is always odd.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reach the contradiction",
          "workingLatex": "\\text{even} = \\text{odd} \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "An even number cannot equal an odd number, so the assumption has led to an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\nexists\\, x, y \\in \\mathbb{Z} : x^2 = 4y + 2",
          "explanation": "The contradiction shows the assumption is false, so no such integers exist.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are no integers $x$ and $y$ satisfying $x^2 = 4y + 2$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Prove by contradiction that $\\sqrt{8}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } \\sqrt{8} \\text{ is rational}: \\sqrt{8} = \\frac{a}{b}, \\;\\; a, b \\in \\mathbb{Z}, \\; b \\neq 0, \\; \\gcd(a, b) = 1",
          "explanation": "We suppose $\\sqrt{8}$ is rational and written in lowest terms, meaning $a$ and $b$ share no common factor. Forcing a shared factor later will give the contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "8 = \\frac{a^2}{b^2} \\;\\Rightarrow\\; a^2 = 8b^2",
          "explanation": "Squaring removes the surd and clears the fraction, giving a clean equation between integers to analyse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show a squared is even",
          "workingLatex": "a^2 = 8b^2 = 2(4b^2) \\;\\Rightarrow\\; a^2 \\text{ even}",
          "explanation": "The right-hand side is $2$ times an integer, so $a^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce a is even",
          "workingLatex": "a^2 \\text{ even} \\;\\Rightarrow\\; a \\text{ even} \\;\\Rightarrow\\; a = 2c \\quad (c \\in \\mathbb{Z})",
          "explanation": "Since an odd number squares to an odd number, $a^2$ even forces $a$ even, so we may write $a = 2c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute back",
          "workingLatex": "(2c)^2 = 8b^2 \\;\\Rightarrow\\; 4c^2 = 8b^2 \\;\\Rightarrow\\; c^2 = 2b^2",
          "explanation": "Replacing $a$ with $2c$ and simplifying produces a similar equation, now relating $c$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Show c is even",
          "workingLatex": "c^2 = 2b^2 \\text{ even} \\;\\Rightarrow\\; c \\text{ even} \\;\\Rightarrow\\; c = 2d \\quad (d \\in \\mathbb{Z})",
          "explanation": "The same parity reasoning applies: $c^2$ is even, so $c$ is even and can be written as $2d$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute for c",
          "workingLatex": "(2d)^2 = 2b^2 \\;\\Rightarrow\\; 4d^2 = 2b^2 \\;\\Rightarrow\\; b^2 = 2d^2",
          "explanation": "Substituting $c = 2d$ and simplifying now yields an equation showing $b^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce b is even",
          "workingLatex": "b^2 = 2d^2 \\text{ even} \\;\\Rightarrow\\; b \\text{ even}",
          "explanation": "As before, an even square forces an even base, so $b$ is even too.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the common factor",
          "workingLatex": "2 \\mid a \\;\\text{and}\\; 2 \\mid b \\;\\Rightarrow\\; 2 \\mid \\gcd(a, b)",
          "explanation": "Both $a$ and $b$ turn out to be even, so $2$ is a common factor of the two.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reach the contradiction",
          "workingLatex": "\\gcd(a, b) = 1 \\;\\text{but}\\; 2 \\mid \\gcd(a, b) \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "This contradicts our choice of $\\tfrac{a}{b}$ in lowest terms, where $a$ and $b$ have no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude",
          "workingLatex": "\\therefore \\sqrt{8} \\notin \\mathbb{Q}",
          "explanation": "The contradiction shows our assumption was false, so $\\sqrt{8}$ cannot be written as a fraction and is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{8}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "divisibility"],
    "questionText": "Prove by contradiction that $\\sqrt{12}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } \\sqrt{12} = \\frac{a}{b}, \\;\\; a, b \\in \\mathbb{Z}, \\; b \\neq 0, \\; \\gcd(a, b) = 1",
          "explanation": "We suppose $\\sqrt{12}$ is rational and in lowest terms, so $a$ and $b$ have no common factor. A forced common factor later will contradict this.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "12 = \\frac{a^2}{b^2} \\;\\Rightarrow\\; a^2 = 12b^2",
          "explanation": "Squaring clears the surd and the denominator, leaving an integer equation to work with.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show 3 divides a squared",
          "workingLatex": "a^2 = 12b^2 = 3(4b^2) \\;\\Rightarrow\\; 3 \\mid a^2",
          "explanation": "The right-hand side is a multiple of $3$, so $a^2$ is divisible by $3$. We use $3$ here rather than $2$ because $3$ is a prime factor of $12$ that pins down $a$ cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce 3 divides a",
          "workingLatex": "3 \\text{ prime}, \\; 3 \\mid a^2 \\;\\Rightarrow\\; 3 \\mid a",
          "explanation": "For a prime $p$, if $p$ divides a square then it divides the base. Since $3$ is prime, $3 \\mid a^2$ gives $3 \\mid a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as a multiple of 3",
          "workingLatex": "a = 3c \\quad (c \\in \\mathbb{Z})",
          "explanation": "Being divisible by $3$, $a$ can be written as $3c$, which we substitute back into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and simplify",
          "workingLatex": "(3c)^2 = 12b^2 \\;\\Rightarrow\\; 9c^2 = 12b^2 \\;\\Rightarrow\\; 3c^2 = 4b^2",
          "explanation": "Replacing $a$ with $3c$ and dividing by $3$ yields a new relation between $c$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show 3 divides 4 b squared",
          "workingLatex": "3 \\mid 3c^2 \\;\\Rightarrow\\; 3 \\mid 4b^2",
          "explanation": "The left-hand side $3c^2$ is clearly a multiple of $3$, so the equal right-hand side $4b^2$ must be too.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Transfer divisibility to b squared",
          "workingLatex": "\\gcd(3, 4) = 1 \\;\\Rightarrow\\; 3 \\mid b^2",
          "explanation": "Since $3$ shares no factor with $4$, the factor of $3$ must lie in $b^2$ rather than in the $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Deduce 3 divides b",
          "workingLatex": "3 \\text{ prime}, \\; 3 \\mid b^2 \\;\\Rightarrow\\; 3 \\mid b",
          "explanation": "Applying the prime-divides-a-square rule again, $3 \\mid b^2$ gives $3 \\mid b$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the common factor",
          "workingLatex": "3 \\mid a \\;\\text{and}\\; 3 \\mid b \\;\\Rightarrow\\; 3 \\mid \\gcd(a, b)",
          "explanation": "Now both $a$ and $b$ are divisible by $3$, so $3$ is a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reach the contradiction",
          "workingLatex": "\\gcd(a, b) = 1 \\;\\text{but}\\; 3 \\mid \\gcd(a, b) \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "This directly contradicts $\\tfrac{a}{b}$ being in lowest terms, where no common factor should exist.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude",
          "workingLatex": "\\therefore \\sqrt{12} \\notin \\mathbb{Q}",
          "explanation": "The contradiction means the assumption is false, so $\\sqrt{12}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{12}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Prove by contradiction that $\\sqrt{18}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } \\sqrt{18} = \\frac{a}{b}, \\;\\; a, b \\in \\mathbb{Z}, \\; b \\neq 0, \\; \\gcd(a, b) = 1",
          "explanation": "We suppose $\\sqrt{18}$ is rational in lowest terms; the aim is to show $a$ and $b$ must nevertheless share a factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "18 = \\frac{a^2}{b^2} \\;\\Rightarrow\\; a^2 = 18b^2",
          "explanation": "Squaring gives an integer equation free of surds and fractions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show 3 divides a squared",
          "workingLatex": "a^2 = 18b^2 = 3(6b^2) \\;\\Rightarrow\\; 3 \\mid a^2",
          "explanation": "Since $18$ carries a factor of $3$, the right-hand side is a multiple of $3$, so $a^2$ is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce 3 divides a and substitute",
          "workingLatex": "3 \\text{ prime} \\;\\Rightarrow\\; 3 \\mid a \\;\\Rightarrow\\; a = 3c \\quad (c \\in \\mathbb{Z})",
          "explanation": "A prime dividing a square divides the base, so $3 \\mid a$ and we may write $a = 3c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and simplify",
          "workingLatex": "(3c)^2 = 18b^2 \\;\\Rightarrow\\; 9c^2 = 18b^2 \\;\\Rightarrow\\; c^2 = 2b^2",
          "explanation": "Replacing $a$ with $3c$ and dividing by $9$ leaves a relation in which a factor of $2$ now emerges.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Show c is even",
          "workingLatex": "c^2 = 2b^2 \\text{ even} \\;\\Rightarrow\\; c \\text{ even} \\;\\Rightarrow\\; c = 2d \\quad (d \\in \\mathbb{Z})",
          "explanation": "Now $c^2$ is even, so $c$ is even and can be written as $2d$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute for c",
          "workingLatex": "(2d)^2 = 2b^2 \\;\\Rightarrow\\; 4d^2 = 2b^2 \\;\\Rightarrow\\; b^2 = 2d^2",
          "explanation": "Substituting $c = 2d$ and simplifying shows $b^2$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce b is even",
          "workingLatex": "b^2 = 2d^2 \\text{ even} \\;\\Rightarrow\\; b \\text{ even}",
          "explanation": "An even square forces an even base, so $b$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the common factor",
          "workingLatex": "a = 3c = 6d \\text{ even}, \\; b \\text{ even} \\;\\Rightarrow\\; 2 \\mid \\gcd(a, b)",
          "explanation": "Since $a = 6d$ is even and $b$ is even, the number $2$ divides both, giving them a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reach the contradiction",
          "workingLatex": "\\gcd(a, b) = 1 \\;\\text{but}\\; 2 \\mid \\gcd(a, b) \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "This contradicts the assumption that $\\tfrac{a}{b}$ was in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude",
          "workingLatex": "\\therefore \\sqrt{18} \\notin \\mathbb{Q}",
          "explanation": "The contradiction shows the assumption is false, so $\\sqrt{18}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{18}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds", "parity"],
    "questionText": "Prove by contradiction that $\\sqrt{50}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assume the opposite",
          "workingLatex": "\\text{Assume } \\sqrt{50} = \\frac{a}{b}, \\;\\; a, b \\in \\mathbb{Z}, \\; b \\neq 0, \\; \\gcd(a, b) = 1",
          "explanation": "We suppose $\\sqrt{50}$ is rational in lowest terms and aim to force a shared factor between $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "50 = \\frac{a^2}{b^2} \\;\\Rightarrow\\; a^2 = 50b^2",
          "explanation": "Squaring removes the surd and denominator, giving an integer equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show a is even",
          "workingLatex": "a^2 = 50b^2 = 2(25b^2) \\text{ even} \\;\\Rightarrow\\; a \\text{ even}",
          "explanation": "The right-hand side is $2$ times an integer, so $a^2$ is even, which forces $a$ even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write a as twice an integer",
          "workingLatex": "a = 2c \\quad (c \\in \\mathbb{Z})",
          "explanation": "Being even, $a$ can be expressed as $2c$, ready to substitute back.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute and simplify",
          "workingLatex": "(2c)^2 = 50b^2 \\;\\Rightarrow\\; 4c^2 = 50b^2 \\;\\Rightarrow\\; 2c^2 = 25b^2",
          "explanation": "Replacing $a$ with $2c$ and dividing by $2$ gives a relation between $c$ and $b$ to examine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Show 25 b squared is even",
          "workingLatex": "2 \\mid 2c^2 \\;\\Rightarrow\\; 2 \\mid 25b^2",
          "explanation": "The left-hand side is even, so the equal right-hand side $25b^2$ is even too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Transfer to b squared",
          "workingLatex": "25 \\text{ odd} \\;\\Rightarrow\\; \\gcd(2, 25) = 1 \\;\\Rightarrow\\; 2 \\mid b^2",
          "explanation": "Since $25$ is odd, the factor of $2$ cannot come from it, so it must lie in $b^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce b is even",
          "workingLatex": "2 \\mid b^2 \\;\\Rightarrow\\; b \\text{ even}",
          "explanation": "An even square forces an even base, so $b$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the common factor",
          "workingLatex": "2 \\mid a \\;\\text{and}\\; 2 \\mid b \\;\\Rightarrow\\; 2 \\mid \\gcd(a, b)",
          "explanation": "Both $a$ and $b$ are even, so $2$ is a common factor of the two.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reach the contradiction",
          "workingLatex": "\\gcd(a, b) = 1 \\;\\text{but}\\; 2 \\mid \\gcd(a, b) \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "This contradicts the assumption that $\\tfrac{a}{b}$ was in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude",
          "workingLatex": "\\therefore \\sqrt{50} \\notin \\mathbb{Q}",
          "explanation": "The contradiction shows the assumption is false, so $\\sqrt{50}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{50}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "proof",
    "tags": ["proof by contradiction", "Diophantine", "divisibility"],
    "questionText": "Prove by contradiction that there are no integers $x$ and $y$ such that $6x + 9y = 20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption",
          "workingLatex": "\\text{Assume } \\exists\\, x, y \\in \\mathbb{Z} \\text{ such that } 6x + 9y = 20",
          "explanation": "We suppose the equation has an integer solution, intending to derive an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the common factor",
          "workingLatex": "6 = 3 \\times 2, \\qquad 9 = 3 \\times 3",
          "explanation": "Both coefficients are multiples of $3$, hinting that the entire left-hand side is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out 3",
          "workingLatex": "6x + 9y = 3(2x + 3y)",
          "explanation": "Taking out $3$ writes the left-hand side as $3$ times an integer, revealing its divisibility.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the equation",
          "workingLatex": "3(2x + 3y) = 20",
          "explanation": "Substituting the factored form keeps the equation true while exposing the factor of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce an integer for the bracket",
          "workingLatex": "\\text{Let } k = 2x + 3y \\in \\mathbb{Z} \\;\\Rightarrow\\; 3k = 20",
          "explanation": "As $x$ and $y$ are integers, $2x + 3y$ is an integer $k$, so the equation claims $20$ is $3$ times a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret as divisibility",
          "workingLatex": "20 = 3k \\;\\Rightarrow\\; 3 \\mid 20",
          "explanation": "If $20 = 3k$ for an integer $k$, then $3$ must divide $20$. We now check whether that is possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide 20 by 3",
          "workingLatex": "20 = 3 \\times 6 + 2",
          "explanation": "The division leaves remainder $2$, which is not zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce 3 does not divide 20",
          "workingLatex": "\\text{remainder } 2 \\neq 0 \\;\\Rightarrow\\; 3 \\nmid 20",
          "explanation": "A non-zero remainder means $20$ is not a multiple of $3$, contradicting what the assumption produced.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reach the contradiction",
          "workingLatex": "3 \\mid 20 \\;\\text{and}\\; 3 \\nmid 20 \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "The assumption forces $3$ both to divide and not to divide $20$, an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude",
          "workingLatex": "\\nexists\\, x, y \\in \\mathbb{Z} : 6x + 9y = 20",
          "explanation": "Because the assumption led to a contradiction, no integer solution exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are no integers $x$ and $y$ satisfying $6x + 9y = 20$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "parity", "number theory"],
    "questionText": "Prove by contradiction that there is no rational number $x$ such that $2^{x} = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption",
          "workingLatex": "\\text{Assume } \\exists\\, x \\in \\mathbb{Q} \\text{ such that } 2^{x} = 3",
          "explanation": "We suppose a rational exponent $x$ solving $2^{x} = 3$ exists, and seek a contradiction from its consequences.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write x as a fraction",
          "workingLatex": "x = \\frac{p}{q}, \\quad p, q \\in \\mathbb{Z}, \\; q > 0",
          "explanation": "Every rational number can be written with an integer numerator and a positive integer denominator, which lets us manipulate the powers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show x is positive",
          "workingLatex": "2^{x} = 3 > 1 = 2^{0}, \\quad 2^{t} \\text{ increasing} \\;\\Rightarrow\\; x > 0",
          "explanation": "Since $2^{t}$ grows as $t$ increases and $3$ is bigger than $2^{0}=1$, the exponent $x$ must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce p is positive",
          "workingLatex": "q > 0, \\; \\frac{p}{q} = x > 0 \\;\\Rightarrow\\; p > 0 \\;\\Rightarrow\\; p \\geq 1, \\; q \\geq 1",
          "explanation": "With a positive denominator, a positive value of $x$ forces the numerator $p$ to be positive, so both $p$ and $q$ are at least $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the equation",
          "workingLatex": "2^{p/q} = 3",
          "explanation": "Substituting $x = p/q$ restates the assumption in a form ready to be cleared of the fractional exponent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Raise both sides to the power q",
          "workingLatex": "\\left(2^{p/q}\\right)^{q} = 3^{q}",
          "explanation": "Raising both sides to the positive integer power $q$ is a valid operation that will strip away the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the left-hand side",
          "workingLatex": "\\left(2^{p/q}\\right)^{q} = 2^{p}",
          "explanation": "Multiplying the exponents, $\\tfrac{p}{q}\\times q = p$, so the left-hand side becomes a clean power of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the integer equation",
          "workingLatex": "2^{p} = 3^{q}",
          "explanation": "We now have an equation between two positive integers, one a power of $2$ and the other a power of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "The left-hand side is even",
          "workingLatex": "p \\geq 1 \\;\\Rightarrow\\; 2 \\mid 2^{p} \\;\\Rightarrow\\; 2^{p} \\text{ even}",
          "explanation": "Because $p \\geq 1$, the number $2^{p}$ contains at least one factor of $2$ and is therefore even.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "The right-hand side is odd",
          "workingLatex": "3^{q} = \\underbrace{3 \\times 3 \\times \\cdots \\times 3}_{q \\text{ factors}}, \\quad q \\geq 1 \\;\\Rightarrow\\; 3^{q} \\text{ odd}",
          "explanation": "A product of odd numbers is odd, so $3^{q}$ is odd for every $q \\geq 1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reach the contradiction",
          "workingLatex": "2^{p} \\text{ even} = 3^{q} \\text{ odd} \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "An even number cannot equal an odd number, so the equation $2^{p} = 3^{q}$ is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Trace the contradiction back",
          "workingLatex": "\\text{The impossibility follows from assuming } x \\in \\mathbb{Q}",
          "explanation": "Every step was forced by the single assumption that $x$ is rational, so that assumption is what fails.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\nexists\\, x \\in \\mathbb{Q} : 2^{x} = 3",
          "explanation": "Since the assumption leads to a contradiction, no rational $x$ can satisfy $2^{x} = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no rational number $x$ such that $2^{x} = 3$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["proof by contradiction", "primes", "modular arithmetic", "number theory"],
    "questionText": "Prove by contradiction that there are infinitely many primes of the form $6k + 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption",
          "workingLatex": "\\text{Such primes exist } (5, 11, 17, \\ldots). \\;\\text{Assume only finitely many}: \\; q_1, q_2, \\ldots, q_m",
          "explanation": "We know at least some primes of this form exist, so we can meaningfully suppose there are only finitely many and list them all. Forcing a missing one will contradict the list being complete.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify primes greater than 3 modulo 6",
          "workingLatex": "p > 3 \\text{ prime} \\;\\Rightarrow\\; p \\equiv 1 \\text{ or } 5 \\pmod{6}",
          "explanation": "Residues $0, 2, 4 \\pmod 6$ are even and $3 \\pmod 6$ is divisible by $3$, so a prime above $3$ can only be $1$ or $5$ modulo $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Construct a special number",
          "workingLatex": "N = 6\\,q_1 q_2 \\cdots q_m - 1",
          "explanation": "We build $N$ from the product of all the listed primes; subtracting $1$ is engineered to give a useful residue and to make $N$ awkward for the listed primes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find N modulo 6",
          "workingLatex": "N = 6\\,q_1 \\cdots q_m - 1 \\equiv -1 \\equiv 5 \\pmod{6}",
          "explanation": "The product term is a multiple of $6$, so $N$ is one less than a multiple of $6$, giving residue $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm N is large",
          "workingLatex": "q_i \\geq 5 \\;\\Rightarrow\\; N \\geq 6 \\times 5 - 1 = 29 > 1",
          "explanation": "Since each listed prime is at least $5$, $N$ is comfortably bigger than $1$ and so has at least one prime factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Show N is coprime to 2 and 3",
          "workingLatex": "N \\equiv 5 \\pmod 6 \\;\\Rightarrow\\; N \\text{ odd}, \\; 3 \\nmid N \\;\\Rightarrow\\; \\text{every prime factor of } N \\text{ is} > 3",
          "explanation": "A number that is $5 \\pmod 6$ is neither even nor a multiple of $3$, so none of its prime factors can be $2$ or $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the classification to N's factors",
          "workingLatex": "\\text{each prime factor of } N \\equiv 1 \\text{ or } 5 \\pmod 6",
          "explanation": "By step 2, every prime factor of $N$, being larger than $3$, must be $1$ or $5$ modulo $6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Suppose all factors were 1 mod 6",
          "workingLatex": "\\text{If every prime factor} \\equiv 1 \\pmod 6, \\text{ then a product of such} \\equiv 1 \\pmod 6",
          "explanation": "Multiplying numbers that are each $1 \\pmod 6$ keeps the product at $1 \\pmod 6$, since $1 \\times 1 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Contradiction with N's residue",
          "workingLatex": "N \\equiv 1 \\pmod 6 \\text{ contradicts } N \\equiv 5 \\pmod 6",
          "explanation": "That would make $N$ equal to $1$ modulo $6$, but we found $N \\equiv 5$, so not all factors can be $1 \\pmod 6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Extract a prime factor of the right form",
          "workingLatex": "\\exists \\text{ prime } r \\mid N \\text{ with } r \\equiv 5 \\pmod 6",
          "explanation": "Since the factors cannot all be $1 \\pmod 6$, at least one prime factor $r$ must be $5 \\pmod 6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "r must be in the list",
          "workingLatex": "r \\equiv 5 \\pmod 6 \\;\\Rightarrow\\; r \\in \\{q_1, \\ldots, q_m\\} \\;\\Rightarrow\\; r \\mid 6\\,q_1 \\cdots q_m",
          "explanation": "Our list was assumed complete, so $r$ is one of the $q_j$ and therefore divides the product $6\\,q_1 \\cdots q_m$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "r also divides N",
          "workingLatex": "r \\mid N = 6\\,q_1 \\cdots q_m - 1",
          "explanation": "By construction $r$ was chosen as a prime factor of $N$, so it divides $N$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Subtract to bound r",
          "workingLatex": "r \\mid \\big(6\\,q_1 \\cdots q_m\\big) - N = 1 \\;\\Rightarrow\\; r \\mid 1",
          "explanation": "If $r$ divides both a number and that number minus $1$, it must divide their difference, which is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Reach the contradiction",
          "workingLatex": "r \\text{ prime}, \\; r \\geq 5 \\;\\text{but}\\; r \\mid 1 \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "No prime can divide $1$, so the assumption that the list was complete is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude",
          "workingLatex": "\\therefore \\text{ there are infinitely many primes of the form } 6k + 5",
          "explanation": "Since assuming finitely many led to a contradiction, the primes of this form cannot be finite in number.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are infinitely many primes of the form $6k + 5$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "number theory", "perfect squares"],
    "questionText": "Let $n$ be a positive integer that is not a perfect square. Prove by contradiction that $\\sqrt{n}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypothesis and assumption",
          "workingLatex": "n \\in \\mathbb{Z}^{+} \\text{ not a perfect square}. \\;\\text{Assume } \\sqrt{n} \\in \\mathbb{Q}",
          "explanation": "Given that $n$ is a non-square positive integer, we suppose the opposite of the claim, namely that $\\sqrt{n}$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the root in lowest terms",
          "workingLatex": "\\sqrt{n} = \\frac{a}{b}, \\quad a, b \\in \\mathbb{Z}^{+}, \\; \\gcd(a, b) = 1, \\; b \\geq 1",
          "explanation": "Any positive rational can be written in lowest terms, so $a$ and $b$ share no common factor. This shared-factor freedom is what we will exploit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square and clear the fraction",
          "workingLatex": "n = \\frac{a^2}{b^2} \\;\\Rightarrow\\; n\\,b^2 = a^2",
          "explanation": "Squaring and multiplying up gives a clean equation among integers relating $n$, $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Suppose b exceeds 1",
          "workingLatex": "\\text{Suppose } b > 1 \\;\\Rightarrow\\; \\exists \\text{ prime } p \\text{ with } p \\mid b",
          "explanation": "If the denominator were bigger than $1$ it would have a prime factor $p$; we show this cannot happen.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "p divides b squared",
          "workingLatex": "p \\mid b \\;\\Rightarrow\\; p \\mid b^2",
          "explanation": "If a prime divides $b$, it certainly divides $b^2$, since $b^2$ carries every factor of $b$ twice over.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "p divides a squared",
          "workingLatex": "p \\mid b^2 \\;\\Rightarrow\\; p \\mid n\\,b^2 = a^2",
          "explanation": "Dividing $b^2$, the prime $p$ also divides the multiple $n\\,b^2$, which the equation shows equals $a^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "p divides a",
          "workingLatex": "p \\text{ prime}, \\; p \\mid a^2 \\;\\Rightarrow\\; p \\mid a",
          "explanation": "A prime dividing a square divides its base, so $p \\mid a$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Contradiction with lowest terms",
          "workingLatex": "p \\mid a \\;\\text{and}\\; p \\mid b \\;\\Rightarrow\\; p \\mid \\gcd(a, b) = 1 \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "Then $p$ is a common factor of $a$ and $b$, contradicting $\\gcd(a,b)=1$. So $b > 1$ is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Deduce the denominator is 1",
          "workingLatex": "\\therefore b = 1",
          "explanation": "Ruling out $b > 1$ leaves only $b = 1$, so the supposed fraction is really a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute b = 1",
          "workingLatex": "n \\cdot 1^2 = a^2 \\;\\Rightarrow\\; n = a^2",
          "explanation": "With $b = 1$ the equation $n b^2 = a^2$ collapses to $n = a^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret this",
          "workingLatex": "n = a^2 \\text{ with } a \\in \\mathbb{Z}^{+} \\;\\Rightarrow\\; n \\text{ is a perfect square}",
          "explanation": "Writing $n$ as the square of an integer means $n$ is, by definition, a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Contradict the hypothesis",
          "workingLatex": "n \\text{ a perfect square contradicts } n \\text{ not a perfect square} \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "This clashes directly with the given fact that $n$ is not a perfect square, completing the contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\therefore \\sqrt{n} \\notin \\mathbb{Q}",
          "explanation": "Since assuming rationality forces $n$ to be a perfect square, and it is not, $\\sqrt{n}$ must be irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $n$ is a positive integer that is not a perfect square, then $\\sqrt{n}$ is irrational. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "infinite descent", "parity", "irrationality"],
    "questionText": "Prove by contradiction, using infinite descent, that there are no positive integers $a$ and $b$ with $a^2 = 2b^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption",
          "workingLatex": "\\text{Assume } \\exists\\, a, b \\in \\mathbb{Z}^{+} \\text{ with } a^2 = 2b^2",
          "explanation": "We suppose a positive-integer solution exists, planning to show it would spawn an ever-smaller solution, which is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect all such solutions",
          "workingLatex": "S = \\{\\, b \\in \\mathbb{Z}^{+} : \\exists\\, a \\in \\mathbb{Z}^{+}, \\; a^2 = 2b^2 \\,\\} \\neq \\varnothing",
          "explanation": "By the assumption, the set $S$ of valid values of $b$ is non-empty, so we can apply the well-ordering principle to it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the smallest solution",
          "workingLatex": "\\text{Let } b \\text{ be the least element of } S, \\text{ with matching } a: \\; a^2 = 2b^2",
          "explanation": "The well-ordering principle guarantees a smallest $b$; choosing it is the heart of infinite descent, since nothing smaller may appear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show a is even",
          "workingLatex": "a^2 = 2b^2 \\text{ even} \\;\\Rightarrow\\; a \\text{ even}",
          "explanation": "The right-hand side is $2$ times an integer, so $a^2$ is even, which forces $a$ even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write a as twice an integer",
          "workingLatex": "a = 2c \\quad (c \\in \\mathbb{Z}^{+})",
          "explanation": "Being even and positive, $a$ can be written as $2c$ for a positive integer $c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back",
          "workingLatex": "(2c)^2 = 2b^2 \\;\\Rightarrow\\; 4c^2 = 2b^2",
          "explanation": "Replacing $a$ with $2c$ gives an equation we can simplify to expose a new solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "2c^2 = b^2 \\;\\Rightarrow\\; b^2 = 2c^2",
          "explanation": "Dividing by $2$ produces exactly the same shape of equation, now with $b$ and $c$ in the roles previously held by $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recognise a new solution",
          "workingLatex": "b^2 = 2c^2 \\text{ has the form } X^2 = 2Y^2 \\text{ with } X = b, \\; Y = c",
          "explanation": "The pair $(b, c)$ satisfies the very same equation, so $c$ is the second component of a genuine positive-integer solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "So c belongs to S",
          "workingLatex": "c \\in \\mathbb{Z}^{+}, \\; b^2 = 2c^2 \\;\\Rightarrow\\; c \\in S",
          "explanation": "Since $c$ plays the role of the smaller index in a valid solution, it is itself a member of $S$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare sizes",
          "workingLatex": "b^2 = 2c^2 > c^2 \\;\\; (c \\geq 1) \\;\\Rightarrow\\; b > c \\;\\Rightarrow\\; c < b",
          "explanation": "Because $2c^2$ exceeds $c^2$, we get $b > c$, so $c$ is strictly smaller than $b$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Contradiction with minimality",
          "workingLatex": "c \\in S \\;\\text{and}\\; c < b = \\min S \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "We have produced an element of $S$ smaller than the supposed smallest one, which is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the descent",
          "workingLatex": "\\text{The minimal solution generates a strictly smaller one — infinite descent}",
          "explanation": "No positive integer can be decreased forever, so the chain cannot exist, and the assumption breaks down.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\nexists\\, a, b \\in \\mathbb{Z}^{+} : a^2 = 2b^2",
          "explanation": "Since the assumption forces an impossible descent, no positive-integer solution exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are no positive integers $a$ and $b$ with $a^2 = 2b^2$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "surds"],
    "questionText": "Prove by contradiction that there are no rational numbers $r$ and $s$ such that $r + s\\sqrt{2} = \\sqrt{3}$. (You may assume $\\sqrt{2}$ and $\\sqrt{3}$ are irrational.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the assumption",
          "workingLatex": "\\text{Assume } \\exists\\, r, s \\in \\mathbb{Q} \\text{ with } r + s\\sqrt{2} = \\sqrt{3}",
          "explanation": "We suppose rationals $r$ and $s$ combine with $\\sqrt2$ to give $\\sqrt3$, and aim to reach an impossibility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "\\left(r + s\\sqrt{2}\\right)^2 = \\left(\\sqrt{3}\\right)^2",
          "explanation": "Squaring is a natural move that will convert the equation into one involving $\\sqrt2$ linearly, so we can try to isolate it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the left-hand side",
          "workingLatex": "r^2 + 2rs\\sqrt{2} + 2s^2 = 3",
          "explanation": "Expanding the bracket collects the rational parts $r^2 + 2s^2$ and leaves a single surd term $2rs\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the surd term",
          "workingLatex": "2rs\\sqrt{2} = 3 - r^2 - 2s^2",
          "explanation": "Gathering the rational terms on one side leaves the $\\sqrt2$ term alone, ready to be divided out if its coefficient is non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split into cases",
          "workingLatex": "\\text{Consider: } (1)\\; rs \\neq 0, \\quad (2)\\; s = 0, \\quad (3)\\; r = 0",
          "explanation": "Whether we can divide by $2rs$ depends on $r$ and $s$ being non-zero, so we treat the possible zero cases separately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case 1 — both non-zero",
          "workingLatex": "rs \\neq 0 \\;\\Rightarrow\\; \\sqrt{2} = \\frac{3 - r^2 - 2s^2}{2rs}",
          "explanation": "With $rs \\neq 0$ we may divide, expressing $\\sqrt2$ as a formula built from the rationals $r$ and $s$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Contradiction in Case 1",
          "workingLatex": "r, s \\in \\mathbb{Q} \\;\\Rightarrow\\; \\frac{3 - r^2 - 2s^2}{2rs} \\in \\mathbb{Q} \\;\\Rightarrow\\; \\sqrt{2} \\in \\mathbb{Q} \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "The right-hand side is built entirely from rationals so is rational, making $\\sqrt2$ rational — contradicting that $\\sqrt2$ is irrational.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case 2 — s is zero",
          "workingLatex": "s = 0 \\;\\Rightarrow\\; r + 0 = \\sqrt{3} \\;\\Rightarrow\\; r = \\sqrt{3}",
          "explanation": "If $s = 0$, the original equation collapses to $r = \\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Contradiction in Case 2",
          "workingLatex": "r \\in \\mathbb{Q} \\;\\text{but}\\; \\sqrt{3} \\notin \\mathbb{Q} \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "Then a rational number would equal $\\sqrt3$, contradicting that $\\sqrt3$ is irrational.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Case 3 — r is zero",
          "workingLatex": "r = 0 \\;\\Rightarrow\\; s\\sqrt{2} = \\sqrt{3} \\;\\Rightarrow\\; s = \\frac{\\sqrt{3}}{\\sqrt{2}} = \\frac{\\sqrt{6}}{2}",
          "explanation": "If $r = 0$ the equation gives $s\\sqrt2 = \\sqrt3$; rationalising the denominator writes $s$ as $\\tfrac{\\sqrt6}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Contradiction in Case 3",
          "workingLatex": "6 \\text{ not a perfect square} \\;\\Rightarrow\\; \\sqrt{6} \\notin \\mathbb{Q} \\;\\Rightarrow\\; s = \\tfrac{\\sqrt{6}}{2} \\notin \\mathbb{Q} \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow",
          "explanation": "Since $6$ is not a perfect square, $\\sqrt6$ is irrational, so $\\tfrac{\\sqrt6}{2}$ is irrational, contradicting that $s$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "All cases contradict",
          "workingLatex": "\\text{Cases } (1), (2), (3) \\text{ each yield } \\Rightarrow\\Leftarrow",
          "explanation": "The three cases together cover every possibility for $r$ and $s$, and each ends in a contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\nexists\\, r, s \\in \\mathbb{Q} : r + s\\sqrt{2} = \\sqrt{3}",
          "explanation": "As every case is impossible, no such rationals $r$ and $s$ exist.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are no rational numbers $r$ and $s$ such that $r + s\\sqrt{2} = \\sqrt{3}$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.proof-contradiction.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Proof by contradiction",
    "subtopicId": "al.y2.pure.proof-contradiction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": ["proof by contradiction", "irrationality", "number theory", "factorisation"],
    "questionText": "Prove by contradiction that for every integer $n \\geq 1$, $\\sqrt{n^2 + 1}$ is irrational.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Fix n and state the assumption",
          "workingLatex": "\\text{Fix } n \\in \\mathbb{Z}, \\; n \\geq 1. \\;\\text{Assume } \\sqrt{n^2 + 1} \\in \\mathbb{Q}",
          "explanation": "We take an arbitrary $n \\geq 1$ and suppose the root is rational, aiming to force an impossible value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the root in lowest terms",
          "workingLatex": "\\sqrt{n^2 + 1} = \\frac{a}{b}, \\quad a, b \\in \\mathbb{Z}^{+}, \\; \\gcd(a, b) = 1",
          "explanation": "A positive rational can be put in lowest terms, so $a$ and $b$ have no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square and clear the fraction",
          "workingLatex": "n^2 + 1 = \\frac{a^2}{b^2} \\;\\Rightarrow\\; (n^2 + 1)\\,b^2 = a^2",
          "explanation": "Squaring and multiplying up gives an integer equation, since $n^2 + 1$ is a positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argue the denominator is 1",
          "workingLatex": "b > 1 \\;\\Rightarrow\\; \\exists\\, \\text{prime } p \\mid b \\;\\Rightarrow\\; p \\mid (n^2 + 1)b^2 = a^2 \\;\\Rightarrow\\; p \\mid a",
          "explanation": "If $b$ exceeded $1$, a prime factor $p$ of $b$ would also divide $a^2$ and hence $a$, giving $a$ and $b$ a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rule out b greater than 1",
          "workingLatex": "p \\mid \\gcd(a, b) = 1 \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow \\;\\Rightarrow\\; b = 1",
          "explanation": "That common factor contradicts lowest terms, so $b > 1$ is impossible and $b = 1$. In short, a rational square root of an integer must itself be an integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "The root is an integer",
          "workingLatex": "b = 1 \\;\\Rightarrow\\; \\sqrt{n^2 + 1} = a =: k \\in \\mathbb{Z}^{+}",
          "explanation": "With $b = 1$ the root equals the positive integer $a$, which we rename $k$ for clarity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Square to remove the root",
          "workingLatex": "k^2 = n^2 + 1",
          "explanation": "Squaring the integer equation $k = \\sqrt{n^2+1}$ gives a purely integer relation between $k$ and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange as a difference of squares",
          "workingLatex": "k^2 - n^2 = 1",
          "explanation": "Moving $n^2$ across sets up a difference of two squares equal to $1$, which factorises neatly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise",
          "workingLatex": "(k - n)(k + n) = 1",
          "explanation": "Factorising turns the equation into a product of two integers equal to $1$, sharply restricting their values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Both factors are positive integers",
          "workingLatex": "k^2 = n^2 + 1 > n^2 \\;\\Rightarrow\\; k > n \\geq 1 \\;\\Rightarrow\\; k - n \\geq 1, \\; k + n \\geq 1",
          "explanation": "Since $k^2$ exceeds $n^2$, we have $k > n$, so both $k - n$ and $k + n$ are positive integers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the factor equations",
          "workingLatex": "(k - n)(k + n) = 1, \\; \\text{positive integers} \\;\\Rightarrow\\; k - n = 1 \\;\\text{and}\\; k + n = 1",
          "explanation": "Two positive integers can only multiply to $1$ if both are $1$, so each factor equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for n",
          "workingLatex": "(k + n) - (k - n) = 1 - 1 \\;\\Rightarrow\\; 2n = 0 \\;\\Rightarrow\\; n = 0",
          "explanation": "Subtracting the two equations eliminates $k$ and forces $n = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reach the contradiction and conclude",
          "workingLatex": "n = 0 \\text{ contradicts } n \\geq 1 \\;\\Rightarrow\\; \\Rightarrow\\Leftarrow \\;\\Rightarrow\\; \\sqrt{n^2 + 1} \\notin \\mathbb{Q}",
          "explanation": "But we fixed $n \\geq 1$, so $n = 0$ is impossible; hence the assumption fails and $\\sqrt{n^2+1}$ is irrational for every $n \\geq 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "For every integer $n \\geq 1$, $\\sqrt{n^2 + 1}$ is irrational. $\\blacksquare$"
    }
  },
];
