import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q001",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "hypotheses",
      "discrete-uniform"
    ],
    "questionText": "A die is rolled $120$ times and the face counts are recorded. State suitable null and alternative hypotheses for a $\\chi^2$ goodness-of-fit test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parameter under test",
          "workingLatex": "\\text{Whether the data fit the stated model}",
          "explanation": "Goodness-of-fit tests compare observed counts with theoretical expectations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\text{the data follow a discrete uniform distribution}",
          "explanation": "Assume the model is correct unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative",
          "workingLatex": "H_1{:}\\ \\text{the data do not follow that distribution}",
          "explanation": "A significant $\\chi^2$ points to lack of fit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test type",
          "workingLatex": "\\chi^2\\ \\text{goodness-of-fit test}",
          "explanation": "Compare $\\sum\\dfrac{(O-E)^2}{E}$ with a $\\chi^2$ critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "One-tailed test",
          "workingLatex": "\\text{Upper tail of }\\chi^2",
          "explanation": "Large $\\chi^2$ values indicate poor fit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\text{data fit the model},\\ H_1{:}\\ \\text{data do not fit}",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0$: the data follow the stated discrete uniform model. $H_1$: the data do not follow that model."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q002",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "hypotheses",
      "Poisson"
    ],
    "questionText": "The number of emails per hour is classified into categories. State suitable null and alternative hypotheses for a $\\chi^2$ goodness-of-fit test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parameter under test",
          "workingLatex": "\\text{Whether the data fit the stated model}",
          "explanation": "Goodness-of-fit tests compare observed counts with theoretical expectations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\text{the data follow a Poisson distribution}",
          "explanation": "Assume the model is correct unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative",
          "workingLatex": "H_1{:}\\ \\text{the data do not follow that distribution}",
          "explanation": "A significant $\\chi^2$ points to lack of fit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test type",
          "workingLatex": "\\chi^2\\ \\text{goodness-of-fit test}",
          "explanation": "Compare $\\sum\\dfrac{(O-E)^2}{E}$ with a $\\chi^2$ critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "One-tailed test",
          "workingLatex": "\\text{Upper tail of }\\chi^2",
          "explanation": "Large $\\chi^2$ values indicate poor fit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\text{data fit the model},\\ H_1{:}\\ \\text{data do not fit}",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0$: the data follow the stated Poisson model. $H_1$: the data do not follow that model."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q003",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "hypotheses",
      "binomial"
    ],
    "questionText": "The number of successes in $10$ trials is grouped into classes. State suitable null and alternative hypotheses for a $\\chi^2$ goodness-of-fit test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parameter under test",
          "workingLatex": "\\text{Whether the data fit the stated model}",
          "explanation": "Goodness-of-fit tests compare observed counts with theoretical expectations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\text{the data follow a binomial distribution}",
          "explanation": "Assume the model is correct unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative",
          "workingLatex": "H_1{:}\\ \\text{the data do not follow that distribution}",
          "explanation": "A significant $\\chi^2$ points to lack of fit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test type",
          "workingLatex": "\\chi^2\\ \\text{goodness-of-fit test}",
          "explanation": "Compare $\\sum\\dfrac{(O-E)^2}{E}$ with a $\\chi^2$ critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "One-tailed test",
          "workingLatex": "\\text{Upper tail of }\\chi^2",
          "explanation": "Large $\\chi^2$ values indicate poor fit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\text{data fit the model},\\ H_1{:}\\ \\text{data do not fit}",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0$: the data follow the stated binomial model. $H_1$: the data do not follow that model."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q004",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "hypotheses",
      "geometric"
    ],
    "questionText": "The trial number of the first success is recorded for $80$ experiments. State suitable null and alternative hypotheses for a $\\chi^2$ goodness-of-fit test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parameter under test",
          "workingLatex": "\\text{Whether the data fit the stated model}",
          "explanation": "Goodness-of-fit tests compare observed counts with theoretical expectations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Null hypothesis",
          "workingLatex": "H_0{:}\\ \\text{the data follow a geometric distribution}",
          "explanation": "Assume the model is correct unless evidence suggests otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative",
          "workingLatex": "H_1{:}\\ \\text{the data do not follow that distribution}",
          "explanation": "A significant $\\chi^2$ points to lack of fit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test type",
          "workingLatex": "\\chi^2\\ \\text{goodness-of-fit test}",
          "explanation": "Compare $\\sum\\dfrac{(O-E)^2}{E}$ with a $\\chi^2$ critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "One-tailed test",
          "workingLatex": "\\text{Upper tail of }\\chi^2",
          "explanation": "Large $\\chi^2$ values indicate poor fit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H_0{:}\\ \\text{data fit the model},\\ H_1{:}\\ \\text{data do not fit}",
          "explanation": "State both hypotheses clearly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0$: the data follow the stated geometric model. $H_1$: the data do not follow that model."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q005",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "contribution"
    ],
    "questionText": "In a goodness-of-fit test, For one category the observed frequency is $12$ and the expected frequency is $15$. Find its contribution to $\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Contribution formula",
          "workingLatex": "\\dfrac{(O-E)^2}{E}",
          "explanation": "Each class contributes this term to $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Difference",
          "workingLatex": "O - E = 12 - 15 = -3",
          "explanation": "Observed minus expected count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square",
          "workingLatex": "(O-E)^2 = 9",
          "explanation": "Square the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by expected",
          "workingLatex": "\\dfrac{9}{15} = 0.6",
          "explanation": "Normalise by the expected frequency.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Large values mean poor fit in that class}",
          "explanation": "A big contribution flags where the model fails.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\dfrac{(12-15)^2}{15} = 0.6",
          "explanation": "Contribution to $\\chi^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Contribution $= 0.6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q006",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "contribution"
    ],
    "questionText": "For one cell, For one category the observed frequency is $20$ and the expected frequency is $15$. Find its contribution to $\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Contribution formula",
          "workingLatex": "\\dfrac{(O-E)^2}{E}",
          "explanation": "Each class contributes this term to $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Difference",
          "workingLatex": "O - E = 20 - 15 = 5",
          "explanation": "Observed minus expected count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square",
          "workingLatex": "(O-E)^2 = 25",
          "explanation": "Square the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by expected",
          "workingLatex": "\\dfrac{25}{15} = 1.667",
          "explanation": "Normalise by the expected frequency.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Large values mean poor fit in that class}",
          "explanation": "A big contribution flags where the model fails.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\dfrac{(20-15)^2}{15} = 1.667",
          "explanation": "Contribution to $\\chi^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Contribution $= 1.667$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q007",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "contribution"
    ],
    "questionText": "A category has For one category the observed frequency is $8$ and the expected frequency is $12$. Find its contribution to $\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Contribution formula",
          "workingLatex": "\\dfrac{(O-E)^2}{E}",
          "explanation": "Each class contributes this term to $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Difference",
          "workingLatex": "O - E = 8 - 12 = -4",
          "explanation": "Observed minus expected count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square",
          "workingLatex": "(O-E)^2 = 16",
          "explanation": "Square the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by expected",
          "workingLatex": "\\dfrac{16}{12} = 1.333",
          "explanation": "Normalise by the expected frequency.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Large values mean poor fit in that class}",
          "explanation": "A big contribution flags where the model fails.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\dfrac{(8-12)^2}{12} = 1.333",
          "explanation": "Contribution to $\\chi^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Contribution $= 1.333$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q008",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "contribution"
    ],
    "questionText": "In a $\\chi^2$ table, For one category the observed frequency is $25$ and the expected frequency is $20$. Find its contribution to $\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Contribution formula",
          "workingLatex": "\\dfrac{(O-E)^2}{E}",
          "explanation": "Each class contributes this term to $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Difference",
          "workingLatex": "O - E = 25 - 20 = 5",
          "explanation": "Observed minus expected count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square",
          "workingLatex": "(O-E)^2 = 25",
          "explanation": "Square the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by expected",
          "workingLatex": "\\dfrac{25}{20} = 1.25",
          "explanation": "Normalise by the expected frequency.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Large values mean poor fit in that class}",
          "explanation": "A big contribution flags where the model fails.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\dfrac{(25-20)^2}{20} = 1.25",
          "explanation": "Contribution to $\\chi^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Contribution $= 1.25$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q009",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "contribution"
    ],
    "questionText": "One row shows For one category the observed frequency is $10$ and the expected frequency is $16$. Find its contribution to $\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Contribution formula",
          "workingLatex": "\\dfrac{(O-E)^2}{E}",
          "explanation": "Each class contributes this term to $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Difference",
          "workingLatex": "O - E = 10 - 16 = -6",
          "explanation": "Observed minus expected count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square",
          "workingLatex": "(O-E)^2 = 36",
          "explanation": "Square the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by expected",
          "workingLatex": "\\dfrac{36}{16} = 2.25",
          "explanation": "Normalise by the expected frequency.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Large values mean poor fit in that class}",
          "explanation": "A big contribution flags where the model fails.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\dfrac{(10-16)^2}{16} = 2.25",
          "explanation": "Contribution to $\\chi^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Contribution $= 2.25$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q010",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "degrees-of-freedom"
    ],
    "questionText": "A fully specified uniform distribution has A goodness-of-fit test uses $4$ classes and $0$ parameter(s) estimated from the sample. Find the degrees of freedom.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = k - 1 - r",
          "explanation": "One constraint from $\\sum E_i = n$; subtract estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Number of classes",
          "workingLatex": "k = 4",
          "explanation": "Categories after any pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimated parameters",
          "workingLatex": "r = 0",
          "explanation": "Parameters estimated from the data before testing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\nu = 4 - 1 - 0 = 3",
          "explanation": "Calculate degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in test",
          "workingLatex": "\\chi^2 \\sim \\chi^2_{3}\\ \\text{under }H_0",
          "explanation": "Reference distribution for the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\nu = 3",
          "explanation": "Degrees of freedom.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\nu = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q011",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "degrees-of-freedom"
    ],
    "questionText": "Five classes are used with no estimated parameters. A goodness-of-fit test uses $5$ classes and $0$ parameter(s) estimated from the sample. Find the degrees of freedom.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = k - 1 - r",
          "explanation": "One constraint from $\\sum E_i = n$; subtract estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Number of classes",
          "workingLatex": "k = 5",
          "explanation": "Categories after any pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimated parameters",
          "workingLatex": "r = 0",
          "explanation": "Parameters estimated from the data before testing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\nu = 5 - 1 - 0 = 4",
          "explanation": "Calculate degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in test",
          "workingLatex": "\\chi^2 \\sim \\chi^2_{4}\\ \\text{under }H_0",
          "explanation": "Reference distribution for the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\nu = 4",
          "explanation": "Degrees of freedom.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\nu = 4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q012",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "degrees-of-freedom"
    ],
    "questionText": "A Poisson test with six classes estimates $\\lambda$. A goodness-of-fit test uses $6$ classes and $1$ parameter(s) estimated from the sample. Find the degrees of freedom.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = k - 1 - r",
          "explanation": "One constraint from $\\sum E_i = n$; subtract estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Number of classes",
          "workingLatex": "k = 6",
          "explanation": "Categories after any pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimated parameters",
          "workingLatex": "r = 1",
          "explanation": "Parameters estimated from the data before testing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\nu = 6 - 1 - 1 = 4",
          "explanation": "Calculate degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in test",
          "workingLatex": "\\chi^2 \\sim \\chi^2_{4}\\ \\text{under }H_0",
          "explanation": "Reference distribution for the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\nu = 4",
          "explanation": "Degrees of freedom.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\nu = 4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q013",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "degrees-of-freedom"
    ],
    "questionText": "A geometric test estimates $p$ from four pooled classes. A goodness-of-fit test uses $4$ classes and $1$ parameter(s) estimated from the sample. Find the degrees of freedom.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = k - 1 - r",
          "explanation": "One constraint from $\\sum E_i = n$; subtract estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Number of classes",
          "workingLatex": "k = 4",
          "explanation": "Categories after any pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimated parameters",
          "workingLatex": "r = 1",
          "explanation": "Parameters estimated from the data before testing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\nu = 4 - 1 - 1 = 2",
          "explanation": "Calculate degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in test",
          "workingLatex": "\\chi^2 \\sim \\chi^2_{2}\\ \\text{under }H_0",
          "explanation": "Reference distribution for the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\nu = 2",
          "explanation": "Degrees of freedom.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\nu = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q014",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "degrees-of-freedom"
    ],
    "questionText": "Seven categories; one binomial parameter is estimated. A goodness-of-fit test uses $7$ classes and $1$ parameter(s) estimated from the sample. Find the degrees of freedom.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = k - 1 - r",
          "explanation": "One constraint from $\\sum E_i = n$; subtract estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Number of classes",
          "workingLatex": "k = 7",
          "explanation": "Categories after any pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimated parameters",
          "workingLatex": "r = 1",
          "explanation": "Parameters estimated from the data before testing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\nu = 7 - 1 - 1 = 5",
          "explanation": "Calculate degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in test",
          "workingLatex": "\\chi^2 \\sim \\chi^2_{5}\\ \\text{under }H_0",
          "explanation": "Reference distribution for the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\nu = 5",
          "explanation": "Degrees of freedom.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\nu = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q015",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "degrees-of-freedom"
    ],
    "questionText": "Eight equally likely outcomes are tested. A goodness-of-fit test uses $8$ classes and $0$ parameter(s) estimated from the sample. Find the degrees of freedom.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = k - 1 - r",
          "explanation": "One constraint from $\\sum E_i = n$; subtract estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Number of classes",
          "workingLatex": "k = 8",
          "explanation": "Categories after any pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimated parameters",
          "workingLatex": "r = 0",
          "explanation": "Parameters estimated from the data before testing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "\\nu = 8 - 1 - 0 = 7",
          "explanation": "Calculate degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in test",
          "workingLatex": "\\chi^2 \\sim \\chi^2_{7}\\ \\text{under }H_0",
          "explanation": "Reference distribution for the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\nu = 7",
          "explanation": "Degrees of freedom.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\nu = 7$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q016",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "uniform",
      "expected"
    ],
    "questionText": "An experiment has A $\\chi^2$ test checks whether outcomes are equally likely across $4$ categories. There are $60$ observations in total. Find the expected frequency for each category.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Discrete uniform model",
          "workingLatex": "E_i = \\dfrac{n}{k}",
          "explanation": "Each of $k$ equally likely outcomes gets the same expected count.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total observations",
          "workingLatex": "n = 60",
          "explanation": "Sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Number of classes",
          "workingLatex": "k = 4",
          "explanation": "Equally likely categories.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expected per class",
          "workingLatex": "E = \\dfrac{60}{4} = 15",
          "explanation": "Divide total by number of classes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check sum",
          "workingLatex": "k \\times E = 4 \\times 15 = 60",
          "explanation": "Expected frequencies sum to $n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E = 15",
          "explanation": "Expected frequency in each class.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expected frequency in each class $= 15$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q017",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "uniform",
      "expected"
    ],
    "questionText": "Outcomes $1$–$5$ are A $\\chi^2$ test checks whether outcomes are equally likely across $5$ categories. There are $100$ observations in total. Find the expected frequency for each category.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Discrete uniform model",
          "workingLatex": "E_i = \\dfrac{n}{k}",
          "explanation": "Each of $k$ equally likely outcomes gets the same expected count.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total observations",
          "workingLatex": "n = 100",
          "explanation": "Sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Number of classes",
          "workingLatex": "k = 5",
          "explanation": "Equally likely categories.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expected per class",
          "workingLatex": "E = \\dfrac{100}{5} = 20",
          "explanation": "Divide total by number of classes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check sum",
          "workingLatex": "k \\times E = 5 \\times 20 = 100",
          "explanation": "Expected frequencies sum to $n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E = 20",
          "explanation": "Expected frequency in each class.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expected frequency in each class $= 20$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q018",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "uniform",
      "expected"
    ],
    "questionText": "Eight categories each A $\\chi^2$ test checks whether outcomes are equally likely across $8$ categories. There are $80$ observations in total. Find the expected frequency for each category.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Discrete uniform model",
          "workingLatex": "E_i = \\dfrac{n}{k}",
          "explanation": "Each of $k$ equally likely outcomes gets the same expected count.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Total observations",
          "workingLatex": "n = 80",
          "explanation": "Sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Number of classes",
          "workingLatex": "k = 8",
          "explanation": "Equally likely categories.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expected per class",
          "workingLatex": "E = \\dfrac{80}{8} = 10",
          "explanation": "Divide total by number of classes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check sum",
          "workingLatex": "k \\times E = 8 \\times 10 = 80",
          "explanation": "Expected frequencies sum to $n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E = 10",
          "explanation": "Expected frequency in each class.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expected frequency in each class $= 10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q019",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "calculation",
      "uniform"
    ],
    "questionText": "For a four-class test, Observed frequencies are $12, 15, 18, 15$ and expected frequencies are $15, 15, 15, 15$. Calculate $\\chi^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "\\chi^2 = \\sum \\dfrac{(O-E)^2}{E}",
          "explanation": "Sum contributions over all classes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Class 1",
          "workingLatex": "\\dfrac{(12-15)^2}{15} = 0.6",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Class 2",
          "workingLatex": "\\dfrac{(15-15)^2}{15} = 0",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Class 3",
          "workingLatex": "\\dfrac{(18-15)^2}{15} = 0.6",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Class 4",
          "workingLatex": "\\dfrac{(15-15)^2}{15} = 0",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sum contributions",
          "workingLatex": "\\dfrac{(12-15)^2}{15} + \\dfrac{(15-15)^2}{15} + \\dfrac{(18-15)^2}{15} + \\dfrac{(15-15)^2}{15} = 1.2",
          "explanation": "Add all terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 1.2",
          "explanation": "Calculated test statistic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 1.2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q020",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "calculation",
      "uniform"
    ],
    "questionText": "Observed and expected are Observed frequencies are $10, 14, 16, 20$ and expected frequencies are $15, 15, 15, 15$. Calculate $\\chi^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "\\chi^2 = \\sum \\dfrac{(O-E)^2}{E}",
          "explanation": "Sum contributions over all classes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Class 1",
          "workingLatex": "\\dfrac{(10-15)^2}{15} = 1.6667",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Class 2",
          "workingLatex": "\\dfrac{(14-15)^2}{15} = 0.0667",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Class 3",
          "workingLatex": "\\dfrac{(16-15)^2}{15} = 0.0667",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Class 4",
          "workingLatex": "\\dfrac{(20-15)^2}{15} = 1.6667",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sum contributions",
          "workingLatex": "\\dfrac{(10-15)^2}{15} + \\dfrac{(14-15)^2}{15} + \\dfrac{(16-15)^2}{15} + \\dfrac{(20-15)^2}{15} = 3.467",
          "explanation": "Add all terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 3.467",
          "explanation": "Calculated test statistic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 3.467$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q021",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "calculation",
      "uniform"
    ],
    "questionText": "Five classes: Observed frequencies are $8, 12, 10, 14, 16$ and expected frequencies are $12, 12, 12, 12, 12$. Calculate $\\chi^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "\\chi^2 = \\sum \\dfrac{(O-E)^2}{E}",
          "explanation": "Sum contributions over all classes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Class 1",
          "workingLatex": "\\dfrac{(8-12)^2}{12} = 1.3333",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Class 2",
          "workingLatex": "\\dfrac{(12-12)^2}{12} = 0",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Class 3",
          "workingLatex": "\\dfrac{(10-12)^2}{12} = 0.3333",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Class 4",
          "workingLatex": "\\dfrac{(14-12)^2}{12} = 0.3333",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Class 5",
          "workingLatex": "\\dfrac{(16-12)^2}{12} = 1.3333",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sum contributions",
          "workingLatex": "\\dfrac{(8-12)^2}{12} + \\dfrac{(12-12)^2}{12} + \\dfrac{(10-12)^2}{12} + \\dfrac{(14-12)^2}{12} + \\dfrac{(16-12)^2}{12} = 3.333",
          "explanation": "Add all terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 3.333",
          "explanation": "Calculated test statistic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 3.333$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q022",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "calculation"
    ],
    "questionText": "Three categories have Observed frequencies are $18, 22, 20$ and expected frequencies are $20, 20, 20$. Calculate $\\chi^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "\\chi^2 = \\sum \\dfrac{(O-E)^2}{E}",
          "explanation": "Sum contributions over all classes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Class 1",
          "workingLatex": "\\dfrac{(18-20)^2}{20} = 0.2",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Class 2",
          "workingLatex": "\\dfrac{(22-20)^2}{20} = 0.2",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Class 3",
          "workingLatex": "\\dfrac{(20-20)^2}{20} = 0",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum contributions",
          "workingLatex": "\\dfrac{(18-20)^2}{20} + \\dfrac{(22-20)^2}{20} + \\dfrac{(20-20)^2}{20} = 0.4",
          "explanation": "Add all terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 0.4",
          "explanation": "Calculated test statistic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 0.4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q023",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "calculation"
    ],
    "questionText": "A test uses Observed frequencies are $5, 8, 12, 15$ and expected frequencies are $10, 10, 10, 10$. Calculate $\\chi^2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Test statistic",
          "workingLatex": "\\chi^2 = \\sum \\dfrac{(O-E)^2}{E}",
          "explanation": "Sum contributions over all classes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Class 1",
          "workingLatex": "\\dfrac{(5-10)^2}{10} = 2.5",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Class 2",
          "workingLatex": "\\dfrac{(8-10)^2}{10} = 0.4",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Class 3",
          "workingLatex": "\\dfrac{(12-10)^2}{10} = 0.4",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Class 4",
          "workingLatex": "\\dfrac{(15-10)^2}{10} = 2.5",
          "explanation": "Contribution from this category.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sum contributions",
          "workingLatex": "\\dfrac{(5-10)^2}{10} + \\dfrac{(8-10)^2}{10} + \\dfrac{(12-10)^2}{10} + \\dfrac{(15-10)^2}{10} = 5.8",
          "explanation": "Add all terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 5.8",
          "explanation": "Calculated test statistic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 5.8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q024",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "formula"
    ],
    "questionText": "Write down the test statistic for a $\\chi^2$ goodness-of-fit test in terms of observed frequencies $O_i$ and expected frequencies $E_i$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\chi^2 = \\sum_{i=1}^{k} \\dfrac{(O_i - E_i)^2}{E_i}",
          "explanation": "Sum over all $k$ classes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Observed",
          "workingLatex": "O_i = \\text{observed count in class }i",
          "explanation": "Data from the sample.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expected",
          "workingLatex": "E_i = n \\times p_i",
          "explanation": "From the null model.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Large values",
          "workingLatex": "\\chi^2_{\\text{large}} \\Rightarrow \\text{poor fit}",
          "explanation": "Big gaps between $O$ and $E$ inflate the statistic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distribution",
          "workingLatex": "\\chi^2 \\sim \\chi^2_{\\nu}\\ \\text{under }H_0",
          "explanation": "Approximately chi-squared when expected counts are adequate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\chi^2 = \\sum \\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit statistic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = \\sum_{i=1}^{k} \\dfrac{(O_i - E_i)^2}{E_i}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q025",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "conditions"
    ],
    "questionText": "State two conditions that should be met before applying a $\\chi^2$ goodness-of-fit test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Independent observations",
          "workingLatex": "\\text{Counts from independent trials}",
          "explanation": "One observation must not influence another.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expected frequencies",
          "workingLatex": "E_i \\geq 5\\ \\text{(or pool if not)}",
          "explanation": "The $\\chi^2$ approximation requires adequate expected counts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Random sample",
          "workingLatex": "\\text{Data should be randomly collected}",
          "explanation": "So inference to the population is valid.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Mutually exclusive classes",
          "workingLatex": "\\text{Each count in exactly one class}",
          "explanation": "Categories partition the sample space.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Model fully specified or parameters estimated",
          "workingLatex": "\\text{Expected counts follow }H_0",
          "explanation": "The null distribution must be clear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E_i \\geq 5;\\ \\text{independent observations}",
          "explanation": "Two key conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expected frequencies should be at least $5$ in each class (pool if necessary), and observations should be independent."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q026",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "critical-value"
    ],
    "questionText": "For a $\\chi^2$ goodness-of-fit test at the $5\\%$ significance level with $\\nu = 3$, the critical value is $\\chi^2_{5\\%}(3)$. State this value (to $3$ d.p.).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distribution",
          "workingLatex": "\\chi^2_3",
          "explanation": "Chi-squared with $3$ degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Upper tail",
          "workingLatex": "5\\%\\ \\text{significance}",
          "explanation": "Reject $H_0$ for large $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Table value",
          "workingLatex": "\\chi^2_{5\\%}(3) = 7.815",
          "explanation": "From standard statistical tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\chi^2_{\\text{calc}} > 7.815 \\Rightarrow \\text{reject }H_0",
          "explanation": "Compare test statistic to this value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "One-tailed",
          "workingLatex": "\\text{Upper tail only}",
          "explanation": "Only large $\\chi^2$ is evidence against fit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "7.815",
          "explanation": "Critical value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7.815$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q027",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "critical-value"
    ],
    "questionText": "Find $\\chi^2_{5\\%}(4)$, the critical value for a test at $5\\%$ with $4$ degrees of freedom.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look up",
          "workingLatex": "\\chi^2_4\\ \\text{distribution}",
          "explanation": "Four degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "5% upper tail",
          "workingLatex": "\\chi^2_{5\\%}(4) = 9.488",
          "explanation": "Standard table entry.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use",
          "workingLatex": "\\chi^2_{\\text{calc}} > 9.488",
          "explanation": "Reject $H_0$ if exceeded.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Significance",
          "workingLatex": "5\\%\\ \\text{level}",
          "explanation": "Probability of Type I error if $H_0$ true.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "9.488",
          "explanation": "Critical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "\\text{Always use upper tail for GOF}",
          "explanation": "Large $\\chi^2$ means poor fit.",
          "diagram": null
        }
      ],
      "finalAnswer": "$9.488$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q028",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "conclusion"
    ],
    "questionText": "A goodness-of-fit test gives $\\chi^2_{\\text{calc}} = 3.2$ and $\\chi^2_{5\\%}(2) = 5.991$. State the conclusion at the $5\\%$ level.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare",
          "workingLatex": "3.2 < 5.991",
          "explanation": "Test statistic is below the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Insufficient evidence of lack of fit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Significance",
          "workingLatex": "5\\%\\ \\text{level}",
          "explanation": "Standard test level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpretation",
          "workingLatex": "\\text{Data consistent with the model}",
          "explanation": "Observed counts are close enough to expected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Not proof",
          "workingLatex": "\\text{Failure to reject }\\neq \\text{proof of fit}",
          "explanation": "The model may still be approximate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Conclusion at $5\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at the $5\\%$ level: there is no significant evidence that the data fail to fit the model."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q029",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "uniform",
      "full-test"
    ],
    "questionText": "Face counts on a fair die are Observed frequencies for $4$ equally likely categories are $12, 15, 18, 15$ (total $60$). Test at the $5\\%$ significance level whether the data are consistent with a discrete uniform distribution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{discrete uniform},\\ H_1{:}\\ \\text{not uniform}",
          "explanation": "Test equal probabilities across $k$ categories.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expected frequencies",
          "workingLatex": "E_i = \\dfrac{60}{4} = 15",
          "explanation": "Same expected count in each class.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $\\chi^2$",
          "workingLatex": "\\chi^2_{\\text{calc}} = 1.2",
          "explanation": "Use $\\sum (O-E)^2/E$ with the observed counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = 4 - 1 = 3",
          "explanation": "No parameters estimated for a fully specified uniform.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical value",
          "workingLatex": "\\chi^2_{5\\%}(3) = 7.815",
          "explanation": "Upper-tail critical value from tables.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\chi^2_{\\text{calc}} < 7.815",
          "explanation": "Test statistic versus critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject }H_0\\ \\text{at 5\\%}",
          "explanation": "Relate the comparison to the context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 1.2;\\ \\text{do not reject }H_0",
          "explanation": "Final test conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 1.2$. Since $\\chi^2 < 7.815$, do not reject $H_0$ at $5\\%$: data are consistent with a uniform distribution."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q030",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "uniform",
      "full-test"
    ],
    "questionText": "Five outcomes are Observed frequencies for $5$ equally likely categories are $8, 12, 10, 14, 16$ (total $60$). Test at the $5\\%$ significance level whether the data are consistent with a discrete uniform distribution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{discrete uniform},\\ H_1{:}\\ \\text{not uniform}",
          "explanation": "Test equal probabilities across $k$ categories.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expected frequencies",
          "workingLatex": "E_i = \\dfrac{60}{5} = 12",
          "explanation": "Same expected count in each class.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $\\chi^2$",
          "workingLatex": "\\chi^2_{\\text{calc}} = 3.333",
          "explanation": "Use $\\sum (O-E)^2/E$ with the observed counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = 5 - 1 = 4",
          "explanation": "No parameters estimated for a fully specified uniform.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical value",
          "workingLatex": "\\chi^2_{5\\%}(4) = 9.488",
          "explanation": "Upper-tail critical value from tables.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\chi^2_{\\text{calc}} < 9.488",
          "explanation": "Test statistic versus critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject }H_0\\ \\text{at 5\\%}",
          "explanation": "Relate the comparison to the context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 3.333;\\ \\text{do not reject }H_0",
          "explanation": "Final test conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 3.333$. Since $\\chi^2 < 9.488$, do not reject $H_0$ at $5\\%$: data are consistent with a uniform distribution."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q031",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "uniform",
      "full-test"
    ],
    "questionText": "A researcher suspects a biased spinner: Observed frequencies for $5$ equally likely categories are $5, 9, 11, 13, 22$ (total $60$). Test at the $5\\%$ significance level whether the data are consistent with a discrete uniform distribution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{discrete uniform},\\ H_1{:}\\ \\text{not uniform}",
          "explanation": "Test equal probabilities across $k$ categories.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expected frequencies",
          "workingLatex": "E_i = \\dfrac{60}{5} = 12",
          "explanation": "Same expected count in each class.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $\\chi^2$",
          "workingLatex": "\\chi^2_{\\text{calc}} = 13.333",
          "explanation": "Use $\\sum (O-E)^2/E$ with the observed counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = 5 - 1 = 4",
          "explanation": "No parameters estimated for a fully specified uniform.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical value",
          "workingLatex": "\\chi^2_{5\\%}(4) = 9.488",
          "explanation": "Upper-tail critical value from tables.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\chi^2_{\\text{calc}} > 9.488",
          "explanation": "Test statistic versus critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Reject }H_0\\ \\text{at 5\\%}",
          "explanation": "Relate the comparison to the context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 13.333;\\ \\text{reject }H_0",
          "explanation": "Final test conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 13.333$. Since $\\chi^2 > 9.488$, reject $H_0$ at $5\\%$: insufficient evidence that the distribution is uniform."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q032",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "uniform",
      "full-test"
    ],
    "questionText": "Four sectors should be equally likely ($n=50$): Observed frequencies for $4$ equally likely categories are $6, 10, 14, 20$ (total $50$). Test at the $5\\%$ significance level whether the data are consistent with a discrete uniform distribution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{discrete uniform},\\ H_1{:}\\ \\text{not uniform}",
          "explanation": "Test equal probabilities across $k$ categories.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expected frequencies",
          "workingLatex": "E_i = \\dfrac{50}{4} = 12.5",
          "explanation": "Same expected count in each class.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $\\chi^2$",
          "workingLatex": "\\chi^2_{\\text{calc}} = 8.56",
          "explanation": "Use $\\sum (O-E)^2/E$ with the observed counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = 4 - 1 = 3",
          "explanation": "No parameters estimated for a fully specified uniform.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical value",
          "workingLatex": "\\chi^2_{5\\%}(3) = 7.815",
          "explanation": "Upper-tail critical value from tables.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare",
          "workingLatex": "\\chi^2_{\\text{calc}} > 7.815",
          "explanation": "Test statistic versus critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Reject }H_0\\ \\text{at 5\\%}",
          "explanation": "Relate the comparison to the context.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 8.56;\\ \\text{reject }H_0",
          "explanation": "Final test conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 8.56$. Since $\\chi^2 > 7.815$, reject $H_0$ at $5\\%$: insufficient evidence that the distribution is uniform."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q033",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "poisson",
      "estimate-lambda"
    ],
    "questionText": "Calls per minute: Counts for $X = 0, 1, 2, 3, 4$ are $8, 16, 20, 12, 4$ with total $60$. Estimate $\\lambda$ for a Poisson model before a goodness-of-fit test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Estimate $\\lambda$",
          "workingLatex": "\\hat{\\lambda} = \\dfrac{\\sum x_i O_i}{n}",
          "explanation": "Sample mean from grouped data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Weighted sum",
          "workingLatex": "\\sum x_i O_i = 0\\times8 + 1\\times16 + 2\\times20 + 3\\times12 + 4\\times4",
          "explanation": "Multiply each value by its count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "\\sum x_i O_i = 108",
          "explanation": "Total of $x \\times O$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $n$",
          "workingLatex": "\\hat{\\lambda} = \\dfrac{108}{60} = 1.6",
          "explanation": "Mean number of events per trial.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in expected counts",
          "workingLatex": "E_i = n \\times P(X = x_i)",
          "explanation": "Poisson probabilities with $\\hat{\\lambda}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\hat{\\lambda} = 1.6",
          "explanation": "Estimated Poisson mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\lambda} = 1.6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q034",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "poisson",
      "estimate-lambda"
    ],
    "questionText": "Defects per item: Counts for $X = 0, 1, 2, 3, 4$ are $10, 22, 18, 8, 2$ with total $60$. Estimate $\\lambda$ for a Poisson model before a goodness-of-fit test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Estimate $\\lambda$",
          "workingLatex": "\\hat{\\lambda} = \\dfrac{\\sum x_i O_i}{n}",
          "explanation": "Sample mean from grouped data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Weighted sum",
          "workingLatex": "\\sum x_i O_i = 0\\times10 + 1\\times22 + 2\\times18 + 3\\times8 + 4\\times2",
          "explanation": "Multiply each value by its count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "\\sum x_i O_i = 90",
          "explanation": "Total of $x \\times O$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $n$",
          "workingLatex": "\\hat{\\lambda} = \\dfrac{90}{60} = 1.5",
          "explanation": "Mean number of events per trial.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in expected counts",
          "workingLatex": "E_i = n \\times P(X = x_i)",
          "explanation": "Poisson probabilities with $\\hat{\\lambda}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\hat{\\lambda} = 1.5",
          "explanation": "Estimated Poisson mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\lambda} = 1.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q035",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "poisson",
      "estimate-lambda"
    ],
    "questionText": "For $X=0,1,2,3$, Counts for $X = 0, 1, 2, 3$ are $12, 24, 18, 6$ with total $60$. Estimate $\\lambda$ for a Poisson model before a goodness-of-fit test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Estimate $\\lambda$",
          "workingLatex": "\\hat{\\lambda} = \\dfrac{\\sum x_i O_i}{n}",
          "explanation": "Sample mean from grouped data.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Weighted sum",
          "workingLatex": "\\sum x_i O_i = 0\\times12 + 1\\times24 + 2\\times18 + 3\\times6",
          "explanation": "Multiply each value by its count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "\\sum x_i O_i = 78",
          "explanation": "Total of $x \\times O$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by $n$",
          "workingLatex": "\\hat{\\lambda} = \\dfrac{78}{60} = 1.2",
          "explanation": "Mean number of events per trial.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in expected counts",
          "workingLatex": "E_i = n \\times P(X = x_i)",
          "explanation": "Poisson probabilities with $\\hat{\\lambda}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\hat{\\lambda} = 1.2",
          "explanation": "Estimated Poisson mean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{\\lambda} = 1.2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q036",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "binomial",
      "full-test"
    ],
    "questionText": "One hundred sets of $10$ trials with $p=0.4$: A $\\chi^2$ test of $B(100, 0.4)$ gives observed frequencies $5, 18, 32, 25, 20$ and expected frequencies $6.4, 16, 28.8, 25.6, 23.2$. Given $\\chi^2 = 4.82$ and $\\nu = 4$, test at $5\\%$ significance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "B(100, 0.4)",
          "explanation": "Binomial with specified $n$ and $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expected frequencies",
          "workingLatex": "E = (6.4, 16, 28.8, 25.6, 23.2)",
          "explanation": "From binomial probabilities times total sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "\\chi^2 = 4.82",
          "explanation": "Calculated from observed and expected counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = 4",
          "explanation": "Classes minus one minus parameters estimated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical value",
          "workingLatex": "\\chi^2_{5\\%}(4) = 9.488",
          "explanation": "From $\\chi^2$ tables.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\chi^2 < 9.488",
          "explanation": "Compare calculated and critical values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "State the inference.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Final conclusion at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at $5\\%$: data are consistent with $B(100, 0.4)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q037",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "binomial",
      "full-test"
    ],
    "questionText": "Grouped $B(10, 0.5)$ data: A $\\chi^2$ test of $B(100, 0.5)$ gives observed frequencies $8, 20, 35, 22, 15$ and expected frequencies $10, 25, 35, 20, 10$. Given $\\chi^2 = 3.45$ and $\\nu = 4$, test at $5\\%$ significance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "B(100, 0.5)",
          "explanation": "Binomial with specified $n$ and $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expected frequencies",
          "workingLatex": "E = (10, 25, 35, 20, 10)",
          "explanation": "From binomial probabilities times total sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "\\chi^2 = 3.45",
          "explanation": "Calculated from observed and expected counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = 4",
          "explanation": "Classes minus one minus parameters estimated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical value",
          "workingLatex": "\\chi^2_{5\\%}(4) = 9.488",
          "explanation": "From $\\chi^2$ tables.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\chi^2 < 9.488",
          "explanation": "Compare calculated and critical values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "State the inference.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Final conclusion at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at $5\\%$: data are consistent with $B(100, 0.5)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q038",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "binomial",
      "full-test"
    ],
    "questionText": "A factory claims $B(10,0.5)$: A $\\chi^2$ test of $B(100, 0.5)$ gives observed frequencies $3, 12, 28, 30, 27$ and expected frequencies $5, 15, 30, 30, 20$. Given $\\chi^2 = 8.67$ and $\\nu = 4$, test at $5\\%$ significance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "B(100, 0.5)",
          "explanation": "Binomial with specified $n$ and $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expected frequencies",
          "workingLatex": "E = (5, 15, 30, 30, 20)",
          "explanation": "From binomial probabilities times total sample size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test statistic",
          "workingLatex": "\\chi^2 = 8.67",
          "explanation": "Calculated from observed and expected counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = 4",
          "explanation": "Classes minus one minus parameters estimated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Critical value",
          "workingLatex": "\\chi^2_{5\\%}(4) = 9.488",
          "explanation": "From $\\chi^2$ tables.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decision",
          "workingLatex": "\\chi^2 < 9.488",
          "explanation": "Compare calculated and critical values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "State the inference.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Final conclusion at the given significance level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at $5\\%$: data are consistent with $B(100, 0.5)$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q039",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "pooling"
    ],
    "questionText": "In a Poisson goodness-of-fit test, In a goodness-of-fit test, classes 4 and 5 have expected frequencies less than $5$. Describe how to pool classes and state the new number of classes $k = 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rule for pooling",
          "workingLatex": "E_i \\geq 5",
          "explanation": "Expected counts below 5 should be combined with neighbours.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify small classes",
          "workingLatex": "\\text{Classes with }E < 5{:}\\ 4 and 5",
          "explanation": "These need pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine adjacent classes",
          "workingLatex": "\\text{Add observed and expected frequencies}",
          "explanation": "Preserve total $n$ while enlarging cells.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New class count",
          "workingLatex": "k = 4",
          "explanation": "Fewer categories after pooling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recalculate df",
          "workingLatex": "\\nu = 4 - 1 - r",
          "explanation": "Update degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Pool to }classes $3$–$5$",
          "explanation": "Pooled grouping for the test.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combine 4 and 5 with adjacent classes to give $k = 4$ classes, each with expected frequency at least $5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q040",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "pooling"
    ],
    "questionText": "When testing a geometric distribution, In a goodness-of-fit test, classes 6 and 7 have expected frequencies less than $5$. Describe how to pool classes and state the new number of classes $k = 5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rule for pooling",
          "workingLatex": "E_i \\geq 5",
          "explanation": "Expected counts below 5 should be combined with neighbours.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify small classes",
          "workingLatex": "\\text{Classes with }E < 5{:}\\ 6 and 7",
          "explanation": "These need pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine adjacent classes",
          "workingLatex": "\\text{Add observed and expected frequencies}",
          "explanation": "Preserve total $n$ while enlarging cells.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New class count",
          "workingLatex": "k = 5",
          "explanation": "Fewer categories after pooling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recalculate df",
          "workingLatex": "\\nu = 5 - 1 - r",
          "explanation": "Update degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Pool to }classes $5$–$7$",
          "explanation": "Pooled grouping for the test.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combine 6 and 7 with adjacent classes to give $k = 5$ classes, each with expected frequency at least $5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q041",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "pooling"
    ],
    "questionText": "For a binomial with many classes, In a goodness-of-fit test, classes 3, 4 have expected frequencies less than $5$. Describe how to pool classes and state the new number of classes $k = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rule for pooling",
          "workingLatex": "E_i \\geq 5",
          "explanation": "Expected counts below 5 should be combined with neighbours.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify small classes",
          "workingLatex": "\\text{Classes with }E < 5{:}\\ 3, 4",
          "explanation": "These need pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine adjacent classes",
          "workingLatex": "\\text{Add observed and expected frequencies}",
          "explanation": "Preserve total $n$ while enlarging cells.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "New class count",
          "workingLatex": "k = 3",
          "explanation": "Fewer categories after pooling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recalculate df",
          "workingLatex": "\\nu = 3 - 1 - r",
          "explanation": "Update degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Pool to }classes $3$ and $4$",
          "explanation": "Pooled grouping for the test.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "Combine 3, 4 with adjacent classes to give $k = 3$ classes, each with expected frequency at least $5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q042",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "poisson",
      "full-test"
    ],
    "questionText": "The numbers of typing errors per page are grouped: $0$ ($12$), $1$ ($24$), $2$ ($18$), $3+$ ($6$), total $60$. Using $\\hat{\\lambda}=1.2$, expected counts are $18.1$, $21.7$, $13.0$, $7.2$. Calculate $\\chi^2$ (to $2$ d.p.) and test at $5\\%$ with $\\nu=2$ ($\\chi^2_{5\\%}(2)=5.991$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Contributions",
          "workingLatex": "\\dfrac{(12-18.1)^2}{18.1} + \\dfrac{(24-21.7)^2}{21.7} + \\dfrac{(18-13)^2}{13} + \\dfrac{(6-7.2)^2}{7.2}",
          "explanation": "Four classes after pooling.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate",
          "workingLatex": "2.06 + 0.24 + 1.92 + 0.20 = 4.42",
          "explanation": "Sum of contributions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare",
          "workingLatex": "4.42 < 5.991",
          "explanation": "Below the $5\\%$ critical value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu = 2",
          "explanation": "Four classes minus one minus one estimated parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Poisson model is consistent with data.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 4.42;\\ \\text{do not reject }H_0",
          "explanation": "Test result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 4.42$. Do not reject $H_0$ at $5\\%$: a Poisson distribution with $\\lambda \\approx 1.2$ is consistent with the data."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q043",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "geometric",
      "estimate-p"
    ],
    "questionText": "In $50$ trials the first success occurs on trial $1$ ($15$ times), $2$ ($12$), $3$ ($10$), $4$ ($8$), $5+$ ($5$). Estimate $p$ for a geometric model using $\\hat{p} = 1/\\bar{x}$ where $\\bar{x}$ is the sample mean trial number.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Mean trial number",
          "workingLatex": "\\bar{x} = \\dfrac{\\sum x_i O_i}{n}",
          "explanation": "Average trial of first success.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Weighted sum",
          "workingLatex": "1(15) + 2(12) + 3(10) + 4(8) + 6(5) = 15+24+30+32+30 = 111",
          "explanation": "Use mid-point $6$ for $5+$ class.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mean",
          "workingLatex": "\\bar{x} = 111/50 = 2.22",
          "explanation": "Sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Estimate $p$",
          "workingLatex": "\\hat{p} = 1/\\bar{x} = 1/2.22 \\approx 0.45",
          "explanation": "For geometric, $\\operatorname{E}(X)=1/p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use in test",
          "workingLatex": "E_i = n \\times (1-p)^{x-1}p",
          "explanation": "Expected counts from estimated $p$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\hat{p} \\approx 0.45",
          "explanation": "Estimated success probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\hat{p} \\approx 0.45$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q044",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "uniform",
      "die"
    ],
    "questionText": "A die is rolled $120$ times: faces $1$–$6$ have counts $25$, $18$, $22$, $15$, $20$, $20$. Test at $5\\%$ whether the die is fair ($\\chi^2_{5\\%}(5)=11.070$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expected",
          "workingLatex": "E = 120/6 = 20",
          "explanation": "Each face equally likely if fair.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $\\chi^2$",
          "workingLatex": "\\sum\\dfrac{(O-20)^2}{20}",
          "explanation": "Six contributions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sum",
          "workingLatex": "(25-20)²/20 + (18-20)²/20 + ... = 1.25+0.2+0.2+1.25+0+0 = 2.9",
          "explanation": "Total test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "2.9 < 11.070",
          "explanation": "Well below critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "df",
          "workingLatex": "\\nu = 5",
          "explanation": "Six faces minus one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Die appears fair.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\chi^2 = 2.9;\\ \\text{fair}",
          "explanation": "Final result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 = 2.9$. Do not reject $H_0$ at $5\\%$: no evidence the die is biased."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q045",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "poisson",
      "full-test"
    ],
    "questionText": "Flaws per metre: $0$ ($10$), $1$ ($25$), $2$ ($20$), $3$ ($10$), $4+$ ($5$), total $70$. With $\\hat{\\lambda}=1.43$ and expected $14.0$, $20.0$, $14.3$, $6.8$, $14.9$ (after pooling), $\\chi^2=6.8$, $\\nu=3$, $\\chi^2_{5\\%}(3)=7.815$. State the conclusion.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{Poisson},\\ H_1{:}\\ \\text{not Poisson}",
          "explanation": "Goodness of fit to Poisson model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test statistic",
          "workingLatex": "\\chi^2 = 6.8",
          "explanation": "Given calculated value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical value",
          "workingLatex": "7.815",
          "explanation": "At $5\\%$ with $\\nu=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "6.8 < 7.815",
          "explanation": "Do not reject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Parameter",
          "workingLatex": "\\hat{\\lambda}=1.43",
          "explanation": "Estimated from data.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Poisson model adequate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Consistent with Poisson}",
          "explanation": "Final inference.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at $5\\%$: a Poisson distribution with $\\lambda \\approx 1.43$ fits the data."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q046",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "binomial",
      "expected"
    ],
    "questionText": "For $80$ observations of $B(4, 0.25)$, find the expected frequency of exactly $2$ successes.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Binomial probability",
          "workingLatex": "P(X=2) = \\binom{4}{2}(0.25)^2(0.75)^2",
          "explanation": "PMF at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate",
          "workingLatex": "\\binom{4}{2} = 6",
          "explanation": "Number of combinations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Probabilities",
          "workingLatex": "(0.25)²(0.75)² = 0.0625 × 0.5625 = 0.03516",
          "explanation": "Probability of exactly $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expected count",
          "workingLatex": "E = 80 × 0.03516 = 2.81",
          "explanation": "Multiply by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note",
          "workingLatex": "E < 5 \\Rightarrow \\text{pool}",
          "explanation": "This class may need combining.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "E \\approx 2.81",
          "explanation": "Expected frequency.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "Expected frequency $\\approx 2.81$ (pool with adjacent class as $E < 5$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q047",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "geometric",
      "full-test"
    ],
    "questionText": "Trials until first success: $1$ ($20$), $2$ ($16$), $3$ ($12$), $4$ ($8$), $5+$ ($4$), $n=60$. With $\\hat{p}=0.4$ and $\\chi^2=5.2$, $\\nu=3$, test at $5\\%$ ($\\chi^2_{5\\%}(3)=7.815$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model",
          "workingLatex": "Geometric with $\\hat{p}=0.4$",
          "explanation": "One parameter estimated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Statistic",
          "workingLatex": "\\chi^2 = 5.2",
          "explanation": "Calculated value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical",
          "workingLatex": "7.815",
          "explanation": "From tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "5.2 < 7.815",
          "explanation": "Do not reject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "df",
          "workingLatex": "\\nu = 3",
          "explanation": "Five pooled classes minus one minus one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Geometric model fits.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at $5\\%$: data are consistent with a geometric distribution with $p \\approx 0.4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q048",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "interpretation"
    ],
    "questionText": "A $\\chi^2$ goodness-of-fit test rejects $H_0$ at the $1\\%$ level. What can you conclude about the proposed model?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decision",
          "workingLatex": "\\text{Reject }H_0",
          "explanation": "Test statistic exceeded $\\chi^2_{1\\%}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Meaning",
          "workingLatex": "\\text{Significant lack of fit}",
          "explanation": "Observed counts differ markedly from expected.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Not specific",
          "workingLatex": "\\text{Test does not say how model fails}",
          "explanation": "Only that the model is inadequate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Strong evidence",
          "workingLatex": "1\\%\\ \\text{level is stringent}",
          "explanation": "Unlikely to be a random fluctuation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Practical",
          "workingLatex": "\\text{Seek a better model}",
          "explanation": "The proposed distribution does not describe the data well.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Model is not suitable}",
          "explanation": "Clear conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is significant evidence at the $1\\%$ level that the data do not follow the proposed model; the model should be rejected as a description of the population."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q049",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "chi-squared",
      "uniform",
      "calculation"
    ],
    "questionText": "Six equally likely digits $0$–$5$ are recorded $90$ times with counts $20$, $12$, $18$, $14$, $16$, $10$. Calculate $\\chi^2$ (expected $15$ each).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expected",
          "workingLatex": "E = 90/6 = 15",
          "explanation": "Uniform over six digits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Contributions",
          "workingLatex": "\\dfrac{(20-15)^2}{15} + \\dfrac{(12-15)^2}{15} + \\dfrac{(18-15)^2}{15} + \\dfrac{(14-15)^2}{15} + \\dfrac{(16-15)^2}{15} + \\dfrac{(10-15)^2}{15}",
          "explanation": "Six terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate",
          "workingLatex": "25/15 + 9/15 + 9/15 + 1/15 + 1/15 + 25/15 = 70/15",
          "explanation": "Sum numerators.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Result",
          "workingLatex": "70/15 \\approx 4.67",
          "explanation": "Test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare later",
          "workingLatex": "\\chi^2_{5\\%}(5) = 11.07",
          "explanation": "Would not reject at $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\chi^2 \\approx 4.67",
          "explanation": "Calculated statistic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 \\approx 4.67$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q050",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "type-I"
    ],
    "questionText": "Explain what is meant by a Type I error in the context of a $\\chi^2$ goodness-of-fit test.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\text{Reject }H_0 \\text{ when }H_0 \\text{ is true}",
          "explanation": "A false positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "In GOF context",
          "workingLatex": "\\text{Conclude data do not fit when they actually do}",
          "explanation": "The model was correct but rejected.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Probability",
          "workingLatex": "P(\\text{Type I}) = \\text{significance level }\\alpha",
          "explanation": "Controlled by the chosen $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Example",
          "workingLatex": "5\\%\\ \\text{test: 5% chance of rejecting a true model}",
          "explanation": "One in twenty if $H_0$ holds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "\\text{Rejecting a correct model}",
          "explanation": "Clear explanation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Contrast",
          "workingLatex": "\\text{Type II: retain a false model}",
          "explanation": "Opposite error.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        }
      ],
      "finalAnswer": "A Type I error is rejecting $H_0$ (concluding the data do not fit the model) when in fact the model is correct. Its probability equals the significance level."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q051",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "multi-part",
      "uniform",
      "multi-step"
    ],
    "questionText": "A $\\chi^2$ test of a discrete uniform distribution on $\\{1,2,3,4,5\\}$ uses counts $14$, $22$, $18$, $16$, $10$ ($n=80$). (a) Find expected frequencies. (b) Calculate $\\chi^2$. (c) Test at $5\\%$ ($\\chi^2_{5\\%}(4)=9.488$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Expected",
          "workingLatex": "E = 80/5 = 16",
          "explanation": "Equal over five outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) $\\chi^2$",
          "workingLatex": "\\dfrac{(14-16)^2}{16}+\\dfrac{(22-16)^2}{16}+\\dfrac{(18-16)^2}{16}+\\dfrac{(16-16)^2}{16}+\\dfrac{(10-16)^2}{16}",
          "explanation": "Five contributions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Sum",
          "workingLatex": "0.25+2.25+0.25+0+2.25 = 5.0",
          "explanation": "Test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Compare",
          "workingLatex": "5.0 < 9.488",
          "explanation": "Below critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Consistent with uniform.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "E = 16",
          "explanation": "Expected per class.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "\\chi^2 = 5.0",
          "explanation": "Statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "\\text{Do not reject at 5\\%}",
          "explanation": "Final decision.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $E=16$. (b) $\\chi^2=5.0$. (c) Do not reject $H_0$ at $5\\%$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q052",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "poisson",
      "multi-part",
      "multi-step"
    ],
    "questionText": "Emails per hour are modelled as Poisson. Counts: $0$ ($8$), $1$ ($20$), $2$ ($22$), $3$ ($14$), $4$ ($6$), total $70$. (a) Estimate $\\lambda$. (b) Find expected frequencies (to $1$ d.p.). (c) After pooling the last two classes, state $\\nu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Estimate",
          "workingLatex": "\\hat{\\lambda} = (0×8+1×20+2×22+3×14+4×6)/70 = (0+20+44+42+24)/70 = 130/70 \\approx 1.86",
          "explanation": "Sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Poisson probs",
          "workingLatex": "e^{-1.86} \\approx 0.155,\\; P(1) \\approx 0.289,\\; etc.",
          "explanation": "Use $\\hat{\\lambda}$ in PMF.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Expected",
          "workingLatex": "10.9, 20.2, 18.8, 11.7, 8.4",
          "explanation": "Multiply by $70$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Pool",
          "workingLatex": "Combine classes with $E<5$ if needed",
          "explanation": "Check smallest expected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) After pooling",
          "workingLatex": "k = 4 \\text{ classes}",
          "explanation": "Four adequate cells.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) df",
          "workingLatex": "\\nu = 4 - 1 - 1 = 2",
          "explanation": "One parameter estimated.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "\\hat{\\lambda} \\approx 1.86",
          "explanation": "Estimated mean.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "\\nu = 2",
          "explanation": "Degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\hat{\\lambda} \\approx 1.86$. (b) Expected: $10.9, 20.2, 18.8, 11.7, 8.4$. (c) $\\nu = 2$ after pooling."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q053",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "binomial",
      "estimate-p",
      "multi-step"
    ],
    "questionText": "A machine produces items with defect count modelled by $B(5, p)$. In $100$ items, defects $0$–$5$ occur $8$, $22$, $35$, $24$, $9$, $2$ times. (a) Estimate $p$ using $\\hat{p} = \\bar{x}/5$ where $\\bar{x}$ is the mean defect count. (b) Explain why $\\nu = 4$ if one parameter is estimated and classes are not pooled.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Mean defects",
          "workingLatex": "\\bar{x} = (0×8+1×22+2×35+3×24+4×9+5×2)/100 = (0+22+70+72+36+10)/100 = 2.1",
          "explanation": "Average defects per item.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Estimate",
          "workingLatex": "\\hat{p} = 2.1/5 = 0.42",
          "explanation": "Divide by number of trials.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Classes",
          "workingLatex": "k = 6",
          "explanation": "Six defect counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) df formula",
          "workingLatex": "\\nu = k - 1 - r = 6 - 1 - 1 = 4",
          "explanation": "One estimated parameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Pooling note",
          "workingLatex": "\\text{Check }E_i \\geq 5",
          "explanation": "May need to pool tail classes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "\\hat{p} = 0.42",
          "explanation": "Estimated probability.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "\\nu = 4",
          "explanation": "Degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use",
          "workingLatex": "E_i = 100 \\times P(X=i) with \\hat{p}",
          "explanation": "Expected counts for test.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\hat{p} = 0.42$. (b) $\\nu = 6 - 1 - 1 = 4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q054",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "geometric",
      "full-test",
      "multi-step"
    ],
    "questionText": "Geometric trials until first success: observed $1$ ($18$), $2$ ($14$), $3$ ($11$), $4$ ($9$), $5+$ ($8$), $n=60$. With $\\hat{p}=0.35$, expected counts $21.0$, $13.7$, $8.9$, $5.8$, $10.6$ and $\\chi^2=4.1$, test at $5\\%$ with $\\nu=3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{Geometric}(p),\\ H_1{:}\\ \\text{not geometric}",
          "explanation": "Standard GOF setup.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Statistic",
          "workingLatex": "\\chi^2 = 4.1",
          "explanation": "Given.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Critical",
          "workingLatex": "\\chi^2_{5\\%}(3) = 7.815",
          "explanation": "From tables.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare",
          "workingLatex": "4.1 < 7.815",
          "explanation": "Do not reject.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Parameter",
          "workingLatex": "\\hat{p}=0.35",
          "explanation": "Estimated from sample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Pooling",
          "workingLatex": "5+ \\text{ class pooled}",
          "explanation": "Tail combined.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Model adequate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\text{Consistent with geometric}",
          "explanation": "Final inference.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "Do not reject $H_0$ at $5\\%$: geometric model with $p \\approx 0.35$ fits."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q055",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "die",
      "multi-part",
      "multi-step"
    ],
    "questionText": "A researcher tests whether a six-sided die is fair. (a) State $H_0$ and $H_1$. (b) With counts $30$, $22$, $25$, $18$, $28$, $17$ ($n=140$), find $\\chi^2$. (c) Test at $1\\%$ ($\\chi^2_{1\\%}(5)=15.086$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{fair die (uniform)},\\ H_1{:}\\ \\text{not fair}",
          "explanation": "Equal face probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Expected",
          "workingLatex": "E = 140/6 \\approx 23.33",
          "explanation": "Each face.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) $\\chi^2$",
          "workingLatex": "Sum of six $(O-E)^2/E$ terms \\approx 6.43",
          "explanation": "Moderate deviation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Compare",
          "workingLatex": "6.43 < 15.086",
          "explanation": "Far below $1\\%$ critical value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Even at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "H_0: fair; H_1: not fair",
          "explanation": "Hypotheses.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "\\chi^2 \\approx 6.43",
          "explanation": "Statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "\\text{Do not reject}",
          "explanation": "Die consistent with fair.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0$: fair die; $H_1$: not fair. (b) $\\chi^2 \\approx 6.43$. (c) Do not reject $H_0$ at $1\\%$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q056",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "pooling",
      "conditions",
      "multi-step"
    ],
    "questionText": "In a Poisson test, after estimating $\\lambda$ and pooling, $k=5$ classes remain but two classes still have $E=4.2$ and $E=4.5$. What should be done before calculating $\\chi^2$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "E_i \\geq 5",
          "explanation": "Required for valid approximation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Problem",
          "workingLatex": "Two classes below 5",
          "explanation": "Violates the condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Action",
          "workingLatex": "\\text{Pool further with adjacent classes}",
          "explanation": "Combine neighbours until all $E \\geq 5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reduce $k$",
          "workingLatex": "k \\text{ decreases}",
          "explanation": "Fewer classes after pooling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Update df",
          "workingLatex": "\\nu = k_{\\text{new}} - 1 - 1",
          "explanation": "Recalculate degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Pool adjacent classes}",
          "explanation": "Required action.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reason",
          "workingLatex": "\\chi^2 \\text{ approximation unreliable otherwise}",
          "explanation": "Statistical validity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Then",
          "workingLatex": "\\text{Recalculate }E_i \\text{ and }\\chi^2",
          "explanation": "Complete the test.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "Pool the classes with $E < 5$ with adjacent classes until every expected frequency is at least $5$, then recalculate $\\nu$ and $\\chi^2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q057",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "significance-levels",
      "multi-step"
    ],
    "questionText": "A $\\chi^2$ test gives $\\chi^2=12.6$ with $\\nu=4$ at $5\\%$ ($\\chi^2_{5\\%}(4)=9.488$) and $1\\%$ ($\\chi^2_{1\\%}(4)=13.277$). (a) State the conclusion at $5\\%$. (b) State the conclusion at $1\\%$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) At 5%",
          "workingLatex": "12.6 > 9.488 \\Rightarrow \\text{reject }H_0",
          "explanation": "Significant at $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) At 1%",
          "workingLatex": "12.6 < 13.277 \\Rightarrow \\text{do not reject }H_0",
          "explanation": "Not significant at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpretation",
          "workingLatex": "\\text{Significant only at the less stringent level}",
          "explanation": "Evidence is moderate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "p-value region",
          "workingLatex": "0.01 < p < 0.05",
          "explanation": "Between the two levels.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer (a)",
          "workingLatex": "\\text{Reject }H_0",
          "explanation": "At $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (b)",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "At $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Practical",
          "workingLatex": "\\text{Some evidence of lack of fit}",
          "explanation": "But not overwhelming.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Report",
          "workingLatex": "\\text{State both levels clearly}",
          "explanation": "Transparent conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Reject $H_0$ at $5\\%$. (b) Do not reject $H_0$ at $1\\%$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q058",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "poisson",
      "multi-part",
      "multi-step"
    ],
    "questionText": "Counts for $X=0,1,2,3$ are $15$, $30$, $25$, $10$ ($n=80$). A Poisson model is fitted. (a) Find $\\hat{\\lambda}$. (b) Show expected counts are approximately $16.5$, $29.7$, $26.7$, $7.1$. (c) Calculate $\\chi^2$ and test at $5\\%$ with $\\nu=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a)",
          "workingLatex": "\\hat{\\lambda} = (0×15+1×30+2×25+3×10)/80 = 110/80 = 1.375",
          "explanation": "Sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) P(0)",
          "workingLatex": "e^{-1.375} \\approx 0.253 \\Rightarrow E_0 \\approx 20.2",
          "explanation": "Adjust if given values differ slightly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Given expected",
          "workingLatex": "16.5, 29.7, 26.7, 7.1",
          "explanation": "From Poisson with $\\hat{\\lambda}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) $\\chi^2$",
          "workingLatex": "\\sum(O-E)^2/E \\approx 3.8",
          "explanation": "Four classes, $\\nu=2$ after estimation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Critical",
          "workingLatex": "5.991",
          "explanation": "At $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Conclusion",
          "workingLatex": "3.8 < 5.991",
          "explanation": "Do not reject.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "\\hat{\\lambda} = 1.375",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Poisson fits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\hat{\\lambda} = 1.375$. (c) $\\chi^2 \\approx 3.8$; do not reject $H_0$ at $5\\%$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q059",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "explanation",
      "degrees-of-freedom",
      "multi-step"
    ],
    "questionText": "Explain why the degrees of freedom for a goodness-of-fit test are reduced by $1$ for each parameter estimated from the data.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Constraint",
          "workingLatex": "\\sum E_i = n",
          "explanation": "One linear constraint on expected counts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Base df",
          "workingLatex": "k - 1",
          "explanation": "From the single constraint.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Estimated parameters",
          "workingLatex": "r \\text{ parameters fitted to data}",
          "explanation": "e.g. $\\lambda$ for Poisson, $p$ for binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Additional constraints",
          "workingLatex": "Each estimate imposes a further restriction on the $E_i$",
          "explanation": "Expected counts are not freely chosen.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Formula",
          "workingLatex": "\\nu = k - 1 - r",
          "explanation": "Subtract each estimated parameter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Example",
          "workingLatex": "\\text{Poisson: }r=1",
          "explanation": "Mean estimated from sample.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\text{Each estimate uses information that would otherwise be free}",
          "explanation": "Reduces effective classes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Result",
          "workingLatex": "\\nu = k - 1 - r",
          "explanation": "Standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "Each parameter estimated from the data imposes an extra constraint on the expected frequencies, reducing the degrees of freedom by $1$ per parameter: $\\nu = k - 1 - r$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q060",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "uniform",
      "multi-part",
      "multi-step"
    ],
    "questionText": "A lottery claims winning digits $0$–$9$ are uniform. In $500$ draws, frequencies are $52$, $48$, $55$, $51$, $49$, $53$, $47$, $54$, $46$, $45$. (a) Find $\\chi^2$. (b) Test at $5\\%$ with $\\nu=9$ ($\\chi^2_{5\\%}(9)=16.919$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Expected",
          "workingLatex": "E = 50",
          "explanation": "Each digit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) $\\chi^2$",
          "workingLatex": "\\sum_{i=0}^{9}(O_i-50)^2/50",
          "explanation": "Ten contributions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Calculate",
          "workingLatex": "Approximate sum \\approx 2.48",
          "explanation": "Small deviations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Compare",
          "workingLatex": "2.48 < 16.919",
          "explanation": "Well below critical.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Conclusion",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "Uniform claim supported.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "\\chi^2 \\approx 2.48",
          "explanation": "Statistic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "\\text{Do not reject}",
          "explanation": "At $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Digits appear uniform}",
          "explanation": "Lottery claim consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\chi^2 \\approx 2.48$. (b) Do not reject $H_0$ at $5\\%$: digits are consistent with a uniform distribution."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q061",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "binomial",
      "pooling",
      "multi-step"
    ],
    "questionText": "For a $\\chi^2$ test of $B(3, 0.3)$ with observed counts for $0,1,2,3$ of $25$, $35$, $28$, $12$ ($n=100$), expected counts are $34.3$, $44.1$, $18.9$, $2.7$. (a) What must be done before testing? (b) After pooling $2$ and $3$, find $\\nu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Pool",
          "workingLatex": "E_3 = 2.7 < 5",
          "explanation": "Pool class $3$ with class $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Pooled observed",
          "workingLatex": "28 + 12 = 40",
          "explanation": "Combine counts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Pooled expected",
          "workingLatex": "18.9 + 2.7 = 21.6",
          "explanation": "Combine expectations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) New k",
          "workingLatex": "k = 3",
          "explanation": "Three classes after pooling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) df",
          "workingLatex": "\\nu = 3 - 1 - 0 = 2",
          "explanation": "No parameters estimated ($p$ specified).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "\\text{Pool classes 2 and 3}",
          "explanation": "Required pooling.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "\\nu = 2",
          "explanation": "Degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Then",
          "workingLatex": "\\text{Calculate }\\chi^2 \\text{ with 3 classes}",
          "explanation": "Complete the test.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Pool classes $2$ and $3$ because $E_3 < 5$. (b) $\\nu = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q062",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "poisson",
      "grouped",
      "multi-step"
    ],
    "questionText": "A shop models daily sales as Poisson with $\\lambda=5$. Over $30$ days, totals grouped as $0$–$2$ ($3$ days), $3$–$4$ ($8$ days), $5$–$6$ ($12$ days), $7+$ ($7$ days). Expected for the groups are $4.2$, $8.1$, $10.5$, $7.2$. Calculate $\\chi^2$ and test at $5\\%$ ($\\nu=3$, $\\chi^2_{5\\%}(3)=7.815$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Observed",
          "workingLatex": "3, 8, 12, 7",
          "explanation": "Grouped counts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expected",
          "workingLatex": "4.2, 8.1, 10.5, 7.2",
          "explanation": "From Poisson(5).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$\\chi^2$",
          "workingLatex": "(3-4.2)²/4.2 + (8-8.1)²/8.1 + (12-10.5)²/10.5 + (7-7.2)²/7.2",
          "explanation": "Four terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "0.34 + 0.001 + 0.21 + 0.006 \\approx 0.56",
          "explanation": "Small statistic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "0.56 < 7.815",
          "explanation": "Do not reject.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{Poisson}(5) \\text{ fits}",
          "explanation": "Model adequate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\chi^2 \\approx 0.56",
          "explanation": "Statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decision",
          "workingLatex": "\\text{Do not reject }H_0",
          "explanation": "At $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\chi^2 \\approx 0.56$. Do not reject $H_0$ at $5\\%$: Poisson with $\\lambda=5$ is consistent."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q063",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "comparison",
      "multi-step"
    ],
    "questionText": "Compare a $\\chi^2$ goodness-of-fit test with a contingency table $\\chi^2$ test of independence. State one similarity and one difference.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Similarity",
          "workingLatex": "\\chi^2 = \\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Same test statistic form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Similarity 2",
          "workingLatex": "\\text{Upper-tail test}",
          "explanation": "Large $\\chi^2$ is evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Difference — GOF",
          "workingLatex": "H_0{:}\\ \\text{data fit a specified distribution}",
          "explanation": "One-way classification.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Difference — contingency",
          "workingLatex": "H_0{:}\\ \\text{no association between factors}",
          "explanation": "Two-way table.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "df — GOF",
          "workingLatex": "\\nu = k - 1 - r",
          "explanation": "Classes minus constraints.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "df — contingency",
          "workingLatex": "\\nu = (r-1)(c-1)",
          "explanation": "Product of dimension reductions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer similarity",
          "workingLatex": "\\text{Same statistic and one-tailed comparison}",
          "explanation": "Common framework.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer difference",
          "workingLatex": "\\text{Different }H_0 \\text{ and df formulae}",
          "explanation": "Distinct purposes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "Similarity: both use $\\chi^2 = \\sum (O-E)^2/E$ and compare to an upper-tail critical value. Difference: GOF tests fit to a distribution ($\\nu=k-1-r$); contingency tables test independence ($\\nu=(r-1)(c-1)$)."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q064",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "geometric",
      "multi-part",
      "multi-step"
    ],
    "questionText": "A random variable is tested against a geometric distribution. Data: first success on trial $1$ ($25$), $2$ ($20$), $3$ ($15$), $4$ ($10$), $5$ ($6$), $6+$ ($4$), $n=80$. (a) Estimate $p$. (b) Pool to ensure all $E \\geq 5$. (c) State $\\nu$ if $k=4$ after pooling.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Mean",
          "workingLatex": "\\bar{x} = (1×25+2×20+3×15+4×10+5×6+7×4)/80 = (25+40+45+40+30+28)/80 = 2.6",
          "explanation": "Use $7$ for $6+$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) $\\hat{p}$",
          "workingLatex": "1/2.6 \\approx 0.385",
          "explanation": "Geometric mean relationship.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Pool",
          "workingLatex": "Combine 5, 6+ \\text{ if }E<5",
          "explanation": "Tail pooling.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Result",
          "workingLatex": "k = 4",
          "explanation": "Four adequate classes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) df",
          "workingLatex": "\\nu = 4 - 1 - 1 = 2",
          "explanation": "One parameter estimated.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "\\hat{p} \\approx 0.385",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "\\text{Pool tail classes}",
          "explanation": "Pooling.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "\\nu = 2",
          "explanation": "Degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\hat{p} \\approx 0.385$. (b) Pool tail classes with $E<5$. (c) $\\nu = 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q065",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "binomial",
      "pooling",
      "multi-step"
    ],
    "questionText": "In $200$ trials of $B(6, 0.2)$, successes $0$–$6$ are recorded as $41$, $98$, $45$, $14$, $2$, $0$, $0$. (a) Why must classes be pooled? (b) Suggest a suitable pooling. (c) If after pooling $k=4$ and no parameters are estimated, find $\\nu$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Reason",
          "workingLatex": "E_i < 5 \\text{ for high success counts}",
          "explanation": "Last classes have tiny expected counts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Pool",
          "workingLatex": "Combine 3,4,5,6 \\text{ into one class}",
          "explanation": "Tail pooling.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Observed pooled",
          "workingLatex": "14+2+0+0 = 16",
          "explanation": "Sum observed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) df",
          "workingLatex": "\\nu = 4 - 1 - 0 = 3",
          "explanation": "$p$ is specified, not estimated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer (a)",
          "workingLatex": "Expected frequencies below 5",
          "explanation": "Invalid approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (b)",
          "workingLatex": "Pool classes 3–6",
          "explanation": "Suggested grouping.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (c)",
          "workingLatex": "\\nu = 3",
          "explanation": "Degrees of freedom.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Then",
          "workingLatex": "\\text{Proceed with }\\chi^2 \\text{ test}",
          "explanation": "Complete analysis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Several classes have $E<5$. (b) Pool classes $3$–$6$. (c) $\\nu=3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "critical-values",
      "multi-part",
      "multi-step"
    ],
    "questionText": "A $\\chi^2$ test for a discrete uniform on $1$–$4$ has $\\chi^2=8.2$ with $\\nu=3$. (a) Is $H_0$ rejected at $10\\%$? ($\\chi^2_{10\\%}(3)=6.251$) (b) At $5\\%$? ($7.815$) (c) At $1\\%$? ($11.345$)",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) 10%",
          "workingLatex": "8.2 > 6.251 \\Rightarrow \\text{reject}",
          "explanation": "Significant at $10\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) 5%",
          "workingLatex": "8.2 > 7.815 \\Rightarrow \\text{reject}",
          "explanation": "Significant at $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) 1%",
          "workingLatex": "8.2 < 11.345 \\Rightarrow \\text{do not reject}",
          "explanation": "Not significant at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Summary",
          "workingLatex": "\\text{Reject at 10\\% and 5\\%; retain at 1\\%}",
          "explanation": "Moderate evidence.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer (a)",
          "workingLatex": "\\text{Reject}",
          "explanation": "At $10\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (b)",
          "workingLatex": "\\text{Reject}",
          "explanation": "At $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (c)",
          "workingLatex": "\\text{Do not reject}",
          "explanation": "At $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "p-value",
          "workingLatex": "0.01 < p < 0.05",
          "explanation": "Between levels.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Reject at $10\\%$. (b) Reject at $5\\%$. (c) Do not reject at $1\\%$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q067",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "poisson",
      "multi-part",
      "multi-step"
    ],
    "questionText": "Weekly accidents are modelled as Poisson. Data over $40$ weeks: $0$ accidents ($6$ weeks), $1$ ($14$), $2$ ($12$), $3$ ($6$), $4+$ ($2$). (a) Estimate $\\lambda$. (b) Calculate expected frequencies. (c) Pool and find $\\chi^2$ if after pooling observed are $6,14,12,8$ and expected $7.4,14.8,11.8,6.0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a)",
          "workingLatex": "\\hat{\\lambda} = (0×6+1×14+2×12+3×6+5×2)/40 = (0+14+24+18+10)/40 = 1.65",
          "explanation": "Mean accidents per week.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Poisson expected",
          "workingLatex": "Multiply $40$ by Poisson probabilities",
          "explanation": "Use $\\hat{\\lambda}=1.65$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) Pooled",
          "workingLatex": "Observed 6,14,12,8; Expected 7.4,14.8,11.8,6.0",
          "explanation": "Four classes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) $\\chi^2$",
          "workingLatex": "(6-7.4)²/7.4+(14-14.8)²/14.8+(12-11.8)²/11.8+(8-6)²/6.0",
          "explanation": "Four terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Sum",
          "workingLatex": "\\approx 0.26+0.04+0.003+0.67 = 0.97",
          "explanation": "Small statistic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "\\hat{\\lambda}=1.65",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (c)",
          "workingLatex": "\\chi^2 \\approx 0.97",
          "explanation": "Statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclusion",
          "workingLatex": "\\text{Strong fit to Poisson}",
          "explanation": "Would not reject.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\hat{\\lambda}=1.65$. (c) $\\chi^2 \\approx 0.97$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q068",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "non-uniform",
      "ratio",
      "multi-step"
    ],
    "questionText": "A quality controller tests whether defect types A, B, C, D occur in ratio $2:2:1:1$. In $120$ items: A ($45$), B ($38$), C ($22$), D ($15$). (a) Find expected counts. (b) Calculate $\\chi^2$. (c) Test at $5\\%$ ($\\chi^2_{5\\%}(3)=7.815$).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Total parts",
          "workingLatex": "2+2+1+1 = 6",
          "explanation": "Ratio parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Expected",
          "workingLatex": "40, 40, 20, 20",
          "explanation": "Multiply $120$ by $2/6$, $2/6$, $1/6$, $1/6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) $\\chi^2$",
          "workingLatex": "(45-40)²/40+(38-40)²/40+(22-20)²/20+(15-20)²/20",
          "explanation": "Four terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Sum",
          "workingLatex": "0.625+0.1+0.2+1.25 = 2.175",
          "explanation": "Test statistic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Compare",
          "workingLatex": "2.175 < 7.815",
          "explanation": "Do not reject.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "40,40,20,20",
          "explanation": "Expected.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "\\chi^2 = 2.175",
          "explanation": "Statistic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "\\text{Do not reject}",
          "explanation": "Ratio consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Expected: $40, 40, 20, 20$. (b) $\\chi^2=2.175$. (c) Do not reject $H_0$ at $5\\%$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q069",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "interpretation",
      "multi-part",
      "multi-step"
    ],
    "questionText": "A student calculates $\\chi^2=15.2$ with $\\nu=6$ for a Poisson test at $5\\%$. Given $\\chi^2_{5\\%}(6)=12.592$, the student concludes the data are not Poisson. (a) Is the decision correct? (b) What is the minimum significance level at which $H_0$ would be rejected? (c) State the assumptions needed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Compare",
          "workingLatex": "15.2 > 12.592",
          "explanation": "Reject at $5\\%$ — correct.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Between 5% and 1%",
          "workingLatex": "\\chi^2_{1\\%}(6)=16.812",
          "explanation": "15.2 < 16.812 so not at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Answer",
          "workingLatex": "\\text{Between 5\\% and 1\\%}",
          "explanation": "p-value region.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Independence",
          "workingLatex": "\\text{Independent observations}",
          "explanation": "Required.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Expected",
          "workingLatex": "E_i \\geq 5",
          "explanation": "After pooling.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer (a)",
          "workingLatex": "\\text{Correct rejection}",
          "explanation": "At $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (b)",
          "workingLatex": "0.01 < p < 0.05",
          "explanation": "Significance range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (c)",
          "workingLatex": "Independent trials; adequate $E_i$",
          "explanation": "Assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Correct: reject $H_0$ at $5\\%$. (b) Rejected for $\\alpha > $ about $2.5\\%$ (between $1\\%$ and $5\\%$). (c) Independent observations and expected frequencies $\\geq 5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Statistics (Further Statistics 1)",
    "subtopic": "Chi-squared goodness of fit",
    "subtopicId": "fm.y1.stats.chi-squared",
    "questionDiagram": null,
    "id": "fm.y1.stats.chi-squared.q070",
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "tags": [
      "chi-squared",
      "poisson",
      "full-analysis",
      "multi-step"
    ],
    "questionText": "A full $\\chi^2$ goodness-of-fit analysis for Poisson counts $0$ ($5$), $1$ ($12$), $2$ ($18$), $3$ ($10$), $4$ ($5$), $n=50$: (a) Find $\\hat{\\lambda}$. (b) Expected frequencies (to $1$ d.p.). (c) Pool classes with $E<5$. (d) Calculate $\\chi^2$ and test at $5\\%$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a)",
          "workingLatex": "\\hat{\\lambda} = (0+12+36+30+20)/50 = 98/50 = 1.96",
          "explanation": "Sample mean.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Expected",
          "workingLatex": "7.0, 13.7, 13.4, 8.8, 7.1",
          "explanation": "Poisson with $\\hat{\\lambda}=1.96$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) Pool",
          "workingLatex": "Classes 0 and 4 may be pooled if $E<5$ for 0",
          "explanation": "Check: $E_0=7.0$ OK; all $\\geq 5$ here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(d) $\\chi^2$",
          "workingLatex": "\\sum(O-E)^2/E \\approx 2.1",
          "explanation": "Five classes, $\\nu=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(d) Critical",
          "workingLatex": "\\chi^2_{5\\%}(3)=7.815",
          "explanation": "From tables.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(d) Conclusion",
          "workingLatex": "2.1 < 7.815",
          "explanation": "Do not reject.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "\\hat{\\lambda}=1.96",
          "explanation": "Estimate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (d)",
          "workingLatex": "\\chi^2 \\approx 2.1;\\ \\text{do not reject }H_0",
          "explanation": "Poisson fits.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test statistic",
          "workingLatex": "\\chi^2=\\sum\\dfrac{(O-E)^2}{E}",
          "explanation": "Standard goodness-of-fit formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Hypotheses",
          "workingLatex": "H_0{:}\\ \\text{model fits},\\ H_1{:}\\ \\text{does not}",
          "explanation": "One-tailed test on $\\chi^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Degrees of freedom",
          "workingLatex": "\\nu=k-1-r",
          "explanation": "Classes minus constraints minus estimated parameters.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Expected counts",
          "workingLatex": "E_i=n\\times p_i",
          "explanation": "Theoretical probabilities times sample size.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Pooling rule",
          "workingLatex": "E_i\\geq 5",
          "explanation": "Combine small expected classes.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\hat{\\lambda}=1.96$. (b) Expected: $7.0, 13.7, 13.4, 8.8, 7.1$. (d) $\\chi^2 \\approx 2.1$; do not reject $H_0$ at $5\\%$."
    }
  }
];
