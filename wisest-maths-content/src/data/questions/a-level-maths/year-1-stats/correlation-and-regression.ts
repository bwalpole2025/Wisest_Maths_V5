import type { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 1 Statistics · Correlation and regression
 * Scatter diagrams, the least-squares regression line, prediction and the
 * interpolation/extrapolation reliability distinction, coding, and the
 * correlation-is-not-causation caveat. 70 questions with full worked solutions.
 */
export const questions: Question[] = [
  {
    "id": "al.y1.stats.regression.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "scatter",
      "correlation",
      "describe",
      "positive"
    ],
    "questionText": "A cafe records the daily maximum temperature $x$ (in $\\degree\\text{C}$) and its cold-drink sales $y$ (in $\\pounds$) on $10$ days. The scatter diagram is shown. Describe the type and strength of the correlation between temperature and cold-drink sales.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 15,
          "y": 42
        },
        {
          "x": 17,
          "y": 48
        },
        {
          "x": 18,
          "y": 51
        },
        {
          "x": 20,
          "y": 55
        },
        {
          "x": 22,
          "y": 62
        },
        {
          "x": 24,
          "y": 66
        },
        {
          "x": 26,
          "y": 71
        },
        {
          "x": 28,
          "y": 78
        },
        {
          "x": 30,
          "y": 82
        },
        {
          "x": 32,
          "y": 88
        }
      ],
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold-drink sales (\\pounds)",
      "caption": "Daily temperature and cold-drink sales",
      "alt": "Scatter diagram: points rise steadily from lower-left to upper-right and lie close to a straight line."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the overall direction of the points.",
          "workingLatex": "\\text{points rise from lower-left to upper-right}",
          "explanation": "The first thing to read from any scatter diagram is its slope: as you move to the right, do the points tend to go up or down? Here they climb steadily, which is the signature of positive correlation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the type of correlation.",
          "workingLatex": "x \\uparrow \\;\\Rightarrow\\; y \\uparrow \\;\\Rightarrow\\; \\text{positive}",
          "explanation": "Higher temperatures go with higher sales, so the two quantities move in the same direction. Moving together like this is exactly what 'positive correlation' means.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Judge how tightly the points cluster.",
          "workingLatex": "\\text{points lie close to a single straight line}",
          "explanation": "Direction tells you the type; how tightly the points hug a straight line tells you the strength. Tightly packed points mean the relationship is strong.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide the strength.",
          "workingLatex": "\\text{little scatter} \\;\\Rightarrow\\; \\text{strong}",
          "explanation": "There is only a small amount of scatter about the upward trend, so knowing the temperature would let you predict sales quite accurately. That is what makes the correlation strong rather than weak.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the pattern in context.",
          "workingLatex": "\\text{hotter days} \\;\\rightarrow\\; \\text{more cold-drink sales}",
          "explanation": "Put plainly, warmer weather is associated with selling more cold drinks, which matches everyday experience and gives the numbers a sensible meaning.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the full description.",
          "workingLatex": "\\text{strong positive correlation}",
          "explanation": "A complete answer names both the direction (positive) and the tightness (strong), so combining them gives exactly what the question asks for.",
          "diagram": null
        }
      ],
      "finalAnswer": "The diagram shows strong positive correlation: as temperature $x$ increases, cold-drink sales $y$ increase, and the points lie close to a straight line."
    }
  },
  {
    "id": "al.y1.stats.regression.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "scatter",
      "correlation",
      "describe",
      "negative"
    ],
    "questionText": "A dealer plots the age $x$ (in years) of $11$ used cars against their resale value $y$ (in $\\pounds000$). The scatter diagram is shown. Describe the correlation between the age of a car and its resale value.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1,
          "y": 18
        },
        {
          "x": 2,
          "y": 16
        },
        {
          "x": 2,
          "y": 15
        },
        {
          "x": 3,
          "y": 13
        },
        {
          "x": 4,
          "y": 12
        },
        {
          "x": 5,
          "y": 10
        },
        {
          "x": 6,
          "y": 8.5
        },
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 8,
          "y": 6
        },
        {
          "x": 9,
          "y": 5
        },
        {
          "x": 10,
          "y": 4
        }
      ],
      "xAxisLabel": "age (years)",
      "yAxisLabel": "resale value (\\pounds000)",
      "caption": "Age against resale value for 11 cars",
      "alt": "Scatter diagram: points fall steadily from upper-left to lower-right and lie close to a straight line."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the overall direction of the points.",
          "workingLatex": "\\text{points fall from upper-left to lower-right}",
          "explanation": "Scanning the diagram from left to right, the points drop down as you go. A downward trend is the signature of negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the type of correlation.",
          "workingLatex": "x \\uparrow \\;\\Rightarrow\\; y \\downarrow \\;\\Rightarrow\\; \\text{negative}",
          "explanation": "As the age increases, the resale value decreases, so the two quantities move in opposite directions. Moving opposite ways like this is what 'negative correlation' means.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Judge how tightly the points cluster.",
          "workingLatex": "\\text{points lie close to a single straight line}",
          "explanation": "The strength is measured by how closely the points hug a straight line. These sit neatly along the downward trend with very little spread.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide the strength.",
          "workingLatex": "\\text{little scatter} \\;\\Rightarrow\\; \\text{strong}",
          "explanation": "Because the points cling tightly to the trend, the age of a car is a good predictor of its value, so the correlation is strong.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the pattern in context.",
          "workingLatex": "\\text{older cars} \\;\\rightarrow\\; \\text{lower value}",
          "explanation": "In everyday terms, older cars are worth less money, which is exactly what we would expect and confirms the pattern is realistic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the full description.",
          "workingLatex": "\\text{strong negative correlation}",
          "explanation": "Naming both the direction (negative) and the tightness (strong) gives the complete description the question is looking for.",
          "diagram": null
        }
      ],
      "finalAnswer": "The diagram shows strong negative correlation: as age $x$ increases, resale value $y$ decreases, with the points lying close to a straight line."
    }
  },
  {
    "id": "al.y1.stats.regression.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "scatter",
      "correlation",
      "describe",
      "no-correlation"
    ],
    "questionText": "For $10$ pupils, a teacher plots each pupil's shoe size $x$ against their score $y$ on a general-knowledge test (as a percentage). The scatter diagram is shown. Describe the correlation between shoe size and test score.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 4,
          "y": 72
        },
        {
          "x": 5,
          "y": 55
        },
        {
          "x": 6,
          "y": 81
        },
        {
          "x": 7,
          "y": 60
        },
        {
          "x": 8,
          "y": 68
        },
        {
          "x": 8,
          "y": 49
        },
        {
          "x": 9,
          "y": 77
        },
        {
          "x": 10,
          "y": 58
        },
        {
          "x": 11,
          "y": 70
        },
        {
          "x": 12,
          "y": 63
        }
      ],
      "xAxisLabel": "shoe size (UK)",
      "yAxisLabel": "test score (\\%)",
      "caption": "Shoe size against test score for 10 pupils",
      "alt": "Scatter diagram: points form a shapeless cloud with no rising or falling trend."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look for an overall direction in the points.",
          "workingLatex": "\\text{scan the cloud for a rising or falling trend}",
          "explanation": "To describe correlation you first hunt for a trend: do the points broadly climb or fall as you move right? If neither, that itself is the answer.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that the points do not follow a line.",
          "workingLatex": "\\text{points scattered high and low at every } x",
          "explanation": "At small shoe sizes there are both high and low scores, and the same is true at large shoe sizes. The height of a point does not depend on how far right it sits.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check that no straight line fits.",
          "workingLatex": "\\text{no straight line summarises the cloud}",
          "explanation": "Because the points form a shapeless blob rather than hugging any line, there is no clear direction to call positive or negative.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide the type of correlation.",
          "workingLatex": "\\text{no (or negligible) correlation}",
          "explanation": "When the points neither rise nor fall together, we say there is no correlation: knowing $x$ tells you essentially nothing about $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the result in context.",
          "workingLatex": "\\text{shoe size does not relate to test score}",
          "explanation": "This makes sense: the size of someone's feet has nothing to do with how much general knowledge they have, so no link is exactly what we should expect.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "\\text{no correlation}",
          "explanation": "The honest, complete answer is simply that there is no correlation between the two variables.",
          "diagram": null
        }
      ],
      "finalAnswer": "The diagram shows no (negligible) correlation: the points form a shapeless cloud with no trend, so shoe size $x$ and test score $y$ are not linearly related."
    }
  },
  {
    "id": "al.y1.stats.regression.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "scatter",
      "correlation",
      "explanatory-variable",
      "positive"
    ],
    "questionText": "On $10$ days a shop records the day's rainfall $x$ (in $\\text{mm}$) and the number of umbrellas sold $y$. The scatter diagram is shown. (a) State which variable is the explanatory (independent) variable. (b) Describe the type and strength of the correlation.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2,
          "y": 8
        },
        {
          "x": 4,
          "y": 14
        },
        {
          "x": 5,
          "y": 12
        },
        {
          "x": 7,
          "y": 20
        },
        {
          "x": 9,
          "y": 26
        },
        {
          "x": 11,
          "y": 30
        },
        {
          "x": 13,
          "y": 38
        },
        {
          "x": 15,
          "y": 41
        },
        {
          "x": 17,
          "y": 48
        },
        {
          "x": 19,
          "y": 52
        }
      ],
      "xAxisLabel": "rainfall (mm)",
      "yAxisLabel": "umbrellas sold",
      "caption": "Rainfall against umbrellas sold on 10 days",
      "alt": "Scatter diagram: points rise from lower-left to upper-right and lie close to a straight line."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which variable explains which.",
          "workingLatex": "\\text{rainfall could drive umbrella sales, not the reverse}",
          "explanation": "The explanatory variable is the one we think does the influencing. It is natural that the amount of rain affects how many umbrellas people buy, but buying umbrellas cannot change the weather.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the explanatory variable.",
          "workingLatex": "x = \\text{rainfall (explanatory)}, \\quad y = \\text{sales (response)}",
          "explanation": "So rainfall is the explanatory (independent) variable plotted on the horizontal axis, and umbrella sales is the response (dependent) variable on the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the direction of the points.",
          "workingLatex": "\\text{points rise from lower-left to upper-right}",
          "explanation": "Turning to the correlation, the points climb as you move right, which points to a positive relationship.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the type.",
          "workingLatex": "x \\uparrow \\;\\Rightarrow\\; y \\uparrow \\;\\Rightarrow\\; \\text{positive}",
          "explanation": "More rain goes with more umbrellas sold, so the two rise together, which is positive correlation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Judge how tightly the points cluster.",
          "workingLatex": "\\text{little scatter about the upward trend}",
          "explanation": "The points sit close to a straight line with only small spread, so the relationship is a strong one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the strength.",
          "workingLatex": "\\text{strong}",
          "explanation": "Because rainfall predicts sales well, we describe the strength as strong rather than weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full description.",
          "workingLatex": "\\text{strong positive correlation}",
          "explanation": "Combining direction and tightness, the diagram shows strong positive correlation between rainfall and umbrella sales.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Rainfall $x$ is the explanatory (independent) variable. (b) The diagram shows strong positive correlation: as rainfall increases, umbrella sales increase, with the points close to a straight line."
    }
  },
  {
    "id": "al.y1.stats.regression.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "correlation",
      "causation",
      "confounding-variable",
      "explain"
    ],
    "questionText": "Over one summer, a seaside town finds a strong positive correlation between its daily ice-cream sales and the number of people treated for sunburn each day. A newspaper claims that 'eating ice cream causes sunburn'. Explain why this conclusion is not justified, and identify a variable that could explain the correlation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the data actually shows.",
          "workingLatex": "\\text{ice-cream sales and sunburn cases rise together}",
          "explanation": "The data only tells us that on days with high ice-cream sales there tend to be many sunburn cases too. That is an association between the two counts, nothing more.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claim being made.",
          "workingLatex": "\\text{claim: ice cream} \\;\\Rightarrow\\; \\text{sunburn}",
          "explanation": "The newspaper jumps from 'these two move together' to 'one causes the other', which is a much stronger claim than the data supports.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall what correlation measures.",
          "workingLatex": "\\text{correlation} \\ne \\text{causation}",
          "explanation": "Correlation only measures whether two quantities tend to move together. It never, on its own, shows that changing one would change the other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Look for a third variable driving both.",
          "workingLatex": "\\text{hot, sunny weather}",
          "explanation": "A single outside cause can push both up at once. Hot, sunny days make people buy more ice cream and also expose more skin to strong sun.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain how the third variable creates the link.",
          "workingLatex": "\\text{sunshine} \\;\\rightarrow\\; \\text{ice-cream sales } \\text{ and } \\text{sunshine} \\;\\rightarrow\\; \\text{sunburn}",
          "explanation": "Because the amount of sunshine separately raises both numbers, they rise and fall together even though neither causes the other. This hidden driver is called a confounding variable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "\\text{no causal link; weather is the common cause}",
          "explanation": "So the correlation is real but the causal claim is not justified: the amount of hot, sunny weather explains both, not ice cream itself.",
          "diagram": null
        }
      ],
      "finalAnswer": "Correlation does not imply causation. The link is explained by a confounding variable — the amount of hot, sunny weather — which independently increases both ice-cream sales and sunburn cases, so eating ice cream does not cause sunburn."
    }
  },
  {
    "id": "al.y1.stats.regression.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "correlation",
      "pmcc",
      "interpret-r",
      "positive"
    ],
    "questionText": "A study records the number of hours $x$ that each of $10$ students revised and their mark $y$ on a test. The product moment correlation coefficient is found to be $r = 0.86$. Using the scatter diagram to help you, describe what this value of $r$ tells you about the relationship between revision time and test mark.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2,
          "y": 41
        },
        {
          "x": 4,
          "y": 48
        },
        {
          "x": 5,
          "y": 52
        },
        {
          "x": 7,
          "y": 60
        },
        {
          "x": 8,
          "y": 63
        },
        {
          "x": 10,
          "y": 70
        },
        {
          "x": 12,
          "y": 74
        },
        {
          "x": 14,
          "y": 80
        },
        {
          "x": 16,
          "y": 85
        },
        {
          "x": 18,
          "y": 90
        }
      ],
      "xAxisLabel": "revision time (hours)",
      "yAxisLabel": "test mark (\\%)",
      "caption": "Revision time against test mark, r = 0.86",
      "alt": "Scatter diagram: points rise from lower-left to upper-right and lie close to a straight line."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r.",
          "workingLatex": "-1 \\le r \\le 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$. Its sign and its distance from $0$ carry all the meaning, so we read those two things off.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign of r.",
          "workingLatex": "r = 0.86 > 0",
          "explanation": "A positive $r$ means the variables tend to increase together, so this is positive correlation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Judge how close r is to 1.",
          "workingLatex": "0.86 \\text{ is close to } 1",
          "explanation": "The nearer $r$ is to $1$, the tighter the points cluster around an upward straight line. A value of $0.86$ is quite close to $1$, so the relationship is strong.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine sign and magnitude.",
          "workingLatex": "r = 0.86 \\;\\Rightarrow\\; \\text{strong positive correlation}",
          "explanation": "Putting the two readings together, a value of $0.86$ describes a strong positive correlation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check against the scatter diagram.",
          "workingLatex": "\\text{points lie close to an upward line}",
          "explanation": "The diagram agrees with the number: the points rise to the right and stay near a straight line, which is exactly what a strong positive $r$ should look like.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context.",
          "workingLatex": "\\text{more revision} \\;\\rightarrow\\; \\text{higher marks (tendency)}",
          "explanation": "In plain terms, students who revised more tended to score higher. It is a strong tendency, not a guarantee, because $r$ is not exactly $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 0.86$ is positive and close to $1$, so it indicates a strong positive correlation: students who revised for longer tended to achieve higher marks."
    }
  },
  {
    "id": "al.y1.stats.regression.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "scatter",
      "correlation",
      "interpret-r",
      "negative",
      "weather"
    ],
    "questionText": "For $10$ winter days a household records the daily mean temperature $x$ (in $\\degree\\text{C}$) and the amount of gas it uses for heating $y$ (in $\\text{kWh}$). The scatter diagram is shown and the product moment correlation coefficient is $r = -0.78$. Describe the correlation and explain what this means for the household.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2,
          "y": 48
        },
        {
          "x": 4,
          "y": 44
        },
        {
          "x": 5,
          "y": 42
        },
        {
          "x": 7,
          "y": 38
        },
        {
          "x": 9,
          "y": 33
        },
        {
          "x": 11,
          "y": 30
        },
        {
          "x": 12,
          "y": 27
        },
        {
          "x": 14,
          "y": 23
        },
        {
          "x": 16,
          "y": 20
        },
        {
          "x": 18,
          "y": 16
        }
      ],
      "xAxisLabel": "daily mean temperature (\\degree C)",
      "yAxisLabel": "gas used (kWh)",
      "caption": "Temperature against gas used, r = -0.78",
      "alt": "Scatter diagram: points fall from upper-left to lower-right, fairly close to a straight line."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r.",
          "workingLatex": "-1 \\le r \\le 1",
          "explanation": "The correlation coefficient sits between $-1$ and $1$. Its sign gives the direction of the relationship and its distance from $0$ gives the strength.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign of r.",
          "workingLatex": "r = -0.78 < 0",
          "explanation": "A negative $r$ means that as one variable increases the other tends to decrease, so this is negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Judge the size of r.",
          "workingLatex": "|{-0.78}| = 0.78 \\text{ is fairly close to } 1",
          "explanation": "It is the distance from $0$, ignoring the sign, that measures strength. A size of $0.78$ is fairly close to $1$, so the correlation is moderately strong.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine sign and size.",
          "workingLatex": "r = -0.78 \\;\\Rightarrow\\; \\text{moderately strong negative correlation}",
          "explanation": "Putting the readings together, $r = -0.78$ describes a moderately strong negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check against the scatter diagram.",
          "workingLatex": "\\text{points fall to the right, fairly tight}",
          "explanation": "The diagram matches: the points slope downward and stay fairly close to a straight line, just as a moderately strong negative $r$ predicts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret for the household.",
          "workingLatex": "\\text{colder days} \\;\\rightarrow\\; \\text{more gas used}",
          "explanation": "In practical terms, on colder days the household tends to burn more gas for heating, which is exactly what we would expect from a heating bill.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = -0.78$ is negative with size fairly close to $1$, so it shows a moderately strong negative correlation: on colder days the household tends to use more gas for heating."
    }
  },
  {
    "id": "al.y1.stats.regression.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "correlation",
      "causation",
      "confounding-variable",
      "explain"
    ],
    "questionText": "A city's records show a strong positive correlation between the number of firefighters sent to a fire $x$ and the cost of the damage $y$ caused by that fire. A student concludes that 'sending more firefighters causes more damage'. Explain why this reasoning is flawed and identify a variable that could explain the correlation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the data shows.",
          "workingLatex": "\\text{more firefighters} \\;\\leftrightarrow\\; \\text{more damage}",
          "explanation": "The records only show that fires attended by many firefighters also tend to be the costliest. That is an association between the two numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the flawed claim.",
          "workingLatex": "\\text{claim: firefighters} \\;\\Rightarrow\\; \\text{damage}",
          "explanation": "The student leaps from 'these move together' to 'one causes the other', which the correlation alone cannot support — and here it even gets the direction of blame backwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the key principle.",
          "workingLatex": "\\text{correlation} \\ne \\text{causation}",
          "explanation": "Two quantities can be strongly correlated without either one causing the other. A link in the data is never by itself proof of cause.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify a third variable.",
          "workingLatex": "\\text{size / severity of the fire}",
          "explanation": "A single underlying factor can drive both numbers. Bigger fires are the obvious candidate here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain how it creates the link.",
          "workingLatex": "\\text{bigger fire} \\;\\rightarrow\\; \\text{more firefighters and more damage}",
          "explanation": "A larger, more severe fire needs more firefighters to tackle it and also destroys more property, so both figures rise together because of the fire's size, not because of each other.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "\\text{no causal link; fire size is the common cause}",
          "explanation": "So the reasoning is flawed: the confounding variable — the size of the fire — explains the correlation, and cutting firefighters would only make damage worse.",
          "diagram": null
        }
      ],
      "finalAnswer": "Correlation does not imply causation. The confounding variable is the size (severity) of the fire, which independently increases both the number of firefighters sent and the cost of the damage, so sending more firefighters does not cause more damage."
    }
  },
  {
    "id": "al.y1.stats.regression.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "scatter",
      "correlation",
      "describe",
      "positive",
      "moderate"
    ],
    "questionText": "Before collecting data, a student expects height and shoe size to be linked. She measures the height $x$ (in $\\text{cm}$) and shoe size $y$ (UK) of $10$ adults and plots the scatter diagram shown. (a) Was it reasonable to expect a correlation? (b) Describe the type and strength of the correlation actually shown.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 152,
          "y": 4
        },
        {
          "x": 156,
          "y": 5
        },
        {
          "x": 160,
          "y": 6
        },
        {
          "x": 162,
          "y": 6
        },
        {
          "x": 166,
          "y": 7
        },
        {
          "x": 170,
          "y": 7
        },
        {
          "x": 174,
          "y": 9
        },
        {
          "x": 178,
          "y": 8
        },
        {
          "x": 182,
          "y": 10
        },
        {
          "x": 188,
          "y": 11
        }
      ],
      "xAxisLabel": "height (cm)",
      "yAxisLabel": "shoe size (UK)",
      "caption": "Height against shoe size for 10 adults",
      "alt": "Scatter diagram: points rise from lower-left to upper-right with a moderate amount of scatter about the trend."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reason about the context first.",
          "workingLatex": "\\text{taller people tend to have bigger feet}",
          "explanation": "It is sensible to think about the situation before looking at the plot. Bodies grow roughly in proportion, so we would reasonably expect taller people to have larger feet — a positive link.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Answer part (a).",
          "workingLatex": "\\text{yes — expect positive correlation}",
          "explanation": "So it was reasonable to expect a positive correlation between height and shoe size before any data was collected.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the direction of the points.",
          "workingLatex": "\\text{points rise from lower-left to upper-right}",
          "explanation": "Turning to the plotted data, the points climb as you move right, confirming the expected upward trend.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the type.",
          "workingLatex": "x \\uparrow \\;\\Rightarrow\\; y \\uparrow \\;\\Rightarrow\\; \\text{positive}",
          "explanation": "Taller adults tend to have larger shoe sizes, so the correlation is positive, as predicted.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Judge how tightly the points cluster.",
          "workingLatex": "\\text{some scatter about the trend}",
          "explanation": "The points do rise together but they are not glued to a single line — there is a fair amount of spread, because two people of the same height can still take different shoe sizes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide the strength.",
          "workingLatex": "\\text{moderate (not strong)}",
          "explanation": "Because the spread is noticeable but the upward trend is clear, we call the strength moderate rather than strong.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full description.",
          "workingLatex": "\\text{moderate positive correlation}",
          "explanation": "Combining direction and tightness gives the answer: a moderate positive correlation between height and shoe size.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Yes — it was reasonable to expect a positive correlation, since taller people tend to have bigger feet. (b) The diagram shows moderate positive correlation: shoe size $y$ increases with height $x$, but with a fair amount of scatter about the trend."
    }
  },
  {
    "id": "al.y1.stats.regression.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "scatter",
      "correlation",
      "interpret-r",
      "negative",
      "moderate"
    ],
    "questionText": "For $10$ teenagers, researchers record weekly screen time $x$ (in hours) and a fitness score $y$ out of $100$. The scatter diagram is shown and the product moment correlation coefficient is $r = -0.62$. Describe the correlation between screen time and fitness score.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 5,
          "y": 82
        },
        {
          "x": 10,
          "y": 70
        },
        {
          "x": 12,
          "y": 78
        },
        {
          "x": 18,
          "y": 65
        },
        {
          "x": 20,
          "y": 60
        },
        {
          "x": 24,
          "y": 66
        },
        {
          "x": 28,
          "y": 52
        },
        {
          "x": 30,
          "y": 58
        },
        {
          "x": 35,
          "y": 45
        },
        {
          "x": 40,
          "y": 48
        }
      ],
      "xAxisLabel": "weekly screen time (hours)",
      "yAxisLabel": "fitness score",
      "caption": "Screen time against fitness score, r = -0.62",
      "alt": "Scatter diagram: points drift downward from upper-left to lower-right but with noticeable scatter."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r.",
          "workingLatex": "-1 \\le r \\le 1",
          "explanation": "The correlation coefficient lies between $-1$ and $1$. Read its sign for the direction and its distance from $0$ for the strength.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign of r.",
          "workingLatex": "r = -0.62 < 0",
          "explanation": "A negative value means the variables tend to move in opposite directions, so this is negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Judge the size of r.",
          "workingLatex": "|{-0.62}| = 0.62 \\text{ is roughly midway between } 0 \\text{ and } 1",
          "explanation": "A size of about $0.6$ is neither close to $0$ nor close to $1$; it sits in the middle, which signals a moderate rather than strong or weak relationship.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine sign and size.",
          "workingLatex": "r = -0.62 \\;\\Rightarrow\\; \\text{moderate negative correlation}",
          "explanation": "Putting the two readings together, $r = -0.62$ describes a moderate negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check against the scatter diagram.",
          "workingLatex": "\\text{downward drift with noticeable scatter}",
          "explanation": "The diagram agrees: the points generally fall to the right but with clear spread, which is why the strength is only moderate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context.",
          "workingLatex": "\\text{more screen time} \\;\\rightarrow\\; \\text{lower fitness (tendency)}",
          "explanation": "In plain terms, teenagers with more screen time tended to have lower fitness scores, but the moderate strength means there are plenty of exceptions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = -0.62$ is negative with size about halfway to $1$, so it shows a moderate negative correlation: more weekly screen time is associated with somewhat lower fitness scores, though with noticeable scatter."
    }
  },
  {
    "id": "al.y1.stats.regression.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "scatter",
      "correlation",
      "compare",
      "strength"
    ],
    "questionText": "Two greenhouses record daily sunshine hours $x$ against tomato-plant growth $y$ (in $\\text{cm}$). Greenhouse A's scatter diagram is shown below. In Greenhouse B's diagram (not shown) the points lie almost exactly along a straight upward line. Both diagrams show positive correlation. State, with a reason, which greenhouse's diagram shows the stronger correlation.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 3,
          "y": 8
        },
        {
          "x": 4,
          "y": 14
        },
        {
          "x": 5,
          "y": 9
        },
        {
          "x": 6,
          "y": 16
        },
        {
          "x": 7,
          "y": 11
        },
        {
          "x": 8,
          "y": 18
        },
        {
          "x": 9,
          "y": 13
        },
        {
          "x": 10,
          "y": 20
        },
        {
          "x": 11,
          "y": 16
        },
        {
          "x": 12,
          "y": 22
        }
      ],
      "xAxisLabel": "sunshine (hours)",
      "yAxisLabel": "growth (cm)",
      "caption": "Greenhouse A: sunshine against growth",
      "alt": "Scatter diagram for Greenhouse A: points drift upward to the right but are loosely scattered about the trend."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what 'strength' measures.",
          "workingLatex": "\\text{strength} = \\text{how close the points are to a straight line}",
          "explanation": "When comparing two positive correlations, the direction is the same for both, so the deciding factor is tightness: the closer the points sit to a single straight line, the stronger the correlation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Assess Greenhouse A's diagram.",
          "workingLatex": "\\text{A: upward but loosely scattered}",
          "explanation": "In Greenhouse A the points do rise to the right, but they are spread out around the trend rather than hugging a line, so the correlation there is only weak-to-moderate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess Greenhouse B's diagram.",
          "workingLatex": "\\text{B: points almost exactly on a straight line}",
          "explanation": "In Greenhouse B the points sit almost perfectly along an upward line, with very little spread, which is the picture of a strong correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the two.",
          "workingLatex": "\\text{B tighter than A}",
          "explanation": "Because B's points cling to a line far more closely than A's, B represents the stronger relationship.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer with a reason.",
          "workingLatex": "\\text{Greenhouse B shows the stronger correlation}",
          "explanation": "So Greenhouse B shows the stronger correlation, because its points lie closer to a straight line than Greenhouse A's do.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the qualitative labels.",
          "workingLatex": "\\text{A: weak/moderate positive}, \\quad \\text{B: strong positive}",
          "explanation": "Naming each fully: Greenhouse A is a weak-to-moderate positive correlation and Greenhouse B is a strong positive correlation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Greenhouse B shows the stronger correlation, because its points lie almost exactly on a straight line (strong positive), whereas Greenhouse A's points are loosely scattered about the trend (weak-to-moderate positive)."
    }
  },
  {
    "id": "al.y1.stats.regression.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "weather"
    ],
    "questionText": "On $12$ summer days a beach cafe records the daily maximum temperature $x$ (in $\\degree C$) and the number of cold drinks sold, $y$. The temperatures ranged from $16\\degree C$ to $28\\degree C$. The least-squares regression line of $y$ on $x$ is $y = 24 + 6x$. Estimate the number of cold drinks sold on a day when the maximum temperature is $22\\degree C$, and state whether your estimate is reliable.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 16,
          "y": 118
        },
        {
          "x": 17,
          "y": 130
        },
        {
          "x": 18,
          "y": 128
        },
        {
          "x": 19,
          "y": 140
        },
        {
          "x": 20,
          "y": 142
        },
        {
          "x": 21,
          "y": 154
        },
        {
          "x": 23,
          "y": 158
        },
        {
          "x": 24,
          "y": 172
        },
        {
          "x": 25,
          "y": 170
        },
        {
          "x": 26,
          "y": 184
        },
        {
          "x": 27,
          "y": 182
        },
        {
          "x": 28,
          "y": 190
        }
      ],
      "line": {
        "a": 24,
        "b": 6
      },
      "predict": {
        "x": 22,
        "y": 156,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold drink sales against maximum temperature",
      "alt": "Scatter of cold drinks sold against maximum temperature showing a strong positive trend, with the regression line y = 24 + 6x drawn through the points and a read-off at x = 22 giving y = 156."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the given model and variables",
          "workingLatex": "y = 24 + 6x",
          "explanation": "The line is already given, so no calculation of the gradient or intercept is needed. Here $x$ is the temperature (the explanatory variable) and $y$ is the number of drinks sold (the response).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the temperature",
          "workingLatex": "y = 24 + 6 \\times 22",
          "explanation": "To predict the drinks sold at $22\\degree C$, we put $x = 22$ into the line — the model turns any temperature into an estimated sales figure.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the product",
          "workingLatex": "6 \\times 22 = 132",
          "explanation": "Doing the multiplication first follows the usual order of operations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the intercept",
          "workingLatex": "y = 24 + 132 = 156",
          "explanation": "Adding the intercept $24$ gives the predicted value of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the prediction",
          "workingLatex": "y \\approx 156",
          "explanation": "The model predicts about $156$ cold drinks. Sales must be a whole number, so we read it as $156$ drinks.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value against the data range",
          "workingLatex": "16 \\le 22 \\le 28",
          "explanation": "The temperature $22\\degree C$ lies inside the range of temperatures actually observed, so we are predicting between known data points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Judge the reliability",
          "workingLatex": "\\text{interpolation} \\Rightarrow \\text{reliable}",
          "explanation": "Predicting inside the data range is called interpolation. Because the model was built from data in this region, the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The model predicts about $156$ cold drinks. Since $22\\degree C$ lies within the observed range $16\\degree C$ to $28\\degree C$, this is interpolation and the estimate is reliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "gradient",
      "interpretation",
      "business"
    ],
    "questionText": "A company models the link between monthly online advertising spend $x$ (in $\\pounds1000$s) and monthly sales revenue $y$ (in $\\pounds1000$s). Using data with advertising spend between $\\pounds2000$ and $\\pounds15000$, the least-squares regression line of $y$ on $x$ is $y = 18 + 4.5x$. Interpret the gradient of this line in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the gradient",
          "workingLatex": "b = 4.5",
          "explanation": "In the line $y = a + bx$ the number multiplying $x$ is the gradient, so here $b = 4.5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what a gradient means",
          "workingLatex": "\\text{gradient} = \\dfrac{\\text{change in } y}{\\text{change in } x}",
          "explanation": "The gradient tells us how much $y$ changes when $x$ increases by one unit — it is a rate of change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the units of each variable",
          "workingLatex": "x:\\ \\pounds1000\\text{s}, \\quad y:\\ \\pounds1000\\text{s}",
          "explanation": "Both quantities are measured in thousands of pounds, so one unit of $x$ is $\\pounds1000$ of advertising and one unit of $y$ is $\\pounds1000$ of revenue.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the gradient to a one-unit change",
          "workingLatex": "\\Delta x = 1 \\Rightarrow \\Delta y = 4.5",
          "explanation": "Increasing advertising by one unit ($\\pounds1000$) raises the predicted revenue by $4.5$ units.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convert the change into pounds",
          "workingLatex": "4.5 \\times \\pounds1000 = \\pounds4500",
          "explanation": "Because $y$ is in thousands of pounds, $4.5$ units means $\\pounds4500$ of extra revenue.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the interpretation",
          "workingLatex": "+\\pounds1000 \\text{ spend} \\Rightarrow +\\pounds4500 \\text{ revenue}",
          "explanation": "Putting it in words gives a clear, in-context meaning for the gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient $4.5$ means that for each extra $\\pounds1000$ spent on advertising, the model predicts an increase of about $\\pounds4500$ in monthly sales revenue."
    }
  },
  {
    "id": "al.y1.stats.regression.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "regression",
      "intercept",
      "interpretation",
      "biology"
    ],
    "questionText": "A biologist grows pea plants. For each plant she records the mass of fertiliser used $x$ (in grams) and the height $y$ (in cm) after four weeks. The amounts of fertiliser ranged from $2$ g to $10$ g. The least-squares regression line of $y$ on $x$ is $y = 8 + 1.5x$. Interpret the value $8$ in this model, and explain why it should be treated with caution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the intercept",
          "workingLatex": "a = 8",
          "explanation": "In $y = a + bx$ the constant term is the intercept, so $a = 8$. This is the value of $y$ when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the fertiliser to zero",
          "workingLatex": "x = 0 \\Rightarrow y = 8 + 1.5 \\times 0 = 8",
          "explanation": "Putting $x = 0$ into the line leaves only the intercept, confirming that $8$ is the predicted height with no fertiliser.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Attach the units",
          "workingLatex": "y = 8\\ \\text{cm}",
          "explanation": "Since $y$ is measured in centimetres, the intercept represents a height of $8$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the meaning in context",
          "workingLatex": "\\text{no fertiliser} \\Rightarrow \\approx 8\\ \\text{cm}",
          "explanation": "So the model predicts a plant given no fertiliser would be about $8$ cm tall after four weeks.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the data range",
          "workingLatex": "2 \\le x \\le 10",
          "explanation": "The fertiliser amounts actually used all lie between $2$ g and $10$ g, so this is the region the model was built from.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the intercept relative to the data",
          "workingLatex": "x = 0 < 2",
          "explanation": "The intercept corresponds to $x = 0$, which is below the smallest amount of fertiliser tested — it sits outside the data range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain the caution",
          "workingLatex": "\\text{extrapolation} \\Rightarrow \\text{unreliable}",
          "explanation": "Using the line at $x = 0$ is extrapolation, and there is no data near zero fertiliser, so the intercept should not be trusted as an accurate prediction.",
          "diagram": null
        }
      ],
      "finalAnswer": "The value $8$ is the predicted height (in cm) of a plant given no fertiliser ($x = 0$). It should be treated with caution because $x = 0$ lies outside the data range $2 \\le x \\le 10$, so using the model there is extrapolation."
    }
  },
  {
    "id": "al.y1.stats.regression.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "interpolation",
      "extrapolation",
      "sport"
    ],
    "questionText": "A coach records, for $10$ athletes, the weekly training distance $x$ (in km) and their time for a $5$ km race $y$ (in minutes). Training distances ranged from $20$ km to $60$ km. The least-squares regression line of $y$ on $x$ is $y = 34 - 0.25x$. The coach uses this line to estimate race times for athletes training (a) $45$ km and (b) $80$ km per week. For each case, state whether the estimate is reliable, giving a reason.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 20,
          "y": 30
        },
        {
          "x": 25,
          "y": 27.5
        },
        {
          "x": 30,
          "y": 27
        },
        {
          "x": 35,
          "y": 25
        },
        {
          "x": 40,
          "y": 24.5
        },
        {
          "x": 42,
          "y": 23.2
        },
        {
          "x": 48,
          "y": 22.4
        },
        {
          "x": 52,
          "y": 22
        },
        {
          "x": 55,
          "y": 20.2
        },
        {
          "x": 60,
          "y": 18.8
        }
      ],
      "line": {
        "a": 34,
        "b": -0.25
      },
      "predict": {
        "x": 45,
        "y": 22.75,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "training distance (km)",
      "yAxisLabel": "5 km race time (min)",
      "caption": "Race time against weekly training distance",
      "alt": "Scatter of 5 km race time against weekly training distance showing a moderate negative trend, with the regression line y = 34 - 0.25x and a read-off at x = 45 giving y = 22.75."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the given negative-gradient model",
          "workingLatex": "y = 34 - 0.25x",
          "explanation": "The line is provided. Its negative gradient matches the idea that more training tends to lower race times.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute for part (a)",
          "workingLatex": "y = 34 - 0.25 \\times 45",
          "explanation": "For an athlete training $45$ km per week we set $x = 45$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate part (a)",
          "workingLatex": "y = 34 - 11.25 = 22.75",
          "explanation": "So the model predicts a race time of about $22.75$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the range for (a)",
          "workingLatex": "20 \\le 45 \\le 60",
          "explanation": "The value $45$ km lies inside the range of training distances in the data, so this is interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Judge reliability of (a)",
          "workingLatex": "\\text{interpolation} \\Rightarrow \\text{reliable}",
          "explanation": "Because we are predicting within the observed data, the estimate for part (a) can be trusted.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for part (b)",
          "workingLatex": "y = 34 - 0.25 \\times 80 = 34 - 20 = 14",
          "explanation": "For an athlete training $80$ km per week we set $x = 80$, giving a predicted time of $14$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the range for (b)",
          "workingLatex": "80 > 60",
          "explanation": "The value $80$ km is larger than any training distance in the data, so this prediction lies outside the data range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Judge reliability of (b)",
          "workingLatex": "\\text{extrapolation} \\Rightarrow \\text{unreliable}",
          "explanation": "Predicting beyond the data is extrapolation; the pattern may not continue that far, so the estimate for part (b) is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $y \\approx 22.75$ minutes — reliable, because $45$ km lies within the data range ($20$ to $60$ km), so it is interpolation. (b) $y = 14$ minutes — unreliable, because $80$ km lies outside the data range, so it is extrapolation."
    }
  },
  {
    "id": "al.y1.stats.regression.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "explanatory-variable",
      "prediction",
      "weather"
    ],
    "questionText": "Over $14$ days a shop records the daily total rainfall $x$ (in mm) and the number of umbrellas sold $y$. The rainfall ranged from $0$ mm to $18$ mm. The least-squares regression line of $y$ on $x$ is $y = 5 + 2.4x$. (a) State which is the explanatory variable and which is the response variable. (b) Estimate the number of umbrellas sold on a day with $10$ mm of rain, and say whether the estimate is reliable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the roles of the variables",
          "workingLatex": "x \\to \\text{explains}, \\quad y \\to \\text{responds}",
          "explanation": "The explanatory variable is the one used to explain or predict; the response variable is the outcome that depends on it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide which drives which",
          "workingLatex": "\\text{rainfall} \\to \\text{umbrella sales}",
          "explanation": "Rain influences how many umbrellas people buy, but selling umbrellas does not change the rainfall — so rainfall is the driver.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assign the variables",
          "workingLatex": "x = \\text{rainfall}, \\quad y = \\text{umbrellas sold}",
          "explanation": "Rainfall is the explanatory variable $x$ and umbrella sales is the response variable $y$, matching the line of $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the prediction",
          "workingLatex": "y = 5 + 2.4 \\times 10",
          "explanation": "For part (b) we set $x = 10$ mm of rain into the given line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "y = 5 + 24 = 29",
          "explanation": "Working out the product then adding the intercept gives the predicted sales.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round to a sensible value",
          "workingLatex": "y \\approx 29 \\text{ umbrellas}",
          "explanation": "Sales are whole items, so we report about $29$ umbrellas.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Comment on reliability",
          "workingLatex": "0 \\le 10 \\le 18 \\Rightarrow \\text{reliable}",
          "explanation": "$10$ mm lies inside the observed rainfall range, so this is interpolation and the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The explanatory variable is the rainfall ($x$); the response variable is the number of umbrellas sold ($y$). (b) The model predicts about $29$ umbrellas, and since $10$ mm lies within the data range $0$ to $18$ mm, this is interpolation and the estimate is reliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "extrapolation",
      "prediction",
      "business"
    ],
    "questionText": "A cafe records, over $9$ weeks, the price of a coffee $x$ (in $\\pounds$) and the mean number of coffees sold per day $y$. Prices ranged from $\\pounds2.00$ to $\\pounds3.20$. The least-squares regression line of $y$ on $x$ is $y = 400 - 90x$. Use the line to estimate the daily sales when the price is $\\pounds4.00$, and comment on the reliability of your estimate.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2,
          "y": 225
        },
        {
          "x": 2.2,
          "y": 200
        },
        {
          "x": 2.3,
          "y": 195
        },
        {
          "x": 2.5,
          "y": 180
        },
        {
          "x": 2.7,
          "y": 150
        },
        {
          "x": 2.9,
          "y": 140
        },
        {
          "x": 3,
          "y": 128
        },
        {
          "x": 3.1,
          "y": 122
        },
        {
          "x": 3.2,
          "y": 108
        }
      ],
      "line": {
        "a": 400,
        "b": -90
      },
      "xAxisLabel": "price (\\pounds)",
      "yAxisLabel": "coffees sold per day",
      "caption": "Daily coffee sales against price",
      "alt": "Scatter of daily coffee sales against price showing a strong negative trend for prices from 2.00 to 3.20 pounds, with the regression line y = 400 - 90x drawn through the points."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the given model",
          "workingLatex": "y = 400 - 90x",
          "explanation": "The line is given, with a negative gradient showing that higher prices go with fewer sales.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the price",
          "workingLatex": "y = 400 - 90 \\times 4",
          "explanation": "To predict sales at $\\pounds4.00$ we put $x = 4$ into the line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the product",
          "workingLatex": "90 \\times 4 = 360",
          "explanation": "Multiplying first keeps the calculation in the correct order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the arithmetic",
          "workingLatex": "y = 400 - 360 = 40",
          "explanation": "Subtracting from the intercept gives a predicted $40$ coffees per day.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the price with the data range",
          "workingLatex": "4.00 > 3.20",
          "explanation": "The price $\\pounds4.00$ is higher than any price actually charged in the data, so it lies outside the observed range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the type of prediction",
          "workingLatex": "\\text{extrapolation}",
          "explanation": "Predicting beyond the range of the data is called extrapolation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Comment on reliability",
          "workingLatex": "\\text{extrapolation} \\Rightarrow \\text{unreliable}",
          "explanation": "Because there is no data near $\\pounds4.00$, the straight-line pattern may not hold, so the estimate of $40$ coffees is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The model predicts about $40$ coffees per day at $\\pounds4.00$. However $\\pounds4.00$ lies outside the data range ($\\pounds2.00$ to $\\pounds3.20$), so this is extrapolation and the estimate is unreliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "regression",
      "gradient",
      "interpretation",
      "weather"
    ],
    "questionText": "The daily mean temperature $x$ (in $\\degree C$) and the daily gas consumption $y$ (in kWh) of a house are recorded over one winter, with temperatures ranging from $-2\\degree C$ to $12\\degree C$. The least-squares regression line of $y$ on $x$ is $y = 90 - 4.5x$. Interpret the gradient of this line in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the gradient",
          "workingLatex": "b = -4.5",
          "explanation": "The number multiplying $x$ in $y = a + bx$ is the gradient, so here $b = -4.5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the meaning of a gradient",
          "workingLatex": "b = \\dfrac{\\text{change in } y}{\\text{change in } x}",
          "explanation": "The gradient measures how much $y$ changes for each one-unit increase in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the units",
          "workingLatex": "x:\\ \\degree C, \\quad y:\\ \\text{kWh}",
          "explanation": "A one-unit change in $x$ is a rise of $1\\degree C$, and $y$ is measured in kWh.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the sign",
          "workingLatex": "b < 0 \\Rightarrow y \\text{ falls as } x \\text{ rises}",
          "explanation": "The negative gradient means gas consumption goes down as the temperature goes up, which makes physical sense — a warmer day needs less heating.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply to a one-degree rise",
          "workingLatex": "\\Delta x = 1\\degree C \\Rightarrow \\Delta y = -4.5\\ \\text{kWh}",
          "explanation": "Each extra degree of temperature lowers the predicted gas use by $4.5$ kWh.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the interpretation",
          "workingLatex": "+1\\degree C \\Rightarrow -4.5\\ \\text{kWh}",
          "explanation": "Stating this in words gives a clear in-context meaning for the gradient.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient $-4.5$ means that for each $1\\degree C$ rise in the daily mean temperature, the model predicts gas consumption falls by about $4.5$ kWh."
    }
  },
  {
    "id": "al.y1.stats.regression.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "biology"
    ],
    "questionText": "For $11$ adults the arm span $x$ (in cm) and the height $y$ (in cm) are measured. The arm spans ranged from $150$ cm to $190$ cm. The least-squares regression line of $y$ on $x$ is $y = 15 + 0.9x$. Estimate the height of an adult with an arm span of $175$ cm, and state whether the estimate can be trusted.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 173.4,
          "y": 174.1
        },
        {
          "x": 166.6,
          "y": 161.9
        },
        {
          "x": 176.8,
          "y": 171.9
        },
        {
          "x": 163.2,
          "y": 164.1
        },
        {
          "x": 180.2,
          "y": 180.6
        },
        {
          "x": 159.8,
          "y": 155.4
        },
        {
          "x": 183.6,
          "y": 182.8
        },
        {
          "x": 156.4,
          "y": 153.2
        },
        {
          "x": 187,
          "y": 181.4
        },
        {
          "x": 153,
          "y": 154.6
        },
        {
          "x": 170,
          "y": 168
        }
      ],
      "line": {
        "a": 15,
        "b": 0.9
      },
      "predict": {
        "x": 175,
        "y": 172.5,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "arm span (cm)",
      "yAxisLabel": "height (cm)",
      "caption": "Height against arm span for 11 adults",
      "alt": "Scatter of height against arm span showing a strong positive trend, with the regression line y = 15 + 0.9x and a read-off at x = 175 giving y = 172.5."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the given model",
          "workingLatex": "y = 15 + 0.9x",
          "explanation": "The line is provided, so we can predict directly by substituting a value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the arm span",
          "workingLatex": "y = 15 + 0.9 \\times 175",
          "explanation": "We want the height for an arm span of $175$ cm, so we set $x = 175$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the product",
          "workingLatex": "0.9 \\times 175 = 157.5",
          "explanation": "Multiplying the gradient by the arm span gives the sloped part of the prediction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the intercept",
          "workingLatex": "y = 15 + 157.5 = 172.5",
          "explanation": "Adding the intercept completes the prediction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the estimate",
          "workingLatex": "y \\approx 172.5\\ \\text{cm}",
          "explanation": "The model estimates a height of about $172.5$ cm, which is a realistic adult height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the range",
          "workingLatex": "150 \\le 175 \\le 190",
          "explanation": "The arm span $175$ cm lies inside the range of arm spans measured, so this is interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Judge reliability",
          "workingLatex": "\\text{interpolation} \\Rightarrow \\text{trustworthy}",
          "explanation": "Because we are predicting within the data, the estimate can be trusted.",
          "diagram": null
        }
      ],
      "finalAnswer": "The model estimates a height of about $172.5$ cm. Since $175$ cm lies within the observed range $150$ to $190$ cm, this is interpolation and the estimate can be trusted."
    }
  },
  {
    "id": "al.y1.stats.regression.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "regression",
      "intercept",
      "response-variable",
      "sport"
    ],
    "questionText": "A gym records, for $8$ members, the number of training sessions per week $x$ and the greatest mass they can lift $y$ (in kg). The number of sessions ranged from $1$ to $6$ per week. The least-squares regression line of $y$ on $x$ is $y = 40 + 7x$. (a) Identify the response variable. (b) Interpret the intercept $40$, explaining a limitation of this value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the response variable",
          "workingLatex": "y = \\text{mass lifted}",
          "explanation": "The response variable is the outcome that depends on the other. The mass lifted depends on how much someone trains, so it is the response $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the intercept",
          "workingLatex": "a = 40",
          "explanation": "In $y = a + bx$ the constant is the intercept, so $a = 40$: the value of $y$ when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set sessions to zero",
          "workingLatex": "x = 0 \\Rightarrow y = 40 + 7 \\times 0 = 40",
          "explanation": "Putting $x = 0$ leaves only the intercept, the predicted lift for someone doing no training sessions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Attach the units",
          "workingLatex": "y = 40\\ \\text{kg}",
          "explanation": "As $y$ is measured in kilograms, the intercept represents a lift of $40$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the meaning in context",
          "workingLatex": "\\text{no sessions} \\Rightarrow \\approx 40\\ \\text{kg}",
          "explanation": "So the model predicts a member who trains zero times per week could lift about $40$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the data range",
          "workingLatex": "1 \\le x \\le 6",
          "explanation": "The members in the data all trained between $1$ and $6$ times per week.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain the limitation",
          "workingLatex": "x = 0 < 1 \\Rightarrow \\text{extrapolation}",
          "explanation": "Zero sessions lies outside the data range, so the intercept is an extrapolation and may not be a reliable prediction.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The response variable is the greatest mass lifted, $y$. (b) The intercept $40$ is the predicted lift (in kg) for a member doing no training sessions ($x = 0$). Its limitation is that $x = 0$ lies outside the data range $1 \\le x \\le 6$, so it is extrapolation and may be unreliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "interpolation",
      "extrapolation",
      "biology"
    ],
    "questionText": "In a study of $12$ ponds, the water temperature $x$ (in $\\degree C$) and the number of tadpoles caught in a fixed net $y$ are recorded. The temperatures ranged from $10\\degree C$ to $24\\degree C$. The least-squares regression line of $y$ on $x$ is $y = 4 + 1.5x$. The line is used to estimate the tadpole count at (a) $18\\degree C$ and (b) $30\\degree C$. State, with a reason, whether each estimate is reliable.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 16.8,
          "y": 30.7
        },
        {
          "x": 15.2,
          "y": 25.3
        },
        {
          "x": 17.7,
          "y": 29.4
        },
        {
          "x": 14.3,
          "y": 26.6
        },
        {
          "x": 18.5,
          "y": 33.5
        },
        {
          "x": 13.5,
          "y": 22.5
        },
        {
          "x": 19.4,
          "y": 34.4
        },
        {
          "x": 12.6,
          "y": 21.6
        },
        {
          "x": 20.2,
          "y": 33.4
        },
        {
          "x": 11.8,
          "y": 22.6
        },
        {
          "x": 21.1,
          "y": 34.1
        },
        {
          "x": 10.9,
          "y": 21.9
        }
      ],
      "line": {
        "a": 4,
        "b": 1.5
      },
      "predict": {
        "x": 18,
        "y": 31,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "water temperature (\\degree C)",
      "yAxisLabel": "tadpoles caught",
      "caption": "Tadpole count against water temperature",
      "alt": "Scatter of tadpoles caught against water temperature showing a positive trend for temperatures from 10 to 24 degrees, with the regression line y = 4 + 1.5x and a read-off at x = 18 giving y = 31."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the given model",
          "workingLatex": "y = 4 + 1.5x",
          "explanation": "The line is provided, so predictions come straight from substituting a temperature.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute for part (a)",
          "workingLatex": "y = 4 + 1.5 \\times 18",
          "explanation": "For part (a) we set $x = 18\\degree C$ into the line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate part (a)",
          "workingLatex": "y = 4 + 27 = 31",
          "explanation": "The model predicts about $31$ tadpoles at $18\\degree C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the range for (a)",
          "workingLatex": "10 \\le 18 \\le 24 \\Rightarrow \\text{interpolation}",
          "explanation": "$18\\degree C$ lies inside the range of temperatures recorded, so this is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute for part (b)",
          "workingLatex": "y = 4 + 1.5 \\times 30",
          "explanation": "For part (b) we set $x = 30\\degree C$ into the line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate part (b)",
          "workingLatex": "y = 4 + 45 = 49",
          "explanation": "The model predicts about $49$ tadpoles at $30\\degree C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the range for (b)",
          "workingLatex": "30 > 24 \\Rightarrow \\text{extrapolation}",
          "explanation": "$30\\degree C$ is hotter than any pond in the data, so this prediction lies outside the data range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Judge reliability of (b)",
          "workingLatex": "\\text{extrapolation} \\Rightarrow \\text{unreliable}",
          "explanation": "Because we are predicting beyond the data, the straight-line pattern may break down, so the estimate for part (b) is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $y = 31$ tadpoles — reliable, because $18\\degree C$ lies within the data range ($10\\degree C$ to $24\\degree C$), so it is interpolation. (b) $y = 49$ tadpoles — unreliable, because $30\\degree C$ lies outside the data range, so it is extrapolation."
    }
  },
  {
    "id": "al.y1.stats.regression.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "gradient",
      "business"
    ],
    "questionText": "A bakery records, for $10$ Saturdays, the number of loaves baked $x$ and the profit $y$ (in $\\pounds$). The number of loaves ranged from $40$ to $120$. The least-squares regression line of $y$ on $x$ is $y = -30 + 1.2x$. (a) Estimate the profit when $90$ loaves are baked, and state whether the estimate is reliable. (b) Interpret the gradient in context.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 86.8,
          "y": 82.2
        },
        {
          "x": 73.2,
          "y": 49.8
        },
        {
          "x": 93.6,
          "y": 76.4
        },
        {
          "x": 66.4,
          "y": 55.6
        },
        {
          "x": 100.4,
          "y": 99.5
        },
        {
          "x": 59.6,
          "y": 32.5
        },
        {
          "x": 107.2,
          "y": 105.6
        },
        {
          "x": 52.8,
          "y": 26.4
        },
        {
          "x": 114,
          "y": 101.9
        },
        {
          "x": 46,
          "y": 30.1
        }
      ],
      "line": {
        "a": -30,
        "b": 1.2
      },
      "predict": {
        "x": 90,
        "y": 78,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "loaves baked",
      "yAxisLabel": "profit (\\pounds)",
      "caption": "Saturday profit against number of loaves baked",
      "alt": "Scatter of profit against number of loaves baked showing a strong positive trend from 40 to 120 loaves, with the regression line y = -30 + 1.2x and a read-off at x = 90 giving y = 78."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the given model",
          "workingLatex": "y = -30 + 1.2x",
          "explanation": "The line is provided, so we predict by substituting and interpret the gradient directly from it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute for part (a)",
          "workingLatex": "y = -30 + 1.2 \\times 90",
          "explanation": "To estimate the profit for $90$ loaves we set $x = 90$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the product",
          "workingLatex": "1.2 \\times 90 = 108",
          "explanation": "Multiplying the gradient by the number of loaves gives the sloped part of the prediction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the arithmetic",
          "workingLatex": "y = -30 + 108 = 78",
          "explanation": "Adding the negative intercept gives a predicted profit of $\\pounds78$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the range for (a)",
          "workingLatex": "40 \\le 90 \\le 120 \\Rightarrow \\text{interpolation}",
          "explanation": "$90$ loaves lies inside the range in the data, so this is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the gradient for (b)",
          "workingLatex": "b = 1.2",
          "explanation": "The number multiplying $x$ is the gradient, so $b = 1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Attach units to the gradient",
          "workingLatex": "1.2\\ \\pounds \\text{ per loaf}",
          "explanation": "Here $y$ is in pounds and $x$ counts loaves, so the gradient is measured in pounds of profit per loaf.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "+1 \\text{ loaf} \\Rightarrow +\\pounds1.20",
          "explanation": "Each additional loaf baked is associated with about $\\pounds1.20$ more profit.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The model predicts a profit of $\\pounds78$; since $90$ lies within the range $40$ to $120$ loaves, this is interpolation and the estimate is reliable. (b) The gradient $1.2$ means each extra loaf baked is associated with an increase of about $\\pounds1.20$ in profit."
    }
  },
  {
    "id": "al.y1.stats.regression.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "summary-statistics",
      "mean-point"
    ],
    "questionText": "In an experiment $10$ tomato plants are each given a measured amount of fertiliser $x$ grams and their height $y$ centimetres is recorded. The summary statistics are $S_{xx} = 50$, $S_{xy} = 30$, $\\bar{x} = 8$ and $\\bar{y} = 22$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 3,
          "y": 18.7
        },
        {
          "x": 4,
          "y": 20
        },
        {
          "x": 5,
          "y": 19.9
        },
        {
          "x": 6,
          "y": 21.1
        },
        {
          "x": 7,
          "y": 21.2
        },
        {
          "x": 8,
          "y": 22.3
        },
        {
          "x": 9,
          "y": 22.2
        },
        {
          "x": 10,
          "y": 23.5
        },
        {
          "x": 11,
          "y": 23.4
        },
        {
          "x": 13,
          "y": 25.1
        }
      ],
      "line": {
        "a": 17.2,
        "b": 0.6
      },
      "xAxisLabel": "fertiliser (g)",
      "yAxisLabel": "height (cm)",
      "caption": "Plant height against fertiliser applied.",
      "alt": "Scatter of ten points rising steadily from lower left to upper right, with the least-squares line drawn through them."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The least-squares line of $y$ on $x$ is a straight line, so the whole task reduces to finding just two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient measures how strongly $x$ and $y$ move together ($S_{xy}$) relative to how much $x$ varies on its own ($S_{xx}$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{30}{50} = 0.6",
          "explanation": "Putting the given sums straight into the formula gives the gradient at once.",
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
          "workingLatex": "a = 22 - 0.6 \\times 8",
          "explanation": "We use the means $\\bar{x} = 8$ and $\\bar{y} = 22$ together with the gradient we just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 22 - 4.8 = 17.2",
          "explanation": "This is the height the model predicts when no fertiliser is applied ($x = 0$): a baseline of $17.2$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 17.2 + 0.6x",
          "explanation": "Combining the intercept and gradient gives the complete model relating height to fertiliser.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the line passes through the mean point",
          "workingLatex": "17.2 + 0.6 \\times 8 = 17.2 + 4.8 = 22 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 8$ should return $\\bar{y} = 22$; it does, confirming the arithmetic and that the line goes through $(\\bar{x}, \\bar{y})$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the gradient in context",
          "workingLatex": "b = 0.6",
          "explanation": "Each extra gram of fertiliser is associated with about $0.6$ cm more height, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 17.2 + 0.6x$"
    }
  },
  {
    "id": "al.y1.stats.regression.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "weather"
    ],
    "questionText": "On $8$ summer days a beach kiosk records the daily mean temperature $x\\ (\\degree C)$ and the number of cold drinks sold $y$. The data give $\\Sigma x = 160$, $\\Sigma y = 280$, $\\Sigma xy = 5680$ and $\\Sigma x^2 = 3250$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 21.3,
          "y": 38.7
        },
        {
          "x": 18.7,
          "y": 31.3
        },
        {
          "x": 22.5,
          "y": 37.8
        },
        {
          "x": 17.5,
          "y": 32.2
        },
        {
          "x": 23.8,
          "y": 42.9
        },
        {
          "x": 16.2,
          "y": 27.1
        },
        {
          "x": 25.1,
          "y": 44.6
        },
        {
          "x": 14.9,
          "y": 25.4
        }
      ],
      "line": {
        "a": 3,
        "b": 1.6
      },
      "xAxisLabel": "mean temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold drinks sold against daily mean temperature.",
      "alt": "Scatter of ten points climbing from lower left to upper right, with a rising least-squares line through them."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We are heading for a straight line, so we need to pin down the gradient $b$ and intercept $a$. Because only raw sums are given, we must build $S_{xx}$ and $S_{xy}$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two means",
          "workingLatex": "\\bar{x} = \\dfrac{160}{8} = 20, \\qquad \\bar{y} = \\dfrac{280}{8} = 35",
          "explanation": "The means come straight from dividing each total by $n = 8$; we will need them for the intercept and for the final check.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the formula for S_xx",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures the total spread of the $x$-values about their mean; this shortcut avoids working out each deviation separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 3250 - \\dfrac{160^2}{8} = 3250 - 3200 = 50",
          "explanation": "Subtracting the correction term $\\dfrac{(\\Sigma x)^2}{n} = 3200$ from $\\Sigma x^2$ leaves the variation in temperature.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the formula for S_xy",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{(\\Sigma x)(\\Sigma y)}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together; a positive value signals that hotter days tend to bring more sales.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 5680 - \\dfrac{160 \\times 280}{8} = 5680 - 5600 = 80",
          "explanation": "The correction term $\\dfrac{(\\Sigma x)(\\Sigma y)}{n} = 5600$ removes the part explained purely by the averages, leaving the joint variation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares the joint variation with the spread of $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{80}{50} = 1.6",
          "explanation": "Dividing the two quantities we found gives a clean gradient of $1.6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "Since the line passes through $(\\bar{x}, \\bar{y})$, this rearrangement gives the intercept directly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the intercept",
          "workingLatex": "a = 35 - 1.6 \\times 20 = 35 - 32 = 3",
          "explanation": "Substituting the means and the gradient gives $a = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 3 + 1.6x",
          "explanation": "Assembling the intercept and gradient gives the full model for drinks sold in terms of temperature.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the mean point",
          "workingLatex": "3 + 1.6 \\times 20 = 3 + 32 = 35 = \\bar{y}",
          "explanation": "Feeding $\\bar{x} = 20$ back into the line returns $\\bar{y} = 35$, confirming the line passes through the mean point and the arithmetic is sound.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.6",
          "explanation": "Each extra degree of mean temperature is associated with about $1.6$ more cold drinks sold, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 3 + 1.6x$"
    }
  },
  {
    "id": "al.y1.stats.regression.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "summary-statistics",
      "interpretation"
    ],
    "questionText": "For a class of students, $x$ is the number of hours spent revising and $y$ is the mark (out of $100$) in a test. The summary statistics are $S_{xx} = 80$, $S_{xy} = 60$, $\\bar{x} = 6$ and $\\bar{y} = 52$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We want a straight-line model, so we need only two unknowns: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient weighs how revision hours and marks vary together against how much the revision hours vary on their own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{60}{80} = 0.75",
          "explanation": "The given values divide neatly to a clean gradient of $0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The regression line always passes through the mean point $(\\bar{x}, \\bar{y})$, which lets us solve for $a$ once $b$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 52 - 0.75 \\times 6",
          "explanation": "We insert $\\bar{x} = 6$, $\\bar{y} = 52$ and the gradient we just calculated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 52 - 4.5 = 47.5",
          "explanation": "This is the mark the model predicts for a student who does no revision ($x = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 47.5 + 0.75x",
          "explanation": "Putting the intercept and gradient together gives the completed model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the mean point",
          "workingLatex": "47.5 + 0.75 \\times 6 = 47.5 + 4.5 = 52 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 6$ returns $\\bar{y} = 52$, confirming the line passes through $(\\bar{x}, \\bar{y})$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the gradient in context",
          "workingLatex": "b = 0.75",
          "explanation": "Each extra hour of revision is associated with about $0.75$ of a mark more, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 47.5 + 0.75x$"
    }
  },
  {
    "id": "al.y1.stats.regression.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "interpretation"
    ],
    "questionText": "For $10$ employees at a firm, $x$ is years of experience and $y$ is annual salary in $\\pounds000$. The data give $\\Sigma x = 60$, $\\Sigma y = 350$, $\\Sigma xy = 2220$ and $\\Sigma x^2 = 460$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We are aiming for a straight line, but only raw sums are given, so we must first build $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two means",
          "workingLatex": "\\bar{x} = \\dfrac{60}{10} = 6, \\qquad \\bar{y} = \\dfrac{350}{10} = 35",
          "explanation": "Dividing each total by $n = 10$ gives the mean experience and mean salary, which we will need shortly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the formula for S_xx",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures how spread out the experience values are about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 460 - \\dfrac{60^2}{10} = 460 - 360 = 100",
          "explanation": "Removing the correction term $360$ from $\\Sigma x^2$ leaves the variation in years of experience.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the formula for S_xy",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{(\\Sigma x)(\\Sigma y)}{n}",
          "explanation": "$S_{xy}$ measures whether experience and salary tend to rise together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 2220 - \\dfrac{60 \\times 350}{10} = 2220 - 2100 = 120",
          "explanation": "The positive result shows more experienced employees tend to earn more.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares the joint variation with the spread of experience alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{120}{100} = 1.2",
          "explanation": "Dividing gives a clean gradient of $1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "Because the line passes through $(\\bar{x}, \\bar{y})$, this gives $a$ once $b$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the intercept",
          "workingLatex": "a = 35 - 1.2 \\times 6 = 35 - 7.2 = 27.8",
          "explanation": "Substituting the means and gradient gives an intercept of $27.8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the regression line",
          "workingLatex": "y = 27.8 + 1.2x",
          "explanation": "Assembling the pieces gives the model for salary in terms of experience.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the mean point",
          "workingLatex": "27.8 + 1.2 \\times 6 = 27.8 + 7.2 = 35 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 6$ returns $\\bar{y} = 35$, confirming the line passes through the mean point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.2",
          "explanation": "Each extra year of experience is associated with about $\\pounds 1200$ more salary, on average (since $y$ is measured in $\\pounds000$).",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 27.8 + 1.2x$ (with $y$ in $\\pounds000$)"
    }
  },
  {
    "id": "al.y1.stats.regression.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "summary-statistics",
      "weather"
    ],
    "questionText": "A weather station records, for a number of days, the daily mean temperature $x\\ (\\degree C)$ and the daily total sunshine $y$ (hours). The summary statistics are $S_{xx} = 120$, $S_{xy} = 48$, $\\bar{x} = 15$ and $\\bar{y} = 8$. Find the equation of the least-squares regression line of $y$ on $x$ and interpret the intercept.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 8,
          "y": 5.4
        },
        {
          "x": 10,
          "y": 5.7
        },
        {
          "x": 11,
          "y": 6.8
        },
        {
          "x": 13,
          "y": 6.9
        },
        {
          "x": 14,
          "y": 8.2
        },
        {
          "x": 16,
          "y": 8
        },
        {
          "x": 17,
          "y": 9.1
        },
        {
          "x": 19,
          "y": 9.4
        },
        {
          "x": 21,
          "y": 10.6
        },
        {
          "x": 24,
          "y": 11.3
        }
      ],
      "line": {
        "a": 2,
        "b": 0.4
      },
      "xAxisLabel": "mean temperature (\\degree C)",
      "yAxisLabel": "total sunshine (hours)",
      "caption": "Daily total sunshine against daily mean temperature.",
      "alt": "Scatter of ten points trending gently upward from left to right, with a shallow rising least-squares line through them."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The model is a straight line, so we need only the gradient $b$ and intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how temperature and sunshine vary together against how much temperature varies alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{48}{120} = 0.4",
          "explanation": "The given sums divide to a tidy gradient of $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through the mean point $(\\bar{x}, \\bar{y})$, so this equation isolates the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 8 - 0.4 \\times 15",
          "explanation": "We use $\\bar{x} = 15$, $\\bar{y} = 8$ and the gradient just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 8 - 6 = 2",
          "explanation": "The intercept comes out to a clean value of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 2 + 0.4x",
          "explanation": "Combining the intercept and gradient gives the model linking sunshine to temperature.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the mean point",
          "workingLatex": "2 + 0.4 \\times 15 = 2 + 6 = 8 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 15$ returns $\\bar{y} = 8$, confirming the line passes through the mean point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.4",
          "explanation": "Each extra degree of mean temperature is associated with about $0.4$ hours more sunshine, on average.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the intercept",
          "workingLatex": "a = 2",
          "explanation": "Taken literally, $a = 2$ predicts $2$ hours of sunshine at $0\\degree C$; but $0\\degree C$ lies outside the recorded temperatures, so this is extrapolation and should be treated with caution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 2 + 0.4x$. The intercept $a = 2$ suggests $2$ hours of sunshine at $0\\degree C$, but as $0\\degree C$ is outside the data range this is unreliable extrapolation."
    }
  },
  {
    "id": "al.y1.stats.regression.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "mean-point"
    ],
    "questionText": "For $7$ students, $x$ is the number of practice papers completed and $y$ is the score (out of $80$) in a final exam. The data give $\\Sigma x = 28$, $\\Sigma y = 406$, $\\Sigma xy = 1666$ and $\\Sigma x^2 = 140$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We are building a straight-line model, and since only raw sums are given we must first construct $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two means",
          "workingLatex": "\\bar{x} = \\dfrac{28}{7} = 4, \\qquad \\bar{y} = \\dfrac{406}{7} = 58",
          "explanation": "Dividing each total by $n = 7$ gives the mean number of papers and the mean score.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the formula for S_xx",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ summarises how spread out the numbers of papers are about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 140 - \\dfrac{28^2}{7} = 140 - 112 = 28",
          "explanation": "Subtracting the correction term $112$ from $\\Sigma x^2$ gives the variation in practice papers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the formula for S_xy",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{(\\Sigma x)(\\Sigma y)}{n}",
          "explanation": "$S_{xy}$ measures whether doing more papers goes together with higher scores.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 1666 - \\dfrac{28 \\times 406}{7} = 1666 - 1624 = 42",
          "explanation": "The positive value confirms a positive association between papers and scores.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{42}{28} = 1.5",
          "explanation": "Dividing the joint variation by the spread of $x$ gives a clean gradient of $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through $(\\bar{x}, \\bar{y})$, so this gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the intercept",
          "workingLatex": "a = 58 - 1.5 \\times 4 = 58 - 6 = 52",
          "explanation": "Substituting the means and gradient gives an intercept of $52$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 52 + 1.5x",
          "explanation": "Putting the pieces together gives the model for exam score in terms of practice papers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the mean point",
          "workingLatex": "52 + 1.5 \\times 4 = 52 + 6 = 58 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 4$ returns $\\bar{y} = 58$, confirming the line passes through the mean point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.5",
          "explanation": "Each extra practice paper is associated with about $1.5$ more marks in the final exam, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 52 + 1.5x$"
    }
  },
  {
    "id": "al.y1.stats.regression.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "summary-statistics",
      "business"
    ],
    "questionText": "A shop studies the link between weekly advertising spend $x$ (in $\\pounds00$) and weekly sales $y$ (in $\\pounds000$). The summary statistics are $S_{xx} = 25$, $S_{xy} = 40$, $\\bar{x} = 4$ and $\\bar{y} = 30$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The model is a straight line, so we only need to find the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient measures how advertising spend and sales vary together relative to the variation in spend alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{40}{25} = 1.6",
          "explanation": "The given sums give a clean gradient of $1.6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "Since the line passes through the mean point $(\\bar{x}, \\bar{y})$, rearranging gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 30 - 1.6 \\times 4",
          "explanation": "We insert $\\bar{x} = 4$, $\\bar{y} = 30$ and the gradient just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 30 - 6.4 = 23.6",
          "explanation": "This is the sales the model predicts with no advertising ($x = 0$): a baseline of $\\pounds 23600$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 23.6 + 1.6x",
          "explanation": "Combining intercept and gradient gives the completed sales model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the mean point",
          "workingLatex": "23.6 + 1.6 \\times 4 = 23.6 + 6.4 = 30 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 4$ returns $\\bar{y} = 30$, confirming the line passes through $(\\bar{x}, \\bar{y})$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the gradient in context",
          "workingLatex": "b = 1.6",
          "explanation": "Each extra $\\pounds 100$ of advertising is associated with about $\\pounds 1600$ more sales, on average (since $x$ is in $\\pounds00$ and $y$ in $\\pounds000$).",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 23.6 + 1.6x$"
    }
  },
  {
    "id": "al.y1.stats.regression.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "negative-correlation"
    ],
    "questionText": "For $9$ houses of similar size, $x$ is the distance from the city centre (km) and $y$ is the selling price (in $\\pounds000$). The data give $\\Sigma x = 45$, $\\Sigma y = 2700$, $\\Sigma xy = 13350$ and $\\Sigma x^2 = 285$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 5.8,
          "y": 299.7
        },
        {
          "x": 4.2,
          "y": 300.3
        },
        {
          "x": 6.7,
          "y": 294.5
        },
        {
          "x": 3.3,
          "y": 305.5
        },
        {
          "x": 7.5,
          "y": 295.7
        },
        {
          "x": 2.5,
          "y": 304.3
        },
        {
          "x": 8.4,
          "y": 292.9
        },
        {
          "x": 1.6,
          "y": 307.1
        },
        {
          "x": 5,
          "y": 300
        }
      ],
      "line": {
        "a": 312.5,
        "b": -2.5
      },
      "xAxisLabel": "distance from centre (km)",
      "yAxisLabel": "price (\\pounds000)",
      "caption": "House price against distance from the city centre.",
      "alt": "Scatter of ten points falling steadily from upper left to lower right, with a downward-sloping least-squares line through them."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We are building a straight-line model; because only raw sums are given, we must first construct $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two means",
          "workingLatex": "\\bar{x} = \\dfrac{45}{9} = 5, \\qquad \\bar{y} = \\dfrac{2700}{9} = 300",
          "explanation": "Dividing each total by $n = 9$ gives the mean distance and the mean price.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the formula for S_xx",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the distances are about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 285 - \\dfrac{45^2}{9} = 285 - 225 = 60",
          "explanation": "Removing the correction term $225$ leaves the variation in distance from the centre.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the formula for S_xy",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{(\\Sigma x)(\\Sigma y)}{n}",
          "explanation": "$S_{xy}$ measures how distance and price vary together; here we expect it to be negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 13350 - \\dfrac{45 \\times 2700}{9} = 13350 - 13500 = -150",
          "explanation": "The negative value confirms that houses further out tend to be cheaper.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{-150}{60} = -2.5",
          "explanation": "A negative gradient matches the downward trend seen in the scatter.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through $(\\bar{x}, \\bar{y})$, so this gives the intercept once $b$ is known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the intercept",
          "workingLatex": "a = 300 - (-2.5) \\times 5 = 300 + 12.5 = 312.5",
          "explanation": "Subtracting a negative adds, so the intercept rises to $312.5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 312.5 - 2.5x",
          "explanation": "Assembling the pieces gives the model for price in terms of distance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the mean point",
          "workingLatex": "312.5 - 2.5 \\times 5 = 312.5 - 12.5 = 300 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 5$ returns $\\bar{y} = 300$, confirming the line passes through the mean point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the gradient",
          "workingLatex": "b = -2.5",
          "explanation": "Each extra kilometre from the centre is associated with about $\\pounds 2500$ less on the price, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 312.5 - 2.5x$ (with $y$ in $\\pounds000$)"
    }
  },
  {
    "id": "al.y1.stats.regression.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "summary-statistics",
      "negative-correlation"
    ],
    "questionText": "A dealer records the age $x$ (years) and value $y$ (in $\\pounds000$) of a model of used car. The summary statistics are $S_{xx} = 40$, $S_{xy} = -34$, $\\bar{x} = 6$ and $\\bar{y} = 9$. Find the equation of the least-squares regression line of $y$ on $x$ and interpret the gradient.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1,
          "y": 13.4
        },
        {
          "x": 2,
          "y": 12.2
        },
        {
          "x": 3,
          "y": 11.7
        },
        {
          "x": 4,
          "y": 10.5
        },
        {
          "x": 5,
          "y": 10
        },
        {
          "x": 6,
          "y": 8.9
        },
        {
          "x": 7,
          "y": 8.3
        },
        {
          "x": 8,
          "y": 7.1
        },
        {
          "x": 9,
          "y": 6.6
        },
        {
          "x": 11,
          "y": 4.6
        }
      ],
      "line": {
        "a": 14.1,
        "b": -0.85
      },
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds000)",
      "caption": "Used-car value against age.",
      "alt": "Scatter of ten points falling from upper left to lower right, with a downward-sloping least-squares line through them."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The model is a straight line, so we need only the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how age and value vary together against how much age varies alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{-34}{40} = -0.85",
          "explanation": "The negative $S_{xy}$ gives a negative gradient, matching the downward trend in the scatter.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through the mean point $(\\bar{x}, \\bar{y})$, so this equation gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the means",
          "workingLatex": "a = 9 - (-0.85) \\times 6",
          "explanation": "We substitute $\\bar{x} = 6$, $\\bar{y} = 9$ and the gradient just found, taking care with the negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 9 + 5.1 = 14.1",
          "explanation": "Subtracting a negative adds, so the intercept is $14.1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the regression line",
          "workingLatex": "y = 14.1 - 0.85x",
          "explanation": "Combining intercept and gradient gives the model for value in terms of age.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the mean point",
          "workingLatex": "14.1 - 0.85 \\times 6 = 14.1 - 5.1 = 9 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 6$ returns $\\bar{y} = 9$, confirming the line passes through $(\\bar{x}, \\bar{y})$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the gradient in context",
          "workingLatex": "b = -0.85",
          "explanation": "Each extra year of age is associated with about $\\pounds 850$ less value, on average (since $y$ is measured in $\\pounds000$).",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 14.1 - 0.85x$. The gradient $-0.85$ means the car loses about $\\pounds 850$ of value per year of age."
    }
  },
  {
    "id": "al.y1.stats.regression.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "weather"
    ],
    "questionText": "On $8$ days a shop records the daily rainfall $x$ (mm) and the number of umbrellas sold $y$. The data give $\\Sigma x = 64$, $\\Sigma y = 200$, $\\Sigma xy = 1680$ and $\\Sigma x^2 = 576$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We want a straight-line model, but only raw sums are given, so we must first build $S_{xx}$ and $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two means",
          "workingLatex": "\\bar{x} = \\dfrac{64}{8} = 8, \\qquad \\bar{y} = \\dfrac{200}{8} = 25",
          "explanation": "Dividing each total by $n = 8$ gives the mean rainfall and mean umbrellas sold.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the formula for S_xx",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ captures how spread out the rainfall figures are about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 576 - \\dfrac{64^2}{8} = 576 - 512 = 64",
          "explanation": "Removing the correction term $512$ from $\\Sigma x^2$ leaves the variation in rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the formula for S_xy",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{(\\Sigma x)(\\Sigma y)}{n}",
          "explanation": "$S_{xy}$ measures whether wetter days go together with more umbrella sales.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 1680 - \\dfrac{64 \\times 200}{8} = 1680 - 1600 = 80",
          "explanation": "The positive result confirms that more rain tends to bring more sales.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{80}{64} = 1.25",
          "explanation": "Dividing the joint variation by the spread of rainfall gives a clean gradient of $1.25$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the intercept formula",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through $(\\bar{x}, \\bar{y})$, so this gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the intercept",
          "workingLatex": "a = 25 - 1.25 \\times 8 = 25 - 10 = 15",
          "explanation": "Substituting the means and gradient gives an intercept of $15$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the regression line",
          "workingLatex": "y = 15 + 1.25x",
          "explanation": "Assembling the pieces gives the model for umbrellas sold in terms of rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the mean point",
          "workingLatex": "15 + 1.25 \\times 8 = 15 + 10 = 25 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 8$ returns $\\bar{y} = 25$, confirming the line passes through the mean point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.25",
          "explanation": "Each extra millimetre of rainfall is associated with about $1.25$ more umbrellas sold, on average.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 15 + 1.25x$"
    }
  },
  {
    "id": "al.y1.stats.regression.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "interpolation"
    ],
    "questionText": "A gardener records the amount of fertiliser $x$ (in grams) given to each of $8$ tomato plants and the height $y$ (in cm) reached after six weeks. The amount of fertiliser used ranged from $5$ g to $30$ g. The summary statistics are $S_{xx}=50$, $S_{xy}=40$, $\\bar{x}=15$ and $\\bar{y}=32$. Find the equation of the least-squares regression line of $y$ on $x$, and use it to estimate the height of a plant given $18$ g of fertiliser, commenting on the reliability of your estimate.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 5,
          "y": 25
        },
        {
          "x": 8,
          "y": 26
        },
        {
          "x": 12,
          "y": 30
        },
        {
          "x": 15,
          "y": 31
        },
        {
          "x": 20,
          "y": 37
        },
        {
          "x": 23,
          "y": 38
        },
        {
          "x": 27,
          "y": 42
        },
        {
          "x": 30,
          "y": 44
        }
      ],
      "line": {
        "a": 20,
        "b": 0.8
      },
      "predict": {
        "x": 18,
        "y": 34.4,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "fertiliser (g)",
      "yAxisLabel": "height (cm)",
      "caption": "Plant height against fertiliser, with the least-squares line",
      "alt": "Scatter of eight points rising steadily from bottom-left to top-right, hugging a straight least-squares line, with a dashed read-off at x equals 18 grams giving a predicted height of about 34.4 cm."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The least-squares line of $y$ on $x$ is a straight line, so the whole task reduces to finding two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how $x$ and $y$ vary together, measured by $S_{xy}$, with how much $x$ varies on its own, measured by $S_{xx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{40}{50} = 0.8",
          "explanation": "Putting in the given values gives the gradient straight away as a clean decimal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line always passes through the mean point $(\\bar{x}, \\bar{y})$, so rearranging $y = a + bx$ at that point isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 32 - 0.8 \\times 15 = 32 - 12 = 20",
          "explanation": "This is the height the model predicts at $x = 0$ g of fertiliser — the baseline before any fertiliser is taken into account.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the regression line",
          "workingLatex": "y = 20 + 0.8x",
          "explanation": "Combining the intercept and gradient gives the full model relating height to fertiliser.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check it passes through the mean point",
          "workingLatex": "20 + 0.8 \\times 15 = 20 + 12 = 32 = \\bar{y}",
          "explanation": "A good check: substituting $\\bar{x} = 15$ must return $\\bar{y} = 32$. It does, which confirms $a$ and $b$ are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.8",
          "explanation": "Each extra gram of fertiliser is associated with about $0.8$ cm more height, since the gradient is the change in $y$ (cm) per unit change in $x$ (g).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the required value of x",
          "workingLatex": "\\hat{y} = 20 + 0.8 \\times 18",
          "explanation": "To estimate the height for $18$ g we simply put $x = 18$ into the fitted line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the prediction",
          "workingLatex": "\\hat{y} = 20 + 14.4 = 34.4",
          "explanation": "The model predicts a height of about $34.4$ cm for a plant given $18$ g of fertiliser.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on reliability",
          "workingLatex": "5 \\le 18 \\le 30",
          "explanation": "Because $x = 18$ g lies inside the data range $5$ g to $30$ g, this is interpolation, so the estimate is reliable — the line is supported by observed data around that point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 20 + 0.8x$; the predicted height at $18$ g is $\\hat{y} = 34.4$ cm. Since $18$ g lies within the data range ($5$ g to $30$ g) this is interpolation, so the estimate is reliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "extrapolation",
      "interpretation",
      "weather"
    ],
    "questionText": "At a seaside kiosk, the daily mean temperature $x$ (in $\\degree$C) and the number of cold drinks sold $y$ are recorded over $14$ summer days. The recorded temperatures ranged from $11\\degree$C to $24\\degree$C, and the least-squares regression line of $y$ on $x$ is $y = 30 + 6x$. Interpret the gradient and intercept in context, then use the line to predict sales when the temperature is $20\\degree$C and when it is $30\\degree$C, commenting on the reliability of each prediction.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 17.7,
          "y": 142.2
        },
        {
          "x": 16.3,
          "y": 121.8
        },
        {
          "x": 18.5,
          "y": 136.5
        },
        {
          "x": 15.5,
          "y": 127.5
        },
        {
          "x": 19.2,
          "y": 151.9
        },
        {
          "x": 14.8,
          "y": 112.1
        },
        {
          "x": 19.9,
          "y": 154.6
        },
        {
          "x": 14.1,
          "y": 109.4
        },
        {
          "x": 20.6,
          "y": 149.9
        },
        {
          "x": 13.4,
          "y": 114.1
        },
        {
          "x": 21.4,
          "y": 152.4
        },
        {
          "x": 12.6,
          "y": 111.6
        },
        {
          "x": 22.1,
          "y": 167.1
        },
        {
          "x": 11.9,
          "y": 96.9
        }
      ],
      "line": {
        "a": 30,
        "b": 6
      },
      "predict": {
        "x": 30,
        "y": 210,
        "label": "\\hat{y}"
      },
      "xMax": 32,
      "yMax": 230,
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold-drink sales against daily mean temperature",
      "alt": "Scatter of eight points rising left to right along a straight least-squares line, with a dashed read-off at x equals 30 degrees Celsius — well beyond the plotted data — giving a predicted 210 drinks."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{temperature}, \\quad y = \\text{drinks sold}",
          "explanation": "Temperature is the explanatory variable $x$ (we treat it as the driver), and the number of drinks is the response variable $y$ (what we are predicting).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the gradient and intercept",
          "workingLatex": "a = 30, \\quad b = 6",
          "explanation": "Comparing $y = 30 + 6x$ with $y = a + bx$ shows the intercept is $30$ and the gradient is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the gradient",
          "workingLatex": "b = 6",
          "explanation": "Each $1\\degree$C rise in temperature is associated with about $6$ more cold drinks sold, since the gradient is the change in $y$ per unit rise in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the intercept",
          "workingLatex": "a = 30",
          "explanation": "The model predicts $30$ drinks at $0\\degree$C, but $0\\degree$C is far below the observed range, so this figure is an extrapolation and should be treated with caution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Predict sales at 20 degrees",
          "workingLatex": "\\hat{y} = 30 + 6 \\times 20",
          "explanation": "Substitute $x = 20$ into the line to estimate sales on a $20\\degree$C day.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the first prediction",
          "workingLatex": "\\hat{y} = 30 + 120 = 150",
          "explanation": "The model predicts about $150$ drinks at $20\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Comment on the first prediction",
          "workingLatex": "11 \\le 20 \\le 24",
          "explanation": "Since $20\\degree$C lies inside the data range $11\\degree$C to $24\\degree$C, this is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Predict sales at 30 degrees",
          "workingLatex": "\\hat{y} = 30 + 6 \\times 30 = 30 + 180 = 210",
          "explanation": "Substituting $x = 30$ gives a predicted $210$ drinks.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on the second prediction",
          "workingLatex": "30 > 24",
          "explanation": "Since $30\\degree$C lies outside the data range, this is extrapolation and the estimate is unreliable — the linear pattern is not guaranteed to continue, and factors such as kiosk capacity may cap real sales.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient: each $1\\degree$C rise adds about $6$ drinks. Intercept: $30$ drinks predicted at $0\\degree$C (outside the data, so not meaningful). At $20\\degree$C, $\\hat{y} = 150$ (interpolation, reliable). At $30\\degree$C, $\\hat{y} = 210$ (extrapolation, unreliable)."
    }
  },
  {
    "id": "al.y1.stats.regression.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "rearranging",
      "negative-correlation"
    ],
    "questionText": "A dealership records the age $x$ (in years) and the second-hand value $y$ (in thousands of pounds) of a model of car. The ages ranged from $2$ to $9$ years, and the least-squares regression line of $y$ on $x$ is $y = 16 - 1.5x$. Interpret the gradient and intercept in context, then find the age at which the model predicts a value of $\\pounds 4000$, and comment on the reliability of that estimate.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2,
          "y": 13.2
        },
        {
          "x": 3,
          "y": 11
        },
        {
          "x": 4,
          "y": 10.3
        },
        {
          "x": 5,
          "y": 8
        },
        {
          "x": 6,
          "y": 7.2
        },
        {
          "x": 7,
          "y": 5.4
        },
        {
          "x": 8,
          "y": 4.1
        },
        {
          "x": 9,
          "y": 2.5
        }
      ],
      "line": {
        "a": 16,
        "b": -1.5
      },
      "predict": {
        "x": 8,
        "y": 4,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds000)",
      "caption": "Car value against age, with the least-squares line",
      "alt": "Scatter of eight points falling from top-left to bottom-right along a straight least-squares line, with a dashed read-off showing that a value of 4 thousand pounds corresponds to an age of 8 years."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the line and units",
          "workingLatex": "y = 16 - 1.5x",
          "explanation": "Here $x$ is the age in years and $y$ is the value in thousands of pounds, so a value of $y = 1$ means $\\pounds 1000$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the gradient",
          "workingLatex": "b = -1.5",
          "explanation": "Each extra year of age is associated with a fall of $1.5$ thousand pounds, that is about $\\pounds 1500$ less value per year — the negative sign shows value drops as the car ages.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the intercept",
          "workingLatex": "a = 16",
          "explanation": "At age $0$ the model predicts $16$ thousand pounds, i.e. $\\pounds 16000$ when new. Age $0$ is just outside the data, so treat this as an approximate starting value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Translate the target value",
          "workingLatex": "\\pounds 4000 = 4 \\ (\\text{thousand})",
          "explanation": "Because $y$ is measured in thousands of pounds, a value of $\\pounds 4000$ corresponds to $y = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the equation",
          "workingLatex": "4 = 16 - 1.5x",
          "explanation": "We now want the age $x$ that makes the predicted value equal to $4$, so we set the line equal to $4$ and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the x-term",
          "workingLatex": "1.5x = 16 - 4 = 12",
          "explanation": "Rearrange so the term in $x$ is on its own: add $1.5x$ and subtract $4$ from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x = \\dfrac{12}{1.5} = 8",
          "explanation": "Dividing by the gradient's size gives the age at which the value is predicted to be $\\pounds 4000$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by substituting back",
          "workingLatex": "16 - 1.5 \\times 8 = 16 - 12 = 4",
          "explanation": "Putting $x = 8$ back into the line returns $y = 4$, confirming the solution is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on reliability",
          "workingLatex": "2 \\le 8 \\le 9",
          "explanation": "Since $x = 8$ years lies inside the data range $2$ to $9$ years, this is interpolation, so the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient: value falls about $\\pounds 1500$ per year of age. Intercept: about $\\pounds 16000$ when new. The value is predicted to reach $\\pounds 4000$ at $x = 8$ years; since $8$ lies within the data range ($2$ to $9$ years) this is interpolation, so the estimate is reliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "raw-sums",
      "prediction"
    ],
    "questionText": "For a group of $10$ students, the number of hours of revision $x$ and the mark $y$ (as a percentage) scored in a test are recorded. The revision times ranged from $1$ to $9$ hours. The raw totals are $\\Sigma x = 50$, $\\Sigma y = 600$, $\\Sigma x^2 = 310$ and $\\Sigma xy = 3180$. Find the equation of the least-squares regression line of $y$ on $x$, interpret its gradient, and use it to predict the mark of a student who revises for $6$ hours, commenting on reliability.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We are aiming for the straight-line model, so we need the gradient $b$ and intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{50}{10} = 5, \\quad \\bar{y} = \\dfrac{600}{10} = 60",
          "explanation": "The means come straight from the totals divided by $n = 10$; we will need them for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the S_xx formula",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it corrects the sum of squares by removing the effect of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate S_xx",
          "workingLatex": "S_{xx} = 310 - \\dfrac{50^2}{10} = 310 - 250 = 60",
          "explanation": "Substituting the totals gives the spread of the revision hours.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the S_xy formula",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{(\\Sigma x)(\\Sigma y)}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, again corrected for their means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate S_xy",
          "workingLatex": "S_{xy} = 3180 - \\dfrac{50 \\times 600}{10} = 3180 - 3000 = 180",
          "explanation": "This positive value confirms that more revision tends to go with higher marks.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{180}{60} = 3",
          "explanation": "The gradient is the ratio of joint variation to the spread of $x$, giving a clean value of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 60 - 3 \\times 5 = 45",
          "explanation": "Using the fact that the line passes through $(\\bar{x}, \\bar{y})$ gives the intercept directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the regression line",
          "workingLatex": "y = 45 + 3x",
          "explanation": "Combining the two values gives the fitted line relating mark to hours of revision.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient",
          "workingLatex": "b = 3",
          "explanation": "Each extra hour of revision is associated with about $3$ more percentage points, since the gradient is the change in mark per hour.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict the mark for 6 hours",
          "workingLatex": "\\hat{y} = 45 + 3 \\times 6 = 45 + 18 = 63",
          "explanation": "Substituting $x = 6$ into the line estimates the mark of a student who revises for $6$ hours as about $63\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on reliability",
          "workingLatex": "1 \\le 6 \\le 9",
          "explanation": "Since $6$ hours lies inside the data range $1$ to $9$ hours, this is interpolation, so the prediction is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 45 + 3x$; the gradient means about $3$ extra marks per hour of revision. The predicted mark for $6$ hours is $\\hat{y} = 63\\%$; since $6$ lies within the data range ($1$ to $9$ hours) this is interpolation, so the estimate is reliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "extrapolation",
      "weather"
    ],
    "questionText": "On $12$ days, the daily total sunshine $x$ (in hours) and the attendance $y$ at an outdoor lido are recorded. The recorded sunshine ranged from $2$ to $11$ hours, and the least-squares regression line of $y$ on $x$ is $y = 60 + 45x$. Interpret the gradient, then use the line to predict attendance on a day with $8$ hours of sunshine and on a day with $14$ hours of sunshine, commenting on the reliability of each estimate.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 7.6,
          "y": 431.9
        },
        {
          "x": 6.4,
          "y": 318.1
        },
        {
          "x": 8.1,
          "y": 402.2
        },
        {
          "x": 5.9,
          "y": 347.8
        },
        {
          "x": 8.7,
          "y": 485.2
        },
        {
          "x": 5.3,
          "y": 264.8
        },
        {
          "x": 9.3,
          "y": 504.6
        },
        {
          "x": 4.7,
          "y": 245.4
        },
        {
          "x": 9.8,
          "y": 482.5
        },
        {
          "x": 4.2,
          "y": 267.5
        },
        {
          "x": 10.4,
          "y": 498.1
        },
        {
          "x": 3.6,
          "y": 251.9
        }
      ],
      "line": {
        "a": 60,
        "b": 45
      },
      "predict": {
        "x": 14,
        "y": 690,
        "label": "\\hat{y}"
      },
      "xMax": 15,
      "yMax": 720,
      "xAxisLabel": "sunshine (hours)",
      "yAxisLabel": "attendance (people)",
      "caption": "Lido attendance against daily total sunshine",
      "alt": "Scatter of eight points rising steeply left to right along a straight least-squares line, with a dashed read-off at x equals 14 hours — beyond the plotted data — giving a predicted attendance of 690 people."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{sunshine (hours)}, \\quad y = \\text{attendance}",
          "explanation": "Sunshine is the explanatory variable $x$ and attendance is the response variable $y$ we want to predict.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the gradient",
          "workingLatex": "b = 45",
          "explanation": "Comparing $y = 60 + 45x$ with $y = a + bx$ gives the gradient as $45$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the gradient",
          "workingLatex": "b = 45",
          "explanation": "Each extra hour of sunshine is associated with about $45$ more visitors, since the gradient is the change in attendance per hour of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Predict attendance for 8 hours",
          "workingLatex": "\\hat{y} = 60 + 45 \\times 8",
          "explanation": "Substitute $x = 8$ into the line to estimate attendance on an $8$-hour day.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the first prediction",
          "workingLatex": "\\hat{y} = 60 + 360 = 420",
          "explanation": "The model predicts about $420$ visitors for $8$ hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment on the first prediction",
          "workingLatex": "2 \\le 8 \\le 11",
          "explanation": "Since $8$ hours lies inside the data range $2$ to $11$ hours, this is interpolation, so the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Predict attendance for 14 hours",
          "workingLatex": "\\hat{y} = 60 + 45 \\times 14",
          "explanation": "Substitute $x = 14$ to estimate attendance on a $14$-hour day.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second prediction",
          "workingLatex": "\\hat{y} = 60 + 630 = 690",
          "explanation": "The model gives $690$ visitors, but we must check whether that input is trustworthy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on the second prediction",
          "workingLatex": "14 > 11",
          "explanation": "Since $14$ hours lies outside the data range, this is extrapolation, so the estimate is unreliable — the linear trend may not continue, and the lido's capacity could cap real attendance.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient: about $45$ more visitors per extra hour of sunshine. At $8$ hours, $\\hat{y} = 420$ (interpolation, reliable). At $14$ hours, $\\hat{y} = 690$ (extrapolation, unreliable)."
    }
  },
  {
    "id": "al.y1.stats.regression.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "interpretation",
      "rearranging"
    ],
    "questionText": "A company records its weekly advertising spend $x$ (in hundreds of pounds) and weekly sales $y$ (in thousands of pounds) over several weeks. The advertising spend ranged from $\\pounds 300$ to $\\pounds 1400$. The summary statistics are $S_{xx}=20$, $S_{xy}=70$, $\\bar{x}=8$ and $\\bar{y}=50$. Find the least-squares regression line of $y$ on $x$, interpret the gradient in context, and find the advertising spend predicted to produce sales of $\\pounds 57000$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We are looking for the straight-line model, so we need the gradient $b$ and intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how spend and sales vary together, $S_{xy}$, with how much spend varies on its own, $S_{xx}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{70}{20} = 3.5",
          "explanation": "Substituting the given values gives a clean gradient of $3.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through $(\\bar{x}, \\bar{y})$, so this rearrangement gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 50 - 3.5 \\times 8 = 50 - 28 = 22",
          "explanation": "This gives the intercept; it represents predicted sales of $22$ (thousand pounds) at zero advertising spend.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the regression line",
          "workingLatex": "y = 22 + 3.5x",
          "explanation": "Combining the values gives the fitted line relating sales to advertising spend.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the mean point",
          "workingLatex": "22 + 3.5 \\times 8 = 22 + 28 = 50 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 8$ returns $\\bar{y} = 50$, confirming the line is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the gradient with units",
          "workingLatex": "b = 3.5",
          "explanation": "Since $x$ is in hundreds of pounds and $y$ in thousands, each extra $\\pounds 100$ of advertising is associated with about $\\pounds 3500$ more sales.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Translate the target sales",
          "workingLatex": "\\pounds 57000 = 57 \\ (\\text{thousand})",
          "explanation": "Because $y$ is in thousands of pounds, sales of $\\pounds 57000$ correspond to $y = 57$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the required spend",
          "workingLatex": "57 = 22 + 3.5x \\ \\Rightarrow \\ 3.5x = 35 \\ \\Rightarrow \\ x = 10",
          "explanation": "Setting the line equal to $57$ and rearranging gives $x = 10$; since $x$ is in hundreds of pounds this means a spend of $\\pounds 1000$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on reliability",
          "workingLatex": "3 \\le 10 \\le 14",
          "explanation": "The spend $x = 10$ (i.e. $\\pounds 1000$) lies inside the data range $\\pounds 300$ to $\\pounds 1400$, so this is interpolation and the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 22 + 3.5x$; each extra $\\pounds 100$ of advertising is associated with about $\\pounds 3500$ more sales. Sales of $\\pounds 57000$ are predicted at $x = 10$, i.e. a spend of $\\pounds 1000$; this lies within the data range, so the estimate is reliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpretation",
      "rearranging"
    ],
    "questionText": "A biologist studies how the air temperature $x$ (in $\\degree$C) affects the number of chirps per minute $y$ made by a species of cricket. Temperatures ranged from $15\\degree$C to $32\\degree$C, and the least-squares regression line of $y$ on $x$ is $y = -40 + 7x$. Interpret the gradient and intercept in context, predict the chirp rate at $28\\degree$C, and find the temperature at which the model predicts $100$ chirps per minute, commenting on reliability.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 15,
          "y": 62
        },
        {
          "x": 18,
          "y": 90
        },
        {
          "x": 21,
          "y": 104
        },
        {
          "x": 24,
          "y": 131
        },
        {
          "x": 26,
          "y": 138
        },
        {
          "x": 28,
          "y": 158
        },
        {
          "x": 30,
          "y": 167
        },
        {
          "x": 32,
          "y": 186
        }
      ],
      "line": {
        "a": -40,
        "b": 7
      },
      "predict": {
        "x": 28,
        "y": 156,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "chirps per minute",
      "caption": "Cricket chirp rate against air temperature",
      "alt": "Scatter of eight points rising left to right along a straight least-squares line, with a dashed read-off at x equals 28 degrees Celsius giving a predicted chirp rate of about 156 per minute."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{temperature}, \\quad y = \\text{chirps per minute}",
          "explanation": "Temperature is the explanatory variable $x$ and the chirp rate is the response variable $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the gradient",
          "workingLatex": "b = 7",
          "explanation": "Each $1\\degree$C rise in temperature is associated with about $7$ more chirps per minute, since the gradient is the change in $y$ per unit rise in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the intercept",
          "workingLatex": "a = -40",
          "explanation": "At $0\\degree$C the model predicts $-40$ chirps, which is impossible. This just shows $0\\degree$C is far outside the data range, so the intercept has no real meaning here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Predict the chirp rate at 28 degrees",
          "workingLatex": "\\hat{y} = -40 + 7 \\times 28",
          "explanation": "Substitute $x = 28$ into the line to estimate the chirp rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the prediction",
          "workingLatex": "\\hat{y} = -40 + 196 = 156",
          "explanation": "The model predicts about $156$ chirps per minute at $28\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment on the prediction",
          "workingLatex": "15 \\le 28 \\le 32",
          "explanation": "Since $28\\degree$C lies inside the data range $15\\degree$C to $32\\degree$C, this is interpolation, so the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the target chirp rate",
          "workingLatex": "100 = -40 + 7x",
          "explanation": "To find the temperature giving $100$ chirps, set the line equal to $100$ and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the temperature",
          "workingLatex": "7x = 140 \\ \\Rightarrow \\ x = 20",
          "explanation": "Adding $40$ to both sides gives $7x = 140$, so $x = 20\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check and comment on reliability",
          "workingLatex": "-40 + 7 \\times 20 = 100, \\quad 15 \\le 20 \\le 32",
          "explanation": "Substituting back confirms $y = 100$, and $20\\degree$C lies within the data range, so this estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "Gradient: about $7$ more chirps per $\\degree$C. Intercept: $-40$ at $0\\degree$C is impossible, reflecting extrapolation far below the data. At $28\\degree$C, $\\hat{y} = 156$ chirps per minute (interpolation, reliable). The model predicts $100$ chirps at $x = 20\\degree$C, which is inside the data range, so reliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "interpretation",
      "extrapolation"
    ],
    "questionText": "A taxi firm records the distance $x$ (in km) and the fare $y$ (in $\\pounds$) for $15$ journeys. The distances ranged from $3$ km to $18$ km. The summary statistics are $S_{xx}=80$, $S_{xy}=100$, $\\bar{x}=10$ and $\\bar{y}=17$. Find the least-squares regression line of $y$ on $x$, interpret both the gradient and the intercept in context, and predict the fare for a $12$ km journey and for a $25$ km journey, commenting on the reliability of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$ to write down the fitted line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{100}{80} = 1.25",
          "explanation": "The gradient is the ratio of joint variation to the spread of distance, giving $1.25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 17 - 1.25 \\times 10 = 17 - 12.5 = 4.5",
          "explanation": "Using the mean point $(\\bar{x}, \\bar{y})$ gives the intercept directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the regression line",
          "workingLatex": "y = 4.5 + 1.25x",
          "explanation": "Combining the values gives the fitted line relating fare to distance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the mean point",
          "workingLatex": "4.5 + 1.25 \\times 10 = 4.5 + 12.5 = 17 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 10$ returns $\\bar{y} = 17$, confirming the line is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the intercept",
          "workingLatex": "a = 4.5",
          "explanation": "The intercept $\\pounds 4.50$ is the fare predicted at $0$ km — a fixed charge such as a booking or flag-fall fee before any distance is travelled.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.25",
          "explanation": "Each extra kilometre adds about $\\pounds 1.25$ to the fare, since the gradient is the change in fare per km.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Predict the fare for 12 km",
          "workingLatex": "\\hat{y} = 4.5 + 1.25 \\times 12 = 4.5 + 15 = 19.5",
          "explanation": "Substituting $x = 12$ gives a predicted fare of $\\pounds 19.50$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on the first prediction",
          "workingLatex": "3 \\le 12 \\le 18",
          "explanation": "Since $12$ km lies inside the data range $3$ km to $18$ km, this is interpolation, so the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Predict the fare for 25 km",
          "workingLatex": "\\hat{y} = 4.5 + 1.25 \\times 25 = 4.5 + 31.25 = 35.75",
          "explanation": "Substituting $x = 25$ gives a predicted fare of $\\pounds 35.75$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the second prediction",
          "workingLatex": "25 > 18",
          "explanation": "Since $25$ km lies outside the data range, this is extrapolation, so the estimate is unreliable — the per-km pattern may not hold over longer journeys.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 4.5 + 1.25x$. Intercept: a fixed charge of $\\pounds 4.50$; gradient: about $\\pounds 1.25$ per km. Fare for $12$ km: $\\hat{y} = \\pounds 19.50$ (interpolation, reliable). Fare for $25$ km: $\\hat{y} = \\pounds 35.75$ (extrapolation, unreliable)."
    }
  },
  {
    "id": "al.y1.stats.regression.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "extrapolation"
    ],
    "questionText": "A researcher measures the age $x$ (in years) and the trunk circumference $y$ (in cm) of $12$ oak trees. The ages ranged from $8$ to $35$ years. The summary statistics are $S_{xx}=160$, $S_{xy}=240$, $\\bar{x}=20$ and $\\bar{y}=90$. Find the least-squares regression line of $y$ on $x$, interpret the gradient, predict the circumference of a $25$-year-old tree, and find the age at which the model predicts a circumference of $120$ cm, commenting on the reliability of each result.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$ to write the fitted line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{240}{160} = 1.5",
          "explanation": "The gradient is the ratio of joint variation to the spread of age, giving a clean value of $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 90 - 1.5 \\times 20 = 90 - 30 = 60",
          "explanation": "Using the mean point $(\\bar{x}, \\bar{y})$ gives the intercept directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the regression line",
          "workingLatex": "y = 60 + 1.5x",
          "explanation": "Combining the values gives the fitted line relating circumference to age.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the mean point",
          "workingLatex": "60 + 1.5 \\times 20 = 60 + 30 = 90 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 20$ returns $\\bar{y} = 90$, confirming the line is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.5",
          "explanation": "Each extra year of age is associated with about $1.5$ cm more trunk circumference, since the gradient is the change in $y$ (cm) per year.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Predict the circumference at 25 years",
          "workingLatex": "\\hat{y} = 60 + 1.5 \\times 25 = 60 + 37.5 = 97.5",
          "explanation": "Substituting $x = 25$ gives a predicted circumference of about $97.5$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on the prediction",
          "workingLatex": "8 \\le 25 \\le 35",
          "explanation": "Since $25$ years lies inside the data range $8$ to $35$ years, this is interpolation, so the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the target circumference",
          "workingLatex": "120 = 60 + 1.5x",
          "explanation": "To find the age giving a circumference of $120$ cm, set the line equal to $120$ and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the age",
          "workingLatex": "1.5x = 60 \\ \\Rightarrow \\ x = \\dfrac{60}{1.5} = 40",
          "explanation": "Subtracting $60$ and dividing by the gradient gives an age of $40$ years.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on reliability",
          "workingLatex": "40 > 35",
          "explanation": "Since $40$ years lies outside the data range $8$ to $35$ years, this is extrapolation, so the estimate is unreliable — the trend may not continue for older trees.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 60 + 1.5x$; each extra year adds about $1.5$ cm of circumference. At $25$ years, $\\hat{y} = 97.5$ cm (interpolation, reliable). A circumference of $120$ cm is predicted at $x = 40$ years, which is outside the data range ($8$ to $35$ years), so this is extrapolation and unreliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "weather",
      "explanatory-variable",
      "interpretation"
    ],
    "questionText": "On $11$ days last summer a large-data-set weather station recorded the daily mean temperature $x$ (in $\\degree C$) and the daily total sunshine $y$ (in hours). The summary statistics are $S_{xx}=200$, $S_{xy}=110$, $\\bar{x}=16$ and $\\bar{y}=6.2$. (a) State, with a reason, which is the explanatory variable. (b) Find the equation of the least-squares regression line of $y$ on $x$. (c) Interpret the gradient in this context.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 11,
          "y": 3.6
        },
        {
          "x": 12,
          "y": 3.7
        },
        {
          "x": 13,
          "y": 4.9
        },
        {
          "x": 14,
          "y": 4.8
        },
        {
          "x": 15,
          "y": 6
        },
        {
          "x": 16,
          "y": 6.1
        },
        {
          "x": 17,
          "y": 6.4
        },
        {
          "x": 18,
          "y": 7.6
        },
        {
          "x": 19,
          "y": 7.5
        },
        {
          "x": 20,
          "y": 8.6
        },
        {
          "x": 21,
          "y": 8.8
        }
      ],
      "line": {
        "a": -2.6,
        "b": 0.55
      },
      "xAxisLabel": "daily mean temperature (\\degree C)",
      "yAxisLabel": "daily total sunshine (hours)",
      "caption": "Temperature and sunshine on 11 summer days",
      "alt": "Scatter of daily total sunshine against daily mean temperature for 11 days; the points rise steadily from lower left to upper right showing strong positive correlation, with a least-squares line drawn through them."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the explanatory variable",
          "workingLatex": "x = \\text{temperature}, \\quad y = \\text{sunshine}",
          "explanation": "The explanatory (independent) variable is the one we use to predict the other. Here we are modelling the hours of sunshine from the temperature, so temperature is $x$ and sunshine is the response $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "The least-squares line of $y$ on $x$ is a straight line, so the whole task reduces to finding just two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how $x$ and $y$ vary together ($S_{xy}$) with how much $x$ varies on its own ($S_{xx}$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{110}{200}",
          "explanation": "Insert the given values $S_{xy}=110$ and $S_{xx}=200$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "b = 0.55",
          "explanation": "Dividing gives a clean gradient of $0.55$; it is positive, matching the up-and-right scatter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "Every least-squares line passes through the mean point $(\\bar{x},\\bar{y})$, so rearranging $y = a + bx$ at that point gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the means",
          "workingLatex": "a = 6.2 - 0.55 \\times 16",
          "explanation": "Put in $\\bar{y}=6.2$, $b=0.55$ and $\\bar{x}=16$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 6.2 - 8.8 = -2.6",
          "explanation": "Work out $0.55\\times16 = 8.8$ first, then subtract to get $a = -2.6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the regression line",
          "workingLatex": "y = -2.6 + 0.55x",
          "explanation": "Combining the intercept and gradient gives the full model.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.55",
          "explanation": "The gradient means each extra $1\\degree C$ of daily mean temperature is associated with about $0.55$ more hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sanity-check the intercept",
          "workingLatex": "a = -2.6",
          "explanation": "At $x = 0\\degree C$ the model predicts $-2.6$ hours of sunshine, which is impossible. This is a reminder that the line should not be trusted far outside the temperature range of the data.",
          "diagram": null
        }
      ],
      "finalAnswer": "Temperature is the explanatory variable. The line is $y = -2.6 + 0.55x$, and the gradient $0.55$ means each $1\\degree C$ rise in daily mean temperature is associated with about $0.55$ extra hours of sunshine."
    }
  },
  {
    "id": "al.y1.stats.regression.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "prediction",
      "interpolation",
      "extrapolation",
      "interpretation"
    ],
    "questionText": "A dealer records the age $x$ (in complete years) and the second-hand value $y$ (in $\\pounds 1000$s) of $9$ cars of the same model. The summary statistics give $S_{xx}=40$, $S_{xy}=-34$, $\\bar{x}=5$ and $\\bar{y}=8.2$. (a) Find the least-squares regression line of $y$ on $x$. (b) Use it to estimate the value of a car that is $3$ years old. (c) Explain why you would not use the line to estimate the value of a $12$-year-old car.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1,
          "y": 11.4
        },
        {
          "x": 2,
          "y": 11
        },
        {
          "x": 3,
          "y": 9.6
        },
        {
          "x": 4,
          "y": 9.3
        },
        {
          "x": 5,
          "y": 8
        },
        {
          "x": 6,
          "y": 7.6
        },
        {
          "x": 7,
          "y": 6.2
        },
        {
          "x": 8,
          "y": 5.9
        },
        {
          "x": 9,
          "y": 4.6
        }
      ],
      "line": {
        "a": 12.45,
        "b": -0.85
      },
      "predict": {
        "x": 3,
        "y": 9.9,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds 1000s)",
      "caption": "Value against age for 9 cars",
      "alt": "Scatter of second-hand value against age for 9 cars; the points fall steadily from upper left to lower right showing strong negative correlation, with a least-squares line and a highlighted prediction at 3 years."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We are after the least-squares line of value on age, so we need its gradient $b$ and intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the covariation of $x$ and $y$ divided by the variation of $x$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{-34}{40}",
          "explanation": "Insert $S_{xy}=-34$ and $S_{xx}=40$; the negative sign reflects value falling as age rises.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the gradient",
          "workingLatex": "b = -0.85",
          "explanation": "Dividing gives a clean gradient of $-0.85$, matching the down-and-right scatter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through $(\\bar{x},\\bar{y})$, so this rearrangement gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the means",
          "workingLatex": "a = 8.2 - (-0.85)\\times 5",
          "explanation": "Put in $\\bar{y}=8.2$, $b=-0.85$ and $\\bar{x}=5$; watch the double negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 8.2 + 4.25 = 12.45",
          "explanation": "Subtracting a negative adds: $-(-0.85)\\times 5 = +4.25$, so $a = 12.45$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the regression line",
          "workingLatex": "y = 12.45 - 0.85x",
          "explanation": "This is the full model for value in $\\pounds 1000$s against age in years.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Predict the value at 3 years",
          "workingLatex": "y = 12.45 - 0.85\\times 3 = 9.9",
          "explanation": "Substituting $x=3$ gives $y=9.9$, i.e. about $\\pounds 9900$. Since $3$ is inside the data range $1$ to $9$ years, this is interpolation and is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient",
          "workingLatex": "b = -0.85",
          "explanation": "Each extra year of age is associated with the value dropping by about $0.85\\times\\pounds 1000 = \\pounds 850$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Explain why 12 years is unreliable",
          "workingLatex": "12 > 9",
          "explanation": "An age of $12$ years lies outside the data range ($1$ to $9$ years), so estimating there is extrapolation. The straight-line trend may not continue that far, so the estimate would be unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 12.45 - 0.85x$. A $3$-year-old car is estimated at $y = 9.9$, about $\\pounds 9900$. A $12$-year-old car is outside the data range, so predicting there is extrapolation and unreliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "weather",
      "explanatory-variable",
      "interpretation",
      "intercept"
    ],
    "questionText": "For $10$ days a large-data-set weather station recorded the daily mean pressure $x$ (in hPa) and the daily total rainfall $y$ (in mm). The summary statistics are $S_{xx}=160$, $S_{xy}=-48$, $\\bar{x}=1012$ and $\\bar{y}=3.4$. (a) State, with a reason, which is the explanatory variable. (b) Find the regression line of $y$ on $x$. (c) Interpret the gradient. (d) Comment on the value of the intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the explanatory variable",
          "workingLatex": "x = \\text{pressure}, \\quad y = \\text{rainfall}",
          "explanation": "Low-pressure weather systems tend to bring rain, so it is natural to treat pressure as the driver: pressure is the explanatory variable $x$ and rainfall is the response $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$ of the least-squares line of rainfall on pressure.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient measures how rainfall and pressure vary together relative to how much pressure varies on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{-48}{160}",
          "explanation": "Insert $S_{xy}=-48$ and $S_{xx}=160$; a negative value is expected since higher pressure usually means less rain.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "b = -0.3",
          "explanation": "Dividing gives a clean gradient of $-0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through the mean point $(\\bar{x},\\bar{y})$, giving a direct route to $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the means",
          "workingLatex": "a = 3.4 - (-0.3)\\times 1012",
          "explanation": "Put in $\\bar{y}=3.4$, $b=-0.3$ and $\\bar{x}=1012$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 3.4 + 303.6 = 307",
          "explanation": "Subtracting the negative adds $0.3\\times 1012 = 303.6$, giving $a = 307$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the regression line",
          "workingLatex": "y = 307 - 0.3x",
          "explanation": "This is the full model for daily rainfall against daily mean pressure.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient",
          "workingLatex": "b = -0.3",
          "explanation": "Each $1$ hPa rise in daily mean pressure is associated with about $0.3$ mm less rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the intercept",
          "workingLatex": "a = 307",
          "explanation": "The intercept is the rainfall predicted at $x = 0$ hPa. Pressure is never remotely near zero (it hovers around $1012$ hPa), so $a = 307$ has no sensible real-world meaning; it simply positions the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "Pressure is the explanatory variable. The line is $y = 307 - 0.3x$. The gradient means each $1$ hPa rise in pressure is associated with about $0.3$ mm less rainfall. The intercept $307$ (rainfall at $0$ hPa) has no real meaning, since pressure is never near zero."
    }
  },
  {
    "id": "al.y1.stats.regression.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "summary-statistics",
      "raw-sums",
      "weather",
      "least-squares"
    ],
    "questionText": "On $12$ days a large-data-set weather station recorded the daily total sunshine $x$ (in hours) and the daily maximum temperature $y$ (in $\\degree C$). The data gave $\\sum x = 84$, $\\sum y = 228$, $\\sum x^2 = 788$ and $\\sum xy = 1776$, with $n = 12$. Find the equation of the least-squares regression line of $y$ on $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the explanatory variable",
          "workingLatex": "x = \\text{sunshine}, \\quad y = \\text{max temperature}",
          "explanation": "Sunshine warms the air, so we treat hours of sunshine as the explanatory variable $x$ and maximum temperature as the response $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the two means",
          "workingLatex": "\\bar{x} = \\dfrac{84}{12} = 7, \\quad \\bar{y} = \\dfrac{228}{12} = 19",
          "explanation": "The means locate the centre of the data; the line must pass through this point $(7, 19)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the formula for S_xx",
          "workingLatex": "S_{xx} = \\sum x^2 - \\dfrac{(\\sum x)^2}{n}",
          "explanation": "$S_{xx}$ measures how spread out the $x$-values are; it is the total of $x^2$ with the amount 'explained by the mean' removed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for S_xx",
          "workingLatex": "S_{xx} = 788 - \\dfrac{84^2}{12}",
          "explanation": "Insert $\\sum x^2 = 788$, $\\sum x = 84$ and $n = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate S_xx",
          "workingLatex": "S_{xx} = 788 - 588 = 200",
          "explanation": "Since $84^2 = 7056$ and $7056/12 = 588$, we get $S_{xx} = 200$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the formula for S_xy",
          "workingLatex": "S_{xy} = \\sum xy - \\dfrac{(\\sum x)(\\sum y)}{n}",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together, with the part explained by their means removed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute for S_xy",
          "workingLatex": "S_{xy} = 1776 - \\dfrac{84 \\times 228}{12}",
          "explanation": "Insert $\\sum xy = 1776$, $\\sum x = 84$ and $\\sum y = 228$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate S_xy",
          "workingLatex": "S_{xy} = 1776 - 1596 = 180",
          "explanation": "Since $84 \\times 228 = 19152$ and $19152/12 = 1596$, we get $S_{xy} = 180$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{180}{200} = 0.9",
          "explanation": "The gradient is the covariation divided by the spread of $x$, giving a clean $0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 19 - 0.9 \\times 7",
          "explanation": "The line passes through $(7, 19)$, so this gives the intercept directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 19 - 6.3 = 12.7",
          "explanation": "Working out $0.9 \\times 7 = 6.3$ and subtracting gives $a = 12.7$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the regression line",
          "workingLatex": "y = 12.7 + 0.9x",
          "explanation": "This is the full model; each extra hour of sunshine is associated with about $0.9\\degree C$ more maximum temperature.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 12.7 + 0.9x$, found from $S_{xx} = 200$ and $S_{xy} = 180$."
    }
  },
  {
    "id": "al.y1.stats.regression.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "regression",
      "interpretation",
      "intercept",
      "prediction",
      "experiment"
    ],
    "questionText": "In an experiment a spring is loaded with a mass $x$ (in kg) and its length $y$ (in cm) is measured. For $7$ masses the summary statistics are $S_{xx}=20$, $S_{xy}=15$, $\\bar{x}=4$ and $\\bar{y}=12$. (a) Find the regression line of $y$ on $x$. (b) Interpret the gradient and the intercept in context. (c) Estimate the length when a mass of $6$ kg is hung.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1,
          "y": 9.6
        },
        {
          "x": 2,
          "y": 10.7
        },
        {
          "x": 3,
          "y": 11
        },
        {
          "x": 4,
          "y": 12.2
        },
        {
          "x": 5,
          "y": 12.6
        },
        {
          "x": 6,
          "y": 13.6
        },
        {
          "x": 7,
          "y": 14.1
        }
      ],
      "line": {
        "a": 9,
        "b": 0.75
      },
      "xAxisLabel": "mass (kg)",
      "yAxisLabel": "length (cm)",
      "caption": "Spring length against loaded mass",
      "alt": "Scatter of spring length against loaded mass for 7 masses; the points rise from lower left to upper right showing strong positive correlation, with a least-squares line drawn through them."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$ of the least-squares line of length on mass.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the covariation of mass and length divided by the spread of the masses.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{15}{20}",
          "explanation": "Insert $S_{xy}=15$ and $S_{xx}=20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the gradient",
          "workingLatex": "b = 0.75",
          "explanation": "Dividing gives a clean gradient of $0.75$ cm per kg.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through the mean point $(\\bar{x},\\bar{y}) = (4, 12)$, giving $a$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the means",
          "workingLatex": "a = 12 - 0.75 \\times 4",
          "explanation": "Put in $\\bar{y}=12$, $b=0.75$ and $\\bar{x}=4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 12 - 3 = 9",
          "explanation": "Since $0.75 \\times 4 = 3$, the intercept is $a = 9$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the regression line",
          "workingLatex": "y = 9 + 0.75x",
          "explanation": "This is the full model for length in cm against mass in kg.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the intercept",
          "workingLatex": "a = 9",
          "explanation": "At $x = 0$ kg there is no load, so $a = 9$ is the natural (unstretched) length of the spring, $9$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.75",
          "explanation": "Each extra kilogram of mass stretches the spring by about $0.75$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Estimate the length at 6 kg",
          "workingLatex": "y = 9 + 0.75 \\times 6 = 13.5",
          "explanation": "Substituting $x = 6$ gives $13.5$ cm. Since $6$ kg is inside the data range ($1$ to $7$ kg), this is interpolation and is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 9 + 0.75x$. The intercept $9$ is the spring's natural length ($9$ cm) and the gradient $0.75$ means each extra kg stretches it by $0.75$ cm. At $6$ kg the estimated length is $13.5$ cm."
    }
  },
  {
    "id": "al.y1.stats.regression.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "weather",
      "prediction",
      "extrapolation",
      "interpretation"
    ],
    "questionText": "Over $7$ days a large-data-set weather station recorded the daily mean relative humidity $x$ (as a $\\%$) and the daily total sunshine $y$ (in hours). The summary statistics are $S_{xx}=800$, $S_{xy}=-200$, $\\bar{x}=75$ and $\\bar{y}=6$. (a) Find the regression line of $y$ on $x$. (b) Estimate the sunshine on a day when the humidity is $80\\%$. (c) Comment on the reliability of using the line when the humidity is $40\\%$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 60,
          "y": 9.5
        },
        {
          "x": 65,
          "y": 8.8
        },
        {
          "x": 70,
          "y": 7
        },
        {
          "x": 75,
          "y": 6.2
        },
        {
          "x": 80,
          "y": 4.5
        },
        {
          "x": 85,
          "y": 3.7
        },
        {
          "x": 90,
          "y": 2.1
        }
      ],
      "line": {
        "a": 24.75,
        "b": -0.25
      },
      "xAxisLabel": "relative humidity (\\%)",
      "yAxisLabel": "daily total sunshine (hours)",
      "caption": "Sunshine against relative humidity on 7 days",
      "alt": "Scatter of daily total sunshine against relative humidity for 7 days; the points fall from upper left to lower right showing strong negative correlation, with a least-squares line drawn through them."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We want the least-squares line of sunshine on humidity, so we need its gradient $b$ and intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the covariation of humidity and sunshine divided by the spread of humidity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{-200}{800}",
          "explanation": "Insert $S_{xy}=-200$ and $S_{xx}=800$; the negative sign matches the down-and-right scatter.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the gradient",
          "workingLatex": "b = -0.25",
          "explanation": "Dividing gives a clean gradient of $-0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through $(\\bar{x},\\bar{y}) = (75, 6)$, giving $a$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the means",
          "workingLatex": "a = 6 - (-0.25)\\times 75",
          "explanation": "Put in $\\bar{y}=6$, $b=-0.25$ and $\\bar{x}=75$; mind the double negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 6 + 18.75 = 24.75",
          "explanation": "Subtracting the negative adds $0.25\\times 75 = 18.75$, giving $a = 24.75$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the regression line",
          "workingLatex": "y = 24.75 - 0.25x",
          "explanation": "This is the full model for sunshine hours against relative humidity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Estimate the sunshine at 80% humidity",
          "workingLatex": "y = 24.75 - 0.25 \\times 80 = 4.75",
          "explanation": "Substituting $x = 80$ gives $4.75$ hours. Since $80\\%$ is inside the data range ($60\\%$ to $90\\%$), this is interpolation and is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient",
          "workingLatex": "b = -0.25",
          "explanation": "Each $1\\%$ rise in relative humidity is associated with about $0.25$ fewer hours of sunshine (more moisture tends to mean more cloud).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the reliability at 40% humidity",
          "workingLatex": "y = 24.75 - 0.25\\times 40 = 14.75",
          "explanation": "A humidity of $40\\%$ is well outside the observed range ($60\\%$ to $90\\%$), so this is extrapolation. The predicted $14.75$ hours is more than a UK day of sunshine, showing the linear trend cannot continue there; the estimate is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 24.75 - 0.25x$. At $80\\%$ humidity the estimate is $4.75$ hours (reliable interpolation). At $40\\%$ humidity the line gives $14.75$ hours, but $40\\%$ is outside the data range, so this extrapolation is unreliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "correlation",
      "causation",
      "confounding-variable",
      "regression",
      "interpretation"
    ],
    "questionText": "At a seaside resort, for $30$ summer days, the daily ice-cream sales $x$ (in $\\pounds 100$s) and the daily number $y$ of people treated for jellyfish stings are recorded. The product-moment correlation coefficient is $r = 0.9$, and the summary statistics are $S_{xx}=40$, $S_{xy}=60$, $\\bar{x}=8$ and $\\bar{y}=15$. (a) Describe the correlation. (b) Find the regression line of $y$ on $x$. (c) A newspaper claims 'buying ice cream causes jellyfish stings'. Explain why the data do not support this, naming a variable that could explain the correlation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the correlation",
          "workingLatex": "r = 0.9",
          "explanation": "Since $r$ is close to $+1$, there is strong positive correlation: days with higher ice-cream sales tend to have more jellyfish-sting cases.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "To model the number of cases from the sales we need the gradient $b$ and intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the covariation of the two quantities divided by the spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{60}{40}",
          "explanation": "Insert $S_{xy}=60$ and $S_{xx}=40$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "b = 1.5",
          "explanation": "Dividing gives a clean gradient of $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through $(\\bar{x},\\bar{y}) = (8, 15)$, giving $a$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the means",
          "workingLatex": "a = 15 - 1.5 \\times 8",
          "explanation": "Put in $\\bar{y}=15$, $b=1.5$ and $\\bar{x}=8$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 15 - 12 = 3",
          "explanation": "Since $1.5 \\times 8 = 12$, the intercept is $a = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the regression line",
          "workingLatex": "y = 3 + 1.5x",
          "explanation": "This is the fitted line, but a good fit alone tells us nothing about cause and effect.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State that correlation is not causation",
          "workingLatex": "\\text{correlation} \\neq \\text{causation}",
          "explanation": "A strong correlation shows the two quantities move together, not that one makes the other happen.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify a confounding variable",
          "workingLatex": "\\text{hot, sunny weather}",
          "explanation": "On hot, sunny days more people buy ice cream and more people swim in the sea, so more get stung. The weather is a third variable driving both, which is what creates the correlation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude",
          "workingLatex": "x \\to y \\text{ not causal}",
          "explanation": "So the newspaper's claim is unjustified: ice cream does not cause stings; both rise together because of the warm weather they share.",
          "diagram": null
        }
      ],
      "finalAnswer": "Strong positive correlation ($r = 0.9$). The line is $y = 3 + 1.5x$. The claim is unjustified: correlation is not causation. Hot, sunny weather is a confounding variable that increases both ice-cream sales and sea swimming (hence jellyfish stings), so it drives both quantities up together."
    }
  },
  {
    "id": "al.y1.stats.regression.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "correlation-coefficient",
      "interpretation",
      "extrapolation",
      "experiment"
    ],
    "questionText": "A loaf is taken out of an oven and its temperature $y$ (in $\\degree C$) is recorded $x$ hours later. Over the first few hours the data give $S_{xx}=10$, $S_{xy}=-130$, $\\bar{x}=2$ and $\\bar{y}=80$, and the correlation is $r=-0.98$. (a) Interpret $r$. (b) Find the regression line of $y$ on $x$. (c) Interpret the gradient and the intercept. (d) Explain why the line should not be used to estimate the temperature after $8$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the correlation coefficient",
          "workingLatex": "r = -0.98",
          "explanation": "Since $r$ is very close to $-1$, there is very strong negative correlation: over this period the temperature falls almost perfectly linearly as time passes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$ of the least-squares line of temperature on time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient is the covariation of time and temperature divided by the spread of the times.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{-130}{10}",
          "explanation": "Insert $S_{xy}=-130$ and $S_{xx}=10$; the negative value matches the cooling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "b = -13",
          "explanation": "Dividing gives a clean gradient of $-13$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through $(\\bar{x},\\bar{y}) = (2, 80)$, giving $a$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the means",
          "workingLatex": "a = 80 - (-13)\\times 2",
          "explanation": "Put in $\\bar{y}=80$, $b=-13$ and $\\bar{x}=2$; watch the double negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 80 + 26 = 106",
          "explanation": "Subtracting the negative adds $13\\times 2 = 26$, giving $a = 106$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the regression line",
          "workingLatex": "y = 106 - 13x",
          "explanation": "This is the full model for temperature in $\\degree C$ against time in hours.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient",
          "workingLatex": "b = -13",
          "explanation": "The loaf cools by about $13\\degree C$ every hour over this period.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the intercept",
          "workingLatex": "a = 106",
          "explanation": "At $x = 0$ the intercept $106$ is the model's estimate of the loaf's temperature the moment it leaves the oven, $106\\degree C$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain why 8 hours is unreliable",
          "workingLatex": "y = 106 - 13\\times 8 = 2",
          "explanation": "At $x = 8$ the line predicts $2\\degree C$, which is below room temperature and impossible. Cooling slows as the loaf nears room temperature, so the straight-line model breaks down. Also $8$ hours is far outside the data range, so this extrapolation is unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "Very strong negative correlation ($r = -0.98$). The line is $y = 106 - 13x$: the loaf cools about $13\\degree C$ per hour, starting from about $106\\degree C$. After $8$ hours the line gives $2\\degree C$, below room temperature and outside the data range, so this extrapolation is unreliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "weather",
      "prediction",
      "interpolation",
      "extrapolation"
    ],
    "questionText": "A cafe records, for $9$ days, the daily mean temperature $x$ (in $\\degree C$) and its cold-drink sales $y$ (in $\\pounds 100$s). The summary statistics are $S_{xx}=120$, $S_{xy}=84$, $\\bar{x}=18$ and $\\bar{y}=42$. (a) State, with a reason, which is the explanatory variable. (b) Find the regression line of $y$ on $x$. (c) Estimate the sales when the temperature is $24\\degree C$. (d) The owner wants to predict sales at $40\\degree C$. Comment on the reliability.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 10,
          "y": 36
        },
        {
          "x": 12,
          "y": 38.1
        },
        {
          "x": 14,
          "y": 38.9
        },
        {
          "x": 16,
          "y": 41
        },
        {
          "x": 18,
          "y": 42
        },
        {
          "x": 20,
          "y": 43
        },
        {
          "x": 22,
          "y": 45.2
        },
        {
          "x": 24,
          "y": 46
        },
        {
          "x": 26,
          "y": 47.5
        }
      ],
      "line": {
        "a": 29.4,
        "b": 0.7
      },
      "predict": {
        "x": 24,
        "y": 46.2,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "daily mean temperature (\\degree C)",
      "yAxisLabel": "cold-drink sales (\\pounds 100s)",
      "caption": "Cold-drink sales against temperature on 9 days",
      "alt": "Scatter of cold-drink sales against daily mean temperature for 9 days; the points rise from lower left to upper right showing strong positive correlation, with a least-squares line and a highlighted prediction at 24 degrees."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the explanatory variable",
          "workingLatex": "x = \\text{temperature}, \\quad y = \\text{sales}",
          "explanation": "The weather affects how much people buy, not the other way round, so temperature is the explanatory variable $x$ and sales is the response $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "We need the gradient $b$ and intercept $a$ of the least-squares line of sales on temperature.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how temperature and sales vary together with how much temperature varies on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the summary statistics",
          "workingLatex": "b = \\dfrac{84}{120}",
          "explanation": "Insert $S_{xy}=84$ and $S_{xx}=120$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the gradient",
          "workingLatex": "b = 0.7",
          "explanation": "Dividing gives a clean gradient of $0.7$, positive as expected for a hot-weather product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through $(\\bar{x},\\bar{y}) = (18, 42)$, giving $a$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the means",
          "workingLatex": "a = 42 - 0.7 \\times 18",
          "explanation": "Put in $\\bar{y}=42$, $b=0.7$ and $\\bar{x}=18$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the intercept",
          "workingLatex": "a = 42 - 12.6 = 29.4",
          "explanation": "Since $0.7 \\times 18 = 12.6$, the intercept is $a = 29.4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the regression line",
          "workingLatex": "y = 29.4 + 0.7x",
          "explanation": "This is the full model for sales in $\\pounds 100$s against daily mean temperature.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Estimate the sales at 24 degrees",
          "workingLatex": "y = 29.4 + 0.7 \\times 24 = 46.2",
          "explanation": "Substituting $x = 24$ gives $46.2$, i.e. about $\\pounds 4620$. Since $24\\degree C$ is inside the data range ($10$ to $26\\degree C$), this is interpolation and is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.7",
          "explanation": "Each $1\\degree C$ rise in daily mean temperature is associated with about $0.7 \\times \\pounds 100 = \\pounds 70$ more sales.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on the reliability at 40 degrees",
          "workingLatex": "40 > 26",
          "explanation": "A temperature of $40\\degree C$ is far outside the observed range ($10$ to $26\\degree C$), so predicting there is extrapolation. The straight-line trend may not hold that far (sales could level off), so the estimate would be unreliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "Temperature is the explanatory variable. The line is $y = 29.4 + 0.7x$. At $24\\degree C$ the estimate is $46.2$, about $\\pounds 4620$ (reliable interpolation). At $40\\degree C$ the prediction is extrapolation, well outside the data range, so it is unreliable."
    }
  },
  {
    "id": "al.y1.stats.regression.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "least-squares"
    ],
    "questionText": "A seaside kiosk records the daily mean temperature $x$ (in $\\degree$C) and its daily takings $y$ (in $\\pounds$) on $12$ days. To simplify the arithmetic the data are coded using $p = x - 30$ and $q = \\dfrac{y - 200}{10}$. The coded summary statistics are $S_{pp} = 90$, $S_{pq} = 45$, $\\bar{p} = 4$ and $\\bar{q} = 8$. Find the equation of the least-squares regression line of $y$ on $x$, giving your answer in the form $y = a + bx$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 34.8,
          "y": 289
        },
        {
          "x": 33.2,
          "y": 271
        },
        {
          "x": 35.7,
          "y": 284.8
        },
        {
          "x": 32.3,
          "y": 275.2
        },
        {
          "x": 36.5,
          "y": 298.1
        },
        {
          "x": 31.5,
          "y": 261.9
        },
        {
          "x": 37.4,
          "y": 301.3
        },
        {
          "x": 30.6,
          "y": 258.7
        },
        {
          "x": 38.2,
          "y": 297.9
        },
        {
          "x": 29.8,
          "y": 262.1
        },
        {
          "x": 39.1,
          "y": 300.5
        },
        {
          "x": 28.9,
          "y": 259.5
        }
      ],
      "line": {
        "a": 110,
        "b": 5
      },
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "takings (\\pounds)",
      "caption": "Un-coded data with the fitted line y = 110 + 5x",
      "alt": "Scatter of daily takings against temperature for 12 days, showing a strong positive linear trend with the least-squares line y = 110 + 5x drawn through the points."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = x - 30, \\quad q = \\dfrac{y - 200}{10}",
          "explanation": "The data have been coded to keep the numbers small. We first fit the least-squares line of $q$ on $p$, then swap the coding back to obtain the line of $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "For the coded line $q = A + Bp$ the gradient compares how $p$ and $q$ vary together with how much $p$ varies on its own — the usual least-squares formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{45}{90} = 0.5",
          "explanation": "Putting in $S_{pq}=45$ and $S_{pp}=90$ gives the coded gradient directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line passes through the coded mean point $(\\bar{p},\\bar{q})$, so rearranging $q = A + Bp$ there gives the intercept $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = 8 - 0.5 \\times 4 = 6",
          "explanation": "Using $\\bar{q}=8$ and $\\bar{p}=4$ gives $A = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = 6 + 0.5p",
          "explanation": "This is the correct least-squares line, but written in the coded variables $p$ and $q$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "\\dfrac{y - 200}{10} = 6 + 0.5(x - 30)",
          "explanation": "To return to the real variables we substitute $p = x - 30$ and $q = \\dfrac{y - 200}{10}$ into the coded line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "y - 200 = 10\\left[\\,6 + 0.5(x - 30)\\,\\right]",
          "explanation": "Multiplying both sides by $10$ removes the denominator on the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the outer bracket",
          "workingLatex": "y - 200 = 60 + 5(x - 30)",
          "explanation": "Distribute the $10$: $10 \\times 6 = 60$ and $10 \\times 0.5 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the remaining bracket",
          "workingLatex": "y - 200 = 60 + 5x - 150",
          "explanation": "Multiply out $5(x - 30)$ to get $5x - 150$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the constants",
          "workingLatex": "y - 200 = 5x - 90",
          "explanation": "Combine $60 - 150 = -90$ on the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make y the subject",
          "workingLatex": "y = 5x - 90 + 200",
          "explanation": "Add $200$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 110 + 5x",
          "explanation": "Simplifying $-90 + 200 = 110$ gives the model in the original variables, in the required form $y = a + bx$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Un-code the means for a check",
          "workingLatex": "\\bar{x} = \\bar{p} + 30 = 34, \\quad \\bar{y} = 200 + 10\\bar{q} = 280",
          "explanation": "Reversing the coding on the means gives the real mean point: $\\bar{x} = \\bar{p} + 30$ and $\\bar{y} = 200 + 10\\bar{q}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify the line passes through the mean point",
          "workingLatex": "110 + 5 \\times 34 = 280 = \\bar{y} \\;\\checkmark",
          "explanation": "Every least-squares line must pass through $(\\bar{x},\\bar{y})$. It does, which confirms the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 110 + 5x$. Each extra $\\degree$C of temperature is associated with about $\\pounds 5$ more in daily takings."
    }
  },
  {
    "id": "al.y1.stats.regression.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "prediction"
    ],
    "questionText": "An estate agent studies $n = 10$ flats, recording floor area $x$ (in $\\text{m}^2$) and selling price $y$ (in $\\pounds000$). The data are coded with $p = x - 60$ and $q = \\dfrac{y - 250}{5}$. The coded summary statistics are $S_{pp} = 120$, $S_{pq} = 84$, $\\bar{p} = 5$ and $\\bar{q} = 20$. (a) Find the least-squares regression line of $y$ on $x$ in the form $y = a + bx$. (b) Use your line to estimate the price of a flat with floor area $80\\ \\text{m}^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = x - 60, \\quad q = \\dfrac{y - 250}{5}",
          "explanation": "We first find the least-squares line of $q$ on $p$ using the coded statistics, then reverse the coding to reach $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "The coded gradient is found from the coded sums in the standard way.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{84}{120} = 0.7",
          "explanation": "Dividing $S_{pq}=84$ by $S_{pp}=120$ gives the coded gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line goes through $(\\bar{p},\\bar{q})$, giving the coded intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = 20 - 0.7 \\times 5 = 16.5",
          "explanation": "Using $\\bar{q}=20$ and $\\bar{p}=5$ gives $A = 16.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = 16.5 + 0.7p",
          "explanation": "This is the fitted line in the coded variables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "\\dfrac{y - 250}{5} = 16.5 + 0.7(x - 60)",
          "explanation": "Substitute $p = x - 60$ and $q = \\dfrac{y - 250}{5}$ to bring back the real variables.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "y - 250 = 5\\left[\\,16.5 + 0.7(x - 60)\\,\\right]",
          "explanation": "Multiplying by $5$ removes the denominator on the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the outer bracket",
          "workingLatex": "y - 250 = 82.5 + 3.5(x - 60)",
          "explanation": "Distribute the $5$: $5 \\times 16.5 = 82.5$ and $5 \\times 0.7 = 3.5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the remaining bracket",
          "workingLatex": "y - 250 = 82.5 + 3.5x - 210",
          "explanation": "Multiply out $3.5(x - 60)$ to get $3.5x - 210$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the constants",
          "workingLatex": "y - 250 = 3.5x - 127.5",
          "explanation": "Combine $82.5 - 210 = -127.5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make y the subject",
          "workingLatex": "y = 3.5x - 127.5 + 250",
          "explanation": "Add $250$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 122.5 + 3.5x",
          "explanation": "Simplifying $-127.5 + 250 = 122.5$ gives the model in the form $y = a + bx$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the mean point",
          "workingLatex": "\\bar{x} = 65, \\quad \\bar{y} = 350, \\quad 122.5 + 3.5 \\times 65 = 350 \\;\\checkmark",
          "explanation": "Un-coding gives $\\bar{x} = \\bar{p} + 60 = 65$ and $\\bar{y} = 250 + 5\\bar{q} = 350$; the line passes through this point, confirming it.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Predict the price for area 80",
          "workingLatex": "y = 122.5 + 3.5 \\times 80 = 402.5",
          "explanation": "Substituting $x = 80$ into the line gives the predicted price in $\\pounds000$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Interpret the prediction",
          "workingLatex": "y \\approx \\pounds 402{,}500",
          "explanation": "An area of $80\\ \\text{m}^2$ lies within the range of the sampled flats, so this is interpolation and the estimate of about $\\pounds 402{,}500$ is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 122.5 + 3.5x$; a flat of area $80\\ \\text{m}^2$ is predicted to sell for $y = 402.5$, i.e. about $\\pounds 402{,}500$."
    }
  },
  {
    "id": "al.y1.stats.regression.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "interpretation"
    ],
    "questionText": "A dealer records the age $x$ (in years) and value $y$ (in $\\pounds$) of $9$ used cars of the same model. Using the coding $p = x - 4$ and $q = \\dfrac{y - 8000}{500}$, the coded summary statistics are $S_{pp} = 40$, $S_{pq} = -60$, $\\bar{p} = 3$ and $\\bar{q} = -4$. (a) Find the regression line of $y$ on $x$ in the form $y = a + bx$. (b) Interpret the gradient in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = x - 4, \\quad q = \\dfrac{y - 8000}{500}",
          "explanation": "Older cars are worth less, so we expect a negative gradient. We fit $q$ on $p$ first, then un-code to reach $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "The coded gradient comes straight from the coded sums.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{-60}{40} = -1.5",
          "explanation": "A negative $S_{pq}$ gives a negative gradient, matching the falling trend.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line passes through $(\\bar{p},\\bar{q})$, giving the coded intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = -4 - (-1.5)(3) = -4 + 4.5 = 0.5",
          "explanation": "Subtracting a negative adds: $-(-1.5)(3) = +4.5$, so $A = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = 0.5 - 1.5p",
          "explanation": "This is the least-squares line in the coded variables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "\\dfrac{y - 8000}{500} = 0.5 - 1.5(x - 4)",
          "explanation": "Substitute $p = x - 4$ and $q = \\dfrac{y - 8000}{500}$ to return to the real variables.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "y - 8000 = 500\\left[\\,0.5 - 1.5(x - 4)\\,\\right]",
          "explanation": "Multiplying by $500$ removes the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the outer bracket",
          "workingLatex": "y - 8000 = 250 - 750(x - 4)",
          "explanation": "Distribute the $500$: $500 \\times 0.5 = 250$ and $500 \\times 1.5 = 750$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the remaining bracket",
          "workingLatex": "y - 8000 = 250 - 750x + 3000",
          "explanation": "Multiply out $-750(x - 4)$ to get $-750x + 3000$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the constants",
          "workingLatex": "y - 8000 = 3250 - 750x",
          "explanation": "Combine $250 + 3000 = 3250$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make y the subject",
          "workingLatex": "y = 3250 - 750x + 8000",
          "explanation": "Add $8000$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 11250 - 750x",
          "explanation": "Simplifying $3250 + 8000 = 11250$ gives the model in the form $y = a + bx$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the mean point",
          "workingLatex": "\\bar{x} = 7, \\quad \\bar{y} = 6000, \\quad 11250 - 750 \\times 7 = 6000 \\;\\checkmark",
          "explanation": "Un-coding gives $\\bar{x} = 7$ and $\\bar{y} = 8000 + 500\\bar{q} = 6000$; the line passes through this point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret the gradient",
          "workingLatex": "b = -750",
          "explanation": "The gradient is $-750$, so on average each additional year of age is associated with the car losing about $\\pounds 750$ in value.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Interpret the intercept",
          "workingLatex": "a = 11250",
          "explanation": "The intercept $\\pounds 11{,}250$ is the model's estimated value at age $0$ — roughly the price of a brand-new car of this model.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 11250 - 750x$. The gradient $-750$ means the car loses about $\\pounds 750$ of value for each extra year of age."
    }
  },
  {
    "id": "al.y1.stats.regression.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "least-squares"
    ],
    "questionText": "For $11$ students the number of hours of revision $x$ and the test mark $y$ (out of $100$) are recorded. With the coding $p = x - 10$ and $q = y - 50$, the coded summary statistics are $S_{pp} = 50$, $S_{pq} = 90$, $\\bar{p} = 2$ and $\\bar{q} = 8$. Find the least-squares regression line of $y$ on $x$, giving your answer in the form $y = a + bx$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 6,
          "y": 46
        },
        {
          "x": 8,
          "y": 50
        },
        {
          "x": 9,
          "y": 54
        },
        {
          "x": 10,
          "y": 55
        },
        {
          "x": 11,
          "y": 57
        },
        {
          "x": 12,
          "y": 58
        },
        {
          "x": 13,
          "y": 61
        },
        {
          "x": 14,
          "y": 62
        },
        {
          "x": 15,
          "y": 64
        },
        {
          "x": 16,
          "y": 66
        },
        {
          "x": 18,
          "y": 69
        }
      ],
      "line": {
        "a": 36.4,
        "b": 1.8
      },
      "xAxisLabel": "revision (hours)",
      "yAxisLabel": "test mark",
      "caption": "Un-coded data with the fitted line y = 36.4 + 1.8x",
      "alt": "Scatter of test mark against revision hours for 11 students, showing a strong positive linear trend with the least-squares line y = 36.4 + 1.8x drawn through the points."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = x - 10, \\quad q = y - 50",
          "explanation": "Here $y$ is only shifted, not scaled, so the coding is a little simpler. We fit $q$ on $p$ first, then un-code.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "The coded gradient follows from the coded sums.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{90}{50} = 1.8",
          "explanation": "Dividing $S_{pq}=90$ by $S_{pp}=50$ gives the coded gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line passes through $(\\bar{p},\\bar{q})$, giving the coded intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = 8 - 1.8 \\times 2 = 4.4",
          "explanation": "Using $\\bar{q}=8$ and $\\bar{p}=2$ gives $A = 4.4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = 4.4 + 1.8p",
          "explanation": "This is the fitted least-squares line in the coded variables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "y - 50 = 4.4 + 1.8(x - 10)",
          "explanation": "Because $q = y - 50$ there is no fraction to clear; simply substitute $p = x - 10$ and $q = y - 50$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y - 50 = 4.4 + 1.8x - 18",
          "explanation": "Multiply out $1.8(x - 10)$ to get $1.8x - 18$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the constants",
          "workingLatex": "y - 50 = 1.8x - 13.6",
          "explanation": "Combine $4.4 - 18 = -13.6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Make y the subject",
          "workingLatex": "y = 1.8x - 13.6 + 50",
          "explanation": "Add $50$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 36.4 + 1.8x",
          "explanation": "Simplifying $-13.6 + 50 = 36.4$ gives the model in the form $y = a + bx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the mean point",
          "workingLatex": "\\bar{x} = 12, \\quad \\bar{y} = 58, \\quad 36.4 + 1.8 \\times 12 = 58 \\;\\checkmark",
          "explanation": "Un-coding gives $\\bar{x} = 12$ and $\\bar{y} = 50 + \\bar{q} = 58$; the line passes through this point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.8",
          "explanation": "The gradient $1.8$ means each extra hour of revision is associated with about $1.8$ more marks on the test.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Note the limits of the model",
          "workingLatex": "y = 36.4 + 1.8x \\quad (\\text{valid near the data})",
          "explanation": "The intercept $36.4$ is the predicted mark for $0$ hours; the model should only be trusted for revision amounts close to those observed, not far outside them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 36.4 + 1.8x$. Each extra hour of revision is associated with about $1.8$ more marks."
    }
  },
  {
    "id": "al.y1.stats.regression.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "least-squares"
    ],
    "questionText": "An agronomist applies fertiliser at rate $x$ (in $\\text{kg/ha}$) to $8$ plots and records the yield $y$ (in $\\text{t/ha}$). The data are coded with $p = \\dfrac{x - 100}{10}$ and $q = y - 6$. The coded summary statistics are $S_{pp} = 30$, $S_{pq} = 24$, $\\bar{p} = 4$ and $\\bar{q} = 5$. Find the regression line of $y$ on $x$ in the form $y = a + bx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = \\dfrac{x - 100}{10}, \\quad q = y - 6",
          "explanation": "Here it is the $x$-variable that is scaled (divided by $10$). We fit $q$ on $p$ first, then reverse the coding.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "The coded gradient comes from the coded sums.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{24}{30} = 0.8",
          "explanation": "Dividing $S_{pq}=24$ by $S_{pp}=30$ gives the coded gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line passes through $(\\bar{p},\\bar{q})$, giving the coded intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = 5 - 0.8 \\times 4 = 1.8",
          "explanation": "Using $\\bar{q}=5$ and $\\bar{p}=4$ gives $A = 1.8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = 1.8 + 0.8p",
          "explanation": "This is the fitted line in the coded variables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "y - 6 = 1.8 + 0.8 \\cdot \\dfrac{x - 100}{10}",
          "explanation": "Substitute $p = \\dfrac{x - 100}{10}$ and $q = y - 6$ into the coded line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the coefficient",
          "workingLatex": "y - 6 = 1.8 + 0.08(x - 100)",
          "explanation": "Dividing the gradient by $10$ gives $\\dfrac{0.8}{10} = 0.08$, absorbing the scaling of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket",
          "workingLatex": "y - 6 = 1.8 + 0.08x - 8",
          "explanation": "Multiply out $0.08(x - 100)$ to get $0.08x - 8$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the constants",
          "workingLatex": "y - 6 = 0.08x - 6.2",
          "explanation": "Combine $1.8 - 8 = -6.2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Make y the subject",
          "workingLatex": "y = 0.08x - 6.2 + 6",
          "explanation": "Add $6$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 0.08x - 0.2",
          "explanation": "Simplifying $-6.2 + 6 = -0.2$ gives the model in the form $y = a + bx$ with $a = -0.2$ and $b = 0.08$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the mean point",
          "workingLatex": "\\bar{x} = 140, \\quad \\bar{y} = 11, \\quad 0.08 \\times 140 - 0.2 = 11 \\;\\checkmark",
          "explanation": "Un-coding gives $\\bar{x} = 100 + 10\\bar{p} = 140$ and $\\bar{y} = 6 + \\bar{q} = 11$; the line passes through this point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the gradient",
          "workingLatex": "b = 0.08",
          "explanation": "The gradient $0.08$ means each extra $1\\ \\text{kg/ha}$ of fertiliser is associated with about $0.08\\ \\text{t/ha}$ more yield.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 0.08x - 0.2$. Each additional $\\text{kg/ha}$ of fertiliser is associated with roughly $0.08\\ \\text{t/ha}$ more yield."
    }
  },
  {
    "id": "al.y1.stats.regression.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "interpretation"
    ],
    "questionText": "A taxi firm records journey distance $x$ (in km) and fare $y$ (in $\\pounds$) for $10$ trips. Using $p = x - 5$ and $q = \\dfrac{y - 10}{2}$, the coded summary statistics are $S_{pp} = 80$, $S_{pq} = 60$, $\\bar{p} = 3$ and $\\bar{q} = 4$. (a) Find the regression line of $y$ on $x$ in the form $y = a + bx$. (b) Interpret the intercept and the gradient in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = x - 5, \\quad q = \\dfrac{y - 10}{2}",
          "explanation": "We fit the line of $q$ on $p$ from the coded statistics, then reverse the coding to reach $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "The coded gradient follows from the coded sums.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{60}{80} = 0.75",
          "explanation": "Dividing $S_{pq}=60$ by $S_{pp}=80$ gives the coded gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line passes through $(\\bar{p},\\bar{q})$, giving the coded intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = 4 - 0.75 \\times 3 = 1.75",
          "explanation": "Using $\\bar{q}=4$ and $\\bar{p}=3$ gives $A = 1.75$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = 1.75 + 0.75p",
          "explanation": "This is the fitted line in the coded variables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "\\dfrac{y - 10}{2} = 1.75 + 0.75(x - 5)",
          "explanation": "Substitute $p = x - 5$ and $q = \\dfrac{y - 10}{2}$ into the coded line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "y - 10 = 2\\left[\\,1.75 + 0.75(x - 5)\\,\\right]",
          "explanation": "Multiplying by $2$ removes the denominator on the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the outer bracket",
          "workingLatex": "y - 10 = 3.5 + 1.5(x - 5)",
          "explanation": "Distribute the $2$: $2 \\times 1.75 = 3.5$ and $2 \\times 0.75 = 1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the remaining bracket",
          "workingLatex": "y - 10 = 3.5 + 1.5x - 7.5",
          "explanation": "Multiply out $1.5(x - 5)$ to get $1.5x - 7.5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the constants",
          "workingLatex": "y - 10 = 1.5x - 4",
          "explanation": "Combine $3.5 - 7.5 = -4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make y the subject",
          "workingLatex": "y = 1.5x - 4 + 10",
          "explanation": "Add $10$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 6 + 1.5x",
          "explanation": "Simplifying $-4 + 10 = 6$ gives the model in the form $y = a + bx$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the mean point",
          "workingLatex": "\\bar{x} = 8, \\quad \\bar{y} = 18, \\quad 6 + 1.5 \\times 8 = 18 \\;\\checkmark",
          "explanation": "Un-coding gives $\\bar{x} = 8$ and $\\bar{y} = 10 + 2\\bar{q} = 18$; the line passes through this point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret the intercept",
          "workingLatex": "a = 6",
          "explanation": "The intercept $\\pounds 6$ is the fare predicted for a journey of $0$ km — the fixed flag-fall or minimum charge before any distance is travelled.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.5",
          "explanation": "The gradient means the fare rises by about $\\pounds 1.50$ for each extra kilometre travelled.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 6 + 1.5x$. The intercept $\\pounds 6$ is the fixed starting charge and the gradient $\\pounds 1.50$ per km is the rate per kilometre."
    }
  },
  {
    "id": "al.y1.stats.regression.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "weather"
    ],
    "questionText": "On $11$ days a weather station records the daily hours of sunshine $x$ and the daily maximum temperature $y$ (in $\\degree$C). Using the coding $p = x - 8$ and $q = \\dfrac{y - 15}{2}$, the coded summary statistics are $S_{pp} = 50$, $S_{pq} = 40$, $\\bar{p} = 3$ and $\\bar{q} = 6$. Find the least-squares regression line of $y$ on $x$ in the form $y = a + bx$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 11.8,
          "y": 29.6
        },
        {
          "x": 10.2,
          "y": 24.4
        },
        {
          "x": 12.7,
          "y": 28.7
        },
        {
          "x": 9.3,
          "y": 25.3
        },
        {
          "x": 13.5,
          "y": 32.5
        },
        {
          "x": 8.5,
          "y": 21.5
        },
        {
          "x": 14.4,
          "y": 33.6
        },
        {
          "x": 7.6,
          "y": 20.4
        },
        {
          "x": 15.2,
          "y": 32.9
        },
        {
          "x": 6.8,
          "y": 21.1
        },
        {
          "x": 11,
          "y": 27
        }
      ],
      "line": {
        "a": 9.4,
        "b": 1.6
      },
      "xAxisLabel": "sunshine (hours)",
      "yAxisLabel": "max temperature (\\degree C)",
      "caption": "Un-coded data with the fitted line y = 9.4 + 1.6x",
      "alt": "Scatter of daily maximum temperature against hours of sunshine for 11 days, showing a strong positive linear trend with the least-squares line y = 9.4 + 1.6x drawn through the points."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = x - 8, \\quad q = \\dfrac{y - 15}{2}",
          "explanation": "Sunshine is the explanatory variable $x$ and maximum temperature the response $y$. We fit $q$ on $p$ first, then un-code.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "The coded gradient comes from the coded sums.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{40}{50} = 0.8",
          "explanation": "Dividing $S_{pq}=40$ by $S_{pp}=50$ gives the coded gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line passes through $(\\bar{p},\\bar{q})$, giving the coded intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = 6 - 0.8 \\times 3 = 3.6",
          "explanation": "Using $\\bar{q}=6$ and $\\bar{p}=3$ gives $A = 3.6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = 3.6 + 0.8p",
          "explanation": "This is the fitted line in the coded variables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "\\dfrac{y - 15}{2} = 3.6 + 0.8(x - 8)",
          "explanation": "Substitute $p = x - 8$ and $q = \\dfrac{y - 15}{2}$ into the coded line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "y - 15 = 2\\left[\\,3.6 + 0.8(x - 8)\\,\\right]",
          "explanation": "Multiplying by $2$ removes the denominator on the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the outer bracket",
          "workingLatex": "y - 15 = 7.2 + 1.6(x - 8)",
          "explanation": "Distribute the $2$: $2 \\times 3.6 = 7.2$ and $2 \\times 0.8 = 1.6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the remaining bracket",
          "workingLatex": "y - 15 = 7.2 + 1.6x - 12.8",
          "explanation": "Multiply out $1.6(x - 8)$ to get $1.6x - 12.8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the constants",
          "workingLatex": "y - 15 = 1.6x - 5.6",
          "explanation": "Combine $7.2 - 12.8 = -5.6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make y the subject",
          "workingLatex": "y = 1.6x - 5.6 + 15",
          "explanation": "Add $15$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 9.4 + 1.6x",
          "explanation": "Simplifying $-5.6 + 15 = 9.4$ gives the model in the form $y = a + bx$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the mean point",
          "workingLatex": "\\bar{x} = 11, \\quad \\bar{y} = 27, \\quad 9.4 + 1.6 \\times 11 = 27 \\;\\checkmark",
          "explanation": "Un-coding gives $\\bar{x} = 11$ and $\\bar{y} = 15 + 2\\bar{q} = 27$; the line passes through this point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret the gradient",
          "workingLatex": "b = 1.6",
          "explanation": "The gradient $1.6$ means each extra hour of sunshine is associated with about $1.6\\,\\degree$C higher daily maximum temperature.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 9.4 + 1.6x$. Each extra hour of sunshine is associated with about $1.6\\,\\degree$C higher maximum temperature."
    }
  },
  {
    "id": "al.y1.stats.regression.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "prediction"
    ],
    "questionText": "A factory records daily output $x$ (in hundreds of units) and running cost $y$ (in $\\pounds$) over $12$ days. With the coding $p = x - 20$ and $q = \\dfrac{y - 500}{25}$, the coded summary statistics are $S_{pp} = 150$, $S_{pq} = 120$, $\\bar{p} = 5$ and $\\bar{q} = 8$. (a) Find the regression line of $y$ on $x$ in the form $y = a + bx$. (b) Estimate the running cost on a day when $2600$ units are produced.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = x - 20, \\quad q = \\dfrac{y - 500}{25}",
          "explanation": "Output is measured in hundreds of units, so $x = 26$ corresponds to $2600$ units. We fit $q$ on $p$ first, then un-code.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "The coded gradient comes from the coded sums.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{120}{150} = 0.8",
          "explanation": "Dividing $S_{pq}=120$ by $S_{pp}=150$ gives the coded gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line passes through $(\\bar{p},\\bar{q})$, giving the coded intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = 8 - 0.8 \\times 5 = 4",
          "explanation": "Using $\\bar{q}=8$ and $\\bar{p}=5$ gives $A = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = 4 + 0.8p",
          "explanation": "This is the fitted line in the coded variables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "\\dfrac{y - 500}{25} = 4 + 0.8(x - 20)",
          "explanation": "Substitute $p = x - 20$ and $q = \\dfrac{y - 500}{25}$ into the coded line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "y - 500 = 25\\left[\\,4 + 0.8(x - 20)\\,\\right]",
          "explanation": "Multiplying by $25$ removes the denominator on the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the outer bracket",
          "workingLatex": "y - 500 = 100 + 20(x - 20)",
          "explanation": "Distribute the $25$: $25 \\times 4 = 100$ and $25 \\times 0.8 = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the remaining bracket",
          "workingLatex": "y - 500 = 100 + 20x - 400",
          "explanation": "Multiply out $20(x - 20)$ to get $20x - 400$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the constants",
          "workingLatex": "y - 500 = 20x - 300",
          "explanation": "Combine $100 - 400 = -300$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make y the subject",
          "workingLatex": "y = 20x - 300 + 500",
          "explanation": "Add $500$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 200 + 20x",
          "explanation": "Simplifying $-300 + 500 = 200$ gives the model in the form $y = a + bx$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the mean point",
          "workingLatex": "\\bar{x} = 25, \\quad \\bar{y} = 700, \\quad 200 + 20 \\times 25 = 700 \\;\\checkmark",
          "explanation": "Un-coding gives $\\bar{x} = 25$ and $\\bar{y} = 500 + 25\\bar{q} = 700$; the line passes through this point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Predict the cost for 2600 units",
          "workingLatex": "y = 200 + 20 \\times 26 = 720",
          "explanation": "As $2600$ units means $x = 26$ (hundreds), substitute $x = 26$ into the line.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Interpret the prediction",
          "workingLatex": "y = \\pounds 720",
          "explanation": "The output $x = 26$ lies within the range of the days observed, so this is interpolation and the estimate of $\\pounds 720$ is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 200 + 20x$; producing $2600$ units ($x = 26$) gives a predicted running cost of $\\pounds 720$."
    }
  },
  {
    "id": "al.y1.stats.regression.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "interpretation"
    ],
    "questionText": "A cafe records the daily mean temperature $x$ (in $\\degree$C) and the number of hot chocolates sold $y$ on $10$ days. Using $p = x - 10$ and $q = \\dfrac{y - 40}{5}$, the coded summary statistics are $S_{pp} = 40$, $S_{pq} = -48$, $\\bar{p} = 5$ and $\\bar{q} = -6$. (a) Find the regression line of $y$ on $x$ in the form $y = a + bx$. (b) Interpret the gradient in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = x - 10, \\quad q = \\dfrac{y - 40}{5}",
          "explanation": "Warmer days mean fewer hot chocolates, so we expect a negative gradient. Fit $q$ on $p$ first, then un-code.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "The coded gradient comes from the coded sums.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{-48}{40} = -1.2",
          "explanation": "A negative $S_{pq}$ gives a negative gradient, matching the falling trend.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line passes through $(\\bar{p},\\bar{q})$, giving the coded intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = -6 - (-1.2)(5) = -6 + 6 = 0",
          "explanation": "Subtracting a negative adds: $-(-1.2)(5) = +6$, so the coded intercept is exactly $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = -1.2p",
          "explanation": "With $A = 0$ the coded line is simply $q = -1.2p$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "\\dfrac{y - 40}{5} = -1.2(x - 10)",
          "explanation": "Substitute $p = x - 10$ and $q = \\dfrac{y - 40}{5}$ into the coded line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "y - 40 = 5 \\times (-1.2)(x - 10)",
          "explanation": "Multiplying by $5$ removes the denominator on the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the coefficient",
          "workingLatex": "y - 40 = -6(x - 10)",
          "explanation": "Since $5 \\times (-1.2) = -6$, the gradient in the real variables is $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the bracket",
          "workingLatex": "y - 40 = -6x + 60",
          "explanation": "Multiply out $-6(x - 10)$ to get $-6x + 60$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Make y the subject",
          "workingLatex": "y = -6x + 60 + 40",
          "explanation": "Add $40$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 100 - 6x",
          "explanation": "Simplifying $60 + 40 = 100$ gives the model in the form $y = a + bx$ with $a = 100$ and $b = -6$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the mean point",
          "workingLatex": "\\bar{x} = 15, \\quad \\bar{y} = 10, \\quad 100 - 6 \\times 15 = 10 \\;\\checkmark",
          "explanation": "Un-coding gives $\\bar{x} = 15$ and $\\bar{y} = 40 + 5\\bar{q} = 10$; the line passes through this point.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the gradient",
          "workingLatex": "b = -6",
          "explanation": "The gradient $-6$ means that for each $1\\,\\degree$C rise in temperature the cafe sells about $6$ fewer hot chocolates.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Comment on the intercept",
          "workingLatex": "a = 100 \\quad (x = 0)",
          "explanation": "The intercept predicts $100$ sales at $0\\,\\degree$C; this lies at the cold edge of the data, so it should be treated cautiously as it borders on extrapolation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 100 - 6x$. The gradient $-6$ means about $6$ fewer hot chocolates are sold for each $1\\,\\degree$C rise in temperature."
    }
  },
  {
    "id": "al.y1.stats.regression.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "coding",
      "linear-scaling",
      "regression",
      "interpretation"
    ],
    "questionText": "A company records its monthly advertising spend $x$ (in $\\pounds000$) and sales revenue $y$ (in $\\pounds000$) over $11$ months. With the coding $p = x - 8$ and $q = \\dfrac{y - 100}{20}$, the coded summary statistics are $S_{pp} = 60$, $S_{pq} = 45$, $\\bar{p} = 3$ and $\\bar{q} = 5$. Find the least-squares regression line of $y$ on $x$ in the form $y = a + bx$, and interpret the gradient.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 12.2,
          "y": 235.4
        },
        {
          "x": 9.8,
          "y": 164.6
        },
        {
          "x": 13.4,
          "y": 223
        },
        {
          "x": 8.6,
          "y": 177
        },
        {
          "x": 14.6,
          "y": 273.6
        },
        {
          "x": 7.4,
          "y": 126.4
        },
        {
          "x": 15.8,
          "y": 287.2
        },
        {
          "x": 6.2,
          "y": 112.8
        },
        {
          "x": 17,
          "y": 279.2
        },
        {
          "x": 5,
          "y": 120.8
        },
        {
          "x": 11,
          "y": 200
        }
      ],
      "line": {
        "a": 35,
        "b": 15
      },
      "xAxisLabel": "advertising (\\pounds000)",
      "yAxisLabel": "revenue (\\pounds000)",
      "caption": "Un-coded data with the fitted line y = 35 + 15x",
      "alt": "Scatter of monthly revenue against advertising spend over 11 months, showing a strong positive linear trend with the least-squares line y = 35 + 15x drawn through the points."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the coding and the plan",
          "workingLatex": "p = x - 8, \\quad q = \\dfrac{y - 100}{20}",
          "explanation": "Advertising is the explanatory variable $x$ and revenue the response $y$. We fit $q$ on $p$ first, then un-code.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient of the coded line",
          "workingLatex": "B = \\dfrac{S_{pq}}{S_{pp}}",
          "explanation": "The coded gradient comes from the coded sums.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coded sums",
          "workingLatex": "B = \\dfrac{45}{60} = 0.75",
          "explanation": "Dividing $S_{pq}=45$ by $S_{pp}=60$ gives the coded gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the intercept formula",
          "workingLatex": "A = \\bar{q} - B\\bar{p}",
          "explanation": "The coded line passes through $(\\bar{p},\\bar{q})$, giving the coded intercept.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the coded intercept",
          "workingLatex": "A = 5 - 0.75 \\times 3 = 2.75",
          "explanation": "Using $\\bar{q}=5$ and $\\bar{p}=3$ gives $A = 2.75$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the coded regression line",
          "workingLatex": "q = 2.75 + 0.75p",
          "explanation": "This is the fitted line in the coded variables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace p and q by their codings",
          "workingLatex": "\\dfrac{y - 100}{20} = 2.75 + 0.75(x - 8)",
          "explanation": "Substitute $p = x - 8$ and $q = \\dfrac{y - 100}{20}$ into the coded line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the fraction",
          "workingLatex": "y - 100 = 20\\left[\\,2.75 + 0.75(x - 8)\\,\\right]",
          "explanation": "Multiplying by $20$ removes the denominator on the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the outer bracket",
          "workingLatex": "y - 100 = 55 + 15(x - 8)",
          "explanation": "Distribute the $20$: $20 \\times 2.75 = 55$ and $20 \\times 0.75 = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand the remaining bracket",
          "workingLatex": "y - 100 = 55 + 15x - 120",
          "explanation": "Multiply out $15(x - 8)$ to get $15x - 120$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the constants",
          "workingLatex": "y - 100 = 15x - 65",
          "explanation": "Combine $55 - 120 = -65$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make y the subject",
          "workingLatex": "y = 15x - 65 + 100",
          "explanation": "Add $100$ to both sides to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the regression line of y on x",
          "workingLatex": "y = 35 + 15x",
          "explanation": "Simplifying $-65 + 100 = 35$ gives the model in the form $y = a + bx$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the mean point",
          "workingLatex": "\\bar{x} = 11, \\quad \\bar{y} = 200, \\quad 35 + 15 \\times 11 = 200 \\;\\checkmark",
          "explanation": "Un-coding gives $\\bar{x} = 11$ and $\\bar{y} = 100 + 20\\bar{q} = 200$; the line passes through this point.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret the gradient",
          "workingLatex": "b = 15",
          "explanation": "Both $x$ and $y$ are in $\\pounds000$, so the gradient $15$ means each extra $\\pounds 1000$ of advertising is associated with about $\\pounds 15{,}000$ more revenue.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 35 + 15x$. Each extra $\\pounds 1000$ of advertising spend is associated with about $\\pounds 15{,}000$ more revenue."
    }
  },
  {
    "id": "al.y1.stats.regression.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "correlation-causation",
      "weather"
    ],
    "questionText": "On $10$ summer days a beach kiosk records the daily mean temperature $x$ ($\\degree C$) and the number of cold drinks sold $y$. The data are summarised by $\\Sigma x = 250$, $\\Sigma y = 1500$, $\\Sigma x^2 = 6450$ and $\\Sigma xy = 38300$, and the observed temperatures range from $18\\degree C$ to $32\\degree C$. The scatter diagram is shown. (a) Describe the correlation. (b) Find the equation of the least-squares regression line of $y$ on $x$. (c) Predict the sales at $27\\degree C$ and at $40\\degree C$, commenting on the reliability of each. (d) Interpret the gradient and intercept. (e) Does this prove that higher temperatures cause higher sales?",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 18,
          "y": 121
        },
        {
          "x": 20,
          "y": 131
        },
        {
          "x": 22,
          "y": 136
        },
        {
          "x": 24,
          "y": 147
        },
        {
          "x": 25,
          "y": 151
        },
        {
          "x": 26,
          "y": 155
        },
        {
          "x": 28,
          "y": 161
        },
        {
          "x": 29,
          "y": 167
        },
        {
          "x": 30,
          "y": 171
        },
        {
          "x": 32,
          "y": 179
        }
      ],
      "line": {
        "a": 50,
        "b": 4
      },
      "predict": {
        "x": 27,
        "y": 158,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "temperature (\\degree C)",
      "yAxisLabel": "cold drinks sold",
      "caption": "Cold drinks sold against daily mean temperature",
      "alt": "Scatter of cold drinks sold against temperature for 10 days. Points rise steadily from lower-left to upper-right and lie close to a straight line, showing strong positive correlation. The least-squares line y = 50 + 4x is drawn, with a prediction marked at 27 degrees."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{temperature (explanatory)}, \\quad y = \\text{sales (response)}",
          "explanation": "We think temperature influences sales, not the other way round, so temperature is the explanatory variable $x$ and we model $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the correlation",
          "workingLatex": "\\text{strong positive correlation}",
          "explanation": "On the scatter the points climb from lower-left to upper-right and cluster tightly around a straight line, so hotter days go with clearly higher sales.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{250}{10} = 25, \\quad \\bar{y} = \\dfrac{1500}{10} = 150",
          "explanation": "The mean is total divided by the number of days. The point $(\\bar{x}, \\bar{y})$ is the balance point that the regression line must pass through.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the form of the line",
          "workingLatex": "y = a + bx",
          "explanation": "Finding the least-squares line just means finding two numbers: the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n} = 6450 - \\dfrac{250^2}{10} = 6450 - 6250 = 200",
          "explanation": "$S_{xx}$ measures how spread out the temperatures are on their own; it is the denominator of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{(\\Sigma x)(\\Sigma y)}{n} = 38300 - \\dfrac{250 \\times 1500}{10} = 38300 - 37500 = 800",
          "explanation": "$S_{xy}$ measures how $x$ and $y$ vary together; a positive value confirms they tend to rise together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{800}{200} = 4",
          "explanation": "The gradient compares the joint variation of $x$ and $y$ with the variation of $x$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 150 - 4 \\times 25 = 50",
          "explanation": "Rearranging $y = a + bx$ at the mean point forces the line through $(\\bar{x}, \\bar{y})$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the regression line",
          "workingLatex": "y = 50 + 4x",
          "explanation": "This is the full model relating predicted sales to temperature.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the mean point",
          "workingLatex": "50 + 4 \\times 25 = 150 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 25$ returns $\\bar{y} = 150$, confirming the line passes through the mean point — a quick check that $a$ and $b$ are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict at 27 degrees (interpolation)",
          "workingLatex": "\\hat{y} = 50 + 4 \\times 27 = 158",
          "explanation": "$27\\degree C$ lies inside the observed range $18\\degree C$ to $32\\degree C$, so this is interpolation and the prediction of about $158$ drinks is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at 40 degrees (extrapolation)",
          "workingLatex": "\\hat{y} = 50 + 4 \\times 40 = 210",
          "explanation": "$40\\degree C$ is well outside the data, so this is extrapolation and the figure of $210$ is unreliable — the straight-line pattern may fail as stock runs out or demand levels off.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the gradient",
          "workingLatex": "b = 4",
          "explanation": "Each $1\\degree C$ rise in temperature is associated with about $4$ more cold drinks sold.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the intercept",
          "workingLatex": "a = 50",
          "explanation": "The model predicts $50$ drinks at $0\\degree C$, but $0\\degree C$ is far below the data, so this intercept is not a meaningful real-world figure — just where the fitted line meets the axis.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Correlation versus causation",
          "workingLatex": "\\text{correlation} \\ne \\text{causation}",
          "explanation": "A strong correlation alone does not prove temperature causes the sales. Hot days are often sunny weekends and holidays with far more visitors, so footfall is a confounding variable that inflates both.",
          "diagram": null
        }
      ],
      "finalAnswer": "The correlation is strong and positive. The regression line is $y = 50 + 4x$. It predicts $\\hat{y} = 158$ drinks at $27\\degree C$ (interpolation, reliable) and $210$ at $40\\degree C$ (extrapolation, unreliable). The gradient means about $4$ extra drinks per $1\\degree C$; the intercept $50$ is not meaningful because $0\\degree C$ lies far outside the data. Correlation does not prove causation — footfall on hot days is a likely confounder."
    }
  },
  {
    "id": "al.y1.stats.regression.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "missing-value",
      "prediction",
      "correlation-causation"
    ],
    "questionText": "Over $9$ days a pharmacy records the hours of bright sunshine $x$ and the number of bottles of sunscreen sold $y$. The summary statistics are $\\bar{x} = 6$, $\\bar{y} = 40$, $S_{xx} = 30$ and $S_{xy} = 75$, and the sunshine hours ranged from $2$ to $10$. (a) Find the least-squares regression line of $y$ on $x$. (b) On $8$ of the $9$ days a total of $335$ bottles were sold; find the number sold on the remaining day. (c) Predict the sales for $5$ hours and for $15$ hours of sunshine, commenting on each. (d) Interpret the gradient. (e) Sunscreen sales and ice-cream sales are strongly correlated across these days; does one cause the other?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{sunshine hours (explanatory)}, \\quad y = \\text{bottles sold (response)}",
          "explanation": "Sunshine is thought to drive sales, so it is the explanatory variable and we fit $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the gradient formula",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient compares how $x$ and $y$ vary together with how much $x$ varies alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{75}{30} = 2.5",
          "explanation": "Substituting the given sums gives the gradient directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the mean point for the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 40 - 2.5 \\times 6 = 25",
          "explanation": "The line passes through $(\\bar{x}, \\bar{y})$, so evaluating $y = a + bx$ there and rearranging gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the regression line",
          "workingLatex": "y = 25 + 2.5x",
          "explanation": "This is the full model for predicted sunscreen sales.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the mean point",
          "workingLatex": "25 + 2.5 \\times 6 = 40 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 6$ returns $\\bar{y} = 40$, confirming the line passes through the mean point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the total sales",
          "workingLatex": "\\Sigma y = n\\bar{y} = 9 \\times 40 = 360",
          "explanation": "The mean is the total divided by $9$, so the total over all nine days is $9 \\times 40 = 360$ bottles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the missing day's sales",
          "workingLatex": "360 - 335 = 25",
          "explanation": "The nine days total $360$; the other eight total $335$, so the remaining day accounts for the difference, $25$ bottles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Predict at 5 hours (interpolation)",
          "workingLatex": "\\hat{y} = 25 + 2.5 \\times 5 = 37.5 \\approx 38",
          "explanation": "$5$ hours lies inside the observed range $2$ to $10$, so this interpolation is reliable; about $38$ bottles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Predict at 15 hours (extrapolation)",
          "workingLatex": "\\hat{y} = 25 + 2.5 \\times 15 = 62.5",
          "explanation": "$15$ hours is beyond the maximum observed ($10$), so this is extrapolation and unreliable — the linear pattern may not continue that far.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient",
          "workingLatex": "b = 2.5",
          "explanation": "Each extra hour of bright sunshine is associated with about $2.5$ more bottles of sunscreen sold.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the intercept",
          "workingLatex": "a = 25",
          "explanation": "The model predicts $25$ bottles at $0$ hours of sunshine, but $0$ lies outside the data range, so treat this baseline cautiously.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Correlation versus causation",
          "workingLatex": "\\text{common cause: hot, sunny weather}",
          "explanation": "Sunscreen and ice-cream sales both rise on hot, sunny days; the weather is the common cause. Neither directly causes the other — this is a spurious correlation driven by a confounder.",
          "diagram": null
        }
      ],
      "finalAnswer": "The regression line is $y = 25 + 2.5x$. The remaining day sold $360 - 335 = 25$ bottles. Predictions: $\\hat{y} = 37.5 \\approx 38$ bottles at $5$ hours (interpolation, reliable) and $62.5$ at $15$ hours (extrapolation, unreliable). The gradient means about $2.5$ more bottles per extra hour of sunshine. Sunscreen and ice-cream sales are linked only because sunny weather drives both, so neither causes the other."
    }
  },
  {
    "id": "al.y1.stats.regression.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "comparison",
      "correlation",
      "interpretation"
    ],
    "questionText": "Two ice-cream vans, $A$ and $B$, operate on different beaches. Over one season the daily takings $y$ (in $\\pounds$) are modelled against the daily mean temperature $x$ ($\\degree C$) by the least-squares regression lines $A: y = 30 + 8x$ and $B: y = 60 + 5x$. For van $A$ the product-moment correlation coefficient is $r = 0.92$ and for van $B$ it is $r = 0.61$. The temperatures observed ranged from $12\\degree C$ to $28\\degree C$. (a) Interpret the gradient and intercept of each line. (b) Find the temperature at which both models predict equal takings, and say which van takes more on a hot $25\\degree C$ day. (c) Whose takings are more strongly linearly related to temperature? (d) Comment on using van $B$'s line at $x = 35\\degree C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret van A's gradient",
          "workingLatex": "b_A = 8",
          "explanation": "For van $A$, each $1\\degree C$ rise in temperature is associated with about $\\pounds 8$ more in daily takings.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret van B's gradient",
          "workingLatex": "b_B = 5",
          "explanation": "For van $B$, each $1\\degree C$ rise adds about $\\pounds 5$. Because $8 > 5$, van $A$'s takings are more sensitive to temperature.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the intercepts",
          "workingLatex": "a_A = 30, \\quad a_B = 60",
          "explanation": "At $0\\degree C$ the models predict $\\pounds 30$ (van $A$) and $\\pounds 60$ (van $B$), so $B$ has the higher baseline; but $0\\degree C$ is far below the data, so these are extrapolated figures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the predictions equal",
          "workingLatex": "30 + 8x = 60 + 5x",
          "explanation": "The two models agree where their predicted takings are the same, so we equate the right-hand sides.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the temperature",
          "workingLatex": "3x = 30 \\ \\Rightarrow \\ x = 10",
          "explanation": "Collecting the $x$ terms gives $3x = 30$, so the lines cross at $10\\degree C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the takings at the crossover",
          "workingLatex": "A: 30 + 8 \\times 10 = 110, \\quad B: 60 + 5 \\times 10 = 110",
          "explanation": "At $10\\degree C$ both models predict $\\pounds 110$, confirming the crossover point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the crossover",
          "workingLatex": "x < 10: B > A, \\quad x > 10: A > B",
          "explanation": "Below $10\\degree C$ van $B$'s higher baseline wins; above $10\\degree C$ van $A$'s steeper line pulls ahead.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Predict for van A at 25 degrees",
          "workingLatex": "A: 30 + 8 \\times 25 = 230",
          "explanation": "On a hot $25\\degree C$ day van $A$ is predicted to take $\\pounds 230$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Predict for van B at 25 degrees",
          "workingLatex": "B: 60 + 5 \\times 25 = 185",
          "explanation": "Van $B$ is predicted to take $\\pounds 185$. Since $230 > 185$ and $25 > 10$, van $A$ takes more on a hot day, as expected from its steeper line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the correlation coefficients",
          "workingLatex": "|0.92| > |0.61|",
          "explanation": "Van $A$'s $r$ is closer to $1$, so its points lie nearer its line — van $A$'s takings are more strongly linearly related to temperature.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reliability of the predictions",
          "workingLatex": "r_A = 0.92 \\Rightarrow \\text{tighter fit}",
          "explanation": "Because van $A$'s data scatter less about its line, predictions from $A$'s model are more trustworthy than those from $B$'s.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on x = 35 for van B",
          "workingLatex": "35 > 28 \\ (\\text{max observed})",
          "explanation": "The temperatures only reached $28\\degree C$, so predicting at $35\\degree C$ is extrapolation. Van $B$'s figure $60 + 5 \\times 35 = 235$ is unreliable because the linear relationship is not known to hold that far.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note on causation",
          "workingLatex": "\\text{high } r \\ne \\text{proof of cause}",
          "explanation": "Even van $A$'s strong $r$ does not prove temperature alone drives takings; sunshine and holiday footfall rise with temperature and affect both vans.",
          "diagram": null
        }
      ],
      "finalAnswer": "Van $A$: $\\pounds 8$ more per $1\\degree C$ with a $\\pounds 30$ baseline; van $B$: $\\pounds 5$ per $1\\degree C$ with a $\\pounds 60$ baseline. The models agree at $10\\degree C$ (both $\\pounds 110$); above this van $A$ takes more, so on a $25\\degree C$ day $A$ ($\\pounds 230$) beats $B$ ($\\pounds 185$). Van $A$'s takings are more strongly linearly related to temperature ($r = 0.92$ vs $0.61$). Predicting van $B$ at $35\\degree C$ is unreliable extrapolation beyond the observed $28\\degree C$."
    }
  },
  {
    "id": "al.y1.stats.regression.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "weather",
      "correlation-causation"
    ],
    "questionText": "On $8$ days a shop records the daily total rainfall $x$ (mm) and the number of umbrellas sold $y$. The data give $\\Sigma x = 80$, $\\Sigma y = 240$, $\\Sigma x^2 = 900$ and $\\Sigma xy = 2650$, with rainfall ranging from $2$ mm to $20$ mm. Using the scatter diagram and these totals: (a) describe the correlation; (b) find the regression line of $y$ on $x$; (c) predict sales for $12$ mm and for $30$ mm of rain, commenting on reliability; (d) interpret the gradient and intercept; (e) is the link between rain and umbrella sales likely to be causal?",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2,
          "y": 10
        },
        {
          "x": 5,
          "y": 18
        },
        {
          "x": 8,
          "y": 24
        },
        {
          "x": 10,
          "y": 32
        },
        {
          "x": 12,
          "y": 34
        },
        {
          "x": 15,
          "y": 43
        },
        {
          "x": 18,
          "y": 49
        },
        {
          "x": 20,
          "y": 56
        }
      ],
      "line": {
        "a": 5,
        "b": 2.5
      },
      "predict": {
        "x": 12,
        "y": 35,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "rainfall (mm)",
      "yAxisLabel": "umbrellas sold",
      "caption": "Umbrellas sold against daily rainfall",
      "alt": "Scatter of umbrellas sold against daily rainfall for 8 days. Points rise from lower-left to upper-right close to a straight line, showing strong positive correlation. The least-squares line y = 5 + 2.5x is drawn with a prediction marked at 12 mm."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{rainfall (explanatory)}, \\quad y = \\text{umbrellas sold (response)}",
          "explanation": "Rainfall is expected to affect umbrella sales, so it is the explanatory variable and we fit $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the correlation",
          "workingLatex": "\\text{strong positive correlation}",
          "explanation": "The scatter points rise steadily and lie close to a straight line, so wetter days go with clearly higher umbrella sales.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{80}{8} = 10, \\quad \\bar{y} = \\dfrac{240}{8} = 30",
          "explanation": "The means locate the balance point $(\\bar{x}, \\bar{y})$ that the line passes through.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 900 - \\dfrac{80^2}{8} = 900 - 800 = 100",
          "explanation": "$S_{xx}$ captures how spread out the rainfall values are on their own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 2650 - \\dfrac{80 \\times 240}{8} = 2650 - 2400 = 250",
          "explanation": "$S_{xy}$ measures how rainfall and sales vary together; being positive confirms the upward trend.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{250}{100} = 2.5",
          "explanation": "Dividing the joint variation by the variation in $x$ gives the slope of the fitted line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 30 - 2.5 \\times 10 = 5",
          "explanation": "Using the mean point forces the line through $(10, 30)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the regression line",
          "workingLatex": "y = 5 + 2.5x",
          "explanation": "This is the complete model relating predicted sales to rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the mean point",
          "workingLatex": "5 + 2.5 \\times 10 = 30 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 10$ returns $\\bar{y} = 30$, confirming the line passes through the mean point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Predict at 12 mm (interpolation)",
          "workingLatex": "\\hat{y} = 5 + 2.5 \\times 12 = 35",
          "explanation": "$12$ mm is inside the observed range $2$ to $20$ mm, so this interpolation gives a reliable estimate of about $35$ umbrellas.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict at 30 mm (extrapolation)",
          "workingLatex": "\\hat{y} = 5 + 2.5 \\times 30 = 80",
          "explanation": "$30$ mm is beyond the largest observed value, so predicting $80$ is extrapolation and unreliable — very heavy rain might keep shoppers away entirely.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the gradient",
          "workingLatex": "b = 2.5",
          "explanation": "Each extra millimetre of rain is associated with about $2.5$ more umbrellas sold.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the intercept",
          "workingLatex": "a = 5",
          "explanation": "The model predicts about $5$ umbrellas on a dry day ($x = 0$); since $0$ mm is just outside the data, treat this baseline as approximate.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Comment on causation",
          "workingLatex": "\\text{plausible direct cause}",
          "explanation": "Here the link is plausibly genuinely causal — rain gives people a real reason to buy umbrellas. Even so, wetter days are also often colder and gloomier, which could reinforce the effect.",
          "diagram": null
        }
      ],
      "finalAnswer": "The correlation is strong and positive. The regression line is $y = 5 + 2.5x$. Predictions: $\\hat{y} = 35$ umbrellas at $12$ mm (interpolation, reliable) and $80$ at $30$ mm (extrapolation, unreliable). The gradient means about $2.5$ more umbrellas per mm of rain; the intercept $5$ is the approximate dry-day baseline. Unlike many correlations, this link is plausibly causal, since rain gives a direct reason to buy umbrellas."
    }
  },
  {
    "id": "al.y1.stats.regression.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "negative-correlation",
      "prediction",
      "correlation-causation"
    ],
    "questionText": "A running club studies $9$ members. For each, $x$ is the weekly training distance (km) and $y$ is their $10$ km race time (minutes). The totals are $\\Sigma x = 360$, $\\Sigma y = 450$, $\\Sigma x^2 = 15000$ and $\\Sigma xy = 17700$; training distances range from $20$ to $60$ km. (a) Describe the correlation shown on the scatter diagram. (b) Find the least-squares regression line of $y$ on $x$. (c) Predict the race time for $50$ km and for $90$ km of weekly training, commenting on reliability. (d) Interpret the gradient and intercept. (e) Does training more definitely cause a faster time?",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 20,
          "y": 61
        },
        {
          "x": 25,
          "y": 58
        },
        {
          "x": 30,
          "y": 54
        },
        {
          "x": 35,
          "y": 53
        },
        {
          "x": 40,
          "y": 50
        },
        {
          "x": 45,
          "y": 48
        },
        {
          "x": 50,
          "y": 44
        },
        {
          "x": 55,
          "y": 43
        },
        {
          "x": 60,
          "y": 39
        }
      ],
      "line": {
        "a": 70,
        "b": -0.5
      },
      "predict": {
        "x": 50,
        "y": 45,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "weekly training (km)",
      "yAxisLabel": "race time (min)",
      "caption": "10 km race time against weekly training distance",
      "alt": "Scatter of 10 km race time against weekly training distance for 9 runners. Points fall from upper-left to lower-right close to a straight line, showing strong negative correlation. The least-squares line y = 70 minus 0.5x is drawn with a prediction marked at 50 km."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{training km (explanatory)}, \\quad y = \\text{race time (response)}",
          "explanation": "Training is thought to affect race time, so it is the explanatory variable and we fit $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the correlation",
          "workingLatex": "\\text{strong negative correlation}",
          "explanation": "On the scatter the points fall from upper-left to lower-right close to a line, so more training goes with lower (faster) race times.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{360}{9} = 40, \\quad \\bar{y} = \\dfrac{450}{9} = 50",
          "explanation": "The means give the balance point $(40, 50)$ the line must pass through.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 15000 - \\dfrac{360^2}{9} = 15000 - 14400 = 600",
          "explanation": "$S_{xx}$ measures the spread of the training distances on their own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 17700 - \\dfrac{360 \\times 450}{9} = 17700 - 18000 = -300",
          "explanation": "$S_{xy}$ is negative, confirming that as training rises, race time falls.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{-300}{600} = -0.5",
          "explanation": "A negative gradient matches the downward trend seen on the scatter.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 50 - (-0.5) \\times 40 = 50 + 20 = 70",
          "explanation": "Subtracting a negative adds on, forcing the line through the mean point $(40, 50)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the regression line",
          "workingLatex": "y = 70 - 0.5x",
          "explanation": "This is the full model for predicted race time from training distance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the mean point",
          "workingLatex": "70 - 0.5 \\times 40 = 50 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 40$ returns $\\bar{y} = 50$, confirming the line passes through the mean point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Predict at 50 km (interpolation)",
          "workingLatex": "\\hat{y} = 70 - 0.5 \\times 50 = 45",
          "explanation": "$50$ km is inside the observed range $20$ to $60$ km, so this interpolation of about $45$ minutes is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict at 90 km (extrapolation)",
          "workingLatex": "\\hat{y} = 70 - 0.5 \\times 90 = 25",
          "explanation": "$90$ km is far beyond the data, so $25$ minutes is unreliable extrapolation; pushed further the model would predict impossibly low times, so the straight line cannot continue forever.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the gradient",
          "workingLatex": "b = -0.5",
          "explanation": "Each extra kilometre of weekly training is associated with about $0.5$ minute (30 seconds) off the race time.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the intercept",
          "workingLatex": "a = 70",
          "explanation": "The model predicts $70$ minutes for a runner doing no training ($x = 0$); since $0$ km lies outside the data, this is only a rough untrained baseline, not a firm figure.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Comment on causation",
          "workingLatex": "\\text{ability is a confounder}",
          "explanation": "Training probably does help, but the correlation is not proof: fitter, more talented runners tend both to train more and to race faster, so natural ability is a confounding variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The correlation is strong and negative. The regression line is $y = 70 - 0.5x$. Predictions: $\\hat{y} = 45$ minutes at $50$ km (interpolation, reliable) and $25$ minutes at $90$ km (extrapolation, unreliable). The gradient means about $30$ seconds faster per extra km trained; the intercept $70$ is only a rough no-training baseline. Training likely helps, but ability is a confounder, so this does not prove causation."
    }
  },
  {
    "id": "al.y1.stats.regression.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "missing-value",
      "mean-point",
      "prediction",
      "correlation-causation"
    ],
    "questionText": "A dealer studies $8$ used cars of one model. For each, $x$ is the age (years) and $y$ is the value (in $\\pounds000$). It is known that $\\bar{x} = 5$, $S_{xx} = 50$ and $S_{xy} = -60$, and that the intercept of the least-squares regression line of $y$ on $x$ is $a = 15$. Ages range from $2$ to $9$ years. (a) Find the gradient and hence the regression line. (b) Use the mean point to find $\\bar{y}$, and given that seven of the cars are worth $\\pounds64$ (in $\\pounds000$) in total, find the value of the eighth car. (c) Predict the value of a $7$-year-old and a $12$-year-old car, commenting on reliability. (d) Interpret the gradient. (e) Comment on the claim that age alone causes the loss in value.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 2,
          "y": 13
        },
        {
          "x": 3,
          "y": 11
        },
        {
          "x": 4,
          "y": 10
        },
        {
          "x": 5,
          "y": 9
        },
        {
          "x": 6,
          "y": 8
        },
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 8,
          "y": 5
        },
        {
          "x": 9,
          "y": 4
        }
      ],
      "line": {
        "a": 15,
        "b": -1.2
      },
      "predict": {
        "x": 7,
        "y": 6.6,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "age (years)",
      "yAxisLabel": "value (\\pounds000)",
      "caption": "Car value against age",
      "alt": "Scatter of used-car value against age for 8 cars. Points fall from upper-left to lower-right close to a straight line, showing strong negative correlation. The least-squares line y = 15 minus 1.2x is drawn with a prediction marked at 7 years."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{age (explanatory)}, \\quad y = \\text{value (response)}",
          "explanation": "Age is expected to affect value, so it is the explanatory variable and we fit $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the correlation",
          "workingLatex": "\\text{strong negative correlation}",
          "explanation": "Because $S_{xy} = -60 < 0$ and the scatter falls to the right, older cars are worth clearly less.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{-60}{50} = -1.2",
          "explanation": "The gradient is the ratio of the joint variation to the variation in age; it is negative, matching depreciation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the regression line",
          "workingLatex": "y = 15 - 1.2x",
          "explanation": "Combining the given intercept $a = 15$ with the gradient gives the full model.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the mean point to find the mean value",
          "workingLatex": "\\bar{y} = a + b\\bar{x} = 15 - 1.2 \\times 5 = 9",
          "explanation": "The line passes through $(\\bar{x}, \\bar{y})$, so substituting $\\bar{x} = 5$ into the line gives $\\bar{y} = 9$ (that is $\\pounds9000$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the total value",
          "workingLatex": "\\Sigma y = n\\bar{y} = 8 \\times 9 = 72",
          "explanation": "The mean is the total divided by $8$, so all eight cars together are worth $72$ (in $\\pounds000$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the eighth car's value",
          "workingLatex": "72 - 64 = 8",
          "explanation": "The eight cars total $72$; the other seven total $64$, so the eighth is worth $8$, that is $\\pounds8000$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Predict at 7 years (interpolation)",
          "workingLatex": "\\hat{y} = 15 - 1.2 \\times 7 = 6.6",
          "explanation": "$7$ years lies inside the observed range $2$ to $9$, so this interpolation of $\\pounds6600$ is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Predict at 12 years (extrapolation)",
          "workingLatex": "\\hat{y} = 15 - 1.2 \\times 12 = 0.6",
          "explanation": "$12$ years is beyond the data, so $\\pounds600$ is unreliable; a little further the model gives a negative value, which is impossible, so it breaks down.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient",
          "workingLatex": "b = -1.2",
          "explanation": "Each extra year of age is associated with a fall in value of about $1.2$, that is $\\pounds1200$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the intercept",
          "workingLatex": "a = 15",
          "explanation": "The model predicts $\\pounds15000$ at age $0$ (brand new); since $0$ is just outside the data, treat this as an approximate showroom value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the mean value",
          "workingLatex": "\\bar{y} = 9",
          "explanation": "The average car in the sample is worth about $\\pounds9000$, matching a typical five-year-old car on the line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on causation",
          "workingLatex": "\\text{mileage is a confounder}",
          "explanation": "Age alone is not the sole cause of the loss in value: older cars usually have higher mileage and more wear, and mileage is a confounding variable travelling with age.",
          "diagram": null
        }
      ],
      "finalAnswer": "The gradient is $b = -1.2$, so the line is $y = 15 - 1.2x$. The mean point gives $\\bar{y} = 9$, so the total is $72$ and the eighth car is worth $72 - 64 = 8$, that is $\\pounds8000$. Predictions: $\\pounds6600$ at $7$ years (interpolation, reliable) and $\\pounds600$ at $12$ years (extrapolation, unreliable, soon impossible). The gradient means about $\\pounds1200$ lost per year. Age is not the sole cause — mileage and wear travel with age as confounders."
    }
  },
  {
    "id": "al.y1.stats.regression.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "residual",
      "prediction",
      "correlation-causation"
    ],
    "questionText": "For $10$ students a teacher records revision time $x$ (hours) and exam mark $y$ ($\\%$). The totals are $\\Sigma x = 100$, $\\Sigma y = 600$, $\\Sigma x^2 = 1200$ and $\\Sigma xy = 6700$; revision times range from $4$ to $16$ hours. (a) Find the least-squares regression line of $y$ on $x$. (b) One student revised for $14$ hours and scored $68\\%$; find the residual and interpret it. (c) Predict the mark for $8$ hours and for $30$ hours of revision, commenting on reliability. (d) Interpret the gradient and intercept. (e) A student concludes 'revising more guarantees a higher mark.' Comment.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 4,
          "y": 40
        },
        {
          "x": 6,
          "y": 45
        },
        {
          "x": 8,
          "y": 54
        },
        {
          "x": 9,
          "y": 58
        },
        {
          "x": 10,
          "y": 59
        },
        {
          "x": 11,
          "y": 64
        },
        {
          "x": 12,
          "y": 68
        },
        {
          "x": 14,
          "y": 68
        },
        {
          "x": 15,
          "y": 80
        },
        {
          "x": 16,
          "y": 82
        }
      ],
      "line": {
        "a": 25,
        "b": 3.5
      },
      "predict": {
        "x": 14,
        "y": 74,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "revision (hours)",
      "yAxisLabel": "exam mark (\\%)",
      "caption": "Exam mark against revision time; the point at 14 hours lies below the line",
      "alt": "Scatter of exam mark against revision time for 10 students. Points rise from lower-left to upper-right showing strong positive correlation. The least-squares line y = 25 + 3.5x is drawn; the student at 14 hours scoring 68 lies noticeably below the line, whose value there is 74."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{revision hours (explanatory)}, \\quad y = \\text{mark (response)}",
          "explanation": "Revision is thought to affect the mark, so it is the explanatory variable and we fit $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the correlation",
          "workingLatex": "\\text{strong positive correlation}",
          "explanation": "The scatter points rise together, so more revision generally goes with higher marks.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{100}{10} = 10, \\quad \\bar{y} = \\dfrac{600}{10} = 60",
          "explanation": "The means give the balance point $(10, 60)$ the line passes through.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 1200 - \\dfrac{100^2}{10} = 1200 - 1000 = 200",
          "explanation": "$S_{xx}$ measures the spread of the revision times on their own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 6700 - \\dfrac{100 \\times 600}{10} = 6700 - 6000 = 700",
          "explanation": "$S_{xy}$ measures how revision and mark vary together; positive means they rise together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{700}{200} = 3.5",
          "explanation": "The gradient is the joint variation divided by the variation in revision time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the intercept and write the line",
          "workingLatex": "a = 60 - 3.5 \\times 10 = 25 \\ \\Rightarrow \\ y = 25 + 3.5x",
          "explanation": "Using the mean point gives $a = 25$, so the full model is $y = 25 + 3.5x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Predict for the 14-hour student",
          "workingLatex": "\\hat{y} = 25 + 3.5 \\times 14 = 74",
          "explanation": "The residual compares the actual mark with what the line predicts, so first find the predicted mark at $x = 14$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the residual",
          "workingLatex": "\\text{residual} = y - \\hat{y} = 68 - 74 = -6",
          "explanation": "The residual is actual minus predicted. Here it is $-6$, so the student scored $6$ marks below the model.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the residual",
          "workingLatex": "-6 < 0 \\Rightarrow \\text{point below the line}",
          "explanation": "A negative residual means the point lies below the line and the model over-predicted for this student — perhaps they had an off day or misread a question.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict at 8 hours (interpolation)",
          "workingLatex": "\\hat{y} = 25 + 3.5 \\times 8 = 53",
          "explanation": "$8$ hours is inside the range $4$ to $16$, so this interpolation of $53\\%$ is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Predict at 30 hours (extrapolation)",
          "workingLatex": "\\hat{y} = 25 + 3.5 \\times 30 = 130",
          "explanation": "$30$ hours is far outside the data, and $130\\%$ is impossible, so the model is invalid beyond the observed range.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the gradient",
          "workingLatex": "b = 3.5",
          "explanation": "Each extra hour of revision is associated with about $3.5$ more marks.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the intercept",
          "workingLatex": "a = 25",
          "explanation": "The model predicts $25\\%$ for a student who does no revision ($x = 0$); this is just below the data, so treat it as an approximate baseline.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Comment on the claim",
          "workingLatex": "\\text{association, not a guarantee}",
          "explanation": "The residual shows revision does not guarantee a mark: ability, teaching and sleep matter too, and more able students may revise more (a confounder). The line gives an average trend, not a promise for each student.",
          "diagram": null
        }
      ],
      "finalAnswer": "The regression line is $y = 25 + 3.5x$. At $14$ hours the line predicts $74$, so the residual is $68 - 74 = -6$: the student scored $6$ marks below the model and lies below the line. Predictions: $53\\%$ at $8$ hours (interpolation, reliable) and $130\\%$ at $30$ hours (extrapolation, impossible so invalid). The gradient means about $3.5$ marks per extra hour; the intercept $25\\%$ is the no-revision baseline. Revision helps on average but does not guarantee a higher mark, as the residual and confounders show."
    }
  },
  {
    "id": "al.y1.stats.regression.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "coding",
      "linear-scaling",
      "prediction",
      "interpretation"
    ],
    "questionText": "To simplify the arithmetic, an estate agent codes house data using $p = x - 100$ and $q = \\dfrac{y - 250}{5}$, where $x$ is floor area (m$^2$) and $y$ is price (in $\\pounds000$). The least-squares regression line of $q$ on $p$ is found to be $q = 1 + 0.6p$. Floor areas range from $80$ to $160$ m$^2$. (a) Explain briefly why coding is used. (b) Find the regression line of $y$ on $x$. (c) Predict the price of a $120$ m$^2$ home and a $30$ m$^2$ home, commenting on reliability. (d) Interpret the gradient and intercept of the $y$-on-$x$ line. (e) Explain why the intercept should not be read as a real price.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Explain why coding is used",
          "workingLatex": "p = x - 100, \\quad q = \\dfrac{y - 250}{5}",
          "explanation": "Subtracting and dividing turns large, awkward numbers into small ones, so the sums $\\Sigma p^2$, $\\Sigma pq$ are quicker and less error-prone. Coding does not change the shape of the relationship.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the coded line",
          "workingLatex": "q = 1 + 0.6p",
          "explanation": "This is the least-squares line for the coded data; we now decode it back to the original variables $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for p",
          "workingLatex": "q = 1 + 0.6(x - 100)",
          "explanation": "Replacing $p$ by $x - 100$ starts to return the line to the real $x$ scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for q",
          "workingLatex": "\\dfrac{y - 250}{5} = 1 + 0.6(x - 100)",
          "explanation": "Replacing $q$ by its definition brings the real price $y$ back into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply through by 5",
          "workingLatex": "y - 250 = 5 + 3(x - 100)",
          "explanation": "Multiplying both sides by $5$ clears the fraction; note $0.6 \\times 5 = 3$, so the scaling of $q$ multiplies the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y - 250 = 5 + 3x - 300",
          "explanation": "Expanding $3(x - 100)$ gives $3x - 300$, ready to collect the constants.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the constants",
          "workingLatex": "y - 250 = 3x - 295",
          "explanation": "Combining $5 - 300$ gives $-295$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Make y the subject",
          "workingLatex": "y = 3x - 45",
          "explanation": "Adding $250$ to both sides gives the regression line of $y$ on $x$ in the original units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the effect of coding",
          "workingLatex": "0.6 \\xrightarrow{\\times 5} 3",
          "explanation": "Dividing $q$ by $5$ made the coded gradient $0.6$ become the real gradient $3$; the shifts $-100$ and $-250$ only moved the intercept, not the slope.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Predict at 120 square metres (interpolation)",
          "workingLatex": "\\hat{y} = 3 \\times 120 - 45 = 315",
          "explanation": "$120$ m$^2$ is inside the observed range $80$ to $160$, so this interpolation of $\\pounds315000$ is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict at 30 square metres (extrapolation)",
          "workingLatex": "\\hat{y} = 3 \\times 30 - 45 = 45",
          "explanation": "$30$ m$^2$ is far below the data, so $\\pounds45000$ is unreliable extrapolation — small flats may not follow this trend.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the gradient",
          "workingLatex": "b = 3",
          "explanation": "Each extra square metre of floor area is associated with about $3$, that is $\\pounds3000$, more on the price.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the intercept",
          "workingLatex": "a = -45",
          "explanation": "The intercept is the fitted price at $0$ m$^2$, namely $-45$, that is $-\\pounds45000$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Explain why the intercept is not a real price",
          "workingLatex": "x = 0 \\ \\text{is impossible and far outside } 80\\text{--}160",
          "explanation": "A house with $0$ m$^2$ cannot exist, and $0$ is far below the data, so a negative price is meaningless. The intercept is just the mathematical constant where the line meets the axis, not a real value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Coding shrinks the numbers so the sums are easier and less error-prone. Decoding $q = 1 + 0.6p$ gives $y = 3x - 45$. Predictions: $\\pounds315000$ at $120$ m$^2$ (interpolation, reliable) and $\\pounds45000$ at $30$ m$^2$ (extrapolation, unreliable). The gradient means about $\\pounds3000$ per extra m$^2$; the intercept $-\\pounds45000$ is not a real price because $0$ m$^2$ is impossible and far outside the data — it is only where the line meets the axis."
    }
  },
  {
    "id": "al.y1.stats.regression.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "regression",
      "least-squares",
      "prediction",
      "model-limitations",
      "biology"
    ],
    "questionText": "A biologist measures $8$ tomato seedlings. For each, $x$ is the number of weeks since planting and $y$ is the height (cm). The totals are $\\Sigma x = 48$, $\\Sigma y = 176$, $\\Sigma x^2 = 330$ and $\\Sigma xy = 1182$; the plants were measured from week $1$ to week $11$. (a) Describe the correlation. (b) Find the least-squares regression line of $y$ on $x$. (c) Predict the height at week $7$ and at week $52$, commenting on reliability. (d) Interpret the gradient and intercept. (e) Explain what limits the use of this model for large $x$.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1,
          "y": 8
        },
        {
          "x": 2,
          "y": 9
        },
        {
          "x": 4,
          "y": 17
        },
        {
          "x": 6,
          "y": 21
        },
        {
          "x": 7,
          "y": 26
        },
        {
          "x": 9,
          "y": 30
        },
        {
          "x": 10,
          "y": 35
        },
        {
          "x": 11,
          "y": 38
        }
      ],
      "line": {
        "a": 4,
        "b": 3
      },
      "predict": {
        "x": 7,
        "y": 25,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "weeks since planting",
      "yAxisLabel": "height (cm)",
      "caption": "Seedling height against weeks since planting",
      "alt": "Scatter of seedling height against weeks since planting for 8 plants. Points rise from lower-left to upper-right close to a straight line, showing strong positive correlation. The least-squares line y = 4 + 3x is drawn with a prediction marked at week 7."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{weeks (explanatory)}, \\quad y = \\text{height (response)}",
          "explanation": "Time drives growth, so weeks is the explanatory variable and we fit height $y$ on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the correlation",
          "workingLatex": "\\text{strong positive correlation}",
          "explanation": "The scatter points rise steadily and lie close to a line, so height increases with the weeks since planting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{48}{8} = 6, \\quad \\bar{y} = \\dfrac{176}{8} = 22",
          "explanation": "The means give the balance point $(6, 22)$ that the line passes through.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 330 - \\dfrac{48^2}{8} = 330 - 288 = 42",
          "explanation": "$S_{xx}$ measures how spread out the week numbers are on their own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 1182 - \\dfrac{48 \\times 176}{8} = 1182 - 1056 = 126",
          "explanation": "$S_{xy}$ measures how time and height vary together; positive confirms the upward trend.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{126}{42} = 3",
          "explanation": "Dividing the joint variation by the variation in weeks gives the slope.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 22 - 3 \\times 6 = 4",
          "explanation": "Using the mean point forces the line through $(6, 22)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the regression line",
          "workingLatex": "y = 4 + 3x",
          "explanation": "This is the full model relating predicted height to weeks.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the mean point",
          "workingLatex": "4 + 3 \\times 6 = 22 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 6$ returns $\\bar{y} = 22$, confirming the line passes through the mean point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Predict at week 7 (interpolation)",
          "workingLatex": "\\hat{y} = 4 + 3 \\times 7 = 25",
          "explanation": "Week $7$ is inside the observed range $1$ to $11$, so this interpolation of $25$ cm is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict at week 52 (extrapolation)",
          "workingLatex": "\\hat{y} = 4 + 3 \\times 52 = 160",
          "explanation": "Week $52$ is far beyond the data, so $160$ cm is unreliable extrapolation — real plants do not grow in a straight line forever.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the gradient",
          "workingLatex": "b = 3",
          "explanation": "The seedlings grow by about $3$ cm per week on average over the period measured.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the intercept",
          "workingLatex": "a = 4",
          "explanation": "The model predicts about $4$ cm at planting (week $0$); since $0$ is just outside the data, this is an approximate starting height.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Explain the limitation for large x",
          "workingLatex": "\\text{growth saturates}",
          "explanation": "Plants eventually reach a maximum height and stop growing, so growth is not linear forever. The straight-line model only applies within the observed weeks; far beyond them it overestimates height badly.",
          "diagram": null
        }
      ],
      "finalAnswer": "The correlation is strong and positive. The regression line is $y = 4 + 3x$. Predictions: $\\hat{y} = 25$ cm at week $7$ (interpolation, reliable) and $160$ cm at week $52$ (extrapolation, unreliable). The gradient means about $3$ cm growth per week; the intercept $4$ cm is the approximate planting height. The model fails for large $x$ because plant growth saturates — it cannot continue in a straight line indefinitely."
    }
  },
  {
    "id": "al.y1.stats.regression.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Correlation and regression",
    "subtopicId": "al.y1.stats.regression",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "regression",
      "residual",
      "prediction",
      "correlation-causation",
      "interpretation"
    ],
    "questionText": "A company records monthly advertising spend $x$ (in $\\pounds000$) and sales $y$ (in $\\pounds000$) for $10$ months. The totals are $\\Sigma x = 150$, $\\Sigma y = 800$, $\\Sigma x^2 = 2500$ and $\\Sigma xy = 13000$; spend ranged from $\\pounds5000$ to $\\pounds25000$. (a) Find the least-squares regression line of $y$ on $x$. (b) In one month $\\pounds18000$ was spent and sales were $\\pounds100000$; find the residual and interpret it. (c) Predict sales for spends of $\\pounds12000$ and $\\pounds40000$, commenting on reliability. (d) Interpret the gradient and intercept. (e) Sales and advertising are strongly correlated; explain why this does not prove advertising alone drives sales.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the variables",
          "workingLatex": "x = \\text{spend (explanatory)}, \\quad y = \\text{sales (response)}",
          "explanation": "Advertising spend is thought to influence sales, so it is the explanatory variable and we fit $y$ on $x$. Both are measured in $\\pounds000$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{150}{10} = 15, \\quad \\bar{y} = \\dfrac{800}{10} = 80",
          "explanation": "The means give the balance point $(15, 80)$ the line passes through.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute S_xx",
          "workingLatex": "S_{xx} = 2500 - \\dfrac{150^2}{10} = 2500 - 2250 = 250",
          "explanation": "$S_{xx}$ measures the spread of the advertising spends on their own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute S_xy",
          "workingLatex": "S_{xy} = 13000 - \\dfrac{150 \\times 800}{10} = 13000 - 12000 = 1000",
          "explanation": "$S_{xy}$ measures how spend and sales vary together; positive confirms they rise together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{1000}{250} = 4",
          "explanation": "Dividing the joint variation by the variation in spend gives the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the intercept and write the line",
          "workingLatex": "a = 80 - 4 \\times 15 = 20 \\ \\Rightarrow \\ y = 20 + 4x",
          "explanation": "Using the mean point gives $a = 20$, so the model is $y = 20 + 4x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Predict for the 18k month",
          "workingLatex": "\\hat{y} = 20 + 4 \\times 18 = 92",
          "explanation": "To find the residual, first predict the sales at $x = 18$: the line gives $92$, that is $\\pounds92000$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the residual",
          "workingLatex": "\\text{residual} = y - \\hat{y} = 100 - 92 = 8",
          "explanation": "The residual is actual minus predicted. Here it is $+8$, so sales were $\\pounds8000$ above the model.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the residual",
          "workingLatex": "+8 > 0 \\Rightarrow \\text{point above the line}",
          "explanation": "A positive residual means the point lies above the line and the model under-predicted that month — perhaps a promotion or seasonal peak boosted sales.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Predict at 12k spend (interpolation)",
          "workingLatex": "\\hat{y} = 20 + 4 \\times 12 = 68",
          "explanation": "$\\pounds12000$ (i.e. $x = 12$) is inside the range $5$ to $25$, so this interpolation of $\\pounds68000$ is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict at 40k spend (extrapolation)",
          "workingLatex": "\\hat{y} = 20 + 4 \\times 40 = 180",
          "explanation": "$\\pounds40000$ is well beyond the data, so $\\pounds180000$ is unreliable — spending more brings diminishing returns as the market saturates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the gradient",
          "workingLatex": "b = 4",
          "explanation": "Each extra $\\pounds1000$ spent on advertising is associated with about $\\pounds4000$ more sales.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the intercept",
          "workingLatex": "a = 20",
          "explanation": "The model predicts $\\pounds20000$ of sales with no advertising ($x = 0$); since $0$ is outside the data, treat this as an approximate baseline.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Correlation versus causation",
          "workingLatex": "\\text{seasonality is a confounder}",
          "explanation": "Advertising is often increased in peak season, when sales are naturally high anyway, so seasonality inflates both. A strong correlation cannot isolate advertising's own effect, so it does not prove advertising alone drives sales.",
          "diagram": null
        }
      ],
      "finalAnswer": "The regression line is $y = 20 + 4x$. At $\\pounds18000$ spend the line predicts $\\pounds92000$, so the residual is $100 - 92 = +8$: sales were $\\pounds8000$ above the model, a point above the line (model under-predicted). Predictions: $\\pounds68000$ at $\\pounds12000$ spend (interpolation, reliable) and $\\pounds180000$ at $\\pounds40000$ (extrapolation, unreliable — diminishing returns). The gradient means about $\\pounds4000$ sales per extra $\\pounds1000$ spent; the intercept $\\pounds20000$ is the no-advertising baseline. Correlation does not prove cause — seasonality is a confounder."
    }
  }
];
