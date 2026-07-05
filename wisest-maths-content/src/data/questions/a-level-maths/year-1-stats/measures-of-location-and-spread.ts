import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.stats.location-spread.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "mean",
      "average",
      "raw data",
      "test scores"
    ],
    "questionText": "A student's marks in five class tests are $12$, $15$, $9$, $14$ and $10$. Work out the mean mark.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula for the mean.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma x}{n}",
          "explanation": "The mean is the value each item would take if the total were shared out equally, so we add everything up and divide by how many items there are.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count how many marks there are.",
          "workingLatex": "n = 5",
          "explanation": "There are five separate test marks, so $n$, the number of data values, is $5$. This is the number we will divide by.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add all the marks together.",
          "workingLatex": "\\Sigma x = 12 + 15 + 9 + 14 + 10",
          "explanation": "Adding the marks gives the total number of marks scored across all five tests, which is the quantity being shared out.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the sum.",
          "workingLatex": "\\Sigma x = 60",
          "explanation": "Working left to right, $12+15=27$, then $27+9=36$, then $36+14=50$, then $50+10=60$. Keeping a running total makes the addition easy to check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the total by the number of marks.",
          "workingLatex": "\\bar{x} = \\frac{60}{5} = 12",
          "explanation": "Sharing the total of $60$ equally between the $5$ tests gives $12$ each, which is the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the mean.",
          "workingLatex": "\\bar{x} = 12",
          "explanation": "The mean mark is $12$, a single value that summarises the whole set. It sensibly sits in the middle of the marks, so the answer looks reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mean mark is $\\bar{x} = 12$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "median",
      "odd data set",
      "goals",
      "ordering data"
    ],
    "questionText": "In seven football matches a team scored $2$, $0$, $3$, $1$, $4$, $2$ and $5$ goals. Find the median number of goals scored.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the median is.",
          "workingLatex": "\\text{median} = \\text{middle value when ordered}",
          "explanation": "The median is the value in the middle of the data once it is placed in order, so half the values lie below it and half above. It marks the centre of the data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Put the goal totals in ascending order.",
          "workingLatex": "0,\\ 1,\\ 2,\\ 2,\\ 3,\\ 4,\\ 5",
          "explanation": "The median only makes sense once the data is sorted, because 'the middle' depends on the order. We list the values from smallest to largest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the data values.",
          "workingLatex": "n = 7",
          "explanation": "There are seven matches, so $n = 7$. Because $7$ is odd, there is a single value exactly in the middle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the position of the median.",
          "workingLatex": "\\frac{n+1}{2} = \\frac{7+1}{2} = 4",
          "explanation": "For an odd number of values the median sits at position $(n+1)/2$. Here that is the $4$th value, which has three values on each side of it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the value in the 4th position.",
          "workingLatex": "0,\\ 1,\\ 2,\\ \\underline{2},\\ 3,\\ 4,\\ 5",
          "explanation": "Counting to the fourth term in the ordered list lands on $2$, so this is the middle value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the median.",
          "workingLatex": "\\text{median} = 2",
          "explanation": "The median number of goals is $2$. Three matches had fewer than or equal to this and three had more, confirming it sits in the centre.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median is $2$ goals."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "median",
      "even data set",
      "temperatures"
    ],
    "questionText": "The midday temperatures (in $^{\\circ}\\text{C}$) recorded on six days were $14$, $18$, $11$, $20$, $16$ and $13$. Find the median temperature.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find the median.",
          "workingLatex": "\\text{median} = \\text{middle of the ordered data}",
          "explanation": "The median is the centre of the data once it is ordered. With an even number of values there is no single middle term, so we will need the two central values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the temperatures from lowest to highest.",
          "workingLatex": "11,\\ 13,\\ 14,\\ 16,\\ 18,\\ 20",
          "explanation": "Sorting the data first is essential, because the median depends on position within the ordered list.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the number of values.",
          "workingLatex": "n = 6 \\ (\\text{even})",
          "explanation": "There are six temperatures. Because $6$ is even, the middle falls between two values rather than on one, so we average the pair.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the two middle values.",
          "workingLatex": "11,\\ 13,\\ \\underline{14},\\ \\underline{16},\\ 18,\\ 20",
          "explanation": "The two central positions are the $3$rd and $4$th terms, $14$ and $16$. Two values lie to the left of them and two to the right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Average the two middle values.",
          "workingLatex": "\\text{median} = \\frac{14 + 16}{2} = \\frac{30}{2} = 15",
          "explanation": "Taking the halfway point between the two central values places the median exactly in the middle of the data.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the median.",
          "workingLatex": "\\text{median} = 15\\,^{\\circ}\\text{C}",
          "explanation": "The median temperature is $15\\,^{\\circ}\\text{C}$. It lies between the two central readings, exactly as expected for an even-sized data set.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median temperature is $15\\,^{\\circ}\\text{C}$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "mode",
      "frequency",
      "shoe sizes"
    ],
    "questionText": "A shop sold shoes in the following sizes one morning: $6$, $7$, $8$, $7$, $9$, $7$, $6$. Find the mode.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the mode is.",
          "workingLatex": "\\text{mode} = \\text{most frequent value}",
          "explanation": "The mode is simply the value that appears most often. It answers the question 'which value is most common?', which is exactly what a shop wants to know about sizes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Order the data to make counting easier.",
          "workingLatex": "6,\\ 6,\\ 7,\\ 7,\\ 7,\\ 8,\\ 9",
          "explanation": "Grouping equal values next to each other makes it much harder to miscount how many times each size occurs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count how many times size 6 appears.",
          "workingLatex": "\\text{size } 6: \\ 2 \\text{ times}",
          "explanation": "There are two $6$s in the list. Recording the frequency of each value lets us compare them fairly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count how many times size 7 appears.",
          "workingLatex": "\\text{size } 7: \\ 3 \\text{ times}",
          "explanation": "Size $7$ occurs three times, more than any value seen so far.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the remaining sizes.",
          "workingLatex": "\\text{size } 8: \\ 1, \\quad \\text{size } 9: \\ 1",
          "explanation": "Sizes $8$ and $9$ each appear only once, so neither can be the most common value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the frequencies.",
          "workingLatex": "3 > 2 > 1",
          "explanation": "The highest frequency is $3$, belonging to size $7$. The mode is whichever value has the largest count.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the mode.",
          "workingLatex": "\\text{mode} = 7",
          "explanation": "Size $7$ is the mode because it was sold most often. This tells the shop which size to keep best stocked.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mode is size $7$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "mode",
      "bimodal",
      "prices"
    ],
    "questionText": "The prices, in pounds, of six items on a stall are $3$, $5$, $5$, $7$, $7$ and $9$. State the mode(s) of the prices and explain what you notice.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of the mode.",
          "workingLatex": "\\text{mode} = \\text{most frequently occurring value}",
          "explanation": "The mode is the value (or values) that occur most often, so we need to count how many times each price appears.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the prices in order.",
          "workingLatex": "3,\\ 5,\\ 5,\\ 7,\\ 7,\\ 9",
          "explanation": "The data is already ordered, which makes repeated values easy to spot side by side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the frequency of each price.",
          "workingLatex": "3:1,\\quad 5:2,\\quad 7:2,\\quad 9:1",
          "explanation": "Writing the frequency next to each value lets us compare them directly. Prices $5$ and $7$ both appear twice, while $3$ and $9$ appear once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the highest frequency.",
          "workingLatex": "\\text{highest frequency} = 2",
          "explanation": "The largest count is $2$, and two different prices share it. When the top frequency is tied there is more than one mode.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the tie.",
          "workingLatex": "5 \\text{ and } 7 \\text{ both occur twice}",
          "explanation": "A data set with exactly two modes is described as bimodal. Neither value alone can claim to be 'the' most common, so we report both.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the modes.",
          "workingLatex": "\\text{modes} = \\pounds 5 \\text{ and } \\pounds 7",
          "explanation": "The prices $\\pounds 5$ and $\\pounds 7$ are the modes, so the data is bimodal. This shows the mode is not always a single number.",
          "diagram": null
        }
      ],
      "finalAnswer": "The data is bimodal: the modes are $\\pounds 5$ and $\\pounds 7$, since each occurs twice."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "mode",
      "categorical data",
      "choosing an average"
    ],
    "questionText": "A shop records the colour of each T-shirt sold one afternoon: red, blue, blue, green, red, blue. Which average (mean, median or mode) is the appropriate one to use here, and why? State its value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of data.",
          "workingLatex": "\\text{data} = \\{\\text{red, blue, green}\\}",
          "explanation": "The data values are colours, not numbers. This is categorical (qualitative) data, and the type of data controls which average is even possible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test whether the mean can be used.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma x}{n} \\ \\Rightarrow \\ \\text{needs adding}",
          "explanation": "The mean requires adding the values and dividing. You cannot add red to blue, so the mean has no meaning for colours.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test whether the median can be used.",
          "workingLatex": "\\text{median} \\Rightarrow \\text{needs ordering by size}",
          "explanation": "The median relies on placing values in numerical order. Colours have no natural 'smaller' or 'larger', so there is no genuine middle value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test whether the mode can be used.",
          "workingLatex": "\\text{mode} \\Rightarrow \\text{just counts frequency}",
          "explanation": "The mode only needs us to count how often each category appears, which works for any kind of data, including colours.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the frequency of each colour.",
          "workingLatex": "\\text{blue}:3,\\quad \\text{red}:2,\\quad \\text{green}:1",
          "explanation": "Blue appears three times, red twice and green once, so blue is the most common colour sold.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State and justify the appropriate average.",
          "workingLatex": "\\text{mode} = \\text{blue}",
          "explanation": "The mode is the appropriate average because the data is categorical, so only frequency can be measured. The modal colour is blue, telling the shop which colour sells best.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mode is appropriate because the data is categorical (colours cannot be added or ordered by size). The modal colour is blue."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "outlier",
      "mean vs median",
      "salaries"
    ],
    "questionText": "The annual salaries, in thousands of pounds, of the five employees in a small firm are $18$, $20$, $22$, $24$ and $150$. Calculate the mean and the median, and explain which better represents a typical salary and why.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the data and spot anything unusual.",
          "workingLatex": "18,\\ 20,\\ 22,\\ 24,\\ 150",
          "explanation": "Four salaries are clustered near $20$, but $150$ is far larger. A single value that lies well away from the rest is called an outlier, and outliers can distort some averages.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the salaries to find the total.",
          "workingLatex": "\\Sigma x = 18 + 20 + 22 + 24 + 150 = 234",
          "explanation": "Adding in stages, $18+20=38$, $+22=60$, $+24=84$, $+150=234$. This total is needed for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the mean.",
          "workingLatex": "\\bar{x} = \\frac{234}{5} = 46.8",
          "explanation": "Dividing the total by the five employees gives a mean of $46.8$ (thousand pounds). Notice this is larger than four of the five actual salaries.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order the data and find the median.",
          "workingLatex": "18,\\ 20,\\ \\underline{22},\\ 24,\\ 150 \\ \\Rightarrow \\ \\text{median} = 22",
          "explanation": "With five values (odd $n$), the median is the middle one. The data is already ordered, and the $3$rd value is $22$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the two averages.",
          "workingLatex": "\\bar{x} = 46.8, \\quad \\text{median} = 22",
          "explanation": "The mean $46.8$ sits above almost everyone, while the median $22$ sits right among the four similar salaries. They give very different pictures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the effect of the outlier.",
          "workingLatex": "150 \\uparrow \\ \\Rightarrow \\ \\bar{x} \\uparrow",
          "explanation": "The mean uses every value in its sum, so the single very large salary drags it upward. The median only depends on position, so the one extreme value does not move it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State which average is better.",
          "workingLatex": "\\text{use median} = 22",
          "explanation": "The median better represents a typical salary because it is resistant to the outlier, whereas the mean is inflated by the one large value.",
          "diagram": null
        }
      ],
      "finalAnswer": "Mean $= 46.8$ (thousand pounds), median $= 22$ (thousand pounds). The median better represents a typical salary because the outlier $150$ inflates the mean but leaves the median unaffected."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "mean",
      "average",
      "heights"
    ],
    "questionText": "The heights, in centimetres, of eight seedlings are $12$, $15$, $14$, $16$, $13$, $18$, $11$ and $17$. Find the mean height.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula for the mean.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma x}{n}",
          "explanation": "The mean shares the total height equally among the seedlings, so we add all the heights and divide by how many there are.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the number of seedlings.",
          "workingLatex": "n = 8",
          "explanation": "There are eight heights listed, so $n = 8$. This is the divisor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add all the heights.",
          "workingLatex": "\\Sigma x = 12 + 15 + 14 + 16 + 13 + 18 + 11 + 17",
          "explanation": "Summing the heights gives the total length that will be shared out equally across the eight seedlings.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the sum.",
          "workingLatex": "\\Sigma x = 116",
          "explanation": "Keeping a running total: $12+15=27$, $+14=41$, $+16=57$, $+13=70$, $+18=88$, $+11=99$, $+17=116$. The total is $116$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the total by the number of seedlings.",
          "workingLatex": "\\bar{x} = \\frac{116}{8} = 14.5",
          "explanation": "Sharing $116\\,\\text{cm}$ equally between $8$ seedlings gives $14.5\\,\\text{cm}$ each. A non-whole answer is perfectly acceptable for a mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the mean.",
          "workingLatex": "\\bar{x} = 14.5\\,\\text{cm}",
          "explanation": "The mean height is $14.5\\,\\text{cm}$, which sits sensibly in the middle of the range from $11$ to $18$, so the answer is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mean height is $14.5\\,\\text{cm}$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "mean",
      "missing value",
      "reverse mean",
      "target mean"
    ],
    "questionText": "A student has scored $14$, $18$, $16$ and $20$ in four tests. What must the student score in a fifth test so that the mean of all five tests is exactly $18$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the link between the mean and the total.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma x}{n} \\ \\Rightarrow \\ \\Sigma x = n \\bar{x}",
          "explanation": "Because the mean is the total divided by the count, the total must equal the count times the mean. Rearranging this way lets us work backwards from a target mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide how many tests there will be.",
          "workingLatex": "n = 5",
          "explanation": "The four existing tests plus the new one make five tests in total, so the mean will be based on $n = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the total marks needed for the target mean.",
          "workingLatex": "\\Sigma x = n \\bar{x} = 5 \\times 18 = 90",
          "explanation": "For the five tests to average $18$, their combined total must be $5 \\times 18 = 90$. This is the total the student is aiming for.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add up the four known scores.",
          "workingLatex": "14 + 18 + 16 + 20",
          "explanation": "To see how far the student already is towards the target, we total the marks already earned.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the known total.",
          "workingLatex": "= 68",
          "explanation": "Adding in stages: $14+18=32$, $+16=48$, $+20=68$. So the four tests contribute $68$ marks.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the equation for the missing score.",
          "workingLatex": "68 + x = 90",
          "explanation": "The known marks plus the unknown fifth score $x$ must reach the required total of $90$. This equation captures exactly that condition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the missing score.",
          "workingLatex": "x = 90 - 68 = 22",
          "explanation": "Subtracting the marks already gained from the required total gives the mark still needed in the last test.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the answer.",
          "workingLatex": "\\frac{68 + 22}{5} = \\frac{90}{5} = 18 \\ \\checkmark",
          "explanation": "Substituting $22$ back in gives a mean of exactly $18$, confirming the value is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the required score.",
          "workingLatex": "x = 22",
          "explanation": "The student must score $22$ in the fifth test to achieve a mean of $18$ overall.",
          "diagram": null
        }
      ],
      "finalAnswer": "The student must score $22$ in the fifth test."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "combined mean",
      "weighted mean",
      "comparing data sets"
    ],
    "questionText": "Class A has $12$ students with a mean test score of $15$. Class B has $8$ students with a mean test score of $20$. Find the mean score of all $20$ students combined.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise why you cannot just average the two means.",
          "workingLatex": "\\frac{15 + 20}{2} = 17.5 \\ (\\text{incorrect})",
          "explanation": "Simply averaging the two means treats the classes as equal in size, but Class A has more students. The larger class should carry more weight, so we must go back to totals.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall how to recover a total from a mean.",
          "workingLatex": "\\Sigma x = n \\bar{x}",
          "explanation": "Since the mean is the total divided by the count, multiplying the mean by the count gives back the total score for that group.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the total score for Class A.",
          "workingLatex": "\\Sigma x_A = 12 \\times 15 = 180",
          "explanation": "Twelve students averaging $15$ scored $180$ marks in total. This is the true contribution of Class A.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the total score for Class B.",
          "workingLatex": "\\Sigma x_B = 8 \\times 20 = 160",
          "explanation": "Eight students averaging $20$ scored $160$ marks in total. This is the true contribution of Class B.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the two totals together.",
          "workingLatex": "\\Sigma x = 180 + 160 = 340",
          "explanation": "Combining the two class totals gives the total marks scored by all the students together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the total number of students.",
          "workingLatex": "n = 12 + 8 = 20",
          "explanation": "There are $12 + 8 = 20$ students in the combined group, which is the number we divide by for the overall mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the combined mean.",
          "workingLatex": "\\bar{x} = \\frac{340}{20} = 17",
          "explanation": "Sharing the combined total of $340$ across all $20$ students gives an overall mean of $17$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sense-check the result.",
          "workingLatex": "15 < 17 < 17.5 < 20",
          "explanation": "The combined mean lies between $15$ and $20$, and is pulled closer to $15$ because Class A is larger. This is exactly what we expect, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the combined mean.",
          "workingLatex": "\\bar{x} = 17",
          "explanation": "The mean score of all $20$ students is $17$, correctly weighted by the size of each class.",
          "diagram": null
        }
      ],
      "finalAnswer": "The combined mean score is $17$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "range",
      "spread",
      "listed data"
    ],
    "questionText": "Find the range of the following data set: $15, 3, 20, 9, 7, 18, 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of the range.",
          "workingLatex": "\\text{range} = \\text{highest value} - \\text{lowest value}",
          "explanation": "The range measures how spread out the data is by comparing the two extreme values. A larger gap between the biggest and smallest value means the data is more spread out.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the values in ascending order.",
          "workingLatex": "3, 7, 9, 12, 15, 18, 20",
          "explanation": "Ordering the list puts the smallest and largest values at the two ends, so we can read off both extremes without missing either one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the smallest value.",
          "workingLatex": "\\text{lowest} = 3",
          "explanation": "Once the data is ordered, the smallest value sits at the very start of the list.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the largest value.",
          "workingLatex": "\\text{highest} = 20",
          "explanation": "The largest value sits at the very end of the ordered list.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the smallest from the largest.",
          "workingLatex": "\\text{range} = 20 - 3 = 17",
          "explanation": "The range is the distance between the two extremes, so we subtract the lowest value from the highest.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range.",
          "workingLatex": "\\text{range} = 17",
          "explanation": "This single number summarises the total spread of the data from smallest to largest.",
          "diagram": null
        }
      ],
      "finalAnswer": "The range is $17$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "median",
      "quartiles",
      "listed data"
    ],
    "questionText": "Find the median of the following data set: $8, 2, 13, 5, 16, 4, 11, 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count how many values there are.",
          "workingLatex": "n = 8",
          "explanation": "The number of data values decides where the median sits, so we count them before doing anything else.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the data in ascending order.",
          "workingLatex": "2, 4, 5, 7, 8, 11, 13, 16",
          "explanation": "The median is a positional average, so the values must be lined up from smallest to largest before we locate the middle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position of the median.",
          "workingLatex": "\\frac{n}{2} = \\frac{8}{2} = 4",
          "explanation": "The median is found using position $= \\frac{n}{2}$, which points to the middle of the ordered data.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide how to read the position.",
          "workingLatex": "\\text{position} = 4 \\text{ (a whole number)}",
          "explanation": "When the position works out to a whole number, the median lies exactly between that term and the next one, so we average two values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the 4th and 5th values.",
          "workingLatex": "4\\text{th} = 7, \\quad 5\\text{th} = 8",
          "explanation": "We read off the two terms sitting on either side of the halfway point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Average the two middle values.",
          "workingLatex": "Q_2 = \\frac{7 + 8}{2} = 7.5",
          "explanation": "The median lies midway between the two central terms, so we take their mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the median.",
          "workingLatex": "Q_2 = 7.5",
          "explanation": "This value splits the ordered data into two equal halves, with as many values above it as below.",
          "diagram": null
        }
      ],
      "finalAnswer": "The median is $Q_2 = 7.5$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "lower quartile",
      "quartiles",
      "listed data"
    ],
    "questionText": "The following data set is already written in ascending order: $5, 8, 10, 12, 14, 15, 18, 20, 22, 25, 30$. Find the lower quartile $Q_1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count how many values there are.",
          "workingLatex": "n = 11",
          "explanation": "The position of a quartile depends on the number of values, so we count them first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the data is in order.",
          "workingLatex": "5, 8, 10, 12, 14, 15, 18, 20, 22, 25, 30",
          "explanation": "Quartiles are positional, so the list must run from smallest to largest; here it is already ordered.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position of the lower quartile.",
          "workingLatex": "\\frac{n}{4} = \\frac{11}{4} = 2.75",
          "explanation": "The lower quartile is located using position $= \\frac{n}{4}$, one quarter of the way through the data.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide how to read the position.",
          "workingLatex": "2.75 \\text{ is not a whole number}",
          "explanation": "When the position is not a whole number, we round it up to the next whole number and take that single term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Round the position up.",
          "workingLatex": "2.75 \\to 3",
          "explanation": "Rounding up moves us to the 3rd position, which is where the lower quartile falls.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the value at that position.",
          "workingLatex": "Q_1 = 3\\text{rd value} = 10",
          "explanation": "Counting three terms into the ordered list gives the value of the lower quartile.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower quartile.",
          "workingLatex": "Q_1 = 10",
          "explanation": "About one quarter of the data lies at or below this value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The lower quartile is $Q_1 = 10$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "upper quartile",
      "quartiles",
      "listed data"
    ],
    "questionText": "Find the upper quartile $Q_3$ of the following data set: $14, 3, 19, 9, 22, 6, 17, 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count how many values there are.",
          "workingLatex": "n = 8",
          "explanation": "The position of the upper quartile depends on how many values there are, so we count them first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the data in ascending order.",
          "workingLatex": "3, 6, 9, 11, 14, 17, 19, 22",
          "explanation": "Quartiles are positional measures, so the values must be arranged from smallest to largest before we locate them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position of the upper quartile.",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 8}{4} = 6",
          "explanation": "The upper quartile is located using position $= \\frac{3n}{4}$, three quarters of the way through the data.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide how to read the position.",
          "workingLatex": "6 \\text{ is a whole number}",
          "explanation": "A whole-number position means the quartile sits exactly between that term and the next, so we average the two values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the 6th and 7th values.",
          "workingLatex": "6\\text{th} = 17, \\quad 7\\text{th} = 19",
          "explanation": "We read the two terms on either side of the three-quarter point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Average the two values.",
          "workingLatex": "Q_3 = \\frac{17 + 19}{2} = 18",
          "explanation": "The upper quartile lies midway between the two terms, so we take their mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the upper quartile.",
          "workingLatex": "Q_3 = 18",
          "explanation": "About three quarters of the data lies at or below this value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The upper quartile is $Q_3 = 18$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "iqr",
      "quartiles",
      "spread"
    ],
    "questionText": "For the ordered data set $4, 6, 7, 9, 11, 12, 14, 16, 18, 20, 23, 25$, find the interquartile range (IQR).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count how many values there are.",
          "workingLatex": "n = 12",
          "explanation": "Both quartile positions depend on the number of values, so we count them first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the list is ordered.",
          "workingLatex": "4, 6, 7, 9, 11, 12, 14, 16, 18, 20, 23, 25",
          "explanation": "Quartiles are positional, so the data must be in ascending order; here it already is.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position of the lower quartile.",
          "workingLatex": "\\frac{n}{4} = \\frac{12}{4} = 3",
          "explanation": "The lower quartile is located using position $= \\frac{n}{4}$; here that is exactly the 3rd position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the lower quartile.",
          "workingLatex": "Q_1 = \\frac{7 + 9}{2} = 8",
          "explanation": "Because position $3$ is a whole number, $Q_1$ is the mean of the 3rd value ($7$) and the 4th value ($9$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the position of the upper quartile.",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 12}{4} = 9",
          "explanation": "The upper quartile is located using position $= \\frac{3n}{4}$; here that is exactly the 9th position.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the upper quartile.",
          "workingLatex": "Q_3 = \\frac{18 + 20}{2} = 19",
          "explanation": "Because position $9$ is a whole number, $Q_3$ is the mean of the 9th value ($18$) and the 10th value ($20$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the definition of the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1",
          "explanation": "The IQR measures the spread of the middle half of the data by comparing the two quartiles, which ignores extreme values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the interquartile range.",
          "workingLatex": "\\text{IQR} = 19 - 8 = 11",
          "explanation": "Subtracting the lower quartile from the upper quartile gives the width of the central 50% of the data.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer.",
          "workingLatex": "\\text{IQR} = 11",
          "explanation": "This value describes how spread out the middle half of the data is.",
          "diagram": null
        }
      ],
      "finalAnswer": "The interquartile range is $\\text{IQR} = 11$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "percentiles",
      "location",
      "listed data"
    ],
    "questionText": "The following $20$ values are given in ascending order: $2, 4, 7, 9, 11, 13, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 41$. Find the $10$th percentile.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count how many values there are.",
          "workingLatex": "n = 20",
          "explanation": "The percentile position depends on how many values there are, so we count them first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the data is in ascending order.",
          "workingLatex": "2, 4, 7, 9, 11, 13, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 41",
          "explanation": "Percentiles are positional measures, so the values must run from smallest to largest; here they already do.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the rule for a percentile position.",
          "workingLatex": "\\text{position} = \\frac{P \\times n}{100}",
          "explanation": "The $P$th percentile lies a fraction $\\frac{P}{100}$ of the way through the ordered data, which this formula pinpoints.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the 10th percentile.",
          "workingLatex": "\\frac{10 \\times 20}{100} = 2",
          "explanation": "Using $P = 10$ and $n = 20$ tells us the 10th percentile is located at position $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide how to read the position.",
          "workingLatex": "2 \\text{ is a whole number}",
          "explanation": "A whole-number position means the percentile sits exactly between that term and the next, so we average the two.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the 2nd and 3rd values.",
          "workingLatex": "2\\text{nd} = 4, \\quad 3\\text{rd} = 7",
          "explanation": "We read the two terms on either side of the boundary.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Average the two values.",
          "workingLatex": "\\frac{4 + 7}{2} = 5.5",
          "explanation": "The percentile lies midway between the two terms, so we take their mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the 10th percentile.",
          "workingLatex": "P_{10} = 5.5",
          "explanation": "About one tenth of the data lies at or below this value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $10$th percentile is $5.5$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "percentiles",
      "location",
      "listed data"
    ],
    "questionText": "The following $15$ values are given in ascending order: $5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 28, 30, 33, 35, 38$. Find the $90$th percentile.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count how many values there are.",
          "workingLatex": "n = 15",
          "explanation": "The percentile position depends on how many values there are, so we count them first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the data is in ascending order.",
          "workingLatex": "5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 28, 30, 33, 35, 38",
          "explanation": "Percentiles are positional measures, so the values must run from smallest to largest; here they already do.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the rule for a percentile position.",
          "workingLatex": "\\text{position} = \\frac{P \\times n}{100}",
          "explanation": "The $P$th percentile lies a fraction $\\frac{P}{100}$ of the way through the ordered data, which this formula locates.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the 90th percentile.",
          "workingLatex": "\\frac{90 \\times 15}{100} = 13.5",
          "explanation": "Using $P = 90$ and $n = 15$ gives a position of $13.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide how to read the position.",
          "workingLatex": "13.5 \\text{ is not a whole number} \\to 14",
          "explanation": "When the position is not a whole number, we round it up to the next whole number and take that single term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the 14th value.",
          "workingLatex": "14\\text{th value} = 35",
          "explanation": "Counting fourteen terms into the ordered list gives the value of the 90th percentile.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the 90th percentile.",
          "workingLatex": "P_{90} = 35",
          "explanation": "About ninety percent of the data lies at or below this value.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $90$th percentile is $35$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "quartiles",
      "median",
      "location"
    ],
    "questionText": "Find the lower quartile $Q_1$, the median $Q_2$ and the upper quartile $Q_3$ of the data set: $16, 4, 21, 8, 24, 7, 18, 11, 13$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count how many values there are.",
          "workingLatex": "n = 9",
          "explanation": "All three quartile positions depend on the number of values, so we count them first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the data in ascending order.",
          "workingLatex": "4, 7, 8, 11, 13, 16, 18, 21, 24",
          "explanation": "Quartiles are positional, so the values must be arranged from smallest to largest before we locate any of them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position of the lower quartile.",
          "workingLatex": "\\frac{n}{4} = \\frac{9}{4} = 2.25",
          "explanation": "The lower quartile uses position $= \\frac{n}{4}$; here that is $2.25$, which is not a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Round up and read the lower quartile.",
          "workingLatex": "2.25 \\to 3, \\quad Q_1 = 3\\text{rd value} = 8",
          "explanation": "Since the position is not whole, we round up to the 3rd position and take that value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the position of the median.",
          "workingLatex": "\\frac{n}{2} = \\frac{9}{2} = 4.5",
          "explanation": "The median uses position $= \\frac{n}{2}$; here that is $4.5$, which is not a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round up and read the median.",
          "workingLatex": "4.5 \\to 5, \\quad Q_2 = 5\\text{th value} = 13",
          "explanation": "Since the position is not whole, we round up to the 5th position and take that value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the position of the upper quartile.",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 9}{4} = 6.75",
          "explanation": "The upper quartile uses position $= \\frac{3n}{4}$; here that is $6.75$, which is not a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round up and read the upper quartile.",
          "workingLatex": "6.75 \\to 7, \\quad Q_3 = 7\\text{th value} = 18",
          "explanation": "Since the position is not whole, we round up to the 7th position and take that value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State all three quartiles.",
          "workingLatex": "Q_1 = 8, \\quad Q_2 = 13, \\quad Q_3 = 18",
          "explanation": "Together these three values divide the ordered data into four roughly equal groups.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1 = 8$, $Q_2 = 13$ and $Q_3 = 18$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "outliers",
      "iqr",
      "quartiles"
    ],
    "questionText": "The reaction times (in milliseconds) of $11$ people are recorded in ascending order: $12, 14, 15, 16, 18, 19, 20, 22, 23, 25, 45$. An outlier is any value more than $1.5 \\times \\text{IQR}$ above the upper quartile or below the lower quartile. Determine whether the data set contains any outliers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count how many values there are.",
          "workingLatex": "n = 11",
          "explanation": "The quartile positions depend on the number of values, so we count them first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the data is in ascending order.",
          "workingLatex": "12, 14, 15, 16, 18, 19, 20, 22, 23, 25, 45",
          "explanation": "Quartiles are positional, so the list must run from smallest to largest; here it already does.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position of the lower quartile.",
          "workingLatex": "\\frac{n}{4} = \\frac{11}{4} = 2.75 \\to 3",
          "explanation": "The lower quartile uses position $= \\frac{n}{4}$; since $2.75$ is not whole, we round up to the 3rd position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the lower quartile.",
          "workingLatex": "Q_1 = 3\\text{rd value} = 15",
          "explanation": "The value in the 3rd position of the ordered list is the lower quartile.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the position of the upper quartile.",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 11}{4} = 8.25 \\to 9",
          "explanation": "The upper quartile uses position $= \\frac{3n}{4}$; since $8.25$ is not whole, we round up to the 9th position.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the upper quartile.",
          "workingLatex": "Q_3 = 9\\text{th value} = 23",
          "explanation": "The value in the 9th position of the ordered list is the upper quartile.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 23 - 15 = 8",
          "explanation": "The IQR measures the spread of the middle half of the data and is the basis for the outlier limits.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the outlier rule.",
          "workingLatex": "\\text{outlier} > Q_3 + 1.5 \\times \\text{IQR} \\ \\text{or} \\ < Q_1 - 1.5 \\times \\text{IQR}",
          "explanation": "Any value lying more than one-and-a-half IQRs beyond a quartile is unusually far from the bulk of the data, so we treat it as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate the upper boundary.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 23 + 1.5 \\times 8 = 35",
          "explanation": "Any value above $35$ is too far above the upper quartile and counts as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the lower boundary.",
          "workingLatex": "Q_1 - 1.5 \\times \\text{IQR} = 15 - 1.5 \\times 8 = 3",
          "explanation": "Any value below $3$ is too far below the lower quartile and counts as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the data with the boundaries.",
          "workingLatex": "45 > 35, \\quad 12 > 3",
          "explanation": "The value $45$ lies above the upper boundary of $35$, so it is an outlier; the smallest value $12$ is above the lower boundary of $3$, so no value is too small.",
          "diagram": null
        }
      ],
      "finalAnswer": "The value $45$ is an outlier; there are no other outliers."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "outliers",
      "iqr",
      "quartiles"
    ],
    "questionText": "A data set has lower quartile $Q_1 = 30$ and upper quartile $Q_3 = 46$. An outlier is defined as any value greater than $Q_3 + 1.5 \\times \\text{IQR}$ or less than $Q_1 - 1.5 \\times \\text{IQR}$. Determine which of the following values are outliers: $4, 20, 35, 50, 72$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the given quartiles.",
          "workingLatex": "Q_1 = 30, \\quad Q_3 = 46",
          "explanation": "The quartiles are provided directly, so we can go straight to finding the spread and the outlier limits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 46 - 30 = 16",
          "explanation": "The IQR measures the spread of the middle half of the data and sets the scale for how far an outlier can lie from the quartiles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the outlier rule.",
          "workingLatex": "\\text{outlier} > Q_3 + 1.5 \\times \\text{IQR} \\ \\text{or} \\ < Q_1 - 1.5 \\times \\text{IQR}",
          "explanation": "A value lying more than one-and-a-half IQRs beyond a quartile is unusually far from the rest of the data, so it is flagged as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out one-and-a-half IQRs.",
          "workingLatex": "1.5 \\times \\text{IQR} = 1.5 \\times 16 = 24",
          "explanation": "This is the distance beyond each quartile that marks the boundary between ordinary values and outliers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the lower boundary.",
          "workingLatex": "Q_1 - 1.5 \\times \\text{IQR} = 30 - 24 = 6",
          "explanation": "Any value below $6$ is too far below the lower quartile and counts as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the upper boundary.",
          "workingLatex": "Q_3 + 1.5 \\times \\text{IQR} = 46 + 24 = 70",
          "explanation": "Any value above $70$ is too far above the upper quartile and counts as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of ordinary values.",
          "workingLatex": "6 \\leq \\text{value} \\leq 70",
          "explanation": "Any value inside this interval is considered typical; anything outside it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the smallest value.",
          "workingLatex": "4 < 6",
          "explanation": "The value $4$ falls below the lower boundary of $6$, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the largest value.",
          "workingLatex": "72 > 70",
          "explanation": "The value $72$ rises above the upper boundary of $70$, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the remaining values and conclude.",
          "workingLatex": "6 \\leq 20, 35, 50 \\leq 70",
          "explanation": "The values $20$, $35$ and $50$ all lie inside the ordinary range, so they are not outliers; only $4$ and $72$ fall outside the boundaries.",
          "diagram": null
        }
      ],
      "finalAnswer": "The values $4$ and $72$ are outliers; $20$, $35$ and $50$ are not."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "frequency table",
      "total frequency",
      "statistics"
    ],
    "questionText": "A vet records the number of pets owned by each household in a survey. The results are shown in the frequency table below, where $x$ is the number of pets. $x$: $0, 1, 2, 3, 4$ with frequencies $7, 10, 8, 4, 1$. How many households were surveyed in total?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what the question is asking",
          "workingLatex": "\\text{Total households} = \\Sigma f",
          "explanation": "Each household is counted once in the frequency column, so the total number of households is just the sum of all the frequencies, written $\\Sigma f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the frequencies",
          "workingLatex": "7, \\; 10, \\; 8, \\; 4, \\; 1",
          "explanation": "These are the counts for $0, 1, 2, 3$ and $4$ pets respectively. Adding them will account for every household exactly once.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the sum",
          "workingLatex": "\\Sigma f = 7 + 10 + 8 + 4 + 1",
          "explanation": "We add the frequencies rather than the pet numbers, because we want how many households there are, not how many pets they own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the first two frequencies",
          "workingLatex": "7 + 10 = 17",
          "explanation": "Building the total one step at a time keeps the arithmetic easy to check.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the next frequency",
          "workingLatex": "17 + 8 = 25",
          "explanation": "We keep a running total, adding a single frequency each time so nothing is missed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the remaining frequencies",
          "workingLatex": "25 + 4 + 1 = 30",
          "explanation": "Including the last two groups completes the count of every household in the survey.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the total",
          "workingLatex": "\\Sigma f = 30",
          "explanation": "So $30$ households took part. This total is also the value of $n$ we would use later when finding a median or quartiles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Sigma f = 30$ households."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "frequency table",
      "mode",
      "statistics"
    ],
    "questionText": "The table shows the shoe sizes of $40$ students in a class, where $x$ is the shoe size. $x$: $4, 5, 6, 7, 8$ with frequencies $6, 9, 15, 7, 3$. Write down the mode of the shoe sizes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the mode is",
          "workingLatex": "\\text{Mode} = \\text{most frequent value}",
          "explanation": "The mode is the data value that occurs most often, so we look for the largest frequency in the table.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the frequencies",
          "workingLatex": "6, \\; 9, \\; 15, \\; 7, \\; 3",
          "explanation": "Each frequency tells us how many students have that shoe size, so comparing them shows which size is most common.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the largest frequency",
          "workingLatex": "\\max(6, 9, 15, 7, 3) = 15",
          "explanation": "The biggest frequency is $15$, which is clearly larger than all the others, so there is a single mode.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the matching shoe size",
          "workingLatex": "f = 15 \\Rightarrow x = 6",
          "explanation": "The frequency $15$ sits underneath shoe size $6$, so size $6$ is the value that occurs most often.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check no other size ties",
          "workingLatex": "15 > 9, \\quad 15 > 7",
          "explanation": "No other frequency equals $15$, so the data has one clear mode rather than being bimodal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the mode",
          "workingLatex": "\\text{Mode} = 6",
          "explanation": "Shoe size $6$ is worn by more students than any other size, so it is the mode.",
          "diagram": null
        }
      ],
      "finalAnswer": "Mode $= 6$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "frequency table",
      "mean",
      "statistics"
    ],
    "questionText": "In a season, a football team's number of goals per match is recorded. $x$ is the number of goals in a match. $x$: $0, 1, 2, 3, 4$ with frequencies $5, 8, 4, 2, 1$. Calculate the mean number of goals per match.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula for the mean",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}",
          "explanation": "For frequency data we cannot simply add the values; each value must be weighted by how often it occurs, which is exactly what $\\Sigma fx$ does.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the total frequency",
          "workingLatex": "\\Sigma f = 5 + 8 + 4 + 2 + 1 = 20",
          "explanation": "This is how many matches there were in total, and it is the number we divide by at the end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain the $fx$ products",
          "workingLatex": "fx = f \\times x",
          "explanation": "Multiplying each goal value by its frequency gives the total goals contributed by that row of the table.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out each $fx$ value",
          "workingLatex": "0(5),\\; 1(8),\\; 2(4),\\; 3(2),\\; 4(1) = 0, 8, 8, 6, 4",
          "explanation": "For example, $2$ goals happened in $4$ matches, contributing $2 \\times 4 = 8$ goals in total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add up the $fx$ values",
          "workingLatex": "\\Sigma fx = 0 + 8 + 8 + 6 + 4 = 26",
          "explanation": "This is the total number of goals scored across the whole season.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the formula",
          "workingLatex": "\\bar{x} = \\frac{26}{20}",
          "explanation": "We divide the total goals by the total number of matches to share the goals out evenly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the mean",
          "workingLatex": "\\bar{x} = 1.3",
          "explanation": "On average the team scored $1.3$ goals per match. A non-whole answer is fine here because it is an average, not an actual match score.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = 1.3$ goals per match."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "frequency table",
      "median",
      "cumulative frequency"
    ],
    "questionText": "The number of siblings of each student in a group is recorded. $x$ is the number of siblings. $x$: $0, 1, 2, 3, 4$ with frequencies $6, 9, 7, 2, 1$. Find the median number of siblings.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to locate the median",
          "workingLatex": "\\text{position} = \\frac{n}{2}",
          "explanation": "The median is the middle value once all the data is placed in order. Its position is found from $\\tfrac{n}{2}$, where $n$ is the total frequency.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the total frequency",
          "workingLatex": "n = \\Sigma f = 6 + 9 + 7 + 2 + 1 = 25",
          "explanation": "There are $25$ students in total, so $n = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the median position",
          "workingLatex": "\\frac{n}{2} = \\frac{25}{2} = 12.5",
          "explanation": "This tells us roughly where the middle of the ordered list lies.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rounding rule",
          "workingLatex": "12.5 \\Rightarrow \\text{round up to } 13",
          "explanation": "Because $12.5$ is not a whole number, we round up and read off the $13$th value in the ordered data.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Build the cumulative frequency",
          "workingLatex": "\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\text{c.f.} & 6 & 15 & 22 & 24 & 25 \\end{array}",
          "explanation": "The cumulative frequency counts how many students we have reached by the end of each value, which lets us find where the $13$th student sits.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the 13th value",
          "workingLatex": "6 < 13 \\le 15 \\Rightarrow x = 1",
          "explanation": "By the end of $x = 0$ we have reached only $6$ students, but by the end of $x = 1$ we have reached $15$. Since $13$ falls in that band, the $13$th student has $1$ sibling.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the median",
          "workingLatex": "\\text{median} = 1",
          "explanation": "The middle student has $1$ sibling, so the median number of siblings is $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Median $= 1$ sibling."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "frequency table",
      "mean",
      "statistics"
    ],
    "questionText": "The number of days each of $50$ employees was absent in a year is recorded. $x$ is the number of days absent. $x$: $0, 1, 2, 3, 4, 5$ with frequencies $4, 9, 12, 10, 8, 7$. Calculate the mean number of days absent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean formula",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}",
          "explanation": "Each number of days must be weighted by how many employees had it, so we build $\\Sigma fx$ rather than adding the day-values directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the total frequency",
          "workingLatex": "\\Sigma f = 4 + 9 + 12 + 10 + 8 + 7 = 50",
          "explanation": "This confirms there are $50$ employees, matching the information given, which is a good check that no frequency was missed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the $fx$ products",
          "workingLatex": "fx = f \\times x",
          "explanation": "Multiplying each day-value by its frequency gives the total number of days contributed by that group of employees.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out each $fx$ value",
          "workingLatex": "\\begin{array}{c|cccccc} x & 0 & 1 & 2 & 3 & 4 & 5 \\\\ fx & 0 & 9 & 24 & 30 & 32 & 35 \\end{array}",
          "explanation": "For instance, the $8$ employees with $4$ days absent contribute $4 \\times 8 = 32$ days.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the $fx$ values",
          "workingLatex": "\\Sigma fx = 0 + 9 + 24 + 30 + 32 + 35 = 130",
          "explanation": "This is the total number of absent-days across all $50$ employees.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Re-check the total",
          "workingLatex": "9 + 24 = 33, \\; 33 + 30 = 63, \\; 63 + 32 = 95, \\; 95 + 35 = 130",
          "explanation": "Re-adding in a different order confirms $\\Sigma fx = 130$, so we can trust the division that follows.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the formula",
          "workingLatex": "\\bar{x} = \\frac{130}{50}",
          "explanation": "We share the total absent-days equally across all the employees.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the mean",
          "workingLatex": "\\bar{x} = 2.6",
          "explanation": "Dividing gives $2.6$ days per employee.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "\\bar{x} = 2.6 \\text{ days}",
          "explanation": "On average each employee was absent $2.6$ days in the year. This lies sensibly between the smallest and largest values, so it is a reasonable answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = 2.6$ days absent."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "frequency table",
      "mean",
      "unknown frequency",
      "algebra"
    ],
    "questionText": "The number of goals scored by a team in each of its matches is shown below, where $x$ is the number of goals and $p$ is an unknown frequency. $x$: $0, 1, 2, 3, 4$ with frequencies $4, 7, 10, p, 5$. Given that the mean number of goals is exactly $2$, find the value of $p$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean formula",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}",
          "explanation": "The unknown $p$ appears in both the total frequency and the total $fx$, so we express each in terms of $p$ and then use the given mean to solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the total frequency in terms of $p$",
          "workingLatex": "\\Sigma f = 4 + 7 + 10 + p + 5 = 26 + p",
          "explanation": "We simply add the known frequencies and keep $p$ as an unknown term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the total $fx$ in terms of $p$",
          "workingLatex": "\\Sigma fx = 0(4) + 1(7) + 2(10) + 3(p) + 4(5)",
          "explanation": "Each value is multiplied by its frequency; the row with $3$ goals contributes $3p$ because its frequency is the unknown $p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the total $fx$",
          "workingLatex": "\\Sigma fx = 7 + 20 + 3p + 20 = 47 + 3p",
          "explanation": "Collecting the known numbers leaves a neat expression $47 + 3p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up an equation using the mean",
          "workingLatex": "\\frac{47 + 3p}{26 + p} = 2",
          "explanation": "The given mean of $2$ lets us equate the formula to $2$, turning the statistics problem into an equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "47 + 3p = 2(26 + p)",
          "explanation": "Multiplying both sides by $\\Sigma f = 26 + p$ removes the denominator and makes the equation linear.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the bracket",
          "workingLatex": "47 + 3p = 52 + 2p",
          "explanation": "Distributing the $2$ across the bracket prepares us to collect the $p$ terms together.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $p$",
          "workingLatex": "3p - 2p = 52 - 47 \\Rightarrow p = 5",
          "explanation": "Bringing the $p$ terms to one side and the numbers to the other gives $p = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the answer",
          "workingLatex": "\\bar{x} = \\frac{47 + 15}{26 + 5} = \\frac{62}{31} = 2",
          "explanation": "Substituting $p = 5$ back gives a mean of exactly $2$, confirming the value is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 5$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "frequency table",
      "quartiles",
      "interquartile range",
      "cumulative frequency"
    ],
    "questionText": "The number of pets owned by each of $39$ families is recorded. $x$ is the number of pets. $x$: $0, 1, 2, 3, 4, 5$ with frequencies $6, 9, 11, 7, 4, 2$. Find the lower quartile $Q_1$, the median $Q_2$ and the upper quartile $Q_3$, and hence the interquartile range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total frequency",
          "workingLatex": "n = \\Sigma f = 6 + 9 + 11 + 7 + 4 + 2 = 39",
          "explanation": "The quartile positions all depend on $n$, so we find it first. Here $n = 39$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Build the cumulative frequency",
          "workingLatex": "\\begin{array}{c|cccccc} x & 0 & 1 & 2 & 3 & 4 & 5 \\\\ \\text{c.f.} & 6 & 15 & 26 & 33 & 37 & 39 \\end{array}",
          "explanation": "The cumulative frequency tells us how many families we have counted by the end of each value, which is what we need to locate each quartile position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position of the lower quartile",
          "workingLatex": "\\frac{n}{4} = \\frac{39}{4} = 9.75",
          "explanation": "The lower quartile sits a quarter of the way through the ordered data.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the lower quartile",
          "workingLatex": "9.75 \\Rightarrow 10, \\quad 6 < 10 \\le 15 \\Rightarrow Q_1 = 1",
          "explanation": "As $9.75$ is not whole, we round up to the $10$th value. The cumulative frequency first reaches at least $10$ at $x = 1$, so $Q_1 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the position of the median",
          "workingLatex": "\\frac{n}{2} = \\frac{39}{2} = 19.5",
          "explanation": "The median lies halfway through the ordered data.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the median",
          "workingLatex": "19.5 \\Rightarrow 20, \\quad 15 < 20 \\le 26 \\Rightarrow Q_2 = 2",
          "explanation": "Rounding up to the $20$th value and following the cumulative frequency, the $20$th family lands in the $x = 2$ band, so the median is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the position of the upper quartile",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 39}{4} = 29.25",
          "explanation": "The upper quartile sits three-quarters of the way through the ordered data.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the upper quartile",
          "workingLatex": "29.25 \\Rightarrow 30, \\quad 26 < 30 \\le 33 \\Rightarrow Q_3 = 3",
          "explanation": "Rounding up to the $30$th value, the cumulative frequency reaches it within the $x = 3$ band, so $Q_3 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate the interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 3 - 1 = 2",
          "explanation": "The interquartile range measures the spread of the middle half of the data, ignoring the extreme values at each end.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "Q_1 = 1, \\; Q_2 = 2, \\; Q_3 = 3, \\; \\text{IQR} = 2",
          "explanation": "These summarise both the location (the quartiles) and the spread (the IQR) of the number of pets.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1 = 1$, $Q_2 = 2$, $Q_3 = 3$, IQR $= 2$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "frequency table",
      "mode",
      "median",
      "mean"
    ],
    "questionText": "The number of goals scored by a hockey player in each of $25$ games is recorded. $x$ is the number of goals. $x$: $0, 1, 2, 3, 4$ with frequencies $3, 7, 9, 5, 1$. Find the mode, the median and the mean number of goals.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the total frequency",
          "workingLatex": "\\Sigma f = 3 + 7 + 9 + 5 + 1 = 25",
          "explanation": "There are $25$ games, and this total is used both for the median position and for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the mode",
          "workingLatex": "\\max(3, 7, 9, 5, 1) = 9 \\Rightarrow x = 2",
          "explanation": "The mode is the value with the highest frequency. The largest frequency is $9$, which belongs to $2$ goals, so the mode is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the median position",
          "workingLatex": "\\frac{n}{2} = \\frac{25}{2} = 12.5 \\Rightarrow 13",
          "explanation": "Since $12.5$ is not whole, we round up and look for the $13$th value in order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Build the cumulative frequency",
          "workingLatex": "\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\text{c.f.} & 3 & 10 & 19 & 24 & 25 \\end{array}",
          "explanation": "The running totals let us see which value the $13$th game falls under.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the median",
          "workingLatex": "10 < 13 \\le 19 \\Rightarrow Q_2 = 2",
          "explanation": "The $13$th game lies in the $x = 2$ band, so the median number of goals is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the mean",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}",
          "explanation": "For the mean we weight each goal-value by its frequency and divide by the number of games.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Work out the total $fx$",
          "workingLatex": "\\Sigma fx = 0 + 7 + 18 + 15 + 4 = 44",
          "explanation": "Multiplying each value by its frequency and adding gives $44$ goals in total.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the mean",
          "workingLatex": "\\bar{x} = \\frac{44}{25} = 1.76",
          "explanation": "Dividing the total goals by the $25$ games gives a mean of $1.76$ goals per game.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State all three averages",
          "workingLatex": "\\text{mode} = 2, \\; \\text{median} = 2, \\; \\bar{x} = 1.76",
          "explanation": "The mode and median agree at $2$, while the mean is slightly lower because the small values of $0$ and $1$ pull the average down.",
          "diagram": null
        }
      ],
      "finalAnswer": "Mode $= 2$, median $= 2$, mean $= 1.76$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "frequency table",
      "choosing an average",
      "mode",
      "interpretation"
    ],
    "questionText": "A shoe shop records the sizes it sold last week. $x$ is the shoe size. $x$: $4, 5, 6, 7, 8$ with frequencies $5, 12, 20, 10, 3$. The manager wants a single 'average' size to decide which size to order the most of. State, with justification, which average (mode, median or mean) is most appropriate here.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the averages available",
          "workingLatex": "\\text{mode}, \\; \\text{median}, \\; \\bar{x}",
          "explanation": "We have three possible averages to choose from, so we work each one out and then judge which best answers the manager's actual question.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the mode",
          "workingLatex": "\\max(5, 12, 20, 10, 3) = 20 \\Rightarrow \\text{mode} = 6",
          "explanation": "Size $6$ was sold most often, with $20$ pairs, so the mode is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the total frequency",
          "workingLatex": "\\Sigma f = 5 + 12 + 20 + 10 + 3 = 50",
          "explanation": "This total is needed both for the mean and for locating the median.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the mean",
          "workingLatex": "\\bar{x} = \\frac{5(4) + 12(5) + 20(6) + 10(7) + 3(8)}{50} = \\frac{294}{50} = 5.88",
          "explanation": "The mean shoe size is $5.88$, which is not a size the shop can actually stock.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the median",
          "workingLatex": "\\frac{n}{2} = 25 \\Rightarrow \\tfrac{1}{2}(25\\text{th} + 26\\text{th}) = 6",
          "explanation": "Both the $25$th and $26$th pairs sold are size $6$ (the cumulative frequency reaches $37$ at size $6$), so the median is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Think about the manager's need",
          "workingLatex": "\\text{Which real size sells the most?}",
          "explanation": "The manager needs a whole, real shoe size that reflects the size customers buy most, not a theoretical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reject the mean",
          "workingLatex": "\\bar{x} = 5.88 \\; (\\text{not a real size})",
          "explanation": "The mean $5.88$ is not a size that exists, so ordering stock based on it would not make practical sense.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare mode and median",
          "workingLatex": "\\text{mode} = 6, \\; \\text{median} = 6",
          "explanation": "Both give size $6$, but the mode is the more natural choice because it directly answers 'which size sells the most'.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give the recommendation",
          "workingLatex": "\\text{Best average} = \\text{mode} = 6",
          "explanation": "The mode is most appropriate: it is an actual shoe size and identifies the size in greatest demand, so the manager should order size $6$ most.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mode ($6$) is most appropriate, because it is a real shoe size and shows the size sold most often, which is exactly what the manager needs; the mean ($5.88$) is unsuitable as it is not an actual shoe size."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "frequency table",
      "quartiles",
      "interquartile range",
      "cumulative frequency"
    ],
    "questionText": "Over $20$ days, the number of missed calls per day on a phone is recorded. $x$ is the number of missed calls. $x$: $0, 1, 2, 3, 4$ with frequencies $2, 3, 5, 5, 5$. Find $Q_1$, $Q_2$ and $Q_3$, and hence the interquartile range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total frequency",
          "workingLatex": "n = \\Sigma f = 2 + 3 + 5 + 5 + 5 = 20",
          "explanation": "The quartile positions depend on $n$, so we start with $n = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Build the cumulative frequency",
          "workingLatex": "\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\text{c.f.} & 2 & 5 & 10 & 15 & 20 \\end{array}",
          "explanation": "The cumulative frequencies mark exactly where each value ends, which matters here because several quartile positions land right on those boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position of the lower quartile",
          "workingLatex": "\\frac{n}{4} = \\frac{20}{4} = 5",
          "explanation": "The lower quartile is a quarter of the way through the data, at position $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the whole-number rule for the lower quartile",
          "workingLatex": "Q_1 = \\tfrac{1}{2}(5\\text{th} + 6\\text{th}) = \\tfrac{1}{2}(1 + 2) = 1.5",
          "explanation": "Because the position is a whole number, $Q_1$ is the average of the $5$th value (the last of $x = 1$) and the $6$th value (the first of $x = 2$), giving $1.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the position of the median",
          "workingLatex": "\\frac{n}{2} = \\frac{20}{2} = 10",
          "explanation": "The median sits halfway through the data, at position $10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the whole-number rule for the median",
          "workingLatex": "Q_2 = \\tfrac{1}{2}(10\\text{th} + 11\\text{th}) = \\tfrac{1}{2}(2 + 3) = 2.5",
          "explanation": "The $10$th value is the last of $x = 2$ and the $11$th is the first of $x = 3$, so we average them to get $2.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the position of the upper quartile",
          "workingLatex": "\\frac{3n}{4} = \\frac{3 \\times 20}{4} = 15",
          "explanation": "The upper quartile is three-quarters of the way through the data, at position $15$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the whole-number rule for the upper quartile",
          "workingLatex": "Q_3 = \\tfrac{1}{2}(15\\text{th} + 16\\text{th}) = \\tfrac{1}{2}(3 + 4) = 3.5",
          "explanation": "The $15$th value is the last of $x = 3$ and the $16$th is the first of $x = 4$, so their average is $3.5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate the interquartile range",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 3.5 - 1.5 = 2",
          "explanation": "The IQR measures the spread of the middle half of the days, found by subtracting the lower quartile from the upper quartile.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "Q_1 = 1.5, \\; Q_2 = 2.5, \\; Q_3 = 3.5, \\; \\text{IQR} = 2",
          "explanation": "These quartiles describe the location of the data, while the IQR describes its spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1 = 1.5$, $Q_2 = 2.5$, $Q_3 = 3.5$, IQR $= 2$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "modal class",
      "grouped data",
      "frequency"
    ],
    "questionText": "The table shows the time, $t$ seconds, taken by $45$ students to complete a short puzzle. The classes are $0 \\le t < 10$ with frequency $4$; $10 \\le t < 20$ with frequency $11$; $20 \\le t < 30$ with frequency $18$; $30 \\le t < 40$ with frequency $9$; $40 \\le t < 50$ with frequency $3$. Write down the modal class.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the modal class is.",
          "workingLatex": "\\text{modal class} = \\text{class with the greatest frequency}",
          "explanation": "For grouped data we cannot pick a single most common value, because we only know how many readings fall in each interval. Instead the mode becomes the whole interval that the most readings landed in, which we call the modal class.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check that all the class widths are equal.",
          "workingLatex": "10 - 0 = 10,\\quad 20 - 10 = 10,\\quad \\ldots = 10",
          "explanation": "Comparing raw frequencies only tells us the mode fairly when every class covers the same width of values. Here each class spans $10$ seconds, so the class with the highest frequency really is the busiest interval and we can compare the counts directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the five frequencies.",
          "workingLatex": "4, \\ 11, \\ 18, \\ 9, \\ 3",
          "explanation": "Writing the counts in a row makes it easy to scan for the largest one without being distracted by the class labels.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the largest frequency.",
          "workingLatex": "\\max(4, 11, 18, 9, 3) = 18",
          "explanation": "The greatest of the counts is $18$, so more students finished the puzzle in the corresponding time band than in any other band.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the class that has this frequency.",
          "workingLatex": "f = 18 \\ \\Rightarrow \\ 20 \\le t < 30",
          "explanation": "We match the frequency of $18$ back to its interval. That count belongs to the third class, $20 \\le t < 30$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the modal class.",
          "workingLatex": "\\text{modal class} = 20 \\le t < 30",
          "explanation": "Because widths are equal and this interval has the highest frequency, it is the modal class. We quote the whole interval, not a single number.",
          "diagram": null
        }
      ],
      "finalAnswer": "The modal class is $20 \\le t < 30$ seconds."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "estimated mean",
      "grouped data",
      "midpoints"
    ],
    "questionText": "A courier records the mass, $m$ kg, of $35$ parcels. The grouped data are $0 \\le m < 2$ with frequency $5$; $2 \\le m < 4$ with frequency $8$; $4 \\le m < 6$ with frequency $12$; $6 \\le m < 8$ with frequency $7$; $8 \\le m < 10$ with frequency $3$. Estimate the mean mass of a parcel, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the estimated mean formula.",
          "workingLatex": "\\bar{x} = \\frac{\\sum f x}{\\sum f}",
          "explanation": "We only know how many parcels fall in each interval, not their exact masses, so we can only estimate the mean. The formula weights each representative value $x$ by how many parcels $f$ share that band.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the class midpoint for each value of $x$.",
          "workingLatex": "x = \\frac{\\text{lower} + \\text{upper}}{2}",
          "explanation": "The midpoint is our best single guess for a whole class, because if the masses are spread evenly across the interval their average sits right in the middle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Work out the five midpoints.",
          "workingLatex": "1, \\ 3, \\ 5, \\ 7, \\ 9",
          "explanation": "Each midpoint is halfway across its class: for $0 \\le m < 2$ it is $1$, for $2 \\le m < 4$ it is $3$, and so on in steps of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply each frequency by its midpoint.",
          "workingLatex": "5(1),\\ 8(3),\\ 12(5),\\ 7(7),\\ 3(9) = 5,\\ 24,\\ 60,\\ 49,\\ 27",
          "explanation": "Each product $fx$ estimates the total mass contributed by one class, treating every parcel in that band as if it had the midpoint mass.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the frequencies.",
          "workingLatex": "\\sum f = 5 + 8 + 12 + 7 + 3 = 35",
          "explanation": "This confirms the total number of parcels is $35$, matching the question, so no class has been missed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the $fx$ column.",
          "workingLatex": "\\sum f x = 5 + 24 + 60 + 49 + 27 = 165",
          "explanation": "This total is our estimate of the combined mass of all $35$ parcels.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the formula.",
          "workingLatex": "\\bar{x} = \\frac{165}{35} = 4.7142\\ldots",
          "explanation": "Dividing the estimated total mass by the number of parcels shares it out equally, giving the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to $3$ significant figures.",
          "workingLatex": "\\bar{x} \\approx 4.71 \\text{ kg}",
          "explanation": "The value is not exact, so we round as asked; the fourth figure is a $4$, so we round down and keep $4.71$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The estimated mean mass is $\\bar{x} \\approx 4.71$ kg (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "estimated mean",
      "grouped data",
      "midpoints"
    ],
    "questionText": "A gardener measures the height, $h$ cm, of $60$ seedlings. The data are grouped as $10 \\le h < 15$ with frequency $6$; $15 \\le h < 20$ with frequency $14$; $20 \\le h < 25$ with frequency $20$; $25 \\le h < 30$ with frequency $15$; $30 \\le h < 35$ with frequency $5$. Estimate the mean height, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimated mean formula and why it is an estimate.",
          "workingLatex": "\\bar{x} = \\frac{\\sum f x}{\\sum f}, \\qquad x = \\text{class midpoint}",
          "explanation": "Because the seedlings have been grouped, we no longer know each exact height. We stand in for a whole class using its midpoint, so the result is a sensible estimate rather than the true mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the midpoint of each class.",
          "workingLatex": "\\tfrac{10+15}{2}=12.5,\\ 17.5,\\ 22.5,\\ 27.5,\\ 32.5",
          "explanation": "Halfway across each $5$ cm band is the fairest single value to represent it, assuming heights are spread roughly evenly within each interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply each frequency by its midpoint.",
          "workingLatex": "6(12.5)=75,\\ 14(17.5)=245,\\ 20(22.5)=450,\\ 15(27.5)=412.5,\\ 5(32.5)=162.5",
          "explanation": "Each $fx$ estimates the total height of all seedlings in that band, as if every one of them were exactly at the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Total the frequencies.",
          "workingLatex": "\\sum f = 6 + 14 + 20 + 15 + 5 = 60",
          "explanation": "The frequencies add to $60$, matching the stated sample size, which is a quick check that nothing has been dropped.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total the $fx$ values.",
          "workingLatex": "\\sum f x = 75 + 245 + 450 + 412.5 + 162.5",
          "explanation": "Adding the individual class contributions gives the estimated total height of all $60$ seedlings.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Complete the sum.",
          "workingLatex": "\\sum f x = 1345",
          "explanation": "Working left to right: $75+245=320$, then $+450=770$, then $+412.5=1182.5$, then $+162.5=1345$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the formula.",
          "workingLatex": "\\bar{x} = \\frac{1345}{60}",
          "explanation": "Dividing the estimated total height by the number of seedlings spreads it evenly to give the mean height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the division.",
          "workingLatex": "\\bar{x} = 22.4166\\ldots",
          "explanation": "The exact value has a recurring decimal, so we keep several figures before rounding to avoid introducing error.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round to $3$ significant figures.",
          "workingLatex": "\\bar{x} \\approx 22.4 \\text{ cm}",
          "explanation": "The digit after the $4$ is a $1$, so we round down and keep $22.4$ cm as our estimate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the result.",
          "workingLatex": "\\bar{x} \\approx 22.4 \\text{ cm (an estimate)}",
          "explanation": "This is a typical seedling height. It is only an estimate because grouping the data hid the exact measurements, but with evenly spread classes it should be close to the true mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "The estimated mean height is $\\bar{x} \\approx 22.4$ cm (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "median",
      "linear interpolation",
      "grouped data"
    ],
    "questionText": "The daily commuting time, $t$ minutes, of $60$ workers is recorded as $0 \\le t < 10$ with frequency $8$; $10 \\le t < 20$ with frequency $15$; $20 \\le t < 30$ with frequency $22$; $30 \\le t < 40$ with frequency $10$; $40 \\le t < 50$ with frequency $5$. Use linear interpolation to estimate the median commuting time, to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to find a median from grouped data.",
          "workingLatex": "\\text{median} = \\text{value at position } \\tfrac{n}{2}",
          "explanation": "The median is the middle value. With grouped continuous data we cannot read it off directly, so we estimate it by assuming the values are spread evenly inside the class it falls in, which is linear interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the median position.",
          "workingLatex": "\\frac{n}{2} = \\frac{60}{2} = 30",
          "explanation": "We want the reading $30$ places into the ordered data. For continuous data we use $n/2$ exactly and do not round it, because we are locating a point on a smooth scale.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Build the cumulative frequencies.",
          "workingLatex": "8, \\ 23, \\ 45, \\ 55, \\ 60",
          "explanation": "Running totals tell us how many workers have a time up to the top of each class, which lets us see where the $30$th value sits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the class containing the median.",
          "workingLatex": "23 < 30 \\le 45 \\ \\Rightarrow \\ 20 \\le t < 30",
          "explanation": "By the second class only $23$ workers are accounted for, but by the third class we reach $45$. So the $30$th value lands inside the class $20 \\le t < 30$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the lower class boundary $L$.",
          "workingLatex": "L = 20",
          "explanation": "Interpolation starts from the bottom of the containing class and adds a fraction of the way across it; that bottom boundary is $20$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the cumulative frequency before this class, $F$.",
          "workingLatex": "F = 23",
          "explanation": "$23$ workers already lie below the class, so we only need the median to be a further $30 - 23$ places into it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the class frequency $f$ and width $w$.",
          "workingLatex": "f = 22, \\qquad w = 30 - 20 = 10",
          "explanation": "There are $22$ workers spread across a $10$-minute-wide class. We picture them evenly placed so we can slide the right fraction of the way in.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the interpolation formula.",
          "workingLatex": "\\text{median} = L + \\frac{\\tfrac{n}{2} - F}{f} \\times w",
          "explanation": "The fraction $\\frac{n/2 - F}{f}$ is how far through the class the median lies; multiplying by the width $w$ turns that fraction into minutes to add on to $L$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the values.",
          "workingLatex": "\\text{median} = 20 + \\frac{30 - 23}{22} \\times 10",
          "explanation": "We plug in $L=20$, $n/2=30$, $F=23$, $f=22$ and $w=10$, keeping each piece in its correct place.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the fraction and multiply.",
          "workingLatex": "\\text{median} = 20 + \\frac{7}{22} \\times 10 = 20 + \\frac{70}{22}",
          "explanation": "The median is $\\tfrac{7}{22}$ of the way into the class; scaling that share by the $10$-minute width gives the extra minutes.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate.",
          "workingLatex": "\\text{median} = 20 + 3.1818\\ldots = 23.1818\\ldots",
          "explanation": "Adding the fractional part to the lower boundary gives the estimated middle time.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Round to $3$ significant figures.",
          "workingLatex": "\\text{median} \\approx 23.2 \\text{ minutes}",
          "explanation": "The digit after the second $1$ is an $8$, so we round up to give $23.2$ minutes.",
          "diagram": null
        }
      ],
      "finalAnswer": "The estimated median commuting time is $23.2$ minutes (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "lower quartile",
      "linear interpolation",
      "grouped data"
    ],
    "questionText": "The mass, $m$ grams, of $60$ apples is grouped as $100 \\le m < 120$ with frequency $7$; $120 \\le m < 140$ with frequency $13$; $140 \\le m < 160$ with frequency $20$; $160 \\le m < 180$ with frequency $12$; $180 \\le m < 200$ with frequency $8$. Use linear interpolation to estimate the lower quartile, $Q_1$, to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the lower quartile is.",
          "workingLatex": "Q_1 = \\text{value at position } \\tfrac{n}{4}",
          "explanation": "The lower quartile marks the point one quarter of the way through the ordered data. With grouped data we estimate it by interpolation, assuming apples are spread evenly within their class.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the position of $Q_1$.",
          "workingLatex": "\\frac{n}{4} = \\frac{60}{4} = 15",
          "explanation": "We are locating the reading $15$ places into the data. For continuous interpolation we use $n/4$ exactly and do not round it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Build the cumulative frequencies.",
          "workingLatex": "7, \\ 20, \\ 40, \\ 52, \\ 60",
          "explanation": "Running totals show how many apples weigh up to the top of each class, revealing where the $15$th apple sits.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the class containing $Q_1$.",
          "workingLatex": "7 < 15 \\le 20 \\ \\Rightarrow \\ 120 \\le m < 140",
          "explanation": "Only $7$ apples fall below $120$ g, but by $140$ g we have $20$. So the $15$th apple lies in the class $120 \\le m < 140$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify $L$ and $F$.",
          "workingLatex": "L = 120, \\qquad F = 7",
          "explanation": "We start from the bottom of the class, $120$ g, and note that $7$ apples already lie below it, so $Q_1$ is $15 - 7$ places into this class.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify $f$ and $w$.",
          "workingLatex": "f = 13, \\qquad w = 140 - 120 = 20",
          "explanation": "There are $13$ apples spread over a $20$ g wide band; picturing them evenly placed lets us slide the correct fraction across.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the interpolation formula.",
          "workingLatex": "Q_1 = L + \\frac{\\tfrac{n}{4} - F}{f} \\times w",
          "explanation": "The fraction says how far into the class $Q_1$ lies, and multiplying by the width turns that into grams to add to $L$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values.",
          "workingLatex": "Q_1 = 120 + \\frac{15 - 7}{13} \\times 20",
          "explanation": "We insert $L=120$, $n/4=15$, $F=7$, $f=13$ and $w=20$ into their correct positions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify.",
          "workingLatex": "Q_1 = 120 + \\frac{8}{13} \\times 20 = 120 + \\frac{160}{13}",
          "explanation": "$Q_1$ is $\\tfrac{8}{13}$ of the way through the class; scaling by the $20$ g width gives the extra grams.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate.",
          "workingLatex": "Q_1 = 120 + 12.3076\\ldots = 132.3076\\ldots",
          "explanation": "Adding the fractional part to the lower boundary gives the estimated lower quartile mass.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round to $3$ significant figures.",
          "workingLatex": "Q_1 \\approx 132 \\text{ g}",
          "explanation": "The figure after the second $2$ is a $3$, so we round down, giving $132$ g to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "The estimated lower quartile is $Q_1 \\approx 132$ g (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "quartiles",
      "interquartile range",
      "linear interpolation"
    ],
    "questionText": "The length, $L$ cm, of $50$ leaves is grouped as $4 \\le L < 6$ with frequency $5$; $6 \\le L < 8$ with frequency $12$; $8 \\le L < 10$ with frequency $18$; $10 \\le L < 12$ with frequency $10$; $12 \\le L < 14$ with frequency $5$. Use linear interpolation to estimate $Q_1$ and $Q_3$, and hence the interquartile range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan for the IQR.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1",
          "explanation": "The interquartile range measures the spread of the middle half of the data. We therefore need both quartiles first, each found by linear interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the quartile positions.",
          "workingLatex": "\\frac{n}{4} = \\frac{50}{4} = 12.5, \\qquad \\frac{3n}{4} = \\frac{150}{4} = 37.5",
          "explanation": "$Q_1$ sits a quarter of the way in and $Q_3$ three quarters of the way in. For continuous data we keep these positions exactly rather than rounding.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Build the cumulative frequencies.",
          "workingLatex": "5, \\ 17, \\ 35, \\ 45, \\ 50",
          "explanation": "The running totals show where the $12.5$th and $37.5$th leaves fall among the classes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the class for $Q_1$.",
          "workingLatex": "5 < 12.5 \\le 17 \\ \\Rightarrow \\ 6 \\le L < 8",
          "explanation": "Position $12.5$ is past the first cumulative total of $5$ but within $17$, so $Q_1$ lies in the class $6 \\le L < 8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List the values for $Q_1$.",
          "workingLatex": "L = 6, \\ F = 5, \\ f = 12, \\ w = 2",
          "explanation": "We start at $6$ cm, note $5$ leaves already lie below, and there are $12$ leaves across a $2$ cm wide class.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $Q_1$.",
          "workingLatex": "Q_1 = 6 + \\frac{12.5 - 5}{12} \\times 2 = 6 + \\frac{15}{12} = 7.25",
          "explanation": "The fraction $\\tfrac{7.5}{12}$ of the $2$ cm width is $1.25$ cm, so $Q_1$ is $1.25$ cm above the lower boundary. This works out exactly to $7.25$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Locate the class for $Q_3$.",
          "workingLatex": "35 < 37.5 \\le 45 \\ \\Rightarrow \\ 10 \\le L < 12",
          "explanation": "Position $37.5$ is past the cumulative total of $35$ but within $45$, so $Q_3$ lies in the class $10 \\le L < 12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "List the values for $Q_3$.",
          "workingLatex": "L = 10, \\ F = 35, \\ f = 10, \\ w = 2",
          "explanation": "We start at $10$ cm, with $35$ leaves already below it, and $10$ leaves spread across the $2$ cm class.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute $Q_3$.",
          "workingLatex": "Q_3 = 10 + \\frac{37.5 - 35}{10} \\times 2 = 10 + 0.5 = 10.5",
          "explanation": "Only $\\tfrac{2.5}{10}$ of the width is needed, which is $0.5$ cm, so $Q_3$ is $0.5$ cm above the lower boundary, giving exactly $10.5$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract to find the IQR.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 10.5 - 7.25",
          "explanation": "The interquartile range is the gap between the two quartiles, capturing the spread of the central half of the leaf lengths.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the interquartile range.",
          "workingLatex": "\\text{IQR} = 3.25 \\text{ cm}",
          "explanation": "The middle $50\\%$ of leaf lengths span about $3.25$ cm, a compact and unrounded result since both quartiles came out exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q_1 = 7.25$ cm, $Q_3 = 10.5$ cm, so the interquartile range is $3.25$ cm."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "modal class",
      "estimated mean",
      "grouped data"
    ],
    "questionText": "The duration, $t$ seconds, of $60$ customer phone calls is grouped as $0 \\le t < 60$ with frequency $9$; $60 \\le t < 120$ with frequency $21$; $120 \\le t < 180$ with frequency $18$; $180 \\le t < 240$ with frequency $8$; $240 \\le t < 300$ with frequency $4$. (a) Write down the modal class. (b) Estimate the mean call duration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the class widths for part (a).",
          "workingLatex": "60 - 0 = 60, \\quad 120 - 60 = 60, \\ \\ldots = 60",
          "explanation": "All classes are $60$ seconds wide, so comparing frequencies directly is fair and the modal class is simply the class with the highest frequency.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the modal class.",
          "workingLatex": "\\max(9, 21, 18, 8, 4) = 21 \\ \\Rightarrow \\ 60 \\le t < 120",
          "explanation": "The largest frequency is $21$, which belongs to the second class. So more calls lasted between $60$ and $120$ seconds than any other band.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the estimated mean formula for part (b).",
          "workingLatex": "\\bar{x} = \\frac{\\sum f x}{\\sum f}, \\qquad x = \\text{midpoint}",
          "explanation": "As the exact call times are hidden by grouping, we represent each class by its midpoint and weight it by the number of calls to estimate the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the midpoints.",
          "workingLatex": "30, \\ 90, \\ 150, \\ 210, \\ 270",
          "explanation": "Each midpoint is halfway across a $60$ second band, the fairest single value to represent the calls inside it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply frequency by midpoint.",
          "workingLatex": "9(30)=270,\\ 21(90)=1890,\\ 18(150)=2700,\\ 8(210)=1680,\\ 4(270)=1080",
          "explanation": "Each $fx$ estimates the total talking time of one class, treating every call as if it lasted the midpoint time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Total the frequencies.",
          "workingLatex": "\\sum f = 9 + 21 + 18 + 8 + 4 = 60",
          "explanation": "This confirms all $60$ calls are included.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Total the $fx$ values.",
          "workingLatex": "\\sum f x = 270 + 1890 + 2700 + 1680 + 1080 = 7620",
          "explanation": "Adding the class contributions gives the estimated total duration of all the calls, in seconds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to find the mean.",
          "workingLatex": "\\bar{x} = \\frac{7620}{60} = 127",
          "explanation": "Sharing the total time equally among the $60$ calls gives exactly $127$ seconds, so no rounding is needed here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both answers.",
          "workingLatex": "\\text{modal class } 60 \\le t < 120, \\qquad \\bar{x} = 127 \\text{ s}",
          "explanation": "The modal class is the busiest interval and the estimated mean is the typical call length; both describe the centre of the data in different ways.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The modal class is $60 \\le t < 120$ seconds. (b) The estimated mean is $\\bar{x} = 127$ seconds."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "percentile",
      "linear interpolation",
      "grouped data"
    ],
    "questionText": "At an airport the mass, $m$ kg, of $100$ suitcases is grouped as $0 \\le m < 5$ with frequency $8$; $5 \\le m < 10$ with frequency $20$; $10 \\le m < 15$ with frequency $33$; $15 \\le m < 20$ with frequency $25$; $20 \\le m < 25$ with frequency $14$. Use linear interpolation to estimate the $90$th percentile, $P_{90}$, to $3$ significant figures, and interpret it in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what a percentile is.",
          "workingLatex": "P_{90} = \\text{value below which } 90\\% \\text{ of the data lie}",
          "explanation": "Percentiles cut the data into hundredths. The $90$th percentile is the mass that $90\\%$ of suitcases fall below. As the data are grouped we estimate it with linear interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size.",
          "workingLatex": "n = 8 + 20 + 33 + 25 + 14 = 100",
          "explanation": "Confirming $n = 100$ also checks that no class frequency has been missed before we start locating the percentile.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the position of $P_{90}$.",
          "workingLatex": "\\frac{90}{100} \\times n = \\frac{90}{100} \\times 100 = 90",
          "explanation": "The general percentile position is $\\tfrac{p}{100}\\times n$. For continuous interpolation we use this exact value and do not round it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Build the cumulative frequencies.",
          "workingLatex": "8, \\ 28, \\ 61, \\ 86, \\ 100",
          "explanation": "The running totals show how many suitcases weigh up to the top of each class, so we can see which class the $90$th value lands in.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the class containing $P_{90}$.",
          "workingLatex": "86 < 90 \\le 100 \\ \\Rightarrow \\ 20 \\le m < 25",
          "explanation": "By $20$ kg we have accounted for $86$ suitcases, and the last class takes us to $100$. So the $90$th value lies in the class $20 \\le m < 25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the lower boundary $L$.",
          "workingLatex": "L = 20",
          "explanation": "Interpolation begins at the bottom of the containing class, which is $20$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the cumulative frequency before the class, $F$.",
          "workingLatex": "F = 86",
          "explanation": "$86$ suitcases already lie below the class, so $P_{90}$ needs to reach only $90 - 86$ further places into it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify $f$ and $w$.",
          "workingLatex": "f = 14, \\qquad w = 25 - 20 = 5",
          "explanation": "There are $14$ suitcases spread over a $5$ kg wide class; we picture them evenly placed so we can move the right fraction across.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the interpolation formula.",
          "workingLatex": "P_{90} = L + \\frac{\\frac{90}{100}n - F}{f} \\times w",
          "explanation": "The fraction is how far into the class the percentile lies; scaling it by the width $w$ turns it into kilograms to add on to $L$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the values.",
          "workingLatex": "P_{90} = 20 + \\frac{90 - 86}{14} \\times 5",
          "explanation": "We insert $L=20$, position $90$, $F=86$, $f=14$ and $w=5$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the fraction.",
          "workingLatex": "P_{90} = 20 + \\frac{4}{14} \\times 5 = 20 + \\frac{20}{14}",
          "explanation": "$P_{90}$ lies $\\tfrac{4}{14}$ of the way into the class; multiplying that share by the $5$ kg width gives the extra mass.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate.",
          "workingLatex": "P_{90} = 20 + 1.4285\\ldots = 21.4285\\ldots",
          "explanation": "Adding the fractional part to the lower boundary gives the estimated $90$th percentile mass.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to $3$ significant figures.",
          "workingLatex": "P_{90} \\approx 21.4 \\text{ kg}",
          "explanation": "The digit after the $4$ is a $2$, so we round down to $21.4$ kg.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the result.",
          "workingLatex": "90\\% \\text{ of suitcases weigh} < 21.4 \\text{ kg}",
          "explanation": "About $90\\%$ of the suitcases weigh less than $21.4$ kg, so only the heaviest $10\\%$ exceed this mass. This is exactly the kind of cut-off an airline might use for an excess-baggage threshold.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P_{90} \\approx 21.4$ kg (to $3$ s.f.): about $90\\%$ of the suitcases weigh less than $21.4$ kg."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "percentiles",
      "interpercentile range",
      "linear interpolation",
      "spread"
    ],
    "questionText": "The finishing time, $t$ seconds, of $80$ sprinters in a $100$ m race is grouped as $12 \\le t < 13$ with frequency $6$; $13 \\le t < 14$ with frequency $14$; $14 \\le t < 15$ with frequency $22$; $15 \\le t < 16$ with frequency $26$; $16 \\le t < 17$ with frequency $12$. Use linear interpolation to estimate the $10$th to $90$th interpercentile range, to $3$ significant figures, and interpret it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what is required.",
          "workingLatex": "\\text{IPR}_{10,90} = P_{90} - P_{10}",
          "explanation": "The $10$-to-$90$ interpercentile range measures the spread of the middle $80\\%$ of the times, ignoring the fastest and slowest $10\\%$. We need both percentiles by interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size and positions.",
          "workingLatex": "n = 80, \\quad P_{10}: \\frac{10}{100}(80)=8, \\quad P_{90}: \\frac{90}{100}(80)=72",
          "explanation": "The $10$th percentile sits at position $8$ and the $90$th at position $72$. We keep these exact for continuous interpolation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Build the cumulative frequencies.",
          "workingLatex": "6, \\ 20, \\ 42, \\ 68, \\ 80",
          "explanation": "Running totals let us find which classes contain positions $8$ and $72$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the class for $P_{10}$.",
          "workingLatex": "6 < 8 \\le 20 \\ \\Rightarrow \\ 13 \\le t < 14",
          "explanation": "Position $8$ is past the first cumulative total of $6$ but within $20$, so $P_{10}$ lies in the class $13 \\le t < 14$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List the values for $P_{10}$.",
          "workingLatex": "L = 13, \\ F = 6, \\ f = 14, \\ w = 1",
          "explanation": "We start at $13$ s, with $6$ sprinters already below, across a $14$-strong class that is $1$ second wide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $P_{10}$.",
          "workingLatex": "P_{10} = 13 + \\frac{8 - 6}{14} \\times 1 = 13 + \\frac{2}{14} = 13.1428\\ldots",
          "explanation": "$P_{10}$ is $\\tfrac{2}{14}$ of the way into a $1$ second class. We keep the full decimal for now to avoid rounding error in the later subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Locate the class for $P_{90}$.",
          "workingLatex": "68 < 72 \\le 80 \\ \\Rightarrow \\ 16 \\le t < 17",
          "explanation": "Position $72$ is past the cumulative total of $68$ but within $80$, so $P_{90}$ lies in the class $16 \\le t < 17$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "List the values for $P_{90}$.",
          "workingLatex": "L = 16, \\ F = 68, \\ f = 12, \\ w = 1",
          "explanation": "We start at $16$ s, with $68$ sprinters below, across a $12$-strong class that is $1$ second wide.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute $P_{90}$.",
          "workingLatex": "P_{90} = 16 + \\frac{72 - 68}{12} \\times 1 = 16 + \\frac{4}{12} = 16.3333\\ldots",
          "explanation": "$P_{90}$ is $\\tfrac{4}{12}$ of the way into the class. Again we hold on to the full decimal before subtracting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract the percentiles.",
          "workingLatex": "\\text{IPR}_{10,90} = 16.3333\\ldots - 13.1428\\ldots",
          "explanation": "Using the unrounded values keeps the subtraction accurate; rounding first could throw off the last figure.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the difference.",
          "workingLatex": "\\text{IPR}_{10,90} = 3.1904\\ldots",
          "explanation": "The gap between the two percentiles is the width that the central $80\\%$ of finishing times occupy.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Round to $3$ significant figures.",
          "workingLatex": "\\text{IPR}_{10,90} \\approx 3.19 \\text{ s}",
          "explanation": "The digit after the second $9$ rounds the value to $3.19$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the result.",
          "workingLatex": "P_{10} \\approx 13.1, \\ P_{90} \\approx 16.3, \\ \\text{spread} \\approx 3.19 \\text{ s}",
          "explanation": "The middle $80\\%$ of sprinters finished within a band of about $3.19$ seconds. Because it ignores the fastest and slowest $10\\%$, this range is not distorted by a few unusually quick or slow runners, making it a robust measure of spread.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P_{10} \\approx 13.1$ s and $P_{90} \\approx 16.3$ s, so the $10$-to-$90$ interpercentile range is about $3.19$ s (to $3$ s.f.): the middle $80\\%$ of times span roughly $3.19$ seconds."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "estimated mean",
      "median",
      "linear interpolation",
      "skewness"
    ],
    "questionText": "The weekly amount, $a$ pounds, spent on snacks by $80$ students is grouped as $0 \\le a < 10$ with frequency $20$; $10 \\le a < 20$ with frequency $30$; $20 \\le a < 30$ with frequency $18$; $30 \\le a < 40$ with frequency $8$; $40 \\le a < 50$ with frequency $4$. (a) Estimate the mean. (b) Use linear interpolation to estimate the median. (c) Compare the mean and median and comment on the skewness.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan.",
          "workingLatex": "\\bar{x} = \\frac{\\sum f x}{\\sum f}, \\qquad \\text{median at position } \\tfrac{n}{2}",
          "explanation": "We estimate the mean from midpoints and the median from interpolation, then compare them, since the relationship between the two reveals the skew of the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the midpoints for part (a).",
          "workingLatex": "5, \\ 15, \\ 25, \\ 35, \\ 45",
          "explanation": "Each midpoint sits halfway across a $10$-pound band and represents the spending of the students in that band.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply frequency by midpoint.",
          "workingLatex": "20(5)=100,\\ 30(15)=450,\\ 18(25)=450,\\ 8(35)=280,\\ 4(45)=180",
          "explanation": "Each $fx$ estimates the total weekly spend of one class, as if everyone in it spent the midpoint amount.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Total the frequencies.",
          "workingLatex": "\\sum f = 20 + 30 + 18 + 8 + 4 = 80",
          "explanation": "This confirms all $80$ students are accounted for.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total the $fx$ values.",
          "workingLatex": "\\sum f x = 100 + 450 + 450 + 280 + 180 = 1460",
          "explanation": "Adding the class totals gives the estimated combined weekly spend of all the students.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the mean.",
          "workingLatex": "\\bar{x} = \\frac{1460}{80} = 18.25",
          "explanation": "Sharing the total spend equally among the $80$ students gives an estimated mean of exactly $\\pounds 18.25$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the median position for part (b).",
          "workingLatex": "\\frac{n}{2} = \\frac{80}{2} = 40",
          "explanation": "The median is the value at position $40$; for continuous interpolation we use this exactly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Build the cumulative frequencies.",
          "workingLatex": "20, \\ 50, \\ 68, \\ 76, \\ 80",
          "explanation": "Running totals show where the $40$th student sits in the ordered data.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Locate the class containing the median.",
          "workingLatex": "20 < 40 \\le 50 \\ \\Rightarrow \\ 10 \\le a < 20",
          "explanation": "Only $20$ students spend under $\\pounds 10$, but by $\\pounds 20$ we reach $50$, so the $40$th value lies in the class $10 \\le a < 20$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List the interpolation values.",
          "workingLatex": "L = 10, \\ F = 20, \\ f = 30, \\ w = 10",
          "explanation": "We start at $\\pounds 10$, with $20$ students already below, across a $30$-strong class that is $\\pounds 10$ wide.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the median.",
          "workingLatex": "\\text{median} = 10 + \\frac{40 - 20}{30} \\times 10 = 10 + \\frac{200}{30} = 16.6666\\ldots",
          "explanation": "The median lies $\\tfrac{20}{30}$ of the way into the class; scaling by the $\\pounds 10$ width adds about $\\pounds 6.67$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Round the median.",
          "workingLatex": "\\text{median} \\approx 16.7",
          "explanation": "To $3$ significant figures the estimated median weekly spend is $\\pounds 16.7$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare the two measures for part (c).",
          "workingLatex": "\\bar{x} = 18.25 > \\text{median} \\approx 16.7",
          "explanation": "The mean is noticeably larger than the median. The mean is sensitive to the students spending large amounts, whereas the median is not.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Comment on the skewness.",
          "workingLatex": "\\bar{x} > \\text{median} \\ \\Rightarrow \\ \\text{positive skew}",
          "explanation": "When the mean exceeds the median the distribution has a longer tail to the right, i.e. positive (right) skew. Here a minority of high spenders in the upper classes pulls the mean above the median.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Estimated mean $\\bar{x} = \\pounds 18.25$. (b) Estimated median $\\approx \\pounds 16.7$ (to $3$ s.f.). (c) Since the mean ($18.25$) is greater than the median ($16.7$), the distribution has positive (right) skew, with a few high-spending students pulling the mean up."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "variance",
      "standard deviation",
      "raw data"
    ],
    "questionText": "The reaction times (in tenths of a second) of five people are recorded as $3$, $5$, $8$, $9$ and $10$. Calculate the variance and standard deviation of these values, using $\\sigma^2 = \\frac{\\Sigma x^2}{n} - \\bar{x}^2$. Give the standard deviation to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula we will use.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma x^2}{n} - \\bar{x}^2",
          "explanation": "This is the Edexcel population variance formula. It says the spread is the mean of the squared values minus the square of the mean, which is quicker than working out every deviation from the mean by hand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count how many values there are.",
          "workingLatex": "n = 5",
          "explanation": "We divide by $n$ (not $n-1$) because Edexcel treats this as the whole population, so we need to know exactly how many data points we have.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the values to find the total.",
          "workingLatex": "\\Sigma x = 3 + 5 + 8 + 9 + 10 = 35",
          "explanation": "The mean needs the sum of all the data, so we total the list first before dividing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the mean.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma x}{n} = \\frac{35}{5} = 7",
          "explanation": "The mean is the balance point of the data. We will subtract its square at the end, so we find it now.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square each individual value.",
          "workingLatex": "3^2, 5^2, 8^2, 9^2, 10^2 = 9, 25, 64, 81, 100",
          "explanation": "The formula needs the sum of the squares, so we square every data value before adding. Squaring keeps all contributions positive and weights larger gaps more.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the squared values to find the total.",
          "workingLatex": "\\Sigma x^2 = 9 + 25 + 64 + 81 + 100 = 279",
          "explanation": "This total, $\\Sigma x^2$, is the raw material for measuring spread. Re-adding it carefully avoids the most common error in these questions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide the sum of squares by n.",
          "workingLatex": "\\frac{\\Sigma x^2}{n} = \\frac{279}{5} = 55.8",
          "explanation": "This gives the mean of the squared values, which is the first part of the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square the mean.",
          "workingLatex": "\\bar{x}^2 = 7^2 = 49",
          "explanation": "The formula subtracts the square of the mean, so we square the mean we found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to find the variance.",
          "workingLatex": "\\sigma^2 = 55.8 - 49 = 6.8",
          "explanation": "The variance is the mean-of-squares minus the square-of-the-mean. It comes out positive, which is a good sign it is correct, since variance can never be negative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the square root to find the standard deviation.",
          "workingLatex": "\\sigma = \\sqrt{6.8} = 2.6076...",
          "explanation": "Variance is in squared units, so we square-root it to bring the measure of spread back into the same units as the original data.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round the standard deviation to 3 significant figures.",
          "workingLatex": "\\sigma = 2.61",
          "explanation": "The square root is not exact, so we round and state the accuracy. Three significant figures is the standard reporting precision for these calculations.",
          "diagram": null
        }
      ],
      "finalAnswer": "Variance $\\sigma^2 = 6.8$ and standard deviation $\\sigma = 2.61$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "standard deviation",
      "summary statistics",
      "variance"
    ],
    "questionText": "For a set of $20$ data values it is given that $\\Sigma x = 280$ and $\\Sigma x^2 = 4500$. Find the standard deviation of the data, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula that links these totals to the variance.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma x^2}{n} - \\bar{x}^2",
          "explanation": "We are given the summary totals directly, so this formula is ideal: it turns $\\Sigma x$ and $\\Sigma x^2$ into the variance without needing the original list.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the given information.",
          "workingLatex": "n = 20, \\quad \\Sigma x = 280, \\quad \\Sigma x^2 = 4500",
          "explanation": "Listing the known values first makes it clear which number goes into which part of the formula and prevents mixing up $\\Sigma x$ with $\\Sigma x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note that we divide by n for population variance.",
          "workingLatex": "\\text{divide by } n = 20",
          "explanation": "The Edexcel convention treats the data as a full population, so we divide by $n$ rather than $n-1$. Using $n-1$ here would give the wrong answer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the mean.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma x}{n} = \\frac{280}{20} = 14",
          "explanation": "The variance formula needs the mean, so we calculate it from the total and the count.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the sum of squares by n.",
          "workingLatex": "\\frac{\\Sigma x^2}{n} = \\frac{4500}{20} = 225",
          "explanation": "This is the mean of the squared values, the first term of the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the mean.",
          "workingLatex": "\\bar{x}^2 = 14^2 = 196",
          "explanation": "The second term of the formula is the square of the mean, so we square the $14$ we just found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to find the variance.",
          "workingLatex": "\\sigma^2 = 225 - 196 = 29",
          "explanation": "Subtracting the square of the mean from the mean of the squares gives the variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the variance is sensible.",
          "workingLatex": "\\sigma^2 = 29 > 0",
          "explanation": "A quick sanity check: variance measures squared spread, so it must be positive. A negative result would mean an arithmetic slip somewhere.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the square root.",
          "workingLatex": "\\sigma = \\sqrt{29} = 5.3851...",
          "explanation": "Square-rooting the variance returns the spread to the original units of the data.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma = 5.39",
          "explanation": "The root is irrational, so we report it to $3$ significant figures and state the accuracy.",
          "diagram": null
        }
      ],
      "finalAnswer": "Standard deviation $\\sigma = 5.39$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "standard deviation",
      "frequency table",
      "discrete data"
    ],
    "questionText": "The number of pets $x$ owned by each of $30$ households is recorded. The values are $x = 0, 1, 2, 3, 4$ with frequencies $f = 5, 8, 10, 4, 3$ respectively. Calculate the standard deviation of the number of pets, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the frequency version of the variance formula.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma f x^2}{\\Sigma f} - \\left(\\frac{\\Sigma f x}{\\Sigma f}\\right)^2",
          "explanation": "When data are grouped by frequency, each value is repeated, so we weight everything by $f$. This is the same idea as before but each squared value is counted as many times as it occurs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Build a working table of fx and fx-squared.",
          "workingLatex": "\\begin{array}{c|ccccc|c} x & 0 & 1 & 2 & 3 & 4 & \\text{Total} \\\\ f & 5 & 8 & 10 & 4 & 3 & 30 \\\\ fx & 0 & 8 & 20 & 12 & 12 & 52 \\\\ fx^2 & 0 & 8 & 40 & 36 & 48 & 132 \\end{array}",
          "explanation": "Laying the calculation out in a table keeps the $fx$ and $fx^2$ columns organised so nothing is missed and totals are easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the total frequency.",
          "workingLatex": "\\Sigma f = 5 + 8 + 10 + 4 + 3 = 30",
          "explanation": "This is the total number of households, and it is the divisor in the formula, so we confirm it matches the given $30$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the total of fx.",
          "workingLatex": "\\Sigma f x = 0 + 8 + 20 + 12 + 12 = 52",
          "explanation": "Each $fx$ is a value multiplied by how often it occurs, so summing them gives the grand total of all pets across the households.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the total of fx-squared.",
          "workingLatex": "\\Sigma f x^2 = 0 + 8 + 40 + 36 + 48 = 132",
          "explanation": "Here $fx^2$ means $f \\times x^2$: we square the value then multiply by its frequency. This weighted sum of squares drives the spread calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the mean.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma f x}{\\Sigma f} = \\frac{52}{30} = 1.7333...",
          "explanation": "The mean is the total number of pets shared out over all households. We keep extra decimals for now to avoid rounding errors in the next step.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide the weighted sum of squares by the total frequency.",
          "workingLatex": "\\frac{\\Sigma f x^2}{\\Sigma f} = \\frac{132}{30} = 4.4",
          "explanation": "This is the mean of the squared values, the first term of the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square the mean.",
          "workingLatex": "\\left(\\frac{\\Sigma f x}{\\Sigma f}\\right)^2 = 1.7333...^2 = 3.0044...",
          "explanation": "The formula subtracts the square of the mean, so we square the mean value we computed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to find the variance.",
          "workingLatex": "\\sigma^2 = 4.4 - 3.0044... = 1.3956...",
          "explanation": "Mean-of-squares minus square-of-the-mean gives the variance. It is positive, as it must be.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the square root.",
          "workingLatex": "\\sigma = \\sqrt{1.3956...} = 1.1813...",
          "explanation": "Square-rooting converts the variance back into the units of the original data (number of pets).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma = 1.18",
          "explanation": "The answer is not exact, so we give it to $3$ significant figures and state the accuracy.",
          "diagram": null
        }
      ],
      "finalAnswer": "Standard deviation $\\sigma = 1.18$ pets (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "variance",
      "standard deviation",
      "raw data"
    ],
    "questionText": "The masses (in grams) of five apples are $12$, $15$, $15$, $18$ and $20$. Find the variance and the standard deviation of these masses, giving the standard deviation to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma x^2}{n} - \\bar{x}^2",
          "explanation": "We use the population variance formula: the mean of the squares minus the square of the mean. This avoids computing five separate deviations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the values.",
          "workingLatex": "n = 5",
          "explanation": "We need $n$ both to find the mean and to divide the sum of squares, and Edexcel divides by $n$ for population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the values.",
          "workingLatex": "\\Sigma x = 12 + 15 + 15 + 18 + 20 = 80",
          "explanation": "Totalling the masses gives us what we need for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the mean.",
          "workingLatex": "\\bar{x} = \\frac{80}{5} = 16",
          "explanation": "The mean mass is the balance point of the data; we will subtract its square later.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square each value.",
          "workingLatex": "12^2, 15^2, 15^2, 18^2, 20^2 = 144, 225, 225, 324, 400",
          "explanation": "The formula needs the sum of squares, so each mass is squared first. Note the repeated value $15$ is squared each time it appears.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the squared values.",
          "workingLatex": "\\Sigma x^2 = 144 + 225 + 225 + 324 + 400 = 1318",
          "explanation": "This total, $\\Sigma x^2$, is the key ingredient for the spread. Adding carefully here prevents the most common mistake.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide the sum of squares by n.",
          "workingLatex": "\\frac{\\Sigma x^2}{n} = \\frac{1318}{5} = 263.6",
          "explanation": "This is the mean of the squared masses, the first term in the formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square the mean.",
          "workingLatex": "\\bar{x}^2 = 16^2 = 256",
          "explanation": "We square the mean because the formula subtracts the square of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to find the variance.",
          "workingLatex": "\\sigma^2 = 263.6 - 256 = 7.6",
          "explanation": "The variance is the difference between the two terms. It is positive, confirming the calculation is on track.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Square root to find the standard deviation.",
          "workingLatex": "\\sigma = \\sqrt{7.6} = 2.7568...",
          "explanation": "Taking the root returns the spread to grams, the same units as the data.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma = 2.76",
          "explanation": "The root is not exact, so we round to $3$ significant figures and state so.",
          "diagram": null
        }
      ],
      "finalAnswer": "Variance $\\sigma^2 = 7.6 \\text{ g}^2$ and standard deviation $\\sigma = 2.76$ g (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "standard deviation",
      "summary statistics",
      "interpretation"
    ],
    "questionText": "A machine fills bags of flour. For a sample of $10$ bags the masses (in grams) satisfy $\\Sigma x = 1500$ and $\\Sigma x^2 = 225400$. Find the mean and standard deviation of the masses (standard deviation to $3$ significant figures), and interpret the standard deviation in the context of the machine.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what is required.",
          "workingLatex": "\\text{mean } \\bar{x}, \\; \\text{standard deviation } \\sigma, \\; \\text{interpretation}",
          "explanation": "The question has three parts: a mean, a standard deviation, and a sentence of meaning. Planning this keeps the answer complete.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the variance formula.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma x^2}{n} - \\bar{x}^2",
          "explanation": "We are given the summary totals, so this formula lets us find the spread without the individual masses.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the given values.",
          "workingLatex": "n = 10, \\quad \\Sigma x = 1500, \\quad \\Sigma x^2 = 225400",
          "explanation": "Listing the data prevents confusing the sum with the sum of squares in the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the mean.",
          "workingLatex": "\\bar{x} = \\frac{1500}{10} = 150",
          "explanation": "The mean mass is the total mass shared over the ten bags, giving the typical fill of $150$ g.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the sum of squares by n.",
          "workingLatex": "\\frac{\\Sigma x^2}{n} = \\frac{225400}{10} = 22540",
          "explanation": "This is the mean of the squared masses, the first term of the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the mean.",
          "workingLatex": "\\bar{x}^2 = 150^2 = 22500",
          "explanation": "The formula subtracts the square of the mean, so we square the $150$ we found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to find the variance.",
          "workingLatex": "\\sigma^2 = 22540 - 22500 = 40",
          "explanation": "The two large numbers are close together, and their difference of $40$ is the variance. A small difference like this tells us the masses cluster tightly around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root.",
          "workingLatex": "\\sigma = \\sqrt{40} = 6.3245...",
          "explanation": "Rooting the variance brings the spread back into grams so it can be compared with the actual masses.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Round the standard deviation.",
          "workingLatex": "\\sigma = 6.32",
          "explanation": "The root is irrational, so we report it to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the standard deviation.",
          "workingLatex": "\\sigma \\approx 6.32 \\text{ g about } \\bar{x} = 150 \\text{ g}",
          "explanation": "The standard deviation measures the typical distance of a bag's mass from the mean. Here bag masses differ from $150$ g by about $6.32$ g on average.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion in context.",
          "workingLatex": "\\frac{6.32}{150} \\approx 4\\%",
          "explanation": "Because the standard deviation ($6.32$ g) is small compared with the mean ($150$ g), the machine fills the bags fairly consistently, with little variation from bag to bag.",
          "diagram": null
        }
      ],
      "finalAnswer": "Mean $\\bar{x} = 150$ g and standard deviation $\\sigma = 6.32$ g (3 s.f.). Since the standard deviation is only about $6.32$ g compared with a mean of $150$ g, the bag masses vary little around the mean, so the machine fills the bags fairly consistently."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "standard deviation",
      "frequency table",
      "discrete data"
    ],
    "questionText": "In $40$ football matches a team's goals scored $x$ are recorded. The values are $x = 0, 1, 2, 3, 4, 5$ with frequencies $f = 8, 11, 9, 5, 4, 3$ respectively. Calculate the standard deviation of the number of goals scored, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the frequency form of the variance formula.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma f x^2}{\\Sigma f} - \\left(\\frac{\\Sigma f x}{\\Sigma f}\\right)^2",
          "explanation": "Each goal-count occurs several times, so we weight the values by their frequencies. This is the standard grouped-data version of the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the working table.",
          "workingLatex": "\\begin{array}{c|cccccc|c} x & 0 & 1 & 2 & 3 & 4 & 5 & \\text{Total} \\\\ f & 8 & 11 & 9 & 5 & 4 & 3 & 40 \\\\ fx & 0 & 11 & 18 & 15 & 16 & 15 & 75 \\\\ fx^2 & 0 & 11 & 36 & 45 & 64 & 75 & 231 \\end{array}",
          "explanation": "A tidy table with $fx$ and $fx^2$ rows keeps every product organised and makes the column totals reliable to read off.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the total frequency.",
          "workingLatex": "\\Sigma f = 8 + 11 + 9 + 5 + 4 + 3 = 40",
          "explanation": "This is the number of matches and the divisor in the formula; it matches the given $40$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the total of fx.",
          "workingLatex": "\\Sigma f x = 0 + 11 + 18 + 15 + 16 + 15 = 75",
          "explanation": "Multiplying each goal-count by its frequency and summing gives the total number of goals across all $40$ matches.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the total of fx-squared.",
          "workingLatex": "\\Sigma f x^2 = 0 + 11 + 36 + 45 + 64 + 75 = 231",
          "explanation": "Here $fx^2 = f \\times x^2$: square the goal-count, then multiply by its frequency. This weighted sum of squares measures how far the data spread.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate the mean.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma f x}{\\Sigma f} = \\frac{75}{40} = 1.875",
          "explanation": "The mean number of goals is the total goals shared over all matches. It ends exactly, which keeps later arithmetic clean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide the weighted sum of squares by the total frequency.",
          "workingLatex": "\\frac{\\Sigma f x^2}{\\Sigma f} = \\frac{231}{40} = 5.775",
          "explanation": "This is the mean of the squared goal-counts, the first term in the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square the mean.",
          "workingLatex": "\\bar{x}^2 = 1.875^2 = 3.515625",
          "explanation": "The formula subtracts the square of the mean, so we square $1.875$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to find the variance.",
          "workingLatex": "\\sigma^2 = 5.775 - 3.515625 = 2.259375",
          "explanation": "Mean-of-squares minus square-of-the-mean gives the variance. It is positive, as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the variance is positive.",
          "workingLatex": "\\sigma^2 = 2.259375 > 0",
          "explanation": "A brief check: variance can never be negative, so a positive value reassures us the subtraction was done the right way round.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the square root.",
          "workingLatex": "\\sigma = \\sqrt{2.259375} = 1.5031...",
          "explanation": "Rooting the variance returns the measure of spread to the units of goals.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma = 1.50",
          "explanation": "The root is not exact, so we report it to $3$ significant figures, keeping the trailing zero to show the precision.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the result in context.",
          "workingLatex": "\\sigma = 1.50 \\text{ about } \\bar{x} = 1.875",
          "explanation": "A standard deviation of about $1.5$ goals around a mean of $1.875$ goals tells us the team's scoring typically differs from match to match by roughly one and a half goals, a moderate amount of variation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Standard deviation $\\sigma = 1.50$ goals (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "standard deviation",
      "grouped data",
      "class midpoints"
    ],
    "questionText": "The lengths, $L$ cm, of $40$ leaves are grouped as follows: $0 \\le L < 10$ (frequency $4$), $10 \\le L < 20$ (frequency $9$), $20 \\le L < 30$ (frequency $12$), $30 \\le L < 40$ (frequency $8$), $40 \\le L < 50$ (frequency $7$). Estimate the standard deviation of the leaf lengths, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the formula and note it gives an estimate.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma f x^2}{\\Sigma f} - \\left(\\frac{\\Sigma f x}{\\Sigma f}\\right)^2",
          "explanation": "With grouped data we do not know each exact length, so we represent every class by its midpoint. This makes the answer an estimate rather than exact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the midpoint of each class.",
          "workingLatex": "x = 5, 15, 25, 35, 45",
          "explanation": "The midpoint is the average of each class's lower and upper bounds, e.g. $(0+10)/2 = 5$. We assume the data in each class sits, on average, at its centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the working table with midpoints.",
          "workingLatex": "\\begin{array}{c|ccccc|c} x & 5 & 15 & 25 & 35 & 45 & \\text{Total} \\\\ f & 4 & 9 & 12 & 8 & 7 & 40 \\\\ fx & 20 & 135 & 300 & 280 & 315 & 1050 \\\\ fx^2 & 100 & 2025 & 7500 & 9800 & 14175 & 33600 \\end{array}",
          "explanation": "Organising midpoints, $fx$ and $fx^2$ into a table keeps the many products under control and makes the totals dependable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm the total frequency.",
          "workingLatex": "\\Sigma f = 4 + 9 + 12 + 8 + 7 = 40",
          "explanation": "This is the number of leaves and the divisor in the formula; it matches the given $40$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the total of fx.",
          "workingLatex": "\\Sigma f x = 20 + 135 + 300 + 280 + 315 = 1050",
          "explanation": "Each midpoint times its frequency estimates the combined length of the leaves in that class; summing gives the estimated total length.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the total of fx-squared.",
          "workingLatex": "\\Sigma f x^2 = 100 + 2025 + 7500 + 9800 + 14175 = 33600",
          "explanation": "We square each midpoint then multiply by its frequency. This weighted sum of squares captures how far the classes spread from the centre.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the estimated mean.",
          "workingLatex": "\\bar{x} = \\frac{1050}{40} = 26.25",
          "explanation": "The estimated mean length is the total estimated length shared over the $40$ leaves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide the weighted sum of squares by the total frequency.",
          "workingLatex": "\\frac{\\Sigma f x^2}{\\Sigma f} = \\frac{33600}{40} = 840",
          "explanation": "This is the mean of the squared midpoints, the first term of the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Square the mean.",
          "workingLatex": "\\bar{x}^2 = 26.25^2 = 689.0625",
          "explanation": "The formula subtracts the square of the mean, so we square $26.25$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract to find the variance.",
          "workingLatex": "\\sigma^2 = 840 - 689.0625 = 150.9375",
          "explanation": "The difference of the two terms is the estimated variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the variance is positive.",
          "workingLatex": "\\sigma^2 = 150.9375 > 0",
          "explanation": "A quick check that the value is positive confirms the subtraction was carried out in the correct order.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the square root.",
          "workingLatex": "\\sigma = \\sqrt{150.9375} = 12.285...",
          "explanation": "Rooting the variance brings the spread back into centimetres, the units of the leaf lengths.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma = 12.3",
          "explanation": "Since the midpoints made this an estimate and the root is not exact, we report the estimated standard deviation to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "Estimated standard deviation $\\sigma = 12.3$ cm (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "standard deviation",
      "sxx",
      "raw data"
    ],
    "questionText": "The daily rainfall (in mm) on eight days is $4$, $7$, $9$, $10$, $12$, $13$, $15$, $18$. Using $S_{xx} = \\Sigma x^2 - \\frac{(\\Sigma x)^2}{n}$, find $S_{xx}$, the variance $\\frac{S_{xx}}{n}$, and the standard deviation of the rainfall. Give the standard deviation to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Sxx method.",
          "workingLatex": "S_{xx} = \\Sigma x^2 - \\frac{(\\Sigma x)^2}{n}, \\quad \\sigma^2 = \\frac{S_{xx}}{n}, \\quad \\sigma = \\sqrt{\\frac{S_{xx}}{n}}",
          "explanation": "$S_{xx}$ is the total squared spread about the mean. Dividing it by $n$ gives the variance, and its square root is the standard deviation. This route keeps the numbers tidy.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the values.",
          "workingLatex": "n = 8",
          "explanation": "We need $n$ to compute $(\\Sigma x)^2/n$ and to divide $S_{xx}$, and Edexcel divides by $n$ for population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the values.",
          "workingLatex": "\\Sigma x = 4 + 7 + 9 + 10 + 12 + 13 + 15 + 18 = 88",
          "explanation": "The sum feeds into the $(\\Sigma x)^2$ part of the formula, so we total the rainfall carefully.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square each value.",
          "workingLatex": "16, 49, 81, 100, 144, 169, 225, 324",
          "explanation": "The formula needs $\\Sigma x^2$, so we square each day's rainfall before adding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the squared values.",
          "workingLatex": "\\Sigma x^2 = 16 + 49 + 81 + 100 + 144 + 169 + 225 + 324 = 1108",
          "explanation": "This sum of squares is the first term in the $S_{xx}$ formula. Re-adding it guards against slips.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the total.",
          "workingLatex": "(\\Sigma x)^2 = 88^2 = 7744",
          "explanation": "Note we square the whole sum here, which is different from $\\Sigma x^2$. Keeping the two apart is the crucial point of this method.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide that by n.",
          "workingLatex": "\\frac{(\\Sigma x)^2}{n} = \\frac{7744}{8} = 968",
          "explanation": "This term represents the part of the total squared size that is explained purely by the mean, which we then remove.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute Sxx.",
          "workingLatex": "S_{xx} = 1108 - 968 = 140",
          "explanation": "Subtracting leaves $S_{xx} = 140$, the total squared spread of the data about its mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the variance.",
          "workingLatex": "\\sigma^2 = \\frac{S_{xx}}{n} = \\frac{140}{8} = 17.5",
          "explanation": "Dividing the total squared spread by the number of values gives the average squared spread, which is the variance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the variance is positive.",
          "workingLatex": "\\sigma^2 = 17.5 > 0",
          "explanation": "$S_{xx}$ and the variance must be non-negative, so a positive value confirms the method was applied correctly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the square root.",
          "workingLatex": "\\sigma = \\sqrt{17.5} = 4.1833...",
          "explanation": "Rooting the variance returns the spread to millimetres, the units of the rainfall.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma = 4.18",
          "explanation": "The root is irrational, so we give the standard deviation to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State all three required results together.",
          "workingLatex": "S_{xx} = 140, \\quad \\sigma^2 = 17.5, \\quad \\sigma = 4.18",
          "explanation": "The question asked for three quantities, so we collect them clearly: $S_{xx}$ (total squared spread), the variance (average squared spread), and the standard deviation (spread in millimetres).",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{xx} = 140$, variance $\\sigma^2 = 17.5 \\text{ mm}^2$, standard deviation $\\sigma = 4.18$ mm (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "standard deviation",
      "grouped data",
      "sxx",
      "class midpoints"
    ],
    "questionText": "The times, $t$ minutes, taken by $40$ students to complete a puzzle are grouped as: $0 \\le t < 5$ (frequency $6$), $5 \\le t < 10$ (frequency $10$), $10 \\le t < 15$ (frequency $14$), $15 \\le t < 20$ (frequency $7$), $20 \\le t < 25$ (frequency $3$). Using $S_{xx} = \\Sigma f x^2 - \\frac{(\\Sigma f x)^2}{\\Sigma f}$ with class midpoints, estimate the standard deviation of the times, to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Sxx method for grouped data.",
          "workingLatex": "S_{xx} = \\Sigma f x^2 - \\frac{(\\Sigma f x)^2}{\\Sigma f}, \\quad \\sigma = \\sqrt{\\frac{S_{xx}}{\\Sigma f}}",
          "explanation": "This is the frequency version of $S_{xx}$. Since the data are grouped, we use midpoints, so the result is an estimate of the true standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the midpoint of each class.",
          "workingLatex": "x = 2.5, 7.5, 12.5, 17.5, 22.5",
          "explanation": "Each class is represented by its centre, e.g. $(0+5)/2 = 2.5$, assuming the values in a class average out at its midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the working table.",
          "workingLatex": "\\begin{array}{c|ccccc|c} x & 2.5 & 7.5 & 12.5 & 17.5 & 22.5 & \\text{Total} \\\\ f & 6 & 10 & 14 & 7 & 3 & 40 \\\\ fx & 15 & 75 & 175 & 122.5 & 67.5 & 455 \\\\ fx^2 & 37.5 & 562.5 & 2187.5 & 2143.75 & 1518.75 & 6450 \\end{array}",
          "explanation": "Tabulating the midpoints, $fx$ and $fx^2$ organises the decimal arithmetic and makes the totals reliable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm the total frequency.",
          "workingLatex": "\\Sigma f = 6 + 10 + 14 + 7 + 3 = 40",
          "explanation": "This is the number of students and the divisor in the formula; it matches the given $40$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the total of fx.",
          "workingLatex": "\\Sigma f x = 15 + 75 + 175 + 122.5 + 67.5 = 455",
          "explanation": "Each midpoint times its frequency estimates the total time for that class; summing gives the estimated total time for all students.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the total of fx-squared.",
          "workingLatex": "\\Sigma f x^2 = 37.5 + 562.5 + 2187.5 + 2143.75 + 1518.75 = 6450",
          "explanation": "We square each midpoint then multiply by its frequency. This weighted sum of squares is the first term of $S_{xx}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Square the total of fx.",
          "workingLatex": "(\\Sigma f x)^2 = 455^2 = 207025",
          "explanation": "Here we square the whole weighted sum, which is different from $\\Sigma f x^2$. Keeping the two distinct is the key to using $S_{xx}$ correctly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide by the total frequency.",
          "workingLatex": "\\frac{(\\Sigma f x)^2}{\\Sigma f} = \\frac{207025}{40} = 5175.625",
          "explanation": "This term is the part of the weighted sum of squares that comes from the mean alone, which we subtract off.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute Sxx.",
          "workingLatex": "S_{xx} = 6450 - 5175.625 = 1274.375",
          "explanation": "Subtracting gives $S_{xx}$, the total squared spread of the data about the estimated mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the variance.",
          "workingLatex": "\\sigma^2 = \\frac{S_{xx}}{\\Sigma f} = \\frac{1274.375}{40} = 31.859...",
          "explanation": "Dividing the total squared spread by the number of students gives the average squared spread, the estimated variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the variance is positive.",
          "workingLatex": "\\sigma^2 = 31.859... > 0",
          "explanation": "A quick check that the variance is positive confirms $S_{xx}$ was calculated the right way round.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the square root.",
          "workingLatex": "\\sigma = \\sqrt{31.859...} = 5.6444...",
          "explanation": "Rooting the variance returns the estimated spread to minutes, the units of the times.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma = 5.64",
          "explanation": "Because midpoints made this an estimate and the root is not exact, we report the estimated standard deviation to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{xx} = 1274.375$, variance $\\approx 31.9 \\text{ min}^2$, estimated standard deviation $\\sigma = 5.64$ minutes (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "standard deviation",
      "interpretation",
      "comparison"
    ],
    "questionText": "Two archers each shoot five rounds. Archer A scores $18, 20, 22, 24, 26$ and Archer B scores $10, 16, 22, 28, 34$. Find the mean and standard deviation (to $3$ significant figures) of each archer's scores, and use the standard deviations to explain which archer is more consistent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the comparison.",
          "workingLatex": "\\text{find } \\bar{x}, \\sigma \\text{ for A and B, then compare } \\sigma",
          "explanation": "To judge consistency we need each archer's spread. Since consistency is about how tightly scores cluster, the standard deviation is the deciding measure.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the variance formula.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma x^2}{n} - \\bar{x}^2",
          "explanation": "We apply the same population formula to each archer so the two results can be compared fairly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Archer A: find the total and mean.",
          "workingLatex": "\\Sigma x = 18+20+22+24+26 = 110, \\quad \\bar{x}_A = \\frac{110}{5} = 22",
          "explanation": "Totalling and dividing by $5$ gives Archer A's mean score of $22$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Archer A: square each score and add.",
          "workingLatex": "324 + 400 + 484 + 576 + 676 = 2460",
          "explanation": "We need $\\Sigma x^2$ for A, so each score is squared and the results summed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Archer A: find the variance.",
          "workingLatex": "\\sigma_A^2 = \\frac{2460}{5} - 22^2 = 492 - 484 = 8",
          "explanation": "Mean-of-squares minus square-of-the-mean gives A's variance of $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Archer A: find the standard deviation.",
          "workingLatex": "\\sigma_A = \\sqrt{8} = 2.8284... = 2.83",
          "explanation": "Rooting the variance gives A's standard deviation to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Archer B: find the total and mean.",
          "workingLatex": "\\Sigma x = 10+16+22+28+34 = 110, \\quad \\bar{x}_B = \\frac{110}{5} = 22",
          "explanation": "Archer B has the same mean score of $22$, so the means alone cannot separate them; the spread will.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Archer B: square each score and add.",
          "workingLatex": "100 + 256 + 484 + 784 + 1156 = 2780",
          "explanation": "We compute $\\Sigma x^2$ for B in the same way as for A.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Archer B: find the variance.",
          "workingLatex": "\\sigma_B^2 = \\frac{2780}{5} - 22^2 = 556 - 484 = 72",
          "explanation": "B's variance is $72$, much larger than A's $8$, showing B's scores are far more spread out.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Archer B: find the standard deviation.",
          "workingLatex": "\\sigma_B = \\sqrt{72} = 8.4852... = 8.49",
          "explanation": "Rooting B's variance gives B's standard deviation to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note that the means are equal.",
          "workingLatex": "\\bar{x}_A = \\bar{x}_B = 22",
          "explanation": "Because both archers have exactly the same mean score, the mean cannot tell them apart. This is precisely why we turn to the standard deviation, which measures spread rather than average.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the two standard deviations.",
          "workingLatex": "\\sigma_A = 2.83 < \\sigma_B = 8.49",
          "explanation": "With equal means, the smaller standard deviation wins on consistency. A's scores stay much closer to the mean than B's do.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion in context.",
          "workingLatex": "\\text{Archer A is more consistent}",
          "explanation": "A smaller standard deviation means scores vary less from round to round. Since Archer A has the smaller standard deviation, Archer A is the more consistent shooter.",
          "diagram": null
        }
      ],
      "finalAnswer": "Both archers have mean $22$. Archer A: $\\sigma_A = 2.83$ (3 s.f.); Archer B: $\\sigma_B = 8.49$ (3 s.f.). Because Archer A has the much smaller standard deviation, A's scores cluster more tightly around the mean, so Archer A is the more consistent archer."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "coding",
      "mean",
      "linear-coding",
      "decoding"
    ],
    "questionText": "The prices, in pounds, of $8$ laptops are $320, 340, 360, 380, 400, 420, 440, 460$. The prices are coded using $y = \\frac{x - 380}{20}$. Find the mean coded value $\\bar{y}$, and hence find the mean price $\\bar{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand why coding is used.",
          "workingLatex": "y = \\frac{x - 380}{20}",
          "explanation": "Coding replaces each large, awkward price with a small, simple number. Because the same rule is applied to every value, the shape of the data is preserved, so we can find the mean of the small numbers first and then translate it back to the original scale.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the constants in the code.",
          "workingLatex": "a = 380, \\quad b = 20",
          "explanation": "The code has the standard form $y = \\frac{x - a}{b}$, so here $a = 380$ (the amount subtracted) and $b = 20$ (the amount we divide by). These are the two numbers we will use to decode at the end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the code to each price.",
          "workingLatex": "y: \\; -3, -2, -1, 0, 1, 2, 3, 4",
          "explanation": "Subtracting $380$ and dividing by $20$ turns each price into a small integer. For example $\\frac{320 - 380}{20} = -3$ and $\\frac{460 - 380}{20} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the coded values.",
          "workingLatex": "\\sum y = -3 - 2 - 1 + 0 + 1 + 2 + 3 + 4 = 4",
          "explanation": "The negative and positive codes almost cancel, leaving a small total of $4$. Adding these tiny numbers is far quicker and safer than adding the original prices.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the data values.",
          "workingLatex": "n = 8",
          "explanation": "There are $8$ laptops, so $n = 8$. We need this to turn the total into a mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the mean of the coded values.",
          "workingLatex": "\\bar{y} = \\frac{\\sum y}{n} = \\frac{4}{8} = 0.5",
          "explanation": "The mean of the coded data is simply their total divided by how many there are. This locates the centre of the small numbers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the decoding rule for the mean.",
          "workingLatex": "x = a + by \\implies \\bar{x} = a + b\\bar{y}",
          "explanation": "Rearranging $y = \\frac{x-a}{b}$ gives $x = a + by$. A mean transforms in exactly the same way as the individual values, so the mean of $x$ is found by putting $\\bar{y}$ through this same reverse rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the numbers.",
          "workingLatex": "\\bar{x} = 380 + 20 \\times 0.5",
          "explanation": "We undo the code: multiply the mean coded value by $20$ (to stretch it back out) and add back the $380$ we originally subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the mean price.",
          "workingLatex": "\\bar{x} = 380 + 10 = 390",
          "explanation": "This recovers the mean of the original prices without ever having to add the large numbers directly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{y} = 0.5$, so the mean price is $\\bar{x} = 390$ (i.e. £390)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "coding",
      "mean",
      "frequency-table",
      "decoding"
    ],
    "questionText": "The lengths, in cm, of $25$ leaves are recorded. The distinct lengths are $x = 150, 160, 170, 180, 190$ with corresponding frequencies $f = 3, 5, 8, 6, 3$. The lengths are coded using $y = \\frac{x - 170}{10}$. Use the coding to find the mean length $\\bar{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the plan.",
          "workingLatex": "y = \\frac{x - 170}{10}",
          "explanation": "Instead of working with lengths in the hundreds, we code them into small numbers, find the mean of those, and decode. Because every length is coded the same way, the mean transforms predictably.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the constants.",
          "workingLatex": "a = 170, \\quad b = 10",
          "explanation": "Matching $y = \\frac{x - a}{b}$ gives $a = 170$ and $b = 10$. Choosing $a$ near the middle of the data keeps the codes small and symmetric.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Code each distinct length.",
          "workingLatex": "y: \\; -2, -1, 0, 1, 2",
          "explanation": "Subtracting $170$ and dividing by $10$ maps $150 \\to -2$, $160 \\to -1$, $170 \\to 0$, $180 \\to 1$, $190 \\to 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply each code by its frequency.",
          "workingLatex": "fy: \\; -6, -5, 0, 6, 6",
          "explanation": "Each code is weighted by how many leaves have that length. For example $8$ leaves have code $0$, contributing nothing, while $3$ leaves have code $2$, contributing $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the weighted codes.",
          "workingLatex": "\\sum fy = -6 - 5 + 0 + 6 + 6 = 1",
          "explanation": "Summing the $fy$ column gives the total of all $25$ coded values, which is just $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the total frequency.",
          "workingLatex": "\\sum f = 3 + 5 + 8 + 6 + 3 = 25",
          "explanation": "This is the number of data values, $n = 25$, which we divide by to get a mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the mean of the coded data.",
          "workingLatex": "\\bar{y} = \\frac{\\sum fy}{\\sum f} = \\frac{1}{25} = 0.04",
          "explanation": "For grouped data the mean is the total of $fy$ divided by the total frequency. The result is very close to $0$, showing the data is nearly centred on $170$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the decoding rule.",
          "workingLatex": "\\bar{x} = a + b\\bar{y}",
          "explanation": "The mean of $x$ is recovered by reversing the code: multiply $\\bar{y}$ by $b$ and add $a$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute and compute.",
          "workingLatex": "\\bar{x} = 170 + 10 \\times 0.04 = 170.4",
          "explanation": "Decoding gives a mean length of $170.4$ cm, slightly above $170$ because the small positive total told us the data leans a touch higher than the centre.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer.",
          "workingLatex": "\\bar{x} = 170.4 \\text{ cm}",
          "explanation": "This matches the direct grouped-mean calculation but was reached with far simpler arithmetic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = 170.4$ cm."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "combined-mean",
      "weighted-mean",
      "combining-data"
    ],
    "questionText": "Class A has $15$ students with a mean test score of $62$. Class B has $25$ students with a mean test score of $70$. Find the mean score of all $40$ students combined.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "See why we cannot just average the two means.",
          "workingLatex": "\\frac{62 + 70}{2} = 66 \\;\\; (\\text{incorrect})",
          "explanation": "Simply averaging $62$ and $70$ would treat both classes as equally sized. But Class B has more students, so its mean should carry more weight. We must instead combine the actual score totals.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the combined-mean formula.",
          "workingLatex": "\\bar{x} = \\frac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2}",
          "explanation": "The overall mean is the total of all scores divided by the total number of students. Since a mean is total $\\div$ count, we can rebuild each group's total as $n \\times \\bar{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the total score for Class A.",
          "workingLatex": "n_1\\bar{x}_1 = 15 \\times 62 = 930",
          "explanation": "If $15$ students average $62$, their scores must add up to $930$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the total score for Class B.",
          "workingLatex": "n_2\\bar{x}_2 = 25 \\times 70 = 1750",
          "explanation": "Likewise, $25$ students averaging $70$ have a combined score total of $1750$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the two totals.",
          "workingLatex": "930 + 1750 = 2680",
          "explanation": "Together, all the students scored $2680$ marks in total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the total number of students.",
          "workingLatex": "n_1 + n_2 = 15 + 25 = 40",
          "explanation": "This is how many values the combined total is shared between.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide to get the combined mean.",
          "workingLatex": "\\bar{x} = \\frac{2680}{40}",
          "explanation": "The overall mean is the grand total of scores divided by the grand total of students.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the result.",
          "workingLatex": "\\bar{x} = 67",
          "explanation": "The mean score across both classes is $67$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the result makes sense.",
          "workingLatex": "66 < 67 < 70",
          "explanation": "The combined mean $67$ is higher than the naive average of $66$. This is exactly what we expect: the larger Class B, with its higher mean, pulls the overall average towards its value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = 67$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "coding",
      "standard-deviation",
      "mean",
      "decoding"
    ],
    "questionText": "A variable $x$ is coded using $y = \\frac{x - 200}{5}$. For the coded data it is found that $\\bar{y} = 4.6$ and the standard deviation is $\\sigma_y = 3.2$. Find the mean and standard deviation of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the relationship between x and y.",
          "workingLatex": "x = a + by, \\quad a = 200, \\; b = 5",
          "explanation": "Rearranging the code $y = \\frac{x-200}{5}$ gives $x = 200 + 5y$. So $a = 200$ and $b = 5$ are the numbers used to reverse the coding.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the decoding rule for the mean.",
          "workingLatex": "\\bar{x} = a + b\\bar{y}",
          "explanation": "A mean follows the same linear rule as the data itself, so we decode $\\bar{y}$ in exactly the same way we would decode a single value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the mean of x.",
          "workingLatex": "\\bar{x} = 200 + 5 \\times 4.6 = 223",
          "explanation": "Multiplying the mean code by $5$ and adding $200$ recovers the mean of the original data: $\\bar{x} = 223$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Think about how spread behaves under coding.",
          "workingLatex": "\\text{subtracting } 200 \\;\\Rightarrow\\; \\text{spread unchanged}",
          "explanation": "Subtracting $200$ slides every value the same distance along the number line, so the gaps between them are identical and the spread is untouched. Only the division by $5$ affected the spread, squeezing the values five times closer together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the standard-deviation rule.",
          "workingLatex": "\\sigma_x = |b|\\,\\sigma_y",
          "explanation": "Because only the multiplier $b$ changes the spread, the standard deviation of $x$ is the standard deviation of $y$ multiplied by the size of $b$. We use $|b|$ so the result is never negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the multiplier.",
          "workingLatex": "|b| = |5| = 5",
          "explanation": "The values were divided by $5$ when coded, so to undo that we multiply the spread back up by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the standard deviation of x.",
          "workingLatex": "\\sigma_x = 5 \\times 3.2 = 16",
          "explanation": "The original data is $5$ times more spread out than the coded data, giving $\\sigma_x = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note how the variance scales.",
          "workingLatex": "\\sigma_x^2 = b^2\\sigma_y^2 = 25 \\times 3.2^2 = 256",
          "explanation": "Variance scales by the square of the multiplier, $b^2 = 25$, so $\\sigma_x^2 = 256$. This is consistent with $16^2 = 256$, a useful check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both results.",
          "workingLatex": "\\bar{x} = 223, \\quad \\sigma_x = 16",
          "explanation": "The shift $a$ moved the mean but left the spread alone, while the scale $b$ affected both.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = 223$ and $\\sigma_x = 16$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "coding",
      "standard-deviation",
      "summary-statistics",
      "variance"
    ],
    "questionText": "A variable $x$ is coded using $y = \\frac{x - 80}{5}$. For $10$ values of $x$ it is found that $\\sum y = 50$ and $\\sum y^2 = 340$. (a) Find the mean of $x$. (b) Find the standard deviation of $x$. (c) The number $7$ is then added to every original value of $x$; state the new standard deviation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coding constants and the sample size.",
          "workingLatex": "a = 80, \\quad b = 5, \\quad n = 10",
          "explanation": "From $y = \\frac{x - 80}{5}$ we read off $a = 80$ and $b = 5$, and we are told there are $n = 10$ values. These let us decode both the mean and the spread.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the mean of the coded data.",
          "workingLatex": "\\bar{y} = \\frac{\\sum y}{n} = \\frac{50}{10} = 5",
          "explanation": "The mean of the coded values is their total divided by how many there are.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decode to find the mean of x.",
          "workingLatex": "\\bar{x} = a + b\\bar{y} = 80 + 5 \\times 5 = 105",
          "explanation": "Reversing the code gives the mean of the original data: multiply by $5$ and add back $80$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the variance of the coded data.",
          "workingLatex": "\\sigma_y^2 = \\frac{\\sum y^2}{n} - \\bar{y}^2",
          "explanation": "To get a standard deviation we first need a variance. The population formula subtracts the square of the mean from the mean of the squares.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the mean of the squares.",
          "workingLatex": "\\frac{\\sum y^2}{n} = \\frac{340}{10} = 34",
          "explanation": "This is the average of the squared coded values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the mean.",
          "workingLatex": "\\bar{y}^2 = 5^2 = 25",
          "explanation": "We need the square of the mean to subtract in the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the variance of y.",
          "workingLatex": "\\sigma_y^2 = 34 - 25 = 9",
          "explanation": "The difference between the mean of the squares and the square of the mean gives the variance of the coded data.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root for the s.d. of y.",
          "workingLatex": "\\sigma_y = \\sqrt{9} = 3",
          "explanation": "The standard deviation is the positive square root of the variance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Understand how to decode the spread.",
          "workingLatex": "\\sigma_x = |b|\\,\\sigma_y",
          "explanation": "Subtracting $80$ when coding did not change the spread, but dividing by $5$ shrank it fivefold. To recover the true spread we multiply back by $|b| = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the standard deviation of x.",
          "workingLatex": "\\sigma_x = 5 \\times 3 = 15",
          "explanation": "The original data is five times more spread out than the coded data, so $\\sigma_x = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check via the variance scaling.",
          "workingLatex": "\\sigma_x^2 = b^2\\sigma_y^2 = 25 \\times 9 = 225",
          "explanation": "Variance scales by $b^2 = 25$, giving $225$, and $\\sqrt{225} = 15$ confirms our standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret part (c): adding a constant.",
          "workingLatex": "x \\to x + 7",
          "explanation": "Adding $7$ to every value slides the whole data set up by the same amount. The distances between the values do not change, so the spread is completely unaffected.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the new standard deviation.",
          "workingLatex": "\\sigma_{x+7} = \\sigma_x = 15",
          "explanation": "Because a shift never changes spread, the standard deviation stays at $15$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the answers.",
          "workingLatex": "\\bar{x} = 105, \\;\\; \\sigma_x = 15, \\;\\; \\sigma_{x+7} = 15",
          "explanation": "The mean is decoded with both constants, while the standard deviation only depends on the multiplier and is immune to any shift.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\bar{x} = 105$. (b) $\\sigma_x = 15$. (c) The standard deviation is still $15$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "coding",
      "mean",
      "standard-deviation",
      "summary-statistics"
    ],
    "questionText": "The monthly rent, £$x$, of $40$ flats is coded using $y = \\frac{x - 2000}{100}$. For the coded data, $\\sum y = 100$ and $\\sum y^2 = 500$. Find the mean and standard deviation of the monthly rent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the coding constants and sample size.",
          "workingLatex": "a = 2000, \\quad b = 100, \\quad n = 40",
          "explanation": "From $y = \\frac{x - 2000}{100}$ we have $a = 2000$ and $b = 100$, with $n = 40$ flats. Coding by a subtraction of $2000$ and division by $100$ turns rents in the thousands into small, manageable numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the mean of the coded data.",
          "workingLatex": "\\bar{y} = \\frac{\\sum y}{n} = \\frac{100}{40} = 2.5",
          "explanation": "The mean of the codes is their total divided by the number of flats.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decode to find the mean rent.",
          "workingLatex": "\\bar{x} = a + b\\bar{y} = 2000 + 100 \\times 2.5 = 2250",
          "explanation": "Reversing the code recovers the mean of the actual rents: multiply by $100$ and add back $2000$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the variance of the coded data.",
          "workingLatex": "\\sigma_y^2 = \\frac{\\sum y^2}{n} - \\bar{y}^2",
          "explanation": "We use the population variance formula on the coded values, then convert to the original scale afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the mean of the squares.",
          "workingLatex": "\\frac{\\sum y^2}{n} = \\frac{500}{40} = 12.5",
          "explanation": "This is the average of the squared coded values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the mean.",
          "workingLatex": "\\bar{y}^2 = 2.5^2 = 6.25",
          "explanation": "The square of the coded mean is subtracted in the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the variance of y.",
          "workingLatex": "\\sigma_y^2 = 12.5 - 6.25 = 6.25",
          "explanation": "Subtracting gives the variance of the coded data.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root for the s.d. of y.",
          "workingLatex": "\\sigma_y = \\sqrt{6.25} = 2.5",
          "explanation": "The standard deviation of the coded data is the positive square root of its variance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decode the standard deviation.",
          "workingLatex": "\\sigma_x = |b|\\,\\sigma_y = 100 \\times 2.5",
          "explanation": "Subtracting $2000$ did not change the spread; only the division by $100$ did. Multiplying by $|b| = 100$ restores the spread to the original scale.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the standard deviation of the rent.",
          "workingLatex": "\\sigma_x = 250",
          "explanation": "The rents are $100$ times more spread out than the coded values, giving a standard deviation of $250$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret in context.",
          "workingLatex": "\\bar{x} = 2250, \\quad \\sigma_x = 250",
          "explanation": "In money terms, the average monthly rent is £2250 and the rents typically vary by about £250 around this mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note why the shift did not matter for spread.",
          "workingLatex": "\\sigma_x^2 = b^2\\sigma_y^2 = 100^2 \\times 6.25 = 62500",
          "explanation": "The variance scales by $b^2$, confirming $\\sigma_x = \\sqrt{62500} = 250$. Subtracting $2000$ shifted every rent equally and left the spread untouched.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final results.",
          "workingLatex": "\\bar{x} = £2250, \\quad \\sigma_x = £250",
          "explanation": "Both summary statistics have now been decoded from the small coded numbers back to pounds.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mean monthly rent is $\\bar{x} = £2250$ and the standard deviation is $\\sigma_x = £250$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "coding",
      "mean",
      "standard-deviation",
      "raw-data"
    ],
    "questionText": "The masses, in grams, of $8$ samples are $1020, 1040, 1010, 1050, 1030, 1000, 1060, 1070$. Using the coding $y = \\frac{x - 1030}{10}$, find the mean and standard deviation of the masses, giving the standard deviation to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "See why coding helps here.",
          "workingLatex": "y = \\frac{x - 1030}{10}",
          "explanation": "The masses are large and clustered close together near $1030$. Coding subtracts a central value and divides out the common step, turning them into small integers that are easy to square and add.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coding constants.",
          "workingLatex": "a = 1030, \\quad b = 10, \\quad n = 8",
          "explanation": "We read off $a = 1030$ and $b = 10$; there are $n = 8$ samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Code every value.",
          "workingLatex": "y: \\; -1, 1, -2, 2, 0, -3, 3, 4",
          "explanation": "Subtracting $1030$ and dividing by $10$ maps each mass to a small integer, e.g. $\\frac{1000 - 1030}{10} = -3$ and $\\frac{1070 - 1030}{10} = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum the coded values.",
          "workingLatex": "\\sum y = -1 + 1 - 2 + 2 + 0 - 3 + 3 + 4 = 4",
          "explanation": "Most codes cancel in pairs, leaving a total of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the mean of the codes.",
          "workingLatex": "\\bar{y} = \\frac{\\sum y}{n} = \\frac{4}{8} = 0.5",
          "explanation": "The average coded value is $0.5$, telling us the data sits just above the chosen centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decode to find the mean mass.",
          "workingLatex": "\\bar{x} = a + b\\bar{y} = 1030 + 10 \\times 0.5 = 1035",
          "explanation": "Reversing the code gives the true mean mass of $1035$ g.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sum the squared codes.",
          "workingLatex": "\\sum y^2 = 1 + 1 + 4 + 4 + 0 + 9 + 9 + 16 = 44",
          "explanation": "Squaring the small integers and adding them is quick and error-free, unlike squaring four-digit masses.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the variance of the codes.",
          "workingLatex": "\\sigma_y^2 = \\frac{\\sum y^2}{n} - \\bar{y}^2",
          "explanation": "We apply the population variance formula to the coded data before converting back.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the mean of the squares.",
          "workingLatex": "\\frac{\\sum y^2}{n} = \\frac{44}{8} = 5.5",
          "explanation": "This is the average of the squared codes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract the square of the mean.",
          "workingLatex": "\\sigma_y^2 = 5.5 - 0.5^2 = 5.5 - 0.25 = 5.25",
          "explanation": "The variance of the coded data is $5.25$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the s.d. of the codes.",
          "workingLatex": "\\sigma_y = \\sqrt{5.25} = 2.2913\\ldots",
          "explanation": "Taking the square root gives the coded standard deviation, which is not a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Decode the standard deviation.",
          "workingLatex": "\\sigma_x = |b|\\,\\sigma_y = 10 \\times 2.2913\\ldots",
          "explanation": "The masses are $10$ times more spread out than the codes, since only the division by $10$ affected the spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate and round to 3 significant figures.",
          "workingLatex": "\\sigma_x = 22.9128\\ldots \\approx 22.9",
          "explanation": "Rounding the decoded spread to $3$ significant figures gives $\\sigma_x \\approx 22.9$ g.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check via variance scaling.",
          "workingLatex": "\\sigma_x^2 = b^2\\sigma_y^2 = 100 \\times 5.25 = 525, \\;\\; \\sqrt{525} = 22.9\\ldots",
          "explanation": "Working directly with the scaled variance $525$ gives the same result, a reassuring check.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answers.",
          "workingLatex": "\\bar{x} = 1035, \\quad \\sigma_x \\approx 22.9",
          "explanation": "The mean is exact, while the standard deviation is quoted to $3$ significant figures as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\bar{x} = 1035$ g and $\\sigma_x \\approx 22.9$ g (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "combined-standard-deviation",
      "pooled-variance",
      "combining-data"
    ],
    "questionText": "In a factory, components are produced by two machines. Machine A makes $10$ components with mean mass $20$ g and standard deviation $3$ g. Machine B makes $15$ components with mean mass $25$ g and standard deviation $4$ g. Find the mean and standard deviation of the masses of all $25$ components, giving the standard deviation to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan how to combine the two groups.",
          "workingLatex": "\\sigma_{\\text{comb}} \\neq \\frac{\\sigma_A + \\sigma_B}{2}",
          "explanation": "Standard deviations cannot simply be averaged. To pool them correctly we must rebuild $\\sum x$ and $\\sum x^2$ for each machine, add these totals, and only then compute the combined variance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the sum of masses for Machine A.",
          "workingLatex": "\\sum x_A = n_A\\bar{x}_A = 10 \\times 20 = 200",
          "explanation": "The total mass is the number of components times their mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the variance formula to get the sum of squares.",
          "workingLatex": "\\sigma^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2 \\implies \\sum x^2 = n(\\sigma^2 + \\bar{x}^2)",
          "explanation": "We know each machine's variance and mean, so we invert the population variance formula to recover the sum of squares, the quantity we actually need to pool.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the sum of squares for Machine A.",
          "workingLatex": "\\sum x_A^2 = 10(3^2 + 20^2) = 10(9 + 400) = 4090",
          "explanation": "Substituting $n = 10$, $\\sigma = 3$, $\\bar{x} = 20$ gives Machine A's sum of squared masses.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the sum of masses for Machine B.",
          "workingLatex": "\\sum x_B = 15 \\times 25 = 375",
          "explanation": "Again the total is the count times the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the sum of squares for Machine B.",
          "workingLatex": "\\sum x_B^2 = 15(4^2 + 25^2) = 15(16 + 625) = 9615",
          "explanation": "Substituting $n = 15$, $\\sigma = 4$, $\\bar{x} = 25$ gives Machine B's sum of squared masses.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the combined sample size.",
          "workingLatex": "n = 10 + 15 = 25",
          "explanation": "There are $25$ components in total.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the mass totals.",
          "workingLatex": "\\sum x = 200 + 375 = 575",
          "explanation": "The combined sum of all masses is $575$ g.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the combined mean.",
          "workingLatex": "\\bar{x} = \\frac{575}{25} = 23",
          "explanation": "Dividing the grand total by the total count gives an overall mean of $23$ g, between the two group means and closer to Machine B's since it has more components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the sums of squares.",
          "workingLatex": "\\sum x^2 = 4090 + 9615 = 13705",
          "explanation": "The combined sum of squared masses is what we feed into the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the combined variance.",
          "workingLatex": "\\sigma^2 = \\frac{13705}{25} - 23^2 = 548.2 - 529 = 19.2",
          "explanation": "Using the pooled totals with the combined mean gives the variance of all $25$ masses.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the square root and round.",
          "workingLatex": "\\sigma = \\sqrt{19.2} = 4.3817\\ldots \\approx 4.38",
          "explanation": "The combined standard deviation is about $4.38$ g to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the variance is sensible.",
          "workingLatex": "19.2 > 0",
          "explanation": "The variance is positive, as it must be, so the calculation is consistent. It is a little larger than either machine's individual variance because the difference between the two group means adds extra spread.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results.",
          "workingLatex": "\\bar{x} = 23, \\quad \\sigma \\approx 4.38",
          "explanation": "Both the combined mean and the pooled standard deviation are now found.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combined mean $= 23$ g; combined standard deviation $\\approx 4.38$ g (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "combined-standard-deviation",
      "pooled-variance",
      "combining-data"
    ],
    "questionText": "Two schools sat the same exam. School A had $8$ students with mean mark $50$ and standard deviation $5$. School B had $12$ students with mean mark $60$ and standard deviation $8$. Find the mean and standard deviation of the marks of all $20$ students, giving the standard deviation to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on the method.",
          "workingLatex": "\\text{pool } \\sum x \\text{ and } \\sum x^2",
          "explanation": "We cannot average the two standard deviations. Instead we reconstruct each school's $\\sum x$ and $\\sum x^2$, combine them, and compute the pooled variance from those totals.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the sum of marks for School A.",
          "workingLatex": "\\sum x_A = 8 \\times 50 = 400",
          "explanation": "Total marks equal the number of students times the mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the sum-of-squares formula.",
          "workingLatex": "\\sum x^2 = n(\\sigma^2 + \\bar{x}^2)",
          "explanation": "Rearranging $\\sigma^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2$ lets us recover each school's sum of squared marks from its mean and standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the sum of squares for School A.",
          "workingLatex": "\\sum x_A^2 = 8(5^2 + 50^2) = 8(25 + 2500) = 20200",
          "explanation": "Substituting School A's figures gives its sum of squared marks.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the sum of marks for School B.",
          "workingLatex": "\\sum x_B = 12 \\times 60 = 720",
          "explanation": "Again, count times mean gives the total marks for School B.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the sum of squares for School B.",
          "workingLatex": "\\sum x_B^2 = 12(8^2 + 60^2) = 12(64 + 3600) = 43968",
          "explanation": "Substituting School B's figures gives its sum of squared marks.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the combined number of students.",
          "workingLatex": "n = 8 + 12 = 20",
          "explanation": "There are $20$ students altogether.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the mark totals.",
          "workingLatex": "\\sum x = 400 + 720 = 1120",
          "explanation": "The combined total of all marks is $1120$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the combined mean.",
          "workingLatex": "\\bar{x} = \\frac{1120}{20} = 56",
          "explanation": "The overall mean mark is $56$, pulled towards School B because it has more students.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the sums of squares.",
          "workingLatex": "\\sum x^2 = 20200 + 43968 = 64168",
          "explanation": "This combined sum of squares feeds directly into the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the combined variance.",
          "workingLatex": "\\sigma^2 = \\frac{64168}{20} - 56^2 = 3208.4 - 3136 = 72.4",
          "explanation": "Using the pooled totals with the combined mean gives the variance of all $20$ marks.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the square root and round.",
          "workingLatex": "\\sigma = \\sqrt{72.4} = 8.5088\\ldots \\approx 8.51",
          "explanation": "The combined standard deviation is about $8.51$ marks to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the variance is valid.",
          "workingLatex": "72.4 > 0",
          "explanation": "The variance is positive, so the result is consistent. The gap between the two school means adds spread, which is why the combined value exceeds each school's own standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results.",
          "workingLatex": "\\bar{x} = 56, \\quad \\sigma \\approx 8.51",
          "explanation": "The combined mean and pooled standard deviation are both determined.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combined mean $= 56$; combined standard deviation $\\approx 8.51$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "transformations",
      "mean",
      "standard-deviation",
      "variance",
      "coding"
    ],
    "questionText": "A large data set of values $x$ has mean $45$ and standard deviation $6$. (a) Each value is increased by $8$; state the new mean and standard deviation. (b) Each value is instead multiplied by $3$; state the new mean and standard deviation. (c) The transformation $w = 2x - 10$ is applied to every value; find the mean, standard deviation and variance of $w$. (d) Explain why adding a constant leaves the standard deviation unchanged while multiplying by a constant scales it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two guiding principles.",
          "workingLatex": "x + c: \\text{shift}, \\qquad kx: \\text{scale}",
          "explanation": "Adding a constant slides every value the same distance, so the centre moves but the spacing does not. Multiplying by a constant stretches (or shrinks) every gap by that factor, so both the centre and the spread change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): new mean after adding 8.",
          "workingLatex": "\\text{new mean} = 45 + 8 = 53",
          "explanation": "Every value goes up by $8$, so the mean, which is their balancing point, also goes up by exactly $8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): new standard deviation.",
          "workingLatex": "\\text{new s.d.} = 6",
          "explanation": "Shifting all the data by $8$ does not alter the distances between values or their distances from the mean, so the standard deviation is unchanged at $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): new mean after multiplying by 3.",
          "workingLatex": "\\text{new mean} = 3 \\times 45 = 135",
          "explanation": "Scaling every value by $3$ scales their average by $3$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Part (b): new standard deviation.",
          "workingLatex": "\\text{new s.d.} = 3 \\times 6 = 18",
          "explanation": "Every gap between values becomes three times as wide, so the spread, and hence the standard deviation, is multiplied by $3$ to give $18$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): recognise the transformation as a coding.",
          "workingLatex": "w = 2x - 10",
          "explanation": "This both multiplies by $2$ and subtracts $10$. It is exactly a coding of the form $w = a + bx$ with multiplier $b = 2$ and shift $-10$, so we can apply the coding rules for mean and spread.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (c): mean of w.",
          "workingLatex": "\\bar{w} = 2\\bar{x} - 10 = 2 \\times 45 - 10 = 80",
          "explanation": "The mean transforms the same way as the data: double it, then subtract $10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (c): standard deviation of w.",
          "workingLatex": "\\sigma_w = |2|\\,\\sigma_x = 2 \\times 6 = 12",
          "explanation": "The $-10$ is only a shift and does nothing to the spread. Only the multiplier $2$ matters, so the standard deviation doubles to $12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Part (c): variance of w.",
          "workingLatex": "\\sigma_w^2 = 2^2 \\times 6^2 = 4 \\times 36 = 144",
          "explanation": "Variance scales by the square of the multiplier, $b^2 = 4$. This equals $12^2 = 144$, consistent with the standard deviation we found.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (d): why adding a constant does not change spread.",
          "workingLatex": "(x_i + c) - (\\bar{x} + c) = x_i - \\bar{x}",
          "explanation": "Each value's distance from the mean is unchanged when a constant is added, because both the value and the mean move by the same amount. Since standard deviation is built entirely from these distances, it stays the same.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Part (d): why multiplying changes spread.",
          "workingLatex": "(kx_i) - (k\\bar{x}) = k(x_i - \\bar{x})",
          "explanation": "Multiplying by $k$ multiplies every distance from the mean by $k$, so the standard deviation is scaled by $|k|$ and the variance by $k^2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Connect to the coding formulae.",
          "workingLatex": "\\bar{x} = a + b\\bar{y}, \\qquad \\sigma_x = |b|\\,\\sigma_y",
          "explanation": "These two general rules capture everything above: the shift $a$ affects only the mean, while the multiplier $b$ affects both the mean and the spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise all answers.",
          "workingLatex": "(a)\\,53,6 \\quad (b)\\,135,18 \\quad (c)\\,80,12,144",
          "explanation": "The pattern is consistent throughout: shifts move the mean only, while multipliers scale both the mean and the standard deviation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) mean $53$, s.d. $6$. (b) mean $135$, s.d. $18$. (c) $\\bar{w} = 80$, $\\sigma_w = 12$, variance $= 144$. (d) Adding a constant shifts every value equally so each distance from the mean is unchanged and the standard deviation stays the same; multiplying by a constant stretches every distance from the mean by that factor, scaling the standard deviation by its magnitude (and the variance by its square)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "iqr",
      "quartiles",
      "spread"
    ],
    "questionText": "The times taken (in seconds) by a group of runners to complete a lap have lower quartile $Q_1 = 52$ and upper quartile $Q_3 = 76$. An outlier is defined as any value more than $1.5 \\times \\text{IQR}$ above $Q_3$ or below $Q_1$. Two runners recorded times of $20$ seconds and $118$ seconds. Determine whether either of these times is an outlier.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the outlier rule being used.",
          "workingLatex": "\\text{Outlier if } x < Q_1 - 1.5\\times\\text{IQR} \\ \\text{ or } \\ x > Q_3 + 1.5\\times\\text{IQR}",
          "explanation": "An outlier is an unusually extreme value. The $1.5 \\times \\text{IQR}$ rule places a fence a fixed distance beyond each quartile; anything past those fences is judged too far from the middle of the data to be typical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the quartiles given in the question.",
          "workingLatex": "Q_1 = 52, \\qquad Q_3 = 76",
          "explanation": "The whole rule is built from $Q_1$ and $Q_3$, so we note them first before doing any arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the interquartile range.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 = 76 - 52 = 24",
          "explanation": "The IQR measures the width of the middle half of the data. Here it is $24$ seconds, and this width is what the fences are scaled from.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Scale the IQR by 1.5.",
          "workingLatex": "1.5 \\times \\text{IQR} = 1.5 \\times 24 = 36",
          "explanation": "The factor $1.5$ is the agreed cut-off distance in this rule. It tells us how far beyond each quartile a value may lie before it is flagged, here $36$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the lower boundary.",
          "workingLatex": "Q_1 - 1.5\\times\\text{IQR} = 52 - 36 = 16",
          "explanation": "The lower fence sits $36$ below $Q_1$. Any time faster than $16$ seconds would be surprisingly small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the upper boundary.",
          "workingLatex": "Q_3 + 1.5\\times\\text{IQR} = 76 + 36 = 112",
          "explanation": "The upper fence sits $36$ above $Q_3$. Any time slower than $112$ seconds would be surprisingly large.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of ordinary values.",
          "workingLatex": "16 \\le x \\le 112",
          "explanation": "Combining the two fences, a value counts as ordinary if it lies between $16$ and $112$ seconds inclusive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the time of 20 seconds.",
          "workingLatex": "20 > 16 \\ \\Rightarrow \\ \\text{not an outlier}",
          "explanation": "Although $20$ seconds is fast, it is still above the lower fence of $16$, so it lies inside the normal range and is not an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the time of 118 seconds.",
          "workingLatex": "118 > 112 \\ \\Rightarrow \\ \\text{outlier}",
          "explanation": "The time $118$ seconds is beyond the upper fence of $112$, so it is far enough from the bulk of the data to be flagged as an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "\\text{20 s: not an outlier}, \\qquad \\text{118 s: outlier}",
          "explanation": "We report each verdict against the fences: $20$ seconds is a normal (fast) time, while $118$ seconds is an outlier.",
          "diagram": null
        }
      ],
      "finalAnswer": "$20$ s is not an outlier (it is above the lower boundary of $16$ s); $118$ s is an outlier because it exceeds the upper boundary $Q_3 + 1.5\\times\\text{IQR} = 112$ s."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "outliers",
      "standard-deviation",
      "mean",
      "population-sd"
    ],
    "questionText": "A sample of $n = 20$ readings has $\\Sigma x = 1000$ and $\\Sigma x^2 = 51280$. An outlier is defined as any value lying more than $2$ standard deviations from the mean, that is, outside $\\bar{x} \\pm 2\\sigma$. Three of the readings are $30$, $62$ and $68$. Using the population standard deviation, determine which of these three readings are outliers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate the mean.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma x}{n} = \\frac{1000}{20} = 50",
          "explanation": "The mean is the balance point of the data. We need it because the outlier rule measures distance from the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the population variance formula.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma x^2}{n} - \\bar{x}^2",
          "explanation": "This form of the variance uses the two totals we are given directly, avoiding the need to know every individual value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the mean of the squares.",
          "workingLatex": "\\frac{\\Sigma x^2}{n} = \\frac{51280}{20} = 2564",
          "explanation": "This is the average of the squared values. Subtracting the square of the mean from it will leave only the spread.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the mean.",
          "workingLatex": "\\bar{x}^2 = 50^2 = 2500",
          "explanation": "We square the mean so it can be removed from the mean of the squares, isolating how far values sit from the centre.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the variance.",
          "workingLatex": "\\sigma^2 = 2564 - 2500 = 64",
          "explanation": "The variance is $64$. It is positive, which is a useful check that the two totals are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root to find the standard deviation.",
          "workingLatex": "\\sigma = \\sqrt{64} = 8",
          "explanation": "The standard deviation returns the spread to the original units, giving a typical distance of $8$ from the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the outlier rule.",
          "workingLatex": "\\text{Outlier if } x < \\bar{x} - 2\\sigma \\ \\text{ or } \\ x > \\bar{x} + 2\\sigma",
          "explanation": "For this rule a value must be more than two standard deviations from the mean to be unusual, so we build the boundaries $\\bar{x} \\pm 2\\sigma$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute two standard deviations.",
          "workingLatex": "2\\sigma = 2 \\times 8 = 16",
          "explanation": "Two standard deviations is the reach of each boundary from the mean, here $16$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the lower boundary.",
          "workingLatex": "\\bar{x} - 2\\sigma = 50 - 16 = 34",
          "explanation": "Any reading below $34$ is more than two standard deviations below the mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the upper boundary.",
          "workingLatex": "\\bar{x} + 2\\sigma = 50 + 16 = 66",
          "explanation": "Any reading above $66$ is more than two standard deviations above the mean.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the range of ordinary values.",
          "workingLatex": "34 \\le x \\le 66",
          "explanation": "A reading is treated as ordinary if it lies within this interval around the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test the reading 30.",
          "workingLatex": "30 < 34 \\ \\Rightarrow \\ \\text{outlier}",
          "explanation": "The value $30$ falls below the lower boundary of $34$, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Test the reading 62.",
          "workingLatex": "34 \\le 62 \\le 66 \\ \\Rightarrow \\ \\text{not an outlier}",
          "explanation": "The value $62$ lies comfortably inside the interval, so it is a normal reading.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Test the reading 68.",
          "workingLatex": "68 > 66 \\ \\Rightarrow \\ \\text{outlier}",
          "explanation": "The value $68$ exceeds the upper boundary of $66$, so it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion.",
          "workingLatex": "\\text{outliers: } 30 \\text{ and } 68",
          "explanation": "Both $30$ and $68$ lie more than two standard deviations from the mean of $50$, whereas $62$ does not.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mean is $50$ and the standard deviation is $8$, so ordinary values lie in $[34, 66]$. Therefore $30$ and $68$ are outliers, while $62$ is not."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "comparing-distributions",
      "median",
      "iqr",
      "outliers"
    ],
    "questionText": "Two delivery companies record the number of days taken to deliver parcels. The data for Company $P$ has median $3$ days and interquartile range $2$ days. The data for Company $Q$ has median $4$ days and interquartile range $5$ days, and Company $Q$'s data contains several outliers. (a) Explain why the median and interquartile range are more suitable than the mean and standard deviation for comparing these two companies. (b) Compare the delivery times of the two companies.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the key feature of the data.",
          "workingLatex": "\\text{Company } Q \\text{ has several outliers}",
          "explanation": "The choice of summary measure should suit the data, so we start by noticing that Company $Q$'s data contains outliers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain how outliers affect the mean and standard deviation.",
          "workingLatex": "\\bar{x}, \\ \\sigma \\ \\text{use every value}",
          "explanation": "The mean and standard deviation are calculated from every value, so a few extreme readings can pull them a long way and distort the picture.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain how the median and IQR behave.",
          "workingLatex": "\\text{median, IQR: resistant to outliers}",
          "explanation": "The median depends only on the middle position and the IQR only on the quartiles, so extreme values barely move them. They are called resistant measures.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer part (a).",
          "workingLatex": "\\Rightarrow \\text{use median and IQR}",
          "explanation": "Because one data set has outliers, the resistant measures give a fairer, undistorted comparison, so the median and IQR are the better choice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall what the median tells us.",
          "workingLatex": "\\text{median} = \\text{typical (central) value}",
          "explanation": "The median represents a typical delivery time, so comparing medians compares the two companies' usual performance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the medians.",
          "workingLatex": "P: 3 \\text{ days}, \\qquad Q: 4 \\text{ days}",
          "explanation": "Company $P$'s median of $3$ days is lower than Company $Q$'s $4$ days.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the median comparison in context.",
          "workingLatex": "3 < 4 \\ \\Rightarrow \\ P \\text{ typically faster}",
          "explanation": "A lower median means parcels typically arrive sooner, so Company $P$ is usually faster than Company $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall what the IQR tells us.",
          "workingLatex": "\\text{IQR} = \\text{spread of middle } 50\\%",
          "explanation": "The IQR measures how spread out the central half of the times is, which reflects how consistent the deliveries are.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the interquartile ranges.",
          "workingLatex": "P: \\text{IQR} = 2, \\qquad Q: \\text{IQR} = 5",
          "explanation": "Company $P$'s IQR of $2$ days is much smaller than Company $Q$'s $5$ days.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the IQR comparison in context.",
          "workingLatex": "2 < 5 \\ \\Rightarrow \\ P \\text{ more consistent}",
          "explanation": "A smaller IQR means the delivery times vary less, so Company $P$ is more consistent and predictable than Company $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the overall conclusion.",
          "workingLatex": "\\Rightarrow \\ P \\text{ faster and more reliable}",
          "explanation": "Bringing both comparisons together, Company $P$ delivers both faster on average and more reliably.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Company $Q$ contains outliers, and the mean and standard deviation are strongly affected by outliers whereas the median and IQR are resistant to them, so the median and IQR give a fairer comparison. (b) Company $P$ has the lower median ($3$ days vs $4$ days), so its parcels typically arrive sooner, and it has the smaller IQR ($2$ days vs $5$ days), so its delivery times are more consistent. Overall Company $P$ offers faster and more reliable deliveries."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "adding-value",
      "mean",
      "standard-deviation",
      "sum-of-squares"
    ],
    "questionText": "A set of $15$ data values has $\\Sigma x = 300$ and $\\Sigma x^2 = 6400$. A new value of $28$ is added to the set. Find the new mean and the new standard deviation of the $16$ values, giving the standard deviation to $3$ significant figures. (Use the population standard deviation.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the strategy.",
          "workingLatex": "\\text{Update } n, \\ \\Sigma x, \\ \\Sigma x^2 \\text{ then recompute}",
          "explanation": "Rather than listing all the data, we work only with the running totals. Adding a value changes each total in a simple way, so this is the efficient route.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the original mean for context.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma x}{n} = \\frac{300}{15} = 20",
          "explanation": "Knowing the original mean is $20$ helps us anticipate the effect: the new value $28$ is above the mean, so it should nudge the mean upward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Update the number of values.",
          "workingLatex": "n' = 15 + 1 = 16",
          "explanation": "Adding one value increases the count by one, giving $16$ values in total.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Update the sum of the values.",
          "workingLatex": "\\Sigma x' = 300 + 28 = 328",
          "explanation": "The sum grows by exactly the new value, since a total is just everything added together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Update the sum of squares.",
          "workingLatex": "\\Sigma x'^2 = 6400 + 28^2 = 6400 + 784 = 7184",
          "explanation": "The sum of squares grows by the square of the new value, because each value contributes its own square to this total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the new mean.",
          "workingLatex": "\\bar{x}' = \\frac{\\Sigma x'}{n'} = \\frac{328}{16} = 20.5",
          "explanation": "Dividing the new sum by the new count gives the new mean of $20.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the direction of change.",
          "workingLatex": "20.5 > 20",
          "explanation": "As expected, adding a value ($28$) above the old mean has pulled the mean up slightly, which is a reassuring sanity check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write down the variance formula.",
          "workingLatex": "\\sigma'^2 = \\frac{\\Sigma x'^2}{n'} - (\\bar{x}')^2",
          "explanation": "We use the same variance formula, now with the updated totals and the updated mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the mean of the new squares.",
          "workingLatex": "\\frac{\\Sigma x'^2}{n'} = \\frac{7184}{16} = 449",
          "explanation": "This is the average squared value across all $16$ numbers.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Square the new mean.",
          "workingLatex": "(\\bar{x}')^2 = 20.5^2 = 420.25",
          "explanation": "We square the new mean so it can be subtracted from the average of the squares.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the new variance.",
          "workingLatex": "\\sigma'^2 = 449 - 420.25 = 28.75",
          "explanation": "The difference gives the new variance, $28.75$, which is positive as a valid variance must be.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the square root.",
          "workingLatex": "\\sigma' = \\sqrt{28.75}",
          "explanation": "The standard deviation is the square root of the variance, bringing the spread back to the original units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the square root.",
          "workingLatex": "\\sigma' = 5.36189\\ldots",
          "explanation": "Working the root out gives a non-terminating decimal, so we will need to round it.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma' \\approx 5.36 \\ (3\\text{ s.f.})",
          "explanation": "Since the answer is not exact, we round to $3$ significant figures as required and state that we have done so.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion.",
          "workingLatex": "\\bar{x}' = 20.5, \\qquad \\sigma' \\approx 5.36",
          "explanation": "The new mean is $20.5$ and the new standard deviation is about $5.36$.",
          "diagram": null
        }
      ],
      "finalAnswer": "New mean $= 20.5$; new standard deviation $= \\sqrt{28.75} \\approx 5.36$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "work-backwards",
      "sum-of-squares",
      "standard-deviation",
      "mean"
    ],
    "questionText": "A set of $30$ values has mean $45$ and population standard deviation $8$. (a) Find $\\Sigma x$. (b) Find $\\Sigma x^2$. (c) Hence find the sum of the squared deviations from the mean, $\\Sigma (x - \\bar{x})^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the given information.",
          "workingLatex": "n = 30, \\quad \\bar{x} = 45, \\quad \\sigma = 8",
          "explanation": "Listing the known quantities keeps the work-backwards process organised; each of the totals is recovered from these three numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of the mean.",
          "workingLatex": "\\bar{x} = \\frac{\\Sigma x}{n}",
          "explanation": "The mean is the total divided by the count, so this equation links $\\Sigma x$ to the numbers we know.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to make the sum the subject.",
          "workingLatex": "\\Sigma x = n\\bar{x}",
          "explanation": "Multiplying both sides by $n$ isolates the sum, so we can find it directly from the mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the sum.",
          "workingLatex": "\\Sigma x = 30 \\times 45 = 1350",
          "explanation": "This answers part (a): the total of all thirty values is $1350$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the variance formula.",
          "workingLatex": "\\sigma^2 = \\frac{\\Sigma x^2}{n} - \\bar{x}^2",
          "explanation": "This formula ties the sum of squares to the standard deviation and mean, which is exactly what we need to reverse.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for the sum of squares.",
          "workingLatex": "\\Sigma x^2 = n(\\sigma^2 + \\bar{x}^2)",
          "explanation": "Adding $\\bar{x}^2$ to both sides and multiplying by $n$ isolates $\\Sigma x^2$, letting us build it from the known values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the variance.",
          "workingLatex": "\\sigma^2 = 8^2 = 64",
          "explanation": "We square the standard deviation to get the variance, which appears in the formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square the mean.",
          "workingLatex": "\\bar{x}^2 = 45^2 = 2025",
          "explanation": "The mean squared is the other quantity added inside the brackets.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the two quantities.",
          "workingLatex": "\\sigma^2 + \\bar{x}^2 = 64 + 2025 = 2089",
          "explanation": "This bracket represents the average of the squared values, before multiplying back up by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the sum of squares.",
          "workingLatex": "\\Sigma x^2 = 30 \\times 2089 = 62670",
          "explanation": "This answers part (b): the sum of the squared values is $62670$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relate the sum of squared deviations to the variance.",
          "workingLatex": "\\Sigma (x - \\bar{x})^2 = n\\sigma^2",
          "explanation": "The variance is the mean of the squared deviations, so the total squared deviation is simply the variance multiplied by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the sum of squared deviations.",
          "workingLatex": "\\Sigma (x - \\bar{x})^2 = 30 \\times 64 = 1920",
          "explanation": "This answers part (c): the total squared distance of the values from their mean is $1920$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Cross-check using the alternative identity.",
          "workingLatex": "\\Sigma x^2 - n\\bar{x}^2 = 62670 - 30 \\times 2025 = 62670 - 60750 = 1920 \\ \\checkmark",
          "explanation": "Since $\\Sigma (x-\\bar{x})^2 = \\Sigma x^2 - n\\bar{x}^2$, getting $1920$ both ways confirms our totals are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answers.",
          "workingLatex": "\\Sigma x = 1350, \\quad \\Sigma x^2 = 62670, \\quad \\Sigma (x-\\bar{x})^2 = 1920",
          "explanation": "All three required quantities have been recovered from the mean, standard deviation and count.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\Sigma x = 1350$. (b) $\\Sigma x^2 = 62670$. (c) $\\Sigma (x-\\bar{x})^2 = 1920$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "correct-an-error",
      "mean",
      "standard-deviation",
      "sum-of-squares"
    ],
    "questionText": "The mean of $25$ data values was calculated to be $30$ and the population standard deviation to be $6$. It is then discovered that one value was copied as $42$ when it should have been $24$. Find the corrected mean and the corrected standard deviation, giving the standard deviation to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recover the original sum.",
          "workingLatex": "\\Sigma x = n\\bar{x} = 25 \\times 30 = 750",
          "explanation": "To fix an error we must return to the running totals. The original sum comes straight from the mean times the count.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the original sum of squares.",
          "workingLatex": "\\Sigma x^2 = n(\\sigma^2 + \\bar{x}^2) = 25(6^2 + 30^2)",
          "explanation": "Rearranging the variance formula lets us rebuild the sum of squares from the mean and standard deviation that were originally calculated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the original sum of squares.",
          "workingLatex": "\\Sigma x^2 = 25 \\times (36 + 900) = 25 \\times 936 = 23400",
          "explanation": "This gives the (incorrect) sum of squares that was used, which we will now correct.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Correct the sum of values.",
          "workingLatex": "\\Sigma x' = 750 - 42 + 24 = 732",
          "explanation": "We remove the wrong value $42$ and put in the correct value $24$. Only one number changes, so the rest of the total is untouched.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Correct the sum of squares.",
          "workingLatex": "\\Sigma x'^2 = 23400 - 42^2 + 24^2 = 23400 - 1764 + 576",
          "explanation": "In the same way we subtract the square of the wrong value and add the square of the correct value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the corrected sum of squares.",
          "workingLatex": "\\Sigma x'^2 = 22212",
          "explanation": "This is the corrected total of the squared values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note that the count is unchanged.",
          "workingLatex": "n = 25",
          "explanation": "We replaced one value with another rather than adding or removing one, so there are still $25$ values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the corrected mean.",
          "workingLatex": "\\bar{x}' = \\frac{732}{25} = 29.28",
          "explanation": "Dividing the corrected sum by $25$ gives the corrected mean of $29.28$; it is slightly lower, as expected since we replaced a larger value with a smaller one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write down the variance formula.",
          "workingLatex": "\\sigma'^2 = \\frac{\\Sigma x'^2}{n} - (\\bar{x}')^2",
          "explanation": "We recompute the variance from scratch using the corrected totals and corrected mean.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the mean of the corrected squares.",
          "workingLatex": "\\frac{\\Sigma x'^2}{n} = \\frac{22212}{25} = 888.48",
          "explanation": "This is the average squared value after the correction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Square the corrected mean.",
          "workingLatex": "(\\bar{x}')^2 = 29.28^2 = 857.3184",
          "explanation": "We square the corrected mean so it can be subtracted from the average of the squares.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the corrected variance.",
          "workingLatex": "\\sigma'^2 = 888.48 - 857.3184 = 31.1616",
          "explanation": "The difference gives the corrected variance, which is positive and therefore valid.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Take the square root.",
          "workingLatex": "\\sigma' = \\sqrt{31.1616} = 5.58225\\ldots",
          "explanation": "The square root converts the variance back to the standard deviation in the original units.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma' \\approx 5.58 \\ (3\\text{ s.f.})",
          "explanation": "The value is not exact, so we round to $3$ significant figures and state that.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion.",
          "workingLatex": "\\bar{x}' = 29.28, \\qquad \\sigma' \\approx 5.58",
          "explanation": "The corrected mean is $29.28$ and the corrected standard deviation is about $5.58$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Corrected mean $= 29.28$; corrected standard deviation $\\approx 5.58$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "comparing-distributions",
      "mean",
      "standard-deviation",
      "context"
    ],
    "questionText": "Two factories produce metal rods. A sample from Factory $A$ has mean length $50.4$ cm and standard deviation $0.3$ cm. A sample from Factory $B$ has mean length $50.1$ cm and standard deviation $0.8$ cm. Both samples are roughly symmetric and contain no outliers. The target length is $50$ cm. (a) Explain why the mean and standard deviation are appropriate summary measures here. (b) Compare the two factories' output, commenting on which factory you would recommend for producing rods close to the target length.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the shape of the data.",
          "workingLatex": "\\text{both symmetric, no outliers}",
          "explanation": "The suitability of the mean and standard deviation depends on the data, so we first note that both samples are symmetric with no outliers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain when the mean and standard deviation work well.",
          "workingLatex": "\\bar{x}, \\ \\sigma \\ \\text{use all the data}",
          "explanation": "The mean and standard deviation use every value, so they summarise data efficiently as long as there are no extreme readings to distort them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Answer part (a).",
          "workingLatex": "\\Rightarrow \\text{mean and s.d. are appropriate}",
          "explanation": "Since the data are symmetric with no outliers, nothing will distort these measures, so they are reliable and appropriate here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall what the mean represents.",
          "workingLatex": "\\bar{x} = \\text{average length}",
          "explanation": "The mean tells us the average rod length, so comparing means to the target shows which factory is more accurate on average.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the means with the target.",
          "workingLatex": "A: 50.4, \\quad B: 50.1, \\quad \\text{target } 50",
          "explanation": "Factory $B$'s mean is $0.1$ cm from target, while Factory $A$'s is $0.4$ cm from target.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the mean comparison.",
          "workingLatex": "|50.1 - 50| < |50.4 - 50|",
          "explanation": "Factory $B$'s average length is closer to the target, so on average $B$ is the more accurate factory.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall what the standard deviation represents.",
          "workingLatex": "\\sigma = \\text{spread / consistency}",
          "explanation": "The standard deviation measures how much the lengths vary, so a smaller value means more consistent rods.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the standard deviations.",
          "workingLatex": "A: 0.3, \\quad B: 0.8",
          "explanation": "Factory $A$'s standard deviation of $0.3$ cm is smaller than Factory $B$'s $0.8$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the spread comparison.",
          "workingLatex": "0.3 < 0.8 \\ \\Rightarrow \\ A \\text{ more consistent}",
          "explanation": "A smaller standard deviation means Factory $A$'s rods vary less in length, so $A$ is the more consistent producer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Weigh up the trade-off and recommend.",
          "workingLatex": "B: \\text{closer on average}, \\quad A: \\text{more consistent}",
          "explanation": "There is a genuine trade-off: $B$ is closer to target on average but $A$ is more consistent. If low variability matters most, recommend $A$; if being closest to target on average matters most, recommend $B$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Both samples are roughly symmetric with no outliers, so the mean and standard deviation summarise the data reliably (they use every value and are not distorted). (b) Factory $B$'s mean ($50.1$ cm) is closer to the target of $50$ cm than Factory $A$'s ($50.4$ cm), so $B$ is more accurate on average; however Factory $A$ has the smaller standard deviation ($0.3$ cm vs $0.8$ cm), so its rods are more consistent. If consistency matters most, recommend Factory $A$; if closeness to target on average matters most, recommend Factory $B$."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "outliers",
      "include-exclude",
      "mean",
      "standard-deviation"
    ],
    "questionText": "The daily rainfall (in mm) recorded at a weather station over one week was: $2, 3, 3, 4, 5, 6, 45$. The value $45$ mm, caused by a single storm, has been identified as an outlier. (a) Calculate the mean and population standard deviation of all seven values, to 3 significant figures. (b) Calculate the mean and population standard deviation of the six values with the outlier removed, to 3 significant figures. (c) Discuss the effect of the outlier and comment on whether it should be included when describing a typical day's rainfall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total of all seven values.",
          "workingLatex": "\\Sigma x = 2+3+3+4+5+6+45 = 68",
          "explanation": "We start with all seven readings, so we add them to get the sum needed for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the mean of all seven values.",
          "workingLatex": "\\bar{x} = \\frac{68}{7} = 9.714\\ldots \\approx 9.71",
          "explanation": "Dividing by seven gives a mean of about $9.71$ mm. Notice this is already larger than six of the seven readings, a hint that the storm is pulling it up.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the sum of squares for all seven values.",
          "workingLatex": "\\Sigma x^2 = 4+9+9+16+25+36+2025 = 2124",
          "explanation": "For the standard deviation we also need the sum of the squared values; the storm's $45^2 = 2025$ dominates this total.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the variance of all seven values.",
          "workingLatex": "\\sigma^2 = \\frac{2124}{7} - 9.714\\ldots^2 = 303.43 - 94.37 = 209.06",
          "explanation": "Using the variance formula with the full totals gives a large variance, reflecting how far the storm reading sits from the rest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the standard deviation of all seven values.",
          "workingLatex": "\\sigma = \\sqrt{209.06} \\approx 14.5",
          "explanation": "The standard deviation of about $14.5$ mm is huge compared with the everyday rainfall figures, again showing the storm's influence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Remove the outlier from the sum.",
          "workingLatex": "\\Sigma x = 68 - 45 = 23",
          "explanation": "To see the effect of the outlier we recompute with it removed, starting by taking $45$ out of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the mean of the remaining six values.",
          "workingLatex": "\\bar{x} = \\frac{23}{6} = 3.833\\ldots \\approx 3.83",
          "explanation": "Without the storm, the mean drops to about $3.83$ mm, which sits sensibly in the middle of the everyday readings.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Remove the outlier from the sum of squares.",
          "workingLatex": "\\Sigma x^2 = 2124 - 45^2 = 2124 - 2025 = 99",
          "explanation": "We subtract $45^2$ from the sum of squares; almost all of the original total came from the storm, so this total shrinks dramatically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the variance of the six values.",
          "workingLatex": "\\sigma^2 = \\frac{99}{6} - 3.833\\ldots^2 = 16.5 - 14.69 = 1.806",
          "explanation": "The variance is now small, showing the six ordinary days are tightly grouped.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the standard deviation of the six values.",
          "workingLatex": "\\sigma = \\sqrt{1.806} \\approx 1.34",
          "explanation": "The standard deviation of about $1.34$ mm is a realistic measure of the day-to-day variation on ordinary days.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the two means.",
          "workingLatex": "9.71 \\ \\longrightarrow \\ 3.83",
          "explanation": "Removing one value cut the mean by roughly $6$ mm, more than halving it, which shows how strongly a single outlier can shift the mean.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the two standard deviations.",
          "workingLatex": "14.5 \\ \\longrightarrow \\ 1.34",
          "explanation": "The standard deviation fell by roughly a factor of ten, showing the outlier was responsible for nearly all of the apparent spread.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on the size of the effect.",
          "workingLatex": "\\text{single value dominates } \\bar{x} \\text{ and } \\sigma",
          "explanation": "One reading out of seven controls both summary measures, so with the storm included neither figure describes a typical day.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Consider whether the value is a genuine reading.",
          "workingLatex": "45 \\text{ mm is real (a storm), not an error}",
          "explanation": "Because the $45$ mm was a genuine measurement rather than a recording mistake, it should not simply be deleted; whether to keep it depends on the purpose.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion for a typical day.",
          "workingLatex": "\\text{typical day} \\Rightarrow \\text{exclude, but report separately}",
          "explanation": "For describing a typical day the storm is misleading, so it is reasonable to exclude it and quote the six-value figures, while still noting the storm separately so no information is lost.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Mean $\\approx 9.71$ mm, standard deviation $\\approx 14.5$ mm. (b) Mean $\\approx 3.83$ mm, standard deviation $\\approx 1.34$ mm. (c) The single storm value of $45$ mm more than halves the mean when removed and shrinks the standard deviation roughly tenfold, so it dominates both measures. Because it is a genuine reading rather than an error it should not be deleted without thought; however, when describing a typical day's rainfall it is misleading, so it is reasonable to exclude it and report the more representative figures (mean $\\approx 3.83$ mm, s.d. $\\approx 1.34$ mm) while noting the storm separately."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "work-backwards",
      "outliers",
      "iqr",
      "quartiles"
    ],
    "questionText": "For a data set, the lower quartile is $Q_1 = 30$. An outlier is defined as any value more than $1.5 \\times \\text{IQR}$ beyond the nearer quartile. The lower boundary, below which values are outliers, is $12$. (a) Find the interquartile range. (b) Find the upper quartile $Q_3$. (c) Find the upper outlier boundary. (d) Determine whether a value of $63$ is an outlier.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the work-backwards strategy.",
          "workingLatex": "\\text{lower boundary} = Q_1 - 1.5\\times\\text{IQR}",
          "explanation": "The lower boundary is built from $Q_1$ and the IQR. Since we know the boundary and $Q_1$, we can reverse the rule to find the IQR.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values.",
          "workingLatex": "30 - 1.5\\times\\text{IQR} = 12",
          "explanation": "Putting in $Q_1 = 30$ and the boundary of $12$ gives an equation with the IQR as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for 1.5 times the IQR.",
          "workingLatex": "1.5\\times\\text{IQR} = 30 - 12 = 18",
          "explanation": "The scaled IQR is the gap between the quartile and its boundary, which is $18$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the interquartile range.",
          "workingLatex": "\\text{IQR} = \\frac{18}{1.5} = 12",
          "explanation": "Dividing by $1.5$ undoes the scaling, giving an IQR of $12$. This answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate the IQR to the quartiles.",
          "workingLatex": "\\text{IQR} = Q_3 - Q_1 \\ \\Rightarrow \\ Q_3 = Q_1 + \\text{IQR}",
          "explanation": "The IQR is the distance between the quartiles, so adding it to $Q_1$ recovers $Q_3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the upper quartile.",
          "workingLatex": "Q_3 = 30 + 12 = 42",
          "explanation": "This answers part (b): the upper quartile is $42$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper outlier boundary.",
          "workingLatex": "Q_3 + 1.5\\times\\text{IQR} = 42 + 18 = 60",
          "explanation": "The upper boundary sits $1.5\\times\\text{IQR} = 18$ above $Q_3$, giving $60$. This answers part (c). We reuse the $18$ found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the value 63 against the upper boundary.",
          "workingLatex": "63 > 60",
          "explanation": "We compare $63$ with the upper boundary of $60$ to decide whether it is an outlier.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the verdict for 63.",
          "workingLatex": "63 > 60 \\ \\Rightarrow \\ \\text{outlier}",
          "explanation": "Since $63$ lies beyond the upper boundary, it is an outlier. This answers part (d).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise all results.",
          "workingLatex": "\\text{IQR}=12, \\ Q_3=42, \\ \\text{upper bd}=60, \\ 63 \\text{ is an outlier}",
          "explanation": "Collecting the answers: the IQR is $12$, $Q_3 = 42$, the upper boundary is $60$, and $63$ is an outlier.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) IQR $= 12$. (b) $Q_3 = 42$. (c) Upper boundary $= 60$. (d) Since $63 > 60$, the value $63$ is an outlier."
    }
  },
  {
    "id": "al.y1.stats.location-spread.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Measures of location and spread",
    "subtopicId": "al.y1.stats.location-spread",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "work-backwards",
      "adding-value",
      "mean",
      "standard-deviation"
    ],
    "questionText": "A set of $10$ numbers has mean $15$ and population standard deviation $4$. An eleventh number is added to the set, and the mean of the $11$ numbers is now $16$. (a) Find the value of the number that was added. (b) Find the standard deviation of the $11$ numbers, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the original sum.",
          "workingLatex": "\\Sigma x = n\\bar{x} = 10 \\times 15 = 150",
          "explanation": "The total of the ten numbers is the mean times the count. This is our starting point for tracking how the total changes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the new sum after adding a number.",
          "workingLatex": "\\Sigma x' = n'\\bar{x}' = 11 \\times 16 = 176",
          "explanation": "Since the new mean of $16$ applies to $11$ numbers, the new total must be $11 \\times 16 = 176$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce the added value.",
          "workingLatex": "v = \\Sigma x' - \\Sigma x = 176 - 150 = 26",
          "explanation": "The added number is exactly the increase in the total, so it must be $26$. This answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the original sum of squares.",
          "workingLatex": "\\Sigma x^2 = n(\\sigma^2 + \\bar{x}^2) = 10(4^2 + 15^2)",
          "explanation": "To find the new standard deviation we need the sum of squares. We recover it from the original mean and standard deviation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the original sum of squares.",
          "workingLatex": "\\Sigma x^2 = 10(16 + 225) = 10 \\times 241 = 2410",
          "explanation": "This is the sum of squares of the original ten numbers.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Update the sum of squares for the new value.",
          "workingLatex": "\\Sigma x'^2 = 2410 + 26^2 = 2410 + 676 = 3086",
          "explanation": "Adding the number $26$ increases the sum of squares by $26^2 = 676$, since each value contributes its own square.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the new count.",
          "workingLatex": "n' = 11",
          "explanation": "There are now eleven numbers, so we divide by $11$ in the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write down the variance formula.",
          "workingLatex": "\\sigma'^2 = \\frac{\\Sigma x'^2}{n'} - (\\bar{x}')^2",
          "explanation": "We use the standard variance formula with the updated sum of squares, count and mean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the mean of the new squares.",
          "workingLatex": "\\frac{\\Sigma x'^2}{n'} = \\frac{3086}{11} = 280.545\\ldots",
          "explanation": "This is the average squared value across all eleven numbers.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Square the new mean.",
          "workingLatex": "(\\bar{x}')^2 = 16^2 = 256",
          "explanation": "We square the new mean so it can be subtracted from the average of the squares.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the new variance.",
          "workingLatex": "\\sigma'^2 = 280.545\\ldots - 256 = 24.545\\ldots",
          "explanation": "The difference gives the new variance, which is positive and therefore valid.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the square root.",
          "workingLatex": "\\sigma' = \\sqrt{24.545\\ldots} = 4.9543\\ldots",
          "explanation": "The square root returns the spread to the original units.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 significant figures.",
          "workingLatex": "\\sigma' \\approx 4.95 \\ (3\\text{ s.f.})",
          "explanation": "The value is not exact, so we round to $3$ significant figures as required.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusions.",
          "workingLatex": "v = 26, \\qquad \\sigma' \\approx 4.95",
          "explanation": "The added number is $26$, and the standard deviation of the eleven numbers is about $4.95$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The added number is $26$. (b) The new standard deviation is $\\approx 4.95$ (3 s.f.)."
    }
  }
];
