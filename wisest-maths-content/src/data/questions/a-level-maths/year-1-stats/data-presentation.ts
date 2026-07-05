import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.stats.data-presentation.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "frequency density",
      "class width",
      "drawing"
    ],
    "questionText": "The heights, $h$ cm, of $55$ tomato plants are recorded in the table below.\n\n$\\begin{array}{|c|c|} \\hline \\text{Height } (h \\text{ cm}) & \\text{Frequency} \\\\ \\hline 0 \\le h < 10 & 8 \\\\ 10 \\le h < 15 & 15 \\\\ 15 \\le h < 20 & 20 \\\\ 20 \\le h < 30 & 12 \\\\ \\hline \\end{array}$\n\nCalculate the frequency density for each class and draw a histogram to represent the data.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find frequency density.",
          "workingLatex": "\\text{frequency density} = \\frac{\\text{frequency}}{\\text{class width}}",
          "explanation": "On a histogram it is the area of each bar, not its height, that represents frequency. Because these classes have different widths, we cannot simply plot the raw frequencies. Dividing each frequency by its class width gives the frequency density, and plotting that on the vertical axis makes area equal to frequency.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Frequency density of the first class.",
          "workingLatex": "\\text{width} = 10 - 0 = 10, \\qquad \\text{f.d.} = \\frac{8}{10} = 0.8",
          "explanation": "The class runs from $0$ to $10$, so its width is $10$. Sharing the $8$ plants evenly across those $10$ cm gives $0.8$ plants per cm of height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Frequency density of the second class.",
          "workingLatex": "\\text{width} = 15 - 10 = 5, \\qquad \\text{f.d.} = \\frac{15}{5} = 3",
          "explanation": "This class is only $5$ cm wide but holds $15$ plants, so the plants are packed more densely: $3$ per cm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Frequency density of the third class.",
          "workingLatex": "\\text{width} = 20 - 15 = 5, \\qquad \\text{f.d.} = \\frac{20}{5} = 4",
          "explanation": "Another $5$ cm wide class, this time with $20$ plants, giving the highest density so far at $4$ per cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Frequency density of the fourth class.",
          "workingLatex": "\\text{width} = 30 - 20 = 10, \\qquad \\text{f.d.} = \\frac{12}{10} = 1.2",
          "explanation": "The last class is $10$ cm wide with $12$ plants, so its density is a low $1.2$ per cm even though it is a fairly wide class.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the results in a table.",
          "workingLatex": "\\begin{array}{|c|c|c|} \\hline \\text{Class} & \\text{Frequency} & \\text{Frequency density} \\\\ \\hline 0 \\le h < 10 & 8 & 0.8 \\\\ 10 \\le h < 15 & 15 & 3 \\\\ 15 \\le h < 20 & 20 & 4 \\\\ 20 \\le h < 30 & 12 & 1.2 \\\\ \\hline \\end{array}",
          "explanation": "Laying the frequency densities out beside their classes makes it easy to read off the height of each bar before drawing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Draw the histogram.",
          "workingLatex": "\\text{Height on the } x\\text{-axis, frequency density on the } y\\text{-axis; bars touch.}",
          "explanation": "Plot height along the horizontal axis and frequency density up the vertical axis. Each bar spans its class boundaries and reaches the frequency density we calculated, with no gaps between bars because the data is continuous.",
          "diagram": {
            "kind": "histogram",
            "bars": [
              {
                "x0": 0,
                "x1": 10,
                "freqDensity": 0.8
              },
              {
                "x0": 10,
                "x1": 15,
                "freqDensity": 3
              },
              {
                "x0": 15,
                "x1": 20,
                "freqDensity": 4
              },
              {
                "x0": 20,
                "x1": 30,
                "freqDensity": 1.2
              }
            ],
            "xAxisLabel": "height (cm)",
            "yAxisLabel": "frequency density",
            "caption": "Histogram of tomato plant heights",
            "alt": "Histogram with bars of frequency density 0.8, 3, 4 and 1.2"
          }
        }
      ],
      "finalAnswer": "Frequency densities: $0.8$, $3$, $4$ and $1.2$. The histogram is shown above."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "reading",
      "area",
      "frequency"
    ],
    "questionText": "The histogram shows the journey times, $t$ minutes, of a group of commuters. Use the histogram to find the number of commuters whose journey time was between $20$ and $30$ minutes.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 0,
          "x1": 10,
          "freqDensity": 0.8
        },
        {
          "x0": 10,
          "x1": 20,
          "freqDensity": 2.5
        },
        {
          "x0": 20,
          "x1": 30,
          "freqDensity": 3.2
        },
        {
          "x0": 30,
          "x1": 50,
          "freqDensity": 1.1
        }
      ],
      "xAxisLabel": "journey time (minutes)",
      "yAxisLabel": "frequency density",
      "caption": "Histogram of commuter journey times",
      "alt": "Histogram with bars of frequency density 0.8, 2.5, 3.2 and 1.1"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the key fact about histograms.",
          "workingLatex": "\\text{frequency} = \\text{frequency density} \\times \\text{class width} = \\text{area of bar}",
          "explanation": "On a histogram the frequency in a class is the area of its bar. To find a frequency we multiply the bar's height (its frequency density) by its width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the correct bar.",
          "workingLatex": "20 \\le t < 30",
          "explanation": "We need the class covering $20$ to $30$ minutes, so we focus on the bar sitting directly above that interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the frequency density from the vertical axis.",
          "workingLatex": "\\text{f.d.} = 3.2",
          "explanation": "Reading straight across from the top of that bar to the frequency density axis gives a height of $3.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the class width.",
          "workingLatex": "\\text{width} = 30 - 20 = 10",
          "explanation": "The bar stretches from $20$ to $30$ along the horizontal axis, so it is $10$ minutes wide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply to get the frequency.",
          "workingLatex": "\\text{frequency} = 3.2 \\times 10 = 32",
          "explanation": "Height times width gives the area of the bar, which is the number of commuters in this class.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "32 \\text{ commuters}",
          "explanation": "So $32$ commuters had a journey time between $20$ and $30$ minutes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$32$ commuters."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "total frequency",
      "area",
      "reading"
    ],
    "questionText": "The histogram shows the masses, $m$ grams, of a sample of pieces of fruit. Use the histogram to estimate the total number of pieces of fruit in the sample.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 0,
          "x1": 5,
          "freqDensity": 2
        },
        {
          "x0": 5,
          "x1": 10,
          "freqDensity": 4
        },
        {
          "x0": 10,
          "x1": 20,
          "freqDensity": 3
        },
        {
          "x0": 20,
          "x1": 40,
          "freqDensity": 0.5
        }
      ],
      "xAxisLabel": "mass (grams)",
      "yAxisLabel": "frequency density",
      "caption": "Histogram of fruit masses",
      "alt": "Histogram with bars of frequency density 2, 4, 3 and 0.5"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise how the total appears on a histogram.",
          "workingLatex": "\\text{total frequency} = \\text{total area of all bars}",
          "explanation": "Each bar's area is the frequency in that class, so adding all the areas together gives the total number of items in the sample.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Area of the first bar.",
          "workingLatex": "2 \\times (5 - 0) = 2 \\times 5 = 10",
          "explanation": "Height $2$ across a width of $5$ grams gives an area of $10$, so $10$ pieces of fruit lie in this class.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Area of the second bar.",
          "workingLatex": "4 \\times (10 - 5) = 4 \\times 5 = 20",
          "explanation": "This bar is $5$ grams wide with height $4$, giving $20$ pieces of fruit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Area of the third bar.",
          "workingLatex": "3 \\times (20 - 10) = 3 \\times 10 = 30",
          "explanation": "A width of $10$ grams and height $3$ give an area of $30$, so $30$ pieces here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Area of the fourth bar.",
          "workingLatex": "0.5 \\times (40 - 20) = 0.5 \\times 20 = 10",
          "explanation": "Although this class is wide ($20$ grams), its low height of $0.5$ means it holds only $10$ pieces.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the areas.",
          "workingLatex": "10 + 20 + 30 + 10 = 70",
          "explanation": "Summing the frequencies from every class gives the total for the whole sample.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the total.",
          "workingLatex": "70 \\text{ pieces of fruit}",
          "explanation": "The total area, and therefore the estimated total number of pieces of fruit, is $70$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$70$ pieces of fruit."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "histogram",
      "frequency density",
      "misconception",
      "class width"
    ],
    "questionText": "The ages, $a$ years, of $137$ members of a club are shown in the table.\n\n$\\begin{array}{|c|c|} \\hline \\text{Age } (a \\text{ years}) & \\text{Frequency} \\\\ \\hline 16 \\le a < 18 & 30 \\\\ 18 \\le a < 25 & 42 \\\\ 25 \\le a < 40 & 45 \\\\ 40 \\le a < 60 & 20 \\\\ \\hline \\end{array}$\n\nCalculate the frequency density for each class. State which class would be represented by the tallest bar on a histogram, and explain why this is not the class containing the most members.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the frequency density formula.",
          "workingLatex": "\\text{frequency density} = \\frac{\\text{frequency}}{\\text{class width}}",
          "explanation": "The height of each bar is the frequency density, so we must divide each frequency by its class width before we can compare bar heights.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First class.",
          "workingLatex": "\\text{width} = 18 - 16 = 2, \\qquad \\text{f.d.} = \\frac{30}{2} = 15",
          "explanation": "This is a very narrow class, just $2$ years wide, so its $30$ members are packed in tightly at $15$ per year.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second class.",
          "workingLatex": "\\text{width} = 25 - 18 = 7, \\qquad \\text{f.d.} = \\frac{42}{7} = 6",
          "explanation": "Spreading $42$ members across $7$ years gives a density of $6$ per year.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third class.",
          "workingLatex": "\\text{width} = 40 - 25 = 15, \\qquad \\text{f.d.} = \\frac{45}{15} = 3",
          "explanation": "This class has the most members ($45$) but it is also very wide ($15$ years), so the density falls to just $3$ per year.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Fourth class.",
          "workingLatex": "\\text{width} = 60 - 40 = 20, \\qquad \\text{f.d.} = \\frac{20}{20} = 1",
          "explanation": "The widest class of all, $20$ years, holds $20$ members, giving the lowest density of $1$ per year.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the frequency densities.",
          "workingLatex": "15 > 6 > 3 > 1",
          "explanation": "The tallest bar is the one with the greatest frequency density, since bar height is frequency density, not frequency.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the tallest bar and explain the contrast.",
          "workingLatex": "\\text{Tallest bar: } 16 \\le a < 18 \\;(\\text{f.d.}=15)",
          "explanation": "The $16$ to $18$ class gives the tallest bar because its members are squeezed into a very narrow $2$-year band. The $25$ to $40$ class actually has more members ($45$), but they are spread over $15$ years, so its bar is much shorter. Height shows how crowded a class is, not how many are in it.",
          "diagram": {
            "kind": "histogram",
            "bars": [
              {
                "x0": 16,
                "x1": 18,
                "freqDensity": 15
              },
              {
                "x0": 18,
                "x1": 25,
                "freqDensity": 6
              },
              {
                "x0": 25,
                "x1": 40,
                "freqDensity": 3
              },
              {
                "x0": 40,
                "x1": 60,
                "freqDensity": 1
              }
            ],
            "xAxisLabel": "age (years)",
            "yAxisLabel": "frequency density",
            "caption": "Histogram of club members' ages",
            "alt": "Histogram with a tall narrow bar of frequency density 15, then bars of 6, 3 and 1"
          }
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion.",
          "workingLatex": "\\text{f.d.: } 15,\\; 6,\\; 3,\\; 1",
          "explanation": "The frequency densities are $15$, $6$, $3$ and $1$, and the tallest bar represents the $16 \\le a < 18$ class.",
          "diagram": null
        }
      ],
      "finalAnswer": "Frequency densities $15$, $6$, $3$ and $1$. The tallest bar is the class $16 \\le a < 18$ (frequency density $15$); it is not the class with the most members because that class is very narrow, so the same members give a much greater density."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "part of a class",
      "proportion",
      "estimate"
    ],
    "questionText": "The histogram shows the waiting times, $t$ minutes, of a sample of customers at a post office. Estimate the number of customers who waited between $15$ and $20$ minutes.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 0,
          "x1": 5,
          "freqDensity": 4
        },
        {
          "x0": 5,
          "x1": 15,
          "freqDensity": 6
        },
        {
          "x0": 15,
          "x1": 25,
          "freqDensity": 3
        },
        {
          "x0": 25,
          "x1": 40,
          "freqDensity": 1
        }
      ],
      "xAxisLabel": "waiting time (minutes)",
      "yAxisLabel": "frequency density",
      "caption": "Histogram of customer waiting times",
      "alt": "Histogram with bars of frequency density 4, 6, 3 and 1"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "See where the required interval sits.",
          "workingLatex": "15 \\le t < 20 \\subset 15 \\le t < 25",
          "explanation": "The interval $15$ to $20$ is not a class on its own; it is the left-hand part of the class $15 \\le t < 25$. So we need only a portion of that bar.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the frequency density of that class.",
          "workingLatex": "\\text{f.d.} = 3",
          "explanation": "The bar covering $15$ to $25$ has height $3$ on the frequency density axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the assumption we are making.",
          "workingLatex": "\\text{data spread evenly across } 15 \\le t < 25",
          "explanation": "We do not know exactly where each customer's time falls inside the class, so we assume the waiting times are spread uniformly across it. This lets us take a matching fraction of the frequency.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the width of the part we want.",
          "workingLatex": "20 - 15 = 5",
          "explanation": "The slice from $15$ to $20$ minutes is $5$ minutes wide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Estimate the frequency of that slice directly.",
          "workingLatex": "\\text{frequency} = \\text{f.d.} \\times \\text{part width} = 3 \\times 5 = 15",
          "explanation": "The number in the slice is the area of that portion of the bar: height $3$ times width $5$ gives $15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with the proportion method: whole-class frequency.",
          "workingLatex": "\\text{class frequency} = 3 \\times 10 = 30",
          "explanation": "The full class from $15$ to $25$ is $10$ minutes wide, so it contains $30$ customers in total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the fraction of the class we need.",
          "workingLatex": "\\frac{5}{10} = \\frac{1}{2}",
          "explanation": "The slice is $5$ of the $10$ minutes, so it is half of the class.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take that fraction of the frequency.",
          "workingLatex": "\\frac{1}{2} \\times 30 = 15",
          "explanation": "Half of the $30$ customers gives $15$, which matches the area method and confirms our answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note that this is an estimate.",
          "workingLatex": "\\approx 15 \\text{ customers}",
          "explanation": "Because it rests on the assumption of an even spread, the figure is an estimate rather than an exact count.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "15 \\text{ customers}",
          "explanation": "An estimated $15$ customers waited between $15$ and $20$ minutes.",
          "diagram": null
        }
      ],
      "finalAnswer": "An estimated $15$ customers."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "missing frequency",
      "total",
      "frequency density"
    ],
    "questionText": "A histogram is being drawn to represent $100$ observations of a variable $x$. The bars for the first three classes have been drawn, as shown. The final class is $30 \\le x < 50$, but its bar has not yet been drawn. Find the frequency of the final class and the frequency density needed to draw its bar.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 0,
          "x1": 10,
          "freqDensity": 1.2
        },
        {
          "x0": 10,
          "x1": 20,
          "freqDensity": 2.5
        },
        {
          "x0": 20,
          "x1": 30,
          "freqDensity": 3.3
        }
      ],
      "xAxisLabel": "value of x",
      "yAxisLabel": "frequency density",
      "caption": "Partly drawn histogram; the final class is missing",
      "alt": "Histogram with three bars of frequency density 1.2, 2.5 and 3.3 and a gap after 30"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the fact that total area equals total frequency.",
          "workingLatex": "\\text{total area} = \\text{total frequency} = 100",
          "explanation": "All the bars together must account for the full $100$ observations, so the areas of the four bars add up to $100$. Finding the three known areas lets us deduce the missing one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Frequency of the first class.",
          "workingLatex": "1.2 \\times (10 - 0) = 1.2 \\times 10 = 12",
          "explanation": "Height $1.2$ across a width of $10$ gives an area of $12$ observations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Frequency of the second class.",
          "workingLatex": "2.5 \\times (20 - 10) = 2.5 \\times 10 = 25",
          "explanation": "The second bar has height $2.5$ over a width of $10$, giving $25$ observations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Frequency of the third class.",
          "workingLatex": "3.3 \\times (30 - 20) = 3.3 \\times 10 = 33",
          "explanation": "The third bar's height of $3.3$ over its width of $10$ gives $33$ observations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the three known frequencies.",
          "workingLatex": "12 + 25 + 33 = 70",
          "explanation": "The three drawn bars account for $70$ of the observations between them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract from the total to find the missing frequency.",
          "workingLatex": "100 - 70 = 30",
          "explanation": "Whatever is left of the $100$ observations must belong to the final class, so it contains $30$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the width of the final class.",
          "workingLatex": "50 - 30 = 20",
          "explanation": "The final class runs from $30$ to $50$, so it is $20$ units wide.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert to a frequency density.",
          "workingLatex": "\\text{f.d.} = \\frac{30}{20} = 1.5",
          "explanation": "Dividing the frequency by the class width gives the height at which to draw the bar so that its area is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\text{frequency} = 30, \\qquad \\text{f.d.} = 1.5",
          "explanation": "The final class has frequency $30$, and its bar should be drawn at a frequency density of $1.5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Frequency $= 30$; frequency density $= 1.5$."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "missing width",
      "class boundary",
      "frequency density"
    ],
    "questionText": "The histogram shows the distribution of a variable $x$. The bar for the class beginning at $30$ has frequency density $2.5$ and represents a frequency of $20$. Find the width of this class and hence its upper class boundary.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 10,
          "x1": 20,
          "freqDensity": 1.4
        },
        {
          "x0": 20,
          "x1": 30,
          "freqDensity": 3.5
        },
        {
          "x0": 30,
          "x1": 38,
          "freqDensity": 2.5
        },
        {
          "x0": 38,
          "x1": 50,
          "freqDensity": 1
        }
      ],
      "xAxisLabel": "value of x",
      "yAxisLabel": "frequency density",
      "caption": "Histogram of a variable x",
      "alt": "Histogram with bars of frequency density 1.4, 3.5, 2.5 and 1"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the relationship for this bar.",
          "workingLatex": "\\text{frequency} = \\text{frequency density} \\times \\text{class width}",
          "explanation": "The area of the bar is its frequency. Since we know the frequency and the height, we can work backwards to find the missing width.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values for this class.",
          "workingLatex": "\\text{f.d.} = 2.5, \\qquad \\text{frequency} = 20",
          "explanation": "The class beginning at $30$ has a bar height of $2.5$ and represents $20$ items; only its width is unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the formula for width.",
          "workingLatex": "\\text{class width} = \\frac{\\text{frequency}}{\\text{frequency density}}",
          "explanation": "Dividing the frequency by the frequency density undoes the multiplication and isolates the width we want.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values.",
          "workingLatex": "\\text{class width} = \\frac{20}{2.5}",
          "explanation": "We put in the frequency $20$ and the frequency density $2.5$ read from the histogram.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the width.",
          "workingLatex": "\\frac{20}{2.5} = 8",
          "explanation": "Dividing gives a class width of $8$ units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the upper class boundary.",
          "workingLatex": "30 + 8 = 38",
          "explanation": "Adding the width to the lower boundary of $30$ gives the value where the class ends.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the class.",
          "workingLatex": "30 \\le x < 38",
          "explanation": "So the class runs from $30$ up to $38$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check against the histogram.",
          "workingLatex": "2.5 \\times 8 = 20 \\;\\checkmark",
          "explanation": "A bar of height $2.5$ and width $8$ has area $20$, matching the given frequency, so the boundary is consistent with the picture.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\text{width} = 8, \\qquad \\text{upper boundary} = 38",
          "explanation": "The class is $8$ wide and its upper boundary is $38$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Class width $= 8$; upper class boundary $= 38$."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "reading",
      "complete table",
      "total frequency"
    ],
    "questionText": "The histogram shows the weights, $w$ kg, of a sample of parcels. Work out the frequency of each class and hence the total number of parcels.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 0,
          "x1": 20,
          "freqDensity": 0.6
        },
        {
          "x0": 20,
          "x1": 30,
          "freqDensity": 2.4
        },
        {
          "x0": 30,
          "x1": 35,
          "freqDensity": 5
        },
        {
          "x0": 35,
          "x1": 50,
          "freqDensity": 1.2
        }
      ],
      "xAxisLabel": "weight (kilograms)",
      "yAxisLabel": "frequency density",
      "caption": "Histogram of parcel weights",
      "alt": "Histogram with bars of frequency density 0.6, 2.4, 5 and 1.2"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall that each frequency is a bar area.",
          "workingLatex": "\\text{frequency} = \\text{frequency density} \\times \\text{class width}",
          "explanation": "To read each frequency off the histogram we multiply the height of a bar by its width; the total is then the sum of all four areas.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First class.",
          "workingLatex": "0.6 \\times (20 - 0) = 0.6 \\times 20 = 12",
          "explanation": "This bar is short but very wide, $20$ kg across at height $0.6$, giving $12$ parcels.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second class.",
          "workingLatex": "2.4 \\times (30 - 20) = 2.4 \\times 10 = 24",
          "explanation": "Height $2.4$ over a $10$ kg width gives $24$ parcels.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third class.",
          "workingLatex": "5 \\times (35 - 30) = 5 \\times 5 = 25",
          "explanation": "This is the tallest bar, but it is only $5$ kg wide, so its area is $25$ parcels.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Fourth class.",
          "workingLatex": "1.2 \\times (50 - 35) = 1.2 \\times 15 = 18",
          "explanation": "Height $1.2$ across the $15$ kg width gives $18$ parcels.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Record the frequencies in a table.",
          "workingLatex": "\\begin{array}{|c|c|} \\hline \\text{Class} & \\text{Frequency} \\\\ \\hline 0 \\le w < 20 & 12 \\\\ 20 \\le w < 30 & 24 \\\\ 30 \\le w < 35 & 25 \\\\ 35 \\le w < 50 & 18 \\\\ \\hline \\end{array}",
          "explanation": "Setting the results out clearly makes the final addition straightforward and lets us check nothing has been missed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the frequencies.",
          "workingLatex": "12 + 24 + 25 + 18 = 79",
          "explanation": "Summing every class gives the total number of parcels in the sample.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note a common trap.",
          "workingLatex": "\\text{tallest bar } (30 \\le w < 35) \\neq \\text{largest count on its own}",
          "explanation": "The tallest bar is the $30$ to $35$ class, which does hold the most parcels ($25$) here, but only because it is narrow and dense. Always compare areas, not heights, when judging class sizes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the total.",
          "workingLatex": "79 \\text{ parcels}",
          "explanation": "The sample contains $79$ parcels in total.",
          "diagram": null
        }
      ],
      "finalAnswer": "Frequencies $12$, $24$, $25$ and $18$; total $= 79$ parcels."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "estimate above value",
      "area",
      "proportion"
    ],
    "questionText": "The histogram shows the speeds, $s$ mph, of a sample of cars passing a checkpoint. Estimate the number of cars travelling faster than $45$ mph, and express this as a percentage of all the cars in the sample.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 20,
          "x1": 30,
          "freqDensity": 1.5
        },
        {
          "x0": 30,
          "x1": 40,
          "freqDensity": 4
        },
        {
          "x0": 40,
          "x1": 50,
          "freqDensity": 3
        },
        {
          "x0": 50,
          "x1": 70,
          "freqDensity": 0.75
        }
      ],
      "xAxisLabel": "speed (miles per hour)",
      "yAxisLabel": "frequency density",
      "caption": "Histogram of car speeds",
      "alt": "Histogram with bars of frequency density 1.5, 4, 3 and 0.75"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach.",
          "workingLatex": "\\text{frequency} = \\text{area}; \\quad \\text{total} = \\text{sum of areas}",
          "explanation": "We will first find the total number of cars by adding all the bar areas, then find how many exceed $45$ mph, which needs part of one bar plus a whole bar.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Frequency of the first class.",
          "workingLatex": "1.5 \\times (30 - 20) = 1.5 \\times 10 = 15",
          "explanation": "Height $1.5$ over a $10$ mph width gives $15$ cars.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Frequency of the second class.",
          "workingLatex": "4 \\times (40 - 30) = 4 \\times 10 = 40",
          "explanation": "The tallest bar, height $4$ over width $10$, holds $40$ cars.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Frequency of the third class.",
          "workingLatex": "3 \\times (50 - 40) = 3 \\times 10 = 30",
          "explanation": "Height $3$ over width $10$ gives $30$ cars in the $40$ to $50$ class.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Frequency of the fourth class.",
          "workingLatex": "0.75 \\times (70 - 50) = 0.75 \\times 20 = 15",
          "explanation": "This wide, low bar, height $0.75$ over $20$ mph, holds $15$ cars.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the total number of cars.",
          "workingLatex": "15 + 40 + 30 + 15 = 100",
          "explanation": "Adding all four class frequencies gives the total sample size of $100$ cars.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Locate the value 45 mph.",
          "workingLatex": "40 < 45 < 50",
          "explanation": "The speed $45$ falls inside the $40$ to $50$ class, so cars above $45$ come from the upper part of that class together with the whole of the $50$ to $70$ class.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the assumption for the split class.",
          "workingLatex": "\\text{speeds spread evenly across } 40 \\le s < 50",
          "explanation": "We assume the cars are spread uniformly through the $40$ to $50$ class, so the fraction of the bar above $45$ carries the same fraction of its cars.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Width of the part above 45 in that class.",
          "workingLatex": "50 - 45 = 5",
          "explanation": "From $45$ up to the top of the class at $50$ is a $5$ mph slice.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Frequency of that slice.",
          "workingLatex": "3 \\times 5 = 15",
          "explanation": "The area of the slice, height $3$ times width $5$, estimates $15$ cars between $45$ and $50$ mph.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the whole of the top class.",
          "workingLatex": "15 \\text{ (from } 50 \\le s < 70)",
          "explanation": "Every car in the $50$ to $70$ class is above $45$ mph, and we found that class holds $15$ cars.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Total number above 45 mph.",
          "workingLatex": "15 + 15 = 30",
          "explanation": "Combining the slice with the whole top class gives an estimate of $30$ cars faster than $45$ mph.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Express as a percentage.",
          "workingLatex": "\\frac{30}{100} \\times 100\\% = 30\\%",
          "explanation": "Comparing the $30$ fast cars with the total of $100$ gives $30\\%$ of the sample.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer with a caveat.",
          "workingLatex": "\\approx 30 \\text{ cars} = 30\\%",
          "explanation": "Because it relies on the even-spread assumption within the split class, this is an estimate: about $30$ cars, or $30\\%$ of the sample, travelled faster than $45$ mph.",
          "diagram": null
        }
      ],
      "finalAnswer": "About $30$ cars, which is $30\\%$ of the sample."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "missing frequency",
      "estimate above value",
      "percentage"
    ],
    "questionText": "A histogram represents the marks, $m$, of $200$ candidates in an exam. All classes have been drawn except the class $50 \\le m < 70$, whose bar is missing.\n(a) Find the frequency and the frequency density of the class $50 \\le m < 70$.\n(b) Estimate the number of candidates who scored at least $60$ marks, giving your answer as a percentage of all candidates to $3$ significant figures.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 0,
          "x1": 20,
          "freqDensity": 1.5
        },
        {
          "x0": 20,
          "x1": 40,
          "freqDensity": 3
        },
        {
          "x0": 40,
          "x1": 50,
          "freqDensity": 4
        },
        {
          "x0": 70,
          "x1": 100,
          "freqDensity": 0.5
        }
      ],
      "xAxisLabel": "mark",
      "yAxisLabel": "frequency density",
      "caption": "Histogram of exam marks with one class missing",
      "alt": "Histogram with bars of frequency density 1.5, 3 and 4, a gap from 50 to 70, then a bar of 0.5"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the total-frequency equation.",
          "workingLatex": "\\text{sum of all bar areas} = 200",
          "explanation": "The whole histogram must account for all $200$ candidates, so the four drawn areas plus the missing area total $200$. Finding the drawn areas reveals the missing frequency.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Area of the first class.",
          "workingLatex": "1.5 \\times (20 - 0) = 1.5 \\times 20 = 30",
          "explanation": "Height $1.5$ across a $20$-mark width gives $30$ candidates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Area of the second class.",
          "workingLatex": "3 \\times (40 - 20) = 3 \\times 20 = 60",
          "explanation": "Height $3$ over a $20$-mark width gives $60$ candidates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Area of the third class.",
          "workingLatex": "4 \\times (50 - 40) = 4 \\times 10 = 40",
          "explanation": "Height $4$ over a $10$-mark width gives $40$ candidates.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Area of the last drawn class.",
          "workingLatex": "0.5 \\times (100 - 70) = 0.5 \\times 30 = 15",
          "explanation": "This wide, low bar, height $0.5$ over $30$ marks, holds $15$ candidates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the drawn frequencies.",
          "workingLatex": "30 + 60 + 40 + 15 = 145",
          "explanation": "The four visible bars account for $145$ candidates between them.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the missing frequency.",
          "workingLatex": "200 - 145 = 55",
          "explanation": "The rest of the $200$ candidates must lie in the missing $50 \\le m < 70$ class, so it contains $55$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find its frequency density.",
          "workingLatex": "\\text{f.d.} = \\frac{55}{70 - 50} = \\frac{55}{20} = 2.75",
          "explanation": "Dividing the frequency by the $20$-mark width gives the height at which the missing bar should be drawn. This completes part (a).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up part (b): locate mark 60.",
          "workingLatex": "50 < 60 < 70",
          "explanation": "The mark $60$ falls inside the class we just completed. Candidates scoring at least $60$ come from the upper part of that class plus the whole $70$ to $100$ class.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the assumption and find the fraction.",
          "workingLatex": "\\frac{70 - 60}{70 - 50} = \\frac{10}{20} = \\frac{1}{2}",
          "explanation": "Assuming marks are spread evenly across the $50$ to $70$ class, the part from $60$ to $70$ is $10$ of the $20$ marks, which is half of the class.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Estimate the candidates scoring 60 to 70.",
          "workingLatex": "\\frac{1}{2} \\times 55 = 27.5",
          "explanation": "Half of the $55$ candidates in that class gives an estimate of $27.5$; a fractional value is expected because we are proportioning a class.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the whole top class.",
          "workingLatex": "27.5 + 15 = 42.5",
          "explanation": "Every candidate in the $70$ to $100$ class scored at least $60$, so we add its $15$ candidates to get $42.5$ scoring $60$ or more.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write this as a proportion of all candidates.",
          "workingLatex": "\\frac{42.5}{200} = 0.2125",
          "explanation": "Comparing the estimated $42.5$ with the total $200$ gives the proportion scoring at least $60$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Convert to a percentage.",
          "workingLatex": "0.2125 \\times 100\\% = 21.25\\%",
          "explanation": "Multiplying the proportion by $100$ turns it into a percentage.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Round and state the answer.",
          "workingLatex": "21.25\\% \\approx 21.3\\% \\;(3\\text{ s.f.})",
          "explanation": "Rounding to $3$ significant figures gives $21.3\\%$. This is an estimate because of the even-spread assumption inside the split class.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Frequency $= 55$, frequency density $= 2.75$. (b) About $42.5$ candidates, which is $21.3\\%$ of all candidates (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "grouped data",
      "frequency table",
      "statistics"
    ],
    "questionText": "The table shows the times, $t$ minutes, taken by $45$ people to complete a puzzle.\n\n| Time ($t$ minutes) | Frequency |\n|---|---|\n| $0 < t \\le 5$ | $4$ |\n| $5 < t \\le 10$ | $11$ |\n| $10 < t \\le 15$ | $18$ |\n| $15 < t \\le 20$ | $9$ |\n| $20 < t \\le 25$ | $3$ |\n\nConstruct a cumulative frequency table for these data.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what cumulative frequency means",
          "workingLatex": "\\text{cumulative frequency} = \\text{running total of frequencies}",
          "explanation": "Cumulative frequency counts how many data values fall at or below the upper boundary of each class. We build it by keeping a running total: each new figure is the sum of all frequencies up to and including that class.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cumulative frequency up to 5 minutes",
          "workingLatex": "4",
          "explanation": "The first class has no earlier classes, so its cumulative frequency is simply its own frequency. So $4$ people finished in $5$ minutes or less.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cumulative frequency up to 10 minutes",
          "workingLatex": "4 + 11 = 15",
          "explanation": "We add the second frequency to the running total. This tells us $15$ people finished in $10$ minutes or less.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cumulative frequency up to 15 minutes",
          "workingLatex": "15 + 18 = 33",
          "explanation": "Adding the next frequency continues the running total, giving $33$ people who finished in $15$ minutes or less.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cumulative frequency up to 20 minutes",
          "workingLatex": "33 + 9 = 42",
          "explanation": "We add the fourth frequency, so $42$ people finished in $20$ minutes or less.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cumulative frequency up to 25 minutes",
          "workingLatex": "42 + 3 = 45",
          "explanation": "Adding the final frequency completes the running total. By this point every person is included.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the final value equals the total",
          "workingLatex": "45 = n",
          "explanation": "A useful check: the last cumulative frequency must equal the total number of people, $n = 45$. It matches, so our running totals are correct. Plotting (upper boundary, cumulative frequency) gives the points we would use to draw the cumulative frequency graph.",
          "diagram": {
            "kind": "cumulativeFrequency",
            "points": [
              {
                "x": 0,
                "cf": 0
              },
              {
                "x": 5,
                "cf": 4
              },
              {
                "x": 10,
                "cf": 15
              },
              {
                "x": 15,
                "cf": 33
              },
              {
                "x": 20,
                "cf": 42
              },
              {
                "x": 25,
                "cf": 45
              }
            ],
            "origin": 0,
            "xAxisLabel": "time (minutes)",
            "yAxisLabel": "cumulative frequency",
            "caption": "Cumulative frequency graph of the puzzle times",
            "alt": "Rising curve through the plotted cumulative totals up to 45"
          }
        }
      ],
      "finalAnswer": "The cumulative frequencies are $4$, $15$, $33$, $42$ and $45$, up to $5$, $10$, $15$, $20$ and $25$ minutes respectively. The final value equals the total, $n = 45$."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "grouped data",
      "running total",
      "statistics"
    ],
    "questionText": "The heights, $h$ cm, of $50$ tomato plants are summarised in the table below.\n\n| Height ($h$ cm) | Frequency |\n|---|---|\n| $0 < h \\le 10$ | $6$ |\n| $10 < h \\le 20$ | $14$ |\n| $20 < h \\le 30$ | $20$ |\n| $30 < h \\le 40$ | $8$ |\n| $40 < h \\le 50$ | $2$ |\n\nWork out the cumulative frequency for each class.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the method",
          "workingLatex": "\\text{c.f. of a class} = \\text{sum of all frequencies up to its upper boundary}",
          "explanation": "Each cumulative frequency answers the question: how many plants are this tall or shorter? We find it by adding the current frequency to the total so far.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cumulative frequency up to 10 cm",
          "workingLatex": "6",
          "explanation": "The shortest class stands alone, so its cumulative frequency is its own frequency: $6$ plants are $10$ cm or shorter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cumulative frequency up to 20 cm",
          "workingLatex": "6 + 14 = 20",
          "explanation": "Adding the next frequency gives $20$ plants that are $20$ cm or shorter.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cumulative frequency up to 30 cm",
          "workingLatex": "20 + 20 = 40",
          "explanation": "Continuing the running total, $40$ plants are $30$ cm or shorter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cumulative frequency up to 40 cm",
          "workingLatex": "40 + 8 = 48",
          "explanation": "Adding the fourth frequency gives $48$ plants that are $40$ cm or shorter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cumulative frequency up to 50 cm",
          "workingLatex": "48 + 2 = 50",
          "explanation": "The last addition brings in the tallest plants, completing the running total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the total",
          "workingLatex": "50 = n",
          "explanation": "The final cumulative frequency equals the total number of plants, $n = 50$, which confirms the arithmetic. Plotting each upper boundary against its cumulative frequency gives the cumulative frequency curve shown.",
          "diagram": {
            "kind": "cumulativeFrequency",
            "points": [
              {
                "x": 0,
                "cf": 0
              },
              {
                "x": 10,
                "cf": 6
              },
              {
                "x": 20,
                "cf": 20
              },
              {
                "x": 30,
                "cf": 40
              },
              {
                "x": 40,
                "cf": 48
              },
              {
                "x": 50,
                "cf": 50
              }
            ],
            "origin": 0,
            "xAxisLabel": "height (centimetres)",
            "yAxisLabel": "cumulative frequency",
            "caption": "Cumulative frequency graph of the plant heights",
            "alt": "Rising curve through the cumulative totals up to 50"
          }
        }
      ],
      "finalAnswer": "The cumulative frequencies are $6$, $20$, $40$, $48$ and $50$, up to $10$, $20$, $30$, $40$ and $50$ cm respectively. The final value matches the total, $n = 50$."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "median",
      "read-off",
      "graph"
    ],
    "questionText": "The cumulative frequency graph shows the masses, $m$ grams, of $60$ apples. Use the graph to estimate the median mass of an apple.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 100,
          "cf": 0
        },
        {
          "x": 120,
          "cf": 6
        },
        {
          "x": 140,
          "cf": 24
        },
        {
          "x": 160,
          "cf": 36
        },
        {
          "x": 180,
          "cf": 54
        },
        {
          "x": 200,
          "cf": 60
        }
      ],
      "origin": 100,
      "xAxisLabel": "mass (grams)",
      "yAxisLabel": "cumulative frequency",
      "readoffs": [
        {
          "cf": 30,
          "label": "Q_2"
        }
      ],
      "caption": "Cumulative frequency graph of apple masses with a guide at the median",
      "alt": "Rising curve up to 60, with a dashed line at cumulative frequency 30"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the total from the graph",
          "workingLatex": "n = 60",
          "explanation": "The top of the curve levels off at $60$, which is the total number of apples. Everything about position uses this total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the median position",
          "workingLatex": "\\frac{n}{2} = \\frac{60}{2} = 30",
          "explanation": "The median is the middle value. On a cumulative frequency graph we estimate it at height $\\frac{n}{2}$, halfway up the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Draw across at the median height",
          "workingLatex": "\\text{horizontal line at cf} = 30",
          "explanation": "Starting on the vertical axis at $30$, we move horizontally until we meet the curve. This locates the median point on the graph.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Drop down to the mass axis",
          "workingLatex": "\\text{vertical line down to the } m\\text{-axis}",
          "explanation": "From the point on the curve we drop straight down to the horizontal axis. The value we land on is our estimate of the median mass.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the value",
          "workingLatex": "m \\approx 150",
          "explanation": "The dashed guide meets the curve halfway between the plotted points at $140$ g and $160$ g, so it drops to about $150$ g.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the estimate",
          "workingLatex": "\\text{median} \\approx 150 \\text{ g}",
          "explanation": "Because we read this from a graph, it is an estimate, so we say the median is approximately $150$ g rather than an exact figure.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median mass is approximately $150$ g."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "median",
      "drawing graph",
      "estimation"
    ],
    "questionText": "The table shows the times, $t$ minutes, that $100$ customers spent in a shop.\n\n| Time ($t$ minutes) | Frequency |\n|---|---|\n| $0 < t \\le 10$ | $8$ |\n| $10 < t \\le 20$ | $20$ |\n| $20 < t \\le 30$ | $32$ |\n| $30 < t \\le 40$ | $22$ |\n| $40 < t \\le 50$ | $12$ |\n| $50 < t \\le 60$ | $6$ |\n\nDraw a cumulative frequency graph and use it to estimate the median time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Build the running totals",
          "workingLatex": "8,\\ 28,\\ 60,\\ 82,\\ 94,\\ 100",
          "explanation": "Before we can plot anything we need cumulative frequencies. Adding each frequency to the total so far gives $8$, then $28$, $60$, $82$, $94$ and finally $100$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide what to plot",
          "workingLatex": "(\\text{upper boundary},\\ \\text{cumulative frequency})",
          "explanation": "On a cumulative frequency graph each point uses the upper class boundary, because the running total counts everyone up to that boundary.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the coordinates",
          "workingLatex": "(10,8),\\ (20,28),\\ (30,60),\\ (40,82),\\ (50,94),\\ (60,100)",
          "explanation": "Pairing each upper boundary with its cumulative frequency gives the points to plot on the graph.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the starting point",
          "workingLatex": "(0,0)",
          "explanation": "No customer spent less than $0$ minutes, so the curve begins at the lowest boundary with a cumulative frequency of $0$. This anchors the left-hand end.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Plot and join the points",
          "workingLatex": "\\text{join with a smooth increasing curve}",
          "explanation": "We plot the points and join them with a smooth rising curve. The graph only ever rises, because a running total can never decrease.",
          "diagram": {
            "kind": "cumulativeFrequency",
            "points": [
              {
                "x": 0,
                "cf": 0
              },
              {
                "x": 10,
                "cf": 8
              },
              {
                "x": 20,
                "cf": 28
              },
              {
                "x": 30,
                "cf": 60
              },
              {
                "x": 40,
                "cf": 82
              },
              {
                "x": 50,
                "cf": 94
              },
              {
                "x": 60,
                "cf": 100
              }
            ],
            "origin": 0,
            "xAxisLabel": "time (minutes)",
            "yAxisLabel": "cumulative frequency",
            "readoffs": [
              {
                "cf": 50,
                "label": "Q_2"
              }
            ],
            "caption": "Constructed cumulative frequency graph with a guide at the median",
            "alt": "Rising curve up to 100 with a dashed line at cumulative frequency 50"
          }
        },
        {
          "stepNumber": 6,
          "description": "Read the total",
          "workingLatex": "n = 100",
          "explanation": "The curve tops out at $100$, confirming the total number of customers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the median position",
          "workingLatex": "\\frac{n}{2} = \\frac{100}{2} = 50",
          "explanation": "The median sits halfway through the data, so we look across from a cumulative frequency of $50$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Draw the guide lines",
          "workingLatex": "\\text{across at cf} = 50,\\ \\text{then down to the } t\\text{-axis}",
          "explanation": "Move horizontally from $50$ to the curve, then straight down. Where the vertical line meets the time axis is our median estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the surrounding points",
          "workingLatex": "50 \\text{ lies between } (20,28) \\text{ and } (30,60)",
          "explanation": "A cumulative frequency of $50$ falls between the plotted points at $20$ and $30$ minutes, so the median must be somewhere in that interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Read off the estimate",
          "workingLatex": "t \\approx 27",
          "explanation": "Reading down from the curve at cumulative frequency $50$ gives roughly $27$ minutes, a little past the two-thirds mark of that class.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\text{median} \\approx 27 \\text{ minutes}",
          "explanation": "Since this is read from a graph it is an estimate, so the median time is approximately $27$ minutes.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median time is approximately $27$ minutes."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "quartiles",
      "read-off",
      "estimation"
    ],
    "questionText": "The cumulative frequency graph shows the marks scored by $80$ students in a test. Use the graph to estimate the lower quartile and the upper quartile of the marks.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 0,
          "cf": 0
        },
        {
          "x": 10,
          "cf": 4
        },
        {
          "x": 20,
          "cf": 14
        },
        {
          "x": 30,
          "cf": 32
        },
        {
          "x": 40,
          "cf": 56
        },
        {
          "x": 50,
          "cf": 72
        },
        {
          "x": 60,
          "cf": 80
        }
      ],
      "origin": 0,
      "xAxisLabel": "mark scored",
      "yAxisLabel": "cumulative frequency",
      "readoffs": [
        {
          "cf": 20,
          "label": "Q_1"
        },
        {
          "cf": 60,
          "label": "Q_3"
        }
      ],
      "caption": "Cumulative frequency graph of test marks with guides at the quartiles",
      "alt": "Rising curve up to 80 with dashed lines at cumulative frequency 20 and 60"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the total",
          "workingLatex": "n = 80",
          "explanation": "The curve levels off at $80$, so there are $80$ students. All quartile positions are fractions of this total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what the lower quartile is",
          "workingLatex": "Q_1 = \\text{value one quarter of the way through the data}",
          "explanation": "The lower quartile marks the point below which the lowest quarter of students lie. On the graph we find it at a height of $\\frac{n}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the lower quartile position",
          "workingLatex": "\\frac{n}{4} = \\frac{80}{4} = 20",
          "explanation": "A quarter of $80$ is $20$, so we read across from a cumulative frequency of $20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the lower quartile",
          "workingLatex": "Q_1 \\approx 23",
          "explanation": "Going across at $20$ to the curve and down to the mark axis lands at about $23$ marks, just inside the $20$ to $30$ class.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall what the upper quartile is",
          "workingLatex": "Q_3 = \\text{value three quarters of the way through the data}",
          "explanation": "The upper quartile marks the point below which three quarters of students lie. We find it at a height of $\\frac{3n}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the upper quartile position",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 80}{4} = 60",
          "explanation": "Three quarters of $80$ is $60$, so we read across from a cumulative frequency of $60$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the upper quartile",
          "workingLatex": "Q_3 \\approx 42.5",
          "explanation": "Going across at $60$ to the curve and down lands at about $42.5$ marks, roughly a quarter of the way into the $40$ to $50$ class.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note that these are estimates",
          "workingLatex": "Q_1 \\approx 23,\\quad Q_3 \\approx 42.5",
          "explanation": "Because we read both values from a curve, they are graphical estimates. We use the fraction positions $\\frac{n}{4}$ and $\\frac{3n}{4}$ directly, without any rounding rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the quartiles",
          "workingLatex": "Q_1 \\approx 23,\\quad Q_3 \\approx 42.5",
          "explanation": "The lower quartile is approximately $23$ marks and the upper quartile is approximately $42.5$ marks.",
          "diagram": null
        }
      ],
      "finalAnswer": "The lower quartile is approximately $23$ marks and the upper quartile is approximately $42.5$ marks."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "interquartile range",
      "quartiles",
      "spread"
    ],
    "questionText": "The cumulative frequency graph shows the waiting times, $t$ minutes, of $120$ patients at a clinic. Use the graph to estimate the interquartile range of the waiting times.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 0,
          "cf": 0
        },
        {
          "x": 5,
          "cf": 10
        },
        {
          "x": 10,
          "cf": 30
        },
        {
          "x": 15,
          "cf": 60
        },
        {
          "x": 20,
          "cf": 90
        },
        {
          "x": 25,
          "cf": 110
        },
        {
          "x": 30,
          "cf": 120
        }
      ],
      "origin": 0,
      "xAxisLabel": "waiting time (minutes)",
      "yAxisLabel": "cumulative frequency",
      "readoffs": [
        {
          "cf": 30,
          "label": "Q_1"
        },
        {
          "cf": 90,
          "label": "Q_3"
        }
      ],
      "caption": "Cumulative frequency graph of waiting times with guides at the quartiles",
      "alt": "Rising curve up to 120 with dashed lines at cumulative frequency 30 and 90"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the total",
          "workingLatex": "n = 120",
          "explanation": "The curve finishes at $120$, so $120$ patients are represented. We use this to locate both quartiles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1",
          "explanation": "The interquartile range measures the spread of the middle half of the data. To find it we need the lower and upper quartiles first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the lower quartile position",
          "workingLatex": "\\frac{n}{4} = \\frac{120}{4} = 30",
          "explanation": "A quarter of $120$ is $30$, so we read the lower quartile across from a cumulative frequency of $30$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the lower quartile",
          "workingLatex": "Q_1 \\approx 10",
          "explanation": "The guide at $30$ meets the curve right at the plotted point $(10,30)$, so the lower quartile drops to about $10$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the upper quartile position",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 120}{4} = 90",
          "explanation": "Three quarters of $120$ is $90$, so we read the upper quartile across from a cumulative frequency of $90$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the upper quartile",
          "workingLatex": "Q_3 \\approx 20",
          "explanation": "The guide at $90$ meets the curve at the plotted point $(20,90)$, so the upper quartile drops to about $20$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the IQR formula",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 20 - 10",
          "explanation": "With both quartiles found, subtracting the lower from the upper gives the width of the middle half of the data.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the interquartile range",
          "workingLatex": "\\text{IQR} = 10",
          "explanation": "The subtraction gives $10$ minutes. This tells us the central half of patients waited within a $10$ minute band.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\text{IQR} \\approx 10 \\text{ minutes}",
          "explanation": "As these are graphical readings, the interquartile range is an estimate of approximately $10$ minutes.",
          "diagram": null
        }
      ],
      "finalAnswer": "The interquartile range is approximately $10$ minutes ($Q_1 \\approx 10$, $Q_3 \\approx 20$)."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "read-off",
      "below value",
      "percentage"
    ],
    "questionText": "The cumulative frequency graph shows the masses, $w$ kg, of $200$ parcels. Use the graph to estimate how many parcels weigh less than $5$ kg, and express this as a percentage of all the parcels.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 0,
          "cf": 0
        },
        {
          "x": 2,
          "cf": 20
        },
        {
          "x": 4,
          "cf": 70
        },
        {
          "x": 6,
          "cf": 130
        },
        {
          "x": 8,
          "cf": 175
        },
        {
          "x": 10,
          "cf": 200
        }
      ],
      "origin": 0,
      "xAxisLabel": "mass (kilograms)",
      "yAxisLabel": "cumulative frequency",
      "readoffs": [
        {
          "cf": 100,
          "label": "n_{<5}"
        }
      ],
      "caption": "Cumulative frequency graph of parcel masses",
      "alt": "Rising curve up to 200 with a dashed line at cumulative frequency 100"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the direction of reading",
          "workingLatex": "\\text{read UP from a mass to get the count below it}",
          "explanation": "The curve gives cumulative frequency, which is the number of parcels at or below a chosen mass. So to count parcels under $5$ kg we start on the mass axis this time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the value on the mass axis",
          "workingLatex": "w = 5",
          "explanation": "We find $5$ kg on the horizontal axis, which sits midway between the plotted points at $4$ kg and $6$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Go up to the curve",
          "workingLatex": "\\text{vertical line from } w = 5 \\text{ up to the curve}",
          "explanation": "We draw straight up from $5$ kg until we reach the curve. That point on the curve tells us the running total at $5$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Go across to the cumulative frequency axis",
          "workingLatex": "\\text{horizontal line across to the cf axis}",
          "explanation": "From the curve we move horizontally to the vertical axis and read off the cumulative frequency there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the cumulative frequency",
          "workingLatex": "\\text{cf} \\approx 100",
          "explanation": "Halfway between $(4,70)$ and $(6,130)$ the curve is at about $100$, so roughly $100$ parcels weigh $5$ kg or less.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm with interpolation",
          "workingLatex": "70 + \\frac{5-4}{6-4} \\times (130-70) = 70 + 30 = 100",
          "explanation": "Treating the segment as a straight line confirms the read-off: halfway across the class adds half of its $60$ parcels to the $70$ already counted.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the count",
          "workingLatex": "n_{<5} \\approx 100",
          "explanation": "So approximately $100$ parcels weigh less than $5$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert to a percentage",
          "workingLatex": "\\frac{100}{200} \\times 100\\% = 50\\%",
          "explanation": "Dividing the count by the total of $200$ and multiplying by $100$ turns it into a percentage. About half of the parcels are under $5$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\approx 100 \\text{ parcels},\\ \\approx 50\\%",
          "explanation": "Since both figures come from a graph, they are estimates: about $100$ parcels, which is approximately $50\\%$ of all the parcels.",
          "diagram": null
        }
      ],
      "finalAnswer": "Approximately $100$ parcels weigh less than $5$ kg, which is about $50\\%$ of the parcels."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "read-off",
      "above value",
      "percentage"
    ],
    "questionText": "The cumulative frequency graph shows the speeds, $s$ mph, of $160$ cars passing a checkpoint. Use the graph to estimate how many cars were travelling faster than $55$ mph, and what percentage of the cars this represents.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 20,
          "cf": 0
        },
        {
          "x": 30,
          "cf": 8
        },
        {
          "x": 40,
          "cf": 40
        },
        {
          "x": 50,
          "cf": 100
        },
        {
          "x": 60,
          "cf": 140
        },
        {
          "x": 70,
          "cf": 160
        }
      ],
      "origin": 20,
      "xAxisLabel": "speed (miles per hour)",
      "yAxisLabel": "cumulative frequency",
      "readoffs": [
        {
          "cf": 120,
          "label": "n_{\\le 55}"
        }
      ],
      "caption": "Cumulative frequency graph of car speeds",
      "alt": "Rising curve up to 160 with a dashed line at cumulative frequency 120"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise what the graph gives directly",
          "workingLatex": "\\text{graph gives the number AT OR BELOW a speed}",
          "explanation": "A cumulative frequency curve counts values up to a chosen point. It does not directly give values above a point, so we will find the count below and subtract.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the total",
          "workingLatex": "n = 160",
          "explanation": "The curve tops out at $160$, so $160$ cars passed in total. This is the number we subtract from later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the value on the speed axis",
          "workingLatex": "s = 55",
          "explanation": "We find $55$ mph on the horizontal axis, sitting midway between the plotted points at $50$ mph and $60$ mph.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read up then across",
          "workingLatex": "\\text{up from } 55 \\text{ to the curve, then across to the cf axis}",
          "explanation": "Drawing up to the curve and across to the vertical axis gives the number of cars travelling at $55$ mph or less.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the cumulative frequency",
          "workingLatex": "\\text{cf} \\approx 120",
          "explanation": "Halfway between $(50,100)$ and $(60,140)$ the curve is at about $120$, so roughly $120$ cars were doing $55$ mph or less.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract to count those above",
          "workingLatex": "160 - 120 = 40",
          "explanation": "The cars faster than $55$ mph are all the ones not counted below it. Subtracting from the total gives $40$ cars.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the count",
          "workingLatex": "n_{>55} \\approx 40",
          "explanation": "So about $40$ cars were travelling faster than $55$ mph.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert to a percentage",
          "workingLatex": "\\frac{40}{160} \\times 100\\% = 25\\%",
          "explanation": "Dividing by the total of $160$ and multiplying by $100$ gives the percentage. A quarter of the cars exceeded $55$ mph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\approx 40 \\text{ cars},\\ \\approx 25\\%",
          "explanation": "These are graphical estimates, so about $40$ cars, which is approximately $25\\%$ of all the cars, were faster than $55$ mph.",
          "diagram": null
        }
      ],
      "finalAnswer": "Approximately $40$ cars were travelling faster than $55$ mph, which is about $25\\%$ of the cars."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "percentile",
      "interpolation",
      "estimation"
    ],
    "questionText": "The cumulative frequency graph shows the scores of $200$ candidates in an aptitude test. The top $10\\%$ of candidates are invited to interview. Use the graph to estimate the $90$th percentile, and hence the minimum score needed for an interview.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 0,
          "cf": 0
        },
        {
          "x": 20,
          "cf": 10
        },
        {
          "x": 40,
          "cf": 40
        },
        {
          "x": 60,
          "cf": 110
        },
        {
          "x": 80,
          "cf": 170
        },
        {
          "x": 100,
          "cf": 200
        }
      ],
      "origin": 0,
      "xAxisLabel": "score",
      "yAxisLabel": "cumulative frequency",
      "readoffs": [
        {
          "cf": 180,
          "label": "P_{90}"
        }
      ],
      "caption": "Cumulative frequency graph of test scores with a guide at the 90th percentile",
      "alt": "Rising curve up to 200 with a dashed line at cumulative frequency 180"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what a percentile is",
          "workingLatex": "P_{90} = \\text{score below which } 90\\% \\text{ of candidates lie}",
          "explanation": "The $90$th percentile is the value that separates the bottom $90\\%$ of the data from the top $10\\%$. Finding it directly answers the interview question.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the total",
          "workingLatex": "n = 200",
          "explanation": "The curve reaches $200$ at the top, so there are $200$ candidates. Percentile positions are fractions of this total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the percentile position",
          "workingLatex": "\\frac{90}{100} \\times n = 0.9 \\times 200",
          "explanation": "To reach the $90$th percentile we go $90\\%$ of the way up the cumulative frequency, which is $90\\%$ of the total count.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the position",
          "workingLatex": "0.9 \\times 200 = 180",
          "explanation": "This gives a cumulative frequency of $180$, the height at which we read across to the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Draw across to the curve",
          "workingLatex": "\\text{horizontal line at cf} = 180",
          "explanation": "From $180$ on the vertical axis we move horizontally until meeting the curve, locating the percentile point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the relevant segment",
          "workingLatex": "180 \\text{ lies between } (80,170) \\text{ and } (100,200)",
          "explanation": "A cumulative frequency of $180$ sits between the plotted points at scores $80$ and $100$, so the percentile is in that top class.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the interpolation",
          "workingLatex": "x = 80 + \\frac{180 - 170}{200 - 170} \\times (100 - 80)",
          "explanation": "Treating the segment as a straight line, we work out how far along the class the value $180$ falls, as a fraction of that class's cumulative rise.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the fraction",
          "workingLatex": "\\frac{180 - 170}{200 - 170} = \\frac{10}{30} = \\frac{1}{3}",
          "explanation": "We need $10$ more beyond the $170$ already counted, out of the $30$ candidates in this class, which is one third of the way through it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Complete the calculation",
          "workingLatex": "x = 80 + \\frac{1}{3} \\times 20 = 80 + 6.67",
          "explanation": "One third of the width of $20$ marks is about $6.67$, added to the lower boundary of $80$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round the estimate",
          "workingLatex": "x \\approx 86.7",
          "explanation": "This gives roughly $86.7$, which reads off the graph as about $87$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the percentile",
          "workingLatex": "P_{90} \\approx 87",
          "explanation": "So the $90$th percentile score is approximately $87$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret for the interview cutoff",
          "workingLatex": "\\text{top } 10\\% \\Rightarrow \\text{score} > P_{90}",
          "explanation": "The top $10\\%$ are exactly those above the $90$th percentile, so the interview threshold is the $90$th percentile score.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer in context",
          "workingLatex": "\\text{minimum score} \\approx 87",
          "explanation": "A candidate needs to score approximately $87$ or more to be in the top $10\\%$ and invited to interview. As a graphical estimate, this is approximate.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $90$th percentile is approximately $87$, so a candidate needs a score of about $87$ or more to be invited to interview."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "cumulative frequency",
      "median",
      "interquartile range",
      "interpretation"
    ],
    "questionText": "The cumulative frequency graph shows the times, $t$ hours, that $240$ students spent on homework in one week. Use the graph to estimate the median and the interquartile range, and interpret both values in context.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 0,
          "cf": 0
        },
        {
          "x": 2,
          "cf": 12
        },
        {
          "x": 4,
          "cf": 48
        },
        {
          "x": 6,
          "cf": 120
        },
        {
          "x": 8,
          "cf": 180
        },
        {
          "x": 10,
          "cf": 216
        },
        {
          "x": 12,
          "cf": 240
        }
      ],
      "origin": 0,
      "xAxisLabel": "homework time (hours)",
      "yAxisLabel": "cumulative frequency",
      "readoffs": [
        {
          "cf": 60,
          "label": "Q_1"
        },
        {
          "cf": 120,
          "label": "Q_2"
        },
        {
          "cf": 180,
          "label": "Q_3"
        }
      ],
      "caption": "Cumulative frequency graph of homework times with guides at the quartiles and median",
      "alt": "Rising curve up to 240 with dashed lines at cumulative frequency 60, 120 and 180"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the total",
          "workingLatex": "n = 240",
          "explanation": "The curve finishes at $240$, so $240$ students are represented. Every position we need is a fraction of this total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the median position",
          "workingLatex": "\\frac{n}{2} = \\frac{240}{2} = 120",
          "explanation": "The median is the middle value, read across from a cumulative frequency of $120$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the median",
          "workingLatex": "Q_2 \\approx 6",
          "explanation": "The guide at $120$ meets the curve at the plotted point $(6,120)$, so the median drops to about $6$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the lower quartile position",
          "workingLatex": "\\frac{n}{4} = \\frac{240}{4} = 60",
          "explanation": "A quarter of the students lie below the lower quartile, so we read across from a cumulative frequency of $60$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the lower quartile segment",
          "workingLatex": "60 \\text{ lies between } (4,48) \\text{ and } (6,120)",
          "explanation": "A cumulative frequency of $60$ falls between the plotted points at $4$ and $6$ hours, so the lower quartile is in that class.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpolate for the lower quartile",
          "workingLatex": "Q_1 = 4 + \\frac{60 - 48}{120 - 48} \\times (6 - 4)",
          "explanation": "Reading between the plotted points, we find how far $60$ lies into this class as a fraction of its cumulative rise, then scale by the class width.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the lower quartile",
          "workingLatex": "Q_1 = 4 + \\frac{12}{72} \\times 2 = 4 + 0.33 \\approx 4.3",
          "explanation": "The fraction $\\frac{12}{72}$ is one sixth, and one sixth of $2$ hours is about $0.33$, giving a lower quartile of roughly $4.3$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the upper quartile position",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 240}{4} = 180",
          "explanation": "Three quarters of the students lie below the upper quartile, so we read across from a cumulative frequency of $180$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the upper quartile",
          "workingLatex": "Q_3 \\approx 8",
          "explanation": "The guide at $180$ meets the curve at the plotted point $(8,180)$, so the upper quartile drops to about $8$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 8 - 4.3",
          "explanation": "The interquartile range is the difference between the upper and lower quartiles, capturing the spread of the middle half of the data.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Calculate the interquartile range",
          "workingLatex": "\\text{IQR} \\approx 3.7",
          "explanation": "Subtracting gives about $3.7$ hours for the width of the central half of the students.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the estimates",
          "workingLatex": "Q_2 \\approx 6,\\quad \\text{IQR} \\approx 3.7",
          "explanation": "So the median is approximately $6$ hours and the interquartile range is approximately $3.7$ hours. Both are graphical estimates.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the median",
          "workingLatex": "\\text{half of students spent} \\le 6 \\text{ hours}",
          "explanation": "The median tells us the typical student: about half the class spent $6$ hours or less on homework, and about half spent more.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the interquartile range",
          "workingLatex": "\\text{middle } 50\\% \\text{ spans } 4.3 \\text{ to } 8 \\text{ hours}",
          "explanation": "The interquartile range of about $3.7$ hours means the central half of students spent between roughly $4.3$ and $8$ hours. Because it ignores the extremes, it is a reliable measure of the everyday spread of homework times.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median is approximately $6$ hours and the interquartile range is approximately $3.7$ hours ($Q_1 \\approx 4.3$, $Q_3 \\approx 8$). Interpretation: a typical student spent about $6$ hours on homework, with the middle $50\\%$ of students spending between roughly $4.3$ and $8$ hours, showing a moderate spread in the central half of the data."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "box plot",
      "five-number summary",
      "construction"
    ],
    "questionText": "A group of students sat a mathematics test marked out of $50$. The five-number summary of their scores is: minimum $= 12$, lower quartile $= 18$, median $= 25$, upper quartile $= 32$, maximum $= 40$. Draw a box plot to represent this information.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the five key values.",
          "workingLatex": "\\text{min}=12,\\ Q_1=18,\\ Q_2=25,\\ Q_3=32,\\ \\text{max}=40",
          "explanation": "A box plot is built entirely from these five numbers, so it helps to set them out first. The minimum and maximum become the ends of the whiskers, the quartiles form the box, and the median $Q_2$ sits inside it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a suitable scale for the number line.",
          "workingLatex": "0 \\leq \\text{score} \\leq 50",
          "explanation": "The scores run from $12$ to $40$, so a number line from $0$ to $50$ comfortably contains all the data and matches a test marked out of $50$. An even, clearly labelled scale lets every value be plotted accurately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Draw the box between the quartiles.",
          "workingLatex": "\\text{box from } Q_1=18 \\text{ to } Q_3=32",
          "explanation": "The box spans the lower quartile to the upper quartile, so its width shows the middle $50\\%$ of the students. Drawing the two vertical edges at $18$ and $32$ fixes the body of the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Mark the median inside the box.",
          "workingLatex": "\\text{median line at } Q_2=25",
          "explanation": "A vertical line at the median divides the box and shows the central value. Its position tells you whether the middle half of the data is balanced or lopsided.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the whiskers to the smallest and largest values.",
          "workingLatex": "\\text{whiskers to } 12 \\text{ and } 40",
          "explanation": "No value has been flagged as an outlier here, so the whiskers simply reach out to the minimum and the maximum. They show the full spread of the data.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Draw the completed box plot.",
          "workingLatex": "12 \\ \\to\\ 18 \\ \\to\\ 25 \\ \\to\\ 32 \\ \\to\\ 40",
          "explanation": "Putting the pieces together gives the finished diagram: whiskers to $12$ and $40$, a box from $18$ to $32$, and the median marked at $25$. This is the standard way to display a five-number summary at a glance.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 50,
            "q1": 18,
            "median": 25,
            "q3": 32,
            "whiskerLow": 12,
            "whiskerHigh": 40,
            "axisLabel": "test score (marks)",
            "showValues": true,
            "caption": "Box plot of the students' test scores",
            "alt": "Box plot with whiskers at 12 and 40, box from 18 to 32, median at 25"
          }
        }
      ],
      "finalAnswer": "The box plot has a box spanning $Q_1 = 18$ to $Q_3 = 32$ with the median at $25$, and whiskers reaching the minimum $12$ and the maximum $40$."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "box plot",
      "reading values",
      "quartiles"
    ],
    "questionText": "The box plot below shows the masses, in kilograms, of a sample of dogs at a veterinary clinic. Use the box plot to write down (a) the median mass, (b) the lower quartile, and (c) the upper quartile.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 40,
      "q1": 15,
      "median": 22,
      "q3": 30,
      "whiskerLow": 5,
      "whiskerHigh": 38,
      "axisLabel": "mass (kg)",
      "showValues": false,
      "caption": "Box plot of the masses of a sample of dogs",
      "alt": "Box plot with whiskers at 5 and 38, box from 15 to 30, median at 22"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what each feature of the box plot represents.",
          "workingLatex": "\\text{box edges} = Q_1, Q_3;\\ \\ \\text{inner line} = \\text{median}",
          "explanation": "On a box plot the two edges of the box are the lower and upper quartiles, the line inside the box is the median, and the whisker ends are the smallest and largest values. Knowing this lets you read any of them straight off the scale.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the median line inside the box.",
          "workingLatex": "\\text{median} \\rightarrow \\text{line at } 22",
          "explanation": "The median is the vertical line drawn inside the box. Reading down to the number line, it lines up with $22$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the median value.",
          "workingLatex": "Q_2 = 22",
          "explanation": "This value tells us that half of the dogs weigh less than $22$ kg and half weigh more, so it is the typical mass in the sample.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the lower quartile at the left edge of the box.",
          "workingLatex": "Q_1 = 15",
          "explanation": "The left-hand edge of the box marks the lower quartile. A quarter of the dogs weigh less than this value of $15$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read the upper quartile at the right edge of the box.",
          "workingLatex": "Q_3 = 30",
          "explanation": "The right-hand edge of the box marks the upper quartile. Three quarters of the dogs weigh less than this value of $30$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the three answers.",
          "workingLatex": "Q_2 = 22,\\ Q_1 = 15,\\ Q_3 = 30",
          "explanation": "Collecting the readings gives the median and both quartiles directly from the diagram, with units of kilograms.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Median $= 22$ kg, (b) lower quartile $= 15$ kg, (c) upper quartile $= 30$ kg."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "box plot",
      "interquartile range",
      "range"
    ],
    "questionText": "The box plot shows the times, in minutes, taken by $40$ commuters to travel to work. Find (a) the interquartile range and (b) the range of the times.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 40,
      "q1": 14,
      "median": 19,
      "q3": 26,
      "whiskerLow": 8,
      "whiskerHigh": 35,
      "axisLabel": "travel time (minutes)",
      "showValues": true,
      "caption": "Box plot of commuters' travel times",
      "alt": "Box plot with whiskers at 8 and 35, box from 14 to 26, median at 19"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the two quartiles from the box.",
          "workingLatex": "Q_1 = 14,\\quad Q_3 = 26",
          "explanation": "The interquartile range depends only on the box, so first read the left and right edges. These are the lower and upper quartiles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the formula for the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1",
          "explanation": "The interquartile range measures the spread of the middle half of the data. Subtracting the lower quartile from the upper quartile gives the width of the box.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = 26 - 14 = 12",
          "explanation": "So the middle $50\\%$ of commuters have journey times spread across $12$ minutes. Because it ignores the extreme values, the IQR is not affected by unusually long or short journeys.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the smallest and largest values from the whisker ends.",
          "workingLatex": "\\text{min} = 8,\\quad \\text{max} = 35",
          "explanation": "The tips of the whiskers mark the least and greatest travel times. Here the whiskers reach the minimum and maximum because there are no outliers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the formula for the range.",
          "workingLatex": "\\text{range} = \\text{max} - \\text{min}",
          "explanation": "The range measures the total spread of all the data, from the fastest journey to the slowest.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the range.",
          "workingLatex": "\\text{range} = 35 - 8 = 27",
          "explanation": "The full spread of travel times is $27$ minutes. Notice this is much larger than the IQR, which tells us the extreme journeys stretch the data well beyond the central group.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State both answers.",
          "workingLatex": "\\text{IQR} = 12,\\quad \\text{range} = 27",
          "explanation": "Presenting the two measures together, with units of minutes, completes the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) IQR $= 12$ minutes and (b) range $= 27$ minutes."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "outliers",
      "interquartile range",
      "1.5 iqr rule"
    ],
    "questionText": "The lengths of a sample of leaves have lower quartile $22$ mm and upper quartile $34$ mm. An outlier is defined as any value more than $1.5 \\times \\text{IQR}$ above the upper quartile or below the lower quartile. Three leaves have lengths $5$ mm, $50$ mm and $58$ mm. Determine which of these lengths are outliers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 34 - 22 = 12",
          "explanation": "The outlier boundaries are measured out from the quartiles in units of the IQR, so the IQR must be found first. It is simply the width of the box.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times \\text{IQR} = 1.5 \\times 12 = 18",
          "explanation": "The rule uses one and a half interquartile ranges as the cut-off distance. This is the amount we step beyond each quartile to reach the boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the lower boundary.",
          "workingLatex": "Q_1 - 1.5 \\times \\text{IQR} = 22 - 18 = 4",
          "explanation": "Any value below $4$ mm would be surprisingly short and would count as an outlier at the low end. This is the smallest length considered 'ordinary'.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the upper boundary.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 34 + 18 = 52",
          "explanation": "Any value above $52$ mm would be surprisingly long and would count as an outlier at the high end. This is the largest length considered 'ordinary'.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the acceptable interval.",
          "workingLatex": "4 \\leq \\text{length} \\leq 52",
          "explanation": "Values inside this interval are not outliers; values strictly outside it are. Checking each leaf now becomes a simple comparison.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the $5$ mm leaf.",
          "workingLatex": "5 > 4 \\ \\Rightarrow\\ \\text{not an outlier}",
          "explanation": "Since $5$ mm lies above the lower boundary of $4$ mm, it falls inside the acceptable range, so it is not an outlier even though it is quite short.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the $50$ mm leaf.",
          "workingLatex": "50 < 52 \\ \\Rightarrow\\ \\text{not an outlier}",
          "explanation": "Since $50$ mm lies below the upper boundary of $52$ mm, it is inside the acceptable range and so is not an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the $58$ mm leaf.",
          "workingLatex": "58 > 52 \\ \\Rightarrow\\ \\text{outlier}",
          "explanation": "Since $58$ mm exceeds the upper boundary of $52$ mm, it lies outside the acceptable range, so this leaf is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{outlier: } 58 \\text{ mm only}",
          "explanation": "Only the $58$ mm leaf is flagged. Identifying outliers this way helps decide whether a value is a genuine reading or perhaps a measurement error worth checking.",
          "diagram": null
        }
      ],
      "finalAnswer": "Only the $58$ mm leaf is an outlier; the $5$ mm and $50$ mm leaves lie within the boundaries $[4, 52]$."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "box plot",
      "outliers",
      "construction",
      "1.5 iqr rule"
    ],
    "questionText": "The waiting times, in minutes, of $11$ patients at a clinic are recorded in order:\n$2,\\ 18,\\ 20,\\ 23,\\ 25,\\ 28,\\ 30,\\ 33,\\ 35,\\ 38,\\ 60.$\nAn outlier is a value more than $1.5 \\times \\text{IQR}$ beyond the nearer quartile. Draw a box plot for these data, marking any outliers as crosses and drawing the whiskers to the most extreme values that are not outliers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the data are ordered and count them.",
          "workingLatex": "n = 11",
          "explanation": "Quartiles are found by position, so we need the data in order (they already are) and the total count. With $11$ values the positions come out as whole numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the median position and value.",
          "workingLatex": "\\tfrac{n+1}{2} = \\tfrac{12}{2} = 6 \\ \\Rightarrow\\ Q_2 = 28",
          "explanation": "The median is the middle value, which is the $6$th reading. Counting along the list gives $28$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the lower quartile.",
          "workingLatex": "\\tfrac{n+1}{4} = \\tfrac{12}{4} = 3 \\ \\Rightarrow\\ Q_1 = 20",
          "explanation": "The lower quartile sits a quarter of the way through the ordered data, at the $3$rd position, giving $20$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the upper quartile.",
          "workingLatex": "\\tfrac{3(n+1)}{4} = \\tfrac{36}{4} = 9 \\ \\Rightarrow\\ Q_3 = 35",
          "explanation": "The upper quartile is three quarters of the way through, at the $9$th position, giving $35$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 35 - 20 = 15",
          "explanation": "The IQR sets the scale for the outlier check, so it is found next. It is the width of the middle half of the data.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 15 = 22.5",
          "explanation": "This is the distance we step out beyond each quartile to locate the outlier boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the lower boundary.",
          "workingLatex": "Q_1 - 22.5 = 20 - 22.5 = -2.5",
          "explanation": "Any waiting time below $-2.5$ minutes would be an outlier. Since times cannot be negative, no value can fall below this boundary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the upper boundary.",
          "workingLatex": "Q_3 + 22.5 = 35 + 22.5 = 57.5",
          "explanation": "Any waiting time above $57.5$ minutes is an outlier. This gives us the cut-off to test the largest readings against.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the outliers.",
          "workingLatex": "60 > 57.5 \\Rightarrow \\text{outlier};\\quad 2 > -2.5 \\Rightarrow \\text{not}",
          "explanation": "Only $60$ lies beyond a boundary, so it is the single outlier. The value $2$ sits comfortably above the lower boundary, so it is a normal reading.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Decide where the whiskers end.",
          "workingLatex": "\\text{whisker low} = 2,\\quad \\text{whisker high} = 38",
          "explanation": "Whiskers must stop at the most extreme values that are not outliers. The low whisker reaches the minimum $2$, and the high whisker stops at $38$ (the largest non-outlier), not at $60$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Draw the completed box plot.",
          "workingLatex": "\\text{box } 20\\text{–}35,\\ \\text{median } 28,\\ \\text{whiskers } 2,\\ 38,\\ \\text{cross at } 60",
          "explanation": "Assemble the box from $20$ to $35$ with the median at $28$, extend whiskers to $2$ and $38$, and plot $60$ as a cross beyond the high whisker to show it is an outlier.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 65,
            "q1": 20,
            "median": 28,
            "q3": 35,
            "whiskerLow": 2,
            "whiskerHigh": 38,
            "outliers": [
              60
            ],
            "axisLabel": "waiting time (minutes)",
            "showValues": true,
            "caption": "Box plot of patients' waiting times with one outlier",
            "alt": "Box plot with box 20 to 35, median 28, whiskers to 2 and 38, and a cross outlier at 60"
          }
        }
      ],
      "finalAnswer": "$Q_1 = 20$, median $= 28$, $Q_3 = 35$; boundaries are $-2.5$ and $57.5$, so $60$ is an outlier. The box plot has whiskers to $2$ and $38$ with $60$ marked as a cross."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "box plot",
      "outliers",
      "interpretation"
    ],
    "questionText": "The box plot shows the ages, in years, of the members of a sports club. One member's age is shown as an outlier. (a) Write down the interquartile range. (b) State the age shown as the outlier. (c) Given that an outlier is a value more than $1.5 \\times \\text{IQR}$ above the upper quartile, verify that this age is an outlier.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 100,
      "q1": 30,
      "median": 42,
      "q3": 50,
      "whiskerLow": 15,
      "whiskerHigh": 68,
      "outliers": [
        95
      ],
      "axisLabel": "age (years)",
      "showValues": false,
      "caption": "Box plot of the ages of sports club members with one outlier",
      "alt": "Box plot with box 30 to 50, median 42, whiskers to 15 and 68, and a cross outlier at 95"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the box plot features.",
          "workingLatex": "\\text{box edges} = Q_1, Q_3;\\ \\text{cross} = \\text{outlier}",
          "explanation": "The box edges give the quartiles and any cross drawn beyond a whisker marks an outlier. Reading these off is the first step.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the lower quartile.",
          "workingLatex": "Q_1 = 30",
          "explanation": "The left edge of the box lines up with $30$ years, so a quarter of the members are younger than this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the upper quartile.",
          "workingLatex": "Q_3 = 50",
          "explanation": "The right edge of the box lines up with $50$ years, so three quarters of the members are younger than this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 50 - 30 = 20",
          "explanation": "The width of the box is the IQR, giving the spread of the middle half of the members' ages.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read the outlier from the cross.",
          "workingLatex": "\\text{outlier} = 95",
          "explanation": "The single cross drawn to the right of the high whisker sits at $95$ years, which is the age flagged as unusual.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 20 = 30",
          "explanation": "This is how far beyond the upper quartile a value must lie before it counts as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper boundary.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 50 + 30 = 80",
          "explanation": "Any age above $80$ years is an outlier. This is the cut-off we compare the age of $95$ against.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the outlier with the boundary.",
          "workingLatex": "95 > 80",
          "explanation": "Because $95$ exceeds the upper boundary of $80$, it lies outside the acceptable range of ages.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion and answers.",
          "workingLatex": "\\text{IQR}=20,\\ \\text{outlier}=95,\\ 95>80\\ \\checkmark",
          "explanation": "The comparison confirms the age of $95$ is genuinely an outlier under the rule, so the diagram has correctly shown it as a cross rather than reaching the whisker to it.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) IQR $= 20$ years. (b) The outlier is $95$ years. (c) Upper boundary $= 50 + 30 = 80$, and since $95 > 80$, the age of $95$ is confirmed as an outlier."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "box plot",
      "interquartile range",
      "range",
      "skewness"
    ],
    "questionText": "The box plot shows the ages, in years, of visitors to a museum on one afternoon. (a) Find the interquartile range. (b) Find the range. (c) Describe the skewness of the distribution, giving a reason.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 10,
      "axisMax": 70,
      "q1": 25,
      "median": 30,
      "q3": 45,
      "whiskerLow": 18,
      "whiskerHigh": 60,
      "axisLabel": "age (years)",
      "showValues": true,
      "caption": "Box plot of the ages of museum visitors",
      "alt": "Box plot with box 25 to 45, median 30, whiskers to 18 and 60"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the box plot features and read the values.",
          "workingLatex": "Q_1=25,\\ Q_2=30,\\ Q_3=45,\\ \\text{min}=18,\\ \\text{max}=60",
          "explanation": "Everything needed comes straight off the plot: the box edges give the quartiles, the inner line gives the median, and the whisker ends give the smallest and largest ages.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 45 - 25 = 20",
          "explanation": "The IQR is the width of the box and measures how spread out the middle half of the visitors' ages are.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the range.",
          "workingLatex": "\\text{range} = \\text{max} - \\text{min} = 60 - 18 = 42",
          "explanation": "The range is the full spread from youngest to oldest visitor, using the two whisker ends.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Measure the gap from $Q_1$ to the median.",
          "workingLatex": "Q_2 - Q_1 = 30 - 25 = 5",
          "explanation": "Comparing how far the median sits from each quartile reveals the shape of the middle of the data. Here the lower gap is only $5$ years.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Measure the gap from the median to $Q_3$.",
          "workingLatex": "Q_3 - Q_2 = 45 - 30 = 15",
          "explanation": "The upper gap of $15$ years is much larger than the lower gap, so the median is pushed toward the left side of the box.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the two gaps.",
          "workingLatex": "15 > 5",
          "explanation": "The stretch above the median is three times the stretch below it. A longer tail on the higher side is the signature of positive skew.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the type of skew.",
          "workingLatex": "\\text{positive skew}",
          "explanation": "Because the median is closer to the lower quartile, the data are positively skewed, meaning most visitors are younger with a tail of older ones.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the skewness in the context of the ages.",
          "workingLatex": "\\text{few older visitors form a long tail towards } 60",
          "explanation": "Positive skew means most visitors are bunched at the younger ages between $Q_1$ and the median, while a smaller number of older visitors stretch the data out towards the maximum of $60$. That long right-hand tail is exactly what pulls $Q_3$ further from the median than $Q_1$ is.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise all three results.",
          "workingLatex": "\\text{IQR}=20,\\ \\text{range}=42,\\ \\text{positive skew}",
          "explanation": "Collecting the answers, with ages measured in years, completes the interpretation of the box plot.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) IQR $= 20$ years. (b) Range $= 42$ years. (c) The distribution is positively skewed, because the median is closer to the lower quartile ($5$ years) than to the upper quartile ($15$ years)."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "box plot",
      "outliers",
      "construction",
      "quartiles"
    ],
    "questionText": "In one minute, $15$ athletes each completed the following numbers of press-ups, listed in order:\n$3,\\ 20,\\ 22,\\ 24,\\ 25,\\ 27,\\ 28,\\ 30,\\ 31,\\ 33,\\ 34,\\ 36,\\ 38,\\ 40,\\ 70.$\nAn outlier is a value more than $1.5 \\times \\text{IQR}$ beyond the nearer quartile. Test the data for outliers and hence draw a box plot, with whiskers to the most extreme non-outlier values and any outliers marked as crosses.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the data are ordered and count them.",
          "workingLatex": "n = 15",
          "explanation": "Quartiles are located by position in the ordered list. The data are already in order, and with $15$ values the quartile positions are whole numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the median.",
          "workingLatex": "\\tfrac{n+1}{2} = \\tfrac{16}{2} = 8 \\ \\Rightarrow\\ Q_2 = 30",
          "explanation": "The median is the $8$th value, the middle of $15$ readings. Counting along gives $30$ press-ups.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the lower quartile.",
          "workingLatex": "\\tfrac{n+1}{4} = \\tfrac{16}{4} = 4 \\ \\Rightarrow\\ Q_1 = 24",
          "explanation": "The lower quartile is the $4$th value, a quarter of the way along, giving $24$ press-ups.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the upper quartile.",
          "workingLatex": "\\tfrac{3(n+1)}{4} = \\tfrac{48}{4} = 12 \\ \\Rightarrow\\ Q_3 = 36",
          "explanation": "The upper quartile is the $12$th value, three quarters of the way along, giving $36$ press-ups.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 36 - 24 = 12",
          "explanation": "The IQR is the width of the middle half of the data and sets the scale for the outlier check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 12 = 18",
          "explanation": "This is the distance stepped out beyond each quartile to find the outlier boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the lower boundary.",
          "workingLatex": "Q_1 - 18 = 24 - 18 = 6",
          "explanation": "Any total below $6$ press-ups is an outlier at the low end. This is the cut-off for the smallest reading.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the upper boundary.",
          "workingLatex": "Q_3 + 18 = 36 + 18 = 54",
          "explanation": "Any total above $54$ press-ups is an outlier at the high end, giving the cut-off for the largest reading.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the smallest value.",
          "workingLatex": "3 < 6 \\ \\Rightarrow\\ \\text{outlier}",
          "explanation": "The value $3$ falls below the lower boundary of $6$, so it is an outlier at the low end.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the largest value.",
          "workingLatex": "70 > 54 \\ \\Rightarrow\\ \\text{outlier}",
          "explanation": "The value $70$ exceeds the upper boundary of $54$, so it is an outlier at the high end. This data set has an outlier at both ends.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the most extreme non-outlier values.",
          "workingLatex": "\\text{lowest non-outlier} = 20,\\quad \\text{highest non-outlier} = 40",
          "explanation": "With $3$ and $70$ removed as outliers, the next values in from each end are $20$ and $40$. These are where the whiskers must stop.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set the whisker ends.",
          "workingLatex": "\\text{whisker low} = 20,\\quad \\text{whisker high} = 40",
          "explanation": "The whiskers reach only as far as the extreme values that are not outliers, so they run to $20$ and $40$ rather than to $3$ and $70$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mark the outliers as crosses.",
          "workingLatex": "\\text{crosses at } 3 \\text{ and } 70",
          "explanation": "Each outlier is plotted individually as a cross beyond its whisker, making clear these values are unusually far from the rest.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Draw the completed box plot.",
          "workingLatex": "\\text{box } 24\\text{–}36,\\ \\text{median } 30,\\ \\text{whiskers } 20,\\ 40,\\ \\text{crosses } 3,\\ 70",
          "explanation": "Combining everything gives the finished diagram: a box from $24$ to $36$ with the median at $30$, whiskers to $20$ and $40$, and the two outliers $3$ and $70$ shown as crosses.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 75,
            "q1": 24,
            "median": 30,
            "q3": 36,
            "whiskerLow": 20,
            "whiskerHigh": 40,
            "outliers": [
              3,
              70
            ],
            "axisLabel": "number of press-ups",
            "showValues": true,
            "caption": "Box plot of press-up totals with two outliers",
            "alt": "Box plot with box 24 to 36, median 30, whiskers to 20 and 40, and crosses at 3 and 70"
          }
        }
      ],
      "finalAnswer": "$Q_1 = 24$, median $= 30$, $Q_3 = 36$, IQR $= 12$; boundaries are $6$ and $54$, so $3$ and $70$ are outliers. The box plot has whiskers to $20$ and $40$ with $3$ and $70$ shown as crosses."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "box plot",
      "outliers",
      "construction",
      "1.5 iqr rule"
    ],
    "questionText": "A sample of $30$ house prices (in thousands of pounds) has lower quartile $180$, median $215$ and upper quartile $260$. The cheapest house costs $95$ and the most expensive costs $600$. It is also known that the second cheapest costs $150$ and the second most expensive costs $340$. An outlier is a value more than $1.5 \\times \\text{IQR}$ beyond the nearer quartile. (a) Find the IQR and the outlier boundaries. (b) Determine which of the extreme prices are outliers. (c) Draw a box plot, with whiskers to the most extreme non-outlier prices and any outliers as crosses.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 260 - 180 = 80",
          "explanation": "The IQR is the spread of the middle half of the prices and sets the scale for the outlier boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 80 = 120",
          "explanation": "This is the distance stepped out beyond each quartile to reach the boundaries of the acceptable range.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the lower boundary.",
          "workingLatex": "Q_1 - 120 = 180 - 120 = 60",
          "explanation": "Any price below $60$ thousand pounds is an outlier at the low end. This is the cut-off for the cheapest houses.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the upper boundary.",
          "workingLatex": "Q_3 + 120 = 260 + 120 = 380",
          "explanation": "Any price above $380$ thousand pounds is an outlier at the high end, giving the cut-off for the most expensive houses.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the cheapest house.",
          "workingLatex": "95 > 60 \\ \\Rightarrow\\ \\text{not an outlier}",
          "explanation": "At $95$ thousand pounds the cheapest house lies above the lower boundary of $60$, so it is not an outlier despite being the lowest price.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the most expensive house.",
          "workingLatex": "600 > 380 \\ \\Rightarrow\\ \\text{outlier}",
          "explanation": "At $600$ thousand pounds the dearest house is far above the upper boundary of $380$, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which extreme prices are outliers.",
          "workingLatex": "\\text{outlier: } 600 \\text{ only}",
          "explanation": "Only the most expensive house is flagged; the cheapest is a normal value. This tells us the whiskers will be treated differently at the two ends.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decide the lower whisker end.",
          "workingLatex": "\\text{whisker low} = 95",
          "explanation": "Since the cheapest house of $95$ is not an outlier, the low whisker reaches all the way to it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the second most expensive house.",
          "workingLatex": "340 < 380 \\ \\Rightarrow\\ \\text{not an outlier}",
          "explanation": "The next price in from $600$ is $340$, which is below the upper boundary of $380$, so it is a normal value and can be reached by the whisker.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Decide the upper whisker end.",
          "workingLatex": "\\text{whisker high} = 340",
          "explanation": "The high whisker stops at the largest non-outlier, $340$, rather than at the outlier $600$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note that the $150$ value is interior.",
          "workingLatex": "150 \\text{ lies inside the box region}",
          "explanation": "The second cheapest price of $150$ sits between the low whisker and the box, so it does not affect the whisker ends. It is extra information used to check the lower end, not to place a whisker.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set the box and median.",
          "workingLatex": "\\text{box } 180\\text{–}260,\\ \\text{median } 215",
          "explanation": "The box runs from the lower quartile $180$ to the upper quartile $260$, with the median line at $215$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mark the outlier as a cross.",
          "workingLatex": "\\text{cross at } 600",
          "explanation": "The single outlier is plotted as a cross beyond the high whisker, showing it stands well apart from the rest of the sample.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Draw the completed box plot.",
          "workingLatex": "\\text{whiskers } 95,\\ 340,\\ \\text{box } 180\\text{–}260,\\ \\text{median } 215,\\ \\text{cross } 600",
          "explanation": "Assembling everything gives whiskers to $95$ and $340$, a box from $180$ to $260$ with median $215$, and the outlier $600$ marked as a cross.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 650,
            "q1": 180,
            "median": 215,
            "q3": 260,
            "whiskerLow": 95,
            "whiskerHigh": 340,
            "outliers": [
              600
            ],
            "axisLabel": "house price (thousands of pounds)",
            "showValues": true,
            "caption": "Box plot of house prices with one high outlier",
            "alt": "Box plot with box 180 to 260, median 215, whiskers to 95 and 340, and a cross outlier at 600"
          }
        }
      ],
      "finalAnswer": "(a) IQR $= 80$; boundaries are $60$ and $380$. (b) Only $600$ is an outlier; $95$ is not. (c) The box plot has box $180$ to $260$ with median $215$, whiskers to $95$ and $340$, and $600$ shown as a cross."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "box plot",
      "outliers",
      "interpretation",
      "skewness"
    ],
    "questionText": "The box plot shows the scores, out of $100$, of a class in an examination. Two scores are marked as outliers. (a) Find the interquartile range. (b) Find the overall range of the data, including the outliers. (c) Given that an outlier is a value more than $1.5 \\times \\text{IQR}$ beyond the nearer quartile, verify that both marked values are outliers. (d) Comment on the skewness of the distribution.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 100,
      "q1": 40,
      "median": 44,
      "q3": 52,
      "whiskerLow": 28,
      "whiskerHigh": 64,
      "outliers": [
        10,
        90
      ],
      "axisLabel": "examination score (marks)",
      "showValues": false,
      "caption": "Box plot of examination scores with two outliers",
      "alt": "Box plot with box 40 to 52, median 44, whiskers to 28 and 64, and crosses at 10 and 90"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the box plot features and read the quartiles.",
          "workingLatex": "Q_1 = 40,\\quad Q_3 = 52",
          "explanation": "The box edges give the lower and upper quartiles. Reading them off is the starting point for both the IQR and the outlier check.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 52 - 40 = 12",
          "explanation": "The width of the box gives the spread of the middle half of the class, which is $12$ marks.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the outliers from the crosses.",
          "workingLatex": "\\text{outliers} = 10 \\text{ and } 90",
          "explanation": "Each cross beyond a whisker is an outlier. Here there is a low outlier at $10$ and a high outlier at $90$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the overall range using the extreme values.",
          "workingLatex": "\\text{range} = 90 - 10 = 80",
          "explanation": "The range spans the whole data set, so it uses the smallest and largest values even when they are outliers. That gives $80$ marks.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 12 = 18",
          "explanation": "This is the distance stepped out beyond each quartile to find the outlier boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the lower boundary.",
          "workingLatex": "Q_1 - 18 = 40 - 18 = 22",
          "explanation": "Any score below $22$ is an outlier at the low end. This is the value to compare $10$ against.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the low outlier.",
          "workingLatex": "10 < 22 \\ \\Rightarrow\\ \\text{outlier}",
          "explanation": "Since $10$ is below the lower boundary of $22$, it is confirmed as an outlier, matching the cross on the plot.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the upper boundary.",
          "workingLatex": "Q_3 + 18 = 52 + 18 = 70",
          "explanation": "Any score above $70$ is an outlier at the high end, giving the cut-off for the value $90$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the high outlier.",
          "workingLatex": "90 > 70 \\ \\Rightarrow\\ \\text{outlier}",
          "explanation": "Since $90$ exceeds the upper boundary of $70$, it too is confirmed as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Measure the gap from $Q_1$ to the median.",
          "workingLatex": "Q_2 - Q_1 = 44 - 40 = 4",
          "explanation": "Comparing the median's distance from each quartile reveals the shape of the data. The lower gap is just $4$ marks.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Measure the gap from the median to $Q_3$.",
          "workingLatex": "Q_3 - Q_2 = 52 - 44 = 8",
          "explanation": "The upper gap of $8$ marks is twice the lower gap, so the median sits toward the left side of the box.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the two gaps.",
          "workingLatex": "8 > 4",
          "explanation": "A larger stretch above the median than below it indicates the data trail off toward higher scores, which is positive skew.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the skewness.",
          "workingLatex": "\\text{positive skew}",
          "explanation": "Because the median is closer to the lower quartile, the distribution is positively skewed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise all the results.",
          "workingLatex": "\\text{IQR}=12,\\ \\text{range}=80,\\ 10,\\,90 \\text{ outliers},\\ \\text{positive skew}",
          "explanation": "Collecting the answers completes the interpretation: a modest IQR of $12$, a wide range of $80$ caused by two confirmed outliers, and a positively skewed distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) IQR $= 12$ marks. (b) Range $= 80$ marks. (c) Boundaries are $22$ and $70$; since $10 < 22$ and $90 > 70$, both are outliers. (d) The distribution is positively skewed, as the median is closer to the lower quartile."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "iqr",
      "five-number-summary",
      "quartiles"
    ],
    "questionText": "The times taken by members of a puzzle club to solve a puzzle, in minutes, have the following five-number summary: minimum $= 5$, lower quartile $Q_1 = 11$, median $= 14$, upper quartile $Q_3 = 19$, maximum $= 45$. An outlier is any value that is more than $1.5 \\times \\text{IQR}$ beyond the nearer quartile. Determine any outliers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 19 - 11 = 8",
          "explanation": "The IQR measures the spread of the middle half of the data and is the width of the box in a box plot. The whole outlier rule is built on it, so we work it out first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times \\text{IQR} = 1.5 \\times 8 = 12",
          "explanation": "The rule allows a value to sit up to one and a half box-widths beyond a quartile before we treat it as unusual. Finding this distance once lets us build both fences.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the lower fence.",
          "workingLatex": "Q_1 - 1.5 \\times \\text{IQR} = 11 - 12 = -1",
          "explanation": "Any value below this lower boundary would be a low outlier. We subtract from the lower quartile because low outliers sit beneath the box.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the upper fence.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 19 + 12 = 31",
          "explanation": "Any value above this upper boundary is a high outlier. We add to the upper quartile because high outliers sit above the box.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the minimum value.",
          "workingLatex": "5 > -1",
          "explanation": "The smallest reading is $5$, which lies above the lower fence of $-1$, so nothing at the low end is unusual.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the maximum value.",
          "workingLatex": "45 > 31",
          "explanation": "The largest reading is $45$, which lies beyond the upper fence of $31$, so it is far enough from the box to count as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{outlier: } 45 \\text{ minutes}",
          "explanation": "Only the maximum breaches a fence, so it is the single outlier; every other value lies inside the acceptable range.",
          "diagram": null
        }
      ],
      "finalAnswer": "The maximum value, $45$ minutes, is an outlier. There are no outliers at the low end."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "box-plot",
      "iqr"
    ],
    "questionText": "The box plot shows the masses, in kilograms, of a sample of parcels. Outliers are plotted as individual crosses. (a) Write down how many outliers are shown. (b) State the mass of each outlier. (c) The quartiles are $Q_1 = 12$ kg and $Q_3 = 20$ kg. Use the $1.5 \\times \\text{IQR}$ rule to confirm your answer to part (b).",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 40,
      "q1": 12,
      "median": 15,
      "q3": 20,
      "whiskerLow": 6,
      "whiskerHigh": 28,
      "outliers": [
        36
      ],
      "axisLabel": "Mass of parcel (kilograms)",
      "showValues": true,
      "caption": "Box plot of parcel masses",
      "alt": "A box plot on an axis from 0 to 40 kg with a box from 12 to 20, median at 15, whiskers reaching 6 and 28, and a single outlier cross at 36."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the outlier crosses.",
          "workingLatex": "\\text{number of crosses} = 1",
          "explanation": "On a box plot each outlier is drawn as a separate cross beyond the whiskers, so counting the crosses immediately gives the number of outliers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the value of the outlier.",
          "workingLatex": "\\text{outlier mass} = 36 \\text{ kg}",
          "explanation": "Reading straight down from the cross to the mass axis gives its value of $36$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 20 - 12 = 8",
          "explanation": "To confirm the cross really is an outlier we rebuild the fence, which starts from the interquartile range.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 8 = 12",
          "explanation": "This is how far beyond a quartile a value may sit before it is judged unusual.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the upper fence.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 20 + 12 = 32",
          "explanation": "Any mass above $32$ kg is an outlier. We use the upper fence because the cross sits above the box.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the marked value with the fence.",
          "workingLatex": "36 > 32",
          "explanation": "The value at $36$ kg lies beyond the upper fence of $32$ kg, which confirms it was correctly marked as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\text{confirmed outlier: } 36 \\text{ kg}",
          "explanation": "The rule agrees with the plot: there is exactly one outlier, at $36$ kg.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $1$ outlier. (b) $36$ kg. (c) The upper fence is $32$ kg and $36 > 32$, confirming that $36$ kg is an outlier."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "iqr",
      "quartiles"
    ],
    "questionText": "For a set of test scores the quartiles are $Q_1 = 42$ and $Q_3 = 60$. Using the rule that an outlier is any value more than $1.5 \\times \\text{IQR}$ beyond the nearer quartile, determine whether (a) a score of $20$ and (b) a score of $90$ is an outlier.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 60 - 42 = 18",
          "explanation": "The fences are measured in units of the IQR, so we begin by finding the width of the middle half of the data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 18 = 27",
          "explanation": "This is how far beyond a quartile a value is allowed to be before it counts as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the lower fence.",
          "workingLatex": "Q_1 - 1.5 \\times \\text{IQR} = 42 - 27 = 15",
          "explanation": "Only scores below $15$ are low outliers. This is important: a small-looking score is not automatically unusual.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the upper fence.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 60 + 27 = 87",
          "explanation": "Only scores above $87$ are high outliers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the score of $20$.",
          "workingLatex": "20 > 15",
          "explanation": "A score of $20$ is above the lower fence of $15$, so even though it is well below the quartiles it is not far enough out to be an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the score of $90$.",
          "workingLatex": "90 > 87",
          "explanation": "A score of $90$ is beyond the upper fence of $87$, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "20 \\text{: not an outlier}, \\quad 90 \\text{: outlier}",
          "explanation": "Comparing each value with the correct fence gives a clear yes/no decision for both scores.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $20$ is not an outlier, because it lies above the lower fence of $15$. (b) $90$ is an outlier, because it lies above the upper fence of $87$."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "standard-deviation",
      "mean"
    ],
    "questionText": "The heights of a sample of plants have mean $\\bar{x} = 50$ cm and standard deviation $\\sigma = 6$ cm. A value is defined to be an outlier if it is more than two standard deviations from the mean. Five of the recorded heights are $34$, $38$, $44$, $63$ and $65$ cm. Determine which of these are outliers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the outlier rule as an acceptable band.",
          "workingLatex": "\\text{keep if } \\bar{x} - 2\\sigma \\le x \\le \\bar{x} + 2\\sigma",
          "explanation": "Being within two standard deviations of the mean is a band around the average. Any height outside this band is an outlier, so we first build the band.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out two standard deviations.",
          "workingLatex": "2\\sigma = 2 \\times 6 = 12",
          "explanation": "This is the distance we are allowed to move away from the mean in either direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the lower boundary.",
          "workingLatex": "\\bar{x} - 2\\sigma = 50 - 12 = 38",
          "explanation": "Heights below $38$ cm are too far below average and count as low outliers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the upper boundary.",
          "workingLatex": "\\bar{x} + 2\\sigma = 50 + 12 = 62",
          "explanation": "Heights above $62$ cm are too far above average and count as high outliers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test $34$ cm.",
          "workingLatex": "34 < 38",
          "explanation": "This height is below the lower boundary, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test $38$ cm.",
          "workingLatex": "38 = 38",
          "explanation": "This height sits exactly on the lower boundary. The rule requires a value to be more than two standard deviations away, so a value exactly on the boundary is not classed as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test $44$ cm.",
          "workingLatex": "38 \\le 44 \\le 62",
          "explanation": "This height lies comfortably inside the band, so it is a normal value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test $63$ cm.",
          "workingLatex": "63 > 62",
          "explanation": "This height is above the upper boundary, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test $65$ cm.",
          "workingLatex": "65 > 62",
          "explanation": "This height is also above the upper boundary, so it too is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "\\text{outliers: } 34, \\ 63, \\ 65",
          "explanation": "Only the values outside the band $38$ to $62$ cm are outliers, and the boundary value $38$ is deliberately excluded.",
          "diagram": null
        }
      ],
      "finalAnswer": "The outliers are $34$, $63$ and $65$ cm. The value $38$ cm lies exactly on the lower boundary, so it is not classed as an outlier, and $44$ cm lies inside the band."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "outliers",
      "box-plot",
      "cleaning-data",
      "context"
    ],
    "questionText": "The box plot shows the times, in seconds, taken to transfer a file in $30$ repeated tests. The value $54$ s has been plotted as an outlier. (a) Using the $1.5 \\times \\text{IQR}$ rule, verify that $54$ s is an outlier. (b) The analyst later finds that during the $54$ s test the network suffered a temporary fault. Explain whether this value should be removed before reporting the typical transfer time.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 60,
      "q1": 20,
      "median": 26,
      "q3": 32,
      "whiskerLow": 12,
      "whiskerHigh": 44,
      "outliers": [
        54
      ],
      "axisLabel": "File transfer time (seconds)",
      "showValues": true,
      "caption": "Box plot of file-transfer times",
      "alt": "A box plot on an axis from 0 to 60 seconds with a box from 20 to 32, median at 26, whiskers reaching 12 and 44, and an outlier cross at 54."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the quartiles from the box plot.",
          "workingLatex": "Q_1 = 20, \\quad Q_3 = 32",
          "explanation": "The ends of the box give the two quartiles directly, and we need them to build the fence.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 32 - 20 = 12",
          "explanation": "The IQR is the width of the box and is the unit the outlier rule uses.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 12 = 18",
          "explanation": "This is how far above the upper quartile a value may sit before it is judged unusual.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the upper fence.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 32 + 18 = 50",
          "explanation": "Any time above $50$ s is an outlier. We use the upper fence because the marked value is a large time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare $54$ s with the fence.",
          "workingLatex": "54 > 50",
          "explanation": "The value at $54$ s lies beyond the upper fence of $50$ s, so the rule confirms it is an outlier, answering part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret what the outlier represents.",
          "workingLatex": "54 \\text{ s} = \\text{one unusually slow test}",
          "explanation": "An outlier is simply a value that sits far from the rest; it is not automatically wrong. We must look at why it occurred before deciding what to do with it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Consider the cause of the value.",
          "workingLatex": "\\text{cause} = \\text{temporary network fault}",
          "explanation": "The slow time was produced by a fault, not by a normal file transfer, so it does not describe how the system usually behaves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the decision principle.",
          "workingLatex": "\\text{remove errors; keep genuine values}",
          "explanation": "The convention is to remove an outlier only when there is a clear reason to believe it is a mistake or error. Genuine extreme values should be kept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the principle here.",
          "workingLatex": "\\text{fault} \\Rightarrow \\text{remove } 54 \\text{ s}",
          "explanation": "Because the fault makes $54$ s an error rather than a real transfer time, removing it gives a fairer picture of typical performance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "\\text{outlier confirmed; remove it}",
          "explanation": "Both parts are now answered: the value is an outlier by the rule, and it should be removed because it was caused by a fault.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The upper fence is $50$ s and $54 > 50$, so $54$ s is an outlier. (b) Because the reading was caused by a temporary network fault it is an error rather than a genuine transfer time, so it should be removed before reporting the typical time. Had it been a real reading, it should have been kept."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "standard-deviation",
      "summary-statistics"
    ],
    "questionText": "A sample of $n = 20$ readings of a quantity $x$ has $\\sum x = 800$ and $\\sum x^2 = 33280$. A reading is classed as an outlier if it lies more than two standard deviations from the mean. Two of the readings are $x = 21$ and $x = 58$. Using the standard deviation with divisor $n$, determine whether each of these is an outlier.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the mean.",
          "workingLatex": "\\bar{x} = \\frac{\\sum x}{n} = \\frac{800}{20} = 40",
          "explanation": "The mean is the centre of the acceptable band, so we compute it first from the total and the number of readings.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the variance formula.",
          "workingLatex": "\\sigma^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2",
          "explanation": "The population variance is the mean of the squares minus the square of the mean. Using the summary totals avoids having to know every individual reading.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "\\sigma^2 = \\frac{33280}{20} - 40^2 = 1664 - 1600 = 64",
          "explanation": "Dividing $\\sum x^2$ by $n$ and subtracting the squared mean gives the variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the standard deviation.",
          "workingLatex": "\\sigma = \\sqrt{64} = 8",
          "explanation": "Taking the square root of the variance returns to the original units of the readings.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out two standard deviations.",
          "workingLatex": "2\\sigma = 2 \\times 8 = 16",
          "explanation": "This is the distance a reading may be from the mean before it is treated as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the lower boundary.",
          "workingLatex": "\\bar{x} - 2\\sigma = 40 - 16 = 24",
          "explanation": "Readings below $24$ are too far below the mean and count as low outliers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper boundary.",
          "workingLatex": "\\bar{x} + 2\\sigma = 40 + 16 = 56",
          "explanation": "Readings above $56$ are too far above the mean and count as high outliers.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptable band.",
          "workingLatex": "24 \\le x \\le 56",
          "explanation": "Anything inside this band is a normal reading; anything outside it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test $x = 21$.",
          "workingLatex": "21 < 24",
          "explanation": "This reading falls below the lower boundary, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test $x = 58$.",
          "workingLatex": "58 > 56",
          "explanation": "This reading rises above the upper boundary, so it is also an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion.",
          "workingLatex": "\\text{both } 21 \\text{ and } 58 \\text{ are outliers}",
          "explanation": "Each reading lies outside the band $24$ to $56$, so both are flagged as outliers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = 40$ and $\\sigma = 8$, so readings outside the range $24$ to $56$ are outliers. Both $21$ (below $24$) and $58$ (above $56$) are outliers."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "box-plot",
      "iqr"
    ],
    "questionText": "The box plot shows the annual rainfall, in centimetres, recorded at $30$ towns. (a) Using the $1.5 \\times \\text{IQR}$ rule, show that the rainfall of $110$ cm marked on the plot is an outlier. (b) A further town has an annual rainfall of $44$ cm. Determine whether $44$ cm would be an outlier.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 40,
      "axisMax": 120,
      "q1": 64,
      "median": 72,
      "q3": 80,
      "whiskerLow": 52,
      "whiskerHigh": 96,
      "outliers": [
        110
      ],
      "axisLabel": "Annual rainfall (centimetres)",
      "showValues": true,
      "caption": "Box plot of annual rainfall for 30 towns",
      "alt": "A box plot on an axis from 40 to 120 cm with a box from 64 to 80, median at 72, whiskers reaching 52 and 96, and an outlier cross at 110."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the quartiles from the box plot.",
          "workingLatex": "Q_1 = 64, \\quad Q_3 = 80",
          "explanation": "The two ends of the box give the quartiles directly, and both fences are built from them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = 80 - 64 = 16",
          "explanation": "The IQR is the width of the box and the unit that the outlier rule uses.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 16 = 24",
          "explanation": "This distance is added to or subtracted from a quartile to place a fence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the upper fence.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 80 + 24 = 104",
          "explanation": "Any rainfall above $104$ cm is a high outlier.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare $110$ cm with the upper fence.",
          "workingLatex": "110 > 104",
          "explanation": "The marked value of $110$ cm lies beyond the upper fence, so it is an outlier, which answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the lower fence.",
          "workingLatex": "Q_1 - 1.5 \\times \\text{IQR} = 64 - 24 = 40",
          "explanation": "For part (b) we need the low end, so we build the lower fence in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State what the lower fence means.",
          "workingLatex": "\\text{low outlier if } x < 40",
          "explanation": "Only rainfall below $40$ cm would be a low outlier. A value that merely looks small is not automatically unusual.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare $44$ cm with the lower fence.",
          "workingLatex": "44 > 40",
          "explanation": "The rainfall of $44$ cm is above the lower fence, so it is not far enough out to be an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result for $44$ cm.",
          "workingLatex": "44 \\text{ cm: not an outlier}",
          "explanation": "It is a low but acceptable value, sitting inside the range allowed by the rule.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "110 \\text{: outlier}, \\quad 44 \\text{: not an outlier}",
          "explanation": "Checking each value against the correct fence gives the decision for both parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The upper fence is $104$ cm and $110 > 104$, so $110$ cm is an outlier. (b) The lower fence is $40$ cm; since $44 > 40$, a rainfall of $44$ cm is not an outlier."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "box-plot",
      "range",
      "iqr",
      "cleaning-data"
    ],
    "questionText": "The box plot shows the waiting times, in minutes, of $25$ patients at a clinic. One value is marked as an outlier at $58$ minutes. (a) Use the $1.5 \\times \\text{IQR}$ rule to confirm that $58$ minutes is an outlier. (b) Write down the range of the data as shown. (c) The outlier is removed. Find the new range. (d) State the value of the IQR before and after the outlier is removed, and use your results to explain why the range is a poor measure of spread when outliers are present.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 60,
      "q1": 14,
      "median": 20,
      "q3": 28,
      "whiskerLow": 6,
      "whiskerHigh": 40,
      "outliers": [
        58
      ],
      "axisLabel": "Waiting time (minutes)",
      "showValues": true,
      "caption": "Box plot of clinic waiting times",
      "alt": "A box plot on an axis from 0 to 60 minutes with a box from 14 to 28, median at 20, whiskers reaching 6 and 40, and an outlier cross at 58."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the quartiles from the box plot.",
          "workingLatex": "Q_1 = 14, \\quad Q_3 = 28",
          "explanation": "The ends of the box give the quartiles, which we need for the fence and for the IQR later.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = 28 - 14 = 14",
          "explanation": "The IQR is the width of the box and the unit used by the outlier rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 14 = 21",
          "explanation": "This distance beyond the upper quartile marks where high outliers begin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the upper fence.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 28 + 21 = 49",
          "explanation": "Any waiting time above $49$ minutes is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare $58$ with the upper fence.",
          "workingLatex": "58 > 49",
          "explanation": "The marked value at $58$ minutes lies beyond the fence, confirming it is an outlier and answering part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the minimum value.",
          "workingLatex": "\\text{minimum} = 6",
          "explanation": "The lower whisker reaches the smallest value, $6$ minutes, which we need for the range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the maximum value shown.",
          "workingLatex": "\\text{maximum} = 58",
          "explanation": "As drawn, the largest value in the data set is the outlier at $58$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the range as shown.",
          "workingLatex": "\\text{range} = 58 - 6 = 52",
          "explanation": "The range is the largest value minus the smallest, so it currently includes the outlier. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the new maximum after removing the outlier.",
          "workingLatex": "\\text{new maximum} = 40",
          "explanation": "With the outlier gone, the largest remaining value is the upper whisker, which stops at the most extreme non-outlier, $40$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the new range.",
          "workingLatex": "\\text{new range} = 40 - 6 = 34",
          "explanation": "Recomputing with the new maximum gives the range of the cleaned data, answering part (c).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the IQR before removal.",
          "workingLatex": "\\text{IQR} = 14",
          "explanation": "This is the value already found from the quartiles.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the IQR after removal.",
          "workingLatex": "\\text{IQR} = 14 \\ (\\text{unchanged})",
          "explanation": "The outlier lies beyond both quartiles, so removing it does not move $Q_1$ or $Q_3$, and the IQR is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare how much each measure changed.",
          "workingLatex": "\\text{range: } 52 \\to 34, \\quad \\text{IQR: } 14 \\to 14",
          "explanation": "Removing one value cut the range by $18$ minutes but left the IQR untouched.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Explain the conclusion for part (d).",
          "workingLatex": "\\text{range uses extremes; IQR uses quartiles}",
          "explanation": "The range depends only on the two most extreme values, so a single outlier can change it dramatically. The IQR uses the quartiles from the middle of the data, so it is resistant to outliers and gives a more reliable picture of spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The upper fence is $49$ minutes and $58 > 49$, so it is an outlier. (b) Range $= 52$ minutes. (c) New range $= 34$ minutes. (d) The IQR is $14$ minutes both before and after removal, but the range falls from $52$ to $34$ minutes. The range depends only on the two most extreme values, so a single outlier changes it drastically, whereas the IQR uses the quartiles and is barely affected."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "standard-deviation",
      "mean",
      "cleaning-data"
    ],
    "questionText": "The masses, in grams, of $8$ manufactured items are: $48, 50, 51, 52, 53, 54, 55, 85$. A value is an outlier if it lies more than two standard deviations from the mean, and the standard deviation uses divisor $n$. (a) Find the mean and standard deviation, giving the standard deviation to $3$ significant figures. (b) Show that $85$ g is an outlier. (c) The $85$ g value is found to be a recording error and is removed. Recalculate the mean and standard deviation to $3$ significant figures, and comment on the effect of removing the outlier.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total of the masses.",
          "workingLatex": "\\sum x = 48+50+51+52+53+54+55+85 = 448",
          "explanation": "Adding all eight masses gives the total we need for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the mean.",
          "workingLatex": "\\bar{x} = \\frac{448}{8} = 56",
          "explanation": "Dividing the total by the number of items gives the mean. Notice it already sits above seven of the eight values, a hint that one large value is pulling it up.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the sum of the squares.",
          "workingLatex": "\\sum x^2 = 2304+2500+2601+2704+2809+2916+3025+7225 = 26084",
          "explanation": "Squaring each mass and adding gives $\\sum x^2$, which the variance formula needs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the variance.",
          "workingLatex": "\\sigma^2 = \\frac{26084}{8} - 56^2 = 3260.5 - 3136 = 124.5",
          "explanation": "Using the population formula, the variance is the mean of the squares minus the square of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the standard deviation.",
          "workingLatex": "\\sigma = \\sqrt{124.5} = 11.2 \\text{ g (3 s.f.)}",
          "explanation": "The square root of the variance returns to grams. We keep the fuller value $11.1579\\ldots$ for the boundary calculation and only round at the end.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out two standard deviations.",
          "workingLatex": "2\\sigma = 2 \\times 11.1579\\ldots = 22.316 \\text{ (3 d.p.)}",
          "explanation": "Using the unrounded standard deviation keeps the boundary accurate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper boundary.",
          "workingLatex": "\\bar{x} + 2\\sigma = 56 + 22.316 = 78.3 \\text{ (3 s.f.)}",
          "explanation": "Any mass above about $78.3$ g is a high outlier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare $85$ g with the boundary.",
          "workingLatex": "85 > 78.3",
          "explanation": "The mass of $85$ g lies beyond the upper boundary, so it is an outlier, which answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the other values stay inside the band.",
          "workingLatex": "\\bar{x} - 2\\sigma = 56 - 22.316 = 33.7, \\quad 48 \\le x \\le 55",
          "explanation": "The remaining masses lie between $48$ and $55$ g, comfortably inside the band $33.7$ to $78.3$, so $85$ g is the only outlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Remove the outlier and update the totals.",
          "workingLatex": "n = 7, \\quad \\sum x = 448 - 85 = 363",
          "explanation": "Removing $85$ g leaves seven items and reduces the total by $85$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the new mean.",
          "workingLatex": "\\bar{x} = \\frac{363}{7} = 51.9 \\text{ g (3 s.f.)}",
          "explanation": "Without the large value the mean drops to a figure much closer to the bulk of the data.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Update the sum of squares.",
          "workingLatex": "\\sum x^2 = 26084 - 7225 = 18859",
          "explanation": "We subtract $85^2 = 7225$ from the previous $\\sum x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the new variance.",
          "workingLatex": "\\sigma^2 = \\frac{18859}{7} - \\left(\\frac{363}{7}\\right)^2 = 2694.14 - 2689.16 = 4.98",
          "explanation": "Applying the same population formula to the seven remaining masses gives a much smaller variance.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the new standard deviation.",
          "workingLatex": "\\sigma = \\sqrt{4.98} = 2.23 \\text{ g (3 s.f.)}",
          "explanation": "The spread of the cleaned data is only about $2.23$ g, since the remaining masses are tightly clustered.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Comment on the effect of removing the outlier.",
          "workingLatex": "\\bar{x}: 56 \\to 51.9, \\quad \\sigma: 11.2 \\to 2.23",
          "explanation": "Removing one value pulled the mean down by about $4$ g and cut the standard deviation from over $11$ g to about $2.2$ g. A single outlier had strongly inflated both measures, especially the standard deviation, because it depends on squared distances from the mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\bar{x} = 56$ g and $\\sigma = 11.2$ g (3 s.f.). (b) The upper boundary is $56 + 2\\sigma \\approx 78.3$ g and $85 > 78.3$, so $85$ g is an outlier. (c) After removing it, $\\bar{x} = 51.9$ g and $\\sigma = 2.23$ g (3 s.f.). Both fall sharply, showing that a single outlier had greatly inflated the mean and, in particular, the standard deviation."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "box-plot",
      "iqr",
      "median",
      "range"
    ],
    "questionText": "The number of customers entering a shop in each of $11$ consecutive hours, written in order, is: $3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 40$. (a) Find the median, the lower quartile and the upper quartile, using the rule that the quartile position is $\\tfrac{n}{4}$ or $\\tfrac{3n}{4}$, rounded up to the next whole number when it is not an integer. (b) Using the $1.5 \\times \\text{IQR}$ rule, identify any outliers and draw a box plot for the data. (c) The outlier is removed. Find the new median and the new range, and comment on how each is affected.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Locate the median position.",
          "workingLatex": "n = 11, \\quad \\text{median position} = \\frac{n+1}{2} = 6",
          "explanation": "With $11$ ordered values the middle one is the $6$th, so we read that value off the list.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the median.",
          "workingLatex": "\\text{median} = 6\\text{th value} = 12",
          "explanation": "Counting to the sixth value in the ordered list gives the median.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the lower quartile position.",
          "workingLatex": "\\frac{n}{4} = \\frac{11}{4} = 2.75 \\to 3\\text{rd value}",
          "explanation": "The position is not a whole number, so by the stated rule we round up to the $3$rd value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the lower quartile.",
          "workingLatex": "Q_1 = 3\\text{rd value} = 9",
          "explanation": "The third value in the ordered list is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the upper quartile position.",
          "workingLatex": "\\frac{3n}{4} = \\frac{33}{4} = 8.25 \\to 9\\text{th value}",
          "explanation": "Again the position is not whole, so we round up to the $9$th value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the upper quartile.",
          "workingLatex": "Q_3 = 9\\text{th value} = 15",
          "explanation": "The ninth value in the ordered list is $15$. Part (a) is now complete.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = 15 - 9 = 6",
          "explanation": "The IQR gives the width of the middle half and drives the outlier rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Work out $1.5 \\times \\text{IQR}$.",
          "workingLatex": "1.5 \\times 6 = 9",
          "explanation": "This distance is added to and subtracted from the quartiles to place the fences.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find both fences.",
          "workingLatex": "\\text{lower} = 9 - 9 = 0, \\quad \\text{upper} = 15 + 9 = 24",
          "explanation": "Values below $0$ or above $24$ are outliers.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the extreme values.",
          "workingLatex": "3 \\ge 0, \\quad 40 > 24",
          "explanation": "The smallest value $3$ is inside the lower fence, but the largest value $40$ is beyond the upper fence, so $40$ is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find where the whiskers should stop.",
          "workingLatex": "\\text{lower whisker} = 3, \\quad \\text{upper whisker} = 16",
          "explanation": "On a box plot the whiskers reach the most extreme values that are not outliers. The lowest value $3$ is fine, and the largest non-outlier is $16$ (the value just below $40$).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Draw the box plot.",
          "workingLatex": "\\text{box: } 9 \\mid 12 \\mid 15, \\quad \\text{whiskers to } 3 \\text{ and } 16, \\quad \\text{outlier at } 40",
          "explanation": "The box runs from $Q_1 = 9$ to $Q_3 = 15$ with the median at $12$, whiskers extend to $3$ and $16$, and the outlier $40$ is marked as a separate cross.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 45,
            "q1": 9,
            "median": 12,
            "q3": 15,
            "whiskerLow": 3,
            "whiskerHigh": 16,
            "outliers": [
              40
            ],
            "axisLabel": "Number of customers per hour",
            "showValues": true,
            "caption": "Box plot of hourly customer counts",
            "alt": "A box plot on an axis from 0 to 45 with a box from 9 to 15, median at 12, whiskers reaching 3 and 16, and an outlier cross at 40."
          }
        },
        {
          "stepNumber": 13,
          "description": "Remove the outlier and find the new median.",
          "workingLatex": "n = 10, \\quad \\text{median} = \\frac{11 + 12}{2} = 11.5",
          "explanation": "With $40$ removed there are $10$ values, so the median is the average of the $5$th and $6$th values, $11$ and $12$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare the ranges.",
          "workingLatex": "\\text{old range} = 40 - 3 = 37, \\quad \\text{new range} = 16 - 3 = 13",
          "explanation": "Originally the range stretched all the way to the outlier; once it is removed the largest value is $16$, so the range shrinks sharply.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Comment on the effect for part (c).",
          "workingLatex": "\\text{median: } 12 \\to 11.5, \\quad \\text{range: } 37 \\to 13",
          "explanation": "The median barely moves because it depends on the middle values and is resistant to the outlier, whereas the range collapses from $37$ to $13$ because it depends entirely on the extremes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Median $= 12$, $Q_1 = 9$, $Q_3 = 15$. (b) The upper fence is $24$ and $40 > 24$, so $40$ is an outlier; the box plot has whiskers to $3$ and $16$ with a cross at $40$. (c) After removing the outlier the median is $11.5$ (almost unchanged), but the range drops from $37$ to $13$. The median is resistant to the outlier, whereas the range is highly sensitive to it."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "box plot",
      "median",
      "iqr",
      "comparing distributions"
    ],
    "questionText": "Two classes sat the same test, marked out of $80$. Their results are summarised below. Class A: minimum $22$, lower quartile $35$, median $48$, upper quartile $60$, maximum $74$. Class B: minimum $30$, lower quartile $42$, median $55$, upper quartile $64$, maximum $80$. Compare the marks of the two classes. Your answer must refer to a measure of location and a measure of spread, in context.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 20,
      "axisMax": 80,
      "q1": 35,
      "median": 48,
      "q3": 60,
      "whiskerLow": 22,
      "whiskerHigh": 74,
      "outliers": [],
      "axisLabel": "test score (marks)",
      "showValues": true,
      "caption": "Box plot of Class A test marks.",
      "alt": "A box plot for Class A running from 22 to 74, with quartiles at 35, 48 and 60."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the median of each class as the measure of location.",
          "workingLatex": "\\text{median}_A = 48, \\qquad \\text{median}_B = 55",
          "explanation": "The median marks the middle student in each class. Comparing medians tells us which class was typically higher-scoring, without being pulled around by one or two unusual marks.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the medians in context.",
          "workingLatex": "55 > 48",
          "explanation": "Class B's median is $7$ marks higher, so a typical student in Class B scored better than a typical student in Class A.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the interquartile range of each class as the measure of spread.",
          "workingLatex": "\\text{IQR}_A = 60 - 35 = 25, \\qquad \\text{IQR}_B = 64 - 42 = 22",
          "explanation": "The IQR is the width of the middle half of the marks. It is a fair way to compare spread because it looks past the extreme students at each end.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the interquartile ranges in context.",
          "workingLatex": "22 < 25",
          "explanation": "Class B's middle half is packed into a narrower band, so Class B's marks are more consistent — the students are closer to one another in achievement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the overall spread using the range.",
          "workingLatex": "\\text{range}_A = 74 - 22 = 52, \\qquad \\text{range}_B = 80 - 30 = 50",
          "explanation": "The range uses the two most extreme marks. Both ranges are almost equal, which reassures us that the IQR conclusion is not just a quirk of the middle values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment on why median and IQR are suitable here.",
          "workingLatex": "\\text{no extreme outliers in either summary}",
          "explanation": "Neither box plot shows a mark stranded far from the rest, so median and IQR give a trustworthy picture and either class could equally well be compared by mean and standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the overall comparison.",
          "workingLatex": "\\text{median}_B > \\text{median}_A \\;\\text{and}\\; \\text{IQR}_B < \\text{IQR}_A",
          "explanation": "Pairing the two findings: Class B scored higher and was more tightly grouped, so Class B did better and was more consistent than Class A.",
          "diagram": null
        }
      ],
      "finalAnswer": "Class B had the higher median ($55$ vs $48$ marks), so students in Class B typically scored higher. Class B also had the smaller IQR ($22$ vs $25$ marks), so Class B's marks were more consistent. Overall Class B performed better and more consistently."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "five-number summary",
      "median",
      "range",
      "comparing distributions"
    ],
    "questionText": "The waiting times, in minutes, for patients at two walk-in clinics on one morning are summarised by their five-number summaries. Clinic P: minimum $2$, lower quartile $5$, median $8$, upper quartile $12$, maximum $20$. Clinic Q: minimum $3$, lower quartile $7$, median $11$, upper quartile $15$, maximum $22$. Compare the waiting times at the two clinics, referring to a measure of location and a measure of spread in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the median of each clinic as the location measure.",
          "workingLatex": "\\text{median}_P = 8, \\qquad \\text{median}_Q = 11",
          "explanation": "The median waiting time is the time such that half of patients waited less and half waited more, so it captures the typical experience at each clinic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the medians in context.",
          "workingLatex": "8 < 11",
          "explanation": "Clinic P's median is $3$ minutes lower, so a typical patient was seen sooner at Clinic P than at Clinic Q.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the interquartile range at each clinic.",
          "workingLatex": "\\text{IQR}_P = 12 - 5 = 7, \\qquad \\text{IQR}_Q = 15 - 7 = 8",
          "explanation": "The IQR shows how varied the middle half of waiting times were. We use it rather than the full range because it is not thrown off by the single longest wait.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the interquartile ranges in context.",
          "workingLatex": "7 < 8",
          "explanation": "Clinic P's IQR is slightly smaller, so waiting times at Clinic P were a little more predictable for most patients.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the ranges as well.",
          "workingLatex": "\\text{range}_P = 20 - 2 = 18, \\qquad \\text{range}_Q = 22 - 3 = 19",
          "explanation": "The two ranges are very close, confirming that the overall spread of waiting times is broadly similar even though the typical waits differ.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the overall comparison.",
          "workingLatex": "\\text{median}_P < \\text{median}_Q,\\quad \\text{IQR}_P < \\text{IQR}_Q",
          "explanation": "Clinic P was quicker on average and marginally more consistent, so on this morning patients were better served at Clinic P.",
          "diagram": null
        }
      ],
      "finalAnswer": "Clinic P had the lower median wait ($8$ vs $11$ minutes), so patients were typically seen sooner at Clinic P. Clinic P also had the slightly smaller IQR ($7$ vs $8$ minutes), so its waiting times were a little more consistent. Overall Clinic P gave the quicker and more predictable service."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "mean",
      "standard deviation",
      "comparing distributions"
    ],
    "questionText": "The daily maximum temperature, in degrees Celsius, was recorded for the month of June in two towns. For Town X the mean was $18\\,^{\\circ}\\text{C}$ with standard deviation $3\\,^{\\circ}\\text{C}$. For Town Y the mean was $15\\,^{\\circ}\\text{C}$ with standard deviation $5\\,^{\\circ}\\text{C}$. There were no unusually extreme days in either town. Compare the June temperatures of the two towns, referring to a measure of location and a measure of spread in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify which statistics measure location and spread.",
          "workingLatex": "\\text{location: mean}, \\qquad \\text{spread: standard deviation}",
          "explanation": "The mean gives the average temperature and the standard deviation measures how far individual days sit from that average, so together they describe the centre and the spread.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the mean temperatures.",
          "workingLatex": "18 > 15",
          "explanation": "Town X's mean is $3\\,^{\\circ}\\text{C}$ higher, so on average Town X was warmer during June.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the location comparison in context.",
          "workingLatex": "\\bar{x}_X - \\bar{x}_Y = 18 - 15 = 3",
          "explanation": "A typical June day in Town X was about $3\\,^{\\circ}\\text{C}$ warmer than a typical day in Town Y, which is a noticeable everyday difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the standard deviations.",
          "workingLatex": "3 < 5",
          "explanation": "Town X's standard deviation is smaller, meaning its daily temperatures cluster more tightly around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the spread comparison in context.",
          "workingLatex": "\\sigma_X = 3,\\quad \\sigma_Y = 5",
          "explanation": "Town Y's larger standard deviation tells us its weather swung more from day to day, so Town X had the steadier, more consistent temperatures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Justify using mean and standard deviation here.",
          "workingLatex": "\\text{no extreme days} \\Rightarrow \\text{mean and s.d. are reliable}",
          "explanation": "Because we are told there were no unusually extreme days, no single reading distorts the mean, so mean and standard deviation are a sound choice. If outliers had been present, median and IQR would have been safer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the overall comparison.",
          "workingLatex": "\\bar{x}_X > \\bar{x}_Y,\\quad \\sigma_X < \\sigma_Y",
          "explanation": "Combining both: Town X was warmer on average and its temperatures were more consistent, so Town X had the warmer and steadier June.",
          "diagram": null
        }
      ],
      "finalAnswer": "Town X had the higher mean temperature ($18\\,^{\\circ}\\text{C}$ vs $15\\,^{\\circ}\\text{C}$), so it was warmer on average. Town X also had the smaller standard deviation ($3\\,^{\\circ}\\text{C}$ vs $5\\,^{\\circ}\\text{C}$), so its temperatures were more consistent. Mean and standard deviation are appropriate as there were no extreme days."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "box plot",
      "outlier",
      "median",
      "iqr",
      "skew"
    ],
    "questionText": "Two groups of drivers had their reaction times, in seconds, measured on a simulator. Group A had completed a training course; Group B had not. Group A: lower quartile $0.22$, median $0.25$, upper quartile $0.29$, with the times running from $0.18$ up to $0.34$ apart from one reading of $0.55$. Group B: lower quartile $0.28$, median $0.33$, upper quartile $0.40$, with times from $0.20$ to $0.50$. Compare the two groups' reaction times, and explain why the median and interquartile range are the better statistics to use for Group A.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0.15,
      "axisMax": 0.6,
      "q1": 0.22,
      "median": 0.25,
      "q3": 0.29,
      "whiskerLow": 0.18,
      "whiskerHigh": 0.34,
      "outliers": [
        0.55
      ],
      "axisLabel": "reaction time (seconds)",
      "showValues": true,
      "caption": "Box plot of Group A reaction times, showing one outlier at 0.55 s.",
      "alt": "A box plot for Group A from 0.18 to 0.34 with quartiles 0.22, 0.25, 0.29 and an outlier plotted at 0.55."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm that 0.55 is an outlier for Group A.",
          "workingLatex": "\\text{IQR}_A = 0.29 - 0.22 = 0.07,\\quad Q_3 + 1.5\\times\\text{IQR} = 0.29 + 0.105 = 0.395",
          "explanation": "The usual rule flags any value more than $1.5$ IQRs beyond a quartile. Since $0.55 > 0.395$, that reading sits far outside the pack and counts as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the medians of the two groups.",
          "workingLatex": "\\text{median}_A = 0.25,\\quad \\text{median}_B = 0.33",
          "explanation": "The median gives each group's typical reaction time. Group A's is lower, so a typical trained driver reacted more quickly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the location difference in context.",
          "workingLatex": "0.33 - 0.25 = 0.08",
          "explanation": "A typical trained driver reacted about $0.08$ seconds faster — a meaningful margin when braking at speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the interquartile range of each group.",
          "workingLatex": "\\text{IQR}_A = 0.07,\\quad \\text{IQR}_B = 0.40 - 0.28 = 0.12",
          "explanation": "The IQR measures how varied the middle half of times were. It is ideal here because it simply ignores the stray $0.55$ reading in Group A.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the interquartile ranges in context.",
          "workingLatex": "0.07 < 0.12",
          "explanation": "Group A's middle half is far tighter, so the trained drivers were not only faster but also more consistent with one another.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the effect of the outlier on the mean and standard deviation.",
          "workingLatex": "0.55 \\gg 0.34",
          "explanation": "The mean and standard deviation add in every value, so the single slow reading of $0.55$ would drag Group A's mean upward and inflate its standard deviation, painting an unfairly negative picture.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain why median and IQR are preferred for Group A.",
          "workingLatex": "\\text{median, IQR are resistant to outliers}",
          "explanation": "Because the median and IQR depend only on the ordered positions of the data, one extreme value barely moves them. With Group A's outlier present, they describe the group far more honestly than the mean and standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on the shape of Group A's distribution.",
          "workingLatex": "Q_2 - Q_1 = 0.03,\\quad Q_3 - Q_2 = 0.04",
          "explanation": "With one long tail towards the slow reading, Group A's data is positively skewed, which is another reason to prefer median and IQR over statistics that assume a balanced spread.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the groups fairly using like-for-like statistics.",
          "workingLatex": "\\text{median}_A < \\text{median}_B,\\quad \\text{IQR}_A < \\text{IQR}_B",
          "explanation": "Using the same resistant statistics for both groups keeps the comparison fair: Group A is lower and tighter on both counts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the overall conclusion.",
          "workingLatex": "\\text{Group A: faster and more consistent}",
          "explanation": "Bringing location and spread together, the trained drivers reacted faster and more consistently, suggesting the training was effective.",
          "diagram": null
        }
      ],
      "finalAnswer": "Group A had the lower median ($0.25$ s vs $0.33$ s), so trained drivers reacted about $0.08$ s faster, and the smaller IQR ($0.07$ s vs $0.12$ s), so they were more consistent. Because Group A contains an outlier at $0.55$ s (making the data skewed), the median and IQR are the better statistics: they resist that extreme value, whereas the mean and standard deviation would be distorted by it."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "mean",
      "standard deviation",
      "summary statistics",
      "comparing distributions"
    ],
    "questionText": "Two students each sat $6$ mock papers, marked as percentages. For Student A, $\\sum x = 420$ and $\\sum x^2 = 29640$. For Student B, $\\sum x = 414$ and $\\sum x^2 = 28920$. Calculate the mean and standard deviation of each student's marks (using the population standard deviation), and use them to compare the two students' performance and consistency. Give standard deviations to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan for the comparison.",
          "workingLatex": "\\text{compare means (location) and s.d. (spread)}",
          "explanation": "The summary totals let us find both the average mark and how spread out the marks are, which is exactly what a fair comparison needs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find Student A's mean.",
          "workingLatex": "\\bar{x}_A = \\frac{\\sum x}{n} = \\frac{420}{6} = 70",
          "explanation": "Dividing the total marks by the number of papers gives the average percentage Student A scored.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find Student B's mean.",
          "workingLatex": "\\bar{x}_B = \\frac{414}{6} = 69",
          "explanation": "The same calculation for Student B gives their average mark for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the means in context.",
          "workingLatex": "70 > 69",
          "explanation": "Student A's average is $1$ percentage point higher, so on typical performance Student A did marginally better.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find Student A's variance.",
          "workingLatex": "\\sigma_A^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2 = \\frac{29640}{6} - 70^2 = 4940 - 4900 = 40",
          "explanation": "The variance formula subtracts the square of the mean from the mean of the squares, measuring the average squared distance of the marks from their centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find Student A's standard deviation.",
          "workingLatex": "\\sigma_A = \\sqrt{40} = 6.324\\ldots \\approx 6.32",
          "explanation": "Taking the square root returns to the original units (percentage points), giving a typical distance of each mark from Student A's average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find Student B's variance.",
          "workingLatex": "\\sigma_B^2 = \\frac{28920}{6} - 69^2 = 4820 - 4761 = 59",
          "explanation": "Repeating the calculation for Student B tells us how varied their marks were around their own mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find Student B's standard deviation.",
          "workingLatex": "\\sigma_B = \\sqrt{59} = 7.681\\ldots \\approx 7.68",
          "explanation": "The square root again gives a typical spread in percentage points, ready to compare with Student A.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the standard deviations in context.",
          "workingLatex": "6.32 < 7.68",
          "explanation": "Student A's marks vary less from paper to paper, so Student A was the more consistent performer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Comment on why mean and standard deviation are appropriate.",
          "workingLatex": "\\text{all data used, no outlier indicated}",
          "explanation": "With no extreme mark flagged in either summary, mean and standard deviation use every result and give a reliable comparison here.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the overall conclusion.",
          "workingLatex": "\\bar{x}_A > \\bar{x}_B,\\quad \\sigma_A < \\sigma_B",
          "explanation": "Pairing location and spread, Student A scored slightly higher on average and was more consistent, so Student A had the stronger overall performance.",
          "diagram": null
        }
      ],
      "finalAnswer": "Student A: mean $70$, standard deviation $\\approx 6.32$. Student B: mean $69$, standard deviation $\\approx 7.68$. Student A had the higher mean (better on average) and the smaller standard deviation (more consistent), so Student A performed marginally better and more reliably."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "skew",
      "median",
      "iqr",
      "quartiles",
      "comparing distributions"
    ],
    "questionText": "The times taken, in minutes, by two groups of runners to complete a $5\\,\\text{km}$ course are summarised. Group A: minimum $10$, lower quartile $20$, median $24$, upper quartile $40$, maximum $60$. Group B: minimum $12$, lower quartile $30$, median $38$, upper quartile $46$, maximum $55$. Comment on the skewness of each distribution, then compare the two groups referring to a measure of location and a measure of spread in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the quartile gaps for Group A.",
          "workingLatex": "Q_2 - Q_1 = 24 - 20 = 4,\\quad Q_3 - Q_2 = 40 - 24 = 16",
          "explanation": "Comparing the distance from the median down to $Q_1$ with the distance up to $Q_3$ reveals which side of the data is more stretched out.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Deduce the skew of Group A.",
          "workingLatex": "Q_3 - Q_2 > Q_2 - Q_1 \\Rightarrow \\text{positive skew}",
          "explanation": "The upper gap is much larger, so Group A has a long tail of slower times — the distribution is positively skewed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Measure the quartile gaps for Group B.",
          "workingLatex": "Q_2 - Q_1 = 38 - 30 = 8,\\quad Q_3 - Q_2 = 46 - 38 = 8",
          "explanation": "Doing the same for Group B lets us judge whether its spread is balanced about the median.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deduce the skew of Group B.",
          "workingLatex": "Q_3 - Q_2 = Q_2 - Q_1 \\Rightarrow \\text{roughly symmetric}",
          "explanation": "The two gaps are equal, so Group B's middle half is balanced about the median — the distribution is roughly symmetric.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the medians as the location measure.",
          "workingLatex": "\\text{median}_A = 24,\\quad \\text{median}_B = 38",
          "explanation": "The median is the fairest centre to compare because Group A is skewed; a mean would be dragged towards its slow tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the location comparison in context.",
          "workingLatex": "24 < 38",
          "explanation": "Group A's median time is $14$ minutes lower, so a typical runner in Group A finished the course considerably faster.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the interquartile range of each group.",
          "workingLatex": "\\text{IQR}_A = 40 - 20 = 20,\\quad \\text{IQR}_B = 46 - 30 = 16",
          "explanation": "The IQR measures the spread of the central half and, like the median, is not distorted by the skewed tail.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the interquartile ranges in context.",
          "workingLatex": "16 < 20",
          "explanation": "Group B's times are packed into a narrower band, so Group B's finishing times were more consistent than Group A's.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the choice of statistics.",
          "workingLatex": "\\text{skew present} \\Rightarrow \\text{use median and IQR}",
          "explanation": "Because Group A is clearly skewed, median and IQR give a fairer comparison than mean and standard deviation, which would be pulled about by the long tail of slow runners.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the overall conclusion.",
          "workingLatex": "\\text{median}_A < \\text{median}_B,\\quad \\text{IQR}_A > \\text{IQR}_B",
          "explanation": "There is a trade-off: Group A was typically faster, while Group B was more consistent. A full answer reports both rather than declaring one group better on every measure.",
          "diagram": null
        }
      ],
      "finalAnswer": "Group A is positively skewed (upper quartile gap $16$ vs lower gap $4$); Group B is roughly symmetric (both gaps $8$). Group A had the lower median ($24$ vs $38$ minutes), so its runners were typically faster, but Group B had the smaller IQR ($16$ vs $20$ minutes), so its times were more consistent. Because Group A is skewed, median and IQR are the appropriate statistics to compare."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "mean",
      "median",
      "skew",
      "iqr",
      "comparing distributions"
    ],
    "questionText": "The annual salaries of staff at two offices are summarised. Office A: mean $\\pounds 32{,}000$, median $\\pounds 28{,}000$, interquartile range $\\pounds 14{,}000$. Office B: mean $\\pounds 30{,}000$, median $\\pounds 29{,}000$, interquartile range $\\pounds 8{,}000$. Compare the salaries at the two offices. Explain which measure of location best represents a typical salary at Office A, and justify your choice.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the mean and median within Office A.",
          "workingLatex": "\\text{mean}_A = 32000 > \\text{median}_A = 28000",
          "explanation": "When the mean sits noticeably above the median, it is a signal that a few large values are pulling the average upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Deduce the shape of Office A's distribution.",
          "workingLatex": "\\text{mean} > \\text{median} \\Rightarrow \\text{positive skew}",
          "explanation": "The gap of $\\pounds 4{,}000$ shows Office A has a few high earners stretching the top of the distribution, so the salaries are positively skewed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the best location measure for Office A.",
          "workingLatex": "\\text{use the median} = \\pounds 28{,}000",
          "explanation": "For skewed pay data the median is the fairer 'typical' figure, because it is not inflated by a handful of large salaries the way the mean is.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check Office B's shape.",
          "workingLatex": "\\text{mean}_B = 30000 \\approx \\text{median}_B = 29000",
          "explanation": "Office B's mean and median are close, so its salaries are roughly symmetric and either average would represent them well.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare typical salaries using the median.",
          "workingLatex": "28000 < 29000",
          "explanation": "Using the median for both offices keeps the comparison fair: a typical worker at Office B earns $\\pounds 1{,}000$ more than a typical worker at Office A.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the spread of salaries.",
          "workingLatex": "\\text{IQR}_A = 14000 > \\text{IQR}_B = 8000",
          "explanation": "Office A's much larger IQR shows its salaries are more spread out, whereas Office B's pay is more tightly clustered.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the spread in context.",
          "workingLatex": "\\text{IQR}_A - \\text{IQR}_B = 6000",
          "explanation": "The middle half of Office A's salaries spans $\\pounds 6{,}000$ more than Office B's, so pay at Office B is more even between staff.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the difference in spread in context.",
          "workingLatex": "\\text{IQR}_B = \\pounds 8{,}000 < \\text{IQR}_A = \\pounds 14{,}000 \\Rightarrow \\text{B more consistent}",
          "explanation": "The middle half of Office B's salaries lies in a band of only $\\pounds 8{,}000$, against $\\pounds 14{,}000$ at Office A. In context this means pay at Office B is more consistent, whereas Office A has a much wider gap between its lower and higher earners.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the overall conclusion.",
          "workingLatex": "\\text{median}_B > \\text{median}_A,\\quad \\text{IQR}_B < \\text{IQR}_A",
          "explanation": "Combining both: Office B has a slightly higher typical salary and much less variation, so pay at Office B is both higher and more even.",
          "diagram": null
        }
      ],
      "finalAnswer": "At Office A the mean ($\\pounds 32{,}000$) exceeds the median ($\\pounds 28{,}000$), showing positive skew from a few high earners, so the median is the better typical salary. Comparing medians, Office B pays slightly more typically ($\\pounds 29{,}000$ vs $\\pounds 28{,}000$), and its smaller IQR ($\\pounds 8{,}000$ vs $\\pounds 14{,}000$) shows pay is more consistent. Overall Office B's salaries are higher typically and more even."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "cumulative frequency",
      "median",
      "iqr",
      "quartiles",
      "comparing distributions"
    ],
    "questionText": "Two schools entered $80$ students each for the same examination, marked out of $100$. The cumulative frequency graph for School A is shown. Reading from it gives lower quartile $40$, median $54$ and upper quartile $68$. From School B's cumulative frequency graph the corresponding values are lower quartile $36$, median $48$ and upper quartile $58$. Compare the performance of the two schools, referring to a measure of location and a measure of spread in context.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 0,
          "cf": 0
        },
        {
          "x": 30,
          "cf": 10
        },
        {
          "x": 40,
          "cf": 20
        },
        {
          "x": 54,
          "cf": 40
        },
        {
          "x": 68,
          "cf": 60
        },
        {
          "x": 80,
          "cf": 72
        },
        {
          "x": 100,
          "cf": 80
        }
      ],
      "origin": 0,
      "xAxisLabel": "examination mark (marks)",
      "readoffs": [
        {
          "cf": 20,
          "label": "lower quartile 40"
        },
        {
          "cf": 40,
          "label": "median 54"
        },
        {
          "cf": 60,
          "label": "upper quartile 68"
        }
      ],
      "caption": "Cumulative frequency graph for School A (80 students).",
      "alt": "A cumulative frequency curve rising from 0 to 80, with quartile read-offs at marks 40, 54 and 68."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Locate the median position on the graphs.",
          "workingLatex": "\\tfrac{1}{2}n = \\tfrac{1}{2}\\times 80 = 40",
          "explanation": "With $80$ students, the median is read off at a cumulative frequency of $40$, marking the mark below which half the students fall.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the medians of the two schools.",
          "workingLatex": "\\text{median}_A = 54,\\quad \\text{median}_B = 48",
          "explanation": "These are the marks read across at cumulative frequency $40$; they give each school's typical performance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the medians in context.",
          "workingLatex": "54 > 48",
          "explanation": "School A's median mark is $6$ higher, so a typical student at School A scored better than a typical student at School B.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the quartile positions.",
          "workingLatex": "\\tfrac{1}{4}n = 20,\\quad \\tfrac{3}{4}n = 60",
          "explanation": "The quartiles are read off at cumulative frequencies $20$ and $60$, splitting each cohort into quarters.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the interquartile range for School A.",
          "workingLatex": "\\text{IQR}_A = 68 - 40 = 28",
          "explanation": "Subtracting the lower quartile from the upper gives the spread of the middle half of School A's marks.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the interquartile range for School B.",
          "workingLatex": "\\text{IQR}_B = 58 - 36 = 22",
          "explanation": "The same subtraction for School B lets us compare how tightly each school's central marks are grouped.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the interquartile ranges in context.",
          "workingLatex": "22 < 28",
          "explanation": "School B's IQR is smaller, so its students' marks are more tightly clustered — School B was the more consistent school.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note why median and IQR suit cumulative frequency data.",
          "workingLatex": "\\text{quartiles read directly from the curve}",
          "explanation": "Cumulative frequency graphs are built for reading off quartiles, so median and IQR are the natural, reliable statistics to compare here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Weigh up which school did 'better'.",
          "workingLatex": "\\text{median}_A > \\text{median}_B,\\quad \\text{IQR}_A > \\text{IQR}_B",
          "explanation": "There is a trade-off: School A achieved higher marks typically, while School B was more consistent. A complete answer states both rather than picking a single winner.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the overall conclusion.",
          "workingLatex": "\\text{A: higher marks};\\quad \\text{B: more consistent}",
          "explanation": "School A performed better on average, whereas School B's results varied less — the choice of 'better' depends on whether higher marks or consistency matters more.",
          "diagram": null
        }
      ],
      "finalAnswer": "School A had the higher median ($54$ vs $48$ marks), so its students typically scored higher. School B had the smaller IQR ($22$ vs $28$ marks), so its results were more consistent. School A performed better on average, while School B was more consistent; median and IQR are the appropriate statistics as they are read directly from the cumulative frequency graphs."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "box plot",
      "outlier",
      "median",
      "iqr",
      "skew"
    ],
    "questionText": "Two athletes recorded their long jump distances, in metres, across a season. Athlete A: lower quartile $6.4$, median $6.6$, upper quartile $6.8$, with jumps from $5.8$ up to $7.0$ apart from one jump of $7.6$. Athlete B: minimum $6.0$, lower quartile $6.5$, median $6.7$, upper quartile $7.0$, maximum $7.3$. By first testing whether the $7.6$ jump is an outlier, compare the two athletes, deciding who is the stronger jumper and who is more consistent. Justify which statistics you use.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 5.5,
      "axisMax": 8.0,
      "q1": 6.4,
      "median": 6.6,
      "q3": 6.8,
      "whiskerLow": 5.8,
      "whiskerHigh": 7.0,
      "outliers": [
        7.6
      ],
      "axisLabel": "long jump distance (metres)",
      "showValues": true,
      "caption": "Box plot of Athlete A's long jump distances, with one outlier at 7.6 m.",
      "alt": "A box plot for Athlete A from 5.8 to 7.0 with quartiles 6.4, 6.6, 6.8 and an outlier at 7.6."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find Athlete A's interquartile range.",
          "workingLatex": "\\text{IQR}_A = 6.8 - 6.4 = 0.4",
          "explanation": "The IQR sets the scale for what counts as unusually far from the middle, so we compute it before testing the extreme jump.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the upper outlier boundary for Athlete A.",
          "workingLatex": "Q_3 + 1.5\\times\\text{IQR} = 6.8 + 1.5\\times 0.4 = 6.8 + 0.6 = 7.4",
          "explanation": "Any jump beyond $1.5$ IQRs above the upper quartile is treated as an outlier; here that threshold is $7.4$ m.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the 7.6 jump.",
          "workingLatex": "7.6 > 7.4 \\Rightarrow \\text{outlier}",
          "explanation": "Since $7.6$ exceeds the boundary, that jump is an outlier — an exceptional effort standing apart from the rest of Athlete A's season.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm Athlete B has no outliers.",
          "workingLatex": "\\text{IQR}_B = 7.0 - 6.5 = 0.5,\\quad Q_3 + 1.5\\times\\text{IQR} = 7.0 + 0.75 = 7.75",
          "explanation": "Athlete B's largest jump ($7.3$) is below $7.75$ and the smallest ($6.0$) is above $6.5 - 0.75 = 5.75$, so Athlete B's data has no outliers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Comment on the shape of Athlete A's distribution.",
          "workingLatex": "\\text{one long upper tail} \\Rightarrow \\text{positive skew}",
          "explanation": "The stray high jump gives Athlete A a long tail towards larger distances, so the distribution is positively skewed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide which statistics to use.",
          "workingLatex": "\\text{outlier + skew} \\Rightarrow \\text{median and IQR}",
          "explanation": "Because Athlete A has an outlier and skew, the mean and standard deviation would be distorted; the median and IQR resist that single big jump, so they give the fairer comparison.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the medians.",
          "workingLatex": "\\text{median}_A = 6.6,\\quad \\text{median}_B = 6.7",
          "explanation": "The median is each athlete's typical jump. Athlete B's is $0.1$ m longer, so Athlete B jumps slightly further on a typical attempt.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the location comparison in context.",
          "workingLatex": "6.7 - 6.6 = 0.1",
          "explanation": "A margin of $0.1$ m on a typical jump means Athlete B is, day to day, the marginally stronger jumper.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the interquartile ranges.",
          "workingLatex": "\\text{IQR}_A = 0.4 < \\text{IQR}_B = 0.5",
          "explanation": "Athlete A's middle half of jumps is packed into a narrower band, so Athlete A is the more consistent performer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the spread comparison in context.",
          "workingLatex": "0.5 - 0.4 = 0.1",
          "explanation": "Athlete B's central jumps vary by $0.1$ m more, so although Athlete B typically jumps further, the results are a little less predictable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Acknowledge Athlete A's exceptional jump.",
          "workingLatex": "7.6 = \\text{season best (outlier)}",
          "explanation": "The outlier shows Athlete A is capable of an outstanding one-off distance, but a single jump should not decide the overall comparison of their usual form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Weigh 'stronger' against 'more consistent'.",
          "workingLatex": "\\text{median}_B > \\text{median}_A,\\quad \\text{IQR}_A < \\text{IQR}_B",
          "explanation": "The two questions have different answers: typical distance favours Athlete B, consistency favours Athlete A. A strong response separates the two.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Make a judgement about who did 'better'.",
          "workingLatex": "\\text{B: higher typical jump};\\ \\text{A: steadier}",
          "explanation": "If reliability at competition matters most, Athlete B's higher typical jump edges it; if consistency is prized, Athlete A is preferable. Either conclusion is valid when supported by the figures.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the overall comparison.",
          "workingLatex": "\\text{use median and IQR throughout}",
          "explanation": "Because both athletes were compared with the same outlier-resistant statistics, the conclusion is fair: Athlete B is the slightly stronger typical jumper, Athlete A the more consistent one.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $7.6$ m jump is an outlier for Athlete A since $7.6 > Q_3 + 1.5\\times\\text{IQR} = 7.4$, making Athlete A's data positively skewed, so median and IQR (which resist the outlier) are the fair statistics. Athlete B has the higher median ($6.7$ m vs $6.6$ m), so is the slightly stronger typical jumper, while Athlete A has the smaller IQR ($0.4$ m vs $0.5$ m), so is more consistent. Athlete A also produced one exceptional jump of $7.6$ m."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "mean",
      "standard deviation",
      "summary statistics",
      "comparing distributions"
    ],
    "questionText": "A component is manufactured to a target length of $50\\,\\text{mm}$. Ten components are sampled from each of two production lines and their lengths measured in millimetres. For Line 1, $\\sum x = 500$ and $\\sum x^2 = 25018$. For Line 2, $\\sum x = 502$ and $\\sum x^2 = 25231$. Calculate the mean and (population) standard deviation of the lengths from each line to $3$ significant figures, then compare the two lines for accuracy to target and for consistency, and state which line is performing better.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan.",
          "workingLatex": "\\text{compare mean vs 50 (accuracy) and s.d. (consistency)}",
          "explanation": "Accuracy to target is about how close the average length is to $50\\,\\text{mm}$, while consistency is about how tightly the lengths cluster — the mean and standard deviation answer both.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the mean length for Line 1.",
          "workingLatex": "\\bar{x}_1 = \\frac{\\sum x}{n} = \\frac{500}{10} = 50.0",
          "explanation": "Dividing the total length by the ten components gives Line 1's average length.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean length for Line 2.",
          "workingLatex": "\\bar{x}_2 = \\frac{502}{10} = 50.2",
          "explanation": "The same calculation gives Line 2's average length for comparison with the target.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the means with the target.",
          "workingLatex": "\\bar{x}_1 = 50.0 = \\text{target},\\quad \\bar{x}_2 = 50.2 = \\text{target} + 0.2",
          "explanation": "Line 1 is centred exactly on the target, whereas Line 2 runs $0.2\\,\\text{mm}$ long on average, so Line 1 is the more accurate line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the variance for Line 1.",
          "workingLatex": "\\sigma_1^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2 = \\frac{25018}{10} - 50.0^2 = 2501.8 - 2500 = 1.8",
          "explanation": "The variance formula measures the average squared distance of the lengths from their mean, telling us how spread out Line 1's output is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the standard deviation for Line 1.",
          "workingLatex": "\\sigma_1 = \\sqrt{1.8} = 1.3416\\ldots \\approx 1.34",
          "explanation": "The square root returns to millimetres, giving a typical distance of each component from the $50\\,\\text{mm}$ centre.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the variance for Line 2.",
          "workingLatex": "\\sigma_2^2 = \\frac{25231}{10} - 50.2^2 = 2523.1 - 2520.04 = 3.06",
          "explanation": "Repeating the calculation for Line 2 measures how varied its component lengths are around its own mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the standard deviation for Line 2.",
          "workingLatex": "\\sigma_2 = \\sqrt{3.06} = 1.7493\\ldots \\approx 1.75",
          "explanation": "The square root gives Line 2's typical spread in millimetres, ready to compare with Line 1.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the standard deviations.",
          "workingLatex": "1.34 < 1.75",
          "explanation": "Line 1's standard deviation is smaller, so its components vary less in length — Line 1 is the more consistent line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quantify the difference in consistency.",
          "workingLatex": "1.75 - 1.34 = 0.41",
          "explanation": "Line 2's lengths are typically about $0.41\\,\\text{mm}$ more spread out, a meaningful difference when components must fit precisely.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine accuracy and consistency.",
          "workingLatex": "\\bar{x}_1 = 50.0,\\ \\sigma_1 = 1.34;\\quad \\bar{x}_2 = 50.2,\\ \\sigma_2 = 1.75",
          "explanation": "Line 1 wins on both counts: it is centred exactly on target and its lengths vary less, so it is the stronger performer overall.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Justify using mean and standard deviation.",
          "workingLatex": "\\text{measured lengths, no outlier reported}",
          "explanation": "With continuous measurements and no extreme reading flagged, the mean and standard deviation use every value and are appropriate here.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add a caution about outliers.",
          "workingLatex": "\\text{one faulty component} \\Rightarrow \\text{prefer median and IQR}",
          "explanation": "Had a single mis-cut component been present, it would inflate the mean and standard deviation, and median and IQR would then give a fairer comparison — worth noting for real production data.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Relate the conclusion back to the target.",
          "workingLatex": "\\text{Line 1: on target and tighter}",
          "explanation": "Because a manufacturer wants components both close to $50\\,\\text{mm}$ and uniform, Line 1 meets the specification better on both requirements.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the overall conclusion.",
          "workingLatex": "\\text{Line 1 performs better}",
          "explanation": "Line 1 is more accurate (mean exactly $50\\,\\text{mm}$) and more consistent (smaller standard deviation), so Line 1 is the better-performing production line.",
          "diagram": null
        }
      ],
      "finalAnswer": "Line 1: mean $50.0\\,\\text{mm}$, standard deviation $\\approx 1.34\\,\\text{mm}$. Line 2: mean $50.2\\,\\text{mm}$, standard deviation $\\approx 1.75\\,\\text{mm}$. Line 1 is centred exactly on the $50\\,\\text{mm}$ target (Line 2 is $0.2\\,\\text{mm}$ over) and has the smaller standard deviation (more consistent), so Line 1 is performing better on both accuracy and consistency."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "skewness",
      "box-plot",
      "quartiles",
      "data-presentation"
    ],
    "questionText": "The box plot below summarises the marks scored by a class in a test. By comparing the two halves of the box, describe the skewness of the distribution.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 60,
      "q1": 20,
      "median": 30,
      "q3": 45,
      "whiskerLow": 10,
      "whiskerHigh": 55,
      "outliers": [],
      "axisLabel": "test score (marks)",
      "showValues": true,
      "caption": "Box plot of class test marks",
      "alt": "Box plot from 10 to 55 with lower quartile 20, median 30 and upper quartile 45."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the quartile test for skewness",
          "workingLatex": "\\text{Compare } (Q_3 - Q_2) \\text{ with } (Q_2 - Q_1)",
          "explanation": "The median splits the middle of the data into two halves. If the upper half (from the median to $Q_3$) is wider than the lower half (from $Q_1$ to the median), the data stretch further to the right, which is positive skew. Comparing these two widths is a quick, reliable way to judge skew from a box plot.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the quartiles from the box plot",
          "workingLatex": "Q_1 = 20, \\quad Q_2 = 30, \\quad Q_3 = 45",
          "explanation": "The three vertical lines inside the box mark the lower quartile, the median and the upper quartile. Reading them straight off the axis gives the values we need before doing any comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the width of the lower half",
          "workingLatex": "Q_2 - Q_1 = 30 - 20 = 10",
          "explanation": "This distance measures how spread out the data between the lower quartile and the median are. A smaller value means the marks just below the median are packed closely together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the width of the upper half",
          "workingLatex": "Q_3 - Q_2 = 45 - 30 = 15",
          "explanation": "This is the matching distance for the marks just above the median. Comparing it with the lower half tells us which side of the median is more stretched out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the two widths",
          "workingLatex": "Q_3 - Q_2 = 15 > Q_2 - Q_1 = 10",
          "explanation": "The upper half is wider than the lower half, so the marks above the median are more spread out than those below it. The longer tail therefore points to the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "Q_3 - Q_2 > Q_2 - Q_1 \\Rightarrow \\text{positive skew}",
          "explanation": "Because the right-hand side of the box is stretched, the distribution is positively skewed. This matches the idea that a few higher marks pull the tail to the right.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distribution has positive skew, because $Q_3 - Q_2 = 15$ is greater than $Q_2 - Q_1 = 10$."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "skewness",
      "mean",
      "median",
      "data-presentation"
    ],
    "questionText": "A large set of house prices has a mean of $52\\,000$ and a median of $47\\,000$ (in pounds). Use these two averages to describe the skewness of the distribution, and briefly explain your reasoning.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean-median test for skewness",
          "workingLatex": "\\text{mean} > \\text{median} \\Rightarrow \\text{positive skew}",
          "explanation": "The median is the middle value and is not affected by how extreme the largest values are, but the mean is pulled towards any unusually large values. So the direction in which the mean sits relative to the median points to where the tail lies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the mean",
          "workingLatex": "\\text{mean} = 52\\,000",
          "explanation": "The mean is the balance point of all the data, so it is sensitive to a small number of very high prices.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the median",
          "workingLatex": "\\text{median} = 47\\,000",
          "explanation": "The median simply marks the halfway point of the ordered prices, giving a value unaffected by the size of the extremes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the two averages",
          "workingLatex": "52\\,000 > 47\\,000 \\Rightarrow \\text{mean} > \\text{median}",
          "explanation": "The mean sits above the median, which tells us the data are not symmetric: something is pulling the mean upward relative to the middle value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain what causes the gap",
          "workingLatex": "\\text{a few very expensive houses raise the mean}",
          "explanation": "When a handful of prices are much larger than the rest, they drag the mean towards them while leaving the median almost unchanged. This stretches the distribution to the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{mean} > \\text{median} \\Rightarrow \\text{positive skew}",
          "explanation": "Because the tail is stretched towards the higher prices, the distribution is positively skewed.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distribution is positively skewed, since the mean ($52\\,000$) is greater than the median ($47\\,000$); a few expensive houses pull the mean above the middle value."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "stem-and-leaf",
      "mode",
      "range",
      "data-presentation"
    ],
    "questionText": "The stem-and-leaf diagram below shows the ages, in years, of $14$ members of a swimming club. $\\begin{array}{r|l} 1 & 4\\ 7 \\\\ 2 & 1\\ 3\\ 3\\ 6\\ 8 \\\\ 3 & 0\\ 2\\ 2\\ 2\\ 5 \\\\ 4 & 1\\ 4 \\end{array}$ (Key: $3 \\mid 2$ means $32$ years.) Find (a) the modal age and (b) the range of the ages.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the key",
          "workingLatex": "3 \\mid 2 = 32 \\text{ years}",
          "explanation": "In a stem-and-leaf diagram the stem gives the tens digit and each leaf gives a units digit, so a stem of $3$ with a leaf of $2$ represents the value $32$. Reading the key first makes sure every value is interpreted correctly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the smallest value",
          "workingLatex": "\\text{smallest} = 1 \\mid 4 = 14",
          "explanation": "Because the rows are ordered from the smallest stem downward and the leaves in each row are in order, the very first leaf on the top row is the smallest value in the whole data set.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the largest value",
          "workingLatex": "\\text{largest} = 4 \\mid 4 = 44",
          "explanation": "By the same logic, the last leaf on the bottom row is the largest value, since it has the biggest stem and the biggest leaf in that row.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the range",
          "workingLatex": "\\text{range} = 44 - 14 = 30",
          "explanation": "The range measures the total spread of the data, found by subtracting the smallest value from the largest. It tells us how far apart the youngest and oldest members are.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mode",
          "workingLatex": "3 \\mid 2\\ 2\\ 2 \\Rightarrow 32 \\text{ appears three times}",
          "explanation": "The mode is the most frequently occurring value. In a stem-and-leaf diagram this shows up as a repeated leaf; here the leaf $2$ appears three times on the stem $3$, so $32$ occurs more often than any other age.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answers",
          "workingLatex": "\\text{mode} = 32, \\quad \\text{range} = 30",
          "explanation": "Combining the results, the modal age is $32$ years and the ages span a range of $30$ years.",
          "diagram": null
        }
      ],
      "finalAnswer": "The modal age is $32$ years and the range is $30$ years."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "stem-and-leaf",
      "median",
      "quartiles",
      "data-presentation"
    ],
    "questionText": "The stem-and-leaf diagram shows the number of minutes that $15$ trains were delayed. $\\begin{array}{r|l} 0 & 5\\ 8\\ 9 \\\\ 1 & 2\\ 4\\ 4\\ 7 \\\\ 2 & 1\\ 3\\ 6\\ 8\\ 8 \\\\ 3 & 0\\ 5\\ 9 \\end{array}$ (Key: $2 \\mid 1$ means $21$ minutes.) Find the median, the lower quartile and the upper quartile of the delays.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the key",
          "workingLatex": "2 \\mid 1 = 21 \\text{ minutes}",
          "explanation": "The stem is the tens digit and each leaf a units digit, so the data are already listed in increasing order down the diagram. Knowing this lets us count straight to any position we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the data values",
          "workingLatex": "n = 3 + 4 + 5 + 3 = 15",
          "explanation": "Adding up the number of leaves in each row gives the total number of observations. We need $n$ to locate the median and quartile positions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the median position",
          "workingLatex": "\\frac{n+1}{2} = \\frac{16}{2} = 8",
          "explanation": "For discrete data the median is the value in position $\\frac{n+1}{2}$. With $15$ values this is the $8$th value, the one with seven values on each side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the 8th value",
          "workingLatex": "5,\\ 8,\\ 9,\\ 12,\\ 14,\\ 14,\\ 17,\\ \\mathbf{21} \\Rightarrow Q_2 = 21",
          "explanation": "Counting the leaves in order, the $8$th value is the first leaf on the stem $2$, giving a median delay of $21$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the lower quartile position",
          "workingLatex": "\\frac{n+1}{4} = \\frac{16}{4} = 4",
          "explanation": "The lower quartile sits a quarter of the way through the ordered data, at position $\\frac{n+1}{4}$. Here that is the $4$th value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the 4th value",
          "workingLatex": "5,\\ 8,\\ 9,\\ \\mathbf{12} \\Rightarrow Q_1 = 12",
          "explanation": "The $4$th value in order is the first leaf on the stem $1$, so the lower quartile is $12$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper quartile position",
          "workingLatex": "\\frac{3(n+1)}{4} = \\frac{48}{4} = 12",
          "explanation": "The upper quartile lies three quarters of the way along, at position $\\frac{3(n+1)}{4}$, which is the $12$th value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the 12th value",
          "workingLatex": "\\ldots,\\ 21,\\ 23,\\ 26,\\ 28,\\ \\mathbf{28} \\Rightarrow Q_3 = 28",
          "explanation": "Counting on to position $12$ lands on the last leaf of the stem $2$, so the upper quartile is $28$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the results",
          "workingLatex": "Q_2 = 21, \\quad Q_1 = 12, \\quad Q_3 = 28",
          "explanation": "Collecting the three positions gives the median and both quartiles, which together summarise the centre and spread of the delays.",
          "diagram": null
        }
      ],
      "finalAnswer": "Median $= 21$ minutes, lower quartile $Q_1 = 12$ minutes and upper quartile $Q_3 = 28$ minutes."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "skewness",
      "box-plot",
      "quartiles",
      "data-presentation"
    ],
    "questionText": "The box plot summarises the exam scores of a group of students. Describe the skewness of the distribution, justifying your answer by comparing the two halves of the box and by referring to the whiskers.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 100,
      "q1": 55,
      "median": 68,
      "q3": 74,
      "whiskerLow": 40,
      "whiskerHigh": 85,
      "outliers": [],
      "axisLabel": "exam score (marks)",
      "showValues": true,
      "caption": "Box plot of student exam scores",
      "alt": "Box plot from 40 to 85 with lower quartile 55, median 68 and upper quartile 74."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the quartile test for skewness",
          "workingLatex": "\\text{Compare } (Q_3 - Q_2) \\text{ with } (Q_2 - Q_1)",
          "explanation": "Skew is about which side of the median is more stretched. Measuring the width of each half of the box and comparing them tells us directly where the longer tail lies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the quartiles from the box plot",
          "workingLatex": "Q_1 = 55, \\quad Q_2 = 68, \\quad Q_3 = 74",
          "explanation": "The three inner lines of the box give the lower quartile, median and upper quartile. We read these off before comparing so the comparison is exact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the width of the lower half",
          "workingLatex": "Q_2 - Q_1 = 68 - 55 = 13",
          "explanation": "This is how far the scores spread out between the lower quartile and the median. A larger value here means the lower half of the middle 50% is more stretched.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the width of the upper half",
          "workingLatex": "Q_3 - Q_2 = 74 - 68 = 6",
          "explanation": "This is the corresponding spread just above the median. Comparing it with the lower half shows which side dominates.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the two widths",
          "workingLatex": "Q_3 - Q_2 = 6 < Q_2 - Q_1 = 13",
          "explanation": "The lower half of the box is wider than the upper half, so the scores below the median are more spread out. This points the longer tail towards the lower scores.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the shape of the box",
          "workingLatex": "\\text{lower half wider} \\Rightarrow \\text{longer left tail}",
          "explanation": "A wider lower half means the median sits closer to the top of the box, a classic sign that the data trail off towards the smaller values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the whisker lengths as further evidence",
          "workingLatex": "Q_1 - 40 = 15, \\quad 85 - Q_3 = 11",
          "explanation": "The whiskers show the reach of the data beyond the quartiles. The left whisker ($15$) is longer than the right whisker ($11$), agreeing with the box comparison.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the evidence",
          "workingLatex": "\\text{left side more stretched on both box and whisker}",
          "explanation": "Both the wider lower half and the longer left whisker point the same way, so we can be confident about the direction of the skew.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "Q_3 - Q_2 < Q_2 - Q_1 \\Rightarrow \\text{negative skew}",
          "explanation": "With the longer tail towards the lower scores, the distribution is negatively skewed.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distribution has negative skew: $Q_3 - Q_2 = 6$ is smaller than $Q_2 - Q_1 = 13$, and the left whisker ($15$) is longer than the right whisker ($11$), so the tail stretches towards the lower scores."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "stem-and-leaf",
      "quartiles",
      "interquartile-range",
      "data-presentation"
    ],
    "questionText": "The stem-and-leaf diagram shows the masses, in grams, of $19$ apples. $\\begin{array}{r|l} 2 & 3\\ 6\\ 7\\ 9 \\\\ 3 & 1\\ 4\\ 4\\ 5\\ 8\\ 8 \\\\ 4 & 0\\ 2\\ 3\\ 6\\ 7 \\\\ 5 & 1\\ 2\\ 5\\ 8 \\end{array}$ (Key: $3 \\mid 1$ means $31$ grams.) Find the median, the interquartile range and the range of the masses.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the key",
          "workingLatex": "3 \\mid 1 = 31 \\text{ g}",
          "explanation": "The stem gives the tens and each leaf a units digit, so the diagram is an ordered list of the masses. This ordering lets us count directly to any position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the data values",
          "workingLatex": "n = 4 + 6 + 5 + 4 = 19",
          "explanation": "Adding the number of leaves in each row confirms there are $19$ apples, which we need to locate the median and quartiles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the median position",
          "workingLatex": "\\frac{n+1}{2} = \\frac{20}{2} = 10",
          "explanation": "With an odd number of values the median is the single middle value, at position $\\frac{n+1}{2}$, here the $10$th.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the 10th value",
          "workingLatex": "\\text{positions } 5\\text{--}10:\\ 31,34,34,35,38,\\mathbf{38} \\Rightarrow Q_2 = 38",
          "explanation": "The first row uses positions $1$ to $4$, so the $10$th value is the last leaf on the stem $3$, giving a median of $38$ g.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the lower quartile position",
          "workingLatex": "\\frac{n+1}{4} = \\frac{20}{4} = 5",
          "explanation": "The lower quartile is a quarter of the way through the ordered data, at position $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the 5th value",
          "workingLatex": "\\text{5th value} = 31 \\Rightarrow Q_1 = 31",
          "explanation": "The $5$th value is the first leaf on the stem $3$, so the lower quartile is $31$ g.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper quartile position",
          "workingLatex": "\\frac{3(n+1)}{4} = \\frac{60}{4} = 15",
          "explanation": "The upper quartile sits three quarters of the way along, at position $15$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the 15th value",
          "workingLatex": "\\text{positions } 11\\text{--}15:\\ 40,42,43,46,\\mathbf{47} \\Rightarrow Q_3 = 47",
          "explanation": "The $15$th value is the last leaf on the stem $4$, so the upper quartile is $47$ g.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate the interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 47 - 31 = 16",
          "explanation": "The interquartile range measures the spread of the middle 50% of the data, ignoring the extremes, so it is a robust measure of spread.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the range",
          "workingLatex": "\\text{range} = 58 - 23 = 35",
          "explanation": "The range subtracts the smallest mass (the first leaf, $23$) from the largest (the last leaf, $58$), giving the total spread.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "Q_2 = 38, \\quad \\text{IQR} = 16, \\quad \\text{range} = 35",
          "explanation": "These three values summarise the centre and both measures of spread for the apple masses.",
          "diagram": null
        }
      ],
      "finalAnswer": "Median $= 38$ g, interquartile range $= 16$ g and range $= 35$ g."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "skewness",
      "box-plot",
      "quartiles",
      "data-presentation"
    ],
    "questionText": "The box plot shows the waiting times, in minutes, of customers at a help desk. Describe the skewness of the distribution, and confirm your answer by evaluating the quartile measure of skewness $\\dfrac{Q_3 - 2Q_2 + Q_1}{Q_3 - Q_1}$.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 50,
      "q1": 12,
      "median": 15,
      "q3": 27,
      "whiskerLow": 5,
      "whiskerHigh": 40,
      "outliers": [],
      "axisLabel": "waiting time (minutes)",
      "showValues": true,
      "caption": "Box plot of customer waiting times",
      "alt": "Box plot from 5 to 40 with lower quartile 12, median 15 and upper quartile 27."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the quartile test for skewness",
          "workingLatex": "\\text{Compare } (Q_3 - Q_2) \\text{ with } (Q_2 - Q_1)",
          "explanation": "Comparing the widths of the two halves of the box is the fastest way to see which side of the median is more stretched, and hence the direction of the skew.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the quartiles from the box plot",
          "workingLatex": "Q_1 = 12, \\quad Q_2 = 15, \\quad Q_3 = 27",
          "explanation": "The inner lines of the box give the three quartiles. We record them before doing any arithmetic so both the comparison and the formula use exact values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the width of the lower half",
          "workingLatex": "Q_2 - Q_1 = 15 - 12 = 3",
          "explanation": "The waiting times just below the median are packed into a narrow band of only $3$ minutes, showing the lower half is tightly clustered.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the width of the upper half",
          "workingLatex": "Q_3 - Q_2 = 27 - 15 = 12",
          "explanation": "The waiting times just above the median spread over $12$ minutes, four times as wide as the lower half.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the two widths",
          "workingLatex": "12 > 3 \\Rightarrow Q_3 - Q_2 > Q_2 - Q_1",
          "explanation": "The upper half is much wider than the lower half, so the data are stretched towards the longer waiting times on the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the direction of the tail",
          "workingLatex": "\\text{upper half much wider} \\Rightarrow \\text{long right tail}",
          "explanation": "A median close to the lower quartile with a long stretch above it is the signature of a right-hand tail, i.e. positive skew.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the quartile measure of skewness",
          "workingLatex": "\\frac{Q_3 - 2Q_2 + Q_1}{Q_3 - Q_1} = \\frac{27 - 2(15) + 12}{27 - 12}",
          "explanation": "This standard measure compares the gap between the halves with the overall interquartile range, giving a number that is positive for right skew and negative for left skew.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the measure",
          "workingLatex": "= \\frac{27 - 30 + 12}{15} = \\frac{9}{15} = 0.6",
          "explanation": "Working out the top and bottom gives $0.6$. Its size (well away from zero) also indicates the skew is fairly strong.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "0.6 > 0 \\Rightarrow \\text{positive skew}",
          "explanation": "A positive value of the measure confirms the earlier comparison: the distribution of waiting times is positively skewed.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distribution is positively skewed: $Q_3 - Q_2 = 12$ exceeds $Q_2 - Q_1 = 3$, and the quartile measure of skewness is $\\frac{9}{15} = 0.6 > 0$."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "stem-and-leaf",
      "quartiles",
      "skewness",
      "data-presentation"
    ],
    "questionText": "The stem-and-leaf diagram shows the number of points scored by $23$ basketball players in a season. $\\begin{array}{r|l} 1 & 2\\ 5\\ 7\\ 8 \\\\ 2 & 0\\ 1\\ 4\\ 4\\ 6\\ 9 \\\\ 3 & 1\\ 3\\ 3\\ 5\\ 7\\ 8\\ 9 \\\\ 4 & 2\\ 4\\ 6\\ 8 \\\\ 5 & 1\\ 6 \\end{array}$ (Key: $3 \\mid 1$ means $31$ points.) Find the median and the two quartiles, and hence describe the skewness of the distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the key",
          "workingLatex": "3 \\mid 1 = 31 \\text{ points}",
          "explanation": "The stem is the tens digit and each leaf a units digit, so the diagram already lists all $23$ scores in order. That ordering is exactly what we need to pick out positions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the data values",
          "workingLatex": "n = 4 + 6 + 7 + 4 + 2 = 23",
          "explanation": "Summing the leaves in each row confirms $n = 23$, which sets the median and quartile positions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the median position",
          "workingLatex": "\\frac{n+1}{2} = \\frac{24}{2} = 12",
          "explanation": "With $23$ values the median is the middle one, at position $\\frac{n+1}{2} = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the 12th value",
          "workingLatex": "\\text{positions } 11\\text{--}12:\\ 31,\\mathbf{33} \\Rightarrow Q_2 = 33",
          "explanation": "The first two rows fill positions $1$ to $10$, so the $12$th value is the second leaf on the stem $3$, giving a median of $33$ points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the lower quartile position",
          "workingLatex": "\\frac{n+1}{4} = \\frac{24}{4} = 6",
          "explanation": "The lower quartile is a quarter of the way through, at position $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the 6th value",
          "workingLatex": "12,15,17,18,20,\\mathbf{21} \\Rightarrow Q_1 = 21",
          "explanation": "Counting to position $6$ lands on the second leaf of the stem $2$, so the lower quartile is $21$ points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper quartile position",
          "workingLatex": "\\frac{3(n+1)}{4} = \\frac{72}{4} = 18",
          "explanation": "The upper quartile is three quarters of the way along, at position $18$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the 18th value",
          "workingLatex": "\\text{positions } 1\\text{--}17 \\text{ end at } 39,\\ \\text{18th} = \\mathbf{42} \\Rightarrow Q_3 = 42",
          "explanation": "The first three rows fill positions $1$ to $17$, so the $18$th value is the first leaf on the stem $4$, giving an upper quartile of $42$ points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the width of the lower half",
          "workingLatex": "Q_2 - Q_1 = 33 - 21 = 12",
          "explanation": "This is the spread of the scores between the lower quartile and the median.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the width of the upper half",
          "workingLatex": "Q_3 - Q_2 = 42 - 33 = 9",
          "explanation": "This is the corresponding spread just above the median, which we compare with the lower half to judge the skew.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the two widths",
          "workingLatex": "Q_3 - Q_2 = 9 < Q_2 - Q_1 = 12",
          "explanation": "The lower half is wider than the upper half, so the scores below the median are more spread out than those above it.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the direction of the tail",
          "workingLatex": "\\text{lower half wider} \\Rightarrow \\text{longer left tail}",
          "explanation": "A wider lower half means the data trail off towards the smaller scores, which is the shape of a left-hand tail.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "Q_3 - Q_2 < Q_2 - Q_1 \\Rightarrow \\text{negative skew}",
          "explanation": "Because the longer tail points towards the lower scores, the distribution is negatively skewed.",
          "diagram": null
        }
      ],
      "finalAnswer": "Median $= 33$, $Q_1 = 21$, $Q_3 = 42$; since $Q_3 - Q_2 = 9$ is less than $Q_2 - Q_1 = 12$, the distribution has negative skew."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "stem-and-leaf",
      "mean",
      "median",
      "skewness"
    ],
    "questionText": "The stem-and-leaf diagram shows the time, in seconds, that $15$ users spent loading a web page. $\\begin{array}{r|l} 0 & 5\\ 6\\ 8 \\\\ 1 & 0\\ 2\\ 4\\ 6\\ 8 \\\\ 2 & 0\\ 2\\ 5\\ 8 \\\\ 3 & 3\\ 6 \\\\ 4 & 7 \\end{array}$ (Key: $2 \\mid 0$ means $20$ seconds.) (a) Calculate the mean and the median. (b) Use both the mean-median comparison and the quartile test to describe the skewness.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the key",
          "workingLatex": "2 \\mid 0 = 20 \\text{ seconds}",
          "explanation": "The stem gives the tens and each leaf a units digit, so the diagram is an ordered list of all $15$ loading times. We will use these actual values to work out the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the data values",
          "workingLatex": "n = 3 + 5 + 4 + 2 + 1 = 15",
          "explanation": "There are $15$ observations, which we need both to average and to locate the median.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write out the sum of all the values",
          "workingLatex": "\\sum x = 5+6+8+10+12+14+16+18+20+22+25+28+33+36+47",
          "explanation": "The mean requires the total of every value, so we list them in order straight from the diagram to be sure none is missed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the values",
          "workingLatex": "\\sum x = 300",
          "explanation": "Adding the fifteen times gives a total of $300$ seconds. Grouping them into small running sums helps avoid slips.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the mean",
          "workingLatex": "\\bar{x} = \\frac{\\sum x}{n} = \\frac{300}{15} = 20",
          "explanation": "Dividing the total by the number of values gives a mean loading time of $20$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the median position",
          "workingLatex": "\\frac{n+1}{2} = \\frac{16}{2} = 8",
          "explanation": "The median is the middle value, at position $\\frac{n+1}{2} = 8$, with seven values on each side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the 8th value",
          "workingLatex": "5,6,8,10,12,14,16,\\mathbf{18} \\Rightarrow Q_2 = 18",
          "explanation": "Counting to position $8$ gives a median of $18$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the mean and the median",
          "workingLatex": "\\bar{x} = 20 > Q_2 = 18",
          "explanation": "The mean sits above the median, which suggests something is pulling the average upward relative to the middle value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the mean-median test",
          "workingLatex": "\\text{mean} > \\text{median} \\Rightarrow \\text{positive skew}",
          "explanation": "A few long loading times (such as the $47$ seconds) drag the mean above the median, stretching the tail to the right.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the lower quartile",
          "workingLatex": "\\frac{n+1}{4} = 4 \\Rightarrow Q_1 = 10",
          "explanation": "The lower quartile is at position $4$, which reads off as $10$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the upper quartile",
          "workingLatex": "\\frac{3(n+1)}{4} = 12 \\Rightarrow Q_3 = 28",
          "explanation": "The upper quartile is at position $12$, which reads off as $28$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the two halves of the data",
          "workingLatex": "Q_2 - Q_1 = 8, \\quad Q_3 - Q_2 = 10",
          "explanation": "Measuring the spread on each side of the median lets us run the quartile test as a second, independent check on the skew.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply the quartile test",
          "workingLatex": "Q_3 - Q_2 = 10 > Q_2 - Q_1 = 8 \\Rightarrow \\text{positive skew}",
          "explanation": "The upper half is wider than the lower half, again pointing the longer tail to the right.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the overall conclusion",
          "workingLatex": "\\text{both tests agree} \\Rightarrow \\text{positive skew}",
          "explanation": "Since the mean-median comparison and the quartile test give the same result, we can state with confidence that the loading times are positively skewed.",
          "diagram": null
        }
      ],
      "finalAnswer": "Mean $= 20$ s and median $= 18$ s. Since the mean exceeds the median, and $Q_3 - Q_2 = 10 > Q_2 - Q_1 = 8$, both tests show the distribution is positively skewed."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "skewness",
      "box-plot",
      "outlier",
      "mean-median"
    ],
    "questionText": "The box plot shows the daily number of units sold by a small shop over one month; one day is marked as an outlier. The mean daily sales for the month is $68$ units. Describe the skewness of the distribution, supporting your answer with the quartile test, the quartile measure of skewness $\\dfrac{Q_3 - 2Q_2 + Q_1}{Q_3 - Q_1}$, the mean-median comparison and the position of the outlier.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 120,
      "q1": 55,
      "median": 62,
      "q3": 72,
      "whiskerLow": 30,
      "whiskerHigh": 95,
      "outliers": [
        115
      ],
      "axisLabel": "daily sales (units)",
      "showValues": true,
      "caption": "Box plot of daily sales with one outlier",
      "alt": "Box plot from 30 to 95 with lower quartile 55, median 62, upper quartile 72 and an outlier at 115."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the ways we can assess skewness",
          "workingLatex": "\\text{quartile test}, \\quad \\text{quartile measure}, \\quad \\text{mean vs median}, \\quad \\text{tail/outlier}",
          "explanation": "Several independent checks are available; using them together gives a stronger, more convincing description of the shape than any single one alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the five-number summary from the box plot",
          "workingLatex": "Q_1 = 55, \\quad Q_2 = 62, \\quad Q_3 = 72, \\quad \\text{whiskers } 30 \\text{ and } 95",
          "explanation": "Recording all the marked values first means every later calculation uses exact figures read straight from the axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the outlier",
          "workingLatex": "\\text{outlier at } 115 \\ (\\text{high side})",
          "explanation": "The isolated point beyond the right whisker is an unusually large day of sales, sitting well above the bulk of the data.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the width of the lower half",
          "workingLatex": "Q_2 - Q_1 = 62 - 55 = 7",
          "explanation": "This is the spread of the middle data just below the median.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the width of the upper half",
          "workingLatex": "Q_3 - Q_2 = 72 - 62 = 10",
          "explanation": "This is the matching spread just above the median, which we compare with the lower half.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the two widths",
          "workingLatex": "10 > 7 \\Rightarrow Q_3 - Q_2 > Q_2 - Q_1",
          "explanation": "The upper half is wider, so the data are more stretched above the median than below it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the quartile test conclusion",
          "workingLatex": "Q_3 - Q_2 > Q_2 - Q_1 \\Rightarrow \\text{positive skew}",
          "explanation": "A wider upper half points the longer tail to the right, indicating positive skew.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the quartile measure of skewness",
          "workingLatex": "\\frac{Q_3 - 2Q_2 + Q_1}{Q_3 - Q_1} = \\frac{72 - 2(62) + 55}{72 - 55}",
          "explanation": "This measure scales the difference between the two halves by the interquartile range, giving a signed number for the skew.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the measure",
          "workingLatex": "= \\frac{72 - 124 + 55}{17} = \\frac{3}{17} \\approx 0.18 > 0",
          "explanation": "The result is a small positive number, confirming a mild positive skew consistent with the quartile test.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the mean and the median",
          "workingLatex": "\\text{mean} = 68 > Q_2 = 62",
          "explanation": "The mean lies above the median, the classic sign that large values are pulling the average upward.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the mean-median conclusion",
          "workingLatex": "\\text{mean} > \\text{median} \\Rightarrow \\text{positive skew}",
          "explanation": "This third check agrees with the first two: the tail is stretched towards the larger sales figures.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the outlier",
          "workingLatex": "\\text{high outlier } 115 \\Rightarrow \\text{extends the right tail}",
          "explanation": "The outlier lies far above the rest on the high side, lengthening the right-hand tail and reinforcing positive skew.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the overall conclusion",
          "workingLatex": "\\text{all four indicators} \\Rightarrow \\text{positive skew}",
          "explanation": "With the quartile test, the quartile measure, the mean-median comparison and the outlier all pointing the same way, the distribution is clearly positively skewed.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distribution is positively skewed. $Q_3 - Q_2 = 10 > Q_2 - Q_1 = 7$; the quartile measure of skewness is $\\frac{3}{17} \\approx 0.18 > 0$; the mean ($68$) is greater than the median ($62$); and the outlier lies on the high side, so all four indicators point to positive skew."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "frequency density",
      "read chart"
    ],
    "questionText": "The histogram shows the time, $t$ minutes, that $72$ customers spent in a shop. Use the histogram to estimate the number of customers who spent less than $15$ minutes in the shop.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 0,
          "x1": 10,
          "freqDensity": 1.2
        },
        {
          "x0": 10,
          "x1": 15,
          "freqDensity": 3.0
        },
        {
          "x0": 15,
          "x1": 20,
          "freqDensity": 4.4
        },
        {
          "x0": 20,
          "x1": 30,
          "freqDensity": 1.5
        },
        {
          "x0": 30,
          "x1": 50,
          "freqDensity": 0.4
        }
      ],
      "xAxisLabel": "Time (minutes)",
      "caption": "Time spent in a shop by 72 customers",
      "alt": "A histogram with bars for time classes 0-10, 10-15, 15-20, 20-30 and 30-50 minutes, with frequency densities 1.2, 3.0, 4.4, 1.5 and 0.4."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to turn a histogram bar into a frequency.",
          "workingLatex": "\\text{frequency} = \\text{frequency density} \\times \\text{class width}",
          "explanation": "On a histogram it is the area of each bar, not its height, that represents the frequency. Height alone can be misleading because the classes have different widths.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify which classes lie below 15 minutes.",
          "workingLatex": "0 \\le t < 10 \\quad \\text{and} \\quad 10 \\le t < 15",
          "explanation": "\"Less than $15$ minutes\" is covered exactly by the first two bars, so we only need the frequencies of those two classes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the frequency of the first class.",
          "workingLatex": "1.2 \\times 10 = 12",
          "explanation": "The bar has frequency density $1.2$ over a width of $10$ minutes, so its area gives $12$ customers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the frequency of the second class.",
          "workingLatex": "3.0 \\times 5 = 15",
          "explanation": "This narrower bar is $5$ minutes wide with frequency density $3.0$, giving $15$ customers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the two frequencies.",
          "workingLatex": "12 + 15 = 27",
          "explanation": "Adding the two class frequencies gives the total number of customers with a time under $15$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the estimate.",
          "workingLatex": "\\text{customers with } t < 15 \\approx 27",
          "explanation": "Because histogram frequencies are read from areas, this is an estimate of the true count.",
          "diagram": null
        }
      ],
      "finalAnswer": "An estimated $27$ customers spent less than $15$ minutes in the shop."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "median",
      "interpolation"
    ],
    "questionText": "The cumulative frequency graph shows the heights, $h$ cm, of $80$ tomato plants. Use the graph to estimate the median height of the plants.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 5,
          "cf": 4
        },
        {
          "x": 10,
          "cf": 14
        },
        {
          "x": 15,
          "cf": 32
        },
        {
          "x": 20,
          "cf": 56
        },
        {
          "x": 25,
          "cf": 72
        },
        {
          "x": 30,
          "cf": 80
        }
      ],
      "origin": 0,
      "xAxisLabel": "Height (centimetres)",
      "readoffs": [
        {
          "cf": 40,
          "label": "Q_2"
        }
      ],
      "caption": "Cumulative frequency of the heights of 80 tomato plants",
      "alt": "A rising cumulative frequency curve through (5,4), (10,14), (15,32), (20,56), (25,72) and (30,80), with a read-off line at cumulative frequency 40."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall where the median sits on a cumulative frequency graph.",
          "workingLatex": "\\text{median at cumulative frequency } = \\tfrac{n}{2}",
          "explanation": "The median is the middle value, so half of the data lies below it. We locate the cumulative frequency equal to half the total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out the half-way cumulative frequency.",
          "workingLatex": "\\tfrac{n}{2} = \\tfrac{80}{2} = 40",
          "explanation": "With $80$ plants, the median is read off at a cumulative frequency of $40$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read across from cumulative frequency 40 to the curve.",
          "workingLatex": "cf = 40 \\ \\Rightarrow \\ \\text{point between } (15,32) \\text{ and } (20,56)",
          "explanation": "Drawing a horizontal line at $40$ meets the curve between the plotted points at heights $15$ and $20$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up linear interpolation between those two points.",
          "workingLatex": "h = 15 + \\dfrac{40 - 32}{56 - 32} \\times (20 - 15)",
          "explanation": "We assume the curve is a straight line between the two known points and find how far along that segment a cumulative frequency of $40$ lies.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the interpolation.",
          "workingLatex": "h = 15 + \\dfrac{8}{24} \\times 5 = 15 + 1.667",
          "explanation": "The fraction $\\frac{8}{24}$ is how far between the two heights we need to go, and multiplying by the $5$ cm gap converts it back to centimetres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the median to 3 significant figures.",
          "workingLatex": "h \\approx 16.7 \\text{ cm}",
          "explanation": "Because the value is read from a graph it is an estimate, so we round to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "The estimated median height is $\\approx 16.7$ cm (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "box plot",
      "interquartile range",
      "range"
    ],
    "questionText": "The box plot summarises the marks scored by a class in a test. Use the box plot to find (a) the interquartile range and (b) the range of the marks.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 70,
      "q1": 25,
      "median": 34,
      "q3": 46,
      "whiskerLow": 12,
      "whiskerHigh": 68,
      "outliers": [],
      "axisLabel": "Mark",
      "showValues": true,
      "caption": "Box plot of class test marks",
      "alt": "A box plot with lowest value 12, lower quartile 25, median 34, upper quartile 46 and highest value 68."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the quartiles from the edges of the box.",
          "workingLatex": "Q_1 = 25, \\qquad Q_3 = 46",
          "explanation": "The left and right sides of the box mark the lower and upper quartiles, so we read those two values straight off the scale.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the formula for the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1",
          "explanation": "The interquartile range measures the spread of the middle half of the data, so it is the width of the box.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = 46 - 25 = 21",
          "explanation": "Subtracting the quartiles gives the spread of the central $50\\%$ of the marks.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the extreme values from the whisker ends.",
          "workingLatex": "\\text{lowest} = 12, \\qquad \\text{highest} = 68",
          "explanation": "The ends of the whiskers show the smallest and largest values in the data set.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the range.",
          "workingLatex": "\\text{range} = 68 - 12 = 56",
          "explanation": "The range is the full spread from smallest to largest value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both answers.",
          "workingLatex": "\\text{IQR} = 21, \\qquad \\text{range} = 56",
          "explanation": "The IQR ignores the extremes, so it is smaller and less affected by unusually high or low marks than the range.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The interquartile range is $21$ marks. (b) The range is $56$ marks."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "cumulative frequency",
      "median",
      "interquartile range",
      "interpolation"
    ],
    "questionText": "The cumulative frequency graph shows the journey times, $t$ minutes, of $120$ commuters. Use the graph to estimate (a) the median and (b) the interquartile range of the journey times.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 10,
          "cf": 6
        },
        {
          "x": 20,
          "cf": 24
        },
        {
          "x": 30,
          "cf": 60
        },
        {
          "x": 40,
          "cf": 96
        },
        {
          "x": 50,
          "cf": 114
        },
        {
          "x": 60,
          "cf": 120
        }
      ],
      "origin": 0,
      "xAxisLabel": "Journey time (minutes)",
      "readoffs": [
        {
          "cf": 30,
          "label": "Q_1"
        },
        {
          "cf": 60,
          "label": "Q_2"
        },
        {
          "cf": 90,
          "label": "Q_3"
        }
      ],
      "caption": "Cumulative frequency of the journey times of 120 commuters",
      "alt": "A cumulative frequency curve through (10,6), (20,24), (30,60), (40,96), (50,114) and (60,120), with read-off lines at cumulative frequencies 30, 60 and 90."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the cumulative frequencies at which the quartiles are read.",
          "workingLatex": "Q_1 : \\tfrac{n}{4}, \\quad Q_2 : \\tfrac{n}{2}, \\quad Q_3 : \\tfrac{3n}{4}",
          "explanation": "The quartiles split the data into quarters, so on a cumulative frequency graph we read across at a quarter, a half and three-quarters of the total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute those cumulative frequencies for n = 120.",
          "workingLatex": "\\tfrac{n}{4}=30, \\quad \\tfrac{n}{2}=60, \\quad \\tfrac{3n}{4}=90",
          "explanation": "These are the three horizontal lines we will draw across to the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the median at cumulative frequency 60.",
          "workingLatex": "cf = 60 \\ \\Rightarrow \\ t = 30",
          "explanation": "A cumulative frequency of $60$ lands exactly on the plotted point $(30, 60)$, so the median can be read directly as $30$ minutes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the lower quartile.",
          "workingLatex": "cf = 30 \\ \\Rightarrow \\ \\text{between } (20,24) \\text{ and } (30,60)",
          "explanation": "A cumulative frequency of $30$ falls between two plotted points, so we interpolate between them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpolate for the lower quartile.",
          "workingLatex": "Q_1 = 20 + \\dfrac{30-24}{60-24}\\times 10 = 20 + 1.667",
          "explanation": "The fraction $\\frac{6}{36}$ measures how far along the segment we go, scaled by the $10$-minute gap between the points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the lower quartile.",
          "workingLatex": "Q_1 \\approx 21.7 \\text{ min}",
          "explanation": "Rounded to $3$ significant figures since it comes from a graph.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Locate the upper quartile.",
          "workingLatex": "cf = 90 \\ \\Rightarrow \\ \\text{between } (30,60) \\text{ and } (40,96)",
          "explanation": "A cumulative frequency of $90$ again lies between two plotted points, so we interpolate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpolate for the upper quartile.",
          "workingLatex": "Q_3 = 30 + \\dfrac{90-60}{96-60}\\times 10 = 30 + 8.333",
          "explanation": "The fraction $\\frac{30}{36}$ places the point most of the way across this segment.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the upper quartile.",
          "workingLatex": "Q_3 \\approx 38.3 \\text{ min}",
          "explanation": "Rounded to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 38.333 - 21.667 = 16.667",
          "explanation": "The IQR is the spread of the middle half of the journey times. Using the unrounded quartiles keeps the result accurate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the interquartile range.",
          "workingLatex": "\\text{IQR} \\approx 16.7 \\text{ min}",
          "explanation": "Rounded to $3$ significant figures to match the accuracy of a graphical read-off.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The median is $\\approx 30$ min. (b) The interquartile range is $\\approx 16.7$ min (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "median",
      "interpolation",
      "grouped data"
    ],
    "questionText": "The histogram shows the masses, $m$ kg, of $50$ dogs at a rescue centre. Use the histogram to estimate the median mass.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 40,
          "x1": 50,
          "freqDensity": 0.6
        },
        {
          "x0": 50,
          "x1": 55,
          "freqDensity": 2.0
        },
        {
          "x0": 55,
          "x1": 60,
          "freqDensity": 3.6
        },
        {
          "x0": 60,
          "x1": 70,
          "freqDensity": 1.4
        },
        {
          "x0": 70,
          "x1": 90,
          "freqDensity": 0.1
        }
      ],
      "xAxisLabel": "Mass (kilograms)",
      "caption": "Masses of 50 dogs at a rescue centre",
      "alt": "A histogram with mass classes 40-50, 50-55, 55-60, 60-70 and 70-90 kg with frequency densities 0.6, 2.0, 3.6, 1.4 and 0.1."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert each bar to a frequency.",
          "workingLatex": "\\text{frequency} = \\text{frequency density} \\times \\text{class width}",
          "explanation": "To find where the median lies we need the actual counts in each class, which come from the areas of the bars.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out the five frequencies.",
          "workingLatex": "0.6\\times10=6,\\ 2.0\\times5=10,\\ 3.6\\times5=18,\\ 1.4\\times10=14,\\ 0.1\\times20=2",
          "explanation": "Each product is the number of dogs in that mass class.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the frequencies total 50.",
          "workingLatex": "6+10+18+14+2 = 50",
          "explanation": "Confirming the total matches the stated $50$ dogs tells us the frequency densities have been read correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which value gives the median.",
          "workingLatex": "\\text{median position} = \\tfrac{n}{2} = \\tfrac{50}{2} = 25",
          "explanation": "For grouped data we locate the value at cumulative frequency $\\frac{n}{2}$ and interpolate within its class.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Build the cumulative frequencies.",
          "workingLatex": "6,\\ 16,\\ 34,\\ 48,\\ 50",
          "explanation": "Running totals show how many dogs have been counted by the end of each class.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the median class.",
          "workingLatex": "16 < 25 \\le 34 \\ \\Rightarrow \\ 55 \\le m < 60",
          "explanation": "The cumulative frequency reaches $25$ inside the class $55$ to $60$ kg, because the running total jumps from $16$ to $34$ there.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find how far into the median class we go.",
          "workingLatex": "25 - 16 = 9 \\ \\text{of the } 18 \\text{ in the class}",
          "explanation": "$16$ dogs have already been counted before this class, so we need $9$ more of the $18$ dogs in it to reach the middle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpolate within the class.",
          "workingLatex": "\\text{median} = 55 + \\dfrac{9}{18}\\times 5",
          "explanation": "Assuming the dogs are spread evenly across the class, we move $\\frac{9}{18}$ of the way across its $5$ kg width.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the estimate.",
          "workingLatex": "\\text{median} = 55 + 2.5 = 57.5 \\text{ kg}",
          "explanation": "This is the estimated median mass. It is exact here because $\\frac{9}{18}=0.5$ lands neatly.",
          "diagram": null
        }
      ],
      "finalAnswer": "The estimated median mass is $57.5$ kg."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "cumulative frequency",
      "quartiles",
      "outliers",
      "skewness"
    ],
    "questionText": "The cumulative frequency graph shows the times, $t$ seconds, taken by $200$ runners to complete a short race. The fastest runner took $14$ seconds and the slowest took $79$ seconds. (a) Use the graph to estimate the median and the interquartile range. (b) An outlier is any value more than $1.5 \\times \\text{IQR}$ beyond the nearer quartile. Test whether the slowest time of $79$ seconds is an outlier. (c) Describe the skewness of the distribution.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 20,
          "cf": 12
        },
        {
          "x": 30,
          "cf": 40
        },
        {
          "x": 40,
          "cf": 100
        },
        {
          "x": 50,
          "cf": 156
        },
        {
          "x": 60,
          "cf": 188
        },
        {
          "x": 70,
          "cf": 198
        },
        {
          "x": 80,
          "cf": 200
        }
      ],
      "origin": 10,
      "xAxisLabel": "Time (seconds)",
      "readoffs": [
        {
          "cf": 50,
          "label": "Q_1"
        },
        {
          "cf": 100,
          "label": "Q_2"
        },
        {
          "cf": 150,
          "label": "Q_3"
        }
      ],
      "caption": "Cumulative frequency of the race times of 200 runners",
      "alt": "A cumulative frequency curve through (20,12), (30,40), (40,100), (50,156), (60,188), (70,198) and (80,200), with read-off lines at cumulative frequencies 50, 100 and 150."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the cumulative frequencies for the quartiles.",
          "workingLatex": "\\tfrac{n}{4}=50, \\quad \\tfrac{n}{2}=100, \\quad \\tfrac{3n}{4}=150",
          "explanation": "With $n=200$ runners, these are the three levels we read across from to reach the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the median at cumulative frequency 100.",
          "workingLatex": "cf = 100 \\ \\Rightarrow \\ t = 40",
          "explanation": "A cumulative frequency of $100$ meets the curve exactly at the plotted point $(40,100)$, so the median is $40$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the lower quartile.",
          "workingLatex": "cf = 50 \\ \\Rightarrow \\ \\text{between } (30,40) \\text{ and } (40,100)",
          "explanation": "The level $50$ sits between these two plotted points, so we interpolate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpolate for the lower quartile.",
          "workingLatex": "Q_1 = 30 + \\dfrac{50-40}{100-40}\\times 10 = 30 + 1.667 \\approx 31.7",
          "explanation": "The fraction $\\frac{10}{60}$ shows the level $50$ is only a little way into this segment, giving $Q_1 \\approx 31.7$ s.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the upper quartile.",
          "workingLatex": "cf = 150 \\ \\Rightarrow \\ \\text{between } (40,100) \\text{ and } (50,156)",
          "explanation": "The level $150$ lies between these plotted points, so again we interpolate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpolate for the upper quartile.",
          "workingLatex": "Q_3 = 40 + \\dfrac{150-100}{156-100}\\times 10 = 40 + 8.929 \\approx 48.9",
          "explanation": "The fraction $\\frac{50}{56}$ places the point most of the way across the segment, giving $Q_3 \\approx 48.9$ s.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = 48.929 - 31.667 = 17.262 \\approx 17.3",
          "explanation": "Using the unrounded quartiles keeps the spread accurate before rounding to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the upper outlier boundary.",
          "workingLatex": "\\text{upper fence} = Q_3 + 1.5\\times\\text{IQR}",
          "explanation": "A value counts as a high outlier if it lies more than $1.5$ interquartile ranges above the upper quartile, so we build that fence first.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate the upper fence.",
          "workingLatex": "= 48.929 + 1.5\\times 17.262 = 48.929 + 25.893 = 74.82",
          "explanation": "Any time above about $74.8$ seconds would be flagged as unusually slow.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the slowest time with the fence.",
          "workingLatex": "79 > 74.82 \\ \\Rightarrow \\ \\text{outlier}",
          "explanation": "Because $79$ seconds exceeds the upper fence, the slowest runner's time is classified as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the fastest time against the lower fence.",
          "workingLatex": "\\text{lower fence} = 31.667 - 25.893 = 5.77, \\quad 14 > 5.77",
          "explanation": "The fastest time of $14$ seconds is above the lower fence, so it is not an outlier at the low end.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the quartile gaps to judge skew.",
          "workingLatex": "Q_2 - Q_1 = 40 - 31.667 = 8.33",
          "explanation": "Comparing the distance from the lower quartile to the median with the distance from the median to the upper quartile reveals the shape.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the upper quartile gap.",
          "workingLatex": "Q_3 - Q_2 = 48.929 - 40 = 8.93",
          "explanation": "This gap is slightly larger than the lower one, meaning the data stretch further above the median.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the skew.",
          "workingLatex": "Q_3 - Q_2 > Q_2 - Q_1 \\ \\Rightarrow \\ \\text{positive skew}",
          "explanation": "The longer upper gap, reinforced by the high outlier, shows a tail of slower times, so the distribution has positive (right) skew.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The median is $40$ s and the IQR is $\\approx 17.3$ s (3 s.f.). (b) The upper fence is $\\approx 74.8$ s; since $79 > 74.8$, the slowest time is an outlier. (c) The distribution has positive (right) skew."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "missing frequency",
      "mean",
      "median"
    ],
    "questionText": "A histogram represents the masses, $m$ grams, of $100$ apples. The bar for the class $120 \\le m < 130$ has been left off the diagram; the other four bars are shown. (a) Find the frequency, and hence the frequency density, of the missing class. (b) Estimate the mean mass of the apples. (c) Estimate the median mass of the apples.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 80,
          "x1": 100,
          "freqDensity": 0.5
        },
        {
          "x0": 100,
          "x1": 120,
          "freqDensity": 1.5
        },
        {
          "x0": 130,
          "x1": 150,
          "freqDensity": 1.0
        },
        {
          "x0": 150,
          "x1": 200,
          "freqDensity": 0.2
        }
      ],
      "xAxisLabel": "Mass (grams)",
      "caption": "Masses of 100 apples with the 120 to 130 g bar omitted",
      "alt": "A histogram showing four bars for mass classes 80-100, 100-120, 130-150 and 150-200 g with frequency densities 0.5, 1.5, 1.0 and 0.2; the 120-130 g bar is missing."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Turn each drawn bar into a frequency.",
          "workingLatex": "\\text{frequency} = \\text{frequency density} \\times \\text{class width}",
          "explanation": "The area of each bar equals the number of apples in that class, so we can total the known classes first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out the four known frequencies.",
          "workingLatex": "0.5\\times20=10,\\ 1.5\\times20=30,\\ 1.0\\times20=20,\\ 0.2\\times50=10",
          "explanation": "These are the counts for the classes $80$-$100$, $100$-$120$, $130$-$150$ and $150$-$200$ g.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the known frequencies.",
          "workingLatex": "10 + 30 + 20 + 10 = 70",
          "explanation": "Seventy apples are accounted for by the four bars that are drawn.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the missing frequency using the total.",
          "workingLatex": "\\text{missing frequency} = 100 - 70 = 30",
          "explanation": "Since there are $100$ apples in all, the missing class must contain the remaining $30$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Convert that to a frequency density.",
          "workingLatex": "\\text{frequency density} = \\dfrac{30}{130-120} = \\dfrac{30}{10} = 3.0",
          "explanation": "Dividing the frequency by the $10$ g class width gives the height of the missing bar. This completes the histogram (shown).",
          "diagram": {
            "kind": "histogram",
            "bars": [
              {
                "x0": 80,
                "x1": 100,
                "freqDensity": 0.5
              },
              {
                "x0": 100,
                "x1": 120,
                "freqDensity": 1.5
              },
              {
                "x0": 120,
                "x1": 130,
                "freqDensity": 3.0
              },
              {
                "x0": 130,
                "x1": 150,
                "freqDensity": 1.0
              },
              {
                "x0": 150,
                "x1": 200,
                "freqDensity": 0.2
              }
            ],
            "xAxisLabel": "Mass (grams)",
            "caption": "Completed histogram with the 120 to 130 g bar drawn at frequency density 3.0",
            "alt": "The completed histogram now including the tall narrow bar for 120-130 g at frequency density 3.0."
          }
        },
        {
          "stepNumber": 6,
          "description": "Set up the mean using class midpoints.",
          "workingLatex": "\\bar{m} = \\dfrac{\\sum f x}{\\sum f}",
          "explanation": "For grouped data we treat every apple in a class as sitting at the class midpoint, then take a frequency-weighted average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List the midpoints and frequencies.",
          "workingLatex": "x: 90, 110, 125, 140, 175 \\quad f: 10, 30, 30, 20, 10",
          "explanation": "Each midpoint is the middle of its class, and the frequencies now include the missing class of $30$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the sum of frequency times midpoint.",
          "workingLatex": "\\sum f x = 900 + 3300 + 3750 + 2800 + 1750 = 12500",
          "explanation": "Each term $fx$ estimates the total mass contributed by a class; summing gives the estimated total mass of all apples.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide by the total frequency.",
          "workingLatex": "\\bar{m} = \\dfrac{12500}{100} = 125 \\text{ g}",
          "explanation": "Dividing the estimated total mass by $100$ apples gives the estimated mean mass.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Build cumulative frequencies for the median.",
          "workingLatex": "10,\\ 40,\\ 70,\\ 90,\\ 100",
          "explanation": "Running totals let us find which class contains the middle value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the median class.",
          "workingLatex": "\\tfrac{n}{2}=50, \\quad 40 < 50 \\le 70 \\ \\Rightarrow \\ 120 \\le m < 130",
          "explanation": "The $50$th value lies in the $120$-$130$ g class, where the cumulative frequency passes $50$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpolate within the median class.",
          "workingLatex": "\\text{median} = 120 + \\dfrac{50-40}{30}\\times 10",
          "explanation": "Forty apples come before this class, so we need $10$ more of the $30$ in it, moving $\\frac{10}{30}$ across the $10$ g width.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the median.",
          "workingLatex": "\\text{median} = 120 + 3.333 \\approx 123 \\text{ g}",
          "explanation": "Rounded to $3$ significant figures, since it is an estimate from grouped data.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The missing class has frequency $30$ and frequency density $3.0$ per gram. (b) The estimated mean mass is $125$ g. (c) The estimated median mass is $\\approx 123$ g (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "cumulative frequency",
      "quartiles",
      "outliers",
      "box plot"
    ],
    "questionText": "The cumulative frequency graph shows the lengths, $x$ cm, of $60$ leaves. The shortest leaf measured $2$ cm and the longest measured $29$ cm. (a) Use the graph to estimate the lower quartile, the median and the upper quartile. (b) Test for any outliers using the $1.5 \\times \\text{IQR}$ rule. (c) Draw a box plot to represent the leaf lengths.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 5,
          "cf": 3
        },
        {
          "x": 10,
          "cf": 15
        },
        {
          "x": 15,
          "cf": 33
        },
        {
          "x": 20,
          "cf": 48
        },
        {
          "x": 25,
          "cf": 57
        },
        {
          "x": 30,
          "cf": 60
        }
      ],
      "origin": 0,
      "xAxisLabel": "Length (centimetres)",
      "readoffs": [
        {
          "cf": 15,
          "label": "Q_1"
        },
        {
          "cf": 30,
          "label": "Q_2"
        },
        {
          "cf": 45,
          "label": "Q_3"
        }
      ],
      "caption": "Cumulative frequency of the lengths of 60 leaves",
      "alt": "A cumulative frequency curve through (5,3), (10,15), (15,33), (20,48), (25,57) and (30,60), with read-off lines at cumulative frequencies 15, 30 and 45."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the cumulative frequencies for the quartiles.",
          "workingLatex": "\\tfrac{n}{4}=15, \\quad \\tfrac{n}{2}=30, \\quad \\tfrac{3n}{4}=45",
          "explanation": "With $60$ leaves, these levels split the data into quarters ready to read off the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the lower quartile.",
          "workingLatex": "cf = 15 \\ \\Rightarrow \\ Q_1 = 10",
          "explanation": "A cumulative frequency of $15$ meets the curve exactly at the plotted point $(10,15)$, so $Q_1 = 10$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the median.",
          "workingLatex": "cf = 30 \\ \\Rightarrow \\ \\text{between } (10,15) \\text{ and } (15,33)",
          "explanation": "The level $30$ sits between two plotted points, so we interpolate for the median.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpolate for the median.",
          "workingLatex": "Q_2 = 10 + \\dfrac{30-15}{33-15}\\times 5 = 10 + 4.167 \\approx 14.2",
          "explanation": "The fraction $\\frac{15}{18}$ carries us most of the way across the segment, giving a median of about $14.2$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the upper quartile.",
          "workingLatex": "cf = 45 \\ \\Rightarrow \\ \\text{between } (15,33) \\text{ and } (20,48)",
          "explanation": "The level $45$ lies between these two plotted points, so we interpolate again.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpolate for the upper quartile.",
          "workingLatex": "Q_3 = 15 + \\dfrac{45-33}{48-33}\\times 5 = 15 + 4 = 19",
          "explanation": "The fraction $\\frac{12}{15}$ gives a clean result, so $Q_3 = 19$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 19 - 10 = 9",
          "explanation": "This spread of the middle half of the leaves is needed for the outlier rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the outlier fences.",
          "workingLatex": "\\text{fences} = Q_1 - 1.5\\times\\text{IQR}, \\quad Q_3 + 1.5\\times\\text{IQR}",
          "explanation": "Any value beyond these limits is flagged as an outlier; $1.5\\times\\text{IQR} = 13.5$ cm here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate the fences.",
          "workingLatex": "\\text{lower} = 10 - 13.5 = -3.5, \\quad \\text{upper} = 19 + 13.5 = 32.5",
          "explanation": "Leaves shorter than $-3.5$ cm or longer than $32.5$ cm would be outliers; the lower fence being negative simply means no short leaf can be an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the extreme values with the fences.",
          "workingLatex": "2 > -3.5 \\quad \\text{and} \\quad 29 < 32.5",
          "explanation": "The shortest ($2$ cm) and longest ($29$ cm) leaves both lie inside the fences, so there are no outliers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Fix the whisker ends.",
          "workingLatex": "\\text{whiskers reach } 2 \\text{ and } 29",
          "explanation": "With no outliers, the whiskers extend all the way to the smallest and largest leaf lengths.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the five-number summary.",
          "workingLatex": "2,\\ 10,\\ 14.2,\\ 19,\\ 29",
          "explanation": "These five values, minimum, $Q_1$, median, $Q_3$ and maximum, are everything needed to draw the box plot.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Draw the box plot on a common scale.",
          "workingLatex": "\\text{box } 10 \\to 19, \\ \\text{median } 14.2, \\ \\text{whiskers } 2 \\text{ and } 29",
          "explanation": "The box spans the quartiles with a line at the median, and whiskers reach the extremes, as shown.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 30,
            "q1": 10,
            "median": 14.2,
            "q3": 19,
            "whiskerLow": 2,
            "whiskerHigh": 29,
            "outliers": [],
            "axisLabel": "Length (centimetres)",
            "showValues": true,
            "caption": "Box plot of the 60 leaf lengths",
            "alt": "A box plot with minimum 2, lower quartile 10, median 14.2, upper quartile 19 and maximum 29 cm, with no outliers."
          }
        }
      ],
      "finalAnswer": "(a) $Q_1 = 10$ cm, median $\\approx 14.2$ cm, $Q_3 = 19$ cm. (b) The fences are $-3.5$ cm and $32.5$ cm; since $2$ and $29$ lie inside them, there are no outliers. (c) The box plot has its box from $10$ to $19$ with the median at $14.2$, and whiskers reaching $2$ and $29$ cm."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "histogram",
      "proportion",
      "estimation",
      "area"
    ],
    "questionText": "The histogram shows the speeds, $v$ mph, of $100$ vehicles passing a checkpoint. (a) Estimate the number of vehicles travelling between $45$ and $55$ mph. (b) On a typical day $4500$ vehicles pass the checkpoint. Estimate how many of them travel faster than $55$ mph.",
    "questionDiagram": {
      "kind": "histogram",
      "bars": [
        {
          "x0": 20,
          "x1": 30,
          "freqDensity": 0.8
        },
        {
          "x0": 30,
          "x1": 40,
          "freqDensity": 2.4
        },
        {
          "x0": 40,
          "x1": 50,
          "freqDensity": 4.0
        },
        {
          "x0": 50,
          "x1": 60,
          "freqDensity": 1.6
        },
        {
          "x0": 60,
          "x1": 80,
          "freqDensity": 0.6
        }
      ],
      "xAxisLabel": "Speed (miles per hour)",
      "caption": "Speeds of 100 vehicles passing a checkpoint",
      "alt": "A histogram with speed classes 20-30, 30-40, 40-50, 50-60 and 60-80 mph at frequency densities 0.8, 2.4, 4.0, 1.6 and 0.6."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall that area gives frequency.",
          "workingLatex": "\\text{frequency} = \\text{frequency density} \\times \\text{class width}",
          "explanation": "The number of vehicles in any speed interval equals the area of the histogram above that interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute each class frequency.",
          "workingLatex": "0.8\\times10=8,\\ 2.4\\times10=24,\\ 4.0\\times10=40,\\ 1.6\\times10=16,\\ 0.6\\times20=12",
          "explanation": "These are the counts in each full class, which we will slice up for the required intervals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the total.",
          "workingLatex": "8+24+40+16+12 = 100",
          "explanation": "Matching the stated $100$ vehicles confirms the frequency densities are read correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the interval 45 to 55 mph across two classes.",
          "workingLatex": "45\\text{-}55 = (45\\text{-}50) + (50\\text{-}55)",
          "explanation": "The interval covers the top half of the $40$-$50$ class and the bottom half of the $50$-$60$ class, so we handle each part separately.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the even-spread assumption.",
          "workingLatex": "\\text{assume vehicles spread evenly within each class}",
          "explanation": "Without more detail we assume speeds are uniformly distributed inside a class, so a portion of a bar's area is proportional to its width.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the 45 to 50 part.",
          "workingLatex": "4.0 \\times 5 = 20",
          "explanation": "Half of the $40$-$50$ class, five units wide at frequency density $4.0$, gives $20$ vehicles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the 50 to 55 part.",
          "workingLatex": "1.6 \\times 5 = 8",
          "explanation": "Half of the $50$-$60$ class, five units wide at frequency density $1.6$, gives $8$ vehicles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two parts.",
          "workingLatex": "20 + 8 = 28",
          "explanation": "Combining the slices estimates the number of vehicles between $45$ and $55$ mph.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find how many exceed 55 mph in the sample.",
          "workingLatex": "(55\\text{-}60) + (60\\text{-}80)",
          "explanation": "Speeds above $55$ mph come from the top half of the $50$-$60$ class plus the whole $60$-$80$ class.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the 55 to 60 slice.",
          "workingLatex": "1.6 \\times 5 = 8",
          "explanation": "This is the upper half of the $50$-$60$ class.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the 60 to 80 class.",
          "workingLatex": "8 + 12 = 20",
          "explanation": "Adding the full $60$-$80$ class of $12$ gives $20$ vehicles over $55$ mph out of the $100$ sampled.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write this as a proportion.",
          "workingLatex": "\\dfrac{20}{100} = 0.2",
          "explanation": "A fifth of the sampled vehicles exceed $55$ mph, which we assume holds for the whole day.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Scale up to the daily total.",
          "workingLatex": "0.2 \\times 4500 = 900",
          "explanation": "Applying the same proportion to all $4500$ vehicles gives the estimated daily number over $55$ mph.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) About $28$ vehicles travel between $45$ and $55$ mph. (b) About $900$ of the $4500$ vehicles travel faster than $55$ mph."
    }
  },
  {
    "id": "al.y1.stats.data-presentation.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Data presentation",
    "subtopicId": "al.y1.stats.data-presentation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "comparison",
      "summary statistics",
      "spread",
      "skewness"
    ],
    "questionText": "The reaction times, in milliseconds (ms), of two groups of $50$ people were recorded. One group drank a caffeinated drink beforehand and the other (the control) did not. The summary statistics are: Control: minimum $210$, $Q_1 = 250$, median $= 280$, $Q_3 = 320$, maximum $410$, mean $= 288$, standard deviation $= 45$. Caffeine: minimum $190$, $Q_1 = 225$, median $= 245$, $Q_3 = 275$, maximum $360$, mean $= 252$, standard deviation $= 38$. Compare the reaction times of the two groups, commenting on average, spread and skewness, and interpret your findings in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide what to compare.",
          "workingLatex": "\\text{compare: average, spread, skewness}",
          "explanation": "A good comparison of two data sets looks at a measure of location, a measure of spread and the shape, always backed by numbers and interpreted in context.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the medians.",
          "workingLatex": "280 \\ \\text{vs} \\ 245 \\ \\Rightarrow \\ 280 - 245 = 35",
          "explanation": "The caffeine group's median is $35$ ms lower, meaning a typical caffeine reaction time is faster.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the means.",
          "workingLatex": "288 \\ \\text{vs} \\ 252 \\ \\Rightarrow \\ 288 - 252 = 36",
          "explanation": "The means agree with the medians: the caffeine group averages about $36$ ms faster, so the location result is consistent across both measures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the average difference.",
          "workingLatex": "\\text{caffeine group faster on average}",
          "explanation": "Lower reaction times mean quicker responses, so on average the caffeine group responded more quickly than the control.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare spread using the IQR.",
          "workingLatex": "\\text{IQR}_{\\text{ctrl}} = 320-250 = 70, \\quad \\text{IQR}_{\\text{caf}} = 275-225 = 50",
          "explanation": "The interquartile range describes the spread of the middle half; the caffeine group's is smaller.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the IQR comparison.",
          "workingLatex": "50 < 70 \\ \\Rightarrow \\ \\text{caffeine more consistent}",
          "explanation": "A smaller IQR means the central reaction times are packed more tightly, so the caffeine group is more consistent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm spread using the standard deviations.",
          "workingLatex": "38 < 45",
          "explanation": "The standard deviation, which uses every value, also shows less variation in the caffeine group, backing up the IQR result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the ranges.",
          "workingLatex": "\\text{range}_{\\text{ctrl}} = 410-210 = 200, \\quad \\text{range}_{\\text{caf}} = 360-190 = 170",
          "explanation": "Even the full spread is smaller for the caffeine group, giving a consistent picture of less variability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the control group for skew.",
          "workingLatex": "Q_2-Q_1 = 30, \\quad Q_3-Q_2 = 40",
          "explanation": "The gap above the median is larger than the gap below it, which points to a longer upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the control skew.",
          "workingLatex": "Q_3-Q_2 > Q_2-Q_1 \\ \\Rightarrow \\ \\text{positive skew}",
          "explanation": "The control group is positively (right) skewed, so a few slow reactions stretch the top end.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the caffeine group for skew.",
          "workingLatex": "Q_2-Q_1 = 20, \\quad Q_3-Q_2 = 30",
          "explanation": "Again the upper gap is larger, indicating a longer tail of slower times.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the caffeine skew.",
          "workingLatex": "Q_3-Q_2 > Q_2-Q_1 \\ \\Rightarrow \\ \\text{positive skew}",
          "explanation": "The caffeine group is also positively skewed, so both distributions share the same broad shape.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Draw the comparison together in context.",
          "workingLatex": "\\text{caffeine: lower centre, smaller spread, same skew}",
          "explanation": "Overall the caffeine group is faster and more consistent, while both groups have a tail of slower reactions.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Add a note of caution.",
          "workingLatex": "\\text{association} \\ne \\text{causation}",
          "explanation": "The data only show an association; without a controlled experiment we cannot say the caffeine itself caused the faster times.",
          "diagram": null
        }
      ],
      "finalAnswer": "The caffeine group reacted faster on average (median $245$ vs $280$ ms; mean $252$ vs $288$ ms) and was more consistent (IQR $50$ vs $70$ ms; standard deviation $38$ vs $45$ ms; range $170$ vs $200$ ms). Both distributions are positively (right) skewed, so each has a tail of slower reaction times. In context, the caffeine group's reaction times are lower and less variable, though the data show only an association, not proof that caffeine caused the difference."
    }
  }
];
