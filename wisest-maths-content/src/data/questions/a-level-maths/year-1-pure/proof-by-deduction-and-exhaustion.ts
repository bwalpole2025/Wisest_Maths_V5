import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.proof-deduction.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "odd numbers"
    ],
    "questionText": "Prove by deduction that the sum of any two consecutive integers is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent a general integer with a letter.",
          "workingLatex": "n \\in \\mathbb{Z}",
          "explanation": "To prove a statement about *any* two consecutive integers, we use a letter $n$ to stand for the first one. Whatever we prove about $n$ then holds for every integer at once, so a single argument covers all cases.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the next consecutive integer.",
          "workingLatex": "n \\text{ and } n+1",
          "explanation": "'Consecutive' means the numbers follow one after another, so the second integer is exactly one more than the first: $n+1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the sum of the two integers.",
          "workingLatex": "S = n + (n+1)",
          "explanation": "The claim is about their sum, so we add the two expressions. Keeping everything in terms of $n$ lets the algebra do the reasoning for us.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the sum.",
          "workingLatex": "S = 2n + 1",
          "explanation": "Collecting the two $n$ terms gives $2n$, and the constant is $1$. Writing the sum in this compact form is what reveals its structure.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the standard form of an odd number.",
          "workingLatex": "S = 2n + 1",
          "explanation": "Any integer of the form $2 \\times (\\text{integer}) + 1$ is odd, because $2n$ is even and adding $1$ lands us on the next number up, which cannot be even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Justify that the two components behave as needed.",
          "workingLatex": "2n \\text{ even}, \\quad 2n+1 \\text{ odd}",
          "explanation": "Since $n$ is an integer, $2n$ is a whole number of twos, i.e. even. An even number plus one is always odd, with no exceptions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "S = 2n+1 \\text{ is odd for all } n \\in \\mathbb{Z}",
          "explanation": "The sum simplified to the exact form that defines an odd number, and this held for a completely general $n$. That is precisely what a proof by deduction requires.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sum is $n+(n+1)=2n+1$, which has the form (even)$+1$ and is therefore odd for every integer $n$. Hence the sum of any two consecutive integers is odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "divisibility"
    ],
    "questionText": "Prove by deduction that the sum of any three consecutive integers is divisible by $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let the first integer be general.",
          "workingLatex": "n \\in \\mathbb{Z}",
          "explanation": "Using $n$ for the first of the three integers means our conclusion will automatically apply to every possible starting value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the next two consecutive integers.",
          "workingLatex": "n,\\; n+1,\\; n+2",
          "explanation": "Consecutive integers increase by $1$ each time, so the three numbers are $n$, $n+1$ and $n+2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the three integers.",
          "workingLatex": "S = n + (n+1) + (n+2)",
          "explanation": "The statement concerns their total, so we sum them and keep everything in terms of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify by collecting like terms.",
          "workingLatex": "S = 3n + 3",
          "explanation": "There are three $n$ terms giving $3n$, and the constants $1$ and $2$ give $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out the common factor of 3.",
          "workingLatex": "S = 3(n+1)",
          "explanation": "Factoring is the key move: it exposes a factor of $3$ explicitly, which is exactly the property we are trying to prove.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the factored form.",
          "workingLatex": "S = 3 \\times (n+1), \\quad n+1 \\in \\mathbb{Z}",
          "explanation": "Because $n+1$ is an integer, $S$ is $3$ multiplied by a whole number. By definition that means $S$ is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "3 \\mid S \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "We reached $3(n+1)$ from a general starting integer, so divisibility by $3$ holds for every set of three consecutive integers.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sum is $n+(n+1)+(n+2)=3n+3=3(n+1)$. As $n+1$ is an integer, the sum is a multiple of $3$. Hence the sum of any three consecutive integers is divisible by $3$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "proof by exhaustion",
      "prime numbers",
      "even numbers"
    ],
    "questionText": "Prove by exhaustion that every even number $k$ with $4 \\le k \\le 12$ can be written as the sum of two prime numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what proof by exhaustion requires.",
          "workingLatex": "\\text{check every case in the range}",
          "explanation": "Proof by exhaustion works when there are only finitely many cases: we simply verify the claim for each one. Here the range is small enough to list completely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List all the even numbers in the range.",
          "workingLatex": "k \\in \\{4, 6, 8, 10, 12\\}",
          "explanation": "The even numbers from $4$ to $12$ inclusive are these five values. Listing them makes the finite set of cases explicit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Case k = 4.",
          "workingLatex": "4 = 2 + 2",
          "explanation": "Both parts are $2$, which is prime, so $4$ is a sum of two primes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case k = 6.",
          "workingLatex": "6 = 3 + 3",
          "explanation": "Here $3$ is prime, and $3+3=6$, so the case holds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case k = 8.",
          "workingLatex": "8 = 3 + 5",
          "explanation": "Both $3$ and $5$ are prime and add to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case k = 10.",
          "workingLatex": "10 = 5 + 5 \\quad (\\text{or } 3 + 7)",
          "explanation": "Both $5$ and $5$ are prime; note there can be more than one valid decomposition, but we only need one.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case k = 12.",
          "workingLatex": "12 = 5 + 7",
          "explanation": "Both $5$ and $7$ are prime and sum to $12$, completing the final case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude from the completed case check.",
          "workingLatex": "\\text{all 5 cases verified}",
          "explanation": "Every even number in the range has been expressed as a sum of two primes, and there are no other cases. Since the list was exhaustive, the statement is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4=2+2,\\;6=3+3,\\;8=3+5,\\;10=5+5,\\;12=5+7$. Each even number in the range is a sum of two primes, and these are all the cases, so the statement is true. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "even integers",
      "divisibility"
    ],
    "questionText": "Prove that the product of any two consecutive even integers is divisible by $8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the first even integer algebraically.",
          "workingLatex": "2n, \\quad n \\in \\mathbb{Z}",
          "explanation": "Every even integer is $2$ times an integer, so writing the first one as $2n$ captures all even numbers without loss of generality.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the next consecutive even integer.",
          "workingLatex": "2n + 2",
          "explanation": "Consecutive *even* integers differ by $2$, not $1$, so the next even number after $2n$ is $2n+2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the product.",
          "workingLatex": "P = 2n(2n+2)",
          "explanation": "The claim is about the product, so we multiply the two even integers together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor a 2 out of the second bracket.",
          "workingLatex": "P = 2n \\cdot 2(n+1) = 4n(n+1)",
          "explanation": "Both factors are even, so each contributes a factor of $2$. Pulling these out gives an explicit $4$, which is already two-thirds of the way to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify what is still needed.",
          "workingLatex": "\\text{need one more factor of } 2 \\text{ from } n(n+1)",
          "explanation": "We have $4n(n+1)$; to reach a multiple of $8$ we must show $n(n+1)$ contributes one further factor of $2$, i.e. that it is even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the structure of n(n+1).",
          "workingLatex": "n \\text{ and } n+1 \\text{ are consecutive integers}",
          "explanation": "$n$ and $n+1$ follow one after another, and among any two consecutive integers exactly one is even. We confirm this with a short two-case check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case: n is even.",
          "workingLatex": "n = 2m \\Rightarrow n(n+1) = 2m(n+1)",
          "explanation": "If $n$ itself is even, the product $n(n+1)$ clearly contains a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case: n is odd.",
          "workingLatex": "n+1 = 2m \\Rightarrow n(n+1) = 2m\\,n",
          "explanation": "If $n$ is odd then $n+1$ is even, so again the product picks up a factor of $2$. These two cases cover every integer $n$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Record the consequence.",
          "workingLatex": "n(n+1) = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "In both cases $n(n+1)$ is even, so it equals $2k$ for some integer $k$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute back into the product.",
          "workingLatex": "P = 4 \\cdot 2k = 8k",
          "explanation": "Replacing $n(n+1)$ with $2k$ turns the factor $4$ into $8$, giving the multiple of $8$ we were aiming for.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion.",
          "workingLatex": "8 \\mid P \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Since $P = 8k$ with $k$ an integer, the product is divisible by $8$ for every choice of consecutive even integers.",
          "diagram": null
        }
      ],
      "finalAnswer": "Writing the integers as $2n$ and $2n+2$, the product is $4n(n+1)$. As $n(n+1)$ is a product of consecutive integers it is even, say $2k$, so $P=8k$. Hence the product is divisible by $8$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "odd numbers",
      "algebra"
    ],
    "questionText": "Prove that the sum of the squares of any two consecutive integers is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let the first integer be general.",
          "workingLatex": "n \\in \\mathbb{Z}",
          "explanation": "A single letter $n$ for the first integer lets one argument cover every possible pair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the second consecutive integer.",
          "workingLatex": "n \\text{ and } n+1",
          "explanation": "The next integer is one greater, namely $n+1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the sum of the squares.",
          "workingLatex": "S = n^2 + (n+1)^2",
          "explanation": "The statement is about squaring each integer and adding, so we write exactly that.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the squared bracket.",
          "workingLatex": "(n+1)^2 = n^2 + 2n + 1",
          "explanation": "Expanding $(n+1)^2$ using the binomial gives $n^2+2n+1$; we need it in expanded form to combine like terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two squares.",
          "workingLatex": "S = n^2 + n^2 + 2n + 1 = 2n^2 + 2n + 1",
          "explanation": "Adding $n^2$ to the expansion and collecting like terms gathers everything into a single quadratic expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor the even part.",
          "workingLatex": "S = 2(n^2 + n) + 1",
          "explanation": "Pulling a $2$ out of the first two terms separates $S$ into an explicitly even piece plus a leftover $1$ — the structure that decides oddness.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Analyse the bracketed term.",
          "workingLatex": "n^2 + n \\in \\mathbb{Z}",
          "explanation": "Since $n$ is an integer, $n^2+n$ is also an integer, so $2(n^2+n)$ is a whole number of twos, i.e. even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the remaining 1.",
          "workingLatex": "S = (\\text{even}) + 1",
          "explanation": "An even number with $1$ added is always odd, because it is the number immediately after an even number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "S = 2(n^2+n)+1 \\text{ is odd for all } n \\in \\mathbb{Z}",
          "explanation": "$S$ has the form (even)$+1$ for a general integer $n$, so the sum of the squares of two consecutive integers is always odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S=n^2+(n+1)^2=2n^2+2n+1=2(n^2+n)+1$. As $n^2+n$ is an integer, $S$ is even $+1$, hence odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by exhaustion",
      "modular arithmetic",
      "squares",
      "parity"
    ],
    "questionText": "Prove that for every integer $n$, the value $n^2$ leaves a remainder of $0$ or $1$ when divided by $4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose an exhaustive split of the integers.",
          "workingLatex": "n \\text{ is even or } n \\text{ is odd}",
          "explanation": "Every integer is either even or odd, and nothing else. Splitting into these two cases is exhaustive, so proving the claim in each case proves it for all $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Case 1: write n as even.",
          "workingLatex": "n = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "An even integer is $2$ times some integer $k$; this lets us compute its square explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the even form.",
          "workingLatex": "n^2 = (2k)^2 = 4k^2",
          "explanation": "Squaring $2k$ gives $4k^2$, which is exactly $4$ times an integer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the remainder for the even case.",
          "workingLatex": "n^2 = 4k^2 \\Rightarrow \\text{remainder } 0",
          "explanation": "Because $4k^2$ is a whole number of fours, dividing by $4$ leaves nothing over: the remainder is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 2: write n as odd.",
          "workingLatex": "n = 2k+1, \\quad k \\in \\mathbb{Z}",
          "explanation": "An odd integer is one more than an even integer, so it has the form $2k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the odd form.",
          "workingLatex": "n^2 = (2k+1)^2 = 4k^2 + 4k + 1",
          "explanation": "Expanding $(2k+1)^2$ produces two terms with a factor of $4$ and a leftover $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Group the multiple-of-4 part.",
          "workingLatex": "n^2 = 4(k^2 + k) + 1",
          "explanation": "Factoring $4$ from the first two terms shows the square is a multiple of $4$ plus a remainder of exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the remainder for the odd case.",
          "workingLatex": "n^2 = 4(k^2+k) + 1 \\Rightarrow \\text{remainder } 1",
          "explanation": "Since $k^2+k$ is an integer, $4(k^2+k)$ divides exactly by $4$, leaving remainder $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the two cases.",
          "workingLatex": "\\text{remainder} \\in \\{0, 1\\}",
          "explanation": "The even case gives remainder $0$ and the odd case gives remainder $1$; no other outcome is possible.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the cases are exhaustive.",
          "workingLatex": "\\text{even} \\cup \\text{odd} = \\mathbb{Z}",
          "explanation": "Because every integer is even or odd, these two cases account for all integers, so nothing has been missed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion.",
          "workingLatex": "n^2 \\equiv 0 \\text{ or } 1 \\pmod 4",
          "explanation": "For any integer $n$, its square leaves a remainder of $0$ or $1$ on division by $4$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $n=2k$ then $n^2=4k^2$ (remainder $0$); if $n=2k+1$ then $n^2=4(k^2+k)+1$ (remainder $1$). These cases exhaust all integers, so $n^2$ leaves remainder $0$ or $1$ modulo $4$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "proof by exhaustion",
      "divisibility",
      "factorisation"
    ],
    "questionText": "Prove that $n^3 - n$ is divisible by $6$ for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor out the common factor.",
          "workingLatex": "n^3 - n = n(n^2 - 1)",
          "explanation": "Taking out the shared factor $n$ is the natural first step and sets up a difference of squares inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the difference of squares.",
          "workingLatex": "n(n^2-1) = n(n-1)(n+1)",
          "explanation": "Since $n^2-1=(n-1)(n+1)$, the expression becomes a product of three linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reorder into consecutive integers.",
          "workingLatex": "(n-1)\\,n\\,(n+1)",
          "explanation": "Written in increasing order, these are three *consecutive* integers. That structure is the key to the whole proof.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the target 6 into coprime factors.",
          "workingLatex": "6 = 2 \\times 3, \\quad \\gcd(2,3)=1",
          "explanation": "To show divisibility by $6$ it is enough to show divisibility by $2$ and by $3$ separately, because $2$ and $3$ share no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divisibility by 2.",
          "workingLatex": "n-1, n \\text{ consecutive} \\Rightarrow \\text{one is even}",
          "explanation": "Among any two consecutive integers one must be even, so the product contains a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Record divisibility by 2.",
          "workingLatex": "2 \\mid (n-1)\\,n\\,(n+1)",
          "explanation": "An even factor makes the whole product even, so it is divisible by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up divisibility by 3 via cases.",
          "workingLatex": "n \\equiv 0, 1, \\text{ or } 2 \\pmod 3",
          "explanation": "Every integer leaves remainder $0$, $1$ or $2$ on division by $3$. Checking these three exhaustive cases settles divisibility by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case n ≡ 0 (mod 3).",
          "workingLatex": "3 \\mid n",
          "explanation": "If $n$ is itself a multiple of $3$, the factor $n$ supplies the divisibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Case n ≡ 1 (mod 3).",
          "workingLatex": "n - 1 \\equiv 0 \\Rightarrow 3 \\mid (n-1)",
          "explanation": "If $n$ leaves remainder $1$, then $n-1$ is a multiple of $3$, so the factor $n-1$ supplies it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Case n ≡ 2 (mod 3).",
          "workingLatex": "n + 1 \\equiv 0 \\Rightarrow 3 \\mid (n+1)",
          "explanation": "If $n$ leaves remainder $2$, then $n+1$ is a multiple of $3$. So in every case one factor is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Record divisibility by 3.",
          "workingLatex": "3 \\mid (n-1)\\,n\\,(n+1)",
          "explanation": "All three cases produce a factor divisible by $3$, so the product always is.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine to conclude.",
          "workingLatex": "2 \\mid P \\text{ and } 3 \\mid P \\Rightarrow 6 \\mid P",
          "explanation": "The product is divisible by both $2$ and $3$, and since these are coprime it is divisible by their product $6$. Hence $n^3-n$ is divisible by $6$ for all integers $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^3-n=(n-1)n(n+1)$, a product of three consecutive integers. One factor is even (so $2\\mid P$) and one is a multiple of $3$ (so $3\\mid P$); as $\\gcd(2,3)=1$, $6\\mid P$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "proof by exhaustion",
      "cubes",
      "divisibility",
      "modular arithmetic"
    ],
    "questionText": "Prove that the sum of the cubes of any three consecutive integers is divisible by $9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the three integers symmetrically.",
          "workingLatex": "n-1,\\; n,\\; n+1",
          "explanation": "Centring the three consecutive integers on $n$ (rather than starting at $n$) makes the outer cubes mirror images, so their expansions will cancel neatly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of the cubes.",
          "workingLatex": "S = (n-1)^3 + n^3 + (n+1)^3",
          "explanation": "We translate the statement directly into algebra: cube each integer and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the first cube.",
          "workingLatex": "(n-1)^3 = n^3 - 3n^2 + 3n - 1",
          "explanation": "Using the binomial expansion of $(n-1)^3$ prepares it for combining with the other terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the third cube.",
          "workingLatex": "(n+1)^3 = n^3 + 3n^2 + 3n + 1",
          "explanation": "The expansion of $(n+1)^3$ is the mirror of the previous one, with the signs of the odd-power terms flipped.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add all three cubes.",
          "workingLatex": "S = (n^3 - 3n^2 + 3n - 1) + n^3 + (n^3 + 3n^2 + 3n + 1)",
          "explanation": "Placing the three expansions side by side lets the symmetric terms be cancelled in the next step.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel and collect like terms.",
          "workingLatex": "S = 3n^3 + 6n",
          "explanation": "The $-3n^2$ and $+3n^2$ cancel, as do $-1$ and $+1$; the three $n^3$ terms and the two $3n$ terms combine to $3n^3+6n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor the simplified sum.",
          "workingLatex": "S = 3n(n^2 + 2)",
          "explanation": "Factoring out $3n$ exposes one guaranteed factor of $3$. To reach $9$ we must find a *second* factor of $3$ inside $n(n^2+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the remaining goal.",
          "workingLatex": "\\text{show } 3 \\mid n(n^2+2)",
          "explanation": "If $n(n^2+2)$ is itself divisible by $3$, then $S = 3 \\times (\\text{multiple of }3)$ is divisible by $9$. We test this by exhausting the residues of $n$ modulo $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the three cases.",
          "workingLatex": "n \\equiv 0, 1, \\text{ or } 2 \\pmod 3",
          "explanation": "Every integer is congruent to $0$, $1$ or $2$ modulo $3$; these three cases are exhaustive.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Case n ≡ 0 (mod 3).",
          "workingLatex": "3 \\mid n \\Rightarrow 3 \\mid n(n^2+2)",
          "explanation": "If $n$ is a multiple of $3$, the factor $n$ alone makes the product divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Case n ≡ 1 (mod 3).",
          "workingLatex": "n^2 + 2 \\equiv 1 + 2 = 3 \\equiv 0 \\pmod 3",
          "explanation": "If $n \\equiv 1$, then $n^2 \\equiv 1$, so $n^2+2 \\equiv 0$; the second factor is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Case n ≡ 2 (mod 3).",
          "workingLatex": "n^2 + 2 \\equiv 4 + 2 = 6 \\equiv 0 \\pmod 3",
          "explanation": "If $n \\equiv 2$, then $n^2 \\equiv 4 \\equiv 1$, so again $n^2+2 \\equiv 0$; the second factor is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude the sub-result.",
          "workingLatex": "3 \\mid n(n^2+2) \\text{ in every case}",
          "explanation": "All three exhaustive cases give a factor of $3$, so $n(n^2+2)$ is always divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Name the resulting integer.",
          "workingLatex": "n(n^2+2) = 3m, \\quad m \\in \\mathbb{Z}",
          "explanation": "Divisibility by $3$ lets us write $n(n^2+2)$ as $3m$ for some integer $m$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Substitute back into S.",
          "workingLatex": "S = 3 \\cdot 3m = 9m",
          "explanation": "Replacing $n(n^2+2)$ with $3m$ turns the leading factor $3$ into $9$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the conclusion.",
          "workingLatex": "9 \\mid S \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Since $S = 9m$ with $m$ an integer, the sum of the cubes of any three consecutive integers is divisible by $9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "With integers $n-1,n,n+1$, the sum of cubes is $3n^3+6n=3n(n^2+2)$. Checking $n\\equiv0,1,2\\pmod3$ shows $3\\mid n(n^2+2)$ in every case, so $S=9m$. Hence the sum is divisible by $9$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "proof by exhaustion",
      "primes",
      "divisibility",
      "difference of squares"
    ],
    "questionText": "Prove that for any prime number $p > 3$, the value $p^2 - 1$ is divisible by $24$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the expression.",
          "workingLatex": "p^2 - 1 = (p-1)(p+1)",
          "explanation": "Recognising $p^2-1$ as a difference of squares turns a single number into a product of two factors that straddle $p$, which we can analyse individually.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split 24 into coprime factors.",
          "workingLatex": "24 = 8 \\times 3, \\quad \\gcd(8,3)=1",
          "explanation": "To prove divisibility by $24$ it suffices to prove divisibility by $8$ and by $3$ separately, since $8$ and $3$ have no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use primality to fix the parity of p.",
          "workingLatex": "p > 3 \\text{ prime} \\Rightarrow p \\text{ is odd}",
          "explanation": "The only even prime is $2$; every prime greater than $3$ is therefore odd. This controls the factors $p-1$ and $p+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Describe the two factors.",
          "workingLatex": "p-1 \\text{ and } p+1 \\text{ are consecutive even integers}",
          "explanation": "Since $p$ is odd, both $p-1$ and $p+1$ are even, and they differ by $2$, so they are consecutive even numbers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce the halves.",
          "workingLatex": "p-1 = 2a, \\; p+1 = 2b, \\quad b = a+1",
          "explanation": "Writing each even factor as twice an integer exposes two factors of $2$, and the halves $a,b$ turn out to be consecutive integers.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the product.",
          "workingLatex": "(p-1)(p+1) = 4ab",
          "explanation": "Multiplying the two even factors gives $4ab$; the factor $4$ is explicit, and we still need one more factor of $2$ to reach $8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use consecutiveness of a and b.",
          "workingLatex": "a, b=a+1 \\text{ consecutive} \\Rightarrow ab = 2c",
          "explanation": "Among two consecutive integers one is even, so their product $ab$ is even and can be written as $2c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude divisibility by 8.",
          "workingLatex": "(p-1)(p+1) = 4 \\cdot 2c = 8c",
          "explanation": "Substituting $ab=2c$ turns $4ab$ into $8c$, so the product is divisible by $8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use primality to exclude a multiple of 3.",
          "workingLatex": "3 \\nmid p \\text{ since } p>3 \\text{ is prime}",
          "explanation": "A prime bigger than $3$ cannot be a multiple of $3$ (otherwise $3$ would divide it and it would not be prime), so $p \\equiv 1$ or $2 \\pmod 3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Case p ≡ 1 (mod 3).",
          "workingLatex": "p - 1 \\equiv 0 \\Rightarrow 3 \\mid (p-1)",
          "explanation": "If $p$ leaves remainder $1$ modulo $3$, then $p-1$ is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Case p ≡ 2 (mod 3).",
          "workingLatex": "p + 1 \\equiv 0 \\Rightarrow 3 \\mid (p+1)",
          "explanation": "If $p$ leaves remainder $2$, then $p+1$ is a multiple of $3$. These are the only two possibilities, so one factor is always divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude divisibility by 3.",
          "workingLatex": "3 \\mid (p-1)(p+1)",
          "explanation": "In both admissible cases a factor is divisible by $3$, hence so is the product.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the two results.",
          "workingLatex": "8 \\mid p^2-1 \\text{ and } 3 \\mid p^2-1",
          "explanation": "We have shown the product is divisible by both $8$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Apply coprimality.",
          "workingLatex": "\\gcd(8,3)=1 \\Rightarrow 24 \\mid p^2-1",
          "explanation": "Because $8$ and $3$ are coprime, divisibility by each forces divisibility by their product $24$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion.",
          "workingLatex": "24 \\mid p^2 - 1 \\text{ for all primes } p>3",
          "explanation": "For every prime greater than $3$, $p^2-1$ is divisible by $24$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p^2-1=(p-1)(p+1)$. As $p>3$ is prime it is odd, so $p-1,p+1$ are consecutive even numbers giving a factor of $8$; and $p\\not\\equiv0\\pmod3$ forces $3$ to divide $p-1$ or $p+1$. Since $\\gcd(8,3)=1$, $24\\mid p^2-1$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "proof by exhaustion",
      "divisibility",
      "modular arithmetic",
      "factorisation"
    ],
    "questionText": "Prove that $n^5 - n$ is divisible by $30$ for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor out the common factor.",
          "workingLatex": "n^5 - n = n(n^4 - 1)",
          "explanation": "Removing the shared factor $n$ leaves $n^4-1$, which is a difference of squares ready to factor further.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the difference of squares.",
          "workingLatex": "n^4 - 1 = (n^2-1)(n^2+1)",
          "explanation": "Treating $n^4-1$ as $(n^2)^2-1^2$ splits it into $(n^2-1)(n^2+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor n²−1 as well.",
          "workingLatex": "n^5 - n = (n-1)\\,n\\,(n+1)\\,(n^2+1)",
          "explanation": "Since $n^2-1=(n-1)(n+1)$, the whole expression becomes a product containing three consecutive integers together with $n^2+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the target 30 into coprime factors.",
          "workingLatex": "30 = 2 \\times 3 \\times 5",
          "explanation": "The factors $2$, $3$ and $5$ are pairwise coprime, so it is enough to prove divisibility by each of them separately.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divisibility by 2.",
          "workingLatex": "(n-1)\\,n \\text{ consecutive} \\Rightarrow \\text{even}",
          "explanation": "Among the two consecutive integers $n-1$ and $n$ one is even, so the product already contains a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divisibility by 3.",
          "workingLatex": "(n-1)\\,n\\,(n+1) \\text{ are three consecutive integers}",
          "explanation": "Any three consecutive integers include a multiple of $3$, so this block supplies a factor of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up divisibility by 5.",
          "workingLatex": "n \\equiv 0,1,2,3,4 \\pmod 5",
          "explanation": "The factors are not five consecutive integers, so divisibility by $5$ is not automatic. We prove it by exhausting the five residues of $n$ modulo $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case n ≡ 0 (mod 5).",
          "workingLatex": "5 \\mid n",
          "explanation": "If $n$ is a multiple of $5$, the factor $n$ makes the product divisible by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Case n ≡ 1 (mod 5).",
          "workingLatex": "n - 1 \\equiv 0 \\Rightarrow 5 \\mid (n-1)",
          "explanation": "If $n \\equiv 1$, then $n-1$ is a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Case n ≡ 4 (mod 5).",
          "workingLatex": "n + 1 \\equiv 0 \\Rightarrow 5 \\mid (n+1)",
          "explanation": "If $n \\equiv 4$, then $n+1 \\equiv 5 \\equiv 0$, so $n+1$ is a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Case n ≡ 2 (mod 5).",
          "workingLatex": "n^2 + 1 \\equiv 4 + 1 = 5 \\equiv 0 \\pmod 5",
          "explanation": "Here the linear factors miss $5$, but $n^2+1 \\equiv 0$, so the factor $n^2+1$ rescues divisibility by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Case n ≡ 3 (mod 5).",
          "workingLatex": "n^2 + 1 \\equiv 9 + 1 = 10 \\equiv 0 \\pmod 5",
          "explanation": "Similarly $n \\equiv 3$ gives $n^2+1 \\equiv 0$, so again $5$ divides the product. All five residues are now covered.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude divisibility by 5.",
          "workingLatex": "5 \\mid (n-1)n(n+1)(n^2+1)",
          "explanation": "Every residue class modulo $5$ produces a factor divisible by $5$, so the product always is.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Gather the three divisibility results.",
          "workingLatex": "2 \\mid P, \\; 3 \\mid P, \\; 5 \\mid P",
          "explanation": "We have now shown the expression is divisible by $2$, by $3$ and by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Apply pairwise coprimality.",
          "workingLatex": "\\gcd\\text{-coprime} \\Rightarrow 2 \\cdot 3 \\cdot 5 = 30 \\mid P",
          "explanation": "Because $2$, $3$ and $5$ share no common factors, divisibility by each separately forces divisibility by their product $30$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the conclusion.",
          "workingLatex": "30 \\mid n^5 - n \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "For every integer $n$, $n^5-n$ is divisible by $30$, which completes the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^5-n=(n-1)n(n+1)(n^2+1)$. Three consecutive integers give factors $2$ and $3$; exhausting $n\\bmod5$ shows $5$ divides one factor in every case. As $2,3,5$ are coprime, $30\\mid n^5-n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "odd numbers",
      "even numbers"
    ],
    "questionText": "Prove that the sum of any two odd numbers is even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the first odd number.",
          "workingLatex": "2a+1, \\quad a \\in \\mathbb{Z}",
          "explanation": "Every odd number is one more than an even number, so it has the form $2a+1$. Using a letter keeps the argument general.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Represent the second odd number.",
          "workingLatex": "2b+1, \\quad b \\in \\mathbb{Z}",
          "explanation": "The second odd number is independent of the first, so it needs its own letter $b$; writing it as $2a+1$ would wrongly force the two to be equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the sum.",
          "workingLatex": "(2a+1) + (2b+1)",
          "explanation": "The claim is about adding the two odd numbers, so we write their sum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect like terms.",
          "workingLatex": "2a + 2b + 2",
          "explanation": "Adding removes the brackets and gathers the two constant $1$s into a $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out the common 2.",
          "workingLatex": "2(a + b + 1)",
          "explanation": "Pulling out a factor of $2$ is the decisive move: it displays the sum explicitly as twice something.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "a + b + 1 \\in \\mathbb{Z}",
          "explanation": "Since $a$ and $b$ are integers, so is $a+b+1$; hence the sum is $2 \\times (\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "2(a+b+1) \\text{ is even}",
          "explanation": "A number equal to $2$ times an integer is even by definition, so the sum of any two odd numbers is even.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2a+1)+(2b+1)=2a+2b+2=2(a+b+1)$, which is $2\\times$ an integer, hence even. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "odd numbers",
      "multiplication"
    ],
    "questionText": "Prove that the product of any two odd numbers is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the first odd number.",
          "workingLatex": "2a+1, \\quad a \\in \\mathbb{Z}",
          "explanation": "Any odd number can be written as $2a+1$; the letter $a$ keeps the proof general.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Represent the second odd number.",
          "workingLatex": "2b+1, \\quad b \\in \\mathbb{Z}",
          "explanation": "The second odd number is unrelated to the first, so it gets its own letter $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the product.",
          "workingLatex": "(2a+1)(2b+1)",
          "explanation": "The statement is about the product, so we multiply the two odd forms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the brackets.",
          "workingLatex": "4ab + 2a + 2b + 1",
          "explanation": "Multiplying out every pair of terms gives four products; three of them carry a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Group the even part.",
          "workingLatex": "2(2ab + a + b) + 1",
          "explanation": "Factoring $2$ from the first three terms separates the expression into an even piece plus a leftover $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "2ab + a + b \\in \\mathbb{Z}",
          "explanation": "Because $a,b$ are integers, $2ab+a+b$ is an integer, so $2(2ab+a+b)$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the remaining 1.",
          "workingLatex": "(\\text{even}) + 1",
          "explanation": "An even number plus one is always odd, being the next number up from an even value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion.",
          "workingLatex": "(2a+1)(2b+1) \\text{ is odd}",
          "explanation": "The product has the form (even)$+1$, so it is odd; the product of two odd numbers is always odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2a+1)(2b+1)=4ab+2a+2b+1=2(2ab+a+b)+1$, which is even $+1$, hence odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "even numbers",
      "factorisation"
    ],
    "questionText": "Prove that $n^2 + n$ is even for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression.",
          "workingLatex": "n^2 + n",
          "explanation": "We start from the expression we must show is even and look for hidden structure.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor it.",
          "workingLatex": "n^2 + n = n(n+1)",
          "explanation": "Taking out the common factor $n$ rewrites the expression as a product of two integers, which is far easier to reason about than a sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise consecutive integers.",
          "workingLatex": "n \\text{ and } n+1 \\text{ are consecutive}",
          "explanation": "$n$ and $n+1$ follow one after another, and among any two consecutive integers exactly one is even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case: n even.",
          "workingLatex": "n = 2k \\Rightarrow n(n+1) = 2k(n+1)",
          "explanation": "If $n$ is even, the factor $n$ already carries a $2$, so the product is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case: n odd.",
          "workingLatex": "n+1 = 2k \\Rightarrow n(n+1) = 2k\\,n",
          "explanation": "If $n$ is odd, then $n+1$ is even, so the product again carries a factor of $2$. These two cases cover every integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the cases.",
          "workingLatex": "n(n+1) = 2m, \\quad m \\in \\mathbb{Z}",
          "explanation": "In both cases the product equals $2$ times an integer, so it is even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "n^2 + n \\text{ is even for all } n \\in \\mathbb{Z}",
          "explanation": "Since $n^2+n=n(n+1)$ is a product of consecutive integers, it is always even.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^2+n=n(n+1)$ is a product of two consecutive integers, one of which is even, so it is even for every integer $n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "divisibility"
    ],
    "questionText": "Prove that the sum of any five consecutive integers is divisible by $5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the integers symmetrically.",
          "workingLatex": "n-2,\\; n-1,\\; n,\\; n+1,\\; n+2",
          "explanation": "Centring the five consecutive integers on the middle value $n$ makes the outer terms cancel in pairs when we add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write their sum.",
          "workingLatex": "S = (n-2)+(n-1)+n+(n+1)+(n+2)",
          "explanation": "We add all five integers, keeping everything in terms of the middle value $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the balanced terms.",
          "workingLatex": "S = 5n",
          "explanation": "The $-2$ and $+2$ cancel, and the $-1$ and $+1$ cancel, leaving five copies of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out 5.",
          "workingLatex": "S = 5 \\times n",
          "explanation": "Writing the sum as $5$ times $n$ exposes the factor of $5$ we are trying to prove is present.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify n as an integer.",
          "workingLatex": "n \\in \\mathbb{Z}",
          "explanation": "The middle value $n$ is an integer, so $S$ is $5$ multiplied by a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the form.",
          "workingLatex": "5 \\mid 5n",
          "explanation": "A number equal to $5$ times an integer is a multiple of $5$ by definition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "5 \\mid S \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "The sum of any five consecutive integers equals $5n$, so it is always divisible by $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centring on $n$, the sum is $(n-2)+(n-1)+n+(n+1)+(n+2)=5n$, a multiple of $5$. Hence the sum of any five consecutive integers is divisible by $5$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "odd numbers",
      "squares"
    ],
    "questionText": "Prove that the square of any odd number is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent a general odd number.",
          "workingLatex": "n = 2k+1, \\quad k \\in \\mathbb{Z}",
          "explanation": "Every odd number is one more than an even number, so it has the form $2k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write its square.",
          "workingLatex": "n^2 = (2k+1)^2",
          "explanation": "The claim is about the square, so we square the odd form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the bracket.",
          "workingLatex": "n^2 = 4k^2 + 4k + 1",
          "explanation": "Expanding $(2k+1)^2$ produces two terms containing a factor of $4$ and a leftover $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Group the even part.",
          "workingLatex": "n^2 = 2(2k^2 + 2k) + 1",
          "explanation": "Factoring $2$ from the first two terms separates the square into an even piece plus a leftover $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "2k^2 + 2k \\in \\mathbb{Z}",
          "explanation": "Since $k$ is an integer, $2k^2+2k$ is an integer, so $2(2k^2+2k)$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the remaining 1.",
          "workingLatex": "n^2 = (\\text{even}) + 1",
          "explanation": "An even number plus one is odd, so the square has the form that defines an odd number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "n^2 \\text{ is odd}",
          "explanation": "For any odd $n=2k+1$, its square is even $+1$, hence odd. So the square of an odd number is always odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $n=2k+1$ then $n^2=4k^2+4k+1=2(2k^2+2k)+1$, which is even $+1$, hence odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "place value",
      "divisibility"
    ],
    "questionText": "A two-digit number has tens digit $a$ and units digit $b$. Prove that the sum of this number and the number formed by reversing its digits is divisible by $11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Express the two-digit number using place value.",
          "workingLatex": "10a + b, \\quad a \\in \\{1,\\dots,9\\},\\ b \\in \\{0,\\dots,9\\}",
          "explanation": "A two-digit number is $10 \\times (\\text{tens digit}) + (\\text{units digit})$, so it equals $10a+b$. Place value turns the digits into algebra.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express the reversed number.",
          "workingLatex": "10b + a",
          "explanation": "Reversing swaps the roles of the digits, so the tens digit becomes $b$ and the units digit becomes $a$, giving $10b+a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the two numbers.",
          "workingLatex": "(10a + b) + (10b + a)",
          "explanation": "The statement is about their sum, so we add the original and its reverse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect like terms.",
          "workingLatex": "11a + 11b",
          "explanation": "The $a$ terms give $10a+a=11a$ and the $b$ terms give $b+10b=11b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out 11.",
          "workingLatex": "11(a + b)",
          "explanation": "Both terms share a factor of $11$; pulling it out exposes the divisibility we want.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "a + b \\in \\mathbb{Z}",
          "explanation": "Digits are integers, so $a+b$ is an integer, making the sum $11 \\times (\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "11 \\mid (10a+b)+(10b+a)",
          "explanation": "The sum equals $11(a+b)$, a multiple of $11$, so a two-digit number plus its reverse is always divisible by $11$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(10a+b)+(10b+a)=11a+11b=11(a+b)$, a multiple of $11$. Hence the number plus its reverse is divisible by $11$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "odd numbers",
      "difference of squares"
    ],
    "questionText": "Prove that the difference between the squares of any two consecutive integers is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the two consecutive integers.",
          "workingLatex": "n \\text{ and } n+1",
          "explanation": "Let the smaller integer be $n$; the next one is $n+1$. A single letter keeps the argument general.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the difference of their squares.",
          "workingLatex": "D = (n+1)^2 - n^2",
          "explanation": "We subtract the square of the smaller from the square of the larger, matching 'difference between the squares'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the leading square.",
          "workingLatex": "(n+1)^2 = n^2 + 2n + 1",
          "explanation": "Expanding $(n+1)^2$ prepares the two squares for subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the squares.",
          "workingLatex": "D = (n^2 + 2n + 1) - n^2 = 2n + 1",
          "explanation": "The $n^2$ terms cancel, leaving the simple expression $2n+1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the standard odd form.",
          "workingLatex": "D = 2n + 1",
          "explanation": "An expression of the form $2 \\times (\\text{integer}) + 1$ is exactly what we call an odd number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Justify the components.",
          "workingLatex": "2n \\text{ even}, \\quad 2n+1 \\text{ odd}",
          "explanation": "Since $n$ is an integer, $2n$ is even, and adding $1$ makes the result odd.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "D = 2n+1 \\text{ is odd for all } n \\in \\mathbb{Z}",
          "explanation": "The difference simplifies to $2n+1$, which is odd for every integer $n$, so the claim holds in general.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(n+1)^2-n^2=2n+1$, which is of the form (even)$+1$ and therefore odd for every integer $n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "squares",
      "modular arithmetic"
    ],
    "questionText": "Prove that the sum of the squares of any three consecutive integers leaves a remainder of $2$ when divided by $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the integers symmetrically.",
          "workingLatex": "n-1,\\; n,\\; n+1",
          "explanation": "Centring the three consecutive integers on $n$ makes the outer squares expand as mirror images, so many terms cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of the squares.",
          "workingLatex": "S = (n-1)^2 + n^2 + (n+1)^2",
          "explanation": "We translate the statement directly: square each integer and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the first square.",
          "workingLatex": "(n-1)^2 = n^2 - 2n + 1",
          "explanation": "Expanding prepares the outer terms to be combined with the central $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the third square.",
          "workingLatex": "(n+1)^2 = n^2 + 2n + 1",
          "explanation": "This expansion mirrors the previous one, with the sign of the middle term flipped.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the three squares.",
          "workingLatex": "S = 3n^2 + 2",
          "explanation": "The $-2n$ and $+2n$ cancel; the three $n^2$ terms give $3n^2$ and the constants $1+0+1$ give $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split off the multiple of 3.",
          "workingLatex": "S = 3n^2 + 2",
          "explanation": "The term $3n^2$ is a multiple of $3$, and $2$ is what remains — this is exactly the structure that fixes the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the multiple of 3.",
          "workingLatex": "3 \\mid 3n^2",
          "explanation": "Since $n^2$ is an integer, $3n^2$ is divisible by $3$ with nothing left over.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the remainder.",
          "workingLatex": "S = 3n^2 + 2, \\quad 0 \\le 2 < 3",
          "explanation": "Because $2$ is a valid remainder (at least $0$ and less than $3$), $S$ leaves remainder $2$ on division by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "S \\equiv 2 \\pmod 3 \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "The sum of the squares of any three consecutive integers is a multiple of $3$ plus $2$, so it always leaves remainder $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "With integers $n-1,n,n+1$, the sum of squares is $3n^2+2$. As $3n^2$ is a multiple of $3$, the remainder on division by $3$ is $2$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "odd numbers",
      "divisibility"
    ],
    "questionText": "Prove that if $n$ is odd, then $n^2 - 1$ is divisible by $8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the odd number in standard form.",
          "workingLatex": "n = 2k+1, \\quad k \\in \\mathbb{Z}",
          "explanation": "Since $n$ is odd, it is one more than an even number, so $n=2k+1$. This lets us compute $n^2-1$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the expression.",
          "workingLatex": "n^2 - 1 = (2k+1)^2 - 1",
          "explanation": "Replacing $n$ turns the target into something we can expand and factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the square.",
          "workingLatex": "(2k+1)^2 - 1 = 4k^2 + 4k + 1 - 1",
          "explanation": "Expanding $(2k+1)^2$ gives $4k^2+4k+1$, and the $+1$ is cancelled by the $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "n^2 - 1 = 4k^2 + 4k",
          "explanation": "After the constant cancels, only the two terms with a factor of $4$ remain.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor.",
          "workingLatex": "n^2 - 1 = 4k(k+1)",
          "explanation": "Factoring out $4k$ leaves $k+1$, so we now have $4$ times a product of consecutive integers.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify what is still needed.",
          "workingLatex": "\\text{need one more factor of } 2 \\text{ from } k(k+1)",
          "explanation": "We have $4k(k+1)$; to reach a multiple of $8$ we must show $k(k+1)$ supplies one further factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use consecutiveness.",
          "workingLatex": "k, k+1 \\text{ consecutive} \\Rightarrow \\text{one is even}",
          "explanation": "Among two consecutive integers exactly one is even, so their product is even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case k even.",
          "workingLatex": "k = 2m \\Rightarrow k(k+1) = 2m(k+1)",
          "explanation": "If $k$ is even, the product $k(k+1)$ clearly contains a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Case k odd.",
          "workingLatex": "k+1 = 2m \\Rightarrow k(k+1) = 2m\\,k",
          "explanation": "If $k$ is odd then $k+1$ is even, so again the product is even. Both cases give $k(k+1)=2m$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute back.",
          "workingLatex": "n^2 - 1 = 4 \\cdot 2m = 8m",
          "explanation": "Replacing $k(k+1)$ with $2m$ turns the factor $4$ into $8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion.",
          "workingLatex": "8 \\mid n^2 - 1 \\text{ for odd } n",
          "explanation": "Since $n^2-1=8m$ with $m$ an integer, it is divisible by $8$ whenever $n$ is odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $n=2k+1$ then $n^2-1=4k(k+1)$. As $k(k+1)$ is a product of consecutive integers it is even, say $2m$, so $n^2-1=8m$. Hence $8\\mid n^2-1$ for odd $n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "completing the square",
      "inequalities"
    ],
    "questionText": "Prove that $x^2 - 6x + 11 > 0$ for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^2 - 6x + 11 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "We want to show the quadratic is strictly positive everywhere. Completing the square rewrites it in a form whose sign is obvious.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Focus on the quadratic and linear terms.",
          "workingLatex": "x^2 - 6x",
          "explanation": "To complete the square we deal with $x^2-6x$ first; the constant will be adjusted afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square.",
          "workingLatex": "x^2 - 6x = (x-3)^2 - 9",
          "explanation": "Half of $-6$ is $-3$, so $(x-3)^2=x^2-6x+9$; subtracting $9$ restores the original two terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back.",
          "workingLatex": "x^2 - 6x + 11 = (x-3)^2 - 9 + 11",
          "explanation": "Replacing $x^2-6x$ with $(x-3)^2-9$ and keeping the original $+11$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constant.",
          "workingLatex": "= (x-3)^2 + 2",
          "explanation": "Combining $-9+11$ gives $+2$, so the quadratic equals a square plus $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use non-negativity of a square.",
          "workingLatex": "(x-3)^2 \\ge 0",
          "explanation": "The square of any real number is at least $0$, since squaring cannot produce a negative value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 2 to both sides.",
          "workingLatex": "(x-3)^2 + 2 \\ge 2",
          "explanation": "Adding $2$ preserves the inequality, so the whole expression is at least $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with zero.",
          "workingLatex": "(x-3)^2 + 2 \\ge 2 > 0",
          "explanation": "Because $2$ is positive, the expression is strictly greater than $0$; its minimum value $2$ occurs at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "x^2 - 6x + 11 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "The quadratic equals $(x-3)^2+2$, which is never less than $2$, so it is positive for every real $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2-6x+11=(x-3)^2+2$. Since $(x-3)^2\\ge0$, the expression is at least $2$, hence $>0$ for all real $x$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "squares"
    ],
    "questionText": "Prove that $x^2 + y^2 \\ge 2xy$ for all real numbers $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from a guaranteed non-negative quantity.",
          "workingLatex": "(x - y)^2 \\ge 0",
          "explanation": "The square of any real number is non-negative, so $(x-y)^2\\ge0$ is true for all real $x,y$. This is the engine of the proof.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the square.",
          "workingLatex": "(x - y)^2 = x^2 - 2xy + y^2",
          "explanation": "Expanding turns the compact square into the terms we want to compare.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the inequality with the expansion.",
          "workingLatex": "x^2 - 2xy + y^2 \\ge 0",
          "explanation": "Substituting the expansion into $(x-y)^2\\ge0$ gives an inequality in the three terms of interest.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add 2xy to both sides.",
          "workingLatex": "x^2 + y^2 \\ge 2xy",
          "explanation": "Adding $2xy$ to each side moves the cross term across while preserving the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result.",
          "workingLatex": "x^2 + y^2 \\ge 2xy",
          "explanation": "This is exactly the statement we set out to prove, now derived from a true square inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify when equality holds.",
          "workingLatex": "\\text{equality} \\iff x = y",
          "explanation": "Equality needs $(x-y)^2=0$, i.e. $x=y$; otherwise the inequality is strict. This confirms the bound is sharp.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the domain.",
          "workingLatex": "\\text{valid for all } x, y \\in \\mathbb{R}",
          "explanation": "The only fact used was that a real square is non-negative, which holds for every real $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the logical direction.",
          "workingLatex": "(x-y)^2 \\ge 0 \\Rightarrow x^2+y^2 \\ge 2xy",
          "explanation": "Each step was a forward implication from a known truth, so the argument is a valid direct proof, not assuming what we want to show.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "x^2 + y^2 \\ge 2xy \\ \\forall x,y \\in \\mathbb{R}",
          "explanation": "Starting from $(x-y)^2\\ge0$ we deduced the inequality for all real $x,y$, with equality exactly when $x=y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-y)^2\\ge0 \\Rightarrow x^2-2xy+y^2\\ge0 \\Rightarrow x^2+y^2\\ge2xy$, with equality iff $x=y$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "proof by exhaustion",
      "squares",
      "digits",
      "modular arithmetic"
    ],
    "questionText": "Prove by exhaustion that the units digit of a perfect square is never $2$, $3$, $7$ or $8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reduce to the units digit of the base.",
          "workingLatex": "n = 10a + d, \\quad d \\in \\{0,\\dots,9\\}",
          "explanation": "Write $n$ in terms of its units digit $d$. Squaring, $n^2=100a^2+20ad+d^2$; the first two terms are multiples of $10$, so only $d^2$ affects the units digit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the reduced problem.",
          "workingLatex": "\\text{units digit of } n^2 = \\text{units digit of } d^2",
          "explanation": "Because only $d^2$ influences the units digit, we only need to examine the ten possible values of $d$ — a finite check suited to exhaustion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use a symmetry to halve the work.",
          "workingLatex": "(10-d)^2 = 100 - 20d + d^2 \\equiv d^2 \\pmod{10}",
          "explanation": "Since $(10-d)^2$ and $d^2$ share the same units digit, digits $d$ and $10-d$ give the same result, so it suffices to test $d=0,1,2,3,4,5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case d = 0 and d = 1.",
          "workingLatex": "0^2 = 0,\\quad 1^2 = 1",
          "explanation": "These give units digits $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case d = 2 and d = 3.",
          "workingLatex": "2^2 = 4,\\quad 3^2 = 9",
          "explanation": "These give units digits $4$ and $9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case d = 4 and d = 5.",
          "workingLatex": "4^2 = 16,\\quad 5^2 = 25",
          "explanation": "These give units digits $6$ and $5$; by the symmetry, $d=6,7,8,9$ repeat digits already found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect all possible units digits.",
          "workingLatex": "\\{0, 1, 4, 5, 6, 9\\}",
          "explanation": "Gathering the results of every case gives exactly this set of achievable units digits for a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the forbidden digits.",
          "workingLatex": "2, 3, 7, 8 \\notin \\{0,1,4,5,6,9\\}",
          "explanation": "None of $2,3,7,8$ appears in the list of possible units digits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the cases are exhaustive.",
          "workingLatex": "d \\in \\{0,\\dots,9\\} \\text{ all covered}",
          "explanation": "Every possible units digit of $n$ has been accounted for (directly or by symmetry), so no case is missing.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the exhaustion.",
          "workingLatex": "\\text{no } n^2 \\text{ ends in } 2,3,7,8",
          "explanation": "Since a square's units digit must come from the set found, it can never be one of the excluded digits.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion.",
          "workingLatex": "\\text{units digit of } n^2 \\notin \\{2,3,7,8\\}",
          "explanation": "By checking every case, the units digit of a perfect square is never $2$, $3$, $7$ or $8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The units digit of $n^2$ equals that of $d^2$ where $d$ is the units digit of $n$. Testing $d=0\\text{–}5$ (the rest repeat by symmetry) gives units digits $\\{0,1,4,5,6,9\\}$, which excludes $2,3,7,8$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "divisibility",
      "factorisation"
    ],
    "questionText": "Prove that $n^3 + 2n$ is divisible by $3$ for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite to expose a familiar expression.",
          "workingLatex": "n^3 + 2n = n^3 - n + 3n",
          "explanation": "Splitting $2n$ as $-n+3n$ is a clever regrouping: it turns part of the expression into $n^3-n$, which factors into consecutive integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the n³ − n part.",
          "workingLatex": "n^3 - n = (n-1)\\,n\\,(n+1)",
          "explanation": "Using $n^3-n=n(n^2-1)=(n-1)n(n+1)$ produces three consecutive integers, a structure that guarantees a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the whole expression.",
          "workingLatex": "n^3 + 2n = (n-1)\\,n\\,(n+1) + 3n",
          "explanation": "Combining the two parts gives a sum of a triple product and $3n$; we now show each piece is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divisibility of the product — set up cases.",
          "workingLatex": "n \\equiv 0, 1, 2 \\pmod 3",
          "explanation": "Every integer leaves remainder $0$, $1$ or $2$ modulo $3$; checking these exhaustive cases settles the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case n ≡ 0.",
          "workingLatex": "3 \\mid n",
          "explanation": "If $n$ is a multiple of $3$, the middle factor $n$ makes the product divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case n ≡ 1.",
          "workingLatex": "3 \\mid (n-1)",
          "explanation": "If $n\\equiv1$, then $n-1\\equiv0$, so the factor $n-1$ is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case n ≡ 2.",
          "workingLatex": "3 \\mid (n+1)",
          "explanation": "If $n\\equiv2$, then $n+1\\equiv0$, so the factor $n+1$ is divisible by $3$. In every case the product is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divisibility of the second term.",
          "workingLatex": "3 \\mid 3n",
          "explanation": "The term $3n$ is plainly a multiple of $3$ for any integer $n$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add two multiples of 3.",
          "workingLatex": "3 \\mid \\big[(n-1)n(n+1) + 3n\\big]",
          "explanation": "The sum of two multiples of $3$ is again a multiple of $3$, so the whole expression is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "3 \\mid n^3 + 2n \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Both pieces are divisible by $3$, so $n^3+2n$ is divisible by $3$ for every integer $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^3+2n=(n-1)n(n+1)+3n$. The triple product of consecutive integers is divisible by $3$, and $3n$ is too, so their sum is divisible by $3$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "proof by exhaustion",
      "divisibility"
    ],
    "questionText": "Prove that $n(n+1)(2n+1)$ is divisible by $6$ for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the product.",
          "workingLatex": "P = n(n+1)(2n+1)",
          "explanation": "We label the expression $P$ so we can refer to it while proving divisibility by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split 6 into coprime factors.",
          "workingLatex": "6 = 2 \\times 3, \\quad \\gcd(2,3)=1",
          "explanation": "To prove divisibility by $6$ it suffices to prove divisibility by $2$ and by $3$ separately, because $2$ and $3$ have no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divisibility by 2.",
          "workingLatex": "n, n+1 \\text{ consecutive} \\Rightarrow \\text{one is even}",
          "explanation": "The factors $n$ and $n+1$ are consecutive integers, so one of them is even, making $P$ even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record divisibility by 2.",
          "workingLatex": "2 \\mid P",
          "explanation": "An even factor makes the whole product even, so $P$ is divisible by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divisibility by 3 — set up cases.",
          "workingLatex": "n \\equiv 0, 1, 2 \\pmod 3",
          "explanation": "We exhaust the three possible remainders of $n$ modulo $3$; the factor $2n+1$ means we must check each explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case n ≡ 0.",
          "workingLatex": "3 \\mid n",
          "explanation": "If $n$ is a multiple of $3$, the factor $n$ makes $P$ divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case n ≡ 1.",
          "workingLatex": "2n+1 \\equiv 2(1)+1 = 3 \\equiv 0 \\pmod 3",
          "explanation": "If $n\\equiv1$, then $2n+1\\equiv0$, so the factor $2n+1$ is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case n ≡ 2.",
          "workingLatex": "n+1 \\equiv 0 \\pmod 3",
          "explanation": "If $n\\equiv2$, then $n+1\\equiv0$, so the factor $n+1$ is divisible by $3$. Every case yields a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Record divisibility by 3.",
          "workingLatex": "3 \\mid P",
          "explanation": "In all three exhaustive cases one factor is divisible by $3$, so $P$ is divisible by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the results.",
          "workingLatex": "2 \\mid P \\text{ and } 3 \\mid P",
          "explanation": "We have shown $P$ is divisible by both $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply coprimality.",
          "workingLatex": "\\gcd(2,3)=1 \\Rightarrow 6 \\mid P",
          "explanation": "Because $2$ and $3$ are coprime, divisibility by each forces divisibility by their product $6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the conclusion.",
          "workingLatex": "6 \\mid n(n+1)(2n+1) \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Hence $n(n+1)(2n+1)$ is divisible by $6$ for every integer $n$ — the fact behind the sum-of-squares formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n(n+1)$ is even so $2\\mid P$; checking $n\\equiv0,1,2\\pmod3$ shows one factor is always a multiple of $3$ so $3\\mid P$. As $\\gcd(2,3)=1$, $6\\mid P$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "proof by exhaustion",
      "consecutive integers",
      "divisibility"
    ],
    "questionText": "Prove that the product of any four consecutive integers is divisible by $24$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the product.",
          "workingLatex": "P = n(n+1)(n+2)(n+3)",
          "explanation": "Let $P$ be the product of the four consecutive integers starting at $n$. We must show $24 \\mid P$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split 24 into coprime factors.",
          "workingLatex": "24 = 8 \\times 3, \\quad \\gcd(8,3)=1",
          "explanation": "It suffices to prove divisibility by $8$ and by $3$ separately, since $8$ and $3$ share no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divisibility by 3 — locate a multiple of 3.",
          "workingLatex": "\\text{among } n, n+1, n+2 \\text{ one is } \\equiv 0 \\pmod 3",
          "explanation": "Any three consecutive integers contain a multiple of $3$, and $n,n+1,n+2$ are among our four factors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Justify by exhausting n mod 3.",
          "workingLatex": "n\\equiv0:\\, 3\\mid n;\\ \\ n\\equiv1:\\, 3\\mid(n+2);\\ \\ n\\equiv2:\\, 3\\mid(n+1)",
          "explanation": "Checking each remainder confirms one of the first three factors is always divisible by $3$, so $3 \\mid P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Record divisibility by 3.",
          "workingLatex": "3 \\mid P",
          "explanation": "In every case a factor is a multiple of $3$, so the whole product is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divisibility by 8 — count the even factors.",
          "workingLatex": "\\text{among 4 consecutive integers, exactly two are even}",
          "explanation": "Consecutive integers alternate parity, so among four in a row precisely two are even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the two even factors.",
          "workingLatex": "\\text{two consecutive even numbers: } 2m \\text{ and } 2m+2",
          "explanation": "The two even factors differ by $2$, so they are consecutive even numbers, writable as $2m$ and $2m+2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor out the twos.",
          "workingLatex": "(2m)(2m+2) = 4m(m+1)",
          "explanation": "Each even factor contributes a $2$, giving an explicit factor of $4$ times $m(m+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use consecutiveness of m and m+1.",
          "workingLatex": "m, m+1 \\text{ consecutive} \\Rightarrow m(m+1) = 2t",
          "explanation": "Among two consecutive integers one is even, so $m(m+1)$ is even, say $2t$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the even part is divisible by 8.",
          "workingLatex": "(2m)(2m+2) = 4 \\cdot 2t = 8t",
          "explanation": "Substituting $m(m+1)=2t$ shows the product of the two even factors is divisible by $8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Lift to the whole product.",
          "workingLatex": "8 \\mid (2m)(2m+2) \\Rightarrow 8 \\mid P",
          "explanation": "Since these two even numbers are factors of $P$, and their product is divisible by $8$, so is $P$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Gather the two results.",
          "workingLatex": "8 \\mid P \\text{ and } 3 \\mid P",
          "explanation": "We have now established divisibility by both $8$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply coprimality.",
          "workingLatex": "\\gcd(8,3)=1",
          "explanation": "Because $8$ and $3$ are coprime, divisibility by each separately forces divisibility by their product.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Deduce divisibility by 24.",
          "workingLatex": "24 \\mid P",
          "explanation": "Combining the coprime factors gives $8 \\times 3 = 24$ dividing $P$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion.",
          "workingLatex": "24 \\mid n(n+1)(n+2)(n+3) \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Hence the product of any four consecutive integers is divisible by $24$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Among four consecutive integers one of $n,n+1,n+2$ is a multiple of $3$, and the two even factors are consecutive evens whose product is $8t$. So $3\\mid P$ and $8\\mid P$; as $\\gcd(8,3)=1$, $24\\mid P$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "algebraic identity",
      "perfect square",
      "factorisation"
    ],
    "questionText": "Prove that the product of any four consecutive integers, increased by $1$, is a perfect square.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the quantity to analyse.",
          "workingLatex": "E = n(n+1)(n+2)(n+3) + 1",
          "explanation": "Let $E$ be the product of four consecutive integers plus $1$. We aim to show $E$ equals the square of an integer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pair the factors strategically.",
          "workingLatex": "[\\,n(n+3)\\,]\\,[\\,(n+1)(n+2)\\,]",
          "explanation": "Pairing the outer factors and the inner factors is the key idea: both pairs will share a common quadratic, revealing hidden structure.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the outer pair.",
          "workingLatex": "n(n+3) = n^2 + 3n",
          "explanation": "Multiplying the outer factors gives $n^2+3n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the inner pair.",
          "workingLatex": "(n+1)(n+2) = n^2 + 3n + 2",
          "explanation": "Multiplying the inner factors gives $n^2+3n+2$, the same quadratic as before but $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce a substitution.",
          "workingLatex": "\\text{let } u = n^2 + 3n",
          "explanation": "Both pairs are built from $n^2+3n$, so naming it $u$ turns a quartic into a simple quadratic in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the product.",
          "workingLatex": "n(n+1)(n+2)(n+3) = u(u+2)",
          "explanation": "With the substitution the four-factor product becomes $u(u+2)$, which is far easier to handle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand u(u+2).",
          "workingLatex": "u(u+2) = u^2 + 2u",
          "explanation": "Expanding gives $u^2+2u$, one short of a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the 1.",
          "workingLatex": "E = u^2 + 2u + 1",
          "explanation": "Including the $+1$ from the original expression completes $u^2+2u$ into a recognisable square.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recognise the perfect square.",
          "workingLatex": "E = (u + 1)^2",
          "explanation": "The expression $u^2+2u+1$ factors exactly as $(u+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute back for u.",
          "workingLatex": "E = (n^2 + 3n + 1)^2",
          "explanation": "Replacing $u$ with $n^2+3n$ gives $E=(n^2+3n+1)^2$ in terms of the original variable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the base is an integer.",
          "workingLatex": "n^2 + 3n + 1 \\in \\mathbb{Z}",
          "explanation": "For integer $n$, the quantity $n^2+3n+1$ is an integer, so $E$ is the square of an integer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the conclusion.",
          "workingLatex": "E = (n^2+3n+1)^2 \\text{ is a perfect square}",
          "explanation": "Hence $n(n+1)(n+2)(n+3)+1$ is always a perfect square, namely $(n^2+3n+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the structure that made it work.",
          "workingLatex": "u(u+2)+1 = (u+1)^2",
          "explanation": "The proof hinged on spotting that the product telescopes to $u(u+2)$, which is always one less than a perfect square.",
          "diagram": null
        }
      ],
      "finalAnswer": "Pairing gives $n(n+3)=u$ and $(n+1)(n+2)=u+2$ with $u=n^2+3n$, so the product is $u(u+2)=u^2+2u$. Adding $1$ gives $(u+1)^2=(n^2+3n+1)^2$, a perfect square. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "sum of squares"
    ],
    "questionText": "Prove that $a^2 + b^2 + c^2 \\ge ab + bc + ca$ for all real numbers $a$, $b$ and $c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } a^2+b^2+c^2 \\ge ab+bc+ca",
          "explanation": "We must show one expression never falls below the other for any real $a,b,c$. A sum-of-squares identity will make the sign clear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the difference.",
          "workingLatex": "D = a^2+b^2+c^2 - (ab+bc+ca)",
          "explanation": "Proving $D\\ge0$ is equivalent to the inequality, so we focus on the difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Double the difference.",
          "workingLatex": "2D = 2a^2 + 2b^2 + 2c^2 - 2ab - 2bc - 2ca",
          "explanation": "Multiplying by $2$ is a standard trick: it lets each squared term split cleanly into two, ready to form perfect squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Regroup the terms.",
          "workingLatex": "2D = (a^2 - 2ab + b^2) + (b^2 - 2bc + c^2) + (c^2 - 2ca + a^2)",
          "explanation": "Each squared variable appears twice in $2D$, so we can distribute the terms into three groups, each matching a completed square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the regrouping.",
          "workingLatex": "a^2\\!+\\!a^2,\\ b^2\\!+\\!b^2,\\ c^2\\!+\\!c^2 \\text{ and } -2ab, -2bc, -2ca",
          "explanation": "Counting shows every term of $2D$ is used exactly once, so the regrouping is an identity, not an approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write as a sum of squares.",
          "workingLatex": "2D = (a-b)^2 + (b-c)^2 + (c-a)^2",
          "explanation": "Each bracket is a perfect square, so $2D$ is a sum of three squares.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply non-negativity.",
          "workingLatex": "(a-b)^2, (b-c)^2, (c-a)^2 \\ge 0",
          "explanation": "Every real square is non-negative, so each of the three terms is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the squares.",
          "workingLatex": "2D \\ge 0",
          "explanation": "A sum of non-negative quantities is non-negative, so $2D\\ge0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Halve to bound D.",
          "workingLatex": "D \\ge 0",
          "explanation": "Dividing by the positive number $2$ preserves the inequality, giving $D\\ge0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Translate back.",
          "workingLatex": "a^2+b^2+c^2 \\ge ab+bc+ca",
          "explanation": "Since $D\\ge0$, the original inequality holds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the equality case.",
          "workingLatex": "\\text{equality} \\iff a = b = c",
          "explanation": "Equality needs all three squares zero, i.e. $a=b=c$; this shows the bound is sharp.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the domain.",
          "workingLatex": "\\forall\\, a,b,c \\in \\mathbb{R}",
          "explanation": "The only fact used was that real squares are non-negative, valid for all real $a,b,c$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "a^2+b^2+c^2 \\ge ab+bc+ca",
          "explanation": "The difference equals $\\tfrac12\\!\\left[(a-b)^2+(b-c)^2+(c-a)^2\\right]\\ge0$, so the inequality holds for all real $a,b,c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\big(a^2+b^2+c^2-ab-bc-ca\\big)=(a-b)^2+(b-c)^2+(c-a)^2\\ge0$, so $a^2+b^2+c^2\\ge ab+bc+ca$, with equality iff $a=b=c$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "cubes",
      "modular arithmetic",
      "parity"
    ],
    "questionText": "Prove that the difference between the cubes of two consecutive integers leaves a remainder of $1$ when divided by $6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the two consecutive integers.",
          "workingLatex": "n \\text{ and } n+1",
          "explanation": "Let the smaller integer be $n$ and the larger $n+1$; a single letter keeps the argument general.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the difference of cubes.",
          "workingLatex": "D = (n+1)^3 - n^3",
          "explanation": "We subtract the smaller cube from the larger, matching 'difference between the cubes'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the leading cube.",
          "workingLatex": "(n+1)^3 = n^3 + 3n^2 + 3n + 1",
          "explanation": "Expanding $(n+1)^3$ prepares it for the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the cubes.",
          "workingLatex": "D = 3n^2 + 3n + 1",
          "explanation": "The $n^3$ terms cancel, leaving $3n^2+3n+1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor the multiple-of-3 part.",
          "workingLatex": "D = 3(n^2 + n) + 1",
          "explanation": "Pulling $3$ from the first two terms separates $D$ into a multiple of $3$ plus $1$ — but we need a multiple of $6$, so more work is needed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the bracket as a product.",
          "workingLatex": "D = 3n(n+1) + 1",
          "explanation": "Since $n^2+n=n(n+1)$, the term becomes $3n(n+1)$; the product of consecutive integers is the key to gaining an extra factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use consecutiveness for parity.",
          "workingLatex": "n, n+1 \\text{ consecutive} \\Rightarrow \\text{one even}",
          "explanation": "Among two consecutive integers one is even, so $n(n+1)$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case n even / n odd.",
          "workingLatex": "n(n+1) = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "Whether $n$ is even or $n+1$ is even, the product $n(n+1)$ equals $2k$ for some integer $k$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute into D.",
          "workingLatex": "D = 3(2k) + 1",
          "explanation": "Replacing $n(n+1)$ with $2k$ turns the factor $3$ into $3\\times2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify.",
          "workingLatex": "D = 6k + 1",
          "explanation": "Multiplying out gives $6k+1$: a multiple of $6$ plus $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the remainder.",
          "workingLatex": "D = 6k + 1, \\quad 0 \\le 1 < 6",
          "explanation": "Because $1$ is a valid remainder (between $0$ and $5$), $D$ leaves remainder $1$ on division by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm generality.",
          "workingLatex": "\\forall\\, n \\in \\mathbb{Z}",
          "explanation": "No special assumption about $n$ was made, so the result holds for every pair of consecutive integers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "(n+1)^3 - n^3 \\equiv 1 \\pmod 6",
          "explanation": "The difference of cubes equals $6k+1$, so it always leaves remainder $1$ when divided by $6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(n+1)^3-n^3=3n^2+3n+1=3n(n+1)+1$. As $n(n+1)$ is even, say $2k$, this equals $6k+1$, leaving remainder $1$ modulo $6$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "sum of squares"
    ],
    "questionText": "Prove that $x^2 + y^2 + 1 \\ge xy + x + y$ for all real numbers $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^2 + y^2 + 1 \\ge xy + x + y",
          "explanation": "We must show the left side never drops below the right for any real $x,y$. Expressing the difference as a sum of squares will settle the sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the difference.",
          "workingLatex": "D = x^2 + y^2 + 1 - (xy + x + y)",
          "explanation": "Proving $D\\ge0$ is equivalent to the inequality, so we study $D$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Double the difference.",
          "workingLatex": "2D = 2x^2 + 2y^2 + 2 - 2xy - 2x - 2y",
          "explanation": "Doubling lets each squared term split so the expression can be rebuilt as perfect squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Anticipate the square pieces.",
          "workingLatex": "\\text{aim: } (x-y)^2 + (x-1)^2 + (y-1)^2",
          "explanation": "The cross terms $-2xy, -2x, -2y$ suggest three squares built from the pairs $(x,y),(x,1),(y,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the candidate squares.",
          "workingLatex": "(x-y)^2 + (x-1)^2 + (y-1)^2 = 2x^2 + 2y^2 - 2xy - 2x - 2y + 2",
          "explanation": "Expanding the three squares and adding them reproduces every term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Match against 2D.",
          "workingLatex": "2x^2 + 2y^2 + 2 - 2xy - 2x - 2y",
          "explanation": "This is exactly $2D$, so the three squares account for all its terms — the grouping is an identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write 2D as a sum of squares.",
          "workingLatex": "2D = (x-y)^2 + (x-1)^2 + (y-1)^2",
          "explanation": "We have expressed $2D$ as a sum of three perfect squares.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply non-negativity.",
          "workingLatex": "(x-y)^2, (x-1)^2, (y-1)^2 \\ge 0",
          "explanation": "Each real square is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the squares.",
          "workingLatex": "2D \\ge 0",
          "explanation": "A sum of non-negative terms is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Halve to bound D.",
          "workingLatex": "D \\ge 0",
          "explanation": "Dividing by $2$ preserves the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Translate back.",
          "workingLatex": "x^2 + y^2 + 1 \\ge xy + x + y",
          "explanation": "Since $D\\ge0$, the original inequality holds.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the equality case.",
          "workingLatex": "\\text{equality} \\iff x = y = 1",
          "explanation": "All three squares vanish only when $x=y$ and $x=1$ and $y=1$, i.e. $x=y=1$; so the bound is sharp.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the domain.",
          "workingLatex": "\\forall\\, x, y \\in \\mathbb{R}",
          "explanation": "Only the non-negativity of real squares was used, which holds for all real $x,y$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "x^2 + y^2 + 1 \\ge xy + x + y",
          "explanation": "Because $2D=(x-y)^2+(x-1)^2+(y-1)^2\\ge0$, the inequality holds for all real $x$ and $y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\big(x^2+y^2+1-xy-x-y\\big)=(x-y)^2+(x-1)^2+(y-1)^2\\ge0$, so $x^2+y^2+1\\ge xy+x+y$, with equality iff $x=y=1$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "squares",
      "divisibility"
    ],
    "questionText": "Prove that the sum of the squares of any five consecutive integers is divisible by $5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the integers symmetrically.",
          "workingLatex": "n-2,\\; n-1,\\; n,\\; n+1,\\; n+2",
          "explanation": "Centring the five consecutive integers on the middle value $n$ makes the linear terms cancel in pairs when we expand and add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of the squares.",
          "workingLatex": "S = (n-2)^2 + (n-1)^2 + n^2 + (n+1)^2 + (n+2)^2",
          "explanation": "We translate the statement directly: square each of the five integers and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand (n-2)².",
          "workingLatex": "(n-2)^2 = n^2 - 4n + 4",
          "explanation": "Expanding the leftmost square prepares it for combination.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand (n-1)².",
          "workingLatex": "(n-1)^2 = n^2 - 2n + 1",
          "explanation": "The next square expands similarly, with a smaller linear term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand (n+1)².",
          "workingLatex": "(n+1)^2 = n^2 + 2n + 1",
          "explanation": "This mirrors $(n-1)^2$ with the sign of the middle term flipped.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand (n+2)².",
          "workingLatex": "(n+2)^2 = n^2 + 4n + 4",
          "explanation": "This mirrors $(n-2)^2$; the symmetric layout means the linear terms will cancel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the squared coefficients.",
          "workingLatex": "n^2 + n^2 + n^2 + n^2 + n^2 = 5n^2",
          "explanation": "Each of the five expansions contributes one $n^2$, giving $5n^2$ in total.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the linear terms.",
          "workingLatex": "-4n - 2n + 0 + 2n + 4n = 0",
          "explanation": "The symmetric $\\pm4n$ and $\\pm2n$ pairs cancel exactly, which is why centring on $n$ was worthwhile.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the constants.",
          "workingLatex": "4 + 1 + 0 + 1 + 4 = 10",
          "explanation": "Summing the constant terms from each expansion gives $10$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine into a simplified sum.",
          "workingLatex": "S = 5n^2 + 10",
          "explanation": "Collecting the pieces leaves $S=5n^2+10$, with the linear part gone.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factor out 5.",
          "workingLatex": "S = 5(n^2 + 2)",
          "explanation": "Both terms are multiples of $5$, so factoring exposes the divisibility we want.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "n^2 + 2 \\in \\mathbb{Z}",
          "explanation": "For integer $n$, $n^2+2$ is an integer, so $S$ is $5$ times a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "5 \\mid S \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "The sum of the squares of any five consecutive integers equals $5(n^2+2)$, hence is always divisible by $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centring on $n$, the sum of squares is $5n^2+10=5(n^2+2)$, a multiple of $5$. Hence the sum of the squares of any five consecutive integers is divisible by $5$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "completing the square"
    ],
    "questionText": "Prove that $x^2 + 4 \\ge 4x$ for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^2 + 4 \\ge 4x \\ \\forall x \\in \\mathbb{R}",
          "explanation": "We want one side never to fall below the other. Moving everything to one side turns this into a statement about the sign of a single expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to one side.",
          "workingLatex": "x^2 - 4x + 4 \\ge 0",
          "explanation": "Subtracting $4x$ from both sides is reversible, so proving this equivalent inequality proves the original.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise a perfect square.",
          "workingLatex": "x^2 - 4x + 4 = (x-2)^2",
          "explanation": "The left-hand side factors exactly as $(x-2)^2$, which is the whole point: squares have a known sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the inequality.",
          "workingLatex": "(x-2)^2 \\ge 0",
          "explanation": "Replacing the quadratic by its square form makes the claim transparent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use non-negativity of a square.",
          "workingLatex": "(x-2)^2 \\ge 0 \\text{ is always true}",
          "explanation": "The square of any real number is at least $0$, so this inequality holds for every real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reverse the rearrangement.",
          "workingLatex": "x^2 - 4x + 4 \\ge 0 \\Rightarrow x^2 + 4 \\ge 4x",
          "explanation": "Adding $4x$ back to both sides returns us to the original inequality, now known to be true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the equality case.",
          "workingLatex": "\\text{equality when } x = 2",
          "explanation": "The two sides are equal exactly when $(x-2)^2=0$, i.e. $x=2$; elsewhere the inequality is strict.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion.",
          "workingLatex": "x^2 + 4 \\ge 4x \\ \\forall x \\in \\mathbb{R}",
          "explanation": "Because the difference is a perfect square, it is never negative, so the inequality holds for all real $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2+4-4x=(x-2)^2\\ge0$, so $x^2+4\\ge4x$ for all real $x$, with equality at $x=2$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "place value",
      "divisibility"
    ],
    "questionText": "A two-digit number has tens digit $a$ and units digit $b$. Prove that the number minus the number formed by reversing its digits is divisible by $9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the number using place value.",
          "workingLatex": "10a + b, \\quad a \\in \\{1,\\dots,9\\},\\ b \\in \\{0,\\dots,9\\}",
          "explanation": "A two-digit number is ten times its tens digit plus its units digit, so it equals $10a+b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the reversed number.",
          "workingLatex": "10b + a",
          "explanation": "Reversing swaps the digits, so the tens digit becomes $b$ and the units digit becomes $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the difference.",
          "workingLatex": "(10a + b) - (10b + a)",
          "explanation": "The statement is about subtracting the reverse from the original, so we write that difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect like terms.",
          "workingLatex": "9a - 9b",
          "explanation": "The $a$ terms give $10a-a=9a$ and the $b$ terms give $b-10b=-9b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out 9.",
          "workingLatex": "9(a - b)",
          "explanation": "Both terms share a factor of $9$; extracting it exposes the divisibility we want.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "a - b \\in \\mathbb{Z}",
          "explanation": "Digits are integers, so $a-b$ is an integer, making the difference $9\\times(\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "9 \\mid (10a+b)-(10b+a)",
          "explanation": "The difference equals $9(a-b)$, a multiple of $9$, so a two-digit number minus its reverse is always divisible by $9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(10a+b)-(10b+a)=9a-9b=9(a-b)$, a multiple of $9$. Hence the number minus its reverse is divisible by $9$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "even numbers",
      "factorisation"
    ],
    "questionText": "Prove that $n^2 + 3n$ is even for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expression.",
          "workingLatex": "n^2 + 3n",
          "explanation": "We begin from the expression to be shown even and look for a factorisation that reveals its parity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor.",
          "workingLatex": "n^2 + 3n = n(n + 3)",
          "explanation": "Taking out $n$ writes the expression as a product, which is easier to reason about than a sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up a parity argument.",
          "workingLatex": "n \\text{ is even or odd}",
          "explanation": "Every integer is even or odd; we check that the product is even in each case.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case: n even.",
          "workingLatex": "n = 2k \\Rightarrow n(n+3) = 2k(n+3)",
          "explanation": "If $n$ is even, the factor $n$ carries a $2$, so the product is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case: n odd.",
          "workingLatex": "n = 2k+1 \\Rightarrow n+3 = 2k+4 = 2(k+2)",
          "explanation": "If $n$ is odd, then $n+3$ is even, so the other factor carries a $2$ and the product is even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the cases.",
          "workingLatex": "n(n+3) = 2m, \\quad m \\in \\mathbb{Z}",
          "explanation": "In both exhaustive cases the product is twice an integer, hence even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "n^2 + 3n \\text{ is even for all } n \\in \\mathbb{Z}",
          "explanation": "Whichever parity $n$ has, one factor of $n(n+3)$ is even, so $n^2+3n$ is always even.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^2+3n=n(n+3)$. If $n$ is even the first factor is even; if $n$ is odd then $n+3$ is even. Either way the product is even. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "even numbers",
      "divisibility"
    ],
    "questionText": "Prove that the sum of any three consecutive even numbers is divisible by $6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the first even number.",
          "workingLatex": "2n, \\quad n \\in \\mathbb{Z}",
          "explanation": "Every even number is $2$ times an integer, so the first is $2n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the next two even numbers.",
          "workingLatex": "2n+2 \\text{ and } 2n+4",
          "explanation": "Consecutive even numbers go up in steps of $2$, so the next two are $2n+2$ and $2n+4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the three numbers.",
          "workingLatex": "S = 2n + (2n+2) + (2n+4)",
          "explanation": "The claim concerns their sum, so we add the three even numbers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect like terms.",
          "workingLatex": "S = 6n + 6",
          "explanation": "There are three $2n$ terms giving $6n$, and the constants $2$ and $4$ give $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out 6.",
          "workingLatex": "S = 6(n + 1)",
          "explanation": "Both terms share a factor of $6$; pulling it out exposes divisibility by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "n + 1 \\in \\mathbb{Z}",
          "explanation": "Since $n$ is an integer, $S$ is $6$ times a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "6 \\mid S \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "The sum equals $6(n+1)$, so the sum of any three consecutive even numbers is divisible by $6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2n+(2n+2)+(2n+4)=6n+6=6(n+1)$, a multiple of $6$. Hence the sum of three consecutive even numbers is divisible by $6$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "place value",
      "divisibility"
    ],
    "questionText": "A two-digit number has tens digit $a$ and units digit $b$. Prove that the number minus the sum of its digits is divisible by $9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the number using place value.",
          "workingLatex": "10a + b",
          "explanation": "A two-digit number equals ten times its tens digit plus its units digit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of its digits.",
          "workingLatex": "a + b",
          "explanation": "The digit sum simply adds the two digits together.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the difference.",
          "workingLatex": "(10a + b) - (a + b)",
          "explanation": "We subtract the digit sum from the number, as the statement requires.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "9a",
          "explanation": "The $b$ terms cancel and $10a-a=9a$, leaving a single term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Display the factor of 9.",
          "workingLatex": "9a = 9 \\times a",
          "explanation": "The result is exactly $9$ times the tens digit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify a as an integer.",
          "workingLatex": "a \\in \\mathbb{Z}",
          "explanation": "The digit $a$ is an integer, so the difference is $9\\times(\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "9 \\mid (10a+b)-(a+b)",
          "explanation": "The difference equals $9a$, a multiple of $9$, so a two-digit number minus its digit sum is always divisible by $9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(10a+b)-(a+b)=9a$, a multiple of $9$. Hence the number minus its digit sum is divisible by $9$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "even numbers"
    ],
    "questionText": "Prove that the sum of any four consecutive integers is even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let the first integer be general.",
          "workingLatex": "n \\in \\mathbb{Z}",
          "explanation": "Using $n$ for the first integer keeps the argument valid for every starting value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the four consecutive integers.",
          "workingLatex": "n,\\; n+1,\\; n+2,\\; n+3",
          "explanation": "Consecutive integers rise by $1$, so the four numbers are $n$ through $n+3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add them.",
          "workingLatex": "S = n + (n+1) + (n+2) + (n+3)",
          "explanation": "The claim is about their total, so we sum the four integers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect like terms.",
          "workingLatex": "S = 4n + 6",
          "explanation": "Four $n$ terms give $4n$, and the constants $1+2+3$ give $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out 2.",
          "workingLatex": "S = 2(2n + 3)",
          "explanation": "Both terms are even, so factoring $2$ shows the sum is twice an integer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "2n + 3 \\in \\mathbb{Z}",
          "explanation": "Since $n$ is an integer, $2n+3$ is an integer, so $S=2\\times(\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "S = 2(2n+3) \\text{ is even}",
          "explanation": "The sum equals $2(2n+3)$, which is even by definition, so the sum of any four consecutive integers is even.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n+(n+1)+(n+2)+(n+3)=4n+6=2(2n+3)$, which is even. Hence the sum of any four consecutive integers is even. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "even numbers",
      "divisibility",
      "squares"
    ],
    "questionText": "Prove that if $n$ is even, then $n^2$ is divisible by $4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the even number in standard form.",
          "workingLatex": "n = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "An even number is $2$ times an integer, so $n=2k$; this lets us compute its square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square it.",
          "workingLatex": "n^2 = (2k)^2",
          "explanation": "The claim is about $n^2$, so we square the even form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the square.",
          "workingLatex": "n^2 = 4k^2",
          "explanation": "Squaring $2k$ gives $4k^2$, since $(2k)^2=2^2k^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Display the factor of 4.",
          "workingLatex": "n^2 = 4 \\times k^2",
          "explanation": "The result is explicitly $4$ times $k^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify k² as an integer.",
          "workingLatex": "k^2 \\in \\mathbb{Z}",
          "explanation": "Since $k$ is an integer, so is $k^2$, making $n^2=4\\times(\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the form.",
          "workingLatex": "4 \\mid 4k^2",
          "explanation": "A number equal to $4$ times an integer is a multiple of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "4 \\mid n^2 \\text{ for even } n",
          "explanation": "For any even $n=2k$, its square is $4k^2$, so $n^2$ is divisible by $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $n=2k$ then $n^2=4k^2=4\\times k^2$, a multiple of $4$. Hence $n^2$ is divisible by $4$ whenever $n$ is even. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "odd numbers",
      "even numbers"
    ],
    "questionText": "Prove that the sum of an even number and an odd number is odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the even number.",
          "workingLatex": "2a, \\quad a \\in \\mathbb{Z}",
          "explanation": "Every even number is $2$ times an integer, so it has the form $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Represent the odd number.",
          "workingLatex": "2b+1, \\quad b \\in \\mathbb{Z}",
          "explanation": "Every odd number is one more than an even number, so it has the form $2b+1$; it needs its own letter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the sum.",
          "workingLatex": "2a + (2b+1)",
          "explanation": "The statement is about adding an even and an odd number, so we write their sum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect like terms.",
          "workingLatex": "2a + 2b + 1",
          "explanation": "Removing the bracket gathers the two even parts and leaves the $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor the even part.",
          "workingLatex": "2(a + b) + 1",
          "explanation": "Pulling out $2$ separates the sum into an even piece plus a leftover $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "a + b \\in \\mathbb{Z}",
          "explanation": "Since $a,b$ are integers, $2(a+b)$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "2(a+b)+1 \\text{ is odd}",
          "explanation": "The sum has the form (even)$+1$, so it is odd; an even plus an odd is always odd.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2a+(2b+1)=2(a+b)+1$, which is even $+1$, hence odd. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "place value",
      "divisibility"
    ],
    "questionText": "A three-digit number is written with the same digit $a$ in every position (for example $444$). Prove that this number is divisible by $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the number using place value.",
          "workingLatex": "100a + 10a + a, \\quad a \\in \\{1,\\dots,9\\}",
          "explanation": "Each digit contributes its face value times its place value; all three digits are $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the place values.",
          "workingLatex": "= 111a",
          "explanation": "Combining $100a+10a+a$ gives $111a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor 111.",
          "workingLatex": "111 = 3 \\times 37",
          "explanation": "The number $111$ factors as $3\\times37$, which reveals a factor of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the number.",
          "workingLatex": "111a = 3 \\times (37a)",
          "explanation": "Substituting the factorisation displays a factor of $3$ explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "37a \\in \\mathbb{Z}",
          "explanation": "Since $a$ is a digit, $37a$ is an integer, so the number is $3\\times(\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the form.",
          "workingLatex": "3 \\mid 3(37a)",
          "explanation": "A number equal to $3$ times an integer is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "3 \\mid \\overline{aaa}",
          "explanation": "A three-digit number with all equal digits equals $111a=3(37a)$, so it is divisible by $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overline{aaa}=100a+10a+a=111a=3(37a)$, a multiple of $3$. Hence it is divisible by $3$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "odd numbers",
      "divisibility"
    ],
    "questionText": "Prove that the sum of any three consecutive odd numbers is divisible by $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the first odd number.",
          "workingLatex": "2n+1, \\quad n \\in \\mathbb{Z}",
          "explanation": "Every odd number has the form $2n+1$; using a letter keeps the proof general.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the next two odd numbers.",
          "workingLatex": "2n+3 \\text{ and } 2n+5",
          "explanation": "Consecutive odd numbers increase by $2$, so the next two are $2n+3$ and $2n+5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the three numbers.",
          "workingLatex": "S = (2n+1) + (2n+3) + (2n+5)",
          "explanation": "The statement concerns their sum, so we add the three odd numbers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect like terms.",
          "workingLatex": "S = 6n + 9",
          "explanation": "Three $2n$ terms give $6n$, and $1+3+5$ gives $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out 3.",
          "workingLatex": "S = 3(2n + 3)",
          "explanation": "Both terms are multiples of $3$; factoring exposes the divisibility.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "2n + 3 \\in \\mathbb{Z}",
          "explanation": "Since $n$ is an integer, $S=3\\times(\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the neat interpretation.",
          "workingLatex": "S = 3 \\times (\\text{middle number})",
          "explanation": "Here $2n+3$ is the middle odd number, so the sum is three times the middle term — a nice sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion.",
          "workingLatex": "3 \\mid S \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "The sum equals $3(2n+3)$, so the sum of any three consecutive odd numbers is divisible by $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2n+1)+(2n+3)+(2n+5)=6n+9=3(2n+3)$, a multiple of $3$ (indeed three times the middle number). $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "even numbers",
      "factorisation"
    ],
    "questionText": "Prove that $n^2 - n$ is even for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expression.",
          "workingLatex": "n^2 - n",
          "explanation": "We start from the expression to be shown even and look for structure.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor.",
          "workingLatex": "n^2 - n = n(n - 1)",
          "explanation": "Taking out $n$ rewrites it as a product of two integers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise consecutive integers.",
          "workingLatex": "n-1 \\text{ and } n \\text{ are consecutive}",
          "explanation": "$n-1$ and $n$ follow one after another, so exactly one of them is even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case: n even.",
          "workingLatex": "n = 2k \\Rightarrow n(n-1) = 2k(n-1)",
          "explanation": "If $n$ is even, the factor $n$ carries a $2$, so the product is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case: n odd.",
          "workingLatex": "n-1 = 2k \\Rightarrow n(n-1) = 2k\\,n",
          "explanation": "If $n$ is odd, then $n-1$ is even, so again the product is even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the cases.",
          "workingLatex": "n(n-1) = 2m, \\quad m \\in \\mathbb{Z}",
          "explanation": "In both cases the product equals twice an integer, hence even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "n^2 - n \\text{ is even for all } n \\in \\mathbb{Z}",
          "explanation": "Since $n^2-n=n(n-1)$ is a product of consecutive integers, it is always even.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^2-n=n(n-1)$ is a product of consecutive integers, one of which is even, so it is even for every integer $n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "odd numbers",
      "even numbers"
    ],
    "questionText": "Prove that the difference between any two odd numbers is even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the first odd number.",
          "workingLatex": "2a+1, \\quad a \\in \\mathbb{Z}",
          "explanation": "Every odd number has the form $2a+1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Represent the second odd number.",
          "workingLatex": "2b+1, \\quad b \\in \\mathbb{Z}",
          "explanation": "The second odd number is independent, so it uses its own letter $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the difference.",
          "workingLatex": "(2a+1) - (2b+1)",
          "explanation": "The statement is about subtracting one odd number from another.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Remove the brackets.",
          "workingLatex": "2a + 1 - 2b - 1",
          "explanation": "Distributing the minus sign changes the sign of both terms in the second bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "2a - 2b",
          "explanation": "The $+1$ and $-1$ cancel, leaving only the even terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out 2.",
          "workingLatex": "2(a - b)",
          "explanation": "Pulling out $2$ shows the difference is twice an integer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "2(a-b) \\text{ is even}",
          "explanation": "Since $a-b$ is an integer, the difference is $2\\times(\\text{integer})$, hence even; the difference of two odd numbers is always even.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2a+1)-(2b+1)=2a-2b=2(a-b)$, which is even. Hence the difference of two odd numbers is even. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "completing the square",
      "inequalities"
    ],
    "questionText": "Prove that $x^2 + 6x + 10 > 0$ for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^2 + 6x + 10 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "We want the quadratic to be strictly positive everywhere; completing the square makes its sign clear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Focus on the quadratic and linear terms.",
          "workingLatex": "x^2 + 6x",
          "explanation": "We complete the square on $x^2+6x$ first and adjust the constant afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square.",
          "workingLatex": "x^2 + 6x = (x+3)^2 - 9",
          "explanation": "Half of $6$ is $3$, so $(x+3)^2=x^2+6x+9$; subtracting $9$ restores the original terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back.",
          "workingLatex": "x^2 + 6x + 10 = (x+3)^2 - 9 + 10",
          "explanation": "Replacing $x^2+6x$ and keeping the $+10$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constant.",
          "workingLatex": "= (x+3)^2 + 1",
          "explanation": "Combining $-9+10$ gives $+1$, so the quadratic is a square plus $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use non-negativity of a square.",
          "workingLatex": "(x+3)^2 \\ge 0",
          "explanation": "The square of any real number is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 1.",
          "workingLatex": "(x+3)^2 + 1 \\ge 1",
          "explanation": "Adding $1$ preserves the inequality, so the expression is at least $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with zero.",
          "workingLatex": "(x+3)^2 + 1 \\ge 1 > 0",
          "explanation": "Since $1>0$, the expression is strictly positive; its minimum value $1$ occurs at $x=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "x^2 + 6x + 10 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "The quadratic equals $(x+3)^2+1\\ge1$, so it is positive for every real $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2+6x+10=(x+3)^2+1\\ge1>0$ for all real $x$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "completing the square",
      "inequalities"
    ],
    "questionText": "Prove that $x^2 - 2x + 5 > 0$ for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^2 - 2x + 5 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "We aim to show the quadratic is strictly positive; completing the square exposes its minimum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Focus on the first two terms.",
          "workingLatex": "x^2 - 2x",
          "explanation": "We complete the square on $x^2-2x$ and handle the constant separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square.",
          "workingLatex": "x^2 - 2x = (x-1)^2 - 1",
          "explanation": "Half of $-2$ is $-1$, so $(x-1)^2=x^2-2x+1$; subtracting $1$ recovers the original terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back.",
          "workingLatex": "x^2 - 2x + 5 = (x-1)^2 - 1 + 5",
          "explanation": "Replacing $x^2-2x$ and keeping $+5$ gives an equivalent form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constant.",
          "workingLatex": "= (x-1)^2 + 4",
          "explanation": "Combining $-1+5$ gives $+4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use non-negativity of a square.",
          "workingLatex": "(x-1)^2 \\ge 0",
          "explanation": "Any real square is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 4.",
          "workingLatex": "(x-1)^2 + 4 \\ge 4",
          "explanation": "Adding $4$ keeps the inequality, so the expression is at least $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with zero.",
          "workingLatex": "(x-1)^2 + 4 \\ge 4 > 0",
          "explanation": "Since $4>0$, the expression is strictly positive; its least value $4$ occurs at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "x^2 - 2x + 5 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "The quadratic equals $(x-1)^2+4\\ge4$, so it is positive for all real $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2-2x+5=(x-1)^2+4\\ge4>0$ for all real $x$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "completing the square",
      "inequalities"
    ],
    "questionText": "Prove that $2x^2 - 4x + 3 > 0$ for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } 2x^2 - 4x + 3 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "The leading coefficient is not $1$, so we first factor it out before completing the square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor 2 from the variable terms.",
          "workingLatex": "2(x^2 - 2x) + 3",
          "explanation": "Taking $2$ out of $2x^2-4x$ leaves a monic quadratic inside the bracket, ready for completing the square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square inside.",
          "workingLatex": "x^2 - 2x = (x-1)^2 - 1",
          "explanation": "Half of $-2$ is $-1$, so $(x-1)^2=x^2-2x+1$; subtracting $1$ restores the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back.",
          "workingLatex": "2\\big[(x-1)^2 - 1\\big] + 3",
          "explanation": "Replacing the bracket gives the whole expression in terms of a square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distribute the 2.",
          "workingLatex": "2(x-1)^2 - 2 + 3",
          "explanation": "Multiplying through by $2$ affects both the square and the $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the constant.",
          "workingLatex": "= 2(x-1)^2 + 1",
          "explanation": "Combining $-2+3$ gives $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use non-negativity of a square.",
          "workingLatex": "(x-1)^2 \\ge 0 \\Rightarrow 2(x-1)^2 \\ge 0",
          "explanation": "A real square is at least $0$, and multiplying by the positive number $2$ keeps it non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add 1.",
          "workingLatex": "2(x-1)^2 + 1 \\ge 1",
          "explanation": "Adding $1$ preserves the inequality, so the expression is at least $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with zero.",
          "workingLatex": "2(x-1)^2 + 1 \\ge 1 > 0",
          "explanation": "Since $1>0$, the expression is strictly positive; its minimum value $1$ occurs at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "2x^2 - 4x + 3 > 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "The expression equals $2(x-1)^2+1\\ge1$, so it is positive for all real $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x^2-4x+3=2(x-1)^2+1\\ge1>0$ for all real $x$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "algebraic fractions"
    ],
    "questionText": "Prove that $a + \\dfrac{1}{a} \\ge 2$ for all real numbers $a > 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } a + \\tfrac{1}{a} \\ge 2 \\text{ for } a > 0",
          "explanation": "We restrict to $a>0$ so that $1/a$ is defined and positive. We show the difference from $2$ is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the difference from 2.",
          "workingLatex": "a + \\tfrac{1}{a} - 2",
          "explanation": "Proving this is $\\ge0$ is equivalent to the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write over a common denominator.",
          "workingLatex": "\\dfrac{a^2 - 2a + 1}{a}",
          "explanation": "Combining the terms over $a$ turns the expression into a single fraction we can analyse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise the numerator.",
          "workingLatex": "a^2 - 2a + 1 = (a-1)^2",
          "explanation": "The numerator is a perfect square, which is the key to fixing its sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the difference.",
          "workingLatex": "a + \\tfrac{1}{a} - 2 = \\dfrac{(a-1)^2}{a}",
          "explanation": "Substituting the square gives a fraction whose sign is now easy to read.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sign of the numerator.",
          "workingLatex": "(a-1)^2 \\ge 0",
          "explanation": "The square of a real number is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sign of the denominator.",
          "workingLatex": "a > 0",
          "explanation": "By assumption $a$ is positive, so the denominator is positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sign of the quotient.",
          "workingLatex": "\\dfrac{(a-1)^2}{a} \\ge 0",
          "explanation": "A non-negative numerator over a positive denominator is non-negative, so $a+\\tfrac1a-2\\ge0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "a + \\tfrac{1}{a} \\ge 2 \\text{ for } a > 0",
          "explanation": "Hence $a+\\tfrac1a\\ge2$, with equality when $a=1$. Note the positivity of $a$ was essential.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a+\\tfrac1a-2=\\dfrac{(a-1)^2}{a}\\ge0$ for $a>0$, so $a+\\tfrac1a\\ge2$, with equality at $a=1$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "squares"
    ],
    "questionText": "Prove that $x^4 + 1 \\ge 2x^2$ for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^4 + 1 \\ge 2x^2 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "We move everything to one side and try to recognise a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the difference.",
          "workingLatex": "x^4 - 2x^2 + 1",
          "explanation": "Subtracting $2x^2$ turns the claim into a statement about the sign of this expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise a perfect square.",
          "workingLatex": "x^4 - 2x^2 + 1 = (x^2 - 1)^2",
          "explanation": "Treating $x^2$ as the variable, the expression is a perfect square $(x^2-1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the inequality.",
          "workingLatex": "(x^2 - 1)^2 \\ge 0",
          "explanation": "The claim reduces to showing a square is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use non-negativity of a square.",
          "workingLatex": "(x^2 - 1)^2 \\ge 0 \\text{ is always true}",
          "explanation": "The square of the real number $x^2-1$ is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reverse the rearrangement.",
          "workingLatex": "x^4 - 2x^2 + 1 \\ge 0 \\Rightarrow x^4 + 1 \\ge 2x^2",
          "explanation": "Adding $2x^2$ back returns the original inequality, now proven.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the equality case.",
          "workingLatex": "\\text{equality when } x^2 = 1",
          "explanation": "Equality needs $(x^2-1)^2=0$, i.e. $x=\\pm1$; elsewhere the inequality is strict.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the domain.",
          "workingLatex": "\\forall\\, x \\in \\mathbb{R}",
          "explanation": "Only the non-negativity of a real square was used, valid for every real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "x^4 + 1 \\ge 2x^2 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "Since the difference is $(x^2-1)^2\\ge0$, the inequality holds for all real $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^4+1-2x^2=(x^2-1)^2\\ge0$, so $x^4+1\\ge2x^2$ for all real $x$, with equality at $x=\\pm1$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "squares"
    ],
    "questionText": "Prove that $2(a^2 + b^2) \\ge (a + b)^2$ for all real numbers $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } 2(a^2+b^2) \\ge (a+b)^2",
          "explanation": "We form the difference of the two sides and aim to write it as a square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the right-hand side.",
          "workingLatex": "(a+b)^2 = a^2 + 2ab + b^2",
          "explanation": "Expanding lets us subtract term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the difference.",
          "workingLatex": "2(a^2+b^2) - (a+b)^2 = 2a^2 + 2b^2 - a^2 - 2ab - b^2",
          "explanation": "Subtracting the expansion from $2(a^2+b^2)$ collects all the terms in one place.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "= a^2 - 2ab + b^2",
          "explanation": "Combining like terms leaves a familiar quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise a perfect square.",
          "workingLatex": "a^2 - 2ab + b^2 = (a-b)^2",
          "explanation": "This is exactly $(a-b)^2$, whose sign we know.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use non-negativity of a square.",
          "workingLatex": "(a-b)^2 \\ge 0",
          "explanation": "The square of the real number $a-b$ is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the difference is non-negative.",
          "workingLatex": "2(a^2+b^2) - (a+b)^2 \\ge 0",
          "explanation": "Since the difference equals a non-negative square, it is itself non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange to the target.",
          "workingLatex": "2(a^2+b^2) \\ge (a+b)^2",
          "explanation": "Moving $(a+b)^2$ across gives the inequality we wanted.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "2(a^2+b^2) \\ge (a+b)^2 \\ \\forall a,b \\in \\mathbb{R}",
          "explanation": "The difference is $(a-b)^2\\ge0$, so the inequality holds for all real $a,b$, with equality when $a=b$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2(a^2+b^2)-(a+b)^2=a^2-2ab+b^2=(a-b)^2\\ge0$, so $2(a^2+b^2)\\ge(a+b)^2$, with equality iff $a=b$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by exhaustion",
      "modular arithmetic",
      "squares"
    ],
    "questionText": "Prove by exhaustion that for every integer $n$, $n^2$ leaves a remainder of $0$ or $1$ when divided by $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose an exhaustive split by residue mod 3.",
          "workingLatex": "n \\equiv 0, 1, \\text{ or } 2 \\pmod 3",
          "explanation": "Every integer leaves remainder $0$, $1$ or $2$ on division by $3$. Checking these three cases is exhaustive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Case n ≡ 0: set up.",
          "workingLatex": "n = 3k, \\quad k \\in \\mathbb{Z}",
          "explanation": "A multiple of $3$ has the form $3k$; we square it to find the remainder of $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square it.",
          "workingLatex": "n^2 = 9k^2 = 3(3k^2)",
          "explanation": "Squaring $3k$ gives $9k^2$, which is $3$ times an integer, so the remainder is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case n ≡ 1: set up.",
          "workingLatex": "n = 3k+1",
          "explanation": "An integer one more than a multiple of $3$ has the form $3k+1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square it.",
          "workingLatex": "n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1",
          "explanation": "Expanding and grouping the multiple of $3$ shows the remainder is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case n ≡ 2: set up.",
          "workingLatex": "n = 3k+2",
          "explanation": "An integer two more than a multiple of $3$ has the form $3k+2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Square it.",
          "workingLatex": "n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1",
          "explanation": "Expanding gives $9k^2+12k+4$; grouping the multiple of $3$ leaves remainder $1$ (since $4=3+1$).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the outcomes.",
          "workingLatex": "\\text{remainders } \\{0, 1, 1\\} = \\{0, 1\\}",
          "explanation": "The three cases give remainders $0$, $1$ and $1$, so only $0$ or $1$ ever occurs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the cases are exhaustive.",
          "workingLatex": "n \\equiv 0,1,2 \\text{ covers all integers}",
          "explanation": "Every integer falls into one of the three residue classes, so no case is missing.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "n^2 \\equiv 0 \\text{ or } 1 \\pmod 3",
          "explanation": "By checking all cases, the square of any integer leaves remainder $0$ or $1$ when divided by $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=3k,\\,3k+1,\\,3k+2$ the squares are $3(3k^2),\\ 3(3k^2+2k)+1,\\ 3(3k^2+4k+1)+1$, giving remainders $0,1,1$. Hence $n^2\\equiv0$ or $1\\pmod3$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "proof by exhaustion",
      "modular arithmetic",
      "squares"
    ],
    "questionText": "Prove by exhaustion that for every integer $n$, $n^2$ is congruent to $0$, $1$ or $4$ modulo $5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reduce to the residue of n mod 5.",
          "workingLatex": "n = 5k + r, \\quad r \\in \\{0,1,2,3,4\\}",
          "explanation": "Writing $n$ as $5k+r$ means $n^2 = 25k^2 + 10kr + r^2$; the first two terms are multiples of $5$, so only $r^2$ affects the residue.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the reduced problem.",
          "workingLatex": "n^2 \\equiv r^2 \\pmod 5",
          "explanation": "Because only $r^2$ matters, we just check the five possible residues $r=0,\\dots,4$ — a finite, exhaustive check.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Case r = 0.",
          "workingLatex": "0^2 = 0 \\equiv 0",
          "explanation": "The residue $0$ squares to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case r = 1.",
          "workingLatex": "1^2 = 1 \\equiv 1",
          "explanation": "The residue $1$ squares to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case r = 2.",
          "workingLatex": "2^2 = 4 \\equiv 4",
          "explanation": "The residue $2$ squares to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case r = 3.",
          "workingLatex": "3^2 = 9 \\equiv 4",
          "explanation": "Since $9 = 5 + 4$, the residue $3$ squares to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case r = 4.",
          "workingLatex": "4^2 = 16 \\equiv 1",
          "explanation": "Since $16 = 15 + 1$, the residue $4$ squares to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the outcomes.",
          "workingLatex": "\\{0, 1, 4, 4, 1\\} = \\{0, 1, 4\\}",
          "explanation": "The five cases produce only the residues $0$, $1$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with the excluded residues.",
          "workingLatex": "2, 3 \\notin \\{0,1,4\\}",
          "explanation": "In particular $n^2$ is never congruent to $2$ or $3$ modulo $5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the cases are exhaustive.",
          "workingLatex": "r \\in \\{0,1,2,3,4\\} \\text{ all covered}",
          "explanation": "Every possible residue of $n$ has been checked, so nothing is missing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion.",
          "workingLatex": "n^2 \\equiv 0, 1, \\text{ or } 4 \\pmod 5",
          "explanation": "By exhaustion, the square of any integer is congruent to $0$, $1$ or $4$ modulo $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $n=5k+r$, $n^2\\equiv r^2\\pmod5$. Testing $r=0,1,2,3,4$ gives residues $\\{0,1,4,4,1\\}=\\{0,1,4\\}$. Hence $n^2\\equiv0,1$ or $4\\pmod5$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "divisibility",
      "factorisation"
    ],
    "questionText": "Prove that $3n^2 + 3n$ is divisible by $6$ for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expression.",
          "workingLatex": "3n^2 + 3n",
          "explanation": "We start from the expression and look for a factorisation exposing a factor of $6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor.",
          "workingLatex": "3n^2 + 3n = 3n(n+1)",
          "explanation": "Taking out $3n$ leaves a product of consecutive integers, which will supply the extra factor we need.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify what is still needed.",
          "workingLatex": "\\text{have a factor } 3; \\text{ need a factor } 2",
          "explanation": "We already have a $3$; to reach $6=2\\times3$ we must show $n(n+1)$ contributes a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use consecutiveness.",
          "workingLatex": "n, n+1 \\text{ consecutive} \\Rightarrow \\text{one is even}",
          "explanation": "Among two consecutive integers exactly one is even, so their product is even.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case n even.",
          "workingLatex": "n = 2k \\Rightarrow n(n+1) = 2k(n+1)",
          "explanation": "If $n$ is even, the product picks up a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case n odd.",
          "workingLatex": "n+1 = 2k \\Rightarrow n(n+1) = 2k\\,n",
          "explanation": "If $n$ is odd then $n+1$ is even, so again the product is even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Record the even product.",
          "workingLatex": "n(n+1) = 2m, \\quad m \\in \\mathbb{Z}",
          "explanation": "In both cases $n(n+1)=2m$ for some integer $m$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute back.",
          "workingLatex": "3n^2 + 3n = 3 \\cdot 2m = 6m",
          "explanation": "Replacing $n(n+1)$ with $2m$ turns the factor $3$ into $6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "6 \\mid 3n^2 + 3n \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Since the expression equals $6m$, it is divisible by $6$ for every integer $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3n^2+3n=3n(n+1)$; as $n(n+1)$ is even ($=2m$), this is $6m$. Hence $6\\mid 3n^2+3n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "divisibility",
      "factorisation"
    ],
    "questionText": "Prove that $5n^3 + n$ is divisible by $6$ for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expression.",
          "workingLatex": "5n^3 + n",
          "explanation": "A direct factorisation is awkward, so we rewrite it in terms of a quantity we already understand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split off a multiple of 6.",
          "workingLatex": "5n^3 + n = 6n^3 - (n^3 - n)",
          "explanation": "Since $6n^3 - n^3 + n = 5n^3 + n$, this identity is exact and isolates the familiar expression $n^3-n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor the known part.",
          "workingLatex": "n^3 - n = (n-1)\\,n\\,(n+1)",
          "explanation": "The term $n^3-n$ factors into three consecutive integers, a form guaranteed divisible by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the expression.",
          "workingLatex": "5n^3 + n = 6n^3 - (n-1)\\,n\\,(n+1)",
          "explanation": "Substituting the factorisation displays the expression as a difference of two pieces.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "First piece divisible by 6.",
          "workingLatex": "6 \\mid 6n^3",
          "explanation": "The term $6n^3$ is plainly a multiple of $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Second piece — divisibility by 2.",
          "workingLatex": "\\text{among } n-1, n \\text{ one is even}",
          "explanation": "Two consecutive integers include an even one, so $(n-1)n(n+1)$ is even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Second piece — divisibility by 3.",
          "workingLatex": "\\text{among } n-1, n, n+1 \\text{ one is } \\equiv 0 \\pmod 3",
          "explanation": "Three consecutive integers always include a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine for the second piece.",
          "workingLatex": "6 \\mid (n-1)\\,n\\,(n+1)",
          "explanation": "Divisible by $2$ and by $3$ with $\\gcd(2,3)=1$, so the triple product is divisible by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write both pieces as multiples of 6.",
          "workingLatex": "6n^3 = 6p, \\quad (n-1)n(n+1) = 6q",
          "explanation": "Both parts are multiples of $6$, say $6p$ and $6q$ for integers $p,q$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract.",
          "workingLatex": "5n^3 + n = 6p - 6q = 6(p - q)",
          "explanation": "A difference of two multiples of $6$ is again a multiple of $6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the factor.",
          "workingLatex": "p - q \\in \\mathbb{Z}",
          "explanation": "Since $p,q$ are integers, $5n^3+n = 6\\times(\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the conclusion.",
          "workingLatex": "6 \\mid 5n^3 + n \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Hence $5n^3+n$ is divisible by $6$ for every integer $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5n^3+n=6n^3-(n^3-n)=6n^3-(n-1)n(n+1)$. Both terms are multiples of $6$, so their difference is too. Hence $6\\mid5n^3+n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "algebraic fractions"
    ],
    "questionText": "Prove that $x^2 + \\dfrac{1}{x^2} \\ge 2$ for all real numbers $x \\neq 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^2 + \\tfrac{1}{x^2} \\ge 2 \\text{ for } x \\neq 0",
          "explanation": "We exclude $x=0$ so that $1/x^2$ is defined. A single square will settle the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start from a non-negative square.",
          "workingLatex": "\\left(x - \\tfrac{1}{x}\\right)^2 \\ge 0",
          "explanation": "The square of the real number $x-\\tfrac1x$ is non-negative for every $x\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the square.",
          "workingLatex": "\\left(x - \\tfrac{1}{x}\\right)^2 = x^2 - 2 + \\tfrac{1}{x^2}",
          "explanation": "Expanding gives $x^2$, the cross term $-2\\cdot x\\cdot\\tfrac1x=-2$, and $\\tfrac1{x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the inequality with the expansion.",
          "workingLatex": "x^2 - 2 + \\tfrac{1}{x^2} \\ge 0",
          "explanation": "Substituting the expansion into the square inequality relates the terms of interest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add 2 to both sides.",
          "workingLatex": "x^2 + \\tfrac{1}{x^2} \\ge 2",
          "explanation": "Adding $2$ moves the constant across and gives exactly the target inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the equality case.",
          "workingLatex": "\\text{equality} \\iff x = \\tfrac{1}{x} \\iff x = \\pm 1",
          "explanation": "Equality needs $x-\\tfrac1x=0$, i.e. $x^2=1$, so $x=\\pm1$; the bound is sharp.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the domain.",
          "workingLatex": "x \\neq 0",
          "explanation": "The only requirement is $x\\neq0$ so that $\\tfrac1x$ is defined.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the logical direction.",
          "workingLatex": "\\left(x-\\tfrac1x\\right)^2 \\ge 0 \\Rightarrow x^2+\\tfrac1{x^2}\\ge 2",
          "explanation": "Each step follows from a known truth, so this is a valid direct proof.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "x^2 + \\tfrac{1}{x^2} \\ge 2 \\ \\forall x \\neq 0",
          "explanation": "Starting from a non-negative square we deduced the inequality for all nonzero real $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(x-\\tfrac1x\\right)^2\\ge0 \\Rightarrow x^2-2+\\tfrac1{x^2}\\ge0 \\Rightarrow x^2+\\tfrac1{x^2}\\ge2$, with equality at $x=\\pm1$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "odd numbers",
      "squares",
      "modular arithmetic"
    ],
    "questionText": "Prove that the sum of the squares of any two consecutive odd numbers leaves a remainder of $2$ when divided by $4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the two consecutive odd numbers.",
          "workingLatex": "2k+1 \\text{ and } 2k+3, \\quad k \\in \\mathbb{Z}",
          "explanation": "Consecutive odd numbers differ by $2$, so if the first is $2k+1$ the next is $2k+3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of the squares.",
          "workingLatex": "S = (2k+1)^2 + (2k+3)^2",
          "explanation": "We translate the statement directly: square each odd number and add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the first square.",
          "workingLatex": "(2k+1)^2 = 4k^2 + 4k + 1",
          "explanation": "Expanding prepares the first term for combination.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the second square.",
          "workingLatex": "(2k+3)^2 = 4k^2 + 12k + 9",
          "explanation": "Expanding the second square similarly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the two squares.",
          "workingLatex": "S = 8k^2 + 16k + 10",
          "explanation": "Adding the expansions and collecting like terms gives a single expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split off the multiple of 4.",
          "workingLatex": "S = 4(2k^2 + 4k + 2) + 2",
          "explanation": "Since $8k^2+16k+8 = 4(2k^2+4k+2)$, the leftover is $10-8=2$; this is the structure that fixes the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the multiple of 4.",
          "workingLatex": "4 \\mid 4(2k^2 + 4k + 2)",
          "explanation": "The first part is $4$ times an integer, so it contributes nothing to the remainder.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the remainder.",
          "workingLatex": "S = 4(2k^2+4k+2) + 2, \\quad 0 \\le 2 < 4",
          "explanation": "Because $2$ is a valid remainder (at least $0$ and less than $4$), $S$ leaves remainder $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result.",
          "workingLatex": "S \\equiv 2 \\pmod 4",
          "explanation": "In particular $S$ is even but never divisible by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm generality.",
          "workingLatex": "\\forall\\, k \\in \\mathbb{Z}",
          "explanation": "No special assumption on $k$ was used, so the result holds for every pair of consecutive odd numbers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion.",
          "workingLatex": "S \\equiv 2 \\pmod 4",
          "explanation": "The sum of the squares of any two consecutive odd numbers is a multiple of $4$ plus $2$, so it always leaves remainder $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2k+1)^2+(2k+3)^2=8k^2+16k+10=4(2k^2+4k+2)+2$, so the sum leaves remainder $2$ on division by $4$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "even numbers",
      "divisibility",
      "difference of squares"
    ],
    "questionText": "Prove that the difference between the squares of any two consecutive even numbers is divisible by $4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the two consecutive even numbers.",
          "workingLatex": "2n \\text{ and } 2n+2, \\quad n \\in \\mathbb{Z}",
          "explanation": "Consecutive even numbers differ by $2$, so if the first is $2n$ the next is $2n+2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the difference of squares.",
          "workingLatex": "D = (2n+2)^2 - (2n)^2",
          "explanation": "We subtract the smaller square from the larger, matching 'difference between the squares'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the larger square.",
          "workingLatex": "(2n+2)^2 = 4n^2 + 8n + 4",
          "explanation": "Expanding prepares it for the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract.",
          "workingLatex": "D = (4n^2 + 8n + 4) - 4n^2 = 8n + 4",
          "explanation": "The $4n^2$ terms cancel, leaving $8n+4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out 4.",
          "workingLatex": "D = 4(2n + 1)",
          "explanation": "Both terms share a factor of $4$; extracting it exposes the divisibility.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "2n + 1 \\in \\mathbb{Z}",
          "explanation": "Since $n$ is an integer, $D = 4\\times(\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note a sharper observation.",
          "workingLatex": "2n+1 \\text{ is odd}",
          "explanation": "The cofactor $2n+1$ is odd, so $D$ is divisible by $4$ but not by $8$ — the bound is exactly $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the form.",
          "workingLatex": "4 \\mid D",
          "explanation": "A number equal to $4$ times an integer is a multiple of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "4 \\mid (2n+2)^2 - (2n)^2 \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "The difference equals $4(2n+1)$, so the difference of squares of two consecutive even numbers is divisible by $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2n+2)^2-(2n)^2=8n+4=4(2n+1)$, a multiple of $4$ (with $2n+1$ odd, so not a multiple of $8$). $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "completing the square",
      "inequalities"
    ],
    "questionText": "Prove that $x^2 - xy + y^2 \\ge 0$ for all real numbers $x$ and $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^2 - xy + y^2 \\ge 0 \\ \\forall x,y \\in \\mathbb{R}",
          "explanation": "We treat the expression as a quadratic in $x$ and complete the square to reveal its sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x.",
          "workingLatex": "x^2 - xy = \\left(x - \\tfrac{y}{2}\\right)^2 - \\tfrac{y^2}{4}",
          "explanation": "Half of the coefficient $-y$ is $-\\tfrac{y}{2}$, so $\\left(x-\\tfrac{y}{2}\\right)^2=x^2-xy+\\tfrac{y^2}{4}$; subtracting $\\tfrac{y^2}{4}$ restores $x^2-xy$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute back.",
          "workingLatex": "x^2 - xy + y^2 = \\left(x - \\tfrac{y}{2}\\right)^2 - \\tfrac{y^2}{4} + y^2",
          "explanation": "Replacing $x^2-xy$ and keeping the $+y^2$ gives an equivalent expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the y terms.",
          "workingLatex": "= \\left(x - \\tfrac{y}{2}\\right)^2 + \\tfrac{3}{4}y^2",
          "explanation": "Combining $-\\tfrac{y^2}{4}+y^2$ gives $\\tfrac34 y^2$, so the expression is a sum of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "First term non-negative.",
          "workingLatex": "\\left(x - \\tfrac{y}{2}\\right)^2 \\ge 0",
          "explanation": "The square of a real number is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Second term non-negative.",
          "workingLatex": "\\tfrac{3}{4}y^2 \\ge 0",
          "explanation": "Since $y^2\\ge0$ and $\\tfrac34>0$, the second term is also non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the two non-negative terms.",
          "workingLatex": "\\left(x - \\tfrac{y}{2}\\right)^2 + \\tfrac{3}{4}y^2 \\ge 0",
          "explanation": "A sum of two non-negative quantities is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the equality case.",
          "workingLatex": "\\text{equality} \\iff y = 0 \\text{ and } x = 0",
          "explanation": "Both squares vanish only when $y=0$ and $x-\\tfrac{y}{2}=0$, i.e. $x=y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the domain.",
          "workingLatex": "\\forall\\, x, y \\in \\mathbb{R}",
          "explanation": "Only non-negativity of real squares was used, valid for all real $x,y$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "x^2 - xy + y^2 \\ge 0 \\ \\forall x,y \\in \\mathbb{R}",
          "explanation": "The expression equals $\\left(x-\\tfrac{y}{2}\\right)^2+\\tfrac34 y^2\\ge0$, so it is non-negative for all real $x,y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2-xy+y^2=\\left(x-\\tfrac{y}{2}\\right)^2+\\tfrac34 y^2\\ge0$, with equality only at $x=y=0$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "modular arithmetic",
      "multiplication"
    ],
    "questionText": "Two integers each leave a remainder of $1$ when divided by $3$. Prove that their product also leaves a remainder of $1$ when divided by $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the two integers.",
          "workingLatex": "3a+1 \\text{ and } 3b+1, \\quad a,b \\in \\mathbb{Z}",
          "explanation": "An integer with remainder $1$ on division by $3$ has the form $3a+1$; the two integers use different letters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the product.",
          "workingLatex": "(3a+1)(3b+1)",
          "explanation": "The claim is about their product, so we multiply the two forms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the brackets.",
          "workingLatex": "9ab + 3a + 3b + 1",
          "explanation": "Multiplying out gives four terms, three of which carry a factor of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Group the multiple of 3.",
          "workingLatex": "3(3ab + a + b) + 1",
          "explanation": "Factoring $3$ from the first three terms separates a multiple of $3$ from the leftover $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the bracket as an integer.",
          "workingLatex": "3ab + a + b \\in \\mathbb{Z}",
          "explanation": "Since $a,b$ are integers, $3ab+a+b$ is an integer, so $3(3ab+a+b)$ is a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the remainder.",
          "workingLatex": "3 \\mid 3(3ab+a+b), \\text{ leftover } 1",
          "explanation": "The multiple of $3$ leaves nothing over, so the whole product leaves remainder $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the remainder is valid.",
          "workingLatex": "0 \\le 1 < 3",
          "explanation": "Since $1$ lies between $0$ and $2$, it is a genuine remainder on division by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result.",
          "workingLatex": "(3a+1)(3b+1) \\equiv 1 \\pmod 3",
          "explanation": "The product is one more than a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{product} \\equiv 1 \\pmod 3",
          "explanation": "Hence the product of two integers that are each $\\equiv1\\pmod3$ is itself $\\equiv1\\pmod3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3a+1)(3b+1)=9ab+3a+3b+1=3(3ab+a+b)+1$, which leaves remainder $1$ on division by $3$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "proof by exhaustion",
      "divisibility",
      "factorisation"
    ],
    "questionText": "Prove that $n^4 - n^2$ is divisible by $12$ for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor out the common factor.",
          "workingLatex": "n^4 - n^2 = n^2(n^2 - 1)",
          "explanation": "Taking out $n^2$ leaves a difference of squares, ready to factor further.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the difference of squares.",
          "workingLatex": "n^2(n^2 - 1) = n^2(n-1)(n+1)",
          "explanation": "Since $n^2-1=(n-1)(n+1)$, the expression becomes $n^2(n-1)(n+1)$, which contains the three consecutive integers $n-1,n,n+1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split 12 into coprime factors.",
          "workingLatex": "12 = 4 \\times 3, \\quad \\gcd(4,3)=1",
          "explanation": "To prove divisibility by $12$ it suffices to prove divisibility by $4$ and by $3$ separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divisibility by 3 — set up cases.",
          "workingLatex": "n \\equiv 0, 1, 2 \\pmod 3",
          "explanation": "We use the three consecutive factors $n-1,n,n+1$ and exhaust the residues of $n$ modulo $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check each residue.",
          "workingLatex": "n\\equiv0: 3\\mid n;\\ \\ n\\equiv1: 3\\mid(n-1);\\ \\ n\\equiv2: 3\\mid(n+1)",
          "explanation": "In every case one of the factors is a multiple of $3$, so $3$ divides the product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Record divisibility by 3.",
          "workingLatex": "3 \\mid n^4 - n^2",
          "explanation": "The expression contains a factor divisible by $3$ in all cases.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divisibility by 4 — split on parity of n.",
          "workingLatex": "n \\text{ even or } n \\text{ odd}",
          "explanation": "We handle the factor of $4$ by exhausting the two parities of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case n even.",
          "workingLatex": "n = 2k \\Rightarrow n^2 = 4k^2",
          "explanation": "If $n$ is even, then $n^2=4k^2$ already carries a factor of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the even case.",
          "workingLatex": "4 \\mid n^2 \\Rightarrow 4 \\mid n^4 - n^2",
          "explanation": "Since $n^2$ is a factor of the expression and is divisible by $4$, so is the whole expression.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Case n odd.",
          "workingLatex": "n-1, n+1 \\text{ are consecutive even numbers}",
          "explanation": "If $n$ is odd, both $n-1$ and $n+1$ are even, and they differ by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Their product carries a factor of 4.",
          "workingLatex": "(n-1)(n+1) = n^2 - 1 = 4t",
          "explanation": "Two consecutive even numbers include a multiple of $4$, so their product is divisible by $4$ (in fact by $8$).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude the odd case.",
          "workingLatex": "4 \\mid (n-1)(n+1) \\Rightarrow 4 \\mid n^4 - n^2",
          "explanation": "Since $(n-1)(n+1)$ is a factor of the expression and is divisible by $4$, so is the expression.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Record divisibility by 4.",
          "workingLatex": "4 \\mid n^4 - n^2 \\text{ in both cases}",
          "explanation": "Whether $n$ is even or odd, the expression is divisible by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Combine using coprimality.",
          "workingLatex": "4 \\mid E,\\ 3 \\mid E,\\ \\gcd(4,3)=1 \\Rightarrow 12 \\mid E",
          "explanation": "Divisibility by the coprime numbers $4$ and $3$ forces divisibility by their product $12$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion.",
          "workingLatex": "12 \\mid n^4 - n^2 \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Hence $n^4-n^2$ is divisible by $12$ for every integer $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^4-n^2=n^2(n-1)(n+1)$. It is divisible by $3$ (three consecutive factors) and by $4$ (if $n$ even, $4\\mid n^2$; if $n$ odd, $n-1,n+1$ are consecutive evens). As $\\gcd(4,3)=1$, $12\\mid n^4-n^2$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by exhaustion",
      "cubes",
      "modular arithmetic"
    ],
    "questionText": "Prove that for every integer $n$, $n^3$ is congruent to $0$, $1$ or $8$ modulo $9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reduce to the residue of n modulo 3.",
          "workingLatex": "n \\equiv 0, 1, 2 \\pmod 3",
          "explanation": "We will see that the residue of $n$ modulo $3$ completely determines $n^3$ modulo $9$, so three cases suffice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Case n = 3k.",
          "workingLatex": "n^3 = (3k)^3 = 27k^3",
          "explanation": "A multiple of $3$ cubes to $27k^3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce mod 9.",
          "workingLatex": "27k^3 = 9(3k^3) \\equiv 0 \\pmod 9",
          "explanation": "Since $27=9\\times3$, the cube is a multiple of $9$, giving residue $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case n = 3k+1.",
          "workingLatex": "n^3 = (3k+1)^3 = 27k^3 + 27k^2 + 9k + 1",
          "explanation": "Expanding $(3k+1)^3$ with the binomial gives these four terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reduce mod 9.",
          "workingLatex": "27k^3 + 27k^2 + 9k \\equiv 0 \\Rightarrow n^3 \\equiv 1 \\pmod 9",
          "explanation": "Each of the first three terms is a multiple of $9$, leaving residue $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case n = 3k+2.",
          "workingLatex": "n^3 = (3k+2)^3 = 27k^3 + 54k^2 + 36k + 8",
          "explanation": "Expanding $(3k+2)^3$ gives these terms; note $54$ and $36$ are both multiples of $9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reduce mod 9.",
          "workingLatex": "27k^3 + 54k^2 + 36k \\equiv 0 \\Rightarrow n^3 \\equiv 8 \\pmod 9",
          "explanation": "The first three terms are multiples of $9$, leaving residue $8$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the outcomes.",
          "workingLatex": "n^3 \\bmod 9 \\in \\{0, 1, 8\\}",
          "explanation": "The three cases give residues $0$, $1$ and $8$ respectively.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the cases are exhaustive.",
          "workingLatex": "n \\equiv 0,1,2 \\pmod 3 \\text{ covers all integers}",
          "explanation": "Every integer is congruent to $0$, $1$ or $2$ modulo $3$, so no case is missing.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note what is excluded.",
          "workingLatex": "n^3 \\not\\equiv 2,3,4,5,6,7 \\pmod 9",
          "explanation": "A cube can only land on $0$, $1$ or $8$ modulo $9$; the other residues are impossible.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reflect on why 3 cases suffice.",
          "workingLatex": "n^3 \\bmod 9 \\text{ depends only on } n \\bmod 3",
          "explanation": "The extra factors of $3$ in each expansion become multiples of $9$ when cubed, so only $n\\bmod3$ survives.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Restate the finite check.",
          "workingLatex": "\\{0^3, 1^3, 2^3\\} \\bmod 9 = \\{0, 1, 8\\}",
          "explanation": "Equivalently, cubing the representatives $0,1,2$ and reducing modulo $9$ yields the full set of possibilities.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise the exhaustion.",
          "workingLatex": "\\text{all cases checked}",
          "explanation": "Because the finite list of cases was complete, the claim is proved.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "n^3 \\equiv 0, 1, \\text{ or } 8 \\pmod 9",
          "explanation": "By exhaustion, the cube of any integer is congruent to $0$, $1$ or $8$ modulo $9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=3k,\\,3k+1,\\,3k+2$ the cubes reduce mod $9$ to $0,\\,1,\\,8$ respectively (the extra terms are all multiples of $9$). Hence $n^3\\equiv0,1$ or $8\\pmod9$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "algebraic identity",
      "sum of squares"
    ],
    "questionText": "Prove the identity $(a^2 + b^2)(c^2 + d^2) = (ac + bd)^2 + (ad - bc)^2$, and hence that the product of two sums of two squares is itself a sum of two squares.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the target identity.",
          "workingLatex": "(a^2+b^2)(c^2+d^2) = (ac+bd)^2 + (ad-bc)^2",
          "explanation": "We prove the two sides are equal by expanding each and comparing; this is a direct algebraic proof.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the left-hand side.",
          "workingLatex": "(a^2+b^2)(c^2+d^2) = a^2c^2 + a^2d^2 + b^2c^2 + b^2d^2",
          "explanation": "Multiplying out every pair of terms gives four products.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the first square on the right.",
          "workingLatex": "(ac+bd)^2 = a^2c^2 + 2abcd + b^2d^2",
          "explanation": "Squaring $ac+bd$ produces two squares and a cross term $2abcd$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the second square on the right.",
          "workingLatex": "(ad-bc)^2 = a^2d^2 - 2abcd + b^2c^2",
          "explanation": "Squaring $ad-bc$ produces two squares and the opposite cross term $-2abcd$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the two right-hand squares.",
          "workingLatex": "a^2c^2 + 2abcd + b^2d^2 + a^2d^2 - 2abcd + b^2c^2",
          "explanation": "We sum the two expansions to assemble the full right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the cross terms.",
          "workingLatex": "+2abcd - 2abcd = 0",
          "explanation": "The mixed terms are equal and opposite, so they cancel exactly — this is why the identity works.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the right-hand side.",
          "workingLatex": "= a^2c^2 + b^2d^2 + a^2d^2 + b^2c^2",
          "explanation": "After cancellation only the four square terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the two sides.",
          "workingLatex": "a^2c^2 + a^2d^2 + b^2c^2 + b^2d^2 \\ (\\text{both sides})",
          "explanation": "The left-hand side and the simplified right-hand side contain exactly the same four terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the identity holds.",
          "workingLatex": "(a^2+b^2)(c^2+d^2) = (ac+bd)^2 + (ad-bc)^2",
          "explanation": "Since both sides expand to the same expression, the identity is proved for all real $a,b,c,d$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the two factors as sums of squares.",
          "workingLatex": "a^2+b^2 \\text{ and } c^2+d^2",
          "explanation": "Each factor on the left is a sum of two squares by construction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Read the right-hand side as a sum of squares.",
          "workingLatex": "(ac+bd)^2 + (ad-bc)^2",
          "explanation": "The right-hand side is manifestly a sum of two squares, with integer bases when $a,b,c,d$ are integers.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Draw the consequence.",
          "workingLatex": "(\\text{sum of 2 squares}) \\times (\\text{sum of 2 squares}) = \\text{sum of 2 squares}",
          "explanation": "The identity shows the product of any two sums of two squares can itself be written as a sum of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\text{identity proved; product is a sum of two squares}",
          "explanation": "Hence the algebraic identity holds and the product of two sums of two squares is a sum of two squares.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expanding, both sides equal $a^2c^2+a^2d^2+b^2c^2+b^2d^2$ (the $\\pm2abcd$ cancel), so the identity holds. Its right-hand side is a sum of two squares, proving the product of two sums of two squares is a sum of two squares. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "algebraic identity",
      "perfect square"
    ],
    "questionText": "Prove that $n^2 + (n+1)^2 + \\big(n(n+1)\\big)^2$ is a perfect square for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expression.",
          "workingLatex": "E = n^2 + (n+1)^2 + \\big(n(n+1)\\big)^2",
          "explanation": "We aim to show $E$ equals the square of an integer, so we expand and try to recognise a square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the middle square.",
          "workingLatex": "(n+1)^2 = n^2 + 2n + 1",
          "explanation": "Expanding $(n+1)^2$ prepares it for combining.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the last square.",
          "workingLatex": "\\big(n(n+1)\\big)^2 = (n^2+n)^2 = n^4 + 2n^3 + n^2",
          "explanation": "Since $n(n+1)=n^2+n$, its square is $n^4+2n^3+n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add all three parts.",
          "workingLatex": "E = n^2 + (n^2 + 2n + 1) + (n^4 + 2n^3 + n^2)",
          "explanation": "We sum the three expanded pieces.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect like terms.",
          "workingLatex": "E = n^4 + 2n^3 + 3n^2 + 2n + 1",
          "explanation": "Combining gives a quartic; the three $n^2$ terms add to $3n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Guess the square root.",
          "workingLatex": "\\text{try } (n^2 + n + 1)^2",
          "explanation": "A quartic that is a perfect square should be the square of a quadratic; $n^2+n+1$ is a natural candidate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the candidate.",
          "workingLatex": "(n^2+n+1)^2 = n^4 + 2n^3 + 3n^2 + 2n + 1",
          "explanation": "Squaring $n^2+n+1$ term by term reproduces every coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with E.",
          "workingLatex": "E = (n^2 + n + 1)^2",
          "explanation": "The expansion of the candidate matches $E$ exactly, so they are equal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the base is an integer.",
          "workingLatex": "n^2 + n + 1 \\in \\mathbb{Z}",
          "explanation": "For integer $n$, $n^2+n+1$ is an integer, so $E$ is the square of an integer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm generality.",
          "workingLatex": "\\forall\\, n \\in \\mathbb{Z}",
          "explanation": "The algebra held for a general $n$, so the result is not a coincidence of particular values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion.",
          "workingLatex": "E = (n^2+n+1)^2 \\text{ is a perfect square}",
          "explanation": "Hence $n^2+(n+1)^2+\\big(n(n+1)\\big)^2$ is always a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the neat pattern.",
          "workingLatex": "n^2 + (n+1)^2 + \\big(n(n+1)\\big)^2 = (n^2+n+1)^2",
          "explanation": "This is a pleasing identity: the sum of the squares of two consecutive integers and of their product is the square of one more than their product.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sanity check with a value.",
          "workingLatex": "n=2: 4 + 9 + 36 = 49 = 7^2",
          "explanation": "Testing $n=2$ gives $49=7^2$ and $n^2+n+1=7$, confirming the identity numerically.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^2+(n+1)^2+\\big(n(n+1)\\big)^2 = n^4+2n^3+3n^2+2n+1 = (n^2+n+1)^2$, the square of an integer. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "sum of squares"
    ],
    "questionText": "Prove that $a^2 + b^2 + c^2 + d^2 \\ge ab + bc + cd + da$ for all real numbers $a, b, c, d$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } a^2+b^2+c^2+d^2 \\ge ab+bc+cd+da",
          "explanation": "We form the difference of the two sides and aim to write it as a sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the difference.",
          "workingLatex": "D = a^2+b^2+c^2+d^2 - (ab+bc+cd+da)",
          "explanation": "Proving $D\\ge0$ is equivalent to the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Double the difference.",
          "workingLatex": "2D = 2a^2+2b^2+2c^2+2d^2 - 2ab - 2bc - 2cd - 2da",
          "explanation": "Doubling lets each squared variable split so the terms can be regrouped into perfect squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Anticipate the square pieces.",
          "workingLatex": "\\text{pair terms cyclically: } (a,b),(b,c),(c,d),(d,a)",
          "explanation": "The cross terms $-2ab,-2bc,-2cd,-2da$ suggest four squares built from consecutive pairs in the cycle $a\\to b\\to c\\to d\\to a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Regroup the terms.",
          "workingLatex": "2D = (a^2-2ab+b^2)+(b^2-2bc+c^2)+(c^2-2cd+d^2)+(d^2-2da+a^2)",
          "explanation": "Each variable's two copies are distributed so that each group completes a square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the count.",
          "workingLatex": "a^2, b^2, c^2, d^2 \\text{ each appear twice}",
          "explanation": "Every squared term is used exactly twice and every cross term exactly once, so the regrouping is an exact identity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write as a sum of squares.",
          "workingLatex": "2D = (a-b)^2 + (b-c)^2 + (c-d)^2 + (d-a)^2",
          "explanation": "Each bracket is a perfect square, so $2D$ is a sum of four squares.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply non-negativity.",
          "workingLatex": "(a-b)^2, (b-c)^2, (c-d)^2, (d-a)^2 \\ge 0",
          "explanation": "Each real square is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the squares.",
          "workingLatex": "2D \\ge 0",
          "explanation": "A sum of non-negative terms is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Halve to bound D.",
          "workingLatex": "D \\ge 0",
          "explanation": "Dividing by $2$ preserves the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Translate back.",
          "workingLatex": "a^2+b^2+c^2+d^2 \\ge ab+bc+cd+da",
          "explanation": "Since $D\\ge0$, the original inequality holds.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the equality case.",
          "workingLatex": "\\text{equality} \\iff a=b=c=d",
          "explanation": "All four squares vanish only when consecutive variables are equal all the way round, i.e. $a=b=c=d$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the domain.",
          "workingLatex": "\\forall\\, a,b,c,d \\in \\mathbb{R}",
          "explanation": "Only the non-negativity of real squares was used, valid for all real inputs.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "a^2+b^2+c^2+d^2 \\ge ab+bc+cd+da",
          "explanation": "Because $2D=(a-b)^2+(b-c)^2+(c-d)^2+(d-a)^2\\ge0$, the inequality holds for all real $a,b,c,d$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\big(a^2+b^2+c^2+d^2-ab-bc-cd-da\\big)=(a-b)^2+(b-c)^2+(c-d)^2+(d-a)^2\\ge0$, so the inequality holds, with equality iff $a=b=c=d$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "AM-GM"
    ],
    "questionText": "Prove that $\\dfrac{a + b}{2} \\ge \\sqrt{ab}$ for all real numbers $a \\ge 0$ and $b \\ge 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } \\tfrac{a+b}{2} \\ge \\sqrt{ab} \\text{ for } a,b \\ge 0",
          "explanation": "This is the arithmetic-geometric mean inequality for two numbers. We need $a,b\\ge0$ so that $\\sqrt{ab}$ and $\\sqrt a,\\sqrt b$ are real.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the square roots are defined.",
          "workingLatex": "\\sqrt{a}, \\sqrt{b} \\text{ real since } a, b \\ge 0",
          "explanation": "Non-negativity guarantees real square roots, which we build the proof around.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Start from a non-negative square.",
          "workingLatex": "(\\sqrt{a} - \\sqrt{b})^2 \\ge 0",
          "explanation": "The square of the real number $\\sqrt a-\\sqrt b$ is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the square.",
          "workingLatex": "(\\sqrt{a})^2 - 2\\sqrt{a}\\sqrt{b} + (\\sqrt{b})^2",
          "explanation": "Expanding gives the three terms of a squared difference.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify using the roots.",
          "workingLatex": "= a - 2\\sqrt{ab} + b",
          "explanation": "Since $(\\sqrt a)^2=a$, $(\\sqrt b)^2=b$ and $\\sqrt a\\,\\sqrt b=\\sqrt{ab}$, the square simplifies neatly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the inequality.",
          "workingLatex": "a - 2\\sqrt{ab} + b \\ge 0",
          "explanation": "Substituting into the square inequality relates $a+b$ and $\\sqrt{ab}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange.",
          "workingLatex": "a + b \\ge 2\\sqrt{ab}",
          "explanation": "Adding $2\\sqrt{ab}$ to both sides isolates the two means.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide by 2.",
          "workingLatex": "\\tfrac{a+b}{2} \\ge \\sqrt{ab}",
          "explanation": "Dividing by the positive number $2$ preserves the inequality and gives the target.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the equality case.",
          "workingLatex": "\\text{equality} \\iff \\sqrt{a} = \\sqrt{b} \\iff a = b",
          "explanation": "Equality needs $\\sqrt a-\\sqrt b=0$, i.e. $a=b$; otherwise the inequality is strict.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Stress the domain requirement.",
          "workingLatex": "a, b \\ge 0 \\text{ essential}",
          "explanation": "If $a$ or $b$ were negative, $\\sqrt{ab}$ might not be real, so the non-negativity assumption is essential.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the logical direction.",
          "workingLatex": "(\\sqrt a - \\sqrt b)^2 \\ge 0 \\Rightarrow \\tfrac{a+b}{2} \\ge \\sqrt{ab}",
          "explanation": "Each step followed from a known truth, so this is a valid direct proof.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm generality.",
          "workingLatex": "\\forall\\, a,b \\ge 0",
          "explanation": "The argument used only $a,b\\ge0$, so it holds for every such pair.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "\\tfrac{a+b}{2} \\ge \\sqrt{ab} \\ \\forall\\, a,b \\ge 0",
          "explanation": "The arithmetic mean of two non-negative numbers is at least their geometric mean, with equality iff they are equal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\sqrt a-\\sqrt b)^2\\ge0 \\Rightarrow a-2\\sqrt{ab}+b\\ge0 \\Rightarrow a+b\\ge2\\sqrt{ab} \\Rightarrow \\tfrac{a+b}{2}\\ge\\sqrt{ab}$, with equality iff $a=b$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "even numbers",
      "divisibility",
      "factorisation"
    ],
    "questionText": "Prove that the product of any three consecutive even numbers is divisible by $48$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the three consecutive even numbers.",
          "workingLatex": "2n,\\; 2n+2,\\; 2n+4, \\quad n \\in \\mathbb{Z}",
          "explanation": "Consecutive even numbers step up by $2$, so starting from $2n$ they are $2n$, $2n+2$ and $2n+4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the product.",
          "workingLatex": "P = (2n)(2n+2)(2n+4)",
          "explanation": "The claim concerns the product of the three even numbers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor 2 out of each bracket.",
          "workingLatex": "P = 2 \\cdot 2 \\cdot 2 \\cdot n(n+1)(n+2)",
          "explanation": "Each even factor contributes a $2$: $2n=2\\cdot n$, $2n+2=2(n+1)$, $2n+4=2(n+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the factors of 2.",
          "workingLatex": "P = 8\\, n(n+1)(n+2)",
          "explanation": "Multiplying the three $2$s gives an explicit factor of $8$ times a product of three consecutive integers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reduce the goal.",
          "workingLatex": "48 = 8 \\times 6, \\text{ so show } 6 \\mid n(n+1)(n+2)",
          "explanation": "Since we already have a factor of $8$, it remains to show $n(n+1)(n+2)$ is divisible by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divisibility by 2.",
          "workingLatex": "\\text{among } n, n+1 \\text{ one is even}",
          "explanation": "Two consecutive integers include an even one, so the triple product is even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divisibility by 3 — exhaust n mod 3.",
          "workingLatex": "n\\equiv0: 3\\mid n;\\ n\\equiv1: 3\\mid(n+2);\\ n\\equiv2: 3\\mid(n+1)",
          "explanation": "Checking each residue shows one of the three consecutive factors is always a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine for divisibility by 6.",
          "workingLatex": "6 \\mid n(n+1)(n+2)",
          "explanation": "Divisible by $2$ and by $3$ with $\\gcd(2,3)=1$, so the triple product is divisible by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Name the resulting integer.",
          "workingLatex": "n(n+1)(n+2) = 6m, \\quad m \\in \\mathbb{Z}",
          "explanation": "Divisibility by $6$ lets us write the triple product as $6m$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute back into P.",
          "workingLatex": "P = 8 \\cdot 6m = 48m",
          "explanation": "Replacing the triple product with $6m$ turns the factor $8$ into $48$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the factor.",
          "workingLatex": "m \\in \\mathbb{Z}",
          "explanation": "Since $m$ is an integer, $P = 48\\times(\\text{integer})$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the form.",
          "workingLatex": "48 \\mid P",
          "explanation": "A number equal to $48$ times an integer is a multiple of $48$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm generality.",
          "workingLatex": "\\forall\\, n \\in \\mathbb{Z}",
          "explanation": "No special assumption on $n$ was made, so the result holds for every triple of consecutive even numbers.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "48 \\mid (2n)(2n+2)(2n+4)",
          "explanation": "Hence the product of any three consecutive even numbers is divisible by $48$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2n)(2n+2)(2n+4)=8\\,n(n+1)(n+2)$. As $n(n+1)(n+2)$ is a product of three consecutive integers it is divisible by $6$, say $6m$, so $P=48m$. Hence $48\\mid P$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "factorisation",
      "completing the square"
    ],
    "questionText": "Prove that $x^4 - x^3 - x + 1 \\ge 0$ for all real values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } x^4 - x^3 - x + 1 \\ge 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "We factor the quartic and show it is a product of non-negative pieces.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group the terms in pairs.",
          "workingLatex": "(x^4 - x^3) + (-x + 1)",
          "explanation": "Grouping the first two and last two terms sets up a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor each group.",
          "workingLatex": "x^3(x - 1) - (x - 1)",
          "explanation": "The first group gives $x^3(x-1)$; the second gives $-(x-1)$, sharing the factor $x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Extract the common factor.",
          "workingLatex": "(x - 1)(x^3 - 1)",
          "explanation": "Both groups contain $(x-1)$, so we factor it out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor the difference of cubes.",
          "workingLatex": "x^3 - 1 = (x - 1)(x^2 + x + 1)",
          "explanation": "Using $x^3-1=(x-1)(x^2+x+1)$ exposes a second factor of $(x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the full factorisation.",
          "workingLatex": "x^4 - x^3 - x + 1 = (x - 1)^2 (x^2 + x + 1)",
          "explanation": "Combining the two $(x-1)$ factors gives $(x-1)^2$ times the quadratic $x^2+x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "First factor non-negative.",
          "workingLatex": "(x - 1)^2 \\ge 0",
          "explanation": "The square of a real number is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Analyse the quadratic factor.",
          "workingLatex": "x^2 + x + 1",
          "explanation": "To fix the sign of the second factor we complete the square.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Complete the square.",
          "workingLatex": "x^2 + x = \\left(x + \\tfrac{1}{2}\\right)^2 - \\tfrac{1}{4}",
          "explanation": "Half of the coefficient $1$ is $\\tfrac12$, so $\\left(x+\\tfrac12\\right)^2=x^2+x+\\tfrac14$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the quadratic.",
          "workingLatex": "x^2 + x + 1 = \\left(x + \\tfrac{1}{2}\\right)^2 + \\tfrac{3}{4}",
          "explanation": "Combining $-\\tfrac14+1$ gives $\\tfrac34$, so the quadratic is a square plus $\\tfrac34$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Second factor strictly positive.",
          "workingLatex": "x^2 + x + 1 \\ge \\tfrac{3}{4} > 0",
          "explanation": "Being a square plus $\\tfrac34$, the quadratic is always at least $\\tfrac34$, hence positive.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the signs.",
          "workingLatex": "(x-1)^2 (x^2+x+1) \\ge 0",
          "explanation": "A non-negative factor times a positive factor is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Identify the equality case.",
          "workingLatex": "\\text{equality} \\iff x = 1",
          "explanation": "The product is zero only when $(x-1)^2=0$, i.e. $x=1$; elsewhere it is strictly positive.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm the domain.",
          "workingLatex": "\\forall\\, x \\in \\mathbb{R}",
          "explanation": "Only non-negativity of real squares was used, valid for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion.",
          "workingLatex": "x^4 - x^3 - x + 1 \\ge 0 \\ \\forall x \\in \\mathbb{R}",
          "explanation": "Since the expression equals $(x-1)^2(x^2+x+1)$ with both factors non-negative, it is non-negative for all real $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^4-x^3-x+1=(x-1)^2(x^2+x+1)$. Here $(x-1)^2\\ge0$ and $x^2+x+1=\\left(x+\\tfrac12\\right)^2+\\tfrac34>0$, so the product is $\\ge0$, with equality at $x=1$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "factorisation",
      "completing the square"
    ],
    "questionText": "Prove that $a^4 + b^4 \\ge a^3 b + a b^3$ for all real numbers $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } a^4 + b^4 \\ge a^3 b + a b^3",
          "explanation": "We form the difference and factor it into non-negative pieces.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the difference.",
          "workingLatex": "D = a^4 + b^4 - a^3 b - a b^3",
          "explanation": "Proving $D\\ge0$ is equivalent to the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Group the terms in pairs.",
          "workingLatex": "(a^4 - a^3 b) + (b^4 - a b^3)",
          "explanation": "Grouping pairs with a common factor sets up the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor each group.",
          "workingLatex": "a^3(a - b) + b^3(b - a)",
          "explanation": "The first group gives $a^3(a-b)$; the second gives $b^3(b-a)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Align the brackets.",
          "workingLatex": "a^3(a - b) - b^3(a - b)",
          "explanation": "Since $b-a=-(a-b)$, the second term becomes $-b^3(a-b)$, exposing the common factor $a-b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Extract the common factor.",
          "workingLatex": "D = (a - b)(a^3 - b^3)",
          "explanation": "Factoring out $(a-b)$ leaves $a^3-b^3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factor the difference of cubes.",
          "workingLatex": "a^3 - b^3 = (a - b)(a^2 + ab + b^2)",
          "explanation": "Using $a^3-b^3=(a-b)(a^2+ab+b^2)$ produces a second factor of $(a-b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the full factorisation.",
          "workingLatex": "D = (a - b)^2 (a^2 + ab + b^2)",
          "explanation": "Combining the two $(a-b)$ factors gives $(a-b)^2$ times the quadratic form $a^2+ab+b^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "First factor non-negative.",
          "workingLatex": "(a - b)^2 \\ge 0",
          "explanation": "The square of a real number is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Analyse the quadratic form.",
          "workingLatex": "a^2 + ab + b^2",
          "explanation": "We fix its sign by completing the square, treating it as a quadratic in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Complete the square.",
          "workingLatex": "a^2 + ab + b^2 = \\left(a + \\tfrac{b}{2}\\right)^2 + \\tfrac{3}{4}b^2",
          "explanation": "Half of the coefficient $b$ is $\\tfrac{b}{2}$; the leftover $b^2-\\tfrac{b^2}{4}=\\tfrac34 b^2$ completes the identity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Second factor non-negative.",
          "workingLatex": "\\left(a + \\tfrac{b}{2}\\right)^2 + \\tfrac{3}{4}b^2 \\ge 0",
          "explanation": "A sum of two squares is non-negative, so $a^2+ab+b^2\\ge0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the signs.",
          "workingLatex": "D = (a-b)^2 (a^2+ab+b^2) \\ge 0",
          "explanation": "A product of two non-negative factors is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Identify the equality case.",
          "workingLatex": "\\text{equality} \\iff a = b",
          "explanation": "$D=0$ needs $(a-b)^2=0$ (or the quadratic zero, which also forces $a=b=0$), so equality holds iff $a=b$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion.",
          "workingLatex": "a^4 + b^4 \\ge a^3 b + a b^3 \\ \\forall a,b \\in \\mathbb{R}",
          "explanation": "Since $D=(a-b)^2(a^2+ab+b^2)\\ge0$, the inequality holds for all real $a,b$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a^4+b^4-a^3b-ab^3=(a-b)^2(a^2+ab+b^2)$, and $a^2+ab+b^2=\\left(a+\\tfrac{b}{2}\\right)^2+\\tfrac34 b^2\\ge0$, so the difference is $\\ge0$, with equality iff $a=b$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "squares",
      "modular arithmetic"
    ],
    "questionText": "Prove that the sum of the squares of any two consecutive integers leaves a remainder of $1$ when divided by $4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the two consecutive integers.",
          "workingLatex": "n \\text{ and } n+1",
          "explanation": "Let the smaller integer be $n$; the next is $n+1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of the squares.",
          "workingLatex": "S = n^2 + (n+1)^2",
          "explanation": "We square each integer and add, as the statement requires.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand.",
          "workingLatex": "S = n^2 + n^2 + 2n + 1 = 2n^2 + 2n + 1",
          "explanation": "Expanding $(n+1)^2$ and collecting like terms gives a single quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor the even part.",
          "workingLatex": "S = 2(n^2 + n) + 1",
          "explanation": "Pulling a $2$ from the first two terms separates $S$ into an even piece plus $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the bracket as a product.",
          "workingLatex": "S = 2\\,n(n+1) + 1",
          "explanation": "Since $n^2+n=n(n+1)$, the term becomes $2n(n+1)$; the consecutive product will supply another factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use consecutiveness for parity.",
          "workingLatex": "n, n+1 \\text{ consecutive} \\Rightarrow n(n+1) \\text{ even}",
          "explanation": "Among two consecutive integers one is even, so their product is even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the even product.",
          "workingLatex": "n(n+1) = 2k, \\quad k \\in \\mathbb{Z}",
          "explanation": "Whichever of $n,n+1$ is even, the product equals $2k$ for some integer $k$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into S.",
          "workingLatex": "S = 2(2k) + 1",
          "explanation": "Replacing $n(n+1)$ with $2k$ turns the factor $2$ into $2\\times2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify.",
          "workingLatex": "S = 4k + 1",
          "explanation": "Multiplying out gives $4k+1$: a multiple of $4$ plus $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Read off the remainder.",
          "workingLatex": "S = 4k + 1, \\quad 0 \\le 1 < 4",
          "explanation": "Because $1$ is a valid remainder (between $0$ and $3$), $S$ leaves remainder $1$ on division by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm generality.",
          "workingLatex": "\\forall\\, n \\in \\mathbb{Z}",
          "explanation": "No special assumption on $n$ was used, so the result holds for every pair of consecutive integers.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the result.",
          "workingLatex": "S \\equiv 1 \\pmod 4",
          "explanation": "This sharpens the fact that the sum is odd: it is not just odd but exactly one more than a multiple of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "n^2 + (n+1)^2 \\equiv 1 \\pmod 4",
          "explanation": "The sum of the squares of any two consecutive integers is a multiple of $4$ plus $1$, so it always leaves remainder $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^2+(n+1)^2=2n^2+2n+1=2n(n+1)+1$. As $n(n+1)$ is even ($=2k$), this is $4k+1$, leaving remainder $1$ modulo $4$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "consecutive integers",
      "divisibility",
      "factorisation"
    ],
    "questionText": "Prove that $n^5 - 5n^3 + 4n$ is divisible by $120$ for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor out the common factor.",
          "workingLatex": "n^5 - 5n^3 + 4n = n(n^4 - 5n^2 + 4)",
          "explanation": "Taking out $n$ leaves a quartic in $n^2$ that factors like a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the quadratic in n².",
          "workingLatex": "n^4 - 5n^2 + 4 = (n^2 - 1)(n^2 - 4)",
          "explanation": "Treating $n^2$ as the variable, $t^2-5t+4=(t-1)(t-4)$, so we get $(n^2-1)(n^2-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor each difference of squares.",
          "workingLatex": "(n^2-1)(n^2-4) = (n-1)(n+1)(n-2)(n+2)",
          "explanation": "Both brackets are differences of squares: $n^2-1=(n-1)(n+1)$ and $n^2-4=(n-2)(n+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assemble the full factorisation.",
          "workingLatex": "n^5 - 5n^3 + 4n = (n-2)(n-1)\\,n\\,(n+1)(n+2)",
          "explanation": "Including the factor $n$ and ordering the brackets reveals five consecutive integers centred on $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the structure.",
          "workingLatex": "\\text{product of 5 consecutive integers}",
          "explanation": "The whole expression is a product of five consecutive integers, which is the key to divisibility by $120=5!$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Split 120 into coprime prime powers.",
          "workingLatex": "120 = 8 \\times 3 \\times 5",
          "explanation": "Since $8,3,5$ are pairwise coprime, it suffices to prove divisibility by each separately.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divisibility by 5.",
          "workingLatex": "\\text{5 consecutive integers include a multiple of } 5",
          "explanation": "Any five consecutive integers contain exactly one multiple of $5$, so $5$ divides the product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divisibility by 3.",
          "workingLatex": "\\text{they include 3 consecutive integers} \\Rightarrow \\text{a multiple of } 3",
          "explanation": "Among five consecutive integers there are three consecutive ones, which always include a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divisibility by 8 — count even factors.",
          "workingLatex": "\\text{among 5 consecutive integers, at least two are even}",
          "explanation": "Consecutive integers alternate parity, so five in a row contain two or three even numbers.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use consecutive even numbers.",
          "workingLatex": "\\text{two consecutive evens: one is a multiple of } 4",
          "explanation": "Two even numbers two apart are consecutive evens; one of them is divisible by $4$ and the other by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude divisibility by 8.",
          "workingLatex": "(\\text{mult. of }4)\\times(\\text{mult. of }2) \\Rightarrow 8 \\mid P",
          "explanation": "The product of these two even factors is divisible by $4\\times2=8$, so $8$ divides the whole product.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Gather the three results.",
          "workingLatex": "8 \\mid P,\\ 3 \\mid P,\\ 5 \\mid P",
          "explanation": "The product is divisible by $8$, by $3$ and by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply pairwise coprimality.",
          "workingLatex": "\\gcd \\text{ pairwise } 1 \\Rightarrow 8 \\cdot 3 \\cdot 5 \\mid P",
          "explanation": "Because $8,3,5$ are pairwise coprime, divisibility by each forces divisibility by their product.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the product.",
          "workingLatex": "8 \\times 3 \\times 5 = 120",
          "explanation": "Multiplying the coprime factors gives $120$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Note the general principle.",
          "workingLatex": "k! \\mid \\text{product of } k \\text{ consecutive integers}",
          "explanation": "This is a special case of the general fact that a product of $k$ consecutive integers is divisible by $k!$; here $k=5$ and $5!=120$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the conclusion.",
          "workingLatex": "120 \\mid n^5 - 5n^3 + 4n \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Since the expression is a product of five consecutive integers, it is divisible by $120$ for every integer $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^5-5n^3+4n=(n-2)(n-1)n(n+1)(n+2)$, a product of five consecutive integers. It is divisible by $8$, $3$ and $5$ (pairwise coprime), hence by $120=5!$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "proof by exhaustion",
      "divisibility",
      "modular arithmetic"
    ],
    "questionText": "Prove that $n^7 - n$ is divisible by $42$ for every integer $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split 42 into coprime prime factors.",
          "workingLatex": "42 = 2 \\times 3 \\times 7",
          "explanation": "Since $2,3,7$ are pairwise coprime, it suffices to prove divisibility by each separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor out n.",
          "workingLatex": "n^7 - n = n(n^6 - 1)",
          "explanation": "Removing the common factor $n$ leaves $n^6-1$, a difference of squares (and cubes) ready to factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor n⁶ − 1.",
          "workingLatex": "n^6 - 1 = (n^3 - 1)(n^3 + 1)",
          "explanation": "Treating $n^6-1$ as $(n^3)^2-1$ splits it into $(n^3-1)(n^3+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor further to expose consecutive integers.",
          "workingLatex": "= (n-1)(n^2+n+1)(n+1)(n^2-n+1)",
          "explanation": "Using $n^3-1=(n-1)(n^2+n+1)$ and $n^3+1=(n+1)(n^2-n+1)$ shows $n-1$ and $n+1$ are factors, alongside $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divisibility by 2.",
          "workingLatex": "\\text{among } n-1, n \\text{ one is even}",
          "explanation": "The factors include the consecutive integers $n-1$ and $n$, one of which is even, so $2\\mid n^7-n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divisibility by 3.",
          "workingLatex": "\\text{among } n-1, n, n+1 \\text{ one is } \\equiv 0 \\pmod 3",
          "explanation": "The factors include three consecutive integers $n-1,n,n+1$, which always contain a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divisibility by 7 — use exhaustion.",
          "workingLatex": "n \\equiv 0,1,2,3,4,5,6 \\pmod 7",
          "explanation": "The factorisation does not obviously give a $7$, so we prove $7\\mid n^7-n$ by exhausting the residues of $n$ modulo $7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reduce to checking r⁷ ≡ r.",
          "workingLatex": "n \\equiv r \\Rightarrow n^7 - n \\equiv r^7 - r \\pmod 7",
          "explanation": "Because congruences respect powers and sums, $n^7-n$ depends only on $r=n\\bmod7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check residues 0, 1, 6.",
          "workingLatex": "0^7\\equiv0,\\ 1^7\\equiv1,\\ 6^7\\equiv6 \\pmod 7",
          "explanation": "For $r=0,1$ the result is immediate; $6\\equiv-1$ gives $(-1)^7=-1\\equiv6$, so $r^7\\equiv r$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check residues 2 and 5.",
          "workingLatex": "2^7 = 128 \\equiv 2,\\quad 5^7 \\equiv 5 \\pmod 7",
          "explanation": "Since $128 = 7\\times18 + 2$, we get $2^7\\equiv2$; likewise $5\\equiv-2$ gives $5^7\\equiv-2^7\\equiv-2\\equiv5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check residues 3 and 4.",
          "workingLatex": "3^7 \\equiv 3,\\quad 4^7 \\equiv 4 \\pmod 7",
          "explanation": "Direct reduction gives $3^7\\equiv3$; and $4\\equiv-3$ gives $4^7\\equiv-3^7\\equiv-3\\equiv4$. Every residue satisfies $r^7\\equiv r$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude divisibility by 7.",
          "workingLatex": "r^7 \\equiv r \\ \\forall r \\Rightarrow 7 \\mid n^7 - n",
          "explanation": "Since $n^7\\equiv n$ for every residue, $7$ divides $n^7-n$ for all integers $n$ (Fermat's little theorem in action).",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Gather the three results.",
          "workingLatex": "2 \\mid n^7-n,\\ 3 \\mid n^7-n,\\ 7 \\mid n^7-n",
          "explanation": "The expression is divisible by $2$, by $3$ and by $7$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Apply pairwise coprimality.",
          "workingLatex": "\\gcd \\text{ pairwise } 1 \\Rightarrow 2\\cdot3\\cdot7 \\mid n^7-n",
          "explanation": "Because $2,3,7$ are pairwise coprime, divisibility by each forces divisibility by their product.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compute the product.",
          "workingLatex": "2 \\times 3 \\times 7 = 42",
          "explanation": "Multiplying the coprime factors gives $42$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the conclusion.",
          "workingLatex": "42 \\mid n^7 - n \\text{ for all } n \\in \\mathbb{Z}",
          "explanation": "Hence $n^7-n$ is divisible by $42$ for every integer $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n^7-n=n(n-1)(n+1)(n^2+n+1)(n^2-n+1)$ gives factors $2$ and $3$ from consecutive integers; exhausting $n\\bmod7$ shows $r^7\\equiv r$, so $7\\mid n^7-n$. As $2,3,7$ are coprime, $42\\mid n^7-n$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y1.pure.proof-deduction.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Proof by deduction and exhaustion",
    "subtopicId": "al.y1.pure.proof-deduction",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "proof by deduction",
      "inequalities",
      "sum of squares"
    ],
    "questionText": "Prove that $(a + b + c)^2 \\le 3(a^2 + b^2 + c^2)$ for all real numbers $a, b, c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal.",
          "workingLatex": "\\text{show } (a+b+c)^2 \\le 3(a^2+b^2+c^2)",
          "explanation": "We form the difference (larger minus smaller) and aim to write it as a sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the difference.",
          "workingLatex": "D = 3(a^2+b^2+c^2) - (a+b+c)^2",
          "explanation": "Proving $D\\ge0$ is equivalent to the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the square.",
          "workingLatex": "(a+b+c)^2 = a^2+b^2+c^2 + 2(ab+bc+ca)",
          "explanation": "Expanding the squared sum produces the three squares and twice the pairwise products.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into D.",
          "workingLatex": "D = 3(a^2+b^2+c^2) - a^2-b^2-c^2 - 2(ab+bc+ca)",
          "explanation": "Replacing $(a+b+c)^2$ by its expansion collects all the terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "D = 2(a^2+b^2+c^2) - 2(ab+bc+ca)",
          "explanation": "The squared terms combine to $2(a^2+b^2+c^2)$, leaving the pairwise products.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Regroup into completed squares.",
          "workingLatex": "D = (a^2-2ab+b^2)+(b^2-2bc+c^2)+(c^2-2ca+a^2)",
          "explanation": "Each variable's two copies are distributed so that each group is a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the count.",
          "workingLatex": "a^2, b^2, c^2 \\text{ each used twice}",
          "explanation": "Every squared term appears twice and every cross term once, so the regrouping is an exact identity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write as a sum of squares.",
          "workingLatex": "D = (a-b)^2 + (b-c)^2 + (c-a)^2",
          "explanation": "Each bracket is a perfect square, so $D$ is a sum of three squares.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply non-negativity.",
          "workingLatex": "(a-b)^2, (b-c)^2, (c-a)^2 \\ge 0",
          "explanation": "Each real square is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the squares.",
          "workingLatex": "D \\ge 0",
          "explanation": "A sum of non-negative terms is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Translate back.",
          "workingLatex": "(a+b+c)^2 \\le 3(a^2+b^2+c^2)",
          "explanation": "Since $D\\ge0$, the smaller side is at most the larger, giving the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the equality case.",
          "workingLatex": "\\text{equality} \\iff a = b = c",
          "explanation": "All three squares vanish only when $a=b=c$, so the bound is sharp.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the domain.",
          "workingLatex": "\\forall\\, a,b,c \\in \\mathbb{R}",
          "explanation": "Only non-negativity of real squares was used, valid for all real inputs.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion.",
          "workingLatex": "(a+b+c)^2 \\le 3(a^2+b^2+c^2)",
          "explanation": "Because $3(a^2+b^2+c^2)-(a+b+c)^2=(a-b)^2+(b-c)^2+(c-a)^2\\ge0$, the inequality holds for all real $a,b,c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3(a^2+b^2+c^2)-(a+b+c)^2=(a-b)^2+(b-c)^2+(c-a)^2\\ge0$, so $(a+b+c)^2\\le3(a^2+b^2+c^2)$, with equality iff $a=b=c$. $\\blacksquare$"
    }
  }
];
