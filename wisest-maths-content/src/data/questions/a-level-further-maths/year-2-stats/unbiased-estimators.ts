import type { Question } from "@/lib/types";

/**
 * A-Level Further Maths - Year 2 Statistics - Unbiased estimators
 * Estimators and sampling distributions; bias; unbiased estimators of mu and sigma^2; comparing estimators by variance. 70 questions.
 */
export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q001",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=12$ and $\\operatorname{Var}(X)=9$. A random sample of size $3$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_3}{3}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_3)}{3}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{3\\mu}{3}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{3}=\\frac{9}{3}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=3",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=3"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q002",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=20$ and $\\operatorname{Var}(X)=16$. A random sample of size $4$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_4}{4}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_4)}{4}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{4\\mu}{4}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{4}=\\frac{16}{4}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=4",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=4"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q003",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=35$ and $\\operatorname{Var}(X)=25$. A random sample of size $5$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_5}{5}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_5)}{5}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{5\\mu}{5}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{5}=\\frac{25}{5}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=5",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=5"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q004",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=50$ and $\\operatorname{Var}(X)=36$. A random sample of size $6$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_6}{6}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_6)}{6}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{6\\mu}{6}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{6}=\\frac{36}{6}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=6",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=6"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q005",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=8$ and $\\operatorname{Var}(X)=4$. A random sample of size $8$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_8}{8}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_8)}{8}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{8\\mu}{8}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{8}=\\frac{4}{8}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{1}{2}",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=\\frac{1}{2}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q006",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=16$ and $\\operatorname{Var}(X)=49$. A random sample of size $7$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_7}{7}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_7)}{7}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{7\\mu}{7}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{7}=\\frac{49}{7}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=7",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=7"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q007",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=24$ and $\\operatorname{Var}(X)=64$. A random sample of size $9$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_9}{9}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_9)}{9}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{9\\mu}{9}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{9}=\\frac{64}{9}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{64}{9}",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=\\frac{64}{9}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q008",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=30$ and $\\operatorname{Var}(X)=81$. A random sample of size $10$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_10}{10}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_10)}{10}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{10\\mu}{10}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{10}=\\frac{81}{10}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{81}{10}",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=\\frac{81}{10}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q009",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=45$ and $\\operatorname{Var}(X)=100$. A random sample of size $12$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_12}{12}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_12)}{12}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{12\\mu}{12}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{12}=\\frac{100}{12}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{25}{3}",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=\\frac{25}{3}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q010",
    "tags": [
      "sample-mean",
      "unbiased",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A random variable $X$ has $E(X)=60$ and $\\operatorname{Var}(X)=121$. A random sample of size $11$ is taken and $\\overline{X}$ is the sample mean. Show that $\\overline{X}$ is an unbiased estimator of $\\mu$, and find $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the unbiasedness test",
          "workingLatex": "\\text{An estimator }T\\text{ is unbiased for }\\mu\\text{ if }E(T)=\\mu.",
          "explanation": "Unbiasedness is about the long-run average value of the estimator matching the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sample mean",
          "workingLatex": "\\overline{X}=\\frac{X_1+X_2+\\cdots+X_11}{11}",
          "explanation": "The sample mean averages the observations, so its expectation can be found using linearity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations",
          "workingLatex": "E(\\overline{X})=\\frac{E(X_1)+E(X_2)+\\cdots+E(X_11)}{11}",
          "explanation": "Expectation distributes across sums and constants, even before we use independence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the common mean",
          "workingLatex": "E(\\overline{X})=\\frac{11\\mu}{11}=\\mu",
          "explanation": "Each observation comes from the same population, so each has mean $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude unbiasedness",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "Since the expected value equals the parameter, there is no systematic upward or downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{11}=\\frac{121}{11}",
          "explanation": "For independent observations, averaging divides the population variance by the sample size.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the numerical variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=11",
          "explanation": "This measures how much the sample mean varies from sample to sample.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\overline{X}\\text{ is unbiased for }\\mu,\\quad \\operatorname{Var}(\\overline{X})=11"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q011",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=10$ and variance $\\sigma^2=4$, an estimator is defined by $T=2\\overline{X}+3$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(2\\overline{X}+3)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=2E(\\overline{X})+3",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=2(10)+3=23",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "23\\ne10",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased for }\\mu.",
          "explanation": "The estimator is systematically shifted away from the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=23;\\ T\\text{ is not unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q012",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=15$ and variance $\\sigma^2=9$, an estimator is defined by $T=\\overline{X}-2$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(\\overline{X}-2)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=1E(\\overline{X})-2",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=1(15)-2=13",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "13\\ne15",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased for }\\mu.",
          "explanation": "The estimator is systematically shifted away from the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=13;\\ T\\text{ is not unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q013",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=18$ and variance $\\sigma^2=16$, an estimator is defined by $T=0.5\\overline{X}+1$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(0.5\\overline{X}+1)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=0.5E(\\overline{X})+1",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=0.5(18)+1=10",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "10\\ne18",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased for }\\mu.",
          "explanation": "The estimator is systematically shifted away from the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=10;\\ T\\text{ is not unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q014",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=12$ and variance $\\sigma^2=25$, an estimator is defined by $T=2\\overline{X}-5$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(2\\overline{X}-5)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=2E(\\overline{X})-5",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=2(12)-5=19",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "19\\ne12",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased for }\\mu.",
          "explanation": "The estimator is systematically shifted away from the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=19;\\ T\\text{ is not unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q015",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=22$ and variance $\\sigma^2=36$, an estimator is defined by $T=\\overline{X}+0$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(\\overline{X}+0)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=1E(\\overline{X})+0",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=1(22)+0=22",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "22=22",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased for }\\mu.",
          "explanation": "The estimator is centred exactly on the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=22;\\ T\\text{ is unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q016",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=14$ and variance $\\sigma^2=49$, an estimator is defined by $T=-1\\overline{X}+30$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(-1\\overline{X}+30)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=-1E(\\overline{X})+30",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=-1(14)+30=16",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "16\\ne14",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased for }\\mu.",
          "explanation": "The estimator is systematically shifted away from the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=16;\\ T\\text{ is not unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q017",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=20$ and variance $\\sigma^2=64$, an estimator is defined by $T=1.5\\overline{X}-4$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(1.5\\overline{X}-4)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=1.5E(\\overline{X})-4",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=1.5(20)-4=26",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "26\\ne20",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased for }\\mu.",
          "explanation": "The estimator is systematically shifted away from the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=26;\\ T\\text{ is not unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q018",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=10$ and variance $\\sigma^2=9$, an estimator is defined by $T=0.8\\overline{X}+2$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(0.8\\overline{X}+2)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=0.8E(\\overline{X})+2",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=0.8(10)+2=10",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "10=10",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased for }\\mu.",
          "explanation": "For this population mean, the estimator is centred exactly on the parameter.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=10;\\ T\\text{ is unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q019",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=30$ and variance $\\sigma^2=16$, an estimator is defined by $T=\\overline{X}-3$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(\\overline{X}-3)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=1E(\\overline{X})-3",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=1(30)-3=27",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "27\\ne30",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased for }\\mu.",
          "explanation": "The estimator is systematically shifted away from the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=27;\\ T\\text{ is not unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q020",
    "tags": [
      "linear-estimator",
      "bias",
      "expectation"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "For a random sample from a population with mean $\\mu=8$ and variance $\\sigma^2=25$, an estimator is defined by $T=2\\overline{X}+1$. Find $E(T)$ and state whether $T$ is unbiased for $\\mu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean of the sample mean",
          "workingLatex": "E(\\overline{X})=\\mu",
          "explanation": "The sample mean is centred on the population mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity of expectation",
          "workingLatex": "E(T)=E(2\\overline{X}+1)",
          "explanation": "Constants and multiples can be moved through expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the expression",
          "workingLatex": "E(T)=2E(\\overline{X})+1",
          "explanation": "This separates the random part from the fixed adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value of the mean",
          "workingLatex": "E(T)=2(8)+1=17",
          "explanation": "Using the given mean turns the expectation into a number.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the target parameter",
          "workingLatex": "17\\ne8",
          "explanation": "An estimator is unbiased only when its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased for }\\mu.",
          "explanation": "The estimator is systematically shifted away from the population mean.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(T)=17;\\ T\\text{ is not unbiased for }\\mu"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q021",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $4$ is taken from a population with variance $\\sigma^2=8$. Let $S_n^2=\\frac{1}{4}\\sum_{i=1}^{4}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{3}{4}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=8",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{3}{4}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{3}{4}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{4}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{8}{4}=-2",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{8}{4}=-2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q022",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $5$ is taken from a population with variance $\\sigma^2=12$. Let $S_n^2=\\frac{1}{5}\\sum_{i=1}^{5}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{4}{5}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=12",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{4}{5}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{4}{5}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{5}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{12}{5}=-2.4",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{12}{5}=-2.4"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q023",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $6$ is taken from a population with variance $\\sigma^2=18$. Let $S_n^2=\\frac{1}{6}\\sum_{i=1}^{6}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{5}{6}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=18",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{5}{6}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{5}{6}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{6}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{18}{6}=-3",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{18}{6}=-3"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q024",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $8$ is taken from a population with variance $\\sigma^2=24$. Let $S_n^2=\\frac{1}{8}\\sum_{i=1}^{8}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{7}{8}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=24",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{7}{8}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{7}{8}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{8}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{24}{8}=-3",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{24}{8}=-3"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q025",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $10$ is taken from a population with variance $\\sigma^2=30$. Let $S_n^2=\\frac{1}{10}\\sum_{i=1}^{10}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{9}{10}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=30",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{9}{10}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{9}{10}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{10}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{30}{10}=-3",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{30}{10}=-3"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q026",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $12$ is taken from a population with variance $\\sigma^2=36$. Let $S_n^2=\\frac{1}{12}\\sum_{i=1}^{12}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{11}{12}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=36",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{11}{12}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{11}{12}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{12}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{36}{12}=-3",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{36}{12}=-3"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q027",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $15$ is taken from a population with variance $\\sigma^2=45$. Let $S_n^2=\\frac{1}{15}\\sum_{i=1}^{15}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{14}{15}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=45",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{14}{15}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{14}{15}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{15}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{45}{15}=-3",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{45}{15}=-3"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q028",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $20$ is taken from a population with variance $\\sigma^2=60$. Let $S_n^2=\\frac{1}{20}\\sum_{i=1}^{20}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{19}{20}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=60",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{19}{20}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{19}{20}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{20}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{60}{20}=-3",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{60}{20}=-3"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q029",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $25$ is taken from a population with variance $\\sigma^2=75$. Let $S_n^2=\\frac{1}{25}\\sum_{i=1}^{25}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{24}{25}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=75",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{24}{25}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{24}{25}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{25}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{75}{25}=-3",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{75}{25}=-3"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q030",
    "tags": [
      "sample-variance",
      "bias",
      "variance-estimator"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A random sample of size $30$ is taken from a population with variance $\\sigma^2=90$. Let $S_n^2=\\frac{1}{30}\\sum_{i=1}^{30}(X_i-\\overline{X})^2$. Given that $E(S_n^2)=\\frac{29}{30}\\sigma^2$, find the bias of $S_n^2$ as an estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of bias",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias measures the systematic difference between the average estimator value and the target parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the target parameter",
          "workingLatex": "\\theta=\\sigma^2=90",
          "explanation": "Here the estimator is intended to estimate the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the given expectation",
          "workingLatex": "E(S_n^2)=\\frac{29}{30}\\sigma^2",
          "explanation": "The denominator $n$ version of sample variance is known to sit slightly below $\\sigma^2$ on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the target",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=\\frac{29}{30}\\sigma^2-\\sigma^2",
          "explanation": "Bias is found by comparing the estimator average with the true variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify algebraically",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{1}{30}\\sigma^2",
          "explanation": "Only one $n$th of the variance is missing on average.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the variance",
          "workingLatex": "\\operatorname{Bias}(S_n^2)=-\\frac{90}{30}=-3",
          "explanation": "The negative sign shows that the estimator underestimates the variance on average.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "S_n^2\\text{ is biased downward.}",
          "explanation": "A non-zero bias means the estimator is not unbiased.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(S_n^2)=-\\frac{90}{30}=-3"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q031",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $3$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{3}(X_i-\\overline{X})^2\\right)=(3-1)\\sigma^2$, show that $S^2=\\frac{1}{2}\\sum_{i=1}^{3}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{2}\\sum_{i=1}^{3}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{2}\\sum_{i=1}^{3}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{2}E\\left(\\sum_{i=1}^{3}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{2}(3-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{2}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q032",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $4$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{4}(X_i-\\overline{X})^2\\right)=(4-1)\\sigma^2$, show that $S^2=\\frac{1}{3}\\sum_{i=1}^{4}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{3}\\sum_{i=1}^{4}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{3}\\sum_{i=1}^{4}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{3}E\\left(\\sum_{i=1}^{4}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{3}(4-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{3}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q033",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $5$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{5}(X_i-\\overline{X})^2\\right)=(5-1)\\sigma^2$, show that $S^2=\\frac{1}{4}\\sum_{i=1}^{5}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{4}\\sum_{i=1}^{5}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{4}\\sum_{i=1}^{5}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{4}E\\left(\\sum_{i=1}^{5}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{4}(5-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{4}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q034",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $6$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{6}(X_i-\\overline{X})^2\\right)=(6-1)\\sigma^2$, show that $S^2=\\frac{1}{5}\\sum_{i=1}^{6}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{5}\\sum_{i=1}^{6}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{5}\\sum_{i=1}^{6}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{5}E\\left(\\sum_{i=1}^{6}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{5}(6-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{5}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q035",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $7$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{7}(X_i-\\overline{X})^2\\right)=(7-1)\\sigma^2$, show that $S^2=\\frac{1}{6}\\sum_{i=1}^{7}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{6}\\sum_{i=1}^{7}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{6}\\sum_{i=1}^{7}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{6}E\\left(\\sum_{i=1}^{7}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{6}(7-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{6}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q036",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $8$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{8}(X_i-\\overline{X})^2\\right)=(8-1)\\sigma^2$, show that $S^2=\\frac{1}{7}\\sum_{i=1}^{8}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{7}\\sum_{i=1}^{8}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{7}\\sum_{i=1}^{8}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{7}E\\left(\\sum_{i=1}^{8}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{7}(8-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{7}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q037",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $9$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{9}(X_i-\\overline{X})^2\\right)=(9-1)\\sigma^2$, show that $S^2=\\frac{1}{8}\\sum_{i=1}^{9}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{8}\\sum_{i=1}^{9}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{8}\\sum_{i=1}^{9}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{8}E\\left(\\sum_{i=1}^{9}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{8}(9-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{8}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q038",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $10$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{10}(X_i-\\overline{X})^2\\right)=(10-1)\\sigma^2$, show that $S^2=\\frac{1}{9}\\sum_{i=1}^{10}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{9}\\sum_{i=1}^{10}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{9}\\sum_{i=1}^{10}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{9}E\\left(\\sum_{i=1}^{10}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{9}(10-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{9}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q039",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $12$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{12}(X_i-\\overline{X})^2\\right)=(12-1)\\sigma^2$, show that $S^2=\\frac{1}{11}\\sum_{i=1}^{12}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{11}\\sum_{i=1}^{12}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{11}\\sum_{i=1}^{12}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{11}E\\left(\\sum_{i=1}^{12}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{11}(12-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{11}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q040",
    "tags": [
      "bessels-correction",
      "unbiased",
      "sample-variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "questionText": "A random sample of size $15$ is taken from a population with variance $\\sigma^2$. Given that $E\\left(\\sum_{i=1}^{15}(X_i-\\overline{X})^2\\right)=(15-1)\\sigma^2$, show that $S^2=\\frac{1}{14}\\sum_{i=1}^{15}(X_i-\\overline{X})^2$ is an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the estimator",
          "workingLatex": "S^2=\\frac{1}{14}\\sum_{i=1}^{15}(X_i-\\overline{X})^2",
          "explanation": "The factor outside the sum is fixed, so it can be taken outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take expectations",
          "workingLatex": "E(S^2)=E\\left(\\frac{1}{14}\\sum_{i=1}^{15}(X_i-\\overline{X})^2\\right)",
          "explanation": "To test unbiasedness, we look at the average value of the estimator over repeated samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move out the constant",
          "workingLatex": "E(S^2)=\\frac{1}{14}E\\left(\\sum_{i=1}^{15}(X_i-\\overline{X})^2\\right)",
          "explanation": "The denominator is not random, so it simply scales the expectation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the given identity",
          "workingLatex": "E(S^2)=\\frac{1}{14}(15-1)\\sigma^2",
          "explanation": "The sum of squared deviations from the sample mean has only $n-1$ independent pieces of information.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the factors",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The correction by $n-1$ exactly removes the downward bias.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the unbiasedness criterion",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The expected value matches the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2.",
          "explanation": "There is no systematic overestimate or underestimate after Bessel's correction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the correction",
          "workingLatex": "\\frac{1}{n-1}\\text{ replaces }\\frac{1}{n}",
          "explanation": "Using the sample mean costs one degree of freedom, so the divisor is reduced by one.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final statement",
          "workingLatex": "S^2=\\frac{1}{14}\\sum (X_i-\\overline{X})^2",
          "explanation": "This is the standard unbiased sample variance estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "E(S^2)=\\sigma^2,\\text{ so }S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q041",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=4$, $E(T_2)=\\theta$ and $\\operatorname{Var}(T_2)=9$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=\\theta",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is unbiased for }\\theta.",
          "explanation": "Both estimators can be compared by variance because both are unbiased.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=4,\\quad \\operatorname{Var}(T_2)=9",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_1\\text{ has the smaller variance.}",
          "explanation": "Among unbiased estimators, the one with smaller variance is more precise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_1\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Both are unbiased, but one is more efficient.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_1",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_1\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q042",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=16$, $E(T_2)=\\theta$ and $\\operatorname{Var}(T_2)=5$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=\\theta",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is unbiased for }\\theta.",
          "explanation": "Both estimators can be compared by variance because both are unbiased.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=16,\\quad \\operatorname{Var}(T_2)=5",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_2\\text{ has the smaller variance.}",
          "explanation": "Among unbiased estimators, the one with smaller variance is more precise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_2\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Both are unbiased, but one is more efficient.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_2",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_2\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q043",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=7$, $E(T_2)=\\theta+2$ and $\\operatorname{Var}(T_2)=7$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=\\theta+2",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is not unbiased for }\\theta.",
          "explanation": "A biased estimator is systematically shifted, so a smaller variance alone is not enough.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=7,\\quad \\operatorname{Var}(T_2)=7",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_1\\text{ should be preferred among unbiased estimators.}",
          "explanation": "Unbiasedness is usually required before choosing by precision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_1\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Bias rules out }T_2\\text{ for an unbiased-estimator comparison.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_1",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_1\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q044",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=12$, $E(T_2)=\\theta$ and $\\operatorname{Var}(T_2)=8$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=\\theta",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is unbiased for }\\theta.",
          "explanation": "Both estimators can be compared by variance because both are unbiased.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=12,\\quad \\operatorname{Var}(T_2)=8",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_2\\text{ has the smaller variance.}",
          "explanation": "Among unbiased estimators, the one with smaller variance is more precise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_2\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Both are unbiased, but one is more efficient.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_2",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_2\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q045",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=3$, $E(T_2)=\\theta-1$ and $\\operatorname{Var}(T_2)=10$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=\\theta-1",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is not unbiased for }\\theta.",
          "explanation": "A biased estimator is systematically shifted, so a smaller variance alone is not enough.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=3,\\quad \\operatorname{Var}(T_2)=10",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_1\\text{ should be preferred among unbiased estimators.}",
          "explanation": "Unbiasedness is usually required before choosing by precision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_1\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Bias rules out }T_2\\text{ for an unbiased-estimator comparison.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_1",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_1\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q046",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=25$, $E(T_2)=\\theta$ and $\\operatorname{Var}(T_2)=18$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=\\theta",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is unbiased for }\\theta.",
          "explanation": "Both estimators can be compared by variance because both are unbiased.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=25,\\quad \\operatorname{Var}(T_2)=18",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_2\\text{ has the smaller variance.}",
          "explanation": "Among unbiased estimators, the one with smaller variance is more precise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_2\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Both are unbiased, but one is more efficient.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_2",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_2\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q047",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=2$, $E(T_2)=\\theta$ and $\\operatorname{Var}(T_2)=6$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=\\theta",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is unbiased for }\\theta.",
          "explanation": "Both estimators can be compared by variance because both are unbiased.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=2,\\quad \\operatorname{Var}(T_2)=6",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_1\\text{ has the smaller variance.}",
          "explanation": "Among unbiased estimators, the one with smaller variance is more precise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_1\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Both are unbiased, but one is more efficient.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_1",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_1\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q048",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=11$, $E(T_2)=0.9\\theta$ and $\\operatorname{Var}(T_2)=4$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=0.9\\theta",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is not unbiased for }\\theta.",
          "explanation": "A biased estimator is systematically shifted, so a smaller variance alone is not enough.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=11,\\quad \\operatorname{Var}(T_2)=4",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_1\\text{ should be preferred among unbiased estimators.}",
          "explanation": "Unbiasedness is usually required before choosing by precision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_1\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Bias rules out }T_2\\text{ for an unbiased-estimator comparison.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_1",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_1\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q049",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=13$, $E(T_2)=\\theta$ and $\\operatorname{Var}(T_2)=20$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=\\theta",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is unbiased for }\\theta.",
          "explanation": "Both estimators can be compared by variance because both are unbiased.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=13,\\quad \\operatorname{Var}(T_2)=20",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_1\\text{ has the smaller variance.}",
          "explanation": "Among unbiased estimators, the one with smaller variance is more precise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_1\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Both are unbiased, but one is more efficient.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_1",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_1\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q050",
    "tags": [
      "efficiency",
      "estimator-comparison",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "text",
    "questionText": "Two estimators $T_1$ and $T_2$ are proposed for a parameter $\\theta$. They have $E(T_1)=\\theta$, $\\operatorname{Var}(T_1)=9$, $E(T_2)=\\theta$ and $\\operatorname{Var}(T_2)=3$. Decide which estimator should be preferred, giving a reason.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the expectation of the first estimator",
          "workingLatex": "E(T_1)=\\theta",
          "explanation": "An estimator must be centred on the target parameter before variance is used as the main comparison.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the first estimator",
          "workingLatex": "T_1\\text{ is unbiased for }\\theta.",
          "explanation": "Its expected value equals the parameter being estimated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the expectation of the second estimator",
          "workingLatex": "E(T_2)=\\theta",
          "explanation": "We now check whether the second estimator is also centred correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the second estimator",
          "workingLatex": "T_2\\text{ is unbiased for }\\theta.",
          "explanation": "Both estimators can be compared by variance because both are unbiased.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare variances where appropriate",
          "workingLatex": "\\operatorname{Var}(T_1)=9,\\quad \\operatorname{Var}(T_2)=3",
          "explanation": "Variance measures how variable the estimator is from sample to sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the better estimator",
          "workingLatex": "T_2\\text{ has the smaller variance.}",
          "explanation": "Among unbiased estimators, the one with smaller variance is more precise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final conclusion",
          "workingLatex": "T_2\\text{ is preferred.}",
          "explanation": "The preferred estimator is the one that is unbiased and, if possible, has lower variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain in words",
          "workingLatex": "\\text{Both are unbiased, but one is more efficient.}",
          "explanation": "This connects the calculation to the statistical meaning of the choice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T_2",
          "explanation": "The answer follows from the unbiasedness and variance checks.",
          "diagram": null
        }
      ],
      "finalAnswer": "T_2\\text{ is preferred}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q051",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_2$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=0.5X_1+0.5X_2$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(0.5X_1+0.5X_2)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=0.5E(X_1)+0.5E(X_2)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(0.5+0.5)\\mu=1\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "1\\mu=\\mu",
          "explanation": "The weights sum to one, so the estimator is centred on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(0.5^2+0.5^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.5\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased; }\\operatorname{Var}(T)=0.5\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=\\mu,\\quad \\operatorname{Var}(T)=0.5\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is unbiased},\\quad \\operatorname{Var}(T)=0.5\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q052",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_2$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=0.25X_1+0.75X_2$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(0.25X_1+0.75X_2)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=0.25E(X_1)+0.75E(X_2)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(0.25+0.75)\\mu=1\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "1\\mu=\\mu",
          "explanation": "The weights sum to one, so the estimator is centred on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(0.25^2+0.75^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.625\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased; }\\operatorname{Var}(T)=0.625\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=\\mu,\\quad \\operatorname{Var}(T)=0.625\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is unbiased},\\quad \\operatorname{Var}(T)=0.625\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q053",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_3$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=0.2X_1+0.3X_2+0.5X_3$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(0.2X_1+0.3X_2+0.5X_3)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=0.2E(X_1)+0.3E(X_2)+0.5E(X_3)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(0.2+0.3+0.5)\\mu=1\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "1\\mu=\\mu",
          "explanation": "The weights sum to one, so the estimator is centred on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(0.2^2+0.3^2+0.5^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.38\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased; }\\operatorname{Var}(T)=0.38\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=\\mu,\\quad \\operatorname{Var}(T)=0.38\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is unbiased},\\quad \\operatorname{Var}(T)=0.38\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q054",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_3$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=0.4X_1+0.4X_2+0.2X_3$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(0.4X_1+0.4X_2+0.2X_3)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=0.4E(X_1)+0.4E(X_2)+0.2E(X_3)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(0.4+0.4+0.2)\\mu=1\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "1\\mu=\\mu",
          "explanation": "The weights sum to one, so the estimator is centred on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(0.4^2+0.4^2+0.2^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.3600000000000001\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased; }\\operatorname{Var}(T)=0.3600000000000001\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=\\mu,\\quad \\operatorname{Var}(T)=0.3600000000000001\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is unbiased},\\quad \\operatorname{Var}(T)=0.3600000000000001\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q055",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_3$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=0.6X_1+0.2X_2+0.2X_3$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(0.6X_1+0.2X_2+0.2X_3)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=0.6E(X_1)+0.2E(X_2)+0.2E(X_3)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(0.6+0.2+0.2)\\mu=1\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "1\\mu=\\mu",
          "explanation": "The weights sum to one, so the estimator is centred on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(0.6^2+0.2^2+0.2^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.44000000000000006\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased; }\\operatorname{Var}(T)=0.44000000000000006\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=\\mu,\\quad \\operatorname{Var}(T)=0.44000000000000006\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is unbiased},\\quad \\operatorname{Var}(T)=0.44000000000000006\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q056",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_3$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=0.5X_1+0.25X_2+0.25X_3$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(0.5X_1+0.25X_2+0.25X_3)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=0.5E(X_1)+0.25E(X_2)+0.25E(X_3)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(0.5+0.25+0.25)\\mu=1\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "1\\mu=\\mu",
          "explanation": "The weights sum to one, so the estimator is centred on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(0.5^2+0.25^2+0.25^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.375\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased; }\\operatorname{Var}(T)=0.375\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=\\mu,\\quad \\operatorname{Var}(T)=0.375\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is unbiased},\\quad \\operatorname{Var}(T)=0.375\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q057",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_3$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=-0.2X_1+0.6X_2+0.6X_3$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(-0.2X_1+0.6X_2+0.6X_3)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=-0.2E(X_1)+0.6E(X_2)+0.6E(X_3)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(-0.2+0.6+0.6)\\mu=1\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "1\\mu=\\mu",
          "explanation": "The weights sum to one, so the estimator is centred on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(-0.2^2+0.6^2+0.6^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.76\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased; }\\operatorname{Var}(T)=0.76\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=\\mu,\\quad \\operatorname{Var}(T)=0.76\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is unbiased},\\quad \\operatorname{Var}(T)=0.76\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q058",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_4$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=0.1X_1+0.2X_2+0.3X_3+0.4X_4$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(0.1X_1+0.2X_2+0.3X_3+0.4X_4)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=0.1E(X_1)+0.2E(X_2)+0.3E(X_3)+0.4E(X_4)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(0.1+0.2+0.3+0.4)\\mu=1\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "1\\mu=\\mu",
          "explanation": "The weights sum to one, so the estimator is centred on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(0.1^2+0.2^2+0.3^2+0.4^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.30000000000000004\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is unbiased; }\\operatorname{Var}(T)=0.30000000000000004\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=\\mu,\\quad \\operatorname{Var}(T)=0.30000000000000004\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is unbiased},\\quad \\operatorname{Var}(T)=0.30000000000000004\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q059",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_3$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=0.7X_1+0.1X_2+0.1X_3$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(0.7X_1+0.1X_2+0.1X_3)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=0.7E(X_1)+0.1E(X_2)+0.1E(X_3)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(0.7+0.1+0.1)\\mu=0.8999999999999999\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "0.8999999999999999\\mu\\ne\\mu",
          "explanation": "The weights do not sum to one, so the estimator is systematically scaled.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(0.7^2+0.1^2+0.1^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.5099999999999999\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased; }\\operatorname{Var}(T)=0.5099999999999999\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=0.8999999999999999\\mu,\\quad \\operatorname{Var}(T)=0.5099999999999999\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is not unbiased},\\quad \\operatorname{Var}(T)=0.5099999999999999\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q060",
    "tags": [
      "weighted-estimator",
      "linear-combination",
      "variance"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "questionText": "Let $X_1,X_2,\\ldots,X_3$ be independent observations from a population with mean $\\mu$ and variance $\\sigma^2$. The estimator $T=0.3X_1+0.3X_2+0.3X_3$ is proposed for $\\mu$. Determine whether $T$ is unbiased and find $\\operatorname{Var}(T)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use linearity of expectation",
          "workingLatex": "E(T)=E(0.3X_1+0.3X_2+0.3X_3)",
          "explanation": "A weighted estimator is handled by applying expectation to each weighted observation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move constants outside expectation",
          "workingLatex": "E(T)=0.3E(X_1)+0.3E(X_2)+0.3E(X_3)",
          "explanation": "The weights are fixed numbers, not random variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(0.3+0.3+0.3)\\mu=0.8999999999999999\\mu",
          "explanation": "Each observation has the same mean, so the weights add together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check unbiasedness",
          "workingLatex": "0.8999999999999999\\mu\\ne\\mu",
          "explanation": "The weights do not sum to one, so the estimator is systematically scaled.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use independence for variance",
          "workingLatex": "\\operatorname{Var}(T)=\\sum a_i^2\\operatorname{Var}(X_i)",
          "explanation": "For independent observations, variances add, but the weights are squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the weights",
          "workingLatex": "\\operatorname{Var}(T)=(0.3^2+0.3^2+0.3^2)\\sigma^2",
          "explanation": "Squaring the coefficients shows how each observation contributes to variability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the variance",
          "workingLatex": "\\operatorname{Var}(T)=0.27\\sigma^2",
          "explanation": "The sum of squared weights gives the multiplier on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "T\\text{ is not unbiased; }\\operatorname{Var}(T)=0.27\\sigma^2.",
          "explanation": "This gives both the centring and the precision of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "E(T)=0.8999999999999999\\mu,\\quad \\operatorname{Var}(T)=0.27\\sigma^2",
          "explanation": "Both expectation and variance are needed to assess the estimator.",
          "diagram": null
        }
      ],
      "finalAnswer": "T\\text{ is not unbiased},\\quad \\operatorname{Var}(T)=0.27\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q061",
    "tags": [
      "unbiased-condition",
      "linear-estimator",
      "solve-parameter"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "For independent observations $X_1$ and $X_2$ from a population with mean $\\mu$, an estimator of $\\mu$ is $T=aX_1+0.2X_2$. Find the value of $a$ for which $T$ is unbiased. Then find $\\operatorname{Var}(T)$ in terms of $\\sigma^2$ when $\\operatorname{Var}(X_i)=\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expectation of the estimator",
          "workingLatex": "E(T)=E(aX_1+0.2X_2)",
          "explanation": "Unbiasedness is determined by the expected value of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity",
          "workingLatex": "E(T)=aE(X_1)+0.2E(X_2)",
          "explanation": "The coefficients scale the expectations of the two observations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(a+0.2)\\mu",
          "explanation": "Both observations have mean $\\mu$, so the coefficients add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the coefficient equal to one",
          "workingLatex": "a+0.2=1",
          "explanation": "For the expectation to equal $\\mu$ for any value of $\\mu$, the total weight must be one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the missing coefficient",
          "workingLatex": "a=0.8",
          "explanation": "This is the weight that centres the estimator on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance formula",
          "workingLatex": "\\operatorname{Var}(T)=a^2\\sigma^2+0.2^2\\sigma^2",
          "explanation": "Independence means there is no covariance term, and coefficients are squared in variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coefficient",
          "workingLatex": "\\operatorname{Var}(T)=(0.8)^2\\sigma^2+0.2^2\\sigma^2",
          "explanation": "Now the estimator is fixed, so its precision can be calculated.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "\\operatorname{Var}(T)=0.68\\sigma^2",
          "explanation": "The smaller this multiplier, the more precise the unbiased estimator is.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a=0.8,\\quad \\operatorname{Var}(T)=0.68\\sigma^2",
          "explanation": "This gives the unbiased coefficient and the resulting variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "a=0.8,\\quad \\operatorname{Var}(T)=0.68\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q062",
    "tags": [
      "unbiased-condition",
      "linear-estimator",
      "solve-parameter"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "For independent observations $X_1$ and $X_2$ from a population with mean $\\mu$, an estimator of $\\mu$ is $T=aX_1+0.35X_2$. Find the value of $a$ for which $T$ is unbiased. Then find $\\operatorname{Var}(T)$ in terms of $\\sigma^2$ when $\\operatorname{Var}(X_i)=\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expectation of the estimator",
          "workingLatex": "E(T)=E(aX_1+0.35X_2)",
          "explanation": "Unbiasedness is determined by the expected value of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity",
          "workingLatex": "E(T)=aE(X_1)+0.35E(X_2)",
          "explanation": "The coefficients scale the expectations of the two observations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(a+0.35)\\mu",
          "explanation": "Both observations have mean $\\mu$, so the coefficients add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the coefficient equal to one",
          "workingLatex": "a+0.35=1",
          "explanation": "For the expectation to equal $\\mu$ for any value of $\\mu$, the total weight must be one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the missing coefficient",
          "workingLatex": "a=0.65",
          "explanation": "This is the weight that centres the estimator on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance formula",
          "workingLatex": "\\operatorname{Var}(T)=a^2\\sigma^2+0.35^2\\sigma^2",
          "explanation": "Independence means there is no covariance term, and coefficients are squared in variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coefficient",
          "workingLatex": "\\operatorname{Var}(T)=(0.65)^2\\sigma^2+0.35^2\\sigma^2",
          "explanation": "Now the estimator is fixed, so its precision can be calculated.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "\\operatorname{Var}(T)=0.545\\sigma^2",
          "explanation": "The smaller this multiplier, the more precise the unbiased estimator is.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a=0.65,\\quad \\operatorname{Var}(T)=0.545\\sigma^2",
          "explanation": "This gives the unbiased coefficient and the resulting variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "a=0.65,\\quad \\operatorname{Var}(T)=0.545\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q063",
    "tags": [
      "unbiased-condition",
      "linear-estimator",
      "solve-parameter"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "For independent observations $X_1$ and $X_2$ from a population with mean $\\mu$, an estimator of $\\mu$ is $T=aX_1+0.6X_2$. Find the value of $a$ for which $T$ is unbiased. Then find $\\operatorname{Var}(T)$ in terms of $\\sigma^2$ when $\\operatorname{Var}(X_i)=\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expectation of the estimator",
          "workingLatex": "E(T)=E(aX_1+0.6X_2)",
          "explanation": "Unbiasedness is determined by the expected value of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity",
          "workingLatex": "E(T)=aE(X_1)+0.6E(X_2)",
          "explanation": "The coefficients scale the expectations of the two observations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(a+0.6)\\mu",
          "explanation": "Both observations have mean $\\mu$, so the coefficients add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the coefficient equal to one",
          "workingLatex": "a+0.6=1",
          "explanation": "For the expectation to equal $\\mu$ for any value of $\\mu$, the total weight must be one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the missing coefficient",
          "workingLatex": "a=0.4",
          "explanation": "This is the weight that centres the estimator on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance formula",
          "workingLatex": "\\operatorname{Var}(T)=a^2\\sigma^2+0.6^2\\sigma^2",
          "explanation": "Independence means there is no covariance term, and coefficients are squared in variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coefficient",
          "workingLatex": "\\operatorname{Var}(T)=(0.4)^2\\sigma^2+0.6^2\\sigma^2",
          "explanation": "Now the estimator is fixed, so its precision can be calculated.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "\\operatorname{Var}(T)=0.52\\sigma^2",
          "explanation": "The smaller this multiplier, the more precise the unbiased estimator is.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a=0.4,\\quad \\operatorname{Var}(T)=0.52\\sigma^2",
          "explanation": "This gives the unbiased coefficient and the resulting variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "a=0.4,\\quad \\operatorname{Var}(T)=0.52\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q064",
    "tags": [
      "unbiased-condition",
      "linear-estimator",
      "solve-parameter"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "For independent observations $X_1$ and $X_2$ from a population with mean $\\mu$, an estimator of $\\mu$ is $T=aX_1+-0.25X_2$. Find the value of $a$ for which $T$ is unbiased. Then find $\\operatorname{Var}(T)$ in terms of $\\sigma^2$ when $\\operatorname{Var}(X_i)=\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expectation of the estimator",
          "workingLatex": "E(T)=E(aX_1+-0.25X_2)",
          "explanation": "Unbiasedness is determined by the expected value of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity",
          "workingLatex": "E(T)=aE(X_1)+-0.25E(X_2)",
          "explanation": "The coefficients scale the expectations of the two observations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(a+-0.25)\\mu",
          "explanation": "Both observations have mean $\\mu$, so the coefficients add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the coefficient equal to one",
          "workingLatex": "a+-0.25=1",
          "explanation": "For the expectation to equal $\\mu$ for any value of $\\mu$, the total weight must be one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the missing coefficient",
          "workingLatex": "a=1.25",
          "explanation": "This is the weight that centres the estimator on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance formula",
          "workingLatex": "\\operatorname{Var}(T)=a^2\\sigma^2+-0.25^2\\sigma^2",
          "explanation": "Independence means there is no covariance term, and coefficients are squared in variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coefficient",
          "workingLatex": "\\operatorname{Var}(T)=(1.25)^2\\sigma^2+-0.25^2\\sigma^2",
          "explanation": "Now the estimator is fixed, so its precision can be calculated.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "\\operatorname{Var}(T)=1.625\\sigma^2",
          "explanation": "The smaller this multiplier, the more precise the unbiased estimator is.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a=1.25,\\quad \\operatorname{Var}(T)=1.625\\sigma^2",
          "explanation": "This gives the unbiased coefficient and the resulting variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "a=1.25,\\quad \\operatorname{Var}(T)=1.625\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q065",
    "tags": [
      "unbiased-condition",
      "linear-estimator",
      "solve-parameter"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "For independent observations $X_1$ and $X_2$ from a population with mean $\\mu$, an estimator of $\\mu$ is $T=aX_1+0.75X_2$. Find the value of $a$ for which $T$ is unbiased. Then find $\\operatorname{Var}(T)$ in terms of $\\sigma^2$ when $\\operatorname{Var}(X_i)=\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the expectation of the estimator",
          "workingLatex": "E(T)=E(aX_1+0.75X_2)",
          "explanation": "Unbiasedness is determined by the expected value of the estimator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply linearity",
          "workingLatex": "E(T)=aE(X_1)+0.75E(X_2)",
          "explanation": "The coefficients scale the expectations of the two observations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the common mean",
          "workingLatex": "E(T)=(a+0.75)\\mu",
          "explanation": "Both observations have mean $\\mu$, so the coefficients add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the coefficient equal to one",
          "workingLatex": "a+0.75=1",
          "explanation": "For the expectation to equal $\\mu$ for any value of $\\mu$, the total weight must be one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the missing coefficient",
          "workingLatex": "a=0.25",
          "explanation": "This is the weight that centres the estimator on $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the variance formula",
          "workingLatex": "\\operatorname{Var}(T)=a^2\\sigma^2+0.75^2\\sigma^2",
          "explanation": "Independence means there is no covariance term, and coefficients are squared in variance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coefficient",
          "workingLatex": "\\operatorname{Var}(T)=(0.25)^2\\sigma^2+0.75^2\\sigma^2",
          "explanation": "Now the estimator is fixed, so its precision can be calculated.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "\\operatorname{Var}(T)=0.625\\sigma^2",
          "explanation": "The smaller this multiplier, the more precise the unbiased estimator is.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "a=0.25,\\quad \\operatorname{Var}(T)=0.625\\sigma^2",
          "explanation": "This gives the unbiased coefficient and the resulting variance.",
          "diagram": null
        }
      ],
      "finalAnswer": "a=0.25,\\quad \\operatorname{Var}(T)=0.625\\sigma^2"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q066",
    "tags": [
      "variance-identity",
      "sample-variance",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "questionText": "Let $X_1,\\ldots,X_4$ be a random sample from a population with mean $\\mu$ and variance $\\sigma^2$. Prove that $E\\left(\\sum_{i=1}^{4}(X_i-\\overline{X})^2\\right)=(4-1)\\sigma^2$, and hence explain why division by $3$ gives an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the decomposition of deviations",
          "workingLatex": "X_i-\\overline{X}=(X_i-\\mu)-(\\overline{X}-\\mu)",
          "explanation": "Writing deviations from the true mean separates population variation from sample-mean variation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sum of squares identity",
          "workingLatex": "\\sum (X_i-\\overline{X})^2=\\sum (X_i-\\mu)^2-4(\\overline{X}-\\mu)^2",
          "explanation": "The cross term cancels because the deviations from the sample mean sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations of both sides",
          "workingLatex": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=E\\left(\\sum (X_i-\\mu)^2\\right)-4E((\\overline{X}-\\mu)^2)",
          "explanation": "Expectation turns the identity into a statement about average sums of squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the first expectation",
          "workingLatex": "E\\left(\\sum (X_i-\\mu)^2\\right)=4\\sigma^2",
          "explanation": "Each squared deviation from the true mean has expectation equal to the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sample mean term",
          "workingLatex": "E((\\overline{X}-\\mu)^2)=\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{4}",
          "explanation": "The sample mean has variance $\\sigma^2/n$ because it averages independent observations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the identity",
          "workingLatex": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=4\\sigma^2-4\\cdot\\frac{\\sigma^2}{4}",
          "explanation": "The correction subtracts the variation used up by estimating the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=(4-1)\\sigma^2",
          "explanation": "One degree of freedom is lost because the sample deviations must sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the corrected estimator",
          "workingLatex": "S^2=\\frac{1}{3}\\sum (X_i-\\overline{X})^2",
          "explanation": "Dividing by $n-1$ is chosen to match the expectation just found.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take its expectation",
          "workingLatex": "E(S^2)=\\frac{1}{3}(4-1)\\sigma^2",
          "explanation": "The constant divisor comes outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cancel",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The estimator is centred exactly on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude unbiasedness",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2",
          "explanation": "This proves why Bessel's correction is needed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final statement",
          "workingLatex": "\\frac{1}{n-1}\\sum (X_i-\\overline{X})^2",
          "explanation": "The general unbiased sample variance uses $n-1$ rather than $n$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpretation",
          "workingLatex": "n-1\\text{ degrees of freedom remain}",
          "explanation": "After the sample mean is fixed, only $n-1$ deviations can vary freely.",
          "diagram": null
        }
      ],
      "finalAnswer": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=(4-1)\\sigma^2,\\quad S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q067",
    "tags": [
      "variance-identity",
      "sample-variance",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "questionText": "Let $X_1,\\ldots,X_6$ be a random sample from a population with mean $\\mu$ and variance $\\sigma^2$. Prove that $E\\left(\\sum_{i=1}^{6}(X_i-\\overline{X})^2\\right)=(6-1)\\sigma^2$, and hence explain why division by $5$ gives an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the decomposition of deviations",
          "workingLatex": "X_i-\\overline{X}=(X_i-\\mu)-(\\overline{X}-\\mu)",
          "explanation": "Writing deviations from the true mean separates population variation from sample-mean variation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sum of squares identity",
          "workingLatex": "\\sum (X_i-\\overline{X})^2=\\sum (X_i-\\mu)^2-6(\\overline{X}-\\mu)^2",
          "explanation": "The cross term cancels because the deviations from the sample mean sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations of both sides",
          "workingLatex": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=E\\left(\\sum (X_i-\\mu)^2\\right)-6E((\\overline{X}-\\mu)^2)",
          "explanation": "Expectation turns the identity into a statement about average sums of squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the first expectation",
          "workingLatex": "E\\left(\\sum (X_i-\\mu)^2\\right)=6\\sigma^2",
          "explanation": "Each squared deviation from the true mean has expectation equal to the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sample mean term",
          "workingLatex": "E((\\overline{X}-\\mu)^2)=\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{6}",
          "explanation": "The sample mean has variance $\\sigma^2/n$ because it averages independent observations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the identity",
          "workingLatex": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=6\\sigma^2-6\\cdot\\frac{\\sigma^2}{6}",
          "explanation": "The correction subtracts the variation used up by estimating the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=(6-1)\\sigma^2",
          "explanation": "One degree of freedom is lost because the sample deviations must sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the corrected estimator",
          "workingLatex": "S^2=\\frac{1}{5}\\sum (X_i-\\overline{X})^2",
          "explanation": "Dividing by $n-1$ is chosen to match the expectation just found.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take its expectation",
          "workingLatex": "E(S^2)=\\frac{1}{5}(6-1)\\sigma^2",
          "explanation": "The constant divisor comes outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cancel",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The estimator is centred exactly on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude unbiasedness",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2",
          "explanation": "This proves why Bessel's correction is needed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final statement",
          "workingLatex": "\\frac{1}{n-1}\\sum (X_i-\\overline{X})^2",
          "explanation": "The general unbiased sample variance uses $n-1$ rather than $n$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpretation",
          "workingLatex": "n-1\\text{ degrees of freedom remain}",
          "explanation": "After the sample mean is fixed, only $n-1$ deviations can vary freely.",
          "diagram": null
        }
      ],
      "finalAnswer": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=(6-1)\\sigma^2,\\quad S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q068",
    "tags": [
      "variance-identity",
      "sample-variance",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "questionText": "Let $X_1,\\ldots,X_8$ be a random sample from a population with mean $\\mu$ and variance $\\sigma^2$. Prove that $E\\left(\\sum_{i=1}^{8}(X_i-\\overline{X})^2\\right)=(8-1)\\sigma^2$, and hence explain why division by $7$ gives an unbiased estimator of $\\sigma^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the decomposition of deviations",
          "workingLatex": "X_i-\\overline{X}=(X_i-\\mu)-(\\overline{X}-\\mu)",
          "explanation": "Writing deviations from the true mean separates population variation from sample-mean variation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sum of squares identity",
          "workingLatex": "\\sum (X_i-\\overline{X})^2=\\sum (X_i-\\mu)^2-8(\\overline{X}-\\mu)^2",
          "explanation": "The cross term cancels because the deviations from the sample mean sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take expectations of both sides",
          "workingLatex": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=E\\left(\\sum (X_i-\\mu)^2\\right)-8E((\\overline{X}-\\mu)^2)",
          "explanation": "Expectation turns the identity into a statement about average sums of squares.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the first expectation",
          "workingLatex": "E\\left(\\sum (X_i-\\mu)^2\\right)=8\\sigma^2",
          "explanation": "Each squared deviation from the true mean has expectation equal to the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sample mean term",
          "workingLatex": "E((\\overline{X}-\\mu)^2)=\\operatorname{Var}(\\overline{X})=\\frac{\\sigma^2}{8}",
          "explanation": "The sample mean has variance $\\sigma^2/n$ because it averages independent observations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the identity",
          "workingLatex": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=8\\sigma^2-8\\cdot\\frac{\\sigma^2}{8}",
          "explanation": "The correction subtracts the variation used up by estimating the mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=(8-1)\\sigma^2",
          "explanation": "One degree of freedom is lost because the sample deviations must sum to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Define the corrected estimator",
          "workingLatex": "S^2=\\frac{1}{7}\\sum (X_i-\\overline{X})^2",
          "explanation": "Dividing by $n-1$ is chosen to match the expectation just found.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take its expectation",
          "workingLatex": "E(S^2)=\\frac{1}{7}(8-1)\\sigma^2",
          "explanation": "The constant divisor comes outside expectation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cancel",
          "workingLatex": "E(S^2)=\\sigma^2",
          "explanation": "The estimator is centred exactly on the population variance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude unbiasedness",
          "workingLatex": "S^2\\text{ is unbiased for }\\sigma^2",
          "explanation": "This proves why Bessel's correction is needed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Final statement",
          "workingLatex": "\\frac{1}{n-1}\\sum (X_i-\\overline{X})^2",
          "explanation": "The general unbiased sample variance uses $n-1$ rather than $n$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpretation",
          "workingLatex": "n-1\\text{ degrees of freedom remain}",
          "explanation": "After the sample mean is fixed, only $n-1$ deviations can vary freely.",
          "diagram": null
        }
      ],
      "finalAnswer": "E\\left(\\sum (X_i-\\overline{X})^2\\right)=(8-1)\\sigma^2,\\quad S^2\\text{ is unbiased}"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q069",
    "tags": [
      "bias",
      "mean-square-error",
      "estimator-comparison"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "An estimator $T$ of a parameter $\\theta$ has $E(T)=\\theta+2$ and $\\operatorname{Var}(T)=9$. Find the bias and the mean square error $E((T-\\theta)^2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the bias formula",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias is the average error of the estimator relative to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the expectation",
          "workingLatex": "\\operatorname{Bias}(T)=(\\theta+2)-\\theta",
          "explanation": "The parameter terms cancel, leaving the systematic shift.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the bias",
          "workingLatex": "\\operatorname{Bias}(T)=2",
          "explanation": "This is the signed amount by which the estimator is high on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the MSE decomposition",
          "workingLatex": "E((T-\\theta)^2)=\\operatorname{Var}(T)+\\operatorname{Bias}(T)^2",
          "explanation": "Mean square error combines spread around the estimator's mean with squared systematic error.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\operatorname{MSE}(T)=9+(2)^2",
          "explanation": "The bias is squared because positive and negative systematic shifts both increase squared error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the square",
          "workingLatex": "(2)^2=4",
          "explanation": "Squaring measures the size of the systematic error without its direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the components",
          "workingLatex": "\\operatorname{MSE}(T)=13",
          "explanation": "The total expected squared error includes both random variation and bias.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{MSE} = \\text{variance} + \\text{squared bias}",
          "explanation": "An estimator with small variance can still have a large MSE if its bias is large.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\operatorname{Bias}(T)=2,\\quad \\operatorname{MSE}(T)=13",
          "explanation": "This reports both the signed bias and the overall squared-error performance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion",
          "workingLatex": "T\\text{ is biased unless }2=0",
          "explanation": "A non-zero bias means it is not an unbiased estimator of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check units",
          "workingLatex": "\\operatorname{MSE}(T)\\text{ is in squared units of }\\theta",
          "explanation": "This is why MSE is not compared directly with bias without considering scale.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use in comparison",
          "workingLatex": "\\text{Prefer smaller MSE when allowing biased estimators.}",
          "explanation": "MSE is useful when biased and unbiased estimators are being compared together.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer stated clearly",
          "workingLatex": "13",
          "explanation": "The numeric MSE completes the calculation.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(T)=2,\\quad \\operatorname{MSE}(T)=13"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Statistics (Further Statistics 2)",
    "subtopic": "Unbiased estimators",
    "subtopicId": "fm.y2.stats.unbiased-estimators",
    "questionDiagram": null,
    "id": "fm.y2.stats.unbiased-estimators.q070",
    "tags": [
      "bias",
      "mean-square-error",
      "estimator-comparison"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "questionText": "An estimator $T$ of a parameter $\\theta$ has $E(T)=\\theta+-3$ and $\\operatorname{Var}(T)=16$. Find the bias and the mean square error $E((T-\\theta)^2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the bias formula",
          "workingLatex": "\\operatorname{Bias}(T)=E(T)-\\theta",
          "explanation": "Bias is the average error of the estimator relative to the parameter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the expectation",
          "workingLatex": "\\operatorname{Bias}(T)=(\\theta+-3)-\\theta",
          "explanation": "The parameter terms cancel, leaving the systematic shift.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the bias",
          "workingLatex": "\\operatorname{Bias}(T)=-3",
          "explanation": "This is the signed amount by which the estimator is high on average.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the MSE decomposition",
          "workingLatex": "E((T-\\theta)^2)=\\operatorname{Var}(T)+\\operatorname{Bias}(T)^2",
          "explanation": "Mean square error combines spread around the estimator's mean with squared systematic error.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\operatorname{MSE}(T)=16+(-3)^2",
          "explanation": "The bias is squared because positive and negative systematic shifts both increase squared error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the square",
          "workingLatex": "(-3)^2=9",
          "explanation": "Squaring measures the size of the systematic error without its direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the components",
          "workingLatex": "\\operatorname{MSE}(T)=25",
          "explanation": "The total expected squared error includes both random variation and bias.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{MSE} = \\text{variance} + \\text{squared bias}",
          "explanation": "An estimator with small variance can still have a large MSE if its bias is large.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "\\operatorname{Bias}(T)=-3,\\quad \\operatorname{MSE}(T)=25",
          "explanation": "This reports both the signed bias and the overall squared-error performance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion",
          "workingLatex": "T\\text{ is biased unless }-3=0",
          "explanation": "A non-zero bias means it is not an unbiased estimator of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check units",
          "workingLatex": "\\operatorname{MSE}(T)\\text{ is in squared units of }\\theta",
          "explanation": "This is why MSE is not compared directly with bias without considering scale.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use in comparison",
          "workingLatex": "\\text{Prefer smaller MSE when allowing biased estimators.}",
          "explanation": "MSE is useful when biased and unbiased estimators are being compared together.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer stated clearly",
          "workingLatex": "25",
          "explanation": "The numeric MSE completes the calculation.",
          "diagram": null
        }
      ],
      "finalAnswer": "\\operatorname{Bias}(T)=-3,\\quad \\operatorname{MSE}(T)=25"
    }
  }
];
