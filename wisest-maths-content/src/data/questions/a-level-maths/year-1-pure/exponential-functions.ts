import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.exponentials.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponentials",
      "evaluating",
      "powers"
    ],
    "questionText": "Given the exponential function $y=2^{x}$, evaluate $y$ at $x=0$, $x=1$ and $x=3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=2^{x}",
          "explanation": "We are working with the exponential function whose base is $2$. Evaluating it just means substituting each value of $x$ into the power.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate at $x=0$",
          "workingLatex": "2^{0}=1",
          "explanation": "Any positive number raised to the power $0$ equals $1$, so the curve passes through $(0,1)$. This is a fixed feature of every exponential of this form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at $x=1$",
          "workingLatex": "2^{1}=2",
          "explanation": "Raising the base to the power $1$ simply gives the base itself, so $2^{1}=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x=3$",
          "workingLatex": "2^{3}=2\\times2\\times2=8",
          "explanation": "A power of $3$ means multiplying three copies of the base together, which gives $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the results",
          "workingLatex": "(0,1),\\;(1,2),\\;(3,8)",
          "explanation": "Listing the values together shows how the output climbs as $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the pattern",
          "workingLatex": "1<2<8",
          "explanation": "Because the base $2$ is greater than $1$, the values should increase as $x$ increases, and they do. This confirms our arithmetic is sensible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2^{0}=1$, $2^{1}=2$ and $2^{3}=8$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "exponentials",
      "y-intercept",
      "graphs"
    ],
    "questionText": "State the coordinates of the point where the graph of $y=3^{x}$ crosses the $y$-axis, and explain why this is the case.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall where the $y$-axis is",
          "workingLatex": "x=0",
          "explanation": "Every point on the $y$-axis has an $x$-coordinate of $0$, so the crossing point is found by setting $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x=0$ into the function",
          "workingLatex": "y=3^{0}",
          "explanation": "To find the height where the curve meets the axis we replace $x$ with $0$ in the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the zero-power rule",
          "workingLatex": "3^{0}=1",
          "explanation": "Any positive number raised to the power $0$ equals $1$, so the value of $y$ here is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the coordinates",
          "workingLatex": "(0,1)",
          "explanation": "Putting the $x$ and $y$ values together gives the crossing point $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the reason",
          "workingLatex": "a^{0}=1",
          "explanation": "The intercept is $(0,1)$ because raising any base to the power $0$ gives $1$. This is why every graph of the form $y=a^{x}$ passes through the same point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with the general rule",
          "workingLatex": "y=a^{x}\\Rightarrow(0,1)",
          "explanation": "Since the result does not depend on the base being $3$, we can be confident the crossing point is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "The graph crosses the $y$-axis at $(0,1)$, because $3^{0}=1$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "exponentials",
      "asymptote",
      "range"
    ],
    "questionText": "For the graph of $y=2^{x}$, state the equation of the horizontal asymptote and the range of the function.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Consider large negative $x$",
          "workingLatex": "x\\to-\\infty",
          "explanation": "To find the asymptote we look at what happens to the height of the curve as $x$ becomes very negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "See how the value behaves",
          "workingLatex": "2^{-10}=\\frac{1}{1024}\\approx0.00098",
          "explanation": "For large negative $x$ the power becomes a tiny positive fraction, so $y$ gets closer and closer to $0$ without ever reaching it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the asymptote",
          "workingLatex": "y=0",
          "explanation": "Because the curve approaches the $x$-axis but never touches it, the horizontal asymptote is the line $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider large positive $x$",
          "workingLatex": "x\\to+\\infty",
          "explanation": "For large positive $x$ the power grows without limit, so $y$ can be made as large as we like.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the range",
          "workingLatex": "y>0",
          "explanation": "The output is always positive and can take any value above $0$, so the range is $y>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a sample value",
          "workingLatex": "2^{0}=1>0",
          "explanation": "Testing $x=0$ gives $y=1$, which is positive and above the asymptote, confirming our description.",
          "diagram": null
        }
      ],
      "finalAnswer": "The horizontal asymptote is $y=0$ and the range is $y>0$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "exponentials",
      "growth-decay",
      "graphs"
    ],
    "questionText": "Explain whether the function $y=5^{x}$ represents exponential growth or decay, giving a reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the rule for growth and decay",
          "workingLatex": "a>1\\Rightarrow\\text{growth}",
          "explanation": "For $y=a^{x}$, if the base $a$ is bigger than $1$ the curve rises (growth); if $a$ is between $0$ and $1$ the curve falls (decay).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the base",
          "workingLatex": "a=5",
          "explanation": "In $y=5^{x}$ the base is $5$, which is the number being repeatedly multiplied.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the base with $1$",
          "workingLatex": "5>1",
          "explanation": "Since $5$ is greater than $1$, each increase in $x$ multiplies the value by a factor larger than $1$, making it grow.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the conclusion",
          "workingLatex": "y=5^{x}\\;\\text{is growth}",
          "explanation": "A base larger than $1$ means the function represents exponential growth.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm with values",
          "workingLatex": "5^{0}=1,\\;5^{1}=5,\\;5^{2}=25",
          "explanation": "Calculating a few outputs shows the values rising quickly, which matches growth.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the reasoning",
          "workingLatex": "1<5<25",
          "explanation": "The outputs increase as $x$ increases, confirming that $y=5^{x}$ is indeed exponential growth.",
          "diagram": null
        }
      ],
      "finalAnswer": "It represents exponential growth, because the base $5$ is greater than $1$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "exponentials",
      "growth-decay",
      "evaluating"
    ],
    "questionText": "Explain whether $y=\\left(\\tfrac12\\right)^{x}$ represents growth or decay, and evaluate it at $x=0$, $x=1$ and $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the base",
          "workingLatex": "a=\\frac{1}{2}",
          "explanation": "The base of the exponential is $\\tfrac12$, the number being raised to the power $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the growth/decay rule",
          "workingLatex": "0<a<1\\Rightarrow\\text{decay}",
          "explanation": "When the base lies between $0$ and $1$, each step multiplies by a factor smaller than $1$, so the curve falls.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule",
          "workingLatex": "0<\\frac{1}{2}<1\\;\\Rightarrow\\;\\text{decay}",
          "explanation": "Since $\\tfrac12$ is between $0$ and $1$, the function represents exponential decay.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at $x=0$",
          "workingLatex": "\\left(\\frac{1}{2}\\right)^{0}=1",
          "explanation": "Any positive base to the power $0$ is $1$, so the curve starts at $1$ when $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at $x=1$",
          "workingLatex": "\\left(\\frac{1}{2}\\right)^{1}=\\frac{1}{2}",
          "explanation": "Raising to the power $1$ gives the base itself, which is $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at $x=2$",
          "workingLatex": "\\left(\\frac{1}{2}\\right)^{2}=\\frac{1}{4}",
          "explanation": "Squaring $\\tfrac12$ multiplies two halves together to give $\\tfrac14$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the values fall",
          "workingLatex": "1>\\frac{1}{2}>\\frac{1}{4}",
          "explanation": "The outputs get smaller as $x$ increases, which confirms the function is decaying.",
          "diagram": null
        }
      ],
      "finalAnswer": "It represents decay (since $0<\\tfrac12<1$); the values are $1$, $\\tfrac12$ and $\\tfrac14$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponentials",
      "euler-number",
      "evaluating"
    ],
    "questionText": "Using $\\mathrm{e}\\approx2.718$, evaluate $\\mathrm{e}^{0}$ and give $\\mathrm{e}^{1}$ to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what $\\mathrm{e}$ is",
          "workingLatex": "\\mathrm{e}\\approx2.718",
          "explanation": "The number $\\mathrm{e}$ is a fixed constant, roughly $2.718$, and it behaves like any other base in the index laws.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $\\mathrm{e}^{0}$",
          "workingLatex": "\\mathrm{e}^{0}=1",
          "explanation": "Any positive number raised to the power $0$ equals $1$, and $\\mathrm{e}$ is no exception.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write $\\mathrm{e}^{1}$",
          "workingLatex": "\\mathrm{e}^{1}=\\mathrm{e}",
          "explanation": "Raising a base to the power $1$ leaves it unchanged, so $\\mathrm{e}^{1}$ is just $\\mathrm{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Insert the value of $\\mathrm{e}$",
          "workingLatex": "\\mathrm{e}^{1}\\approx2.718",
          "explanation": "Replacing $\\mathrm{e}$ with its decimal approximation gives $2.718$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to $3$ significant figures",
          "workingLatex": "2.718\\approx2.72",
          "explanation": "The first three significant figures are $2$, $7$ and $1$; the next digit is $8$, so we round the $1$ up to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the results",
          "workingLatex": "\\mathrm{e}^{0}=1,\\;\\mathrm{e}^{1}\\approx2.72",
          "explanation": "Both answers are positive and $\\mathrm{e}^{1}>\\mathrm{e}^{0}$, which fits an increasing exponential, so they look correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathrm{e}^{0}=1$ and $\\mathrm{e}^{1}\\approx2.72$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "exponentials",
      "euler-number",
      "graphs"
    ],
    "questionText": "State three key features of the graph of $y=\\mathrm{e}^{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the base",
          "workingLatex": "\\mathrm{e}\\approx2.718>1",
          "explanation": "The base $\\mathrm{e}$ is about $2.718$, which is greater than $1$. This tells us the shape is a rising exponential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the $y$-intercept",
          "workingLatex": "\\mathrm{e}^{0}=1\\;\\Rightarrow\\;(0,1)",
          "explanation": "Setting $x=0$ gives $y=1$, so the curve passes through $(0,1)$ like every exponential of this form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe the direction",
          "workingLatex": "\\mathrm{e}>1\\;\\Rightarrow\\;\\text{increasing}",
          "explanation": "Because the base is greater than $1$, the curve rises from left to right, so it is an increasing (growth) function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the asymptote",
          "workingLatex": "y=0",
          "explanation": "As $x$ becomes very negative the curve approaches the $x$-axis but never touches it, giving the horizontal asymptote $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the sign of the output",
          "workingLatex": "\\mathrm{e}^{x}>0",
          "explanation": "The value of $\\mathrm{e}^{x}$ is always positive, so the whole curve lies above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect three key features",
          "workingLatex": "(0,1),\\;\\text{increasing},\\;y=0",
          "explanation": "Choosing three clear features gives a complete description of the graph's behaviour.",
          "diagram": null
        }
      ],
      "finalAnswer": "It passes through $(0,1)$, it is increasing (growth), and it has the horizontal asymptote $y=0$ with $\\mathrm{e}^{x}>0$ everywhere."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponentials",
      "index-laws",
      "negative-powers"
    ],
    "questionText": "Using the index law $a^{-n}=\\tfrac{1}{a^{n}}$, evaluate $2^{-3}$ and $2^{-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the negative-index law",
          "workingLatex": "a^{-n}=\\frac{1}{a^{n}}",
          "explanation": "A negative power means we take the reciprocal of the positive power, turning it into a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite $2^{-3}$",
          "workingLatex": "2^{-3}=\\frac{1}{2^{3}}",
          "explanation": "Applying the law flips $2^{3}$ into the bottom of a fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the denominator",
          "workingLatex": "2^{3}=8\\;\\Rightarrow\\;2^{-3}=\\frac{1}{8}",
          "explanation": "Since $2^{3}=8$, the value of $2^{-3}$ is $\\tfrac18$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite $2^{-1}$",
          "workingLatex": "2^{-1}=\\frac{1}{2^{1}}",
          "explanation": "The same law applied to $2^{-1}$ gives one over $2^{1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate it",
          "workingLatex": "2^{1}=2\\;\\Rightarrow\\;2^{-1}=\\frac{1}{2}",
          "explanation": "Because $2^{1}=2$, we find $2^{-1}=\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the answers",
          "workingLatex": "0<\\frac{1}{8}<\\frac{1}{2}<1",
          "explanation": "Both results are positive fractions less than $1$, which is exactly what negative powers of a base bigger than $1$ should give.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2^{-3}=\\tfrac{1}{8}$ and $2^{-1}=\\tfrac{1}{2}$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "exponentials",
      "comparing",
      "evaluating"
    ],
    "questionText": "Compare the values of $2^{x}$ and $3^{x}$ at $x=2$, and state which function grows faster.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Evaluate $2^{x}$ at $x=2$",
          "workingLatex": "2^{2}=4",
          "explanation": "Squaring the base $2$ gives $4$, the height of the first curve at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $3^{x}$ at $x=2$",
          "workingLatex": "3^{2}=9",
          "explanation": "Squaring the base $3$ gives $9$, the height of the second curve at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the two values",
          "workingLatex": "9>4",
          "explanation": "At $x=2$ the value of $3^{x}$ is larger than that of $2^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Link this to the base",
          "workingLatex": "3>2",
          "explanation": "The curve with the larger base rises more steeply, so it reaches greater heights for the same $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State which grows faster",
          "workingLatex": "3^{x}\\;\\text{grows faster}",
          "explanation": "Because $3^{x}$ is above $2^{x}$ and its base is larger, $3^{x}$ grows faster.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check at another point",
          "workingLatex": "2^{1}=2,\\;3^{1}=3",
          "explanation": "At $x=1$ we again have $3^{x}>2^{x}$, which supports the conclusion that $3^{x}$ grows faster.",
          "diagram": null
        }
      ],
      "finalAnswer": "At $x=2$, $2^{2}=4$ and $3^{2}=9$, so $3^{x}$ is larger and grows faster."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "exponentials",
      "positive-output",
      "asymptote"
    ],
    "questionText": "Explain why $a^{x}>0$ for all real values of $x$ (where $a>0$), and hence why the curve $y=a^{x}$ never touches the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with a positive base",
          "workingLatex": "a>0",
          "explanation": "For an exponential $y=a^{x}$ the base $a$ is a positive number, which is the key fact behind the result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Consider positive powers",
          "workingLatex": "a^{2}=a\\times a>0",
          "explanation": "Multiplying positive numbers together always gives a positive result, so any positive integer power of $a$ is positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consider the zero power",
          "workingLatex": "a^{0}=1>0",
          "explanation": "The power $0$ gives $1$, which is positive, so the curve is positive at $x=0$ too.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider negative powers",
          "workingLatex": "a^{-n}=\\frac{1}{a^{n}}>0",
          "explanation": "A negative power is the reciprocal of a positive number, and one over a positive number is still positive.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the cases",
          "workingLatex": "a^{x}>0\\;\\text{for all }x",
          "explanation": "Whether $x$ is positive, zero or negative, the output is always positive, so $a^{x}$ can never equal $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link to the graph",
          "workingLatex": "y=0\\;\\text{is an asymptote}",
          "explanation": "Since $y$ is never $0$, the curve gets close to the $x$-axis but never meets it, so $y=0$ is a horizontal asymptote.",
          "diagram": null
        }
      ],
      "finalAnswer": "Because a positive base gives a positive result for every power, $a^{x}>0$ always, so the curve stays above the $x$-axis and only approaches $y=0$ as an asymptote."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "exponentials",
      "euler-number",
      "evaluating"
    ],
    "questionText": "Using $\\mathrm{e}\\approx2.718$, evaluate $\\mathrm{e}^{2}$ to $3$ significant figures and state the coordinates of the point $(2,\\mathrm{e}^{2})$ on the curve $y=\\mathrm{e}^{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the value of $\\mathrm{e}$",
          "workingLatex": "\\mathrm{e}\\approx2.718",
          "explanation": "The constant $\\mathrm{e}$ is approximately $2.718$ and can be used like any other base.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write $\\mathrm{e}^{2}$ as a product",
          "workingLatex": "\\mathrm{e}^{2}=\\mathrm{e}\\times\\mathrm{e}",
          "explanation": "A power of $2$ means multiplying two copies of $\\mathrm{e}$ together.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the approximation",
          "workingLatex": "\\mathrm{e}^{2}\\approx2.718\\times2.718",
          "explanation": "Replacing each $\\mathrm{e}$ with $2.718$ lets us work out the product.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Carry out the multiplication",
          "workingLatex": "2.718\\times2.718\\approx7.3879",
          "explanation": "Multiplying gives about $7.3879$, the value before rounding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to $3$ significant figures",
          "workingLatex": "7.3879\\approx7.39",
          "explanation": "The first three significant figures are $7$, $3$ and $8$; the next digit is $7$, so the $8$ rounds up to $9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the point on the curve",
          "workingLatex": "(2,\\mathrm{e}^{2})\\approx(2,7.39)",
          "explanation": "Since $y=\\mathrm{e}^{x}$ at $x=2$ gives $y=\\mathrm{e}^{2}$, the point $(2,\\mathrm{e}^{2})$ lies on the curve at about $(2,7.39)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the result is sensible",
          "workingLatex": "\\mathrm{e}^{1}\\approx2.72<7.39",
          "explanation": "The value at $x=2$ is larger than at $x=1$, which fits an increasing exponential, so the answer looks correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathrm{e}^{2}\\approx7.39$ (to $3$ s.f.), so the point is $(2,\\mathrm{e}^{2})\\approx(2,7.39)$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponentials",
      "equating-indices",
      "index-laws"
    ],
    "questionText": "Solve the equation $2^{x} = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation.",
          "workingLatex": "2^{x}=8",
          "explanation": "We want the power of $2$ that produces $8$. The key idea is to make both sides powers of the same base so we can compare the indices directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express 8 as a power of 2.",
          "workingLatex": "8=2^{3}",
          "explanation": "Since $2\\times 2\\times 2 = 8$, we can rewrite $8$ as $2^{3}$. This gives the right-hand side the same base as the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation with a common base.",
          "workingLatex": "2^{x}=2^{3}",
          "explanation": "Both sides are now written as powers of $2$. When two equal quantities share the same positive base, their powers must match.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the indices.",
          "workingLatex": "x=3",
          "explanation": "Because $2^{x}=2^{3}$ with the same base, the exponents must be equal, so $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the solution.",
          "workingLatex": "x=3",
          "explanation": "This is the single value of $x$ that satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by substituting back.",
          "workingLatex": "2^{3}=8\\;\\checkmark",
          "explanation": "Substituting $x=3$ gives $2^{3}=8$, which matches the original right-hand side, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponentials",
      "equating-indices",
      "index-laws"
    ],
    "questionText": "Solve the equation $3^{x} = 81$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation.",
          "workingLatex": "3^{x}=81",
          "explanation": "We are looking for the power of $3$ that gives $81$. Rewriting both sides with the same base will let us compare exponents.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express 81 as a power of 3.",
          "workingLatex": "81=3^{4}",
          "explanation": "Since $3\\times 3\\times 3\\times 3 = 81$, we can write $81$ as $3^{4}$, giving both sides base $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation with a common base.",
          "workingLatex": "3^{x}=3^{4}",
          "explanation": "Both sides are now powers of $3$, so the equation is ready for comparing indices.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the indices.",
          "workingLatex": "x=4",
          "explanation": "With the same base on each side, the powers must be equal, so $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the solution.",
          "workingLatex": "x=4",
          "explanation": "This is the value of $x$ that satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by substituting back.",
          "workingLatex": "3^{4}=81\\;\\checkmark",
          "explanation": "Substituting $x=4$ gives $3^{4}=81$, which matches the original equation, so the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=4$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponentials",
      "equating-indices",
      "index-laws"
    ],
    "questionText": "Solve the equation $5^{x} = 125$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation.",
          "workingLatex": "5^{x}=125",
          "explanation": "We need the power of $5$ that produces $125$. Making both sides share the base $5$ lets us match the exponents.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express 125 as a power of 5.",
          "workingLatex": "125=5^{3}",
          "explanation": "Since $5\\times 5\\times 5 = 125$, we rewrite $125$ as $5^{3}$ so both sides use base $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation with a common base.",
          "workingLatex": "5^{x}=5^{3}",
          "explanation": "Both sides are now powers of $5$, ready for comparing the indices.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the indices.",
          "workingLatex": "x=3",
          "explanation": "Equal powers of the same base force the exponents to be equal, giving $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the solution.",
          "workingLatex": "x=3",
          "explanation": "This is the value of $x$ that satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by substituting back.",
          "workingLatex": "5^{3}=125\\;\\checkmark",
          "explanation": "Substituting $x=3$ gives $5^{3}=125$, matching the original equation, so the answer is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "exponentials",
      "equating-indices",
      "negative-indices"
    ],
    "questionText": "Solve the equation $2^{x} = \\tfrac{1}{16}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation.",
          "workingLatex": "2^{x}=\\frac{1}{16}",
          "explanation": "We want the power of $2$ that gives $\\tfrac{1}{16}$. A fraction less than $1$ hints that the index will be negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express 16 as a power of 2.",
          "workingLatex": "16=2^{4}",
          "explanation": "Since $2\\times 2\\times 2\\times 2 = 16$, we can write $16$ as $2^{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the fraction using a negative index.",
          "workingLatex": "\\frac{1}{16}=\\frac{1}{2^{4}}=2^{-4}",
          "explanation": "A reciprocal power law states $\\tfrac{1}{a^{n}}=a^{-n}$, so $\\tfrac{1}{2^{4}}$ becomes $2^{-4}$. This gives the right-hand side base $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation with a common base.",
          "workingLatex": "2^{x}=2^{-4}",
          "explanation": "Both sides are now powers of $2$, so we can compare their exponents directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "x=-4",
          "explanation": "With the same base on each side, the powers must be equal, so $x=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solution.",
          "workingLatex": "x=-4",
          "explanation": "This is the value of $x$ that satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by substituting back.",
          "workingLatex": "2^{-4}=\\frac{1}{2^{4}}=\\frac{1}{16}\\;\\checkmark",
          "explanation": "Substituting $x=-4$ recovers $\\tfrac{1}{16}$, matching the original equation, so the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=-4$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponentials",
      "equating-indices",
      "exponential-e"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{x} = \\mathrm{e}^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation.",
          "workingLatex": "\\mathrm{e}^{x}=\\mathrm{e}^{4}",
          "explanation": "Both sides are powers of the same number $\\mathrm{e}$, which makes comparing the exponents straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the common base.",
          "workingLatex": "\\text{base}=\\mathrm{e}",
          "explanation": "The base is $\\mathrm{e}$ on both sides, and $\\mathrm{e}\\approx 2.718$ is a fixed positive number not equal to $1$, so the equating-indices rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the equating-indices rule.",
          "workingLatex": "a^{f}=a^{g}\\Rightarrow f=g",
          "explanation": "When two equal powers share the same positive base (other than $1$), their exponents must be equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the indices.",
          "workingLatex": "x=4",
          "explanation": "Applying the rule with base $\\mathrm{e}$ gives $x=4$ immediately.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the solution.",
          "workingLatex": "x=4",
          "explanation": "This is the value of $x$ that satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by substituting back.",
          "workingLatex": "\\mathrm{e}^{4}=\\mathrm{e}^{4}\\;\\checkmark",
          "explanation": "Substituting $x=4$ makes both sides identical, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=4$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponentials",
      "equating-indices",
      "exponential-e"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{2x} = \\mathrm{e}^{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation.",
          "workingLatex": "\\mathrm{e}^{2x}=\\mathrm{e}^{6}",
          "explanation": "Both sides are powers of $\\mathrm{e}$, so we can equate the exponents and then solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the common base.",
          "workingLatex": "\\text{base}=\\mathrm{e}",
          "explanation": "The base $\\mathrm{e}$ is the same on both sides, so the equating-indices rule can be used.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the equating-indices rule.",
          "workingLatex": "a^{f}=a^{g}\\Rightarrow f=g",
          "explanation": "Equal powers of the same positive base force their exponents to be equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the indices.",
          "workingLatex": "2x=6",
          "explanation": "Matching the exponents gives the simple linear equation $2x=6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x.",
          "workingLatex": "x=\\frac{6}{2}=3",
          "explanation": "Dividing both sides by $2$ isolates $x$, giving $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solution.",
          "workingLatex": "x=3",
          "explanation": "This is the value of $x$ that satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by substituting back.",
          "workingLatex": "\\mathrm{e}^{2\\times 3}=\\mathrm{e}^{6}\\;\\checkmark",
          "explanation": "Substituting $x=3$ gives $\\mathrm{e}^{6}$ on the left, matching the right-hand side, so the answer is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "exponentials",
      "equating-indices",
      "index-laws"
    ],
    "questionText": "Given that $a$ is a positive constant with $a \\neq 1$, solve the equation $a^{x} = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation.",
          "workingLatex": "a^{x}=1",
          "explanation": "We want the power of $a$ that equals $1$. The right-hand side is a plain number, so we express it as a power of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the zero-index law.",
          "workingLatex": "a^{0}=1",
          "explanation": "Any positive base raised to the power $0$ equals $1$. This lets us write $1$ as a power of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite 1 as a power of a.",
          "workingLatex": "a^{x}=a^{0}",
          "explanation": "Replacing $1$ with $a^{0}$ gives both sides the same base $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the indices.",
          "workingLatex": "x=0",
          "explanation": "Since $a>0$ and $a\\neq 1$, equal powers of $a$ force the exponents to match, so $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the solution.",
          "workingLatex": "x=0",
          "explanation": "This is the only value of $x$ that satisfies the equation for such a base $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by substituting back.",
          "workingLatex": "a^{0}=1\\;\\checkmark",
          "explanation": "Substituting $x=0$ gives $a^{0}=1$, matching the original equation, so the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=0$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "exponentials",
      "equating-indices",
      "common-base"
    ],
    "questionText": "Solve the equation $9^{x} = 27$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation.",
          "workingLatex": "9^{x}=27",
          "explanation": "The bases $9$ and $27$ are different, but both are powers of $3$, so rewriting each with base $3$ will let us compare indices.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express 9 and 27 as powers of 3.",
          "workingLatex": "9=3^{2},\\;27=3^{3}",
          "explanation": "Since $3^{2}=9$ and $3^{3}=27$, the common base for both sides is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation using base 3.",
          "workingLatex": "\\left(3^{2}\\right)^{x}=3^{3}",
          "explanation": "Replacing $9$ with $3^{2}$ and $27$ with $3^{3}$ puts everything in terms of base $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the left-hand side.",
          "workingLatex": "3^{2x}=3^{3}",
          "explanation": "Using the power-of-a-power law $\\left(a^{m}\\right)^{n}=a^{mn}$, the exponent $2$ multiplies $x$ to give $3^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices.",
          "workingLatex": "2x=3",
          "explanation": "With the same base $3$ on both sides, the exponents must be equal, giving $2x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x.",
          "workingLatex": "x=\\frac{3}{2}",
          "explanation": "Dividing both sides by $2$ isolates $x$, giving $x=\\tfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solution.",
          "workingLatex": "x=\\frac{3}{2}",
          "explanation": "This is the value of $x$ that satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by substituting back.",
          "workingLatex": "9^{3/2}=\\left(\\sqrt{9}\\right)^{3}=3^{3}=27\\;\\checkmark",
          "explanation": "Substituting $x=\\tfrac{3}{2}$ gives $\\left(\\sqrt{9}\\right)^{3}=27$, matching the original equation, so the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\dfrac{3}{2}$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "translation"
    ],
    "questionText": "Describe fully the single transformation that maps the graph of $y = \\mathrm{e}^{x}$ onto the graph of $y = \\mathrm{e}^{x} + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two functions.",
          "workingLatex": "y=\\mathrm{e}^{x}\\quad\\to\\quad y=\\mathrm{e}^{x}+3",
          "explanation": "Looking at what has changed between the two equations tells us which transformation has been applied.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what has changed.",
          "workingLatex": "y=\\mathrm{e}^{x}+3",
          "explanation": "The constant $3$ is added to the whole function after computing $\\mathrm{e}^{x}$, so every output value is increased by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the rule for adding a constant.",
          "workingLatex": "y=f(x)+c\\;\\text{shifts the graph up by }c",
          "explanation": "Adding $c$ outside the function raises each point vertically, which is a translation in the positive $y$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule with c = 3.",
          "workingLatex": "c=3",
          "explanation": "Here $c=3$, so the graph is translated $3$ units vertically upwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the translation as a vector.",
          "workingLatex": "\\begin{pmatrix}0\\\\3\\end{pmatrix}",
          "explanation": "A pure vertical shift has no horizontal movement, so the translation vector has $0$ in the $x$-component and $3$ in the $y$-component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm using the asymptote.",
          "workingLatex": "y=0\\;\\to\\;y=3",
          "explanation": "The horizontal asymptote of $y=\\mathrm{e}^{x}$ moves from $y=0$ up to $y=3$, which agrees with a translation of $3$ units upward.",
          "diagram": null
        }
      ],
      "finalAnswer": "A translation of $3$ units in the positive $y$-direction (vector $\\begin{pmatrix}0\\\\3\\end{pmatrix}$)."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "reflection"
    ],
    "questionText": "Describe fully the single transformation that maps the graph of $y = \\mathrm{e}^{x}$ onto the graph of $y = \\mathrm{e}^{-x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two functions.",
          "workingLatex": "y=\\mathrm{e}^{x}\\quad\\to\\quad y=\\mathrm{e}^{-x}",
          "explanation": "Comparing the equations shows exactly what has been done to the input variable $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what has changed.",
          "workingLatex": "x\\;\\to\\;-x",
          "explanation": "The variable $x$ has been replaced by $-x$ inside the function, which affects the horizontal direction of the graph.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the rule for replacing x with -x.",
          "workingLatex": "y=f(-x)\\;\\text{reflects the graph in the }y\\text{-axis}",
          "explanation": "Replacing $x$ with $-x$ swaps left and right, which is a reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule to this function.",
          "workingLatex": "y=\\mathrm{e}^{-x}=f(-x)\\text{ where }f(x)=\\mathrm{e}^{x}",
          "explanation": "Since $y=\\mathrm{e}^{-x}$ is exactly $f(-x)$, the transformation is a reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the transformation.",
          "workingLatex": "\\text{reflection in the }y\\text{-axis}",
          "explanation": "The single transformation mapping one graph to the other is a reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a sample point.",
          "workingLatex": "(a,\\mathrm{e}^{a})\\;\\mapsto\\;(-a,\\mathrm{e}^{a})",
          "explanation": "A point on $y=\\mathrm{e}^{x}$ maps to one with the same height but opposite $x$-coordinate, which is exactly what reflecting in the $y$-axis does.",
          "diagram": null
        }
      ],
      "finalAnswer": "A reflection in the $y$-axis."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "reflection"
    ],
    "questionText": "Describe fully the single transformation that maps the graph of $y = \\mathrm{e}^{x}$ onto the graph of $y = -\\mathrm{e}^{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two functions.",
          "workingLatex": "y=\\mathrm{e}^{x}\\quad\\to\\quad y=-\\mathrm{e}^{x}",
          "explanation": "Comparing the equations shows what has been done to the output of the function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what has changed.",
          "workingLatex": "y\\;\\to\\;-y",
          "explanation": "The whole function has been multiplied by $-1$, so each output value changes sign while the input stays the same.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the rule for multiplying by -1.",
          "workingLatex": "y=-f(x)\\;\\text{reflects the graph in the }x\\text{-axis}",
          "explanation": "Negating the output flips the graph upside down, which is a reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule to this function.",
          "workingLatex": "y=-\\mathrm{e}^{x}=-f(x)\\text{ where }f(x)=\\mathrm{e}^{x}",
          "explanation": "Since $y=-\\mathrm{e}^{x}$ is exactly $-f(x)$, the transformation is a reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the transformation.",
          "workingLatex": "\\text{reflection in the }x\\text{-axis}",
          "explanation": "The single transformation mapping one graph to the other is a reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a sample point.",
          "workingLatex": "(a,\\mathrm{e}^{a})\\;\\mapsto\\;(a,-\\mathrm{e}^{a})",
          "explanation": "A point on $y=\\mathrm{e}^{x}$ maps to one with the same $x$-coordinate but opposite height, which is exactly what reflecting in the $x$-axis does.",
          "diagram": null
        }
      ],
      "finalAnswer": "A reflection in the $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Sketch the graph of $y=\\mathrm{e}^{x}+2$. State the coordinates of the $y$-intercept, the equation of the horizontal asymptote, and describe the behaviour of the curve as $x\\to-\\infty$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base curve",
          "workingLatex": "y=\\mathrm{e}^{x}",
          "explanation": "The standard exponential $y=\\mathrm{e}^{x}$ passes through $(0,1)$ and hugs the $x$-axis on the left. Recognising this familiar shape first means we only have to track how it moves.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y=\\mathrm{e}^{x}+2",
          "explanation": "Adding $2$ to the whole function lifts every point on the curve up by $2$ units. This is a vertical translation; because nothing inside the exponential changes, the shape stays exactly the same.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x=0 for the y-intercept",
          "workingLatex": "x=0:\\quad y=\\mathrm{e}^{0}+2",
          "explanation": "The $y$-intercept is where the curve crosses the vertical axis, which always happens at $x=0$. Putting $x=0$ into the equation gives that height directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=1+2=3\\ \\Rightarrow\\ (0,3)",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the height is $1+2=3$. The curve therefore cuts the $y$-axis at $(0,3)$, which is simply the original point $(0,1)$ raised by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the horizontal asymptote",
          "workingLatex": "y=0\\ \\to\\ y=2",
          "explanation": "The original curve levels off towards $y=0$. Lifting everything up by $2$ carries that flat guideline up with it, so the new horizontal asymptote is $y=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Behaviour as x tends to negative infinity",
          "workingLatex": "x\\to-\\infty:\\ \\mathrm{e}^{x}\\to0\\ \\Rightarrow\\ y\\to2",
          "explanation": "For very negative $x$, $\\mathrm{e}^{x}$ becomes vanishingly small, so $y$ settles just above $2$. The curve gets ever closer to the line $y=2$ without ever touching it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x tends to positive infinity",
          "workingLatex": "x\\to+\\infty:\\ \\mathrm{e}^{x}\\to\\infty\\ \\Rightarrow\\ y\\to\\infty",
          "explanation": "On the right, the exponential grows without limit, so the curve rises steeply upward. This confirms the graph is increasing across its whole domain.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note there is no x-intercept",
          "workingLatex": "\\mathrm{e}^{x}>0\\ \\Rightarrow\\ y=\\mathrm{e}^{x}+2>2",
          "explanation": "Because $\\mathrm{e}^{x}$ is always positive, $y$ is always greater than $2$. The curve stays entirely above the $x$-axis, so it never crosses it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the shift",
          "workingLatex": "(0,1)\\ \\xrightarrow{+2}\\ (0,3)",
          "explanation": "As a quick check, the base curve's intercept $(0,1)$ should move up by $2$ to $(0,3)$, which matches Step 4. The asymptote $y=0$ likewise moved up to $y=2$, so everything is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Describe the finished sketch",
          "workingLatex": "y=\\mathrm{e}^{x}+2",
          "explanation": "Draw an increasing exponential curve crossing the $y$-axis at $(0,3)$, flattening towards the dashed line $y=2$ on the far left and shooting upward on the right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,3)$; horizontal asymptote $y=2$; as $x\\to-\\infty$ the curve decreases towards (but never reaches) $y=2$, and as $x\\to+\\infty$ it rises without bound."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Sketch the graph of $y=\\mathrm{e}^{x}-3$. State the $y$-intercept and the equation of the horizontal asymptote, and describe the overall shape of the curve. (You are not required to find where it crosses the $x$-axis.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base curve",
          "workingLatex": "y=\\mathrm{e}^{x}",
          "explanation": "Begin with the familiar $y=\\mathrm{e}^{x}$, which passes through $(0,1)$ and has the $x$-axis as its asymptote. All we need to do is track how it shifts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y=\\mathrm{e}^{x}-3",
          "explanation": "Subtracting $3$ from the whole function lowers every point by $3$ units, a vertical translation downward. The exponential shape is untouched because the change is outside the power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x=0 for the y-intercept",
          "workingLatex": "x=0:\\quad y=\\mathrm{e}^{0}-3",
          "explanation": "The graph meets the $y$-axis at $x=0$, so substituting $x=0$ gives the intercept height directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=1-3=-2\\ \\Rightarrow\\ (0,-2)",
          "explanation": "With $\\mathrm{e}^{0}=1$, the height is $1-3=-2$. The curve cuts the $y$-axis at $(0,-2)$, exactly $3$ below the original point $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the horizontal asymptote",
          "workingLatex": "y=0\\ \\to\\ y=-3",
          "explanation": "The base curve flattens towards $y=0$. Dropping everything by $3$ carries that guideline down, so the new horizontal asymptote is $y=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Behaviour as x tends to negative infinity",
          "workingLatex": "x\\to-\\infty:\\ \\mathrm{e}^{x}\\to0\\ \\Rightarrow\\ y\\to-3",
          "explanation": "For very negative $x$, $\\mathrm{e}^{x}$ shrinks to almost nothing, so $y$ approaches $-3$ from above. The curve nestles against the line $y=-3$ on the far left.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x tends to positive infinity",
          "workingLatex": "x\\to+\\infty:\\ \\mathrm{e}^{x}\\to\\infty\\ \\Rightarrow\\ y\\to\\infty",
          "explanation": "On the right the exponential grows without limit, so the curve climbs steeply. The graph is increasing everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on the x-axis crossing",
          "workingLatex": "y=0\\ \\text{when}\\ \\mathrm{e}^{x}=3",
          "explanation": "Because the curve starts below the axis at $(0,-2)$ and rises to $+\\infty$, it must cross the $x$-axis exactly once. Pinning down that exact $x$ would need logarithms, so we simply note the single crossing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the shift",
          "workingLatex": "(0,1)\\ \\xrightarrow{-3}\\ (0,-2)",
          "explanation": "Checking the move: the base intercept $(0,1)$ should fall $3$ to $(0,-2)$, matching Step 4, and the asymptote $y=0$ should fall to $y=-3$. Both agree, so the sketch is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Describe the finished sketch",
          "workingLatex": "y=\\mathrm{e}^{x}-3",
          "explanation": "Draw an increasing exponential curve that flattens towards the dashed line $y=-3$ on the left, crosses the $y$-axis at $(0,-2)$, passes up through the $x$-axis once, then rises steeply.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,-2)$; horizontal asymptote $y=-3$; an increasing curve approaching $y=-3$ as $x\\to-\\infty$ and rising without bound as $x\\to+\\infty$, crossing the $x$-axis once (exact point not required)."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Sketch the graph of $y=2\\mathrm{e}^{x}$. State the coordinates of the $y$-intercept, the equation of the horizontal asymptote, and describe how the curve compares with $y=\\mathrm{e}^{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base curve",
          "workingLatex": "y=\\mathrm{e}^{x}",
          "explanation": "The base graph $y=\\mathrm{e}^{x}$ passes through $(0,1)$ with the $x$-axis as its asymptote. We will see how multiplying by a constant reshapes it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y=2\\mathrm{e}^{x}",
          "explanation": "Multiplying the whole function by $2$ doubles every $y$-value. Geometrically this is a vertical stretch with scale factor $2$, so the curve is pulled twice as far from the $x$-axis at each point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x=0 for the y-intercept",
          "workingLatex": "x=0:\\quad y=2\\mathrm{e}^{0}",
          "explanation": "Setting $x=0$ finds where the curve meets the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=2\\times1=2\\ \\Rightarrow\\ (0,2)",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the height is $2$. The intercept $(0,2)$ is the original point $(0,1)$ stretched to twice its height, as expected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the horizontal asymptote",
          "workingLatex": "y=0",
          "explanation": "A vertical stretch measures distance from the $x$-axis, so points already on that axis stay put. The asymptote therefore remains $y=0$; doubling zero is still zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Behaviour as x tends to negative infinity",
          "workingLatex": "x\\to-\\infty:\\ \\mathrm{e}^{x}\\to0\\ \\Rightarrow\\ y\\to0",
          "explanation": "For very negative $x$ the exponential fades to zero, so $2\\mathrm{e}^{x}$ also fades to zero. The curve approaches the $x$-axis from above on the left.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x tends to positive infinity",
          "workingLatex": "x\\to+\\infty:\\ \\mathrm{e}^{x}\\to\\infty\\ \\Rightarrow\\ y\\to\\infty",
          "explanation": "On the right the values grow without limit, so the curve is increasing throughout. Because of the factor $2$ it sits above $y=\\mathrm{e}^{x}$ everywhere that the exponential is positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State there is no x-intercept",
          "workingLatex": "2\\mathrm{e}^{x}>0",
          "explanation": "Twice a positive number is still positive, so $y$ is never zero. The curve stays entirely above the $x$-axis and has no $x$-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check with a sample point",
          "workingLatex": "x=1:\\ 2\\mathrm{e}\\approx5.44,\\quad \\mathrm{e}\\approx2.72",
          "explanation": "At $x=1$ the stretched curve gives about $5.44$, precisely twice the base value of about $2.72$. This confirms the vertical stretch of factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Describe the finished sketch",
          "workingLatex": "y=2\\mathrm{e}^{x}",
          "explanation": "Draw an increasing exponential through $(0,2)$, flattening towards the $x$-axis on the left and rising steeply on the right, sitting everywhere twice as high as $y=\\mathrm{e}^{x}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,2)$; horizontal asymptote $y=0$; an increasing curve that is a vertical stretch of $y=\\mathrm{e}^{x}$ by scale factor $2$, so it lies twice as high at every point."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Sketch the graph of $y=\\mathrm{e}^{-x}$. State the $y$-intercept and the horizontal asymptote, and describe the shape of the curve as $x$ varies.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base curve",
          "workingLatex": "y=\\mathrm{e}^{x}",
          "explanation": "Begin with $y=\\mathrm{e}^{x}$, the increasing exponential through $(0,1)$ with asymptote $y=0$. We will reflect it to obtain the required graph.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y=\\mathrm{e}^{-x}",
          "explanation": "Replacing $x$ with $-x$ reflects the graph in the $y$-axis. Every point swaps to the opposite side of the vertical axis, turning the growth curve into a decay curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x=0 for the y-intercept",
          "workingLatex": "x=0:\\quad y=\\mathrm{e}^{-0}=\\mathrm{e}^{0}",
          "explanation": "Setting $x=0$ gives the intercept. The point on the $y$-axis lies on the mirror line, so a reflection in the $y$-axis leaves it unmoved.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=1\\ \\Rightarrow\\ (0,1)",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the curve still passes through $(0,1)$, exactly as the original did. Only the direction of the curve has changed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the horizontal asymptote",
          "workingLatex": "y=0",
          "explanation": "Reflecting in the $y$-axis moves points left and right but not up and down, so the horizontal asymptote stays at $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Behaviour as x tends to positive infinity",
          "workingLatex": "x\\to+\\infty:\\ -x\\to-\\infty,\\ \\mathrm{e}^{-x}\\to0\\ \\Rightarrow\\ y\\to0",
          "explanation": "For large positive $x$, the exponent $-x$ is very negative, so $\\mathrm{e}^{-x}$ shrinks to zero. The curve decays towards the $x$-axis on the right.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x tends to negative infinity",
          "workingLatex": "x\\to-\\infty:\\ -x\\to+\\infty,\\ \\mathrm{e}^{-x}\\to\\infty\\ \\Rightarrow\\ y\\to\\infty",
          "explanation": "For very negative $x$, the exponent $-x$ becomes large and positive, so the curve shoots upward on the left. This is the mirror image of the usual growth.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summarise the direction",
          "workingLatex": "\\text{decreasing for all } x",
          "explanation": "High on the left and low on the right, the curve falls throughout: it is a decreasing (exponential decay) graph, always staying positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the symmetry",
          "workingLatex": "x=1:\\ \\mathrm{e}^{-1}\\approx0.37;\\quad x=-1:\\ \\mathrm{e}^{1}\\approx2.72",
          "explanation": "At $x=1$ the value is about $0.37$ and at $x=-1$ it is about $2.72$, which are precisely the values of $y=\\mathrm{e}^{x}$ at $x=-1$ and $x=1$. This mirror pairing confirms the reflection.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Describe the finished sketch",
          "workingLatex": "y=\\mathrm{e}^{-x}",
          "explanation": "Draw a decreasing curve that is high on the left, passes through $(0,1)$, and decays towards the $x$-axis on the right, remaining above it at all times.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,1)$; horizontal asymptote $y=0$; a decreasing exponential-decay curve (the reflection of $y=\\mathrm{e}^{x}$ in the $y$-axis), high on the left and approaching the $x$-axis on the right."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Sketch the graph of $y=\\mathrm{e}^{-x}+1$. State the coordinates of the $y$-intercept, the equation of the horizontal asymptote, and describe the behaviour of the curve as $x\\to+\\infty$ and as $x\\to-\\infty$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base curve",
          "workingLatex": "y=\\mathrm{e}^{x}",
          "explanation": "Start with the standard $y=\\mathrm{e}^{x}$. The target graph is built from it by a reflection and then a shift, so tracking those two moves gives the whole picture.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the reflection",
          "workingLatex": "y=\\mathrm{e}^{-x}",
          "explanation": "The $-x$ in the exponent reflects the graph in the $y$-axis, turning growth into decay. This intermediate curve is high on the left and decays towards $y=0$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the vertical translation",
          "workingLatex": "y=\\mathrm{e}^{-x}+1",
          "explanation": "Adding $1$ lifts the whole decay curve up by $1$ unit. This is a vertical translation, so the shape is unchanged but every point rises.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x=0 for the y-intercept",
          "workingLatex": "x=0:\\quad y=\\mathrm{e}^{0}+1",
          "explanation": "Setting $x=0$ locates where the curve meets the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=1+1=2\\ \\Rightarrow\\ (0,2)",
          "explanation": "Because $\\mathrm{e}^{0}=1$, the height is $1+1=2$. The curve crosses the $y$-axis at $(0,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the horizontal asymptote",
          "workingLatex": "y=0\\ \\to\\ y=1",
          "explanation": "The decay curve $\\mathrm{e}^{-x}$ levels off towards $y=0$; lifting it by $1$ raises that guideline to $y=1$. So the new horizontal asymptote is $y=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x tends to positive infinity",
          "workingLatex": "x\\to+\\infty:\\ \\mathrm{e}^{-x}\\to0\\ \\Rightarrow\\ y\\to1",
          "explanation": "For large positive $x$, $\\mathrm{e}^{-x}$ fades to zero, so $y$ settles just above $1$. The curve approaches the line $y=1$ from above on the right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Behaviour as x tends to negative infinity",
          "workingLatex": "x\\to-\\infty:\\ \\mathrm{e}^{-x}\\to\\infty\\ \\Rightarrow\\ y\\to\\infty",
          "explanation": "For very negative $x$, $\\mathrm{e}^{-x}$ grows without limit, so the curve rises steeply on the left. It is decreasing as we move from left to right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State there is no x-intercept",
          "workingLatex": "\\mathrm{e}^{-x}>0\\ \\Rightarrow\\ y>1",
          "explanation": "Since $\\mathrm{e}^{-x}$ is always positive, $y$ is always more than $1$. The curve stays above the line $y=1$ and never reaches the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check the intercept",
          "workingLatex": "\\mathrm{e}^{-0}=1,\\ 1+1=2",
          "explanation": "Rechecking: at $x=0$ the decay part equals $1$, and adding $1$ gives $2$, matching the intercept $(0,2)$. The value also lies above the asymptote $y=1$, as it should.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Describe the finished sketch",
          "workingLatex": "y=\\mathrm{e}^{-x}+1",
          "explanation": "Draw a decreasing decay curve that is high on the left, passes through $(0,2)$, and flattens towards the dashed line $y=1$ on the right without touching it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,2)$; horizontal asymptote $y=1$; as $x\\to+\\infty$ the curve decays towards $y=1$ from above, and as $x\\to-\\infty$ it rises without bound (a decreasing curve throughout)."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Sketch the graph of $y=\\mathrm{e}^{2x}$. State the $y$-intercept and the horizontal asymptote, and compare the steepness of the curve with that of $y=\\mathrm{e}^{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base curve",
          "workingLatex": "y=\\mathrm{e}^{x}",
          "explanation": "Begin with $y=\\mathrm{e}^{x}$ through $(0,1)$ with asymptote $y=0$. Doubling the exponent will squeeze the graph horizontally, and it helps to compare the two directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y=\\mathrm{e}^{2x}",
          "explanation": "Replacing $x$ with $2x$ compresses the graph horizontally by scale factor $\\tfrac12$. Everything happens over half the horizontal distance, which makes the curve rise more sharply.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x=0 for the y-intercept",
          "workingLatex": "x=0:\\quad y=\\mathrm{e}^{2\\times0}=\\mathrm{e}^{0}",
          "explanation": "At $x=0$ the exponent $2x$ is also zero, so the intercept sits on the $y$-axis where the horizontal stretch has no effect.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=1\\ \\Rightarrow\\ (0,1)",
          "explanation": "Because $\\mathrm{e}^{0}=1$, the curve passes through $(0,1)$, the same intercept as $y=\\mathrm{e}^{x}$. A horizontal squeeze fixes points on the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the horizontal asymptote",
          "workingLatex": "y=0",
          "explanation": "The exponential is still positive and levels off towards zero on the left, so the horizontal asymptote remains $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Behaviour as x tends to negative infinity",
          "workingLatex": "x\\to-\\infty:\\ 2x\\to-\\infty,\\ \\mathrm{e}^{2x}\\to0",
          "explanation": "For negative $x$ the exponent $2x$ is even more negative than $x$, so the curve collapses towards the $x$-axis more quickly than $y=\\mathrm{e}^{x}$ does.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x tends to positive infinity",
          "workingLatex": "x\\to+\\infty:\\ 2x\\to+\\infty,\\ \\mathrm{e}^{2x}\\to\\infty",
          "explanation": "For positive $x$ the exponent is twice as large, so the curve grows far faster and climbs to infinity much sooner. It is increasing throughout.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare steepness with a sample point",
          "workingLatex": "x=1:\\ \\mathrm{e}^{2}\\approx7.39\\ \\text{vs}\\ \\mathrm{e}\\approx2.72",
          "explanation": "At $x=1$, $\\mathrm{e}^{2x}\\approx7.39$ while $\\mathrm{e}^{x}\\approx2.72$. The much greater height for the same $x$ shows $y=\\mathrm{e}^{2x}$ is markedly steeper to the right of the shared point $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the halving effect",
          "workingLatex": "x=0.5:\\ \\mathrm{e}^{2(0.5)}=\\mathrm{e}^{1}\\approx2.72",
          "explanation": "At $x=0.5$, $y=\\mathrm{e}^{2x}$ already equals the value $y=\\mathrm{e}^{x}$ only reaches at $x=1$. The curve reproduces the base graph in half the horizontal distance, confirming the factor-$\\tfrac12$ compression.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Describe the finished sketch",
          "workingLatex": "y=\\mathrm{e}^{2x}",
          "explanation": "Draw an increasing exponential through $(0,1)$ that hugs the $x$-axis on the left and rises much more steeply than $y=\\mathrm{e}^{x}$ on the right; both curves share the point $(0,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,1)$; horizontal asymptote $y=0$; a horizontal compression of $y=\\mathrm{e}^{x}$ by scale factor $\\tfrac12$, so it is steeper — rising and decaying about twice as fast — while sharing the point $(0,1)$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Describe fully the single transformation that maps the graph of $y=\\mathrm{e}^{x}$ onto the graph of $y=\\mathrm{e}^{x-2}$, and state the coordinates of the $y$-intercept of $y=\\mathrm{e}^{x-2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two functions",
          "workingLatex": "y=\\mathrm{e}^{x}\\ \\longrightarrow\\ y=\\mathrm{e}^{x-2}",
          "explanation": "The only difference is inside the exponent, where $x$ has become $x-2$. A change inside the function acts on the horizontal direction, so we expect a left/right shift.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the change of variable",
          "workingLatex": "x\\ \\to\\ x-2",
          "explanation": "Writing $f(x)=\\mathrm{e}^{x}$, the new graph is $f(x-2)$. Replacing $x$ with $x-2$ shifts the graph horizontally, and the direction is the opposite of the sign inside.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the transformation",
          "workingLatex": "\\text{translation}\\ \\begin{pmatrix}2\\\\0\\end{pmatrix}",
          "explanation": "Because the input is decreased by $2$, the curve moves to the right by $2$ units. This is a translation by the vector $\\begin{pmatrix}2\\\\0\\end{pmatrix}$, i.e. right $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain the counterintuitive direction",
          "workingLatex": "\\mathrm{e}^{x-2}=1\\ \\text{when}\\ x=2",
          "explanation": "The value that $\\mathrm{e}^{x}$ took at $x=0$ is now taken at $x=2$, so each feature appears two units further along. This is why a $-2$ inside produces a shift to the right rather than the left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x=0 for the new y-intercept",
          "workingLatex": "x=0:\\quad y=\\mathrm{e}^{0-2}=\\mathrm{e}^{-2}",
          "explanation": "To find where the shifted curve meets the $y$-axis, set $x=0$ in $y=\\mathrm{e}^{x-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=\\mathrm{e}^{-2}\\approx0.135\\ \\Rightarrow\\ (0,\\mathrm{e}^{-2})",
          "explanation": "So the intercept is $(0,\\mathrm{e}^{-2})$, about $(0,0.135)$. Shifting right has dropped the intercept well below the original height of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the asymptote is unchanged",
          "workingLatex": "y=0",
          "explanation": "A purely horizontal translation cannot move a horizontal asymptote, so the curve still levels off towards $y=0$ on the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the overall behaviour",
          "workingLatex": "x\\to-\\infty:\\ y\\to0;\\quad x\\to+\\infty:\\ y\\to\\infty",
          "explanation": "The shape is identical to $y=\\mathrm{e}^{x}$: increasing, positive, decaying to zero on the left and growing without bound on the right, just displaced two units to the right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check a mapped point",
          "workingLatex": "(0,1)\\ \\xrightarrow{\\text{right }2}\\ (2,1);\\quad \\mathrm{e}^{2-2}=1",
          "explanation": "The base point $(0,1)$ should move to $(2,1)$. Testing $x=2$ gives $\\mathrm{e}^{2-2}=\\mathrm{e}^{0}=1$, so the point $(2,1)$ really is on the new curve, confirming the shift.",
          "diagram": null
        }
      ],
      "finalAnswer": "A translation of $2$ units to the right, i.e. by the vector $\\begin{pmatrix}2\\\\0\\end{pmatrix}$; the new $y$-intercept is $(0,\\mathrm{e}^{-2})\\approx(0,0.135)$, with the asymptote still $y=0$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Describe fully the sequence of transformations that maps the graph of $y=\\mathrm{e}^{x}$ onto the graph of $y=3\\mathrm{e}^{x}+1$. State the equation of the horizontal asymptote and the coordinates of the $y$-intercept of $y=3\\mathrm{e}^{x}+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two functions",
          "workingLatex": "y=\\mathrm{e}^{x}\\ \\longrightarrow\\ y=3\\mathrm{e}^{x}+1",
          "explanation": "Both changes are outside the exponential: a multiplier of $3$ and an added $1$. Outside changes act vertically, so we expect a stretch followed by a shift.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the vertical stretch",
          "workingLatex": "y=\\mathrm{e}^{x}\\ \\to\\ y=3\\mathrm{e}^{x}",
          "explanation": "Multiplying the function by $3$ triples every $y$-value: a vertical stretch with scale factor $3$. Doing this first keeps the two steps in the natural order of the expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the vertical translation",
          "workingLatex": "y=3\\mathrm{e}^{x}\\ \\to\\ y=3\\mathrm{e}^{x}+1",
          "explanation": "Adding $1$ then lifts the stretched curve up by $1$ unit, a vertical translation. Together the transformations are: stretch by factor $3$ in the $y$-direction, then translate up $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Track the asymptote through the stretch",
          "workingLatex": "y=0\\ \\to\\ y=0",
          "explanation": "The base asymptote is $y=0$. A vertical stretch measures distance from the $x$-axis, so points on that axis stay fixed and the asymptote is unchanged by the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Track the asymptote through the shift",
          "workingLatex": "y=0\\ \\to\\ y=1",
          "explanation": "The translation up by $1$ then carries the asymptote up with it, giving a final horizontal asymptote of $y=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x=0 for the y-intercept",
          "workingLatex": "x=0:\\quad y=3\\mathrm{e}^{0}+1",
          "explanation": "Setting $x=0$ finds where the transformed curve meets the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=3\\times1+1=4\\ \\Rightarrow\\ (0,4)",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the height is $3(1)+1=4$. The curve crosses the $y$-axis at $(0,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Behaviour as x tends to negative infinity",
          "workingLatex": "x\\to-\\infty:\\ 3\\mathrm{e}^{x}\\to0\\ \\Rightarrow\\ y\\to1",
          "explanation": "For very negative $x$ the exponential term dies away, so $y$ approaches $1$ from above. The curve settles onto the asymptote $y=1$ on the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Behaviour as x tends to positive infinity",
          "workingLatex": "x\\to+\\infty:\\ y\\to\\infty",
          "explanation": "On the right the tripled exponential grows without limit, so the curve rises steeply. It is increasing throughout and always lies above $y=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check the intercept via the steps",
          "workingLatex": "(0,1)\\ \\xrightarrow{\\times3}\\ (0,3)\\ \\xrightarrow{+1}\\ (0,4)",
          "explanation": "Tracing the base intercept confirms the result: $(0,1)$ stretched by $3$ gives $(0,3)$, then raised by $1$ gives $(0,4)$, matching Step 7.",
          "diagram": null
        }
      ],
      "finalAnswer": "A vertical stretch by scale factor $3$, followed by a translation of $1$ unit up (vector $\\begin{pmatrix}0\\\\1\\end{pmatrix}$); horizontal asymptote $y=1$ and $y$-intercept $(0,4)$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Sketch the graph of $y=5-\\mathrm{e}^{x}$. State the $y$-intercept and describe the behaviour of the curve both as $x\\to-\\infty$ and as $x\\to+\\infty$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite in transformation-friendly form",
          "workingLatex": "y=5-\\mathrm{e}^{x}=-\\mathrm{e}^{x}+5",
          "explanation": "Writing the equation as $-\\mathrm{e}^{x}+5$ makes the two effects clear: a minus sign in front of the exponential and a constant added on. We can build the graph from these.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the reflection",
          "workingLatex": "y=\\mathrm{e}^{x}\\ \\to\\ y=-\\mathrm{e}^{x}",
          "explanation": "The factor $-1$ in front reflects the graph in the $x$-axis. The increasing curve above the axis becomes a decreasing curve below it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the vertical translation",
          "workingLatex": "y=-\\mathrm{e}^{x}\\ \\to\\ y=-\\mathrm{e}^{x}+5",
          "explanation": "Adding $5$ raises the reflected curve by $5$ units, a vertical translation. The shape stays the same but the whole graph moves up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x=0 for the y-intercept",
          "workingLatex": "x=0:\\quad y=5-\\mathrm{e}^{0}",
          "explanation": "Setting $x=0$ gives the height at which the curve meets the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=5-1=4\\ \\Rightarrow\\ (0,4)",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the height is $5-1=4$. The curve crosses the $y$-axis at $(0,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the horizontal asymptote",
          "workingLatex": "y=0\\ \\to\\ y=5",
          "explanation": "The reflected exponential $-\\mathrm{e}^{x}$ still approaches $y=0$; lifting it by $5$ moves that guideline to $y=5$. So the horizontal asymptote is $y=5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x tends to negative infinity",
          "workingLatex": "x\\to-\\infty:\\ \\mathrm{e}^{x}\\to0\\ \\Rightarrow\\ y\\to5",
          "explanation": "For very negative $x$, $\\mathrm{e}^{x}$ is tiny, so $y=5-\\mathrm{e}^{x}$ approaches $5$ from just below. The curve nears the line $y=5$ on the far left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Behaviour as x tends to positive infinity",
          "workingLatex": "x\\to+\\infty:\\ \\mathrm{e}^{x}\\to\\infty\\ \\Rightarrow\\ y\\to-\\infty",
          "explanation": "On the right the exponential grows without limit, and subtracting it from $5$ sends $y$ down without bound. The curve plunges steeply as $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the direction and axis crossing",
          "workingLatex": "y=0\\ \\text{when}\\ \\mathrm{e}^{x}=5",
          "explanation": "The graph is decreasing throughout. Starting near $y=5$ and falling to $-\\infty$, it must cross the $x$-axis once, where $\\mathrm{e}^{x}=5$; the exact point needs logarithms and is not required here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check with a point on the left",
          "workingLatex": "x=-2:\\ y=5-\\mathrm{e}^{-2}\\approx5-0.135=4.865",
          "explanation": "At $x=-2$ the value is about $4.865$, only just under $5$. This agrees with the curve pressing up against the asymptote $y=5$ on the left, and with the intercept $(0,4)$ lying below it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Describe the finished sketch",
          "workingLatex": "y=5-\\mathrm{e}^{x}",
          "explanation": "Draw a decreasing curve that flattens towards the dashed line $y=5$ on the left, passes through $(0,4)$, cuts the $x$-axis once, and then falls steeply downward on the right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,4)$ (asymptote $y=5$); a decreasing curve that approaches $y=5$ from below as $x\\to-\\infty$ and falls without bound ($y\\to-\\infty$) as $x\\to+\\infty$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "exponentials",
      "transformations",
      "graph"
    ],
    "questionText": "Sketch the graph of $y=10\\mathrm{e}^{-x}$. State the coordinates of the $y$-intercept, the equation of the horizontal asymptote, and describe the behaviour of the curve as $x\\to+\\infty$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base curve",
          "workingLatex": "y=\\mathrm{e}^{x}",
          "explanation": "Begin with $y=\\mathrm{e}^{x}$. The target combines a reflection and a stretch, so tracking those two effects gives the full graph.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the reflection",
          "workingLatex": "y=\\mathrm{e}^{-x}",
          "explanation": "The $-x$ in the exponent reflects the graph in the $y$-axis, turning growth into decay. This intermediate curve is high on the left and falls towards $y=0$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the vertical stretch",
          "workingLatex": "y=10\\mathrm{e}^{-x}",
          "explanation": "Multiplying by $10$ stretches the decay curve vertically by scale factor $10$, so every height is ten times larger. The decay shape is preserved, just scaled up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x=0 for the y-intercept",
          "workingLatex": "x=0:\\quad y=10\\mathrm{e}^{-0}=10\\mathrm{e}^{0}",
          "explanation": "Setting $x=0$ finds where the curve meets the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=10\\times1=10\\ \\Rightarrow\\ (0,10)",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the height is $10$. The curve crosses the $y$-axis at $(0,10)$, ten times the base intercept $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the horizontal asymptote",
          "workingLatex": "y=0",
          "explanation": "Reflecting and stretching both leave the $x$-axis fixed, since points on it stay at zero height. The horizontal asymptote is therefore still $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x tends to positive infinity",
          "workingLatex": "x\\to+\\infty:\\ \\mathrm{e}^{-x}\\to0\\ \\Rightarrow\\ y\\to0",
          "explanation": "For large positive $x$, $\\mathrm{e}^{-x}$ fades to zero, so even after multiplying by $10$ the curve decays to the $x$-axis on the right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Behaviour as x tends to negative infinity",
          "workingLatex": "x\\to-\\infty:\\ \\mathrm{e}^{-x}\\to\\infty\\ \\Rightarrow\\ y\\to\\infty",
          "explanation": "For very negative $x$, $\\mathrm{e}^{-x}$ grows without limit, so the curve rises steeply on the left. It is decreasing as $x$ increases and always stays positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check with a sample point",
          "workingLatex": "x=1:\\ y=10\\mathrm{e}^{-1}\\approx3.68",
          "explanation": "At $x=1$ the value is about $3.68$, well down from the intercept of $10$. This steady fall confirms exponential decay towards the asymptote $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Describe the finished sketch",
          "workingLatex": "y=10\\mathrm{e}^{-x}",
          "explanation": "Draw a decreasing decay curve that is high on the left, passes through $(0,10)$, and flattens towards the $x$-axis on the right without touching it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,10)$; horizontal asymptote $y=0$; a decreasing exponential-decay curve that approaches the $x$-axis as $x\\to+\\infty$ and rises without bound as $x\\to-\\infty$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "derivative"
    ],
    "questionText": "For the curve $y=\\mathrm{e}^{x}$, write down $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ and hence find the gradient of the curve at $x=0$ and at $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=\\mathrm{e}^{x}",
          "explanation": "We start from the standard exponential curve. Its defining feature is a very simple gradient rule, which we use straight away.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the derivative of the exponential",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\mathrm{e}^{x}\\right)=\\mathrm{e}^{x}",
          "explanation": "The exponential function is unique because differentiating $\\mathrm{e}^{x}$ gives $\\mathrm{e}^{x}$ back again. In other words the gradient at any point equals the height of the curve there.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the derivative of the curve",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\mathrm{e}^{x}",
          "explanation": "Applying that rule to our curve, the gradient function is simply $\\mathrm{e}^{x}$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 0",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=\\mathrm{e}^{0}",
          "explanation": "To find the gradient at a particular point we put that $x$-value into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the gradient at x = 0",
          "workingLatex": "\\mathrm{e}^{0}=1",
          "explanation": "Any nonzero base raised to the power $0$ equals $1$, so the curve has gradient exactly $1$ where it crosses the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=1}=\\mathrm{e}^{1}",
          "explanation": "We repeat the process at $x=1$, again substituting into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the gradient at x = 1",
          "workingLatex": "\\mathrm{e}^{1}=\\mathrm{e}",
          "explanation": "$\\mathrm{e}^{1}$ is just $\\mathrm{e}$, so the exact gradient at $x=1$ is $\\mathrm{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Give a decimal check",
          "workingLatex": "\\mathrm{e}\\approx 2.72",
          "explanation": "Writing $\\mathrm{e}$ as a decimal to 3 significant figures gives about $2.72$, which is a sensible size for the steepness of the curve at that point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the gradient property",
          "workingLatex": "\\text{gradient}=y\\text{-value}:\\ 1,\\ \\mathrm{e}",
          "explanation": "Because the gradient always equals the $y$-coordinate, and the heights are $\\mathrm{e}^{0}=1$ and $\\mathrm{e}^{1}=\\mathrm{e}$, the two gradients match the heights exactly, confirming the answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\mathrm{e}^{x}$; the gradient is $1$ at $x=0$ and $\\mathrm{e}\\approx 2.72$ at $x=1$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "chain-rule"
    ],
    "questionText": "For the curve $y=\\mathrm{e}^{2x}$, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ and hence the gradient of the curve at $x=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=\\mathrm{e}^{2x}",
          "explanation": "Here the exponent is $2x$ rather than just $x$, so we need the rule for differentiating $\\mathrm{e}^{kx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for e to the k x",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\mathrm{e}^{kx}\\right)=k\\,\\mathrm{e}^{kx}",
          "explanation": "Differentiating $\\mathrm{e}^{kx}$ brings the constant $k$ down as a multiplier while the exponential itself is unchanged. This comes from the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the value of k",
          "workingLatex": "k=2",
          "explanation": "Comparing $\\mathrm{e}^{2x}$ with $\\mathrm{e}^{kx}$ shows that the constant multiplying $x$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the derivative",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2\\,\\mathrm{e}^{2x}",
          "explanation": "Putting $k=2$ into the rule gives the gradient function: twice the original exponential.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 0",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=2\\,\\mathrm{e}^{2(0)}",
          "explanation": "To get the gradient at $x=0$ we substitute $x=0$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the exponential",
          "workingLatex": "\\mathrm{e}^{0}=1",
          "explanation": "The exponent becomes $2\\times0=0$, and $\\mathrm{e}^{0}=1$, which simplifies the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient",
          "workingLatex": "2\\times 1=2",
          "explanation": "Multiplying the constant $2$ by the height $1$ gives a gradient of $2$ at that point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Give a decimal check",
          "workingLatex": "2\\,\\mathrm{e}^{0}=2.00",
          "explanation": "The exact gradient $2$ written to 3 significant figures is $2.00$; the exponential evaluated to a whole number so there is nothing to round, a quick reassurance the size is right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the gradient property",
          "workingLatex": "\\text{gradient}=k\\times y=2\\times 1=2",
          "explanation": "The gradient of $y=\\mathrm{e}^{kx}$ is $k$ times the height. At $x=0$ the height is $1$, so $2\\times1=2$ confirms the result exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2\\,\\mathrm{e}^{2x}$; the gradient at $x=0$ is $2$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "chain-rule"
    ],
    "questionText": "For the curve $y=\\mathrm{e}^{3x}$, find the gradient of the curve at $x=1$. Leave your answer in terms of $\\mathrm{e}$ and then give it to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=\\mathrm{e}^{3x}",
          "explanation": "The exponent is $3x$, so we again use the rule for differentiating $\\mathrm{e}^{kx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for e to the k x",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\mathrm{e}^{kx}\\right)=k\\,\\mathrm{e}^{kx}",
          "explanation": "The constant multiplying $x$ comes down as a factor when we differentiate, leaving the exponential unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the value of k",
          "workingLatex": "k=3",
          "explanation": "Matching $\\mathrm{e}^{3x}$ with $\\mathrm{e}^{kx}$ gives $k=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the derivative",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=3\\,\\mathrm{e}^{3x}",
          "explanation": "With $k=3$, the gradient function is three times the original exponential.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 1",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=1}=3\\,\\mathrm{e}^{3(1)}",
          "explanation": "We put $x=1$ into the gradient function to find the steepness at that point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the exponent",
          "workingLatex": "3\\,\\mathrm{e}^{3(1)}=3\\,\\mathrm{e}^{3}",
          "explanation": "The exponent becomes $3\\times1=3$, giving the exact gradient $3\\mathrm{e}^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate e cubed",
          "workingLatex": "\\mathrm{e}^{3}\\approx 20.0855",
          "explanation": "Using a calculator, $\\mathrm{e}^{3}$ is about $20.0855$, which we need for the decimal form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply out",
          "workingLatex": "3\\times 20.0855=60.2566\\ldots",
          "explanation": "Multiplying by the factor $3$ gives roughly $60.26$ before rounding.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to 3 significant figures",
          "workingLatex": "3\\,\\mathrm{e}^{3}\\approx 60.3",
          "explanation": "Rounding $60.2566\\ldots$ to 3 significant figures gives $60.3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify using the gradient property",
          "workingLatex": "\\text{gradient}=k\\times y=3\\times \\mathrm{e}^{3}",
          "explanation": "At $x=1$ the height is $y=\\mathrm{e}^{3}$, and the gradient is $k=3$ times that height, which agrees with $3\\mathrm{e}^{3}$ and confirms the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient at $x=1$ is $3\\mathrm{e}^{3}\\approx 60.3$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "derivative"
    ],
    "questionText": "For the curve $y=5\\mathrm{e}^{x}$, find the gradient of the curve at $x=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=5\\mathrm{e}^{x}",
          "explanation": "This is the exponential curve multiplied by the constant $5$, which stretches it vertically but keeps the same shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the constant multiple rule",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(A\\,\\mathrm{e}^{x}\\right)=A\\,\\mathrm{e}^{x}",
          "explanation": "A constant factor stays in front when we differentiate, and since $\\mathrm{e}^{x}$ differentiates to itself, the whole expression is unchanged apart from keeping the $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the constant multiple",
          "workingLatex": "A=5",
          "explanation": "Comparing $5\\mathrm{e}^{x}$ with $A\\mathrm{e}^{x}$ shows the constant in front is $A=5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the derivative",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=5\\mathrm{e}^{x}",
          "explanation": "With $A=5$, the gradient function is again $5\\mathrm{e}^{x}$, identical to the original curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 0",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=5\\mathrm{e}^{0}",
          "explanation": "To find the gradient where the curve meets the $y$-axis, substitute $x=0$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the exponential",
          "workingLatex": "\\mathrm{e}^{0}=1",
          "explanation": "As before, $\\mathrm{e}^{0}=1$, which leaves a simple multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient",
          "workingLatex": "5\\times 1=5",
          "explanation": "Multiplying the constant $5$ by the height $1$ gives a gradient of $5$ at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Give a decimal check",
          "workingLatex": "5\\mathrm{e}^{0}=5.00",
          "explanation": "The exact gradient $5$ is $5.00$ to 3 significant figures; the exponential gave a whole number so nothing needs rounding.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the gradient property",
          "workingLatex": "y(0)=5\\mathrm{e}^{0}=5=\\text{gradient}",
          "explanation": "For $y=A\\mathrm{e}^{x}$ the gradient equals the height. At $x=0$ the height is $5$, so the gradient is also $5$, confirming the result exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient of $y=5\\mathrm{e}^{x}$ at $x=0$ is $5$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "chain-rule"
    ],
    "questionText": "For the curve $y=\\mathrm{e}^{-x}$, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ and hence show that the gradient at $x=0$ is $-1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=\\mathrm{e}^{-x}",
          "explanation": "Here the exponent is $-x$, so we treat this as $\\mathrm{e}^{kx}$ with a negative value of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for e to the k x",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\mathrm{e}^{kx}\\right)=k\\,\\mathrm{e}^{kx}",
          "explanation": "The constant $k$ multiplying $x$ comes down as a factor when we differentiate. This works for negative $k$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the value of k",
          "workingLatex": "k=-1",
          "explanation": "Writing $\\mathrm{e}^{-x}$ as $\\mathrm{e}^{(-1)x}$ shows the constant is $k=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the derivative",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-\\mathrm{e}^{-x}",
          "explanation": "Putting $k=-1$ into the rule gives $-1\\times\\mathrm{e}^{-x}$, which is $-\\mathrm{e}^{-x}$. The minus sign tells us the curve is always sloping downwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 0",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=-\\mathrm{e}^{0}",
          "explanation": "To find the gradient at $x=0$ we substitute $x=0$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the exponential",
          "workingLatex": "\\mathrm{e}^{0}=1",
          "explanation": "The exponent is $-0=0$, and $\\mathrm{e}^{0}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient",
          "workingLatex": "-1\\times 1=-1",
          "explanation": "Multiplying the height $1$ by the factor $-1$ gives a gradient of $-1$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Give a decimal check",
          "workingLatex": "-\\mathrm{e}^{0}=-1.00",
          "explanation": "The exact gradient $-1$ is $-1.00$ to 3 significant figures; the negative sign confirms the curve slopes downwards at this point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the gradient property",
          "workingLatex": "\\text{gradient}=k\\times y=-1\\times 1=-1",
          "explanation": "The gradient equals $k$ times the height, and at $x=0$ the height is $1$, so $-1\\times1=-1$ confirms the negative slope exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-\\mathrm{e}^{-x}$; the gradient at $x=0$ is $-1$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "chain-rule"
    ],
    "questionText": "For the curve $y=4\\mathrm{e}^{2x}$, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ and hence the gradient of the curve at $x=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=4\\mathrm{e}^{2x}",
          "explanation": "This combines a constant multiple $4$ with an exponent $2x$, so we use the general rule for $A\\mathrm{e}^{kx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the general rule",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(A\\,\\mathrm{e}^{kx}\\right)=Ak\\,\\mathrm{e}^{kx}",
          "explanation": "The constant $A$ stays in front, and differentiating $\\mathrm{e}^{kx}$ brings down a factor of $k$, so overall the coefficient becomes $Ak$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify A and k",
          "workingLatex": "A=4,\\quad k=2",
          "explanation": "Comparing $4\\mathrm{e}^{2x}$ with $A\\mathrm{e}^{kx}$ gives the constant $A=4$ and the exponent factor $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the coefficient A k",
          "workingLatex": "Ak=4\\times 2=8",
          "explanation": "The new coefficient in front of the exponential is the product $Ak=8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the derivative",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=8\\mathrm{e}^{2x}",
          "explanation": "So the gradient function is $8\\mathrm{e}^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 0",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=8\\mathrm{e}^{2(0)}",
          "explanation": "To find the gradient at $x=0$, substitute $x=0$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the exponential",
          "workingLatex": "\\mathrm{e}^{0}=1",
          "explanation": "The exponent is $2\\times0=0$, and $\\mathrm{e}^{0}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the gradient",
          "workingLatex": "8\\times 1=8",
          "explanation": "Multiplying the coefficient $8$ by the height $1$ gives a gradient of $8$ at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the gradient property",
          "workingLatex": "\\text{gradient}=k\\times y=2\\times 4=8",
          "explanation": "The gradient of $y=A\\mathrm{e}^{kx}$ is $k$ times the height. At $x=0$ the height is $y=4\\mathrm{e}^{0}=4$, so $2\\times4=8$ confirms the answer exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=8\\mathrm{e}^{2x}$; the gradient at $x=0$ is $8$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "exponentials",
      "gradient",
      "chain-rule"
    ],
    "questionText": "Show that for the curve $y=\\mathrm{e}^{kx}$, where $k$ is a constant, the gradient at any point equals $k$ times the $y$-coordinate at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=\\mathrm{e}^{kx}",
          "explanation": "We keep $k$ as a general constant so the result applies to every curve of this exponential family at once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the derivative rule",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\mathrm{e}^{kx}\\right)=k\\,\\mathrm{e}^{kx}",
          "explanation": "By the chain rule, differentiating $\\mathrm{e}^{kx}$ brings the constant $k$ out in front while leaving the exponential itself unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the gradient function",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=k\\,\\mathrm{e}^{kx}",
          "explanation": "So at any $x$ the gradient of the curve is $k\\,\\mathrm{e}^{kx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the y-coordinate",
          "workingLatex": "y=\\mathrm{e}^{kx}",
          "explanation": "The $y$-coordinate of a point on the curve is exactly $\\mathrm{e}^{kx}$, the value of the function there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute y into the gradient",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=k\\,\\mathrm{e}^{kx}=k\\times\\left(\\mathrm{e}^{kx}\\right)",
          "explanation": "We separate the factor $k$ from the exponential so we can recognise the exponential as the $y$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Replace the exponential by y",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=k\\,y",
          "explanation": "Since $\\mathrm{e}^{kx}=y$, the gradient becomes $k$ multiplied by the $y$-coordinate, which is exactly what we set out to show.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=k\\,y\\quad\\text{for all }x",
          "explanation": "This holds for every point on the curve, so the gradient is always $k$ times the height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the property",
          "workingLatex": "\\text{rate of change}\\propto y",
          "explanation": "Saying the gradient is proportional to $y$ means the curve grows (or decays if $k<0$) at a rate set by its current height. This is exactly why exponentials model population growth, radioactive decay and compound interest.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with a numerical check",
          "workingLatex": "k=2,\\ x=0:\\ \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2\\mathrm{e}^{0}=2,\\ \\ k\\,y=2\\times 1=2",
          "explanation": "Testing $k=2$ at $x=0$ gives gradient $2$ and $k\\,y=2\\times1=2$; the two agree, confirming the general result on a concrete example.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=k\\,\\mathrm{e}^{kx}=k\\,y$, the gradient at any point equals $k$ times the $y$-coordinate."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "chain-rule"
    ],
    "questionText": "The point $(0,3)$ lies on the curve $y=3\\mathrm{e}^{2x}$. Find the gradient of the curve at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=3\\mathrm{e}^{2x}",
          "explanation": "This has both a constant multiple $3$ and an exponent $2x$, so we use the rule for $A\\mathrm{e}^{kx}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the point lies on the curve",
          "workingLatex": "y(0)=3\\mathrm{e}^{2(0)}=3\\mathrm{e}^{0}=3",
          "explanation": "Substituting $x=0$ gives $y=3$, so the point $(0,3)$ really does sit on the curve. This confirms we are working at the right place.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the general rule",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(A\\,\\mathrm{e}^{kx}\\right)=Ak\\,\\mathrm{e}^{kx}",
          "explanation": "The constant $A$ stays in front and differentiating $\\mathrm{e}^{kx}$ brings down a factor of $k$, giving a coefficient $Ak$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify A and k",
          "workingLatex": "A=3,\\quad k=2",
          "explanation": "Comparing $3\\mathrm{e}^{2x}$ with $A\\mathrm{e}^{kx}$ gives $A=3$ and $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the coefficient A k",
          "workingLatex": "Ak=3\\times 2=6",
          "explanation": "Differentiating brings the factor $k$ down beside the constant $A$, so the new coefficient in front of the exponential is $Ak=6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the derivative",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=6\\mathrm{e}^{2x}",
          "explanation": "With coefficient $6$, the gradient function is $6\\mathrm{e}^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 0",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=6\\mathrm{e}^{2(0)}=6\\mathrm{e}^{0}",
          "explanation": "The point $(0,3)$ has $x=0$, so we substitute $x=0$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the gradient",
          "workingLatex": "6\\times 1=6",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the gradient at the point is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the gradient property",
          "workingLatex": "\\text{gradient}=k\\times y=2\\times 3=6",
          "explanation": "The gradient equals $k$ times the height, and the height here is $3$, so $2\\times3=6$ confirms the result exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient of the curve at $(0,3)$ is $6$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "rate-of-change"
    ],
    "questionText": "For the curve $y=\\mathrm{e}^{0.5x}$, find the gradient at $x=0$ and interpret this value as a rate of change.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "y=\\mathrm{e}^{0.5x}",
          "explanation": "The exponent is $0.5x$, so this is $\\mathrm{e}^{kx}$ with the fractional constant $k=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for e to the k x",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\mathrm{e}^{kx}\\right)=k\\,\\mathrm{e}^{kx}",
          "explanation": "Differentiating $\\mathrm{e}^{kx}$ brings the constant $k$ down as a multiplier, and this works for fractional $k$ too.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the value of k",
          "workingLatex": "k=0.5",
          "explanation": "Matching $\\mathrm{e}^{0.5x}$ with $\\mathrm{e}^{kx}$ gives $k=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the derivative",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=0.5\\,\\mathrm{e}^{0.5x}",
          "explanation": "Putting $k=0.5$ into the rule gives the gradient function: half of the original exponential.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 0",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=0.5\\,\\mathrm{e}^{0.5(0)}",
          "explanation": "To find the gradient at the $y$-axis we substitute $x=0$ into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the exponential",
          "workingLatex": "\\mathrm{e}^{0}=1",
          "explanation": "The exponent is $0.5\\times0=0$, and $\\mathrm{e}^{0}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient",
          "workingLatex": "0.5\\times 1=0.5",
          "explanation": "Multiplying the factor $0.5$ by the height $1$ gives a gradient of $0.5$ at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret as a rate of change",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=0.5",
          "explanation": "A gradient of $0.5$ means that at $x=0$ the value of $y$ is increasing at $0.5$ units for every $1$ unit increase in $x$; the quantity is growing, but only half as fast as its current height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the gradient property",
          "workingLatex": "\\text{gradient}=k\\times y=0.5\\times 1=0.5",
          "explanation": "At $x=0$ the height is $y=\\mathrm{e}^{0}=1$, and $k$ times the height is $0.5\\times1=0.5$, which matches and confirms the rate of change.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient at $x=0$ is $0.5$, meaning $y$ is increasing at a rate of $0.5$ units per unit increase in $x$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "index-laws",
      "solving"
    ],
    "questionText": "Solve the equation $2^{x+1}=16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the equation",
          "workingLatex": "2^{x+1}=16",
          "explanation": "The unknown $x$ sits in the exponent. When the unknown is an index, the cleanest approach is to make both sides powers of the same base so we can compare the exponents directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a common base",
          "workingLatex": "\\text{base } 2",
          "explanation": "The left side is already a power of $2$, so if we can write $16$ as a power of $2$ as well, both sides will share the same base and become easy to compare.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write 16 as a power of 2",
          "workingLatex": "16=2^{4}",
          "explanation": "Doubling repeatedly gives $2,4,8,16$, which is four doublings, so $16=2^{4}$. Rewriting numbers as powers of the base is what lets us equate indices.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation",
          "workingLatex": "2^{x+1}=2^{4}",
          "explanation": "Both sides are now powers of the single base $2$, so the equation is in the ideal form for comparing exponents.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the equating-indices rule",
          "workingLatex": "a^{f}=a^{g}\\Rightarrow f=g \\quad (a>0,\\,a\\neq1)",
          "explanation": "An exponential with a fixed base is one-to-one, so equal outputs force equal inputs. This means we may simply set the two exponents equal to each other.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equate the exponents",
          "workingLatex": "x+1=4",
          "explanation": "Applying the rule to $2^{x+1}=2^{4}$ turns the exponential equation into a straightforward linear one in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x=4-1=3",
          "explanation": "Subtracting $1$ from both sides isolates $x$, giving the candidate solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the solution back",
          "workingLatex": "2^{3+1}=2^{4}",
          "explanation": "Checking the answer in the original equation guards against slips, since the exponent must genuinely produce $16$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the check",
          "workingLatex": "2^{4}=16",
          "explanation": "The left side equals $16$, matching the right side of the original equation, so the solution is confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "x=3",
          "explanation": "The single value of $x$ that satisfies the equation is $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "index-laws",
      "solving"
    ],
    "questionText": "Solve the equation $9^{x}=27$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the equation",
          "workingLatex": "9^{x}=27",
          "explanation": "The unknown is an index, so the strategy is to write both $9$ and $27$ as powers of a shared base and then compare the exponents.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the common base",
          "workingLatex": "9=3^{2}, \\quad 27=3^{3}",
          "explanation": "Both $9$ and $27$ are powers of $3$, so base $3$ is the natural common base that will let us equate indices.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the left side",
          "workingLatex": "9^{x}=(3^{2})^{x}",
          "explanation": "Replacing $9$ with $3^{2}$ prepares the left side for the power-of-a-power law.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the power law",
          "workingLatex": "(3^{2})^{x}=3^{2x}",
          "explanation": "The rule $(a^{m})^{n}=a^{mn}$ says we multiply the indices, so the two and the $x$ combine into $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the equation",
          "workingLatex": "3^{2x}=3^{3}",
          "explanation": "Both sides are now powers of $3$, which is exactly the form needed to compare exponents.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the equating-indices rule",
          "workingLatex": "a^{f}=a^{g}\\Rightarrow f=g \\quad (a>0,\\,a\\neq1)",
          "explanation": "Because an exponential of a fixed base is one-to-one, equal powers must have equal exponents.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the exponents",
          "workingLatex": "2x=3",
          "explanation": "Setting the exponents equal turns the problem into a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x=\\frac{3}{2}",
          "explanation": "Dividing both sides by $2$ isolates $x$; a fractional answer is perfectly acceptable here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to check",
          "workingLatex": "9^{3/2}=(3^{2})^{3/2}=3^{3}",
          "explanation": "Putting $x=\\tfrac{3}{2}$ into the original expression uses the power law again, giving $3^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the value",
          "workingLatex": "3^{3}=27",
          "explanation": "The result equals $27$, matching the right-hand side, so the solution is verified.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "x=\\frac{3}{2}",
          "explanation": "The value of $x$ that satisfies the equation is $\\tfrac{3}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\dfrac{3}{2}$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "index-laws",
      "solving"
    ],
    "questionText": "Solve the equation $4^{x}=2^{x+3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the equation",
          "workingLatex": "4^{x}=2^{x+3}",
          "explanation": "The unknown appears in both exponents. Writing each side as a power of the same base will let us compare the indices directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the common base",
          "workingLatex": "4=2^{2}",
          "explanation": "The right side is already a power of $2$, and $4$ is also a power of $2$, so base $2$ unifies both sides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the left side",
          "workingLatex": "4^{x}=(2^{2})^{x}",
          "explanation": "Substituting $4=2^{2}$ sets up the left side for the power-of-a-power law.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the power law",
          "workingLatex": "(2^{2})^{x}=2^{2x}",
          "explanation": "Using $(a^{m})^{n}=a^{mn}$, the indices multiply to give $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the equation",
          "workingLatex": "2^{2x}=2^{x+3}",
          "explanation": "Both sides are now single powers of $2$, ready for equating exponents.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the equating-indices rule",
          "workingLatex": "a^{f}=a^{g}\\Rightarrow f=g \\quad (a>0,\\,a\\neq1)",
          "explanation": "A fixed-base exponential is one-to-one, so equal powers force the exponents to be equal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the exponents",
          "workingLatex": "2x=x+3",
          "explanation": "Setting the exponents equal produces a linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "2x-x=3 \\Rightarrow x=3",
          "explanation": "Subtracting $x$ from both sides collects the $x$ terms and isolates the unknown.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to check",
          "workingLatex": "4^{3}=64, \\quad 2^{3+3}=2^{6}=64",
          "explanation": "Both sides of the original equation evaluate to $64$ when $x=3$, so the two expressions match.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "x=3",
          "explanation": "The value of $x$ satisfying the equation is $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "index-laws",
      "solving"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{2x}=\\mathrm{e}^{x+3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the equation",
          "workingLatex": "\\mathrm{e}^{2x}=\\mathrm{e}^{x+3}",
          "explanation": "Both sides are already powers of the same base $\\mathrm{e}$, which is the ideal situation for equating exponents straight away.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the common base",
          "workingLatex": "\\text{base } \\mathrm{e}",
          "explanation": "The constant $\\mathrm{e}\\approx2.718$ is positive and not equal to $1$, so the exponential function $\\mathrm{e}^{x}$ is one-to-one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the equating-indices rule",
          "workingLatex": "\\mathrm{e}^{f}=\\mathrm{e}^{g}\\Rightarrow f=g",
          "explanation": "Since $\\mathrm{e}^{x}$ is one-to-one, two equal exponentials must have equal exponents.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equate the exponents",
          "workingLatex": "2x=x+3",
          "explanation": "Applying the rule converts the exponential equation into a simple linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Move the x terms together",
          "workingLatex": "2x-x=3",
          "explanation": "Subtracting $x$ from both sides gathers the unknown on one side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "x=3",
          "explanation": "Combining $2x-x$ gives $x$, so the solution reads off directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Prepare the check",
          "workingLatex": "\\text{substitute } x=3",
          "explanation": "Substituting the candidate back into both exponents confirms the two sides agree.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the left exponent",
          "workingLatex": "2x=2(3)=6",
          "explanation": "The left-hand exponent becomes $6$, so the left side is $\\mathrm{e}^{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the right exponent",
          "workingLatex": "x+3=3+3=6",
          "explanation": "The right-hand exponent is also $6$, so the right side is $\\mathrm{e}^{6}$ too.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the match",
          "workingLatex": "\\mathrm{e}^{6}=\\mathrm{e}^{6}",
          "explanation": "Both sides equal $\\mathrm{e}^{6}$, so the solution is verified.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "x=3",
          "explanation": "The value of $x$ that satisfies the equation is $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=3$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "solving",
      "index-laws"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{x^{2}}=\\mathrm{e}^{3x-2}$, giving all solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the equation",
          "workingLatex": "\\mathrm{e}^{x^{2}}=\\mathrm{e}^{3x-2}",
          "explanation": "Both sides share the base $\\mathrm{e}$, so we can compare exponents. Notice one exponent is quadratic, which hints there may be more than one solution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the equating-indices rule",
          "workingLatex": "\\mathrm{e}^{f}=\\mathrm{e}^{g}\\Rightarrow f=g",
          "explanation": "Because $\\mathrm{e}^{x}$ is one-to-one, equal exponentials force their exponents to be equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the exponents",
          "workingLatex": "x^{2}=3x-2",
          "explanation": "Setting the exponents equal turns the exponential equation into a quadratic equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to standard form",
          "workingLatex": "x^{2}-3x+2=0",
          "explanation": "Moving every term to one side gives the usual $ax^{2}+bx+c=0$ layout, which is ready for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the quadratic",
          "workingLatex": "(x-1)(x-2)=0",
          "explanation": "We need two numbers that multiply to $+2$ and add to $-3$; these are $-1$ and $-2$, giving the bracket factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the zero-product rule",
          "workingLatex": "x-1=0 \\quad \\text{or} \\quad x-2=0",
          "explanation": "A product is zero only when one of its factors is zero, so each bracket gives a possible solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the solutions",
          "workingLatex": "x=1 \\quad \\text{or} \\quad x=2",
          "explanation": "Solving each simple equation gives the two candidate values of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the first solution",
          "workingLatex": "x=1:\\; x^{2}=1,\\; 3x-2=1",
          "explanation": "Both exponents equal $1$ when $x=1$, so $\\mathrm{e}^{1}=\\mathrm{e}^{1}$ and the first solution works.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the second solution",
          "workingLatex": "x=2:\\; x^{2}=4,\\; 3x-2=4",
          "explanation": "Both exponents equal $4$ when $x=2$, so $\\mathrm{e}^{4}=\\mathrm{e}^{4}$ and the second solution works too.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "x=1 \\quad \\text{or} \\quad x=2",
          "explanation": "Both values satisfy the original equation, so the solution set contains two numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=1$ or $x=2$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "exponentials",
      "index-laws"
    ],
    "questionText": "Simplify $\\mathrm{e}^{5}\\times\\mathrm{e}^{-2}$ and $(\\mathrm{e}^{x})^{3}$, using the laws of indices.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the first expression",
          "workingLatex": "\\mathrm{e}^{5}\\times\\mathrm{e}^{-2}",
          "explanation": "This is a product of two powers of the same base $\\mathrm{e}$, so the multiplication law of indices applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the multiplication law",
          "workingLatex": "a^{m}\\times a^{n}=a^{m+n}",
          "explanation": "When multiplying powers of the same base we add the exponents, because we are simply combining repeated factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the exponents",
          "workingLatex": "5+(-2)=3",
          "explanation": "Adding the indices $5$ and $-2$ gives $3$; the negative index just subtracts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the simplified first result",
          "workingLatex": "\\mathrm{e}^{5}\\times\\mathrm{e}^{-2}=\\mathrm{e}^{3}",
          "explanation": "The product collapses to a single power of $\\mathrm{e}$ with exponent $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check via the negative-index meaning",
          "workingLatex": "\\mathrm{e}^{-2}=\\frac{1}{\\mathrm{e}^{2}} \\Rightarrow \\frac{\\mathrm{e}^{5}}{\\mathrm{e}^{2}}=\\mathrm{e}^{5-2}=\\mathrm{e}^{3}",
          "explanation": "Interpreting $\\mathrm{e}^{-2}$ as a reciprocal turns the product into a division, and the quotient law confirms the answer $\\mathrm{e}^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Look at the second expression",
          "workingLatex": "(\\mathrm{e}^{x})^{3}",
          "explanation": "This is a power raised to another power, so the power-of-a-power law is the right tool.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the power law",
          "workingLatex": "(a^{m})^{n}=a^{mn}",
          "explanation": "Raising a power to a power multiplies the exponents, since the inner power is repeated $n$ times.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the exponents",
          "workingLatex": "x\\times3=3x",
          "explanation": "The inner exponent $x$ is multiplied by the outer exponent $3$ to give $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the simplified second result",
          "workingLatex": "(\\mathrm{e}^{x})^{3}=\\mathrm{e}^{3x}",
          "explanation": "The expression simplifies to a single power of $\\mathrm{e}$ with exponent $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify by writing out the product",
          "workingLatex": "\\mathrm{e}^{x}\\times\\mathrm{e}^{x}\\times\\mathrm{e}^{x}=\\mathrm{e}^{x+x+x}=\\mathrm{e}^{3x}",
          "explanation": "Expanding the cube as three factors and adding the exponents recovers $\\mathrm{e}^{3x}$, confirming the simplification.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathrm{e}^{5}\\times\\mathrm{e}^{-2}=\\mathrm{e}^{3}$ and $(\\mathrm{e}^{x})^{3}=\\mathrm{e}^{3x}$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "exponentials",
      "index-laws",
      "solving"
    ],
    "questionText": "Solve the equation $8^{x}=4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the equation",
          "workingLatex": "8^{x}=4",
          "explanation": "The unknown is an index, so we express both $8$ and $4$ as powers of a common base and then compare exponents.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the common base",
          "workingLatex": "8=2^{3}, \\quad 4=2^{2}",
          "explanation": "Both numbers are powers of $2$, so base $2$ is the natural choice for equating indices.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the left side",
          "workingLatex": "8^{x}=(2^{3})^{x}",
          "explanation": "Replacing $8$ with $2^{3}$ prepares the left side for the power-of-a-power law.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the power law",
          "workingLatex": "(2^{3})^{x}=2^{3x}",
          "explanation": "Using $(a^{m})^{n}=a^{mn}$, the exponents $3$ and $x$ multiply to give $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the equation",
          "workingLatex": "2^{3x}=2^{2}",
          "explanation": "Both sides are now single powers of $2$, ready for comparison of exponents.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the equating-indices rule",
          "workingLatex": "a^{f}=a^{g}\\Rightarrow f=g \\quad (a>0,\\,a\\neq1)",
          "explanation": "A fixed-base exponential is one-to-one, so equal powers must have equal exponents.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the exponents",
          "workingLatex": "3x=2",
          "explanation": "Setting the exponents equal gives a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x=\\frac{2}{3}",
          "explanation": "Dividing both sides by $3$ isolates $x$; the answer is a fraction, which is expected here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to check",
          "workingLatex": "8^{2/3}=(2^{3})^{2/3}=2^{2}",
          "explanation": "Putting $x=\\tfrac{2}{3}$ into the original expression and applying the power law gives $2^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the value",
          "workingLatex": "2^{2}=4",
          "explanation": "The result equals $4$, matching the right-hand side, so the solution is verified.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "x=\\frac{2}{3}",
          "explanation": "The value of $x$ satisfying the equation is $\\tfrac{2}{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\dfrac{2}{3}$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "index-laws",
      "solving"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{3x}\\times\\mathrm{e}^{-x}=\\mathrm{e}^{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the equation",
          "workingLatex": "\\mathrm{e}^{3x}\\times\\mathrm{e}^{-x}=\\mathrm{e}^{4}",
          "explanation": "The left side is a product of two powers of $\\mathrm{e}$. Combining them into a single power first will let us equate exponents.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the multiplication law",
          "workingLatex": "\\mathrm{e}^{a}\\times\\mathrm{e}^{b}=\\mathrm{e}^{a+b}",
          "explanation": "Multiplying powers of the same base means adding the exponents, so the product on the left becomes one power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the exponents on the left",
          "workingLatex": "3x+(-x)=2x",
          "explanation": "Adding the exponents $3x$ and $-x$ gives $2x$, since the terms combine like ordinary algebra.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the left side",
          "workingLatex": "\\mathrm{e}^{3x}\\times\\mathrm{e}^{-x}=\\mathrm{e}^{2x}",
          "explanation": "The product simplifies to a single power of $\\mathrm{e}$ with exponent $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the equation",
          "workingLatex": "\\mathrm{e}^{2x}=\\mathrm{e}^{4}",
          "explanation": "Now both sides are single powers of $\\mathrm{e}$, which is the form needed to compare exponents.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the equating-indices rule",
          "workingLatex": "\\mathrm{e}^{f}=\\mathrm{e}^{g}\\Rightarrow f=g",
          "explanation": "Because $\\mathrm{e}^{x}$ is one-to-one, the equal exponentials force the exponents to be equal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the exponents",
          "workingLatex": "2x=4",
          "explanation": "Setting the two exponents equal gives a simple linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x=2",
          "explanation": "Dividing both sides by $2$ isolates $x$ and gives the candidate solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to check",
          "workingLatex": "\\mathrm{e}^{3(2)}\\times\\mathrm{e}^{-2}=\\mathrm{e}^{6}\\times\\mathrm{e}^{-2}",
          "explanation": "Putting $x=2$ into the original left side gives a product we can recombine to test the answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the check",
          "workingLatex": "\\mathrm{e}^{6}\\times\\mathrm{e}^{-2}=\\mathrm{e}^{6-2}=\\mathrm{e}^{4}",
          "explanation": "Adding the exponents gives $\\mathrm{e}^{4}$, matching the right-hand side, so the solution is verified.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "x=2",
          "explanation": "The value of $x$ that satisfies the equation is $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=2$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "solving",
      "index-laws"
    ],
    "questionText": "Solve the equation $2^{2x}-5\\cdot2^{x}+4=0$, giving all solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the equation",
          "workingLatex": "2^{2x}-5\\cdot2^{x}+4=0",
          "explanation": "This has both $2^{2x}$ and $2^{x}$ in it. Spotting that $2^{2x}$ is the square of $2^{x}$ suggests a hidden quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the squared term",
          "workingLatex": "2^{2x}=(2^{x})^{2}",
          "explanation": "By the power law $2^{2x}=(2^{x})^{2}$, so the whole equation is quadratic in the quantity $2^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Introduce a substitution",
          "workingLatex": "\\text{let } u=2^{x}",
          "explanation": "Replacing $2^{x}$ by a single letter $u$ turns the expression into a familiar quadratic that is easier to handle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the quadratic in u",
          "workingLatex": "u^{2}-5u+4=0",
          "explanation": "Substituting $u=2^{x}$ and $(2^{x})^{2}=u^{2}$ gives a standard quadratic in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the quadratic",
          "workingLatex": "(u-1)(u-4)=0",
          "explanation": "We need two numbers multiplying to $+4$ and adding to $-5$; these are $-1$ and $-4$, giving the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for u",
          "workingLatex": "u=1 \\quad \\text{or} \\quad u=4",
          "explanation": "By the zero-product rule each bracket gives a value of $u$ to consider.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Return to the first case",
          "workingLatex": "2^{x}=1",
          "explanation": "Undoing the substitution for $u=1$ gives an exponential equation to solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the first case",
          "workingLatex": "2^{x}=2^{0}\\Rightarrow x=0",
          "explanation": "Since $1=2^{0}$, equating indices gives $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Return to the second case",
          "workingLatex": "2^{x}=4=2^{2}\\Rightarrow x=2",
          "explanation": "Writing $4$ as $2^{2}$ and equating indices gives $x=2$ for the second value of $u$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the first solution",
          "workingLatex": "x=0:\\; 2^{0}-5\\cdot2^{0}+4=1-5+4=0",
          "explanation": "Substituting $x=0$ into the original equation gives $0$, so this solution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the second solution",
          "workingLatex": "x=2:\\; 2^{4}-5\\cdot2^{2}+4=16-20+4=0",
          "explanation": "Substituting $x=2$ also gives $0$, so this solution is valid too.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "x=0 \\quad \\text{or} \\quad x=2",
          "explanation": "Both values satisfy the original equation, so the solution set contains two numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=0$ or $x=2$"
    }
  },
  {
    "id": "al.y1.pure.exponentials.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "exponentials",
      "curve-sketching",
      "asymptotes"
    ],
    "questionText": "Sketch the curve $y = 2\\mathrm{e}^{x} + 3$. Your sketch must clearly show the $y$-intercept, the equation of the horizontal asymptote, and the behaviour of the curve as $x \\to \\pm\\infty$. State the range of the function.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the structure of the function",
          "workingLatex": "y=2\\mathrm{e}^{x}+3",
          "explanation": "This is an exponential of the form $y=A\\mathrm{e}^{kx}+c$ with $A=2$, $k=1$ and $c=3$. Reading off these constants tells us everything about the shape of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the constants",
          "workingLatex": "A=2,\\ k=1,\\ c=3",
          "explanation": "Because $k=1>0$ the graph is a growing exponential, and the $+3$ lifts the whole curve up by three units. That vertical shift will control both the asymptote and the range.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the y-intercept",
          "workingLatex": "x=0",
          "explanation": "Every curve meets the $y$-axis where $x=0$, so we substitute this value to locate that crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=2\\mathrm{e}^{0}+3=2(1)+3=5",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the curve passes through $(0,5)$. This is a firm point to anchor the sketch.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the horizontal asymptote",
          "workingLatex": "y=3",
          "explanation": "The constant $c=3$ is the value the curve levels off towards. The exponential term never quite reaches zero, so $y=3$ acts as a horizontal asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Behaviour as x tends to minus infinity",
          "workingLatex": "x\\to-\\infty\\Rightarrow \\mathrm{e}^{x}\\to0",
          "explanation": "For large negative $x$ the term $\\mathrm{e}^{x}$ shrinks towards zero, so $2\\mathrm{e}^{x}$ also fades away.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Limit on the left",
          "workingLatex": "y\\to2(0)+3=3^{+}",
          "explanation": "The curve approaches the asymptote $y=3$ from above, drawing ever closer but never touching it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Behaviour as x tends to plus infinity",
          "workingLatex": "x\\to+\\infty\\Rightarrow \\mathrm{e}^{x}\\to\\infty",
          "explanation": "For large positive $x$ the exponential grows without limit, so $2\\mathrm{e}^{x}$ becomes very large.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Limit on the right",
          "workingLatex": "y\\to+\\infty",
          "explanation": "The curve rises steeply upward on the right, showing the characteristic runaway growth of an exponential.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the curve is increasing",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2\\mathrm{e}^{x}>0",
          "explanation": "The derivative is positive for every $x$ because $\\mathrm{e}^{x}$ is always positive. A gradient that is positive everywhere means the curve only ever rises, with no turning points.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Determine the range",
          "workingLatex": "2\\mathrm{e}^{x}>0\\Rightarrow y>3",
          "explanation": "Since $2\\mathrm{e}^{x}$ is strictly positive, adding $3$ keeps $y$ always greater than $3$. The curve sits entirely above its asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sanity-check intercept against asymptote",
          "workingLatex": "5>3\\ \\checkmark",
          "explanation": "The $y$-intercept $5$ lies above the asymptote $y=3$, which agrees with the range $y>3$. This confirms our labelling is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the final sketch",
          "workingLatex": "(0,5),\\quad y=3,\\quad y>3",
          "explanation": "Draw a smooth increasing curve through $(0,5)$, flattening towards the dashed line $y=3$ on the left and climbing steeply on the right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,5)$; horizontal asymptote $y=3$; as $x\\to-\\infty$, $y\\to 3^{+}$ and as $x\\to+\\infty$, $y\\to+\\infty$; range $y>3$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "exponentials",
      "curve-sketching",
      "exponential-decay"
    ],
    "questionText": "Sketch the curve $y = 10\\mathrm{e}^{-0.5x}$, showing the $y$-intercept, the horizontal asymptote and the direction of the curve. Hence find the value of $y$ when $x = 2$, giving your answer exactly in terms of $\\mathrm{e}$ and as a decimal to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the structure of the function",
          "workingLatex": "y=10\\mathrm{e}^{-0.5x}",
          "explanation": "This has the form $y=A\\mathrm{e}^{kx}$ with $A=10$ and $k=-0.5$. The negative power is the key feature to notice.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise decay from the sign of k",
          "workingLatex": "k=-0.5<0",
          "explanation": "A negative exponent means the curve decays: as $x$ increases the exponential shrinks, so the graph falls towards the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the y-intercept",
          "workingLatex": "y=10\\mathrm{e}^{-0.5(0)}=10\\mathrm{e}^{0}=10",
          "explanation": "Setting $x=0$ and using $\\mathrm{e}^{0}=1$ gives the crossing point $(0,10)$, the highest point on the sketch.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the horizontal asymptote",
          "workingLatex": "y=0",
          "explanation": "There is no added constant, so $c=0$. The curve levels off towards the $x$-axis, making $y=0$ the horizontal asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Behaviour as x tends to plus infinity",
          "workingLatex": "x\\to+\\infty\\Rightarrow \\mathrm{e}^{-0.5x}\\to0",
          "explanation": "For large positive $x$ the exponent is a large negative number, so the exponential decays to zero and $y\\to0^{+}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Behaviour as x tends to minus infinity",
          "workingLatex": "x\\to-\\infty\\Rightarrow \\mathrm{e}^{-0.5x}\\to\\infty",
          "explanation": "For large negative $x$ the exponent becomes large and positive, so the exponential grows and $y\\to+\\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the curve is decreasing",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=10(-0.5)\\mathrm{e}^{-0.5x}=-5\\mathrm{e}^{-0.5x}<0",
          "explanation": "The gradient is negative for every $x$ because $\\mathrm{e}^{-0.5x}$ is always positive. A negative gradient throughout confirms a smoothly falling curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range",
          "workingLatex": "y>0",
          "explanation": "Since $10\\mathrm{e}^{-0.5x}$ is always positive, the curve stays above the $x$-axis, giving range $y>0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the sketch",
          "workingLatex": "(0,10)\\ \\text{down to}\\ y=0",
          "explanation": "Draw a decreasing curve starting high on the left, passing through $(0,10)$, and flattening towards the dashed line $y=0$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the required x-value",
          "workingLatex": "x=2\\Rightarrow y=10\\mathrm{e}^{-0.5(2)}",
          "explanation": "To find the height at $x=2$ we substitute directly into the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the exponent",
          "workingLatex": "y=10\\mathrm{e}^{-1}",
          "explanation": "The exponent $-0.5\\times2$ simplifies to $-1$, leaving the exact value $10\\mathrm{e}^{-1}$, which can also be written $\\dfrac{10}{\\mathrm{e}}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate to a decimal",
          "workingLatex": "y=\\dfrac{10}{\\mathrm{e}}\\approx\\dfrac{10}{2.71828}\\approx3.6788",
          "explanation": "Using $\\mathrm{e}\\approx2.71828$ and dividing gives approximately $3.6788$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 significant figures",
          "workingLatex": "y\\approx3.68",
          "explanation": "Rounding the decimal to three significant figures gives $3.68$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sanity-check the value",
          "workingLatex": "0<3.68<10\\ \\checkmark",
          "explanation": "The height at $x=2$ lies between the asymptote $0$ and the intercept $10$, and it is smaller than $10$ because the curve is falling. This is exactly what we expect.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,10)$, asymptote $y=0$, curve decreasing; at $x=2$, $y=10\\mathrm{e}^{-1}=\\dfrac{10}{\\mathrm{e}}\\approx 3.68$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "exponentials",
      "tangent",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y = \\mathrm{e}^{x}$ at the point $(0, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the curve and point of tangency",
          "workingLatex": "y=\\mathrm{e}^{x},\\quad (0,1)",
          "explanation": "A tangent is a straight line touching the curve at one point with the same gradient as the curve there. We first note the curve and the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "\\mathrm{e}^{0}=1\\Rightarrow(0,1)\\ \\text{is on}\\ y=\\mathrm{e}^{x}",
          "explanation": "Substituting $x=0$ gives $y=\\mathrm{e}^{0}=1$, so $(0,1)$ genuinely sits on the curve. This reassures us the tangent request is well posed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the gradient property",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(A\\mathrm{e}^{kx}\\right)=Ak\\,\\mathrm{e}^{kx}",
          "explanation": "The gradient of an exponential is found by multiplying by the coefficient $k$ in the power. Here $A=1$ and $k=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the curve",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\mathrm{e}^{x}",
          "explanation": "With $A=k=1$ the derivative is simply $\\mathrm{e}^{x}$ again — the famous property that $\\mathrm{e}^{x}$ is its own gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the gradient at the point",
          "workingLatex": "m=\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=\\mathrm{e}^{0}=1",
          "explanation": "The gradient at $x=0$ is $\\mathrm{e}^{0}=1$, so the tangent has slope $m=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the tangent formula",
          "workingLatex": "y-f(a)=m(x-a)",
          "explanation": "A straight line through a known point with a known gradient is expressed using this point-gradient form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the values to substitute",
          "workingLatex": "a=0,\\ f(a)=1,\\ m=1",
          "explanation": "We collect the ingredients: the point $(0,1)$ gives $a=0$ and $f(a)=1$, and the slope is $m=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the formula",
          "workingLatex": "y-1=1(x-0)",
          "explanation": "Placing these values into the point-gradient form gives the tangent before simplifying.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "y=x+1",
          "explanation": "Expanding and rearranging gives the neat tangent line $y=x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the line passes through the point",
          "workingLatex": "0+1=1\\ \\checkmark",
          "explanation": "Substituting $x=0$ into $y=x+1$ returns $y=1$, matching the point $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the gradient",
          "workingLatex": "\\text{slope of}\\ y=x+1\\ \\text{is}\\ 1=m\\ \\checkmark",
          "explanation": "The coefficient of $x$ is $1$, exactly the gradient we computed, so the line and curve share the same slope at contact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret geometrically",
          "workingLatex": "y=x+1\\ \\text{touches}\\ y=\\mathrm{e}^{x}\\ \\text{at}\\ (0,1)",
          "explanation": "The line just grazes the curve at $(0,1)$; near there the exponential looks almost straight, which is why the tangent approximates it so well.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final tangent",
          "workingLatex": "y=x+1",
          "explanation": "This is the required equation of the tangent to $y=\\mathrm{e}^{x}$ at $(0,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is $y = x + 1$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "exponentials",
      "tangent",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y = \\mathrm{e}^{2x}$ at the point where $x = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the curve and x-value",
          "workingLatex": "y=\\mathrm{e}^{2x},\\quad x=0",
          "explanation": "We need the tangent at the point on the curve where $x=0$. First we identify the curve and the location.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y=\\mathrm{e}^{2(0)}=\\mathrm{e}^{0}=1",
          "explanation": "Substituting $x=0$ gives $y=1$, so the point of tangency is $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the gradient property",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(A\\mathrm{e}^{kx}\\right)=Ak\\,\\mathrm{e}^{kx}",
          "explanation": "For an exponential we multiply by the power's coefficient. Here $A=1$ and $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the curve",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2\\mathrm{e}^{2x}",
          "explanation": "With $A=1$ and $k=2$, the derivative gains a factor of $2$, giving $2\\mathrm{e}^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the gradient at x = 0",
          "workingLatex": "m=2\\mathrm{e}^{2(0)}=2\\mathrm{e}^{0}=2",
          "explanation": "At $x=0$ the exponential equals $1$, so the tangent gradient is $m=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the tangent formula",
          "workingLatex": "y-f(a)=m(x-a)",
          "explanation": "The point-gradient form lets us build the tangent from the point of contact and the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the values to substitute",
          "workingLatex": "a=0,\\ f(a)=1,\\ m=2",
          "explanation": "From the point $(0,1)$ we take $a=0$ and $f(a)=1$, and the gradient is $m=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the formula",
          "workingLatex": "y-1=2(x-0)",
          "explanation": "Inserting the values gives the tangent line before simplification.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "y=2x+1",
          "explanation": "Expanding the bracket and rearranging gives the tangent $y=2x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the line passes through the point",
          "workingLatex": "2(0)+1=1\\ \\checkmark",
          "explanation": "At $x=0$ the line gives $y=1$, matching the point $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the gradient",
          "workingLatex": "\\text{slope of}\\ y=2x+1\\ \\text{is}\\ 2=m\\ \\checkmark",
          "explanation": "The coefficient of $x$ is $2$, exactly the computed gradient, confirming the tangent is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with the tangent to e^x",
          "workingLatex": "\\text{slope }2>1",
          "explanation": "The tangent here has slope $2$, steeper than the slope $1$ of $y=\\mathrm{e}^{x}$ at the same $x$. The doubled power $k=2$ makes the curve rise twice as fast, which makes intuitive sense.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final tangent",
          "workingLatex": "y=2x+1",
          "explanation": "This is the required equation of the tangent to $y=\\mathrm{e}^{2x}$ at $x=0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is $y = 2x + 1$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the gradient of the curve $y = 3\\mathrm{e}^{2x}$ at the point where $x = 1$. Give your answer exactly in terms of $\\mathrm{e}$ and as a decimal to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the curve",
          "workingLatex": "y=3\\mathrm{e}^{2x}",
          "explanation": "The gradient of a curve at a point is the value of its derivative there, so we begin from the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the gradient property",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(A\\mathrm{e}^{kx}\\right)=Ak\\,\\mathrm{e}^{kx}",
          "explanation": "Differentiating an exponential multiplies it by the coefficient $k$ from the power.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the constants",
          "workingLatex": "A=3,\\ k=2",
          "explanation": "Comparing $3\\mathrm{e}^{2x}$ with $A\\mathrm{e}^{kx}$ gives $A=3$ and $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the curve",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=3(2)\\mathrm{e}^{2x}=6\\mathrm{e}^{2x}",
          "explanation": "Multiplying $A=3$ by $k=2$ gives $6$, so the gradient function is $6\\mathrm{e}^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the point we need",
          "workingLatex": "x=1",
          "explanation": "We want the gradient specifically at $x=1$, so we will substitute this value into the derivative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=1}=6\\mathrm{e}^{2(1)}=6\\mathrm{e}^{2}",
          "explanation": "Putting $x=1$ into $6\\mathrm{e}^{2x}$ gives the exact gradient $6\\mathrm{e}^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the exact gradient",
          "workingLatex": "6\\mathrm{e}^{2}",
          "explanation": "Leaving the answer as $6\\mathrm{e}^{2}$ keeps it exact, as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the value of e squared",
          "workingLatex": "\\mathrm{e}\\approx2.71828\\Rightarrow \\mathrm{e}^{2}\\approx7.389",
          "explanation": "Squaring $\\mathrm{e}\\approx2.71828$ gives $\\mathrm{e}^{2}\\approx7.389$, ready for the decimal evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the decimal",
          "workingLatex": "6\\times7.389\\approx44.33",
          "explanation": "Multiplying $6$ by $7.389$ gives approximately $44.33$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 significant figures",
          "workingLatex": "6\\mathrm{e}^{2}\\approx44.3",
          "explanation": "Rounding to three significant figures gives $44.3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sanity-check the sign",
          "workingLatex": "6\\mathrm{e}^{2}>0",
          "explanation": "The gradient is positive, which is expected since $y=3\\mathrm{e}^{2x}$ is an increasing curve everywhere.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sanity-check the size",
          "workingLatex": "6\\mathrm{e}^{2}\\approx44.3>6",
          "explanation": "At $x=0$ the gradient would be $6\\mathrm{e}^{0}=6$; at $x=1$ it is much larger. A steeper gradient further right fits the accelerating growth of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\text{gradient}=6\\mathrm{e}^{2}\\approx44.3",
          "explanation": "The gradient at $x=1$ is exactly $6\\mathrm{e}^{2}$, or about $44.3$ to three significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient $= 6\\mathrm{e}^{2} \\approx 44.3$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "exponentials",
      "gradient",
      "coordinates"
    ],
    "questionText": "For the curve $y = \\mathrm{e}^{x}$, find the coordinates of the point at which the gradient of the curve is equal to $\\mathrm{e}^{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the curve",
          "workingLatex": "y=\\mathrm{e}^{x}",
          "explanation": "We must find the point where the curve's gradient takes a particular value, so we start from the curve itself.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate using the gradient property",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\mathrm{e}^{x}",
          "explanation": "Applying $\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(A\\mathrm{e}^{kx}\\right)=Ak\\,\\mathrm{e}^{kx}$ with $A=k=1$ gives the derivative $\\mathrm{e}^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the self-derivative feature",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\mathrm{e}^{x}=y",
          "explanation": "For this curve the gradient at any point equals the $y$-value there. This special property will make the point easy to describe once we know $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient equal to the required value",
          "workingLatex": "\\mathrm{e}^{x}=\\mathrm{e}^{2}",
          "explanation": "We want the gradient to be $\\mathrm{e}^{2}$, so we set the derivative equal to $\\mathrm{e}^{2}$ and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate the indices",
          "workingLatex": "x=2",
          "explanation": "Both sides are powers of the same base $\\mathrm{e}$, and $\\mathrm{e}^{x}$ is one-to-one, so we may simply equate the exponents. This avoids using logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain why equating indices is valid",
          "workingLatex": "\\mathrm{e}^{x}\\ \\text{is strictly increasing}",
          "explanation": "Because $\\mathrm{e}^{x}$ never repeats a value, two equal powers of $\\mathrm{e}$ must have equal exponents. That is why $x=2$ is the only solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate",
          "workingLatex": "y=\\mathrm{e}^{2}",
          "explanation": "Substituting $x=2$ back into $y=\\mathrm{e}^{x}$ gives $y=\\mathrm{e}^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the point",
          "workingLatex": "(2,\\ \\mathrm{e}^{2})",
          "explanation": "The point where the gradient equals $\\mathrm{e}^{2}$ is therefore $(2,\\mathrm{e}^{2})$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the gradient at this point",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=2}=\\mathrm{e}^{2}\\ \\checkmark",
          "explanation": "Evaluating the derivative at $x=2$ returns $\\mathrm{e}^{2}$, exactly the required gradient. This confirms the solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Give a decimal check of the coordinates",
          "workingLatex": "\\mathrm{e}^{2}\\approx7.39\\Rightarrow(2,\\ 7.39)",
          "explanation": "Numerically the point is about $(2,7.39)$, a convenient sense-check of its location.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sanity-check consistency of gradient and height",
          "workingLatex": "\\text{gradient}=\\mathrm{e}^{2}=y",
          "explanation": "The gradient equals the height at this point, matching the self-derivative property observed earlier. Everything is internally consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the result",
          "workingLatex": "(2,\\mathrm{e}^{2})",
          "explanation": "As we move right along $y=\\mathrm{e}^{x}$ the curve steepens; at $x=2$ it has become steep enough for the gradient to reach $\\mathrm{e}^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final coordinates",
          "workingLatex": "(2,\\ \\mathrm{e}^{2})",
          "explanation": "The required point is $(2,\\mathrm{e}^{2})$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The point is $(2, \\mathrm{e}^{2}) \\approx (2, 7.39)$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "exponentials",
      "curve-sketching",
      "asymptotes"
    ],
    "questionText": "Sketch the curve $y = 6 - \\mathrm{e}^{x}$. Show the $y$-intercept, describe the behaviour of the curve as $x \\to -\\infty$ and as $x$ becomes large and positive, and state (with reasons) how many times the curve crosses the $x$-axis. You are not required to find the crossing point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite in standard form",
          "workingLatex": "y=6-\\mathrm{e}^{x}=-\\mathrm{e}^{x}+6",
          "explanation": "Written as $y=A\\mathrm{e}^{kx}+c$ we have $A=-1$, $k=1$ and $c=6$. Recognising these constants reveals the shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the negative coefficient",
          "workingLatex": "A=-1<0",
          "explanation": "A negative $A$ reflects the usual growing exponential in the horizontal line $y=6$, so instead of rising the curve falls as $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the y-intercept",
          "workingLatex": "y=6-\\mathrm{e}^{0}=6-1=5",
          "explanation": "Setting $x=0$ and using $\\mathrm{e}^{0}=1$ gives the crossing point $(0,5)$ on the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the horizontal asymptote",
          "workingLatex": "y=6",
          "explanation": "The constant term $c=6$ is the level the curve approaches, so $y=6$ is a horizontal asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Behaviour as x tends to minus infinity",
          "workingLatex": "x\\to-\\infty\\Rightarrow \\mathrm{e}^{x}\\to0",
          "explanation": "For large negative $x$ the exponential fades to zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Limit on the left",
          "workingLatex": "y\\to6-0=6^{-}",
          "explanation": "The curve approaches $y=6$ from below, since $\\mathrm{e}^{x}$ is always positive and is being subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x becomes large and positive",
          "workingLatex": "x\\to+\\infty\\Rightarrow \\mathrm{e}^{x}\\to\\infty",
          "explanation": "For large positive $x$ the exponential grows without limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limit on the right",
          "workingLatex": "y\\to6-\\infty=-\\infty",
          "explanation": "Subtracting an ever-larger exponential from $6$ drives $y$ down to $-\\infty$, so the curve falls steeply.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the curve is decreasing",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=-\\mathrm{e}^{x}<0",
          "explanation": "The derivative is negative for every $x$ because $\\mathrm{e}^{x}>0$. A gradient that is always negative means the curve falls throughout, with no turning points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the curve stays below the asymptote",
          "workingLatex": "\\mathrm{e}^{x}>0\\Rightarrow y<6",
          "explanation": "Since a positive quantity is subtracted from $6$, the curve is always below the line $y=6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Argue the number of x-axis crossings",
          "workingLatex": "y:\\ 6^{-}\\ \\longrightarrow\\ -\\infty\\ \\text{(continuous, decreasing)}",
          "explanation": "The curve moves continuously and strictly downward from just below $6$ on the left to $-\\infty$ on the right, so it must pass through $y=0$ exactly once.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State that solving the crossing needs logarithms",
          "workingLatex": "6-\\mathrm{e}^{x}=0\\ \\Rightarrow\\ \\mathrm{e}^{x}=6",
          "explanation": "The exact crossing satisfies $\\mathrm{e}^{x}=6$, which cannot be solved by equating indices and would require logarithms, so we leave it unsolved as instructed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sanity-check the intercept position",
          "workingLatex": "0<5<6",
          "explanation": "The $y$-intercept $5$ is positive and lies below the asymptote $6$. A positive intercept together with a fall to $-\\infty$ confirms the single crossing lies to the right of the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe the final sketch",
          "workingLatex": "(0,5),\\ y=6,\\ \\text{one root}",
          "explanation": "Draw a decreasing curve flattening towards $y=6$ on the far left, passing through $(0,5)$, then dropping and crossing the $x$-axis exactly once before heading to $-\\infty$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept $(0,5)$; as $x\\to-\\infty$, $y\\to 6^{-}$ (asymptote $y=6$); as $x\\to+\\infty$, $y\\to-\\infty$; the curve is always decreasing so it crosses the $x$-axis exactly once."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "gradient",
      "modelling"
    ],
    "questionText": "A curve has equation $y = A\\mathrm{e}^{kx}$, where $A$ and $k$ are constants. The curve passes through the point $(0, 4)$ and has gradient $8$ at $x = 0$. Find the values of $A$ and $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the general curve",
          "workingLatex": "y=A\\mathrm{e}^{kx}",
          "explanation": "Two unknowns $A$ and $k$ must be found, so we need two pieces of information: a point and a gradient. We start from the general equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the point on the curve",
          "workingLatex": "(0,4):\\ x=0,\\ y=4",
          "explanation": "The curve passes through $(0,4)$, so substituting $x=0$ must give $y=4$. This condition will pin down $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute to find A",
          "workingLatex": "4=A\\mathrm{e}^{k(0)}=A\\mathrm{e}^{0}=A",
          "explanation": "Because $\\mathrm{e}^{0}=1$, the $y$-intercept of $A\\mathrm{e}^{kx}$ is simply $A$. Hence $A=4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the value of A",
          "workingLatex": "A=4",
          "explanation": "The $y$-intercept immediately gives $A=4$, independent of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the gradient property",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(A\\mathrm{e}^{kx}\\right)=Ak\\,\\mathrm{e}^{kx}",
          "explanation": "Differentiating multiplies the exponential by $k$, giving the gradient function needed for the second condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the curve",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=Ak\\,\\mathrm{e}^{kx}",
          "explanation": "This is the gradient at any point on the curve, ready to be evaluated at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient at x = 0",
          "workingLatex": "\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=Ak\\,\\mathrm{e}^{0}=Ak",
          "explanation": "At $x=0$ the exponential is $1$, so the gradient there is simply the product $Ak$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the gradient condition",
          "workingLatex": "Ak=8",
          "explanation": "We are told the gradient at $x=0$ is $8$, so $Ak=8$. This is the second equation linking the constants.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the known value of A",
          "workingLatex": "4k=8",
          "explanation": "Replacing $A$ with $4$ turns the condition into a simple equation for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for k",
          "workingLatex": "k=\\dfrac{8}{4}=2",
          "explanation": "Dividing both sides by $4$ gives $k=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the complete curve",
          "workingLatex": "y=4\\mathrm{e}^{2x}",
          "explanation": "With $A=4$ and $k=2$, the curve is $y=4\\mathrm{e}^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the point",
          "workingLatex": "y(0)=4\\mathrm{e}^{0}=4\\ \\checkmark",
          "explanation": "The curve passes through $(0,4)$ as required, confirming $A$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the gradient",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=8\\mathrm{e}^{2x},\\ \\left.\\right|_{x=0}=8\\ \\checkmark",
          "explanation": "Differentiating gives $8\\mathrm{e}^{2x}$, which equals $8$ at $x=0$, matching the stated gradient. Both conditions hold, so the values are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 4$ and $k = 2$ (so $y = 4\\mathrm{e}^{2x}$)."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "exponentials",
      "gradient",
      "comparison"
    ],
    "questionText": "The curves $y = \\mathrm{e}^{x}$ and $y = \\mathrm{e}^{2x}$ are drawn on the same axes. State the coordinates of their common point and determine which curve is steeper there. Then find the ratio of the gradient of $y = \\mathrm{e}^{2x}$ to the gradient of $y = \\mathrm{e}^{x}$ at $x = 1$, giving your answer exactly in terms of $\\mathrm{e}$ and as a decimal to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two curves",
          "workingLatex": "y=\\mathrm{e}^{x}\\quad\\text{and}\\quad y=\\mathrm{e}^{2x}",
          "explanation": "We are comparing a standard exponential with one that grows twice as fast in the exponent. First we locate where they meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the curves equal",
          "workingLatex": "\\mathrm{e}^{x}=\\mathrm{e}^{2x}",
          "explanation": "A common point lies on both curves, so their $y$-values must agree. We solve this equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the indices",
          "workingLatex": "x=2x\\ \\Rightarrow\\ 0=x",
          "explanation": "Both sides are powers of $\\mathrm{e}$, which is one-to-one, so we equate exponents. This gives $x=0$ without any logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the common point",
          "workingLatex": "y=\\mathrm{e}^{0}=1\\ \\Rightarrow\\ (0,1)",
          "explanation": "At $x=0$ both curves give $y=1$, so they meet at the single common point $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Differentiate the first curve",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\mathrm{e}^{x}\\right)=\\mathrm{e}^{x}",
          "explanation": "Using the gradient property with $A=k=1$, the derivative of $\\mathrm{e}^{x}$ is $\\mathrm{e}^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Differentiate the second curve",
          "workingLatex": "\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\mathrm{e}^{2x}\\right)=2\\mathrm{e}^{2x}",
          "explanation": "With $A=1$ and $k=2$, differentiating $\\mathrm{e}^{2x}$ brings down a factor of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Gradient of each curve at the common point",
          "workingLatex": "\\mathrm{e}^{0}=1\\quad\\text{and}\\quad 2\\mathrm{e}^{0}=2",
          "explanation": "At $x=0$ the gradient of $y=\\mathrm{e}^{x}$ is $1$, while the gradient of $y=\\mathrm{e}^{2x}$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare steepness at the common point",
          "workingLatex": "2>1",
          "explanation": "Since $2>1$, the curve $y=\\mathrm{e}^{2x}$ is steeper than $y=\\mathrm{e}^{x}$ at their meeting point $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Gradient of the first curve at x = 1",
          "workingLatex": "\\left.\\mathrm{e}^{x}\\right|_{x=1}=\\mathrm{e}",
          "explanation": "Substituting $x=1$ into the derivative $\\mathrm{e}^{x}$ gives $\\mathrm{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Gradient of the second curve at x = 1",
          "workingLatex": "\\left.2\\mathrm{e}^{2x}\\right|_{x=1}=2\\mathrm{e}^{2}",
          "explanation": "Substituting $x=1$ into $2\\mathrm{e}^{2x}$ gives $2\\mathrm{e}^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form the ratio of gradients",
          "workingLatex": "\\dfrac{2\\mathrm{e}^{2}}{\\mathrm{e}}",
          "explanation": "The required ratio is the gradient of $y=\\mathrm{e}^{2x}$ divided by that of $y=\\mathrm{e}^{x}$ at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the ratio",
          "workingLatex": "\\dfrac{2\\mathrm{e}^{2}}{\\mathrm{e}}=2\\mathrm{e}^{2-1}=2\\mathrm{e}",
          "explanation": "Dividing the powers subtracts the indices, leaving the exact ratio $2\\mathrm{e}$, i.e. $2\\mathrm{e}:1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate as a decimal",
          "workingLatex": "2\\mathrm{e}\\approx2\\times2.71828\\approx5.437",
          "explanation": "Using $\\mathrm{e}\\approx2.71828$ gives approximately $5.437$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round and sanity-check",
          "workingLatex": "2\\mathrm{e}\\approx5.44>1",
          "explanation": "To three significant figures the ratio is $5.44$. It is greater than $1$, confirming that $y=\\mathrm{e}^{2x}$ is the steeper curve at $x=1$ too, consistent with our earlier comparison.",
          "diagram": null
        }
      ],
      "finalAnswer": "Common point $(0,1)$; $y=\\mathrm{e}^{2x}$ is steeper there (gradient $2$ versus $1$); at $x=1$ the ratio of gradients is $\\dfrac{2\\mathrm{e}^{2}}{\\mathrm{e}}=2\\mathrm{e}\\approx 5.44$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "exponentials",
      "tangent",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y = \\mathrm{e}^{x}$ at the point $(1, \\mathrm{e})$, and determine the exact coordinates of the point where this tangent crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the curve and point",
          "workingLatex": "y=\\mathrm{e}^{x},\\quad (1,\\mathrm{e})",
          "explanation": "We need a tangent at $(1,\\mathrm{e})$ and then its $x$-axis crossing. We start by noting the curve and point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "\\mathrm{e}^{1}=\\mathrm{e}\\ \\checkmark",
          "explanation": "Substituting $x=1$ gives $y=\\mathrm{e}^{1}=\\mathrm{e}$, so the point $(1,\\mathrm{e})$ genuinely lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate using the gradient property",
          "workingLatex": "\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\mathrm{e}^{x}",
          "explanation": "With $A=k=1$, the derivative of $\\mathrm{e}^{x}$ is $\\mathrm{e}^{x}$ once more.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at x = 1",
          "workingLatex": "m=\\left.\\mathrm{e}^{x}\\right|_{x=1}=\\mathrm{e}",
          "explanation": "At $x=1$ the gradient is $\\mathrm{e}^{1}=\\mathrm{e}$, so the tangent has slope $m=\\mathrm{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent formula",
          "workingLatex": "y-f(a)=m(x-a)",
          "explanation": "We build the tangent using the point-gradient form of a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "y-\\mathrm{e}=\\mathrm{e}(x-1)",
          "explanation": "Using $a=1$, $f(a)=\\mathrm{e}$ and $m=\\mathrm{e}$ gives the tangent before simplifying.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the right-hand side",
          "workingLatex": "y-\\mathrm{e}=\\mathrm{e}x-\\mathrm{e}",
          "explanation": "Multiplying out $\\mathrm{e}(x-1)$ gives $\\mathrm{e}x-\\mathrm{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the equation",
          "workingLatex": "y=\\mathrm{e}x",
          "explanation": "Adding $\\mathrm{e}$ to both sides cancels the constants on the right, leaving the tidy tangent $y=\\mathrm{e}x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the tangent passes through the origin",
          "workingLatex": "y=\\mathrm{e}x\\Rightarrow (0,0)\\ \\text{lies on it}",
          "explanation": "The tangent has no constant term, so it passes through the origin — a neat feature of this particular tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the x-axis crossing",
          "workingLatex": "y=0",
          "explanation": "A line crosses the $x$-axis where $y=0$, so we set the tangent equation equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x",
          "workingLatex": "\\mathrm{e}x=0\\ \\Rightarrow\\ x=0",
          "explanation": "Since $\\mathrm{e}\\neq0$, the only solution is $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the crossing point",
          "workingLatex": "(0,0)",
          "explanation": "The tangent meets the $x$-axis at the origin $(0,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the tangent at the point of contact",
          "workingLatex": "\\left.\\mathrm{e}x\\right|_{x=1}=\\mathrm{e}\\ \\checkmark",
          "explanation": "Substituting $x=1$ into $y=\\mathrm{e}x$ gives $y=\\mathrm{e}$, matching the point $(1,\\mathrm{e})$. The line touches the curve exactly there.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results",
          "workingLatex": "y=\\mathrm{e}x,\\quad (0,0)",
          "explanation": "The tangent is $y=\\mathrm{e}x$ and it crosses the $x$-axis at the origin $(0,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $y = \\mathrm{e}x$; it crosses the $x$-axis at $(0, 0)$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "exponentials",
      "modelling",
      "exponential-growth",
      "rate-of-change"
    ],
    "questionText": "A population is modelled by $P=500\\mathrm{e}^{0.2t}$, where $t$ is the time in years. State the initial population, find the population when $t=5$ (exact and to 3 significant figures), and find the rate of growth $\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}$ at $t=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the model and its parameters",
          "workingLatex": "P=A\\mathrm{e}^{kt},\\qquad A=500,\\ k=0.2",
          "explanation": "In the standard growth model $P=A\\mathrm{e}^{kt}$ the number $A$ multiplying the exponential is the amount present when $t=0$, and $k$ controls how fast it changes. Here $A=500$ and $k=0.2$, and since $k>0$ the population is growing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t = 0 for the initial population",
          "workingLatex": "P(0)=500\\mathrm{e}^{0.2\\times0}=500\\mathrm{e}^{0}",
          "explanation": "The initial population means the value at the very start, which is when $t=0$. Putting $t=0$ into the formula gives the exponent $0.2\\times0=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate using e to the power 0",
          "workingLatex": "500\\mathrm{e}^{0}=500\\times1=500",
          "explanation": "Anything raised to the power $0$ equals $1$, so $\\mathrm{e}^{0}=1$. This confirms that $A$ really is the starting value: the initial population is $500$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 5 into the model",
          "workingLatex": "P(5)=500\\mathrm{e}^{0.2\\times5}",
          "explanation": "To find the population after $5$ years we replace $t$ with $5$ everywhere it appears. Only the exponent changes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the exponent",
          "workingLatex": "0.2\\times5=1\\ \\Rightarrow\\ P(5)=500\\mathrm{e}^{1}=500\\mathrm{e}",
          "explanation": "The exponent works out to exactly $1$, which is a convenient value: $\\mathrm{e}^{1}=\\mathrm{e}$, so the exact population is simply $500\\mathrm{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Convert to a decimal using e",
          "workingLatex": "\\mathrm{e}\\approx2.71828\\ \\Rightarrow\\ 500\\mathrm{e}\\approx500\\times2.71828",
          "explanation": "Keeping the exact form $500\\mathrm{e}$ is best for accuracy, but the question also wants a decimal, so we use $\\mathrm{e}\\approx2.71828$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "500\\mathrm{e}\\approx1359.14\\approx1360",
          "explanation": "Multiplying gives $1359.14$, and rounding to $3$ significant figures gives $1360$. A population must be a whole number in practice, but the model gives this smooth value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate to find the rate of change",
          "workingLatex": "\\frac{\\mathrm{d}P}{\\mathrm{d}t}=500\\times0.2\\,\\mathrm{e}^{0.2t}=100\\mathrm{e}^{0.2t}",
          "explanation": "The rate of growth is the derivative. Differentiating $\\mathrm{e}^{0.2t}$ brings down the factor $0.2$ from the exponent, so $\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}=500(0.2)\\mathrm{e}^{0.2t}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute t = 0 into the derivative",
          "workingLatex": "\\left.\\frac{\\mathrm{d}P}{\\mathrm{d}t}\\right|_{t=0}=100\\mathrm{e}^{0.2\\times0}=100\\mathrm{e}^{0}",
          "explanation": "We now evaluate the rate at the starting moment $t=0$, so again the exponent becomes $0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the initial rate",
          "workingLatex": "100\\mathrm{e}^{0}=100\\times1=100",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the population is initially increasing at $100$ individuals per year.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify using the gradient property",
          "workingLatex": "\\frac{\\mathrm{d}P}{\\mathrm{d}t}=kP\\ \\Rightarrow\\ 0.2\\times500=100",
          "explanation": "For any model $P=A\\mathrm{e}^{kt}$ the rate equals $kP$. At $t=0$ we have $P=500$, so $0.2\\times500=100$, which matches the derivative calculation exactly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sense-check the growth",
          "workingLatex": "1360>500\\ \\text{and rate }>0",
          "explanation": "The population after $5$ years is larger than the start and the initial rate is positive, both consistent with $k>0$ describing growth.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final results",
          "workingLatex": "P_0=500,\\quad P(5)=500\\mathrm{e}\\approx1360,\\quad \\left.\\tfrac{\\mathrm{d}P}{\\mathrm{d}t}\\right|_{0}=100",
          "explanation": "Collecting the three requested quantities gives the complete answer to the modelling question.",
          "diagram": null
        }
      ],
      "finalAnswer": "Initial population $=500$; $P(5)=500\\mathrm{e}\\approx1360$; $\\left.\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\right|_{t=0}=100$ per year."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "modelling",
      "exponential-decay",
      "rate-of-change"
    ],
    "questionText": "The mass of a radioactive sample (in grams) is modelled by $M=20\\mathrm{e}^{-0.1t}$, where $t$ is the time in hours. State the initial mass, find the mass when $t=10$ (exact and to 3 significant figures), and find the rate of decay $\\dfrac{\\mathrm{d}M}{\\mathrm{d}t}$ at $t=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the model and its parameters",
          "workingLatex": "M=A\\mathrm{e}^{kt},\\qquad A=20,\\ k=-0.1",
          "explanation": "This is the standard model $M=A\\mathrm{e}^{kt}$ with $A=20$ and $k=-0.1$. Because $k<0$, the exponential shrinks over time, which is exactly what decay means.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t = 0 for the initial mass",
          "workingLatex": "M(0)=20\\mathrm{e}^{-0.1\\times0}=20\\mathrm{e}^{0}",
          "explanation": "The initial mass is the value at $t=0$. Substituting makes the exponent $-0.1\\times0=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the initial mass",
          "workingLatex": "20\\mathrm{e}^{0}=20\\times1=20",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the sample starts at $20$ grams. This is why $A$ is called the initial value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute t = 10 into the model",
          "workingLatex": "M(10)=20\\mathrm{e}^{-0.1\\times10}",
          "explanation": "To find the mass after $10$ hours we replace $t$ with $10$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the exponent",
          "workingLatex": "-0.1\\times10=-1\\ \\Rightarrow\\ M(10)=20\\mathrm{e}^{-1}=\\frac{20}{\\mathrm{e}}",
          "explanation": "The exponent simplifies neatly to $-1$, and a negative power means a reciprocal, so $\\mathrm{e}^{-1}=\\dfrac{1}{\\mathrm{e}}$ and the exact mass is $\\dfrac{20}{\\mathrm{e}}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Convert to a decimal",
          "workingLatex": "\\frac{20}{\\mathrm{e}}\\approx\\frac{20}{2.71828}\\approx7.3576",
          "explanation": "Dividing $20$ by $\\mathrm{e}\\approx2.71828$ gives approximately $7.3576$ grams.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "M(10)\\approx7.36\\ \\text{g}",
          "explanation": "Rounding $7.3576$ to $3$ significant figures gives $7.36$ grams, which is comfortably less than the starting $20$ grams as expected for decay.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Differentiate to find the rate of change",
          "workingLatex": "\\frac{\\mathrm{d}M}{\\mathrm{d}t}=20\\times(-0.1)\\mathrm{e}^{-0.1t}=-2\\mathrm{e}^{-0.1t}",
          "explanation": "Differentiating $\\mathrm{e}^{-0.1t}$ brings down the $-0.1$, giving $\\dfrac{\\mathrm{d}M}{\\mathrm{d}t}=20(-0.1)\\mathrm{e}^{-0.1t}=-2\\mathrm{e}^{-0.1t}$. The negative sign signals that the mass is falling.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute t = 0 into the derivative",
          "workingLatex": "\\left.\\frac{\\mathrm{d}M}{\\mathrm{d}t}\\right|_{t=0}=-2\\mathrm{e}^{-0.1\\times0}=-2\\mathrm{e}^{0}",
          "explanation": "Evaluating the rate at the start again makes the exponent $0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the initial rate",
          "workingLatex": "-2\\mathrm{e}^{0}=-2\\times1=-2",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the mass is initially decreasing at $2$ grams per hour. The minus sign is the mathematical way of saying it is going down.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify using the gradient property",
          "workingLatex": "\\frac{\\mathrm{d}M}{\\mathrm{d}t}=kM\\ \\Rightarrow\\ (-0.1)\\times20=-2",
          "explanation": "The rate always equals $kM$. At $t=0$ we have $M=20$, so $(-0.1)(20)=-2$, matching the derivative and confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sense-check the decay",
          "workingLatex": "7.36<20\\ \\text{and rate}<0",
          "explanation": "After $10$ hours the mass is well below the starting $20$ grams and the initial rate is negative, both consistent with $k<0$ describing decay.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final results",
          "workingLatex": "M_0=20,\\quad M(10)=\\frac{20}{\\mathrm{e}}\\approx7.36,\\quad \\left.\\tfrac{\\mathrm{d}M}{\\mathrm{d}t}\\right|_{0}=-2",
          "explanation": "Bringing the three quantities together answers the modelling question fully.",
          "diagram": null
        }
      ],
      "finalAnswer": "Initial mass $=20\\ \\text{g}$; $M(10)=\\dfrac{20}{\\mathrm{e}}\\approx7.36\\ \\text{g}$; $\\left.\\dfrac{\\mathrm{d}M}{\\mathrm{d}t}\\right|_{t=0}=-2$ g/hour (decreasing)."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "modelling",
      "limiting-value",
      "cooling"
    ],
    "questionText": "The temperature of a cooling drink (in $^{\\circ}\\mathrm{C}$) is modelled by $T=20+60\\mathrm{e}^{-0.5t}$, where $t$ is the time in minutes. State the initial temperature, find the limiting temperature as $t\\to\\infty$, and find the temperature when $t=2$ (exact and to 3 significant figures).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the structure of the model",
          "workingLatex": "T=c+A\\mathrm{e}^{kt},\\qquad c=20,\\ A=60,\\ k=-0.5",
          "explanation": "This model has an added constant $c=20$ on top of a decaying exponential term $60\\mathrm{e}^{-0.5t}$. The constant sets the level the temperature settles towards, while the exponential term is the part that fades away.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute t = 0 for the initial temperature",
          "workingLatex": "T(0)=20+60\\mathrm{e}^{-0.5\\times0}=20+60\\mathrm{e}^{0}",
          "explanation": "The initial temperature is the value at $t=0$, which makes the exponent $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the initial temperature",
          "workingLatex": "20+60\\times1=80",
          "explanation": "With $\\mathrm{e}^{0}=1$, the drink starts at $20+60=80^{\\circ}\\mathrm{C}$. The exponential term contributes its full $60$ at the start.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider the behaviour of the exponential term",
          "workingLatex": "t\\to\\infty:\\ -0.5t\\to-\\infty",
          "explanation": "To find the long-term temperature we look at what happens as time grows without bound. The exponent $-0.5t$ heads to $-\\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the limit of the exponential",
          "workingLatex": "\\mathrm{e}^{-0.5t}\\to0\\ \\Rightarrow\\ 60\\mathrm{e}^{-0.5t}\\to0",
          "explanation": "A large negative exponent makes $\\mathrm{e}^{-0.5t}$ tend to $0$, so the whole decaying term vanishes in the long run.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the limiting temperature",
          "workingLatex": "T\\to20+0=20",
          "explanation": "Once the exponential term dies away, only the constant is left, so the drink cools towards $20^{\\circ}\\mathrm{C}$. This is the temperature of the surrounding room.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute t = 2 into the model",
          "workingLatex": "T(2)=20+60\\mathrm{e}^{-0.5\\times2}",
          "explanation": "For the temperature after $2$ minutes we replace $t$ with $2$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the exponent",
          "workingLatex": "-0.5\\times2=-1\\ \\Rightarrow\\ T(2)=20+60\\mathrm{e}^{-1}=20+\\frac{60}{\\mathrm{e}}",
          "explanation": "The exponent becomes $-1$, so $\\mathrm{e}^{-1}=\\dfrac{1}{\\mathrm{e}}$ and the exact temperature is $20+\\dfrac{60}{\\mathrm{e}}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Convert the exponential term to a decimal",
          "workingLatex": "\\frac{60}{\\mathrm{e}}\\approx\\frac{60}{2.71828}\\approx22.073",
          "explanation": "Dividing $60$ by $\\mathrm{e}$ gives about $22.073$ for the exponential part.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the constant and round",
          "workingLatex": "T(2)\\approx20+22.073=42.073\\approx42.1",
          "explanation": "Adding the constant $20$ gives $42.073$, which rounds to $42.1^{\\circ}\\mathrm{C}$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sense-check the value",
          "workingLatex": "20<42.1<80",
          "explanation": "The temperature at $t=2$ lies between the limiting value $20$ and the initial value $80$, exactly as a cooling curve should behave.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the cooling is towards the limit",
          "workingLatex": "80\\ \\to\\ 42.1\\ \\to\\ 20\\ \\text{as }t\\ \\text{increases}",
          "explanation": "The temperature falls from $80$ at the start, passes through $42.1$ at $t=2$, and keeps decreasing towards the limiting $20^{\\circ}\\mathrm{C}$, so the values are ordered exactly as a cooling curve requires.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final results",
          "workingLatex": "T_0=80,\\quad T_{\\infty}=20,\\quad T(2)=20+\\frac{60}{\\mathrm{e}}\\approx42.1",
          "explanation": "Collecting the three quantities completes the answer to the cooling model.",
          "diagram": null
        }
      ],
      "finalAnswer": "Initial temperature $=80^{\\circ}\\mathrm{C}$; limiting temperature $=20^{\\circ}\\mathrm{C}$; $T(2)=20+\\dfrac{60}{\\mathrm{e}}\\approx42.1^{\\circ}\\mathrm{C}$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "exponentials",
      "modelling",
      "rate-of-change",
      "growth-rate"
    ],
    "questionText": "A savings balance is modelled by $A=A_{0}\\mathrm{e}^{kt}$, where $t$ is in years. Given that $A_{0}=\\pounds2000$ and the rate of increase at $t=0$ is $\\pounds160$ per year, find the value of $k$ and hence the balance when $t=3$ (exact and to 3 significant figures).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "A=A_{0}\\mathrm{e}^{kt},\\qquad A_{0}=2000",
          "explanation": "The balance grows exponentially with $A_{0}$ as the starting amount. We are told $A_{0}=2000$ but not $k$, so finding $k$ is the first goal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the model",
          "workingLatex": "\\frac{\\mathrm{d}A}{\\mathrm{d}t}=A_{0}k\\,\\mathrm{e}^{kt}",
          "explanation": "The rate of increase is the derivative. Differentiating $\\mathrm{e}^{kt}$ brings down a factor of $k$, giving $\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=A_{0}k\\,\\mathrm{e}^{kt}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the derivative at t = 0",
          "workingLatex": "\\left.\\frac{\\mathrm{d}A}{\\mathrm{d}t}\\right|_{t=0}=A_{0}k\\,\\mathrm{e}^{0}=A_{0}k",
          "explanation": "At $t=0$ the exponential is $\\mathrm{e}^{0}=1$, so the initial rate simplifies to just $A_{0}k$. This is the neat fact the question is built on.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the initial rate equal to 160",
          "workingLatex": "A_{0}k=160",
          "explanation": "We are told the balance is increasing at $\\pounds160$ per year when $t=0$, so we equate the initial rate $A_{0}k$ to $160$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the known initial value",
          "workingLatex": "2000k=160",
          "explanation": "Replacing $A_{0}$ with $2000$ turns this into a simple equation for $k$ with no exponentials left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k",
          "workingLatex": "k=\\frac{160}{2000}=0.08",
          "explanation": "Dividing both sides by $2000$ gives $k=0.08$. Because $k>0$ the balance is genuinely growing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the fully determined model",
          "workingLatex": "A=2000\\mathrm{e}^{0.08t}",
          "explanation": "Putting the values back in gives the complete model, which we can now use to predict any future balance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute t = 3",
          "workingLatex": "A(3)=2000\\mathrm{e}^{0.08\\times3}",
          "explanation": "To find the balance after $3$ years we replace $t$ with $3$ in the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the exponent",
          "workingLatex": "0.08\\times3=0.24\\ \\Rightarrow\\ A(3)=2000\\mathrm{e}^{0.24}",
          "explanation": "The exponent becomes $0.24$, so the exact balance is $2000\\mathrm{e}^{0.24}$. Leaving it in exact form keeps full accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Convert to a decimal",
          "workingLatex": "\\mathrm{e}^{0.24}\\approx1.27125\\ \\Rightarrow\\ 2000\\times1.27125",
          "explanation": "Using $\\mathrm{e}^{0.24}\\approx1.27125$ lets us evaluate the balance as a number of pounds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round to 3 significant figures",
          "workingLatex": "A(3)\\approx2542.50\\approx\\pounds2540",
          "explanation": "The product is about $\\pounds2542.50$, which rounds to $\\pounds2540$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify using the gradient property",
          "workingLatex": "\\frac{\\mathrm{d}A}{\\mathrm{d}t}=kA\\ \\Rightarrow\\ \\text{at }t=0:\\ 0.08\\times2000=160",
          "explanation": "The property $\\dfrac{\\mathrm{d}A}{\\mathrm{d}t}=kA$ recovers the given initial rate: $0.08\\times2000=160$, confirming $k=0.08$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check the growth",
          "workingLatex": "2540>2000",
          "explanation": "After $3$ years the balance exceeds the initial $\\pounds2000$, which is exactly what a positive growth rate predicts.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results",
          "workingLatex": "k=0.08,\\qquad A(3)=2000\\mathrm{e}^{0.24}\\approx\\pounds2540",
          "explanation": "The two requested quantities give the complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=0.08$; $A(3)=2000\\mathrm{e}^{0.24}\\approx\\pounds2540$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "exponentials",
      "proof",
      "rate-of-change",
      "modelling"
    ],
    "questionText": "For the function $y=A\\mathrm{e}^{kx}$, where $A$ and $k$ are constants, prove that $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=ky$, and interpret what this means for a growth model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function to be differentiated",
          "workingLatex": "y=A\\mathrm{e}^{kx}",
          "explanation": "We start from the general exponential $y=A\\mathrm{e}^{kx}$. The aim is to show that its derivative is a constant multiple of $y$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the derivative of e to a linear power",
          "workingLatex": "\\frac{\\mathrm{d}}{\\mathrm{d}x}\\big(\\mathrm{e}^{kx}\\big)=k\\mathrm{e}^{kx}",
          "explanation": "Using the chain rule, differentiating $\\mathrm{e}^{kx}$ multiplies by the derivative of the exponent $kx$, which is $k$. This is the one rule the whole proof depends on.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the full function",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=A\\cdot k\\mathrm{e}^{kx}",
          "explanation": "The constant $A$ simply carries through the differentiation, so we multiply it by the derivative of $\\mathrm{e}^{kx}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the constants",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=Ak\\mathrm{e}^{kx}=k\\big(A\\mathrm{e}^{kx}\\big)",
          "explanation": "Multiplication can be reordered, so we group the constant $k$ at the front and keep $A\\mathrm{e}^{kx}$ together in the bracket. This is the key algebraic move.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the original function",
          "workingLatex": "A\\mathrm{e}^{kx}=y",
          "explanation": "The bracket $A\\mathrm{e}^{kx}$ is exactly the original expression for $y$, so we can replace it with the single letter $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the proved result",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=ky\\qquad\\blacksquare",
          "explanation": "Substituting $y$ back in gives $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=ky$, which is precisely the statement we set out to prove.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the meaning of the result",
          "workingLatex": "\\text{rate of change}=k\\times(\\text{current amount})",
          "explanation": "The equation says the rate at which $y$ changes is proportional to how much $y$ there currently is, with $k$ as the constant of proportionality.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign of k for growth",
          "workingLatex": "k>0\\ \\Rightarrow\\ \\frac{\\mathrm{d}y}{\\mathrm{d}x}>0\\ (\\text{when }y>0)",
          "explanation": "For a growth model $k$ is positive, so the rate is positive whenever $y$ is positive: the quantity is always increasing, and it does so faster when there is more of it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Contrast with decay",
          "workingLatex": "k<0\\ \\Rightarrow\\ \\frac{\\mathrm{d}y}{\\mathrm{d}x}<0",
          "explanation": "By the same equation, a negative $k$ gives a negative rate, describing decay. The single result $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=ky$ captures both behaviours.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up a numerical check",
          "workingLatex": "\\text{Let }A=2,\\ k=3:\\ y=2\\mathrm{e}^{3x}",
          "explanation": "A concrete example is a good way to test the general result. We pick simple constants $A=2$ and $k=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Differentiate the example directly",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=6\\mathrm{e}^{3x}",
          "explanation": "Differentiating $2\\mathrm{e}^{3x}$ gives $2\\times3\\,\\mathrm{e}^{3x}=6\\mathrm{e}^{3x}$ directly from the chain rule.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with k times y",
          "workingLatex": "ky=3\\times2\\mathrm{e}^{3x}=6\\mathrm{e}^{3x}\\ \\checkmark",
          "explanation": "Computing $ky$ gives the same $6\\mathrm{e}^{3x}$, confirming the identity $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=ky$ in this specific case.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=ky",
          "explanation": "The proof and the check agree: for $y=A\\mathrm{e}^{kx}$ the rate of change is proportional to the amount present, which is the defining feature of exponential growth and decay.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=Ak\\mathrm{e}^{kx}=k(A\\mathrm{e}^{kx})=ky$, the rate of change is proportional to the current amount; for a growth model ($k>0$) the quantity increases faster the larger it becomes."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "equation",
    "tags": [
      "exponentials",
      "tangent",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=\\mathrm{e}^{2x}$ at the point $(1,\\mathrm{e}^{2})$, and find the exact coordinates of the point where this tangent meets the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the curve and the point",
          "workingLatex": "y=\\mathrm{e}^{2x},\\qquad (1,\\mathrm{e}^{2})",
          "explanation": "We need the tangent line at the given point. A tangent needs two ingredients: a point it passes through and its gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the point lies on the curve",
          "workingLatex": "x=1:\\ \\mathrm{e}^{2\\times1}=\\mathrm{e}^{2}\\ \\checkmark",
          "explanation": "Substituting $x=1$ gives $y=\\mathrm{e}^{2}$, matching the stated point, so the point genuinely lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=2\\mathrm{e}^{2x}",
          "explanation": "By the chain rule, differentiating $\\mathrm{e}^{2x}$ multiplies by the derivative of $2x$, which is $2$, giving $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=2\\mathrm{e}^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient at x = 1",
          "workingLatex": "m=\\left.\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=1}=2\\mathrm{e}^{2\\times1}=2\\mathrm{e}^{2}",
          "explanation": "Putting $x=1$ into the derivative gives the gradient of the tangent at that point: $m=2\\mathrm{e}^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-y_{1}=m(x-x_{1})",
          "explanation": "The straight-line form $y-y_{1}=m(x-x_{1})$ is the cleanest way to build a tangent from a point and a gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the point and gradient",
          "workingLatex": "y-\\mathrm{e}^{2}=2\\mathrm{e}^{2}(x-1)",
          "explanation": "We put $x_{1}=1$, $y_{1}=\\mathrm{e}^{2}$ and $m=2\\mathrm{e}^{2}$ into the form. Treating $\\mathrm{e}^{2}$ as an ordinary constant keeps the algebra tidy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the bracket",
          "workingLatex": "y-\\mathrm{e}^{2}=2\\mathrm{e}^{2}x-2\\mathrm{e}^{2}",
          "explanation": "Multiplying out the right-hand side gives $2\\mathrm{e}^{2}x-2\\mathrm{e}^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Make y the subject",
          "workingLatex": "y=2\\mathrm{e}^{2}x-2\\mathrm{e}^{2}+\\mathrm{e}^{2}",
          "explanation": "Adding $\\mathrm{e}^{2}$ to both sides isolates $y$. Now we just need to combine the constant terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the constant terms",
          "workingLatex": "y=2\\mathrm{e}^{2}x-\\mathrm{e}^{2}",
          "explanation": "Combining $-2\\mathrm{e}^{2}+\\mathrm{e}^{2}=-\\mathrm{e}^{2}$ gives the tidy equation of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set x = 0 to find the y-axis intercept",
          "workingLatex": "x=0:\\ y=2\\mathrm{e}^{2}(0)-\\mathrm{e}^{2}",
          "explanation": "A line meets the $y$-axis where $x=0$, so we substitute $x=0$ into the tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the intercept",
          "workingLatex": "y=-\\mathrm{e}^{2}\\ \\Rightarrow\\ (0,-\\mathrm{e}^{2})",
          "explanation": "The first term vanishes, leaving $y=-\\mathrm{e}^{2}$, so the tangent crosses the $y$-axis at $(0,-\\mathrm{e}^{2})$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Give a decimal for the intercept",
          "workingLatex": "-\\mathrm{e}^{2}\\approx-7.39",
          "explanation": "Since $\\mathrm{e}^{2}\\approx7.389$, the intercept is about $-7.39$, useful for sketching.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the tangent passes through the point of contact",
          "workingLatex": "x=1:\\ 2\\mathrm{e}^{2}(1)-\\mathrm{e}^{2}=\\mathrm{e}^{2}\\ \\checkmark",
          "explanation": "Substituting $x=1$ into the tangent gives $y=\\mathrm{e}^{2}$, which is the original point, confirming the line is correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results",
          "workingLatex": "y=2\\mathrm{e}^{2}x-\\mathrm{e}^{2},\\qquad (0,-\\mathrm{e}^{2})",
          "explanation": "The tangent equation and its $y$-axis intercept together answer the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $y=2\\mathrm{e}^{2}x-\\mathrm{e}^{2}$; it meets the $y$-axis at $(0,-\\mathrm{e}^{2})\\approx(0,-7.39)$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "exponentials",
      "normal",
      "differentiation"
    ],
    "questionText": "Find the equation of the normal to the curve $y=\\mathrm{e}^{x}$ at the point $(0,1)$, giving your answer in the form $y=mx+c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the curve and the point",
          "workingLatex": "y=\\mathrm{e}^{x},\\qquad (0,1)",
          "explanation": "The normal is the line perpendicular to the curve at the given point, so we first need the gradient of the curve there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the point lies on the curve",
          "workingLatex": "x=0:\\ \\mathrm{e}^{0}=1\\ \\checkmark",
          "explanation": "Substituting $x=0$ gives $y=1$, matching the stated point, so the point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\mathrm{e}^{x}",
          "explanation": "The function $\\mathrm{e}^{x}$ is special: it is its own derivative, so $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\mathrm{e}^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient of the tangent at x = 0",
          "workingLatex": "m_{\\text{t}}=\\left.\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=\\mathrm{e}^{0}=1",
          "explanation": "At $x=0$ the tangent gradient is $\\mathrm{e}^{0}=1$. The curve rises at exactly $45^{\\circ}$ here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the perpendicular gradient rule",
          "workingLatex": "m_{\\text{n}}=-\\frac{1}{m_{\\text{t}}}=-\\frac{1}{1}=-1",
          "explanation": "The normal is perpendicular to the tangent, and perpendicular gradients multiply to $-1$. So the normal gradient is $-\\dfrac{1}{1}=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y-y_{1}=m_{\\text{n}}(x-x_{1})",
          "explanation": "We build the normal line from the point $(0,1)$ and the gradient $-1$ using the point-gradient form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the point and normal gradient",
          "workingLatex": "y-1=-1(x-0)",
          "explanation": "Putting $x_{1}=0$, $y_{1}=1$ and $m_{\\text{n}}=-1$ into the form gives $y-1=-1(x-0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to the required form",
          "workingLatex": "y=-x+1",
          "explanation": "Expanding and adding $1$ to both sides gives $y=-x+1$, which is already in the form $y=mx+c$ with $m=-1$ and $c=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give an alternative rearranged form",
          "workingLatex": "x+y=1",
          "explanation": "Rearranging to $x+y=1$ is an equally valid way to present the normal; both describe the same line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the point lies on the normal",
          "workingLatex": "x=0:\\ y=-0+1=1\\ \\checkmark",
          "explanation": "Substituting $x=0$ into the normal gives $y=1$, confirming the line passes through $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify perpendicularity",
          "workingLatex": "m_{\\text{t}}\\times m_{\\text{n}}=1\\times(-1)=-1\\ \\checkmark",
          "explanation": "The product of the tangent and normal gradients is $-1$, which is the test for perpendicular lines, so the normal is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Contrast with the tangent line",
          "workingLatex": "\\text{tangent: }y=x+1,\\quad \\text{normal: }y=-x+1",
          "explanation": "The tangent at $(0,1)$ has gradient $1$, giving $y=x+1$; the normal has gradient $-1$, giving $y=-x+1$. The two lines cross at right angles, as a tangent and normal always should.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final result",
          "workingLatex": "y=-x+1",
          "explanation": "The normal to $y=\\mathrm{e}^{x}$ at $(0,1)$ is the line $y=-x+1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-x+1$ (equivalently $x+y=1$)."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "solving-equations",
      "substitution"
    ],
    "questionText": "Solve the equation $\\mathrm{e}^{2x}-4\\mathrm{e}^{x}+3=0$ by letting $u=\\mathrm{e}^{x}$. Give the exact solution and describe the second solution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the hidden quadratic",
          "workingLatex": "\\mathrm{e}^{2x}=\\big(\\mathrm{e}^{x}\\big)^{2}",
          "explanation": "The key observation is that $\\mathrm{e}^{2x}$ is the square of $\\mathrm{e}^{x}$. That means the equation is really a quadratic in disguise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the substitution",
          "workingLatex": "u=\\mathrm{e}^{x}\\ \\Rightarrow\\ \\mathrm{e}^{2x}=u^{2}",
          "explanation": "Letting $u=\\mathrm{e}^{x}$ turns the exponentials into a single variable, making the structure of the equation clear.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u",
          "workingLatex": "u^{2}-4u+3=0",
          "explanation": "Replacing $\\mathrm{e}^{2x}$ with $u^{2}$ and $\\mathrm{e}^{x}$ with $u$ gives an ordinary quadratic that we know how to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "(u-1)(u-3)=0",
          "explanation": "We need two numbers multiplying to $3$ and adding to $-4$; these are $-1$ and $-3$, giving the factors shown.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for u",
          "workingLatex": "u=1\\quad\\text{or}\\quad u=3",
          "explanation": "A product is zero only when one factor is zero, so either $u=1$ or $u=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the substitution constraint",
          "workingLatex": "u=\\mathrm{e}^{x}>0\\ \\text{for all }x",
          "explanation": "Since $\\mathrm{e}^{x}$ is always positive, only positive values of $u$ can be used. Both $1$ and $3$ are positive, so both are valid and must be examined.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Back-substitute the first solution",
          "workingLatex": "\\mathrm{e}^{x}=1",
          "explanation": "Returning to $x$, the first case is $\\mathrm{e}^{x}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the first case exactly",
          "workingLatex": "\\mathrm{e}^{x}=1=\\mathrm{e}^{0}\\ \\Rightarrow\\ x=0",
          "explanation": "Because $\\mathrm{e}^{0}=1$, matching the powers gives the clean exact solution $x=0$ with no logarithms needed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Back-substitute the second solution",
          "workingLatex": "\\mathrm{e}^{x}=3",
          "explanation": "The second case is $\\mathrm{e}^{x}=3$. This is the value of $x$ whose exponential equals $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Locate the second solution between known powers",
          "workingLatex": "\\mathrm{e}^{1}\\approx2.72<3<7.39\\approx\\mathrm{e}^{2}",
          "explanation": "Since $3$ lies between $\\mathrm{e}^{1}$ and $\\mathrm{e}^{2}$, the solution to $\\mathrm{e}^{x}=3$ must be between $x=1$ and $x=2$, closer to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the second solution as a value",
          "workingLatex": "\\mathrm{e}^{x}=3\\ \\Rightarrow\\ x\\approx1.10",
          "explanation": "From a calculator, the $x$ for which $\\mathrm{e}^{x}=3$ is approximately $1.10$. It cannot be written as a neat exact value without logarithms, so we describe it as the value where $\\mathrm{e}^{x}=3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the exact solution",
          "workingLatex": "x=0:\\ \\mathrm{e}^{0}-4\\mathrm{e}^{0}+3=1-4+3=0\\ \\checkmark",
          "explanation": "Substituting $x=0$ into the original equation gives $1-4+3=0$, confirming it is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the second solution",
          "workingLatex": "\\mathrm{e}^{x}=3:\\ 3^{2}-4(3)+3=9-12+3=0\\ \\checkmark",
          "explanation": "Using $\\mathrm{e}^{x}=3$ so that $\\mathrm{e}^{2x}=9$ gives $9-12+3=0$, confirming the second value also satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results",
          "workingLatex": "x=0\\quad\\text{or}\\quad x\\ \\text{with}\\ \\mathrm{e}^{x}=3\\ (x\\approx1.10)",
          "explanation": "The clean exact solution is $x=0$; the other solution is the value where $\\mathrm{e}^{x}=3$, approximately $1.10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=0$ (exact), and the value satisfying $\\mathrm{e}^{x}=3$, which is $x\\approx1.10$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "exponentials",
      "modelling",
      "curve-fitting",
      "rate-of-change"
    ],
    "questionText": "A curve has equation $y=A\\mathrm{e}^{kx}$ and passes through the points $(0,5)$ and $(1,5\\mathrm{e}^{2})$. Find the values of $A$ and $k$, and hence the gradient of the curve at $x=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and the given points",
          "workingLatex": "y=A\\mathrm{e}^{kx};\\quad (0,5),\\ (1,5\\mathrm{e}^{2})",
          "explanation": "Two unknown constants $A$ and $k$ need two pieces of information, and we are given exactly two points the curve passes through.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the first point",
          "workingLatex": "(0,5):\\ 5=A\\mathrm{e}^{k\\times0}",
          "explanation": "Using the point $(0,5)$, we set $x=0$ and $y=5$ in the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for A",
          "workingLatex": "5=A\\mathrm{e}^{0}=A\\times1\\ \\Rightarrow\\ A=5",
          "explanation": "Because $\\mathrm{e}^{0}=1$, the equation collapses to $A=5$. This is the general fact that $A$ is the $y$-value at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the second point",
          "workingLatex": "(1,5\\mathrm{e}^{2}):\\ 5\\mathrm{e}^{2}=A\\mathrm{e}^{k\\times1}",
          "explanation": "Now we use the second point $(1,5\\mathrm{e}^{2})$, setting $x=1$ and $y=5\\mathrm{e}^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Insert the known value of A",
          "workingLatex": "5\\mathrm{e}^{2}=5\\mathrm{e}^{k}",
          "explanation": "Replacing $A$ with $5$ gives an equation involving only $k$, which is what we want.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide both sides by 5",
          "workingLatex": "\\mathrm{e}^{2}=\\mathrm{e}^{k}",
          "explanation": "Dividing through by the common factor $5$ leaves a clean equation comparing two powers of $\\mathrm{e}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equate the indices",
          "workingLatex": "\\mathrm{e}^{k}=\\mathrm{e}^{2}\\ \\Rightarrow\\ k=2",
          "explanation": "Since the exponential function takes each value only once, equal outputs force equal exponents, so $k=2$ with no logarithms required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the determined curve",
          "workingLatex": "y=5\\mathrm{e}^{2x}",
          "explanation": "With $A=5$ and $k=2$ the curve is fully specified as $y=5\\mathrm{e}^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=5\\times2\\,\\mathrm{e}^{2x}=10\\mathrm{e}^{2x}",
          "explanation": "Differentiating $5\\mathrm{e}^{2x}$ brings down the factor $2$ from the exponent, giving $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=10\\mathrm{e}^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the gradient at x = 0",
          "workingLatex": "\\left.\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=10\\mathrm{e}^{0}=10",
          "explanation": "Putting $x=0$ into the derivative gives $10\\mathrm{e}^{0}=10$, so the curve has gradient $10$ at that point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify using the gradient property",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=ky\\ \\Rightarrow\\ 2\\times5=10\\ \\checkmark",
          "explanation": "The property $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=ky$ with $k=2$ and $y=5$ at $x=0$ gives $10$, confirming the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the second point",
          "workingLatex": "x=1:\\ 5\\mathrm{e}^{2\\times1}=5\\mathrm{e}^{2}\\ \\checkmark",
          "explanation": "Substituting $x=1$ into $y=5\\mathrm{e}^{2x}$ returns $5\\mathrm{e}^{2}$, matching the given point and confirming $A$ and $k$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final results",
          "workingLatex": "A=5,\\quad k=2,\\quad \\left.\\tfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{0}=10",
          "explanation": "The constants and the gradient at the origin together answer the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A=5$, $k=2$; the gradient at $x=0$ is $10$."
    }
  },
  {
    "id": "al.y1.pure.exponentials.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Exponential functions",
    "subtopicId": "al.y1.pure.exponentials",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "equation",
    "tags": [
      "exponentials",
      "asymptote",
      "tangent",
      "differentiation"
    ],
    "questionText": "For the curve $y=3\\mathrm{e}^{2x}+1$, state the equation of the horizontal asymptote and the $y$-intercept, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ and the gradient at $x=0$, and find the equation of the tangent at that point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the curve",
          "workingLatex": "y=3\\mathrm{e}^{2x}+1",
          "explanation": "This is an exponential term $3\\mathrm{e}^{2x}$ lifted upward by a constant $1$. The constant shift is what creates the horizontal asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Consider the behaviour as x tends to minus infinity",
          "workingLatex": "x\\to-\\infty:\\ 2x\\to-\\infty",
          "explanation": "To find the horizontal asymptote we see what $y$ approaches for very negative $x$, where the exponent $2x$ heads to $-\\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the exponential limit",
          "workingLatex": "\\mathrm{e}^{2x}\\to0\\ \\Rightarrow\\ 3\\mathrm{e}^{2x}\\to0",
          "explanation": "A large negative exponent sends $\\mathrm{e}^{2x}$ to $0$, so the exponential term disappears in that direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the horizontal asymptote",
          "workingLatex": "y\\to0+1=1\\ \\Rightarrow\\ y=1",
          "explanation": "With the exponential gone, only the constant $1$ remains, so the curve flattens towards the line $y=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-intercept",
          "workingLatex": "x=0:\\ y=3\\mathrm{e}^{0}+1",
          "explanation": "The $y$-intercept is where $x=0$, so we substitute $x=0$ into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=3\\times1+1=4\\ \\Rightarrow\\ (0,4)",
          "explanation": "Since $\\mathrm{e}^{0}=1$, the curve crosses the $y$-axis at $(0,4)$, which sits above the asymptote $y=1$ as expected.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{\\mathrm{d}y}{\\mathrm{d}x}=3\\times2\\,\\mathrm{e}^{2x}+0=6\\mathrm{e}^{2x}",
          "explanation": "Differentiating $3\\mathrm{e}^{2x}$ brings down the $2$ from the exponent, and the constant $1$ differentiates to $0$, giving $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=6\\mathrm{e}^{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the gradient at x = 0",
          "workingLatex": "\\left.\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=6\\mathrm{e}^{0}=6",
          "explanation": "Putting $x=0$ into the derivative gives $6\\mathrm{e}^{0}=6$, so the gradient at the $y$-intercept is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-y_{1}=m(x-x_{1})",
          "explanation": "We build the tangent at $(0,4)$ with gradient $6$ using the point-gradient form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the point and gradient",
          "workingLatex": "y-4=6(x-0)",
          "explanation": "Putting $x_{1}=0$, $y_{1}=4$ and $m=6$ into the form gives $y-4=6(x-0)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the tangent equation",
          "workingLatex": "y=6x+4",
          "explanation": "Expanding and adding $4$ to both sides gives the tidy tangent $y=6x+4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the intercept and asymptote relationship",
          "workingLatex": "3\\mathrm{e}^{2x}>0\\ \\Rightarrow\\ y>1",
          "explanation": "Because $3\\mathrm{e}^{2x}$ is always positive, the curve stays strictly above $y=1$, confirming $y=1$ is a genuine asymptote and the intercept $(0,4)$ lies above it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the tangent at the point of contact",
          "workingLatex": "x=0:\\ 6(0)+4=4\\ \\checkmark",
          "explanation": "Substituting $x=0$ into the tangent gives $y=4$, matching the point $(0,4)$, so the tangent is correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results",
          "workingLatex": "y=1;\\ (0,4);\\ \\tfrac{\\mathrm{d}y}{\\mathrm{d}x}=6\\mathrm{e}^{2x};\\ m_{0}=6;\\ y=6x+4",
          "explanation": "Collecting every requested part gives one complete answer for the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptote $y=1$; $y$-intercept $(0,4)$; $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=6\\mathrm{e}^{2x}$; gradient at $x=0$ is $6$; tangent $y=6x+4$."
    }
  }
];
