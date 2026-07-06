import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.partial-fractions.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "factorising", "cancelling common factors"],
    "questionText": "Simplify fully: $\\dfrac{x^2-9}{x^2+7x+12}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the numerator",
          "workingLatex": "x^2-9=(x-3)(x+3)",
          "explanation": "The numerator is a difference of two squares, so $x^2-9$ splits neatly into $(x-3)(x+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the denominator",
          "workingLatex": "x^2+7x+12=(x+3)(x+4)",
          "explanation": "We need two numbers that multiply to $12$ and add to $7$; those are $3$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{x^2-9}{x^2+7x+12}=\\dfrac{(x-3)(x+3)}{(x+3)(x+4)}",
          "explanation": "Writing top and bottom as products makes the shared factor easy to spot.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common factor",
          "workingLatex": "(x+3)",
          "explanation": "Both the numerator and denominator contain the factor $(x+3)$, so it can be cancelled.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{(x-3)(x+3)}{(x+3)(x+4)}=\\dfrac{x-3}{x+4}",
          "explanation": "Dividing top and bottom by $(x+3)$ removes it, valid provided $x+3\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{x-3}{x+4}",
          "explanation": "The numerator and denominator now share no common factor, so this is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x-3}{x+4}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "simplifying", "factorising"],
    "questionText": "Simplify fully: $\\dfrac{x^2+5x+6}{x^2-4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the numerator",
          "workingLatex": "x^2+5x+6=(x+2)(x+3)",
          "explanation": "Two numbers that multiply to $6$ and add to $5$ are $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-4=(x-2)(x+2)",
          "explanation": "This is a difference of two squares, giving $(x-2)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{x^2+5x+6}{x^2-4}=\\dfrac{(x+2)(x+3)}{(x-2)(x+2)}",
          "explanation": "With both parts as products, any shared factor becomes visible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common factor",
          "workingLatex": "(x+2)",
          "explanation": "The factor $(x+2)$ appears on the top and the bottom, so it can be cancelled.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{(x+2)(x+3)}{(x-2)(x+2)}=\\dfrac{x+3}{x-2}",
          "explanation": "Dividing top and bottom by $(x+2)$ leaves $\\dfrac{x+3}{x-2}$, valid provided $x+2\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{x+3}{x-2}",
          "explanation": "No further common factor remains, so the fraction is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x+3}{x-2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "factorising", "cancelling common factors"],
    "questionText": "Simplify fully: $\\dfrac{x^2-x-6}{x^2-9}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the numerator",
          "workingLatex": "x^2-x-6=(x-3)(x+2)",
          "explanation": "Two numbers that multiply to $-6$ and add to $-1$ are $-3$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-9=(x-3)(x+3)",
          "explanation": "A difference of two squares factorises as $(x-3)(x+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{x^2-x-6}{x^2-9}=\\dfrac{(x-3)(x+2)}{(x-3)(x+3)}",
          "explanation": "Expressing both parts as products reveals the factor they have in common.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common factor",
          "workingLatex": "(x-3)",
          "explanation": "The factor $(x-3)$ is present on both the top and the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{(x-3)(x+2)}{(x-3)(x+3)}=\\dfrac{x+2}{x+3}",
          "explanation": "Dividing top and bottom by $(x-3)$ removes it, valid provided $x-3\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{x+2}{x+3}",
          "explanation": "There is no remaining common factor, so this is the fully simplified form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x+2}{x+3}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "factorising", "simplifying", "cancelling common factors"],
    "questionText": "Simplify fully: $\\dfrac{2x^2+7x+3}{x^2+6x+9}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the numerator",
          "workingLatex": "2x^2+7x+3=(2x+1)(x+3)",
          "explanation": "Splitting the middle term $7x$ into $6x+x$ lets us factorise by grouping into $(2x+1)(x+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the denominator",
          "workingLatex": "x^2+6x+9=(x+3)^2",
          "explanation": "This is a perfect square, since $x^2+6x+9=(x+3)(x+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{2x^2+7x+3}{x^2+6x+9}=\\dfrac{(2x+1)(x+3)}{(x+3)(x+3)}",
          "explanation": "Writing everything as products makes the shared factor easy to see.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common factor",
          "workingLatex": "(x+3)",
          "explanation": "One factor of $(x+3)$ appears on the top and can be paired with one on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{(2x+1)(x+3)}{(x+3)(x+3)}=\\dfrac{2x+1}{x+3}",
          "explanation": "Cancelling one $(x+3)$ from top and bottom leaves a single $(x+3)$ below, valid provided $x+3\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{2x+1}{x+3}",
          "explanation": "No common factor remains, so the fraction is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2x+1}{x+3}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "difference of two squares", "cancelling common factors"],
    "questionText": "Simplify fully: $\\dfrac{x^2-16}{x^2-8x+16}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the numerator",
          "workingLatex": "x^2-16=(x-4)(x+4)",
          "explanation": "A difference of two squares factorises as $(x-4)(x+4)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-8x+16=(x-4)^2",
          "explanation": "This is a perfect square, since $x^2-8x+16=(x-4)(x-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{x^2-16}{x^2-8x+16}=\\dfrac{(x-4)(x+4)}{(x-4)(x-4)}",
          "explanation": "Both parts are now products, so the shared factor stands out.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common factor",
          "workingLatex": "(x-4)",
          "explanation": "The factor $(x-4)$ appears on the top and on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{(x-4)(x+4)}{(x-4)(x-4)}=\\dfrac{x+4}{x-4}",
          "explanation": "Cancelling one $(x-4)$ from top and bottom leaves a single $(x-4)$ below, valid provided $x-4\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{x+4}{x-4}",
          "explanation": "No further common factor remains, so this is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x+4}{x-4}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "factorising", "common numerical factor", "simplifying"],
    "questionText": "Simplify fully: $\\dfrac{3x^2-12}{x^2-4x+4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take out the common numerical factor in the numerator",
          "workingLatex": "3x^2-12=3(x^2-4)",
          "explanation": "Both terms share a factor of $3$, so removing it first makes the rest easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Finish factorising the numerator",
          "workingLatex": "3(x^2-4)=3(x-2)(x+2)",
          "explanation": "The bracket $x^2-4$ is a difference of two squares, giving $(x-2)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-4x+4=(x-2)^2",
          "explanation": "This is a perfect square, since $x^2-4x+4=(x-2)(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{3x^2-12}{x^2-4x+4}=\\dfrac{3(x-2)(x+2)}{(x-2)(x-2)}",
          "explanation": "With everything as products, the shared factor is clear.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{3(x-2)(x+2)}{(x-2)(x-2)}=\\dfrac{3(x+2)}{x-2}",
          "explanation": "Cancelling one $(x-2)$ from top and bottom leaves a single $(x-2)$ below, valid provided $x-2\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{3(x+2)}{x-2}",
          "explanation": "The constant $3$ stays with the numerator and no common factor remains, so this is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3(x+2)}{x-2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "factorising", "cancelling common factors"],
    "questionText": "Simplify fully: $\\dfrac{x^2+2x-15}{x^2+x-12}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the numerator",
          "workingLatex": "x^2+2x-15=(x+5)(x-3)",
          "explanation": "Two numbers that multiply to $-15$ and add to $2$ are $5$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the denominator",
          "workingLatex": "x^2+x-12=(x+4)(x-3)",
          "explanation": "Two numbers that multiply to $-12$ and add to $1$ are $4$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{x^2+2x-15}{x^2+x-12}=\\dfrac{(x+5)(x-3)}{(x+4)(x-3)}",
          "explanation": "Both parts written as products let us compare their factors directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common factor",
          "workingLatex": "(x-3)",
          "explanation": "The factor $(x-3)$ appears on both the top and the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{(x+5)(x-3)}{(x+4)(x-3)}=\\dfrac{x+5}{x+4}",
          "explanation": "Dividing top and bottom by $(x-3)$ removes it, valid provided $x-3\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{x+5}{x+4}",
          "explanation": "No common factor is left, so the fraction is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x+5}{x+4}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "factorising", "simplifying", "cancelling common factors"],
    "questionText": "Simplify fully: $\\dfrac{6x^2+11x+3}{3x^2+7x+2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the numerator",
          "workingLatex": "6x^2+11x+3=(3x+1)(2x+3)",
          "explanation": "Splitting $11x$ into $9x+2x$ and grouping gives $(3x+1)(2x+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the denominator",
          "workingLatex": "3x^2+7x+2=(3x+1)(x+2)",
          "explanation": "Splitting $7x$ into $6x+x$ and grouping gives $(3x+1)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{6x^2+11x+3}{3x^2+7x+2}=\\dfrac{(3x+1)(2x+3)}{(3x+1)(x+2)}",
          "explanation": "As products, the factor shared by top and bottom becomes obvious.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common factor",
          "workingLatex": "(3x+1)",
          "explanation": "The factor $(3x+1)$ appears on both the numerator and the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{(3x+1)(2x+3)}{(3x+1)(x+2)}=\\dfrac{2x+3}{x+2}",
          "explanation": "Dividing top and bottom by $(3x+1)$ removes it, valid provided $3x+1\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{2x+3}{x+2}",
          "explanation": "No common factor remains, so this is the fully simplified form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2x+3}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "factorising", "common factor", "cancelling common factors"],
    "questionText": "Simplify fully: $\\dfrac{x^3-x}{x^2-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take out the common factor in the numerator",
          "workingLatex": "x^3-x=x(x^2-1)",
          "explanation": "Both terms share a factor of $x$, so removing it uncovers a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Finish factorising the numerator",
          "workingLatex": "x(x^2-1)=x(x-1)(x+1)",
          "explanation": "The bracket $x^2-1$ is a difference of two squares, giving $(x-1)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-1=(x-1)(x+1)",
          "explanation": "This is again a difference of two squares, factorising as $(x-1)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{x^3-x}{x^2-1}=\\dfrac{x(x-1)(x+1)}{(x-1)(x+1)}",
          "explanation": "Now every factor is visible, so we can see the whole denominator matches part of the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factors",
          "workingLatex": "\\dfrac{x(x-1)(x+1)}{(x-1)(x+1)}=x",
          "explanation": "Cancelling $(x-1)$ and $(x+1)$ from top and bottom leaves just $x$, valid provided $x^2-1\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "x",
          "explanation": "With both bracketed factors removed, the expression collapses to the single term $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "common factor", "difference of two squares"],
    "questionText": "Simplify fully: $\\dfrac{x^2-5x}{x^2-25}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the numerator",
          "workingLatex": "x^2-5x=x(x-5)",
          "explanation": "Both terms share a factor of $x$, so the numerator factorises as $x(x-5)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-25=(x-5)(x+5)",
          "explanation": "A difference of two squares factorises as $(x-5)(x+5)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{x^2-5x}{x^2-25}=\\dfrac{x(x-5)}{(x-5)(x+5)}",
          "explanation": "Writing both parts as products makes the shared factor easy to identify.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common factor",
          "workingLatex": "(x-5)",
          "explanation": "The factor $(x-5)$ appears on both the top and the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{x(x-5)}{(x-5)(x+5)}=\\dfrac{x}{x+5}",
          "explanation": "Dividing top and bottom by $(x-5)$ removes it, valid provided $x-5\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{x}{x+5}",
          "explanation": "No common factor remains, so the fraction is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x}{x+5}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "multiplying fractions", "factorising", "cancelling common factors"],
    "questionText": "Simplify fully: $\\dfrac{x+2}{x-3}\\times\\dfrac{x^2-9}{x^2+4x+4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Combine into a single fraction",
          "workingLatex": "\\dfrac{x+2}{x-3}\\times\\dfrac{x^2-9}{x^2+4x+4}=\\dfrac{(x+2)(x^2-9)}{(x-3)(x^2+4x+4)}",
          "explanation": "Multiplying fractions means multiplying the numerators together and the denominators together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic on top",
          "workingLatex": "x^2-9=(x-3)(x+3)",
          "explanation": "This is a difference of two squares, factorising as $(x-3)(x+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic on the bottom",
          "workingLatex": "x^2+4x+4=(x+2)^2",
          "explanation": "This is a perfect square, since $x^2+4x+4=(x+2)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite fully factorised",
          "workingLatex": "\\dfrac{(x+2)(x-3)(x+3)}{(x-3)(x+2)(x+2)}",
          "explanation": "With everything as products, the factors shared between top and bottom are visible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factors",
          "workingLatex": "\\dfrac{(x+2)(x-3)(x+3)}{(x-3)(x+2)(x+2)}=\\dfrac{x+3}{x+2}",
          "explanation": "Cancelling $(x-3)$ and one $(x+2)$ from top and bottom leaves $\\dfrac{x+3}{x+2}$, valid provided those factors are non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{x+3}{x+2}",
          "explanation": "No common factor remains, so this is the fully simplified product.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x+3}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "dividing fractions", "reciprocal", "factorising"],
    "questionText": "Simplify fully: $\\dfrac{x^2-1}{x+4}\\div\\dfrac{x-1}{x^2-16}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Change division to multiplication by the reciprocal",
          "workingLatex": "\\dfrac{x^2-1}{x+4}\\div\\dfrac{x-1}{x^2-16}=\\dfrac{x^2-1}{x+4}\\times\\dfrac{x^2-16}{x-1}",
          "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal, so we flip the second fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the numerator as a difference of two squares",
          "workingLatex": "x^2-1=(x-1)(x+1)",
          "explanation": "A difference of two squares factorises as $(x-1)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the other difference of two squares",
          "workingLatex": "x^2-16=(x-4)(x+4)",
          "explanation": "This is also a difference of two squares, giving $(x-4)(x+4)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write as a single fraction, fully factorised",
          "workingLatex": "\\dfrac{(x-1)(x+1)(x-4)(x+4)}{(x+4)(x-1)}",
          "explanation": "Multiplying the numerators and denominators together shows all the factors in one place.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factors",
          "workingLatex": "\\dfrac{(x-1)(x+1)(x-4)(x+4)}{(x+4)(x-1)}=(x+1)(x-4)",
          "explanation": "Cancelling $(x-1)$ and $(x+4)$ from top and bottom leaves $(x+1)(x-4)$, valid provided those factors are non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "(x+1)(x-4)",
          "explanation": "The denominator has fully cancelled, leaving the product $(x+1)(x-4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x+1)(x-4)$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "multiplying fractions", "factorising", "cancelling common factors"],
    "questionText": "Simplify fully: $\\dfrac{x^2-4}{x^2+6x+5}\\times\\dfrac{x+5}{x-2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Combine into a single fraction",
          "workingLatex": "\\dfrac{x^2-4}{x^2+6x+5}\\times\\dfrac{x+5}{x-2}=\\dfrac{(x^2-4)(x+5)}{(x^2+6x+5)(x-2)}",
          "explanation": "To multiply fractions we multiply the numerators together and the denominators together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the numerator as a difference of two squares",
          "workingLatex": "x^2-4=(x-2)(x+2)",
          "explanation": "A difference of two squares factorises as $(x-2)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the denominator quadratic",
          "workingLatex": "x^2+6x+5=(x+1)(x+5)",
          "explanation": "Two numbers that multiply to $5$ and add to $6$ are $1$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite fully factorised",
          "workingLatex": "\\dfrac{(x-2)(x+2)(x+5)}{(x+1)(x+5)(x-2)}",
          "explanation": "With everything as products, the factors shared between top and bottom stand out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factors",
          "workingLatex": "\\dfrac{(x-2)(x+2)(x+5)}{(x+1)(x+5)(x-2)}=\\dfrac{x+2}{x+1}",
          "explanation": "Cancelling $(x-2)$ and $(x+5)$ from top and bottom leaves $\\dfrac{x+2}{x+1}$, valid provided those factors are non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{x+2}{x+1}",
          "explanation": "No common factor remains, so this is the fully simplified product.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x+2}{x+1}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "common numerical factor", "factorising", "simplifying"],
    "questionText": "Simplify fully: $\\dfrac{2x^2-2}{x^2+2x+1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take out the common numerical factor in the numerator",
          "workingLatex": "2x^2-2=2(x^2-1)",
          "explanation": "Both terms share a factor of $2$, so removing it first reveals a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Finish factorising the numerator",
          "workingLatex": "2(x^2-1)=2(x-1)(x+1)",
          "explanation": "The bracket $x^2-1$ is a difference of two squares, giving $(x-1)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the denominator",
          "workingLatex": "x^2+2x+1=(x+1)^2",
          "explanation": "This is a perfect square, since $x^2+2x+1=(x+1)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the fraction in factorised form",
          "workingLatex": "\\dfrac{2x^2-2}{x^2+2x+1}=\\dfrac{2(x-1)(x+1)}{(x+1)(x+1)}",
          "explanation": "With everything written as products, the shared factor is easy to see.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{2(x-1)(x+1)}{(x+1)(x+1)}=\\dfrac{2(x-1)}{x+1}",
          "explanation": "Cancelling one $(x+1)$ from top and bottom leaves a single $(x+1)$ below, valid provided $x+1\\neq0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\dfrac{2(x-1)}{x+1}",
          "explanation": "The constant $2$ stays with the numerator and no common factor remains, so this is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2(x-1)}{x+1}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "adding fractions", "common denominator"],
    "questionText": "Express $\\dfrac{3}{x+1}+\\dfrac{2}{x+2}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x+1 \\quad\\text{and}\\quad x+2",
          "explanation": "The two fractions have different bottoms, so before we can add them we must first see what each denominator is built from.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the lowest common denominator",
          "workingLatex": "(x+1)(x+2)",
          "explanation": "Since $x+1$ and $x+2$ share no common factor, the smallest expression both divide into is simply their product.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{3}{x+1}=\\dfrac{3(x+2)}{(x+1)(x+2)}",
          "explanation": "Multiplying top and bottom by $x+2$ does not change the value of the fraction but gives it the shared denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{2}{x+2}=\\dfrac{2(x+1)}{(x+1)(x+2)}",
          "explanation": "In the same way we multiply top and bottom by $x+1$ so this fraction also sits over $(x+1)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{3(x+2)+2(x+1)}{(x+1)(x+2)}",
          "explanation": "With matching denominators we can add the fractions by simply adding their numerators.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the brackets in the numerator",
          "workingLatex": "\\dfrac{3x+6+2x+2}{(x+1)(x+2)}",
          "explanation": "Expanding lets us see all the individual terms so we can collect them together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect like terms in the numerator",
          "workingLatex": "\\dfrac{5x+8}{(x+1)(x+2)}",
          "explanation": "Adding the $x$-terms and adding the constants gives a tidy linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{5x+8}{(x+1)(x+2)}",
          "explanation": "The numerator $5x+8$ shares no factor with the denominator, so the fraction is already in its simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{5x+8}{(x+1)(x+2)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "subtracting fractions", "common denominator"],
    "questionText": "Express $\\dfrac{5}{x-2}-\\dfrac{3}{x+1}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x-2 \\quad\\text{and}\\quad x+1",
          "explanation": "The fractions have different bottoms, so we first note the two denominators we need to work with.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the lowest common denominator",
          "workingLatex": "(x-2)(x+1)",
          "explanation": "The two linear factors have nothing in common, so their product is the smallest denominator both divide into.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{5}{x-2}=\\dfrac{5(x+1)}{(x-2)(x+1)}",
          "explanation": "Multiplying top and bottom by $x+1$ keeps the value the same while introducing the shared denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{3}{x+1}=\\dfrac{3(x-2)}{(x-2)(x+1)}",
          "explanation": "Multiplying top and bottom by $x-2$ puts this fraction over the same denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{5(x+1)-3(x-2)}{(x-2)(x+1)}",
          "explanation": "Because we are subtracting, the whole second numerator is taken away, so we keep it in a bracket to handle the sign carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the brackets in the numerator",
          "workingLatex": "\\dfrac{5x+5-3x+6}{(x-2)(x+1)}",
          "explanation": "Note that $-3\\times(-2)=+6$, so the subtraction flips that sign to a plus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect like terms in the numerator",
          "workingLatex": "\\dfrac{2x+11}{(x-2)(x+1)}",
          "explanation": "Combining the $x$-terms and the constants gives a simple linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{2x+11}{(x-2)(x+1)}",
          "explanation": "The numerator does not factorise to share anything with the denominator, so this is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2x+11}{(x-2)(x+1)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "adding fractions", "simplifying"],
    "questionText": "Express $\\dfrac{2}{x}+\\dfrac{3}{x+4}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x \\quad\\text{and}\\quad x+4",
          "explanation": "One denominator is a single $x$ and the other is $x+4$; noting them is the first step to a common bottom.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the lowest common denominator",
          "workingLatex": "x(x+4)",
          "explanation": "Since $x$ and $x+4$ have no common factor, the lowest common denominator is their product.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{2}{x}=\\dfrac{2(x+4)}{x(x+4)}",
          "explanation": "Multiplying top and bottom by $x+4$ gives this fraction the shared denominator without changing its value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{3}{x+4}=\\dfrac{3x}{x(x+4)}",
          "explanation": "Multiplying top and bottom by $x$ places this fraction over the same denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{2(x+4)+3x}{x(x+4)}",
          "explanation": "With a shared denominator the fractions add simply by adding their numerators.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket in the numerator",
          "workingLatex": "\\dfrac{2x+8+3x}{x(x+4)}",
          "explanation": "Expanding removes the bracket so we can gather the $x$-terms together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect like terms in the numerator",
          "workingLatex": "\\dfrac{5x+8}{x(x+4)}",
          "explanation": "Adding $2x$ and $3x$ gives $5x$, leaving a neat linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{5x+8}{x(x+4)}",
          "explanation": "The numerator $5x+8$ has no factor in common with $x$ or $x+4$, so the fraction is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{5x+8}{x(x+4)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "subtracting fractions", "common denominator"],
    "questionText": "Express $\\dfrac{4}{x+3}-\\dfrac{1}{x-1}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x+3 \\quad\\text{and}\\quad x-1",
          "explanation": "The fractions sit over different bottoms, so we begin by noting the two denominators.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the lowest common denominator",
          "workingLatex": "(x+3)(x-1)",
          "explanation": "With no shared factor between the two linear terms, their product is the lowest common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{4}{x+3}=\\dfrac{4(x-1)}{(x+3)(x-1)}",
          "explanation": "Multiplying top and bottom by $x-1$ gives the shared denominator while leaving the value unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{1}{x-1}=\\dfrac{1(x+3)}{(x+3)(x-1)}",
          "explanation": "Multiplying top and bottom by $x+3$ places this fraction over the same denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{4(x-1)-(x+3)}{(x+3)(x-1)}",
          "explanation": "Because we subtract, the entire second numerator is taken away, so we bracket it to keep the sign correct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the brackets in the numerator",
          "workingLatex": "\\dfrac{4x-4-x-3}{(x+3)(x-1)}",
          "explanation": "Subtracting the bracket flips both of its signs, turning $+x+3$ into $-x-3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect like terms in the numerator",
          "workingLatex": "\\dfrac{3x-7}{(x+3)(x-1)}",
          "explanation": "Combining the $x$-terms and the constants leaves a simple linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{3x-7}{(x+3)(x-1)}",
          "explanation": "The numerator does not share a factor with the denominator, so the fraction is in its simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3x-7}{(x+3)(x-1)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "adding fractions", "difference of two squares"],
    "questionText": "Express $\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x-1 \\quad\\text{and}\\quad x+1",
          "explanation": "The two denominators are the conjugate pair $x-1$ and $x+1$, which we note before combining.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the lowest common denominator",
          "workingLatex": "(x-1)(x+1)",
          "explanation": "These factors share nothing in common, so their product is the lowest common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{1}{x-1}=\\dfrac{x+1}{(x-1)(x+1)}",
          "explanation": "Multiplying top and bottom by $x+1$ gives the shared denominator without changing the value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{1}{x+1}=\\dfrac{x-1}{(x-1)(x+1)}",
          "explanation": "Multiplying top and bottom by $x-1$ places this fraction over the same denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{(x+1)+(x-1)}{(x-1)(x+1)}",
          "explanation": "With matching denominators we add the numerators directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{2x}{(x-1)(x+1)}",
          "explanation": "The $+1$ and $-1$ cancel, leaving $x+x=2x$ on the top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{2x}{(x-1)(x+1)}=\\dfrac{2x}{x^2-1}",
          "explanation": "The denominator is a difference of two squares, so it can equivalently be written as $x^2-1$; there is no common factor with $2x$ to cancel.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2x}{(x-1)(x+1)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "multiplying fractions", "difference of two squares", "simplifying"],
    "questionText": "Express $\\dfrac{x^2-9}{x+1}\\times\\dfrac{x+1}{x-3}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic numerator",
          "workingLatex": "x^2-9=(x-3)(x+3)",
          "explanation": "The numerator is a difference of two squares, so it factorises into $(x-3)(x+3)$ and reveals factors we may cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the product with the factorised numerator",
          "workingLatex": "\\dfrac{(x-3)(x+3)}{x+1}\\times\\dfrac{x+1}{x-3}",
          "explanation": "Replacing $x^2-9$ by its factors lets us see which parts match top and bottom.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the fractions into a single fraction",
          "workingLatex": "\\dfrac{(x-3)(x+3)(x+1)}{(x+1)(x-3)}",
          "explanation": "To multiply fractions we combine all numerators over the product of all denominators.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the common factor of x+1",
          "workingLatex": "\\dfrac{(x-3)(x+3)}{x-3}",
          "explanation": "An $x+1$ appears on both top and bottom, so their ratio is $1$ and they cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor of x-3",
          "workingLatex": "\\dfrac{x+3}{1}",
          "explanation": "Likewise $x-3$ appears top and bottom, so it cancels, leaving just the factor $x+3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final simplified expression",
          "workingLatex": "x+3",
          "explanation": "After both cancellations nothing remains in the denominator, so the answer is simply $x+3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x+3$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic fractions", "dividing fractions", "factorising denominators", "simplifying"],
    "questionText": "Express $\\dfrac{x+2}{x^2-1}\\div\\dfrac{x^2+4x+4}{x-1}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the division as multiplication by the reciprocal",
          "workingLatex": "\\dfrac{x+2}{x^2-1}\\times\\dfrac{x-1}{x^2+4x+4}",
          "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal, so we flip the second fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the first denominator",
          "workingLatex": "x^2-1=(x-1)(x+1)",
          "explanation": "This is a difference of two squares, so it factorises into $(x-1)(x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the second denominator",
          "workingLatex": "x^2+4x+4=(x+2)^2",
          "explanation": "This is a perfect square trinomial, so it factorises to $(x+2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the product with everything factorised",
          "workingLatex": "\\dfrac{x+2}{(x-1)(x+1)}\\times\\dfrac{x-1}{(x+2)^2}",
          "explanation": "Writing every part in factor form makes the matching factors easy to spot.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply into a single fraction",
          "workingLatex": "\\dfrac{(x+2)(x-1)}{(x-1)(x+1)(x+2)^2}",
          "explanation": "Combining all numerators over all denominators gives one fraction ready for cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor of x-1",
          "workingLatex": "\\dfrac{x+2}{(x+1)(x+2)^2}",
          "explanation": "The factor $x-1$ appears on both top and bottom, so it cancels.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel one factor of x+2",
          "workingLatex": "\\dfrac{1}{(x+1)(x+2)}",
          "explanation": "The single $x+2$ on top cancels one of the two on the bottom, leaving one $x+2$ below.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{1}{(x+1)(x+2)}",
          "explanation": "No factors remain in common, so the expression is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{(x+1)(x+2)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic fractions", "adding fractions", "common denominator"],
    "questionText": "Express $\\dfrac{2}{x+3}+\\dfrac{5}{x-2}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x+3 \\quad\\text{and}\\quad x-2",
          "explanation": "The fractions have different bottoms, so we note both denominators before combining.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the lowest common denominator",
          "workingLatex": "(x+3)(x-2)",
          "explanation": "The two linear factors share nothing, so their product is the lowest common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{2}{x+3}=\\dfrac{2(x-2)}{(x+3)(x-2)}",
          "explanation": "Multiplying top and bottom by $x-2$ gives the shared denominator without changing the value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{5}{x-2}=\\dfrac{5(x+3)}{(x+3)(x-2)}",
          "explanation": "Multiplying top and bottom by $x+3$ places this fraction over the same denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{2(x-2)+5(x+3)}{(x+3)(x-2)}",
          "explanation": "With matching denominators the fractions add by adding their numerators.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the brackets in the numerator",
          "workingLatex": "\\dfrac{2x-4+5x+15}{(x+3)(x-2)}",
          "explanation": "Expanding removes the brackets so we can collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect like terms in the numerator",
          "workingLatex": "\\dfrac{7x+11}{(x+3)(x-2)}",
          "explanation": "Adding the $x$-terms and the constants leaves a tidy linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{7x+11}{(x+3)(x-2)}",
          "explanation": "The numerator has no factor in common with the denominator, so the fraction is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{7x+11}{(x+3)(x-2)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic fractions", "adding fractions", "factorising denominators", "difference of two squares"],
    "questionText": "Express $\\dfrac{1}{x-2}+\\dfrac{1}{x^2-4}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x-2 \\quad\\text{and}\\quad x^2-4",
          "explanation": "One denominator is a quadratic, so we should factorise it before we can spot the lowest common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic denominator",
          "workingLatex": "x^2-4=(x-2)(x+2)",
          "explanation": "This is a difference of two squares, and factorising shows it already contains the factor $x-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the lowest common denominator",
          "workingLatex": "(x-2)(x+2)",
          "explanation": "Since the first denominator $x-2$ is already a factor of the second, the LCD is just $(x-2)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the expression with the factorised denominator",
          "workingLatex": "\\dfrac{1}{x-2}+\\dfrac{1}{(x-2)(x+2)}",
          "explanation": "Showing both fractions in factor form makes it clear what each still needs to reach the LCD.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{1}{x-2}=\\dfrac{x+2}{(x-2)(x+2)}",
          "explanation": "The first fraction only lacks the factor $x+2$, so we multiply its top and bottom by $x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the second fraction is already over the common denominator",
          "workingLatex": "\\dfrac{1}{(x-2)(x+2)}",
          "explanation": "The second fraction already has the full LCD, so it needs no adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{(x+2)+1}{(x-2)(x+2)}",
          "explanation": "With matching denominators we simply add the numerators.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{x+3}{(x-2)(x+2)}",
          "explanation": "Adding the constant $+2$ and $+1$ gives $x+3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check for any common factors to cancel",
          "workingLatex": "\\dfrac{x+3}{(x-2)(x+2)}",
          "explanation": "The numerator $x+3$ matches neither $x-2$ nor $x+2$, so nothing cancels.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{x+3}{(x-2)(x+2)}",
          "explanation": "The fraction is now a single expression in its simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x+3}{(x-2)(x+2)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic fractions", "subtracting fractions", "factorising denominators", "common denominator"],
    "questionText": "Express $\\dfrac{2}{x+1}-\\dfrac{3}{x^2+3x+2}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x+1 \\quad\\text{and}\\quad x^2+3x+2",
          "explanation": "The quadratic denominator should be factorised so we can find any shared factor with $x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic denominator",
          "workingLatex": "x^2+3x+2=(x+1)(x+2)",
          "explanation": "We need two numbers multiplying to $2$ and adding to $3$, namely $1$ and $2$, giving $(x+1)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the lowest common denominator",
          "workingLatex": "(x+1)(x+2)",
          "explanation": "The first denominator $x+1$ is already a factor of the second, so the LCD is $(x+1)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the expression with the factorised denominator",
          "workingLatex": "\\dfrac{2}{x+1}-\\dfrac{3}{(x+1)(x+2)}",
          "explanation": "Writing the second denominator in factor form shows what the first fraction still needs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{2}{x+1}=\\dfrac{2(x+2)}{(x+1)(x+2)}",
          "explanation": "The first fraction only lacks the factor $x+2$, so we multiply its top and bottom by $x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{2(x+2)-3}{(x+1)(x+2)}",
          "explanation": "The second fraction already sits over the LCD, so we subtract its numerator directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the bracket in the numerator",
          "workingLatex": "\\dfrac{2x+4-3}{(x+1)(x+2)}",
          "explanation": "Expanding $2(x+2)$ gives $2x+4$, ready to combine with the $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{2x+1}{(x+1)(x+2)}",
          "explanation": "Combining $+4$ and $-3$ leaves $2x+1$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check for any common factors to cancel",
          "workingLatex": "\\dfrac{2x+1}{(x+1)(x+2)}",
          "explanation": "The numerator $2x+1$ shares no factor with $x+1$ or $x+2$, so nothing cancels.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{2x+1}{(x+1)(x+2)}",
          "explanation": "This single fraction is now in its simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2x+1}{(x+1)(x+2)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["algebraic fractions", "subtracting fractions", "expanding brackets", "simplifying"],
    "questionText": "Express $\\dfrac{x+1}{x-2}-\\dfrac{x-1}{x+2}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x-2 \\quad\\text{and}\\quad x+2",
          "explanation": "The two denominators are the conjugate pair $x-2$ and $x+2$, which share no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the lowest common denominator",
          "workingLatex": "(x-2)(x+2)",
          "explanation": "As the factors have nothing in common, their product is the lowest common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{x+1}{x-2}=\\dfrac{(x+1)(x+2)}{(x-2)(x+2)}",
          "explanation": "Multiplying top and bottom by $x+2$ gives the shared denominator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{x-1}{x+2}=\\dfrac{(x-1)(x-2)}{(x-2)(x+2)}",
          "explanation": "Multiplying top and bottom by $x-2$ places this fraction over the same denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{(x+1)(x+2)-(x-1)(x-2)}{(x-2)(x+2)}",
          "explanation": "Because we subtract, the whole second numerator is enclosed in a bracket to handle the sign carefully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the first product in the numerator",
          "workingLatex": "(x+1)(x+2)=x^2+3x+2",
          "explanation": "Expanding gives the terms of the first numerator ready to combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the second product in the numerator",
          "workingLatex": "(x-1)(x-2)=x^2-3x+2",
          "explanation": "Expanding the second product gives the terms that will be subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the expansions and subtract carefully",
          "workingLatex": "\\dfrac{(x^2+3x+2)-(x^2-3x+2)}{(x-2)(x+2)}",
          "explanation": "Subtracting the bracket changes every sign inside it, so $-3x$ becomes $+3x$ and $+2$ becomes $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{6x}{(x-2)(x+2)}",
          "explanation": "The $x^2$ terms cancel and the constants cancel, leaving $3x+3x=6x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{6x}{(x-2)(x+2)}=\\dfrac{6x}{x^2-4}",
          "explanation": "The denominator is a difference of two squares, so it may also be written $x^2-4$; no factor of $6x$ matches it, so this is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{6x}{(x-2)(x+2)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["algebraic fractions", "adding fractions", "factorising denominators", "common denominator"],
    "questionText": "Express $\\dfrac{3}{x^2-x-2}+\\dfrac{2}{x^2-4}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x^2-x-2 \\quad\\text{and}\\quad x^2-4",
          "explanation": "Both denominators are quadratics, so we must factorise each to find their shared and distinct factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the first denominator",
          "workingLatex": "x^2-x-2=(x-2)(x+1)",
          "explanation": "We need two numbers multiplying to $-2$ and adding to $-1$, namely $-2$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the second denominator",
          "workingLatex": "x^2-4=(x-2)(x+2)",
          "explanation": "This is a difference of two squares, giving factors $(x-2)$ and $(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the lowest common denominator",
          "workingLatex": "(x-2)(x+1)(x+2)",
          "explanation": "The two denominators share the factor $x-2$, so the LCD uses it once alongside the distinct factors $x+1$ and $x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the expression with the factorised denominators",
          "workingLatex": "\\dfrac{3}{(x-2)(x+1)}+\\dfrac{2}{(x-2)(x+2)}",
          "explanation": "Writing everything in factor form shows exactly what each fraction is missing from the LCD.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{3}{(x-2)(x+1)}=\\dfrac{3(x+2)}{(x-2)(x+1)(x+2)}",
          "explanation": "The first fraction lacks the factor $x+2$, so we multiply its top and bottom by $x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{2}{(x-2)(x+2)}=\\dfrac{2(x+1)}{(x-2)(x+1)(x+2)}",
          "explanation": "The second fraction lacks the factor $x+1$, so we multiply its top and bottom by $x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{3(x+2)+2(x+1)}{(x-2)(x+1)(x+2)}",
          "explanation": "With a shared denominator we add the two numerators together.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the brackets in the numerator",
          "workingLatex": "\\dfrac{3x+6+2x+2}{(x-2)(x+1)(x+2)}",
          "explanation": "Expanding both products lets us collect the like terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect like terms in the numerator",
          "workingLatex": "\\dfrac{5x+8}{(x-2)(x+1)(x+2)}",
          "explanation": "Adding the $x$-terms and the constants gives $5x+8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{5x+8}{(x-2)(x+1)(x+2)}",
          "explanation": "The numerator shares no factor with any bracket below, so the fraction is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{5x+8}{(x-2)(x+1)(x+2)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic fractions", "adding fractions", "simplifying", "common denominator"],
    "questionText": "Express $\\dfrac{4}{x+2}+\\dfrac{3}{x-1}-\\dfrac{2}{x+2}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Scan the three fractions for shared denominators",
          "workingLatex": "\\dfrac{4}{x+2}+\\dfrac{3}{x-1}-\\dfrac{2}{x+2}",
          "explanation": "Two of the three fractions already share the denominator $x+2$, so it is easiest to combine those first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine the two fractions with denominator x+2",
          "workingLatex": "\\dfrac{4}{x+2}-\\dfrac{2}{x+2}=\\dfrac{2}{x+2}",
          "explanation": "Since these already share a denominator, we just subtract the numerators: $4-2=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the whole expression",
          "workingLatex": "\\dfrac{2}{x+2}+\\dfrac{3}{x-1}",
          "explanation": "The problem now reduces to adding just two fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the lowest common denominator",
          "workingLatex": "(x+2)(x-1)",
          "explanation": "The remaining denominators share no factor, so their product is the LCD.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the first fraction over the common denominator",
          "workingLatex": "\\dfrac{2}{x+2}=\\dfrac{2(x-1)}{(x+2)(x-1)}",
          "explanation": "Multiplying top and bottom by $x-1$ gives the shared denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{3}{x-1}=\\dfrac{3(x+2)}{(x+2)(x-1)}",
          "explanation": "Multiplying top and bottom by $x+2$ places this fraction over the same denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{2(x-1)+3(x+2)}{(x+2)(x-1)}",
          "explanation": "With a shared denominator we add the numerators.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the brackets in the numerator",
          "workingLatex": "\\dfrac{2x-2+3x+6}{(x+2)(x-1)}",
          "explanation": "Expanding both products prepares the terms to be collected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect like terms in the numerator",
          "workingLatex": "\\dfrac{5x+4}{(x+2)(x-1)}",
          "explanation": "Adding the $x$-terms and the constants gives $5x+4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{5x+4}{(x+2)(x-1)}",
          "explanation": "The numerator shares no factor with the denominator, so the fraction is fully simplified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{5x+4}{(x+2)(x-1)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic fractions", "subtracting fractions", "factorising denominators", "simplifying"],
    "questionText": "Express $\\dfrac{x+3}{x^2+2x}-\\dfrac{1}{x+2}$ as a single fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two denominators",
          "workingLatex": "x^2+2x \\quad\\text{and}\\quad x+2",
          "explanation": "The first denominator is a quadratic, so factorising it should reveal a shared factor with $x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the first denominator",
          "workingLatex": "x^2+2x=x(x+2)",
          "explanation": "Taking out the common factor $x$ shows the denominator contains the factor $x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the lowest common denominator",
          "workingLatex": "x(x+2)",
          "explanation": "The second denominator $x+2$ is already a factor of the first, so the LCD is $x(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the expression with the factorised denominator",
          "workingLatex": "\\dfrac{x+3}{x(x+2)}-\\dfrac{1}{x+2}",
          "explanation": "Writing the first denominator in factor form shows the first fraction is already over the LCD.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the second fraction over the common denominator",
          "workingLatex": "\\dfrac{1}{x+2}=\\dfrac{x}{x(x+2)}",
          "explanation": "The second fraction only lacks the factor $x$, so we multiply its top and bottom by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the numerators over the common denominator",
          "workingLatex": "\\dfrac{(x+3)-x}{x(x+2)}",
          "explanation": "With matching denominators we subtract the numerators, keeping the $-x$ in mind.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{3}{x(x+2)}",
          "explanation": "The $+x$ and $-x$ cancel, leaving just the constant $3$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check for any common factors to cancel",
          "workingLatex": "\\dfrac{3}{x(x+2)}",
          "explanation": "The numerator is a constant, so it shares no factor with the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final single fraction",
          "workingLatex": "\\dfrac{3}{x(x+2)}",
          "explanation": "This single fraction is now in its simplest form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3}{x(x+2)}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "cover-up method"],
    "questionText": "Express $\\dfrac{7x-1}{(x-1)(x+2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{7x-1}{(x-1)(x+2)} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{x+2}",
          "explanation": "Because the denominator is a product of two different linear factors, the fraction splits into one piece per factor. A linear denominator can only sit under a constant, so we place unknowns $A$ and $B$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "7x-1 \\equiv A(x+2) + B(x-1)",
          "explanation": "Clearing the denominators turns the equation into a polynomial identity, which is far easier to handle than fractions. Each unknown is now multiplied by the factor that did not cancel it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "7x-1 \\equiv A(x+2) + B(x-1) \\quad \\text{for all } x",
          "explanation": "An identity is true for every value of $x$, so we may choose whichever values make the work easiest. Picking a root of a factor makes that factor zero and switches its unknown off.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1 to find A",
          "workingLatex": "\\text{Let } x = 1: \\quad 7(1)-1 = A(1+2) + B(1-1) \\;\\Rightarrow\\; 6 = 3A",
          "explanation": "Setting $x=1$ makes the $(x-1)$ term vanish, leaving an equation in $A$ alone. This is the cover-up idea: the other unknown is switched off.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{6}{3} = 2",
          "explanation": "Dividing both sides by $3$ gives $A$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -2 to find B",
          "workingLatex": "\\text{Let } x = -2: \\quad 7(-2)-1 = A(-2+2) + B(-2-1) \\;\\Rightarrow\\; -15 = -3B",
          "explanation": "Now $x=-2$ kills the $A$ term, isolating $B$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{-15}{-3} = 5",
          "explanation": "Dividing both sides by $-3$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{7x-1}{(x-1)(x+2)} \\equiv \\dfrac{2}{x-1} + \\dfrac{5}{x+2}",
          "explanation": "Substituting the constants back gives the finished decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{2}{x-1} + \\dfrac{5}{x+2} = \\dfrac{2(x+2) + 5(x-1)}{(x-1)(x+2)}",
          "explanation": "To verify, add the two fractions back together over the common denominator; the pieces should reassemble into what we started with.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{2x+4 + 5x-5}{(x-1)(x+2)} = \\dfrac{7x-1}{(x-1)(x+2)}",
          "explanation": "Expanding the top returns the original numerator $7x-1$, so the decomposition is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x-1}+\\dfrac{5}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "algebraic fractions"],
    "questionText": "Express $\\dfrac{3x+7}{(x+1)(x+3)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{3x+7}{(x+1)(x+3)} \\equiv \\dfrac{A}{x+1} + \\dfrac{B}{x+3}",
          "explanation": "The denominator is a product of two distinct linear factors, so each factor gives its own fraction with a constant numerator to be found.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "3x+7 \\equiv A(x+3) + B(x+1)",
          "explanation": "Multiplying by $(x+1)(x+3)$ removes the fractions, leaving a clean polynomial identity to solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "3x+7 \\equiv A(x+3) + B(x+1) \\quad \\text{for all } x",
          "explanation": "Since the statement is true for every $x$, we substitute the roots of the factors to switch off one unknown at a time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -1 to find A",
          "workingLatex": "\\text{Let } x = -1: \\quad 3(-1)+7 = A(-1+3) + B(-1+1) \\;\\Rightarrow\\; 4 = 2A",
          "explanation": "Choosing $x=-1$ makes the $(x+1)$ term zero, so only $A$ survives.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{4}{2} = 2",
          "explanation": "Dividing by $2$ gives the value of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -3 to find B",
          "workingLatex": "\\text{Let } x = -3: \\quad 3(-3)+7 = A(-3+3) + B(-3+1) \\;\\Rightarrow\\; -2 = -2B",
          "explanation": "Now $x=-3$ removes the $A$ term, leaving $B$ by itself.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{-2}{-2} = 1",
          "explanation": "Dividing by $-2$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{3x+7}{(x+1)(x+3)} \\equiv \\dfrac{2}{x+1} + \\dfrac{1}{x+3}",
          "explanation": "Putting the constants back in place completes the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{2}{x+1} + \\dfrac{1}{x+3} = \\dfrac{2(x+3) + 1(x+1)}{(x+1)(x+3)}",
          "explanation": "Adding the fractions back should return the original expression if the constants are right.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{2x+6 + x+1}{(x+1)(x+3)} = \\dfrac{3x+7}{(x+1)(x+3)}",
          "explanation": "The top simplifies back to $3x+7$, confirming the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x+1}+\\dfrac{1}{x+3}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "cover-up method"],
    "questionText": "Express $\\dfrac{5x+4}{(x-1)(x+2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{5x+4}{(x-1)(x+2)} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{x+2}",
          "explanation": "Two distinct linear factors on the bottom mean two separate fractions, each carrying an unknown constant on top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "5x+4 \\equiv A(x+2) + B(x-1)",
          "explanation": "Clearing the fractions gives a polynomial identity where each unknown is paired with the factor it does not cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "5x+4 \\equiv A(x+2) + B(x-1) \\quad \\text{for all } x",
          "explanation": "Because both sides agree for every $x$, we pick the roots of the factors to isolate one constant at a time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1 to find A",
          "workingLatex": "\\text{Let } x = 1: \\quad 5(1)+4 = A(1+2) + B(1-1) \\;\\Rightarrow\\; 9 = 3A",
          "explanation": "At $x=1$ the $(x-1)$ term disappears, leaving an equation in $A$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{9}{3} = 3",
          "explanation": "Dividing by $3$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -2 to find B",
          "workingLatex": "\\text{Let } x = -2: \\quad 5(-2)+4 = A(-2+2) + B(-2-1) \\;\\Rightarrow\\; -6 = -3B",
          "explanation": "At $x=-2$ the $A$ term vanishes, leaving $B$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{-6}{-3} = 2",
          "explanation": "Dividing by $-3$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{5x+4}{(x-1)(x+2)} \\equiv \\dfrac{3}{x-1} + \\dfrac{2}{x+2}",
          "explanation": "Replacing $A$ and $B$ with their values gives the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{3}{x-1} + \\dfrac{2}{x+2} = \\dfrac{3(x+2) + 2(x-1)}{(x-1)(x+2)}",
          "explanation": "Recombining the fractions should reproduce the original numerator if all is well.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{3x+6 + 2x-2}{(x-1)(x+2)} = \\dfrac{5x+4}{(x-1)(x+2)}",
          "explanation": "The numerator collapses back to $5x+4$, so the result checks out.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3}{x-1}+\\dfrac{2}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "algebraic fractions"],
    "questionText": "Express $\\dfrac{6x-2}{(x+1)(x-3)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{6x-2}{(x+1)(x-3)} \\equiv \\dfrac{A}{x+1} + \\dfrac{B}{x-3}",
          "explanation": "With two distinct linear factors underneath, we write one fraction per factor, each with a constant to determine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "6x-2 \\equiv A(x-3) + B(x+1)",
          "explanation": "Multiplying out by $(x+1)(x-3)$ removes the fractions and gives a polynomial identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "6x-2 \\equiv A(x-3) + B(x+1) \\quad \\text{for all } x",
          "explanation": "Since the identity holds for all $x$, substituting the roots of the factors lets us find each constant separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -1 to find A",
          "workingLatex": "\\text{Let } x = -1: \\quad 6(-1)-2 = A(-1-3) + B(-1+1) \\;\\Rightarrow\\; -8 = -4A",
          "explanation": "Choosing $x=-1$ zeroes the $(x+1)$ term, leaving just $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{-8}{-4} = 2",
          "explanation": "Dividing by $-4$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 3 to find B",
          "workingLatex": "\\text{Let } x = 3: \\quad 6(3)-2 = A(3-3) + B(3+1) \\;\\Rightarrow\\; 16 = 4B",
          "explanation": "At $x=3$ the $A$ term drops out, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{16}{4} = 4",
          "explanation": "Dividing by $4$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{6x-2}{(x+1)(x-3)} \\equiv \\dfrac{2}{x+1} + \\dfrac{4}{x-3}",
          "explanation": "Inserting the constants finishes the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{2}{x+1} + \\dfrac{4}{x-3} = \\dfrac{2(x-3) + 4(x+1)}{(x+1)(x-3)}",
          "explanation": "Adding the fractions back over their common denominator should return the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{2x-6 + 4x+4}{(x+1)(x-3)} = \\dfrac{6x-2}{(x+1)(x-3)}",
          "explanation": "The numerator simplifies to $6x-2$, matching the original, so the answer is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x+1}+\\dfrac{4}{x-3}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "cover-up method"],
    "questionText": "Express $\\dfrac{4x^2-4x-2}{x(x+1)(x-2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{4x^2-4x-2}{x(x+1)(x-2)} \\equiv \\dfrac{A}{x} + \\dfrac{B}{x+1} + \\dfrac{C}{x-2}",
          "explanation": "There are three distinct linear factors, so the fraction splits into three pieces, each with its own constant on top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "4x^2-4x-2 \\equiv A(x+1)(x-2) + Bx(x-2) + Cx(x+1)",
          "explanation": "Clearing all three denominators gives a polynomial identity; each unknown keeps the two factors it does not cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "4x^2-4x-2 \\equiv A(x+1)(x-2) + Bx(x-2) + Cx(x+1) \\quad \\text{for all } x",
          "explanation": "Because it is true for every $x$, substituting each root switches off two of the three terms at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 0 to find A",
          "workingLatex": "\\text{Let } x = 0: \\quad 4(0)^2-4(0)-2 = A(1)(-2) \\;\\Rightarrow\\; -2 = -2A",
          "explanation": "At $x=0$ both the $B$ and $C$ terms contain the factor $x$ and vanish, leaving only $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{-2}{-2} = 1",
          "explanation": "Dividing by $-2$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -1 to find B",
          "workingLatex": "\\text{Let } x = -1: \\quad 4(-1)^2-4(-1)-2 = B(-1)(-1-2) \\;\\Rightarrow\\; 6 = 3B",
          "explanation": "At $x=-1$ the $A$ and $C$ terms both carry the factor $(x+1)$ and disappear, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{6}{3} = 2",
          "explanation": "Dividing by $3$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 2 to find C",
          "workingLatex": "\\text{Let } x = 2: \\quad 4(2)^2-4(2)-2 = C(2)(2+1) \\;\\Rightarrow\\; 6 = 6C",
          "explanation": "At $x=2$ the $A$ and $B$ terms both contain $(x-2)$ and vanish, leaving only $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for C",
          "workingLatex": "C = \\dfrac{6}{6} = 1",
          "explanation": "Dividing by $6$ gives $C$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{4x^2-4x-2}{x(x+1)(x-2)} \\equiv \\dfrac{1}{x} + \\dfrac{2}{x+1} + \\dfrac{1}{x-2}",
          "explanation": "Substituting the three constants back gives the finished decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by recombining the numerators",
          "workingLatex": "1(x+1)(x-2) + 2x(x-2) + 1\\cdot x(x+1) = (x^2-x-2) + (2x^2-4x) + (x^2+x)",
          "explanation": "Rebuilding the single numerator from the three terms should recover the original top line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "= 4x^2 - 4x - 2",
          "explanation": "Collecting like terms returns $4x^2-4x-2$, confirming the decomposition is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x}+\\dfrac{2}{x+1}+\\dfrac{1}{x-2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "cover-up method", "algebraic fractions"],
    "questionText": "Express $\\dfrac{4x^2+5x+3}{(x-1)(x+1)(x+2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{4x^2+5x+3}{(x-1)(x+1)(x+2)} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{x+1} + \\dfrac{C}{x+2}",
          "explanation": "Three distinct linear factors on the bottom produce three separate fractions, each with a constant numerator to find.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "4x^2+5x+3 \\equiv A(x+1)(x+2) + B(x-1)(x+2) + C(x-1)(x+1)",
          "explanation": "Clearing all three denominators leaves a polynomial identity; each unknown keeps the two factors it is not sitting over.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "4x^2+5x+3 \\equiv A(x+1)(x+2) + B(x-1)(x+2) + C(x-1)(x+1) \\quad \\text{for all } x",
          "explanation": "As the identity holds for every $x$, choosing each root kills two terms and reveals one constant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1 to find A",
          "workingLatex": "\\text{Let } x = 1: \\quad 4(1)^2+5(1)+3 = A(2)(3) \\;\\Rightarrow\\; 12 = 6A",
          "explanation": "At $x=1$ the $B$ and $C$ terms both contain $(x-1)$ and vanish, leaving only $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{12}{6} = 2",
          "explanation": "Dividing by $6$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -1 to find B",
          "workingLatex": "\\text{Let } x = -1: \\quad 4(-1)^2+5(-1)+3 = B(-2)(1) \\;\\Rightarrow\\; 2 = -2B",
          "explanation": "At $x=-1$ the $A$ and $C$ terms both carry $(x+1)$ and disappear, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{2}{-2} = -1",
          "explanation": "Dividing by $-2$ gives a negative value for $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = -2 to find C",
          "workingLatex": "\\text{Let } x = -2: \\quad 4(-2)^2+5(-2)+3 = C(-3)(-1) \\;\\Rightarrow\\; 9 = 3C",
          "explanation": "At $x=-2$ the $A$ and $B$ terms both contain $(x+2)$ and vanish, leaving only $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for C",
          "workingLatex": "C = \\dfrac{9}{3} = 3",
          "explanation": "Dividing by $3$ gives $C$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{4x^2+5x+3}{(x-1)(x+1)(x+2)} \\equiv \\dfrac{2}{x-1} - \\dfrac{1}{x+1} + \\dfrac{3}{x+2}",
          "explanation": "The negative $B$ becomes a minus sign in the decomposition; the rest follow directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by recombining the numerators",
          "workingLatex": "2(x+1)(x+2) - 1(x-1)(x+2) + 3(x-1)(x+1) = (2x^2+6x+4) - (x^2+x-2) + (3x^2-3)",
          "explanation": "Reassembling the single numerator from the three terms should reproduce the original top line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "= 4x^2 + 5x + 3",
          "explanation": "Collecting terms returns $4x^2+5x+3$, so the decomposition is verified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x-1}-\\dfrac{1}{x+1}+\\dfrac{3}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["partial fractions", "factorising denominator", "distinct linear factors"],
    "questionText": "Express $\\dfrac{3x+1}{x^2-x-6}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-x-6 = (x-3)(x+2)",
          "explanation": "The denominator is given unfactorised, so we first factorise it: we need two numbers multiplying to $-6$ and adding to $-1$, namely $-3$ and $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{3x+1}{(x-3)(x+2)} \\equiv \\dfrac{A}{x-3} + \\dfrac{B}{x+2}",
          "explanation": "Now that the bottom is a product of two distinct linear factors, each factor supplies one fraction with a constant on top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by the denominator",
          "workingLatex": "3x+1 \\equiv A(x+2) + B(x-3)",
          "explanation": "Clearing the fractions gives a polynomial identity that is easier to solve than the original fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "3x+1 \\equiv A(x+2) + B(x-3) \\quad \\text{for all } x",
          "explanation": "Because the identity is true for every $x$, substituting the roots isolates each constant in turn.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 3 to find A",
          "workingLatex": "\\text{Let } x = 3: \\quad 3(3)+1 = A(3+2) + B(3-3) \\;\\Rightarrow\\; 10 = 5A",
          "explanation": "At $x=3$ the $(x-3)$ term vanishes, leaving only $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{10}{5} = 2",
          "explanation": "Dividing by $5$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = -2 to find B",
          "workingLatex": "\\text{Let } x = -2: \\quad 3(-2)+1 = A(-2+2) + B(-2-3) \\;\\Rightarrow\\; -5 = -5B",
          "explanation": "At $x=-2$ the $A$ term drops out, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{-5}{-5} = 1",
          "explanation": "Dividing by $-5$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{3x+1}{x^2-x-6} \\equiv \\dfrac{2}{x-3} + \\dfrac{1}{x+2}",
          "explanation": "Placing the constants back gives the completed decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{2}{x-3} + \\dfrac{1}{x+2} = \\dfrac{2(x+2) + 1(x-3)}{(x-3)(x+2)}",
          "explanation": "Adding the fractions back should reproduce the original numerator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{2x+4 + x-3}{(x-3)(x+2)} = \\dfrac{3x+1}{x^2-x-6}",
          "explanation": "The top simplifies to $3x+1$, matching the original, so the answer is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x-3}+\\dfrac{1}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["partial fractions", "factorising denominator", "cover-up method"],
    "questionText": "Express $\\dfrac{3x-5}{x^2-x-12}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-x-12 = (x-4)(x+3)",
          "explanation": "First factorise the quadratic denominator: we need two numbers with product $-12$ and sum $-1$, namely $-4$ and $+3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{3x-5}{(x-4)(x+3)} \\equiv \\dfrac{A}{x-4} + \\dfrac{B}{x+3}",
          "explanation": "With two distinct linear factors on the bottom, we write one fraction per factor with an unknown constant on top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by the denominator",
          "workingLatex": "3x-5 \\equiv A(x+3) + B(x-4)",
          "explanation": "Multiplying out removes the fractions, giving a polynomial identity to work with.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "3x-5 \\equiv A(x+3) + B(x-4) \\quad \\text{for all } x",
          "explanation": "Since the identity holds for every $x$, we substitute the roots of the factors to find the constants one at a time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 4 to find A",
          "workingLatex": "\\text{Let } x = 4: \\quad 3(4)-5 = A(4+3) + B(4-4) \\;\\Rightarrow\\; 7 = 7A",
          "explanation": "At $x=4$ the $(x-4)$ term vanishes, leaving only $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{7}{7} = 1",
          "explanation": "Dividing by $7$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = -3 to find B",
          "workingLatex": "\\text{Let } x = -3: \\quad 3(-3)-5 = A(-3+3) + B(-3-4) \\;\\Rightarrow\\; -14 = -7B",
          "explanation": "At $x=-3$ the $A$ term drops out, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{-14}{-7} = 2",
          "explanation": "Dividing by $-7$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{3x-5}{x^2-x-12} \\equiv \\dfrac{1}{x-4} + \\dfrac{2}{x+3}",
          "explanation": "Substituting the constants back completes the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{1}{x-4} + \\dfrac{2}{x+3} = \\dfrac{1(x+3) + 2(x-4)}{(x-4)(x+3)}",
          "explanation": "Recombining the fractions should reproduce the original numerator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{x+3 + 2x-8}{(x-4)(x+3)} = \\dfrac{3x-5}{x^2-x-12}",
          "explanation": "The numerator simplifies to $3x-5$, matching the original, so the answer checks out.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x-4}+\\dfrac{2}{x+3}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "cover-up method"],
    "questionText": "Express $\\dfrac{5x-2}{(2x+1)(x-1)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{5x-2}{(2x+1)(x-1)} \\equiv \\dfrac{A}{2x+1} + \\dfrac{B}{x-1}",
          "explanation": "The factors $(2x+1)$ and $(x-1)$ are distinct and linear, so each carries a constant numerator; the leading $2$ in $2x+1$ does not change the form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "5x-2 \\equiv A(x-1) + B(2x+1)",
          "explanation": "Clearing the fractions gives a polynomial identity where each constant is paired with the factor it does not sit over.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "5x-2 \\equiv A(x-1) + B(2x+1) \\quad \\text{for all } x",
          "explanation": "Since it holds for every $x$, we substitute the value that makes each factor zero, including the fractional root of $2x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1 to find B",
          "workingLatex": "\\text{Let } x = 1: \\quad 5(1)-2 = A(1-1) + B(2+1) \\;\\Rightarrow\\; 3 = 3B",
          "explanation": "At $x=1$ the $(x-1)$ term vanishes, leaving only $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{3}{3} = 1",
          "explanation": "Dividing by $3$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -1/2 to find A",
          "workingLatex": "\\text{Let } x = -\\tfrac{1}{2}: \\quad 5(-\\tfrac{1}{2})-2 = A(-\\tfrac{1}{2}-1) + B(0) \\;\\Rightarrow\\; -\\tfrac{9}{2} = -\\tfrac{3}{2}A",
          "explanation": "The root of $2x+1$ is $x=-\\tfrac{1}{2}$; substituting it makes the $(2x+1)$ factor zero and switches off $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{-\\tfrac{9}{2}}{-\\tfrac{3}{2}} = 3",
          "explanation": "Dividing the two fractions (the halves cancel) gives $A=3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{5x-2}{(2x+1)(x-1)} \\equiv \\dfrac{3}{2x+1} + \\dfrac{1}{x-1}",
          "explanation": "Substituting the constants back gives the completed decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{3}{2x+1} + \\dfrac{1}{x-1} = \\dfrac{3(x-1) + 1(2x+1)}{(2x+1)(x-1)}",
          "explanation": "Adding the fractions back should return the original numerator.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{3x-3 + 2x+1}{(2x+1)(x-1)} = \\dfrac{5x-2}{(2x+1)(x-1)}",
          "explanation": "The numerator simplifies to $5x-2$, confirming the decomposition is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3}{2x+1}+\\dfrac{1}{x-1}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "constant numerator"],
    "questionText": "Express $\\dfrac{5}{(2x-1)(x+2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{5}{(2x-1)(x+2)} \\equiv \\dfrac{A}{2x-1} + \\dfrac{B}{x+2}",
          "explanation": "Even though the numerator is just the constant $5$, the method is unchanged: two distinct linear factors give two fractions with constants on top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "5 \\equiv A(x+2) + B(2x-1)",
          "explanation": "Clearing the fractions gives a polynomial identity; the left-hand side is simply the constant $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "5 \\equiv A(x+2) + B(2x-1) \\quad \\text{for all } x",
          "explanation": "As it is true for every $x$, we substitute the roots of the factors, including the fractional root of $2x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -2 to find B",
          "workingLatex": "\\text{Let } x = -2: \\quad 5 = A(0) + B(2(-2)-1) \\;\\Rightarrow\\; 5 = -5B",
          "explanation": "At $x=-2$ the $(x+2)$ term vanishes, leaving only $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{5}{-5} = -1",
          "explanation": "Dividing by $-5$ gives a negative value for $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1/2 to find A",
          "workingLatex": "\\text{Let } x = \\tfrac{1}{2}: \\quad 5 = A(\\tfrac{1}{2}+2) + B(0) \\;\\Rightarrow\\; 5 = \\tfrac{5}{2}A",
          "explanation": "The root of $2x-1$ is $x=\\tfrac{1}{2}$; substituting it makes the $(2x-1)$ factor zero and switches off $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for A",
          "workingLatex": "A = 5 \\times \\dfrac{2}{5} = 2",
          "explanation": "Multiplying both sides by $\\tfrac{2}{5}$ gives $A=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{5}{(2x-1)(x+2)} \\equiv \\dfrac{2}{2x-1} - \\dfrac{1}{x+2}",
          "explanation": "The negative $B$ appears as a minus sign in the finished decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{2}{2x-1} - \\dfrac{1}{x+2} = \\dfrac{2(x+2) - 1(2x-1)}{(2x-1)(x+2)}",
          "explanation": "Recombining the fractions should return the constant numerator we began with.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{2x+4 - 2x+1}{(2x-1)(x+2)} = \\dfrac{5}{(2x-1)(x+2)}",
          "explanation": "The $x$ terms cancel and the numerator becomes $5$, matching the original, so the answer is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{2x-1}-\\dfrac{1}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "constant numerator", "cover-up method"],
    "questionText": "Express $\\dfrac{2}{(x-1)(x-2)(x-3)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{2}{(x-1)(x-2)(x-3)} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{x-2} + \\dfrac{C}{x-3}",
          "explanation": "Three distinct linear factors give three fractions; the constant numerator $2$ does not change the shape of the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "2 \\equiv A(x-2)(x-3) + B(x-1)(x-3) + C(x-1)(x-2)",
          "explanation": "Clearing all three denominators leaves a polynomial identity; each unknown keeps the two factors it does not cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "2 \\equiv A(x-2)(x-3) + B(x-1)(x-3) + C(x-1)(x-2) \\quad \\text{for all } x",
          "explanation": "Because it is true for every $x$, substituting each root switches off two of the three terms at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1 to find A",
          "workingLatex": "\\text{Let } x = 1: \\quad 2 = A(1-2)(1-3) \\;\\Rightarrow\\; 2 = 2A",
          "explanation": "At $x=1$ the $B$ and $C$ terms contain $(x-1)$ and vanish, leaving only $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{2}{2} = 1",
          "explanation": "Dividing by $2$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 2 to find B",
          "workingLatex": "\\text{Let } x = 2: \\quad 2 = B(2-1)(2-3) \\;\\Rightarrow\\; 2 = -B",
          "explanation": "At $x=2$ the $A$ and $C$ terms contain $(x-2)$ and disappear, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = -2",
          "explanation": "From $2=-B$ we read off $B=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 3 to find C",
          "workingLatex": "\\text{Let } x = 3: \\quad 2 = C(3-1)(3-2) \\;\\Rightarrow\\; 2 = 2C",
          "explanation": "At $x=3$ the $A$ and $B$ terms contain $(x-3)$ and vanish, leaving only $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for C",
          "workingLatex": "C = \\dfrac{2}{2} = 1",
          "explanation": "Dividing by $2$ gives $C$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{2}{(x-1)(x-2)(x-3)} \\equiv \\dfrac{1}{x-1} - \\dfrac{2}{x-2} + \\dfrac{1}{x-3}",
          "explanation": "The negative $B$ becomes a minus sign; substituting all three constants completes the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by recombining the numerators",
          "workingLatex": "1(x-2)(x-3) - 2(x-1)(x-3) + 1(x-1)(x-2) = (x^2-5x+6) - 2(x^2-4x+3) + (x^2-3x+2)",
          "explanation": "Rebuilding the single numerator from the three terms should recover the constant $2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "= (1-2+1)x^2 + (-5+8-3)x + (6-6+2) = 2",
          "explanation": "The $x^2$ and $x$ terms cancel, leaving $2$, so the decomposition is verified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x-1}-\\dfrac{2}{x-2}+\\dfrac{1}{x-3}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "cover-up method", "algebraic fractions"],
    "questionText": "Express $\\dfrac{2x^2-9x-6}{x(x+2)(x-3)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{2x^2-9x-6}{x(x+2)(x-3)} \\equiv \\dfrac{A}{x} + \\dfrac{B}{x+2} + \\dfrac{C}{x-3}",
          "explanation": "Three distinct linear factors on the bottom give three fractions, each with a constant numerator to determine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "2x^2-9x-6 \\equiv A(x+2)(x-3) + Bx(x-3) + Cx(x+2)",
          "explanation": "Clearing the denominators leaves a polynomial identity; each unknown keeps the two factors it does not sit over.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "2x^2-9x-6 \\equiv A(x+2)(x-3) + Bx(x-3) + Cx(x+2) \\quad \\text{for all } x",
          "explanation": "As the identity holds for every $x$, choosing each root kills two terms and reveals one constant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 0 to find A",
          "workingLatex": "\\text{Let } x = 0: \\quad 2(0)^2-9(0)-6 = A(2)(-3) \\;\\Rightarrow\\; -6 = -6A",
          "explanation": "At $x=0$ the $B$ and $C$ terms both contain the factor $x$ and vanish, leaving only $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{-6}{-6} = 1",
          "explanation": "Dividing by $-6$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -2 to find B",
          "workingLatex": "\\text{Let } x = -2: \\quad 2(-2)^2-9(-2)-6 = B(-2)(-2-3) \\;\\Rightarrow\\; 20 = 10B",
          "explanation": "At $x=-2$ the $A$ and $C$ terms both carry $(x+2)$ and disappear, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{20}{10} = 2",
          "explanation": "Dividing by $10$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 3 to find C",
          "workingLatex": "\\text{Let } x = 3: \\quad 2(3)^2-9(3)-6 = C(3)(3+2) \\;\\Rightarrow\\; -15 = 15C",
          "explanation": "At $x=3$ the $A$ and $B$ terms both contain $(x-3)$ and vanish, leaving only $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for C",
          "workingLatex": "C = \\dfrac{-15}{15} = -1",
          "explanation": "Dividing by $15$ gives a negative value for $C$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{2x^2-9x-6}{x(x+2)(x-3)} \\equiv \\dfrac{1}{x} + \\dfrac{2}{x+2} - \\dfrac{1}{x-3}",
          "explanation": "The negative $C$ appears as a minus sign; substituting all three constants completes the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check by recombining the numerators",
          "workingLatex": "1(x+2)(x-3) + 2x(x-3) - 1\\cdot x(x+2) = (x^2-x-6) + (2x^2-6x) - (x^2+2x)",
          "explanation": "Reassembling the single numerator from the three terms should reproduce the original top line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "= 2x^2 - 9x - 6",
          "explanation": "Collecting like terms returns $2x^2-9x-6$, confirming the decomposition is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x}+\\dfrac{2}{x+2}-\\dfrac{1}{x-3}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "cover-up method"],
    "questionText": "Express $\\dfrac{4x-10}{(x+2)(x-4)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{4x-10}{(x+2)(x-4)} \\equiv \\dfrac{A}{x+2} + \\dfrac{B}{x-4}",
          "explanation": "Two distinct linear factors on the bottom give two separate fractions, each with a constant numerator to find.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "4x-10 \\equiv A(x-4) + B(x+2)",
          "explanation": "Clearing the fractions produces a polynomial identity where each constant is paired with the factor it does not cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "4x-10 \\equiv A(x-4) + B(x+2) \\quad \\text{for all } x",
          "explanation": "Because both sides agree for every $x$, we substitute the roots of the factors to isolate each constant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -2 to find A",
          "workingLatex": "\\text{Let } x = -2: \\quad 4(-2)-10 = A(-2-4) + B(-2+2) \\;\\Rightarrow\\; -18 = -6A",
          "explanation": "At $x=-2$ the $(x+2)$ term vanishes, leaving only $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{-18}{-6} = 3",
          "explanation": "Dividing by $-6$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 4 to find B",
          "workingLatex": "\\text{Let } x = 4: \\quad 4(4)-10 = A(4-4) + B(4+2) \\;\\Rightarrow\\; 6 = 6B",
          "explanation": "At $x=4$ the $A$ term drops out, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{6}{6} = 1",
          "explanation": "Dividing by $6$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{4x-10}{(x+2)(x-4)} \\equiv \\dfrac{3}{x+2} + \\dfrac{1}{x-4}",
          "explanation": "Substituting the constants back gives the finished decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{3}{x+2} + \\dfrac{1}{x-4} = \\dfrac{3(x-4) + 1(x+2)}{(x+2)(x-4)}",
          "explanation": "Recombining the fractions should reproduce the original numerator.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{3x-12 + x+2}{(x+2)(x-4)} = \\dfrac{4x-10}{(x+2)(x-4)}",
          "explanation": "The numerator simplifies to $4x-10$, matching the original, so the answer is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3}{x+2}+\\dfrac{1}{x-4}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "algebraic fractions"],
    "questionText": "Express $\\dfrac{5x-13}{(x-5)(x+1)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{5x-13}{(x-5)(x+1)} \\equiv \\dfrac{A}{x-5} + \\dfrac{B}{x+1}",
          "explanation": "With two distinct linear factors underneath, the fraction splits into two pieces, each with an unknown constant on top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "5x-13 \\equiv A(x+1) + B(x-5)",
          "explanation": "Multiplying out by $(x-5)(x+1)$ removes the fractions and gives a polynomial identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the fact that the identity holds for all x",
          "workingLatex": "5x-13 \\equiv A(x+1) + B(x-5) \\quad \\text{for all } x",
          "explanation": "Since the identity is true for every $x$, substituting the roots of the factors reveals each constant in turn.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 5 to find A",
          "workingLatex": "\\text{Let } x = 5: \\quad 5(5)-13 = A(5+1) + B(5-5) \\;\\Rightarrow\\; 12 = 6A",
          "explanation": "At $x=5$ the $(x-5)$ term vanishes, leaving only $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "A = \\dfrac{12}{6} = 2",
          "explanation": "Dividing by $6$ gives $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -1 to find B",
          "workingLatex": "\\text{Let } x = -1: \\quad 5(-1)-13 = A(-1+1) + B(-1-5) \\;\\Rightarrow\\; -18 = -6B",
          "explanation": "At $x=-1$ the $A$ term drops out, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "B = \\dfrac{-18}{-6} = 3",
          "explanation": "Dividing by $-6$ gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the partial fraction decomposition",
          "workingLatex": "\\dfrac{5x-13}{(x-5)(x+1)} \\equiv \\dfrac{2}{x-5} + \\dfrac{3}{x+1}",
          "explanation": "Substituting the constants back completes the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by recombining over a common denominator",
          "workingLatex": "\\dfrac{2}{x-5} + \\dfrac{3}{x+1} = \\dfrac{2(x+1) + 3(x-5)}{(x-5)(x+1)}",
          "explanation": "Adding the fractions back should return the original numerator.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the numerator matches the original",
          "workingLatex": "\\dfrac{2x+2 + 3x-15}{(x-5)(x+1)} = \\dfrac{5x-13}{(x-5)(x+1)}",
          "explanation": "The numerator simplifies to $5x-13$, matching the original, so the answer is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x-5}+\\dfrac{3}{x+1}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "equating coefficients"],
    "questionText": "Express $\\dfrac{2x+3}{(x+1)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of denominator",
          "workingLatex": "\\dfrac{2x+3}{(x+1)^2}",
          "explanation": "The denominator is the single linear factor $x+1$ raised to the power $2$, so this is a repeated linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the correct partial fraction form",
          "workingLatex": "\\dfrac{2x+3}{(x+1)^2} \\equiv \\dfrac{A}{x+1} + \\dfrac{B}{(x+1)^2}",
          "explanation": "A repeated factor needs a term for every power up to the highest: the term $\\dfrac{B}{(x+1)^2}$ on its own is too restrictive, so we also include $\\dfrac{A}{x+1}$ to match a general linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply both sides by (x+1)^2",
          "workingLatex": "2x+3 \\equiv A(x+1) + B",
          "explanation": "Clearing the denominators turns the identity into a polynomial equation that must hold for every value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -1 to isolate B",
          "workingLatex": "2(-1)+3 = A(0) + B",
          "explanation": "Choosing $x=-1$ makes the factor $(x+1)$ zero, so the $A$ term disappears and only $B$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "1 = B \\quad\\Rightarrow\\quad B = 1",
          "explanation": "The left-hand side evaluates to $1$, giving $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand and compare coefficients of x",
          "workingLatex": "2x+3 \\equiv Ax + (A+B)",
          "explanation": "Expanding the right-hand side lets us match the coefficient of $x$ on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for A",
          "workingLatex": "2 = A",
          "explanation": "The coefficients of $x$ must be equal, so $A=2$ at once.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the constant term",
          "workingLatex": "A + B = 2 + 1 = 3",
          "explanation": "The constant terms also agree with the numerator's $+3$, confirming the values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the final decomposition",
          "workingLatex": "\\dfrac{2x+3}{(x+1)^2} = \\dfrac{2}{x+1} + \\dfrac{1}{(x+1)^2}",
          "explanation": "Substituting $A=2$ and $B=1$ back gives the partial fractions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x+1} + \\dfrac{1}{(x+1)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "substitution"],
    "questionText": "Express $\\dfrac{5x-2}{(x-1)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the repeated linear factor",
          "workingLatex": "\\dfrac{5x-2}{(x-1)^2}",
          "explanation": "The denominator is $(x-1)$ squared, a single linear factor repeated, so it is a repeated linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{5x-2}{(x-1)^2} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{(x-1)^2}",
          "explanation": "For a squared factor we need both powers $(x-1)$ and $(x-1)^2$, since one term alone cannot represent every possible linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by (x-1)^2",
          "workingLatex": "5x-2 \\equiv A(x-1) + B",
          "explanation": "Removing the denominators gives a polynomial identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1",
          "workingLatex": "5(1)-2 = A(0) + B",
          "explanation": "Setting $x=1$ kills the $(x-1)$ factor, leaving $B$ by itself.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "3 = B \\quad\\Rightarrow\\quad B = 3",
          "explanation": "The numerator evaluates to $3$ at $x=1$, giving $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare coefficients of x",
          "workingLatex": "5x-2 \\equiv Ax + (B-A)",
          "explanation": "Expanding $A(x-1)+B$ and matching the $x$ terms will give $A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for A",
          "workingLatex": "5 = A",
          "explanation": "The coefficient of $x$ on the left is $5$, so $A=5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the constant term",
          "workingLatex": "B - A = 3 - 5 = -2",
          "explanation": "This matches the $-2$ in the numerator, confirming $A$ and $B$ are correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{5x-2}{(x-1)^2} = \\dfrac{5}{x-1} + \\dfrac{3}{(x-1)^2}",
          "explanation": "Putting $A=5$ and $B=3$ back in completes the decomposition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{5}{x-1} + \\dfrac{3}{(x-1)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "equating coefficients"],
    "questionText": "Express $\\dfrac{x-4}{(x+2)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the repeated factor",
          "workingLatex": "\\dfrac{x-4}{(x+2)^2}",
          "explanation": "The denominator is the linear factor $x+2$ repeated (squared), so this is a repeated linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{x-4}{(x+2)^2} \\equiv \\dfrac{A}{x+2} + \\dfrac{B}{(x+2)^2}",
          "explanation": "Both the first and second powers of $(x+2)$ are needed so that the two unknowns can reproduce any linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by (x+2)^2",
          "workingLatex": "x-4 \\equiv A(x+2) + B",
          "explanation": "Clearing denominators leaves an identity that holds for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -2",
          "workingLatex": "(-2)-4 = A(0) + B",
          "explanation": "Choosing $x=-2$ makes $(x+2)=0$, removing the $A$ term so $B$ is isolated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "-6 = B \\quad\\Rightarrow\\quad B = -6",
          "explanation": "The numerator at $x=-2$ is $-6$, giving $B$ immediately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare coefficients of x",
          "workingLatex": "x-4 \\equiv Ax + (2A+B)",
          "explanation": "Expanding the right-hand side, the coefficient of $x$ must match on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for A",
          "workingLatex": "1 = A",
          "explanation": "The left-hand side has coefficient $1$ for $x$, so $A=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the constant term",
          "workingLatex": "2A + B = 2(1) + (-6) = -4",
          "explanation": "This equals the $-4$ in the numerator, confirming the constants are right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the final decomposition",
          "workingLatex": "\\dfrac{x-4}{(x+2)^2} = \\dfrac{1}{x+2} - \\dfrac{6}{(x+2)^2}",
          "explanation": "Substituting $A=1$ and $B=-6$ gives the partial fractions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x+2} - \\dfrac{6}{(x+2)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "equating coefficients"],
    "questionText": "Express $\\dfrac{3x^2+7x-2}{(x-1)(x+1)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the denominator",
          "workingLatex": "(x-1)(x+1)^2",
          "explanation": "There is a distinct linear factor $(x-1)$ and a repeated linear factor $(x+1)^2$, so we need a term for each piece.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{3x^2+7x-2}{(x-1)(x+1)^2} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{x+1} + \\dfrac{C}{(x+1)^2}",
          "explanation": "The distinct factor gives one term, and the squared factor needs both $\\dfrac{B}{x+1}$ and $\\dfrac{C}{(x+1)^2}$ to cover every power up to the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by the full denominator",
          "workingLatex": "3x^2+7x-2 \\equiv A(x+1)^2 + B(x-1)(x+1) + C(x-1)",
          "explanation": "Clearing all denominators produces a polynomial identity valid for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1 to find A",
          "workingLatex": "3(1)^2+7(1)-2 = A(2)^2",
          "explanation": "Setting $x=1$ removes the $B$ and $C$ terms because each contains $(x-1)$, isolating $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "8 = 4A \\quad\\Rightarrow\\quad A = 2",
          "explanation": "The left side is $8$ and the bracket gives $4$, so $A=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -1 to find C",
          "workingLatex": "3(-1)^2+7(-1)-2 = C(-1-1)",
          "explanation": "Setting $x=-1$ removes the $A$ and $B$ terms because each contains $(x+1)$, isolating $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for C",
          "workingLatex": "-6 = -2C \\quad\\Rightarrow\\quad C = 3",
          "explanation": "The numerator at $x=-1$ is $-6$ and the bracket is $-2$, giving $C=3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare coefficients of x^2 to find B",
          "workingLatex": "3 = A + B",
          "explanation": "The only $x^2$ terms come from $A(x+1)^2$ and $B(x-1)(x+1)$, so their coefficients must add to the numerator's $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for B",
          "workingLatex": "3 = 2 + B \\quad\\Rightarrow\\quad B = 1",
          "explanation": "With $A=2$ already known, $B=1$ follows immediately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the constant term",
          "workingLatex": "A - B - C = 2 - 1 - 3 = -2",
          "explanation": "The constant terms of the right side sum to $-2$, matching the numerator and confirming the constants.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the final decomposition",
          "workingLatex": "\\dfrac{3x^2+7x-2}{(x-1)(x+1)^2} = \\dfrac{2}{x-1} + \\dfrac{1}{x+1} + \\dfrac{3}{(x+1)^2}",
          "explanation": "Substituting $A=2$, $B=1$ and $C=3$ gives the completed partial fractions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x-1} + \\dfrac{1}{x+1} + \\dfrac{3}{(x+1)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "substitution"],
    "questionText": "Express $\\dfrac{3x^2-x-5}{(x+2)(x-1)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Analyse the denominator",
          "workingLatex": "(x+2)(x-1)^2",
          "explanation": "There is a distinct linear factor $(x+2)$ and a repeated linear factor $(x-1)^2$, so each requires its own term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{3x^2-x-5}{(x+2)(x-1)^2} \\equiv \\dfrac{A}{x+2} + \\dfrac{B}{x-1} + \\dfrac{C}{(x-1)^2}",
          "explanation": "The squared factor $(x-1)^2$ must contribute both $\\dfrac{B}{x-1}$ and $\\dfrac{C}{(x-1)^2}$ so that every power is represented.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by the full denominator",
          "workingLatex": "3x^2-x-5 \\equiv A(x-1)^2 + B(x+2)(x-1) + C(x+2)",
          "explanation": "Removing the denominators gives an identity that holds for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -2 to find A",
          "workingLatex": "3(-2)^2-(-2)-5 = A(-2-1)^2",
          "explanation": "Setting $x=-2$ removes the $B$ and $C$ terms, which both contain $(x+2)$, leaving only $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "9 = 9A \\quad\\Rightarrow\\quad A = 1",
          "explanation": "The numerator at $x=-2$ is $12+2-5=9$ and the bracket is $9$, so $A=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1 to find C",
          "workingLatex": "3(1)^2-(1)-5 = C(1+2)",
          "explanation": "Setting $x=1$ removes the $A$ and $B$ terms, which both contain $(x-1)$, isolating $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for C",
          "workingLatex": "-3 = 3C \\quad\\Rightarrow\\quad C = -1",
          "explanation": "The numerator at $x=1$ is $3-1-5=-3$ and the bracket is $3$, so $C=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare coefficients of x^2 to find B",
          "workingLatex": "3 = A + B",
          "explanation": "The $x^2$ terms come only from $A(x-1)^2$ and $B(x+2)(x-1)$, so their coefficients sum to the numerator's $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for B",
          "workingLatex": "3 = 1 + B \\quad\\Rightarrow\\quad B = 2",
          "explanation": "Since $A=1$, we get $B=2$ at once.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the constant term",
          "workingLatex": "A - 2B + 2C = 1 - 4 - 2 = -5",
          "explanation": "The constant terms of the right side total $-5$, matching the numerator and confirming the values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{3x^2-x-5}{(x+2)(x-1)^2} = \\dfrac{1}{x+2} + \\dfrac{2}{x-1} - \\dfrac{1}{(x-1)^2}",
          "explanation": "Substituting $A=1$, $B=2$ and $C=-1$ gives the final decomposition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x+2} + \\dfrac{2}{x-1} - \\dfrac{1}{(x-1)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "equating coefficients"],
    "questionText": "Express $\\dfrac{4x+1}{(2x+1)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the repeated factor",
          "workingLatex": "\\dfrac{4x+1}{(2x+1)^2}",
          "explanation": "The denominator is the linear factor $2x+1$ squared, so it is a repeated linear factor even though the leading coefficient is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{4x+1}{(2x+1)^2} \\equiv \\dfrac{A}{2x+1} + \\dfrac{B}{(2x+1)^2}",
          "explanation": "As with any squared factor, both powers of $(2x+1)$ are required to reproduce a general linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by (2x+1)^2",
          "workingLatex": "4x+1 \\equiv A(2x+1) + B",
          "explanation": "Clearing the denominators leaves a polynomial identity true for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -1/2",
          "workingLatex": "4\\left(-\\tfrac{1}{2}\\right)+1 = A(0) + B",
          "explanation": "The root of $2x+1$ is $x=-\\dfrac{1}{2}$; substituting it makes the $A$ term vanish and isolates $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "-1 = B \\quad\\Rightarrow\\quad B = -1",
          "explanation": "The numerator at $x=-\\dfrac{1}{2}$ is $-2+1=-1$, giving $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare coefficients of x",
          "workingLatex": "4x+1 \\equiv 2Ax + (A+B)",
          "explanation": "Expanding $A(2x+1)+B$, the coefficient of $x$ is $2A$, which must equal $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for A",
          "workingLatex": "4 = 2A \\quad\\Rightarrow\\quad A = 2",
          "explanation": "Dividing by $2$ gives $A=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the constant term",
          "workingLatex": "A + B = 2 + (-1) = 1",
          "explanation": "This matches the $+1$ in the numerator, confirming the constants.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the final decomposition",
          "workingLatex": "\\dfrac{4x+1}{(2x+1)^2} = \\dfrac{2}{2x+1} - \\dfrac{1}{(2x+1)^2}",
          "explanation": "Substituting $A=2$ and $B=-1$ completes the partial fractions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{2x+1} - \\dfrac{1}{(2x+1)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "equating coefficients"],
    "questionText": "Express $\\dfrac{2x^2+3x+2}{x^2(x+1)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret x^2 as a repeated factor",
          "workingLatex": "x^2(x+1) = (x)^2(x+1)",
          "explanation": "The factor $x^2$ is really the linear factor $x$ repeated, so it behaves exactly like any other repeated linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{2x^2+3x+2}{x^2(x+1)} \\equiv \\dfrac{A}{x} + \\dfrac{B}{x^2} + \\dfrac{C}{x+1}",
          "explanation": "The repeated factor $x^2$ needs both $\\dfrac{A}{x}$ and $\\dfrac{B}{x^2}$, while the distinct factor $(x+1)$ gives $\\dfrac{C}{x+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by x^2(x+1)",
          "workingLatex": "2x^2+3x+2 \\equiv A x(x+1) + B(x+1) + C x^2",
          "explanation": "Clearing the denominators leaves an identity that holds for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 0 to find B",
          "workingLatex": "2(0)^2+3(0)+2 = B(0+1)",
          "explanation": "Setting $x=0$ removes every term containing a factor of $x$, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "2 = B \\quad\\Rightarrow\\quad B = 2",
          "explanation": "The numerator at $x=0$ is $2$, giving $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -1 to find C",
          "workingLatex": "2(-1)^2+3(-1)+2 = C(-1)^2",
          "explanation": "Setting $x=-1$ removes the $A$ and $B$ terms because each contains $(x+1)$, leaving only $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for C",
          "workingLatex": "1 = C \\quad\\Rightarrow\\quad C = 1",
          "explanation": "The numerator at $x=-1$ is $2-3+2=1$, so $C=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare coefficients of x^2 to find A",
          "workingLatex": "2 = A + C",
          "explanation": "The $x^2$ terms come from $A x(x+1)$ and $C x^2$, so their coefficients sum to the numerator's $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for A",
          "workingLatex": "2 = A + 1 \\quad\\Rightarrow\\quad A = 1",
          "explanation": "Since $C=1$, it follows that $A=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with coefficients of x",
          "workingLatex": "A + B = 1 + 2 = 3",
          "explanation": "The $x$ terms of $A x(x+1)+B(x+1)$ total $A+B=3$, matching the numerator and confirming the values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{2x^2+3x+2}{x^2(x+1)} = \\dfrac{1}{x} + \\dfrac{2}{x^2} + \\dfrac{1}{x+1}",
          "explanation": "Substituting $A=1$, $B=2$ and $C=1$ gives the completed decomposition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x} + \\dfrac{2}{x^2} + \\dfrac{1}{x+1}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "substitution"],
    "questionText": "Express $\\dfrac{1-3x}{x^2(x-1)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret x^2 as a repeated factor",
          "workingLatex": "x^2(x-1) = (x)^2(x-1)",
          "explanation": "The factor $x^2$ is the linear factor $x$ repeated, so it is treated like any repeated linear factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the partial fraction form",
          "workingLatex": "\\dfrac{1-3x}{x^2(x-1)} \\equiv \\dfrac{A}{x} + \\dfrac{B}{x^2} + \\dfrac{C}{x-1}",
          "explanation": "The repeated factor $x^2$ contributes both $\\dfrac{A}{x}$ and $\\dfrac{B}{x^2}$, and the distinct factor $(x-1)$ gives $\\dfrac{C}{x-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by x^2(x-1)",
          "workingLatex": "1-3x \\equiv A x(x-1) + B(x-1) + C x^2",
          "explanation": "Clearing the denominators gives an identity valid for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 0 to find B",
          "workingLatex": "1-3(0) = B(0-1)",
          "explanation": "Setting $x=0$ removes every term with a factor of $x$, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "1 = -B \\quad\\Rightarrow\\quad B = -1",
          "explanation": "The numerator at $x=0$ is $1$ and the bracket is $-1$, so $B=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1 to find C",
          "workingLatex": "1-3(1) = C(1)^2",
          "explanation": "Setting $x=1$ removes the $A$ and $B$ terms because each contains $(x-1)$, leaving only $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for C",
          "workingLatex": "-2 = C \\quad\\Rightarrow\\quad C = -2",
          "explanation": "The numerator at $x=1$ is $1-3=-2$, so $C=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare coefficients of x^2 to find A",
          "workingLatex": "0 = A + C",
          "explanation": "The numerator has no $x^2$ term, so the $x^2$ coefficients from $A x(x-1)$ and $C x^2$ must cancel.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for A",
          "workingLatex": "0 = A + (-2) \\quad\\Rightarrow\\quad A = 2",
          "explanation": "Since $C=-2$, we get $A=2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with coefficients of x",
          "workingLatex": "-A + B = -2 + (-1) = -3",
          "explanation": "The $x$ terms of the right side total $-3$, matching the $-3x$ in the numerator and confirming the values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{1-3x}{x^2(x-1)} = \\dfrac{2}{x} - \\dfrac{1}{x^2} - \\dfrac{2}{x-1}",
          "explanation": "Substituting $A=2$, $B=-1$ and $C=-2$ gives the final decomposition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x} - \\dfrac{1}{x^2} - \\dfrac{2}{x-1}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["partial fractions", "improper fractions", "algebraic long division"],
    "questionText": "Express $\\dfrac{x^2+3x+1}{(x+1)(x+2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check whether the fraction is proper",
          "workingLatex": "\\deg(\\text{numerator}) = 2, \\quad \\deg(\\text{denominator}) = 2",
          "explanation": "The numerator's degree is not less than the denominator's, so the fraction is improper and cannot be written as partial fractions directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator",
          "workingLatex": "(x+1)(x+2) = x^2+3x+2",
          "explanation": "Writing the denominator as a polynomial makes the division step clearer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide to extract the polynomial part",
          "workingLatex": "\\dfrac{x^2+3x+1}{x^2+3x+2} = 1 + \\dfrac{(x^2+3x+1) - (x^2+3x+2)}{x^2+3x+2}",
          "explanation": "Since the leading terms match, the quotient is $1$; we must first divide because only a proper remainder can be split into partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the remainder",
          "workingLatex": "= 1 + \\dfrac{-1}{(x+1)(x+2)}",
          "explanation": "Subtracting the numerators leaves $-1$, a constant, which is now a proper fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions for the remainder",
          "workingLatex": "\\dfrac{-1}{(x+1)(x+2)} \\equiv \\dfrac{A}{x+1} + \\dfrac{B}{x+2}",
          "explanation": "The remainder has two distinct linear factors, so it splits into one term for each.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply through by (x+1)(x+2)",
          "workingLatex": "-1 \\equiv A(x+2) + B(x+1)",
          "explanation": "Clearing denominators gives an identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = -1 to find A",
          "workingLatex": "-1 = A(-1+2)",
          "explanation": "Setting $x=-1$ removes the $B$ term, isolating $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for A",
          "workingLatex": "-1 = A \\quad\\Rightarrow\\quad A = -1",
          "explanation": "The bracket equals $1$, so $A=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = -2 to find B",
          "workingLatex": "-1 = B(-2+1)",
          "explanation": "Setting $x=-2$ removes the $A$ term, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for B",
          "workingLatex": "-1 = -B \\quad\\Rightarrow\\quad B = 1",
          "explanation": "The bracket is $-1$, so $B=1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assemble the remainder decomposition",
          "workingLatex": "\\dfrac{-1}{(x+1)(x+2)} = -\\dfrac{1}{x+1} + \\dfrac{1}{x+2}",
          "explanation": "Substituting $A=-1$ and $B=1$ gives the split remainder.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the remainder split",
          "workingLatex": "-\\dfrac{1}{x+1} + \\dfrac{1}{x+2} = \\dfrac{-(x+2) + (x+1)}{(x+1)(x+2)} = \\dfrac{-1}{(x+1)(x+2)}",
          "explanation": "Recombining the two fractions returns the original remainder, confirming $A$ and $B$ are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine with the quotient",
          "workingLatex": "\\dfrac{x^2+3x+1}{(x+1)(x+2)} = 1 - \\dfrac{1}{x+1} + \\dfrac{1}{x+2}",
          "explanation": "Adding the quotient $1$ back to the split remainder gives the full answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 - \\dfrac{1}{x+1} + \\dfrac{1}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["partial fractions", "improper fractions", "algebraic long division"],
    "questionText": "Express $\\dfrac{2x^2+8x+2}{(x-1)(x+3)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check whether the fraction is proper",
          "workingLatex": "\\deg(\\text{numerator}) = 2, \\quad \\deg(\\text{denominator}) = 2",
          "explanation": "The degrees are equal, so the fraction is improper and must be divided before decomposing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator",
          "workingLatex": "(x-1)(x+3) = x^2+2x-3",
          "explanation": "Writing the denominator as a polynomial prepares it for division.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the quotient",
          "workingLatex": "\\dfrac{2x^2+8x+2}{x^2+2x-3} : \\quad 2 \\times (x^2+2x-3) = 2x^2+4x-6",
          "explanation": "The leading term $2x^2$ divided by $x^2$ gives $2$, so the quotient is $2$; division is needed first so the leftover fraction is proper.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the remainder",
          "workingLatex": "(2x^2+8x+2) - (2x^2+4x-6) = 4x+8",
          "explanation": "Subtracting $2$ times the denominator leaves a linear remainder, which is proper.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{2x^2+8x+2}{(x-1)(x+3)} = 2 + \\dfrac{4x+8}{(x-1)(x+3)}",
          "explanation": "The expression is now a polynomial part plus a proper fraction ready for partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up partial fractions for the remainder",
          "workingLatex": "\\dfrac{4x+8}{(x-1)(x+3)} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{x+3}",
          "explanation": "Two distinct linear factors give one term each.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by (x-1)(x+3)",
          "workingLatex": "4x+8 \\equiv A(x+3) + B(x-1)",
          "explanation": "Clearing denominators gives an identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 1 to find A",
          "workingLatex": "4(1)+8 = A(1+3)",
          "explanation": "Setting $x=1$ removes the $B$ term, isolating $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for A",
          "workingLatex": "12 = 4A \\quad\\Rightarrow\\quad A = 3",
          "explanation": "The left side is $12$ and the bracket is $4$, so $A=3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute x = -3 to find B",
          "workingLatex": "4(-3)+8 = B(-3-1)",
          "explanation": "Setting $x=-3$ removes the $A$ term, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for B",
          "workingLatex": "-4 = -4B \\quad\\Rightarrow\\quad B = 1",
          "explanation": "The left side is $-4$ and the bracket is $-4$, so $B=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the remainder split",
          "workingLatex": "\\dfrac{3}{x-1} + \\dfrac{1}{x+3} = \\dfrac{3(x+3) + (x-1)}{(x-1)(x+3)} = \\dfrac{4x+8}{(x-1)(x+3)}",
          "explanation": "Recombining the two fractions returns the remainder $4x+8$, confirming $A$ and $B$ are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine with the quotient",
          "workingLatex": "\\dfrac{2x^2+8x+2}{(x-1)(x+3)} = 2 + \\dfrac{3}{x-1} + \\dfrac{1}{x+3}",
          "explanation": "Adding the quotient $2$ to the split remainder gives the final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2 + \\dfrac{3}{x-1} + \\dfrac{1}{x+3}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["partial fractions", "improper fractions", "repeated linear factors", "algebraic long division"],
    "questionText": "Express $\\dfrac{3x^2-11x+12}{(x-2)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check whether the fraction is proper",
          "workingLatex": "\\deg(\\text{numerator}) = 2, \\quad \\deg(\\text{denominator}) = 2",
          "explanation": "The numerator's degree equals the denominator's, so the fraction is improper and needs dividing before decomposing over the repeated factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator",
          "workingLatex": "(x-2)^2 = x^2-4x+4",
          "explanation": "Writing $(x-2)^2$ as a polynomial makes the division straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the quotient",
          "workingLatex": "3 \\times (x^2-4x+4) = 3x^2-12x+12",
          "explanation": "Dividing the leading $3x^2$ by $x^2$ gives $3$, so the quotient is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the remainder",
          "workingLatex": "(3x^2-11x+12) - (3x^2-12x+12) = x",
          "explanation": "Subtracting $3$ times the denominator leaves a remainder of $x$, which is proper over $(x-2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{3x^2-11x+12}{(x-2)^2} = 3 + \\dfrac{x}{(x-2)^2}",
          "explanation": "The expression is now the polynomial $3$ plus a proper fraction over the repeated factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up partial fractions for the remainder",
          "workingLatex": "\\dfrac{x}{(x-2)^2} \\equiv \\dfrac{A}{x-2} + \\dfrac{B}{(x-2)^2}",
          "explanation": "The repeated factor $(x-2)^2$ needs both $\\dfrac{A}{x-2}$ and $\\dfrac{B}{(x-2)^2}$ to represent any linear numerator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by (x-2)^2",
          "workingLatex": "x \\equiv A(x-2) + B",
          "explanation": "Clearing denominators gives an identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 2 to find B",
          "workingLatex": "2 = A(0) + B",
          "explanation": "Setting $x=2$ removes the $A$ term, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for B",
          "workingLatex": "B = 2",
          "explanation": "The numerator at $x=2$ is $2$, giving $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare coefficients of x to find A",
          "workingLatex": "x \\equiv Ax + (B - 2A)",
          "explanation": "Expanding $A(x-2)+B$, the coefficient of $x$ must equal $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for A",
          "workingLatex": "1 = A",
          "explanation": "Matching the $x$ coefficients gives $A=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the constant term",
          "workingLatex": "B - 2A = 2 - 2 = 0",
          "explanation": "The remainder $x$ has zero constant term, which agrees, confirming $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine with the quotient",
          "workingLatex": "\\dfrac{3x^2-11x+12}{(x-2)^2} = 3 + \\dfrac{1}{x-2} + \\dfrac{2}{(x-2)^2}",
          "explanation": "Adding the quotient $3$ to the split remainder gives the final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3 + \\dfrac{1}{x-2} + \\dfrac{2}{(x-2)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["partial fractions", "improper fractions", "algebraic long division", "equating coefficients"],
    "questionText": "Express $\\dfrac{x^3+2x-1}{x^2-1}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check whether the fraction is proper",
          "workingLatex": "\\deg(\\text{numerator}) = 3, \\quad \\deg(\\text{denominator}) = 2",
          "explanation": "The numerator's degree exceeds the denominator's, so the fraction is improper and must be divided first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide the leading terms",
          "workingLatex": "\\dfrac{x^3}{x^2} = x, \\qquad x \\times (x^2-1) = x^3 - x",
          "explanation": "The first term of the quotient is $x$; multiplying it back by the denominator prepares the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the remainder",
          "workingLatex": "(x^3+2x-1) - (x^3 - x) = 3x - 1",
          "explanation": "Subtracting leaves $3x-1$, whose degree is now below the denominator, so the quotient is just $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{x^3+2x-1}{x^2-1} = x + \\dfrac{3x-1}{x^2-1}",
          "explanation": "The expression is now a polynomial part $x$ plus a proper fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the denominator",
          "workingLatex": "x^2-1 = (x-1)(x+1)",
          "explanation": "This difference of two squares gives two distinct linear factors for the partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up partial fractions for the remainder",
          "workingLatex": "\\dfrac{3x-1}{(x-1)(x+1)} \\equiv \\dfrac{A}{x+1} + \\dfrac{B}{x-1}",
          "explanation": "Each distinct linear factor contributes one term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by (x-1)(x+1)",
          "workingLatex": "3x-1 \\equiv A(x-1) + B(x+1)",
          "explanation": "Clearing denominators gives an identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = -1 to find A",
          "workingLatex": "3(-1)-1 = A(-1-1)",
          "explanation": "Setting $x=-1$ removes the $B$ term, isolating $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for A",
          "workingLatex": "-4 = -2A \\quad\\Rightarrow\\quad A = 2",
          "explanation": "The left side is $-4$ and the bracket is $-2$, so $A=2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute x = 1 to find B",
          "workingLatex": "3(1)-1 = B(1+1)",
          "explanation": "Setting $x=1$ removes the $A$ term, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for B",
          "workingLatex": "2 = 2B \\quad\\Rightarrow\\quad B = 1",
          "explanation": "The left side is $2$ and the bracket is $2$, so $B=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the remainder split",
          "workingLatex": "\\dfrac{2}{x+1} + \\dfrac{1}{x-1} = \\dfrac{2(x-1) + (x+1)}{(x+1)(x-1)} = \\dfrac{3x-1}{x^2-1}",
          "explanation": "Recombining the two fractions returns the remainder $3x-1$, confirming $A$ and $B$ are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine with the quotient",
          "workingLatex": "\\dfrac{x^3+2x-1}{x^2-1} = x + \\dfrac{2}{x+1} + \\dfrac{1}{x-1}",
          "explanation": "Adding the quotient $x$ to the split remainder gives the final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x + \\dfrac{2}{x+1} + \\dfrac{1}{x-1}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["partial fractions", "cover-up method", "substitution"],
    "questionText": "Express $\\dfrac{x^2+1}{x(x-1)(x+1)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the fraction is proper",
          "workingLatex": "\\deg(\\text{numerator}) = 2, \\quad \\deg(\\text{denominator}) = 3",
          "explanation": "The numerator's degree is less than the denominator's, so no division is needed and we can decompose directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{x^2+1}{x(x-1)(x+1)} \\equiv \\dfrac{A}{x} + \\dfrac{B}{x-1} + \\dfrac{C}{x+1}",
          "explanation": "There are three distinct linear factors, so each contributes a single term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by the denominator",
          "workingLatex": "x^2+1 \\equiv A(x-1)(x+1) + B\\,x(x+1) + C\\,x(x-1)",
          "explanation": "Clearing all denominators gives an identity valid for every $x$; substituting the roots will use the cover-up idea.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 0 to find A",
          "workingLatex": "(0)^2+1 = A(-1)(1)",
          "explanation": "Setting $x=0$ removes the $B$ and $C$ terms because each contains a factor of $x$, isolating $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "1 = -A \\quad\\Rightarrow\\quad A = -1",
          "explanation": "The numerator at $x=0$ is $1$ and the bracket is $-1$, so $A=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1 to find B",
          "workingLatex": "(1)^2+1 = B(1)(2)",
          "explanation": "Setting $x=1$ removes the $A$ and $C$ terms because each contains $(x-1)$, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "2 = 2B \\quad\\Rightarrow\\quad B = 1",
          "explanation": "The numerator at $x=1$ is $2$ and the bracket is $2$, so $B=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = -1 to find C",
          "workingLatex": "(-1)^2+1 = C(-1)(-2)",
          "explanation": "Setting $x=-1$ removes the $A$ and $B$ terms because each contains $(x+1)$, isolating $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for C",
          "workingLatex": "2 = 2C \\quad\\Rightarrow\\quad C = 1",
          "explanation": "The numerator at $x=-1$ is $2$ and the bracket is $2$, so $C=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the x^2 coefficient",
          "workingLatex": "A + B + C = -1 + 1 + 1 = 1",
          "explanation": "The $x^2$ terms of the right side sum to $1$, matching the numerator's leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check with the x coefficient",
          "workingLatex": "B - C = 1 - 1 = 0",
          "explanation": "The right side has no net $x$ term, agreeing with the numerator $x^2+1$ which has no $x$ term.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the constant term",
          "workingLatex": "-A = -(-1) = 1",
          "explanation": "Only the $A$ term contributes a constant, and it equals the numerator's $+1$, confirming all three values.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{x^2+1}{x(x-1)(x+1)} = -\\dfrac{1}{x} + \\dfrac{1}{x-1} + \\dfrac{1}{x+1}",
          "explanation": "Substituting $A=-1$, $B=1$ and $C=1$ gives the completed decomposition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\dfrac{1}{x} + \\dfrac{1}{x-1} + \\dfrac{1}{x+1}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "equating coefficients", "substitution"],
    "questionText": "Express $\\dfrac{7x+3-2x^2}{(x-2)(x+1)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Tidy the numerator",
          "workingLatex": "7x+3-2x^2 = -2x^2+7x+3",
          "explanation": "Writing the numerator in descending powers makes it easier to compare coefficients later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the fraction is proper",
          "workingLatex": "\\deg(\\text{numerator}) = 2, \\quad \\deg(\\text{denominator}) = 3",
          "explanation": "The numerator's degree is less than the denominator's, so no division is needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the partial fraction form",
          "workingLatex": "\\dfrac{-2x^2+7x+3}{(x-2)(x+1)^2} \\equiv \\dfrac{A}{x-2} + \\dfrac{B}{x+1} + \\dfrac{C}{(x+1)^2}",
          "explanation": "The distinct factor $(x-2)$ gives one term, and the repeated factor $(x+1)^2$ needs both $\\dfrac{B}{x+1}$ and $\\dfrac{C}{(x+1)^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply through by the denominator",
          "workingLatex": "-2x^2+7x+3 \\equiv A(x+1)^2 + B(x-2)(x+1) + C(x-2)",
          "explanation": "Clearing all denominators gives an identity valid for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 2 to find A",
          "workingLatex": "-2(2)^2+7(2)+3 = A(2+1)^2",
          "explanation": "Setting $x=2$ removes the $B$ and $C$ terms because each contains $(x-2)$, isolating $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for A",
          "workingLatex": "9 = 9A \\quad\\Rightarrow\\quad A = 1",
          "explanation": "The numerator at $x=2$ is $-8+14+3=9$ and the bracket is $9$, so $A=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = -1 to find C",
          "workingLatex": "-2(-1)^2+7(-1)+3 = C(-1-2)",
          "explanation": "Setting $x=-1$ removes the $A$ and $B$ terms because each contains $(x+1)$, isolating $C$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for C",
          "workingLatex": "-6 = -3C \\quad\\Rightarrow\\quad C = 2",
          "explanation": "The numerator at $x=-1$ is $-2-7+3=-6$ and the bracket is $-3$, so $C=2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare coefficients of x^2 to find B",
          "workingLatex": "-2 = A + B",
          "explanation": "The $x^2$ terms come only from $A(x+1)^2$ and $B(x-2)(x+1)$, so their coefficients sum to the numerator's $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for B",
          "workingLatex": "-2 = 1 + B \\quad\\Rightarrow\\quad B = -3",
          "explanation": "Since $A=1$, we get $B=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check with the constant term",
          "workingLatex": "A - 2B - 2C = 1 + 6 - 4 = 3",
          "explanation": "The constant terms of the right side total $3$, matching the numerator and confirming all three values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check with the x coefficient",
          "workingLatex": "2A - B + C = 2(1) - (-3) + 2 = 7",
          "explanation": "The $x$ terms of the right side total $7$, matching the $7x$ in the numerator and confirming all three values.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{7x+3-2x^2}{(x-2)(x+1)^2} = \\dfrac{1}{x-2} - \\dfrac{3}{x+1} + \\dfrac{2}{(x+1)^2}",
          "explanation": "Substituting $A=1$, $B=-3$ and $C=2$ gives the completed decomposition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x-2} - \\dfrac{3}{x+1} + \\dfrac{2}{(x+1)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["partial fractions", "improper fractions", "algebraic long division", "repeated linear factors"],
    "questionText": "Express $\\dfrac{x^3+7x^2+17x+16}{(x+2)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the fraction is improper",
          "workingLatex": "\\deg(x^3+7x^2+17x+16)=3\\ge 2=\\deg\\big[(x+2)^2\\big]",
          "explanation": "When the numerator's degree is at least the denominator's, the fraction is top-heavy, so we must divide first; only a proper remainder can be split into partial fractions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator ready for division",
          "workingLatex": "(x+2)^2=x^2+4x+4",
          "explanation": "Writing the divisor in standard $x^2+4x+4$ form makes the long division straightforward to line up.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Long division: first quotient term",
          "workingLatex": "x^3+7x^2+17x+16=(x^2+4x+4)\\times x+(3x^2+13x+16)",
          "explanation": "Since $x^3\\div x^2=x$, subtracting $x(x^2+4x+4)$ removes the cubic term and leaves $3x^2+13x+16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Long division: second quotient term",
          "workingLatex": "3x^2+13x+16=(x^2+4x+4)\\times 3+(x+4)",
          "explanation": "Now $3x^2\\div x^2=3$, and subtracting $3(x^2+4x+4)$ leaves the proper linear remainder $x+4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the mixed (quotient + remainder) form",
          "workingLatex": "\\dfrac{x^3+7x^2+17x+16}{(x+2)^2}=x+3+\\dfrac{x+4}{(x+2)^2}",
          "explanation": "The quotient is $x+3$ and the leftover $\\dfrac{x+4}{(x+2)^2}$ is now proper, ready to decompose.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up partial fractions for the remainder",
          "workingLatex": "\\dfrac{x+4}{(x+2)^2}\\equiv\\dfrac{A}{x+2}+\\dfrac{B}{(x+2)^2}",
          "explanation": "A repeated factor needs one term for each power up to the repeat, so we include both $\\dfrac{A}{x+2}$ and $\\dfrac{B}{(x+2)^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the denominator",
          "workingLatex": "x+4\\equiv A(x+2)+B",
          "explanation": "Multiplying both sides by $(x+2)^2$ turns the statement into a linear identity in $x$ that holds for every value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = -2 to find B",
          "workingLatex": "-2+4=A(0)+B\\;\\Rightarrow\\;B=2",
          "explanation": "The root of the repeated factor makes the $A$ term vanish, isolating $B$ immediately.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare coefficients of x to find A",
          "workingLatex": "x+4=Ax+(2A+B)\\;\\Rightarrow\\;A=1",
          "explanation": "Matching the coefficient of $x$ gives $A=1$; the constants also check since $2A+B=2+2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the remainder in partial fractions",
          "workingLatex": "\\dfrac{x+4}{(x+2)^2}=\\dfrac{1}{x+2}+\\dfrac{2}{(x+2)^2}",
          "explanation": "Substituting $A=1$ and $B=2$ gives the split of the proper part.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine with the quotient",
          "workingLatex": "\\dfrac{x^3+7x^2+17x+16}{(x+2)^2}=x+3+\\dfrac{1}{x+2}+\\dfrac{2}{(x+2)^2}",
          "explanation": "Adding the polynomial part $x+3$ back on completes the full decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify by recombining the remainder",
          "workingLatex": "\\dfrac{(x+2)+2}{(x+2)^2}=\\dfrac{x+4}{(x+2)^2}\\;\\checkmark",
          "explanation": "Recombining returns the original remainder $x+4$, confirming the constants are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "x+3+\\dfrac{1}{x+2}+\\dfrac{2}{(x+2)^2}",
          "explanation": "This is the fully decomposed form, valid for all $x\\ne -2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x+3+\\dfrac{1}{x+2}+\\dfrac{2}{(x+2)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "cover-up method", "algebraic fractions"],
    "questionText": "Express $\\dfrac{3x^2-14x+7}{(x-1)(x-2)(x+1)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the fraction is proper and choose the form",
          "workingLatex": "\\dfrac{3x^2-14x+7}{(x-1)(x-2)(x+1)}\\equiv\\dfrac{A}{x-1}+\\dfrac{B}{x-2}+\\dfrac{C}{x+1}",
          "explanation": "The numerator has degree $2$ and the denominator degree $3$, so the fraction is already proper; each distinct linear factor contributes one term with an unknown constant on top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the full denominator",
          "workingLatex": "3x^2-14x+7\\equiv A(x-2)(x+1)+B(x-1)(x+1)+C(x-1)(x-2)",
          "explanation": "Clearing every fraction turns the problem into a single polynomial identity that must hold for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the substitution strategy",
          "workingLatex": "\\text{Substitute the roots } x=1,\\; x=2,\\; x=-1",
          "explanation": "Setting $x$ to each factor's root makes two of the three terms zero, isolating one constant at a time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1 to isolate A",
          "workingLatex": "3(1)^2-14(1)+7=A(1-2)(1+1)",
          "explanation": "At $x=1$ the $B$ and $C$ terms each contain a zero factor, so only the $A$ term survives.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for A",
          "workingLatex": "-4=A(-1)(2)=-2A\\;\\Rightarrow\\;A=2",
          "explanation": "Dividing both sides by $-2$ gives $A=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 2 to isolate B",
          "workingLatex": "3(2)^2-14(2)+7=B(2-1)(2+1)",
          "explanation": "The root $x=2$ removes the $A$ and $C$ terms, leaving $B$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "-9=B(1)(3)=3B\\;\\Rightarrow\\;B=-3",
          "explanation": "Dividing by $3$ gives $B=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = -1 to isolate C",
          "workingLatex": "3(-1)^2-14(-1)+7=C(-1-1)(-1-2)",
          "explanation": "The root $x=-1$ removes the $A$ and $B$ terms, leaving $C$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for C",
          "workingLatex": "24=C(-2)(-3)=6C\\;\\Rightarrow\\;C=4",
          "explanation": "Dividing by $6$ gives $C=4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the three constants",
          "workingLatex": "A=2,\\quad B=-3,\\quad C=4",
          "explanation": "These are the numerators that make the decomposition work.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{2}{x-1}-\\dfrac{3}{x-2}+\\dfrac{4}{x+1}",
          "explanation": "Placing each constant over its factor gives the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify with a coefficient check",
          "workingLatex": "\\text{coeff }x^2:\\;A+B+C=2-3+4=3\\;\\checkmark",
          "explanation": "The $x^2$ coefficients from the three products sum to $3$, matching the numerator's leading term, so the constants are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{2}{x-1}-\\dfrac{3}{x-2}+\\dfrac{4}{x+1}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne 1,2,-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x-1}-\\dfrac{3}{x-2}+\\dfrac{4}{x+1}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "comparing coefficients", "algebraic fractions"],
    "questionText": "Express $\\dfrac{3x^2+x-5}{(x+1)^2(x-2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm proper and choose the form",
          "workingLatex": "\\dfrac{3x^2+x-5}{(x+1)^2(x-2)}\\equiv\\dfrac{A}{x+1}+\\dfrac{B}{(x+1)^2}+\\dfrac{C}{x-2}",
          "explanation": "Numerator degree $2$ is less than denominator degree $3$, so it is proper; the repeated factor $(x+1)^2$ needs two terms and $(x-2)$ needs one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the full denominator",
          "workingLatex": "3x^2+x-5\\equiv A(x+1)(x-2)+B(x-2)+C(x+1)^2",
          "explanation": "Clearing all denominators gives one polynomial identity valid for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand each product on the right-hand side",
          "workingLatex": "3x^2+x-5\\equiv A(x^2-x-2)+B(x-2)+C(x^2+2x+1)",
          "explanation": "Multiplying out each bracket lets us later collect like powers of $x$ and compare coefficients cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -1 to isolate B",
          "workingLatex": "3(-1)^2+(-1)-5=B(-1-2)",
          "explanation": "The repeated root $x=-1$ zeroes both the $A$ and $C$ terms, leaving only $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "-3=-3B\\;\\Rightarrow\\;B=1",
          "explanation": "Dividing by $-3$ gives $B=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 2 to isolate C",
          "workingLatex": "3(2)^2+2-5=C(2+1)^2",
          "explanation": "The root $x=2$ removes the $A$ and $B$ terms, leaving $C$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for C",
          "workingLatex": "9=9C\\;\\Rightarrow\\;C=1",
          "explanation": "Dividing by $9$ gives $C=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare coefficients of x^2 to find A",
          "workingLatex": "\\text{coeff }x^2:\\;3=A+C",
          "explanation": "From the expanded form only the $A$ and $C$ products create $x^2$ terms, so comparing that power gives an equation for $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for A",
          "workingLatex": "3=A+1\\;\\Rightarrow\\;A=2",
          "explanation": "Subtracting $C=1$ gives $A=2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the constants",
          "workingLatex": "A=2,\\quad B=1,\\quad C=1",
          "explanation": "These values determine every numerator in the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the constant term",
          "workingLatex": "-2A-2B+C=-4-2+1=-5\\;\\checkmark",
          "explanation": "The constant terms from the three products sum to $-5$, matching the numerator's constant, so the values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{2}{x+1}+\\dfrac{1}{(x+1)^2}+\\dfrac{1}{x-2}",
          "explanation": "Substituting $A=2$, $B=1$ and $C=1$ gives the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify by recombining the fractions",
          "workingLatex": "\\dfrac{2(x+1)(x-2)+(x-2)+(x+1)^2}{(x+1)^2(x-2)}=\\dfrac{3x^2+x-5}{(x+1)^2(x-2)}\\;\\checkmark",
          "explanation": "Expanding the numerator gives $2(x^2-x-2)+(x-2)+(x^2+2x+1)=3x^2+x-5$, the original, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{2}{x+1}+\\dfrac{1}{(x+1)^2}+\\dfrac{1}{x-2}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne -1,2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x+1}+\\dfrac{1}{(x+1)^2}+\\dfrac{1}{x-2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["partial fractions", "improper fractions", "algebraic long division", "distinct linear factors"],
    "questionText": "Express $\\dfrac{2x^3+4x^2-x+1}{(x-1)(x+1)(x+2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the fraction is improper",
          "workingLatex": "\\deg(2x^3+4x^2-x+1)=3=\\deg\\big[(x-1)(x+1)(x+2)\\big]",
          "explanation": "Equal degrees on top and bottom mean the fraction is improper, so we divide before decomposing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator",
          "workingLatex": "(x-1)(x+1)(x+2)=x^3+2x^2-x-2",
          "explanation": "Multiplying the factors gives the divisor in standard polynomial form for the division.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Carry out the division",
          "workingLatex": "2x^3+4x^2-x+1=2\\,(x^3+2x^2-x-2)+(x+5)",
          "explanation": "Since $2x^3\\div x^3=2$, subtracting $2(x^3+2x^2-x-2)$ leaves the proper remainder $x+5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the mixed form",
          "workingLatex": "\\dfrac{2x^3+4x^2-x+1}{(x-1)(x+1)(x+2)}=2+\\dfrac{x+5}{(x-1)(x+1)(x+2)}",
          "explanation": "The quotient is the constant $2$; the remaining fraction is proper and ready to decompose.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions for the remainder",
          "workingLatex": "\\dfrac{x+5}{(x-1)(x+1)(x+2)}\\equiv\\dfrac{A}{x-1}+\\dfrac{B}{x+1}+\\dfrac{C}{x+2}",
          "explanation": "Each distinct linear factor gets one constant over it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply through by the denominator",
          "workingLatex": "x+5\\equiv A(x+1)(x+2)+B(x-1)(x+2)+C(x-1)(x+1)",
          "explanation": "Clearing the fractions gives a polynomial identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 1 to find A",
          "workingLatex": "1+5=A(2)(3)=6A\\;\\Rightarrow\\;A=1",
          "explanation": "The root $x=1$ removes the $B$ and $C$ terms, leaving $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = -1 to find B",
          "workingLatex": "-1+5=B(-2)(1)=-2B\\;\\Rightarrow\\;B=-2",
          "explanation": "The root $x=-1$ isolates $B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = -2 to find C",
          "workingLatex": "-2+5=C(-3)(-1)=3C\\;\\Rightarrow\\;C=1",
          "explanation": "The root $x=-2$ isolates $C$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the remainder in partial fractions",
          "workingLatex": "\\dfrac{x+5}{(x-1)(x+1)(x+2)}=\\dfrac{1}{x-1}-\\dfrac{2}{x+1}+\\dfrac{1}{x+2}",
          "explanation": "Substituting $A=1$, $B=-2$, $C=1$ splits the proper part.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine with the quotient",
          "workingLatex": "2+\\dfrac{1}{x-1}-\\dfrac{2}{x+1}+\\dfrac{1}{x+2}",
          "explanation": "Adding the quotient $2$ back on gives the full decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify with a coefficient check",
          "workingLatex": "A+B+C=1-2+1=0\\;\\checkmark",
          "explanation": "The three constants sum to $0$, matching the absence of an $x^2$ term in the remainder $x+5$, confirming the values.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "2+\\dfrac{1}{x-1}-\\dfrac{2}{x+1}+\\dfrac{1}{x+2}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne 1,-1,-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2+\\dfrac{1}{x-1}-\\dfrac{2}{x+1}+\\dfrac{1}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["partial fractions", "differentiation", "distinct linear factors", "algebraic fractions"],
    "questionText": "Express $y=\\dfrac{5x-4}{(x-2)(x-1)}$ in partial fractions, and hence find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the partial-fraction form",
          "workingLatex": "\\dfrac{5x-4}{(x-2)(x-1)}\\equiv\\dfrac{A}{x-2}+\\dfrac{B}{x-1}",
          "explanation": "The fraction is proper (degree $1$ over degree $2$), so each distinct linear factor gets one constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "5x-4\\equiv A(x-1)+B(x-2)",
          "explanation": "Clearing the fractions gives a linear identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x = 2 to find A",
          "workingLatex": "5(2)-4=A(2-1)\\;\\Rightarrow\\;6=A\\;\\Rightarrow\\;A=6",
          "explanation": "The root $x=2$ removes the $B$ term, leaving $A$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1 to find B",
          "workingLatex": "5(1)-4=B(1-2)\\;\\Rightarrow\\;1=-B\\;\\Rightarrow\\;B=-1",
          "explanation": "The root $x=1$ removes the $A$ term, isolating $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the constants",
          "workingLatex": "A=6,\\quad B=-1",
          "explanation": "These are the numerators for the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write y in partial fractions",
          "workingLatex": "y=\\dfrac{6}{x-2}-\\dfrac{1}{x-1}",
          "explanation": "This equivalent form is much easier to differentiate than the original quotient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by recombining the fractions",
          "workingLatex": "\\dfrac{6(x-1)-(x-2)}{(x-2)(x-1)}=\\dfrac{5x-4}{(x-2)(x-1)}\\;\\checkmark",
          "explanation": "The numerator $6x-6-x+2=5x-4$ matches the original, so the decomposition is correct before we differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite each term with a negative index",
          "workingLatex": "y=6(x-2)^{-1}-(x-1)^{-1}",
          "explanation": "Writing the terms as powers lets us differentiate directly with the chain rule instead of using the quotient rule on the whole fraction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the standard derivative",
          "workingLatex": "\\dfrac{d}{dx}\\!\\left[\\dfrac{k}{x-a}\\right]=-\\dfrac{k}{(x-a)^2}",
          "explanation": "Differentiating $k(x-a)^{-1}$ by the chain rule brings down $-1$ and raises the power to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate the first term",
          "workingLatex": "\\dfrac{d}{dx}\\!\\left[\\dfrac{6}{x-2}\\right]=-\\dfrac{6}{(x-2)^2}",
          "explanation": "Applying the rule with $k=6$, $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Differentiate the second term",
          "workingLatex": "\\dfrac{d}{dx}\\!\\left[-\\dfrac{1}{x-1}\\right]=+\\dfrac{1}{(x-1)^2}",
          "explanation": "With $k=-1$, $a=1$ the two minus signs combine to give a positive term.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the derivatives",
          "workingLatex": "\\dfrac{dy}{dx}=-\\dfrac{6}{(x-2)^2}+\\dfrac{1}{(x-1)^2}",
          "explanation": "Adding the two derivative terms gives the full result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "y=\\dfrac{6}{x-2}-\\dfrac{1}{x-1},\\qquad \\dfrac{dy}{dx}=-\\dfrac{6}{(x-2)^2}+\\dfrac{1}{(x-1)^2}",
          "explanation": "Both the decomposition and its derivative are valid for all $x\\ne 2,1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{6}{x-2}-\\dfrac{1}{x-1},\\quad \\dfrac{dy}{dx}=-\\dfrac{6}{(x-2)^2}+\\dfrac{1}{(x-1)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "algebraic fractions"],
    "questionText": "Express $\\dfrac{7x+7}{(2x-1)(x+3)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the fraction is proper",
          "workingLatex": "\\deg(7x+7)=1<2=\\deg\\big[(2x-1)(x+3)\\big]",
          "explanation": "The numerator's degree is lower than the denominator's, so no division is needed and we can decompose directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the partial-fraction form",
          "workingLatex": "\\dfrac{7x+7}{(2x-1)(x+3)}\\equiv\\dfrac{A}{2x-1}+\\dfrac{B}{x+3}",
          "explanation": "Each distinct linear factor, including the one with coefficient $2$, gets a single constant on top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by the denominator",
          "workingLatex": "7x+7\\equiv A(x+3)+B(2x-1)",
          "explanation": "Clearing the fractions gives a linear identity that holds for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and group the right-hand side",
          "workingLatex": "7x+7\\equiv (A+2B)x+(3A-B)",
          "explanation": "Collecting the $x$ terms and the constants shows exactly which combinations must match the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = -3 to find B",
          "workingLatex": "7(-3)+7=B\\big(2(-3)-1\\big)\\;\\Rightarrow\\;-14=-7B",
          "explanation": "The root $x=-3$ removes the $A$ term, leaving $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for B",
          "workingLatex": "B=2",
          "explanation": "Dividing $-14$ by $-7$ gives $B=2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 1/2 to find A",
          "workingLatex": "7\\!\\left(\\tfrac{1}{2}\\right)+7=A\\!\\left(\\tfrac{1}{2}+3\\right)\\;\\Rightarrow\\;\\tfrac{21}{2}=\\tfrac{7}{2}A",
          "explanation": "The root of $2x-1$ is $x=\\tfrac{1}{2}$, which removes the $B$ term and leaves $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for A",
          "workingLatex": "A=3",
          "explanation": "Dividing $\\tfrac{21}{2}$ by $\\tfrac{7}{2}$ gives $A=3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the constants",
          "workingLatex": "A=3,\\quad B=2",
          "explanation": "These are the numerators of the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the coefficient of x",
          "workingLatex": "\\text{coeff }x:\\;A+2B=3+4=7\\;\\checkmark",
          "explanation": "Using the grouped form, the $x$ coefficient $A+2B$ equals $7$, matching the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{3}{2x-1}+\\dfrac{2}{x+3}",
          "explanation": "Substituting $A=3$ and $B=2$ completes the split.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify by recombining the fractions",
          "workingLatex": "\\dfrac{3(x+3)+2(2x-1)}{(2x-1)(x+3)}=\\dfrac{7x+7}{(2x-1)(x+3)}\\;\\checkmark",
          "explanation": "The numerator $3x+9+4x-2=7x+7$ matches the original, confirming the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{3}{2x-1}+\\dfrac{2}{x+3}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne \\tfrac{1}{2},-3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3}{2x-1}+\\dfrac{2}{x+3}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "algebraic fractions"],
    "questionText": "Express $\\dfrac{x-9}{(3x+1)(x-2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the fraction is proper",
          "workingLatex": "\\deg(x-9)=1<2=\\deg\\big[(3x+1)(x-2)\\big]",
          "explanation": "The numerator is lower degree than the denominator, so the fraction is proper and can be decomposed directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the partial-fraction form",
          "workingLatex": "\\dfrac{x-9}{(3x+1)(x-2)}\\equiv\\dfrac{A}{3x+1}+\\dfrac{B}{x-2}",
          "explanation": "Each distinct linear factor, including $3x+1$, contributes one constant on top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply through by the denominator",
          "workingLatex": "x-9\\equiv A(x-2)+B(3x+1)",
          "explanation": "Clearing the fractions gives a linear identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and group the right-hand side",
          "workingLatex": "x-9\\equiv (A+3B)x+(-2A+B)",
          "explanation": "Grouping into an $x$ term and a constant makes the coefficient checks direct later on.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 2 to find B",
          "workingLatex": "2-9=B\\big(3(2)+1\\big)\\;\\Rightarrow\\;-7=7B",
          "explanation": "The root $x=2$ removes the $A$ term, leaving $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for B",
          "workingLatex": "B=-1",
          "explanation": "Dividing $-7$ by $7$ gives $B=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = -1/3 to find A",
          "workingLatex": "-\\tfrac{1}{3}-9=A\\!\\left(-\\tfrac{1}{3}-2\\right)\\;\\Rightarrow\\;-\\tfrac{28}{3}=-\\tfrac{7}{3}A",
          "explanation": "The root of $3x+1$ is $x=-\\tfrac{1}{3}$, which removes the $B$ term and isolates $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for A",
          "workingLatex": "A=4",
          "explanation": "Dividing $-\\tfrac{28}{3}$ by $-\\tfrac{7}{3}$ gives $A=4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the constants",
          "workingLatex": "A=4,\\quad B=-1",
          "explanation": "These are the numerators of the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the coefficient of x",
          "workingLatex": "\\text{coeff }x:\\;A+3B=4-3=1\\;\\checkmark",
          "explanation": "The grouped $x$ coefficient $A+3B$ equals $1$, matching the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the constant term",
          "workingLatex": "\\text{const}:\\;-2A+B=-8-1=-9\\;\\checkmark",
          "explanation": "The constant $-2A+B$ equals $-9$, again matching the numerator, so the values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{4}{3x+1}-\\dfrac{1}{x-2}",
          "explanation": "Substituting $A=4$ and $B=-1$ gives the split.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify by recombining the fractions",
          "workingLatex": "\\dfrac{4(x-2)-(3x+1)}{(3x+1)(x-2)}=\\dfrac{x-9}{(3x+1)(x-2)}\\;\\checkmark",
          "explanation": "The numerator $4x-8-3x-1=x-9$ matches the original, confirming the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{4}{3x+1}-\\dfrac{1}{x-2}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne -\\tfrac{1}{3},2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{4}{3x+1}-\\dfrac{1}{x-2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "comparing coefficients"],
    "questionText": "Express $\\dfrac{6x+5}{(2x+1)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the fraction is proper",
          "workingLatex": "\\deg(6x+5)=1<2=\\deg\\big[(2x+1)^2\\big]",
          "explanation": "The numerator is lower degree, so the fraction is proper and ready to decompose.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the partial-fraction form",
          "workingLatex": "\\dfrac{6x+5}{(2x+1)^2}\\equiv\\dfrac{A}{2x+1}+\\dfrac{B}{(2x+1)^2}",
          "explanation": "The single repeated factor $(2x+1)^2$ needs one term for each power, $2x+1$ and $(2x+1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Plan the method",
          "workingLatex": "\\text{One root available: use it for }B,\\text{ then compare coefficients for }A",
          "explanation": "A single repeated factor gives only one useful root, so we substitute for one constant and match coefficients for the other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply through by the denominator",
          "workingLatex": "6x+5\\equiv A(2x+1)+B",
          "explanation": "Clearing $(2x+1)^2$ leaves a linear identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the right-hand side",
          "workingLatex": "6x+5\\equiv 2Ax+(A+B)",
          "explanation": "Grouping into an $x$ term and a constant term makes the coefficient comparison direct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare coefficients of x",
          "workingLatex": "6=2A\\;\\Rightarrow\\;A=3",
          "explanation": "Matching the $x$ coefficients gives $A=3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare constant terms",
          "workingLatex": "5=A+B\\;\\Rightarrow\\;B=2",
          "explanation": "Matching the constants and using $A=3$ gives $B=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm B by substituting x = -1/2",
          "workingLatex": "6\\!\\left(-\\tfrac{1}{2}\\right)+5=B\\;\\Rightarrow\\;2=B\\;\\checkmark",
          "explanation": "The root of $2x+1$ isolates $B$ directly and agrees with $B=2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the constants",
          "workingLatex": "A=3,\\quad B=2",
          "explanation": "These are the numerators of the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{3}{2x+1}+\\dfrac{2}{(2x+1)^2}",
          "explanation": "Substituting $A=3$ and $B=2$ gives the split.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify by recombining the fractions",
          "workingLatex": "\\dfrac{3(2x+1)+2}{(2x+1)^2}=\\dfrac{6x+5}{(2x+1)^2}\\;\\checkmark",
          "explanation": "The numerator $6x+3+2=6x+5$ matches the original, confirming the constants.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify with a test value x = 0",
          "workingLatex": "\\dfrac{3}{1}+\\dfrac{2}{1}=5=\\dfrac{6(0)+5}{1}\\;\\checkmark",
          "explanation": "Both sides equal $5$ at $x=0$, giving an independent confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{3}{2x+1}+\\dfrac{2}{(2x+1)^2}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne -\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3}{2x+1}+\\dfrac{2}{(2x+1)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "comparing coefficients", "algebraic fractions"],
    "questionText": "Express $\\dfrac{x^2+5x+2}{x^2(x+2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm proper and choose the form",
          "workingLatex": "\\dfrac{x^2+5x+2}{x^2(x+2)}\\equiv\\dfrac{A}{x}+\\dfrac{B}{x^2}+\\dfrac{C}{x+2}",
          "explanation": "Numerator degree $2$ is below denominator degree $3$, so it is proper; the repeated factor $x^2$ needs two terms and $(x+2)$ needs one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "x^2+5x+2\\equiv A\\,x(x+2)+B(x+2)+C\\,x^2",
          "explanation": "Clearing all denominators gives a polynomial identity valid for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand each product on the right-hand side",
          "workingLatex": "x^2+5x+2\\equiv A(x^2+2x)+B(x+2)+Cx^2",
          "explanation": "Multiplying out prepares the identity so we can compare coefficients of each power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 0 to isolate B",
          "workingLatex": "(0)^2+5(0)+2=B(0+2)",
          "explanation": "The root $x=0$ of the repeated factor removes the $A$ and $C$ terms, leaving $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for B",
          "workingLatex": "2=2B\\;\\Rightarrow\\;B=1",
          "explanation": "Dividing by $2$ gives $B=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = -2 to isolate C",
          "workingLatex": "(-2)^2+5(-2)+2=C(-2)^2",
          "explanation": "The root $x=-2$ removes the $A$ and $B$ terms, isolating $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for C",
          "workingLatex": "-4=4C\\;\\Rightarrow\\;C=-1",
          "explanation": "Dividing by $4$ gives $C=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare coefficients of x^2 to find A",
          "workingLatex": "\\text{coeff }x^2:\\;1=A+C",
          "explanation": "From the expanded form only the $A$ and $C$ terms create $x^2$, so matching that coefficient gives an equation for $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for A",
          "workingLatex": "1=A+(-1)\\;\\Rightarrow\\;A=2",
          "explanation": "Using $C=-1$ gives $A=2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the constants",
          "workingLatex": "A=2,\\quad B=1,\\quad C=-1",
          "explanation": "These values determine every numerator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the coefficient of x",
          "workingLatex": "\\text{coeff }x:\\;2A+B=4+1=5\\;\\checkmark",
          "explanation": "The $x$ coefficients from $A(x^2+2x)$ and $B(x+2)$ sum to $5$, matching the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{2}{x}+\\dfrac{1}{x^2}-\\dfrac{1}{x+2}",
          "explanation": "Substituting $A=2$, $B=1$, $C=-1$ gives the split.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify by recombining the fractions",
          "workingLatex": "\\dfrac{2x(x+2)+(x+2)-x^2}{x^2(x+2)}=\\dfrac{x^2+5x+2}{x^2(x+2)}\\;\\checkmark",
          "explanation": "Expanding the numerator gives $2x^2+4x+x+2-x^2=x^2+5x+2$, the original, confirming the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{2}{x}+\\dfrac{1}{x^2}-\\dfrac{1}{x+2}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne 0,-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2}{x}+\\dfrac{1}{x^2}-\\dfrac{1}{x+2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["partial fractions", "improper fractions", "algebraic long division", "repeated linear factors"],
    "questionText": "Express $\\dfrac{x^2-4x+8}{(x-3)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the fraction is improper",
          "workingLatex": "\\deg(x^2-4x+8)=2=\\deg\\big[(x-3)^2\\big]",
          "explanation": "Equal degrees mean the fraction is improper, so we divide before decomposing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator",
          "workingLatex": "(x-3)^2=x^2-6x+9",
          "explanation": "Writing the divisor in standard form lets us line up the division.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Carry out the division",
          "workingLatex": "x^2-4x+8=1\\cdot(x^2-6x+9)+(2x-1)",
          "explanation": "Since the leading terms match, the quotient is $1$; subtracting $x^2-6x+9$ leaves the remainder $(-4x+8)-(-6x+9)=2x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the mixed form",
          "workingLatex": "\\dfrac{x^2-4x+8}{(x-3)^2}=1+\\dfrac{2x-1}{(x-3)^2}",
          "explanation": "The quotient is $1$ and the remaining fraction $\\dfrac{2x-1}{(x-3)^2}$ is proper.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions for the remainder",
          "workingLatex": "\\dfrac{2x-1}{(x-3)^2}\\equiv\\dfrac{A}{x-3}+\\dfrac{B}{(x-3)^2}",
          "explanation": "The repeated factor needs one term for each power up to the square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the denominator",
          "workingLatex": "2x-1\\equiv A(x-3)+B",
          "explanation": "Multiplying by $(x-3)^2$ gives a linear identity in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the right-hand side",
          "workingLatex": "2x-1\\equiv Ax+(B-3A)",
          "explanation": "Grouping into an $x$ term and a constant makes the coefficient comparison direct.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 3 to find B",
          "workingLatex": "2(3)-1=B\\;\\Rightarrow\\;B=5",
          "explanation": "The repeated root removes the $A$ term, leaving $B$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare coefficients of x to find A",
          "workingLatex": "\\text{coeff }x:\\;2=A\\;\\Rightarrow\\;A=2",
          "explanation": "Matching the coefficient of $x$ gives $A=2$; the constant checks since $B-3A=5-6=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the remainder in partial fractions",
          "workingLatex": "\\dfrac{2x-1}{(x-3)^2}=\\dfrac{2}{x-3}+\\dfrac{5}{(x-3)^2}",
          "explanation": "Substituting $A=2$ and $B=5$ splits the proper part.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine with the quotient",
          "workingLatex": "1+\\dfrac{2}{x-3}+\\dfrac{5}{(x-3)^2}",
          "explanation": "Adding the quotient $1$ back on completes the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the remainder recombination",
          "workingLatex": "\\dfrac{2(x-3)+5}{(x-3)^2}=\\dfrac{2x-1}{(x-3)^2}\\;\\checkmark",
          "explanation": "Recombining returns $2x-1$, confirming the constants.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the full expression",
          "workingLatex": "1+\\dfrac{2x-1}{(x-3)^2}=\\dfrac{(x-3)^2+2x-1}{(x-3)^2}=\\dfrac{x^2-4x+8}{(x-3)^2}\\;\\checkmark",
          "explanation": "Adding $1$ back and expanding gives $x^2-6x+9+2x-1=x^2-4x+8$, the original numerator.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "1+\\dfrac{2}{x-3}+\\dfrac{5}{(x-3)^2}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1+\\dfrac{2}{x-3}+\\dfrac{5}{(x-3)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["partial fractions", "distinct linear factors", "algebraic fractions"],
    "questionText": "Express $\\dfrac{x^2-x+2}{x(x-1)(x-2)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm proper and choose the form",
          "workingLatex": "\\dfrac{x^2-x+2}{x(x-1)(x-2)}\\equiv\\dfrac{A}{x}+\\dfrac{B}{x-1}+\\dfrac{C}{x-2}",
          "explanation": "Numerator degree $2$ is below denominator degree $3$, so it is proper; each distinct linear factor gets one constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "x^2-x+2\\equiv A(x-1)(x-2)+B\\,x(x-2)+C\\,x(x-1)",
          "explanation": "Clearing every fraction gives a polynomial identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand each product on the right-hand side",
          "workingLatex": "x^2-x+2\\equiv A(x^2-3x+2)+B(x^2-2x)+C(x^2-x)",
          "explanation": "Multiplying out lets us confirm the answer later by comparing coefficients of each power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 0 to find A",
          "workingLatex": "(0)^2-0+2=A(-1)(-2)=2A\\;\\Rightarrow\\;A=1",
          "explanation": "The root $x=0$ removes the $B$ and $C$ terms, leaving $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 1 to find B",
          "workingLatex": "(1)^2-1+2=B(1)(-1)=-B\\;\\Rightarrow\\;B=-2",
          "explanation": "The root $x=1$ isolates $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 2 to find C",
          "workingLatex": "(2)^2-2+2=C(2)(1)=2C\\;\\Rightarrow\\;C=2",
          "explanation": "The root $x=2$ isolates $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the constants",
          "workingLatex": "A=1,\\quad B=-2,\\quad C=2",
          "explanation": "These are the numerators of the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the coefficient of x^2",
          "workingLatex": "\\text{coeff }x^2:\\;A+B+C=1-2+2=1\\;\\checkmark",
          "explanation": "The leading coefficients of the three products sum to $1$, matching the numerator's $x^2$ term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the constant term",
          "workingLatex": "\\text{const}:\\;2A=2\\;\\checkmark",
          "explanation": "Only $A(x-1)(x-2)$ contributes a constant, $2A=2$, matching the numerator, so the values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{1}{x}-\\dfrac{2}{x-1}+\\dfrac{2}{x-2}",
          "explanation": "Substituting $A=1$, $B=-2$, $C=2$ gives the split.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify by recombining the fractions",
          "workingLatex": "\\dfrac{(x-1)(x-2)-2x(x-2)+2x(x-1)}{x(x-1)(x-2)}=\\dfrac{x^2-x+2}{x(x-1)(x-2)}\\;\\checkmark",
          "explanation": "Expanding the numerator gives $(x^2-3x+2)-2(x^2-2x)+2(x^2-x)=x^2-x+2$, the original.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify with a test value x = 3",
          "workingLatex": "\\tfrac{1}{3}-\\tfrac{2}{2}+\\tfrac{2}{1}=\\tfrac{4}{3}=\\dfrac{9-3+2}{3\\cdot2\\cdot1}\\;\\checkmark",
          "explanation": "Both sides equal $\\tfrac{4}{3}$ at $x=3$, giving an independent confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{1}{x}-\\dfrac{2}{x-1}+\\dfrac{2}{x-2}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne 0,1,2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x}-\\dfrac{2}{x-1}+\\dfrac{2}{x-2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["partial fractions", "differentiation", "distinct linear factors", "algebraic fractions"],
    "questionText": "Express $y=\\dfrac{3x+5}{(x+1)(x+2)}$ in partial fractions, and hence find $\\dfrac{dy}{dx}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the partial-fraction form",
          "workingLatex": "\\dfrac{3x+5}{(x+1)(x+2)}\\equiv\\dfrac{A}{x+1}+\\dfrac{B}{x+2}",
          "explanation": "The fraction is proper (degree $1$ over degree $2$), so each distinct linear factor gets one constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "3x+5\\equiv A(x+2)+B(x+1)",
          "explanation": "Clearing the fractions gives a linear identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x = -1 to find A",
          "workingLatex": "3(-1)+5=A(-1+2)\\;\\Rightarrow\\;2=A\\;\\Rightarrow\\;A=2",
          "explanation": "The root $x=-1$ removes the $B$ term, leaving $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -2 to find B",
          "workingLatex": "3(-2)+5=B(-2+1)\\;\\Rightarrow\\;-1=-B\\;\\Rightarrow\\;B=1",
          "explanation": "The root $x=-2$ isolates $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the constants",
          "workingLatex": "A=2,\\quad B=1",
          "explanation": "These are the numerators for the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write y in partial fractions",
          "workingLatex": "y=\\dfrac{2}{x+1}+\\dfrac{1}{x+2}",
          "explanation": "This form is far easier to differentiate than the original single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify by recombining the fractions",
          "workingLatex": "\\dfrac{2(x+2)+(x+1)}{(x+1)(x+2)}=\\dfrac{3x+5}{(x+1)(x+2)}\\;\\checkmark",
          "explanation": "The numerator $2x+4+x+1=3x+5$ matches the original, so the decomposition is correct before we differentiate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite with negative indices",
          "workingLatex": "y=2(x+1)^{-1}+(x+2)^{-1}",
          "explanation": "Writing each term as a power lets us differentiate directly with the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the standard derivative",
          "workingLatex": "\\dfrac{d}{dx}\\!\\left[\\dfrac{k}{x-a}\\right]=-\\dfrac{k}{(x-a)^2}",
          "explanation": "Differentiating $k(x-a)^{-1}$ brings down $-1$ and lowers the power to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate the first term",
          "workingLatex": "\\dfrac{d}{dx}\\!\\left[\\dfrac{2}{x+1}\\right]=-\\dfrac{2}{(x+1)^2}",
          "explanation": "Applying the rule with $k=2$, $a=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Differentiate the second term",
          "workingLatex": "\\dfrac{d}{dx}\\!\\left[\\dfrac{1}{x+2}\\right]=-\\dfrac{1}{(x+2)^2}",
          "explanation": "Applying the rule with $k=1$, $a=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the derivatives",
          "workingLatex": "\\dfrac{dy}{dx}=-\\dfrac{2}{(x+1)^2}-\\dfrac{1}{(x+2)^2}",
          "explanation": "Adding the two derivative terms gives the full result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "y=\\dfrac{2}{x+1}+\\dfrac{1}{x+2},\\qquad \\dfrac{dy}{dx}=-\\dfrac{2}{(x+1)^2}-\\dfrac{1}{(x+2)^2}",
          "explanation": "Both results are valid for all $x\\ne -1,-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{2}{x+1}+\\dfrac{1}{x+2},\\quad \\dfrac{dy}{dx}=-\\dfrac{2}{(x+1)^2}-\\dfrac{1}{(x+2)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["partial fractions", "repeated linear factors", "comparing coefficients", "algebraic fractions"],
    "questionText": "Express $\\dfrac{4x^2-x-9}{(x+2)(x-1)^2}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm proper and choose the form",
          "workingLatex": "\\dfrac{4x^2-x-9}{(x+2)(x-1)^2}\\equiv\\dfrac{A}{x+2}+\\dfrac{B}{x-1}+\\dfrac{C}{(x-1)^2}",
          "explanation": "Numerator degree $2$ is below denominator degree $3$, so it is proper; the repeated factor $(x-1)^2$ needs two terms and $(x+2)$ needs one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by the denominator",
          "workingLatex": "4x^2-x-9\\equiv A(x-1)^2+B(x+2)(x-1)+C(x+2)",
          "explanation": "Clearing all denominators gives a polynomial identity valid for every $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand each product on the right-hand side",
          "workingLatex": "4x^2-x-9\\equiv A(x^2-2x+1)+B(x^2+x-2)+C(x+2)",
          "explanation": "Multiplying out lets us later compare coefficients of each power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = -2 to find A",
          "workingLatex": "4(-2)^2-(-2)-9=A(-2-1)^2\\;\\Rightarrow\\;9=9A\\;\\Rightarrow\\;A=1",
          "explanation": "The root $x=-2$ removes the $B$ and $C$ terms, leaving $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 1 to find C",
          "workingLatex": "4(1)^2-1-9=C(1+2)\\;\\Rightarrow\\;-6=3C\\;\\Rightarrow\\;C=-2",
          "explanation": "The repeated root $x=1$ removes the $A$ and $B$ terms, isolating $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare coefficients of x^2 to find B",
          "workingLatex": "\\text{coeff }x^2:\\;4=A+B",
          "explanation": "From the expanded form only the $A$ and $B$ products create $x^2$, so matching that coefficient gives an equation for $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for B",
          "workingLatex": "4=1+B\\;\\Rightarrow\\;B=3",
          "explanation": "Using $A=1$ gives $B=3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the constants",
          "workingLatex": "A=1,\\quad B=3,\\quad C=-2",
          "explanation": "These values determine every numerator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the coefficient of x",
          "workingLatex": "\\text{coeff }x:\\;-2A+B+C=-2+3-2=-1\\;\\checkmark",
          "explanation": "The $x$ coefficients from the three products sum to $-1$, matching the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the constant term",
          "workingLatex": "\\text{const}:\\;A-2B+2C=1-6-4=-9\\;\\checkmark",
          "explanation": "The constant terms sum to $-9$, again matching the numerator, confirming the values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the partial fractions",
          "workingLatex": "\\dfrac{1}{x+2}+\\dfrac{3}{x-1}-\\dfrac{2}{(x-1)^2}",
          "explanation": "Substituting $A=1$, $B=3$, $C=-2$ gives the split.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify by recombining the fractions",
          "workingLatex": "\\dfrac{(x-1)^2+3(x+2)(x-1)-2(x+2)}{(x+2)(x-1)^2}=\\dfrac{4x^2-x-9}{(x+2)(x-1)^2}\\;\\checkmark",
          "explanation": "Expanding gives $(x^2-2x+1)+3(x^2+x-2)-2(x+2)=4x^2-x-9$, the original numerator.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\dfrac{1}{x+2}+\\dfrac{3}{x-1}-\\dfrac{2}{(x-1)^2}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne -2,1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1}{x+2}+\\dfrac{3}{x-1}-\\dfrac{2}{(x-1)^2}$"
    }
  },
  {
    "id": "al.y2.pure.partial-fractions.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Algebraic and partial fractions",
    "subtopicId": "al.y2.pure.partial-fractions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["partial fractions", "improper fractions", "algebraic long division", "repeated linear factors"],
    "questionText": "Express $\\dfrac{2x^3+2x^2-1}{x^2(x-1)}$ in partial fractions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the fraction is improper",
          "workingLatex": "\\deg(2x^3+2x^2-1)=3=\\deg\\big[x^2(x-1)\\big]",
          "explanation": "Equal degrees mean the fraction is improper, so we divide before decomposing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the denominator",
          "workingLatex": "x^2(x-1)=x^3-x^2",
          "explanation": "Writing the divisor in standard form lets us line up the division.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Carry out the division",
          "workingLatex": "2x^3+2x^2-1=2(x^3-x^2)+(4x^2-1)",
          "explanation": "Since $2x^3\\div x^3=2$, subtracting $2(x^3-x^2)$ leaves the proper remainder $4x^2-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the mixed form",
          "workingLatex": "\\dfrac{2x^3+2x^2-1}{x^2(x-1)}=2+\\dfrac{4x^2-1}{x^2(x-1)}",
          "explanation": "The quotient is the constant $2$; the remaining fraction is proper and ready to decompose.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up partial fractions for the remainder",
          "workingLatex": "\\dfrac{4x^2-1}{x^2(x-1)}\\equiv\\dfrac{A}{x}+\\dfrac{B}{x^2}+\\dfrac{C}{x-1}",
          "explanation": "The repeated factor $x^2$ needs two terms and $(x-1)$ needs one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply through by the denominator",
          "workingLatex": "4x^2-1\\equiv A\\,x(x-1)+B(x-1)+C\\,x^2",
          "explanation": "Clearing the denominators gives a polynomial identity valid for all $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 0 to find B",
          "workingLatex": "4(0)^2-1=B(0-1)\\;\\Rightarrow\\;-1=-B\\;\\Rightarrow\\;B=1",
          "explanation": "The root $x=0$ removes the $A$ and $C$ terms, leaving $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 1 to find C",
          "workingLatex": "4(1)^2-1=C(1)^2\\;\\Rightarrow\\;3=C\\;\\Rightarrow\\;C=3",
          "explanation": "The root $x=1$ removes the $A$ and $B$ terms, isolating $C$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare coefficients of x^2 to find A",
          "workingLatex": "\\text{coeff }x^2:\\;4=A+C\\;\\Rightarrow\\;A=1",
          "explanation": "Only the $A$ and $C$ products create $x^2$ terms; with $C=3$ this gives $A=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the coefficient of x",
          "workingLatex": "\\text{coeff }x:\\;-A+B=-1+1=0\\;\\checkmark",
          "explanation": "The $x$ coefficients sum to $0$, matching the absence of an $x$ term in $4x^2-1$, confirming the values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the remainder in partial fractions",
          "workingLatex": "\\dfrac{4x^2-1}{x^2(x-1)}=\\dfrac{1}{x}+\\dfrac{1}{x^2}+\\dfrac{3}{x-1}",
          "explanation": "Substituting $A=1$, $B=1$, $C=3$ splits the proper part.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine with the quotient",
          "workingLatex": "2+\\dfrac{1}{x}+\\dfrac{1}{x^2}+\\dfrac{3}{x-1}",
          "explanation": "Adding the quotient $2$ back on completes the decomposition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "2+\\dfrac{1}{x}+\\dfrac{1}{x^2}+\\dfrac{3}{x-1}",
          "explanation": "This is the complete decomposition, valid for all $x\\ne 0,1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2+\\dfrac{1}{x}+\\dfrac{1}{x^2}+\\dfrac{3}{x-1}$"
    }
  },
];
