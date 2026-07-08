import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q001",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "central-limit",
      "statement",
      "definition"
    ],
    "questionText": "Waiting times at a clinic are modelled by a random variable $X$. State the approximate distribution of the sample mean $\\overline{X}$ for large $n$, according to the central limit theorem.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "For large $n$, the sample mean is approximately normal even if $X$ is not.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what is required",
          "workingLatex": "\\text{mean }\\mu,\\;\\text{variance }\\sigma^2,\\;\\text{sample size }n",
          "explanation": "The limiting distribution needs the parent mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conditions",
          "workingLatex": "X_i \\text{ i.i.d.},\\; n \\text{ large}",
          "explanation": "Independent identical draws; typically $n\\geq 30$ is treated as large in exam contexts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Parent need not be normal",
          "workingLatex": "X \\text{ any distribution with finite }\\mu,\\sigma^2",
          "explanation": "The power of the CLT is that normality of $X$ is not required.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State for sample mean",
          "workingLatex": "\\overline{X} \\xrightarrow{d} N(\\mu,\\sigma^2/n)",
          "explanation": "Distributional convergence of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overline{X} \\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Write the approximate distribution clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "By the CLT, for large $n$, $\\overline{X} \\approx N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)$, where $\\mu=\\operatorname{E}(X)$ and $\\sigma^2=\\operatorname{Var}(X)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q002",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "central-limit",
      "statement",
      "definition"
    ],
    "questionText": "Daily rainfall (mm) at a site is modelled by $X$. State the approximate distribution of the sample mean $\\overline{X}$ for large $n$, according to the central limit theorem.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "For large $n$, the sample mean is approximately normal even if $X$ is not.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what is required",
          "workingLatex": "\\text{mean }\\mu,\\;\\text{variance }\\sigma^2,\\;\\text{sample size }n",
          "explanation": "The limiting distribution needs the parent mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conditions",
          "workingLatex": "X_i \\text{ i.i.d.},\\; n \\text{ large}",
          "explanation": "Independent identical draws; typically $n\\geq 30$ is treated as large in exam contexts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Parent need not be normal",
          "workingLatex": "X \\text{ any distribution with finite }\\mu,\\sigma^2",
          "explanation": "The power of the CLT is that normality of $X$ is not required.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State for sample mean",
          "workingLatex": "\\overline{X} \\xrightarrow{d} N(\\mu,\\sigma^2/n)",
          "explanation": "Distributional convergence of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overline{X} \\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Write the approximate distribution clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "By the CLT, for large $n$, $\\overline{X} \\approx N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)$, where $\\mu=\\operatorname{E}(X)$ and $\\sigma^2=\\operatorname{Var}(X)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q003",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "mean",
      "variance",
      "sample-mean"
    ],
    "questionText": "The mass (g) of a randomly chosen component is $X$. A random variable $X$ has mean 12 and variance 16. A random sample of size 40 is taken. Find $\\operatorname{E}(\\overline{X})$ and $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of sample mean",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = \\mu = 12",
          "explanation": "Averaging does not change the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{\\sigma^2}{n}",
          "explanation": "Independence of the $X_i$ gives $\\operatorname{Var}(\\sum X_i)=n\\sigma^2$, then divide by $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{16}{40} = 0.4",
          "explanation": "Plug in the given variance and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\operatorname{SD}(\\overline{X}) = \\sqrt{0.4} = 0.6325",
          "explanation": "Often needed for $z$-scores later.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State results",
          "workingLatex": "\\operatorname{E}(\\overline{X})=12,\\;\\operatorname{Var}(\\overline{X})=0.4",
          "explanation": "Report both moments.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mu_{\\overline{X}}=12,\\;\\sigma^2_{\\overline{X}}=0.4",
          "explanation": "Final values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{E}(\\overline{X})=12$, $\\operatorname{Var}(\\overline{X})=0.4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q004",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "mean",
      "variance",
      "sample-mean"
    ],
    "questionText": "Journey times (minutes) on a bus route are modelled by $X$. A random variable $X$ has mean 50 and variance 25. A random sample of size 100 is taken. Find $\\operatorname{E}(\\overline{X})$ and $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of sample mean",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = \\mu = 50",
          "explanation": "Averaging does not change the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{\\sigma^2}{n}",
          "explanation": "Independence of the $X_i$ gives $\\operatorname{Var}(\\sum X_i)=n\\sigma^2$, then divide by $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{25}{100} = 0.25",
          "explanation": "Plug in the given variance and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\operatorname{SD}(\\overline{X}) = \\sqrt{0.25} = 0.5",
          "explanation": "Often needed for $z$-scores later.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State results",
          "workingLatex": "\\operatorname{E}(\\overline{X})=50,\\;\\operatorname{Var}(\\overline{X})=0.25",
          "explanation": "Report both moments.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mu_{\\overline{X}}=50,\\;\\sigma^2_{\\overline{X}}=0.25",
          "explanation": "Final values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{E}(\\overline{X})=50$, $\\operatorname{Var}(\\overline{X})=0.25$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q005",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "mean",
      "variance",
      "sample-mean"
    ],
    "questionText": "Scores on a psychometric test are modelled by $X$. A random variable $X$ has mean 3.5 and variance 2.4. A random sample of size 36 is taken. Find $\\operatorname{E}(\\overline{X})$ and $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of sample mean",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = \\mu = 3.5",
          "explanation": "Averaging does not change the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{\\sigma^2}{n}",
          "explanation": "Independence of the $X_i$ gives $\\operatorname{Var}(\\sum X_i)=n\\sigma^2$, then divide by $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{2.4}{36} = 0.066667",
          "explanation": "Plug in the given variance and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\operatorname{SD}(\\overline{X}) = \\sqrt{0.066667} = 0.2582",
          "explanation": "Often needed for $z$-scores later.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State results",
          "workingLatex": "\\operatorname{E}(\\overline{X})=3.5,\\;\\operatorname{Var}(\\overline{X})=0.066667",
          "explanation": "Report both moments.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mu_{\\overline{X}}=3.5,\\;\\sigma^2_{\\overline{X}}=0.066667",
          "explanation": "Final values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{E}(\\overline{X})=3.5$, $\\operatorname{Var}(\\overline{X})=0.066667$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q006",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "distribution",
      "sample-mean"
    ],
    "questionText": "Energy usage (kWh) of households is modelled by $X$. $X$ has mean 20 and variance 9. A random sample of size 50 is taken. Write down the approximate distribution of $\\overline{X}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "Large-sample normality of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = 20",
          "explanation": "Same as the parent mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{9}{50} = 0.18",
          "explanation": "Scale the parent variance by $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write distribution",
          "workingLatex": "\\overline{X} \\approx N(20,\\,0.18)",
          "explanation": "Normal with these parameters.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $n$ large",
          "workingLatex": "50 \\text{ is large}",
          "explanation": "Justifies using the CLT approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overline{X} \\approx N(20,\\,0.18)",
          "explanation": "State the approximate law.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overline{X} \\approx N(20,\\,0.18)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q007",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "distribution",
      "sample-mean"
    ],
    "questionText": "Lengths (cm) of manufactured rods are modelled by $X$. $X$ has mean 8 and variance 4. A random sample of size 64 is taken. Write down the approximate distribution of $\\overline{X}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "Large-sample normality of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = 8",
          "explanation": "Same as the parent mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{4}{64} = 0.0625",
          "explanation": "Scale the parent variance by $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write distribution",
          "workingLatex": "\\overline{X} \\approx N(8,\\,0.0625)",
          "explanation": "Normal with these parameters.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $n$ large",
          "workingLatex": "64 \\text{ is large}",
          "explanation": "Justifies using the CLT approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overline{X} \\approx N(8,\\,0.0625)",
          "explanation": "State the approximate law.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overline{X} \\approx N(8,\\,0.0625)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q008",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "distribution",
      "sample-mean"
    ],
    "questionText": "Response times (ms) of a server are modelled by $X$. $X$ has mean 100 and variance 400. A random sample of size 25 is taken. Write down the approximate distribution of $\\overline{X}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "Large-sample normality of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = 100",
          "explanation": "Same as the parent mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{400}{25} = 16",
          "explanation": "Scale the parent variance by $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write distribution",
          "workingLatex": "\\overline{X} \\approx N(100,\\,16)",
          "explanation": "Normal with these parameters.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $n$ large",
          "workingLatex": "25 \\text{ is large}",
          "explanation": "Justifies using the CLT approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overline{X} \\approx N(100,\\,16)",
          "explanation": "State the approximate law.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overline{X} \\approx N(100,\\,16)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q009",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "distribution",
      "sample-sum"
    ],
    "questionText": "Waiting times at a clinic are modelled by a random variable $X$. Independent copies $X_1,\\ldots,X_{40}$ each have mean 5 and variance 9. Using the CLT, state the approximate distribution of $S=\\sum_{i=1}^{40} X_i$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the sum",
          "workingLatex": "S = X_1 + \\cdots + X_{40}",
          "explanation": "Total of the sample observations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean of sum",
          "workingLatex": "\\operatorname{E}(S) = n\\mu = 40\\times 5 = 200",
          "explanation": "Linearity of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance of sum",
          "workingLatex": "\\operatorname{Var}(S) = n\\sigma^2 = 40\\times 9 = 360",
          "explanation": "Independence: variances add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply CLT",
          "workingLatex": "S \\approx N(n\\mu,\\,n\\sigma^2)",
          "explanation": "The sum is also approximately normal for large $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write distribution",
          "workingLatex": "S \\approx N(200,\\,360)",
          "explanation": "Substitute numerical parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "S \\approx N(200,\\,360)",
          "explanation": "Final approximate distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S \\approx N(200,\\,360)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q010",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "distribution",
      "sample-sum"
    ],
    "questionText": "Daily rainfall (mm) at a site is modelled by $X$. Independent copies $X_1,\\ldots,X_{80}$ each have mean 2 and variance 1. Using the CLT, state the approximate distribution of $S=\\sum_{i=1}^{80} X_i$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the sum",
          "workingLatex": "S = X_1 + \\cdots + X_{80}",
          "explanation": "Total of the sample observations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean of sum",
          "workingLatex": "\\operatorname{E}(S) = n\\mu = 80\\times 2 = 160",
          "explanation": "Linearity of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance of sum",
          "workingLatex": "\\operatorname{Var}(S) = n\\sigma^2 = 80\\times 1 = 80",
          "explanation": "Independence: variances add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply CLT",
          "workingLatex": "S \\approx N(n\\mu,\\,n\\sigma^2)",
          "explanation": "The sum is also approximately normal for large $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write distribution",
          "workingLatex": "S \\approx N(160,\\,80)",
          "explanation": "Substitute numerical parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "S \\approx N(160,\\,80)",
          "explanation": "Final approximate distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S \\approx N(160,\\,80)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q011",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "distribution",
      "sample-sum"
    ],
    "questionText": "The mass (g) of a randomly chosen component is $X$. Independent copies $X_1,\\ldots,X_{36}$ each have mean 15 and variance 16. Using the CLT, state the approximate distribution of $S=\\sum_{i=1}^{36} X_i$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the sum",
          "workingLatex": "S = X_1 + \\cdots + X_{36}",
          "explanation": "Total of the sample observations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean of sum",
          "workingLatex": "\\operatorname{E}(S) = n\\mu = 36\\times 15 = 540",
          "explanation": "Linearity of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance of sum",
          "workingLatex": "\\operatorname{Var}(S) = n\\sigma^2 = 36\\times 16 = 576",
          "explanation": "Independence: variances add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply CLT",
          "workingLatex": "S \\approx N(n\\mu,\\,n\\sigma^2)",
          "explanation": "The sum is also approximately normal for large $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write distribution",
          "workingLatex": "S \\approx N(540,\\,576)",
          "explanation": "Substitute numerical parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "S \\approx N(540,\\,576)",
          "explanation": "Final approximate distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S \\approx N(540,\\,576)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q012",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "central-limit",
      "reasoning",
      "conditions"
    ],
    "questionText": "A population distribution is heavily skewed. Explain why the sample mean of a large sample may still be modelled by a normal distribution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify parent",
          "workingLatex": "X \\text{ need not be normal}",
          "explanation": "The CLT does not require a normal parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify statistic",
          "workingLatex": "\\overline{X}\\text{ or }S=\\sum X_i",
          "explanation": "The theorem applies to the sample mean (or equivalently the sum).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Large $n$",
          "workingLatex": "n \\text{ sufficiently large}",
          "explanation": "The approximation improves as $n$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Finite moments",
          "workingLatex": "\\mu,\\sigma^2 \\text{ finite}",
          "explanation": "Mean and variance of $X$ must exist.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "By the CLT, for large $n$ the distribution of $\\overline{X}$ is approximately normal regardless of the shape of the parent distribution (provided mean and variance are finite).",
          "explanation": "Apply these conditions to the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "By the CLT, for large $n$ the distribution of $\\overline{X}$ is approximately normal regardless of the shape of the parent distribution (provided mean and variance are finite).",
          "explanation": "State the reasoned conclusion.",
          "diagram": null
        }
      ],
      "finalAnswer": "By the CLT, for large $n$ the distribution of $\\overline{X}$ is approximately normal regardless of the shape of the parent distribution (provided mean and variance are finite)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q013",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "central-limit",
      "reasoning",
      "conditions"
    ],
    "questionText": "Explain the difference between saying that $X$ is normally distributed and saying that $\\overline{X}$ is approximately normally distributed by the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify parent",
          "workingLatex": "X \\text{ need not be normal}",
          "explanation": "The CLT does not require a normal parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify statistic",
          "workingLatex": "\\overline{X}\\text{ or }S=\\sum X_i",
          "explanation": "The theorem applies to the sample mean (or equivalently the sum).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Large $n$",
          "workingLatex": "n \\text{ sufficiently large}",
          "explanation": "The approximation improves as $n$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Finite moments",
          "workingLatex": "\\mu,\\sigma^2 \\text{ finite}",
          "explanation": "Mean and variance of $X$ must exist.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "$X$ normal means every observation is normal; the CLT says that for large $n$, the sample mean is approximately normal even when $X$ itself is not.",
          "explanation": "Apply these conditions to the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "$X$ normal means every observation is normal; the CLT says that for large $n$, the sample mean is approximately normal even when $X$ itself is not.",
          "explanation": "State the reasoned conclusion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$X$ normal means every observation is normal; the CLT says that for large $n$, the sample mean is approximately normal even when $X$ itself is not."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q014",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "central-limit",
      "reasoning",
      "conditions"
    ],
    "questionText": "Why does $\\operatorname{Var}(\\overline{X})=\\sigma^2/n$ decrease as $n$ increases?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify parent",
          "workingLatex": "X \\text{ need not be normal}",
          "explanation": "The CLT does not require a normal parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify statistic",
          "workingLatex": "\\overline{X}\\text{ or }S=\\sum X_i",
          "explanation": "The theorem applies to the sample mean (or equivalently the sum).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Large $n$",
          "workingLatex": "n \\text{ sufficiently large}",
          "explanation": "The approximation improves as $n$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Finite moments",
          "workingLatex": "\\mu,\\sigma^2 \\text{ finite}",
          "explanation": "Mean and variance of $X$ must exist.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "Averaging independent observations cancels random fluctuations: the variance of the mean scales as $1/n$, so large samples give more precise estimates of $\\mu$.",
          "explanation": "Apply these conditions to the scenario.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "Averaging independent observations cancels random fluctuations: the variance of the mean scales as $1/n$, so large samples give more precise estimates of $\\mu$.",
          "explanation": "State the reasoned conclusion.",
          "diagram": null
        }
      ],
      "finalAnswer": "Averaging independent observations cancels random fluctuations: the variance of the mean scales as $1/n$, so large samples give more precise estimates of $\\mu$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q015",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "central-limit",
      "sample-mean",
      "sample-sum",
      "link"
    ],
    "questionText": "Explain how the CLT approximation for the sample mean $\\overline{X}$ relates to that for the sample sum $S=\\sum_{i=1}^{n} X_i$ when $n=50$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate mean and sum",
          "workingLatex": "\\overline{X} = \\dfrac{S}{n} = \\dfrac{S}{50}",
          "explanation": "The sample mean is a scaled sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean transformation",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = \\dfrac{1}{n}\\operatorname{E}(S)",
          "explanation": "Scaling by $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance transformation",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{1}{n^2}\\operatorname{Var}(S)",
          "explanation": "Variance scales by the square of the constant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CLT equivalence",
          "workingLatex": "S \\approx N(n\\mu,n\\sigma^2) \\iff \\overline{X} \\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Same theorem, two parametrisations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose form",
          "workingLatex": "\\text{Use }\\overline{X}\\text{ or }S\\text{ as convenient}",
          "explanation": "Probabilities about totals suit $S$; averages suit $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overline{X}=S/50",
          "explanation": "The two forms are equivalent under the CLT.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $\\overline{X}=S/n$, $S\\approx N(n\\mu,n\\sigma^2)$ is equivalent to $\\overline{X}\\approx N(\\mu,\\sigma^2/n)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q016",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "central-limit",
      "sample-mean",
      "sample-sum",
      "link"
    ],
    "questionText": "Explain how the CLT approximation for the sample mean $\\overline{X}$ relates to that for the sample sum $S=\\sum_{i=1}^{n} X_i$ when $n=36$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate mean and sum",
          "workingLatex": "\\overline{X} = \\dfrac{S}{n} = \\dfrac{S}{36}",
          "explanation": "The sample mean is a scaled sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean transformation",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = \\dfrac{1}{n}\\operatorname{E}(S)",
          "explanation": "Scaling by $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance transformation",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{1}{n^2}\\operatorname{Var}(S)",
          "explanation": "Variance scales by the square of the constant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CLT equivalence",
          "workingLatex": "S \\approx N(n\\mu,n\\sigma^2) \\iff \\overline{X} \\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Same theorem, two parametrisations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose form",
          "workingLatex": "\\text{Use }\\overline{X}\\text{ or }S\\text{ as convenient}",
          "explanation": "Probabilities about totals suit $S$; averages suit $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overline{X}=S/36",
          "explanation": "The two forms are equivalent under the CLT.",
          "diagram": null
        }
      ],
      "finalAnswer": "Since $\\overline{X}=S/n$, $S\\approx N(n\\mu,n\\sigma^2)$ is equivalent to $\\overline{X}\\approx N(\\mu,\\sigma^2/n)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q017",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "mean",
      "variance",
      "sample-mean"
    ],
    "questionText": "Standardised scores have mean $0$ and variance $1$. A random variable $X$ has mean 0 and variance 1. A random sample of size 49 is taken. Find $\\operatorname{E}(\\overline{X})$ and $\\operatorname{Var}(\\overline{X})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean of sample mean",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = \\mu = 0",
          "explanation": "Averaging does not change the expected value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance formula",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{\\sigma^2}{n}",
          "explanation": "Independence of the $X_i$ gives $\\operatorname{Var}(\\sum X_i)=n\\sigma^2$, then divide by $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{1}{49} = 0.020408",
          "explanation": "Plug in the given variance and sample size.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standard deviation",
          "workingLatex": "\\operatorname{SD}(\\overline{X}) = \\sqrt{0.020408} = 0.1429",
          "explanation": "Often needed for $z$-scores later.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State results",
          "workingLatex": "\\operatorname{E}(\\overline{X})=0,\\;\\operatorname{Var}(\\overline{X})=0.020408",
          "explanation": "Report both moments.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mu_{\\overline{X}}=0,\\;\\sigma^2_{\\overline{X}}=0.020408",
          "explanation": "Final values.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\operatorname{E}(\\overline{X})=0$, $\\operatorname{Var}(\\overline{X})=0.020408$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q018",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "distribution",
      "sample-mean"
    ],
    "questionText": "Journey times (minutes) on a bus route are modelled by $X$. $X$ has mean 7.2 and variance 1.44. A random sample of size 45 is taken. Write down the approximate distribution of $\\overline{X}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "Large-sample normality of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\operatorname{E}(\\overline{X}) = 7.2",
          "explanation": "Same as the parent mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X}) = \\dfrac{1.44}{45} = 0.032",
          "explanation": "Scale the parent variance by $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write distribution",
          "workingLatex": "\\overline{X} \\approx N(7.2,\\,0.032)",
          "explanation": "Normal with these parameters.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $n$ large",
          "workingLatex": "45 \\text{ is large}",
          "explanation": "Justifies using the CLT approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overline{X} \\approx N(7.2,\\,0.032)",
          "explanation": "State the approximate law.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\overline{X} \\approx N(7.2,\\,0.032)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q019",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "central-limit",
      "distribution",
      "sample-sum"
    ],
    "questionText": "Scores on a psychometric test are modelled by $X$. Independent copies $X_1,\\ldots,X_{60}$ each have mean 4 and variance 2.25. Using the CLT, state the approximate distribution of $S=\\sum_{i=1}^{60} X_i$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the sum",
          "workingLatex": "S = X_1 + \\cdots + X_{60}",
          "explanation": "Total of the sample observations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean of sum",
          "workingLatex": "\\operatorname{E}(S) = n\\mu = 60\\times 4 = 240",
          "explanation": "Linearity of expectation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance of sum",
          "workingLatex": "\\operatorname{Var}(S) = n\\sigma^2 = 60\\times 2.25 = 135",
          "explanation": "Independence: variances add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply CLT",
          "workingLatex": "S \\approx N(n\\mu,\\,n\\sigma^2)",
          "explanation": "The sum is also approximately normal for large $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write distribution",
          "workingLatex": "S \\approx N(240,\\,135)",
          "explanation": "Substitute numerical parameters.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "S \\approx N(240,\\,135)",
          "explanation": "Final approximate distribution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S \\approx N(240,\\,135)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q020",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "central-limit",
      "statement",
      "definition"
    ],
    "questionText": "Lifetime of packets of crisps are modelled by a random variable $X$. State the approximate distribution of the sample mean $\\overline{X}$ for large $n$, according to the central limit theorem.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "For large $n$, the sample mean is approximately normal even if $X$ is not.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify what is required",
          "workingLatex": "\\text{mean }\\mu,\\;\\text{variance }\\sigma^2,\\;\\text{sample size }n",
          "explanation": "The limiting distribution needs the parent mean and variance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conditions",
          "workingLatex": "X_i \\text{ i.i.d.},\\; n \\text{ large}",
          "explanation": "Independent identical draws; typically $n\\geq 30$ is treated as large in exam contexts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Parent need not be normal",
          "workingLatex": "X \\text{ any distribution with finite }\\mu,\\sigma^2",
          "explanation": "The power of the CLT is that normality of $X$ is not required.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State for sample mean",
          "workingLatex": "\\overline{X} \\xrightarrow{d} N(\\mu,\\sigma^2/n)",
          "explanation": "Distributional convergence of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\overline{X} \\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Write the approximate distribution clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "By the CLT, for large $n$, $\\overline{X} \\approx N\\left(\\mu,\\,\\dfrac{\\sigma^2}{n}\\right)$, where $\\mu=\\operatorname{E}(X)$ and $\\sigma^2=\\operatorname{Var}(X)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q021",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-mean"
    ],
    "questionText": "Waiting times at a clinic are modelled by a random variable $X$. $X$ has mean 50 and variance 100. A random sample of size 40 is taken. Using the CLT, estimate P(\\overline{X} > 52).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT approximation",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(50,\\,\\dfrac{100}{40}\\right)",
          "explanation": "Approximate the sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance / SD",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=2.5,\\;\\sigma=\\sqrt{2.5}=1.5811",
          "explanation": "Need the standard deviation for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write probability",
          "workingLatex": "P(\\overline{X} > 52)",
          "explanation": "Translate the worded event into a probability for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{52-50}{1.5811} = 1.265",
          "explanation": "Convert to a standard normal $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal probability",
          "workingLatex": "P(Z > 1.265) \\approx 0.1029",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "P(\\overline{X} > 52) \\approx 0.1029",
          "explanation": "Restore the original event.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check suitability",
          "workingLatex": "40\\text{ large}\\Rightarrow\\text{CLT valid}",
          "explanation": "Large sample justifies the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rounding",
          "workingLatex": "\\text{give to }3\\text{ or }4\\text{ s.f.}",
          "explanation": "Match exam presentation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} > 52) \\approx 0.1029",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} > 52) \\approx 0.1029$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q022",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-mean"
    ],
    "questionText": "Daily rainfall (mm) at a site is modelled by $X$. $X$ has mean 20 and variance 16. A random sample of size 64 is taken. Using the CLT, estimate P(\\overline{X} < 19).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT approximation",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(20,\\,\\dfrac{16}{64}\\right)",
          "explanation": "Approximate the sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance / SD",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=0.25,\\;\\sigma=\\sqrt{0.25}=0.5",
          "explanation": "Need the standard deviation for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write probability",
          "workingLatex": "P(\\overline{X} < 19)",
          "explanation": "Translate the worded event into a probability for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{19-20}{0.5} = -2",
          "explanation": "Convert to a standard normal $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal probability",
          "workingLatex": "P(Z < -2) \\approx 0.0228",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "P(\\overline{X} < 19) \\approx 0.0228",
          "explanation": "Restore the original event.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check suitability",
          "workingLatex": "64\\text{ large}\\Rightarrow\\text{CLT valid}",
          "explanation": "Large sample justifies the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rounding",
          "workingLatex": "\\text{give to }3\\text{ or }4\\text{ s.f.}",
          "explanation": "Match exam presentation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} < 19) \\approx 0.0228",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} < 19) \\approx 0.0228$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q023",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-mean"
    ],
    "questionText": "The mass (g) of a randomly chosen component is $X$. $X$ has mean 10 and variance 9. A random sample of size 36 is taken. Using the CLT, estimate P(\\overline{X} > 11.5).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT approximation",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(10,\\,\\dfrac{9}{36}\\right)",
          "explanation": "Approximate the sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance / SD",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=0.25,\\;\\sigma=\\sqrt{0.25}=0.5",
          "explanation": "Need the standard deviation for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write probability",
          "workingLatex": "P(\\overline{X} > 11.5)",
          "explanation": "Translate the worded event into a probability for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{11.5-10}{0.5} = 3",
          "explanation": "Convert to a standard normal $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal probability",
          "workingLatex": "P(Z > 3) \\approx 0.0013",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "P(\\overline{X} > 11.5) \\approx 0.0013",
          "explanation": "Restore the original event.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check suitability",
          "workingLatex": "36\\text{ large}\\Rightarrow\\text{CLT valid}",
          "explanation": "Large sample justifies the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rounding",
          "workingLatex": "\\text{give to }3\\text{ or }4\\text{ s.f.}",
          "explanation": "Match exam presentation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} > 11.5) \\approx 0.0013",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} > 11.5) \\approx 0.0013$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q024",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-mean"
    ],
    "questionText": "Journey times (minutes) on a bus route are modelled by $X$. $X$ has mean 100 and variance 225. A random sample of size 100 is taken. Using the CLT, estimate P(\\overline{X} < 97).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT approximation",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(100,\\,\\dfrac{225}{100}\\right)",
          "explanation": "Approximate the sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance / SD",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=2.25,\\;\\sigma=\\sqrt{2.25}=1.5",
          "explanation": "Need the standard deviation for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write probability",
          "workingLatex": "P(\\overline{X} < 97)",
          "explanation": "Translate the worded event into a probability for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{97-100}{1.5} = -2",
          "explanation": "Convert to a standard normal $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal probability",
          "workingLatex": "P(Z < -2) \\approx 0.0228",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "P(\\overline{X} < 97) \\approx 0.0228",
          "explanation": "Restore the original event.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check suitability",
          "workingLatex": "100\\text{ large}\\Rightarrow\\text{CLT valid}",
          "explanation": "Large sample justifies the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rounding",
          "workingLatex": "\\text{give to }3\\text{ or }4\\text{ s.f.}",
          "explanation": "Match exam presentation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} < 97) \\approx 0.0228",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} < 97) \\approx 0.0228$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q025",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-mean"
    ],
    "questionText": "Scores on a psychometric test are modelled by $X$. $X$ has mean 5 and variance 4. A random sample of size 50 is taken. Using the CLT, estimate P(\\overline{X} > 5.4).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT approximation",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(5,\\,\\dfrac{4}{50}\\right)",
          "explanation": "Approximate the sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance / SD",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=0.08,\\;\\sigma=\\sqrt{0.08}=0.2828",
          "explanation": "Need the standard deviation for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write probability",
          "workingLatex": "P(\\overline{X} > 5.4)",
          "explanation": "Translate the worded event into a probability for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{5.4-5}{0.2828} = 1.414",
          "explanation": "Convert to a standard normal $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal probability",
          "workingLatex": "P(Z > 1.414) \\approx 0.0787",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "P(\\overline{X} > 5.4) \\approx 0.0787",
          "explanation": "Restore the original event.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check suitability",
          "workingLatex": "50\\text{ large}\\Rightarrow\\text{CLT valid}",
          "explanation": "Large sample justifies the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rounding",
          "workingLatex": "\\text{give to }3\\text{ or }4\\text{ s.f.}",
          "explanation": "Match exam presentation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} > 5.4) \\approx 0.0787",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} > 5.4) \\approx 0.0787$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q026",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "between",
      "sample-mean"
    ],
    "questionText": "Energy usage (kWh) of households is modelled by $X$. $X$ has mean 30 and variance 25. For a random sample of size 50, estimate $P(29 < \\overline{X} < 31)$ using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT",
          "workingLatex": "\\overline{X} \\approx N(30,\\,0.5)",
          "explanation": "Approximate normal law for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}} = 0.7071",
          "explanation": "Standard deviation of $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Event",
          "workingLatex": "P(29 < \\overline{X} < 31)",
          "explanation": "Probability that the sample mean lies between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower $z$",
          "workingLatex": "z_1 = \\dfrac{29-30}{0.7071} = -1.414",
          "explanation": "Standardise the lower boundary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Upper $z$",
          "workingLatex": "z_2 = \\dfrac{31-30}{0.7071} = 1.414",
          "explanation": "Standardise the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area between",
          "workingLatex": "P(-1.414 < Z < 1.414) = 0.8426",
          "explanation": "Difference of cumulative normal probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State result",
          "workingLatex": "P(29 < \\overline{X} < 31) \\approx 0.8426",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "CLT note",
          "workingLatex": "n=50\\text{ large}",
          "explanation": "Supports using the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(29 < \\overline{X} < 31) \\approx 0.8426",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(29 < \\overline{X} < 31) \\approx 0.8426$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q027",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "between",
      "sample-mean"
    ],
    "questionText": "Lengths (cm) of manufactured rods are modelled by $X$. $X$ has mean 12 and variance 9. For a random sample of size 40, estimate $P(11 < \\overline{X} < 13)$ using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT",
          "workingLatex": "\\overline{X} \\approx N(12,\\,0.225)",
          "explanation": "Approximate normal law for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}} = 0.4743",
          "explanation": "Standard deviation of $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Event",
          "workingLatex": "P(11 < \\overline{X} < 13)",
          "explanation": "Probability that the sample mean lies between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower $z$",
          "workingLatex": "z_1 = \\dfrac{11-12}{0.4743} = -2.108",
          "explanation": "Standardise the lower boundary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Upper $z$",
          "workingLatex": "z_2 = \\dfrac{13-12}{0.4743} = 2.108",
          "explanation": "Standardise the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area between",
          "workingLatex": "P(-2.108 < Z < 2.108) = 0.965",
          "explanation": "Difference of cumulative normal probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State result",
          "workingLatex": "P(11 < \\overline{X} < 13) \\approx 0.965",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "CLT note",
          "workingLatex": "n=40\\text{ large}",
          "explanation": "Supports using the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(11 < \\overline{X} < 13) \\approx 0.965",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(11 < \\overline{X} < 13) \\approx 0.965$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q028",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "between",
      "sample-mean"
    ],
    "questionText": "Response times (ms) of a server are modelled by $X$. $X$ has mean 80 and variance 64. For a random sample of size 64, estimate $P(78 < \\overline{X} < 82)$ using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT",
          "workingLatex": "\\overline{X} \\approx N(80,\\,1)",
          "explanation": "Approximate normal law for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}} = 1",
          "explanation": "Standard deviation of $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Event",
          "workingLatex": "P(78 < \\overline{X} < 82)",
          "explanation": "Probability that the sample mean lies between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower $z$",
          "workingLatex": "z_1 = \\dfrac{78-80}{1} = -2",
          "explanation": "Standardise the lower boundary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Upper $z$",
          "workingLatex": "z_2 = \\dfrac{82-80}{1} = 2",
          "explanation": "Standardise the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area between",
          "workingLatex": "P(-2 < Z < 2) = 0.9545",
          "explanation": "Difference of cumulative normal probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State result",
          "workingLatex": "P(78 < \\overline{X} < 82) \\approx 0.9545",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "CLT note",
          "workingLatex": "n=64\\text{ large}",
          "explanation": "Supports using the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(78 < \\overline{X} < 82) \\approx 0.9545",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(78 < \\overline{X} < 82) \\approx 0.9545$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q029",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-sum"
    ],
    "questionText": "Waiting times at a clinic are modelled by a random variable $X$. Independent $X_i$ each have mean 4 and variance 9. Let $S=\\sum_{i=1}^{40} X_i$. Estimate P(S > 180) using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{i=1}^{40} X_i",
          "explanation": "Sample total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT for sum",
          "workingLatex": "S \\approx N(160,\\,360)",
          "explanation": "Mean $n\\mu$, variance $n\\sigma^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD",
          "workingLatex": "\\sigma_S = \\sqrt{360} = 18.9737",
          "explanation": "Needed for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{180-160}{18.9737} = 1.054",
          "explanation": "Convert boundary to a $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find probability",
          "workingLatex": "P(S > 180) \\approx 0.1459",
          "explanation": "Use $\\Phi$ from tables/calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Suitability",
          "workingLatex": "40\\text{ large}",
          "explanation": "CLT applies.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative via mean",
          "workingLatex": "S < 180 \\iff \\overline{X} < 4.5",
          "explanation": "Equivalent event for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "P(S > 180) \\approx 0.1459",
          "explanation": "Report the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(S > 180) \\approx 0.1459",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(S > 180) \\approx 0.1459$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q030",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-sum"
    ],
    "questionText": "Daily rainfall (mm) at a site is modelled by $X$. Independent $X_i$ each have mean 10 and variance 16. Let $S=\\sum_{i=1}^{50} X_i$. Estimate P(S < 480) using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{i=1}^{50} X_i",
          "explanation": "Sample total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT for sum",
          "workingLatex": "S \\approx N(500,\\,800)",
          "explanation": "Mean $n\\mu$, variance $n\\sigma^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD",
          "workingLatex": "\\sigma_S = \\sqrt{800} = 28.2843",
          "explanation": "Needed for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{480-500}{28.2843} = -0.707",
          "explanation": "Convert boundary to a $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find probability",
          "workingLatex": "P(S < 480) \\approx 0.2398",
          "explanation": "Use $\\Phi$ from tables/calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Suitability",
          "workingLatex": "50\\text{ large}",
          "explanation": "CLT applies.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative via mean",
          "workingLatex": "S < 480 \\iff \\overline{X} < 9.6",
          "explanation": "Equivalent event for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "P(S < 480) \\approx 0.2398",
          "explanation": "Report the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(S < 480) \\approx 0.2398",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(S < 480) \\approx 0.2398$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q031",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-sum"
    ],
    "questionText": "The mass (g) of a randomly chosen component is $X$. Independent $X_i$ each have mean 2.5 and variance 1. Let $S=\\sum_{i=1}^{36} X_i$. Estimate P(S > 95) using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{i=1}^{36} X_i",
          "explanation": "Sample total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT for sum",
          "workingLatex": "S \\approx N(90,\\,36)",
          "explanation": "Mean $n\\mu$, variance $n\\sigma^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD",
          "workingLatex": "\\sigma_S = \\sqrt{36} = 6",
          "explanation": "Needed for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{95-90}{6} = 0.833",
          "explanation": "Convert boundary to a $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find probability",
          "workingLatex": "P(S > 95) \\approx 0.2024",
          "explanation": "Use $\\Phi$ from tables/calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Suitability",
          "workingLatex": "36\\text{ large}",
          "explanation": "CLT applies.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative via mean",
          "workingLatex": "S < 95 \\iff \\overline{X} < 2.6389",
          "explanation": "Equivalent event for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "P(S > 95) \\approx 0.2024",
          "explanation": "Report the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(S > 95) \\approx 0.2024",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(S > 95) \\approx 0.2024$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q032",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "discrete",
      "probability",
      "sample-mean"
    ],
    "questionText": "Journey times (minutes) on a bus route are modelled by $X$. The discrete random variable $X$ has distribution\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline 1&0.1\\\\2&0.3\\\\3&0.4\\\\4&0.2 \\end{array}$$\nA random sample of size 50 is taken. Estimate P(\\overline{X} > 2.7) using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $\\operatorname{E}(X)$",
          "workingLatex": "\\mu = \\sum x\\,P(X=x) = 2.7",
          "explanation": "Mean of the discrete parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\operatorname{E}(X^2)$",
          "workingLatex": "\\operatorname{E}(X^2)=8.1",
          "explanation": "Second moment for the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\sigma^2 = \\operatorname{E}(X^2)-\\mu^2 = 0.81",
          "explanation": "Parent variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CLT for mean",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(2.7,\\,\\dfrac{0.81}{50}\\right)",
          "explanation": "Even though $X$ is discrete and non-normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "SD of mean",
          "workingLatex": "\\sigma_{\\overline{X}} = 0.1273",
          "explanation": "Standard deviation of $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{2.7-2.7}{0.1273} = 0",
          "explanation": "Convert to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability",
          "workingLatex": "P(\\overline{X} > 2.7) \\approx 0.5",
          "explanation": "Approximate using $\\Phi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note on parent",
          "workingLatex": "X \\text{ discrete}\\Rightarrow\\text{CLT still applies}",
          "explanation": "Finite mean and variance suffice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} > 2.7) \\approx 0.5",
          "explanation": "Final estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} > 2.7) \\approx 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q033",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "discrete",
      "probability",
      "sample-mean"
    ],
    "questionText": "Scores on a psychometric test are modelled by $X$. The discrete random variable $X$ has distribution\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline 0&0.5\\\\1&0.3\\\\2&0.2 \\end{array}$$\nA random sample of size 60 is taken. Estimate P(\\overline{X} < 0.7) using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $\\operatorname{E}(X)$",
          "workingLatex": "\\mu = \\sum x\\,P(X=x) = 0.7",
          "explanation": "Mean of the discrete parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\operatorname{E}(X^2)$",
          "workingLatex": "\\operatorname{E}(X^2)=1.1",
          "explanation": "Second moment for the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\sigma^2 = \\operatorname{E}(X^2)-\\mu^2 = 0.61",
          "explanation": "Parent variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CLT for mean",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(0.7,\\,\\dfrac{0.61}{60}\\right)",
          "explanation": "Even though $X$ is discrete and non-normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "SD of mean",
          "workingLatex": "\\sigma_{\\overline{X}} = 0.1008",
          "explanation": "Standard deviation of $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{0.7-0.7}{0.1008} = 0",
          "explanation": "Convert to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability",
          "workingLatex": "P(\\overline{X} < 0.7) \\approx 0.5",
          "explanation": "Approximate using $\\Phi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note on parent",
          "workingLatex": "X \\text{ discrete}\\Rightarrow\\text{CLT still applies}",
          "explanation": "Finite mean and variance suffice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} < 0.7) \\approx 0.5",
          "explanation": "Final estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} < 0.7) \\approx 0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q034",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "discrete",
      "probability",
      "sample-mean"
    ],
    "questionText": "Energy usage (kWh) of households is modelled by $X$. The discrete random variable $X$ has distribution\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline 2&0.25\\\\4&0.5\\\\6&0.25 \\end{array}$$\nA random sample of size 40 is taken. Estimate P(\\overline{X} > 4.2) using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $\\operatorname{E}(X)$",
          "workingLatex": "\\mu = \\sum x\\,P(X=x) = 4",
          "explanation": "Mean of the discrete parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\operatorname{E}(X^2)$",
          "workingLatex": "\\operatorname{E}(X^2)=18",
          "explanation": "Second moment for the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\sigma^2 = \\operatorname{E}(X^2)-\\mu^2 = 2",
          "explanation": "Parent variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CLT for mean",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(4,\\,\\dfrac{2}{40}\\right)",
          "explanation": "Even though $X$ is discrete and non-normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "SD of mean",
          "workingLatex": "\\sigma_{\\overline{X}} = 0.2236",
          "explanation": "Standard deviation of $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{4.2-4}{0.2236} = 0.894",
          "explanation": "Convert to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability",
          "workingLatex": "P(\\overline{X} > 4.2) \\approx 0.1857",
          "explanation": "Approximate using $\\Phi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note on parent",
          "workingLatex": "X \\text{ discrete}\\Rightarrow\\text{CLT still applies}",
          "explanation": "Finite mean and variance suffice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} > 4.2) \\approx 0.1857",
          "explanation": "Final estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} > 4.2) \\approx 0.1857$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q035",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "compare-n",
      "probability"
    ],
    "questionText": "Lengths (cm) of manufactured rods are modelled by $X$. $X$ has mean 40 and variance 36. Estimate $P(\\overline{X} > 42)$ for samples of size 30 and of size 90, and comment briefly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT for each $n$",
          "workingLatex": "\\overline{X} \\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Same parent; different sample sizes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SD for $n=30$",
          "workingLatex": "\\sigma_1 = \\sqrt{36/30} = 1.0954",
          "explanation": "Larger variance for smaller samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD for $n=90$",
          "workingLatex": "\\sigma_2 = \\sqrt{36/90} = 0.6325",
          "explanation": "Variance of the mean shrinks as $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$z$ for $n=30$",
          "workingLatex": "z_1 = 1.826",
          "explanation": "Standardise the common threshold.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$z$ for $n=90$",
          "workingLatex": "z_2 = 3.162",
          "explanation": "Threshold is farther out in SD units when $n$ is larger.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Probabilities",
          "workingLatex": "P_1 \\approx 0.0339,\\; P_2 \\approx 0.0008",
          "explanation": "Tail probabilities under each sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "0.0008 < 0.0339",
          "explanation": "Larger $n$ concentrates $\\overline{X}$ about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\text{Extremes less likely for larger }n",
          "explanation": "Law of large numbers / CLT precision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P_{n=30}\\approx 0.0339,\\; P_{n=90}\\approx 0.0008",
          "explanation": "State both estimates.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=30$: $\\approx 0.0339$; for $n=90$: $\\approx 0.0008$. Larger $n$ makes extreme means less likely."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q036",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "compare-n",
      "probability"
    ],
    "questionText": "Response times (ms) of a server are modelled by $X$. $X$ has mean 15 and variance 16. Estimate $P(\\overline{X} > 14)$ for samples of size 25 and of size 100, and comment briefly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT for each $n$",
          "workingLatex": "\\overline{X} \\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Same parent; different sample sizes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SD for $n=25$",
          "workingLatex": "\\sigma_1 = \\sqrt{16/25} = 0.8",
          "explanation": "Larger variance for smaller samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD for $n=100$",
          "workingLatex": "\\sigma_2 = \\sqrt{16/100} = 0.4",
          "explanation": "Variance of the mean shrinks as $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$z$ for $n=25$",
          "workingLatex": "z_1 = -1.25",
          "explanation": "Standardise the common threshold.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$z$ for $n=100$",
          "workingLatex": "z_2 = -2.5",
          "explanation": "Threshold is farther out in SD units when $n$ is larger.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Probabilities",
          "workingLatex": "P_1 \\approx 0.8944,\\; P_2 \\approx 0.9938",
          "explanation": "Tail probabilities under each sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "0.8944 < 0.9938",
          "explanation": "Larger $n$ concentrates $\\overline{X}$ about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\text{Extremes less likely for larger }n",
          "explanation": "Law of large numbers / CLT precision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P_{n=25}\\approx 0.8944,\\; P_{n=100}\\approx 0.9938",
          "explanation": "State both estimates.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=25$: $\\approx 0.8944$; for $n=100$: $\\approx 0.9938$. Larger $n$ makes extreme means less likely."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q037",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "sample-size",
      "design"
    ],
    "questionText": "Waiting times at a clinic are modelled by a random variable $X$. $X$ has mean 50 and variance 100. Find the smallest sample size $n$ such that, by the CLT, $P(\\overline{X} > 52) \\leq 0.05$ (use $z\\approx 1.645$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT model",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(50,\\,\\dfrac{100}{n}\\right)",
          "explanation": "Sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Requirement",
          "workingLatex": "P(\\overline{X} > 52) \\leq 0.05",
          "explanation": "Tail probability constraint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise",
          "workingLatex": "\\dfrac{52-50}{\\sigma/\\sqrt{n}} \\approx z_{0.05}",
          "explanation": "The boundary in standard units.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical $z$",
          "workingLatex": "z \\approx 1.645",
          "explanation": "From standard normal tables for the given tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "\\sqrt{n} \\geq \\dfrac{z\\,\\sigma}{|52-50|}",
          "explanation": "Solve for sample size.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "n \\geq \\dfrac{1.645^2 \\times 100}{2^2}",
          "explanation": "Square both sides.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute",
          "workingLatex": "n \\geq 67.65",
          "explanation": "Numerical lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Ceil",
          "workingLatex": "n = 68",
          "explanation": "Smallest integer sample size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "n = 68",
          "explanation": "Required sample size.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 68$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q038",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "sample-size",
      "design"
    ],
    "questionText": "Daily rainfall (mm) at a site is modelled by $X$. $X$ has mean 20 and variance 25. Find the smallest sample size $n$ such that, by the CLT, $P(\\overline{X} < 19) \\leq 0.05$ (use $z\\approx 1.645$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT model",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(20,\\,\\dfrac{25}{n}\\right)",
          "explanation": "Sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Requirement",
          "workingLatex": "P(\\overline{X} < 19) \\leq 0.05",
          "explanation": "Tail probability constraint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise",
          "workingLatex": "\\dfrac{19-20}{\\sigma/\\sqrt{n}} \\approx z_{0.05}",
          "explanation": "The boundary in standard units.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical $z$",
          "workingLatex": "z \\approx 1.645",
          "explanation": "From standard normal tables for the given tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "\\sqrt{n} \\geq \\dfrac{z\\,\\sigma}{|19-20|}",
          "explanation": "Solve for sample size.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "n \\geq \\dfrac{1.645^2 \\times 25}{1^2}",
          "explanation": "Square both sides.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute",
          "workingLatex": "n \\geq 67.65",
          "explanation": "Numerical lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Ceil",
          "workingLatex": "n = 68",
          "explanation": "Smallest integer sample size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "n = 68",
          "explanation": "Required sample size.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 68$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q039",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-mean"
    ],
    "questionText": "Number of calls per hour follows Poisson with mean $4$. Samples of hourly means are considered. $X$ has mean 4 and variance 4. A random sample of size 50 is taken. Using the CLT, estimate P(\\overline{X} > 4.3).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT approximation",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(4,\\,\\dfrac{4}{50}\\right)",
          "explanation": "Approximate the sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance / SD",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=0.08,\\;\\sigma=\\sqrt{0.08}=0.2828",
          "explanation": "Need the standard deviation for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write probability",
          "workingLatex": "P(\\overline{X} > 4.3)",
          "explanation": "Translate the worded event into a probability for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{4.3-4}{0.2828} = 1.061",
          "explanation": "Convert to a standard normal $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal probability",
          "workingLatex": "P(Z > 1.061) \\approx 0.1443",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "P(\\overline{X} > 4.3) \\approx 0.1443",
          "explanation": "Restore the original event.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check suitability",
          "workingLatex": "50\\text{ large}\\Rightarrow\\text{CLT valid}",
          "explanation": "Large sample justifies the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rounding",
          "workingLatex": "\\text{give to }3\\text{ or }4\\text{ s.f.}",
          "explanation": "Match exam presentation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} > 4.3) \\approx 0.1443",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} > 4.3) \\approx 0.1443$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q040",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-mean"
    ],
    "questionText": "Defects per batch follow Poisson($6$). $X$ has mean 6 and variance 6. A random sample of size 40 is taken. Using the CLT, estimate P(\\overline{X} < 5.5).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT approximation",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(6,\\,\\dfrac{6}{40}\\right)",
          "explanation": "Approximate the sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance / SD",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=0.15,\\;\\sigma=\\sqrt{0.15}=0.3873",
          "explanation": "Need the standard deviation for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write probability",
          "workingLatex": "P(\\overline{X} < 5.5)",
          "explanation": "Translate the worded event into a probability for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{5.5-6}{0.3873} = -1.291",
          "explanation": "Convert to a standard normal $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal probability",
          "workingLatex": "P(Z < -1.291) \\approx 0.0984",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "P(\\overline{X} < 5.5) \\approx 0.0984",
          "explanation": "Restore the original event.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check suitability",
          "workingLatex": "40\\text{ large}\\Rightarrow\\text{CLT valid}",
          "explanation": "Large sample justifies the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rounding",
          "workingLatex": "\\text{give to }3\\text{ or }4\\text{ s.f.}",
          "explanation": "Match exam presentation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} < 5.5) \\approx 0.0984",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} < 5.5) \\approx 0.0984$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q041",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-mean"
    ],
    "questionText": "The mass (g) of a randomly chosen component is $X$. $X$ has mean 75 and variance 49. A random sample of size 49 is taken. Using the CLT, estimate P(\\overline{X} > 78).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT approximation",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(75,\\,\\dfrac{49}{49}\\right)",
          "explanation": "Approximate the sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance / SD",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=1,\\;\\sigma=\\sqrt{1}=1",
          "explanation": "Need the standard deviation for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write probability",
          "workingLatex": "P(\\overline{X} > 78)",
          "explanation": "Translate the worded event into a probability for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{78-75}{1} = 3",
          "explanation": "Convert to a standard normal $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal probability",
          "workingLatex": "P(Z > 3) \\approx 0.0013",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "P(\\overline{X} > 78) \\approx 0.0013",
          "explanation": "Restore the original event.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check suitability",
          "workingLatex": "49\\text{ large}\\Rightarrow\\text{CLT valid}",
          "explanation": "Large sample justifies the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rounding",
          "workingLatex": "\\text{give to }3\\text{ or }4\\text{ s.f.}",
          "explanation": "Match exam presentation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} > 78) \\approx 0.0013",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} > 78) \\approx 0.0013$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q042",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "between",
      "sample-mean"
    ],
    "questionText": "Journey times (minutes) on a bus route are modelled by $X$. $X$ has mean 6 and variance 4. For a random sample of size 80, estimate $P(5.5 < \\overline{X} < 6.5)$ using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT",
          "workingLatex": "\\overline{X} \\approx N(6,\\,0.05)",
          "explanation": "Approximate normal law for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}} = 0.2236",
          "explanation": "Standard deviation of $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Event",
          "workingLatex": "P(5.5 < \\overline{X} < 6.5)",
          "explanation": "Probability that the sample mean lies between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower $z$",
          "workingLatex": "z_1 = \\dfrac{5.5-6}{0.2236} = -2.236",
          "explanation": "Standardise the lower boundary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Upper $z$",
          "workingLatex": "z_2 = \\dfrac{6.5-6}{0.2236} = 2.236",
          "explanation": "Standardise the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area between",
          "workingLatex": "P(-2.236 < Z < 2.236) = 0.9746",
          "explanation": "Difference of cumulative normal probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State result",
          "workingLatex": "P(5.5 < \\overline{X} < 6.5) \\approx 0.9746",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "CLT note",
          "workingLatex": "n=80\\text{ large}",
          "explanation": "Supports using the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(5.5 < \\overline{X} < 6.5) \\approx 0.9746",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(5.5 < \\overline{X} < 6.5) \\approx 0.9746$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q043",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-sum"
    ],
    "questionText": "Scores on a psychometric test are modelled by $X$. Independent $X_i$ each have mean 8 and variance 4. Let $S=\\sum_{i=1}^{45} X_i$. Estimate P(S > 380) using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $S$",
          "workingLatex": "S = \\sum_{i=1}^{45} X_i",
          "explanation": "Sample total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT for sum",
          "workingLatex": "S \\approx N(360,\\,180)",
          "explanation": "Mean $n\\mu$, variance $n\\sigma^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD",
          "workingLatex": "\\sigma_S = \\sqrt{180} = 13.4164",
          "explanation": "Needed for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{380-360}{13.4164} = 1.491",
          "explanation": "Convert boundary to a $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find probability",
          "workingLatex": "P(S > 380) \\approx 0.068",
          "explanation": "Use $\\Phi$ from tables/calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Suitability",
          "workingLatex": "45\\text{ large}",
          "explanation": "CLT applies.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative via mean",
          "workingLatex": "S < 380 \\iff \\overline{X} < 8.4444",
          "explanation": "Equivalent event for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "P(S > 380) \\approx 0.068",
          "explanation": "Report the estimate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclusion",
          "workingLatex": "P(S > 380) \\approx 0.068",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(S > 380) \\approx 0.068$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q044",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "sample-mean"
    ],
    "questionText": "Lengths (cm) of manufactured rods are modelled by $X$. $X$ has mean 3 and variance 1.21. A random sample of size 50 is taken. Using the CLT, estimate P(\\overline{X} > 3.3).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT approximation",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(3,\\,\\dfrac{1.21}{50}\\right)",
          "explanation": "Approximate the sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Variance / SD",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=0.0242,\\;\\sigma=\\sqrt{0.0242}=0.1556",
          "explanation": "Need the standard deviation for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write probability",
          "workingLatex": "P(\\overline{X} > 3.3)",
          "explanation": "Translate the worded event into a probability for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{3.3-3}{0.1556} = 1.928",
          "explanation": "Convert to a standard normal $z$-score.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Normal probability",
          "workingLatex": "P(Z > 1.928) \\approx 0.0269",
          "explanation": "Use standard normal tables or a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "P(\\overline{X} > 3.3) \\approx 0.0269",
          "explanation": "Restore the original event.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check suitability",
          "workingLatex": "50\\text{ large}\\Rightarrow\\text{CLT valid}",
          "explanation": "Large sample justifies the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rounding",
          "workingLatex": "\\text{give to }3\\text{ or }4\\text{ s.f.}",
          "explanation": "Match exam presentation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} > 3.3) \\approx 0.0269",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} > 3.3) \\approx 0.0269$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q045",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "discrete",
      "probability",
      "sample-mean"
    ],
    "questionText": "Energy usage (kWh) of households is modelled by $X$. The discrete random variable $X$ has distribution\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline 1&0.2\\\\3&0.5\\\\5&0.3 \\end{array}$$\nA random sample of size 55 is taken. Estimate P(\\overline{X} > 3.4) using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find $\\operatorname{E}(X)$",
          "workingLatex": "\\mu = \\sum x\\,P(X=x) = 3.2",
          "explanation": "Mean of the discrete parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $\\operatorname{E}(X^2)$",
          "workingLatex": "\\operatorname{E}(X^2)=12.2",
          "explanation": "Second moment for the variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\sigma^2 = \\operatorname{E}(X^2)-\\mu^2 = 1.96",
          "explanation": "Parent variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CLT for mean",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(3.2,\\,\\dfrac{1.96}{55}\\right)",
          "explanation": "Even though $X$ is discrete and non-normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "SD of mean",
          "workingLatex": "\\sigma_{\\overline{X}} = 0.1888",
          "explanation": "Standard deviation of $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Standardise",
          "workingLatex": "z = \\dfrac{3.4-3.2}{0.1888} = 1.059",
          "explanation": "Convert to $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Probability",
          "workingLatex": "P(\\overline{X} > 3.4) \\approx 0.1448",
          "explanation": "Approximate using $\\Phi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note on parent",
          "workingLatex": "X \\text{ discrete}\\Rightarrow\\text{CLT still applies}",
          "explanation": "Finite mean and variance suffice.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(\\overline{X} > 3.4) \\approx 0.1448",
          "explanation": "Final estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\overline{X} > 3.4) \\approx 0.1448$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q046",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "compare-n",
      "probability"
    ],
    "questionText": "Response times (ms) of a server are modelled by $X$. $X$ has mean 100 and variance 400. Estimate $P(\\overline{X} > 105)$ for samples of size 40 and of size 160, and comment briefly.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT for each $n$",
          "workingLatex": "\\overline{X} \\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Same parent; different sample sizes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SD for $n=40$",
          "workingLatex": "\\sigma_1 = \\sqrt{400/40} = 3.1623",
          "explanation": "Larger variance for smaller samples.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD for $n=160$",
          "workingLatex": "\\sigma_2 = \\sqrt{400/160} = 1.5811",
          "explanation": "Variance of the mean shrinks as $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$z$ for $n=40$",
          "workingLatex": "z_1 = 1.581",
          "explanation": "Standardise the common threshold.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$z$ for $n=160$",
          "workingLatex": "z_2 = 3.162",
          "explanation": "Threshold is farther out in SD units when $n$ is larger.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Probabilities",
          "workingLatex": "P_1 \\approx 0.0569,\\; P_2 \\approx 0.0008",
          "explanation": "Tail probabilities under each sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare",
          "workingLatex": "0.0008 < 0.0569",
          "explanation": "Larger $n$ concentrates $\\overline{X}$ about $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpretation",
          "workingLatex": "\\text{Extremes less likely for larger }n",
          "explanation": "Law of large numbers / CLT precision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P_{n=40}\\approx 0.0569,\\; P_{n=160}\\approx 0.0008",
          "explanation": "State both estimates.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=40$: $\\approx 0.0569$; for $n=160$: $\\approx 0.0008$. Larger $n$ makes extreme means less likely."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q047",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "central-limit",
      "sample-size",
      "design"
    ],
    "questionText": "A production process has mean length $10$ and variance $9$. $X$ has mean 10 and variance 9. Find the smallest sample size $n$ such that, by the CLT, $P(\\overline{X} > 10.8) \\leq 0.025$ (use $z\\approx 1.96$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT model",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(10,\\,\\dfrac{9}{n}\\right)",
          "explanation": "Sampling distribution of the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Requirement",
          "workingLatex": "P(\\overline{X} > 10.8) \\leq 0.025",
          "explanation": "Tail probability constraint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Standardise",
          "workingLatex": "\\dfrac{10.8-10}{\\sigma/\\sqrt{n}} \\approx z_{0.025}",
          "explanation": "The boundary in standard units.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Critical $z$",
          "workingLatex": "z \\approx 1.96",
          "explanation": "From standard normal tables for the given tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange",
          "workingLatex": "\\sqrt{n} \\geq \\dfrac{z\\,\\sigma}{|10.8-10|}",
          "explanation": "Solve for sample size.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "n \\geq \\dfrac{1.96^2 \\times 9}{0.8000000000000007^2}",
          "explanation": "Square both sides.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute",
          "workingLatex": "n \\geq 54.02",
          "explanation": "Numerical lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Ceil",
          "workingLatex": "n = 55",
          "explanation": "Smallest integer sample size.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "n = 55",
          "explanation": "Required sample size.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 55$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q048",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "central-limit",
      "probability",
      "between",
      "sample-mean"
    ],
    "questionText": "Waiting times at a clinic are modelled by a random variable $X$. $X$ has mean 25 and variance 36. For a random sample of size 36, estimate $P(23 < \\overline{X} < 27)$ using the CLT.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT",
          "workingLatex": "\\overline{X} \\approx N(25,\\,1)",
          "explanation": "Approximate normal law for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}} = 1",
          "explanation": "Standard deviation of $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Event",
          "workingLatex": "P(23 < \\overline{X} < 27)",
          "explanation": "Probability that the sample mean lies between the bounds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Lower $z$",
          "workingLatex": "z_1 = \\dfrac{23-25}{1} = -2",
          "explanation": "Standardise the lower boundary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Upper $z$",
          "workingLatex": "z_2 = \\dfrac{27-25}{1} = 2",
          "explanation": "Standardise the upper boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area between",
          "workingLatex": "P(-2 < Z < 2) = 0.9545",
          "explanation": "Difference of cumulative normal probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State result",
          "workingLatex": "P(23 < \\overline{X} < 27) \\approx 0.9545",
          "explanation": "Approximate probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "CLT note",
          "workingLatex": "n=36\\text{ large}",
          "explanation": "Supports using the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "P(23 < \\overline{X} < 27) \\approx 0.9545",
          "explanation": "Final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(23 < \\overline{X} < 27) \\approx 0.9545$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q049",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "multi-step",
      "sample-mean"
    ],
    "questionText": "Daily rainfall (mm) at a site is modelled by $X$. A parent population has mean 40 and variance 64. A random sample of size 50 is drawn. Using the central limit theorem, estimate $P(38 < \\overline{X} < 42)$, stating any assumptions.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "Foundation of the method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parent moments",
          "workingLatex": "\\mu=40,\\;\\sigma^2=64",
          "explanation": "Given or calculated from the parent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sampling mean",
          "workingLatex": "\\operatorname{E}(\\overline{X})=40",
          "explanation": "Unbiased for $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sampling variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\dfrac{64}{50}=1.28",
          "explanation": "Shrinks with $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equivalent sum",
          "workingLatex": "S \\approx N(2000,\\,3200)",
          "explanation": "Useful if totals are more natural.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Target event",
          "workingLatex": "P(38 < \\overline{X} < 42)",
          "explanation": "Probability between two thresholds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}}=1.1314",
          "explanation": "For $z$-scores.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Lower $z$",
          "workingLatex": "z_1=-1.768",
          "explanation": "Standardised lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Upper $z$",
          "workingLatex": "z_2=1.768",
          "explanation": "Standardised upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability",
          "workingLatex": "P(-1.768<Z<1.768)\\approx 0.9229",
          "explanation": "From $\\Phi(z_2)-\\Phi(z_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on $n$",
          "workingLatex": "50\\text{ large}\\Rightarrow\\text{approximation reasonable}",
          "explanation": "Mention validity briefly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units / context",
          "workingLatex": "Daily rainfall (mm) at a site is modelled by $X$.",
          "explanation": "Interpret in the problem setting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(38<\\overline{X}<42)\\approx 0.9229",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(38 < \\overline{X} < 42) \\approx 0.9229$ (assuming i.i.d. samples and $n$ large)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q050",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "multi-step",
      "sample-mean"
    ],
    "questionText": "The mass (g) of a randomly chosen component is $X$. A parent population has mean 12 and variance 9. A random sample of size 60 is drawn. Using the central limit theorem, estimate $P(11.2 < \\overline{X} < 12.8)$, stating any assumptions.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "Foundation of the method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parent moments",
          "workingLatex": "\\mu=12,\\;\\sigma^2=9",
          "explanation": "Given or calculated from the parent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sampling mean",
          "workingLatex": "\\operatorname{E}(\\overline{X})=12",
          "explanation": "Unbiased for $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sampling variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\dfrac{9}{60}=0.15",
          "explanation": "Shrinks with $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equivalent sum",
          "workingLatex": "S \\approx N(720,\\,540)",
          "explanation": "Useful if totals are more natural.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Target event",
          "workingLatex": "P(11.2 < \\overline{X} < 12.8)",
          "explanation": "Probability between two thresholds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}}=0.3873",
          "explanation": "For $z$-scores.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Lower $z$",
          "workingLatex": "z_1=-2.066",
          "explanation": "Standardised lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Upper $z$",
          "workingLatex": "z_2=2.066",
          "explanation": "Standardised upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability",
          "workingLatex": "P(-2.066<Z<2.066)\\approx 0.9612",
          "explanation": "From $\\Phi(z_2)-\\Phi(z_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on $n$",
          "workingLatex": "60\\text{ large}\\Rightarrow\\text{approximation reasonable}",
          "explanation": "Mention validity briefly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units / context",
          "workingLatex": "The mass (g) of a randomly chosen component is $X$.",
          "explanation": "Interpret in the problem setting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(11.2<\\overline{X}<12.8)\\approx 0.9612",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(11.2 < \\overline{X} < 12.8) \\approx 0.9612$ (assuming i.i.d. samples and $n$ large)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q051",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "central-limit",
      "discrete",
      "multi-step"
    ],
    "questionText": "Journey times (minutes) on a bus route are modelled by $X$. $X$ has pmf\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline 0&0.2\\\\1&0.3\\\\2&0.3\\\\3&0.2 \\end{array}$$\nFor a sample of size 80, use the CLT to estimate $P(1.3 < \\overline{X} < 1.7)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parent distribution",
          "workingLatex": "\\begin{array}{c|c}x&P\\\\ \\hline 0&0.2\\\\1&0.3\\\\2&0.3\\\\3&0.2\\end{array}",
          "explanation": "Discrete non-normal parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\mu=1.5",
          "explanation": "First moment.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second moment",
          "workingLatex": "\\operatorname{E}(X^2)=3.3",
          "explanation": "Needed for variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance",
          "workingLatex": "\\sigma^2=1.05",
          "explanation": "Parent variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invoke CLT",
          "workingLatex": "\\overline{X}\\approx N(1.5,\\,0.013125)",
          "explanation": "$X$ discrete does not block the CLT.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why CLT applies",
          "workingLatex": "\\text{i.i.d., finite }\\mu,\\sigma^2,\\;n\\text{ large}",
          "explanation": "Check conditions explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Event",
          "workingLatex": "P(1.3<\\overline{X}<1.7)",
          "explanation": "Interval probability for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}}=0.1146",
          "explanation": "Scale for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$z$-bounds",
          "workingLatex": "z_1=-1.746,\\;z_2=1.746",
          "explanation": "Standard normal boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate $\\Phi$",
          "workingLatex": "P=0.9192",
          "explanation": "Table / calculator value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare exact mean",
          "workingLatex": "\\operatorname{E}(\\overline{X})=1.5",
          "explanation": "Centres the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Limitation",
          "workingLatex": "\\text{Approximation; accuracy improves with }n",
          "explanation": "Honest modelling note.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(1.3<\\overline{X}<1.7)\\approx 0.9192",
          "explanation": "Final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(1.3 < \\overline{X} < 1.7) \\approx 0.9192$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q052",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "central-limit",
      "discrete",
      "multi-step"
    ],
    "questionText": "Scores on a psychometric test are modelled by $X$. $X$ has pmf\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline 1&0.4\\\\2&0.4\\\\5&0.2 \\end{array}$$\nFor a sample of size 45, use the CLT to estimate $P(2 < \\overline{X} < 2.8)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parent distribution",
          "workingLatex": "\\begin{array}{c|c}x&P\\\\ \\hline 1&0.4\\\\2&0.4\\\\5&0.2\\end{array}",
          "explanation": "Discrete non-normal parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\mu=2.2",
          "explanation": "First moment.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second moment",
          "workingLatex": "\\operatorname{E}(X^2)=7",
          "explanation": "Needed for variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance",
          "workingLatex": "\\sigma^2=2.16",
          "explanation": "Parent variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invoke CLT",
          "workingLatex": "\\overline{X}\\approx N(2.2,\\,0.048)",
          "explanation": "$X$ discrete does not block the CLT.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why CLT applies",
          "workingLatex": "\\text{i.i.d., finite }\\mu,\\sigma^2,\\;n\\text{ large}",
          "explanation": "Check conditions explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Event",
          "workingLatex": "P(2<\\overline{X}<2.8)",
          "explanation": "Interval probability for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}}=0.2191",
          "explanation": "Scale for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$z$-bounds",
          "workingLatex": "z_1=-0.913,\\;z_2=2.739",
          "explanation": "Standard normal boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate $\\Phi$",
          "workingLatex": "P=0.8163",
          "explanation": "Table / calculator value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare exact mean",
          "workingLatex": "\\operatorname{E}(\\overline{X})=2.2",
          "explanation": "Centres the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Limitation",
          "workingLatex": "\\text{Approximation; accuracy improves with }n",
          "explanation": "Honest modelling note.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(2<\\overline{X}<2.8)\\approx 0.8163",
          "explanation": "Final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(2 < \\overline{X} < 2.8) \\approx 0.8163$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q053",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "central-limit",
      "sample-sum",
      "sample-mean",
      "multi-step"
    ],
    "questionText": "Energy usage (kWh) of households is modelled by $X$. Independent observations of $X$ (mean 5, variance 4) form a sample of size 50. Using the CLT, estimate (a) $P(S > 270)$ where $S=\\sum X_i$, and (b) $P(\\overline{X} < 4.7)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT for sum",
          "workingLatex": "S \\approx N(250,\\,200)",
          "explanation": "Total of ${sampleN} observations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT for mean",
          "workingLatex": "\\overline{X} \\approx N(5,\\,0.08)",
          "explanation": "Equivalent sampling law.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Link",
          "workingLatex": "S = 50\\overline{X}",
          "explanation": "Same information, different scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (a) event",
          "workingLatex": "P(S > 270)",
          "explanation": "Probability about the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise sum",
          "workingLatex": "z_S = 1.414",
          "explanation": "For the sum boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sum probability",
          "workingLatex": "P(S > 270) \\approx 0.0787",
          "explanation": "Upper tail for $S$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b) event",
          "workingLatex": "P(\\overline{X} < 4.7)",
          "explanation": "Probability about the average.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise mean",
          "workingLatex": "z_M = -1.061",
          "explanation": "For the mean boundary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean probability",
          "workingLatex": "P(\\overline{X} < 4.7) \\approx 0.1443",
          "explanation": "Lower tail for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Consistency check",
          "workingLatex": "S > 270 \\iff \\overline{X} > 5.4",
          "explanation": "Same events can be rewritten.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assumptions",
          "workingLatex": "\\text{i.i.d. with finite variance}",
          "explanation": "State modelling assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "Energy usage (kWh) of households is modelled by $X$.",
          "explanation": "Keep answers in context.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(S>270)\\approx 0.0787;\\; P(\\overline{X}<4.7)\\approx 0.1443",
          "explanation": "Both parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\approx 0.0787$; (b) $\\approx 0.1443$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q054",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "central-limit",
      "sample-sum",
      "sample-mean",
      "multi-step"
    ],
    "questionText": "Lengths (cm) of manufactured rods are modelled by $X$. Independent observations of $X$ (mean 20, variance 25) form a sample of size 40. Using the CLT, estimate (a) $P(S > 850)$ where $S=\\sum X_i$, and (b) $P(\\overline{X} < 21)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT for sum",
          "workingLatex": "S \\approx N(800,\\,1000)",
          "explanation": "Total of ${sampleN} observations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT for mean",
          "workingLatex": "\\overline{X} \\approx N(20,\\,0.625)",
          "explanation": "Equivalent sampling law.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Link",
          "workingLatex": "S = 40\\overline{X}",
          "explanation": "Same information, different scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (a) event",
          "workingLatex": "P(S > 850)",
          "explanation": "Probability about the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise sum",
          "workingLatex": "z_S = 1.581",
          "explanation": "For the sum boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sum probability",
          "workingLatex": "P(S > 850) \\approx 0.0569",
          "explanation": "Upper tail for $S$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b) event",
          "workingLatex": "P(\\overline{X} < 21)",
          "explanation": "Probability about the average.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise mean",
          "workingLatex": "z_M = 1.265",
          "explanation": "For the mean boundary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean probability",
          "workingLatex": "P(\\overline{X} < 21) \\approx 0.8971",
          "explanation": "Lower tail for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Consistency check",
          "workingLatex": "S > 850 \\iff \\overline{X} > 21.25",
          "explanation": "Same events can be rewritten.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assumptions",
          "workingLatex": "\\text{i.i.d. with finite variance}",
          "explanation": "State modelling assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "Lengths (cm) of manufactured rods are modelled by $X$.",
          "explanation": "Keep answers in context.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(S>850)\\approx 0.0569;\\; P(\\overline{X}<21)\\approx 0.8971",
          "explanation": "Both parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\approx 0.0569$; (b) $\\approx 0.8971$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q055",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "central-limit",
      "inference",
      "hypothesis",
      "multi-step"
    ],
    "questionText": "Response times (ms) of a server are modelled by $X$. Past data suggest $\\operatorname{Var}(X)=100$. A sample of size 40 gives $\\overline{x}=53.2$. Using the CLT, test $H_0:\\mu=50$ against $H_1:\\mu\\neq 50$ at the 5\\% level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0:\\mu=50\\quad H_1:\\mu\\neq 50",
          "explanation": "Two-sided test for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT under $H_0$",
          "workingLatex": "\\overline{X}\\approx N\\!\\left(50,\\dfrac{100}{40}\\right)",
          "explanation": "Null sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "Z=\\dfrac{\\overline{X}-50}{\\sigma/\\sqrt{n}}",
          "explanation": "Standardised sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Observed value",
          "workingLatex": "\\overline{x}=53.2",
          "explanation": "Given sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "SD under null",
          "workingLatex": "\\sigma_{\\overline{X}}=1.5811",
          "explanation": "Null standard error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $z$",
          "workingLatex": "z=2.024",
          "explanation": "Observed test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Two-tail $p$-value",
          "workingLatex": "p=2(1-\\Phi(|z|))\\approx 0.043",
          "explanation": "Probability of a result at least as extreme.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Significance level",
          "workingLatex": "\\alpha=0.05",
          "explanation": "Decision threshold.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision rule",
          "workingLatex": "0.043<0.05\\Rightarrow\\text{reject }H_0",
          "explanation": "Compare $p$ with $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Evidence of a different mean}",
          "explanation": "Word the conclusion carefully.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "CLT role",
          "workingLatex": "\\text{Normal null law via CLT}",
          "explanation": "Parent need not be normal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Assumption",
          "workingLatex": "\\sigma^2\\text{ treated as known}",
          "explanation": "As in many FM CLT inference questions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "Reject $H_0$ ($p\\approx 0.043$)",
          "explanation": "Final decision.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reject $H_0$ at the 5\\% level ($p\\approx 0.043$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q056",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "central-limit",
      "inference",
      "hypothesis",
      "multi-step"
    ],
    "questionText": "Waiting times at a clinic are modelled by a random variable $X$. Past data suggest $\\operatorname{Var}(X)=16$. A sample of size 50 gives $\\overline{x}=9.1$. Using the CLT, test $H_0:\\mu=10$ against $H_1:\\mu\\neq 10$ at the 5\\% level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0:\\mu=10\\quad H_1:\\mu\\neq 10",
          "explanation": "Two-sided test for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT under $H_0$",
          "workingLatex": "\\overline{X}\\approx N\\!\\left(10,\\dfrac{16}{50}\\right)",
          "explanation": "Null sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "Z=\\dfrac{\\overline{X}-10}{\\sigma/\\sqrt{n}}",
          "explanation": "Standardised sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Observed value",
          "workingLatex": "\\overline{x}=9.1",
          "explanation": "Given sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "SD under null",
          "workingLatex": "\\sigma_{\\overline{X}}=0.5657",
          "explanation": "Null standard error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $z$",
          "workingLatex": "z=-1.591",
          "explanation": "Observed test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Two-tail $p$-value",
          "workingLatex": "p=2(1-\\Phi(|z|))\\approx 0.1116",
          "explanation": "Probability of a result at least as extreme.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Significance level",
          "workingLatex": "\\alpha=0.05",
          "explanation": "Decision threshold.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision rule",
          "workingLatex": "0.1116\\geq 0.05\\Rightarrow\\text{do not reject }H_0",
          "explanation": "Compare $p$ with $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Insufficient evidence of a different mean}",
          "explanation": "Word the conclusion carefully.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "CLT role",
          "workingLatex": "\\text{Normal null law via CLT}",
          "explanation": "Parent need not be normal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Assumption",
          "workingLatex": "\\sigma^2\\text{ treated as known}",
          "explanation": "As in many FM CLT inference questions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "Do not reject $H_0$ ($p\\approx 0.1116$)",
          "explanation": "Final decision.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at the 5\\% level ($p\\approx 0.1116$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q057",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "compare-n",
      "multi-step"
    ],
    "questionText": "Daily rainfall (mm) at a site is modelled by $X$. $X$ has mean 30 and variance 36. Using the CLT, estimate $P(|\\overline{X}-30| < 2)$ for $n=25$ and for $n=100$, and compare.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT",
          "workingLatex": "\\overline{X}\\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Common parent, different $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Event",
          "workingLatex": "P(|\\overline{X}-30| < 2)",
          "explanation": "Accuracy within ${d} of the true mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD for $n=25$",
          "workingLatex": "1.2",
          "explanation": "Wider sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "SD for $n=100$",
          "workingLatex": "0.6",
          "explanation": "Narrower sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$z$ width $n=25$",
          "workingLatex": "z=1.667",
          "explanation": "Half-width in SD units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$z$ width $n=100$",
          "workingLatex": "z=3.333",
          "explanation": "Larger $z$ ⇒ more mass in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Prob $n=25$",
          "workingLatex": "P_1\\approx 0.9045",
          "explanation": "From $2\\Phi(z)-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Prob $n=100$",
          "workingLatex": "P_2\\approx 0.9991",
          "explanation": "Higher concentration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare",
          "workingLatex": "0.9991 > 0.9045",
          "explanation": "Larger samples give more precise means.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Ratio of variances",
          "workingLatex": "\\dfrac{\\operatorname{Var}_1}{\\operatorname{Var}_2}=\\dfrac{100}{25}",
          "explanation": "Variance scales as $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Design implication",
          "workingLatex": "\\text{Increase }n\\text{ to reduce chance of large errors}",
          "explanation": "Practical sampling design.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Assumptions",
          "workingLatex": "\\text{i.i.d., CLT applicable}",
          "explanation": "State conditions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "n=25:\\approx 0.9045;\\; n=100:\\approx 0.9991",
          "explanation": "Both probabilities.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=25$: $\\approx 0.9045$; for $n=100$: $\\approx 0.9991$. The larger sample keeps $\\overline{X}$ closer to $\\mu$ with higher probability."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q058",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "compare-n",
      "multi-step"
    ],
    "questionText": "The mass (g) of a randomly chosen component is $X$. $X$ has mean 8 and variance 4. Using the CLT, estimate $P(|\\overline{X}-8| < 0.5)$ for $n=30$ and for $n=120$, and compare.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT",
          "workingLatex": "\\overline{X}\\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Common parent, different $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Event",
          "workingLatex": "P(|\\overline{X}-8| < 0.5)",
          "explanation": "Accuracy within ${d} of the true mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD for $n=30$",
          "workingLatex": "0.3651",
          "explanation": "Wider sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "SD for $n=120$",
          "workingLatex": "0.1826",
          "explanation": "Narrower sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$z$ width $n=30$",
          "workingLatex": "z=1.369",
          "explanation": "Half-width in SD units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$z$ width $n=120$",
          "workingLatex": "z=2.739",
          "explanation": "Larger $z$ ⇒ more mass in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Prob $n=30$",
          "workingLatex": "P_1\\approx 0.829",
          "explanation": "From $2\\Phi(z)-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Prob $n=120$",
          "workingLatex": "P_2\\approx 0.9938",
          "explanation": "Higher concentration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare",
          "workingLatex": "0.9938 > 0.829",
          "explanation": "Larger samples give more precise means.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Ratio of variances",
          "workingLatex": "\\dfrac{\\operatorname{Var}_1}{\\operatorname{Var}_2}=\\dfrac{120}{30}",
          "explanation": "Variance scales as $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Design implication",
          "workingLatex": "\\text{Increase }n\\text{ to reduce chance of large errors}",
          "explanation": "Practical sampling design.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Assumptions",
          "workingLatex": "\\text{i.i.d., CLT applicable}",
          "explanation": "State conditions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "n=30:\\approx 0.829;\\; n=120:\\approx 0.9938",
          "explanation": "Both probabilities.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=30$: $\\approx 0.829$; for $n=120$: $\\approx 0.9938$. The larger sample keeps $\\overline{X}$ closer to $\\mu$ with higher probability."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q059",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "uniform",
      "multi-step"
    ],
    "questionText": "Journey times (minutes) on a bus route are modelled by $X$. $X\\sim U(0,12)$. A random sample of size 40 is taken. Use the CLT to estimate $P(5.5 < \\overline{X} < 6.5)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Uniform parent",
          "workingLatex": "X \\sim U(0,12)",
          "explanation": "Continuous uniform on $[${a},${b}]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\mu = \\dfrac{0+12}{2} = 6",
          "explanation": "Midpoint of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\sigma^2 = \\dfrac{(12-0)^2}{12} = 12",
          "explanation": "Standard uniform variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CLT",
          "workingLatex": "\\overline{X}\\approx N(6,\\,0.3)",
          "explanation": "Means become approximately normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Why not exact normal",
          "workingLatex": "U\\text{ is not normal}",
          "explanation": "Exact sampling distribution is Irwin–Hall for the sum; CLT approximates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Event",
          "workingLatex": "P(5.5<\\overline{X}<6.5)",
          "explanation": "Required interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "SD",
          "workingLatex": "0.5477",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$z_1$",
          "workingLatex": "-0.913",
          "explanation": "Lower standardised bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$z_2$",
          "workingLatex": "0.913",
          "explanation": "Upper standardised bound.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability",
          "workingLatex": "0.6388",
          "explanation": "Area under $\\Phi$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Large-$n$ note",
          "workingLatex": "n=40",
          "explanation": "Supports the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "Journey times (minutes) on a bus route are modelle",
          "explanation": "Interpret briefly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P\\approx 0.6388",
          "explanation": "Final estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(5.5 < \\overline{X} < 6.5) \\approx 0.6388$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q060",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "uniform",
      "multi-step"
    ],
    "questionText": "Scores on a psychometric test are modelled by $X$. $X\\sim U(2,8)$. A random sample of size 50 is taken. Use the CLT to estimate $P(4.8 < \\overline{X} < 5.2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Uniform parent",
          "workingLatex": "X \\sim U(2,8)",
          "explanation": "Continuous uniform on $[${a},${b}]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\mu = \\dfrac{2+8}{2} = 5",
          "explanation": "Midpoint of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\sigma^2 = \\dfrac{(8-2)^2}{12} = 3",
          "explanation": "Standard uniform variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CLT",
          "workingLatex": "\\overline{X}\\approx N(5,\\,0.06)",
          "explanation": "Means become approximately normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Why not exact normal",
          "workingLatex": "U\\text{ is not normal}",
          "explanation": "Exact sampling distribution is Irwin–Hall for the sum; CLT approximates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Event",
          "workingLatex": "P(4.8<\\overline{X}<5.2)",
          "explanation": "Required interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "SD",
          "workingLatex": "0.2449",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$z_1$",
          "workingLatex": "-0.816",
          "explanation": "Lower standardised bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$z_2$",
          "workingLatex": "0.816",
          "explanation": "Upper standardised bound.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability",
          "workingLatex": "0.5855",
          "explanation": "Area under $\\Phi$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Large-$n$ note",
          "workingLatex": "n=50",
          "explanation": "Supports the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "Scores on a psychometric test are modelled by $X$.",
          "explanation": "Interpret briefly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P\\approx 0.5855",
          "explanation": "Final estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(4.8 < \\overline{X} < 5.2) \\approx 0.5855$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q061",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "multi-step",
      "sample-mean"
    ],
    "questionText": "Energy usage (kWh) of households is modelled by $X$. A parent population has mean 100 and variance 225. A random sample of size 90 is drawn. Using the central limit theorem, estimate $P(97 < \\overline{X} < 103)$, stating any assumptions.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "Foundation of the method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parent moments",
          "workingLatex": "\\mu=100,\\;\\sigma^2=225",
          "explanation": "Given or calculated from the parent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sampling mean",
          "workingLatex": "\\operatorname{E}(\\overline{X})=100",
          "explanation": "Unbiased for $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sampling variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\dfrac{225}{90}=2.5",
          "explanation": "Shrinks with $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equivalent sum",
          "workingLatex": "S \\approx N(9000,\\,20250)",
          "explanation": "Useful if totals are more natural.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Target event",
          "workingLatex": "P(97 < \\overline{X} < 103)",
          "explanation": "Probability between two thresholds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}}=1.5811",
          "explanation": "For $z$-scores.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Lower $z$",
          "workingLatex": "z_1=-1.897",
          "explanation": "Standardised lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Upper $z$",
          "workingLatex": "z_2=1.897",
          "explanation": "Standardised upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability",
          "workingLatex": "P(-1.897<Z<1.897)\\approx 0.9422",
          "explanation": "From $\\Phi(z_2)-\\Phi(z_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on $n$",
          "workingLatex": "90\\text{ large}\\Rightarrow\\text{approximation reasonable}",
          "explanation": "Mention validity briefly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units / context",
          "workingLatex": "Energy usage (kWh) of households is modelled by $X$.",
          "explanation": "Interpret in the problem setting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(97<\\overline{X}<103)\\approx 0.9422",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(97 < \\overline{X} < 103) \\approx 0.9422$ (assuming i.i.d. samples and $n$ large)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q062",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "central-limit",
      "discrete",
      "multi-step"
    ],
    "questionText": "Lengths (cm) of manufactured rods are modelled by $X$. $X$ has pmf\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline 10&0.5\\\\20&0.3\\\\30&0.2 \\end{array}$$\nFor a sample of size 60, use the CLT to estimate $P(16 < \\overline{X} < 20)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parent distribution",
          "workingLatex": "\\begin{array}{c|c}x&P\\\\ \\hline 10&0.5\\\\20&0.3\\\\30&0.2\\end{array}",
          "explanation": "Discrete non-normal parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\mu=17",
          "explanation": "First moment.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second moment",
          "workingLatex": "\\operatorname{E}(X^2)=350",
          "explanation": "Needed for variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance",
          "workingLatex": "\\sigma^2=61",
          "explanation": "Parent variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invoke CLT",
          "workingLatex": "\\overline{X}\\approx N(17,\\,1.016667)",
          "explanation": "$X$ discrete does not block the CLT.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why CLT applies",
          "workingLatex": "\\text{i.i.d., finite }\\mu,\\sigma^2,\\;n\\text{ large}",
          "explanation": "Check conditions explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Event",
          "workingLatex": "P(16<\\overline{X}<20)",
          "explanation": "Interval probability for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}}=1.0083",
          "explanation": "Scale for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$z$-bounds",
          "workingLatex": "z_1=-0.992,\\;z_2=2.975",
          "explanation": "Standard normal boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate $\\Phi$",
          "workingLatex": "P=0.8379",
          "explanation": "Table / calculator value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare exact mean",
          "workingLatex": "\\operatorname{E}(\\overline{X})=17",
          "explanation": "Centres the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Limitation",
          "workingLatex": "\\text{Approximation; accuracy improves with }n",
          "explanation": "Honest modelling note.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(16<\\overline{X}<20)\\approx 0.8379",
          "explanation": "Final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(16 < \\overline{X} < 20) \\approx 0.8379$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q063",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "central-limit",
      "sample-sum",
      "sample-mean",
      "multi-step"
    ],
    "questionText": "Response times (ms) of a server are modelled by $X$. Independent observations of $X$ (mean 3, variance 2.25) form a sample of size 64. Using the CLT, estimate (a) $P(S > 210)$ where $S=\\sum X_i$, and (b) $P(\\overline{X} < 2.8)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT for sum",
          "workingLatex": "S \\approx N(192,\\,144)",
          "explanation": "Total of ${sampleN} observations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT for mean",
          "workingLatex": "\\overline{X} \\approx N(3,\\,0.035156)",
          "explanation": "Equivalent sampling law.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Link",
          "workingLatex": "S = 64\\overline{X}",
          "explanation": "Same information, different scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (a) event",
          "workingLatex": "P(S > 210)",
          "explanation": "Probability about the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise sum",
          "workingLatex": "z_S = 1.5",
          "explanation": "For the sum boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sum probability",
          "workingLatex": "P(S > 210) \\approx 0.0668",
          "explanation": "Upper tail for $S$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b) event",
          "workingLatex": "P(\\overline{X} < 2.8)",
          "explanation": "Probability about the average.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise mean",
          "workingLatex": "z_M = -1.067",
          "explanation": "For the mean boundary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean probability",
          "workingLatex": "P(\\overline{X} < 2.8) \\approx 0.143",
          "explanation": "Lower tail for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Consistency check",
          "workingLatex": "S > 210 \\iff \\overline{X} > 3.2813",
          "explanation": "Same events can be rewritten.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assumptions",
          "workingLatex": "\\text{i.i.d. with finite variance}",
          "explanation": "State modelling assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "Response times (ms) of a server are modelled by $X$.",
          "explanation": "Keep answers in context.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(S>210)\\approx 0.0668;\\; P(\\overline{X}<2.8)\\approx 0.143",
          "explanation": "Both parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\approx 0.0668$; (b) $\\approx 0.143$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q064",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "central-limit",
      "inference",
      "hypothesis",
      "multi-step"
    ],
    "questionText": "Exam board scores historically have mean $25$ and variance $49$. Past data suggest $\\operatorname{Var}(X)=49$. A sample of size 36 gives $\\overline{x}=27.5$. Using the CLT, test $H_0:\\mu=25$ against $H_1:\\mu\\neq 25$ at the 1\\% level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0:\\mu=25\\quad H_1:\\mu\\neq 25",
          "explanation": "Two-sided test for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT under $H_0$",
          "workingLatex": "\\overline{X}\\approx N\\!\\left(25,\\dfrac{49}{36}\\right)",
          "explanation": "Null sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "Z=\\dfrac{\\overline{X}-25}{\\sigma/\\sqrt{n}}",
          "explanation": "Standardised sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Observed value",
          "workingLatex": "\\overline{x}=27.5",
          "explanation": "Given sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "SD under null",
          "workingLatex": "\\sigma_{\\overline{X}}=1.1667",
          "explanation": "Null standard error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $z$",
          "workingLatex": "z=2.143",
          "explanation": "Observed test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Two-tail $p$-value",
          "workingLatex": "p=2(1-\\Phi(|z|))\\approx 0.0321",
          "explanation": "Probability of a result at least as extreme.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Significance level",
          "workingLatex": "\\alpha=0.01",
          "explanation": "Decision threshold.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision rule",
          "workingLatex": "0.0321\\geq 0.01\\Rightarrow\\text{do not reject }H_0",
          "explanation": "Compare $p$ with $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Insufficient evidence of a different mean}",
          "explanation": "Word the conclusion carefully.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "CLT role",
          "workingLatex": "\\text{Normal null law via CLT}",
          "explanation": "Parent need not be normal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Assumption",
          "workingLatex": "\\sigma^2\\text{ treated as known}",
          "explanation": "As in many FM CLT inference questions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "Do not reject $H_0$ ($p\\approx 0.0321$)",
          "explanation": "Final decision.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at the 1\\% level ($p\\approx 0.0321$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q065",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "compare-n",
      "multi-step"
    ],
    "questionText": "Waiting times at a clinic are modelled by a random variable $X$. $X$ has mean 50 and variance 100. Using the CLT, estimate $P(|\\overline{X}-50| < 2)$ for $n=40$ and for $n=200$, and compare.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT",
          "workingLatex": "\\overline{X}\\approx N(\\mu,\\sigma^2/n)",
          "explanation": "Common parent, different $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Event",
          "workingLatex": "P(|\\overline{X}-50| < 2)",
          "explanation": "Accuracy within ${d} of the true mean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "SD for $n=40$",
          "workingLatex": "1.5811",
          "explanation": "Wider sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "SD for $n=200$",
          "workingLatex": "0.7071",
          "explanation": "Narrower sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$z$ width $n=40$",
          "workingLatex": "z=1.265",
          "explanation": "Half-width in SD units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$z$ width $n=200$",
          "workingLatex": "z=2.828",
          "explanation": "Larger $z$ ⇒ more mass in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Prob $n=40$",
          "workingLatex": "P_1\\approx 0.7941",
          "explanation": "From $2\\Phi(z)-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Prob $n=200$",
          "workingLatex": "P_2\\approx 0.9953",
          "explanation": "Higher concentration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare",
          "workingLatex": "0.9953 > 0.7941",
          "explanation": "Larger samples give more precise means.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Ratio of variances",
          "workingLatex": "\\dfrac{\\operatorname{Var}_1}{\\operatorname{Var}_2}=\\dfrac{200}{40}",
          "explanation": "Variance scales as $1/n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Design implication",
          "workingLatex": "\\text{Increase }n\\text{ to reduce chance of large errors}",
          "explanation": "Practical sampling design.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Assumptions",
          "workingLatex": "\\text{i.i.d., CLT applicable}",
          "explanation": "State conditions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "n=40:\\approx 0.7941;\\; n=200:\\approx 0.9953",
          "explanation": "Both probabilities.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $n=40$: $\\approx 0.7941$; for $n=200$: $\\approx 0.9953$. The larger sample keeps $\\overline{X}$ closer to $\\mu$ with higher probability."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "uniform",
      "multi-step"
    ],
    "questionText": "A continuous proportion is modelled as $U(0,1)$. $X\\sim U(0,1)$. A random sample of size 100 is taken. Use the CLT to estimate $P(0.45 < \\overline{X} < 0.55)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Uniform parent",
          "workingLatex": "X \\sim U(0,1)",
          "explanation": "Continuous uniform on $[${a},${b}]$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\mu = \\dfrac{0+1}{2} = 0.5",
          "explanation": "Midpoint of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Variance",
          "workingLatex": "\\sigma^2 = \\dfrac{(1-0)^2}{12} = 0.0833",
          "explanation": "Standard uniform variance formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "CLT",
          "workingLatex": "\\overline{X}\\approx N(0.5,\\,0.000833)",
          "explanation": "Means become approximately normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Why not exact normal",
          "workingLatex": "U\\text{ is not normal}",
          "explanation": "Exact sampling distribution is Irwin–Hall for the sum; CLT approximates.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Event",
          "workingLatex": "P(0.45<\\overline{X}<0.55)",
          "explanation": "Required interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "SD",
          "workingLatex": "0.0289",
          "explanation": "Standard error.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$z_1$",
          "workingLatex": "-1.732",
          "explanation": "Lower standardised bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$z_2$",
          "workingLatex": "1.732",
          "explanation": "Upper standardised bound.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability",
          "workingLatex": "0.9167",
          "explanation": "Area under $\\Phi$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Large-$n$ note",
          "workingLatex": "n=100",
          "explanation": "Supports the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "A continuous proportion is modelled as $U(0,1)$.",
          "explanation": "Interpret briefly.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P\\approx 0.9167",
          "explanation": "Final estimate.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(0.45 < \\overline{X} < 0.55) \\approx 0.9167$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q067",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "central-limit",
      "multi-step",
      "sample-mean"
    ],
    "questionText": "Daily rainfall (mm) at a site is modelled by $X$. A parent population has mean 7 and variance 5.76. A random sample of size 48 is drawn. Using the central limit theorem, estimate $P(6.5 < \\overline{X} < 7.5)$, stating any assumptions.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State CLT",
          "workingLatex": "\\overline{X} \\approx N\\!\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)",
          "explanation": "Foundation of the method.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Parent moments",
          "workingLatex": "\\mu=7,\\;\\sigma^2=5.76",
          "explanation": "Given or calculated from the parent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sampling mean",
          "workingLatex": "\\operatorname{E}(\\overline{X})=7",
          "explanation": "Unbiased for $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sampling variance",
          "workingLatex": "\\operatorname{Var}(\\overline{X})=\\dfrac{5.76}{48}=0.12",
          "explanation": "Shrinks with $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equivalent sum",
          "workingLatex": "S \\approx N(336,\\,276.48)",
          "explanation": "Useful if totals are more natural.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Target event",
          "workingLatex": "P(6.5 < \\overline{X} < 7.5)",
          "explanation": "Probability between two thresholds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}}=0.3464",
          "explanation": "For $z$-scores.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Lower $z$",
          "workingLatex": "z_1=-1.443",
          "explanation": "Standardised lower bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Upper $z$",
          "workingLatex": "z_2=1.443",
          "explanation": "Standardised upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Probability",
          "workingLatex": "P(-1.443<Z<1.443)\\approx 0.851",
          "explanation": "From $\\Phi(z_2)-\\Phi(z_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Comment on $n$",
          "workingLatex": "48\\text{ large}\\Rightarrow\\text{approximation reasonable}",
          "explanation": "Mention validity briefly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units / context",
          "workingLatex": "Daily rainfall (mm) at a site is modelled by $X$.",
          "explanation": "Interpret in the problem setting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(6.5<\\overline{X}<7.5)\\approx 0.851",
          "explanation": "Final approximate probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(6.5 < \\overline{X} < 7.5) \\approx 0.851$ (assuming i.i.d. samples and $n$ large)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q068",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "central-limit",
      "discrete",
      "multi-step"
    ],
    "questionText": "The mass (g) of a randomly chosen component is $X$. $X$ has pmf\n$$\\begin{array}{c|c} x & P(X=x) \\\\ \\hline -1&0.25\\\\0&0.5\\\\1&0.25 \\end{array}$$\nFor a sample of size 70, use the CLT to estimate $P(-0.2 < \\overline{X} < 0.2)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parent distribution",
          "workingLatex": "\\begin{array}{c|c}x&P\\\\ \\hline -1&0.25\\\\0&0.5\\\\1&0.25\\end{array}",
          "explanation": "Discrete non-normal parent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Mean",
          "workingLatex": "\\mu=0",
          "explanation": "First moment.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second moment",
          "workingLatex": "\\operatorname{E}(X^2)=0.5",
          "explanation": "Needed for variance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Variance",
          "workingLatex": "\\sigma^2=0.5",
          "explanation": "Parent variance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invoke CLT",
          "workingLatex": "\\overline{X}\\approx N(0,\\,0.007143)",
          "explanation": "$X$ discrete does not block the CLT.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Why CLT applies",
          "workingLatex": "\\text{i.i.d., finite }\\mu,\\sigma^2,\\;n\\text{ large}",
          "explanation": "Check conditions explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Event",
          "workingLatex": "P(-0.2<\\overline{X}<0.2)",
          "explanation": "Interval probability for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "SD",
          "workingLatex": "\\sigma_{\\overline{X}}=0.0845",
          "explanation": "Scale for standardising.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$z$-bounds",
          "workingLatex": "z_1=-2.366,\\;z_2=2.366",
          "explanation": "Standard normal boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate $\\Phi$",
          "workingLatex": "P=0.982",
          "explanation": "Table / calculator value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare exact mean",
          "workingLatex": "\\operatorname{E}(\\overline{X})=0",
          "explanation": "Centres the normal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Limitation",
          "workingLatex": "\\text{Approximation; accuracy improves with }n",
          "explanation": "Honest modelling note.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(-0.2<\\overline{X}<0.2)\\approx 0.982",
          "explanation": "Final result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(-0.2 < \\overline{X} < 0.2) \\approx 0.982$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q069",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": [
      "central-limit",
      "sample-sum",
      "sample-mean",
      "multi-step"
    ],
    "questionText": "Journey times (minutes) on a bus route are modelled by $X$. Independent observations of $X$ (mean 15, variance 36) form a sample of size 55. Using the CLT, estimate (a) $P(S > 900)$ where $S=\\sum X_i$, and (b) $P(\\overline{X} < 14)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "CLT for sum",
          "workingLatex": "S \\approx N(825,\\,1980)",
          "explanation": "Total of ${sampleN} observations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT for mean",
          "workingLatex": "\\overline{X} \\approx N(15,\\,0.654545)",
          "explanation": "Equivalent sampling law.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Link",
          "workingLatex": "S = 55\\overline{X}",
          "explanation": "Same information, different scale.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (a) event",
          "workingLatex": "P(S > 900)",
          "explanation": "Probability about the total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Standardise sum",
          "workingLatex": "z_S = 1.685",
          "explanation": "For the sum boundary.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sum probability",
          "workingLatex": "P(S > 900) \\approx 0.046",
          "explanation": "Upper tail for $S$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b) event",
          "workingLatex": "P(\\overline{X} < 14)",
          "explanation": "Probability about the average.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Standardise mean",
          "workingLatex": "z_M = -1.236",
          "explanation": "For the mean boundary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Mean probability",
          "workingLatex": "P(\\overline{X} < 14) \\approx 0.1082",
          "explanation": "Lower tail for $\\overline{X}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Consistency check",
          "workingLatex": "S > 900 \\iff \\overline{X} > 16.3636",
          "explanation": "Same events can be rewritten.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assumptions",
          "workingLatex": "\\text{i.i.d. with finite variance}",
          "explanation": "State modelling assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Context",
          "workingLatex": "Journey times (minutes) on a bus route are modelled by $X$.",
          "explanation": "Keep answers in context.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "P(S>900)\\approx 0.046;\\; P(\\overline{X}<14)\\approx 0.1082",
          "explanation": "Both parts.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\approx 0.046$; (b) $\\approx 0.1082$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Central limit theorem",
    "subtopicId": "fm.y1.stats.central-limit",
    "questionDiagram": null,
    "id": "fm.y1.stats.central-limit.q070",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "central-limit",
      "inference",
      "hypothesis",
      "multi-step"
    ],
    "questionText": "Scores on a psychometric test are modelled by $X$. Past data suggest $\\operatorname{Var}(X)=64$. A sample of size 80 gives $\\overline{x}=78.5$. Using the CLT, test $H_0:\\mu=80$ against $H_1:\\mu\\neq 80$ at the 5\\% level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0:\\mu=80\\quad H_1:\\mu\\neq 80",
          "explanation": "Two-sided test for the mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "CLT under $H_0$",
          "workingLatex": "\\overline{X}\\approx N\\!\\left(80,\\dfrac{64}{80}\\right)",
          "explanation": "Null sampling distribution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "Z=\\dfrac{\\overline{X}-80}{\\sigma/\\sqrt{n}}",
          "explanation": "Standardised sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Observed value",
          "workingLatex": "\\overline{x}=78.5",
          "explanation": "Given sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "SD under null",
          "workingLatex": "\\sigma_{\\overline{X}}=0.8944",
          "explanation": "Null standard error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $z$",
          "workingLatex": "z=-1.677",
          "explanation": "Observed test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Two-tail $p$-value",
          "workingLatex": "p=2(1-\\Phi(|z|))\\approx 0.0935",
          "explanation": "Probability of a result at least as extreme.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Significance level",
          "workingLatex": "\\alpha=0.05",
          "explanation": "Decision threshold.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision rule",
          "workingLatex": "0.0935\\geq 0.05\\Rightarrow\\text{do not reject }H_0",
          "explanation": "Compare $p$ with $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Insufficient evidence of a different mean}",
          "explanation": "Word the conclusion carefully.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "CLT role",
          "workingLatex": "\\text{Normal null law via CLT}",
          "explanation": "Parent need not be normal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Assumption",
          "workingLatex": "\\sigma^2\\text{ treated as known}",
          "explanation": "As in many FM CLT inference questions.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "Do not reject $H_0$ ($p\\approx 0.0935$)",
          "explanation": "Final decision.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at the 5\\% level ($p\\approx 0.0935$)."
    }
  }
];
