import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.logarithms.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "logarithms",
      "evaluate",
      "base-2"
    ],
    "questionText": "Evaluate $\\log_{2}8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a logarithm",
          "workingLatex": "\\log_{a}x=y \\iff a^{y}=x",
          "explanation": "A logarithm answers the question 'what power do I raise the base to, in order to get this number'. Writing the definition first turns the problem into a familiar index equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the base and the number",
          "workingLatex": "\\log_{2}8=y \\Rightarrow 2^{y}=8",
          "explanation": "Here the base is $2$ and the number is $8$. So we are looking for the power $y$ that turns $2$ into $8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List powers of the base",
          "workingLatex": "2^{1}=2,\\quad 2^{2}=4,\\quad 2^{3}=8",
          "explanation": "Writing out the first few powers of $2$ lets us spot exactly which one equals $8$ without any guessing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the number to a power",
          "workingLatex": "2^{3}=8 \\Rightarrow y=3",
          "explanation": "Since $2^{3}=8$, the power we needed is $3$. That value of $y$ is exactly what the logarithm is asking for.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value",
          "workingLatex": "\\log_{2}8=3",
          "explanation": "The logarithm equals the power we found, so the result is simply $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the answer",
          "workingLatex": "2^{3}=8 \\checkmark",
          "explanation": "Raising the base $2$ to our answer $3$ gives back $8$, which confirms the logarithm is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{2}8=3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "logarithms",
      "evaluate",
      "base-3"
    ],
    "questionText": "Evaluate $\\log_{3}81$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a logarithm",
          "workingLatex": "\\log_{a}x=y \\iff a^{y}=x",
          "explanation": "A logarithm asks what power turns the base into the given number. Starting from the definition converts the question into an index equation we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the base and the number",
          "workingLatex": "\\log_{3}81=y \\Rightarrow 3^{y}=81",
          "explanation": "The base is $3$ and the number is $81$, so we need the power $y$ that turns $3$ into $81$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List powers of the base",
          "workingLatex": "3^{1}=3,\\quad 3^{2}=9,\\quad 3^{3}=27,\\quad 3^{4}=81",
          "explanation": "Writing out successive powers of $3$ makes it clear which one lands on $81$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the number to a power",
          "workingLatex": "3^{4}=81 \\Rightarrow y=4",
          "explanation": "Because $3^{4}=81$, the power we were looking for is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value",
          "workingLatex": "\\log_{3}81=4",
          "explanation": "The logarithm equals that power, so the answer is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the answer",
          "workingLatex": "3^{4}=81 \\checkmark",
          "explanation": "Raising $3$ to the power $4$ returns $81$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{3}81=4$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "logarithms",
      "evaluate",
      "base-10"
    ],
    "questionText": "Evaluate $\\log_{10}1000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a logarithm",
          "workingLatex": "\\log_{a}x=y \\iff a^{y}=x",
          "explanation": "A logarithm tells us the power the base must be raised to. Rewriting with the definition turns the question into a simple powers-of-ten problem.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the base and the number",
          "workingLatex": "\\log_{10}1000=y \\Rightarrow 10^{y}=1000",
          "explanation": "The base is $10$ and the number is $1000$, so we want the power $y$ that turns $10$ into $1000$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List powers of the base",
          "workingLatex": "10^{1}=10,\\quad 10^{2}=100,\\quad 10^{3}=1000",
          "explanation": "Each extra power of $10$ adds another zero, so counting the zeros in $1000$ points straight to the power we need.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the number to a power",
          "workingLatex": "10^{3}=1000 \\Rightarrow y=3",
          "explanation": "Since $10^{3}=1000$, the required power is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value",
          "workingLatex": "\\log_{10}1000=3",
          "explanation": "The logarithm equals the power found, so the answer is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the answer",
          "workingLatex": "10^{3}=1000 \\checkmark",
          "explanation": "Raising $10$ to the power $3$ gives $1000$, which confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{10}1000=3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "logarithms",
      "evaluate",
      "base-5"
    ],
    "questionText": "Evaluate $\\log_{5}25$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a logarithm",
          "workingLatex": "\\log_{a}x=y \\iff a^{y}=x",
          "explanation": "A logarithm asks for the power that turns the base into the number. The definition lets us rewrite the problem as an index equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the base and the number",
          "workingLatex": "\\log_{5}25=y \\Rightarrow 5^{y}=25",
          "explanation": "The base is $5$ and the number is $25$, so we need the power $y$ that turns $5$ into $25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List powers of the base",
          "workingLatex": "5^{1}=5,\\quad 5^{2}=25",
          "explanation": "Writing out the powers of $5$ shows immediately which one equals $25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Match the number to a power",
          "workingLatex": "5^{2}=25 \\Rightarrow y=2",
          "explanation": "Because $5^{2}=25$, the power we were looking for is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value",
          "workingLatex": "\\log_{5}25=2",
          "explanation": "The logarithm equals that power, so the answer is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the answer",
          "workingLatex": "5^{2}=25 \\checkmark",
          "explanation": "Raising $5$ to the power $2$ returns $25$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{5}25=2$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "logarithms",
      "special-values",
      "definition"
    ],
    "questionText": "State the values of $\\log_{a}1$ and $\\log_{a}a$, and explain why they take these values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a logarithm",
          "workingLatex": "\\log_{a}x=y \\iff a^{y}=x",
          "explanation": "Both results follow directly from the definition, so we begin by writing it down. It tells us which power of the base gives the number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the first logarithm",
          "workingLatex": "\\log_{a}1=y \\Rightarrow a^{y}=1",
          "explanation": "To find $\\log_{a}1$ we ask which power of the base $a$ produces $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the zero-power rule",
          "workingLatex": "a^{0}=1 \\Rightarrow y=0",
          "explanation": "Any nonzero base raised to the power $0$ equals $1$. So the power that gives $1$ is $0$, meaning $\\log_{a}1=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the second logarithm",
          "workingLatex": "\\log_{a}a=y \\Rightarrow a^{y}=a",
          "explanation": "To find $\\log_{a}a$ we ask which power of the base $a$ produces $a$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the first-power rule",
          "workingLatex": "a^{1}=a \\Rightarrow y=1",
          "explanation": "The base to the power $1$ is just the base, so the power that gives $a$ is $1$, meaning $\\log_{a}a=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both results",
          "workingLatex": "\\log_{a}1=0,\\qquad \\log_{a}a=1",
          "explanation": "These two special values hold for every valid base $a$, and are worth memorising because they appear constantly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summarise the reasoning",
          "workingLatex": "a^{0}=1,\\qquad a^{1}=a",
          "explanation": "The whole result rests on two basic index facts: any base to the power $0$ is $1$, and any base to the power $1$ is itself.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}1=0$ and $\\log_{a}a=1$, because $a^{0}=1$ and $a^{1}=a$."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "logarithms",
      "index-to-log-form",
      "definition"
    ],
    "questionText": "Write $2^{5}=32$ in logarithm form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition linking the two forms",
          "workingLatex": "a^{y}=x \\iff \\log_{a}x=y",
          "explanation": "Index form and logarithm form are two ways of writing the same fact. The definition tells us exactly how to swap between them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the parts of the index statement",
          "workingLatex": "a=2,\\quad y=5,\\quad x=32",
          "explanation": "In $2^{5}=32$, the base is $2$, the exponent is $5$, and the result is $32$. Naming each part keeps the conversion clear.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Keep the same base",
          "workingLatex": "\\log_{2}\\,\\square",
          "explanation": "The base of the power becomes the base of the logarithm, so the log also has base $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Insert the number",
          "workingLatex": "\\log_{2}32",
          "explanation": "The result $32$ is the number we take the logarithm of, since it sits opposite the base in the definition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set it equal to the exponent",
          "workingLatex": "\\log_{2}32=5",
          "explanation": "The exponent $5$ becomes the value of the logarithm, completing the conversion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by converting back",
          "workingLatex": "\\log_{2}32=5 \\Rightarrow 2^{5}=32 \\checkmark",
          "explanation": "Turning the logarithm form back into index form returns the original statement, so the conversion is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{2}32=5$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "logarithms",
      "log-to-index-form",
      "definition"
    ],
    "questionText": "Write $\\log_{4}64=3$ in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition linking the two forms",
          "workingLatex": "\\log_{a}x=y \\iff a^{y}=x",
          "explanation": "A logarithm statement can always be rewritten as a power statement. The definition shows precisely how the parts move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the parts of the logarithm statement",
          "workingLatex": "a=4,\\quad x=64,\\quad y=3",
          "explanation": "In $\\log_{4}64=3$, the base is $4$, the number is $64$, and the value of the log is $3$. Labelling each part guides the rewrite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Keep the same base",
          "workingLatex": "4^{\\square}",
          "explanation": "The base of the logarithm becomes the base of the power, so the index form is built on $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the log value as the exponent",
          "workingLatex": "4^{3}",
          "explanation": "The value of the logarithm, $3$, becomes the exponent, since the log always tells us the power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set it equal to the number",
          "workingLatex": "4^{3}=64",
          "explanation": "The number inside the logarithm, $64$, is the result of the power, which completes the index form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the statement",
          "workingLatex": "4^{3}=4\\times4\\times4=64 \\checkmark",
          "explanation": "Working out $4^{3}$ gives $64$, so the index form is a true statement.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4^{3}=64$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "logarithms",
      "evaluate",
      "negative-index"
    ],
    "questionText": "Evaluate $\\log_{2}\\left(\\tfrac{1}{4}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a logarithm",
          "workingLatex": "\\log_{a}x=y \\iff a^{y}=x",
          "explanation": "A logarithm gives the power the base must be raised to. Starting from the definition converts the problem into an index equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the index equation",
          "workingLatex": "\\log_{2}\\left(\\tfrac{1}{4}\\right)=y \\Rightarrow 2^{y}=\\tfrac{1}{4}",
          "explanation": "The base is $2$ and the number is $\\tfrac{1}{4}$, so we need the power of $2$ that equals $\\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the fraction as a power of the base",
          "workingLatex": "\\tfrac{1}{4}=\\tfrac{1}{2^{2}}=2^{-2}",
          "explanation": "A reciprocal of a power is written with a negative index, so $\\tfrac{1}{4}$ becomes $2^{-2}$. This lets both sides share the same base.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the powers",
          "workingLatex": "2^{y}=2^{-2} \\Rightarrow y=-2",
          "explanation": "When two equal powers share the same base, their exponents must match, so $y=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value",
          "workingLatex": "\\log_{2}\\left(\\tfrac{1}{4}\\right)=-2",
          "explanation": "The logarithm equals the power found. The answer is negative because $\\tfrac{1}{4}$ is smaller than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the answer",
          "workingLatex": "2^{-2}=\\tfrac{1}{2^{2}}=\\tfrac{1}{4} \\checkmark",
          "explanation": "Raising $2$ to the power $-2$ returns $\\tfrac{1}{4}$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{2}\\left(\\tfrac{1}{4}\\right)=-2$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "logarithms",
      "natural-log",
      "special-values"
    ],
    "questionText": "Evaluate $\\ln\\mathrm{e}$ and $\\ln1$, and explain each result.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the natural logarithm means",
          "workingLatex": "\\ln x=\\log_{\\mathrm{e}}x \\iff \\mathrm{e}^{y}=x",
          "explanation": "The natural logarithm is simply a logarithm with base $\\mathrm{e}$. So $\\ln x$ asks which power of $\\mathrm{e}$ gives $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the first value",
          "workingLatex": "\\ln\\mathrm{e}=y \\Rightarrow \\mathrm{e}^{y}=\\mathrm{e}",
          "explanation": "For $\\ln\\mathrm{e}$ we ask which power of $\\mathrm{e}$ produces $\\mathrm{e}$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the first value",
          "workingLatex": "\\mathrm{e}^{1}=\\mathrm{e} \\Rightarrow \\ln\\mathrm{e}=1",
          "explanation": "The base to the power $1$ is just the base, so the power that gives $\\mathrm{e}$ is $1$. This matches the rule that the log of the base equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the second value",
          "workingLatex": "\\ln1=y \\Rightarrow \\mathrm{e}^{y}=1",
          "explanation": "For $\\ln1$ we ask which power of $\\mathrm{e}$ produces $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the second value",
          "workingLatex": "\\mathrm{e}^{0}=1 \\Rightarrow \\ln1=0",
          "explanation": "Any nonzero base raised to the power $0$ is $1$, so the power that gives $1$ is $0$. This matches the rule that the log of $1$ is always $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both results",
          "workingLatex": "\\ln\\mathrm{e}=1,\\qquad \\ln1=0",
          "explanation": "These are the natural-log versions of the two special logarithm values, and they follow directly from the powers $\\mathrm{e}^{1}=\\mathrm{e}$ and $\\mathrm{e}^{0}=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln\\mathrm{e}=1$ and $\\ln1=0$, because $\\mathrm{e}^{1}=\\mathrm{e}$ and $\\mathrm{e}^{0}=1$."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "logarithms",
      "natural-log",
      "evaluate"
    ],
    "questionText": "Evaluate $\\ln\\mathrm{e}^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the natural logarithm means",
          "workingLatex": "\\ln x=\\log_{\\mathrm{e}}x \\iff \\mathrm{e}^{y}=x",
          "explanation": "The natural logarithm has base $\\mathrm{e}$, so $\\ln x$ asks which power of $\\mathrm{e}$ gives $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the index equation",
          "workingLatex": "\\ln\\mathrm{e}^{3}=y \\Rightarrow \\mathrm{e}^{y}=\\mathrm{e}^{3}",
          "explanation": "We are asking which power of $\\mathrm{e}$ produces $\\mathrm{e}^{3}$, so we set the natural log equal to $y$ and rewrite it as a power of $\\mathrm{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the powers",
          "workingLatex": "\\mathrm{e}^{y}=\\mathrm{e}^{3} \\Rightarrow y=3",
          "explanation": "Both sides are powers of the same base $\\mathrm{e}$, so their exponents must be equal, giving $y=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate it to the general rule",
          "workingLatex": "\\ln\\mathrm{e}^{k}=k",
          "explanation": "Taking the natural log of $\\mathrm{e}$ raised to any power simply returns that power, because log and exponential with the same base undo each other. Here $k=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value",
          "workingLatex": "\\ln\\mathrm{e}^{3}=3",
          "explanation": "Applying the rule with $k=3$ gives the answer directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the answer",
          "workingLatex": "\\mathrm{e}^{3}=\\mathrm{e}^{3} \\checkmark",
          "explanation": "Raising $\\mathrm{e}$ to our answer $3$ reproduces $\\mathrm{e}^{3}$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln\\mathrm{e}^{3}=3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "logarithms",
      "evaluate",
      "fractional-index"
    ],
    "questionText": "Evaluate $\\log_{9}3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of a logarithm",
          "workingLatex": "\\log_{a}x=y \\iff a^{y}=x",
          "explanation": "A logarithm gives the power the base is raised to. The definition turns the question into an index equation we can work with.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the index equation",
          "workingLatex": "\\log_{9}3=y \\Rightarrow 9^{y}=3",
          "explanation": "The base is $9$ and the number is $3$. Since $3$ is smaller than $9$, we should expect a power between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the square root",
          "workingLatex": "9^{\\frac{1}{2}}=\\sqrt{9}=3",
          "explanation": "A power of $\\tfrac{1}{2}$ means the square root. The square root of $9$ is $3$, which is exactly the number we want.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm using powers of 3",
          "workingLatex": "9=3^{2} \\Rightarrow 9^{y}=3^{2y}=3^{1}",
          "explanation": "Writing $9$ as $3^{2}$ gives both sides the same base. Matching exponents gives $2y=1$, so $y=\\tfrac{1}{2}$, agreeing with the square-root approach.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the value",
          "workingLatex": "\\log_{9}3=\\tfrac{1}{2}",
          "explanation": "Both methods give the same power, so the logarithm equals $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the answer",
          "workingLatex": "9^{\\frac{1}{2}}=3 \\checkmark",
          "explanation": "Raising $9$ to the power $\\tfrac{1}{2}$ returns $3$, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{9}3=\\tfrac{1}{2}$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "single-logarithm"
    ],
    "questionText": "Write $\\log_{a}x+\\log_{a}y$ as a single logarithm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\log_{a}x+\\log_{a}y",
          "explanation": "We start with two separate logarithms that share the same base $a$. Because the bases match, we are allowed to combine them into one logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the addition law",
          "workingLatex": "\\log_{a}m+\\log_{a}n=\\log_{a}(mn)",
          "explanation": "Adding two logarithms of the same base is the same as taking the logarithm of their product. A sum of logs collapses into a single log of a product.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the parts",
          "workingLatex": "m=x,\\quad n=y",
          "explanation": "Comparing our expression with the law, the first argument is $x$ and the second is $y$. Naming them clearly helps us slot them into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the arguments",
          "workingLatex": "mn=xy",
          "explanation": "The law tells us to multiply the two arguments together. Here $x$ times $y$ is simply $xy$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the law",
          "workingLatex": "\\log_{a}x+\\log_{a}y=\\log_{a}(xy)",
          "explanation": "Placing the product $xy$ inside one logarithm gives the combined form. The two terms have become a single logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by reversing",
          "workingLatex": "\\log_{a}(xy)=\\log_{a}x+\\log_{a}y",
          "explanation": "Splitting the product back apart returns the original two terms, which confirms the combination is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}(xy)$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "single-logarithm"
    ],
    "questionText": "Write $\\log_{a}p-\\log_{a}q$ as a single logarithm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\log_{a}p-\\log_{a}q",
          "explanation": "We begin with two logarithms of the same base $a$ joined by a subtraction. Matching bases mean we can combine them into one logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the subtraction law",
          "workingLatex": "\\log_{a}m-\\log_{a}n=\\log_{a}\\left(\\frac{m}{n}\\right)",
          "explanation": "Subtracting two logarithms of the same base is the same as taking the logarithm of their quotient. A difference of logs becomes a single log of a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the parts",
          "workingLatex": "m=p,\\quad n=q",
          "explanation": "The term being subtracted from is $p$, and the term subtracted is $q$. The order matters here because division is not symmetric.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the quotient",
          "workingLatex": "\\frac{m}{n}=\\frac{p}{q}",
          "explanation": "The law tells us to divide the first argument by the second. This gives the fraction $\\frac{p}{q}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the law",
          "workingLatex": "\\log_{a}p-\\log_{a}q=\\log_{a}\\left(\\frac{p}{q}\\right)",
          "explanation": "Putting the quotient inside one logarithm gives the single combined form we wanted.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by reversing",
          "workingLatex": "\\log_{a}\\left(\\frac{p}{q}\\right)=\\log_{a}p-\\log_{a}q",
          "explanation": "Splitting the fraction back into a difference returns the original expression, confirming the result is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}\\left(\\frac{p}{q}\\right)$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "power-law"
    ],
    "questionText": "Write $3\\log_{a}x$ in the form $\\log_{a}(x^{k})$, stating the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "3\\log_{a}x",
          "explanation": "Here a whole number is multiplying a logarithm. The power law lets us move that multiplier up to become a power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the power law",
          "workingLatex": "k\\log_{a}x=\\log_{a}(x^{k})",
          "explanation": "A number in front of a logarithm can be moved to become the exponent of the argument. Repeated addition of a log is the same as a power inside the log.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the multiplier",
          "workingLatex": "k=3",
          "explanation": "The number multiplying the logarithm is $3$, so this is the value that will become the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move the coefficient to the power",
          "workingLatex": "3\\log_{a}x=\\log_{a}(x^{3})",
          "explanation": "Applying the law, the $3$ becomes the exponent of $x$. The expression is now a single logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with the meaning of the law",
          "workingLatex": "\\log_{a}(x^{3})=\\log_{a}(x\\cdot x\\cdot x)=3\\log_{a}x",
          "explanation": "Writing $x^{3}$ as $x$ multiplied three times and splitting the product gives three copies of $\\log_{a}x$, which matches where we began.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the value of k",
          "workingLatex": "k=3",
          "explanation": "The requested form is achieved with the exponent equal to $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}(x^{3})$, with $k=3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-laws",
      "evaluate"
    ],
    "questionText": "Using the addition law, evaluate $\\log_{2}4+\\log_{2}8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\log_{2}4+\\log_{2}8",
          "explanation": "Both logarithms have base $2$, so we can combine them with the addition law before evaluating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the addition law",
          "workingLatex": "\\log_{a}m+\\log_{a}n=\\log_{a}(mn)",
          "explanation": "Adding logs of the same base turns into the log of a product. This lets us bring the two terms together.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine into one logarithm",
          "workingLatex": "\\log_{2}4+\\log_{2}8=\\log_{2}(4\\times 8)",
          "explanation": "Multiplying the arguments $4$ and $8$ collects everything inside a single logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the product",
          "workingLatex": "\\log_{2}(4\\times 8)=\\log_{2}32",
          "explanation": "Since $4\\times 8=32$, the expression simplifies to $\\log_{2}32$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the argument as a power of the base",
          "workingLatex": "32=2^{5}",
          "explanation": "To evaluate a logarithm, it helps to write the number as a power of the base. Here $32$ is $2$ raised to the fifth power.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\log_{2}32=\\log_{2}2^{5}=5",
          "explanation": "The logarithm asks what power of $2$ gives $32$, and that power is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer",
          "workingLatex": "2^{5}=32\\checkmark",
          "explanation": "Raising $2$ to the power $5$ returns $32$, which confirms the value is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-laws",
      "evaluate"
    ],
    "questionText": "Evaluate $\\log_{3}54-\\log_{3}2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\log_{3}54-\\log_{3}2",
          "explanation": "Both logarithms share base $3$, so the subtraction law lets us combine them before evaluating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the subtraction law",
          "workingLatex": "\\log_{a}m-\\log_{a}n=\\log_{a}\\left(\\frac{m}{n}\\right)",
          "explanation": "A difference of logs of the same base becomes the log of a quotient. This brings the two terms into one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine into one logarithm",
          "workingLatex": "\\log_{3}54-\\log_{3}2=\\log_{3}\\left(\\frac{54}{2}\\right)",
          "explanation": "Dividing the first argument by the second collects everything inside a single logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the fraction",
          "workingLatex": "\\log_{3}\\left(\\frac{54}{2}\\right)=\\log_{3}27",
          "explanation": "Since $54\\div 2=27$, the expression simplifies to $\\log_{3}27$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the argument as a power of the base",
          "workingLatex": "27=3^{3}",
          "explanation": "Expressing $27$ as a power of $3$ makes the logarithm easy to read off. Here $27$ is $3$ cubed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\log_{3}27=\\log_{3}3^{3}=3",
          "explanation": "The logarithm asks what power of $3$ gives $27$, and that power is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer",
          "workingLatex": "3^{3}=27\\checkmark",
          "explanation": "Raising $3$ to the power $3$ returns $27$, confirming the result is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "single-logarithm"
    ],
    "questionText": "Write $2\\log x+\\log y$ as a single logarithm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "2\\log x+\\log y",
          "explanation": "There are two things to handle here: a coefficient of $2$ on the first log, and an addition joining the terms. We deal with the coefficient first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the power law",
          "workingLatex": "k\\log x=\\log(x^{k})",
          "explanation": "A number in front of a logarithm can move up to become a power of the argument. This clears the coefficient so both terms look alike.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move the coefficient to a power",
          "workingLatex": "2\\log x=\\log(x^{2})",
          "explanation": "The $2$ becomes the exponent of $x$, turning the first term into $\\log(x^{2})$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the full expression",
          "workingLatex": "2\\log x+\\log y=\\log(x^{2})+\\log y",
          "explanation": "Both terms are now plain logarithms with no coefficients, so the addition law can be applied.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the addition law",
          "workingLatex": "\\log(x^{2})+\\log y=\\log(x^{2}y)",
          "explanation": "Adding logs of the same base gives the log of the product, so we multiply $x^{2}$ by $y$ inside one logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the single logarithm",
          "workingLatex": "\\log(x^{2}y)",
          "explanation": "The expression is now a single logarithm of the product $x^{2}y$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log(x^{2}y)$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "expand"
    ],
    "questionText": "Write $\\log_{a}\\left(\\frac{x^{2}}{y}\\right)$ as a difference of logarithms in simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\log_{a}\\left(\\frac{x^{2}}{y}\\right)",
          "explanation": "The argument is a fraction, so the subtraction law will let us split it into two separate logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the subtraction law",
          "workingLatex": "\\log_{a}\\left(\\frac{m}{n}\\right)=\\log_{a}m-\\log_{a}n",
          "explanation": "The log of a quotient is the log of the top minus the log of the bottom. This separates the numerator from the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Split the fraction",
          "workingLatex": "\\log_{a}\\left(\\frac{x^{2}}{y}\\right)=\\log_{a}(x^{2})-\\log_{a}y",
          "explanation": "The numerator $x^{2}$ becomes the first log and the denominator $y$ becomes the subtracted log.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the power law",
          "workingLatex": "\\log_{a}(x^{k})=k\\log_{a}x",
          "explanation": "A power inside a logarithm can come down to the front as a multiplier. This simplifies the $x^{2}$ term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Bring the power down",
          "workingLatex": "\\log_{a}(x^{2})=2\\log_{a}x",
          "explanation": "The exponent $2$ moves to the front of the logarithm, giving $2\\log_{a}x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the final form",
          "workingLatex": "\\log_{a}\\left(\\frac{x^{2}}{y}\\right)=2\\log_{a}x-\\log_{a}y",
          "explanation": "Combining the two results gives the fully simplified difference of logarithms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\log_{a}x-\\log_{a}y$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-laws",
      "evaluate"
    ],
    "questionText": "Evaluate $\\log_{5}50-\\log_{5}2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\log_{5}50-\\log_{5}2",
          "explanation": "Both logarithms have base $5$, so the subtraction law lets us combine them before evaluating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the subtraction law",
          "workingLatex": "\\log_{a}m-\\log_{a}n=\\log_{a}\\left(\\frac{m}{n}\\right)",
          "explanation": "A difference of logs of the same base becomes the log of a quotient, bringing the two terms into one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine into one logarithm",
          "workingLatex": "\\log_{5}50-\\log_{5}2=\\log_{5}\\left(\\frac{50}{2}\\right)",
          "explanation": "Dividing the first argument by the second gathers everything inside a single logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the fraction",
          "workingLatex": "\\log_{5}\\left(\\frac{50}{2}\\right)=\\log_{5}25",
          "explanation": "Since $50\\div 2=25$, the expression simplifies to $\\log_{5}25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the argument as a power of the base",
          "workingLatex": "25=5^{2}",
          "explanation": "Writing $25$ as a power of $5$ makes the logarithm easy to read. Here $25$ is $5$ squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\log_{5}25=\\log_{5}5^{2}=2",
          "explanation": "The logarithm asks what power of $5$ gives $25$, and that power is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer",
          "workingLatex": "5^{2}=25\\checkmark",
          "explanation": "Squaring $5$ returns $25$, which confirms the value is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "natural-log"
    ],
    "questionText": "Simplify $\\ln 3+\\ln 4$, giving your answer as a single natural logarithm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\ln 3+\\ln 4",
          "explanation": "The natural logarithm $\\ln$ is just a logarithm with a fixed base, so the same laws of logs apply. Both terms share this base, so they can be combined.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the addition law",
          "workingLatex": "\\ln m+\\ln n=\\ln(mn)",
          "explanation": "Adding two natural logs is the same as taking the natural log of the product. A sum of logs becomes a single log of a product.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the parts",
          "workingLatex": "m=3,\\quad n=4",
          "explanation": "The two arguments to be multiplied are $3$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine into one logarithm",
          "workingLatex": "\\ln 3+\\ln 4=\\ln(3\\times 4)",
          "explanation": "Applying the law, we multiply the arguments together inside a single natural logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the product",
          "workingLatex": "\\ln(3\\times 4)=\\ln 12",
          "explanation": "Since $3\\times 4=12$, the expression simplifies to $\\ln 12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by reversing",
          "workingLatex": "\\ln 12=\\ln(3\\times 4)=\\ln 3+\\ln 4",
          "explanation": "Splitting $12$ back into $3\\times 4$ returns the original sum, confirming the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln 12$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "power-law"
    ],
    "questionText": "Write $\\tfrac{1}{2}\\log_{a}x$ as a single logarithm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\tfrac{1}{2}\\log_{a}x",
          "explanation": "A fraction is multiplying the logarithm. The power law lets us move this multiplier up to become an exponent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the power law",
          "workingLatex": "k\\log_{a}x=\\log_{a}(x^{k})",
          "explanation": "A number in front of a logarithm can move to become the exponent of the argument. This works for fractional numbers just as it does for whole numbers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move the coefficient to the power",
          "workingLatex": "\\tfrac{1}{2}\\log_{a}x=\\log_{a}\\left(x^{\\frac{1}{2}}\\right)",
          "explanation": "The coefficient $\\tfrac{1}{2}$ becomes the exponent of $x$, giving $x^{\\frac{1}{2}}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the meaning of a half power",
          "workingLatex": "x^{\\frac{1}{2}}=\\sqrt{x}",
          "explanation": "Raising a number to the power $\\tfrac{1}{2}$ is the same as taking its square root. This lets us write the argument more neatly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the single logarithm",
          "workingLatex": "\\tfrac{1}{2}\\log_{a}x=\\log_{a}\\sqrt{x}",
          "explanation": "Replacing $x^{\\frac{1}{2}}$ with $\\sqrt{x}$ gives the tidy single-logarithm form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by reversing",
          "workingLatex": "\\log_{a}\\sqrt{x}=\\log_{a}\\left(x^{\\frac{1}{2}}\\right)=\\tfrac{1}{2}\\log_{a}x",
          "explanation": "Bringing the exponent $\\tfrac{1}{2}$ back down to the front returns the original expression, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}\\sqrt{x}$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-laws",
      "evaluate"
    ],
    "questionText": "Evaluate $2\\log_{10}5+\\log_{10}4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "2\\log_{10}5+\\log_{10}4",
          "explanation": "There is a coefficient of $2$ on the first log, so we deal with that first before adding the terms together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the power law",
          "workingLatex": "k\\log_{a}x=\\log_{a}(x^{k})",
          "explanation": "A number in front of a logarithm can move up to become a power. This clears the coefficient so both terms are plain logs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move the coefficient to a power",
          "workingLatex": "2\\log_{10}5=\\log_{10}(5^{2})=\\log_{10}25",
          "explanation": "The $2$ becomes the exponent of $5$, and $5^{2}=25$, so the first term is $\\log_{10}25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the addition law",
          "workingLatex": "\\log_{10}25+\\log_{10}4=\\log_{10}(25\\times 4)",
          "explanation": "Adding logs of the same base gives the log of the product, so we multiply $25$ by $4$ inside one logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the product",
          "workingLatex": "\\log_{10}(25\\times 4)=\\log_{10}100",
          "explanation": "Since $25\\times 4=100$, the expression simplifies to $\\log_{10}100$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\log_{10}100=\\log_{10}10^{2}=2",
          "explanation": "The logarithm asks what power of $10$ gives $100$, and that power is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer",
          "workingLatex": "10^{2}=100\\checkmark",
          "explanation": "Raising $10$ to the power $2$ returns $100$, confirming the value is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "expanding-logs"
    ],
    "questionText": "Express $\\log_{a}\\left(\\dfrac{x^{2}y}{z}\\right)$ in terms of $\\log_{a}x$, $\\log_{a}y$ and $\\log_{a}z$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression to expand",
          "workingLatex": "\\log_{a}\\left(\\dfrac{x^{2}y}{z}\\right)",
          "explanation": "The aim is to split one logarithm of a compound fraction into separate simpler logarithms. We do this by peeling off one log law at a time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the quotient law",
          "workingLatex": "\\log_{a}\\left(\\dfrac{M}{N}\\right)=\\log_{a}M-\\log_{a}N",
          "explanation": "A division inside a logarithm becomes a subtraction of two logarithms. The outermost operation here is the division by $z$, so we deal with that first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the quotient law",
          "workingLatex": "\\log_{a}\\left(\\dfrac{x^{2}y}{z}\\right)=\\log_{a}(x^{2}y)-\\log_{a}z",
          "explanation": "Treating the numerator $x^{2}y$ as one block and the denominator $z$ as the other, the fraction splits into their difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the product law",
          "workingLatex": "\\log_{a}(MN)=\\log_{a}M+\\log_{a}N",
          "explanation": "A multiplication inside a logarithm becomes an addition of two logarithms. This lets us break up the numerator block.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the product law to the numerator",
          "workingLatex": "\\log_{a}(x^{2}y)=\\log_{a}x^{2}+\\log_{a}y",
          "explanation": "The product $x^{2}\\times y$ separates into the sum of their individual logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute this back in",
          "workingLatex": "\\log_{a}\\left(\\dfrac{x^{2}y}{z}\\right)=\\log_{a}x^{2}+\\log_{a}y-\\log_{a}z",
          "explanation": "Replacing $\\log_{a}(x^{2}y)$ with its expanded form gives three separate terms, though one still contains a power.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the power law",
          "workingLatex": "\\log_{a}(M^{k})=k\\log_{a}M",
          "explanation": "A power inside a logarithm can be brought down to the front as a multiplier. This clears the exponent on $x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the power law",
          "workingLatex": "\\log_{a}x^{2}=2\\log_{a}x",
          "explanation": "The exponent $2$ moves out in front, turning the squared term into twice a single logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the fully expanded form",
          "workingLatex": "\\log_{a}\\left(\\dfrac{x^{2}y}{z}\\right)=2\\log_{a}x+\\log_{a}y-\\log_{a}z",
          "explanation": "Every term is now a single logarithm expressed in terms of $\\log_{a}x$, $\\log_{a}y$ and $\\log_{a}z$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify by reversing the laws",
          "workingLatex": "2\\log_{a}x+\\log_{a}y-\\log_{a}z=\\log_{a}x^{2}+\\log_{a}y-\\log_{a}z=\\log_{a}\\left(\\dfrac{x^{2}y}{z}\\right)",
          "explanation": "Recombining the terms rebuilds the original expression exactly, which confirms the expansion is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}\\left(\\dfrac{x^{2}y}{z}\\right)=2\\log_{a}x+\\log_{a}y-\\log_{a}z$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "expanding-logs"
    ],
    "questionText": "Express $\\log_{a}\\left(\\dfrac{x^{3}}{\\sqrt{y}}\\right)$ in terms of $\\log_{a}x$ and $\\log_{a}y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression",
          "workingLatex": "\\log_{a}\\left(\\dfrac{x^{3}}{\\sqrt{y}}\\right)",
          "explanation": "We want this single logarithm rewritten as a combination of $\\log_{a}x$ and $\\log_{a}y$. The square root needs handling before the log laws apply cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the square root as a power",
          "workingLatex": "\\sqrt{y}=y^{1/2}",
          "explanation": "A square root is the same as raising to the power one half. Writing it this way lets the power law act on it later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the power form",
          "workingLatex": "\\log_{a}\\left(\\dfrac{x^{3}}{\\sqrt{y}}\\right)=\\log_{a}\\left(\\dfrac{x^{3}}{y^{1/2}}\\right)",
          "explanation": "Now both the numerator and denominator are simple powers, which the log laws handle directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the quotient law",
          "workingLatex": "\\log_{a}\\left(\\dfrac{M}{N}\\right)=\\log_{a}M-\\log_{a}N",
          "explanation": "The division is the outermost operation, so we split the fraction into a subtraction of two logarithms first.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the quotient law",
          "workingLatex": "\\log_{a}\\left(\\dfrac{x^{3}}{y^{1/2}}\\right)=\\log_{a}x^{3}-\\log_{a}y^{1/2}",
          "explanation": "The numerator gives the first term and the denominator gives the subtracted term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the power law",
          "workingLatex": "\\log_{a}(M^{k})=k\\log_{a}M",
          "explanation": "Each remaining exponent can be brought to the front of its logarithm as a multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the power law to each term",
          "workingLatex": "\\log_{a}x^{3}=3\\log_{a}x,\\qquad \\log_{a}y^{1/2}=\\tfrac{1}{2}\\log_{a}y",
          "explanation": "The exponent $3$ becomes a coefficient of $3$, and the exponent $\\tfrac{1}{2}$ becomes a coefficient of $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine into the final form",
          "workingLatex": "\\log_{a}\\left(\\dfrac{x^{3}}{\\sqrt{y}}\\right)=3\\log_{a}x-\\tfrac{1}{2}\\log_{a}y",
          "explanation": "The expression is now written purely in terms of $\\log_{a}x$ and $\\log_{a}y$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by reversing the laws",
          "workingLatex": "3\\log_{a}x-\\tfrac{1}{2}\\log_{a}y=\\log_{a}x^{3}-\\log_{a}y^{1/2}=\\log_{a}\\left(\\dfrac{x^{3}}{\\sqrt{y}}\\right)",
          "explanation": "Recombining the terms returns the original expression, confirming the expansion is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}\\left(\\dfrac{x^{3}}{\\sqrt{y}}\\right)=3\\log_{a}x-\\tfrac{1}{2}\\log_{a}y$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "combining-logs"
    ],
    "questionText": "Write $2\\log_{a}x+3\\log_{a}y-\\log_{a}z$ as a single logarithm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression",
          "workingLatex": "2\\log_{a}x+3\\log_{a}y-\\log_{a}z",
          "explanation": "This time we work in reverse: several separate logarithms are to be combined into a single one. We first deal with the coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the power law used in reverse",
          "workingLatex": "k\\log_{a}M=\\log_{a}(M^{k})",
          "explanation": "A number multiplying a logarithm can be moved up to become an exponent inside it. This clears the coefficients in front.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert the coefficients into powers",
          "workingLatex": "2\\log_{a}x=\\log_{a}x^{2},\\qquad 3\\log_{a}y=\\log_{a}y^{3}",
          "explanation": "The $2$ becomes a power on $x$ and the $3$ becomes a power on $y$, so every term is now a plain logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the whole expression",
          "workingLatex": "\\log_{a}x^{2}+\\log_{a}y^{3}-\\log_{a}z",
          "explanation": "With no coefficients left, the expression is ready to be joined using the product and quotient laws.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the product law",
          "workingLatex": "\\log_{a}M+\\log_{a}N=\\log_{a}(MN)",
          "explanation": "Two added logarithms combine into one logarithm of a product. We use this on the two terms being added.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the added terms",
          "workingLatex": "\\log_{a}x^{2}+\\log_{a}y^{3}=\\log_{a}(x^{2}y^{3})",
          "explanation": "The two positive terms merge into a single logarithm of $x^{2}y^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Update the expression",
          "workingLatex": "\\log_{a}(x^{2}y^{3})-\\log_{a}z",
          "explanation": "Only the subtraction of $\\log_{a}z$ now remains to be dealt with.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the quotient law",
          "workingLatex": "\\log_{a}M-\\log_{a}N=\\log_{a}\\left(\\dfrac{M}{N}\\right)",
          "explanation": "A subtraction of two logarithms combines into one logarithm of a quotient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the quotient law",
          "workingLatex": "\\log_{a}(x^{2}y^{3})-\\log_{a}z=\\log_{a}\\left(\\dfrac{x^{2}y^{3}}{z}\\right)",
          "explanation": "The subtracted term becomes the denominator, giving a single combined logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify by expanding back",
          "workingLatex": "\\log_{a}\\left(\\dfrac{x^{2}y^{3}}{z}\\right)=2\\log_{a}x+3\\log_{a}y-\\log_{a}z",
          "explanation": "Expanding the single logarithm with the log laws returns the original expression, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\log_{a}x+3\\log_{a}y-\\log_{a}z=\\log_{a}\\left(\\dfrac{x^{2}y^{3}}{z}\\right)$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "expressing-in-terms"
    ],
    "questionText": "Given that $\\log_{a}2=p$ and $\\log_{a}3=q$, find $\\log_{a}12$ in terms of $p$ and $q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given information",
          "workingLatex": "\\log_{a}2=p,\\qquad \\log_{a}3=q",
          "explanation": "We are given the logarithms of $2$ and $3$. The strategy is to rebuild $12$ out of $2$ and $3$ so these values can be used.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise 12 using 2 and 3",
          "workingLatex": "12=4\\times 3=2^{2}\\times 3",
          "explanation": "Breaking $12$ into prime factors that are only $2$ and $3$ means every part can be turned into $p$ or $q$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the logarithm using this factorisation",
          "workingLatex": "\\log_{a}12=\\log_{a}(2^{2}\\times 3)",
          "explanation": "Replacing $12$ with $2^{2}\\times 3$ prepares the expression for the log laws.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the product law",
          "workingLatex": "\\log_{a}(MN)=\\log_{a}M+\\log_{a}N",
          "explanation": "A product inside a logarithm splits into a sum, separating the factor $2^{2}$ from the factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the product law",
          "workingLatex": "\\log_{a}(2^{2}\\times 3)=\\log_{a}2^{2}+\\log_{a}3",
          "explanation": "The two factors give two separate logarithms added together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the power law",
          "workingLatex": "\\log_{a}(M^{k})=k\\log_{a}M",
          "explanation": "The exponent on $2^{2}$ can be brought to the front as a multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the power law",
          "workingLatex": "\\log_{a}2^{2}=2\\log_{a}2",
          "explanation": "The power $2$ moves out in front, turning the term into twice $\\log_{a}2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the given values",
          "workingLatex": "\\log_{a}12=2\\log_{a}2+\\log_{a}3",
          "explanation": "Everything is now written using $\\log_{a}2$ and $\\log_{a}3$, which we know in terms of $p$ and $q$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Replace with p and q",
          "workingLatex": "\\log_{a}12=2p+q",
          "explanation": "Swapping $\\log_{a}2$ for $p$ and $\\log_{a}3$ for $q$ gives the answer in the required form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify numerically using base 10",
          "workingLatex": "2\\log_{10}2+\\log_{10}3\\approx 2(0.301)+0.477=1.079=\\log_{10}12",
          "explanation": "Testing with base $10$ values gives the same number as $\\log_{10}12$, which confirms the relationship holds.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}12=2p+q$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "expressing-in-terms"
    ],
    "questionText": "Given that $\\log_{a}2=p$ and $\\log_{a}5=q$, find $\\log_{a}20$ in terms of $p$ and $q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given information",
          "workingLatex": "\\log_{a}2=p,\\qquad \\log_{a}5=q",
          "explanation": "We know the logarithms of $2$ and $5$. The plan is to express $20$ using only these two numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise 20 using 2 and 5",
          "workingLatex": "20=4\\times 5=2^{2}\\times 5",
          "explanation": "Writing $20$ in terms of the primes $2$ and $5$ lets every factor be replaced by $p$ or $q$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the logarithm using this factorisation",
          "workingLatex": "\\log_{a}20=\\log_{a}(2^{2}\\times 5)",
          "explanation": "Substituting $2^{2}\\times 5$ for $20$ sets up the expression for the log laws.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the product law",
          "workingLatex": "\\log_{a}(MN)=\\log_{a}M+\\log_{a}N",
          "explanation": "The product inside the logarithm splits into a sum, separating $2^{2}$ from $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the product law",
          "workingLatex": "\\log_{a}(2^{2}\\times 5)=\\log_{a}2^{2}+\\log_{a}5",
          "explanation": "The two factors become two separate logarithms added together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the power law",
          "workingLatex": "\\log_{a}(M^{k})=k\\log_{a}M",
          "explanation": "The exponent on $2^{2}$ can be brought down to the front of the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the power law",
          "workingLatex": "\\log_{a}2^{2}=2\\log_{a}2",
          "explanation": "The power $2$ becomes a coefficient, giving twice $\\log_{a}2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the given values",
          "workingLatex": "\\log_{a}20=2\\log_{a}2+\\log_{a}5",
          "explanation": "The expression is now built entirely from $\\log_{a}2$ and $\\log_{a}5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Replace with p and q",
          "workingLatex": "\\log_{a}20=2p+q",
          "explanation": "Replacing $\\log_{a}2$ with $p$ and $\\log_{a}5$ with $q$ gives the required answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify numerically using base 10",
          "workingLatex": "2\\log_{10}2+\\log_{10}5\\approx 2(0.301)+0.699=1.301=\\log_{10}20",
          "explanation": "Checking with base $10$ values produces $\\log_{10}20$ exactly, confirming the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}20=2p+q$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-equations",
      "index-form"
    ],
    "questionText": "Solve the equation $\\log_{2}x=5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation",
          "workingLatex": "\\log_{2}x=5",
          "explanation": "The unknown $x$ is trapped inside a logarithm. To free it, we convert the equation into its equivalent index form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the meaning of a logarithm",
          "workingLatex": "\\log_{b}c=d \\iff b^{d}=c",
          "explanation": "A logarithm answers the question of what power the base must be raised to. This definition links the log form to a power form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the base and the value",
          "workingLatex": "b=2,\\quad d=5,\\quad c=x",
          "explanation": "Matching our equation to the definition, the base is $2$, the result of the logarithm is $5$, and the argument is $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to index form",
          "workingLatex": "x=2^{5}",
          "explanation": "Rewriting the logarithm as a power isolates $x$ as $2$ raised to the power $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write out the repeated multiplication",
          "workingLatex": "2^{5}=2\\times 2\\times 2\\times 2\\times 2",
          "explanation": "Raising $2$ to the power $5$ means multiplying five copies of $2$ together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power",
          "workingLatex": "2^{5}=32",
          "explanation": "Carrying out the multiplication gives $32$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution",
          "workingLatex": "x=32",
          "explanation": "This is the value of $x$ that satisfies the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the domain",
          "workingLatex": "x=32>0",
          "explanation": "A logarithm is only defined for a positive argument, and $32$ is positive, so the solution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "\\log_{2}32=\\log_{2}2^{5}=5\\log_{2}2=5",
          "explanation": "Substituting $x=32$ back into the left side returns $5$, matching the right side and confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=32$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-equations",
      "index-form"
    ],
    "questionText": "Solve the equation $\\log_{3}x=4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation",
          "workingLatex": "\\log_{3}x=4",
          "explanation": "The unknown $x$ sits inside a logarithm with base $3$. We release it by switching to index form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the meaning of a logarithm",
          "workingLatex": "\\log_{b}c=d \\iff b^{d}=c",
          "explanation": "The logarithm tells us the power to which the base is raised to give the argument. This is the bridge to a power equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the base and the value",
          "workingLatex": "b=3,\\quad d=4,\\quad c=x",
          "explanation": "Comparing with the definition, the base is $3$, the logarithm equals $4$, and the argument is $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to index form",
          "workingLatex": "x=3^{4}",
          "explanation": "Rewriting as a power leaves $x$ equal to $3$ raised to the power $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write out the repeated multiplication",
          "workingLatex": "3^{4}=3\\times 3\\times 3\\times 3",
          "explanation": "Raising $3$ to the power $4$ means multiplying four copies of $3$ together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power",
          "workingLatex": "3^{4}=81",
          "explanation": "Working through the multiplication gives $81$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution",
          "workingLatex": "x=81",
          "explanation": "This is the value of $x$ that solves the equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the domain",
          "workingLatex": "x=81>0",
          "explanation": "The argument of a logarithm must be positive, and $81$ is positive, so the solution is acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "\\log_{3}81=\\log_{3}3^{4}=4\\log_{3}3=4",
          "explanation": "Putting $x=81$ back into the logarithm returns $4$, matching the equation and confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=81$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-equations",
      "index-form"
    ],
    "questionText": "Solve the equation $\\log_{5}(2x+1)=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation",
          "workingLatex": "\\log_{5}(2x+1)=2",
          "explanation": "Here a whole expression $2x+1$ is inside the logarithm. We first convert to index form, then solve the linear equation that appears.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the meaning of a logarithm",
          "workingLatex": "\\log_{b}c=d \\iff b^{d}=c",
          "explanation": "The logarithm gives the power the base is raised to. This lets us rewrite the equation without a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert to index form",
          "workingLatex": "2x+1=5^{2}",
          "explanation": "The base $5$ raised to the power $2$ equals the argument $2x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "5^{2}=25",
          "explanation": "Squaring $5$ gives $25$, which is the value the expression must equal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the linear equation",
          "workingLatex": "2x+1=25",
          "explanation": "The logarithm has now become a straightforward linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract 1 from both sides",
          "workingLatex": "2x=24",
          "explanation": "Removing the constant term isolates the term containing $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide both sides by 2",
          "workingLatex": "x=12",
          "explanation": "Dividing by the coefficient of $x$ gives the value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the domain",
          "workingLatex": "2(12)+1=25>0",
          "explanation": "The argument of the logarithm must be positive; substituting $x=12$ gives $25$, which is positive, so the solution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substitution",
          "workingLatex": "\\log_{5}(2(12)+1)=\\log_{5}25=\\log_{5}5^{2}=2",
          "explanation": "Returning $x=12$ to the original equation gives $2$, which matches the right side and confirms the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=12$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "simplifying-logs"
    ],
    "questionText": "Simplify $\\log_{a}8+\\log_{a}2-\\log_{a}4$ to a single logarithm.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression",
          "workingLatex": "\\log_{a}8+\\log_{a}2-\\log_{a}4",
          "explanation": "Three separate logarithms with the same base can be merged into one using the product and quotient laws.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the product law",
          "workingLatex": "\\log_{a}M+\\log_{a}N=\\log_{a}(MN)",
          "explanation": "Two logarithms that are added combine into a single logarithm of their product. We use this on the first two terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine the first two terms",
          "workingLatex": "\\log_{a}8+\\log_{a}2=\\log_{a}(8\\times 2)=\\log_{a}16",
          "explanation": "Multiplying $8$ by $2$ gives $16$, so the two added logarithms become $\\log_{a}16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Update the expression",
          "workingLatex": "\\log_{a}16-\\log_{a}4",
          "explanation": "Only the subtraction of $\\log_{a}4$ now remains.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the quotient law",
          "workingLatex": "\\log_{a}M-\\log_{a}N=\\log_{a}\\left(\\dfrac{M}{N}\\right)",
          "explanation": "A subtraction of logarithms becomes a single logarithm of a quotient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the quotient law",
          "workingLatex": "\\log_{a}16-\\log_{a}4=\\log_{a}\\left(\\dfrac{16}{4}\\right)",
          "explanation": "The subtracted term becomes the denominator of the fraction inside the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{16}{4}=4",
          "explanation": "Dividing $16$ by $4$ gives $4$, a clean whole number.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the simplified result",
          "workingLatex": "\\log_{a}8+\\log_{a}2-\\log_{a}4=\\log_{a}4",
          "explanation": "The three logarithms reduce to the single logarithm $\\log_{a}4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by combining in one step",
          "workingLatex": "\\log_{a}\\left(\\dfrac{8\\times 2}{4}\\right)=\\log_{a}\\left(\\dfrac{16}{4}\\right)=\\log_{a}4",
          "explanation": "Merging all three terms in a single fraction gives the same result, confirming the simplification.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}8+\\log_{a}2-\\log_{a}4=\\log_{a}4$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "logarithms",
      "log-laws",
      "expressing-in-terms"
    ],
    "questionText": "Given that $\\log_{a}3=p$, express $\\log_{a}9+\\log_{a}27$ in terms of $p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given information",
          "workingLatex": "\\log_{a}3=p",
          "explanation": "We only know the logarithm of $3$, so both $9$ and $27$ must be rewritten as powers of $3$ to make use of it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express 9 and 27 as powers of 3",
          "workingLatex": "9=3^{2},\\qquad 27=3^{3}",
          "explanation": "Both numbers are powers of $3$, which lets the power law connect them to $\\log_{a}3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the expression",
          "workingLatex": "\\log_{a}9+\\log_{a}27=\\log_{a}3^{2}+\\log_{a}3^{3}",
          "explanation": "Substituting the power forms sets up both terms for the power law.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the power law",
          "workingLatex": "\\log_{a}(M^{k})=k\\log_{a}M",
          "explanation": "An exponent inside a logarithm can be brought to the front as a multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the power law to each term",
          "workingLatex": "\\log_{a}3^{2}=2\\log_{a}3,\\qquad \\log_{a}3^{3}=3\\log_{a}3",
          "explanation": "The exponents $2$ and $3$ become the coefficients of each logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two terms",
          "workingLatex": "2\\log_{a}3+3\\log_{a}3=5\\log_{a}3",
          "explanation": "Both terms are multiples of the same logarithm, so their coefficients add to give $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the given value",
          "workingLatex": "5\\log_{a}3=5p",
          "explanation": "Replacing $\\log_{a}3$ with $p$ gives the answer in terms of $p$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using the product law",
          "workingLatex": "\\log_{a}9+\\log_{a}27=\\log_{a}(9\\times 27)=\\log_{a}243=\\log_{a}3^{5}=5\\log_{a}3",
          "explanation": "Combining the two logarithms into $\\log_{a}243$ and noting $243=3^{5}$ gives the same $5\\log_{a}3$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\log_{a}9+\\log_{a}27=5p",
          "explanation": "Both methods agree, so the expression equals $5p$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\log_{a}9+\\log_{a}27=5p$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "exponential-equations"
    ],
    "questionText": "Solve the equation $2^{x}=10$, giving your answer both as an exact value in terms of natural logarithms and correct to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "2^{x}=10",
          "explanation": "The unknown $x$ is stuck up in the exponent, so ordinary rearranging cannot reach it. Logarithms are the tool designed to bring an exponent down to ground level.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take natural logs of both sides",
          "workingLatex": "\\ln\\left(2^{x}\\right)=\\ln 10",
          "explanation": "Because both sides are equal, applying the same function to each keeps them equal. Taking $\\ln$ is the key move that lets us access the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the power law of logs",
          "workingLatex": "x\\ln 2=\\ln 10",
          "explanation": "The power law $\\ln(a^{b})=b\\ln a$ slides the exponent $x$ out to the front. Now $x$ is a simple multiplier rather than a power.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate x",
          "workingLatex": "x=\\dfrac{\\ln 10}{\\ln 2}",
          "explanation": "Dividing both sides by $\\ln 2$ leaves $x$ alone. This fraction is the exact value; no rounding has happened yet.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the exact answer",
          "workingLatex": "x=\\dfrac{\\ln 10}{\\ln 2}",
          "explanation": "This is the precise answer and would be the correct response if an exact form is requested. A decimal is only an approximation of this quantity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the two logarithms",
          "workingLatex": "\\ln 10\\approx 2.302585,\\quad \\ln 2\\approx 0.693147",
          "explanation": "Reading these values from a calculator prepares us to turn the exact fraction into a usable decimal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide to get a decimal",
          "workingLatex": "x\\approx\\dfrac{2.302585}{0.693147}\\approx 3.321928",
          "explanation": "Carrying several decimal places here protects against rounding errors before the final rounding step.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 significant figures",
          "workingLatex": "x\\approx 3.32",
          "explanation": "The fourth significant figure is $1$, which is less than $5$, so the third figure stays as it is.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substituting back",
          "workingLatex": "2^{3.321928}\\approx 10.00",
          "explanation": "Raising $2$ to our value returns $10$, confirming the answer satisfies the original equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\dfrac{\\ln 10}{\\ln 2}\\approx 3.32$ (3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "natural-log"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{x}=7$, giving your answer as an exact value and correct to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "\\mathrm{e}^{x}=7",
          "explanation": "The unknown $x$ appears as an exponent with base $\\mathrm{e}$. The natural logarithm is built specifically to undo the base-$\\mathrm{e}$ exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the inverse function",
          "workingLatex": "\\ln\\left(\\mathrm{e}^{x}\\right)=x",
          "explanation": "Since $\\ln$ and $\\mathrm{e}^{x}$ are inverses, applying $\\ln$ to $\\mathrm{e}^{x}$ returns $x$ cleanly. This is why base $\\mathrm{e}$ is so convenient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take natural logs of both sides",
          "workingLatex": "\\ln\\left(\\mathrm{e}^{x}\\right)=\\ln 7",
          "explanation": "Applying $\\ln$ to both sides keeps the equation balanced and unlocks the exponent on the left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the left-hand side",
          "workingLatex": "x=\\ln 7",
          "explanation": "The left side collapses to $x$, so the exact solution appears immediately as a single natural logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the exact answer",
          "workingLatex": "x=\\ln 7",
          "explanation": "This is the precise value. Keeping it in $\\ln$ form avoids any rounding until we deliberately choose to.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln 7\\approx 1.945910",
          "explanation": "A calculator gives the decimal value of $\\ln 7$, ready to be rounded.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "x\\approx 1.95",
          "explanation": "The fourth significant figure is $5$, so we round the third figure up from $4$ to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify using the exact form",
          "workingLatex": "\\mathrm{e}^{\\ln 7}=7",
          "explanation": "Substituting the exact answer back gives exactly $7$ because $\\mathrm{e}$ and $\\ln$ cancel, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the rounded value",
          "workingLatex": "\\mathrm{e}^{1.945910}\\approx 7.00",
          "explanation": "Raising $\\mathrm{e}$ to the decimal value also returns $7$, so both the exact and approximate answers are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\ln 7\\approx 1.95$ (3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "exponential-equations"
    ],
    "questionText": "Solve the equation $3^{x}=20$, giving your answer correct to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "3^{x}=20",
          "explanation": "The unknown $x$ is an exponent, so we need logarithms to bring it down where we can work with it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take natural logs of both sides",
          "workingLatex": "\\ln\\left(3^{x}\\right)=\\ln 20",
          "explanation": "Applying the same logarithm to both sides preserves equality and gives us access to the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the power law of logs",
          "workingLatex": "x\\ln 3=\\ln 20",
          "explanation": "The rule $\\ln(a^{b})=b\\ln a$ moves the exponent to the front, turning the power into a multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate x",
          "workingLatex": "x=\\dfrac{\\ln 20}{\\ln 3}",
          "explanation": "Dividing by $\\ln 3$ leaves $x$ by itself. This ratio is the exact solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the exact answer",
          "workingLatex": "x=\\dfrac{\\ln 20}{\\ln 3}",
          "explanation": "This fraction of logarithms is exact; the decimal we find next is only an approximation of it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the two logarithms",
          "workingLatex": "\\ln 20\\approx 2.995732,\\quad \\ln 3\\approx 1.098612",
          "explanation": "A calculator provides these values so we can compute the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide to get a decimal",
          "workingLatex": "x\\approx\\dfrac{2.995732}{1.098612}\\approx 2.726833",
          "explanation": "Keeping extra decimal places at this stage prevents rounding error from creeping into the final answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 significant figures",
          "workingLatex": "x\\approx 2.73",
          "explanation": "The fourth significant figure is $6$, which is $5$ or more, so the third figure rounds up from $2$ to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substituting back",
          "workingLatex": "3^{2.726833}\\approx 20.0",
          "explanation": "Raising $3$ to our value returns $20$, confirming that the solution is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\dfrac{\\ln 20}{\\ln 3}\\approx 2.73$ (3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "exponential-equations"
    ],
    "questionText": "Solve the equation $5\\times 2^{x}=40$, giving your answer as an exact value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "5\\times 2^{x}=40",
          "explanation": "The exponential term $2^{x}$ is multiplied by $5$. Before touching the exponent, it helps to get the power on its own.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide both sides by 5",
          "workingLatex": "2^{x}=\\dfrac{40}{5}",
          "explanation": "Removing the coefficient first isolates the exponential, which keeps the equation simple.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the right-hand side",
          "workingLatex": "2^{x}=8",
          "explanation": "$40$ divided by $5$ is $8$, giving a clean power equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Express 8 as a power of 2",
          "workingLatex": "8=2^{3}",
          "explanation": "Since $8$ is a whole-number power of $2$, we can match the bases exactly and avoid logarithms entirely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite with equal bases",
          "workingLatex": "2^{x}=2^{3}",
          "explanation": "With both sides written as powers of the same base, the exponents alone must agree.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equate the exponents",
          "workingLatex": "x=3",
          "explanation": "Because $2^{x}$ is a one-to-one function, equal outputs force equal exponents, so $x=3$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm using logarithms",
          "workingLatex": "x=\\dfrac{\\ln 8}{\\ln 2}=\\dfrac{3\\ln 2}{\\ln 2}=3",
          "explanation": "Solving with logs gives the same result, reassuring us that the matching-bases shortcut was valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the exponential term",
          "workingLatex": "2^{3}=8",
          "explanation": "Checking $2^{3}$ gives $8$, matching the isolated equation from earlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the full equation",
          "workingLatex": "5\\times 2^{3}=5\\times 8=40",
          "explanation": "Substituting back into the original equation returns $40$, confirming the solution is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "natural-log"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{2x}=5$, giving your answer as an exact value and correct to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "\\mathrm{e}^{2x}=5",
          "explanation": "The unknown sits inside the exponent with base $\\mathrm{e}$, so the natural logarithm is the natural inverse to apply.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take natural logs of both sides",
          "workingLatex": "\\ln\\left(\\mathrm{e}^{2x}\\right)=\\ln 5",
          "explanation": "Applying $\\ln$ to both sides keeps the equation balanced and exposes the exponent $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the left-hand side",
          "workingLatex": "2x=\\ln 5",
          "explanation": "Because $\\ln\\left(\\mathrm{e}^{2x}\\right)=2x$, the left side simplifies to the exponent itself.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate x",
          "workingLatex": "x=\\tfrac{1}{2}\\ln 5",
          "explanation": "Dividing by $2$ leaves $x$ alone, giving a tidy exact expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the exact answer",
          "workingLatex": "x=\\tfrac{1}{2}\\ln 5",
          "explanation": "This is the precise value. It can also be written as $\\ln\\sqrt{5}$, but the half-log form is simplest here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln 5\\approx 1.609438",
          "explanation": "A calculator gives the decimal value of $\\ln 5$ ready for halving.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Halve to get a decimal",
          "workingLatex": "x\\approx\\dfrac{1.609438}{2}\\approx 0.804719",
          "explanation": "Dividing by $2$ produces the decimal form of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 significant figures",
          "workingLatex": "x\\approx 0.805",
          "explanation": "The fourth significant figure is $7$, so the third figure rounds up from $4$ to $5$. Leading zeros are not significant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substituting back",
          "workingLatex": "\\mathrm{e}^{2\\times 0.804719}=\\mathrm{e}^{1.609438}\\approx 5.00",
          "explanation": "Doubling the answer recovers $\\ln 5$, and exponentiating returns $5$, confirming the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\tfrac{1}{2}\\ln 5\\approx 0.805$ (3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "natural-log"
    ],
    "questionText": "Solve the equation $\\ln x=2$, giving your answer as an exact value and correct to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "\\ln x=2",
          "explanation": "Here the unknown is inside a logarithm. To free $x$ we need to undo the $\\ln$, which means using the exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the domain requirement",
          "workingLatex": "x>0",
          "explanation": "Logarithms are only defined for positive inputs, so any valid solution must be positive. We keep this in mind as a check.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponentiate both sides with base e",
          "workingLatex": "\\mathrm{e}^{\\ln x}=\\mathrm{e}^{2}",
          "explanation": "Applying $\\mathrm{e}^{(\\cdot)}$ to both sides is the inverse of $\\ln$, and it keeps the equation balanced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the left-hand side",
          "workingLatex": "x=\\mathrm{e}^{2}",
          "explanation": "Since $\\mathrm{e}^{\\ln x}=x$, the left side collapses straight to $x$, giving the exact solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the exact answer",
          "workingLatex": "x=\\mathrm{e}^{2}",
          "explanation": "This is the precise value, and it is clearly positive, so it satisfies the domain requirement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the exponential",
          "workingLatex": "\\mathrm{e}^{2}\\approx 7.389056",
          "explanation": "A calculator gives the decimal value of $\\mathrm{e}^{2}$ ready for rounding.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "x\\approx 7.39",
          "explanation": "The fourth significant figure is $0$, which is below $5$, so the third figure stays as $9$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify using the exact form",
          "workingLatex": "\\ln\\left(\\mathrm{e}^{2}\\right)=2",
          "explanation": "Substituting the exact answer back gives exactly $2$ because $\\ln$ and $\\mathrm{e}$ cancel, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the rounded value",
          "workingLatex": "\\ln(7.39)\\approx 2.00",
          "explanation": "The decimal value also gives $2$ when logged, so the exact and approximate answers agree.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\mathrm{e}^{2}\\approx 7.39$ (3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "natural-log"
    ],
    "questionText": "Solve the equation $\\ln(2x-1)=1$, giving your answer as an exact value and correct to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "\\ln(2x-1)=1",
          "explanation": "The unknown is buried inside a logarithm, so we must undo the $\\ln$ first before we can solve the linear part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the domain requirement",
          "workingLatex": "2x-1>0",
          "explanation": "The expression inside the log must be positive, so a valid solution needs $2x-1>0$. We will confirm this at the end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponentiate both sides with base e",
          "workingLatex": "\\mathrm{e}^{\\ln(2x-1)}=\\mathrm{e}^{1}",
          "explanation": "Applying $\\mathrm{e}^{(\\cdot)}$ to both sides reverses the natural log while keeping the equation balanced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the left-hand side",
          "workingLatex": "2x-1=\\mathrm{e}",
          "explanation": "Because $\\mathrm{e}^{\\ln(2x-1)}=2x-1$, the log disappears and we are left with a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add 1 to both sides",
          "workingLatex": "2x=\\mathrm{e}+1",
          "explanation": "Moving the constant across begins the process of isolating $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by 2",
          "workingLatex": "x=\\dfrac{\\mathrm{e}+1}{2}",
          "explanation": "Dividing by $2$ leaves $x$ on its own, giving the exact solution in terms of $\\mathrm{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact answer",
          "workingLatex": "x=\\dfrac{\\mathrm{e}+1}{2}",
          "explanation": "This is the precise value; the decimal below is only an approximation of it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the value of e",
          "workingLatex": "x\\approx\\dfrac{2.718282+1}{2}=\\dfrac{3.718282}{2}",
          "explanation": "Using $\\mathrm{e}\\approx 2.718282$ turns the exact form into a number we can evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the decimal",
          "workingLatex": "x\\approx 1.859141",
          "explanation": "Carrying out the division gives the decimal value of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 significant figures",
          "workingLatex": "x\\approx 1.86",
          "explanation": "The fourth significant figure is $9$, so the third figure rounds up from $5$ to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify by substituting back",
          "workingLatex": "2(1.859141)-1=2.718282=\\mathrm{e},\\quad \\ln(\\mathrm{e})=1",
          "explanation": "The inside of the log equals $\\mathrm{e}$, which is positive, and $\\ln(\\mathrm{e})=1$, matching the equation and confirming the domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\dfrac{\\mathrm{e}+1}{2}\\approx 1.86$ (3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "exponential-equations"
    ],
    "questionText": "Solve the equation $4^{x}=2^{x+3}$, giving your answer as an exact value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "4^{x}=2^{x+3}",
          "explanation": "Both sides are powers, but of different bases. If we can rewrite them with a common base, we can compare exponents directly without logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express 4 as a power of 2",
          "workingLatex": "4=2^{2}",
          "explanation": "Since $4$ is itself a power of $2$, both sides can share the base $2$, which is the key simplifying idea.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the left-hand side",
          "workingLatex": "4^{x}=\\left(2^{2}\\right)^{x}=2^{2x}",
          "explanation": "Using the power-of-a-power rule $\\left(a^{m}\\right)^{n}=a^{mn}$, the left side becomes $2^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation with a common base",
          "workingLatex": "2^{2x}=2^{x+3}",
          "explanation": "Now both sides are powers of $2$, so their exponents can be compared directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the exponents",
          "workingLatex": "2x=x+3",
          "explanation": "Because $2^{(\\cdot)}$ is one-to-one, equal powers of $2$ must have equal exponents. This removes the exponentials entirely.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the linear equation",
          "workingLatex": "2x-x=3\\ \\Rightarrow\\ x=3",
          "explanation": "Subtracting $x$ from both sides leaves $x=3$, the exact solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact answer",
          "workingLatex": "x=3",
          "explanation": "No logarithms were needed because both bases were powers of $2$; the answer is an exact integer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the left-hand side",
          "workingLatex": "4^{3}=64",
          "explanation": "Substituting $x=3$ into the original left side gives $64$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify against the right-hand side",
          "workingLatex": "2^{3+3}=2^{6}=64",
          "explanation": "The right side also equals $64$, so both sides match and the solution $x=3$ is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "exponential-equations"
    ],
    "questionText": "Solve the equation $7^{x-1}=30$, giving your answer as an exact value and correct to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "7^{x-1}=30",
          "explanation": "The unknown appears in the exponent $x-1$, so logarithms are needed to bring the whole exponent down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take natural logs of both sides",
          "workingLatex": "\\ln\\left(7^{x-1}\\right)=\\ln 30",
          "explanation": "Applying $\\ln$ to both sides preserves equality and lets us reach the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the power law of logs",
          "workingLatex": "(x-1)\\ln 7=\\ln 30",
          "explanation": "The rule $\\ln(a^{b})=b\\ln a$ brings the entire exponent $x-1$ to the front as a multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by ln 7",
          "workingLatex": "x-1=\\dfrac{\\ln 30}{\\ln 7}",
          "explanation": "Dividing by $\\ln 7$ isolates the bracket, leaving a simple expression for $x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add 1 to both sides",
          "workingLatex": "x=1+\\dfrac{\\ln 30}{\\ln 7}",
          "explanation": "Adding $1$ finishes isolating $x$, giving the exact solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the exact answer",
          "workingLatex": "x=1+\\dfrac{\\ln 30}{\\ln 7}",
          "explanation": "This is the precise value; the decimal that follows is only an approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the two logarithms",
          "workingLatex": "\\ln 30\\approx 3.401197,\\quad \\ln 7\\approx 1.945910",
          "explanation": "A calculator supplies these values so the ratio can be computed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to find the ratio",
          "workingLatex": "\\dfrac{\\ln 30}{\\ln 7}\\approx 1.747867",
          "explanation": "Carrying several decimal places keeps the result accurate before the final rounding.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add 1 to get the decimal",
          "workingLatex": "x\\approx 1+1.747867=2.747867",
          "explanation": "Adding $1$ gives the decimal value of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 significant figures",
          "workingLatex": "x\\approx 2.75",
          "explanation": "The fourth significant figure is $7$, so the third figure rounds up from $4$ to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify by substituting back",
          "workingLatex": "7^{2.747867-1}=7^{1.747867}\\approx 30.0",
          "explanation": "Raising $7$ to $x-1$ returns $30$, confirming that the solution satisfies the original equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=1+\\dfrac{\\ln 30}{\\ln 7}\\approx 2.75$ (3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "quadratic"
    ],
    "questionText": "Solve $\\log_{2}x+\\log_{2}(x-2)=3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the strategy",
          "workingLatex": "\\log_{2}x+\\log_{2}(x-2)=3",
          "explanation": "There are two separate logarithms added together on the left. The cleanest route is to merge them into one logarithm, because a single log equal to a number can be turned straight into index form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the product law",
          "workingLatex": "\\log_{2}\\left[x(x-2)\\right]=3",
          "explanation": "Adding two logs of the same base is the same as taking the log of the product, since $\\log_{a}M+\\log_{a}N=\\log_{a}(MN)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert to index form",
          "workingLatex": "x(x-2)=2^{3}",
          "explanation": "A statement $\\log_{a}f=c$ simply says that raising the base $a$ to the power $c$ gives $f$, so here the argument equals $2^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the right-hand side",
          "workingLatex": "x(x-2)=8",
          "explanation": "Working out $2^{3}=8$ replaces the power with a plain number, ready to form an equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the bracket",
          "workingLatex": "x^{2}-2x=8",
          "explanation": "Multiplying out gives a quadratic expression, which shows this is really a quadratic equation in disguise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form a quadratic equation",
          "workingLatex": "x^{2}-2x-8=0",
          "explanation": "Moving every term to one side sets the equation equal to zero, the standard shape for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "(x-4)(x+2)=0",
          "explanation": "Two numbers that multiply to $-8$ and add to $-2$ are $-4$ and $+2$, giving these factors.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve each factor",
          "workingLatex": "x=4 \\quad\\text{or}\\quad x=-2",
          "explanation": "A product is zero only when one of the factors is zero, so each bracket gives a candidate value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the domain",
          "workingLatex": "x>0 \\ \\text{and}\\ x-2>0 \\ \\Rightarrow\\ x>2",
          "explanation": "Both arguments must be positive for the original logs to exist. The value $x=-2$ makes them negative, so it must be rejected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the remaining root",
          "workingLatex": "\\log_{2}4+\\log_{2}2=2+1=3",
          "explanation": "Substituting $x=4$ keeps both arguments positive and returns the required value of $3$, confirming it is genuine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=4$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving"
    ],
    "questionText": "Solve $\\log_{3}(x+6)=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\log_{3}(x+6)=2",
          "explanation": "This is already a single logarithm equal to a number, so it can be rewritten directly in index form without any combining.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to index form",
          "workingLatex": "x+6=3^{2}",
          "explanation": "The equation $\\log_{a}f=c$ means the base raised to the power gives the argument, so the argument equals $3^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the power",
          "workingLatex": "x+6=9",
          "explanation": "Computing $3^{2}=9$ turns the right-hand side into a simple number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate x",
          "workingLatex": "x=9-6",
          "explanation": "Subtracting $6$ from both sides leaves $x$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "x=3",
          "explanation": "Carrying out the subtraction gives the candidate solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain requirement",
          "workingLatex": "x+6>0",
          "explanation": "For the original logarithm to be defined, its argument must be strictly positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the argument",
          "workingLatex": "3+6=9>0",
          "explanation": "Substituting the answer shows the argument is positive, so the solution is allowed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify in the original equation",
          "workingLatex": "\\log_{3}9=2",
          "explanation": "Since $3^{2}=9$, the left-hand side really does equal $2$, matching the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "x=3",
          "explanation": "There is exactly one value that satisfies the equation and its domain, so the solution is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "quadratic"
    ],
    "questionText": "Solve $\\log_{5}(x)+\\log_{5}(x+4)=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the strategy",
          "workingLatex": "\\log_{5}x+\\log_{5}(x+4)=1",
          "explanation": "Two logarithms of the same base are added, so the natural first move is to combine them into a single logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the product law",
          "workingLatex": "\\log_{5}\\left[x(x+4)\\right]=1",
          "explanation": "The sum of logs becomes the log of the product, using $\\log_{a}M+\\log_{a}N=\\log_{a}(MN)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert to index form",
          "workingLatex": "x(x+4)=5^{1}",
          "explanation": "A single log equal to a number rewrites as the base raised to that number, so the argument equals $5^{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the power",
          "workingLatex": "x(x+4)=5",
          "explanation": "Since $5^{1}=5$, the right-hand side is just $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the bracket",
          "workingLatex": "x^{2}+4x=5",
          "explanation": "Multiplying out reveals a quadratic expression on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form a quadratic equation",
          "workingLatex": "x^{2}+4x-5=0",
          "explanation": "Bringing every term to one side gives the standard zero form for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "(x+5)(x-1)=0",
          "explanation": "The numbers $+5$ and $-1$ multiply to $-5$ and add to $+4$, producing these factors.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve each factor",
          "workingLatex": "x=-5 \\quad\\text{or}\\quad x=1",
          "explanation": "Setting each bracket to zero gives the two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the domain",
          "workingLatex": "x>0 \\ \\text{and}\\ x+4>0",
          "explanation": "Both arguments must be positive. The value $x=-5$ makes $\\log_{5}(-5)$ undefined, so it is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the remaining root",
          "workingLatex": "\\log_{5}1+\\log_{5}5=0+1=1",
          "explanation": "Substituting $x=1$ keeps both arguments positive and gives exactly $1$, confirming it is the valid solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=1$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving"
    ],
    "questionText": "Solve $\\ln(3x-2)=\\ln(x+4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare both sides",
          "workingLatex": "\\ln(3x-2)=\\ln(x+4)",
          "explanation": "Each side is a single natural logarithm, so the two arguments can be matched directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use that ln is one-to-one",
          "workingLatex": "3x-2=x+4",
          "explanation": "The logarithm function never repeats a value, so if $\\ln A=\\ln B$ then $A=B$; the arguments must be equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the x terms",
          "workingLatex": "2x-2=4",
          "explanation": "Subtracting $x$ from both sides gathers the unknowns on the left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the x term",
          "workingLatex": "2x=6",
          "explanation": "Adding $2$ to both sides moves the constant across.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "x=3",
          "explanation": "Dividing by $2$ gives the candidate value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain requirement",
          "workingLatex": "3x-2>0 \\ \\text{and}\\ x+4>0",
          "explanation": "Both logarithm arguments must be positive for the original equation to make sense.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the first argument",
          "workingLatex": "3(3)-2=7>0",
          "explanation": "Substituting $x=3$ keeps the left argument positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the second argument",
          "workingLatex": "3+4=7>0",
          "explanation": "The right argument is also positive, so the value is within the allowed domain.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\ln 7=\\ln 7",
          "explanation": "Both sides evaluate to the same logarithm, confirming the solution is genuine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving",
      "quadratic"
    ],
    "questionText": "Solve $2\\ln x=\\ln(2x+3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Deal with the coefficient",
          "workingLatex": "2\\ln x=\\ln x^{2}",
          "explanation": "A number in front of a logarithm can be moved up as a power, using $k\\ln x=\\ln x^{k}$, so the left side becomes a single log.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the equation",
          "workingLatex": "\\ln x^{2}=\\ln(2x+3)",
          "explanation": "Now both sides are a single natural logarithm, ready for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the arguments",
          "workingLatex": "x^{2}=2x+3",
          "explanation": "Because $\\ln$ is one-to-one, equal logs force equal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form a quadratic equation",
          "workingLatex": "x^{2}-2x-3=0",
          "explanation": "Moving every term to one side gives the zero form needed to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise",
          "workingLatex": "(x-3)(x+1)=0",
          "explanation": "The numbers $-3$ and $+1$ multiply to $-3$ and add to $-2$, giving these factors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve each factor",
          "workingLatex": "x=3 \\quad\\text{or}\\quad x=-1",
          "explanation": "Setting each bracket to zero produces the two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain requirement",
          "workingLatex": "x>0",
          "explanation": "The term $\\ln x$ only exists for positive $x$, so any non-positive candidate cannot be used.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reject the invalid root",
          "workingLatex": "x=-1 \\ \\text{rejected}",
          "explanation": "Since $\\ln(-1)$ is undefined, the value $x=-1$ is discarded and only $x=3$ survives.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the remaining root",
          "workingLatex": "2\\ln 3=\\ln 9=\\ln(2(3)+3)",
          "explanation": "Substituting $x=3$ gives $\\ln 9$ on both sides, so the solution checks out.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving"
    ],
    "questionText": "Solve $\\log_{2}(x+7)-\\log_{2}(x)=3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the strategy",
          "workingLatex": "\\log_{2}(x+7)-\\log_{2}x=3",
          "explanation": "A subtraction of two logs of the same base can be combined into a single logarithm of a quotient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the quotient law",
          "workingLatex": "\\log_{2}\\left(\\frac{x+7}{x}\\right)=3",
          "explanation": "Subtracting logs becomes the log of the division, using $\\log_{a}M-\\log_{a}N=\\log_{a}\\!\\left(\\frac{M}{N}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert to index form",
          "workingLatex": "\\frac{x+7}{x}=2^{3}",
          "explanation": "A single log equal to a number rewrites as the base raised to that number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the power",
          "workingLatex": "\\frac{x+7}{x}=8",
          "explanation": "Since $2^{3}=8$, the fraction equals $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "x+7=8x",
          "explanation": "Multiplying both sides by $x$ removes the denominator and gives a linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the x terms",
          "workingLatex": "7=7x",
          "explanation": "Subtracting $x$ from both sides gathers the unknowns on one side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve",
          "workingLatex": "x=1",
          "explanation": "Dividing by $7$ gives the candidate value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the domain requirement",
          "workingLatex": "x+7>0 \\ \\text{and}\\ x>0",
          "explanation": "Both original arguments must be positive for the logarithms to exist.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the arguments",
          "workingLatex": "1+7=8>0, \\quad 1>0",
          "explanation": "Substituting $x=1$ keeps both arguments positive, so the value is allowed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify",
          "workingLatex": "\\log_{2}8-\\log_{2}1=3-0=3",
          "explanation": "The left-hand side returns exactly $3$, confirming the solution is genuine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=1$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "logarithms",
      "graph"
    ],
    "questionText": "Describe the graph of $y=\\ln x$. State its domain, the point where it crosses the $x$-axis, the equation of its asymptote, and its behaviour as $x\\to0^{+}$ and as $x\\to\\infty$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition",
          "workingLatex": "y=\\ln x \\iff x=\\mathrm{e}^{y}",
          "explanation": "The natural log is the inverse of the exponential $\\mathrm{e}^{y}$, so studying $\\mathrm{e}^{y}$ tells us everything about $\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the domain",
          "workingLatex": "x>0",
          "explanation": "Only strictly positive numbers have a natural logarithm, so the curve exists solely to the right of the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain the domain",
          "workingLatex": "\\mathrm{e}^{y}>0 \\ \\text{for all } y",
          "explanation": "Since $\\mathrm{e}^{y}$ is always positive, no power of $\\mathrm{e}$ can produce zero or a negative value, which is why $\\ln x$ is undefined there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the x-axis crossing",
          "workingLatex": "\\ln x=0",
          "explanation": "The graph meets the $x$-axis where $y=0$, so we solve $\\ln x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the crossing",
          "workingLatex": "x=\\mathrm{e}^{0}=1 \\ \\Rightarrow\\ (1,0)",
          "explanation": "Because $\\mathrm{e}^{0}=1$, the curve passes through the point $(1,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the asymptote",
          "workingLatex": "x=0",
          "explanation": "The vertical line $x=0$ (the $y$-axis) is the asymptote, since the curve gets ever closer to it without touching.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour near the asymptote",
          "workingLatex": "x\\to 0^{+} \\ \\Rightarrow\\ \\ln x\\to-\\infty",
          "explanation": "As $x$ shrinks towards zero from the positive side, the logarithm plunges without limit, hugging the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Behaviour for large x",
          "workingLatex": "x\\to\\infty \\ \\Rightarrow\\ \\ln x\\to\\infty",
          "explanation": "As $x$ grows large, $\\ln x$ also increases without bound, though it climbs more and more slowly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the overall shape",
          "workingLatex": "\\frac{d}{dx}\\ln x=\\frac{1}{x}>0",
          "explanation": "The gradient $\\tfrac{1}{x}$ is positive for all $x>0$, so the curve is always increasing across its whole domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain $x>0$; the graph crosses the $x$-axis at $(1,0)$; the asymptote is the line $x=0$; as $x\\to0^{+}$, $\\ln x\\to-\\infty$, and as $x\\to\\infty$, $\\ln x\\to\\infty$, with the curve always increasing."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "logarithms",
      "graph"
    ],
    "questionText": "The curve $y=\\ln x+2$ is related to $y=\\ln x$. Describe the transformation, state the domain and asymptote, and find where $y=\\ln x+2$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the transformation",
          "workingLatex": "y=\\ln x+2",
          "explanation": "Adding a constant outside the function shifts the whole graph, so this is a vertical transformation of $y=\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the translation",
          "workingLatex": "\\text{translation}\\ \\begin{pmatrix}0\\\\2\\end{pmatrix}",
          "explanation": "The $+2$ lifts every point up by $2$ units, so $y=\\ln x+2$ is $y=\\ln x$ translated vertically upwards by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the domain",
          "workingLatex": "x>0",
          "explanation": "A vertical shift does not change which $x$-values are allowed, so the domain stays the same as for $\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the asymptote",
          "workingLatex": "x=0",
          "explanation": "Moving the curve up and down leaves the vertical asymptote unchanged, so it is still the $y$-axis, $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the x-axis crossing",
          "workingLatex": "\\ln x+2=0",
          "explanation": "The new curve meets the $x$-axis where $y=0$, so we solve $\\ln x+2=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "\\ln x=-2",
          "explanation": "Subtracting $2$ from both sides isolates the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convert to index form",
          "workingLatex": "x=\\mathrm{e}^{-2}",
          "explanation": "Rewriting $\\ln x=-2$ in exponential form gives $x=\\mathrm{e}^{-2}$, which is safely positive and so within the domain.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate approximately",
          "workingLatex": "x\\approx 0.135",
          "explanation": "Working out $\\mathrm{e}^{-2}$ gives about $0.135$, a small positive number just to the right of the asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the crossing point",
          "workingLatex": "\\left(\\mathrm{e}^{-2},\\,0\\right)",
          "explanation": "The curve therefore crosses the $x$-axis at this point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with the original",
          "workingLatex": "(1,0)\\ \\to\\ \\left(\\mathrm{e}^{-2},0\\right)",
          "explanation": "Because the graph was lifted upward, its crossing point moves left from $(1,0)$ to $\\left(\\mathrm{e}^{-2},0\\right)$, closer to the $y$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\ln x+2$ is $y=\\ln x$ translated up by $2$ units; domain $x>0$ and asymptote $x=0$ are unchanged; it crosses the $x$-axis at $\\left(\\mathrm{e}^{-2},0\\right)\\approx(0.135,0)$."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "logarithms",
      "solving"
    ],
    "questionText": "Solve $\\log_{4}(2x+3)=\\tfrac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "\\log_{4}(2x+3)=\\tfrac{1}{2}",
          "explanation": "This is a single logarithm equal to a number, so it can be rewritten straight into index form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert to index form",
          "workingLatex": "2x+3=4^{1/2}",
          "explanation": "The statement $\\log_{a}f=c$ means $f=a^{c}$, so the argument equals $4$ raised to the power $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the power",
          "workingLatex": "4^{1/2}=\\sqrt{4}=2",
          "explanation": "A power of one half is the same as a square root, and the square root of $4$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "2x+3=2",
          "explanation": "Replacing the power with its value gives a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract 3",
          "workingLatex": "2x=-1",
          "explanation": "Removing the constant term isolates the $x$ term on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "x=-\\tfrac{1}{2}",
          "explanation": "Dividing by $2$ gives the candidate value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain requirement",
          "workingLatex": "2x+3>0",
          "explanation": "The logarithm only exists when its argument is strictly positive, so this condition must be checked.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the argument",
          "workingLatex": "2\\left(-\\tfrac{1}{2}\\right)+3=2>0",
          "explanation": "Although $x$ itself is negative, the argument works out to $2$, which is positive, so the solution is perfectly valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "\\log_{4}2=\\tfrac{1}{2}",
          "explanation": "Since $4^{1/2}=2$, the original equation holds, confirming the answer is genuine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=-\\tfrac{1}{2}$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "exponential-equations",
      "disguised-quadratic"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{2x} - 3\\mathrm{e}^{x} + 2 = 0$, giving your answers exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the hidden quadratic",
          "workingLatex": "\\mathrm{e}^{2x} - 3\\mathrm{e}^{x} + 2 = 0",
          "explanation": "The key observation is that $\\mathrm{e}^{2x} = (\\mathrm{e}^{x})^{2}$, so this equation is really a quadratic dressed up in exponential clothing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce a substitution",
          "workingLatex": "u = \\mathrm{e}^{x} \\quad\\Rightarrow\\quad \\mathrm{e}^{2x} = u^{2}",
          "explanation": "Letting $u = \\mathrm{e}^{x}$ turns the awkward exponential terms into a plain algebraic variable, which makes the structure obvious.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite in terms of u",
          "workingLatex": "u^{2} - 3u + 2 = 0",
          "explanation": "Replacing every exponential with $u$ gives a standard quadratic that we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "(u - 1)(u - 2) = 0",
          "explanation": "We need two numbers that multiply to $2$ and add to $-3$; those are $-1$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for u",
          "workingLatex": "u = 1 \\quad\\text{or}\\quad u = 2",
          "explanation": "A product is zero only when one of its factors is zero, giving the two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the values are admissible",
          "workingLatex": "u = \\mathrm{e}^{x} > 0 \\text{ for all } x",
          "explanation": "Since $\\mathrm{e}^{x}$ is always positive, any positive value of $u$ can be reached. Both $1$ and $2$ are positive, so we keep both.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Undo the substitution for the first root",
          "workingLatex": "\\mathrm{e}^{x} = 1",
          "explanation": "We now return to $x$ by replacing $u$ with $\\mathrm{e}^{x}$ for the first solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve using logarithms",
          "workingLatex": "x = \\ln 1 = 0",
          "explanation": "Taking natural logs undoes the exponential, and $\\ln 1 = 0$ because $\\mathrm{e}^{0} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Undo the substitution for the second root",
          "workingLatex": "\\mathrm{e}^{x} = 2",
          "explanation": "We repeat the process for the other value of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve using logarithms",
          "workingLatex": "x = \\ln 2 \\approx 0.693",
          "explanation": "Taking natural logs of both sides isolates $x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the first solution",
          "workingLatex": "\\mathrm{e}^{0} - 3\\mathrm{e}^{0} + 2 = 1 - 3 + 2 = 0",
          "explanation": "Substituting $x = 0$ back into the original equation returns $0$, confirming it works.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the second solution",
          "workingLatex": "\\mathrm{e}^{2\\ln 2} - 3\\mathrm{e}^{\\ln 2} + 2 = 4 - 6 + 2 = 0",
          "explanation": "Using $\\mathrm{e}^{2\\ln 2} = 4$ and $\\mathrm{e}^{\\ln 2} = 2$ confirms $x = \\ln 2$ is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final solution set",
          "workingLatex": "x = 0 \\quad\\text{or}\\quad x = \\ln 2",
          "explanation": "Both roots survive the checks, so the equation has exactly two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0$ or $x = \\ln 2 \\approx 0.693$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "exponential-equations",
      "disguised-quadratic"
    ],
    "questionText": "Solve the equation $2^{2x} - 6 \\cdot 2^{x} + 8 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the disguised quadratic",
          "workingLatex": "2^{2x} - 6\\cdot 2^{x} + 8 = 0",
          "explanation": "Because $2^{2x} = (2^{x})^{2}$, the equation is a quadratic in the quantity $2^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute to simplify",
          "workingLatex": "u = 2^{x} \\quad\\Rightarrow\\quad 2^{2x} = u^{2}",
          "explanation": "Naming $2^{x}$ as $u$ converts the equation into ordinary algebra.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the quadratic in u",
          "workingLatex": "u^{2} - 6u + 8 = 0",
          "explanation": "Every exponential term is now expressed through $u$, giving a familiar quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(u - 2)(u - 4) = 0",
          "explanation": "We look for two numbers multiplying to $8$ and adding to $-6$, namely $-2$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for u",
          "workingLatex": "u = 2 \\quad\\text{or}\\quad u = 4",
          "explanation": "Setting each factor to zero gives the two possible values of $2^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the values are valid",
          "workingLatex": "2^{x} > 0 \\text{ for all } x",
          "explanation": "An exponential is always positive, and both $2$ and $4$ are positive, so neither value is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Return to x for the first value",
          "workingLatex": "2^{x} = 2",
          "explanation": "We swap $u$ back for $2^{x}$ to recover the exponential equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the first exponential",
          "workingLatex": "2^{x} = 2^{1} \\;\\Rightarrow\\; x = 1",
          "explanation": "Since the bases match, the exponents must be equal, giving $x = 1$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Return to x for the second value",
          "workingLatex": "2^{x} = 4",
          "explanation": "We repeat the process for the other root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the second exponential",
          "workingLatex": "2^{x} = 2^{2} \\;\\Rightarrow\\; x = 2",
          "explanation": "Writing $4$ as $2^{2}$ lets us equate exponents to find $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify x = 1",
          "workingLatex": "2^{2} - 6\\cdot 2^{1} + 8 = 4 - 12 + 8 = 0",
          "explanation": "Substituting $x = 1$ reproduces zero, so this root is confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = 2",
          "workingLatex": "2^{4} - 6\\cdot 2^{2} + 8 = 16 - 24 + 8 = 0",
          "explanation": "Substituting $x = 2$ also gives zero, confirming the second root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solutions",
          "workingLatex": "x = 1 \\quad\\text{or}\\quad x = 2",
          "explanation": "Both values pass verification, so these are the complete solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1$ or $x = 2$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "exponential-equations",
      "disguised-quadratic"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{2x} - 5\\mathrm{e}^{x} + 6 = 0$, giving your answers in exact form and to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the quadratic structure",
          "workingLatex": "\\mathrm{e}^{2x} - 5\\mathrm{e}^{x} + 6 = 0",
          "explanation": "With $\\mathrm{e}^{2x} = (\\mathrm{e}^{x})^{2}$, the equation is quadratic in $\\mathrm{e}^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "u = \\mathrm{e}^{x} \\quad\\Rightarrow\\quad \\mathrm{e}^{2x} = u^{2}",
          "explanation": "Replacing $\\mathrm{e}^{x}$ with $u$ reveals the underlying quadratic cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the quadratic",
          "workingLatex": "u^{2} - 5u + 6 = 0",
          "explanation": "Every term is now written in $u$, ready to be factorised.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise",
          "workingLatex": "(u - 2)(u - 3) = 0",
          "explanation": "Two numbers multiplying to $6$ and adding to $-5$ are $-2$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for u",
          "workingLatex": "u = 2 \\quad\\text{or}\\quad u = 3",
          "explanation": "Each factor set to zero gives a candidate value for $\\mathrm{e}^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check admissibility",
          "workingLatex": "u = \\mathrm{e}^{x} > 0",
          "explanation": "Both values are positive, and $\\mathrm{e}^{x}$ can equal any positive number, so we keep both.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "First exponential equation",
          "workingLatex": "\\mathrm{e}^{x} = 2 \\;\\Rightarrow\\; x = \\ln 2",
          "explanation": "Taking natural logs isolates $x$ for the first root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decimal value of the first root",
          "workingLatex": "x = \\ln 2 \\approx 0.693",
          "explanation": "Evaluating the logarithm gives the 3 significant figure value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Second exponential equation",
          "workingLatex": "\\mathrm{e}^{x} = 3 \\;\\Rightarrow\\; x = \\ln 3",
          "explanation": "The same logarithm step handles the second root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Decimal value of the second root",
          "workingLatex": "x = \\ln 3 \\approx 1.10",
          "explanation": "Evaluating $\\ln 3$ gives its 3 significant figure decimal.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify x = ln 2",
          "workingLatex": "\\mathrm{e}^{2\\ln 2} - 5\\mathrm{e}^{\\ln 2} + 6 = 4 - 10 + 6 = 0",
          "explanation": "Using $\\mathrm{e}^{2\\ln 2} = 4$ and $\\mathrm{e}^{\\ln 2} = 2$ confirms this root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = ln 3",
          "workingLatex": "\\mathrm{e}^{2\\ln 3} - 5\\mathrm{e}^{\\ln 3} + 6 = 9 - 15 + 6 = 0",
          "explanation": "Using $\\mathrm{e}^{2\\ln 3} = 9$ and $\\mathrm{e}^{\\ln 3} = 3$ confirms the second root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solutions",
          "workingLatex": "x = \\ln 2 \\quad\\text{or}\\quad x = \\ln 3",
          "explanation": "Both checks succeed, so these are the exact solutions of the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\ln 2 \\approx 0.693$ or $x = \\ln 3 \\approx 1.10$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "disguised-quadratic",
      "natural-log"
    ],
    "questionText": "Solve the equation $(\\ln x)^{2} - 3\\ln x + 2 = 0$, giving your answers in exact form and to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quadratic in ln x",
          "workingLatex": "(\\ln x)^{2} - 3\\ln x + 2 = 0",
          "explanation": "The term $(\\ln x)^{2}$ tells us this is a quadratic where the variable is $\\ln x$ rather than $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the domain",
          "workingLatex": "x > 0",
          "explanation": "The logarithm $\\ln x$ only exists for positive $x$, so any solution must satisfy $x > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "u = \\ln x \\quad\\Rightarrow\\quad (\\ln x)^{2} = u^{2}",
          "explanation": "Letting $u = \\ln x$ turns the equation into a plain quadratic in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the quadratic",
          "workingLatex": "u^{2} - 3u + 2 = 0",
          "explanation": "The equation now looks like a standard quadratic ready for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise",
          "workingLatex": "(u - 1)(u - 2) = 0",
          "explanation": "We need factors multiplying to $2$ and adding to $-3$, which are $-1$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for u",
          "workingLatex": "u = 1 \\quad\\text{or}\\quad u = 2",
          "explanation": "Setting each bracket to zero gives the two values of $\\ln x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Undo the substitution for the first value",
          "workingLatex": "\\ln x = 1",
          "explanation": "We replace $u$ with $\\ln x$ to recover an equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the first logarithmic equation",
          "workingLatex": "x = \\mathrm{e}^{1} = \\mathrm{e} \\approx 2.72",
          "explanation": "Exponentiating both sides with base $\\mathrm{e}$ undoes the natural log, and $\\mathrm{e} > 0$ so the domain is respected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Undo the substitution for the second value",
          "workingLatex": "\\ln x = 2",
          "explanation": "We repeat with the second value of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the second logarithmic equation",
          "workingLatex": "x = \\mathrm{e}^{2} \\approx 7.39",
          "explanation": "Exponentiating gives $x = \\mathrm{e}^{2}$, which is also positive and therefore valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify x = e",
          "workingLatex": "(\\ln \\mathrm{e})^{2} - 3\\ln \\mathrm{e} + 2 = 1 - 3 + 2 = 0",
          "explanation": "Since $\\ln \\mathrm{e} = 1$, the left-hand side collapses to zero as required.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = e^2",
          "workingLatex": "(\\ln \\mathrm{e}^{2})^{2} - 3\\ln \\mathrm{e}^{2} + 2 = 4 - 6 + 2 = 0",
          "explanation": "Since $\\ln \\mathrm{e}^{2} = 2$, the expression evaluates to zero, confirming the root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solutions",
          "workingLatex": "x = \\mathrm{e} \\quad\\text{or}\\quad x = \\mathrm{e}^{2}",
          "explanation": "Both values are positive and satisfy the equation, so these are the complete solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\mathrm{e} \\approx 2.72$ or $x = \\mathrm{e}^{2} \\approx 7.39$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "disguised-quadratic",
      "log-base-2"
    ],
    "questionText": "Solve the equation $(\\log_{2} x)^{2} - \\log_{2} x - 6 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a quadratic in log base 2",
          "workingLatex": "(\\log_{2} x)^{2} - \\log_{2} x - 6 = 0",
          "explanation": "The squared logarithm signals a quadratic whose variable is $\\log_{2} x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the domain",
          "workingLatex": "x > 0",
          "explanation": "A logarithm requires a positive argument, so any valid solution must have $x > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "u = \\log_{2} x",
          "explanation": "Letting $u = \\log_{2} x$ converts the equation into a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the quadratic",
          "workingLatex": "u^{2} - u - 6 = 0",
          "explanation": "Rewriting in terms of $u$ produces a quadratic that factorises neatly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise",
          "workingLatex": "(u - 3)(u + 2) = 0",
          "explanation": "We need factors multiplying to $-6$ and adding to $-1$, namely $-3$ and $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for u",
          "workingLatex": "u = 3 \\quad\\text{or}\\quad u = -2",
          "explanation": "Each factor set to zero gives a value of $\\log_{2} x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note both values are allowed",
          "workingLatex": "\\log_{2} x \\in \\mathbb{R}",
          "explanation": "A logarithm can take any real value, so a negative value of $u$ is perfectly acceptable here; it simply gives a small positive $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Undo the substitution for the first value",
          "workingLatex": "\\log_{2} x = 3 \\;\\Rightarrow\\; x = 2^{3} = 8",
          "explanation": "Rewriting in exponential form, $\\log_{2} x = 3$ means $x = 2^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Undo the substitution for the second value",
          "workingLatex": "\\log_{2} x = -2 \\;\\Rightarrow\\; x = 2^{-2} = \\tfrac{1}{4}",
          "explanation": "Similarly $\\log_{2} x = -2$ means $x = 2^{-2} = \\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm both lie in the domain",
          "workingLatex": "8 > 0 \\quad\\text{and}\\quad \\tfrac{1}{4} > 0",
          "explanation": "Both candidate values are positive, so neither is rejected on domain grounds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify x = 8",
          "workingLatex": "(\\log_{2} 8)^{2} - \\log_{2} 8 - 6 = 9 - 3 - 6 = 0",
          "explanation": "Since $\\log_{2} 8 = 3$, the expression evaluates to zero as required.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = 1/4",
          "workingLatex": "(\\log_{2}\\tfrac{1}{4})^{2} - \\log_{2}\\tfrac{1}{4} - 6 = 4 + 2 - 6 = 0",
          "explanation": "Since $\\log_{2}\\tfrac{1}{4} = -2$, we get $4 - (-2) - 6 = 0$, confirming the root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solutions",
          "workingLatex": "x = 8 \\quad\\text{or}\\quad x = \\tfrac{1}{4}",
          "explanation": "Both values satisfy the equation and the domain, so these are the full solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 8$ or $x = \\tfrac{1}{4} = 0.25$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "exponential-equations",
      "different-bases"
    ],
    "questionText": "Solve the equation $3^{x+1} = 5^{x}$, giving your answer as an exact logarithm and to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Notice the bases differ",
          "workingLatex": "3^{x+1} = 5^{x}",
          "explanation": "The two sides use different bases, so we cannot simply equate exponents; taking logarithms of both sides is the way forward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take natural logs of both sides",
          "workingLatex": "\\ln\\!\\left(3^{x+1}\\right) = \\ln\\!\\left(5^{x}\\right)",
          "explanation": "Logarithms are one-to-one, so applying $\\ln$ to both sides preserves the equality while letting us bring exponents down.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the power law",
          "workingLatex": "(x + 1)\\ln 3 = x\\ln 5",
          "explanation": "The rule $\\ln(a^{b}) = b\\ln a$ moves each exponent to the front as a multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "x\\ln 3 + \\ln 3 = x\\ln 5",
          "explanation": "Multiplying out $(x + 1)\\ln 3$ separates the terms containing $x$ from the constant term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Gather the x-terms",
          "workingLatex": "\\ln 3 = x\\ln 5 - x\\ln 3",
          "explanation": "We move all $x$-terms to one side and the constant to the other, ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out x",
          "workingLatex": "\\ln 3 = x(\\ln 5 - \\ln 3)",
          "explanation": "Taking $x$ out as a common factor isolates it inside a single bracket.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x exactly",
          "workingLatex": "x = \\dfrac{\\ln 3}{\\ln 5 - \\ln 3}",
          "explanation": "Dividing by the bracket gives the exact value of $x$ as a ratio of logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the denominator as a single log",
          "workingLatex": "x = \\dfrac{\\ln 3}{\\ln\\frac{5}{3}}",
          "explanation": "Using $\\ln 5 - \\ln 3 = \\ln\\tfrac{5}{3}$ tidies the answer into a compact exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the numerator value",
          "workingLatex": "\\ln 3 \\approx 1.0986",
          "explanation": "We now evaluate the logarithms numerically to reach a decimal answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the denominator value",
          "workingLatex": "\\ln\\tfrac{5}{3} = \\ln 5 - \\ln 3 \\approx 0.5108",
          "explanation": "Evaluating the denominator gives the second number we need for the division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the decimal value",
          "workingLatex": "x \\approx \\dfrac{1.0986}{0.5108} \\approx 2.15",
          "explanation": "Dividing gives the value of $x$ to 3 significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the solution",
          "workingLatex": "3^{\\,x+1} \\approx 31.9, \\qquad 5^{\\,x} \\approx 31.9",
          "explanation": "Substituting $x \\approx 2.15$ makes both sides roughly $31.9$, confirming the answer is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "x = \\dfrac{\\ln 3}{\\ln 5 - \\ln 3} \\approx 2.15",
          "explanation": "This is the single solution, given in both exact and decimal form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\ln 3}{\\ln 5 - \\ln 3} \\approx 2.15$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "exponential-equations",
      "different-bases"
    ],
    "questionText": "Solve the equation $2^{x} = 3^{x-1}$, giving your answer as an exact logarithm and to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Notice the differing bases",
          "workingLatex": "2^{x} = 3^{x-1}",
          "explanation": "With bases $2$ and $3$ we cannot equate exponents directly, so taking logarithms of both sides is the natural first move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take natural logs",
          "workingLatex": "\\ln\\!\\left(2^{x}\\right) = \\ln\\!\\left(3^{x-1}\\right)",
          "explanation": "Applying $\\ln$ to each side keeps the equation balanced while letting us use the power law.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the power law",
          "workingLatex": "x\\ln 2 = (x - 1)\\ln 3",
          "explanation": "The rule $\\ln(a^{b}) = b\\ln a$ brings each exponent down in front of its logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "x\\ln 2 = x\\ln 3 - \\ln 3",
          "explanation": "Multiplying out the right-hand side separates the $x$-term from the constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Gather the x-terms",
          "workingLatex": "\\ln 3 = x\\ln 3 - x\\ln 2",
          "explanation": "Collecting all $x$-terms on one side and the constant on the other prepares us to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out x",
          "workingLatex": "\\ln 3 = x(\\ln 3 - \\ln 2)",
          "explanation": "Extracting $x$ as a common factor isolates it in a single bracket.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x exactly",
          "workingLatex": "x = \\dfrac{\\ln 3}{\\ln 3 - \\ln 2}",
          "explanation": "Dividing through by the bracket gives the exact expression for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the denominator as a single log",
          "workingLatex": "x = \\dfrac{\\ln 3}{\\ln\\frac{3}{2}}",
          "explanation": "Using $\\ln 3 - \\ln 2 = \\ln\\tfrac{3}{2}$ presents the answer in a compact exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the numerator value",
          "workingLatex": "\\ln 3 \\approx 1.0986",
          "explanation": "We evaluate the logarithms to obtain a decimal result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the denominator value",
          "workingLatex": "\\ln\\tfrac{3}{2} = \\ln 3 - \\ln 2 \\approx 0.4055",
          "explanation": "This gives the denominator we divide by.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the decimal value",
          "workingLatex": "x \\approx \\dfrac{1.0986}{0.4055} \\approx 2.71",
          "explanation": "Carrying out the division gives $x$ to 3 significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the solution",
          "workingLatex": "2^{\\,x} \\approx 6.54, \\qquad 3^{\\,x-1} \\approx 6.54",
          "explanation": "Substituting $x \\approx 2.71$ makes both sides about $6.54$, so the solution checks out.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "x = \\dfrac{\\ln 3}{\\ln 3 - \\ln 2} \\approx 2.71",
          "explanation": "This is the unique solution, expressed exactly and as a decimal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{\\ln 3}{\\ln 3 - \\ln 2} \\approx 2.71$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "logarithms",
      "exponential-equations",
      "disguised-quadratic"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{x} + 6\\mathrm{e}^{-x} = 5$, giving your answers in exact form and to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the negative exponent",
          "workingLatex": "\\mathrm{e}^{x} + 6\\mathrm{e}^{-x} = 5",
          "explanation": "The term $\\mathrm{e}^{-x}$ prevents a direct quadratic; multiplying through by $\\mathrm{e}^{x}$ will clear it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply every term by e^x",
          "workingLatex": "\\mathrm{e}^{x}\\cdot\\mathrm{e}^{x} + 6\\mathrm{e}^{-x}\\cdot\\mathrm{e}^{x} = 5\\mathrm{e}^{x}",
          "explanation": "Because $\\mathrm{e}^{x}$ is never zero, multiplying through is safe and removes the negative power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify using index laws",
          "workingLatex": "\\mathrm{e}^{2x} + 6 = 5\\mathrm{e}^{x}",
          "explanation": "Here $\\mathrm{e}^{x}\\cdot\\mathrm{e}^{x} = \\mathrm{e}^{2x}$ and $\\mathrm{e}^{-x}\\cdot\\mathrm{e}^{x} = 1$, tidying the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to standard form",
          "workingLatex": "\\mathrm{e}^{2x} - 5\\mathrm{e}^{x} + 6 = 0",
          "explanation": "Bringing all terms to one side reveals a quadratic in $\\mathrm{e}^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "u = \\mathrm{e}^{x} \\quad\\Rightarrow\\quad \\mathrm{e}^{2x} = u^{2}",
          "explanation": "Naming $\\mathrm{e}^{x}$ as $u$ exposes the ordinary quadratic underneath.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the quadratic",
          "workingLatex": "u^{2} - 5u + 6 = 0",
          "explanation": "The equation is now a familiar quadratic in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "(u - 2)(u - 3) = 0",
          "explanation": "Two numbers multiplying to $6$ and adding to $-5$ are $-2$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for u",
          "workingLatex": "u = 2 \\quad\\text{or}\\quad u = 3",
          "explanation": "Each factor set to zero gives a candidate value of $\\mathrm{e}^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check admissibility",
          "workingLatex": "u = \\mathrm{e}^{x} > 0",
          "explanation": "Both values are positive, so both are reachable by $\\mathrm{e}^{x}$ and neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "First exponential equation",
          "workingLatex": "\\mathrm{e}^{x} = 2 \\;\\Rightarrow\\; x = \\ln 2 \\approx 0.693",
          "explanation": "Taking natural logs isolates $x$ for the first root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Second exponential equation",
          "workingLatex": "\\mathrm{e}^{x} = 3 \\;\\Rightarrow\\; x = \\ln 3 \\approx 1.10",
          "explanation": "The same step gives the second root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify x = ln 2",
          "workingLatex": "\\mathrm{e}^{\\ln 2} + 6\\mathrm{e}^{-\\ln 2} = 2 + 6\\cdot\\tfrac{1}{2} = 2 + 3 = 5",
          "explanation": "Using $\\mathrm{e}^{\\ln 2} = 2$ and $\\mathrm{e}^{-\\ln 2} = \\tfrac{1}{2}$ reproduces the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify x = ln 3",
          "workingLatex": "\\mathrm{e}^{\\ln 3} + 6\\mathrm{e}^{-\\ln 3} = 3 + 6\\cdot\\tfrac{1}{3} = 3 + 2 = 5",
          "explanation": "Similarly this substitution gives exactly $5$, confirming the second root.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solutions",
          "workingLatex": "x = \\ln 2 \\quad\\text{or}\\quad x = \\ln 3",
          "explanation": "Both roots satisfy the original equation, so these are the complete solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\ln 2 \\approx 0.693$ or $x = \\ln 3 \\approx 1.10$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-laws",
      "solving-equations"
    ],
    "questionText": "Solve the equation $\\log_{2} x + \\log_{2}(x - 6) = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the domain restrictions",
          "workingLatex": "x > 0 \\;\\text{ and }\\; x - 6 > 0 \\;\\Rightarrow\\; x > 6",
          "explanation": "Both logarithms need positive arguments, so before solving we note that any valid solution must satisfy $x > 6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combine the logarithms",
          "workingLatex": "\\log_{2}\\!\\big(x(x - 6)\\big) = 4",
          "explanation": "The addition law $\\log a + \\log b = \\log(ab)$ merges the two logs into one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert to exponential form",
          "workingLatex": "x(x - 6) = 2^{4}",
          "explanation": "Undoing the base-$2$ logarithm means the argument equals $2$ raised to the value on the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the power",
          "workingLatex": "x(x - 6) = 16",
          "explanation": "Since $2^{4} = 16$, the equation becomes purely algebraic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the left side",
          "workingLatex": "x^{2} - 6x = 16",
          "explanation": "Multiplying out the bracket prepares the equation for standard quadratic form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to zero",
          "workingLatex": "x^{2} - 6x - 16 = 0",
          "explanation": "Moving everything to one side gives a quadratic we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise",
          "workingLatex": "(x - 8)(x + 2) = 0",
          "explanation": "We need numbers multiplying to $-16$ and adding to $-6$, which are $-8$ and $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the quadratic",
          "workingLatex": "x = 8 \\quad\\text{or}\\quad x = -2",
          "explanation": "Setting each bracket to zero gives the two candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reject the invalid root",
          "workingLatex": "x = -2 \\;\\Rightarrow\\; \\log_{2}(-2) \\text{ undefined}",
          "explanation": "A negative value cannot be the argument of a logarithm, so $x = -2$ is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the surviving root fits the domain",
          "workingLatex": "x = 8 > 6 \\;\\checkmark",
          "explanation": "The value $x = 8$ satisfies the requirement $x > 6$, so it is admissible.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute back to verify",
          "workingLatex": "\\log_{2} 8 + \\log_{2}(8 - 6) = \\log_{2} 8 + \\log_{2} 2",
          "explanation": "We put $x = 8$ into the original equation to make sure it works.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the check",
          "workingLatex": "= 3 + 1 = 4 \\;\\checkmark",
          "explanation": "Since $\\log_{2} 8 = 3$ and $\\log_{2} 2 = 1$, the left-hand side equals $4$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution",
          "workingLatex": "x = 8",
          "explanation": "Only one root survives the domain check, so the equation has a single solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 8$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-laws",
      "solving-equations"
    ],
    "questionText": "Solve the equation $2\\log_{3} x - \\log_{3}(x - 2) = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the domain restrictions",
          "workingLatex": "x > 0 \\;\\text{ and }\\; x - 2 > 0 \\;\\Rightarrow\\; x > 2",
          "explanation": "Both logarithms need positive arguments, so any acceptable solution must satisfy $x > 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the coefficient using the power law",
          "workingLatex": "2\\log_{3} x = \\log_{3} x^{2}",
          "explanation": "The rule $n\\log a = \\log(a^{n})$ absorbs the coefficient $2$ into the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation",
          "workingLatex": "\\log_{3} x^{2} - \\log_{3}(x - 2) = 2",
          "explanation": "Both terms are now single logarithms, ready to be combined.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine using the subtraction law",
          "workingLatex": "\\log_{3}\\!\\dfrac{x^{2}}{x - 2} = 2",
          "explanation": "The rule $\\log a - \\log b = \\log\\tfrac{a}{b}$ merges the two logs into one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convert to exponential form",
          "workingLatex": "\\dfrac{x^{2}}{x - 2} = 3^{2}",
          "explanation": "Undoing the base-$3$ logarithm sets the argument equal to $3$ raised to the right-hand value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the power",
          "workingLatex": "\\dfrac{x^{2}}{x - 2} = 9",
          "explanation": "Since $3^{2} = 9$, the equation is now purely algebraic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the denominator",
          "workingLatex": "x^{2} = 9(x - 2)",
          "explanation": "Multiplying both sides by $x - 2$ removes the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the right side",
          "workingLatex": "x^{2} = 9x - 18",
          "explanation": "Distributing the $9$ prepares the equation for standard quadratic form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange to zero",
          "workingLatex": "x^{2} - 9x + 18 = 0",
          "explanation": "Collecting all terms on one side gives a quadratic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise",
          "workingLatex": "(x - 3)(x - 6) = 0",
          "explanation": "We need factors multiplying to $18$ and adding to $-9$, namely $-3$ and $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the quadratic",
          "workingLatex": "x = 3 \\quad\\text{or}\\quad x = 6",
          "explanation": "Each bracket set to zero gives a candidate solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check both against the domain",
          "workingLatex": "3 > 2 \\;\\checkmark \\qquad 6 > 2 \\;\\checkmark",
          "explanation": "Both values exceed $2$, so both keep the logarithm arguments positive and neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify x = 3",
          "workingLatex": "2\\log_{3} 3 - \\log_{3} 1 = 2(1) - 0 = 2 \\;\\checkmark",
          "explanation": "Since $\\log_{3} 3 = 1$ and $\\log_{3} 1 = 0$, the equation holds for $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify x = 6",
          "workingLatex": "2\\log_{3} 6 - \\log_{3} 4 = \\log_{3} 36 - \\log_{3} 4 = \\log_{3} 9 = 2 \\;\\checkmark",
          "explanation": "Combining the logs gives $\\log_{3}\\tfrac{36}{4} = \\log_{3} 9 = 2$, so $x = 6$ also works.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the solutions",
          "workingLatex": "x = 3 \\quad\\text{or}\\quad x = 6",
          "explanation": "Both roots satisfy the domain and the original equation, so both are genuine solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3$ or $x = 6$"
    }
  },
  {
    "id": "al.y1.pure.logarithms.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "modelling",
      "exponential-growth"
    ],
    "questionText": "The population of a colony is modelled by $P = 2000\\mathrm{e}^{0.05t}$, where $P$ is the number of individuals after $t$ years. Find the time taken for the population to reach $5000$, giving your answer in exact form and to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the condition",
          "workingLatex": "P = 2000\\mathrm{e}^{0.05t}, \\quad P = 5000",
          "explanation": "The unknown we want is the time $t$, so we write down the model and the target value of $P$ that time must produce.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the target population",
          "workingLatex": "5000 = 2000\\mathrm{e}^{0.05t}",
          "explanation": "Replacing $P$ with $5000$ turns the model into a single equation whose only unknown is $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the exponential",
          "workingLatex": "\\mathrm{e}^{0.05t} = \\frac{5000}{2000} = 2.5",
          "explanation": "Dividing by $2000$ leaves the exponential term alone, which is the form we can undo with a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take natural logarithms of both sides",
          "workingLatex": "\\ln\\left(\\mathrm{e}^{0.05t}\\right) = \\ln 2.5",
          "explanation": "Since the base is $\\mathrm{e}$, the natural logarithm is the exact inverse, so it will strip the exponential cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the left-hand side",
          "workingLatex": "0.05t = \\ln 2.5",
          "explanation": "Because $\\ln$ and $\\mathrm{e}^{x}$ cancel, the exponent drops down and we are left with a simple linear equation in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make $t$ the subject",
          "workingLatex": "t = \\frac{\\ln 2.5}{0.05}",
          "explanation": "Dividing by the coefficient $0.05$ isolates $t$ and gives the time directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the exact form",
          "workingLatex": "t = 20\\ln 2.5",
          "explanation": "Dividing by $0.05$ is the same as multiplying by $20$, so the exact answer is a neat multiple of $\\ln 2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln 2.5 \\approx 0.916291",
          "explanation": "A numerical value for $\\ln 2.5$ lets us convert the exact form into a decimal time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the time",
          "workingLatex": "t \\approx 20 \\times 0.916291 = 18.3258",
          "explanation": "Multiplying by $20$ gives the time in years before rounding.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 18.3",
          "explanation": "The question asks for $3$ significant figures, so we round the decimal value here.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify: form the exponent",
          "workingLatex": "0.05 \\times 18.3258 = 0.916291",
          "explanation": "Substituting our time back into the exponent should reproduce $\\ln 2.5$, confirming the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify: recompute the population",
          "workingLatex": "2000\\,\\mathrm{e}^{0.916291} = 2000 \\times 2.5 = 5000",
          "explanation": "The model returns exactly $5000$, so the solution is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret in context",
          "workingLatex": "t \\approx 18.3 \\text{ years}",
          "explanation": "The population reaches $5000$ after about $18.3$ years, which is the answer in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 20\\ln 2.5 \\approx 18.3$ years (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "modelling",
      "half-life"
    ],
    "questionText": "The mass of a radioactive sample is modelled by $M = 50\\mathrm{e}^{-0.02t}$, where $M$ is the mass in grams after $t$ years. Find the half-life of the sample (the time for the mass to fall to half its initial value), giving your answer in exact form and to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the initial mass",
          "workingLatex": "M(0) = 50\\mathrm{e}^{0} = 50",
          "explanation": "At $t = 0$ the exponential equals $1$, so the starting mass is $50$ grams. Half of this is the target.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the half-life condition",
          "workingLatex": "M = \\tfrac{1}{2}(50) = 25",
          "explanation": "The half-life is the time when the mass has dropped to $25$ grams, so we set $M = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the model",
          "workingLatex": "25 = 50\\mathrm{e}^{-0.02t}",
          "explanation": "Replacing $M$ with $25$ gives an equation whose only unknown is the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the exponential",
          "workingLatex": "\\mathrm{e}^{-0.02t} = \\frac{25}{50} = 0.5",
          "explanation": "Dividing by $50$ leaves the exponential term alone, ready to be undone by a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural logarithms",
          "workingLatex": "-0.02t = \\ln 0.5",
          "explanation": "Applying $\\ln$ removes the base $\\mathrm{e}$ and brings the exponent down.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the logarithm",
          "workingLatex": "\\ln 0.5 = -\\ln 2",
          "explanation": "Since $0.5 = 2^{-1}$, its logarithm is $-\\ln 2$; using this keeps the exact form tidy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $t$",
          "workingLatex": "-0.02t = -\\ln 2 \\;\\Rightarrow\\; t = \\frac{\\ln 2}{0.02}",
          "explanation": "The two negatives cancel, and dividing by $0.02$ isolates $t$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the exact form",
          "workingLatex": "t = 50\\ln 2",
          "explanation": "Dividing by $0.02$ is multiplying by $50$, so the exact half-life is $50\\ln 2$ years.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln 2 \\approx 0.693147",
          "explanation": "A numerical value for $\\ln 2$ converts the exact form into a decimal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the half-life",
          "workingLatex": "t \\approx 50 \\times 0.693147 = 34.6574",
          "explanation": "Multiplying by $50$ gives the half-life in years before rounding.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 34.7",
          "explanation": "Rounding the decimal gives the required $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the result",
          "workingLatex": "50\\,\\mathrm{e}^{-0.02 \\times 34.6574} = 50\\,\\mathrm{e}^{-0.693147} = 50 \\times 0.5 = 25",
          "explanation": "Substituting back gives exactly half the original mass, confirming the half-life.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret in context",
          "workingLatex": "t \\approx 34.7 \\text{ years}",
          "explanation": "The sample loses half its mass roughly every $34.7$ years, which is its half-life.",
          "diagram": null
        }
      ],
      "finalAnswer": "Half-life $t = 50\\ln 2 \\approx 34.7$ years (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "logarithms",
      "modelling",
      "exponential-growth"
    ],
    "questionText": "A savings account grows so that its balance is $A = 1500 \\times 1.04^{t}$ pounds after $t$ whole years, with interest added at the end of each year. Find the number of whole years for the balance to first exceed $2000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the goal",
          "workingLatex": "A = 1500 \\times 1.04^{t}, \\quad A > 2000",
          "explanation": "The balance multiplies by $1.04$ each year; we need the first whole $t$ that pushes it past $2000$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the inequality",
          "workingLatex": "1500 \\times 1.04^{t} > 2000",
          "explanation": "Writing the requirement as an inequality lets us solve for the range of $t$ that works.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Isolate the power term",
          "workingLatex": "1.04^{t} > \\frac{2000}{1500} = \\frac{4}{3}",
          "explanation": "Dividing by $1500$ leaves the growth factor by itself, which is the form logs handle well.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take natural logarithms",
          "workingLatex": "\\ln\\left(1.04^{t}\\right) > \\ln\\frac{4}{3}",
          "explanation": "Both sides are positive and $\\ln$ is increasing, so applying it keeps the inequality direction the same.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the power law",
          "workingLatex": "t\\ln 1.04 > \\ln\\frac{4}{3}",
          "explanation": "The power law brings the exponent $t$ down as a coefficient, making the inequality linear in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by $\\ln 1.04$",
          "workingLatex": "t > \\frac{\\ln(4/3)}{\\ln 1.04}",
          "explanation": "Since $\\ln 1.04 > 0$, dividing by it does not flip the inequality, so $t$ is isolated safely.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the top logarithm",
          "workingLatex": "\\ln\\frac{4}{3} \\approx 0.287682",
          "explanation": "A numerical value for the numerator moves us toward a decimal bound on $t$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the bottom logarithm",
          "workingLatex": "\\ln 1.04 \\approx 0.0392207",
          "explanation": "The denominator is the log of the yearly growth factor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the bound",
          "workingLatex": "t > \\frac{0.287682}{0.0392207} = 7.3349",
          "explanation": "The balance exceeds $2000$ for any time beyond about $7.33$ years.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the whole-year condition",
          "workingLatex": "t \\in \\mathbb{Z}, \\quad t > 7.3349 \\;\\Rightarrow\\; t = 8",
          "explanation": "Interest is only added at year end, so $t$ must be a whole number; the smallest whole number above $7.33$ is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the year before",
          "workingLatex": "1500 \\times 1.04^{7} \\approx 1500 \\times 1.31593 = 1973.90",
          "explanation": "After $7$ years the balance is still below $2000$, so $7$ is too early.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the chosen year",
          "workingLatex": "1500 \\times 1.04^{8} \\approx 1500 \\times 1.36857 = 2052.85",
          "explanation": "After $8$ years the balance is above $2000$, confirming this is the first year it exceeds the target.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "t = 8 \\text{ years}",
          "explanation": "The balance first exceeds $2000$ after $8$ whole years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8$ whole years (balance $\\approx \\pounds 2052.85$)."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "modelling",
      "exponential-decay"
    ],
    "questionText": "A hot drink cools according to $T = 20 + 70\\mathrm{e}^{-0.1t}$, where $T$ is the temperature in $^{\\circ}$C after $t$ minutes in a room at $20^{\\circ}$C. Find the time for the temperature to fall to $40^{\\circ}$C, giving your answer in exact form and to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and target",
          "workingLatex": "T = 20 + 70\\mathrm{e}^{-0.1t}, \\quad T = 40",
          "explanation": "We want the time when the drink has cooled to $40^{\\circ}$C, so we write the model and set $T = 40$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the target temperature",
          "workingLatex": "40 = 20 + 70\\mathrm{e}^{-0.1t}",
          "explanation": "Replacing $T$ with $40$ gives an equation in $t$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract the room temperature",
          "workingLatex": "20 = 70\\mathrm{e}^{-0.1t}",
          "explanation": "Removing the constant $20$ isolates the decaying part, which measures how far above room temperature the drink is.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the exponential",
          "workingLatex": "\\mathrm{e}^{-0.1t} = \\frac{20}{70} = \\frac{2}{7}",
          "explanation": "Dividing by $70$ leaves the exponential alone, ready for logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take natural logarithms",
          "workingLatex": "-0.1t = \\ln\\frac{2}{7}",
          "explanation": "The natural logarithm undoes the base $\\mathrm{e}$ and brings the exponent down.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the logarithm",
          "workingLatex": "\\ln\\frac{2}{7} = -\\ln\\frac{7}{2}",
          "explanation": "Flipping the fraction changes the sign of the log, which lets us cancel the negative on the left neatly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $t$",
          "workingLatex": "-0.1t = -\\ln\\frac{7}{2} \\;\\Rightarrow\\; t = \\frac{\\ln(7/2)}{0.1} = 10\\ln\\frac{7}{2}",
          "explanation": "The negatives cancel and dividing by $0.1$ (multiplying by $10$) gives the exact time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln\\frac{7}{2} = \\ln 3.5 \\approx 1.252763",
          "explanation": "A numerical value for $\\ln 3.5$ turns the exact form into a decimal.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the time",
          "workingLatex": "t \\approx 10 \\times 1.252763 = 12.52763",
          "explanation": "Multiplying by $10$ gives the cooling time in minutes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 significant figures",
          "workingLatex": "t \\approx 12.5",
          "explanation": "Rounding gives the answer to the required $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify: recompute the exponential",
          "workingLatex": "\\mathrm{e}^{-0.1 \\times 12.52763} = \\mathrm{e}^{-1.252763} = \\frac{2}{7} \\approx 0.285714",
          "explanation": "Substituting the time back reproduces $\\tfrac{2}{7}$, confirming the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify: recompute the temperature",
          "workingLatex": "20 + 70 \\times 0.285714 = 20 + 20 = 40",
          "explanation": "The model returns exactly $40^{\\circ}$C, so the solution is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret in context",
          "workingLatex": "t \\approx 12.5 \\text{ minutes}",
          "explanation": "The drink reaches $40^{\\circ}$C after about $12.5$ minutes, still $20^{\\circ}$C above the room.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 10\\ln\\tfrac{7}{2} \\approx 12.5$ minutes (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "linear-form",
      "power-law"
    ],
    "questionText": "Experimental data are believed to fit a power law $y = ax^{n}$. When $\\log_{10} y$ is plotted against $\\log_{10} x$, the points lie on a straight line with gradient $1.5$ and intercept $0.6$. Find the values of $a$ and $n$, giving $a$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the linearised power law",
          "workingLatex": "y = ax^{n} \\;\\Rightarrow\\; \\log_{10} y = n\\log_{10} x + \\log_{10} a",
          "explanation": "Taking logs of a power law turns it into a straight-line relationship between $\\log y$ and $\\log x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match to the equation of a line",
          "workingLatex": "Y = mX + c, \\quad Y = \\log_{10} y, \\; X = \\log_{10} x",
          "explanation": "Comparing with $Y = mX + c$ shows which features of the graph carry the information about $a$ and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the gradient",
          "workingLatex": "m = n",
          "explanation": "The coefficient of $\\log x$ is the power $n$, so the gradient of the line gives $n$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off $n$",
          "workingLatex": "n = 1.5",
          "explanation": "The stated gradient is $1.5$, so the power in the law is exactly $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the intercept",
          "workingLatex": "c = \\log_{10} a",
          "explanation": "The intercept is the value of $\\log y$ where $\\log x = 0$, which equals $\\log a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the intercept equal to $\\log a$",
          "workingLatex": "\\log_{10} a = 0.6",
          "explanation": "The stated intercept is $0.6$, so this fixes the logarithm of the coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $a$",
          "workingLatex": "a = 10^{0.6}",
          "explanation": "Raising $10$ to the intercept undoes the base-$10$ logarithm and recovers $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the coefficient",
          "workingLatex": "a = 10^{0.6} \\approx 3.98107",
          "explanation": "Computing the power gives a numerical value for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round $a$ to 3 significant figures",
          "workingLatex": "a \\approx 3.98",
          "explanation": "The question asks for $a$ to $3$ significant figures, so we round here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the power law",
          "workingLatex": "y \\approx 3.98\\,x^{1.5}",
          "explanation": "Combining the recovered values gives the model relating $y$ and $x$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the intercept",
          "workingLatex": "\\log_{10}(3.98107) = 0.6",
          "explanation": "Taking the log of $a$ returns the intercept, confirming the coefficient is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify a point off the axis",
          "workingLatex": "\\log_{10} y = 1.5(1) + 0.6 = 2.1 \\;\\Rightarrow\\; y = 10^{2.1} \\approx 125.9",
          "explanation": "At $\\log x = 1$ (i.e. $x = 10$) the line predicts $\\log y = 2.1$; checking this guards against slips.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm with the power law",
          "workingLatex": "3.98107 \\times 10^{1.5} \\approx 125.9",
          "explanation": "The power law gives the same value at $x = 10$, so the model is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 1.5$ and $a = 10^{0.6} \\approx 3.98$ (3 s.f.), so $y \\approx 3.98x^{1.5}$."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "linear-form",
      "exponential-model"
    ],
    "questionText": "Data are believed to fit an exponential law $y = ab^{x}$. A graph of $\\log_{10} y$ against $x$ is a straight line with gradient $0.3$ and intercept $1$. Find the values of $a$ and $b$, giving $b$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the linearised exponential law",
          "workingLatex": "y = ab^{x} \\;\\Rightarrow\\; \\log_{10} y = (\\log_{10} b)\\,x + \\log_{10} a",
          "explanation": "Taking logs of $y = ab^{x}$ makes $\\log y$ a straight-line function of $x$ itself, not of $\\log x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Match to the equation of a line",
          "workingLatex": "Y = mX + c, \\quad Y = \\log_{10} y, \\; X = x",
          "explanation": "Comparing with $Y = mX + c$ tells us which feature of the graph gives $a$ and which gives $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the gradient",
          "workingLatex": "\\log_{10} b = 0.3",
          "explanation": "The coefficient of $x$ is $\\log b$, so the gradient of the line equals $\\log b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the intercept",
          "workingLatex": "\\log_{10} a = 1",
          "explanation": "The intercept is the value of $\\log y$ at $x = 0$, which equals $\\log a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$",
          "workingLatex": "a = 10^{1} = 10",
          "explanation": "Raising $10$ to the intercept recovers $a$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the equation for $b$",
          "workingLatex": "b = 10^{0.3}",
          "explanation": "Raising $10$ to the gradient undoes the logarithm and recovers the base $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $b$",
          "workingLatex": "b = 10^{0.3} \\approx 1.99526",
          "explanation": "Computing the power gives a numerical value for the growth base.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round $b$ to 3 significant figures",
          "workingLatex": "b \\approx 2.00",
          "explanation": "Rounding to $3$ significant figures gives the required precision for $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the exponential model",
          "workingLatex": "y \\approx 10 \\times 2.00^{x}",
          "explanation": "Combining the recovered values gives the model relating $y$ and $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the intercept",
          "workingLatex": "x = 0: \\; \\log_{10} y = 1 \\;\\Rightarrow\\; y = 10 = a",
          "explanation": "At $x = 0$ the model gives $y = a$, matching the intercept and confirming $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify a second point",
          "workingLatex": "x = 1: \\; \\log_{10} y = 0.3 + 1 = 1.3 \\;\\Rightarrow\\; y = 10^{1.3} \\approx 19.95",
          "explanation": "At $x = 1$ the line predicts $\\log y = 1.3$; checking a second point guards against errors.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm with the model",
          "workingLatex": "10 \\times 1.99526^{1} \\approx 19.95",
          "explanation": "The model gives the same value at $x = 1$, so the recovered constants are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the constants",
          "workingLatex": "a = 10, \\quad b \\approx 2.00",
          "explanation": "Here $a$ is the value of $y$ at $x = 0$ and $b$ is the factor $y$ multiplies by each time $x$ increases by $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 10$ and $b = 10^{0.3} \\approx 2.00$ (3 s.f.), so $y \\approx 10 \\times 2.00^{x}$."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "logarithms",
      "linear-form",
      "power-law"
    ],
    "questionText": "Show that the power law $y = ax^{n}$ becomes a linear relationship when $\\log_{10} y$ is plotted against $\\log_{10} x$, and state the gradient and the $\\log y$-intercept of the resulting straight line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the power law",
          "workingLatex": "y = ax^{n}",
          "explanation": "We begin with the given relationship and aim to manipulate it into straight-line form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\log_{10} y = \\log_{10}\\left(ax^{n}\\right)",
          "explanation": "Applying the same logarithm to both sides preserves equality and lets us use the log laws to split the product.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the product law",
          "workingLatex": "\\log_{10}\\left(ax^{n}\\right) = \\log_{10} a + \\log_{10}\\left(x^{n}\\right)",
          "explanation": "The log of a product is the sum of the logs, which separates the constant $a$ from the variable part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intermediate result",
          "workingLatex": "\\log_{10} y = \\log_{10} a + \\log_{10}\\left(x^{n}\\right)",
          "explanation": "This isolates the term that still contains the power $n$, which we simplify next.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the power law",
          "workingLatex": "\\log_{10}\\left(x^{n}\\right) = n\\log_{10} x",
          "explanation": "The log of a power brings the exponent down as a multiplier, turning the term into a constant times $\\log x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back",
          "workingLatex": "\\log_{10} y = n\\log_{10} x + \\log_{10} a",
          "explanation": "Now $\\log y$ is expressed as a multiple of $\\log x$ plus a constant, which is the structure of a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce new variables",
          "workingLatex": "Y = \\log_{10} y, \\quad X = \\log_{10} x",
          "explanation": "Renaming the logged quantities makes the linear structure explicit and easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite in the new variables",
          "workingLatex": "Y = nX + \\log_{10} a",
          "explanation": "In terms of $X$ and $Y$ the relationship is exactly a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare with the line equation",
          "workingLatex": "Y = mX + c",
          "explanation": "Matching against the general straight line $Y = mX + c$ identifies the gradient and intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the gradient",
          "workingLatex": "m = n",
          "explanation": "The multiplier of $X$ is the power $n$, so the gradient of the plotted line equals $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the intercept",
          "workingLatex": "c = \\log_{10} a",
          "explanation": "The constant term is $\\log a$, so the $\\log y$-intercept equals $\\log a$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the conclusion",
          "workingLatex": "\\log_{10} y = n\\log_{10} x + \\log_{10} a \\text{ is linear}",
          "explanation": "Because the relationship has the form $Y = mX + c$, plotting $\\log y$ against $\\log x$ gives a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note how to recover the constants",
          "workingLatex": "n = \\text{gradient}, \\qquad a = 10^{\\text{intercept}}",
          "explanation": "In practice the gradient gives the power directly, and raising $10$ to the intercept recovers the coefficient $a$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Plotting $\\log_{10} y$ against $\\log_{10} x$ gives the straight line $\\log_{10} y = n\\log_{10} x + \\log_{10} a$, with gradient $n$ and $\\log y$-intercept $\\log_{10} a$."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "logarithms",
      "modelling",
      "doubling-time"
    ],
    "questionText": "A quantity grows according to $N = N_{0}\\mathrm{e}^{kt}$, where $t$ is the time in years and $k > 0$. The quantity doubles every $5$ years. Find the growth constant $k$ in exact form and to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and doubling condition",
          "workingLatex": "N = N_{0}\\mathrm{e}^{kt}, \\quad N = 2N_{0} \\text{ when } t = 5",
          "explanation": "Doubling means the amount reaches twice its starting value $N_0$ after $5$ years, which sets up the equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the condition",
          "workingLatex": "2N_{0} = N_{0}\\mathrm{e}^{5k}",
          "explanation": "Putting $N = 2N_0$ and $t = 5$ into the model gives an equation linking $k$ to the doubling time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the initial amount",
          "workingLatex": "2 = \\mathrm{e}^{5k}",
          "explanation": "Since $N_0$ is nonzero it cancels, showing the doubling factor depends only on $k$ and the time, not on the starting amount.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take natural logarithms",
          "workingLatex": "\\ln 2 = 5k",
          "explanation": "The natural logarithm undoes the base $\\mathrm{e}$ and brings the exponent $5k$ down.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $k$",
          "workingLatex": "k = \\frac{\\ln 2}{5}",
          "explanation": "Dividing by $5$ isolates $k$ and gives its exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Relate to the general doubling time",
          "workingLatex": "\\mathrm{e}^{kT_{d}} = 2 \\;\\Rightarrow\\; k = \\frac{\\ln 2}{T_{d}}",
          "explanation": "In general the doubling time $T_d$ satisfies $k = \\dfrac{\\ln 2}{T_d}$; here $T_d = 5$ reproduces our result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the logarithm",
          "workingLatex": "\\ln 2 \\approx 0.693147",
          "explanation": "A numerical value for $\\ln 2$ converts the exact form to a decimal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $k$",
          "workingLatex": "k \\approx \\frac{0.693147}{5} = 0.138629",
          "explanation": "Dividing by $5$ gives the growth constant per year.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "k \\approx 0.139",
          "explanation": "Rounding gives the answer to the required $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify: form the exponent",
          "workingLatex": "5k = 5 \\times 0.138629 = 0.693147 = \\ln 2",
          "explanation": "Multiplying $k$ by the time reproduces $\\ln 2$, confirming the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify: check the doubling",
          "workingLatex": "\\mathrm{e}^{0.693147} = 2 \\;\\Rightarrow\\; N = 2N_{0}",
          "explanation": "The exponential returns $2$, so after $5$ years the quantity has indeed doubled.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the sign",
          "workingLatex": "k \\approx 0.139 > 0",
          "explanation": "A positive $k$ is consistent with growth, as required by the problem.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret in context",
          "workingLatex": "k = \\frac{\\ln 2}{5} \\approx 0.139 \\text{ per year}",
          "explanation": "A growth constant of about $0.139$ per year produces a doubling every $5$ years.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = \\dfrac{\\ln 2}{5} \\approx 0.139$ per year (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "logarithms",
      "log-laws",
      "equations"
    ],
    "questionText": "Solve the equation $\\log_{2}(x) + \\log_{2}(x + 2) = \\log_{2}(x + 6)$, showing clearly why any invalid solution must be rejected.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation",
          "workingLatex": "\\log_{2}(x) + \\log_{2}(x + 2) = \\log_{2}(x + 6)",
          "explanation": "We start from the given equation, noting that everything is written to the same base $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the domain restriction",
          "workingLatex": "x > 0, \\; x + 2 > 0, \\; x + 6 > 0 \\;\\Rightarrow\\; x > 0",
          "explanation": "Logarithms are only defined for positive arguments, so every valid solution must satisfy $x > 0$; the tightest of these is $x > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine the left-hand side",
          "workingLatex": "\\log_{2}\\left[x(x + 2)\\right] = \\log_{2}(x + 6)",
          "explanation": "The product law $\\log A + \\log B = \\log(AB)$ merges the two logs on the left into one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the arguments",
          "workingLatex": "x(x + 2) = x + 6",
          "explanation": "Since $\\log_{2}$ is a one-to-one function, equal logarithms force equal arguments.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the left-hand side",
          "workingLatex": "x^{2} + 2x = x + 6",
          "explanation": "Multiplying out prepares the equation for collecting all terms on one side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into standard form",
          "workingLatex": "x^{2} + x - 6 = 0",
          "explanation": "Bringing every term to one side produces a quadratic set equal to zero, ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "(x + 3)(x - 2) = 0",
          "explanation": "We need two numbers multiplying to $-6$ and adding to $+1$, namely $+3$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write down both roots",
          "workingLatex": "x = -3 \\quad \\text{or} \\quad x = 2",
          "explanation": "Setting each factor to zero gives the two candidate solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test $x = -3$ against the domain",
          "workingLatex": "x = -3 < 0 \\;\\Rightarrow\\; \\log_{2}(-3) \\text{ undefined}",
          "explanation": "This root fails the domain condition $x > 0$, so it cannot be a genuine solution and is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Keep the valid root",
          "workingLatex": "x = 2 > 0",
          "explanation": "The remaining root satisfies $x > 0$, so it is a candidate that we now confirm by substitution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the left-hand side",
          "workingLatex": "\\log_{2}(2) + \\log_{2}(4) = 1 + 2 = 3",
          "explanation": "Substituting $x = 2$ into the original left-hand side gives $3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the right-hand side",
          "workingLatex": "\\log_{2}(2 + 6) = \\log_{2}(8) = 3",
          "explanation": "The right-hand side also equals $3$, so both sides agree.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution",
          "workingLatex": "x = 2",
          "explanation": "Only $x = 2$ satisfies both the equation and the domain, so it is the unique solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2$ (the root $x = -3$ is rejected because $\\log_{2}(-3)$ is undefined)."
    }
  },
  {
    "id": "al.y1.pure.logarithms.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Logarithms",
    "subtopicId": "al.y1.pure.logarithms",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "logarithms",
      "linear-form",
      "modelling"
    ],
    "questionText": "For a set of data, a graph of $\\log_{10} y$ against $\\log_{10} x$ is a straight line with gradient $2$ and intercept $1$. Assuming a power law $y = ax^{n}$, form the power law and hence predict the value of $y$ when $x = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the linearised power law",
          "workingLatex": "y = ax^{n} \\;\\Rightarrow\\; \\log_{10} y = n\\log_{10} x + \\log_{10} a",
          "explanation": "Taking logs of the power law gives a straight line whose gradient and intercept encode $n$ and $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the power from the gradient",
          "workingLatex": "n = \\text{gradient} = 2",
          "explanation": "The gradient of the line is the coefficient of $\\log x$, which is the power $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify $\\log a$ from the intercept",
          "workingLatex": "\\log_{10} a = \\text{intercept} = 1",
          "explanation": "The intercept is the value of $\\log y$ when $\\log x = 0$, which equals $\\log a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the coefficient",
          "workingLatex": "a = 10^{1} = 10",
          "explanation": "Raising $10$ to the intercept undoes the base-$10$ logarithm and recovers $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the power law",
          "workingLatex": "y = 10x^{2}",
          "explanation": "Substituting the recovered constants gives the explicit relationship between $y$ and $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the prediction required",
          "workingLatex": "\\text{Find } y \\text{ when } x = 5",
          "explanation": "We now use the model to estimate $y$ at the given value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute $x = 5$",
          "workingLatex": "y = 10 \\times 5^{2}",
          "explanation": "Putting $x = 5$ into the power law gives the predicted value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the power",
          "workingLatex": "5^{2} = 25",
          "explanation": "Squaring $5$ first keeps the arithmetic clear.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the prediction",
          "workingLatex": "y = 10 \\times 25 = 250",
          "explanation": "Multiplying by the coefficient $10$ gives the predicted value of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify using the linear form",
          "workingLatex": "\\log_{10} y = 2\\log_{10} 5 + 1",
          "explanation": "Checking through the straight-line equation confirms the prediction independently of the power law.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the log term",
          "workingLatex": "\\log_{10} 5 \\approx 0.69897 \\;\\Rightarrow\\; 2 \\times 0.69897 = 1.39794",
          "explanation": "Doubling $\\log 5$ gives the gradient contribution at $x = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the intercept",
          "workingLatex": "\\log_{10} y = 1.39794 + 1 = 2.39794",
          "explanation": "Adding the intercept gives the predicted value of $\\log y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Undo the logarithm",
          "workingLatex": "y = 10^{2.39794} = 250",
          "explanation": "Raising $10$ to this value returns $250$, matching the power-law prediction and confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the result",
          "workingLatex": "y = 10x^{2}, \\quad y(5) = 250",
          "explanation": "The power law is $y = 10x^{2}$, and it predicts $y = 250$ when $x = 5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Power law $y = 10x^{2}$; when $x = 5$, $y = 250$."
    }
  }
];
