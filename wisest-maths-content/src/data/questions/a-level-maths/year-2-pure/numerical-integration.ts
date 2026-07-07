import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.numerical-integration.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "formula"
    ],
    "questionText": "State the trapezium rule for estimating $\\displaystyle\\int_a^b f(x)\\,dx$ using $n$ strips of equal width.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the strip width",
          "workingLatex": "h = \\dfrac{b-a}{n}",
          "explanation": "Divide the interval $[a,b]$ into $n$ equal sub-intervals, each of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the $x$-coordinates",
          "workingLatex": "x_0 = a,\\; x_1 = a+h,\\; \\ldots,\\; x_n = b",
          "explanation": "The ordinates are taken at the endpoints of each strip, including both ends of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weight the ordinates",
          "workingLatex": "y_0,\\; 2y_1,\\; 2y_2,\\; \\ldots,\\; 2y_{n-1},\\; y_n",
          "explanation": "The first and last ordinates appear once; every interior ordinate is counted twice because it borders two strips.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the weighted sum",
          "workingLatex": "S = y_0 + 2y_1 + 2y_2 + \\cdots + 2y_{n-1} + y_n",
          "explanation": "Add the weighted ordinates to approximate the total area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by half the strip width",
          "workingLatex": "\\displaystyle\\int_a^b f(x)\\,dx \\approx \\dfrac{h}{2}\\,S",
          "explanation": "Each trapezium has area $\\tfrac{h}{2}(y_i + y_{i+1})$; summing and simplifying gives the factor $\\tfrac{h}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the full rule",
          "workingLatex": "\\displaystyle\\int_a^b f(x)\\,dx \\approx \\dfrac{h}{2}\\bigl(y_0 + 2\\sum_{i=1}^{n-1} y_i + y_n\\bigr)",
          "explanation": "This is the standard trapezium rule formula used at A-Level.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_a^b f(x)\\,dx \\approx \\dfrac{h}{2}\\bigl(y_0 + 2y_1 + 2y_2 + \\cdots + 2y_{n-1} + y_n\\bigr)$ where $h = \\dfrac{b-a}{n}$ and $y_i = f(x_i)$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "concept"
    ],
    "questionText": "Explain in words what the trapezium rule does when approximating an integral.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace the curve with straight segments",
          "workingLatex": "\\text{curve } y=f(x) \\to \\text{ straight chords}",
          "explanation": "Instead of the actual curve, we join consecutive points with straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Each strip becomes a trapezium",
          "workingLatex": "\\text{area of each strip} \\approx \\text{area of a trapezium}",
          "explanation": "On each sub-interval the region between the chord and the $x$-axis is a trapezium.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum the trapezium areas",
          "workingLatex": "\\text{total estimate} = \\sum \\text{trapezium areas}",
          "explanation": "Adding the areas of all the trapezia gives an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "More strips usually improve accuracy",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{chords follow the curve more closely}",
          "explanation": "With more, narrower strips the straight lines hug the curve better, so the estimate typically improves.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Link to definite integration",
          "workingLatex": "\\displaystyle\\int_a^b f(x)\\,dx = \\text{exact area under } y=f(x)",
          "explanation": "The trapezium rule estimates this exact area when an antiderivative is awkward or unknown.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summary",
          "workingLatex": "\\text{chords} \\to \\text{trapezia} \\to \\text{approximate integral}",
          "explanation": "The rule turns a curved area problem into a sum of simple trapezium areas.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule approximates the area under $y = f(x)$ by replacing the curve with straight chords, finding the area of each trapezium formed, and summing them."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "strip width",
      "trapezium rule"
    ],
    "questionText": "The interval $[2, 10]$ is divided into $4$ strips of equal width. Find $h$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the width formula",
          "workingLatex": "h = \\dfrac{b-a}{n}",
          "explanation": "Equal strips mean each has width $h = (b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $a = 2$, $b = 10$, $n = 4$",
          "workingLatex": "h = \\dfrac{10-2}{4} = \\dfrac{8}{4}",
          "explanation": "The total interval length is $8$, split into $4$ parts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "h = 2",
          "explanation": "Each strip is $2$ units wide.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List the $x$-values (check)",
          "workingLatex": "x = 2,\\; 4,\\; 6,\\; 8,\\; 10",
          "explanation": "Five ordinates are needed for $4$ strips: the endpoints plus three interior points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify spacing",
          "workingLatex": "10 - 2 = 4 \\times 2",
          "explanation": "Four strips of width $2$ exactly cover $[2,10]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "h = 2",
          "explanation": "The strip width is $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$h = 2$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "linear"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{0}^{4} (x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{4-0}{4} = 1",
          "explanation": "Divide the interval length by the number of strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the $x$-values",
          "workingLatex": "x: 0,\\; 1,\\; 2,\\; 3,\\; 4",
          "explanation": "Start at $x = a$ and add $h$ each time until $x = b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $y = f(x)$ at each point",
          "workingLatex": "y_0=0,\\; y_1=1,\\; y_2=2,\\; y_3=3,\\; y_4=4",
          "explanation": "Substitute each $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the weighting pattern",
          "workingLatex": "y_0 + 2y_1 + \\cdots + 2y_{3} + y_4 = 16",
          "explanation": "End ordinates count once; interior ordinates count twice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\tfrac{h}{2}$",
          "workingLatex": "\\dfrac{1}{2} \\times 16 = 8",
          "explanation": "This gives the trapezium-rule estimate of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note exactness for linear functions",
          "workingLatex": "\\text{Estimate} = 8 = 8 \\text{ (exact for a linear function)}",
          "explanation": "For a straight-line graph the chords lie on the curve, so the trapezium rule is exact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "linear"
    ],
    "questionText": "Use the trapezium rule with $n = 3$ strips to estimate $\\displaystyle\\int_{0}^{3} (2x + 1)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{3-0}{3} = 1",
          "explanation": "Divide the interval length by the number of strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the $x$-values",
          "workingLatex": "x: 0,\\; 1,\\; 2,\\; 3",
          "explanation": "Start at $x = a$ and add $h$ each time until $x = b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $y = f(x)$ at each point",
          "workingLatex": "y_0=1,\\; y_1=3,\\; y_2=5,\\; y_3=7",
          "explanation": "Substitute each $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the weighting pattern",
          "workingLatex": "y_0 + 2y_1 + \\cdots + 2y_{2} + y_3 = 24",
          "explanation": "End ordinates count once; interior ordinates count twice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\tfrac{h}{2}$",
          "workingLatex": "\\dfrac{1}{2} \\times 24 = 12",
          "explanation": "This gives the trapezium-rule estimate of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note exactness for linear functions",
          "workingLatex": "\\text{Estimate} = 12 = 12 \\text{ (exact for a linear function)}",
          "explanation": "For a straight-line graph the chords lie on the curve, so the trapezium rule is exact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$12$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "constant"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{1}^{5} (5)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{5-1}{4} = 1",
          "explanation": "Divide the interval length by the number of strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the $x$-values",
          "workingLatex": "x: 1,\\; 2,\\; 3,\\; 4,\\; 5",
          "explanation": "Start at $x = a$ and add $h$ each time until $x = b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $y = f(x)$ at each point",
          "workingLatex": "y_0=5,\\; y_1=5,\\; y_2=5,\\; y_3=5,\\; y_4=5",
          "explanation": "Substitute each $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the weighting pattern",
          "workingLatex": "y_0 + 2y_1 + \\cdots + 2y_{3} + y_4 = 40",
          "explanation": "End ordinates count once; interior ordinates count twice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\tfrac{h}{2}$",
          "workingLatex": "\\dfrac{1}{2} \\times 40 = 20",
          "explanation": "This gives the trapezium-rule estimate of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm with geometry",
          "workingLatex": "\\text{Estimate} = 20 = 20 \\text{ (rectangle area)}",
          "explanation": "For a straight-line graph the chords lie on the curve, so the trapezium rule is exact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$20$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "linear"
    ],
    "questionText": "Use the trapezium rule with $n = 3$ strips to estimate $\\displaystyle\\int_{0}^{3} (3 - x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{3-0}{3} = 1",
          "explanation": "Divide the interval length by the number of strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the $x$-values",
          "workingLatex": "x: 0,\\; 1,\\; 2,\\; 3",
          "explanation": "Start at $x = a$ and add $h$ each time until $x = b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $y = f(x)$ at each point",
          "workingLatex": "y_0=3,\\; y_1=2,\\; y_2=1,\\; y_3=0",
          "explanation": "Substitute each $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the weighting pattern",
          "workingLatex": "y_0 + 2y_1 + \\cdots + 2y_{2} + y_3 = 9",
          "explanation": "End ordinates count once; interior ordinates count twice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $\\tfrac{h}{2}$",
          "workingLatex": "\\dfrac{1}{2} \\times 9 = 4.5",
          "explanation": "This gives the trapezium-rule estimate of the integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note exactness for linear functions",
          "workingLatex": "\\text{Estimate} = 4.5 = 4.5 \\text{ (exact for a linear function)}",
          "explanation": "For a straight-line graph the chords lie on the curve, so the trapezium rule is exact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.5$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "quadratic"
    ],
    "questionText": "Use the trapezium rule with $n = 2$ strips to estimate $\\displaystyle\\int_{0}^{1} x^2\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = \\dfrac{1-0}{2} = 0.5",
          "explanation": "Compute $h = (b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "f(0)=0,\\; f(0.5)=0.25,\\; f(1)=1",
          "explanation": "Evaluate $f(x)=x^2$ at each required $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "y_0 + 2y_1 + y_2 = 1.5",
          "explanation": "Apply the trapezium-rule weighting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Estimate",
          "workingLatex": "\\dfrac{0.5}{2} \\times 1.5 = 0.375",
          "explanation": "Multiply the weighted sum by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact value (for comparison)",
          "workingLatex": "\\displaystyle\\int_{0}^{1} x^2\\,dx = 0.3333",
          "explanation": "Integrating exactly lets us see how close the estimate is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment on accuracy",
          "workingLatex": "\\text{estimate } 0.375 \\text{ vs exact } 0.3333",
          "explanation": "With only a few strips the estimate is reasonable but not exact because $x^2$ is curved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.375$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "quadratic"
    ],
    "questionText": "Use the trapezium rule with $n = 2$ strips to estimate $\\displaystyle\\int_{0}^{2} x^2\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = \\dfrac{2-0}{2} = 1",
          "explanation": "Compute $h = (b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "f(0)=0,\\; f(1)=1,\\; f(2)=4",
          "explanation": "Evaluate $f(x)=x^2$ at each required $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "y_0 + 2y_1 + y_2 = 6",
          "explanation": "Apply the trapezium-rule weighting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Estimate",
          "workingLatex": "\\dfrac{1}{2} \\times 6 = 3",
          "explanation": "Multiply the weighted sum by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact value (for comparison)",
          "workingLatex": "\\displaystyle\\int_{0}^{2} x^2\\,dx = 2.6667",
          "explanation": "Integrating exactly lets us see how close the estimate is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment on accuracy",
          "workingLatex": "\\text{estimate } 3 \\text{ vs exact } 2.6667",
          "explanation": "With only a few strips the estimate is reasonable but not exact because $x^2$ is curved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "quadratic"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{1}^{3} x^2\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = \\dfrac{3-1}{4} = 0.5",
          "explanation": "Compute $h = (b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "f(1)=1,\\; f(1.5)=2.25,\\; f(2)=4,\\; f(2.5)=6.25,\\; f(3)=9",
          "explanation": "Evaluate $f(x)=x^2$ at each required $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "y_0 + 2y_1 + 2y_2 + 2y_3 + y_4 = 35",
          "explanation": "Apply the trapezium-rule weighting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Estimate",
          "workingLatex": "\\dfrac{0.5}{2} \\times 35 = 8.75",
          "explanation": "Multiply the weighted sum by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact value (for comparison)",
          "workingLatex": "\\displaystyle\\int_{1}^{3} x^2\\,dx = 8.6667",
          "explanation": "Integrating exactly lets us see how close the estimate is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment on accuracy",
          "workingLatex": "\\text{estimate } 8.75 \\text{ vs exact } 8.6667",
          "explanation": "With only a few strips the estimate is reasonable but not exact because $x^2$ is curved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8.75$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "quadratic"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{0}^{1} x^2\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = \\dfrac{1-0}{4} = 0.25",
          "explanation": "Compute $h = (b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "f(0)=0,\\; f(0.25)=0.0625,\\; f(0.5)=0.25,\\; f(0.75)=0.5625,\\; f(1)=1",
          "explanation": "Evaluate $f(x)=x^2$ at each required $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "y_0 + 2y_1 + 2y_2 + 2y_3 + y_4 = 2.75",
          "explanation": "Apply the trapezium-rule weighting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Estimate",
          "workingLatex": "\\dfrac{0.25}{2} \\times 2.75 = 0.3438",
          "explanation": "Multiply the weighted sum by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact value (for comparison)",
          "workingLatex": "\\displaystyle\\int_{0}^{1} x^2\\,dx = 0.3333",
          "explanation": "Integrating exactly lets us see how close the estimate is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment on accuracy",
          "workingLatex": "\\text{estimate } 0.3438 \\text{ vs exact } 0.3333",
          "explanation": "With only a few strips the estimate is reasonable but not exact because $x^2$ is curved.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.3438$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "over-estimate",
      "concavity"
    ],
    "questionText": "The graph of $y = f(x)$ is concave up on $[a, b]$. Does the trapezium rule give an over-estimate or an under-estimate of $\\displaystyle\\int_a^b f(x)\\,dx$? Explain briefly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Picture a concave-up curve",
          "workingLatex": "f''(x) > 0 \\Rightarrow \\text{curve bends upward}",
          "explanation": "A concave-up graph lies below its tangents and the chords sit above the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare chord and curve on one strip",
          "workingLatex": "\\text{chord} \\ge \\text{curve on that strip}",
          "explanation": "On each sub-interval the straight chord lies on or above the actual graph.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium area vs true area",
          "workingLatex": "\\text{trapezium area} \\ge \\text{true area under curve}",
          "explanation": "Each approximating trapezium covers at least as much area as the curve beneath it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum over all strips",
          "workingLatex": "\\text{total trapezium area} \\ge \\int_a^b f(x)\\,dx",
          "explanation": "Adding the inequalities strip by strip gives an over-estimate overall.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Everyday check: $y = x^2$",
          "workingLatex": "\\text{chords above the parabola on } [0,1]",
          "explanation": "For a parabola opening upward, straight chords bulge above the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{over-estimate}",
          "explanation": "Concave up $\\Rightarrow$ trapezium rule over-estimates the integral.",
          "diagram": null
        }
      ],
      "finalAnswer": "**Over-estimate.** When the curve is concave up, each chord lies above the graph, so the trapezium areas are too large."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "under-estimate",
      "concavity"
    ],
    "questionText": "The graph of $y = f(x)$ is concave down on $[a, b]$. Does the trapezium rule give an over-estimate or an under-estimate? Explain briefly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Concave down means bending downward",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{arch shape}",
          "explanation": "The graph curves like an inverted bowl.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Chord lies below the curve on a strip",
          "workingLatex": "\\text{chord} < \\text{curve between endpoints}",
          "explanation": "For a concave-down function, the straight chord joining two points lies below the graph between them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare areas on one strip",
          "workingLatex": "\\text{trapezium area} < \\text{true area under curve}",
          "explanation": "Each approximating trapezium misses area because the chord cuts under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the strips",
          "workingLatex": "\\text{total estimate} < \\int_a^b f(x)\\,dx",
          "explanation": "Adding the inequalities strip by strip gives an under-estimate overall.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example: $y = \\sqrt{x}$ on $[0,1]$",
          "workingLatex": "\\text{chords cut under the curve}",
          "explanation": "Root functions are concave down for $x>0$; chords miss area near the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{under-estimate}",
          "explanation": "Concave down $\\Rightarrow$ trapezium rule under-estimates.",
          "diagram": null
        }
      ],
      "finalAnswer": "**Under-estimate.** When the curve is concave down, chords lie below the graph, so the trapezium areas are too small."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "over-estimate",
      "quadratic"
    ],
    "questionText": "Use the trapezium rule with $n = 2$ strips to estimate $\\displaystyle\\int_0^2 x^2\\,dx$. State whether your estimate is an over-estimate or an under-estimate, giving a reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Width",
          "workingLatex": "h = 1",
          "explanation": "Two strips on $[0,2]$ each have width $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "f(0)=0,\\; f(1)=1,\\; f(2)=4",
          "explanation": "Evaluate $y=x^2$ at $x=0,1,2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium rule",
          "workingLatex": "\\dfrac{1}{2}(0 + 2(1) + 4) = \\dfrac{1}{2}(6) = 3",
          "explanation": "Apply $\\tfrac{h}{2}(y_0+2y_1+y_2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exact integral",
          "workingLatex": "\\displaystyle\\int_0^2 x^2\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^2 = \\dfrac{8}{3}",
          "explanation": "The true area is $\\tfrac{8}{3} \\approx 2.67$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "3 > \\dfrac{8}{3}",
          "explanation": "The estimate is larger than the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reason via concavity",
          "workingLatex": "x^2 \\text{ is concave up on } [0,2] \\Rightarrow \\text{over-estimate}",
          "explanation": "A concave-up parabola lies below its chords, so trapezia are too large.",
          "diagram": null
        }
      ],
      "finalAnswer": "Estimate $= 3$. This is an **over-estimate** because $y = x^2$ is concave up on $[0,2]$ (exact value $= \\tfrac{8}{3}$)."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "under-estimate",
      "square root"
    ],
    "questionText": "Use the trapezium rule with $n = 2$ strips to estimate $\\displaystyle\\int_0^4 \\sqrt{x}\\,dx$. State whether the estimate is an over-estimate or an under-estimate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 2",
          "explanation": "On $[0,4]$ with $n=2$, each strip has width $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "f(0)=0,\\; f(2)=\\sqrt{2},\\; f(4)=2",
          "explanation": "Evaluate $y=\\sqrt{x}$ at the endpoints and midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimate",
          "workingLatex": "\\dfrac{2}{2}(0 + 2\\sqrt{2} + 2) = 2 + 2\\sqrt{2} \\approx 4.8284",
          "explanation": "Substitute into the trapezium-rule formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exact value",
          "workingLatex": "\\displaystyle\\int_0^4 \\sqrt{x}\\,dx = \\left[\\dfrac{2}{3}x^{3/2}\\right]_0^4 = \\dfrac{16}{3}",
          "explanation": "The exact area is $\\tfrac{16}{3} \\approx 5.33$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "4.8284 < \\dfrac{16}{3}",
          "explanation": "The trapezium estimate is smaller than the true integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concavity reason",
          "workingLatex": "\\sqrt{x} \\text{ is concave down for } x>0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Chords lie below a concave-down curve, missing area.",
          "diagram": null
        }
      ],
      "finalAnswer": "Estimate $\\approx 4.8284$. This is an **under-estimate** because $y=\\sqrt{x}$ is concave down on $(0,4]$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "strip width"
    ],
    "questionText": "For the trapezium rule on $[0, \\pi]$ with $6$ strips, find $h$ and list the $x$-values at which ordinates are taken.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Width",
          "workingLatex": "h = \\dfrac{\\pi - 0}{6} = \\dfrac{\\pi}{6}",
          "explanation": "Six equal strips on $[0,\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start at $x_0$",
          "workingLatex": "x_0 = 0",
          "explanation": "The first ordinate is at the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interior points",
          "workingLatex": "x_1 = \\dfrac{\\pi}{6},\\; x_2 = \\dfrac{\\pi}{3},\\; x_3 = \\dfrac{\\pi}{2},\\; x_4 = \\dfrac{2\\pi}{3},\\; x_5 = \\dfrac{5\\pi}{6}",
          "explanation": "Add $h$ repeatedly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Final point",
          "workingLatex": "x_6 = \\pi",
          "explanation": "The last ordinate is at the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count ordinates",
          "workingLatex": "7 \\text{ ordinates for } 6 \\text{ strips}",
          "explanation": "There are always $n+1$ ordinates for $n$ strips.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "h = \\dfrac{\\pi}{6};\\; x = 0,\\, \\dfrac{\\pi}{6},\\, \\dfrac{\\pi}{3},\\, \\dfrac{\\pi}{2},\\, \\dfrac{2\\pi}{3},\\, \\dfrac{5\\pi}{6},\\, \\pi",
          "explanation": "These are the inputs needed for the rule.",
          "diagram": null
        }
      ],
      "finalAnswer": "$h = \\dfrac{\\pi}{6}$; ordinates at $x = 0,\\, \\dfrac{\\pi}{6},\\, \\dfrac{\\pi}{3},\\, \\dfrac{\\pi}{2},\\, \\dfrac{2\\pi}{3},\\, \\dfrac{5\\pi}{6},\\, \\pi$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "table"
    ],
    "questionText": "The table gives values of $f(x)$ on $[0, 4]$ with strips of width $1$.\n\n| $x$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $f(x)$ | 3 | 5 | 4 | 6 | 2 |\n\nUse the trapezium rule to estimate $\\displaystyle\\int_0^4 f(x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify $n$ and $h$",
          "workingLatex": "n = 4,\\; h = 1",
          "explanation": "Four strips of width $1$ on $[0,4]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read ordinates",
          "workingLatex": "y_0=3,\\; y_1=5,\\; y_2=4,\\; y_3=6,\\; y_4=2",
          "explanation": "Take values directly from the table.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "3 + 2(5) + 2(4) + 2(6) + 2 = 3 + 10 + 8 + 12 + 2 = 35",
          "explanation": "End values once; interior values twice.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply $\\tfrac{h}{2}$",
          "workingLatex": "\\dfrac{1}{2} \\times 35 = 17.5",
          "explanation": "Multiply by $h/2$ with $h=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Units check",
          "workingLatex": "\\text{area units} = (y\\text{-units})\\times(x\\text{-units})",
          "explanation": "The integral estimates accumulated quantity over $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State estimate",
          "workingLatex": "\\displaystyle\\int_0^4 f(x)\\,dx \\approx 17.5",
          "explanation": "This is the trapezium-rule approximation from the table.",
          "diagram": null
        }
      ],
      "finalAnswer": "$17.5$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "exact",
      "linear"
    ],
    "questionText": "Explain why the trapezium rule gives the **exact** value of $\\displaystyle\\int_1^5 (2x - 3)\\,dx$ for any number of strips $n \\ge 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "The integrand is linear",
          "workingLatex": "f(x) = 2x - 3 \\Rightarrow \\text{graph is a straight line}",
          "explanation": "No curvature means no gap between curve and chords.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Chords coincide with the graph",
          "workingLatex": "\\text{chord between two points on a line } = \\text{the line itself}",
          "explanation": "Any straight segment joining two points on a line lies exactly on that line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium areas match true areas",
          "workingLatex": "\\text{each strip: trapezium area} = \\text{true area under line}",
          "explanation": "There is no missing or extra area on any sub-interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Summing gives the exact integral",
          "workingLatex": "\\sum \\text{strip areas} = \\int_1^5 (2x-3)\\,dx",
          "explanation": "The approximation equals the true area for every $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Algebraic check",
          "workingLatex": "\\displaystyle\\int_1^5 (2x-3)\\,dx = [x^2-3x]_1^5 = 10",
          "explanation": "Direct integration gives $10$; the trapezium rule also gives $10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "General principle",
          "workingLatex": "\\text{linear } f \\Rightarrow \\text{trapezium rule exact}",
          "explanation": "Exactness holds for any linear function on any interval with any $n \\ge 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Because $y = 2x - 3$ is a straight line, every chord lies on the graph, so each trapezium area equals the true area under the line and the rule is exact for any $n$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "exponential"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{0}^{1} e^x\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.25",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(0)=1,\\; f(0.25)=1.284,\\; f(0.5)=1.6487,\\; f(0.75)=2.117,\\; f(1)=2.7183",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 13.8178",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{0.25}{2} \\times 13.8178 = 1.727",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 1.727",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1.727$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "trigonometric"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{0}^{\\pi} \\sin x\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.7854",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(0)=0,\\; f(0.7854)=0.7071,\\; f(\\dfrac{\\pi}{2})=1,\\; f(2.3562)=0.7071,\\; f(\\pi)=0",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 4.8284",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{0.7854}{2} \\times 4.8284 = 1.896",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 1.896",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1.896$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "trigonometric"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{0}^{\\dfrac{\\pi}{2}} \\cos x\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.3927",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(0)=1,\\; f(0.3927)=0.9239,\\; f(0.7854)=0.7071,\\; f(1.1781)=0.3827,\\; f(\\dfrac{\\pi}{2})=0",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 5.0273",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{0.3927}{2} \\times 5.0273 = 0.987",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 0.987",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.987$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "reciprocal"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{1}^{3} \\dfrac{1}{x}\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(1)=1,\\; f(1.5)=0.6667,\\; f(2)=0.5,\\; f(2.5)=0.4,\\; f(3)=0.3333",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 4.4667",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{0.5}{2} \\times 4.4667 = 1.117",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 1.117",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1.117$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "cubic"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{0}^{2} x^3\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(0)=0,\\; f(0.5)=0.125,\\; f(1)=1,\\; f(1.5)=3.375,\\; f(2)=8",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 17",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{0.5}{2} \\times 17 = 4.25",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 4.25",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.25$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "exponential"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{0}^{2} 2^x\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(0)=1,\\; f(0.5)=1.4142,\\; f(1)=2,\\; f(1.5)=2.8284,\\; f(2)=4",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 17.4853",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{0.5}{2} \\times 17.4853 = 4.371",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 4.371",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.371$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "quadratic"
    ],
    "questionText": "Use the trapezium rule with $n = 6$ strips to estimate $\\displaystyle\\int_{0}^{2} x^2 + 1\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.3333",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(0)=1,\\; f(0.3333)=1.1111,\\; f(0.6667)=1.4444,\\; f(1)=2,\\; f(1.3333)=2.7778,\\; f(1.6667)=3.7778,\\; f(2)=5",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 28.2222",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{0.3333}{2} \\times 28.2222 = 4.704",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 4.704",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.704$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "square root"
    ],
    "questionText": "Use the trapezium rule with $n = 4$ strips to estimate $\\displaystyle\\int_{1}^{9} \\sqrt{x}\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 2",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(1)=1,\\; f(3)=1.7321,\\; f(5)=2.2361,\\; f(7)=2.6458,\\; f(9)=3",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 17.2277",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{2}{2} \\times 17.2277 = 17.228",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 17.228",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$17.228$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "quadratic"
    ],
    "questionText": "Use the trapezium rule with $n = 6$ strips to estimate $\\displaystyle\\int_{0}^{3} x^2\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(0)=0,\\; f(0.5)=0.25,\\; f(1)=1,\\; f(1.5)=2.25,\\; f(2)=4,\\; f(2.5)=6.25,\\; f(3)=9",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 36.5",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{0.5}{2} \\times 36.5 = 9.125",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 9.125",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$9.125$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "trigonometric"
    ],
    "questionText": "Use the trapezium rule with $n = 6$ strips to estimate $\\displaystyle\\int_{0}^{\\pi} \\sin x\\,dx$. Give your answer to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.5236",
          "explanation": "Compute $h=(b-a)/n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate ordinates",
          "workingLatex": "f(0)=0,\\; f(0.5236)=0.5,\\; f(1.0472)=0.866,\\; f(\\dfrac{\\pi}{2})=1,\\; f(2.0944)=0.866,\\; f(2.618)=0.5,\\; f(\\pi)=0",
          "explanation": "Substitute each required $x$-value into the integrand.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the weighted sum",
          "workingLatex": "S = 7.4641",
          "explanation": "Apply $y_0 + 2y_1 + \\cdots + 2y_{n-1} + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{0.5236}{2} \\times 7.4641 = 1.954",
          "explanation": "This is the trapezium-rule estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round appropriately",
          "workingLatex": "\\approx 1.954",
          "explanation": "Give the final value to three decimal places as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sanity check",
          "workingLatex": "\\text{positive integrand } \\Rightarrow \\text{positive estimate}",
          "explanation": "A quick sign/size check helps catch arithmetic slips.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1.954$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "accuracy"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{2} x^2\\,dx$ using the trapezium rule with (i) $n=2$ strips and (ii) $n=4$ strips. Which estimate is likely to be more accurate?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Case (i): $n=2$",
          "workingLatex": "h = 1;\\; \\text{estimate} \\approx 3",
          "explanation": "Apply the rule with fewer strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Case (ii): $n=4$",
          "workingLatex": "h = 0.5;\\; \\text{estimate} \\approx 2.75",
          "explanation": "Halving $h$ by doubling the number of strips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the two estimates",
          "workingLatex": "3 \\text{ vs } 2.75",
          "explanation": "See how the value changes when strips are refined.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General principle",
          "workingLatex": "n \\uparrow \\Rightarrow h \\downarrow \\Rightarrow \\text{better fit to curve}",
          "explanation": "More strips mean chords follow the graph more closely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the better estimate",
          "workingLatex": "n=4 \\text{ is more accurate}",
          "explanation": "The estimate with twice as many strips is typically closer to the true integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note on concavity",
          "workingLatex": "\\text{refining strips reduces error (usually)}",
          "explanation": "Unless the function is linear, extra strips improve the approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(i) $3$; (ii) $2.75$. The $n=4$ estimate is more accurate."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "accuracy"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{1} x^2\\,dx$ using the trapezium rule with (i) $n=2$ strips and (ii) $n=4$ strips. Which estimate is likely to be more accurate?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Case (i): $n=2$",
          "workingLatex": "h = 0.5;\\; \\text{estimate} \\approx 0.375",
          "explanation": "Apply the rule with fewer strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Case (ii): $n=4$",
          "workingLatex": "h = 0.25;\\; \\text{estimate} \\approx 0.3438",
          "explanation": "Halving $h$ by doubling the number of strips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the two estimates",
          "workingLatex": "0.375 \\text{ vs } 0.3438",
          "explanation": "See how the value changes when strips are refined.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General principle",
          "workingLatex": "n \\uparrow \\Rightarrow h \\downarrow \\Rightarrow \\text{better fit to curve}",
          "explanation": "More strips mean chords follow the graph more closely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the better estimate",
          "workingLatex": "n=4 \\text{ is more accurate}",
          "explanation": "The estimate with twice as many strips is typically closer to the true integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note on concavity",
          "workingLatex": "\\text{refining strips reduces error (usually)}",
          "explanation": "Unless the function is linear, extra strips improve the approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(i) $0.375$; (ii) $0.3438$. The $n=4$ estimate is more accurate."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "accuracy"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{1}^{4} \\sqrt{x}\\,dx$ using the trapezium rule with (i) $n=3$ strips and (ii) $n=6$ strips. Which estimate is likely to be more accurate?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Case (i): $n=3$",
          "workingLatex": "h = 1;\\; \\text{estimate} \\approx 4.6463",
          "explanation": "Apply the rule with fewer strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Case (ii): $n=6$",
          "workingLatex": "h = 0.5;\\; \\text{estimate} \\approx 4.6615",
          "explanation": "Halving $h$ by doubling the number of strips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the two estimates",
          "workingLatex": "4.6463 \\text{ vs } 4.6615",
          "explanation": "See how the value changes when strips are refined.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General principle",
          "workingLatex": "n \\uparrow \\Rightarrow h \\downarrow \\Rightarrow \\text{better fit to curve}",
          "explanation": "More strips mean chords follow the graph more closely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the better estimate",
          "workingLatex": "n=6 \\text{ is more accurate}",
          "explanation": "The estimate with twice as many strips is typically closer to the true integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note on concavity",
          "workingLatex": "\\text{refining strips reduces error (usually)}",
          "explanation": "Unless the function is linear, extra strips improve the approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(i) $4.6463$; (ii) $4.6615$. The $n=6$ estimate is more accurate."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "percentage error",
      "trapezium rule"
    ],
    "questionText": "The trapezium rule with $n = 4$ strips gives an estimate of $2.75$ for $\\displaystyle\\int_{0}^{2} f(x)\\,dx$. Given that the exact value is $2.6667$, find the percentage error.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall percentage error formula",
          "workingLatex": "\\text{percentage error} = \\dfrac{|\\text{estimate} - \\text{exact}|}{|\\text{exact}|} \\times 100\\%",
          "explanation": "Measure relative error against the true value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the absolute difference",
          "workingLatex": "|2.75 - 2.6667| = 0.0833",
          "explanation": "Subtract and take modulus.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the exact value",
          "workingLatex": "\\dfrac{0.0833}{2.6667}",
          "explanation": "Normalise by the true integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to percentage",
          "workingLatex": "\\times 100\\% = 3.13\\%",
          "explanation": "Multiply by $100$ for a percentage.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{error } \\approx 3.1\\%",
          "explanation": "This quantifies how far the trapezium estimate is from the exact area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Could improve by increasing $n$",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{error usually decreases}",
          "explanation": "More strips would typically shrink this percentage.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3.13\\%$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "percentage error",
      "trapezium rule"
    ],
    "questionText": "The trapezium rule with $n = 4$ strips gives an estimate of $1.8961$ for $\\displaystyle\\int_{0}^{3.141592653589793} f(x)\\,dx$. Given that the exact value is $2$, find the percentage error.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall percentage error formula",
          "workingLatex": "\\text{percentage error} = \\dfrac{|\\text{estimate} - \\text{exact}|}{|\\text{exact}|} \\times 100\\%",
          "explanation": "Measure relative error against the true value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the absolute difference",
          "workingLatex": "|1.8961 - 2| = 0.1039",
          "explanation": "Subtract and take modulus.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the exact value",
          "workingLatex": "\\dfrac{0.1039}{2}",
          "explanation": "Normalise by the true integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to percentage",
          "workingLatex": "\\times 100\\% = 5.19\\%",
          "explanation": "Multiply by $100$ for a percentage.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{error } \\approx 5.2\\%",
          "explanation": "This quantifies how far the trapezium estimate is from the exact area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Could improve by increasing $n$",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{error usually decreases}",
          "explanation": "More strips would typically shrink this percentage.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5.19\\%$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "percentage error",
      "trapezium rule"
    ],
    "questionText": "The trapezium rule with $n = 4$ strips gives an estimate of $1.7272$ for $\\displaystyle\\int_{0}^{1} f(x)\\,dx$. Given that the exact value is $1.7183$, find the percentage error.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall percentage error formula",
          "workingLatex": "\\text{percentage error} = \\dfrac{|\\text{estimate} - \\text{exact}|}{|\\text{exact}|} \\times 100\\%",
          "explanation": "Measure relative error against the true value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the absolute difference",
          "workingLatex": "|1.7272 - 1.7183| = 0.0089",
          "explanation": "Subtract and take modulus.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the exact value",
          "workingLatex": "\\dfrac{0.0089}{1.7183}",
          "explanation": "Normalise by the true integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to percentage",
          "workingLatex": "\\times 100\\% = 0.52\\%",
          "explanation": "Multiply by $100$ for a percentage.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{error } \\approx 0.5\\%",
          "explanation": "This quantifies how far the trapezium estimate is from the exact area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Could improve by increasing $n$",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{error usually decreases}",
          "explanation": "More strips would typically shrink this percentage.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.52\\%$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "percentage error",
      "trapezium rule"
    ],
    "questionText": "The trapezium rule with $n = 4$ strips gives an estimate of $0.697$ for $\\displaystyle\\int_{1}^{2} f(x)\\,dx$. Given that the exact value is $0.6931$, find the percentage error.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall percentage error formula",
          "workingLatex": "\\text{percentage error} = \\dfrac{|\\text{estimate} - \\text{exact}|}{|\\text{exact}|} \\times 100\\%",
          "explanation": "Measure relative error against the true value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the absolute difference",
          "workingLatex": "|0.697 - 0.6931| = 0.0039",
          "explanation": "Subtract and take modulus.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the exact value",
          "workingLatex": "\\dfrac{0.0039}{0.6931}",
          "explanation": "Normalise by the true integral.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert to percentage",
          "workingLatex": "\\times 100\\% = 0.56\\%",
          "explanation": "Multiply by $100$ for a percentage.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{error } \\approx 0.6\\%",
          "explanation": "This quantifies how far the trapezium estimate is from the exact area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Could improve by increasing $n$",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{error usually decreases}",
          "explanation": "More strips would typically shrink this percentage.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.56\\%$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "comparison"
    ],
    "questionText": "(a) Use the trapezium rule with $n = 8$ strips to estimate $\\displaystyle\\int f(x)\\,dx$ for $f(x)=x^2$ on $[0, 1]$. (b) Find the exact integral. (c) State whether the rule over- or under-estimates on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): strip width",
          "workingLatex": "h = 0.125",
          "explanation": "Set up the equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate all ordinates",
          "workingLatex": "\\text{use } n=8 \\Rightarrow n+1 \\text{ values}",
          "explanation": "Systematic substitution avoids missing an interior point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 0.3359",
          "explanation": "Apply the full weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): exact integral",
          "workingLatex": "\\displaystyle\\int = 0.3333",
          "explanation": "Integrate analytically for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare estimate and exact",
          "workingLatex": "0.3359 \\text{ vs } 0.3333",
          "explanation": "See whether the rule is high or low.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): concavity / over-under",
          "workingLatex": "\\text{use } f''(x) \\text{ sign on interval}",
          "explanation": "Concave up $\\Rightarrow$ over-estimate; concave down $\\Rightarrow$ under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error (extra)",
          "workingLatex": "\\approx 0.78\\%",
          "explanation": "Quantifies accuracy with the chosen $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $0.3359$; (b) exact $= 0.3333$; (c) compare using concavity of $f$ on the interval."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "comparison"
    ],
    "questionText": "(a) Use the trapezium rule with $n = 8$ strips to estimate $\\displaystyle\\int f(x)\\,dx$ for $f(x)=e^x$ on $[0, 1]$. (b) Find the exact integral. (c) State whether the rule over- or under-estimates on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): strip width",
          "workingLatex": "h = 0.125",
          "explanation": "Set up the equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate all ordinates",
          "workingLatex": "\\text{use } n=8 \\Rightarrow n+1 \\text{ values}",
          "explanation": "Systematic substitution avoids missing an interior point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 1.7205",
          "explanation": "Apply the full weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): exact integral",
          "workingLatex": "\\displaystyle\\int = 1.7183",
          "explanation": "Integrate analytically for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare estimate and exact",
          "workingLatex": "1.7205 \\text{ vs } 1.7183",
          "explanation": "See whether the rule is high or low.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): concavity / over-under",
          "workingLatex": "\\text{use } f''(x) \\text{ sign on interval}",
          "explanation": "Concave up $\\Rightarrow$ over-estimate; concave down $\\Rightarrow$ under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error (extra)",
          "workingLatex": "\\approx 0.13\\%",
          "explanation": "Quantifies accuracy with the chosen $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $1.7205$; (b) exact $= 1.7183$; (c) compare using concavity of $f$ on the interval."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "comparison"
    ],
    "questionText": "(a) Use the trapezium rule with $n = 8$ strips to estimate $\\displaystyle\\int f(x)\\,dx$ for $f(x)=\\sin x$ on $[0, 3.1416]$. (b) Find the exact integral. (c) State whether the rule over- or under-estimates on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): strip width",
          "workingLatex": "h = 0.3927",
          "explanation": "Set up the equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate all ordinates",
          "workingLatex": "\\text{use } n=8 \\Rightarrow n+1 \\text{ values}",
          "explanation": "Systematic substitution avoids missing an interior point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 1.9742",
          "explanation": "Apply the full weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): exact integral",
          "workingLatex": "\\displaystyle\\int = 2",
          "explanation": "Integrate analytically for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare estimate and exact",
          "workingLatex": "1.9742 \\text{ vs } 2",
          "explanation": "See whether the rule is high or low.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): concavity / over-under",
          "workingLatex": "\\text{use } f''(x) \\text{ sign on interval}",
          "explanation": "Concave up $\\Rightarrow$ over-estimate; concave down $\\Rightarrow$ under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error (extra)",
          "workingLatex": "\\approx 1.29\\%",
          "explanation": "Quantifies accuracy with the chosen $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $1.9742$; (b) exact $= 2$; (c) compare using concavity of $f$ on the interval."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "comparison"
    ],
    "questionText": "(a) Use the trapezium rule with $n = 8$ strips to estimate $\\displaystyle\\int f(x)\\,dx$ for $f(x)=\\cos x$ on $[0, 3.1416]$. (b) Find the exact integral. (c) State whether the rule over- or under-estimates on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): strip width",
          "workingLatex": "h = 0.3927",
          "explanation": "Set up the equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate all ordinates",
          "workingLatex": "\\text{use } n=8 \\Rightarrow n+1 \\text{ values}",
          "explanation": "Systematic substitution avoids missing an interior point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 0",
          "explanation": "Apply the full weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): exact integral",
          "workingLatex": "\\displaystyle\\int = 0",
          "explanation": "Integrate analytically for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare estimate and exact",
          "workingLatex": "0 \\text{ vs } 0",
          "explanation": "See whether the rule is high or low.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): concavity / over-under",
          "workingLatex": "\\text{use } f''(x) \\text{ sign on interval}",
          "explanation": "Concave up $\\Rightarrow$ over-estimate; concave down $\\Rightarrow$ under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error (extra)",
          "workingLatex": "\\approx 0\\%",
          "explanation": "Quantifies accuracy with the chosen $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $0$; (b) exact $= 0$; (c) compare using concavity of $f$ on the interval."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "comparison"
    ],
    "questionText": "(a) Use the trapezium rule with $n = 6$ strips to estimate $\\displaystyle\\int f(x)\\,dx$ for $f(x)=x^3 - 3x$ on $[0, 2]$. (b) Find the exact integral. (c) State whether the rule over- or under-estimates on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): strip width",
          "workingLatex": "h = 0.3333",
          "explanation": "Set up the equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate all ordinates",
          "workingLatex": "\\text{use } n=6 \\Rightarrow n+1 \\text{ values}",
          "explanation": "Systematic substitution avoids missing an interior point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx -1.8889",
          "explanation": "Apply the full weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): exact integral",
          "workingLatex": "\\displaystyle\\int = -2",
          "explanation": "Integrate analytically for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare estimate and exact",
          "workingLatex": "-1.8889 \\text{ vs } -2",
          "explanation": "See whether the rule is high or low.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): concavity / over-under",
          "workingLatex": "\\text{use } f''(x) \\text{ sign on interval}",
          "explanation": "Concave up $\\Rightarrow$ over-estimate; concave down $\\Rightarrow$ under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error (extra)",
          "workingLatex": "\\approx 5.56\\%",
          "explanation": "Quantifies accuracy with the chosen $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $-1.8889$; (b) exact $= -2$; (c) compare using concavity of $f$ on the interval."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "comparison"
    ],
    "questionText": "(a) Use the trapezium rule with $n = 6$ strips to estimate $\\displaystyle\\int f(x)\\,dx$ for $f(x)=\\dfrac{1}{1+x^2}$ on $[0, 1]$. (b) Find the exact integral. (c) State whether the rule over- or under-estimates on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): strip width",
          "workingLatex": "h = 0.1667",
          "explanation": "Set up the equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate all ordinates",
          "workingLatex": "\\text{use } n=6 \\Rightarrow n+1 \\text{ values}",
          "explanation": "Systematic substitution avoids missing an interior point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 0.7842",
          "explanation": "Apply the full weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): exact integral",
          "workingLatex": "\\displaystyle\\int = 0.7854",
          "explanation": "Integrate analytically for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare estimate and exact",
          "workingLatex": "0.7842 \\text{ vs } 0.7854",
          "explanation": "See whether the rule is high or low.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): concavity / over-under",
          "workingLatex": "\\text{use } f''(x) \\text{ sign on interval}",
          "explanation": "Concave up $\\Rightarrow$ over-estimate; concave down $\\Rightarrow$ under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error (extra)",
          "workingLatex": "\\approx 0.15\\%",
          "explanation": "Quantifies accuracy with the chosen $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $0.7842$; (b) exact $= 0.7854$; (c) compare using concavity of $f$ on the interval."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "comparison"
    ],
    "questionText": "(a) Use the trapezium rule with $n = 6$ strips to estimate $\\displaystyle\\int f(x)\\,dx$ for $f(x)=x e^{-x}$ on $[0, 2]$. (b) Find the exact integral. (c) State whether the rule over- or under-estimates on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): strip width",
          "workingLatex": "h = 0.3333",
          "explanation": "Set up the equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate all ordinates",
          "workingLatex": "\\text{use } n=6 \\Rightarrow n+1 \\text{ values}",
          "explanation": "Systematic substitution avoids missing an interior point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 0.5835",
          "explanation": "Apply the full weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): exact integral",
          "workingLatex": "\\displaystyle\\int = 0.594",
          "explanation": "Integrate analytically for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare estimate and exact",
          "workingLatex": "0.5835 \\text{ vs } 0.594",
          "explanation": "See whether the rule is high or low.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): concavity / over-under",
          "workingLatex": "\\text{use } f''(x) \\text{ sign on interval}",
          "explanation": "Concave up $\\Rightarrow$ over-estimate; concave down $\\Rightarrow$ under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error (extra)",
          "workingLatex": "\\approx 1.76\\%",
          "explanation": "Quantifies accuracy with the chosen $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $0.5835$; (b) exact $= 0.594$; (c) compare using concavity of $f$ on the interval."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "comparison"
    ],
    "questionText": "(a) Use the trapezium rule with $n = 6$ strips to estimate $\\displaystyle\\int f(x)\\,dx$ for $f(x)=\\ln x$ on $[1, e]$. (b) Find the exact integral. (c) State whether the rule over- or under-estimates on this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): strip width",
          "workingLatex": "h = 0.2864",
          "explanation": "Set up the equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate all ordinates",
          "workingLatex": "\\text{use } n=6 \\Rightarrow n+1 \\text{ values}",
          "explanation": "Systematic substitution avoids missing an interior point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 0.9957",
          "explanation": "Apply the full weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): exact integral",
          "workingLatex": "\\displaystyle\\int = 0.5",
          "explanation": "Integrate analytically for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare estimate and exact",
          "workingLatex": "0.9957 \\text{ vs } 0.5",
          "explanation": "See whether the rule is high or low.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): concavity / over-under",
          "workingLatex": "\\text{use } f''(x) \\text{ sign on interval}",
          "explanation": "Concave up $\\Rightarrow$ over-estimate; concave down $\\Rightarrow$ under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error (extra)",
          "workingLatex": "\\approx 99.14\\%",
          "explanation": "Quantifies accuracy with the chosen $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $0.9957$; (b) exact $= 0.5$; (c) compare using concavity of $f$ on the interval."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "modelling"
    ],
    "questionText": "A river's cross-sectional area is modelled using widths measured every $2\\ \\text{m}$ across a $10\\ \\text{m}$ channel. The depths (in metres) at $0, 2, 4, 6, 8, 10\\ \\text{m}$ from the left bank are $0, 1.2, 1.8, 2.0, 1.5, 0$. Treating depth as $f(x)$, use the trapezium rule to estimate the cross-sectional area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the integral model",
          "workingLatex": "\\text{area} = \\displaystyle\\int_0^{10} f(x)\\,dx",
          "explanation": "Depth profile $f(x)$ gives area when integrated across the width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify strips",
          "workingLatex": "n = 5,\\; h = 2",
          "explanation": "Five strips of width $2\\ \\text{m}$ on $[0,10]$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates from data",
          "workingLatex": "y_0=0,\\; y_1=1.2,\\; y_2=1.8,\\; y_3=2.0,\\; y_4=1.5,\\; y_5=0",
          "explanation": "Read depths at each measurement point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Weighted sum",
          "workingLatex": "0 + 2(1.2) + 2(1.8) + 2(2.0) + 2(1.5) + 0 = 14.0",
          "explanation": "Apply trapezium weighting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{2}{2} \\times 14 = 14",
          "explanation": "With $h=2$, the factor $h/2$ is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "14\\ \\text{m}^2",
          "explanation": "Depth $\\times$ width gives area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modelling note",
          "workingLatex": "\\text{depths at discrete points } \\Rightarrow \\text{trapezium rule natural}",
          "explanation": "Real data often arrives as equally spaced readings — ideal for this rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{cross-sectional area} \\approx 14\\ \\text{m}^2",
          "explanation": "This is the estimated area of the river cross-section.",
          "diagram": null
        }
      ],
      "finalAnswer": "Cross-sectional area $\\approx 14\\ \\text{m}^2$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "velocity"
    ],
    "questionText": "A car's velocity $v\\ \\text{(m s}^{-1}\\text{)}$ at times $t = 0, 1, 2, 3, 4\\ \\text{s}$ is $0, 8, 14, 18, 20$. Use the trapezium rule to estimate the distance travelled in the first $4\\ \\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Link distance to integral",
          "workingLatex": "s = \\displaystyle\\int_0^4 v(t)\\,dt",
          "explanation": "Area under the velocity-time graph equals displacement.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 1,\\; n = 4",
          "explanation": "Readings every second give four unit strips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates",
          "workingLatex": "v_0=0,\\; v_1=8,\\; v_2=14,\\; v_3=18,\\; v_4=20",
          "explanation": "Take velocities at each time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Weighted sum",
          "workingLatex": "0 + 2(8) + 2(14) + 2(18) + 20 = 100",
          "explanation": "Standard trapezium weighting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply $h/2$",
          "workingLatex": "\\dfrac{1}{2} \\times 100 = 50",
          "explanation": "Multiply by $\\tfrac{1}{2}$ since $h=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "50\\ \\text{m}",
          "explanation": "Velocity $\\times$ time gives distance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpretation",
          "workingLatex": "\\text{estimate of total displacement}",
          "explanation": "The car travels roughly $50\\ \\text{m}$ in $4\\ \\text{s}$ under this model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Could refine",
          "workingLatex": "\\text{more frequent readings } \\Rightarrow \\text{ better estimate}",
          "explanation": "Finer time steps would track changes in speed more closely.",
          "diagram": null
        }
      ],
      "finalAnswer": "Distance $\\approx 50\\ \\text{m}$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "error"
    ],
    "questionText": "For $\\displaystyle\\int_0^1 x^2\\,dx$, the trapezium rule with $n=1$ gives $0.5$ and with $n=2$ gives $0.375$. The exact value is $\\tfrac{1}{3}$. Explain why doubling $n$ moved the estimate closer to the exact value, and predict whether $n=4$ will be closer still.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Exact value",
          "workingLatex": "\\displaystyle\\int_0^1 x^2\\,dx = \\dfrac{1}{3}",
          "explanation": "Baseline for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Error at $n=1$",
          "workingLatex": "|0.5 - \\tfrac{1}{3}| = \\tfrac{1}{6}",
          "explanation": "A single strip is quite crude on a curved graph.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Error at $n=2$",
          "workingLatex": "|0.375 - \\tfrac{1}{3}| = \\tfrac{1}{24}",
          "explanation": "Halving $h$ reduced the error substantially.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Why improvement happens",
          "workingLatex": "h \\text{ halved } \\Rightarrow \\text{ chords follow } x^2 \\text{ more closely}",
          "explanation": "Narrower strips mean each chord spans a gentler part of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Concavity",
          "workingLatex": "x^2 \\text{ concave up } \\Rightarrow \\text{ over-estimate, but gap shrinks}",
          "explanation": "Still an over-estimate at $n=2$, but by less.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $n=4$ (sketch)",
          "workingLatex": "\\text{estimate} = 0.34375",
          "explanation": "With four strips the estimate is $0.34375$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Error at $n=4$",
          "workingLatex": "|0.34375 - \\tfrac{1}{3}| \\approx 0.0104",
          "explanation": "Still smaller than the $n=2$ error.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Prediction confirmed",
          "workingLatex": "n=4 \\text{ is closer than } n=2",
          "explanation": "Increasing strip count continues to improve accuracy for this smooth integrand.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General remark",
          "workingLatex": "\\text{error typically } O(h^2) \\text{ for trapezium rule}",
          "explanation": "At A-Level we mainly observe that more strips help; the error shrinks as $h$ decreases.",
          "diagram": null
        }
      ],
      "finalAnswer": "Halving $h$ lets chords hug $y=x^2$ better, reducing the over-estimate. $n=4$ gives $0.34375$, closer to $\\tfrac{1}{3}$ than $0.375$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "advanced"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{3.1416} \\sin^2 x\\,dx$ using the trapezium rule with $n = 6$ strips. Give your answer to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.5236",
          "explanation": "Divide the interval into $n$ equal parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Tabulate ordinates",
          "workingLatex": "\\text{7 values of } f(x)",
          "explanation": "Evaluate the integrand at each $x_i = a + ih$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "S = 6",
          "explanation": "Apply $y_0 + 2\\sum y_i + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\dfrac{0.5236}{2} \\times S = 1.5708",
          "explanation": "Multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 4 d.p.",
          "workingLatex": "1.5708",
          "explanation": "Final answer as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact comparison",
          "workingLatex": "Exact value $\\approx 1.5708$.",
          "explanation": "Compare mentally if an exact value is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concavity (if applicable)",
          "workingLatex": "\\text{check } f'' \\text{ for over/under-estimate}",
          "explanation": "Sign of the second derivative explains systematic bias.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\displaystyle\\int \\approx 1.5708",
          "explanation": "Trapezium-rule approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1.5708$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "advanced"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{3} x^2 e^{-x}\\,dx$ using the trapezium rule with $n = 8$ strips. Give your answer to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.375",
          "explanation": "Divide the interval into $n$ equal parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Tabulate ordinates",
          "workingLatex": "\\text{9 values of } f(x)",
          "explanation": "Evaluate the integrand at each $x_i = a + ih$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "S = 6.1424",
          "explanation": "Apply $y_0 + 2\\sum y_i + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\dfrac{0.375}{2} \\times S = 1.1517",
          "explanation": "Multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 4 d.p.",
          "workingLatex": "1.1517",
          "explanation": "Final answer as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact comparison",
          "workingLatex": "Exact value $\\approx 1.5021$.",
          "explanation": "Compare mentally if an exact value is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concavity (if applicable)",
          "workingLatex": "\\text{check } f'' \\text{ for over/under-estimate}",
          "explanation": "Sign of the second derivative explains systematic bias.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\displaystyle\\int \\approx 1.1517",
          "explanation": "Trapezium-rule approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1.1517$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "advanced"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{1}^{4} \\dfrac{1}{\\sqrt{x}}\\,dx$ using the trapezium rule with $n = 6$ strips. Give your answer to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Divide the interval into $n$ equal parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Tabulate ordinates",
          "workingLatex": "\\text{7 values of } f(x)",
          "explanation": "Evaluate the integrand at each $x_i = a + ih$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "S = 8.0359",
          "explanation": "Apply $y_0 + 2\\sum y_i + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\dfrac{0.5}{2} \\times S = 2.009",
          "explanation": "Multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 4 d.p.",
          "workingLatex": "2.009",
          "explanation": "Final answer as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact comparison",
          "workingLatex": "Exact value $\\approx 4$.",
          "explanation": "Compare mentally if an exact value is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concavity (if applicable)",
          "workingLatex": "\\text{check } f'' \\text{ for over/under-estimate}",
          "explanation": "Sign of the second derivative explains systematic bias.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\displaystyle\\int \\approx 2.009",
          "explanation": "Trapezium-rule approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2.009$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "advanced"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{-2}^{2} 4 - x^2\\,dx$ using the trapezium rule with $n = 8$ strips. Give your answer to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Divide the interval into $n$ equal parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Tabulate ordinates",
          "workingLatex": "\\text{9 values of } f(x)",
          "explanation": "Evaluate the integrand at each $x_i = a + ih$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "S = 42",
          "explanation": "Apply $y_0 + 2\\sum y_i + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\dfrac{0.5}{2} \\times S = 10.5",
          "explanation": "Multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 4 d.p.",
          "workingLatex": "10.5",
          "explanation": "Final answer as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact comparison",
          "workingLatex": "Exact value $\\approx 10.6667$.",
          "explanation": "Compare mentally if an exact value is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concavity (if applicable)",
          "workingLatex": "\\text{check } f'' \\text{ for over/under-estimate}",
          "explanation": "Sign of the second derivative explains systematic bias.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\displaystyle\\int \\approx 10.5",
          "explanation": "Trapezium-rule approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$10.5$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "advanced"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{1}^{e} x\\ln x\\,dx$ using the trapezium rule with $n = 6$ strips. Give your answer to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.2864",
          "explanation": "Divide the interval into $n$ equal parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Tabulate ordinates",
          "workingLatex": "\\text{7 values of } f(x)",
          "explanation": "Evaluate the integrand at each $x_i = a + ih$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "S = 14.6944",
          "explanation": "Apply $y_0 + 2\\sum y_i + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\dfrac{0.2864}{2} \\times S = 2.1041",
          "explanation": "Multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 4 d.p.",
          "workingLatex": "2.1041",
          "explanation": "Final answer as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact comparison",
          "workingLatex": "Exact value $\\approx 2.0973$.",
          "explanation": "Compare mentally if an exact value is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concavity (if applicable)",
          "workingLatex": "\\text{check } f'' \\text{ for over/under-estimate}",
          "explanation": "Sign of the second derivative explains systematic bias.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\displaystyle\\int \\approx 2.1041",
          "explanation": "Trapezium-rule approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2.1041$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "advanced"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{\\pi/4} \\tan x\\,dx$ using the trapezium rule with $n = 4$ strips. Give your answer to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.1963",
          "explanation": "Divide the interval into $n$ equal parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Tabulate ordinates",
          "workingLatex": "\\text{5 values of } f(x)",
          "explanation": "Evaluate the integrand at each $x_i = a + ih$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "S = 3.5626",
          "explanation": "Apply $y_0 + 2\\sum y_i + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\dfrac{0.1963}{2} \\times S = 0.3498",
          "explanation": "Multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 4 d.p.",
          "workingLatex": "0.3498",
          "explanation": "Final answer as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact comparison",
          "workingLatex": "Exact value $\\approx 0.3466$.",
          "explanation": "Compare mentally if an exact value is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concavity (if applicable)",
          "workingLatex": "\\text{check } f'' \\text{ for over/under-estimate}",
          "explanation": "Sign of the second derivative explains systematic bias.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\displaystyle\\int \\approx 0.3498",
          "explanation": "Trapezium-rule approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.3498$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "advanced"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{1} e^{-x^2}\\,dx$ using the trapezium rule with $n = 8$ strips. Give your answer to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = 0.125",
          "explanation": "Divide the interval into $n$ equal parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Tabulate ordinates",
          "workingLatex": "\\text{9 values of } f(x)",
          "explanation": "Evaluate the integrand at each $x_i = a + ih$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Weighted sum",
          "workingLatex": "S = 11.9338",
          "explanation": "Apply $y_0 + 2\\sum y_i + y_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\dfrac{0.125}{2} \\times S = 0.7459",
          "explanation": "Multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round to 4 d.p.",
          "workingLatex": "0.7459",
          "explanation": "Final answer as requested.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exact comparison",
          "workingLatex": "No elementary antiderivative — a numerical method is appropriate.",
          "explanation": "Compare mentally if an exact value is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concavity (if applicable)",
          "workingLatex": "\\text{check } f'' \\text{ for over/under-estimate}",
          "explanation": "Sign of the second derivative explains systematic bias.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\displaystyle\\int \\approx 0.7459",
          "explanation": "Trapezium-rule approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.7459$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "proof"
    ],
    "questionText": "Show that the trapezium rule is exact for any linear function $f(x) = mx + c$ on any interval $[a,b]$ with any $n \\ge 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Area under a line",
          "workingLatex": "\\displaystyle\\int_a^b (mx+c)\\,dx = m\\dfrac{b^2-a^2}{2} + c(b-a)",
          "explanation": "Integrate term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Trapezium rule setup",
          "workingLatex": "h = \\dfrac{b-a}{n}",
          "explanation": "Equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates on a line",
          "workingLatex": "f(a+ih) = m(a+ih)+c",
          "explanation": "Substitute into the linear function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Weighted sum of an arithmetic progression",
          "workingLatex": "\\sum \\text{weighted } f(x_i) \\text{ simplifies}",
          "explanation": "The weighted sum of equally spaced values of a linear function collapses neatly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Algebraic simplification",
          "workingLatex": "\\dfrac{h}{2}\\times(\\text{weighted sum}) = m\\dfrac{b^2-a^2}{2} + c(b-a)",
          "explanation": "After simplification the trapezium estimate matches the integral exactly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric view",
          "workingLatex": "\\text{chords on a line} = \\text{the line}",
          "explanation": "No curvature means zero approximation error.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Special case $m=0$",
          "workingLatex": "f(x)=c \\Rightarrow \\text{rectangle areas exact}",
          "explanation": "Constant functions are the horizontal-line case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{trapezium rule exact for all linear } f",
          "explanation": "This is why linear integrands never need refinement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Exam relevance",
          "workingLatex": "\\text{always check if integrand is linear before long calculations}",
          "explanation": "Spotting linearity saves time.",
          "diagram": null
        }
      ],
      "finalAnswer": "Chords on a straight-line graph coincide with the graph, so each trapezium area equals the true strip area and the sum equals the exact integral."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "over-estimate",
      "concavity",
      "proof"
    ],
    "questionText": "Prove that if $f''(x) > 0$ on $[a,b]$, then the trapezium rule over-estimates $\\displaystyle\\int_a^b f(x)\\,dx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Concave up definition",
          "workingLatex": "f''(x) > 0 \\Rightarrow f \\text{ concave up}",
          "explanation": "The graph bends upward throughout the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Single strip geometry",
          "workingLatex": "\\text{chord lies on or above } y=f(x)",
          "explanation": "For a concave-up function, the line segment joining two graph points lies above the graph between them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Area comparison on one strip",
          "workingLatex": "A_{\\text{trap}} \\ge A_{\\text{true}}",
          "explanation": "The trapezium under the chord contains the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Repeat for each strip",
          "workingLatex": "\\text{sum of inequalities}",
          "explanation": "Add the area inequalities over all $n$ strips.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total estimate",
          "workingLatex": "\\text{trapezium rule} \\ge \\int_a^b f(x)\\,dx",
          "explanation": "The full approximation is at least as large as the true integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Strict inequality if strictly concave",
          "workingLatex": "f'' > 0 \\Rightarrow \\text{strict over-estimate (unless } f \\text{ linear)}",
          "explanation": "Genuine curvature creates a positive gap.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example",
          "workingLatex": "x^2 \\text{ on } [0,1]",
          "explanation": "Parabolas illustrate the result concretely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Contrast",
          "workingLatex": "f'' < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Concave down reverses the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Practical use",
          "workingLatex": "\\text{know bias direction without computing exact integral}",
          "explanation": "Concavity tells you whether the rule is high or low.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $f''(x)>0$, each chord lies above $y=f(x)$, so each trapezium area exceeds the true strip area; summing gives an over-estimate."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "exam-style"
    ],
    "questionText": "For $f(x)=x^2$ on $[0, 2]$, Find the trapezium-rule estimate with $n=4$, the exact integral, and the percentage error.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\text{trapezium rule } \\to \\text{ exact } \\to \\text{ compare}",
          "explanation": "Structure the solution in clear parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Compute $h$ from the interval and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates",
          "workingLatex": "\\text{evaluate } f \\text{ at } 5 \\text{ points}",
          "explanation": "Organise values in a table to avoid errors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 2.75",
          "explanation": "Apply the weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact integral",
          "workingLatex": "\\displaystyle\\int = 8",
          "explanation": "Use known antiderivative or geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{estimate } 2.75 \\text{ vs exact } 8",
          "explanation": "Quantify the difference.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error or bias",
          "workingLatex": "\\text{error/bias discussion}",
          "explanation": "Link to concavity or symmetry as appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\text{contextual conclusion}",
          "explanation": "Explain the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Refinement",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{typically closer}",
          "explanation": "More strips would further reduce error where the function is curved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final summary",
          "workingLatex": "\\text{estimate } 2.75",
          "explanation": "State the key numerical answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Trapezium estimate $\\approx 2.75$; exact $= 8$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "exam-style"
    ],
    "questionText": "For $f(x)=e^x$ on $[0, 2]$, Use $n=6$ strips; compare with the exact value and comment on over/under-estimation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\text{trapezium rule } \\to \\text{ exact } \\to \\text{ compare}",
          "explanation": "Structure the solution in clear parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 0.3333",
          "explanation": "Compute $h$ from the interval and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates",
          "workingLatex": "\\text{evaluate } f \\text{ at } 7 \\text{ points}",
          "explanation": "Organise values in a table to avoid errors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 6.4481",
          "explanation": "Apply the weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact integral",
          "workingLatex": "\\displaystyle\\int = 6.3891",
          "explanation": "Use known antiderivative or geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{estimate } 6.4481 \\text{ vs exact } 6.3891",
          "explanation": "Quantify the difference.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error or bias",
          "workingLatex": "\\text{error/bias discussion}",
          "explanation": "Link to concavity or symmetry as appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "compare with the exact value and comment on over/under-estimation.",
          "explanation": "Explain the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Refinement",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{typically closer}",
          "explanation": "More strips would further reduce error where the function is curved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final summary",
          "workingLatex": "\\text{estimate } 6.4481",
          "explanation": "State the key numerical answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Trapezium estimate $\\approx 6.4481$; exact $= 6.3891$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "exam-style"
    ],
    "questionText": "For $f(x)=\\sin x$ on $[0, 2\\pi]$, Estimate the integral (which equals $0$ exactly); explain why the trapezium estimate may be non-zero.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\text{trapezium rule } \\to \\text{ exact } \\to \\text{ compare}",
          "explanation": "Structure the solution in clear parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 0.7854",
          "explanation": "Compute $h$ from the interval and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates",
          "workingLatex": "\\text{evaluate } f \\text{ at } 9 \\text{ points}",
          "explanation": "Organise values in a table to avoid errors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 0",
          "explanation": "Apply the weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact integral",
          "workingLatex": "\\displaystyle\\int = 0",
          "explanation": "Use known antiderivative or geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{estimate } 0 \\text{ vs exact } 0",
          "explanation": "Quantify the difference.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error or bias",
          "workingLatex": "\\text{error/bias discussion}",
          "explanation": "Link to concavity or symmetry as appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "explain why the trapezium estimate may be non-zero.",
          "explanation": "Explain the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Refinement",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{typically closer}",
          "explanation": "More strips would further reduce error where the function is curved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final summary",
          "workingLatex": "\\text{estimate } 0",
          "explanation": "State the key numerical answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Trapezium estimate $\\approx 0$ (exact integral $= 0$)."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "exam-style"
    ],
    "questionText": "For $f(x)=x^3$ on $[-1, 1]$, The function is odd on $[-1,1]$; discuss symmetry and the trapezium estimate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\text{trapezium rule } \\to \\text{ exact } \\to \\text{ compare}",
          "explanation": "Structure the solution in clear parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Compute $h$ from the interval and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates",
          "workingLatex": "\\text{evaluate } f \\text{ at } 5 \\text{ points}",
          "explanation": "Organise values in a table to avoid errors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 0",
          "explanation": "Apply the weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact integral",
          "workingLatex": "\\displaystyle\\int = 0",
          "explanation": "Use known antiderivative or geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{estimate } 0 \\text{ vs exact } 0",
          "explanation": "Quantify the difference.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error or bias",
          "workingLatex": "\\text{error/bias discussion}",
          "explanation": "Link to concavity or symmetry as appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "discuss symmetry and the trapezium estimate.",
          "explanation": "Explain the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Refinement",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{typically closer}",
          "explanation": "More strips would further reduce error where the function is curved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final summary",
          "workingLatex": "\\text{estimate } 0",
          "explanation": "State the key numerical answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Trapezium estimate $\\approx 0$ (exact integral $= 0$)."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "exam-style"
    ],
    "questionText": "For $f(x)=\\sqrt{4-x^2}$ on $[-2, 2]$, Interpret the integral as a semicircle area; compare with the trapezium estimate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan",
          "workingLatex": "\\text{trapezium rule } \\to \\text{ exact } \\to \\text{ compare}",
          "explanation": "Structure the solution in clear parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Compute $h$ from the interval and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates",
          "workingLatex": "\\text{evaluate } f \\text{ at } 9 \\text{ points}",
          "explanation": "Organise values in a table to avoid errors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 5.9914",
          "explanation": "Apply the weighting and multiply by $h/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact integral",
          "workingLatex": "\\displaystyle\\int = 3.1416",
          "explanation": "Use known antiderivative or geometric interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\text{estimate } 5.9914 \\text{ vs exact } 3.1416",
          "explanation": "Quantify the difference.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Percentage error or bias",
          "workingLatex": "\\text{error/bias discussion}",
          "explanation": "Link to concavity or symmetry as appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "compare with the trapezium estimate.",
          "explanation": "Explain the result in context.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Refinement",
          "workingLatex": "n \\uparrow \\Rightarrow \\text{typically closer}",
          "explanation": "More strips would further reduce error where the function is curved.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Final summary",
          "workingLatex": "\\text{estimate } 5.9914",
          "explanation": "State the key numerical answer clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Trapezium estimate $\\approx 5.9914$; exact $= 3.1416$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "table"
    ],
    "questionText": "The table shows $f(x)$ for $0 \\le x \\le 6$ with strips of width $1.5$.\n\n| $x$ | 0 | 1.5 | 3 | 4.5 | 6 |\n|---|---|---|---|---|---|\n| $f(x)$ | 1 | 2.5 | 3 | 2.8 | 2 |\n\n(a) Find $n$ and $h$. (b) Estimate $\\displaystyle\\int_0^6 f(x)\\,dx$. (c) Given that $f''(x) < 0$ on $[0,6]$, classify the estimate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): count strips",
          "workingLatex": "n = 4",
          "explanation": "Four intervals between five tabulated points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 1.5",
          "explanation": "Each strip is $1.5$ units wide.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (b): ordinates",
          "workingLatex": "1,\\; 2.5,\\; 3,\\; 2.8,\\; 2",
          "explanation": "Read from the table.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Weighted sum",
          "workingLatex": "1 + 2(2.5) + 2(3) + 2(2.8) + 2 = 1 + 5 + 6 + 5.6 + 2 = 19.6",
          "explanation": "Standard weighting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply by $h/2$",
          "workingLatex": "\\dfrac{1.5}{2} \\times 19.6 = 14.7",
          "explanation": "Apply the trapezium factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): concavity",
          "workingLatex": "f'' < 0 \\Rightarrow \\text{concave down}",
          "explanation": "Given information about the second derivative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify estimate",
          "workingLatex": "\\text{under-estimate}",
          "explanation": "Concave down implies chords lie below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Full answer",
          "workingLatex": "n=4,\\; h=1.5,\\; \\int \\approx 14.7,\\; \\text{under-estimate}",
          "explanation": "Combine all parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $n=4$, $h=1.5$; (b) $14.7$; (c) under-estimate."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "comparison"
    ],
    "questionText": "Compare $n=4$ and $n=8$ for $\\int_0^1 e^x\\,dx$ and find which is within $1\\%$ of $e-1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Exact value",
          "workingLatex": "e - 1 \\approx 1.7183",
          "explanation": "Baseline for percentage errors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "$n=4$ estimate",
          "workingLatex": "\\approx 1.7272",
          "explanation": "Apply the rule with four strips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$n=4$ percentage error",
          "workingLatex": "0.52\\%",
          "explanation": "Relative error at $n=4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$n=8$ estimate",
          "workingLatex": "\\approx 1.7205",
          "explanation": "Double the strips.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$n=8$ percentage error",
          "workingLatex": "0.13\\%",
          "explanation": "Typically smaller than at $n=4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Which is more accurate?",
          "workingLatex": "n=8",
          "explanation": "Compare percentage errors directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Within $1\\%$?",
          "workingLatex": "n=8",
          "explanation": "Check which estimate meets the $1\\%$ tolerance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concavity",
          "workingLatex": "e^x \\text{ concave up } \\Rightarrow \\text{over-estimate both}",
          "explanation": "Both estimates exceed the true value but $n=8$ is closer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n=4$: $1.7272$ (0.52\\% error); $n=8$: $1.7205$ (0.13\\% error). n=8 is within $1\\%$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "challenge"
    ],
    "questionText": "For $\\int_0^{\\pi/2} \\cos x\\,dx$ with $n=4$, find the estimate and exact value $1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "n=4,\\; h=0.3927",
          "explanation": "Equal strips on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 0.9871",
          "explanation": "Full application of the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exact value",
          "workingLatex": "1",
          "explanation": "Known integral or interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "\\text{difference} \\approx 0.0129",
          "explanation": "See how close the estimate is.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Percentage error",
          "workingLatex": "1.29\\%",
          "explanation": "Quantify relative accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concavity / shape",
          "workingLatex": "\\text{explain bias if applicable}",
          "explanation": "Link systematic error to $f''$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "For $\\int_0^{\\pi/2} \\cos x\\,dx$ with $n=4$, find the estimate and exact value $1$.",
          "explanation": "Answer the full exam-style prompt.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{estimate } 0.9871",
          "explanation": "State the numerical result clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Estimate $\\approx 0.9871$; exact $= 1$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "challenge"
    ],
    "questionText": "Estimate $\\int_1^4 \\ln x\\,dx$ with $n=6$; exact value is $4\\ln 4 - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "n=6,\\; h=0.5",
          "explanation": "Equal strips on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 2.5297",
          "explanation": "Full application of the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exact value",
          "workingLatex": "2.5452",
          "explanation": "Known integral or interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "\\text{difference} \\approx 0.0155",
          "explanation": "See how close the estimate is.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Percentage error",
          "workingLatex": "0.61\\%",
          "explanation": "Quantify relative accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concavity / shape",
          "workingLatex": "\\text{explain bias if applicable}",
          "explanation": "Link systematic error to $f''$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Estimate $\\int_1^4 \\ln x\\,dx$ with $n=6$; exact value is $4\\ln 4 - 3$.",
          "explanation": "Answer the full exam-style prompt.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{estimate } 2.5297",
          "explanation": "State the numerical result clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Estimate $\\approx 2.5297$; exact $= 2.5452$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "numeric",
    "tags": [
      "modelling",
      "trapezium rule"
    ],
    "questionText": "Water flows into a tank so that the rate $r$ (litres per minute) at times $0,5,10,15,20$ min is $0,12,20,25,28$. Estimate the total volume using the trapezium rule.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model volume as integral",
          "workingLatex": "V = \\displaystyle\\int_0^{20} r(t)\\,dt",
          "explanation": "Integrating flow rate gives total volume.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 5,\\; n = 4",
          "explanation": "Readings every $5$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates",
          "workingLatex": "0,\\; 12,\\; 20,\\; 25,\\; 28",
          "explanation": "Rates at each time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Weighted sum",
          "workingLatex": "0 + 2(12) + 2(20) + 2(25) + 28 = 142",
          "explanation": "Trapezium weighting.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply $h/2$",
          "workingLatex": "\\dfrac{5}{2} \\times 142 = 355",
          "explanation": "Multiply by $\\tfrac{5}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "355\\ \\text{litres}",
          "explanation": "Rate $\\times$ time gives volume.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Modelling assumption",
          "workingLatex": "\\text{rate varies linearly between readings}",
          "explanation": "Trapezium rule assumes linear interpolation between data points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Could improve",
          "workingLatex": "\\text{more frequent sampling}",
          "explanation": "Finer time steps track rapid changes better.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "V \\approx 355\\ \\text{L}",
          "explanation": "Estimated total volume in the first $20$ minutes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$355$ litres."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 13,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "challenge"
    ],
    "questionText": "Use the trapezium rule with $n=10$ on $\\int_0^1 \\dfrac{1}{1+x^2}\\,dx$; compare with $\\pi/4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "n=10,\\; h=0.1",
          "explanation": "Equal strips on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 0.785",
          "explanation": "Full application of the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exact value",
          "workingLatex": "0.7854",
          "explanation": "Known integral or interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "\\text{difference} \\approx 0.0004",
          "explanation": "See how close the estimate is.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Percentage error",
          "workingLatex": "0.05\\%",
          "explanation": "Quantify relative accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concavity / shape",
          "workingLatex": "\\text{explain bias if applicable}",
          "explanation": "Link systematic error to $f''$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Use the trapezium rule with $n=10$ on $\\int_0^1 \\dfrac{1}{1+x^2}\\,dx$; compare with $\\pi/4$.",
          "explanation": "Answer the full exam-style prompt.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{estimate } 0.785",
          "explanation": "State the numerical result clearly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpretation",
          "workingLatex": "\\text{geometric or piecewise insight}",
          "explanation": "Connect the integral to area or linear pieces.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "0.785",
          "explanation": "Consolidated result.",
          "diagram": null
        }
      ],
      "finalAnswer": "Estimate $\\approx 0.785$; exact $= 0.7854$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 14,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "error bound"
    ],
    "questionText": "For $f(x)=x^2$ on $[0,1]$, find the minimum $n$ such that the trapezium estimate differs from $1/3$ by less than $0.01$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Target",
          "workingLatex": "|\\text{{estimate}} - \\tfrac{{1}}{{3}}| < 0.01",
          "explanation": "We need the trapezium value within one hundredth of the exact integral.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Try $n=1$",
          "workingLatex": "0.5 \\Rightarrow \\text{error } 0.167",
          "explanation": "Too large.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Try $n=2$",
          "workingLatex": "0.375 \\Rightarrow \\text{error } 0.042",
          "explanation": "Still too large.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Try $n=4$",
          "workingLatex": "0.34375 \\Rightarrow \\text{error } 0.0104",
          "explanation": "Just above the tolerance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Try $n=5$",
          "workingLatex": "\\text{estimate} \\approx 0.34",
          "explanation": "Check the next strip count.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find first $n$ that works",
          "workingLatex": "n = 5",
          "explanation": "Systematic trial finds the smallest suitable $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "\\text{estimate} = 0.34,\\; |0.34 - \\tfrac{1}{3}| < 0.01",
          "explanation": "Confirm the error bound is met.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Concavity note",
          "workingLatex": "x^2 \\text{ concave up } \\Rightarrow \\text{ over-estimate}",
          "explanation": "All estimates exceed $\\tfrac{1}{3}$; we need them close from above.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum $n = 5$ (estimate $\\approx 0.34$)."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "curvature"
    ],
    "questionText": "Explain why the trapezium rule cannot be expected to be exact for $f(x)=\\sin x$ on $[0,\\pi]$ unless $n$ is very large.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Exact integral",
          "workingLatex": "\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = 2",
          "explanation": "Standard antiderivative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Curved graph",
          "workingLatex": "\\sin x \\text{ is not linear on } [0,\\pi]",
          "explanation": "Chords cut across the curve unless strips are very narrow.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Small $n$ estimate",
          "workingLatex": "n=4 \\Rightarrow \\approx 1.8961",
          "explanation": "A coarse estimate is close but not exact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternating concavity",
          "workingLatex": "\\sin x \\text{ concave down then up on } [0,\\pi]",
          "explanation": "Bias direction can vary across strips.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Net error",
          "workingLatex": "\\text{errors partly cancel but do not vanish for small } n",
          "explanation": "Symmetry helps accuracy but does not give exactness.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exactness condition",
          "workingLatex": "\\text{exact only if chords lie on curve (linear pieces)}",
          "explanation": "That requires infinitely many strips in the limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Limit",
          "workingLatex": "n \\to \\infty \\Rightarrow \\text{estimate } \\to 2",
          "explanation": "The rule converges to the true integral for smooth functions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exam message",
          "workingLatex": "\\text{finite } n \\Rightarrow \\text{approximation}",
          "explanation": "Always treat the trapezium rule as an estimate unless $f$ is linear.",
          "diagram": null
        }
      ],
      "finalAnswer": "Because $\\sin x$ is curved (and alternates concavity on $[0,\\pi]$), finite $n$ gives chords that do not lie on the graph; exactness requires the limit $n \\to \\infty$ (or a linear integrand)."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 11,
    "answerType": "numeric",
    "tags": [
      "trapezium rule",
      "challenge"
    ],
    "questionText": "Estimate $\\int_0^2 |x-1|\\,dx$ with $n=4$ (piecewise linear integrand).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up",
          "workingLatex": "n=4,\\; h=0.5",
          "explanation": "Equal strips on the interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Trapezium estimate",
          "workingLatex": "\\approx 1",
          "explanation": "Full application of the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exact value",
          "workingLatex": "1",
          "explanation": "Known integral or interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "\\text{difference} \\approx 0",
          "explanation": "See how close the estimate is.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Percentage error",
          "workingLatex": "0\\%",
          "explanation": "Quantify relative accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concavity / shape",
          "workingLatex": "\\text{explain bias if applicable}",
          "explanation": "Link systematic error to $f''$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Context",
          "workingLatex": "Estimate $\\int_0^2 |x-1|\\,dx$ with $n=4$ (piecewise linear integrand).",
          "explanation": "Answer the full exam-style prompt.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Final answer",
          "workingLatex": "\\text{estimate } 1",
          "explanation": "State the numerical result clearly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpretation",
          "workingLatex": "\\text{geometric or piecewise insight}",
          "explanation": "Connect the integral to area or linear pieces.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summary",
          "workingLatex": "1",
          "explanation": "Consolidated result.",
          "diagram": null
        }
      ],
      "finalAnswer": "Estimate $\\approx 1$; exact $= 1$."
    }
  },
  {
    "id": "al.y2.pure.numerical-integration.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "tags": [
      "trapezium rule",
      "conceptual"
    ],
    "questionText": "A student claims the trapezium rule always improves when $n$ is doubled. Give a counterexample or explain when the claim holds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "What the claim says",
          "workingLatex": "\\text{doubling } n \\text{ always improves accuracy}",
          "explanation": "We test whether a larger estimate is always closer to the truth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "True for smooth integrands",
          "workingLatex": "f \\text{ nice } \\Rightarrow \\text{error } \\to 0 \\text{ as } n \\to \\infty",
          "explanation": "For well-behaved functions, refinement eventually helps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Monotonicity of error is not guaranteed strip-by-strip",
          "workingLatex": "\\text{error can oscillate slightly with } n",
          "explanation": "In practice errors decrease on average but need not strictly fall every doubling.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Linear case",
          "workingLatex": "f \\text{ linear } \\Rightarrow \\text{exact for all } n",
          "explanation": "Doubling $n$ neither helps nor hurts — already exact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rounded arithmetic",
          "workingLatex": "\\text{calculator rounding can make } n=2n \\text{ appear worse}",
          "explanation": "Finite precision is a practical caveat.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Correct statement",
          "workingLatex": "\\text{error generally decreases as } h \\to 0",
          "explanation": "The rigorous A-Level statement is that more strips improve the approximation in the limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Student claim",
          "workingLatex": "\\text{too strong if interpreted as strict improvement every time}",
          "explanation": "Better: doubling $n$ usually reduces error for curved integrands.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{claim is not universally true, but increasing } n \\text{ is standard practice}",
          "explanation": "Use more strips when greater accuracy is needed.",
          "diagram": null
        }
      ],
      "finalAnswer": "Doubling $n$ does not **always** strictly improve the estimate (e.g. linear $f$ is already exact), but for typical curved integrands increasing $n$ reduces error as $h \\to 0$."
    }
  }
];
