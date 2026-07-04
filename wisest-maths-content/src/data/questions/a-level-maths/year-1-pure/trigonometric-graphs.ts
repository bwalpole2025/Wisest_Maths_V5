import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.trig-graphs.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "sine",
      "period-range"
    ],
    "questionText": "State the period and the range of the graph of $y=\\sin x$ for $0^\\circ\\leq x\\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\sin x,\\ 0^\\circ\\leq x\\leq 360^\\circ",
          "explanation": "We are looking at the standard sine curve over one full revolution, so every key feature comes straight from the shape you already know.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall one complete cycle.",
          "workingLatex": "\\sin 0^\\circ=0,\\ \\sin 90^\\circ=1,\\ \\sin 180^\\circ=0,\\ \\sin 270^\\circ=-1,\\ \\sin 360^\\circ=0",
          "explanation": "Tracking these five points shows the curve rise to a peak, fall through zero to a trough, and return, which is exactly one full wave.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the period.",
          "workingLatex": "\\text{period}=360^\\circ",
          "explanation": "The values start repeating after $360^\\circ$, so the graph completes one cycle every $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the greatest value.",
          "workingLatex": "\\text{max}=1",
          "explanation": "The highest the sine curve ever reaches is $1$, which happens at $x=90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the least value.",
          "workingLatex": "\\text{min}=-1",
          "explanation": "The lowest the curve dips is $-1$, which happens at $x=270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range.",
          "workingLatex": "-1\\leq y\\leq 1",
          "explanation": "The output never leaves the band between the trough and the peak, so $y$ runs from $-1$ up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the result.",
          "workingLatex": "-1\\leq \\sin x\\leq 1\\ \\text{for all }x",
          "explanation": "Every point on the curve sits inside this band and the wave repeats every $360^\\circ$, which confirms both the range and the period.",
          "diagram": null
        }
      ],
      "finalAnswer": "Period $=360^\\circ$; range $-1\\leq y\\leq 1$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "cosine",
      "period-range"
    ],
    "questionText": "State the period and the range of the graph of $y=\\cos x$ for $0^\\circ\\leq x\\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\cos x,\\ 0^\\circ\\leq x\\leq 360^\\circ",
          "explanation": "This is the standard cosine curve over one full revolution, so its features follow from its familiar shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall one complete cycle.",
          "workingLatex": "\\cos 0^\\circ=1,\\ \\cos 90^\\circ=0,\\ \\cos 180^\\circ=-1,\\ \\cos 270^\\circ=0,\\ \\cos 360^\\circ=1",
          "explanation": "The cosine curve starts at its peak, falls through zero to a trough, then climbs back to the peak, which is one full wave.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the period.",
          "workingLatex": "\\text{period}=360^\\circ",
          "explanation": "The values start repeating after $360^\\circ$, so one full cycle takes $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the greatest value.",
          "workingLatex": "\\text{max}=1",
          "explanation": "The cosine curve reaches its highest point of $1$ at both $x=0^\\circ$ and $x=360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the least value.",
          "workingLatex": "\\text{min}=-1",
          "explanation": "The curve reaches its lowest point of $-1$ at $x=180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range.",
          "workingLatex": "-1\\leq y\\leq 1",
          "explanation": "The graph stays inside the band between the trough and the peak, so $y$ takes every value from $-1$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the result.",
          "workingLatex": "-1\\leq \\cos x\\leq 1\\ \\text{for all }x",
          "explanation": "Every point lies within this band and the pattern repeats every $360^\\circ$, confirming both the range and the period.",
          "diagram": null
        }
      ],
      "finalAnswer": "Period $=360^\\circ$; range $-1\\leq y\\leq 1$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "tangent",
      "asymptotes"
    ],
    "questionText": "State the period of $y=\\tan x$ and give the equations of its vertical asymptotes for $0^\\circ\\leq x\\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\tan x,\\ 0^\\circ\\leq x\\leq 360^\\circ",
          "explanation": "The tangent graph behaves differently from sine and cosine, so it helps to recall how it is built.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write tangent as a ratio.",
          "workingLatex": "\\tan x=\\dfrac{\\sin x}{\\cos x}",
          "explanation": "Writing tangent this way makes it clear where the graph is defined and where it is not.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the period.",
          "workingLatex": "\\text{period}=180^\\circ",
          "explanation": "Unlike sine and cosine, the tangent pattern repeats every $180^\\circ$, so it fits two full cycles between $0^\\circ$ and $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find where the graph is undefined.",
          "workingLatex": "\\cos x=0\\ \\Rightarrow\\ x=90^\\circ,\\ 270^\\circ",
          "explanation": "Dividing by zero is impossible, so wherever $\\cos x=0$ the tangent value does not exist.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the vertical asymptotes.",
          "workingLatex": "x=90^\\circ,\\ x=270^\\circ",
          "explanation": "At these positions the graph shoots off towards infinity rather than crossing, giving vertical lines the curve approaches but never touches.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the behaviour near an asymptote.",
          "workingLatex": "\\text{as }x\\to 90^\\circ,\\ \\tan x\\to\\pm\\infty",
          "explanation": "Just before $90^\\circ$ the value grows without limit, and just after it comes up from a very large negative value, which is the signature of an asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check with known points.",
          "workingLatex": "\\tan 0^\\circ=0,\\ \\tan 180^\\circ=0,\\ \\tan 360^\\circ=0",
          "explanation": "The graph passes through zero every $180^\\circ$ and breaks at $90^\\circ$ and $270^\\circ$, which matches a period of $180^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Period $=180^\\circ$; vertical asymptotes at $x=90^\\circ$ and $x=270^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "sine",
      "maximum"
    ],
    "questionText": "Give the coordinates of the maximum point of $y=\\sin x$ in the interval $0^\\circ\\leq x\\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\sin x,\\ 0^\\circ\\leq x\\leq 360^\\circ",
          "explanation": "A maximum point is where the curve reaches its highest $y$-value, so we first recall how high sine can go.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the greatest value of sine.",
          "workingLatex": "\\text{max value}=1",
          "explanation": "The sine curve never rises above $1$, so the highest point on the graph has $y=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find where sine equals its maximum.",
          "workingLatex": "\\sin x=1\\ \\Rightarrow\\ x=90^\\circ",
          "explanation": "Sine first reaches the value $1$ at $90^\\circ$, which is the peak of its rise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the interval.",
          "workingLatex": "0^\\circ\\leq 90^\\circ\\leq 360^\\circ",
          "explanation": "There is only one peak between $0^\\circ$ and $360^\\circ$, and it lies inside the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the coordinates.",
          "workingLatex": "(90^\\circ,\\ 1)",
          "explanation": "Pairing the $x$-value with its height gives the coordinates of the maximum point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result.",
          "workingLatex": "\\sin 90^\\circ=1",
          "explanation": "Substituting $x=90^\\circ$ returns the maximum value $1$, confirming the point is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(90^\\circ,\\ 1)$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "cosine",
      "minimum"
    ],
    "questionText": "Give the coordinates of the minimum point of $y=\\cos x$ in the interval $0^\\circ\\leq x\\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\cos x,\\ 0^\\circ\\leq x\\leq 360^\\circ",
          "explanation": "A minimum point is where the curve reaches its lowest $y$-value, so we recall how low cosine can go.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the least value of cosine.",
          "workingLatex": "\\text{min value}=-1",
          "explanation": "The cosine curve never falls below $-1$, so the lowest point on the graph has $y=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find where cosine equals its minimum.",
          "workingLatex": "\\cos x=-1\\ \\Rightarrow\\ x=180^\\circ",
          "explanation": "Cosine reaches $-1$ at $180^\\circ$, halfway through its cycle, which is the bottom of the trough.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the interval.",
          "workingLatex": "0^\\circ\\leq 180^\\circ\\leq 360^\\circ",
          "explanation": "There is only one trough between $0^\\circ$ and $360^\\circ$, and it lies inside the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the coordinates.",
          "workingLatex": "(180^\\circ,\\ -1)",
          "explanation": "Pairing the $x$-value with its height gives the coordinates of the minimum point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result.",
          "workingLatex": "\\cos 180^\\circ=-1",
          "explanation": "Substituting $x=180^\\circ$ returns the minimum value $-1$, confirming the point is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(180^\\circ,\\ -1)$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "sine",
      "roots"
    ],
    "questionText": "State the values of $x$ where the graph of $y=\\sin x$ crosses the $x$-axis in the interval $0^\\circ\\leq x\\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\sin x,\\ 0^\\circ\\leq x\\leq 360^\\circ",
          "explanation": "A graph crosses the $x$-axis where its height is zero, so we look for where sine equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the height to zero.",
          "workingLatex": "\\sin x=0",
          "explanation": "The $x$-axis is the line $y=0$, so a crossing happens exactly when $\\sin x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x in the interval.",
          "workingLatex": "x=0^\\circ,\\ 180^\\circ,\\ 360^\\circ",
          "explanation": "Sine is zero at the start, halfway, and end of its cycle, giving three crossings across the interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the spacing.",
          "workingLatex": "180^\\circ-0^\\circ=180^\\circ,\\ 360^\\circ-180^\\circ=180^\\circ",
          "explanation": "The zeros are evenly spaced $180^\\circ$ apart, which is a useful way to remember them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the sign change.",
          "workingLatex": "\\sin x>0\\ \\text{on }0^\\circ<x<180^\\circ,\\ \\sin x<0\\ \\text{on }180^\\circ<x<360^\\circ",
          "explanation": "The curve rises above the axis, dips below it, then returns, so it genuinely cuts through at each of these points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the crossing points.",
          "workingLatex": "(0^\\circ,0),\\ (180^\\circ,0),\\ (360^\\circ,0)",
          "explanation": "Each crossing sits on the $x$-axis, so its $y$-coordinate is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the result.",
          "workingLatex": "\\sin 0^\\circ=\\sin 180^\\circ=\\sin 360^\\circ=0",
          "explanation": "Each listed value gives $\\sin x=0$, confirming all three crossings.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=0^\\circ,\\ 180^\\circ,\\ 360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "cosine",
      "roots"
    ],
    "questionText": "State the values of $x$ where the graph of $y=\\cos x$ crosses the $x$-axis in the interval $0^\\circ\\leq x\\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\cos x,\\ 0^\\circ\\leq x\\leq 360^\\circ",
          "explanation": "A graph crosses the $x$-axis where its height is zero, so we look for where cosine equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the height to zero.",
          "workingLatex": "\\cos x=0",
          "explanation": "The $x$-axis is the line $y=0$, so a crossing happens exactly when $\\cos x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for x in the interval.",
          "workingLatex": "x=90^\\circ,\\ 270^\\circ",
          "explanation": "Cosine starts at its peak and is zero a quarter and three-quarters of the way through its cycle, giving two crossings.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the spacing.",
          "workingLatex": "270^\\circ-90^\\circ=180^\\circ",
          "explanation": "The two zeros are $180^\\circ$ apart, which mirrors how sine's zeros are spaced.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the crossing points.",
          "workingLatex": "(90^\\circ,0),\\ (270^\\circ,0)",
          "explanation": "Each crossing lies on the $x$-axis, so its $y$-coordinate is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result.",
          "workingLatex": "\\cos 90^\\circ=\\cos 270^\\circ=0",
          "explanation": "Both listed values give $\\cos x=0$, confirming the two crossings.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=90^\\circ,\\ 270^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "exact-values",
      "reading-graphs"
    ],
    "questionText": "Using the standard trigonometric graphs, state the exact values of $\\sin 90^\\circ$, $\\cos 180^\\circ$ and $\\tan 0^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the sine graph at 90 degrees.",
          "workingLatex": "\\sin 90^\\circ=1",
          "explanation": "The sine curve reaches its peak at $x=90^\\circ$, and that peak has height $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the cosine graph at 180 degrees.",
          "workingLatex": "\\cos 180^\\circ=-1",
          "explanation": "The cosine curve is at the bottom of its trough at $x=180^\\circ$, and that trough has height $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the tangent graph at 0 degrees.",
          "workingLatex": "\\tan 0^\\circ=0",
          "explanation": "The tangent curve passes through the origin, so at $x=0^\\circ$ its value is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm the tangent value with the ratio.",
          "workingLatex": "\\tan 0^\\circ=\\dfrac{\\sin 0^\\circ}{\\cos 0^\\circ}=\\dfrac{0}{1}=0",
          "explanation": "Since tangent is sine over cosine, and sine is zero here while cosine is one, the ratio is zero, matching the graph.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the values.",
          "workingLatex": "\\sin 90^\\circ=1,\\ \\cos 180^\\circ=-1,\\ \\tan 0^\\circ=0",
          "explanation": "Gathering the three readings together gives the full answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the values are sensible.",
          "workingLatex": "-1\\leq \\sin 90^\\circ\\leq 1,\\ -1\\leq \\cos 180^\\circ\\leq 1",
          "explanation": "Both sine and cosine values sit inside their range of $-1$ to $1$, so the readings are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 90^\\circ=1$, $\\cos 180^\\circ=-1$, $\\tan 0^\\circ=0$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "sine",
      "odd-function",
      "symmetry"
    ],
    "questionText": "Show that $y=\\sin x$ is an odd function and state what symmetry this gives its graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\sin x",
          "explanation": "We want to test how the sine graph behaves when the input changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of an odd function.",
          "workingLatex": "f(-x)=-f(x)",
          "explanation": "A function is odd if replacing $x$ with $-x$ simply flips the sign of the output.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the definition to sine.",
          "workingLatex": "\\sin(-x)=-\\sin x",
          "explanation": "Sine satisfies this identity exactly, so it meets the condition for being odd.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check with a numerical example.",
          "workingLatex": "\\sin(-30^\\circ)=-0.5=-\\sin 30^\\circ",
          "explanation": "Testing a specific angle confirms the sign really does flip, which supports the general rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the symmetry.",
          "workingLatex": "\\text{rotational symmetry, order }2,\\ \\text{about }(0,0)",
          "explanation": "An odd function looks the same after a half turn about the origin, so the sine graph has rotational symmetry about the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the effect visually.",
          "workingLatex": "(x,\\sin x)\\ \\to\\ (-x,-\\sin x)",
          "explanation": "Every point maps to the point diagonally opposite through the origin, which is exactly what a $180^\\circ$ rotation does.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\sin(-x)=-\\sin x\\ \\Rightarrow\\ \\text{odd}",
          "explanation": "Because the identity holds, sine is odd and its graph has rotational symmetry of order 2 about the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\sin x$ is odd since $\\sin(-x)=-\\sin x$; its graph has rotational symmetry of order 2 about the origin."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "cosine",
      "even-function",
      "symmetry"
    ],
    "questionText": "Show that $y=\\cos x$ is an even function and state the line of symmetry this gives its graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\cos x",
          "explanation": "We want to test how the cosine graph behaves when the input changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of an even function.",
          "workingLatex": "f(-x)=f(x)",
          "explanation": "A function is even if replacing $x$ with $-x$ leaves the output completely unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the definition to cosine.",
          "workingLatex": "\\cos(-x)=\\cos x",
          "explanation": "Cosine satisfies this identity exactly, so it meets the condition for being even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check with a numerical example.",
          "workingLatex": "\\cos(-60^\\circ)=0.5=\\cos 60^\\circ",
          "explanation": "Testing a specific angle confirms the value stays the same, which supports the general rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the symmetry.",
          "workingLatex": "\\text{line of symmetry: the }y\\text{-axis}",
          "explanation": "An even function is a mirror image of itself across the $y$-axis, so the cosine graph is symmetrical about that line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the effect visually.",
          "workingLatex": "(x,\\cos x)\\ \\to\\ (-x,\\cos x)",
          "explanation": "Every point reflects to the point with the same height on the other side of the $y$-axis, which is exactly a mirror reflection.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\cos(-x)=\\cos x\\ \\Rightarrow\\ \\text{even}",
          "explanation": "Because the identity holds, cosine is even and its graph is symmetrical about the $y$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\cos x$ is even since $\\cos(-x)=\\cos x$; its graph is symmetrical about the $y$-axis."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "cosine",
      "amplitude"
    ],
    "questionText": "State the amplitude, the maximum value and the minimum value of $y=\\cos x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the function.",
          "workingLatex": "y=\\cos x",
          "explanation": "We are describing the size of the cosine wave, so we start from its highest and lowest points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the maximum value.",
          "workingLatex": "\\text{max}=1",
          "explanation": "The cosine curve rises to a highest value of $1$ at $x=0^\\circ$ and $x=360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the minimum value.",
          "workingLatex": "\\text{min}=-1",
          "explanation": "The cosine curve falls to a lowest value of $-1$ at $x=180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the amplitude formula.",
          "workingLatex": "\\text{amplitude}=\\dfrac{\\text{max}-\\text{min}}{2}",
          "explanation": "The amplitude measures half the full height of the wave, the distance from the middle line up to a peak.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values.",
          "workingLatex": "\\dfrac{1-(-1)}{2}=\\dfrac{2}{2}=1",
          "explanation": "The wave swings a total of $2$ from trough to peak, so half of that gives an amplitude of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the results.",
          "workingLatex": "\\text{amplitude}=1,\\ \\text{max}=1,\\ \\text{min}=-1",
          "explanation": "Bringing the three quantities together gives the full description of the wave's height.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the result.",
          "workingLatex": "-1\\leq \\cos x\\leq 1",
          "explanation": "The values match the known range of cosine, confirming the amplitude, maximum and minimum are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "Amplitude $=1$; maximum value $=1$; minimum value $=-1$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "amplitude"
    ],
    "questionText": "State the amplitude, maximum value and minimum value of $y=3\\sin x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y=a\\sin x",
          "explanation": "A curve of the form $y=a\\sin x$ is just a stretched sine wave, so the value of $a$ tells us how tall the wave is.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of a",
          "workingLatex": "a=3",
          "explanation": "The number multiplying $\\sin x$ is $3$, so here $a=3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the amplitude",
          "workingLatex": "\\text{amplitude}=|a|=3",
          "explanation": "The amplitude is the height of the wave above its middle line, and it equals $|a|$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the maximum value",
          "workingLatex": "y_{\\max}=3\\times 1=3",
          "explanation": "The largest value $\\sin x$ can reach is $1$, so multiplying by $3$ gives the highest point of the graph.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the minimum value",
          "workingLatex": "y_{\\min}=3\\times(-1)=-3",
          "explanation": "The smallest value $\\sin x$ can reach is $-1$, so multiplying by $3$ gives the lowest point of the graph.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the results",
          "workingLatex": "-3\\leq y\\leq 3",
          "explanation": "The maximum and minimum are equal distances above and below zero, which matches an amplitude of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "\\text{amplitude }3,\\ \\max=3,\\ \\min=-3",
          "explanation": "Collecting the three results gives the complete description of the wave's height.",
          "diagram": null
        }
      ],
      "finalAnswer": "Amplitude $=3$, maximum $=3$, minimum $=-3$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "amplitude"
    ],
    "questionText": "State the amplitude and range of $y=5\\cos x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y=a\\cos x",
          "explanation": "A curve of the form $y=a\\cos x$ is a cosine wave stretched vertically, so $a$ controls its height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of a",
          "workingLatex": "a=5",
          "explanation": "The number in front of $\\cos x$ is $5$, so $a=5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the amplitude",
          "workingLatex": "\\text{amplitude}=|a|=5",
          "explanation": "The amplitude is the distance from the middle line to a peak, which equals $|a|$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the range of cosine",
          "workingLatex": "-1\\leq\\cos x\\leq 1",
          "explanation": "Cosine always stays between $-1$ and $1$, so the stretched graph is bounded in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the bounds by 5",
          "workingLatex": "-5\\leq 5\\cos x\\leq 5",
          "explanation": "Multiplying every part of the inequality by $5$ scales the smallest and largest possible $y$ values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the range",
          "workingLatex": "-5\\leq y\\leq 5",
          "explanation": "This inequality lists all the heights the curve can reach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "\\text{amplitude }5,\\ -5\\leq y\\leq 5",
          "explanation": "The amplitude and the range together summarise how tall the wave is and where it lives.",
          "diagram": null
        }
      ],
      "finalAnswer": "Amplitude $=5$, range $-5\\leq y\\leq 5$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "period",
    "tags": [
      "trig-graphs",
      "period"
    ],
    "questionText": "State the period of $y=\\sin 2x$ and state how many complete cycles it makes between $0^\\circ$ and $360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y=\\sin(bx)",
          "explanation": "When $x$ is multiplied inside the sine, the wave is squeezed horizontally, and $b$ tells us by how much.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of b",
          "workingLatex": "b=2",
          "explanation": "Here $x$ is multiplied by $2$, so $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the period formula",
          "workingLatex": "\\text{period}=\\frac{360^\\circ}{b}",
          "explanation": "A basic sine wave repeats every $360^\\circ$; dividing by $b$ shows how the squeezing shortens each repeat.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute b = 2",
          "workingLatex": "\\text{period}=\\frac{360^\\circ}{2}=180^\\circ",
          "explanation": "Dividing $360^\\circ$ by $2$ gives the length of one full wave.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count cycles in the interval",
          "workingLatex": "\\frac{360^\\circ}{180^\\circ}=2",
          "explanation": "Dividing the length of the interval by the period tells us how many complete waves fit inside it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result",
          "workingLatex": "2\\times 180^\\circ=360^\\circ",
          "explanation": "Two full periods exactly fill the interval, which confirms the count is a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "\\text{period}=180^\\circ,\\ 2\\text{ cycles}",
          "explanation": "The wave repeats every $180^\\circ$ and so completes two cycles across the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "Period $=180^\\circ$; $2$ complete cycles between $0^\\circ$ and $360^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "period",
    "tags": [
      "trig-graphs",
      "period"
    ],
    "questionText": "State the period of $y=\\cos 3x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y=\\cos(bx)",
          "explanation": "Multiplying $x$ inside the cosine squashes the wave horizontally, and $b$ measures the squashing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the value of b",
          "workingLatex": "b=3",
          "explanation": "The coefficient of $x$ inside the cosine is $3$, so $b=3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the period formula",
          "workingLatex": "\\text{period}=\\frac{360^\\circ}{b}",
          "explanation": "A normal cosine wave repeats every $360^\\circ$, and dividing by $b$ accounts for the horizontal squash.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute b = 3",
          "workingLatex": "\\text{period}=\\frac{360^\\circ}{3}=120^\\circ",
          "explanation": "Dividing $360^\\circ$ by $3$ gives the length of a single complete wave.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the result",
          "workingLatex": "3\\times 120^\\circ=360^\\circ",
          "explanation": "Three periods make up $360^\\circ$, which is what we expect when $b=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\text{period}=120^\\circ",
          "explanation": "So the graph completes one full cycle every $120^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Period $=120^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "translation"
    ],
    "questionText": "State the range of $y=\\sin x + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y=\\sin x + c",
          "explanation": "Adding a constant to $\\sin x$ slides the whole wave up or down without changing its shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the constant",
          "workingLatex": "c=2",
          "explanation": "The number added on is $2$, so the graph is shifted up by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the range of sine",
          "workingLatex": "-1\\leq\\sin x\\leq 1",
          "explanation": "On its own, $\\sin x$ never leaves the band between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add 2 to each part",
          "workingLatex": "-1+2\\leq\\sin x + 2\\leq 1+2",
          "explanation": "Adding $2$ to every part of the inequality moves both the lowest and highest values up together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the bounds",
          "workingLatex": "1\\leq y\\leq 3",
          "explanation": "Working out the arithmetic gives the new smallest and largest heights of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "1\\leq y\\leq 3",
          "explanation": "So the shifted wave oscillates between $1$ and $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $1\\leq y\\leq 3$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "translation"
    ],
    "questionText": "State the range of $y=\\cos x - 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y=\\cos x + c",
          "explanation": "Adding or subtracting a constant shifts the cosine wave vertically while keeping its shape the same.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the constant",
          "workingLatex": "c=-3",
          "explanation": "Subtracting $3$ means $c=-3$, so the graph is pulled down by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the range of cosine",
          "workingLatex": "-1\\leq\\cos x\\leq 1",
          "explanation": "The bare cosine curve always stays between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract 3 from each part",
          "workingLatex": "-1-3\\leq\\cos x - 3\\leq 1-3",
          "explanation": "Taking $3$ away from every part of the inequality lowers both bounds by the same amount.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the bounds",
          "workingLatex": "-4\\leq y\\leq -2",
          "explanation": "The arithmetic gives the new lowest and highest values of the shifted curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "-4\\leq y\\leq -2",
          "explanation": "So the whole wave now sits between $-4$ and $-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $-4\\leq y\\leq -2$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "translation"
    ],
    "questionText": "Describe the single transformation that maps $y=\\sin x$ onto $y=\\sin x + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y=\\sin x \\ \\rightarrow\\ y=\\sin x + 4",
          "explanation": "Looking at what has changed between the two equations tells us which transformation has been applied.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the added constant",
          "workingLatex": "+4",
          "explanation": "A number has been added outside the sine, which affects the output $y$ rather than the input $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret adding to y",
          "workingLatex": "y=\\sin x + c \\Rightarrow \\text{shift up by } c",
          "explanation": "Adding $c$ to every $y$ value lifts the entire graph straight up by $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the size of the shift",
          "workingLatex": "c=4",
          "explanation": "Since $c=4$, the graph moves up by $4$ units.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write as a vector",
          "workingLatex": "\\begin{pmatrix}0\\\\4\\end{pmatrix}",
          "explanation": "A vertical shift only changes the $y$ coordinate, so the horizontal part of the translation vector is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\text{translation up by }4",
          "explanation": "So the mapping is a single translation moving the curve up by $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "A translation by the vector $\\begin{pmatrix}0\\\\4\\end{pmatrix}$ (up by $4$)."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "amplitude"
    ],
    "questionText": "Describe the single transformation that maps $y=\\cos x$ onto $y=4\\cos x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y=\\cos x \\ \\rightarrow\\ y=4\\cos x",
          "explanation": "Comparing the equations shows what has been done to the original cosine curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the multiplying factor",
          "workingLatex": "\\times 4",
          "explanation": "The cosine has been multiplied by $4$, and multiplying the output changes the height of the graph.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret multiplying y",
          "workingLatex": "y=a\\cos x \\Rightarrow \\text{vertical stretch, scale factor } a",
          "explanation": "Multiplying every $y$ value by $a$ stretches the graph away from the $x$-axis by that factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the scale factor",
          "workingLatex": "a=4",
          "explanation": "Here $a=4$, so each height is made four times as large.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with a point",
          "workingLatex": "(0,1)\\ \\rightarrow\\ (0,4)",
          "explanation": "The peak at $(0,1)$ moves to $(0,4)$, confirming a stretch of factor $4$ in the $y$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\text{vertical stretch, scale factor }4",
          "explanation": "So the single transformation is a stretch parallel to the $y$-axis with scale factor $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "A vertical stretch (parallel to the $y$-axis) with scale factor $4$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "translation"
    ],
    "questionText": "Describe the single transformation that maps $y=\\sin x$ onto $y=\\sin(x-30^\\circ)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y=\\sin x \\ \\rightarrow\\ y=\\sin(x-30^\\circ)",
          "explanation": "The change is inside the sine, so it affects the input $x$ and therefore the horizontal position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the change to x",
          "workingLatex": "x \\rightarrow x-30^\\circ",
          "explanation": "The input has $30^\\circ$ subtracted before the sine is applied.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret subtracting inside",
          "workingLatex": "y=\\sin(x-d) \\Rightarrow \\text{shift right by } d",
          "explanation": "Subtracting inside the function delays the wave, sliding the whole graph to the right by $d$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the size of the shift",
          "workingLatex": "d=30^\\circ",
          "explanation": "Since $d=30^\\circ$, the graph moves $30^\\circ$ to the right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write as a vector",
          "workingLatex": "\\begin{pmatrix}30\\\\0\\end{pmatrix}",
          "explanation": "A horizontal shift only changes the $x$ coordinate, so the vertical part of the vector is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\text{translation right by }30^\\circ",
          "explanation": "So the mapping is a single translation moving the curve $30^\\circ$ to the right.",
          "diagram": null
        }
      ],
      "finalAnswer": "A translation by the vector $\\begin{pmatrix}30\\\\0\\end{pmatrix}$ (right by $30^\\circ$)."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "reflection"
    ],
    "questionText": "Describe the single transformation that maps $y=\\sin x$ onto $y=-\\sin x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y=\\sin x \\ \\rightarrow\\ y=-\\sin x",
          "explanation": "The only change is a minus sign outside the sine, which affects the output $y$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the negative sign",
          "workingLatex": "y \\rightarrow -y",
          "explanation": "Every $y$ value has had its sign flipped, so positives become negatives and vice versa.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret negating y",
          "workingLatex": "y=-f(x) \\Rightarrow \\text{reflection in the } x\\text{-axis}",
          "explanation": "Flipping the sign of every output turns the graph upside down about the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check with a point",
          "workingLatex": "(90^\\circ,1)\\ \\rightarrow\\ (90^\\circ,-1)",
          "explanation": "The peak at $(90^\\circ,1)$ becomes a trough at $(90^\\circ,-1)$, exactly what a reflection in the $x$-axis does.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the invariant points",
          "workingLatex": "\\sin 0^\\circ=\\sin 180^\\circ=\\sin 360^\\circ=0",
          "explanation": "Where the curve already sits on the $x$-axis its $y$-value is $0$, and $-0=0$, so those points do not move — only the peaks and troughs flip sides.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\text{reflection in the } x\\text{-axis}",
          "explanation": "So the single transformation is a reflection in the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "A reflection in the $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "amplitude"
    ],
    "questionText": "State the coordinates of the maximum point of $y=2\\sin x$ for $0^\\circ\\leq x\\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y=a\\sin x",
          "explanation": "The graph is a sine wave stretched vertically, so its peak is $a$ times as high as the basic sine peak.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find where sine is greatest",
          "workingLatex": "\\sin x = 1 \\text{ at } x=90^\\circ",
          "explanation": "Within one revolution, $\\sin x$ reaches its largest value of $1$ at $x=90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the amplitude",
          "workingLatex": "a=2",
          "explanation": "The number multiplying $\\sin x$ is $2$, so the wave rises to twice the usual height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the maximum y value",
          "workingLatex": "y=2\\times 1=2",
          "explanation": "At $x=90^\\circ$ the sine equals $1$, so multiplying by $2$ gives the greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine into coordinates",
          "workingLatex": "(90^\\circ,\\ 2)",
          "explanation": "Pairing the $x$ value where the peak occurs with the height gives the coordinates of the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the point is in range",
          "workingLatex": "0^\\circ\\leq 90^\\circ\\leq 360^\\circ",
          "explanation": "The value $x=90^\\circ$ lies inside the required interval, so this maximum is valid.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "(90^\\circ,\\ 2)",
          "explanation": "So the highest point of the graph in this interval is at $(90^\\circ,2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(90^\\circ,\\ 2)$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "sine",
      "amplitude",
      "transformations"
    ],
    "questionText": "Sketch the graph of $y = 2\\sin x$ for $0^\\circ \\leq x \\leq 360^\\circ$. State the coordinates of the points where the curve meets the axes, and the coordinates of the maximum and minimum points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the base sine curve",
          "workingLatex": "y = 2\\sin x = a\\sin(bx) + c,\\quad a = 2,\\ b = 1,\\ c = 0",
          "explanation": "Writing the equation in the standard form $y = a\\sin(bx) + c$ lets us read off each transformation. Here only $a$ has changed from $1$ to $2$, so the graph is a vertical stretch of $y = \\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude} = |a| = |2| = 2",
          "explanation": "The amplitude is how far the curve rises above and falls below its centre line. Multiplying $\\sin x$ by $2$ doubles those heights, so the curve now reaches up to $2$ and down to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the period",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b} = \\frac{360^\\circ}{1} = 360^\\circ",
          "explanation": "The value of $b$ controls how fast the curve repeats. Since $b = 1$ is unchanged, the wave completes exactly one full cycle across the interval $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find where the curve meets the x-axis",
          "workingLatex": "2\\sin x = 0 \\Rightarrow \\sin x = 0 \\Rightarrow x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ",
          "explanation": "The stretch does not move the zeros: multiplying zero by $2$ is still zero. So $y = 2\\sin x$ crosses the x-axis wherever $\\sin x$ does, at the same $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the x-intercept coordinates",
          "workingLatex": "(0^\\circ,\\,0),\\ (180^\\circ,\\,0),\\ (360^\\circ,\\,0)",
          "explanation": "These are the three points on the x-axis. The point $(0^\\circ, 0)$ is also where the curve meets the y-axis, since substituting $x = 0^\\circ$ gives $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the maximum point",
          "workingLatex": "\\sin x = 1 \\text{ at } x = 90^\\circ \\Rightarrow y = 2 \\times 1 = 2",
          "explanation": "The sine curve peaks at $x = 90^\\circ$. Because the whole output is doubled, the peak height rises from $1$ to $2$, but it stays at the same $x$-position.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the maximum coordinates",
          "workingLatex": "\\text{maximum at } (90^\\circ,\\,2)",
          "explanation": "This is the highest point of the curve within the interval, sitting directly above the x-axis at a quarter of the way through the cycle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate the minimum point",
          "workingLatex": "\\sin x = -1 \\text{ at } x = 270^\\circ \\Rightarrow y = 2 \\times (-1) = -2",
          "explanation": "The sine curve reaches its lowest value at $x = 270^\\circ$. Doubling deepens the trough from $-1$ to $-2$, three quarters of the way through the cycle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum coordinates and range",
          "workingLatex": "\\text{minimum at } (270^\\circ,\\,-2),\\qquad -2 \\leq y \\leq 2",
          "explanation": "The curve oscillates smoothly between the trough at $-2$ and the peak at $2$, so its range is from $-2$ to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check a key point",
          "workingLatex": "x = 90^\\circ:\\ y = 2\\sin 90^\\circ = 2 \\times 1 = 2\\ \\checkmark",
          "explanation": "Substituting the peak value back into the equation gives $y = 2$, which matches the maximum we found. This confirms the vertical stretch has been applied correctly.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is a sine wave of amplitude $2$ and period $360^\\circ$. Axis crossings: $(0^\\circ, 0)$, $(180^\\circ, 0)$, $(360^\\circ, 0)$. Maximum: $(90^\\circ, 2)$. Minimum: $(270^\\circ, -2)$. Range: $-2 \\leq y \\leq 2$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "cosine",
      "translation",
      "transformations"
    ],
    "questionText": "Sketch the graph of $y = \\cos x + 1$ for $0^\\circ \\leq x \\leq 360^\\circ$. State the range of the function, the coordinates of any points where the curve meets the axes, and the coordinates of the maximum and minimum points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = \\cos x + 1 = a\\cos(bx) + c,\\quad a = 1,\\ b = 1,\\ c = 1",
          "explanation": "Comparing with $y = a\\cos(bx) + c$, only $c$ has changed. Adding $1$ to the whole function raises every point of $y = \\cos x$ vertically by $1$ unit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the shift",
          "workingLatex": "\\text{translation by } \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}",
          "explanation": "The $+1$ acts on the output, so the shift is vertical. Every point moves straight up by one unit while its $x$-coordinate stays the same.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the range",
          "workingLatex": "-1 \\leq \\cos x \\leq 1 \\Rightarrow -1 + 1 \\leq \\cos x + 1 \\leq 1 + 1",
          "explanation": "Since $\\cos x$ always lies between $-1$ and $1$, adding $1$ to each bound shifts the whole range up by $1$. This turns the limits into $0$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the range",
          "workingLatex": "0 \\leq y \\leq 2",
          "explanation": "The curve now sits entirely on or above the x-axis, oscillating about the line $y = 1$ rather than about the x-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the maximum points",
          "workingLatex": "\\cos x = 1 \\text{ at } x = 0^\\circ,\\ 360^\\circ \\Rightarrow y = 1 + 1 = 2",
          "explanation": "The cosine curve peaks at $x = 0^\\circ$ and $x = 360^\\circ$. Raising it by $1$ lifts those peaks from $1$ up to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the maximum coordinates",
          "workingLatex": "\\text{maxima at } (0^\\circ,\\,2) \\text{ and } (360^\\circ,\\,2)",
          "explanation": "Cosine starts at its peak, so the curve begins high, dips down, and returns to the same height at the end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the minimum point",
          "workingLatex": "\\cos x = -1 \\text{ at } x = 180^\\circ \\Rightarrow y = -1 + 1 = 0",
          "explanation": "The lowest point of cosine is at $x = 180^\\circ$. Lifting the curve by $1$ raises this trough from $-1$ up to $0$, so the minimum just touches the x-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the minimum coordinates",
          "workingLatex": "\\text{minimum at } (180^\\circ,\\,0)",
          "explanation": "This trough sits exactly on the x-axis, which is important for finding where the curve meets the axes next.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find where the curve meets the axes",
          "workingLatex": "\\text{x-axis: } \\cos x + 1 = 0 \\Rightarrow \\cos x = -1 \\Rightarrow x = 180^\\circ",
          "explanation": "The curve touches the x-axis only where $y = 0$, which happens at the single minimum point. It grazes the axis there rather than crossing it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the axis intercepts",
          "workingLatex": "\\text{y-axis: } (0^\\circ,\\,2);\\quad \\text{x-axis: } (180^\\circ,\\,0)",
          "explanation": "Setting $x = 0^\\circ$ gives the y-intercept at $(0^\\circ, 2)$, and the only contact with the x-axis is the touching point $(180^\\circ, 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sanity check a key value",
          "workingLatex": "x = 90^\\circ:\\ y = \\cos 90^\\circ + 1 = 0 + 1 = 1\\ \\checkmark",
          "explanation": "At $x = 90^\\circ$ the curve should sit on its centre line $y = 1$, and the calculation confirms it. This shows the vertical shift is consistent everywhere.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is a cosine wave raised by $1$ unit, with range $0 \\leq y \\leq 2$. y-intercept: $(0^\\circ, 2)$. Only x-axis contact (a touching minimum): $(180^\\circ, 0)$. Maxima: $(0^\\circ, 2)$ and $(360^\\circ, 2)$. Minimum: $(180^\\circ, 0)$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "sine",
      "translation",
      "range"
    ],
    "questionText": "Sketch the graph of $y = \\sin x - 2$ for $0^\\circ \\leq x \\leq 360^\\circ$. State the range of the function and the coordinates of the maximum and minimum points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = \\sin x - 2 = a\\sin(bx) + c,\\quad a = 1,\\ b = 1,\\ c = -2",
          "explanation": "Comparing with $y = a\\sin(bx) + c$, only $c$ has changed to $-2$. Subtracting $2$ from the whole function lowers every point of $y = \\sin x$ by $2$ units.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the shift",
          "workingLatex": "\\text{translation by } \\begin{pmatrix} 0 \\\\ -2 \\end{pmatrix}",
          "explanation": "The $-2$ acts on the output, so it is a vertical translation downwards. Each point slides straight down by two units while keeping its $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the range",
          "workingLatex": "-1 \\leq \\sin x \\leq 1 \\Rightarrow -1 - 2 \\leq \\sin x - 2 \\leq 1 - 2",
          "explanation": "Since $\\sin x$ stays between $-1$ and $1$, subtracting $2$ from each bound moves the whole range down by $2$. The limits become $-3$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the range",
          "workingLatex": "-3 \\leq y \\leq -1",
          "explanation": "The entire curve now lies below the x-axis, oscillating about the line $y = -2$. Because $y$ never reaches $0$, the curve has no x-intercepts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate the maximum point",
          "workingLatex": "\\sin x = 1 \\text{ at } x = 90^\\circ \\Rightarrow y = 1 - 2 = -1",
          "explanation": "The sine curve peaks at $x = 90^\\circ$. Lowering the whole curve by $2$ drops this peak from $1$ down to $-1$, which becomes the highest point of the new graph.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the maximum coordinates",
          "workingLatex": "\\text{maximum at } (90^\\circ,\\,-1)",
          "explanation": "Even though the value is negative, this is still the maximum because it is the largest $y$-value the curve attains within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Locate the minimum point",
          "workingLatex": "\\sin x = -1 \\text{ at } x = 270^\\circ \\Rightarrow y = -1 - 2 = -3",
          "explanation": "The lowest point of sine is at $x = 270^\\circ$. Shifting down by $2$ deepens this trough from $-1$ to $-3$, the lowest point of the graph.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the minimum coordinates",
          "workingLatex": "\\text{minimum at } (270^\\circ,\\,-3)",
          "explanation": "This trough sits three quarters of the way across the interval, the deepest the curve reaches below the x-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the endpoints for the sketch",
          "workingLatex": "x = 0^\\circ:\\ y = 0 - 2 = -2;\\quad x = 360^\\circ:\\ y = 0 - 2 = -2",
          "explanation": "At both ends of the interval $\\sin x = 0$, so the curve starts and finishes on its centre line $y = -2$. These endpoints help place the sketch accurately.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check the maximum",
          "workingLatex": "x = 90^\\circ:\\ y = \\sin 90^\\circ - 2 = 1 - 2 = -1\\ \\checkmark",
          "explanation": "Substituting the peak position back into the equation gives $-1$, matching the maximum found. This confirms the downward shift has been applied correctly.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is a sine wave shifted down by $2$ units, lying entirely below the x-axis with range $-3 \\leq y \\leq -1$. Maximum: $(90^\\circ, -1)$. Minimum: $(270^\\circ, -3)$. It starts and ends at $(0^\\circ, -2)$ and $(360^\\circ, -2)$ with no x-intercepts."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "cosine",
      "period",
      "stretch"
    ],
    "questionText": "Sketch the graph of $y = \\cos 2x$ for $0^\\circ \\leq x \\leq 360^\\circ$. State the period of the function and give the coordinates of all points where the curve meets the x-axis, together with the coordinates of all maximum and minimum points in the interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = \\cos 2x = a\\cos(bx) + c,\\quad a = 1,\\ b = 2,\\ c = 0",
          "explanation": "Comparing with $y = a\\cos(bx) + c$, only $b$ has changed to $2$. The factor $2$ inside the cosine squashes the graph horizontally, making it repeat twice as fast.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the period",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b} = \\frac{360^\\circ}{2} = 180^\\circ",
          "explanation": "Doubling $b$ halves the period. The curve now completes a full cycle every $180^\\circ$, so across $0^\\circ$ to $360^\\circ$ we see exactly two complete waves.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the substitution for zeros",
          "workingLatex": "\\cos 2x = 0 \\Rightarrow 2x = 90^\\circ,\\ 270^\\circ,\\ 450^\\circ,\\ 630^\\circ",
          "explanation": "To find the x-intercepts, let the angle be $2x$ and list every place cosine equals zero. Because $x$ runs to $360^\\circ$, the angle $2x$ runs all the way to $720^\\circ$, so we need several solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the x-intercepts",
          "workingLatex": "x = 45^\\circ,\\ 135^\\circ,\\ 225^\\circ,\\ 315^\\circ",
          "explanation": "Dividing each value of $2x$ by $2$ gives the $x$-coordinates. There are four crossings because two full cycles each cross the x-axis twice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the x-intercept coordinates",
          "workingLatex": "(45^\\circ,0),\\ (135^\\circ,0),\\ (225^\\circ,0),\\ (315^\\circ,0)",
          "explanation": "These evenly spaced crossings, $90^\\circ$ apart, are a clear sign the period has halved compared with the standard cosine curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the maximum points",
          "workingLatex": "\\cos 2x = 1 \\Rightarrow 2x = 0^\\circ,\\ 360^\\circ,\\ 720^\\circ \\Rightarrow x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ",
          "explanation": "Cosine peaks whenever its angle is a multiple of $360^\\circ$. Solving $2x = 0^\\circ, 360^\\circ, 720^\\circ$ gives the $x$-values where $y = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the maximum coordinates",
          "workingLatex": "(0^\\circ,1),\\ (180^\\circ,1),\\ (360^\\circ,1)",
          "explanation": "Because two cycles fit in the interval, there are three peaks: one at each end and one in the middle where the second cycle begins.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the minimum points",
          "workingLatex": "\\cos 2x = -1 \\Rightarrow 2x = 180^\\circ,\\ 540^\\circ \\Rightarrow x = 90^\\circ,\\ 270^\\circ",
          "explanation": "Cosine reaches its lowest value when its angle is an odd multiple of $180^\\circ$. Solving $2x = 180^\\circ, 540^\\circ$ gives the troughs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum coordinates",
          "workingLatex": "(90^\\circ,-1),\\ (270^\\circ,-1)",
          "explanation": "The two troughs sit midway between neighbouring peaks, one for each of the two cycles in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range",
          "workingLatex": "-1 \\leq y \\leq 1",
          "explanation": "The horizontal squash changes only how fast the curve repeats, not how high or low it reaches, so the range is still from $-1$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sanity check a turning point",
          "workingLatex": "x = 90^\\circ:\\ y = \\cos(2 \\times 90^\\circ) = \\cos 180^\\circ = -1\\ \\checkmark",
          "explanation": "Substituting $x = 90^\\circ$ gives $\\cos 180^\\circ = -1$, matching the minimum found there. This confirms the doubled angle has been handled correctly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Period $= 180^\\circ$ (two full cycles). x-intercepts: $(45^\\circ, 0)$, $(135^\\circ, 0)$, $(225^\\circ, 0)$, $(315^\\circ, 0)$. Maxima: $(0^\\circ, 1)$, $(180^\\circ, 1)$, $(360^\\circ, 1)$. Minima: $(90^\\circ, -1)$, $(270^\\circ, -1)$. Range: $-1 \\leq y \\leq 1$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "sine",
      "horizontal-translation",
      "transformations"
    ],
    "questionText": "Sketch the graph of $y = \\sin(x - 60^\\circ)$ for $0^\\circ \\leq x \\leq 360^\\circ$. State the coordinates of the points where the curve meets the x-axis within the interval, and the coordinates of the maximum and minimum points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = \\sin(x - 60^\\circ) = \\sin(x - d),\\quad d = 60^\\circ",
          "explanation": "The change $x \\to x - 60^\\circ$ happens inside the sine, so it affects the horizontal position. A subtraction inside the bracket shifts the graph to the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the shift",
          "workingLatex": "\\text{translation by } \\begin{pmatrix} 60 \\\\ 0 \\end{pmatrix}",
          "explanation": "Every key point of $y = \\sin x$ moves $60^\\circ$ to the right. A useful rule: to make the bracket zero we now need $x = 60^\\circ$ instead of $x = 0^\\circ$, so features arrive $60^\\circ$ later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Shift the x-intercepts",
          "workingLatex": "\\sin x = 0 \\text{ at } x = 0^\\circ,180^\\circ,360^\\circ \\ \\to\\ x = 60^\\circ,240^\\circ,420^\\circ",
          "explanation": "The original zeros are at $0^\\circ$, $180^\\circ$ and $360^\\circ$. Adding $60^\\circ$ to each gives the new positions where the shifted curve crosses the x-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Keep only intercepts in the interval",
          "workingLatex": "0^\\circ \\leq x \\leq 360^\\circ:\\ x = 60^\\circ,\\ 240^\\circ",
          "explanation": "The value $x = 420^\\circ$ lies beyond $360^\\circ$, so it is outside the required interval and is discarded. Two crossings remain inside.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the x-intercept coordinates",
          "workingLatex": "(60^\\circ,\\,0),\\ (240^\\circ,\\,0)",
          "explanation": "These are the two points where the shifted curve meets the x-axis within the interval, each moved $60^\\circ$ right of a standard sine zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Shift the maximum point",
          "workingLatex": "\\text{max of } \\sin x \\text{ at } x = 90^\\circ \\ \\to\\ x = 90^\\circ + 60^\\circ = 150^\\circ",
          "explanation": "The peak of the basic sine curve is at $x = 90^\\circ$. Sliding it $60^\\circ$ to the right places the new peak at $x = 150^\\circ$, with height unchanged at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the maximum coordinates",
          "workingLatex": "\\text{maximum at } (150^\\circ,\\,1)",
          "explanation": "The horizontal shift moves where the peak occurs but not how high it is, so the maximum value is still $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the minimum point",
          "workingLatex": "\\text{min of } \\sin x \\text{ at } x = 270^\\circ \\ \\to\\ x = 270^\\circ + 60^\\circ = 330^\\circ",
          "explanation": "The trough of the basic sine curve is at $x = 270^\\circ$. Moving it $60^\\circ$ right gives the new trough at $x = 330^\\circ$, still at depth $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum coordinates and range",
          "workingLatex": "\\text{minimum at } (330^\\circ,\\,-1),\\qquad -1 \\leq y \\leq 1",
          "explanation": "Since the shift is purely horizontal, the curve still oscillates between $-1$ and $1$, so the range is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the endpoint value for the sketch",
          "workingLatex": "x = 0^\\circ:\\ y = \\sin(0^\\circ - 60^\\circ) = \\sin(-60^\\circ) = -\\frac{\\sqrt{3}}{2} \\approx -0.87",
          "explanation": "At the left end the curve starts partway down at about $-0.87$, not at zero, because the shift means the curve is already below the axis when the interval begins.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sanity check the maximum",
          "workingLatex": "x = 150^\\circ:\\ y = \\sin(150^\\circ - 60^\\circ) = \\sin 90^\\circ = 1\\ \\checkmark",
          "explanation": "Substituting $x = 150^\\circ$ reduces the bracket to $90^\\circ$, giving $\\sin 90^\\circ = 1$. This confirms the peak really has moved to $150^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is $y = \\sin x$ translated $60^\\circ$ to the right. x-intercepts in the interval: $(60^\\circ, 0)$ and $(240^\\circ, 0)$. Maximum: $(150^\\circ, 1)$. Minimum: $(330^\\circ, -1)$. Range: $-1 \\leq y \\leq 1$; the curve starts at about $(0^\\circ, -0.87)$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "cosine",
      "amplitude",
      "stretch"
    ],
    "questionText": "Sketch the graph of $y = 3\\cos x$ for $0^\\circ \\leq x \\leq 360^\\circ$. State the amplitude, the coordinates of the points where the curve meets the x-axis, and the coordinates of the maximum and minimum points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = 3\\cos x = a\\cos(bx) + c,\\quad a = 3,\\ b = 1,\\ c = 0",
          "explanation": "Comparing with $y = a\\cos(bx) + c$, only $a$ has changed to $3$. Multiplying $\\cos x$ by $3$ stretches the graph vertically, tripling every height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude} = |a| = |3| = 3",
          "explanation": "The amplitude measures how far the curve moves from its centre line. Tripling the output means the curve now reaches up to $3$ and down to $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the period",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b} = \\frac{360^\\circ}{1} = 360^\\circ",
          "explanation": "Since $b = 1$ is unchanged, the curve still completes one full cycle over $0^\\circ$ to $360^\\circ$. Only the height, not the timing, has been altered.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find where the curve meets the x-axis",
          "workingLatex": "3\\cos x = 0 \\Rightarrow \\cos x = 0 \\Rightarrow x = 90^\\circ,\\ 270^\\circ",
          "explanation": "A vertical stretch does not move the zeros: three times zero is still zero. So the curve crosses the x-axis wherever $\\cos x$ does, at $90^\\circ$ and $270^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the x-intercept coordinates",
          "workingLatex": "(90^\\circ,\\,0),\\ (270^\\circ,\\,0)",
          "explanation": "These are the two points on the x-axis, unchanged in position from the standard cosine curve because the stretch is purely vertical.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the maximum points",
          "workingLatex": "\\cos x = 1 \\text{ at } x = 0^\\circ,\\ 360^\\circ \\Rightarrow y = 3 \\times 1 = 3",
          "explanation": "Cosine peaks at $x = 0^\\circ$ and $x = 360^\\circ$. Tripling the output raises those peaks from $1$ up to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the maximum coordinates",
          "workingLatex": "\\text{maxima at } (0^\\circ,\\,3) \\text{ and } (360^\\circ,\\,3)",
          "explanation": "Cosine starts at its peak, so the curve begins high at $(0^\\circ, 3)$ and returns to the same height at the end of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the minimum point",
          "workingLatex": "\\cos x = -1 \\text{ at } x = 180^\\circ \\Rightarrow y = 3 \\times (-1) = -3",
          "explanation": "The lowest point of cosine is at $x = 180^\\circ$. Tripling deepens the trough from $-1$ to $-3$, halfway through the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum coordinates and range",
          "workingLatex": "\\text{minimum at } (180^\\circ,\\,-3),\\qquad -3 \\leq y \\leq 3",
          "explanation": "The curve oscillates between the trough at $-3$ and the peaks at $3$, so its range runs from $-3$ to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check the minimum",
          "workingLatex": "x = 180^\\circ:\\ y = 3\\cos 180^\\circ = 3 \\times (-1) = -3\\ \\checkmark",
          "explanation": "Substituting $x = 180^\\circ$ gives $-3$, matching the minimum found. This confirms the vertical stretch of factor $3$ has been applied correctly.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve is a cosine wave of amplitude $3$ and period $360^\\circ$. x-intercepts: $(90^\\circ, 0)$ and $(270^\\circ, 0)$. Maxima: $(0^\\circ, 3)$ and $(360^\\circ, 3)$. Minimum: $(180^\\circ, -3)$. Range: $-3 \\leq y \\leq 3$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "transformations",
      "sine",
      "combined-transformations"
    ],
    "questionText": "Describe fully the sequence of two transformations that maps the graph of $y = \\sin x$ onto the graph of $y = 2\\sin x + 1$. State the transformations in the correct order.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y = \\sin x \\ \\longrightarrow\\ y = 2\\sin x + 1",
          "explanation": "Reading the target equation shows two differences from the original: the sine is multiplied by $2$, and then $1$ is added. Each difference corresponds to one transformation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the factor of 2",
          "workingLatex": "\\sin x \\ \\to\\ 2\\sin x",
          "explanation": "Multiplying the output by $2$ stretches the graph vertically. Every $y$-value doubles while its $x$-value stays fixed, so heights grow but positions along the x-axis do not move.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Name the first transformation",
          "workingLatex": "\\text{vertical stretch, scale factor } 2 \\ (\\text{parallel to the } y\\text{-axis})",
          "explanation": "A stretch that changes vertical distances by a factor of $2$ is described as a vertical stretch of scale factor $2$. This takes $y = \\sin x$ to $y = 2\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the plus 1",
          "workingLatex": "2\\sin x \\ \\to\\ 2\\sin x + 1",
          "explanation": "Adding $1$ to the whole expression raises every point by one unit. Because it acts on the output, this is a vertical shift upwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Name the second transformation",
          "workingLatex": "\\text{translation by } \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}",
          "explanation": "A shift of one unit straight up is a translation by the vector $\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$. This takes $y = 2\\sin x$ to $y = 2\\sin x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain why the order matters",
          "workingLatex": "\\text{stretch first, then translate}",
          "explanation": "The equation is built by first multiplying, then adding, so the transformations must follow the same order: stretch before translate. Doing them the other way would give a different graph.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show the wrong order gives a different result",
          "workingLatex": "\\text{translate first: } \\sin x + 1 \\ \\to\\ 2(\\sin x + 1) = 2\\sin x + 2 \\neq 2\\sin x + 1",
          "explanation": "If we shifted up by $1$ first and then stretched, the $+1$ would also be doubled, producing $2\\sin x + 2$. This is not the target, which confirms stretch must come first.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Track a point through the correct order",
          "workingLatex": "(90^\\circ,1) \\xrightarrow{\\times 2} (90^\\circ,2) \\xrightarrow{+1} (90^\\circ,3)",
          "explanation": "Following the peak of $\\sin x$: stretching sends $(90^\\circ, 1)$ to $(90^\\circ, 2)$, then translating sends it to $(90^\\circ, 3)$. This traces the combined effect step by step.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with the target equation",
          "workingLatex": "x = 90^\\circ:\\ y = 2\\sin 90^\\circ + 1 = 2(1) + 1 = 3\\ \\checkmark",
          "explanation": "Substituting $x = 90^\\circ$ directly into $y = 2\\sin x + 1$ gives $3$, matching the point we tracked. This confirms the two transformations and their order are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two transformations, applied in this order: (1) a vertical stretch of scale factor $2$ (parallel to the y-axis), giving $y = 2\\sin x$; then (2) a translation by the vector $\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$ (one unit up), giving $y = 2\\sin x + 1$. The stretch must come first."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "transformations",
      "cosine",
      "horizontal-translation"
    ],
    "questionText": "Describe fully the single transformation that maps the graph of $y = \\cos x$ onto the graph of $y = \\cos(x + 45^\\circ)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y = \\cos x \\ \\longrightarrow\\ y = \\cos(x + 45^\\circ)",
          "explanation": "The only change is inside the bracket, where $x$ has become $x + 45^\\circ$. A change to the input affects the horizontal position of the graph, not its height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for inside changes",
          "workingLatex": "y = f(x + d) \\ \\Rightarrow\\ \\text{shift left by } d",
          "explanation": "Changes inside the function work in the opposite way to what they first appear. Adding to $x$ shifts the graph to the left, because the curve reaches each value sooner.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule here",
          "workingLatex": "d = 45^\\circ \\ \\Rightarrow\\ \\text{shift left by } 45^\\circ",
          "explanation": "With $d = 45^\\circ$, the whole cosine curve slides $45^\\circ$ to the left. Every key point moves horizontally while keeping its height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Name the transformation as a vector",
          "workingLatex": "\\text{translation by } \\begin{pmatrix} -45 \\\\ 0 \\end{pmatrix}",
          "explanation": "A leftward shift of $45^\\circ$ is described precisely by the translation vector $\\begin{pmatrix} -45 \\\\ 0 \\end{pmatrix}$, where the negative first entry means movement in the negative $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Contrast with the opposite case",
          "workingLatex": "\\cos(x - 45^\\circ) \\ \\Rightarrow\\ \\text{shift right by } 45^\\circ",
          "explanation": "It helps to note that $\\cos(x - 45^\\circ)$ would move the graph to the right instead. Seeing both cases side by side makes the direction of our shift clear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note what stays unchanged",
          "workingLatex": "\\text{amplitude} = 1,\\quad \\text{period} = 360^\\circ,\\quad -1 \\leq y \\leq 1",
          "explanation": "A horizontal translation moves the graph sideways only, so its height and how fast it repeats are untouched. The amplitude, period and range are the same as for $y = \\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Track the peak of cosine",
          "workingLatex": "\\text{max of } \\cos x \\text{ at } x = 0^\\circ \\ \\to\\ x = 0^\\circ - 45^\\circ = -45^\\circ",
          "explanation": "The peak of $\\cos x$ sits at $x = 0^\\circ$. After a left shift of $45^\\circ$ this peak moves to $x = -45^\\circ$, showing the whole curve has moved left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the new peak location",
          "workingLatex": "\\cos(x + 45^\\circ) = 1 \\Rightarrow x + 45^\\circ = 0^\\circ \\Rightarrow x = -45^\\circ",
          "explanation": "Solving for where the new curve peaks gives $x = -45^\\circ$, exactly the shifted position. This agrees with a translation of $45^\\circ$ to the left.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with a second point",
          "workingLatex": "x = 45^\\circ:\\ y = \\cos(45^\\circ + 45^\\circ) = \\cos 90^\\circ = 0\\ \\checkmark",
          "explanation": "The original zero of cosine at $90^\\circ$ should now appear at $45^\\circ$, and substituting confirms $y = 0$ there. Two matching points confirm the transformation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "A single transformation: a translation by the vector $\\begin{pmatrix} -45 \\\\ 0 \\end{pmatrix}$, that is, a horizontal shift of $45^\\circ$ to the left."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "cosine",
      "reflection",
      "transformations"
    ],
    "questionText": "Sketch the graph of $y = -\\cos x$ for $0^\\circ \\leq x \\leq 360^\\circ$. State the coordinates of the points where the curve meets the x-axis and the coordinates of the maximum and minimum points, and explain how the graph is related to $y = \\cos x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = -\\cos x = -1 \\times \\cos x",
          "explanation": "Multiplying the whole function by $-1$ flips the sign of every $y$-value. Points that were above the x-axis go below it, and points below go above.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the transformation",
          "workingLatex": "\\text{reflection in the } x\\text{-axis}",
          "explanation": "Negating the output reflects the graph in the x-axis. The curve $y = -\\cos x$ is therefore the mirror image of $y = \\cos x$ across the horizontal axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note what stays the same",
          "workingLatex": "\\text{amplitude} = 1,\\quad \\text{period} = 360^\\circ,\\quad -1 \\leq y \\leq 1",
          "explanation": "A reflection does not change how tall or how wide the wave is. The amplitude, period and range all match those of $y = \\cos x$; only the direction is flipped.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find where the curve meets the x-axis",
          "workingLatex": "-\\cos x = 0 \\Rightarrow \\cos x = 0 \\Rightarrow x = 90^\\circ,\\ 270^\\circ",
          "explanation": "Reflection leaves points on the x-axis unmoved, since the negative of zero is still zero. So the crossings stay at the same places as for $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the x-intercept coordinates",
          "workingLatex": "(90^\\circ,\\,0),\\ (270^\\circ,\\,0)",
          "explanation": "These two points are shared by both curves, acting as the pivots about which the reflection turns the graph over.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the maximum point",
          "workingLatex": "-\\cos x = 1 \\Rightarrow \\cos x = -1 \\Rightarrow x = 180^\\circ",
          "explanation": "The new curve is highest where the original cosine was lowest. The trough of $\\cos x$ at $x = 180^\\circ$ becomes the peak of $-\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the maximum coordinates",
          "workingLatex": "\\text{maximum at } (180^\\circ,\\,1)",
          "explanation": "Where $\\cos x$ reached $-1$, the reflected curve reaches $+1$. The single peak of $y = -\\cos x$ therefore sits halfway across the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the minimum points",
          "workingLatex": "-\\cos x = -1 \\Rightarrow \\cos x = 1 \\Rightarrow x = 0^\\circ,\\ 360^\\circ",
          "explanation": "The new curve is lowest where cosine was highest. The peaks of $\\cos x$ at $0^\\circ$ and $360^\\circ$ become troughs of $-\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum coordinates",
          "workingLatex": "\\text{minima at } (0^\\circ,\\,-1) \\text{ and } (360^\\circ,\\,-1)",
          "explanation": "So $y = -\\cos x$ starts at the bottom, rises to a peak in the middle, and returns to the bottom, exactly upside down compared with $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check a key point",
          "workingLatex": "x = 0^\\circ:\\ y = -\\cos 0^\\circ = -(1) = -1\\ \\checkmark",
          "explanation": "Substituting $x = 0^\\circ$ gives $-1$, matching the minimum found at the start. This confirms the reflection has flipped the starting peak into a trough.",
          "diagram": null
        }
      ],
      "finalAnswer": "The graph is $y = \\cos x$ reflected in the x-axis (turned upside down). x-intercepts: $(90^\\circ, 0)$ and $(270^\\circ, 0)$. Maximum: $(180^\\circ, 1)$. Minima: $(0^\\circ, -1)$ and $(360^\\circ, -1)$. Range: $-1 \\leq y \\leq 1$; the peaks and troughs of $\\cos x$ are swapped."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "sine",
      "period",
      "horizontal-stretch"
    ],
    "questionText": "Sketch the graph of $y = \\sin\\tfrac{x}{2}$ for $0^\\circ \\leq x \\leq 360^\\circ$. State the period of the function and give the coordinates of the points where the curve meets the axes and of any maximum or minimum points within the interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = \\sin\\tfrac{x}{2} = \\sin(bx),\\quad b = \\tfrac{1}{2}",
          "explanation": "Comparing with $y = \\sin(bx)$, the value of $b$ is $\\tfrac{1}{2}$. A value of $b$ less than $1$ stretches the graph horizontally, so the wave repeats more slowly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the period",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b} = \\frac{360^\\circ}{\\tfrac{1}{2}} = 720^\\circ",
          "explanation": "Dividing by $\\tfrac{1}{2}$ doubles the period to $720^\\circ$. This means a full cycle takes twice as long, so the interval $0^\\circ$ to $360^\\circ$ shows only half of one wave.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the search for zeros",
          "workingLatex": "\\sin\\tfrac{x}{2} = 0 \\Rightarrow \\tfrac{x}{2} = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ",
          "explanation": "To find x-intercepts, treat the angle as $\\tfrac{x}{2}$ and list where sine is zero. As $x$ runs from $0^\\circ$ to $360^\\circ$, the angle $\\tfrac{x}{2}$ only reaches $180^\\circ$, so few solutions appear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the x-intercepts",
          "workingLatex": "\\tfrac{x}{2} = 0^\\circ \\Rightarrow x = 0^\\circ;\\quad \\tfrac{x}{2} = 180^\\circ \\Rightarrow x = 360^\\circ",
          "explanation": "Multiplying each angle by $2$ gives the $x$-values. The next zero would need $\\tfrac{x}{2} = 360^\\circ$, i.e. $x = 720^\\circ$, which is outside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the x-intercept coordinates",
          "workingLatex": "(0^\\circ,\\,0),\\ (360^\\circ,\\,0)",
          "explanation": "The curve meets the x-axis only at the two ends of the interval. The point $(0^\\circ, 0)$ is also where the curve crosses the y-axis, since $x = 0^\\circ$ gives $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the maximum point",
          "workingLatex": "\\sin\\tfrac{x}{2} = 1 \\Rightarrow \\tfrac{x}{2} = 90^\\circ \\Rightarrow x = 180^\\circ",
          "explanation": "Sine peaks when its angle is $90^\\circ$. Solving $\\tfrac{x}{2} = 90^\\circ$ gives $x = 180^\\circ$, so the single peak of height $1$ sits in the middle of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the maximum coordinates",
          "workingLatex": "\\text{maximum at } (180^\\circ,\\,1)",
          "explanation": "Because only half a cycle is visible, the curve rises from zero to a single peak and comes back down, giving just one maximum in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check for a minimum in the interval",
          "workingLatex": "\\sin\\tfrac{x}{2} = -1 \\Rightarrow \\tfrac{x}{2} = 270^\\circ \\Rightarrow x = 540^\\circ",
          "explanation": "A trough would require $x = 540^\\circ$, which lies beyond $360^\\circ$. So the graph has no minimum point within the given interval; it stays at or above the x-axis throughout.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range over the interval",
          "workingLatex": "0 \\leq y \\leq 1 \\quad (\\text{for } 0^\\circ \\leq x \\leq 360^\\circ)",
          "explanation": "Over this half-cycle the angle $\\tfrac{x}{2}$ only runs from $0^\\circ$ to $180^\\circ$, where sine is never negative. So within the interval the curve stays between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sanity check the maximum",
          "workingLatex": "x = 180^\\circ:\\ y = \\sin\\tfrac{180^\\circ}{2} = \\sin 90^\\circ = 1\\ \\checkmark",
          "explanation": "Substituting $x = 180^\\circ$ reduces the angle to $90^\\circ$, giving $\\sin 90^\\circ = 1$. This confirms the peak really occurs at the middle of the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "Period $= 720^\\circ$, so only half a cycle appears. Axis crossings: $(0^\\circ, 0)$ (also the y-intercept) and $(360^\\circ, 0)$. Maximum: $(180^\\circ, 1)$. No minimum lies within the interval (the next trough is at $x = 540^\\circ$). Range over the interval: $0 \\leq y \\leq 1$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving",
      "symmetry"
    ],
    "questionText": "Solve $\\sin x = \\tfrac{1}{2}$ for $0^\\circ \\leq x \\leq 360^\\circ$. Use the symmetry of the sine graph to find both solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "\\sin x = \\tfrac{1}{2}, \\quad 0^\\circ \\leq x \\leq 360^\\circ",
          "explanation": "We are looking for every angle between $0^\\circ$ and $360^\\circ$ whose sine is $\\tfrac{1}{2}$. Picturing the sine wave, the horizontal line $y=\\tfrac12$ cuts the curve twice in this range, so we expect two answers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal value",
          "workingLatex": "\\alpha = \\sin^{-1}\\left(\\tfrac{1}{2}\\right)",
          "explanation": "The inverse sine gives the principal value, which is the first angle the calculator returns. This acts as our anchor angle, and the graph's symmetry then produces any other solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the special angle",
          "workingLatex": "\\alpha = 30^\\circ",
          "explanation": "$\\tfrac12$ is one of the exact trig values, so $\\alpha$ is the special angle $30^\\circ$. No decimals are needed because this is an exact result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the first solution",
          "workingLatex": "x_1 = 30^\\circ",
          "explanation": "Since $30^\\circ$ lies inside the interval $0^\\circ$ to $360^\\circ$, it is our first valid solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the symmetry rule",
          "workingLatex": "\\sin(180^\\circ - x) = \\sin x",
          "explanation": "The sine graph is symmetric about $x=90^\\circ$, so an angle and its partner $180^\\circ$ minus it share the same sine. This gives the second solution without extra guesswork.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second solution",
          "workingLatex": "x_2 = 180^\\circ - 30^\\circ = 150^\\circ",
          "explanation": "Applying the symmetry, the reflection of $30^\\circ$ about $90^\\circ$ is $150^\\circ$, which also has a sine of $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm no further solutions",
          "workingLatex": "0^\\circ \\leq 30^\\circ, 150^\\circ \\leq 360^\\circ",
          "explanation": "Beyond $180^\\circ$ the sine curve is negative until $360^\\circ$, so the line $y=\\tfrac12$ is not met again. Two solutions is exactly what the graph predicted.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the first solution",
          "workingLatex": "\\sin 30^\\circ = \\tfrac{1}{2} \\checkmark",
          "explanation": "Substituting $x=30^\\circ$ back into the original equation returns $\\tfrac12$, confirming it is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the second solution",
          "workingLatex": "\\sin 150^\\circ = \\sin 30^\\circ = \\tfrac{1}{2} \\checkmark",
          "explanation": "Substituting $x=150^\\circ$ also gives $\\tfrac12$, since it mirrors $30^\\circ$ across the peak of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "x = 30^\\circ, \\; 150^\\circ",
          "explanation": "Both values satisfy the equation and lie in the required interval, so these are the complete solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 30^\\circ$ and $x = 150^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving",
      "symmetry"
    ],
    "questionText": "Solve $\\cos x = \\tfrac{\\sqrt3}{2}$ for $0^\\circ \\leq x \\leq 360^\\circ$, using the symmetry of the cosine graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "\\cos x = \\tfrac{\\sqrt3}{2}, \\quad 0^\\circ \\leq x \\leq 360^\\circ",
          "explanation": "We need all angles between $0^\\circ$ and $360^\\circ$ with cosine equal to $\\tfrac{\\sqrt3}{2}$. The line $y=\\tfrac{\\sqrt3}{2}$ meets the cosine curve twice here, so two solutions are expected.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal value",
          "workingLatex": "\\alpha = \\cos^{-1}\\left(\\tfrac{\\sqrt3}{2}\\right)",
          "explanation": "The inverse cosine gives the anchor angle. From this the symmetry of the cosine graph will supply the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the special angle",
          "workingLatex": "\\alpha = 30^\\circ",
          "explanation": "$\\tfrac{\\sqrt3}{2}$ is an exact trig value, so the principal value is the special angle $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the first solution",
          "workingLatex": "x_1 = 30^\\circ",
          "explanation": "As $30^\\circ$ sits inside the interval, it is our first valid solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the symmetry rule",
          "workingLatex": "\\cos(360^\\circ - x) = \\cos x",
          "explanation": "The cosine graph is symmetric about $x=180^\\circ$ (and about the ends of the range), so an angle and $360^\\circ$ minus it share the same cosine. This is the key to the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second solution",
          "workingLatex": "x_2 = 360^\\circ - 30^\\circ = 330^\\circ",
          "explanation": "Reflecting $30^\\circ$ about the end of the cycle gives $330^\\circ$, which has the same cosine value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm no further solutions",
          "workingLatex": "30^\\circ, \\; 330^\\circ \\in [0^\\circ, 360^\\circ]",
          "explanation": "Between these the cosine curve dips below $\\tfrac{\\sqrt3}{2}$, so the line is met only twice. Both solutions lie in range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the first solution",
          "workingLatex": "\\cos 30^\\circ = \\tfrac{\\sqrt3}{2} \\checkmark",
          "explanation": "Putting $x=30^\\circ$ back into the equation returns $\\tfrac{\\sqrt3}{2}$, so it checks out.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the second solution",
          "workingLatex": "\\cos 330^\\circ = \\cos 30^\\circ = \\tfrac{\\sqrt3}{2} \\checkmark",
          "explanation": "Substituting $x=330^\\circ$ also gives $\\tfrac{\\sqrt3}{2}$, confirming the symmetric partner is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "x = 30^\\circ, \\; 330^\\circ",
          "explanation": "Both angles satisfy the equation within the interval, so these are the full solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 30^\\circ$ and $x = 330^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving",
      "tangent"
    ],
    "questionText": "Solve $\\tan x = 1$ for $0^\\circ \\leq x \\leq 360^\\circ$. Use the period of the tangent graph to find all solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "\\tan x = 1, \\quad 0^\\circ \\leq x \\leq 360^\\circ",
          "explanation": "We want every angle in $0^\\circ$ to $360^\\circ$ whose tangent is $1$. The tangent graph repeats every $180^\\circ$, so the range covers two branches and we expect two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal value",
          "workingLatex": "\\alpha = \\tan^{-1}(1)",
          "explanation": "The inverse tangent gives the first angle whose tangent is $1$. Because tangent is periodic, we then add on multiples of its period.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the special angle",
          "workingLatex": "\\alpha = 45^\\circ",
          "explanation": "$\\tan 45^\\circ = 1$ exactly, so the principal value is the special angle $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the first solution",
          "workingLatex": "x_1 = 45^\\circ",
          "explanation": "The value $45^\\circ$ lies in the interval, so it is the first solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the period of tangent",
          "workingLatex": "\\tan(x + 180^\\circ) = \\tan x",
          "explanation": "Unlike sine and cosine, the tangent graph repeats every $180^\\circ$. So further solutions are found by repeatedly adding $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second solution",
          "workingLatex": "x_2 = 45^\\circ + 180^\\circ = 225^\\circ",
          "explanation": "Adding one period to $45^\\circ$ gives $225^\\circ$, which still lies in the range and so is a valid solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check for more solutions",
          "workingLatex": "45^\\circ + 360^\\circ = 405^\\circ > 360^\\circ",
          "explanation": "Adding another $180^\\circ$ takes us to $405^\\circ$, which is outside the interval. So we stop; there are exactly two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the first solution",
          "workingLatex": "\\tan 45^\\circ = 1 \\checkmark",
          "explanation": "Substituting $x=45^\\circ$ returns $1$, confirming it is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the second solution",
          "workingLatex": "\\tan 225^\\circ = \\tan 45^\\circ = 1 \\checkmark",
          "explanation": "Since $225^\\circ$ is one full period on from $45^\\circ$, its tangent is also $1$, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "x = 45^\\circ, \\; 225^\\circ",
          "explanation": "These two angles satisfy $\\tan x = 1$ within the interval, so they are the complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 45^\\circ$ and $x = 225^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving",
      "symmetry"
    ],
    "questionText": "Solve $\\sin x = -\\tfrac{\\sqrt2}{2}$ for $0^\\circ \\leq x \\leq 360^\\circ$. Use the sine graph to locate both solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "\\sin x = -\\tfrac{\\sqrt2}{2}, \\quad 0^\\circ \\leq x \\leq 360^\\circ",
          "explanation": "The sine is negative, so on the graph we are below the axis. Sine is negative between $180^\\circ$ and $360^\\circ$, so both solutions live in that lower half.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the acute reference angle",
          "workingLatex": "\\alpha = \\sin^{-1}\\left(\\tfrac{\\sqrt2}{2}\\right)",
          "explanation": "We first ignore the minus sign and find the acute angle for the size of the value. This reference angle tells us how far each solution sits from the axis crossings.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the special angle",
          "workingLatex": "\\alpha = 45^\\circ",
          "explanation": "$\\tfrac{\\sqrt2}{2}$ is an exact value, so the reference angle is the special angle $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the negative region",
          "workingLatex": "\\sin x < 0 \\;\\Rightarrow\\; 180^\\circ < x < 360^\\circ",
          "explanation": "Reading the sine graph, the curve is below the $x$-axis only for angles between $180^\\circ$ and $360^\\circ$. Both answers must therefore come from this stretch.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the first solution",
          "workingLatex": "x_1 = 180^\\circ + 45^\\circ = 225^\\circ",
          "explanation": "Just after $180^\\circ$ the curve dips down by the reference angle, giving $180^\\circ + 45^\\circ = 225^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second solution",
          "workingLatex": "x_2 = 360^\\circ - 45^\\circ = 315^\\circ",
          "explanation": "Approaching $360^\\circ$ the curve rises back to zero, so the second dip to this value is $45^\\circ$ short of $360^\\circ$, namely $315^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the interval",
          "workingLatex": "225^\\circ, \\; 315^\\circ \\in [0^\\circ, 360^\\circ]",
          "explanation": "Both values lie within the required range, and both sit in the negative section of the graph, as expected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the first solution",
          "workingLatex": "\\sin 225^\\circ = -\\sin 45^\\circ = -\\tfrac{\\sqrt2}{2} \\checkmark",
          "explanation": "Substituting $x=225^\\circ$ gives $-\\tfrac{\\sqrt2}{2}$, matching the equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the second solution",
          "workingLatex": "\\sin 315^\\circ = -\\sin 45^\\circ = -\\tfrac{\\sqrt2}{2} \\checkmark",
          "explanation": "Substituting $x=315^\\circ$ also gives $-\\tfrac{\\sqrt2}{2}$, confirming both solutions are correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "x = 225^\\circ, \\; 315^\\circ",
          "explanation": "These are the only two angles in the interval whose sine is $-\\tfrac{\\sqrt2}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 225^\\circ$ and $x = 315^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving",
      "symmetry"
    ],
    "questionText": "Solve $\\cos x = -\\tfrac{1}{2}$ for $0^\\circ \\leq x \\leq 360^\\circ$, using the cosine graph to find both solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "\\cos x = -\\tfrac{1}{2}, \\quad 0^\\circ \\leq x \\leq 360^\\circ",
          "explanation": "The cosine is negative, and on the graph cosine is below the axis between $90^\\circ$ and $270^\\circ$. Both solutions therefore lie in that middle band.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the acute reference angle",
          "workingLatex": "\\alpha = \\cos^{-1}\\left(\\tfrac{1}{2}\\right)",
          "explanation": "We drop the minus sign first and find the acute angle for the value $\\tfrac12$. This reference angle sets how far each solution sits from $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the special angle",
          "workingLatex": "\\alpha = 60^\\circ",
          "explanation": "$\\tfrac12$ is an exact cosine value, so the reference angle is the special angle $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the negative region",
          "workingLatex": "\\cos x < 0 \\;\\Rightarrow\\; 90^\\circ < x < 270^\\circ",
          "explanation": "The cosine graph is below the $x$-axis only between $90^\\circ$ and $270^\\circ$, so both answers are found either side of $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the first solution",
          "workingLatex": "x_1 = 180^\\circ - 60^\\circ = 120^\\circ",
          "explanation": "Cosine is symmetric about $180^\\circ$, so one solution sits $60^\\circ$ before it, giving $120^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second solution",
          "workingLatex": "x_2 = 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "By the same symmetry, the other solution sits $60^\\circ$ after $180^\\circ$, giving $240^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the interval",
          "workingLatex": "120^\\circ, \\; 240^\\circ \\in [0^\\circ, 360^\\circ]",
          "explanation": "Both values lie inside the range and inside the negative band of the curve, as expected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the first solution",
          "workingLatex": "\\cos 120^\\circ = -\\cos 60^\\circ = -\\tfrac{1}{2} \\checkmark",
          "explanation": "Substituting $x=120^\\circ$ gives $-\\tfrac12$, matching the equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the second solution",
          "workingLatex": "\\cos 240^\\circ = -\\cos 60^\\circ = -\\tfrac{1}{2} \\checkmark",
          "explanation": "Substituting $x=240^\\circ$ also gives $-\\tfrac12$, confirming both solutions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "x = 120^\\circ, \\; 240^\\circ",
          "explanation": "These are the only two angles in the interval with cosine equal to $-\\tfrac12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 120^\\circ$ and $x = 240^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving",
      "symmetry"
    ],
    "questionText": "Solve $\\sin x = 0.6$ for $0^\\circ \\leq x \\leq 360^\\circ$, giving both solutions to $1$ decimal place. Use the symmetry of the sine graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "\\sin x = 0.6, \\quad 0^\\circ \\leq x \\leq 360^\\circ",
          "explanation": "The value $0.6$ is positive and less than $1$, so the line $y=0.6$ crosses the sine curve twice in this range. Since $0.6$ is not a special value, we work in decimals.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal value",
          "workingLatex": "\\alpha = \\sin^{-1}(0.6)",
          "explanation": "The inverse sine gives the anchor angle. From it the graph's symmetry will supply the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate on the calculator",
          "workingLatex": "\\alpha = 36.8699\\ldots^\\circ",
          "explanation": "We keep several decimal places for now so that no rounding error creeps into the second solution; we will round at the very end.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the first solution",
          "workingLatex": "x_1 = 36.9^\\circ \\; (1\\,\\text{d.p.})",
          "explanation": "This positive acute angle lies in the interval, giving the first solution once rounded.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the symmetry rule",
          "workingLatex": "\\sin(180^\\circ - x) = \\sin x",
          "explanation": "The sine graph is symmetric about $x=90^\\circ$, so subtracting the anchor angle from $180^\\circ$ gives the partner solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second solution",
          "workingLatex": "x_2 = 180^\\circ - 36.8699\\ldots^\\circ = 143.1301\\ldots^\\circ",
          "explanation": "Using the full-precision anchor keeps this accurate. We round only at the final stage.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round the second solution",
          "workingLatex": "x_2 = 143.1^\\circ \\; (1\\,\\text{d.p.})",
          "explanation": "Rounding to one decimal place gives $143.1^\\circ$, which lies in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the first solution",
          "workingLatex": "\\sin 36.9^\\circ \\approx 0.600 \\checkmark",
          "explanation": "Substituting $x=36.9^\\circ$ back returns about $0.6$, confirming it is correct to the given accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the second solution",
          "workingLatex": "\\sin 143.1^\\circ \\approx 0.600 \\checkmark",
          "explanation": "Substituting $x=143.1^\\circ$ also returns about $0.6$, since it mirrors the first angle across the peak.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "x = 36.9^\\circ, \\; 143.1^\\circ",
          "explanation": "Both rounded values satisfy the equation and lie in the interval, so these are the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 36.9^\\circ$ and $x = 143.1^\\circ$ (to $1$ d.p.)"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "period",
      "symmetry"
    ],
    "questionText": "State how many solutions the equation $\\cos x = 0.3$ has in the interval $0^\\circ \\leq x \\leq 720^\\circ$. Justify your answer by reasoning from the shape and period of the cosine graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "\\cos x = 0.3, \\quad 0^\\circ \\leq x \\leq 720^\\circ",
          "explanation": "We do not need the actual angles, only how many there are. Counting intersections of the line $y=0.3$ with the cosine curve is the quickest route.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm solutions exist",
          "workingLatex": "-1 \\leq 0.3 \\leq 1",
          "explanation": "Cosine only takes values between $-1$ and $1$. Since $0.3$ lies in this range, the horizontal line does cut the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count crossings in one period",
          "workingLatex": "0^\\circ \\leq x \\leq 360^\\circ: \\; 2 \\text{ crossings}",
          "explanation": "Across one full wave from $0^\\circ$ to $360^\\circ$, a horizontal line at height $0.3$ meets the cosine curve exactly twice: once on the way down and once on the way back up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Name those two crossings",
          "workingLatex": "\\alpha = \\cos^{-1}(0.3) \\approx 72.5^\\circ, \\quad 360^\\circ - 72.5^\\circ = 287.5^\\circ",
          "explanation": "Concretely, the two solutions in the first period are near $72.5^\\circ$ and $287.5^\\circ$. This confirms the count of two.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the period",
          "workingLatex": "\\cos(x + 360^\\circ) = \\cos x",
          "explanation": "The cosine graph repeats exactly every $360^\\circ$, so the same picture of two crossings recurs in the next cycle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count the periods in range",
          "workingLatex": "\\frac{720^\\circ}{360^\\circ} = 2 \\text{ periods}",
          "explanation": "The interval from $0^\\circ$ to $720^\\circ$ is exactly two full cosine cycles laid side by side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply crossings by periods",
          "workingLatex": "2 \\times 2 = 4",
          "explanation": "Each cycle contributes two crossings, and there are two cycles, so there are four intersections in total.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the endpoints",
          "workingLatex": "\\cos 0^\\circ = \\cos 720^\\circ = 1 \\neq 0.3",
          "explanation": "The endpoints give a cosine of $1$, not $0.3$, so no extra solution is hidden at the boundaries of the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the solutions as a check",
          "workingLatex": "72.5^\\circ, \\; 287.5^\\circ, \\; 432.5^\\circ, \\; 647.5^\\circ",
          "explanation": "Adding $360^\\circ$ to the first two gives the second pair, and all four lie inside the interval, confirming the total.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "4 \\text{ solutions}",
          "explanation": "The graph reasoning and the explicit list agree: there are four solutions in $0^\\circ \\leq x \\leq 720^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are $4$ solutions."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving",
      "intersection"
    ],
    "questionText": "Find the $x$-coordinates of the points where the curve $y = \\sin x$ meets the line $y = \\tfrac{1}{2}$ in the interval $0^\\circ \\leq x \\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the intersection",
          "workingLatex": "\\sin x = \\tfrac{1}{2}",
          "explanation": "The curve meets the line where their $y$-values are equal. Setting $\\sin x$ equal to $\\tfrac12$ turns the geometry problem into an equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expect two intersections",
          "workingLatex": "0 < \\tfrac{1}{2} < 1",
          "explanation": "Because $\\tfrac12$ sits between $0$ and the peak of $1$, the horizontal line crosses the sine curve twice in this range, so we look for two $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the principal value",
          "workingLatex": "\\alpha = \\sin^{-1}\\left(\\tfrac{1}{2}\\right) = 30^\\circ",
          "explanation": "The inverse sine gives the first crossing angle. Since $\\tfrac12$ is a special value, this is exactly $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the first coordinate",
          "workingLatex": "x_1 = 30^\\circ",
          "explanation": "The first intersection occurs at $x=30^\\circ$, which lies in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use sine symmetry",
          "workingLatex": "\\sin(180^\\circ - x) = \\sin x",
          "explanation": "The sine curve is symmetric about $x=90^\\circ$, so the second crossing mirrors the first about that line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second coordinate",
          "workingLatex": "x_2 = 180^\\circ - 30^\\circ = 150^\\circ",
          "explanation": "Reflecting $30^\\circ$ about $90^\\circ$ gives $150^\\circ$, the second point where the curve meets the line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the intersection points",
          "workingLatex": "(30^\\circ, \\tfrac{1}{2}) \\text{ and } (150^\\circ, \\tfrac{1}{2})",
          "explanation": "Both points share the height $\\tfrac12$ of the line, as they must, and their $x$-coordinates are what the question asked for.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the first point",
          "workingLatex": "\\sin 30^\\circ = \\tfrac{1}{2} \\checkmark",
          "explanation": "At $x=30^\\circ$ the curve height is $\\tfrac12$, so it genuinely lies on the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the second point",
          "workingLatex": "\\sin 150^\\circ = \\tfrac{1}{2} \\checkmark",
          "explanation": "At $x=150^\\circ$ the curve height is also $\\tfrac12$, confirming the second intersection.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "x = 30^\\circ, \\; 150^\\circ",
          "explanation": "These are the $x$-coordinates where the sine curve meets the line $y=\\tfrac12$ in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 30^\\circ$ and $x = 150^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving",
      "tangent"
    ],
    "questionText": "Solve $\\tan x = -\\sqrt3$ for $0^\\circ \\leq x \\leq 360^\\circ$. Use the tangent graph to find all solutions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem",
          "workingLatex": "\\tan x = -\\sqrt3, \\quad 0^\\circ \\leq x \\leq 360^\\circ",
          "explanation": "The tangent is negative, and tangent is negative in the second and fourth quadrants of the graph. So we expect one solution in each, two in total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the acute reference angle",
          "workingLatex": "\\alpha = \\tan^{-1}(\\sqrt3)",
          "explanation": "We first ignore the sign and find the acute angle whose tangent is $\\sqrt3$. This reference angle tells us how far each solution sits from the axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the special angle",
          "workingLatex": "\\alpha = 60^\\circ",
          "explanation": "$\\tan 60^\\circ = \\sqrt3$ exactly, so the reference angle is the special angle $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the second-quadrant solution",
          "workingLatex": "x_1 = 180^\\circ - 60^\\circ = 120^\\circ",
          "explanation": "In the second quadrant the tangent is negative, and the solution there is $60^\\circ$ short of $180^\\circ$, giving $120^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the fourth-quadrant solution",
          "workingLatex": "x_2 = 360^\\circ - 60^\\circ = 300^\\circ",
          "explanation": "In the fourth quadrant the tangent is again negative, and the solution is $60^\\circ$ short of $360^\\circ$, giving $300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cross-check with the period",
          "workingLatex": "120^\\circ + 180^\\circ = 300^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, so the two solutions should differ by exactly one period. They do, which confirms the pair.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the interval",
          "workingLatex": "120^\\circ, \\; 300^\\circ \\in [0^\\circ, 360^\\circ]",
          "explanation": "Both angles lie inside the required range, and adding another $180^\\circ$ would exceed $360^\\circ$, so there are no more.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the first solution",
          "workingLatex": "\\tan 120^\\circ = -\\tan 60^\\circ = -\\sqrt3 \\checkmark",
          "explanation": "Substituting $x=120^\\circ$ gives $-\\sqrt3$, matching the equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the second solution",
          "workingLatex": "\\tan 300^\\circ = -\\tan 60^\\circ = -\\sqrt3 \\checkmark",
          "explanation": "Substituting $x=300^\\circ$ also gives $-\\sqrt3$, confirming both solutions are correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "x = 120^\\circ, \\; 300^\\circ",
          "explanation": "These are the only two angles in the interval whose tangent is $-\\sqrt3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 120^\\circ$ and $x = 300^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "amplitude",
      "transformations"
    ],
    "questionText": "For the curve $y = 3\\sin x + 1$, state the amplitude and the range, and give the coordinates of the maximum and minimum points in the interval $0^\\circ \\leq x \\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y = a\\sin x + c",
          "explanation": "Writing the equation next to the general shape $y = a\\sin x + c$ lets you read off exactly which numbers control the height and the middle of the wave.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $a$ and $c$",
          "workingLatex": "a = 3,\\quad c = 1",
          "explanation": "The number multiplying the sine is $a = 3$ and the number added on is $c = 1$; these are the only two values you need to describe the whole curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude} = |a| = 3",
          "explanation": "The amplitude is how far the curve rises above or falls below its middle line, which is the size of $a$ ignoring any sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the midline",
          "workingLatex": "y = c = 1",
          "explanation": "The $+1$ lifts the whole wave upward, so the curve now oscillates about the horizontal line $y = 1$ instead of about the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the maximum value",
          "workingLatex": "y_{\\max} = c + |a| = 1 + 3 = 4",
          "explanation": "The highest point is reached one amplitude above the midline, so add the amplitude to the midline value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the minimum value",
          "workingLatex": "y_{\\min} = c - |a| = 1 - 3 = -2",
          "explanation": "The lowest point sits one amplitude below the midline, so subtract the amplitude from the midline value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range",
          "workingLatex": "-2 \\leq y \\leq 4",
          "explanation": "The curve never leaves the band between its minimum and maximum, so those two values become the ends of the range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate where the maximum occurs",
          "workingLatex": "\\sin x = 1 \\;\\Rightarrow\\; x = 90^\\circ",
          "explanation": "The peak happens when $\\sin x$ is at its largest value of $1$, which first occurs at $x = 90^\\circ$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the maximum point",
          "workingLatex": "(90^\\circ,\\; 4)",
          "explanation": "Combining the $x$-value with the maximum height gives the full coordinates of the top of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Locate where the minimum occurs",
          "workingLatex": "\\sin x = -1 \\;\\Rightarrow\\; x = 270^\\circ",
          "explanation": "The trough happens when $\\sin x$ reaches its smallest value of $-1$, which occurs at $x = 270^\\circ$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the minimum point",
          "workingLatex": "(270^\\circ,\\; -2)",
          "explanation": "Pairing this $x$-value with the minimum height gives the full coordinates of the bottom of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify with the midline check",
          "workingLatex": "\\tfrac{1}{2}(4 + (-2)) = 1 = c",
          "explanation": "The midpoint of the maximum and minimum values should return the midline, and it gives $1$ as expected, confirming the results are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "Amplitude $= 3$; range $-2 \\leq y \\leq 4$; maximum at $(90^\\circ, 4)$ and minimum at $(270^\\circ, -2)$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "trig-graphs",
      "period",
      "amplitude"
    ],
    "questionText": "For the curve $y = 2\\cos 2x$, state the amplitude and the period, and give the coordinates of all maximum and minimum points in the interval $0^\\circ \\leq x \\leq 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y = a\\cos(bx)",
          "explanation": "Matching the equation to $y = a\\cos(bx)$ shows which number sets the height and which one squashes the curve horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $a$ and $b$",
          "workingLatex": "a = 2,\\quad b = 2",
          "explanation": "The multiplier outside is $a = 2$ and the multiplier of $x$ inside is $b = 2$; these control amplitude and period respectively.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude} = |a| = 2",
          "explanation": "The amplitude is the distance from the middle to a peak, which equals the size of $a$ regardless of sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the period",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b} = \\frac{360^\\circ}{2} = 180^\\circ",
          "explanation": "Because $b = 2$ makes the curve repeat twice as fast, the length of one full cycle is halved to $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the maximum condition",
          "workingLatex": "\\cos 2x = 1 \\;\\Rightarrow\\; y = 2",
          "explanation": "Cosine reaches its greatest value of $1$ at the peaks, and there the curve height is $2 \\times 1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the maximum $x$-values",
          "workingLatex": "2x = 0^\\circ,\\,360^\\circ,\\,720^\\circ \\;\\Rightarrow\\; x = 0^\\circ,\\,180^\\circ,\\,360^\\circ",
          "explanation": "Since the angle is $2x$, list every angle up to $720^\\circ$ where cosine is $1$, then halve each to return to $x$ inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the maximum points",
          "workingLatex": "(0^\\circ, 2),\\;(180^\\circ, 2),\\;(360^\\circ, 2)",
          "explanation": "Each of those $x$-values gives the peak height of $2$, producing three maximum points across the interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the minimum condition",
          "workingLatex": "\\cos 2x = -1 \\;\\Rightarrow\\; y = -2",
          "explanation": "Cosine reaches its least value of $-1$ at the troughs, giving a curve height of $2 \\times (-1) = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the minimum $x$-values",
          "workingLatex": "2x = 180^\\circ,\\,540^\\circ \\;\\Rightarrow\\; x = 90^\\circ,\\,270^\\circ",
          "explanation": "List the angles up to $720^\\circ$ where cosine is $-1$, then halve them to find the $x$-values within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the minimum points",
          "workingLatex": "(90^\\circ, -2),\\;(270^\\circ, -2)",
          "explanation": "Each of these $x$-values gives the trough height of $-2$, producing two minimum points.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the spacing",
          "workingLatex": "180^\\circ - 0^\\circ = 180^\\circ = \\text{period}",
          "explanation": "Consecutive peaks are exactly one period apart, and $180^\\circ$ matches the period found earlier, confirming the points are placed correctly.",
          "diagram": null
        }
      ],
      "finalAnswer": "Amplitude $= 2$; period $= 180^\\circ$; maxima at $(0^\\circ, 2)$, $(180^\\circ, 2)$, $(360^\\circ, 2)$; minima at $(90^\\circ, -2)$, $(270^\\circ, -2)$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "amplitude",
      "period"
    ],
    "questionText": "For the curve $y = 4\\sin(3x) - 1$, state the amplitude, the period, and the range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare with the standard form",
          "workingLatex": "y = a\\sin(bx) + c",
          "explanation": "Lining the equation up with $y = a\\sin(bx) + c$ makes clear which numbers control the height, the horizontal squash, and the vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $a$, $b$ and $c$",
          "workingLatex": "a = 4,\\quad b = 3,\\quad c = -1",
          "explanation": "Reading straight from the equation, the amplitude factor is $4$, the inside multiplier is $3$, and the constant shift is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude} = |a| = 4",
          "explanation": "The amplitude is the distance from the middle line to a peak, which equals the size of $a$ ignoring the sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the period",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b} = \\frac{360^\\circ}{3} = 120^\\circ",
          "explanation": "With $b = 3$ the curve completes its cycle three times as fast, so one full wave takes only a third of $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the midline",
          "workingLatex": "y = c = -1",
          "explanation": "The $-1$ pushes the whole wave down, so it now oscillates about the line $y = -1$ rather than about the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the maximum value",
          "workingLatex": "y_{\\max} = c + |a| = -1 + 4 = 3",
          "explanation": "The highest point is one amplitude above the midline, so add the amplitude to the midline value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the minimum value",
          "workingLatex": "y_{\\min} = c - |a| = -1 - 4 = -5",
          "explanation": "The lowest point is one amplitude below the midline, so subtract the amplitude from the midline value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range",
          "workingLatex": "-5 \\leq y \\leq 3",
          "explanation": "The curve stays trapped between its minimum and maximum, so these become the two ends of the range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with the midline check",
          "workingLatex": "\\tfrac{1}{2}(3 + (-5)) = -1 = c",
          "explanation": "Averaging the maximum and minimum should recover the midline, and it gives $-1$ as expected, confirming the values are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "Amplitude $= 4$; period $= 120^\\circ$; range $-5 \\leq y \\leq 3$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "trig-graphs",
      "finding-equations",
      "amplitude"
    ],
    "questionText": "A curve has equation $y = a\\sin x + c$. Its maximum value is $7$ and its minimum value is $-3$. Find the values of $a$ and $c$, and write down the equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how max and min relate to $a$ and $c$",
          "workingLatex": "y_{\\max} = c + a,\\qquad y_{\\min} = c - a",
          "explanation": "For $y = a\\sin x + c$ the peak sits one amplitude above the midline and the trough one amplitude below, which links the extreme values directly to $a$ and $c$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the amplitude formula",
          "workingLatex": "a = \\frac{y_{\\max} - y_{\\min}}{2}",
          "explanation": "Subtracting min from max spans the full height of the wave, so halving that gap gives the amplitude.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given values",
          "workingLatex": "a = \\frac{7 - (-3)}{2}",
          "explanation": "Placing the given maximum and minimum into the formula sets up the calculation for the amplitude.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $a$",
          "workingLatex": "a = \\frac{10}{2} = 5",
          "explanation": "The total height of the wave is $10$, so the amplitude is half of that, giving $a = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the midline formula",
          "workingLatex": "c = \\frac{y_{\\max} + y_{\\min}}{2}",
          "explanation": "The midline lies exactly halfway between the peak and trough, so averaging the two extreme values gives $c$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the given values",
          "workingLatex": "c = \\frac{7 + (-3)}{2}",
          "explanation": "Inserting the maximum and minimum into the average sets up the calculation for the vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $c$",
          "workingLatex": "c = \\frac{4}{2} = 2",
          "explanation": "The centre of the wave sits at $y = 2$, which is the value of the constant $c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the equation",
          "workingLatex": "y = 5\\sin x + 2",
          "explanation": "Placing the found amplitude and shift back into the standard form gives the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the maximum",
          "workingLatex": "c + a = 2 + 5 = 7",
          "explanation": "Adding the amplitude to the midline should return the stated maximum, and it gives $7$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the minimum",
          "workingLatex": "c - a = 2 - 5 = -3",
          "explanation": "Subtracting the amplitude from the midline should return the stated minimum, and it gives $-3$ as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 5$, $c = 2$, so $y = 5\\sin x + 2$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "trig-graphs",
      "finding-equations",
      "period"
    ],
    "questionText": "A curve has equation $y = a\\cos(bx)$ where $a > 0$ and $b > 0$. The curve has amplitude $6$ and period $90^\\circ$. Find the values of $a$ and $b$, and write down the equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what $a$ controls",
          "workingLatex": "\\text{amplitude} = |a|",
          "explanation": "In $y = a\\cos(bx)$ the number $a$ sets how far the curve reaches above and below its middle line, which is exactly the amplitude.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off $a$",
          "workingLatex": "a = 6",
          "explanation": "Since the amplitude is given as $6$ and $a$ is stated to be positive, the value of $a$ is simply $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall what $b$ controls",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b}",
          "explanation": "The number $b$ decides how quickly the curve repeats, and the length of one full cycle is $360^\\circ$ divided by $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $b$",
          "workingLatex": "b = \\frac{360^\\circ}{\\text{period}}",
          "explanation": "Making $b$ the subject lets you find it directly from the given period.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the period",
          "workingLatex": "b = \\frac{360^\\circ}{90^\\circ}",
          "explanation": "Putting the given period of $90^\\circ$ into the formula sets up the calculation for $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute $b$",
          "workingLatex": "b = 4",
          "explanation": "A period four times shorter than $360^\\circ$ means the curve repeats four times as fast, so $b = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the equation",
          "workingLatex": "y = 6\\cos(4x)",
          "explanation": "Placing the found values of $a$ and $b$ into the standard form gives the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the amplitude",
          "workingLatex": "|a| = |6| = 6",
          "explanation": "The size of the coefficient of cosine returns the stated amplitude of $6$, confirming that part.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the period",
          "workingLatex": "\\frac{360^\\circ}{4} = 90^\\circ",
          "explanation": "Dividing $360^\\circ$ by the found value of $b$ returns the stated period of $90^\\circ$, confirming the equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 6$, $b = 4$, so $y = 6\\cos(4x)$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "trig-graphs",
      "finding-equations",
      "period"
    ],
    "questionText": "A curve has equation $y = a\\sin(bx) + c$ with $a > 0$ and $b > 0$. Its maximum value is $8$, its minimum value is $2$, and its period is $120^\\circ$. Find $a$, $c$ and $b$, and write down the equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the key relationships",
          "workingLatex": "y_{\\max} = c + a,\\quad y_{\\min} = c - a,\\quad \\text{period} = \\frac{360^\\circ}{b}",
          "explanation": "For $y = a\\sin(bx) + c$ the peak and trough are set by $a$ and $c$, while the repeat length is set by $b$, so each unknown links to one given fact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the amplitude",
          "workingLatex": "a = \\frac{y_{\\max} - y_{\\min}}{2} = \\frac{8 - 2}{2}",
          "explanation": "The gap between maximum and minimum spans the full height of the wave, so half of it is the amplitude.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $a$",
          "workingLatex": "a = \\frac{6}{2} = 3",
          "explanation": "The wave rises and falls by $3$ from its centre, so the amplitude is $a = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the vertical shift",
          "workingLatex": "c = \\frac{y_{\\max} + y_{\\min}}{2} = \\frac{8 + 2}{2}",
          "explanation": "The midline lies halfway between the peak and trough, so averaging the two extreme values gives $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $c$",
          "workingLatex": "c = \\frac{10}{2} = 5",
          "explanation": "The curve oscillates about $y = 5$, so the constant term is $c = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for $b$",
          "workingLatex": "b = \\frac{360^\\circ}{\\text{period}}",
          "explanation": "Making $b$ the subject of the period formula allows it to be found directly from the given period.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the period",
          "workingLatex": "b = \\frac{360^\\circ}{120^\\circ}",
          "explanation": "Placing the given period of $120^\\circ$ into the formula sets up the calculation for $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute $b$",
          "workingLatex": "b = 3",
          "explanation": "A period three times shorter than $360^\\circ$ means the curve repeats three times as fast, so $b = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the equation",
          "workingLatex": "y = 3\\sin(3x) + 5",
          "explanation": "Combining the found amplitude, shift and inside multiplier into the standard form gives the equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the maximum and minimum",
          "workingLatex": "c + a = 8,\\qquad c - a = 2",
          "explanation": "Adding and subtracting the amplitude from the midline returns the stated maximum and minimum, confirming $a$ and $c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the period",
          "workingLatex": "\\frac{360^\\circ}{3} = 120^\\circ",
          "explanation": "Dividing $360^\\circ$ by the found $b$ returns the stated period of $120^\\circ$, confirming the equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$, $c = 5$, $b = 3$, so $y = 3\\sin(3x) + 5$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "transformations",
      "stretches"
    ],
    "questionText": "Describe fully the two transformations that map the curve $y = \\cos x$ onto the curve $y = 3\\cos 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both curves to compare",
          "workingLatex": "y = \\cos x \\;\\longrightarrow\\; y = 3\\cos 2x",
          "explanation": "Setting the original and target side by side makes it easy to spot exactly what has been changed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the two differences",
          "workingLatex": "x \\to 2x \\quad\\text{and}\\quad \\cos(\\cdot) \\to 3\\cos(\\cdot)",
          "explanation": "There are two changes: the input $x$ has become $2x$, and the whole function has been multiplied by $3$, so two separate transformations are needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the change inside the function",
          "workingLatex": "\\cos x \\to \\cos 2x",
          "explanation": "Replacing $x$ with $2x$ affects the horizontal direction, and doubling the input makes the curve repeat in half the space.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the horizontal transformation",
          "workingLatex": "\\text{horizontal stretch, scale factor } \\tfrac{1}{2}",
          "explanation": "A factor of $2$ inside the function squashes the graph towards the $y$-axis, which is a horizontal stretch with scale factor one half.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the change outside the function",
          "workingLatex": "\\cos 2x \\to 3\\cos 2x",
          "explanation": "Multiplying the whole expression by $3$ affects the vertical direction, stretching every height away from the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the vertical transformation",
          "workingLatex": "\\text{vertical stretch, scale factor } 3",
          "explanation": "A factor of $3$ outside the function multiplies each $y$-value by $3$, which is a vertical stretch with scale factor three.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Comment on the order",
          "workingLatex": "\\text{one horizontal, one vertical} \\Rightarrow \\text{order does not affect the result}",
          "explanation": "Because one transformation acts sideways and the other acts up and down, they do not interfere, so applying them in either order gives the same final curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Give the full description",
          "workingLatex": "\\text{h. stretch s.f. } \\tfrac{1}{2}\\ \\text{then v. stretch s.f. } 3",
          "explanation": "Stating both stretches together, with their directions and scale factors, fully describes how the first curve is mapped onto the second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with a key point",
          "workingLatex": "(0^\\circ, 1) \\to (0^\\circ, 3)",
          "explanation": "The peak of $y = \\cos x$ at $(0^\\circ, 1)$ stays at $x = 0$ under the horizontal stretch and rises to height $3$ under the vertical stretch, matching the peak of $y = 3\\cos 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the period effect",
          "workingLatex": "360^\\circ \\to \\tfrac{1}{2}\\times 360^\\circ = 180^\\circ",
          "explanation": "The horizontal stretch halves the period from $360^\\circ$ to $180^\\circ$, which agrees with the curve $y = 3\\cos 2x$, confirming the description.",
          "diagram": null
        }
      ],
      "finalAnswer": "A horizontal stretch with scale factor $\\tfrac{1}{2}$ and a vertical stretch with scale factor $3$; since one is horizontal and one is vertical, they may be applied in either order."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "solving-equations",
      "intersections"
    ],
    "questionText": "State how many solutions the equation $3\\sin x + 1 = 2$ has in the interval $0^\\circ \\leq x \\leq 360^\\circ$, and find them to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the sine term",
          "workingLatex": "3\\sin x + 1 = 2 \\;\\Rightarrow\\; 3\\sin x = 1",
          "explanation": "Subtracting $1$ from both sides gathers the sine term on its own, which is the first move towards solving for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Make $\\sin x$ the subject",
          "workingLatex": "\\sin x = \\frac{1}{3}",
          "explanation": "Dividing by $3$ leaves $\\sin x$ equal to a single number, turning the problem into a standard trigonometric equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the value is valid",
          "workingLatex": "-1 \\leq \\tfrac{1}{3} \\leq 1",
          "explanation": "Sine can only take values between $-1$ and $1$, and $\\tfrac{1}{3}$ lies safely inside this band, so solutions do exist.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide how many solutions to expect",
          "workingLatex": "\\sin x > 0 \\Rightarrow \\text{quadrants 1 and 2}",
          "explanation": "Since $\\tfrac{1}{3}$ is positive, sine is positive in the first and second quadrants, so two solutions are expected in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the principal value",
          "workingLatex": "x = \\sin^{-1}\\!\\left(\\tfrac{1}{3}\\right)",
          "explanation": "Applying the inverse sine gives the first-quadrant angle that the calculator returns as the base solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the principal value",
          "workingLatex": "x = 19.5^\\circ \\ (1\\text{ d.p.})",
          "explanation": "The inverse sine of $\\tfrac{1}{3}$ is about $19.47^\\circ$, which rounds to $19.5^\\circ$ to one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second-quadrant solution",
          "workingLatex": "x = 180^\\circ - 19.47^\\circ",
          "explanation": "For a positive sine the other solution is found by subtracting the principal value from $180^\\circ$, reflecting it into the second quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the second solution",
          "workingLatex": "x = 160.5^\\circ \\ (1\\text{ d.p.})",
          "explanation": "Carrying out the subtraction gives about $160.53^\\circ$, which rounds to $160.5^\\circ$ to one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the number of solutions",
          "workingLatex": "\\text{two solutions in } 0^\\circ \\leq x \\leq 360^\\circ",
          "explanation": "Both angles lie inside the required interval, so the equation has exactly two solutions there.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the solutions",
          "workingLatex": "\\sin 19.5^\\circ \\approx 0.334,\\quad \\sin 160.5^\\circ \\approx 0.334",
          "explanation": "Substituting both angles back gives sine values very close to $\\tfrac{1}{3} \\approx 0.333$, confirming the answers are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are two solutions: $x = 19.5^\\circ$ and $x = 160.5^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "intersections",
      "solving-equations"
    ],
    "questionText": "The graphs of $y = \\sin x$ and $y = \\cos x$ are drawn for $0^\\circ \\leq x \\leq 360^\\circ$. State the number of points at which they intersect and find the $x$-coordinates of these points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the curves equal",
          "workingLatex": "\\sin x = \\cos x",
          "explanation": "The graphs cross where they share the same height, so the intersection points occur wherever $\\sin x$ equals $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide through by cosine",
          "workingLatex": "\\frac{\\sin x}{\\cos x} = 1 \\quad (\\cos x \\neq 0)",
          "explanation": "Dividing both sides by $\\cos x$ combines the two functions into a single tangent, and this is safe because $\\cos x$ is not zero at any intersection.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite as a tangent equation",
          "workingLatex": "\\tan x = 1",
          "explanation": "The ratio of sine to cosine is the tangent, so the problem reduces to solving $\\tan x = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide how many solutions to expect",
          "workingLatex": "\\tan x > 0 \\Rightarrow \\text{quadrants 1 and 3}",
          "explanation": "Tangent is positive in the first and third quadrants, so within one full turn there are two solutions to expect.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the principal value",
          "workingLatex": "x = \\tan^{-1}(1) = 45^\\circ",
          "explanation": "The inverse tangent of $1$ is the well-known exact angle $45^\\circ$, giving the first solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the period of tangent",
          "workingLatex": "x = 45^\\circ + 180^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, so adding a full period to the principal value gives the next solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the second solution",
          "workingLatex": "x = 225^\\circ",
          "explanation": "Carrying out the addition places the second intersection at $225^\\circ$, which lies in the third quadrant as expected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check both lie in the interval",
          "workingLatex": "0^\\circ \\leq 45^\\circ,\\,225^\\circ \\leq 360^\\circ",
          "explanation": "Both angles fall inside the required interval, and the next value $405^\\circ$ would be outside it, so no others are included.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the number of intersections",
          "workingLatex": "\\text{two intersection points}",
          "explanation": "With exactly two valid angles, the curves meet at two points across the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the intersections",
          "workingLatex": "\\sin 45^\\circ = \\cos 45^\\circ = \\tfrac{\\sqrt{2}}{2},\\quad \\sin 225^\\circ = \\cos 225^\\circ = -\\tfrac{\\sqrt{2}}{2}",
          "explanation": "At both angles the sine and cosine values are equal, confirming that the graphs genuinely cross at $45^\\circ$ and $225^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are two intersection points, at $x = 45^\\circ$ and $x = 225^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "sketching",
      "sine-curve"
    ],
    "questionText": "Sketch the curve $y=2\\sin x+1$ for $0^\\circ\\leq x\\leq360^\\circ$. Your answer must state the amplitude, the period and the range, give the coordinates of the maximum and minimum points, and find the coordinates of every point where the curve crosses the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the structure of the curve",
          "workingLatex": "y=a\\sin x+c,\\quad a=2,\\;c=1",
          "explanation": "Writing the equation in the form $y=a\\sin x+c$ tells us everything about the shape: $a=2$ controls the height of the wave and $c=1$ lifts the whole curve upward. Naming these now makes every later feature easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude}=|a|=2",
          "explanation": "The amplitude is the distance from the middle of the wave up to a peak. Since the sine term is multiplied by $2$, the curve climbs twice as high and dips twice as low as a plain $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the midline",
          "workingLatex": "\\text{midline: } y=1",
          "explanation": "The $+1$ shifts every point up by one unit, so the wave now oscillates about the horizontal line $y=1$ rather than about the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the range",
          "workingLatex": "-2\\leq 2\\sin x\\leq 2\\;\\Rightarrow\\;-1\\leq y\\leq 3",
          "explanation": "Because $\\sin x$ never leaves $[-1,1]$, the term $2\\sin x$ stays within $[-2,2]$. Adding $1$ shifts both bounds up to give the full set of output values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the period",
          "workingLatex": "\\text{period}=360^\\circ",
          "explanation": "Neither multiplying by $2$ nor adding $1$ changes how quickly the wave repeats; only a factor inside the sine would do that. So one complete cycle still takes $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-intercept",
          "workingLatex": "x=0:\\;y=2\\sin0^\\circ+1=1",
          "explanation": "Substituting $x=0$ locates where the curve meets the $y$-axis. Since $\\sin0^\\circ=0$, the curve starts on its midline at $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the maximum point",
          "workingLatex": "\\sin x=1\\text{ at }x=90^\\circ:\\;y=2(1)+1=3",
          "explanation": "The curve is highest exactly where $\\sin x$ reaches its peak of $1$, which happens at $x=90^\\circ$. That fixes the maximum point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the minimum point",
          "workingLatex": "\\sin x=-1\\text{ at }x=270^\\circ:\\;y=2(-1)+1=-1",
          "explanation": "The lowest point occurs where $\\sin x=-1$, at $x=270^\\circ$, giving the minimum of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the x-intercepts",
          "workingLatex": "2\\sin x+1=0",
          "explanation": "The curve crosses the $x$-axis where $y=0$. Setting the equation equal to zero turns the sketch problem into a standard trig equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Isolate the sine term",
          "workingLatex": "\\sin x=-\\tfrac12",
          "explanation": "Rearranging isolates $\\sin x$. The negative value tells us the crossings both happen in the lower half of the cycle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the reference angle",
          "workingLatex": "\\sin^{-1}\\!\\left(\\tfrac12\\right)=30^\\circ",
          "explanation": "We first find the related acute angle from the positive value $\\tfrac12$. This $30^\\circ$ is the reference angle around which the real solutions are built.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Place the solutions in the correct quadrants",
          "workingLatex": "x=180^\\circ+30^\\circ=210^\\circ,\\quad x=360^\\circ-30^\\circ=330^\\circ",
          "explanation": "Because $\\sin x$ is negative in the third and fourth quadrants, we measure the reference angle there. This gives both crossings inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the first crossing",
          "workingLatex": "2\\sin210^\\circ+1=2\\!\\left(-\\tfrac12\\right)+1=0\\;\\checkmark",
          "explanation": "Substituting a solution back confirms the value truly gives zero, guarding against a quadrant slip.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the second crossing and the maximum",
          "workingLatex": "2\\sin330^\\circ+1=0\\;\\checkmark,\\quad 2\\sin90^\\circ+1=3\\;\\checkmark",
          "explanation": "Checking the other crossing and the maximum confirms the key coordinates are consistent with the equation.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Collect the features of the sketch",
          "workingLatex": "\\text{amp }2,\\;\\text{period }360^\\circ,\\;-1\\leq y\\leq3",
          "explanation": "Gathering every feature gives a complete description: a wave of amplitude $2$ about $y=1$, peaking at $(90^\\circ,3)$ and bottoming at $(270^\\circ,-1)$, crossing the axes at the points found.",
          "diagram": null
        }
      ],
      "finalAnswer": "Amplitude $2$; period $360^\\circ$; range $-1\\leq y\\leq 3$. Maximum $(90^\\circ,3)$; minimum $(270^\\circ,-1)$. $y$-intercept $(0,1)$; $x$-intercepts $(210^\\circ,0)$ and $(330^\\circ,0)$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving-equations",
      "double-angle-interval"
    ],
    "questionText": "Solve $\\sin 2x=\\dfrac{\\sqrt3}{2}$ for $0^\\circ\\leq x\\leq360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for the doubled angle",
          "workingLatex": "u=2x",
          "explanation": "The angle inside the sine is $2x$, not $x$, so we let $u=2x$. Working in $u$ turns the problem into the familiar $\\sin u=k$ that we know how to solve completely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Widen the interval for u",
          "workingLatex": "0^\\circ\\leq x\\leq360^\\circ\\;\\Rightarrow\\;0^\\circ\\leq u\\leq720^\\circ",
          "explanation": "Whatever range $x$ covers, $u=2x$ covers twice as much. Widening the interval to $720^\\circ$ is the crucial step: this is exactly where the extra solutions live.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u",
          "workingLatex": "\\sin u=\\frac{\\sqrt3}{2}",
          "explanation": "The equation now looks standard. We will find every $u$ in the doubled interval before returning to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\sin^{-1}\\!\\left(\\frac{\\sqrt3}{2}\\right)=60^\\circ",
          "explanation": "The reference angle comes from the positive value $\\tfrac{\\sqrt3}{2}$. This acute angle is what each solution is measured from.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solutions in the first cycle",
          "workingLatex": "u=60^\\circ,\\quad u=180^\\circ-60^\\circ=120^\\circ",
          "explanation": "Since $\\sin u$ is positive in the first and second quadrants, the first $360^\\circ$ of the cycle gives these two angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solutions in the second cycle",
          "workingLatex": "u=60^\\circ+360^\\circ=420^\\circ,\\quad u=120^\\circ+360^\\circ=480^\\circ",
          "explanation": "Because the interval for $u$ stretches to $720^\\circ$, we add a full turn to each first-cycle answer to capture the second cycle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List all valid u",
          "workingLatex": "u\\in\\{60^\\circ,120^\\circ,420^\\circ,480^\\circ\\}",
          "explanation": "Adding another $360^\\circ$ would exceed $720^\\circ$, so these four values are the complete list for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reverse the substitution",
          "workingLatex": "x=\\frac{u}{2}",
          "explanation": "Undoing $u=2x$ simply halves each value of $u$ to return to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the four x values",
          "workingLatex": "x=30^\\circ,\\;60^\\circ,\\;210^\\circ,\\;240^\\circ",
          "explanation": "Halving each of the four $u$ values gives four solutions, all comfortably inside $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the first solution",
          "workingLatex": "\\sin(2\\times30^\\circ)=\\sin60^\\circ=\\frac{\\sqrt3}{2}\\;\\checkmark",
          "explanation": "Substituting back reproduces the original equation, confirming the solution is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the second solution",
          "workingLatex": "\\sin(2\\times60^\\circ)=\\sin120^\\circ=\\frac{\\sqrt3}{2}\\;\\checkmark",
          "explanation": "The second value also satisfies the equation, so it too is correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the third solution",
          "workingLatex": "\\sin(2\\times210^\\circ)=\\sin420^\\circ=\\frac{\\sqrt3}{2}\\;\\checkmark",
          "explanation": "Since $420^\\circ$ is $60^\\circ$ past a full turn, its sine matches, confirming this second-cycle solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the fourth solution",
          "workingLatex": "\\sin(2\\times240^\\circ)=\\sin480^\\circ=\\frac{\\sqrt3}{2}\\;\\checkmark",
          "explanation": "The final value checks out, so all four solutions are present and none is spurious.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=30^\\circ,\\;60^\\circ,\\;210^\\circ,\\;240^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving-equations",
      "double-angle-interval"
    ],
    "questionText": "Solve $\\cos 2x=\\dfrac12$ for $0^\\circ\\leq x\\leq360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for the doubled angle",
          "workingLatex": "u=2x",
          "explanation": "The angle inside the cosine is $2x$, so letting $u=2x$ converts the equation into the standard form $\\cos u=k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Widen the interval for u",
          "workingLatex": "0^\\circ\\leq x\\leq360^\\circ\\;\\Rightarrow\\;0^\\circ\\leq u\\leq720^\\circ",
          "explanation": "As $x$ runs to $360^\\circ$, $u=2x$ runs to $720^\\circ$. Stretching the interval is what lets us catch every solution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u",
          "workingLatex": "\\cos u=\\frac12",
          "explanation": "The equation is now a plain cosine equation to be solved across the widened interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\!\\left(\\frac12\\right)=60^\\circ",
          "explanation": "The positive value $\\tfrac12$ gives an acute reference angle of $60^\\circ$, the base for all the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solutions in the first cycle",
          "workingLatex": "u=60^\\circ,\\quad u=360^\\circ-60^\\circ=300^\\circ",
          "explanation": "Cosine is positive in the first and fourth quadrants, so the first turn gives $60^\\circ$ and $300^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solutions in the second cycle",
          "workingLatex": "u=60^\\circ+360^\\circ=420^\\circ,\\quad u=300^\\circ+360^\\circ=660^\\circ",
          "explanation": "Adding a full turn to each first-cycle solution reaches into the part of the interval between $360^\\circ$ and $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List all valid u",
          "workingLatex": "u\\in\\{60^\\circ,300^\\circ,420^\\circ,660^\\circ\\}",
          "explanation": "A further $360^\\circ$ would exceed $720^\\circ$, so these four are the complete set for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reverse the substitution",
          "workingLatex": "x=\\frac{u}{2}",
          "explanation": "Halving each $u$ undoes the substitution and returns us to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the four x values",
          "workingLatex": "x=30^\\circ,\\;150^\\circ,\\;210^\\circ,\\;330^\\circ",
          "explanation": "Dividing each $u$ by two produces four solutions, all lying inside $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the first solution",
          "workingLatex": "\\cos(2\\times30^\\circ)=\\cos60^\\circ=\\tfrac12\\;\\checkmark",
          "explanation": "Substituting back confirms the equation is satisfied, so the solution is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the second solution",
          "workingLatex": "\\cos(2\\times150^\\circ)=\\cos300^\\circ=\\tfrac12\\;\\checkmark",
          "explanation": "The fourth-quadrant angle $300^\\circ$ also gives $\\tfrac12$, confirming this solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the third solution",
          "workingLatex": "\\cos(2\\times210^\\circ)=\\cos420^\\circ=\\cos60^\\circ=\\tfrac12\\;\\checkmark",
          "explanation": "Since $420^\\circ$ is $60^\\circ$ past a full turn, its cosine equals $\\tfrac12$, confirming this second-cycle solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the fourth solution",
          "workingLatex": "\\cos(2\\times330^\\circ)=\\cos660^\\circ=\\cos300^\\circ=\\tfrac12\\;\\checkmark",
          "explanation": "The last value checks out, so all four solutions are accounted for.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=30^\\circ,\\;150^\\circ,\\;210^\\circ,\\;330^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving-equations",
      "phase-shift"
    ],
    "questionText": "Solve $\\sin(x+30^\\circ)=\\dfrac12$ for $0^\\circ\\leq x\\leq360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for the shifted angle",
          "workingLatex": "u=x+30^\\circ",
          "explanation": "The angle inside the sine is $x+30^\\circ$, so letting $u=x+30^\\circ$ turns the problem into the familiar $\\sin u=k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Shift the interval for u",
          "workingLatex": "0^\\circ\\leq x\\leq360^\\circ\\;\\Rightarrow\\;30^\\circ\\leq u\\leq390^\\circ",
          "explanation": "Adding $30^\\circ$ to each end shifts the whole interval along. Because the top now reaches $390^\\circ$, a solution just past $360^\\circ$ can still count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u",
          "workingLatex": "\\sin u=\\frac12",
          "explanation": "The equation is now a standard sine equation, to be solved over the shifted interval $[30^\\circ,390^\\circ]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\sin^{-1}\\!\\left(\\frac12\\right)=30^\\circ",
          "explanation": "The positive value $\\tfrac12$ gives a reference angle of $30^\\circ$, the base for the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solutions from the first cycle",
          "workingLatex": "u=30^\\circ,\\quad u=180^\\circ-30^\\circ=150^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, giving $30^\\circ$ and $150^\\circ$. Both lie in the interval, so both are kept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Look for a solution near the top of the interval",
          "workingLatex": "u=30^\\circ+360^\\circ=390^\\circ\\;\\in[30^\\circ,390^\\circ]",
          "explanation": "Adding a full turn to $30^\\circ$ lands exactly on $390^\\circ$, which is the upper boundary and therefore valid. The next candidate $510^\\circ$ is outside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List all valid u",
          "workingLatex": "u\\in\\{30^\\circ,150^\\circ,390^\\circ\\}",
          "explanation": "These three values are every solution of $\\sin u=\\tfrac12$ that lies within the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reverse the substitution",
          "workingLatex": "x=u-30^\\circ",
          "explanation": "Subtracting $30^\\circ$ from each $u$ undoes the shift and returns us to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the x values",
          "workingLatex": "x=0^\\circ,\\;120^\\circ,\\;360^\\circ",
          "explanation": "The three $u$ values map to $x=0^\\circ$, $120^\\circ$ and $360^\\circ$, all lying in the closed interval $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the endpoints both count",
          "workingLatex": "x=0^\\circ\\text{ and }x=360^\\circ\\text{ both included}",
          "explanation": "Since the interval is closed, the boundary values are allowed. Shifting the interval is what revealed the solution at $x=360^\\circ$, which is easy to miss.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the boundary solutions",
          "workingLatex": "\\sin(0^\\circ+30^\\circ)=\\sin30^\\circ=\\tfrac12\\;\\checkmark,\\quad \\sin(360^\\circ+30^\\circ)=\\sin30^\\circ=\\tfrac12\\;\\checkmark",
          "explanation": "Both endpoints reproduce the equation exactly, confirming they are genuine solutions.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the middle solution",
          "workingLatex": "\\sin(120^\\circ+30^\\circ)=\\sin150^\\circ=\\tfrac12\\;\\checkmark",
          "explanation": "The interior solution also satisfies the equation, so all three are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the full solution set",
          "workingLatex": "x\\in\\{0^\\circ,120^\\circ,360^\\circ\\}",
          "explanation": "Collecting the checked values gives the complete answer over the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=0^\\circ,\\;120^\\circ,\\;360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving-equations",
      "phase-shift"
    ],
    "questionText": "Solve $\\cos(x-45^\\circ)=\\dfrac{\\sqrt2}{2}$ for $0^\\circ\\leq x\\leq360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for the shifted angle",
          "workingLatex": "u=x-45^\\circ",
          "explanation": "The angle inside the cosine is $x-45^\\circ$, so letting $u=x-45^\\circ$ reduces the problem to the standard $\\cos u=k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Shift the interval for u",
          "workingLatex": "0^\\circ\\leq x\\leq360^\\circ\\;\\Rightarrow\\;-45^\\circ\\leq u\\leq315^\\circ",
          "explanation": "Subtracting $45^\\circ$ from each end slides the interval left, so $u$ now starts at a negative angle. That negative end is where an easily-missed solution hides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u",
          "workingLatex": "\\cos u=\\frac{\\sqrt2}{2}",
          "explanation": "The value $\\tfrac{\\sqrt2}{2}$ is the same as $\\tfrac{1}{\\sqrt2}$, a standard exact cosine. We solve across the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\!\\left(\\frac{\\sqrt2}{2}\\right)=45^\\circ",
          "explanation": "The positive value gives a reference angle of $45^\\circ$, the base for every solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the general solutions",
          "workingLatex": "u=45^\\circ\\text{ or }u=-45^\\circ\\;(\\text{plus multiples of }360^\\circ)",
          "explanation": "Cosine is even and positive in the first and fourth quadrants, so the base solutions are $+45^\\circ$ and $-45^\\circ$; whole turns can be added to either.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Select the solutions inside the interval",
          "workingLatex": "u=-45^\\circ,\\;45^\\circ,\\;-45^\\circ+360^\\circ=315^\\circ",
          "explanation": "Within $[-45^\\circ,315^\\circ]$ we keep $-45^\\circ$ and $45^\\circ$, and adding a turn to $-45^\\circ$ gives $315^\\circ$, the upper boundary. Anything beyond leaves the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List all valid u",
          "workingLatex": "u\\in\\{-45^\\circ,45^\\circ,315^\\circ\\}",
          "explanation": "These three values are every solution of $\\cos u=\\tfrac{\\sqrt2}{2}$ inside the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reverse the substitution",
          "workingLatex": "x=u+45^\\circ",
          "explanation": "Adding $45^\\circ$ back to each $u$ undoes the shift and returns us to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the x values",
          "workingLatex": "x=0^\\circ,\\;90^\\circ,\\;360^\\circ",
          "explanation": "The three $u$ values map to $x=0^\\circ$, $90^\\circ$ and $360^\\circ$, all within the closed interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the endpoints both count",
          "workingLatex": "x=0^\\circ\\text{ and }x=360^\\circ\\text{ both included}",
          "explanation": "The closed interval allows the boundary values; shifting the interval left is what exposed the solution at $x=360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the boundary solutions",
          "workingLatex": "\\cos(0^\\circ-45^\\circ)=\\cos45^\\circ=\\tfrac{\\sqrt2}{2}\\;\\checkmark,\\quad \\cos(360^\\circ-45^\\circ)=\\cos315^\\circ=\\tfrac{\\sqrt2}{2}\\;\\checkmark",
          "explanation": "Both endpoints reproduce the equation, using the fact that $\\cos(-45^\\circ)=\\cos45^\\circ$, so both are genuine.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the middle solution",
          "workingLatex": "\\cos(90^\\circ-45^\\circ)=\\cos45^\\circ=\\tfrac{\\sqrt2}{2}\\;\\checkmark",
          "explanation": "The interior solution also satisfies the equation, confirming all three answers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the full solution set",
          "workingLatex": "x\\in\\{0^\\circ,90^\\circ,360^\\circ\\}",
          "explanation": "Collecting the checked values gives the complete answer over the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=0^\\circ,\\;90^\\circ,\\;360^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving-equations",
      "tangent-period"
    ],
    "questionText": "Solve $\\tan 2x=1$ for $0^\\circ\\leq x\\leq360^\\circ$, giving all solutions in degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for the doubled angle",
          "workingLatex": "u=2x",
          "explanation": "The angle inside the tangent is $2x$, so letting $u=2x$ gives the standard equation $\\tan u=1$ to work with.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Widen the interval for u",
          "workingLatex": "0^\\circ\\leq x\\leq360^\\circ\\;\\Rightarrow\\;0^\\circ\\leq u\\leq720^\\circ",
          "explanation": "Doubling $x$ doubles the interval, so $u$ runs all the way to $720^\\circ$. This wide range is where the full set of solutions appears.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the equation in u",
          "workingLatex": "\\tan u=1",
          "explanation": "We now solve a plain tangent equation across $[0^\\circ,720^\\circ]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the base angle and recall the period",
          "workingLatex": "\\tan^{-1}(1)=45^\\circ,\\quad \\text{period of }\\tan=180^\\circ",
          "explanation": "The base solution is $45^\\circ$. Unlike sine and cosine, tangent repeats every $180^\\circ$, so we generate further solutions by adding $180^\\circ$ each time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Generate solutions by adding the period",
          "workingLatex": "u=45^\\circ,\\;225^\\circ,\\;405^\\circ,\\;585^\\circ",
          "explanation": "Starting at $45^\\circ$ and repeatedly adding $180^\\circ$ produces successive solutions while they stay within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Stop once the interval is exceeded",
          "workingLatex": "585^\\circ+180^\\circ=765^\\circ>720^\\circ\\;\\Rightarrow\\;\\text{stop}",
          "explanation": "The next candidate leaves the interval, so exactly four values of $u$ qualify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List all valid u",
          "workingLatex": "u\\in\\{45^\\circ,225^\\circ,405^\\circ,585^\\circ\\}",
          "explanation": "These four values are every solution of $\\tan u=1$ inside $[0^\\circ,720^\\circ]$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reverse the substitution",
          "workingLatex": "x=\\frac{u}{2}",
          "explanation": "Halving each $u$ undoes $u=2x$ and returns us to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the four x values",
          "workingLatex": "x=22.5^\\circ,\\;112.5^\\circ,\\;202.5^\\circ,\\;292.5^\\circ",
          "explanation": "Dividing each $u$ by two gives four solutions, all inside $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the first solution",
          "workingLatex": "\\tan(2\\times22.5^\\circ)=\\tan45^\\circ=1\\;\\checkmark",
          "explanation": "Substituting back reproduces the equation, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the second solution",
          "workingLatex": "\\tan(2\\times112.5^\\circ)=\\tan225^\\circ=1\\;\\checkmark",
          "explanation": "Because $225^\\circ$ is $180^\\circ$ past $45^\\circ$, the tangent is again $1$, confirming this solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the third solution",
          "workingLatex": "\\tan(2\\times202.5^\\circ)=\\tan405^\\circ=\\tan45^\\circ=1\\;\\checkmark",
          "explanation": "Reducing $405^\\circ$ by a full turn returns $45^\\circ$, so this solution checks out.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the fourth solution",
          "workingLatex": "\\tan(2\\times292.5^\\circ)=\\tan585^\\circ=\\tan225^\\circ=1\\;\\checkmark",
          "explanation": "The final value satisfies the equation too, so all four solutions are correct and complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=22.5^\\circ,\\;112.5^\\circ,\\;202.5^\\circ,\\;292.5^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "finding-equation",
      "phase-shift"
    ],
    "questionText": "A sinusoidal curve has equation $y=a\\sin\\!\\big(b(x-d)\\big)+c$, where $a>0$, $b>0$ and $0^\\circ\\leq d<180^\\circ$. The curve has a maximum value of $5$ and a minimum value of $1$, its period is $180^\\circ$, and its first maximum for $x>0$ occurs at $x=55^\\circ$. Find the values of $a$, $b$, $c$ and $d$, and hence state the equation of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what each constant controls",
          "workingLatex": "y=a\\sin\\!\\big(b(x-d)\\big)+c",
          "explanation": "In this form $a$ is the amplitude, $c$ is the midline, $b$ sets the period through $\\tfrac{360^\\circ}{b}$, and $d$ is the horizontal shift. Reading them off in turn gives the whole equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the amplitude",
          "workingLatex": "a=\\frac{\\text{max}-\\text{min}}{2}=\\frac{5-1}{2}=2",
          "explanation": "The amplitude is half the vertical gap between the top and bottom of the wave. Here that gap is $5-1=4$, so $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the midline",
          "workingLatex": "c=\\frac{\\text{max}+\\text{min}}{2}=\\frac{5+1}{2}=3",
          "explanation": "The midline sits halfway between the maximum and minimum, so averaging them gives $c=3$. The curve oscillates about $y=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find b from the period",
          "workingLatex": "\\text{period}=\\frac{360^\\circ}{b}=180^\\circ\\;\\Rightarrow\\;b=2",
          "explanation": "The period tells us how compressed the wave is. Setting $\\tfrac{360^\\circ}{b}=180^\\circ$ and solving gives $b=2$, meaning the curve completes a full cycle twice as fast as $\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the position of a maximum",
          "workingLatex": "\\sin(\\theta)\\text{ is greatest when }\\theta=90^\\circ",
          "explanation": "A sine curve peaks when the quantity inside it equals $90^\\circ$. We can use this to pin down the shift $d$ from the known maximum position.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the argument equal to 90 at the maximum",
          "workingLatex": "b(x-d)=90^\\circ\\;\\Rightarrow\\;2(55^\\circ-d)=90^\\circ",
          "explanation": "The first maximum is at $x=55^\\circ$, so substituting this $x$ and $b=2$ into the peak condition gives an equation in $d$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for d",
          "workingLatex": "55^\\circ-d=45^\\circ\\;\\Rightarrow\\;d=10^\\circ",
          "explanation": "Dividing by $2$ and rearranging gives $d=10^\\circ$, which lies in the required range $0^\\circ\\leq d<180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Assemble the equation",
          "workingLatex": "y=2\\sin\\!\\big(2(x-10^\\circ)\\big)+3",
          "explanation": "Putting the four constants back into the template gives the full equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the maximum value and its position",
          "workingLatex": "x=55^\\circ:\\;2\\sin\\!\\big(2(45^\\circ)\\big)+3=2\\sin90^\\circ+3=5",
          "explanation": "At $x=55^\\circ$ the inside becomes $90^\\circ$, so the sine equals $1$ and $y=5$, matching the stated maximum in exactly the right place.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the minimum value",
          "workingLatex": "x=145^\\circ:\\;2\\sin\\!\\big(2(135^\\circ)\\big)+3=2\\sin270^\\circ+3=1",
          "explanation": "Half a period later the inside reaches $270^\\circ$, where sine is $-1$, giving $y=1$, the stated minimum. The extreme values are confirmed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the period",
          "workingLatex": "\\frac{360^\\circ}{b}=\\frac{360^\\circ}{2}=180^\\circ\\;\\checkmark",
          "explanation": "The period computed from $b=2$ matches the required $180^\\circ$, so the horizontal scaling is right.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm it is the first positive maximum",
          "workingLatex": "\\text{maxima at }x=55^\\circ,\\;55^\\circ+180^\\circ=235^\\circ,\\dots",
          "explanation": "Maxima repeat every period; the previous one would be at $55^\\circ-180^\\circ=-125^\\circ$, which is negative, so $x=55^\\circ$ really is the first maximum for $x>0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final equation",
          "workingLatex": "a=2,\\;b=2,\\;c=3,\\;d=10^\\circ",
          "explanation": "All four constants are found and every stated condition is satisfied, giving the required equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=2,\\;b=2,\\;c=3,\\;d=10^\\circ$, so $y=2\\sin\\!\\big(2(x-10^\\circ)\\big)+3$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "transformations",
      "phase-shift"
    ],
    "questionText": "Describe fully a sequence of three transformations that maps the graph of $y=\\sin x$ onto the graph of $y=2\\sin(x-30^\\circ)+1$. State the transformations in a correct order and justify why that order works.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y=\\sin x\\;\\longrightarrow\\;y=2\\sin(x-30^\\circ)+1",
          "explanation": "Lining up the equations shows three differences: the $x$ has become $x-30^\\circ$ inside, there is a factor of $2$ outside, and there is a $+1$ at the end. Each difference corresponds to one transformation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the horizontal change",
          "workingLatex": "\\sin x\\;\\to\\;\\sin(x-30^\\circ)",
          "explanation": "Replacing $x$ by $x-30^\\circ$ moves the graph horizontally. Subtracting inside the function shifts the curve to the right, not the left, which is the classic point to be careful about.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State transformation 1",
          "workingLatex": "\\text{Translation by }\\binom{30}{0}\\;(\\text{right }30^\\circ)",
          "explanation": "The first transformation is a translation $30^\\circ$ to the right, giving the intermediate curve $y=\\sin(x-30^\\circ)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the vertical stretch",
          "workingLatex": "\\sin(x-30^\\circ)\\;\\to\\;2\\sin(x-30^\\circ)",
          "explanation": "Multiplying the whole function by $2$ scales every $y$-value away from the $x$-axis, doubling the height of the wave.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State transformation 2",
          "workingLatex": "\\text{Vertical stretch, scale factor }2",
          "explanation": "The second transformation is a vertical stretch of scale factor $2$, producing $y=2\\sin(x-30^\\circ)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the vertical translation",
          "workingLatex": "2\\sin(x-30^\\circ)\\;\\to\\;2\\sin(x-30^\\circ)+1",
          "explanation": "Adding $1$ to the whole expression lifts every point up by one unit, raising the midline from $y=0$ to $y=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State transformation 3",
          "workingLatex": "\\text{Translation by }\\binom{0}{1}\\;(\\text{up }1)",
          "explanation": "The third transformation is a translation of $1$ unit upward, giving the final curve $y=2\\sin(x-30^\\circ)+1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why the order of the vertical steps matters",
          "workingLatex": "\\text{stretch before vertical shift}",
          "explanation": "The vertical stretch must be applied before the upward translation. The constant $+1$ sits outside the factor of $2$, so it must be added only after the stretching is done.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Show the wrong order fails",
          "workingLatex": "2\\big(\\sin(x-30^\\circ)+1\\big)=2\\sin(x-30^\\circ)+2\\neq2\\sin(x-30^\\circ)+1",
          "explanation": "Shifting up first and then stretching would also double the $+1$ into $+2$, giving the wrong curve. This confirms the stretch has to come before the vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the horizontal step is independent",
          "workingLatex": "\\text{horizontal shift commutes with vertical steps}",
          "explanation": "The right-shift acts only on the input $x$, so it can be carried out at any point relative to the two vertical transformations without changing the result; placing it first keeps the working tidy.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Track a key point through the chain",
          "workingLatex": "(90^\\circ,1)\\to(120^\\circ,1)\\to(120^\\circ,2)\\to(120^\\circ,3)",
          "explanation": "Following the peak of $\\sin x$ at $(90^\\circ,1)$ through the three steps, right $30^\\circ$, then stretch, then up $1$, lands it at $(120^\\circ,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the tracked point on the final curve",
          "workingLatex": "x=120^\\circ:\\;2\\sin(120^\\circ-30^\\circ)+1=2\\sin90^\\circ+1=3\\;\\checkmark",
          "explanation": "Substituting $x=120^\\circ$ into the target equation gives $y=3$, exactly the point predicted by the chain, confirming the sequence is correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the ordered sequence",
          "workingLatex": "\\text{right }30^\\circ\\;\\to\\;\\text{stretch }\\times2\\;\\to\\;\\text{up }1",
          "explanation": "The complete valid sequence is a translation right by $30^\\circ$, then a vertical stretch of scale factor $2$, then a translation up by $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "1) Translation $\\binom{30}{0}$ (right $30^\\circ$); 2) vertical stretch scale factor $2$; 3) translation $\\binom{0}{1}$ (up $1$). The stretch must precede the upward shift because the $+1$ lies outside the factor of $2$; the horizontal shift may be placed anywhere in the order."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving-equations",
      "number-of-solutions"
    ],
    "questionText": "Determine how many solutions the equation $\\sin 3x=0.4$ has for $0^\\circ\\leq x\\leq360^\\circ$, explaining your reasoning from the period, and find all of them to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute for the tripled angle",
          "workingLatex": "u=3x",
          "explanation": "The angle inside the sine is $3x$, so letting $u=3x$ turns the problem into the standard $\\sin u=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Widen the interval for u",
          "workingLatex": "0^\\circ\\leq x\\leq360^\\circ\\;\\Rightarrow\\;0^\\circ\\leq u\\leq1080^\\circ",
          "explanation": "Tripling $x$ triples the interval, so $u$ sweeps all the way to $1080^\\circ$. Reasoning about this wide interval is the key to counting the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the equation in u",
          "workingLatex": "\\sin u=0.4",
          "explanation": "We now count and solve $\\sin u=0.4$ over $[0^\\circ,1080^\\circ]$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reason about the number of solutions",
          "workingLatex": "1080^\\circ=3\\times360^\\circ",
          "explanation": "The interval for $u$ is exactly three full periods of the sine curve. Because the line $y=0.4$ lies strictly between $-1$ and $1$, it cuts the curve twice in every period.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude the count",
          "workingLatex": "3\\text{ periods}\\times2=6\\text{ solutions}",
          "explanation": "Two crossings per period across three periods gives six values of $u$, and since $u=3x$ is a one-to-one map back to $x$, there are six values of $x$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the reference angle",
          "workingLatex": "\\sin^{-1}(0.4)=23.578^\\circ",
          "explanation": "The reference angle comes from the positive value $0.4$. Keeping extra decimals now avoids rounding drift before the final answers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solutions in the first period",
          "workingLatex": "u=23.578^\\circ,\\quad u=180^\\circ-23.578^\\circ=156.422^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, so the first period contributes these two angles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solutions in the second period",
          "workingLatex": "u=383.578^\\circ,\\quad u=516.422^\\circ",
          "explanation": "Adding $360^\\circ$ to each first-period solution gives the pair in the second period.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solutions in the third period",
          "workingLatex": "u=743.578^\\circ,\\quad u=876.422^\\circ",
          "explanation": "Adding a further $360^\\circ$ gives the pair in the third period; the next would exceed $1080^\\circ$, so the list is complete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect all six values of u",
          "workingLatex": "u\\in\\{23.578^\\circ,156.422^\\circ,383.578^\\circ,516.422^\\circ,743.578^\\circ,876.422^\\circ\\}",
          "explanation": "These six angles are every solution of $\\sin u=0.4$ inside the widened interval, matching the count reasoned earlier.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reverse the substitution",
          "workingLatex": "x=\\frac{u}{3}",
          "explanation": "Dividing each $u$ by three undoes $u=3x$ and returns us to $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the six x values",
          "workingLatex": "x=7.9^\\circ,\\;52.1^\\circ,\\;127.9^\\circ,\\;172.1^\\circ,\\;247.9^\\circ,\\;292.1^\\circ",
          "explanation": "Dividing each angle by three and rounding to one decimal place gives the six solutions, all inside $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a first-period solution",
          "workingLatex": "\\sin(3\\times7.9^\\circ)=\\sin23.7^\\circ\\approx0.40\\;\\checkmark",
          "explanation": "Substituting the smallest solution back reproduces $0.4$, confirming the reversal of the substitution was done correctly.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify a later solution",
          "workingLatex": "\\sin(3\\times172.1^\\circ)=\\sin516.3^\\circ\\approx0.40\\;\\checkmark",
          "explanation": "Checking a solution from a later period confirms the pattern holds throughout the interval.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the count and the solutions",
          "workingLatex": "6\\text{ solutions, as listed}",
          "explanation": "The reasoning and the explicit solving agree: there are exactly six solutions, given to one decimal place.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are $6$ solutions: $x=7.9^\\circ,\\;52.1^\\circ,\\;127.9^\\circ,\\;172.1^\\circ,\\;247.9^\\circ,\\;292.1^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving-equations",
      "intersections"
    ],
    "questionText": "(a) Solve $2\\cos x+1=0$ for $0^\\circ\\leq x\\leq360^\\circ$. (b) Determine how many times the graph of $y=\\tan x$ meets the line $y=1$ for $0^\\circ\\leq x\\leq360^\\circ$, and give the $x$-coordinates of the intersection points. Combine your results into a single clear statement.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Part (a): rearrange the equation",
          "workingLatex": "2\\cos x+1=0\\;\\Rightarrow\\;\\cos x=-\\tfrac12",
          "explanation": "Isolating $\\cos x$ turns part (a) into a standard cosine equation. The negative value shows the solutions lie away from the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\!\\left(\\tfrac12\\right)=60^\\circ",
          "explanation": "The reference angle is taken from the positive value $\\tfrac12$, giving $60^\\circ$ as the base for the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the correct quadrants",
          "workingLatex": "\\cos x<0\\text{ in quadrants }2\\text{ and }3",
          "explanation": "Cosine is negative in the second and third quadrants, so both solutions are found by measuring the reference angle from $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x in part (a)",
          "workingLatex": "x=180^\\circ-60^\\circ=120^\\circ,\\quad x=180^\\circ+60^\\circ=240^\\circ",
          "explanation": "Placing the $60^\\circ$ reference angle into the second and third quadrants gives the two solutions inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the part (a) solutions",
          "workingLatex": "2\\cos120^\\circ+1=0\\;\\checkmark,\\quad 2\\cos240^\\circ+1=0\\;\\checkmark",
          "explanation": "Both values return $\\cos x=-\\tfrac12$, so substituting them back gives zero, confirming they are correct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): set up the intersection condition",
          "workingLatex": "\\tan x=1",
          "explanation": "The graph $y=\\tan x$ meets the line $y=1$ exactly where $\\tan x=1$, so counting intersections means solving this equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the base angle",
          "workingLatex": "\\tan^{-1}(1)=45^\\circ",
          "explanation": "The base solution of $\\tan x=1$ is $45^\\circ$, the acute angle whose tangent is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the period of tangent",
          "workingLatex": "\\text{period of }\\tan=180^\\circ",
          "explanation": "Tangent repeats every $180^\\circ$, so further solutions are obtained by adding $180^\\circ$ to the base angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the solutions in the interval",
          "workingLatex": "x=45^\\circ,\\quad 45^\\circ+180^\\circ=225^\\circ",
          "explanation": "Adding one period to $45^\\circ$ gives $225^\\circ$; the next value $405^\\circ$ lies outside $[0^\\circ,360^\\circ]$, so there are just two.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Count the intersections",
          "workingLatex": "\\text{number of intersections}=2",
          "explanation": "Two solutions in the interval mean the curve and the line cross exactly twice.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the part (b) solutions",
          "workingLatex": "\\tan45^\\circ=1\\;\\checkmark,\\quad \\tan225^\\circ=1\\;\\checkmark",
          "explanation": "Both angles give a tangent of $1$, since $225^\\circ$ is one period past $45^\\circ$, confirming the two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Bring both parts together",
          "workingLatex": "(a)\\;x=120^\\circ,240^\\circ;\\qquad(b)\\;x=45^\\circ,225^\\circ",
          "explanation": "Collecting the results of both parts prepares a single combined statement of the answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the combined conclusion",
          "workingLatex": "\\text{2 solutions in (a); 2 intersections in (b)}",
          "explanation": "Each part yields two values in the interval: the equation in part (a) has two solutions, and the graph meets the line at two points in part (b).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x=120^\\circ,\\;240^\\circ$. (b) The graph meets $y=1$ exactly $2$ times, at $x=45^\\circ$ and $x=225^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "modelling",
      "tides"
    ],
    "questionText": "The depth of water $h$ metres in a harbour is modelled by $h=a\\cos(bt)+c$, where $t$ is the number of hours after midnight and the angle is measured in degrees. High tide of $8.4\\,\\text{m}$ occurs at midnight ($t=0$) and the next low tide of $1.6\\,\\text{m}$ occurs $6$ hours later, with the tidal cycle repeating every $12$ hours. Find the values of $a$, $b$ and $c$, and hence find the depth of water at $04\\!:\\!00$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the three constants needed",
          "workingLatex": "h = a\\cos(bt) + c",
          "explanation": "A cosine model needs an amplitude $a$ (how far the depth swings from the middle), a midline $c$ (the average depth) and a frequency constant $b$ (which fixes how quickly the tide repeats). Finding all three fully determines the model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Amplitude is half the range",
          "workingLatex": "a = \\frac{\\text{max} - \\text{min}}{2} = \\frac{8.4 - 1.6}{2}",
          "explanation": "The tide rises to a maximum and falls to a minimum symmetrically about the midline, so the amplitude is exactly half the distance between high and low water.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the amplitude",
          "workingLatex": "a = \\frac{6.8}{2} = 3.4",
          "explanation": "The depth swings $3.4\\,\\text{m}$ either side of the average level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Midline is the average of the extremes",
          "workingLatex": "c = \\frac{\\text{max} + \\text{min}}{2} = \\frac{8.4 + 1.6}{2}",
          "explanation": "The midline sits exactly halfway between high and low tide, which is the mean of the two extreme depths.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the midline",
          "workingLatex": "c = \\frac{10}{2} = 5",
          "explanation": "The water oscillates about an average depth of $5\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the period to find b",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b} = 12 \\;\\Rightarrow\\; b = \\frac{360}{12}",
          "explanation": "One full tidal cycle takes $12$ hours, and a cosine completes one cycle when its angle increases by $360^\\circ$. Setting the period equal to $12$ lets us solve for $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate b",
          "workingLatex": "b = 30",
          "explanation": "The angle inside the cosine grows by $30^\\circ$ for every hour that passes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Justify the cosine form",
          "workingLatex": "h = 3.4\\cos(30t) + 5",
          "explanation": "High tide (the maximum) happens at $t=0$, and $\\cos$ starts at its maximum value of $1$, so a plain cosine with a positive amplitude fits without any phase shift.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify high tide at t = 0",
          "workingLatex": "h(0) = 3.4\\cos(0^\\circ) + 5 = 3.4(1) + 5 = 8.4",
          "explanation": "Checking $t=0$ reproduces the stated high tide of $8.4\\,\\text{m}$, confirming the constants.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify low tide at t = 6",
          "workingLatex": "h(6) = 3.4\\cos(180^\\circ) + 5 = 3.4(-1) + 5 = 1.6",
          "explanation": "Half a period later the cosine reaches $-1$, giving the low tide of $1.6\\,\\text{m}$ exactly as required.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the required time",
          "workingLatex": "h(4) = 3.4\\cos(30 \\times 4) + 5",
          "explanation": "The time $04\\!:\\!00$ corresponds to $t=4$ hours after midnight, so substitute this into the model.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the angle",
          "workingLatex": "h(4) = 3.4\\cos(120^\\circ) + 5",
          "explanation": "Multiplying $30$ by $4$ gives an angle of $120^\\circ$ inside the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the cosine",
          "workingLatex": "\\cos(120^\\circ) = -\\tfrac{1}{2}",
          "explanation": "$120^\\circ$ lies in the second quadrant where cosine is negative, and its exact value is $-\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the depth",
          "workingLatex": "h(4) = 3.4(-0.5) + 5 = -1.7 + 5 = 3.3",
          "explanation": "The depth at $04\\!:\\!00$ is $3.3\\,\\text{m}$, sensibly between the low tide of $1.6\\,\\text{m}$ and the average of $5\\,\\text{m}$ as the tide falls.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=3.4$, $b=30$, $c=5$, giving $h=3.4\\cos(30t)+5$. At $04\\!:\\!00$ the depth is $3.3\\,\\text{m}$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "modelling",
      "tides"
    ],
    "questionText": "The height of the sea $h$ metres against a harbour wall is modelled by $h=4\\sin(30t)+6$, where $t$ is the number of hours after midnight (angle in degrees) and $0\\leq t\\leq 24$. A ferry can only dock when the height is at least $8\\,\\text{m}$. Find all the times in the $24$-hour period at which the height is exactly $8\\,\\text{m}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation to solve",
          "workingLatex": "4\\sin(30t) + 6 = 8",
          "explanation": "We want the moments when the modelled height equals the docking height of $8\\,\\text{m}$, so set the model equal to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract the midline",
          "workingLatex": "4\\sin(30t) = 2",
          "explanation": "Removing the constant $6$ isolates the oscillating part of the model, leaving just the sine term to deal with.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the amplitude",
          "workingLatex": "\\sin(30t) = \\tfrac{1}{2}",
          "explanation": "Dividing by $4$ leaves a standard sine equation whose solutions we can read from known exact values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to widen the range",
          "workingLatex": "u = 30t, \\qquad 0 \\leq t \\leq 24 \\;\\Rightarrow\\; 0^\\circ \\leq u \\leq 720^\\circ",
          "explanation": "Letting $u=30t$ turns the problem into a simple $\\sin u = \\tfrac12$. Because $t$ runs over $24$ hours, $u$ ranges over two full turns, so we must search up to $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the principal value",
          "workingLatex": "u = \\sin^{-1}\\!\\left(\\tfrac{1}{2}\\right) = 30^\\circ",
          "explanation": "The first-quadrant angle whose sine is $\\tfrac12$ is $30^\\circ$; this is the anchor for all other solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second solution in one turn",
          "workingLatex": "u = 180^\\circ - 30^\\circ = 150^\\circ",
          "explanation": "Sine is also positive in the second quadrant, and $\\sin(180^\\circ-\\theta)=\\sin\\theta$, giving a second solution at $150^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add a full turn for the next cycle",
          "workingLatex": "u = 30^\\circ + 360^\\circ = 390^\\circ, \\quad u = 150^\\circ + 360^\\circ = 510^\\circ",
          "explanation": "Sine repeats every $360^\\circ$, so adding a full revolution to each solution produces the repeats in the second tidal cycle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Discard values beyond the range",
          "workingLatex": "u \\in \\{30^\\circ, 150^\\circ, 390^\\circ, 510^\\circ\\}",
          "explanation": "The next candidate $750^\\circ$ exceeds $720^\\circ$, so only these four values of $u$ lie within the allowed range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Convert back to time",
          "workingLatex": "t = \\frac{u}{30} \\;\\Rightarrow\\; t = 1,\\, 5,\\, 13,\\, 17",
          "explanation": "Dividing each $u$ by $30$ undoes the substitution and gives the actual times in hours after midnight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the first solution",
          "workingLatex": "h(1) = 4\\sin(30^\\circ) + 6 = 4(0.5) + 6 = 8",
          "explanation": "Substituting $t=1$ returns exactly $8\\,\\text{m}$, confirming the first crossing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify a later solution",
          "workingLatex": "h(17) = 4\\sin(510^\\circ) + 6 = 4(0.5) + 6 = 8",
          "explanation": "Since $\\sin(510^\\circ)=\\sin(150^\\circ)=0.5$, the height at $t=17$ is also $8\\,\\text{m}$, confirming the second-cycle solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret in context",
          "workingLatex": "01\\!:\\!00,\\; 05\\!:\\!00,\\; 13\\!:\\!00,\\; 17\\!:\\!00",
          "explanation": "The height reaches $8\\,\\text{m}$ twice per $12$-hour tidal cycle: once as the tide rises and once as it falls, giving four times across the whole day.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the model limitation",
          "workingLatex": "\\text{real tides are not perfectly sinusoidal}",
          "explanation": "In reality tidal heights are affected by weather and the exact $12$-hour period is only approximate, so these times are model predictions rather than exact guarantees.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final times",
          "workingLatex": "t = 1,\\,5,\\,13,\\,17 \\text{ hours}",
          "explanation": "These four times are the complete set of solutions in the required $24$-hour interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "The height equals $8\\,\\text{m}$ at $t=1,\\,5,\\,13,\\,17$ hours, i.e. $01\\!:\\!00$, $05\\!:\\!00$, $13\\!:\\!00$ and $17\\!:\\!00$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "modelling",
      "ferris-wheel"
    ],
    "questionText": "A capsule on a Ferris wheel starts at its lowest point $2\\,\\text{m}$ above the ground and the wheel has diameter $40\\,\\text{m}$. The wheel turns steadily, completing one full revolution every $4$ minutes. The height $h$ metres of the capsule after $t$ minutes is modelled by $h=a-b\\cos(\\omega t)$ (angle in degrees). Find $a$, $b$ and $\\omega$, and hence find the height of the capsule after $1.5$ minutes, giving your answer to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the structure of the model",
          "workingLatex": "h = a - b\\cos(\\omega t)",
          "explanation": "In this form $a$ is the height of the centre of the wheel, $b$ is the radius, and the minus sign in front of the cosine makes the capsule start at the bottom when $t=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the radius",
          "workingLatex": "b = \\frac{\\text{diameter}}{2} = \\frac{40}{2} = 20",
          "explanation": "The capsule moves on a circle whose radius is half the diameter, so $b=20\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the centre height",
          "workingLatex": "a = \\text{lowest point} + \\text{radius} = 2 + 20 = 22",
          "explanation": "The centre of the wheel sits one radius above the lowest point, so it is $22\\,\\text{m}$ above the ground.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find omega from the period",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{\\omega} = 4 \\;\\Rightarrow\\; \\omega = \\frac{360}{4}",
          "explanation": "One revolution corresponds to the cosine advancing by $360^\\circ$, and this takes $4$ minutes, so dividing gives the angular rate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate omega",
          "workingLatex": "\\omega = 90",
          "explanation": "The angle inside the cosine increases by $90^\\circ$ each minute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the model",
          "workingLatex": "h = 22 - 20\\cos(90t)",
          "explanation": "Combining the three constants gives the complete height model for the capsule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the starting height",
          "workingLatex": "h(0) = 22 - 20\\cos(0^\\circ) = 22 - 20 = 2",
          "explanation": "At $t=0$ the cosine is $1$, giving the lowest point of $2\\,\\text{m}$ where boarding takes place, confirming the model.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the top of the wheel",
          "workingLatex": "h(2) = 22 - 20\\cos(180^\\circ) = 22 + 20 = 42",
          "explanation": "Half a revolution later the cosine is $-1$, giving the maximum height of $42\\,\\text{m}$, which equals the lowest point plus the diameter as expected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the required time",
          "workingLatex": "h(1.5) = 22 - 20\\cos(90 \\times 1.5)",
          "explanation": "To find the height after $1.5$ minutes we substitute $t=1.5$ into the model.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the angle",
          "workingLatex": "h(1.5) = 22 - 20\\cos(135^\\circ)",
          "explanation": "Multiplying $90$ by $1.5$ gives an angle of $135^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the cosine",
          "workingLatex": "\\cos(135^\\circ) = -\\frac{\\sqrt{2}}{2}",
          "explanation": "$135^\\circ$ is in the second quadrant where cosine is negative, and its exact value is $-\\tfrac{\\sqrt2}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the exact value",
          "workingLatex": "h(1.5) = 22 - 20\\left(-\\frac{\\sqrt{2}}{2}\\right) = 22 + 10\\sqrt{2}",
          "explanation": "The double negative turns the term positive, so the capsule is above the centre of the wheel by $10\\sqrt2\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate numerically",
          "workingLatex": "h(1.5) = 22 + 14.142\\ldots = 36.142\\ldots",
          "explanation": "Since $10\\sqrt2\\approx14.14$, the total height comes to about $36.14\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the value is sensible",
          "workingLatex": "2 \\leq 36.14 \\leq 42",
          "explanation": "The result lies between the lowest and highest points of the wheel and is above the centre, which matches the capsule being past the halfway point of its rise.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer to 2 d.p.",
          "workingLatex": "h(1.5) \\approx 36.14 \\text{ m}",
          "explanation": "Rounding to two decimal places gives the required height after $1.5$ minutes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=22$, $b=20$, $\\omega=90$, so $h=22-20\\cos(90t)$. After $1.5$ minutes the height is $22+10\\sqrt{2}\\approx 36.14\\,\\text{m}$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "modelling",
      "temperature"
    ],
    "questionText": "The temperature $T$ degrees Celsius in a town over one day is modelled by $T=15-8\\cos\\big(15(t-4)\\big)$, where $t$ is the number of hours after midnight (angle in degrees) and $0\\leq t\\leq 24$. Find the time and value of the maximum temperature, the time and value of the minimum temperature, and the temperature at $08\\!:\\!00$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and its parts",
          "workingLatex": "T = 15 - 8\\cos\\big(15(t-4)\\big), \\quad 0 \\leq t \\leq 24",
          "explanation": "The constant $15$ is the average temperature, the $8$ controls the swing, and the $\\cos$ term ranges between $-1$ and $1$ as the day progresses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the range of the cosine",
          "workingLatex": "-1 \\leq \\cos\\big(15(t-4)\\big) \\leq 1",
          "explanation": "Because a cosine can never leave $[-1,1]$, the extreme temperatures occur exactly when the cosine hits $-1$ or $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the maximum temperature",
          "workingLatex": "T_{\\max} = 15 - 8(-1) = 23",
          "explanation": "Because of the minus sign, $T$ is largest when the cosine is at its smallest value of $-1$, giving a maximum of $23^\\circ\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the time of the maximum",
          "workingLatex": "15(t-4) = 180^\\circ \\;\\Rightarrow\\; t - 4 = 12 \\;\\Rightarrow\\; t = 16",
          "explanation": "Cosine equals $-1$ when its angle is $180^\\circ$; solving for $t$ gives $16$, i.e. $16\\!:\\!00$, which sits within the day.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the maximum",
          "workingLatex": "T = 23^\\circ\\text{C at } 16\\!:\\!00",
          "explanation": "The warmest point of the day is in the late afternoon, which is physically reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the minimum temperature",
          "workingLatex": "T_{\\min} = 15 - 8(1) = 7",
          "explanation": "$T$ is smallest when the cosine is at its largest value of $1$, giving a minimum of $7^\\circ\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the time of the minimum",
          "workingLatex": "15(t-4) = 0^\\circ \\;\\Rightarrow\\; t = 4",
          "explanation": "Cosine equals $1$ when its angle is $0^\\circ$; this gives $t=4$, i.e. $04\\!:\\!00$. The next case $360^\\circ$ would give $t=28$, which is outside the day.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the minimum",
          "workingLatex": "T = 7^\\circ\\text{C at } 04\\!:\\!00",
          "explanation": "The coldest point is in the early morning before sunrise, again a sensible prediction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute for 08:00",
          "workingLatex": "T(8) = 15 - 8\\cos\\big(15(8-4)\\big)",
          "explanation": "To find the temperature at $08\\!:\\!00$ we substitute $t=8$ into the model.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the angle",
          "workingLatex": "T(8) = 15 - 8\\cos(15 \\times 4) = 15 - 8\\cos(60^\\circ)",
          "explanation": "Inside the bracket $8-4=4$, and multiplying by $15$ gives an angle of $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the cosine",
          "workingLatex": "\\cos(60^\\circ) = \\tfrac{1}{2}",
          "explanation": "This is a standard exact value used to finish the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the temperature",
          "workingLatex": "T(8) = 15 - 8(0.5) = 15 - 4 = 11",
          "explanation": "At $08\\!:\\!00$ the model gives $11^\\circ\\text{C}$, between the early-morning minimum and the afternoon maximum as the day warms up.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check the result",
          "workingLatex": "7 \\leq 11 \\leq 23",
          "explanation": "The value lies between the daily extremes and reflects a morning that is warming toward the afternoon peak.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the findings",
          "workingLatex": "\\text{max } 23^\\circ\\text{C at }16\\!:\\!00,\\; \\text{min } 7^\\circ\\text{C at }04\\!:\\!00,\\; T(8)=11^\\circ\\text{C}",
          "explanation": "Collecting the three results gives a full description of the day's temperature behaviour.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $23^\\circ\\text{C}$ at $16\\!:\\!00$; minimum $7^\\circ\\text{C}$ at $04\\!:\\!00$; temperature at $08\\!:\\!00$ is $11^\\circ\\text{C}$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "modelling",
      "inequalities"
    ],
    "questionText": "The depth of water $d$ metres at a jetty is modelled by $d=5+3\\sin(30t)$, where $t$ is the number of hours after $06\\!:\\!00$ (angle in degrees) and $0\\leq t\\leq 12$. Find the first time the depth is a maximum and its value, and find the interval of time during which the depth exceeds $6.5\\,\\text{m}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model and substitution",
          "workingLatex": "d = 5 + 3\\sin(30t), \\quad u = 30t,\\; 0^\\circ \\leq u \\leq 360^\\circ",
          "explanation": "Writing $u=30t$ turns the angle into a single variable; since $t$ runs from $0$ to $12$, $u$ covers exactly one full revolution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the maximum depth",
          "workingLatex": "d_{\\max} = 5 + 3(1) = 8",
          "explanation": "The depth is greatest when the sine reaches its top value of $1$, giving a maximum depth of $8\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the time of first maximum",
          "workingLatex": "\\sin(30t) = 1 \\;\\Rightarrow\\; 30t = 90^\\circ \\;\\Rightarrow\\; t = 3",
          "explanation": "Sine first equals $1$ at $90^\\circ$, so $30t=90$ gives $t=3$ hours, i.e. the first high water occurs at $09\\!:\\!00$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the threshold inequality",
          "workingLatex": "5 + 3\\sin(30t) > 6.5",
          "explanation": "The depth exceeds $6.5\\,\\text{m}$ when the model is greater than that value, so we solve this inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the midline",
          "workingLatex": "3\\sin(30t) > 1.5",
          "explanation": "Removing the constant $5$ isolates the oscillating term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by the amplitude",
          "workingLatex": "\\sin(30t) > \\tfrac{1}{2}",
          "explanation": "Dividing by the positive amplitude $3$ preserves the inequality and leaves a standard sine comparison.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the boundary equation",
          "workingLatex": "\\sin u = \\tfrac{1}{2} \\;\\Rightarrow\\; u = 30^\\circ,\\; 150^\\circ",
          "explanation": "Finding where the sine equals exactly $\\tfrac12$ locates the boundaries of the interval where it is larger.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify where sine exceeds a half",
          "workingLatex": "\\sin u > \\tfrac{1}{2} \\text{ for } 30^\\circ < u < 150^\\circ",
          "explanation": "Between $30^\\circ$ and $150^\\circ$ the sine curve rises above $\\tfrac12$; outside this arc within one turn it is below.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Translate back to u = 30t",
          "workingLatex": "30^\\circ < 30t < 150^\\circ",
          "explanation": "Replacing $u$ with $30t$ prepares the inequality for solving in terms of the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Divide through by 30",
          "workingLatex": "1 < t < 5",
          "explanation": "Dividing each part by $30$ gives the time interval directly in hours after $06\\!:\\!00$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret in clock time",
          "workingLatex": "07\\!:\\!00 \\text{ to } 11\\!:\\!00",
          "explanation": "Since $t$ is measured from $06\\!:\\!00$, the depth is above $6.5\\,\\text{m}$ from $07\\!:\\!00$ until $11\\!:\\!00$, a span of $4$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify a boundary",
          "workingLatex": "d(1) = 5 + 3\\sin(30^\\circ) = 5 + 1.5 = 6.5",
          "explanation": "At $t=1$ the depth is exactly $6.5\\,\\text{m}$, confirming that the interval begins there.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify inside the interval",
          "workingLatex": "d(3) = 5 + 3\\sin(90^\\circ) = 8 > 6.5",
          "explanation": "At the first maximum $t=3$ the depth is $8\\,\\text{m}$, comfortably above $6.5\\,\\text{m}$, confirming the interval is where the depth is high.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Collect the answers",
          "workingLatex": "\\text{max } 8\\,\\text{m at } t=3;\\quad d > 6.5 \\text{ for } 1 < t < 5",
          "explanation": "This states both required results: the first maximum and the interval above the threshold.",
          "diagram": null
        }
      ],
      "finalAnswer": "First maximum depth of $8\\,\\text{m}$ at $t=3$ (i.e. $09\\!:\\!00$). The depth exceeds $6.5\\,\\text{m}$ for $1<t<5$, that is from $07\\!:\\!00$ to $11\\!:\\!00$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "trig-graphs",
      "modelling",
      "daylight"
    ],
    "questionText": "The number of hours of daylight $D$ in a city is modelled by $D=a\\cos(bt)+c$, where $t$ is the number of months after December (angle in degrees). The shortest day of $8$ hours occurs in December ($t=0$) and the longest day of $16$ hours occurs in June ($t=6$), with the pattern repeating every $12$ months. Find $a$, $b$ and $c$, and hence the number of daylight hours in April.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the amplitude",
          "workingLatex": "a = \\frac{\\text{max} - \\text{min}}{2} = \\frac{16 - 8}{2}",
          "explanation": "Daylight swings symmetrically about an average, so the amplitude is half the difference between the longest and shortest days.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the amplitude",
          "workingLatex": "a = 4",
          "explanation": "The daylight length varies by $4$ hours either side of the yearly average.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the midline",
          "workingLatex": "c = \\frac{\\text{max} + \\text{min}}{2} = \\frac{16 + 8}{2} = 12",
          "explanation": "The average daylight is exactly halfway between the extremes, which is $12$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find b from the period",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b} = 12 \\;\\Rightarrow\\; b = 30",
          "explanation": "One yearly cycle spans $12$ months, so the cosine advances $30^\\circ$ per month.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the sign of the amplitude",
          "workingLatex": "D = -4\\cos(30t) + 12",
          "explanation": "At $t=0$ (December) daylight is at its minimum, but plain cosine starts at a maximum, so we use a negative coefficient to flip it and start at the shortest day.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the shortest day",
          "workingLatex": "D(0) = -4\\cos(0^\\circ) + 12 = -4 + 12 = 8",
          "explanation": "At $t=0$ the model gives $8$ hours, matching the December minimum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the longest day",
          "workingLatex": "D(6) = -4\\cos(180^\\circ) + 12 = 4 + 12 = 16",
          "explanation": "At $t=6$ (June) the cosine is $-1$, giving $16$ hours, matching the summer maximum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the value of t for April",
          "workingLatex": "t = 4",
          "explanation": "April is four months after December, so $t=4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute into the model",
          "workingLatex": "D(4) = -4\\cos(30 \\times 4) + 12",
          "explanation": "Putting $t=4$ into the equation lets us evaluate the daylight in April.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the angle",
          "workingLatex": "D(4) = -4\\cos(120^\\circ) + 12",
          "explanation": "Multiplying $30$ by $4$ gives an angle of $120^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the cosine",
          "workingLatex": "\\cos(120^\\circ) = -\\tfrac{1}{2}",
          "explanation": "In the second quadrant cosine is negative, with exact value $-\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the daylight hours",
          "workingLatex": "D(4) = -4(-0.5) + 12 = 2 + 12 = 14",
          "explanation": "April has $14$ hours of daylight, sitting sensibly between the December minimum and the June maximum as the days lengthen.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check the result",
          "workingLatex": "8 \\leq 14 \\leq 16",
          "explanation": "The value lies within the annual range and reflects spring, when days are getting longer toward midsummer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Note the model limitation",
          "workingLatex": "\\text{months are not exactly equal, so this is approximate}",
          "explanation": "The real year is not made of $12$ identical months and daylight does not vary perfectly sinusoidally, so the model gives a good estimate rather than an exact figure.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=4$ (with $D=-4\\cos(30t)+12$), $b=30$, $c=12$. April ($t=4$) has $14$ hours of daylight."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "solving-equations",
      "minima"
    ],
    "questionText": "Consider the curve $y=2\\sin(2x)+1$ for $0^\\circ\\leq x\\leq 360^\\circ$. Solve the equation $2\\sin(2x)+1=0$ fully in this interval, and state the coordinates of the minimum points of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange the equation",
          "workingLatex": "2\\sin(2x) = -1",
          "explanation": "Subtracting $1$ from both sides isolates the sine term ready for solving.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(2x) = -\\tfrac{1}{2}",
          "explanation": "Dividing by $2$ leaves a standard sine equation whose solutions come from known exact values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute to adjust the range",
          "workingLatex": "u = 2x, \\quad 0^\\circ \\leq x \\leq 360^\\circ \\;\\Rightarrow\\; 0^\\circ \\leq u \\leq 720^\\circ",
          "explanation": "Because the sine has argument $2x$, letting $u=2x$ doubles the search interval to $720^\\circ$, so we must find every solution up to there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the reference angle",
          "workingLatex": "\\sin^{-1}\\!\\left(\\tfrac{1}{2}\\right) = 30^\\circ",
          "explanation": "Ignoring the sign for a moment, the related acute angle is $30^\\circ$; the negative sign then tells us which quadrants to use.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate solutions in the first turn",
          "workingLatex": "u = 180^\\circ + 30^\\circ = 210^\\circ, \\quad u = 360^\\circ - 30^\\circ = 330^\\circ",
          "explanation": "Sine is negative in the third and fourth quadrants, giving $210^\\circ$ and $330^\\circ$ within the first $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add a full turn for the second cycle",
          "workingLatex": "u = 210^\\circ + 360^\\circ = 570^\\circ, \\quad u = 330^\\circ + 360^\\circ = 690^\\circ",
          "explanation": "Sine repeats every $360^\\circ$, so adding a revolution gives the solutions in the second turn, both still within $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List all u solutions",
          "workingLatex": "u \\in \\{210^\\circ, 330^\\circ, 570^\\circ, 690^\\circ\\}",
          "explanation": "The next candidate would be $930^\\circ$, which exceeds $720^\\circ$, so these four values are complete.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert back to x",
          "workingLatex": "x = \\frac{u}{2} \\;\\Rightarrow\\; x = 105^\\circ,\\; 165^\\circ,\\; 285^\\circ,\\; 345^\\circ",
          "explanation": "Halving each value of $u$ undoes the substitution and gives the solutions for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the first solution",
          "workingLatex": "2\\sin(2 \\times 105^\\circ) + 1 = 2\\sin(210^\\circ) + 1 = 2(-0.5) + 1 = 0",
          "explanation": "Substituting $x=105^\\circ$ returns $0$, confirming it is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the last solution",
          "workingLatex": "2\\sin(2 \\times 345^\\circ) + 1 = 2\\sin(690^\\circ) + 1 = 2(-0.5) + 1 = 0",
          "explanation": "Since $\\sin(690^\\circ)=\\sin(330^\\circ)=-0.5$, the value $x=345^\\circ$ also works.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the minimum value of the curve",
          "workingLatex": "y_{\\min} = 2(-1) + 1 = -1",
          "explanation": "The curve is lowest when the sine reaches its minimum of $-1$, giving a minimum $y$-value of $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find where the minimum occurs",
          "workingLatex": "\\sin(2x) = -1 \\;\\Rightarrow\\; 2x = 270^\\circ,\\; 630^\\circ",
          "explanation": "Sine equals $-1$ at $270^\\circ$, and again a full turn later at $630^\\circ$, both within the doubled interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for x",
          "workingLatex": "x = 135^\\circ,\\; 315^\\circ",
          "explanation": "Halving the two angles gives the $x$-coordinates of the minimum points.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify a minimum point",
          "workingLatex": "y(135^\\circ) = 2\\sin(270^\\circ) + 1 = 2(-1) + 1 = -1",
          "explanation": "At $x=135^\\circ$ the curve reaches $-1$, confirming this is indeed a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the minimum coordinates",
          "workingLatex": "(135^\\circ, -1) \\text{ and } (315^\\circ, -1)",
          "explanation": "These are the two lowest points of the curve within the given interval.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Collect the final results",
          "workingLatex": "x = 105^\\circ, 165^\\circ, 285^\\circ, 345^\\circ; \\quad \\text{minima } (135^\\circ,-1),(315^\\circ,-1)",
          "explanation": "This gives the complete solution set of the equation together with the required minimum points.",
          "diagram": null
        }
      ],
      "finalAnswer": "Solutions: $x=105^\\circ,\\,165^\\circ,\\,285^\\circ,\\,345^\\circ$. Minimum points: $(135^\\circ,-1)$ and $(315^\\circ,-1)$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "transformations",
      "phase-shift"
    ],
    "questionText": "A curve has equation $y=a\\sin\\big(b(x-d)\\big)+c$ with $a,b>0$ and $0^\\circ<d<90^\\circ$. Its maximum value is $7$ and its minimum value is $1$, it has period $180^\\circ$, and it crosses its midline going upwards at $x=20^\\circ$. Find the values of $a$, $b$, $c$ and $d$, and verify that the curve passes through $(65^\\circ, 7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the midline",
          "workingLatex": "c = \\frac{\\text{max} + \\text{min}}{2} = \\frac{7 + 1}{2}",
          "explanation": "The vertical shift $c$ is the average of the maximum and minimum, since the curve oscillates symmetrically about it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the midline",
          "workingLatex": "c = 4",
          "explanation": "The curve is centred on the line $y=4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the amplitude",
          "workingLatex": "a = \\frac{\\text{max} - \\text{min}}{2} = \\frac{7 - 1}{2}",
          "explanation": "The amplitude is half the total vertical range between the peak and trough.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the amplitude",
          "workingLatex": "a = 3",
          "explanation": "The curve rises and falls $3$ units from its midline.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find b from the period",
          "workingLatex": "\\text{period} = \\frac{360^\\circ}{b} = 180^\\circ \\;\\Rightarrow\\; b = \\frac{360}{180}",
          "explanation": "The period of a sine is $\\tfrac{360^\\circ}{b}$; setting it equal to $180^\\circ$ lets us solve for $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate b",
          "workingLatex": "b = 2",
          "explanation": "A value of $b=2$ compresses the sine so it completes a cycle in $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the upward midline crossing",
          "workingLatex": "y = c \\text{ rising} \\;\\Leftrightarrow\\; \\sin\\big(b(x-d)\\big) = 0 \\text{ increasing}",
          "explanation": "A sine curve crosses its midline going upward exactly where its argument is $0^\\circ$, because that is where $\\sin$ starts rising from zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for d",
          "workingLatex": "b(x - d) = 0 \\text{ at } x = 20^\\circ \\;\\Rightarrow\\; d = 20",
          "explanation": "Since the upward crossing is at $x=20^\\circ$, the argument is zero there, giving $d=20$, which satisfies $0<d<90$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Assemble the equation",
          "workingLatex": "y = 3\\sin\\big(2(x - 20)\\big) + 4",
          "explanation": "Combining all four constants produces the full equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the test point",
          "workingLatex": "y(65) = 3\\sin\\big(2(65 - 20)\\big) + 4",
          "explanation": "To verify the point $(65^\\circ,7)$ we substitute $x=65$ and check the resulting $y$-value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the argument",
          "workingLatex": "y(65) = 3\\sin(2 \\times 45) + 4 = 3\\sin(90^\\circ) + 4",
          "explanation": "Inside the bracket $65-20=45$, and doubling gives an angle of $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the sine",
          "workingLatex": "\\sin(90^\\circ) = 1",
          "explanation": "At $90^\\circ$ the sine reaches its maximum value of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Complete the verification",
          "workingLatex": "y(65) = 3(1) + 4 = 7 \\;\\checkmark",
          "explanation": "The curve gives $y=7$ at $x=65^\\circ$, exactly the point stated, and because $y=7$ is the maximum, the point is in fact a peak of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the constants",
          "workingLatex": "a = 3,\\; b = 2,\\; c = 4,\\; d = 20",
          "explanation": "These four values fully define the curve and are consistent with every piece of given information.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=3$, $b=2$, $c=4$, $d=20$, so $y=3\\sin\\big(2(x-20)\\big)+4$; substituting $x=65^\\circ$ gives $y=7$, verifying the point $(65^\\circ,7)$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "trig-graphs",
      "modelling",
      "intersections"
    ],
    "questionText": "Two voltage signals are modelled by $V_1=4\\sin(30t)+10$ and $V_2=4\\cos(30t)+10$, where $t$ is the time in hours (angle in degrees) with $0\\leq t\\leq 12$. Find all the times at which the two signals are equal, determine how many times their graphs intersect in this interval, and state which signal is greater at $t=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the models and range",
          "workingLatex": "V_1 = 4\\sin(30t)+10,\\; V_2 = 4\\cos(30t)+10,\\; u = 30t,\\; 0^\\circ \\leq u \\leq 360^\\circ",
          "explanation": "Substituting $u=30t$ turns both models into functions of one angle; over $0\\leq t\\leq12$ the angle $u$ sweeps exactly one full revolution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the signals equal",
          "workingLatex": "4\\sin(30t) + 10 = 4\\cos(30t) + 10",
          "explanation": "The graphs meet where the two heights coincide, so we equate the two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel common terms",
          "workingLatex": "4\\sin(30t) = 4\\cos(30t)",
          "explanation": "The $+10$ appears on both sides and cancels, and the amplitude $4$ is common, simplifying the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form a tangent equation",
          "workingLatex": "\\frac{\\sin(30t)}{\\cos(30t)} = 1 \\;\\Rightarrow\\; \\tan(30t) = 1",
          "explanation": "Dividing both sides by $\\cos(30t)$ (valid because cosine is non-zero at the solutions) turns the equation into a simple tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the tangent equation",
          "workingLatex": "\\tan u = 1 \\;\\Rightarrow\\; u = 45^\\circ,\\; 225^\\circ",
          "explanation": "Tangent equals $1$ at $45^\\circ$ and again every $180^\\circ$, giving $225^\\circ$ within one revolution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Convert back to time",
          "workingLatex": "t = \\frac{u}{30} \\;\\Rightarrow\\; t = 1.5,\\; 7.5",
          "explanation": "Dividing each angle by $30$ gives the times at which the two signals are equal.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the first equal time",
          "workingLatex": "V_1(1.5) = V_2(1.5) = 4\\left(\\tfrac{\\sqrt2}{2}\\right) + 10 = 10 + 2\\sqrt2",
          "explanation": "At $t=1.5$ both $\\sin(45^\\circ)$ and $\\cos(45^\\circ)$ equal $\\tfrac{\\sqrt2}{2}$, so the two signals take the same value, confirming the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Count the intersections",
          "workingLatex": "\\text{number of intersections} = 2",
          "explanation": "Within one full revolution of $u$ the tangent equation has exactly two solutions, so the two graphs cross twice in $0\\leq t\\leq12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the first signal at t = 1",
          "workingLatex": "V_1(1) = 4\\sin(30^\\circ) + 10 = 4(0.5) + 10 = 12",
          "explanation": "Substituting $t=1$ into the sine model gives a value of $12$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the second signal at t = 1",
          "workingLatex": "V_2(1) = 4\\cos(30^\\circ) + 10 = 4\\left(\\tfrac{\\sqrt3}{2}\\right) + 10 = 10 + 2\\sqrt3",
          "explanation": "The cosine model at $t=1$ gives $10+2\\sqrt3$, using the exact value $\\cos(30^\\circ)=\\tfrac{\\sqrt3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the two values",
          "workingLatex": "V_2(1) = 10 + 2\\sqrt3 \\approx 13.46 > 12 = V_1(1)",
          "explanation": "Since $2\\sqrt3\\approx3.46$, the cosine signal is about $13.46$, which is larger than $12$, so $V_2$ is greater at $t=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the comparison",
          "workingLatex": "t = 1 < 1.5 \\text{ (first crossing)}",
          "explanation": "Because $t=1$ comes before the first crossing at $t=1.5$, the cosine signal is still ahead there, which is consistent with the graphs meeting shortly afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the solution count is complete",
          "workingLatex": "u = 45^\\circ,\\,225^\\circ \\text{ only, since } 405^\\circ > 360^\\circ",
          "explanation": "The next tangent solution $405^\\circ$ lies beyond one revolution, so there are no further crossings in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final results",
          "workingLatex": "t = 1.5,\\,7.5;\\; 2 \\text{ intersections};\\; V_2 > V_1 \\text{ at } t=1",
          "explanation": "Collecting the results gives the equal times, the intersection count, and the comparison at $t=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The signals are equal at $t=1.5$ and $t=7.5$ hours; their graphs intersect $2$ times in the interval; at $t=1$ the signal $V_2=10+2\\sqrt3\\approx13.46$ is greater than $V_1=12$."
    }
  },
  {
    "id": "al.y1.pure.trig-graphs.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Trigonometric graphs",
    "subtopicId": "al.y1.pure.trig-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "trig-graphs",
      "transformations",
      "solving-equations"
    ],
    "questionText": "The graph of $y=\\cos x$ is stretched horizontally by scale factor $\\tfrac{1}{2}$, then stretched vertically by scale factor $5$, and finally translated $8$ units in the positive $y$-direction. Write down the equation of the transformed curve, then solve the equation (curve) $=5.5$ for $0^\\circ\\leq x\\leq 360^\\circ$, and interpret the solutions geometrically.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the horizontal stretch",
          "workingLatex": "y = \\cos(2x)",
          "explanation": "A horizontal stretch of scale factor $\\tfrac12$ replaces $x$ by $2x$, halving the period from $360^\\circ$ to $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the vertical stretch",
          "workingLatex": "y = 5\\cos(2x)",
          "explanation": "A vertical stretch of scale factor $5$ multiplies the whole function by $5$, so the amplitude becomes $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the vertical translation",
          "workingLatex": "y = 5\\cos(2x) + 8",
          "explanation": "Translating $8$ units up adds $8$ to the function, lifting the midline to $y=8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the range of the curve",
          "workingLatex": "3 \\leq y \\leq 13",
          "explanation": "With amplitude $5$ about the midline $8$, the curve oscillates between $8-5=3$ and $8+5=13$; the target $5.5$ lies inside this range, so solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the equation",
          "workingLatex": "5\\cos(2x) + 8 = 5.5",
          "explanation": "We now solve for where the curve reaches the height $5.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the midline",
          "workingLatex": "5\\cos(2x) = -2.5",
          "explanation": "Removing the constant $8$ isolates the cosine term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the amplitude",
          "workingLatex": "\\cos(2x) = -\\tfrac{1}{2}",
          "explanation": "Dividing by $5$ leaves a standard cosine equation with a known exact solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute for the range",
          "workingLatex": "u = 2x, \\quad 0^\\circ \\leq x \\leq 360^\\circ \\;\\Rightarrow\\; 0^\\circ \\leq u \\leq 720^\\circ",
          "explanation": "Letting $u=2x$ doubles the interval to $720^\\circ$, so we must find all solutions across two full turns.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the reference angle",
          "workingLatex": "\\cos^{-1}\\!\\left(\\tfrac{1}{2}\\right) = 60^\\circ",
          "explanation": "The acute angle whose cosine is $\\tfrac12$ is $60^\\circ$; the negative sign tells us which quadrants to use.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solutions in the first turn",
          "workingLatex": "u = 180^\\circ - 60^\\circ = 120^\\circ, \\quad u = 180^\\circ + 60^\\circ = 240^\\circ",
          "explanation": "Cosine is negative in the second and third quadrants, giving $120^\\circ$ and $240^\\circ$ within the first $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solutions in the second turn",
          "workingLatex": "u = 120^\\circ + 360^\\circ = 480^\\circ, \\quad u = 240^\\circ + 360^\\circ = 600^\\circ",
          "explanation": "Adding a full revolution gives the repeats in the second cycle, both still at most $720^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Convert back to x",
          "workingLatex": "x = \\frac{u}{2} \\;\\Rightarrow\\; x = 60^\\circ,\\; 120^\\circ,\\; 240^\\circ,\\; 300^\\circ",
          "explanation": "Halving each value of $u$ gives the four solutions for $x$ in the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the first solution",
          "workingLatex": "5\\cos(2 \\times 60^\\circ) + 8 = 5\\cos(120^\\circ) + 8 = 5(-0.5) + 8 = 5.5 \\;\\checkmark",
          "explanation": "Substituting $x=60^\\circ$ returns $5.5$, confirming it is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the last solution",
          "workingLatex": "5\\cos(2 \\times 300^\\circ) + 8 = 5\\cos(600^\\circ) + 8 = 5(-0.5) + 8 = 5.5 \\;\\checkmark",
          "explanation": "Since $\\cos(600^\\circ)=\\cos(240^\\circ)=-0.5$, the value $x=300^\\circ$ also satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Interpret geometrically",
          "workingLatex": "y = 5\\cos(2x)+8 \\;\\text{ meets }\\; y = 5.5 \\text{ at four points}",
          "explanation": "The four solutions are the $x$-coordinates where the transformed curve crosses the horizontal line $y=5.5$; because the period is $180^\\circ$, this happens twice per cycle, giving four crossings over $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the final answer",
          "workingLatex": "x = 60^\\circ,\\; 120^\\circ,\\; 240^\\circ,\\; 300^\\circ",
          "explanation": "These are the complete set of solutions in the interval, and they represent where the curve is at height $5.5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The transformed curve is $y=5\\cos(2x)+8$. Solving $5\\cos(2x)+8=5.5$ gives $x=60^\\circ,\\,120^\\circ,\\,240^\\circ,\\,300^\\circ$, the four points where the curve meets the line $y=5.5$."
    }
  }
];
