import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q001",
    "tags": [
      "exponential growth"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=2y$, given When $x=0$, $y=3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=2\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=2x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{2x}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=3$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=3e^{2x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=2y$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=3e^{2x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q002",
    "tags": [
      "exponential decay"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=-3y$, given When $x=0$, $y=5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=-3\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=-3x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{-3x}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=5$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=5e^{-3x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=-3y$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=5e^{-3x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q003",
    "tags": [
      "exponential growth"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=y$, given When $x=0$, $y=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=e^{x+C}=Ae^{x}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=2$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=2e^{x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=y$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=2e^{x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q004",
    "tags": [
      "exponential decay"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=-y$, given When $x=0$, $y=4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=-dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=-x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{-x}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=4$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=4e^{-x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=-y$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=4e^{-x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q005",
    "tags": [
      "exponential growth"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{1}{2}y$, given When $x=0$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\dfrac{1}{2}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=\\dfrac{x}{2}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{x/2}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=e^{x/2}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{1}{2}y$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=e^{x/2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q006",
    "tags": [
      "modelling",
      "population"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dP}{dt}=0.1P$, given When $t=0$, $P=1000$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{P}\\,dP=0.1\\,dt",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|P|=0.1t+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "P=Ae^{0.1t}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $t=0$, $P=1000$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "P=1000e^{0.1t}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dP}{dt}=0.1P$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P=1000e^{0.1t}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q007",
    "tags": [
      "decay"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dN}{dt}=-0.2N$, given When $t=0$, $N=50$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{N}\\,dN=-0.2\\,dt",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|N|=-0.2t+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "N=Ae^{-0.2t}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $t=0$, $N=50$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "N=50e^{-0.2t}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dN}{dt}=-0.2N$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$N=50e^{-0.2t}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q008",
    "tags": [
      "exponential growth"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=4y$, given When $x=0$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=4\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=4x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{4x}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=e^{4x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=4y$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=e^{4x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q009",
    "tags": [
      "decay"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=-\\dfrac{y}{3}$, given When $x=0$, $y=6$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=-\\dfrac{1}{3}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=-\\dfrac{x}{3}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{-x/3}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=6$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=6e^{-x/3}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=-\\dfrac{y}{3}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=6e^{-x/3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q010",
    "tags": [
      "growth"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{y}{2}$, given When $x=0$, $y=8$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\dfrac{1}{2}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=\\dfrac{x}{2}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{x/2}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=8$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=8e^{x/2}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{y}{2}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=8e^{x/2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q011",
    "tags": [
      "separation of variables"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{x}{y}$, given When $x=0$, $y=3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "y\\,dy=x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{y^{2}}{2}=\\dfrac{x^{2}}{2}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y^{2}=x^{2}+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=3$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y^{2}=x^{2}+9",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{x}{y}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{2}=x^{2}+9$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q012",
    "tags": [
      "separation of variables"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{2x}{y}$, given When $x=0$, $y=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "y\\,dy=2x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{y^{2}}{2}=x^{2}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y^{2}=2x^{2}+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=2$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y^{2}=2x^{2}+4",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{2x}{y}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{2}=2x^{2}+4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q013",
    "tags": [
      "separation of variables"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=xy$, given When $x=0$, $y=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=\\dfrac{x^{2}}{2}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{x^{2}/2}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=2$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=2e^{x^{2}/2}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=xy$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=2e^{x^{2}/2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q014",
    "tags": [
      "separation of variables"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{1}{y}$, given When $x=0$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "y\\,dy=dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{y^{2}}{2}=x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y^{2}=2x+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y^{2}=2x+1",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{1}{y}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{2}=2x+1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q015",
    "tags": [
      "separation of variables"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{y}{x}$, given When $x=1$, $y=3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=\\ln|x|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ax",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=1$, $y=3$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=3x",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{y}{x}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=3x$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q016",
    "tags": [
      "direct integration"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=2x$, given When $x=0$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "dy=2x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "y=x^{2}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=x^{2}+C",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=x^{2}+1",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=2x$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x^{2}+1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q017",
    "tags": [
      "direct integration"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=3x^{2}$, given When $x=2$, $y=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "dy=3x^{2}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "y=x^{3}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=x^{3}+C",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=2$, $y=0$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=x^{3}-8",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=3x^{2}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x^{3}-8$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q018",
    "tags": [
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=e^{x}$, given When $x=0$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "dy=e^{x}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "y=e^{x}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=e^{x}+C",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=e^{x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=e^{x}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=e^{x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q019",
    "tags": [
      "trigonometric"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\cos x$, given When $x=0$, $y=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "dy=\\cos x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "y=\\sin x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=\\sin x+C",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=0$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=\\sin x",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\cos x$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\sin x$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q020",
    "tags": [
      "trigonometric"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=-\\sin x$, given When $x=0$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "dy=-\\sin x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "y=\\cos x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=\\cos x+C",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=\\cos x",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=-\\sin x$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\cos x$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q021",
    "tags": [
      "separation of variables"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{x+1}{y}$, given When $x=0$, $y=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "y\\,dy=(x+1)\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{y^{2}}{2}=\\dfrac{x^{2}}{2}+x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y^{2}=x^{2}+2x+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=2$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y^{2}=x^{2}+2x+4",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{x+1}{y}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{2}=x^{2}+2x+4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q022",
    "tags": [
      "separation of variables"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{y}{x+1}$, given When $x=0$, $y=3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x+1}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=\\ln|x+1|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=A(x+1)",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=3$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=3(x+1)",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{y}{x+1}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=3(x+1)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q023",
    "tags": [
      "nonlinear"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=y^{2}$, given When $x=1$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y^{2}}\\,dy=dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "-\\dfrac{1}{y}=x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=-\\dfrac{1}{x+C}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=1$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=-\\dfrac{1}{x-2}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=y^{2}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-\\dfrac{1}{x-2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q024",
    "tags": [
      "nonlinear"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\sqrt{y}$, given When $x=0$, $y=4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{\\sqrt{y}}\\,dy=dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "2\\sqrt{y}=x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=\\left(\\dfrac{x+C}{2}\\right)^{2}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=4$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=\\left(\\dfrac{x+4}{2}\\right)^{2}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\sqrt{y}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\left(\\dfrac{x+4}{2}\\right)^{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q025",
    "tags": [
      "Newton cooling"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dT}{dt}=-k(T-20)$, given When $t=0$, $T=100$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{T-20}\\,dT=-k\\,dt",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|T-20|=-kt+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "T=20+Ae^{-kt}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $t=0$, $T=100$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "T=20+80e^{-0.05t}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dT}{dt}=-k(T-20)$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=20+80e^{-0.05t}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q026",
    "tags": [
      "Newton cooling"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "A liquid cools from $90°\\text{C}$ to $70°\\text{C}$ in 10 minutes in a room at $20°\\text{C}$. Given $\\dfrac{dT}{dt}=-k(T-20)$, find $k$ and $T$ as a function of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "General solution",
          "workingLatex": "T=20+Ae^{-kt}",
          "explanation": "Standard cooling model solution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use T(0)=90",
          "workingLatex": "90=20+A \\Rightarrow A=70",
          "explanation": "Initial temperature.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use T(10)=70",
          "workingLatex": "70=20+70e^{-10k}",
          "explanation": "Second condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for k",
          "workingLatex": "50=70e^{-10k} \\Rightarrow e^{-10k}=\\dfrac{5}{7}",
          "explanation": "Rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take logs",
          "workingLatex": "k=-\\dfrac{1}{10}\\ln\\dfrac{5}{7}=\\dfrac{1}{10}\\ln\\dfrac{7}{5}",
          "explanation": "Find $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular solution",
          "workingLatex": "T=20+70e^{-kt}",
          "explanation": "Temperature model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State k",
          "workingLatex": "k=\\dfrac{1}{10}\\ln\\dfrac{7}{5}",
          "explanation": "Cooling constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Exponential approach to room temperature}",
          "explanation": "Physical meaning.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "T=20+70e^{-kt},\\;k=\\dfrac{1}{10}\\ln\\dfrac{7}{5}",
          "explanation": "Complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 20 + 70e^{-kt}$ where $k = \\dfrac{1}{10}\\ln\\dfrac{7}{5}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q027",
    "tags": [
      "radioactive decay"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dM}{dt}=-0.1M$, given When $t=0$, $M=200$ g.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{M}\\,dM=-0.1\\,dt",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|M|=-0.1t+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "M=Ae^{-0.1t}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $t=0$, $M=200$ g",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "M=200e^{-0.1t}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dM}{dt}=-0.1M$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M=200e^{-0.1t}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q028",
    "tags": [
      "population growth"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dP}{dt}=0.05P$, given When $t=0$, $P=500$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{P}\\,dP=0.05\\,dt",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|P|=0.05t+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "P=Ae^{0.05t}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $t=0$, $P=500$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "P=500e^{0.05t}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dP}{dt}=0.05P$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P=500e^{0.05t}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q029",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{1}{x}$, given When $x=1$, $y=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=\\ln|x|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ax",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=1$, $y=2$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=2x",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{1}{x}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=2x$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q030",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{y+1}{x}$, given When $x=1$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y+1}\\,dy=\\dfrac{1}{x}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y+1|=\\ln|x|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y+1=Ax",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=1$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=2x-1",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{y+1}{x}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=2x-1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q031",
    "tags": [
      "half-life"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "A radioactive substance decays according to $\\dfrac{dN}{dt}=-\\lambda N$. Initially $N=1000$. After 5 years, $N=800$. Find $\\lambda$ and $N$ in terms of $t$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solve DE",
          "workingLatex": "N=Ae^{-\\lambda t}",
          "explanation": "Exponential decay model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "N(0)=1000",
          "workingLatex": "A=1000",
          "explanation": "Initial amount.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "N(5)=800",
          "workingLatex": "1000e^{-5\\lambda}=800",
          "explanation": "Use second condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "e^{-5\\lambda}=0.8",
          "explanation": "Divide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Lambda",
          "workingLatex": "\\lambda=-\\dfrac{1}{5}\\ln 0.8=\\dfrac{1}{5}\\ln 1.25",
          "explanation": "Decay constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solution",
          "workingLatex": "N=1000e^{-\\lambda t}",
          "explanation": "Particular solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "N(5)=800",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "N=1000e^{-\\lambda t}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Lambda value",
          "workingLatex": "\\lambda=\\dfrac{1}{5}\\ln 1.25",
          "explanation": "Numerical constant.",
          "diagram": null
        }
      ],
      "finalAnswer": "$N = 1000e^{-\\lambda t}$ where $\\lambda = \\dfrac{1}{5}\\ln 1.25$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q032",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{x}{y+1}$, given When $x=0$, $y=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "(y+1)\\,dy=x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{(y+1)^{2}}{2}=\\dfrac{x^{2}}{2}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "(y+1)^{2}=x^{2}+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=0$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "(y+1)^{2}=x^{2}+1",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{x}{y+1}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(y+1)^{2}=x^{2}+1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q033",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{2}{y}$, given When $x=0$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "y\\,dy=2\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{y^{2}}{2}=2x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y^{2}=4x+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y^{2}=4x+1",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{2}{y}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{2}=4x+1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q034",
    "tags": [
      "trigonometric"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=y\\cos x$, given When $x=0$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\cos x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=\\sin x+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{\\sin x}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=e^{\\sin x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=y\\cos x$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=e^{\\sin x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q035",
    "tags": [
      "exponential"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{e^{x}}{y}$, given When $x=0$, $y=\\sqrt{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "y\\,dy=e^{x}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{y^{2}}{2}=e^{x}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y^{2}=2e^{x}+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=\\sqrt{2}$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y^{2}=2e^{x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{e^{x}}{y}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{2}=2e^{x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q036",
    "tags": [
      "interpretation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Solve $\\dfrac{dy}{dx}=3y$ given $y(0)=2$. Find $y$ when $x=\\ln 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{y}\\,dy=3\\,dx",
          "explanation": "Separation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\ln|y|=3x+C",
          "explanation": "Log form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General",
          "workingLatex": "y=Ae^{3x}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "y(0)=2",
          "workingLatex": "A=2",
          "explanation": "Initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Particular",
          "workingLatex": "y=2e^{3x}",
          "explanation": "Solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "At x=ln2",
          "workingLatex": "y=2e^{3\\ln 2}=2\\cdot 8=16",
          "explanation": "Evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "y=16",
          "explanation": "Value at required point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "dy/dx=48=3y",
          "explanation": "Verify DE.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=16",
          "explanation": "Final.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 16$ when $x = \\ln 2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q037",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{y-2}{x}$, given When $x=1$, $y=5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y-2}\\,dy=\\dfrac{1}{x}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y-2|=\\ln|x|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y-2=Ax",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=1$, $y=5$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=3x+2",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{y-2}{x}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=3x+2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q038",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=x(y+1)$, given When $x=0$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y+1}\\,dy=x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y+1|=\\dfrac{x^{2}}{2}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y+1=Ae^{x^{2}/2}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=2e^{x^{2}/2}-1",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=x(y+1)$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=2e^{x^{2}/2}-1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q039",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{1}{x^{2}y}$, given When $x=1$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "y\\,dy=\\dfrac{1}{x^{2}}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{y^{2}}{2}=-\\dfrac{1}{x}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y^{2}=-\\dfrac{2}{x}+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=1$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y^{2}=2-\\dfrac{2}{x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{1}{x^{2}y}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{2}=2-\\dfrac{2}{x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q040",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{y}{x^{2}}$, given When $x=1$, $y=e^{-1}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x^{2}}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=-\\dfrac{1}{x}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=Ae^{-1/x}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=1$, $y=e^{-1}$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=e^{-1/x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{y}{x^{2}}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=e^{-1/x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q041",
    "tags": [
      "modelling"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "questionText": "Bacteria grow so that $\\dfrac{dN}{dt}=0.2N$. If $N=500$ when $t=0$, find (a) $N$ in terms of $t$, (b) $N$ when $t=10$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{N}\\,dN=0.2\\,dt",
          "explanation": "Standard growth DE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "N=500e^{0.2t}",
          "explanation": "Using $N(0)=500$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Answer",
          "workingLatex": "N=500e^{0.2t}",
          "explanation": "Part (a).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) t=10",
          "workingLatex": "N=500e^{2}",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "N=500e^{2}\\approx 3697",
          "explanation": "Numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Exponential growth}",
          "explanation": "Model behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check t=0",
          "workingLatex": "N=500",
          "explanation": "Initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (a)",
          "workingLatex": "N=500e^{0.2t}",
          "explanation": "General.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer (b)",
          "workingLatex": "N=500e^{2}",
          "explanation": "At t=10.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $N = 500e^{0.2t}$. (b) $N = 500e^{2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q042",
    "tags": [
      "nonlinear"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{x^{2}}{y^{2}}$, given When $x=0$, $y=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "y^{2}\\,dy=x^{2}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{y^{3}}{3}=\\dfrac{x^{3}}{3}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y^{3}=x^{3}+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=2$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y^{3}=x^{3}+8",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{x^{2}}{y^{2}}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{3}=x^{3}+8$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q043",
    "tags": [
      "logarithm"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{1}{xy}$, given When $x=1$, $y=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "y\\,dy=\\dfrac{1}{x}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{y^{2}}{2}=\\ln|x|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y^{2}=2\\ln|x|+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=1$, $y=1$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y^{2}=2\\ln|x|+1",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{1}{xy}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{2}=2\\ln|x|+1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q044",
    "tags": [
      "trigonometric"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=y\\tan x$, given When $x=0$, $y=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\tan x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=-\\ln|\\cos x|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=\\dfrac{A}{\\cos x}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=2$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=\\dfrac{2}{\\cos x}",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=y\\tan x$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{2}{\\cos x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q045",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{2x}{y+2}$, given When $x=0$, $y=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "(y+2)\\,dy=2x\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{(y+2)^{2}}{2}=x^{2}+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "(y+2)^{2}=2x^{2}+K",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=0$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "(y+2)^{2}=2x^{2}+4",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{2x}{y+2}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(y+2)^{2}=2x^{2}+4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q046",
    "tags": [
      "general solution"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Find the general solution of $\\dfrac{dy}{dx}=\\dfrac{3}{y}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "y\\,dy=3\\,dx",
          "explanation": "Multiply both sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\dfrac{y^{2}}{2}=3x+C",
          "explanation": "Integrate each side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply by 2",
          "workingLatex": "y^{2}=6x+K",
          "explanation": "Where $K=2C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General solution",
          "workingLatex": "y=\\pm\\sqrt{6x+K}",
          "explanation": "Two branches possible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simpler form",
          "workingLatex": "y^{2}=6x+C",
          "explanation": "Standard answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain",
          "workingLatex": "6x+C\\geq 0",
          "explanation": "Real solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "y^{2}=6x+C",
          "explanation": "General solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note",
          "workingLatex": "\\text{No initial condition given}",
          "explanation": "Arbitrary constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y^{2}=6x+C",
          "explanation": "Final.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y^{2} = 6x + C$ (or $y = \\pm\\sqrt{6x+C}$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q047",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{y}{x-1}$, given When $x=2$, $y=4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\dfrac{1}{x-1}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\ln|y|=\\ln|x-1|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=A(x-1)",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=2$, $y=4$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=4(x-1)",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{y}{x-1}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=4(x-1)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q048",
    "tags": [
      "logarithm"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{1}{y-3}$, given When $x=1$, $y=3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "dy=\\dfrac{1}{y-3}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "y-3=\\ln|x|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=3+\\ln|x|+C",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=1$, $y=3$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=3+\\ln|x|+1",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{1}{y-3}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=3+\\ln|x|+1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q049",
    "tags": [
      "substitution link"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{x}{x^{2}+1}$, given When $x=0$, $y=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "dy=\\dfrac{x}{x^{2}+1}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "y=\\dfrac{1}{2}\\ln(x^{2}+1)+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "y=\\dfrac{1}{2}\\ln(x^{2}+1)+C",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=0$, $y=0$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=\\dfrac{1}{2}\\ln(x^{2}+1)",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{x}{x^{2}+1}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{1}{2}\\ln(x^{2}+1)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q050",
    "tags": [
      "separation"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{2y+4}{x}$, given When $x=2$, $y=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the variables",
          "workingLatex": "\\dfrac{1}{2y+4}\\,dy=\\dfrac{1}{x}\\,dx",
          "explanation": "Rearrange so all $y$-terms are with $dy$ and all $x$-terms with $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate both sides",
          "workingLatex": "\\dfrac{1}{2}\\ln|2y+4|=\\ln|x|+C",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general solution",
          "workingLatex": "2y+4=Ax^{2}",
          "explanation": "Include an arbitrary constant $C$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition",
          "workingLatex": "When $x=2$, $y=0$",
          "explanation": "Substitute the given values to find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the constant",
          "workingLatex": "C = \\text{from substitution}",
          "explanation": "Rearrange after substituting the initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the particular solution",
          "workingLatex": "y=\\dfrac{x^{2}}{2}-2",
          "explanation": "Express $y$ explicitly if possible.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "\\text{Verify }$\\dfrac{dy}{dx}=\\dfrac{2y+4}{x}$\\text{ and the initial condition}",
          "explanation": "Differentiate or substitute back to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{x^{2}}{2}-2$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q051",
    "tags": [
      "logistic",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=y(1-y)$ with $y(0)=0.5$. Find $\\displaystyle\\lim_{x\\to\\infty}y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{y(1-y)}\\,dy=dx",
          "explanation": "Logistic-type equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Partial fractions",
          "workingLatex": "\\dfrac{1}{y}+\\dfrac{1}{1-y}",
          "explanation": "Decompose.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|y|-\\ln|1-y|=x+C",
          "explanation": "Log form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "\\ln\\left|\\dfrac{y}{1-y}\\right|=x+C",
          "explanation": "Combine logs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "y(0)=0.5",
          "workingLatex": "C=0",
          "explanation": "Initial condition gives $C=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for y",
          "workingLatex": "y=\\dfrac{e^{x}}{1+e^{x}}=\\dfrac{1}{1+e^{-x}}",
          "explanation": "Rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Limit",
          "workingLatex": "\\lim_{x\\to\\infty}y=1",
          "explanation": "As $x\\to\\infty$, $y\\to 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{Carrying capacity }y=1",
          "explanation": "Logistic model.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "y=\\dfrac{1}{1+e^{-x}},\\;\\lim y=1",
          "explanation": "Complete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{1}{1+e^{-x}}$. $\\displaystyle\\lim_{x\\to\\infty} y = 1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q052",
    "tags": [
      "Newton cooling",
      "application",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "A substance cools from $100°\\text{C}$ to $60°\\text{C}$ in 15 minutes in a room at $20°\\text{C}$. Model with $\\dfrac{dT}{dt}=-k(T-20)$. Find how long until $T=30°\\text{C}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solution",
          "workingLatex": "T=20+80e^{-kt}",
          "explanation": "From $T(0)=100$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "T(15)=60",
          "workingLatex": "60=20+80e^{-15k}",
          "explanation": "Use cooling data.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve k",
          "workingLatex": "e^{-15k}=0.5 \\Rightarrow k=\\dfrac{\\ln 2}{15}",
          "explanation": "Half-life style.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set T=30",
          "workingLatex": "30=20+80e^{-kt}",
          "explanation": "Target temperature.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "e^{-kt}=\\dfrac{1}{8}",
          "explanation": "Rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Time",
          "workingLatex": "t=\\dfrac{3\\ln 2}{k}=\\dfrac{45\\ln 2}{\\ln 2}=45",
          "explanation": "Minutes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "t=45 \\text{ minutes}",
          "explanation": "Time to reach $30°\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "T decreases to room temp",
          "explanation": "Reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "45 \\text{ minutes}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "It takes **45 minutes** to cool to $30°\\text{C}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q053",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{x^{2}+1}{y^{2}+1}$ with $y(0)=1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "(y^{2}+1)\\,dy=(x^{2}+1)\\,dx",
          "explanation": "Both sides factorised.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate LHS",
          "workingLatex": "\\dfrac{y^{3}}{3}+y",
          "explanation": "Term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate RHS",
          "workingLatex": "\\dfrac{x^{3}}{3}+x+C",
          "explanation": "Polynomial integration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Equation",
          "workingLatex": "\\dfrac{y^{3}}{3}+y=\\dfrac{x^{3}}{3}+x+C",
          "explanation": "Implicit solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "y(0)=1",
          "workingLatex": "C=\\dfrac{4}{3}",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular",
          "workingLatex": "\\dfrac{y^{3}}{3}+y=\\dfrac{x^{3}}{3}+x+\\dfrac{4}{3}",
          "explanation": "Implicit form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "\\text{Cannot solve explicitly for }y",
          "explanation": "Accept implicit answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "\\text{Substitute }(0,1)",
          "explanation": "Satisfies IC.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\dfrac{y^{3}}{3}+y=\\dfrac{x^{3}}{3}+x+\\dfrac{4}{3}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{y^{3}}{3}+y = \\dfrac{x^{3}}{3}+x+\\dfrac{4}{3}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q054",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx}=\\dfrac{y^{2}}{x^{2}}$ given $y(1)=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite",
          "workingLatex": "\\dfrac{dy}{dx}=\\left(\\dfrac{y}{x}\\right)^{2}",
          "explanation": "Homogeneous form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{y^{2}}\\,dy=\\dfrac{1}{x^{2}}\\,dx",
          "explanation": "Separation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{1}{y}=-\\dfrac{1}{x}+C",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{1}{y}=\\dfrac{1}{x}-C",
          "explanation": "Solve for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "y(1)=2",
          "workingLatex": "C=-\\dfrac{1}{2}",
          "explanation": "Find constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Particular",
          "workingLatex": "\\dfrac{1}{y}=\\dfrac{1}{x}+\\dfrac{1}{2}",
          "explanation": "Substitute $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "y=\\dfrac{2x}{x+2}",
          "explanation": "Explicit solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "y(1)=2",
          "explanation": "Verify IC.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "y=\\dfrac{2x}{x+2}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\dfrac{2x}{x+2}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q055",
    "tags": [
      "logistic",
      "modelling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dP}{dt}=0.03P(1000-P)$ with $P(0)=100$. Interpret the meaning of $P=1000$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{P(1000-P)}\\,dP=0.03\\,dt",
          "explanation": "Logistic DE.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Partial fractions",
          "workingLatex": "\\dfrac{1}{1000}\\left(\\dfrac{1}{P}+\\dfrac{1}{1000-P}\\right)",
          "explanation": "Decompose.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|P|-\\ln|1000-P|=30t+C",
          "explanation": "After multiplying by 1000.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "P(0)=100",
          "workingLatex": "\\ln\\dfrac{100}{900}=C",
          "explanation": "Initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "P=\\dfrac{1000}{1+9e^{-30t}}",
          "explanation": "Logistic solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "P=1000",
          "workingLatex": "\\text{Carrying capacity}",
          "explanation": "Population limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "P\\to 1000 \\text{ as }t\\to\\infty",
          "explanation": "Long-term behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "P=\\dfrac{1000}{1+9e^{-30t}}",
          "explanation": "Solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Meaning",
          "workingLatex": "P=1000 \\text{ is the maximum sustainable population}",
          "explanation": "Interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = \\dfrac{1000}{1+9e^{-30t}}$. $P=1000$ is the **carrying capacity**."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q056",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Given $\\dfrac{dy}{dx}=\\dfrac{2x}{y}$ and $y(2)=4$, find $y$ when $x=3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "y\\,dy=2x\\,dx",
          "explanation": "Separation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "y^{2}=2x^{2}+C",
          "explanation": "Both sides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "y(2)=4",
          "workingLatex": "16=8+C \\Rightarrow C=8",
          "explanation": "Find $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Particular",
          "workingLatex": "y^{2}=2x^{2}+8",
          "explanation": "Solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "x=3",
          "workingLatex": "y^{2}=18+8=26",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "y",
          "workingLatex": "y=\\sqrt{26}",
          "explanation": "Positive branch from IC.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "y=\\sqrt{26}",
          "explanation": "Value at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "Consistent with DE",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=\\sqrt{26}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\sqrt{26}$ when $x = 3$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q057",
    "tags": [
      "proof",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Show that the general solution of $\\dfrac{dy}{dx}+2y=0$ is $y=Ae^{-2x}$ using separation of variables.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange",
          "workingLatex": "\\dfrac{dy}{dx}=-2y",
          "explanation": "Standard form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{y}\\,dy=-2\\,dx",
          "explanation": "Variables separated.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|y|=-2x+C",
          "explanation": "Log form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponentiate",
          "workingLatex": "y=e^{-2x+C}=Ae^{-2x}",
          "explanation": "General solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\dfrac{dy}{dx}=-2Ae^{-2x}=-2y",
          "explanation": "Satisfies DE.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Arbitrary constant",
          "workingLatex": "A=e^{C}",
          "explanation": "Any real $A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "y=Ae^{-2x}",
          "explanation": "Shown.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Method",
          "workingLatex": "\\text{Separation of variables}",
          "explanation": "Technique.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=Ae^{-2x}",
          "explanation": "General solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "General solution: $y = Ae^{-2x}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q058",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{1+y^{2}}{1+x^{2}}$ with $y(0)=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{1+y^{2}}\\,dy=\\dfrac{1}{1+x^{2}}\\,dx",
          "explanation": "Recognise derivative of arctan.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\arctan y=\\arctan x+C",
          "explanation": "Standard integrals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "y(0)=0",
          "workingLatex": "C=0",
          "explanation": "Initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "y=\\tan(\\arctan x)=x",
          "explanation": "For this domain.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "dy/dx=1=\\dfrac{1+x^{2}}{1+x^{2}}",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "y=x",
          "explanation": "Particular solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain",
          "workingLatex": "|x|<\\dfrac{\\pi}{2}",
          "explanation": "Where tan is defined.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Technique",
          "workingLatex": "\\text{Arctan integrals from separation}",
          "explanation": "Key skill.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=x",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q059",
    "tags": [
      "modelling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "A tank leaks so $\\dfrac{dV}{dt}=-0.1\\sqrt{V}$ with $V(0)=100$. Solve for $V(t)$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "V^{-1/2}\\,dV=-0.1\\,dt",
          "explanation": "Power form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "2\\sqrt{V}=-0.1t+C",
          "explanation": "Integrate each side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "V(0)=100",
          "workingLatex": "C=20",
          "explanation": "Initial volume.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "\\sqrt{V}=10-0.05t",
          "explanation": "Rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Particular",
          "workingLatex": "V=(10-0.05t)^{2}",
          "explanation": "Volume model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Empty time",
          "workingLatex": "t=200",
          "explanation": "When $V=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret",
          "workingLatex": "\\text{Leak rate decreases as volume drops}",
          "explanation": "Physical meaning.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "V=(10-0.05t)^{2}",
          "explanation": "Solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Domain",
          "workingLatex": "0\\leq t\\leq 200",
          "explanation": "Valid interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$V = (10-0.05t)^{2}$ for $0 \\leq t \\leq 200$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q060",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx}=\\dfrac{x}{y^{2}}$ with $y(1)=-1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "y^{2}\\,dy=x\\,dx",
          "explanation": "Separation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\dfrac{y^{3}}{3}=\\dfrac{x^{2}}{2}+C",
          "explanation": "Power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "y(1)=-1",
          "workingLatex": "-\\dfrac{1}{3}=\\dfrac{1}{2}+C",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "C",
          "workingLatex": "C=-\\dfrac{5}{6}",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Implicit",
          "workingLatex": "y^{3}=\\dfrac{3x^{2}}{2}-\\dfrac{5}{2}",
          "explanation": "Multiply by 3.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explicit",
          "workingLatex": "y=\\sqrt[3]{\\dfrac{3x^{2}-5}{2}}",
          "explanation": "Cube root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "y(1)=-1",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "y=\\sqrt[3]{\\dfrac{3x^{2}-5}{2}}",
          "explanation": "Particular solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=\\sqrt[3]{\\dfrac{3x^{2}-5}{2}}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = \\sqrt[3]{\\dfrac{3x^{2}-5}{2}}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q061",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=y+1$ with $y(0)=2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let u=y+1",
          "workingLatex": "du=dy",
          "explanation": "Substitution simplifies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "DE becomes",
          "workingLatex": "\\dfrac{du}{dx}=u",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve",
          "workingLatex": "u=Ae^{x}",
          "explanation": "Standard.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "y(0)=2",
          "workingLatex": "u(0)=3 \\Rightarrow A=3",
          "explanation": "Initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "y=3e^{x}-1",
          "explanation": "Back-substitute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "y(0)=2",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative",
          "workingLatex": "\\text{Separate }\\dfrac{dy}{y+1}=dx",
          "explanation": "Same result.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Integrate",
          "workingLatex": "y+1=3e^{x}",
          "explanation": "Direct method.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=3e^{x}-1",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 3e^{x}-1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q062",
    "tags": [
      "modelling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "The rate of change of height $h$ cm of water leaking from a cone is $\\dfrac{dh}{dt}=-0.5h$. If $h(0)=40$, find $h$ when $t=5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{h}\\,dh=-0.5\\,dt",
          "explanation": "Exponential decay.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "h=40e^{-0.5t}",
          "explanation": "Using $h(0)=40$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "t=5",
          "workingLatex": "h=40e^{-2.5}",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "h\\approx 3.29",
          "explanation": "Numerical.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exact",
          "workingLatex": "h=40e^{-2.5}",
          "explanation": "Exact form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret",
          "workingLatex": "\\text{Height decays exponentially}",
          "explanation": "Leak model.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "h=40e^{-2.5}",
          "explanation": "At $t=5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "h<40",
          "explanation": "Decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "h=40e^{-2.5}\\approx 3.3\\text{ cm}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$h = 40e^{-2.5}$ cm $\\approx 3.3$ cm."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q063",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Find the general solution of $\\dfrac{dy}{dx}=\\dfrac{y}{x}\\ln x$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{y}\\,dy=\\dfrac{\\ln x}{x}\\,dx",
          "explanation": "Separation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "RHS integral",
          "workingLatex": "u=\\ln x,\\;du=\\dfrac{1}{x}\\,dx",
          "explanation": "Substitution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate",
          "workingLatex": "\\ln|y|=\\dfrac{(\\ln x)^{2}}{2}+C",
          "explanation": "Both sides.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "General",
          "workingLatex": "y=Ae^{(\\ln x)^{2}/2}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simpler",
          "workingLatex": "y=A x^{\\ln x / 2}",
          "explanation": "Using $e^{\\ln x}=x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Domain",
          "workingLatex": "x>0",
          "explanation": "Log defined.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "y=Ae^{(\\ln x)^{2}/2}",
          "explanation": "General solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check",
          "workingLatex": "\\text{Differentiate implicitly}",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=Ae^{(\\ln x)^{2}/2}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = Ae^{(\\ln x)^{2}/2}$ for $x > 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q064",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{3x^{2}}{2y}$ with $y(1)=2$. Find the value of $x$ when $y=4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "2y\\,dy=3x^{2}\\,dx",
          "explanation": "Multiply through.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "y^{2}=x^{3}+C",
          "explanation": "Both sides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "y(1)=2",
          "workingLatex": "C=3",
          "explanation": "Initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Particular",
          "workingLatex": "y^{2}=x^{3}+3",
          "explanation": "Solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "y=4",
          "workingLatex": "16=x^{3}+3",
          "explanation": "Set $y=4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve",
          "workingLatex": "x^{3}=13",
          "explanation": "Rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "x",
          "workingLatex": "x=\\sqrt[3]{13}",
          "explanation": "Cube root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "x=\\sqrt[3]{13}",
          "explanation": "Required value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "x=\\sqrt[3]{13}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\sqrt[3]{13}$ when $y = 4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q065",
    "tags": [
      "modelling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "A savings account grows continuously at rate $\\dfrac{dS}{dt}=0.04S$. With $S(0)=£2000$, find (a) $S(t)$, (b) when $S=£3000$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Solve",
          "workingLatex": "S=2000e^{0.04t}",
          "explanation": "Exponential growth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a)",
          "workingLatex": "S=2000e^{0.04t}",
          "explanation": "Answer part (a).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set S=3000",
          "workingLatex": "3000=2000e^{0.04t}",
          "explanation": "Part (b).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve",
          "workingLatex": "e^{0.04t}=1.5",
          "explanation": "Divide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "t",
          "workingLatex": "t=\\dfrac{\\ln 1.5}{0.04}",
          "explanation": "Take logs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Numerical",
          "workingLatex": "t\\approx 10.1 \\text{ years}",
          "explanation": "Approximate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer (a)",
          "workingLatex": "S=2000e^{0.04t}",
          "explanation": "Model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer (b)",
          "workingLatex": "t=\\dfrac{\\ln 1.5}{0.04}",
          "explanation": "Exact time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "S=2000e^{0.04t};\\;t=\\dfrac{\\ln 1.5}{0.04}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $S = 2000e^{0.04t}$. (b) $t = \\dfrac{\\ln 1.5}{0.04} \\approx 10.1$ years."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q066",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{y-1}{x+2}$ with $y(1)=4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{y-1}\\,dy=\\dfrac{1}{x+2}\\,dx",
          "explanation": "Separation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "\\ln|y-1|=\\ln|x+2|+C",
          "explanation": "Log form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General",
          "workingLatex": "y-1=A(x+2)",
          "explanation": "Linear relation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "y(1)=4",
          "workingLatex": "3=3A \\Rightarrow A=1",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Particular",
          "workingLatex": "y=x+3",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "dy/dx=1=\\dfrac{x+2}{x+2}",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "y=x+3",
          "explanation": "Solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Domain",
          "workingLatex": "x\\neq -2",
          "explanation": "Restriction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=x+3",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x+3$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q067",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Find the particular solution of $\\dfrac{dy}{dx}=\\dfrac{1}{1+y}$ with $y(0)=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate",
          "workingLatex": "(1+y)\\,dy=dx",
          "explanation": "Multiply.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate",
          "workingLatex": "y+\\dfrac{y^{2}}{2}=x+C",
          "explanation": "Polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "y(0)=0",
          "workingLatex": "C=0",
          "explanation": "Initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Quadratic",
          "workingLatex": "y^{2}+2y-2x=0",
          "explanation": "Rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve",
          "workingLatex": "y=-1+\\sqrt{1+2x}",
          "explanation": "Positive root from IC.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "y(0)=0",
          "explanation": "Verify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Domain",
          "workingLatex": "x\\geq 0",
          "explanation": "Real square root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "y=-1+\\sqrt{1+2x}",
          "explanation": "Particular solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=-1+\\sqrt{1+2x}",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = -1+\\sqrt{1+2x}$ for $x \\geq 0$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q068",
    "tags": [
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{d^{2}y}{dx^{2}}=0$ given $\\dfrac{dy}{dx}=3$ when $x=0$ and $y=1$ when $x=0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate once",
          "workingLatex": "\\dfrac{dy}{dx}=3",
          "explanation": "From $\\dfrac{d^{2}y}{dx^{2}}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate again",
          "workingLatex": "y=3x+C",
          "explanation": "Second integration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "y(0)=1",
          "workingLatex": "C=1",
          "explanation": "Initial condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Answer",
          "workingLatex": "y=3x+1",
          "explanation": "Linear solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check dy/dx",
          "workingLatex": "dy/dx=3",
          "explanation": "Satisfies first IC.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check d2y/dx2",
          "workingLatex": "0",
          "explanation": "Satisfies DE.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "\\text{Second-order reduces to integration}",
          "explanation": "A-Level link.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "y=3x+1",
          "explanation": "Particular solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State",
          "workingLatex": "y=3x+1",
          "explanation": "Final.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 3x+1$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q069",
    "tags": [
      "substitution",
      "homogeneous",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "questionText": "Solve $\\dfrac{dy}{dx}=\\dfrac{y}{x}\\left(1-\\dfrac{y}{x}\\right)$ using the substitution $v=\\dfrac{y}{x}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute",
          "workingLatex": "y=vx,\\;\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}",
          "explanation": "Homogeneous technique.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "DE becomes",
          "workingLatex": "v+x\\dfrac{dv}{dx}=v(1-v)",
          "explanation": "Substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "x\\dfrac{dv}{dx}=-v^{2}",
          "explanation": "Cancel $v$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Separate",
          "workingLatex": "\\dfrac{1}{v^{2}}\\,dv=-\\dfrac{1}{x}\\,dx",
          "explanation": "Separation in $v$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate",
          "workingLatex": "-\\dfrac{1}{v}=-\\ln|x|+C",
          "explanation": "Both sides.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Back-substitute",
          "workingLatex": "-\\dfrac{x}{y}=-\\ln|x|+C",
          "explanation": "Replace $v=y/x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Implicit solution",
          "workingLatex": "\\dfrac{x}{y}=\\ln|x|+K",
          "explanation": "Rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Technique",
          "workingLatex": "v=y/x \\text{ for homogeneous DEs}",
          "explanation": "Key method.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\dfrac{x}{y}=\\ln|x|+C",
          "explanation": "General solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x}{y} = \\ln|x| + C$ (or use $v = y/x$ substitution)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Differential equations",
    "subtopicId": "al.y2.pure.differential-equations",
    "questionDiagram": null,
    "id": "al.y2.pure.differential-equations.q070",
    "tags": [
      "multi-part",
      "modelling",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "expression",
    "questionText": "(a) Solve $\\dfrac{dN}{dt}=0.2N$ with $N(0)=500$.\n(b) A different population satisfies $\\dfrac{dP}{dt}=0.2P(1-\\dfrac{P}{800})$ with $P(0)=100$. Find $P(t)$.\n(c) State the long-term behaviour of each model.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Solve",
          "workingLatex": "N=500e^{0.2t}",
          "explanation": "Unlimited exponential growth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Long-term",
          "workingLatex": "N\\to\\infty",
          "explanation": "No carrying capacity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Logistic setup",
          "workingLatex": "\\dfrac{1}{P(1-P/800)}\\,dP=0.2\\,dt",
          "explanation": "Separate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Partial fractions",
          "workingLatex": "\\dfrac{1}{P}+\\dfrac{1}{800-P}",
          "explanation": "Decompose.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Integrate",
          "workingLatex": "\\ln|P|-\\ln|800-P|=0.2t+C",
          "explanation": "Log form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) P(0)=100",
          "workingLatex": "P=\\dfrac{800}{1+7e^{-0.2t}}",
          "explanation": "Logistic solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Long-term",
          "workingLatex": "P\\to 800",
          "explanation": "Carrying capacity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(c) Compare",
          "workingLatex": "\\text{Exponential vs logistic}",
          "explanation": "Key modelling difference.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answers",
          "workingLatex": "N=500e^{0.2t};\\;P=\\dfrac{800}{1+7e^{-0.2t}};\\;N\\to\\infty,\\;P\\to 800",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify as separable",
          "workingLatex": "\\dfrac{dy}{dx}=f(x)g(y)",
          "explanation": "Check whether the equation can be written with $x$-terms and $y$-terms on opposite sides.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Separate variables",
          "workingLatex": "\\text{Rearrange to }g(y)\\,dy=f(x)\\,dx",
          "explanation": "Multiply or divide to isolate $dy$ and $dx$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Integrate both sides",
          "workingLatex": "\\int g(y)\\,dy=\\int f(x)\\,dx",
          "explanation": "Integrate each side with respect to its variable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Include the arbitrary constant",
          "workingLatex": "+C",
          "explanation": "One constant captures all equivalent solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $N = 500e^{0.2t} \\to \\infty$. (b) $P = \\dfrac{800}{1+7e^{-0.2t}} \\to 800$. (c) Exponential model grows without bound; logistic model approaches carrying capacity."
    }
  }
];
