import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.graph-transformations.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "translation",
      "vertical-translation"
    ],
    "questionText": "The curve $y=x^{2}$ is transformed to the curve $y=x^{2}+5$. Describe fully the single transformation that maps the first curve onto the second.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y=x^{2}\\ \\longrightarrow\\ y=x^{2}+5",
          "explanation": "The only difference is the $+5$ added on the end. Nothing has been done to $x$ itself, so we expect a purely vertical change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the standard form",
          "workingLatex": "y=f(x)+a,\\quad f(x)=x^{2}",
          "explanation": "Writing the new curve as $f(x)+a$ shows the constant is added to the whole output of the function, which controls the height of the graph.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the constant",
          "workingLatex": "a=+5",
          "explanation": "The number added outside the function is $+5$. Its sign tells us the direction and its size tells us the distance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the translation rule",
          "workingLatex": "y=f(x)+a\\ \\Rightarrow\\ \\text{shift }(0,\\,a)",
          "explanation": "Adding a constant outside the function raises or lowers every point by the same amount, which is a translation parallel to the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide the direction",
          "workingLatex": "a=5>0\\ \\Rightarrow\\ \\text{upwards}",
          "explanation": "A positive constant makes every $y$-value larger, so the whole curve moves up rather than down.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a point",
          "workingLatex": "(2,\\,4)\\to(2,\\,9)",
          "explanation": "The point $(2,4)$ on $y=x^{2}$ moves to $(2,9)$: the $x$-coordinate is unchanged and the $y$-coordinate increases by $5$, confirming a vertical shift up.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the transformation",
          "workingLatex": "\\text{translation }(0,\\,5)",
          "explanation": "Everything points to a single translation of $5$ units vertically upwards.",
          "diagram": null
        }
      ],
      "finalAnswer": "A translation of $5$ units in the positive $y$-direction (vertically upwards), i.e. by the vector $(0,\\,5)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "reflection",
      "x-axis"
    ],
    "questionText": "The curve $y=x^{3}$ is transformed to the curve $y=-x^{3}$. Describe fully the single transformation that maps $y=x^{3}$ onto $y=-x^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y=x^{3}\\ \\longrightarrow\\ y=-x^{3}",
          "explanation": "The whole right-hand side has been multiplied by $-1$. The input $x$ is untouched, so the change is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the standard form",
          "workingLatex": "y=-f(x),\\quad f(x)=x^{3}",
          "explanation": "A minus sign in front of the whole function negates every output, which is the signature of a reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the rule",
          "workingLatex": "y=-f(x)\\ \\Rightarrow\\ \\text{reflection in the }x\\text{-axis}",
          "explanation": "Multiplying each $y$-value by $-1$ sends every point to the mirror-image point on the opposite side of the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Effect on a general point",
          "workingLatex": "(x,\\,y)\\to(x,\\,-y)",
          "explanation": "The horizontal position stays fixed while the height is flipped in sign, exactly what reflecting in the $x$-axis does.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check with a point",
          "workingLatex": "(2,\\,8)\\to(2,\\,-8)",
          "explanation": "The point $(2,8)$ on $y=x^{3}$ maps to $(2,-8)$, which lies on $y=-x^{3}$ since $-(2)^{3}=-8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the fixed point",
          "workingLatex": "(0,\\,0)\\to(0,\\,0)",
          "explanation": "Any point already on the $x$-axis has $y=0$, and $-0=0$, so the origin does not move under the reflection.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the transformation",
          "workingLatex": "\\text{reflection in the }x\\text{-axis}",
          "explanation": "A single reflection in the $x$-axis maps $y=x^{3}$ exactly onto $y=-x^{3}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "A reflection in the $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "stretch",
      "vertical-stretch"
    ],
    "questionText": "The curve $y=\\sqrt{x}$ is transformed to the curve $y=4\\sqrt{x}$. Describe fully the single transformation that maps $y=\\sqrt{x}$ onto $y=4\\sqrt{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y=\\sqrt{x}\\ \\longrightarrow\\ y=4\\sqrt{x}",
          "explanation": "The whole function has been multiplied by $4$. Because the multiplier is outside the square root, only the height of the graph is affected.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the standard form",
          "workingLatex": "y=a\\,f(x),\\quad f(x)=\\sqrt{x},\\ a=4",
          "explanation": "A constant multiplying the whole output scales every $y$-value, which is a vertical stretch.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the rule",
          "workingLatex": "y=a\\,f(x)\\ \\Rightarrow\\ \\text{vertical stretch, scale factor }a",
          "explanation": "Each point is moved to $a$ times its distance from the $x$-axis, stretching the graph parallel to the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the scale factor",
          "workingLatex": "a=4>1\\ \\Rightarrow\\ \\text{genuine stretch}",
          "explanation": "Since $4$ is greater than $1$, points move further from the $x$-axis, so this is a stretch rather than a squash.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Effect on a general point",
          "workingLatex": "(x,\\,y)\\to(x,\\,4y)",
          "explanation": "The $x$-coordinate stays the same while the $y$-coordinate is multiplied by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a point",
          "workingLatex": "(4,\\,2)\\to(4,\\,8)",
          "explanation": "On $y=\\sqrt{x}$ we have $\\sqrt{4}=2$; multiplying the height by $4$ gives $(4,8)$, which lies on $y=4\\sqrt{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the transformation",
          "workingLatex": "\\text{vertical stretch, scale factor }4",
          "explanation": "A single vertical stretch of scale factor $4$, parallel to the $y$-axis, maps the first curve onto the second.",
          "diagram": null
        }
      ],
      "finalAnswer": "A vertical stretch (parallel to the $y$-axis) with scale factor $4$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "translation",
      "image-equation"
    ],
    "questionText": "The curve $y=(x-1)(x+2)$ is translated by $4$ units in the negative $y$-direction (vertically downwards). Write down the equation of the new curve, giving your answer in expanded form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the original function",
          "workingLatex": "f(x)=(x-1)(x+2)",
          "explanation": "Calling the original curve $f(x)$ lets us apply the transformation rule cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the translation rule",
          "workingLatex": "\\text{down }d\\ \\Rightarrow\\ y=f(x)-d",
          "explanation": "Moving a graph vertically downwards lowers every output, so we subtract the shift from the whole function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the shift",
          "workingLatex": "d=4",
          "explanation": "The curve moves $4$ units down, so we subtract $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule",
          "workingLatex": "y=(x-1)(x+2)-4",
          "explanation": "Subtracting $4$ from the whole function gives the equation of the translated curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the brackets",
          "workingLatex": "(x-1)(x+2)=x^{2}+x-2",
          "explanation": "Multiplying out gives $x^{2}+2x-x-2=x^{2}+x-2$, ready to combine with the constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the constants",
          "workingLatex": "y=x^{2}+x-2-4=x^{2}+x-6",
          "explanation": "The $-2$ from the expansion and the $-4$ from the translation add to $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the equation",
          "workingLatex": "y=x^{2}+x-6",
          "explanation": "This is the equation of the curve after the downward translation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x-1)(x+2)-4$, which expands to $y=x^{2}+x-6$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "stretch",
      "reciprocal-graph"
    ],
    "questionText": "The curve $y=\\frac{1}{x}$ is stretched vertically, parallel to the $y$-axis, with scale factor $2$. Write down the equation of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the original function",
          "workingLatex": "f(x)=\\frac{1}{x}",
          "explanation": "Labelling the original curve $f(x)$ lets us use the stretch rule directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the stretch rule",
          "workingLatex": "\\text{vertical stretch, s.f. }a\\ \\Rightarrow\\ y=a\\,f(x)",
          "explanation": "A vertical stretch multiplies the whole output by the scale factor, scaling every height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the scale factor",
          "workingLatex": "a=2",
          "explanation": "The scale factor of the stretch is $2$, so every $y$-value is doubled.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule",
          "workingLatex": "y=2\\cdot\\frac{1}{x}",
          "explanation": "Multiplying the whole function by $2$ produces the stretched curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "y=\\frac{2}{x}",
          "explanation": "Two times $\\frac{1}{x}$ is simply $\\frac{2}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check with a point",
          "workingLatex": "(1,\\,1)\\to(1,\\,2)",
          "explanation": "On $y=\\frac{1}{x}$ the point $(1,1)$ has its height doubled to $(1,2)$, and indeed $\\frac{2}{1}=2$, confirming the new equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the equation",
          "workingLatex": "y=\\frac{2}{x}",
          "explanation": "This is the equation of the curve after the vertical stretch.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\frac{2}{x}$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "reflection",
      "exponential-graph"
    ],
    "questionText": "The curve $y=2^{x}$ is reflected in the $x$-axis. Write down the equation of the resulting curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the original function",
          "workingLatex": "f(x)=2^{x}",
          "explanation": "Labelling the original curve $f(x)$ lets us apply the reflection rule directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the reflection rule",
          "workingLatex": "\\text{reflection in }x\\text{-axis}\\ \\Rightarrow\\ y=-f(x)",
          "explanation": "Reflecting in the $x$-axis negates every output, so we place a minus sign in front of the whole function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule",
          "workingLatex": "y=-\\left(2^{x}\\right)",
          "explanation": "The minus sign multiplies the entire expression $2^{x}$, not the base $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the equation neatly",
          "workingLatex": "y=-2^{x}",
          "explanation": "This is read as $-(2^{x})$; the negative sign applies after computing the power, so it differs from $(-2)^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the y-intercept",
          "workingLatex": "(0,\\,1)\\to(0,\\,-1)",
          "explanation": "Since $2^{0}=1$, the intercept $(0,1)$ flips to $(0,-1)$, matching $y=-2^{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check another point",
          "workingLatex": "(1,\\,2)\\to(1,\\,-2)",
          "explanation": "The point $(1,2)$ maps to $(1,-2)$, so the whole curve now sits below the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the equation",
          "workingLatex": "y=-2^{x}",
          "explanation": "This is the equation of the reflected curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-2^{x}$ (that is, $y=-(2^{x})$)."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "translation",
      "turning-point"
    ],
    "questionText": "The curve $y=x^{2}$ has a minimum turning point at the origin. The curve is translated to give $y=x^{2}-6$. State the coordinates of the minimum point of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original turning point",
          "workingLatex": "\\text{min of }y=x^{2}\\text{ at }(0,\\,0)",
          "explanation": "The basic parabola $y=x^{2}$ has its lowest point at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the form",
          "workingLatex": "y=f(x)-6,\\quad f(x)=x^{2}",
          "explanation": "A constant subtracted outside the function shifts the graph vertically without changing its shape.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the translation rule",
          "workingLatex": "y=f(x)-6\\ \\Rightarrow\\ \\text{shift down }6",
          "explanation": "Subtracting $6$ lowers every point, so each point maps by $(x,\\,y)\\to(x,\\,y-6)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the turning point",
          "workingLatex": "(0,\\,0)\\to(0,\\,0-6)",
          "explanation": "The turning point moves with the curve: its $x$-coordinate stays $0$ and its $y$-coordinate drops by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the coordinates",
          "workingLatex": "(0,\\,-6)",
          "explanation": "Carrying out the subtraction gives the new location of the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm it is still a minimum",
          "workingLatex": "\\text{shape unchanged}\\ \\Rightarrow\\ \\text{still a minimum}",
          "explanation": "A translation does not flip or reshape the parabola, so the vertex remains a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "(0,\\,-6)",
          "explanation": "The minimum of $y=x^{2}-6$ sits directly below the original, $6$ units lower.",
          "diagram": null
        }
      ],
      "finalAnswer": "The minimum point is at $(0,\\,-6)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "stretch",
      "point-mapping"
    ],
    "questionText": "The point $P(4,\\,2)$ lies on the curve $y=\\sqrt{x}$. The curve is stretched vertically with scale factor $3$ to give $y=3\\sqrt{x}$. Find the coordinates of the image of $P$ on the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm P lies on the original curve",
          "workingLatex": "\\sqrt{4}=2\\ \\checkmark",
          "explanation": "Substituting $x=4$ into $y=\\sqrt{x}$ gives $2$, so $P(4,2)$ really is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the transformation",
          "workingLatex": "y=3\\,f(x),\\quad f(x)=\\sqrt{x}",
          "explanation": "The whole function is multiplied by $3$, which is a vertical stretch of scale factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the point rule",
          "workingLatex": "(x,\\,y)\\to(x,\\,3y)",
          "explanation": "In a vertical stretch the $x$-coordinate stays fixed while the $y$-coordinate is multiplied by the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the x-coordinate",
          "workingLatex": "x:\\ 4\\to4",
          "explanation": "A vertical stretch does nothing to horizontal position, so the $x$-coordinate is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Transform the y-coordinate",
          "workingLatex": "y:\\ 2\\to3\\times2=6",
          "explanation": "The height is multiplied by $3$, taking $2$ up to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the image point",
          "workingLatex": "(4,\\,6)",
          "explanation": "Combining the unchanged $x$ with the tripled $y$ gives the image of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify on the new curve",
          "workingLatex": "3\\sqrt{4}=3\\times2=6\\ \\checkmark",
          "explanation": "Substituting $x=4$ into $y=3\\sqrt{x}$ gives $6$, confirming $(4,6)$ lies on the stretched curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "The image of $P$ is $(4,\\,6)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "translation",
      "y-intercept"
    ],
    "questionText": "The curve $y=2^{x}$ has $y$-intercept $(0,\\,1)$. The curve is translated to give $y=2^{x}+3$. State the coordinates of the $y$-intercept of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the original y-intercept",
          "workingLatex": "2^{0}=1\\ \\Rightarrow\\ (0,\\,1)",
          "explanation": "Any positive base raised to the power $0$ equals $1$, so $y=2^{x}$ crosses the $y$-axis at $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the form",
          "workingLatex": "y=f(x)+3,\\quad f(x)=2^{x}",
          "explanation": "The $+3$ is added outside the function, so the graph is shifted vertically upwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the translation",
          "workingLatex": "y=f(x)+3\\ \\Rightarrow\\ \\text{up }3",
          "explanation": "Adding $3$ raises every point by $3$, including the $y$-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x=0 into the new equation",
          "workingLatex": "x=0:\\ y=2^{0}+3=1+3",
          "explanation": "The $y$-intercept is found by setting $x=0$, then evaluating the new expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "y=4\\ \\Rightarrow\\ (0,\\,4)",
          "explanation": "Adding gives $4$, so the new curve crosses the $y$-axis at $(0,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cross-check using the shift",
          "workingLatex": "(0,\\,1)\\to(0,\\,4)",
          "explanation": "Moving the old intercept up by $3$ also gives $(0,4)$, which matches the substitution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "(0,\\,4)",
          "explanation": "The new $y$-intercept sits $3$ units above the original.",
          "diagram": null
        }
      ],
      "finalAnswer": "The new $y$-intercept is $(0,\\,4)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "reflection",
      "roots"
    ],
    "questionText": "The curve $y=(x-1)(x+2)$ crosses the $x$-axis at $(1,\\,0)$ and $(-2,\\,0)$. The curve is reflected in the $x$-axis to give $y=-(x-1)(x+2)$. State the coordinates of the points where the new curve crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the original roots",
          "workingLatex": "(x-1)(x+2)=0\\ \\Rightarrow\\ x=1,\\ x=-2",
          "explanation": "A product is zero only when a factor is zero, giving the two $x$-axis crossings of the original curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise the transformation",
          "workingLatex": "y=-f(x)\\ \\Rightarrow\\ \\text{reflection in }x\\text{-axis}",
          "explanation": "The minus sign in front of the whole function reflects the graph in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall what defines a root",
          "workingLatex": "\\text{roots are where }y=0",
          "explanation": "The curve crosses the $x$-axis wherever its height is zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "See why roots are fixed",
          "workingLatex": "-0=0",
          "explanation": "Reflecting multiplies each $y$-value by $-1$, but $-1\\times0=0$, so any point already on the $x$-axis stays put.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the new equation",
          "workingLatex": "-(x-1)(x+2)=0\\ \\Rightarrow\\ (x-1)(x+2)=0",
          "explanation": "Dividing both sides by $-1$ leaves the same factors, so the roots are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the roots",
          "workingLatex": "x=1,\\ x=-2",
          "explanation": "The new curve has exactly the same $x$-axis crossings as the original.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write as coordinates",
          "workingLatex": "(1,\\,0),\\ (-2,\\,0)",
          "explanation": "Each root pairs with $y=0$ to give the crossing points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The new curve crosses the $x$-axis at the same points, $(1,\\,0)$ and $(-2,\\,0)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "stretch",
      "point-mapping"
    ],
    "questionText": "A curve has equation $y=f(x)$. It is transformed to the curve $y=2f(x)$. Describe what happens to the coordinates of a general point $(x,\\,y)$ on the original curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "y=2f(x)=2\\times f(x)",
          "explanation": "The whole output is multiplied by $2$, which is a vertical stretch of scale factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on the outputs",
          "workingLatex": "\\text{new }y=2\\times(\\text{old }y)",
          "explanation": "Because the multiplier acts on the function's value, every height is doubled.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Effect on the inputs",
          "workingLatex": "x\\ \\text{unchanged}",
          "explanation": "Nothing has been done inside the bracket, so horizontal positions are not affected.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the general mapping",
          "workingLatex": "(x,\\,y)\\to(x,\\,2y)",
          "explanation": "Combining the two effects: keep $x$, double $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider points on the x-axis",
          "workingLatex": "(p,\\,0)\\to(p,\\,0)",
          "explanation": "Doubling a zero height leaves it zero, so the $x$-intercepts do not move under this stretch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Illustrate with a number",
          "workingLatex": "(3,\\,5)\\to(3,\\,10)",
          "explanation": "A point at height $5$ rises to height $10$ while staying at $x=3$, showing the doubling in action.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the rule",
          "workingLatex": "(x,\\,y)\\to(x,\\,2y)",
          "explanation": "The $x$-coordinate stays the same and the $y$-coordinate is doubled.",
          "diagram": null
        }
      ],
      "finalAnswer": "Each point $(x,\\,y)$ maps to $(x,\\,2y)$: the $x$-coordinate is unchanged and the $y$-coordinate is doubled (a vertical stretch of scale factor $2$)."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "translation",
      "horizontal"
    ],
    "questionText": "Describe fully the single transformation that maps the graph of $y=x^2$ onto the graph of $y=(x+3)^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot what has changed",
          "workingLatex": "y=x^{2}\\ \\to\\ y=(x+3)^{2}",
          "explanation": "The new equation is the old one with $x$ replaced by $x+3$. A change made to $x$ inside the function affects the graph horizontally, not vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for f(x+a)",
          "workingLatex": "y=f(x+a)\\ \\text{is a horizontal translation}",
          "explanation": "Replacing $x$ with $x+a$ slides the whole curve left or right. Because we altered the input $x$, the movement is sideways.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify a",
          "workingLatex": "a=3",
          "explanation": "Comparing $x+3$ with the general form $x+a$ shows that $a=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the opposite-sign rule",
          "workingLatex": "f(x+a)\\ \\Rightarrow\\ \\text{shift by }-a",
          "explanation": "This is the classic trap: adding to $x$ moves the graph in the negative $x$-direction. Inside the bracket the effect is the opposite of the sign, so $+3$ means a shift to the left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the direction and size",
          "workingLatex": "3\\ \\text{units to the left}",
          "explanation": "With $a=3$ the curve moves $3$ units in the $-x$ direction, i.e. to the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write as a translation vector",
          "workingLatex": "(-3,\\,0)",
          "explanation": "A horizontal move of $3$ to the left with no vertical movement can be written as the translation vector $(-3,\\,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "A translation of $3$ units to the left, i.e. by the vector $(-3,\\,0)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "translation",
      "horizontal"
    ],
    "questionText": "The graph of $y=\\sqrt{x}$ is translated $5$ units to the right. Write down the equation of the resulting graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what controls horizontal shifts",
          "workingLatex": "y=f(x+a)\\ \\Rightarrow\\ \\text{horizontal shift}",
          "explanation": "To move a graph left or right you change the input $x$ inside the function, because sideways movement is all about $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the opposite-sign rule",
          "workingLatex": "\\text{right by }b\\ \\Rightarrow\\ x\\to x-b",
          "explanation": "Moving to the right is the counter-intuitive case: to shift right you subtract from $x$. Replacing $x$ with $x-b$ moves the curve $b$ units to the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the shift",
          "workingLatex": "b=5",
          "explanation": "We want a translation of $5$ units to the right, so $b=5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace x with x-5",
          "workingLatex": "f(x)=\\sqrt{x}\\ \\to\\ f(x-5)=\\sqrt{x-5}",
          "explanation": "Substituting $x-5$ in place of $x$ under the square root carries out the rightward shift.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the new equation",
          "workingLatex": "y=\\sqrt{x-5}",
          "explanation": "This is the equation of the translated curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check with the start point",
          "workingLatex": "(0,\\,0)\\to(5,\\,0)",
          "explanation": "The original curve starts at the origin; after moving $5$ right its start point should be $(5,\\,0)$, and indeed $\\sqrt{x-5}=0$ when $x=5$. This confirms the shift is to the right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\sqrt{x-5}$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "translation",
      "point-image"
    ],
    "questionText": "The point $(2,\\,8)$ lies on the curve $y=x^3$. The curve is translated so that its equation becomes $y=(x+3)^3$. Find the coordinates of the point on the new curve that corresponds to $(2,\\,8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=x^{3}\\to y=(x+3)^{3}\\ \\Rightarrow\\ x\\to x+3",
          "explanation": "The input has changed from $x$ to $x+3$. Because the change is inside the function, this is a horizontal translation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the direction",
          "workingLatex": "+3\\ \\text{inside}\\ \\Rightarrow\\ 3\\ \\text{left}",
          "explanation": "Adding $3$ to $x$ shifts the graph in the negative $x$-direction, i.e. $3$ units to the left. Inside the bracket does the opposite of what it looks like.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Effect on a general point",
          "workingLatex": "(p,\\,q)\\to(p-3,\\,q)",
          "explanation": "A horizontal translation changes only the $x$-coordinate. Moving $3$ to the left subtracts $3$ from the $x$-value, while the height $q$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to the x-coordinate",
          "workingLatex": "2-3=-1",
          "explanation": "The original $x$-coordinate is $2$; shifting $3$ to the left gives $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Keep the y-coordinate",
          "workingLatex": "y=8",
          "explanation": "A horizontal shift does not move points up or down, so the height stays at $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the image point",
          "workingLatex": "(-1,\\,8)",
          "explanation": "Combining the new $x$-value with the unchanged $y$-value gives the corresponding point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check on the new curve",
          "workingLatex": "y=(-1+3)^{3}=2^{3}=8",
          "explanation": "Substituting $x=-1$ into $y=(x+3)^3$ gives $8$, confirming that $(-1,\\,8)$ really lies on the translated curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-1,\\,8)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "reciprocal",
      "asymptote"
    ],
    "questionText": "The curve $y=\\frac{1}{x}$ has a vertical asymptote at $x=0$. State the equation of the vertical asymptote of the curve $y=\\frac{1}{x-2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate the two curves",
          "workingLatex": "y=\\frac{1}{x}\\to y=\\frac{1}{x-2}\\ \\Rightarrow\\ x\\to x-2",
          "explanation": "The new curve is the reciprocal curve with $x$ replaced by $x-2$. A change inside the function means a horizontal translation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the direction",
          "workingLatex": "x\\to x-2\\ \\Rightarrow\\ 2\\ \\text{right}",
          "explanation": "Subtracting $2$ from $x$ moves the graph $2$ units to the right. Inside the bracket the sign flips, so minus means to the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the original asymptote",
          "workingLatex": "\\frac{1}{x}:\\ x=0",
          "explanation": "The reciprocal curve blows up where its denominator is zero; for $\\frac{1}{x}$ that is the vertical line $x=0$, the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find where the new denominator is zero",
          "workingLatex": "x-2=0\\ \\Rightarrow\\ x=2",
          "explanation": "The new curve is undefined where its denominator $x-2$ equals zero, because dividing by zero is impossible. This happens at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret as the shifted asymptote",
          "workingLatex": "x=0\\ \\to\\ x=2",
          "explanation": "The vertical asymptote travels with the curve: the original line $x=0$ moves $2$ to the right to become $x=2$, matching the translation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the asymptote",
          "workingLatex": "x=2",
          "explanation": "This is the vertical line the curve approaches ever more closely but never touches.",
          "diagram": null
        }
      ],
      "finalAnswer": "The vertical asymptote is $x=2$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "stretch",
      "horizontal"
    ],
    "questionText": "Describe fully the single transformation that maps the graph of $y=\\sin x$ onto the graph of $y=\\sin 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot what has changed",
          "workingLatex": "y=\\sin x\\to y=\\sin(2x)\\ \\Rightarrow\\ x\\to 2x",
          "explanation": "The input has been multiplied by $2$ inside the function. Multiplying $x$ inside affects the graph horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for f(ax)",
          "workingLatex": "y=f(ax)\\ \\text{is a horizontal stretch}",
          "explanation": "Replacing $x$ with $ax$ stretches or squashes the graph in the $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify a",
          "workingLatex": "a=2",
          "explanation": "Comparing $\\sin(2x)$ with the general form $\\sin(ax)$ gives $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the scale factor",
          "workingLatex": "\\text{scale factor}=\\frac{1}{a}=\\frac{1}{2}",
          "explanation": "Here is the counter-intuitive part: the stretch factor is the reciprocal of $a$. Multiplying the input by $2$ squashes the graph to half its width, a stretch of scale factor $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Give the direction",
          "workingLatex": "\\text{parallel to the }x\\text{-axis}",
          "explanation": "Because the change is to $x$, the stretch acts horizontally, parallel to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check using the period",
          "workingLatex": "\\text{period }2\\pi\\ \\to\\ \\pi",
          "explanation": "Every $x$-coordinate is halved, so one full wave that used to span $2\\pi$ now fits into $\\pi$. This confirms the width really has halved.",
          "diagram": null
        }
      ],
      "finalAnswer": "A horizontal stretch with scale factor $\\frac{1}{2}$, parallel to the $x$-axis."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "reflection",
      "y-axis"
    ],
    "questionText": "Describe fully the single transformation that maps the graph of $y=2^{x}$ onto the graph of $y=2^{-x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot what has changed",
          "workingLatex": "y=2^{x}\\to y=2^{-x}\\ \\Rightarrow\\ x\\to -x",
          "explanation": "The input $x$ has been replaced by $-x$. Changing the sign of $x$ inside the function is a change in the horizontal direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for f(-x)",
          "workingLatex": "y=f(-x)\\ \\text{reflects in the }y\\text{-axis}",
          "explanation": "Replacing $x$ with $-x$ swaps left and right, which is a reflection in the $y$-axis (the vertical mirror line).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm it fits",
          "workingLatex": "f(x)=2^{x}\\ \\Rightarrow\\ f(-x)=2^{-x}",
          "explanation": "Substituting $-x$ into $2^{x}$ gives exactly $2^{-x}$, matching the target equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check with a point",
          "workingLatex": "(1,\\,2)\\to(-1,\\,2)",
          "explanation": "On $y=2^{x}$ the point $(1,\\,2)$ has a mirror image at $(-1,\\,2)$, since $2^{-(-1)}=2^{1}=2$. Left and right are swapped while the height is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the fixed point",
          "workingLatex": "(0,\\,1)\\ \\text{unchanged}",
          "explanation": "Points on the $y$-axis do not move under a reflection in the $y$-axis, so the intercept $(0,\\,1)$ stays put, exactly as a mirror line along the $y$-axis should behave.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the transformation",
          "workingLatex": "\\text{reflection in the }y\\text{-axis}",
          "explanation": "All the evidence points to a single reflection in the $y$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "A reflection in the $y$-axis."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "reflection",
      "y-axis"
    ],
    "questionText": "The graph of $y=\\sqrt{x}$ is reflected in the $y$-axis. Write down the equation of the resulting graph and state its domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the rule",
          "workingLatex": "y=f(-x)\\ \\text{is reflection in the }y\\text{-axis}",
          "explanation": "A reflection in the $y$-axis swaps left and right, which we achieve by replacing $x$ with $-x$ inside the function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply to f(x)=√x",
          "workingLatex": "f(x)=\\sqrt{x}\\ \\to\\ f(-x)=\\sqrt{-x}",
          "explanation": "Substituting $-x$ in place of $x$ under the root carries out the reflection.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the new equation",
          "workingLatex": "y=\\sqrt{-x}",
          "explanation": "This is the equation of the reflected curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the original domain",
          "workingLatex": "\\sqrt{x}:\\ x\\ge 0",
          "explanation": "The original curve only exists for $x\\ge 0$, so it lives entirely to the right of the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reflect the domain",
          "workingLatex": "-x\\ge 0\\ \\Rightarrow\\ x\\le 0",
          "explanation": "The square root still needs a non-negative input, so $-x\\ge 0$, giving $x\\le 0$. The curve now lives to the left of the $y$-axis, the mirror image of the original.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the domain",
          "workingLatex": "x\\le 0",
          "explanation": "This matches the picture: reflecting a right-hand curve in the $y$-axis produces a left-hand curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\sqrt{-x}$, defined for $x\\le 0$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "stretch",
      "point-image"
    ],
    "questionText": "The point $(6,\\,36)$ lies on the curve $y=x^2$. The curve is transformed to $y=(2x)^2$. Find the coordinates of the point on the new curve that corresponds to $(6,\\,36)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=x^{2}\\to y=(2x)^{2}\\ \\Rightarrow\\ x\\to 2x",
          "explanation": "The input $x$ has been replaced by $2x$. A change inside the function means a horizontal stretch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the scale factor",
          "workingLatex": "\\text{scale factor}=\\frac{1}{a}=\\frac{1}{2}",
          "explanation": "For $y=f(ax)$ the horizontal scale factor is the reciprocal $\\frac{1}{a}$. With $a=2$ the graph is squashed to half its width, scale factor $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Effect on a general point",
          "workingLatex": "(p,\\,q)\\to\\left(\\frac{p}{2},\\,q\\right)",
          "explanation": "A horizontal stretch of scale factor $\\frac{1}{2}$ divides every $x$-coordinate by $2$, while heights are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to the x-coordinate",
          "workingLatex": "\\frac{6}{2}=3",
          "explanation": "The original $x$-coordinate $6$ is divided by $2$, giving $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Keep the y-coordinate",
          "workingLatex": "y=36",
          "explanation": "A horizontal stretch does not change heights, so $y=36$ stays the same.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the image point",
          "workingLatex": "(3,\\,36)",
          "explanation": "Pairing the new $x$-value with the unchanged height gives the corresponding point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check on the new curve",
          "workingLatex": "(2\\times 3)^{2}=6^{2}=36",
          "explanation": "Substituting $x=3$ into $y=(2x)^2$ gives $36$, confirming that $(3,\\,36)$ lies on the transformed curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,\\,36)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "reflection",
      "point-image"
    ],
    "questionText": "The point $(3,\\,8)$ lies on the curve $y=2^{x}$. The curve is reflected in the $y$-axis to give $y=2^{-x}$. Find the coordinates of the point on the reflected curve that corresponds to $(3,\\,8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=2^{x}\\to y=2^{-x}\\ \\Rightarrow\\ x\\to -x",
          "explanation": "Replacing $x$ with $-x$ is a reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Effect on a general point",
          "workingLatex": "(p,\\,q)\\to(-p,\\,q)",
          "explanation": "A reflection in the $y$-axis flips left and right: the $x$-coordinate changes sign while the height stays the same.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply to the x-coordinate",
          "workingLatex": "3\\ \\to\\ -3",
          "explanation": "The $x$-coordinate $3$ becomes $-3$ on the other side of the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Keep the y-coordinate",
          "workingLatex": "y=8",
          "explanation": "Reflecting in the $y$-axis is a purely sideways move, so the height $8$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the image point",
          "workingLatex": "(-3,\\,8)",
          "explanation": "The mirror-image point has the negated $x$ and the same $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check on the new curve",
          "workingLatex": "2^{-(-3)}=2^{3}=8",
          "explanation": "Substituting $x=-3$ into $y=2^{-x}$ gives $8$, confirming the point lies on the reflected curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-3,\\,8)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "reciprocal",
      "asymptote"
    ],
    "questionText": "State the equation of the vertical asymptote of the curve $y=\\frac{1}{x+4}$, which is obtained by translating $y=\\frac{1}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate to y=1/x",
          "workingLatex": "y=\\frac{1}{x}\\to y=\\frac{1}{x+4}\\ \\Rightarrow\\ x\\to x+4",
          "explanation": "The reciprocal curve has had $x$ replaced by $x+4$ inside, so this is a horizontal translation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the direction",
          "workingLatex": "x\\to x+4\\ \\Rightarrow\\ 4\\ \\text{left}",
          "explanation": "Adding $4$ to $x$ moves the graph $4$ units to the left. Inside the bracket the sign is reversed, so $+4$ means to the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the original asymptote",
          "workingLatex": "\\frac{1}{x}:\\ x=0",
          "explanation": "The curve $\\frac{1}{x}$ has its vertical asymptote where the denominator is zero, at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Zero the new denominator",
          "workingLatex": "x+4=0\\ \\Rightarrow\\ x=-4",
          "explanation": "The new curve is undefined where $x+4=0$, i.e. at $x=-4$, because we cannot divide by zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret as the shift",
          "workingLatex": "x=0\\ \\to\\ x=-4",
          "explanation": "The asymptote moves with the curve: the line $x=0$ slides $4$ units to the left to reach $x=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the asymptote",
          "workingLatex": "x=-4",
          "explanation": "The curve races towards this vertical line without ever meeting it.",
          "diagram": null
        }
      ],
      "finalAnswer": "The vertical asymptote is $x=-4$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "stretch",
      "point-image"
    ],
    "questionText": "The point $(4,\\,2)$ lies on the curve $y=\\sqrt{x}$. Find the coordinates of the corresponding point on the curve $y=\\sqrt{\\tfrac{1}{2}x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=\\sqrt{x}\\to y=\\sqrt{\\tfrac{1}{2}x}\\ \\Rightarrow\\ x\\to \\tfrac{1}{2}x",
          "explanation": "The input $x$ has been multiplied by $\\frac{1}{2}$ inside the function, so this is a horizontal stretch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the scale factor",
          "workingLatex": "a=\\tfrac{1}{2}\\ \\Rightarrow\\ \\text{scale factor}=\\frac{1}{a}=2",
          "explanation": "For $y=f(ax)$ the horizontal scale factor is the reciprocal $\\frac{1}{a}$. With $a=\\frac{1}{2}$ the reciprocal is $2$, so the graph is stretched to twice its width.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Effect on a general point",
          "workingLatex": "(p,\\,q)\\to(2p,\\,q)",
          "explanation": "A horizontal stretch of scale factor $2$ doubles every $x$-coordinate while heights stay the same. (Dividing by $a=\\frac{1}{2}$ is the same as multiplying by $2$.)",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply to the x-coordinate",
          "workingLatex": "2\\times 4=8",
          "explanation": "The original $x$-coordinate $4$ is doubled, giving $8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Keep the y-coordinate",
          "workingLatex": "y=2",
          "explanation": "The stretch is purely horizontal, so the height $2$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the image point",
          "workingLatex": "(8,\\,2)",
          "explanation": "Combining the doubled $x$-value with the unchanged height gives the corresponding point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check on the new curve",
          "workingLatex": "\\sqrt{\\tfrac{1}{2}\\times 8}=\\sqrt{4}=2",
          "explanation": "Substituting $x=8$ into $y=\\sqrt{\\tfrac{1}{2}x}$ gives $2$, confirming that $(8,\\,2)$ lies on the stretched curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(8,\\,2)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "translation",
      "quadratic"
    ],
    "questionText": "The curve $y=f(x)$ has equation $f(x)=x^{2}$. The graph is transformed to give $y=f(x-3)+2$. Find the equation of the resulting curve in the form $y=x^{2}+bx+c$, and describe the two transformations involved.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original function",
          "workingLatex": "f(x)=x^{2}",
          "explanation": "We start from the basic parabola $y=x^{2}$, whose vertex sits at the origin. Every transformation is measured from this baseline curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the change inside the bracket",
          "workingLatex": "f(x-3)\\ \\Rightarrow\\ \\text{replace }x\\text{ with }x-3",
          "explanation": "A change inside the bracket affects the input, so it acts horizontally and does the opposite of what it looks like. The $-3$ inside shifts the graph $3$ units to the right, not the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the change outside the bracket",
          "workingLatex": "f(x-3)+2\\ \\Rightarrow\\ \\text{add }2\\text{ to every }y",
          "explanation": "A change outside the function acts vertically and behaves exactly as written. Adding $2$ raises every point on the curve by $2$ units.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the transformed equation",
          "workingLatex": "y=(x-3)^{2}+2",
          "explanation": "Substituting $x-3$ into $f$ and adding $2$ gives the vertex form of the new parabola directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the squared bracket",
          "workingLatex": "(x-3)^{2}=x^{2}-6x+9",
          "explanation": "Expanding lets us write the equation in the requested $y=x^{2}+bx+c$ form. Squaring the bracket uses $(x-3)(x-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant",
          "workingLatex": "y=x^{2}-6x+9+2=x^{2}-6x+11",
          "explanation": "Combining the $+9$ from the expansion with the $+2$ translation gives the final constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the combined translation vector",
          "workingLatex": "\\begin{pmatrix}3\\\\2\\end{pmatrix}",
          "explanation": "Right $3$ and up $2$ together form a single translation by the vector $\\begin{pmatrix}3\\\\2\\end{pmatrix}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Track the vertex",
          "workingLatex": "(0,\\,0)\\to(3,\\,2)",
          "explanation": "The original vertex at the origin moves right $3$ and up $2$, which is a quick check that the vertex form $(x-3)^{2}+2$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the two transformations",
          "workingLatex": "\\text{translate right }3,\\ \\text{then up }2",
          "explanation": "The two transformations are a horizontal translation of $3$ to the right followed by a vertical translation of $2$ upwards.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x^{2}-6x+11$; the transformations are a translation $3$ units to the right and $2$ units up, i.e. by the vector $\\begin{pmatrix}3\\\\2\\end{pmatrix}$, moving the vertex to $(3,\\,2)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "vertical-stretch",
      "completing-the-square",
      "turning-point"
    ],
    "questionText": "Given $f(x)=x^{2}-4x+3$, the curve $y=f(x)$ is transformed to $y=2f(x)-1$. Find the equation of the new curve in expanded form, and find the coordinates of its turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original function",
          "workingLatex": "f(x)=x^{2}-4x+3",
          "explanation": "This is our baseline curve; the new equation is built from it by scaling and shifting.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the factor of 2",
          "workingLatex": "2f(x)\\ \\Rightarrow\\ \\text{multiply every }y\\text{ by }2",
          "explanation": "A multiplier outside the function stretches the graph vertically. Every $y$-value is doubled, which is a vertical stretch with scale factor $2$ parallel to the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the -1",
          "workingLatex": "2f(x)-1\\ \\Rightarrow\\ \\text{lower every }y\\text{ by }1",
          "explanation": "Subtracting $1$ outside the function is a vertical translation down by $1$, applied after the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form 2f(x)",
          "workingLatex": "2(x^{2}-4x+3)=2x^{2}-8x+6",
          "explanation": "Multiplying the whole expression by $2$ scales every term, giving the stretched curve before the translation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract 1",
          "workingLatex": "y=2x^{2}-8x+6-1=2x^{2}-8x+5",
          "explanation": "Applying the downward shift lowers the constant term by $1$, giving the final expanded equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the original turning point",
          "workingLatex": "x^{2}-4x+3=(x-2)^{2}-1",
          "explanation": "Completing the square on $f$ shows its minimum is at $(2,-1)$. Knowing where the original vertex is lets us transform that single point rather than the whole curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the vertical stretch to the vertex",
          "workingLatex": "(2,\\,-1)\\to(2,\\,2\\times-1)=(2,\\,-2)",
          "explanation": "A vertical stretch multiplies only the $y$-coordinate by $2$; the $x$-coordinate is unchanged because horizontal position is untouched.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the translation to the vertex",
          "workingLatex": "(2,\\,-2)\\to(2,\\,-2-1)=(2,\\,-3)",
          "explanation": "The final shift lowers the point by $1$, giving the turning point of the transformed curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by completing the square on the new equation",
          "workingLatex": "2x^{2}-8x+5=2(x-2)^{2}-3",
          "explanation": "Rewriting the final equation in completed-square form confirms the vertex is at $(2,-3)$, matching the point we tracked.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "y=2x^{2}-8x+5,\\quad (2,\\,-3)",
          "explanation": "The expanded equation and the turning point together answer the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=2x^{2}-8x+5$, with turning point at $(2,\\,-3)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "reflection",
      "cubic"
    ],
    "questionText": "The curve $y=f(x)$ where $f(x)=x^{3}$ is transformed to give $y=-f(x)+4$. Describe fully the two transformations, and find the coordinates of the points where the new curve meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original function",
          "workingLatex": "f(x)=x^{3}",
          "explanation": "The basic cubic passes through the origin, rising from bottom-left to top-right with a point of inflection at $(0,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the negative sign",
          "workingLatex": "-f(x)\\ \\Rightarrow\\ y=-x^{3}",
          "explanation": "A minus sign in front of the whole function replaces every $y$ with $-y$, flipping the curve over the $x$-axis. This is a reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the +4",
          "workingLatex": "-f(x)+4\\ \\Rightarrow\\ \\text{raise every }y\\text{ by }4",
          "explanation": "Adding $4$ outside the function shifts the reflected curve up by $4$ units, applied after the reflection.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the new equation",
          "workingLatex": "y=-x^{3}+4",
          "explanation": "Combining the reflection and translation gives the equation of the transformed curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the order of transformations",
          "workingLatex": "\\text{reflect in }x\\text{-axis, then translate up }4",
          "explanation": "Stating the reflection first and the vertical translation second reflects the order they are applied in $-f(x)+4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-intercept",
          "workingLatex": "y=-(0)^{3}+4=4",
          "explanation": "The curve meets the $y$-axis where $x=0$, so substitute $x=0$ into the new equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the x-intercept equation",
          "workingLatex": "-x^{3}+4=0\\ \\Rightarrow\\ x^{3}=4",
          "explanation": "The curve meets the $x$-axis where $y=0$. Rearranging isolates $x^{3}$ so we can take a cube root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the x-intercept",
          "workingLatex": "x=\\sqrt[3]{4}",
          "explanation": "Taking the cube root gives a single real solution, since cubics have exactly one real cube root for a positive number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Track the point of inflection",
          "workingLatex": "(0,\\,0)\\to(0,\\,4)",
          "explanation": "The inflection point at the origin reflects to itself (it lies on the $x$-axis) and then rises $4$, confirming the $y$-intercept and giving the centre of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the axis crossings",
          "workingLatex": "(0,\\,4),\\ \\ (\\sqrt[3]{4},\\,0)",
          "explanation": "These are the required intercepts: one on the $y$-axis and one on the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "A reflection in the $x$-axis followed by a translation of $4$ units up. The curve meets the $y$-axis at $(0,\\,4)$ and the $x$-axis at $(\\sqrt[3]{4},\\,0)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "reflection",
      "vertical-stretch",
      "cubic"
    ],
    "questionText": "A cubic curve has equation $y=f(x)$ where $f(x)=(x-1)(x+2)(x-3)$. The curve is transformed to $y=-2f(x)$. Describe the two transformations, and find the coordinates of the roots and the $y$-intercept of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the original roots",
          "workingLatex": "(x-1)(x+2)(x-3)=0\\ \\Rightarrow\\ x=1,\\,-2,\\,3",
          "explanation": "A product of factors is zero only when one factor is zero, so each bracket gives one root of the original curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the original y-intercept",
          "workingLatex": "f(0)=(-1)(2)(-3)=6",
          "explanation": "Substituting $x=0$ into the factorised form gives the point $(0,6)$ where the original curve crosses the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the factor of 2",
          "workingLatex": "2f(x)\\ \\Rightarrow\\ \\text{vertical stretch, scale factor }2",
          "explanation": "The multiplier $2$ outside the function doubles every $y$-value, a vertical stretch of scale factor $2$ parallel to the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the negative sign",
          "workingLatex": "-2f(x)\\ \\Rightarrow\\ \\text{reflection in }x\\text{-axis}",
          "explanation": "The minus sign flips the stretched curve over the $x$-axis, sending each $y$ to $-y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the effect on the roots",
          "workingLatex": "(p,\\,0)\\to(p,\\,-2\\times0)=(p,\\,0)",
          "explanation": "Points on the $x$-axis have $y=0$. Multiplying $0$ by $-2$ still gives $0$, so a vertical stretch and reflection leave every $x$-intercept exactly where it is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the new roots",
          "workingLatex": "(1,\\,0),\\ (-2,\\,0),\\ (3,\\,0)",
          "explanation": "The roots are unchanged, so the new curve still crosses the $x$-axis at the same three points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the transformation to the y-intercept",
          "workingLatex": "(0,\\,6)\\to(0,\\,-2\\times6)=(0,\\,-12)",
          "explanation": "The $y$-intercept is not on the $x$-axis, so its $y$-value is multiplied by $-2$, moving it to $(0,-12)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the y-intercept from the new function",
          "workingLatex": "y=-2f(0)=-2\\times6=-12",
          "explanation": "Evaluating $-2f(x)$ at $x=0$ directly gives $-12$, which agrees with the point mapping.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the two transformations",
          "workingLatex": "\\text{stretch }\\times2\\ (y\\text{-axis}),\\ \\text{reflect in }x\\text{-axis}",
          "explanation": "The single instruction $-2f(x)$ combines a vertical stretch of scale factor $2$ with a reflection in the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "A vertical stretch of scale factor $2$ (parallel to the $y$-axis) together with a reflection in the $x$-axis. The roots are unchanged at $(1,\\,0),\\ (-2,\\,0),\\ (3,\\,0)$, and the $y$-intercept moves to $(0,\\,-12)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "translation",
      "quadratic",
      "turning-point"
    ],
    "questionText": "The curve $y=f(x)$ has equation $f(x)=x^{2}$. It is transformed to give $y=f(x+1)-3$. Find the equation of the resulting curve in the form $y=x^{2}+bx+c$, and state the coordinates of its turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original function",
          "workingLatex": "f(x)=x^{2}",
          "explanation": "The starting curve is the standard parabola with its vertex at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the change inside the bracket",
          "workingLatex": "f(x+1)\\ \\Rightarrow\\ \\text{shift left }1",
          "explanation": "A change inside the bracket acts horizontally and does the opposite of its sign. The $+1$ inside moves the curve $1$ unit to the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the change outside the bracket",
          "workingLatex": "f(x+1)-3\\ \\Rightarrow\\ \\text{shift down }3",
          "explanation": "Subtracting $3$ outside the function lowers every point by $3$, a straightforward vertical translation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the transformed equation",
          "workingLatex": "y=(x+1)^{2}-3",
          "explanation": "Replacing $x$ with $x+1$ and subtracting $3$ gives the completed-square form of the new parabola.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the bracket",
          "workingLatex": "(x+1)^{2}=x^{2}+2x+1",
          "explanation": "Expanding is needed to reach the requested $y=x^{2}+bx+c$ form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the constant",
          "workingLatex": "y=x^{2}+2x+1-3=x^{2}+2x-2",
          "explanation": "Combining the $+1$ from the expansion with the $-3$ translation gives the final constant term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Track the vertex",
          "workingLatex": "(0,\\,0)\\to(-1,\\,-3)",
          "explanation": "The original vertex moves left $1$ and down $3$, so it lands at $(-1,-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm from the completed-square form",
          "workingLatex": "y=(x+1)^{2}-3\\ \\Rightarrow\\ \\text{min at }(-1,\\,-3)",
          "explanation": "The completed-square form reads off the vertex directly, confirming the point we tracked.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the results",
          "workingLatex": "y=x^{2}+2x-2,\\quad (-1,\\,-3)",
          "explanation": "The expanded equation and turning point together answer the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x^{2}+2x-2$, with turning point at $(-1,\\,-3)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "translation",
      "completing-the-square",
      "work-backwards"
    ],
    "questionText": "The curve $y=x^{2}$ is transformed into the curve $y=x^{2}-6x+7$. By completing the square, describe the two transformations that map $y=x^{2}$ onto this curve, and state the coordinates of the vertex of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on a strategy",
          "workingLatex": "y=x^{2}-6x+7\\ \\to\\ \\text{completed-square form}",
          "explanation": "Transformations from $y=x^{2}$ are easiest to read from the form $y=(x-h)^{2}+k$, which shows the shift directly. So we complete the square first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x",
          "workingLatex": "-6\\div2=-3",
          "explanation": "The number inside the bracket is half the coefficient of $x$; here that is $-3$, so the bracket will be $(x-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the square and correct it",
          "workingLatex": "x^{2}-6x=(x-3)^{2}-9",
          "explanation": "Expanding $(x-3)^{2}$ gives $x^{2}-6x+9$, which is $9$ too big, so we subtract $9$ to keep the expression equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Include the constant",
          "workingLatex": "x^{2}-6x+7=(x-3)^{2}-9+7=(x-3)^{2}-2",
          "explanation": "Adding the original $+7$ to the $-9$ gives the completed-square form of the whole expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with y=x²",
          "workingLatex": "(x-3)^{2}-2=f(x-3)-2",
          "explanation": "Writing the result in terms of $f(x)=x^{2}$ makes the two transformations visible: an inside change and an outside change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the inside change",
          "workingLatex": "f(x-3)\\ \\Rightarrow\\ \\text{shift right }3",
          "explanation": "The $-3$ inside the bracket is a horizontal shift and does the opposite of its sign, moving the curve $3$ to the right.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the outside change",
          "workingLatex": "f(x-3)-2\\ \\Rightarrow\\ \\text{shift down }2",
          "explanation": "The $-2$ outside lowers the whole curve by $2$, a vertical translation downwards.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the vertex",
          "workingLatex": "(0,\\,0)\\to(3,\\,-2)",
          "explanation": "The vertex of $y=x^{2}$ moves right $3$ and down $2$, so the new vertex is at $(3,-2)$, which matches the completed-square form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the two transformations",
          "workingLatex": "\\text{translation }\\begin{pmatrix}3\\\\-2\\end{pmatrix}",
          "explanation": "Together the shifts form a single translation by the vector $\\begin{pmatrix}3\\\\-2\\end{pmatrix}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "A translation of $3$ units to the right and $2$ units down, i.e. by the vector $\\begin{pmatrix}3\\\\-2\\end{pmatrix}$. The vertex of the new curve is at $(3,\\,-2)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "vertical-stretch",
      "translation",
      "work-backwards"
    ],
    "questionText": "The curve $y=f(x)$ where $f(x)=x^{2}$ is transformed into the curve $y=2x^{2}-4$. State the two transformations that produce this curve, and hence find the coordinates of the points where the new curve meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the image in terms of f",
          "workingLatex": "2x^{2}-4=2f(x)-4",
          "explanation": "Since $f(x)=x^{2}$, the expression $2x^{2}-4$ is $2f(x)-4$. Rewriting it this way exposes the multiplier and the constant, which are the two transformations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the multiplier",
          "workingLatex": "2f(x)\\ \\Rightarrow\\ \\text{vertical stretch, scale factor }2",
          "explanation": "Multiplying the function by $2$ doubles every $y$-value, a vertical stretch of scale factor $2$ parallel to the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the constant",
          "workingLatex": "2f(x)-4\\ \\Rightarrow\\ \\text{translate down }4",
          "explanation": "Subtracting $4$ after the stretch lowers the whole curve by $4$ units.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the order of transformations",
          "workingLatex": "\\text{stretch }\\times2,\\ \\text{then down }4",
          "explanation": "The stretch is applied first and the translation second, matching how $2f(x)-4$ is built.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the x-intercept equation",
          "workingLatex": "2x^{2}-4=0",
          "explanation": "The curve meets the $x$-axis where $y=0$, so we solve $2x^{2}-4=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Isolate x²",
          "workingLatex": "2x^{2}=4\\ \\Rightarrow\\ x^{2}=2",
          "explanation": "Adding $4$ and dividing by $2$ leaves $x^{2}$ alone, ready to square-root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x=\\pm\\sqrt{2}",
          "explanation": "Taking the square root gives two solutions, one positive and one negative, because the parabola crosses the $x$-axis twice.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the intercepts as coordinates",
          "workingLatex": "(\\sqrt{2},\\,0),\\ (-\\sqrt{2},\\,0)",
          "explanation": "Each root pairs with $y=0$, giving the exact crossing points on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense-check the vertex",
          "workingLatex": "(0,\\,0)\\to(0,\\,-4)",
          "explanation": "The vertex drops to $(0,-4)$, below the $x$-axis, so the upward parabola must indeed cross the axis twice, consistent with two real roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "A vertical stretch of scale factor $2$ (parallel to the $y$-axis) followed by a translation of $4$ units down. The new curve meets the $x$-axis at $(\\sqrt{2},\\,0)$ and $(-\\sqrt{2},\\,0)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "translation",
      "cubic"
    ],
    "questionText": "The curve $y=f(x)$ where $f(x)=x^{3}$ is transformed to give $y=f(x-1)+2$. Describe the two transformations, and find the coordinates of the point of inflection and the $y$-intercept of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original function",
          "workingLatex": "f(x)=x^{3}",
          "explanation": "The basic cubic has its point of inflection (its centre of symmetry) at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the change inside the bracket",
          "workingLatex": "f(x-1)\\ \\Rightarrow\\ \\text{shift right }1",
          "explanation": "A change inside the function acts horizontally and does the opposite of its sign, so $x-1$ moves the curve $1$ unit to the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the change outside the bracket",
          "workingLatex": "f(x-1)+2\\ \\Rightarrow\\ \\text{shift up }2",
          "explanation": "Adding $2$ outside the function raises the whole curve by $2$ units.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the new equation",
          "workingLatex": "y=(x-1)^{3}+2",
          "explanation": "Replacing $x$ with $x-1$ and adding $2$ gives the transformed cubic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the combined translation",
          "workingLatex": "\\text{translation }\\begin{pmatrix}1\\\\2\\end{pmatrix}",
          "explanation": "Right $1$ and up $2$ together form a single translation by the vector $\\begin{pmatrix}1\\\\2\\end{pmatrix}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Track the point of inflection",
          "workingLatex": "(0,\\,0)\\to(1,\\,2)",
          "explanation": "The inflection point moves with the curve, so the origin shifts to $(1,2)$ — the centre of the new cubic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-intercept",
          "workingLatex": "y=(0-1)^{3}+2=-1+2=1",
          "explanation": "Substituting $x=0$ into the new equation gives the point where the curve meets the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the y-intercept as a coordinate",
          "workingLatex": "(0,\\,1)",
          "explanation": "Pairing the value with $x=0$ gives the crossing point on the vertical axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the results",
          "workingLatex": "\\text{inflection }(1,\\,2),\\ \\ y\\text{-intercept }(0,\\,1)",
          "explanation": "These two points, together with the description, fully answer the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "A translation of $1$ unit right and $2$ units up (vector $\\begin{pmatrix}1\\\\2\\end{pmatrix}$). The point of inflection is at $(1,\\,2)$ and the $y$-intercept is at $(0,\\,1)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "translation",
      "quadratic",
      "turning-point"
    ],
    "questionText": "Given $f(x)=x^{2}-4x+3$, the curve $y=f(x)$ is transformed to $y=f(x-1)+2$. Find the equation of the new curve in the form $y=x^{2}+bx+c$, and find the coordinates of its turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Locate the original turning point",
          "workingLatex": "x^{2}-4x+3=(x-2)^{2}-1",
          "explanation": "Completing the square on $f$ shows its vertex is at $(2,-1)$. This will let us find the new turning point by shifting a single point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the inside change",
          "workingLatex": "f(x-1)\\ \\Rightarrow\\ \\text{shift right }1",
          "explanation": "The $-1$ inside the bracket is a horizontal shift and does the opposite of its sign, moving the curve $1$ to the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the outside change",
          "workingLatex": "f(x-1)+2\\ \\Rightarrow\\ \\text{shift up }2",
          "explanation": "Adding $2$ outside the function raises the curve by $2$ units.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x-1 into f",
          "workingLatex": "f(x-1)=(x-1)^{2}-4(x-1)+3",
          "explanation": "Replacing every $x$ in $f$ with $x-1$ builds the horizontally shifted curve before the vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand each term",
          "workingLatex": "(x-1)^{2}=x^{2}-2x+1,\\quad -4(x-1)=-4x+4",
          "explanation": "Expanding the square and distributing the $-4$ prepares the terms for collecting.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect like terms",
          "workingLatex": "x^{2}-2x+1-4x+4+3=x^{2}-6x+8",
          "explanation": "Adding the constants and combining the $x$-terms gives the shifted function $f(x-1)$ in expanded form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the vertical shift",
          "workingLatex": "y=x^{2}-6x+8+2=x^{2}-6x+10",
          "explanation": "Applying the $+2$ translation raises the constant term to give the final equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Track the turning point",
          "workingLatex": "(2,\\,-1)\\to(3,\\,1)",
          "explanation": "The original vertex moves right $1$ and up $2$, landing at $(3,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm by completing the square",
          "workingLatex": "x^{2}-6x+10=(x-3)^{2}+1",
          "explanation": "The completed-square form of the new equation reads off the vertex as $(3,1)$, matching the tracked point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "y=x^{2}-6x+10,\\quad (3,\\,1)",
          "explanation": "The expanded equation and turning point together answer the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x^{2}-6x+10$, with turning point at $(3,\\,1)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "horizontal-stretch",
      "translation",
      "quadratic"
    ],
    "questionText": "The curve $y=f(x)$ where $f(x)=x^{2}$ is transformed to give $y=f(2x)-3$. Find the equation of the resulting curve, describe the two transformations, and state the coordinates of the turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original function",
          "workingLatex": "f(x)=x^{2}",
          "explanation": "The starting curve is the standard parabola with vertex at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the change inside the bracket",
          "workingLatex": "f(2x)\\ \\Rightarrow\\ \\text{horizontal stretch, scale factor }\\tfrac{1}{2}",
          "explanation": "A multiplier of $x$ inside the function stretches horizontally by the reciprocal of that number. Multiplying $x$ by $2$ therefore squashes the curve to half its width, a stretch of scale factor $\\tfrac{1}{2}$ parallel to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the change outside the bracket",
          "workingLatex": "f(2x)-3\\ \\Rightarrow\\ \\text{shift down }3",
          "explanation": "Subtracting $3$ outside the function lowers the whole curve by $3$ units, applied after the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form f(2x)",
          "workingLatex": "f(2x)=(2x)^{2}",
          "explanation": "Replacing $x$ with $2x$ in $f(x)=x^{2}$ gives the horizontally stretched curve before the translation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the square",
          "workingLatex": "(2x)^{2}=4x^{2}",
          "explanation": "Squaring both the $2$ and the $x$ gives $4x^{2}$, showing the stretch as a coefficient of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the vertical shift",
          "workingLatex": "y=4x^{2}-3",
          "explanation": "Subtracting $3$ completes the equation of the transformed curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two transformations",
          "workingLatex": "\\text{stretch }\\tfrac{1}{2}\\ (x\\text{-axis}),\\ \\text{then down }3",
          "explanation": "The single instruction $f(2x)-3$ combines a horizontal stretch of scale factor $\\tfrac{1}{2}$ with a downward translation of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Track the vertex",
          "workingLatex": "(0,\\,0)\\to(0,\\,-3)",
          "explanation": "A horizontal stretch fixes the origin because $0$ divided by $2$ is still $0$; the vertex only moves down $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm from the equation",
          "workingLatex": "y=4x^{2}-3\\ \\Rightarrow\\ \\text{min at }x=0,\\ y=-3",
          "explanation": "The smallest value of $4x^{2}$ is $0$ at $x=0$, so the minimum of the curve is $-3$, confirming the turning point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "y=4x^{2}-3,\\quad (0,\\,-3)",
          "explanation": "The equation, the two transformations and the turning point together answer the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=4x^{2}-3$; a horizontal stretch of scale factor $\\tfrac{1}{2}$ (parallel to the $x$-axis) followed by a translation of $3$ units down, with turning point at $(0,\\,-3)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "reciprocal-graph",
      "asymptotes",
      "intercepts"
    ],
    "questionText": "The curve $C$ has equation $y=\\frac{1}{x-2}+3$ and is obtained by transforming the curve $y=\\frac{1}{x}$. State the equations of the two asymptotes of $C$ and find the coordinates of the points where $C$ meets the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the asymptotes of the base curve",
          "workingLatex": "y=\\frac{1}{x}:\\ x=0,\\ y=0",
          "explanation": "The reciprocal curve $y=\\frac{1}{x}$ never touches the axes: as $x\\to 0$ the value blows up, and as $x\\to\\pm\\infty$ the value shrinks to zero. So its asymptotes are the two axes, $x=0$ and $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation in transformation form",
          "workingLatex": "y=f(x-2)+3,\\quad f(x)=\\frac{1}{x}",
          "explanation": "Recognising $\\frac{1}{x-2}+3$ as $f(x-2)+3$ shows the curve is the reciprocal curve with two changes: something inside the bracket ($x\\to x-2$) and something added on the outside ($+3$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the transformation",
          "workingLatex": "\\text{translate right }2,\\ \\text{up }3",
          "explanation": "The $-2$ inside the bracket shifts the curve horizontally, and because inside-the-bracket changes do the opposite of their sign, it moves $2$ to the right. The $+3$ on the outside lifts every point up by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the vertical asymptote",
          "workingLatex": "x=0\\ \\to\\ x=2",
          "explanation": "The vertical asymptote is a vertical line, so only the horizontal shift affects it. Moving right $2$ carries the line $x=0$ across to $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Transform the horizontal asymptote",
          "workingLatex": "y=0\\ \\to\\ y=3",
          "explanation": "The horizontal asymptote is a horizontal line, so only the vertical shift moves it. Raising the curve by $3$ lifts the line $y=0$ up to $y=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both asymptotes",
          "workingLatex": "x=2,\\quad y=3",
          "explanation": "These are the lines the transformed curve approaches but never reaches. They also tell you the 'centre' the reciprocal shape is wrapped around.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the y-intercept",
          "workingLatex": "x=0:\\ y=\\frac{1}{0-2}+3",
          "explanation": "The curve meets the $y$-axis where $x=0$. Substituting $x=0$ into the equation gives the height at which it crosses.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=-\\frac{1}{2}+3=\\frac{5}{2}\\ \\Rightarrow\\ \\left(0,\\,\\frac{5}{2}\\right)",
          "explanation": "Working out $\\frac{1}{-2}+3=-\\tfrac{1}{2}+3=\\tfrac{5}{2}$ gives the $y$-coordinate. Since $x=2$ is the vertical asymptote, $x=0$ is safely inside the domain, so this crossing genuinely exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the x-intercept",
          "workingLatex": "y=0:\\ \\frac{1}{x-2}+3=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. Setting the equation equal to zero lets us solve for the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the x-intercept",
          "workingLatex": "\\frac{1}{x-2}=-3\\ \\Rightarrow\\ x-2=-\\frac{1}{3}\\ \\Rightarrow\\ x=\\frac{5}{3}",
          "explanation": "Rearranging gives $\\frac{1}{x-2}=-3$; taking reciprocals of both sides gives $x-2=-\\frac{1}{3}$, and adding $2$ gives $x=\\frac{5}{3}$. So the curve crosses the $x$-axis at $\\left(\\frac{5}{3},\\,0\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the results",
          "workingLatex": "x=2,\\ y=3;\\ \\left(0,\\,\\frac{5}{2}\\right),\\ \\left(\\frac{5}{3},\\,0\\right)",
          "explanation": "Bringing everything together gives the full picture of the transformed reciprocal curve: its two asymptotes and its two axis crossings.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes $x=2$ and $y=3$; the curve meets the $y$-axis at $\\left(0,\\,\\frac{5}{2}\\right)$ and the $x$-axis at $\\left(\\frac{5}{3},\\,0\\right)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "reciprocal-graph",
      "asymptotes",
      "translation"
    ],
    "questionText": "The curve $y=\\frac{2}{x}$ is transformed to give the curve with equation $y=\\frac{2}{x}-1$. Write down the equations of the asymptotes of the new curve and find the coordinates of any points where it crosses the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base asymptotes",
          "workingLatex": "y=\\frac{2}{x}:\\ x=0,\\ y=0",
          "explanation": "The curve $y=\\frac{2}{x}$ has exactly the same asymptotes as $y=\\frac{1}{x}$: the constant $2$ only stretches it, it does not move the axes it hugs. So the asymptotes are $x=0$ and $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y=\\frac{2}{x}-1\\ \\Rightarrow\\ \\text{translate down }1",
          "explanation": "Subtracting $1$ on the outside lowers every output by $1$. This is a vertical translation down by $1$, with no horizontal change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Transform the vertical asymptote",
          "workingLatex": "x=0\\ \\text{(unchanged)}",
          "explanation": "A purely vertical shift slides points straight up or down, so a vertical line stays exactly where it is. The vertical asymptote remains $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the horizontal asymptote",
          "workingLatex": "y=0\\ \\to\\ y=-1",
          "explanation": "The horizontal asymptote drops with the curve. Moving down $1$ takes the line $y=0$ to $y=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the asymptotes",
          "workingLatex": "x=0,\\quad y=-1",
          "explanation": "The new curve wraps around the vertical $y$-axis and levels off towards the line $y=-1$ far out to the left and right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test for a y-intercept",
          "workingLatex": "x=0:\\ y=\\frac{2}{0}-1\\ \\text{undefined}",
          "explanation": "A $y$-intercept needs $x=0$, but $x=0$ is exactly the vertical asymptote, where the curve is undefined. Dividing by zero is not allowed here.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude about the y-axis",
          "workingLatex": "\\text{no }y\\text{-intercept}",
          "explanation": "Because the $y$-axis is the vertical asymptote, the curve never crosses it. This is a common feature of reciprocal curves that have not been shifted sideways.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the x-intercept",
          "workingLatex": "y=0:\\ \\frac{2}{x}-1=0",
          "explanation": "The curve meets the $x$-axis where $y=0$. Setting the equation to zero gives the equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "\\frac{2}{x}=1\\ \\Rightarrow\\ x=2",
          "explanation": "Adding $1$ to both sides gives $\\frac{2}{x}=1$, so $x=2$. This is well away from the asymptote at $x=0$, so the crossing is genuine.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the x-intercept",
          "workingLatex": "(2,\\,0)",
          "explanation": "Pairing $x=2$ with $y=0$ gives the single point where the curve cuts the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the results",
          "workingLatex": "x=0,\\ y=-1;\\ \\text{no }y\\text{-int};\\ (2,\\,0)",
          "explanation": "The full description: asymptotes $x=0$ and $y=-1$, no crossing of the $y$-axis, and a single crossing of the $x$-axis at $(2,\\,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Asymptotes $x=0$ and $y=-1$. There is no $y$-intercept (the $y$-axis is the vertical asymptote); the curve crosses the $x$-axis at $(2,\\,0)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "reciprocal-graph",
      "translation",
      "asymptotes"
    ],
    "questionText": "The curve $y=\\frac{1}{x}$ is translated $3$ units to the right and $2$ units down. Find the equation of the resulting curve, state the equations of its asymptotes, and find the coordinates of the points where it meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base asymptotes",
          "workingLatex": "y=\\frac{1}{x}:\\ x=0,\\ y=0",
          "explanation": "Start from what you know: $y=\\frac{1}{x}$ hugs the two axes, so its asymptotes are $x=0$ and $y=0$. Every feature of the new curve will be a moved version of these.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the horizontal translation",
          "workingLatex": "\\text{right }3:\\ x\\to x-3\\ \\Rightarrow\\ y=\\frac{1}{x-3}",
          "explanation": "To move a curve $3$ to the right you replace $x$ with $x-3$ in the equation. The subtraction inside the bracket looks backwards, but it correctly shifts the curve to the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the vertical translation",
          "workingLatex": "\\text{down }2:\\ y=\\frac{1}{x-3}-2",
          "explanation": "To move a curve $2$ down you subtract $2$ from the whole expression. Outside changes behave as you expect: subtracting lowers the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the new equation",
          "workingLatex": "y=\\frac{1}{x-3}-2",
          "explanation": "Combining both moves gives the equation of the image curve, ready to read off its features.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Transform the vertical asymptote",
          "workingLatex": "x=0\\ \\to\\ x=3",
          "explanation": "Only the horizontal shift affects the vertical asymptote, moving the line $x=0$ right by $3$ to $x=3$. This is exactly the value that makes the denominator zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Transform the horizontal asymptote",
          "workingLatex": "y=0\\ \\to\\ y=-2",
          "explanation": "Only the vertical shift affects the horizontal asymptote, dropping the line $y=0$ down by $2$ to $y=-2$, the constant the curve levels off towards.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the asymptotes",
          "workingLatex": "x=3,\\quad y=-2",
          "explanation": "These two lines frame the transformed reciprocal shape and are the answer to that part of the question.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the y-intercept",
          "workingLatex": "x=0:\\ y=\\frac{1}{0-3}-2",
          "explanation": "Substitute $x=0$ to find where the curve crosses the $y$-axis. Since the vertical asymptote is at $x=3$, the value $x=0$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=-\\frac{1}{3}-2=-\\frac{7}{3}\\ \\Rightarrow\\ \\left(0,\\,-\\frac{7}{3}\\right)",
          "explanation": "Working out $\\frac{1}{-3}-2=-\\tfrac{1}{3}-2=-\\tfrac{7}{3}$ gives the height of the crossing on the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the x-intercept",
          "workingLatex": "y=0:\\ \\frac{1}{x-3}=2",
          "explanation": "Setting $y=0$ and rearranging gives $\\frac{1}{x-3}=2$, the equation for where the curve meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for the x-intercept",
          "workingLatex": "x-3=\\frac{1}{2}\\ \\Rightarrow\\ x=\\frac{7}{2}\\ \\Rightarrow\\ \\left(\\frac{7}{2},\\,0\\right)",
          "explanation": "Taking reciprocals gives $x-3=\\frac{1}{2}$, so $x=\\frac{7}{2}$. The curve crosses the $x$-axis at $\\left(\\frac{7}{2},\\,0\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect the results",
          "workingLatex": "y=\\frac{1}{x-3}-2;\\ x=3,\\ y=-2;\\ \\left(0,\\,-\\frac{7}{3}\\right),\\ \\left(\\frac{7}{2},\\,0\\right)",
          "explanation": "The complete answer: the new equation, its two asymptotes, and its two axis crossings.",
          "diagram": null
        }
      ],
      "finalAnswer": "Equation $y=\\frac{1}{x-3}-2$; asymptotes $x=3$ and $y=-2$; crosses the $y$-axis at $\\left(0,\\,-\\frac{7}{3}\\right)$ and the $x$-axis at $\\left(\\frac{7}{2},\\,0\\right)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "square-root-graph",
      "translation",
      "intercepts"
    ],
    "questionText": "The curve $y=\\sqrt{x}$ is transformed to give the curve with equation $y=\\sqrt{x+4}-2$. Describe fully the transformation that maps $y=\\sqrt{x}$ onto this curve, state the coordinates of the endpoint (starting point) of the new curve, and find the coordinates of any points where it meets the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base curve",
          "workingLatex": "y=\\sqrt{x}:\\ \\text{starts at }(0,\\,0),\\ x\\ge 0",
          "explanation": "The square-root curve begins at the origin, exists only for $x\\ge 0$ (you cannot square-root a negative), and rises gently to the right. Its endpoint at $(0,\\,0)$ is the key feature to track.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write in transformation form",
          "workingLatex": "y=\\sqrt{x+4}-2=f(x+4)-2,\\ f(x)=\\sqrt{x}",
          "explanation": "Seeing the equation as $f(x+4)-2$ separates the two effects: the $+4$ inside the root acts horizontally, and the $-2$ outside acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the inside change",
          "workingLatex": "+4\\ \\text{inside}\\ \\Rightarrow\\ \\text{left }4",
          "explanation": "A change inside the function acts on $x$ and does the opposite of its sign, so $+4$ moves the curve $4$ to the left, not right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the outside change",
          "workingLatex": "-2\\ \\text{outside}\\ \\Rightarrow\\ \\text{down }2",
          "explanation": "A change outside the function acts on $y$ directly, so subtracting $2$ simply lowers every point by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the full transformation",
          "workingLatex": "\\text{translation: }4\\ \\text{left},\\ 2\\ \\text{down}",
          "explanation": "Together the two moves are a single translation of $4$ units in the negative $x$-direction and $2$ units in the negative $y$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Map the endpoint",
          "workingLatex": "(0,\\,0)\\ \\to\\ (-4,\\,-2)",
          "explanation": "The starting point of the curve moves with it: left $4$ and down $2$ carries $(0,\\,0)$ to $(-4,\\,-2)$. This is where the new curve begins.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the domain",
          "workingLatex": "x+4\\ge 0\\ \\Rightarrow\\ x\\ge -4",
          "explanation": "The root is only defined when $x+4\\ge 0$, so the curve exists for $x\\ge -4$. This confirms the endpoint really is the leftmost point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the x-intercept",
          "workingLatex": "y=0:\\ \\sqrt{x+4}=2",
          "explanation": "The curve meets the $x$-axis where $y=0$. Setting $\\sqrt{x+4}-2=0$ rearranges to $\\sqrt{x+4}=2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the x-intercept",
          "workingLatex": "x+4=4\\ \\Rightarrow\\ x=0\\ \\Rightarrow\\ (0,\\,0)",
          "explanation": "Squaring both sides gives $x+4=4$, so $x=0$. The curve crosses the $x$-axis at the origin $(0,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the y-intercept",
          "workingLatex": "x=0:\\ y=\\sqrt{4}-2=0\\ \\Rightarrow\\ (0,\\,0)",
          "explanation": "Substituting $x=0$ gives $\\sqrt{4}-2=2-2=0$. So the $y$-intercept is also the origin — the two intercepts are the same point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Collect the results",
          "workingLatex": "\\text{endpoint }(-4,\\,-2);\\ \\text{through }(0,\\,0)",
          "explanation": "The full answer: a translation $4$ left and $2$ down, an endpoint at $(-4,\\,-2)$, and a curve that passes through the origin, which serves as both its $x$- and $y$-intercept.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation of $4$ units in the negative $x$-direction and $2$ units in the negative $y$-direction; the endpoint moves from $(0,\\,0)$ to $(-4,\\,-2)$, and the curve passes through the origin $(0,\\,0)$, which is both its $x$-intercept and its $y$-intercept."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "translation",
      "point-mapping"
    ],
    "questionText": "The diagram shows the curve $y=f(x)$. The curve has a maximum point at $(2,\\,5)$ and crosses the $x$-axis at $(-1,\\,0)$ and $(4,\\,0)$. The curve $y=f(x)+3$ is to be drawn on the same axes. State the coordinates of the image of the maximum point and of the two points where $y=f(x)$ crossed the $x$-axis, and explain what happens to those crossings.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the transformation",
          "workingLatex": "y=f(x)+3",
          "explanation": "Adding $3$ on the outside adds $3$ to every output value. This raises the whole curve without changing any $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the transformation",
          "workingLatex": "\\text{translation up }3",
          "explanation": "Because only the height of each point changes, this is a vertical translation up by $3$ units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the point-mapping rule",
          "workingLatex": "(p,\\,q)\\ \\to\\ (p,\\,q+3)",
          "explanation": "Every labelled point moves by the same rule: keep the $x$-coordinate, add $3$ to the $y$-coordinate. Applying this rule handles all the features at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Map the maximum point",
          "workingLatex": "(2,\\,5)\\ \\to\\ (2,\\,8)",
          "explanation": "The maximum sits at $(2,\\,5)$; adding $3$ to its height gives $(2,\\,8)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the turning point type",
          "workingLatex": "\\text{still a maximum}",
          "explanation": "A vertical translation slides the whole shape up without flipping or stretching it, so the highest point stays a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Map the first crossing",
          "workingLatex": "(-1,\\,0)\\ \\to\\ (-1,\\,3)",
          "explanation": "The root at $(-1,\\,0)$ rises by $3$ to $(-1,\\,3)$. Its $x$-coordinate is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Map the second crossing",
          "workingLatex": "(4,\\,0)\\ \\to\\ (4,\\,3)",
          "explanation": "In the same way the root at $(4,\\,0)$ moves up to $(4,\\,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the fate of the crossings",
          "workingLatex": "\\text{now at }y=3,\\ \\text{no longer on }x\\text{-axis}",
          "explanation": "Those two points were on the $x$-axis only because their height was $0$. Lifting them to height $3$ means the new curve no longer meets the $x$-axis at those points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm horizontal positions",
          "workingLatex": "x\\text{-coordinates unchanged}",
          "explanation": "A vertical shift never moves points left or right, so all three $x$-coordinates stay exactly as they were.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the images",
          "workingLatex": "(2,\\,8),\\ (-1,\\,3),\\ (4,\\,3)",
          "explanation": "These are the images of the three labelled points on the transformed curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation up $3$; the maximum maps to $(2,\\,8)$, and the former roots map to $(-1,\\,3)$ and $(4,\\,3)$, so the transformed curve no longer meets the $x$-axis at those points."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "translation",
      "point-mapping"
    ],
    "questionText": "The diagram shows the curve $y=g(x)$, which has a minimum point at $(-3,\\,-4)$ and crosses the $x$-axis at $(-7,\\,0)$ and $(1,\\,0)$. The curve $y=g(x-2)$ is drawn on the same axes. State the coordinates of the image of the minimum point and of the two $x$-axis crossings.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify where the change is",
          "workingLatex": "y=g(x-2)",
          "explanation": "The change is inside the bracket, acting on $x$. Changes inside the function are horizontal, moving the curve left or right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the inside-opposite rule",
          "workingLatex": "\\text{inside bracket: opposite}\\ \\Rightarrow\\ \\text{right }2",
          "explanation": "Inside-the-bracket changes do the opposite of their sign. The $-2$ therefore moves the curve $2$ to the right. A helpful check: to keep $g$ receiving the same input, $x$ must be $2$ larger, so points shift right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the point-mapping rule",
          "workingLatex": "(p,\\,q)\\ \\to\\ (p+2,\\,q)",
          "explanation": "Every labelled point keeps its height and gains $2$ on its $x$-coordinate. This single rule maps all the features.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Map the minimum point",
          "workingLatex": "(-3,\\,-4)\\ \\to\\ (-1,\\,-4)",
          "explanation": "The minimum at $(-3,\\,-4)$ moves right $2$ to $(-1,\\,-4)$, keeping the same depth.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the turning point type",
          "workingLatex": "\\text{still a minimum}",
          "explanation": "A horizontal slide does not turn the shape over, so the lowest point remains a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Map the first crossing",
          "workingLatex": "(-7,\\,0)\\ \\to\\ (-5,\\,0)",
          "explanation": "The root at $(-7,\\,0)$ shifts right $2$ to $(-5,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Map the second crossing",
          "workingLatex": "(1,\\,0)\\ \\to\\ (3,\\,0)",
          "explanation": "Likewise the root at $(1,\\,0)$ moves right $2$ to $(3,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the roots stay on the axis",
          "workingLatex": "\\text{still on }x\\text{-axis (}y=0\\text{)}",
          "explanation": "A horizontal shift keeps heights the same, so points at height $0$ remain at height $0$: the curve still crosses the $x$-axis, just at new $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm heights unchanged",
          "workingLatex": "y\\text{-values unchanged}",
          "explanation": "Because the transformation is purely horizontal, none of the $y$-coordinates change.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the images",
          "workingLatex": "(-1,\\,-4),\\ (-5,\\,0),\\ (3,\\,0)",
          "explanation": "These are the images of the three labelled points on $y=g(x-2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation right $2$; the minimum maps to $(-1,\\,-4)$, and the $x$-axis crossings map to $(-5,\\,0)$ and $(3,\\,0)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "reflection",
      "point-mapping"
    ],
    "questionText": "The diagram shows the curve $y=h(x)$. It has a maximum point at $(1,\\,6)$, crosses the $x$-axis at $(-2,\\,0)$ and $(4,\\,0)$, and crosses the $y$-axis at $(0,\\,4)$. Describe the transformation that gives $y=-h(x)$ and state the coordinates of the images of the maximum point, the two $x$-axis crossings, and the $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the transformation",
          "workingLatex": "y=-h(x)\\ \\Rightarrow\\ \\text{reflection in the }x\\text{-axis}",
          "explanation": "Multiplying the whole function by $-1$ flips the sign of every output. Points above the $x$-axis go below it and vice versa, which is a reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the point-mapping rule",
          "workingLatex": "(p,\\,q)\\ \\to\\ (p,\\,-q)",
          "explanation": "Each point keeps its $x$-coordinate but has its $y$-coordinate negated. This rule maps every labelled feature.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Map the maximum point",
          "workingLatex": "(1,\\,6)\\ \\to\\ (1,\\,-6)",
          "explanation": "Negating the height of the maximum $(1,\\,6)$ sends it to $(1,\\,-6)$ below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the turning point changes type",
          "workingLatex": "\\text{maximum}\\ \\to\\ \\text{minimum}",
          "explanation": "Flipping the curve upside down turns the highest point into the lowest point, so the maximum becomes a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Map the first crossing",
          "workingLatex": "(-2,\\,0)\\ \\to\\ (-2,\\,0)",
          "explanation": "The root at $(-2,\\,0)$ has height $0$, and $-0=0$, so it does not move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Map the second crossing",
          "workingLatex": "(4,\\,0)\\ \\to\\ (4,\\,0)",
          "explanation": "For the same reason the root at $(4,\\,0)$ stays exactly where it is.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain why the roots are fixed",
          "workingLatex": "-0=0\\ \\Rightarrow\\ \\text{roots unchanged}",
          "explanation": "Points on the mirror line itself do not move when you reflect. Since the $x$-axis is the mirror, every point already on it stays put, so the curve crosses at the same $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Map the y-intercept",
          "workingLatex": "(0,\\,4)\\ \\to\\ (0,\\,-4)",
          "explanation": "The $y$-intercept $(0,\\,4)$ is not on the mirror, so its height is negated to give $(0,\\,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm horizontal positions",
          "workingLatex": "x\\text{-coordinates unchanged}",
          "explanation": "A reflection in the $x$-axis never moves points sideways, so every $x$-coordinate is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the images",
          "workingLatex": "(1,\\,-6),\\ (-2,\\,0),\\ (4,\\,0),\\ (0,\\,-4)",
          "explanation": "These are the images of all four labelled points on $y=-h(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reflection in the $x$-axis; the maximum $(1,\\,6)$ maps to a minimum at $(1,\\,-6)$, the $x$-axis crossings $(-2,\\,0)$ and $(4,\\,0)$ are unchanged, and the $y$-intercept maps to $(0,\\,-4)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "stretch",
      "point-mapping"
    ],
    "questionText": "The diagram shows the curve $y=f(x)$, which has a minimum point at $(2,\\,-3)$ and crosses the $x$-axis at $(0,\\,0)$ and $(4,\\,0)$. The curve $y=2f(x)$ is drawn on the same axes. Describe the transformation and state the coordinates of the image of the minimum point and of the two $x$-axis crossings.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the transformation",
          "workingLatex": "y=2f(x)\\ \\Rightarrow\\ \\text{vertical stretch, s.f. }2",
          "explanation": "Multiplying the whole function by $2$ doubles every output. Heights are scaled away from the $x$-axis, which is a vertical stretch with scale factor $2$ parallel to the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the effect on features",
          "workingLatex": "\\text{heights}\\times 2,\\ \\text{roots fixed}",
          "explanation": "Doubling heights moves points twice as far from the $x$-axis, but any point already at height $0$ stays at $0$. So the $x$-intercepts do not move while turning points stretch away from the axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the point-mapping rule",
          "workingLatex": "(p,\\,q)\\ \\to\\ (p,\\,2q)",
          "explanation": "Each labelled point keeps its $x$-coordinate and has its $y$-coordinate doubled. Applying this rule maps every feature.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Map the minimum point",
          "workingLatex": "(2,\\,-3)\\ \\to\\ (2,\\,-6)",
          "explanation": "Doubling the height of the minimum $(2,\\,-3)$ gives $(2,\\,-6)$, twice as far below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the turning point type",
          "workingLatex": "\\text{still a minimum}",
          "explanation": "A positive vertical stretch does not flip the curve, so the lowest point stays a minimum, just lower down.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Map the first crossing",
          "workingLatex": "(0,\\,0)\\ \\to\\ (0,\\,0)",
          "explanation": "The root at the origin has height $0$, and $2\\times 0=0$, so it does not move.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Map the second crossing",
          "workingLatex": "(4,\\,0)\\ \\to\\ (4,\\,0)",
          "explanation": "For the same reason the root at $(4,\\,0)$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why roots are fixed",
          "workingLatex": "2\\times 0=0\\ \\Rightarrow\\ \\text{roots unchanged}",
          "explanation": "Scaling multiplies heights, and multiplying zero by anything leaves zero. Points on the $x$-axis are therefore invariant under a vertical stretch.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm horizontal positions",
          "workingLatex": "x\\text{-coordinates unchanged}",
          "explanation": "A vertical stretch only changes heights, so all $x$-coordinates stay the same.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the images",
          "workingLatex": "(2,\\,-6),\\ (0,\\,0),\\ (4,\\,0)",
          "explanation": "These are the images of the three labelled points on $y=2f(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Vertical stretch, scale factor $2$ (parallel to the $y$-axis); the minimum maps to $(2,\\,-6)$, and the $x$-axis crossings $(0,\\,0)$ and $(4,\\,0)$ are unchanged."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "stretch",
      "asymptotes",
      "point-mapping"
    ],
    "questionText": "The diagram shows the curve $y=f(x)$. It has a vertical asymptote $x=4$ and a horizontal asymptote $y=1$, crosses the $x$-axis at $(8,\\,0)$ and crosses the $y$-axis at $(0,\\,3)$. The curve $y=f(2x)$ is drawn on the same axes. Describe the transformation and state the equations of the two asymptotes of $y=f(2x)$ together with the coordinates of its $x$- and $y$-intercepts.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify where the change is",
          "workingLatex": "y=f(2x)",
          "explanation": "The input $x$ is multiplied by $2$ inside the function. A change inside acts horizontally, so this stretches or squashes the curve along the $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the scale factor",
          "workingLatex": "\\text{horizontal stretch, s.f. }\\frac{1}{2}",
          "explanation": "Horizontal stretches use the reciprocal of the multiplier, so multiplying $x$ by $2$ gives a stretch of scale factor $\\frac{1}{2}$: the curve is squashed towards the $y$-axis. To see why, $f(2x)$ reaches the value $f$ had at input $X$ when $2x=X$, i.e. at $x=\\frac{X}{2}$ — half the distance out.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the point-mapping rule",
          "workingLatex": "(p,\\,q)\\ \\to\\ \\left(\\frac{p}{2},\\,q\\right)",
          "explanation": "Each feature keeps its height and has its $x$-coordinate halved. This rule maps the asymptotes and intercepts alike.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the vertical asymptote",
          "workingLatex": "x=4\\ \\to\\ x=2",
          "explanation": "A vertical asymptote is a vertical line at a fixed $x$-value, so halving $x$ moves it from $x=4$ to $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Transform the horizontal asymptote",
          "workingLatex": "y=1\\ \\text{(unchanged)}",
          "explanation": "A horizontal asymptote is a fixed height, and a horizontal stretch never changes heights, so $y=1$ stays put.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the asymptotes",
          "workingLatex": "x=2,\\quad y=1",
          "explanation": "The squashed curve wraps around the vertical line $x=2$ and levels off towards $y=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Map the x-intercept",
          "workingLatex": "(8,\\,0)\\ \\to\\ (4,\\,0)",
          "explanation": "The $x$-intercept $(8,\\,0)$ has its $x$-coordinate halved to give $(4,\\,0)$; its height $0$ is unchanged, so it still lies on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Map the y-intercept",
          "workingLatex": "(0,\\,3)\\ \\to\\ (0,\\,3)",
          "explanation": "The $y$-intercept sits at $x=0$, and half of $0$ is still $0$, so it does not move: $(0,\\,3)$ stays $(0,\\,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why the y-intercept is fixed",
          "workingLatex": "\\frac{0}{2}=0\\ \\Rightarrow\\ y\\text{-intercept unchanged}",
          "explanation": "A horizontal stretch pins the $y$-axis in place because points on it have $x=0$. Any curve crossing the $y$-axis keeps the same crossing point under a horizontal stretch.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the results",
          "workingLatex": "x=2,\\ y=1;\\ (4,\\,0),\\ (0,\\,3)",
          "explanation": "The full description of $y=f(2x)$: its two asymptotes and its two axis crossings.",
          "diagram": null
        }
      ],
      "finalAnswer": "Horizontal stretch, scale factor $\\frac{1}{2}$ (parallel to the $x$-axis); asymptotes $x=2$ and $y=1$; the $x$-intercept is $(4,\\,0)$ and the $y$-intercept is $(0,\\,3)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "completing-the-square",
      "translation",
      "quadratic"
    ],
    "questionText": "The curve has equation $y=x^2-6x+11$. Express it in the form $(x-h)^2+k$, and hence describe the single transformation that maps $y=x^2$ onto this curve, stating the coordinates of its turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the method",
          "workingLatex": "y=x^2-6x+11",
          "explanation": "To reveal a translation of $y=x^2$ we rewrite the quadratic by completing the square, which packages the $x$-terms into a single squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x",
          "workingLatex": "-6\\div 2=-3",
          "explanation": "The number inside the bracket is always half the coefficient of $x$, because $(x+p)^2=x^2+2px+\\dots$, so $2p=-6$ gives $p=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the bracket and expand",
          "workingLatex": "(x-3)^2=x^2-6x+9",
          "explanation": "Squaring $(x-3)$ reproduces the $x^2-6x$ we need, but it also introduces an extra $+9$ that must be accounted for.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Balance the constant",
          "workingLatex": "11-9=2",
          "explanation": "The bracket has supplied $+9$, but the original constant is $+11$, so we still owe $+2$ to keep the expression unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the completed-square form",
          "workingLatex": "y=(x-3)^2+2",
          "explanation": "This is exactly $(x-h)^2+k$ with $h=3$ and $k=2$; the algebra is now in a shape that reads directly as a transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the transformation",
          "workingLatex": "y=f(x-3)+2,\\ \\ f(x)=x^2",
          "explanation": "Seen as $f(x-3)+2$, the bracket handles a horizontal shift and the $+2$ handles a vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the horizontal shift",
          "workingLatex": "x\\to x-3\\ \\Rightarrow\\ \\text{right }3",
          "explanation": "A change inside the bracket does the opposite of what it looks like: subtracting $3$ moves the curve $3$ units to the right, not left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the translation vector",
          "workingLatex": "\\binom{3}{2}",
          "explanation": "Combining a shift of $3$ right and $2$ up gives a single translation by the vector $\\binom{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Map the turning point",
          "workingLatex": "(0,\\,0)\\to(3,\\,2)",
          "explanation": "The vertex of $y=x^2$ sits at the origin; applying the same translation moves it to $(3,\\,2)$, the minimum of the new curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x-3)^2+2$; a translation of $y=x^2$ by $\\binom{3}{2}$ ($3$ right and $2$ up), with turning point $(3,\\,2)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "completing-the-square",
      "translation",
      "minimum-point"
    ],
    "questionText": "Express $y=x^2+4x+1$ in the form $(x+p)^2+q$. Hence write down the translation that maps $y=x^2$ onto this curve, and state the minimum value of $y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the method",
          "workingLatex": "y=x^2+4x+1",
          "explanation": "Completing the square rewrites the quadratic as a shifted copy of $y=x^2$, which is exactly what exposes the translation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x",
          "workingLatex": "4\\div 2=2",
          "explanation": "The constant inside the bracket is half the coefficient of $x$, so here it is $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the bracket and expand",
          "workingLatex": "(x+2)^2=x^2+4x+4",
          "explanation": "Squaring $(x+2)$ gives back $x^2+4x$ as required, together with an unwanted $+4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Balance the constant",
          "workingLatex": "1-4=-3",
          "explanation": "The bracket contributed $+4$, but only $+1$ was present, so we correct with $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the completed-square form",
          "workingLatex": "y=(x+2)^2-3",
          "explanation": "This matches $(x+p)^2+q$ with $p=2$ and $q=-3$, ready to read as a transformation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the horizontal shift",
          "workingLatex": "x\\to x+2\\ \\Rightarrow\\ \\text{left }2",
          "explanation": "Inside the bracket does the opposite: adding $2$ slides the curve $2$ units to the left.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the translation vector",
          "workingLatex": "\\binom{-2}{-3}",
          "explanation": "The $-3$ outside the bracket lowers the curve by $3$, so overall it moves $2$ left and $3$ down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Map the turning point",
          "workingLatex": "(0,\\,0)\\to(-2,\\,-3)",
          "explanation": "The vertex of $y=x^2$ at the origin is carried to $(-2,\\,-3)$ by the same translation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the minimum value",
          "workingLatex": "(x+2)^2\\ge 0\\ \\Rightarrow\\ y_{\\min}=-3",
          "explanation": "A square is never negative, so the smallest $y$ occurs when $(x+2)^2=0$ at $x=-2$, giving $y=-3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x+2)^2-3$; a translation of $y=x^2$ by $\\binom{-2}{-3}$ ($2$ left, $3$ down); minimum value $y=-3$ at $x=-2$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "translation",
      "completing-the-square",
      "quadratic"
    ],
    "questionText": "The graph of $y=x^2$ is translated so that its turning point moves to $(4,\\,-3)$. Find the equation of the image in the form $y=x^2+bx+c$, and state the translation vector used.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the basic vertex",
          "workingLatex": "y=x^2\\ \\text{has minimum at}\\ (0,\\,0)",
          "explanation": "The parabola $y=x^2$ has its turning point at the origin; translating the curve simply moves this point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the completed-square vertex form",
          "workingLatex": "y=(x-h)^2+k\\ \\text{has minimum}\\ (h,\\,k)",
          "explanation": "Writing the curve as $(x-h)^2+k$ places the vertex directly at $(h,\\,k)$, so we can build the equation from the required vertex.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the new vertex",
          "workingLatex": "h=4,\\ k=-3",
          "explanation": "Matching $(h,\\,k)$ to the target turning point $(4,\\,-3)$ fixes both constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the completed-square equation",
          "workingLatex": "y=(x-4)^2-3",
          "explanation": "This curve has exactly the required minimum at $(4,\\,-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the translation vector",
          "workingLatex": "\\binom{4}{-3}",
          "explanation": "Moving the vertex from $(0,\\,0)$ to $(4,\\,-3)$ is a translation of $4$ right and $3$ down.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "(x-4)^2=x^2-8x+16",
          "explanation": "To reach the requested $y=x^2+bx+c$ form we multiply out the square.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the constant",
          "workingLatex": "y=x^2-8x+16-3=x^2-8x+13",
          "explanation": "Adding the $-3$ finishes the conversion to the expanded form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the coefficients",
          "workingLatex": "b=-8,\\ c=13",
          "explanation": "Reading off the expanded quadratic gives the required values of $b$ and $c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the vertex",
          "workingLatex": "x=4:\\ 16-32+13=-3\\ \\checkmark",
          "explanation": "Substituting $x=4$ returns $y=-3$, confirming the minimum sits where it should.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x^2-8x+13$ (equivalently $y=(x-4)^2-3$); translation by $\\binom{4}{-3}$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "trigonometry",
      "stretch",
      "amplitude"
    ],
    "questionText": "Describe fully the single transformation that maps $y=\\sin x$ onto $y=3\\sin x$. State the amplitude and period of $y=3\\sin x$, and give the coordinates of the maximum point on $0\\le x\\le 360^{\\circ}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "y=3\\sin x=3f(x),\\ \\ f(x)=\\sin x",
          "explanation": "The whole function is multiplied by $3$, which is the $a\\,f(x)$ pattern acting on the outputs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the transformation",
          "workingLatex": "a\\,f(x):\\ \\text{vertical stretch, scale factor }3",
          "explanation": "Multiplying outside the function stretches the curve vertically (parallel to the $y$-axis) by that factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Effect on a general point",
          "workingLatex": "(p,\\,q)\\to(p,\\,3q)",
          "explanation": "Every height is tripled while the $x$-coordinate stays put, since only the output is scaled.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude}=3\\times 1=3",
          "explanation": "The peak of $\\sin x$ is $1$; tripling every height makes the new peak $3$, so the amplitude is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the period",
          "workingLatex": "\\text{period}=360^{\\circ}",
          "explanation": "A vertical stretch does nothing horizontally, so the wave still repeats every $360^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the maximum of sin x",
          "workingLatex": "\\max\\ \\text{of }\\sin x\\ \\text{at}\\ (90^{\\circ},\\,1)",
          "explanation": "On $0\\le x\\le 360^{\\circ}$ the sine curve peaks once, at $x=90^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Map the maximum",
          "workingLatex": "(90^{\\circ},\\,1)\\to(90^{\\circ},\\,3)",
          "explanation": "Applying $(p,\\,q)\\to(p,\\,3q)$ keeps $x=90^{\\circ}$ and raises the height to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Map the minimum",
          "workingLatex": "(270^{\\circ},\\,-1)\\to(270^{\\circ},\\,-3)",
          "explanation": "The trough is scaled the same way, dropping to $-3$ at $x=270^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the roots are fixed",
          "workingLatex": "x=0,\\,180^{\\circ},\\,360^{\\circ}:\\ 3\\times 0=0",
          "explanation": "Where $\\sin x=0$ the height is $3\\times 0=0$, so the $x$-intercepts do not move under a vertical stretch.",
          "diagram": null
        }
      ],
      "finalAnswer": "Vertical stretch, scale factor $3$ (parallel to the $y$-axis); amplitude $3$, period $360^{\\circ}$; maximum at $(90^{\\circ},\\,3)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "trigonometry",
      "translation",
      "range"
    ],
    "questionText": "The curve $y=\\cos x$ is transformed to $y=\\cos x+2$. Describe the transformation, state the amplitude and range of $y=\\cos x+2$, and give the coordinates of its maximum and minimum points on $0\\le x\\le 360^{\\circ}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "y=\\cos x+2=f(x)+2,\\ \\ f(x)=\\cos x",
          "explanation": "The $+2$ is added after the function is evaluated, which is the $f(x)+a$ pattern.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the transformation",
          "workingLatex": "f(x)+a:\\ \\text{translation}\\ \\binom{0}{2}",
          "explanation": "Adding $2$ to every output lifts the whole curve $2$ units upward, a translation with no horizontal part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude}=1",
          "explanation": "The curve is only shifted, not stretched, so the height of the wave above its centre line is unchanged at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the period",
          "workingLatex": "\\text{period}=360^{\\circ}",
          "explanation": "A vertical shift leaves horizontal spacing untouched, so the period is still $360^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Start from the base range",
          "workingLatex": "-1\\le\\cos x\\le 1",
          "explanation": "The cosine function oscillates between $-1$ and $1$; we shift this whole band.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Shift the range up",
          "workingLatex": "-1+2\\le y\\le 1+2\\ \\Rightarrow\\ 1\\le y\\le 3",
          "explanation": "Adding $2$ to every value moves both ends of the range up by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Effect on a general point",
          "workingLatex": "(p,\\,q)\\to(p,\\,q+2)",
          "explanation": "Each point keeps its $x$-coordinate and rises by $2$, which we now apply to the peak and trough.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Map the maxima",
          "workingLatex": "(0^{\\circ},\\,1)\\to(0^{\\circ},\\,3),\\ (360^{\\circ},\\,1)\\to(360^{\\circ},\\,3)",
          "explanation": "Cosine peaks at the ends of the interval, and each peak rises to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Map the minimum",
          "workingLatex": "(180^{\\circ},\\,-1)\\to(180^{\\circ},\\,1)",
          "explanation": "The trough at $x=180^{\\circ}$ lifts from $-1$ to $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation by $\\binom{0}{2}$ ($2$ up); amplitude $1$, range $1\\le y\\le 3$; maxima $(0^{\\circ},\\,3)$ and $(360^{\\circ},\\,3)$, minimum $(180^{\\circ},\\,1)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "trigonometry",
      "stretch",
      "period"
    ],
    "questionText": "Describe the single transformation that maps $y=\\sin x$ onto $y=\\sin 2x$. State the period and amplitude of $y=\\sin 2x$, the number of complete cycles on $0\\le x\\le 360^{\\circ}$, and the coordinates of the first maximum point in this interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "y=\\sin 2x=f(2x),\\ \\ f(x)=\\sin x",
          "explanation": "The input $x$ is multiplied by $2$ inside the function, which is the $f(ax)$ pattern acting horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the transformation",
          "workingLatex": "f(ax):\\ \\text{horizontal stretch, scale factor }\\tfrac{1}{2}",
          "explanation": "For $f(ax)$ the scale factor is the reciprocal $\\tfrac{1}{a}$; with $a=2$ this is a stretch of factor $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain the reciprocal",
          "workingLatex": "x\\to\\tfrac{x}{2}",
          "explanation": "The curve reaches each stage of its cycle twice as quickly, so it is squashed toward the $y$-axis by factor $\\tfrac{1}{2}$ — the counter-intuitive reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude}=1",
          "explanation": "A purely horizontal change leaves the heights alone, so the amplitude stays at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the period",
          "workingLatex": "\\text{period}=\\dfrac{360^{\\circ}}{2}=180^{\\circ}",
          "explanation": "The period of $\\sin bx$ is $\\dfrac{360^{\\circ}}{b}$; with $b=2$ the wave repeats every $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count the cycles",
          "workingLatex": "\\dfrac{360^{\\circ}}{180^{\\circ}}=2",
          "explanation": "With a period of $180^{\\circ}$, exactly two full waves fit into $0\\le x\\le 360^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Map the first maximum",
          "workingLatex": "(90^{\\circ},\\,1)\\to(45^{\\circ},\\,1)",
          "explanation": "Using $(p,\\,q)\\to(\\tfrac{p}{2},\\,q)$, the peak of $\\sin x$ at $90^{\\circ}$ halves to $45^{\\circ}$ while its height stays $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate the second maximum",
          "workingLatex": "2x=450^{\\circ}\\ \\Rightarrow\\ x=225^{\\circ}",
          "explanation": "The next peak occurs when the inner angle is $450^{\\circ}$, giving a second maximum at $x=225^{\\circ}$ within the interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the zeros",
          "workingLatex": "x=0,\\,90^{\\circ},\\,180^{\\circ},\\,270^{\\circ},\\,360^{\\circ}",
          "explanation": "Because the frequency has doubled, the curve crosses the $x$-axis every $90^{\\circ}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Horizontal stretch, scale factor $\\tfrac{1}{2}$ (parallel to the $x$-axis); amplitude $1$, period $180^{\\circ}$; $2$ complete cycles; first maximum at $(45^{\\circ},\\,1)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "exponential",
      "translation",
      "asymptote"
    ],
    "questionText": "The curve $y=2^{x}$ is transformed to $y=2^{x}+3$. Describe the transformation, and state the equation of the horizontal asymptote and the coordinates of the $y$-intercept of $y=2^{x}+3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "y=2^{x}+3=f(x)+3,\\ \\ f(x)=2^{x}",
          "explanation": "The $+3$ is applied after the exponential is evaluated, which is the $f(x)+a$ pattern.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the transformation",
          "workingLatex": "f(x)+a:\\ \\text{translation}\\ \\binom{0}{3}",
          "explanation": "Adding $3$ to every output lifts the whole curve $3$ units upward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the original asymptote",
          "workingLatex": "y=2^{x}:\\ y\\to 0\\ \\text{as}\\ x\\to-\\infty",
          "explanation": "For large negative $x$, $2^{x}$ shrinks toward $0$, so $y=2^{x}$ has horizontal asymptote $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Shift the asymptote",
          "workingLatex": "y=0+3\\ \\Rightarrow\\ y=3",
          "explanation": "The asymptote rides upward with the curve, moving from $y=0$ to $y=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the limit",
          "workingLatex": "x\\to-\\infty:\\ 2^{x}\\to 0,\\ y\\to 3",
          "explanation": "As $2^{x}$ vanishes the height settles just above $3$, confirming the new asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the y-intercept",
          "workingLatex": "x=0:\\ 2^{0}+3=1+3=4",
          "explanation": "Substituting $x=0$ and using $2^{0}=1$ gives the crossing point on the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intercept",
          "workingLatex": "(0,\\,4)",
          "explanation": "The curve meets the $y$-axis at $(0,\\,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by mapping the base point",
          "workingLatex": "(0,\\,1)\\to(0,\\,4)",
          "explanation": "The intercept $(0,\\,1)$ of $y=2^{x}$ lifts by $3$ to $(0,\\,4)$, which agrees with our calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the other end",
          "workingLatex": "x\\to+\\infty:\\ y\\to+\\infty",
          "explanation": "For large positive $x$ the exponential grows without bound, so the curve rises steeply.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation by $\\binom{0}{3}$ ($3$ up); horizontal asymptote $y=3$; $y$-intercept $(0,\\,4)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "exponential",
      "translation",
      "asymptote"
    ],
    "questionText": "Describe the single transformation that maps $y=2^{x}$ onto $y=2^{x-1}$. State the equation of the horizontal asymptote and the coordinates of the $y$-intercept of $y=2^{x-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "y=2^{x-1}=f(x-1),\\ \\ f(x)=2^{x}",
          "explanation": "The change $x-1$ happens to the input, which is the $f(x-a)$ pattern acting horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the transformation",
          "workingLatex": "f(x-a):\\ \\text{translation}\\ \\binom{1}{0}",
          "explanation": "A change inside the function does the opposite: subtracting $1$ shifts the curve $1$ unit to the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain the shift",
          "workingLatex": "x\\to x-1\\ \\Rightarrow\\ \\text{right }1",
          "explanation": "The graph must reach each height one unit later along the $x$-axis, so it slides to the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the asymptote",
          "workingLatex": "\\text{asymptote }y=0\\ \\text{unchanged}",
          "explanation": "Sliding horizontally leaves a horizontal asymptote where it is; $2^{x-1}\\to 0$ as $x\\to-\\infty$, so it stays $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-intercept",
          "workingLatex": "x=0:\\ 2^{0-1}=2^{-1}=\\tfrac{1}{2}",
          "explanation": "Substituting $x=0$ gives $2^{-1}$, and a negative index means one over the positive power.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the intercept",
          "workingLatex": "\\left(0,\\,\\tfrac{1}{2}\\right)",
          "explanation": "So the curve meets the $y$-axis at $\\left(0,\\,\\tfrac{1}{2}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Consistency via index laws",
          "workingLatex": "2^{x-1}=\\tfrac{1}{2}\\cdot 2^{x}",
          "explanation": "The same curve can be read as a vertical compression of factor $\\tfrac{1}{2}$, which also gives a $y$-intercept of $\\tfrac{1}{2}$ — a reassuring check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check by mapping the base point",
          "workingLatex": "(0,\\,1)\\to(1,\\,1)",
          "explanation": "The point $(0,\\,1)$ on $y=2^{x}$ moves right to $(1,\\,1)$, consistent with a shift of $1$ to the right.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the end behaviour",
          "workingLatex": "x\\to-\\infty:\\ y\\to 0;\\ \\ x\\to+\\infty:\\ y\\to+\\infty",
          "explanation": "The curve keeps the growth shape of $2^{x}$, decaying to the asymptote on the left and rising on the right.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation by $\\binom{1}{0}$ ($1$ to the right); horizontal asymptote $y=0$; $y$-intercept $\\left(0,\\,\\tfrac{1}{2}\\right)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "exponential",
      "reflection",
      "asymptote"
    ],
    "questionText": "Describe the single transformation that maps $y=2^{x}$ onto $y=2^{-x}$. State the equation of the horizontal asymptote and the coordinates of the $y$-intercept, and describe the behaviour of $y=2^{-x}$ as $x\\to\\pm\\infty$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the form",
          "workingLatex": "y=2^{-x}=f(-x),\\ \\ f(x)=2^{x}",
          "explanation": "The input $x$ has been replaced by $-x$, which is the $f(-x)$ pattern.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the transformation",
          "workingLatex": "f(-x):\\ \\text{reflection in the }y\\text{-axis}",
          "explanation": "Swapping $x$ for $-x$ flips the graph left-to-right, mirroring it in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the y-intercept",
          "workingLatex": "x=0:\\ 2^{0}=1\\ \\Rightarrow\\ (0,\\,1)",
          "explanation": "Points on the $y$-axis lie on the mirror line, so the intercept $(0,\\,1)$ does not move.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the asymptote",
          "workingLatex": "\\text{asymptote }y=0\\ \\text{unchanged}",
          "explanation": "The line $y=0$ is itself symmetric about the $y$-axis, so reflecting the curve leaves the asymptote at $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite with index laws",
          "workingLatex": "2^{-x}=\\left(\\tfrac{1}{2}\\right)^{x}",
          "explanation": "A negative exponent flips the base, revealing a decreasing exponential — the mirror image of a growing one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a sample point",
          "workingLatex": "x=1:\\ 2^{-1}=\\tfrac{1}{2}\\ \\Rightarrow\\ \\left(1,\\,\\tfrac{1}{2}\\right)",
          "explanation": "Moving right now lowers the curve, confirming it falls as $x$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Behaviour as x→+∞",
          "workingLatex": "x\\to+\\infty:\\ 2^{-x}\\to 0",
          "explanation": "Large positive $x$ makes $-x$ large and negative, so the value decays toward the asymptote $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Behaviour as x→-∞",
          "workingLatex": "x\\to-\\infty:\\ 2^{-x}\\to+\\infty",
          "explanation": "Large negative $x$ makes $-x$ large and positive, so the value grows without bound.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise the shape",
          "workingLatex": "\\text{decreasing curve through }(0,\\,1)",
          "explanation": "The reflection turns the rising $2^{x}$ into a falling mirror image passing through $(0,\\,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reflection in the $y$-axis; horizontal asymptote $y=0$; $y$-intercept $(0,\\,1)$; as $x\\to+\\infty,\\ y\\to 0^{+}$ and as $x\\to-\\infty,\\ y\\to+\\infty$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "combined-transformations",
      "order-of-transformations"
    ],
    "questionText": "Describe fully a single sequence of geometrical transformations that maps the graph of $y=f(x)$ onto the graph of $y=3f(2x-4)-1$. Make the order of the transformations clear.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the inside and outside changes",
          "workingLatex": "\\text{inside }f:\\ 2x-4;\\quad \\text{outside }f:\\ \\times3,\\ -1",
          "explanation": "Changes made to the input (inside the bracket) act horizontally and behave in the opposite way to what the sign suggests; changes made to the output of $f$ (outside) act vertically and behave as expected. Sorting them this way keeps the two families of transformations from getting tangled.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the inside to reveal the horizontal moves",
          "workingLatex": "2x-4=2(x-2)",
          "explanation": "To read a horizontal stretch and translation correctly the bracket must look like $(x-h)$, so factor out the coefficient of $x$. Taking out the $2$ leaves $(x-2)$, which now clearly separates the stretch from the shift.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the factor 2: a horizontal stretch",
          "workingLatex": "f(2x)\\ \\Rightarrow\\ \\text{stretch }\\parallel x\\text{-axis, s.f. }\\tfrac{1}{2}",
          "explanation": "Replacing $x$ by $2x$ squeezes the graph towards the $y$-axis. The scale factor is the reciprocal of $2$, namely $\\tfrac12$, because every $x$-coordinate is halved.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the (x-2): a horizontal translation",
          "workingLatex": "f\\big(2(x-2)\\big)\\ \\Rightarrow\\ \\text{translate }\\binom{2}{0}",
          "explanation": "The $(x-2)$ shifts the already-stretched graph to the right. Inside the bracket the effect is opposite to the sign, so $-2$ means a move of $+2$ in the $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Fix the order of the two horizontal steps",
          "workingLatex": "\\text{stretch s.f. }\\tfrac12\\ \\text{then}\\ \\text{translate }\\binom{2}{0}",
          "explanation": "Because we factored as $2(x-2)$, the reciprocal scaling is applied to $x$ first and the $-2$ acts on the new stretched variable afterwards. So this horizontal translation of $2$ must come after the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the alternative horizontal order (the distance changes)",
          "workingLatex": "y=f(2x-4):\\ \\text{translate }\\binom{4}{0}\\ \\text{then stretch s.f. }\\tfrac12",
          "explanation": "If instead you translate first, the unfactored $-4$ applies, so you move $4$ to the right and then stretch. Either order is valid, but the distance ($2$ or $4$) depends on which step comes first, which is exactly why order matters here.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the ×3: a vertical stretch",
          "workingLatex": "3f(\\ldots)\\ \\Rightarrow\\ \\text{stretch }\\parallel y\\text{-axis, s.f. }3",
          "explanation": "Multiplying the whole output by $3$ triples every $y$-coordinate, a vertical stretch of scale factor $3$. Points on the $x$-axis (where $y=0$) do not move, since $3\\times0=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the -1: a vertical translation",
          "workingLatex": "3f(\\ldots)-1\\ \\Rightarrow\\ \\text{translate }\\binom{0}{-1}",
          "explanation": "Subtracting $1$ from the output lowers every point by $1$ unit, a straightforward translation of $1$ downwards.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Fix the order of the two vertical steps",
          "workingLatex": "\\text{stretch s.f. }3\\ \\text{then translate }\\binom{0}{-1}",
          "explanation": "The expression multiplies by $3$ first and subtracts $1$ afterwards, following the order of operations on the output. So the vertical stretch must precede the downward translation; the other way round gives $3(f-1)=3f-3$, which is wrong.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Track a general point to confirm everything",
          "workingLatex": "(p,\\,q)\\ \\text{on }y=f(x),\\ \\text{so}\\ q=f(p)",
          "explanation": "To be certain of both the directions and the order, follow one general point through the final equation and see where it lands.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the new x-coordinate",
          "workingLatex": "2x-4=p\\ \\Rightarrow\\ x=\\tfrac{p}{2}+2",
          "explanation": "The new $x$ is where the input equals $p$. Solving gives $\\tfrac{p}{2}+2$: halving (the stretch) then adding $2$ (the translation), exactly reproducing the stated horizontal order.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the new y-coordinate",
          "workingLatex": "y=3q-1",
          "explanation": "The output is multiplied by $3$ then reduced by $1$, matching the vertical stretch-then-translate order.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the image of the point",
          "workingLatex": "(p,\\,q)\\to\\left(\\tfrac{p}{2}+2,\\ 3q-1\\right)",
          "explanation": "This single formula confirms that all four transformations act consistently, with the horizontal and vertical effects independent of one another.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Assemble the full ordered sequence",
          "workingLatex": "\\text{s.f. }\\tfrac12\\,(x)\\ \\to\\ \\binom{2}{0}\\ \\to\\ \\text{s.f. }3\\,(y)\\ \\to\\ \\binom{0}{-1}",
          "explanation": "Because the horizontal and vertical families are independent, provided each family keeps its own internal order the four transformations can be listed together as a single valid sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "A horizontal stretch parallel to the $x$-axis of scale factor $\\tfrac12$, then a translation by $\\binom{2}{0}$ (right $2$); together with a vertical stretch parallel to the $y$-axis of scale factor $3$, then a translation by $\\binom{0}{-1}$ (down $1$). Equivalently the horizontal pair may be replaced by 'translate $\\binom{4}{0}$ then stretch s.f. $\\tfrac12$'. A general point maps $(p,\\,q)\\to\\left(\\tfrac{p}{2}+2,\\ 3q-1\\right)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "work-backwards",
      "order-of-transformations"
    ],
    "questionText": "The curve $y=x^{2}$ is transformed to the curve $y=2(x+3)^{2}-5$. Describe fully, in the correct order, the sequence of geometrical transformations that achieves this, and state the coordinates of the image of the vertex $(0,\\,0)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare the two equations",
          "workingLatex": "y=x^{2}\\ \\longrightarrow\\ y=2(x+3)^{2}-5",
          "explanation": "Read off each numerical change made to the base curve: a $+3$ inside the bracket, a $\\times2$ outside, and a $-5$ outside. Each will correspond to one transformation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify inside versus outside",
          "workingLatex": "\\text{inside: }(x+3);\\quad \\text{outside: }\\times2,\\ -5",
          "explanation": "The $(x+3)$ sits with $x$, so it acts horizontally; the $\\times2$ and $-5$ act on the whole output, so they act vertically. Separating them keeps the reasoning clean.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret (x+3): a horizontal translation",
          "workingLatex": "(x+3)\\ \\Rightarrow\\ \\text{translate }\\binom{-3}{0}",
          "explanation": "Inside the bracket the effect is opposite to the sign, so $+3$ shifts the curve $3$ units to the LEFT, not right. This is the classic trap; the $+$ moves the graph the 'wrong' way.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret ×2: a vertical stretch",
          "workingLatex": "2(\\ldots)\\ \\Rightarrow\\ \\text{stretch }\\parallel y\\text{-axis, s.f. }2",
          "explanation": "Multiplying the output by $2$ doubles every height, a vertical stretch of scale factor $2$. The parabola becomes twice as steep.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret -5: a vertical translation",
          "workingLatex": "-5\\ \\Rightarrow\\ \\text{translate }\\binom{0}{-5}",
          "explanation": "Subtracting $5$ from the output lowers the whole curve by $5$ units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide the order of the vertical pair",
          "workingLatex": "2x^{2}-5\\ \\ne\\ 2(x^{2}-5)",
          "explanation": "The equation multiplies by $2$ first and subtracts $5$ afterwards, so the stretch must come before the downward translation. Reversing them gives $2(x^2-5)=2x^2-10$, a different curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the horizontal step is independent",
          "workingLatex": "\\text{horizontal }\\binom{-3}{0}\\ \\text{commutes with the vertical steps}",
          "explanation": "A left or right shift does not interfere with a vertical stretch or a vertical shift, so the horizontal translation may be placed anywhere in the sequence.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the full ordered sequence",
          "workingLatex": "\\binom{-3}{0}\\ \\to\\ \\text{s.f. }2\\,(y)\\ \\to\\ \\binom{0}{-5}",
          "explanation": "A convenient valid order is: translate left $3$, then vertically stretch by scale factor $2$, then translate down $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Track the vertex horizontally",
          "workingLatex": "x:\\ 0\\ \\to\\ 0-3=-3",
          "explanation": "The vertex's $x$-coordinate shifts left by $3$, moving from $0$ to $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Track the vertex vertically",
          "workingLatex": "y:\\ 0\\ \\xrightarrow{\\times2}\\ 0\\ \\xrightarrow{-5}\\ -5",
          "explanation": "Doubling $0$ leaves it at $0$, and then subtracting $5$ takes it to $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the image of the vertex",
          "workingLatex": "(0,\\,0)\\to(-3,\\,-5)",
          "explanation": "So the minimum point of the new parabola sits at $(-3,\\,-5)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the vertex by substitution",
          "workingLatex": "2(-3+3)^{2}-5=2(0)-5=-5",
          "explanation": "Putting $x=-3$ into the new equation gives $y=-5$, confirming the turning point is where we said.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the y-intercept as a further test",
          "workingLatex": "x=0:\\ 2(0+3)^{2}-5=2(9)-5=13",
          "explanation": "The new curve crosses the $y$-axis at $(0,\\,13)$, consistent with a parabola whose vertex is at $(-3,\\,-5)$ and which has been stretched by factor $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation by $\\binom{-3}{0}$ (left $3$), then a vertical stretch parallel to the $y$-axis of scale factor $2$, then a translation by $\\binom{0}{-5}$ (down $5$). The vertex maps $(0,\\,0)\\to(-3,\\,-5)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "order-of-transformations",
      "point-tracking"
    ],
    "questionText": "A student is asked to describe the transformation that maps $y=f(x)$ to $y=f(2x-6)$. The student writes: 'a horizontal stretch parallel to the $x$-axis of scale factor $\\tfrac12$, followed by a translation of $6$ units to the right.' By tracking the point $(2,\\,5)$ on $y=f(x)$, explain why the student is wrong, and give a fully correct description.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the given point",
          "workingLatex": "(2,\\,5)\\ \\text{on }y=f(x)\\ \\Rightarrow\\ f(2)=5",
          "explanation": "A point $(2,\\,5)$ on $y=f(x)$ simply means the function value at $2$ is $5$. Following one specific point is powerful because it exposes both the direction and the size of each move.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the true image under y=f(2x-6)",
          "workingLatex": "2x-6=2\\ \\Rightarrow\\ x=4",
          "explanation": "On the new curve the same output $5$ occurs where the input $2x-6$ equals $2$. Solving gives $x=4$, so the correct image is $(4,\\,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the true image",
          "workingLatex": "(2,\\,5)\\to(4,\\,5)",
          "explanation": "The $y$-coordinate is unchanged because nothing acts outside $f$; only the horizontal position moves.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Follow the student's recipe: stretch first",
          "workingLatex": "\\text{s.f. }\\tfrac12:\\ (2,\\,5)\\to(1,\\,5)",
          "explanation": "A horizontal stretch of scale factor $\\tfrac12$ halves the $x$-coordinate, sending $2$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "The student's second step: translate right 6",
          "workingLatex": "\\binom{6}{0}:\\ (1,\\,5)\\to(7,\\,5)",
          "explanation": "Adding $6$ to the $x$-coordinate takes $1$ to $7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the true image",
          "workingLatex": "7\\ \\ne\\ 4",
          "explanation": "The student's method lands the point at $x=7$, but the correct image is at $x=4$. The description is therefore wrong.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Diagnose the error by factoring",
          "workingLatex": "2x-6=2(x-3)",
          "explanation": "To read horizontal changes correctly you must factor out the coefficient of $x$. The factored bracket is $(x-3)$, not $(x-6)$, so the shift that pairs with 'stretch first' is $3$, not $6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Correct the recipe when the stretch is first",
          "workingLatex": "\\text{s.f. }\\tfrac12\\ \\text{then}\\ \\binom{3}{0}",
          "explanation": "After stretching, the $-3$ from the factored form means translate $3$ to the right. This keeps the student's chosen order but fixes the distance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the corrected recipe on the point",
          "workingLatex": "(2,\\,5)\\xrightarrow{\\text{s.f. }\\frac12}(1,\\,5)\\xrightarrow{\\binom{3}{0}}(4,\\,5)",
          "explanation": "Now the point reaches $x=4$, matching the true image, so the corrected version is right.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain why the 6 became a 3",
          "workingLatex": "\\text{a translation applied after a }\\times\\tfrac12\\text{ stretch is halved}",
          "explanation": "Once the stretch has been done, all horizontal distances are measured in halved units. A shift of $6$ measured before stretching becomes a shift of $3$ measured after it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Give the alternative correct order",
          "workingLatex": "\\binom{6}{0}\\ \\text{then}\\ \\text{s.f. }\\tfrac12",
          "explanation": "If you translate FIRST, the un-halved distance $6$ is correct, and stretching by $\\tfrac12$ afterwards completes the map. This is the order in which '$6$' genuinely belongs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the alternative order on the point",
          "workingLatex": "(2,\\,5)\\xrightarrow{\\binom{6}{0}}(8,\\,5)\\xrightarrow{\\text{s.f. }\\frac12}(4,\\,5)",
          "explanation": "Translating right $6$ and then halving gives $x=4$, again matching the true image.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the lesson about order",
          "workingLatex": "\\text{stretch then }\\binom{3}{0}\\ \\ \\text{OR}\\ \\ \\binom{6}{0}\\ \\text{then stretch}",
          "explanation": "The student mixed the two valid recipes: they used the '$6$' that belongs with translate-first but placed it after the stretch. The translation distance depends on the order, which is precisely the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The student's point lands at $x=7$, but the correct image of $(2,\\,5)$ is $(4,\\,5)$, so the description is wrong. Since $2x-6=2(x-3)$, a correct description is: a horizontal stretch parallel to the $x$-axis of scale factor $\\tfrac12$ followed by a translation of $3$ (not $6$) to the right; equivalently, translate $6$ right first and THEN stretch by scale factor $\\tfrac12$. The distance changes with the order because a translation applied after a $\\tfrac12$ stretch is measured in halved units."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "order-of-transformations",
      "point-tracking"
    ],
    "questionText": "A student claims that the curve $y=2f(x)+6$ is obtained from $y=f(x)$ by 'translating $6$ units up and then applying a vertical stretch of scale factor $2$.' By tracking the point $(1,\\,3)$, show that the student's order is wrong, and describe the correct sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the given point",
          "workingLatex": "(1,\\,3)\\ \\text{on }y=f(x)\\ \\Rightarrow\\ f(1)=3",
          "explanation": "The point $(1,\\,3)$ means the output of $f$ at $x=1$ is $3$. Here only the $y$-coordinate will change, because $2f(x)+6$ acts entirely outside $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the true image from the equation",
          "workingLatex": "y=2f(1)+6=2(3)+6=12",
          "explanation": "Substitute directly: the output $3$ is doubled and then increased by $6$, giving $12$. So the true image is $(1,\\,12)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Follow the student: translate up 6 first",
          "workingLatex": "\\binom{0}{6}:\\ (1,\\,3)\\to(1,\\,9)",
          "explanation": "Adding $6$ to the $y$-coordinate takes $3$ up to $9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "The student's second step: stretch ×2",
          "workingLatex": "\\text{s.f. }2:\\ (1,\\,9)\\to(1,\\,18)",
          "explanation": "A vertical stretch of scale factor $2$ doubles the $y$-coordinate, giving $18$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the true image",
          "workingLatex": "18\\ \\ne\\ 12",
          "explanation": "The student reaches $y=18$, but the equation gives $y=12$. The order is therefore wrong.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Show algebraically what the student built",
          "workingLatex": "2\\big(f(x)+6\\big)=2f(x)+12",
          "explanation": "Translating up $6$ and then doubling multiplies the $6$ as well, producing $+12$ instead of $+6$. That is a genuinely different curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Correct order: stretch first",
          "workingLatex": "\\text{s.f. }2:\\ (1,\\,3)\\to(1,\\,6)",
          "explanation": "Doubling the original output $3$ gives $6$, matching the '$2f(x)$' part before anything is added.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Then translate up 6",
          "workingLatex": "\\binom{0}{6}:\\ (1,\\,6)\\to(1,\\,12)",
          "explanation": "Now add $6$ to reach $12$, the correct image.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the corrected order",
          "workingLatex": "(1,\\,3)\\xrightarrow{\\text{s.f. }2}(1,\\,6)\\xrightarrow{\\binom{0}{6}}(1,\\,12)",
          "explanation": "Stretch-then-translate reproduces the true image exactly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain the general reason",
          "workingLatex": "2f(x)+6:\\ \\times2\\ \\text{acts on }f(x)\\ \\text{only}",
          "explanation": "The $+6$ is added after the multiplication, so the stretch must be applied while the $+6$ is still absent. Otherwise the $6$ itself gets stretched.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Tie it to order of operations",
          "workingLatex": "f(x)\\xrightarrow{\\times2}2f(x)\\xrightarrow{+6}2f(x)+6",
          "explanation": "Read the outside operations in the natural evaluation order: multiply, then add. The vertical transformations follow that same order.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check a second point to be sure",
          "workingLatex": "f(0)=-2:\\ \\text{true }2(-2)+6=2;\\ \\text{student }2(-2+6)=8",
          "explanation": "A second point again separates the two methods ($2$ versus $8$), confirming the difference is systematic rather than a one-off coincidence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State when order does not matter",
          "workingLatex": "\\text{two vertical shifts, or two vertical stretches, commute}",
          "explanation": "The order only matters when a stretch and a translation of the same type are combined. Two translations, or two stretches, could be carried out in either order without changing the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "For $(1,\\,3)$ the student's order gives $(1,\\,18)$, but the equation gives $(1,\\,12)$, so it is wrong. The correct sequence is: a vertical stretch parallel to the $y$-axis of scale factor $2$ FIRST, then a translation of $6$ units up, i.e. $\\binom{0}{6}$. Translating first makes the $+6$ get doubled to $+12$, which changes the curve, so the order cannot be swapped."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "graph-transformations",
      "combined-transformations",
      "order-of-transformations"
    ],
    "questionText": "The graph of $y=f(x)$ is first translated by the vector $\\binom{6}{0}$ and then stretched parallel to the $x$-axis by scale factor $\\tfrac12$. (a) Find the equation of the resulting graph in terms of $f$. (b) Show that the same graph is produced by carrying out a horizontal stretch of scale factor $\\tfrac12$ first, and state the translation that must then follow.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base function",
          "workingLatex": "y=f(x)",
          "explanation": "Begin with the original curve and apply the two operations to the input in the stated order, one at a time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the translation right 6",
          "workingLatex": "f(x)\\to f(x-6)",
          "explanation": "A translation of $+6$ in the $x$-direction is achieved by replacing $x$ with $x-6$ inside the function, because the graph reaches each of its old values $6$ units later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the horizontal stretch factor 1/2",
          "workingLatex": "f(x-6)\\to f(2x-6)",
          "explanation": "A horizontal stretch of scale factor $\\tfrac12$ replaces $x$ by $2x$. Substituting $2x$ for $x$ in $f(x-6)$ gives $f(2x-6)$; the substitution acts on the whole current variable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the answer to (a)",
          "workingLatex": "y=f(2x-6)",
          "explanation": "This is the equation of the graph after translate-then-stretch.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sanity check with one input",
          "workingLatex": "\\text{input }0:\\ 2x-6=0\\Rightarrow x=3;\\ \\ (0)\\to(6)\\to(3)",
          "explanation": "Track the $x$ where the input is $0$. Directly, $2x-6=0$ gives $x=3$; through the two steps, $0$ moves to $6$ (shift) then to $3$ (stretch). Both routes reach $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Begin (b): factor the result",
          "workingLatex": "f(2x-6)=f\\big(2(x-3)\\big)",
          "explanation": "To describe the same curve as stretch-first, factor the $2$ out of the input. The bracket becomes $(x-3)$, which reveals the shift that goes with stretching first.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read the stretch first",
          "workingLatex": "f(2x)\\ \\Rightarrow\\ \\text{s.f. }\\tfrac12",
          "explanation": "The factor $2$ gives a horizontal stretch of scale factor $\\tfrac12$, applied to the original curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read the following translation",
          "workingLatex": "f\\big(2(x-3)\\big)\\ \\Rightarrow\\ \\binom{3}{0}",
          "explanation": "The $-3$ in the factored form means translate $3$ to the right, applied after the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer to (b)",
          "workingLatex": "\\text{s.f. }\\tfrac12\\ \\text{then}\\ \\binom{3}{0}",
          "explanation": "Stretch by scale factor $\\tfrac12$ first, then translate right $3$; this yields the same equation $f(2x-6)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the equivalence algebraically",
          "workingLatex": "\\text{s.f. }\\tfrac12:\\ f(2x);\\ \\ \\binom{3}{0}:\\ f\\big(2(x-3)\\big)=f(2x-6)",
          "explanation": "Carrying out these two steps rebuilds $f(2x-6)$, matching part (a) exactly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Explain why the 6 became a 3",
          "workingLatex": "6\\ \\xrightarrow{\\text{halved by the stretch}}\\ 3",
          "explanation": "When the translation comes after the stretch, its distance is measured in the stretched (halved) $x$-units, so the $6$ becomes $3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Independent second-point check of (b)",
          "workingLatex": "\\text{input }4:\\ 2x-6=4\\Rightarrow x=5;\\ \\ (4)\\xrightarrow{\\text{s.f. }\\frac12}(2)\\xrightarrow{\\binom{3}{0}}(5)",
          "explanation": "A second point again agrees ($x=5$ both ways), confirming that the sequence in (b) produces the same curve as (a).",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Contrast with the wrong order",
          "workingLatex": "\\text{s.f. }\\tfrac12\\ \\text{then}\\ \\binom{6}{0}\\Rightarrow f(2x-12)\\ne f(2x-6)",
          "explanation": "Keeping the '$6$' after the stretch would give $f(2x-12)$, a different curve. This shows the translation amount must be adjusted to $3$ to match the order.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $y=f(2x-6)$. (b) Since $f(2x-6)=f\\big(2(x-3)\\big)$, the same graph is obtained by a horizontal stretch parallel to the $x$-axis of scale factor $\\tfrac12$ followed by a translation of $\\binom{3}{0}$ (right $3$). The distance changes from $6$ to $3$ because a translation applied after the $\\tfrac12$ stretch is measured in halved units."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "combined-transformations",
      "reflection"
    ],
    "questionText": "Describe fully a single sequence of geometrical transformations that maps $y=f(x)$ onto $y=-2f(x+1)+3$, being careful with the order, and find the image of the point $(3,\\,-4)$ which lies on $y=f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split inside and outside",
          "workingLatex": "\\text{inside: }(x+1);\\quad \\text{outside: }\\times(-2),\\ +3",
          "explanation": "The $(x+1)$ acts horizontally; the $\\times(-2)$ and $+3$ act vertically on the output. Sorting them keeps the horizontal and vertical reasoning separate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret (x+1)",
          "workingLatex": "(x+1)\\ \\Rightarrow\\ \\text{translate }\\binom{-1}{0}",
          "explanation": "Inside the bracket the effect is opposite to the sign, so $+1$ shifts the curve $1$ unit to the LEFT.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the size of -2",
          "workingLatex": "|-2|=2\\ \\Rightarrow\\ \\text{stretch }\\parallel y\\text{-axis, s.f. }2",
          "explanation": "The magnitude $2$ doubles every height, a vertical stretch of scale factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the sign of -2",
          "workingLatex": "\\text{minus sign}\\ \\Rightarrow\\ \\text{reflection in the }x\\text{-axis}",
          "explanation": "The negative sign flips every point to the opposite side of the $x$-axis. Combined with the $\\times2$, this is a single vertical stretch of scale factor $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret +3",
          "workingLatex": "+3\\ \\Rightarrow\\ \\text{translate }\\binom{0}{3}",
          "explanation": "Adding $3$ to the output raises the whole curve $3$ units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Order the vertical steps",
          "workingLatex": "-2f(x)+3:\\ \\times(-2)\\ \\text{then}\\ +3",
          "explanation": "The output is multiplied by $-2$ first and $3$ added afterwards, so the reflection-stretch must precede the upward translation. Doing $+3$ first would get multiplied by $-2$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the horizontal step is independent",
          "workingLatex": "\\binom{-1}{0}\\ \\text{may be placed anywhere}",
          "explanation": "The left shift does not interfere with the vertical operations, so its position in the list is free.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the full ordered sequence",
          "workingLatex": "\\binom{-1}{0}\\ \\to\\ \\text{s.f. }-2\\,(y)\\ \\to\\ \\binom{0}{3}",
          "explanation": "Translate left $1$, then vertically stretch by factor $2$ with a reflection in the $x$-axis, then translate up $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Map the point horizontally",
          "workingLatex": "x:\\ 3\\to3-1=2",
          "explanation": "The left shift of $1$ reduces the $x$-coordinate from $3$ to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Map the point vertically",
          "workingLatex": "y=-2(-4)+3",
          "explanation": "Since $(3,\\,-4)$ lies on $y=f(x)$, we have $f(3)=-4$. Substitute this output into the outside operations: multiply by $-2$, then add $3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the new y",
          "workingLatex": "=8+3=11",
          "explanation": "$-2\\times(-4)=8$, and then $+3$ gives $11$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the image of the point",
          "workingLatex": "(3,\\,-4)\\to(2,\\,11)",
          "explanation": "Combining the horizontal and vertical results gives the final image.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the vertical order using the point",
          "workingLatex": "\\times(-2)\\text{ then }+3:\\ -4\\to8\\to11;\\quad +3\\text{ then }\\times(-2):\\ -4\\to-1\\to2",
          "explanation": "Doing the reflection-stretch before the $+3$ gives $11$ (correct); the reverse order gives $2$. This confirms the vertical order genuinely matters.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translate by $\\binom{-1}{0}$ (left $1$), then a vertical stretch parallel to the $y$-axis of scale factor $2$ combined with a reflection in the $x$-axis (i.e. stretch factor $-2$), then translate by $\\binom{0}{3}$ (up $3$). The point $(3,\\,-4)$ maps to $(2,\\,11)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "reciprocal-graphs",
      "asymptotes"
    ],
    "questionText": "The curve $y=\\dfrac{1}{x}$ is transformed into the curve $y=\\dfrac{3}{2x-4}$. Taking $f(x)=\\dfrac{1}{x}$, describe fully the sequence of transformations (in the correct order) that achieves this, and hence state the equations of the two asymptotes of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the target in terms of f",
          "workingLatex": "\\frac{3}{2x-4}=3\\cdot\\frac{1}{2x-4}=3f(2x-4)",
          "explanation": "Recognise that $\\tfrac{1}{2x-4}$ is $f$ evaluated at $2x-4$, and the leading $3$ multiplies the whole output. So the new curve is $3f(2x-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split inside and outside",
          "workingLatex": "\\text{inside: }2x-4;\\quad \\text{outside: }\\times3",
          "explanation": "The $2x-4$ changes the input (horizontal effects); the $\\times3$ scales the output (a vertical effect).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factor the inside",
          "workingLatex": "2x-4=2(x-2)",
          "explanation": "Factor out the coefficient of $x$ so the horizontal stretch and translation can be read correctly; the bracket becomes $(x-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the factor 2",
          "workingLatex": "\\text{stretch }\\parallel x\\text{-axis, s.f. }\\tfrac12",
          "explanation": "Replacing $x$ by $2x$ squashes the graph towards the $y$-axis by scale factor $\\tfrac12$, the reciprocal of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret (x-2)",
          "workingLatex": "\\binom{2}{0}",
          "explanation": "The $-2$ in the factored bracket shifts the curve $2$ to the right, applied after the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the ×3",
          "workingLatex": "\\text{stretch }\\parallel y\\text{-axis, s.f. }3",
          "explanation": "Multiplying the output by $3$ triples every height, a vertical stretch of scale factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full ordered sequence",
          "workingLatex": "\\text{s.f. }\\tfrac12\\,(x)\\ \\to\\ \\binom{2}{0}\\ \\to\\ \\text{s.f. }3\\,(y)",
          "explanation": "Stretch horizontally by $\\tfrac12$, translate right $2$, then stretch vertically by $3$. There is no vertical translation here.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the alternative horizontal order",
          "workingLatex": "\\binom{4}{0}\\ \\text{then s.f. }\\tfrac12",
          "explanation": "Equivalently, translate right $4$ first and then stretch. The unfactored $-4$ gives distance $4$ when the shift precedes the stretch, again showing the amount depends on the order.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the base asymptotes",
          "workingLatex": "y=\\tfrac1x:\\ x=0,\\ y=0",
          "explanation": "The reciprocal curve has a vertical asymptote at the $y$-axis and a horizontal asymptote at the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Move the vertical asymptote under the stretch",
          "workingLatex": "x=0\\ \\xrightarrow{\\text{s.f. }\\frac12}\\ x=0",
          "explanation": "Halving all $x$-values leaves the line $x=0$ fixed, since $0$ divided by anything is still $0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Move the vertical asymptote under the translation",
          "workingLatex": "x=0\\ \\xrightarrow{\\binom{2}{0}}\\ x=2",
          "explanation": "The right shift of $2$ moves the vertical asymptote to $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Move the horizontal asymptote",
          "workingLatex": "y=0\\ \\xrightarrow{\\text{s.f. }3}\\ y=0",
          "explanation": "Tripling all $y$-values leaves the line $y=0$ unchanged, and there is no vertical translation, so it stays at $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm from the equation directly",
          "workingLatex": "x\\to\\infty\\Rightarrow y\\to0;\\quad x\\to2\\Rightarrow 2x-4\\to0",
          "explanation": "As $x$ grows the fraction tends to $0$ (asymptote $y=0$); as $x\\to2$ the denominator $2x-4\\to0$ so the curve shoots off (asymptote $x=2$), agreeing with the transformed features.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{3}{2x-4}=3f(2x-4)$: a horizontal stretch parallel to the $x$-axis of scale factor $\\tfrac12$, then a translation of $\\binom{2}{0}$ (right $2$), then a vertical stretch parallel to the $y$-axis of scale factor $3$. The new asymptotes are $x=2$ and $y=0$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "completing-the-square",
      "work-backwards"
    ],
    "questionText": "The curve $C$ has equation $y=3x^{2}-12x+5$. By first completing the square, describe $C$ as a sequence of transformations of the graph of $y=x^{2}$ (stating the order), and hence write down the coordinates of the minimum point of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factor the leading coefficient from the first two terms",
          "workingLatex": "3x^{2}-12x+5=3(x^{2}-4x)+5",
          "explanation": "Completing the square needs a unit coefficient on $x^{2}$ inside a bracket, so take the $3$ out of the $x^{2}$ and $x$ terms only, leaving the constant untouched for now.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square inside the bracket",
          "workingLatex": "x^{2}-4x=(x-2)^{2}-4",
          "explanation": "Halve the $-4$ to get $-2$, square the bracket, then subtract $2^{2}=4$ to cancel the extra constant the square introduces.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute back",
          "workingLatex": "3\\big((x-2)^{2}-4\\big)+5",
          "explanation": "Replace $x^{2}-4x$ by its completed-square form inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the 3 and combine constants",
          "workingLatex": "=3(x-2)^{2}-12+5=3(x-2)^{2}-7",
          "explanation": "Multiply the $-4$ by $3$ to get $-12$, then combine with $+5$ to give $-7$. This is the transformation-ready form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the changes relative to x²",
          "workingLatex": "\\text{inside: }(x-2);\\quad \\text{outside: }\\times3,\\ -7",
          "explanation": "Compared with $y=x^{2}$ there is an $(x-2)$ inside (horizontal) and a $\\times3$ then $-7$ outside (vertical).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret (x-2)",
          "workingLatex": "\\binom{2}{0}",
          "explanation": "Inside the bracket the effect is opposite to the sign, so $-2$ shifts the parabola $2$ units to the RIGHT.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret ×3",
          "workingLatex": "\\text{stretch }\\parallel y\\text{-axis, s.f. }3",
          "explanation": "Multiplying the output by $3$ makes the parabola three times as steep, a vertical stretch of scale factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret -7",
          "workingLatex": "\\binom{0}{-7}",
          "explanation": "Subtracting $7$ lowers the whole curve by $7$ units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Order the vertical pair",
          "workingLatex": "3x^{2}-7\\ \\ne\\ 3(x^{2}-7)",
          "explanation": "The $\\times3$ is applied before the $-7$, so the stretch must come before the downward translation; reversing them would give $3x^{2}-21$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full ordered sequence",
          "workingLatex": "\\binom{2}{0}\\ \\to\\ \\text{s.f. }3\\,(y)\\ \\to\\ \\binom{0}{-7}",
          "explanation": "Translate right $2$, then vertically stretch by factor $3$, then translate down $7$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Locate the minimum via the vertex of x²",
          "workingLatex": "(0,\\,0)\\ \\text{is the minimum of }y=x^{2}",
          "explanation": "The base parabola has its lowest point at the origin; track that point through the transformations to find the new minimum.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Track the vertex",
          "workingLatex": "x:\\ 0\\to2,\\qquad y:\\ 0\\xrightarrow{\\times3}0\\xrightarrow{-7}-7",
          "explanation": "The right shift moves $x$ to $2$; the vertical stretch keeps $0$ at $0$, then $-7$ lowers it to $-7$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State and verify the minimum",
          "workingLatex": "\\text{min}=(2,\\,-7);\\quad 3(2)^{2}-12(2)+5=12-24+5=-7",
          "explanation": "Substituting $x=2$ into the original equation gives $y=-7$, confirming the minimum point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=3(x-2)^{2}-7$: translate by $\\binom{2}{0}$ (right $2$), then a vertical stretch parallel to the $y$-axis of scale factor $3$, then translate by $\\binom{0}{-7}$ (down $7$). The minimum point of $C$ is $(2,\\,-7)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "order-of-transformations",
      "reflection"
    ],
    "questionText": "Two students describe the transformation mapping $y=f(x)$ to $y=f(4-x)$. Student A says 'reflect in the $y$-axis, then translate $4$ to the right.' Student B says 'translate $4$ to the left, then reflect in the $y$-axis.' Using the image of a general point $(p,\\,q)$, show that BOTH are correct, and explain why the direction of the translation must change when the order is swapped.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the target to expose its structure",
          "workingLatex": "f(4-x)=f\\big(-(x-4)\\big)",
          "explanation": "Factor $-1$ from the input so both the reflection (the minus sign on $x$) and the translation (the $-4$) are visible at once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the true image directly",
          "workingLatex": "4-x=p\\ \\Rightarrow\\ x=4-p",
          "explanation": "A point $(p,\\,q)$ has $q=f(p)$. On the new curve the same output occurs where the input $4-x$ equals $p$, giving $x=4-p$. So the true image is $(4-p,\\,q)$; the $y$-coordinate is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Follow Student A: reflect in the y-axis",
          "workingLatex": "(p,\\,q)\\ \\xrightarrow{\\ f(-x)\\ }\\ (-p,\\,q)",
          "explanation": "Reflecting in the $y$-axis negates the $x$-coordinate, sending $p$ to $-p$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Student A: translate right 4",
          "workingLatex": "(-p,\\,q)\\ \\xrightarrow{\\binom{4}{0}}\\ (4-p,\\,q)",
          "explanation": "Adding $4$ to $-p$ gives $4-p$, exactly the true image.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude Student A is correct",
          "workingLatex": "(p,\\,q)\\to(4-p,\\,q)\\ \\checkmark",
          "explanation": "Student A's two steps reproduce the correct image, so this description is valid.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Follow Student B: translate left 4",
          "workingLatex": "(p,\\,q)\\ \\xrightarrow{\\binom{-4}{0}}\\ (p-4,\\,q)",
          "explanation": "Subtracting $4$ from the $x$-coordinate shifts the point left first.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Student B: reflect in the y-axis",
          "workingLatex": "(p-4,\\,q)\\ \\xrightarrow{\\ f(-x)\\ }\\ \\big(-(p-4),\\,q\\big)=(4-p,\\,q)",
          "explanation": "Negating $p-4$ gives $4-p$, again the true image.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude Student B is correct",
          "workingLatex": "(p,\\,q)\\to(4-p,\\,q)\\ \\checkmark",
          "explanation": "Student B also lands on the correct image, so this description is valid too.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm A at the equation level",
          "workingLatex": "f(x)\\xrightarrow{\\text{reflect}}f(-x)\\xrightarrow{\\binom{4}{0}}f\\big(-(x-4)\\big)=f(4-x)",
          "explanation": "After reflecting, replacing $x$ by $x-4$ (a shift right) produces exactly $f(4-x)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm B at the equation level",
          "workingLatex": "f(x)\\xrightarrow{\\binom{-4}{0}}f(x+4)\\xrightarrow{\\text{reflect}}f(-x+4)=f(4-x)",
          "explanation": "Shifting LEFT first gives $f(x+4)$; reflecting then turns $x$ into $-x$, again giving $f(4-x)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Pin down why the sign changes",
          "workingLatex": "\\text{reflection sends }x\\to-x",
          "explanation": "The reflection reverses the $x$-axis, so a shift that is 'to the right' before the reflection becomes 'to the left' after it, and vice versa. That is exactly why A uses right $4$ and B uses left $4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Show the wrong combination",
          "workingLatex": "\\text{reflect then }\\binom{-4}{0}:\\ f(-x)\\to f\\big(-(x+4)\\big)=f(-x-4)",
          "explanation": "If you kept 'left $4$' after reflecting, you would get $f(-x-4)$, not $f(4-x)$ — a genuinely different curve.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the wrong image",
          "workingLatex": "(p,\\,q)\\xrightarrow{\\text{reflect}}(-p,\\,q)\\xrightarrow{\\binom{-4}{0}}(-p-4,\\,q)\\ne(4-p,\\,q)",
          "explanation": "This lands at $-p-4$ instead of $4-p$, confirming that reusing the same translation direction after swapping the order gives the wrong result.",
          "diagram": null
        }
      ],
      "finalAnswer": "Both are correct: A gives $(p,\\,q)\\to(-p,\\,q)\\to(4-p,\\,q)$ and B gives $(p,\\,q)\\to(p-4,\\,q)\\to(4-p,\\,q)$, while $y=f(4-x)$ genuinely sends $(p,\\,q)\\to(4-p,\\,q)$. The translation direction must flip (right $4$ if the reflection is first, left $4$ if it is second) because a reflection in the $y$-axis reverses the $x$-axis, turning a rightward shift into a leftward one. Keeping the same direction after swapping the order gives $f(-x-4)\\ne f(4-x)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "combined-transformations",
      "turning-points"
    ],
    "questionText": "The curve $y=f(x)$ has a maximum point at $(4,\\,6)$. The curve is transformed to $y=\\tfrac12 f(2x-2)+1$. Describe fully the sequence of transformations (with the correct order), and hence find the coordinates of the maximum point of the transformed curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split inside and outside",
          "workingLatex": "\\text{inside: }2x-2;\\quad \\text{outside: }\\times\\tfrac12,\\ +1",
          "explanation": "The $2x-2$ changes the input (horizontal effects); the $\\times\\tfrac12$ and $+1$ change the output (vertical effects).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the inside",
          "workingLatex": "2x-2=2(x-1)",
          "explanation": "Factor out the coefficient of $x$ so the bracket is $(x-1)$, letting us read the horizontal stretch and translation correctly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the factor 2",
          "workingLatex": "\\text{stretch }\\parallel x\\text{-axis, s.f. }\\tfrac12",
          "explanation": "Replacing $x$ by $2x$ halves all $x$-coordinates, a horizontal stretch of scale factor $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret (x-1)",
          "workingLatex": "\\binom{1}{0}",
          "explanation": "The $-1$ in the factored form shifts the curve $1$ to the right, applied after the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret ×1/2",
          "workingLatex": "\\text{stretch }\\parallel y\\text{-axis, s.f. }\\tfrac12",
          "explanation": "Multiplying the output by $\\tfrac12$ halves every height, a vertical stretch (a compression) of scale factor $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret +1",
          "workingLatex": "\\binom{0}{1}",
          "explanation": "Adding $1$ to the output raises the whole curve by $1$ unit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Order the vertical pair",
          "workingLatex": "\\tfrac12 f(x)+1:\\ \\times\\tfrac12\\ \\text{then}\\ +1",
          "explanation": "The output is halved first and $1$ added afterwards, so the vertical stretch must precede the upward translation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the full ordered sequence",
          "workingLatex": "\\text{s.f. }\\tfrac12\\,(x)\\to\\binom{1}{0}\\to\\text{s.f. }\\tfrac12\\,(y)\\to\\binom{0}{1}",
          "explanation": "Stretch horizontally by $\\tfrac12$, translate right $1$, stretch vertically by $\\tfrac12$, then translate up $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Track the maximum horizontally",
          "workingLatex": "2x-2=4\\ \\Rightarrow\\ x=3",
          "explanation": "The maximum keeps the same output, occurring where the input $2x-2$ equals the old $x$-value $4$. Solving gives $x=3$ (via the steps: $4\\to2$ by the stretch, then $\\to3$ by the right shift).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Track the maximum vertically",
          "workingLatex": "y=\\tfrac12(6)+1",
          "explanation": "The old height $6$ is halved by the vertical stretch and then increased by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the new height",
          "workingLatex": "=3+1=4",
          "explanation": "Half of $6$ is $3$, and adding $1$ gives $4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the new maximum point",
          "workingLatex": "(4,\\,6)\\to(3,\\,4)",
          "explanation": "Combining the coordinates gives the transformed turning point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is still a maximum",
          "workingLatex": "\\text{s.f. }\\tfrac12>0\\ \\Rightarrow\\ \\text{no reflection}",
          "explanation": "Because the vertical scale factor is positive, the curve is not flipped, so a maximum stays a maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "A horizontal stretch parallel to the $x$-axis of scale factor $\\tfrac12$, then a translation $\\binom{1}{0}$ (right $1$), then a vertical stretch parallel to the $y$-axis of scale factor $\\tfrac12$, then a translation $\\binom{0}{1}$ (up $1$). The maximum point maps $(4,\\,6)\\to(3,\\,4)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "combined-transformations",
      "feature-mapping"
    ],
    "questionText": "The function $f$ has a minimum turning point at $(3,\\,-4)$ and its graph crosses the $x$-axis at $(1,\\,0)$ and $(5,\\,0)$. The curve $C$ has equation $y=2f(x-1)+3$. Find the coordinates of the images, on $C$, of the minimum point and of the two $x$-axis crossing points, and state the nature of the turning point of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the key features of f.",
          "workingLatex": "\\text{min }(3,\\,-4),\\ \\text{crossings }(1,\\,0),\\ (5,\\,0)",
          "explanation": "Transformations move known features to new positions, so we start by writing down every feature we can track: the turning point and the two points where the graph meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break the equation into single transformations.",
          "workingLatex": "y=2f(x-1)+3",
          "explanation": "Reading $2f(x-1)+3$ from the inside out, three things happen to $f$: the $x-1$ inside the bracket, the $\\times 2$ outside, and the $+3$ outside. Separating them keeps the bookkeeping clear.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the inside change x-1.",
          "workingLatex": "x\\to x-1:\\ \\text{translate right }1",
          "explanation": "A change inside the bracket affects the input, and it does the opposite of what it looks like: replacing $x$ by $x-1$ slides the graph to the right by $1$, so every $x$-coordinate increases by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the outside factor 2.",
          "workingLatex": "\\times 2:\\ \\text{vertical stretch, factor }2",
          "explanation": "Multiplying the whole function by $2$ doubles every height, a stretch parallel to the $y$-axis. Because $2>0$ there is no reflection, so peaks stay peaks and troughs stay troughs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the outside addition +3.",
          "workingLatex": "+3:\\ \\text{translate up }3",
          "explanation": "Adding $3$ after the stretch raises every point by $3$. Outside changes behave exactly as they read, unlike the inside change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write a single mapping rule.",
          "workingLatex": "(p,\\,q)\\to(p+1,\\ 2q+3)",
          "explanation": "Horizontal and vertical changes act independently, so we can combine them into one rule: the $x$-coordinate gains $1$, and the $y$-coordinate is doubled then increased by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Map the minimum: x-coordinate.",
          "workingLatex": "3\\to 3+1=4",
          "explanation": "Applying the horizontal part of the rule to the minimum's $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Map the minimum: y-coordinate.",
          "workingLatex": "-4\\to 2(-4)+3=-5",
          "explanation": "The vertical part doubles $-4$ to $-8$ and then adds $3$, giving $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the image of the minimum.",
          "workingLatex": "(3,\\,-4)\\to(4,\\,-5)",
          "explanation": "Combining the two coordinates gives the new turning point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm it is still a minimum.",
          "workingLatex": "\\text{factor }2>0\\Rightarrow\\text{ still a minimum}",
          "explanation": "A positive stretch factor does not flip the curve, so the trough remains a trough: $C$ has a minimum at $(4,\\,-5)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Map the crossing point (1, 0).",
          "workingLatex": "(1,\\,0)\\to(1+1,\\ 2(0)+3)=(2,\\,3)",
          "explanation": "Using the same rule: $x$ becomes $2$, and $y=0$ is doubled to $0$ then raised to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Map the crossing point (5, 0).",
          "workingLatex": "(5,\\,0)\\to(5+1,\\ 2(0)+3)=(6,\\,3)",
          "explanation": "Likewise the second crossing point moves to $(6,\\,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note these images are no longer on the x-axis.",
          "workingLatex": "y=3\\neq 0",
          "explanation": "The $+3$ lifts the former roots off the axis, so on $C$ these points sit at height $3$; $C$ does not cross the $x$-axis where $f$ did.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check using symmetry.",
          "workingLatex": "\\tfrac{2+6}{2}=4",
          "explanation": "The two mapped points $(2,\\,3)$ and $(6,\\,3)$ are level and their $x$-values average to $4$, matching the minimum at $x=4$. This consistency is a good sign the mapping is right.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the results.",
          "workingLatex": "\\text{min }(4,\\,-5),\\ (2,\\,3),\\ (6,\\,3)",
          "explanation": "We now have every requested image and the nature of the turning point.",
          "diagram": null
        }
      ],
      "finalAnswer": "On $C$: the minimum maps to $(4,\\,-5)$ (still a minimum), and the crossings $(1,\\,0),\\ (5,\\,0)$ map to $(2,\\,3)$ and $(6,\\,3)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "graph-transformations",
      "roots",
      "reasoning"
    ],
    "questionText": "The equation $f(x)=0$ has exactly three distinct real roots. Given no further information about $f$, determine, with justification, the number of distinct real roots of each of the following equations: (a) $f(x-7)=0$; (b) $f(4x)=0$; (c) $5f(x)=0$; (d) $f(x)-2=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'roots' geometrically.",
          "workingLatex": "f(x)=0\\ \\Leftrightarrow\\ \\text{graph meets the }x\\text{-axis}",
          "explanation": "A real root is an $x$ where the curve crosses or touches the $x$-axis. Counting roots means counting these axis crossings, so we track what each transformation does to them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the starting fact.",
          "workingLatex": "\\#\\{x:f(x)=0\\}=3",
          "explanation": "We are told there are exactly three such $x$-values; we do not know where they are, only how many.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Identify the transformation.",
          "workingLatex": "y=f(x-7):\\ \\text{translate right }7",
          "explanation": "The $x-7$ inside the bracket slides the whole graph right by $7$; every point, including each axis crossing, moves horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Effect on roots.",
          "workingLatex": "r\\to r+7",
          "explanation": "A pure horizontal shift moves each crossing along the $x$-axis but never creates or destroys one, because sliding sideways keeps the graph touching the axis the same number of times.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(a) Conclude.",
          "workingLatex": "3\\text{ roots}",
          "explanation": "So $f(x-7)=0$ still has exactly three real roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Identify the transformation.",
          "workingLatex": "y=f(4x):\\ \\text{horizontal stretch, factor }\\tfrac14",
          "explanation": "Replacing $x$ by $4x$ squashes the graph towards the $y$-axis by factor $\\tfrac14$; the counter-intuitive reciprocal factor is typical of inside changes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Effect on roots.",
          "workingLatex": "r\\to \\tfrac{r}{4}",
          "explanation": "Each crossing moves to a quarter of its $x$-value, but a horizontal squash still keeps every crossing on the axis, so none are gained or lost.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(b) Conclude.",
          "workingLatex": "3\\text{ roots}",
          "explanation": "Hence $f(4x)=0$ also has exactly three real roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(c) Simplify the equation.",
          "workingLatex": "5f(x)=0\\ \\Leftrightarrow\\ f(x)=0",
          "explanation": "Dividing both sides by $5$ shows this equation has exactly the same solutions as $f(x)=0$; a vertical stretch never moves where the curve meets the axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "(c) Conclude.",
          "workingLatex": "3\\text{ roots}",
          "explanation": "So $5f(x)=0$ has the same three roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "(d) Rewrite the equation.",
          "workingLatex": "f(x)-2=0\\ \\Leftrightarrow\\ f(x)=2",
          "explanation": "This asks where $f$ takes the value $2$, i.e. where the graph meets the horizontal line $y=2$, which is a different question from meeting the axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "(d) See why the count is not fixed.",
          "workingLatex": "\\#\\{x:f(x)=2\\}=?",
          "explanation": "Knowing the curve crosses $y=0$ three times tells us nothing about how many times it reaches the height $2$; that depends on the shape and turning-point heights of $f$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "(d) Give the possibilities.",
          "workingLatex": "\\text{could be }0,\\,1,\\,2,\\,3,\\ldots",
          "explanation": "Depending on $f$, the line $y=2$ might miss the curve, be tangent to it, or cut it several times, so the number cannot be determined.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise.",
          "workingLatex": "(a)\\,3,\\ (b)\\,3,\\ (c)\\,3,\\ (d)\\ \\text{cannot be determined}",
          "explanation": "Only the vertical shift in part (d) changes the target line and so breaks the guarantee; the other three transformations preserve the root count.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $3$; (b) $3$; (c) $3$; (d) cannot be determined — it equals the number of times $f$ reaches height $2$, which the given information does not fix."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "graph-transformations",
      "work-backwards",
      "simultaneous-equations"
    ],
    "questionText": "A curve $y=f(x)$ passes through the points $(0,\\,4)$ and $(3,\\,-2)$. The curve is transformed to $y=a\\,f(x)+b$, where $a$ and $b$ are constants. The image passes through $(0,\\,14)$ and $(3,\\,-4)$. Find the values of $a$ and $b$, and describe the transformation fully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the transformation type.",
          "workingLatex": "y=a\\,f(x)+b",
          "explanation": "Both changes are outside the function: a vertical stretch by $a$ and a vertical translation by $b$. These affect heights only, so $x$-coordinates are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the point-mapping rule.",
          "workingLatex": "(p,\\,q)\\to(p,\\ aq+b)",
          "explanation": "Since $x$ is untouched, a point keeps its $x$-coordinate while its height becomes $aq+b$. We can use the given before/after pairs to form equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match the first point.",
          "workingLatex": "(0,\\,4)\\to(0,\\,14)",
          "explanation": "The image point with $x=0$ must come from the original point with $x=0$, because vertical transformations never change $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the first equation.",
          "workingLatex": "a(4)+b=14",
          "explanation": "Substituting $q=4$ into $aq+b$ and setting it equal to the new height $14$ gives our first equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match the second point.",
          "workingLatex": "(3,\\,-2)\\to(3,\\,-4)",
          "explanation": "Similarly the $x=3$ points correspond to each other.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the second equation.",
          "workingLatex": "a(-2)+b=-4",
          "explanation": "Substituting $q=-2$ and the new height $-4$ gives the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the simultaneous system.",
          "workingLatex": "4a+b=14,\\quad -2a+b=-4",
          "explanation": "Two linear equations in the two unknowns $a$ and $b$ can now be solved together.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Eliminate b.",
          "workingLatex": "(4a+b)-(-2a+b)=14-(-4)",
          "explanation": "Subtracting the second equation from the first removes $b$, leaving an equation in $a$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify.",
          "workingLatex": "6a=18",
          "explanation": "The $b$ terms cancel and the right side is $14+4=18$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for a.",
          "workingLatex": "a=3",
          "explanation": "Dividing by $6$ gives the stretch factor.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Back-substitute for b.",
          "workingLatex": "4(3)+b=14\\Rightarrow b=2",
          "explanation": "Putting $a=3$ into the first equation gives $12+b=14$, so $b=2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check with the second equation.",
          "workingLatex": "-2(3)+2=-6+2=-4\\ \\checkmark",
          "explanation": "The values satisfy the second equation too, confirming the solution is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret a.",
          "workingLatex": "a=3>1:\\ \\text{vertical stretch, factor }3",
          "explanation": "A factor greater than $1$ stretches the graph away from the $x$-axis; being positive, it involves no reflection.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret b.",
          "workingLatex": "b=2:\\ \\text{translate up }2",
          "explanation": "Adding $2$ afterwards raises the stretched curve by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the full transformation.",
          "workingLatex": "y=3f(x)+2",
          "explanation": "So the image is obtained by a vertical stretch of factor $3$ followed by a translation of $2$ upwards.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a=3,\\ b=2$: a vertical stretch of scale factor $3$ parallel to the $y$-axis, followed by a translation of $2$ units upwards."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "work-backwards",
      "translation"
    ],
    "questionText": "The curve $y=f(x)$ meets the $x$-axis only at $(8,\\,0)$ and has a maximum point at $(2,\\,5)$. The curve $y=f(x+k)$ has a maximum point at $(-3,\\,5)$. (a) Find the value of $k$. (b) State the coordinates of the point where $y=f(x+k)$ meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation.",
          "workingLatex": "y=f(x+k):\\ \\text{horizontal translation}",
          "explanation": "The change is inside the bracket, so it is a purely horizontal shift; heights (the $y$-coordinates) are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the direction rule.",
          "workingLatex": "x\\to x+k:\\ \\text{shift left by }k\\ (k>0)",
          "explanation": "Inside changes act in the opposite sense to how they read: adding $k$ inside moves the graph left by $k$, so each $x$-coordinate decreases by $k$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the mapping rule.",
          "workingLatex": "(p,\\,q)\\to(p-k,\\ q)",
          "explanation": "Every point keeps its height and has its $x$-coordinate reduced by $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the maximum to find k.",
          "workingLatex": "\\text{max }(2,\\,5)\\to(2-k,\\ 5)",
          "explanation": "The maximum is the easiest feature to track because its height $5$ is unchanged, so only its $x$-coordinate tells us about $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Equate x-coordinates.",
          "workingLatex": "2-k=-3",
          "explanation": "The image maximum is given at $(-3,\\,5)$, so the shifted $x$-coordinate must equal $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for k.",
          "workingLatex": "k=5",
          "explanation": "Rearranging $2-k=-3$ gives $k=5$; a positive $k$ confirms a shift to the left.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the transformation concretely.",
          "workingLatex": "y=f(x+5):\\ \\text{translate left }5",
          "explanation": "So the whole curve, including where it meets the axis, moves $5$ to the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the maximum height is preserved.",
          "workingLatex": "5\\ \\text{unchanged}",
          "explanation": "A horizontal translation never changes heights, and indeed the image maximum is still at height $5$, so the value $k=5$ is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Locate the original axis crossing.",
          "workingLatex": "(8,\\,0)",
          "explanation": "The only place $f$ meets the $x$-axis is $(8,\\,0)$; its image will be the only crossing of the transformed curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the mapping to the crossing.",
          "workingLatex": "(8,\\,0)\\to(8-5,\\ 0)",
          "explanation": "Reducing the $x$-coordinate by $5$ and keeping $y=0$ locates the new crossing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify.",
          "workingLatex": "(3,\\,0)",
          "explanation": "So the transformed curve meets the $x$-axis at $(3,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sanity-check the horizontal spacing.",
          "workingLatex": "8-2=6=3-(-3)",
          "explanation": "The gap from maximum to crossing is $6$ before ($x=2$ to $8$) and $6$ after ($x=-3$ to $3$); a translation preserves such distances, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answers.",
          "workingLatex": "k=5,\\quad (3,\\,0)",
          "explanation": "Both parts are now determined.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $k=5$; (b) the transformed curve meets the $x$-axis at $(3,\\,0)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "asymptotes",
      "reciprocal-curve"
    ],
    "questionText": "The reciprocal curve $y=\\frac{1}{x}$ is transformed to the curve $C$ given by $y=\\frac{2}{x-3}-1$. (a) Describe fully the transformation from $y=\\frac{1}{x}$ to $C$. (b) Write down the equations of the two asymptotes of $C$. (c) Find the coordinates of the points where $C$ meets the coordinate axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write C as a transformation of f(x)=1/x.",
          "workingLatex": "y=2f(x-3)-1,\\quad f(x)=\\tfrac{1}{x}",
          "explanation": "Recognising the $\\frac{1}{x}$ shape lets us read $\\frac{2}{x-3}-1$ as $2f(x-3)-1$, so the same inside/outside logic applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the asymptotes of y=1/x.",
          "workingLatex": "x=0,\\quad y=0",
          "explanation": "The basic reciprocal curve shoots off near the $y$-axis and flattens towards the $x$-axis, giving a vertical asymptote $x=0$ and a horizontal asymptote $y=0$. Asymptotes move exactly like the graph's features.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret x-3 inside.",
          "workingLatex": "\\text{translate right }3",
          "explanation": "The $x-3$ inside shifts everything right by $3$, so the vertical asymptote moves with it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the outside × 2.",
          "workingLatex": "\\text{vertical stretch, factor }2",
          "explanation": "Multiplying by $2$ stretches heights away from the $x$-axis; this does not move the horizontal asymptote yet because twice zero is still zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the outside -1.",
          "workingLatex": "\\text{translate down }1",
          "explanation": "Subtracting $1$ lowers the whole curve by $1$, which drags the horizontal asymptote down with it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(a) Combine the description.",
          "workingLatex": "\\text{right }3,\\ \\text{stretch }\\times 2,\\ \\text{down }1",
          "explanation": "Putting the pieces together fully describes how $y=\\frac{1}{x}$ becomes $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Transform the vertical asymptote.",
          "workingLatex": "x=0\\to x=3",
          "explanation": "The vertical asymptote is only affected by the horizontal shift, moving from $x=0$ to $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(b) Transform the horizontal asymptote.",
          "workingLatex": "y=0\\to y=2(0)-1=-1",
          "explanation": "The horizontal asymptote's height is doubled (still $0$) then lowered by $1$, giving $y=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(b) State the asymptotes.",
          "workingLatex": "x=3,\\quad y=-1",
          "explanation": "These are the two lines the curve approaches but never reaches.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "(c) Find the y-intercept.",
          "workingLatex": "x=0:\\ y=\\frac{2}{0-3}-1",
          "explanation": "Setting $x=0$ finds where $C$ meets the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the y-intercept.",
          "workingLatex": "y=-\\tfrac{2}{3}-1=-\\tfrac{5}{3}",
          "explanation": "Since $\\frac{2}{-3}=-\\frac{2}{3}$, subtracting $1$ gives $-\\frac{5}{3}$, so the curve meets the $y$-axis at $(0,\\,-\\tfrac{5}{3})$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "(c) Set up the x-intercept.",
          "workingLatex": "y=0:\\ \\frac{2}{x-3}-1=0",
          "explanation": "Setting $y=0$ finds where $C$ meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Rearrange.",
          "workingLatex": "\\frac{2}{x-3}=1",
          "explanation": "Adding $1$ to both sides isolates the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for x.",
          "workingLatex": "x-3=2\\Rightarrow x=5",
          "explanation": "Cross-multiplying gives $x-3=2$, so $x=5$; the curve meets the $x$-axis at $(5,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State all intercepts and asymptotes.",
          "workingLatex": "(5,\\,0),\\ (0,\\,-\\tfrac{5}{3});\\ x=3,\\ y=-1",
          "explanation": "Collecting the results answers every part; note the intercepts lie on the correct sides of the asymptotes, a useful check.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) translate right $3$, vertical stretch factor $2$, translate down $1$; (b) asymptotes $x=3$ and $y=-1$; (c) crosses the axes at $(5,\\,0)$ and $(0,\\,-\\tfrac{5}{3})$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "asymptotes",
      "exponential"
    ],
    "questionText": "The curve $y=2^{x}$ is transformed to the curve $C$ with equation $y=6-2^{x+1}$. (a) Describe fully the transformation from $y=2^{x}$ to $C$. (b) State the equation of the horizontal asymptote of $C$ and describe the behaviour as $x\\to\\pm\\infty$. (c) Find the exact coordinates of the points where $C$ meets the axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite C to expose the transformations.",
          "workingLatex": "y=-2^{x+1}+6",
          "explanation": "Reordering $6-2^{x+1}$ as $-2^{x+1}+6$ makes the reflection (the $-$) and the vertical shift (the $+6$) easier to read.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Deal with the exponent x+1.",
          "workingLatex": "2^{x+1}:\\ \\text{translate left }1",
          "explanation": "The $+1$ in the exponent is an inside change, shifting $y=2^{x}$ left by $1$. Equivalently $2^{x+1}=2\\cdot 2^{x}$, a vertical stretch of factor $2$; either view is acceptable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deal with the leading minus sign.",
          "workingLatex": "-2^{x+1}:\\ \\text{reflect in the }x\\text{-axis}",
          "explanation": "The overall negative flips every height to its opposite, reflecting the curve in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Deal with the +6.",
          "workingLatex": "+6:\\ \\text{translate up }6",
          "explanation": "Adding $6$ at the end lifts the reflected curve up by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(a) Combine the description.",
          "workingLatex": "\\text{left }1,\\ \\text{reflect in }x\\text{-axis},\\ \\text{up }6",
          "explanation": "Together these turn $y=2^{x}$ into $C$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the asymptote of y=2^x.",
          "workingLatex": "y=0",
          "explanation": "The graph of $y=2^{x}$ hugs the $x$-axis for large negative $x$, so its horizontal asymptote is $y=0$. Asymptotes follow the vertical transformations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Transform the asymptote.",
          "workingLatex": "y=0\\ \\to\\ y=-0+6=6",
          "explanation": "Reflecting $y=0$ leaves it at $0$, and the $+6$ raises it to $y=6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(b) Behaviour as x→-∞.",
          "workingLatex": "2^{x+1}\\to 0\\Rightarrow y\\to 6^{-}",
          "explanation": "For large negative $x$ the power $2^{x+1}$ shrinks to $0$, so $y$ approaches $6$ from below — the curve nears the asymptote $y=6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(b) Behaviour as x→+∞.",
          "workingLatex": "2^{x+1}\\to+\\infty\\Rightarrow y\\to-\\infty",
          "explanation": "For large positive $x$ the power grows without bound, and the minus sign sends $y$ down to $-\\infty$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "(c) Find the y-intercept.",
          "workingLatex": "x=0:\\ y=6-2^{1}",
          "explanation": "Setting $x=0$ gives the height where $C$ meets the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify.",
          "workingLatex": "y=6-2=4",
          "explanation": "So $C$ crosses the $y$-axis at $(0,\\,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "(c) Set up the x-intercept.",
          "workingLatex": "y=0:\\ 6-2^{x+1}=0",
          "explanation": "Setting $y=0$ finds where $C$ meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Isolate the power.",
          "workingLatex": "2^{x+1}=6",
          "explanation": "Rearranging gives the exponential equal to $6$; we solve using logarithms base $2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Take logs base 2.",
          "workingLatex": "x+1=\\log_2 6",
          "explanation": "Since $2^{x+1}=6$, the exponent equals $\\log_2 6$ by the definition of a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Simplify the exact root.",
          "workingLatex": "x=\\log_2 6-1=\\log_2 3",
          "explanation": "Because $\\log_2 6-1=\\log_2 6-\\log_2 2=\\log_2\\tfrac{6}{2}=\\log_2 3$, the curve meets the $x$-axis at $(\\log_2 3,\\ 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the results.",
          "workingLatex": "(0,\\,4),\\ (\\log_2 3,\\,0);\\ y=6",
          "explanation": "These are the axis intercepts and the asymptote, completing the analysis.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) translate left $1$, reflect in the $x$-axis, translate up $6$; (b) asymptote $y=6$, with $y\\to 6^{-}$ as $x\\to-\\infty$ and $y\\to-\\infty$ as $x\\to+\\infty$; (c) meets the axes at $(0,\\,4)$ and $(\\log_2 3,\\,0)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "combined-transformations",
      "order-matters"
    ],
    "questionText": "The point $P(4,\\,-6)$ lies on the curve $y=f(x)$. Find the coordinates of the image of $P$ on the curve $y=f(2x-6)+5$, taking care over the order of the transformations.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate inside and outside changes.",
          "workingLatex": "y=f(2x-6)+5",
          "explanation": "Inside the bracket we have $2x-6$ (horizontal effects); outside we have $+5$ (vertical effect). Horizontal and vertical parts can be handled independently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the inside expression.",
          "workingLatex": "2x-6=2(x-3)",
          "explanation": "Factorising the coefficient of $x$ out of the bracket is essential: it reveals the true order of a horizontal stretch and a horizontal translation, which is the classic trap.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write C in factored form.",
          "workingLatex": "y=f\\big(2(x-3)\\big)+5",
          "explanation": "Now the inside reads as 'stretch then shift', which we must respect to place points correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the horizontal stretch.",
          "workingLatex": "f(2x):\\ \\text{stretch, factor }\\tfrac{1}{2}",
          "explanation": "The factor $2$ inside squashes the graph horizontally by $\\tfrac{1}{2}$: an $x$-coordinate $p$ moves to $\\tfrac{p}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the horizontal translation.",
          "workingLatex": "x\\to x-3:\\ \\text{translate right }3",
          "explanation": "After the stretch, replacing $x$ by $x-3$ shifts everything right by $3$, adding $3$ to each $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the vertical translation.",
          "workingLatex": "+5:\\ \\text{translate up }5",
          "explanation": "The outside $+5$ simply raises every point by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Build the horizontal mapping.",
          "workingLatex": "p\\to \\tfrac{p}{2}+3",
          "explanation": "Applying the stretch then the shift in that order sends an $x$-coordinate $p$ to $\\tfrac{p}{2}$ and then to $\\tfrac{p}{2}+3$. Doing them the other way round would give the wrong position.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Build the vertical mapping.",
          "workingLatex": "q\\to q+5",
          "explanation": "The height simply increases by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine into one rule.",
          "workingLatex": "(p,\\,q)\\to\\Big(\\tfrac{p}{2}+3,\\ q+5\\Big)",
          "explanation": "This single rule now carries any point of $y=f(x)$ to its image.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Read off P.",
          "workingLatex": "P=(4,\\,-6):\\ p=4,\\ q=-6",
          "explanation": "We take the coordinates of $P$ to substitute into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Map the x-coordinate.",
          "workingLatex": "\\tfrac{4}{2}+3=2+3=5",
          "explanation": "Halving $4$ gives $2$, and adding $3$ gives $5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Map the y-coordinate.",
          "workingLatex": "-6+5=-1",
          "explanation": "Raising $-6$ by $5$ gives $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the image.",
          "workingLatex": "(5,\\,-1)",
          "explanation": "So $P$ maps to $(5,\\,-1)$ on the transformed curve.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify by direct substitution.",
          "workingLatex": "\\text{at }x=5:\\ f(2\\cdot 5-6)+5=f(4)+5",
          "explanation": "Substituting $x=5$ gives $f(4)+5$, and since $P(4,-6)$ tells us $f(4)=-6$, this is $-6+5=-1$ — exactly the height we found.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Note the common mistake.",
          "workingLatex": "\\text{shift-then-stretch}\\Rightarrow\\text{wrong }x",
          "explanation": "Shifting before stretching, or forgetting to factor the $2$, would misplace the point; factoring to $2(x-3)$ guarantees the correct order.",
          "diagram": null
        }
      ],
      "finalAnswer": "The image of $P$ is $(5,\\,-1)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "combined-transformations",
      "feature-mapping"
    ],
    "questionText": "The curve $y=f(x)$ has a maximum point at $(-1,\\,6)$, a minimum point at $(3,\\,-2)$, and passes through the point $(0,\\,4)$. The curve is transformed to $y=\\tfrac{1}{2}f(x+1)-3$. Find the images of the maximum point, the minimum point and the point $(0,\\,4)$, stating the nature of each turning point on the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the features to track.",
          "workingLatex": "\\text{max}(-1,\\,6),\\ \\text{min}(3,\\,-2),\\ (0,\\,4)",
          "explanation": "We record all three named points so we can move each one under the transformation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break up the equation.",
          "workingLatex": "y=\\tfrac{1}{2}f(x+1)-3",
          "explanation": "Inside: $x+1$ (horizontal). Outside: $\\times\\tfrac{1}{2}$ then $-3$ (vertical). We interpret each in turn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret x+1.",
          "workingLatex": "\\text{translate left }1",
          "explanation": "Adding $1$ inside the bracket shifts the graph left by $1$, reducing every $x$-coordinate by $1$ — the opposite of what the $+1$ might suggest.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret ×1/2.",
          "workingLatex": "\\text{vertical compression, factor }\\tfrac{1}{2}",
          "explanation": "Multiplying by $\\tfrac{1}{2}$ halves every height, squashing the curve towards the $x$-axis. Being positive, it does not flip the curve, so maxima stay maxima.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret -3.",
          "workingLatex": "\\text{translate down }3",
          "explanation": "Subtracting $3$ afterwards lowers every point by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the mapping rule.",
          "workingLatex": "(p,\\,q)\\to\\Big(p-1,\\ \\tfrac{q}{2}-3\\Big)",
          "explanation": "Combining the horizontal and vertical parts gives one rule for every point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Map the maximum: x.",
          "workingLatex": "-1\\to-1-1=-2",
          "explanation": "Applying the horizontal shift to the maximum's $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Map the maximum: y.",
          "workingLatex": "6\\to\\tfrac{6}{2}-3=0",
          "explanation": "Halving $6$ gives $3$, then subtracting $3$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the image of the maximum.",
          "workingLatex": "(-1,\\,6)\\to(-2,\\,0)",
          "explanation": "Because the factor $\\tfrac{1}{2}$ is positive there is no reflection, so this point is still a maximum, now at $(-2,\\,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Map the minimum: x.",
          "workingLatex": "3\\to 3-1=2",
          "explanation": "Shifting the minimum's $x$-coordinate left by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Map the minimum: y.",
          "workingLatex": "-2\\to\\tfrac{-2}{2}-3=-4",
          "explanation": "Halving $-2$ gives $-1$, then subtracting $3$ gives $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the image of the minimum.",
          "workingLatex": "(3,\\,-2)\\to(2,\\,-4)",
          "explanation": "It remains a minimum (no reflection), now at $(2,\\,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Map the point (0, 4): x.",
          "workingLatex": "0\\to 0-1=-1",
          "explanation": "Shifting its $x$-coordinate left by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Map the point (0, 4): y.",
          "workingLatex": "4\\to\\tfrac{4}{2}-3=-1",
          "explanation": "Halving $4$ gives $2$, then subtracting $3$ gives $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the image of (0, 4).",
          "workingLatex": "(0,\\,4)\\to(-1,\\,-1)",
          "explanation": "This ordinary point moves to $(-1,\\,-1)$; note it is not a turning point, just a tracked point.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Collect the results.",
          "workingLatex": "\\text{max}(-2,\\,0),\\ \\text{min}(2,\\,-4),\\ (-1,\\,-1)",
          "explanation": "All three images are found, with turning-point natures preserved because the vertical factor is positive.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $(-1,\\,6)\\to(-2,\\,0)$ (still a maximum); minimum $(3,\\,-2)\\to(2,\\,-4)$ (still a minimum); $(0,\\,4)\\to(-1,\\,-1)$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "set",
    "tags": [
      "graph-transformations",
      "intersections",
      "reasoning"
    ],
    "questionText": "The curves $y=f(x)$ and $y=g(x)$ intersect at exactly three points, whose $x$-coordinates are $-2$, $1$ and $4$. Find the $x$-coordinates of the intersection points of each pair of transformed curves: (a) $y=f(x-3)$ and $y=g(x-3)$; (b) $y=f(2x)$ and $y=g(2x)$; (c) $y=f(x)+1$ and $y=g(x)+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret an intersection point.",
          "workingLatex": "f(x)=g(x)\\ \\text{at}\\ x=-2,\\,1,\\,4",
          "explanation": "The curves cross where their heights are equal, so the given values are exactly the solutions of $f(x)=g(x)$. We reason about where the transformed curves have equal heights.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Set up the intersection condition.",
          "workingLatex": "f(x-3)=g(x-3)",
          "explanation": "Both curves are shifted by the same rule, so their images meet where the shifted inputs make the original functions equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Substitute u=x-3.",
          "workingLatex": "f(u)=g(u)\\Rightarrow u\\in\\{-2,\\,1,\\,4\\}",
          "explanation": "Letting $u=x-3$ turns the condition into the original equation, whose solutions we already know.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Solve back for x.",
          "workingLatex": "x-3=-2,\\ 1,\\ 4",
          "explanation": "Each value of $u$ gives an equation for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(a) List the x-coordinates.",
          "workingLatex": "x=1,\\ 4,\\ 7",
          "explanation": "Adding $3$ to each solution gives the crossings of the shifted curves; both curves moved right by $3$, so the meeting points move right by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Set up the condition.",
          "workingLatex": "f(2x)=g(2x)",
          "explanation": "Again both curves undergo the same horizontal stretch, so they meet where their common input hits an original solution.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Substitute u=2x.",
          "workingLatex": "f(u)=g(u)\\Rightarrow u\\in\\{-2,\\,1,\\,4\\}",
          "explanation": "With $u=2x$ the equation becomes the original one, with the same three solutions in $u$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(b) Solve back for x.",
          "workingLatex": "2x=-2,\\ 1,\\ 4",
          "explanation": "Each value of $u$ gives $x=\\tfrac{u}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(b) List the x-coordinates.",
          "workingLatex": "x=-1,\\ \\tfrac{1}{2},\\ 2",
          "explanation": "Halving each solution matches the horizontal squash by factor $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "(c) Set up the condition.",
          "workingLatex": "f(x)+1=g(x)+1",
          "explanation": "Both curves are raised by the same amount, so we compare their new heights.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "(c) Cancel the common shift.",
          "workingLatex": "f(x)=g(x)",
          "explanation": "Subtracting $1$ from both sides leaves the original equation: adding the same constant to both curves cannot move where they cross.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "(c) List the x-coordinates.",
          "workingLatex": "x=-2,\\ 1,\\ 4",
          "explanation": "The intersection $x$-coordinates are unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the general principle.",
          "workingLatex": "\\text{same transform to both}\\Rightarrow\\text{crossings transform likewise}",
          "explanation": "Whenever both curves receive the identical transformation, their intersection points simply undergo that same transformation (and equal vertical shifts leave the $x$-coordinates fixed).",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise.",
          "workingLatex": "(a)\\,1,4,7;\\ (b)\\,-1,\\tfrac{1}{2},2;\\ (c)\\,-2,1,4",
          "explanation": "This collects the three answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x=1,\\ 4,\\ 7$; (b) $x=-1,\\ \\tfrac{1}{2},\\ 2$; (c) $x=-2,\\ 1,\\ 4$."
    }
  },
  {
    "id": "al.y1.pure.graph-transformations.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Transformations of graphs",
    "subtopicId": "al.y1.pure.graph-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "graph-transformations",
      "reflection",
      "feature-mapping"
    ],
    "questionText": "The curve $y=f(x)$ has a maximum point at $(-2,\\,8)$ and crosses the $x$-axis at $(-5,\\,0)$ and $(1,\\,0)$. The curve is transformed to $y=-\\tfrac{1}{2}f(x)$. (a) Find the coordinates of the turning point of the new curve and state whether it is a maximum or minimum. (b) State the coordinates of the points where the new curve crosses the $x$-axis. (c) Explain how many times the new curve meets the line $y=-4$ near this turning point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the features of f.",
          "workingLatex": "\\text{max}(-2,\\,8),\\ (-5,\\,0),\\ (1,\\,0)",
          "explanation": "We note the turning point and the two $x$-axis crossings so we can transform each.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break up the transformation.",
          "workingLatex": "y=-\\tfrac{1}{2}f(x)",
          "explanation": "This is a single outside operation, $\\times\\left(-\\tfrac{1}{2}\\right)$, so only heights change; $x$-coordinates stay put.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the size of the factor.",
          "workingLatex": "\\left|-\\tfrac{1}{2}\\right|=\\tfrac{1}{2}:\\ \\text{vertical compression}",
          "explanation": "A factor of magnitude $\\tfrac{1}{2}$ halves every height, squashing the curve towards the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the sign of the factor.",
          "workingLatex": "\\text{negative}\\Rightarrow\\text{reflect in the }x\\text{-axis}",
          "explanation": "The minus sign flips every point to the opposite side of the $x$-axis, so a peak becomes a trough.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the mapping rule.",
          "workingLatex": "(p,\\,q)\\to\\Big(p,\\ -\\tfrac{q}{2}\\Big)",
          "explanation": "Each point keeps its $x$-coordinate while its height is halved and its sign reversed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Map the maximum: y.",
          "workingLatex": "8\\to-\\tfrac{8}{2}=-4",
          "explanation": "Halving $8$ gives $4$, and the reflection makes it $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the new turning point.",
          "workingLatex": "(-2,\\,8)\\to(-2,\\,-4)",
          "explanation": "The $x$-coordinate is unchanged, so the turning point is $(-2,\\,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(a) State its nature.",
          "workingLatex": "\\text{max}\\to\\text{min}",
          "explanation": "Because the curve is reflected in the $x$-axis, the original maximum becomes a minimum; so $(-2,\\,-4)$ is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Map the crossing (-5, 0).",
          "workingLatex": "(-5,\\,0)\\to\\big(-5,\\ -\\tfrac{0}{2}\\big)=(-5,\\,0)",
          "explanation": "A point on the $x$-axis has height $0$, and halving or reflecting $0$ leaves it $0$, so it stays on the axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Map the crossing (1, 0).",
          "workingLatex": "(1,\\,0)\\to(1,\\,0)",
          "explanation": "For the same reason the second crossing is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "(b) State the crossings.",
          "workingLatex": "(-5,\\,0),\\ (1,\\,0)",
          "explanation": "Vertical stretches and reflections never move the $x$-axis crossings, because zero height maps to zero height.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "(c) Compare the turning point to y=-4.",
          "workingLatex": "\\text{min at }(-2,\\,-4)\\ \\text{lies on }y=-4",
          "explanation": "The minimum point sits exactly on the line $y=-4$, since its height is $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reason about how the curve meets the line there.",
          "workingLatex": "\\text{turning point touches }y=-4",
          "explanation": "At a minimum the curve turns around and rises on both sides, so near this point it touches the line $y=-4$ at a single point rather than crossing it.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "(c) State the local conclusion.",
          "workingLatex": "1\\ \\text{point (a tangent touch)}",
          "explanation": "Locally the new curve meets $y=-4$ exactly once, where the line is tangent to the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Collect the answers.",
          "workingLatex": "\\text{min}(-2,\\,-4);\\ (-5,\\,0),(1,\\,0);\\ \\text{touches }y=-4",
          "explanation": "This gathers the turning point, the crossings and the tangency conclusion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) minimum at $(-2,\\,-4)$; (b) crosses the $x$-axis at $(-5,\\,0)$ and $(1,\\,0)$; (c) it touches the line $y=-4$ once, at the minimum $(-2,\\,-4)$."
    }
  }
];
