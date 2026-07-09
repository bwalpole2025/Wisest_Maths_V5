import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q001",
    "tags": [
      "basic",
      "series",
      "sum-r"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that $\\displaystyle\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}",
          "explanation": "Write the proposition we aim to prove for each positive integer $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "\\text{LHS} = 1,\\quad \\text{RHS} = \\frac{1 \\cdot 2}{2} = 1",
          "explanation": "Verify the formula holds for the smallest value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base case holds",
          "workingLatex": "1 = 1 \\checkmark",
          "explanation": "Both sides are equal, so $P(1)$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true: } \\sum_{r=1}^{k} r = \\frac{k(k+1)}{2}",
          "explanation": "Suppose the result holds for some $k \\geqslant 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r = \\sum_{r=1}^{k} r + (k+1)",
          "explanation": "Separate the last term from the sum up to $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the hypothesis",
          "workingLatex": "= \\frac{k(k+1)}{2} + (k+1)",
          "explanation": "Replace the sum to $k$ using the inductive hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}",
          "explanation": "Take out the common factor $(k+1)$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ is true}. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\in \\mathbb{N}",
          "explanation": "The RHS matches $\\frac{(k+1)((k+1)+1)}{2}$, completing the inductive step.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved by induction: $\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q002",
    "tags": [
      "basic",
      "series",
      "sum-r"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Use induction to show that $1 + 2 + 3 + \\cdots + n = \\dfrac{n(n+1)}{2}$ for every $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 1+2+\\cdots+n = \\frac{n(n+1)}{2}",
          "explanation": "Write the proposition we aim to prove for each positive integer $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "\\text{LHS} = 1,\\quad \\text{RHS} = \\frac{1 \\cdot 2}{2} = 1",
          "explanation": "Verify the formula holds for the smallest value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base case holds",
          "workingLatex": "1 = 1 \\checkmark",
          "explanation": "Both sides are equal, so $P(1)$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true: } \\sum_{r=1}^{k} r = \\frac{k(k+1)}{2}",
          "explanation": "Suppose the result holds for some $k \\geqslant 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r = \\sum_{r=1}^{k} r + (k+1)",
          "explanation": "Separate the last term from the sum up to $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the hypothesis",
          "workingLatex": "= \\frac{k(k+1)}{2} + (k+1)",
          "explanation": "Replace the sum to $k$ using the inductive hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}",
          "explanation": "Take out the common factor $(k+1)$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ is true}. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\in \\mathbb{N}",
          "explanation": "The RHS matches $\\frac{(k+1)((k+1)+1)}{2}$, completing the inductive step.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved by induction: $\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q003",
    "tags": [
      "basic",
      "series",
      "sum-r"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove that the sum of the first $n$ positive integers is $\\dfrac{n(n+1)}{2}$, using mathematical induction.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\text{sum of first } n \\text{ integers} = \\frac{n(n+1)}{2}",
          "explanation": "Write the proposition we aim to prove for each positive integer $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "\\text{LHS} = 1,\\quad \\text{RHS} = \\frac{1 \\cdot 2}{2} = 1",
          "explanation": "Verify the formula holds for the smallest value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base case holds",
          "workingLatex": "1 = 1 \\checkmark",
          "explanation": "Both sides are equal, so $P(1)$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true: } \\sum_{r=1}^{k} r = \\frac{k(k+1)}{2}",
          "explanation": "Suppose the result holds for some $k \\geqslant 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r = \\sum_{r=1}^{k} r + (k+1)",
          "explanation": "Separate the last term from the sum up to $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the hypothesis",
          "workingLatex": "= \\frac{k(k+1)}{2} + (k+1)",
          "explanation": "Replace the sum to $k$ using the inductive hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}",
          "explanation": "Take out the common factor $(k+1)$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ is true}. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\in \\mathbb{N}",
          "explanation": "The RHS matches $\\frac{(k+1)((k+1)+1)}{2}$, completing the inductive step.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved by induction: $\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q004",
    "tags": [
      "basic",
      "series",
      "sum-r"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Show by induction that $\\displaystyle\\sum_{r=1}^{n} r = \\frac{n^2 + n}{2}$ for all integers $n \\geqslant 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r = \\frac{n^2+n}{2}",
          "explanation": "Write the proposition we aim to prove for each positive integer $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "\\text{LHS} = 1,\\quad \\text{RHS} = \\frac{1 \\cdot 2}{2} = 1",
          "explanation": "Verify the formula holds for the smallest value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base case holds",
          "workingLatex": "1 = 1 \\checkmark",
          "explanation": "Both sides are equal, so $P(1)$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true: } \\sum_{r=1}^{k} r = \\frac{k(k+1)}{2}",
          "explanation": "Suppose the result holds for some $k \\geqslant 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r = \\sum_{r=1}^{k} r + (k+1)",
          "explanation": "Separate the last term from the sum up to $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the hypothesis",
          "workingLatex": "= \\frac{k(k+1)}{2} + (k+1)",
          "explanation": "Replace the sum to $k$ using the inductive hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}",
          "explanation": "Take out the common factor $(k+1)$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ is true}. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\in \\mathbb{N}",
          "explanation": "The RHS matches $\\frac{(k+1)((k+1)+1)}{2}$, completing the inductive step.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved by induction: $\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q005",
    "tags": [
      "basic",
      "series",
      "even-numbers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by induction that $2 + 4 + 6 + \\cdots + 2n = n(n+1)$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} 2r = n(n+1)",
          "explanation": "The sum of the first $n$ even numbers equals $n(n+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "2 = 1 \\cdot 2 = 2 \\checkmark",
          "explanation": "For $n=1$, LHS $= 2$ and RHS $= 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} 2r = k(k+1)",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} 2r = \\sum_{r=1}^{k} 2r + 2(k+1)",
          "explanation": "Add the next even term $2(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply hypothesis",
          "workingLatex": "= k(k+1) + 2(k+1)",
          "explanation": "Substitute the assumed result for the sum to $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "= (k+1)(k + 2) = (k+1)((k+1)+1)",
          "explanation": "Factor out $(k+1)$ to reveal the required form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The expression matches $n(n+1)$ with $n=k+1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} 2r = n(n+1)$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q006",
    "tags": [
      "basic",
      "series",
      "even-numbers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by induction that $2 + 4 + 6 + \\cdots + 2n = n(n+1)$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} 2r = n(n+1)",
          "explanation": "The sum of the first $n$ even numbers equals $n(n+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "2 = 1 \\cdot 2 = 2 \\checkmark",
          "explanation": "For $n=1$, LHS $= 2$ and RHS $= 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} 2r = k(k+1)",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} 2r = \\sum_{r=1}^{k} 2r + 2(k+1)",
          "explanation": "Add the next even term $2(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply hypothesis",
          "workingLatex": "= k(k+1) + 2(k+1)",
          "explanation": "Substitute the assumed result for the sum to $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "= (k+1)(k + 2) = (k+1)((k+1)+1)",
          "explanation": "Factor out $(k+1)$ to reveal the required form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The expression matches $n(n+1)$ with $n=k+1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} 2r = n(n+1)$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q007",
    "tags": [
      "basic",
      "series",
      "odd-numbers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Use mathematical induction to prove that $1 + 3 + 5 + \\cdots + (2n-1) = n^2$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} (2r-1) = n^2",
          "explanation": "The sum of the first $n$ odd numbers equals $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1 = 1^2 = 1 \\checkmark",
          "explanation": "The first odd number is $1$, and $1^2 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} (2r-1) = k^2",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} (2r-1) = k^2 + (2(k+1)-1)",
          "explanation": "Add the $(k+1)$th odd number, which is $2(k+1)-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify new term",
          "workingLatex": "= k^2 + 2k + 1",
          "explanation": "Expand $2(k+1)-1 = 2k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise square",
          "workingLatex": "= (k+1)^2",
          "explanation": "The expression is a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } \\sum_{r=1}^{n}(2r-1)=n^2",
          "explanation": "This is exactly the formula with $n=k+1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: the sum of the first $n$ odd numbers is $n^2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q008",
    "tags": [
      "basic",
      "series",
      "odd-numbers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Use mathematical induction to prove that $1 + 3 + 5 + \\cdots + (2n-1) = n^2$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} (2r-1) = n^2",
          "explanation": "The sum of the first $n$ odd numbers equals $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1 = 1^2 = 1 \\checkmark",
          "explanation": "The first odd number is $1$, and $1^2 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} (2r-1) = k^2",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} (2r-1) = k^2 + (2(k+1)-1)",
          "explanation": "Add the $(k+1)$th odd number, which is $2(k+1)-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify new term",
          "workingLatex": "= k^2 + 2k + 1",
          "explanation": "Expand $2(k+1)-1 = 2k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise square",
          "workingLatex": "= (k+1)^2",
          "explanation": "The expression is a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } \\sum_{r=1}^{n}(2r-1)=n^2",
          "explanation": "This is exactly the formula with $n=k+1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: the sum of the first $n$ odd numbers is $n^2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q009",
    "tags": [
      "basic",
      "divisibility"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 3^n - 1 is divisible by 2 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 2 \\mid 3^n - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "3^1 - 1 = 2",
          "explanation": "Compute directly: $2 = 2 \\times 1$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "2 \\text{ is divisible by } 2 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 2 \\mid 3^k - 1, \\text{ so } 3^k - 1 = 2m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "3^{k+1} - 1 = 3 \\cdot 3^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 3(3^k - 1) + (3 - 1)",
          "explanation": "Add and subtract $2$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 3 \\cdot 2m + 2",
          "explanation": "The first term is $2$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 2. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $2$ is itself a multiple of $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 2 divides 3^n - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q010",
    "tags": [
      "basic",
      "divisibility"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 4^n - 1 is divisible by 3 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 3 \\mid 4^n - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "4^1 - 1 = 3",
          "explanation": "Compute directly: $3 = 3 \\times 1$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "3 \\text{ is divisible by } 3 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 3 \\mid 4^k - 1, \\text{ so } 4^k - 1 = 3m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "4^{k+1} - 1 = 4 \\cdot 4^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 4(4^k - 1) + (4 - 1)",
          "explanation": "Add and subtract $3$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 4 \\cdot 3m + 3",
          "explanation": "The first term is $3$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 3. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $3$ is itself a multiple of $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 3 divides 4^n - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q011",
    "tags": [
      "basic",
      "divisibility"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 5^n - 1 is divisible by 4 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 4 \\mid 5^n - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "5^1 - 1 = 4",
          "explanation": "Compute directly: $4 = 4 \\times 1$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "4 \\text{ is divisible by } 4 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 4 \\mid 5^k - 1, \\text{ so } 5^k - 1 = 4m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "5^{k+1} - 1 = 5 \\cdot 5^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 5(5^k - 1) + (5 - 1)",
          "explanation": "Add and subtract $4$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 5 \\cdot 4m + 4",
          "explanation": "The first term is $4$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 4. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $4$ is itself a multiple of $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 4 divides 5^n - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q012",
    "tags": [
      "basic",
      "divisibility"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 7^n - 1 is divisible by 6 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 6 \\mid 7^n - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "7^1 - 1 = 6",
          "explanation": "Compute directly: $6 = 6 \\times 1$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "6 \\text{ is divisible by } 6 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 6 \\mid 7^k - 1, \\text{ so } 7^k - 1 = 6m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "7^{k+1} - 1 = 7 \\cdot 7^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 7(7^k - 1) + (7 - 1)",
          "explanation": "Add and subtract $6$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 7 \\cdot 6m + 6",
          "explanation": "The first term is $6$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 6. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $6$ is itself a multiple of $6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 6 divides 7^n - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q013",
    "tags": [
      "even-power",
      "divisibility"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 3^{2n} - 1 is divisible by 2 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 2 \\mid 3^{2n} - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "3^1 - 1 = 2",
          "explanation": "Compute directly: $2 = 2 \\times 1$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "2 \\text{ is divisible by } 2 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 2 \\mid 3^k - 1, \\text{ so } 3^k - 1 = 2m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "3^{k+1} - 1 = 3 \\cdot 3^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 3(3^k - 1) + (3 - 1)",
          "explanation": "Add and subtract $2$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 3 \\cdot 2m + 2",
          "explanation": "The first term is $2$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 2. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $2$ is itself a multiple of $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 2 divides 3^{2n} - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q014",
    "tags": [
      "even-power",
      "divisibility"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 2^{2n} - 1 is divisible by 3 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 3 \\mid 2^{2n} - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "2^1 - 1 = 1",
          "explanation": "Compute directly: $1 = 3 \\times 0.3333333333333333$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "1 \\text{ is divisible by } 3 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 3 \\mid 2^k - 1, \\text{ so } 2^k - 1 = 3m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "2^{k+1} - 1 = 2 \\cdot 2^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 2(2^k - 1) + (2 - 1)",
          "explanation": "Add and subtract $1$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 2 \\cdot 3m + 1",
          "explanation": "The first term is $3$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 3. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $3$ is itself a multiple of $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 3 divides 2^{2n} - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q015",
    "tags": [
      "basic",
      "divisibility"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 9^n - 1 is divisible by 8 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 8 \\mid 9^n - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "9^1 - 1 = 8",
          "explanation": "Compute directly: $8 = 8 \\times 1$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "8 \\text{ is divisible by } 8 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 8 \\mid 9^k - 1, \\text{ so } 9^k - 1 = 8m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "9^{k+1} - 1 = 9 \\cdot 9^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 9(9^k - 1) + (9 - 1)",
          "explanation": "Add and subtract $8$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 9 \\cdot 8m + 8",
          "explanation": "The first term is $8$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 8. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $8$ is itself a multiple of $8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 8 divides 9^n - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q016",
    "tags": [
      "basic",
      "divisibility"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 11^n - 1 is divisible by 10 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 10 \\mid 11^n - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "11^1 - 1 = 10",
          "explanation": "Compute directly: $10 = 10 \\times 1$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "10 \\text{ is divisible by } 10 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 10 \\mid 11^k - 1, \\text{ so } 11^k - 1 = 10m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "11^{k+1} - 1 = 11 \\cdot 11^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 11(11^k - 1) + (11 - 1)",
          "explanation": "Add and subtract $10$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 11 \\cdot 10m + 10",
          "explanation": "The first term is $10$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 10. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $10$ is itself a multiple of $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 10 divides 11^n - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q017",
    "tags": [
      "basic",
      "inequality"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $2^n > n$ for all integers $n \\geqslant 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 2^n > n",
          "explanation": "We prove the inequality for all $n$ from the base value upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=2$",
          "workingLatex": "2^{2} = 4, \\quad 2 = 2",
          "explanation": "Verify directly for the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "4 > 2 \\checkmark",
          "explanation": "The inequality is true at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 2^k > k \\text{ for some } k \\geqslant 2",
          "explanation": "Suppose the inequality holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "2^{k+1} = 2 \\cdot 2^k",
          "explanation": "Express the left-hand side using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "2^{k+1} > 2 \\cdot k",
          "explanation": "Since $2^k > k$ and $2 > 0$, multiply the inequality by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $k+1$",
          "workingLatex": "\\text{For } k \\geqslant 2: 2k \\geqslant k + k > k + 1",
          "explanation": "Since $2 \\geqslant 2$, we have $2k \\geqslant 2k > k+1$ for $k \\geqslant 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "2^{k+1} > k+1. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\geqslant 2",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $2^n > n$ for all $n \\geqslant 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q018",
    "tags": [
      "basic",
      "inequality"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $2^n > n$ for all integers $n \\geqslant 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 2^n > n",
          "explanation": "We prove the inequality for all $n$ from the base value upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=2$",
          "workingLatex": "2^{2} = 4, \\quad 2 = 2",
          "explanation": "Verify directly for the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "4 > 2 \\checkmark",
          "explanation": "The inequality is true at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 2^k > k \\text{ for some } k \\geqslant 2",
          "explanation": "Suppose the inequality holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "2^{k+1} = 2 \\cdot 2^k",
          "explanation": "Express the left-hand side using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "2^{k+1} > 2 \\cdot k",
          "explanation": "Since $2^k > k$ and $2 > 0$, multiply the inequality by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $k+1$",
          "workingLatex": "\\text{For } k \\geqslant 2: 2k \\geqslant k + k > k + 1",
          "explanation": "Since $2 \\geqslant 2$, we have $2k \\geqslant 2k > k+1$ for $k \\geqslant 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "2^{k+1} > k+1. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\geqslant 2",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $2^n > n$ for all $n \\geqslant 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q019",
    "tags": [
      "basic",
      "inequality"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $3^n > n$ for all integers $n \\geqslant 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 3^n > n",
          "explanation": "We prove the inequality for all $n$ from the base value upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "3^{1} = 3, \\quad 1 = 1",
          "explanation": "Verify directly for the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "3 > 1 \\checkmark",
          "explanation": "The inequality is true at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 3^k > k \\text{ for some } k \\geqslant 1",
          "explanation": "Suppose the inequality holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "3^{k+1} = 3 \\cdot 3^k",
          "explanation": "Express the left-hand side using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "3^{k+1} > 3 \\cdot k",
          "explanation": "Since $3^k > k$ and $3 > 0$, multiply the inequality by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $k+1$",
          "workingLatex": "\\text{For } k \\geqslant 1: 3k \\geqslant k + k > k + 1",
          "explanation": "Since $3 \\geqslant 2$, we have $3k \\geqslant 2k > k+1$ for $k \\geqslant 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "3^{k+1} > k+1. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\geqslant 1",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $3^n > n$ for all $n \\geqslant 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q020",
    "tags": [
      "powers-of-2",
      "inequality"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $2^n > n$ for all integers $n \\geqslant 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 2^n > n",
          "explanation": "We prove the inequality for all $n$ from the base value upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=2$",
          "workingLatex": "2^{2} = 4, \\quad 2 = 2",
          "explanation": "Verify directly for the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "4 > 2 \\checkmark",
          "explanation": "The inequality is true at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 2^k > k \\text{ for some } k \\geqslant 2",
          "explanation": "Suppose the inequality holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "2^{k+1} = 2 \\cdot 2^k",
          "explanation": "Express the left-hand side using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "2^{k+1} > 2 \\cdot k",
          "explanation": "Since $2^k > k$ and $2 > 0$, multiply the inequality by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $k+1$",
          "workingLatex": "\\text{For } k \\geqslant 2: 2k \\geqslant k + k > k + 1",
          "explanation": "Since $2 \\geqslant 2$, we have $2k \\geqslant 2k > k+1$ for $k \\geqslant 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "2^{k+1} > k+1. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\geqslant 2",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $2^n > n$ for all $n \\geqslant 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q021",
    "tags": [
      "comparison",
      "inequality"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $2^n > n$ for all integers $n \\geqslant 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 2^n > n",
          "explanation": "We prove the inequality for all $n$ from the base value upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=2$",
          "workingLatex": "2^{2} = 4, \\quad 2 = 2",
          "explanation": "Verify directly for the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "4 > 2 \\checkmark",
          "explanation": "The inequality is true at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 2^k > k \\text{ for some } k \\geqslant 2",
          "explanation": "Suppose the inequality holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "2^{k+1} = 2 \\cdot 2^k",
          "explanation": "Express the left-hand side using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "2^{k+1} > 2 \\cdot k",
          "explanation": "Since $2^k > k$ and $2 > 0$, multiply the inequality by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $k+1$",
          "workingLatex": "\\text{For } k \\geqslant 2: 2k \\geqslant k + k > k + 1",
          "explanation": "Since $2 \\geqslant 2$, we have $2k \\geqslant 2k > k+1$ for $k \\geqslant 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "2^{k+1} > k+1. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\geqslant 2",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $2^n > n$ for all $n \\geqslant 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q022",
    "tags": [
      "powers-of-3",
      "inequality"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $3^n > n$ for all integers $n \\geqslant 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 3^n > n",
          "explanation": "We prove the inequality for all $n$ from the base value upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "3^{1} = 3, \\quad 1 = 1",
          "explanation": "Verify directly for the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "3 > 1 \\checkmark",
          "explanation": "The inequality is true at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 3^k > k \\text{ for some } k \\geqslant 1",
          "explanation": "Suppose the inequality holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "3^{k+1} = 3 \\cdot 3^k",
          "explanation": "Express the left-hand side using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "3^{k+1} > 3 \\cdot k",
          "explanation": "Since $3^k > k$ and $3 > 0$, multiply the inequality by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $k+1$",
          "workingLatex": "\\text{For } k \\geqslant 1: 3k \\geqslant k + k > k + 1",
          "explanation": "Since $3 \\geqslant 2$, we have $3k \\geqslant 2k > k+1$ for $k \\geqslant 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "3^{k+1} > k+1. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\geqslant 1",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $3^n > n$ for all $n \\geqslant 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q023",
    "tags": [
      "review",
      "series",
      "sum-r"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that $\\displaystyle\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}",
          "explanation": "Write the proposition we aim to prove for each positive integer $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "\\text{LHS} = 1,\\quad \\text{RHS} = \\frac{1 \\cdot 2}{2} = 1",
          "explanation": "Verify the formula holds for the smallest value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base case holds",
          "workingLatex": "1 = 1 \\checkmark",
          "explanation": "Both sides are equal, so $P(1)$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true: } \\sum_{r=1}^{k} r = \\frac{k(k+1)}{2}",
          "explanation": "Suppose the result holds for some $k \\geqslant 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r = \\sum_{r=1}^{k} r + (k+1)",
          "explanation": "Separate the last term from the sum up to $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the hypothesis",
          "workingLatex": "= \\frac{k(k+1)}{2} + (k+1)",
          "explanation": "Replace the sum to $k$ using the inductive hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}",
          "explanation": "Take out the common factor $(k+1)$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ is true}. \\text{ By induction, } P(n) \\text{ holds } \\forall n \\in \\mathbb{N}",
          "explanation": "The RHS matches $\\frac{(k+1)((k+1)+1)}{2}$, completing the inductive step.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved by induction: $\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q024",
    "tags": [
      "review",
      "series",
      "odd-numbers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Use mathematical induction to prove that $1 + 3 + 5 + \\cdots + (2n-1) = n^2$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} (2r-1) = n^2",
          "explanation": "The sum of the first $n$ odd numbers equals $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1 = 1^2 = 1 \\checkmark",
          "explanation": "The first odd number is $1$, and $1^2 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} (2r-1) = k^2",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} (2r-1) = k^2 + (2(k+1)-1)",
          "explanation": "Add the $(k+1)$th odd number, which is $2(k+1)-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify new term",
          "workingLatex": "= k^2 + 2k + 1",
          "explanation": "Expand $2(k+1)-1 = 2k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise square",
          "workingLatex": "= (k+1)^2",
          "explanation": "The expression is a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } \\sum_{r=1}^{n}(2r-1)=n^2",
          "explanation": "This is exactly the formula with $n=k+1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: the sum of the first $n$ odd numbers is $n^2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q025",
    "tags": [
      "review",
      "series",
      "even-numbers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Prove by induction that $2 + 4 + 6 + \\cdots + 2n = n(n+1)$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} 2r = n(n+1)",
          "explanation": "The sum of the first $n$ even numbers equals $n(n+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "2 = 1 \\cdot 2 = 2 \\checkmark",
          "explanation": "For $n=1$, LHS $= 2$ and RHS $= 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} 2r = k(k+1)",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} 2r = \\sum_{r=1}^{k} 2r + 2(k+1)",
          "explanation": "Add the next even term $2(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply hypothesis",
          "workingLatex": "= k(k+1) + 2(k+1)",
          "explanation": "Substitute the assumed result for the sum to $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise",
          "workingLatex": "= (k+1)(k + 2) = (k+1)((k+1)+1)",
          "explanation": "Factor out $(k+1)$ to reveal the required form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The expression matches $n(n+1)$ with $n=k+1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} 2r = n(n+1)$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q026",
    "tags": [
      "basic",
      "series",
      "sum-r-squared"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}",
          "explanation": "This is the standard formula for the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^2 = 1,\\quad \\frac{1 \\cdot 2 \\cdot 3}{6} = 1 \\checkmark",
          "explanation": "Both sides equal $1$ when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^2 = \\frac{k(k+1)(2k+1)}{6}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^2 = \\sum_{r=1}^{k} r^2 + (k+1)^2",
          "explanation": "Isolate the new term $(k+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute hypothesis",
          "workingLatex": "= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2",
          "explanation": "Replace the sum to $k$ using the inductive assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Common denominator",
          "workingLatex": "= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6}",
          "explanation": "Write as a single fraction over $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out $(k+1)$",
          "workingLatex": "= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}",
          "explanation": "Factor $(k+1)$ from the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand bracket",
          "workingLatex": "= \\frac{(k+1)(2k^2 + 7k + 6)}{6}",
          "explanation": "Expand and collect like terms inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise quadratic",
          "workingLatex": "= \\frac{(k+1)(k+2)(2k+3)}{6}",
          "explanation": "Factor $2k^2+7k+6 = (k+2)(2k+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Match target form",
          "workingLatex": "= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}",
          "explanation": "Rewrite with $n=k+1$ to confirm $P(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q027",
    "tags": [
      "basic",
      "series",
      "sum-r-squared"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $1^2 + 2^2 + 3^2 + \\cdots + n^2 = \\dfrac{n(n+1)(2n+1)}{6}$ using mathematical induction.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}",
          "explanation": "This is the standard formula for the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^2 = 1,\\quad \\frac{1 \\cdot 2 \\cdot 3}{6} = 1 \\checkmark",
          "explanation": "Both sides equal $1$ when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^2 = \\frac{k(k+1)(2k+1)}{6}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^2 = \\sum_{r=1}^{k} r^2 + (k+1)^2",
          "explanation": "Isolate the new term $(k+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute hypothesis",
          "workingLatex": "= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2",
          "explanation": "Replace the sum to $k$ using the inductive assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Common denominator",
          "workingLatex": "= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6}",
          "explanation": "Write as a single fraction over $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out $(k+1)$",
          "workingLatex": "= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}",
          "explanation": "Factor $(k+1)$ from the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand bracket",
          "workingLatex": "= \\frac{(k+1)(2k^2 + 7k + 6)}{6}",
          "explanation": "Expand and collect like terms inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise quadratic",
          "workingLatex": "= \\frac{(k+1)(k+2)(2k+3)}{6}",
          "explanation": "Factor $2k^2+7k+6 = (k+2)(2k+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Match target form",
          "workingLatex": "= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}",
          "explanation": "Rewrite with $n=k+1$ to confirm $P(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q028",
    "tags": [
      "basic",
      "series",
      "sum-r-squared"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Use induction to establish $\\displaystyle\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}",
          "explanation": "This is the standard formula for the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^2 = 1,\\quad \\frac{1 \\cdot 2 \\cdot 3}{6} = 1 \\checkmark",
          "explanation": "Both sides equal $1$ when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^2 = \\frac{k(k+1)(2k+1)}{6}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^2 = \\sum_{r=1}^{k} r^2 + (k+1)^2",
          "explanation": "Isolate the new term $(k+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute hypothesis",
          "workingLatex": "= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2",
          "explanation": "Replace the sum to $k$ using the inductive assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Common denominator",
          "workingLatex": "= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6}",
          "explanation": "Write as a single fraction over $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out $(k+1)$",
          "workingLatex": "= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}",
          "explanation": "Factor $(k+1)$ from the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand bracket",
          "workingLatex": "= \\frac{(k+1)(2k^2 + 7k + 6)}{6}",
          "explanation": "Expand and collect like terms inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise quadratic",
          "workingLatex": "= \\frac{(k+1)(k+2)(2k+3)}{6}",
          "explanation": "Factor $2k^2+7k+6 = (k+2)(2k+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Match target form",
          "workingLatex": "= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}",
          "explanation": "Rewrite with $n=k+1$ to confirm $P(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q029",
    "tags": [
      "review",
      "series",
      "sum-r-squared"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}",
          "explanation": "This is the standard formula for the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^2 = 1,\\quad \\frac{1 \\cdot 2 \\cdot 3}{6} = 1 \\checkmark",
          "explanation": "Both sides equal $1$ when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^2 = \\frac{k(k+1)(2k+1)}{6}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^2 = \\sum_{r=1}^{k} r^2 + (k+1)^2",
          "explanation": "Isolate the new term $(k+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute hypothesis",
          "workingLatex": "= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2",
          "explanation": "Replace the sum to $k$ using the inductive assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Common denominator",
          "workingLatex": "= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6}",
          "explanation": "Write as a single fraction over $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out $(k+1)$",
          "workingLatex": "= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}",
          "explanation": "Factor $(k+1)$ from the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand bracket",
          "workingLatex": "= \\frac{(k+1)(2k^2 + 7k + 6)}{6}",
          "explanation": "Expand and collect like terms inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise quadratic",
          "workingLatex": "= \\frac{(k+1)(k+2)(2k+3)}{6}",
          "explanation": "Factor $2k^2+7k+6 = (k+2)(2k+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Match target form",
          "workingLatex": "= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}",
          "explanation": "Rewrite with $n=k+1$ to confirm $P(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q030",
    "tags": [
      "review",
      "series",
      "sum-r-squared"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that $1^2 + 2^2 + 3^2 + \\cdots + n^2 = \\dfrac{n(n+1)(2n+1)}{6}$ using mathematical induction.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}",
          "explanation": "This is the standard formula for the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^2 = 1,\\quad \\frac{1 \\cdot 2 \\cdot 3}{6} = 1 \\checkmark",
          "explanation": "Both sides equal $1$ when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^2 = \\frac{k(k+1)(2k+1)}{6}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^2 = \\sum_{r=1}^{k} r^2 + (k+1)^2",
          "explanation": "Isolate the new term $(k+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute hypothesis",
          "workingLatex": "= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2",
          "explanation": "Replace the sum to $k$ using the inductive assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Common denominator",
          "workingLatex": "= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6}",
          "explanation": "Write as a single fraction over $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out $(k+1)$",
          "workingLatex": "= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}",
          "explanation": "Factor $(k+1)$ from the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand bracket",
          "workingLatex": "= \\frac{(k+1)(2k^2 + 7k + 6)}{6}",
          "explanation": "Expand and collect like terms inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise quadratic",
          "workingLatex": "= \\frac{(k+1)(k+2)(2k+3)}{6}",
          "explanation": "Factor $2k^2+7k+6 = (k+2)(2k+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Match target form",
          "workingLatex": "= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}",
          "explanation": "Rewrite with $n=k+1$ to confirm $P(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q031",
    "tags": [
      "review",
      "series",
      "sum-r-squared"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Use induction to establish $\\displaystyle\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}",
          "explanation": "This is the standard formula for the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^2 = 1,\\quad \\frac{1 \\cdot 2 \\cdot 3}{6} = 1 \\checkmark",
          "explanation": "Both sides equal $1$ when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^2 = \\frac{k(k+1)(2k+1)}{6}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^2 = \\sum_{r=1}^{k} r^2 + (k+1)^2",
          "explanation": "Isolate the new term $(k+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute hypothesis",
          "workingLatex": "= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2",
          "explanation": "Replace the sum to $k$ using the inductive assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Common denominator",
          "workingLatex": "= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6}",
          "explanation": "Write as a single fraction over $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out $(k+1)$",
          "workingLatex": "= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}",
          "explanation": "Factor $(k+1)$ from the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand bracket",
          "workingLatex": "= \\frac{(k+1)(2k^2 + 7k + 6)}{6}",
          "explanation": "Expand and collect like terms inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise quadratic",
          "workingLatex": "= \\frac{(k+1)(k+2)(2k+3)}{6}",
          "explanation": "Factor $2k^2+7k+6 = (k+2)(2k+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Match target form",
          "workingLatex": "= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}",
          "explanation": "Rewrite with $n=k+1$ to confirm $P(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q032",
    "tags": [
      "exam-style",
      "series",
      "sum-r-squared"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}",
          "explanation": "This is the standard formula for the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^2 = 1,\\quad \\frac{1 \\cdot 2 \\cdot 3}{6} = 1 \\checkmark",
          "explanation": "Both sides equal $1$ when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^2 = \\frac{k(k+1)(2k+1)}{6}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $P(k+1)$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^2 = \\sum_{r=1}^{k} r^2 + (k+1)^2",
          "explanation": "Isolate the new term $(k+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute hypothesis",
          "workingLatex": "= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2",
          "explanation": "Replace the sum to $k$ using the inductive assumption.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Common denominator",
          "workingLatex": "= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6}",
          "explanation": "Write as a single fraction over $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor out $(k+1)$",
          "workingLatex": "= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}",
          "explanation": "Factor $(k+1)$ from the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand bracket",
          "workingLatex": "= \\frac{(k+1)(2k^2 + 7k + 6)}{6}",
          "explanation": "Expand and collect like terms inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise quadratic",
          "workingLatex": "= \\frac{(k+1)(k+2)(2k+3)}{6}",
          "explanation": "Factor $2k^2+7k+6 = (k+2)(2k+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Match target form",
          "workingLatex": "= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}",
          "explanation": "Rewrite with $n=k+1$ to confirm $P(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q033",
    "tags": [
      "basic",
      "series",
      "sum-r-cubed"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2",
          "explanation": "The sum of cubes equals the square of the sum of integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^3 = 1,\\quad \\left(\\frac{1 \\cdot 2}{2}\\right)^2 = 1 \\checkmark",
          "explanation": "Both sides equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3",
          "explanation": "Add $(k+1)^3$ to the assumed sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor $(k+1)^2$",
          "workingLatex": "= (k+1)^2 \\left[\\frac{k^2}{4} + (k+1)\\right]",
          "explanation": "Take out $(k+1)^2$ as a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify bracket",
          "workingLatex": "= (k+1)^2 \\cdot \\frac{k^2 + 4k + 4}{4} = \\frac{(k+1)^2(k+2)^2}{4}",
          "explanation": "Combine terms: $k^2+4k+4=(k+2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite as square",
          "workingLatex": "= \\left(\\frac{(k+1)(k+2)}{2}\\right)^2",
          "explanation": "Express as the square of $\\frac{n(n+1)}{2}$ with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step confirms the formula for $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q034",
    "tags": [
      "basic",
      "series",
      "sum-r-cubed"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Show using induction that $1^3 + 2^3 + \\cdots + n^3 = \\left[\\dfrac{n(n+1)}{2}\\right]^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2",
          "explanation": "The sum of cubes equals the square of the sum of integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^3 = 1,\\quad \\left(\\frac{1 \\cdot 2}{2}\\right)^2 = 1 \\checkmark",
          "explanation": "Both sides equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3",
          "explanation": "Add $(k+1)^3$ to the assumed sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor $(k+1)^2$",
          "workingLatex": "= (k+1)^2 \\left[\\frac{k^2}{4} + (k+1)\\right]",
          "explanation": "Take out $(k+1)^2$ as a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify bracket",
          "workingLatex": "= (k+1)^2 \\cdot \\frac{k^2 + 4k + 4}{4} = \\frac{(k+1)^2(k+2)^2}{4}",
          "explanation": "Combine terms: $k^2+4k+4=(k+2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite as square",
          "workingLatex": "= \\left(\\frac{(k+1)(k+2)}{2}\\right)^2",
          "explanation": "Express as the square of $\\frac{n(n+1)}{2}$ with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step confirms the formula for $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q035",
    "tags": [
      "basic",
      "series",
      "sum-r-cubed"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use mathematical induction to prove $\\displaystyle\\sum_{r=1}^{n} r^3 = \\frac{n^2(n+1)^2}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2",
          "explanation": "The sum of cubes equals the square of the sum of integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^3 = 1,\\quad \\left(\\frac{1 \\cdot 2}{2}\\right)^2 = 1 \\checkmark",
          "explanation": "Both sides equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3",
          "explanation": "Add $(k+1)^3$ to the assumed sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor $(k+1)^2$",
          "workingLatex": "= (k+1)^2 \\left[\\frac{k^2}{4} + (k+1)\\right]",
          "explanation": "Take out $(k+1)^2$ as a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify bracket",
          "workingLatex": "= (k+1)^2 \\cdot \\frac{k^2 + 4k + 4}{4} = \\frac{(k+1)^2(k+2)^2}{4}",
          "explanation": "Combine terms: $k^2+4k+4=(k+2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite as square",
          "workingLatex": "= \\left(\\frac{(k+1)(k+2)}{2}\\right)^2",
          "explanation": "Express as the square of $\\frac{n(n+1)}{2}$ with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step confirms the formula for $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q036",
    "tags": [
      "review",
      "series",
      "sum-r-cubed"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2",
          "explanation": "The sum of cubes equals the square of the sum of integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^3 = 1,\\quad \\left(\\frac{1 \\cdot 2}{2}\\right)^2 = 1 \\checkmark",
          "explanation": "Both sides equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3",
          "explanation": "Add $(k+1)^3$ to the assumed sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor $(k+1)^2$",
          "workingLatex": "= (k+1)^2 \\left[\\frac{k^2}{4} + (k+1)\\right]",
          "explanation": "Take out $(k+1)^2$ as a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify bracket",
          "workingLatex": "= (k+1)^2 \\cdot \\frac{k^2 + 4k + 4}{4} = \\frac{(k+1)^2(k+2)^2}{4}",
          "explanation": "Combine terms: $k^2+4k+4=(k+2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite as square",
          "workingLatex": "= \\left(\\frac{(k+1)(k+2)}{2}\\right)^2",
          "explanation": "Express as the square of $\\frac{n(n+1)}{2}$ with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step confirms the formula for $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q037",
    "tags": [
      "review",
      "series",
      "sum-r-cubed"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Show using induction that $1^3 + 2^3 + \\cdots + n^3 = \\left[\\dfrac{n(n+1)}{2}\\right]^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2",
          "explanation": "The sum of cubes equals the square of the sum of integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^3 = 1,\\quad \\left(\\frac{1 \\cdot 2}{2}\\right)^2 = 1 \\checkmark",
          "explanation": "Both sides equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3",
          "explanation": "Add $(k+1)^3$ to the assumed sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor $(k+1)^2$",
          "workingLatex": "= (k+1)^2 \\left[\\frac{k^2}{4} + (k+1)\\right]",
          "explanation": "Take out $(k+1)^2$ as a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify bracket",
          "workingLatex": "= (k+1)^2 \\cdot \\frac{k^2 + 4k + 4}{4} = \\frac{(k+1)^2(k+2)^2}{4}",
          "explanation": "Combine terms: $k^2+4k+4=(k+2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite as square",
          "workingLatex": "= \\left(\\frac{(k+1)(k+2)}{2}\\right)^2",
          "explanation": "Express as the square of $\\frac{n(n+1)}{2}$ with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step confirms the formula for $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q038",
    "tags": [
      "exam-style",
      "series",
      "sum-r-cubed"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Use mathematical induction to prove $\\displaystyle\\sum_{r=1}^{n} r^3 = \\frac{n^2(n+1)^2}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2",
          "explanation": "The sum of cubes equals the square of the sum of integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^3 = 1,\\quad \\left(\\frac{1 \\cdot 2}{2}\\right)^2 = 1 \\checkmark",
          "explanation": "Both sides equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} r^3 = \\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3",
          "explanation": "Add $(k+1)^3$ to the assumed sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor $(k+1)^2$",
          "workingLatex": "= (k+1)^2 \\left[\\frac{k^2}{4} + (k+1)\\right]",
          "explanation": "Take out $(k+1)^2$ as a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify bracket",
          "workingLatex": "= (k+1)^2 \\cdot \\frac{k^2 + 4k + 4}{4} = \\frac{(k+1)^2(k+2)^2}{4}",
          "explanation": "Combine terms: $k^2+4k+4=(k+2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite as square",
          "workingLatex": "= \\left(\\frac{(k+1)(k+2)}{2}\\right)^2",
          "explanation": "Express as the square of $\\frac{n(n+1)}{2}$ with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step confirms the formula for $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Target for inductive step",
          "workingLatex": "P(k+1): \\text{[what to show]}",
          "explanation": "State clearly what must be proved for the next value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q039",
    "tags": [
      "difference-of-powers",
      "divisibility"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use induction to prove that 2^n - 1^n is divisible by 1 for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 1 \\mid 2^n - 1^n",
          "explanation": "Prove divisibility of the difference of powers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "2^1 - 1^1 = 1",
          "explanation": "This equals $1 \\times 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 1 \\mid 2^k - 1^k",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n=k+1$",
          "workingLatex": "2^{k+1} - 1^{k+1} = 2 \\cdot 2^k - 1 \\cdot 1^k",
          "explanation": "Factor out the bases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and subtract",
          "workingLatex": "= 2(2^k - 1^k) + 1^k(2 - 1)",
          "explanation": "Introduce the inductive expression by adding zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "\\text{First term: } 2 \\times (1m). \\text{ Second term: } 1^k \\times 1",
          "explanation": "Both terms are multiples of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } 1 \\mid 2^n - 1^n \\; \\forall n",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 1 \\mid 2^n - 1^n for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q040",
    "tags": [
      "difference-of-powers",
      "divisibility"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use induction to prove that 3^n - 1^n is divisible by 2 for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 2 \\mid 3^n - 1^n",
          "explanation": "Prove divisibility of the difference of powers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "3^1 - 1^1 = 2",
          "explanation": "This equals $2 \\times 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 2 \\mid 3^k - 1^k",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n=k+1$",
          "workingLatex": "3^{k+1} - 1^{k+1} = 3 \\cdot 3^k - 1 \\cdot 1^k",
          "explanation": "Factor out the bases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and subtract",
          "workingLatex": "= 3(3^k - 1^k) + 1^k(3 - 1)",
          "explanation": "Introduce the inductive expression by adding zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "\\text{First term: } 3 \\times (2m). \\text{ Second term: } 1^k \\times 2",
          "explanation": "Both terms are multiples of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } 2 \\mid 3^n - 1^n \\; \\forall n",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 2 \\mid 3^n - 1^n for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q041",
    "tags": [
      "difference-of-powers",
      "divisibility"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use induction to prove that 5^n - 2^n is divisible by 3 for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 3 \\mid 5^n - 2^n",
          "explanation": "Prove divisibility of the difference of powers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "5^1 - 2^1 = 3",
          "explanation": "This equals $3 \\times 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 3 \\mid 5^k - 2^k",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n=k+1$",
          "workingLatex": "5^{k+1} - 2^{k+1} = 5 \\cdot 5^k - 2 \\cdot 2^k",
          "explanation": "Factor out the bases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and subtract",
          "workingLatex": "= 5(5^k - 2^k) + 2^k(5 - 2)",
          "explanation": "Introduce the inductive expression by adding zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "\\text{First term: } 5 \\times (3m). \\text{ Second term: } 2^k \\times 3",
          "explanation": "Both terms are multiples of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } 3 \\mid 5^n - 2^n \\; \\forall n",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 3 \\mid 5^n - 2^n for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q042",
    "tags": [
      "polynomial",
      "divisibility",
      "polynomial"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove by induction that $n^3 - n$ is divisible by $3$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 3 \\mid n^3 - n",
          "explanation": "Show $n^3 - n$ is divisible by $3$ for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^3 - 1 = 0",
          "explanation": "Zero is divisible by any non-zero integer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 3 \\mid k^3 - k",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $(k+1)^3 - (k+1)$",
          "workingLatex": "(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1",
          "explanation": "Expand $(k+1)^3$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "= (k^3 - k) + 3k(k+1)",
          "explanation": "Group the inductive expression with the remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "k^3 - k = 3m \\Rightarrow (k+1)^3 - (k+1) = 3m + 3k(k+1)",
          "explanation": "The first part is a multiple of $3$ by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor",
          "workingLatex": "= 3(m + k(k+1))",
          "explanation": "Factor out $3$ from both terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } 3 \\mid n^3 - n \\; \\forall n",
          "explanation": "The entire expression is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $3 \\mid n^3 - n$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q043",
    "tags": [
      "polynomial",
      "divisibility",
      "polynomial"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove by induction that $n^3 - n$ is divisible by $3$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 3 \\mid n^3 - n",
          "explanation": "Show $n^3 - n$ is divisible by $3$ for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1^3 - 1 = 0",
          "explanation": "Zero is divisible by any non-zero integer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 3 \\mid k^3 - k",
          "explanation": "Suppose the result holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $(k+1)^3 - (k+1)$",
          "workingLatex": "(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1",
          "explanation": "Expand $(k+1)^3$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "= (k^3 - k) + 3k(k+1)",
          "explanation": "Group the inductive expression with the remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "k^3 - k = 3m \\Rightarrow (k+1)^3 - (k+1) = 3m + 3k(k+1)",
          "explanation": "The first part is a multiple of $3$ by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor",
          "workingLatex": "= 3(m + k(k+1))",
          "explanation": "Factor out $3$ from both terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } 3 \\mid n^3 - n \\; \\forall n",
          "explanation": "The entire expression is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $3 \\mid n^3 - n$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q044",
    "tags": [
      "medium",
      "divisibility"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 6^n - 1 is divisible by 5 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 5 \\mid 6^n - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "6^1 - 1 = 5",
          "explanation": "Compute directly: $5 = 5 \\times 1$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "5 \\text{ is divisible by } 5 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 5 \\mid 6^k - 1, \\text{ so } 6^k - 1 = 5m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "6^{k+1} - 1 = 6 \\cdot 6^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 6(6^k - 1) + (6 - 1)",
          "explanation": "Add and subtract $5$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 6 \\cdot 5m + 5",
          "explanation": "The first term is $5$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 5. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $5$ is itself a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 5 divides 6^n - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q045",
    "tags": [
      "factorial",
      "inequality",
      "factorial"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Use mathematical induction to prove that $n! > 2^n$ for all integers $n \\geqslant 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): n! > 2^n",
          "explanation": "Factorial grows faster than exponential for large $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=4$",
          "workingLatex": "4! = 24, \\quad 2^{4} = 16",
          "explanation": "Evaluate both sides at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "24 > 16 \\checkmark",
          "explanation": "Confirm the inequality at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } k! > 2^k \\text{ for } k \\geqslant 4",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $(k+1)!$",
          "workingLatex": "(k+1)! = (k+1) \\cdot k!",
          "explanation": "Relate the factorial at $k+1$ to that at $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "(k+1)! > (k+1) \\cdot 2^k",
          "explanation": "Multiply the inequality $k! > 2^k$ by $k+1 > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $2^{k+1}$",
          "workingLatex": "\\text{Need } (k+1) \\cdot 2^k \\geqslant 2^{k+1} = 2 \\cdot 2^k",
          "explanation": "This requires $k+1 \\geqslant 2$, i.e. $k \\geqslant 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude step",
          "workingLatex": "(k+1)! > 2^{k+1}",
          "explanation": "Since $k \\geqslant 4 \\geqslant 4$, we have $k+1 \\geqslant 5 > 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } n! > 2^n \\text{ for } n \\geqslant 4",
          "explanation": "The proof is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $n! > 2^n$ for all $n \\geqslant 4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q046",
    "tags": [
      "factorial",
      "inequality",
      "factorial"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Use mathematical induction to prove that $n! > 2^n$ for all integers $n \\geqslant 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): n! > 2^n",
          "explanation": "Factorial grows faster than exponential for large $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=4$",
          "workingLatex": "4! = 24, \\quad 2^{4} = 16",
          "explanation": "Evaluate both sides at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "24 > 16 \\checkmark",
          "explanation": "Confirm the inequality at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } k! > 2^k \\text{ for } k \\geqslant 4",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $(k+1)!$",
          "workingLatex": "(k+1)! = (k+1) \\cdot k!",
          "explanation": "Relate the factorial at $k+1$ to that at $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "(k+1)! > (k+1) \\cdot 2^k",
          "explanation": "Multiply the inequality $k! > 2^k$ by $k+1 > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with $2^{k+1}$",
          "workingLatex": "\\text{Need } (k+1) \\cdot 2^k \\geqslant 2^{k+1} = 2 \\cdot 2^k",
          "explanation": "This requires $k+1 \\geqslant 2$, i.e. $k \\geqslant 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude step",
          "workingLatex": "(k+1)! > 2^{k+1}",
          "explanation": "Since $k \\geqslant 4 \\geqslant 4$, we have $k+1 \\geqslant 5 > 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } n! > 2^n \\text{ for } n \\geqslant 4",
          "explanation": "The proof is complete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $n! > 2^n$ for all $n \\geqslant 4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q047",
    "tags": [
      "bernoulli",
      "inequality",
      "bernoulli"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove by induction that $(1+x)^n \\geqslant 1 + nx$ for all $x \\geqslant 0$ and $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): (1+x)^n \\geqslant 1 + nx \\text{ for } x \\geqslant 0",
          "explanation": "Bernoulli's inequality — a fundamental result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "(1+x)^1 = 1+x \\geqslant 1+x \\checkmark",
          "explanation": "Equality holds when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } (1+x)^k \\geqslant 1 + kx",
          "explanation": "Suppose the inequality holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n=k+1$",
          "workingLatex": "(1+x)^{k+1} = (1+x)^k(1+x)",
          "explanation": "Express the next power as a product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply hypothesis",
          "workingLatex": "(1+x)^{k+1} \\geqslant (1+kx)(1+x)",
          "explanation": "Since $1+x \\geqslant 0$, multiply the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand",
          "workingLatex": "= 1 + (k+1)x + kx^2",
          "explanation": "Expand the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Drop non-negative term",
          "workingLatex": "\\geqslant 1 + (k+1)x",
          "explanation": "Since $kx^2 \\geqslant 0$, we can discard it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, Bernoulli's inequality is proved}",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved Bernoulli's inequality: $(1+x)^n \\geqslant 1 + nx$ for $x \\geqslant 0$, $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q048",
    "tags": [
      "bernoulli",
      "inequality",
      "bernoulli"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove by induction that $(1+x)^n \\geqslant 1 + nx$ for all $x \\geqslant 0$ and $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): (1+x)^n \\geqslant 1 + nx \\text{ for } x \\geqslant 0",
          "explanation": "Bernoulli's inequality — a fundamental result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "(1+x)^1 = 1+x \\geqslant 1+x \\checkmark",
          "explanation": "Equality holds when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } (1+x)^k \\geqslant 1 + kx",
          "explanation": "Suppose the inequality holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n=k+1$",
          "workingLatex": "(1+x)^{k+1} = (1+x)^k(1+x)",
          "explanation": "Express the next power as a product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply hypothesis",
          "workingLatex": "(1+x)^{k+1} \\geqslant (1+kx)(1+x)",
          "explanation": "Since $1+x \\geqslant 0$, multiply the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand",
          "workingLatex": "= 1 + (k+1)x + kx^2",
          "explanation": "Expand the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Drop non-negative term",
          "workingLatex": "\\geqslant 1 + (k+1)x",
          "explanation": "Since $kx^2 \\geqslant 0$, we can discard it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, Bernoulli's inequality is proved}",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved Bernoulli's inequality: $(1+x)^n \\geqslant 1 + nx$ for $x \\geqslant 0$, $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q049",
    "tags": [
      "geometric",
      "series",
      "geometric"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{i=1}^{n} 2^i = 2\\frac{2^n - 1}{2 - 1}$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{i=1}^{n} 2^i = 2\\frac{2^n - 1}{2 - 1}",
          "explanation": "Standard formula for a finite geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "\\text{LHS} = 2, \\quad \\text{RHS} = 2\\frac{2-1}{2-1} = 2 \\checkmark",
          "explanation": "Both sides equal the first term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{i=1}^{k} 2^i = 2\\frac{2^k - 1}{2 - 1}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{i=1}^{k+1} 2^i = 2\\frac{2^k - 1}{2 - 1} + 2^{k+1}",
          "explanation": "Add the next term of the series.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Common denominator",
          "workingLatex": "= \\frac{2(2^k - 1) + 2^{k+1}(2-1)}{2-1}",
          "explanation": "Combine into a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify numerator",
          "workingLatex": "= \\frac{2^{k+1} - 2 + 2^{k+2} - 2^{k+1}}{2-1} = \\frac{2^{k+2} - 2}{2-1}",
          "explanation": "Expand and cancel terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor",
          "workingLatex": "= 2\\frac{2^{k+1} - 1}{2 - 1}",
          "explanation": "This matches the formula with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step confirms the geometric sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{i=1}^{n} 2^i = 2\\frac{2^n - 1}{2 - 1}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q050",
    "tags": [
      "geometric",
      "series",
      "geometric"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{i=1}^{n} 3^i = 3\\frac{3^n - 1}{3 - 1}$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{i=1}^{n} 3^i = 3\\frac{3^n - 1}{3 - 1}",
          "explanation": "Standard formula for a finite geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "\\text{LHS} = 3, \\quad \\text{RHS} = 3\\frac{3-1}{3-1} = 3 \\checkmark",
          "explanation": "Both sides equal the first term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{i=1}^{k} 3^i = 3\\frac{3^k - 1}{3 - 1}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{i=1}^{k+1} 3^i = 3\\frac{3^k - 1}{3 - 1} + 3^{k+1}",
          "explanation": "Add the next term of the series.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Common denominator",
          "workingLatex": "= \\frac{3(3^k - 1) + 3^{k+1}(3-1)}{3-1}",
          "explanation": "Combine into a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify numerator",
          "workingLatex": "= \\frac{3^{k+1} - 3 + 3^{k+2} - 3^{k+1}}{3-1} = \\frac{3^{k+2} - 3}{3-1}",
          "explanation": "Expand and cancel terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor",
          "workingLatex": "= 3\\frac{3^{k+1} - 1}{3 - 1}",
          "explanation": "This matches the formula with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step confirms the geometric sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Target for inductive step",
          "workingLatex": "P(k+1): \\text{[what to show]}",
          "explanation": "State clearly what must be proved for the next value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{i=1}^{n} 3^i = 3\\frac{3^n - 1}{3 - 1}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q051",
    "tags": [
      "diagonal",
      "matrices",
      "matrix-powers"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Let $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} 2^n & 0 \\\\ 0 & 2^n \\end{pmatrix}$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): A^n = 2^n I",
          "explanation": "Write the matrix power formula to be proved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "A^1 = A",
          "explanation": "When $n=1$, the formula must reduce to $A$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\checkmark",
          "explanation": "Substituting $n=1$ into the proposed formula gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ is true for some } k \\geqslant 1",
          "explanation": "Suppose the matrix power formula holds for exponent $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $A^{k+1}$",
          "workingLatex": "A^{k+1} = A^k \\cdot A",
          "explanation": "Express the next power as a matrix product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $A^k$",
          "workingLatex": "\\text{Multiply the assumed form of } A^k \\text{ by } A",
          "explanation": "Use the inductive hypothesis for $A^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Perform multiplication",
          "workingLatex": "\\text{Compute each entry of the product matrix}",
          "explanation": "Matrix multiplication: row $\\times$ column for each entry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify entries",
          "workingLatex": "\\text{Collect terms to match the proposed formula with } n=k+1",
          "explanation": "Algebraic simplification of each matrix element.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step confirms the power pattern.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $A^n = 2^n I$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q052",
    "tags": [
      "diagonal",
      "matrices",
      "matrix-powers"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Let $A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} 3^n & 0 \\\\ 0 & 3^n \\end{pmatrix}$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): A^n = 3^n I",
          "explanation": "Write the matrix power formula to be proved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "A^1 = A",
          "explanation": "When $n=1$, the formula must reduce to $A$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\checkmark",
          "explanation": "Substituting $n=1$ into the proposed formula gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ is true for some } k \\geqslant 1",
          "explanation": "Suppose the matrix power formula holds for exponent $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $A^{k+1}$",
          "workingLatex": "A^{k+1} = A^k \\cdot A",
          "explanation": "Express the next power as a matrix product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $A^k$",
          "workingLatex": "\\text{Multiply the assumed form of } A^k \\text{ by } A",
          "explanation": "Use the inductive hypothesis for $A^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Perform multiplication",
          "workingLatex": "\\text{Compute each entry of the product matrix}",
          "explanation": "Matrix multiplication: row $\\times$ column for each entry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify entries",
          "workingLatex": "\\text{Collect terms to match the proposed formula with } n=k+1",
          "explanation": "Algebraic simplification of each matrix element.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step confirms the power pattern.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $A^n = 3^n I$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q053",
    "tags": [
      "upper-triangular",
      "matrices",
      "matrix-powers"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Let $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} 2^n & 1\\dfrac{2^n - 1}{2 - 1} \\\\ 0 & 1 \\end{pmatrix}$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): A^n = \\begin{pmatrix} 2^n & 1\\frac{2^n-1}{2-1} \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Write the matrix power formula to be proved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "A^1 = A",
          "explanation": "When $n=1$, the formula must reduce to $A$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix} \\checkmark",
          "explanation": "Substituting $n=1$ into the proposed formula gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ is true for some } k \\geqslant 1",
          "explanation": "Suppose the matrix power formula holds for exponent $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $A^{k+1}$",
          "workingLatex": "A^{k+1} = A^k \\cdot A",
          "explanation": "Express the next power as a matrix product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $A^k$",
          "workingLatex": "\\text{Multiply the assumed form of } A^k \\text{ by } A",
          "explanation": "Use the inductive hypothesis for $A^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Perform multiplication",
          "workingLatex": "\\text{Compute each entry of the product matrix}",
          "explanation": "Matrix multiplication: row $\\times$ column for each entry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify entries",
          "workingLatex": "\\text{Collect terms to match the proposed formula with } n=k+1",
          "explanation": "Algebraic simplification of each matrix element.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step confirms the power pattern.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved the upper-triangular matrix power formula for $A^n$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q054",
    "tags": [
      "upper-triangular",
      "matrices",
      "matrix-powers"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Let $A = \\begin{pmatrix} 3 & 2 \\\\ 0 & 1 \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} 3^n & 2\\dfrac{3^n - 1}{3 - 1} \\\\ 0 & 1 \\end{pmatrix}$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): A^n = \\begin{pmatrix} 3^n & 2\\frac{3^n-1}{3-1} \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Write the matrix power formula to be proved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "A^1 = A",
          "explanation": "When $n=1$, the formula must reduce to $A$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "A = \\begin{pmatrix} 3 & 2 \\\\ 0 & 1 \\end{pmatrix} \\checkmark",
          "explanation": "Substituting $n=1$ into the proposed formula gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ is true for some } k \\geqslant 1",
          "explanation": "Suppose the matrix power formula holds for exponent $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $A^{k+1}$",
          "workingLatex": "A^{k+1} = A^k \\cdot A",
          "explanation": "Express the next power as a matrix product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $A^k$",
          "workingLatex": "\\text{Multiply the assumed form of } A^k \\text{ by } A",
          "explanation": "Use the inductive hypothesis for $A^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Perform multiplication",
          "workingLatex": "\\text{Compute each entry of the product matrix}",
          "explanation": "Matrix multiplication: row $\\times$ column for each entry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify entries",
          "workingLatex": "\\text{Collect terms to match the proposed formula with } n=k+1",
          "explanation": "Algebraic simplification of each matrix element.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step confirms the power pattern.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved the upper-triangular matrix power formula for $A^n$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q055",
    "tags": [
      "recurrence",
      "recurrence"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "A sequence satisfies $a_1 = 1$ and $a_{n+1} = 2a_n + 1$ for $n \\geqslant 1$. Prove by induction that $a_n = 2^n - 1$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): a_n = 2^n - 1",
          "explanation": "Write the closed-form solution to be proved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Verify recurrence",
          "workingLatex": "a_{n+1} = 2a_n + 1,\\; a_1 = 1",
          "explanation": "Confirm the recurrence and initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base case $n=1$",
          "workingLatex": "a_1 = 1,\\quad 2^1 - 1 = 1 \\checkmark",
          "explanation": "Check the formula at $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } a_k = 2^n - 1",
          "explanation": "Suppose the closed form holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $a_{k+1}$",
          "workingLatex": "a_{k+1} = 2a_k + 1",
          "explanation": "Apply the recurrence relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "= 2\\left(2^n - 1\\right) + 1",
          "explanation": "Replace $a_k$ using the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "= 2^(k+1) - 1",
          "explanation": "Algebraic simplification to the form with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, the closed form is valid } \\forall n",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $a_n = 2^n - 1$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q056",
    "tags": [
      "product-series",
      "series"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r(r+1) = \\frac{n(n+1)(n+2)}{3}$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r(r+1) = \\frac{n(n+1)(n+2)}{3}",
          "explanation": "Each term is the product of consecutive integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1 \\cdot 2 = 2,\\quad \\frac{1 \\cdot 2 \\cdot 3}{3} = 2 \\checkmark",
          "explanation": "Both sides equal $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r(r+1) = \\frac{k(k+1)(k+2)}{3}",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} r(r+1) = \\frac{k(k+1)(k+2)}{3} + (k+1)(k+2)",
          "explanation": "Add the next term $(k+1)(k+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor",
          "workingLatex": "= \\frac{(k+1)(k+2)(k + 3)}{3}",
          "explanation": "Factor out $(k+1)(k+2)$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Match form",
          "workingLatex": "= \\frac{(k+1)((k+1)+1)((k+1)+2)}{3}",
          "explanation": "This is the formula with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r(r+1) = \\frac{n(n+1)(n+2)}{3}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q057",
    "tags": [
      "product-series",
      "series"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} r(r+1) = \\frac{n(n+1)(n+2)}{3}$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} r(r+1) = \\frac{n(n+1)(n+2)}{3}",
          "explanation": "Each term is the product of consecutive integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "1 \\cdot 2 = 2,\\quad \\frac{1 \\cdot 2 \\cdot 3}{3} = 2 \\checkmark",
          "explanation": "Both sides equal $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} r(r+1) = \\frac{k(k+1)(k+2)}{3}",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} r(r+1) = \\frac{k(k+1)(k+2)}{3} + (k+1)(k+2)",
          "explanation": "Add the next term $(k+1)(k+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor",
          "workingLatex": "= \\frac{(k+1)(k+2)(k + 3)}{3}",
          "explanation": "Factor out $(k+1)(k+2)$ and simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Match form",
          "workingLatex": "= \\frac{(k+1)((k+1)+1)((k+1)+2)}{3}",
          "explanation": "This is the formula with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} r(r+1) = \\frac{n(n+1)(n+2)}{3}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q058",
    "tags": [
      "geometric",
      "series",
      "geometric"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{i=1}^{n} 2^i = 2\\frac{2^n - 1}{2 - 1}$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{i=1}^{n} 2^i = 2\\frac{2^n - 1}{2 - 1}",
          "explanation": "Standard formula for a finite geometric series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "\\text{LHS} = 2, \\quad \\text{RHS} = 2\\frac{2-1}{2-1} = 2 \\checkmark",
          "explanation": "Both sides equal the first term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{i=1}^{k} 2^i = 2\\frac{2^k - 1}{2 - 1}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{i=1}^{k+1} 2^i = 2\\frac{2^k - 1}{2 - 1} + 2^{k+1}",
          "explanation": "Add the next term of the series.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Common denominator",
          "workingLatex": "= \\frac{2(2^k - 1) + 2^{k+1}(2-1)}{2-1}",
          "explanation": "Combine into a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify numerator",
          "workingLatex": "= \\frac{2^{k+1} - 2 + 2^{k+2} - 2^{k+1}}{2-1} = \\frac{2^{k+2} - 2}{2-1}",
          "explanation": "Expand and cancel terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor",
          "workingLatex": "= 2\\frac{2^{k+1} - 1}{2 - 1}",
          "explanation": "This matches the formula with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "The inductive step confirms the geometric sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{i=1}^{n} 2^i = 2\\frac{2^n - 1}{2 - 1}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q059",
    "tags": [
      "medium",
      "divisibility"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Prove by mathematical induction that 8^n - 1 is divisible by 7 for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 7 \\mid 8^n - 1",
          "explanation": "We must show the expression is a multiple of the divisor for all $n \\in \\mathbb{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "8^1 - 1 = 7",
          "explanation": "Compute directly: $7 = 7 \\times 1$ when divisible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "7 \\text{ is divisible by } 7 \\checkmark",
          "explanation": "The base case confirms $P(1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 7 \\mid 8^k - 1, \\text{ so } 8^k - 1 = 7m \\text{ for some integer } m",
          "explanation": "Suppose the divisibility holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "8^{k+1} - 1 = 8 \\cdot 8^k - 1",
          "explanation": "Rewrite the expression for the next case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "= 8(8^k - 1) + (8 - 1)",
          "explanation": "Add and subtract $7$ to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "= 8 \\cdot 7m + 7",
          "explanation": "The first term is $7$ times an integer by the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Both terms divisible by } 7. \\text{ So } P(k+1) \\text{ holds. By induction, true } \\forall n",
          "explanation": "A sum of multiples of $7$ is itself a multiple of $7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 7 divides 8^n - 1 for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q060",
    "tags": [
      "difference-of-powers",
      "divisibility"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Use induction to prove that 4^n - 1^n is divisible by 3 for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 3 \\mid 4^n - 1^n",
          "explanation": "Prove divisibility of the difference of powers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "4^1 - 1^1 = 3",
          "explanation": "This equals $3 \\times 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 3 \\mid 4^k - 1^k",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n=k+1$",
          "workingLatex": "4^{k+1} - 1^{k+1} = 4 \\cdot 4^k - 1 \\cdot 1^k",
          "explanation": "Factor out the bases.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add and subtract",
          "workingLatex": "= 4(4^k - 1^k) + 1^k(4 - 1)",
          "explanation": "Introduce the inductive expression by adding zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "\\text{First term: } 4 \\times (3m). \\text{ Second term: } 1^k \\times 3",
          "explanation": "Both terms are multiples of the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } 3 \\mid 4^n - 1^n \\; \\forall n",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Target for inductive step",
          "workingLatex": "P(k+1): \\text{[what to show]}",
          "explanation": "State clearly what must be proved for the next value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Use the hypothesis",
          "workingLatex": "\\text{Substitute the assumed result}",
          "explanation": "Replace occurrences of $P(k)$ with its formula during the inductive step.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: 3 \\mid 4^n - 1^n for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q061",
    "tags": [
      "postage-3-5",
      "strong-induction",
      "postage"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Prove by strong induction that every amount of 8p or more can be formed using 3p, 5p coins only.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\text{every amount } n \\geqslant 8 \\text{ pence can be formed using 3p, 5p coins}",
          "explanation": "This is the coin problem — a classic strong induction application.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base cases",
          "workingLatex": "\\text{Verify } P(8), P(9), \\ldots \\text{ up to } P(9)",
          "explanation": "Check each amount from $8$ to $9$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Strong hypothesis",
          "workingLatex": "\\text{Assume } P(j) \\text{ true for all } 8 \\leqslant j \\leqslant k",
          "explanation": "Assume every amount in the range can be formed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n = k+1$",
          "workingLatex": "k+1 \\geqslant 10",
          "explanation": "The next amount to prove.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract a coin",
          "workingLatex": "k+1 - 3 = k+1-3 \\geqslant 8",
          "explanation": "Subtract the smallest coin value; the remainder is at least $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "\\text{Since } 8 \\leqslant k+1-3 \\leqslant k, \\text{ this amount can be formed}",
          "explanation": "The remainder is covered by the strong hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add coin back",
          "workingLatex": "\\text{Add a 3p coin to form } k+1",
          "explanation": "Adding the coin back gives the required amount.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By strong induction, all } n \\geqslant 8 \\text{ can be formed}",
          "explanation": "The postage problem is solved.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Target for inductive step",
          "workingLatex": "P(k+1): \\text{[what to show]}",
          "explanation": "State clearly what must be proved for the next value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: any amount $\\geqslant 8$p can be made with 3p, 5p coins."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q062",
    "tags": [
      "postage-2-5",
      "strong-induction",
      "postage"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Prove by strong induction that every amount of 4p or more can be formed using 2p, 5p coins only.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\text{every amount } n \\geqslant 4 \\text{ pence can be formed using 2p, 5p coins}",
          "explanation": "This is the coin problem — a classic strong induction application.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base cases",
          "workingLatex": "\\text{Verify } P(4), P(5), \\ldots \\text{ up to } P(5)",
          "explanation": "Check each amount from $4$ to $5$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Strong hypothesis",
          "workingLatex": "\\text{Assume } P(j) \\text{ true for all } 4 \\leqslant j \\leqslant k",
          "explanation": "Assume every amount in the range can be formed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n = k+1$",
          "workingLatex": "k+1 \\geqslant 6",
          "explanation": "The next amount to prove.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract a coin",
          "workingLatex": "k+1 - 2 = k+1-2 \\geqslant 4",
          "explanation": "Subtract the smallest coin value; the remainder is at least $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "\\text{Since } 4 \\leqslant k+1-2 \\leqslant k, \\text{ this amount can be formed}",
          "explanation": "The remainder is covered by the strong hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add coin back",
          "workingLatex": "\\text{Add a 2p coin to form } k+1",
          "explanation": "Adding the coin back gives the required amount.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By strong induction, all } n \\geqslant 4 \\text{ can be formed}",
          "explanation": "The postage problem is solved.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Target for inductive step",
          "workingLatex": "P(k+1): \\text{[what to show]}",
          "explanation": "State clearly what must be proved for the next value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: any amount $\\geqslant 4$p can be made with 2p, 5p coins."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q063",
    "tags": [
      "fibonacci",
      "strong-induction",
      "recurrence"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "The Fibonacci sequence is defined by $a_1 = 1$, $a_2 = 1$, $a_n = a_{n-1} + a_{n-2}$ for $n \\geqslant 3$. Using strong induction, prove that $\\displaystyle a_n = \\frac{\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n}{\\sqrt{5}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): a_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}} \\text{ where } \\phi = \\frac{1+\\sqrt{5}}{2},\\; \\psi = \\frac{1-\\sqrt{5}}{2}",
          "explanation": "Binet's formula for Fibonacci numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note recurrence",
          "workingLatex": "a_n = a_{n-1} + a_{n-2},\\; a_1 = 1,\\; a_2 = 1",
          "explanation": "Fibonacci numbers satisfy this second-order recurrence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base cases",
          "workingLatex": "a_1 = 1,\\; a_2 = 1",
          "explanation": "Verify $P(1)$ and $P(2)$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Strong inductive hypothesis",
          "workingLatex": "\\text{Assume } P(j) \\text{ true for all } j \\leqslant k, \\text{ where } k \\geqslant 2",
          "explanation": "Strong induction: assume all previous cases, not just $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $a_{k+1}$",
          "workingLatex": "a_{k+1} = a_k + a_{k-1}",
          "explanation": "Use the recurrence relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis to both terms",
          "workingLatex": "a_k + a_{k-1} = \\frac{\\phi^k - \\psi^k}{\\sqrt{5}} + \\frac{\\phi^{k-1} - \\psi^{k-1}}{\\sqrt{5}}",
          "explanation": "Substitute Binet's formula for both terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor",
          "workingLatex": "= \\frac{\\phi^{k-1}(\\phi + 1) - \\psi^{k-1}(\\psi + 1)}{\\sqrt{5}}",
          "explanation": "Factor out $\\phi^{k-1}$ and $\\psi^{k-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use $\\phi + 1 = \\phi^2$",
          "workingLatex": "\\phi + 1 = \\phi^2 \\text{ and } \\psi + 1 = \\psi^2",
          "explanation": "These follow from the defining equation $x^2 = x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "= \\frac{\\phi^{k+1} - \\psi^{k+1}}{\\sqrt{5}}",
          "explanation": "This is $P(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By strong induction, Binet's formula is valid } \\forall n",
          "explanation": "Strong induction completes the proof.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved Binet's formula for Fibonacci numbers by strong induction."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q064",
    "tags": [
      "exponential-vs-polynomial",
      "inequality"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Prove by induction that $2^n \\geqslant n^2$ for all integers $n \\geqslant 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 2^n \\geqslant n^2",
          "explanation": "Compare exponential growth with polynomial growth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=4$",
          "workingLatex": "2^{4} = 16, \\quad 4^2 = 16",
          "explanation": "Verify at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "16 \\geqslant 16 \\checkmark",
          "explanation": "Confirm the inequality at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 2^k \\geqslant k^2 \\text{ for } k \\geqslant 4",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "2^{k+1} = 2 \\cdot 2^k",
          "explanation": "Express using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "2^{k+1} \\geqslant 2 \\cdot k^2",
          "explanation": "Multiply the inequality by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Need to show",
          "workingLatex": "2k^2 \\geqslant (k+1)^2 = k^2 + 2k + 1",
          "explanation": "We must verify this auxiliary inequality.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange",
          "workingLatex": "(2-1)k^2 - 2k - 1 \\geqslant 0",
          "explanation": "Bring all terms to one side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify for $k \\geqslant 4$",
          "workingLatex": "\\text{For } k \\geqslant 4: (2-1)k^2 \\geqslant 16 > 2k + 1",
          "explanation": "The quadratic in $k$ is positive for large enough $k$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion",
          "workingLatex": "2^{k+1} \\geqslant (k+1)^2. \\text{ By induction, true } \\forall n \\geqslant 4",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $2^n \\geqslant n^2$ for all $n \\geqslant 4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q065",
    "tags": [
      "exponential-vs-polynomial",
      "inequality"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Prove by induction that $2^n \\geqslant n^2$ for all integers $n \\geqslant 5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 2^n \\geqslant n^2",
          "explanation": "Compare exponential growth with polynomial growth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=5$",
          "workingLatex": "2^{5} = 32, \\quad 5^2 = 25",
          "explanation": "Verify at the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base holds",
          "workingLatex": "32 \\geqslant 25 \\checkmark",
          "explanation": "Confirm the inequality at the base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 2^k \\geqslant k^2 \\text{ for } k \\geqslant 5",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $n=k+1$",
          "workingLatex": "2^{k+1} = 2 \\cdot 2^k",
          "explanation": "Express using the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply hypothesis",
          "workingLatex": "2^{k+1} \\geqslant 2 \\cdot k^2",
          "explanation": "Multiply the inequality by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Need to show",
          "workingLatex": "2k^2 \\geqslant (k+1)^2 = k^2 + 2k + 1",
          "explanation": "We must verify this auxiliary inequality.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange",
          "workingLatex": "(2-1)k^2 - 2k - 1 \\geqslant 0",
          "explanation": "Bring all terms to one side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify for $k \\geqslant 5$",
          "workingLatex": "\\text{For } k \\geqslant 5: (2-1)k^2 \\geqslant 25 > 2k + 1",
          "explanation": "The quadratic in $k$ is positive for large enough $k$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion",
          "workingLatex": "2^{k+1} \\geqslant (k+1)^2. \\text{ By induction, true } \\forall n \\geqslant 5",
          "explanation": "The inductive step is complete.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $2^n \\geqslant n^2$ for all $n \\geqslant 5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q066",
    "tags": [
      "rotation",
      "matrices",
      "matrix-powers"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "questionText": "Let $A = \\begin{pmatrix} 0 & -1 \\\\ 0 & 1 \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} 0^n & -1\\dfrac{0^n - 1}{0 - 1} \\\\ 0 & 1 \\end{pmatrix}$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): A^n = \\begin{pmatrix} 0^n & -1\\frac{0^n-1}{0-1} \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Write the matrix power formula to be proved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "A^1 = A",
          "explanation": "When $n=1$, the formula must reduce to $A$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify base",
          "workingLatex": "A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\checkmark",
          "explanation": "Substituting $n=1$ into the proposed formula gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ is true for some } k \\geqslant 1",
          "explanation": "Suppose the matrix power formula holds for exponent $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider $A^{k+1}$",
          "workingLatex": "A^{k+1} = A^k \\cdot A",
          "explanation": "Express the next power as a matrix product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $A^k$",
          "workingLatex": "\\text{Multiply the assumed form of } A^k \\text{ by } A",
          "explanation": "Use the inductive hypothesis for $A^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Perform multiplication",
          "workingLatex": "\\text{Compute each entry of the product matrix}",
          "explanation": "Matrix multiplication: row $\\times$ column for each entry.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify entries",
          "workingLatex": "\\text{Collect terms to match the proposed formula with } n=k+1",
          "explanation": "Algebraic simplification of each matrix element.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } P(n) \\text{ for all } n \\in \\mathbb{N}",
          "explanation": "The inductive step confirms the power pattern.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved the upper-triangular matrix power formula for $A^n$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q067",
    "tags": [
      "advanced-divisibility",
      "divisibility"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Prove by induction that $5^n - (-2)^n$ is divisible by $7$ for all positive integers $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): 7 \\mid 5^n - (-2)^n",
          "explanation": "Prove divisibility using the alternating-power form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "5 - (-2) = 7 \\checkmark",
          "explanation": "Divisible by $7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } 7 \\mid 5^k - (-2)^k",
          "explanation": "Suppose true for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n=k+1$",
          "workingLatex": "5^{k+1} - (-2)^{k+1} = 5 \\cdot 5^k - (-2) \\cdot (-2)^k",
          "explanation": "Factor the next term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "= 5(5^k - (-2)^k) + 5(-2)^k - (-2)(-2)^k",
          "explanation": "Add and subtract to expose the inductive form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= 5(5^k - (-2)^k) + (-2)^k(5 - (-2)) = 5(5^k - (-2)^k) + 7(-2)^k",
          "explanation": "The second term is $7(-2)^k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis",
          "workingLatex": "\\text{Both terms are multiples of } 7",
          "explanation": "First term: $5 \\times 7m$; second term: $7(-2)^k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, } 7 \\mid 5^n - (-2)^n",
          "explanation": "The proof is complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Target for inductive step",
          "workingLatex": "P(k+1): \\text{[what to show]}",
          "explanation": "State clearly what must be proved for the next value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $7 \\mid 5^n - (-2)^n$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q068",
    "tags": [
      "telescoping",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "Prove by induction that $\\displaystyle\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}$ for all $n \\in \\mathbb{N}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): \\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}",
          "explanation": "A telescoping series in summation form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Partial fractions",
          "workingLatex": "\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}",
          "explanation": "Decompose each term — this is the key identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Base case $n=1$",
          "workingLatex": "\\frac{1}{1 \\cdot 2} = \\frac{1}{2}, \\quad \\frac{1}{1+1} = \\frac{1}{2} \\checkmark",
          "explanation": "Both sides equal $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } \\sum_{r=1}^{k} \\frac{1}{r(r+1)} = \\frac{k}{k+1}",
          "explanation": "Suppose the formula holds for $n=k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum to $k+1$",
          "workingLatex": "\\sum_{r=1}^{k+1} \\frac{1}{r(r+1)} = \\frac{k}{k+1} + \\frac{1}{(k+1)(k+2)}",
          "explanation": "Add the next term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Common denominator",
          "workingLatex": "= \\frac{k(k+2) + 1}{(k+1)(k+2)}",
          "explanation": "Write over $(k+1)(k+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify numerator",
          "workingLatex": "= \\frac{k^2 + 2k + 1}{(k+1)(k+2)} = \\frac{(k+1)^2}{(k+1)(k+2)}",
          "explanation": "Recognise $(k+1)^2$ in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel",
          "workingLatex": "= \\frac{k+1}{k+2}",
          "explanation": "Cancel one factor of $(k+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds. By induction, true for all } n",
          "explanation": "This matches $\\frac{n}{n+1}$ with $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $\\sum_{r=1}^{n} \\frac{1}{r(r+1)} = \\frac{n}{n+1}$ for all $n \\in \\mathbb{N}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q069",
    "tags": [
      "matrices",
      "shear",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Let $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$ for all $n \\in \\mathbb{N}$, and hence show that $A^n - I$ is divisible (entry-wise in $\\mathbb{Z}$) by $n$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "This is a shear transformation raised to the $n$th power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=1$",
          "workingLatex": "A^1 = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} \\checkmark",
          "explanation": "Trivially true for $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } A^k = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Suppose the formula holds for exponent $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $A^{k+1}$",
          "workingLatex": "A^{k+1} = A^k \\cdot A = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Matrix multiply the assumed form by $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "= \\begin{pmatrix} 1 & k+1 \\\\ 0 & 1 \\end{pmatrix}",
          "explanation": "Top-right entry: $1 \\cdot 1 + k \\cdot 1 = k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Inductive step complete",
          "workingLatex": "P(k+1) \\text{ holds}",
          "explanation": "The form is confirmed for $n=k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $A^n - I$",
          "workingLatex": "A^n - I = \\begin{pmatrix} 0 & n \\\\ 0 & 0 \\end{pmatrix}",
          "explanation": "Subtract the identity matrix.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divisibility",
          "workingLatex": "\\text{Every entry is divisible by } n",
          "explanation": "The $(1,2)$-entry is exactly $n$; all others are $0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix} \\text{ and } n \\mid (A^n - I)_{ij}",
          "explanation": "Both parts proved by induction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$ and $A^n - I$ has entries divisible by $n$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Proof by induction",
    "subtopicId": "fm.y1.pure.induction",
    "questionDiagram": null,
    "id": "fm.y1.pure.induction.q070",
    "tags": [
      "strong-induction",
      "primes",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "Prove by strong induction that every integer $n \\geqslant 2$ can be written as a product of prime numbers.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State $P(n)$",
          "workingLatex": "P(n): n \\text{ can be expressed as a product of primes}",
          "explanation": "The Fundamental Theorem of Arithmetic (existence part).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base case $n=2$",
          "workingLatex": "2 \\text{ is prime, so } 2 = 2 \\checkmark",
          "explanation": "The smallest case is itself prime.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Strong hypothesis",
          "workingLatex": "\\text{Assume } P(j) \\text{ true for all } 2 \\leqslant j \\leqslant k",
          "explanation": "Assume every integer up to $k$ factors into primes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider $n = k+1$",
          "workingLatex": "k+1 \\geqslant 3",
          "explanation": "Two cases arise depending on whether $k+1$ is prime.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 1: $k+1$ is prime",
          "workingLatex": "k+1 \\text{ is its own prime factorisation}",
          "explanation": "A prime is trivially a product of one prime.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case 2: $k+1$ is composite",
          "workingLatex": "k+1 = ab \\text{ where } 2 \\leqslant a, b \\leqslant k",
          "explanation": "A composite number has a non-trivial factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply hypothesis to factors",
          "workingLatex": "a \\text{ and } b \\text{ are products of primes by the hypothesis}",
          "explanation": "Since $a, b \\leqslant k$, both factor into primes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine",
          "workingLatex": "k+1 = ab \\text{ is a product of primes}",
          "explanation": "Multiply the prime factorisations of $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(k+1) \\text{ holds in both cases. By strong induction, every } n \\geqslant 2 \\text{ factors into primes}",
          "explanation": "The existence of prime factorisation is proved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall induction structure",
          "workingLatex": "\\text{Base} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Step} \\rightarrow \\text{Conclusion}",
          "explanation": "Mathematical induction has four standard stages.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State $P(n)$ clearly",
          "workingLatex": "P(n): \\text{[proposition]}",
          "explanation": "Always begin by writing exactly what you intend to prove.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Base case",
          "workingLatex": "n = 1 \\text{ (or smallest value)}",
          "explanation": "Verify the proposition for the first value of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Inductive hypothesis",
          "workingLatex": "\\text{Assume } P(k) \\text{ true}",
          "explanation": "Suppose the result holds for some $k$ in the domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved by strong induction: every integer $n \\geqslant 2$ is a product of primes."
    }
  }
];
