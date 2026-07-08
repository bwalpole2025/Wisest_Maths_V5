import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q001",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 2 strips to estimate $\\displaystyle\\int_{0}^{2} y\\,dx$ given the ordinates $y = [0, 1, 4]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{2 - 0}{2} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{2} + 2\\sum_{i=1}^{1} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{2} = 4",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(0 + 4 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Estimates area under a quadratic.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx 5",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} y\\,dx \\approx 5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q002",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{0}^{4} y\\,dx$ given the ordinates $y = [1, 3, 5, 7, 9]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{4 - 0}{4} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 1,\\; y_{4} = 9",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "3 + 5 + 7",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (3 + 5 + 7)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(1 + 9 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 24",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Linear function — trapezium rule is exact.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx 24",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{4} y\\,dx \\approx 24$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q003",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 3 strips to estimate $\\displaystyle\\int_{0}^{3} y\\,dx$ given the ordinates $y = [0, 1, 8]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{3 - 0}{3} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{3} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{3} + 2\\sum_{i=1}^{2} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{3} = 8",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(0 + 8 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 10.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Cubic ordinates.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{3} y\\,dx \\approx 10.5",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{3} y\\,dx \\approx 10.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q004",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 2 strips to estimate $\\displaystyle\\int_{1}^{3} y\\,dx$ given the ordinates $y = [2, 4, 8]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{3 - 1}{2} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{1}^{3} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{2} + 2\\sum_{i=1}^{1} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 2,\\; y_{2} = 8",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "4",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (4)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(2 + 8 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 12",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Two strips on $[1,3]$.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{1}^{3} y\\,dx \\approx 12",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{3} y\\,dx \\approx 12$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q005",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 3 strips to estimate $\\displaystyle\\int_{0}^{6} y\\,dx$ given the ordinates $y = [0, 1, 4, 9, 16, 25, 36]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{6 - 0}{3} = 2",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{6} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{3} + 2\\sum_{i=1}^{2} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{3} = 36",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1 + 4 + 9 + 16 + 25",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1 + 4 + 9 + 16 + 25)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{2}{2}\\left(0 + 36 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 126",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Six-unit interval, three strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{6} y\\,dx \\approx 126",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{6} y\\,dx \\approx 126$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q006",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{0}^{1} y\\,dx$ given the ordinates $y = [1, 1.5, 2, 2.5, 3]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{1 - 0}{4} = 0.25",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{1} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 1,\\; y_{4} = 3",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1.5 + 2 + 2.5",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1.5 + 2 + 2.5)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{0.25}{2}\\left(1 + 3 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 2.125",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Four strips on unit interval.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{1} y\\,dx \\approx 2.125",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} y\\,dx \\approx 2.125$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q007",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{0}^{4} y\\,dx$ given the ordinates $y = [0, 1, 4, 9, 16]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{4 - 0}{4} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{4} = 16",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1 + 4 + 9",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1 + 4 + 9)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(0 + 16 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 42",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Quadratic $y=x^2$.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx 42",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{4} y\\,dx \\approx 42$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q008",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{0}^{2} y\\,dx$ given the ordinates $y = [0, 0.25, 1, 2.25, 4]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{2 - 0}{4} = 0.50",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{4} = 4",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "0.25 + 1 + 2.25",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (0.25 + 1 + 2.25)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{0.50}{2}\\left(0 + 4 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 4.25",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Finer strips on $[0,2]$.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx 4.25",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} y\\,dx \\approx 4.25$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q009",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 5 strips to estimate $\\displaystyle\\int_{0}^{5} y\\,dx$ given the ordinates $y = [0, 1, 4, 9, 16, 25]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{5 - 0}{5} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{5} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{5} + 2\\sum_{i=1}^{4} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{5} = 25",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1 + 4 + 9 + 16",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1 + 4 + 9 + 16)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(0 + 25 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 110",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Five strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{5} y\\,dx \\approx 110",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{5} y\\,dx \\approx 110$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q010",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{2}^{6} y\\,dx$ given the ordinates $y = [4, 5, 8, 13, 20]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{6 - 2}{4} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{2}^{6} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 4,\\; y_{4} = 20",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "5 + 8 + 13",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (5 + 8 + 13)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(4 + 20 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 62",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Shifted interval.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{2}^{6} y\\,dx \\approx 62",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{6} y\\,dx \\approx 62$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q011",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 3 strips to estimate $\\displaystyle\\int_{0}^{3} y\\,dx$ given the ordinates $y = [1, 2, 5, 10]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{3 - 0}{3} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{3} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{3} + 2\\sum_{i=1}^{2} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 1,\\; y_{3} = 10",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "2 + 5",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (2 + 5)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(1 + 10 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 15.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Three strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{3} y\\,dx \\approx 15.5",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{3} y\\,dx \\approx 15.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{0}^{8} y\\,dx$ given the ordinates $y = [0, 1, 4, 9, 16, 25, 36, 49, 64]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{8 - 0}{4} = 2",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{8} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{4} = 64",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1+4+9+16+25+36+49",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1+4+9+16+25+36+49)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{2}{2}\\left(0 + 64 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 680",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Eight-unit range.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{8} y\\,dx \\approx 680",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{8} y\\,dx \\approx 680$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 2 strips to estimate $\\displaystyle\\int_{0}^{2} y\\,dx$ given the ordinates $y = [1, 2, 5]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{2 - 0}{2} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{2} + 2\\sum_{i=1}^{1} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 1,\\; y_{2} = 5",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "2",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (2)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(1 + 5 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 6.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Two strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx 6.5",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} y\\,dx \\approx 6.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{1}^{5} y\\,dx$ given the ordinates $y = [1, 2, 5, 10, 17]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{5 - 1}{4} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{1}^{5} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 1,\\; y_{4} = 17",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "2 + 5 + 10",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (2 + 5 + 10)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(1 + 17 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 48",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Four strips on $[1,5]$.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{1}^{5} y\\,dx \\approx 48",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{5} y\\,dx \\approx 48$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 5 strips to estimate $\\displaystyle\\int_{0}^{10} y\\,dx$ given the ordinates $y = [0, 1, 4, 9, 16, 25]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{10 - 0}{5} = 2",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{10} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{5} + 2\\sum_{i=1}^{4} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{5} = 25",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1+4+9+16",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1+4+9+16)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{2}{2}\\left(0 + 25 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 330",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Width $h=2$.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{10} y\\,dx \\approx 330",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{10} y\\,dx \\approx 330$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q016",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 2 strips to estimate $\\displaystyle\\int_{0}^{4} y\\,dx$ given the ordinates $y = [0, 1, 16]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{4 - 0}{2} = 2",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{2} + 2\\sum_{i=1}^{1} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{2} = 16",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{2}{2}\\left(0 + 16 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 34",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Coarse estimate.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx 34",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{4} y\\,dx \\approx 34$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q017",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 2 strips to estimate $\\displaystyle\\int_{0}^{1} y\\,dx$ given the ordinates $y = [0, 0.5, 1]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{1 - 0}{2} = 0.50",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{1} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{2} + 2\\sum_{i=1}^{1} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{2} = 1",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "0.5",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (0.5)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{0.50}{2}\\left(0 + 1 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 0.375",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Half-unit strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{1} y\\,dx \\approx 0.375",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} y\\,dx \\approx 0.375$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q018",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 6 strips to estimate $\\displaystyle\\int_{0}^{6} y\\,dx$ given the ordinates $y = [0, 1, 4, 9, 16, 25, 36]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{6 - 0}{6} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{6} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{6} + 2\\sum_{i=1}^{5} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{6} = 36",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1+4+9+16+25",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1+4+9+16+25)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(0 + 36 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 252",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Six strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{6} y\\,dx \\approx 252",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{6} y\\,dx \\approx 252$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q019",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 1 strips to estimate $\\displaystyle\\int_{0}^{3} y\\,dx$ given the ordinates $y = [0, 9]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{3 - 0}{1} = 3",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{3} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{1} + 2\\sum_{i=1}^{0} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{1} = 9",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "0",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (0)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{3}{2}\\left(0 + 9 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 13.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Single strip (one trapezium).",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{3} y\\,dx \\approx 13.5",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{3} y\\,dx \\approx 13.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q020",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 8 strips to estimate $\\displaystyle\\int_{0}^{4} y\\,dx$ given the ordinates $y = [0, 0.25, 1, 2.25, 4, 6.25, 9, 12.25, 16]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{4 - 0}{8} = 0.50",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{8} + 2\\sum_{i=1}^{7} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{8} = 16",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "0.25+1+2.25+4+6.25+9+12.25",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (0.25+1+2.25+4+6.25+9+12.25)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{0.50}{2}\\left(0 + 16 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 85.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Eight strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx 85.5",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{4} y\\,dx \\approx 85.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q021",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{1}^{3} y\\,dx$ given the ordinates $y = [1, 1.25, 2, 3.25, 5]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{3 - 1}{4} = 0.50",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{1}^{3} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 1,\\; y_{4} = 5",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1.25+2+3.25",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1.25+2+3.25)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{0.50}{2}\\left(1 + 5 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 8.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Four strips on $[1,3]$.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{1}^{3} y\\,dx \\approx 8.5",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{1}^{3} y\\,dx \\approx 8.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q022",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 5 strips to estimate $\\displaystyle\\int_{0}^{5} y\\,dx$ given the ordinates $y = [2, 3, 6, 11, 18, 27]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{5 - 0}{5} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{5} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{5} + 2\\sum_{i=1}^{4} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 2,\\; y_{5} = 27",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "3+6+11+18",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (3+6+11+18)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(2 + 27 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 155",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Shifted quadratic values.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{5} y\\,dx \\approx 155",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{5} y\\,dx \\approx 155$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q023",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 1 strips to estimate $\\displaystyle\\int_{0}^{2} y\\,dx$ given the ordinates $y = [1, 5]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{2 - 0}{1} = 2",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{1} + 2\\sum_{i=1}^{0} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 1,\\; y_{1} = 5",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "0",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (0)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{2}{2}\\left(1 + 5 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 6",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Single trapezium.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx 6",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} y\\,dx \\approx 6$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q024",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{0}^{4} y\\,dx$ given the ordinates $y = [2, 3, 6, 11, 18]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{4 - 0}{4} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 2,\\; y_{4} = 18",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "3+6+11",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (3+6+11)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(2 + 18 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 50",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Four strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx 50",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{4} y\\,dx \\approx 50$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q025",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 6 strips to estimate $\\displaystyle\\int_{0}^{3} y\\,dx$ given the ordinates $y = [0, 0.25, 1, 2.25, 4, 6.25, 9]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{3 - 0}{6} = 0.50",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{3} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{6} + 2\\sum_{i=1}^{5} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{6} = 9",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "0.25+1+2.25+4+6.25",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (0.25+1+2.25+4+6.25)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{0.50}{2}\\left(0 + 9 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 19.125",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Six strips on $[0,3]$.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{3} y\\,dx \\approx 19.125",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{3} y\\,dx \\approx 19.125$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q026",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 5 strips to estimate $\\displaystyle\\int_{0}^{1} y\\,dx$ given the ordinates $y = [0, 0.04, 0.16, 0.36, 0.64, 1]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{1 - 0}{5} = 0.20",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{1} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{5} + 2\\sum_{i=1}^{4} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{5} = 1",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "0.04+0.16+0.36+0.64",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (0.04+0.16+0.36+0.64)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{0.20}{2}\\left(0 + 1 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 0.34",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Fine strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{1} y\\,dx \\approx 0.34",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{1} y\\,dx \\approx 0.34$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q027",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 2 strips to estimate $\\displaystyle\\int_{2}^{4} y\\,dx$ given the ordinates $y = [4, 5, 8, 13]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{4 - 2}{2} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{2}^{4} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{2} + 2\\sum_{i=1}^{1} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 4,\\; y_{2} = 13",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "5",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (5)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(4 + 13 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 21.5",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Two strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{2}^{4} y\\,dx \\approx 21.5",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{2}^{4} y\\,dx \\approx 21.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q028",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 3 strips to estimate $\\displaystyle\\int_{0}^{6} y\\,dx$ given the ordinates $y = [0, 1, 4, 9, 16, 25, 36]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{6 - 0}{3} = 2",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{6} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{3} + 2\\sum_{i=1}^{2} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 0,\\; y_{3} = 36",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1+4+9+16+25",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1+4+9+16+25)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{2}{2}\\left(0 + 36 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 126",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Three strips, $h=2$.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{6} y\\,dx \\approx 126",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{6} y\\,dx \\approx 126$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q029",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{0}^{2} y\\,dx$ given the ordinates $y = [1, 1.0625, 1.25, 1.5625, 2]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{2 - 0}{4} = 0.50",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 1,\\; y_{4} = 2",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "1.0625+1.25+1.5625",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (1.0625+1.25+1.5625)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{0.50}{2}\\left(1 + 2 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 3.125",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Square root curve values.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{2} y\\,dx \\approx 3.125",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{2} y\\,dx \\approx 3.125$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q030",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trapezium rule"
    ],
    "questionText": "Use the trapezium rule with 4 strips to estimate $\\displaystyle\\int_{0}^{4} y\\,dx$ given the ordinates $y = [3, 4, 7, 12, 19]$ at equally spaced points.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the strip width",
          "workingLatex": "h = \\dfrac{4 - 0}{4} = 1",
          "explanation": "Divide the interval into equal strips of width $h$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trapezium rule",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx \\dfrac{h}{2}\\left(y_{0} + y_{4} + 2\\sum_{i=1}^{3} y_{i}\\right)",
          "explanation": "The formula weights the end ordinates once and interior ordinates twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the ordinates",
          "workingLatex": "y_{0} = 3,\\; y_{4} = 19",
          "explanation": "Read the $y$-values at the endpoints from the table or function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the interior ordinates",
          "workingLatex": "4+7+12",
          "explanation": "Add the $y$-values at the internal $x$-points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Double the interior sum",
          "workingLatex": "2 \\times (4+7+12)",
          "explanation": "Interior strips each contribute to two trapezia.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine all terms",
          "workingLatex": "\\dfrac{1}{2}\\left(3 + 19 + 2 \\times \\cdots\\right)",
          "explanation": "Substitute into the trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "\\approx 66",
          "explanation": "Carry out the arithmetic carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "Four strips.",
          "explanation": "This is an approximation to the area under the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the estimate",
          "workingLatex": "\\int_{0}^{4} y\\,dx \\approx 66",
          "explanation": "Include units if the question is in context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_{0}^{4} y\\,dx \\approx 66$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q031",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = x^{2} on [0,2]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = x^{2} on [0,2]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = 2 > 0 \\text{ (concave up)}",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Over-estimate",
          "explanation": "the chords lie above the curve",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an over-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) > 0 \\Rightarrow \\text{over-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an over-estimate because the chords lie above the curve."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q032",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = -x^{2} + 4 on [0,2]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = -x^{2} + 4 on [0,2]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = -2 < 0 \\text{ (concave down)}",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Under-estimate",
          "explanation": "the chords lie below the curve",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an under-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an under-estimate because the chords lie below the curve."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q033",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = e^{x} on [0,1]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = e^{x} on [0,1]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = e^{x} > 0",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Over-estimate",
          "explanation": "exponential growth is concave up",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an over-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an over-estimate because exponential growth is concave up."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q034",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = \\ln x on [1,3]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = \\ln x on [1,3]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = -\\dfrac{1}{x^{2}} < 0",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Under-estimate",
          "explanation": "logarithm is concave down",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an under-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an under-estimate because logarithm is concave down."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q035",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = x^{3} on [0,1]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = x^{3} on [0,1]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = 6x > 0 \\text{ on } (0,1]",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Over-estimate",
          "explanation": "cubic is concave up for $x>0$",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an over-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an over-estimate because cubic is concave up for $x>0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q036",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = \\sqrt{x} on [0,4]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = \\sqrt{x} on [0,4]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = -\\dfrac{1}{4x^{3/2}} < 0",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Under-estimate",
          "explanation": "square root is concave down",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an under-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an under-estimate because square root is concave down."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q037",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = \\cos x on [0, \\pi]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = \\cos x on [0, \\pi]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = -\\cos x < 0 \\text{ on } (0, \\pi)",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Under-estimate",
          "explanation": "cosine is concave down on this interval",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an under-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an under-estimate because cosine is concave down on this interval."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q038",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = x^{2} + 1 on [-1,1]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = x^{2} + 1 on [-1,1]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = 2 > 0",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Over-estimate",
          "explanation": "parabola opens upward",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an over-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an over-estimate because parabola opens upward."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q039",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = 4 - x^{2} on [-2,2]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = 4 - x^{2} on [-2,2]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = -2 < 0",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Under-estimate",
          "explanation": "inverted parabola is concave down",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an under-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an under-estimate because inverted parabola is concave down."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q040",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = \\dfrac{1}{x} on [1,3]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = \\dfrac{1}{x} on [1,3]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = \\dfrac{2}{x^{3}} > 0",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Over-estimate",
          "explanation": "reciprocal is concave up on positive domain",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an over-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an over-estimate because reciprocal is concave up on positive domain."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q041",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = \\sin x on [0, \\pi]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = \\sin x on [0, \\pi]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = -\\sin x < 0 \\text{ on } (0, \\pi)",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Under-estimate",
          "explanation": "sine arch is concave down above the axis",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an under-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an under-estimate because sine arch is concave down above the axis."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q042",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "over-estimate",
      "under-estimate"
    ],
    "questionText": "For $f(x) = x^{4} on [-1,1]$, explain whether the trapezium rule gives an over-estimate or an under-estimate of $\\displaystyle\\int y\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the trapezium rule geometry",
          "workingLatex": "\\text{Each strip uses a straight chord}",
          "explanation": "The rule replaces the curve with straight line segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the curve shape",
          "workingLatex": "f(x) = x^{4} on [-1,1]",
          "explanation": "Concavity determines whether chords lie above or below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare chord and curve",
          "workingLatex": "f''(x) = 12x^{2} \\geq 0",
          "explanation": "On a convex (concave up) curve, the chord lies above the curve between the points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine over or under",
          "workingLatex": "Over-estimate",
          "explanation": "even power quartic is concave up at boundaries",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Visual check",
          "workingLatex": "\\text{Trapezia vs true area}",
          "explanation": "Sketching helps confirm the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{The trapezium rule gives an over-estimate}",
          "explanation": "This is a standard exam classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General rule",
          "workingLatex": "f''(x) < 0 \\Rightarrow \\text{under-estimate}",
          "explanation": "Second derivative sign determines concavity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The trapezium rule gives an over-estimate because even power quartic is concave up at boundaries."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q043",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{2} f(x)\\,dx$ using the trapezium rule with $2$ and $4$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 2 \\Rightarrow \\approx 5",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 4 \\Rightarrow \\approx 4.25",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 2.667",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|5 - 2.667|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|4.25 - 2.667|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact $\\int_0^2 x^2 dx = 8/3$; more strips improve the estimate.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 4 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $2$ strips: $\\approx 5$. With $4$ strips: $\\approx 4.25$. The $4$-strip estimate is more accurate (exact value $2.667$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q044",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{1} f(x)\\,dx$ using the trapezium rule with $2$ and $4$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 2 \\Rightarrow \\approx 0.375",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 4 \\Rightarrow \\approx 0.34375",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 0.333",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|0.375 - 0.333|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|0.34375 - 0.333|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact $\\int_0^1 x^2 dx = 1/3$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 4 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $2$ strips: $\\approx 0.375$. With $4$ strips: $\\approx 0.34375$. The $4$-strip estimate is more accurate (exact value $0.333$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q045",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{4} f(x)\\,dx$ using the trapezium rule with $2$ and $4$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 2 \\Rightarrow \\approx 42",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 4 \\Rightarrow \\approx 34.5",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 21.333",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|42 - 21.333|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|34.5 - 21.333|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact $\\int_0^4 x^2 dx = 64/3$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 4 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $2$ strips: $\\approx 42$. With $4$ strips: $\\approx 34.5$. The $4$-strip estimate is more accurate (exact value $21.333$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q046",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{3} f(x)\\,dx$ using the trapezium rule with $3$ and $6$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 3 \\Rightarrow \\approx 10.5",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 6 \\Rightarrow \\approx 9.75",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 9",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|10.5 - 9|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|9.75 - 9|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact $\\int_0^3 x^2 dx = 9$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 6 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $3$ strips: $\\approx 10.5$. With $6$ strips: $\\approx 9.75$. The $6$-strip estimate is more accurate (exact value $9$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q047",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{1}^{3} f(x)\\,dx$ using the trapezium rule with $2$ and $4$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 2 \\Rightarrow \\approx 12",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 4 \\Rightarrow \\approx 10.75",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 8.667",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|12 - 8.667|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|10.75 - 8.667|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact $\\int_1^3 x^2 dx = 26/3$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 4 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $2$ strips: $\\approx 12$. With $4$ strips: $\\approx 10.75$. The $4$-strip estimate is more accurate (exact value $8.667$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q048",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{2} f(x)\\,dx$ using the trapezium rule with $1$ and $2$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 1 \\Rightarrow \\approx 6",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 2 \\Rightarrow \\approx 5",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 2.667",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|6 - 2.667|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|5 - 2.667|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Single strip is very crude for a curve.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 2 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $1$ strips: $\\approx 6$. With $2$ strips: $\\approx 5$. The $2$-strip estimate is more accurate (exact value $2.667$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q049",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{5} f(x)\\,dx$ using the trapezium rule with $5$ and $10$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 5 \\Rightarrow \\approx 110",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 10 \\Rightarrow \\approx 105",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 41.667",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|110 - 41.667|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|105 - 41.667|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact $\\int_0^5 x^2 dx = 125/3$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 10 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $5$ strips: $\\approx 110$. With $10$ strips: $\\approx 105$. The $10$-strip estimate is more accurate (exact value $41.667$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q050",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{1} f(x)\\,dx$ using the trapezium rule with $4$ and $8$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 4 \\Rightarrow \\approx 0.34",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 8 \\Rightarrow \\approx 0.335",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 0.333",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|0.34 - 0.333|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|0.335 - 0.333|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Eight strips give high accuracy on $[0,1]$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 8 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $4$ strips: $\\approx 0.34$. With $8$ strips: $\\approx 0.335$. The $8$-strip estimate is more accurate (exact value $0.333$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q051",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{6} f(x)\\,dx$ using the trapezium rule with $3$ and $6$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 3 \\Rightarrow \\approx 126",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 6 \\Rightarrow \\approx 120",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 72",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|126 - 72|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|120 - 72|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact $\\int_0^6 x^2 dx = 72$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 6 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $3$ strips: $\\approx 126$. With $6$ strips: $\\approx 120$. The $6$-strip estimate is more accurate (exact value $72$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q052",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{4} f(x)\\,dx$ using the trapezium rule with $4$ and $8$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 4 \\Rightarrow \\approx 42",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 8 \\Rightarrow \\approx 40.5",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 21.333",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|42 - 21.333|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|40.5 - 21.333|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Doubling strips halves the error roughly.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 8 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $4$ strips: $\\approx 42$. With $8$ strips: $\\approx 40.5$. The $8$-strip estimate is more accurate (exact value $21.333$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q053",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{2}^{6} f(x)\\,dx$ using the trapezium rule with $2$ and $4$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 2 \\Rightarrow \\approx 62",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 4 \\Rightarrow \\approx 58",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 56",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|62 - 56|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|58 - 56|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact value from integrating $x^2$ on $[2,6]$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 4 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $2$ strips: $\\approx 62$. With $4$ strips: $\\approx 58$. The $4$-strip estimate is more accurate (exact value $56$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q054",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{3} f(x)\\,dx$ using the trapezium rule with $1$ and $3$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 1 \\Rightarrow \\approx 13.5",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 3 \\Rightarrow \\approx 10.5",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 9",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|13.5 - 9|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|10.5 - 9|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "One strip is a single trapezium.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 3 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $1$ strips: $\\approx 13.5$. With $3$ strips: $\\approx 10.5$. The $3$-strip estimate is more accurate (exact value $9$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q055",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{2} f(x)\\,dx$ using the trapezium rule with $4$ and $8$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 4 \\Rightarrow \\approx 4.25",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 8 \\Rightarrow \\approx 4.03125",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 2.667",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|4.25 - 2.667|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|4.03125 - 2.667|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Eight strips on $[0,2]$ for $y=x^2$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 8 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $4$ strips: $\\approx 4.25$. With $8$ strips: $\\approx 4.03125$. The $8$-strip estimate is more accurate (exact value $2.667$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q056",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{10} f(x)\\,dx$ using the trapezium rule with $5$ and $10$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 5 \\Rightarrow \\approx 330",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 10 \\Rightarrow \\approx 325",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 333.33",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|330 - 333.33|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|325 - 333.33|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact $\\int_0^{10} x^2 dx = 1000/3$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 10 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $5$ strips: $\\approx 330$. With $10$ strips: $\\approx 325$. The $10$-strip estimate is more accurate (exact value $333.33$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q057",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{1} f(x)\\,dx$ using the trapezium rule with $2$ and $5$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 2 \\Rightarrow \\approx 0.375",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 5 \\Rightarrow \\approx 0.34",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 0.333",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|0.375 - 0.333|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|0.34 - 0.333|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Five strips on unit interval.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 5 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $2$ strips: $\\approx 0.375$. With $5$ strips: $\\approx 0.34$. The $5$-strip estimate is more accurate (exact value $0.333$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q058",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "accuracy",
      "strips"
    ],
    "questionText": "Estimate $\\displaystyle\\int_{0}^{8} f(x)\\,dx$ using the trapezium rule with $4$ and $8$ strips. Which is more accurate?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply trapezium rule with n strips",
          "workingLatex": "n = 4 \\Rightarrow \\approx 680",
          "explanation": "Fewer strips give a cruder approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply with more strips",
          "workingLatex": "n = 8 \\Rightarrow \\approx 650",
          "explanation": "Doubling strips generally improves accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare with exact value",
          "workingLatex": "\\text{Exact} = 170.667",
          "explanation": "If the integral can be found exactly, use it as reference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Error for n₁",
          "workingLatex": "|680 - 170.667|",
          "explanation": "Smaller error means better estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error for n₂",
          "workingLatex": "|650 - 170.667|",
          "explanation": "More strips usually reduce error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "Exact $\\int_0^8 x^2 dx = 512/3$.",
          "explanation": "Increasing the number of strips improves the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which is better",
          "workingLatex": "n = 8 \\text{ is more accurate}",
          "explanation": "Halving $h$ typically halves the error for smooth functions.",
          "diagram": null
        }
      ],
      "finalAnswer": "With $4$ strips: $\\approx 680$. With $8$ strips: $\\approx 650$. The $8$-strip estimate is more accurate (exact value $170.667$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q059",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "mechanics",
      "application",
      "multi-step"
    ],
    "questionText": "The velocity of a particle is given in the table below for $0 \\leq t \\leq 4$. Use the trapezium rule with 4 strips to estimate the distance travelled.\n\n| $t$ | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $v$ | 0 | 3 | 8 | 15 | 24 |",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distance as integral",
          "workingLatex": "\\text{distance} = \\int_{0}^{4} v\\,dt",
          "explanation": "Integrating velocity gives displacement.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 1",
          "explanation": "Four strips on $[0,4]$ gives $h=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trapezium rule",
          "workingLatex": "\\approx \\dfrac{1}{2}(0 + 24 + 2(3 + 8 + 15))",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interior sum",
          "workingLatex": "3 + 8 + 15 = 26",
          "explanation": "Add internal ordinates.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\dfrac{1}{2}(24 + 52) = 38",
          "explanation": "Total distance estimate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Units",
          "workingLatex": "38 \\text{ m}",
          "explanation": "Velocity in m/s times time in s.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "v = t^{2} + 2t",
          "explanation": "The data matches a quadratic model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Exact check",
          "workingLatex": "\\int_{0}^{4}(t^{2}+2t)dt = 42.667",
          "explanation": "Trapezium gives slight under-estimate if concave up.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Distance} \\approx 38 \\text{ m}",
          "explanation": "Contextual final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Distance $\\approx 38$ m."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q060",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trigonometric",
      "multi-step"
    ],
    "questionText": "For $f(x) = \\sin x$ on $[0, \\pi]$, use the trapezium rule with 6 strips to estimate $\\int_0^\\pi \\sin x\\,dx$ and compare with the exact value.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Strip width",
          "workingLatex": "h = \\dfrac{\\pi}{6}",
          "explanation": "Six equal strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "y_{0}=0,\\; y_{6}=0,\\; y_{i}=\\sin(ih)",
          "explanation": "Endpoints are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interior values",
          "workingLatex": "\\sin(\\pi/6)=0.5,\\; \\sin(\\pi/3)=0.866,\\; \\sin(\\pi/2)=1",
          "explanation": "Key values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply formula",
          "workingLatex": "\\approx \\dfrac{h}{2}(0 + 0 + 2\\sum y_{i})",
          "explanation": "Symmetric about $\\pi/2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum",
          "workingLatex": "2(0.5 + 0.866 + 1 + 0.866 + 0.5) = 7.464",
          "explanation": "Interior contribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Estimate",
          "workingLatex": "\\approx \\dfrac{\\pi}{12}(7.464) = 1.952",
          "explanation": "Trapezium estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact",
          "workingLatex": "\\int_{0}^{\\pi}\\sin x\\,dx = 2",
          "explanation": "Direct integration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Error",
          "workingLatex": "2 - 1.952 = 0.048",
          "explanation": "Small under-estimate (concave down).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\approx 1.95",
          "explanation": "Good approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^\\pi \\sin x\\,dx \\approx 1.95$ (exact value $2$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q061",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "exponential",
      "multi-step"
    ],
    "questionText": "A curve has equation $y = e^{-x}$ for $0 \\leq x \\leq 2$. State whether the trapezium rule with 4 strips gives an over- or under-estimate, then calculate the estimate.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Second derivative",
          "workingLatex": "f''(x) = e^{-x} > 0",
          "explanation": "Exponential decay is still concave up.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classification",
          "workingLatex": "\\text{Over-estimate}",
          "explanation": "Chords lie above the decreasing curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Strip width",
          "workingLatex": "h = 0.5",
          "explanation": "Four strips on $[0,2]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Ordinates",
          "workingLatex": "y_{0}=1,\\; y_{1}=0.607,\\; y_{2}=0.368,\\; y_{3}=0.223,\\; y_{4}=0.135",
          "explanation": "Evaluate $e^{-x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Formula",
          "workingLatex": "\\approx 0.25(1 + 0.135 + 2(0.607 + 0.368 + 0.223))",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\approx 0.25(1.135 + 2.396) = 0.883",
          "explanation": "Numerical estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact",
          "workingLatex": "1 - e^{-2} = 0.865",
          "explanation": "Exact integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm",
          "workingLatex": "0.883 > 0.865",
          "explanation": "Over-estimate as predicted.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\approx 0.883 \\text{ (over-estimate)}",
          "explanation": "Final.",
          "diagram": null
        }
      ],
      "finalAnswer": "Over-estimate: $\\displaystyle\\int_0^2 e^{-x}\\,dx \\approx 0.883$ (exact $0.865$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q062",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "square root",
      "multi-step"
    ],
    "questionText": "Use the trapezium rule to show that $\\int_0^1 \\sqrt{x}\\,dx$ is underestimated with 4 strips. Find the estimate and the exact value.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Concavity",
          "workingLatex": "f''(x) = -\\dfrac{1}{4x^{3/2}} < 0",
          "explanation": "Square root is concave down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classification",
          "workingLatex": "\\text{Under-estimate}",
          "explanation": "Chords lie below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "h = 0.25",
          "workingLatex": "h = 0.25",
          "explanation": "Four strips.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Ordinates",
          "workingLatex": "0, 0.5, 0.707, 0.866, 1",
          "explanation": "Square roots at $0, 0.25, 0.5, 0.75, 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Trapezium",
          "workingLatex": "\\approx 0.125(0 + 1 + 2(0.5 + 0.707 + 0.866))",
          "explanation": "Apply formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\approx 0.125(1 + 4.146) = 0.643",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exact",
          "workingLatex": "\\int_{0}^{1}x^{1/2}dx = \\dfrac{2}{3}",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare",
          "workingLatex": "0.643 < 0.667",
          "explanation": "Confirms under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\approx 0.643",
          "explanation": "Trapezium estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "Under-estimate: $\\approx 0.643$ (exact $\\dfrac{2}{3}$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q063",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "application",
      "multi-step"
    ],
    "questionText": "The cross-sectional area of a river, in m$^{2}$, is measured every 10 m across a 50 m width. The readings are 0, 4, 9, 12, 8, 0. Estimate the cross-sectional area using the trapezium rule.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model as integral",
          "workingLatex": "A \\approx \\int_{0}^{50} y\\,dx",
          "explanation": "Area under the depth profile.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Strip width",
          "workingLatex": "h = 10",
          "explanation": "Five strips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ordinates",
          "workingLatex": "0, 4, 9, 12, 8, 0",
          "explanation": "Given readings.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Formula",
          "workingLatex": "\\approx \\dfrac{10}{2}(0 + 0 + 2(4 + 9 + 12 + 8))",
          "explanation": "Apply trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interior sum",
          "workingLatex": "4 + 9 + 12 + 8 = 33",
          "explanation": "Add internal values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "5 \\times 66 = 330",
          "explanation": "Cross-sectional area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Units",
          "workingLatex": "330 \\text{ m}^{2}",
          "explanation": "Area units.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shape",
          "workingLatex": "\\text{River profile}",
          "explanation": "Real-world application.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "A \\approx 330 \\text{ m}^{2}",
          "explanation": "Final estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "Cross-sectional area $\\approx 330$ m$^{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q064",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "percentage error",
      "multi-step"
    ],
    "questionText": "Given that $\\int_0^2 (x^2 + 1)\\,dx = 14/3$, use the trapezium rule with 2 strips to find the percentage error.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Ordinates at x=0,1,2",
          "workingLatex": "y = 1, 2, 5",
          "explanation": "Evaluate $x^2+1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "h = 1",
          "workingLatex": "h = 1",
          "explanation": "Two strips.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimate",
          "workingLatex": "\\approx \\dfrac{1}{2}(1 + 5 + 2(2)) = 5",
          "explanation": "Trapezium value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exact",
          "workingLatex": "\\dfrac{14}{3} = 4.667",
          "explanation": "Given exact value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Error",
          "workingLatex": "5 - 4.667 = 0.333",
          "explanation": "Absolute error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Percentage error",
          "workingLatex": "\\dfrac{0.333}{4.667} \\times 100\\% = 7.1\\%",
          "explanation": "Relative to exact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Over-estimate",
          "workingLatex": "f''(x) = 2 > 0",
          "explanation": "Concave up confirms over.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Improvement",
          "workingLatex": "\\text{More strips reduce error}",
          "explanation": "Standard advice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "7.1\\%",
          "explanation": "Percentage error.",
          "diagram": null
        }
      ],
      "finalAnswer": "Percentage error $\\approx 7.1\\%$ (over-estimate of $\\dfrac{14}{3}$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q065",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "logarithm",
      "multi-step"
    ],
    "questionText": "Estimate $\\int_1^3 \\dfrac{1}{x}\\,dx$ using the trapezium rule with 4 strips and comment on accuracy.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "h = 0.5",
          "workingLatex": "h = 0.5",
          "explanation": "Four strips on $[1,3]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "1, 0.667, 0.5, 0.4, 0.333",
          "explanation": "Values of $1/x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Formula",
          "workingLatex": "\\approx 0.25(1 + 0.333 + 2(0.667 + 0.5 + 0.4))",
          "explanation": "Apply rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\approx 0.25(1.333 + 3.134) = 1.117",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact",
          "workingLatex": "\\ln 3 = 1.099",
          "explanation": "Standard integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Error",
          "workingLatex": "1.117 - 1.099 = 0.018",
          "explanation": "Small over-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Concavity",
          "workingLatex": "f''(x) = 2/x^{3} > 0",
          "explanation": "Confirms over-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment",
          "workingLatex": "\\text{Reasonable accuracy with 4 strips}",
          "explanation": "Error about 1.6%.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\approx 1.12",
          "explanation": "Estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_1^3 \\dfrac{1}{x}\\,dx \\approx 1.12$ (exact $\\ln 3 \\approx 1.10$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "theory",
      "concavity",
      "multi-step"
    ],
    "questionText": "A function $f$ is increasing and concave down on $[a,b]$. Explain what happens to the trapezium rule estimate as the number of strips is doubled repeatedly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Concave down",
          "workingLatex": "\\text{Under-estimate for any } n",
          "explanation": "Each chord lies below the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Increasing n",
          "workingLatex": "h \\text{ halves each time}",
          "explanation": "Strip width decreases.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Chords closer to curve",
          "workingLatex": "\\text{Better approximation}",
          "explanation": "More trapezia hug the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Estimate increases",
          "workingLatex": "\\text{Under-estimate approaches true value from below}",
          "explanation": "Each refinement adds area.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Limit",
          "workingLatex": "\\text{Estimate} \\to \\int_{a}^{b} f(x)\\,dx",
          "explanation": "Convergence for continuous $f$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Error bound",
          "workingLatex": "\\text{Error } O(h^{2})",
          "explanation": "Halving $h$ quarters error roughly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Monotone sequence",
          "workingLatex": "S_{n} < S_{2n} < I",
          "explanation": "Estimates increase toward integral.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Practical",
          "workingLatex": "\\text{Double strips until accuracy suffices}",
          "explanation": "Standard numerical strategy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\text{Estimate increases and converges upward}",
          "explanation": "Key theoretical result.",
          "diagram": null
        }
      ],
      "finalAnswer": "With concave-down increasing $f$, trapezium estimates form an increasing sequence of under-estimates converging to the true integral."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q067",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "exponential",
      "multi-step"
    ],
    "questionText": "Use 3 strips on $[0,3]$ for $y = 2^{x}$. Find the trapezium estimate of $\\int_0^3 2^x\\,dx$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "h = 1",
          "workingLatex": "h = 1",
          "explanation": "Three strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "y_{0}=1,\\; y_{1}=2,\\; y_{2}=4,\\; y_{3}=8",
          "explanation": "Powers of 2.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Formula",
          "workingLatex": "\\approx \\dfrac{1}{2}(1 + 8 + 2(2 + 4))",
          "explanation": "Apply trapezium rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\approx 0.5(9 + 12) = 10.5",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact",
          "workingLatex": "\\dfrac{2^{3}-1}{\\ln 2} = \\dfrac{7}{\\ln 2} = 10.10",
          "explanation": "Exponential integral.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concavity",
          "workingLatex": "f''(x) = 2^{x}(\\ln 2)^{2} > 0",
          "explanation": "Over-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "10.5 > 10.10",
          "explanation": "As expected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "More strips",
          "workingLatex": "\\text{Would improve accuracy}",
          "explanation": "Exponential needs adequate strips.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\approx 10.5",
          "explanation": "Trapezium estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^3 2^x\\,dx \\approx 10.5$ (exact $\\approx 10.10$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q068",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "theory",
      "multi-step"
    ],
    "questionText": "The graph of $y = f(x)$ passes through (0,0), (1,1), (2,4), (3,9), (4,16). Without knowing $f$, explain why the trapezium rule with 4 strips gives the exact value of $\\int_0^4 f(x)\\,dx$ if $f(x)=x^2$, but not if $f(x)=4x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Trapezium on linear",
          "workingLatex": "f(x) = 4x \\Rightarrow \\text{exact for any } n",
          "explanation": "Chords coincide with the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Wait — linear is exact",
          "workingLatex": "\\text{Both linear and quadratic cases}",
          "explanation": "Clarify: linear IS exact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Quadratic case",
          "workingLatex": "f(x) = x^{2}",
          "explanation": "Concave up — over-estimate expected.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "But endpoints match",
          "workingLatex": "\\text{Same table values}",
          "explanation": "Both pass through the same points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Quadratic integral",
          "workingLatex": "\\int_{0}^{4}x^{2}dx = 21.333",
          "explanation": "Exact value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Trapezium for x²",
          "workingLatex": "T = 42 \\text{ with these ordinates? Recheck: } \\dfrac{1}{2}(0+16+2(1+4+9))=21",
          "explanation": "Actually gives 21 — close but not exact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Linear integral",
          "workingLatex": "\\int_{0}^{4}4x\\,dx = 32",
          "explanation": "Trapezium gives exactly 32.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Key point",
          "workingLatex": "\\text{Linear functions are integrated exactly}",
          "explanation": "Quadratic gives approximation unless special symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Linear: exact; quadratic: approximate}",
          "explanation": "Distinction.",
          "diagram": null
        }
      ],
      "finalAnswer": "Linear $f(x)=4x$ is integrated exactly by the trapezium rule; quadratic $f(x)=x^2$ gives an over-estimate ($21$ vs exact $\\dfrac{64}{3}$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q069",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "trigonometric",
      "multi-step"
    ],
    "questionText": "Estimate $\\int_0^{\\pi/2} \\cos x\\,dx$ using 4 strips and determine whether your answer is an over- or under-estimate.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "h = \\pi/8",
          "workingLatex": "h = \\dfrac{\\pi}{8}",
          "explanation": "Four strips.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Ordinates",
          "workingLatex": "1, 0.924, 0.707, 0.383, 0",
          "explanation": "Cosine values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Formula",
          "workingLatex": "\\approx \\dfrac{\\pi}{16}(1 + 0 + 2(0.924 + 0.707 + 0.383))",
          "explanation": "Apply rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\approx 0.987",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact",
          "workingLatex": "1",
          "explanation": "Integral of cos on $[0,\\pi/2]$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Concavity",
          "workingLatex": "f''(x) = -\\cos x < 0",
          "explanation": "Under-estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm",
          "workingLatex": "0.987 < 1",
          "explanation": "Matches theory.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Error",
          "workingLatex": "0.013",
          "explanation": "About 1.3%.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\approx 0.987 \\text{ (under-estimate)}",
          "explanation": "Final.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx \\approx 0.987$ (under-estimate; exact value $1$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Numerical integration",
    "subtopicId": "al.y2.pure.numerical-integration",
    "questionDiagram": null,
    "id": "al.y2.pure.numerical-integration.q070",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "decimal",
    "tags": [
      "numerical integration",
      "trapezium rule",
      "percentage error",
      "accuracy",
      "multi-step"
    ],
    "questionText": "A student estimates $\\int_0^4 x^2\\,dx$ using 4 strips and obtains 34. The exact answer is $\\dfrac{64}{3}$. Find the percentage error, explain whether the estimate is an over- or under-estimate, and state how many strips would be needed to guarantee error below 1% (by doubling).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Verify estimate",
          "workingLatex": "T = \\dfrac{1}{2}(0 + 16 + 2(1 + 4 + 9)) = 34",
          "explanation": "Confirm student's answer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exact",
          "workingLatex": "I = \\dfrac{64}{3} = 21.333",
          "explanation": "True integral.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Wait — recalculate",
          "workingLatex": "T = 2(0 + 16 + 2 \\times 14) = 2 \\times 44 = 44? \\text{ Use } h=1: \\dfrac{1}{2}(0+16+28)=22",
          "explanation": "Correct trapezium: 22.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Percentage error",
          "workingLatex": "\\dfrac{|22 - 21.333|}{21.333} \\times 100\\% = 3.1\\%",
          "explanation": "Using corrected estimate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classification",
          "workingLatex": "f''(x) = 2 > 0 \\Rightarrow \\text{over-estimate}",
          "explanation": "Parabola concave up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "n=8 estimate",
          "workingLatex": "T_{8} \\approx 21.5",
          "explanation": "Halving $h$ improves.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "n=16",
          "workingLatex": "T_{16} \\approx 21.35",
          "explanation": "Error below 1%.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rule",
          "workingLatex": "\\text{Double strips until error small enough}",
          "explanation": "Practical strategy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3.1\\% \\text{ error, over-estimate; need 16 strips}",
          "explanation": "Complete response.",
          "diagram": null
        }
      ],
      "finalAnswer": "Percentage error $\\approx 3.1\\%$ (over-estimate). Doubling to 16 strips reduces error below 1%."
    }
  }
];
