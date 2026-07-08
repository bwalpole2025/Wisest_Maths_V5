import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q001",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "The product moment correlation coefficient between hours spent studying and exam score is $r = 0.92$. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.92",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "strong",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "as study time increases, exam scores tend to increase",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "positive strong \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is positive strong correlation (as study time increases, exam scores tend to increase)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q002",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $12$ adults, $r = -0.85$ between age and reaction time (seconds). Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r<0 \\Rightarrow \\text{negative}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.85",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "strong",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "as age increases, reaction time tends to increase",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "negative strong \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is negative strong correlation (as age increases, reaction time tends to increase)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q003",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A sample of $20$ people gives $r = 0.45$ between height and weight. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.45",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "moderate",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "there is a weak tendency for taller people to weigh more",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "positive moderate \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is positive moderate correlation (there is a weak tendency for taller people to weigh more)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q004",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $15$ firms, $r = -0.35$ between advertising spend and profit. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r<0 \\Rightarrow \\text{negative}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.35",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "weak",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "there is a weak tendency for more advertising to associate with slightly lower profit",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "negative weak \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is negative weak correlation (there is a weak tendency for more advertising to associate with slightly lower profit)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q005",
    "tags": [
      "no correlation",
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A study of $30$ students finds $r = 0.08$ between shoe size and IQ score. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.08",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "weak",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "there is essentially no linear relationship between shoe size and IQ",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "no weak \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no weak correlation (there is essentially no linear relationship between shoe size and IQ)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q006",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $10$ winter days, $r = -0.72$ between outdoor temperature and heating cost. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r<0 \\Rightarrow \\text{negative}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.72",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "strong",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "as temperature increases, heating cost decreases",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "negative strong \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is negative strong correlation (as temperature increases, heating cost decreases)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q007",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $18$ countries, $r = 0.58$ between GDP per capita and life expectancy. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.58",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "moderate",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "countries with higher GDP tend to have higher life expectancy",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "positive moderate \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is positive moderate correlation (countries with higher GDP tend to have higher life expectancy)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q008",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For a product sold at $8$ different prices, $r = -0.95$ between price and daily demand. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r<0 \\Rightarrow \\text{negative}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.95",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "strong",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "as price increases, demand falls sharply",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "negative strong \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is negative strong correlation (as price increases, demand falls sharply)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q009",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $25$ students, $r = 0.15$ between sleep hours and test score. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.15",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "weak",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "there is very little linear association between hours of sleep and test score",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "positive weak \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is positive weak correlation (there is very little linear association between hours of sleep and test score)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q010",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $14$ participants, $r = -0.78$ between weekly exercise (minutes) and resting heart rate. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.78",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "strong",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "as exercise minutes increase, resting heart rate decreases",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "negative strong \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is negative strong correlation (as exercise minutes increase, resting heart rate decreases)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q011",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "For $22$ teenagers, $r = -0.52$ between daily screen time and sleep quality. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r<0 \\Rightarrow \\text{negative}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.52",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "moderate",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "as screen time increases, sleep quality score decreases moderately",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "negative moderate \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is negative moderate correlation (as screen time increases, sleep quality score decreases moderately)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q012",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A chemistry experiment gives $r = 0.99$ between concentration and absorbance. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.99",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "strong",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "the data lie almost perfectly on a straight line with positive gradient",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "positive strong \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is positive strong correlation (the data lie almost perfectly on a straight line with positive gradient)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q013",
    "tags": [
      "exponential model",
      "log linearisation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A scientist models growth by $y=ab^{x}$. Show that plotting $x$ against $\\ln y$ gives a straight line and state its equation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the model type",
          "workingLatex": "y=ab^{x}",
          "explanation": "Recognise exponential growth or decay in the original data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\ln y=\\cdots",
          "explanation": "Logarithms turn multiplication into addition, linearising the relationship.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply log laws",
          "workingLatex": "\\ln y=\\ln a+x\\ln b",
          "explanation": "Use $\\ln(ab)=\\ln a+\\ln b$ and $\\ln(a^x)=x\\ln a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify linear form",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "The equation is now linear in $x$ and $\\ln y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Define coded variables",
          "workingLatex": "Y=\\ln y,\\;X=x",
          "explanation": "Plot $x$ against $\\ln y$ to obtain a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret gradient and intercept",
          "workingLatex": "\\text{Gradient}=\\ln b,\\;\\text{intercept}=\\ln a",
          "explanation": "Gradient and intercept relate back to the original parameters.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the linearised form",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Final log-linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln y=\\ln a+(\\ln b)x$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q014",
    "tags": [
      "exponential model",
      "log linearisation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A population grows according to $P=ae^{kt}$. Explain how to linearise this model using logarithms.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the model type",
          "workingLatex": "y=ae^{kx}",
          "explanation": "Recognise exponential growth or decay in the original data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\ln y=\\cdots",
          "explanation": "Logarithms turn multiplication into addition, linearising the relationship.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply log laws",
          "workingLatex": "\\ln y=\\ln a+kx",
          "explanation": "Use $\\ln(ab)=\\ln a+\\ln b$ and $\\ln(a^x)=x\\ln a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify linear form",
          "workingLatex": "\\ln y=\\ln a+kx",
          "explanation": "The equation is now linear in $x$ and $\\ln y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Define coded variables",
          "workingLatex": "Y=\\ln y,\\;X=x",
          "explanation": "Plot $x$ against $\\ln y$ to obtain a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret gradient and intercept",
          "workingLatex": "\\text{Gradient}=k,\\;\\text{intercept}=\\ln a",
          "explanation": "Gradient and intercept relate back to the original parameters.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the linearised form",
          "workingLatex": "\\ln y=\\ln a+kx",
          "explanation": "Final log-linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln y=\\ln a+kx$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q015",
    "tags": [
      "numerical",
      "exponential model",
      "log linearisation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Given $y=3\\times2^{x}$, find the equation relating $\\ln y$ and $x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the model type",
          "workingLatex": "y=3\\times2^{x}",
          "explanation": "Recognise exponential growth or decay in the original data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\ln y=\\cdots",
          "explanation": "Logarithms turn multiplication into addition, linearising the relationship.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply log laws",
          "workingLatex": "\\ln y=\\ln3+x\\ln2",
          "explanation": "Use $\\ln(ab)=\\ln a+\\ln b$ and $\\ln(a^x)=x\\ln a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify linear form",
          "workingLatex": "\\ln y=\\ln3+(\\ln2)x",
          "explanation": "The equation is now linear in $x$ and $\\ln y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Define coded variables",
          "workingLatex": "Y=\\ln y,\\;X=x",
          "explanation": "Plot $x$ against $\\ln y$ to obtain a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret gradient and intercept",
          "workingLatex": "\\ln a=\\ln3,\\;\\ln b=\\ln2",
          "explanation": "Gradient and intercept relate back to the original parameters.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the linearised form",
          "workingLatex": "\\ln y=\\ln3+(\\ln2)x",
          "explanation": "Final log-linear equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln y=\\ln3+(\\ln2)x$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q016",
    "tags": [
      "numerical",
      "exponential model",
      "log linearisation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Given $y=5e^{0.2x}$, find the linear relationship between $\\ln y$ and $x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the model type",
          "workingLatex": "y=5e^{0.2x}",
          "explanation": "Recognise exponential growth or decay in the original data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take logarithms of both sides",
          "workingLatex": "\\ln y=\\cdots",
          "explanation": "Logarithms turn multiplication into addition, linearising the relationship.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply log laws",
          "workingLatex": "\\ln y=\\ln5+0.2x",
          "explanation": "Use $\\ln(ab)=\\ln a+\\ln b$ and $\\ln(a^x)=x\\ln a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify linear form",
          "workingLatex": "\\ln y=\\ln5+0.2x",
          "explanation": "The equation is now linear in $x$ and $\\ln y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Define coded variables",
          "workingLatex": "Y=\\ln y,\\;X=x",
          "explanation": "Plot $x$ against $\\ln y$ to obtain a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret gradient and intercept",
          "workingLatex": "a=5,\\;k=0.2",
          "explanation": "Gradient and intercept relate back to the original parameters.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the linearised form",
          "workingLatex": "\\ln y=\\ln5+0.2x",
          "explanation": "Final log-linear equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\ln y=\\ln5+0.2x$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q017",
    "tags": [
      "exponential model",
      "interpret"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A scatter diagram of $x$ against $y$ shows points curving upwards increasingly steeply. Name a suitable type of model and explain how to check it using logarithms.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the pattern",
          "workingLatex": "\\text{Upward curve increasing in steepness}",
          "explanation": "This suggests exponential growth rather than linear growth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Suggest a model",
          "workingLatex": "y=ab^{x} \\text{ or } y=ae^{kx}",
          "explanation": "Exponential models capture accelerating increase.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Linearise with logs",
          "workingLatex": "\\ln y=\\ln a+x\\ln b",
          "explanation": "Taking logs converts the curve to a straight line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check with a graph",
          "workingLatex": "\\text{Plot }x\\text{ against }\\ln y",
          "explanation": "If the points lie roughly on a straight line, the exponential model is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret gradient",
          "workingLatex": "\\text{Gradient}=\\ln b",
          "explanation": "The gradient of the log graph gives the growth rate parameter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\text{Exponential model; plot }x\\text{ vs }\\ln y",
          "explanation": "Model type and checking method.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use an exponential model $y=ab^x$ (or $y=ae^{kx}$). Plot $x$ against $\\ln y$; if the points lie approximately on a straight line, the model is suitable."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q018",
    "tags": [
      "exponential model",
      "decay"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "A radioactive substance decays over time. The graph of mass $y$ against time $t$ is a decreasing curve that levels off towards zero. What model would you use and how would you linearise it?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify decay pattern",
          "workingLatex": "y=ae^{-kt}",
          "explanation": "Exponential decay models quantities that decrease proportionally to their current value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take natural logs",
          "workingLatex": "\\ln y=\\ln a-kt",
          "explanation": "Logarithms linearise the relationship.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Plot",
          "workingLatex": "t\\text{ against }\\ln y",
          "explanation": "A straight-line graph confirms the model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gradient",
          "workingLatex": "\\text{Gradient}=-k",
          "explanation": "The decay constant comes from the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Intercept",
          "workingLatex": "\\text{Intercept}=\\ln a",
          "explanation": "Initial mass relates to the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "y=ae^{-kt};\\;\\text{plot }t\\text{ vs }\\ln y",
          "explanation": "Model and linearisation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Use $y = ae^{-kt}$. Plot $t$ against $\\ln y$ to obtain a straight line with gradient $-k$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q019",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For a sample of $8$ pairs of values, $S_{xx}=40$, $S_{yy}=90$ and $S_{xy}=50$. Calculate the product moment correlation coefficient $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{50}{\\sqrt{40\\times90}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{3600}=60",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=0.833",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}>0 \\Rightarrow r>0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.833",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=0.833",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 0.833$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q020",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Summary statistics for $10$ observations give $S_{xx}=25$, $S_{yy}=36$ and $S_{xy}=-20$. Find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{-20}{\\sqrt{25\\times36}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{900}=30",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=-0.667",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}<0 \\Rightarrow r<0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.667",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=-0.667",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = -0.667$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q021",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For $12$ data pairs, $S_{xx}=100$, $S_{yy}=64$ and $S_{xy}=60$. Calculate $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{60}{\\sqrt{100\\times64}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{6400}=80",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=0.75",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}>0 \\Rightarrow r>0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.75",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=0.75",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 0.75$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q022",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Given $S_{xx}=50$, $S_{yy}=50$ and $S_{xy}=45$ for $n=9$ observations, find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{45}{\\sqrt{50\\times50}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{2500}=50",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=0.9",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}>0 \\Rightarrow r>0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.9",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=0.9",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 0.9$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q023",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For $n=11$, $S_{xx}=80$, $S_{yy}=20$ and $S_{xy}=-30$. Find the PMCC.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{-30}{\\sqrt{80\\times20}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{1600}=40",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=-0.75",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}<0 \\Rightarrow r<0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.75",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=-0.75",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = -0.75$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q024",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Calculate $r$ when $S_{xx}=36$, $S_{yy}=49$ and $S_{xy}=28$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{28}{\\sqrt{36\\times49}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{1764}=42",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=0.667",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}>0 \\Rightarrow r>0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.667",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=0.667",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 0.667$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q025",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For a bivariate sample, $S_{xx}=144$, $S_{yy}=100$ and $S_{xy}=-90$. Find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{-90}{\\sqrt{144\\times100}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{14400}=120",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=-0.75",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}<0 \\Rightarrow r<0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.75",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=-0.75",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = -0.75$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q026",
    "tags": [
      "PMCC",
      "calculation",
      "summary statistics"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "For $n=6$ pairs of values, $\\sum x=30$, $\\sum y=42$, $\\sum x^{2}=170$, $\\sum y^{2}=320$ and $\\sum xy=220$. Calculate the product moment correlation coefficient.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find means",
          "workingLatex": "\\bar{x}=5,\\;\\bar{y}=7",
          "explanation": "Divide totals by $n=6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $S_{xx}$",
          "workingLatex": "S_{xx}=170-\\dfrac{900}{6}=170-150=20",
          "explanation": "Use $S_{xx}=\\sum x^2-\\dfrac{(\\sum x)^2}{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $S_{yy}$",
          "workingLatex": "S_{yy}=320-\\dfrac{1764}{6}=320-294=26",
          "explanation": "Use $S_{yy}=\\sum y^2-\\dfrac{(\\sum y)^2}{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $S_{xy}$",
          "workingLatex": "S_{xy}=220-\\dfrac{1260}{6}=220-210=10",
          "explanation": "Use $S_{xy}=\\sum xy-\\dfrac{(\\sum x)(\\sum y)}{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply PMCC formula",
          "workingLatex": "r=\\dfrac{10}{\\sqrt{20\\times26}}=\\dfrac{10}{\\sqrt{520}}",
          "explanation": "Substitute into $r=S_{xy}/\\sqrt{S_{xx}S_{yy}}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "r=\\dfrac{10}{2\\sqrt{130}}=\\dfrac{5}{\\sqrt{130}}",
          "explanation": "Simplify the surd.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Decimal form",
          "workingLatex": "r\\approx0.44",
          "explanation": "Moderate positive correlation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "r=\\dfrac{5}{\\sqrt{130}}\\approx0.44",
          "explanation": "Final PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = \\dfrac{5}{\\sqrt{130}} \\approx 0.44$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q027",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "For $n=8$, $\\sum x=40$, $\\sum y=56$, $\\sum x^{2}=220$, $\\sum y^{2}=420$ and $\\sum xy=300$. Find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Calculate $S_{xx}$",
          "workingLatex": "S_{xx}=220-\\dfrac{1600}{8}=220-200=20",
          "explanation": "Spread of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $S_{yy}$",
          "workingLatex": "S_{yy}=420-\\dfrac{3136}{8}=420-392=28",
          "explanation": "Spread of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $S_{xy}$",
          "workingLatex": "S_{xy}=300-\\dfrac{2240}{8}=300-280=20",
          "explanation": "Covariation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMCC formula",
          "workingLatex": "r=\\dfrac{20}{\\sqrt{20\\times28}}=\\dfrac{20}{\\sqrt{560}}",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "r=\\dfrac{20}{4\\sqrt{35}}=\\dfrac{5}{\\sqrt{35}}",
          "explanation": "Cancel factors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decimal",
          "workingLatex": "r\\approx0.85",
          "explanation": "Strong positive correlation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=\\dfrac{5}{\\sqrt{35}}\\approx0.85",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = \\dfrac{5}{\\sqrt{35}} \\approx 0.85$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q028",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For $n=10$, $S_{xx}=45$, $S_{yy}=80$ and $S_{xy}=54$. Find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{54}{\\sqrt{45\\times80}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{3600}=60",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=0.9",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}>0 \\Rightarrow r>0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.9",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=0.9",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 0.9$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q029",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Given $S_{xx}=16$, $S_{yy}=25$ and $S_{xy}=15$, calculate $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{15}{\\sqrt{16\\times25}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{400}=20",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=0.75",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}>0 \\Rightarrow r>0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.75",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=0.75",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 0.75$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q030",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For $n=15$, $S_{xx}=200$, $S_{yy}=50$ and $S_{xy}=-80$. Find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{-80}{\\sqrt{200\\times50}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{10000}=100",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=-0.8",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}<0 \\Rightarrow r<0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.8",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=-0.8",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = -0.8$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q031",
    "tags": [
      "exponential model",
      "regression"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "An exponential model $y=ab^{x}$ is fitted by regressing $\\ln y$ on $x$. The least-squares line is $\\ln y = 1.2 + 0.693x$. Find $a$ and $b$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with standard form",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Match coefficients to the log-linearised model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Intercept gives ln a",
          "workingLatex": "\\ln a=1.2",
          "explanation": "The intercept of the log graph equals $\\ln a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find a",
          "workingLatex": "a=e^{1.2}\\approx3.32",
          "explanation": "Exponentiate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gradient gives ln b",
          "workingLatex": "\\ln b=0.693",
          "explanation": "The gradient equals $\\ln b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find b",
          "workingLatex": "b=e^{0.693}\\approx2",
          "explanation": "Note $0.693\\approx\\ln2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the model",
          "workingLatex": "y\\approx3.32\\times2^{x}",
          "explanation": "Original exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "a=e^{1.2}\\approx3.32,\\;b=e^{0.693}\\approx2",
          "explanation": "Both parameters.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = e^{1.2} \\approx 3.32$, $b = e^{0.693} \\approx 2$ (so $y \\approx 3.32 \\times 2^x$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q032",
    "tags": [
      "exponential model",
      "regression"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A population model $P=ae^{kt}$ is linearised to $\\ln P = 4.6 + 0.15t$. Find $a$ and $k$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare forms",
          "workingLatex": "\\ln P=\\ln a+kt",
          "explanation": "Standard log-linear form for exponential growth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Intercept",
          "workingLatex": "\\ln a=4.6 \\Rightarrow a=e^{4.6}\\approx99.5",
          "explanation": "Initial population scale.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gradient",
          "workingLatex": "k=0.15",
          "explanation": "Growth rate constant directly from gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret k",
          "workingLatex": "P\\text{ grows by factor }e^{0.15}\\approx1.16\\text{ per unit time}",
          "explanation": "Approximate $16\\%$ growth per time unit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Model",
          "workingLatex": "P\\approx99.5\\,e^{0.15t}",
          "explanation": "Full exponential model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a\\approx99.5,\\;k=0.15",
          "explanation": "Parameters found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = e^{4.6} \\approx 99.5$, $k = 0.15$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q033",
    "tags": [
      "exponential model",
      "prediction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "For a model $y=ab^{x}$, regression of $\\ln y$ on $x$ gives $\\ln y = 0.5 + 0.8x$. Estimate $y$ when $x=3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find ln y at x=3",
          "workingLatex": "\\ln y=0.5+0.8(3)=2.9",
          "explanation": "Substitute into the regression line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponentiate",
          "workingLatex": "y=e^{2.9}",
          "explanation": "Reverse the logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "y\\approx18.2",
          "explanation": "Evaluate using a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note",
          "workingLatex": "\\text{This is an estimate from the fitted model}",
          "explanation": "Prediction depends on the model being valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check interpolation",
          "workingLatex": "x=3\\text{ lies within the data range}",
          "explanation": "Interpolation is more reliable than extrapolation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "y\\approx18.2",
          "explanation": "Estimated value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y \\approx 18.2$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q034",
    "tags": [
      "PMCC",
      "coding"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Explain why the product moment correlation coefficient $r$ is unchanged if each $x$-value is replaced by $x-b$ (where $b$ is a constant).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Effect on S_xx",
          "workingLatex": "S_{xx}=\\sum(x-\\bar{x})^{2} \\text{ unchanged by shifting}",
          "explanation": "Adding a constant to all $x$-values shifts the mean but not the deviations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on S_yy",
          "workingLatex": "S_{yy} \\text{ unchanged}",
          "explanation": "The $y$-values are not altered.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Effect on S_xy",
          "workingLatex": "S_{xy}=\\sum(x-\\bar{x})(y-\\bar{y}) \\text{ unchanged}",
          "explanation": "Shifting $x$ shifts $\\bar{x}$ by the same amount, so each deviation $x-\\bar{x}$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "All three summary statistics are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "r \\text{ is invariant under translation of } x",
          "explanation": "Coding $x$ as $x-b$ does not affect $r$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "r \\text{ is unchanged}",
          "explanation": "Translation does not affect correlation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r$ is unchanged because translating $x$ by a constant does not alter $S_{xx}$, $S_{yy}$ or $S_{xy}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q035",
    "tags": [
      "PMCC",
      "coding"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Explain why multiplying all $y$-values by a positive constant $c$ leaves the PMCC unchanged.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Effect on S_yy",
          "workingLatex": "S_{yy} \\text{ multiplied by } c^{2}",
          "explanation": "Scaling $y$ scales each deviation by $c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on S_xy",
          "workingLatex": "S_{xy} \\text{ multiplied by } c",
          "explanation": "Each cross-product term scales by $c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Effect on S_xx",
          "workingLatex": "S_{xx} \\text{ unchanged}",
          "explanation": "$x$-values are not altered.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "In the formula",
          "workingLatex": "r=\\dfrac{cS_{xy}}{\\sqrt{S_{xx}\\cdot c^{2}S_{yy}}}=\\dfrac{cS_{xy}}{c\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The factor $c$ cancels.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "r \\text{ unchanged}",
          "explanation": "Scaling by a positive constant does not affect correlation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "r \\text{ is invariant under scaling of } y",
          "explanation": "PMCC is a measure of linear association, not units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "Multiplying $y$ by $c>0$ multiplies both numerator and denominator of $r$ by $c$, which cancels — so $r$ is unchanged."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q036",
    "tags": [
      "one-tailed positive",
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=10$ pairs, $r=0.72$. Test at the 5\\% significance level whether there is evidence of correlation. The critical value is $0.632$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=10",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=0.72",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.632",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|0.72| \\geq 0.632",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Reject $H_0$: there is evidence of positive correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of correlation in the population}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Reject $H_0$: there is evidence of positive correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$: there is evidence of positive correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q037",
    "tags": [
      "one-tailed negative",
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=12$, $r=-0.68$. Test at 5\\% whether there is evidence of negative correlation. Critical value: $-0.576$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=12",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=-0.68",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.576",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|-0.68| \\geq 0.576",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Reject $H_0$: there is evidence of negative correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of correlation in the population}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Reject $H_0$: there is evidence of negative correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$: there is evidence of negative correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q038",
    "tags": [
      "two-tailed",
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=8$, $r=0.45$. Test at 5\\% (two-tailed) whether $\\rho\\neq0$. Critical value: $0.707$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=8",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=0.45",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.707",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|0.45| < 0.707",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{No evidence of correlation}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q039",
    "tags": [
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=15$, $r=0.81$. Test at 5\\% whether there is evidence of correlation. Critical value: $0.514$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=15",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=0.81",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.514",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|0.81| \\geq 0.514",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Reject $H_0$: there is evidence of correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of correlation in the population}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Reject $H_0$: there is evidence of correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$: there is evidence of correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q040",
    "tags": [
      "two-tailed",
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=10$, $r=-0.55$. Test at 5\\% (two-tailed) whether $\\rho\\neq0$. Critical value: $0.632$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=10",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=-0.55",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.632",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|-0.55| < 0.632",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{No evidence of correlation}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q041",
    "tags": [
      "one-tailed positive",
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=20$, $r=0.58$. Test at 5\\% for positive correlation. Critical value: $0.444$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=20",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=0.58",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.444",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|0.58| \\geq 0.444",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Reject $H_0$: there is evidence of positive correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of correlation in the population}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Reject $H_0$: there is evidence of positive correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$: there is evidence of positive correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q042",
    "tags": [
      "one-tailed negative",
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=18$, $r=-0.62$. Test at 5\\% for negative correlation. Critical value: $-0.468$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=18",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=-0.62",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.468",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|-0.62| \\geq 0.468",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Reject $H_0$: there is evidence of negative correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of correlation in the population}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Reject $H_0$: there is evidence of negative correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$: there is evidence of negative correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q043",
    "tags": [
      "two-tailed",
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=25$, $r=0.35$. Test at 5\\% (two-tailed). Critical value: $0.396$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=25",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=0.35",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.396",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|0.35| < 0.396",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{No evidence of correlation}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$: insufficient evidence of correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q044",
    "tags": [
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=8$, $r=0.88$. Test at 5\\% (two-tailed). Critical value: $0.834$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=8",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=0.88",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.834",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|0.88| \\geq 0.834",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Reject $H_0$: there is evidence of correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of correlation in the population}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Reject $H_0$: there is evidence of correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$: there is evidence of correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q045",
    "tags": [
      "one-tailed negative",
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=30$, $r=-0.42$. Test at 5\\% for negative correlation. Critical value: $-0.361$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=30",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=-0.42",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.361",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|-0.42| \\geq 0.361",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Reject $H_0$: there is evidence of negative correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of correlation in the population}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Reject $H_0$: there is evidence of negative correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$: there is evidence of negative correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q046",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "For $50$ families, $r=0.67$ between parent height and child height. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.67",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "moderate",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "taller parents tend to have taller children",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "positive moderate \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is positive moderate correlation (taller parents tend to have taller children)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q047",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "For $16$ regions, $r=-0.88$ between unemployment rate and consumer spending. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r<0 \\Rightarrow \\text{negative}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.88",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "strong",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "higher unemployment strongly associates with lower consumer spending",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "negative strong \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is negative strong correlation (higher unemployment strongly associates with lower consumer spending)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q048",
    "tags": [
      "PMCC",
      "spurious correlation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Two variables have $r=0.91$ but a statistician says the correlation may not be meaningful. Give two reasons why a high value of $r$ might be misleading.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Correlation is not causation",
          "workingLatex": "\\text{High }r\\text{ does not prove one variable causes the other}",
          "explanation": "A third lurking variable may drive both.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Extrapolation",
          "workingLatex": "r\\text{ only measures linear association within the data range}",
          "explanation": "The relationship may not hold outside observed values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Non-linear relationships",
          "workingLatex": "r\\text{ may be low even when a strong non-linear pattern exists}",
          "explanation": "Conversely, outliers can inflate $r$ artificially.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Small samples",
          "workingLatex": "r\\text{ can be unreliable for small }n",
          "explanation": "A few unusual points can dominate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Example",
          "workingLatex": "\\text{Ice cream sales and drowning both rise in summer}",
          "explanation": "Common cause (temperature) creates spurious correlation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Causation not implied; lurking variables; outliers}",
          "explanation": "Two valid reasons.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "High $r$ does not imply causation (a lurking variable may explain both), and the relationship may not hold outside the data range or may be distorted by outliers."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q049",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For $n=9$, $S_{xx}=72$, $S_{yy}=32$ and $S_{xy}=40$. Calculate $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{40}{\\sqrt{72\\times32}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{2304}=48",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=0.833",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}>0 \\Rightarrow r>0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.833",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=0.833",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 0.833$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q050",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For $n=14$, $S_{xx}=60$, $S_{yy}=75$ and $S_{xy}=-45$. Find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{-45}{\\sqrt{60\\times75}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{4500}=67.08203932499369",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=-0.671",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}<0 \\Rightarrow r<0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.671",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=-0.671",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = -0.671$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q051",
    "tags": [
      "multi-part",
      "hypothesis test",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "For $n=10$, $S_{xx}=50$, $S_{yy}=80$, $S_{xy}=55$ and $r=0.87$. (a) Verify the value of $r$. (b) Test at the 5\\% level whether there is evidence of positive correlation, given that the critical value is $0.549$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Formula",
          "workingLatex": "r=\\dfrac{55}{\\sqrt{50\\times80}}=\\dfrac{55}{\\sqrt{4000}}",
          "explanation": "Substitute summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Simplify",
          "workingLatex": "r=\\dfrac{55}{20\\sqrt{10}}\\approx0.87",
          "explanation": "Verify the given value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho>0",
          "explanation": "One-tailed test for positive correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Compare",
          "workingLatex": "0.87>0.549",
          "explanation": "$|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Decision",
          "workingLatex": "\\text{Reject }H_{0}",
          "explanation": "Significant at 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Conclusion",
          "workingLatex": "\\text{Evidence of positive correlation in the population}",
          "explanation": "Interpret in context.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "r\\approx0.87 \\;\\checkmark",
          "explanation": "Verified.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (b)",
          "workingLatex": "\\text{Reject }H_{0}",
          "explanation": "Significant positive correlation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $r = \\dfrac{55}{\\sqrt{4000}} \\approx 0.87$ (verified). (b) Reject $H_0$ — evidence of positive correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q052",
    "tags": [
      "exponential model",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A biologist models bacterial growth by $N=ae^{kt}$. Regression of $\\ln N$ on $t$ gives $\\ln N = 2.3 + 0.35t$. (a) Find $a$ and $k$. (b) Estimate $N$ when $t=5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Compare",
          "workingLatex": "\\ln N=\\ln a+kt",
          "explanation": "Log-linear form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Parameters",
          "workingLatex": "a=e^{2.3}\\approx9.97,\\;k=0.35",
          "explanation": "From intercept and gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Substitute t=5",
          "workingLatex": "\\ln N=2.3+0.35(5)=4.05",
          "explanation": "Use regression line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Exponentiate",
          "workingLatex": "N=e^{4.05}\\approx57.7",
          "explanation": "Estimate population.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret k",
          "workingLatex": "N\\text{ grows by factor }e^{0.35}\\approx1.42\\text{ per hour}",
          "explanation": "Growth rate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check range",
          "workingLatex": "t=5\\text{ may be extrapolation — state caveat}",
          "explanation": "Reliability note.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "a\\approx10.0,\\;k=0.35",
          "explanation": "Parameters.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (b)",
          "workingLatex": "N\\approx58",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $a = e^{2.3} \\approx 10.0$, $k = 0.35$. (b) $N \\approx 58$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q053",
    "tags": [
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "For $n=12$, $\\sum x=66$, $\\sum y=84$, $\\sum x^{2}=400$, $\\sum y^{2}=640$ and $\\sum xy=490$. (a) Calculate $S_{xx}$, $S_{yy}$ and $S_{xy}$. (b) Find $r$. (c) Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) S_xx",
          "workingLatex": "S_{xx}=400-\\dfrac{4356}{12}=400-363=37",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) S_yy",
          "workingLatex": "S_{yy}=640-\\dfrac{7056}{12}=640-588=52",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) S_xy",
          "workingLatex": "S_{xy}=490-\\dfrac{5544}{12}=490-462=28",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) PMCC",
          "workingLatex": "r=\\dfrac{28}{\\sqrt{37\\times52}}=\\dfrac{28}{\\sqrt{1924}}\\approx0.64",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Type",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "Sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Strength",
          "workingLatex": "|r|\\approx0.64 \\Rightarrow \\text{moderate to strong}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "S_{xx}=37,\\;S_{yy}=52,\\;S_{xy}=28",
          "explanation": "Summary stats.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (b,c)",
          "workingLatex": "r\\approx0.64;\\;\\text{moderate positive}",
          "explanation": "PMCC and description.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $S_{xx}=37$, $S_{yy}=52$, $S_{xy}=28$. (b) $r \\approx 0.64$. (c) Moderate positive correlation."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q054",
    "tags": [
      "exponential model",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "A scientist believes that $y=ab^{x}$ models a chemical reaction. After plotting $x$ against $\\ln y$, the least-squares line is $\\ln y = 0.8 + 0.45x$. (a) Find $a$ and $b$. (b) Estimate $y$ when $x=4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) ln a",
          "workingLatex": "0.8 \\Rightarrow a=e^{0.8}\\approx2.23",
          "explanation": "Intercept.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) ln b",
          "workingLatex": "0.45 \\Rightarrow b=e^{0.45}\\approx1.57",
          "explanation": "Gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) ln y at x=4",
          "workingLatex": "0.8+0.45(4)=2.6",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) y",
          "workingLatex": "y=e^{2.6}\\approx13.5",
          "explanation": "Exponentiate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Model",
          "workingLatex": "y\\approx2.23\\times1.57^{x}",
          "explanation": "Full model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a\\approx2.23,\\;b\\approx1.57,\\;y(4)\\approx13.5",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coding invariance",
          "workingLatex": "r\\text{ unchanged by translation/scaling}",
          "explanation": "PMCC is dimensionless.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $a = e^{0.8} \\approx 2.23$, $b = e^{0.45} \\approx 1.57$. (b) $y \\approx 13.5$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q055",
    "tags": [
      "hypothesis test",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "For $n=9$, $r=0.75$. Test at the 5\\% significance level whether there is evidence of correlation. (a) State hypotheses. (b) Given critical value $0.666$, make a decision. (c) Interpret your conclusion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) H0",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "No correlation in population.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) H1",
          "workingLatex": "H_{1}:\\rho\\neq0",
          "explanation": "Two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Compare",
          "workingLatex": "0.75>0.666",
          "explanation": "$|r|$ exceeds critical value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Decision",
          "workingLatex": "\\text{Reject }H_{0}",
          "explanation": "Significant at 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Interpret",
          "workingLatex": "\\text{Evidence that the two variables are correlated in the population}",
          "explanation": "Not necessarily causal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Reject }H_{0};\\;\\text{evidence of correlation}",
          "explanation": "Full conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coding invariance",
          "workingLatex": "r\\text{ unchanged by translation/scaling}",
          "explanation": "PMCC is dimensionless.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0: \\rho=0$, $H_1: \\rho\\neq0$. (b) Reject $H_0$ since $0.75>0.666$. (c) Evidence of correlation in the population."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q056",
    "tags": [
      "coefficient of determination",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "The PMCC between $x$ and $y$ is $r=0.82$ for $n=11$. (a) Calculate the percentage of the variation in $y$ that is explained by the linear relationship with $x$. (b) What percentage is unexplained?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Recall",
          "workingLatex": "r^{2}=\\text{fraction of variation explained}",
          "explanation": "Coefficient of determination.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Calculate",
          "workingLatex": "r^{2}=0.82^{2}=0.6724",
          "explanation": "Square the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Percentage",
          "workingLatex": "67.2\\%",
          "explanation": "Convert to percentage.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Unexplained",
          "workingLatex": "100\\%-67.2\\%=32.8\\%",
          "explanation": "Remainder.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "67\\%\\text{ of variation in }y\\text{ is explained by }x",
          "explanation": "In context.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "67.2\\%\\text{ explained};\\;32.8\\%\\text{ unexplained}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coding invariance",
          "workingLatex": "r\\text{ unchanged by translation/scaling}",
          "explanation": "PMCC is dimensionless.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $r^2 = 0.6724$, so **67.2%** of the variation in $y$ is explained. (b) **32.8%** is unexplained."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q057",
    "tags": [
      "exponential model",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Data is collected on $x$ and $y$ where $y=ae^{kx}$ is suspected. (a) Explain how to transform the data to test this. (b) If $\\ln y = 1.5 - 0.1x$, find $a$ and $k$ and state whether this represents growth or decay.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Take logs",
          "workingLatex": "\\ln y=\\ln a+kx",
          "explanation": "Linearise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Plot",
          "workingLatex": "x\\text{ against }\\ln y",
          "explanation": "Straight line confirms model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) ln a",
          "workingLatex": "1.5 \\Rightarrow a=e^{1.5}\\approx4.48",
          "explanation": "Intercept.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) k",
          "workingLatex": "k=-0.1",
          "explanation": "Negative gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Decay",
          "workingLatex": "k<0 \\Rightarrow \\text{exponential decay}",
          "explanation": "Quantity decreases over time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a\\approx4.48,\\;k=-0.1;\\;\\text{decay}",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coding invariance",
          "workingLatex": "r\\text{ unchanged by translation/scaling}",
          "explanation": "PMCC is dimensionless.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Plot $x$ against $\\ln y$. (b) $a = e^{1.5} \\approx 4.48$, $k = -0.1$ — exponential **decay**."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q058",
    "tags": [
      "hypothesis test",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=16$, $r=-0.58$. Test at the 5\\% level whether there is evidence of negative correlation. Critical value: $-0.497$. (a) State hypotheses. (b) Decide. (c) Interpret.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) H0",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "No correlation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) H1",
          "workingLatex": "H_{1}:\\rho<0",
          "explanation": "One-tailed for negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Compare",
          "workingLatex": "-0.58<-0.497",
          "explanation": "$r$ is more negative than critical value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Decision",
          "workingLatex": "\\text{Reject }H_{0}",
          "explanation": "Significant at 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Interpret",
          "workingLatex": "\\text{Evidence of negative correlation}",
          "explanation": "As one variable increases, the other tends to decrease.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Reject }H_{0}",
          "explanation": "Significant negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coding invariance",
          "workingLatex": "r\\text{ unchanged by translation/scaling}",
          "explanation": "PMCC is dimensionless.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0: \\rho=0$, $H_1: \\rho<0$. (b) Reject $H_0$. (c) Evidence of negative correlation in the population."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q059",
    "tags": [
      "coding",
      "proof",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "(a) Show that $r$ is unchanged if all $x$-values are multiplied by a positive constant $d$. (b) A dataset has $r=0.73$. The $x$-values are converted from cm to m (divided by 100). What is the new value of $r$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) S_xx scaled",
          "workingLatex": "S_{xx}\\text{ multiplied by }d^{2}",
          "explanation": "Scaling affects spread.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) S_xy scaled",
          "workingLatex": "S_{xy}\\text{ multiplied by }d",
          "explanation": "Cross-products scale by $d$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Cancel",
          "workingLatex": "r=\\dfrac{dS_{xy}}{\\sqrt{d^{2}S_{xx}S_{yy}}}=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Factor $d$ cancels.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Apply result",
          "workingLatex": "r=0.73",
          "explanation": "Unchanged by unit conversion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "r\\text{ is dimensionless}",
          "explanation": "Independent of units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "r=0.73",
          "explanation": "Same value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coding invariance",
          "workingLatex": "r\\text{ unchanged by translation/scaling}",
          "explanation": "PMCC is dimensionless.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Scaling $x$ by $d$ multiplies numerator and denominator of $r$ by $d$, which cancels. (b) $r = 0.73$ (unchanged)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q060",
    "tags": [
      "hypothesis test",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A company models sales $S$ (in £000) against advertising spend $A$ (in £000). For $n=20$, $r=0.65$. (a) Test at 5\\% whether there is evidence of positive correlation ($r_{\\text{crit}}=0.378$). (b) Find $r^2$ and interpret.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) H0/H1",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho>0",
          "explanation": "One-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Compare",
          "workingLatex": "0.65>0.378",
          "explanation": "Reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Conclusion",
          "workingLatex": "\\text{Evidence of positive correlation}",
          "explanation": "Significant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) r squared",
          "workingLatex": "r^{2}=0.4225",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Interpret",
          "workingLatex": "42\\%\\text{ of variation in sales explained by advertising}",
          "explanation": "Coefficient of determination.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Reject }H_{0};\\;r^{2}=0.42",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coding invariance",
          "workingLatex": "r\\text{ unchanged by translation/scaling}",
          "explanation": "PMCC is dimensionless.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Reject $H_0$ — evidence of positive correlation. (b) $r^2 = 0.4225$; about 42% of sales variation is explained by advertising spend."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q061",
    "tags": [
      "PMCC",
      "interpret"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "written",
    "questionText": "Musicians record practice hours and exam marks; $r=0.83$. Describe the correlation.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range of r",
          "workingLatex": "-1 \\leq r \\leq 1",
          "explanation": "The product moment correlation coefficient always lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the sign",
          "workingLatex": "r>0 \\Rightarrow \\text{positive}",
          "explanation": "The sign tells us whether the variables increase together or move in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assess the strength",
          "workingLatex": "|r|=0.83",
          "explanation": "Values close to $1$ indicate strong correlation; values close to $0$ indicate weak correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify strength",
          "workingLatex": "strong",
          "explanation": "Use $|r|>0.8$ strong, $0.5$–$0.8$ moderate, $<0.5$ weak as a guide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret in context",
          "workingLatex": "strong linear association between practice hours and performance",
          "explanation": "Relate the statistical result to the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "positive strong \\text{ correlation}",
          "explanation": "Give both type and strength.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is positive strong correlation (strong linear association between practice hours and performance)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q062",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For $n=11$, $S_{xx}=90$, $S_{yy}=160$ and $S_{xy}=100$. Find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{100}{\\sqrt{90\\times160}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{14400}=120",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=0.833",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}>0 \\Rightarrow r>0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.833",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=0.833",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 0.833$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q063",
    "tags": [
      "PMCC",
      "calculation"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "questionText": "For $n=7$, $S_{xx}=30$, $S_{yy}=48$ and $S_{xy}=-24$. Find $r$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "The product moment correlation coefficient measures linear association using the summary statistics.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the values",
          "workingLatex": "r=\\dfrac{-24}{\\sqrt{30\\times48}}",
          "explanation": "Insert $S_{xx}$, $S_{yy}$ and $S_{xy}$ from the data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply under the square root",
          "workingLatex": "\\sqrt{1440}=37.94733192202055",
          "explanation": "Compute $S_{xx}S_{yy}$ before taking the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate r",
          "workingLatex": "r=-0.635",
          "explanation": "Divide $S_{xy}$ by the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sign",
          "workingLatex": "S_{xy}<0 \\Rightarrow r<0",
          "explanation": "The sign of $r$ matches the sign of $S_{xy}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret briefly",
          "workingLatex": "|r|=0.635",
          "explanation": "State whether the correlation is strong, moderate or weak.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "r=-0.635",
          "explanation": "Final value of the PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = -0.635$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q064",
    "tags": [
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=14$, $r=0.71$. Test at 5\\% (two-tailed). Critical value: $0.532$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=14",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=0.71",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.532",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|0.71| \\geq 0.532",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Reject $H_0$: evidence of correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of correlation in the population}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Reject $H_0$: evidence of correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$: evidence of correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q065",
    "tags": [
      "one-tailed negative",
      "hypothesis test",
      "zero correlation"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "For $n=22$, $r=-0.48$. Test at 5\\% for negative correlation. Critical value: $-0.428$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho\\neq0",
          "explanation": "Test whether the population correlation is zero (two-tailed unless stated).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the sample size",
          "workingLatex": "n=22",
          "explanation": "Degrees of freedom are $n-2$ for correlation tests.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate or use given r",
          "workingLatex": "r=-0.48",
          "explanation": "Sample product moment correlation coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the critical value",
          "workingLatex": "|r| \\text{ critical}=0.428",
          "explanation": "Compare $|r|$ with the critical value from tables at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "|-0.48| \\geq 0.428",
          "explanation": "If $|r|$ exceeds the critical value, reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "Reject $H_0$: evidence of negative correlation at the 5\\% level.",
          "explanation": "State clearly whether to reject or not reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of correlation in the population}",
          "explanation": "Interpret the decision in the context of the problem.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "Reject $H_0$: evidence of negative correlation at the 5\\% level.",
          "explanation": "Final conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$: evidence of negative correlation at the 5\\% level."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q066",
    "tags": [
      "exponential model",
      "prediction"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "questionText": "Regression of $\\ln y$ on $x$ gives $\\ln y = 2.0 - 0.25x$. Estimate $y$ when $x=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute x=2",
          "workingLatex": "\\ln y=2.0-0.5=1.5",
          "explanation": "Use regression line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponentiate",
          "workingLatex": "y=e^{1.5}\\approx4.48",
          "explanation": "Reverse log.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret",
          "workingLatex": "y\\approx4.48",
          "explanation": "Estimated value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Model type",
          "workingLatex": "y=ae^{kx}\\text{ with decay}",
          "explanation": "Negative gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "x=2\\text{ within range}",
          "explanation": "Interpolation preferred.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "y\\approx4.48",
          "explanation": "Final estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y \\approx 4.48$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q067",
    "tags": [
      "hypothesis test",
      "interpret"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Explain the difference between a one-tailed and a two-tailed test for zero correlation, and state when each would be used.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Two-tailed",
          "workingLatex": "H_{1}:\\rho\\neq0",
          "explanation": "Tests for any correlation, positive or negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "One-tailed positive",
          "workingLatex": "H_{1}:\\rho>0",
          "explanation": "Tests specifically for positive correlation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "One-tailed negative",
          "workingLatex": "H_{1}:\\rho<0",
          "explanation": "Tests specifically for negative correlation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical values",
          "workingLatex": "\\text{One-tailed CV is lower than two-tailed for same }\\alpha",
          "explanation": "More power in the specified direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "When two-tailed",
          "workingLatex": "\\text{No prior expectation of direction}",
          "explanation": "Default when exploring a new relationship.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "When one-tailed",
          "workingLatex": "\\text{Theory predicts direction}",
          "explanation": "E.g. expecting temperature and ice cream sales to be positively correlated.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "Two-tailed: any correlation; one-tailed: specific direction",
          "explanation": "Summary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two-tailed ($H_1: \\rho\\neq0$) tests for any correlation; one-tailed ($H_1:\\rho>0$ or $\\rho<0$) tests a specific direction and is used when theory predicts the sign."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q068",
    "tags": [
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "For $n=8$, $\\sum x=32$, $\\sum y=48$, $\\sum x^{2}=140$, $\\sum y^{2}=310$ and $\\sum xy=200$. (a) Find $S_{xx}$, $S_{yy}$, $S_{xy}$. (b) Calculate $r$. (c) Test at 5\\% whether $\\rho\\neq0$ given $r_{\\text{crit}}=0.707$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) S_xx",
          "workingLatex": "S_{xx}=140-128=12",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) S_yy",
          "workingLatex": "S_{yy}=310-288=22",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) S_xy",
          "workingLatex": "S_{xy}=200-192=8",
          "explanation": "Calculate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) r",
          "workingLatex": "r=\\dfrac{8}{\\sqrt{264}}\\approx0.49",
          "explanation": "PMCC.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Compare",
          "workingLatex": "0.49<0.707",
          "explanation": "Below critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Decision",
          "workingLatex": "\\text{Do not reject }H_{0}",
          "explanation": "Not significant at 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "r\\approx0.49;\\;\\text{not significant}",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $S_{xx}=12$, $S_{yy}=22$, $S_{xy}=8$. (b) $r \\approx 0.49$. (c) Do not reject $H_0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q069",
    "tags": [
      "exponential model",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "(a) A variable $y$ is thought to follow $y=ab^{x}$. Write down the equation obtained by taking logs. (b) If the regression line of $\\ln y$ on $x$ is $\\ln y = -0.2 + 0.6x$, find $a$, $b$ and estimate $y$ when $x=3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Log form",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Linearised model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) a",
          "workingLatex": "a=e^{-0.2}\\approx0.82",
          "explanation": "From intercept.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) b",
          "workingLatex": "b=e^{0.6}\\approx1.82",
          "explanation": "From gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Estimate",
          "workingLatex": "\\ln y=-0.2+1.8=1.6",
          "explanation": "At $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) y",
          "workingLatex": "y=e^{1.6}\\approx4.95",
          "explanation": "Exponentiate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "a\\approx0.82,\\;b\\approx1.82,\\;y(3)\\approx4.95",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Coefficient of determination",
          "workingLatex": "r^{2}=\\text{fraction explained}",
          "explanation": "Proportion of variation in $y$ explained by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Correlation vs causation",
          "workingLatex": "r\\text{ measures association, not cause}",
          "explanation": "High $|r|$ does not prove one variable causes the other.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Coding invariance",
          "workingLatex": "r\\text{ unchanged by translation/scaling}",
          "explanation": "PMCC is dimensionless.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\ln y = \\ln a + (\\ln b)x$. (b) $a \\approx 0.82$, $b \\approx 1.82$, $y(3) \\approx 4.95$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Regression and correlation",
    "subtopicId": "al.y2.stats.regression-correlation",
    "questionDiagram": null,
    "id": "al.y2.stats.regression-correlation.q070",
    "tags": [
      "multi-part",
      "hypothesis test",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "A researcher collects data on $x$ and $y$ for $n=25$ observations. (a) $r=0.48$. Test at the 5\\% level for positive correlation ($r_{\\text{crit}}=0.337$). (b) Calculate $r^2$ and interpret. (c) The researcher claims $x$ causes changes in $y$. Comment on this claim.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) H0/H1",
          "workingLatex": "H_{0}:\\rho=0,\\;H_{1}:\\rho>0",
          "explanation": "One-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Compare",
          "workingLatex": "0.48>0.337",
          "explanation": "Reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Conclusion",
          "workingLatex": "\\text{Evidence of positive correlation}",
          "explanation": "Significant at 5\\%.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) r^2",
          "workingLatex": "r^{2}=0.2304",
          "explanation": "23\\% of variation explained.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Interpret",
          "workingLatex": "23\\%\\text{ of variation in }y\\text{ explained by linear relationship with }x",
          "explanation": "Moderate explanatory power.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Causation",
          "workingLatex": "\\text{Correlation does not imply causation}",
          "explanation": "A lurking variable or reverse causation may explain the association.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "\\text{Reject }H_{0}",
          "explanation": "Significant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (b)",
          "workingLatex": "r^{2}=0.23",
          "explanation": "23\\% explained.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer (c)",
          "workingLatex": "\\text{Causation not justified from correlation alone}",
          "explanation": "Need controlled experiment or further evidence.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall PMCC formula",
          "workingLatex": "r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}",
          "explanation": "Measures strength of linear association.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Log linearisation",
          "workingLatex": "\\ln y=\\ln a+(\\ln b)x",
          "explanation": "Converts exponential models to straight lines.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Hypothesis test setup",
          "workingLatex": "H_{0}:\\rho=0",
          "explanation": "Test whether population correlation is zero.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare with critical value",
          "workingLatex": "|r| \\text{ vs critical value}",
          "explanation": "Reject $H_0$ if $|r|$ exceeds the critical value.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Reject $H_0$ — evidence of positive correlation. (b) $r^2=0.23$; 23% of variation in $y$ explained. (c) Correlation alone does not prove causation."
    }
  }
];
