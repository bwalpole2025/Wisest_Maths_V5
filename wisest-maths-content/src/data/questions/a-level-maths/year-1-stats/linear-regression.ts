import type { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 1 Statistics · Linear regression
 * The least-squares regression line of y on x: computing it from summary
 * statistics and raw totals, interpreting the gradient and intercept,
 * prediction, interpolation vs extrapolation, residuals, coding, and
 * working backwards. 70 questions with full worked solutions.
 */
export const questions: Question[] = [
  {
    "id": "al.y1.stats.linear-regression.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "regression",
      "explanatory",
      "response",
      "rain"
    ],
    "questionText": "A shop records the daily rainfall $x$ (in mm) and the number of umbrellas sold $y$. (a) State which variable is the explanatory (independent) variable and which is the response (dependent) variable. (b) State which regression line should be used.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the explanatory variable",
          "workingLatex": "x = \\text{explanatory}",
          "explanation": "The explanatory (independent) variable is the one we set, control or use as the input to make a prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the response variable",
          "workingLatex": "y = \\text{response}",
          "explanation": "The response (dependent) variable is the outcome we expect to change as a result, and the one we want to predict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide the roles here",
          "workingLatex": "\\text{rainfall drives umbrella sales}",
          "explanation": "It makes sense that rainfall influences umbrella sales, not the other way round, so rainfall is the input.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assign the explanatory variable",
          "workingLatex": "x = \\text{rainfall}",
          "explanation": "So rainfall is the explanatory variable $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assign the response variable",
          "workingLatex": "y = \\text{umbrella sales}",
          "explanation": "And umbrella sales is the response variable $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State which line to use",
          "workingLatex": "y \\text{ on } x",
          "explanation": "Since we want to predict the response from the explanatory variable, we use the regression line of $y$ on $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Explanatory: rainfall ($x$); response: umbrella sales ($y$). Use the regression line of $y$ on $x$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "regression",
      "explanatory",
      "response",
      "temp"
    ],
    "questionText": "A seaside cafe records the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$. (a) State which variable is the explanatory (independent) variable and which is the response (dependent) variable. (b) State which regression line should be used.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the explanatory variable",
          "workingLatex": "x = \\text{explanatory}",
          "explanation": "The explanatory (independent) variable is the one we set, control or use as the input to make a prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the response variable",
          "workingLatex": "y = \\text{response}",
          "explanation": "The response (dependent) variable is the outcome we expect to change as a result, and the one we want to predict.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide the roles here",
          "workingLatex": "\\text{temperature drives cold-drink sales}",
          "explanation": "It makes sense that temperature influences cold-drink sales, not the other way round, so temperature is the input.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Assign the explanatory variable",
          "workingLatex": "x = \\text{temperature}",
          "explanation": "So temperature is the explanatory variable $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assign the response variable",
          "workingLatex": "y = \\text{cold-drink sales}",
          "explanation": "And cold-drink sales is the response variable $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State which line to use",
          "workingLatex": "y \\text{ on } x",
          "explanation": "Since we want to predict the response from the explanatory variable, we use the regression line of $y$ on $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Explanatory: temperature ($x$); response: cold-drink sales ($y$). Use the regression line of $y$ on $x$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "interpret",
      "gradient",
      "temp"
    ],
    "questionText": "A seaside cafe models the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$. The least-squares regression line of $y$ on $x$ is $y = 30 + 6x$. Interpret the gradient of this line in context.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 14.0,
          "y": 120.3
        },
        {
          "x": 16.0,
          "y": 132.4
        },
        {
          "x": 18.0,
          "y": 143.5
        },
        {
          "x": 20.0,
          "y": 152.0
        },
        {
          "x": 22.0,
          "y": 165.6
        },
        {
          "x": 24.0,
          "y": 171.7
        },
        {
          "x": 26.0,
          "y": 189.2
        },
        {
          "x": 28.0,
          "y": 204.8
        },
        {
          "x": 30.0,
          "y": 205.6
        },
        {
          "x": 32.0,
          "y": 228.2
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold-drink sales against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 30,
        "b": 6
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the gradient",
          "workingLatex": "b = 6",
          "explanation": "In $y = a + bx$ the number multiplying $x$ is the gradient, so read it off first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what a gradient means",
          "workingLatex": "b = \\dfrac{\\text{change in } y}{\\text{change in } x}",
          "explanation": "A gradient always measures how much the output changes for a one-unit increase in the input.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply it to a one-unit rise",
          "workingLatex": "\\Delta x = 1 \\;\\Rightarrow\\; \\Delta y = 6",
          "explanation": "Increasing temperature by one $\\degree\\text{C}$ changes the predicted cold-drink sales by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the sign",
          "workingLatex": "\\text{sign of } b",
          "explanation": "The sign tells you the direction: positive means the two rise together, negative means one falls as the other rises.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the meaning in context",
          "workingLatex": "b = 6",
          "explanation": "Because the gradient is positive, more temperature is associated with more cold-drink sales: each extra $\\degree\\text{C}$ of temperature adds about $6$ to cold-drink sales, on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the usual caveat",
          "workingLatex": "\\text{average, not exact}",
          "explanation": "The gradient describes an average trend across the data, not a guaranteed change for any single case, and association here is not proof of cause.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient $6$ means each extra $\\degree\\text{C}$ of temperature is associated with a change of about $6$ in cold-drink sales, on average."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "interpret",
      "gradient",
      "age"
    ],
    "questionText": "A car dealer models the age $x$ (in years) and the second-hand value $y$ (in $\\pounds000$). The least-squares regression line of $y$ on $x$ is $y = 16 - 1.5x$. Interpret the gradient of this line in context.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1.0,
          "y": 14.7
        },
        {
          "x": 2.0,
          "y": 13.2
        },
        {
          "x": 3.0,
          "y": 11.4
        },
        {
          "x": 4.0,
          "y": 10.4
        },
        {
          "x": 5.0,
          "y": 8.4
        },
        {
          "x": 6.0,
          "y": 6.9
        },
        {
          "x": 7.0,
          "y": 4.6
        },
        {
          "x": 8.0,
          "y": 3.0
        },
        {
          "x": 9.0,
          "y": 2.8
        },
        {
          "x": 10.0,
          "y": -0.1
        }
      ],
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds000)",
      "caption": "Second-hand value against age.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 16,
        "b": -1.5
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the gradient",
          "workingLatex": "b = -1.5",
          "explanation": "In $y = a + bx$ the number multiplying $x$ is the gradient, so read it off first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what a gradient means",
          "workingLatex": "b = \\dfrac{\\text{change in } y}{\\text{change in } x}",
          "explanation": "A gradient always measures how much the output changes for a one-unit increase in the input.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply it to a one-unit rise",
          "workingLatex": "\\Delta x = 1 \\;\\Rightarrow\\; \\Delta y = -1.5",
          "explanation": "Increasing age by one $\\text{year}$ changes the predicted value by $-1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the sign",
          "workingLatex": "\\text{sign of } b",
          "explanation": "The sign tells you the direction: positive means the two rise together, negative means one falls as the other rises.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the meaning in context",
          "workingLatex": "b = -1.5",
          "explanation": "Because the gradient is negative, more age is associated with less value: each extra $\\text{year}$ of age removes about $1.5$ from value, on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the usual caveat",
          "workingLatex": "\\text{average, not exact}",
          "explanation": "The gradient describes an average trend across the data, not a guaranteed change for any single case, and association here is not proof of cause.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient $-1.5$ means each extra $\\text{year}$ of age is associated with a change of about $-1.5$ in value, on average."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "interpret",
      "gradient",
      "temp"
    ],
    "questionText": "A household models the daily mean temperature $x$ (in $\\degree\\text{C}$) and the gas used for heating $y$ (in kWh). The least-squares regression line of $y$ on $x$ is $y = 90 - 4.5x$. Interpret the gradient of this line in context.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": -2.0,
          "y": 99.4
        },
        {
          "x": -0.22,
          "y": 90.6
        },
        {
          "x": 1.56,
          "y": 83.8
        },
        {
          "x": 3.33,
          "y": 74.9
        },
        {
          "x": 5.11,
          "y": 70.8
        },
        {
          "x": 6.89,
          "y": 56.9
        },
        {
          "x": 8.67,
          "y": 49.6
        },
        {
          "x": 10.44,
          "y": 41.7
        },
        {
          "x": 12.22,
          "y": 31.5
        },
        {
          "x": 14.0,
          "y": 23.9
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "gas (kWh)",
      "caption": "Gas use against temperature.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 90,
        "b": -4.5
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the gradient",
          "workingLatex": "b = -4.5",
          "explanation": "In $y = a + bx$ the number multiplying $x$ is the gradient, so read it off first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what a gradient means",
          "workingLatex": "b = \\dfrac{\\text{change in } y}{\\text{change in } x}",
          "explanation": "A gradient always measures how much the output changes for a one-unit increase in the input.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply it to a one-unit rise",
          "workingLatex": "\\Delta x = 1 \\;\\Rightarrow\\; \\Delta y = -4.5",
          "explanation": "Increasing temperature by one $\\degree\\text{C}$ changes the predicted gas use by $-4.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the sign",
          "workingLatex": "\\text{sign of } b",
          "explanation": "The sign tells you the direction: positive means the two rise together, negative means one falls as the other rises.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the meaning in context",
          "workingLatex": "b = -4.5",
          "explanation": "Because the gradient is negative, more temperature is associated with less gas use: each extra $\\degree\\text{C}$ of temperature removes about $4.5$ from gas use, on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the usual caveat",
          "workingLatex": "\\text{average, not exact}",
          "explanation": "The gradient describes an average trend across the data, not a guaranteed change for any single case, and association here is not proof of cause.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient $-4.5$ means each extra $\\degree\\text{C}$ of temperature is associated with a change of about $-4.5$ in gas use, on average."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "interpret",
      "gradient",
      "sun"
    ],
    "questionText": "An outdoor lido models the daily sunshine $x$ (in hours) and the attendance $y$. The least-squares regression line of $y$ on $x$ is $y = 60 + 45x$. Interpret the gradient of this line in context.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 67.8
        },
        {
          "x": 1.33,
          "y": 147.8
        },
        {
          "x": 2.67,
          "y": 151.0
        },
        {
          "x": 4.0,
          "y": 211.1
        },
        {
          "x": 5.33,
          "y": 284.5
        },
        {
          "x": 6.67,
          "y": 371.0
        },
        {
          "x": 8.0,
          "y": 424.3
        },
        {
          "x": 9.33,
          "y": 490.7
        },
        {
          "x": 10.67,
          "y": 544.9
        },
        {
          "x": 12.0,
          "y": 599.9
        }
      ],
      "xAxisLabel": "sunshine (hours)",
      "yAxisLabel": "attendance",
      "caption": "Attendance against sunshine.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 60,
        "b": 45
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the gradient",
          "workingLatex": "b = 45",
          "explanation": "In $y = a + bx$ the number multiplying $x$ is the gradient, so read it off first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what a gradient means",
          "workingLatex": "b = \\dfrac{\\text{change in } y}{\\text{change in } x}",
          "explanation": "A gradient always measures how much the output changes for a one-unit increase in the input.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply it to a one-unit rise",
          "workingLatex": "\\Delta x = 1 \\;\\Rightarrow\\; \\Delta y = 45",
          "explanation": "Increasing sunshine by one $\\text{hour}$ changes the predicted attendance by $45$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the sign",
          "workingLatex": "\\text{sign of } b",
          "explanation": "The sign tells you the direction: positive means the two rise together, negative means one falls as the other rises.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the meaning in context",
          "workingLatex": "b = 45",
          "explanation": "Because the gradient is positive, more sunshine is associated with more attendance: each extra $\\text{hour}$ of sunshine adds about $45$ to attendance, on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the usual caveat",
          "workingLatex": "\\text{average, not exact}",
          "explanation": "The gradient describes an average trend across the data, not a guaranteed change for any single case, and association here is not proof of cause.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient $45$ means each extra $\\text{hour}$ of sunshine is associated with a change of about $45$ in attendance, on average."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "interpret",
      "intercept",
      "fert"
    ],
    "questionText": "A gardener models the mass of fertiliser $x$ (in grams) and the plant height $y$ (in cm). The least-squares regression line of $y$ on $x$ is $y = 8 + 1.5x$, based on data with fertiliser between $2$ and $12$. Interpret the intercept, and explain why it should be treated with caution.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 11.9
        },
        {
          "x": 3.11,
          "y": 12.9
        },
        {
          "x": 4.22,
          "y": 15.0
        },
        {
          "x": 5.33,
          "y": 14.6
        },
        {
          "x": 6.44,
          "y": 18.1
        },
        {
          "x": 7.56,
          "y": 20.0
        },
        {
          "x": 8.67,
          "y": 20.9
        },
        {
          "x": 9.78,
          "y": 22.6
        },
        {
          "x": 10.89,
          "y": 23.6
        },
        {
          "x": 12.0,
          "y": 25.7
        }
      ],
      "xAxisLabel": "fertiliser (g)",
      "yAxisLabel": "height (cm)",
      "caption": "Plant height against fertiliser applied.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 8,
        "b": 1.5
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the intercept",
          "workingLatex": "a = 8",
          "explanation": "In $y = a + bx$ the constant term is the intercept, so read it off first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what the intercept means",
          "workingLatex": "x = 0 \\;\\Rightarrow\\; y = a",
          "explanation": "The intercept is the predicted value of $y$ when the explanatory variable is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the value",
          "workingLatex": "y = 8 \\text{ when } x = 0",
          "explanation": "So the model predicts height of about $8$ when fertiliser is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Put it in context",
          "workingLatex": "a = 8",
          "explanation": "This is a baseline level of height before any fertiliser is taken into account.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check whether x = 0 is realistic",
          "workingLatex": "\\text{data range: } 2 \\le x \\le 12",
          "explanation": "A prediction is only safe within the range of the data, so we ask whether $x = 0$ sits inside it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Give the caution",
          "workingLatex": "\\text{extrapolation risk}",
          "explanation": "The intercept is a baseline, but $x = 0$ lies outside the data range (which starts at $2$), so this is an extrapolation and may not be realistic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "a = 8",
          "explanation": "So $a = 8$ is the predicted height at zero fertiliser, interpreted with the caution above.",
          "diagram": null
        }
      ],
      "finalAnswer": "The intercept $8$ is the predicted height when fertiliser is $0$; treat it with caution because but $x = 0$ lies outside the data range (which starts at $2$), so this is an extrapolation and may not be realistic."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "interpret",
      "intercept",
      "sess"
    ],
    "questionText": "A gym models the number of training sessions per week $x$ and the greatest mass lifted $y$ (in kg). The least-squares regression line of $y$ on $x$ is $y = 40 + 7x$, based on data with weekly sessions between $1$ and $7$. Interpret the intercept, and explain why it should be treated with caution.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1.0,
          "y": 46.4
        },
        {
          "x": 1.67,
          "y": 52.5
        },
        {
          "x": 2.33,
          "y": 59.2
        },
        {
          "x": 3.0,
          "y": 58.2
        },
        {
          "x": 3.67,
          "y": 66.7
        },
        {
          "x": 4.33,
          "y": 73.2
        },
        {
          "x": 5.0,
          "y": 73.7
        },
        {
          "x": 5.67,
          "y": 77.3
        },
        {
          "x": 6.33,
          "y": 84.3
        },
        {
          "x": 7.0,
          "y": 86.4
        }
      ],
      "xAxisLabel": "sessions/week",
      "yAxisLabel": "mass (kg)",
      "caption": "Mass lifted against weekly sessions.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 40,
        "b": 7
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the intercept",
          "workingLatex": "a = 40",
          "explanation": "In $y = a + bx$ the constant term is the intercept, so read it off first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what the intercept means",
          "workingLatex": "x = 0 \\;\\Rightarrow\\; y = a",
          "explanation": "The intercept is the predicted value of $y$ when the explanatory variable is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the value",
          "workingLatex": "y = 40 \\text{ when } x = 0",
          "explanation": "So the model predicts mass lifted of about $40$ when weekly sessions is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Put it in context",
          "workingLatex": "a = 40",
          "explanation": "This is a baseline level of mass lifted before any weekly sessions is taken into account.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check whether x = 0 is realistic",
          "workingLatex": "\\text{data range: } 1 \\le x \\le 7",
          "explanation": "A prediction is only safe within the range of the data, so we ask whether $x = 0$ sits inside it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Give the caution",
          "workingLatex": "\\text{extrapolation risk}",
          "explanation": "The intercept is a baseline, but $x = 0$ lies outside the data range (which starts at $1$), so this is an extrapolation and may not be realistic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "a = 40",
          "explanation": "So $a = 40$ is the predicted mass lifted at zero weekly sessions, interpreted with the caution above.",
          "diagram": null
        }
      ],
      "finalAnswer": "The intercept $40$ is the predicted mass lifted when weekly sessions is $0$; treat it with caution because but $x = 0$ lies outside the data range (which starts at $1$), so this is an extrapolation and may not be realistic."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "interpret",
      "intercept",
      "temp"
    ],
    "questionText": "A household models the daily mean temperature $x$ (in $\\degree\\text{C}$) and the gas used for heating $y$ (in kWh). The least-squares regression line of $y$ on $x$ is $y = 90 - 4.5x$, based on data with temperature between $-2$ and $14$. Interpret the intercept, and explain why it should be treated with caution.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": -2.0,
          "y": 94.7
        },
        {
          "x": -0.22,
          "y": 93.0
        },
        {
          "x": 1.56,
          "y": 79.2
        },
        {
          "x": 3.33,
          "y": 77.4
        },
        {
          "x": 5.11,
          "y": 66.8
        },
        {
          "x": 6.89,
          "y": 54.7
        },
        {
          "x": 8.67,
          "y": 49.0
        },
        {
          "x": 10.44,
          "y": 42.3
        },
        {
          "x": 12.22,
          "y": 38.9
        },
        {
          "x": 14.0,
          "y": 30.1
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "gas (kWh)",
      "caption": "Gas use against temperature.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 90,
        "b": -4.5
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the intercept",
          "workingLatex": "a = 90",
          "explanation": "In $y = a + bx$ the constant term is the intercept, so read it off first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what the intercept means",
          "workingLatex": "x = 0 \\;\\Rightarrow\\; y = a",
          "explanation": "The intercept is the predicted value of $y$ when the explanatory variable is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the value",
          "workingLatex": "y = 90 \\text{ when } x = 0",
          "explanation": "So the model predicts gas use of about $90$ when temperature is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Put it in context",
          "workingLatex": "a = 90",
          "explanation": "This is a baseline level of gas use before any temperature is taken into account.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check whether x = 0 is realistic",
          "workingLatex": "\\text{data range: } -2 \\le x \\le 14",
          "explanation": "A prediction is only safe within the range of the data, so we ask whether $x = 0$ sits inside it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Give the caution",
          "workingLatex": "\\text{extrapolation risk}",
          "explanation": "The intercept is a baseline, although $x = 0$ does lie in the range here, so the value is a little more trustworthy than usual.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "a = 90",
          "explanation": "So $a = 90$ is the predicted gas use at zero temperature, interpreted with the caution above.",
          "diagram": null
        }
      ],
      "finalAnswer": "The intercept $90$ is the predicted gas use when temperature is $0$; treat it with caution because although $x = 0$ does lie in the range here, so the value is a little more trustworthy than usual."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "temp"
    ],
    "questionText": "A seaside cafe records the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$. The summary statistics are $S_{xx} = 250$, $S_{xy} = 200$, $\\bar{x} = 20$ and $\\bar{y} = 35$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 14.0,
          "y": 29.0
        },
        {
          "x": 16.0,
          "y": 32.4
        },
        {
          "x": 18.0,
          "y": 32.4
        },
        {
          "x": 20.0,
          "y": 35.1
        },
        {
          "x": 22.0,
          "y": 37.1
        },
        {
          "x": 24.0,
          "y": 37.8
        },
        {
          "x": 26.0,
          "y": 38.9
        },
        {
          "x": 28.0,
          "y": 42.3
        },
        {
          "x": 30.0,
          "y": 42.1
        },
        {
          "x": 32.0,
          "y": 44.5
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold-drink sales against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 19.0,
        "b": 0.8
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The least-squares line of $y$ on $x$ is a straight line, so the whole task is just to pin down two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how strongly $x$ and $y$ vary together ($S_{xy}$) with how much $x$ varies on its own ($S_{xx}$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{200}{250} = 0.8",
          "explanation": "Putting the given sums straight into the formula gives the gradient in one step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line must pass through the mean point $(\\bar{x}, \\bar{y})$, so substituting that point into $y = a + bx$ and rearranging isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 35 - (0.8)(20)",
          "explanation": "We use the means together with the gradient we just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 35 - 16 = 19",
          "explanation": "This is the value the model predicts for cold-drink sales when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 19 + 0.8x",
          "explanation": "Combining the intercept and gradient gives the complete model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.8",
          "explanation": "Each extra $\\degree\\text{C}$ of temperature is associated with about $0.8$ more cold-drink sales, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 19 + 0.8x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "fert"
    ],
    "questionText": "A gardener records the mass of fertiliser $x$ (in grams) and the plant height $y$ (in cm). The summary statistics are $S_{xx} = 50$, $S_{xy} = 30$, $\\bar{x} = 8$ and $\\bar{y} = 22$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 19.2
        },
        {
          "x": 3.11,
          "y": 18.9
        },
        {
          "x": 4.22,
          "y": 19.1
        },
        {
          "x": 5.33,
          "y": 21.2
        },
        {
          "x": 6.44,
          "y": 21.6
        },
        {
          "x": 7.56,
          "y": 21.9
        },
        {
          "x": 8.67,
          "y": 23.1
        },
        {
          "x": 9.78,
          "y": 23.3
        },
        {
          "x": 10.89,
          "y": 22.9
        },
        {
          "x": 12.0,
          "y": 24.8
        }
      ],
      "xAxisLabel": "fertiliser (g)",
      "yAxisLabel": "height (cm)",
      "caption": "Plant height against fertiliser applied.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 17.2,
        "b": 0.6
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The least-squares line of $y$ on $x$ is a straight line, so the whole task is just to pin down two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how strongly $x$ and $y$ vary together ($S_{xy}$) with how much $x$ varies on its own ($S_{xx}$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{30}{50} = 0.6",
          "explanation": "Putting the given sums straight into the formula gives the gradient in one step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line must pass through the mean point $(\\bar{x}, \\bar{y})$, so substituting that point into $y = a + bx$ and rearranging isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 22 - (0.6)(8)",
          "explanation": "We use the means together with the gradient we just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 22 - 4.8 = 17.2",
          "explanation": "This is the value the model predicts for height when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 17.2 + 0.6x",
          "explanation": "Combining the intercept and gradient gives the complete model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.6",
          "explanation": "Each extra $\\text{g}$ of fertiliser is associated with about $0.6$ more height, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 17.2 + 0.6x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "rev"
    ],
    "questionText": "A teacher records the number of hours of revision $x$ and the test mark $y$ (as a percentage). The summary statistics are $S_{xx} = 80$, $S_{xy} = 60$, $\\bar{x} = 6$ and $\\bar{y} = 52$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 48.1
        },
        {
          "x": 1.11,
          "y": 47.5
        },
        {
          "x": 2.22,
          "y": 48.5
        },
        {
          "x": 3.33,
          "y": 49.8
        },
        {
          "x": 4.44,
          "y": 50.4
        },
        {
          "x": 5.56,
          "y": 52.3
        },
        {
          "x": 6.67,
          "y": 53.0
        },
        {
          "x": 7.78,
          "y": 54.1
        },
        {
          "x": 8.89,
          "y": 54.3
        },
        {
          "x": 10.0,
          "y": 55.9
        }
      ],
      "xAxisLabel": "revision (hours)",
      "yAxisLabel": "mark (%)",
      "caption": "Test mark against revision time.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 47.5,
        "b": 0.75
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The least-squares line of $y$ on $x$ is a straight line, so the whole task is just to pin down two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how strongly $x$ and $y$ vary together ($S_{xy}$) with how much $x$ varies on its own ($S_{xx}$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{60}{80} = 0.75",
          "explanation": "Putting the given sums straight into the formula gives the gradient in one step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line must pass through the mean point $(\\bar{x}, \\bar{y})$, so substituting that point into $y = a + bx$ and rearranging isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 52 - (0.75)(6)",
          "explanation": "We use the means together with the gradient we just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 52 - 4.5 = 47.5",
          "explanation": "This is the value the model predicts for test mark when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 47.5 + 0.75x",
          "explanation": "Combining the intercept and gradient gives the complete model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.75",
          "explanation": "Each extra $\\text{hour}$ of revision time is associated with about $0.75$ more test mark, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 47.5 + 0.75x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "age"
    ],
    "questionText": "A car dealer records the age $x$ (in years) and the second-hand value $y$ (in $\\pounds000$). The summary statistics are $S_{xx} = 40$, $S_{xy} = -34$, $\\bar{x} = 6$ and $\\bar{y} = 9$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1.0,
          "y": 12.4
        },
        {
          "x": 2.0,
          "y": 12.2
        },
        {
          "x": 3.0,
          "y": 12.5
        },
        {
          "x": 4.0,
          "y": 10.2
        },
        {
          "x": 5.0,
          "y": 9.6
        },
        {
          "x": 6.0,
          "y": 9.6
        },
        {
          "x": 7.0,
          "y": 8.9
        },
        {
          "x": 8.0,
          "y": 7.3
        },
        {
          "x": 9.0,
          "y": 7.3
        },
        {
          "x": 10.0,
          "y": 6.3
        }
      ],
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds000)",
      "caption": "Second-hand value against age.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 14.1,
        "b": -0.85
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The least-squares line of $y$ on $x$ is a straight line, so the whole task is just to pin down two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how strongly $x$ and $y$ vary together ($S_{xy}$) with how much $x$ varies on its own ($S_{xx}$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{-34}{40} = -0.85",
          "explanation": "Putting the given sums straight into the formula gives the gradient in one step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line must pass through the mean point $(\\bar{x}, \\bar{y})$, so substituting that point into $y = a + bx$ and rearranging isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 9 - (-0.85)(6)",
          "explanation": "We use the means together with the gradient we just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 9 - -5.1 = 14.1",
          "explanation": "This is the value the model predicts for value when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 14.1 - 0.85x",
          "explanation": "Combining the intercept and gradient gives the complete model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "b = -0.85",
          "explanation": "Each extra $\\text{year}$ of age is associated with about $0.85$ less value, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 14.1 - 0.85x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "exp"
    ],
    "questionText": "A firm records the years of experience $x$ and the annual salary $y$ (in $\\pounds000$). The summary statistics are $S_{xx} = 120$, $S_{xy} = 48$, $\\bar{x} = 6$ and $\\bar{y} = 30$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 27.2
        },
        {
          "x": 1.33,
          "y": 27.5
        },
        {
          "x": 2.67,
          "y": 28.3
        },
        {
          "x": 4.0,
          "y": 29.7
        },
        {
          "x": 5.33,
          "y": 29.3
        },
        {
          "x": 6.67,
          "y": 30.7
        },
        {
          "x": 8.0,
          "y": 30.6
        },
        {
          "x": 9.33,
          "y": 31.3
        },
        {
          "x": 10.67,
          "y": 32.2
        },
        {
          "x": 12.0,
          "y": 31.7
        }
      ],
      "xAxisLabel": "experience (years)",
      "yAxisLabel": "salary (\\pounds000)",
      "caption": "Salary against experience.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 27.6,
        "b": 0.4
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The least-squares line of $y$ on $x$ is a straight line, so the whole task is just to pin down two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how strongly $x$ and $y$ vary together ($S_{xy}$) with how much $x$ varies on its own ($S_{xx}$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{48}{120} = 0.4",
          "explanation": "Putting the given sums straight into the formula gives the gradient in one step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line must pass through the mean point $(\\bar{x}, \\bar{y})$, so substituting that point into $y = a + bx$ and rearranging isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 30 - (0.4)(6)",
          "explanation": "We use the means together with the gradient we just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 30 - 2.4 = 27.6",
          "explanation": "This is the value the model predicts for salary when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 27.6 + 0.4x",
          "explanation": "Combining the intercept and gradient gives the complete model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.4",
          "explanation": "Each extra $\\text{year}$ of experience is associated with about $0.4$ more salary, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 27.6 + 0.4x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "temp"
    ],
    "questionText": "A biologist records the air temperature $x$ (in $\\degree\\text{C}$) and the cricket chirp rate $y$ (chirps per minute). The summary statistics are $S_{xx} = 20$, $S_{xy} = 140$, $\\bar{x} = 20$ and $\\bar{y} = 100$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 10.0,
          "y": 31.5
        },
        {
          "x": 12.44,
          "y": 47.7
        },
        {
          "x": 14.89,
          "y": 62.9
        },
        {
          "x": 17.33,
          "y": 86.5
        },
        {
          "x": 19.78,
          "y": 96.9
        },
        {
          "x": 22.22,
          "y": 108.5
        },
        {
          "x": 24.67,
          "y": 135.3
        },
        {
          "x": 27.11,
          "y": 140.9
        },
        {
          "x": 29.56,
          "y": 176.5
        },
        {
          "x": 32.0,
          "y": 188.0
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "chirps/min",
      "caption": "Chirp rate against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": -40.0,
        "b": 7.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The least-squares line of $y$ on $x$ is a straight line, so the whole task is just to pin down two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how strongly $x$ and $y$ vary together ($S_{xy}$) with how much $x$ varies on its own ($S_{xx}$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{140}{20} = 7",
          "explanation": "Putting the given sums straight into the formula gives the gradient in one step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line must pass through the mean point $(\\bar{x}, \\bar{y})$, so substituting that point into $y = a + bx$ and rearranging isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 100 - (7)(20)",
          "explanation": "We use the means together with the gradient we just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 100 - 140 = -40",
          "explanation": "This is the value the model predicts for chirp rate when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = -40 + 7x",
          "explanation": "Combining the intercept and gradient gives the complete model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "b = 7",
          "explanation": "Each extra $\\degree\\text{C}$ of temperature is associated with about $7$ more chirp rate, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -40 + 7x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "temp"
    ],
    "questionText": "A seaside cafe models the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$, using data with temperature between $14$ and $32$. The least-squares regression line of $y$ on $x$ is $y = 24 + 6x$. Estimate cold-drink sales when $x = 22$, and state whether the estimate is reliable.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 14.0,
          "y": 109.2
        },
        {
          "x": 16.0,
          "y": 122.5
        },
        {
          "x": 18.0,
          "y": 131.8
        },
        {
          "x": 20.0,
          "y": 143.8
        },
        {
          "x": 22.0,
          "y": 153.8
        },
        {
          "x": 24.0,
          "y": 172.7
        },
        {
          "x": 26.0,
          "y": 176.7
        },
        {
          "x": 28.0,
          "y": 186.4
        },
        {
          "x": 30.0,
          "y": 199.4
        },
        {
          "x": 32.0,
          "y": 216.8
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold-drink sales against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 24,
        "b": 6
      },
      "predict": {
        "x": 22,
        "y": 156
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "y = 24 + 6x",
          "explanation": "To predict a $y$-value we substitute the given $x$ into the regression equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to substitute",
          "workingLatex": "x = 22",
          "explanation": "We are told temperature is $22$, so that is the number to put in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "y = 24 + 6 \\times 22",
          "explanation": "Replace $x$ everywhere it appears with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "y = 24 + 132 = 156",
          "explanation": "Working out the arithmetic gives the predicted value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the prediction in context",
          "workingLatex": "y \\approx 156",
          "explanation": "So the model predicts cold-drink sales of about $156$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the prediction is within the data range",
          "workingLatex": "14 \\le 22 \\le 32",
          "explanation": "A prediction is only trustworthy when the $x$-value lies inside the range the line was built from. This one does.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude on reliability",
          "workingLatex": "\\text{interpolation}",
          "explanation": "Because we are predicting inside the data range, this is interpolation, so the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y \\approx 156$; reliable, since $x = 22$ is interpolation (inside the data range)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "ad"
    ],
    "questionText": "A company models the weekly advertising spend $x$ (in $\\pounds00$) and the weekly sales $y$ (in $\\pounds000$), using data with advertising spend between $2$ and $15$. The least-squares regression line of $y$ on $x$ is $y = 18 + 4.5x$. Estimate sales when $x = 10$, and state whether the estimate is reliable.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 29.6
        },
        {
          "x": 3.44,
          "y": 34.3
        },
        {
          "x": 4.89,
          "y": 41.8
        },
        {
          "x": 6.33,
          "y": 42.6
        },
        {
          "x": 7.78,
          "y": 54.2
        },
        {
          "x": 9.22,
          "y": 61.4
        },
        {
          "x": 10.67,
          "y": 65.8
        },
        {
          "x": 12.11,
          "y": 72.4
        },
        {
          "x": 13.56,
          "y": 77.0
        },
        {
          "x": 15.0,
          "y": 84.8
        }
      ],
      "xAxisLabel": "advertising (\\pounds00)",
      "yAxisLabel": "sales (\\pounds000)",
      "caption": "Sales against advertising spend.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 18,
        "b": 4.5
      },
      "predict": {
        "x": 10,
        "y": 63.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "y = 18 + 4.5x",
          "explanation": "To predict a $y$-value we substitute the given $x$ into the regression equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to substitute",
          "workingLatex": "x = 10",
          "explanation": "We are told advertising spend is $10$, so that is the number to put in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "y = 18 + 4.5 \\times 10",
          "explanation": "Replace $x$ everywhere it appears with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "y = 18 + 45 = 63",
          "explanation": "Working out the arithmetic gives the predicted value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the prediction in context",
          "workingLatex": "y \\approx 63",
          "explanation": "So the model predicts sales of about $63$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the prediction is within the data range",
          "workingLatex": "2 \\le 10 \\le 15",
          "explanation": "A prediction is only trustworthy when the $x$-value lies inside the range the line was built from. This one does.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude on reliability",
          "workingLatex": "\\text{interpolation}",
          "explanation": "Because we are predicting inside the data range, this is interpolation, so the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y \\approx 63$; reliable, since $x = 10$ is interpolation (inside the data range)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "rain"
    ],
    "questionText": "A shop models the daily rainfall $x$ (in mm) and the number of umbrellas sold $y$, using data with rainfall between $0$ and $18$. The least-squares regression line of $y$ on $x$ is $y = 5 + 2.4x$. Estimate umbrella sales when $x = 10$, and state whether the estimate is reliable.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 5.4
        },
        {
          "x": 2.0,
          "y": 10.3
        },
        {
          "x": 4.0,
          "y": 14.3
        },
        {
          "x": 6.0,
          "y": 20.3
        },
        {
          "x": 8.0,
          "y": 24.0
        },
        {
          "x": 10.0,
          "y": 28.8
        },
        {
          "x": 12.0,
          "y": 31.7
        },
        {
          "x": 14.0,
          "y": 36.3
        },
        {
          "x": 16.0,
          "y": 44.2
        },
        {
          "x": 18.0,
          "y": 45.7
        }
      ],
      "xAxisLabel": "rainfall (mm)",
      "yAxisLabel": "umbrellas sold",
      "caption": "Umbrella sales against rainfall.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 5,
        "b": 2.4
      },
      "predict": {
        "x": 10,
        "y": 29.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "y = 5 + 2.4x",
          "explanation": "To predict a $y$-value we substitute the given $x$ into the regression equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to substitute",
          "workingLatex": "x = 10",
          "explanation": "We are told rainfall is $10$, so that is the number to put in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "y = 5 + 2.4 \\times 10",
          "explanation": "Replace $x$ everywhere it appears with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "y = 5 + 24 = 29",
          "explanation": "Working out the arithmetic gives the predicted value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the prediction in context",
          "workingLatex": "y \\approx 29",
          "explanation": "So the model predicts umbrella sales of about $29$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the prediction is within the data range",
          "workingLatex": "0 \\le 10 \\le 18",
          "explanation": "A prediction is only trustworthy when the $x$-value lies inside the range the line was built from. This one does.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude on reliability",
          "workingLatex": "\\text{interpolation}",
          "explanation": "Because we are predicting inside the data range, this is interpolation, so the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y \\approx 29$; reliable, since $x = 10$ is interpolation (inside the data range)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "arm"
    ],
    "questionText": "A researcher models the arm span $x$ (in cm) and the height $y$ (in cm), using data with arm span between $150$ and $190$. The least-squares regression line of $y$ on $x$ is $y = 15 + 0.9x$. Estimate height when $x = 170$, and state whether the estimate is reliable.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 150.0,
          "y": 150.2
        },
        {
          "x": 154.44,
          "y": 153.1
        },
        {
          "x": 158.89,
          "y": 158.0
        },
        {
          "x": 163.33,
          "y": 159.4
        },
        {
          "x": 167.78,
          "y": 164.7
        },
        {
          "x": 172.22,
          "y": 170.4
        },
        {
          "x": 176.67,
          "y": 172.0
        },
        {
          "x": 181.11,
          "y": 176.0
        },
        {
          "x": 185.56,
          "y": 183.1
        },
        {
          "x": 190.0,
          "y": 186.8
        }
      ],
      "xAxisLabel": "arm span (cm)",
      "yAxisLabel": "height (cm)",
      "caption": "Height against arm span.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 15,
        "b": 0.9
      },
      "predict": {
        "x": 170,
        "y": 168.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "y = 15 + 0.9x",
          "explanation": "To predict a $y$-value we substitute the given $x$ into the regression equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to substitute",
          "workingLatex": "x = 170",
          "explanation": "We are told arm span is $170$, so that is the number to put in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "y = 15 + 0.9 \\times 170",
          "explanation": "Replace $x$ everywhere it appears with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "y = 15 + 153 = 168",
          "explanation": "Working out the arithmetic gives the predicted value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the prediction in context",
          "workingLatex": "y \\approx 168",
          "explanation": "So the model predicts height of about $168$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the prediction is within the data range",
          "workingLatex": "150 \\le 170 \\le 190",
          "explanation": "A prediction is only trustworthy when the $x$-value lies inside the range the line was built from. This one does.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude on reliability",
          "workingLatex": "\\text{interpolation}",
          "explanation": "Because we are predicting inside the data range, this is interpolation, so the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y \\approx 168$; reliable, since $x = 170$ is interpolation (inside the data range)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "prac"
    ],
    "questionText": "An examiner models the number of practice papers completed $x$ and the final score $y$ (out of $80$), using data with practice papers between $0$ and $10$. The least-squares regression line of $y$ on $x$ is $y = 20 + 5x$. Estimate score when $x = 8$, and state whether the estimate is reliable.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 22.2
        },
        {
          "x": 1.11,
          "y": 26.3
        },
        {
          "x": 2.22,
          "y": 32.7
        },
        {
          "x": 3.33,
          "y": 33.2
        },
        {
          "x": 4.44,
          "y": 43.2
        },
        {
          "x": 5.56,
          "y": 49.4
        },
        {
          "x": 6.67,
          "y": 53.2
        },
        {
          "x": 7.78,
          "y": 58.8
        },
        {
          "x": 8.89,
          "y": 62.7
        },
        {
          "x": 10.0,
          "y": 69.4
        }
      ],
      "xAxisLabel": "practice papers",
      "yAxisLabel": "score",
      "caption": "Final score against practice papers.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 20,
        "b": 5
      },
      "predict": {
        "x": 8,
        "y": 60
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "y = 20 + 5x",
          "explanation": "To predict a $y$-value we substitute the given $x$ into the regression equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value to substitute",
          "workingLatex": "x = 8",
          "explanation": "We are told practice papers is $8$, so that is the number to put in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "y = 20 + 5 \\times 8",
          "explanation": "Replace $x$ everywhere it appears with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "y = 20 + 40 = 60",
          "explanation": "Working out the arithmetic gives the predicted value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the prediction in context",
          "workingLatex": "y \\approx 60",
          "explanation": "So the model predicts score of about $60$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the prediction is within the data range",
          "workingLatex": "0 \\le 8 \\le 10",
          "explanation": "A prediction is only trustworthy when the $x$-value lies inside the range the line was built from. This one does.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude on reliability",
          "workingLatex": "\\text{interpolation}",
          "explanation": "Because we are predicting inside the data range, this is interpolation, so the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y \\approx 60$; reliable, since $x = 8$ is interpolation (inside the data range)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "prediction",
      "extrapolation",
      "price"
    ],
    "questionText": "A cafe models the price of a coffee $x$ (in $\\pounds$) and the mean number sold per day $y$, using data with price between $2$ and $3.5$. The least-squares regression line of $y$ on $x$ is $y = 400 - 90x$. Use the line to estimate daily sales when $x = 4$, and comment on the reliability of your estimate.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 221.5
        },
        {
          "x": 2.17,
          "y": 209.9
        },
        {
          "x": 2.33,
          "y": 186.1
        },
        {
          "x": 2.5,
          "y": 181.6
        },
        {
          "x": 2.67,
          "y": 166.7
        },
        {
          "x": 2.83,
          "y": 152.8
        },
        {
          "x": 3.0,
          "y": 132.3
        },
        {
          "x": 3.17,
          "y": 112.1
        },
        {
          "x": 3.33,
          "y": 105.5
        },
        {
          "x": 3.5,
          "y": 78.3
        }
      ],
      "xAxisLabel": "price (\\pounds)",
      "yAxisLabel": "coffees sold",
      "caption": "Daily coffee sales against price.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 400,
        "b": -90
      },
      "predict": {
        "x": 4.0,
        "y": 40.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "y = 400 - 90x",
          "explanation": "As before, prediction means substituting the given $x$ into the regression equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the value",
          "workingLatex": "y = 400 - 90 \\times 4",
          "explanation": "Here price is $4$, so replace $x$ with that value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "y = 400 - 360 = 40",
          "explanation": "The arithmetic gives the value the line would predict.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the prediction",
          "workingLatex": "y \\approx 40",
          "explanation": "Numerically the line gives about $40$ for daily sales.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the data range",
          "workingLatex": "4 > 3.5",
          "explanation": "The value $x = 4$ lies outside the range the line was fitted to ($2$ to $3.5$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the risk",
          "workingLatex": "\\text{extrapolation}",
          "explanation": "Predicting outside the data range is extrapolation: we have no evidence the straight-line pattern continues out there, and it may bend or break down.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude on reliability",
          "workingLatex": "\\text{unreliable}",
          "explanation": "So although the arithmetic gives a number, the estimate is unreliable and should not be trusted.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y \\approx 40$, but the estimate is unreliable: $x = 4$ is extrapolation, outside the data range."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "prediction",
      "extrapolation",
      "sun"
    ],
    "questionText": "An outdoor lido models the daily sunshine $x$ (in hours) and the attendance $y$, using data with sunshine between $0$ and $12$. The least-squares regression line of $y$ on $x$ is $y = 60 + 45x$. Use the line to estimate attendance when $x = 14$, and comment on the reliability of your estimate.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 65.4
        },
        {
          "x": 1.33,
          "y": 131.9
        },
        {
          "x": 2.67,
          "y": 179.1
        },
        {
          "x": 4.0,
          "y": 239.1
        },
        {
          "x": 5.33,
          "y": 289.8
        },
        {
          "x": 6.67,
          "y": 382.0
        },
        {
          "x": 8.0,
          "y": 404.3
        },
        {
          "x": 9.33,
          "y": 453.5
        },
        {
          "x": 10.67,
          "y": 518.4
        },
        {
          "x": 12.0,
          "y": 603.8
        }
      ],
      "xAxisLabel": "sunshine (hours)",
      "yAxisLabel": "attendance",
      "caption": "Attendance against sunshine.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 60,
        "b": 45
      },
      "predict": {
        "x": 14,
        "y": 690
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model",
          "workingLatex": "y = 60 + 45x",
          "explanation": "As before, prediction means substituting the given $x$ into the regression equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the value",
          "workingLatex": "y = 60 + 45 \\times 14",
          "explanation": "Here sunshine is $14$, so replace $x$ with that value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "y = 60 + 630 = 690",
          "explanation": "The arithmetic gives the value the line would predict.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the prediction",
          "workingLatex": "y \\approx 690",
          "explanation": "Numerically the line gives about $690$ for attendance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the data range",
          "workingLatex": "14 > 12",
          "explanation": "The value $x = 14$ lies outside the range the line was fitted to ($0$ to $12$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the risk",
          "workingLatex": "\\text{extrapolation}",
          "explanation": "Predicting outside the data range is extrapolation: we have no evidence the straight-line pattern continues out there, and it may bend or break down.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude on reliability",
          "workingLatex": "\\text{unreliable}",
          "explanation": "So although the arithmetic gives a number, the estimate is unreliable and should not be trusted.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y \\approx 690$, but the estimate is unreliable: $x = 14$ is extrapolation, outside the data range."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "temp"
    ],
    "questionText": "A seaside cafe records the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$ on $8$ occasions. The data give $\\Sigma x = 160$, $\\Sigma y = 280$, $\\Sigma xy = 5800$ and $\\Sigma x^2 = 3450$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 14.0,
          "y": 29.7
        },
        {
          "x": 16.0,
          "y": 32.4
        },
        {
          "x": 18.0,
          "y": 34.2
        },
        {
          "x": 20.0,
          "y": 34.0
        },
        {
          "x": 22.0,
          "y": 37.6
        },
        {
          "x": 24.0,
          "y": 38.9
        },
        {
          "x": 26.0,
          "y": 39.8
        },
        {
          "x": 28.0,
          "y": 40.7
        },
        {
          "x": 30.0,
          "y": 43.0
        },
        {
          "x": 32.0,
          "y": 45.2
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold-drink sales against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 19.0,
        "b": 0.8
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 3450 - \\dfrac{160^2}{8}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 3450 - 3200 = 250",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 5800 - \\dfrac{160 \\times 280}{8}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 5800 - 5600 = 200",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{200}{250} = 0.8",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{160}{8} = 20, \\quad \\bar{y} = \\dfrac{280}{8} = 35",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 35 - (0.8)(20) = 19",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 19 + 0.8x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 19 + 0.8x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "rev"
    ],
    "questionText": "A teacher records the number of hours of revision $x$ and the test mark $y$ (as a percentage) on $10$ occasions. The data give $\\Sigma x = 60$, $\\Sigma y = 520$, $\\Sigma xy = 3180$ and $\\Sigma x^2 = 440$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 47.3
        },
        {
          "x": 1.11,
          "y": 47.5
        },
        {
          "x": 2.22,
          "y": 49.3
        },
        {
          "x": 3.33,
          "y": 49.3
        },
        {
          "x": 4.44,
          "y": 50.8
        },
        {
          "x": 5.56,
          "y": 51.3
        },
        {
          "x": 6.67,
          "y": 52.9
        },
        {
          "x": 7.78,
          "y": 52.7
        },
        {
          "x": 8.89,
          "y": 55.1
        },
        {
          "x": 10.0,
          "y": 54.2
        }
      ],
      "xAxisLabel": "revision (hours)",
      "yAxisLabel": "mark (%)",
      "caption": "Test mark against revision time.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 47.5,
        "b": 0.75
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 440 - \\dfrac{60^2}{10}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 440 - 360 = 80",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 3180 - \\dfrac{60 \\times 520}{10}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 3180 - 3120 = 60",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{60}{80} = 0.75",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{60}{10} = 6, \\quad \\bar{y} = \\dfrac{520}{10} = 52",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 52 - (0.75)(6) = 47.5",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 47.5 + 0.75x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 47.5 + 0.75x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "exp"
    ],
    "questionText": "A firm records the years of experience $x$ and the annual salary $y$ (in $\\pounds000$) on $10$ occasions. The data give $\\Sigma x = 60$, $\\Sigma y = 350$, $\\Sigma xy = 2150$ and $\\Sigma x^2 = 460$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 32.1
        },
        {
          "x": 1.33,
          "y": 33.1
        },
        {
          "x": 2.67,
          "y": 32.5
        },
        {
          "x": 4.0,
          "y": 34.7
        },
        {
          "x": 5.33,
          "y": 34.9
        },
        {
          "x": 6.67,
          "y": 35.6
        },
        {
          "x": 8.0,
          "y": 36.6
        },
        {
          "x": 9.33,
          "y": 36.4
        },
        {
          "x": 10.67,
          "y": 37.8
        },
        {
          "x": 12.0,
          "y": 38.3
        }
      ],
      "xAxisLabel": "experience (years)",
      "yAxisLabel": "salary (\\pounds000)",
      "caption": "Salary against experience.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 32.0,
        "b": 0.5
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 460 - \\dfrac{60^2}{10}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 460 - 360 = 100",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 2150 - \\dfrac{60 \\times 350}{10}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 2150 - 2100 = 50",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{50}{100} = 0.5",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{60}{10} = 6, \\quad \\bar{y} = \\dfrac{350}{10} = 35",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 35 - (0.5)(6) = 32",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 32 + 0.5x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 32 + 0.5x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "age"
    ],
    "questionText": "A car dealer records the age $x$ (in years) and the second-hand value $y$ (in $\\pounds000$) on $9$ occasions. The data give $\\Sigma x = 45$, $\\Sigma y = 135$, $\\Sigma xy = 615$ and $\\Sigma x^2 = 265$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1.0,
          "y": 20.0
        },
        {
          "x": 2.0,
          "y": 19.8
        },
        {
          "x": 3.0,
          "y": 18.7
        },
        {
          "x": 4.0,
          "y": 15.4
        },
        {
          "x": 5.0,
          "y": 15.2
        },
        {
          "x": 6.0,
          "y": 14.5
        },
        {
          "x": 7.0,
          "y": 11.6
        },
        {
          "x": 8.0,
          "y": 9.3
        },
        {
          "x": 9.0,
          "y": 10.2
        },
        {
          "x": 10.0,
          "y": 7.3
        }
      ],
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds000)",
      "caption": "Second-hand value against age.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 22.5,
        "b": -1.5
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 265 - \\dfrac{45^2}{9}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 265 - 225 = 40",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 615 - \\dfrac{45 \\times 135}{9}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 615 - 675 = -60",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{-60}{40} = -1.5",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{45}{9} = 5, \\quad \\bar{y} = \\dfrac{135}{9} = 15",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 15 - (-1.5)(5) = 22.5",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 22.5 - 1.5x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 22.5 - 1.5x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "fert"
    ],
    "questionText": "A gardener records the mass of fertiliser $x$ (in grams) and the plant height $y$ (in cm) on $8$ occasions. The data give $\\Sigma x = 64$, $\\Sigma y = 176$, $\\Sigma xy = 1438$ and $\\Sigma x^2 = 562$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 17.8
        },
        {
          "x": 3.11,
          "y": 18.8
        },
        {
          "x": 4.22,
          "y": 19.2
        },
        {
          "x": 5.33,
          "y": 20.6
        },
        {
          "x": 6.44,
          "y": 21.4
        },
        {
          "x": 7.56,
          "y": 21.8
        },
        {
          "x": 8.67,
          "y": 22.5
        },
        {
          "x": 9.78,
          "y": 23.6
        },
        {
          "x": 10.89,
          "y": 24.1
        },
        {
          "x": 12.0,
          "y": 24.3
        }
      ],
      "xAxisLabel": "fertiliser (g)",
      "yAxisLabel": "height (cm)",
      "caption": "Plant height against fertiliser applied.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 17.2,
        "b": 0.6
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 562 - \\dfrac{64^2}{8}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 562 - 512 = 50",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 1438 - \\dfrac{64 \\times 176}{8}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 1438 - 1408 = 30",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{30}{50} = 0.6",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{64}{8} = 8, \\quad \\bar{y} = \\dfrac{176}{8} = 22",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 22 - (0.6)(8) = 17.2",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 17.2 + 0.6x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 17.2 + 0.6x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "sun"
    ],
    "questionText": "An outdoor lido records the daily sunshine $x$ (in hours) and the attendance $y$ on $12$ occasions. The data give $\\Sigma x = 72$, $\\Sigma y = 3960$, $\\Sigma xy = 24660$ and $\\Sigma x^2 = 452$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 66.9
        },
        {
          "x": 1.33,
          "y": 96.9
        },
        {
          "x": 2.67,
          "y": 209.3
        },
        {
          "x": 4.0,
          "y": 236.0
        },
        {
          "x": 5.33,
          "y": 296.6
        },
        {
          "x": 6.67,
          "y": 368.3
        },
        {
          "x": 8.0,
          "y": 435.6
        },
        {
          "x": 9.33,
          "y": 499.9
        },
        {
          "x": 10.67,
          "y": 562.9
        },
        {
          "x": 12.0,
          "y": 587.6
        }
      ],
      "xAxisLabel": "sunshine (hours)",
      "yAxisLabel": "attendance",
      "caption": "Attendance against sunshine.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 60,
        "b": 45
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 452 - \\dfrac{72^2}{12}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 452 - 432 = 20",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 24660 - \\dfrac{72 \\times 3960}{12}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 24660 - 23760 = 900",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{900}{20} = 45",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{72}{12} = 6, \\quad \\bar{y} = \\dfrac{3960}{12} = 330",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 330 - (45)(6) = 60",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 60 + 45x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 60 + 45x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "dist"
    ],
    "questionText": "An estate agent records the distance from the city centre $x$ (in km) and the house price $y$ (in $\\pounds000$) on $9$ occasions. The data give $\\Sigma x = 45$, $\\Sigma y = 2700$, $\\Sigma xy = 9900$ and $\\Sigma x^2 = 315$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1.0,
          "y": 453.1
        },
        {
          "x": 2.0,
          "y": 415.3
        },
        {
          "x": 3.0,
          "y": 370.1
        },
        {
          "x": 4.0,
          "y": 349.4
        },
        {
          "x": 5.0,
          "y": 278.4
        },
        {
          "x": 6.0,
          "y": 268.6
        },
        {
          "x": 7.0,
          "y": 213.4
        },
        {
          "x": 8.0,
          "y": 168.5
        },
        {
          "x": 9.0,
          "y": 143.2
        },
        {
          "x": 10.0,
          "y": 111.9
        }
      ],
      "xAxisLabel": "distance (km)",
      "yAxisLabel": "price (\\pounds000)",
      "caption": "House price against distance from the centre.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 500,
        "b": -40
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 315 - \\dfrac{45^2}{9}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 315 - 225 = 90",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 9900 - \\dfrac{45 \\times 2700}{9}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 9900 - 13500 = -3600",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{-3600}{90} = -40",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{45}{9} = 5, \\quad \\bar{y} = \\dfrac{2700}{9} = 300",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 300 - (-40)(5) = 500",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 500 - 40x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 500 - 40x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "ad"
    ],
    "questionText": "A company records the weekly advertising spend $x$ (in $\\pounds00$) and the weekly sales $y$ (in $\\pounds000$) on $8$ occasions. The data give $\\Sigma x = 64$, $\\Sigma y = 400$, $\\Sigma xy = 3270$ and $\\Sigma x^2 = 532$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 31.6
        },
        {
          "x": 3.44,
          "y": 32.3
        },
        {
          "x": 4.89,
          "y": 41.1
        },
        {
          "x": 6.33,
          "y": 42.9
        },
        {
          "x": 7.78,
          "y": 50.8
        },
        {
          "x": 9.22,
          "y": 53.3
        },
        {
          "x": 10.67,
          "y": 60.0
        },
        {
          "x": 12.11,
          "y": 65.1
        },
        {
          "x": 13.56,
          "y": 66.2
        },
        {
          "x": 15.0,
          "y": 75.8
        }
      ],
      "xAxisLabel": "advertising (\\pounds00)",
      "yAxisLabel": "sales (\\pounds000)",
      "caption": "Sales against advertising spend.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 22.0,
        "b": 3.5
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 532 - \\dfrac{64^2}{8}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 532 - 512 = 20",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 3270 - \\dfrac{64 \\times 400}{8}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 3270 - 3200 = 70",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{70}{20} = 3.5",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{64}{8} = 8, \\quad \\bar{y} = \\dfrac{400}{8} = 50",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 50 - (3.5)(8) = 22",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 22 + 3.5x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 22 + 3.5x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "temp"
    ],
    "questionText": "A biologist records the air temperature $x$ (in $\\degree\\text{C}$) and the cricket chirp rate $y$ (chirps per minute) on $10$ occasions. The data give $\\Sigma x = 200$, $\\Sigma y = 1000$, $\\Sigma xy = 20140$ and $\\Sigma x^2 = 4020$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 10.0,
          "y": 22.9
        },
        {
          "x": 12.44,
          "y": 49.5
        },
        {
          "x": 14.89,
          "y": 69.5
        },
        {
          "x": 17.33,
          "y": 72.9
        },
        {
          "x": 19.78,
          "y": 99.7
        },
        {
          "x": 22.22,
          "y": 123.3
        },
        {
          "x": 24.67,
          "y": 129.7
        },
        {
          "x": 27.11,
          "y": 140.8
        },
        {
          "x": 29.56,
          "y": 176.1
        },
        {
          "x": 32.0,
          "y": 182.3
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "chirps/min",
      "caption": "Chirp rate against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": -40,
        "b": 7
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 4020 - \\dfrac{200^2}{10}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 4020 - 4000 = 20",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 20140 - \\dfrac{200 \\times 1000}{10}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 20140 - 20000 = 140",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{140}{20} = 7",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{200}{10} = 20, \\quad \\bar{y} = \\dfrac{1000}{10} = 100",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 100 - (7)(20) = -40",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = -40 + 7x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -40 + 7x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "depth"
    ],
    "questionText": "A diver records the depth $x$ (in m) and the water pressure $y$ (in kPa) on $8$ occasions. The data give $\\Sigma x = 160$, $\\Sigma y = 2408$, $\\Sigma xy = 48660$ and $\\Sigma x^2 = 3250$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 110.0
        },
        {
          "x": 4.44,
          "y": 169.7
        },
        {
          "x": 8.89,
          "y": 211.2
        },
        {
          "x": 13.33,
          "y": 214.9
        },
        {
          "x": 17.78,
          "y": 274.8
        },
        {
          "x": 22.22,
          "y": 336.5
        },
        {
          "x": 26.67,
          "y": 359.3
        },
        {
          "x": 31.11,
          "y": 418.6
        },
        {
          "x": 35.56,
          "y": 463.4
        },
        {
          "x": 40.0,
          "y": 479.7
        }
      ],
      "xAxisLabel": "depth (m)",
      "yAxisLabel": "pressure (kPa)",
      "caption": "Water pressure against depth.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 101,
        "b": 10
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$. First we must turn the raw totals into $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ minus a correction for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for $S_{xx}$",
          "workingLatex": "S_{xx} = 3250 - \\dfrac{160^2}{8}",
          "explanation": "Put the given totals into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 3250 - 3200 = 50",
          "explanation": "This is the spread of the $x$-data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for the means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for $S_{xy}$",
          "workingLatex": "S_{xy} = 48660 - \\dfrac{160 \\times 2408}{8}",
          "explanation": "Put the given totals into this formula too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 48660 - 48160 = 500",
          "explanation": "A positive result means $x$ and $y$ tend to rise together; negative means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{500}{50} = 10",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{160}{8} = 20, \\quad \\bar{y} = \\dfrac{2408}{8} = 301",
          "explanation": "The line passes through the mean point, so we need the two means to find the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 301 - (10)(20) = 101",
          "explanation": "Rearranging $y = a + bx$ at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 101 + 10x",
          "explanation": "Putting the gradient and intercept together gives the finished model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 101 + 10x$"
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "solve",
      "reliability",
      "temp"
    ],
    "questionText": "A seaside cafe models the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$, using data with temperature between $14$ and $32$. The least-squares regression line of $y$ on $x$ is $y = 24 + 6x$. Find the value of $x$ for which the model predicts $y = 150$, and comment on the reliability of this value.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 14.0,
          "y": 111.6
        },
        {
          "x": 16.0,
          "y": 120.5
        },
        {
          "x": 18.0,
          "y": 129.5
        },
        {
          "x": 20.0,
          "y": 147.9
        },
        {
          "x": 22.0,
          "y": 160.8
        },
        {
          "x": 24.0,
          "y": 171.1
        },
        {
          "x": 26.0,
          "y": 184.1
        },
        {
          "x": 28.0,
          "y": 196.7
        },
        {
          "x": 30.0,
          "y": 200.9
        },
        {
          "x": 32.0,
          "y": 221.4
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold-drink sales against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 24,
        "b": 6
      },
      "predict": {
        "x": 21.0,
        "y": 150
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = 24 + 6x",
          "explanation": "We now know the output $y$ and want the input $x$, so we solve the equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set y equal to the target",
          "workingLatex": "24 + 6x = 150",
          "explanation": "We want the predicted cold-drink sales to equal $150$, so substitute that for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move the intercept across",
          "workingLatex": "6x = 150 - 24",
          "explanation": "Subtract the intercept from both sides to leave the $x$-term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "6x = 126",
          "explanation": "Work out the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the gradient",
          "workingLatex": "x = \\dfrac{126}{6}",
          "explanation": "Dividing both sides by the gradient isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "x = 21",
          "explanation": "So the model needs temperature of about $21$ to reach that value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer in context",
          "workingLatex": "x \\approx 21",
          "explanation": "This is the temperature the line associates with cold-drink sales of $150$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the data range",
          "workingLatex": "14 \\le x \\le 32?",
          "explanation": "To judge reliability we check whether $x = 21$ lies within the fitted range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on reliability",
          "workingLatex": "\\text{interpolation?}",
          "explanation": "Here $x = 21$ is inside the data range, so this is interpolation, so it is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 21$; this is interpolation, so it is reliable."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "solve",
      "reliability",
      "age"
    ],
    "questionText": "A car dealer models the age $x$ (in years) and the second-hand value $y$ (in $\\pounds000$), using data with age between $1$ and $10$. The least-squares regression line of $y$ on $x$ is $y = 16 - 1.5x$. Find the value of $x$ for which the model predicts $y = 4$, and comment on the reliability of this value.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1.0,
          "y": 15.7
        },
        {
          "x": 2.0,
          "y": 13.1
        },
        {
          "x": 3.0,
          "y": 10.7
        },
        {
          "x": 4.0,
          "y": 11.2
        },
        {
          "x": 5.0,
          "y": 8.3
        },
        {
          "x": 6.0,
          "y": 7.8
        },
        {
          "x": 7.0,
          "y": 4.3
        },
        {
          "x": 8.0,
          "y": 3.1
        },
        {
          "x": 9.0,
          "y": 3.7
        },
        {
          "x": 10.0,
          "y": 1.8
        }
      ],
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds000)",
      "caption": "Second-hand value against age.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 16,
        "b": -1.5
      },
      "predict": {
        "x": 8.0,
        "y": 4
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = 16 - 1.5x",
          "explanation": "We now know the output $y$ and want the input $x$, so we solve the equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set y equal to the target",
          "workingLatex": "16 - 1.5x = 4",
          "explanation": "We want the predicted value to equal $4$, so substitute that for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move the intercept across",
          "workingLatex": "-1.5x = 4 - 16",
          "explanation": "Subtract the intercept from both sides to leave the $x$-term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "-1.5x = -12",
          "explanation": "Work out the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the gradient",
          "workingLatex": "x = \\dfrac{-12}{-1.5}",
          "explanation": "Dividing both sides by the gradient isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "x = 8",
          "explanation": "So the model needs age of about $8$ to reach that value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer in context",
          "workingLatex": "x \\approx 8",
          "explanation": "This is the age the line associates with value of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the data range",
          "workingLatex": "1 \\le x \\le 10?",
          "explanation": "To judge reliability we check whether $x = 8$ lies within the fitted range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on reliability",
          "workingLatex": "\\text{interpolation?}",
          "explanation": "Here $x = 8$ is inside the data range, so this is interpolation, so it is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 8$; this is interpolation, so it is reliable."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "solve",
      "reliability",
      "ad"
    ],
    "questionText": "A company models the weekly advertising spend $x$ (in $\\pounds00$) and the weekly sales $y$ (in $\\pounds000$), using data with advertising spend between $2$ and $15$. The least-squares regression line of $y$ on $x$ is $y = 18 + 4.5x$. Find the value of $x$ for which the model predicts $y = 63$, and comment on the reliability of this value.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 24.1
        },
        {
          "x": 3.44,
          "y": 34.9
        },
        {
          "x": 4.89,
          "y": 41.0
        },
        {
          "x": 6.33,
          "y": 43.5
        },
        {
          "x": 7.78,
          "y": 53.0
        },
        {
          "x": 9.22,
          "y": 57.5
        },
        {
          "x": 10.67,
          "y": 62.3
        },
        {
          "x": 12.11,
          "y": 69.5
        },
        {
          "x": 13.56,
          "y": 80.2
        },
        {
          "x": 15.0,
          "y": 82.6
        }
      ],
      "xAxisLabel": "advertising (\\pounds00)",
      "yAxisLabel": "sales (\\pounds000)",
      "caption": "Sales against advertising spend.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 18,
        "b": 4.5
      },
      "predict": {
        "x": 10.0,
        "y": 63
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = 18 + 4.5x",
          "explanation": "We now know the output $y$ and want the input $x$, so we solve the equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set y equal to the target",
          "workingLatex": "18 + 4.5x = 63",
          "explanation": "We want the predicted sales to equal $63$, so substitute that for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move the intercept across",
          "workingLatex": "4.5x = 63 - 18",
          "explanation": "Subtract the intercept from both sides to leave the $x$-term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "4.5x = 45",
          "explanation": "Work out the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the gradient",
          "workingLatex": "x = \\dfrac{45}{4.5}",
          "explanation": "Dividing both sides by the gradient isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "x = 10",
          "explanation": "So the model needs advertising spend of about $10$ to reach that value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer in context",
          "workingLatex": "x \\approx 10",
          "explanation": "This is the advertising spend the line associates with sales of $63$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the data range",
          "workingLatex": "2 \\le x \\le 15?",
          "explanation": "To judge reliability we check whether $x = 10$ lies within the fitted range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on reliability",
          "workingLatex": "\\text{interpolation?}",
          "explanation": "Here $x = 10$ is inside the data range, so this is interpolation, so it is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 10$; this is interpolation, so it is reliable."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "solve",
      "reliability",
      "rain"
    ],
    "questionText": "A shop models the daily rainfall $x$ (in mm) and the number of umbrellas sold $y$, using data with rainfall between $0$ and $18$. The least-squares regression line of $y$ on $x$ is $y = 5 + 2.4x$. Find the value of $x$ for which the model predicts $y = 29$, and comment on the reliability of this value.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 7.5
        },
        {
          "x": 2.0,
          "y": 12.0
        },
        {
          "x": 4.0,
          "y": 11.8
        },
        {
          "x": 6.0,
          "y": 17.7
        },
        {
          "x": 8.0,
          "y": 22.6
        },
        {
          "x": 10.0,
          "y": 30.4
        },
        {
          "x": 12.0,
          "y": 33.8
        },
        {
          "x": 14.0,
          "y": 39.0
        },
        {
          "x": 16.0,
          "y": 45.0
        },
        {
          "x": 18.0,
          "y": 48.7
        }
      ],
      "xAxisLabel": "rainfall (mm)",
      "yAxisLabel": "umbrellas sold",
      "caption": "Umbrella sales against rainfall.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 5,
        "b": 2.4
      },
      "predict": {
        "x": 10.0,
        "y": 29
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = 5 + 2.4x",
          "explanation": "We now know the output $y$ and want the input $x$, so we solve the equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set y equal to the target",
          "workingLatex": "5 + 2.4x = 29",
          "explanation": "We want the predicted umbrella sales to equal $29$, so substitute that for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move the intercept across",
          "workingLatex": "2.4x = 29 - 5",
          "explanation": "Subtract the intercept from both sides to leave the $x$-term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "2.4x = 24",
          "explanation": "Work out the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the gradient",
          "workingLatex": "x = \\dfrac{24}{2.4}",
          "explanation": "Dividing both sides by the gradient isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "x = 10",
          "explanation": "So the model needs rainfall of about $10$ to reach that value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer in context",
          "workingLatex": "x \\approx 10",
          "explanation": "This is the rainfall the line associates with umbrella sales of $29$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the data range",
          "workingLatex": "0 \\le x \\le 18?",
          "explanation": "To judge reliability we check whether $x = 10$ lies within the fitted range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on reliability",
          "workingLatex": "\\text{interpolation?}",
          "explanation": "Here $x = 10$ is inside the data range, so this is interpolation, so it is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 10$; this is interpolation, so it is reliable."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "solve",
      "reliability",
      "rev"
    ],
    "questionText": "A teacher models the number of hours of revision $x$ and the test mark $y$ (as a percentage), using data with revision time between $0$ and $10$. The least-squares regression line of $y$ on $x$ is $y = 40 + 6x$. Find the value of $x$ for which the model predicts $y = 88$, and comment on the reliability of this value.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 36.0
        },
        {
          "x": 1.11,
          "y": 45.1
        },
        {
          "x": 2.22,
          "y": 55.3
        },
        {
          "x": 3.33,
          "y": 62.8
        },
        {
          "x": 4.44,
          "y": 69.9
        },
        {
          "x": 5.56,
          "y": 77.2
        },
        {
          "x": 6.67,
          "y": 77.4
        },
        {
          "x": 7.78,
          "y": 84.7
        },
        {
          "x": 8.89,
          "y": 93.6
        },
        {
          "x": 10.0,
          "y": 101.2
        }
      ],
      "xAxisLabel": "revision (hours)",
      "yAxisLabel": "mark (%)",
      "caption": "Test mark against revision time.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 40,
        "b": 6
      },
      "predict": {
        "x": 8.0,
        "y": 88
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = 40 + 6x",
          "explanation": "We now know the output $y$ and want the input $x$, so we solve the equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set y equal to the target",
          "workingLatex": "40 + 6x = 88",
          "explanation": "We want the predicted test mark to equal $88$, so substitute that for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move the intercept across",
          "workingLatex": "6x = 88 - 40",
          "explanation": "Subtract the intercept from both sides to leave the $x$-term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "6x = 48",
          "explanation": "Work out the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the gradient",
          "workingLatex": "x = \\dfrac{48}{6}",
          "explanation": "Dividing both sides by the gradient isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "x = 8",
          "explanation": "So the model needs revision time of about $8$ to reach that value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer in context",
          "workingLatex": "x \\approx 8",
          "explanation": "This is the revision time the line associates with test mark of $88$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the data range",
          "workingLatex": "0 \\le x \\le 10?",
          "explanation": "To judge reliability we check whether $x = 8$ lies within the fitted range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on reliability",
          "workingLatex": "\\text{interpolation?}",
          "explanation": "Here $x = 8$ is inside the data range, so this is interpolation, so it is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 8$; this is interpolation, so it is reliable."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "solve",
      "reliability",
      "train"
    ],
    "questionText": "A coach models the weekly training distance $x$ (in km) and the $5$ km race time $y$ (in minutes), using data with training distance between $20$ and $60$. The least-squares regression line of $y$ on $x$ is $y = 34 - 0.25x$. Find the value of $x$ for which the model predicts $y = 14$, and comment on the reliability of this value.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 20.0,
          "y": 29.8
        },
        {
          "x": 24.44,
          "y": 28.6
        },
        {
          "x": 28.89,
          "y": 27.7
        },
        {
          "x": 33.33,
          "y": 24.6
        },
        {
          "x": 37.78,
          "y": 23.5
        },
        {
          "x": 42.22,
          "y": 23.1
        },
        {
          "x": 46.67,
          "y": 23.0
        },
        {
          "x": 51.11,
          "y": 21.6
        },
        {
          "x": 55.56,
          "y": 21.0
        },
        {
          "x": 60.0,
          "y": 19.9
        }
      ],
      "xAxisLabel": "training (km)",
      "yAxisLabel": "race time (min)",
      "caption": "Race time against training distance.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 34,
        "b": -0.25
      },
      "predict": {
        "x": 80.0,
        "y": 14
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = 34 - 0.25x",
          "explanation": "We now know the output $y$ and want the input $x$, so we solve the equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set y equal to the target",
          "workingLatex": "34 - 0.25x = 14",
          "explanation": "We want the predicted race time to equal $14$, so substitute that for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move the intercept across",
          "workingLatex": "-0.25x = 14 - 34",
          "explanation": "Subtract the intercept from both sides to leave the $x$-term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "-0.25x = -20",
          "explanation": "Work out the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the gradient",
          "workingLatex": "x = \\dfrac{-20}{-0.25}",
          "explanation": "Dividing both sides by the gradient isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "x = 80",
          "explanation": "So the model needs training distance of about $80$ to reach that value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer in context",
          "workingLatex": "x \\approx 80",
          "explanation": "This is the training distance the line associates with race time of $14$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the data range",
          "workingLatex": "20 \\le x \\le 60?",
          "explanation": "To judge reliability we check whether $x = 80$ lies within the fitted range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on reliability",
          "workingLatex": "\\text{interpolation?}",
          "explanation": "Here $x = 80$ is outside the data range, so this is extrapolation, so it is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 80$; this is extrapolation, so it is unreliable."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "residual",
      "interpret",
      "fert"
    ],
    "questionText": "A gardener models the mass of fertiliser $x$ (in grams) and the plant height $y$ (in cm). The least-squares regression line of $y$ on $x$ is $y = 17.2 + 0.6x$. One observation had fertiliser $= 8$ and height $= 23$. Find the residual for this observation and interpret it.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 18.4
        },
        {
          "x": 3.11,
          "y": 18.3
        },
        {
          "x": 4.22,
          "y": 20.2
        },
        {
          "x": 5.33,
          "y": 19.8
        },
        {
          "x": 6.44,
          "y": 21.4
        },
        {
          "x": 7.56,
          "y": 20.9
        },
        {
          "x": 8.67,
          "y": 22.0
        },
        {
          "x": 9.78,
          "y": 23.2
        },
        {
          "x": 10.89,
          "y": 24.1
        },
        {
          "x": 12.0,
          "y": 25.1
        }
      ],
      "xAxisLabel": "fertiliser (g)",
      "yAxisLabel": "height (cm)",
      "caption": "Plant height against fertiliser applied.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 17.2,
        "b": 0.6
      },
      "predict": {
        "x": 8,
        "y": 22.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of a residual",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "A residual is the gap between an observed data value and the value the line predicts for the same $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the model",
          "workingLatex": "y = 17.2 + 0.6x",
          "explanation": "We first need the predicted value $\\hat{y}$ at the given $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the observed x",
          "workingLatex": "y = 17.2 + 0.6 \\times 8",
          "explanation": "The data point has fertiliser $= 8$, so substitute that into the line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the predicted value",
          "workingLatex": "\\hat{y} = 22",
          "explanation": "The line predicts height of $22$ at this $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the residual formula",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "Now compare the actual observed value with this prediction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the observed y",
          "workingLatex": "\\text{residual} = 23 - 22",
          "explanation": "The observed height was $23$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the residual",
          "workingLatex": "\\text{residual} = 1",
          "explanation": "The size and sign of this number describe how the point sits relative to the line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign",
          "workingLatex": "1 > 0",
          "explanation": "A positive residual means the actual point lies above the line: the model under-predicted here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the size",
          "workingLatex": "|\\text{residual}| = 1",
          "explanation": "The point is about $1$ away from the line vertically, which is the prediction error for this observation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Link to least squares",
          "workingLatex": "\\sum (\\text{residual})^2 \\text{ is minimised}",
          "explanation": "The least-squares line is the one line that makes the total of all these squared residuals as small as possible.",
          "diagram": null
        }
      ],
      "finalAnswer": "Residual $= 1$: the point lies above the line, so the model under-predicted by $1$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "residual",
      "interpret",
      "temp"
    ],
    "questionText": "A seaside cafe models the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$. The least-squares regression line of $y$ on $x$ is $y = 24 + 6x$. One observation had temperature $= 20$ and cold-drink sales $= 150$. Find the residual for this observation and interpret it.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 14.0,
          "y": 106.7
        },
        {
          "x": 16.0,
          "y": 121.9
        },
        {
          "x": 18.0,
          "y": 138.6
        },
        {
          "x": 20.0,
          "y": 137.6
        },
        {
          "x": 22.0,
          "y": 158.5
        },
        {
          "x": 24.0,
          "y": 174.7
        },
        {
          "x": 26.0,
          "y": 177.0
        },
        {
          "x": 28.0,
          "y": 186.5
        },
        {
          "x": 30.0,
          "y": 204.0
        },
        {
          "x": 32.0,
          "y": 210.1
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold-drink sales against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 24,
        "b": 6
      },
      "predict": {
        "x": 20,
        "y": 144
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of a residual",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "A residual is the gap between an observed data value and the value the line predicts for the same $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the model",
          "workingLatex": "y = 24 + 6x",
          "explanation": "We first need the predicted value $\\hat{y}$ at the given $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the observed x",
          "workingLatex": "y = 24 + 6 \\times 20",
          "explanation": "The data point has temperature $= 20$, so substitute that into the line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the predicted value",
          "workingLatex": "\\hat{y} = 144",
          "explanation": "The line predicts cold-drink sales of $144$ at this $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the residual formula",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "Now compare the actual observed value with this prediction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the observed y",
          "workingLatex": "\\text{residual} = 150 - 144",
          "explanation": "The observed cold-drink sales was $150$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the residual",
          "workingLatex": "\\text{residual} = 6",
          "explanation": "The size and sign of this number describe how the point sits relative to the line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign",
          "workingLatex": "6 > 0",
          "explanation": "A positive residual means the actual point lies above the line: the model under-predicted here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the size",
          "workingLatex": "|\\text{residual}| = 6",
          "explanation": "The point is about $6$ away from the line vertically, which is the prediction error for this observation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Link to least squares",
          "workingLatex": "\\sum (\\text{residual})^2 \\text{ is minimised}",
          "explanation": "The least-squares line is the one line that makes the total of all these squared residuals as small as possible.",
          "diagram": null
        }
      ],
      "finalAnswer": "Residual $= 6$: the point lies above the line, so the model under-predicted by $6$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "residual",
      "interpret",
      "rev"
    ],
    "questionText": "A teacher models the number of hours of revision $x$ and the test mark $y$ (as a percentage). The least-squares regression line of $y$ on $x$ is $y = 47.5 + 0.75x$. One observation had revision time $= 6$ and test mark $= 49$. Find the residual for this observation and interpret it.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 48.3
        },
        {
          "x": 1.11,
          "y": 49.0
        },
        {
          "x": 2.22,
          "y": 48.3
        },
        {
          "x": 3.33,
          "y": 49.5
        },
        {
          "x": 4.44,
          "y": 50.3
        },
        {
          "x": 5.56,
          "y": 52.1
        },
        {
          "x": 6.67,
          "y": 52.5
        },
        {
          "x": 7.78,
          "y": 53.5
        },
        {
          "x": 8.89,
          "y": 54.7
        },
        {
          "x": 10.0,
          "y": 55.2
        }
      ],
      "xAxisLabel": "revision (hours)",
      "yAxisLabel": "mark (%)",
      "caption": "Test mark against revision time.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 47.5,
        "b": 0.75
      },
      "predict": {
        "x": 6,
        "y": 52.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of a residual",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "A residual is the gap between an observed data value and the value the line predicts for the same $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the model",
          "workingLatex": "y = 47.5 + 0.75x",
          "explanation": "We first need the predicted value $\\hat{y}$ at the given $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the observed x",
          "workingLatex": "y = 47.5 + 0.75 \\times 6",
          "explanation": "The data point has revision time $= 6$, so substitute that into the line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the predicted value",
          "workingLatex": "\\hat{y} = 52",
          "explanation": "The line predicts test mark of $52$ at this $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the residual formula",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "Now compare the actual observed value with this prediction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the observed y",
          "workingLatex": "\\text{residual} = 49 - 52",
          "explanation": "The observed test mark was $49$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the residual",
          "workingLatex": "\\text{residual} = -3",
          "explanation": "The size and sign of this number describe how the point sits relative to the line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign",
          "workingLatex": "-3 < 0",
          "explanation": "A negative residual means the actual point lies below the line: the model over-predicted here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the size",
          "workingLatex": "|\\text{residual}| = 3",
          "explanation": "The point is about $3$ away from the line vertically, which is the prediction error for this observation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Link to least squares",
          "workingLatex": "\\sum (\\text{residual})^2 \\text{ is minimised}",
          "explanation": "The least-squares line is the one line that makes the total of all these squared residuals as small as possible.",
          "diagram": null
        }
      ],
      "finalAnswer": "Residual $= -3$: the point lies below the line, so the model over-predicted by $3$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "residual",
      "interpret",
      "age"
    ],
    "questionText": "A car dealer models the age $x$ (in years) and the second-hand value $y$ (in $\\pounds000$). The least-squares regression line of $y$ on $x$ is $y = 16 - 1.5x$. One observation had age $= 6$ and value $= 6$. Find the residual for this observation and interpret it.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1.0,
          "y": 14.7
        },
        {
          "x": 2.0,
          "y": 13.2
        },
        {
          "x": 3.0,
          "y": 11.4
        },
        {
          "x": 4.0,
          "y": 10.4
        },
        {
          "x": 5.0,
          "y": 8.4
        },
        {
          "x": 6.0,
          "y": 6.9
        },
        {
          "x": 7.0,
          "y": 4.6
        },
        {
          "x": 8.0,
          "y": 3.0
        },
        {
          "x": 9.0,
          "y": 2.8
        },
        {
          "x": 10.0,
          "y": -0.1
        }
      ],
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds000)",
      "caption": "Second-hand value against age.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 16,
        "b": -1.5
      },
      "predict": {
        "x": 6,
        "y": 7.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of a residual",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "A residual is the gap between an observed data value and the value the line predicts for the same $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the model",
          "workingLatex": "y = 16 - 1.5x",
          "explanation": "We first need the predicted value $\\hat{y}$ at the given $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the observed x",
          "workingLatex": "y = 16 - 1.5 \\times 6",
          "explanation": "The data point has age $= 6$, so substitute that into the line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the predicted value",
          "workingLatex": "\\hat{y} = 7",
          "explanation": "The line predicts value of $7$ at this $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the residual formula",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "Now compare the actual observed value with this prediction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the observed y",
          "workingLatex": "\\text{residual} = 6 - 7",
          "explanation": "The observed value was $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the residual",
          "workingLatex": "\\text{residual} = -1",
          "explanation": "The size and sign of this number describe how the point sits relative to the line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign",
          "workingLatex": "-1 < 0",
          "explanation": "A negative residual means the actual point lies below the line: the model over-predicted here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the size",
          "workingLatex": "|\\text{residual}| = 1",
          "explanation": "The point is about $1$ away from the line vertically, which is the prediction error for this observation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Link to least squares",
          "workingLatex": "\\sum (\\text{residual})^2 \\text{ is minimised}",
          "explanation": "The least-squares line is the one line that makes the total of all these squared residuals as small as possible.",
          "diagram": null
        }
      ],
      "finalAnswer": "Residual $= -1$: the point lies below the line, so the model over-predicted by $1$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "residual",
      "interpret",
      "exp"
    ],
    "questionText": "A firm models the years of experience $x$ and the annual salary $y$ (in $\\pounds000$). The least-squares regression line of $y$ on $x$ is $y = 27.6 + 0.4x$. One observation had experience $= 10$ and salary $= 34$. Find the residual for this observation and interpret it.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 27.6
        },
        {
          "x": 1.33,
          "y": 27.4
        },
        {
          "x": 2.67,
          "y": 29.1
        },
        {
          "x": 4.0,
          "y": 28.7
        },
        {
          "x": 5.33,
          "y": 30.0
        },
        {
          "x": 6.67,
          "y": 29.5
        },
        {
          "x": 8.0,
          "y": 30.4
        },
        {
          "x": 9.33,
          "y": 31.4
        },
        {
          "x": 10.67,
          "y": 32.2
        },
        {
          "x": 12.0,
          "y": 33.0
        }
      ],
      "xAxisLabel": "experience (years)",
      "yAxisLabel": "salary (\\pounds000)",
      "caption": "Salary against experience.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 27.6,
        "b": 0.4
      },
      "predict": {
        "x": 10,
        "y": 31.6
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of a residual",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "A residual is the gap between an observed data value and the value the line predicts for the same $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the model",
          "workingLatex": "y = 27.6 + 0.4x",
          "explanation": "We first need the predicted value $\\hat{y}$ at the given $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the observed x",
          "workingLatex": "y = 27.6 + 0.4 \\times 10",
          "explanation": "The data point has experience $= 10$, so substitute that into the line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the predicted value",
          "workingLatex": "\\hat{y} = 31.6",
          "explanation": "The line predicts salary of $31.6$ at this $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the residual formula",
          "workingLatex": "\\text{residual} = y - \\hat{y}",
          "explanation": "Now compare the actual observed value with this prediction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the observed y",
          "workingLatex": "\\text{residual} = 34 - 31.6",
          "explanation": "The observed salary was $34$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the residual",
          "workingLatex": "\\text{residual} = 2.4",
          "explanation": "The size and sign of this number describe how the point sits relative to the line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sign",
          "workingLatex": "2.4 > 0",
          "explanation": "A positive residual means the actual point lies above the line: the model under-predicted here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the size",
          "workingLatex": "|\\text{residual}| = 2.4",
          "explanation": "The point is about $2.4$ away from the line vertically, which is the prediction error for this observation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Link to least squares",
          "workingLatex": "\\sum (\\text{residual})^2 \\text{ is minimised}",
          "explanation": "The least-squares line is the one line that makes the total of all these squared residuals as small as possible.",
          "diagram": null
        }
      ],
      "finalAnswer": "Residual $= 2.4$: the point lies above the line, so the model under-predicted by $2.4$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "regression",
      "least-squares",
      "residual",
      "concept"
    ],
    "questionText": "A seaside cafe fits a least-squares regression line of $y$ on $x$ to model the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$, obtaining $y = 24 + 6x$. Explain (a) what 'least squares' means, (b) what a residual is, and (c) why the line of $y$ on $x$ is the appropriate one to use here.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define a residual",
          "workingLatex": "e_i = y_i - \\hat{y}_i",
          "explanation": "For each data point, the residual is the vertical gap between the observed value and the value the line predicts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the squared residuals",
          "workingLatex": "e_i^2",
          "explanation": "We square each residual so that positive and negative gaps cannot cancel out, and larger misses are penalised more heavily.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add them up",
          "workingLatex": "\\sum e_i^2",
          "explanation": "The total of the squared residuals measures how badly a given line fits all the points at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the least-squares principle",
          "workingLatex": "\\min \\sum e_i^2",
          "explanation": "The least-squares line is the single straight line that makes this total as small as possible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Why vertical gaps",
          "workingLatex": "e_i \\text{ measured in the } y\\text{-direction}",
          "explanation": "We measure the gaps vertically because we are predicting cold-drink sales from temperature, and prediction error is an error in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why 'y on x'",
          "workingLatex": "y \\text{ on } x",
          "explanation": "Since temperature is the explanatory variable and cold-drink sales the response, we minimise errors in $y$, giving the line of $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State a key property",
          "workingLatex": "(\\bar{x}, \\bar{y}) \\text{ lies on the line}",
          "explanation": "This best-fit line always passes through the mean point of the data, which is why $a = \\bar{y} - b\\bar{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how $x$ and $y$ vary together with how much $x$ varies alone, capturing the average trend.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "y = 24 + 6x",
          "explanation": "So $y = 24 + 6x$ is the straight line that best predicts cold-drink sales from temperature in the least-squares sense.",
          "diagram": null
        }
      ],
      "finalAnswer": "Least squares chooses the line minimising the sum of squared vertical residuals; residuals are the vertical prediction errors; we use $y$ on $x$ because $x$ is explanatory and we predict $y$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "regression",
      "least-squares",
      "residual",
      "concept"
    ],
    "questionText": "A coach fits a least-squares regression line of $y$ on $x$ to model the weekly training distance $x$ (in km) and the $5$ km race time $y$ (in minutes), obtaining $y = 34 - 0.25x$. Explain (a) what 'least squares' means, (b) what a residual is, and (c) why the line of $y$ on $x$ is the appropriate one to use here.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define a residual",
          "workingLatex": "e_i = y_i - \\hat{y}_i",
          "explanation": "For each data point, the residual is the vertical gap between the observed value and the value the line predicts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the squared residuals",
          "workingLatex": "e_i^2",
          "explanation": "We square each residual so that positive and negative gaps cannot cancel out, and larger misses are penalised more heavily.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add them up",
          "workingLatex": "\\sum e_i^2",
          "explanation": "The total of the squared residuals measures how badly a given line fits all the points at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the least-squares principle",
          "workingLatex": "\\min \\sum e_i^2",
          "explanation": "The least-squares line is the single straight line that makes this total as small as possible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Why vertical gaps",
          "workingLatex": "e_i \\text{ measured in the } y\\text{-direction}",
          "explanation": "We measure the gaps vertically because we are predicting race time from training distance, and prediction error is an error in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why 'y on x'",
          "workingLatex": "y \\text{ on } x",
          "explanation": "Since training distance is the explanatory variable and race time the response, we minimise errors in $y$, giving the line of $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State a key property",
          "workingLatex": "(\\bar{x}, \\bar{y}) \\text{ lies on the line}",
          "explanation": "This best-fit line always passes through the mean point of the data, which is why $a = \\bar{y} - b\\bar{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how $x$ and $y$ vary together with how much $x$ varies alone, capturing the average trend.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "y = 34 - 0.25x",
          "explanation": "So $y = 34 - 0.25x$ is the straight line that best predicts race time from training distance in the least-squares sense.",
          "diagram": null
        }
      ],
      "finalAnswer": "Least squares chooses the line minimising the sum of squared vertical residuals; residuals are the vertical prediction errors; we use $y$ on $x$ because $x$ is explanatory and we predict $y$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "regression",
      "least-squares",
      "residual",
      "concept"
    ],
    "questionText": "A company fits a least-squares regression line of $y$ on $x$ to model the weekly advertising spend $x$ (in $\\pounds00$) and the weekly sales $y$ (in $\\pounds000$), obtaining $y = 18 + 4.5x$. Explain (a) what 'least squares' means, (b) what a residual is, and (c) why the line of $y$ on $x$ is the appropriate one to use here.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define a residual",
          "workingLatex": "e_i = y_i - \\hat{y}_i",
          "explanation": "For each data point, the residual is the vertical gap between the observed value and the value the line predicts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the squared residuals",
          "workingLatex": "e_i^2",
          "explanation": "We square each residual so that positive and negative gaps cannot cancel out, and larger misses are penalised more heavily.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add them up",
          "workingLatex": "\\sum e_i^2",
          "explanation": "The total of the squared residuals measures how badly a given line fits all the points at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the least-squares principle",
          "workingLatex": "\\min \\sum e_i^2",
          "explanation": "The least-squares line is the single straight line that makes this total as small as possible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Why vertical gaps",
          "workingLatex": "e_i \\text{ measured in the } y\\text{-direction}",
          "explanation": "We measure the gaps vertically because we are predicting sales from advertising spend, and prediction error is an error in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why 'y on x'",
          "workingLatex": "y \\text{ on } x",
          "explanation": "Since advertising spend is the explanatory variable and sales the response, we minimise errors in $y$, giving the line of $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State a key property",
          "workingLatex": "(\\bar{x}, \\bar{y}) \\text{ lies on the line}",
          "explanation": "This best-fit line always passes through the mean point of the data, which is why $a = \\bar{y} - b\\bar{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how $x$ and $y$ vary together with how much $x$ varies alone, capturing the average trend.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "y = 18 + 4.5x",
          "explanation": "So $y = 18 + 4.5x$ is the straight line that best predicts sales from advertising spend in the least-squares sense.",
          "diagram": null
        }
      ],
      "finalAnswer": "Least squares chooses the line minimising the sum of squared vertical residuals; residuals are the vertical prediction errors; we use $y$ on $x$ because $x$ is explanatory and we predict $y$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "extrapolation"
    ],
    "questionText": "A biologist models the air temperature $x$ (in $\\degree\\text{C}$) and the cricket chirp rate $y$ (chirps per minute), using data with temperature between $10$ and $32$. The least-squares regression line of $y$ on $x$ is $y = -40 + 7x$. Predict chirp rate when $x = 28$ and when $x = 40$, commenting on the reliability of each prediction.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 10.0,
          "y": 37.8
        },
        {
          "x": 12.44,
          "y": 41.2
        },
        {
          "x": 14.89,
          "y": 70.5
        },
        {
          "x": 17.33,
          "y": 72.7
        },
        {
          "x": 19.78,
          "y": 98.8
        },
        {
          "x": 22.22,
          "y": 114.5
        },
        {
          "x": 24.67,
          "y": 123.9
        },
        {
          "x": 27.11,
          "y": 155.8
        },
        {
          "x": 29.56,
          "y": 176.1
        },
        {
          "x": 32.0,
          "y": 178.5
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "chirps/min",
      "caption": "Chirp rate against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": -40,
        "b": 7
      },
      "predict": {
        "x": 40,
        "y": 240
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = -40 + 7x",
          "explanation": "Both predictions come from substituting an $x$-value into this equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note what the gradient says",
          "workingLatex": "b = 7",
          "explanation": "Each extra $\\degree\\text{C}$ of temperature changes predicted chirp rate by about $7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the first value",
          "workingLatex": "y = -40 + 7 \\times 28",
          "explanation": "Start with $x = 28$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the first prediction",
          "workingLatex": "y = 156",
          "explanation": "So the line predicts about $156$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the first value's range",
          "workingLatex": "10 \\le 28 \\le 32",
          "explanation": "This $x$ lies inside the data range, so the first prediction is interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude on the first",
          "workingLatex": "\\text{reliable}",
          "explanation": "Interpolation uses the pattern where we actually have evidence, so this estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the second value",
          "workingLatex": "y = -40 + 7 \\times 40",
          "explanation": "Now take $x = 40$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second prediction",
          "workingLatex": "y = 240",
          "explanation": "The line gives about $240$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the second value's range",
          "workingLatex": "40 \\notin [10, 32]",
          "explanation": "This $x$ lies outside the data range, so the second prediction is extrapolation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude on the second",
          "workingLatex": "\\text{unreliable}",
          "explanation": "We have no evidence the straight-line trend continues beyond the data, so this estimate is unreliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise",
          "workingLatex": "\\text{interpolation vs extrapolation}",
          "explanation": "In short: $156$ can be trusted, but $240$ cannot, purely because of where each $x$ sits relative to the data.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 28$ gives $y \\approx 156$ (reliable, interpolation); $x = 40$ gives $y \\approx 240$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "extrapolation"
    ],
    "questionText": "A shop models the daily rainfall $x$ (in mm) and the number of umbrellas sold $y$, using data with rainfall between $0$ and $18$. The least-squares regression line of $y$ on $x$ is $y = 5 + 2.4x$. Predict umbrella sales when $x = 10$ and when $x = 25$, commenting on the reliability of each prediction.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 2.2
        },
        {
          "x": 2.0,
          "y": 12.3
        },
        {
          "x": 4.0,
          "y": 12.8
        },
        {
          "x": 6.0,
          "y": 17.6
        },
        {
          "x": 8.0,
          "y": 24.2
        },
        {
          "x": 10.0,
          "y": 29.7
        },
        {
          "x": 12.0,
          "y": 36.8
        },
        {
          "x": 14.0,
          "y": 37.3
        },
        {
          "x": 16.0,
          "y": 43.2
        },
        {
          "x": 18.0,
          "y": 46.2
        }
      ],
      "xAxisLabel": "rainfall (mm)",
      "yAxisLabel": "umbrellas sold",
      "caption": "Umbrella sales against rainfall.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 5,
        "b": 2.4
      },
      "predict": {
        "x": 25,
        "y": 65.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = 5 + 2.4x",
          "explanation": "Both predictions come from substituting an $x$-value into this equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note what the gradient says",
          "workingLatex": "b = 2.4",
          "explanation": "Each extra $\\text{mm}$ of rainfall changes predicted umbrella sales by about $2.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the first value",
          "workingLatex": "y = 5 + 2.4 \\times 10",
          "explanation": "Start with $x = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the first prediction",
          "workingLatex": "y = 29",
          "explanation": "So the line predicts about $29$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the first value's range",
          "workingLatex": "0 \\le 10 \\le 18",
          "explanation": "This $x$ lies inside the data range, so the first prediction is interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude on the first",
          "workingLatex": "\\text{reliable}",
          "explanation": "Interpolation uses the pattern where we actually have evidence, so this estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the second value",
          "workingLatex": "y = 5 + 2.4 \\times 25",
          "explanation": "Now take $x = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second prediction",
          "workingLatex": "y = 65",
          "explanation": "The line gives about $65$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the second value's range",
          "workingLatex": "25 \\notin [0, 18]",
          "explanation": "This $x$ lies outside the data range, so the second prediction is extrapolation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude on the second",
          "workingLatex": "\\text{unreliable}",
          "explanation": "We have no evidence the straight-line trend continues beyond the data, so this estimate is unreliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise",
          "workingLatex": "\\text{interpolation vs extrapolation}",
          "explanation": "In short: $29$ can be trusted, but $65$ cannot, purely because of where each $x$ sits relative to the data.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 10$ gives $y \\approx 29$ (reliable, interpolation); $x = 25$ gives $y \\approx 65$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "extrapolation"
    ],
    "questionText": "An outdoor lido models the daily sunshine $x$ (in hours) and the attendance $y$, using data with sunshine between $0$ and $12$. The least-squares regression line of $y$ on $x$ is $y = 60 + 45x$. Predict attendance when $x = 8$ and when $x = 16$, commenting on the reliability of each prediction.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 40.5
        },
        {
          "x": 1.33,
          "y": 147.8
        },
        {
          "x": 2.67,
          "y": 171.8
        },
        {
          "x": 4.0,
          "y": 261.8
        },
        {
          "x": 5.33,
          "y": 296.3
        },
        {
          "x": 6.67,
          "y": 327.4
        },
        {
          "x": 8.0,
          "y": 416.8
        },
        {
          "x": 9.33,
          "y": 498.9
        },
        {
          "x": 10.67,
          "y": 535.1
        },
        {
          "x": 12.0,
          "y": 610.0
        }
      ],
      "xAxisLabel": "sunshine (hours)",
      "yAxisLabel": "attendance",
      "caption": "Attendance against sunshine.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 60,
        "b": 45
      },
      "predict": {
        "x": 16,
        "y": 780
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = 60 + 45x",
          "explanation": "Both predictions come from substituting an $x$-value into this equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note what the gradient says",
          "workingLatex": "b = 45",
          "explanation": "Each extra $\\text{hour}$ of sunshine changes predicted attendance by about $45$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the first value",
          "workingLatex": "y = 60 + 45 \\times 8",
          "explanation": "Start with $x = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the first prediction",
          "workingLatex": "y = 420",
          "explanation": "So the line predicts about $420$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the first value's range",
          "workingLatex": "0 \\le 8 \\le 12",
          "explanation": "This $x$ lies inside the data range, so the first prediction is interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude on the first",
          "workingLatex": "\\text{reliable}",
          "explanation": "Interpolation uses the pattern where we actually have evidence, so this estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the second value",
          "workingLatex": "y = 60 + 45 \\times 16",
          "explanation": "Now take $x = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second prediction",
          "workingLatex": "y = 780",
          "explanation": "The line gives about $780$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the second value's range",
          "workingLatex": "16 \\notin [0, 12]",
          "explanation": "This $x$ lies outside the data range, so the second prediction is extrapolation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude on the second",
          "workingLatex": "\\text{unreliable}",
          "explanation": "We have no evidence the straight-line trend continues beyond the data, so this estimate is unreliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise",
          "workingLatex": "\\text{interpolation vs extrapolation}",
          "explanation": "In short: $420$ can be trusted, but $780$ cannot, purely because of where each $x$ sits relative to the data.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 8$ gives $y \\approx 420$ (reliable, interpolation); $x = 16$ gives $y \\approx 780$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "extrapolation"
    ],
    "questionText": "A gardener models the mass of fertiliser $x$ (in grams) and the plant height $y$ (in cm), using data with fertiliser between $2$ and $12$. The least-squares regression line of $y$ on $x$ is $y = 8 + 1.5x$. Predict height when $x = 10$ and when $x = 20$, commenting on the reliability of each prediction.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 12.0
        },
        {
          "x": 3.11,
          "y": 13.5
        },
        {
          "x": 4.22,
          "y": 15.5
        },
        {
          "x": 5.33,
          "y": 14.6
        },
        {
          "x": 6.44,
          "y": 16.3
        },
        {
          "x": 7.56,
          "y": 18.8
        },
        {
          "x": 8.67,
          "y": 21.8
        },
        {
          "x": 9.78,
          "y": 23.2
        },
        {
          "x": 10.89,
          "y": 25.5
        },
        {
          "x": 12.0,
          "y": 27.1
        }
      ],
      "xAxisLabel": "fertiliser (g)",
      "yAxisLabel": "height (cm)",
      "caption": "Plant height against fertiliser applied.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 8,
        "b": 1.5
      },
      "predict": {
        "x": 20,
        "y": 38.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model",
          "workingLatex": "y = 8 + 1.5x",
          "explanation": "Both predictions come from substituting an $x$-value into this equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note what the gradient says",
          "workingLatex": "b = 1.5",
          "explanation": "Each extra $\\text{g}$ of fertiliser changes predicted height by about $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the first value",
          "workingLatex": "y = 8 + 1.5 \\times 10",
          "explanation": "Start with $x = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the first prediction",
          "workingLatex": "y = 23",
          "explanation": "So the line predicts about $23$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the first value's range",
          "workingLatex": "2 \\le 10 \\le 12",
          "explanation": "This $x$ lies inside the data range, so the first prediction is interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude on the first",
          "workingLatex": "\\text{reliable}",
          "explanation": "Interpolation uses the pattern where we actually have evidence, so this estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the second value",
          "workingLatex": "y = 8 + 1.5 \\times 20",
          "explanation": "Now take $x = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second prediction",
          "workingLatex": "y = 38",
          "explanation": "The line gives about $38$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the second value's range",
          "workingLatex": "20 \\notin [2, 12]",
          "explanation": "This $x$ lies outside the data range, so the second prediction is extrapolation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude on the second",
          "workingLatex": "\\text{unreliable}",
          "explanation": "We have no evidence the straight-line trend continues beyond the data, so this estimate is unreliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise",
          "workingLatex": "\\text{interpolation vs extrapolation}",
          "explanation": "In short: $23$ can be trusted, but $38$ cannot, purely because of where each $x$ sits relative to the data.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 10$ gives $y \\approx 23$ (reliable, interpolation); $x = 20$ gives $y \\approx 38$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "A seaside cafe records the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$ on $12$ occasions, with temperature ranging from $14$ to $32$. The data give $\\Sigma x = 264$, $\\Sigma y = 1872$, $\\Sigma xy = 41364$ and $\\Sigma x^2 = 5838$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict cold-drink sales when $x = 20$ and when $x = 36$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 14.0,
          "y": 105.9
        },
        {
          "x": 16.0,
          "y": 119.7
        },
        {
          "x": 18.0,
          "y": 133.3
        },
        {
          "x": 20.0,
          "y": 145.1
        },
        {
          "x": 22.0,
          "y": 149.4
        },
        {
          "x": 24.0,
          "y": 169.1
        },
        {
          "x": 26.0,
          "y": 176.5
        },
        {
          "x": 28.0,
          "y": 195.3
        },
        {
          "x": 30.0,
          "y": 210.8
        },
        {
          "x": 32.0,
          "y": 219.6
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold-drink sales against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 24,
        "b": 6
      },
      "predict": {
        "x": 20,
        "y": 144
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 5838 - \\dfrac{264^2}{12} = 30",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 41364 - \\dfrac{264\\times1872}{12} = 180",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{180}{30} = 6",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 22, \\quad \\bar{y} = 156",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 156 - (6)(22) = 24",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 24 + 6x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 6",
          "explanation": "Part (b): each extra $\\degree\\text{C}$ of temperature is associated with a change of about $6$ in cold-drink sales, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = 24 + 6 \\times 20 = 144",
          "explanation": "Part (c): at $x = 20$ the model predicts about $144$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "14 \\le 20 \\le 32",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = 24 + 6 \\times 36 = 240",
          "explanation": "At $x = 36$ the model gives about $240$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "36 \\notin [14, 32]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 24 + 6x$; gradient means each extra $\\degree\\text{C}$ of temperature changes cold-drink sales by $6$; $x=20\\Rightarrow y\\approx144$ (reliable); $x=36\\Rightarrow y\\approx240$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "A gardener records the mass of fertiliser $x$ (in grams) and the plant height $y$ (in cm) on $10$ occasions, with fertiliser ranging from $2$ to $12$. The data give $\\Sigma x = 80$, $\\Sigma y = 200$, $\\Sigma xy = 1675$ and $\\Sigma x^2 = 690$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict height when $x = 10$ and when $x = 20$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 11.7
        },
        {
          "x": 3.11,
          "y": 13.5
        },
        {
          "x": 4.22,
          "y": 15.4
        },
        {
          "x": 5.33,
          "y": 16.0
        },
        {
          "x": 6.44,
          "y": 16.7
        },
        {
          "x": 7.56,
          "y": 19.1
        },
        {
          "x": 8.67,
          "y": 21.4
        },
        {
          "x": 9.78,
          "y": 22.6
        },
        {
          "x": 10.89,
          "y": 24.7
        },
        {
          "x": 12.0,
          "y": 27.1
        }
      ],
      "xAxisLabel": "fertiliser (g)",
      "yAxisLabel": "height (cm)",
      "caption": "Plant height against fertiliser applied.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 8.0,
        "b": 1.5
      },
      "predict": {
        "x": 10,
        "y": 23.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 690 - \\dfrac{80^2}{10} = 50",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 1675 - \\dfrac{80\\times200}{10} = 75",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{75}{50} = 1.5",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 8, \\quad \\bar{y} = 20",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 20 - (1.5)(8) = 8",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 8 + 1.5x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.5",
          "explanation": "Part (b): each extra $\\text{g}$ of fertiliser is associated with a change of about $1.5$ in height, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = 8 + 1.5 \\times 10 = 23",
          "explanation": "Part (c): at $x = 10$ the model predicts about $23$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "2 \\le 10 \\le 12",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = 8 + 1.5 \\times 20 = 38",
          "explanation": "At $x = 20$ the model gives about $38$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "20 \\notin [2, 12]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 8 + 1.5x$; gradient means each extra $\\text{g}$ of fertiliser changes height by $1.5$; $x=10\\Rightarrow y\\approx23$ (reliable); $x=20\\Rightarrow y\\approx38$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "A teacher records the number of hours of revision $x$ and the test mark $y$ (as a percentage) on $10$ occasions, with revision time ranging from $0$ to $10$. The data give $\\Sigma x = 50$, $\\Sigma y = 700$, $\\Sigma xy = 3620$ and $\\Sigma x^2 = 270$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict test mark when $x = 8$ and when $x = 14$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 38.6
        },
        {
          "x": 1.11,
          "y": 48.0
        },
        {
          "x": 2.22,
          "y": 55.6
        },
        {
          "x": 3.33,
          "y": 61.8
        },
        {
          "x": 4.44,
          "y": 66.7
        },
        {
          "x": 5.56,
          "y": 72.2
        },
        {
          "x": 6.67,
          "y": 83.0
        },
        {
          "x": 7.78,
          "y": 85.9
        },
        {
          "x": 8.89,
          "y": 95.1
        },
        {
          "x": 10.0,
          "y": 98.8
        }
      ],
      "xAxisLabel": "revision (hours)",
      "yAxisLabel": "mark (%)",
      "caption": "Test mark against revision time.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 40,
        "b": 6
      },
      "predict": {
        "x": 8,
        "y": 88
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 270 - \\dfrac{50^2}{10} = 20",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 3620 - \\dfrac{50\\times700}{10} = 120",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{120}{20} = 6",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 5, \\quad \\bar{y} = 70",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 70 - (6)(5) = 40",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 40 + 6x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 6",
          "explanation": "Part (b): each extra $\\text{hour}$ of revision time is associated with a change of about $6$ in test mark, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = 40 + 6 \\times 8 = 88",
          "explanation": "Part (c): at $x = 8$ the model predicts about $88$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "0 \\le 8 \\le 10",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = 40 + 6 \\times 14 = 124",
          "explanation": "At $x = 14$ the model gives about $124$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "14 \\notin [0, 10]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 40 + 6x$; gradient means each extra $\\text{hour}$ of revision time changes test mark by $6$; $x=8\\Rightarrow y\\approx88$ (reliable); $x=14\\Rightarrow y\\approx124$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "A car dealer records the age $x$ (in years) and the second-hand value $y$ (in $\\pounds000$) on $10$ occasions, with age ranging from $1$ to $10$. The data give $\\Sigma x = 50$, $\\Sigma y = 85$, $\\Sigma xy = 365$ and $\\Sigma x^2 = 290$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict value when $x = 8$ and when $x = 12$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1.0,
          "y": 13.3
        },
        {
          "x": 2.0,
          "y": 13.7
        },
        {
          "x": 3.0,
          "y": 10.8
        },
        {
          "x": 4.0,
          "y": 9.0
        },
        {
          "x": 5.0,
          "y": 9.5
        },
        {
          "x": 6.0,
          "y": 7.4
        },
        {
          "x": 7.0,
          "y": 5.8
        },
        {
          "x": 8.0,
          "y": 4.2
        },
        {
          "x": 9.0,
          "y": 1.5
        },
        {
          "x": 10.0,
          "y": 2.2
        }
      ],
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds000)",
      "caption": "Second-hand value against age.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 16.0,
        "b": -1.5
      },
      "predict": {
        "x": 8,
        "y": 4.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 290 - \\dfrac{50^2}{10} = 40",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 365 - \\dfrac{50\\times85}{10} = -60",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{-60}{40} = -1.5",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 5, \\quad \\bar{y} = 8.5",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 8.5 - (-1.5)(5) = 16",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 16 - 1.5x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = -1.5",
          "explanation": "Part (b): each extra $\\text{year}$ of age is associated with a change of about $-1.5$ in value, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = 16 - 1.5 \\times 8 = 4",
          "explanation": "Part (c): at $x = 8$ the model predicts about $4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "1 \\le 8 \\le 10",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = 16 - 1.5 \\times 12 = -2",
          "explanation": "At $x = 12$ the model gives about $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "12 \\notin [1, 10]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 16 - 1.5x$; gradient means each extra $\\text{year}$ of age changes value by $-1.5$; $x=8\\Rightarrow y\\approx4$ (reliable); $x=12\\Rightarrow y\\approx-2$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "A company records the weekly advertising spend $x$ (in $\\pounds00$) and the weekly sales $y$ (in $\\pounds000$) on $8$ occasions, with advertising spend ranging from $2$ to $15$. The data give $\\Sigma x = 64$, $\\Sigma y = 400$, $\\Sigma xy = 3270$ and $\\Sigma x^2 = 532$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict sales when $x = 12$ and when $x = 20$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2.0,
          "y": 27.1
        },
        {
          "x": 3.44,
          "y": 36.8
        },
        {
          "x": 4.89,
          "y": 38.3
        },
        {
          "x": 6.33,
          "y": 46.3
        },
        {
          "x": 7.78,
          "y": 48.9
        },
        {
          "x": 9.22,
          "y": 51.1
        },
        {
          "x": 10.67,
          "y": 59.0
        },
        {
          "x": 12.11,
          "y": 66.2
        },
        {
          "x": 13.56,
          "y": 69.0
        },
        {
          "x": 15.0,
          "y": 75.5
        }
      ],
      "xAxisLabel": "advertising (\\pounds00)",
      "yAxisLabel": "sales (\\pounds000)",
      "caption": "Sales against advertising spend.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 22.0,
        "b": 3.5
      },
      "predict": {
        "x": 12,
        "y": 64.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 532 - \\dfrac{64^2}{8} = 20",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 3270 - \\dfrac{64\\times400}{8} = 70",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{70}{20} = 3.5",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 8, \\quad \\bar{y} = 50",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 50 - (3.5)(8) = 22",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 22 + 3.5x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 3.5",
          "explanation": "Part (b): each extra $\\pounds00$ of advertising spend is associated with a change of about $3.5$ in sales, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = 22 + 3.5 \\times 12 = 64",
          "explanation": "Part (c): at $x = 12$ the model predicts about $64$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "2 \\le 12 \\le 15",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = 22 + 3.5 \\times 20 = 92",
          "explanation": "At $x = 20$ the model gives about $92$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "20 \\notin [2, 15]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 22 + 3.5x$; gradient means each extra $\\pounds00$ of advertising spend changes sales by $3.5$; $x=12\\Rightarrow y\\approx64$ (reliable); $x=20\\Rightarrow y\\approx92$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "An outdoor lido records the daily sunshine $x$ (in hours) and the attendance $y$ on $10$ occasions, with sunshine ranging from $0$ to $12$. The data give $\\Sigma x = 60$, $\\Sigma y = 3300$, $\\Sigma xy = 20700$ and $\\Sigma x^2 = 380$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict attendance when $x = 9$ and when $x = 16$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 80.0
        },
        {
          "x": 1.33,
          "y": 116.2
        },
        {
          "x": 2.67,
          "y": 148.7
        },
        {
          "x": 4.0,
          "y": 230.8
        },
        {
          "x": 5.33,
          "y": 281.9
        },
        {
          "x": 6.67,
          "y": 343.0
        },
        {
          "x": 8.0,
          "y": 446.1
        },
        {
          "x": 9.33,
          "y": 469.7
        },
        {
          "x": 10.67,
          "y": 550.2
        },
        {
          "x": 12.0,
          "y": 591.7
        }
      ],
      "xAxisLabel": "sunshine (hours)",
      "yAxisLabel": "attendance",
      "caption": "Attendance against sunshine.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 60,
        "b": 45
      },
      "predict": {
        "x": 9,
        "y": 465
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 380 - \\dfrac{60^2}{10} = 20",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 20700 - \\dfrac{60\\times3300}{10} = 900",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{900}{20} = 45",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 6, \\quad \\bar{y} = 330",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 330 - (45)(6) = 60",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 60 + 45x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 45",
          "explanation": "Part (b): each extra $\\text{hour}$ of sunshine is associated with a change of about $45$ in attendance, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = 60 + 45 \\times 9 = 465",
          "explanation": "Part (c): at $x = 9$ the model predicts about $465$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "0 \\le 9 \\le 12",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = 60 + 45 \\times 16 = 780",
          "explanation": "At $x = 16$ the model gives about $780$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "16 \\notin [0, 12]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 60 + 45x$; gradient means each extra $\\text{hour}$ of sunshine changes attendance by $45$; $x=9\\Rightarrow y\\approx465$ (reliable); $x=16\\Rightarrow y\\approx780$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "A biologist records the air temperature $x$ (in $\\degree\\text{C}$) and the cricket chirp rate $y$ (chirps per minute) on $10$ occasions, with temperature ranging from $10$ to $32$. The data give $\\Sigma x = 200$, $\\Sigma y = 1000$, $\\Sigma xy = 20140$ and $\\Sigma x^2 = 4020$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict chirp rate when $x = 28$ and when $x = 40$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 10.0,
          "y": 28.9
        },
        {
          "x": 12.44,
          "y": 38.4
        },
        {
          "x": 14.89,
          "y": 65.7
        },
        {
          "x": 17.33,
          "y": 87.2
        },
        {
          "x": 19.78,
          "y": 98.5
        },
        {
          "x": 22.22,
          "y": 125.1
        },
        {
          "x": 24.67,
          "y": 134.5
        },
        {
          "x": 27.11,
          "y": 141.5
        },
        {
          "x": 29.56,
          "y": 167.1
        },
        {
          "x": 32.0,
          "y": 183.7
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "chirps/min",
      "caption": "Chirp rate against temperature.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": -40,
        "b": 7
      },
      "predict": {
        "x": 28,
        "y": 156
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 4020 - \\dfrac{200^2}{10} = 20",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 20140 - \\dfrac{200\\times1000}{10} = 140",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{140}{20} = 7",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 20, \\quad \\bar{y} = 100",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 100 - (7)(20) = -40",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = -40 + 7x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 7",
          "explanation": "Part (b): each extra $\\degree\\text{C}$ of temperature is associated with a change of about $7$ in chirp rate, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = -40 + 7 \\times 28 = 156",
          "explanation": "Part (c): at $x = 28$ the model predicts about $156$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "10 \\le 28 \\le 32",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = -40 + 7 \\times 40 = 240",
          "explanation": "At $x = 40$ the model gives about $240$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "40 \\notin [10, 32]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -40 + 7x$; gradient means each extra $\\degree\\text{C}$ of temperature changes chirp rate by $7$; $x=28\\Rightarrow y\\approx156$ (reliable); $x=40\\Rightarrow y\\approx240$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "A bakery records the number of loaves baked $x$ and the profit $y$ (in $\\pounds$) on $10$ occasions, with loaves baked ranging from $40$ to $120$. The data give $\\Sigma x = 800$, $\\Sigma y = 660$, $\\Sigma xy = 54000$ and $\\Sigma x^2 = 65000$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict profit when $x = 90$ and when $x = 140$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 40.0,
          "y": 22.8
        },
        {
          "x": 48.89,
          "y": 28.1
        },
        {
          "x": 57.78,
          "y": 36.4
        },
        {
          "x": 66.67,
          "y": 48.0
        },
        {
          "x": 75.56,
          "y": 66.9
        },
        {
          "x": 84.44,
          "y": 73.8
        },
        {
          "x": 93.33,
          "y": 83.3
        },
        {
          "x": 102.22,
          "y": 86.8
        },
        {
          "x": 111.11,
          "y": 102.8
        },
        {
          "x": 120.0,
          "y": 112.9
        }
      ],
      "xAxisLabel": "loaves",
      "yAxisLabel": "profit (\\pounds)",
      "caption": "Profit against loaves baked.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": -30.0,
        "b": 1.2
      },
      "predict": {
        "x": 90,
        "y": 78.0
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 65000 - \\dfrac{800^2}{10} = 1000",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 54000 - \\dfrac{800\\times660}{10} = 1200",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{1200}{1000} = 1.2",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 80, \\quad \\bar{y} = 66",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 66 - (1.2)(80) = -30",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = -30 + 1.2x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.2",
          "explanation": "Part (b): each extra $\\text{loaf}$ of loaves baked is associated with a change of about $1.2$ in profit, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = -30 + 1.2 \\times 90 = 78",
          "explanation": "Part (c): at $x = 90$ the model predicts about $78$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "40 \\le 90 \\le 120",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = -30 + 1.2 \\times 140 = 138",
          "explanation": "At $x = 140$ the model gives about $138$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "140 \\notin [40, 120]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -30 + 1.2x$; gradient means each extra $\\text{loaf}$ of loaves baked changes profit by $1.2$; $x=90\\Rightarrow y\\approx78$ (reliable); $x=140\\Rightarrow y\\approx138$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "A coach records the weekly training distance $x$ (in km) and the $5$ km race time $y$ (in minutes) on $8$ occasions, with training distance ranging from $20$ to $60$. The data give $\\Sigma x = 320$, $\\Sigma y = 192$, $\\Sigma xy = 7630$ and $\\Sigma x^2 = 13000$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict race time when $x = 50$ and when $x = 80$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 20.0,
          "y": 28.1
        },
        {
          "x": 24.44,
          "y": 27.6
        },
        {
          "x": 28.89,
          "y": 27.3
        },
        {
          "x": 33.33,
          "y": 25.9
        },
        {
          "x": 37.78,
          "y": 24.3
        },
        {
          "x": 42.22,
          "y": 22.6
        },
        {
          "x": 46.67,
          "y": 22.5
        },
        {
          "x": 51.11,
          "y": 21.0
        },
        {
          "x": 55.56,
          "y": 20.5
        },
        {
          "x": 60.0,
          "y": 19.6
        }
      ],
      "xAxisLabel": "training (km)",
      "yAxisLabel": "race time (min)",
      "caption": "Race time against training distance.",
      "alt": "Scatter of ten points falling from upper left to lower right with the least-squares line drawn through them.",
      "line": {
        "a": 34.0,
        "b": -0.25
      },
      "predict": {
        "x": 50,
        "y": 21.5
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 13000 - \\dfrac{320^2}{8} = 200",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 7630 - \\dfrac{320\\times192}{8} = -50",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{-50}{200} = -0.25",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 40, \\quad \\bar{y} = 24",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 24 - (-0.25)(40) = 34",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 34 - 0.25x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = -0.25",
          "explanation": "Part (b): each extra $\\text{km}$ of training distance is associated with a change of about $-0.25$ in race time, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = 34 - 0.25 \\times 50 = 21.5",
          "explanation": "Part (c): at $x = 50$ the model predicts about $21.5$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "20 \\le 50 \\le 60",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = 34 - 0.25 \\times 80 = 14",
          "explanation": "At $x = 80$ the model gives about $14$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "80 \\notin [20, 60]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 34 - 0.25x$; gradient means each extra $\\text{km}$ of training distance changes race time by $-0.25$; $x=50\\Rightarrow y\\approx21.5$ (reliable); $x=80\\Rightarrow y\\approx14$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "reliability"
    ],
    "questionText": "A diver records the depth $x$ (in m) and the water pressure $y$ (in kPa) on $8$ occasions, with depth ranging from $0$ to $40$. The data give $\\Sigma x = 160$, $\\Sigma y = 2408$, $\\Sigma xy = 48660$ and $\\Sigma x^2 = 3250$. (a) Find the least-squares regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict pressure when $x = 30$ and when $x = 50$, commenting on the reliability of each.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 0.0,
          "y": 93.7
        },
        {
          "x": 4.44,
          "y": 144.2
        },
        {
          "x": 8.89,
          "y": 194.5
        },
        {
          "x": 13.33,
          "y": 238.4
        },
        {
          "x": 17.78,
          "y": 255.5
        },
        {
          "x": 22.22,
          "y": 327.2
        },
        {
          "x": 26.67,
          "y": 355.2
        },
        {
          "x": 31.11,
          "y": 423.6
        },
        {
          "x": 35.56,
          "y": 480.6
        },
        {
          "x": 40.0,
          "y": 513.6
        }
      ],
      "xAxisLabel": "depth (m)",
      "yAxisLabel": "pressure (kPa)",
      "caption": "Water pressure against depth.",
      "alt": "Scatter of ten points rising from lower left to upper right with the least-squares line drawn through them.",
      "line": {
        "a": 101,
        "b": 10
      },
      "predict": {
        "x": 30,
        "y": 401
      }
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "y = a + bx",
          "explanation": "We will convert the raw totals into $S_{xx}$ and $S_{xy}$, find $b$ and $a$, then use the line for interpretation and prediction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the $S_{xx}$ formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures the spread of the $x$-values about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xx}$",
          "workingLatex": "S_{xx} = 3250 - \\dfrac{160^2}{8} = 50",
          "explanation": "Substituting the totals gives the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the $S_{xy}$ formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 48660 - \\dfrac{160\\times2408}{8} = 500",
          "explanation": "Substituting the totals gives the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the gradient",
          "workingLatex": "b = \\dfrac{500}{50} = 10",
          "explanation": "This is the slope of the best-fit line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = 20, \\quad \\bar{y} = 301",
          "explanation": "The line passes through the mean point, needed for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 301 - (10)(20) = 101",
          "explanation": "Rearranging at the mean point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 101 + 10x",
          "explanation": "This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 10",
          "explanation": "Part (b): each extra $\\text{m}$ of depth is associated with a change of about $10$ in pressure, on average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at the in-range value",
          "workingLatex": "y = 101 + 10 \\times 30 = 401",
          "explanation": "Part (c): at $x = 30$ the model predicts about $401$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Judge the first prediction",
          "workingLatex": "0 \\le 30 \\le 40",
          "explanation": "This value is inside the data range, so it is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Predict at the out-of-range value",
          "workingLatex": "y = 101 + 10 \\times 50 = 601",
          "explanation": "At $x = 50$ the model gives about $601$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Judge the second prediction",
          "workingLatex": "50 \\notin [0, 40]",
          "explanation": "This value is outside the data range, so it is extrapolation and the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 101 + 10x$; gradient means each extra $\\text{m}$ of depth changes pressure by $10$; $x=30\\Rightarrow y\\approx401$ (reliable); $x=50\\Rightarrow y\\approx601$ (unreliable, extrapolation)."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "coding",
      "decode",
      "loaf"
    ],
    "questionText": "A bakery studies the number of loaves baked $x$ and the profit $y$ (in $\\pounds$). To simplify the arithmetic the data are coded using $p = \\dfrac{x - 80}{10}$ and $q = y - 100$. The least-squares regression line of $q$ on $p$ is found to be $q = 2 + 12p$. (a) Find the regression line of $y$ on $x$. (b) Use it to estimate profit when $x = 100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the coded line",
          "workingLatex": "q = 2 + 12p",
          "explanation": "We start from the line fitted to the coded variables, then translate it back into the original ones.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the coding for x",
          "workingLatex": "p = \\dfrac{x - 80}{10}",
          "explanation": "This tells us how $p$ was built from $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the coding for y",
          "workingLatex": "q = y - 100",
          "explanation": "And this tells us how $q$ was built from $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both codings",
          "workingLatex": "\\dfrac{y - 100}{1} = 2 + 12\\left(\\dfrac{x - 80}{10}\\right)",
          "explanation": "Replace $p$ and $q$ by their definitions so the whole equation is in terms of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction in q",
          "workingLatex": "y - 100 = 2 + 12(x - 80)",
          "explanation": "Multiply through by the $y$-scale so $y$ appears on its own on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y = 100 + 2 + 12(x - 80)",
          "explanation": "Distribute and collect the constant terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the gradient",
          "workingLatex": "b = \\dfrac{1 \\times 12}{10} = 1.2",
          "explanation": "The coefficient of $x$, after dividing by the $x$-scale, is the gradient in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the intercept",
          "workingLatex": "a = 100 + 2 - 1.2\\times80 = 6",
          "explanation": "Collecting every constant term (including the $-b\\,x_0$ from the bracket) gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the decoded line",
          "workingLatex": "y = 6 + 1.2x",
          "explanation": "This is part (a): the regression line in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the mean idea",
          "workingLatex": "\\text{units restored}",
          "explanation": "The coding only rescaled and shifted the axes, so decoding simply restores the original units without changing the fit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the prediction",
          "workingLatex": "x = 100",
          "explanation": "For part (b) we substitute the required $x$ into the decoded line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "y = 6 + 1.2 \\times 100",
          "explanation": "Replace $x$ with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "y = 126",
          "explanation": "So the model predicts profit of about $126$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "y = 6 + 1.2x",
          "explanation": "The decoded line is $y = 6 + 1.2x$, giving $y \\approx 126$ when $x = 100$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 6 + 1.2x$; when $x = 100$, $y \\approx 126$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "coding",
      "decode",
      "depth"
    ],
    "questionText": "A diver studies the depth $x$ (in m) and the water pressure $y$ (in kPa). To simplify the arithmetic the data are coded using $p = \\dfrac{x - 20}{5}$ and $q = y - 300$. The least-squares regression line of $q$ on $p$ is found to be $q = 1 + 50p$. (a) Find the regression line of $y$ on $x$. (b) Use it to estimate pressure when $x = 30$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the coded line",
          "workingLatex": "q = 1 + 50p",
          "explanation": "We start from the line fitted to the coded variables, then translate it back into the original ones.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the coding for x",
          "workingLatex": "p = \\dfrac{x - 20}{5}",
          "explanation": "This tells us how $p$ was built from $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the coding for y",
          "workingLatex": "q = y - 300",
          "explanation": "And this tells us how $q$ was built from $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both codings",
          "workingLatex": "\\dfrac{y - 300}{1} = 1 + 50\\left(\\dfrac{x - 20}{5}\\right)",
          "explanation": "Replace $p$ and $q$ by their definitions so the whole equation is in terms of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction in q",
          "workingLatex": "y - 300 = 1 + 50(x - 20)",
          "explanation": "Multiply through by the $y$-scale so $y$ appears on its own on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y = 300 + 1 + 50(x - 20)",
          "explanation": "Distribute and collect the constant terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the gradient",
          "workingLatex": "b = \\dfrac{1 \\times 50}{5} = 10",
          "explanation": "The coefficient of $x$, after dividing by the $x$-scale, is the gradient in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the intercept",
          "workingLatex": "a = 300 + 1 - 10\\times20 = 101",
          "explanation": "Collecting every constant term (including the $-b\\,x_0$ from the bracket) gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the decoded line",
          "workingLatex": "y = 101 + 10x",
          "explanation": "This is part (a): the regression line in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the mean idea",
          "workingLatex": "\\text{units restored}",
          "explanation": "The coding only rescaled and shifted the axes, so decoding simply restores the original units without changing the fit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the prediction",
          "workingLatex": "x = 30",
          "explanation": "For part (b) we substitute the required $x$ into the decoded line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "y = 101 + 10 \\times 30",
          "explanation": "Replace $x$ with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "y = 401",
          "explanation": "So the model predicts pressure of about $401$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "y = 101 + 10x",
          "explanation": "The decoded line is $y = 101 + 10x$, giving $y \\approx 401$ when $x = 30$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 101 + 10x$; when $x = 30$, $y \\approx 401$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "coding",
      "decode",
      "temp"
    ],
    "questionText": "A biologist studies the air temperature $x$ (in $\\degree\\text{C}$) and the cricket chirp rate $y$ (chirps per minute). To simplify the arithmetic the data are coded using $p = \\dfrac{x - 20}{2}$ and $q = y - 100$. The least-squares regression line of $q$ on $p$ is found to be $q = 0 + 14p$. (a) Find the regression line of $y$ on $x$. (b) Use it to estimate chirp rate when $x = 28$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the coded line",
          "workingLatex": "q = 0 + 14p",
          "explanation": "We start from the line fitted to the coded variables, then translate it back into the original ones.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the coding for x",
          "workingLatex": "p = \\dfrac{x - 20}{2}",
          "explanation": "This tells us how $p$ was built from $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the coding for y",
          "workingLatex": "q = y - 100",
          "explanation": "And this tells us how $q$ was built from $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both codings",
          "workingLatex": "\\dfrac{y - 100}{1} = 0 + 14\\left(\\dfrac{x - 20}{2}\\right)",
          "explanation": "Replace $p$ and $q$ by their definitions so the whole equation is in terms of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction in q",
          "workingLatex": "y - 100 = 0 + 14(x - 20)",
          "explanation": "Multiply through by the $y$-scale so $y$ appears on its own on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y = 100 + 0 + 14(x - 20)",
          "explanation": "Distribute and collect the constant terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the gradient",
          "workingLatex": "b = \\dfrac{1 \\times 14}{2} = 7",
          "explanation": "The coefficient of $x$, after dividing by the $x$-scale, is the gradient in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the intercept",
          "workingLatex": "a = 100 + 0 - 7\\times20 = -40",
          "explanation": "Collecting every constant term (including the $-b\\,x_0$ from the bracket) gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the decoded line",
          "workingLatex": "y = -40 + 7x",
          "explanation": "This is part (a): the regression line in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the mean idea",
          "workingLatex": "\\text{units restored}",
          "explanation": "The coding only rescaled and shifted the axes, so decoding simply restores the original units without changing the fit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the prediction",
          "workingLatex": "x = 28",
          "explanation": "For part (b) we substitute the required $x$ into the decoded line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "y = -40 + 7 \\times 28",
          "explanation": "Replace $x$ with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "y = 156",
          "explanation": "So the model predicts chirp rate of about $156$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "y = -40 + 7x",
          "explanation": "The decoded line is $y = -40 + 7x$, giving $y \\approx 156$ when $x = 28$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -40 + 7x$; when $x = 28$, $y \\approx 156$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "coding",
      "decode",
      "ad"
    ],
    "questionText": "A company studies the weekly advertising spend $x$ (in $\\pounds00$) and the weekly sales $y$ (in $\\pounds000$). To simplify the arithmetic the data are coded using $p = x - 8$ and $q = y - 50$. The least-squares regression line of $q$ on $p$ is found to be $q = 0 + 3.5p$. (a) Find the regression line of $y$ on $x$. (b) Use it to estimate sales when $x = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the coded line",
          "workingLatex": "q = 0 + 3.5p",
          "explanation": "We start from the line fitted to the coded variables, then translate it back into the original ones.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the coding for x",
          "workingLatex": "p = x - 8",
          "explanation": "This tells us how $p$ was built from $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the coding for y",
          "workingLatex": "q = y - 50",
          "explanation": "And this tells us how $q$ was built from $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both codings",
          "workingLatex": "y - 50 = 0 + 3.5(x - 8)",
          "explanation": "Replace $p$ and $q$ by their definitions so the whole equation is in terms of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction in q",
          "workingLatex": "y - 50 = 0 + 3.5(x - 8)",
          "explanation": "Multiply through by the $y$-scale so $y$ appears on its own on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y = 50 + 0 + 3.5(x - 8)",
          "explanation": "Distribute and collect the constant terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the gradient",
          "workingLatex": "b = \\dfrac{1 \\times 3.5}{1} = 3.5",
          "explanation": "The coefficient of $x$, after dividing by the $x$-scale, is the gradient in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the intercept",
          "workingLatex": "a = 50 + 0 - 3.5\\times8 = 22",
          "explanation": "Collecting every constant term (including the $-b\\,x_0$ from the bracket) gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the decoded line",
          "workingLatex": "y = 22 + 3.5x",
          "explanation": "This is part (a): the regression line in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the mean idea",
          "workingLatex": "\\text{units restored}",
          "explanation": "The coding only rescaled and shifted the axes, so decoding simply restores the original units without changing the fit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the prediction",
          "workingLatex": "x = 12",
          "explanation": "For part (b) we substitute the required $x$ into the decoded line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "y = 22 + 3.5 \\times 12",
          "explanation": "Replace $x$ with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "y = 64",
          "explanation": "So the model predicts sales of about $64$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "y = 22 + 3.5x",
          "explanation": "The decoded line is $y = 22 + 3.5x$, giving $y \\approx 64$ when $x = 12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 22 + 3.5x$; when $x = 12$, $y \\approx 64$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "coding",
      "decode",
      "arm"
    ],
    "questionText": "A researcher studies the arm span $x$ (in cm) and the height $y$ (in cm). To simplify the arithmetic the data are coded using $p = \\dfrac{x - 170}{5}$ and $q = y - 170$. The least-squares regression line of $q$ on $p$ is found to be $q = 2 + 4p$. (a) Find the regression line of $y$ on $x$. (b) Use it to estimate height when $x = 180$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the coded line",
          "workingLatex": "q = 2 + 4p",
          "explanation": "We start from the line fitted to the coded variables, then translate it back into the original ones.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the coding for x",
          "workingLatex": "p = \\dfrac{x - 170}{5}",
          "explanation": "This tells us how $p$ was built from $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the coding for y",
          "workingLatex": "q = y - 170",
          "explanation": "And this tells us how $q$ was built from $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both codings",
          "workingLatex": "\\dfrac{y - 170}{1} = 2 + 4\\left(\\dfrac{x - 170}{5}\\right)",
          "explanation": "Replace $p$ and $q$ by their definitions so the whole equation is in terms of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction in q",
          "workingLatex": "y - 170 = 2 + 4(x - 170)",
          "explanation": "Multiply through by the $y$-scale so $y$ appears on its own on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y = 170 + 2 + 4(x - 170)",
          "explanation": "Distribute and collect the constant terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the gradient",
          "workingLatex": "b = \\dfrac{1 \\times 4}{5} = 0.8",
          "explanation": "The coefficient of $x$, after dividing by the $x$-scale, is the gradient in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the intercept",
          "workingLatex": "a = 170 + 2 - 0.8\\times170 = 36",
          "explanation": "Collecting every constant term (including the $-b\\,x_0$ from the bracket) gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the decoded line",
          "workingLatex": "y = 36 + 0.8x",
          "explanation": "This is part (a): the regression line in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the mean idea",
          "workingLatex": "\\text{units restored}",
          "explanation": "The coding only rescaled and shifted the axes, so decoding simply restores the original units without changing the fit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the prediction",
          "workingLatex": "x = 180",
          "explanation": "For part (b) we substitute the required $x$ into the decoded line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "y = 36 + 0.8 \\times 180",
          "explanation": "Replace $x$ with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "y = 180",
          "explanation": "So the model predicts height of about $180$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "y = 36 + 0.8x",
          "explanation": "The decoded line is $y = 36 + 0.8x$, giving $y \\approx 180$ when $x = 180$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 36 + 0.8x$; when $x = 180$, $y \\approx 180$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "coding",
      "decode",
      "rev"
    ],
    "questionText": "A teacher studies the number of hours of revision $x$ and the test mark $y$ (as a percentage). To simplify the arithmetic the data are coded using $p = x - 5$ and $q = y - 50$. The least-squares regression line of $q$ on $p$ is found to be $q = 2 + 6p$. (a) Find the regression line of $y$ on $x$. (b) Use it to estimate test mark when $x = 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the coded line",
          "workingLatex": "q = 2 + 6p",
          "explanation": "We start from the line fitted to the coded variables, then translate it back into the original ones.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the coding for x",
          "workingLatex": "p = x - 5",
          "explanation": "This tells us how $p$ was built from $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the coding for y",
          "workingLatex": "q = y - 50",
          "explanation": "And this tells us how $q$ was built from $y$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both codings",
          "workingLatex": "y - 50 = 2 + 6(x - 5)",
          "explanation": "Replace $p$ and $q$ by their definitions so the whole equation is in terms of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction in q",
          "workingLatex": "y - 50 = 2 + 6(x - 5)",
          "explanation": "Multiply through by the $y$-scale so $y$ appears on its own on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y = 50 + 2 + 6(x - 5)",
          "explanation": "Distribute and collect the constant terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the gradient",
          "workingLatex": "b = \\dfrac{1 \\times 6}{1} = 6",
          "explanation": "The coefficient of $x$, after dividing by the $x$-scale, is the gradient in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the intercept",
          "workingLatex": "a = 50 + 2 - 6\\times5 = 22",
          "explanation": "Collecting every constant term (including the $-b\\,x_0$ from the bracket) gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the decoded line",
          "workingLatex": "y = 22 + 6x",
          "explanation": "This is part (a): the regression line in the original variables.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the mean idea",
          "workingLatex": "\\text{units restored}",
          "explanation": "The coding only rescaled and shifted the axes, so decoding simply restores the original units without changing the fit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the prediction",
          "workingLatex": "x = 8",
          "explanation": "For part (b) we substitute the required $x$ into the decoded line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "y = 22 + 6 \\times 8",
          "explanation": "Replace $x$ with the given value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "y = 70",
          "explanation": "So the model predicts test mark of about $70$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "y = 22 + 6x",
          "explanation": "The decoded line is $y = 22 + 6x$, giving $y \\approx 70$ when $x = 8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 22 + 6x$; when $x = 8$, $y \\approx 70$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "reverse",
      "summary-statistics",
      "temp"
    ],
    "questionText": "A seaside cafe records the daily maximum temperature $x$ (in $\\degree\\text{C}$) and the number of cold drinks sold $y$ on $8$ occasions, giving $\\Sigma x = 160$ and $\\Sigma y = 280$. The least-squares regression line of $y$ on $x$ is $y = 19 + 0.8x$ and $S_{xx} = 250$. Find (a) $S_{xy}$, (b) $\\Sigma xy$, and (c) $\\Sigma x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient links $S_{xy}$ and $S_{xx}$, so we can rearrange it to find $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $S_{xy}$",
          "workingLatex": "S_{xy} = b\\,S_{xx}",
          "explanation": "Multiplying both sides by $S_{xx}$ isolates the quantity we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 0.8 \\times 250 = 200",
          "explanation": "That answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{160}{8} = 20, \\quad \\bar{y} = \\dfrac{280}{8} = 35",
          "explanation": "We divide each total by $n$; the means are needed for the checks below.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check consistency with the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 35 - (0.8)(20) = 19",
          "explanation": "This matches the intercept in the given line, confirming our values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the $S_{xy}$ definition",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "To get the raw total $\\Sigma xy$ we invert the formula that produced $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for $\\Sigma xy$",
          "workingLatex": "\\Sigma xy = S_{xy} + \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "Add the mean-correction term back on.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute",
          "workingLatex": "\\Sigma xy = 200 + \\dfrac{160 \\times 280}{8}",
          "explanation": "Put in the known totals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate $\\Sigma xy$",
          "workingLatex": "\\Sigma xy = 200 + 5600 = 5800",
          "explanation": "That answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the $S_{xx}$ definition",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "The same idea recovers $\\Sigma x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange for $\\Sigma x^2$",
          "workingLatex": "\\Sigma x^2 = S_{xx} + \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "Add the mean-correction term back on.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "\\Sigma x^2 = 250 + \\dfrac{160^2}{8}",
          "explanation": "Put in the known values.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate $\\Sigma x^2$",
          "workingLatex": "\\Sigma x^2 = 250 + 3200 = 3450",
          "explanation": "That answers part (c).",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{xy} = 200$, $\\Sigma xy = 5800$, $\\Sigma x^2 = 3450$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "reverse",
      "summary-statistics",
      "exp"
    ],
    "questionText": "A firm records the years of experience $x$ and the annual salary $y$ (in $\\pounds000$) on $10$ occasions, giving $\\Sigma x = 60$ and $\\Sigma y = 350$. The least-squares regression line of $y$ on $x$ is $y = 32 + 0.5x$ and $S_{xx} = 100$. Find (a) $S_{xy}$, (b) $\\Sigma xy$, and (c) $\\Sigma x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient links $S_{xy}$ and $S_{xx}$, so we can rearrange it to find $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $S_{xy}$",
          "workingLatex": "S_{xy} = b\\,S_{xx}",
          "explanation": "Multiplying both sides by $S_{xx}$ isolates the quantity we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 0.5 \\times 100 = 50",
          "explanation": "That answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{60}{10} = 6, \\quad \\bar{y} = \\dfrac{350}{10} = 35",
          "explanation": "We divide each total by $n$; the means are needed for the checks below.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check consistency with the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 35 - (0.5)(6) = 32",
          "explanation": "This matches the intercept in the given line, confirming our values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the $S_{xy}$ definition",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "To get the raw total $\\Sigma xy$ we invert the formula that produced $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for $\\Sigma xy$",
          "workingLatex": "\\Sigma xy = S_{xy} + \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "Add the mean-correction term back on.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute",
          "workingLatex": "\\Sigma xy = 50 + \\dfrac{60 \\times 350}{10}",
          "explanation": "Put in the known totals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate $\\Sigma xy$",
          "workingLatex": "\\Sigma xy = 50 + 2100 = 2150",
          "explanation": "That answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the $S_{xx}$ definition",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "The same idea recovers $\\Sigma x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange for $\\Sigma x^2$",
          "workingLatex": "\\Sigma x^2 = S_{xx} + \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "Add the mean-correction term back on.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "\\Sigma x^2 = 100 + \\dfrac{60^2}{10}",
          "explanation": "Put in the known values.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate $\\Sigma x^2$",
          "workingLatex": "\\Sigma x^2 = 100 + 360 = 460",
          "explanation": "That answers part (c).",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{xy} = 50$, $\\Sigma xy = 2150$, $\\Sigma x^2 = 460$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "reverse",
      "summary-statistics",
      "dist"
    ],
    "questionText": "An estate agent records the distance from the city centre $x$ (in km) and the house price $y$ (in $\\pounds000$) on $9$ occasions, giving $\\Sigma x = 45$ and $\\Sigma y = 2700$. The least-squares regression line of $y$ on $x$ is $y = 500 - 40x$ and $S_{xx} = 90$. Find (a) $S_{xy}$, (b) $\\Sigma xy$, and (c) $\\Sigma x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient links $S_{xy}$ and $S_{xx}$, so we can rearrange it to find $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $S_{xy}$",
          "workingLatex": "S_{xy} = b\\,S_{xx}",
          "explanation": "Multiplying both sides by $S_{xx}$ isolates the quantity we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = -40 \\times 90 = -3600",
          "explanation": "That answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{45}{9} = 5, \\quad \\bar{y} = \\dfrac{2700}{9} = 300",
          "explanation": "We divide each total by $n$; the means are needed for the checks below.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check consistency with the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 300 - (-40)(5) = 500",
          "explanation": "This matches the intercept in the given line, confirming our values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the $S_{xy}$ definition",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "To get the raw total $\\Sigma xy$ we invert the formula that produced $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for $\\Sigma xy$",
          "workingLatex": "\\Sigma xy = S_{xy} + \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "Add the mean-correction term back on.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute",
          "workingLatex": "\\Sigma xy = -3600 + \\dfrac{45 \\times 2700}{9}",
          "explanation": "Put in the known totals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate $\\Sigma xy$",
          "workingLatex": "\\Sigma xy = -3600 + 13500 = 9900",
          "explanation": "That answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the $S_{xx}$ definition",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "The same idea recovers $\\Sigma x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange for $\\Sigma x^2$",
          "workingLatex": "\\Sigma x^2 = S_{xx} + \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "Add the mean-correction term back on.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "\\Sigma x^2 = 90 + \\dfrac{45^2}{9}",
          "explanation": "Put in the known values.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate $\\Sigma x^2$",
          "workingLatex": "\\Sigma x^2 = 90 + 225 = 315",
          "explanation": "That answers part (c).",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{xy} = -3600$, $\\Sigma xy = 9900$, $\\Sigma x^2 = 315$."
    }
  },
  {
    "id": "al.y1.stats.linear-regression.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Linear regression",
    "subtopicId": "al.y1.stats.linear-regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "reverse",
      "summary-statistics",
      "prac"
    ],
    "questionText": "An examiner records the number of practice papers completed $x$ and the final score $y$ (out of $80$) on $7$ occasions, giving $\\Sigma x = 28$ and $\\Sigma y = 406$. The least-squares regression line of $y$ on $x$ is $y = 55.6 + 0.6x$ and $S_{xx} = 140$. Find (a) $S_{xy}$, (b) $\\Sigma xy$, and (c) $\\Sigma x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient links $S_{xy}$ and $S_{xx}$, so we can rearrange it to find $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $S_{xy}$",
          "workingLatex": "S_{xy} = b\\,S_{xx}",
          "explanation": "Multiplying both sides by $S_{xx}$ isolates the quantity we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $S_{xy}$",
          "workingLatex": "S_{xy} = 0.6 \\times 140 = 84",
          "explanation": "That answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{28}{7} = 4, \\quad \\bar{y} = \\dfrac{406}{7} = 58",
          "explanation": "We divide each total by $n$; the means are needed for the checks below.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check consistency with the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 58 - (0.6)(4) = 55.6",
          "explanation": "This matches the intercept in the given line, confirming our values are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the $S_{xy}$ definition",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "To get the raw total $\\Sigma xy$ we invert the formula that produced $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for $\\Sigma xy$",
          "workingLatex": "\\Sigma xy = S_{xy} + \\dfrac{\\Sigma x\\,\\Sigma y}{n}",
          "explanation": "Add the mean-correction term back on.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute",
          "workingLatex": "\\Sigma xy = 84 + \\dfrac{28 \\times 406}{7}",
          "explanation": "Put in the known totals.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate $\\Sigma xy$",
          "workingLatex": "\\Sigma xy = 84 + 1624 = 1708",
          "explanation": "That answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the $S_{xx}$ definition",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "The same idea recovers $\\Sigma x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange for $\\Sigma x^2$",
          "workingLatex": "\\Sigma x^2 = S_{xx} + \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "Add the mean-correction term back on.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "\\Sigma x^2 = 140 + \\dfrac{28^2}{7}",
          "explanation": "Put in the known values.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate $\\Sigma x^2$",
          "workingLatex": "\\Sigma x^2 = 140 + 112 = 252",
          "explanation": "That answers part (c).",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{xy} = 84$, $\\Sigma xy = 1708$, $\\Sigma x^2 = 252$."
    }
  }
];
