import type { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 1 Statistics · Large data set fluency
 * The Edexcel weather large data set: its structure, variables, units and
 * conventions (tr, n/a), and applying Year-1 statistics techniques — location
 * and spread, box plots, cumulative frequency, correlation and regression,
 * cleaning and sampling — to weather-data extracts. 70 questions.
 */
export const questions: Question[] = [
  {
    "id": "al.y1.stats.large-data-set.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "stations",
      "structure",
      "identify"
    ],
    "questionText": "The large data set records daily weather at eight locations: five in the United Kingdom and three overseas. From the list below, state which are the UK stations and which are the overseas stations. $\\text{Camborne, Beijing, Leeming, Jacksonville, Heathrow, Perth, Hurn, Leuchars}$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how many UK stations the data set uses.",
          "workingLatex": "\\text{UK stations} = 5",
          "explanation": "The Edexcel large data set is built around five weather stations situated within the United Kingdom.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the five UK stations.",
          "workingLatex": "\\text{Camborne, Heathrow, Hurn, Leeming, Leuchars}",
          "explanation": "These lie across Britain, from Camborne in the far south-west to Leuchars in eastern Scotland, giving a spread of UK climates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall how many overseas stations there are.",
          "workingLatex": "\\text{overseas stations} = 3",
          "explanation": "Three further stations are placed abroad so that very different climates can be compared with the UK.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Name the three overseas stations.",
          "workingLatex": "\\text{Beijing, Jacksonville, Perth}",
          "explanation": "Beijing (China), Jacksonville (USA) and Perth (Australia) each experience conditions quite unlike the UK.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the totals add up.",
          "workingLatex": "5 + 3 = 8",
          "explanation": "Five UK plus three overseas gives the eight locations listed, so every station has been placed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the two groups clearly.",
          "workingLatex": "\\text{UK: Camborne, Heathrow, Hurn, Leeming, Leuchars}",
          "explanation": "Grouping the names makes the structure of the data set explicit.",
          "diagram": null
        }
      ],
      "finalAnswer": "UK stations: Camborne, Heathrow, Hurn, Leeming and Leuchars. Overseas stations: Beijing, Jacksonville and Perth."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "variables",
      "units",
      "state"
    ],
    "questionText": "For each of the following large data set variables, state the units in which it is normally recorded: (a) daily mean temperature, (b) daily total rainfall, (c) daily mean pressure, (d) daily maximum gust.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Give the units of daily mean temperature.",
          "workingLatex": "\\text{temperature} \\rightarrow \\degree\\text{C}",
          "explanation": "Temperature in the data set is measured in degrees Celsius, the standard everyday scale used by the Met Office.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Give the units of daily total rainfall.",
          "workingLatex": "\\text{rainfall} \\rightarrow \\text{mm}",
          "explanation": "Rainfall is recorded as the depth of water collected, measured in millimetres.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Give the units of daily mean pressure.",
          "workingLatex": "\\text{pressure} \\rightarrow \\text{hPa}",
          "explanation": "Atmospheric pressure is given in hectopascals (hPa); a typical value near sea level is around $1013\\ \\text{hPa}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Give the units of daily maximum gust.",
          "workingLatex": "\\text{gust} \\rightarrow \\text{knots}",
          "explanation": "A gust is a short burst of wind, so like windspeed it is a speed and is recorded in knots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note why the units matter.",
          "workingLatex": "\\text{unit must match the variable}",
          "explanation": "Stating the correct unit is essential: a number such as $1013$ only makes sense once you know it is a pressure in hPa, not a temperature or a rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the four answers together.",
          "workingLatex": "\\degree\\text{C},\\ \\text{mm},\\ \\text{hPa},\\ \\text{knots}",
          "explanation": "Listing them side by side gives a clean summary of each variable's unit.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) degrees Celsius ($\\degree$C); (b) millimetres (mm); (c) hectopascals (hPa); (d) knots."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "data-types",
      "qualitative",
      "classify"
    ],
    "questionText": "Two variables in the large data set are daily mean cloud cover, measured in oktas ($0$ to $8$), and daily maximum relative wind direction, recorded as a compass point such as $\\text{N}$ or $\\text{SW}$. Classify each variable as qualitative or quantitative, and where appropriate as discrete or continuous.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of the two main types.",
          "workingLatex": "\\text{quantitative} = \\text{numeric}, \\quad \\text{qualitative} = \\text{categories}",
          "explanation": "Quantitative data are numbers you can measure or count; qualitative data are labels or categories that describe a quality.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide the type of cloud cover.",
          "workingLatex": "\\text{oktas} = 0,1,2,\\ldots,8 \\Rightarrow \\text{quantitative}",
          "explanation": "Cloud cover is reported as a number of oktas (eighths of the sky), so it is a genuine numerical measurement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide discrete or continuous for cloud cover.",
          "workingLatex": "\\text{whole oktas only} \\Rightarrow \\text{discrete}",
          "explanation": "Only the whole numbers $0$ to $8$ are possible; you cannot record $3.7$ oktas, so the values are separated and the data are discrete.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide the type of wind direction.",
          "workingLatex": "\\text{N, SW, ESE, \\ldots} \\Rightarrow \\text{qualitative}",
          "explanation": "Compass points are labels describing a direction, not measured amounts, so wind direction is qualitative (categorical).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note that discrete/continuous does not apply here.",
          "workingLatex": "\\text{qualitative} \\Rightarrow \\text{no discrete/continuous}",
          "explanation": "The discrete or continuous distinction is only used for numerical data, so it does not apply to a categorical variable like direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both classifications.",
          "workingLatex": "\\text{cloud: quantitative, discrete}; \\ \\text{direction: qualitative}",
          "explanation": "This gives a complete classification of each variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "Daily mean cloud cover is quantitative and discrete (whole oktas only). Daily maximum relative wind direction is qualitative (a category), so discrete/continuous does not apply."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "trace",
      "rainfall",
      "convention"
    ],
    "questionText": "The table shows the daily total rainfall (mm) recorded at Camborne over six days in the large data set. $\\begin{array}{c|cccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{Rainfall (mm)} & 0 & \\text{tr} & 3.2 & 0 & \\text{tr} & 5.1 \\end{array}$ Explain what the entry $\\text{tr}$ means, and state the value used for $\\text{tr}$ when carrying out calculations.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what tr stands for.",
          "workingLatex": "\\text{tr} = \\text{trace}",
          "explanation": "In the large data set the abbreviation $\\text{tr}$ stands for a trace amount of rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Give the size of a trace amount.",
          "workingLatex": "\\text{trace} < 0.05\\ \\text{mm}",
          "explanation": "A trace means some rain fell, but less than $0.05\\ \\text{mm}$ — far too little to record as a proper measurement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain why it is not left blank.",
          "workingLatex": "\\text{rain occurred, but negligible}",
          "explanation": "It is different from a dry day of exactly $0$ and from missing data: rain did fall, but the amount is negligible.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the value used in calculations.",
          "workingLatex": "\\text{tr} \\rightarrow 0",
          "explanation": "Because the amount is smaller than the smallest measurable unit, $\\text{tr}$ is treated as $0$ when computing totals, means and other statistics.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply this to the two tr entries.",
          "workingLatex": "\\text{Day }2 = 0, \\quad \\text{Day }5 = 0",
          "explanation": "Both trace days therefore contribute $0\\ \\text{mm}$ to any rainfall total for the week.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "\\text{tr means trace} < 0.05\\ \\text{mm, used as } 0",
          "explanation": "This convention keeps rainfall calculations consistent while still marking that some rain occurred.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{tr}$ means a trace of rainfall — less than $0.05\\ \\text{mm}$ fell, too little to measure. In calculations it is treated as $0\\ \\text{mm}$."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "missing-data",
      "n/a",
      "convention"
    ],
    "questionText": "The table shows the daily total sunshine (hours) recorded at Leeming over seven days in the large data set. $\\begin{array}{c|ccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ \\hline \\text{Sunshine (hours)} & 5.2 & 6.1 & \\text{n/a} & 4.8 & 7.0 & 6.6 & 5.9 \\end{array}$ Explain what the entry $\\text{n/a}$ means, and state how many usable readings are available for calculation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what n/a stands for.",
          "workingLatex": "\\text{n/a} = \\text{not available}",
          "explanation": "The entry $\\text{n/a}$ means the value is not available — no reading was recorded for that day.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Give a reason data may be missing.",
          "workingLatex": "\\text{e.g. instrument fault}",
          "explanation": "Data can be missing for reasons such as an instrument fault or the sensor not operating, so no figure exists to use.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Contrast n/a with a zero.",
          "workingLatex": "\\text{n/a} \\neq 0",
          "explanation": "This is not the same as recording $0$ hours of sunshine; a zero is a real measurement, whereas $\\text{n/a}$ is simply unknown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State how n/a is handled.",
          "workingLatex": "\\text{exclude n/a from calculations}",
          "explanation": "Because there is no value, an $\\text{n/a}$ entry is left out of any calculation, which reduces the number of data values $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the usable readings.",
          "workingLatex": "7 - 1 = 6",
          "explanation": "Seven days are listed but one is $\\text{n/a}$, leaving six actual sunshine figures to work with.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "n = 6 \\text{ usable readings}",
          "explanation": "Any mean or spread must be based on these six values, not on seven.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{n/a}$ means the value was not available (missing). It is excluded from calculations, so only $6$ of the $7$ days give usable readings."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "rainfall",
      "daily-total",
      "trace"
    ],
    "questionText": "The table shows the daily total rainfall (mm) at Hurn for one week in the large data set. $\\begin{array}{c|ccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ \\hline \\text{Rainfall (mm)} & 0 & 4.5 & \\text{tr} & 12.0 & 0 & 6.5 & \\text{tr} \\end{array}$ Using the trace convention, find the total rainfall for the week.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the trace convention.",
          "workingLatex": "\\text{tr} \\rightarrow 0",
          "explanation": "Each $\\text{tr}$ is a trace (less than $0.05\\ \\text{mm}$) and is treated as $0$ in calculations, so the two trace days add nothing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the values with tr as 0.",
          "workingLatex": "0,\\ 4.5,\\ 0,\\ 12.0,\\ 0,\\ 6.5,\\ 0",
          "explanation": "Replacing both trace entries with $0$ gives a clean list of seven numbers to add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note that a daily total is required.",
          "workingLatex": "\\text{weekly total} = \\Sigma \\text{(daily totals)}",
          "explanation": "Each figure is already a daily total, so the weekly total is simply the sum of the seven daily amounts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the non-zero values.",
          "workingLatex": "4.5 + 12.0 + 6.5",
          "explanation": "Only three days recorded measurable rain, so we just add those amounts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the sum.",
          "workingLatex": "4.5 + 12.0 + 6.5 = 23.0",
          "explanation": "Adding gives the total depth of rain collected across the week.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer with units.",
          "workingLatex": "\\text{total} = 23.0\\ \\text{mm}",
          "explanation": "So Hurn received $23.0\\ \\text{mm}$ of rain over the week, most of it on the single wet day of $12.0\\ \\text{mm}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The total rainfall for the week is $23.0\\ \\text{mm}$."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "temperature",
      "range",
      "read-off"
    ],
    "questionText": "The table shows the daily mean temperature ($\\degree$C) at Leuchars over six days in the large data set. $\\begin{array}{c|cccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{Temp } (\\degree\\text{C}) & 11.2 & 9.8 & 13.5 & 10.1 & 12.6 & 8.9 \\end{array}$ Find the range of these daily mean temperatures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of the range.",
          "workingLatex": "\\text{range} = \\text{max} - \\text{min}",
          "explanation": "The range measures the spread of the data as the gap between the largest and smallest values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the largest reading.",
          "workingLatex": "\\text{max} = 13.5",
          "explanation": "Scanning the six temperatures, the warmest day reached $13.5\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the smallest reading.",
          "workingLatex": "\\text{min} = 8.9",
          "explanation": "The coolest day had a daily mean of $8.9\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "\\text{range} = 13.5 - 8.9",
          "explanation": "Subtracting the smallest from the largest gives the range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the subtraction.",
          "workingLatex": "13.5 - 8.9 = 4.6",
          "explanation": "The arithmetic gives the size of the spread in the temperatures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer with units.",
          "workingLatex": "\\text{range} = 4.6\\,\\degree\\text{C}",
          "explanation": "So the daily mean temperature varied by $4.6\\,\\degree$C across the six days — a fairly small spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "The range of the daily mean temperatures is $4.6\\,\\degree$C."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "structure",
      "time-period",
      "explain"
    ],
    "questionText": "The large data set contains daily weather data collected over two separate periods, one in $1987$ and one in $2015$. Each period covers the same months of the year. State which months are covered, how many months this is, and explain one reason why the same months are chosen in both years.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the months covered.",
          "workingLatex": "\\text{May to October}",
          "explanation": "In each year the records run from May through to October, covering the late spring, summer and early autumn.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count how many months this is.",
          "workingLatex": "\\text{May, Jun, Jul, Aug, Sep, Oct} = 6",
          "explanation": "Listing the months from May to October gives six months of daily data in each year.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the two years.",
          "workingLatex": "1987 \\text{ and } 2015",
          "explanation": "The same six-month window is recorded in both $1987$ and $2015$, about a generation apart.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain the effect of the seasons.",
          "workingLatex": "\\text{season affects the weather}",
          "explanation": "Weather depends strongly on the time of year; winter and summer readings would differ hugely for reasons of season alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Give the reason for matching the months.",
          "workingLatex": "\\text{same months} \\Rightarrow \\text{fair comparison}",
          "explanation": "By using the same months in both years, any difference between $1987$ and $2015$ is due to the change in years, not to comparing different seasons.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "\\text{compare like with like}",
          "explanation": "Matching the months keeps the comparison fair, which is exactly what is needed to study how the weather has changed over time.",
          "diagram": null
        }
      ],
      "finalAnswer": "Each period covers May to October — six months. The same months are used in both years so that the two years are compared like with like, removing seasonal differences and leaving only the change between the years."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cloud-cover",
      "mode",
      "oktas"
    ],
    "questionText": "The table shows the daily mean cloud cover, in oktas, at Beijing over seven days in the large data set. $\\begin{array}{c|ccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ \\hline \\text{Cloud (oktas)} & 6 & 8 & 8 & 2 & 8 & 5 & 3 \\end{array}$ Find the modal cloud cover for these seven days.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the mode is.",
          "workingLatex": "\\text{mode} = \\text{most frequent value}",
          "explanation": "The mode is the value that occurs most often, which is well suited to discrete data like whole oktas.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that oktas are discrete.",
          "workingLatex": "\\text{oktas} \\in \\{0,1,\\ldots,8\\}",
          "explanation": "Cloud cover only takes whole values from $0$ to $8$, so we can simply count how often each number appears.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Tally the values.",
          "workingLatex": "2:1,\\ 3:1,\\ 5:1,\\ 6:1,\\ 8:3",
          "explanation": "Counting each reading shows that $8$ oktas occurs three times while every other value occurs just once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Pick the most frequent value.",
          "workingLatex": "\\text{highest frequency at } 8",
          "explanation": "Since $8$ appears more often than any other value, it is the mode.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the mode is unique.",
          "workingLatex": "\\text{all other values occur once}",
          "explanation": "No other reading is repeated, so there is a single clear mode rather than two or more competing values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer with units.",
          "workingLatex": "\\text{mode} = 8 \\text{ oktas}",
          "explanation": "A modal cover of $8$ oktas means the sky was most often completely overcast during this week in Beijing.",
          "diagram": null
        }
      ],
      "finalAnswer": "The modal cloud cover is $8$ oktas (a completely overcast sky), occurring on three of the seven days."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "windspeed",
      "beaufort",
      "data-types"
    ],
    "questionText": "In the large data set, daily mean windspeed at the UK stations is recorded in one unit, but it can also be described using the Beaufort scale. (a) State the units in which daily mean windspeed is recorded. (b) The Beaufort scale uses whole-number values from $0$ to $12$. Classify Beaufort-scale data as discrete or continuous, and explain your choice.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the units of windspeed.",
          "workingLatex": "\\text{windspeed} \\rightarrow \\text{knots}",
          "explanation": "Daily mean windspeed at the UK stations is recorded in knots, the standard nautical unit of speed used by the Met Office.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the Beaufort scale.",
          "workingLatex": "\\text{Beaufort} = 0,1,2,\\ldots,12",
          "explanation": "The Beaufort scale describes wind strength using whole-number categories, from $0$ (calm) up to $12$ (hurricane force).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the discrete/continuous distinction.",
          "workingLatex": "\\text{discrete} = \\text{separate values}",
          "explanation": "Discrete data can only take particular separated values, whereas continuous data can take any value in a range.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the Beaufort values.",
          "workingLatex": "\\text{no value between } 4 \\text{ and } 5",
          "explanation": "A wind is recorded as force $4$ or force $5$, never force $4.6$, so only the whole numbers are allowed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classify the Beaufort scale.",
          "workingLatex": "\\text{Beaufort} \\Rightarrow \\text{discrete}",
          "explanation": "Because only separated whole-number values are possible, Beaufort-scale data are discrete.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Contrast with windspeed in knots.",
          "workingLatex": "\\text{knots} \\Rightarrow \\text{continuous}",
          "explanation": "By contrast, a windspeed measured in knots could be any value such as $12.3$ knots, so that form of the data is continuous.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Daily mean windspeed is recorded in knots. (b) Beaufort-scale data are discrete, because only the whole numbers $0$ to $12$ are possible with no values in between."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "pressure",
      "missing-data",
      "mean"
    ],
    "questionText": "The table shows the daily mean pressure (hPa) at Heathrow over six days in the large data set. One reading is missing. $\\begin{array}{c|cccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{Pressure (hPa)} & 1015 & 1018 & \\text{n/a} & 1012 & 1020 & 1009 \\end{array}$ Find the mean daily pressure over the days for which data are available.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Handle the missing value.",
          "workingLatex": "\\text{n/a} \\Rightarrow \\text{exclude Day }3",
          "explanation": "The $\\text{n/a}$ entry has no numerical value, so Day $3$ is left out of the calculation entirely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the usable readings.",
          "workingLatex": "n = 6 - 1 = 5",
          "explanation": "Removing the missing day leaves five actual pressure readings, so $n = 5$, not $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the available values.",
          "workingLatex": "1015,\\ 1018,\\ 1012,\\ 1020,\\ 1009",
          "explanation": "These are the five recorded pressures we will average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the available values.",
          "workingLatex": "\\Sigma x = 1015 + 1018 + 1012 + 1020 + 1009 = 5074",
          "explanation": "The mean needs the total of the readings, so we add the five available pressures.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the mean formula.",
          "workingLatex": "\\bar{x} = \\dfrac{\\Sigma x}{n}",
          "explanation": "The mean is the total shared equally over the number of usable readings.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and divide.",
          "workingLatex": "\\bar{x} = \\dfrac{5074}{5} = 1014.8",
          "explanation": "Dividing the total by $5$ (not $6$) gives the mean, correctly based only on the days with data.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer with units.",
          "workingLatex": "\\bar{x} = 1014.8\\ \\text{hPa}",
          "explanation": "The mean pressure of $1014.8\\ \\text{hPa}$ is close to normal sea-level pressure, suggesting fairly settled conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "Excluding the missing day gives $n = 5$, so the mean daily pressure is $\\dfrac{5074}{5} = 1014.8\\ \\text{hPa}$."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "mean",
      "temperature",
      "heathrow"
    ],
    "questionText": "The table shows the daily mean temperature ($\\degree$C) at Heathrow for six days in June 2015 in the large data set. $\\begin{array}{c|cccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{Temp } (\\degree\\text{C}) & 17.4 & 18.1 & 16.9 & 19.2 & 17.8 & 18.0 \\end{array}$ Calculate the mean of these six daily mean temperatures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find a mean",
          "workingLatex": "\\bar{x} = \\dfrac{\\Sigma x}{n}",
          "explanation": "The mean is the total of all the readings shared equally between them, so we need the sum of the temperatures and how many days there are.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the six daily temperatures",
          "workingLatex": "\\Sigma x = 17.4+18.1+16.9+19.2+17.8+18.0 = 107.4",
          "explanation": "Adding every reading gives the combined temperature total for the six days.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the number of days",
          "workingLatex": "n = 6",
          "explanation": "There are six daily values, so we will share the total between $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the total by the number of days",
          "workingLatex": "\\bar{x} = \\dfrac{107.4}{6}",
          "explanation": "Dividing the total by $n$ spreads it evenly to give a typical daily value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "\\bar{x} = 17.9",
          "explanation": "This is the arithmetic mean of the six temperatures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context",
          "workingLatex": "\\bar{x} = 17.9\\ \\degree\\text{C}",
          "explanation": "A mean of $17.9\\,\\degree$C describes a typical warm June day at Heathrow over this period.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mean daily mean temperature is $\\bar{x} = 17.9\\,\\degree$C."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "median",
      "sunshine",
      "leeming"
    ],
    "questionText": "The table shows the daily total sunshine (hours) recorded at Leeming for seven days in July 1987 in the large data set. $\\begin{array}{c|ccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ \\hline \\text{Sunshine (hours)} & 6.2 & 9.8 & 4.5 & 11.3 & 7.7 & 8.4 & 5.1 \\end{array}$ Find the median daily total sunshine for these seven days.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the median is",
          "workingLatex": "\\text{median} = \\text{middle value when ordered}",
          "explanation": "The median is the middle reading once the data are placed in order, so it is not distorted by one unusually large or small value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the sunshine values",
          "workingLatex": "4.5,\\ 5.1,\\ 6.2,\\ 7.7,\\ 8.4,\\ 9.8,\\ 11.3",
          "explanation": "Sorting from smallest to largest lets us pick out the middle reading.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the values",
          "workingLatex": "n = 7",
          "explanation": "There are seven daily totals.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the position of the middle",
          "workingLatex": "\\dfrac{n+1}{2} = \\dfrac{7+1}{2} = 4",
          "explanation": "With an odd number of values the single middle one sits in position $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the 4th value",
          "workingLatex": "\\text{median} = 7.7",
          "explanation": "The fourth value in the ordered list is the median.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context",
          "workingLatex": "\\text{median} = 7.7\\ \\text{hours}",
          "explanation": "Half of these July days at Leeming had less than $7.7$ hours of sunshine and half had more.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median daily total sunshine is $7.7$ hours."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "mode",
      "windspeed",
      "camborne"
    ],
    "questionText": "The table shows the daily mean windspeed (knots) at Camborne for seven days in May 2015 in the large data set. $\\begin{array}{c|ccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ \\hline \\text{Windspeed (knots)} & 8 & 11 & 8 & 13 & 8 & 10 & 11 \\end{array}$ State the modal daily mean windspeed for these seven days.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mode",
          "workingLatex": "\\text{mode} = \\text{most frequent value}",
          "explanation": "The mode is simply the value that occurs most often in the data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the windspeeds to group equal values",
          "workingLatex": "8,\\ 8,\\ 8,\\ 10,\\ 11,\\ 11,\\ 13",
          "explanation": "Sorting the readings makes repeated values easy to spot and count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count how often each value occurs",
          "workingLatex": "8:\\ 3,\\quad 10:\\ 1,\\quad 11:\\ 2,\\quad 13:\\ 1",
          "explanation": "Tallying each distinct speed shows which appears the most times.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the highest frequency",
          "workingLatex": "8\\ \\text{occurs } 3 \\text{ times}",
          "explanation": "No other windspeed occurs as often as $8$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the mode",
          "workingLatex": "\\text{mode} = 8",
          "explanation": "The most common reading is the mode.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context",
          "workingLatex": "\\text{mode} = 8\\ \\text{knots}",
          "explanation": "A mean windspeed of $8$ knots was the most frequent daily reading at Camborne that May.",
          "diagram": null
        }
      ],
      "finalAnswer": "The modal daily mean windspeed is $8$ knots."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "range",
      "gust",
      "leuchars"
    ],
    "questionText": "The table shows the daily maximum gust (knots) at Leuchars for six days in October 2015 in the large data set. $\\begin{array}{c|cccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{Max gust (knots)} & 33 & 41 & 28 & 52 & 37 & 45 \\end{array}$ Work out the range of the daily maximum gust for these six days.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range",
          "workingLatex": "\\text{range} = \\text{largest} - \\text{smallest}",
          "explanation": "The range measures the total spread by comparing the biggest and smallest readings.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the gust speeds",
          "workingLatex": "28,\\ 33,\\ 37,\\ 41,\\ 45,\\ 52",
          "explanation": "Ordering makes the largest and smallest values obvious.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the largest",
          "workingLatex": "\\text{largest} = 52",
          "explanation": "The strongest gust in the week was $52$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the smallest",
          "workingLatex": "\\text{smallest} = 28",
          "explanation": "The weakest daily maximum gust was $28$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "\\text{range} = 52 - 28 = 24",
          "explanation": "Taking the difference gives the spread of the gust speeds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context",
          "workingLatex": "\\text{range} = 24\\ \\text{knots}",
          "explanation": "The daily maximum gust varied by $24$ knots across these October days at Leuchars.",
          "diagram": null
        }
      ],
      "finalAnswer": "The range of the daily maximum gust is $24$ knots."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "rainfall",
      "trace",
      "hurn"
    ],
    "questionText": "The table shows the daily total rainfall (mm) at Hurn for six days in August 1987 in the large data set, where $\\text{tr}$ denotes a trace of rain. $\\begin{array}{c|cccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{Rainfall (mm)} & 3.2 & \\text{tr} & 0.0 & 5.6 & \\text{tr} & 1.8 \\end{array}$ Find the total rainfall over these six days.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the trace convention",
          "workingLatex": "\\text{tr} = 0",
          "explanation": "In the large data set $\\text{tr}$ (trace) means less than $0.05$ mm of rain, which is treated as $0$ in calculations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the six values",
          "workingLatex": "3.2,\\ 0,\\ 0.0,\\ 5.6,\\ 0,\\ 1.8",
          "explanation": "Replacing each $\\text{tr}$ with $0$ turns the row into ordinary numbers we can add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the total",
          "workingLatex": "\\text{Total} = 3.2 + 0 + 0.0 + 5.6 + 0 + 1.8",
          "explanation": "The total rainfall for the period is the sum of every day's amount.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the zeros add nothing",
          "workingLatex": "= 3.2 + 5.6 + 1.8",
          "explanation": "Days with $0$ or trace rain contribute nothing, so only the wet days affect the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add",
          "workingLatex": "= 10.6",
          "explanation": "Summing the wet-day amounts gives the six-day total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context",
          "workingLatex": "\\text{Total} = 10.6\\ \\text{mm}",
          "explanation": "Hurn received $10.6$ mm of rain over these six August days in $1987$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The total rainfall over the six days is $10.6$ mm."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "range",
      "temperature",
      "beijing"
    ],
    "questionText": "The table shows the daily mean temperature ($\\degree$C) at Beijing for seven days in July 2015 in the large data set. $\\begin{array}{c|ccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ \\hline \\text{Temp } (\\degree\\text{C}) & 26.3 & 29.1 & 24.8 & 31.5 & 27.6 & 28.4 & 25.0 \\end{array}$ State the highest and lowest daily mean temperatures, and hence find the range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Order the temperatures",
          "workingLatex": "24.8,\\ 25.0,\\ 26.3,\\ 27.6,\\ 28.4,\\ 29.1,\\ 31.5",
          "explanation": "Sorting the week's readings makes the extreme values easy to identify.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the smallest",
          "workingLatex": "\\text{lowest} = 24.8",
          "explanation": "The coolest day had a mean temperature of $24.8\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the largest",
          "workingLatex": "\\text{highest} = 31.5",
          "explanation": "The hottest day reached a mean temperature of $31.5\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the range",
          "workingLatex": "\\text{range} = \\text{highest} - \\text{lowest}",
          "explanation": "The range shows how much the temperature varied across the week.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract",
          "workingLatex": "\\text{range} = 31.5 - 24.8 = 6.7",
          "explanation": "The difference between the extremes is the range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context",
          "workingLatex": "\\text{range} = 6.7\\ \\degree\\text{C}",
          "explanation": "Beijing's daily mean temperature spanned $6.7\\,\\degree$C over this July week, from $24.8\\,\\degree$C to $31.5\\,\\degree$C.",
          "diagram": null
        }
      ],
      "finalAnswer": "The lowest daily mean temperature was $24.8\\,\\degree$C, the highest $31.5\\,\\degree$C, so the range is $6.7\\,\\degree$C."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "median",
      "rainfall",
      "perth"
    ],
    "questionText": "The table shows the daily total rainfall (mm) at Perth for eight days in June 2015 in the large data set, where $\\text{tr}$ denotes a trace of rain. $\\begin{array}{c|cccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ \\hline \\text{Rainfall (mm)} & 0.0 & 2.4 & \\text{tr} & 6.1 & 3.3 & 1.2 & 4.8 & 0.6 \\end{array}$ Find the median daily total rainfall for these eight days.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the trace convention",
          "workingLatex": "\\text{tr} = 0",
          "explanation": "The $\\text{tr}$ entry means only a trace of rain, which counts as $0$ mm when we calculate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the eight values",
          "workingLatex": "0.0,\\ 0.0,\\ 0.6,\\ 1.2,\\ 2.4,\\ 3.3,\\ 4.8,\\ 6.1",
          "explanation": "With $\\text{tr}$ written as $0$, we sort all eight readings to prepare for the median.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the values",
          "workingLatex": "n = 8",
          "explanation": "There are eight daily totals, an even number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the two middle values",
          "workingLatex": "\\dfrac{n}{2} = 4 \\ \\Rightarrow\\ \\text{4th and 5th values}",
          "explanation": "For an even $n$ the median lies between the two central readings, in positions $4$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off those values",
          "workingLatex": "\\text{4th} = 1.2,\\quad \\text{5th} = 2.4",
          "explanation": "These are the two middle readings in the ordered list.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Average them",
          "workingLatex": "\\text{median} = \\dfrac{1.2 + 2.4}{2} = 1.8",
          "explanation": "The median of an even set is the mean of the two central values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret in context",
          "workingLatex": "\\text{median} = 1.8\\ \\text{mm}",
          "explanation": "Half of these June days at Perth had less than $1.8$ mm of rain and half had more.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median daily total rainfall is $1.8$ mm."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "mode",
      "range",
      "cloud-cover"
    ],
    "questionText": "The table shows the daily mean cloud cover (oktas, on a scale of $0$ to $8$) at Jacksonville for eight days in September 2015 in the large data set. $\\begin{array}{c|cccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ \\hline \\text{Cloud (oktas)} & 6 & 7 & 5 & 7 & 8 & 7 & 4 & 6 \\end{array}$ Find the modal cloud cover and the range of the cloud cover for these eight days.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the two quantities to find",
          "workingLatex": "\\text{mode} = \\text{most frequent},\\quad \\text{range} = \\text{max} - \\text{min}",
          "explanation": "We need the most common cloud amount and the spread from least to most cloudy.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the oktas readings",
          "workingLatex": "4,\\ 5,\\ 6,\\ 6,\\ 7,\\ 7,\\ 7,\\ 8",
          "explanation": "Sorting groups equal values and puts the smallest and largest at the ends.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the frequencies",
          "workingLatex": "7:\\ 3,\\quad 6:\\ 2,\\quad 4:\\ 1,\\quad 5:\\ 1,\\quad 8:\\ 1",
          "explanation": "Tallying shows $7$ oktas occurs more than any other value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the mode",
          "workingLatex": "\\text{mode} = 7",
          "explanation": "Seven oktas is the most frequent daily cloud cover.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the range",
          "workingLatex": "\\text{range} = 8 - 4 = 4",
          "explanation": "Subtracting the least cloudy reading from the most cloudy gives the range in oktas.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context",
          "workingLatex": "\\text{mode} = 7\\ \\text{oktas},\\quad \\text{range} = 4\\ \\text{oktas}",
          "explanation": "Jacksonville was most often mostly cloudy ($7$ oktas), and cloud cover varied by $4$ oktas across the week.",
          "diagram": null
        }
      ],
      "finalAnswer": "The modal cloud cover is $7$ oktas and the range is $4$ oktas."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "mean",
      "rainfall",
      "camborne"
    ],
    "questionText": "The table shows the daily total rainfall (mm) at Camborne for six days in October 1987 in the large data set, where $\\text{tr}$ denotes a trace of rain. $\\begin{array}{c|cccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{Rainfall (mm)} & 4.5 & \\text{tr} & 2.0 & \\text{tr} & 6.5 & 1.0 \\end{array}$ Calculate the mean daily rainfall over these six days, giving your answer to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the trace convention",
          "workingLatex": "\\text{tr} = 0",
          "explanation": "$\\text{tr}$ means a trace of rain (under $0.05$ mm), treated as $0$ in the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the values",
          "workingLatex": "4.5,\\ 0,\\ 2.0,\\ 0,\\ 6.5,\\ 1.0",
          "explanation": "Replacing both $\\text{tr}$ entries with $0$ gives numbers ready to add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add to find the total",
          "workingLatex": "\\Sigma x = 4.5 + 0 + 2.0 + 0 + 6.5 + 1.0 = 14.0",
          "explanation": "The total rainfall is the sum of all six daily amounts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the days",
          "workingLatex": "n = 6",
          "explanation": "The mean shares this total over all six days, including the dry ones.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide",
          "workingLatex": "\\bar{x} = \\dfrac{14.0}{6}",
          "explanation": "Dividing the total rain by the number of days gives the average daily rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "\\bar{x} = 2.33",
          "explanation": "Rounded to $2$ decimal places this is the mean daily rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret in context",
          "workingLatex": "\\bar{x} \\approx 2.33\\ \\text{mm}",
          "explanation": "Camborne averaged about $2.33$ mm of rain per day over these October days in $1987$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mean daily rainfall is $\\bar{x} \\approx 2.33$ mm."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "mode",
      "qualitative",
      "wind-direction"
    ],
    "questionText": "The table shows the daily mean wind direction (compass) at Leeming for seven days in May 2015 in the large data set. $\\begin{array}{c|ccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ \\hline \\text{Wind direction} & \\text{SW} & \\text{W} & \\text{SW} & \\text{S} & \\text{SW} & \\text{W} & \\text{NW} \\end{array}$ Explain why the mean and median are not appropriate here, and state the most suitable average and its value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Classify the data",
          "workingLatex": "\\text{wind direction} = \\text{qualitative (categories)}",
          "explanation": "Compass directions are labels, not numbers, so the data are qualitative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide which average applies",
          "workingLatex": "\\text{mean, median: not valid};\\quad \\text{mode: valid}",
          "explanation": "We cannot add or meaningfully order categories, so the mean and median make no sense; only the mode applies to qualitative data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the directions",
          "workingLatex": "\\text{SW, W, SW, S, SW, W, NW}",
          "explanation": "We simply need to see which direction appears most often.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count each direction",
          "workingLatex": "\\text{SW}:\\ 3,\\quad \\text{W}:\\ 2,\\quad \\text{S}:\\ 1,\\quad \\text{NW}:\\ 1",
          "explanation": "Tallying the categories shows $\\text{SW}$ occurs most frequently.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the mode",
          "workingLatex": "\\text{mode} = \\text{SW}",
          "explanation": "The most common category is the modal wind direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret in context",
          "workingLatex": "\\text{modal direction} = \\text{SW}",
          "explanation": "The wind at Leeming blew most often from the south-west during this May week.",
          "diagram": null
        }
      ],
      "finalAnswer": "Wind direction is qualitative, so the mean and median do not apply; the appropriate average is the mode, which is $\\text{SW}$ (south-west)."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "box-plot",
      "quartiles",
      "hurn"
    ],
    "questionText": "The table shows the daily mean temperature ($\\degree$C) at Hurn for nine days in June 2015 in the large data set. $\\begin{array}{c|ccccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\\\ \\hline \\text{Temp } (\\degree\\text{C}) & 14.2 & 15.8 & 13.6 & 16.4 & 15.1 & 14.9 & 17.2 & 13.9 & 15.5 \\end{array}$ Find the five-number summary of these temperatures and draw a box plot to represent them.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Know what a box plot needs",
          "workingLatex": "\\text{min},\\ Q_1,\\ Q_2,\\ Q_3,\\ \\text{max}",
          "explanation": "A box plot is built from the five-number summary, so we find each of these in turn.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the nine temperatures",
          "workingLatex": "13.6,\\ 13.9,\\ 14.2,\\ 14.9,\\ 15.1,\\ 15.5,\\ 15.8,\\ 16.4,\\ 17.2",
          "explanation": "Every quartile is read from ordered data, so we sort the readings first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the extremes",
          "workingLatex": "\\text{min} = 13.6,\\quad \\text{max} = 17.2",
          "explanation": "The smallest and largest ordered values give the ends of the whiskers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the median",
          "workingLatex": "\\dfrac{n+1}{2} = \\dfrac{10}{2} = 5 \\ \\Rightarrow\\ Q_2 = 15.1",
          "explanation": "With $n=9$, the median is the $5$th value in the ordered list.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the lower quartile",
          "workingLatex": "\\dfrac{n}{4} = 2.25 \\ \\Rightarrow\\ \\text{round up to 3rd value},\\ Q_1 = 14.2",
          "explanation": "For $Q_1$ we compute $n/4$; as it is not a whole number we round up to the next position, the $3$rd value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the upper quartile",
          "workingLatex": "\\dfrac{3n}{4} = 6.75 \\ \\Rightarrow\\ \\text{round up to 7th value},\\ Q_3 = 15.8",
          "explanation": "For $Q_3$ we compute $3n/4$ and again round up, giving the $7$th value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the summary and draw the box plot",
          "workingLatex": "13.6,\\ 14.2,\\ 15.1,\\ 15.8,\\ 17.2",
          "explanation": "Plotting these five values against a temperature axis produces the box plot shown.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 13,
            "axisMax": 18,
            "q1": 14.2,
            "median": 15.1,
            "q3": 15.8,
            "whiskerLow": 13.6,
            "whiskerHigh": 17.2,
            "outliers": [],
            "axisLabel": "daily mean temperature (\\degree C)",
            "showValues": true,
            "caption": "Box plot of daily mean temperature at Hurn over nine June days.",
            "alt": "Box plot running from 13.6 to 17.2 with quartiles at 14.2, 15.1 and 15.8 degrees Celsius."
          }
        },
        {
          "stepNumber": 8,
          "description": "Interpret in context",
          "workingLatex": "\\text{IQR} = 15.8 - 14.2 = 1.6",
          "explanation": "The middle half of the days lie within just $1.6\\,\\degree$C, so June temperatures at Hurn were fairly settled.",
          "diagram": null
        }
      ],
      "finalAnswer": "The five-number summary is $\\text{min}=13.6$, $Q_1=14.2$, $Q_2=15.1$, $Q_3=15.8$, $\\text{max}=17.2$ (all $\\degree$C); the box plot is shown."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "standard-deviation",
      "outliers",
      "temperature"
    ],
    "questionText": "The daily mean temperature ($\\degree$C) was recorded at Camborne on $30$ days in June, taken from the large data set. The summary statistics are $\\Sigma x = 372$ and $\\Sigma x^2 = 4685.4$. (a) Find the mean and standard deviation of these temperatures. (b) On one of these days the temperature was $16.2\\,\\degree$C. Using the rule that an outlier is any value more than $2$ standard deviations from the mean, determine whether this day is an outlier.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the mean",
          "workingLatex": "\\bar{x} = \\dfrac{\\Sigma x}{n} = \\dfrac{372}{30} = 12.4",
          "explanation": "The mean is the total of all the readings shared equally over the $30$ days, giving a central temperature of $12.4\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the standard deviation formula",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{\\Sigma x^2}{n} - \\bar{x}^2}",
          "explanation": "Standard deviation measures the typical distance of readings from the mean, and this form is built directly from the totals $\\Sigma x^2$ and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the mean of the squares",
          "workingLatex": "\\dfrac{\\Sigma x^2}{n} = \\dfrac{4685.4}{30} = 156.18",
          "explanation": "This is the average of the squared temperatures, the first quantity needed inside the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the square of the mean",
          "workingLatex": "\\sigma^2 = 156.18 - 12.4^2 = 156.18 - 153.76 = 2.42",
          "explanation": "Taking away $\\bar{x}^2$ leaves the variance, the average squared spread about the mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "\\sigma = \\sqrt{2.42} = 1.56",
          "explanation": "The square root returns to the original units, so the spread is about $1.56\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Upper boundary of the 2-SD rule",
          "workingLatex": "\\bar{x} + 2\\sigma = 12.4 + 2(1.56) = 15.52",
          "explanation": "The rule flags any value more than $2$ standard deviations from the mean; here the upper boundary is $15.52\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Lower boundary of the 2-SD rule",
          "workingLatex": "\\bar{x} - 2\\sigma = 12.4 - 2(1.56) = 9.28",
          "explanation": "Values below $9.28\\,\\degree$C would also be outliers, so the acceptable range is $9.28$ to $15.52\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the reading with the boundary",
          "workingLatex": "16.2 > 15.52",
          "explanation": "The reading of $16.2\\,\\degree$C lies above the upper boundary, so it is more than $2$ standard deviations from the mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "16.2\\,\\degree\\text{C is an outlier}",
          "explanation": "This day was unusually warm for Camborne compared with the rest of the month, so it is flagged as an outlier.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = 12.4\\,\\degree$C and $\\sigma \\approx 1.56\\,\\degree$C. Since $16.2 > 15.52$, the day is more than $2$ standard deviations above the mean and so is an outlier."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "quartiles",
      "interquartile-range",
      "box-plot",
      "sunshine"
    ],
    "questionText": "The table shows the daily total sunshine (hours) recorded at Heathrow on $11$ days from the large data set. $\\begin{array}{c|ccccccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\\\ \\hline \\text{Sunshine} & 7.2 & 3.2 & 9.0 & 5.1 & 11.5 & 6.8 & 4.5 & 10.2 & 6.0 & 8.4 & 9.6 \\end{array}$ Find the quartiles and the interquartile range, check for outliers using the $1.5\\times$IQR rule, and draw a box plot.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Put the data in ascending order",
          "workingLatex": "3.2,\\ 4.5,\\ 5.1,\\ 6.0,\\ 6.8,\\ 7.2,\\ 8.4,\\ 9.0,\\ 9.6,\\ 10.2,\\ 11.5",
          "explanation": "Quartiles split ordered data, so we first arrange the $11$ sunshine values from smallest to largest.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the lower quartile",
          "workingLatex": "\\tfrac{n}{4} = \\tfrac{11}{4} = 2.75 \\Rightarrow \\text{3rd value}",
          "explanation": "With $n=11$, $\\tfrac{n}{4}$ is not a whole number, so we round up to the $3$rd position for $Q_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the lower quartile",
          "workingLatex": "Q_1 = 5.1",
          "explanation": "The $3$rd ordered value is $5.1$ hours, so this is the lower quartile.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate and read the median",
          "workingLatex": "\\tfrac{n}{2} = 5.5 \\Rightarrow \\text{6th value},\\quad Q_2 = 7.2",
          "explanation": "Rounding $5.5$ up gives the $6$th value, so the median sunshine is $7.2$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate and read the upper quartile",
          "workingLatex": "\\tfrac{3n}{4} = 8.25 \\Rightarrow \\text{9th value},\\quad Q_3 = 9.6",
          "explanation": "Rounding $8.25$ up gives the $9$th value, so $Q_3 = 9.6$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 9.6 - 5.1 = 4.5",
          "explanation": "The IQR measures the spread of the middle half of the days, here $4.5$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the lower outlier fence",
          "workingLatex": "Q_1 - 1.5\\,\\text{IQR} = 5.1 - 6.75 = -1.65",
          "explanation": "The lower fence uses $1.5\\times$IQR; a negative fence means no low reading can be an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the upper outlier fence",
          "workingLatex": "Q_3 + 1.5\\,\\text{IQR} = 9.6 + 6.75 = 16.35",
          "explanation": "The largest value $11.5$ is below $16.35$, so there are no high outliers either.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the five-number summary and draw the box plot",
          "workingLatex": "3.2,\\ 5.1,\\ 7.2,\\ 9.6,\\ 11.5",
          "explanation": "With no outliers, the whiskers reach the smallest and largest values, and the box spans $Q_1$ to $Q_3$.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 14,
            "q1": 5.1,
            "median": 7.2,
            "q3": 9.6,
            "whiskerLow": 3.2,
            "whiskerHigh": 11.5,
            "outliers": [],
            "axisLabel": "daily total sunshine (hours)",
            "showValues": true,
            "caption": "Box plot of daily total sunshine at Heathrow over 11 days.",
            "alt": "Box plot with whiskers at 3.2 and 11.5 hours, box from 5.1 to 9.6 and median 7.2."
          }
        },
        {
          "stepNumber": 10,
          "description": "Interpret",
          "workingLatex": "\\text{IQR} = 4.5\\ \\text{hours}",
          "explanation": "The middle half of the days differ by $4.5$ hours of sunshine, showing moderate day-to-day variation at Heathrow.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1 = 5.1$, $Q_2 = 7.2$, $Q_3 = 9.6$ hours, so the IQR $= 4.5$ hours. There are no outliers, so the box plot has whiskers from $3.2$ to $11.5$ hours."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "outliers",
      "quartiles",
      "box-plot",
      "gust"
    ],
    "questionText": "The following daily maximum gust speeds (knots), recorded at Leeming and arranged in ascending order, are taken from the large data set: $22,\\ 24,\\ 25,\\ 27,\\ 28,\\ 30,\\ 31,\\ 33,\\ 34,\\ 36,\\ 38,\\ 40,\\ 42,\\ 45,\\ 68$. Using the $1.5\\times$IQR rule, identify any outliers and draw a box plot.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify n and the quartile positions",
          "workingLatex": "n = 15,\\quad \\tfrac{n}{4}=3.75,\\ \\tfrac{n}{2}=7.5,\\ \\tfrac{3n}{4}=11.25",
          "explanation": "The data are already ordered, and each quartile position rounds up to the next whole rank.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Lower quartile",
          "workingLatex": "Q_1 = \\text{4th value} = 27",
          "explanation": "Rounding $3.75$ up gives the $4$th gust, $27$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Median",
          "workingLatex": "Q_2 = \\text{8th value} = 33",
          "explanation": "Rounding $7.5$ up gives the $8$th value, the middle gust of $33$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Upper quartile",
          "workingLatex": "Q_3 = \\text{12th value} = 40",
          "explanation": "Rounding $11.25$ up gives the $12$th value, $40$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interquartile range",
          "workingLatex": "\\text{IQR} = 40 - 27 = 13",
          "explanation": "The spread of the middle half of the gust speeds is $13$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Upper outlier fence",
          "workingLatex": "Q_3 + 1.5\\,\\text{IQR} = 40 + 1.5(13) = 59.5",
          "explanation": "Any gust above $59.5$ knots is more than $1.5\\times$IQR beyond $Q_3$ and counts as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Lower outlier fence",
          "workingLatex": "Q_1 - 1.5\\,\\text{IQR} = 27 - 19.5 = 7.5",
          "explanation": "The smallest gust $22$ is above $7.5$, so there is no low outlier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the outlier",
          "workingLatex": "68 > 59.5",
          "explanation": "The gust of $68$ knots exceeds the upper fence, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Fix the whisker end",
          "workingLatex": "\\text{highest non-outlier} = 45",
          "explanation": "The upper whisker stops at $45$ knots, the largest value inside the fence, while the outlier is plotted separately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Draw the box plot",
          "workingLatex": "22,\\ 27,\\ 33,\\ 40,\\ 45\\ (\\text{outlier } 68)",
          "explanation": "The box runs $27$ to $40$ with the median at $33$; the whiskers reach $22$ and $45$, and $68$ is marked separately.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 70,
            "q1": 27,
            "median": 33,
            "q3": 40,
            "whiskerLow": 22,
            "whiskerHigh": 45,
            "outliers": [
              68
            ],
            "axisLabel": "daily maximum gust (knots)",
            "showValues": true,
            "caption": "Box plot of daily maximum gust at Leeming, with one outlier.",
            "alt": "Box plot with box from 27 to 40, median 33, whiskers at 22 and 45, and an outlier plotted at 68 knots."
          }
        },
        {
          "stepNumber": 11,
          "description": "Interpret",
          "workingLatex": "68\\ \\text{knots: exceptional gust}",
          "explanation": "Most days at Leeming had gusts between about $22$ and $45$ knots, so the $68$-knot day stands out as exceptionally stormy and worth checking against the record.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1 = 27$, $Q_2 = 33$, $Q_3 = 40$ knots, IQR $= 13$ knots. The upper fence is $59.5$ knots, so $68$ knots is an outlier and the upper whisker stops at $45$ knots."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "percentiles",
      "interpolation",
      "rainfall",
      "spread"
    ],
    "questionText": "The grouped frequency table shows the daily total rainfall $r$ (mm) recorded at Hurn on $30$ days from the large data set. $\\begin{array}{c|ccccc} \\text{Rainfall } r\\text{ (mm)} & 0\\le r<2 & 2\\le r<4 & 4\\le r<6 & 6\\le r<8 & 8\\le r<10 \\\\ \\hline \\text{Frequency} & 8 & 10 & 7 & 3 & 2 \\end{array}$ Using linear interpolation, find the $10$th and $90$th percentiles and hence the $10$th-to-$90$th interpercentile range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the total frequency",
          "workingLatex": "n = 8+10+7+3+2 = 30",
          "explanation": "Percentiles of grouped data are found by linear interpolation, and the first thing we need is the total number of days, $n=30$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Build the cumulative frequencies",
          "workingLatex": "\\text{CF: } 8,\\ 18,\\ 25,\\ 28,\\ 30",
          "explanation": "Running totals tell us how many days fall below each class boundary, which is exactly what interpolation uses.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the interpolation formula",
          "workingLatex": "P_k = L + \\dfrac{\\frac{k}{100}n - F}{f}\\times w",
          "explanation": "Here $L$ is the class lower boundary, $F$ the cumulative frequency before the class, $f$ the class frequency and $w$ its width.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Position of the 10th percentile",
          "workingLatex": "\\tfrac{10}{100}\\times 30 = 3 \\Rightarrow 0\\le r<2",
          "explanation": "$P_{10}$ sits at the $3$rd value; since the first class already holds $8$ days, it lies in $0\\le r<2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpolate the 10th percentile",
          "workingLatex": "P_{10} = 0 + \\dfrac{3-0}{8}\\times 2 = 0.75",
          "explanation": "We step $\\tfrac{3}{8}$ of the way into a class of width $2$ mm, giving $P_{10} = 0.75$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Position of the 90th percentile",
          "workingLatex": "\\tfrac{90}{100}\\times 30 = 27 \\Rightarrow 6\\le r<8",
          "explanation": "$P_{90}$ sits at the $27$th value; the cumulative frequency reaches $25$ then $28$, so it lies in $6\\le r<8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpolate the 90th percentile",
          "workingLatex": "P_{90} = 6 + \\dfrac{27-25}{3}\\times 2 = 7.33",
          "explanation": "We step $\\tfrac{2}{3}$ into a class of width $2$ mm from the boundary $6$, giving $7.33$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the interpercentile range",
          "workingLatex": "P_{90} - P_{10} = 7.33 - 0.75 = 6.58",
          "explanation": "The $10$th-to-$90$th interpercentile range measures the spread of the central $80\\%$ of days.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "\\text{IPR}_{10\\text{-}90} = 6.58\\ \\text{mm}",
          "explanation": "Ignoring the driest and wettest tenths of days, daily rainfall at Hurn spanned about $6.58$ mm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P_{10} = 0.75$ mm and $P_{90} = 7.33$ mm, so the $10$th-to-$90$th interpercentile range is $6.58$ mm."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "standard-deviation",
      "comparison",
      "temperature",
      "mean"
    ],
    "questionText": "For $10$ days in the large data set, the daily mean temperature ($\\degree$C) is summarised for two overseas stations. Beijing: $\\Sigma x = 152$, $\\Sigma x^2 = 2354.8$. Perth: $\\Sigma x = 178$, $\\Sigma x^2 = 3199.2$. Compare the temperatures at the two stations using the mean and standard deviation, and interpret your findings.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Beijing mean",
          "workingLatex": "\\bar{x}_B = \\dfrac{152}{10} = 15.2",
          "explanation": "Sharing Beijing's total temperature over $10$ days gives a mean of $15.2\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Beijing variance",
          "workingLatex": "\\sigma_B^2 = \\dfrac{2354.8}{10} - 15.2^2 = 235.48 - 231.04 = 4.44",
          "explanation": "Subtracting the square of the mean from the mean of the squares gives the variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Beijing standard deviation",
          "workingLatex": "\\sigma_B = \\sqrt{4.44} = 2.11",
          "explanation": "The typical spread of Beijing's temperatures about the mean is about $2.11\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Perth mean",
          "workingLatex": "\\bar{x}_P = \\dfrac{178}{10} = 17.8",
          "explanation": "Perth's mean daily temperature over the same number of days is $17.8\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Perth variance",
          "workingLatex": "\\sigma_P^2 = \\dfrac{3199.2}{10} - 17.8^2 = 319.92 - 316.84 = 3.08",
          "explanation": "The same calculation for Perth gives a variance of $3.08$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Perth standard deviation",
          "workingLatex": "\\sigma_P = \\sqrt{3.08} = 1.75",
          "explanation": "Perth's temperatures spread about $1.75\\,\\degree$C from their mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the means (location)",
          "workingLatex": "17.8 > 15.2",
          "explanation": "Perth's mean is higher, so on average Perth was warmer than Beijing over this period.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the standard deviations (spread)",
          "workingLatex": "1.75 < 2.11",
          "explanation": "Perth's smaller standard deviation shows its daily temperatures were more consistent than Beijing's.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude in context",
          "workingLatex": "\\text{Perth: warmer and more consistent}",
          "explanation": "Perth was both warmer on average and steadier day to day, while Beijing was cooler and more variable.",
          "diagram": null
        }
      ],
      "finalAnswer": "Perth was warmer on average ($17.8$ vs $15.2\\,\\degree$C) and its temperatures were more consistent (SD $1.75$ vs $2.11\\,\\degree$C) than Beijing's over these $10$ days."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "outliers",
      "standard-deviation",
      "pressure"
    ],
    "questionText": "The table shows the daily mean pressure (hPa) recorded at Leuchars on $8$ days from the large data set. $\\begin{array}{c|cccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ \\hline \\text{Pressure} & 1008 & 1010 & 1011 & 1012 & 1013 & 1015 & 1009 & 1026 \\end{array}$ Find the mean and standard deviation, and use the rule that an outlier lies more than $2$ standard deviations from the mean to decide whether any day is an outlier.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Total the pressures",
          "workingLatex": "\\Sigma x = 1008+1010+1011+1012+1013+1015+1009+1026 = 8104",
          "explanation": "The mean needs the sum of all eight daily pressures.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the mean",
          "workingLatex": "\\bar{x} = \\dfrac{8104}{8} = 1013",
          "explanation": "Sharing the total over $8$ days gives a mean pressure of $1013$ hPa.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the deviations from the mean",
          "workingLatex": "\\Sigma (x-\\bar{x})^2 = 25+9+4+1+0+4+16+169 = 228",
          "explanation": "Each reading's distance from $1013$ is squared and summed; the far reading $1026$ contributes most, as $13^2 = 169$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the variance",
          "workingLatex": "\\sigma^2 = \\dfrac{228}{8} = 28.5",
          "explanation": "Dividing the total squared spread by $n$ gives the variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{28.5} = 5.34",
          "explanation": "The typical spread of pressure about the mean is about $5.34$ hPa.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Upper boundary of the 2-SD rule",
          "workingLatex": "\\bar{x} + 2\\sigma = 1013 + 2(5.34) = 1023.68",
          "explanation": "The rule flags readings more than $2$ standard deviations from the mean; the upper limit is $1023.68$ hPa.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Lower boundary of the 2-SD rule",
          "workingLatex": "\\bar{x} - 2\\sigma = 1013 - 10.68 = 1002.32",
          "explanation": "Readings below $1002.32$ hPa would also be outliers; all readings except one lie inside these limits.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the outlier",
          "workingLatex": "1026 > 1023.68",
          "explanation": "Only $1026$ hPa exceeds the upper boundary, so it is the sole outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "1026\\ \\text{hPa is an outlier}",
          "explanation": "That day had unusually high pressure at Leuchars, worth checking against the raw record.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = 1013$ hPa and $\\sigma \\approx 5.34$ hPa. The $2$-SD limits are $1002.32$ to $1023.68$ hPa, so $1026$ hPa is an outlier."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "box-plot",
      "skewness",
      "interquartile-range",
      "windspeed"
    ],
    "questionText": "The box plot summarises the daily mean windspeed (knots) recorded at Camborne on $20$ days from the large data set. Using the box plot: (a) state the median and the interquartile range; (b) describe the skewness of the distribution; (c) the plot marks one day as an outlier at $27$ knots, so using the quartiles shown, confirm that $27$ knots lies beyond the outlier boundary.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 0,
      "axisMax": 30,
      "q1": 8,
      "median": 11,
      "q3": 15,
      "whiskerLow": 4,
      "whiskerHigh": 22,
      "outliers": [
        27
      ],
      "axisLabel": "daily mean windspeed (knots)",
      "showValues": true,
      "caption": "Box plot of daily mean windspeed at Camborne over 20 days.",
      "alt": "Box plot with whiskers at 4 and 22, box from 8 to 15, median 11, and an outlier at 27 knots."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the five-number summary",
          "workingLatex": "\\text{whisker }4,\\ Q_1=8,\\ Q_2=11,\\ Q_3=15,\\ \\text{whisker }22",
          "explanation": "Each feature of the box plot corresponds to a value on the windspeed axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the median",
          "workingLatex": "Q_2 = 11",
          "explanation": "The line inside the box marks the median windspeed, $11$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 15 - 8 = 7",
          "explanation": "The width of the box gives the IQR, the spread of the middle half of the days: $7$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare the quartile gaps",
          "workingLatex": "Q_2 - Q_1 = 3, \\quad Q_3 - Q_2 = 4",
          "explanation": "The upper part of the box is wider than the lower part, a first sign of positive skew.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the whisker lengths",
          "workingLatex": "Q_2 - 4 = 7, \\quad 22 - Q_2 = 11",
          "explanation": "The upper whisker is longer than the lower one, reinforcing that the tail stretches to higher windspeeds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the skew",
          "workingLatex": "\\text{positive (right) skew}",
          "explanation": "Both the box and the whiskers lean towards higher values, so the distribution is positively skewed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the outlier boundary",
          "workingLatex": "Q_3 + 1.5\\,\\text{IQR} = 15 + 1.5(7) = 25.5",
          "explanation": "The upper fence sits $1.5\\times$IQR above $Q_3$, at $25.5$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the outlier",
          "workingLatex": "27 > 25.5",
          "explanation": "The $27$-knot day lies beyond the fence, confirming the box plot's marking of it as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "27\\ \\text{knots: unusually windy day}",
          "explanation": "Most days at Camborne fell between $4$ and $22$ knots, so the outlier flags one notably windy day.",
          "diagram": null
        }
      ],
      "finalAnswer": "Median $= 11$ knots and IQR $= 7$ knots. The distribution is positively skewed, and since $27 > 25.5$ the $27$-knot day is confirmed as an outlier."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "median",
      "interquartile-range",
      "comparison",
      "temperature"
    ],
    "questionText": "Two samples of $9$ daily mean temperatures ($\\degree$C) at Leeming are taken from the large data set, one for a summer month in $1987$ and one for the same month in $2015$, each already in ascending order. $1987$: $12.1,\\ 13.4,\\ 14.0,\\ 14.8,\\ 15.2,\\ 15.9,\\ 16.5,\\ 17.2,\\ 18.0$. $2015$: $13.5,\\ 14.2,\\ 15.0,\\ 15.6,\\ 16.3,\\ 17.0,\\ 17.8,\\ 18.5,\\ 20.1$. Compare the two years using the median and the interquartile range, and interpret your findings.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the quartile positions",
          "workingLatex": "n=9,\\quad \\tfrac{n}{4}=2.25,\\ \\tfrac{n}{2}=4.5,\\ \\tfrac{3n}{4}=6.75",
          "explanation": "The nine values are already ordered, and each position rounds up to a whole rank: the $3$rd, $5$th and $7$th.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "1987 quartiles",
          "workingLatex": "Q_1=14.0,\\quad Q_2=15.2,\\quad Q_3=16.5",
          "explanation": "The $3$rd, $5$th and $7$th ordered values give the quartiles for $1987$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "1987 interquartile range",
          "workingLatex": "\\text{IQR}_{1987} = 16.5 - 14.0 = 2.5",
          "explanation": "The middle half of the $1987$ days spanned $2.5\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "2015 quartiles",
          "workingLatex": "Q_1=15.0,\\quad Q_2=16.3,\\quad Q_3=17.8",
          "explanation": "Applying the same positions to the ordered $2015$ data gives its quartiles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "2015 interquartile range",
          "workingLatex": "\\text{IQR}_{2015} = 17.8 - 15.0 = 2.8",
          "explanation": "The middle half of the $2015$ days spanned $2.8\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the medians (location)",
          "workingLatex": "16.3 > 15.2",
          "explanation": "The $2015$ median is higher, so typical daily temperatures were warmer in $2015$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the IQRs (spread)",
          "workingLatex": "2.8 > 2.5",
          "explanation": "The slightly larger $2015$ IQR shows temperatures were a little more variable that year.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note why these measures are chosen",
          "workingLatex": "\\text{median, IQR resistant to extremes}",
          "explanation": "Median and IQR are used because they are not distorted by an unusually hot single day such as the $20.1\\,\\degree$C reading in $2015$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude in context",
          "workingLatex": "2015:\\ \\text{warmer, slightly more spread}",
          "explanation": "Leeming's summer was warmer in $2015$ than in $1987$, with marginally greater day-to-day variation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1987$: median $15.2\\,\\degree$C, IQR $2.5\\,\\degree$C. $2015$: median $16.3\\,\\degree$C, IQR $2.8\\,\\degree$C. So $2015$ was warmer on average and slightly more variable than $1987$."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "standard-deviation",
      "combined-data",
      "sunshine",
      "mean"
    ],
    "questionText": "The daily total sunshine (hours) at Camborne over a $30$-day period from the large data set is summarised in two halves. First $15$ days: $\\Sigma x = 90$, $\\Sigma x^2 = 630$. Last $15$ days: $\\Sigma x = 135$, $\\Sigma x^2 = 1305$. Find the mean and standard deviation of the sunshine over all $30$ days.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Combine the totals",
          "workingLatex": "\\Sigma x = 90 + 135 = 225",
          "explanation": "Because the mean uses the overall total, we add the two halves' sums.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Combined mean",
          "workingLatex": "\\bar{x} = \\dfrac{225}{30} = 7.5",
          "explanation": "Sharing the combined total over all $30$ days gives a mean of $7.5$ hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine the sums of squares",
          "workingLatex": "\\Sigma x^2 = 630 + 1305 = 1935",
          "explanation": "The standard deviation needs the total of the squared readings, so we add both halves.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the standard deviation formula",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{\\Sigma x^2}{n} - \\bar{x}^2}",
          "explanation": "This form builds the spread directly from the combined totals $\\Sigma x^2$ and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Mean of the squares",
          "workingLatex": "\\dfrac{1935}{30} = 64.5",
          "explanation": "This is the average squared sunshine value across all $30$ days.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the square of the mean",
          "workingLatex": "\\sigma^2 = 64.5 - 7.5^2 = 64.5 - 56.25 = 8.25",
          "explanation": "Removing $\\bar{x}^2$ leaves the variance, $8.25$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Standard deviation",
          "workingLatex": "\\sigma = \\sqrt{8.25} = 2.87",
          "explanation": "The typical spread of daily sunshine about the mean is about $2.87$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret with an interval",
          "workingLatex": "\\bar{x} \\pm \\sigma = 7.5 \\pm 2.87 = [4.63,\\ 10.37]",
          "explanation": "Most days fall roughly within one standard deviation of the mean, between about $4.6$ and $10.4$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude",
          "workingLatex": "\\bar{x} = 7.5,\\quad \\sigma \\approx 2.87",
          "explanation": "Combining the halves gives the full-month picture: an average of $7.5$ hours of sunshine with moderate day-to-day variation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Over the $30$ days, $\\bar{x} = 7.5$ hours and $\\sigma \\approx 2.87$ hours of sunshine."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "box-plot",
      "outliers",
      "skewness",
      "rainfall"
    ],
    "questionText": "The daily total rainfall (mm) at Jacksonville on $12$ days from the large data set, arranged in ascending order, is $\\text{tr},\\ \\text{tr},\\ 1.2,\\ 2.4,\\ 3.1,\\ 4.0,\\ 5.5,\\ 6.8,\\ 8.2,\\ 9.6,\\ 12.4,\\ 28.0$, where $\\text{tr}$ (trace) is treated as $0$ mm. Find the quartiles and IQR, identify any outlier using the $1.5\\times$IQR rule, draw a box plot, and comment on the skewness.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Prepare the data",
          "workingLatex": "0,\\ 0,\\ 1.2,\\ 2.4,\\ 3.1,\\ 4.0,\\ 5.5,\\ 6.8,\\ 8.2,\\ 9.6,\\ 12.4,\\ 28.0",
          "explanation": "Trace rainfall (tr) counts as $0$ mm, so the $12$ ordered values begin with two zeros.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Lower quartile position",
          "workingLatex": "\\tfrac{n}{4} = \\tfrac{12}{4} = 3 \\Rightarrow \\text{mean of 3rd and 4th}",
          "explanation": "When $\\tfrac{n}{4}$ is a whole number, we average the value at that position with the next one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Lower quartile",
          "workingLatex": "Q_1 = \\dfrac{1.2+2.4}{2} = 1.8",
          "explanation": "Averaging the $3$rd and $4$th values gives $Q_1 = 1.8$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Median",
          "workingLatex": "Q_2 = \\dfrac{4.0+5.5}{2} = 4.75",
          "explanation": "The $6$th and $7$th values ($\\tfrac{n}{2}=6$) average to a median of $4.75$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Upper quartile",
          "workingLatex": "Q_3 = \\dfrac{8.2+9.6}{2} = 8.9",
          "explanation": "The $9$th and $10$th values ($\\tfrac{3n}{4}=9$) average to $Q_3 = 8.9$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interquartile range",
          "workingLatex": "\\text{IQR} = 8.9 - 1.8 = 7.1",
          "explanation": "The middle half of the days spanned $7.1$ mm of rain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Upper outlier fence",
          "workingLatex": "Q_3 + 1.5\\,\\text{IQR} = 8.9 + 10.65 = 19.55",
          "explanation": "Any day above $19.55$ mm is more than $1.5\\times$IQR beyond $Q_3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the outlier and whisker end",
          "workingLatex": "28.0 > 19.55,\\quad \\text{whisker} = 12.4",
          "explanation": "The $28.0$ mm day is an outlier, so the upper whisker stops at the next value, $12.4$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Draw the box plot",
          "workingLatex": "0,\\ 1.8,\\ 4.75,\\ 8.9,\\ 12.4\\ (\\text{outlier } 28.0)",
          "explanation": "The box runs $1.8$ to $8.9$ with the median at $4.75$, and the outlier is plotted beyond the whisker.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 30,
            "q1": 1.8,
            "median": 4.75,
            "q3": 8.9,
            "whiskerLow": 0,
            "whiskerHigh": 12.4,
            "outliers": [
              28
            ],
            "axisLabel": "daily total rainfall (mm)",
            "showValues": true,
            "caption": "Box plot of daily total rainfall at Jacksonville, with one outlier.",
            "alt": "Box plot with whiskers at 0 and 12.4, box from 1.8 to 8.9, median 4.75, and an outlier at 28.0 mm."
          }
        },
        {
          "stepNumber": 10,
          "description": "Describe the skew",
          "workingLatex": "Q_2 - Q_1 = 2.95 < Q_3 - Q_2 = 4.15",
          "explanation": "The upper half of the box is wider, so the distribution is positively skewed, which is typical of daily rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret",
          "workingLatex": "28.0\\ \\text{mm: exceptional rainfall}",
          "explanation": "Jacksonville had mostly light rain with one very wet day, so the positive skew and the outlier reflect occasional heavy downpours.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1 = 1.8$, $Q_2 = 4.75$, $Q_3 = 8.9$ mm, IQR $= 7.1$ mm. The upper fence is $19.55$ mm, so $28.0$ mm is an outlier, and the distribution is positively skewed."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "box-plot",
      "quartiles",
      "outliers",
      "sunshine"
    ],
    "questionText": "The daily total sunshine (hours) was recorded at Camborne on $15$ days in the large data set. The values, written in order, are $\\begin{array}{c} 2.1,\\ 3.4,\\ 4.0,\\ 4.8,\\ 5.2,\\ 5.9,\\ 6.3,\\ 6.7,\\ 7.1,\\ 7.5,\\ 7.9,\\ 8.4,\\ 9.0,\\ 9.6,\\ 14.5 \\end{array}$ Find the median and quartiles, test for outliers using the rule that a value is an outlier if it is more than $1.5 \\times \\text{IQR}$ beyond a quartile, and hence draw a box plot for these data.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note how many values there are.",
          "workingLatex": "n = 15",
          "explanation": "The quartile positions all depend on how many readings we have, so we start by counting them. There are $15$ ordered sunshine values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the position of the median.",
          "workingLatex": "\\frac{n}{2} = \\frac{15}{2} = 7.5 \\rightarrow \\text{8th value}",
          "explanation": "For a list of data we divide $n$ by $2$; since $7.5$ is not a whole number we round up to the $8$th value. Rounding up avoids landing between two readings.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the median.",
          "workingLatex": "Q_2 = 6.7",
          "explanation": "Counting to the $8$th ordered value gives $6.7$ hours, so half the days had less sunshine than this and half had more.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the lower quartile.",
          "workingLatex": "\\frac{n}{4} = \\frac{15}{4} = 3.75 \\rightarrow \\text{4th value},\\quad Q_1 = 4.8",
          "explanation": "The lower quartile sits a quarter of the way through the data. We divide $n$ by $4$ and round up, giving the $4$th value, $4.8$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the upper quartile.",
          "workingLatex": "\\frac{3n}{4} = \\frac{45}{4} = 11.25 \\rightarrow \\text{12th value},\\quad Q_3 = 8.4",
          "explanation": "The upper quartile is three quarters of the way through. Dividing $3n$ by $4$ and rounding up gives the $12$th value, $8.4$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 8.4 - 4.8 = 3.6",
          "explanation": "The IQR measures the spread of the middle half of the days. It is also the length we scale to find the outlier fences.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the outlier fences.",
          "workingLatex": "1.5 \\times \\text{IQR} = 1.5 \\times 3.6 = 5.4",
          "explanation": "The rule flags any value more than $1.5\\times\\text{IQR}$ beyond a quartile, so we first work out this distance of $5.4$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the upper and lower boundaries.",
          "workingLatex": "\\text{upper} = 8.4 + 5.4 = 13.8,\\qquad \\text{lower} = 4.8 - 5.4 = -0.6",
          "explanation": "Any day above $13.8$ hours or below $-0.6$ hours is an outlier. A negative sunshine value is impossible, so in practice only the upper fence can catch anything here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the outliers.",
          "workingLatex": "14.5 > 13.8 \\Rightarrow \\text{outlier};\\quad 2.1 > -0.6 \\Rightarrow \\text{not an outlier}",
          "explanation": "Only $14.5$ hours lies beyond a fence, so it is the single outlier. Every other value, including the smallest of $2.1$ hours, is inside the boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Fix the whisker ends.",
          "workingLatex": "\\text{whiskers reach } 2.1 \\text{ and } 9.6",
          "explanation": "Whiskers extend to the most extreme values that are not outliers. The low whisker reaches $2.1$ hours and the high whisker stops at $9.6$ hours, the largest non-outlier.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Draw the box plot with the outlier marked separately.",
          "workingLatex": "Q_1 = 4.8,\\ Q_2 = 6.7,\\ Q_3 = 8.4,\\ \\text{whiskers } 2.1 \\text{ to } 9.6,\\ \\text{outlier } 14.5",
          "explanation": "The box spans the quartiles with the median inside, the whiskers run to $2.1$ and $9.6$ hours, and $14.5$ hours is plotted as a cross. The plot shows a fairly typical spread with one unusually sunny day.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 0,
            "axisMax": 16,
            "q1": 4.8,
            "median": 6.7,
            "q3": 8.4,
            "whiskerLow": 2.1,
            "whiskerHigh": 9.6,
            "outliers": [
              14.5
            ],
            "axisLabel": "daily total sunshine (hours)",
            "showValues": true,
            "caption": "Box plot of daily total sunshine at Camborne, with the outlier marked",
            "alt": "Box from 4.8 to 8.4 with median 6.7, whiskers to 2.1 and 9.6, and a cross at 14.5"
          }
        }
      ],
      "finalAnswer": "$Q_1 = 4.8$ h, $Q_2 = 6.7$ h, $Q_3 = 8.4$ h and $\\text{IQR} = 3.6$ h. The value $14.5$ h is an outlier, so the whiskers run from $2.1$ h to $9.6$ h with $14.5$ h plotted separately."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "box-plot",
      "comparison",
      "temperature"
    ],
    "questionText": "The box plot shows the daily mean temperature ($\\degree$C) at Heathrow over a summer month in the large data set. For the same month at Leuchars the five-number summary was $\\begin{array}{c|ccccc} & \\text{min} & Q_1 & Q_2 & Q_3 & \\text{max} \\\\ \\hline \\text{Leuchars} & 6 & 10 & 12 & 15 & 21 \\end{array}$ Compare the distributions of daily mean temperature at the two stations, referring to a measure of location and a measure of spread.",
    "questionDiagram": {
      "kind": "boxPlot",
      "axisMin": 5,
      "axisMax": 30,
      "q1": 14,
      "median": 17,
      "q3": 20,
      "whiskerLow": 9,
      "whiskerHigh": 26,
      "axisLabel": "daily mean temperature (\\degree C)",
      "showValues": true,
      "caption": "Box plot of daily mean temperature at Heathrow for a summer month",
      "alt": "Box from 14 to 20 with median 17, whiskers to 9 and 26"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the five-number summary for Heathrow from the box plot.",
          "workingLatex": "\\text{Heathrow: min }9,\\ Q_1 = 14,\\ Q_2 = 17,\\ Q_3 = 20,\\ \\text{max }26",
          "explanation": "The whisker ends give the smallest and largest values, the box edges give the quartiles, and the inner line gives the median. Reading them off lets us compare the two stations fairly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the Leuchars summary from the table.",
          "workingLatex": "\\text{Leuchars: min }6,\\ Q_1 = 10,\\ Q_2 = 12,\\ Q_3 = 15,\\ \\text{max }21",
          "explanation": "Having both summaries in the same form makes the like-for-like comparison of location and spread straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the medians as a measure of location.",
          "workingLatex": "Q_2:\\ 17 > 12",
          "explanation": "The median is a resistant measure of location. Heathrow's median of $17\\,\\degree$C is $5\\,\\degree$C higher than Leuchars', so Heathrow was typically warmer that month.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the interquartile range at Heathrow.",
          "workingLatex": "\\text{IQR}_{\\text{H}} = 20 - 14 = 6",
          "explanation": "The IQR measures the spread of the middle half of the days and ignores the extremes, so it is a stable way to compare variability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the interquartile range at Leuchars.",
          "workingLatex": "\\text{IQR}_{\\text{L}} = 15 - 10 = 5",
          "explanation": "Working out the same measure for Leuchars gives a direct comparison of how varied the middle half of the temperatures were.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the spreads.",
          "workingLatex": "\\text{IQR}_{\\text{H}} = 6 > 5 = \\text{IQR}_{\\text{L}}",
          "explanation": "Heathrow's slightly larger IQR means its middle-half temperatures were a little more spread out than Leuchars', so day-to-day temperatures were marginally more variable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the overall ranges.",
          "workingLatex": "\\text{range}_{\\text{H}} = 26 - 9 = 17,\\quad \\text{range}_{\\text{L}} = 21 - 6 = 15",
          "explanation": "The full range confirms the picture from the IQR: Heathrow's temperatures covered a wider band across the month than Leuchars'.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the comparison in the weather context.",
          "workingLatex": "\\text{Heathrow: warmer and more variable than Leuchars}",
          "explanation": "Heathrow is a southern, inland site while Leuchars is on the cooler Scottish coast, which fits both a higher typical temperature and a slightly wider spread.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{location: Heathrow higher};\\quad \\text{spread: Heathrow larger}",
          "explanation": "Both the median and the IQR are higher at Heathrow, so we conclude Heathrow was both warmer on average and a touch more variable than Leuchars that month.",
          "diagram": null
        }
      ],
      "finalAnswer": "Heathrow had the higher median ($17\\,\\degree$C vs $12\\,\\degree$C), so it was typically warmer. Its interquartile range was also larger ($6\\,\\degree$C vs $5\\,\\degree$C), so its middle-half temperatures were slightly more spread out."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cumulative-frequency",
      "median",
      "rainfall"
    ],
    "questionText": "The daily total rainfall (mm) was grouped for $60$ days at Hurn in the large data set. $\\begin{array}{c|c} \\text{Rainfall } r\\ (\\text{mm}) & \\text{Frequency} \\\\ \\hline 0 \\le r < 2 & 18 \\\\ 2 \\le r < 4 & 14 \\\\ 4 \\le r < 6 & 12 \\\\ 6 \\le r < 8 & 9 \\\\ 8 \\le r < 10 & 5 \\\\ 10 \\le r < 12 & 2 \\end{array}$ Construct a cumulative frequency graph and use it to estimate the median daily rainfall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what to plot.",
          "workingLatex": "\\text{plot (upper class boundary, running total)}",
          "explanation": "A cumulative frequency graph plots the running total of days up to each upper class boundary, because by that boundary every day in the class has been counted.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Build the cumulative frequencies.",
          "workingLatex": "18,\\ 32,\\ 44,\\ 53,\\ 58,\\ 60",
          "explanation": "Adding each class frequency to the ones before gives the running totals: $18$, then $18+14=32$, then $44$, $53$, $58$ and finally $60$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm the total.",
          "workingLatex": "n = 60",
          "explanation": "The final cumulative frequency must equal the number of days, $60$. This check confirms no class was miscounted.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Plot the points and join them, starting from the origin of the first class.",
          "workingLatex": "(0,0),(2,18),(4,32),(6,44),(8,53),(10,58),(12,60)",
          "explanation": "No days fall below $0$ mm, so the curve starts at $(0,0)$. Joining the points with a smooth increasing curve gives the graph to read from.",
          "diagram": {
            "kind": "cumulativeFrequency",
            "points": [
              {
                "x": 2,
                "cf": 18
              },
              {
                "x": 4,
                "cf": 32
              },
              {
                "x": 6,
                "cf": 44
              },
              {
                "x": 8,
                "cf": 53
              },
              {
                "x": 10,
                "cf": 58
              },
              {
                "x": 12,
                "cf": 60
              }
            ],
            "origin": 0,
            "xAxisLabel": "daily total rainfall (mm)",
            "yAxisLabel": "cumulative frequency",
            "readoffs": [
              {
                "cf": 30,
                "label": "Q_2"
              }
            ],
            "caption": "Cumulative frequency graph of daily rainfall at Hurn with a median guide",
            "alt": "Rising curve to 60, with a dashed guide at cumulative frequency 30"
          }
        },
        {
          "stepNumber": 5,
          "description": "Find the median position.",
          "workingLatex": "\\frac{n}{2} = \\frac{60}{2} = 30",
          "explanation": "On a cumulative frequency curve the median is estimated at height $\\frac{n}{2}$, halfway up the total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read across from a cumulative frequency of 30.",
          "workingLatex": "\\text{horizontal line at cf} = 30 \\text{ meets the curve}",
          "explanation": "Starting at $30$ on the vertical axis, we move across to the curve; this locates the median point on the graph.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read down to the rainfall axis.",
          "workingLatex": "Q_2 \\approx 3.7",
          "explanation": "Dropping straight down to the rainfall axis gives an estimate of about $3.7$ mm for the median.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with linear interpolation.",
          "workingLatex": "2 + \\frac{30 - 18}{32 - 18} \\times 2 = 2 + \\frac{12}{14} \\times 2 = 3.71",
          "explanation": "The $30$th day lies in the class $2 \\le r < 4$; interpolating within it confirms the graph read-off of about $3.7$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "Q_2 \\approx 3.7\\ \\text{mm}",
          "explanation": "So on a typical day about half of the $60$ days had under $3.7$ mm of rain, a modest amount reflecting a fairly dry month.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median daily rainfall is approximately $3.7$ mm."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cumulative-frequency",
      "quartiles",
      "interquartile-range",
      "sunshine"
    ],
    "questionText": "The cumulative frequency graph shows the daily total sunshine (hours) for $80$ days at Leuchars in the large data set, grouped as below. $\\begin{array}{c|c} \\text{Sunshine } s\\ (\\text{hours}) & \\text{Frequency} \\\\ \\hline 0 \\le s < 3 & 8 \\\\ 3 \\le s < 6 & 16 \\\\ 6 \\le s < 9 & 24 \\\\ 9 \\le s < 12 & 20 \\\\ 12 \\le s < 15 & 12 \\end{array}$ Use the graph to estimate the lower quartile, the upper quartile and hence the interquartile range.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 3,
          "cf": 8
        },
        {
          "x": 6,
          "cf": 24
        },
        {
          "x": 9,
          "cf": 48
        },
        {
          "x": 12,
          "cf": 68
        },
        {
          "x": 15,
          "cf": 80
        }
      ],
      "origin": 0,
      "xAxisLabel": "daily total sunshine (hours)",
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
      "caption": "Cumulative frequency graph of daily sunshine at Leuchars with quartile guides",
      "alt": "Rising curve to 80, with dashed guides at cumulative frequency 20 and 60"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the total from the top of the curve.",
          "workingLatex": "n = 80",
          "explanation": "The curve levels off at $80$, the number of days. Every quartile position is a fraction of this total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the position of the lower quartile.",
          "workingLatex": "\\frac{n}{4} = \\frac{80}{4} = 20",
          "explanation": "On a cumulative frequency graph the lower quartile is read at height $\\frac{n}{4}$, a quarter of the way up the total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the lower quartile from the graph.",
          "workingLatex": "3 + \\frac{20 - 8}{24 - 8} \\times 3 = 3 + \\frac{12}{16} \\times 3 = 5.25,\\quad Q_1 \\approx 5.3",
          "explanation": "Reading across at $20$ and down to the axis gives about $5.3$ hours; interpolating within the class $3 \\le s < 6$ confirms this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the position of the upper quartile.",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 80}{4} = 60",
          "explanation": "The upper quartile is read at height $\\frac{3n}{4}$, three quarters of the way up the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read the upper quartile from the graph.",
          "workingLatex": "9 + \\frac{60 - 48}{68 - 48} \\times 3 = 9 + \\frac{12}{20} \\times 3 = 10.8,\\quad Q_3 \\approx 10.8",
          "explanation": "Reading across at $60$ and down gives about $10.8$ hours; interpolating within the class $9 \\le s < 12$ agrees.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 10.8 - 5.3 = 5.5",
          "explanation": "The IQR is the width of the middle half of the days. Subtracting the quartiles gives about $5.5$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the quartiles.",
          "workingLatex": "25\\% < 5.3\\ \\text{h},\\quad 25\\% > 10.8\\ \\text{h}",
          "explanation": "A quarter of the days had under about $5.3$ hours of sunshine and a quarter had over about $10.8$ hours, so the middle half sat between these figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the spread.",
          "workingLatex": "\\text{IQR} \\approx 5.5\\ \\text{h}",
          "explanation": "An IQR of about $5.5$ hours shows a fairly wide variation in sunshine among the middle half of the days, typical of a changeable coastal climate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "Q_1 \\approx 5.3,\\ Q_3 \\approx 10.8,\\ \\text{IQR} \\approx 5.5",
          "explanation": "Collecting the results gives the two quartiles and the interquartile range, all in hours of sunshine.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1 \\approx 5.3$ hours, $Q_3 \\approx 10.8$ hours and $\\text{IQR} \\approx 5.5$ hours."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cumulative-frequency",
      "threshold",
      "windspeed"
    ],
    "questionText": "The cumulative frequency graph shows the daily mean windspeed (knots) for $100$ days at Leeming in the large data set, grouped as below. $\\begin{array}{c|c} \\text{Windspeed } w\\ (\\text{knots}) & \\text{Frequency} \\\\ \\hline 0 \\le w < 5 & 12 \\\\ 5 \\le w < 10 & 30 \\\\ 10 \\le w < 15 & 33 \\\\ 15 \\le w < 20 & 18 \\\\ 20 \\le w < 25 & 7 \\end{array}$ Use the graph to estimate the number of days on which the daily mean windspeed exceeded $17$ knots.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 5,
          "cf": 12
        },
        {
          "x": 10,
          "cf": 42
        },
        {
          "x": 15,
          "cf": 75
        },
        {
          "x": 20,
          "cf": 93
        },
        {
          "x": 25,
          "cf": 100
        }
      ],
      "origin": 0,
      "xAxisLabel": "daily mean windspeed (knots)",
      "yAxisLabel": "cumulative frequency",
      "caption": "Cumulative frequency graph of daily mean windspeed at Leeming",
      "alt": "Rising curve to 100 over windspeed from 0 to 25 knots"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the approach.",
          "workingLatex": "\\text{days above }17 = n - (\\text{days at or below }17)",
          "explanation": "The graph gives running totals up to a value, so we first find how many days were at or below $17$ knots, then subtract from the total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the total from the graph.",
          "workingLatex": "n = 100",
          "explanation": "The curve tops out at $100$, the number of days. This is the total we subtract from.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Go up from 17 knots on the horizontal axis.",
          "workingLatex": "w = 17 \\rightarrow \\text{read up to the curve}",
          "explanation": "To count days at or below $17$ knots we start at $17$ on the windspeed axis and read vertically up to the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read across to the cumulative frequency and check by interpolation.",
          "workingLatex": "75 + \\frac{17 - 15}{20 - 15} \\times (93 - 75) = 75 + \\frac{2}{5} \\times 18 = 82.2",
          "explanation": "From the curve at $17$ knots we read across to a cumulative frequency of about $82$; interpolating within the class $15 \\le w < 20$ confirms it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the days at or below the threshold.",
          "workingLatex": "\\text{days} \\le 17 \\approx 82",
          "explanation": "So about $82$ of the days had a mean windspeed of $17$ knots or less.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract from the total.",
          "workingLatex": "100 - 82 = 18",
          "explanation": "The remaining days are those above $17$ knots, giving about $18$ days.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the estimate in context.",
          "workingLatex": "\\approx 18 \\text{ windy days out of } 100",
          "explanation": "Roughly one day in six had a mean windspeed above $17$ knots, a moderately breezy day, at this inland station.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the nature of the answer.",
          "workingLatex": "\\text{estimate from grouped data}",
          "explanation": "Because we only have grouped classes and a read-off from a curve, the figure is an estimate rather than an exact count.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{about } 18 \\text{ days}",
          "explanation": "We conclude that around $18$ days had a daily mean windspeed exceeding $17$ knots.",
          "diagram": null
        }
      ],
      "finalAnswer": "About $18$ days had a daily mean windspeed exceeding $17$ knots."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cumulative-frequency",
      "percentile",
      "gust"
    ],
    "questionText": "The cumulative frequency graph shows the daily maximum gust (knots) for $120$ days at Leuchars in the large data set, grouped as below. $\\begin{array}{c|c} \\text{Gust } g\\ (\\text{knots}) & \\text{Frequency} \\\\ \\hline 10 \\le g < 20 & 9 \\\\ 20 \\le g < 30 & 27 \\\\ 30 \\le g < 40 & 39 \\\\ 40 \\le g < 50 & 30 \\\\ 50 \\le g < 60 & 15 \\end{array}$ Use the graph to estimate the $90$th percentile of the daily maximum gust and interpret it.",
    "questionDiagram": {
      "kind": "cumulativeFrequency",
      "points": [
        {
          "x": 20,
          "cf": 9
        },
        {
          "x": 30,
          "cf": 36
        },
        {
          "x": 40,
          "cf": 75
        },
        {
          "x": 50,
          "cf": 105
        },
        {
          "x": 60,
          "cf": 120
        }
      ],
      "origin": 10,
      "xAxisLabel": "daily maximum gust (knots)",
      "yAxisLabel": "cumulative frequency",
      "readoffs": [
        {
          "cf": 108,
          "label": "P_{90}"
        }
      ],
      "caption": "Cumulative frequency graph of daily maximum gust at Leuchars with a 90th-percentile guide",
      "alt": "Rising curve to 120, with a dashed guide at cumulative frequency 108"
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the total from the graph.",
          "workingLatex": "n = 120",
          "explanation": "The curve reaches $120$ at the top, the number of days. Percentile positions are fractions of this total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what the 90th percentile means.",
          "workingLatex": "P_{90} = \\text{value with } 90\\% \\text{ of days below it}",
          "explanation": "The $90$th percentile is the gust below which $90\\%$ of the days fall, so we read at height equal to $90\\%$ of the total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position on the cumulative frequency axis.",
          "workingLatex": "0.90 \\times 120 = 108",
          "explanation": "Ninety percent of $120$ days is $108$, so we read the graph at a cumulative frequency of $108$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read across at 108 to the curve.",
          "workingLatex": "\\text{horizontal line at cf} = 108 \\text{ meets the curve}",
          "explanation": "Starting at $108$ on the vertical axis, we move across to the curve to locate the $90$th-percentile point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read down and check by interpolation.",
          "workingLatex": "50 + \\frac{108 - 105}{120 - 105} \\times 10 = 50 + \\frac{3}{15} \\times 10 = 52",
          "explanation": "Dropping to the gust axis gives about $52$ knots; interpolating within the class $50 \\le g < 60$ confirms the read-off.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the percentile.",
          "workingLatex": "P_{90} \\approx 52\\ \\text{knots}",
          "explanation": "So the $90$th percentile of the daily maximum gust is about $52$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the value.",
          "workingLatex": "90\\% \\text{ of days} < 52\\ \\text{knots},\\ 10\\% > 52\\ \\text{knots}",
          "explanation": "On $90\\%$ of the days the strongest gust stayed below about $52$ knots, so only the windiest $10\\%$ of days exceeded this.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Relate the interpretation to the count of days.",
          "workingLatex": "120 - 108 = 12 \\text{ days above } P_{90}",
          "explanation": "That windiest tenth corresponds to about $12$ of the $120$ days having a maximum gust over $52$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "P_{90} \\approx 52\\ \\text{knots}",
          "explanation": "We conclude the $90$th percentile is about $52$ knots, marking off the strongest-gust days at this exposed coastal station.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $90$th percentile is approximately $52$ knots: about $90\\%$ of days had a maximum gust below this, and only the windiest $10\\%$ (around $12$ days) exceeded it."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "box-plot",
      "outliers",
      "pressure"
    ],
    "questionText": "For a summer month at Camborne the daily mean pressure (hPa) had lower quartile $Q_1 = 1008$, median $Q_2 = 1014$ and upper quartile $Q_3 = 1019$. Two low-pressure days recorded $995$ hPa and $989$ hPa. Using the rule that a value is an outlier if it lies more than $1.5 \\times \\text{IQR}$ beyond the nearer quartile, determine whether each of these days is an outlier, and comment on what should be done with any outlier.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the quartiles.",
          "workingLatex": "Q_1 = 1008,\\quad Q_3 = 1019",
          "explanation": "The outlier fences are built from the quartiles, so we note them first. The two low readings are near the bottom, so the lower fence is what matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 1019 - 1008 = 11",
          "explanation": "The IQR is the spread of the middle half of the days; it sets the scale for how far a value must be from a quartile to count as unusual.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale the interquartile range.",
          "workingLatex": "1.5 \\times \\text{IQR} = 1.5 \\times 11 = 16.5",
          "explanation": "The rule uses $1.5\\times\\text{IQR}$ as the allowed distance beyond a quartile, so we work out this distance of $16.5$ hPa.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the lower fence.",
          "workingLatex": "Q_1 - 1.5 \\times \\text{IQR} = 1008 - 16.5 = 991.5",
          "explanation": "Any day below $991.5$ hPa is more than $1.5\\times\\text{IQR}$ below the lower quartile and so is flagged as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the upper fence for completeness.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 1019 + 16.5 = 1035.5",
          "explanation": "The upper fence is $1035.5$ hPa; both low-pressure days are well below the median, so only the lower fence can catch them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the 995 hPa day.",
          "workingLatex": "995 > 991.5 \\Rightarrow \\text{not an outlier}",
          "explanation": "Since $995$ hPa is above the lower fence of $991.5$ hPa, it lies within the allowed range and is not classed as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the 989 hPa day.",
          "workingLatex": "989 < 991.5 \\Rightarrow \\text{outlier}",
          "explanation": "The reading of $989$ hPa is below the lower fence, so it is more than $1.5\\times\\text{IQR}$ below $Q_1$ and is flagged as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on handling the outlier.",
          "workingLatex": "\\text{check, do not delete automatically}",
          "explanation": "An outlier should not be removed just for being extreme. We first check for a recording or transcription error; a genuine deep low (a storm) is real weather and should be kept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "995\\ \\text{hPa: keep};\\quad 989\\ \\text{hPa: outlier, investigate}",
          "explanation": "So $995$ hPa is an ordinary low-pressure day, while $989$ hPa is an outlier worth checking before deciding whether it reflects a genuine storm.",
          "diagram": null
        }
      ],
      "finalAnswer": "The lower fence is $991.5$ hPa. The $995$ hPa day is not an outlier, but the $989$ hPa day is. An outlier should be checked for error rather than deleted automatically; a genuine storm-driven low should be retained."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cumulative-frequency",
      "interpolation",
      "median",
      "humidity"
    ],
    "questionText": "The daily mean relative humidity ($\\%$) was grouped for $50$ days at Hurn in the large data set. $\\begin{array}{c|c} \\text{Humidity } h\\ (\\%) & \\text{Frequency} \\\\ \\hline 70 \\le h < 75 & 4 \\\\ 75 \\le h < 80 & 11 \\\\ 80 \\le h < 85 & 16 \\\\ 85 \\le h < 90 & 13 \\\\ 90 \\le h < 95 & 6 \\end{array}$ Complete the cumulative frequency column and use linear interpolation to estimate the median daily mean relative humidity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of cumulative frequency.",
          "workingLatex": "\\text{running total up to each upper boundary}",
          "explanation": "The cumulative frequency at a boundary counts every day with humidity below that boundary, which is what we interpolate within to find the median.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Build the cumulative frequency column.",
          "workingLatex": "\\begin{array}{c|c} \\text{upper } h & \\text{cf} \\\\ \\hline 75 & 4 \\\\ 80 & 15 \\\\ 85 & 31 \\\\ 90 & 44 \\\\ 95 & 50 \\end{array}",
          "explanation": "Adding each frequency to the previous total gives $4$, $15$, $31$, $44$ and $50$ at the successive upper boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm the total.",
          "workingLatex": "n = 50",
          "explanation": "The final cumulative frequency is $50$, matching the number of days, so the column is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the median position.",
          "workingLatex": "\\frac{n}{2} = \\frac{50}{2} = 25",
          "explanation": "For grouped data the median is estimated at the $\\frac{n}{2}$ position, here the $25$th value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the class containing the median.",
          "workingLatex": "15 < 25 \\le 31 \\Rightarrow 80 \\le h < 85",
          "explanation": "The running total passes $25$ between cumulative frequencies $15$ (at $80$) and $31$ (at $85$), so the median lies in the class $80 \\le h < 85$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up linear interpolation.",
          "workingLatex": "Q_2 = 80 + \\frac{\\frac{n}{2} - F}{f} \\times c",
          "explanation": "We take the lower boundary $80$ and add a fraction of the class width, where $F$ is the cumulative frequency before the class, $f$ its frequency and $c$ its width.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values.",
          "workingLatex": "Q_2 = 80 + \\frac{25 - 15}{16} \\times 5",
          "explanation": "Here $F = 15$, the class frequency $f = 16$ and the width $c = 5$, and we need to reach the $25$th value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate.",
          "workingLatex": "Q_2 = 80 + \\frac{10}{16} \\times 5 = 80 + 3.125 = 83.1",
          "explanation": "Working out the fraction of the class gives about $83.1\\%$ for the median humidity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "Q_2 \\approx 83.1\\%",
          "explanation": "So on a typical day about half of the $50$ days had a mean relative humidity below roughly $83\\%$, a fairly damp coastal climate.",
          "diagram": null
        }
      ],
      "finalAnswer": "The cumulative frequencies are $4,\\ 15,\\ 31,\\ 44,\\ 50$, and the estimated median is $Q_2 \\approx 83.1\\%$."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "box-plot",
      "comparison",
      "skewness",
      "sunshine"
    ],
    "questionText": "The five-number summaries below give the daily total sunshine (hours) at Leeming for the same summer month in $1987$ and in $2015$ from the large data set. $\\begin{array}{c|ccccc} & \\text{min} & Q_1 & Q_2 & Q_3 & \\text{max} \\\\ \\hline 1987 & 0.2 & 3.5 & 5.0 & 8.5 & 13.0 \\\\ 2015 & 0.5 & 4.2 & 7.2 & 9.0 & 12.5 \\end{array}$ Compare the sunshine in the two years, referring to location, spread and the skewness of each distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off both summaries.",
          "workingLatex": "1987:\\ Q_1 = 3.5,\\ Q_2 = 5.0,\\ Q_3 = 8.5;\\quad 2015:\\ Q_1 = 4.2,\\ Q_2 = 7.2,\\ Q_3 = 9.0",
          "explanation": "Laying the two summaries side by side lets us compare location, spread and shape on equal terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the medians as a measure of location.",
          "workingLatex": "Q_2:\\ 7.2 > 5.0",
          "explanation": "The median is a resistant measure of location. In $2015$ the median was $7.2$ hours against $5.0$ hours in $1987$, so the days were typically sunnier in $2015$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the interquartile range in 1987.",
          "workingLatex": "\\text{IQR}_{1987} = 8.5 - 3.5 = 5.0",
          "explanation": "The IQR measures the spread of the middle half of the days and ignores the extremes, giving a stable comparison of variability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the interquartile range in 2015.",
          "workingLatex": "\\text{IQR}_{2015} = 9.0 - 4.2 = 4.8",
          "explanation": "Computing the same measure for $2015$ allows a direct like-for-like comparison of the spread.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the spreads.",
          "workingLatex": "5.0 > 4.8",
          "explanation": "The two IQRs are close, with $1987$ marginally larger, so the middle-half sunshine was of similar spread in both years, very slightly more variable in $1987$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the skewness of 1987.",
          "workingLatex": "Q_2 - Q_1 = 1.5,\\quad Q_3 - Q_2 = 3.5 \\Rightarrow \\text{positive skew}",
          "explanation": "The upper quarter of the box is longer than the lower quarter, so the $1987$ distribution has a longer tail towards high sunshine — positive skew.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the skewness of 2015.",
          "workingLatex": "Q_2 - Q_1 = 3.0,\\quad Q_3 - Q_2 = 1.8 \\Rightarrow \\text{negative skew}",
          "explanation": "Here the lower quarter of the box is longer, so the $2015$ distribution has a longer tail towards low sunshine — negative skew.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the shapes in context.",
          "workingLatex": "1987:\\ \\text{many dull days, some very sunny};\\ 2015:\\ \\text{mostly sunny, some dull}",
          "explanation": "The positive skew in $1987$ reflects a cluster of dull days with a few bright ones, while the negative skew in $2015$ reflects mostly sunny days with a few dull exceptions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "2015 \\text{ sunnier};\\ \\text{similar spread};\\ \\text{opposite skew}",
          "explanation": "Overall $2015$ was sunnier on average with a similar spread, and the two years were skewed in opposite directions — positively in $1987$ and negatively in $2015$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median was higher in $2015$ ($7.2$ h vs $5.0$ h), so $2015$ was typically sunnier. The interquartile ranges were similar ($5.0$ h vs $4.8$ h). The $1987$ distribution was positively skewed (a longer tail of very sunny days) while $2015$ was negatively skewed (a longer tail of dull days)."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "regression",
      "temperature",
      "sunshine",
      "prediction"
    ],
    "questionText": "An extract from the large data set gives the daily mean temperature $x$ (in $\\degree\\text{C}$) and the daily total sunshine $y$ (in hours) at Heathrow for $8$ days in a June. The scatter diagram is shown, and the summary statistics are $\\bar{x} = 18$, $\\bar{y} = 9$, $S_{xx} = 90$ and $S_{xy} = 63$. (a) Find the equation of the least-squares regression line of $y$ on $x$. (b) Use your line to estimate the daily total sunshine on a day when the mean temperature is $22\\,\\degree\\text{C}$, and comment on the reliability of your estimate.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 13,
          "y": 6
        },
        {
          "x": 15,
          "y": 7
        },
        {
          "x": 16,
          "y": 8
        },
        {
          "x": 17,
          "y": 8
        },
        {
          "x": 19,
          "y": 10
        },
        {
          "x": 20,
          "y": 10
        },
        {
          "x": 21,
          "y": 11
        },
        {
          "x": 23,
          "y": 13
        }
      ],
      "line": {
        "a": -3.6,
        "b": 0.7
      },
      "predict": {
        "x": 22,
        "y": 11.8,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "daily mean temperature (\\degree C)",
      "yAxisLabel": "daily total sunshine (hours)",
      "caption": "Heathrow: temperature against sunshine, with the regression line",
      "alt": "Scatter diagram: eight points rise from lower-left to upper-right and lie close to the drawn regression line, with a dashed read-off at temperature 22."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the regression line looks like.",
          "workingLatex": "\\hat{y} = a + bx",
          "explanation": "The least-squares regression line of $y$ on $x$ is a straight line, so it has the form $\\hat{y} = a + bx$. Our whole task is to pin down the two numbers $a$ (the intercept) and $b$ (the gradient).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the formula for the gradient.",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "The gradient measures how much $y$ changes per unit of $x$. The least-squares value comes from dividing the $x$-$y$ co-variation $S_{xy}$ by the spread of the $x$-values $S_{xx}$, both of which we are given.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the summary statistics for the gradient.",
          "workingLatex": "b = \\dfrac{63}{90}",
          "explanation": "We simply read $S_{xy} = 63$ and $S_{xx} = 90$ from the question and slot them in, no further calculation needed at this point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient.",
          "workingLatex": "b = 0.7",
          "explanation": "A gradient of $0.7$ means that, on average, each extra degree of temperature is associated with about $0.7$ more hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the formula for the intercept.",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The regression line is guaranteed to pass through the mean point $(\\bar{x}, \\bar{y})$. Rearranging $\\bar{y} = a + b\\bar{x}$ gives the intercept directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and evaluate the intercept.",
          "workingLatex": "a = 9 - 0.7 \\times 18 = 9 - 12.6 = -3.6",
          "explanation": "Putting in $\\bar{y} = 9$, $b = 0.7$ and $\\bar{x} = 18$ gives $a = -3.6$. The negative value is fine here: it is just where the fitted line would cross the axis if extended back, not a real reading.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the regression equation.",
          "workingLatex": "\\hat{y} = -3.6 + 0.7x",
          "explanation": "Combining the gradient and intercept gives the full equation of the line, which we can now use to make predictions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the line passes through the mean point.",
          "workingLatex": "-3.6 + 0.7 \\times 18 = 9 = \\bar{y}",
          "explanation": "A quick sanity check: substituting $\\bar{x} = 18$ should return $\\bar{y} = 9$. It does, confirming the coefficients are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the required temperature for part (b).",
          "workingLatex": "\\hat{y} = -3.6 + 0.7 \\times 22",
          "explanation": "To estimate the sunshine on a $22\\,\\degree$C day, we put $x = 22$ into the equation of the line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the prediction.",
          "workingLatex": "\\hat{y} = -3.6 + 15.4 = 11.8",
          "explanation": "The line predicts about $11.8$ hours of sunshine on a day with mean temperature $22\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Judge the reliability of the estimate.",
          "workingLatex": "13 \\le 22 \\le 23 \\;\\Rightarrow\\; \\text{interpolation}",
          "explanation": "The value $x = 22$ sits inside the range of temperatures used to build the line (from $13$ to $23\\,\\degree$C), so we are interpolating. Predictions inside the data range are reliable, so this estimate can be trusted.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\hat{y} = -3.6 + 0.7x$. (b) At $x = 22$, $\\hat{y} = 11.8$ hours of sunshine. Since $22\\,\\degree$C lies within the range of the data ($13$ to $23\\,\\degree$C), this is interpolation, so the estimate is reliable."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "regression",
      "pressure",
      "rainfall",
      "extrapolation"
    ],
    "questionText": "For $9$ days at Leeming an extract from the large data set records the daily mean pressure $x$ (in $\\text{hPa}$) and the daily total rainfall $y$ (in $\\text{mm}$). The scatter diagram is shown, and the summary statistics are $\\bar{x} = 1012$, $\\bar{y} = 6$, $S_{xx} = 250$ and $S_{xy} = -400$. (a) Find the equation of the least-squares regression line of $y$ on $x$. (b) Estimate the rainfall when the pressure is $1008\\ \\text{hPa}$. (c) The forecaster also wants the rainfall when the pressure is $990\\ \\text{hPa}$. Find this estimate and comment on how much you would trust each of your two answers.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1005,
          "y": 17
        },
        {
          "x": 1006,
          "y": 16
        },
        {
          "x": 1007,
          "y": 14
        },
        {
          "x": 1009,
          "y": 11
        },
        {
          "x": 1010,
          "y": 9
        },
        {
          "x": 1011,
          "y": 8
        },
        {
          "x": 1013,
          "y": 5
        },
        {
          "x": 1014,
          "y": 3
        },
        {
          "x": 1015,
          "y": 1
        }
      ],
      "line": {
        "a": 1625.2,
        "b": -1.6
      },
      "predict": {
        "x": 1008,
        "y": 12.4,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "daily mean pressure (hPa)",
      "yAxisLabel": "daily total rainfall (mm)",
      "caption": "Leeming: pressure against rainfall, with the regression line",
      "alt": "Scatter diagram: nine points fall from upper-left to lower-right close to the drawn regression line, with a dashed read-off at pressure 1008."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line.",
          "workingLatex": "\\hat{y} = a + bx",
          "explanation": "We are fitting a straight line, $\\hat{y} = a + bx$, to predict rainfall $y$ from pressure $x$. The job is to find the gradient $b$ and the intercept $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the gradient.",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{-400}{250} = -1.6",
          "explanation": "Dividing the co-variation by the $x$-spread gives $b = -1.6$. The negative sign shows that higher pressure goes with less rainfall, which matches settled, dry high-pressure weather.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the intercept formula.",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "Because the line passes through the mean point $(\\bar{x}, \\bar{y})$, the intercept is found by rearranging $\\bar{y} = a + b\\bar{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the intercept.",
          "workingLatex": "a = 6 - (-1.6) \\times 1012",
          "explanation": "We put in $\\bar{y} = 6$, $b = -1.6$ and $\\bar{x} = 1012$. Take care with the double negative: subtracting a negative adds it back on.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the intercept.",
          "workingLatex": "a = 6 + 1619.2 = 1625.2",
          "explanation": "The large intercept is normal here because the pressures are around $1012$; the line only has to make sense near those values, not at $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the regression equation.",
          "workingLatex": "\\hat{y} = 1625.2 - 1.6x",
          "explanation": "This is the fitted line. Its steep negative gradient means rainfall falls by $1.6\\ \\text{mm}$ for each extra hPa of pressure.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check it passes through the mean point.",
          "workingLatex": "1625.2 - 1.6 \\times 1012 = 6 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 1012$ returns $\\bar{y} = 6$, confirming the coefficients are consistent before we predict with them.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Predict rainfall at 1008 hPa (part b).",
          "workingLatex": "\\hat{y} = 1625.2 - 1.6 \\times 1008 = 1625.2 - 1612.8 = 12.4",
          "explanation": "Putting $x = 1008$ into the line gives a predicted rainfall of $12.4\\ \\text{mm}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the first prediction.",
          "workingLatex": "1005 \\le 1008 \\le 1015 \\;\\Rightarrow\\; \\text{interpolation}",
          "explanation": "The pressure $1008\\ \\text{hPa}$ lies inside the observed range ($1005$ to $1015$), so this is interpolation and can be trusted.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Predict rainfall at 990 hPa (part c).",
          "workingLatex": "\\hat{y} = 1625.2 - 1.6 \\times 990 = 1625.2 - 1584 = 41.2",
          "explanation": "Putting $x = 990$ into the line gives a predicted rainfall of $41.2\\ \\text{mm}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Classify the second prediction.",
          "workingLatex": "990 < 1005 \\;\\Rightarrow\\; \\text{extrapolation}",
          "explanation": "The pressure $990\\ \\text{hPa}$ is well below the lowest pressure in the data ($1005$), so this is extrapolation: we are using the line far outside the range where it was built.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the reliability of the two estimates.",
          "workingLatex": "\\text{trust } 12.4 \\text{ mm}, \\;\\text{doubt } 41.2 \\text{ mm}",
          "explanation": "There is no guarantee the straight-line pattern continues to such low pressures, so the $41.2\\ \\text{mm}$ figure is unreliable, whereas the $12.4\\ \\text{mm}$ figure inside the data range is dependable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\hat{y} = 1625.2 - 1.6x$. (b) At $x = 1008$, $\\hat{y} = 12.4\\ \\text{mm}$. (c) At $x = 990$, $\\hat{y} = 41.2\\ \\text{mm}$. The first is interpolation (within $1005$–$1015\\ \\text{hPa}$) so it is reliable; the second is extrapolation (well below the data) so it should not be trusted."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "regression",
      "summary-statistics",
      "temperature",
      "sunshine"
    ],
    "questionText": "For $n = 10$ days at Hurn an extract from the large data set gives the daily mean temperature $x$ (in $\\degree\\text{C}$) and the daily total sunshine $y$ (in hours), with $\\sum x = 170$, $\\sum y = 95$, $\\sum x^2 = 3060$ and $\\sum xy = 1717$. (a) Find $S_{xx}$ and $S_{xy}$. (b) Hence find the equation of the least-squares regression line of $y$ on $x$. (c) Estimate the daily total sunshine when the mean temperature is $18\\,\\degree\\text{C}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan.",
          "workingLatex": "\\hat{y} = a + bx",
          "explanation": "We want the line $\\hat{y} = a + bx$, but this time we are given raw sums rather than $S_{xx}$ and $S_{xy}$ directly, so we must build those first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the formula for S_xx.",
          "workingLatex": "S_{xx} = \\sum x^2 - \\dfrac{(\\sum x)^2}{n}",
          "explanation": "$S_{xx}$ measures the total squared spread of the $x$-values about their mean. This computing formula gets it straight from the sums we already have.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate S_xx.",
          "workingLatex": "S_{xx} = 3060 - \\dfrac{170^2}{10} = 3060 - 2890 = 170",
          "explanation": "Substituting $\\sum x^2 = 3060$, $\\sum x = 170$ and $n = 10$ gives $S_{xx} = 170$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the formula for S_xy.",
          "workingLatex": "S_{xy} = \\sum xy - \\dfrac{\\sum x \\, \\sum y}{n}",
          "explanation": "$S_{xy}$ captures how $x$ and $y$ vary together. A positive value means they tend to rise together; a negative value means they move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate S_xy.",
          "workingLatex": "S_{xy} = 1717 - \\dfrac{170 \\times 95}{10} = 1717 - 1615 = 102",
          "explanation": "Substituting the sums gives $S_{xy} = 102$. It is positive, so warmer days tend to be sunnier here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the two means.",
          "workingLatex": "\\bar{x} = \\dfrac{170}{10} = 17, \\quad \\bar{y} = \\dfrac{95}{10} = 9.5",
          "explanation": "We need the means to locate the intercept, since the line runs through $(\\bar{x}, \\bar{y})$. Dividing each total by $n = 10$ gives them.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the gradient.",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{102}{170} = 0.6",
          "explanation": "The gradient is the co-variation divided by the $x$-spread: $b = 0.6$, meaning about $0.6$ extra hours of sunshine per extra degree of temperature.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the intercept.",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 9.5 - 0.6 \\times 17 = 9.5 - 10.2 = -0.7",
          "explanation": "Using $a = \\bar{y} - b\\bar{x}$ with the means and gradient gives $a = -0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the regression equation.",
          "workingLatex": "\\hat{y} = -0.7 + 0.6x",
          "explanation": "Assembling the intercept and gradient gives the least-squares line for part (b).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check it passes through the mean point.",
          "workingLatex": "-0.7 + 0.6 \\times 17 = 9.5 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 17$ returns $\\bar{y} = 9.5$, which confirms the coefficients are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict the sunshine at 18 degrees (part c).",
          "workingLatex": "\\hat{y} = -0.7 + 0.6 \\times 18 = -0.7 + 10.8 = 10.1",
          "explanation": "Putting $x = 18$ into the line gives about $10.1$ hours of sunshine, a sensible interpolation just above the mean temperature.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $S_{xx} = 170$ and $S_{xy} = 102$. (b) $\\hat{y} = -0.7 + 0.6x$. (c) At $x = 18$, $\\hat{y} = 10.1$ hours of sunshine."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "correlation",
      "humidity",
      "visibility",
      "describe"
    ],
    "questionText": "An extract from the large data set at Beijing records, for $10$ days, the daily mean relative humidity $x$ (in $\\%$) and the daily mean visibility $y$ (in $\\text{dm}$, decametres). The scatter diagram is shown. (a) State which variable it is natural to treat as the explanatory variable. (b) Describe the type and strength of the correlation. (c) Interpret what the diagram suggests about visibility on humid days.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 52,
          "y": 3600
        },
        {
          "x": 58,
          "y": 3300
        },
        {
          "x": 63,
          "y": 3100
        },
        {
          "x": 68,
          "y": 2700
        },
        {
          "x": 72,
          "y": 2500
        },
        {
          "x": 77,
          "y": 2200
        },
        {
          "x": 82,
          "y": 1900
        },
        {
          "x": 86,
          "y": 1600
        },
        {
          "x": 90,
          "y": 1400
        },
        {
          "x": 94,
          "y": 1100
        }
      ],
      "xAxisLabel": "daily mean relative humidity (\\%)",
      "yAxisLabel": "daily mean visibility (dm)",
      "caption": "Beijing: relative humidity against visibility",
      "alt": "Scatter diagram: ten points fall steadily from upper-left to lower-right and lie fairly close to a straight line."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which variable explains which.",
          "workingLatex": "\\text{humidity may affect visibility, not the reverse}",
          "explanation": "The explanatory variable is the one we think does the influencing. Moisture in the air (humidity) can create haze that reduces how far you can see, whereas visibility itself does not change the humidity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the explanatory variable (part a).",
          "workingLatex": "x = \\text{humidity (explanatory)}, \\quad y = \\text{visibility (response)}",
          "explanation": "So humidity is the explanatory variable on the horizontal axis and visibility is the response variable on the vertical axis, which is exactly how the diagram is drawn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the direction of the points.",
          "workingLatex": "\\text{points fall from upper-left to lower-right}",
          "explanation": "Scanning the plot from left to right, the points drop as the humidity increases. A downward trend is the hallmark of negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the type of correlation.",
          "workingLatex": "x \\uparrow \\;\\Rightarrow\\; y \\downarrow \\;\\Rightarrow\\; \\text{negative}",
          "explanation": "As humidity rises, visibility tends to fall, so the two variables move in opposite directions. That is negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Judge how tightly the points cluster.",
          "workingLatex": "\\text{points lie fairly close to a straight line}",
          "explanation": "The strength is measured by how closely the points hug a straight line. Here they sit neatly along the downward trend with only a little scatter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide the strength.",
          "workingLatex": "\\text{little scatter} \\;\\Rightarrow\\; \\text{strong}",
          "explanation": "Because the spread about the trend is small, knowing the humidity would let you estimate visibility quite well, so the correlation is strong.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full description (part b).",
          "workingLatex": "\\text{strong negative correlation}",
          "explanation": "Combining the direction (negative) and the tightness (strong) gives the complete description the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the pattern in context (part c).",
          "workingLatex": "\\text{more humid days} \\;\\rightarrow\\; \\text{lower visibility}",
          "explanation": "In plain terms, the more humid the day, the shorter the visibility tends to be. This fits the idea that damp, hazy air scatters light and makes distant objects harder to see.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add a note of caution.",
          "workingLatex": "\\text{association, not proof of cause}",
          "explanation": "The diagram shows an association: it is strong evidence of a link but, on its own, a scatter never proves that humidity is the sole cause of poor visibility.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Humidity $x$ is the explanatory variable. (b) The diagram shows strong negative correlation: the points fall steadily and lie fairly close to a straight line. (c) On more humid days the visibility tends to be lower, consistent with damp, hazy air reducing how far you can see."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "regression",
      "windspeed",
      "gust",
      "extrapolation"
    ],
    "questionText": "Using an extract from the large data set at Leuchars, the least-squares regression line of the daily maximum gust $y$ (in $\\text{knots}$) on the daily mean windspeed $x$ (in $\\text{knots}$) is found to be $\\hat{y} = 8 + 1.9x$. The mean windspeeds in the sample ranged from $5$ to $18\\ \\text{knots}$. (a) Interpret the gradient of the line. (b) Estimate the maximum gust on a day with mean windspeed $12\\ \\text{knots}$. (c) Estimate the maximum gust on a day with mean windspeed $30\\ \\text{knots}$, and comment on the reliability of each estimate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the roles of the variables.",
          "workingLatex": "y = \\text{max gust}, \\quad x = \\text{mean windspeed}",
          "explanation": "The line predicts the day's maximum gust from its mean windspeed. It is sensible for the steady wind to explain the gusts, so windspeed is the explanatory variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pick out the gradient.",
          "workingLatex": "b = 1.9",
          "explanation": "In $\\hat{y} = 8 + 1.9x$ the number multiplying $x$ is the gradient. It tells us how the gust responds to a change in the mean windspeed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the gradient (part a).",
          "workingLatex": "\\Delta x = 1 \\;\\Rightarrow\\; \\Delta \\hat{y} = 1.9",
          "explanation": "A gradient of $1.9$ means that for each extra knot of mean windspeed, the predicted maximum gust rises by about $1.9$ knots. Gusts climbing faster than the average wind is exactly what we would expect.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the windspeed for part (b).",
          "workingLatex": "\\hat{y} = 8 + 1.9 \\times 12",
          "explanation": "To estimate the gust when the mean windspeed is $12$ knots, we put $x = 12$ into the regression line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the first prediction.",
          "workingLatex": "\\hat{y} = 8 + 22.8 = 30.8",
          "explanation": "The line predicts a maximum gust of about $30.8$ knots on a day with mean windspeed $12$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the first prediction.",
          "workingLatex": "5 \\le 12 \\le 18 \\;\\Rightarrow\\; \\text{interpolation}",
          "explanation": "The windspeed $12$ knots lies inside the sampled range of $5$ to $18$ knots, so this is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the windspeed for part (c).",
          "workingLatex": "\\hat{y} = 8 + 1.9 \\times 30",
          "explanation": "Now we put $x = 30$ into the line to estimate the gust for a much windier day.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second prediction.",
          "workingLatex": "\\hat{y} = 8 + 57 = 65",
          "explanation": "The line predicts a maximum gust of $65$ knots when the mean windspeed is $30$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Classify the second prediction.",
          "workingLatex": "30 > 18 \\;\\Rightarrow\\; \\text{extrapolation}",
          "explanation": "A windspeed of $30$ knots is well above the largest value in the sample ($18$ knots), so this is extrapolation: the line is being stretched beyond the data it was built from.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the reliability of the two estimates.",
          "workingLatex": "\\text{trust } 30.8, \\;\\text{doubt } 65",
          "explanation": "We cannot be sure the straight-line relationship still holds at such high winds, so the $65$-knot figure is unreliable, while the $30.8$-knot figure inside the range can be trusted.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Each extra knot of mean windspeed raises the predicted maximum gust by about $1.9$ knots. (b) At $x = 12$, $\\hat{y} = 30.8$ knots (interpolation, reliable). (c) At $x = 30$, $\\hat{y} = 65$ knots, but this is extrapolation beyond the sampled range ($5$–$18$ knots), so it is unreliable."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "regression",
      "sunshine",
      "temperature",
      "interpret"
    ],
    "questionText": "An extract from the large data set at Perth (Australia) gives, for $8$ days, the daily total sunshine $x$ (in hours) and the daily mean temperature $y$ (in $\\degree\\text{C}$). The scatter diagram is shown, and the summary statistics are $\\bar{x} = 8$, $\\bar{y} = 18$, $S_{xx} = 40$ and $S_{xy} = 30$. (a) Find the equation of the least-squares regression line of $y$ on $x$. (b) Interpret the gradient in context. (c) Estimate the mean temperature on a day with $12$ hours of sunshine, and state whether this is a reliable estimate.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 3,
          "y": 14
        },
        {
          "x": 5,
          "y": 16
        },
        {
          "x": 6,
          "y": 17
        },
        {
          "x": 7,
          "y": 17
        },
        {
          "x": 9,
          "y": 19
        },
        {
          "x": 10,
          "y": 19
        },
        {
          "x": 11,
          "y": 20
        },
        {
          "x": 13,
          "y": 22
        }
      ],
      "line": {
        "a": 12,
        "b": 0.75
      },
      "predict": {
        "x": 12,
        "y": 21,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "daily total sunshine (hours)",
      "yAxisLabel": "daily mean temperature (\\degree C)",
      "caption": "Perth: sunshine against temperature, with the regression line",
      "alt": "Scatter diagram: eight points rise from lower-left to upper-right close to the drawn regression line, with a dashed read-off at 12 hours of sunshine."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the form of the line.",
          "workingLatex": "\\hat{y} = a + bx",
          "explanation": "We are predicting temperature $y$ from sunshine $x$, so we fit the straight line $\\hat{y} = a + bx$ and need to find $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the gradient.",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{30}{40} = 0.75",
          "explanation": "Dividing the co-variation $S_{xy} = 30$ by the $x$-spread $S_{xx} = 40$ gives the gradient $b = 0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the intercept formula.",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "The line passes through the mean point $(\\bar{x}, \\bar{y})$, so rearranging $\\bar{y} = a + b\\bar{x}$ gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the intercept.",
          "workingLatex": "a = 18 - 0.75 \\times 8 = 18 - 6 = 12",
          "explanation": "Substituting the means and gradient gives $a = 12$. Here the intercept is a plausible value: about $12\\,\\degree$C on a day with no sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the regression equation (part a).",
          "workingLatex": "\\hat{y} = 12 + 0.75x",
          "explanation": "Putting the coefficients together gives the least-squares line of temperature on sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check it passes through the mean point.",
          "workingLatex": "12 + 0.75 \\times 8 = 18 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 8$ returns $\\bar{y} = 18$, confirming the line is consistent before we use it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the gradient (part b).",
          "workingLatex": "\\Delta x = 1 \\;\\Rightarrow\\; \\Delta \\hat{y} = 0.75",
          "explanation": "A gradient of $0.75$ means that each extra hour of sunshine is associated with about a $0.75\\,\\degree$C rise in the predicted mean temperature. More sun warming the day is exactly what we would expect.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the sunshine hours for part (c).",
          "workingLatex": "\\hat{y} = 12 + 0.75 \\times 12",
          "explanation": "To estimate the temperature on a $12$-hour sunshine day, we put $x = 12$ into the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the prediction.",
          "workingLatex": "\\hat{y} = 12 + 9 = 21",
          "explanation": "The line predicts a mean temperature of about $21\\,\\degree$C on a day with $12$ hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Judge the reliability.",
          "workingLatex": "3 \\le 12 \\le 13 \\;\\Rightarrow\\; \\text{interpolation}",
          "explanation": "The value $x = 12$ lies inside the range of sunshine hours in the data ($3$ to $13$), so this is interpolation and the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\hat{y} = 12 + 0.75x$. (b) Each extra hour of sunshine raises the predicted mean temperature by about $0.75\\,\\degree$C. (c) At $x = 12$, $\\hat{y} = 21\\,\\degree$C; since $12$ hours lies within the data range ($3$–$13$ hours), this is interpolation, so the estimate is reliable."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "regression",
      "cloud-cover",
      "sunshine",
      "interpret"
    ],
    "questionText": "For an extract from the large data set at Camborne, the least-squares regression line of the daily total sunshine $y$ (in hours) on the daily mean cloud cover $x$ (in oktas) is $\\hat{y} = 13 - 1.4x$. The cloud-cover values in the sample ranged from $0$ to $8$ oktas. (a) Interpret the gradient of the line. (b) Interpret the intercept of the line, and say whether it is meaningful. (c) A student uses the line to estimate the sunshine when the cloud cover is $11$ oktas. Explain why this is not a sensible thing to do.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of a and b.",
          "workingLatex": "\\hat{y} = a + bx: \\; a = \\text{intercept}, \\; b = \\text{gradient}",
          "explanation": "In any line $\\hat{y} = a + bx$, the number $a$ is the predicted value of $y$ when $x = 0$, and $b$ is the change in $\\hat{y}$ for each one-unit rise in $x$. We read both from the equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Pick out the gradient.",
          "workingLatex": "b = -1.4",
          "explanation": "The number multiplying $x$ is $-1.4$, so this is the gradient. Its negative sign already tells us cloud and sunshine move oppositely.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the gradient (part a).",
          "workingLatex": "\\Delta x = 1 \\;\\Rightarrow\\; \\Delta \\hat{y} = -1.4",
          "explanation": "A gradient of $-1.4$ means that for each extra okta of cloud cover, the predicted daily sunshine falls by about $1.4$ hours. More cloud blocking the sun and cutting sunshine is exactly what we would expect.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Pick out the intercept.",
          "workingLatex": "a = 13",
          "explanation": "The constant term is $13$, so the intercept is $13$. This is the predicted sunshine when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the intercept (part b).",
          "workingLatex": "x = 0 \\;\\Rightarrow\\; \\hat{y} = 13",
          "explanation": "When the cloud cover is $0$ oktas (a completely clear sky) the line predicts about $13$ hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide whether the intercept is meaningful.",
          "workingLatex": "0 \\text{ oktas is inside } 0 \\le x \\le 8",
          "explanation": "Because $x = 0$ is actually within the sampled range of cloud cover, the intercept corresponds to a real, possible day. That makes it a meaningful figure here, unlike many intercepts that fall outside the data.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Look at the student's chosen value.",
          "workingLatex": "x = 11 \\text{ oktas}",
          "explanation": "The student wants a prediction at $11$ oktas. The first thing to notice is that the cloud-cover scale only runs from $0$ to $8$ oktas.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Point out the value is impossible.",
          "workingLatex": "11 > 8 \\;\\Rightarrow\\; \\text{off the okta scale}",
          "explanation": "Cloud cover is measured in oktas, meaning eighths of the sky, so the largest possible value is $8$. A reading of $11$ oktas cannot even occur, so predicting for it is meaningless.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the extrapolation objection.",
          "workingLatex": "11 > 8 \\;\\Rightarrow\\; \\text{extrapolation}",
          "explanation": "Even setting that aside, $11$ is beyond the largest sampled value ($8$ oktas), so it would be extrapolation, and there is no evidence the straight-line pattern continues there. Both reasons make the estimate unsafe.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Each extra okta of cloud cover lowers the predicted daily sunshine by about $1.4$ hours. (b) The intercept $13$ is the predicted sunshine at $0$ oktas (a clear sky); since $x = 0$ lies within the data, it is meaningful. (c) It is not sensible because $11$ oktas is impossible on the $0$–$8$ okta scale and, in any case, lies beyond the sampled range, so it would be an unreliable extrapolation."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "regression",
      "cloud-cover",
      "sunshine",
      "prediction"
    ],
    "questionText": "An extract from the large data set at Camborne gives, for $8$ days, the daily mean cloud cover $x$ (in oktas) and the daily total sunshine $y$ (in hours). The scatter diagram is shown, and the summary statistics are $\\bar{x} = 4$, $\\bar{y} = 7$, $S_{xx} = 32$ and $S_{xy} = -48$. (a) Describe the correlation shown. (b) Find the equation of the least-squares regression line of $y$ on $x$. (c) Estimate the daily total sunshine when the cloud cover is $2$ oktas, and comment on the reliability of your estimate.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1,
          "y": 11
        },
        {
          "x": 2,
          "y": 10
        },
        {
          "x": 3,
          "y": 9
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "line": {
        "a": 13,
        "b": -1.5
      },
      "predict": {
        "x": 2,
        "y": 10,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "daily mean cloud cover (oktas)",
      "yAxisLabel": "daily total sunshine (hours)",
      "caption": "Camborne: cloud cover against sunshine, with the regression line",
      "alt": "Scatter diagram: eight points fall from upper-left to lower-right close to the drawn regression line, with a dashed read-off at 2 oktas."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the direction of the points.",
          "workingLatex": "\\text{points fall from upper-left to lower-right}",
          "explanation": "The points slope downward as we move right, which is the signature of negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the correlation (part a).",
          "workingLatex": "\\text{strong negative correlation}",
          "explanation": "The points fall steadily and stay close to a straight line, so more cloud goes with less sunshine in a strong negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient formula.",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}}",
          "explanation": "For part (b) we fit $\\hat{y} = a + bx$. The gradient is the co-variation divided by the spread of the $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the gradient.",
          "workingLatex": "b = \\dfrac{-48}{32} = -1.5",
          "explanation": "Substituting $S_{xy} = -48$ and $S_{xx} = 32$ gives $b = -1.5$. The negative sign agrees with the negative correlation we described.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the intercept formula.",
          "workingLatex": "a = \\bar{y} - b\\bar{x}",
          "explanation": "Because the line runs through the mean point $(\\bar{x}, \\bar{y})$, rearranging gives the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the intercept.",
          "workingLatex": "a = 7 - (-1.5) \\times 4 = 7 + 6 = 13",
          "explanation": "Substituting $\\bar{y} = 7$, $b = -1.5$ and $\\bar{x} = 4$, and handling the double negative carefully, gives $a = 13$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the regression equation.",
          "workingLatex": "\\hat{y} = 13 - 1.5x",
          "explanation": "Combining the intercept and gradient gives the least-squares line for part (b).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it passes through the mean point.",
          "workingLatex": "13 - 1.5 \\times 4 = 7 = \\bar{y}",
          "explanation": "Substituting $\\bar{x} = 4$ returns $\\bar{y} = 7$, confirming the coefficients are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the cloud cover for part (c).",
          "workingLatex": "\\hat{y} = 13 - 1.5 \\times 2",
          "explanation": "To estimate the sunshine when the cloud cover is $2$ oktas, we put $x = 2$ into the line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the prediction.",
          "workingLatex": "\\hat{y} = 13 - 3 = 10",
          "explanation": "The line predicts about $10$ hours of sunshine on a day with $2$ oktas of cloud, which fits a mostly clear sky.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on reliability.",
          "workingLatex": "1 \\le 2 \\le 7 \\;\\Rightarrow\\; \\text{interpolation}",
          "explanation": "The value $x = 2$ lies inside the range of cloud-cover values in the data ($1$ to $7$ oktas), so this is interpolation and the estimate is reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Strong negative correlation: more cloud cover goes with less sunshine. (b) $\\hat{y} = 13 - 1.5x$. (c) At $x = 2$, $\\hat{y} = 10$ hours; since $2$ oktas lies within the data range ($1$–$7$ oktas), this is interpolation, so the estimate is reliable."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "correlation",
      "causation",
      "rainfall",
      "windspeed"
    ],
    "questionText": "Working with the large data set, a student finds a strong positive correlation between the daily total rainfall and the daily mean windspeed at Hurn over the summer months. The student concludes that 'high winds cause heavy rain'. (a) Explain why the student's conclusion is not justified by the correlation alone. (b) Identify a weather-related variable that could explain the correlation, and describe how it would produce it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the data actually shows.",
          "workingLatex": "\\text{rainfall and windspeed rise together}",
          "explanation": "The correlation only tells us that days with heavy rain also tend to be windy days. That is an association between the two measurements, nothing more.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the claim being made.",
          "workingLatex": "\\text{claim: wind} \\;\\Rightarrow\\; \\text{rain}",
          "explanation": "The student jumps from 'these two move together' to 'one causes the other', which is a much stronger statement than the data can support.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the key principle.",
          "workingLatex": "\\text{correlation} \\ne \\text{causation}",
          "explanation": "Correlation measures only whether two quantities tend to move together. On its own it never shows that changing one would change the other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Give the direction-of-cause objection (part a).",
          "workingLatex": "\\text{link could run either way, or neither}",
          "explanation": "The data cannot even tell us which way any influence would run: rain might 'cause' wind, wind might 'cause' rain, or a third factor might drive both. So the specific claim is not justified.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Look for a common cause.",
          "workingLatex": "\\text{a passing low-pressure system (depression)}",
          "explanation": "A single weather feature can push both numbers up at once. Depressions, or low-pressure systems, are the obvious candidate over a UK summer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain how it raises the rainfall.",
          "workingLatex": "\\text{low pressure} \\;\\rightarrow\\; \\text{rising, cooling air} \\;\\rightarrow\\; \\text{rain}",
          "explanation": "In a depression, warm air is forced to rise and cool, its moisture condenses into cloud, and heavy rain follows. So low pressure tends to bring more rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain how it raises the windspeed.",
          "workingLatex": "\\text{low pressure} \\;\\rightarrow\\; \\text{steep pressure gradient} \\;\\rightarrow\\; \\text{strong winds}",
          "explanation": "The same depression creates a steep pressure gradient, and air rushing from high to low pressure produces strong winds. So the low pressure also drives up the windspeed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Draw the two effects together (part b).",
          "workingLatex": "\\text{depression} \\;\\rightarrow\\; \\text{more rain and more wind}",
          "explanation": "Because a passing depression separately raises both the rainfall and the windspeed, the two rise and fall together even though neither is causing the other. This hidden driver is a confounding variable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "\\text{no proof of cause; weather system is the common driver}",
          "explanation": "So the correlation is genuine but the causal claim is not justified: the underlying weather system explains both, and to establish real cause we would need physical reasoning or a controlled comparison, not correlation alone.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) A correlation only shows rain and wind tend to occur together; it does not show that wind causes rain (the influence could run either way, or neither), because correlation does not imply causation. (b) The confounding variable is a passing low-pressure system (depression): it forces moist air to rise and fall as rain, and its steep pressure gradient drives strong winds, so it raises both rainfall and windspeed together without one causing the other."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cleaning",
      "outlier",
      "standard-deviation",
      "windspeed"
    ],
    "questionText": "The table shows the daily maximum gust (knots) recorded at Heathrow on $11$ consecutive days from the large data set; the anemometer failed on day $6$, so that reading is $\\text{n/a}$. $\\begin{array}{c|ccccccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\\\ \\hline \\text{Gust} & 22 & 25 & 28 & 24 & 26 & \\text{n/a} & 30 & 27 & 23 & 29 & 66 \\end{array}$ Find the mean and standard deviation of the available readings. Using the rule that a value more than $2$ standard deviations from the mean is an outlier, test the largest reading, and if it is an outlier recompute the mean and standard deviation without it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Handle the missing value",
          "workingLatex": "n = 11 - 1 = 10",
          "explanation": "The convention for the large data set is that $\\text{n/a}$ means the reading was never taken, so it cannot be used. We simply leave day $6$ out, which drops the count from $11$ to $n=10$ before any calculation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the available readings",
          "workingLatex": "\\Sigma x = 22+25+28+24+26+30+27+23+29+66 = 300",
          "explanation": "The mean needs the total of every usable reading, so we add the ten remaining gusts (the $\\text{n/a}$ day contributes nothing).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the mean",
          "workingLatex": "\\bar{x} = \\dfrac{300}{10} = 30",
          "explanation": "Sharing the total of $300$ over the $10$ days gives a mean gust of $30$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the sum of squares",
          "workingLatex": "\\Sigma x^2 = 484+625+784+576+676+900+729+529+841+4356 = 10500",
          "explanation": "Standard deviation is built from the squared readings, so we square each of the ten values and add. Notice how the $66$ contributes $4356$, far more than any other term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the standard deviation formula",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{\\Sigma x^2}{n} - \\bar{x}^2}",
          "explanation": "This descriptive form of the standard deviation measures the typical distance of the readings from their mean using the sum of squares we just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{10500}{10} - 30^2} = \\sqrt{1050-900} = \\sqrt{150} = 12.25",
          "explanation": "Substituting gives $\\sigma \\approx 12.25$ knots. This is large, a hint that one reading is stretching the spread.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the 2-standard-deviation rule",
          "workingLatex": "\\bar{x} \\pm 2\\sigma = 30 \\pm 2(12.25)",
          "explanation": "The rule flags anything lying more than two standard deviations either side of the mean as an outlier, so we build that interval around $\\bar{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the outlier boundaries",
          "workingLatex": "30 - 24.49 = 5.51, \\qquad 30 + 24.49 = 54.49",
          "explanation": "Any reading below $5.51$ or above $54.49$ knots is an outlier by this rule. These are the acceptance limits for a 'typical' day.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the largest reading",
          "workingLatex": "66 > 54.49 \\;\\Rightarrow\\; \\text{outlier}",
          "explanation": "The $66$ knot gust sits well beyond the upper limit, so by the $2$-standard-deviation rule it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Judge whether to exclude it",
          "workingLatex": "\\text{extreme but physically possible} \\Rightarrow \\text{recompute both ways}",
          "explanation": "A $66$ knot gust could be a genuine squall rather than a mistake, so we should not delete it blindly. Recomputing without it simply shows how strongly that one value influences the summary.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recompute the total without the outlier",
          "workingLatex": "\\Sigma x = 300 - 66 = 234, \\qquad n = 9",
          "explanation": "Removing the flagged value leaves nine readings; subtracting $66$ from the old total is quicker than adding again.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recompute the mean",
          "workingLatex": "\\bar{x} = \\dfrac{234}{9} = 26",
          "explanation": "Without the extreme gust the mean falls from $30$ to $26$ knots, a noticeable drop caused by a single value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Recompute the sum of squares and standard deviation",
          "workingLatex": "\\Sigma x^2 = 10500 - 4356 = 6144, \\quad \\sigma = \\sqrt{\\dfrac{6144}{9} - 26^2} = \\sqrt{6.67} = 2.58",
          "explanation": "Taking $4356$ off the sum of squares and re-applying the formula gives $\\sigma \\approx 2.58$ knots, roughly a fifth of the original spread.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "\\bar{x}:30\\to 26, \\qquad \\sigma:12.25\\to 2.58",
          "explanation": "One extreme gust inflated both the mean and, above all, the standard deviation. Reporting the value as a flagged outlier alongside the cleaned figures is more honest than pretending either version is the whole story.",
          "diagram": null
        }
      ],
      "finalAnswer": "Available data: $\\bar{x}=30$ knots, $\\sigma\\approx 12.25$ knots. The $66$ knot gust lies beyond $\\bar{x}+2\\sigma = 54.49$, so it is an outlier. Excluding it gives $\\bar{x}=26$ knots and $\\sigma\\approx 2.58$ knots, showing that this one reading dominated the spread; it should be reported as a flagged extreme, not silently deleted."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "systematic-sampling",
      "mean",
      "standard-deviation",
      "sunshine"
    ],
    "questionText": "The May-October records at Leeming contain $n=180$ days with valid daily total sunshine data. Nadia takes a systematic sample of $12$ days, using a random start of day $7$. The sunshine (hours) on her sampled days is: $\\begin{array}{c|cccccccccccc} \\text{Day} & 7 & 22 & 37 & 52 & 67 & 82 & 97 & 112 & 127 & 142 & 157 & 172 \\\\ \\hline \\text{Sun} & 5.2 & 6.8 & 7.1 & 8.0 & 9.4 & 8.6 & 7.9 & 6.3 & 5.5 & 4.8 & 3.9 & 2.7 \\end{array}$ Find the sampling interval, the mean and standard deviation of the sample, and comment on whether a systematic sample is suitable here.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the sampling interval",
          "workingLatex": "k = \\dfrac{180}{12} = 15",
          "explanation": "A systematic sample picks every $k$-th item, where $k$ is the population size divided by the sample size. Here $k=15$, so every $15$th day is chosen.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the selection",
          "workingLatex": "7,\\;22,\\;37,\\;\\dots,\\;172 \\quad (\\text{add } 15 \\text{ each time})",
          "explanation": "Starting from the random day $7$ and repeatedly adding $15$ generates the twelve day numbers listed, spreading the sample evenly from early May to late October.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the sampled values",
          "workingLatex": "\\Sigma x = 5.2+6.8+7.1+8.0+9.4+8.6+7.9+6.3+5.5+4.8+3.9+2.7 = 76.2",
          "explanation": "The mean needs the total sunshine across the twelve sampled days, so we add the readings.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the sample mean",
          "workingLatex": "\\bar{x} = \\dfrac{76.2}{12} = 6.35",
          "explanation": "Sharing $76.2$ hours over the $12$ days gives a mean of $6.35$ hours of sunshine per sampled day.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Order the sample to find the median",
          "workingLatex": "2.7,3.9,4.8,5.2,5.5,6.3,6.8,7.1,7.9,8.0,8.6,9.4",
          "explanation": "The median is a useful check on the mean; ordering the twelve values lets us pick out the middle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the median",
          "workingLatex": "Q_2 = \\dfrac{6.3+6.8}{2} = 6.55",
          "explanation": "With an even count of twelve, the median is the average of the $6$th and $7$th values, giving $6.55$ hours; it sits close to the mean, so the sample is fairly symmetric.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the sum of squares",
          "workingLatex": "\\Sigma x^2 = 5.2^2+6.8^2+\\dots+2.7^2 = 527.90",
          "explanation": "The standard deviation formula needs the total of the squared readings, so we square each value and add.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the standard deviation formula",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{\\Sigma x^2}{n} - \\bar{x}^2}",
          "explanation": "This measures how much the daily sunshine varies about the sample mean, using the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{527.90}{12} - 6.35^2} = \\sqrt{43.99-40.32} = \\sqrt{3.67} = 1.92",
          "explanation": "Substituting gives $\\sigma \\approx 1.92$ hours, so the sampled days differ from the mean by about two hours of sunshine on average.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the range for context",
          "workingLatex": "\\text{range} = 9.4 - 2.7 = 6.7",
          "explanation": "The sunshine falls steadily from about $9$ hours in high summer to under $3$ hours by late October; a systematic sample captures this whole seasonal sweep.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Explain why systematic sampling is suitable",
          "workingLatex": "\\text{even coverage of May}\\to\\text{October}",
          "explanation": "Because the days are already in date order, taking every $15$th one guarantees the sample is spread across the entire period rather than bunched in one month, so it represents the seasonal variation well.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the practical advantage",
          "workingLatex": "\\text{one random start} \\Rightarrow \\text{quick to carry out}",
          "explanation": "Systematic sampling needs only a single random number and then simple counting, which makes it far easier to run on a long numbered list than picking every day individually at random.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the main caution",
          "workingLatex": "\\text{bias only if a cycle has period } 15",
          "explanation": "The one danger is a hidden cycle whose period matches the interval; daily sunshine has no strong $15$-day rhythm, so the risk is low, but note that not every set of $12$ days is equally likely (unlike simple random sampling).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "\\bar{x}=6.35,\\ \\sigma\\approx 1.92,\\ \\text{sample suitable}",
          "explanation": "The systematic sample gives sensible summer sunshine figures and, by covering the whole season evenly, is a suitable and efficient design here.",
          "diagram": null
        }
      ],
      "finalAnswer": "Interval $k=15$; sampled days $7,22,\\dots,172$. Sample mean $\\bar{x}=6.35$ hours, median $6.55$ hours, standard deviation $\\sigma\\approx1.92$ hours. A systematic sample is suitable: it spreads evenly across May-October and is quick to run, with negligible risk of periodic bias in sunshine data."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "outlier",
      "box-plot",
      "quartiles",
      "temperature"
    ],
    "questionText": "The daily mean temperatures ($\\degree$C) on $15$ days at Camborne are recorded as: $13.6,\\ 12.5,\\ 20.4,\\ 14.2,\\ 11.8,\\ 13.9,\\ 15.1,\\ 12.9,\\ 14.8,\\ 11.2,\\ 16.2,\\ 13.2,\\ 15.6,\\ 12.1,\\ 14.5$. Find the median and quartiles, use the $1.5\\times$IQR rule to identify any outlier, draw a box plot, and by recomputing the median without the outlier state which average is more affected by it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Order the data",
          "workingLatex": "11.2,11.8,12.1,12.5,12.9,13.2,13.6,13.9,14.2,14.5,14.8,15.1,15.6,16.2,20.4",
          "explanation": "Every quartile calculation relies on the readings being in order, so we sort the fifteen temperatures from lowest to highest first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the median",
          "workingLatex": "Q_2 : \\dfrac{n+1}{2} = \\dfrac{16}{2} = 8\\text{th value} = 13.9",
          "explanation": "With $n=15$ the middle position is the $8$th value, giving a median temperature of $13.9\\ \\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the lower quartile",
          "workingLatex": "Q_1 : \\dfrac{n+1}{4} = 4\\text{th value} = 12.5",
          "explanation": "The lower quartile marks the value a quarter of the way through the ordered data, here the $4$th reading, $12.5\\ \\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the upper quartile",
          "workingLatex": "Q_3 : \\dfrac{3(n+1)}{4} = 12\\text{th value} = 15.1",
          "explanation": "The upper quartile sits three-quarters along, the $12$th reading, $15.1\\ \\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 15.1 - 12.5 = 2.6",
          "explanation": "The IQR measures the spread of the middle half of the data and is the yardstick the outlier rule uses.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Scale the IQR",
          "workingLatex": "1.5 \\times \\text{IQR} = 1.5 \\times 2.6 = 3.9",
          "explanation": "The $1.5\\times$IQR rule treats a value as an outlier if it lies more than this distance beyond a quartile, so we compute $3.9$ first.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper fence",
          "workingLatex": "Q_3 + 1.5\\,\\text{IQR} = 15.1 + 3.9 = 19.0",
          "explanation": "Anything above $19.0\\ \\degree$C counts as a high outlier. This is the upper boundary for a 'typical' day.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the lower fence",
          "workingLatex": "Q_1 - 1.5\\,\\text{IQR} = 12.5 - 3.9 = 8.6",
          "explanation": "Likewise anything below $8.6\\ \\degree$C would be a low outlier; the coldest reading, $11.2$, is comfortably inside.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the outlier",
          "workingLatex": "20.4 > 19.0 \\;\\Rightarrow\\; \\text{outlier}",
          "explanation": "Only the $20.4\\ \\degree$C reading breaks a fence, so it is the single outlier; every other value lies within the acceptable range.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assemble the five-number summary and draw the box plot",
          "workingLatex": "11.2,\\ 12.5,\\ 13.9,\\ 15.1,\\ 16.2 \\ (\\text{outlier } 20.4)",
          "explanation": "For the box plot the whiskers reach the most extreme values that are $\\textbf{not}$ outliers, so the upper whisker stops at $16.2$ and the $20.4$ is plotted separately as a marked point.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 10,
            "axisMax": 22,
            "q1": 12.5,
            "median": 13.9,
            "q3": 15.1,
            "whiskerLow": 11.2,
            "whiskerHigh": 16.2,
            "outliers": [
              20.4
            ],
            "axisLabel": "daily mean temperature (\\degree C)",
            "showValues": true,
            "caption": "Box plot of daily mean temperature at Camborne, with the outlier marked",
            "alt": "Box plot from 11.2 to 16.2 with box 12.5 to 15.1, median 13.9, and a single outlier point at 20.4."
          }
        },
        {
          "stepNumber": 11,
          "description": "Interpret the box plot",
          "workingLatex": "\\text{whisker to }16.2,\\ \\text{isolated point at }20.4",
          "explanation": "The box shows the bulk of days clustered between $12.5$ and $15.1\\ \\degree$C, with the lone star at $20.4$ making the unusual warm day easy to see and flag.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recompute the median without the outlier",
          "workingLatex": "n=14: \\; Q_2 = \\dfrac{13.6+13.9}{2} = 13.75",
          "explanation": "Removing the $20.4$ leaves fourteen values; the median is now the average of the $7$th and $8$th, giving $13.75\\ \\degree$C, barely moved from $13.9$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare with the effect on the mean",
          "workingLatex": "\\bar{x}:14.13 \\to 13.69 \\quad\\text{vs}\\quad Q_2:13.9 \\to 13.75",
          "explanation": "The mean falls by about $0.44\\ \\degree$C once the warm day goes, more than three times the median's shift of $0.15$. Because every reading pulls on the mean but only the middle one fixes the median, the mean is far more sensitive to a single extreme.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude",
          "workingLatex": "\\text{median more resistant} \\Rightarrow \\text{better summary here}",
          "explanation": "When an anomaly is present the median gives a steadier picture of a typical day, so it is the more reliable average to quote for this Camborne data.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1=12.5$, $Q_2=13.9$, $Q_3=15.1\\ \\degree$C, IQR $=2.6$. The upper fence is $19.0$, so $20.4\\ \\degree$C is an outlier. Without it the median moves only to $13.75$, while the mean drops from $14.13$ to $13.69$; the mean is more affected, so the median is the more resistant summary."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cumulative-frequency",
      "cleaning",
      "quartiles",
      "rainfall"
    ],
    "questionText": "Over a $52$-day spell at Hurn the daily total rainfall was grouped as shown. On $2$ days the gauge failed and the rainfall is $\\text{n/a}$; trace days ($\\text{tr}$) are treated as $0$ mm and already sit in the lowest class. $\\begin{array}{c|c} \\text{Rainfall } r\\ (\\text{mm}) & \\text{Frequency} \\\\ \\hline 0 \\le r < 2 & 18 \\\\ 2 \\le r < 4 & 12 \\\\ 4 \\le r < 6 & 8 \\\\ 6 \\le r < 8 & 5 \\\\ 8 \\le r < 12 & 4 \\\\ 12 \\le r < 20 & 3 \\end{array}$ Explain how the missing days affect $n$, then draw a cumulative frequency graph and use it to estimate the median and the interquartile range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Adjust n for the missing days",
          "workingLatex": "n = 52 - 2 = 50",
          "explanation": "The two $\\text{n/a}$ days carry no rainfall figure, so they are excluded entirely, leaving $50$ valid days. Trace days are already counted as $0$ in the first class, so they stay in.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Build the cumulative frequencies",
          "workingLatex": "18,\\ 30,\\ 38,\\ 43,\\ 47,\\ 50",
          "explanation": "Cumulative frequency records the running total of days up to each class boundary, so we add the frequencies one class at a time; the final total confirms $50$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Plot the cumulative frequency graph",
          "workingLatex": "(2,18),(4,30),(6,38),(8,43),(12,47),(20,50)",
          "explanation": "Each point is plotted at the $\\textbf{upper}$ boundary of a class against its cumulative frequency, starting from $(0,0)$, and joined by a smooth curve.",
          "diagram": {
            "kind": "cumulativeFrequency",
            "points": [
              {
                "x": 2,
                "cf": 18
              },
              {
                "x": 4,
                "cf": 30
              },
              {
                "x": 6,
                "cf": 38
              },
              {
                "x": 8,
                "cf": 43
              },
              {
                "x": 12,
                "cf": 47
              },
              {
                "x": 20,
                "cf": 50
              }
            ],
            "origin": 0,
            "xAxisLabel": "daily total rainfall (mm)",
            "readoffs": [
              {
                "cf": 25,
                "label": "Q_2"
              }
            ],
            "caption": "Cumulative frequency of daily total rainfall at Hurn (50 valid days)",
            "alt": "Cumulative frequency curve rising steeply then flattening, through (2,18),(4,30),(6,38),(8,43),(12,47),(20,50)."
          }
        },
        {
          "stepNumber": 4,
          "description": "Find the median position",
          "workingLatex": "\\dfrac{n}{2} = \\dfrac{50}{2} = 25",
          "explanation": "For grouped continuous data the median is read off at half the total, so we go across from a cumulative frequency of $25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the median class",
          "workingLatex": "18 < 25 \\le 30 \\;\\Rightarrow\\; 2 \\le r < 4",
          "explanation": "A cumulative frequency of $25$ falls between $18$ and $30$, so the median lies in the $2 \\le r < 4$ class.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpolate the median",
          "workingLatex": "Q_2 = 2 + \\dfrac{25-18}{12}\\times 2 = 2 + 1.17 = 3.17",
          "explanation": "Linear interpolation assumes the $12$ days in the class are spread evenly, so we step $\\tfrac{7}{12}$ of the way across the $2$ mm width, giving a median of about $3.17$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the lower quartile position",
          "workingLatex": "\\dfrac{n}{4} = 12.5",
          "explanation": "The lower quartile is read off at a quarter of the total, a cumulative frequency of $12.5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpolate the lower quartile",
          "workingLatex": "Q_1 = 0 + \\dfrac{12.5}{18}\\times 2 = 1.39",
          "explanation": "A cumulative frequency of $12.5$ sits inside the first class ($0$ to $18$), so we interpolate across the $0 \\le r < 2$ width to get about $1.39$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the upper quartile position",
          "workingLatex": "\\dfrac{3n}{4} = 37.5",
          "explanation": "The upper quartile is read off at three-quarters of the total, a cumulative frequency of $37.5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpolate the upper quartile",
          "workingLatex": "Q_3 = 4 + \\dfrac{37.5-30}{8}\\times 2 = 4 + 1.88 = 5.88",
          "explanation": "A cumulative frequency of $37.5$ lies between $30$ and $38$, so the upper quartile is in the $4 \\le r < 6$ class, giving about $5.88$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the interquartile range",
          "workingLatex": "\\text{IQR} = 5.88 - 1.39 = 4.49",
          "explanation": "Subtracting the quartiles gives the spread of the middle half of the days, about $4.49$ mm of rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret in context",
          "workingLatex": "\\text{most days } r<4, \\text{ long right tail}",
          "explanation": "Because the curve rises steeply then flattens, most days are dry or nearly so while a few very wet days stretch the top of the range; the distribution is strongly right-skewed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "Q_2 \\approx 3.17,\\ \\text{IQR} \\approx 4.49 \\ \\text{mm}",
          "explanation": "After removing the two missing days the $50$ valid days have a median rainfall of about $3.2$ mm and an interquartile range of about $4.5$ mm, a typical dry-with-occasional-downpour summer pattern.",
          "diagram": null
        }
      ],
      "finalAnswer": "Excluding the $2$ $\\text{n/a}$ days gives $n=50$. From the cumulative frequency curve, median $Q_2 \\approx 3.17$ mm, $Q_1 \\approx 1.39$ mm and $Q_3 \\approx 5.88$ mm, so IQR $\\approx 4.49$ mm. The distribution is right-skewed, with most days dry and a few very wet."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "simple-random-sampling",
      "cleaning",
      "mean",
      "temperature"
    ],
    "questionText": "The $184$ days of the large data set at Beijing are numbered $001$-$184$. To choose a simple random sample of $8$ days for daily mean temperature, Ravi reads three-digit groups from a random number table: $137,\\ 021,\\ 198,\\ 004,\\ 137,\\ 156,\\ 089,\\ 200,\\ 073,\\ 145,\\ 012,\\ 128$. Any number outside $001$-$184$, any repeat, and any day whose temperature is $\\text{n/a}$ is skipped and the next group used. Day $021$ has an $\\text{n/a}$ temperature. The temperatures ($\\degree$C) on the chosen days, in the order selected, are $18.4,\\ 15.6,\\ 22.3,\\ 19.8,\\ 17.2,\\ 21.5,\\ 16.9,\\ 20.1$. List the sampled days, find the sample mean, and compare simple random sampling with systematic sampling here.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the selection rule",
          "workingLatex": "001 \\le \\text{day} \\le 184,\\ \\text{no repeats},\\ \\text{no n/a}",
          "explanation": "A simple random sample needs each valid, distinct, non-missing day, so we walk through the random numbers accepting or rejecting each in turn.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test the first three numbers",
          "workingLatex": "137\\ \\checkmark,\\quad 021\\ (\\text{n/a})\\ \\times,\\quad 198>184\\ \\times",
          "explanation": "$137$ is in range and usable; $021$ is skipped because that day's temperature is $\\text{n/a}$; $198$ is rejected for being outside $001$-$184$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the next three",
          "workingLatex": "004\\ \\checkmark,\\quad 137\\ (\\text{repeat})\\ \\times,\\quad 156\\ \\checkmark",
          "explanation": "$004$ and $156$ are accepted; the second $137$ is a repeat of a day already chosen, so it is discarded to keep the sample distinct.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the next three",
          "workingLatex": "089\\ \\checkmark,\\quad 200>184\\ \\times,\\quad 073\\ \\checkmark",
          "explanation": "$089$ and $073$ are valid; $200$ is out of range and rejected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the final three",
          "workingLatex": "145\\ \\checkmark,\\quad 012\\ \\checkmark,\\quad 128\\ \\checkmark",
          "explanation": "These three complete the requirement, so we now have eight accepted days.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "List the eight sampled days",
          "workingLatex": "137,\\ 004,\\ 156,\\ 089,\\ 073,\\ 145,\\ 012,\\ 128",
          "explanation": "Collecting the accepted numbers in the order they appeared gives the eight days of the simple random sample.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the sampled temperatures",
          "workingLatex": "\\Sigma x = 18.4+15.6+22.3+19.8+17.2+21.5+16.9+20.1 = 151.8",
          "explanation": "The sample mean needs the total of the eight temperatures, matched to the days in selection order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the sample mean",
          "workingLatex": "\\bar{x} = \\dfrac{151.8}{8} = 18.975 \\approx 18.98",
          "explanation": "Sharing $151.8$ over the eight days gives a mean daily temperature of about $18.98\\ \\degree$C for the sample.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the strength of simple random sampling",
          "workingLatex": "P(\\text{any day chosen}) = \\text{equal}",
          "explanation": "In a simple random sample every day, and every group of eight days, is equally likely to be picked. This is what makes the sample unbiased: no part of the summer is favoured by the method.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State a weakness",
          "workingLatex": "\\text{may cluster by chance}",
          "explanation": "Because the choice is left entirely to luck, a small random sample can happen to bunch in, say, July and miss May and October, so it need not cover the season evenly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Describe systematic sampling for contrast",
          "workingLatex": "\\text{every } k\\text{-th day},\\ k=\\left\\lfloor\\tfrac{184}{8}\\right\\rfloor = 23",
          "explanation": "A systematic sample would take every $23$rd day from a random start. This guarantees an even spread across May-October and needs only one random number, but not every set of eight days is then possible.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the effect of skipping n/a days",
          "workingLatex": "\\text{skipping n/a} \\Rightarrow \\text{sample stays valid}",
          "explanation": "Skipping the $\\text{n/a}$ day keeps the sample usable, and because missing days are effectively removed from the frame beforehand, the remaining days are still each equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\bar{x} \\approx 18.98\\ \\degree\\text{C}",
          "explanation": "Ravi's simple random sample gives a mean of about $18.98\\ \\degree$C. It is unbiased but may not spread evenly; a systematic sample would guarantee seasonal coverage at the cost of equal-likelihood of every subset.",
          "diagram": null
        }
      ],
      "finalAnswer": "Sampled days: $137,004,156,089,073,145,012,128$. Sample mean $\\bar{x}=\\tfrac{151.8}{8}\\approx 18.98\\ \\degree$C. Simple random sampling is unbiased (every day equally likely) but can cluster by chance; systematic sampling guarantees even coverage of the season but makes some subsets impossible."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cleaning",
      "invalid-data",
      "mean-median",
      "cloud-cover"
    ],
    "questionText": "The daily mean cloud cover (oktas) at Leuchars for $12$ days is recorded as: $\\begin{array}{c|cccccccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\\\ \\hline \\text{Cloud} & 6 & 7 & 5 & 8 & 9 & 4 & 6 & \\text{n/a} & 7 & 5 & 3 & 6 \\end{array}$ Cloud cover is measured on the okta scale $0$-$8$. Identify and explain any invalid or missing entries, then after cleaning find the mean and median, and state the effect the cleaning has on the mean.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the valid range",
          "workingLatex": "0 \\le \\text{oktas} \\le 8",
          "explanation": "Cloud cover is reported in oktas (eighths of the sky), so the only possible whole-number values are $0$ to $8$. Anything outside this cannot be a real reading.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Flag the invalid entry",
          "workingLatex": "9 > 8 \\;\\Rightarrow\\; \\text{impossible (recording error)}",
          "explanation": "Day $5$ shows $9$ oktas, which the scale forbids, so this is a data-entry error rather than an extreme day and must be removed, not merely flagged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distinguish an error from an outlier",
          "workingLatex": "\\text{error} \\ne \\text{outlier}",
          "explanation": "An outlier is an unusually large or small but still $\\textbf{possible}$ value; the $9$ is neither possible nor believable, so we delete it outright rather than testing it with a fence rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Flag the missing entry",
          "workingLatex": "\\text{day }8:\\ \\text{n/a} \\Rightarrow \\text{excluded}",
          "explanation": "Day $8$ has no recorded value, so following the large-data-set convention it is left out of every calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the cleaned data",
          "workingLatex": "n = 12 - 2 = 10",
          "explanation": "Removing the impossible $9$ and the missing day leaves ten usable readings to summarise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Order the cleaned values",
          "workingLatex": "3,4,5,5,6,6,6,7,7,8",
          "explanation": "Sorting the ten cleaned readings prepares us to read off the median and see the shape of the data.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the cleaned values",
          "workingLatex": "\\Sigma x = 6+7+5+8+4+6+7+5+3+6 = 57",
          "explanation": "The mean needs the total of the ten valid oktas readings.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the cleaned mean",
          "workingLatex": "\\bar{x} = \\dfrac{57}{10} = 5.7",
          "explanation": "Sharing $57$ over $10$ days gives a mean cloud cover of $5.7$ oktas, a fairly cloudy average.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the median",
          "workingLatex": "Q_2 = \\dfrac{6+6}{2} = 6",
          "explanation": "With ten ordered values the median is the average of the $5$th and $6$th, both $6$, giving a median of $6$ oktas.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the mean before cleaning",
          "workingLatex": "\\text{with the } 9:\\ \\bar{x} = \\dfrac{66}{11} = 6.0",
          "explanation": "If the erroneous $9$ had wrongly been kept (with the $\\text{n/a}$ still out), the total would be $66$ over $11$ days, a mean of $6.0$ oktas.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the effect of cleaning",
          "workingLatex": "\\bar{x}: 6.0 \\to 5.7,\\qquad Q_2:\\ \\text{unchanged at }6",
          "explanation": "Cleaning lowers the mean by $0.3$ oktas because the false high value was pulling it up, while the median is untouched, illustrating again how the median resists a single bad value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the data type",
          "workingLatex": "\\text{cloud cover: discrete, quantitative, bounded}",
          "explanation": "Because the okta scale is discrete and capped at $8$, spotting the invalid $9$ is straightforward, unlike an unbounded variable where a large value might be genuine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\bar{x} = 5.7,\\ Q_2 = 6 \\ \\text{oktas}",
          "explanation": "After removing the impossible $9$ and the missing day, Leuchars averaged $5.7$ oktas (median $6$): mostly cloudy skies, with the cleaning correcting an artificially high mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $9$ is invalid (oktas only go $0$-$8$) and is a recording error; day $8$ is missing ($\\text{n/a}$). After removing both, $n=10$, mean $\\bar{x}=5.7$ oktas and median $=6$ oktas. Cleaning lowers the mean from $6.0$ to $5.7$; the median is unchanged."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "outlier",
      "box-plot",
      "quartiles",
      "pressure"
    ],
    "questionText": "The daily mean pressure (hPa) at Leeming on $11$ days is recorded as: $1013,\\ 985,\\ 1017,\\ 1009,\\ 1021,\\ 1006,\\ 1014,\\ 1019,\\ 1011,\\ 1023,\\ 1016$. Find the quartiles and use the $1.5\\times$IQR rule to identify any outlier, then draw a box plot. A very low reading corresponds to a passing storm; discuss whether it should be removed and, if it is, recompute the median and compare its change with that of the mean.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Order the data",
          "workingLatex": "985,1006,1009,1011,1013,1014,1016,1017,1019,1021,1023",
          "explanation": "Quartiles are read from ordered data, so we line up the eleven pressures from lowest to highest.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the median",
          "workingLatex": "Q_2 : \\dfrac{n+1}{2} = 6\\text{th value} = 1014",
          "explanation": "With $n=11$ the median is the $6$th reading, $1014$ hPa, close to standard sea-level pressure.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the lower quartile",
          "workingLatex": "Q_1 : \\dfrac{n+1}{4} = 3\\text{rd value} = 1009",
          "explanation": "A quarter of the way through the eleven ordered values is the $3$rd reading, $1009$ hPa.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the upper quartile",
          "workingLatex": "Q_3 : \\dfrac{3(n+1)}{4} = 9\\text{th value} = 1019",
          "explanation": "Three-quarters of the way along is the $9$th reading, $1019$ hPa.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the interquartile range",
          "workingLatex": "\\text{IQR} = 1019 - 1009 = 10",
          "explanation": "The IQR of $10$ hPa measures the spread of the middle half and is the basis of the fence rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the fences",
          "workingLatex": "Q_1 - 1.5\\,\\text{IQR} = 994,\\qquad Q_3 + 1.5\\,\\text{IQR} = 1034",
          "explanation": "Multiplying the IQR by $1.5$ gives $15$; stepping that far below $Q_1$ and above $Q_3$ gives the outlier boundaries $994$ and $1034$ hPa.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test for outliers",
          "workingLatex": "985 < 994 \\;\\Rightarrow\\; \\text{low outlier};\\quad 1023 < 1034\\ \\checkmark",
          "explanation": "The $985$ hPa reading falls below the lower fence, so it is an outlier; the highest reading is inside the upper fence, so there is no high outlier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Assemble the five-number summary and draw the box plot",
          "workingLatex": "1006,\\ 1009,\\ 1014,\\ 1019,\\ 1023 \\ (\\text{outlier } 985)",
          "explanation": "The whiskers reach the most extreme non-outlier values, so the lower whisker stops at $1006$ and the $985$ is plotted separately as a marked point.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 980,
            "axisMax": 1030,
            "q1": 1009,
            "median": 1014,
            "q3": 1019,
            "whiskerLow": 1006,
            "whiskerHigh": 1023,
            "outliers": [
              985
            ],
            "axisLabel": "daily mean pressure (hPa)",
            "showValues": true,
            "caption": "Box plot of daily mean pressure at Leeming, with the storm-day outlier marked",
            "alt": "Box plot from 1006 to 1023 with box 1009 to 1019, median 1014, and a single low outlier at 985."
          }
        },
        {
          "stepNumber": 9,
          "description": "Interpret the box plot",
          "workingLatex": "\\text{isolated low point at } 985",
          "explanation": "The box sits high and tight around $1006$-$1023$ hPa, with the lone low point standing out clearly as the stormy day.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discuss whether to remove it",
          "workingLatex": "985\\ \\text{hPa} = \\text{genuine deep low}",
          "explanation": "A pressure of $985$ hPa is a real, if unusual, weather event (a passing depression), not a mistake. Such genuine extremes should normally be kept and reported, and removed only if the study is specifically about 'typical' settled days.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recompute the median without it",
          "workingLatex": "n=10:\\ Q_2 = \\dfrac{1014+1016}{2} = 1015",
          "explanation": "If the storm day is excluded, the median of the ten remaining pressures is the average of the $5$th and $6$th values, $1015$ hPa, only $1$ hPa higher.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recompute the mean without it",
          "workingLatex": "\\bar{x}:\\ \\dfrac{11134}{11}=1012.2 \\ \\to\\ \\dfrac{10149}{10}=1014.9",
          "explanation": "The mean climbs by about $2.7$ hPa once the low reading goes, whereas the median moved only $1$ hPa; the mean feels the single extreme much more strongly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\text{keep and report } 985;\\ Q_2 \\text{ robust}",
          "explanation": "Because $985$ hPa is a genuine storm reading, it is best kept but noted as an extreme. The median barely changes, confirming it as the steadier summary of Leeming's pressure on these days.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1=1009$, $Q_2=1014$, $Q_3=1019$ hPa, IQR $=10$. The lower fence is $994$, so $985$ hPa is a low outlier. It is a genuine storm reading, so it should be kept but reported. Excluding it moves the median only to $1015$ hPa but the mean from $1012.2$ to $1014.9$; the mean is more affected."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cumulative-frequency",
      "cleaning",
      "read-off",
      "sunshine"
    ],
    "questionText": "A $62$-day summer spell at Camborne had daily total sunshine grouped as shown; on $2$ days the sensor failed and the value is $\\text{n/a}$. $\\begin{array}{c|c} \\text{Sunshine } s\\ (\\text{hours}) & \\text{Frequency} \\\\ \\hline 0 \\le s < 3 & 8 \\\\ 3 \\le s < 6 & 12 \\\\ 6 \\le s < 9 & 15 \\\\ 9 \\le s < 12 & 16 \\\\ 12 \\le s < 15 & 9 \\end{array}$ Draw a cumulative frequency graph, estimate the median, and estimate the number of days with more than $10$ hours of sunshine.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Adjust n for the missing days",
          "workingLatex": "n = 62 - 2 = 60",
          "explanation": "The two $\\text{n/a}$ days have no sunshine figure, so they are excluded, leaving $60$ valid days to summarise; the frequencies given already total $60$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Build the cumulative frequencies",
          "workingLatex": "8,\\ 20,\\ 35,\\ 51,\\ 60",
          "explanation": "Adding the class frequencies in turn gives the running total of days up to each upper boundary, ending at the full $60$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Plot the cumulative frequency graph",
          "workingLatex": "(3,8),(6,20),(9,35),(12,51),(15,60)",
          "explanation": "Each cumulative frequency is plotted against the upper boundary of its class, from $(0,0)$, and joined with a smooth curve.",
          "diagram": {
            "kind": "cumulativeFrequency",
            "points": [
              {
                "x": 3,
                "cf": 8
              },
              {
                "x": 6,
                "cf": 20
              },
              {
                "x": 9,
                "cf": 35
              },
              {
                "x": 12,
                "cf": 51
              },
              {
                "x": 15,
                "cf": 60
              }
            ],
            "origin": 0,
            "xAxisLabel": "daily total sunshine (hours)",
            "readoffs": [
              {
                "cf": 30,
                "label": "Q_2"
              }
            ],
            "caption": "Cumulative frequency of daily total sunshine at Camborne (60 valid days)",
            "alt": "Cumulative frequency curve through (3,8),(6,20),(9,35),(12,51),(15,60) rising in an S shape."
          }
        },
        {
          "stepNumber": 4,
          "description": "Find the median position",
          "workingLatex": "\\dfrac{n}{2} = 30",
          "explanation": "For grouped data the median is read at half the total, so we track across from a cumulative frequency of $30$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the median class",
          "workingLatex": "20 < 30 \\le 35 \\;\\Rightarrow\\; 6 \\le s < 9",
          "explanation": "A cumulative frequency of $30$ lies between $20$ and $35$, placing the median in the $6 \\le s < 9$ class.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpolate the median",
          "workingLatex": "Q_2 = 6 + \\dfrac{30-20}{15}\\times 3 = 6 + 2 = 8.0",
          "explanation": "Interpolating $\\tfrac{10}{15}$ of the way across the $3$-hour class width gives a median of exactly $8.0$ hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the 'more than 10 hours' read-off",
          "workingLatex": "s = 10 \\in [9,12)",
          "explanation": "To count the very sunny days we first find how many days had $\\textbf{up to}$ $10$ hours, which means reading the curve at $s=10$, inside the $9 \\le s < 12$ class.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpolate the cumulative frequency at 10 hours",
          "workingLatex": "\\text{cf}(10) = 35 + \\dfrac{10-9}{3}\\times 16 = 35 + 5.33 = 40.33",
          "explanation": "Stepping $\\tfrac{1}{3}$ of the way into a class of $16$ days adds about $5.33$ days to the $35$ already counted by $9$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Count the days above 10 hours",
          "workingLatex": "60 - 40.33 = 19.67 \\approx 20",
          "explanation": "Subtracting from the total of $60$ leaves about $19.7$, so roughly $20$ days enjoyed more than $10$ hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the quartiles for spread",
          "workingLatex": "Q_1 = 4.75,\\qquad Q_3 = 10.875",
          "explanation": "Reading at cumulative frequencies $15$ and $45$ gives the quartiles; $Q_1$ is in the $3$-$6$ class and $Q_3$ in the $9$-$12$ class.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the interquartile range",
          "workingLatex": "\\text{IQR} = 10.875 - 4.75 = 6.13",
          "explanation": "The middle half of the days spans about $6.1$ hours of sunshine, a wide spread typical of changeable summer weather.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on the missing days",
          "workingLatex": "\\text{2 n/a: estimates hold if missing at random}",
          "explanation": "Because only two days are missing and there is no reason the sensor failures relate to how sunny it was, dropping them should not bias these estimates noticeably.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "Q_2 = 8.0\\ \\text{h},\\ \\approx 20 \\text{ days} > 10\\ \\text{h}",
          "explanation": "Across the $60$ valid days the median sunshine is $8.0$ hours and about $20$ days were very sunny, giving a clear picture of a bright but variable Camborne summer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Excluding the $2$ $\\text{n/a}$ days gives $n=60$. From the curve the median is $Q_2 = 8.0$ hours. The cumulative frequency at $10$ hours is about $40.3$, so roughly $60-40.3 \\approx 20$ days had more than $10$ hours of sunshine."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "systematic-sampling",
      "cleaning",
      "standard-deviation",
      "windspeed"
    ],
    "questionText": "Perth has $150$ days with valid records in the large data set. Tom takes a systematic sample of $10$ days for daily mean windspeed (knots), using a random start of day $6$. If a chosen day has $\\text{n/a}$ windspeed he uses the next available day; day $66$ is $\\text{n/a}$. His sampled windspeeds (knots) are: $\\begin{array}{c|cccccccccc} \\text{Day} & 6 & 21 & 36 & 51 & 67 & 81 & 96 & 111 & 126 & 141 \\\\ \\hline \\text{Wind} & 8 & 10 & 12 & 9 & 11 & 7 & 13 & 10 & 9 & 12 \\end{array}$ Find the sampling interval and the sampled days, then the mean and standard deviation, and comment on the suitability of the sample and any bias from the $\\text{n/a}$ rule.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the sampling interval",
          "workingLatex": "k = \\dfrac{150}{10} = 15",
          "explanation": "A systematic sample of $10$ from $150$ days takes every $15$th day, so the interval is $k=15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Generate the intended days",
          "workingLatex": "6,\\ 21,\\ 36,\\ 51,\\ 66,\\ 81,\\ 96,\\ 111,\\ 126,\\ 141",
          "explanation": "Starting at the random day $6$ and adding $15$ each time lists the ten intended days across the whole record.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the n/a rule",
          "workingLatex": "\\text{day }66\\ \\text{n/a} \\Rightarrow \\text{use day }67",
          "explanation": "Day $66$ has no windspeed, so Tom's rule replaces it with the next available day, $67$, giving the final list of sampled days.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the sampled windspeeds",
          "workingLatex": "\\Sigma x = 8+10+12+9+11+7+13+10+9+12 = 101",
          "explanation": "The mean needs the total of the ten sampled windspeeds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mean",
          "workingLatex": "\\bar{x} = \\dfrac{101}{10} = 10.1",
          "explanation": "Sharing $101$ over $10$ days gives a mean windspeed of $10.1$ knots, a moderate breeze.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Order the data for the median",
          "workingLatex": "7,8,9,9,10,10,11,12,12,13",
          "explanation": "Ordering the ten values lets us find the median as a robust check on the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the median and range",
          "workingLatex": "Q_2 = \\dfrac{10+10}{2} = 10,\\qquad \\text{range} = 13-7 = 6",
          "explanation": "The median of $10$ knots sits right by the mean, and the range of $6$ knots shows the windspeeds are fairly tightly grouped.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the sum of squares",
          "workingLatex": "\\Sigma x^2 = 64+100+144+81+121+49+169+100+81+144 = 1053",
          "explanation": "The standard deviation formula needs the total of the squared windspeeds.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the standard deviation formula",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{\\Sigma x^2}{n} - \\bar{x}^2}",
          "explanation": "This measures the typical variation of the sampled windspeeds about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{1053}{10} - 10.1^2} = \\sqrt{105.3 - 102.01} = \\sqrt{3.29} = 1.81",
          "explanation": "Substituting gives $\\sigma \\approx 1.81$ knots, confirming the windspeeds cluster closely around $10$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on suitability",
          "workingLatex": "\\text{even spread over the record}",
          "explanation": "Because the days are in date order, taking every $15$th one covers the whole period evenly, so the sample fairly represents Perth's windspeed across the season, and it is quick to run from a single random start.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the bias from the n/a rule",
          "workingLatex": "66 \\to 67 \\text{ breaks the regular gap}",
          "explanation": "Replacing a missing day with the next one shortens one interval and slightly favours days that immediately follow gaps. With only one substitution here the effect is tiny, but it does mean the spacing is no longer perfectly regular.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude",
          "workingLatex": "\\bar{x} = 10.1,\\ \\sigma \\approx 1.81\\ \\text{knots}",
          "explanation": "The systematic sample gives a mean windspeed of $10.1$ knots with a small standard deviation of about $1.81$ knots. It is a suitable, efficient design, with only negligible bias introduced by skipping the single $\\text{n/a}$ day.",
          "diagram": null
        }
      ],
      "finalAnswer": "Interval $k=15$; sampled days $6,21,36,51,67,81,96,111,126,141$ (day $66$ replaced by $67$). Mean $\\bar{x}=10.1$ knots, standard deviation $\\sigma\\approx1.81$ knots. The sample is suitable, giving even seasonal coverage; the $\\text{n/a}$ substitution introduces only negligible bias."
    }
  },
  {
    "id": "al.y1.stats.large-data-set.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cleaning",
      "trace",
      "outlier",
      "rainfall"
    ],
    "questionText": "The daily total rainfall (mm) at Jacksonville for $12$ days is recorded as: $\\begin{array}{c|cccccccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\\\ \\hline \\text{Rain} & \\text{tr} & 2.4 & 0.8 & 5.1 & \\text{n/a} & 1.8 & \\text{tr} & 3.2 & 0.6 & 4.5 & 28.6 & 1.0 \\end{array}$ Recall that $\\text{tr}$ (trace) is treated as $0$ mm and $\\text{n/a}$ is excluded. Clean the data and find the mean and standard deviation. Using the rule that a value more than $2$ standard deviations from the mean is an outlier, test the largest value; if it is an outlier recompute the mean and standard deviation without it and comment on the effect and on whether removal is justified.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the data conventions",
          "workingLatex": "\\text{tr}\\to 0\\ (\\text{days }1,7),\\quad \\text{n/a}\\ (\\text{day }5)\\ \\text{excluded}",
          "explanation": "Trace rainfall is below $0.05$ mm and is counted as $0$, so days $1$ and $7$ become $0$; day $5$ is missing and is dropped entirely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the cleaned data",
          "workingLatex": "n = 12 - 1 = 11",
          "explanation": "Only the single $\\text{n/a}$ day is removed; the two trace days remain as zeros, leaving eleven usable readings.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the cleaned values",
          "workingLatex": "0,\\ 2.4,\\ 0.8,\\ 5.1,\\ 1.8,\\ 0,\\ 3.2,\\ 0.6,\\ 4.5,\\ 28.6,\\ 1.0",
          "explanation": "Writing out the cleaned data keeps the trace zeros and the large $28.6$ in view before we summarise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the readings",
          "workingLatex": "\\Sigma x = 0+2.4+0.8+5.1+1.8+0+3.2+0.6+4.5+28.6+1.0 = 48.0",
          "explanation": "The mean needs the total rainfall over the eleven valid days.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mean",
          "workingLatex": "\\bar{x} = \\dfrac{48.0}{11} = 4.36",
          "explanation": "Sharing $48.0$ mm over $11$ days gives a mean of about $4.36$ mm, though the single wet day is clearly inflating this.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the sum of squares",
          "workingLatex": "\\Sigma x^2 = 0+5.76+0.64+26.01+3.24+0+10.24+0.36+20.25+817.96+1.0 = 885.46",
          "explanation": "Squaring each reading and adding gives the quantity the standard deviation needs; the $28.6$ alone contributes $817.96$, dwarfing the rest.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the standard deviation formula",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{\\Sigma x^2}{n} - \\bar{x}^2}",
          "explanation": "This descriptive standard deviation measures the typical spread of the daily rainfall about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{885.46}{11} - 4.36^2} = \\sqrt{80.50 - 19.04} = \\sqrt{61.46} = 7.84",
          "explanation": "Substituting gives $\\sigma \\approx 7.84$ mm, larger than the mean itself, a strong sign that one value is dominating.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the 2-standard-deviation rule",
          "workingLatex": "\\bar{x} + 2\\sigma = 4.36 + 2(7.84) = 20.04",
          "explanation": "The rule flags any value more than two standard deviations from the mean; the lower limit $4.36-15.68$ is negative, so only the upper limit of $20.04$ mm matters for rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the largest value",
          "workingLatex": "28.6 > 20.04 \\;\\Rightarrow\\; \\text{outlier}",
          "explanation": "The $28.6$ mm day lies above the upper limit, so by the $2$-standard-deviation rule it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recompute the total without it",
          "workingLatex": "\\Sigma x = 48.0 - 28.6 = 19.4,\\qquad n = 10",
          "explanation": "Removing the flagged value leaves ten days; subtracting $28.6$ from the old total is quicker than re-adding.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recompute the mean",
          "workingLatex": "\\bar{x} = \\dfrac{19.4}{10} = 1.94",
          "explanation": "Without the downpour the mean rainfall falls to $1.94$ mm, less than half the original, showing how one day skewed it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Recompute the standard deviation",
          "workingLatex": "\\Sigma x^2 = 885.46 - 817.96 = 67.5,\\quad \\sigma = \\sqrt{\\dfrac{67.5}{10} - 1.94^2} = \\sqrt{2.99} = 1.73",
          "explanation": "Taking $817.96$ off the sum of squares and re-applying the formula gives $\\sigma \\approx 1.73$ mm, about a fifth of the original spread.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Judge whether removal is justified and conclude",
          "workingLatex": "\\bar{x}:4.36\\to 1.94,\\quad \\sigma:7.84\\to 1.73",
          "explanation": "A $28.6$ mm day is a believable heavy-rain or thunderstorm event, not an error, so it should be reported, not silently deleted. The honest summary quotes both: cleaned figures of $\\bar{x}=4.36$, $\\sigma=7.84$ mm, and, excluding the flagged storm day, $\\bar{x}=1.94$, $\\sigma=1.73$ mm.",
          "diagram": null
        }
      ],
      "finalAnswer": "Cleaned data ($\\text{tr}\\to0$, $\\text{n/a}$ excluded, $n=11$): $\\bar{x}=4.36$ mm, $\\sigma\\approx7.84$ mm. Since $28.6 > \\bar{x}+2\\sigma = 20.04$, it is an outlier. Excluding it gives $\\bar{x}=1.94$ mm and $\\sigma\\approx1.73$ mm. The $28.6$ mm is a plausible storm day, so it should be reported as a flagged extreme rather than deleted."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q061",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "comparison",
      "standard-deviation",
      "box-plot",
      "temperature"
    ],
    "questionText": "The tables show the daily mean temperature ($\\degree$C) on eight days at Heathrow and on eleven days at Leuchars, taken from the large data set; each row is written in ascending order. Heathrow: $\\begin{array}{c|cccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ \\hline \\text{Temp} & 20.1 & 21.4 & 21.9 & 22.2 & 22.5 & 22.8 & 23.4 & 23.7 \\end{array}$ Leuchars: $\\begin{array}{c|ccccccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\\\ \\hline \\text{Temp} & 11.2 & 12.5 & 13.1 & 13.8 & 14.0 & 14.6 & 15.2 & 15.9 & 16.3 & 17.1 & 21.6 \\end{array}$ (a) State whether daily mean temperature is quantitative or qualitative, and discrete or continuous. (b) Find the mean and standard deviation for Heathrow. (c) For Leuchars find the median, quartiles and interquartile range, and use the $1.5\\times\\text{IQR}$ rule to test the highest reading. (d) Draw a box plot for Leuchars. (e) Compare the temperatures at the two locations, referring to a measure of average and a measure of spread.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Classify the data (part a)",
          "workingLatex": "\\text{Daily mean temperature: quantitative and continuous.}",
          "explanation": "Temperature is a measured numerical quantity, so it is quantitative; it can take any value on a continuous scale (not only whole numbers), so it is continuous rather than discrete.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total the Heathrow readings (part b)",
          "workingLatex": "\\Sigma x = 20.1+21.4+21.9+22.2+22.5+22.8+23.4+23.7 = 178.0",
          "explanation": "The mean needs the total of all eight readings, so we add them first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the Heathrow mean",
          "workingLatex": "\\bar{x} = \\dfrac{178.0}{8} = 22.25",
          "explanation": "The mean shares the total equally over the $8$ days, giving the central temperature of about $22.25\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum of squares for Heathrow",
          "workingLatex": "\\Sigma x^2 = 20.1^2+21.4^2+\\cdots+23.7^2 = 3969.76",
          "explanation": "The standard-deviation formula is built from the sum of the squared readings, so we square each value and add.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Heathrow standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{3969.76}{8} - 22.25^2} = \\sqrt{1.1575} = 1.08",
          "explanation": "This measures the typical distance of a day's temperature from the mean; only about $1.08\\,\\degree$C, so Heathrow is very steady.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the Leuchars quartiles (part c)",
          "workingLatex": "n = 11:\\quad Q_2\\to\\text{6th},\\ \\ Q_1\\to\\text{3rd},\\ \\ Q_3\\to\\text{9th value}",
          "explanation": "With $11$ ordered values the median is the middle (6th) reading and the quartiles are the 3rd and 9th, splitting the data into quarters. The row is already in ascending order.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read the five-number summary",
          "workingLatex": "Q_1 = 13.1,\\qquad Q_2 = 14.6,\\qquad Q_3 = 16.3",
          "explanation": "Counting to those positions gives the lower quartile, median and upper quartile in $\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 16.3 - 13.1 = 3.2",
          "explanation": "The IQR is the spread of the middle $50\\%$ of days, which ignores any extreme values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Upper outlier fence",
          "workingLatex": "Q_3 + 1.5\\times\\text{IQR} = 16.3 + 1.5(3.2) = 21.1",
          "explanation": "Any reading beyond this fence counts as an outlier by the standard rule, so we test the warmest day against it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the highest reading",
          "workingLatex": "21.6 > 21.1 \\ \\Rightarrow\\ \\text{outlier}",
          "explanation": "The $21.6\\,\\degree$C day lies past the fence, so it is an unusually warm outlier; the largest ordinary reading is $17.1\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Draw the Leuchars box plot (part d)",
          "workingLatex": "\\text{whiskers } 11.2\\text{ and }17.1;\\ \\ \\text{box } 13.1\\,|\\,14.6\\,|\\,16.3;\\ \\ \\text{outlier } 21.6",
          "explanation": "The box spans the quartiles with the median line inside; the left whisker reaches the lowest value and the right whisker the largest non-outlier ($17.1$), with the outlier plotted separately as a cross.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 10,
            "axisMax": 22,
            "q1": 13.1,
            "median": 14.6,
            "q3": 16.3,
            "whiskerLow": 11.2,
            "whiskerHigh": 17.1,
            "outliers": [
              21.6
            ],
            "axisLabel": "daily mean temperature (\\degree C)",
            "showValues": true,
            "caption": "Box plot of daily mean temperature at Leuchars (\\degree C).",
            "alt": "Box plot from 11.2 to 17.1, box 13.1 to 16.3 with median 14.6, and an outlier marked at 21.6."
          }
        },
        {
          "stepNumber": 12,
          "description": "Compare the averages (part e)",
          "workingLatex": "\\bar{x}_{\\text{Heathrow}} = 22.25\\ \\text{vs}\\ Q_2^{\\text{Leuchars}} = 14.6",
          "explanation": "Heathrow's mean is about $7.7\\,\\degree$C above Leuchars' median, so Heathrow is far warmer on average, consistent with a southern rather than a northern UK station.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare the spread",
          "workingLatex": "\\sigma_{\\text{Heathrow}} = 1.08\\quad\\text{vs}\\quad\\text{IQR}_{\\text{Leuchars}} = 3.2",
          "explanation": "Heathrow's readings cluster tightly (about $1\\,\\degree$C from the mean), whereas Leuchars' middle half alone spans $3.2\\,\\degree$C and it has a warm outlier, so Leuchars is much more variable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclusion",
          "workingLatex": "\\text{Heathrow: warmer, more consistent. Leuchars: cooler, more variable.}",
          "explanation": "Overall Heathrow is warmer and steadier, while Leuchars is cooler with greater day-to-day variation and one exceptionally warm day.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Quantitative and continuous. (b) $\\bar{x}=22.25\\,\\degree$C, $\\sigma\\approx1.08\\,\\degree$C. (c) $Q_1=13.1$, median $=14.6$, $Q_3=16.3\\,\\degree$C, IQR $=3.2\\,\\degree$C; $21.6\\,\\degree$C is an outlier. (e) Heathrow is markedly warmer (mean $22.25$ vs median $14.6\\,\\degree$C) and far more consistent; Leuchars is cooler and more spread out with an anomalous warm day."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q062",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "regression",
      "correlation",
      "prediction",
      "sunshine"
    ],
    "questionText": "The table gives the daily mean temperature ($\\degree$C) and daily total sunshine (hours) on eight days at Camborne in the large data set. $\\begin{array}{c|cccccccc} \\text{Temp } (\\degree\\text{C}) & 13.2 & 14.0 & 15.5 & 16.1 & 17.4 & 18.0 & 19.3 & 20.5 \\\\ \\hline \\text{Sunshine (h)} & 5.2 & 5.9 & 6.7 & 7.4 & 8.0 & 8.8 & 9.3 & 10.5 \\end{array}$ You may use $\\Sigma xy = 1066.57$ and $\\Sigma x^2 = 2289.20$. (a) Describe the correlation shown. (b) Find the equation of the least-squares regression line of sunshine ($y$) on temperature ($x$). (c) Interpret the gradient in context. (d) Use your line to estimate the sunshine on a day with mean temperature $18.5\\,\\degree$C, and comment on the reliability. (e) Give one limitation of using this line.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 13.2,
          "y": 5.2
        },
        {
          "x": 14,
          "y": 5.9
        },
        {
          "x": 15.5,
          "y": 6.7
        },
        {
          "x": 16.1,
          "y": 7.4
        },
        {
          "x": 17.4,
          "y": 8
        },
        {
          "x": 18,
          "y": 8.8
        },
        {
          "x": 19.3,
          "y": 9.3
        },
        {
          "x": 20.5,
          "y": 10.5
        }
      ],
      "line": {
        "a": -4.05,
        "b": 0.703
      },
      "predict": {
        "x": 18.5,
        "y": 8.96,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "daily mean temperature (\\degree C)",
      "yAxisLabel": "daily total sunshine (hours)",
      "caption": "Camborne: daily total sunshine against daily mean temperature, with the regression line.",
      "alt": "Eight points rising from lower-left to upper-right in a straight band, close to a fitted line, with a read-off near temperature 18.5."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the correlation (part a)",
          "workingLatex": "\\text{As temperature rises, sunshine rises: positive correlation.}",
          "explanation": "The points climb from lower-left to upper-right in a fairly straight band, which is exactly what positive correlation looks like.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the totals (part b)",
          "workingLatex": "\\Sigma x = 134.0,\\qquad \\Sigma y = 61.8,\\qquad n = 8",
          "explanation": "Regression is built from the totals of each variable, so we add the eight temperatures and the eight sunshine figures.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{134.0}{8} = 16.75,\\qquad \\bar{y} = \\dfrac{61.8}{8} = 7.725",
          "explanation": "The line must pass through the mean point $(\\bar{x},\\bar{y})$, so we need both means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the summation quantities",
          "workingLatex": "\\Sigma xy = 1066.57,\\qquad \\Sigma x^2 = 2289.20",
          "explanation": "These capture how temperature and sunshine vary together and how temperature varies on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $S_{xy}$",
          "workingLatex": "S_{xy} = \\Sigma xy - \\dfrac{\\Sigma x\\,\\Sigma y}{n} = 1066.57 - \\dfrac{134.0\\times 61.8}{8} = 31.42",
          "explanation": "$S_{xy}$ measures the joint variation of the two quantities about their means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $S_{xx}$",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\dfrac{(\\Sigma x)^2}{n} = 2289.20 - \\dfrac{134.0^2}{8} = 44.70",
          "explanation": "$S_{xx}$ measures how spread out the temperatures are about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{31.42}{44.70} = 0.703",
          "explanation": "The gradient is the extra sunshine per $1\\,\\degree$C rise, found from the ratio of joint spread to temperature spread.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 7.725 - 0.703(16.75) = -4.05",
          "explanation": "Forcing the line through the mean point fixes the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the regression line",
          "workingLatex": "y = -4.05 + 0.703x",
          "explanation": "This least-squares line is the best straight-line summary of sunshine against temperature.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient (part c)",
          "workingLatex": "b = 0.703\\ \\text{hours per }\\degree\\text{C}",
          "explanation": "Each extra degree of daily mean temperature is associated with about $0.70$ more hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict at $18.5\\,\\degree$C (part d)",
          "workingLatex": "\\hat{y} = -4.05 + 0.703(18.5) = 8.96",
          "explanation": "Substituting $18.5$ predicts about $9.0$ hours of sunshine on such a day.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on reliability",
          "workingLatex": "13.2 \\le 18.5 \\le 20.5\\ \\Rightarrow\\ \\text{interpolation}",
          "explanation": "Because $18.5\\,\\degree$C lies inside the observed range $13.2$ to $20.5\\,\\degree$C, this is interpolation, so the estimate is reasonably reliable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State a limitation (part e)",
          "workingLatex": "\\text{beyond } 20.5\\,\\degree\\text{C: extrapolation}",
          "explanation": "Predicting for a much hotter day would be extrapolation, where the linear pattern may break down; also correlation is not causation, since both quantities are largely driven by the season.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclusion",
          "workingLatex": "\\text{Warmer Camborne days tend to be sunnier.}",
          "explanation": "The data show a strong positive link, giving about $9$ hours of sunshine on an $18.5\\,\\degree$C day, but only within the range that was measured.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Positive correlation. (b) $y = -4.05 + 0.703x$. (c) About $0.70$ more sunshine hours per $1\\,\\degree$C. (d) $\\hat{y}\\approx 8.96\\approx 9.0$ hours; reliable as $18.5\\,\\degree$C is interpolation. (e) Extrapolation beyond the data (or treating correlation as causation) would be unsafe."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q063",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "cumulative-frequency",
      "median",
      "percentile",
      "rainfall"
    ],
    "questionText": "The grouped table shows the daily total rainfall (mm) on $50$ days at Hurn from the large data set; days recording $\\text{tr}$ (trace) are counted as $0$ mm and fall in the first class. $\\begin{array}{c|c} \\text{Rainfall } r\\ (\\text{mm}) & \\text{Frequency} \\\\ \\hline 0 \\le r < 2 & 18 \\\\ 2 \\le r < 4 & 12 \\\\ 4 \\le r < 6 & 8 \\\\ 6 \\le r < 8 & 6 \\\\ 8 \\le r < 10 & 4 \\\\ 10 \\le r < 12 & 2 \\end{array}$ (a) Form the cumulative frequencies. (b) Estimate the median by linear interpolation. (c) Estimate the quartiles and the interquartile range. (d) Estimate the $90$th percentile. (e) Comment on the shape of the distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Build the cumulative frequencies (part a)",
          "workingLatex": "\\text{cf: } 18,\\ 30,\\ 38,\\ 44,\\ 48,\\ 50",
          "explanation": "Cumulative frequency keeps a running total, giving the number of days with rainfall up to each upper class boundary; a $\\text{tr}$ day counts as $0$ mm and sits in the first class.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the total",
          "workingLatex": "n = 50",
          "explanation": "The final cumulative total confirms $50$ days, which we use to locate the median and quartiles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Median position (part b)",
          "workingLatex": "\\dfrac{n}{2} = 25\\ \\Rightarrow\\ 2 \\le r < 4\\ \\ (\\text{cf }18\\to30)",
          "explanation": "For grouped data we read off the value at cumulative frequency $\\tfrac{n}{2}$; the $25$th day lies in the class $2\\le r<4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpolate the median",
          "workingLatex": "Q_2 = 2 + \\dfrac{25-18}{30-18}\\times 2 = 3.17",
          "explanation": "Assuming the days are evenly spread across the class, we go the fraction $\\tfrac{7}{12}$ of the way into the $2$ mm-wide interval to estimate the median rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lower quartile (part c)",
          "workingLatex": "\\dfrac{n}{4} = 12.5\\ \\Rightarrow\\ Q_1 = 0 + \\dfrac{12.5}{18}\\times 2 = 1.39",
          "explanation": "The $12.5$th day is in the first class $0\\le r<2$, so interpolation gives the lower quartile.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Upper quartile",
          "workingLatex": "\\dfrac{3n}{4} = 37.5\\ \\Rightarrow\\ Q_3 = 4 + \\dfrac{37.5-30}{38-30}\\times 2 = 5.88",
          "explanation": "The $37.5$th day sits in $4\\le r<6$ (cf $30\\to38$), giving the upper quartile by the same method.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interquartile range",
          "workingLatex": "\\text{IQR} = 5.88 - 1.39 = 4.49",
          "explanation": "The middle $50\\%$ of days span about $4.49$ mm of rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check for outliers",
          "workingLatex": "Q_3 + 1.5\\times\\text{IQR} = 5.88 + 1.5(4.49) = 12.62",
          "explanation": "The largest possible reading here is $12$ mm, which is below the fence, so there are no outliers by the $1.5\\times\\text{IQR}$ rule; the wettest days are extreme but not beyond it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$90$th percentile (part d)",
          "workingLatex": "0.9\\times 50 = 45\\ \\Rightarrow\\ P_{90} = 8 + \\dfrac{45-44}{48-44}\\times 2 = 8.5",
          "explanation": "The $45$th day lies in $8\\le r<10$ (cf $44\\to48$), so $90\\%$ of days had at most about $8.5$ mm of rain.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Draw the cumulative frequency curve",
          "workingLatex": "\\text{plot } (2,18),(4,30),(6,38),(8,44),(10,48),(12,50)",
          "explanation": "Plotting cumulative frequency against the upper class boundary and joining with a smooth curve lets the median and quartiles be read directly off the graph.",
          "diagram": {
            "kind": "cumulativeFrequency",
            "points": [
              {
                "x": 2,
                "cf": 18
              },
              {
                "x": 4,
                "cf": 30
              },
              {
                "x": 6,
                "cf": 38
              },
              {
                "x": 8,
                "cf": 44
              },
              {
                "x": 10,
                "cf": 48
              },
              {
                "x": 12,
                "cf": 50
              }
            ],
            "origin": 0,
            "xAxisLabel": "daily total rainfall (mm)",
            "yAxisLabel": "cumulative frequency",
            "readoffs": [
              {
                "cf": 12.5,
                "label": "Q_1"
              },
              {
                "cf": 25,
                "label": "Q_2"
              },
              {
                "cf": 37.5,
                "label": "Q_3"
              }
            ],
            "caption": "Cumulative frequency of daily total rainfall at Hurn over 50 days.",
            "alt": "A rising cumulative frequency curve from 0 to 50 over rainfall 0 to 12 mm, with guides at cumulative frequencies 12.5, 25 and 37.5."
          }
        },
        {
          "stepNumber": 11,
          "description": "Compare the quartile gaps (part e)",
          "workingLatex": "Q_2 - Q_1 = 1.78,\\qquad Q_3 - Q_2 = 2.71",
          "explanation": "The gap above the median is larger than the gap below it, which is a signal of positive skew.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the skew",
          "workingLatex": "Q_2 - Q_1 < Q_3 - Q_2\\ \\Rightarrow\\ \\text{positive skew}",
          "explanation": "Most days have little rain with a tail of a few much wetter days pulling the upper quartile away, which is typical of rainfall data.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "\\text{median}\\approx 3.17\\ \\text{mm},\\ \\ \\text{IQR}\\approx 4.49\\ \\text{mm}",
          "explanation": "A typical Hurn day in this period had about $3.2$ mm of rain, with a positively skewed spread and $90\\%$ of days under $8.5$ mm.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) cf: $18,30,38,44,48,50$. (b) median $\\approx 3.17$ mm. (c) $Q_1\\approx1.39$ mm, $Q_3\\approx5.88$ mm, IQR $\\approx4.49$ mm. (d) $P_{90}\\approx8.5$ mm. (e) Positively skewed: many dry days with a tail of a few very wet ones."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q064",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "comparison",
      "standard-deviation",
      "windspeed",
      "gust"
    ],
    "questionText": "The tables show the daily maximum gust (knots) on eight days at Leeming in $1987$ and on eight days at Leeming in $2015$, from the large data set. $\\begin{array}{c|cccccccc} \\text{1987} & 28 & 31 & 33 & 35 & 36 & 38 & 41 & 46 \\\\ \\hline \\text{2015} & 19 & 22 & 25 & 27 & 28 & 31 & 33 & 39 \\end{array}$ (a) State the type of data. (b) Find the mean and standard deviation of the $1987$ gusts. (c) Find the mean and standard deviation of the $2015$ gusts. (d) Find the range for each year. (e) Compare the two years, referring to average and spread, and interpret in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Classify the data (part a)",
          "workingLatex": "\\text{Daily maximum gust (knots): quantitative and continuous.}",
          "explanation": "Gust speed is a measured numerical quantity on a continuous scale, so it is quantitative and continuous.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total the 1987 gusts (part b)",
          "workingLatex": "\\Sigma x = 28+31+33+35+36+38+41+46 = 288",
          "explanation": "We add the eight $1987$ readings to find their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mean for 1987",
          "workingLatex": "\\bar{x}_{87} = \\dfrac{288}{8} = 36.0",
          "explanation": "Sharing the total over the $8$ days gives a mean gust of $36$ knots in $1987$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum of squares for 1987",
          "workingLatex": "\\Sigma x^2 = 784+961+1089+1225+1296+1444+1681+2116 = 10596",
          "explanation": "Squaring each reading and adding gives the quantity the standard-deviation formula needs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standard deviation for 1987",
          "workingLatex": "\\sigma_{87} = \\sqrt{\\dfrac{10596}{8} - 36^2} = \\sqrt{28.5} = 5.34",
          "explanation": "A typical $1987$ gust differed from the mean by about $5.3$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Total the 2015 gusts (part c)",
          "workingLatex": "\\Sigma x = 19+22+25+27+28+31+33+39 = 224",
          "explanation": "We repeat the process for $2015$, starting with the total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Mean for 2015",
          "workingLatex": "\\bar{x}_{15} = \\dfrac{224}{8} = 28.0",
          "explanation": "The mean gust in $2015$ was $28$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sum of squares for 2015",
          "workingLatex": "\\Sigma x^2 = 361+484+625+729+784+961+1089+1521 = 6554",
          "explanation": "We need the squared total to measure the $2015$ spread.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Standard deviation for 2015",
          "workingLatex": "\\sigma_{15} = \\sqrt{\\dfrac{6554}{8} - 28^2} = \\sqrt{35.25} = 5.94",
          "explanation": "In $2015$ gusts differed from their mean by about $5.9$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Ranges (part d)",
          "workingLatex": "\\text{Range}_{87} = 46-28 = 18,\\qquad \\text{Range}_{15} = 39-19 = 20",
          "explanation": "The range is the full spread from calmest to gustiest day in each year.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the averages (part e)",
          "workingLatex": "\\bar{x}_{87} = 36.0 > \\bar{x}_{15} = 28.0",
          "explanation": "The $1987$ mean is $8$ knots higher, so on average that period was noticeably windier.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the spread",
          "workingLatex": "\\sigma_{87} = 5.34 < \\sigma_{15} = 5.94",
          "explanation": "The standard deviations are close, with $1987$ marginally more consistent despite its stronger gusts; the ranges ($18$ vs $20$ knots) tell the same story.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "\\text{1987: windier on average, slightly more consistent.}",
          "explanation": "Compared with $2015$, the $1987$ period at Leeming had stronger gusts on average and very similar day-to-day variability.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Quantitative and continuous. (b) $\\bar{x}_{87}=36.0$ kn, $\\sigma_{87}\\approx5.34$ kn. (c) $\\bar{x}_{15}=28.0$ kn, $\\sigma_{15}\\approx5.94$ kn. (d) Ranges $18$ kn and $20$ kn. (e) $1987$ was windier on average (by about $8$ kn) with almost the same spread, so it was a consistently gustier period than $2015$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q065",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "regression",
      "correlation",
      "prediction",
      "windspeed"
    ],
    "questionText": "The table shows the daily mean windspeed (knots) and daily maximum gust (knots) on eight days at Leuchars in the large data set. $\\begin{array}{c|cccccccc} \\text{Windspeed (kn)} & 8 & 10 & 11 & 13 & 15 & 16 & 18 & 20 \\\\ \\hline \\text{Gust (kn)} & 22 & 26 & 28 & 31 & 35 & 37 & 40 & 44 \\end{array}$ You may use $\\Sigma xy = 3864$ and $\\Sigma x^2 = 1659$. (a) Describe the correlation. (b) Find the regression line of gust ($y$) on windspeed ($x$). (c) Interpret the gradient in context. (d) Estimate the gust on a day with mean windspeed $14$ knots and say whether it is reliable. (e) Explain why the line should not be used to estimate the gust for a windspeed of $40$ knots.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 8,
          "y": 22
        },
        {
          "x": 10,
          "y": 26
        },
        {
          "x": 11,
          "y": 28
        },
        {
          "x": 13,
          "y": 31
        },
        {
          "x": 15,
          "y": 35
        },
        {
          "x": 16,
          "y": 37
        },
        {
          "x": 18,
          "y": 40
        },
        {
          "x": 20,
          "y": 44
        }
      ],
      "line": {
        "a": 7.79,
        "b": 1.808
      },
      "predict": {
        "x": 14,
        "y": 33.1,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "daily mean windspeed (knots)",
      "yAxisLabel": "daily maximum gust (knots)",
      "caption": "Leuchars: daily maximum gust against daily mean windspeed, with the regression line.",
      "alt": "Eight points rising steeply from lower-left to upper-right, close to a fitted line, with a read-off at windspeed 14."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the correlation (part a)",
          "workingLatex": "\\text{Higher mean windspeed goes with higher gust: strong positive correlation.}",
          "explanation": "The points lie in a tight rising band, so gust and windspeed move together in a strong positive linear way.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the totals (part b)",
          "workingLatex": "\\Sigma x = 111,\\qquad \\Sigma y = 263,\\qquad n = 8",
          "explanation": "Regression needs the totals of both variables, found by adding the eight windspeeds and the eight gusts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the means",
          "workingLatex": "\\bar{x} = \\dfrac{111}{8} = 13.875,\\qquad \\bar{y} = \\dfrac{263}{8} = 32.875",
          "explanation": "The line passes through the mean point $(\\bar{x},\\bar{y})$, so we compute both means.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the summation quantities",
          "workingLatex": "\\Sigma xy = 3864,\\qquad \\Sigma x^2 = 1659",
          "explanation": "These summarise the joint variation of the pairs and the spread of the windspeeds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $S_{xy}$",
          "workingLatex": "S_{xy} = 3864 - \\dfrac{111\\times 263}{8} = 214.875",
          "explanation": "$S_{xy}$ measures how windspeed and gust vary together about their means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $S_{xx}$",
          "workingLatex": "S_{xx} = 1659 - \\dfrac{111^2}{8} = 118.875",
          "explanation": "$S_{xx}$ measures how spread out the windspeeds are about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{214.875}{118.875} = 1.808",
          "explanation": "The gradient is the extra gust per $1$ knot of mean windspeed, from the ratio of the two sums.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 32.875 - 1.808(13.875) = 7.79",
          "explanation": "Passing the line through the mean point fixes the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the regression line",
          "workingLatex": "y = 7.79 + 1.808x",
          "explanation": "This least-squares line best summarises how gust depends on mean windspeed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the gradient (part c)",
          "workingLatex": "b = 1.808\\ \\text{knots of gust per knot of windspeed}",
          "explanation": "Each extra knot of daily mean windspeed is associated with about $1.81$ knots more maximum gust.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Predict at $14$ knots (part d)",
          "workingLatex": "\\hat{y} = 7.79 + 1.808(14) = 33.1",
          "explanation": "A day with mean windspeed $14$ knots is predicted to have a maximum gust of about $33$ knots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on reliability",
          "workingLatex": "8 \\le 14 \\le 20\\ \\Rightarrow\\ \\text{interpolation}",
          "explanation": "Because $14$ knots lies inside the observed range $8$ to $20$ knots, this is interpolation and the estimate is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Explain the $40$-knot case (part e)",
          "workingLatex": "40 > 20\\ \\Rightarrow\\ \\text{extrapolation}",
          "explanation": "A windspeed of $40$ knots is far beyond the largest observed value ($20$ knots), so predicting there is extrapolation; the straight-line pattern may not continue, making such an estimate unreliable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclusion",
          "workingLatex": "\\text{At Leuchars, windier days have proportionately stronger gusts.}",
          "explanation": "The data give a strong positive rule of about $1.81$ extra knots of gust per knot of windspeed, useful only within the measured range of $8$ to $20$ knots.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Strong positive correlation. (b) $y = 7.79 + 1.808x$. (c) About $1.81$ knots more gust per knot of windspeed. (d) $\\hat{y}\\approx 33.1$ knots; reliable ($14$ kn is interpolation). (e) $40$ kn is well outside the data, so estimating there is extrapolation and unreliable."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q066",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "comparison",
      "box-plot",
      "outlier",
      "temperature"
    ],
    "questionText": "Beijing and Jacksonville are two of the overseas stations in the large data set. The tables show the daily mean temperature ($\\degree$C) on eleven days at each, written in ascending order. Beijing: $\\begin{array}{c|ccccccccccc} \\text{Rank} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\\\ \\hline \\text{Temp} & 15.5 & 23.5 & 25.1 & 26.0 & 27.2 & 28.4 & 29.0 & 29.8 & 30.5 & 31.2 & 33.0 \\end{array}$ Jacksonville: $\\begin{array}{c|ccccccccccc} \\text{Rank} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\\\ \\hline \\text{Temp} & 24.0 & 25.5 & 26.2 & 26.8 & 27.5 & 28.0 & 28.6 & 29.1 & 29.7 & 30.4 & 31.5 \\end{array}$ (a) State the type of data and name the two overseas stations shown. (b) For Beijing find the median, quartiles and IQR, and test the lowest reading with the $1.5\\times\\text{IQR}$ rule. (c) Draw a box plot for Beijing. (d) For Jacksonville find the median, quartiles and IQR. (e) Compare the two cities, and explain why the median is preferred to the mean for Beijing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Classify and name (part a)",
          "workingLatex": "\\text{Quantitative, continuous; Beijing and Jacksonville are overseas stations.}",
          "explanation": "Temperature is a measured quantity on a continuous scale; Beijing and Jacksonville are the two non-UK stations quoted here from the overseas group of the large data set.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the Beijing quartiles (part b)",
          "workingLatex": "n=11:\\quad Q_1\\to\\text{3rd},\\ Q_2\\to\\text{6th},\\ Q_3\\to\\text{9th value}",
          "explanation": "With $11$ ordered values the quartiles fall on the 3rd, 6th and 9th readings, splitting the data into quarters.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the Beijing summary",
          "workingLatex": "Q_1 = 25.1,\\qquad Q_2 = 28.4,\\qquad Q_3 = 30.5",
          "explanation": "Counting to those positions gives the lower quartile, median and upper quartile.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Beijing IQR",
          "workingLatex": "\\text{IQR} = 30.5 - 25.1 = 5.4",
          "explanation": "The middle half of Beijing's days spans $5.4\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lower outlier fence",
          "workingLatex": "Q_1 - 1.5\\times\\text{IQR} = 25.1 - 1.5(5.4) = 17.0",
          "explanation": "Anything below this fence is an outlier, so we test the coolest reading against $17.0\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the lowest reading",
          "workingLatex": "15.5 < 17.0\\ \\Rightarrow\\ \\text{outlier}",
          "explanation": "The $15.5\\,\\degree$C day lies below the fence, so it is an unusually cool outlier; the lowest ordinary value is $23.5\\,\\degree$C.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Draw the Beijing box plot (part c)",
          "workingLatex": "\\text{whiskers } 23.5\\text{ and }33.0;\\ \\ \\text{box } 25.1\\,|\\,28.4\\,|\\,30.5;\\ \\ \\text{outlier } 15.5",
          "explanation": "The box runs across the quartiles with the median inside; the whiskers reach the smallest and largest non-outliers, and the cool outlier is plotted separately.",
          "diagram": {
            "kind": "boxPlot",
            "axisMin": 14,
            "axisMax": 34,
            "q1": 25.1,
            "median": 28.4,
            "q3": 30.5,
            "whiskerLow": 23.5,
            "whiskerHigh": 33,
            "outliers": [
              15.5
            ],
            "axisLabel": "daily mean temperature (\\degree C)",
            "showValues": true,
            "caption": "Box plot of daily mean temperature at Beijing (\\degree C).",
            "alt": "Box plot with box 25.1 to 30.5, median 28.4, whiskers 23.5 and 33.0, and a low outlier marked at 15.5."
          }
        },
        {
          "stepNumber": 8,
          "description": "Beijing mean, for comparison",
          "workingLatex": "\\bar{x} = \\dfrac{299.2}{11} = 27.2",
          "explanation": "The mean of $27.2\\,\\degree$C is below the median of $28.4\\,\\degree$C, because the single cool outlier drags the mean down while leaving the median unmoved.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Jacksonville quartiles (part d)",
          "workingLatex": "Q_1 = 26.2,\\qquad Q_2 = 28.0,\\qquad Q_3 = 29.7",
          "explanation": "The same 3rd, 6th and 9th positions give Jacksonville's five-number summary.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Jacksonville IQR",
          "workingLatex": "\\text{IQR} = 29.7 - 26.2 = 3.5",
          "explanation": "Jacksonville's middle half spans only $3.5\\,\\degree$C, a narrower band than Beijing's.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the averages (part e)",
          "workingLatex": "Q_2^{\\text{Bei}} = 28.4\\ \\text{vs}\\ Q_2^{\\text{Jac}} = 28.0",
          "explanation": "The medians are close, so both cities are similarly hot, with Beijing marginally warmer in the middle of the data.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the spread",
          "workingLatex": "\\text{IQR}_{\\text{Bei}} = 5.4 > \\text{IQR}_{\\text{Jac}} = 3.5",
          "explanation": "Beijing's larger IQR, plus its cool outlier, shows its temperatures are more variable, while Jacksonville is more consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Explain the preferred average",
          "workingLatex": "\\bar{x} = 27.2 < Q_2 = 28.4\\ (\\text{outlier at }15.5)",
          "explanation": "Because the single outlier pulls the mean below the median, the median (and IQR) give a fairer picture of a typical Beijing day; they resist extreme values.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclusion",
          "workingLatex": "\\text{Both hot; Jacksonville steadier, Beijing more variable with a cool anomaly.}",
          "explanation": "The two cities have similar typical temperatures, but Jacksonville is the more consistent while Beijing is more variable and recorded one unusually cool day.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Quantitative, continuous; Beijing and Jacksonville. (b) $Q_1=25.1$, median $=28.4$, $Q_3=30.5\\,\\degree$C, IQR $=5.4\\,\\degree$C; $15.5\\,\\degree$C is an outlier. (d) $Q_1=26.2$, median $=28.0$, $Q_3=29.7\\,\\degree$C, IQR $=3.5\\,\\degree$C. (e) Medians are similar but Beijing is more variable; its cool outlier drags the mean ($27.2$) below the median ($28.4\\,\\degree$C), so the median is the fairer average."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q067",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "grouped-data",
      "standard-deviation",
      "skew",
      "visibility"
    ],
    "questionText": "The grouped table shows the daily mean visibility (dm, decametres) on $50$ days at Camborne from the large data set. $\\begin{array}{c|c} \\text{Visibility } v\\ (\\text{dm}) & \\text{Frequency} \\\\ \\hline 0 \\le v < 1000 & 4 \\\\ 1000 \\le v < 2000 & 6 \\\\ 2000 \\le v < 3000 & 10 \\\\ 3000 \\le v < 4000 & 14 \\\\ 4000 \\le v < 5000 & 16 \\end{array}$ (a) State the type of data. (b) Estimate the mean visibility. (c) Estimate the standard deviation. (d) Estimate the median and the interquartile range. (e) Use your results to describe the skew, and interpret it in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Classify the data (part a)",
          "workingLatex": "\\text{Daily mean visibility (dm): quantitative and continuous.}",
          "explanation": "Visibility is a measured distance recorded in decametres, so it is quantitative and continuous.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up midpoints (part b)",
          "workingLatex": "\\text{midpoints } 500,\\ 1500,\\ 2500,\\ 3500,\\ 4500",
          "explanation": "For grouped data we treat every day in a class as sitting at the class midpoint, which lets us estimate totals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimate $\\Sigma fx$",
          "workingLatex": "\\Sigma fx = 4(500)+6(1500)+10(2500)+14(3500)+16(4500) = 157000",
          "explanation": "Multiplying each midpoint by its frequency and adding estimates the total visibility over all $50$ days.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Estimate the mean",
          "workingLatex": "\\bar{x} = \\dfrac{157000}{50} = 3140",
          "explanation": "Sharing the estimated total over $50$ days gives a mean visibility of about $3140$ dm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Estimate $\\Sigma fx^2$ (part c)",
          "workingLatex": "\\Sigma fx^2 = 4(500^2)+\\cdots+16(4500^2) = 572500000",
          "explanation": "The standard deviation needs the sum of frequency times midpoint squared, built the same way as $\\Sigma fx$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Estimate the standard deviation",
          "workingLatex": "\\sigma = \\sqrt{\\dfrac{572500000}{50} - 3140^2} = \\sqrt{1590400} = 1261",
          "explanation": "Substituting into the grouped standard-deviation formula gives a typical spread of about $1261$ dm about the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cumulative frequencies (part d)",
          "workingLatex": "\\text{cf: } 4,\\ 10,\\ 20,\\ 34,\\ 50",
          "explanation": "Running totals of the frequencies let us locate the median and quartiles by interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Estimate the median",
          "workingLatex": "\\dfrac{n}{2}=25\\ \\Rightarrow\\ Q_2 = 3000 + \\dfrac{25-20}{34-20}\\times 1000 = 3357",
          "explanation": "The $25$th day lies in $3000\\le v<4000$; going the fraction $\\tfrac{5}{14}$ into that class estimates the median visibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Estimate the quartiles",
          "workingLatex": "Q_1 = 2000 + \\dfrac{12.5-10}{20-10}\\times 1000 = 2250,\\qquad Q_3 = 4000 + \\dfrac{37.5-34}{50-34}\\times 1000 = 4219",
          "explanation": "The $12.5$th and $37.5$th days fall in the $2000$–$3000$ and $4000$–$5000$ classes, giving the two quartiles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interquartile range",
          "workingLatex": "\\text{IQR} = 4219 - 2250 = 1969",
          "explanation": "The middle half of the days span about $1969$ dm of visibility.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare mean and median (part e)",
          "workingLatex": "\\bar{x} = 3140 < Q_2 = 3357",
          "explanation": "The mean sits below the median, which is the fingerprint of a negatively skewed distribution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm with the quartiles",
          "workingLatex": "Q_2 - Q_1 = 1107 > Q_3 - Q_2 = 862",
          "explanation": "The lower quartile is further from the median than the upper quartile is, confirming a tail stretching towards low visibility.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "\\text{negative skew: a tail of low-visibility (misty) days}",
          "explanation": "Camborne usually had good visibility (median about $3357$ dm), but a tail of foggy or misty days with low readings pulls the mean down and produces negative skew.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Quantitative and continuous. (b) mean $\\approx 3140$ dm. (c) $\\sigma\\approx 1261$ dm. (d) median $\\approx 3357$ dm, IQR $\\approx 1969$ dm. (e) Mean $<$ median and $Q_2-Q_1>Q_3-Q_2$, so the data are negatively skewed: mostly good visibility with a tail of low-visibility (misty) days."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q068",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "cleaning",
      "standard-deviation",
      "outlier",
      "sunshine"
    ],
    "questionText": "Perth is an overseas station in the large data set. The tables show the daily total sunshine (hours) in two months there; the sensor was down on day $3$ of Month A, giving $\\text{n/a}$. Month A: $\\begin{array}{c|ccccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\\\ \\hline \\text{Sun (h)} & 5.2 & 6.1 & \\text{n/a} & 7.4 & 8.0 & 6.8 & 5.9 & 7.1 & 6.5 \\end{array}$ Month B: $\\begin{array}{c|cccccccc} \\text{Day} & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ \\hline \\text{Sun (h)} & 3.1 & 4.5 & 5.0 & 5.6 & 6.2 & 6.8 & 7.5 & 10.5 \\end{array}$ (a) Explain how the $\\text{n/a}$ is handled and state the type of data. (b) Find the mean and standard deviation for Month A. (c) Find the mean and standard deviation for Month B. (d) Using the rule that a value more than $2$ standard deviations from the mean is an outlier, test the largest Month B reading. (e) Compare the two months.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Handle the missing value (part a)",
          "workingLatex": "n_A = 9 - 1 = 8;\\quad \\text{sunshine is quantitative, continuous.}",
          "explanation": "The convention is that $\\text{n/a}$ means the reading was never taken, so day $3$ is simply left out, dropping Month A from $9$ to $8$ usable days; sunshine hours are quantitative and continuous.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total Month A (part b)",
          "workingLatex": "\\Sigma x = 5.2+6.1+7.4+8.0+6.8+5.9+7.1+6.5 = 53.0",
          "explanation": "We add only the eight available readings; the $\\text{n/a}$ day contributes nothing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mean for Month A",
          "workingLatex": "\\bar{x}_A = \\dfrac{53.0}{8} = 6.625",
          "explanation": "Sharing the total over the $8$ valid days gives a mean of about $6.63$ hours of sunshine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation for Month A",
          "workingLatex": "\\sigma_A = \\sqrt{\\dfrac{356.72}{8} - 6.625^2} = \\sqrt{0.699} = 0.84",
          "explanation": "With $\\Sigma x^2 = 356.72$, the spread is only about $0.84$ hours, so Month A was very consistent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total and mean for Month B (part c)",
          "workingLatex": "\\Sigma x = 49.2,\\qquad \\bar{x}_B = \\dfrac{49.2}{8} = 6.15",
          "explanation": "All eight Month B days are available, giving a mean of about $6.15$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standard deviation for Month B",
          "workingLatex": "\\sigma_B = \\sqrt{\\dfrac{337.40}{8} - 6.15^2} = \\sqrt{4.35} = 2.09",
          "explanation": "With $\\Sigma x^2 = 337.40$, the spread is about $2.09$ hours, much wider than Month A.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the 2-SD rule (part d)",
          "workingLatex": "\\bar{x}_B + 2\\sigma_B = 6.15 + 2(2.09) = 10.33",
          "explanation": "The rule flags any reading more than two standard deviations above the mean, so we build the upper limit for Month B.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the largest Month B reading",
          "workingLatex": "10.5 > 10.33\\ \\Rightarrow\\ \\text{outlier}",
          "explanation": "The $10.5$-hour day exceeds the limit, so it is an outlier: an unusually sunny day for that month.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Ranges",
          "workingLatex": "\\text{Range}_A = 8.0-5.2 = 2.8,\\qquad \\text{Range}_B = 10.5-3.1 = 7.4",
          "explanation": "The ranges reinforce the spread picture: Month B stretches much further from calm to bright.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the averages (part e)",
          "workingLatex": "\\bar{x}_A = 6.625 > \\bar{x}_B = 6.15",
          "explanation": "Month A was slightly sunnier on average, by about half an hour per day.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the spread",
          "workingLatex": "\\sigma_A = 0.84 \\ll \\sigma_B = 2.09",
          "explanation": "Month A's sunshine was far more consistent, while Month B swung widely from dull to very bright days.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the effect of anomalies and missing data",
          "workingLatex": "\\text{Month A: }n\\text{ dropped }9\\to8;\\ \\ \\text{Month B outlier }10.5",
          "explanation": "The comparison rests on $8$ days each after excluding the $\\text{n/a}$, and Month B's single bright outlier inflates both its mean and its spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "\\text{Month A: sunnier and steadier; Month B: duller and more variable.}",
          "explanation": "At Perth, Month A was marginally sunnier and much more consistent, whereas Month B was more variable with one exceptionally sunny day.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Exclude the $\\text{n/a}$, so Month A has $n=8$; data are quantitative and continuous. (b) $\\bar{x}_A=6.625$ h, $\\sigma_A\\approx0.84$ h. (c) $\\bar{x}_B=6.15$ h, $\\sigma_B\\approx2.09$ h. (d) $10.5>10.33$, so it is an outlier. (e) Month A was slightly sunnier and far more consistent; Month B was more variable with one anomalously sunny day."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q069",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "large-data-set",
      "regression",
      "correlation",
      "coding",
      "pressure"
    ],
    "questionText": "The table shows the daily mean pressure (hPa) and daily total rainfall (mm) on eight days at Hurn in the large data set; the driest day recorded $\\text{tr}$ (trace), counted as $0$ mm. $\\begin{array}{c|cccccccc} \\text{Pressure (hPa)} & 1002 & 1006 & 1009 & 1012 & 1015 & 1018 & 1021 & 1024 \\\\ \\hline \\text{Rainfall (mm)} & 7.0 & 5.8 & 4.2 & 3.5 & 2.4 & 1.0 & 0.3 & \\text{tr} \\end{array}$ Use the coding $t = x - 1000$, for which $\\Sigma t = 107$, $\\Sigma y = 24.2$, $\\Sigma t^2 = 1831$ and $\\Sigma ty = 188.9$. (a) Describe the correlation. (b) Find the regression line of rainfall ($y$) on pressure ($x$). (c) Interpret the gradient. (d) Estimate the rainfall on a day of pressure $1013$ hPa. (e) Comment on the reliability of your estimate and on whether high pressure causes dry weather.",
    "questionDiagram": {
      "kind": "scatter",
      "points": [
        {
          "x": 1002,
          "y": 7
        },
        {
          "x": 1006,
          "y": 5.8
        },
        {
          "x": 1009,
          "y": 4.2
        },
        {
          "x": 1012,
          "y": 3.5
        },
        {
          "x": 1015,
          "y": 2.4
        },
        {
          "x": 1018,
          "y": 1
        },
        {
          "x": 1021,
          "y": 0.3
        },
        {
          "x": 1024,
          "y": 0
        }
      ],
      "line": {
        "a": 344.53,
        "b": -0.337
      },
      "predict": {
        "x": 1013,
        "y": 3.1,
        "label": "\\hat{y}"
      },
      "xAxisLabel": "daily mean pressure (hPa)",
      "yAxisLabel": "daily total rainfall (mm)",
      "caption": "Hurn: daily total rainfall against daily mean pressure, with the regression line.",
      "alt": "Eight points falling from upper-left to lower-right, close to a downward-sloping line, with a read-off near pressure 1013."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the correlation (part a)",
          "workingLatex": "\\text{Higher pressure goes with less rain: negative correlation.}",
          "explanation": "The points fall from upper-left to lower-right, so as pressure rises rainfall tends to drop, which is negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the coding (part b)",
          "workingLatex": "t = x - 1000\\ ;\\quad \\text{the }\\text{tr}\\text{ day counts as } y = 0",
          "explanation": "Subtracting $1000$ from each pressure gives small, manageable numbers to work with; the trace day is treated as $0$ mm of rain.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Coded totals and means",
          "workingLatex": "\\Sigma t = 107,\\ \\Sigma y = 24.2,\\ n = 8\\ \\Rightarrow\\ \\bar{t} = 13.375,\\ \\bar{y} = 3.025",
          "explanation": "Working in $t$ keeps the arithmetic simple; the means locate the centre of the data.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the coded sums",
          "workingLatex": "\\Sigma ty = 188.9,\\qquad \\Sigma t^2 = 1831",
          "explanation": "These summarise how $t$ and $y$ vary together and how $t$ varies on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $S_{ty}$",
          "workingLatex": "S_{ty} = 188.9 - \\dfrac{107\\times 24.2}{8} = -134.775",
          "explanation": "A negative $S_{ty}$ confirms the downward trend: rain falls as pressure rises.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $S_{tt}$",
          "workingLatex": "S_{tt} = 1831 - \\dfrac{107^2}{8} = 399.875",
          "explanation": "$S_{tt}$ measures the spread of the coded pressures about their mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the gradient",
          "workingLatex": "b = \\dfrac{-134.775}{399.875} = -0.337",
          "explanation": "Since coding only shifts the pressures, the gradient in $t$ is exactly the gradient in $x$: about $-0.337$ mm per hPa.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert the mean pressure",
          "workingLatex": "\\bar{x} = 1000 + \\bar{t} = 1000 + 13.375 = 1013.375",
          "explanation": "To find the intercept in real pressure we need the mean of the original $x$ values, recovered by adding $1000$ back.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the intercept",
          "workingLatex": "a = \\bar{y} - b\\bar{x} = 3.025 - (-0.337)(1013.375) = 344.53",
          "explanation": "Forcing the line through the mean point $(\\bar{x},\\bar{y})$ fixes the intercept in terms of real pressure.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the regression line",
          "workingLatex": "y = 344.53 - 0.337x",
          "explanation": "This is the least-squares line for rainfall on daily mean pressure.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the gradient (part c)",
          "workingLatex": "b = -0.337\\ \\text{mm per hPa}",
          "explanation": "Each extra hectopascal of pressure is associated with about $0.34$ mm less rain, matching settled high-pressure weather being drier.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Estimate at $1013$ hPa (part d)",
          "workingLatex": "\\hat{y} = 344.53 - 0.337(1013) = 3.1",
          "explanation": "A day of pressure $1013$ hPa (inside the observed range) is predicted to have about $3.1$ mm of rain.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reliability and causation (part e)",
          "workingLatex": "1002 \\le 1013 \\le 1024\\ \\Rightarrow\\ \\text{interpolation}",
          "explanation": "Because $1013$ hPa lies within the data, this is interpolation and reasonably reliable; but correlation is not causation, so while the link is physically plausible, the line alone does not prove pressure causes the dry weather.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclusion",
          "workingLatex": "\\text{Higher pressure at Hurn is linked with drier days.}",
          "explanation": "The data show a clear negative link, predicting about $3.1$ mm on a $1013$ hPa day, valid only within the measured pressure range.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Negative correlation. (b) $y = 344.53 - 0.337x$. (c) About $0.34$ mm less rain per hPa. (d) $\\hat{y}\\approx 3.1$ mm at $1013$ hPa. (e) Reliable (interpolation), but correlation is not causation, so the line does not prove high pressure causes dry weather."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Large data set fluency",
    "subtopicId": "al.y1.stats.large-data-set",
    "difficulty": "Hard",
    "id": "al.y1.stats.large-data-set.q070",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "large-data-set",
      "cleaning",
      "comparison",
      "outlier",
      "rainfall"
    ],
    "questionText": "The tables show the daily total rainfall (mm) at Heathrow across several days in $1987$ and in $2015$, from the large data set, listed in ascending order; $\\text{tr}$ is trace rainfall (counted as $0$ mm) and $\\text{n/a}$ is a missing reading. $1987$: $\\begin{array}{c|ccccccccccc} \\  & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\\\ \\hline \\text{mm} & \\text{tr} & 0.2 & 0.8 & 1.5 & 2.1 & 3.0 & 4.2 & 5.5 & 6.8 & 8.1 & 12.4 \\end{array}$ $2015$: $\\begin{array}{c|cccccccccccc} \\  & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 \\\\ \\hline \\text{mm} & \\text{tr} & 0.1 & 0.3 & 0.5 & 1.0 & \\text{n/a} & 1.4 & 2.0 & 2.8 & 3.5 & 4.0 & 9.5 \\end{array}$ (a) Apply the data conventions and state how many usable readings each year has. (b) For $1987$ find the median, quartiles, IQR and range. (c) For $2015$ find the median, quartiles, IQR and range. (d) Test the largest reading in each year with the $1.5\\times\\text{IQR}$ rule. (e) Compare the two years and comment on any anomaly and on the skew.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the conventions (part a)",
          "workingLatex": "\\text{tr}\\to 0;\\ \\ \\text{exclude }\\text{n/a}\\ \\Rightarrow\\ n_{1987}=11,\\ n_{2015}=11",
          "explanation": "A $\\text{tr}$ day counts as $0$ mm and stays in, but an $\\text{n/a}$ day is removed as it was never recorded; this leaves $11$ usable readings in each year, so the quartiles fall neatly on the 3rd, 6th and 9th values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the 1987 quartiles (part b)",
          "workingLatex": "n=11:\\quad Q_1\\to\\text{3rd},\\ Q_2\\to\\text{6th},\\ Q_3\\to\\text{9th value}",
          "explanation": "With $11$ ordered readings the median and quartiles sit on these positions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the 1987 summary",
          "workingLatex": "Q_1 = 0.8,\\ Q_2 = 3.0,\\ Q_3 = 6.8;\\quad \\text{range} = 12.4 - 0 = 12.4",
          "explanation": "Counting to the positions gives the quartiles and median; the range runs from the trace day ($0$) to the wettest day.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "1987 IQR",
          "workingLatex": "\\text{IQR} = 6.8 - 0.8 = 6.0",
          "explanation": "The middle half of $1987$ days span $6.0$ mm of rain.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read the 2015 summary (part c)",
          "workingLatex": "Q_1 = 0.3,\\ Q_2 = 1.4,\\ Q_3 = 3.5;\\quad \\text{range} = 9.5 - 0 = 9.5",
          "explanation": "After removing the $\\text{n/a}$, the ordered $2015$ readings give these quartiles and a range from $0$ to $9.5$ mm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "2015 IQR",
          "workingLatex": "\\text{IQR} = 3.5 - 0.3 = 3.2",
          "explanation": "The middle half of $2015$ days span $3.2$ mm, a narrower band than $1987$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Outlier check for 1987 (part d)",
          "workingLatex": "Q_3 + 1.5\\times\\text{IQR} = 6.8 + 1.5(6.0) = 15.8;\\ \\ 12.4 < 15.8",
          "explanation": "The wettest $1987$ day ($12.4$ mm) is below the fence, so $1987$ has no outlier by the rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Outlier check for 2015",
          "workingLatex": "Q_3 + 1.5\\times\\text{IQR} = 3.5 + 1.5(3.2) = 8.3;\\ \\ 9.5 > 8.3",
          "explanation": "The wettest $2015$ day ($9.5$ mm) lies beyond the fence, so it is an outlier: a single anomalously wet day.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the averages (part e)",
          "workingLatex": "Q_2^{1987} = 3.0 > Q_2^{2015} = 1.4",
          "explanation": "The $1987$ median is more than double the $2015$ median, so a typical day was wetter in $1987$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the spread",
          "workingLatex": "\\text{IQR}_{1987} = 6.0 > \\text{IQR}_{2015} = 3.2",
          "explanation": "The $1987$ days were also more variable, with a wider interquartile spread than $2015$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on the skew",
          "workingLatex": "Q_2 - Q_1 < Q_3 - Q_2\\ \\text{in both years}",
          "explanation": "In each year the median sits closer to the lower quartile, so both distributions are positively skewed: many dry days and a few wet ones.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on the anomaly",
          "workingLatex": "2015:\\ 9.5\\ \\text{mm is an outlier};\\ \\ 1987:\\ \\text{none}",
          "explanation": "The $2015$ picture is dominated by one very wet day, which the box-plot rule flags, whereas $1987$'s wettest day is extreme but not an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclusion",
          "workingLatex": "\\text{1987: wetter and more variable; 2015: drier with one anomalous wet day.}",
          "explanation": "Overall Heathrow was wetter and more variable in $1987$, while $2015$ was generally drier apart from a single anomalously wet day; both years are positively skewed.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\text{tr}=0$, exclude $\\text{n/a}$: $11$ usable readings each year. (b) $1987$: $Q_1=0.8$, median $=3.0$, $Q_3=6.8$ mm, IQR $=6.0$ mm, range $12.4$ mm. (c) $2015$: $Q_1=0.3$, median $=1.4$, $Q_3=3.5$ mm, IQR $=3.2$ mm, range $9.5$ mm. (d) No $1987$ outlier; $2015$'s $9.5$ mm is an outlier. (e) $1987$ was wetter and more variable; both years positively skewed, with $2015$ marked by one anomalous wet day."
    }
  }
];
