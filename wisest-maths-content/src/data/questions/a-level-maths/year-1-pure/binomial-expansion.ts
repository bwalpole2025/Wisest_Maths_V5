import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.binomial.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "binomial-coefficient",
      "factorials"
    ],
    "questionText": "Evaluate the binomial coefficient $\\binom{6}{2}$ using the factorial formula.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the binomial coefficient formula",
          "workingLatex": "\\binom{n}{r}=\\frac{n!}{r!\\,(n-r)!}",
          "explanation": "The binomial coefficient $\\binom{n}{r}$ counts how many ways there are to choose $r$ items from $n$, and it is exactly the number that multiplies each term in a binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute n = 6 and r = 2",
          "workingLatex": "\\binom{6}{2}=\\frac{6!}{2!\\,(6-2)!}=\\frac{6!}{2!\\,4!}",
          "explanation": "Here $n=6$ and $r=2$, so we replace the letters directly. The two factorials on the bottom always add up to the number on top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the common factorial",
          "workingLatex": "\\frac{6!}{2!\\,4!}=\\frac{6\\times5\\times4!}{2!\\,4!}=\\frac{6\\times5}{2!}",
          "explanation": "Writing $6!$ as $6\\times5\\times4!$ lets the $4!$ cancel top and bottom, so we never have to multiply out the large factorials in full.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the remaining factorial",
          "workingLatex": "=\\frac{6\\times5}{2\\times1}=\\frac{30}{2}",
          "explanation": "$2!$ is just $2\\times1=2$, so only small numbers are left to deal with.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to the final value",
          "workingLatex": "=15",
          "explanation": "Dividing $30$ by $2$ gives the value of the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check against Pascal's triangle",
          "workingLatex": "\\text{Row }6:\\ 1\\ 6\\ 15\\ 20\\ 15\\ 6\\ 1",
          "explanation": "The entry in position $r=2$ (counting from $0$) of row $6$ is $15$, which confirms the factorial calculation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\binom{6}{2}=15$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "binomial-coefficient",
      "factorials"
    ],
    "questionText": "Evaluate $\\binom{7}{3}$ using the factorial formula.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the binomial coefficient formula",
          "workingLatex": "\\binom{n}{r}=\\frac{n!}{r!\\,(n-r)!}",
          "explanation": "This formula gives the coefficient of each term in a binomial expansion; it will let us turn $\\binom{7}{3}$ into ordinary numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute n = 7 and r = 3",
          "workingLatex": "\\binom{7}{3}=\\frac{7!}{3!\\,(7-3)!}=\\frac{7!}{3!\\,4!}",
          "explanation": "With $n=7$ and $r=3$ the denominator becomes $3!$ and $4!$, since $7-3=4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the common factorial",
          "workingLatex": "\\frac{7!}{3!\\,4!}=\\frac{7\\times6\\times5\\times4!}{3!\\,4!}=\\frac{7\\times6\\times5}{3!}",
          "explanation": "Expanding $7!$ only as far as $4!$ lets that $4!$ cancel, leaving a short product on top.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the numbers",
          "workingLatex": "=\\frac{210}{6}",
          "explanation": "The top gives $7\\times6\\times5=210$ and the bottom is $3!=6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to the final value",
          "workingLatex": "=35",
          "explanation": "Dividing $210$ by $6$ gives the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check against Pascal's triangle",
          "workingLatex": "\\text{Row }7:\\ 1\\ 7\\ 21\\ 35\\ 35\\ 21\\ 7\\ 1",
          "explanation": "The entry in position $r=3$ of row $7$ is $35$, matching the factorial result exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\binom{7}{3}=35$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "binomial-coefficient",
      "symmetry"
    ],
    "questionText": "You are given that $\\binom{9}{2}=36$. Use the symmetry of binomial coefficients to write down $\\binom{9}{7}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the symmetry property",
          "workingLatex": "\\binom{n}{r}=\\binom{n}{n-r}",
          "explanation": "Choosing $r$ items to include is the same as choosing $n-r$ items to leave out, so these two coefficients are always equal. This is why each row of Pascal's triangle reads the same forwards and backwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and r",
          "workingLatex": "n=9,\\ r=7",
          "explanation": "We want $\\binom{9}{7}$, so we match it to the pattern $\\binom{n}{r}$ with $n=9$ and $r=7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the symmetry rule",
          "workingLatex": "\\binom{9}{7}=\\binom{9}{9-7}=\\binom{9}{2}",
          "explanation": "Replacing $r=7$ with $n-r=2$ turns a hard coefficient into an easy one without changing its value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given value",
          "workingLatex": "\\binom{9}{2}=36",
          "explanation": "We are told $\\binom{9}{2}=36$, and symmetry guarantees $\\binom{9}{7}$ shares this value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the result",
          "workingLatex": "\\binom{9}{7}=36",
          "explanation": "So the value transfers straight across from the easier coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm with the formula",
          "workingLatex": "\\binom{9}{2}=\\frac{9\\times8}{2\\times1}=36",
          "explanation": "A quick factorial check on the easier coefficient confirms $36$, so the answer is secure.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\binom{9}{7}=36$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "pascals-triangle"
    ],
    "questionText": "Write out the row of Pascal's triangle that gives the coefficients of $(a+b)^5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify which row is needed",
          "workingLatex": "(a+b)^{5}\\ \\text{uses row }5",
          "explanation": "The row of Pascal's triangle for $n=5$ lists the coefficients of $(a+b)^5$, and it has $n+1=6$ entries.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the row above",
          "workingLatex": "\\text{Row }4:\\ 1\\ 4\\ 6\\ 4\\ 1",
          "explanation": "Each row is built from the one above it, so we first write down row $4$. Every row begins and ends with $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add adjacent entries",
          "workingLatex": "1,\\ 1{+}4,\\ 4{+}6,\\ 6{+}4,\\ 4{+}1,\\ 1",
          "explanation": "Each interior entry of the new row is the sum of the two entries diagonally above it; this is Pascal's construction rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the sums",
          "workingLatex": "1,\\ 5,\\ 10,\\ 10,\\ 5,\\ 1",
          "explanation": "Carrying out the additions gives the six coefficients of the new row.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the row",
          "workingLatex": "\\text{Row }5:\\ 1\\ 5\\ 10\\ 10\\ 5\\ 1",
          "explanation": "This is the required row, and it is symmetric, as every Pascal row should be.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check one entry with the formula",
          "workingLatex": "\\binom{5}{2}=\\frac{5\\times4}{2\\times1}=10",
          "explanation": "The third entry should be $\\binom{5}{2}=10$, which matches, confirming the whole row.",
          "diagram": null
        }
      ],
      "finalAnswer": "Row 5 of Pascal's triangle: $1,\\ 5,\\ 10,\\ 10,\\ 5,\\ 1$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "pascals-triangle"
    ],
    "questionText": "The row of Pascal's triangle for $n=5$ is $1,\\ 5,\\ 10,\\ 10,\\ 5,\\ 1$. Use it to write down the row for $n=6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the addition rule",
          "workingLatex": "\\text{new entry}=\\text{sum of the two entries above}",
          "explanation": "Every entry in a Pascal row, apart from the outer $1$s, equals the sum of the two adjacent entries in the row above.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the given row",
          "workingLatex": "\\text{Row }5:\\ 1\\ 5\\ 10\\ 10\\ 5\\ 1",
          "explanation": "We start from the row for $n=5$, which is provided in the question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Place the outer ones",
          "workingLatex": "\\text{Row }6:\\ 1\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ 1",
          "explanation": "The new row has $7$ entries and must begin and end with $1$, leaving five interior gaps to fill.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the adjacent pairs",
          "workingLatex": "1{+}5,\\ 5{+}10,\\ 10{+}10,\\ 10{+}5,\\ 5{+}1",
          "explanation": "Each gap between the outer $1$s is filled by adding the pair of numbers sitting above it in row $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the interior entries",
          "workingLatex": "6,\\ 15,\\ 20,\\ 15,\\ 6",
          "explanation": "These five sums are the interior coefficients of the new row.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the full row",
          "workingLatex": "\\text{Row }6:\\ 1\\ 6\\ 15\\ 20\\ 15\\ 6\\ 1",
          "explanation": "Placing the interior numbers between the outer $1$s completes the row for $n=6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the central entry",
          "workingLatex": "\\binom{6}{3}=\\frac{6\\times5\\times4}{3\\times2\\times1}=20",
          "explanation": "The middle entry should be $\\binom{6}{3}=20$, which matches the constructed row.",
          "diagram": null
        }
      ],
      "finalAnswer": "Row 6 of Pascal's triangle: $1,\\ 6,\\ 15,\\ 20,\\ 15,\\ 6,\\ 1$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "pascals-triangle",
      "full-expansion"
    ],
    "questionText": "Expand $(1+x)^4$ fully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form and power",
          "workingLatex": "(1+x)^{4},\\ n=4",
          "explanation": "This is $(1+x)^n$ with $n=4$, so the coefficients come straight from row $4$ of Pascal's triangle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down row 4",
          "workingLatex": "1\\ 4\\ 6\\ 4\\ 1",
          "explanation": "Row $4$ gives the five coefficients we need, one for each power of $x$ from $0$ up to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Attach rising powers of x",
          "workingLatex": "1\\cdot x^{0}+4\\cdot x^{1}+6\\cdot x^{2}+4\\cdot x^{3}+1\\cdot x^{4}",
          "explanation": "Because the first term in the bracket is $1$, each coefficient simply multiplies a rising power of $x$, with the power increasing by one each time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the powers",
          "workingLatex": "1+4x+6x^{2}+4x^{3}+x^{4}",
          "explanation": "Since $x^0=1$ and $x^1=x$, the expression tidies up into its final form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a middle coefficient",
          "workingLatex": "\\binom{4}{2}=6",
          "explanation": "The coefficient of $x^2$ should be $\\binom{4}{2}=6$, which agrees with the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check by substitution",
          "workingLatex": "x=1:\\ (1+1)^{4}=16,\\quad 1+4+6+4+1=16",
          "explanation": "Putting $x=1$ into both the bracket and the expansion gives $16$ each way, a strong sign that no term is missing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^4=1+4x+6x^2+4x^3+x^4$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "pascals-triangle",
      "full-expansion"
    ],
    "questionText": "Expand $(x+2)^3$ fully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a, b and n",
          "workingLatex": "(x+2)^{3}:\\ a=x,\\ b=2,\\ n=3",
          "explanation": "Match the bracket to the pattern $(a+b)^n$. Here $a=x$, $b=2$ and the power is $n=3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down row 3",
          "workingLatex": "1\\ 3\\ 3\\ 1",
          "explanation": "Row $3$ of Pascal's triangle supplies the coefficients for any cube of a binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the general terms",
          "workingLatex": "1a^{3}+3a^{2}b+3ab^{2}+1b^{3}",
          "explanation": "The powers of $a$ fall from $3$ to $0$ while the powers of $b$ rise from $0$ to $3$; in each term the two powers add to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute a = x and b = 2",
          "workingLatex": "x^{3}+3x^{2}(2)+3x(2)^{2}+(2)^{3}",
          "explanation": "Replace $a$ with $x$ and $b$ with $2$ in every term, keeping each power exactly where it is.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the numbers",
          "workingLatex": "x^{3}+6x^{2}+12x+8",
          "explanation": "Working out $3\\times2=6$, $3\\times4=12$ and $2^3=8$ gives the numerical coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the constant term",
          "workingLatex": "x=0:\\ (0+2)^{3}=8",
          "explanation": "Setting $x=0$ should leave $2^3=8$, which matches the constant term of the expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x+2)^3=x^3+6x^2+12x+8$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "pascals-triangle",
      "full-expansion"
    ],
    "questionText": "Expand $(1+2x)^3$ fully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a, b and n",
          "workingLatex": "(1+2x)^{3}:\\ a=1,\\ b=2x,\\ n=3",
          "explanation": "Treat the whole of $2x$ as the second term $b$. Here $a=1$, $b=2x$ and the power is $n=3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down row 3",
          "workingLatex": "1\\ 3\\ 3\\ 1",
          "explanation": "Row $3$ of Pascal's triangle gives the coefficients $1,3,3,1$ for a cube.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the terms",
          "workingLatex": "1(1)^{3}+3(1)^{2}(2x)+3(1)(2x)^{2}+(2x)^{3}",
          "explanation": "Because $a=1$, every power of $a$ is just $1$, so the work is really about the powers of $b=2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deal with the powers of 2x",
          "workingLatex": "(2x)^{2}=4x^{2},\\quad (2x)^{3}=8x^{3}",
          "explanation": "The $2$ sits inside the bracket, so it is squared and cubed together with the $x$; forgetting this is a common slip.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the terms",
          "workingLatex": "1+6x+12x^{2}+8x^{3}",
          "explanation": "Multiplying out gives $3\\times2=6$, $3\\times4=12$ and $1\\times8=8$ for the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with x = 1",
          "workingLatex": "(1+2)^{3}=27,\\quad 1+6+12+8=27",
          "explanation": "Both the original bracket and the expansion give $27$ when $x=1$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+2x)^3=1+6x+12x^2+8x^3$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "pascals-triangle",
      "full-expansion"
    ],
    "questionText": "Expand $(a+b)^5$ fully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the power",
          "workingLatex": "(a+b)^{5},\\ n=5",
          "explanation": "This is the general binomial raised to the power $5$, so the coefficients come from row $5$ of Pascal's triangle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down row 5",
          "workingLatex": "1\\ 5\\ 10\\ 10\\ 5\\ 1",
          "explanation": "Row $5$ gives six coefficients, one for each of the six terms in the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Attach falling and rising powers",
          "workingLatex": "a^{5}+5a^{4}b+10a^{3}b^{2}+10a^{2}b^{3}+5ab^{4}+b^{5}",
          "explanation": "The power of $a$ decreases from $5$ to $0$ while the power of $b$ increases from $0$ to $5$; in every term the two powers sum to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the symmetry",
          "workingLatex": "1,5,10,10,5,1\\ \\text{reads the same both ways}",
          "explanation": "The coefficients are symmetric because $\\binom{5}{r}=\\binom{5}{5-r}$, which is a useful self-check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a coefficient",
          "workingLatex": "\\binom{5}{2}=10",
          "explanation": "The coefficient of $a^3b^2$ is $\\binom{5}{2}=10$, matching the third entry of the row.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a = b = 1",
          "workingLatex": "2^{5}=32,\\quad 1+5+10+10+5+1=32",
          "explanation": "Setting $a=b=1$ makes the bracket $2^5=32$, and the coefficients also sum to $32$, confirming the expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "binomial-coefficient",
      "named-term"
    ],
    "questionText": "Write down the coefficient of $x^2$ in the expansion of $(1+x)^5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what is required",
          "workingLatex": "(1+x)^{5}:\\ \\text{coefficient of }x^{2}",
          "explanation": "We only need one coefficient, so there is no need to write out the whole expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the general coefficient",
          "workingLatex": "\\text{coeff of }x^{k}\\ \\text{in}\\ (1+x)^{n}=\\binom{n}{k}",
          "explanation": "In $(1+x)^n$ the coefficient of $x^k$ is exactly $\\binom{n}{k}$, because the $1$ contributes a factor of $1$ to every term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute n = 5 and k = 2",
          "workingLatex": "\\binom{5}{2}",
          "explanation": "Here the power is $n=5$ and we want the term with $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the coefficient",
          "workingLatex": "\\binom{5}{2}=\\frac{5\\times4}{2\\times1}=10",
          "explanation": "Using the factorial formula gives $10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with Pascal's triangle",
          "workingLatex": "\\text{Row }5:\\ 1\\ 5\\ 10\\ 10\\ 5\\ 1",
          "explanation": "The entry in position $k=2$ of row $5$ is $10$, confirming the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\text{coefficient of }x^{2}=10",
          "explanation": "So the relevant term is $10x^2$ and the required coefficient is $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^2$ is $10$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "binomial-coefficient",
      "symmetry"
    ],
    "questionText": "Evaluate $\\binom{8}{3}$ using the factorial formula, and hence write down $\\binom{8}{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the binomial coefficient formula",
          "workingLatex": "\\binom{n}{r}=\\frac{n!}{r!\\,(n-r)!}",
          "explanation": "This formula turns a binomial coefficient into ordinary numbers, ready to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute n = 8 and r = 3",
          "workingLatex": "\\binom{8}{3}=\\frac{8!}{3!\\,5!}",
          "explanation": "With $n=8$ and $r=3$ the denominator is $3!$ and $5!$, since $8-3=5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the common factorial",
          "workingLatex": "\\frac{8!}{3!\\,5!}=\\frac{8\\times7\\times6\\times5!}{3!\\,5!}=\\frac{8\\times7\\times6}{3!}",
          "explanation": "Writing $8!$ as $8\\times7\\times6\\times5!$ cancels the $5!$, leaving a short product on top.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the value",
          "workingLatex": "=\\frac{336}{6}=56",
          "explanation": "The top is $8\\times7\\times6=336$ and $3!=6$, so the coefficient is $56$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the symmetry property",
          "workingLatex": "\\binom{8}{5}=\\binom{8}{8-5}=\\binom{8}{3}",
          "explanation": "Choosing $5$ items to include is the same as choosing $3$ to leave out, so these two coefficients are equal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the second coefficient",
          "workingLatex": "\\binom{8}{5}=56",
          "explanation": "Because of the symmetry, no fresh calculation is needed for $\\binom{8}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check against Pascal's triangle",
          "workingLatex": "\\text{Row }8:\\ 1\\ 8\\ 28\\ 56\\ 70\\ 56\\ 28\\ 8\\ 1",
          "explanation": "Row $8$ contains $56$ in both position $3$ and position $5$, confirming both results at once.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\binom{8}{3}=56$ and $\\binom{8}{5}=56$"
    }
  },
  {
    "id": "al.y1.pure.binomial.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "ascending-powers",
      "first-terms"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(1+2x)^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=4,\\quad a=1,\\quad b=2",
          "explanation": "We compare $(1+2x)^{4}$ with the standard form $(a+bx)^{n}$. The power is $n=4$, the constant inside the bracket is $a=1$, and the coefficient of $x$ is $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general term",
          "workingLatex": "\\binom{4}{r}(1)^{4-r}(2x)^{r}",
          "explanation": "Each term comes from choosing the $2x$ part $r$ times out of the four brackets. The term in $x^{r}$ is $\\binom{4}{r}(1)^{4-r}(2x)^{r}$, so ascending powers means taking $r=0,1,2,\\dots$ in turn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the binomial coefficients needed",
          "workingLatex": "\\binom{4}{0}=1,\\quad \\binom{4}{1}=4,\\quad \\binom{4}{2}=6",
          "explanation": "For the first three terms we only need $r=0,1,2$. These are the start of row $4$ of Pascal's triangle ($1,4,6,4,1$), which is quicker than the factorial formula here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant term (r = 0)",
          "workingLatex": "\\binom{4}{0}(1)^{4}(2x)^{0}=1",
          "explanation": "With $r=0$ there is no factor of $x$, so the first term is simply $a^{n}=1^{4}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x (r = 1)",
          "workingLatex": "\\binom{4}{1}(1)^{3}(2x)^{1}=4\\times 1\\times 2x=8x",
          "explanation": "With $r=1$ we pick out one factor of $2x$. Multiplying the coefficient $4$ by the $2$ from $2x$ gives the coefficient $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x squared (r = 2)",
          "workingLatex": "\\binom{4}{2}(1)^{2}(2x)^{2}=6\\times 1\\times 4x^{2}=24x^{2}",
          "explanation": "With $r=2$ we square the whole $2x$, giving $4x^{2}$ — the $2$ gets squared as well as the $x$. Then $6\\times 4=24$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write out the first three terms",
          "workingLatex": "(1+2x)^{4}=1+8x+24x^{2}+\\dots",
          "explanation": "Placing the three terms in order of increasing power of $x$ gives the required start of the expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1+8x+24x^{2}$ (in ascending powers of $x$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "full-expansion",
      "ascending-powers"
    ],
    "questionText": "Expand $(3+x)^{3}$ completely, giving your answer in ascending powers of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=3,\\quad a=3,\\quad b=1",
          "explanation": "Comparing $(3+x)^{3}$ with $(a+bx)^{n}$ gives $a=3$ and $b=1$. Notice the constant $a=3$ will be raised to powers, so those numbers will not simply disappear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down Pascal's triangle row 3",
          "workingLatex": "\\binom{3}{0},\\binom{3}{1},\\binom{3}{2},\\binom{3}{3}=1,3,3,1",
          "explanation": "For $n=3$ the coefficients are row $3$ of Pascal's triangle: $1,3,3,1$. There are four terms because the powers of $x$ run from $0$ up to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the general term",
          "workingLatex": "\\binom{3}{r}(3)^{3-r}(x)^{r}",
          "explanation": "Each term multiplies a binomial coefficient by a falling power of $a=3$ and a rising power of $x$. The total power of $3$ and $x$ always adds to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant term (r = 0)",
          "workingLatex": "\\binom{3}{0}(3)^{3}=1\\times 27=27",
          "explanation": "With $r=0$ there is no $x$, so this term is $a^{n}=3^{3}=27$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x (r = 1)",
          "workingLatex": "\\binom{3}{1}(3)^{2}(x)^{1}=3\\times 9\\times x=27x",
          "explanation": "Here $a$ is squared: $3^{2}=9$. Multiplying by the coefficient $3$ gives $27x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x squared (r = 2)",
          "workingLatex": "\\binom{3}{2}(3)^{1}(x)^{2}=3\\times 3\\times x^{2}=9x^{2}",
          "explanation": "Now only one factor of $3$ remains, so the coefficient is $3\\times 3=9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Term in x cubed (r = 3)",
          "workingLatex": "\\binom{3}{3}(3)^{0}(x)^{3}=1\\times 1\\times x^{3}=x^{3}",
          "explanation": "With $r=3$ all three brackets contribute $x$, and $3^{0}=1$, so the last term is simply $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine all terms",
          "workingLatex": "(3+x)^{3}=27+27x+9x^{2}+x^{3}",
          "explanation": "Writing the four terms in ascending powers of $x$ gives the complete expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$27+27x+9x^{2}+x^{3}$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "full-expansion",
      "signs"
    ],
    "questionText": "Expand $(2-x)^{4}$ in ascending powers of $x$, simplifying each coefficient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=4,\\quad a=2,\\quad b=-1",
          "explanation": "Writing $(2-x)^{4}$ as $(2+(-1)x)^{4}$ shows $b=-1$. Keeping the minus sign inside $b$ is what produces the alternating signs in the answer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down Pascal's triangle row 4",
          "workingLatex": "\\binom{4}{0},\\binom{4}{1},\\binom{4}{2},\\binom{4}{3},\\binom{4}{4}=1,4,6,4,1",
          "explanation": "For $n=4$ the coefficients are $1,4,6,4,1$. There are five terms since the power of $x$ goes from $0$ to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the general term",
          "workingLatex": "\\binom{4}{r}(2)^{4-r}(-x)^{r}",
          "explanation": "Each term carries a factor $(-x)^{r}$, so whenever $r$ is odd the term is negative and whenever $r$ is even it is positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant term (r = 0)",
          "workingLatex": "\\binom{4}{0}(2)^{4}(-x)^{0}=16",
          "explanation": "With $r=0$ this is $a^{n}=2^{4}=16$, and there is no sign to worry about.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x (r = 1)",
          "workingLatex": "\\binom{4}{1}(2)^{3}(-x)^{1}=4\\times 8\\times(-x)=-32x",
          "explanation": "Here $2^{3}=8$ and the single $(-x)$ makes the term negative, giving $-32x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x squared (r = 2)",
          "workingLatex": "\\binom{4}{2}(2)^{2}(-x)^{2}=6\\times 4\\times x^{2}=24x^{2}",
          "explanation": "Squaring $(-x)$ gives $+x^{2}$, so this term is positive. Then $6\\times 4=24$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Term in x cubed (r = 3)",
          "workingLatex": "\\binom{4}{3}(2)^{1}(-x)^{3}=4\\times 2\\times(-x^{3})=-8x^{3}",
          "explanation": "Cubing $(-x)$ gives $-x^{3}$, so this term is negative: $4\\times 2=8$ then a minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Term in x to the fourth (r = 4)",
          "workingLatex": "\\binom{4}{4}(2)^{0}(-x)^{4}=1\\times 1\\times x^{4}=x^{4}",
          "explanation": "The fourth power of $(-x)$ is positive, and $2^{0}=1$, so the final term is simply $x^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine all terms",
          "workingLatex": "(2-x)^{4}=16-32x+24x^{2}-8x^{3}+x^{4}",
          "explanation": "Collecting the five terms, the signs alternate as expected for a bracket with a minus inside.",
          "diagram": null
        }
      ],
      "finalAnswer": "$16-32x+24x^{2}-8x^{3}+x^{4}$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "full-expansion",
      "ascending-powers"
    ],
    "questionText": "Expand $(1+3x)^{3}$ in ascending powers of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=3,\\quad a=1,\\quad b=3",
          "explanation": "Comparing $(1+3x)^{3}$ with $(a+bx)^{n}$ gives $a=1$ and $b=3$. Because $a=1$, its powers are all $1$, which keeps the arithmetic simple.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down Pascal's triangle row 3",
          "workingLatex": "\\binom{3}{0},\\binom{3}{1},\\binom{3}{2},\\binom{3}{3}=1,3,3,1",
          "explanation": "For $n=3$ the coefficients are $1,3,3,1$, giving four terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the general term",
          "workingLatex": "\\binom{3}{r}(1)^{3-r}(3x)^{r}",
          "explanation": "Each term is a coefficient times $(3x)^{r}$. Remember the $3$ inside $(3x)$ is raised to the power $r$ too, not just the $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant term (r = 0)",
          "workingLatex": "\\binom{3}{0}(3x)^{0}=1",
          "explanation": "With $r=0$ there is no $x$, so the first term is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x (r = 1)",
          "workingLatex": "\\binom{3}{1}(3x)^{1}=3\\times 3x=9x",
          "explanation": "The coefficient $3$ multiplies the $3$ from $3x$ to give $9x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x squared (r = 2)",
          "workingLatex": "\\binom{3}{2}(3x)^{2}=3\\times 9x^{2}=27x^{2}",
          "explanation": "Squaring $3x$ gives $9x^{2}$; multiplying by the coefficient $3$ gives $27x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Term in x cubed (r = 3)",
          "workingLatex": "\\binom{3}{3}(3x)^{3}=1\\times 27x^{3}=27x^{3}",
          "explanation": "Cubing $3x$ gives $27x^{3}$, and the coefficient is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine all terms",
          "workingLatex": "(1+3x)^{3}=1+9x+27x^{2}+27x^{3}",
          "explanation": "Writing the terms in ascending powers of $x$ completes the expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1+9x+27x^{2}+27x^{3}$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "full-expansion"
    ],
    "questionText": "Expand $(2+3x)^{3}$, simplifying each term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=3,\\quad a=2,\\quad b=3",
          "explanation": "Comparing $(2+3x)^{3}$ with $(a+bx)^{n}$ gives $a=2$ and $b=3$. Both the $2$ and the $3$ carry powers, so we must handle each carefully.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down Pascal's triangle row 3",
          "workingLatex": "\\binom{3}{0},\\binom{3}{1},\\binom{3}{2},\\binom{3}{3}=1,3,3,1",
          "explanation": "For $n=3$ the coefficients are $1,3,3,1$, giving four terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the general term",
          "workingLatex": "\\binom{3}{r}(2)^{3-r}(3x)^{r}",
          "explanation": "Each term multiplies a falling power of $2$ by a rising power of $3x$. The two powers always add to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant term (r = 0)",
          "workingLatex": "\\binom{3}{0}(2)^{3}=1\\times 8=8",
          "explanation": "With $r=0$ this is $a^{n}=2^{3}=8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x (r = 1)",
          "workingLatex": "\\binom{3}{1}(2)^{2}(3x)^{1}=3\\times 4\\times 3x=36x",
          "explanation": "Here $2^{2}=4$ and $3x$ contributes a factor of $3$. Multiplying $3\\times 4\\times 3=36$ gives $36x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x squared (r = 2)",
          "workingLatex": "\\binom{3}{2}(2)^{1}(3x)^{2}=3\\times 2\\times 9x^{2}=54x^{2}",
          "explanation": "Squaring $3x$ gives $9x^{2}$ (the $3$ is squared too). Then $3\\times 2\\times 9=54$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Term in x cubed (r = 3)",
          "workingLatex": "\\binom{3}{3}(3x)^{3}=1\\times 27x^{3}=27x^{3}",
          "explanation": "Cubing $3x$ gives $27x^{3}$, and $2^{0}=1$, so the last term is $27x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine all terms",
          "workingLatex": "(2+3x)^{3}=8+36x+54x^{2}+27x^{3}",
          "explanation": "Collecting the four terms gives the full simplified expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8+36x+54x^{2}+27x^{3}$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "ascending-powers",
      "signs"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(1-2x)^{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=5,\\quad a=1,\\quad b=-2",
          "explanation": "Writing $(1-2x)^{5}$ as $(1+(-2)x)^{5}$ gives $b=-2$. Keeping the minus with the $2$ ensures the signs come out correctly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general term",
          "workingLatex": "\\binom{5}{r}(1)^{5-r}(-2x)^{r}",
          "explanation": "Because $a=1$, its powers are all $1$, so the term in $x^{r}$ is just $\\binom{5}{r}(-2x)^{r}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the binomial coefficients needed",
          "workingLatex": "\\binom{5}{0}=1,\\quad \\binom{5}{1}=5,\\quad \\binom{5}{2}=10",
          "explanation": "For the first three terms we need $r=0,1,2$. These are the start of row $5$ of Pascal's triangle: $1,5,10,10,5,1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant term (r = 0)",
          "workingLatex": "\\binom{5}{0}(-2x)^{0}=1",
          "explanation": "With $r=0$ there is no $x$, so the first term is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x (r = 1)",
          "workingLatex": "\\binom{5}{1}(-2x)^{1}=5\\times(-2x)=-10x",
          "explanation": "One factor of $(-2x)$ makes this term negative: $5\\times(-2)=-10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x squared (r = 2)",
          "workingLatex": "\\binom{5}{2}(-2x)^{2}=10\\times 4x^{2}=40x^{2}",
          "explanation": "Squaring $-2x$ gives $+4x^{2}$ because a negative squared is positive. Then $10\\times 4=40$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write out the first three terms",
          "workingLatex": "(1-2x)^{5}=1-10x+40x^{2}+\\dots",
          "explanation": "Placing the three terms in ascending powers of $x$ gives the required start of the expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1-10x+40x^{2}$ (in ascending powers of $x$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficient",
      "pascals-triangle"
    ],
    "questionText": "Write down the coefficient of $x^{2}$ in the expansion of $(1+x)^{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the special form",
          "workingLatex": "(1+x)^{5},\\quad n=5",
          "explanation": "This is the simplest binomial form, where both the constant and the coefficient of $x$ inside the bracket are $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the coefficient rule for (1+x)^n",
          "workingLatex": "\\text{coefficient of }x^{k}=\\binom{n}{k}",
          "explanation": "Since $a=b=1$, every power in the general term equals $1$, so the coefficient of $x^{k}$ in $(1+x)^{n}$ is just $\\binom{n}{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose k for the x squared term",
          "workingLatex": "k=2\\ \\Rightarrow\\ \\binom{5}{2}",
          "explanation": "The term in $x^{2}$ comes from choosing the $x$ part twice, which corresponds to $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{5}{2}=\\frac{5!}{2!\\,3!}=\\frac{5\\times 4}{2\\times 1}=10",
          "explanation": "The factorial formula reduces to $\\frac{5\\times 4}{2}=10$ after cancelling $3!$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cross-check with Pascal's triangle",
          "workingLatex": "\\text{row }5:\\ 1,5,10,10,5,1",
          "explanation": "The entry for $x^{2}$ is the third number in row $5$, which is $10$, confirming the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{2}=10",
          "explanation": "Both methods agree, so the coefficient of $x^{2}$ is $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{2}$ is $10$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x$ in the expansion of $(4+x)^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=3,\\quad a=4,\\quad b=1",
          "explanation": "Comparing $(4+x)^{3}$ with $(a+bx)^{n}$ gives $a=4$ and $b=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{3}{r}(4)^{3-r}(x)^{r}",
          "explanation": "The term containing $x^{r}$ has index $r$. To pick out the term in $x^{1}$ we simply set $r=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Select the value of r",
          "workingLatex": "r=1",
          "explanation": "We want the power $x^{1}$, so only the term with $r=1$ contributes to the coefficient of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute r = 1",
          "workingLatex": "\\binom{3}{1}(4)^{3-1}(x)^{1}=\\binom{3}{1}(4)^{2}\\,x",
          "explanation": "Putting $r=1$ leaves $4$ raised to the power $2$, since the powers of $a$ and $x$ must add to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the term",
          "workingLatex": "3\\times 16\\times x=48x",
          "explanation": "Here $\\binom{3}{1}=3$ and $4^{2}=16$, so the term is $48x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x=48",
          "explanation": "The number multiplying $x$ is $48$, which is the required coefficient.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x$ is $48$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^{2}$ in the expansion of $(1+4x)^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=4,\\quad a=1,\\quad b=4",
          "explanation": "Comparing $(1+4x)^{4}$ with $(a+bx)^{n}$ gives $a=1$ and $b=4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general term",
          "workingLatex": "\\binom{4}{r}(1)^{4-r}(4x)^{r}",
          "explanation": "Because $a=1$, its powers are all $1$, so the term in $x^{r}$ is $\\binom{4}{r}(4x)^{r}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Select the value of r",
          "workingLatex": "r=2",
          "explanation": "The power $x^{2}$ comes from the term with $r=2$, so this is the only term we need.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute r = 2",
          "workingLatex": "\\binom{4}{2}(4x)^{2}",
          "explanation": "This is the term in $x^{2}$. Note the whole $4x$ is squared, so the $4$ is squared as well as the $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate each factor",
          "workingLatex": "\\binom{4}{2}=6,\\quad (4)^{2}=16",
          "explanation": "The binomial coefficient is $6$ (the middle of row $4$: $1,4,6,4,1$) and squaring the $4$ gives $16$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply to get the coefficient",
          "workingLatex": "6\\times 16=96\\ \\Rightarrow\\ 96x^{2}",
          "explanation": "Multiplying the coefficient $6$ by $16$ gives $96$, so the term is $96x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{2}=96",
          "explanation": "The number multiplying $x^{2}$ is $96$, which is the required coefficient.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{2}$ is $96$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "full-expansion",
      "signs"
    ],
    "questionText": "Expand $(3-2x)^{3}$ in ascending powers of $x$, simplifying each coefficient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=3,\\quad a=3,\\quad b=-2",
          "explanation": "Writing $(3-2x)^{3}$ as $(3+(-2)x)^{3}$ gives $b=-2$. Keeping the minus with the $2$ produces the correct alternating signs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down Pascal's triangle row 3",
          "workingLatex": "\\binom{3}{0},\\binom{3}{1},\\binom{3}{2},\\binom{3}{3}=1,3,3,1",
          "explanation": "For $n=3$ the coefficients are $1,3,3,1$, giving four terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the general term",
          "workingLatex": "\\binom{3}{r}(3)^{3-r}(-2x)^{r}",
          "explanation": "Each term multiplies a falling power of $3$ by a rising power of $(-2x)$, so odd powers of $x$ will be negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant term (r = 0)",
          "workingLatex": "\\binom{3}{0}(3)^{3}=1\\times 27=27",
          "explanation": "With $r=0$ this is $a^{n}=3^{3}=27$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x (r = 1)",
          "workingLatex": "\\binom{3}{1}(3)^{2}(-2x)^{1}=3\\times 9\\times(-2x)=-54x",
          "explanation": "Here $3^{2}=9$ and the single $(-2x)$ makes the term negative: $3\\times 9\\times(-2)=-54$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x squared (r = 2)",
          "workingLatex": "\\binom{3}{2}(3)^{1}(-2x)^{2}=3\\times 3\\times 4x^{2}=36x^{2}",
          "explanation": "Squaring $-2x$ gives $+4x^{2}$ since a negative squared is positive. Then $3\\times 3\\times 4=36$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Term in x cubed (r = 3)",
          "workingLatex": "\\binom{3}{3}(-2x)^{3}=1\\times(-8x^{3})=-8x^{3}",
          "explanation": "Cubing $-2x$ gives $-8x^{3}$ because $(-2)^{3}=-8$, so this term is negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine all terms",
          "workingLatex": "(3-2x)^{3}=27-54x+36x^{2}-8x^{3}",
          "explanation": "Collecting the four terms gives the full expansion, with signs alternating as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$27-54x+36x^{2}-8x^{3}$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "ascending-powers",
      "first-terms"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, in the expansion of $(2+x)^{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n, a and b",
          "workingLatex": "n=5,\\quad a=2,\\quad b=1",
          "explanation": "Comparing $(2+x)^{5}$ with $(a+bx)^{n}$ gives $a=2$ and $b=1$. Here $a=2$ is raised to powers, so those numbers do not disappear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general term",
          "workingLatex": "\\binom{5}{r}(2)^{5-r}(x)^{r}",
          "explanation": "Each term in $x^{r}$ carries a factor $2^{5-r}$, so the constant $2$ makes a real contribution to every coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the binomial coefficients needed",
          "workingLatex": "\\binom{5}{0}=1,\\quad \\binom{5}{1}=5,\\quad \\binom{5}{2}=10",
          "explanation": "For the first three terms we need $r=0,1,2$, the start of row $5$ of Pascal's triangle: $1,5,10,10,5,1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant term (r = 0)",
          "workingLatex": "\\binom{5}{0}(2)^{5}=1\\times 32=32",
          "explanation": "With $r=0$ this is $a^{n}=2^{5}=32$; unlike the $a=1$ case, this term is not just $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x (r = 1)",
          "workingLatex": "\\binom{5}{1}(2)^{4}(x)^{1}=5\\times 16\\times x=80x",
          "explanation": "Here $2^{4}=16$, and $5\\times 16=80$, giving $80x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x squared (r = 2)",
          "workingLatex": "\\binom{5}{2}(2)^{3}(x)^{2}=10\\times 8\\times x^{2}=80x^{2}",
          "explanation": "Now $2^{3}=8$, and $10\\times 8=80$, so the coefficient is again $80$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write out the first three terms",
          "workingLatex": "(2+x)^{5}=32+80x+80x^{2}+\\dots",
          "explanation": "Placing the three terms in ascending powers of $x$ gives the required start of the expansion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$32+80x+80x^{2}$ (in ascending powers of $x$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "general-term",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^4$ in the expansion of $(2+3x)^7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{7}{r}(2)^{7-r}(3x)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$. Every term in the expansion comes from a single choice of $r$, so rather than expanding all eight terms we can jump straight to the one we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=7,\\quad a=2,\\quad b=3",
          "explanation": "Comparing $(2+3x)^7$ with $(a+bx)^n$, the constant is $a=2$, the coefficient of $x$ is $b=3$, and the power is $n=7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which r gives x to the fourth",
          "workingLatex": "(bx)^r=b^r x^r\\Rightarrow x^r=x^4\\Rightarrow r=4",
          "explanation": "Only the $(bx)^r$ factor carries $x$, so the power of $x$ in a term is exactly $r$. To land on $x^4$ we set $r=4$. This is the $5$th term, since $T_{r+1}$ with $r=4$ is $T_5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 4",
          "workingLatex": "T_{5}=\\binom{7}{4}(2)^{3}(3x)^{4}",
          "explanation": "Substituting $r=4$ isolates precisely the piece that produces $x^4$, so no other terms need to be written out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{7}{4}=\\frac{7!}{4!\\,3!}=35",
          "explanation": "By symmetry $\\binom{7}{4}=\\binom{7}{3}=\\frac{7\\times6\\times5}{3!}=35$, which is a quick way to check the value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "2^{3}=8",
          "explanation": "The leftover factor from $a$ is $a^{n-r}=2^{7-4}=2^3=8$. The exponents on $a$ and on $b$ always add up to $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b",
          "workingLatex": "3^{4}=81",
          "explanation": "The factor $(3x)^4$ gives $3^4 x^4$, and $3^4=81$. Keeping the number separate from $x^4$ makes the coefficient easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the numerical parts",
          "workingLatex": "35\\times8\\times81",
          "explanation": "The coefficient is the product of the three numbers, while $x^4$ simply rides along untouched.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "35\\times8\\times81=35\\times648=22680",
          "explanation": "Multiplying $8\\times81=648$ first and then $35\\times648$ gives $22680$, the number in front of $x^4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^4=22680",
          "explanation": "This single number answers the question; the full term is $22680x^4$, but only the coefficient was asked for.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^4$ is $22680$ (the term is $22680x^4$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "general-term",
      "specific-term"
    ],
    "questionText": "Find the term in $x^5$ in the expansion of $(1-2x)^9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{9}{r}(1)^{9-r}(-2x)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$. Because the bracket is $1+(-2)x$, the value $b=-2$ must be carried inside with its sign or the final sign will be wrong.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=9,\\quad a=1,\\quad b=-2",
          "explanation": "Matching $(1-2x)^9$ to $(a+bx)^n$ gives $a=1$, $b=-2$ and $n=9$. Writing the minus sign as part of $b$ keeps the bookkeeping clean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which r gives x to the fifth",
          "workingLatex": "x^r=x^5\\Rightarrow r=5",
          "explanation": "The power of $x$ equals $r$, so $x^5$ needs $r=5$. This is the $6$th term, $T_6$, because the index of a term is $r+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 5",
          "workingLatex": "T_{6}=\\binom{9}{5}(1)^{4}(-2x)^{5}",
          "explanation": "Putting $r=5$ into the general term gives exactly the piece containing $x^5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{9}{5}=\\frac{9!}{5!\\,4!}=126",
          "explanation": "By symmetry $\\binom{9}{5}=\\binom{9}{4}$, and $\\frac{9\\times8\\times7\\times6}{4!}=126$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "1^{4}=1",
          "explanation": "Since $a=1$, the factor $a^{n-r}=1^4=1$ and simply disappears from the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b with its sign",
          "workingLatex": "(-2)^{5}=-32",
          "explanation": "An odd power of a negative number stays negative, so $(-2)^5=-32$ and the whole term will be negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Separate the x part",
          "workingLatex": "(-2x)^5=-32x^5",
          "explanation": "The factor $(-2x)^5$ splits into the number $-32$ and the power $x^5$; only the number contributes to the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the pieces",
          "workingLatex": "T_6=126\\times(-32)\\,x^5",
          "explanation": "Multiplying the binomial coefficient by $-32$ gives the coefficient of $x^5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the coefficient",
          "workingLatex": "126\\times(-32)=-4032",
          "explanation": "Computing $126\\times32=4032$ and restoring the minus sign gives $-4032$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the term",
          "workingLatex": "T_6=-4032x^{5}",
          "explanation": "The question asks for the whole term, so the answer is $-4032x^5$, not just the number.",
          "diagram": null
        }
      ],
      "finalAnswer": "The term in $x^5$ is $-4032x^5$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "general-term",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^3$ in the expansion of $\\left(3+\\dfrac{x}{2}\\right)^6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{6}{r}(3)^{6-r}\\left(\\tfrac{1}{2}x\\right)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$. Rewriting $\\frac{x}{2}$ as $\\frac{1}{2}x$ shows the coefficient of $x$ is $b=\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=6,\\quad a=3,\\quad b=\\tfrac{1}{2}",
          "explanation": "Comparing with $(a+bx)^n$, the constant is $a=3$, the coefficient of $x$ is $b=\\frac{1}{2}$, and the power is $n=6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which r gives x cubed",
          "workingLatex": "x^r=x^3\\Rightarrow r=3",
          "explanation": "The power of $x$ in a term equals $r$, so $x^3$ requires $r=3$. This is the $4$th term, $T_4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 3",
          "workingLatex": "T_{4}=\\binom{6}{3}(3)^{3}\\left(\\tfrac{1}{2}x\\right)^{3}",
          "explanation": "Substituting $r=3$ isolates the single term that produces $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{6}{3}=\\frac{6!}{3!\\,3!}=20",
          "explanation": "The middle entry of row $6$ of Pascal's triangle is $20$, matching $\\frac{6\\times5\\times4}{3!}=20$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "3^{3}=27",
          "explanation": "The leftover factor from $a$ is $a^{n-r}=3^{6-3}=3^3=27$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b",
          "workingLatex": "\\left(\\tfrac{1}{2}\\right)^{3}=\\tfrac{1}{8}",
          "explanation": "Cubing a fraction cubes both the top and the bottom: $\\left(\\frac{1}{2}\\right)^3=\\frac{1}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Assemble the numerical parts",
          "workingLatex": "20\\times27\\times\\tfrac{1}{8}",
          "explanation": "The coefficient is the product of the three numbers, with $x^3$ left aside.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "20\\times27=540,\\quad \\frac{540}{8}=\\frac{135}{2}",
          "explanation": "Multiplying $20\\times27=540$ and then dividing by $8$ gives $\\frac{540}{8}=\\frac{135}{2}$ after cancelling by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^3=\\frac{135}{2}=67.5",
          "explanation": "The number in front of $x^3$ is $\\frac{135}{2}$, or equivalently $67.5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^3$ is $\\dfrac{135}{2}=67.5$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "general-term",
      "specific-term"
    ],
    "questionText": "Find the term in $x^4$ in the expansion of $(2-x)^8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{8}{r}(2)^{8-r}(-x)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$. The bracket is $2+(-1)x$, so $b=-1$ and the minus sign is carried inside.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=8,\\quad a=2,\\quad b=-1",
          "explanation": "Matching $(2-x)^8$ to $(a+bx)^n$ gives $a=2$, $b=-1$ and $n=8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which r gives x to the fourth",
          "workingLatex": "x^r=x^4\\Rightarrow r=4",
          "explanation": "The power of $x$ equals $r$, so $x^4$ needs $r=4$. This is the $5$th term, $T_5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 4",
          "workingLatex": "T_{5}=\\binom{8}{4}(2)^{4}(-x)^{4}",
          "explanation": "Substituting $r=4$ picks out exactly the term containing $x^4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{8}{4}=\\frac{8!}{4!\\,4!}=70",
          "explanation": "The central entry of row $8$ of Pascal's triangle is $70$, matching $\\frac{8\\times7\\times6\\times5}{4!}=70$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "2^{4}=16",
          "explanation": "The leftover factor from $a$ is $a^{n-r}=2^{8-4}=2^4=16$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b with its sign",
          "workingLatex": "(-1)^{4}=1",
          "explanation": "An even power of a negative number is positive, so $(-1)^4=1$ and the term stays positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the pieces",
          "workingLatex": "T_5=70\\times16\\times1\\,x^4",
          "explanation": "Multiplying the numerical factors together while keeping $x^4$ gives the term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the coefficient",
          "workingLatex": "70\\times16=1120",
          "explanation": "The product of the numbers is $1120$, which becomes the coefficient of $x^4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the term",
          "workingLatex": "T_5=1120x^{4}",
          "explanation": "The question asks for the whole term, so the answer is $1120x^4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The term in $x^4$ is $1120x^4$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "general-term",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^2$ in the expansion of $(5+2x)^6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{6}{r}(5)^{6-r}(2x)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$, which lets us target one term directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=6,\\quad a=5,\\quad b=2",
          "explanation": "Comparing $(5+2x)^6$ with $(a+bx)^n$ gives $a=5$, $b=2$ and $n=6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which r gives x squared",
          "workingLatex": "x^r=x^2\\Rightarrow r=2",
          "explanation": "The power of $x$ equals $r$, so $x^2$ requires $r=2$. This is the $3$rd term, $T_3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 2",
          "workingLatex": "T_{3}=\\binom{6}{2}(5)^{4}(2x)^{2}",
          "explanation": "Substituting $r=2$ isolates the single term that produces $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{6}{2}=\\frac{6!}{2!\\,4!}=15",
          "explanation": "$\\binom{6}{2}=\\frac{6\\times5}{2!}=15$, the number of ways to choose the two $x$ factors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "5^{4}=625",
          "explanation": "The leftover factor from $a$ is $a^{n-r}=5^{6-2}=5^4=625$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b",
          "workingLatex": "2^{2}=4",
          "explanation": "The factor $(2x)^2$ gives $2^2 x^2$, and $2^2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the numerical parts",
          "workingLatex": "15\\times625\\times4",
          "explanation": "The coefficient is the product of the three numbers, with $x^2$ set aside.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "625\\times4=2500,\\quad 15\\times2500=37500",
          "explanation": "Multiplying $625\\times4=2500$ first, then $15\\times2500=37500$, gives the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^2=37500",
          "explanation": "The number in front of $x^2$ is $37500$, which is what the question asks for.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^2$ is $37500$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "general-term",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^6$ in the expansion of $(1+3x)^{10}$, clearly stating the value of $r$ in the general term that produces this power.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{10}{r}(1)^{10-r}(3x)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$. Each term corresponds to one value of $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=10,\\quad a=1,\\quad b=3",
          "explanation": "Comparing $(1+3x)^{10}$ with $(a+bx)^n$ gives $a=1$, $b=3$ and $n=10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the value of r",
          "workingLatex": "x^r=x^6\\Rightarrow r=6",
          "explanation": "Only $(3x)^r$ carries $x$, so the power of $x$ is $r$. The required power $6$ therefore forces $r=6$. Note this is the $7$th term, $T_7$, because a term's index is $r+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 6",
          "workingLatex": "T_{7}=\\binom{10}{6}(1)^{4}(3x)^{6}",
          "explanation": "Substituting $r=6$ isolates the term containing $x^6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{10}{6}=\\binom{10}{4}=\\frac{10!}{6!\\,4!}=210",
          "explanation": "By symmetry $\\binom{10}{6}=\\binom{10}{4}$, and $\\frac{10\\times9\\times8\\times7}{4!}=210$; using the smaller lower entry keeps the arithmetic light.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "1^{4}=1",
          "explanation": "Since $a=1$, the factor $a^{n-r}=1^4=1$ and drops out of the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b",
          "workingLatex": "3^{6}=729",
          "explanation": "The factor $(3x)^6$ gives $3^6 x^6$, and $3^6=729$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the numerical parts",
          "workingLatex": "210\\times1\\times729",
          "explanation": "The coefficient is the product of the numbers, with $x^6$ left untouched.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "210\\times729=153090",
          "explanation": "Computing $210\\times729=153090$ gives the number in front of $x^6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State r and the coefficient",
          "workingLatex": "r=6,\\quad \\text{coefficient of }x^6=153090",
          "explanation": "The value $r=6$ produces the power $x^6$, and the coefficient of that term is $153090$.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $r=6$, the coefficient of $x^6$ is $153090$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "general-term",
      "specific-term"
    ],
    "questionText": "Find the term in $x^3$ in the expansion of $(4+3x)^7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{7}{r}(4)^{7-r}(3x)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$, which lets us build one term directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=7,\\quad a=4,\\quad b=3",
          "explanation": "Comparing $(4+3x)^7$ with $(a+bx)^n$ gives $a=4$, $b=3$ and $n=7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which r gives x cubed",
          "workingLatex": "x^r=x^3\\Rightarrow r=3",
          "explanation": "The power of $x$ equals $r$, so $x^3$ needs $r=3$. This is the $4$th term, $T_4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 3",
          "workingLatex": "T_{4}=\\binom{7}{3}(4)^{4}(3x)^{3}",
          "explanation": "Substituting $r=3$ isolates the single term that produces $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{7}{3}=\\frac{7!}{3!\\,4!}=35",
          "explanation": "$\\binom{7}{3}=\\frac{7\\times6\\times5}{3!}=35$, which also equals $\\binom{7}{4}$ by symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "4^{4}=256",
          "explanation": "The leftover factor from $a$ is $a^{n-r}=4^{7-3}=4^4=256$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b",
          "workingLatex": "3^{3}=27",
          "explanation": "The factor $(3x)^3$ gives $3^3 x^3$, and $3^3=27$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the numerical parts",
          "workingLatex": "35\\times256\\times27",
          "explanation": "The coefficient is the product of the three numbers, with $x^3$ set aside.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify part of the product",
          "workingLatex": "256\\times27=6912",
          "explanation": "Multiplying $256\\times27$ first keeps the running total manageable and gives $6912$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Finish the multiplication",
          "workingLatex": "35\\times6912=241920",
          "explanation": "Then $35\\times6912=241920$, the coefficient of $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the term",
          "workingLatex": "T_4=241920x^{3}",
          "explanation": "The question asks for the whole term, so the answer is $241920x^3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The term in $x^3$ is $241920x^3$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "general-term",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^5$ in the expansion of $(2-3x)^8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{8}{r}(2)^{8-r}(-3x)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$. The bracket is $2+(-3)x$, so $b=-3$ with its sign carried inside.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=8,\\quad a=2,\\quad b=-3",
          "explanation": "Matching $(2-3x)^8$ to $(a+bx)^n$ gives $a=2$, $b=-3$ and $n=8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which r gives x to the fifth",
          "workingLatex": "x^r=x^5\\Rightarrow r=5",
          "explanation": "The power of $x$ equals $r$, so $x^5$ requires $r=5$. This is the $6$th term, $T_6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 5",
          "workingLatex": "T_{6}=\\binom{8}{5}(2)^{3}(-3x)^{5}",
          "explanation": "Substituting $r=5$ isolates the single term that produces $x^5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{8}{5}=\\binom{8}{3}=\\frac{8!}{5!\\,3!}=56",
          "explanation": "By symmetry $\\binom{8}{5}=\\binom{8}{3}=\\frac{8\\times7\\times6}{3!}=56$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "2^{3}=8",
          "explanation": "The leftover factor from $a$ is $a^{n-r}=2^{8-5}=2^3=8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b with its sign",
          "workingLatex": "(-3)^{5}=-243",
          "explanation": "An odd power of a negative number stays negative, so $(-3)^5=-243$ and the coefficient will be negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the numerical parts",
          "workingLatex": "56\\times8\\times(-243)",
          "explanation": "The coefficient is the product of the three numbers, keeping track of the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify part of the product",
          "workingLatex": "56\\times8=448",
          "explanation": "Multiplying the two positive factors first gives $448$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Finish the multiplication",
          "workingLatex": "448\\times(-243)=-108864",
          "explanation": "Then $448\\times243=108864$, and restoring the minus sign gives $-108864$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^5=-108864",
          "explanation": "The number in front of $x^5$ is $-108864$, which the question asks for.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^5$ is $-108864$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "general-term",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^4$ in the expansion of $\\left(3-\\dfrac{x}{3}\\right)^6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{6}{r}(3)^{6-r}\\left(-\\tfrac{1}{3}x\\right)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$. Writing $-\\frac{x}{3}$ as $-\\frac{1}{3}x$ shows the coefficient of $x$ is $b=-\\frac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=6,\\quad a=3,\\quad b=-\\tfrac{1}{3}",
          "explanation": "Comparing with $(a+bx)^n$, the constant is $a=3$, the coefficient of $x$ is $b=-\\frac{1}{3}$, and the power is $n=6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which r gives x to the fourth",
          "workingLatex": "x^r=x^4\\Rightarrow r=4",
          "explanation": "The power of $x$ equals $r$, so $x^4$ needs $r=4$. This is the $5$th term, $T_5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 4",
          "workingLatex": "T_{5}=\\binom{6}{4}(3)^{2}\\left(-\\tfrac{1}{3}\\right)^{4}x^{4}",
          "explanation": "Substituting $r=4$ isolates the single term that produces $x^4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{6}{4}=\\binom{6}{2}=\\frac{6!}{4!\\,2!}=15",
          "explanation": "By symmetry $\\binom{6}{4}=\\binom{6}{2}=\\frac{6\\times5}{2!}=15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "3^{2}=9",
          "explanation": "The leftover factor from $a$ is $a^{n-r}=3^{6-4}=3^2=9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b with its sign",
          "workingLatex": "\\left(-\\tfrac{1}{3}\\right)^{4}=\\tfrac{1}{81}",
          "explanation": "An even power of a negative fraction is positive, and $\\left(\\frac{1}{3}\\right)^4=\\frac{1}{81}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the numerical parts",
          "workingLatex": "15\\times9\\times\\tfrac{1}{81}",
          "explanation": "The coefficient is the product of the three numbers, with $x^4$ set aside.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "15\\times9=135,\\quad \\frac{135}{81}=\\frac{5}{3}",
          "explanation": "Multiplying $15\\times9=135$, then dividing by $81$ and cancelling by $27$ gives $\\frac{5}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^4=\\frac{5}{3}",
          "explanation": "The number in front of $x^4$ is $\\frac{5}{3}$, which the question asks for.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^4$ is $\\dfrac{5}{3}$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "general-term",
      "specific-term"
    ],
    "questionText": "Find the term in $x^2$ in the expansion of $\\left(\\dfrac{1}{2}+4x\\right)^9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{9}{r}\\left(\\tfrac{1}{2}\\right)^{9-r}(4x)^{r}",
          "explanation": "The general term of $(a+bx)^n$ is $T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^r$. Here the constant $a=\\frac{1}{2}$ is a fraction, so it must be raised to a power just like any other value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n, a and b",
          "workingLatex": "n=9,\\quad a=\\tfrac{1}{2},\\quad b=4",
          "explanation": "Comparing $\\left(\\frac{1}{2}+4x\\right)^9$ with $(a+bx)^n$ gives $a=\\frac{1}{2}$, $b=4$ and $n=9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide which r gives x squared",
          "workingLatex": "x^r=x^2\\Rightarrow r=2",
          "explanation": "The power of $x$ equals $r$, so $x^2$ requires $r=2$. This is the $3$rd term, $T_3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the term for r = 2",
          "workingLatex": "T_{3}=\\binom{9}{2}\\left(\\tfrac{1}{2}\\right)^{7}(4x)^{2}",
          "explanation": "Substituting $r=2$ isolates the single term that produces $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{9}{2}=\\frac{9!}{2!\\,7!}=36",
          "explanation": "$\\binom{9}{2}=\\frac{9\\times8}{2!}=36$, the number of ways to choose the two $x$ factors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of a",
          "workingLatex": "\\left(\\tfrac{1}{2}\\right)^{7}=\\tfrac{1}{128}",
          "explanation": "Raising the fraction to the seventh power gives $\\frac{1^7}{2^7}=\\frac{1}{128}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the power of b",
          "workingLatex": "4^{2}=16",
          "explanation": "The factor $(4x)^2$ gives $4^2 x^2$, and $4^2=16$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the numerical parts",
          "workingLatex": "36\\times\\tfrac{1}{128}\\times16",
          "explanation": "The coefficient is the product of the three numbers, with $x^2$ left aside.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "36\\times16=576,\\quad \\frac{576}{128}=\\frac{9}{2}",
          "explanation": "Multiplying $36\\times16=576$, then dividing by $128$ and cancelling by $64$ gives $\\frac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the term",
          "workingLatex": "T_3=\\frac{9}{2}x^{2}",
          "explanation": "The question asks for the whole term, so the answer is $\\frac{9}{2}x^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The term in $x^2$ is $\\dfrac{9}{2}x^2$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "approximation",
      "estimation"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, of the binomial expansion of $(1+x)^{10}$. By substituting a suitable small value of $x$, use your expansion to estimate the value of $1.02^{10}$, giving your answer to four decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the binomial expansion",
          "workingLatex": "(1+x)^{n}=1+nx+\\binom{n}{2}x^{2}+\\binom{n}{3}x^{3}+\\cdots",
          "explanation": "For a positive integer power the expansion is finite. We only need the first few terms because, once $x$ is small, the later terms become tiny.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n",
          "workingLatex": "n=10",
          "explanation": "Comparing $(1+x)^{10}$ with $(1+x)^{n}$ gives $n=10$; here $a=1$ and $b=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant term",
          "workingLatex": "\\binom{10}{0}=1",
          "explanation": "The first term is always $1$ because $a=1$ raised to any power is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Term in x",
          "workingLatex": "\\binom{10}{1}x=10x",
          "explanation": "The coefficient of $x$ is $n=10$: there are ten ways to pick a single $x$ from the ten brackets.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x squared",
          "workingLatex": "\\binom{10}{2}x^{2}=45x^{2}",
          "explanation": "$\\binom{10}{2}=\\frac{10\\times 9}{2}=45$, the number of ways to choose two of the $x$ factors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the first three terms",
          "workingLatex": "(1+x)^{10}\\approx 1+10x+45x^{2}",
          "explanation": "These are the three leading terms in ascending powers of $x$; the remaining terms start at $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose x to match the target",
          "workingLatex": "1+x=1.02\\ \\Rightarrow\\ x=0.02",
          "explanation": "We want $1.02^{10}$, so set $1+x=1.02$, giving $x=0.02$. This is small, so the omitted $x^{3}$ and higher terms are negligible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 0.02",
          "workingLatex": "1.02^{10}\\approx 1+10(0.02)+45(0.02)^{2}",
          "explanation": "Replacing $x$ with $0.02$ in the truncated expansion turns it into a numerical estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate each term",
          "workingLatex": "=1+0.2+45(0.0004)=1+0.2+0.018",
          "explanation": "$(0.02)^{2}=0.0004$, so the $x^{2}$ term is $45\\times 0.0004=0.018$ — already small, which shows the omitted terms matter even less.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the terms",
          "workingLatex": "1.02^{10}\\approx 1.218",
          "explanation": "Summing the three contributions gives the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the true value",
          "workingLatex": "1.02^{10}=1.21899\\ldots\\quad(\\text{error}\\approx 0.001)",
          "explanation": "The exact value is $1.2189944\\ldots$, so the three-term estimate $1.2180$ is accurate to about one part in a thousand — good, because $x=0.02$ is small.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{10}\\approx 1+10x+45x^{2}$; with $x=0.02$, $1.02^{10}\\approx 1.2180$ (true value $1.2190$ to 4 d.p.)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "approximation",
      "estimation"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, of the binomial expansion of $(1-2x)^{8}$. Hence, by choosing a suitable small value of $x$, estimate $0.98^{8}$ to five decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the binomial theorem",
          "workingLatex": "(a+b)^{n}=\\sum_{r=0}^{n}\\binom{n}{r}a^{n-r}b^{r}",
          "explanation": "Each term chooses $r$ factors of $b$ and $n-r$ factors of $a$ from the $n$ brackets.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, b and n",
          "workingLatex": "a=1,\\ b=-2x,\\ n=8",
          "explanation": "Writing $(1-2x)^{8}$ as $(1+(-2x))^{8}$ shows the second entry is $-2x$; the minus sign will make the terms alternate in sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant term",
          "workingLatex": "\\binom{8}{0}(1)^{8}=1",
          "explanation": "With no factor of $-2x$ chosen, the term is simply $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Term in x",
          "workingLatex": "\\binom{8}{1}(-2x)=8\\times(-2x)=-16x",
          "explanation": "$\\binom{8}{1}=8$ and $8\\times(-2)=-16$; the term is negative because $b$ is negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x squared",
          "workingLatex": "\\binom{8}{2}(-2x)^{2}=28\\times 4x^{2}=112x^{2}",
          "explanation": "$(-2x)^{2}=4x^{2}$ is positive (an even power), and $\\binom{8}{2}=28$, giving $112x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x cubed",
          "workingLatex": "\\binom{8}{3}(-2x)^{3}=56\\times(-8x^{3})=-448x^{3}",
          "explanation": "$(-2x)^{3}=-8x^{3}$ (an odd power keeps the minus sign), and $\\binom{8}{3}=56$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the first four terms",
          "workingLatex": "(1-2x)^{8}\\approx 1-16x+112x^{2}-448x^{3}",
          "explanation": "The signs alternate $+,-,+,-$, a hallmark of expanding $(1-\\ldots)^{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choose x to match the target",
          "workingLatex": "1-2x=0.98\\ \\Rightarrow\\ x=0.01",
          "explanation": "We need $0.98^{8}$, so set $1-2x=0.98$, giving $x=0.01$. This is small, so the dropped $x^{4}$ and higher terms are negligible.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = 0.01",
          "workingLatex": "0.98^{8}\\approx 1-16(0.01)+112(0.01)^{2}-448(0.01)^{3}",
          "explanation": "Putting $x=0.01$ into the four-term expansion turns it into a number.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate each term",
          "workingLatex": "=1-0.16+0.0112-0.000448",
          "explanation": "$(0.01)^{2}=0.0001$ and $(0.01)^{3}=0.000001$, so the terms shrink quickly — evidence that truncating is safe.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the terms",
          "workingLatex": "0.98^{8}\\approx 0.850752",
          "explanation": "Combining the four contributions gives the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with the true value",
          "workingLatex": "0.98^{8}=0.8507630\\ldots\\quad(\\text{error}\\approx 0.00001)",
          "explanation": "The exact value is $0.85076302\\ldots$; the four-term estimate $0.85075$ agrees to four decimal places (differing only in the fifth), confirming the method is accurate for small $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1-2x)^{8}\\approx 1-16x+112x^{2}-448x^{3}$; with $x=0.01$, $0.98^{8}\\approx 0.85075$ (true value $0.85076$ to 5 d.p.)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "approximation",
      "estimation"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, of the binomial expansion of $(2+x)^{6}$. Hence estimate the value of $2.1^{6}$, and compare your estimate with the exact value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{6}{r}(2)^{6-r}(x)^{r}",
          "explanation": "Here $a=2$ and $b=x$, so each term carries a power of $2$ that decreases as the power of $x$ rises.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Constant term (r=0)",
          "workingLatex": "\\binom{6}{0}2^{6}=1\\times 64=64",
          "explanation": "With no $x$ chosen, all six factors contribute a $2$, giving $2^{6}=64$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Term in x (r=1)",
          "workingLatex": "\\binom{6}{1}2^{5}x=6\\times 32\\,x=192x",
          "explanation": "$\\binom{6}{1}=6$ and $2^{5}=32$, so the coefficient of $x$ is $192$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Term in x squared (r=2)",
          "workingLatex": "\\binom{6}{2}2^{4}x^{2}=15\\times 16\\,x^{2}=240x^{2}",
          "explanation": "$\\binom{6}{2}=15$ and $2^{4}=16$, giving the $x^{2}$ coefficient $240$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x cubed (r=3)",
          "workingLatex": "\\binom{6}{3}2^{3}x^{3}=20\\times 8\\,x^{3}=160x^{3}",
          "explanation": "$\\binom{6}{3}=20$ and $2^{3}=8$, giving the $x^{3}$ coefficient $160$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the first four terms",
          "workingLatex": "(2+x)^{6}\\approx 64+192x+240x^{2}+160x^{3}",
          "explanation": "The powers of $2$ fall $64,32,16,8$ while the binomial coefficients rise, then the terms taper off.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose x to match the target",
          "workingLatex": "2+x=2.1\\ \\Rightarrow\\ x=0.1",
          "explanation": "We want $2.1^{6}$, so set $2+x=2.1$, giving $x=0.1$. Relative to $a=2$ this is small, so the higher terms are negligible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 0.1",
          "workingLatex": "2.1^{6}\\approx 64+192(0.1)+240(0.1)^{2}+160(0.1)^{3}",
          "explanation": "Putting $x=0.1$ into the four-term expansion turns it into a number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate each term",
          "workingLatex": "=64+19.2+2.4+0.16",
          "explanation": "$(0.1)^{2}=0.01$ and $(0.1)^{3}=0.001$, so the terms $2.4$ and $0.16$ are already small — the omitted $x^{4}$ term is smaller still.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the terms",
          "workingLatex": "2.1^{6}\\approx 85.76",
          "explanation": "Summing the four contributions gives the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the true value",
          "workingLatex": "2.1^{6}=85.766121\\quad(\\text{error}\\approx 0.006)",
          "explanation": "The exact value is $85.766121$, so the four-term estimate $85.76$ is correct to three significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2+x)^{6}\\approx 64+192x+240x^{2}+160x^{3}$; with $x=0.1$, $2.1^{6}\\approx 85.76$ (exact value $85.766121$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "approximation",
      "estimation"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, of the binomial expansion of $(1+3x)^{7}$. By substituting a suitable small value of $x$, estimate $1.03^{7}$ to four decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the binomial expansion",
          "workingLatex": "(1+u)^{n}=1+nu+\\binom{n}{2}u^{2}+\\cdots",
          "explanation": "Treat the whole quantity $3x$ as $u$ so the standard $(1+u)^{n}$ pattern applies cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and the quantity u",
          "workingLatex": "n=7,\\ u=3x",
          "explanation": "Comparing $(1+3x)^{7}$ with $(1+u)^{n}$: the power is $7$ and $u=3x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant term",
          "workingLatex": "\\binom{7}{0}=1",
          "explanation": "With $a=1$, the first term is $1$ and carries no $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Term in x",
          "workingLatex": "\\binom{7}{1}(3x)=7\\times 3x=21x",
          "explanation": "$\\binom{7}{1}=7$ multiplies the $3$ inside $u=3x$, giving $21x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x squared",
          "workingLatex": "\\binom{7}{2}(3x)^{2}=21\\times 9x^{2}=189x^{2}",
          "explanation": "$(3x)^{2}=9x^{2}$ and $\\binom{7}{2}=21$, so the coefficient is $189$. Squaring the $3$ makes this coefficient grow quickly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the first three terms",
          "workingLatex": "(1+3x)^{7}\\approx 1+21x+189x^{2}",
          "explanation": "These are the leading terms; everything omitted starts at $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose x to match the target",
          "workingLatex": "1+3x=1.03\\ \\Rightarrow\\ x=0.01",
          "explanation": "For $1.03^{7}$ we need $1+3x=1.03$, so $3x=0.03$ and $x=0.01$ — small enough to drop the $x^{3}$ and later terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 0.01",
          "workingLatex": "1.03^{7}\\approx 1+21(0.01)+189(0.01)^{2}",
          "explanation": "Putting $x=0.01$ into the three-term expansion turns it into a number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate each term",
          "workingLatex": "=1+0.21+189(0.0001)=1+0.21+0.0189",
          "explanation": "$(0.01)^{2}=0.0001$, so the $x^{2}$ term is $0.0189$ — small, confirming the truncation is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the terms",
          "workingLatex": "1.03^{7}\\approx 1.2289",
          "explanation": "Summing the three contributions gives the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the true value",
          "workingLatex": "1.03^{7}=1.229874\\ldots\\quad(\\text{error}\\approx 0.001)",
          "explanation": "The exact value is $1.2298739\\ldots$; the three-term estimate $1.2289$ is accurate to two decimal places (the error is about $0.001$), and would improve if we kept the $x^{3}$ term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+3x)^{7}\\approx 1+21x+189x^{2}$; with $x=0.01$, $1.03^{7}\\approx 1.2289$ (true value $1.2299$ to 4 d.p.)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "approximation",
      "estimation"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, of the binomial expansion of $(1-x)^{12}$. Hence estimate $0.99^{12}$ to five decimal places, and comment on the accuracy.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the binomial expansion",
          "workingLatex": "(1+b)^{n}=1+nb+\\binom{n}{2}b^{2}+\\binom{n}{3}b^{3}+\\cdots",
          "explanation": "The standard series for $(1+b)^{n}$ works even when $b$ itself is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n and b",
          "workingLatex": "n=12,\\ b=-x",
          "explanation": "Write $(1-x)^{12}$ as $(1+(-x))^{12}$; the $-x$ makes the signs alternate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant term",
          "workingLatex": "\\binom{12}{0}(1)^{12}=1",
          "explanation": "The leading term is $1$ because $a=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Term in x",
          "workingLatex": "\\binom{12}{1}(-x)=-12x",
          "explanation": "$\\binom{12}{1}=12$ and the sign comes from $b=-x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x squared",
          "workingLatex": "\\binom{12}{2}(-x)^{2}=66x^{2}",
          "explanation": "$(-x)^{2}=x^{2}$ is positive and $\\binom{12}{2}=\\frac{12\\times 11}{2}=66$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x cubed",
          "workingLatex": "\\binom{12}{3}(-x)^{3}=-220x^{3}",
          "explanation": "$(-x)^{3}=-x^{3}$ and $\\binom{12}{3}=\\frac{12\\times 11\\times 10}{6}=220$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the first four terms",
          "workingLatex": "(1-x)^{12}\\approx 1-12x+66x^{2}-220x^{3}",
          "explanation": "The signs alternate as expected for a $(1-x)^{n}$ expansion.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choose x to match the target",
          "workingLatex": "1-x=0.99\\ \\Rightarrow\\ x=0.01",
          "explanation": "For $0.99^{12}$ set $1-x=0.99$, so $x=0.01$, which is small.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = 0.01",
          "workingLatex": "0.99^{12}\\approx 1-12(0.01)+66(0.01)^{2}-220(0.01)^{3}",
          "explanation": "Putting $x=0.01$ into the four-term expansion turns it into a number.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate each term",
          "workingLatex": "=1-0.12+0.0066-0.00022",
          "explanation": "Each successive term is far smaller than the one before, since higher powers of $0.01$ shrink rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the terms",
          "workingLatex": "0.99^{12}\\approx 0.88638",
          "explanation": "Combining the four contributions gives the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with the true value",
          "workingLatex": "0.99^{12}=0.8863849\\ldots\\quad(\\text{error}\\approx 5\\times 10^{-6})",
          "explanation": "The exact value is $0.88638487\\ldots$; the four-term estimate agrees to five decimal places because the first neglected term, in $x^{4}$, is only about $5\\times 10^{-6}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1-x)^{12}\\approx 1-12x+66x^{2}-220x^{3}$; with $x=0.01$, $0.99^{12}\\approx 0.88638$ (true value $0.88638$ to 5 d.p.)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "approximation",
      "estimation"
    ],
    "questionText": "Find the first four terms, in ascending powers of $x$, of the binomial expansion of $(2+3x)^{5}$. Hence estimate $2.03^{5}$, giving your answer to four decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{5}{r}(2)^{5-r}(3x)^{r}",
          "explanation": "Here $a=2$ and $b=3x$; each term mixes a falling power of $2$ with a rising power of $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Constant term (r=0)",
          "workingLatex": "\\binom{5}{0}2^{5}=32",
          "explanation": "$2^{5}=32$ when no factor of $3x$ is chosen.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Term in x (r=1)",
          "workingLatex": "\\binom{5}{1}2^{4}(3x)=5\\times 16\\times 3\\,x=240x",
          "explanation": "$\\binom{5}{1}=5$, $2^{4}=16$, and the $3$ inside $3x$ multiply to give $240$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Term in x squared (r=2)",
          "workingLatex": "\\binom{5}{2}2^{3}(3x)^{2}=10\\times 8\\times 9\\,x^{2}=720x^{2}",
          "explanation": "$(3x)^{2}=9x^{2}$, $\\binom{5}{2}=10$ and $2^{3}=8$; multiplying gives $720$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x cubed (r=3)",
          "workingLatex": "\\binom{5}{3}2^{2}(3x)^{3}=10\\times 4\\times 27\\,x^{3}=1080x^{3}",
          "explanation": "$(3x)^{3}=27x^{3}$, $\\binom{5}{3}=10$ and $2^{2}=4$; the product is $1080$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the first four terms",
          "workingLatex": "(2+3x)^{5}\\approx 32+240x+720x^{2}+1080x^{3}",
          "explanation": "These are the four leading terms; the omitted terms start at $x^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose x to match the target",
          "workingLatex": "2+3x=2.03\\ \\Rightarrow\\ x=0.01",
          "explanation": "For $2.03^{5}$ set $2+3x=2.03$, so $3x=0.03$ and $x=0.01$ — small, so later terms are negligible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 0.01",
          "workingLatex": "2.03^{5}\\approx 32+240(0.01)+720(0.01)^{2}+1080(0.01)^{3}",
          "explanation": "Putting $x=0.01$ into the four-term expansion turns it into a number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate each term",
          "workingLatex": "=32+2.4+0.072+0.00108",
          "explanation": "$(0.01)^{2}=0.0001$ and $(0.01)^{3}=0.000001$, so successive terms shrink rapidly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the terms",
          "workingLatex": "2.03^{5}\\approx 34.47308",
          "explanation": "Summing the four contributions gives the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the true value",
          "workingLatex": "2.03^{5}=34.4730881\\quad(\\text{error}\\approx 8\\times 10^{-6})",
          "explanation": "The exact value is $34.4730881\\ldots$; keeping four terms already pins the answer down to four decimal places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2+3x)^{5}\\approx 32+240x+720x^{2}+1080x^{3}$; with $x=0.01$, $2.03^{5}\\approx 34.4731$ (true value $34.4731$ to 4 d.p.)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "approximation",
      "small-x"
    ],
    "questionText": "Show that, for small values of $x$, $(1-3x)^{6}\\approx 1-18x+135x^{2}-540x^{3}$, giving the first four terms of the expansion in ascending powers of $x$. Explain why the remaining terms may be ignored when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the general term",
          "workingLatex": "T_{r+1}=\\binom{6}{r}(1)^{6-r}(-3x)^{r}",
          "explanation": "With $a=1$ and $b=-3x$, each term is $\\binom{6}{r}$ times a power of $-3x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Constant term (r=0)",
          "workingLatex": "\\binom{6}{0}(-3x)^{0}=1",
          "explanation": "Any quantity to the power $0$ is $1$, so the expansion begins at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Term in x (r=1)",
          "workingLatex": "\\binom{6}{1}(-3x)=6\\times(-3x)=-18x",
          "explanation": "$\\binom{6}{1}=6$ and $6\\times(-3)=-18$; negative because $b=-3x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Term in x squared (r=2)",
          "workingLatex": "\\binom{6}{2}(-3x)^{2}=15\\times 9x^{2}=135x^{2}",
          "explanation": "$(-3x)^{2}=9x^{2}$ (positive) and $\\binom{6}{2}=15$, giving $135x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x cubed (r=3)",
          "workingLatex": "\\binom{6}{3}(-3x)^{3}=20\\times(-27x^{3})=-540x^{3}",
          "explanation": "$(-3x)^{3}=-27x^{3}$ and $\\binom{6}{3}=20$, giving $-540x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the first four terms",
          "workingLatex": "(1-3x)^{6}\\approx 1-18x+135x^{2}-540x^{3}",
          "explanation": "This matches the required expression, with the signs alternating as expected.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the next term",
          "workingLatex": "\\binom{6}{4}(-3x)^{4}=15\\times 81x^{4}=1215x^{4}",
          "explanation": "The following term is in $x^{4}$; knowing its size tells us how good the four-term approximation is.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why it is negligible",
          "workingLatex": "|1215x^{4}|\\ll|540x^{3}|\\ \\text{ when }|x|\\ \\text{ is small}",
          "explanation": "When $x$ is small, each extra power of $x$ makes a term far smaller than the one before, so the $x^{4}$ term and beyond contribute very little. For example, at $x=0.01$ it is only about $1.2\\times 10^{-5}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "(1-3x)^{6}\\approx 1-18x+135x^{2}-540x^{3}",
          "explanation": "For small $x$ the four-term expansion captures almost all of the value, which is exactly what we set out to show.",
          "diagram": null
        }
      ],
      "finalAnswer": "For small $x$, $(1-3x)^{6}\\approx 1-18x+135x^{2}-540x^{3}$; the first neglected term $1215x^{4}$ is tiny when $x$ is small (about $1.2\\times 10^{-5}$ at $x=0.01$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "binomial-expansion",
      "approximation",
      "small-x"
    ],
    "questionText": "Find, in ascending powers of $x$, the first three terms of the binomial expansion of $(2+5x)^{4}$, and hence write down an approximation of the form $(2+5x)^{4}\\approx A+Bx+Cx^{2}$ that is valid when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the binomial theorem",
          "workingLatex": "(a+b)^{n}=\\sum_{r=0}^{n}\\binom{n}{r}a^{n-r}b^{r}",
          "explanation": "This finite sum gives every term of a positive-integer power expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, b and n",
          "workingLatex": "a=2,\\ b=5x,\\ n=4",
          "explanation": "Reading off the bracket $(2+5x)^{4}$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{4}{r}2^{4-r}(5x)^{r}",
          "explanation": "Substituting $a$, $b$ and $n$ into the formula; powers of $2$ fall while powers of $5x$ rise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Constant term (r=0)",
          "workingLatex": "\\binom{4}{0}2^{4}=16",
          "explanation": "$2^{4}=16$ when no factor of $5x$ is chosen.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x (r=1)",
          "workingLatex": "\\binom{4}{1}2^{3}(5x)=4\\times 8\\times 5\\,x=160x",
          "explanation": "$\\binom{4}{1}=4$, $2^{3}=8$ and the $5$ inside $5x$ give $160$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Term in x squared (r=2)",
          "workingLatex": "\\binom{4}{2}2^{2}(5x)^{2}=6\\times 4\\times 25\\,x^{2}=600x^{2}",
          "explanation": "$(5x)^{2}=25x^{2}$, $\\binom{4}{2}=6$ and $2^{2}=4$; the product is $600$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the first three terms",
          "workingLatex": "(2+5x)^{4}\\approx 16+160x+600x^{2}",
          "explanation": "So the required constants are $A=16$, $B=160$ and $C=600$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the neglected terms",
          "workingLatex": "\\binom{4}{3}2(5x)^{3}+\\binom{4}{4}(5x)^{4}=1000x^{3}+625x^{4}",
          "explanation": "The full expansion has degree $4$; the cubic and quartic terms are exactly what we are dropping.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why they are negligible for small x",
          "workingLatex": "1000x^{3}+625x^{4}\\to 0\\ \\text{ faster than }\\ 600x^{2}",
          "explanation": "When $|x|$ is small, higher powers of $x$ shrink rapidly, so these terms are tiny compared with $16+160x+600x^{2}$. At $x=0.01$ they total only about $0.001$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the approximation",
          "workingLatex": "(2+5x)^{4}\\approx 16+160x+600x^{2}",
          "explanation": "This quadratic approximation is accurate whenever $x$ is close to $0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2+5x)^{4}\\approx 16+160x+600x^{2}$ for small $x$ (so $A=16$, $B=160$, $C=600$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "approximation",
      "estimation"
    ],
    "questionText": "Find the first three terms, in ascending powers of $x$, of the binomial expansion of $(1+x)^{15}$. By substituting a suitable small value of $x$, estimate $1.01^{15}$ to four decimal places, and compare with the exact value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the binomial expansion",
          "workingLatex": "(1+x)^{n}=1+nx+\\binom{n}{2}x^{2}+\\cdots",
          "explanation": "For a positive integer power the series is finite; we keep only the terms up to $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify n",
          "workingLatex": "n=15",
          "explanation": "Comparing $(1+x)^{15}$ with $(1+x)^{n}$ gives $n=15$, with $a=1$ and $b=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Constant term",
          "workingLatex": "\\binom{15}{0}=1",
          "explanation": "The expansion always starts at $1$ because $a=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Term in x",
          "workingLatex": "\\binom{15}{1}x=15x",
          "explanation": "The coefficient of $x$ equals $n=15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Term in x squared",
          "workingLatex": "\\binom{15}{2}x^{2}=105x^{2}",
          "explanation": "$\\binom{15}{2}=\\frac{15\\times 14}{2}=105$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the first three terms",
          "workingLatex": "(1+x)^{15}\\approx 1+15x+105x^{2}",
          "explanation": "These are the leading terms; everything omitted starts at $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose x to match the target",
          "workingLatex": "1+x=1.01\\ \\Rightarrow\\ x=0.01",
          "explanation": "For $1.01^{15}$ set $1+x=1.01$, so $x=0.01$, which is small.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 0.01",
          "workingLatex": "1.01^{15}\\approx 1+15(0.01)+105(0.01)^{2}",
          "explanation": "Putting $x=0.01$ into the three-term expansion turns it into a number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate each term",
          "workingLatex": "=1+0.15+105(0.0001)=1+0.15+0.0105",
          "explanation": "$(0.01)^{2}=0.0001$, so the $x^{2}$ term is $0.0105$ — small, confirming the truncation is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the terms",
          "workingLatex": "1.01^{15}\\approx 1.1605",
          "explanation": "Summing the three contributions gives the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the true value",
          "workingLatex": "1.01^{15}=1.160969\\ldots\\quad(\\text{error}\\approx 0.0005)",
          "explanation": "The exact value is $1.1609690\\ldots$; the estimate is slightly low because we dropped the positive $x^{3}$ term $\\binom{15}{3}x^{3}=455(0.01)^{3}\\approx 0.0005$, which accounts almost exactly for the gap.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1+x)^{15}\\approx 1+15x+105x^{2}$; with $x=0.01$, $1.01^{15}\\approx 1.1605$ (true value $1.1610$ to 4 d.p.)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficients",
      "find-constant"
    ],
    "questionText": "In the expansion of $(1+bx)^{10}$, where $b>0$, the coefficient of $x^{2}$ is $180$. Find the value of $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note what the question gives and asks",
          "workingLatex": "\\text{coefficient of } x^{2}=180,\\quad b>0",
          "explanation": "We are told one specific coefficient and asked to work backwards to the unknown $b$. The plan is to write the coefficient of $x^{2}$ in terms of $b$, then set it equal to $180$ and solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{n-r}(bx)^{r}",
          "explanation": "The general term lets us pick out any single power of $x$ without expanding the whole bracket. The power of $x$ we get is exactly $r$, so to reach $x^{2}$ we will choose $r=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify n, a and b",
          "workingLatex": "n=10,\\quad a=1,\\quad \\text{coefficient inside}=b",
          "explanation": "Comparing $(1+bx)^{10}$ with $(a+bx)^{n}$, the constant term is $a=1$, the power is $n=10$, and the number multiplying $x$ is the unknown $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Select the term in x squared",
          "workingLatex": "r=2:\\ \\binom{10}{2}(1)^{8}(bx)^{2}",
          "explanation": "Setting $r=2$ isolates the $x^{2}$ term. The factor $(1)^{8}$ is just $1$, and $(bx)^{2}=b^{2}x^{2}$ supplies the required $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{10}{2}=\\frac{10\\times 9}{2}=45",
          "explanation": "Using $\\binom{10}{2}=\\frac{10!}{2!\\,8!}$ cancels down to $\\frac{10\\times 9}{2}=45$. This is a fixed number and does not depend on $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the term",
          "workingLatex": "45\\times 1\\times b^{2}x^{2}=45b^{2}x^{2}",
          "explanation": "Multiplying the coefficient by $(bx)^{2}$ gathers everything into a single term. The number in front of $x^{2}$ is what the question calls the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the coefficient of x squared",
          "workingLatex": "\\text{coefficient of } x^{2}=45b^{2}",
          "explanation": "We strip off the $x^{2}$ and keep only the numerical part $45b^{2}$, which now contains the unknown we want.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the equation",
          "workingLatex": "45b^{2}=180",
          "explanation": "Setting our expression equal to the given value $180$ turns the problem into a simple equation in $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for b squared",
          "workingLatex": "b^{2}=\\frac{180}{45}=4",
          "explanation": "Dividing both sides by $45$ isolates $b^{2}$. The arithmetic is clean because $180$ is a multiple of $45$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the positive root",
          "workingLatex": "b=\\sqrt{4}=2\\quad(b>0)",
          "explanation": "Square-rooting gives $b=\\pm 2$, but the condition $b>0$ tells us to keep only the positive value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the answer",
          "workingLatex": "45\\times 2^{2}=45\\times 4=180\\ \\checkmark",
          "explanation": "Substituting $b=2$ back reproduces the stated coefficient $180$, confirming the solution is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b=2$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficients",
      "find-constant"
    ],
    "questionText": "In the expansion of $(a+x)^{5}$, where $a>0$, the coefficient of $x$ is $80$. Find the value of $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note what is given and required",
          "workingLatex": "\\text{coefficient of } x^{1}=80,\\quad a>0",
          "explanation": "Here the unknown sits in the constant part of the bracket. We will express the coefficient of $x$ in terms of $a$ and solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{5}{r}a^{5-r}(x)^{r}",
          "explanation": "For $(a+x)^{5}$ the number multiplying $x$ is simply $1$, so the general term is $\\binom{5}{r}a^{5-r}x^{r}$. The power of $x$ equals $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify a and n",
          "workingLatex": "n=5,\\quad \\text{constant}=a",
          "explanation": "Comparing with $(a+bx)^{n}$ we read off $n=5$ and the constant term as the unknown $a$; the coefficient of $x$ inside the bracket is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the term in x",
          "workingLatex": "r=1:\\ \\binom{5}{1}a^{4}(x)^{1}",
          "explanation": "The term in $x^{1}$ comes from $r=1$. That leaves $a$ raised to the power $5-1=4$, so the constant part will involve $a^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{5}{1}=5",
          "explanation": "Choosing $1$ item from $5$ can be done in $5$ ways, so $\\binom{5}{1}=5$. This is the numerical multiplier of the term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the coefficient of x",
          "workingLatex": "\\text{coefficient of } x=5a^{4}",
          "explanation": "Multiplying $\\binom{5}{1}$ by $a^{4}$ gives the numerical coefficient of $x$, expressed in terms of the unknown $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the equation",
          "workingLatex": "5a^{4}=80",
          "explanation": "Setting our coefficient equal to the given value $80$ produces an equation we can solve for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Isolate a to the fourth power",
          "workingLatex": "a^{4}=\\frac{80}{5}=16",
          "explanation": "Dividing by $5$ gives $a^{4}=16$. This is a clean value, which is a good sign the answer will be a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the fourth root",
          "workingLatex": "a=\\sqrt[4]{16}=2",
          "explanation": "Since $2^{4}=16$, the fourth root of $16$ is $2$. The other real root is $-2$, but the condition $a>0$ rules it out.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer",
          "workingLatex": "5\\times 2^{4}=5\\times 16=80\\ \\checkmark",
          "explanation": "Putting $a=2$ back into $5a^{4}$ gives $80$, exactly the stated coefficient, so the value is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=2$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "equating-coefficients",
      "find-constant"
    ],
    "questionText": "When $(1+bx)^{n}$ is expanded in ascending powers of $x$, the first three terms are $1+12x+60x^{2}$. Given that $n$ is a positive integer, find the values of $n$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the first three terms in general form",
          "workingLatex": "(1+bx)^{n}=1+nbx+\\binom{n}{2}b^{2}x^{2}+\\dots",
          "explanation": "Using the standard expansion of $(1+bx)^{n}$, the first three terms are $1$, then $nbx$, then $\\binom{n}{2}b^{2}x^{2}$. Matching these with the given terms will give equations for $n$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the x terms",
          "workingLatex": "nb=12",
          "explanation": "The coefficient of $x$ in our expansion is $nb$, and the question says it is $12$. This is our first equation linking the two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the x squared terms",
          "workingLatex": "\\binom{n}{2}b^{2}=\\frac{n(n-1)}{2}b^{2}=60",
          "explanation": "The coefficient of $x^{2}$ is $\\binom{n}{2}b^{2}$, which must equal $60$. Writing $\\binom{n}{2}=\\frac{n(n-1)}{2}$ gives our second equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make b the subject of the first equation",
          "workingLatex": "b=\\frac{12}{n}",
          "explanation": "Rearranging $nb=12$ isolates $b$ in terms of $n$. Substituting this into the second equation will leave a single equation in $n$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the second equation",
          "workingLatex": "\\frac{n(n-1)}{2}\\left(\\frac{12}{n}\\right)^{2}=60",
          "explanation": "Replacing $b$ with $\\frac{12}{n}$ removes $b$ from the problem. Everything now depends only on $n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the left-hand side",
          "workingLatex": "\\frac{n(n-1)}{2}\\times\\frac{144}{n^{2}}=\\frac{72(n-1)}{n}",
          "explanation": "One factor of $n$ cancels and $\\frac{144}{2}=72$, so the messy expression collapses to $\\frac{72(n-1)}{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the simplified expression equal to 60",
          "workingLatex": "\\frac{72(n-1)}{n}=60",
          "explanation": "We now have a single equation in $n$. Clearing the fraction will turn it into a straightforward linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "72(n-1)=60n\\ \\Rightarrow\\ 72n-72=60n",
          "explanation": "Multiplying both sides by $n$ removes the denominator, and expanding the bracket prepares the terms for collecting.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for n",
          "workingLatex": "12n=72\\ \\Rightarrow\\ n=6",
          "explanation": "Gathering the $n$ terms on one side gives $12n=72$, so $n=6$. This is a positive integer, as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find b",
          "workingLatex": "b=\\frac{12}{n}=\\frac{12}{6}=2",
          "explanation": "Substituting $n=6$ into $b=\\frac{12}{n}$ gives $b=2$. Both unknowns are now determined.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check both coefficients",
          "workingLatex": "nb=6\\times 2=12,\\quad \\binom{6}{2}\\times 2^{2}=15\\times 4=60\\ \\checkmark",
          "explanation": "With $n=6$ and $b=2$ the $x$ coefficient is $12$ and the $x^{2}$ coefficient is $60$, matching the question exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n=6$ and $b=2$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficients",
      "find-constant"
    ],
    "questionText": "In the expansion of $(2+bx)^{6}$, where $b>0$, the coefficient of $x^{2}$ is $2160$. Find the value of $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note what is given and required",
          "workingLatex": "\\text{coefficient of } x^{2}=2160,\\quad b>0",
          "explanation": "The constant term inside the bracket is $2$ this time, not $1$, so it will contribute a power of $2$ to the coefficient. We express the $x^{2}$ coefficient in terms of $b$ and solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{6}{r}2^{6-r}(bx)^{r}",
          "explanation": "For $(2+bx)^{6}$ the constant $a=2$ appears raised to $6-r$. The power of $x$ is again $r$, so $x^{2}$ needs $r=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify n, a and b",
          "workingLatex": "n=6,\\quad a=2,\\quad \\text{coefficient inside}=b",
          "explanation": "Comparing with $(a+bx)^{n}$ gives $n=6$, $a=2$, and the unknown $b$ multiplying $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Select the term in x squared",
          "workingLatex": "r=2:\\ \\binom{6}{2}2^{4}(bx)^{2}",
          "explanation": "Setting $r=2$ isolates the $x^{2}$ term. The constant $2$ is raised to $6-2=4$, and $(bx)^{2}=b^{2}x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{6}{2}=\\frac{6\\times 5}{2}=15",
          "explanation": "Using $\\binom{6}{2}=\\frac{6\\times 5}{2}$ gives $15$, a fixed number independent of $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of the constant",
          "workingLatex": "2^{4}=16",
          "explanation": "The constant term $2$ raised to the fourth power is $16$. Forgetting this factor is a common slip when $a\\neq 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the coefficient of x squared",
          "workingLatex": "\\text{coefficient}=15\\times 16\\times b^{2}=240b^{2}",
          "explanation": "Combining $\\binom{6}{2}$, $2^{4}$ and $b^{2}$ gives the coefficient $240b^{2}$ in terms of the unknown.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the equation",
          "workingLatex": "240b^{2}=2160",
          "explanation": "Setting our expression equal to the stated value $2160$ gives an equation to solve for $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for b squared",
          "workingLatex": "b^{2}=\\frac{2160}{240}=9",
          "explanation": "Dividing both sides by $240$ isolates $b^{2}=9$, again a perfect square, so the answer will be a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the positive root",
          "workingLatex": "b=\\sqrt{9}=3\\quad(b>0)",
          "explanation": "The square root of $9$ is $\\pm 3$; the condition $b>0$ selects $b=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the answer",
          "workingLatex": "240\\times 3^{2}=240\\times 9=2160\\ \\checkmark",
          "explanation": "Substituting $b=3$ reproduces the coefficient $2160$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b=3$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficients",
      "find-power"
    ],
    "questionText": "In the expansion of $(1+x)^{n}$, the coefficient of $x^{2}$ is $45$. Given that $n$ is a positive integer, find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the expansion of the bracket",
          "workingLatex": "(1+x)^{n}=1+nx+\\binom{n}{2}x^{2}+\\dots",
          "explanation": "For $(1+x)^{n}$ each coefficient is just a binomial coefficient. The coefficient of $x^{2}$ is $\\binom{n}{2}$, which we can write in terms of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficient of x squared",
          "workingLatex": "\\text{coefficient of } x^{2}=\\binom{n}{2}",
          "explanation": "Because the number multiplying $x$ is $1$, the whole coefficient is simply $\\binom{n}{2}$ with no extra factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the binomial coefficient in terms of n",
          "workingLatex": "\\binom{n}{2}=\\frac{n(n-1)}{2}",
          "explanation": "Using $\\binom{n}{2}=\\frac{n!}{2!\\,(n-2)!}=\\frac{n(n-1)}{2}$ turns the unknown power into an algebraic expression we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the equation",
          "workingLatex": "\\frac{n(n-1)}{2}=45",
          "explanation": "Setting the coefficient equal to the given value $45$ produces an equation in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "n(n-1)=90",
          "explanation": "Multiplying both sides by $2$ removes the denominator and gives a neat product equal to $90$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into a quadratic",
          "workingLatex": "n^{2}-n-90=0",
          "explanation": "Expanding and moving everything to one side gives a standard quadratic in $n$, which we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "(n-10)(n+9)=0",
          "explanation": "We need two numbers multiplying to $-90$ and adding to $-1$: these are $-10$ and $+9$, giving the factorisation above.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the solutions",
          "workingLatex": "n=10\\quad\\text{or}\\quad n=-9",
          "explanation": "Each bracket set to zero gives a possible value of $n$. We must now check which one is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reject the invalid solution",
          "workingLatex": "n=-9\\ \\text{rejected},\\quad n=10",
          "explanation": "A power must be a positive integer, so $n=-9$ is impossible and we keep $n=10$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer",
          "workingLatex": "\\binom{10}{2}=\\frac{10\\times 9}{2}=45\\ \\checkmark",
          "explanation": "With $n=10$ the coefficient of $x^{2}$ is $45$, exactly as stated, confirming the value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n=10$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "equating-coefficients",
      "find-power"
    ],
    "questionText": "In the expansion of $(1+x)^{n}$, the coefficient of $x^{3}$ is twice the coefficient of $x^{2}$. Given that $n$ is a positive integer with $n\\geq 3$, find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficient of x squared",
          "workingLatex": "\\text{coeff of } x^{2}=\\binom{n}{2}",
          "explanation": "In $(1+x)^{n}$ the coefficient of $x^{2}$ is simply $\\binom{n}{2}$, since the number multiplying $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficient of x cubed",
          "workingLatex": "\\text{coeff of } x^{3}=\\binom{n}{3}",
          "explanation": "Similarly the coefficient of $x^{3}$ is $\\binom{n}{3}$. Both are just binomial coefficients depending on $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the condition into an equation",
          "workingLatex": "\\binom{n}{3}=2\\binom{n}{2}",
          "explanation": "\"The coefficient of $x^{3}$ is twice the coefficient of $x^{2}$\" means $\\binom{n}{3}$ equals two times $\\binom{n}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the ratio of the two coefficients",
          "workingLatex": "\\frac{\\binom{n}{3}}{\\binom{n}{2}}=\\frac{n-2}{3}",
          "explanation": "Dividing successive binomial coefficients cancels almost everything: $\\frac{\\binom{n}{3}}{\\binom{n}{2}}=\\frac{n-2}{3}$. Working with the ratio avoids handling large factorials.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the ratio equal to 2",
          "workingLatex": "\\frac{n-2}{3}=2",
          "explanation": "Since $\\binom{n}{3}=2\\binom{n}{2}$, their ratio must be $2$. This gives a simple linear equation in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "n-2=6",
          "explanation": "Multiplying both sides by $3$ removes the denominator, leaving an easy equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for n",
          "workingLatex": "n=8",
          "explanation": "Adding $2$ to both sides gives $n=8$, which is a positive integer with $n\\geq 3$, so it is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the coefficient of x squared",
          "workingLatex": "\\binom{8}{2}=\\frac{8\\times 7}{2}=28",
          "explanation": "To check, we compute the actual coefficients. The $x^{2}$ coefficient is $28$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the coefficient of x cubed",
          "workingLatex": "\\binom{8}{3}=\\frac{8\\times 7\\times 6}{6}=56",
          "explanation": "The $x^{3}$ coefficient is $56$. We now compare it with twice the $x^{2}$ coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer",
          "workingLatex": "56=2\\times 28\\ \\checkmark",
          "explanation": "Indeed $56$ is exactly twice $28$, so the condition holds and $n=8$ is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n=8$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficients",
      "find-constant"
    ],
    "questionText": "In the expansion of $(3+bx)^{4}$, the coefficient of $x$ is $216$. Find the value of $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note what is given and required",
          "workingLatex": "\\text{coefficient of } x^{1}=216",
          "explanation": "We want the term in $x^{1}$, whose coefficient depends on both the constant $3$ and the unknown $b$. We build that coefficient and solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{4}{r}3^{4-r}(bx)^{r}",
          "explanation": "For $(3+bx)^{4}$ the constant $3$ is raised to $4-r$. The power of $x$ is $r$, so the term in $x^{1}$ comes from $r=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify n, a and b",
          "workingLatex": "n=4,\\quad a=3,\\quad \\text{coefficient inside}=b",
          "explanation": "Comparing with $(a+bx)^{n}$ gives $n=4$, $a=3$, and the unknown $b$ multiplying $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Select the term in x",
          "workingLatex": "r=1:\\ \\binom{4}{1}3^{3}(bx)^{1}",
          "explanation": "Setting $r=1$ isolates the $x$ term. The constant $3$ appears to the power $4-1=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the binomial coefficient",
          "workingLatex": "\\binom{4}{1}=4",
          "explanation": "Choosing $1$ from $4$ gives $\\binom{4}{1}=4$, the numerical multiplier of the term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power of the constant",
          "workingLatex": "3^{3}=27",
          "explanation": "The constant $3$ cubed is $27$. Including this factor is essential because the constant term is not $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the coefficient of x",
          "workingLatex": "\\text{coefficient of } x=4\\times 27\\times b=108b",
          "explanation": "Multiplying $\\binom{4}{1}$, $3^{3}$ and $b$ gives $108b$, the coefficient in terms of the unknown.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the equation",
          "workingLatex": "108b=216",
          "explanation": "Setting the coefficient equal to the given value $216$ gives a simple linear equation in $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for b",
          "workingLatex": "b=\\frac{216}{108}=2",
          "explanation": "Dividing both sides by $108$ gives $b=2$ directly, with no square roots needed since the power of $x$ was $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer",
          "workingLatex": "108\\times 2=216\\ \\checkmark",
          "explanation": "Substituting $b=2$ back reproduces the stated coefficient $216$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b=2$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "equating-coefficients",
      "find-constant"
    ],
    "questionText": "In the expansion of $(1+bx)^{8}$, where $b>0$, the coefficient of $x^{2}$ is equal to the coefficient of $x^{3}$. Find the value of $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{8}{r}b^{r}x^{r}",
          "explanation": "For $(1+bx)^{8}$ the constant is $1$, so the term in $x^{r}$ is $\\binom{8}{r}b^{r}x^{r}$. Each coefficient carries a matching power of $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient of x squared",
          "workingLatex": "\\text{coeff of } x^{2}=\\binom{8}{2}b^{2}",
          "explanation": "Setting $r=2$ gives the $x^{2}$ coefficient $\\binom{8}{2}b^{2}$, which carries a factor $b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coefficient of x cubed",
          "workingLatex": "\\text{coeff of } x^{3}=\\binom{8}{3}b^{3}",
          "explanation": "Setting $r=3$ gives the $x^{3}$ coefficient $\\binom{8}{3}b^{3}$, carrying a factor $b^{3}$. The extra power of $b$ is what makes the equation solvable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the first binomial coefficient",
          "workingLatex": "\\binom{8}{2}=\\frac{8\\times 7}{2}=28",
          "explanation": "Evaluating $\\binom{8}{2}$ gives $28$, a fixed number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the second binomial coefficient",
          "workingLatex": "\\binom{8}{3}=\\frac{8\\times 7\\times 6}{6}=56",
          "explanation": "Evaluating $\\binom{8}{3}$ gives $56$. Now both coefficients are known apart from the powers of $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the coefficients equal",
          "workingLatex": "56b^{3}=28b^{2}",
          "explanation": "The condition tells us the two coefficients are equal, giving this equation in $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through by the common factor",
          "workingLatex": "\\frac{56b^{3}}{28b^{2}}=\\frac{28b^{2}}{28b^{2}}\\ \\Rightarrow\\ 2b=1",
          "explanation": "Since $b>0$ we know $b\\neq 0$, so we may divide both sides by $28b^{2}$. This cancels the common factor and leaves a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for b",
          "workingLatex": "b=\\frac{1}{2}",
          "explanation": "Dividing by $2$ gives $b=\\tfrac{1}{2}$, which is positive and so satisfies the condition $b>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the coefficient of x squared",
          "workingLatex": "28\\times\\left(\\tfrac{1}{2}\\right)^{2}=28\\times\\tfrac{1}{4}=7",
          "explanation": "Substituting $b=\\tfrac{1}{2}$ into the $x^{2}$ coefficient gives $7$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the coefficient of x cubed",
          "workingLatex": "56\\times\\left(\\tfrac{1}{2}\\right)^{3}=56\\times\\tfrac{1}{8}=7\\ \\checkmark",
          "explanation": "The $x^{3}$ coefficient is also $7$, so the two coefficients are indeed equal and $b=\\tfrac{1}{2}$ is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b=\\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficients",
      "find-power"
    ],
    "questionText": "In the expansion of $(1+x)^{n}$, the coefficient of $x^{3}$ is $20$. Given that $n$ is a positive integer, find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coefficient of x cubed",
          "workingLatex": "\\text{coefficient of } x^{3}=\\binom{n}{3}",
          "explanation": "In $(1+x)^{n}$ the coefficient of $x^{3}$ is $\\binom{n}{3}$, since the number multiplying $x$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the coefficient in terms of n",
          "workingLatex": "\\binom{n}{3}=\\frac{n(n-1)(n-2)}{6}",
          "explanation": "Using $\\binom{n}{3}=\\frac{n!}{3!\\,(n-3)!}=\\frac{n(n-1)(n-2)}{6}$ expresses the coefficient as an algebraic quantity in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation",
          "workingLatex": "\\frac{n(n-1)(n-2)}{6}=20",
          "explanation": "Setting the coefficient equal to the given value $20$ gives an equation in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Clear the fraction",
          "workingLatex": "n(n-1)(n-2)=120",
          "explanation": "Multiplying both sides by $6$ removes the denominator, leaving a product of three consecutive integers equal to $120$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the structure of the left-hand side",
          "workingLatex": "n\\times(n-1)\\times(n-2)=120",
          "explanation": "The left-hand side is the product of three consecutive integers. We just need three consecutive whole numbers whose product is $120$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor 120 into consecutive integers",
          "workingLatex": "120=6\\times 5\\times 4",
          "explanation": "Testing values, $6\\times 5\\times 4=120$ works. These are consecutive, matching the pattern $n,\\,n-1,\\,n-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Match to find n",
          "workingLatex": "n=6,\\ n-1=5,\\ n-2=4\\ \\Rightarrow\\ n=6",
          "explanation": "Lining up the factors with $n$, $n-1$, $n-2$ gives the largest as $n$, so $n=6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm this is the only valid solution",
          "workingLatex": "n\\geq 3,\\ \\text{product strictly increasing}\\Rightarrow n=6\\ \\text{unique}",
          "explanation": "For an $x^{3}$ term we need $n\\geq 3$, and the product of three consecutive integers grows steadily with $n$, so $n=6$ is the only positive integer that gives $120$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the answer",
          "workingLatex": "\\binom{6}{3}=\\frac{6\\times 5\\times 4}{6}=20\\ \\checkmark",
          "explanation": "With $n=6$ the coefficient of $x^{3}$ is $20$, exactly as required, confirming the value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n=6$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficient",
      "product-of-brackets"
    ],
    "questionText": "Find the coefficient of $x^{2}$ in the expansion of $(2+3x)(1+2x)^{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the target and plan",
          "workingLatex": "\\text{find the coefficient of } x^{2} \\text{ in } (2+3x)(1+2x)^{6}",
          "explanation": "We only need the parts of $(1+2x)^{6}$ that, after multiplying by $2$ or by $3x$, land on $x^{2}$. So a full expansion is unnecessary; just a couple of terms are enough.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the binomial general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "For $(a+bx)^{n}$ the term in $x^{r}$ is $\\binom{n}{r}a^{n-r}b^{r}x^{r}$. This lets us pick out individual terms without expanding the whole bracket.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off a, b and n for the second bracket",
          "workingLatex": "(1+2x)^{6}:\\quad a=1,\\ b=2,\\ n=6",
          "explanation": "Matching $(a+bx)^{n}$ gives $a=1$, $b=2$, $n=6$. Because $a=1$, every power of $a$ is $1$, which keeps the arithmetic clean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which powers of x are needed",
          "workingLatex": "2\\cdot(x^{2}\\text{ term})\\ +\\ 3x\\cdot(x^{1}\\text{ term})\\ \\to\\ x^{2}",
          "explanation": "The first bracket supplies a constant $2$ and a term $3x$. To reach $x^{2}$ we pair $2$ with the $x^{2}$ term and $3x$ with the $x^{1}$ term of the second bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the x term of the second bracket",
          "workingLatex": "\\binom{6}{1}(1)^{5}(2)^{1}=6\\times 2=12",
          "explanation": "Using the general term with $r=1$. The factor $\\binom{6}{1}=6$ counts the ways of choosing one $2x$ from the six brackets.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the x squared term of the second bracket",
          "workingLatex": "\\binom{6}{2}(1)^{4}(2)^{2}=15\\times 4=60",
          "explanation": "With $r=2$ we have $\\binom{6}{2}=15$ and $(2)^{2}=4$, giving the coefficient $60$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the binomial coefficient",
          "workingLatex": "\\binom{6}{2}=\\frac{6\\times 5}{2\\times 1}=15",
          "explanation": "An independent check of $\\binom{6}{2}$ using the formula, which matches row 6 of Pascal's triangle: $1,6,15,20,15,6,1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the relevant part of the expansion",
          "workingLatex": "(1+2x)^{6}=\\cdots+12x+60x^{2}+\\cdots",
          "explanation": "We keep only the terms that can combine into $x^{2}$; the remaining terms cannot contribute.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "First contribution: constant times x squared",
          "workingLatex": "2\\times 60x^{2}=120x^{2}",
          "explanation": "The constant $2$ does not change the power of $x$, so it simply scales the $x^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Second contribution: 3x times x",
          "workingLatex": "3x\\times 12x=36x^{2}",
          "explanation": "Multiplying $3x$ by the $x$ term raises the power by one, landing exactly on $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check no other pairing gives x squared",
          "workingLatex": "2\\times 12x=24x,\\qquad 3x\\times 60x^{2}=180x^{3}",
          "explanation": "The other two pairings produce $x^{1}$ and $x^{3}$, confirming only the two contributions above matter.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the contributions",
          "workingLatex": "120x^{2}+36x^{2}=156x^{2}",
          "explanation": "Collecting like terms gives the complete $x^{2}$ term of the product.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{2}=156",
          "explanation": "The number multiplying $x^{2}$ is the required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sanity check",
          "workingLatex": "120+36=156>0",
          "explanation": "Every constant involved is positive, so a positive answer of moderate size is exactly what we expect.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{2}$ is $156$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficient",
      "product-of-brackets"
    ],
    "questionText": "Find the coefficient of $x^{3}$ in the expansion of $(1-x)(3+2x)^{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the target and plan",
          "workingLatex": "\\text{find the coefficient of } x^{3} \\text{ in } (1-x)(3+2x)^{5}",
          "explanation": "We need only the terms of $(3+2x)^{5}$ that reach $x^{3}$ once multiplied by $1$ or by $-x$. So we extract just two coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the binomial general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "For $(a+bx)^{n}$ the term in $x^{r}$ is $\\binom{n}{r}a^{n-r}b^{r}x^{r}$; here the powers of $a=3$ will appear, so we must track them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off a, b and n",
          "workingLatex": "(3+2x)^{5}:\\quad a=3,\\ b=2,\\ n=5",
          "explanation": "Matching $(a+bx)^{n}$ gives $a=3$, $b=2$, $n=5$. The powers of $3$ make the numbers larger, so care is needed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which powers of x are needed",
          "workingLatex": "1\\cdot(x^{3}\\text{ term})\\ +\\ (-x)\\cdot(x^{2}\\text{ term})\\ \\to\\ x^{3}",
          "explanation": "The first bracket gives a constant $1$ and a term $-x$. To make $x^{3}$ we pair $1$ with the $x^{3}$ term and $-x$ with the $x^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the x squared term of the second bracket",
          "workingLatex": "\\binom{5}{2}(3)^{3}(2)^{2}=10\\times 27\\times 4=1080",
          "explanation": "With $r=2$: $\\binom{5}{2}=10$, $3^{3}=27$ and $2^{2}=4$, multiplying to $1080$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the x cubed term of the second bracket",
          "workingLatex": "\\binom{5}{3}(3)^{2}(2)^{3}=10\\times 9\\times 8=720",
          "explanation": "With $r=3$: $\\binom{5}{3}=10$, $3^{2}=9$ and $2^{3}=8$, giving $720$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the binomial coefficients",
          "workingLatex": "\\binom{5}{2}=10=\\binom{5}{3}",
          "explanation": "By the symmetry $\\binom{n}{r}=\\binom{n}{n-r}$ these two coefficients are equal, matching row 5 of Pascal's triangle: $1,5,10,10,5,1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the relevant part of the expansion",
          "workingLatex": "(3+2x)^{5}=\\cdots+1080x^{2}+720x^{3}+\\cdots",
          "explanation": "Only these two terms can combine into $x^{3}$ in the product.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "First contribution: 1 times x cubed",
          "workingLatex": "1\\times 720x^{3}=720x^{3}",
          "explanation": "Multiplying by the constant $1$ leaves the $x^{3}$ term unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Second contribution: minus x times x squared",
          "workingLatex": "(-x)\\times 1080x^{2}=-1080x^{3}",
          "explanation": "Multiplying $-x$ by the $x^{2}$ term raises the power to $x^{3}$ and carries the minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check no other pairing gives x cubed",
          "workingLatex": "1\\times 1080x^{2}=1080x^{2},\\qquad (-x)\\times 720x^{3}=-720x^{4}",
          "explanation": "The remaining pairings give $x^{2}$ and $x^{4}$, so only the two above contribute to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the contributions",
          "workingLatex": "720x^{3}-1080x^{3}=-360x^{3}",
          "explanation": "Collecting like terms combines the two $x^{3}$ contributions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{3}=-360",
          "explanation": "The number multiplying $x^{3}$ is the required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the sign",
          "workingLatex": "720-1080=-360<0",
          "explanation": "The subtracted term $1080$ is larger than the added term $720$, so the coefficient is negative, which is consistent with the $-x$ in the first bracket.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{3}$ is $-360$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficient",
      "product-of-brackets"
    ],
    "questionText": "Find the coefficient of $x^{4}$ in the expansion of $(2+5x)(1-2x)^{7}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the target and plan",
          "workingLatex": "\\text{find the coefficient of } x^{4} \\text{ in } (2+5x)(1-2x)^{7}",
          "explanation": "We need only the $x^{4}$ and $x^{3}$ terms of $(1-2x)^{7}$, since these pair with $2$ and $5x$ to reach $x^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the binomial general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "For $(a+bx)^{n}$ the term in $x^{r}$ is $\\binom{n}{r}a^{n-r}b^{r}x^{r}$. Here $b$ is negative, so signs will alternate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off a, b and n",
          "workingLatex": "(1-2x)^{7}:\\quad a=1,\\ b=-2,\\ n=7",
          "explanation": "Writing $1-2x$ as $1+(-2)x$ shows $b=-2$. Tracking that minus sign carefully is the key to this question.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which powers of x are needed",
          "workingLatex": "2\\cdot(x^{4}\\text{ term})\\ +\\ 5x\\cdot(x^{3}\\text{ term})\\ \\to\\ x^{4}",
          "explanation": "The first bracket gives a constant $2$ and a term $5x$. To make $x^{4}$ we pair $2$ with the $x^{4}$ term and $5x$ with the $x^{3}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the x cubed term of the second bracket",
          "workingLatex": "\\binom{7}{3}(1)^{4}(-2)^{3}=35\\times(-8)=-280",
          "explanation": "With $r=3$: $\\binom{7}{3}=35$ and $(-2)^{3}=-8$. An odd power of $-2$ keeps the sign negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the x to the fourth term of the second bracket",
          "workingLatex": "\\binom{7}{4}(1)^{3}(-2)^{4}=35\\times 16=560",
          "explanation": "With $r=4$: $\\binom{7}{4}=35$ and $(-2)^{4}=16$. An even power of $-2$ makes the sign positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the binomial coefficients",
          "workingLatex": "\\binom{7}{3}=35=\\binom{7}{4}",
          "explanation": "By symmetry $\\binom{7}{3}=\\binom{7}{4}$, matching row 7 of Pascal's triangle: $1,7,21,35,35,21,7,1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Record the relevant part of the expansion",
          "workingLatex": "(1-2x)^{7}=\\cdots-280x^{3}+560x^{4}+\\cdots",
          "explanation": "These are the only two terms of the second bracket that can combine into $x^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "First contribution: 2 times x to the fourth",
          "workingLatex": "2\\times 560x^{4}=1120x^{4}",
          "explanation": "The constant $2$ scales the $x^{4}$ term without changing its power.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Second contribution: 5x times x cubed",
          "workingLatex": "5x\\times(-280x^{3})=-1400x^{4}",
          "explanation": "Multiplying $5x$ by the $x^{3}$ term gives $x^{4}$; the negative coefficient carries through.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check no other pairing gives x to the fourth",
          "workingLatex": "2\\times(-280x^{3})=-560x^{3},\\qquad 5x\\times 560x^{4}=2800x^{5}",
          "explanation": "The remaining pairings give $x^{3}$ and $x^{5}$, so only the two above matter.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the contributions",
          "workingLatex": "1120x^{4}-1400x^{4}=-280x^{4}",
          "explanation": "Collecting like terms combines the two $x^{4}$ contributions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{4}=-280",
          "explanation": "The number multiplying $x^{4}$ is the required coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sanity check the sign",
          "workingLatex": "1120-1400=-280<0",
          "explanation": "The negative $x^{3}$ term, once multiplied by $5x$, outweighs the positive contribution, so a negative answer is expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{4}$ is $-280$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficient",
      "product-of-expansions"
    ],
    "questionText": "Find the coefficient of $x^{2}$ in the expansion of $(1+2x)^{5}(1+3x)^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the target and plan",
          "workingLatex": "\\text{find the coefficient of } x^{2} \\text{ in } (1+2x)^{5}(1+3x)^{4}",
          "explanation": "When two expansions multiply, the $x^{2}$ term is built from pairs whose powers add to $2$. So we expand each bracket up to $x^{2}$ and combine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the binomial general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "We will apply this to each bracket separately to get its constant, $x$ and $x^{2}$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the first bracket up to x squared",
          "workingLatex": "(1+2x)^{5}:\\ \\binom{5}{0}=1,\\ \\binom{5}{1}2=10,\\ \\binom{5}{2}2^{2}=40",
          "explanation": "With $a=1,b=2,n=5$ the coefficients of $x^{0},x^{1},x^{2}$ are $1,10,40$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm a coefficient of the first bracket",
          "workingLatex": "\\binom{5}{2}=\\frac{5\\times 4}{2\\times 1}=10,\\quad 10\\times 2^{2}=40",
          "explanation": "Checking $\\binom{5}{2}=10$ and multiplying by $2^{2}=4$ confirms the $x^{2}$ coefficient is $40$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the first expansion",
          "workingLatex": "(1+2x)^{5}=1+10x+40x^{2}+\\cdots",
          "explanation": "Only terms up to $x^{2}$ can help build an $x^{2}$ term in the product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the second bracket up to x squared",
          "workingLatex": "(1+3x)^{4}:\\ \\binom{4}{0}=1,\\ \\binom{4}{1}3=12,\\ \\binom{4}{2}3^{2}=54",
          "explanation": "With $a=1,b=3,n=4$ the coefficients of $x^{0},x^{1},x^{2}$ are $1,12,54$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm a coefficient of the second bracket",
          "workingLatex": "\\binom{4}{2}=6,\\quad 6\\times 3^{2}=54",
          "explanation": "Checking $\\binom{4}{2}=6$ and $3^{2}=9$ gives $54$ for the $x^{2}$ coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the second expansion",
          "workingLatex": "(1+3x)^{4}=1+12x+54x^{2}+\\cdots",
          "explanation": "Again only terms up to $x^{2}$ are relevant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the pairings that give x squared",
          "workingLatex": "(x^{0}\\!\\cdot x^{2}),\\ (x^{1}\\!\\cdot x^{1}),\\ (x^{2}\\!\\cdot x^{0})",
          "explanation": "Powers must add to $2$, so exactly three combinations of terms contribute.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "First pairing: constant times x squared",
          "workingLatex": "1\\times 54=54",
          "explanation": "The constant of the first expansion multiplies the $x^{2}$ term of the second.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Second pairing: x times x",
          "workingLatex": "10\\times 12=120",
          "explanation": "The $x$ terms multiply to give an $x^{2}$ contribution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Third pairing: x squared times constant",
          "workingLatex": "40\\times 1=40",
          "explanation": "The $x^{2}$ term of the first expansion multiplies the constant of the second.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the contributions",
          "workingLatex": "54+120+40=214",
          "explanation": "Summing the three contributions gives the full coefficient of $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{2}=214",
          "explanation": "This is the number multiplying $x^{2}$ in the product.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Sanity check",
          "workingLatex": "54+120+40=214>0",
          "explanation": "All terms are positive, so a positive answer built from three moderate parts is exactly what we expect.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{2}$ is $214$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficient",
      "product-of-expansions"
    ],
    "questionText": "Find the coefficient of $x^{3}$ in the expansion of $(1+x)^{6}(1-2x)^{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the target and plan",
          "workingLatex": "\\text{find the coefficient of } x^{3} \\text{ in } (1+x)^{6}(1-2x)^{5}",
          "explanation": "The $x^{3}$ term comes from all pairs of terms whose powers add to $3$. We expand each bracket to $x^{3}$, then combine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the first bracket up to x cubed",
          "workingLatex": "(1+x)^{6}:\\ 1,\\ 6,\\ 15,\\ 20",
          "explanation": "For $(1+x)^{6}$ the coefficients are just the binomial coefficients $\\binom{6}{r}$, giving $1,6,15,20$ for $x^{0}$ to $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm using Pascal's triangle",
          "workingLatex": "\\text{row }6:\\ 1,6,15,20,15,6,1",
          "explanation": "Reading along row 6 of Pascal's triangle confirms the coefficients $1,6,15,20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the second bracket up to x cubed",
          "workingLatex": "(1-2x)^{5}:\\ \\binom{5}{r}(-2)^{r}",
          "explanation": "With $a=1,b=-2,n=5$ each coefficient is $\\binom{5}{r}(-2)^{r}$; the sign alternates.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the second bracket coefficients",
          "workingLatex": "1,\\ \\binom{5}{1}(-2)=-10,\\ \\binom{5}{2}4=40,\\ \\binom{5}{3}(-8)=-80",
          "explanation": "So the coefficients of $x^{0},x^{1},x^{2},x^{3}$ are $1,-10,40,-80$, with even powers positive and odd powers negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write both expansions",
          "workingLatex": "(1+x)^{6}=1+6x+15x^{2}+20x^{3}+\\cdots,\\ (1-2x)^{5}=1-10x+40x^{2}-80x^{3}+\\cdots",
          "explanation": "Only terms up to $x^{3}$ can combine into $x^{3}$ in the product.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List the pairings that give x cubed",
          "workingLatex": "(x^{0}x^{3}),\\ (x^{1}x^{2}),\\ (x^{2}x^{1}),\\ (x^{3}x^{0})",
          "explanation": "Powers must add to $3$, so four combinations contribute.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "First pairing: constant times x cubed",
          "workingLatex": "1\\times(-80)=-80",
          "explanation": "The constant of the first expansion multiplies the $x^{3}$ term of the second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Second pairing: x times x squared",
          "workingLatex": "6\\times 40=240",
          "explanation": "The $x$ term of the first multiplies the $x^{2}$ term of the second.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Third pairing: x squared times x",
          "workingLatex": "15\\times(-10)=-150",
          "explanation": "The $x^{2}$ term of the first multiplies the $x$ term of the second.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Fourth pairing: x cubed times constant",
          "workingLatex": "20\\times 1=20",
          "explanation": "The $x^{3}$ term of the first multiplies the constant of the second.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the contributions",
          "workingLatex": "-80+240-150+20",
          "explanation": "Bringing the four contributions together, being careful with signs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the sum",
          "workingLatex": "-80+240-150+20=30",
          "explanation": "The positive and negative parts largely cancel, leaving $30$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{3}=30",
          "explanation": "This is the number multiplying $x^{3}$ in the product.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Sanity check the cancellation",
          "workingLatex": "(240+20)-(80+150)=260-230=30",
          "explanation": "Grouping positives and negatives separately gives the same result, confirming the arithmetic.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{3}$ is $30$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "coefficient",
      "product-of-expansions"
    ],
    "questionText": "Find the coefficient of $x^{2}$ in the expansion of $(3-x)^{4}(1+2x)^{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the target and plan",
          "workingLatex": "\\text{find the coefficient of } x^{2} \\text{ in } (3-x)^{4}(1+2x)^{5}",
          "explanation": "The $x^{2}$ term is formed from pairs whose powers add to $2$. We expand each bracket to $x^{2}$ and combine, taking care with the constant $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the first bracket up to x squared",
          "workingLatex": "(3-x)^{4}:\\ \\binom{4}{r}3^{\\,4-r}(-1)^{r}",
          "explanation": "With $a=3,b=-1,n=4$ each coefficient is $\\binom{4}{r}3^{4-r}(-1)^{r}$; the powers of $3$ matter here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the first bracket coefficients",
          "workingLatex": "3^{4}=81,\\ \\binom{4}{1}3^{3}(-1)=-108,\\ \\binom{4}{2}3^{2}=54",
          "explanation": "The coefficients of $x^{0},x^{1},x^{2}$ are $81,-108,54$; note $\\binom{4}{1}=4$ and $3^{3}=27$ give $-108$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm a first bracket coefficient",
          "workingLatex": "\\binom{4}{2}=6,\\quad 6\\times 3^{2}\\times(-1)^{2}=54",
          "explanation": "Checking $\\binom{4}{2}=6$, $3^{2}=9$ and $(-1)^{2}=1$ confirms the $x^{2}$ coefficient is $54$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the first expansion",
          "workingLatex": "(3-x)^{4}=81-108x+54x^{2}+\\cdots",
          "explanation": "Only these terms up to $x^{2}$ can help build an $x^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the second bracket up to x squared",
          "workingLatex": "(1+2x)^{5}:\\ 1,\\ \\binom{5}{1}2=10,\\ \\binom{5}{2}2^{2}=40",
          "explanation": "With $a=1,b=2,n=5$ the coefficients of $x^{0},x^{1},x^{2}$ are $1,10,40$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the second expansion",
          "workingLatex": "(1+2x)^{5}=1+10x+40x^{2}+\\cdots",
          "explanation": "Again only terms up to $x^{2}$ are relevant to the product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "List the pairings that give x squared",
          "workingLatex": "(x^{0}x^{2}),\\ (x^{1}x^{1}),\\ (x^{2}x^{0})",
          "explanation": "Powers must add to $2$, so three combinations contribute.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "First pairing: constant times x squared",
          "workingLatex": "81\\times 40=3240",
          "explanation": "The constant $81$ of the first expansion multiplies the $x^{2}$ term of the second.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Second pairing: x times x",
          "workingLatex": "(-108)\\times 10=-1080",
          "explanation": "The $x$ terms multiply; the minus sign from $-108$ carries through.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Third pairing: x squared times constant",
          "workingLatex": "54\\times 1=54",
          "explanation": "The $x^{2}$ term of the first expansion multiplies the constant of the second.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the contributions",
          "workingLatex": "3240-1080+54",
          "explanation": "Bringing the three contributions together with their signs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the sum",
          "workingLatex": "3240-1080+54=2214",
          "explanation": "$3240-1080=2160$, then $2160+54=2214$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{2}=2214",
          "explanation": "This is the number multiplying $x^{2}$ in the product.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Sanity check",
          "workingLatex": "3240-1080=2160,\\quad 2160+54=2214",
          "explanation": "Recomputing the running total in two stages confirms the coefficient $2214$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{2}$ is $2214$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "equating-coefficients",
      "simultaneous-equations"
    ],
    "questionText": "In the expansion of $(1+ax)(1+bx)^{5}$, where $a$ and $b$ are positive integers, the coefficient of $x$ is $13$ and the coefficient of $x^{2}$ is $70$. Find the values of $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what to find",
          "workingLatex": "\\text{find positive integers } a,b \\text{ from two coefficient conditions}",
          "explanation": "Two unknowns require two equations. Each coefficient condition gives one equation, so we build a pair of simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the second bracket up to x squared",
          "workingLatex": "(1+bx)^{5}=1+\\binom{5}{1}bx+\\binom{5}{2}b^{2}x^{2}+\\cdots",
          "explanation": "To reach the $x^{2}$ coefficient of the product we only need the second bracket up to $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the coefficients explicitly",
          "workingLatex": "(1+bx)^{5}=1+5bx+10b^{2}x^{2}+\\cdots",
          "explanation": "Here $\\binom{5}{1}=5$ and $\\binom{5}{2}=10$, so the $x$ and $x^{2}$ coefficients are $5b$ and $10b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the coefficient of x in the product",
          "workingLatex": "[x]:\\ 1\\cdot 5b+a\\cdot 1=5b+a",
          "explanation": "The $x$ term comes from the constant $1$ times $5bx$, plus $ax$ times the constant $1$ of the second bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the first equation",
          "workingLatex": "5b+a=13",
          "explanation": "Setting the computed $x$ coefficient equal to the given value $13$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the coefficient of x squared in the product",
          "workingLatex": "[x^{2}]:\\ 1\\cdot 10b^{2}+a\\cdot 5b=10b^{2}+5ab",
          "explanation": "The $x^{2}$ term comes from $1\\times 10b^{2}x^{2}$ plus $ax\\times 5bx$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the second equation",
          "workingLatex": "10b^{2}+5ab=70",
          "explanation": "Setting the computed $x^{2}$ coefficient equal to the given value $70$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Make a the subject of the first equation",
          "workingLatex": "a=13-5b",
          "explanation": "Isolating $a$ lets us substitute and reduce to a single-variable equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute into the second equation",
          "workingLatex": "10b^{2}+5b(13-5b)=70",
          "explanation": "Replacing $a$ turns the second equation into one equation in $b$ only.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the bracket",
          "workingLatex": "10b^{2}+65b-25b^{2}=70",
          "explanation": "Distributing $5b$ over $13-5b$ gives $65b-25b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect into a quadratic",
          "workingLatex": "-15b^{2}+65b-70=0\\ \\Rightarrow\\ 3b^{2}-13b+14=0",
          "explanation": "Combining like terms and dividing through by $-5$ gives a tidy quadratic in $b$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve the quadratic",
          "workingLatex": "b=\\frac{13\\pm\\sqrt{169-168}}{6}=\\frac{13\\pm 1}{6}",
          "explanation": "The discriminant is $1$, so the roots are rational.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Choose the integer root",
          "workingLatex": "b=2\\ \\ \\text{or}\\ \\ b=\\tfrac{7}{3}\\ \\Rightarrow\\ b=2",
          "explanation": "Since $b$ must be a positive integer, we reject $\\tfrac{7}{3}$ and take $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find a",
          "workingLatex": "a=13-5(2)=3",
          "explanation": "Substituting $b=2$ back into $a=13-5b$ gives $a=3$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify both conditions",
          "workingLatex": "5(2)+3=13,\\qquad 10(2)^{2}+5(3)(2)=40+30=70",
          "explanation": "Both the $x$ coefficient and the $x^{2}$ coefficient match, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the answer",
          "workingLatex": "a=3,\\ b=2",
          "explanation": "These are the required positive integer values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=3$ and $b=2$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "equating-coefficients",
      "simultaneous-equations"
    ],
    "questionText": "The first three terms in the expansion of $(1+ax)^{n}$ in ascending powers of $x$ are $1+12x+60x^{2}$. Given that $n$ is a positive integer, find the value of $a$ and the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what to find",
          "workingLatex": "\\text{find } a \\text{ and } n \\text{ from the given first three terms}",
          "explanation": "Two unknowns $a$ and $n$ need two equations, which come from matching the $x$ and $x^{2}$ coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the first three terms of the expansion",
          "workingLatex": "(1+ax)^{n}=1+n(ax)+\\frac{n(n-1)}{2!}(ax)^{2}+\\cdots",
          "explanation": "Using $(1+u)^{n}=1+nu+\\tfrac{n(n-1)}{2}u^{2}+\\cdots$ with $u=ax$ for positive integer $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the coefficients",
          "workingLatex": "=1+nax+\\frac{n(n-1)}{2}a^{2}x^{2}+\\cdots",
          "explanation": "Expanding $(ax)^{2}=a^{2}x^{2}$ separates the numerical coefficient of each power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the x coefficient",
          "workingLatex": "na=12",
          "explanation": "Comparing the $x$ term of the expansion with $12x$ gives the first equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match the x squared coefficient",
          "workingLatex": "\\frac{n(n-1)}{2}a^{2}=60",
          "explanation": "Comparing the $x^{2}$ term with $60x^{2}$ gives the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make a the subject of the first equation",
          "workingLatex": "a=\\frac{12}{n}",
          "explanation": "Isolating $a$ lets us eliminate it from the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the second equation",
          "workingLatex": "\\frac{n(n-1)}{2}\\left(\\frac{12}{n}\\right)^{2}=60",
          "explanation": "Replacing $a$ leaves a single equation in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the squared term",
          "workingLatex": "\\frac{n(n-1)}{2}\\cdot\\frac{144}{n^{2}}=\\frac{72(n-1)}{n}",
          "explanation": "Cancelling one factor of $n$ and simplifying $\\tfrac{144}{2}=72$ tidies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form an equation in n",
          "workingLatex": "\\frac{72(n-1)}{n}=60",
          "explanation": "Setting the simplified $x^{2}$ coefficient equal to $60$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Clear the fraction",
          "workingLatex": "72(n-1)=60n",
          "explanation": "Multiplying both sides by $n$ removes the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for n",
          "workingLatex": "72n-72=60n\\ \\Rightarrow\\ 12n=72\\ \\Rightarrow\\ n=6",
          "explanation": "Collecting the $n$ terms gives a linear equation with solution $n=6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find a",
          "workingLatex": "a=\\frac{12}{6}=2",
          "explanation": "Substituting $n=6$ into $a=\\tfrac{12}{n}$ gives $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the expansion",
          "workingLatex": "(1+2x)^{6}=1+6(2x)+\\binom{6}{2}(2x)^{2}+\\cdots=1+12x+60x^{2}+\\cdots",
          "explanation": "Checking directly: $6\\times 2=12$ and $15\\times 4=60$ reproduce the given terms.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "a=2,\\ n=6",
          "explanation": "These positive integer values satisfy both coefficient conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=2$ and $n=6$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "ratio-of-coefficients",
      "find-unknown"
    ],
    "questionText": "In the expansion of $(1+2x)^{n}$ in ascending powers of $x$, the coefficients of $x^{3}$ and $x^{4}$ are in the ratio $2:5$. Find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what to find",
          "workingLatex": "\\text{find } n \\text{ from the ratio of two coefficients}",
          "explanation": "A single ratio condition gives one equation, which is enough to determine the single unknown $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general coefficient",
          "workingLatex": "[x^{r}]\\ \\text{of}\\ (1+2x)^{n}=\\binom{n}{r}2^{r}",
          "explanation": "For $(1+2x)^{n}$ the coefficient of $x^{r}$ is $\\binom{n}{r}2^{r}$, since $a=1$ and $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coefficient of x cubed",
          "workingLatex": "\\binom{n}{3}2^{3}=8\\binom{n}{3}",
          "explanation": "Setting $r=3$ and using $2^{3}=8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Coefficient of x to the fourth",
          "workingLatex": "\\binom{n}{4}2^{4}=16\\binom{n}{4}",
          "explanation": "Setting $r=4$ and using $2^{4}=16$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the ratio",
          "workingLatex": "\\frac{8\\binom{n}{3}}{16\\binom{n}{4}}=\\frac{2}{5}",
          "explanation": "The condition coefficients in ratio $2:5$ becomes an equation of two fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerical factor",
          "workingLatex": "\\frac{8}{16}=\\frac{1}{2}\\ \\Rightarrow\\ \\frac{\\binom{n}{3}}{2\\binom{n}{4}}=\\frac{2}{5}",
          "explanation": "Cancelling $\\tfrac{8}{16}=\\tfrac12$ leaves the ratio of binomial coefficients times a constant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the binomial coefficient ratio",
          "workingLatex": "\\frac{\\binom{n}{3}}{\\binom{n}{4}}=\\frac{4!\\,(n-4)!}{3!\\,(n-3)!}",
          "explanation": "Writing each $\\binom{n}{r}$ with factorials lets the large $n!$ factors cancel.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the factorials",
          "workingLatex": "\\frac{\\binom{n}{3}}{\\binom{n}{4}}=\\frac{4}{\\,n-3\\,}",
          "explanation": "Since $\\tfrac{4!}{3!}=4$ and $\\tfrac{(n-4)!}{(n-3)!}=\\tfrac{1}{n-3}$, the ratio collapses neatly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine into a single fraction",
          "workingLatex": "\\frac{1}{2}\\cdot\\frac{4}{n-3}=\\frac{2}{n-3}",
          "explanation": "Putting the pieces together, the left side of our equation is $\\tfrac{2}{n-3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Form the equation",
          "workingLatex": "\\frac{2}{n-3}=\\frac{2}{5}",
          "explanation": "Equating this to the required ratio $\\tfrac{2}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for n",
          "workingLatex": "n-3=5\\ \\Rightarrow\\ n=8",
          "explanation": "Since the numerators match, the denominators must be equal, giving $n=8$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the value is valid",
          "workingLatex": "n=8\\ge 4",
          "explanation": "An $x^{4}$ term exists only if $n\\ge 4$, and $8$ satisfies this, so the answer is admissible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the coefficients",
          "workingLatex": "\\binom{8}{3}2^{3}=56\\times 8=448,\\quad \\binom{8}{4}2^{4}=70\\times 16=1120",
          "explanation": "Computing both coefficients directly for $n=8$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm the ratio",
          "workingLatex": "448:1120=2:5",
          "explanation": "Dividing both by $224$ gives $2:5$, matching the requirement.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "n=8",
          "explanation": "This is the required value of $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n=8$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "ratio-of-coefficients",
      "find-unknown"
    ],
    "questionText": "In the expansion of $(3+bx)^{5}$, where $b>0$, the coefficient of $x^{2}$ and the coefficient of $x^{3}$ are in the ratio $3:2$. Find the value of $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what to find",
          "workingLatex": "\\text{find } b>0 \\text{ from the ratio of two coefficients}",
          "explanation": "One ratio condition gives one equation, enough to find the single unknown $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the general coefficient",
          "workingLatex": "[x^{r}]\\ \\text{of}\\ (3+bx)^{5}=\\binom{5}{r}3^{\\,5-r}b^{\\,r}",
          "explanation": "For $(3+bx)^{5}$ the coefficient of $x^{r}$ is $\\binom{5}{r}3^{5-r}b^{r}$, with $a=3$ and coefficient $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coefficient of x squared",
          "workingLatex": "\\binom{5}{2}3^{3}b^{2}=10\\times 27\\times b^{2}=270b^{2}",
          "explanation": "Setting $r=2$: $\\binom{5}{2}=10$ and $3^{3}=27$ give $270b^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Coefficient of x cubed",
          "workingLatex": "\\binom{5}{3}3^{2}b^{3}=10\\times 9\\times b^{3}=90b^{3}",
          "explanation": "Setting $r=3$: $\\binom{5}{3}=10$ and $3^{2}=9$ give $90b^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the binomial coefficients",
          "workingLatex": "\\binom{5}{2}=10=\\binom{5}{3}",
          "explanation": "By symmetry these coefficients are equal, matching row 5 of Pascal's triangle: $1,5,10,10,5,1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the ratio",
          "workingLatex": "270b^{2}:90b^{3}=3:2",
          "explanation": "The condition that the two coefficients are in ratio $3:2$ becomes an equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write as a single fraction",
          "workingLatex": "\\frac{270b^{2}}{90b^{3}}=\\frac{3}{2}",
          "explanation": "Turning the ratio into a fraction makes the cancellation clear.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the left side",
          "workingLatex": "\\frac{270}{90}\\cdot\\frac{b^{2}}{b^{3}}=\\frac{3}{b}",
          "explanation": "Since $\\tfrac{270}{90}=3$ and $\\tfrac{b^{2}}{b^{3}}=\\tfrac{1}{b}$, the left side simplifies to $\\tfrac{3}{b}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the equation",
          "workingLatex": "\\frac{3}{b}=\\frac{3}{2}",
          "explanation": "Equating the simplified left side to the required ratio.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for b",
          "workingLatex": "b=2",
          "explanation": "With equal numerators the denominators must match, giving $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the value is valid",
          "workingLatex": "b=2>0",
          "explanation": "The problem requires $b>0$, and $b=2$ satisfies this condition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the coefficients",
          "workingLatex": "270(2)^{2}=1080,\\qquad 90(2)^{3}=720",
          "explanation": "Substituting $b=2$ gives the two coefficients directly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the ratio",
          "workingLatex": "1080:720=3:2",
          "explanation": "Dividing both by $360$ gives $3:2$, matching the requirement.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "b=2",
          "explanation": "This is the required value of $b$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b=2$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "term-independent-of-x",
      "general-term"
    ],
    "questionText": "Find the term independent of $x$ in the expansion of $\\left(2x+\\frac{3}{x}\\right)^{8}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the general term of a binomial expansion",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "Every term of $(a+b)^n$ has the form $\\binom{n}{r}a^{n-r}b^{r}$, where $r$ runs from $0$ upwards. This lets us target one particular term without writing out the whole expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, b and n",
          "workingLatex": "a=2x,\\quad b=\\frac{3}{x},\\quad n=8",
          "explanation": "The two pieces inside the bracket are $2x$ and $\\frac{3}{x}$, and the power is $8$. Matching them to $a$, $b$ and $n$ sets up the general term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general term for this expansion",
          "workingLatex": "T_{r+1}=\\binom{8}{r}(2x)^{8-r}\\left(\\frac{3}{x}\\right)^{r}",
          "explanation": "Substituting our $a$, $b$ and $n$ gives a single expression that produces any chosen term once we fix $r$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate the numbers from the powers of x",
          "workingLatex": "=\\binom{8}{r}\\,2^{\\,8-r}\\,3^{\\,r}\\,x^{\\,8-r}\\,x^{-r}",
          "explanation": "Each factor splits into a number and a power of $x$: $(2x)^{8-r}=2^{8-r}x^{8-r}$ and $\\left(\\frac{3}{x}\\right)^{r}=3^{r}x^{-r}$. Keeping the numbers apart from the $x$-powers makes the next step clear.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the powers of x",
          "workingLatex": "x^{\\,8-r}\\times x^{-r}=x^{\\,8-2r}",
          "explanation": "When multiplying powers with the same base we add the indices, so the net power of $x$ in a general term is $8-2r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the general term tidily",
          "workingLatex": "T_{r+1}=\\binom{8}{r}\\,2^{\\,8-r}\\,3^{\\,r}\\,x^{\\,8-2r}",
          "explanation": "Now the whole family of terms is captured by one clean expression, and the power of $x$ is controlled entirely by $r$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the power of x to zero",
          "workingLatex": "8-2r=0",
          "explanation": "A term is independent of $x$ exactly when its power of $x$ is $0$, because $x^{0}=1$. So we need the exponent $8-2r$ to vanish.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "2r=8\\ \\Rightarrow\\ r=4",
          "explanation": "This simple linear equation gives $r=4$. Since $4$ is a whole number between $0$ and $8$, such a term genuinely exists (this needs $n$ even, which it is).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the power really is zero",
          "workingLatex": "8-2(4)=0",
          "explanation": "Substituting $r=4$ back gives an exponent of exactly $0$, confirming this is truly the constant (independent) term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute r = 4 into the term",
          "workingLatex": "T_{5}=\\binom{8}{4}\\,2^{\\,4}\\,3^{\\,4}",
          "explanation": "With $x^{0}=1$ only the numerical factors survive. Note $r=4$ gives the $5$th term, since the count starts at $r=0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{8}{4}=\\frac{8!}{4!\\,4!}=70",
          "explanation": "This counts the ways of choosing which $4$ of the $8$ factors supply the $\\frac{3}{x}$ part; it equals $70$, the middle entry of row $8$ of Pascal's triangle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the powers of the constants",
          "workingLatex": "2^{\\,4}=16,\\qquad 3^{\\,4}=81",
          "explanation": "These are the leftover numerical pieces from the $2x$ and $\\frac{3}{x}$ parts once all the $x$'s have cancelled.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiply the factors together",
          "workingLatex": "70\\times16\\times81",
          "explanation": "The constant term is just the product of the coefficient and the two powers, because there is no $x$ left to carry.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the final value",
          "workingLatex": "70\\times16=1120,\\quad 1120\\times81=90720",
          "explanation": "Multiplying in stages keeps the arithmetic manageable and gives the value of the term with no $x$ in it.",
          "diagram": null
        }
      ],
      "finalAnswer": "The term independent of $x$ is $90720$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "constant-term",
      "general-term"
    ],
    "questionText": "Find the constant term in the expansion of $\\left(x^{2}+\\frac{1}{x}\\right)^{9}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "The $(r+1)$-th term of $(a+b)^n$ is $\\binom{n}{r}a^{n-r}b^{r}$. Working with this general form lets us isolate the single term we want.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, b and n",
          "workingLatex": "a=x^{2},\\quad b=\\frac{1}{x},\\quad n=9",
          "explanation": "The bracket $\\left(x^{2}+\\frac{1}{x}\\right)^{9}$ has first piece $x^{2}$, second piece $\\frac{1}{x}$ and power $9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{9}{r}(x^{2})^{9-r}\\left(\\frac{1}{x}\\right)^{r}",
          "explanation": "Substituting the values into the formula gives a template for every term in the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note there are no numerical coefficients to track",
          "workingLatex": "\\text{coeff of }x^{2}=1,\\quad \\text{coeff of }\\tfrac{1}{x}=1",
          "explanation": "Both pieces of the bracket have coefficient $1$, so the only numerical factor in each term is the binomial coefficient itself.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify each power of x",
          "workingLatex": "(x^{2})^{9-r}=x^{\\,18-2r},\\quad \\left(\\frac{1}{x}\\right)^{r}=x^{-r}",
          "explanation": "A power of a power multiplies the indices, and $\\frac{1}{x}=x^{-1}$, so each factor becomes a single power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the powers of x",
          "workingLatex": "x^{\\,18-2r}\\times x^{-r}=x^{\\,18-3r}",
          "explanation": "Adding the indices gives the net power of $x$ in the general term as $18-3r$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the power of x to zero",
          "workingLatex": "18-3r=0",
          "explanation": "The constant term contains no $x$, so its power of $x$ must be $0$. We solve for the $r$ that makes this happen.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "3r=18\\ \\Rightarrow\\ r=6",
          "explanation": "Dividing by $3$ gives $r=6$, a whole number, so a genuine constant term exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check r is valid and the power is zero",
          "workingLatex": "0\\le 6\\le 9,\\qquad 18-3(6)=0",
          "explanation": "Since $6$ lies between $0$ and $9$ and makes the exponent exactly $0$, this is the correct index for the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute r = 6",
          "workingLatex": "T_{7}=\\binom{9}{6}",
          "explanation": "As both coefficients are $1$ and $x^{0}=1$, the whole term reduces to the binomial coefficient $\\binom{9}{6}$ (the $7$th term).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the symmetry of binomial coefficients",
          "workingLatex": "\\binom{9}{6}=\\binom{9}{3}",
          "explanation": "Because $\\binom{n}{r}=\\binom{n}{n-r}$, choosing $6$ is the same as choosing $3$; the smaller number is quicker to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the coefficient",
          "workingLatex": "\\binom{9}{3}=\\frac{9\\times8\\times7}{3\\times2\\times1}=84",
          "explanation": "Cancelling the factorials leaves a short product; the top three factors over $3!$ give $84$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check by the factorial formula",
          "workingLatex": "\\binom{9}{6}=\\frac{9!}{6!\\,3!}=84",
          "explanation": "Computing the coefficient by the full factorial route gives the same $84$, an independent confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the constant term",
          "workingLatex": "\\text{constant term}=84",
          "explanation": "There is nothing else to multiply, so the term with no $x$ is simply $84$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The constant term is $84$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "specific-term",
      "coefficient"
    ],
    "questionText": "Find the coefficient of $x^{3}$ in the expansion of $\\left(2x^{2}-\\frac{1}{x}\\right)^{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the general term and mind the sign",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "We use $\\binom{n}{r}a^{n-r}b^{r}$, but here the second term is negative, so its sign must be carried inside $b$ and raised to the power $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, b and n",
          "workingLatex": "a=2x^{2},\\quad b=-\\frac{1}{x},\\quad n=6",
          "explanation": "Writing the second piece as $-\\frac{1}{x}$ keeps the minus sign attached, so it is handled automatically by the power $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{6}{r}(2x^{2})^{6-r}\\left(-\\frac{1}{x}\\right)^{r}",
          "explanation": "Substituting into the formula gives a single expression covering all seven terms of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate numbers, signs and powers of x",
          "workingLatex": "=\\binom{6}{r}\\,2^{\\,6-r}\\,(-1)^{r}\\,x^{\\,12-2r}\\,x^{-r}",
          "explanation": "Here $(2x^{2})^{6-r}=2^{6-r}x^{2(6-r)}=2^{6-r}x^{12-2r}$ and $\\left(-\\frac{1}{x}\\right)^{r}=(-1)^{r}x^{-r}$. The factor $(-1)^{r}$ tracks the sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the powers of x",
          "workingLatex": "x^{\\,12-2r}\\times x^{-r}=x^{\\,12-3r}",
          "explanation": "Adding the indices gives the net power of $x$ as $12-3r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the general term tidily",
          "workingLatex": "T_{r+1}=\\binom{6}{r}\\,2^{\\,6-r}\\,(-1)^{r}\\,x^{\\,12-3r}",
          "explanation": "One clean expression now controls both the coefficient and the power of $x$ through the single index $r$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the power of x equal to 3",
          "workingLatex": "12-3r=3",
          "explanation": "We want the term in $x^{3}$, so we choose $r$ to make the exponent equal to $3$ rather than $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "3r=9\\ \\Rightarrow\\ r=3",
          "explanation": "Rearranging gives $r=3$, a whole number, so the $x^{3}$ term is present in the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check r is valid and the power is 3",
          "workingLatex": "0\\le 3\\le 6,\\qquad 12-3(3)=3",
          "explanation": "The index $3$ lies in range and reproduces the exponent $3$, so we have the right term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute r = 3 into the coefficient",
          "workingLatex": "\\text{coeff}=\\binom{6}{3}\\,2^{\\,3}\\,(-1)^{3}",
          "explanation": "The coefficient of $x^{3}$ is the numerical part of the term at $r=3$: the binomial coefficient times $2^{6-3}$ times $(-1)^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{6}{3}=20",
          "explanation": "This is the central entry of row $6$ of Pascal's triangle, equal to $20$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the powers",
          "workingLatex": "2^{\\,3}=8,\\qquad (-1)^{3}=-1",
          "explanation": "The odd power of $-1$ makes the term negative, which we must keep.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiply the factors",
          "workingLatex": "20\\times8\\times(-1)=-160",
          "explanation": "Combining the coefficient, the power of $2$ and the sign gives the numerical coefficient of $x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{3}=-160",
          "explanation": "So the $x^{3}$ term is $-160x^{3}$, and its coefficient is $-160$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{3}$ is $-160$ (the term is $-160x^{3}$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "term-independent-of-x",
      "general-term"
    ],
    "questionText": "Find the term independent of $x$ in the expansion of $\\left(3x-\\frac{2}{x}\\right)^{10}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "The general term $\\binom{n}{r}a^{n-r}b^{r}$ lets us reach the constant term directly by choosing the right $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, b and n",
          "workingLatex": "a=3x,\\quad b=-\\frac{2}{x},\\quad n=10",
          "explanation": "Keeping the minus sign inside $b=-\\frac{2}{x}$ means the sign is handled correctly when we raise it to the power $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{10}{r}(3x)^{10-r}\\left(-\\frac{2}{x}\\right)^{r}",
          "explanation": "Substituting the values gives the template for every term of this expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate numbers, signs and powers of x",
          "workingLatex": "=\\binom{10}{r}\\,3^{\\,10-r}\\,(-2)^{r}\\,x^{\\,10-r}\\,x^{-r}",
          "explanation": "Here $(3x)^{10-r}=3^{10-r}x^{10-r}$ and $\\left(-\\frac{2}{x}\\right)^{r}=(-2)^{r}x^{-r}$, so the number $(-2)^{r}$ carries both magnitude and sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the powers of x",
          "workingLatex": "x^{\\,10-r}\\times x^{-r}=x^{\\,10-2r}",
          "explanation": "Adding the indices gives the net power of $x$ as $10-2r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the general term tidily",
          "workingLatex": "T_{r+1}=\\binom{10}{r}\\,3^{\\,10-r}\\,(-2)^{r}\\,x^{\\,10-2r}",
          "explanation": "The power of $x$ is now a single expression $10-2r$, so we can pick out the constant term easily.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the power of x to zero",
          "workingLatex": "10-2r=0",
          "explanation": "The term independent of $x$ has power $0$, so we require the exponent $10-2r$ to be zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "2r=10\\ \\Rightarrow\\ r=5",
          "explanation": "Solving gives $r=5$. Because $n=10$ is even, $r$ comes out a whole number, so a constant term genuinely exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check r is valid and the power is zero",
          "workingLatex": "0\\le 5\\le 10,\\qquad 10-2(5)=0",
          "explanation": "The index $5$ lies in range and makes the exponent exactly $0$, confirming the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute r = 5",
          "workingLatex": "T_{6}=\\binom{10}{5}\\,3^{\\,5}\\,(-2)^{5}",
          "explanation": "With $x^{0}=1$, only the numerical factors remain. This is the $6$th term of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{10}{5}=252",
          "explanation": "This is the central, largest entry of row $10$ of Pascal's triangle, equal to $252$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the powers",
          "workingLatex": "3^{\\,5}=243,\\qquad (-2)^{5}=-32",
          "explanation": "The fifth power of $-2$ is negative because $5$ is odd, so this term will be negative overall.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiply the two constants",
          "workingLatex": "243\\times(-32)=-7776",
          "explanation": "Combining the powers of $3$ and $-2$ first keeps the numbers smaller before bringing in the binomial coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Multiply by the binomial coefficient",
          "workingLatex": "252\\times(-7776)=-1959552",
          "explanation": "Multiplying by $252$ gives the value of the term with no $x$ in it.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the term independent of x",
          "workingLatex": "\\text{constant term}=-1959552",
          "explanation": "So the single term free of $x$ in this expansion is $-1959552$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The term independent of $x$ is $-1959552$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "term-independent-of-x",
      "general-term"
    ],
    "questionText": "Find the term independent of $x$ in the expansion of $\\left(x^{3}+\\frac{2}{x}\\right)^{8}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "The general term $\\binom{n}{r}a^{n-r}b^{r}$ lets us focus on just the constant term by choosing $r$ so that the powers of $x$ cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, b and n",
          "workingLatex": "a=x^{3},\\quad b=\\frac{2}{x},\\quad n=8",
          "explanation": "The first piece contributes a high positive power of $x$ and the second a negative power, so a balancing $r$ can make them cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{8}{r}(x^{3})^{8-r}\\left(\\frac{2}{x}\\right)^{r}",
          "explanation": "Substituting the values gives one expression that generates every term of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate the number from the powers of x",
          "workingLatex": "=\\binom{8}{r}\\,2^{\\,r}\\,x^{\\,24-3r}\\,x^{-r}",
          "explanation": "Here $(x^{3})^{8-r}=x^{3(8-r)}=x^{24-3r}$ and $\\left(\\frac{2}{x}\\right)^{r}=2^{r}x^{-r}$, so only $2^{r}$ is a pure number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the powers of x",
          "workingLatex": "x^{\\,24-3r}\\times x^{-r}=x^{\\,24-4r}",
          "explanation": "Adding the indices gives the net power of $x$ as $24-4r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the general term tidily",
          "workingLatex": "T_{r+1}=\\binom{8}{r}\\,2^{\\,r}\\,x^{\\,24-4r}",
          "explanation": "The exponent $24-4r$ now depends only on $r$, so we can force it to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the power of x to zero",
          "workingLatex": "24-4r=0",
          "explanation": "A term independent of $x$ needs its power of $x$ to be $0$; we solve for the $r$ that achieves this.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "4r=24\\ \\Rightarrow\\ r=6",
          "explanation": "Dividing by $4$ gives $r=6$, a whole number between $0$ and $8$, so the constant term exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check r is valid and the power is zero",
          "workingLatex": "0\\le 6\\le 8,\\qquad 24-4(6)=0",
          "explanation": "The index $6$ is in range and gives an exponent of exactly $0$, confirming the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute r = 6",
          "workingLatex": "T_{7}=\\binom{8}{6}\\,2^{\\,6}",
          "explanation": "With $x^{0}=1$, the term reduces to the binomial coefficient times $2^{6}$; this is the $7$th term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{8}{6}=\\binom{8}{2}=28",
          "explanation": "Using the symmetry $\\binom{8}{6}=\\binom{8}{2}$ makes this a quick calculation: $\\frac{8\\times7}{2}=28$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the power of 2",
          "workingLatex": "2^{\\,6}=64",
          "explanation": "This is the numerical leftover from raising the $\\frac{2}{x}$ part to the sixth power.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiply the factors",
          "workingLatex": "28\\times64=1792",
          "explanation": "The product of the coefficient and $2^{6}$ gives the value of the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the term independent of x",
          "workingLatex": "\\text{constant term}=1792",
          "explanation": "So the one term with no $x$ in this expansion is $1792$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The term independent of $x$ is $1792$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "specific-term",
      "negative-power"
    ],
    "questionText": "Find the coefficient of $x^{-6}$ (the term in $\\frac{1}{x^{6}}$) in the expansion of $\\left(x^{2}-\\frac{3}{x}\\right)^{9}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the general term and mind the sign",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "We use $\\binom{n}{r}a^{n-r}b^{r}$; because the second term is negative, its sign must sit inside $b$ so that $(-)^{r}$ is tracked automatically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, b and n",
          "workingLatex": "a=x^{2},\\quad b=-\\frac{3}{x},\\quad n=9",
          "explanation": "The second piece $-\\frac{3}{x}$ produces negative powers of $x$, which is how a term as low as $x^{-6}$ can appear.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{9}{r}(x^{2})^{9-r}\\left(-\\frac{3}{x}\\right)^{r}",
          "explanation": "Substituting the values gives a template for all ten terms of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate number, sign and powers of x",
          "workingLatex": "=\\binom{9}{r}\\,(-3)^{r}\\,x^{\\,18-2r}\\,x^{-r}",
          "explanation": "Here $(x^{2})^{9-r}=x^{18-2r}$ and $\\left(-\\frac{3}{x}\\right)^{r}=(-3)^{r}x^{-r}$, so $(-3)^{r}$ carries both the number and the sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the powers of x",
          "workingLatex": "x^{\\,18-2r}\\times x^{-r}=x^{\\,18-3r}",
          "explanation": "Adding the indices gives the net power of $x$ as $18-3r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the general term tidily",
          "workingLatex": "T_{r+1}=\\binom{9}{r}\\,(-3)^{r}\\,x^{\\,18-3r}",
          "explanation": "The exponent $18-3r$ decreases as $r$ grows, so a large enough $r$ produces the negative power we want.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the power of x equal to minus 6",
          "workingLatex": "18-3r=-6",
          "explanation": "The target term is $x^{-6}$, so we choose $r$ to make the exponent equal to $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "3r=24\\ \\Rightarrow\\ r=8",
          "explanation": "Rearranging $18-3r=-6$ gives $3r=24$, so $r=8$, a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check r is valid and the power is minus 6",
          "workingLatex": "0\\le 8\\le 9,\\qquad 18-3(8)=-6",
          "explanation": "The index $8$ lies within range and reproduces the exponent $-6$, so this is the correct term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute r = 8 into the coefficient",
          "workingLatex": "\\text{coeff}=\\binom{9}{8}\\,(-3)^{8}",
          "explanation": "The coefficient of $x^{-6}$ is the numerical part at $r=8$: the binomial coefficient times $(-3)^{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{9}{8}=\\binom{9}{1}=9",
          "explanation": "By symmetry $\\binom{9}{8}=\\binom{9}{1}=9$; choosing $8$ of $9$ is the same as leaving out $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the power",
          "workingLatex": "(-3)^{8}=3^{8}=6561",
          "explanation": "Since $8$ is even, the minus sign disappears and the value is positive: $3^{8}=6561$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiply the factors",
          "workingLatex": "9\\times6561=59049",
          "explanation": "Combining the coefficient and the power of $-3$ gives the numerical coefficient of $x^{-6}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coefficient",
          "workingLatex": "\\text{coefficient of }x^{-6}=59049",
          "explanation": "So the term in $\\frac{1}{x^{6}}$ is $59049\\,x^{-6}$, and its coefficient is $59049$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The coefficient of $x^{-6}$ is $59049$ (the term is $59049\\,x^{-6}$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "binomial-expansion",
      "approximation",
      "estimation"
    ],
    "questionText": "a) Write down, in ascending powers of $x$, the first four terms of the binomial expansion of $(1+2x)^{10}$. b) By choosing a suitable small value of $x$, use your expansion to find an approximation for $1.02^{10}$, giving your answer to $5$ decimal places, and comment on the accuracy of your estimate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the expansion of (1 + X) to the power n",
          "workingLatex": "(1+X)^{n}=1+nX+\\frac{n(n-1)}{2!}X^{2}+\\frac{n(n-1)(n-2)}{3!}X^{3}+\\cdots",
          "explanation": "For a positive integer power this series is finite and exact. We will use it with $X=2x$ and $n=10$, keeping only the first four terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the first term",
          "workingLatex": "\\text{term }1=1",
          "explanation": "The leading term of $(1+X)^{n}$ is always $1$, since it comes from taking the $1$ every time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the term in x",
          "workingLatex": "\\binom{10}{1}(2x)=10\\times2x=20x",
          "explanation": "The linear term is $n$ copies of $X=2x$; with $n=10$ this gives $20x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the term in x squared",
          "workingLatex": "\\binom{10}{2}(2x)^{2}=45\\times4x^{2}=180x^{2}",
          "explanation": "Here $\\binom{10}{2}=45$ and $(2x)^{2}=4x^{2}$; multiplying gives $180x^{2}$. Squaring the $2$ is essential and easy to forget.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the term in x cubed",
          "workingLatex": "\\binom{10}{3}(2x)^{3}=120\\times8x^{3}=960x^{3}",
          "explanation": "With $\\binom{10}{3}=120$ and $(2x)^{3}=8x^{3}$, the cubic term is $960x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the first four terms",
          "workingLatex": "(1+2x)^{10}\\approx 1+20x+180x^{2}+960x^{3}",
          "explanation": "These are the first four terms in ascending powers of $x$; the remaining terms carry higher powers and are small when $x$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Match the target to the bracket",
          "workingLatex": "1+2x=1.02",
          "explanation": "We want $1.02^{10}$, so we choose $x$ so that the base $1+2x$ equals $1.02$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x and note it is small",
          "workingLatex": "2x=0.02\\ \\Rightarrow\\ x=0.01",
          "explanation": "Solving gives $x=0.01$. This is small, so the truncated four-term expansion should be accurate because the neglected terms carry high powers of a small number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the linear term",
          "workingLatex": "20(0.01)=0.2",
          "explanation": "Substituting $x=0.01$ into $20x$ gives $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the quadratic term",
          "workingLatex": "180(0.01)^{2}=180\\times0.0001=0.018",
          "explanation": "Squaring $0.01$ gives $0.0001$; times $180$ gives $0.018$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the cubic term",
          "workingLatex": "960(0.01)^{3}=960\\times0.000001=0.00096",
          "explanation": "Cubing $0.01$ gives $0.000001$; times $960$ gives $0.00096$. Notice how quickly the terms shrink.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the terms",
          "workingLatex": "1+0.2+0.018+0.00096=1.21896",
          "explanation": "Summing the four contributions gives the approximation to $5$ decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the approximation",
          "workingLatex": "1.02^{10}\\approx 1.21896",
          "explanation": "This is our estimate from the first four terms of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Estimate the size of the first neglected term",
          "workingLatex": "\\binom{10}{4}(2x)^{4}=210\\times16(0.01)^{4}\\approx 3.4\\times10^{-5}",
          "explanation": "The next term is about $0.000034$, and it is positive, so our estimate is a slight underestimate rather than an overestimate.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Comment on the accuracy",
          "workingLatex": "1.02^{10}=1.21899\\ (5\\text{ d.p.})",
          "explanation": "Because the ignored terms are positive and only of order $10^{-5}$, the estimate $1.21896$ is accurate to about $4$ decimal places; the true value is $1.21899$, slightly larger, as predicted.",
          "diagram": null
        }
      ],
      "finalAnswer": "a) $1+20x+180x^{2}+960x^{3}$. b) With $x=0.01$, $1.02^{10}\\approx1.21896$. The neglected terms are positive but only of order $10^{-5}$, so this is a slight underestimate, correct to about $4$ decimal places (true value $1.21899$)."
    }
  },
  {
    "id": "al.y1.pure.binomial.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "equating-coefficients",
      "find-n"
    ],
    "questionText": "In the expansion of $(2+x)^{n}$, where $n$ is a positive integer, the coefficient of $x^{2}$ is twice the coefficient of $x$. Find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the coefficient of x to the k",
          "workingLatex": "\\text{coeff of }x^{k}=\\binom{n}{k}2^{\\,n-k}",
          "explanation": "For $(2+x)^{n}$ the term in $x^{k}$ is $\\binom{n}{k}2^{n-k}x^{k}$, so its coefficient is $\\binom{n}{k}2^{n-k}$. Here the constant term of the bracket is $2$ and the variable term is $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Coefficient of x",
          "workingLatex": "\\binom{n}{1}2^{\\,n-1}=n\\cdot 2^{\\,n-1}",
          "explanation": "Putting $k=1$ gives the coefficient of the linear term as $n\\cdot 2^{n-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coefficient of x squared",
          "workingLatex": "\\binom{n}{2}2^{\\,n-2}=\\frac{n(n-1)}{2}\\,2^{\\,n-2}",
          "explanation": "Putting $k=2$ gives the coefficient of the quadratic term, using $\\binom{n}{2}=\\frac{n(n-1)}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Translate the condition into an equation",
          "workingLatex": "\\frac{n(n-1)}{2}\\,2^{\\,n-2}=2\\left(n\\cdot 2^{\\,n-1}\\right)",
          "explanation": "The phrase 'the coefficient of $x^{2}$ is twice the coefficient of $x$' becomes: quadratic coefficient equals $2$ times the linear coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the right-hand side",
          "workingLatex": "2\\left(n\\cdot 2^{\\,n-1}\\right)=n\\cdot 2^{\\,n}",
          "explanation": "Multiplying $2^{n-1}$ by the extra $2$ raises the index by one, giving $n\\cdot 2^{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the working equation",
          "workingLatex": "\\frac{n(n-1)}{2}\\,2^{\\,n-2}=n\\cdot 2^{\\,n}",
          "explanation": "This is the equation to solve for $n$; both sides share common factors we can cancel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note n is at least 2, then divide by n",
          "workingLatex": "\\frac{n-1}{2}\\,2^{\\,n-2}=2^{\\,n}",
          "explanation": "An $x^{2}$ term only exists if $n\\ge 2$, so $n\\ne 0$ and we may safely divide both sides by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide by the common power of 2",
          "workingLatex": "\\frac{n-1}{2}=\\frac{2^{\\,n}}{2^{\\,n-2}}",
          "explanation": "Dividing both sides by $2^{n-2}$ removes the awkward power of $2$ that depends on $n$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the power of 2",
          "workingLatex": "\\frac{2^{\\,n}}{2^{\\,n-2}}=2^{\\,2}=4",
          "explanation": "Subtracting indices gives $2^{n-(n-2)}=2^{2}=4$; the dependence on $n$ cancels completely.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Form the linear equation",
          "workingLatex": "\\frac{n-1}{2}=4",
          "explanation": "What remains is a simple linear equation in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for n",
          "workingLatex": "n-1=8\\ \\Rightarrow\\ n=9",
          "explanation": "Multiplying by $2$ then adding $1$ gives $n=9$, a positive integer as required.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the two coefficients for n = 9",
          "workingLatex": "n=9:\\ \\text{coeff }x=9\\cdot2^{8}=2304,\\ \\ \\text{coeff }x^{2}=36\\cdot2^{7}=4608",
          "explanation": "Substituting $n=9$ back into the coefficients lets us check the condition directly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the condition",
          "workingLatex": "4608=2\\times2304",
          "explanation": "The coefficient of $x^{2}$ is indeed twice the coefficient of $x$, so $n=9$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "n=9",
          "explanation": "The unique positive integer satisfying the condition is $n=9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n=9$."
    }
  },
  {
    "id": "al.y1.pure.binomial.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "binomial-expansion",
      "term-independent-of-x",
      "show-that"
    ],
    "questionText": "Show that the term independent of $x$ in the expansion of $\\left(x+\\frac{2}{x^{2}}\\right)^{9}$ is $672$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}a^{\\,n-r}b^{\\,r}",
          "explanation": "The general term $\\binom{n}{r}a^{n-r}b^{r}$ lets us isolate the constant term without expanding the whole bracket.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a, b and n",
          "workingLatex": "a=x,\\quad b=\\frac{2}{x^{2}},\\quad n=9",
          "explanation": "The first piece is $x$ and the second is $\\frac{2}{x^{2}}$, which contributes powers of $x^{-2}$; the power is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{9}{r}(x)^{9-r}\\left(\\frac{2}{x^{2}}\\right)^{r}",
          "explanation": "Substituting the values gives a single expression for every term of the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate the number from the powers of x",
          "workingLatex": "=\\binom{9}{r}\\,2^{\\,r}\\,x^{\\,9-r}\\,x^{-2r}",
          "explanation": "Here $(x)^{9-r}=x^{9-r}$ and $\\left(\\frac{2}{x^{2}}\\right)^{r}=2^{r}x^{-2r}$, so only $2^{r}$ is a pure number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the powers of x",
          "workingLatex": "x^{\\,9-r}\\times x^{-2r}=x^{\\,9-3r}",
          "explanation": "Adding the indices, the net power of $x$ in the general term is $9-3r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the general term tidily",
          "workingLatex": "T_{r+1}=\\binom{9}{r}\\,2^{\\,r}\\,x^{\\,9-3r}",
          "explanation": "The power of $x$ is now the single expression $9-3r$, which we can set to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the power of x to zero",
          "workingLatex": "9-3r=0",
          "explanation": "The term independent of $x$ has power $0$, so we require $9-3r=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "3r=9\\ \\Rightarrow\\ r=3",
          "explanation": "Dividing by $3$ gives $r=3$, a whole number, so the constant term exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check r is valid and the power is zero",
          "workingLatex": "0\\le 3\\le 9,\\qquad 9-3(3)=0",
          "explanation": "The index $3$ is in range and makes the exponent exactly $0$, confirming it is the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute r = 3",
          "workingLatex": "T_{4}=\\binom{9}{3}\\,2^{\\,3}",
          "explanation": "With $x^{0}=1$, the term reduces to the binomial coefficient times $2^{3}$; this is the $4$th term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{9}{3}=\\frac{9\\times8\\times7}{3\\times2\\times1}=84",
          "explanation": "Cancelling the factorials leaves the product $\\frac{9\\times8\\times7}{6}=84$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the power of 2",
          "workingLatex": "2^{\\,3}=8",
          "explanation": "This is the numerical leftover from raising $\\frac{2}{x^{2}}$ to the third power.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiply the factors",
          "workingLatex": "84\\times8=672",
          "explanation": "The product of the coefficient and $2^{3}$ gives the value of the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the show that",
          "workingLatex": "\\text{constant term}=\\binom{9}{3}\\times2^{3}=672",
          "explanation": "The term independent of $x$ is exactly $672$, which is what we were asked to show.",
          "diagram": null
        }
      ],
      "finalAnswer": "The term independent of $x$ is $\\binom{9}{3}\\times 2^{3}=84\\times 8=672$, as required."
    }
  },
  {
    "id": "al.y1.pure.binomial.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Binomial expansion",
    "subtopicId": "al.y1.pure.binomial",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "binomial-expansion",
      "term-independent-of-x",
      "find-unknown"
    ],
    "questionText": "The term independent of $x$ in the expansion of $\\left(ax+\\frac{1}{x}\\right)^{8}$ is $5670$, where $a$ is a positive constant. Find the value of $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the general term",
          "workingLatex": "T_{r+1}=\\binom{n}{r}(\\text{1st})^{\\,n-r}(\\text{2nd})^{\\,r}",
          "explanation": "The $(r+1)$-th term is $\\binom{n}{r}$ times the first term to the power $n-r$ and the second term to the power $r$. The unknown constant $a$ stays inside the first term for now.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the two terms and the power",
          "workingLatex": "\\text{1st}=ax,\\quad \\text{2nd}=\\frac{1}{x},\\quad n=8",
          "explanation": "The bracket is $\\left(ax+\\frac{1}{x}\\right)^{8}$, so the two terms are $ax$ and $\\frac{1}{x}$, with power $8$. Our goal is to find $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general term",
          "workingLatex": "T_{r+1}=\\binom{8}{r}(ax)^{8-r}\\left(\\frac{1}{x}\\right)^{r}",
          "explanation": "Substituting into the formula gives a template that carries the unknown $a$ through the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate the constants from the powers of x",
          "workingLatex": "=\\binom{8}{r}\\,a^{\\,8-r}\\,x^{\\,8-r}\\,x^{-r}",
          "explanation": "Here $(ax)^{8-r}=a^{8-r}x^{8-r}$ and $\\left(\\frac{1}{x}\\right)^{r}=x^{-r}$, so the constant part is $\\binom{8}{r}a^{8-r}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the powers of x",
          "workingLatex": "x^{\\,8-r}\\times x^{-r}=x^{\\,8-2r}",
          "explanation": "Adding the indices gives the net power of $x$ as $8-2r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the general term tidily",
          "workingLatex": "T_{r+1}=\\binom{8}{r}\\,a^{\\,8-r}\\,x^{\\,8-2r}",
          "explanation": "The power of $x$ depends only on $r$, so we can pick out the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the power of x to zero",
          "workingLatex": "8-2r=0",
          "explanation": "The term independent of $x$ has power $0$, so we solve $8-2r=0$ for $r$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for r",
          "workingLatex": "2r=8\\ \\Rightarrow\\ r=4",
          "explanation": "Solving gives $r=4$, a whole number between $0$ and $8$, so a constant term exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check r is valid and the power is zero",
          "workingLatex": "0\\le 4\\le 8,\\qquad 8-2(4)=0",
          "explanation": "The index $4$ is in range and gives an exponent of exactly $0$, confirming the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the constant term in terms of a",
          "workingLatex": "\\text{constant term}=\\binom{8}{4}\\,a^{\\,8-4}=\\binom{8}{4}\\,a^{4}",
          "explanation": "Substituting $r=4$ leaves the constant term as a binomial coefficient multiplied by $a^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the binomial coefficient",
          "workingLatex": "\\binom{8}{4}=70\\ \\Rightarrow\\ \\text{constant term}=70a^{4}",
          "explanation": "The central entry of row $8$ of Pascal's triangle is $70$, so the constant term is $70a^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set the constant term equal to 5670",
          "workingLatex": "70a^{4}=5670",
          "explanation": "The question states this constant term equals $5670$, giving an equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for a to the fourth power",
          "workingLatex": "a^{4}=\\frac{5670}{70}=81",
          "explanation": "Dividing both sides by $70$ isolates $a^{4}=81$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Take the positive fourth root",
          "workingLatex": "a=\\sqrt[4]{81}=3",
          "explanation": "Since $3^{4}=81$ and $a$ is given to be positive, we take the positive fourth root, so $a=3$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "a=3",
          "explanation": "The positive constant that makes the term independent of $x$ equal to $5670$ is $a=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=3$."
    }
  }
];
