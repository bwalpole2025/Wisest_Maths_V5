import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.disproof.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "parity"
    ],
    "questionText": "Show, by means of a counterexample, that the following statement is false: ``Every prime number is odd.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{primes } p:\\ p \\text{ is odd}",
          "explanation": "The statement asserts something about *every* prime. To disprove a `for all' claim we only need a single case where it fails.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample} \\Rightarrow \\text{statement false}",
          "explanation": "A universal statement is false as soon as one example breaks it; we do not need to examine every prime.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look at the smallest prime.",
          "workingLatex": "p = 2",
          "explanation": "The number $2$ is prime, since its only positive divisors are $1$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check its parity.",
          "workingLatex": "2 = 2 \\times 1 \\text{ is even}",
          "explanation": "The number $2$ is divisible by $2$, so it is even, not odd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confront the claim.",
          "workingLatex": "2 \\text{ is prime but not odd}",
          "explanation": "Here is a prime that fails the property `is odd', which is exactly what the statement forbids.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "Because $2$ is a prime that is even, the claim `every prime is odd' is disproved by this single counterexample.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$ is prime but even, so it is a counterexample. Hence ``every prime number is odd'' is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "odd numbers"
    ],
    "questionText": "Disprove the statement: ``Every odd number is prime.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{odd } n:\\ n \\text{ is prime}",
          "explanation": "The statement claims all odd numbers are prime; one odd number that is not prime will disprove it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "To refute a `for all' claim we just need a single failing case.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Notice the early cases look convincing.",
          "workingLatex": "3, 5, 7 \\text{ are odd and prime}",
          "explanation": "The first few odd numbers greater than $1$ are prime, which is why the statement seems plausible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the next odd number.",
          "workingLatex": "n = 9",
          "explanation": "We examine $9$, the next odd number after $7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise it.",
          "workingLatex": "9 = 3 \\times 3",
          "explanation": "Since $9$ has $3$ as a divisor, it is composite, not prime.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confront the claim.",
          "workingLatex": "9 \\text{ is odd but not prime}",
          "explanation": "So $9$ is an odd number that fails to be prime — a direct counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "Because $9$ is odd and composite, the claim `every odd number is prime' is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$9$ is odd but $9 = 3 \\times 3$ is composite, so it is a counterexample. Hence ``every odd number is prime'' is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities"
    ],
    "questionText": "Disprove the statement: ``For every positive integer $n$, $n^2 > n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ n^2 > n",
          "explanation": "The statement claims the square always strictly exceeds the number; a single failing $n$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We only need one positive integer for which $n^2>n$ is false.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Notice larger values obey it.",
          "workingLatex": "n=2: 4>2,\\quad n=3: 9>3",
          "explanation": "For $n\\ge2$ the inequality holds, which makes the claim look true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the smallest positive integer.",
          "workingLatex": "n = 1",
          "explanation": "The boundary case $n=1$ is where such inequalities often fail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate both sides.",
          "workingLatex": "n^2 = 1^2 = 1, \\quad n = 1",
          "explanation": "Both $n^2$ and $n$ equal $1$ when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare.",
          "workingLatex": "1 > 1 \\text{ is false}",
          "explanation": "Since $1$ is not strictly greater than $1$, the inequality fails at $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $n=1$ we have $n^2=n$, not $n^2>n$, so the claim is disproved by this counterexample.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $n=1$, $n^2 = 1 = n$, so $n^2 > n$ fails. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "divisibility",
      "parity"
    ],
    "questionText": "Disprove the statement: ``Every multiple of $3$ is odd.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{multiples of } 3:\\ \\text{odd}",
          "explanation": "The statement claims all multiples of $3$ are odd; one even multiple of $3$ refutes it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "A single failing multiple of $3$ is enough to disprove the `for all' claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Notice some multiples are odd.",
          "workingLatex": "3, 9, 15 \\text{ are odd}",
          "explanation": "Several small multiples of $3$ are indeed odd, which is why the claim can seem believable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider another multiple of 3.",
          "workingLatex": "6 = 3 \\times 2",
          "explanation": "The number $6$ is a multiple of $3$ (it equals $3\\times2$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check its parity.",
          "workingLatex": "6 = 2 \\times 3 \\text{ is even}",
          "explanation": "Since $6$ is divisible by $2$, it is even, not odd.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confront the claim.",
          "workingLatex": "6 \\text{ is a multiple of } 3 \\text{ but even}",
          "explanation": "So $6$ is a multiple of $3$ that fails the property `is odd'.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "Because $6$ is an even multiple of $3$, the claim `every multiple of $3$ is odd' is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6$ is a multiple of $3$ but is even, so it is a counterexample. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "consecutive integers",
      "parity"
    ],
    "questionText": "Disprove the statement: ``The sum of any three consecutive integers is even.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n:\\ n+(n+1)+(n+2) \\text{ is even}",
          "explanation": "The statement claims the sum is always even; one set of three consecutive integers with an odd sum disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one starting integer for which the sum is odd.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Try starting at 1.",
          "workingLatex": "1 + 2 + 3",
          "explanation": "We test the three consecutive integers $1,2,3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add them.",
          "workingLatex": "1 + 2 + 3 = 6",
          "explanation": "Their sum is $6$, which is even — so this particular case supports the claim.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Try starting at 2.",
          "workingLatex": "2 + 3 + 4",
          "explanation": "We now test $2,3,4$ to see whether the pattern really always holds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add them.",
          "workingLatex": "2 + 3 + 4 = 9",
          "explanation": "Their sum is $9$ — an odd total, unlike the first case, so the pattern does not always hold.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the parity.",
          "workingLatex": "9 \\text{ is odd}",
          "explanation": "Since $9$ is odd, this set of three consecutive integers has an odd sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The integers $2,3,4$ sum to $9$, which is odd, so the claim `the sum is always even' is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2+3+4 = 9$, which is odd, so the sum of three consecutive integers is not always even. The statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes"
    ],
    "questionText": "Disprove the statement: ``Every number of the form $4n + 1$, where $n$ is a positive integer, is prime.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ 4n+1 \\text{ is prime}",
          "explanation": "The statement claims every such number is prime; one composite value of $4n+1$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We only need a single $n$ for which $4n+1$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the first case.",
          "workingLatex": "n=1: 4(1)+1 = 5 \\text{ (prime)}",
          "explanation": "For $n=1$ the value is $5$, which is prime — consistent with the claim so far.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move to the next case.",
          "workingLatex": "n = 2: 4(2)+1 = 9",
          "explanation": "For $n=2$ the value is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise it.",
          "workingLatex": "9 = 3 \\times 3",
          "explanation": "Since $9=3\\times3$, it is composite, not prime.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confront the claim.",
          "workingLatex": "4(2)+1 = 9 \\text{ is not prime}",
          "explanation": "So the value at $n=2$ has the form $4n+1$ but is composite.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "Because $9=4(2)+1$ is composite, the claim `every number of the form $4n+1$ is prime' is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=2$, $4n+1 = 9 = 3 \\times 3$ is not prime. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "squares",
      "algebra"
    ],
    "questionText": "Disprove the statement: ``If $a^2 = b^2$ then $a = b$,'' where $a$ and $b$ are real numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all reals.",
          "workingLatex": "\\forall\\ a,b:\\ a^2 = b^2 \\Rightarrow a = b",
          "explanation": "The statement claims equal squares force equal numbers; one pair with equal squares but unequal values disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair $(a,b)$ satisfying the hypothesis $a^2=b^2$ but failing the conclusion $a=b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall that squaring hides sign.",
          "workingLatex": "(-x)^2 = x^2",
          "explanation": "A number and its negative have the same square, which is the source of the flaw.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a specific pair.",
          "workingLatex": "a = 3, \\quad b = -3",
          "explanation": "We pick $a=3$ and $b=-3$, which are negatives of each other.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the hypothesis.",
          "workingLatex": "a^2 = 9, \\quad b^2 = (-3)^2 = 9",
          "explanation": "Both squares equal $9$, so the condition $a^2=b^2$ is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the conclusion.",
          "workingLatex": "a = 3 \\neq -3 = b",
          "explanation": "Yet $a$ and $b$ are not equal, so the conclusion fails.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The pair $a=3,\\ b=-3$ has $a^2=b^2$ but $a\\neq b$, so the claim is disproved. (The correct statement is $a=\\pm b$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=3,\\ b=-3$: then $a^2 = b^2 = 9$ but $a \\neq b$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "divisibility"
    ],
    "questionText": "Disprove the statement: ``For all positive integers $a$, $b$ and $c$, if $a$ divides $bc$ then $a$ divides $b$ or $a$ divides $c$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b,c:\\ a \\mid bc \\Rightarrow a\\mid b \\text{ or } a\\mid c",
          "explanation": "This is a `for all' claim about divisibility. A single triple satisfying the hypothesis but failing the conclusion disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We look for $a,b,c$ with $a\\mid bc$ but $a$ dividing neither $b$ nor $c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note why the claim can seem true.",
          "workingLatex": "\\text{it holds when } a \\text{ is prime}",
          "explanation": "For prime $a$ the statement is actually true (Euclid's lemma), so a counterexample must use a composite $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a composite a and split its factors.",
          "workingLatex": "a = 6, \\quad b = 4, \\quad c = 9",
          "explanation": "We take $a=6=2\\times3$ and split its prime factors between $b=4$ (holding the $2$) and $c=9$ (holding the $3$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the hypothesis.",
          "workingLatex": "bc = 4 \\times 9 = 36 = 6 \\times 6, \\text{ so } 6 \\mid 36",
          "explanation": "The product $bc=36$ is divisible by $6$, so the hypothesis $a\\mid bc$ holds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check divisibility of b.",
          "workingLatex": "4 = 6 \\times 0 + 4, \\text{ so } 6 \\nmid 4",
          "explanation": "Dividing $4$ by $6$ leaves remainder $4$, so $6$ does not divide $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check divisibility of c.",
          "workingLatex": "9 = 6 \\times 1 + 3, \\text{ so } 6 \\nmid 9",
          "explanation": "Dividing $9$ by $6$ leaves remainder $3$, so $6$ does not divide $c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confront the claim.",
          "workingLatex": "6 \\mid 36 \\text{ yet } 6 \\nmid 4 \\text{ and } 6 \\nmid 9",
          "explanation": "The hypothesis holds but the conclusion fails on both counts.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $a=6,\\ b=4,\\ c=9$ we have $a\\mid bc$ but $a$ divides neither $b$ nor $c$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=6,\\ b=4,\\ c=9$: then $bc=36$ and $6\\mid36$, but $6\\nmid4$ and $6\\nmid9$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "irrational numbers"
    ],
    "questionText": "Disprove the statement: ``The product of two irrational numbers is always irrational.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{irrational } x, y:\\ xy \\text{ is irrational}",
          "explanation": "The claim is about *every* pair of irrationals; one pair whose product is rational disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair of irrational numbers whose product is rational.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall a standard irrational number.",
          "workingLatex": "\\sqrt{2} \\text{ is irrational}",
          "explanation": "It is a well-known fact that $\\sqrt2$ cannot be written as a fraction, so it is irrational.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply it by itself.",
          "workingLatex": "x = \\sqrt{2}, \\quad y = \\sqrt{2}",
          "explanation": "We choose both numbers to be $\\sqrt2$; each is irrational, satisfying the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the product.",
          "workingLatex": "\\sqrt{2} \\times \\sqrt{2} = 2",
          "explanation": "By the definition of a square root, $\\sqrt2\\times\\sqrt2 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the product.",
          "workingLatex": "2 \\in \\mathbb{Q} \\text{ (rational)}",
          "explanation": "The result $2$ is an integer, hence rational, not irrational.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confront the claim.",
          "workingLatex": "\\text{irrational} \\times \\text{irrational} = \\text{rational}",
          "explanation": "So the product of two irrational numbers came out rational, contradicting the claim.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Acknowledge the general behaviour.",
          "workingLatex": "\\text{the product is only \\emph{sometimes} irrational}",
          "explanation": "The example shows the product *can* be rational, so the word `always' is wrong.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $x=y=\\sqrt2$, both irrational, the product is $2$, which is rational, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $x=y=\\sqrt2$, both irrational. Then $xy = \\sqrt2 \\times \\sqrt2 = 2$, which is rational. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $x$, $x^2 \\ge x$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ x \\in \\mathbb{R}:\\ x^2 \\ge x",
          "explanation": "The claim covers *all* real $x$, not just integers; one real value where $x^2<x$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single real number for which $x^2\\ge x$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Notice integers obey it.",
          "workingLatex": "x=2: 4\\ge2,\\quad x=0: 0\\ge0",
          "explanation": "For integers the inequality holds, so the flaw must lie among non-integer values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Focus on the interval between 0 and 1.",
          "workingLatex": "0 < x < 1 \\Rightarrow x^2 < x",
          "explanation": "Squaring a proper fraction makes it smaller, so this is where the claim should break.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose a specific value.",
          "workingLatex": "x = \\tfrac{1}{2}",
          "explanation": "We test $x=\\tfrac12$, a real number strictly between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the square.",
          "workingLatex": "x^2 = \\left(\\tfrac{1}{2}\\right)^2 = \\tfrac{1}{4}",
          "explanation": "Squaring $\\tfrac12$ gives $\\tfrac14$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two sides.",
          "workingLatex": "\\tfrac{1}{4} \\ge \\tfrac{1}{2} \\text{ is false}",
          "explanation": "Since $\\tfrac14<\\tfrac12$, the inequality $x^2\\ge x$ fails at $x=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the correct restricted statement.",
          "workingLatex": "x^2 \\ge x \\text{ holds only for } x \\le 0 \\text{ or } x \\ge 1",
          "explanation": "The inequality is actually true outside the open interval $(0,1)$; it is the unrestricted `for all real $x$' version that fails.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $x=\\tfrac12$ we have $x^2=\\tfrac14<\\tfrac12=x$, so the claim is disproved by this counterexample.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $x=\\tfrac12$: then $x^2 = \\tfrac14 < \\tfrac12 = x$, so $x^2 \\ge x$ fails. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities",
      "squares"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $x$ and $y$, if $x > y$ then $x^2 > y^2$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all reals.",
          "workingLatex": "\\forall\\ x,y:\\ x > y \\Rightarrow x^2 > y^2",
          "explanation": "The claim asserts the implication for every pair; one pair with $x>y$ but $x^2\\le y^2$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We seek $x>y$ for which the squares do not preserve the order.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note where squaring misbehaves.",
          "workingLatex": "\\text{squaring ignores sign and magnitude order}",
          "explanation": "A larger number can have a smaller square if it is closer to zero than a negative number, so negatives are the place to look.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a specific pair.",
          "workingLatex": "x = 1, \\quad y = -3",
          "explanation": "Here $x=1$ is greater than $y=-3$, so the hypothesis $x>y$ holds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the hypothesis.",
          "workingLatex": "1 > -3 \\text{ is true}",
          "explanation": "Indeed $1$ lies to the right of $-3$ on the number line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the squares.",
          "workingLatex": "x^2 = 1, \\quad y^2 = (-3)^2 = 9",
          "explanation": "Squaring gives $x^2=1$ and $y^2=9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the squares.",
          "workingLatex": "x^2 = 1 > 9 = y^2 \\text{ is false}",
          "explanation": "Since $1<9$, we have $x^2<y^2$, so the conclusion $x^2>y^2$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the underlying reason.",
          "workingLatex": "|y| = 3 > 1 = |x|",
          "explanation": "Squaring compares distance from zero, and $y=-3$ is further from zero than $x=1$, so its square is larger despite $y<x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $x=1>y=-3$ but $x^2=1<9=y^2$, the implication is disproved. (It holds only when both $x$ and $y$ are non-negative.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $x=1,\\ y=-3$: then $x>y$ but $x^2 = 1 < 9 = y^2$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "sum of two squares"
    ],
    "questionText": "Disprove the statement: ``Every positive integer can be written as the sum of two perfect squares.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ n = a^2 + b^2 \\text{ for some integers } a,b \\ge 0",
          "explanation": "The claim is that *every* positive integer is a sum of two squares; one integer that is not disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single positive integer that cannot be written as $a^2+b^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the small squares available.",
          "workingLatex": "0, 1, 4, 9, 16, \\dots",
          "explanation": "The perfect squares we may add are $0^2,1^2,2^2,\\dots = 0,1,4,9,\\dots$",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm small cases do work.",
          "workingLatex": "1 = 1+0,\\ \\ 2 = 1+1,\\ \\ 4 = 4+0,\\ \\ 5 = 4+1",
          "explanation": "Several small integers are indeed sums of two squares, which makes the claim tempting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the value 3.",
          "workingLatex": "n = 3",
          "explanation": "We check whether $3$ can be written as a sum of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Try every relevant pair.",
          "workingLatex": "0+0=0,\\ 0+1=1,\\ 1+1=2,\\ 0+4=4",
          "explanation": "Using squares $0,1,4$ (the only ones $\\le3$), the reachable sums are $0,1,2,4$ — never $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rule out all possibilities.",
          "workingLatex": "3 \\notin \\{0,1,2,4,\\dots\\}",
          "explanation": "No combination of two squares from $\\{0,1\\}$ (and $4$ is already too big) gives $3$, so $3$ is not a sum of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confront the claim.",
          "workingLatex": "3 \\neq a^2 + b^2 \\text{ for any } a,b",
          "explanation": "The integer $3$ resists every attempt, so it is a genuine counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "Since $3$ cannot be written as a sum of two perfect squares, the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$ cannot be written as $a^2+b^2$: the only squares $\\le 3$ are $0$ and $1$, giving sums $0,1,2$ but never $3$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "divisibility"
    ],
    "questionText": "Disprove the statement: ``If a positive integer is divisible by $4$ and by $6$, then it is divisible by $24$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ m:\\ (4 \\mid m \\text{ and } 6 \\mid m) \\Rightarrow 24 \\mid m",
          "explanation": "The claim asserts divisibility by $24$ follows from divisibility by $4$ and $6$; one $m$ failing this disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We seek an $m$ divisible by both $4$ and $6$ but not by $24$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Spot why the claim over-counts.",
          "workingLatex": "4 = 2^2,\\ 6 = 2 \\times 3;\\ \\operatorname{lcm}(4,6) = 12",
          "explanation": "The two conditions only force divisibility by the least common multiple $12$, not by $24$; the shared factor of $2$ is double-counted.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the least common multiple.",
          "workingLatex": "m = 12",
          "explanation": "We test $m=12$, the smallest number divisible by both $4$ and $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the hypotheses.",
          "workingLatex": "12 = 4 \\times 3 \\text{ and } 12 = 6 \\times 2",
          "explanation": "So $12$ is divisible by both $4$ and $6$, satisfying the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the conclusion.",
          "workingLatex": "12 = 24 \\times 0 + 12, \\text{ so } 24 \\nmid 12",
          "explanation": "Dividing $12$ by $24$ leaves remainder $12$, so $12$ is not divisible by $24$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confront the claim.",
          "workingLatex": "4 \\mid 12,\\ 6 \\mid 12, \\text{ but } 24 \\nmid 12",
          "explanation": "The hypotheses both hold, yet the conclusion fails, which is exactly what a counterexample requires.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the correct statement.",
          "workingLatex": "\\operatorname{lcm}(4,6) = 12",
          "explanation": "The most that divisibility by $4$ and $6$ guarantees is divisibility by their lowest common multiple $12$, not $24$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "Since $12$ is divisible by $4$ and $6$ but not by $24$, the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $m=12$: it is divisible by $4$ and by $6$, but $24 \\nmid 12$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "divisors",
      "squares"
    ],
    "questionText": "Disprove the statement: ``Every positive integer has an even number of positive divisors.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ \\tau(n) \\text{ is even}",
          "explanation": "Here $\\tau(n)$ is the number of positive divisors. The claim says it is always even; one integer with an odd count disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single integer whose divisors come in an odd number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "See why divisors usually pair up.",
          "workingLatex": "d \\mid n \\Rightarrow \\tfrac{n}{d} \\mid n",
          "explanation": "Divisors normally pair as $d$ and $\\tfrac{n}{d}$, which is why the count is usually even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Spot when a pair collapses.",
          "workingLatex": "d = \\tfrac{n}{d} \\iff n = d^2",
          "explanation": "A divisor pairs with itself exactly when $n$ is a perfect square, leaving an unpaired divisor and an odd total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose a perfect square.",
          "workingLatex": "n = 4",
          "explanation": "We test $n=4=2^2$, a perfect square, where the pairing should break.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "List its divisors.",
          "workingLatex": "1, 2, 4",
          "explanation": "The positive divisors of $4$ are $1$, $2$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Count them.",
          "workingLatex": "\\tau(4) = 3",
          "explanation": "There are $3$ divisors — the middle one, $2$, is its own partner since $2\\times2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the parity.",
          "workingLatex": "3 \\text{ is odd}",
          "explanation": "Three is an odd number, so $4$ has an odd number of divisors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "Since $4$ has exactly $3$ (odd) divisors, the claim `every integer has an even number of divisors' is disproved. In fact this fails for every perfect square.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4$ has divisors $1, 2, 4$ — exactly $3$ of them, an odd number. Hence the statement is false (it fails for every perfect square). $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "prime-generating polynomial"
    ],
    "questionText": "Euler observed that $n^2 + n + 41$ is prime for many values of $n$. Disprove the claim that ``$n^2 + n + 41$ is prime for every integer $n \\ge 0$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 0:\\ n^2 + n + 41 \\text{ is prime}",
          "explanation": "The claim asserts primality for *every* $n\\ge0$. A single $n$ giving a composite value disproves it, no matter how many earlier values are prime.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We do not need to find all failures — just one $n$ where $n^2+n+41$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify the pattern for small n.",
          "workingLatex": "n=0: 41,\\ \\ n=1: 43,\\ \\ n=2: 47,\\ \\ n=3: 53",
          "explanation": "These values are all prime, and this run of primes continues for a long time, which is why the polynomial is famous and the claim looks plausible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Look for structure that forces a factor.",
          "workingLatex": "n^2 + n + 41 \\text{ shares a factor with } 41 \\text{ when } 41 \\mid n^2+n",
          "explanation": "If the value is a multiple of $41$, it cannot be prime (once it exceeds $41$). This happens when $41$ divides $n^2+n=n(n+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose n to create the factor 41.",
          "workingLatex": "n = 40",
          "explanation": "Taking $n=40$ makes $n+1=41$, so $n(n+1)=40\\times41$ is a multiple of $41$ — a deliberate choice, not random.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the polynomial.",
          "workingLatex": "40^2 + 40 + 41 = 1600 + 40 + 41 = 1681",
          "explanation": "Substituting $n=40$ gives $1681$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the result.",
          "workingLatex": "1681 = 41 \\times 41 = 41^2",
          "explanation": "The value $1681$ is $41$ squared, so it is composite.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confront the claim.",
          "workingLatex": "40^2+40+41 = 41^2 \\text{ is not prime}",
          "explanation": "At $n=40$ the polynomial produces a perfect square, which is certainly not prime.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the inevitability.",
          "workingLatex": "n = 41 \\text{ also fails: } 41^2 + 41 + 41 = 41 \\times 43",
          "explanation": "The value $n=41$ fails too, confirming the counterexample is structural, not a fluke.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reflect on the lesson.",
          "workingLatex": "\\text{a long run of cases is not a proof}",
          "explanation": "Even $40$ consecutive successes do not establish a universal claim; only a proof would, and here no proof exists because the claim is false.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the correct qualified statement.",
          "workingLatex": "n^2+n+41 \\text{ is prime for } 0 \\le n \\le 39 \\text{ only}",
          "explanation": "The polynomial is prime for $n=0,\\dots,39$, but the universal claim over all $n\\ge0$ is false.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the counterexample once more.",
          "workingLatex": "1681 = 41^2, \\quad 41 \\nmid 1 \\text{ and } 41 \\ne 1681",
          "explanation": "Since $1681$ has the proper divisor $41$, it is genuinely composite.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $n=40$, $n^2+n+41 = 1681 = 41^2$ is composite, so the claim is disproved by this single counterexample.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $n=40$: $40^2+40+41 = 1681 = 41^2$, which is composite. Hence ``$n^2+n+41$ is prime for every $n\\ge0$'' is false (it is prime only for $0\\le n\\le39$). $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "Mersenne numbers"
    ],
    "questionText": "Disprove the claim that ``$2^p - 1$ is prime for every prime number $p$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{primes } p:\\ 2^p - 1 \\text{ is prime}",
          "explanation": "The numbers $2^p-1$ are called Mersenne numbers. The claim asserts they are prime for *every* prime $p$; one composite case disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one prime $p$ for which $2^p-1$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the first few primes.",
          "workingLatex": "p=2: 3,\\ \\ p=3: 7,\\ \\ p=5: 31,\\ \\ p=7: 127",
          "explanation": "For $p=2,3,5,7$ the values $3,7,31,127$ are all prime, which makes the claim look convincing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move to the next prime.",
          "workingLatex": "p = 11",
          "explanation": "The next prime after $7$ is $11$; we test $2^{11}-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the power.",
          "workingLatex": "2^{11} = 2048",
          "explanation": "Computing the power gives $2^{11}=2048$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract 1.",
          "workingLatex": "2^{11} - 1 = 2047",
          "explanation": "So the Mersenne number for $p=11$ is $2047$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Search for a factor.",
          "workingLatex": "2047 \\div 23 = 89",
          "explanation": "Testing small primes, $2047$ is divisible by $23$, giving quotient $89$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the result.",
          "workingLatex": "2047 = 23 \\times 89",
          "explanation": "Both $23$ and $89$ are greater than $1$, so this is a genuine factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is composite.",
          "workingLatex": "2047 \\text{ has divisor } 23 \\Rightarrow \\text{composite}",
          "explanation": "Since $2047$ has a proper divisor $23$, it is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confront the claim.",
          "workingLatex": "p = 11 \\text{ prime, but } 2^{11}-1 = 2047 \\text{ composite}",
          "explanation": "Here $p=11$ is prime yet $2^p-1$ is composite, exactly the failure the claim forbids.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Draw the general lesson.",
          "workingLatex": "\\text{primality of } p \\not\\Rightarrow \\text{primality of } 2^p-1",
          "explanation": "A prime exponent is necessary but not sufficient for $2^p-1$ to be prime, so the universal claim is too strong.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the small cases really were prime.",
          "workingLatex": "3, 7, 31, 127 \\text{ all prime}",
          "explanation": "This confirms the counterexample at $p=11$ is the first failure, not an error in the earlier cases.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $p=11$, $2^p-1 = 2047 = 23\\times89$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For the prime $p=11$: $2^{11}-1 = 2047 = 23 \\times 89$, which is composite. Hence ``$2^p-1$ is prime for every prime $p$'' is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes"
    ],
    "questionText": "Disprove the claim that ``$3^n + 2$ is prime for every positive integer $n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ 3^n + 2 \\text{ is prime}",
          "explanation": "The claim asserts primality for *every* positive integer $n$; one composite value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $n$ for which $3^n+2$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check n = 1.",
          "workingLatex": "3^1 + 2 = 5 \\text{ (prime)}",
          "explanation": "For $n=1$ the value is $5$, which is prime.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check n = 2.",
          "workingLatex": "3^2 + 2 = 11 \\text{ (prime)}",
          "explanation": "For $n=2$ the value is $11$, again prime.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check n = 3 and n = 4.",
          "workingLatex": "3^3+2 = 29,\\quad 3^4+2 = 83 \\text{ (both prime)}",
          "explanation": "For $n=3,4$ the values $29$ and $83$ are prime, so the pattern holds for four cases.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Move to n = 5.",
          "workingLatex": "n = 5",
          "explanation": "We continue to $n=5$ to test whether the run of primes persists.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power.",
          "workingLatex": "3^5 = 243",
          "explanation": "Computing gives $3^5=243$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add 2.",
          "workingLatex": "3^5 + 2 = 245",
          "explanation": "So the value at $n=5$ is $245$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the result.",
          "workingLatex": "245 = 5 \\times 49 = 5 \\times 7^2",
          "explanation": "Since $245$ ends in $5$ it is divisible by $5$, giving $245=5\\times49$, and $49=7^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm it is composite.",
          "workingLatex": "245 \\text{ has divisor } 5 \\Rightarrow \\text{composite}",
          "explanation": "With a proper divisor $5$, the number $245$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confront the claim.",
          "workingLatex": "3^5 + 2 = 245 \\text{ is not prime}",
          "explanation": "At $n=5$ the expression is composite, contradicting the universal claim.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the value of testing further.",
          "workingLatex": "\\text{four primes then a composite}",
          "explanation": "The first four cases were prime, showing again that a short run of successes proves nothing.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $n=5$, $3^n+2 = 245 = 5\\times49$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=5$: $3^5 + 2 = 245 = 5 \\times 49$, which is composite. Hence ``$3^n+2$ is prime for every positive integer $n$'' is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "factorials"
    ],
    "questionText": "Disprove the claim that ``$n! + 1$ is prime for every positive integer $n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ n! + 1 \\text{ is prime}",
          "explanation": "Here $n! = 1\\times2\\times\\cdots\\times n$. The claim asserts $n!+1$ is prime for *every* $n$; one composite value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $n$ for which $n!+1$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check n = 1 and n = 2.",
          "workingLatex": "1! + 1 = 2,\\quad 2! + 1 = 3 \\text{ (both prime)}",
          "explanation": "For $n=1,2$ the values $2$ and $3$ are prime.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check n = 3.",
          "workingLatex": "3! + 1 = 6 + 1 = 7 \\text{ (prime)}",
          "explanation": "For $n=3$ the value is $7$, again prime, so the claim holds so far.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Move to n = 4.",
          "workingLatex": "n = 4",
          "explanation": "We test $n=4$ to see whether the pattern continues.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the factorial.",
          "workingLatex": "4! = 1 \\times 2 \\times 3 \\times 4 = 24",
          "explanation": "The factorial $4!$ equals $24$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 1.",
          "workingLatex": "4! + 1 = 25",
          "explanation": "So the value at $n=4$ is $25$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the result.",
          "workingLatex": "25 = 5 \\times 5 = 5^2",
          "explanation": "The number $25$ is $5$ squared, hence composite.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is composite.",
          "workingLatex": "25 \\text{ has divisor } 5 \\Rightarrow \\text{composite}",
          "explanation": "Since $25$ has the proper divisor $5$, it is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confront the claim.",
          "workingLatex": "4! + 1 = 25 \\text{ is not prime}",
          "explanation": "At $n=4$ the expression is composite, contradicting the universal claim.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the pattern.",
          "workingLatex": "\\text{prime for } n=1,2,3 \\text{ then composite at } n=4",
          "explanation": "Three successes followed by a failure again warn against trusting a short run of examples.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the earlier cases.",
          "workingLatex": "2, 3, 7 \\text{ all prime}",
          "explanation": "This confirms $n=4$ is the first failure, so the counterexample is correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $n=4$, $n!+1 = 25 = 5^2$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=4$: $4! + 1 = 25 = 5^2$, which is composite. Hence ``$n!+1$ is prime for every positive integer $n$'' is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "factorisation"
    ],
    "questionText": "Disprove the claim that ``$n(n+1)(n+2)(n+3) + 1$ is prime for every positive integer $n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ n(n+1)(n+2)(n+3) + 1 \\text{ is prime}",
          "explanation": "The claim asserts primality for *every* $n$; a single composite value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $n$ making the expression composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the smallest case.",
          "workingLatex": "n = 1",
          "explanation": "We start with $n=1$, the smallest positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the product.",
          "workingLatex": "1 \\times 2 \\times 3 \\times 4 = 24",
          "explanation": "The product of the four consecutive integers $1,2,3,4$ is $24$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add 1.",
          "workingLatex": "24 + 1 = 25",
          "explanation": "So the value at $n=1$ is $25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the result.",
          "workingLatex": "25 = 5 \\times 5 = 5^2",
          "explanation": "The number $25$ is $5$ squared, hence composite — already a counterexample at the very first case.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm it is composite.",
          "workingLatex": "25 \\text{ has divisor } 5 \\Rightarrow \\text{composite}",
          "explanation": "Since $25$ has the proper divisor $5$, it is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why this is no accident.",
          "workingLatex": "n(n+1)(n+2)(n+3)+1 = (n^2+3n+1)^2",
          "explanation": "The product of four consecutive integers plus $1$ is always a perfect square, a fact we can prove algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the identity here.",
          "workingLatex": "n=1: (1+3+1)^2 = 5^2 = 25",
          "explanation": "With $n=1$, $n^2+3n+1 = 5$, and indeed $5^2 = 25$, matching our computation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Draw the strong consequence.",
          "workingLatex": "(n^2+3n+1)^2 \\text{ is a perfect square, hence composite for } n \\ge 1",
          "explanation": "Because the expression is always a square of an integer greater than $1$ (for $n\\ge1$), it is *never* prime — the claim fails for every $n$, not just one.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confront the claim.",
          "workingLatex": "n=1 \\text{ gives } 25 = 5^2, \\text{ not prime}",
          "explanation": "The very first case already contradicts the claim.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the contrast with earlier questions.",
          "workingLatex": "\\text{here every case fails, not just one}",
          "explanation": "Unlike prime-generating formulas that fail eventually, this one fails immediately and always, because of the hidden square structure.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the counterexample.",
          "workingLatex": "25 = 5^2, \\quad 5 \\ne 1,\\ 5 \\ne 25",
          "explanation": "Since $25$ has the proper divisor $5$, it is genuinely composite.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $n=1$, $n(n+1)(n+2)(n+3)+1 = 25 = 5^2$ is composite, so the claim is disproved (and in fact it is a perfect square for every $n$).",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=1$: $1\\cdot2\\cdot3\\cdot4 + 1 = 25 = 5^2$, which is composite. In fact $n(n+1)(n+2)(n+3)+1 = (n^2+3n+1)^2$ is always a perfect square, so it is never prime. The statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "Fermat numbers"
    ],
    "questionText": "Fermat conjectured that every number of the form $F_k = 2^{2^k} + 1$ is prime. Disprove the claim that ``$2^{2^k} + 1$ is prime for every integer $k \\ge 0$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ k \\ge 0:\\ F_k = 2^{2^k} + 1 \\text{ is prime}",
          "explanation": "These are the Fermat numbers. The claim asserts they are *all* prime; one composite $F_k$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $k$ for which $F_k$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the first few Fermat numbers.",
          "workingLatex": "F_0=3,\\ F_1=5,\\ F_2=17,\\ F_3=257",
          "explanation": "For $k=0,1,2,3$ the values $3,5,17,257$ are all prime, which is why Fermat believed the pattern continued.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the next one.",
          "workingLatex": "F_4 = 2^{16} + 1 = 65537 \\text{ (prime)}",
          "explanation": "Even $F_4 = 65537$ is prime, so the first five Fermat numbers are all prime — a persuasive run.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Move to the next case.",
          "workingLatex": "k = 5",
          "explanation": "We test $F_5$, the case where Euler famously found the pattern to break.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the exponent.",
          "workingLatex": "2^5 = 32",
          "explanation": "For $k=5$ the exponent is $2^5 = 32$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the Fermat number.",
          "workingLatex": "F_5 = 2^{32} + 1 = 4294967297",
          "explanation": "Computing gives $F_5 = 4294967297$, a ten-digit number.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the known factor.",
          "workingLatex": "641 \\mid 4294967297",
          "explanation": "Euler discovered that $641$ divides $F_5$; this is the crucial factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Exhibit the factorisation.",
          "workingLatex": "4294967297 = 641 \\times 6700417",
          "explanation": "Dividing gives $F_5 = 641 \\times 6700417$, with both factors greater than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm it is composite.",
          "workingLatex": "F_5 \\text{ has divisor } 641 \\Rightarrow \\text{composite}",
          "explanation": "Since $641$ is a proper divisor, $F_5$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confront the claim.",
          "workingLatex": "k = 5:\\ F_5 = 641 \\times 6700417 \\text{ is composite}",
          "explanation": "So $F_5$ is a Fermat number that is not prime, contradicting the conjecture.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reflect on the historical lesson.",
          "workingLatex": "\\text{5 primes then a composite}",
          "explanation": "Fermat's five successes were not a proof; Euler's single counterexample overturned the conjecture — a landmark example of disproof by counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the small cases were prime.",
          "workingLatex": "3, 5, 17, 257, 65537 \\text{ all prime}",
          "explanation": "This confirms $k=5$ is the first failure, so the counterexample is correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $k=5$, $F_5 = 2^{32}+1 = 641 \\times 6700417$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $k=5$: $F_5 = 2^{32}+1 = 4294967297 = 641 \\times 6700417$, which is composite (Euler, 1732). Hence ``$2^{2^k}+1$ is prime for every $k\\ge0$'' is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "algebra",
      "expanding brackets"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $a$ and $b$, $(a+b)^2 = a^2 + b^2$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b:\\ (a+b)^2 = a^2 + b^2",
          "explanation": "The claim asserts the identity holds for *all* $a,b$; one pair where the two sides differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "A single pair of numbers making the two sides unequal is enough to refute a `for all' identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the correct expansion.",
          "workingLatex": "(a+b)^2 = a^2 + 2ab + b^2",
          "explanation": "The true expansion has an extra middle term $2ab$, which the claim ignores; the counterexample should make $2ab \\neq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose simple non-zero values.",
          "workingLatex": "a = 1, \\quad b = 1",
          "explanation": "Taking $a=b=1$ keeps $2ab = 2 \\neq 0$, so the missing term will show up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "(1+1)^2 = 2^2 = 4",
          "explanation": "Squaring the sum, $(1+1)^2 = 2^2 = 4$, so the left-hand side is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "1^2 + 1^2 = 1 + 1 = 2",
          "explanation": "The right side gives $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "4 \\neq 2 \\Rightarrow \\text{the statement is false}",
          "explanation": "At $a=b=1$ the sides are $4$ and $2$, which are unequal, so the claimed identity is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=b=1$: then $(a+b)^2 = 4$ but $a^2+b^2 = 2$. Since $4 \\neq 2$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "surds",
      "algebra"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $a, b \\ge 0$, $\\sqrt{a^2 + b^2} = a + b$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b \\ge 0:\\ \\sqrt{a^2+b^2} = a+b",
          "explanation": "The claim asserts equality for *all* non-negative $a,b$; one pair where the sides differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair making the two sides unequal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Pick a convenient Pythagorean pair.",
          "workingLatex": "a = 3, \\quad b = 4",
          "explanation": "Choosing $3$ and $4$ gives a perfect-square sum, keeping the arithmetic clean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5",
          "explanation": "The left side is $\\sqrt{25}=5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "3 + 4 = 7",
          "explanation": "Adding the two numbers directly, $3+4 = 7$, so the right-hand side is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare.",
          "workingLatex": "5 \\neq 7",
          "explanation": "The two sides are different, so the claimed identity fails here.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $a=3,\\ b=4$ we get $5 \\neq 7$, so $\\sqrt{a^2+b^2}=a+b$ is disproved. (In general $\\sqrt{a^2+b^2}\\le a+b$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=3,\\ b=4$: then $\\sqrt{a^2+b^2} = \\sqrt{25} = 5$ but $a+b = 7$. Since $5 \\neq 7$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "modulus",
      "inequalities"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $a$ and $b$, $|a + b| = |a| + |b|$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b:\\ |a+b| = |a| + |b|",
          "explanation": "The claim asserts equality of absolute values for *all* $a,b$; one pair where they differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair making the two sides unequal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look for opposite signs.",
          "workingLatex": "\\text{try } a > 0,\\ b < 0",
          "explanation": "Equality holds when $a,b$ have the same sign, so a counterexample must mix signs, where cancellation occurs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a specific pair.",
          "workingLatex": "a = 1, \\quad b = -1",
          "explanation": "With $a=1$ and $b=-1$ the sum cancels to zero while the individual sizes do not.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "|1 + (-1)| = |0| = 0",
          "explanation": "The left side is $|0| = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "|1| + |-1| = 1 + 1 = 2",
          "explanation": "The right side is $1 + 1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "0 \\neq 2 \\Rightarrow \\text{the statement is false}",
          "explanation": "At $a=1,\\ b=-1$ the sides are $0$ and $2$, so the claim is disproved. (The true relation is $|a+b|\\le|a|+|b|$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=1,\\ b=-1$: then $|a+b| = 0$ but $|a|+|b| = 2$. Since $0 \\neq 2$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "surds",
      "squares"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $x$, $\\sqrt{x^2} = x$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ x \\in \\mathbb{R}:\\ \\sqrt{x^2} = x",
          "explanation": "The claim covers *all* real $x$; one value where $\\sqrt{x^2}\\neq x$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single real number for which the equation fails.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall that the square root is non-negative.",
          "workingLatex": "\\sqrt{x^2} = |x| \\ge 0",
          "explanation": "The symbol $\\sqrt{\\ }$ denotes the non-negative root, so $\\sqrt{x^2}$ can never be negative — a clash for negative $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a negative value.",
          "workingLatex": "x = -3",
          "explanation": "We test $x=-3$, where $x$ itself is negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "\\sqrt{(-3)^2} = \\sqrt{9} = 3",
          "explanation": "Squaring removes the sign, and the root returns the positive value $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with x.",
          "workingLatex": "3 \\neq -3",
          "explanation": "The left side is $3$ but $x=-3$, so the two are not equal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $x=-3$, $\\sqrt{x^2}=3\\neq-3=x$, so the claim is disproved. (The correct identity is $\\sqrt{x^2}=|x|$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $x=-3$: then $\\sqrt{x^2} = \\sqrt{9} = 3$ but $x = -3$. Since $3 \\neq -3$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities",
      "cubes"
    ],
    "questionText": "Disprove the statement: ``For every integer $n$, $n^3 \\ge n^2$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\in \\mathbb{Z}:\\ n^3 \\ge n^2",
          "explanation": "The claim covers *all* integers, including negatives; one integer where $n^3<n^2$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single integer making the inequality fail.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Notice positive integers obey it.",
          "workingLatex": "n = 2: 8 \\ge 4",
          "explanation": "For positive $n$ the cube is at least the square, so the flaw must lie among negative integers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a negative value.",
          "workingLatex": "n = -1",
          "explanation": "We test $n=-1$, where cubing keeps the sign negative but squaring makes it positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate both sides.",
          "workingLatex": "n^3 = (-1)^3 = -1, \\quad n^2 = (-1)^2 = 1",
          "explanation": "The cube is $-1$ and the square is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare.",
          "workingLatex": "-1 \\ge 1 \\text{ is false}",
          "explanation": "Since $-1 < 1$, the inequality $n^3\\ge n^2$ fails at $n=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $n=-1$, $n^3=-1<1=n^2$, so the claim is disproved by this counterexample.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=-1$: then $n^3 = -1$ but $n^2 = 1$, so $n^3 \\ge n^2$ fails. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities"
    ],
    "questionText": "Disprove the statement: ``For every integer $n$, $n^2 + 1 > 2n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\in \\mathbb{Z}:\\ n^2 + 1 > 2n",
          "explanation": "The claim asserts a strict inequality for *all* integers; one integer giving equality (or less) disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single integer for which $n^2+1>2n$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite to spot the tight case.",
          "workingLatex": "n^2 + 1 - 2n = (n-1)^2",
          "explanation": "The difference is $(n-1)^2$, which is zero at $n=1$ — exactly where a *strict* inequality must fail.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose that value.",
          "workingLatex": "n = 1",
          "explanation": "We test $n=1$, where the difference vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate both sides.",
          "workingLatex": "n^2 + 1 = 2, \\quad 2n = 2",
          "explanation": "Both sides equal $2$ when $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare.",
          "workingLatex": "2 > 2 \\text{ is false}",
          "explanation": "Since $2$ is not strictly greater than $2$, the inequality fails at $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $n=1$ we have $n^2+1 = 2 = 2n$, so the strict inequality is disproved. (The correct statement uses $\\ge$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=1$: then $n^2+1 = 2 = 2n$, so $n^2+1 > 2n$ fails. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "parity",
      "multiplication"
    ],
    "questionText": "Disprove the statement: ``If the product $ab$ is even, then $a$ and $b$ are both even.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all integers.",
          "workingLatex": "\\forall\\ a,b:\\ ab \\text{ even} \\Rightarrow a, b \\text{ both even}",
          "explanation": "The claim asserts an implication for *all* $a,b$; one pair with $ab$ even but not both even disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair satisfying the hypothesis but failing the conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall what makes a product even.",
          "workingLatex": "ab \\text{ even} \\iff a \\text{ even or } b \\text{ even}",
          "explanation": "Only *one* factor needs to be even, so we can keep the other odd — that breaks the `both even' conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose one odd and one even.",
          "workingLatex": "a = 1, \\quad b = 2",
          "explanation": "With $a=1$ (odd) and $b=2$ (even), the product will be even but $a$ is not.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the hypothesis.",
          "workingLatex": "ab = 1 \\times 2 = 2 \\text{ (even)}",
          "explanation": "The product $2$ is even, so the hypothesis holds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the conclusion.",
          "workingLatex": "a = 1 \\text{ is odd}",
          "explanation": "But $a=1$ is odd, so `both even' is false.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $a=1,\\ b=2$ the product is even yet $a$ is odd, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=1,\\ b=2$: then $ab = 2$ is even, but $a=1$ is odd. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "geometry",
      "shapes"
    ],
    "questionText": "Disprove the statement: ``Every rectangle is a square.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{rectangles}:\\ \\text{it is a square}",
          "explanation": "The claim asserts *every* rectangle is a square; one rectangle that is not a square disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single rectangle whose four sides are not all equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the definitions.",
          "workingLatex": "\\text{rectangle: 4 right angles};\\ \\text{square: rectangle with all sides equal}",
          "explanation": "A square is a special rectangle; a rectangle need not have equal sides, so we look for unequal side lengths.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Construct a specific rectangle.",
          "workingLatex": "\\text{sides } 2 \\text{ and } 3",
          "explanation": "A rectangle with width $2$ and height $3$ has four right angles, so it is a genuine rectangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare its sides.",
          "workingLatex": "2 \\neq 3",
          "explanation": "Its adjacent sides are $2$ and $3$, which are unequal, so it is not a square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "A $2 \\times 3$ rectangle is a rectangle but not a square, so the claim `every rectangle is a square' is disproved. (The correct direction is that every square is a rectangle.)",
          "diagram": null
        }
      ],
      "finalAnswer": "A $2 \\times 3$ rectangle has four right angles but unequal sides ($2 \\neq 3$), so it is not a square. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "factorisation"
    ],
    "questionText": "Disprove the statement: ``The number $n^2 - 1$ is never prime, for any integer $n \\ge 2$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 2:\\ n^2 - 1 \\text{ is not prime}",
          "explanation": "The claim says $n^2-1$ is *never* prime; a single $n$ giving a prime value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need one $n\\ge2$ for which $n^2-1$ is prime.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the expression.",
          "workingLatex": "n^2 - 1 = (n-1)(n+1)",
          "explanation": "The difference of squares factorises; this normally makes it composite, but the factor $n-1$ can equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Spot when a factor becomes 1.",
          "workingLatex": "n - 1 = 1 \\iff n = 2",
          "explanation": "When $n=2$, the factor $n-1=1$, so the product reduces to a single non-trivial factor — the one chance to be prime.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at that value.",
          "workingLatex": "n = 2:\\ 2^2 - 1 = 3",
          "explanation": "Substituting $n=2$ gives $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check primality.",
          "workingLatex": "3 \\text{ is prime}",
          "explanation": "The number $3$ has only divisors $1$ and $3$, so it is prime.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $n=2$, $n^2-1 = 3$ is prime, so the claim `$n^2-1$ is never prime' is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=2$: then $n^2 - 1 = 3$, which is prime. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "algebra",
      "expanding brackets"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $a$ and $b$, $(a+b)^3 = a^3 + b^3$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b:\\ (a+b)^3 = a^3 + b^3",
          "explanation": "The claim asserts an identity for *all* $a,b$; one pair where the sides differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "A single pair making the sides unequal refutes the claimed identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the correct expansion.",
          "workingLatex": "(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
          "explanation": "The true cube has extra middle terms $3a^2b+3ab^2$, which the claim drops; a counterexample should make these non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose simple non-zero values.",
          "workingLatex": "a = 1, \\quad b = 1",
          "explanation": "With $a=b=1$ the dropped terms sum to $6\\neq0$, so the two sides must differ.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "(1+1)^3 = 2^3 = 8",
          "explanation": "Cubing the sum, $(1+1)^3 = 2^3 = 8$, so the left-hand side is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "1^3 + 1^3 = 2",
          "explanation": "Adding the individual cubes, $1^3+1^3 = 2$, so the right-hand side is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare.",
          "workingLatex": "8 \\neq 2",
          "explanation": "The two sides are unequal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the size of the gap.",
          "workingLatex": "8 - 2 = 6 = 3a^2b + 3ab^2",
          "explanation": "The difference $6$ is exactly the two middle terms the claim ignored, confirming where it goes wrong.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $a=b=1$ the sides are $8$ and $2$, so the identity is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=b=1$: then $(a+b)^3 = 8$ but $a^3+b^3 = 2$. Since $8 \\neq 2$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "algebraic fractions"
    ],
    "questionText": "Disprove the statement: ``For all non-zero real numbers $a$ and $b$, $\\dfrac{1}{a+b} = \\dfrac{1}{a} + \\dfrac{1}{b}$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b \\neq 0:\\ \\tfrac{1}{a+b} = \\tfrac{1}{a} + \\tfrac{1}{b}",
          "explanation": "The claim asserts equality for *all* non-zero $a,b$; one pair where the sides differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair making the two sides unequal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the correct combination.",
          "workingLatex": "\\tfrac{1}{a} + \\tfrac{1}{b} = \\tfrac{a+b}{ab}",
          "explanation": "The true sum of the reciprocals is $\\tfrac{a+b}{ab}$, not $\\tfrac{1}{a+b}$, so the claim inverts things incorrectly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose simple values.",
          "workingLatex": "a = 1, \\quad b = 1",
          "explanation": "Taking $a=b=1$ keeps the arithmetic simple and both sides defined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "\\tfrac{1}{1+1} = \\tfrac{1}{2}",
          "explanation": "The left side is $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "\\tfrac{1}{1} + \\tfrac{1}{1} = 2",
          "explanation": "Adding the two reciprocals, $\\tfrac11+\\tfrac11 = 2$, so the right-hand side is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare.",
          "workingLatex": "\\tfrac{1}{2} \\neq 2",
          "explanation": "The two sides are clearly unequal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note how far apart they are.",
          "workingLatex": "2 = 4 \\times \\tfrac{1}{2}",
          "explanation": "The right side is four times the left, so this is not a small rounding discrepancy but a genuine failure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $a=b=1$ the sides are $\\tfrac12$ and $2$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=b=1$: then $\\tfrac{1}{a+b} = \\tfrac12$ but $\\tfrac1a + \\tfrac1b = 2$. Since $\\tfrac12 \\neq 2$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "indices"
    ],
    "questionText": "Disprove the statement: ``For all positive integers $a$, $m$ and $n$, $\\left(a^m\\right)^n = a^{m+n}$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,m,n:\\ (a^m)^n = a^{m+n}",
          "explanation": "The claim asserts a law of indices for *all* $a,m,n$; one triple where the sides differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single triple making the two sides unequal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the correct index law.",
          "workingLatex": "(a^m)^n = a^{mn}",
          "explanation": "Raising a power to a power *multiplies* the indices, giving $a^{mn}$, not $a^{m+n}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose values where mn ≠ m+n.",
          "workingLatex": "a = 2,\\ m = 2,\\ n = 3",
          "explanation": "Here $mn = 6$ while $m+n = 5$, so the two exponents differ and the sides should too.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "(2^2)^3 = 4^3 = 64",
          "explanation": "The left side is $(2^2)^3 = 4^3 = 64$, matching $a^{mn}=2^6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "2^{m+n} = 2^{5} = 32",
          "explanation": "The right side is $2^{2+3} = 2^5 = 32$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare.",
          "workingLatex": "64 \\neq 32",
          "explanation": "The two sides are unequal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pinpoint the error.",
          "workingLatex": "mn = 6 \\neq 5 = m+n",
          "explanation": "The mismatch traces exactly to using $m+n$ instead of the correct $mn$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $a=2,\\ m=2,\\ n=3$ the sides are $64$ and $32$, so the claim is disproved. (The correct law is $(a^m)^n=a^{mn}$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=2,\\ m=2,\\ n=3$: then $(a^m)^n = 4^3 = 64$ but $a^{m+n} = 2^5 = 32$. Since $64 \\neq 32$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities",
      "algebraic fractions"
    ],
    "questionText": "Disprove the statement: ``For all non-zero real numbers $x$, $x + \\dfrac{1}{x} \\ge 2$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ x \\neq 0:\\ x + \\tfrac{1}{x} \\ge 2",
          "explanation": "The claim covers *all* non-zero reals, including negatives; one $x$ where the sum is below $2$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single non-zero $x$ for which $x+\\tfrac1x<2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note where the inequality is designed to hold.",
          "workingLatex": "\\text{it holds for } x > 0",
          "explanation": "The familiar AM-GM argument needs $x>0$; for negative $x$ both $x$ and $\\tfrac1x$ are negative, so the sum can be very negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a negative value.",
          "workingLatex": "x = -1",
          "explanation": "We test $x=-1$, a simple negative number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the expression.",
          "workingLatex": "-1 + \\tfrac{1}{-1} = -1 + (-1) = -2",
          "explanation": "Both terms are $-1$, so the sum is $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with 2.",
          "workingLatex": "-2 \\ge 2 \\text{ is false}",
          "explanation": "Since $-2 < 2$, the inequality fails badly at $x=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain why the claim over-reached.",
          "workingLatex": "\\text{the bound only holds for } x > 0",
          "explanation": "The correct statement restricts to positive $x$; dropping that condition is what makes the claim false.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the counterexample.",
          "workingLatex": "x = -1 \\neq 0, \\quad x + \\tfrac1x = -2 < 2",
          "explanation": "The value $x=-1$ is a valid non-zero input and clearly violates the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $x=-1$, $x+\\tfrac1x = -2 < 2$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $x=-1$: then $x + \\tfrac1x = -1 + (-1) = -2 < 2$. Hence the statement is false (the inequality holds only for $x>0$). $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities",
      "reciprocals"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $a$ and $b$, if $a > b$ then $\\dfrac{1}{a} < \\dfrac{1}{b}$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all reals.",
          "workingLatex": "\\forall\\ a,b:\\ a > b \\Rightarrow \\tfrac{1}{a} < \\tfrac{1}{b}",
          "explanation": "The claim asserts the implication for *all* non-zero $a,b$; one pair with $a>b$ but $\\tfrac1a\\ge\\tfrac1b$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair satisfying the hypothesis but failing the conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the sign trap.",
          "workingLatex": "\\text{reciprocal reverses order only within one sign}",
          "explanation": "Taking reciprocals flips inequalities only when $a,b$ share a sign; straddling zero breaks the rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose values of opposite sign.",
          "workingLatex": "a = 1, \\quad b = -1",
          "explanation": "Here $a=1>b=-1$, so the hypothesis holds, but they lie on opposite sides of zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the hypothesis.",
          "workingLatex": "1 > -1 \\text{ is true}",
          "explanation": "Indeed $1>-1$, so the hypothesis $a>b$ is genuinely satisfied by this pair.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the reciprocals.",
          "workingLatex": "\\tfrac{1}{a} = 1, \\quad \\tfrac{1}{b} = -1",
          "explanation": "The reciprocals are $1$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the conclusion.",
          "workingLatex": "1 < -1 \\text{ is false}",
          "explanation": "Since $1 > -1$, the conclusion $\\tfrac1a<\\tfrac1b$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the failure.",
          "workingLatex": "a > 0 > b",
          "explanation": "Because $a$ is positive and $b$ negative, their reciprocals keep those signs, so $\\tfrac1a>\\tfrac1b$ — the opposite of the claim.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $a=1>b=-1$ but $\\tfrac1a = 1 > -1 = \\tfrac1b$, the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=1,\\ b=-1$: then $a>b$, but $\\tfrac1a = 1$ and $\\tfrac1b = -1$, so $\\tfrac1a < \\tfrac1b$ fails. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities",
      "powers"
    ],
    "questionText": "Disprove the statement: ``For every positive integer $n$, $2^n > n^2$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ 2^n > n^2",
          "explanation": "The claim asserts the inequality for *all* positive integers; one $n$ where it fails disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single positive integer for which $2^n>n^2$ is false.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the very first case.",
          "workingLatex": "n = 1:\\ 2^1 = 2 > 1 = 1^2 \\ \\checkmark",
          "explanation": "At $n=1$ the inequality holds, so we must look a little further.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test n = 2.",
          "workingLatex": "n = 2",
          "explanation": "We evaluate both sides at $n=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate both sides.",
          "workingLatex": "2^2 = 4, \\quad 2^2 = 4",
          "explanation": "Here $2^n = 4$ and $n^2 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare.",
          "workingLatex": "4 > 4 \\text{ is false}",
          "explanation": "Since $4$ is not strictly greater than $4$, the inequality fails at $n=2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the neighbouring failures.",
          "workingLatex": "n=3: 8 > 9 \\text{ false},\\ \\ n=4: 16 > 16 \\text{ false}",
          "explanation": "The inequality also fails at $n=3,4$, only recovering from $n=5$ onward — so `for all $n$' is definitely wrong.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the counterexample.",
          "workingLatex": "n = 2:\\ 2^n = n^2 = 4",
          "explanation": "At $n=2$ the two sides are equal, so the strict inequality does not hold.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $n=2$, $2^n = 4 = n^2$, so $2^n>n^2$ fails and the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=2$: then $2^n = 4 = n^2$, so $2^n > n^2$ fails (it also fails at $n=3,4$). Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "divisibility",
      "squares"
    ],
    "questionText": "Disprove the statement: ``For every integer $n$, if $n^2$ is divisible by $4$ then $n$ is divisible by $4$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all integers.",
          "workingLatex": "\\forall\\ n:\\ 4 \\mid n^2 \\Rightarrow 4 \\mid n",
          "explanation": "The claim asserts the implication for *all* $n$; one $n$ with $4\\mid n^2$ but $4\\nmid n$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single integer satisfying the hypothesis but failing the conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Understand when 4 divides a square.",
          "workingLatex": "4 \\mid n^2 \\iff n \\text{ is even}",
          "explanation": "An even $n=2k$ gives $n^2=4k^2$, so $4\\mid n^2$ needs only that $n$ is even — not that $4\\mid n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose an even number not divisible by 4.",
          "workingLatex": "n = 2",
          "explanation": "The number $2$ is even but not a multiple of $4$, exactly the gap we want to exploit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the hypothesis.",
          "workingLatex": "n^2 = 4, \\quad 4 \\mid 4",
          "explanation": "Here $n^2=4$, which is divisible by $4$, so the hypothesis holds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the conclusion.",
          "workingLatex": "4 \\nmid 2",
          "explanation": "But $2$ is not divisible by $4$, so the conclusion fails.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confront the claim.",
          "workingLatex": "4 \\mid 2^2 \\text{ yet } 4 \\nmid 2",
          "explanation": "The hypothesis holds while the conclusion does not.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the correct statement.",
          "workingLatex": "4 \\mid n^2 \\Rightarrow 2 \\mid n",
          "explanation": "All that follows is that $n$ is even; claiming $4\\mid n$ is too strong.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $n=2$, $4\\mid n^2$ but $4\\nmid n$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=2$: then $n^2 = 4$ is divisible by $4$, but $n=2$ is not. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "number theory",
      "gcd"
    ],
    "questionText": "Disprove the statement: ``For all positive integers $a$, $b$ and $c$, if $\\gcd(a,b) = 1$ and $\\gcd(b,c) = 1$ then $\\gcd(a,c) = 1$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b,c:\\ \\gcd(a,b){=}1,\\ \\gcd(b,c){=}1 \\Rightarrow \\gcd(a,c){=}1",
          "explanation": "The claim asserts that coprimality is `transitive' through $b$; one triple breaking this disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need $a,b,c$ satisfying both hypotheses but with $a,c$ sharing a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "See why it can fail.",
          "workingLatex": "a \\text{ and } c \\text{ may share a factor that } b \\text{ avoids}",
          "explanation": "Coprimality with $b$ says nothing about how $a$ and $c$ relate to each other, so let $a,c$ share a factor that $b$ lacks.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a shared factor for a and c.",
          "workingLatex": "a = 2, \\quad c = 2",
          "explanation": "Let $a$ and $c$ both be $2$ so they share the factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose b coprime to both.",
          "workingLatex": "b = 3",
          "explanation": "Pick $b=3$, which shares no factor with $2$, so both hypotheses can hold.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the first hypothesis.",
          "workingLatex": "\\gcd(2,3) = 1",
          "explanation": "$2$ and $3$ are coprime, so $\\gcd(a,b)=1$ holds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the second hypothesis.",
          "workingLatex": "\\gcd(3,2) = 1",
          "explanation": "$3$ and $2$ are coprime, so $\\gcd(b,c)=1$ holds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the conclusion.",
          "workingLatex": "\\gcd(2,2) = 2 \\neq 1",
          "explanation": "But $\\gcd(a,c)=\\gcd(2,2)=2$, so $a$ and $c$ are not coprime — the conclusion fails.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $a=2,\\ b=3,\\ c=2$ both hypotheses hold but $\\gcd(a,c)=2$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=2,\\ b=3,\\ c=2$: then $\\gcd(a,b)=\\gcd(b,c)=1$, but $\\gcd(a,c)=\\gcd(2,2)=2\\neq1$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes"
    ],
    "questionText": "Disprove the statement: ``Every integer greater than $1$ can be written as the sum of two prime numbers.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n > 1:\\ n = p + q \\text{ with } p, q \\text{ prime}",
          "explanation": "The claim covers *all* integers above $1$ (Goldbach's conjecture is only about even numbers); one integer that is not such a sum disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single integer that cannot be split into two primes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Focus on odd numbers.",
          "workingLatex": "n \\text{ odd} \\Rightarrow \\text{one prime must be } 2",
          "explanation": "An odd sum of two primes needs one even prime, namely $2$, so $n$ would have to equal $2 + (\\text{prime})$; if $n-2$ is composite, $n$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose an odd number with n − 2 composite.",
          "workingLatex": "n = 11 \\Rightarrow n - 2 = 9",
          "explanation": "Take $n=11$; then $n-2 = 9$, which is composite, so the only chance $2+9$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check all splittings.",
          "workingLatex": "2+9,\\ 3+8,\\ 5+6,\\ 7+4",
          "explanation": "We list the ways to write $11$ as an ordered sum and test whether both parts are prime.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate each pair.",
          "workingLatex": "9,8,6,4 \\text{ are all composite}",
          "explanation": "In every splitting one part ($9,8,6$ or $4$) is composite, so no pair of primes sums to $11$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm 11 is not such a sum.",
          "workingLatex": "11 \\neq p + q \\text{ for primes } p,q",
          "explanation": "Since every candidate pair fails, $11$ cannot be written as a sum of two primes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note why odd numbers are the weak point.",
          "workingLatex": "11 - 2 = 9 = 3 \\times 3 \\text{ is composite}",
          "explanation": "The only way an odd number is a sum of two primes is $2+(\\text{prime})$, but $11-2=9$ is composite, sealing the failure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The integer $11>1$ is not a sum of two primes, so the claim is disproved. (Goldbach's conjecture concerns only *even* integers.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=11$: the splittings $2{+}9,\\,3{+}8,\\,5{+}6,\\,7{+}4$ each contain a composite number, so $11$ is not a sum of two primes. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "parity"
    ],
    "questionText": "Disprove the statement: ``The sum of any two consecutive prime numbers is even.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{consecutive primes } p, q:\\ p + q \\text{ is even}",
          "explanation": "The claim asserts the sum is *always* even; one consecutive pair with an odd sum disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair of consecutive primes whose sum is odd.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "See why it usually looks true.",
          "workingLatex": "\\text{odd} + \\text{odd} = \\text{even}",
          "explanation": "Most primes are odd, and two odds sum to an even number, which makes the claim seem right — but $2$ is an even prime.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the first two primes.",
          "workingLatex": "p = 2, \\quad q = 3",
          "explanation": "The very first consecutive prime pair is $2$ and $3$, and $2$ is the exceptional even prime.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm they are consecutive primes.",
          "workingLatex": "2, 3 \\text{ with no prime between them}",
          "explanation": "There is no prime strictly between $2$ and $3$, so they are genuinely consecutive primes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add them.",
          "workingLatex": "2 + 3 = 5",
          "explanation": "Their sum is $5$, which we now test for parity to challenge the claim.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the parity.",
          "workingLatex": "5 \\text{ is odd}",
          "explanation": "Since $5$ is odd, this pair of consecutive primes breaks the claim.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the exception.",
          "workingLatex": "\\text{even} + \\text{odd} = \\text{odd}",
          "explanation": "Because one of the primes is the even prime $2$, the sum is even $+$ odd $=$ odd, unlike the odd+odd case.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The consecutive primes $2$ and $3$ sum to $5$, which is odd, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take the consecutive primes $2$ and $3$: their sum is $5$, which is odd. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "geometry",
      "quadrilaterals"
    ],
    "questionText": "Disprove the statement: ``Any quadrilateral with all four sides equal in length is a square.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{quadrilaterals with 4 equal sides}:\\ \\text{square}",
          "explanation": "The claim asserts that equal sides force a square; one equal-sided quadrilateral that is not a square disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single four-equal-sided quadrilateral that is not a square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall what a square also requires.",
          "workingLatex": "\\text{square} = \\text{equal sides} + \\text{right angles}",
          "explanation": "A square needs both equal sides *and* right angles; a shape can have equal sides without right angles.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Construct a rhombus.",
          "workingLatex": "\\text{4 sides of length } 1,\\ \\text{angles } 60^\\circ \\text{ and } 120^\\circ",
          "explanation": "A rhombus with side $1$ and interior angles $60^\\circ$ and $120^\\circ$ has all sides equal but is `pushed over'.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm all four sides are equal.",
          "workingLatex": "\\text{all sides} = 1",
          "explanation": "By construction every side has length $1$, so the shape genuinely satisfies the hypothesis `all four sides equal'.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check its angles.",
          "workingLatex": "60^\\circ \\neq 90^\\circ",
          "explanation": "Its angles are not right angles, so it fails the square's angle condition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare areas to confirm.",
          "workingLatex": "\\text{rhombus area} = 1^2 \\sin 60^\\circ = \\tfrac{\\sqrt3}{2} \\approx 0.87",
          "explanation": "Its area is $\\sin 60^\\circ\\approx0.87$, whereas a unit square has area $1$ — numerical confirmation that it is not a square.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the shape.",
          "workingLatex": "\\text{this is a (non-square) rhombus}",
          "explanation": "A four-equal-sided quadrilateral that is not a square is precisely a rhombus.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "A rhombus with $60^\\circ$ angles has four equal sides but is not a square, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "A rhombus with side $1$ and angles $60^\\circ, 120^\\circ$ has four equal sides but is not a square (its angles are not $90^\\circ$, and its area $\\tfrac{\\sqrt3}{2}\\neq1$). Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "geometry",
      "area",
      "perimeter"
    ],
    "questionText": "Disprove the statement: ``Any two rectangles with the same area have the same perimeter.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{rectangles } R_1, R_2:\\ \\text{equal area} \\Rightarrow \\text{equal perimeter}",
          "explanation": "The claim asserts equal area forces equal perimeter; two equal-area rectangles with different perimeters disprove it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair of rectangles with the same area but different perimeters.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fix a common area.",
          "workingLatex": "\\text{area} = 12",
          "explanation": "We choose area $12$ and find two different rectangles achieving it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Pick two factor pairs of 12.",
          "workingLatex": "1 \\times 12 \\quad \\text{and} \\quad 3 \\times 4",
          "explanation": "Both $1\\times12$ and $3\\times4$ have area $12$, but very different shapes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the first perimeter.",
          "workingLatex": "P_1 = 2(1 + 12) = 26",
          "explanation": "The long thin rectangle has perimeter $26$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the second perimeter.",
          "workingLatex": "P_2 = 2(3 + 4) = 14",
          "explanation": "The more compact rectangle has perimeter $14$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare.",
          "workingLatex": "26 \\neq 14",
          "explanation": "Same area, but the perimeters differ substantially.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the intuition.",
          "workingLatex": "\\text{elongating a rectangle raises its perimeter}",
          "explanation": "Area fixes the product of the sides, but perimeter depends on their sum, which grows as the rectangle is stretched.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The $1\\times12$ and $3\\times4$ rectangles have equal area $12$ but perimeters $26$ and $14$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "A $1 \\times 12$ rectangle and a $3 \\times 4$ rectangle both have area $12$, but their perimeters are $26$ and $14$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes"
    ],
    "questionText": "Disprove the claim that ``if $p$ is prime, then $p^2 + p + 1$ is also prime.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{primes } p:\\ p^2 + p + 1 \\text{ is prime}",
          "explanation": "The claim asserts primality of $p^2+p+1$ for *every* prime $p$; one prime giving a composite value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one prime $p$ for which $p^2+p+1$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check p = 2.",
          "workingLatex": "2^2 + 2 + 1 = 7 \\text{ (prime)}",
          "explanation": "For $p=2$ the value is $7$, which is prime.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check p = 3.",
          "workingLatex": "3^2 + 3 + 1 = 13 \\text{ (prime)}",
          "explanation": "For $p=3$ the value is $13$, again prime.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check p = 5.",
          "workingLatex": "5^2 + 5 + 1 = 31 \\text{ (prime)}",
          "explanation": "For $p=5$ the value is $31$, prime — so the first three primes all work.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Move to p = 7.",
          "workingLatex": "p = 7",
          "explanation": "We continue to the next prime, $p=7$, to test whether the pattern holds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the expression.",
          "workingLatex": "7^2 + 7 + 1 = 49 + 7 + 1 = 57",
          "explanation": "Substituting $p=7$ gives $57$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the result.",
          "workingLatex": "57 = 3 \\times 19",
          "explanation": "Since $5+7=12$ is divisible by $3$, so is $57$; indeed $57 = 3\\times19$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is composite.",
          "workingLatex": "57 \\text{ has divisor } 3 \\Rightarrow \\text{composite}",
          "explanation": "With a proper divisor $3$, the number $57$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confront the claim.",
          "workingLatex": "p = 7 \\text{ prime, but } 57 \\text{ composite}",
          "explanation": "Here $p=7$ is prime yet $p^2+p+1$ is composite, contradicting the claim.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the pattern.",
          "workingLatex": "\\text{three primes, then a composite}",
          "explanation": "Three initial successes did not guarantee the rest — a recurring warning in disproof by counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the earlier cases.",
          "workingLatex": "7, 13, 31 \\text{ all prime}",
          "explanation": "This confirms $p=7$ is the first failure, so the counterexample is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $p=7$, $p^2+p+1 = 57 = 3\\times19$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For the prime $p=7$: $p^2+p+1 = 57 = 3 \\times 19$, which is composite. Hence ``$p$ prime $\\Rightarrow p^2+p+1$ prime'' is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes"
    ],
    "questionText": "Disprove the claim that ``$6n + 1$ is prime for every positive integer $n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ 6n + 1 \\text{ is prime}",
          "explanation": "The claim asserts primality for *every* $n$; one composite value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $n$ for which $6n+1$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check n = 1.",
          "workingLatex": "6(1) + 1 = 7 \\text{ (prime)}",
          "explanation": "For $n=1$ the value is $7$, which is prime.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check n = 2.",
          "workingLatex": "6(2) + 1 = 13 \\text{ (prime)}",
          "explanation": "For $n=2$ the value is $13$, prime.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check n = 3.",
          "workingLatex": "6(3) + 1 = 19 \\text{ (prime)}",
          "explanation": "For $n=3$ the value is $19$, prime — the pattern is holding so far.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Move to n = 4.",
          "workingLatex": "n = 4",
          "explanation": "We test the next value, $n=4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the expression.",
          "workingLatex": "6(4) + 1 = 25",
          "explanation": "Substituting $n=4$ gives $25$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the result.",
          "workingLatex": "25 = 5 \\times 5 = 5^2",
          "explanation": "The value $25$ is $5$ squared, hence composite.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is composite.",
          "workingLatex": "25 \\text{ has divisor } 5 \\Rightarrow \\text{composite}",
          "explanation": "With the proper divisor $5$, the number $25$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confront the claim.",
          "workingLatex": "6(4)+1 = 25 \\text{ is not prime}",
          "explanation": "At $n=4$ the value is composite, contradicting the claim.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the broader point.",
          "workingLatex": "\\text{`of the form } 6n+1\\text{' does not force primality}",
          "explanation": "While every prime $>3$ has the form $6n\\pm1$, the converse fails: not every $6n+1$ is prime.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the earlier cases.",
          "workingLatex": "7, 13, 19 \\text{ all prime}",
          "explanation": "This confirms $n=4$ is the first failure.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $n=4$, $6n+1 = 25 = 5^2$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=4$: $6n+1 = 25 = 5^2$, which is composite. Hence ``$6n+1$ is prime for every positive integer $n$'' is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities",
      "factorials"
    ],
    "questionText": "Disprove the claim that ``$n! > 2^n$ for every positive integer $n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ n! > 2^n",
          "explanation": "The claim asserts the inequality for *all* positive integers; one $n$ where it fails disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single $n$ for which $n! > 2^n$ is false.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the smallest case.",
          "workingLatex": "n = 1",
          "explanation": "Small values are where factorials lag behind powers, so we start at $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate both sides at n = 1.",
          "workingLatex": "1! = 1, \\quad 2^1 = 2",
          "explanation": "Here $n! = 1$ and $2^n = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare.",
          "workingLatex": "1 > 2 \\text{ is false}",
          "explanation": "Since $1 < 2$, the inequality fails immediately at $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check nearby cases too.",
          "workingLatex": "n=2: 2 > 4 \\text{ false},\\ \\ n=3: 6 > 8 \\text{ false}",
          "explanation": "The inequality also fails at $n=2$ and $n=3$, so the claim is wrong for several small values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find where it starts to hold.",
          "workingLatex": "n = 4: 24 > 16 \\ \\checkmark",
          "explanation": "Only from $n=4$ onward does $n!$ overtake $2^n$, because each new factor eventually exceeds $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the early failure.",
          "workingLatex": "\\text{first factors } 1, 2 \\text{ do not exceed } 2",
          "explanation": "The factorial's early factors ($1$ and $2$) fail to keep pace with the doubling of $2^n$, so it starts behind.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Focus on the cleanest counterexample.",
          "workingLatex": "n = 1: 1! = 1 < 2 = 2^1",
          "explanation": "The value $n=1$ is the simplest single counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confront the claim.",
          "workingLatex": "1! > 2^1 \\text{ is false}",
          "explanation": "At $n=1$ the strict inequality does not hold.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the correct qualified statement.",
          "workingLatex": "n! > 2^n \\text{ holds only for } n \\ge 4",
          "explanation": "The inequality is true for $n\\ge4$, but the universal `for every $n$' version is false.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the counterexample.",
          "workingLatex": "n = 1 \\ge 1, \\quad 1! = 1 < 2",
          "explanation": "The value $n=1$ is a valid positive integer that violates the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $n=1$ (also $n=2,3$), $n! < 2^n$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=1$: then $n! = 1$ but $2^n = 2$, so $n! > 2^n$ fails (it also fails at $n=2,3$). Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "geometry",
      "area",
      "perimeter"
    ],
    "questionText": "Disprove the claim that ``any two shapes with the same perimeter have the same area.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{shapes } A, B:\\ \\text{equal perimeter} \\Rightarrow \\text{equal area}",
          "explanation": "The claim asserts equal perimeter forces equal area; two equal-perimeter shapes with different areas disprove it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair of shapes with the same perimeter but different areas.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Restrict to rectangles for simplicity.",
          "workingLatex": "\\text{use two rectangles with perimeter } 16",
          "explanation": "Rectangles make area and perimeter easy to compute, so we fix a common perimeter of $16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a square.",
          "workingLatex": "4 \\times 4:\\ P = 2(4+4) = 16",
          "explanation": "A $4\\times4$ square has perimeter $16$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose a different rectangle with the same perimeter.",
          "workingLatex": "6 \\times 2:\\ P = 2(6+2) = 16",
          "explanation": "A $6\\times2$ rectangle also has perimeter $16$, since $6+2 = 4+4 = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the first area.",
          "workingLatex": "\\text{area}(4 \\times 4) = 16",
          "explanation": "The square's area is $4\\times4 = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the second area.",
          "workingLatex": "\\text{area}(6 \\times 2) = 12",
          "explanation": "The rectangle's area is $6\\times2 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare.",
          "workingLatex": "16 \\neq 12",
          "explanation": "Same perimeter, but the areas differ.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the intuition.",
          "workingLatex": "\\text{fixed perimeter fixes the sum of sides, not the product}",
          "explanation": "Perimeter fixes the sum of the side lengths, whereas area is their product, which changes as the rectangle becomes less square.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the extremal case.",
          "workingLatex": "\\text{the square maximises area for a fixed perimeter}",
          "explanation": "Among rectangles of a given perimeter the square has the largest area, so other rectangles have strictly smaller area.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the counterexample.",
          "workingLatex": "P_1 = P_2 = 16, \\quad A_1 = 16 \\neq 12 = A_2",
          "explanation": "The two rectangles share perimeter $16$ but have different areas, exactly the required counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Generalise briefly.",
          "workingLatex": "\\text{the same holds for many shape pairs}",
          "explanation": "The phenomenon is general: equal perimeter does not pin down area, as this rectangle pair already shows.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The $4\\times4$ and $6\\times2$ rectangles have equal perimeter $16$ but areas $16$ and $12$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "A $4 \\times 4$ square and a $6 \\times 2$ rectangle both have perimeter $16$, but their areas are $16$ and $12$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "parity"
    ],
    "questionText": "Disprove the statement: ``If $a + b$ is even, then $a$ and $b$ are both even.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all integers.",
          "workingLatex": "\\forall\\ a,b:\\ a+b \\text{ even} \\Rightarrow a, b \\text{ both even}",
          "explanation": "The claim asserts an implication for *all* $a,b$; one pair with $a+b$ even but not both even disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair satisfying the hypothesis but failing the conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall when a sum is even.",
          "workingLatex": "\\text{odd} + \\text{odd} = \\text{even}",
          "explanation": "Two odd numbers also add to an even number, so we can keep both odd and still satisfy the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose two odd numbers.",
          "workingLatex": "a = 1, \\quad b = 3",
          "explanation": "With $a=1$ and $b=3$, both odd, the sum should still be even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the hypothesis.",
          "workingLatex": "a + b = 1 + 3 = 4 \\text{ (even)}",
          "explanation": "The sum $4$ is even, so the hypothesis holds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the conclusion.",
          "workingLatex": "1 \\text{ and } 3 \\text{ are both odd}",
          "explanation": "But neither $1$ nor $3$ is even, so `both even' is false.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $a=1,\\ b=3$ the sum is even yet both numbers are odd, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=1,\\ b=3$: then $a+b = 4$ is even, but both are odd. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "modulus"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $a$ and $b$, $|a - b| = |a| - |b|$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b:\\ |a-b| = |a| - |b|",
          "explanation": "The claim asserts equality for *all* $a,b$; one pair where the sides differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair making the two sides unequal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the right side can be negative.",
          "workingLatex": "|a| - |b| \\text{ may be } < 0",
          "explanation": "An absolute value $|a-b|$ is never negative, yet $|a|-|b|$ can be, so pick $|b|>|a|$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose values with |b| > |a|.",
          "workingLatex": "a = 1, \\quad b = 2",
          "explanation": "Here $|b|=2>1=|a|$, so the right side should turn negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "|1 - 2| = |-1| = 1",
          "explanation": "The left side is $|-1|=1$, a non-negative number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "|1| - |2| = 1 - 2 = -1",
          "explanation": "The right side is $1-2=-1$, which is negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "1 \\neq -1 \\Rightarrow \\text{the statement is false}",
          "explanation": "At $a=1,\\ b=2$ the sides are $1$ and $-1$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=1,\\ b=2$: then $|a-b| = 1$ but $|a|-|b| = -1$. Since $1 \\neq -1$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "squares",
      "parity"
    ],
    "questionText": "Disprove the statement: ``Every square number is even.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{square numbers } n^2:\\ n^2 \\text{ is even}",
          "explanation": "The claim asserts *every* perfect square is even; one odd square disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single perfect square that is odd.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the parity rule for squares.",
          "workingLatex": "n \\text{ odd} \\Rightarrow n^2 \\text{ odd}",
          "explanation": "The square of an odd number is odd, so squaring an odd base gives a counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose an odd base.",
          "workingLatex": "n = 3",
          "explanation": "We take $n=3$, an odd number, and square it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the square.",
          "workingLatex": "3^2 = 9",
          "explanation": "Squaring the odd base $3$ gives $3^2 = 9$, which we now test for parity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check its parity.",
          "workingLatex": "9 = 2 \\times 4 + 1 \\text{ is odd}",
          "explanation": "Since $9$ leaves remainder $1$ on division by $2$, it is odd, not even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The square number $9$ is odd, so the claim `every square number is even' is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$9 = 3^2$ is a square number, yet it is odd. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $x$, $x^2 > 0$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ x \\in \\mathbb{R}:\\ x^2 > 0",
          "explanation": "The claim asserts a *strict* inequality for all real $x$; one value where $x^2$ is not positive disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single real number whose square is not strictly greater than $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the exceptional value.",
          "workingLatex": "x = 0 \\Rightarrow x^2 = 0",
          "explanation": "Squares are non-negative, but zero squares to zero, which is not strictly positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose that value.",
          "workingLatex": "x = 0",
          "explanation": "We test $x=0$, the only real number with a zero square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the square.",
          "workingLatex": "0^2 = 0",
          "explanation": "The square of $0$ is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with zero.",
          "workingLatex": "0 > 0 \\text{ is false}",
          "explanation": "Since $0$ is not strictly greater than $0$, the inequality fails at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $x=0$, $x^2 = 0$ is not positive, so the claim is disproved. (The correct statement is $x^2\\ge0$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $x=0$: then $x^2 = 0$, which is not $>0$. Hence the statement is false (the correct claim is $x^2 \\ge 0$). $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities",
      "reciprocals"
    ],
    "questionText": "Disprove the statement: ``For every positive real number $x$, $\\dfrac{1}{x} < x$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ x > 0:\\ \\tfrac{1}{x} < x",
          "explanation": "The claim asserts the reciprocal is always smaller for positive $x$; one $x$ where $\\tfrac1x\\ge x$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single positive $x$ for which $\\tfrac1x<x$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "See where reciprocals are large.",
          "workingLatex": "0 < x < 1 \\Rightarrow \\tfrac{1}{x} > 1 > x",
          "explanation": "For $x$ between $0$ and $1$, the reciprocal exceeds $1$ and hence exceeds $x$, reversing the claim.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a value below 1.",
          "workingLatex": "x = \\tfrac{1}{2}",
          "explanation": "We test $x=\\tfrac12$, a positive number less than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the reciprocal.",
          "workingLatex": "\\tfrac{1}{x} = \\tfrac{1}{1/2} = 2",
          "explanation": "The reciprocal of $\\tfrac12$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with x.",
          "workingLatex": "2 < \\tfrac{1}{2} \\text{ is false}",
          "explanation": "Since $2 > \\tfrac12$, the claim $\\tfrac1x<x$ fails at $x=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $x=\\tfrac12$, $\\tfrac1x = 2 > \\tfrac12 = x$, so the claim is disproved. (It holds only for $x>1$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $x=\\tfrac12$: then $\\tfrac1x = 2$, which is greater than $\\tfrac12$. So $\\tfrac1x < x$ fails, and the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "modular arithmetic"
    ],
    "questionText": "Disprove the statement: ``Every prime number is of the form $6k + 1$ or $6k - 1$ for some integer $k$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{primes } p:\\ p = 6k \\pm 1",
          "explanation": "The claim asserts *every* prime has this form; one prime that does not disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single prime not congruent to $\\pm1$ modulo $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the residues that 6k ± 1 covers.",
          "workingLatex": "6k+1 \\equiv 1,\\quad 6k-1 \\equiv 5 \\pmod 6",
          "explanation": "Numbers of the form $6k\\pm1$ leave remainder $1$ or $5$ on division by $6$, so a prime with a different remainder is a counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Look at the small primes.",
          "workingLatex": "2, 3, 5, 7, 11, \\dots",
          "explanation": "The rule works from $5$ onward, but the first two primes deserve a check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the prime 3.",
          "workingLatex": "3 = 6(0) + 3 \\equiv 3 \\pmod 6",
          "explanation": "The prime $3$ leaves remainder $3$ modulo $6$, which is neither $1$ nor $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm 3 is not of the required form.",
          "workingLatex": "3 \\neq 6k \\pm 1",
          "explanation": "There is no integer $k$ with $6k\\pm1 = 3$, so $3$ escapes the pattern (and so does $2$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The prime $3$ is not of the form $6k\\pm1$, so the claim is disproved. (It is true only for primes $p>3$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "The prime $3$ leaves remainder $3$ modulo $6$, so it is not of the form $6k\\pm1$ (nor is $2$). Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "consecutive integers",
      "parity"
    ],
    "questionText": "Disprove the statement: ``The product of two consecutive integers is always odd.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n:\\ n(n+1) \\text{ is odd}",
          "explanation": "The claim asserts the product of consecutive integers is *always* odd; one even product disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair of consecutive integers whose product is even.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the parity of consecutive integers.",
          "workingLatex": "\\text{one of } n, n+1 \\text{ is even}",
          "explanation": "Among two consecutive integers one is always even, so their product should be even — the opposite of the claim.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a specific pair.",
          "workingLatex": "n = 2,\\ n+1 = 3",
          "explanation": "We test the consecutive integers $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the product.",
          "workingLatex": "2 \\times 3 = 6",
          "explanation": "Multiplying the consecutive integers $2$ and $3$ gives a product of $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the parity.",
          "workingLatex": "6 = 2 \\times 3 \\text{ is even}",
          "explanation": "Since $6$ is divisible by $2$, it is even, not odd.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The product $2\\times3 = 6$ is even, so the claim that such products are always odd is disproved (in fact they are always even).",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=2$: then $n(n+1) = 2 \\times 3 = 6$, which is even. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "inequalities",
      "cubes"
    ],
    "questionText": "Disprove the statement: ``For every integer $n$, $n^3 > n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\in \\mathbb{Z}:\\ n^3 > n",
          "explanation": "The claim covers *all* integers, including negatives; one integer where $n^3 \\le n$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single integer for which $n^3>n$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Notice positive integers past 1 obey it.",
          "workingLatex": "n = 2: 8 > 2",
          "explanation": "For $n\\ge2$ the cube exceeds the number, so the flaw must lie among small or negative integers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a negative value.",
          "workingLatex": "n = -2",
          "explanation": "We test $n=-2$, where cubing produces a more negative result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cube.",
          "workingLatex": "(-2)^3 = -8",
          "explanation": "The cube of $-2$ is $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with n.",
          "workingLatex": "-8 > -2 \\text{ is false}",
          "explanation": "Since $-8 < -2$, the inequality $n^3>n$ fails at $n=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $n=-2$, $n^3 = -8 < -2 = n$, so the claim is disproved by this counterexample.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=-2$: then $n^3 = -8$, which is less than $-2 = n$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "twin primes"
    ],
    "questionText": "Disprove the statement: ``If $p$ is an odd prime, then $p + 2$ is also prime.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all odd primes.",
          "workingLatex": "\\forall\\ \\text{odd primes } p:\\ p + 2 \\text{ is prime}",
          "explanation": "The claim asserts $p+2$ is prime for *every* odd prime $p$; one odd prime with $p+2$ composite disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single odd prime $p$ for which $p+2$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the twin-prime cases.",
          "workingLatex": "p=3: 5,\\quad p=5: 7 \\ (\\text{both prime})",
          "explanation": "For $p=3$ and $p=5$ the number $p+2$ is prime (these are twin-prime pairs), which makes the claim look plausible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move to p = 7.",
          "workingLatex": "p = 7",
          "explanation": "We test the next odd prime, $p=7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate p + 2.",
          "workingLatex": "7 + 2 = 9",
          "explanation": "Adding $2$ to the prime $7$ gives $p+2 = 9$, which we now test for primality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the result.",
          "workingLatex": "9 = 3 \\times 3",
          "explanation": "Since $9=3\\times3$, it is composite, not prime.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confront the claim.",
          "workingLatex": "p = 7 \\text{ prime, but } 9 \\text{ composite}",
          "explanation": "So $7$ is an odd prime for which $p+2$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on twin primes.",
          "workingLatex": "\\text{not every prime has a twin}",
          "explanation": "Twin primes like $(3,5)$ and $(5,7)$ exist, but they do not occur after every prime, so the universal claim fails.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $p=7$, $p+2 = 9 = 3^2$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take the odd prime $p=7$: then $p+2 = 9 = 3 \\times 3$, which is composite. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes"
    ],
    "questionText": "Disprove the statement: ``If $p$ is prime, then $2p + 1$ is also prime.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all primes.",
          "workingLatex": "\\forall\\ \\text{primes } p:\\ 2p + 1 \\text{ is prime}",
          "explanation": "The claim asserts $2p+1$ is prime for *every* prime $p$; one prime with $2p+1$ composite disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single prime $p$ for which $2p+1$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the small primes.",
          "workingLatex": "p=2: 5,\\ p=3: 7,\\ p=5: 11 \\ (\\text{all prime})",
          "explanation": "For $p=2,3,5$ the value $2p+1$ is prime (these are called Sophie Germain primes), so the claim seems to hold.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move to p = 7.",
          "workingLatex": "p = 7",
          "explanation": "We test the next prime, $p=7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate 2p + 1.",
          "workingLatex": "2(7) + 1 = 15",
          "explanation": "Substituting the prime $p=7$ gives $2p+1 = 2(7)+1 = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the result.",
          "workingLatex": "15 = 3 \\times 5",
          "explanation": "Since $15=3\\times5$, it is composite, not prime.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confront the claim.",
          "workingLatex": "p = 7 \\text{ prime, but } 15 \\text{ composite}",
          "explanation": "So $7$ is a prime for which $2p+1$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the earlier cases.",
          "workingLatex": "5, 7, 11 \\text{ all prime}",
          "explanation": "This confirms $p=7$ is the first failure, so the counterexample is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $p=7$, $2p+1 = 15 = 3\\times5$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take the prime $p=7$: then $2p+1 = 15 = 3 \\times 5$, which is composite. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "modular arithmetic"
    ],
    "questionText": "Disprove the statement: ``Every prime number greater than $2$ is congruent to $1$ modulo $4$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{primes } p > 2:\\ p \\equiv 1 \\pmod 4",
          "explanation": "The claim asserts *every* odd prime leaves remainder $1$ on division by $4$; one prime $\\equiv3$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single prime $p>2$ with $p\\equiv3\\pmod4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall odd primes split into two classes.",
          "workingLatex": "p \\equiv 1 \\text{ or } 3 \\pmod 4",
          "explanation": "Every odd number is $\\equiv1$ or $\\equiv3$ modulo $4$, so we look for a prime in the $\\equiv3$ class.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check some primes.",
          "workingLatex": "5 \\equiv 1,\\quad 13 \\equiv 1",
          "explanation": "Primes like $5$ and $13$ are $\\equiv1$, supporting the claim, but we must test others.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the prime 3.",
          "workingLatex": "3 = 4(0) + 3",
          "explanation": "The prime $3$ leaves remainder $3$ on division by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the residue.",
          "workingLatex": "3 \\equiv 3 \\pmod 4",
          "explanation": "So $3\\equiv3\\pmod4$, not $\\equiv1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confront the claim.",
          "workingLatex": "3 > 2 \\text{ is prime but } 3 \\not\\equiv 1 \\pmod 4",
          "explanation": "The prime $3$ exceeds $2$ yet is not $\\equiv1$ modulo $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note there are many such primes.",
          "workingLatex": "7 \\equiv 3,\\ 11 \\equiv 3,\\ 19 \\equiv 3 \\pmod 4",
          "explanation": "Infinitely many primes ($3,7,11,19,\\dots$) are $\\equiv3\\pmod4$, so the failure is widespread, not a fluke.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "The prime $3$ (and $7,11,\\dots$) is $\\equiv3\\pmod4$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "The prime $3 > 2$ satisfies $3 \\equiv 3 \\pmod 4$, not $1$. Hence the statement is false (primes like $7, 11, 19$ also fail). $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "Goldbach"
    ],
    "questionText": "Disprove the statement: ``Every even number greater than $2$ can be written as the sum of two \\emph{distinct} prime numbers.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{even } n > 2:\\ n = p + q,\\ p \\neq q \\text{ prime}",
          "explanation": "The claim strengthens Goldbach's conjecture by demanding the two primes be *distinct*; one even number needing equal primes disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single even $n>2$ that cannot be split into two *different* primes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look at the smallest candidate.",
          "workingLatex": "n = 4",
          "explanation": "The smallest even number greater than $2$ is $4$, where few primes are available.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List the primes available.",
          "workingLatex": "\\text{primes} \\le 4: 2, 3",
          "explanation": "Only the primes $2$ and $3$ are at most $4$, limiting the possible sums.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Try to write 4 as a sum of two primes.",
          "workingLatex": "4 = 2 + 2",
          "explanation": "The only way to write $4$ as a sum of two primes is $2+2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the distinctness condition.",
          "workingLatex": "2 = 2 \\Rightarrow \\text{not distinct}",
          "explanation": "But the two primes here are both $2$, so they are not distinct, violating the requirement.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rule out other splittings.",
          "workingLatex": "4 = 3 + 1,\\ 1 \\text{ not prime}",
          "explanation": "The only other splitting $3+1$ fails because $1$ is not prime, so no distinct-prime representation exists.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confront the claim.",
          "workingLatex": "4 \\neq p + q \\text{ with distinct primes}",
          "explanation": "The even number $4$ genuinely has no representation as a sum of two distinct primes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "Since $4$ requires $2+2$ (not distinct), the strengthened claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=4$: the only prime sum is $4 = 2 + 2$, whose primes are not distinct. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "surds",
      "algebra"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $a, b \\ge 0$, $\\left(\\sqrt{a} + \\sqrt{b}\\right)^2 = a + b$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b \\ge 0:\\ (\\sqrt a + \\sqrt b)^2 = a + b",
          "explanation": "The claim asserts an identity for *all* non-negative $a,b$; one pair where the sides differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair making the two sides unequal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the correct expansion.",
          "workingLatex": "(\\sqrt a + \\sqrt b)^2 = a + 2\\sqrt{ab} + b",
          "explanation": "Expanding the square leaves a cross term $2\\sqrt{ab}$, which the claim drops; a counterexample should make it non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose values with ab > 0.",
          "workingLatex": "a = 1, \\quad b = 1",
          "explanation": "With $a=b=1$ the cross term $2\\sqrt{ab}=2\\neq0$, so the sides should differ.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "(\\sqrt 1 + \\sqrt 1)^2 = (1+1)^2 = 4",
          "explanation": "The left side is $(1+1)^2 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "a + b = 1 + 1 = 2",
          "explanation": "The right side is $1+1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare.",
          "workingLatex": "4 \\neq 2",
          "explanation": "The two sides are unequal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pinpoint the missing term.",
          "workingLatex": "4 - 2 = 2 = 2\\sqrt{ab}",
          "explanation": "The gap of $2$ is exactly the cross term $2\\sqrt{ab}$ the claim ignored.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "At $a=b=1$ the sides are $4$ and $2$, so the identity is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=b=1$: then $(\\sqrt a+\\sqrt b)^2 = (1+1)^2 = 4$ but $a+b = 2$. Since $4 \\neq 2$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "indices"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $a$ and $b$, $2^a \\cdot 2^b = 2^{ab}$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b:\\ 2^a \\cdot 2^b = 2^{ab}",
          "explanation": "The claim asserts an index law for *all* $a,b$; one pair where the sides differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair making the two sides unequal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the correct index law.",
          "workingLatex": "2^a \\cdot 2^b = 2^{a+b}",
          "explanation": "Multiplying powers of the same base *adds* the exponents, giving $2^{a+b}$, not $2^{ab}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose values with a + b ≠ ab.",
          "workingLatex": "a = 2, \\quad b = 3",
          "explanation": "Here $a+b = 5$ while $ab = 6$, so the two exponents differ.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "2^2 \\cdot 2^3 = 4 \\cdot 8 = 32",
          "explanation": "The left side is $4\\times8 = 32$, i.e. $2^{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "2^{ab} = 2^{6} = 64",
          "explanation": "The right side is $2^{2\\times3} = 2^6 = 64$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare.",
          "workingLatex": "32 \\neq 64",
          "explanation": "The two sides are unequal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Pinpoint the error.",
          "workingLatex": "a + b = 5 \\neq 6 = ab",
          "explanation": "The mismatch traces to using $ab$ instead of the correct $a+b$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $a=2,\\ b=3$ the sides are $32$ and $64$, so the claim is disproved. (The correct law is $2^a\\cdot2^b = 2^{a+b}$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=2,\\ b=3$: then $2^a \\cdot 2^b = 32$ but $2^{ab} = 2^6 = 64$. Since $32 \\neq 64$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "geometry",
      "congruence",
      "area"
    ],
    "questionText": "Disprove the statement: ``If two triangles have the same area, then they are congruent.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all triangles.",
          "workingLatex": "\\forall\\ \\triangle_1, \\triangle_2:\\ \\text{equal area} \\Rightarrow \\text{congruent}",
          "explanation": "The claim asserts equal area forces congruence; two equal-area triangles that are not congruent disprove it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair of triangles with equal area but different shapes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the area formula.",
          "workingLatex": "\\text{area} = \\tfrac{1}{2} \\times \\text{base} \\times \\text{height}",
          "explanation": "Area depends only on the product of base and height, so different base/height pairs can give the same area.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the first triangle.",
          "workingLatex": "\\text{base } 4,\\ \\text{height } 3 \\Rightarrow \\text{area} = 6",
          "explanation": "A triangle with base $4$ and height $3$ has area $\\tfrac12\\times4\\times3 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the second triangle.",
          "workingLatex": "\\text{base } 6,\\ \\text{height } 2 \\Rightarrow \\text{area} = 6",
          "explanation": "A triangle with base $6$ and height $2$ also has area $\\tfrac12\\times6\\times2 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the areas match.",
          "workingLatex": "6 = 6",
          "explanation": "Both triangles have area $6$, satisfying the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show they are not congruent.",
          "workingLatex": "(4,3) \\neq (6,2)",
          "explanation": "Their base and height differ, so the triangles have different dimensions and cannot be congruent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the intuition.",
          "workingLatex": "\\text{same product, different factors}",
          "explanation": "Equal area only fixes the product base$\\times$height; the individual measurements — and hence the shapes — can still differ.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "Two triangles with bases/heights $(4,3)$ and $(6,2)$ both have area $6$ but are not congruent, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "A triangle with base $4$, height $3$ and one with base $6$, height $2$ both have area $6$, yet they are not congruent. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "divisibility"
    ],
    "questionText": "Disprove the statement: ``For every integer $n$, if $n$ is divisible by $2$ and by $4$, then $n$ is divisible by $8$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all integers.",
          "workingLatex": "\\forall\\ n:\\ (2 \\mid n \\text{ and } 4 \\mid n) \\Rightarrow 8 \\mid n",
          "explanation": "The claim asserts divisibility by $8$ follows from divisibility by $2$ and $4$; one $n$ failing this disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need an $n$ divisible by both $2$ and $4$ but not by $8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Spot the redundancy.",
          "workingLatex": "4 \\mid n \\Rightarrow 2 \\mid n",
          "explanation": "Divisibility by $4$ already implies divisibility by $2$, so the two conditions together only guarantee divisibility by $4$, not $8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a multiple of 4 that is not a multiple of 8.",
          "workingLatex": "n = 4",
          "explanation": "The number $4$ is divisible by $4$ (and hence by $2$) but is the classic example that is not divisible by $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the hypotheses.",
          "workingLatex": "2 \\mid 4 \\text{ and } 4 \\mid 4",
          "explanation": "Both $2$ and $4$ divide $4$, so the hypotheses hold.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the conclusion.",
          "workingLatex": "4 = 8(0) + 4, \\text{ so } 8 \\nmid 4",
          "explanation": "Dividing $4$ by $8$ leaves remainder $4$, so $8$ does not divide $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confront the claim.",
          "workingLatex": "2 \\mid 4,\\ 4 \\mid 4, \\text{ but } 8 \\nmid 4",
          "explanation": "The hypotheses hold yet the conclusion fails.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the correct implication.",
          "workingLatex": "(2 \\mid n \\text{ and } 4 \\mid n) \\Rightarrow 4 \\mid n",
          "explanation": "The conditions only force divisibility by $4$; concluding $8\\mid n$ over-reaches.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $n=4$, the hypotheses hold but $8\\nmid4$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=4$: it is divisible by $2$ and by $4$, but $8 \\nmid 4$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "number theory",
      "gcd",
      "lcm"
    ],
    "questionText": "Disprove the statement: ``For all positive integers $a$ and $b$, $\\gcd(a,b) \\times \\operatorname{lcm}(a,b) = a + b$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ a,b:\\ \\gcd(a,b) \\times \\operatorname{lcm}(a,b) = a + b",
          "explanation": "The claim asserts an identity for *all* $a,b$; one pair where the sides differ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair making the two sides unequal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the true identity.",
          "workingLatex": "\\gcd(a,b) \\times \\operatorname{lcm}(a,b) = a \\times b",
          "explanation": "The correct relation multiplies to $ab$, not $a+b$; a counterexample should have $ab \\neq a+b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose numbers with a common factor.",
          "workingLatex": "a = 4, \\quad b = 6",
          "explanation": "Taking $a=4,\\ b=6$ gives a shared factor and $ab=24 \\neq 10 = a+b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the gcd.",
          "workingLatex": "\\gcd(4,6) = 2",
          "explanation": "The greatest common divisor of $4$ and $6$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the lcm.",
          "workingLatex": "\\operatorname{lcm}(4,6) = 12",
          "explanation": "The lowest common multiple of $4$ and $6$ is $12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the left-hand side.",
          "workingLatex": "\\gcd \\times \\operatorname{lcm} = 2 \\times 12 = 24",
          "explanation": "The product is $2\\times12 = 24$ (which indeed equals $ab = 24$).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "a + b = 4 + 6 = 10",
          "explanation": "The right side is $4+6 = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "24 \\neq 10 \\Rightarrow \\text{the statement is false}",
          "explanation": "At $a=4,\\ b=6$ the sides are $24$ and $10$, so the claim is disproved. (The correct identity is $\\gcd\\times\\operatorname{lcm} = ab$.)",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=4,\\ b=6$: then $\\gcd \\times \\operatorname{lcm} = 2 \\times 12 = 24$, but $a+b = 10$. Since $24 \\neq 10$, the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "cubes",
      "algebra"
    ],
    "questionText": "Disprove the statement: ``For all real numbers $a$ and $b$, if $a^2 = b^2$ then $a^3 = b^3$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a conditional for all reals.",
          "workingLatex": "\\forall\\ a,b:\\ a^2 = b^2 \\Rightarrow a^3 = b^3",
          "explanation": "The claim asserts equal squares force equal cubes; one pair with $a^2=b^2$ but $a^3\\neq b^3$ disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need a single pair satisfying the hypothesis but failing the conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note squares lose sign but cubes keep it.",
          "workingLatex": "(-x)^2 = x^2 \\text{ but } (-x)^3 = -x^3",
          "explanation": "Squaring hides sign while cubing preserves it, so a number and its negative agree on squares but disagree on cubes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a number and its negative.",
          "workingLatex": "a = 2, \\quad b = -2",
          "explanation": "We pick $a=2$ and $b=-2$, negatives of each other.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the hypothesis.",
          "workingLatex": "a^2 = 4, \\quad b^2 = (-2)^2 = 4",
          "explanation": "Both squares equal $4$, so the hypothesis $a^2=b^2$ holds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the cubes.",
          "workingLatex": "a^3 = 8, \\quad b^3 = (-2)^3 = -8",
          "explanation": "The cubes are $8$ and $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the conclusion.",
          "workingLatex": "8 \\neq -8",
          "explanation": "The cubes are different, so the conclusion $a^3=b^3$ fails.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why.",
          "workingLatex": "a = -b \\Rightarrow a^3 = -b^3",
          "explanation": "Because $a$ and $b$ are negatives, their cubes are negatives of each other, hence unequal (unless both are $0$).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "With $a=2,\\ b=-2$, $a^2=b^2$ but $a^3=8\\neq-8=b^3$, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $a=2,\\ b=-2$: then $a^2 = b^2 = 4$, but $a^3 = 8$ and $b^3 = -8$, so $a^3 \\neq b^3$. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "prime-generating polynomial"
    ],
    "questionText": "Disprove the claim that ``$n^2 + n + 17$ is prime for every integer $n \\ge 0$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 0:\\ n^2 + n + 17 \\text{ is prime}",
          "explanation": "The claim asserts primality for *every* $n\\ge0$; one composite value disproves it, however long the initial run of primes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $n$ making $n^2+n+17$ composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify the early pattern.",
          "workingLatex": "n=0: 17,\\ n=1: 19,\\ n=2: 23,\\ n=3: 29",
          "explanation": "These values are all prime, and the run continues for a while, which is why the polynomial is a well-known prime generator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Look for structure forcing a factor of 17.",
          "workingLatex": "17 \\mid n^2 + n + 17 \\iff 17 \\mid n(n+1)",
          "explanation": "The value is a multiple of $17$ exactly when $17$ divides $n^2+n = n(n+1)$, and then it cannot be prime once it exceeds $17$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose n to create the factor.",
          "workingLatex": "n = 16 \\Rightarrow n + 1 = 17",
          "explanation": "Taking $n=16$ makes $n+1 = 17$, so $n(n+1)$ is a multiple of $17$ — a deliberate, structural choice.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the polynomial.",
          "workingLatex": "16^2 + 16 + 17 = 256 + 16 + 17 = 289",
          "explanation": "Substituting $n=16$ gives $289$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the result.",
          "workingLatex": "289 = 17 \\times 17 = 17^2",
          "explanation": "The value $289$ is $17$ squared, hence composite.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is composite.",
          "workingLatex": "289 \\text{ has divisor } 17 \\Rightarrow \\text{composite}",
          "explanation": "With the proper divisor $17$, the number $289$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confront the claim.",
          "workingLatex": "16^2 + 16 + 17 = 17^2 \\text{ is not prime}",
          "explanation": "At $n=16$ the polynomial produces a perfect square, contradicting the claim.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain why this was inevitable.",
          "workingLatex": "n = 16 \\text{ makes } n+1 = 17 \\text{ a factor}",
          "explanation": "Any prime-generating polynomial $n^2+n+c$ fails at $n=c-1$, because then $c$ divides the value — the run always ends.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the correct qualified statement.",
          "workingLatex": "n^2+n+17 \\text{ is prime only for } 0 \\le n \\le 15",
          "explanation": "The polynomial is prime for $n=0,\\dots,15$, but the universal claim over all $n\\ge0$ is false.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the earlier cases were prime.",
          "workingLatex": "n = 0, \\dots, 15 \\text{ all give primes}",
          "explanation": "This confirms $n=16$ is the first failure, so the counterexample is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $n=16$, $n^2+n+17 = 289 = 17^2$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $n=16$: $16^2+16+17 = 289 = 17^2$, which is composite. Hence ``$n^2+n+17$ is prime for every $n\\ge0$'' is false (it is prime only for $0\\le n\\le15$). $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes"
    ],
    "questionText": "Disprove the claim that ``$n^2 + 1$ is prime for every even positive integer $n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{even } n \\ge 2:\\ n^2 + 1 \\text{ is prime}",
          "explanation": "The claim asserts primality of $n^2+1$ for *every* even $n$; one even $n$ giving a composite value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one even $n$ for which $n^2+1$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check n = 2.",
          "workingLatex": "2^2 + 1 = 5 \\text{ (prime)}",
          "explanation": "For $n=2$ the value is $5$, which is prime.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check n = 4.",
          "workingLatex": "4^2 + 1 = 17 \\text{ (prime)}",
          "explanation": "For $n=4$ the value is $17$, again prime.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check n = 6.",
          "workingLatex": "6^2 + 1 = 37 \\text{ (prime)}",
          "explanation": "For $n=6$ the value is $37$, prime — the first three even values all work.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Move to n = 8.",
          "workingLatex": "n = 8",
          "explanation": "We test the next even number, $n=8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the expression.",
          "workingLatex": "8^2 + 1 = 64 + 1 = 65",
          "explanation": "Substituting $n=8$ gives $65$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the result.",
          "workingLatex": "65 = 5 \\times 13",
          "explanation": "Since $65$ ends in $5$ it is divisible by $5$, giving $65 = 5\\times13$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is composite.",
          "workingLatex": "65 \\text{ has divisor } 5 \\Rightarrow \\text{composite}",
          "explanation": "With the proper divisor $5$, the number $65$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confront the claim.",
          "workingLatex": "8^2 + 1 = 65 \\text{ is not prime}",
          "explanation": "At $n=8$ the value is composite, contradicting the claim.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the pattern.",
          "workingLatex": "\\text{three primes, then a composite}",
          "explanation": "The first three even values gave primes, once again showing a short run of successes proves nothing.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the earlier cases.",
          "workingLatex": "5, 17, 37 \\text{ all prime}",
          "explanation": "This confirms $n=8$ is the first even failure, so the counterexample is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $n=8$, $n^2+1 = 65 = 5\\times13$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For the even number $n=8$: $n^2+1 = 65 = 5 \\times 13$, which is composite. Hence the statement is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "prime-generating polynomial"
    ],
    "questionText": "The polynomial $n^2 - 79n + 1601$ produces primes for a remarkably long run of values. Disprove the claim that ``$n^2 - 79n + 1601$ is prime for every integer $n \\ge 0$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 0:\\ n^2 - 79n + 1601 \\text{ is prime}",
          "explanation": "The claim asserts primality for *every* $n\\ge0$; one composite value disproves it, no matter how long the prime run.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $n$ making the value composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the impressive early behaviour.",
          "workingLatex": "n=0: 1601,\\ n=1: 1523,\\ n=2: 1447 \\ (\\text{all prime})",
          "explanation": "This polynomial is famous for producing primes for every $n$ from $0$ to $79$, which makes the universal claim very tempting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate it to a known prime generator.",
          "workingLatex": "n^2 - 79n + 1601 = (n-40)^2 + (n-40) + 41",
          "explanation": "Substituting $m = n-40$ turns it into Euler's $m^2+m+41$, so it must fail where that polynomial fails, namely $m=40$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Translate the failure point.",
          "workingLatex": "m = 40 \\iff n = 80",
          "explanation": "Euler's polynomial fails at $m=40$, corresponding to $n = m+40 = 80$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the polynomial at n = 80.",
          "workingLatex": "80^2 - 79(80) + 1601 = 6400 - 6320 + 1601 = 1681",
          "explanation": "Substituting $n=80$ gives $1681$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the result.",
          "workingLatex": "1681 = 41 \\times 41 = 41^2",
          "explanation": "The value $1681$ is $41$ squared, hence composite.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is composite.",
          "workingLatex": "1681 \\text{ has divisor } 41 \\Rightarrow \\text{composite}",
          "explanation": "With the proper divisor $41$, the number $1681$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confront the claim.",
          "workingLatex": "80^2 - 79(80) + 1601 = 41^2 \\text{ is not prime}",
          "explanation": "At $n=80$ the polynomial produces a perfect square, contradicting the claim.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain the structural reason.",
          "workingLatex": "(n-40)^2 + (n-40) + 41 \\text{ fails at } n-40 = 40",
          "explanation": "The shift shows it is Euler's polynomial in disguise, so its long prime run (0–79) ends for exactly the same reason.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the correct qualified statement.",
          "workingLatex": "\\text{prime only for } 0 \\le n \\le 79",
          "explanation": "The polynomial is prime for $n=0,\\dots,79$ — an extraordinary $80$-term run — but the universal claim is still false.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reflect on the lesson.",
          "workingLatex": "80 \\text{ successes} \\neq \\text{a proof}",
          "explanation": "Even an $80$-value run of primes does not establish a universal claim; only a proof would, and here none exists.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the earlier cases.",
          "workingLatex": "n = 0, \\dots, 79 \\text{ all give primes}",
          "explanation": "This confirms $n=80$ is the first failure, so the counterexample is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $n=80$, $n^2-79n+1601 = 1681 = 41^2$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $n=80$: $80^2 - 79(80) + 1601 = 1681 = 41^2$, which is composite. (It equals Euler's $m^2+m+41$ with $m=n-40$.) Hence the claim is false — it is prime only for $0\\le n\\le79$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "factorisation"
    ],
    "questionText": "Disprove the claim that ``$n^4 + 4$ is composite for every positive integer $n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ n^4 + 4 \\text{ is composite}",
          "explanation": "The claim asserts $n^4+4$ is *never* prime; one $n$ giving a prime value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $n\\ge1$ for which $n^4+4$ is prime.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the Sophie Germain factorisation.",
          "workingLatex": "n^4 + 4 = (n^2 - 2n + 2)(n^2 + 2n + 2)",
          "explanation": "This identity shows $n^4+4$ factorises, which is why it is composite for most $n$ — but a factor can equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find when a factor equals 1.",
          "workingLatex": "n^2 - 2n + 2 = (n-1)^2 + 1 = 1 \\iff n = 1",
          "explanation": "The smaller factor $(n-1)^2+1$ equals $1$ only at $n=1$, collapsing the factorisation and giving the one chance to be prime.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at n = 1.",
          "workingLatex": "1^4 + 4 = 5",
          "explanation": "Substituting $n=1$ gives $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check primality.",
          "workingLatex": "5 \\text{ is prime}",
          "explanation": "The number $5$ has only divisors $1$ and $5$, so it is prime.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify via the factorisation.",
          "workingLatex": "n=1: (1)(5) = 5",
          "explanation": "With $n=1$ the factors are $1$ and $5$, so the `factorisation' is trivial and the value is genuinely prime.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confront the claim.",
          "workingLatex": "1^4 + 4 = 5 \\text{ is prime, not composite}",
          "explanation": "At $n=1$ the value is prime, contradicting the claim that it is always composite.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the pattern for larger n.",
          "workingLatex": "n=2: 20,\\ n=3: 85 \\ (\\text{composite})",
          "explanation": "For $n\\ge2$ both factors exceed $1$, so $n^4+4$ is indeed composite — the claim fails *only* at $n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain the single exception.",
          "workingLatex": "n = 1 \\text{ makes the smaller factor } 1",
          "explanation": "The claim is `almost' true: it fails at exactly one value, $n=1$, where the factorisation degenerates.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Restate the correct version.",
          "workingLatex": "n^4 + 4 \\text{ is composite for } n \\ge 2",
          "explanation": "The correct statement restricts to $n\\ge2$; extending it to all $n\\ge1$ makes it false.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the counterexample.",
          "workingLatex": "5 \\text{ prime} \\Rightarrow n=1 \\text{ works}",
          "explanation": "Since $5$ is prime, $n=1$ is a valid counterexample to the `always composite' claim.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $n=1$, $n^4+4 = 5$ is prime, so the claim that $n^4+4$ is always composite is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take $n=1$: then $n^4+4 = 5$, which is prime (the factorisation $(n^2-2n+2)(n^2+2n+2)$ degenerates to $1 \\times 5$). Hence the claim is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "prime-generating polynomial"
    ],
    "questionText": "Disprove the claim that ``$n^2 - n + 11$ is prime for every positive integer $n$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ n \\ge 1:\\ n^2 - n + 11 \\text{ is prime}",
          "explanation": "The claim asserts primality for *every* $n\\ge1$; one composite value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $n$ making $n^2-n+11$ composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify the early pattern.",
          "workingLatex": "n=1: 11,\\ n=2: 13,\\ n=3: 17,\\ n=4: 23",
          "explanation": "These values are all prime, and the run continues, which is why the polynomial looks like a prime generator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Look for a factor of 11.",
          "workingLatex": "11 \\mid n^2 - n + 11 \\iff 11 \\mid n(n-1)",
          "explanation": "The value is a multiple of $11$ exactly when $11$ divides $n^2-n = n(n-1)$, and then it cannot be prime once it exceeds $11$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose n to create the factor.",
          "workingLatex": "n = 11 \\Rightarrow n - 1 = 10,\\ n = 11",
          "explanation": "Taking $n=11$ makes the term $n$ itself a multiple of $11$, so $n(n-1)$ is divisible by $11$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the polynomial.",
          "workingLatex": "11^2 - 11 + 11 = 121 - 11 + 11 = 121",
          "explanation": "Substituting $n=11$ gives $121$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the result.",
          "workingLatex": "121 = 11 \\times 11 = 11^2",
          "explanation": "The value $121$ is $11$ squared, hence composite.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is composite.",
          "workingLatex": "121 \\text{ has divisor } 11 \\Rightarrow \\text{composite}",
          "explanation": "With the proper divisor $11$, the number $121$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confront the claim.",
          "workingLatex": "11^2 - 11 + 11 = 11^2 \\text{ is not prime}",
          "explanation": "At $n=11$ the polynomial produces a perfect square, contradicting the claim.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain the inevitability.",
          "workingLatex": "n = 11 \\text{ makes } 11 \\text{ a factor}",
          "explanation": "For $n^2-n+c$ the value at $n=c$ is $c^2$, always composite — so the prime run must end by $n=c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the correct qualified statement.",
          "workingLatex": "\\text{prime only for } 1 \\le n \\le 10",
          "explanation": "The polynomial is prime for $n=1,\\dots,10$, but the universal claim over all $n\\ge1$ is false.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the earlier cases.",
          "workingLatex": "n = 1, \\dots, 10 \\text{ all give primes}",
          "explanation": "This confirms $n=11$ is the first failure, so the counterexample is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $n=11$, $n^2-n+11 = 121 = 11^2$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $n=11$: $11^2 - 11 + 11 = 121 = 11^2$, which is composite. Hence ``$n^2-n+11$ is prime for every $n\\ge1$'' is false (it is prime only for $1\\le n\\le10$). $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "factorials"
    ],
    "questionText": "Disprove the claim that ``$p! + 1$ is prime for every prime number $p$.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ \\text{primes } p:\\ p! + 1 \\text{ is prime}",
          "explanation": "The claim asserts primality of $p!+1$ for *every* prime $p$; one prime giving a composite value disproves it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one prime $p$ for which $p!+1$ is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check p = 2.",
          "workingLatex": "2! + 1 = 2 + 1 = 3 \\text{ (prime)}",
          "explanation": "For $p=2$ the value is $3$, which is prime.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check p = 3.",
          "workingLatex": "3! + 1 = 6 + 1 = 7 \\text{ (prime)}",
          "explanation": "For $p=3$ the value is $7$, again prime, so the claim holds for the first two primes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Move to p = 5.",
          "workingLatex": "p = 5",
          "explanation": "The next prime is $5$; we test $5!+1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the factorial.",
          "workingLatex": "5! = 1 \\times 2 \\times 3 \\times 4 \\times 5 = 120",
          "explanation": "The factorial $5!$ equals $120$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 1.",
          "workingLatex": "5! + 1 = 121",
          "explanation": "So the value at $p=5$ is $121$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the result.",
          "workingLatex": "121 = 11 \\times 11 = 11^2",
          "explanation": "The value $121$ is $11$ squared, hence composite.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is composite.",
          "workingLatex": "121 \\text{ has divisor } 11 \\Rightarrow \\text{composite}",
          "explanation": "With the proper divisor $11$, the number $121$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confront the claim.",
          "workingLatex": "5! + 1 = 121 \\text{ is not prime}",
          "explanation": "At the prime $p=5$ the value is composite, contradicting the claim.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the pattern.",
          "workingLatex": "\\text{prime for } p=2,3 \\text{ then composite at } p=5",
          "explanation": "Two successes were not enough to guarantee the rest — the recurring lesson of disproof by counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the earlier cases.",
          "workingLatex": "3, 7 \\text{ prime}",
          "explanation": "This confirms $p=5$ is the first failure among primes, so the counterexample is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $p=5$, $p!+1 = 121 = 11^2$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For the prime $p=5$: $p! + 1 = 121 = 11^2$, which is composite. Hence ``$p!+1$ is prime for every prime $p$'' is false. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.disproof.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Disproof by counterexample",
    "subtopicId": "al.y1.pure.disproof",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "counterexample",
    "tags": [
      "disproof",
      "counterexample",
      "primes",
      "primorial"
    ],
    "questionText": "Let $p_1, p_2, \\dots$ be the primes in order. Disprove the claim that ``the product of the first $k$ primes, plus $1$, is always prime.''",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the claim as a universal statement.",
          "workingLatex": "\\forall\\ k:\\ (p_1 p_2 \\cdots p_k) + 1 \\text{ is prime}",
          "explanation": "These `primorial plus one' numbers appear in Euclid's proof of the infinitude of primes. The claim that they are *always* prime needs only one composite value to fail.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the disproof principle.",
          "workingLatex": "\\text{one counterexample suffices}",
          "explanation": "We need just one $k$ for which the primorial plus one is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the first four cases.",
          "workingLatex": "3,\\ 7,\\ 31,\\ 211",
          "explanation": "For $k=1,2,3,4$ we get $2{+}1{=}3$, $6{+}1{=}7$, $30{+}1{=}31$, $210{+}1{=}211$ — all prime.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the fifth case.",
          "workingLatex": "2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 + 1 = 2311 \\text{ (prime)}",
          "explanation": "For $k=5$ the value $2311$ is also prime, so the first five cases all work — a convincing run.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Move to k = 6.",
          "workingLatex": "k = 6",
          "explanation": "We include the sixth prime, $13$, and test the resulting number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the product of the first six primes.",
          "workingLatex": "2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 = 30030",
          "explanation": "The product of the first six primes is $30030$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 1.",
          "workingLatex": "30030 + 1 = 30031",
          "explanation": "So the sixth primorial-plus-one is $30031$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the result.",
          "workingLatex": "30031 = 59 \\times 509",
          "explanation": "Testing primes, $30031$ is divisible by $59$, giving $30031 = 59\\times509$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is composite.",
          "workingLatex": "30031 \\text{ has divisor } 59 \\Rightarrow \\text{composite}",
          "explanation": "With the proper divisor $59$, the number $30031$ is not prime.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confront the claim.",
          "workingLatex": "30031 = 59 \\times 509 \\text{ is composite}",
          "explanation": "At $k=6$ the primorial plus one is composite, contradicting the claim.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Clarify the subtlety.",
          "workingLatex": "59, 509 \\text{ are new primes, not among } p_1, \\dots, p_6",
          "explanation": "Euclid's argument only guarantees a *new* prime factor (here $59$), not that the number itself is prime — a common misreading the claim makes.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the earlier cases.",
          "workingLatex": "3, 7, 31, 211, 2311 \\text{ all prime}",
          "explanation": "This confirms $k=6$ is the first failure, so the counterexample is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reflect on the lesson.",
          "workingLatex": "\\text{five primes, then a composite}",
          "explanation": "Five successes did not make a proof; the sixth case breaks the pattern, illustrating disproof by counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "\\text{the statement is false}",
          "explanation": "For $k=6$, $(p_1\\cdots p_6)+1 = 30031 = 59\\times509$ is composite, so the claim is disproved.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $k=6$: $2\\cdot3\\cdot5\\cdot7\\cdot11\\cdot13 + 1 = 30031 = 59 \\times 509$, which is composite. Hence the claim is false (Euclid's argument only guarantees a new prime *factor*, not primality). $\\blacksquare$"
    }
  }
];
