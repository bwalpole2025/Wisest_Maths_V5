import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.curve-sketching.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "cubic-graphs",
      "intercepts"
    ],
    "questionText": "Sketch the curve with equation $y=(x-1)(x-2)(x+3)$, showing the coordinates of the points where the curve meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the $x$-intercepts",
          "workingLatex": "(x-1)(x-2)(x+3)=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. A product of factors equals zero only when one of the factors is zero, so each bracket gives one root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor",
          "workingLatex": "x=1,\\quad x=2,\\quad x=-3",
          "explanation": "Setting each bracket equal to zero and solving gives the three values of $x$ where the curve crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $x$-intercepts as coordinates",
          "workingLatex": "(1,\\,0),\\ (2,\\,0),\\ (-3,\\,0)",
          "explanation": "Each root pairs with $y=0$, giving the exact points on the horizontal axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the $y$-intercept",
          "workingLatex": "y=(0-1)(0-2)(0+3)=(-1)(-2)(3)=6",
          "explanation": "The curve meets the $y$-axis where $x=0$, so substitute $x=0$ into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $y$-intercept as a coordinate",
          "workingLatex": "(0,\\,6)",
          "explanation": "This is the single point where the curve crosses the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine the shape",
          "workingLatex": "x\\times x\\times x=x^{3}\\ \\Rightarrow\\ +x^{3}",
          "explanation": "Multiplying the leading term of each bracket gives a positive $x^3$ term, so this is a positive (rising) cubic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the end behaviour",
          "workingLatex": "x\\to-\\infty,\\ y\\to-\\infty;\\quad x\\to+\\infty,\\ y\\to+\\infty",
          "explanation": "A positive cubic falls away to the bottom-left and rises to the top-right, passing through all three roots in between.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the sketch",
          "workingLatex": "\\text{through }(-3,0),(0,6),(1,0),(2,0)",
          "explanation": "The curve comes up from the bottom-left, crosses at $x=-3$, rises to a local maximum, comes down through the $y$-axis at $(0,6)$ and crosses at $x=1$, dips to a local minimum, then rises crossing at $x=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Positive cubic crossing the $x$-axis at $(-3,\\,0),\\ (1,\\,0),\\ (2,\\,0)$ and the $y$-axis at $(0,\\,6)$; as $x\\to-\\infty,\\ y\\to-\\infty$ and as $x\\to+\\infty,\\ y\\to+\\infty$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "cubic-graphs",
      "roots"
    ],
    "questionText": "Sketch the curve with equation $y=x(x-2)(x+1)$, showing where it meets the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the $x$-intercepts",
          "workingLatex": "x(x-2)(x+1)=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. Here $x$ itself is a factor, so one root sits at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor",
          "workingLatex": "x=0,\\quad x=2,\\quad x=-1",
          "explanation": "Setting each factor to zero gives the three roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $x$-intercepts",
          "workingLatex": "(-1,\\,0),\\ (0,\\,0),\\ (2,\\,0)",
          "explanation": "Listed left to right along the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the $y$-intercept",
          "workingLatex": "y=0\\times(0-2)\\times(0+1)=0",
          "explanation": "Substituting $x=0$; because $x$ is a factor, the curve passes through the origin, so the $y$-intercept is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the $y$-intercept",
          "workingLatex": "(0,\\,0)",
          "explanation": "The curve goes through the origin, which is at once an $x$-intercept and the $y$-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine the shape",
          "workingLatex": "x\\times x\\times x=x^{3}\\ \\Rightarrow\\ +x^{3}",
          "explanation": "The product of the leading terms is $+x^3$, so this is a positive cubic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "End behaviour and sketch",
          "workingLatex": "x\\to-\\infty,\\ y\\to-\\infty;\\quad x\\to+\\infty,\\ y\\to+\\infty",
          "explanation": "The curve rises from the bottom-left, crosses at $x=-1$, forms a local maximum, passes down through the origin, dips to a local minimum, then rises through $x=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Positive cubic through the origin, crossing the $x$-axis at $(-1,\\,0),\\ (0,\\,0),\\ (2,\\,0)$; $y$-intercept $(0,\\,0)$; as $x\\to-\\infty,\\ y\\to-\\infty$ and as $x\\to+\\infty,\\ y\\to+\\infty$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "cubic-graphs",
      "end-behaviour"
    ],
    "questionText": "Sketch the curve with equation $y=-(x-1)(x+2)(x-3)$, showing where it meets the axes and describing its end behaviour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the $x$-intercepts",
          "workingLatex": "-(x-1)(x+2)(x-3)=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. The factor $-1$ can never equal zero, so the roots come only from the three brackets.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor",
          "workingLatex": "x=1,\\quad x=-2,\\quad x=3",
          "explanation": "Setting each bracket to zero gives the three roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $x$-intercepts",
          "workingLatex": "(-2,\\,0),\\ (1,\\,0),\\ (3,\\,0)",
          "explanation": "Ordered left to right along the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the $y$-intercept",
          "workingLatex": "y=-(0-1)(0+2)(0-3)=-\\big[(-1)(2)(-3)\\big]=-6",
          "explanation": "Substitute $x=0$; the three brackets multiply to $6$, and the leading minus sign makes it $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the $y$-intercept",
          "workingLatex": "(0,\\,-6)",
          "explanation": "The curve crosses the $y$-axis below the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine the shape",
          "workingLatex": "-(x\\times x\\times x)=-x^{3}\\ \\Rightarrow\\ -x^{3}",
          "explanation": "The leading term is $-x^3$, so this is a negative (falling) cubic; the minus sign flips the usual orientation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the end behaviour",
          "workingLatex": "x\\to-\\infty,\\ y\\to+\\infty;\\quad x\\to+\\infty,\\ y\\to-\\infty",
          "explanation": "A negative cubic does the opposite of a positive one: it starts high on the left and falls away to the bottom-right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the sketch",
          "workingLatex": "\\text{through }(-2,0),(0,-6),(1,0),(3,0)",
          "explanation": "The curve comes down from the top-left, crosses at $x=-2$, dips to a local minimum, rises through $(0,-6)$ and crosses at $x=1$, reaches a local maximum, then falls crossing at $x=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Negative cubic crossing the $x$-axis at $(-2,\\,0),\\ (1,\\,0),\\ (3,\\,0)$ and the $y$-axis at $(0,\\,-6)$; as $x\\to-\\infty,\\ y\\to+\\infty$ and as $x\\to+\\infty,\\ y\\to-\\infty$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intercepts",
      "cubic-graphs"
    ],
    "questionText": "The curve $C$ has equation $y=(x-4)(x+2)(x-1)$. State the coordinates of all the points where $C$ crosses the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find where $C$ crosses the $x$-axis",
          "workingLatex": "(x-4)(x+2)(x-1)=0",
          "explanation": "On the $x$-axis $y=0$. A product is zero when a factor is zero, so solve each bracket.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor",
          "workingLatex": "x=4,\\quad x=-2,\\quad x=1",
          "explanation": "Each bracket gives one root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $x$-axis crossings",
          "workingLatex": "(-2,\\,0),\\ (1,\\,0),\\ (4,\\,0)",
          "explanation": "Pair each root with $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find where $C$ crosses the $y$-axis",
          "workingLatex": "y=(0-4)(0+2)(0-1)=(-4)(2)(-1)=8",
          "explanation": "On the $y$-axis $x=0$, so substitute $x=0$ into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the $y$-axis crossing",
          "workingLatex": "(0,\\,8)",
          "explanation": "This is the only point where the curve meets the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State all axis crossings",
          "workingLatex": "(-2,\\,0),\\ (1,\\,0),\\ (4,\\,0),\\ (0,\\,8)",
          "explanation": "These four points are where the curve meets the axes.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x$-axis: $(-2,\\,0),\\ (1,\\,0),\\ (4,\\,0)$; $y$-axis: $(0,\\,8)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "quadratic-graphs",
      "turning-point"
    ],
    "questionText": "Sketch the curve $y=(x+1)(x-3)$, showing the coordinates of the turning point and the points where the curve meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the $x$-intercepts",
          "workingLatex": "(x+1)(x-3)=0",
          "explanation": "The curve meets the $x$-axis where $y=0$, so set each factor to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor",
          "workingLatex": "x=-1,\\quad x=3",
          "explanation": "These are the two roots where the parabola crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $x$-intercepts",
          "workingLatex": "(-1,\\,0),\\ (3,\\,0)",
          "explanation": "Pair each root with $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the $y$-intercept",
          "workingLatex": "y=(0+1)(0-3)=(1)(-3)=-3",
          "explanation": "Substitute $x=0$ to find where the curve meets the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the $y$-intercept",
          "workingLatex": "(0,\\,-3)",
          "explanation": "The curve crosses the vertical axis below the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the axis of symmetry",
          "workingLatex": "x=\\dfrac{-1+3}{2}=1",
          "explanation": "A parabola is symmetric, so its turning point sits exactly halfway between the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the turning point",
          "workingLatex": "y=(1+1)(1-3)=(2)(-2)=-4\\ \\Rightarrow\\ (1,\\,-4)",
          "explanation": "Substitute $x=1$ to obtain the $y$-coordinate of the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine shape and describe sketch",
          "workingLatex": "+x^{2}\\ \\Rightarrow\\ \\text{opens upward, minimum at }(1,-4)",
          "explanation": "The $x^2$ term is positive, so the parabola is U-shaped with a minimum. It falls from the upper-left through $(-1,0)$, reaches its lowest point $(1,-4)$ passing $(0,-3)$, then rises through $(3,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Upward parabola with roots $(-1,\\,0)$ and $(3,\\,0)$, $y$-intercept $(0,\\,-3)$, and minimum turning point $(1,\\,-4)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "quadratic-graphs",
      "turning-point"
    ],
    "questionText": "Sketch the curve $y=-(x-2)(x+4)$, giving the coordinates of the turning point and the points where the curve meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the $x$-intercepts",
          "workingLatex": "-(x-2)(x+4)=0",
          "explanation": "Set $y=0$. The factor $-1$ is never zero, so the roots come from the two brackets.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor",
          "workingLatex": "x=2,\\quad x=-4",
          "explanation": "These are the two points where the parabola crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $x$-intercepts",
          "workingLatex": "(-4,\\,0),\\ (2,\\,0)",
          "explanation": "Ordered left to right along the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the $y$-intercept",
          "workingLatex": "y=-(0-2)(0+4)=-(-2)(4)=8",
          "explanation": "Substitute $x=0$; the brackets give $-8$ and the leading minus makes it $+8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the $y$-intercept",
          "workingLatex": "(0,\\,8)",
          "explanation": "The curve crosses the vertical axis above the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the axis of symmetry",
          "workingLatex": "x=\\dfrac{-4+2}{2}=-1",
          "explanation": "The vertex lies halfway between the two roots by the symmetry of a parabola.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the turning point",
          "workingLatex": "y=-(-1-2)(-1+4)=-(-3)(3)=9\\ \\Rightarrow\\ (-1,\\,9)",
          "explanation": "Substitute $x=-1$ to obtain the height of the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine shape and describe sketch",
          "workingLatex": "-x^{2}\\ \\Rightarrow\\ \\text{opens downward, maximum at }(-1,9)",
          "explanation": "The $x^2$ term is negative, so the parabola is $\\cap$-shaped with a maximum. It rises from the lower-left through $(-4,0)$, peaks at $(-1,9)$ passing $(0,8)$, then falls through $(2,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Downward parabola with roots $(-4,\\,0)$ and $(2,\\,0)$, $y$-intercept $(0,\\,8)$, and maximum turning point $(-1,\\,9)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intercepts",
      "cubic-graphs"
    ],
    "questionText": "Find the coordinates of the point where the curve $y=(x+2)(x-3)(x+5)$ crosses the $y$-axis, and explain how this relates to the constants in the brackets.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the $y$-axis condition",
          "workingLatex": "x=0",
          "explanation": "Every point on the $y$-axis has $x=0$, so substitute $x=0$ into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x=0$",
          "workingLatex": "y=(0+2)(0-3)(0+5)",
          "explanation": "Replacing $x$ with $0$ leaves just the constant term in each bracket.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the brackets",
          "workingLatex": "y=(2)(-3)(5)",
          "explanation": "Each bracket reduces to its constant, so the $y$-intercept is the product of those constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply",
          "workingLatex": "y=2\\times(-3)\\times5=-30",
          "explanation": "Two positive constants and one negative constant multiply to a negative result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write as a coordinate",
          "workingLatex": "(0,\\,-30)",
          "explanation": "The curve crosses the $y$-axis $30$ units below the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the link to the constants",
          "workingLatex": "2\\times(-3)\\times5=-30",
          "explanation": "The $y$-intercept always equals the product of the constant terms of the factors, because setting $x=0$ removes every term containing $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y$-intercept at $(0,\\,-30)$, which is the product of the constants $2\\times(-3)\\times5$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "cubic-graphs",
      "end-behaviour"
    ],
    "questionText": "A cubic curve has equation $y=ax^{3}+bx^{2}+cx+d$. Describe the end behaviour of the curve as $x\\to\\pm\\infty$ when $a>0$ and when $a<0$, using $y=2x^{3}$ and $y=-2x^{3}$ to illustrate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the dominant term",
          "workingLatex": "y\\approx ax^{3}\\ \\text{for large }|x|",
          "explanation": "For very large positive or negative $x$, the $x^3$ term grows far faster than the others, so it alone controls the end behaviour.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Case $a>0$: example",
          "workingLatex": "y=2x^{3}",
          "explanation": "Take a positive leading coefficient to see the pattern.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "End behaviour for $a>0$",
          "workingLatex": "x\\to-\\infty,\\ y\\to-\\infty;\\quad x\\to+\\infty,\\ y\\to+\\infty",
          "explanation": "Cubing keeps the sign of $x$, and multiplying by a positive number preserves it, so the curve falls to the bottom-left and rises to the top-right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case $a<0$: example",
          "workingLatex": "y=-2x^{3}",
          "explanation": "Now take a negative leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "End behaviour for $a<0$",
          "workingLatex": "x\\to-\\infty,\\ y\\to+\\infty;\\quad x\\to+\\infty,\\ y\\to-\\infty",
          "explanation": "The extra negative sign flips both ends, so the curve now starts high on the left and falls to the bottom-right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summarise",
          "workingLatex": "\\text{if }a>0:\\ \\text{up to the right; if }a<0:\\ \\text{down to the right}",
          "explanation": "A positive cubic runs from bottom-left to top-right; a negative cubic runs from top-left to bottom-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "If $a>0$: as $x\\to-\\infty,\\ y\\to-\\infty$ and as $x\\to+\\infty,\\ y\\to+\\infty$. If $a<0$: as $x\\to-\\infty,\\ y\\to+\\infty$ and as $x\\to+\\infty,\\ y\\to-\\infty$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "cubic-graphs",
      "intercepts"
    ],
    "questionText": "Sketch the curve $y=(x-2)(x-3)(x+1)$ and give the coordinates of the three points where it crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the $x$-intercepts",
          "workingLatex": "(x-2)(x-3)(x+1)=0",
          "explanation": "The curve meets the $x$-axis where $y=0$; solve each factor in turn.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor",
          "workingLatex": "x=2,\\quad x=3,\\quad x=-1",
          "explanation": "Each bracket contributes one distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the three $x$-intercepts",
          "workingLatex": "(-1,\\,0),\\ (2,\\,0),\\ (3,\\,0)",
          "explanation": "These are the three required axis crossings, ordered left to right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the $y$-intercept",
          "workingLatex": "y=(0-2)(0-3)(0+1)=(-2)(-3)(1)=6",
          "explanation": "Substitute $x=0$ to locate the $y$-axis crossing needed for the sketch.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the $y$-intercept",
          "workingLatex": "(0,\\,6)",
          "explanation": "The curve crosses the vertical axis above the origin.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine the shape",
          "workingLatex": "x\\times x\\times x=x^{3}\\ \\Rightarrow\\ +x^{3}",
          "explanation": "A positive leading term means this is a positive cubic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the sketch and end behaviour",
          "workingLatex": "x\\to-\\infty,\\ y\\to-\\infty;\\quad x\\to+\\infty,\\ y\\to+\\infty",
          "explanation": "The curve rises from the bottom-left, crosses at $x=-1$, peaks at a local maximum, comes down through $(0,6)$ and crosses at $x=2$, dips to a local minimum, then rises through $x=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x$-axis crossings at $(-1,\\,0),\\ (2,\\,0),\\ (3,\\,0)$; positive cubic with $y$-intercept $(0,\\,6)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "roots",
      "cubic-graphs"
    ],
    "questionText": "State how many times the curve $y=(x+1)(x-1)(x-4)$ crosses the $x$-axis, and explain why.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set $y=0$",
          "workingLatex": "(x+1)(x-1)(x-4)=0",
          "explanation": "Crossings of the $x$-axis occur where $y=0$; a product is zero when one of its factors is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor",
          "workingLatex": "x=-1,\\quad x=1,\\quad x=4",
          "explanation": "Each bracket contributes one solution.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the roots are distinct",
          "workingLatex": "-1\\neq1\\neq4",
          "explanation": "All three values are different, so they correspond to three separate points on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note each factor is simple",
          "workingLatex": "\\text{each bracket appears once}",
          "explanation": "No factor is repeated (there is no squared bracket), so at each root the curve passes straight through the axis rather than just touching it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the crossings",
          "workingLatex": "3",
          "explanation": "Three distinct simple roots give three genuine crossings.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{crosses the }x\\text{-axis }3\\text{ times}",
          "explanation": "A cubic can cross the $x$-axis at most three times, and here all three roots are real and distinct, so it does so exactly three times.",
          "diagram": null
        }
      ],
      "finalAnswer": "It crosses the $x$-axis $3$ times, at $x=-1,\\ 1,\\ 4$, because there are three distinct, non-repeated real roots."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "cubic-graphs",
      "symmetry"
    ],
    "questionText": "Sketch the curve $y=x(x+3)(x-3)$, showing where it meets the axes and describing its symmetry.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the $x$-intercepts",
          "workingLatex": "x(x+3)(x-3)=0",
          "explanation": "Set $y=0$. The factor $x$ gives a root at the origin, and the other brackets give two more.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor",
          "workingLatex": "x=0,\\quad x=-3,\\quad x=3",
          "explanation": "The three roots of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the $x$-intercepts",
          "workingLatex": "(-3,\\,0),\\ (0,\\,0),\\ (3,\\,0)",
          "explanation": "The roots are placed symmetrically on either side of the origin.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the $y$-intercept",
          "workingLatex": "y=0\\times(0+3)\\times(0-3)=0\\ \\Rightarrow\\ (0,\\,0)",
          "explanation": "Since $x$ is a factor, substituting $x=0$ gives $0$, so the curve passes through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand to reveal structure",
          "workingLatex": "y=x(x^{2}-9)=x^{3}-9x",
          "explanation": "Multiplying out shows the equation contains only odd powers of $x$ (an $x^3$ term and an $x$ term).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test for symmetry",
          "workingLatex": "f(-x)=(-x)^{3}-9(-x)=-x^{3}+9x=-f(x)",
          "explanation": "Because $f(-x)=-f(x)$, the function is odd, so the curve has rotational (half-turn) symmetry about the origin rather than reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determine the shape",
          "workingLatex": "x\\times x\\times x=x^{3}\\ \\Rightarrow\\ +x^{3}",
          "explanation": "A positive leading term means this is a positive cubic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the sketch and end behaviour",
          "workingLatex": "x\\to-\\infty,\\ y\\to-\\infty;\\quad x\\to+\\infty,\\ y\\to+\\infty",
          "explanation": "The curve rises from the bottom-left, crosses at $x=-3$, reaches a local maximum, passes through the origin, dips to a local minimum, then rises through $x=3$; a half-turn about the origin maps the curve onto itself.",
          "diagram": null
        }
      ],
      "finalAnswer": "Positive cubic through $(-3,\\,0),\\ (0,\\,0),\\ (3,\\,0)$ with $y$-intercept $(0,\\,0)$; it is an odd function ($y=x^{3}-9x$) with rotational symmetry about the origin; as $x\\to-\\infty,\\ y\\to-\\infty$ and as $x\\to+\\infty,\\ y\\to+\\infty$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "Sketch the curve $y=\\dfrac{1}{x}$, stating the equations of any asymptotes and the quadrants in which the branches lie.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the type of curve.",
          "workingLatex": "y=\\dfrac{1}{x}",
          "explanation": "This is the basic reciprocal function. Spotting the family early tells us to expect two separate branches and a pair of asymptotes, rather than a single smooth curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the vertical asymptote.",
          "workingLatex": "x=0",
          "explanation": "The function is undefined where the denominator is zero. As $x$ gets close to $0$ the fraction becomes huge, so the curve shoots up or down beside the line $x=0$ without ever touching it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the horizontal asymptote.",
          "workingLatex": "x\\to\\pm\\infty\\implies y\\to 0",
          "explanation": "When $x$ is very large in size, dividing $1$ by it gives something tiny. So the curve flattens towards the $x$-axis, making $y=0$ a horizontal asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check for intercepts.",
          "workingLatex": "\\dfrac{1}{x}=0\\ \\text{has no solution}",
          "explanation": "A fraction with numerator $1$ can never equal zero, so there is no $x$-intercept. The curve also skips $x=0$, so there is no $y$-intercept either.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide the sign of $y$ in each region.",
          "workingLatex": "x>0\\Rightarrow y>0,\\quad x<0\\Rightarrow y<0",
          "explanation": "Dividing $1$ by a positive number stays positive, and dividing by a negative number turns negative. This fixes which side of the $x$-axis each branch sits on.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the sketch.",
          "workingLatex": "\\text{Branches in the 1st and 3rd quadrants}",
          "explanation": "Putting it together: one branch lives in the top-right (first quadrant) and the other in the bottom-left (third quadrant), each hugging both asymptotes $x=0$ and $y=0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve has asymptotes $x=0$ and $y=0$, no intercepts, with branches in the 1st quadrant (for $x>0$) and the 3rd quadrant (for $x<0$)."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "Sketch the curve $y=\\dfrac{2}{x}$ and describe how it compares with the curve $y=\\dfrac{1}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the type of curve.",
          "workingLatex": "y=\\dfrac{2}{x}",
          "explanation": "This is a reciprocal curve, so again we expect two branches and a pair of asymptotes. The $2$ on top simply scales the output.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the asymptotes.",
          "workingLatex": "x=0,\\quad y=0",
          "explanation": "The denominator is still just $x$, so the curve is undefined at $x=0$ and flattens towards $0$ for large $x$. The asymptotes are identical to those of $y=\\tfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for intercepts.",
          "workingLatex": "\\dfrac{2}{x}=0\\ \\text{has no solution}",
          "explanation": "The numerator $2$ is never zero, so the curve never meets the $x$-axis, and $x=0$ is excluded, so there is no $y$-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide the quadrants.",
          "workingLatex": "x>0\\Rightarrow y>0,\\quad x<0\\Rightarrow y<0",
          "explanation": "Since $2$ is positive, the sign of $y$ matches the sign of $x$, so the branches sit in the 1st and 3rd quadrants, just like $y=\\tfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the $y$-values with $y=\\tfrac{1}{x}$.",
          "workingLatex": "\\dfrac{2}{x}=2\\left(\\dfrac{1}{x}\\right)",
          "explanation": "Every output is exactly double that of $y=\\tfrac{1}{x}$. The new curve is a vertical stretch of the old one by scale factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a sample point.",
          "workingLatex": "x=1:\\ y=\\dfrac{2}{1}=2\\ \\text{(against }y=1\\text{)}",
          "explanation": "At $x=1$ the new curve passes through $(1,2)$ while $y=\\tfrac{1}{x}$ passes through $(1,1)$. This confirms the branches sit further from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the sketch and comparison.",
          "workingLatex": "\\text{Same shape, stretched away from the axes}",
          "explanation": "The sketch looks like $y=\\tfrac{1}{x}$ with the same asymptotes and quadrants, but each branch is pushed further from the origin because every $y$-value has been doubled.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes $x=0$ and $y=0$, branches in the 1st and 3rd quadrants; the curve is the same shape as $y=\\tfrac{1}{x}$ but stretched vertically by factor $2$, so each branch lies further from the origin (e.g. $(1,2)$ instead of $(1,1)$)."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "Sketch the curve $y=-\\dfrac{1}{x}$, stating the quadrants in which the branches lie and explaining the effect of the negative sign.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the type of curve.",
          "workingLatex": "y=-\\dfrac{1}{x}",
          "explanation": "This is a reciprocal curve with a negative sign in front. It is closely related to $y=\\tfrac{1}{x}$, so we can build the sketch from that starting point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the asymptotes.",
          "workingLatex": "x=0,\\quad y=0",
          "explanation": "The denominator is still $x$, so the curve is undefined at $x=0$ and flattens towards $0$ for large $x$. Multiplying by $-1$ does not move the asymptotes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check for intercepts.",
          "workingLatex": "-\\dfrac{1}{x}=0\\ \\text{has no solution}",
          "explanation": "The fraction can never equal zero and $x=0$ is excluded, so the curve has no $x$- or $y$-intercepts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the sign change.",
          "workingLatex": "x>0\\Rightarrow y<0,\\quad x<0\\Rightarrow y>0",
          "explanation": "The minus sign flips every output. Where $y=\\tfrac{1}{x}$ was positive it is now negative, and vice versa, so each branch swaps to the opposite side of the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the quadrants.",
          "workingLatex": "\\text{Branches in the 2nd and 4th quadrants}",
          "explanation": "Because the signs are reversed, the branches now sit in the top-left (second quadrant) and bottom-right (fourth quadrant).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the sketch.",
          "workingLatex": "\\text{Reflection of }y=\\tfrac{1}{x}\\text{ in the }x\\text{-axis}",
          "explanation": "The whole picture is the graph of $y=\\tfrac{1}{x}$ reflected in the $x$-axis, keeping the same asymptotes but occupying the other two quadrants.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes $x=0$ and $y=0$, no intercepts; the negative sign reflects $y=\\tfrac{1}{x}$ in the $x$-axis, placing the branches in the 2nd quadrant (for $x<0$) and the 4th quadrant (for $x>0$)."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "Sketch the curve $y=\\dfrac{1}{x^{2}}$, stating the equations of any asymptotes and any symmetry of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the type of curve.",
          "workingLatex": "y=\\dfrac{1}{x^{2}}",
          "explanation": "This is a reciprocal-squared curve. The squared denominator will affect the signs, so we treat it carefully rather than assuming it behaves like $y=\\tfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the vertical asymptote.",
          "workingLatex": "x=0",
          "explanation": "The curve is undefined when the denominator $x^{2}$ is zero, i.e. at $x=0$. Near there the fraction becomes enormous, giving a vertical asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the horizontal asymptote.",
          "workingLatex": "x\\to\\pm\\infty\\implies y\\to 0",
          "explanation": "For large $x$, $x^{2}$ is huge, so $\\tfrac{1}{x^{2}}$ is tiny. The curve flattens towards the $x$-axis, so $y=0$ is a horizontal asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the sign of $y$.",
          "workingLatex": "x^{2}>0\\Rightarrow y>0\\ \\text{for all }x\\neq 0",
          "explanation": "A square is always positive, so $\\tfrac{1}{x^{2}}$ is positive everywhere it is defined. Both branches therefore lie above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test for symmetry.",
          "workingLatex": "\\dfrac{1}{(-x)^{2}}=\\dfrac{1}{x^{2}}",
          "explanation": "Replacing $x$ with $-x$ leaves the equation unchanged, so the curve is symmetric about the $y$-axis: the left and right branches are mirror images.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check for intercepts.",
          "workingLatex": "\\dfrac{1}{x^{2}}=0\\ \\text{has no solution}",
          "explanation": "The fraction is never zero, and $x=0$ is excluded, so the curve has no intercepts with either axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the sketch.",
          "workingLatex": "\\text{Two branches above the }x\\text{-axis, either side of }x=0",
          "explanation": "Both branches sit in the upper half, one to the left and one to the right of the $y$-axis, each rising steeply near $x=0$ and flattening towards $y=0$ far out.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes $x=0$ and $y=0$, no intercepts; $y>0$ everywhere so both branches lie above the $x$-axis, and the curve is symmetric about the $y$-axis."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "Sketch the curve $y=\\dfrac{3}{x^{2}}$, stating any asymptotes and comparing it with $y=\\dfrac{1}{x^{2}}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the type of curve.",
          "workingLatex": "y=\\dfrac{3}{x^{2}}",
          "explanation": "This is a reciprocal-squared curve with a factor of $3$ on top. The $3$ scales the outputs but does not change the basic shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the asymptotes.",
          "workingLatex": "x=0,\\quad y=0",
          "explanation": "The denominator $x^{2}$ is zero only at $x=0$, giving the vertical asymptote, and the fraction shrinks to $0$ for large $x$, giving the horizontal asymptote $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the sign of $y$.",
          "workingLatex": "x^{2}>0\\Rightarrow y>0\\ \\text{for all }x\\neq 0",
          "explanation": "Since $x^{2}$ is always positive and the numerator $3$ is positive, $y$ is positive everywhere. Both branches lie above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test for symmetry.",
          "workingLatex": "\\dfrac{3}{(-x)^{2}}=\\dfrac{3}{x^{2}}",
          "explanation": "Swapping $x$ for $-x$ leaves the equation the same, so the curve is symmetric about the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with $y=\\tfrac{1}{x^{2}}$.",
          "workingLatex": "\\dfrac{3}{x^{2}}=3\\left(\\dfrac{1}{x^{2}}\\right)",
          "explanation": "Each output is three times larger than for $y=\\tfrac{1}{x^{2}}$, so this is a vertical stretch by scale factor $3$. The branches sit higher above the axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a sample point.",
          "workingLatex": "x=1:\\ y=\\dfrac{3}{1}=3\\ \\text{(against }y=1\\text{)}",
          "explanation": "At $x=1$ this curve passes through $(1,3)$ while $y=\\tfrac{1}{x^{2}}$ passes through $(1,1)$, confirming the stretch by factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the sketch.",
          "workingLatex": "\\text{Two branches above the }x\\text{-axis, symmetric in the }y\\text{-axis}",
          "explanation": "The picture matches $y=\\tfrac{1}{x^{2}}$ (both branches above the $x$-axis, mirror images in the $y$-axis) but stretched vertically, so each branch is three times as high for the same $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes $x=0$ and $y=0$; $y>0$ everywhere so both branches lie above the $x$-axis, symmetric about the $y$-axis. It is $y=\\tfrac{1}{x^{2}}$ stretched vertically by factor $3$ (e.g. through $(1,3)$ instead of $(1,1)$)."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "repeated-root"
    ],
    "questionText": "The curve has equation $y=(x-1)^{2}(x+2)$. State where the curve touches the $x$-axis and where it crosses the $x$-axis, and explain why the squared factor gives a touch.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the roots.",
          "workingLatex": "(x-1)^{2}(x+2)=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. Since the expression is already factorised, we set each factor equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$.",
          "workingLatex": "x=1\\ (\\text{repeated}),\\quad x=-2",
          "explanation": "The factor $(x-1)^{2}$ gives a repeated root at $x=1$, while $(x+2)$ gives a single root at $x=-2$. The repeat is what changes the behaviour there.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the repeated root.",
          "workingLatex": "(x-1)^{2}\\ge 0",
          "explanation": "A squared factor can never be negative, so near $x=1$ it does not change sign. The curve dips down to the axis and comes back the same side, producing a touch rather than a crossing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the single root.",
          "workingLatex": "(x+2)\\ \\text{changes sign at }x=-2",
          "explanation": "A single, unrepeated factor changes sign as $x$ passes through $-2$, so $y$ goes from negative to positive. That sign change means the curve crosses the axis there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the $y$-intercept.",
          "workingLatex": "(0-1)^{2}(0+2)=(1)(2)=2",
          "explanation": "Substituting $x=0$ locates where the curve meets the $y$-axis. This gives the point $(0,2)$, which helps position the sketch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the end behaviour.",
          "workingLatex": "\\text{cubic, positive leading term: } y\\to+\\infty\\ (x\\to+\\infty)",
          "explanation": "Expanding would give $x^{3}$ as the highest term, so for large positive $x$ the curve rises and for large negative $x$ it falls. This fixes the overall direction of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the sketch.",
          "workingLatex": "\\text{touch at }(1,0),\\ \\text{cross at }(-2,0),\\ y\\text{-intercept }(0,2)",
          "explanation": "The curve rises from bottom-left, crosses at $x=-2$, passes through $(0,2)$, comes down to just touch the axis at $x=1$, then rises again to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve touches the $x$-axis at $(1,0)$ because of the squared factor $(x-1)^{2}$, which does not change sign, and crosses the $x$-axis at $(-2,0)$ where the single factor $(x+2)$ changes sign; the $y$-intercept is $(0,2)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "repeated-root"
    ],
    "questionText": "The curve has equation $y=(x+3)(x-2)^{2}$. Identify the point where the curve touches the $x$-axis and the point where it crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the roots.",
          "workingLatex": "(x+3)(x-2)^{2}=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. As the expression is factorised, we set each factor to zero to read off the roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$.",
          "workingLatex": "x=-3,\\quad x=2\\ (\\text{repeated})",
          "explanation": "The single factor $(x+3)$ gives $x=-3$, and the squared factor $(x-2)^{2}$ gives a repeated root at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the repeated root.",
          "workingLatex": "(x-2)^{2}\\ge 0",
          "explanation": "The squared factor stays non-negative, so near $x=2$ it does not change sign. The curve meets the axis and turns back on the same side, giving a touch at $(2,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the single root.",
          "workingLatex": "(x+3)\\ \\text{changes sign at }x=-3",
          "explanation": "A single factor changes sign as $x$ passes $-3$, so $y$ swaps from negative to positive. The curve therefore crosses the axis at $(-3,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the $y$-intercept.",
          "workingLatex": "(0+3)(0-2)^{2}=(3)(4)=12",
          "explanation": "Setting $x=0$ gives the $y$-axis crossing at $(0,12)$, a useful anchor point for the sketch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the end behaviour.",
          "workingLatex": "\\text{cubic, positive leading term: } y\\to+\\infty\\ (x\\to+\\infty)",
          "explanation": "The highest-power term is $x^{3}$ with a positive coefficient, so the curve falls from bottom-left and rises to top-right overall.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the sketch.",
          "workingLatex": "\\text{cross at }(-3,0),\\ \\text{touch at }(2,0),\\ y\\text{-intercept }(0,12)",
          "explanation": "The curve rises from bottom-left, crosses at $x=-3$, climbs through $(0,12)$, then comes down to just touch the axis at $x=2$ before rising again.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve crosses the $x$-axis at $(-3,0)$ (single factor) and touches the $x$-axis at $(2,0)$ (repeated factor $(x-2)^{2}$); the $y$-intercept is $(0,12)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "repeated-root"
    ],
    "questionText": "Find the coordinates of the $y$-intercept of the curve $y=(x-1)^{2}(x+4)$ and describe the shape of the curve near $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set $x=0$ for the $y$-intercept.",
          "workingLatex": "y=(0-1)^{2}(0+4)",
          "explanation": "The $y$-intercept is where the curve meets the $y$-axis, and every point on that axis has $x=0$, so we substitute $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the brackets.",
          "workingLatex": "y=(-1)^{2}(4)",
          "explanation": "Working out each bracket first keeps the arithmetic tidy: $0-1=-1$ and $0+4=4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the value.",
          "workingLatex": "y=(1)(4)=4",
          "explanation": "Squaring $-1$ gives $1$, and multiplying by $4$ gives $4$. So the $y$-intercept is at $(0,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the root at $x=1$.",
          "workingLatex": "(x-1)^{2}=0\\Rightarrow x=1",
          "explanation": "The factor $(x-1)^{2}$ is zero at $x=1$, so the curve meets the $x$-axis there. Being squared, this is a repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the shape at $x=1$.",
          "workingLatex": "(x-1)^{2}\\ge 0",
          "explanation": "Because the squared factor never becomes negative, the curve does not change sign at $x=1$. It comes down to the axis and turns back on the same side, so it touches rather than crosses.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result.",
          "workingLatex": "\\text{Touch at }(1,0),\\ y\\text{-intercept }(0,4)",
          "explanation": "So the curve just kisses the $x$-axis at $x=1$ (a turning point on the axis) and passes through $(0,4)$ on the $y$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $y$-intercept is $(0,4)$; near $x=1$ the repeated factor $(x-1)^{2}$ makes the curve touch the $x$-axis at $(1,0)$ (a turning point) rather than cross it."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "repeated-root"
    ],
    "questionText": "State how many distinct real roots the curve $y=x(x-2)^{2}$ has, and explain your reasoning.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set $y=0$ to find the roots.",
          "workingLatex": "x(x-2)^{2}=0",
          "explanation": "The real roots are the $x$-values where the curve meets the $x$-axis, i.e. where $y=0$. The factorised form lets us read them off directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve each factor.",
          "workingLatex": "x=0\\quad\\text{or}\\quad (x-2)^{2}=0",
          "explanation": "A product is zero when one of its factors is zero, so we consider each factor separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the $x$-values.",
          "workingLatex": "x=0,\\quad x=2\\ (\\text{repeated})",
          "explanation": "The factor $x$ gives $x=0$, and $(x-2)^{2}$ gives $x=2$ twice. Although $x=2$ appears twice algebraically, it is still a single location on the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the distinct values.",
          "workingLatex": "\\{0,\\ 2\\}",
          "explanation": "Distinct roots means how many different $x$-values occur. Here there are two different values: $0$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the repeated root.",
          "workingLatex": "x=2\\ \\text{counts once as a single point}",
          "explanation": "A repeated root is one place where the curve touches the axis, not two separate crossings. So it contributes just one distinct root even though its multiplicity is two.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "\\text{Number of distinct real roots}=2",
          "explanation": "Combining the crossing at $x=0$ and the touch at $x=2$, the curve has exactly two distinct real roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$ distinct real roots ($x=0$, where the curve crosses, and $x=2$, where the repeated factor makes it touch); the repeated root at $x=2$ counts once as a single point on the axis."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "repeated-root"
    ],
    "questionText": "Sketch the curve $y=(x+1)^{2}(x-1)^{2}$, stating where it meets the $x$-axis and its behaviour there.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the roots.",
          "workingLatex": "(x+1)^{2}(x-1)^{2}=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. We set each factor to zero to find these points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for $x$.",
          "workingLatex": "x=-1\\ (\\text{repeated}),\\quad x=1\\ (\\text{repeated})",
          "explanation": "Both factors are squared, so each gives a repeated root: one at $x=-1$ and one at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the repeated roots.",
          "workingLatex": "(x+1)^{2}\\ge 0,\\quad (x-1)^{2}\\ge 0",
          "explanation": "Each squared factor stays non-negative, so neither changes sign. The curve touches the axis at both $x=-1$ and $x=1$ rather than crossing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the sign of $y$.",
          "workingLatex": "y=\\big[(x+1)(x-1)\\big]^{2}=(x^{2}-1)^{2}\\ge 0",
          "explanation": "The product can be written as a single square, so $y$ is never negative. The whole curve lies on or above the $x$-axis, only touching it at the two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the $y$-intercept.",
          "workingLatex": "(0+1)^{2}(0-1)^{2}=(1)(1)=1",
          "explanation": "Substituting $x=0$ gives the point $(0,1)$, the peak between the two touch points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the end behaviour.",
          "workingLatex": "\\text{quartic, positive leading term: } y\\to+\\infty\\ (x\\to\\pm\\infty)",
          "explanation": "The highest term is $x^{4}$ with a positive coefficient, so both ends of the curve rise upwards. This is a positive quartic (a W-like shape here).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the sketch.",
          "workingLatex": "\\text{touch at }(-1,0)\\text{ and }(1,0),\\ y\\text{-intercept }(0,1)",
          "explanation": "The curve comes down from the top-left to touch the axis at $x=-1$, rises to a local maximum at $(0,1)$, comes back down to touch at $x=1$, then rises again to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve touches the $x$-axis at $(-1,0)$ and $(1,0)$ (both repeated roots), stays on or above the axis since $y=(x^{2}-1)^{2}\\ge 0$, passes through $(0,1)$, and rises to $+\\infty$ at both ends as a positive quartic."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "For the curve $y=\\dfrac{4}{x}$, state the equations of its asymptotes and its two lines of symmetry.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the type of curve.",
          "workingLatex": "y=\\dfrac{4}{x}",
          "explanation": "This is a reciprocal curve with a positive numerator, so it has the same overall shape as $y=\\tfrac{1}{x}$ with branches in the 1st and 3rd quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the asymptotes.",
          "workingLatex": "x=0,\\quad y=0",
          "explanation": "The curve is undefined at $x=0$, giving the vertical asymptote, and flattens towards zero for large $x$, giving the horizontal asymptote $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test symmetry in $y=x$.",
          "workingLatex": "x=\\dfrac{4}{y}\\ \\Rightarrow\\ y=\\dfrac{4}{x}",
          "explanation": "Swapping $x$ and $y$ (reflecting in the line $y=x$) returns the same equation, so the curve is unchanged by that reflection. Hence $y=x$ is a line of symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test symmetry in $y=-x$.",
          "workingLatex": "-x=\\dfrac{4}{-y}\\ \\Rightarrow\\ y=\\dfrac{4}{x}",
          "explanation": "Reflecting in $y=-x$ replaces $x$ with $-y$ and $y$ with $-x$; simplifying returns the original equation, so $y=-x$ is also a line of symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the quadrants.",
          "workingLatex": "x>0\\Rightarrow y>0,\\quad x<0\\Rightarrow y<0",
          "explanation": "Since $4$ is positive, $y$ shares the sign of $x$, so the branches sit in the 1st and 3rd quadrants, consistent with symmetry about $y=x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result.",
          "workingLatex": "\\text{Asymptotes }x=0,\\ y=0;\\ \\text{symmetry }y=x,\\ y=-x",
          "explanation": "Collecting everything, the curve has asymptotes along both axes and is symmetric about the diagonals $y=x$ and $y=-x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes: $x=0$ and $y=0$. Lines of symmetry: $y=x$ and $y=-x$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "factorising",
      "difference-of-squares"
    ],
    "questionText": "Factorise fully and hence sketch the curve $y=x^{3}-4x$. On your sketch show clearly the coordinates of every point where the curve meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the type of curve.",
          "workingLatex": "y=x^{3}-4x",
          "explanation": "The highest power is $x^{3}$ with a positive coefficient, so this is a positive cubic. Knowing this fixes the overall shape before we do any algebra: it will fall away to the bottom-left and rise to the top-right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take out the common factor.",
          "workingLatex": "y=x(x^{2}-4)",
          "explanation": "Every term contains an $x$, so factoring one out is always the first move. It immediately reveals $x=0$ as a root and leaves a simpler quadratic to deal with.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the difference of two squares.",
          "workingLatex": "y=x(x-2)(x+2)",
          "explanation": "The bracket $x^{2}-4$ is $x^{2}-2^{2}$, a difference of two squares, which always splits as $(x-2)(x+2)$. The curve is now fully factorised.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set $y=0$ to find the roots.",
          "workingLatex": "x(x-2)(x+2)=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. A product is zero exactly when one of its factors is zero, so each bracket gives a root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the roots.",
          "workingLatex": "x=-2,\\;x=0,\\;x=2",
          "explanation": "Setting each factor to zero gives the three $x$-intercepts. These evenly-spread roots tell us the curve weaves across the axis three times.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a root by substitution.",
          "workingLatex": "(2)^{3}-4(2)=8-8=0",
          "explanation": "Substituting $x=2$ back into the original expression returns $0$, confirming the factorisation is correct and no arithmetic slipped through.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0\\Rightarrow y=0",
          "explanation": "Putting $x=0$ shows the curve passes through the origin, so here the $y$-intercept coincides with the middle root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decide cross or touch at each root.",
          "workingLatex": "\\text{three single (linear) factors}\\Rightarrow\\text{curve crosses at each root}",
          "explanation": "Each factor appears to the power one, so the curve changes sign at every root and therefore cuts straight through the axis rather than bouncing off it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the end behaviour.",
          "workingLatex": "x\\to\\infty,\\;y\\to\\infty;\\qquad x\\to-\\infty,\\;y\\to-\\infty",
          "explanation": "For large $|x|$ the $x^{3}$ term dominates, so the ends follow a positive cubic: down on the far left, up on the far right.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assemble the sketch.",
          "workingLatex": "(-2,0),\\;(0,0),\\;(2,0)",
          "explanation": "Rising from the bottom-left, the curve crosses at $x=-2$, turns at a local maximum, comes down through the origin, dips to a local minimum, then crosses at $x=2$ and rises to the top-right. Mark $(-2,0)$, $(0,0)$ and $(2,0)$ on the axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "A positive cubic crossing the $x$-axis at $(-2,0)$, $(0,0)$ and $(2,0)$ and passing through the origin: it rises from the bottom-left to a local maximum between $x=-2$ and $0$, falls through the origin to a local minimum between $x=0$ and $2$, then rises to the top-right ($x\\to-\\infty,\\;y\\to-\\infty$ and $x\\to\\infty,\\;y\\to\\infty$)."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "factorising"
    ],
    "questionText": "Factorise fully and hence sketch the curve $y=x^{3}-x^{2}-6x$, showing the coordinates of all points where it meets the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of curve.",
          "workingLatex": "y=x^{3}-x^{2}-6x",
          "explanation": "The leading term $x^{3}$ has a positive coefficient, so the graph is a positive cubic that ultimately falls to the bottom-left and rises to the top-right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take out the common factor $x$.",
          "workingLatex": "y=x(x^{2}-x-6)",
          "explanation": "Each term shares a factor of $x$; removing it gives one root immediately and leaves an easy quadratic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic.",
          "workingLatex": "y=x(x-3)(x+2)",
          "explanation": "We need two numbers multiplying to $-6$ and adding to $-1$; those are $-3$ and $+2$, giving $(x-3)(x+2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set $y=0$ to find the roots.",
          "workingLatex": "x(x-3)(x+2)=0",
          "explanation": "The curve meets the $x$-axis where $y=0$, and a product vanishes only when one factor is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the roots.",
          "workingLatex": "x=-2,\\;x=0,\\;x=3",
          "explanation": "Each factor set to zero gives one $x$-intercept, so the curve cuts the axis at three separate points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a root.",
          "workingLatex": "(3)^{3}-(3)^{2}-6(3)=27-9-18=0",
          "explanation": "Substituting $x=3$ into the original cubic gives $0$, confirming the factorisation expands back correctly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0\\Rightarrow y=0",
          "explanation": "With no constant term the curve passes through the origin, so the $y$-intercept sits at $(0,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decide cross or touch.",
          "workingLatex": "\\text{all factors linear}\\Rightarrow\\text{crosses at each root}",
          "explanation": "Every factor is to the first power, so the curve changes sign at each root and passes straight through the axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the end behaviour.",
          "workingLatex": "x\\to-\\infty,\\;y\\to-\\infty;\\qquad x\\to\\infty,\\;y\\to\\infty",
          "explanation": "For large $|x|$ the cubic term controls the sign, giving the standard positive-cubic ends.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assemble the sketch.",
          "workingLatex": "(-2,0),\\;(0,0),\\;(3,0)",
          "explanation": "Coming up from the bottom-left the curve crosses at $x=-2$, rises to a local maximum, falls through the origin to a local minimum, then crosses at $x=3$ and heads to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "A positive cubic through the origin crossing the $x$-axis at $(-2,0)$, $(0,0)$ and $(3,0)$: up from the bottom-left to a local maximum between $x=-2$ and $0$, down through the origin to a local minimum between $x=0$ and $3$, then up to the top-right."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "factorising"
    ],
    "questionText": "Factorise fully and hence sketch the curve $y=x^{3}+2x^{2}-3x$, indicating where the curve meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of curve.",
          "workingLatex": "y=x^{3}+2x^{2}-3x",
          "explanation": "A positive $x^{3}$ coefficient means a positive cubic, so we already expect a bottom-left to top-right shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take out the common factor $x$.",
          "workingLatex": "y=x(x^{2}+2x-3)",
          "explanation": "All three terms contain $x$, so extracting it exposes one root and leaves a quadratic to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic.",
          "workingLatex": "y=x(x+3)(x-1)",
          "explanation": "Two numbers multiplying to $-3$ and adding to $+2$ are $+3$ and $-1$, giving $(x+3)(x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set $y=0$ for the roots.",
          "workingLatex": "x(x+3)(x-1)=0",
          "explanation": "The $x$-intercepts occur where $y=0$; a product is zero only when a factor is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the roots.",
          "workingLatex": "x=-3,\\;x=0,\\;x=1",
          "explanation": "Each factor gives one root, so the curve meets the axis at three distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a root.",
          "workingLatex": "(-3)^{3}+2(-3)^{2}-3(-3)=-27+18+9=0",
          "explanation": "Substituting $x=-3$ returns $0$, confirming the factorisation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0\\Rightarrow y=0",
          "explanation": "There is no constant term, so the curve passes through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decide cross or touch.",
          "workingLatex": "\\text{three single roots}\\Rightarrow\\text{crosses at each}",
          "explanation": "Each linear factor appears once, so the curve changes sign and cuts through the axis at every root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the end behaviour.",
          "workingLatex": "x\\to-\\infty,\\;y\\to-\\infty;\\qquad x\\to\\infty,\\;y\\to\\infty",
          "explanation": "The cubic term dominates for large $|x|$, giving the usual positive-cubic ends.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assemble the sketch.",
          "workingLatex": "(-3,0),\\;(0,0),\\;(1,0)",
          "explanation": "From the bottom-left the curve crosses at $x=-3$, rises to a local maximum, falls through the origin to a local minimum, then crosses at $x=1$ and rises to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "A positive cubic through the origin crossing at $(-3,0)$, $(0,0)$ and $(1,0)$: it rises from the bottom-left to a local maximum, falls through the origin to a local minimum between $x=0$ and $1$, then rises to the top-right."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "factorising",
      "factor-theorem",
      "repeated-root"
    ],
    "questionText": "Show that $(x-1)$ is a factor of $x^{3}-3x+2$, factorise the expression fully, and hence sketch the curve $y=x^{3}-3x+2$, describing carefully what happens at the repeated root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of curve.",
          "workingLatex": "y=x^{3}-3x+2",
          "explanation": "The positive $x^{3}$ term tells us this is a positive cubic, falling to the bottom-left and rising to the top-right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test $x=1$ with the factor theorem.",
          "workingLatex": "f(1)=1-3+2=0",
          "explanation": "The factor theorem says $(x-1)$ is a factor precisely when $f(1)=0$. Since it evaluates to zero, $(x-1)$ divides the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide out the factor $(x-1)$.",
          "workingLatex": "x^{3}-3x+2=(x-1)(x^{2}+x-2)",
          "explanation": "Dividing the cubic by $(x-1)$ leaves a quadratic, which we can factorise further to reveal the remaining roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}+x-2=(x+2)(x-1)",
          "explanation": "Numbers multiplying to $-2$ and adding to $+1$ are $+2$ and $-1$. Notice $(x-1)$ appears again, signalling a repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the full factorisation.",
          "workingLatex": "y=(x-1)^{2}(x+2)",
          "explanation": "Collecting the two $(x-1)$ factors gives a squared factor, which controls how the curve behaves at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by substitution.",
          "workingLatex": "(-2)^{3}-3(-2)+2=-8+6+2=0",
          "explanation": "Substituting $x=-2$ returns $0$, confirming the factorisation is consistent with the original cubic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the roots and $y$-intercept.",
          "workingLatex": "x=1\\;(\\text{repeated}),\\;x=-2;\\quad y(0)=2",
          "explanation": "The squared factor gives a repeated root at $x=1$, the linear factor a single root at $x=-2$, and setting $x=0$ gives the $y$-intercept $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the repeated root.",
          "workingLatex": "(x-1)^{2}\\ge 0\\Rightarrow\\text{curve touches the axis at }x=1",
          "explanation": "A squared factor cannot change sign, so near $x=1$ the curve stays on one side of the axis and just touches it, forming a turning point on the axis rather than crossing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the behaviour at the single root.",
          "workingLatex": "\\text{single factor }(x+2)\\Rightarrow\\text{crosses at }x=-2",
          "explanation": "At $x=-2$ the factor is linear, so the curve changes sign there and cuts straight through the axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the end behaviour.",
          "workingLatex": "x\\to-\\infty,\\;y\\to-\\infty;\\qquad x\\to\\infty,\\;y\\to\\infty",
          "explanation": "For large $|x|$ the cubic term dominates, giving the standard positive-cubic ends.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assemble the sketch.",
          "workingLatex": "\\text{cross }(-2,0),\\;\\text{touch }(1,0),\\;\\text{through }(0,2)",
          "explanation": "From the bottom-left the curve crosses at $(-2,0)$, rises to a local maximum, then comes down to just touch the axis at $(1,0)$ as a local minimum before rising to the top-right; it passes through $(0,2)$ on the way.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x-1)^{2}(x+2)$: a positive cubic that crosses the $x$-axis at $(-2,0)$ and touches it at $(1,0)$ (the repeated root gives a turning point resting on the axis). It passes through $(0,2)$, rises from the bottom-left to a local maximum, dips to touch at $(1,0)$, then rises to the top-right."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "factor-theorem",
      "repeated-root"
    ],
    "questionText": "Use the factor theorem to find a root of $x^{3}-3x^{2}+4$, factorise the expression fully, and hence sketch the curve $y=x^{3}-3x^{2}+4$, describing what happens at the repeated root.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of curve.",
          "workingLatex": "y=x^{3}-3x^{2}+4",
          "explanation": "The positive coefficient of $x^{3}$ marks this as a positive cubic, so the ends run from bottom-left to top-right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Search for a root with the factor theorem.",
          "workingLatex": "f(-1)=(-1)^{3}-3(-1)^{2}+4=-1-3+4=0",
          "explanation": "We test small integer values that divide the constant $4$. Since $f(-1)=0$, the factor theorem guarantees $(x+1)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide out $(x+1)$.",
          "workingLatex": "x^{3}-3x^{2}+4=(x+1)(x^{2}-4x+4)",
          "explanation": "Dividing by the known factor reduces the cubic to a quadratic, which we can then factorise to find the other roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}-4x+4=(x-2)^{2}",
          "explanation": "This is a perfect square, since $-2$ and $-2$ multiply to $+4$ and add to $-4$. The squared factor flags a repeated root at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the full factorisation.",
          "workingLatex": "y=(x+1)(x-2)^{2}",
          "explanation": "The completed form shows a single factor $(x+1)$ and a squared factor $(x-2)^{2}$, which together dictate the shape.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify by expansion check.",
          "workingLatex": "(x+1)(x-2)^{2}=x^{3}-3x^{2}+4",
          "explanation": "Expanding the factorised form returns the original cubic, confirming no error crept into the division.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State roots and $y$-intercept.",
          "workingLatex": "x=-1,\\;x=2\\;(\\text{repeated});\\quad y(0)=4",
          "explanation": "The single factor gives $x=-1$, the squared factor a repeated root at $x=2$, and $x=0$ gives the $y$-intercept $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the repeated root.",
          "workingLatex": "(x-2)^{2}\\ge 0\\Rightarrow\\text{curve touches the axis at }x=2",
          "explanation": "Because a square never changes sign, the curve stays on one side near $x=2$ and only touches the axis there, giving a turning point resting on it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Behaviour at the single root.",
          "workingLatex": "(x+1)\\Rightarrow\\text{crosses at }x=-1",
          "explanation": "The linear factor makes the curve change sign at $x=-1$, so it cuts straight through the axis there.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the end behaviour.",
          "workingLatex": "x\\to-\\infty,\\;y\\to-\\infty;\\qquad x\\to\\infty,\\;y\\to\\infty",
          "explanation": "The $x^{3}$ term controls large $|x|$, giving the standard positive-cubic ends.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assemble the sketch.",
          "workingLatex": "\\text{cross }(-1,0),\\;\\text{touch }(2,0),\\;\\text{through }(0,4)",
          "explanation": "From the bottom-left the curve crosses at $(-1,0)$, rises to a local maximum at $(0,4)$, then falls to touch the axis at $(2,0)$ as a local minimum before rising to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x+1)(x-2)^{2}$: a positive cubic crossing the $x$-axis at $(-1,0)$ and touching it at $(2,0)$ (repeated root gives a turning point on the axis). It passes through $(0,4)$ as a local maximum, dips to touch at $(2,0)$, then rises to the top-right."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "factor-theorem",
      "coordinates"
    ],
    "questionText": "Factorise $x^{3}-7x+6$ fully and hence sketch the curve $y=x^{3}-7x+6$. Give the coordinates of every point where the curve meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of curve.",
          "workingLatex": "y=x^{3}-7x+6",
          "explanation": "The positive $x^{3}$ coefficient makes this a positive cubic, so we expect a bottom-left to top-right shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find a root with the factor theorem.",
          "workingLatex": "f(1)=1-7+6=0",
          "explanation": "Testing factors of the constant $6$, we find $f(1)=0$, so $(x-1)$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide out $(x-1)$.",
          "workingLatex": "x^{3}-7x+6=(x-1)(x^{2}+x-6)",
          "explanation": "Removing the known factor leaves a quadratic whose roots we can find directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}+x-6=(x+3)(x-2)",
          "explanation": "Numbers multiplying to $-6$ and adding to $+1$ are $+3$ and $-2$, giving the remaining two roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the full factorisation.",
          "workingLatex": "y=(x-1)(x+3)(x-2)",
          "explanation": "Three distinct linear factors mean three separate crossing points on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a root.",
          "workingLatex": "(-3)^{3}-7(-3)+6=-27+21+6=0",
          "explanation": "Substituting $x=-3$ returns $0$, confirming the factorisation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the $x$-intercepts as coordinates.",
          "workingLatex": "(-3,0),\\;(1,0),\\;(2,0)",
          "explanation": "Each factor set to zero gives a root, and each root is a point on the $x$-axis where $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the $y$-intercept as a coordinate.",
          "workingLatex": "x=0\\Rightarrow y=6\\;\\Rightarrow\\;(0,6)",
          "explanation": "Setting $x=0$ leaves the constant term, so the curve meets the $y$-axis at $(0,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decide cross or touch.",
          "workingLatex": "\\text{three single roots}\\Rightarrow\\text{crosses at each}",
          "explanation": "Every factor is linear, so the curve changes sign at each root and passes straight through the axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the end behaviour.",
          "workingLatex": "x\\to-\\infty,\\;y\\to-\\infty;\\qquad x\\to\\infty,\\;y\\to\\infty",
          "explanation": "The cubic term dominates for large $|x|$, giving the usual positive-cubic ends.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assemble the sketch.",
          "workingLatex": "\\text{through }(-3,0),\\,(0,6),\\,(1,0),\\,(2,0)",
          "explanation": "From the bottom-left the curve crosses at $(-3,0)$, rises past $(0,6)$ to a local maximum, falls to cross at $(1,0)$, dips to a local minimum, then crosses at $(2,0)$ and rises to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x-1)(x+3)(x-2)$; axis intercepts $(-3,0)$, $(1,0)$, $(2,0)$ and $(0,6)$. A positive cubic crossing at all three roots: up from the bottom-left through $(0,6)$ to a local maximum, down across $(1,0)$ to a local minimum, then up across $(2,0)$ to the top-right."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "factorising",
      "cubic"
    ],
    "questionText": "Factorise fully and hence sketch the curve $y=-x^{3}+4x^{2}-3x$. Explain clearly how the negative leading coefficient affects the end behaviour of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of curve.",
          "workingLatex": "y=-x^{3}+4x^{2}-3x",
          "explanation": "The leading term is $-x^{3}$, so this is a negative cubic. Its ends are the reflection of a positive cubic: up on the far left and down on the far right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take out the common factor $-x$.",
          "workingLatex": "y=-x(x^{2}-4x+3)",
          "explanation": "Factoring out $-x$ keeps the remaining quadratic in a tidy positive form, making it easier to factorise, and immediately reveals a root at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic.",
          "workingLatex": "y=-x(x-1)(x-3)",
          "explanation": "Numbers multiplying to $+3$ and adding to $-4$ are $-1$ and $-3$, giving $(x-1)(x-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set $y=0$ for the roots.",
          "workingLatex": "-x(x-1)(x-3)=0",
          "explanation": "The overall factor $-1$ does not affect where $y=0$; the intercepts still come from the bracketed factors.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the roots.",
          "workingLatex": "x=0,\\;x=1,\\;x=3",
          "explanation": "Each factor gives a root, so the curve meets the $x$-axis at three distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a root.",
          "workingLatex": "-(1)^{3}+4(1)^{2}-3(1)=-1+4-3=0",
          "explanation": "Substituting $x=1$ into the original expression gives $0$, confirming the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0\\Rightarrow y=0",
          "explanation": "There is no constant term, so the curve passes through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decide cross or touch.",
          "workingLatex": "\\text{three single roots}\\Rightarrow\\text{crosses at each}",
          "explanation": "All factors are linear, so the curve changes sign at each root and cuts through the axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the end behaviour.",
          "workingLatex": "x\\to-\\infty,\\;y\\to\\infty;\\qquad x\\to\\infty,\\;y\\to-\\infty",
          "explanation": "For large $|x|$ the $-x^{3}$ term dominates. When $x$ is large and negative, $-x^{3}$ is large and positive; when $x$ is large and positive, $-x^{3}$ is large and negative. The graph therefore starts high on the left and ends low on the right, opposite to a positive cubic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assemble the sketch.",
          "workingLatex": "\\text{cross at }(0,0),\\,(1,0),\\,(3,0)",
          "explanation": "From the top-left the curve falls, crosses at the origin, dips to a local minimum, rises to cross at $(1,0)$ up to a local maximum, then falls to cross at $(3,0)$ and continues down to the bottom-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-x(x-1)(x-3)$: a negative cubic crossing the $x$-axis at $(0,0)$, $(1,0)$ and $(3,0)$. Because the leading coefficient is negative the ends are reversed: $x\\to-\\infty,\\;y\\to\\infty$ (starts top-left) and $x\\to\\infty,\\;y\\to-\\infty$ (ends bottom-right), weaving through the three roots between."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "factorising",
      "quartic"
    ],
    "questionText": "Factorise fully and hence sketch the curve $y=x^{4}-5x^{2}+4$, showing the coordinates where it meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of curve.",
          "workingLatex": "y=x^{4}-5x^{2}+4",
          "explanation": "The highest power is $x^{4}$ with a positive coefficient, so this is a positive quartic: both ends rise upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Treat it as a quadratic in $x^{2}$.",
          "workingLatex": "y=(x^{2})^{2}-5(x^{2})+4",
          "explanation": "Writing the quartic in terms of $x^{2}$ lets us factorise it like an ordinary quadratic, a standard technique for these even-power expressions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic in $x^{2}$.",
          "workingLatex": "y=(x^{2}-1)(x^{2}-4)",
          "explanation": "Numbers multiplying to $+4$ and adding to $-5$ are $-1$ and $-4$, giving these two brackets.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise each difference of two squares.",
          "workingLatex": "y=(x-1)(x+1)(x-2)(x+2)",
          "explanation": "Both brackets are differences of two squares, so each splits into two linear factors, revealing four roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the roots.",
          "workingLatex": "x=-2,\\;x=-1,\\;x=1,\\;x=2",
          "explanation": "Each linear factor gives a root, so the curve meets the $x$-axis at four symmetric points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify a root.",
          "workingLatex": "(2)^{4}-5(2)^{2}+4=16-20+4=0",
          "explanation": "Substituting $x=2$ returns $0$, confirming the factorisation expands back to the original quartic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0\\Rightarrow y=4\\;\\Rightarrow\\;(0,4)",
          "explanation": "Setting $x=0$ leaves the constant term, so the curve crosses the $y$-axis at $(0,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Decide cross or touch.",
          "workingLatex": "\\text{four single roots}\\Rightarrow\\text{crosses at each}",
          "explanation": "Every factor is linear, so the curve changes sign at each root and cuts through the axis four times.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the end behaviour.",
          "workingLatex": "x\\to\\pm\\infty,\\;y\\to\\infty",
          "explanation": "For large $|x|$ the $x^{4}$ term dominates and is positive on both sides, so both ends of the curve rise upward.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assemble the sketch.",
          "workingLatex": "\\text{cross at }(-2,0),(-1,0),(1,0),(2,0);\\;\\text{through }(0,4)",
          "explanation": "A symmetric W-shape: down from the top-left to cross at $x=-2$, up to a local maximum, down to cross at $x=-1$, up over $(0,4)$ as a central local maximum, down to cross at $x=1$, and by symmetry back up through $x=2$ to the top-right, with local minima between $-2,-1$ and between $1,2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x-1)(x+1)(x-2)(x+2)$: a positive quartic crossing the $x$-axis at $(-2,0)$, $(-1,0)$, $(1,0)$, $(2,0)$ and the $y$-axis at $(0,4)$. A symmetric W-shape with both ends rising ($x\\to\\pm\\infty,\\;y\\to\\infty$), two local minima and a central local maximum at $(0,4)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "factorising",
      "repeated-root"
    ],
    "questionText": "Sketch the curve $y=x(x-2)^{2}$, describing clearly the behaviour of the curve at $x=0$ and at $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of curve.",
          "workingLatex": "y=x(x-2)^{2}",
          "explanation": "Multiplying out the leading terms gives $x\\cdot x^{2}=x^{3}$ with a positive coefficient, so the curve is a positive cubic running bottom-left to top-right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the factors.",
          "workingLatex": "y=x\\,(x-2)^{2}",
          "explanation": "The expression is already factorised: a single factor $x$ and a squared factor $(x-2)^{2}$, which will behave differently on the axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $y=0$ for the roots.",
          "workingLatex": "x(x-2)^{2}=0",
          "explanation": "The curve meets the $x$-axis where the product is zero, i.e. where a factor is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the roots.",
          "workingLatex": "x=0\\;\\text{(single)},\\;x=2\\;\\text{(repeated)}",
          "explanation": "The single factor gives a root at $x=0$; the squared factor gives a repeated root at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a root.",
          "workingLatex": "y(2)=2(2-2)^{2}=2\\times 0=0",
          "explanation": "Substituting $x=2$ gives $0$, confirming $x=2$ is indeed a root of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0\\Rightarrow y=0",
          "explanation": "With a factor of $x$ present, the curve passes through the origin, so the $y$-intercept is $(0,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the behaviour at $x=0$.",
          "workingLatex": "\\text{single factor }x\\Rightarrow\\text{crosses at the origin}",
          "explanation": "At $x=0$ the factor is linear, so the curve changes sign and cuts straight through the axis at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the behaviour at $x=2$.",
          "workingLatex": "(x-2)^{2}\\ge 0\\Rightarrow\\text{touches the axis at }x=2",
          "explanation": "The squared factor cannot change sign, so near $x=2$ the curve stays on one side of the axis and just touches it, giving a turning point resting on the axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the end behaviour.",
          "workingLatex": "x\\to-\\infty,\\;y\\to-\\infty;\\qquad x\\to\\infty,\\;y\\to\\infty",
          "explanation": "For large $|x|$ the cubic term dominates, giving the standard positive-cubic ends.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assemble the sketch.",
          "workingLatex": "\\text{cross }(0,0),\\;\\text{touch }(2,0)",
          "explanation": "From the bottom-left the curve crosses at the origin, rises to a local maximum, comes back down to touch the axis at $(2,0)$ as a local minimum, then rises to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "A positive cubic that crosses the $x$-axis at the origin $(0,0)$ and touches it at $(2,0)$: up from the bottom-left through the origin to a local maximum, down to touch at $(2,0)$ (repeated root gives a turning point on the axis), then up to the top-right."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "factorising",
      "quartic",
      "repeated-root"
    ],
    "questionText": "Factorise fully and hence sketch the curve $y=x^{4}-4x^{3}$, describing carefully the behaviour of the curve at the repeated root $x=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the type of curve.",
          "workingLatex": "y=x^{4}-4x^{3}",
          "explanation": "The highest power is $x^{4}$ with a positive coefficient, so the curve is a positive quartic: for large $|x|$ both ends rise upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take out the common factor.",
          "workingLatex": "y=x^{3}(x-4)",
          "explanation": "Both terms share $x^{3}$, so factoring it out reveals the roots at once and shows the high multiplicity at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set $y=0$ for the roots.",
          "workingLatex": "x^{3}(x-4)=0",
          "explanation": "The curve meets the $x$-axis where the product is zero, so we read the roots straight from the factors.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the roots.",
          "workingLatex": "x=0\\;(\\text{triple}),\\;x=4\\;(\\text{single})",
          "explanation": "The factor $x^{3}$ gives a triple root at $x=0$; the factor $(x-4)$ gives a single root at $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify a root.",
          "workingLatex": "y(4)=4^{4}-4\\cdot 4^{3}=256-256=0",
          "explanation": "Substituting $x=4$ gives $0$, confirming $x=4$ is a genuine root of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0\\Rightarrow y=0",
          "explanation": "There is no constant term, so the curve passes through the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the behaviour at the triple root.",
          "workingLatex": "x^{3}\\text{ (odd power)}\\Rightarrow\\text{crosses at }x=0\\text{ but flattens}",
          "explanation": "An odd repeated factor makes the curve change sign, so it does cross the axis at $x=0$; but the cube flattens the curve there, creating a horizontal point of inflection like $y=x^{3}$ rather than a sharp crossing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the behaviour at $x=4$.",
          "workingLatex": "(x-4)\\Rightarrow\\text{crosses at }x=4",
          "explanation": "At $x=4$ the factor is linear, so the curve changes sign and cuts straight through the axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the end behaviour.",
          "workingLatex": "x\\to\\pm\\infty,\\;y\\to\\infty",
          "explanation": "For large $|x|$ the $x^{4}$ term dominates and is positive on both sides, so both ends rise upward.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Locate the region below the axis.",
          "workingLatex": "0<x<4\\Rightarrow x^{3}>0,\\;(x-4)<0\\Rightarrow y<0",
          "explanation": "Between the two roots the factors have opposite signs, so the curve dips below the axis, guaranteeing a local minimum there.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assemble the sketch.",
          "workingLatex": "\\text{flat crossing }(0,0),\\;\\text{cross }(4,0)",
          "explanation": "Coming down from the top-left, the curve flattens as it crosses the origin with a horizontal inflection, continues below the axis to a local minimum, then rises to cross at $(4,0)$ and climbs to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x^{3}(x-4)$: a positive quartic with both ends rising ($x\\to\\pm\\infty,\\;y\\to\\infty$). It crosses the $x$-axis at the origin with a horizontal point of inflection (the triple root flattens the curve there like $x^{3}$), dips below the axis to a local minimum for $0<x<4$, then crosses at $(4,0)$ and rises to the top-right."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intersections",
      "quadratic"
    ],
    "questionText": "Find the coordinates of the points where the curve $y=x^{2}$ meets the line $y=x+2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for a point of intersection.",
          "workingLatex": "y=x^{2}, \\quad y=x+2",
          "explanation": "At any point where the two graphs cross, they share the same $x$-coordinate and the same $y$-coordinate. So the values of $y$ must be equal there, which lets us set the two expressions for $y$ equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equate the two expressions for $y$.",
          "workingLatex": "x^{2}=x+2",
          "explanation": "Replacing $y$ in both equations by a single equal value removes $y$ and leaves one equation in $x$ that pins down the crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange into a quadratic equal to zero.",
          "workingLatex": "x^{2}-x-2=0",
          "explanation": "Collecting everything on one side gives the standard form $ax^{2}+bx+c=0$, which is the shape we can factorise or solve with the quadratic formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "(x-2)(x+1)=0",
          "explanation": "We look for two numbers that multiply to $-2$ and add to $-1$; these are $-2$ and $+1$, giving the factor pair above.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$.",
          "workingLatex": "x=2 \\;\\text{or}\\; x=-1",
          "explanation": "A product is zero only when one of its factors is zero, so each bracket set to zero gives an $x$-value where the graphs meet.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $y$ when $x=2$.",
          "workingLatex": "y=2+2=4",
          "explanation": "Substituting back into the line $y=x+2$ (the simpler equation) gives the matching height at this crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $y$ when $x=-1$.",
          "workingLatex": "y=-1+2=1",
          "explanation": "The same substitution for the second $x$-value gives the height of the other crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $(2,\\,4)$ satisfies $y=x^{2}$.",
          "workingLatex": "2^{2}=4 \\;\\checkmark",
          "explanation": "A genuine intersection point must lie on both graphs, so we confirm it also fits the curve equation, not just the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $(-1,\\,1)$ satisfies $y=x^{2}$.",
          "workingLatex": "(-1)^{2}=1 \\;\\checkmark",
          "explanation": "Testing the second point on the curve confirms our algebra produced points that truly lie on $y=x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the points of intersection.",
          "workingLatex": "(-1,\\,1),\\ (2,\\,4)",
          "explanation": "Both checks pass, so these are the two points where the parabola and line cross.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve and line meet at $(-1,\\,1)$ and $(2,\\,4)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intersections",
      "tangent"
    ],
    "questionText": "Show that the line $y=2x-1$ meets the parabola $y=x^{2}-2x+3$ at exactly one point, and find its coordinates. State what this tells you about the line and the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two expressions for $y$.",
          "workingLatex": "x^{2}-2x+3=2x-1",
          "explanation": "Where the line and curve meet they share the same $y$-value, so setting the expressions equal gives one equation in $x$ describing the meeting points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Move all terms to one side.",
          "workingLatex": "x^{2}-2x+3-2x+1=0",
          "explanation": "Bringing every term across leaves a quadratic equal to zero, ready to analyse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify.",
          "workingLatex": "x^{2}-4x+4=0",
          "explanation": "Combining the $x$-terms ($-2x-2x=-4x$) and the constants ($3+1=4$) gives a tidy quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the discriminant.",
          "workingLatex": "b^{2}-4ac=(-4)^{2}-4(1)(4)=16-16=0",
          "explanation": "The discriminant tells us how many real roots the quadratic has. A value of zero means exactly one repeated root, so the graphs meet at a single point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the discriminant.",
          "workingLatex": "b^{2}-4ac=0 \\;\\Rightarrow\\; \\text{one repeated root}",
          "explanation": "One repeated solution means the line touches the parabola without crossing it, so the line is a tangent to the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise to find the root.",
          "workingLatex": "(x-2)^{2}=0",
          "explanation": "The quadratic is a perfect square, which visibly confirms the single repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $x$.",
          "workingLatex": "x=2",
          "explanation": "Setting the repeated factor to zero gives the one $x$-coordinate of the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find $y$ using the line.",
          "workingLatex": "y=2(2)-1=3",
          "explanation": "Substituting $x=2$ into the line gives the height at which the two graphs touch.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the point lies on the parabola.",
          "workingLatex": "2^{2}-2(2)+3=4-4+3=3 \\;\\checkmark",
          "explanation": "Confirming $(2,\\,3)$ satisfies the curve as well as the line proves it is a true point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "(2,\\,3)",
          "explanation": "The line meets the parabola only at $(2,\\,3)$; because the root is repeated, the line is a tangent to the curve at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line touches the parabola at the single point $(2,\\,3)$, so it is a tangent to the curve there."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intersections",
      "cubic"
    ],
    "questionText": "Find the coordinates of all points of intersection of the curve $y=x^{3}$ and the line $y=4x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two expressions for $y$.",
          "workingLatex": "x^{3}=4x",
          "explanation": "At each intersection the cubic and the line have equal $y$-values, so we set the expressions equal to locate those $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to equal zero.",
          "workingLatex": "x^{3}-4x=0",
          "explanation": "We do not divide by $x$, because dividing could throw away the solution $x=0$. Instead we collect everything on one side to keep every root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take out the common factor.",
          "workingLatex": "x(x^{2}-4)=0",
          "explanation": "Each term contains $x$, so factoring it out is safe and preserves the root at $x=0$ that division would have lost.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the difference of two squares.",
          "workingLatex": "x(x-2)(x+2)=0",
          "explanation": "Since $x^{2}-4=x^{2}-2^{2}$ it splits as $(x-2)(x+2)$, giving three linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$.",
          "workingLatex": "x=0,\\ x=2,\\ x=-2",
          "explanation": "Setting each factor to zero gives the three $x$-coordinates where the graphs cross.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $y$ when $x=0$.",
          "workingLatex": "y=4(0)=0",
          "explanation": "Substituting into the line gives the height of the first crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $y$ when $x=2$.",
          "workingLatex": "y=4(2)=8",
          "explanation": "The same substitution gives the height of the second crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find $y$ when $x=-2$.",
          "workingLatex": "y=4(-2)=-8",
          "explanation": "Substituting the last $x$-value gives the height of the third crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $(2,\\,8)$ on the cubic.",
          "workingLatex": "2^{3}=8 \\;\\checkmark",
          "explanation": "Confirming the point lies on $y=x^{3}$ as well as the line verifies it is a genuine intersection.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check $(-2,\\,-8)$ on the cubic.",
          "workingLatex": "(-2)^{3}=-8 \\;\\checkmark",
          "explanation": "The odd power keeps the sign negative, matching the line's value, so this point checks out too.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the three points.",
          "workingLatex": "(-2,\\,-8),\\ (0,\\,0),\\ (2,\\,8)",
          "explanation": "All three points satisfy both equations, so these are the intersections of the cubic and the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve and line intersect at $(-2,\\,-8)$, $(0,\\,0)$ and $(2,\\,8)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intersections",
      "quadratic"
    ],
    "questionText": "The curve $y=x^{2}-3$ meets the line $y=2x$. Find the coordinates of the two points of intersection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two expressions for $y$.",
          "workingLatex": "x^{2}-3=2x",
          "explanation": "The graphs cross where their $y$-values agree, so setting the expressions equal gives an equation for the crossing $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a quadratic equal to zero.",
          "workingLatex": "x^{2}-2x-3=0",
          "explanation": "Subtracting $2x$ from both sides collects the terms into standard quadratic form, ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise.",
          "workingLatex": "(x-3)(x+1)=0",
          "explanation": "We need two numbers multiplying to $-3$ and adding to $-2$; these are $-3$ and $+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $x$.",
          "workingLatex": "x=3 \\;\\text{or}\\; x=-1",
          "explanation": "Each factor set to zero gives an $x$-coordinate where the line and curve meet.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $y$ when $x=3$.",
          "workingLatex": "y=2(3)=6",
          "explanation": "Substituting into the line gives the height of the first intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $y$ when $x=-1$.",
          "workingLatex": "y=2(-1)=-2",
          "explanation": "Substituting the second value gives the height of the other intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $(3,\\,6)$ on the curve.",
          "workingLatex": "3^{2}-3=9-3=6 \\;\\checkmark",
          "explanation": "Confirming the point also lies on $y=x^{2}-3$ verifies it is a true intersection, not just a point on the line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $(-1,\\,-2)$ on the curve.",
          "workingLatex": "(-1)^{2}-3=1-3=-2 \\;\\checkmark",
          "explanation": "The second point also satisfies the curve equation, so both points are valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the points.",
          "workingLatex": "(-1,\\,-2),\\ (3,\\,6)",
          "explanation": "Both points satisfy both equations, so these are the required intersections.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve and line meet at $(-1,\\,-2)$ and $(3,\\,6)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intersections",
      "reciprocal"
    ],
    "questionText": "Find the coordinates of the points where the curve $y=\\dfrac{6}{x}$ meets the line $y=x+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the restriction on $x$.",
          "workingLatex": "x \\neq 0",
          "explanation": "The reciprocal curve is undefined at $x=0$ because we cannot divide by zero, so any intersection must have a non-zero $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equate the two expressions for $y$.",
          "workingLatex": "\\frac{6}{x}=x+1",
          "explanation": "Where the curve and line cross, their heights match, so setting the expressions equal locates the crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply both sides by $x$.",
          "workingLatex": "6=x(x+1)",
          "explanation": "Multiplying through by $x$ clears the fraction. This is valid because $x \\neq 0$, and it turns the equation into a polynomial we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand and rearrange to zero.",
          "workingLatex": "x^{2}+x-6=0",
          "explanation": "Expanding the bracket and moving the $6$ across gives a standard quadratic ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise.",
          "workingLatex": "(x+3)(x-2)=0",
          "explanation": "We need two numbers multiplying to $-6$ and adding to $+1$; these are $+3$ and $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $x$.",
          "workingLatex": "x=-3 \\;\\text{or}\\; x=2",
          "explanation": "Both values are non-zero, so both are allowed by the restriction and give genuine crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $y$ when $x=2$.",
          "workingLatex": "y=2+1=3",
          "explanation": "Substituting into the line gives the height of the first intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find $y$ when $x=-3$.",
          "workingLatex": "y=-3+1=-2",
          "explanation": "Substituting the second value gives the height of the other intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $(2,\\,3)$ on the curve.",
          "workingLatex": "\\frac{6}{2}=3 \\;\\checkmark",
          "explanation": "Confirming the point lies on $y=\\dfrac{6}{x}$ as well as the line verifies it is a real intersection.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check $(-3,\\,-2)$ on the curve.",
          "workingLatex": "\\frac{6}{-3}=-2 \\;\\checkmark",
          "explanation": "The second point also satisfies the curve, so both are valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the points.",
          "workingLatex": "(-3,\\,-2),\\ (2,\\,3)",
          "explanation": "Both points satisfy both equations, so these are the required intersections.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve and line meet at $(-3,\\,-2)$ and $(2,\\,3)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intersections",
      "quadratic"
    ],
    "questionText": "Find the coordinates of the points of intersection of the two parabolas $y=x^{2}$ and $y=2x^{2}-4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two expressions for $y$.",
          "workingLatex": "x^{2}=2x^{2}-4",
          "explanation": "Where the two parabolas cross they have equal heights, so setting their expressions equal gives the crossing $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to isolate $x^{2}$.",
          "workingLatex": "x^{2}=4",
          "explanation": "Subtracting $x^{2}$ from both sides gives $0=x^{2}-4$; adding $4$ back leaves $x^{2}=4$, a simple equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $x$.",
          "workingLatex": "x=2 \\;\\text{or}\\; x=-2",
          "explanation": "Taking the square root gives both a positive and a negative value, since both square to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $y$ when $x=2$.",
          "workingLatex": "y=2^{2}=4",
          "explanation": "Substituting into the simpler curve $y=x^{2}$ gives the height of the first intersection.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $y$ when $x=-2$.",
          "workingLatex": "y=(-2)^{2}=4",
          "explanation": "Squaring removes the sign, so this point sits at the same height as the first.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $(2,\\,4)$ on the second parabola.",
          "workingLatex": "2(2)^{2}-4=8-4=4 \\;\\checkmark",
          "explanation": "Confirming the point satisfies $y=2x^{2}-4$ too verifies it is a genuine intersection of both curves.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $(-2,\\,4)$ on the second parabola.",
          "workingLatex": "2(-2)^{2}-4=8-4=4 \\;\\checkmark",
          "explanation": "The second point also satisfies the second parabola, so both points are valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the symmetry.",
          "workingLatex": "y=4 \\text{ for both } x=\\pm 2",
          "explanation": "Both curves are symmetric about the $y$-axis, so the intersections come as a mirror-image pair at the same height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the points.",
          "workingLatex": "(-2,\\,4),\\ (2,\\,4)",
          "explanation": "Both points satisfy both equations, so these are where the two parabolas cross.",
          "diagram": null
        }
      ],
      "finalAnswer": "The two parabolas intersect at $(-2,\\,4)$ and $(2,\\,4)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "intersections",
      "discriminant",
      "tangent"
    ],
    "questionText": "The line $y=x+k$ is a tangent to the curve $y=x^{2}$. Find the value of $k$, and state the coordinates of the point of tangency.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two expressions for $y$.",
          "workingLatex": "x^{2}=x+k",
          "explanation": "Any meeting point of the line and curve must satisfy both equations, so we set the heights equal to describe those points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a quadratic in $x$.",
          "workingLatex": "x^{2}-x-k=0",
          "explanation": "Collecting terms on one side gives a quadratic whose roots are the $x$-coordinates of the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the tangency condition.",
          "workingLatex": "b^{2}-4ac=0",
          "explanation": "A tangent touches the curve at exactly one point, which means the quadratic must have a single repeated root. That happens precisely when the discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the coefficients.",
          "workingLatex": "a=1,\\ b=-1,\\ c=-k",
          "explanation": "Reading the quadratic $x^{2}-x-k=0$ against $ax^{2}+bx+c=0$ gives these coefficients to feed into the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the discriminant.",
          "workingLatex": "(-1)^{2}-4(1)(-k)=1+4k",
          "explanation": "Substituting the coefficients into $b^{2}-4ac$ gives an expression in $k$ that we can set to zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the discriminant to zero and solve.",
          "workingLatex": "1+4k=0 \\;\\Rightarrow\\; k=-\\tfrac{1}{4}",
          "explanation": "Solving the tangency condition pins down the single value of $k$ that makes the line just touch the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the point of tangency.",
          "workingLatex": "x^{2}-x+\\tfrac{1}{4}=0 \\;\\Rightarrow\\; \\left(x-\\tfrac{1}{2}\\right)^{2}=0",
          "explanation": "Putting $k=-\\tfrac{1}{4}$ back into the quadratic makes it a perfect square, so the repeated root gives the touching point's $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State $x$ and find $y$.",
          "workingLatex": "x=\\tfrac{1}{2}, \\quad y=\\left(\\tfrac{1}{2}\\right)^{2}=\\tfrac{1}{4}",
          "explanation": "Substituting the repeated root into $y=x^{2}$ gives the height at which the line touches the curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the line passes through this point.",
          "workingLatex": "y=\\tfrac{1}{2}+\\left(-\\tfrac{1}{4}\\right)=\\tfrac{1}{4} \\;\\checkmark",
          "explanation": "Substituting $x=\\tfrac{1}{2}$ and $k=-\\tfrac{1}{4}$ into $y=x+k$ gives the same height $\\tfrac{1}{4}$, confirming the line really does touch the curve here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results.",
          "workingLatex": "k=-\\tfrac{1}{4}, \\quad \\left(\\tfrac{1}{2},\\,\\tfrac{1}{4}\\right)",
          "explanation": "The value of $k$ makes the discriminant zero, and the line touches the parabola at $\\left(\\tfrac{1}{2},\\,\\tfrac{1}{4}\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=-\\tfrac{1}{4}$, and the line is tangent to the curve at $\\left(\\tfrac{1}{2},\\,\\tfrac{1}{4}\\right)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "set",
    "tags": [
      "curve-sketching",
      "intersections",
      "cubic"
    ],
    "questionText": "By considering a sketch of $y=x^{3}$ and $y=x$, state the number of real solutions of the equation $x^{3}=x$, and then find them.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the equation graphically.",
          "workingLatex": "x^{3}=x",
          "explanation": "The real solutions of $x^{3}=x$ are exactly the $x$-values where the graphs $y=x^{3}$ and $y=x$ cross, so counting crossings counts solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the sketch and count crossings.",
          "workingLatex": "\\text{3 crossings}",
          "explanation": "The straight line $y=x$ passes through the origin at $45^{\\circ}$. The cubic $y=x^{3}$ is flat near the origin and steep further out, so it dips below the line, meets it at the origin, and crosses it once on each side — three crossings in total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to solve algebraically.",
          "workingLatex": "x^{3}-x=0",
          "explanation": "To confirm the count we bring everything to one side rather than dividing by $x$, which would lose the root at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out the common $x$.",
          "workingLatex": "x(x^{2}-1)=0",
          "explanation": "Every term has a factor of $x$, so taking it out keeps all three roots, including $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the difference of squares.",
          "workingLatex": "x(x-1)(x+1)=0",
          "explanation": "Since $x^{2}-1=(x-1)(x+1)$, the expression fully factorises into three linear pieces.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $x$.",
          "workingLatex": "x=-1,\\ x=0,\\ x=1",
          "explanation": "Setting each factor to zero gives the three solution values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Match to the sketch.",
          "workingLatex": "3 \\text{ solutions}",
          "explanation": "The algebra gives exactly three values, agreeing with the three crossings seen on the sketch.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check $x=1$.",
          "workingLatex": "1^{3}=1 \\;\\checkmark",
          "explanation": "Substituting confirms this value genuinely satisfies $x^{3}=x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $x=-1$.",
          "workingLatex": "(-1)^{3}=-1 \\;\\checkmark",
          "explanation": "The odd power keeps the sign negative, so this value also satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solutions.",
          "workingLatex": "\\{-1,\\,0,\\,1\\}",
          "explanation": "There are three real solutions, confirmed by both the sketch and the factorised algebra.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are $3$ real solutions: $x=-1,\\ x=0,\\ x=1$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intersections",
      "quadratic"
    ],
    "questionText": "The straight line passes through the points $A(0,\\,1)$ and $B(3,\\,7)$. Find the coordinates of the points where this line meets the curve $y=x^{2}-2x+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the gradient of the line.",
          "workingLatex": "m=\\frac{7-1}{3-0}=\\frac{6}{3}=2",
          "explanation": "The gradient is the change in $y$ divided by the change in $x$ between the two given points, which fixes the steepness of the line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation of the line.",
          "workingLatex": "y=2x+1",
          "explanation": "Point $A(0,\\,1)$ lies on the $y$-axis, so the intercept is $1$; combined with gradient $2$ this gives the line's equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Equate the line and the curve.",
          "workingLatex": "x^{2}-2x+1=2x+1",
          "explanation": "The line meets the curve where their $y$-values match, so setting the expressions equal gives the crossing $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to a quadratic equal to zero.",
          "workingLatex": "x^{2}-4x=0",
          "explanation": "Subtracting $2x+1$ from both sides cancels the constants and collects the $x$-terms into a simple quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise.",
          "workingLatex": "x(x-4)=0",
          "explanation": "Both terms share a factor of $x$, so taking it out gives the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $x$.",
          "workingLatex": "x=0 \\;\\text{or}\\; x=4",
          "explanation": "Each factor set to zero gives an $x$-coordinate where the line crosses the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $y$ when $x=0$.",
          "workingLatex": "y=2(0)+1=1",
          "explanation": "Substituting into the line gives the height of the first intersection; note this is point $A$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find $y$ when $x=4$.",
          "workingLatex": "y=2(4)+1=9",
          "explanation": "Substituting the second value into the line gives the height of the other intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check $(4,\\,9)$ on the curve.",
          "workingLatex": "4^{2}-2(4)+1=16-8+1=9 \\;\\checkmark",
          "explanation": "Confirming the point satisfies $y=x^{2}-2x+1$ verifies it is a true intersection, not just a point on the line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check $(0,\\,1)$ on the curve.",
          "workingLatex": "0^{2}-2(0)+1=1 \\;\\checkmark",
          "explanation": "The first point also lies on the curve, so both intersections are valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the points.",
          "workingLatex": "(0,\\,1),\\ (4,\\,9)",
          "explanation": "Both points satisfy the line and the curve, so these are the required intersections.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line meets the curve at $(0,\\,1)$ and $(4,\\,9)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "intersections",
      "reciprocal"
    ],
    "questionText": "Determine the number of points of intersection of the curves $y=\\dfrac{1}{x}$ and $y=x^{2}$, justifying your answer, and state the coordinates of any intersection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the restriction on $x$.",
          "workingLatex": "x \\neq 0",
          "explanation": "The reciprocal curve $y=\\dfrac{1}{x}$ is undefined at $x=0$, so any intersection must occur at a non-zero $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equate the two expressions for $y$.",
          "workingLatex": "\\frac{1}{x}=x^{2}",
          "explanation": "Points of intersection have equal heights on both curves, so setting the expressions equal locates them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply both sides by $x$.",
          "workingLatex": "1=x^{3}",
          "explanation": "Multiplying through by $x$ clears the fraction. This is valid because $x \\neq 0$, and it produces a simple cubic equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the cubic for real $x$.",
          "workingLatex": "x^{3}=1 \\;\\Rightarrow\\; x=1",
          "explanation": "The only real cube root of $1$ is $1$; the other two roots of $x^{3}=1$ are complex, so they do not give points on the real graphs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the number of intersections.",
          "workingLatex": "1 \\text{ real root} \\;\\Rightarrow\\; 1 \\text{ intersection}",
          "explanation": "Each real solution corresponds to one crossing point, so a single real root means the curves meet exactly once.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-coordinate.",
          "workingLatex": "y=1^{2}=1",
          "explanation": "Substituting $x=1$ into $y=x^{2}$ gives the height of the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the point on the reciprocal curve.",
          "workingLatex": "\\frac{1}{1}=1 \\;\\checkmark",
          "explanation": "The point $(1,\\,1)$ also satisfies $y=\\dfrac{1}{x}$, confirming it is a genuine intersection of both curves.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Justify with a sketch for $x<0$.",
          "workingLatex": "x<0:\\ \\tfrac{1}{x}<0,\\ x^{2}>0",
          "explanation": "For negative $x$ the reciprocal curve lies below the axis while the parabola stays above it, so they cannot meet there. This matches the single real root found algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Justify with a sketch for $x>0$.",
          "workingLatex": "x>0:\\ \\text{one crossing}",
          "explanation": "For positive $x$ the reciprocal falls from high values toward zero while the parabola rises from zero, so they cross exactly once in the first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion.",
          "workingLatex": "1 \\text{ point of intersection: } (1,\\,1)",
          "explanation": "Both the algebra and the sketch confirm there is exactly one intersection, at $(1,\\,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is exactly $1$ point of intersection, at $(1,\\,1)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "Sketch the graph of $y=\\dfrac{1}{x-2}$. On your sketch state the equations of both asymptotes and give the coordinates of the point where the curve crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the base curve",
          "workingLatex": "y=\\frac{1}{x}",
          "explanation": "The expression $\\frac{1}{x-2}$ is built from the familiar reciprocal curve $y=\\frac{1}{x}$, so we start from a graph whose shape we already know and then adjust it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the change as a translation",
          "workingLatex": "y=\\frac{1}{x-2}",
          "explanation": "Replacing $x$ with $x-2$ shifts the whole graph $2$ units to the right. Nothing about the shape changes; only its position moves.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the vertical asymptote",
          "workingLatex": "x-2=0 \\Rightarrow x=2",
          "explanation": "The curve is undefined where the denominator is zero. As $x$ approaches $2$ the fraction grows without bound, so the line $x=2$ is a vertical asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the horizontal asymptote",
          "workingLatex": "x\\to\\pm\\infty \\Rightarrow y\\to 0",
          "explanation": "For very large positive or negative $x$ the denominator becomes huge, so the fraction shrinks towards zero. The curve therefore levels off towards the line $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the $y$-intercept",
          "workingLatex": "x=0:\\; y=\\frac{1}{0-2}=-\\frac{1}{2}",
          "explanation": "Setting $x=0$ tells us where the curve meets the $y$-axis. This gives the single plotted point $\\left(0,-\\tfrac12\\right)$ that anchors the left branch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check for an $x$-intercept",
          "workingLatex": "\\frac{1}{x-2}=0 \\;\\text{has no solution}",
          "explanation": "A fraction with numerator $1$ can never equal zero, so the curve never touches the $x$-axis. This confirms $y=0$ acts only as an asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Examine behaviour just right of $x=2$",
          "workingLatex": "x\\to 2^{+}:\\; y\\to +\\infty",
          "explanation": "Just to the right of $2$ the denominator is a tiny positive number, so $y$ is large and positive. The right branch climbs steeply upward beside the asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Examine behaviour just left of $x=2$",
          "workingLatex": "x\\to 2^{-}:\\; y\\to -\\infty",
          "explanation": "Just to the left of $2$ the denominator is a tiny negative number, so $y$ is large and negative. The left branch plunges downward beside the asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the finished sketch",
          "workingLatex": "\\text{two branches, asymptotes } x=2,\\; y=0",
          "explanation": "The sketch has two separate branches. The left branch passes through $\\left(0,-\\tfrac12\\right)$, sits below $y=0$ and falls towards $-\\infty$ as $x\\to 2^{-}$. The right branch lies above $y=0$ and rises from near $+\\infty$ towards $0$. Both approach the vertical line $x=2$ and the horizontal line $y=0$ without crossing them.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve has a vertical asymptote $x=2$ and a horizontal asymptote $y=0$, crosses the $y$-axis at $\\left(0,-\\tfrac12\\right)$ and has two branches (lower-left through $\\left(0,-\\tfrac12\\right)$, upper-right)."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "The curve $C$ has equation $y=\\dfrac{1}{x}+3$. Sketch $C$, stating the equations of its asymptotes, and find the coordinates of the point where $C$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the base curve",
          "workingLatex": "y=\\frac{1}{x}",
          "explanation": "The equation is the reciprocal curve $y=\\frac{1}{x}$ with a constant added, so we begin from that standard shape and then move it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the $+3$ as a translation",
          "workingLatex": "y=\\frac{1}{x}+3",
          "explanation": "Adding $3$ to every $y$-value lifts the whole graph $3$ units upward. The shape stays the same; only its height changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the vertical asymptote",
          "workingLatex": "x=0",
          "explanation": "The term $\\frac{1}{x}$ is still undefined at $x=0$, so the $y$-axis remains a vertical asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the horizontal asymptote",
          "workingLatex": "x\\to\\pm\\infty \\Rightarrow \\frac{1}{x}\\to 0,\\; y\\to 3",
          "explanation": "For large $x$ the reciprocal term dies away, leaving $y$ close to $3$. The graph therefore levels off towards the line $y=3$ instead of $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set $y=0$ to find the $x$-axis crossing",
          "workingLatex": "\\frac{1}{x}+3=0",
          "explanation": "A point on the $x$-axis has height zero, so we solve $y=0$ to locate exactly where the curve cuts through it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Isolate the reciprocal term",
          "workingLatex": "\\frac{1}{x}=-3",
          "explanation": "Subtracting $3$ from both sides leaves the fraction alone, ready to be inverted.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $x$",
          "workingLatex": "x=-\\frac{1}{3}",
          "explanation": "Taking the reciprocal of both sides gives $x=-\\tfrac13$. So the curve meets the $x$-axis at $\\left(-\\tfrac13,0\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Examine behaviour near $x=0$",
          "workingLatex": "x\\to 0^{+}:\\;y\\to+\\infty,\\quad x\\to 0^{-}:\\;y\\to-\\infty",
          "explanation": "Close to the $y$-axis the reciprocal term dominates: positive $x$ sends $y$ upward, negative $x$ sends it downward, giving the two separated branches.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the finished sketch",
          "workingLatex": "\\text{asymptotes } x=0,\\; y=3",
          "explanation": "The right-hand branch lies to the right of the $y$-axis, always above $y=3$, dropping from $+\\infty$ towards $3$. The left-hand branch lies to the left of the $y$-axis, always below $y=3$, passing through $\\left(-\\tfrac13,0\\right)$ and falling towards $-\\infty$ as $x\\to 0^{-}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes $x=0$ and $y=3$; the curve crosses the $x$-axis at $\\left(-\\tfrac13,\\,0\\right)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "Sketch the graph of $y=\\dfrac{2}{x+1}$. State the equations of the asymptotes and give the coordinates of any point where the curve meets a coordinate axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the base curve",
          "workingLatex": "y=\\frac{2}{x}",
          "explanation": "The graph is a reciprocal curve of the form $\\frac{2}{x}$ that has been shifted, so we start from that standard two-branch shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the change as a translation",
          "workingLatex": "y=\\frac{2}{x+1}",
          "explanation": "Replacing $x$ with $x+1$ moves the whole graph $1$ unit to the left. The shape is unchanged; only its position shifts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the vertical asymptote",
          "workingLatex": "x+1=0 \\Rightarrow x=-1",
          "explanation": "The denominator is zero at $x=-1$, where the curve shoots off to infinity. So $x=-1$ is the vertical asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the horizontal asymptote",
          "workingLatex": "x\\to\\pm\\infty \\Rightarrow y\\to 0",
          "explanation": "For very large $|x|$ the denominator is huge, so $y$ approaches zero. The line $y=0$ is the horizontal asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the $y$-intercept",
          "workingLatex": "x=0:\\; y=\\frac{2}{0+1}=2",
          "explanation": "Setting $x=0$ gives the point where the curve crosses the $y$-axis, namely $(0,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check for an $x$-intercept",
          "workingLatex": "\\frac{2}{x+1}=0 \\;\\text{has no solution}",
          "explanation": "The numerator $2$ is never zero, so the curve cannot cross the $x$-axis; $y=0$ is only an asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Plot a guide point on the right branch",
          "workingLatex": "x=1:\\; y=\\frac{2}{1+1}=1",
          "explanation": "Evaluating one more point, here $(1,1)$, fixes how quickly the right branch falls towards the horizontal asymptote and anchors the sketch.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Examine behaviour near $x=-1$",
          "workingLatex": "x\\to -1^{+}:\\;y\\to+\\infty,\\quad x\\to -1^{-}:\\;y\\to-\\infty",
          "explanation": "Just right of $-1$ the denominator is a tiny positive number, so $y$ is large and positive; just left of $-1$ it is a tiny negative number, so $y$ is large and negative. This fixes the direction of each branch.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the finished sketch",
          "workingLatex": "\\text{asymptotes } x=-1,\\; y=0",
          "explanation": "The right branch sits to the right of $x=-1$, lies above $y=0$, passes through $(0,2)$ and $(1,1)$ and falls towards $0$. The left branch sits to the left of $x=-1$, lies below $y=0$ and rises towards $0$ as $x\\to-\\infty$. Both hug the asymptotes without crossing them.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes $x=-1$ and $y=0$; the curve meets the $y$-axis at $(0,2)$ and has no $x$-intercept."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "cubic"
    ],
    "questionText": "Sketch the curve with equation $y=x^{2}(x-3)$. Show clearly the coordinates of the points where the curve meets the $x$-axis and describe the behaviour of the curve at each of these points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Expand to standard cubic form",
          "workingLatex": "y=x^{2}(x-3)=x^{3}-3x^{2}",
          "explanation": "Multiplying out shows the leading term is $x^{3}$, confirming this is a cubic with a positive leading coefficient. This tells us the overall rising shape from bottom-left to top-right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set $y=0$ to find the roots",
          "workingLatex": "x^{2}(x-3)=0",
          "explanation": "The factorised form makes the $x$-axis crossings immediate: the product is zero when a factor is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the roots",
          "workingLatex": "x=0\\ (\\text{repeated}),\\quad x=3",
          "explanation": "The factor $x^{2}$ gives a repeated root at $x=0$, while $x-3$ gives a single root at $x=3$. The multiplicity of each root controls the behaviour there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the repeated root",
          "workingLatex": "x=0\\Rightarrow \\text{curve touches at }(0,0)",
          "explanation": "A repeated (double) root means the curve meets the axis but does not pass through it; instead it just touches at the origin and turns back.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the single root",
          "workingLatex": "x=3\\Rightarrow \\text{curve crosses at }(3,0)",
          "explanation": "A single root means the curve passes straight through the axis, changing sign as it does so at the point $(3,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the turning points",
          "workingLatex": "\\frac{dy}{dx}=3x^{2}-6x=3x(x-2)=0",
          "explanation": "Differentiating and setting the gradient to zero finds where the curve levels off, which helps place the dip between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the turning points",
          "workingLatex": "(0,0)\\ \\text{max},\\quad (2,-4)\\ \\text{min}",
          "explanation": "At $x=0$ we get $y=0$ (a local maximum, consistent with the touch), and at $x=2$ we get $y=2^{3}-3(2)^{2}=-4$ (a local minimum below the axis).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the end behaviour",
          "workingLatex": "x\\to-\\infty:\\;y\\to-\\infty,\\quad x\\to+\\infty:\\;y\\to+\\infty",
          "explanation": "Because the leading term $x^{3}$ dominates for large $|x|$, the curve comes up from the bottom-left and heads off to the top-right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Assemble the finished sketch",
          "workingLatex": "\\text{touch }(0,0),\\ \\text{min }(2,-4),\\ \\text{cross }(3,0)",
          "explanation": "The curve rises from the bottom-left, touches the origin at the local maximum $(0,0)$, dips to the local minimum $(2,-4)$ below the axis, then rises to cross the axis at $(3,0)$ and continues upward to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve touches the $x$-axis at $(0,0)$ (repeated root, local maximum) and crosses it at $(3,0)$; it has a local minimum at $(2,-4)$ and runs from bottom-left to top-right."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "graphical-solution"
    ],
    "questionText": "By considering the graphs of $y=x^{3}$ and $y=x$, or otherwise, state how many real solutions the equation $x^{3}=x$ has and find them.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange into a single equation",
          "workingLatex": "x^{3}=x \\Rightarrow x^{3}-x=0",
          "explanation": "Bringing everything to one side turns the problem into finding where a single expression equals zero, which corresponds to intersections of the two graphs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take out the common factor",
          "workingLatex": "x(x^{2}-1)=0",
          "explanation": "Each term contains $x$, so factoring it out immediately gives one solution and leaves a simpler quadratic factor to handle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor the difference of two squares",
          "workingLatex": "x(x-1)(x+1)=0",
          "explanation": "The bracket $x^{2}-1$ is a difference of two squares, so it splits into $(x-1)(x+1)$, revealing all the roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve each factor",
          "workingLatex": "x=0,\\quad x=1,\\quad x=-1",
          "explanation": "Setting each factor to zero gives the three values of $x$ for which the equation holds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the cubic graph",
          "workingLatex": "y=x^{3}",
          "explanation": "The curve $y=x^{3}$ passes through the origin, is flat there, and rises steeply for large positive $x$ while falling steeply for large negative $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the line",
          "workingLatex": "y=x",
          "explanation": "The graph $y=x$ is a straight line through the origin with gradient $1$, so it also passes through points such as $(1,1)$ and $(-1,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Link intersections to solutions",
          "workingLatex": "x^{3}=x \\Leftrightarrow \\text{curve meets line}",
          "explanation": "Wherever the cubic and the line cross, their $y$-values are equal, which is exactly when $x^{3}=x$. Counting crossings therefore counts solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Count the crossings from the sketch",
          "workingLatex": "\\text{crossings at }x=-1,\\,0,\\,1",
          "explanation": "The steep cubic cuts the straight line once on the left, once at the origin, and once on the right, giving three intersection points that match the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "3\\ \\text{real solutions}",
          "explanation": "Both the sketch and the factorisation agree: there are exactly three real solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are $3$ real solutions: $x=-1$, $x=0$ and $x=1$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "graphical-solution"
    ],
    "questionText": "By finding the turning points of the curve $y=x^{3}-3x^{2}+2$ and considering where it crosses the $x$-axis, determine how many real roots the equation $x^{3}-3x^{2}+2=0$ has.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate roots to $x$-axis crossings",
          "workingLatex": "x^{3}-3x^{2}+2=0 \\Leftrightarrow y=0",
          "explanation": "A real root of the equation is a place where the curve $y=x^{3}-3x^{2}+2$ meets the $x$-axis, so counting crossings counts roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient",
          "workingLatex": "\\frac{dy}{dx}=3x^{2}-6x",
          "explanation": "Differentiating gives the gradient function. Turning points occur where this is zero, and they control the up-and-down shape of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the turning points",
          "workingLatex": "3x(x-2)=0 \\Rightarrow x=0,\\; x=2",
          "explanation": "Factorising and setting each factor to zero locates the two turning points where the curve momentarily flattens.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $y$ at $x=0$",
          "workingLatex": "y=0-0+2=2",
          "explanation": "Substituting $x=0$ gives the local maximum at $(0,2)$, which sits above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate $y$ at $x=2$",
          "workingLatex": "y=8-12+2=-2",
          "explanation": "Substituting $x=2$ gives the local minimum at $(2,-2)$, which sits below the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the end behaviour",
          "workingLatex": "x\\to-\\infty:\\;y\\to-\\infty,\\quad x\\to+\\infty:\\;y\\to+\\infty",
          "explanation": "The $x^{3}$ term dominates for large $|x|$, so the curve comes up from the bottom-left and rises to the top-right.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Track the curve across the axis",
          "workingLatex": "\\text{max}(0,2)>0,\\quad \\text{min}(2,-2)<0",
          "explanation": "The curve rises from $-\\infty$, so it must cross the axis once before reaching the maximum at $(0,2)$. It then falls to the minimum at $(2,-2)$, crossing again on the way down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Account for the final crossing",
          "workingLatex": "\\text{rises from }(2,-2)\\ \\text{to}\\ +\\infty",
          "explanation": "After the minimum below the axis, the curve climbs back up to $+\\infty$, so it must cross the axis a third time. A local maximum above the axis and a local minimum below it force exactly three crossings.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the number of roots",
          "workingLatex": "3\\ \\text{real roots}",
          "explanation": "Because the curve crosses the $x$-axis three times, the equation $x^{3}-3x^{2}+2=0$ has three real roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve has a maximum at $(0,2)$ above the axis and a minimum at $(2,-2)$ below it, so it crosses the $x$-axis three times: the equation has $3$ real roots."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "graphical-solution"
    ],
    "questionText": "The curve $y=\\dfrac{4}{x}$ and the line $y=5-x$ are drawn on the same axes. Find the number of points at which they intersect and determine the coordinates of these points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the two expressions equal",
          "workingLatex": "\\frac{4}{x}=5-x",
          "explanation": "At an intersection the curve and the line share the same $y$-value for the same $x$, so equating them locates those shared points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply through by $x$",
          "workingLatex": "4=x(5-x)=5x-x^{2}",
          "explanation": "Multiplying both sides by $x$ (noting $x\\neq0$) clears the fraction and turns the equation into a polynomial we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange into a quadratic",
          "workingLatex": "x^{2}-5x+4=0",
          "explanation": "Collecting all terms on one side gives a standard quadratic, whose number of real roots tells us how many intersections occur.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic",
          "workingLatex": "(x-1)(x-4)=0",
          "explanation": "We look for two numbers that multiply to $4$ and add to $-5$; these are $-1$ and $-4$, giving a clean factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $x$",
          "workingLatex": "x=1,\\quad x=4",
          "explanation": "Two distinct real solutions mean the curve and line meet at two separate points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $y$ when $x=1$",
          "workingLatex": "y=5-1=4",
          "explanation": "Substituting $x=1$ into the line gives the height of the first intersection: the point $(1,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $y$ when $x=4$",
          "workingLatex": "y=5-4=1",
          "explanation": "Substituting $x=4$ into the line gives the second intersection: the point $(4,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the points lie on the curve",
          "workingLatex": "\\frac{4}{1}=4\\ \\checkmark,\\qquad \\frac{4}{4}=1\\ \\checkmark",
          "explanation": "Substituting each $x$ back into $y=\\frac{4}{x}$ reproduces the same $y$-values, confirming both points genuinely lie on the curve as well as the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret with a sketch",
          "workingLatex": "\\text{hyperbola meets line twice}",
          "explanation": "The curve $y=\\frac{4}{x}$ lies in the first and third quadrants, and the falling line $y=5-x$ cuts across its upper branch at two places, matching the two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "2\\ \\text{intersections}:\\ (1,4),\\ (4,1)",
          "explanation": "Both the algebra and the sketch confirm exactly two intersection points.",
          "diagram": null
        }
      ],
      "finalAnswer": "There are $2$ intersection points: $(1,4)$ and $(4,1)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "reciprocal"
    ],
    "questionText": "Sketch the graph of $y=\\dfrac{1}{x}-2$. State the equations of its asymptotes and the coordinates of the point where it crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the base curve",
          "workingLatex": "y=\\frac{1}{x}",
          "explanation": "The equation is the reciprocal curve $y=\\frac{1}{x}$ with a constant subtracted, so we begin from that standard two-branch shape.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the $-2$ as a translation",
          "workingLatex": "y=\\frac{1}{x}-2",
          "explanation": "Subtracting $2$ from every $y$-value lowers the whole graph $2$ units. The shape is unchanged; only its height drops.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the vertical asymptote",
          "workingLatex": "x=0",
          "explanation": "The reciprocal term is still undefined at $x=0$, so the $y$-axis remains a vertical asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the horizontal asymptote",
          "workingLatex": "x\\to\\pm\\infty \\Rightarrow \\frac{1}{x}\\to 0,\\; y\\to -2",
          "explanation": "For large $|x|$ the reciprocal term vanishes, leaving $y$ close to $-2$. The graph levels off towards the line $y=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set $y=0$ for the $x$-intercept",
          "workingLatex": "\\frac{1}{x}-2=0",
          "explanation": "The curve crosses the $x$-axis where its height is zero, so we solve $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $x$",
          "workingLatex": "\\frac{1}{x}=2 \\Rightarrow x=\\frac{1}{2}",
          "explanation": "Rearranging and taking the reciprocal gives $x=\\tfrac12$, so the curve meets the $x$-axis at $\\left(\\tfrac12,0\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Examine behaviour near $x=0$",
          "workingLatex": "x\\to 0^{+}:\\;y\\to+\\infty,\\quad x\\to 0^{-}:\\;y\\to-\\infty",
          "explanation": "Close to the $y$-axis the reciprocal term dominates: small positive $x$ sends $y$ upward and small negative $x$ sends it downward, producing the two separated branches.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note there is no $y$-intercept",
          "workingLatex": "x=0\\ \\text{not in domain}",
          "explanation": "Since the curve is undefined at $x=0$, it never meets the $y$-axis; that line is only an asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the finished sketch",
          "workingLatex": "\\text{asymptotes } x=0,\\; y=-2",
          "explanation": "The right branch lies to the right of the $y$-axis, passes through $\\left(\\tfrac12,0\\right)$ and falls from $+\\infty$ towards $y=-2$. The left branch lies to the left of the $y$-axis, stays below $y=-2$ and drops towards $-\\infty$ as $x\\to0^{-}$. Both branches approach the lines $x=0$ and $y=-2$ without crossing them.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes $x=0$ and $y=-2$; the curve crosses the $x$-axis at $\\left(\\tfrac12,\\,0\\right)$ and has no $y$-intercept."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "repeated-root",
      "factorising"
    ],
    "questionText": "The curve $C$ has equation $y=x^{3}-6x^{2}+9x$. Factorise the expression fully, find the coordinates of every point where $C$ meets the coordinate axes, state whether the curve crosses or touches the $x$-axis at each root, and hence sketch $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take out the common factor of $x$.",
          "workingLatex": "y=x^{3}-6x^{2}+9x=x(x^{2}-6x+9)",
          "explanation": "Every term contains at least one factor of $x$, so removing it first is the natural move and it leaves a simple quadratic to deal with.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic bracket.",
          "workingLatex": "x^{2}-6x+9=(x-3)^{2}",
          "explanation": "The quadratic is a perfect square because $(-3)^{2}=9$ and $2\\times(-3)=-6$ match the constant and middle terms exactly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the fully factorised form.",
          "workingLatex": "y=x(x-3)^{2}",
          "explanation": "Expressing the curve as a product of linear factors makes both the roots and their multiplicities visible at a glance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set $y=0$ to find the roots.",
          "workingLatex": "x(x-3)^{2}=0\\Rightarrow x=0\\ \\text{or}\\ x=3",
          "explanation": "A product is zero only when one of its factors is zero, which gives the $x$-coordinates where the curve meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the root $x=0$.",
          "workingLatex": "0\\times(0-3)^{2}=0",
          "explanation": "Substituting back confirms that the point $(0,0)$ genuinely lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the root $x=3$.",
          "workingLatex": "3\\times(3-3)^{2}=3\\times0=0",
          "explanation": "Substituting $x=3$ gives $y=0$, confirming $(3,0)$ is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the root at $x=0$.",
          "workingLatex": "x^{1}\\ \\Rightarrow\\ \\text{odd multiplicity}",
          "explanation": "The factor $x$ appears to the first (odd) power, so the curve passes straight through the axis at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify the root at $x=3$.",
          "workingLatex": "(x-3)^{2}\\ \\Rightarrow\\ \\text{even multiplicity}",
          "explanation": "The factor $(x-3)$ is squared, so the curve just touches the $x$-axis at $(3,0)$ and turns back instead of crossing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0\\Rightarrow y=0",
          "explanation": "Setting $x=0$ shows the curve passes through the origin, so the $y$-intercept coincides with the root at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine the end behaviour.",
          "workingLatex": "y\\approx x^{3}\\ \\text{for large }|x|",
          "explanation": "The leading term $x^{3}$ dominates far from the origin, so $y\\to+\\infty$ as $x\\to+\\infty$ and $y\\to-\\infty$ as $x\\to-\\infty$: a standard positive cubic.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Differentiate to locate the turning points.",
          "workingLatex": "\\frac{dy}{dx}=3x^{2}-12x+9=3(x-1)(x-3)",
          "explanation": "Finding the stationary points pins down the shape between the roots; differentiating and factorising gives them quickly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve $\\frac{dy}{dx}=0$.",
          "workingLatex": "3(x-1)(x-3)=0\\Rightarrow x=1\\ \\text{or}\\ x=3",
          "explanation": "Setting the gradient to zero gives the $x$-coordinates of the local maximum and minimum.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the turning-point coordinates.",
          "workingLatex": "x=1:\\ y=1-6+9=4;\\quad x=3:\\ y=0",
          "explanation": "There is a local maximum at $(1,4)$ and a local minimum at $(3,0)$, and the minimum is exactly the touch point on the axis.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe the sketch.",
          "workingLatex": "\\text{origin (cross)},\\ (3,0)\\ \\text{(touch)},\\ \\text{max }(1,4)",
          "explanation": "The curve rises from bottom-left, crosses the axes at the origin, peaks at $(1,4)$, comes down to touch the $x$-axis at $(3,0)$, then rises again to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x(x-3)^{2}$. The curve meets the axes at the origin $(0,0)$, where it crosses, and touches the $x$-axis at $(3,0)$; it has a local maximum at $(1,4)$ and a local minimum at $(3,0)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "tangency",
      "discriminant"
    ],
    "questionText": "The line with equation $y=mx$ is a tangent to the curve $y=x^{2}-4x+5$. Find the possible values of the constant $m$, giving your answers in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the line equal to the curve.",
          "workingLatex": "mx=x^{2}-4x+5",
          "explanation": "At any common point the two $y$-values must agree, so equating them locates the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a quadratic in $x$.",
          "workingLatex": "x^{2}-4x-mx+5=0\\Rightarrow x^{2}-(4+m)x+5=0",
          "explanation": "Collecting everything on one side puts the equation in standard quadratic form so the discriminant can be used.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the tangency condition.",
          "workingLatex": "b^{2}-4ac=0",
          "explanation": "A tangent meets a curve at exactly one point, meaning the quadratic has a single repeated root, which happens precisely when the discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the coefficients.",
          "workingLatex": "a=1,\\quad b=-(4+m),\\quad c=5",
          "explanation": "Reading off $a$, $b$ and $c$ from the standard form lets us substitute into the discriminant correctly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the discriminant.",
          "workingLatex": "b^{2}-4ac=(4+m)^{2}-4(1)(5)",
          "explanation": "Since $b=-(4+m)$, squaring removes the sign, giving $(4+m)^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the discriminant to zero.",
          "workingLatex": "(4+m)^{2}-20=0",
          "explanation": "Applying the tangency condition turns the geometry into a single equation in $m$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Isolate the square term.",
          "workingLatex": "(4+m)^{2}=20",
          "explanation": "Moving the constant across prepares the equation for taking square roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root of both sides.",
          "workingLatex": "4+m=\\pm\\sqrt{20}",
          "explanation": "Both a positive and negative root are possible, so the $\\pm$ must be kept to capture both tangent lines.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the surd.",
          "workingLatex": "\\sqrt{20}=2\\sqrt{5}",
          "explanation": "Since $20=4\\times5$ and $4$ is a perfect square, the root simplifies to $2\\sqrt{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for $m$.",
          "workingLatex": "m=-4\\pm2\\sqrt{5}",
          "explanation": "Subtracting $4$ from both sides gives the two exact values of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the two values.",
          "workingLatex": "m=-4+2\\sqrt{5}\\quad\\text{or}\\quad m=-4-2\\sqrt{5}",
          "explanation": "Each value corresponds to one of the two lines through the origin that just touch the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sense-check numerically.",
          "workingLatex": "2\\sqrt{5}\\approx4.47\\Rightarrow m\\approx0.47\\ \\text{or}\\ m\\approx-8.47",
          "explanation": "Both values are real and distinct, which is exactly what we expect: two separate tangents from the origin to a parabola.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the result geometrically.",
          "workingLatex": "y=(-4+2\\sqrt{5})x,\\ \\ y=(-4-2\\sqrt{5})x",
          "explanation": "There are two tangent lines because the origin lies outside the parabola, so two lines through it graze the curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m=-4+2\\sqrt{5}$ or $m=-4-2\\sqrt{5}$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "tangency",
      "discriminant"
    ],
    "questionText": "The line $y=2x+c$ is a tangent to the parabola $y=x^{2}+3x+4$, where $c$ is a constant. Find the value of $c$ and the coordinates of the point of contact.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the line and the parabola.",
          "workingLatex": "2x+c=x^{2}+3x+4",
          "explanation": "The point of contact lies on both graphs, so their $y$-values must be equal there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a quadratic in $x$.",
          "workingLatex": "x^{2}+3x-2x+4-c=0\\Rightarrow x^{2}+x+(4-c)=0",
          "explanation": "Bringing all terms to one side produces the standard quadratic whose roots are the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the tangency condition.",
          "workingLatex": "b^{2}-4ac=0",
          "explanation": "A tangent touches at one repeated point, so the quadratic must have a single repeated root, i.e. zero discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the coefficients.",
          "workingLatex": "a=1,\\quad b=1,\\quad \\text{constant}=4-c",
          "explanation": "Reading off the coefficients allows a correct substitution into the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the discriminant.",
          "workingLatex": "(1)^{2}-4(1)(4-c)",
          "explanation": "Substituting the coefficients builds the expression that must vanish for tangency.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the discriminant to zero.",
          "workingLatex": "1-4(4-c)=0",
          "explanation": "The tangency requirement converts the geometry into a single equation for $c$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the bracket.",
          "workingLatex": "1-16+4c=0",
          "explanation": "Expanding carefully keeps track of the signs before solving.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $c$.",
          "workingLatex": "4c=15\\Rightarrow c=\\tfrac{15}{4}",
          "explanation": "Collecting the constants and dividing gives the exact value of the intercept that makes the line a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute $c$ back into the quadratic.",
          "workingLatex": "4-c=4-\\tfrac{15}{4}=\\tfrac{1}{4}\\Rightarrow x^{2}+x+\\tfrac{1}{4}=0",
          "explanation": "Putting $c$ back in lets us find the $x$-coordinate of the single point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the repeated root.",
          "workingLatex": "\\left(x+\\tfrac{1}{2}\\right)^{2}=0\\Rightarrow x=-\\tfrac{1}{2}",
          "explanation": "The quadratic is a perfect square, confirming tangency and giving the single contact $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the $y$-coordinate from the line.",
          "workingLatex": "y=2\\left(-\\tfrac{1}{2}\\right)+\\tfrac{15}{4}=-1+\\tfrac{15}{4}=\\tfrac{11}{4}",
          "explanation": "Using the line equation is quickest since it is linear in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the point lies on the parabola.",
          "workingLatex": "\\left(-\\tfrac{1}{2}\\right)^{2}+3\\left(-\\tfrac{1}{2}\\right)+4=\\tfrac{1}{4}-\\tfrac{3}{2}+4=\\tfrac{11}{4}",
          "explanation": "Getting the same $y$-value from the parabola confirms the point genuinely lies on both graphs.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the point of contact.",
          "workingLatex": "\\left(-\\tfrac{1}{2},\\ \\tfrac{11}{4}\\right)",
          "explanation": "This single shared point is where the tangent grazes the parabola.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude.",
          "workingLatex": "c=\\tfrac{15}{4},\\quad \\left(-\\tfrac{1}{2},\\ \\tfrac{11}{4}\\right)",
          "explanation": "Both required results are now established and checked, completing the problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c=\\dfrac{15}{4}$, and the point of contact is $\\left(-\\dfrac{1}{2},\\ \\dfrac{11}{4}\\right)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "repeated-root",
      "quartic"
    ],
    "questionText": "Sketch the curve $y=x^{4}-4x^{2}$. Your solution should give the coordinates of all points where the curve meets the axes, state whether it crosses or touches at each, and identify the turning points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor out the common $x^{2}$.",
          "workingLatex": "y=x^{4}-4x^{2}=x^{2}(x^{2}-4)",
          "explanation": "Both terms share a factor of $x^{2}$, and removing it exposes a difference of two squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the difference of two squares.",
          "workingLatex": "x^{2}-4=(x-2)(x+2)\\Rightarrow y=x^{2}(x-2)(x+2)",
          "explanation": "Writing $x^{2}-4$ as $(x-2)(x+2)$ reveals the two outer roots clearly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the roots.",
          "workingLatex": "x=0,\\ x=2,\\ x=-2",
          "explanation": "Setting each factor to zero gives the points where the curve meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify the root $x=2$.",
          "workingLatex": "2^{4}-4(2)^{2}=16-16=0",
          "explanation": "Substituting confirms $(2,0)$ lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the root $x=-2$.",
          "workingLatex": "(-2)^{4}-4(-2)^{2}=16-16=0",
          "explanation": "Substituting confirms $(-2,0)$ lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the root at $x=0$.",
          "workingLatex": "x^{2}\\ \\Rightarrow\\ \\text{even multiplicity}",
          "explanation": "The factor $x^{2}$ is squared, so the curve touches the $x$-axis at the origin rather than crossing it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the roots at $x=\\pm2$.",
          "workingLatex": "(x-2),(x+2)\\ \\Rightarrow\\ \\text{odd multiplicity}",
          "explanation": "Each of these factors is to the first power, so the curve crosses the axis at $x=-2$ and $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0\\Rightarrow y=0",
          "explanation": "The curve passes through the origin, so the $y$-intercept coincides with the touch point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the symmetry.",
          "workingLatex": "y(-x)=(-x)^{4}-4(-x)^{2}=x^{4}-4x^{2}=y(x)",
          "explanation": "Only even powers of $x$ appear, so the curve is symmetric about the $y$-axis, which halves the sketching work.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Determine the end behaviour.",
          "workingLatex": "y\\approx x^{4}\\ \\text{for large }|x|",
          "explanation": "The leading term $x^{4}$ dominates far out, so both ends of this positive quartic rise to $+\\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Differentiate to find the turning points.",
          "workingLatex": "\\frac{dy}{dx}=4x^{3}-8x=4x(x^{2}-2)",
          "explanation": "Setting the gradient to zero locates the maximum and minima needed for an accurate sketch.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve $\\frac{dy}{dx}=0$.",
          "workingLatex": "4x(x^{2}-2)=0\\Rightarrow x=0,\\ x=\\pm\\sqrt{2}",
          "explanation": "Each factor gives a stationary point, producing three turning points in total.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the turning-point coordinates.",
          "workingLatex": "x=0:\\ y=0;\\quad x=\\pm\\sqrt{2}:\\ y=4-8=-4",
          "explanation": "There is a local maximum at the origin $(0,0)$ and two equal local minima at $(-\\sqrt{2},-4)$ and $(\\sqrt{2},-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe the sketch.",
          "workingLatex": "(-2,0)\\ \\text{cross},\\ (0,0)\\ \\text{touch},\\ (2,0)\\ \\text{cross}",
          "explanation": "The curve is a symmetric W-shape: falling from top-left, crossing at $x=-2$, dipping to $(-\\sqrt{2},-4)$, rising to touch the origin, dipping again to $(\\sqrt{2},-4)$, then crossing at $x=2$ and rising to top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve meets the axes at $(-2,0)$ and $(2,0)$ (crossing) and at the origin $(0,0)$ (touching). It is a positive quartic, symmetric about the $y$-axis, with a local maximum at $(0,0)$ and local minima at $(-\\sqrt{2},-4)$ and $(\\sqrt{2},-4)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "repeated-root",
      "finding-constants"
    ],
    "questionText": "A cubic curve has a repeated root at $x=2$ and a further root at $x=-1$, and it passes through the point $(0,8)$. Given that its equation can be written $y=a(x-2)^{2}(x+1)$, find the value of $a$, hence write down the equation of the curve, and sketch it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the roots as factors.",
          "workingLatex": "y=a(x-2)^{2}(x+1)",
          "explanation": "A repeated root at $x=2$ gives a squared factor $(x-2)^{2}$, and the further root at $x=-1$ gives the factor $(x+1)$; the unknown $a$ fixes the vertical scale.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known point $(0,8)$.",
          "workingLatex": "8=a(0-2)^{2}(0+1)",
          "explanation": "The curve passes through $(0,8)$, so putting $x=0$, $y=8$ into the equation lets us solve for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the right-hand side.",
          "workingLatex": "8=a(4)(1)=4a",
          "explanation": "Evaluating the brackets reduces the equation to a simple linear one in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $a$.",
          "workingLatex": "a=\\frac{8}{4}=2",
          "explanation": "Dividing both sides by $4$ gives the scale factor that makes the curve pass through $(0,8)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the equation.",
          "workingLatex": "y=2(x-2)^{2}(x+1)",
          "explanation": "Substituting $a=2$ gives the specific cubic satisfying all the conditions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the squared bracket.",
          "workingLatex": "(x-2)^{2}=x^{2}-4x+4",
          "explanation": "Expanding first makes it straightforward to obtain the polynomial form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply by $(x+1)$.",
          "workingLatex": "(x^{2}-4x+4)(x+1)=x^{3}-3x^{2}+4",
          "explanation": "Multiplying out and collecting like terms gives the cubic inside the constant factor; the $x$ term cancels to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply through by $2$.",
          "workingLatex": "y=2x^{3}-6x^{2}+8",
          "explanation": "Applying the scale factor $a=2$ produces the fully expanded equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the point $(0,8)$.",
          "workingLatex": "y=2(0)^{3}-6(0)^{2}+8=8",
          "explanation": "The expanded form reproduces the given point, confirming the expansion is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the repeated root $x=2$.",
          "workingLatex": "2(8)-6(4)+8=16-24+8=0",
          "explanation": "Substituting $x=2$ gives $y=0$, confirming the curve meets the axis there.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the root $x=-1$.",
          "workingLatex": "2(-1)-6(1)+8=-2-6+8=0",
          "explanation": "Substituting $x=-1$ also gives $y=0$, confirming the third root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Classify the roots.",
          "workingLatex": "(x-2)^{2}\\ \\text{touch},\\quad (x+1)\\ \\text{cross}",
          "explanation": "The squared factor means the curve touches the axis at $(2,0)$, while the single factor means it crosses at $(-1,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Determine the end behaviour.",
          "workingLatex": "y\\approx 2x^{3}\\ \\text{for large }|x|",
          "explanation": "The positive leading coefficient means $y\\to-\\infty$ as $x\\to-\\infty$ and $y\\to+\\infty$ as $x\\to+\\infty$: a positive cubic.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe the sketch.",
          "workingLatex": "(-1,0)\\ \\text{cross},\\ (0,8),\\ (2,0)\\ \\text{touch}",
          "explanation": "The curve rises from bottom-left, crosses at $(-1,0)$, passes through the $y$-intercept $(0,8)$, comes down to touch the axis at $(2,0)$, then rises to the top-right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=2$, so $y=2(x-2)^{2}(x+1)=2x^{3}-6x^{2}+8$. The curve crosses the $x$-axis at $(-1,0)$, touches it at $(2,0)$, and has $y$-intercept $(0,8)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "set",
    "tags": [
      "curve-sketching",
      "sign-analysis",
      "cubic"
    ],
    "questionText": "The curve $C$ has equation $y=(x-1)(x-2)(x-4)$. Find the coordinates of the points where $C$ meets the coordinate axes, and use a sketch to determine the set of values of $x$ for which $y>0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the roots from the factors.",
          "workingLatex": "x=1,\\ x=2,\\ x=4",
          "explanation": "The equation is already factorised, so each bracket set to zero gives a point where the curve meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the $x$-axis intercepts.",
          "workingLatex": "(1,0),\\ (2,0),\\ (4,0)",
          "explanation": "These are the three simple roots, so the curve crosses the axis at each of them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify a root, say $x=1$.",
          "workingLatex": "(1-1)(1-2)(1-4)=(0)(-1)(-3)=0",
          "explanation": "A quick substitution confirms the factorised roots are correct.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0:\\ (0-1)(0-2)(0-4)=(-1)(-2)(-4)=-8",
          "explanation": "Setting $x=0$ gives the point $(0,-8)$ where the curve meets the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Determine the end behaviour.",
          "workingLatex": "y\\approx x^{3}\\ \\text{for large }|x|",
          "explanation": "Expanding would give a positive $x^{3}$ term, so this is a positive cubic: down on the left, up on the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the sign for $x<1$.",
          "workingLatex": "(-)(-)(-)=-\\ \\Rightarrow\\ y<0",
          "explanation": "For $x$ below all three roots every factor is negative, and three negatives multiply to a negative, so the curve is below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the sign for $1<x<2$.",
          "workingLatex": "(+)(-)(-)=+\\ \\Rightarrow\\ y>0",
          "explanation": "Here $(x-1)$ is positive while the other two factors stay negative, giving a positive product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the sign for $2<x<4$.",
          "workingLatex": "(+)(+)(-)=-\\ \\Rightarrow\\ y<0",
          "explanation": "Now two factors are positive and one negative, so the product is negative and the curve dips below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the sign for $x>4$.",
          "workingLatex": "(+)(+)(+)=+\\ \\Rightarrow\\ y>0",
          "explanation": "Beyond the largest root all factors are positive, so the curve stays above the axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the nature of each crossing.",
          "workingLatex": "\\text{all roots simple}\\ \\Rightarrow\\ \\text{curve crosses at each}",
          "explanation": "Since every factor is to the first power, the curve passes straight through the axis at $x=1,2,4$, alternating sign as it goes.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Describe the sketch.",
          "workingLatex": "(1,0)\\to(2,0)\\to(4,0),\\ (0,-8)",
          "explanation": "The curve comes up from bottom-left, crosses at $(1,0)$, peaks, drops through $(2,0)$, troughs, then rises through $(4,0)$ to the top-right, passing through $(0,-8)$ on the way up.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Read off where $y>0$.",
          "workingLatex": "y>0\\ \\text{on}\\ (1,2)\\ \\text{and}\\ (4,\\infty)",
          "explanation": "The sign analysis and sketch agree that the curve is above the axis only between the first two roots and beyond the last root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution set.",
          "workingLatex": "\\{x:\\ 1<x<2\\}\\cup\\{x:\\ x>4\\}",
          "explanation": "Combining the two positive regions gives the full set of $x$-values for which $y>0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve meets the axes at $(1,0)$, $(2,0)$, $(4,0)$ and $(0,-8)$. It satisfies $y>0$ for $1<x<2$ or $x>4$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "curve-sketching",
      "turning-points",
      "cubic"
    ],
    "questionText": "The line $y=k$ meets the curve $y=x^{3}-3x$ at three distinct points. By finding the turning points of the curve, determine the set of values of the constant $k$ for which this happens.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the strategy.",
          "workingLatex": "\\text{horizontal line }y=k\\ \\text{cuts where its height matches the curve}",
          "explanation": "The number of intersections of a horizontal line with a cubic depends on where $k$ sits relative to the local maximum and minimum heights.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve.",
          "workingLatex": "\\frac{dy}{dx}=3x^{2}-3",
          "explanation": "The turning points, where the gradient is zero, mark the peak and trough that control how many times a horizontal line can cross.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve $\\frac{dy}{dx}=0$.",
          "workingLatex": "3x^{2}-3=0\\Rightarrow x^{2}=1\\Rightarrow x=\\pm1",
          "explanation": "Setting the gradient to zero gives the $x$-coordinates of the two turning points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find $y$ at $x=-1$.",
          "workingLatex": "(-1)^{3}-3(-1)=-1+3=2",
          "explanation": "Substituting gives the height of one turning point, at $(-1,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $y$ at $x=1$.",
          "workingLatex": "(1)^{3}-3(1)=1-3=-2",
          "explanation": "Substituting gives the height of the other turning point, at $(1,-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the second derivative.",
          "workingLatex": "\\frac{d^{2}y}{dx^{2}}=6x",
          "explanation": "The sign of the second derivative tells us which turning point is a maximum and which is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify $x=-1$.",
          "workingLatex": "6(-1)=-6<0\\ \\Rightarrow\\ \\text{maximum}",
          "explanation": "A negative second derivative means the curve is concave down, so $(-1,2)$ is a local maximum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Classify $x=1$.",
          "workingLatex": "6(1)=6>0\\ \\Rightarrow\\ \\text{minimum}",
          "explanation": "A positive second derivative means the curve is concave up, so $(1,-2)$ is a local minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the turning points.",
          "workingLatex": "\\text{max }(-1,2),\\quad \\text{min }(1,-2)",
          "explanation": "These two heights, $2$ and $-2$, are the critical values that determine the number of intersections.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the end behaviour.",
          "workingLatex": "y\\to-\\infty\\ (x\\to-\\infty),\\quad y\\to+\\infty\\ (x\\to+\\infty)",
          "explanation": "As a positive cubic the curve runs from bottom-left to top-right, with a local hump in between.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reason about the number of intersections.",
          "workingLatex": "\\text{min }y<k<\\text{max }y\\ \\Rightarrow\\ 3\\ \\text{crossings}",
          "explanation": "A horizontal line cuts the curve three times only when it passes through the wiggle, i.e. between the trough height and the peak height.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Consider the boundary values.",
          "workingLatex": "k=2\\ \\text{or}\\ k=-2\\ \\Rightarrow\\ \\text{line touches a turning point}",
          "explanation": "At $k=\\pm2$ the line just touches a turning point, giving only two distinct intersection points, so these values are excluded.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution set.",
          "workingLatex": "-2<k<2",
          "explanation": "Only strictly between the trough and peak heights does the line meet the curve at three distinct points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve has a maximum at $(-1,2)$ and a minimum at $(1,-2)$, so there are three distinct intersection points precisely when $-2<k<2$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "factor-theorem",
      "cubic"
    ],
    "questionText": "Find the coordinates of the points where the curve $y=x^{3}-2x^{2}-5x+6$ meets the line $y=6$, giving your answers in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the curve equal to the line.",
          "workingLatex": "x^{3}-2x^{2}-5x+6=6",
          "explanation": "At any meeting point the two $y$-values coincide, so equating them locates the $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make one side zero.",
          "workingLatex": "x^{3}-2x^{2}-5x=0",
          "explanation": "Subtracting $6$ from both sides cancels the constant term, leaving a tidy cubic equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor out the common $x$.",
          "workingLatex": "x(x^{2}-2x-5)=0",
          "explanation": "Every term now has a factor of $x$, and removing it reduces the problem to a linear factor and a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the first solution.",
          "workingLatex": "x=0",
          "explanation": "Setting the factor $x$ to zero gives an immediate root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm $x=0$ by the factor theorem.",
          "workingLatex": "0^{3}-2(0)^{2}-5(0)=0",
          "explanation": "Substituting $x=0$ into the rearranged cubic gives zero, so $x$ is genuinely a factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the remaining quadratic.",
          "workingLatex": "x^{2}-2x-5=0",
          "explanation": "This quadratic does not factorise over the integers, so the quadratic formula is the reliable route.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the quadratic formula.",
          "workingLatex": "x=\\frac{2\\pm\\sqrt{(-2)^{2}-4(1)(-5)}}{2}=\\frac{2\\pm\\sqrt{4+20}}{2}",
          "explanation": "Substituting $a=1$, $b=-2$, $c=-5$ into the formula sets up the two remaining roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the surd.",
          "workingLatex": "\\sqrt{24}=2\\sqrt{6}",
          "explanation": "Since $24=4\\times6$ and $4$ is a perfect square, the root simplifies to $2\\sqrt{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the expression.",
          "workingLatex": "x=\\frac{2\\pm2\\sqrt{6}}{2}=1\\pm\\sqrt{6}",
          "explanation": "Dividing numerator and denominator by $2$ gives the two exact roots in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List the three $x$-values.",
          "workingLatex": "x=0,\\ x=1+\\sqrt{6},\\ x=1-\\sqrt{6}",
          "explanation": "These are all the solutions of the cubic, so there are three meeting points.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the quadratic root by substitution.",
          "workingLatex": "(1+\\sqrt{6})^{2}-2(1+\\sqrt{6})-5=7+2\\sqrt{6}-2-2\\sqrt{6}-5=0",
          "explanation": "The surd terms cancel and the result is zero, confirming $1+\\sqrt{6}$ really is a root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Attach the common $y$-value.",
          "workingLatex": "y=6\\ \\text{at every meeting point}",
          "explanation": "Each solution lies on the line $y=6$, so every point of intersection has $y$-coordinate $6$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the coordinates.",
          "workingLatex": "(0,6),\\ (1+\\sqrt{6},6),\\ (1-\\sqrt{6},6)",
          "explanation": "Pairing each $x$-value with $y=6$ gives the three exact points where the curve meets the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "The curve meets $y=6$ at $(0,\\,6)$, $(1+\\sqrt{6},\\,6)$ and $(1-\\sqrt{6},\\,6)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "quartic",
      "intercepts"
    ],
    "questionText": "Sketch the curve $y=(x^{2}-1)(x^{2}-9)$. State the coordinates of all axis intercepts, describe the four points where the curve crosses the $x$-axis, and describe the overall shape.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise each bracket as a difference of two squares.",
          "workingLatex": "(x^{2}-1)(x^{2}-9)=(x-1)(x+1)(x-3)(x+3)",
          "explanation": "Both brackets are differences of squares, and fully factorising exposes the four roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the roots.",
          "workingLatex": "x=\\pm1,\\ x=\\pm3",
          "explanation": "Setting each linear factor to zero gives the four points where the curve meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Verify the root $x=1$.",
          "workingLatex": "(1^{2}-1)(1^{2}-9)=(0)(-8)=0",
          "explanation": "Substituting confirms $(1,0)$ lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify the root $x=3$.",
          "workingLatex": "(3^{2}-1)(3^{2}-9)=(8)(0)=0",
          "explanation": "Substituting confirms $(3,0)$ lies on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the nature of the roots.",
          "workingLatex": "\\text{all four factors simple}\\ \\Rightarrow\\ \\text{four crossings}",
          "explanation": "Each factor is to the first power, so the curve crosses the axis at $x=-3,-1,1,3$ rather than touching.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0:\\ (0-1)(0-9)=(-1)(-9)=9",
          "explanation": "Setting $x=0$ gives the point $(0,9)$ where the curve meets the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand to analyse the shape.",
          "workingLatex": "y=x^{4}-10x^{2}+9",
          "explanation": "The expanded form shows only even powers of $x$ and a positive leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the symmetry.",
          "workingLatex": "y(-x)=x^{4}-10x^{2}+9=y(x)",
          "explanation": "Only even powers appear, so the curve is symmetric about the $y$-axis; the left half mirrors the right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Determine the end behaviour.",
          "workingLatex": "y\\approx x^{4}\\ \\text{for large }|x|",
          "explanation": "The leading $x^{4}$ term dominates far out, so both ends of this positive quartic rise to $+\\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Differentiate to find turning points.",
          "workingLatex": "\\frac{dy}{dx}=4x^{3}-20x=4x(x^{2}-5)",
          "explanation": "Setting the gradient to zero locates the maximum and minima that shape the curve between its roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve $\\frac{dy}{dx}=0$.",
          "workingLatex": "4x(x^{2}-5)=0\\Rightarrow x=0,\\ x=\\pm\\sqrt{5}",
          "explanation": "Each factor gives a stationary point, producing three turning points in total.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the turning-point heights.",
          "workingLatex": "x=0:\\ y=9;\\quad x=\\pm\\sqrt{5}:\\ y=25-50+9=-16",
          "explanation": "There is a local maximum at $(0,9)$ between the inner roots, and two equal minima at $(\\pm\\sqrt{5},-16)$ down in the outer dips.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the crossings in order.",
          "workingLatex": "x=-3\\to-1\\to1\\to3",
          "explanation": "Reading left to right the curve falls from top-left, crosses at $x=-3$, dips to a minimum, rises to cross at $x=-1$, peaks at $(0,9)$, falls to cross at $x=1$, dips again, then rises to cross at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the shape.",
          "workingLatex": "\\text{positive quartic, symmetric, two dips below the axis}",
          "explanation": "Overall it is a symmetric W-style quartic with two troughs of depth $-16$ and a central hump reaching $(0,9)$, crossing the axis four times.",
          "diagram": null
        }
      ],
      "finalAnswer": "Axis intercepts: $(-3,0)$, $(-1,0)$, $(1,0)$, $(3,0)$ and $(0,9)$. The curve is a positive quartic, symmetric about the $y$-axis, crossing the $x$-axis at all four roots, with a local maximum at $(0,9)$ and local minima at $(-\\sqrt{5},-16)$ and $(\\sqrt{5},-16)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "tangency",
      "discriminant"
    ],
    "questionText": "The curve $y=x^{2}+ax+9$ touches the $x$-axis, where $a$ is a constant. Find the possible values of $a$, and for the positive value of $a$ state the coordinates of the point where the curve touches the axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for touching the $x$-axis.",
          "workingLatex": "b^{2}-4ac=0",
          "explanation": "Touching the $x$-axis means the parabola meets it at exactly one repeated point, which occurs precisely when the discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficients.",
          "workingLatex": "\\text{coeff of }x^{2}=1,\\quad b=a,\\quad c=9",
          "explanation": "Reading off the coefficients of $x^{2}+ax+9$ prepares the discriminant substitution; note the unknown $a$ plays the role of $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the discriminant.",
          "workingLatex": "a^{2}-4(1)(9)",
          "explanation": "Substituting the coefficients builds the expression that must vanish for tangency with the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the discriminant to zero.",
          "workingLatex": "a^{2}-36=0",
          "explanation": "Applying the touching condition turns the geometry into a single equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $a$.",
          "workingLatex": "a^{2}=36\\Rightarrow a=\\pm6",
          "explanation": "Taking the square root gives two values, since both a positive and a negative $a$ can make the parabola sit tangent to the axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the two possible values.",
          "workingLatex": "a=6\\quad\\text{or}\\quad a=-6",
          "explanation": "Each value gives a parabola that just touches the $x$-axis, one shifted left and one shifted right.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Select the positive value.",
          "workingLatex": "a=6",
          "explanation": "The question asks for the touch point corresponding to the positive value of $a$, so we take $a=6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute $a=6$ into the curve.",
          "workingLatex": "y=x^{2}+6x+9",
          "explanation": "Putting $a=6$ back gives the specific quadratic whose graph touches the axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recognise the perfect square.",
          "workingLatex": "x^{2}+6x+9=(x+3)^{2}",
          "explanation": "The expression is a perfect square because $3^{2}=9$ and $2\\times3=6$, which is exactly why the curve touches rather than crosses.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the touch point's $x$-coordinate.",
          "workingLatex": "(x+3)^{2}=0\\Rightarrow x=-3",
          "explanation": "The single repeated root of the squared factor gives the $x$-value where the curve meets the axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the $y$-coordinate.",
          "workingLatex": "y=0",
          "explanation": "The point lies on the $x$-axis, so its $y$-coordinate is zero by definition of touching the axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify by substitution.",
          "workingLatex": "(-3)^{2}+6(-3)+9=9-18+9=0",
          "explanation": "Substituting $x=-3$ gives $y=0$, confirming the curve genuinely touches the axis there.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the touch point.",
          "workingLatex": "(-3,\\,0)",
          "explanation": "For $a=6$ the parabola has its vertex on the axis at $(-3,0)$, which is the point of tangency.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=\\pm6$. For the positive value $a=6$, the curve touches the $x$-axis at $(-3,\\,0)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "curve-sketching",
      "cubics",
      "turning-points"
    ],
    "questionText": "Find the set of values of the constant $k$ for which the equation $x^{3}-3x+k=0$ has three distinct real roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Reframe the problem graphically.",
          "workingLatex": "f(x)=x^{3}-3x+k",
          "explanation": "The roots of the equation are where the curve $y=f(x)$ cuts the $x$-axis. A positive cubic gives three distinct roots exactly when its graph rises to a local maximum above the axis and falls to a local minimum below it, so I will study the turning points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to locate turning points.",
          "workingLatex": "f'(x)=3x^{2}-3",
          "explanation": "Turning points occur where the gradient is zero, so I differentiate first to find that gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the derivative to zero.",
          "workingLatex": "3x^{2}-3=0",
          "explanation": "At a maximum or minimum the tangent is horizontal, meaning the derivative equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the stationary $x$-values.",
          "workingLatex": "x^{2}=1\\Rightarrow x=\\pm 1",
          "explanation": "Dividing by $3$ and taking square roots gives the two positions of the turning points; notice $k$ does not affect them because it only shifts the curve vertically.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify which is the maximum.",
          "workingLatex": "x=-1\\ \\text{gives the local maximum}",
          "explanation": "For a positive cubic the left turning point is the local maximum, so $x=-1$ is where the curve peaks.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the local maximum value.",
          "workingLatex": "f(-1)=(-1)^{3}-3(-1)+k=2+k",
          "explanation": "Substituting $x=-1$ gives the height of the peak in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the minimum.",
          "workingLatex": "x=1\\ \\text{gives the local minimum}",
          "explanation": "The right turning point is the local minimum for a positive cubic, so the curve bottoms out at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the local minimum value.",
          "workingLatex": "f(1)=(1)^{3}-3(1)+k=-2+k",
          "explanation": "Substituting $x=1$ gives the height of the trough in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition on the peak.",
          "workingLatex": "2+k>0",
          "explanation": "For the curve to cross the axis on both sides of the peak, the maximum must sit strictly above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve that inequality.",
          "workingLatex": "k>-2",
          "explanation": "Rearranging gives a lower bound on $k$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the condition on the trough.",
          "workingLatex": "-2+k<0",
          "explanation": "The minimum must sit strictly below the axis so the curve genuinely dips underneath before rising again, guaranteeing a third crossing.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve that inequality.",
          "workingLatex": "k<2",
          "explanation": "Rearranging gives an upper bound on $k$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the two conditions.",
          "workingLatex": "-2<k<2",
          "explanation": "Both requirements must hold at once, so I take the overlap of the two ranges.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the boundary behaviour.",
          "workingLatex": "k=2\\ \\text{or}\\ k=-2\\Rightarrow\\text{repeated root}",
          "explanation": "At the endpoints a turning point sits exactly on the axis, giving a repeated root and only two distinct roots, which is why the inequalities are strict.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer.",
          "workingLatex": "\\{\\,k:-2<k<2\\,\\}",
          "explanation": "This is the full set of values for which the cubic meets the $x$-axis in three separate places.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2<k<2$"
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "tangents",
      "repeated-roots"
    ],
    "questionText": "Show that the line $y=3x-2$ is a tangent to the curve $y=x^{3}$, and find the coordinates of the point of contact.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the intersection.",
          "workingLatex": "x^{3}=3x-2",
          "explanation": "Where the line meets the curve their $y$-values are equal, so I equate the two expressions. A tangent will show up as a repeated root at the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect on one side.",
          "workingLatex": "x^{3}-3x+2=0",
          "explanation": "Bringing everything to one side turns the meeting condition into a single cubic whose roots are the $x$-coordinates of the intersections.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Look for an obvious root.",
          "workingLatex": "\\text{try }x=1",
          "explanation": "Testing small integers is the quickest way to find a first factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify the trial root.",
          "workingLatex": "1-3+2=0\\ \\checkmark",
          "explanation": "The expression vanishes at $x=1$, so $(x-1)$ is a factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out $(x-1)$.",
          "workingLatex": "x^{3}-3x+2=(x-1)(x^{2}+x-2)",
          "explanation": "Dividing the cubic by the known factor leaves a quadratic to deal with.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}+x-2=(x-1)(x+2)",
          "explanation": "The quadratic factorises neatly, and notice it produces another factor of $(x-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the full factorisation.",
          "workingLatex": "(x-1)^{2}(x+2)=0",
          "explanation": "Combining the factors reveals the structure of all the intersections at once.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the repeated factor.",
          "workingLatex": "(x-1)^{2}\\Rightarrow\\text{repeated root at }x=1",
          "explanation": "A squared factor means the line meets the curve twice at the same place; the two intersection points have merged, which is precisely what tangency means.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the simple factor.",
          "workingLatex": "(x+2)\\Rightarrow x=-2",
          "explanation": "The remaining simple root at $x=-2$ is an ordinary crossing point elsewhere, not the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the $y$-coordinate of contact.",
          "workingLatex": "y=3(1)-2=1",
          "explanation": "Substituting $x=1$ into the line gives the height at the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the point of contact.",
          "workingLatex": "(1,\\,1)",
          "explanation": "This is where the line just touches the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm using gradients.",
          "workingLatex": "\\frac{dy}{dx}=3x^{2}",
          "explanation": "As an independent check, a tangent must share the curve's gradient at the contact point, so I differentiate the curve.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the curve's gradient there.",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=3(1)^{2}=3",
          "explanation": "At $x=1$ the curve's gradient is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the line's gradient.",
          "workingLatex": "3=3\\ \\checkmark",
          "explanation": "The line $y=3x-2$ also has gradient $3$, so it matches the curve in both position and slope at $(1,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude.",
          "workingLatex": "\\therefore\\ \\text{tangent at }(1,\\,1)",
          "explanation": "The repeated root and the matching gradient together prove the line is a tangent, touching the curve at $(1,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line is a tangent (repeated root and matching gradient), touching at $(1,\\,1)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "set",
    "tags": [
      "curve-sketching",
      "cubics",
      "inequalities"
    ],
    "questionText": "Sketch the curve $y=(x+2)(x-1)^{2}$, showing all intercepts with the axes, and hence state the set of values of $x$ for which $y\\ge 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the roots from the factors.",
          "workingLatex": "(x+2)(x-1)^{2}=0",
          "explanation": "Setting $y=0$ shows the curve meets the $x$-axis wherever a factor is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the simple root.",
          "workingLatex": "x+2=0\\Rightarrow x=-2",
          "explanation": "The factor $(x+2)$ appears once, so $x=-2$ is a single root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the repeated root.",
          "workingLatex": "(x-1)^{2}=0\\Rightarrow x=1",
          "explanation": "The squared factor gives a repeated root at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Describe behaviour at the simple root.",
          "workingLatex": "x=-2:\\ \\text{curve crosses the axis}",
          "explanation": "At a single root the curve passes straight through the axis, changing sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe behaviour at the repeated root.",
          "workingLatex": "x=1:\\ \\text{curve touches the axis}",
          "explanation": "At a repeated root the curve just touches the axis and turns back, so the sign does not change there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine the end behaviour.",
          "workingLatex": "y\\approx x^{3}\\ \\text{for large }|x|",
          "explanation": "Multiplying the leading terms gives $x^{3}$, so this is a positive cubic: down on the far left, up on the far right.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0:\\ y=(2)(-1)^{2}=2",
          "explanation": "Setting $x=0$ gives where the curve crosses the vertical axis, at $(0,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summarise the sketch.",
          "workingLatex": "\\text{cross }(-2,0),\\ \\text{touch }(1,0),\\ \\text{through }(0,2)",
          "explanation": "The curve rises from the bottom left, crosses at $x=-2$, climbs through $(0,2)$, comes down to touch the axis at $x=1$, then rises again to the top right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the sign for $x<-2$.",
          "workingLatex": "x=-3:\\ (-1)(16)=-16<0",
          "explanation": "To the left of the first root the curve lies below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the sign for $-2<x<1$.",
          "workingLatex": "x=0:\\ (2)(1)=2>0",
          "explanation": "Between the crossing and the touch the curve lies above the axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the sign for $x>1$.",
          "workingLatex": "x=2:\\ (4)(1)=4>0",
          "explanation": "Because the touch at $x=1$ does not change the sign, the curve stays above the axis beyond it too.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the equality points.",
          "workingLatex": "y=0\\ \\text{at}\\ x=-2\\ \\text{and}\\ x=1",
          "explanation": "These points satisfy $y\\ge 0$ as equalities, so they are included in the answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the positive regions.",
          "workingLatex": "y\\ge 0\\ \\text{for}\\ x\\ge -2",
          "explanation": "The curve is non-negative from the crossing at $x=-2$ onwards, since it stays on or above the axis for every larger $x$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solution set.",
          "workingLatex": "\\{\\,x:x\\ge -2\\,\\}",
          "explanation": "This single interval captures every $x$ for which the curve is at or above the axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\{\\,x:x\\ge -2\\,\\}$"
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "cubics",
      "repeated-roots"
    ],
    "questionText": "A cubic curve passes through the origin, has a repeated root at $x=3$, and passes through the point $(1,8)$. Find the equation of the curve in the form $y=px^{3}+qx^{2}+rx$, and describe its sketch.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the root at the origin.",
          "workingLatex": "\\text{through }(0,0)\\Rightarrow\\text{factor }x",
          "explanation": "Passing through the origin means $y=0$ when $x=0$, so $x$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the repeated root.",
          "workingLatex": "\\text{repeated root at }3\\Rightarrow(x-3)^{2}",
          "explanation": "A repeated root at $x=3$ contributes a squared factor, where the curve will touch the axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the general form.",
          "workingLatex": "y=a\\,x(x-3)^{2}",
          "explanation": "These factors fix the shape, but a leading constant $a$ is still needed because many cubics share the same roots.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring in the extra point.",
          "workingLatex": "(1,8):\\ 8=a(1)(1-3)^{2}",
          "explanation": "The point $(1,8)$ is not a root, so it pins down the value of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the bracket.",
          "workingLatex": "(1-3)^{2}=(-2)^{2}=4",
          "explanation": "Evaluating the squared bracket keeps the arithmetic clean.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the equation for $a$.",
          "workingLatex": "8=4a",
          "explanation": "Substituting the point leaves a simple linear equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $a$.",
          "workingLatex": "a=2",
          "explanation": "Dividing by $4$ gives the leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the factored equation.",
          "workingLatex": "y=2x(x-3)^{2}",
          "explanation": "Putting $a=2$ back gives the complete curve in factored form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the square.",
          "workingLatex": "(x-3)^{2}=x^{2}-6x+9",
          "explanation": "Expanding is the first step towards the requested expanded form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Multiply through.",
          "workingLatex": "y=2x(x^{2}-6x+9)",
          "explanation": "Now distribute the $2x$ across the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the terms.",
          "workingLatex": "y=2x^{3}-12x^{2}+18x",
          "explanation": "This is the cubic in the required expanded form.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the given point.",
          "workingLatex": "2-12+18=8\\ \\checkmark",
          "explanation": "Substituting $x=1$ recovers $y=8$, confirming the equation is correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the intercepts on the sketch.",
          "workingLatex": "\\text{cross }(0,0),\\ \\text{touch }(3,0)",
          "explanation": "The single root at the origin is a crossing, and the repeated root at $x=3$ is where the curve touches the axis.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe the overall shape.",
          "workingLatex": "y\\approx 2x^{3}\\ \\text{for large }|x|",
          "explanation": "With a positive leading coefficient the curve comes up from the bottom left, crosses at the origin, dips to touch the axis at $(3,0)$, then rises steeply to the top right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=2x^{3}-12x^{2}+18x$; crosses at $(0,0)$, touches at $(3,0)$, positive cubic shape."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intersections",
      "reciprocal-curve"
    ],
    "questionText": "Determine the number of points of intersection of the curve $y=\\dfrac{2}{x}$ and the line $y=x-1$, and find the coordinates of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two expressions.",
          "workingLatex": "\\frac{2}{x}=x-1",
          "explanation": "At any intersection the curve and line share the same $y$-value, so I set them equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the restriction.",
          "workingLatex": "x\\ne 0",
          "explanation": "The reciprocal curve is undefined at $x=0$, so any solution must avoid that value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Clear the fraction.",
          "workingLatex": "2=x(x-1)",
          "explanation": "Multiplying both sides by $x$ removes the denominator, which is valid since $x\\ne 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the right-hand side.",
          "workingLatex": "2=x^{2}-x",
          "explanation": "Expanding turns the equation into a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to zero.",
          "workingLatex": "x^{2}-x-2=0",
          "explanation": "Collecting everything on one side prepares the quadratic for analysis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the discriminant.",
          "workingLatex": "b^{2}-4ac=(-1)^{2}-4(1)(-2)=9",
          "explanation": "The discriminant tells me how many real solutions exist before solving.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the discriminant.",
          "workingLatex": "9>0\\Rightarrow\\text{two real roots}",
          "explanation": "A positive discriminant means two distinct real solutions, so the curve and line cross twice.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic.",
          "workingLatex": "(x-2)(x+1)=0",
          "explanation": "Factorising gives the two $x$-coordinates directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the solutions.",
          "workingLatex": "x=2\\ \\text{or}\\ x=-1",
          "explanation": "Each factor set to zero gives one intersection $x$-value, and both are non-zero so both are valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find $y$ at the first point.",
          "workingLatex": "x=2:\\ y=\\frac{2}{2}=1",
          "explanation": "Substituting into the curve gives the corresponding height.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the first point.",
          "workingLatex": "(2,\\,1)",
          "explanation": "This is the first intersection.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find $y$ at the second point.",
          "workingLatex": "x=-1:\\ y=\\frac{2}{-1}=-2",
          "explanation": "Substituting the other value into the curve gives its height.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the second point.",
          "workingLatex": "(-1,\\,-2)",
          "explanation": "This is the second intersection.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify on the line.",
          "workingLatex": "x-1:\\ 2-1=1,\\ -1-1=-2\\ \\checkmark",
          "explanation": "Checking both points on the line as well confirms they truly lie on both graphs.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude.",
          "workingLatex": "\\text{two intersections: }(2,1),\\,(-1,-2)",
          "explanation": "The line meets the reciprocal curve in exactly two points, as the discriminant predicted.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two points: $(2,\\,1)$ and $(-1,\\,-2)$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "set",
    "tags": [
      "curve-sketching",
      "cubics",
      "line-curve-intersection"
    ],
    "questionText": "The line $y=x+c$ and the curve $y=x^{3}-2x$ are drawn on the same axes. Find the set of values of the constant $c$ for which the line meets the curve in exactly one point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate line and curve.",
          "workingLatex": "x^{3}-2x=x+c",
          "explanation": "Intersections occur where the two $y$-values agree, so I set the expressions equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into a tidy form.",
          "workingLatex": "x^{3}-3x=c",
          "explanation": "Isolating $c$ on the right lets me view the problem as a fixed curve meeting a horizontal line $y=c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Define a helper function.",
          "workingLatex": "g(x)=x^{3}-3x",
          "explanation": "The number of intersections equals the number of times the horizontal line $y=c$ crosses $g(x)$, so I analyse $g$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate to find turning points.",
          "workingLatex": "g'(x)=3x^{2}-3",
          "explanation": "The turning points of $g$ decide how many times a horizontal line can cross it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for stationary points.",
          "workingLatex": "3x^{2}-3=0\\Rightarrow x=\\pm 1",
          "explanation": "Setting the gradient to zero locates where $g$ peaks and troughs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the local maximum value.",
          "workingLatex": "g(-1)=(-1)^{3}-3(-1)=2",
          "explanation": "At $x=-1$ the curve reaches its peak height of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the local minimum value.",
          "workingLatex": "g(1)=(1)^{3}-3(1)=-2",
          "explanation": "At $x=1$ the curve reaches its lowest local value of $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe three intersections.",
          "workingLatex": "-2<c<2\\Rightarrow\\text{three crossings}",
          "explanation": "When the horizontal line sits between the trough and the peak, it cuts $g$ three times.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the boundary cases.",
          "workingLatex": "c=2\\ \\text{or}\\ c=-2\\Rightarrow\\text{two crossings}",
          "explanation": "When the line passes exactly through a turning point it touches there, giving a repeated intersection and only two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Consider the line above the peak.",
          "workingLatex": "c>2\\Rightarrow\\text{one crossing}",
          "explanation": "Above the local maximum the line only meets the far right rising branch of the cubic once.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Consider the line below the trough.",
          "workingLatex": "c<-2\\Rightarrow\\text{one crossing}",
          "explanation": "Below the local minimum the line only meets the far left branch once.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the single-crossing conditions.",
          "workingLatex": "c<-2\\ \\text{or}\\ c>2",
          "explanation": "Exactly one intersection happens precisely when the line clears both turning points, above or below.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Express compactly.",
          "workingLatex": "|c|>2",
          "explanation": "Both branches together are neatly captured by the magnitude of $c$ exceeding $2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer.",
          "workingLatex": "\\{\\,c:c<-2\\}\\cup\\{c:c>2\\,\\}",
          "explanation": "This is the full set of constants giving a single point of contact between the line and the cubic.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c<-2$ or $c>2$ (equivalently $|c|>2$)."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "cubics",
      "modelling"
    ],
    "questionText": "The vertical displacement $y$ centimetres of a vibrating strip at a distance $x$ centimetres from one fixed end is modelled by $y=x(6-x)(x-2)$ for $0\\le x\\le 6$. Find where the strip is at its rest position, describe the shape of the curve, and interpret the model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set displacement to zero.",
          "workingLatex": "x(6-x)(x-2)=0",
          "explanation": "The strip is at its rest position when $y=0$, so I find where the product of factors vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve the first factor.",
          "workingLatex": "x=0",
          "explanation": "One factor gives $x=0$, the fixed left-hand end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the second factor.",
          "workingLatex": "6-x=0\\Rightarrow x=6",
          "explanation": "Another factor gives $x=6$, the fixed right-hand end.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the third factor.",
          "workingLatex": "x-2=0\\Rightarrow x=2",
          "explanation": "The last factor gives an interior rest point at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note all roots are simple.",
          "workingLatex": "x=0,\\,2,\\,6\\ \\text{each simple}",
          "explanation": "Each factor appears once, so the curve crosses the axis at each of these points rather than merely touching.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the leading term.",
          "workingLatex": "x\\cdot(-x)\\cdot x=-x^{3}",
          "explanation": "Multiplying the highest-power terms of each bracket shows the cubic has a negative leading coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the end behaviour.",
          "workingLatex": "\\text{negative cubic}",
          "explanation": "A negative cubic falls from top left to bottom right overall, which sets the direction of the wiggles between the roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the region $0<x<2$.",
          "workingLatex": "x=1:\\ (1)(5)(-1)=-5<0",
          "explanation": "Between the first two rest points the displacement is negative, so the strip is below its rest line there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the region $2<x<6$.",
          "workingLatex": "x=4:\\ (4)(2)(2)=16>0",
          "explanation": "Between $x=2$ and $x=6$ the displacement is positive, so the strip is above its rest line there.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the $y$-intercept.",
          "workingLatex": "x=0:\\ y=0",
          "explanation": "The curve starts exactly at the rest position at the left-hand end, consistent with a fixed support.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Describe the shape over the domain.",
          "workingLatex": "0\\to(-)\\to 2\\to(+)\\to 6",
          "explanation": "Across $[0,6]$ the curve leaves the origin, dips below the axis, rises back to cross at $x=2$, bulges above the axis, and returns to the axis at $x=6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the roots.",
          "workingLatex": "x=0,\\,2,\\,6",
          "explanation": "These are the positions where the strip is momentarily at its rest height, i.e. the nodes of the displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the negative region.",
          "workingLatex": "0<x<2:\\ y<0",
          "explanation": "On this stretch the strip is displaced downward from rest.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the positive region.",
          "workingLatex": "2<x<6:\\ y>0",
          "explanation": "On this longer stretch the strip is displaced upward, and being wider it accommodates a larger bulge than the downward dip.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude the interpretation.",
          "workingLatex": "\\text{one dip, then one larger hump}",
          "explanation": "Physically the model describes a strip pinned at $x=0,2,6$, sagging below rest near the left end and bowing above rest across the middle-right section.",
          "diagram": null
        }
      ],
      "finalAnswer": "Rest position at $x=0,\\,2,\\,6$; negative cubic that dips below rest on $0<x<2$ and rises above rest on $2<x<6$."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "curve-sketching",
      "quartics",
      "factorising"
    ],
    "questionText": "Sketch the curve $y=x^{4}-2x^{3}-3x^{2}$, showing clearly the coordinates of the points where it meets the axes and describing the behaviour at each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Take out a common factor.",
          "workingLatex": "y=x^{2}(x^{2}-2x-3)",
          "explanation": "Every term contains $x^{2}$, so factoring it out simplifies the remaining quadratic and exposes a repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^{2}-2x-3=(x-3)(x+1)",
          "explanation": "Factorising the bracket reveals the remaining roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the full factorisation.",
          "workingLatex": "y=x^{2}(x-3)(x+1)",
          "explanation": "This fully factored form lets me read off every root and its multiplicity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List the roots.",
          "workingLatex": "x=0\\ (\\text{double}),\\ x=3,\\ x=-1",
          "explanation": "The squared factor gives a repeated root at $0$, while the other two factors give simple roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Behaviour at the double root.",
          "workingLatex": "x=0:\\ \\text{touch}",
          "explanation": "A repeated root means the curve touches the axis at the origin and turns back without crossing.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Behaviour at the simple roots.",
          "workingLatex": "x=-1,\\ x=3:\\ \\text{cross}",
          "explanation": "Single roots are ordinary crossings where the curve changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determine end behaviour.",
          "workingLatex": "y\\approx x^{4}\\ \\text{for large }|x|",
          "explanation": "The positive leading term of an even-degree polynomial means both ends of the curve rise to $+\\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the $y$-intercept.",
          "workingLatex": "x=0:\\ y=0",
          "explanation": "The curve passes through the origin, which is also the touch point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the region $x<-1$.",
          "workingLatex": "x=-2:\\ (4)(-5)(-1)=20>0",
          "explanation": "Far to the left the curve is above the axis, matching the upward-rising end.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the region $-1<x<0$.",
          "workingLatex": "x=-0.5:\\ (0.25)(-3.5)(0.5)<0",
          "explanation": "After crossing at $x=-1$ the curve drops below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the region $0<x<3$.",
          "workingLatex": "x=1:\\ (1)(-2)(2)=-4<0",
          "explanation": "Because the touch at the origin does not change the sign, the curve stays below the axis on this stretch too.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test the region $x>3$.",
          "workingLatex": "x=4:\\ (16)(1)(5)=80>0",
          "explanation": "After crossing at $x=3$ the curve returns above the axis and rises steeply.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the touch direction.",
          "workingLatex": "\\text{origin: touch from below}",
          "explanation": "Since the curve is negative on both sides of $x=0$, it reaches up to touch the axis at the origin, forming a local maximum of value $0$ there.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the full sketch.",
          "workingLatex": "(-1,0)\\ \\text{cross},\\ (0,0)\\ \\text{touch},\\ (3,0)\\ \\text{cross}",
          "explanation": "The curve falls from the top left, crosses down at $x=-1$, rises to touch the axis at the origin, dips to a minimum, then rises through $x=3$ back up to the top right.",
          "diagram": null
        }
      ],
      "finalAnswer": "Meets axes at $(-1,0)$ and $(3,0)$ (crossing) and $(0,0)$ (touch from below); positive quartic with both ends rising."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "curve-sketching",
      "intersections",
      "comparing-curves"
    ],
    "questionText": "Find the coordinates of the points where the curves $y=x^{2}$ and $y=x^{3}$ intersect. Sketch both curves on the same axes and state, with reasoning, which curve is larger for $0<x<1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two curves.",
          "workingLatex": "x^{2}=x^{3}",
          "explanation": "Intersections occur where both curves share the same height, so I set the expressions equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bring to one side.",
          "workingLatex": "x^{3}-x^{2}=0",
          "explanation": "Collecting on one side lets me factorise and read off the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise.",
          "workingLatex": "x^{2}(x-1)=0",
          "explanation": "Taking out $x^{2}$ exposes a repeated factor and a simple factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $x$.",
          "workingLatex": "x=0\\ (\\text{repeated}),\\ x=1",
          "explanation": "The repeated factor gives $x=0$ and the simple factor gives $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the first intersection point.",
          "workingLatex": "x=0:\\ y=0",
          "explanation": "Both curves pass through the origin, giving the point $(0,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the second intersection point.",
          "workingLatex": "x=1:\\ y=1",
          "explanation": "At $x=1$ both give $y=1$, so they meet at $(1,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the parabola.",
          "workingLatex": "y=x^{2}",
          "explanation": "The first curve is a U-shaped parabola with its vertex at the origin, symmetric about the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the cubic.",
          "workingLatex": "y=x^{3}",
          "explanation": "The second curve is a rising cubic through the origin, negative for negative $x$ and positive for positive $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the shared points on the sketch.",
          "workingLatex": "\\text{cross at }(0,0)\\ \\text{and}\\ (1,1)",
          "explanation": "Both curves touch the origin and cross again at $(1,1)$, framing the region to compare.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare using a difference.",
          "workingLatex": "x^{2}-x^{3}=x^{2}(1-x)",
          "explanation": "Whichever curve is larger is decided by the sign of this difference, so I factorise it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sign of the first factor.",
          "workingLatex": "0<x<1\\Rightarrow x^{2}>0",
          "explanation": "On this interval $x^{2}$ is strictly positive.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sign of the second factor.",
          "workingLatex": "0<x<1\\Rightarrow 1-x>0",
          "explanation": "Since $x$ is below $1$, the factor $1-x$ is also positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine the signs.",
          "workingLatex": "x^{2}(1-x)>0\\Rightarrow x^{2}>x^{3}",
          "explanation": "A positive difference means $x^{2}$ sits above $x^{3}$ throughout the interval.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm with a value.",
          "workingLatex": "x=\\tfrac12:\\ 0.25>0.125",
          "explanation": "Checking $x=\\tfrac12$ gives $x^{2}=0.25$ against $x^{3}=0.125$, so $y=x^{2}$ is the larger curve for $0<x<1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Intersections at $(0,\\,0)$ and $(1,\\,1)$; for $0<x<1$ the curve $y=x^{2}$ is larger."
    }
  },
  {
    "id": "al.y1.pure.curve-sketching.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Curve sketching",
    "subtopicId": "al.y1.pure.curve-sketching",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "curve-sketching",
      "cubics",
      "roots-and-coefficients"
    ],
    "questionText": "The curve $y=x^{3}+ax^{2}+bx+c$ has roots at $x=-2$, $x=1$ and $x=3$. Find the values of $a$, $b$ and $c$, state the $y$-intercept, and describe the sketch of the curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the curve in factored form.",
          "workingLatex": "y=(x+2)(x-1)(x-3)",
          "explanation": "The roots give the factors directly, and no leading constant is needed because the coefficient of $x^{3}$ is already $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the leading coefficient matches.",
          "workingLatex": "1\\cdot1\\cdot1=1",
          "explanation": "Multiplying the leading $x$ terms of each bracket gives $x^{3}$ with coefficient $1$, matching the given form, so this factorisation is complete.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply the first two brackets.",
          "workingLatex": "(x+2)(x-1)=x^{2}+x-2",
          "explanation": "Expanding two brackets at a time keeps the algebra manageable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the final multiplication.",
          "workingLatex": "(x^{2}+x-2)(x-3)",
          "explanation": "Now I multiply the resulting quadratic by the remaining bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand term by term.",
          "workingLatex": "x^{3}-3x^{2}+x^{2}-3x-2x+6",
          "explanation": "Distributing every term of the quadratic across $(x-3)$ produces all six products before collecting.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect like terms.",
          "workingLatex": "y=x^{3}-2x^{2}-5x+6",
          "explanation": "Combining the $x^{2}$ and $x$ terms gives the cubic in expanded form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off $a$.",
          "workingLatex": "a=-2",
          "explanation": "Comparing coefficients of $x^{2}$ with the given form gives $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off $b$.",
          "workingLatex": "b=-5",
          "explanation": "Comparing coefficients of $x$ gives $b$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off $c$.",
          "workingLatex": "c=6",
          "explanation": "The constant term gives $c$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check $c$ against the roots.",
          "workingLatex": "-(-2)(1)(3)=6\\ \\checkmark",
          "explanation": "For a monic cubic the constant equals minus the product of the roots, and this confirms $c=6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the $y$-intercept.",
          "workingLatex": "x=0:\\ y=6",
          "explanation": "Setting $x=0$ gives the constant term, so the curve crosses the vertical axis at $(0,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Describe the end behaviour.",
          "workingLatex": "y\\approx x^{3}\\ \\text{for large }|x|",
          "explanation": "The positive leading coefficient means the curve rises from the bottom left to the top right.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mark the crossings.",
          "workingLatex": "(-2,0),\\ (1,0),\\ (3,0)",
          "explanation": "All three roots are simple, so the curve cuts straight through the axis at each of these points.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Locate the turning points qualitatively.",
          "workingLatex": "\\text{max in }(-2,1),\\ \\text{min in }(1,3)",
          "explanation": "Between consecutive roots the curve must turn, giving a local maximum between the first two roots and a local minimum between the last two.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise the sketch.",
          "workingLatex": "y=x^{3}-2x^{2}-5x+6",
          "explanation": "The curve rises from the bottom left, crosses at $x=-2$, peaks, passes through $(0,6)$, crosses at $x=1$, troughs, then crosses at $x=3$ and rises to the top right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=-2,\\ b=-5,\\ c=6$; $y$-intercept $(0,\\,6)$; positive cubic crossing at $x=-2,\\,1,\\,3$."
    }
  }
];
