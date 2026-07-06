import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.further-transformations.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": ["graph transformations", "translation"],
    "questionText": "The curve $y=x^2$ is translated 3 units up. Write the equation of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "\\text{Translation: 3 units up}",
          "explanation": "Moving a curve straight up is a vertical translation, which changes the height of every point but leaves the $x$-coordinates unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the translation rule",
          "workingLatex": "y=f(x)+a \\;\\Rightarrow\\; \\text{shift up by } a",
          "explanation": "Adding a constant $a$ to a function raises every point by $a$, because each output $y$-value becomes $a$ larger.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the base function",
          "workingLatex": "f(x)=x^2",
          "explanation": "The starting curve is $y=x^2$, so this is the $f(x)$ we transform.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the value of a",
          "workingLatex": "a=3",
          "explanation": "A shift of 3 units up means the constant added is $a=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule",
          "workingLatex": "y=f(x)+3=x^2+3",
          "explanation": "We add 3 to the whole function so that every point rises by 3.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the new equation",
          "workingLatex": "y=x^2+3",
          "explanation": "This is the equation of the translated curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x^2+3$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": ["graph transformations", "translation"],
    "questionText": "The curve $y=x^2$ is translated 2 units in the positive $x$-direction. Write the equation of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "\\text{Translation: 2 units right}",
          "explanation": "Moving in the positive $x$-direction means sliding the whole curve to the right, which is a horizontal translation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the horizontal translation rule",
          "workingLatex": "y=f(x-a) \\;\\Rightarrow\\; \\text{shift right by } a",
          "explanation": "Horizontal shifts act inside the bracket and behave the opposite way to what you might expect: subtracting $a$ from $x$ moves the graph right by $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the base function",
          "workingLatex": "f(x)=x^2",
          "explanation": "The original curve is $y=x^2$, so $f(x)=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the value of a",
          "workingLatex": "a=2",
          "explanation": "A shift of 2 units to the right means we replace $x$ with $x-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule",
          "workingLatex": "y=f(x-2)=(x-2)^2",
          "explanation": "Substituting $x-2$ in place of $x$ inside the function slides the parabola 2 to the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the new equation",
          "workingLatex": "y=(x-2)^2",
          "explanation": "This is the equation of the translated curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x-2)^2$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": ["graph transformations", "reflection"],
    "questionText": "The curve $y=x^3$ is reflected in the $x$-axis. Write the equation of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "\\text{Reflection in the } x\\text{-axis}",
          "explanation": "Reflecting in the $x$-axis flips the curve upside down, so every point swaps to the opposite side of the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the reflection rule",
          "workingLatex": "y=-f(x) \\;\\Rightarrow\\; \\text{reflection in the } x\\text{-axis}",
          "explanation": "Multiplying the whole function by $-1$ negates every $y$-value, which is exactly what a reflection in the $x$-axis does.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the base function",
          "workingLatex": "f(x)=x^3",
          "explanation": "The original curve is $y=x^3$, so $f(x)=x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule",
          "workingLatex": "y=-f(x)=-x^3",
          "explanation": "We put a minus sign in front of the whole function to flip it in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with a point",
          "workingLatex": "(1,1)\\ \\text{on}\\ y=x^3 \\;\\to\\; (1,-1)\\ \\text{on}\\ y=-x^3",
          "explanation": "Checking a known point confirms the flip: $(1,1)$ becomes $(1,-1)$, the mirror image across the $x$-axis with the same $x$ but opposite $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the new equation",
          "workingLatex": "y=-x^3",
          "explanation": "This is the equation of the reflected curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-x^3$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": ["graph transformations", "stretch"],
    "questionText": "The curve $y=x^2$ undergoes a vertical stretch with scale factor 4. Write the equation of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "\\text{Vertical stretch, scale factor } 4",
          "explanation": "A vertical stretch pulls the curve away from the $x$-axis, multiplying every height by the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the vertical stretch rule",
          "workingLatex": "y=af(x) \\;\\Rightarrow\\; \\text{vertical stretch, scale factor } a",
          "explanation": "Multiplying the whole function by $a$ multiplies every $y$-value by $a$, stretching the graph vertically.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the base function",
          "workingLatex": "f(x)=x^2",
          "explanation": "The original curve is $y=x^2$, so $f(x)=x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the scale factor",
          "workingLatex": "a=4",
          "explanation": "A scale factor of 4 means we multiply the function by 4.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule",
          "workingLatex": "y=4f(x)=4x^2",
          "explanation": "Multiplying $x^2$ by 4 makes every point four times as far from the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the new equation",
          "workingLatex": "y=4x^2",
          "explanation": "This is the equation of the stretched curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=4x^2$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": ["graph transformations", "reflection"],
    "questionText": "The curve $y=x^3+x$ is reflected in the $y$-axis. Write the equation of the new curve, simplified.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "\\text{Reflection in the } y\\text{-axis}",
          "explanation": "Reflecting in the $y$-axis flips the curve left-to-right, so each point moves to the opposite $x$-value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the reflection rule",
          "workingLatex": "y=f(-x) \\;\\Rightarrow\\; \\text{reflection in the } y\\text{-axis}",
          "explanation": "Replacing $x$ with $-x$ swaps left and right, which is exactly a reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the base function",
          "workingLatex": "f(x)=x^3+x",
          "explanation": "The original curve is $y=x^3+x$, so $f(x)=x^3+x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace x with -x",
          "workingLatex": "y=f(-x)=(-x)^3+(-x)",
          "explanation": "We substitute $-x$ wherever $x$ appears to build the reflected equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify each term",
          "workingLatex": "(-x)^3=-x^3, \\quad (-x)=-x",
          "explanation": "Cubing a negative keeps the negative sign, so $(-x)^3=-x^3$, and $-x$ stays as $-x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the terms",
          "workingLatex": "y=-x^3-x",
          "explanation": "Putting the simplified terms together gives the reflected curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the new equation",
          "workingLatex": "y=-x^3-x",
          "explanation": "This is the fully simplified equation of the reflected curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-x^3-x$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": ["image of a point", "translation"],
    "questionText": "The point $(2,5)$ lies on $y=f(x)$. State the coordinates of its image on $y=f(x)+3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=f(x)+3",
          "explanation": "Adding 3 outside the function is a vertical translation of 3 units up.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the effect on a point",
          "workingLatex": "(p,q) \\;\\to\\; (p,\\,q+3)",
          "explanation": "A shift up by 3 leaves the $x$-coordinate unchanged and increases the $y$-coordinate by 3.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the original point",
          "workingLatex": "(p,q)=(2,5)",
          "explanation": "We start from the given point on $y=f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Keep the x-coordinate",
          "workingLatex": "x=2",
          "explanation": "A vertical translation does not move points sideways, so $x$ stays as 2.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add 3 to the y-coordinate",
          "workingLatex": "y=5+3=8",
          "explanation": "The point rises by 3, so its new height is $5+3=8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "(2,8)",
          "explanation": "This is the position of the transformed point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,8)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": ["image of a point", "translation"],
    "questionText": "The point $(2,5)$ lies on $y=f(x)$. State the coordinates of its image on $y=f(x-4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=f(x-4)",
          "explanation": "Subtracting 4 inside the bracket is a horizontal translation of 4 units to the right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the effect on a point",
          "workingLatex": "(p,q) \\;\\to\\; (p+4,\\,q)",
          "explanation": "A shift right by 4 adds 4 to the $x$-coordinate while the $y$-coordinate stays the same.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the original point",
          "workingLatex": "(p,q)=(2,5)",
          "explanation": "We start from the given point on $y=f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add 4 to the x-coordinate",
          "workingLatex": "x=2+4=6",
          "explanation": "The point moves 4 to the right, so its new $x$-value is $2+4=6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Keep the y-coordinate",
          "workingLatex": "y=5",
          "explanation": "A horizontal translation does not change heights, so $y$ stays as 5.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "(6,5)",
          "explanation": "This is the position of the transformed point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(6,5)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": ["image of a point", "stretch"],
    "questionText": "The point $(3,-2)$ lies on $y=f(x)$. State the coordinates of its image on $y=2f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=2f(x)",
          "explanation": "Multiplying the function by 2 is a vertical stretch with scale factor 2.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the effect on a point",
          "workingLatex": "(p,q) \\;\\to\\; (p,\\,2q)",
          "explanation": "A vertical stretch keeps the $x$-coordinate fixed and multiplies the $y$-coordinate by the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the original point",
          "workingLatex": "(p,q)=(3,-2)",
          "explanation": "We start from the given point on $y=f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Keep the x-coordinate",
          "workingLatex": "x=3",
          "explanation": "A vertical stretch does not move points sideways, so $x$ stays as 3.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the y-coordinate by 2",
          "workingLatex": "y=2\\times(-2)=-4",
          "explanation": "The height doubles, and doubling $-2$ gives $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "(3,-4)",
          "explanation": "This is the position of the transformed point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,-4)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["image of a point", "stretch"],
    "questionText": "The point $(6,4)$ lies on $y=f(x)$. State the coordinates of its image on $y=f(2x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=f(2x)",
          "explanation": "Multiplying $x$ by 2 inside the function is a horizontal stretch with scale factor $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the effect on a point",
          "workingLatex": "(p,q) \\;\\to\\; \\left(\\tfrac{p}{2},\\,q\\right)",
          "explanation": "A horizontal stretch of scale factor $\\tfrac{1}{2}$ halves the $x$-coordinate while leaving the height unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the original point",
          "workingLatex": "(p,q)=(6,4)",
          "explanation": "We start from the given point on $y=f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the x-coordinate by 2",
          "workingLatex": "x=\\dfrac{6}{2}=3",
          "explanation": "The horizontal stretch factor $\\tfrac{1}{2}$ means the $x$-value halves, giving $6\\div 2=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Keep the y-coordinate",
          "workingLatex": "y=4",
          "explanation": "A horizontal stretch does not change heights, so $y$ stays as 4.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "(3,4)",
          "explanation": "This is the position of the transformed point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,4)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": ["image of a point", "reflection"],
    "questionText": "The point $(-1,7)$ lies on $y=f(x)$. State the coordinates of its image on $y=-f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=-f(x)",
          "explanation": "Multiplying the whole function by $-1$ is a reflection in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the effect on a point",
          "workingLatex": "(p,q) \\;\\to\\; (p,\\,-q)",
          "explanation": "A reflection in the $x$-axis keeps the $x$-coordinate but changes the sign of the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the original point",
          "workingLatex": "(p,q)=(-1,7)",
          "explanation": "We start from the given point on $y=f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Keep the x-coordinate",
          "workingLatex": "x=-1",
          "explanation": "A reflection in the $x$-axis does not move points sideways, so $x$ stays as $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Change the sign of the y-coordinate",
          "workingLatex": "y=-7",
          "explanation": "Flipping across the $x$-axis turns the height $7$ into $-7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "(-1,-7)",
          "explanation": "This is the position of the transformed point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-1,-7)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": ["image of a point", "reflection"],
    "questionText": "The point $(4,3)$ lies on $y=f(x)$. State the coordinates of its image on $y=f(-x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=f(-x)",
          "explanation": "Replacing $x$ with $-x$ inside the function is a reflection in the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the effect on a point",
          "workingLatex": "(p,q) \\;\\to\\; (-p,\\,q)",
          "explanation": "A reflection in the $y$-axis changes the sign of the $x$-coordinate but keeps the height the same.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the original point",
          "workingLatex": "(p,q)=(4,3)",
          "explanation": "We start from the given point on $y=f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Change the sign of the x-coordinate",
          "workingLatex": "x=-4",
          "explanation": "Flipping across the $y$-axis turns the $x$-value $4$ into $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Keep the y-coordinate",
          "workingLatex": "y=3",
          "explanation": "A reflection in the $y$-axis does not change heights, so $y$ stays as 3.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image",
          "workingLatex": "(-4,3)",
          "explanation": "This is the position of the transformed point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-4,3)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": ["graph transformations", "translation"],
    "questionText": "The curve $y=x^2$ is translated by the vector $\\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$. Write the equation of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the vector",
          "workingLatex": "\\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix} \\Rightarrow \\text{1 left, 2 up}",
          "explanation": "The top number is the horizontal shift and the bottom number is the vertical shift, so this moves the curve 1 left and 2 up.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the base function",
          "workingLatex": "f(x)=x^2",
          "explanation": "The original curve is $y=x^2$, so this is the $f(x)$ we translate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the translation rules",
          "workingLatex": "y=f(x+a)+b \\;\\Rightarrow\\; a \\text{ left}, \\; b \\text{ up}",
          "explanation": "A shift left by $a$ replaces $x$ with $x+a$, and a shift up by $b$ adds $b$ outside the function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the horizontal shift",
          "workingLatex": "y=(x+1)^2",
          "explanation": "Moving 1 to the left replaces $x$ with $x+1$ inside the square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the vertical shift",
          "workingLatex": "y=(x+1)^2+2",
          "explanation": "Moving 2 up adds 2 to the whole expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the new equation",
          "workingLatex": "y=(x+1)^2+2",
          "explanation": "This is the equation of the translated curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x+1)^2+2$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["graph transformations", "translation", "minimum point"],
    "questionText": "State the coordinates of the minimum point of $y=(x-3)^2+5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form",
          "workingLatex": "y=(x-3)^2+5",
          "explanation": "This is a transformation of $y=x^2$, whose lowest point is a minimum, so the curve is a positive parabola with one minimum point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the fact that a square is non-negative",
          "workingLatex": "(x-3)^2 \\ge 0",
          "explanation": "Any real number squared is at least zero, so the squared bracket can never make $y$ smaller than its constant part.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find where the square is smallest",
          "workingLatex": "(x-3)^2=0 \\;\\Rightarrow\\; x=3",
          "explanation": "The squared term reaches its smallest value, zero, exactly when $x-3=0$, giving $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the minimum y-value",
          "workingLatex": "y=0+5=5",
          "explanation": "Substituting $x=3$ makes the bracket zero, leaving $y=5$ as the smallest possible height.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check a nearby point",
          "workingLatex": "x=4:\\; y=(4-3)^2+5=1+5=6>5",
          "explanation": "Testing a value either side gives a larger $y$, confirming $x=3$ really does give the lowest point rather than a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the minimum point",
          "workingLatex": "(3,5)",
          "explanation": "The lowest point of the curve is therefore at these coordinates.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,5)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": ["graph transformations", "translation", "asymptotes"],
    "questionText": "The curve $y=\\dfrac{1}{x}$ has asymptotes $x=0$ and $y=0$. State the equations of the asymptotes of $y=\\dfrac{1}{x}+4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=\\dfrac{1}{x}+4",
          "explanation": "Adding 4 outside the function is a vertical translation of 4 units up.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the original asymptotes",
          "workingLatex": "x=0 \\quad \\text{and} \\quad y=0",
          "explanation": "The starting curve $y=\\tfrac{1}{x}$ approaches the $y$-axis and the $x$-axis, so its asymptotes are $x=0$ and $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consider the vertical asymptote",
          "workingLatex": "x=0",
          "explanation": "A vertical translation moves points up and down but never sideways, so the vertical asymptote $x=0$ stays exactly where it is.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider the horizontal asymptote",
          "workingLatex": "y=0 \\;\\to\\; y=0+4",
          "explanation": "The horizontal asymptote is itself a height, so shifting the whole curve up by 4 lifts it up by 4 as well.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the new horizontal asymptote",
          "workingLatex": "y=4",
          "explanation": "As $x$ grows large, $\\tfrac{1}{x}$ tends to $0$, so $y$ tends to $0+4=4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both asymptotes",
          "workingLatex": "x=0 \\quad \\text{and} \\quad y=4",
          "explanation": "These are the equations of the two asymptotes of the translated curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=0$ and $y=4$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": ["graph transformations", "translation"],
    "questionText": "The curve $y=x^2$ is translated $5$ units down. Write the equation of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original equation",
          "workingLatex": "y=x^2",
          "explanation": "We begin with the parabola $y=x^2$, whose lowest point (vertex) sits at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the transformation",
          "workingLatex": "\\text{translate } 5 \\text{ units down}",
          "explanation": "Moving the whole curve down keeps every $x$-coordinate the same while lowering each height by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the vertical translation rule",
          "workingLatex": "y=f(x)-a \\ \\text{shifts the graph down by } a",
          "explanation": "Subtracting a constant from the output reduces every $y$-value, which pulls the whole graph downwards.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the value of a",
          "workingLatex": "a=5",
          "explanation": "The shift is $5$ units, so the constant we subtract from $f(x)$ is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule to y=x^2",
          "workingLatex": "y=x^2-5",
          "explanation": "Replacing $f(x)$ with $x^2$ and subtracting $5$ lowers the entire parabola by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final equation",
          "workingLatex": "y=x^2-5",
          "explanation": "The shape is unchanged; only the position has moved, so the vertex is now at $(0,-5)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=x^2-5$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": ["graph transformations", "translation", "range"],
    "questionText": "The curve $y=\\cos x$ is translated $2$ units up. Write the equation of the new curve and state its range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original equation and its range",
          "workingLatex": "y=\\cos x, \\qquad -1 \\leqslant \\cos x \\leqslant 1",
          "explanation": "The cosine curve oscillates between a lowest value of $-1$ and a highest value of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the transformation",
          "workingLatex": "\\text{translate } 2 \\text{ units up}",
          "explanation": "Shifting the curve up lifts every point by $2$ without changing its horizontal position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the vertical translation rule",
          "workingLatex": "y=f(x)+a \\ \\text{shifts the graph up by } a",
          "explanation": "Adding a constant to the output raises every $y$-value, moving the whole graph upwards.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule with a=2",
          "workingLatex": "y=\\cos x+2",
          "explanation": "Adding $2$ to $\\cos x$ raises the entire curve by $2$ units.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Adjust the lower bound of the range",
          "workingLatex": "-1+2=1",
          "explanation": "The lowest point of $\\cos x$ was $-1$; raising it by $2$ makes the new minimum $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Adjust the upper bound of the range",
          "workingLatex": "1+2=3",
          "explanation": "The highest point of $\\cos x$ was $1$; raising it by $2$ makes the new maximum $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the new range",
          "workingLatex": "1 \\leqslant y \\leqslant 3",
          "explanation": "The whole curve now sits between $1$ and $3$, so these are the bounds of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final answer",
          "workingLatex": "y=\\cos x+2, \\qquad 1 \\leqslant y \\leqslant 3",
          "explanation": "This gives both the equation of the shifted curve and the interval $1 \\leqslant y \\leqslant 3$ its outputs now cover.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\cos x+2, \\quad \\text{range } 1 \\leqslant y \\leqslant 3$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": ["graph transformations", "image of a point", "translation"],
    "questionText": "The point $(2,8)$ lies on $y=f(x)$. State the coordinates of its image on $y=f(x)-5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the given point",
          "workingLatex": "(2,\\ 8)",
          "explanation": "This point tells us that when the input is $2$, the original function outputs $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the transformation",
          "workingLatex": "y=f(x)-5",
          "explanation": "Subtracting $5$ on the outside of the function shifts the graph vertically downwards by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the effect on a point",
          "workingLatex": "(p,q) \\rightarrow (p,\\ q-5)",
          "explanation": "A vertical shift changes only the height, so the $x$-coordinate stays fixed while the $y$-coordinate drops by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Keep the x-coordinate unchanged",
          "workingLatex": "x=2",
          "explanation": "Since the transformation acts on the output, the input value $2$ is unaffected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Update the y-coordinate",
          "workingLatex": "8-5=3",
          "explanation": "Lowering the height of $8$ by $5$ gives the new $y$-coordinate of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image point",
          "workingLatex": "(2,\\ 3)",
          "explanation": "Combining the unchanged $x$ with the lowered $y$ gives the image of the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,\\ 3)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": ["graph transformations", "image of a point", "stretch"],
    "questionText": "The point $(10,6)$ lies on $y=f(x)$. State the coordinates of its image on $y=\\tfrac{1}{2}f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the given point",
          "workingLatex": "(10,\\ 6)",
          "explanation": "This point tells us the original function reaches a height of $6$ when the input is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the transformation",
          "workingLatex": "y=\\tfrac{1}{2}f(x)",
          "explanation": "Multiplying the whole function by $\\tfrac{1}{2}$ is a vertical stretch with scale factor $\\tfrac{1}{2}$, which halves every height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the effect on a point",
          "workingLatex": "(p,q) \\rightarrow \\left(p,\\ \\tfrac{1}{2}q\\right)",
          "explanation": "A vertical stretch acts on the output only, so $x$ is fixed while $y$ is multiplied by the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Keep the x-coordinate unchanged",
          "workingLatex": "x=10",
          "explanation": "Because the stretch is vertical, the horizontal position $x=10$ of the point does not move.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale the y-coordinate",
          "workingLatex": "\\tfrac{1}{2} \\times 6 = 3",
          "explanation": "Halving the original height of $6$ gives the new $y$-coordinate of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image point",
          "workingLatex": "(10,\\ 3)",
          "explanation": "The image keeps the same $x$ but sits at half the height, giving $(10,\\ 3)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(10,\\ 3)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": ["graph transformations", "image of a point", "stretch"],
    "questionText": "The point $(2,9)$ lies on $y=f(x)$. State the coordinates of its image on $y=f(3x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the given point",
          "workingLatex": "(2,\\ 9)",
          "explanation": "This tells us the original function outputs $9$ when its input is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the transformation",
          "workingLatex": "y=f(3x)",
          "explanation": "A number multiplying $x$ inside the function is a horizontal stretch with scale factor $\\tfrac{1}{a}$, here $\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the effect on a point",
          "workingLatex": "(p,q) \\rightarrow \\left(\\tfrac{p}{a},\\ q\\right)",
          "explanation": "A horizontal change acts on the input, so the $x$-coordinate is divided by $a$ while the height $q$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the value of a",
          "workingLatex": "a=3",
          "explanation": "The coefficient of $x$ inside $f(3x)$ is $3$, so we divide the $x$-coordinate by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale the x-coordinate",
          "workingLatex": "\\dfrac{2}{3}",
          "explanation": "Dividing the original $x$-coordinate $2$ by $3$ gives the new horizontal position $\\tfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Keep the y-coordinate unchanged",
          "workingLatex": "y=9",
          "explanation": "A horizontal stretch does not change heights, so the output remains $9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the image point",
          "workingLatex": "\\left(\\dfrac{2}{3},\\ 9\\right)",
          "explanation": "Combining the compressed $x$ with the unchanged $y$ gives the image of the point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(\\dfrac{2}{3},\\ 9\\right)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["graph transformations", "combined transformations", "vertex", "reflection"],
    "questionText": "The curve $y=x^2$ is reflected in the $x$-axis and then translated $7$ units up. State the coordinates of the turning point of the new curve and whether it is a maximum or minimum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original curve and its turning point",
          "workingLatex": "y=x^2, \\qquad \\text{vertex } (0,\\ 0)",
          "explanation": "The parabola $y=x^2$ opens upwards with its minimum turning point at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the reflection in the x-axis",
          "workingLatex": "y=-x^2",
          "explanation": "Reflecting in the $x$-axis replaces $f(x)$ with $-f(x)$, flipping every point to the opposite side of the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe the effect of the reflection",
          "workingLatex": "\\text{opens downwards, vertex still } (0,\\ 0)",
          "explanation": "The vertex sat on the $x$-axis so it stays put, but the curve now opens downwards instead of upwards.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the translation 7 units up",
          "workingLatex": "y=-x^2+7",
          "explanation": "Shifting up by $7$ adds $7$ to the output, raising the whole reflected curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Track the turning point through the shift",
          "workingLatex": "(0,\\ 0) \\rightarrow (0,\\ 0+7)",
          "explanation": "The vertex moves straight up by $7$, so only its $y$-coordinate changes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the new turning point",
          "workingLatex": "(0,\\ 7)",
          "explanation": "After both transformations the turning point sits at $(0,\\ 7)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Classify the turning point",
          "workingLatex": "\\text{curve opens downwards} \\Rightarrow \\text{maximum}",
          "explanation": "Because the reflection made the parabola open downwards, its turning point $(0,\\ 7)$ is the highest point, a maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,\\ 7), \\ \\text{maximum}$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": ["graph transformations", "image of a point", "combined transformations", "reflection"],
    "questionText": "The point $(5,-4)$ lies on $y=f(x)$. State the coordinates of its image on $y=-f(x)+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the given point",
          "workingLatex": "(5,\\ -4)",
          "explanation": "This tells us the original function outputs $-4$ when the input is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break the transformation into two parts",
          "workingLatex": "y=-f(x)+1",
          "explanation": "The $-f(x)$ reflects in the $x$-axis, and the $+1$ then shifts the result up by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the reflection in the x-axis",
          "workingLatex": "(5,\\ -4) \\rightarrow (5,\\ -(-4)) = (5,\\ 4)",
          "explanation": "Reflecting in the $x$-axis changes the sign of the $y$-coordinate, so $-4$ becomes $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the translation 1 unit up",
          "workingLatex": "(5,\\ 4) \\rightarrow (5,\\ 4+1)",
          "explanation": "Adding $1$ to the output raises the point by one unit while its $x$-coordinate stays fixed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the new y-coordinate",
          "workingLatex": "4+1=5",
          "explanation": "The reflected height of $4$ increased by $1$ gives a final $y$-coordinate of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the image point",
          "workingLatex": "(5,\\ 5)",
          "explanation": "The $x$-coordinate was untouched throughout, so the image is $(5,\\ 5)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(5,\\ 5)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": ["graph transformations", "translation", "asymptotes"],
    "questionText": "The curve $y=\\dfrac{1}{x}$ is translated $3$ units in the positive $x$-direction. Write the equation of the new curve and state the equation of its vertical asymptote.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original curve and its vertical asymptote",
          "workingLatex": "y=\\dfrac{1}{x}, \\qquad \\text{asymptote } x=0",
          "explanation": "The reciprocal curve is undefined at $x=0$, so it has a vertical asymptote along the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the transformation",
          "workingLatex": "\\text{translate } 3 \\text{ in the positive } x\\text{-direction}",
          "explanation": "Moving in the positive $x$-direction shifts the whole curve $3$ units to the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the horizontal translation rule",
          "workingLatex": "y=f(x-a) \\ \\text{shifts the graph right by } a",
          "explanation": "Replacing $x$ with $x-a$ inside the function moves the graph $a$ units to the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule with a=3",
          "workingLatex": "y=\\dfrac{1}{x-3}",
          "explanation": "Substituting $x-3$ in place of $x$ shifts the reciprocal curve $3$ units right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Locate where the new curve is undefined",
          "workingLatex": "x-3=0 \\ \\Rightarrow \\ x=3",
          "explanation": "The curve is undefined where the denominator is zero, which now happens at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the vertical asymptote",
          "workingLatex": "x=3",
          "explanation": "The asymptote moves right with the curve, so it is now the vertical line $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "y=\\dfrac{1}{x-3}, \\qquad x=3",
          "explanation": "This gives both the equation of the shifted curve and its new vertical asymptote $x=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{1}{x-3}, \\quad \\text{asymptote } x=3$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": ["graph transformations", "combined transformations", "stretch", "translation"],
    "questionText": "The curve $y=x^2$ undergoes a vertical stretch of scale factor $2$, followed by a translation $3$ units up. Write the equation of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original equation",
          "workingLatex": "y=x^2",
          "explanation": "We start from the basic parabola $y=x^2$ before applying the two transformations in order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the first transformation",
          "workingLatex": "\\text{vertical stretch, scale factor } 2",
          "explanation": "A vertical stretch multiplies every height by the scale factor $2$, so it acts on the output of the function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the vertical stretch rule",
          "workingLatex": "y=af(x) \\ \\text{is a vertical stretch, scale factor } a",
          "explanation": "Multiplying $f(x)$ by $a$ stretches the graph away from the $x$-axis by the factor $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the stretch with a=2",
          "workingLatex": "y=2x^2",
          "explanation": "Doubling $x^2$ makes the parabola twice as tall at every $x$-value, narrowing its appearance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the second transformation",
          "workingLatex": "\\text{translate } 3 \\text{ units up}",
          "explanation": "This shift is applied after the stretch, so we transform the equation $y=2x^2$ next.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the vertical translation rule",
          "workingLatex": "y=g(x)+a \\ \\text{shifts the graph up by } a",
          "explanation": "Adding a constant to the whole expression raises every point, moving the graph up by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the translation to y=2x^2",
          "workingLatex": "y=2x^2+3",
          "explanation": "Adding $3$ to the stretched curve lifts it $3$ units, so the vertex moves from $(0,0)$ to $(0,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note why the order matters",
          "workingLatex": "\\text{stretch first, then shift}",
          "explanation": "Because the stretch was applied first, the $+3$ is added outside the stretched term rather than being doubled.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final equation",
          "workingLatex": "y=2x^2+3",
          "explanation": "This single equation $y=2x^2+3$ captures both the vertical stretch and the upward shift.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=2x^2+3$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": ["graph transformations", "combined transformations", "translation", "reflection"],
    "questionText": "The curve $y=x^2$ is translated $1$ unit in the positive $x$-direction, then reflected in the $x$-axis. Write the equation of the new curve.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the original equation",
          "workingLatex": "y=x^2",
          "explanation": "We begin with the parabola $y=x^2$ and apply the two transformations in the given order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the first transformation",
          "workingLatex": "\\text{translate } 1 \\text{ in the positive } x\\text{-direction}",
          "explanation": "Moving in the positive $x$-direction shifts the curve $1$ unit to the right, changing the input.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the horizontal translation rule",
          "workingLatex": "y=f(x-a) \\ \\text{shifts the graph right by } a",
          "explanation": "Replacing $x$ with $x-a$ inside the function slides the graph $a$ units right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the translation with a=1",
          "workingLatex": "y=(x-1)^2",
          "explanation": "Substituting $x-1$ for $x$ moves the vertex from $(0,0)$ to $(1,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the second transformation",
          "workingLatex": "\\text{reflect in the } x\\text{-axis}",
          "explanation": "This reflection is applied after the shift, so we now transform the equation $y=(x-1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the reflection rule",
          "workingLatex": "y=-g(x) \\ \\text{reflects the graph in the } x\\text{-axis}",
          "explanation": "Multiplying the whole expression by $-1$ flips every point to the opposite side of the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the reflection to y=(x-1)^2",
          "workingLatex": "y=-(x-1)^2",
          "explanation": "Negating $(x-1)^2$ turns the upward parabola into a downward one with the same vertex.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the resulting curve",
          "workingLatex": "\\text{opens downwards, vertex } (1,\\ 0)",
          "explanation": "The vertex stays at $(1,0)$ because it lies on the $x$-axis, but the curve now opens downwards.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final equation",
          "workingLatex": "y=-(x-1)^2",
          "explanation": "This equation captures both the rightward shift and the reflection in the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-(x-1)^2$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["graph transformations", "combined transformations", "image of a point", "stretch"],
    "questionText": "The point $(4,6)$ lies on $y=f(x)$. State the coordinates of its image on $y=2f(x)-1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the given point",
          "workingLatex": "(4,\\ 6)",
          "explanation": "This tells us the original function outputs $6$ when its input is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break the transformation into two parts",
          "workingLatex": "y=2f(x)-1",
          "explanation": "First $2f(x)$ stretches vertically by scale factor $2$, then the $-1$ shifts the result down by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the order of the two operations",
          "workingLatex": "\\text{stretch first, then translate down}",
          "explanation": "Because the $\\times 2$ multiplies $f(x)$ before the $-1$ is applied, we must stretch the height first and shift afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the vertical stretch rule for a point",
          "workingLatex": "(p,q) \\rightarrow (p,\\ 2q)",
          "explanation": "A vertical stretch of scale factor $2$ leaves $x$ fixed and doubles the height $q$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the stretch",
          "workingLatex": "(4,\\ 6) \\rightarrow (4,\\ 12)",
          "explanation": "Doubling the height $6$ gives $12$, while the $x$-coordinate stays at $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the vertical translation rule for a point",
          "workingLatex": "(p,q) \\rightarrow (p,\\ q-1)",
          "explanation": "Subtracting $1$ lowers the height by one unit without affecting the $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the translation",
          "workingLatex": "(4,\\ 12) \\rightarrow (4,\\ 11)",
          "explanation": "Lowering the stretched height $12$ by $1$ gives a final $y$-coordinate of $11$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the x-coordinate",
          "workingLatex": "x=4",
          "explanation": "Both transformations were vertical, so the horizontal position $x=4$ never moved.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the image point",
          "workingLatex": "(4,\\ 11)",
          "explanation": "Combining the fixed $x$ with the transformed $y$ gives the image $(4,\\ 11)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4,\\ 11)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": ["graph transformations", "combined transformations", "image of a point", "stretch"],
    "questionText": "The point $(8,3)$ lies on $y=f(x)$. State the coordinates of its image on $y=f\\left(\\tfrac{1}{2}x\\right)+2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the given point",
          "workingLatex": "(8,\\ 3)",
          "explanation": "This tells us the original function outputs $3$ when its input is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break the transformation into two parts",
          "workingLatex": "y=f\\left(\\tfrac{1}{2}x\\right)+2",
          "explanation": "First $f\\left(\\tfrac{1}{2}x\\right)$ stretches horizontally, then the $+2$ shifts the result up by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the horizontal stretch rule for a point",
          "workingLatex": "y=f(ax): \\ (p,q) \\rightarrow \\left(\\tfrac{p}{a},\\ q\\right)",
          "explanation": "A factor $a$ multiplying $x$ gives a horizontal stretch of scale factor $\\tfrac{1}{a}$, dividing the $x$-coordinate by $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the value of a",
          "workingLatex": "a=\\tfrac{1}{2}",
          "explanation": "Here $x$ is multiplied by $\\tfrac{1}{2}$, so the horizontal stretch has scale factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the horizontal stretch",
          "workingLatex": "\\dfrac{8}{\\tfrac{1}{2}}=16 \\ \\Rightarrow \\ (8,\\ 3) \\rightarrow (16,\\ 3)",
          "explanation": "Dividing the $x$-coordinate $8$ by $\\tfrac{1}{2}$ doubles it to $16$, while the height stays at $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the vertical translation rule for a point",
          "workingLatex": "(p,q) \\rightarrow (p,\\ q+2)",
          "explanation": "Adding $2$ raises the height by two units without changing the horizontal position.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the translation",
          "workingLatex": "(16,\\ 3) \\rightarrow (16,\\ 5)",
          "explanation": "Raising the height $3$ by $2$ gives a final $y$-coordinate of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check that each transformation acted separately",
          "workingLatex": "\\text{horizontal stretch changed } x, \\ \\text{vertical shift changed } y",
          "explanation": "The stretch only altered the $x$-coordinate and the shift only altered the $y$-coordinate, so the two effects do not interfere.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the image point",
          "workingLatex": "(16,\\ 5)",
          "explanation": "Combining the stretched $x$ with the raised $y$ gives the image $(16,\\ 5)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(16,\\ 5)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "description",
    "tags": ["graph transformations", "combined transformations", "translation"],
    "questionText": "Describe fully the single transformation that maps $y=x^2$ onto $y=(x+2)^2-3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both equations to compare",
          "workingLatex": "y=x^2 \\quad \\rightarrow \\quad y=(x+2)^2-3",
          "explanation": "Comparing $y=x^2$ with $y=(x+2)^2-3$ lets us read off how the input and output have changed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the change inside the function",
          "workingLatex": "x \\rightarrow x+2",
          "explanation": "Inside the bracket $x$ has been replaced by $x+2$, which is a horizontal (input) change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the horizontal translation rule",
          "workingLatex": "y=f(x+a) \\ \\text{shifts the graph left by } a",
          "explanation": "A $+a$ inside the function moves the graph left, which can feel counter-intuitive but keeps the curve satisfying its equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the horizontal shift",
          "workingLatex": "+2 \\ \\text{inside} \\ \\Rightarrow \\ 2 \\text{ left}",
          "explanation": "Since $a=2$, the curve is translated $2$ units to the left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the change outside the function",
          "workingLatex": "-3 \\ \\text{added to the output}",
          "explanation": "The $-3$ sits outside the squared term, so it is a vertical (output) change.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the vertical translation rule",
          "workingLatex": "y=f(x)-a \\ \\text{shifts the graph down by } a",
          "explanation": "Subtracting a constant from the output lowers every point, moving the graph down by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the vertical shift",
          "workingLatex": "-3 \\ \\Rightarrow \\ 3 \\text{ down}",
          "explanation": "Since the constant is $3$, the curve is translated $3$ units down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine into a single translation",
          "workingLatex": "2 \\text{ left and } 3 \\text{ down}",
          "explanation": "A horizontal shift together with a vertical shift combine into one translation described by a single vector $\\dbinom{-2}{-3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the translation as a vector",
          "workingLatex": "\\dbinom{-2}{-3}",
          "explanation": "Left is negative in $x$ and down is negative in $y$, giving the column vector $\\dbinom{-2}{-3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full transformation",
          "workingLatex": "\\text{translation by } \\dbinom{-2}{-3}",
          "explanation": "This single translation completely describes how $y=x^2$ maps onto the new curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Translation by the vector } \\dbinom{-2}{-3} \\ (2 \\text{ left and } 3 \\text{ down})$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": ["graph transformations", "combined transformations", "stretch", "vertex"],
    "questionText": "The curve $y=x^2$ is mapped onto $y=3(x-1)^2$. Describe the transformations and state the coordinates of the new vertex.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write both equations to compare",
          "workingLatex": "y=x^2 \\quad \\rightarrow \\quad y=3(x-1)^2",
          "explanation": "Comparing $y=x^2$ with $y=3(x-1)^2$ lets us separate the change to the input from the change to the output.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the change inside the function",
          "workingLatex": "x \\rightarrow x-1",
          "explanation": "Inside the bracket $x$ has been replaced by $x-1$, which is a horizontal (input) change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the horizontal shift",
          "workingLatex": "y=f(x-a) \\ \\Rightarrow \\ 1 \\text{ right}",
          "explanation": "Replacing $x$ with $x-1$ translates the curve $1$ unit to the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the change outside the function",
          "workingLatex": "\\text{multiplied by } 3",
          "explanation": "The factor $3$ multiplies the whole squared term, so it is a vertical (output) change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the vertical stretch",
          "workingLatex": "y=af(x) \\ \\Rightarrow \\ \\text{vertical stretch, scale factor } 3",
          "explanation": "Multiplying the output by $3$ stretches the graph away from the $x$-axis by a factor of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the original vertex",
          "workingLatex": "(0,\\ 0)",
          "explanation": "The parabola $y=x^2$ has its vertex at the origin, which we now track through the transformations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the horizontal shift to the vertex",
          "workingLatex": "(0,\\ 0) \\rightarrow (1,\\ 0)",
          "explanation": "Shifting $1$ unit right moves the vertex's $x$-coordinate from $0$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the vertical stretch to the vertex",
          "workingLatex": "(1,\\ 0) \\rightarrow (1,\\ 3 \\times 0) = (1,\\ 0)",
          "explanation": "The vertex sits at height $0$, and $3 \\times 0 = 0$, so the stretch leaves it unmoved.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the new vertex",
          "workingLatex": "(1,\\ 0)",
          "explanation": "After both transformations the vertex of the new curve is at $(1,\\ 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full description",
          "workingLatex": "\\text{stretch s.f. } 3 \\text{ and } 1 \\text{ right; vertex } (1,\\ 0)",
          "explanation": "This gives both transformations and the position of the transformed vertex $(1,\\ 0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Vertical stretch scale factor } 3 \\text{ and translation } 1 \\text{ right; vertex } (1,\\ 0)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": ["combined transformations", "completing the square", "turning points", "vertical translation"],
    "questionText": "The function is $f(x)=x^2-4x$. Write the equation of $y=f(x)+5$ and state the coordinates of its minimum point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation applied to f(x)",
          "workingLatex": "y = f(x) + 5",
          "explanation": "Adding a constant outside the function, $f(x)+5$, lifts every output by $5$, so this is a vertical translation upwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation of the transformed curve",
          "workingLatex": "y = x^{2} - 4x + 5",
          "explanation": "We add $5$ to the whole expression for $f(x)$, because the translation acts on the output of the function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prepare to find the minimum by completing the square on f(x)",
          "workingLatex": "f(x) = x^{2} - 4x",
          "explanation": "Completing the square rewrites a quadratic in vertex form, which reveals the turning point directly rather than by guesswork.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Halve the coefficient of x",
          "workingLatex": "-\\dfrac{4}{2} = -2",
          "explanation": "In completing the square we take half of the $x$-coefficient to find the number that goes inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the completed-square form of the quadratic",
          "workingLatex": "x^{2} - 4x = (x-2)^{2} - 4",
          "explanation": "Since $(x-2)^{2}=x^{2}-4x+4$, we subtract $4$ to cancel the extra constant so the expression stays equal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State f(x) in vertex form",
          "workingLatex": "f(x) = (x-2)^{2} - 4",
          "explanation": "This form shows the original curve reaches its lowest value where the squared bracket is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 5 to obtain the transformed curve in vertex form",
          "workingLatex": "y = (x-2)^{2} - 4 + 5 = (x-2)^{2} + 1",
          "explanation": "The vertical shift of $+5$ raises the constant term, moving the whole curve up by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the x-coordinate of the minimum",
          "workingLatex": "(x-2)^{2} = 0 \\implies x = 2",
          "explanation": "A squared term is smallest when it equals zero, which fixes the $x$-value of the minimum point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the y-coordinate of the minimum",
          "workingLatex": "y = 0 + 1 = 1",
          "explanation": "Substituting $x=2$ makes the bracket vanish, leaving only the constant $1$ as the lowest output.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the minimum point",
          "workingLatex": "(2,\\ 1)",
          "explanation": "Combining the two coordinates gives the location of the minimum after the translation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = x^{2} - 4x + 5$; minimum at $(2,\\ 1)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": ["combined transformations", "completing the square", "turning points", "domain and range"],
    "questionText": "The curve $y=x^2$ is transformed to $y=2(x-1)^2+3$. State the coordinates of the vertex and the range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the vertex form of a quadratic",
          "workingLatex": "y = a(x-h)^{2} + k",
          "explanation": "Any quadratic written this way has its vertex at $(h,k)$, so comparing to this template locates the turning point immediately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the given equation to the template",
          "workingLatex": "y = 2(x-1)^{2} + 3",
          "explanation": "Matching terms shows $a=2$, $h=1$ and $k=3$, which describe the stretch and the two translations of $y=x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the transformations from y = x^2",
          "workingLatex": "\\text{right } 1,\\ \\text{stretch } \\times 2,\\ \\text{up } 3",
          "explanation": "The bracket shifts the curve right $1$, the factor $2$ stretches it vertically, and $+3$ lifts it up $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find where the squared term is smallest",
          "workingLatex": "(x-1)^{2} = 0 \\implies x = 1",
          "explanation": "The squared bracket cannot be negative, so its smallest value is zero, giving the $x$-coordinate of the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the y-coordinate of the vertex",
          "workingLatex": "y = 2(0) + 3 = 3",
          "explanation": "Substituting $x=1$ removes the bracket, leaving $y=3$ as the height of the turning point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the vertex",
          "workingLatex": "(1,\\ 3)",
          "explanation": "The vertex is where the parabola turns, found directly from the vertex form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Determine whether the vertex is a minimum or maximum",
          "workingLatex": "a = 2 > 0",
          "explanation": "A positive coefficient means the parabola opens upwards, so the vertex is a minimum point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the fact that the squared term is non-negative",
          "workingLatex": "2(x-1)^{2} \\geq 0",
          "explanation": "Since squaring never gives a negative result, the stretched bracket is always at least zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Deduce the smallest possible value of y",
          "workingLatex": "y = 2(x-1)^{2} + 3 \\geq 3",
          "explanation": "Adding at least zero to $3$ means $y$ can never drop below $3$, which sets the lower bound of the range.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range",
          "workingLatex": "y \\geq 3",
          "explanation": "The curve reaches $3$ at the vertex and rises without limit above it, so all output values are $3$ or more.",
          "diagram": null
        }
      ],
      "finalAnswer": "Vertex $(1,\\ 3)$; range $y \\geq 3$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["vertical translation", "turning points"],
    "questionText": "The curve $y=f(x)$ has a maximum at $(3,10)$ and a minimum at $(-1,-2)$. State the coordinates of the maximum and minimum of $y=f(x)+4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = f(x) + 4",
          "explanation": "Adding $4$ outside the function shifts every point up by $4$, so this is a vertical translation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the effect on coordinates",
          "workingLatex": "(x,\\ y) \\to (x,\\ y+4)",
          "explanation": "A vertical shift leaves each $x$-coordinate unchanged and increases each $y$-coordinate by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the original maximum point",
          "workingLatex": "(3,\\ 10)",
          "explanation": "We transform the known turning points one at a time, starting with the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the shift to the maximum",
          "workingLatex": "(3,\\ 10 + 4) = (3,\\ 14)",
          "explanation": "The $x$-value stays at $3$ while the height rises by $4$ to $14$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the original minimum point",
          "workingLatex": "(-1,\\ -2)",
          "explanation": "We now apply the same rule to the minimum turning point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the shift to the minimum",
          "workingLatex": "(-1,\\ -2 + 4) = (-1,\\ 2)",
          "explanation": "Again the $x$-value is unchanged and the $y$-value increases by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the nature of the turning points is preserved",
          "workingLatex": "\\text{max stays max, min stays min}",
          "explanation": "A pure vertical shift does not flip the curve, so a maximum remains a maximum and a minimum remains a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the new maximum",
          "workingLatex": "\\text{maximum } (3,\\ 14)",
          "explanation": "This is the highest turning point after the translation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the new minimum",
          "workingLatex": "\\text{minimum } (-1,\\ 2)",
          "explanation": "This is the lowest turning point after the translation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $(3,\\ 14)$; minimum $(-1,\\ 2)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["combined transformations", "turning points"],
    "questionText": "The curve $y=f(x)$ has a maximum at $(2,6)$. State the coordinates of the maximum of $y=f(x-3)-1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two transformations",
          "workingLatex": "y = f(x - 3) - 1",
          "explanation": "There are two changes here: a change inside the bracket and a change outside it, so we handle each separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the inside change",
          "workingLatex": "f(x - 3)",
          "explanation": "Replacing $x$ with $x-3$ shifts the curve $3$ to the right, since we need a larger $x$ to reach the same output.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the outside change",
          "workingLatex": "- 1",
          "explanation": "Subtracting $1$ from the whole function lowers every point by $1$, a vertical translation downwards.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the combined effect on a point",
          "workingLatex": "(x,\\ y) \\to (x + 3,\\ y - 1)",
          "explanation": "The horizontal shift adds $3$ to the $x$-coordinate and the vertical shift subtracts $1$ from the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the original maximum",
          "workingLatex": "(2,\\ 6)",
          "explanation": "We transform the known turning point using the rule found above.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the horizontal shift",
          "workingLatex": "x: \\ 2 + 3 = 5",
          "explanation": "Moving the curve right $3$ increases the $x$-coordinate of the maximum from $2$ to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the vertical shift",
          "workingLatex": "y: \\ 6 - 1 = 5",
          "explanation": "Moving the curve down $1$ decreases the height of the maximum from $6$ to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the point is still a maximum",
          "workingLatex": "\\text{translations preserve nature}",
          "explanation": "Translations do not reflect or reshape the curve, so the maximum stays a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the new maximum",
          "workingLatex": "(5,\\ 5)",
          "explanation": "Combining the shifted coordinates gives the location of the maximum after both transformations.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum at $(5,\\ 5)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["vertical stretch", "turning points"],
    "questionText": "The curve $y=f(x)$ has a turning point at $(4,-8)$. State the coordinates of the turning point of $y=\\tfrac{1}{2}f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the form of the transformation",
          "workingLatex": "y = a\\,f(x), \\quad a = \\dfrac{1}{2}",
          "explanation": "A factor multiplying the whole function scales the outputs, which is the signature of a vertical stretch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the vertical stretch",
          "workingLatex": "\\text{vertical stretch, scale factor } \\dfrac{1}{2}",
          "explanation": "Multiplying $f(x)$ by $\\tfrac{1}{2}$ halves the height of every point relative to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the effect on coordinates",
          "workingLatex": "(x,\\ y) \\to \\left(x,\\ \\tfrac{1}{2}y\\right)",
          "explanation": "A vertical stretch keeps each $x$-coordinate the same and multiplies each $y$-coordinate by the scale factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note that x-coordinates are unaffected",
          "workingLatex": "x = 4",
          "explanation": "Because the stretch is vertical, the horizontal position of the turning point does not move.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale the y-coordinate",
          "workingLatex": "y = \\dfrac{1}{2} \\times (-8)",
          "explanation": "We multiply the original height by the scale factor $\\tfrac{1}{2}$ to find the new height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the new y-coordinate",
          "workingLatex": "\\dfrac{1}{2} \\times (-8) = -4",
          "explanation": "Halving $-8$ gives $-4$, so the turning point moves closer to the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the coordinates",
          "workingLatex": "(4,\\ -4)",
          "explanation": "Pairing the unchanged $x$ with the scaled $y$ gives the position of the new turning point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm it is still a turning point",
          "workingLatex": "\\text{stretch preserves turning point}",
          "explanation": "A positive vertical stretch does not flip the curve, so the turning point remains a turning point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(4,\\ -4)",
          "explanation": "This is the turning point of $y=\\tfrac{1}{2}f(x)$ after the vertical stretch.",
          "diagram": null
        }
      ],
      "finalAnswer": "Turning point at $(4,\\ -4)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["horizontal stretch", "roots"],
    "questionText": "The curve $y=f(x)$ crosses the $x$-axis at $x=6$. State the $x$-coordinate where $y=f(2x)$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the crossing point as a root",
          "workingLatex": "f(6) = 0",
          "explanation": "Where a curve crosses the $x$-axis the output is zero, so $x=6$ is a root of $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y = f(2x)",
          "explanation": "Replacing $x$ with $2x$ inside the function is a horizontal change affecting the $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe the horizontal stretch",
          "workingLatex": "\\text{horizontal stretch, scale factor } \\dfrac{1}{2}",
          "explanation": "The form $f(ax)$ stretches horizontally by factor $\\tfrac{1}{a}$; here $a=2$ so distances from the $y$-axis are halved.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the new function equal to zero",
          "workingLatex": "f(2x) = 0",
          "explanation": "The transformed curve crosses the $x$-axis where its output is zero, just as before.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match the argument to the known root",
          "workingLatex": "2x = 6",
          "explanation": "The output is zero when the input to $f$ equals the root $6$, so we set the argument $2x$ equal to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x = \\dfrac{6}{2} = 3",
          "explanation": "Dividing both sides by $2$ gives the new crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the result",
          "workingLatex": "f(2 \\times 3) = f(6) = 0",
          "explanation": "Substituting $x=3$ into $f(2x)$ returns the original root, confirming the curve crosses there.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the effect of the stretch",
          "workingLatex": "6 \\to 3",
          "explanation": "The horizontal stretch factor $\\tfrac{1}{2}$ halves the crossing point, matching the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "x = 3",
          "explanation": "This is where $y=f(2x)$ meets the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["horizontal translation", "roots"],
    "questionText": "The curve $y=f(x)$ crosses the $x$-axis at $x=-3$ and $x=5$. State the $x$-coordinates where $y=f(x+2)$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the crossing points as roots",
          "workingLatex": "f(-3) = 0, \\quad f(5) = 0",
          "explanation": "Each place where the curve meets the $x$-axis is a root of $f$, so these are the inputs that make $f$ zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y = f(x + 2)",
          "explanation": "Replacing $x$ with $x+2$ inside the function is a horizontal translation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the direction of the shift",
          "workingLatex": "\\text{translation left } 2",
          "explanation": "A $+2$ inside the bracket moves the curve left by $2$, because a smaller $x$ now gives the same output.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the new function equal to zero",
          "workingLatex": "f(x + 2) = 0",
          "explanation": "The transformed curve crosses the $x$-axis where its output is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match the argument to the first root",
          "workingLatex": "x + 2 = -3",
          "explanation": "The output is zero when the input to $f$ equals a root, so we set $x+2$ equal to the first root $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the first new root",
          "workingLatex": "x = -3 - 2 = -5",
          "explanation": "Subtracting $2$ shifts the root left, giving the new crossing point at $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Match the argument to the second root",
          "workingLatex": "x + 2 = 5",
          "explanation": "We repeat the process, setting the argument equal to the second root $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the second new root",
          "workingLatex": "x = 5 - 2 = 3",
          "explanation": "Subtracting $2$ again gives the second crossing point at $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answers",
          "workingLatex": "x = -5, \\quad x = 3",
          "explanation": "Both roots have moved left by $2$, which matches the horizontal translation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -5$ and $x = 3$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": ["horizontal stretch", "roots", "combined transformations"],
    "questionText": "The function is $f(x)=x^2$. Write the equation of $y=f(2x)-1$ and state where it meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form f(2x) by replacing x with 2x",
          "workingLatex": "f(2x) = (2x)^{2}",
          "explanation": "To apply the inside change we substitute $2x$ wherever $x$ appears in the rule $f(x)=x^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the squared bracket",
          "workingLatex": "(2x)^{2} = 4x^{2}",
          "explanation": "Squaring both the $2$ and the $x$ gives $4x^{2}$, so the parabola becomes narrower.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the outside change of minus 1",
          "workingLatex": "y = 4x^{2} - 1",
          "explanation": "Subtracting $1$ from the whole function lowers the curve by $1$, giving the final equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set y equal to zero to find x-intercepts",
          "workingLatex": "4x^{2} - 1 = 0",
          "explanation": "The curve meets the $x$-axis where its height is zero, so we solve this equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the squared term",
          "workingLatex": "4x^{2} = 1",
          "explanation": "Adding $1$ to both sides gathers the variable term on one side ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to make x^2 the subject",
          "workingLatex": "x^{2} = \\dfrac{1}{4}",
          "explanation": "Dividing both sides by $4$ leaves $x^{2}$ alone so we can take a square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root of both sides",
          "workingLatex": "x = \\pm\\sqrt{\\dfrac{1}{4}} = \\pm\\dfrac{1}{2}",
          "explanation": "A square root gives two values, one positive and one negative, because both square to $\\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "List the crossing points",
          "workingLatex": "x = \\dfrac{1}{2}, \\quad x = -\\dfrac{1}{2}",
          "explanation": "These symmetric values are where the narrowed, lowered parabola cuts the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final results",
          "workingLatex": "y = 4x^{2} - 1; \\quad x = \\pm\\dfrac{1}{2}",
          "explanation": "This gives both the transformed equation and where it meets the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 4x^{2} - 1$; meets the $x$-axis at $x = \\dfrac{1}{2}$ and $x = -\\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "interval",
    "tags": ["vertical translation", "domain and range"],
    "questionText": "The curve $y=f(x)$ has domain $0\\le x\\le 8$ and range $1\\le f(x)\\le 5$. State the domain and range of $y=f(x)+2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = f(x) + 2",
          "explanation": "Adding $2$ outside the function shifts the curve up by $2$, a vertical translation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall which set a vertical shift affects",
          "workingLatex": "\\text{vertical} \\Rightarrow \\text{range}",
          "explanation": "Vertical transformations change the output values (the range) but leave the input values (the domain) untouched.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the domain",
          "workingLatex": "0 \\leq x \\leq 8",
          "explanation": "Because nothing happens to the inputs, the domain is exactly the same as for $f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the original range",
          "workingLatex": "1 \\leq f(x) \\leq 5",
          "explanation": "These are the smallest and largest outputs of $f$, which we now adjust by the shift.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add 2 to each part of the range inequality",
          "workingLatex": "1 + 2 \\leq f(x) + 2 \\leq 5 + 2",
          "explanation": "The shift raises every output by $2$, so we add $2$ to both bounds of the range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the lower bound",
          "workingLatex": "1 + 2 = 3",
          "explanation": "The lowest output rises from $1$ to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the upper bound",
          "workingLatex": "5 + 2 = 7",
          "explanation": "The highest output rises from $5$ to $7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the new range",
          "workingLatex": "3 \\leq y \\leq 7",
          "explanation": "The range has shifted up by $2$ while keeping the same width.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the domain and range together",
          "workingLatex": "0 \\leq x \\leq 8, \\quad 3 \\leq y \\leq 7",
          "explanation": "The domain is unchanged and only the range has moved, as expected for a vertical shift.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain $0 \\leq x \\leq 8$; range $3 \\leq y \\leq 7$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "interval",
    "tags": ["horizontal stretch", "domain and range"],
    "questionText": "The curve $y=f(x)$ has domain $0\\le x\\le 8$ and range $1\\le f(x)\\le 5$. State the domain and range of $y=f(2x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = f(2x)",
          "explanation": "Replacing $x$ with $2x$ inside the function is a horizontal stretch, scale factor $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall which set a horizontal change affects",
          "workingLatex": "\\text{horizontal} \\Rightarrow \\text{domain}",
          "explanation": "Horizontal transformations change the input values (the domain) but leave the output values (the range) untouched.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the range",
          "workingLatex": "1 \\leq y \\leq 5",
          "explanation": "Since the outputs of $f$ are unchanged by a horizontal stretch, the range stays the same.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the condition on the argument",
          "workingLatex": "0 \\leq 2x \\leq 8",
          "explanation": "The function $f$ only accepts inputs in $[0,8]$, so the argument $2x$ must lie in that interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide each part by 2",
          "workingLatex": "\\dfrac{0}{2} \\leq x \\leq \\dfrac{8}{2}",
          "explanation": "Dividing the whole inequality by $2$ isolates $x$ to find the allowed input values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the bounds",
          "workingLatex": "0 \\leq x \\leq 4",
          "explanation": "The domain has been squeezed by the horizontal stretch to half its original width.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the new domain",
          "workingLatex": "0 \\leq x \\leq 4",
          "explanation": "This is the set of $x$-values for which $f(2x)$ is defined.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the stretch factor is consistent",
          "workingLatex": "8 \\to 4 \\ (\\times \\tfrac{1}{2})",
          "explanation": "The domain endpoint has been multiplied by $\\tfrac{1}{2}$, matching a horizontal stretch of scale factor $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the domain and range together",
          "workingLatex": "0 \\leq x \\leq 4, \\quad 1 \\leq y \\leq 5",
          "explanation": "Only the domain has changed, exactly as expected for a horizontal transformation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain $0 \\leq x \\leq 4$; range $1 \\leq y \\leq 5$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "interval",
    "tags": ["vertical stretch", "domain and range"],
    "questionText": "The curve $y=f(x)$ has domain $-2\\le x\\le 6$ and range $0\\le f(x)\\le 4$. State the domain and range of $y=3f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = 3\\,f(x)",
          "explanation": "Multiplying the whole function by $3$ is a vertical stretch, scale factor $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall which set a vertical stretch affects",
          "workingLatex": "\\text{vertical} \\Rightarrow \\text{range}",
          "explanation": "Vertical transformations change the output values (the range) but leave the input values (the domain) untouched.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the domain",
          "workingLatex": "-2 \\leq x \\leq 6",
          "explanation": "Since the inputs are unaffected by a vertical stretch, the domain is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the original range",
          "workingLatex": "0 \\leq f(x) \\leq 4",
          "explanation": "These are the smallest and largest outputs of $f$, which we now scale.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply each part of the range by 3",
          "workingLatex": "3 \\times 0 \\leq 3f(x) \\leq 3 \\times 4",
          "explanation": "The stretch multiplies every output by $3$, so we scale both bounds of the range by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the lower bound",
          "workingLatex": "3 \\times 0 = 0",
          "explanation": "Three times zero is still zero, so the lower bound stays at $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the upper bound",
          "workingLatex": "3 \\times 4 = 12",
          "explanation": "The highest output rises from $4$ to $12$ under the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the new range",
          "workingLatex": "0 \\leq y \\leq 12",
          "explanation": "The range has been stretched to three times its original height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the domain and range together",
          "workingLatex": "-2 \\leq x \\leq 6, \\quad 0 \\leq y \\leq 12",
          "explanation": "The domain is unchanged and only the range has stretched, as expected for a vertical stretch.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain $-2 \\leq x \\leq 6$; range $0 \\leq y \\leq 12$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "interval",
    "tags": ["horizontal translation", "domain and range"],
    "questionText": "The curve $y=f(x)$ has domain $-2\\le x\\le 6$ and range $0\\le f(x)\\le 4$. State the domain and range of $y=f(x-1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y = f(x - 1)",
          "explanation": "Replacing $x$ with $x-1$ inside the function is a horizontal translation right by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall which set a horizontal shift affects",
          "workingLatex": "\\text{horizontal} \\Rightarrow \\text{domain}",
          "explanation": "Horizontal transformations change the input values (the domain) but leave the output values (the range) untouched.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the range",
          "workingLatex": "0 \\leq y \\leq 4",
          "explanation": "Because the outputs of $f$ are unchanged by a horizontal shift, the range stays the same.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the condition on the argument",
          "workingLatex": "-2 \\leq x - 1 \\leq 6",
          "explanation": "The function $f$ only accepts inputs in $[-2,6]$, so the argument $x-1$ must lie in that interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add 1 to each part of the inequality",
          "workingLatex": "-2 + 1 \\leq x \\leq 6 + 1",
          "explanation": "Adding $1$ throughout isolates $x$ to reveal the allowed input values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the lower bound",
          "workingLatex": "-2 + 1 = -1",
          "explanation": "The left endpoint moves right from $-2$ to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the upper bound",
          "workingLatex": "6 + 1 = 7",
          "explanation": "The right endpoint moves right from $6$ to $7$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the new domain",
          "workingLatex": "-1 \\leq x \\leq 7",
          "explanation": "The whole domain has shifted right by $1$, keeping its width of $8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the domain and range together",
          "workingLatex": "-1 \\leq x \\leq 7, \\quad 0 \\leq y \\leq 4",
          "explanation": "Only the domain has moved, exactly as expected for a horizontal translation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain $-1 \\leq x \\leq 7$; range $0 \\leq y \\leq 4$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": ["horizontal stretch", "combined transformations"],
    "questionText": "The curve $y=x^2$ is transformed to $y=(3x)^2$. Describe the transformation as a horizontal stretch, and state the image of the point $(3,9)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the new curve in function form",
          "workingLatex": "y = (3x)^{2} = f(3x), \\quad f(x) = x^{2}",
          "explanation": "Recognising the curve as $f(3x)$ lets us read off the transformation from the standard rules.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for f(ax)",
          "workingLatex": "f(ax): \\text{ horizontal stretch, scale factor } \\dfrac{1}{a}",
          "explanation": "A multiplier inside the function stretches the graph horizontally by the reciprocal of that multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the value of a",
          "workingLatex": "a = 3",
          "explanation": "Comparing $(3x)^{2}$ with $f(3x)$ shows the inside multiplier is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the scale factor",
          "workingLatex": "\\dfrac{1}{a} = \\dfrac{1}{3}",
          "explanation": "The scale factor is the reciprocal of $3$, so the curve is stretched horizontally by $\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the transformation",
          "workingLatex": "\\text{horizontal stretch, scale factor } \\dfrac{1}{3}",
          "explanation": "This compresses the parabola towards the $y$-axis, making it narrower.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the effect on a point",
          "workingLatex": "(x,\\ y) \\to \\left(\\tfrac{1}{3}x,\\ y\\right)",
          "explanation": "A horizontal stretch multiplies each $x$-coordinate by the scale factor and leaves the $y$-coordinate unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply it to the x-coordinate of the point",
          "workingLatex": "x: \\ 3 \\times \\dfrac{1}{3} = 1",
          "explanation": "The point moves closer to the $y$-axis, its $x$-coordinate shrinking from $3$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Keep the y-coordinate and verify",
          "workingLatex": "(3 \\times 1)^{2} = 9",
          "explanation": "The height stays $9$; substituting $x=1$ into $(3x)^{2}$ confirms the point lies on the new curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the image",
          "workingLatex": "(1,\\ 9)",
          "explanation": "This is where the original point $(3,9)$ lands after the horizontal stretch.",
          "diagram": null
        }
      ],
      "finalAnswer": "Horizontal stretch, scale factor $\\dfrac{1}{3}$; image $(1,\\ 9)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": ["combined transformations", "point of inflection"],
    "questionText": "The function is $f(x)=x^3$. Write the equation of $y=f(x-2)+1$ and state the coordinates of its point of inflection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form f(x - 2) by replacing x with x - 2",
          "workingLatex": "f(x - 2) = (x - 2)^{3}",
          "explanation": "To apply the inside change we substitute $x-2$ wherever $x$ appears in the rule $f(x)=x^{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the outside change of plus 1",
          "workingLatex": "y = (x - 2)^{3} + 1",
          "explanation": "Adding $1$ to the whole function lifts the curve up by $1$, giving the final equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the transformations",
          "workingLatex": "\\text{right } 2, \\ \\text{up } 1",
          "explanation": "The $-2$ inside the bracket shifts the curve right $2$ and the $+1$ outside shifts it up $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the point of inflection of y = x^3",
          "workingLatex": "(0,\\ 0)",
          "explanation": "The basic cubic $y=x^{3}$ has its point of inflection at the origin, where its curvature changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note that translations preserve the inflection",
          "workingLatex": "\\text{translation keeps inflection}",
          "explanation": "Shifting the curve does not change its shape, so the point of inflection simply moves with it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the horizontal shift to the inflection point",
          "workingLatex": "x: \\ 0 + 2 = 2",
          "explanation": "Moving the curve right $2$ increases the $x$-coordinate of the inflection from $0$ to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the vertical shift to the inflection point",
          "workingLatex": "y: \\ 0 + 1 = 1",
          "explanation": "Moving the curve up $1$ increases the $y$-coordinate of the inflection from $0$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the point of inflection",
          "workingLatex": "(2,\\ 1)",
          "explanation": "Combining the shifted coordinates gives the inflection point of the transformed cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final results",
          "workingLatex": "y = (x - 2)^{3} + 1; \\quad \\text{inflection } (2,\\ 1)",
          "explanation": "This gives both the transformed equation and the location of its point of inflection.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = (x - 2)^{3} + 1$; point of inflection $(2,\\ 1)$"
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "equation",
    "tags": ["combined transformations", "asymptotes", "translations"],
    "questionText": "The curve $y=\\dfrac{1}{x}$ is translated 3 units up. Write the equation of the new curve and state the equations of both asymptotes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the base curve and its asymptotes",
          "workingLatex": "y=\\dfrac{1}{x} \\quad\\Rightarrow\\quad x=0,\\; y=0",
          "explanation": "The reciprocal curve $y=\\dfrac{1}{x}$ never touches either axis, so it has a vertical asymptote at $x=0$ and a horizontal asymptote at $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for a vertical translation",
          "workingLatex": "y=f(x)+c \\text{ shifts the graph } c \\text{ units up}",
          "explanation": "Adding a constant to the whole function raises every output by the same amount, so the entire graph slides straight up by $c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply a translation of 3 units up",
          "workingLatex": "y=\\dfrac{1}{x}+3",
          "explanation": "Moving the curve up by $3$ means we add $3$ to the output, which is why the $+3$ appears outside the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider the effect on the vertical asymptote",
          "workingLatex": "x=0 \\text{ is unchanged}",
          "explanation": "A vertical shift moves points only up and down, so the vertical asymptote at $x=0$ stays exactly where it was.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider the effect on the horizontal asymptote",
          "workingLatex": "y=0 \\;\\longrightarrow\\; y=0+3=3",
          "explanation": "The horizontal asymptote is itself a horizontal line, so lifting the graph up by $3$ raises the asymptote from $y=0$ to $y=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the horizontal asymptote by limiting behaviour",
          "workingLatex": "\\text{as } x\\to\\pm\\infty,\\; \\dfrac{1}{x}\\to 0,\\; y\\to 3",
          "explanation": "For large $|x|$ the fraction $\\dfrac{1}{x}$ shrinks towards $0$, so $y$ settles towards $3$, confirming the line $y=3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the vertical asymptote",
          "workingLatex": "\\text{as } x\\to 0,\\; \\dfrac{1}{x}\\to\\pm\\infty",
          "explanation": "Near $x=0$ the fraction becomes unboundedly large, so the curve still hugs the line $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the equation and both asymptotes",
          "workingLatex": "y=\\dfrac{1}{x}+3,\\quad x=0,\\quad y=3",
          "explanation": "Bringing the equation together with both asymptotes gives the full description of the transformed curve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "y=\\dfrac{1}{x}+3",
          "explanation": "This is the required equation, with vertical asymptote $x=0$ and horizontal asymptote $y=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{1}{x}+3$, with asymptotes $x=0$ and $y=3$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": ["combined transformations", "asymptotes", "translations"],
    "questionText": "The curve $y=\\dfrac{1}{x}$ is translated 2 units right and 1 unit down. Write the equation of the new curve and state the equations of both asymptotes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the base curve and its asymptotes",
          "workingLatex": "y=\\dfrac{1}{x} \\quad\\Rightarrow\\quad x=0,\\; y=0",
          "explanation": "The starting curve $y=\\dfrac{1}{x}$ has a vertical asymptote at $x=0$ and a horizontal asymptote at $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for a horizontal translation to the right",
          "workingLatex": "y=f(x-a) \\text{ shifts the graph } a \\text{ units right}",
          "explanation": "Replacing $x$ with $x-a$ delays every output, so the whole graph moves $a$ units to the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the translation of 2 units right",
          "workingLatex": "y=\\dfrac{1}{x-2}",
          "explanation": "To shift $2$ to the right we subtract $2$ from $x$ inside the fraction, giving the denominator $x-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain the counterintuitive minus sign",
          "workingLatex": "x-2=0 \\;\\Rightarrow\\; x=2",
          "explanation": "The point that used to sit at $x=0$ now sits where $x-2=0$, i.e. $x=2$, confirming the move is to the right even though we subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the rule for a vertical translation down",
          "workingLatex": "y=f(x)-c \\text{ shifts the graph } c \\text{ units down}",
          "explanation": "Subtracting a constant from the whole function lowers every point equally, so the graph slides straight down.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the translation of 1 unit down",
          "workingLatex": "y=\\dfrac{1}{x-2}-1",
          "explanation": "Moving down by $1$ means subtracting $1$ from the output, which is why the $-1$ sits outside the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Track the vertical asymptote",
          "workingLatex": "x=0 \\;\\longrightarrow\\; x=2",
          "explanation": "The horizontal shift carries the vertical asymptote with it, moving it from $x=0$ to $x=2$; the vertical shift does not affect it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Track the horizontal asymptote",
          "workingLatex": "y=0 \\;\\longrightarrow\\; y=-1",
          "explanation": "The horizontal asymptote is dragged down by the vertical shift from $y=0$ to $y=-1$; the horizontal shift does not affect it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the horizontal asymptote by limiting behaviour",
          "workingLatex": "\\text{as } x\\to\\pm\\infty,\\; \\dfrac{1}{x-2}\\to 0,\\; y\\to -1",
          "explanation": "For large $|x|$ the fraction tends to $0$, so $y$ tends to $-1$, confirming the asymptote $y=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the equation and both asymptotes",
          "workingLatex": "y=\\dfrac{1}{x-2}-1,\\quad x=2,\\quad y=-1",
          "explanation": "Presenting the equation with both asymptotes gives the complete description of the transformed curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "y=\\dfrac{1}{x-2}-1",
          "explanation": "This is the required equation, with vertical asymptote $x=2$ and horizontal asymptote $y=-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{1}{x-2}-1$, with asymptotes $x=2$ and $y=-1$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "equation",
    "tags": ["combined transformations", "asymptotes", "translations"],
    "questionText": "The curve $y=2^{x}$ has a horizontal asymptote $y=0$. Write the equation of $y=2^{x}+5$, and state its horizontal asymptote and its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the key features of the base curve",
          "workingLatex": "y=2^{x}: \\quad y=0 \\text{ asymptote},\\; (0,1) \\text{ on curve}",
          "explanation": "The exponential $y=2^{x}$ approaches the $x$-axis on the left and passes through $(0,1)$ because $2^{0}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y=2^{x}+5",
          "explanation": "Adding $5$ to the whole function is a vertical translation of $5$ units up, since every output increases by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the equation of the transformed curve",
          "workingLatex": "y=2^{x}+5",
          "explanation": "This is simply the base curve lifted up by $5$, so the equation is written directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the limiting behaviour on the left",
          "workingLatex": "\\text{as } x\\to -\\infty,\\; 2^{x}\\to 0",
          "explanation": "For very negative $x$ the term $2^{x}$ becomes tiny, which is what creates the horizontal asymptote.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the new horizontal asymptote",
          "workingLatex": "y\\to 0+5=5",
          "explanation": "Because the whole graph is lifted by $5$, the asymptote moves up from $y=0$ to $y=5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the y-intercept calculation",
          "workingLatex": "x=0",
          "explanation": "A $y$-intercept occurs where the curve crosses the $y$-axis, which is exactly where $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the exponential term at x=0",
          "workingLatex": "2^{0}=1",
          "explanation": "Any nonzero base raised to the power $0$ equals $1$, so $2^{0}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the y-coordinate",
          "workingLatex": "y=1+5=6",
          "explanation": "Substituting into $y=2^{x}+5$ gives $y=6$ when $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the y-intercept",
          "workingLatex": "(0,6)",
          "explanation": "The curve therefore crosses the $y$-axis at the point $(0,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "y=2^{x}+5,\\quad y=5,\\quad (0,6)",
          "explanation": "The transformed equation is $y=2^{x}+5$, with horizontal asymptote $y=5$ and $y$-intercept $(0,6)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=2^{x}+5$, with asymptote $y=5$ and $y$-intercept $(0,6)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "description",
    "tags": ["modulus graphs", "combined transformations"],
    "questionText": "The function is $f(x)=x^{2}-1$. Describe how to obtain the graph of $y=|f(x)|$ from $y=f(x)$, and state the $x$-coordinates where $y=|x^{2}-1|$ meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find where the original function meets the x-axis",
          "workingLatex": "x^{2}-1=0",
          "explanation": "The roots tell us where $f(x)$ changes sign, which is exactly where the modulus reflection begins and ends.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for the roots",
          "workingLatex": "x^{2}=1 \\;\\Rightarrow\\; x=\\pm 1",
          "explanation": "Taking square roots of both sides gives the two roots $x=-1$ and $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the sign of f between the roots",
          "workingLatex": "f(0)=0^{2}-1=-1<0",
          "explanation": "Testing a point inside the interval shows $f$ is negative between the roots, so this part of the curve dips below the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the sign of f outside the roots",
          "workingLatex": "f(2)=4-1=3>0",
          "explanation": "Testing a point outside the roots shows $f$ is positive there, so those parts already lie above the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the rule for the modulus of a function",
          "workingLatex": "y=|f(x)|",
          "explanation": "The modulus makes every output non-negative, so any part of the curve below the $x$-axis is flipped up above it while parts already above stay put.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the rule to the below-axis part",
          "workingLatex": "-1<x<1: \\text{ reflect } f \\text{ in the } x\\text{-axis}",
          "explanation": "The dip between $x=-1$ and $x=1$ is the only negative part, so it is reflected upwards to become a hump above the axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the unchanged parts",
          "workingLatex": "x\\le -1 \\text{ and } x\\ge 1: \\text{ unchanged}",
          "explanation": "Outside the roots the curve is already non-negative, so the modulus leaves it exactly as it was.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find where the modulus graph meets the x-axis",
          "workingLatex": "|f(x)|=0 \\;\\Leftrightarrow\\; f(x)=0",
          "explanation": "A modulus is zero only when its inside is zero, so $y=|f(x)|$ touches the axis at exactly the same roots as $f$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the intercepts",
          "workingLatex": "x=-1 \\text{ and } x=1",
          "explanation": "Reflecting the negative part upward pins the curve to the axis at the roots, so it meets the $x$-axis at $x=-1$ and $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "\\text{reflect } -1<x<1 \\text{ up};\\quad x=-1,\\; x=1",
          "explanation": "The graph of $y=|x^{2}-1|$ is $y=f(x)$ with the section between $x=-1$ and $x=1$ reflected above the axis, and it meets the $x$-axis at $x=-1$ and $x=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Reflect the part between $x=-1$ and $x=1$ (where $f<0$) up above the $x$-axis; the graph meets the $x$-axis at $x=-1$ and $x=1$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["modulus graphs", "combined transformations"],
    "questionText": "The function is $f(x)=x-3$. Describe the graph of $y=|x-3|$ and state the coordinates of its minimum point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the base line",
          "workingLatex": "y=x-3",
          "explanation": "The function $f(x)=x-3$ is a straight line with gradient $1$, sloping upward from lower left to upper right.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find where the line meets the x-axis",
          "workingLatex": "x-3=0 \\;\\Rightarrow\\; x=3",
          "explanation": "The line crosses the $x$-axis at $x=3$, the point where the sign of $f$ switches.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify where the line is below the x-axis",
          "workingLatex": "x<3 \\;\\Rightarrow\\; x-3<0",
          "explanation": "For values of $x$ less than $3$ the output is negative, so that part of the line lies below the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the modulus rule",
          "workingLatex": "y=|x-3|",
          "explanation": "The modulus forces the output to be non-negative, so the part below the axis is reflected up above it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the reflection to the below-axis part",
          "workingLatex": "x<3: \\text{ reflect the line up}",
          "explanation": "Flipping the negative section upward turns the downward-left arm into an upward-left arm.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the resulting shape",
          "workingLatex": "\\text{two rays meeting at } x=3 \\;\\Rightarrow\\; \\text{V-shape}",
          "explanation": "The right arm (already positive) and the reflected left arm meet to form a symmetric V-shape.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Locate the corner of the V",
          "workingLatex": "x=3: \\; y=|3-3|=0",
          "explanation": "The two arms meet at the root $x=3$, where the height is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Argue this is the minimum",
          "workingLatex": "|x-3|\\ge 0 \\text{ for all } x",
          "explanation": "A modulus can never be negative, so the smallest possible value is $0$, achieved only at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\text{V-shape},\\quad \\text{minimum } (3,0)",
          "explanation": "The graph of $y=|x-3|$ is a V-shape with its lowest point, the minimum, at $(3,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "A V-shape with minimum point $(3,0)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": ["modulus graphs", "combined transformations"],
    "questionText": "The function is $f(x)=x^{2}-2x-3$. For $y=|f(x)|$, state the $x$-coordinates where the graph meets the $x$-axis and the coordinates of the local maximum created by the reflection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic",
          "workingLatex": "x^{2}-2x-3=(x+1)(x-3)",
          "explanation": "Factorising finds the roots quickly, which are where the modulus reflection starts and ends.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the roots",
          "workingLatex": "x=-1 \\text{ and } x=3",
          "explanation": "Setting each factor to zero gives the two roots $x=-1$ and $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the axis of symmetry for the vertex",
          "workingLatex": "x=\\dfrac{-1+3}{2}=1",
          "explanation": "The vertex of a parabola sits midway between its roots, so its $x$-coordinate is the average of $-1$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-coordinate of the vertex",
          "workingLatex": "f(1)=1^{2}-2(1)-3=-4",
          "explanation": "Substituting $x=1$ into $f$ gives the vertex height, $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the vertex of f",
          "workingLatex": "(1,-4)",
          "explanation": "The original parabola has its minimum at $(1,-4)$, which lies below the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the negative part of f",
          "workingLatex": "-1<x<3 \\;\\Rightarrow\\; f(x)<0",
          "explanation": "Between the roots the parabola dips below the $x$-axis, so this is the section the modulus will flip up.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the modulus rule",
          "workingLatex": "y=|f(x)|: \\text{ reflect } -1<x<3 \\text{ up}",
          "explanation": "The modulus reflects the below-axis dip upward, turning the minimum into a peak while leaving the rest unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find where the modulus graph meets the x-axis",
          "workingLatex": "|f(x)|=0 \\;\\Leftrightarrow\\; f(x)=0",
          "explanation": "The reflected curve still touches the axis exactly at the original roots, since the modulus is zero only there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the x-axis intercepts",
          "workingLatex": "x=-1 \\text{ and } x=3",
          "explanation": "The graph of $y=|f(x)|$ meets the $x$-axis at the same two roots, $x=-1$ and $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reflect the vertex to find the new peak",
          "workingLatex": "(1,-4)\\;\\longrightarrow\\;(1,4)",
          "explanation": "Reflecting in the $x$-axis keeps the $x$-coordinate but flips the sign of the $y$-coordinate, so $-4$ becomes $+4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "x=-1,\\; x=3;\\quad \\text{local maximum } (1,4)",
          "explanation": "The graph meets the $x$-axis at $x=-1$ and $x=3$, and the reflected vertex forms a local maximum at $(1,4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Roots $x=-1$ and $x=3$; the vertex $(1,-4)$ reflects to a local maximum at $(1,4)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "equation",
    "tags": ["modulus graphs", "combined transformations"],
    "questionText": "The function is $f(x)=x-2$. Write the equation of $y=f(|x|)$ and state the two points where it meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the given function",
          "workingLatex": "f(x)=x-2",
          "explanation": "We start from the straight line $f(x)=x-2$ before applying the inside modulus.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the modulus into the function",
          "workingLatex": "f(|x|)=|x|-2",
          "explanation": "The notation $f(|x|)$ means replacing every $x$ in the rule with $|x|$, giving $|x|-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the transformed equation",
          "workingLatex": "y=|x|-2",
          "explanation": "This is the equation of the transformed curve, with the modulus acting on the input.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the rule for f(|x|)",
          "workingLatex": "y=f(|x|)",
          "explanation": "The graph keeps the part of $y=f(x)$ for $x\\ge 0$ and reflects it in the $y$-axis, producing a graph symmetric about the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the resulting symmetry",
          "workingLatex": "y(-x)=|-x|-2=|x|-2=y(x)",
          "explanation": "Because replacing $x$ with $-x$ leaves the equation unchanged, the graph is even and mirror-symmetric about the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the x-axis intercept condition",
          "workingLatex": "|x|-2=0",
          "explanation": "The graph meets the $x$-axis where $y=0$, so we solve $|x|-2=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Isolate the modulus",
          "workingLatex": "|x|=2",
          "explanation": "Adding $2$ to both sides leaves the modulus equal to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the modulus equation",
          "workingLatex": "x=2 \\text{ or } x=-2",
          "explanation": "A modulus of $2$ means the value inside is either $+2$ or $-2$, giving two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the intercept points",
          "workingLatex": "(2,0) \\text{ and } (-2,0)",
          "explanation": "The symmetric V-shaped graph crosses the $x$-axis at both $x=2$ and $x=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "y=|x|-2,\\quad x=2,\\; x=-2",
          "explanation": "The equation is $y=|x|-2$, and it meets the $x$-axis at the points $(2,0)$ and $(-2,0)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=|x|-2$; it meets the $x$-axis at $x=2$ and $x=-2$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["combined transformations", "translations", "order of transformations"],
    "questionText": "The curve $y=f(x)$ has a maximum at $(2,5)$ and crosses the $x$-axis at $(-1,0)$ and $(4,0)$. For $y=f(x+1)$, state the coordinates of the new maximum and the new roots.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the transformation",
          "workingLatex": "y=f(x+1)",
          "explanation": "Changing the input from $x$ to $x+1$ is a horizontal translation of the whole graph.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the direction and size of the shift",
          "workingLatex": "y=f(x+1) \\text{ shifts the graph } 1 \\text{ unit left}",
          "explanation": "Adding inside the bracket moves the graph in the negative $x$-direction, so $+1$ shifts it $1$ unit to the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain the counterintuitive direction",
          "workingLatex": "x+1=2 \\;\\Rightarrow\\; x=1",
          "explanation": "A feature that occurred at $x=2$ now occurs where $x+1=2$, i.e. $x=1$, confirming the shift is to the left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note that y-coordinates are unchanged",
          "workingLatex": "\\text{heights unchanged; } x\\to x-1",
          "explanation": "A horizontal translation moves points sideways only, so every $y$-coordinate stays the same while each $x$-coordinate decreases by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Transform the maximum point",
          "workingLatex": "(2,5)\\;\\longrightarrow\\;(1,5)",
          "explanation": "Subtracting $1$ from the $x$-coordinate of the maximum gives its new position, keeping the height $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Transform the first root",
          "workingLatex": "(-1,0)\\;\\longrightarrow\\;(-2,0)",
          "explanation": "The root at $x=-1$ moves $1$ unit left to $x=-2$, staying on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Transform the second root",
          "workingLatex": "(4,0)\\;\\longrightarrow\\;(3,0)",
          "explanation": "The root at $x=4$ moves $1$ unit left to $x=3$, again on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the new roots",
          "workingLatex": "x=-2 \\text{ and } x=3",
          "explanation": "The two crossing points of the shifted curve are at $x=-2$ and $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect all results",
          "workingLatex": "\\text{max } (1,5);\\quad x=-2,\\; x=3",
          "explanation": "Bringing the transformed maximum and roots together describes the new curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "(1,5),\\quad x=-2,\\quad x=3",
          "explanation": "The new maximum is $(1,5)$ and the new roots are $x=-2$ and $x=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum $(1,5)$; roots $x=-2$ and $x=3$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": ["combined transformations", "order of transformations"],
    "questionText": "The curve $y=x^{2}$ is transformed into $y=2(x-3)^{2}+1$. Describe the sequence of transformations in order, and state the coordinates of the vertex.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the base and target curves",
          "workingLatex": "y=x^{2} \\;\\longrightarrow\\; y=2(x-3)^{2}+1",
          "explanation": "Comparing the two equations lets us build the target by changing the base one piece at a time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plan the order of construction",
          "workingLatex": "\\text{inside the bracket} \\to \\text{multiplier} \\to \\text{outside constant}",
          "explanation": "Working from the change to $x$, then the vertical multiplier, then the added constant keeps the transformations in a logical order.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace x with x-3",
          "workingLatex": "y=(x-3)^{2}",
          "explanation": "Subtracting $3$ inside the bracket is the first change to make, acting on the input $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret this change",
          "workingLatex": "\\text{translation } 3 \\text{ units right}",
          "explanation": "Replacing $x$ with $x-3$ shifts the parabola $3$ units to the right, since features now occur at larger $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the counterintuitive direction",
          "workingLatex": "x-3=0 \\;\\Rightarrow\\; x=3",
          "explanation": "The lowest point, previously at $x=0$, now sits where $x-3=0$, i.e. $x=3$, confirming the rightward shift.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the function by 2",
          "workingLatex": "y=2(x-3)^{2}",
          "explanation": "The factor of $2$ multiplies every output, which is the next transformation to apply.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the multiplier",
          "workingLatex": "\\text{vertical stretch, scale factor } 2",
          "explanation": "Multiplying the whole function by $2$ doubles every height, stretching the curve vertically away from the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the vertex height during the stretch",
          "workingLatex": "y=0 \\;\\Rightarrow\\; 2\\times 0=0",
          "explanation": "The vertex currently sits at height $0$, and doubling $0$ leaves it at $0$, so the stretch does not move it yet.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add 1 to the function",
          "workingLatex": "y=2(x-3)^{2}+1",
          "explanation": "Adding $1$ outside completes the target equation and is the final transformation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the added constant",
          "workingLatex": "\\text{translation } 1 \\text{ unit up}",
          "explanation": "Adding $1$ to the whole function lifts every point up by $1$, a vertical translation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the full sequence",
          "workingLatex": "3 \\text{ right} \\to \\text{stretch sf } 2 \\to 1 \\text{ up}",
          "explanation": "Listing the transformations in order gives translation $3$ right, then a vertical stretch of scale factor $2$, then translation $1$ up.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the base vertex",
          "workingLatex": "y=x^{2}: \\text{ vertex } (0,0)",
          "explanation": "The parabola $y=x^{2}$ has its vertex at the origin, which we now track through each transformation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Track the vertex through the shift right",
          "workingLatex": "(0,0)\\;\\longrightarrow\\;(3,0)",
          "explanation": "The rightward translation adds $3$ to the $x$-coordinate, moving the vertex to $(3,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Track the vertex through the stretch and lift",
          "workingLatex": "(3,0)\\;\\to\\;(3,0)\\;\\to\\;(3,1)",
          "explanation": "The stretch leaves the height $0$ unchanged, then the lift of $1$ raises the vertex to $(3,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "3 \\text{ right},\\; \\text{stretch sf } 2,\\; 1 \\text{ up};\\quad \\text{vertex } (3,1)",
          "explanation": "The sequence is translation $3$ right, vertical stretch scale factor $2$, then translation $1$ up, giving the vertex $(3,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation $3$ right, then vertical stretch scale factor $2$, then translation $1$ up; vertex $(3,1)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": ["trigonometric graphs", "combined transformations", "range"],
    "questionText": "Describe the transformations that map $y=\\sin x$ onto $y=3\\sin(2x)+1$, and state the range and the period of $y=3\\sin(2x)+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the base and target curves",
          "workingLatex": "y=\\sin x \\;\\longrightarrow\\; y=3\\sin(2x)+1",
          "explanation": "Comparing the two forms lets us match each number to a specific transformation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the outside multiplier",
          "workingLatex": "y=3\\sin x",
          "explanation": "The factor of $3$ in front of the sine multiplies every output, so we treat it as a vertical change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the multiplier",
          "workingLatex": "\\text{vertical stretch, scale factor } 3",
          "explanation": "Multiplying the whole function by $3$ triples every height, stretching the wave vertically.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the inside multiplier",
          "workingLatex": "y=\\sin(2x)",
          "explanation": "The $2$ multiplying $x$ inside the sine affects the input, so it is a horizontal change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the inside multiplier",
          "workingLatex": "\\text{horizontal stretch, scale factor } \\tfrac{1}{2}",
          "explanation": "Replacing $x$ with $2x$ compresses the graph horizontally by a factor of $\\tfrac{1}{2}$, because the wave completes twice as fast.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the added constant",
          "workingLatex": "y=3\\sin(2x)+1",
          "explanation": "Adding $1$ outside the function raises every point, a vertical translation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full sequence",
          "workingLatex": "\\text{stretch sf } 3 \\to \\text{stretch sf } \\tfrac{1}{2} \\to 1 \\text{ up}",
          "explanation": "Collecting the changes gives a vertical stretch of scale factor $3$, a horizontal stretch of scale factor $\\tfrac{1}{2}$, then a translation $1$ unit up.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the range of the base sine",
          "workingLatex": "-1\\le \\sin x \\le 1",
          "explanation": "The sine function oscillates between $-1$ and $1$, and we build the new range from these bounds.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the vertical stretch to the range",
          "workingLatex": "-3\\le 3\\sin(2x) \\le 3",
          "explanation": "Multiplying the bounds by $3$ triples the amplitude, giving values between $-3$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the vertical translation to the range",
          "workingLatex": "-3+1\\le 3\\sin(2x)+1 \\le 3+1",
          "explanation": "Adding $1$ to every part of the inequality shifts the whole range up by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the range",
          "workingLatex": "-2\\le y \\le 4",
          "explanation": "Simplifying gives the range $-2\\le y\\le 4$ for the transformed curve.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recall the period of the base sine",
          "workingLatex": "\\text{period of } \\sin x = 360^{\\circ}",
          "explanation": "The basic sine curve repeats every $360^{\\circ}$, which the horizontal stretch will change.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply the horizontal stretch to the period",
          "workingLatex": "\\dfrac{360^{\\circ}}{2}=180^{\\circ}",
          "explanation": "A horizontal stretch of scale factor $\\tfrac{1}{2}$ halves the period, so the wave now repeats every $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the period",
          "workingLatex": "\\text{period} = 180^{\\circ}",
          "explanation": "The transformed curve completes a full cycle every $180^{\\circ}$; the $+1$ and vertical stretch do not affect the period.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "\\text{stretch sf } 3,\\; \\text{sf } \\tfrac{1}{2},\\; 1 \\text{ up};\\; -2\\le y\\le 4;\\; 180^{\\circ}",
          "explanation": "The transformations are a vertical stretch scale factor $3$, a horizontal stretch scale factor $\\tfrac{1}{2}$, and a translation $1$ up; the range is $-2\\le y\\le 4$ and the period is $180^{\\circ}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Vertical stretch scale factor $3$, horizontal stretch scale factor $\\dfrac{1}{2}$, translation $1$ up; range $-2\\le y\\le 4$; period $180^{\\circ}$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": ["combined transformations", "order of transformations"],
    "questionText": "The curve $y=f(x)$ passes through the points $(0,1)$, $(2,0)$ and $(4,3)$. State the images of all three points on $y=f(2x)-1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Break the transformation into parts",
          "workingLatex": "y=f(2x)-1",
          "explanation": "The expression combines an inside change $f(2x)$ and an outside change $-1$, so we deal with each separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the inside change",
          "workingLatex": "f(2x): \\text{ horizontal stretch, scale factor } \\tfrac{1}{2}",
          "explanation": "Replacing $x$ with $2x$ compresses the graph horizontally by a factor of $\\tfrac{1}{2}$, so each $x$-coordinate is halved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain the halving of x-coordinates",
          "workingLatex": "(x,y)\\;\\longrightarrow\\;\\left(\\tfrac{x}{2},\\,y\\right)",
          "explanation": "A point reaches the same height at half the input, because $f(2\\cdot\\tfrac{x}{2})=f(x)$, so its $x$-coordinate is divided by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the outside change",
          "workingLatex": "-1: \\text{ translation } 1 \\text{ unit down}",
          "explanation": "Subtracting $1$ from the whole function lowers every point by $1$, a vertical translation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the combined mapping",
          "workingLatex": "(x,y)\\;\\longrightarrow\\;\\left(\\tfrac{x}{2},\\,y-1\\right)",
          "explanation": "Combining both effects, each point has its $x$-coordinate halved and its $y$-coordinate reduced by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Transform the x-coordinate of the first point",
          "workingLatex": "(0,1): \\; \\tfrac{0}{2}=0",
          "explanation": "Halving the $x$-coordinate of $(0,1)$ leaves it at $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Transform the y-coordinate of the first point",
          "workingLatex": "1-1=0 \\;\\Rightarrow\\; (0,0)",
          "explanation": "Subtracting $1$ from the height $1$ gives $0$, so the image is $(0,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Transform the x-coordinate of the second point",
          "workingLatex": "(2,0): \\; \\tfrac{2}{2}=1",
          "explanation": "Halving the $x$-coordinate of $(2,0)$ gives $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Transform the y-coordinate of the second point",
          "workingLatex": "0-1=-1 \\;\\Rightarrow\\; (1,-1)",
          "explanation": "Subtracting $1$ from the height $0$ gives $-1$, so the image is $(1,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Transform the x-coordinate of the third point",
          "workingLatex": "(4,3): \\; \\tfrac{4}{2}=2",
          "explanation": "Halving the $x$-coordinate of $(4,3)$ gives $2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Transform the y-coordinate of the third point",
          "workingLatex": "3-1=2 \\;\\Rightarrow\\; (2,2)",
          "explanation": "Subtracting $1$ from the height $3$ gives $2$, so the image is $(2,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Collect all three images",
          "workingLatex": "(0,0),\\; (1,-1),\\; (2,2)",
          "explanation": "Listing the transformed points shows where the three original points land on the new curve.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "(0,1)\\to(0,0),\\;(2,0)\\to(1,-1),\\;(4,3)\\to(2,2)",
          "explanation": "On $y=f(2x)-1$ the images are $(0,0)$, $(1,-1)$ and $(2,2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,0)$, $(1,-1)$ and $(2,2)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": ["completing the square", "combined transformations", "translations"],
    "questionText": "By completing the square, describe the transformations that map $y=x^{2}$ onto $y=x^{2}+6x+11$, and state the coordinates of the vertex.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the target curve",
          "workingLatex": "y=x^{2}+6x+11",
          "explanation": "Completing the square rewrites this quadratic in a form that reveals the translations directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take half of the coefficient of x",
          "workingLatex": "\\tfrac{1}{2}\\times 6 = 3",
          "explanation": "Halving the $x$-coefficient gives the number that goes inside the bracket when completing the square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the squared bracket",
          "workingLatex": "(x+3)^{2}=x^{2}+6x+9",
          "explanation": "Expanding $(x+3)^{2}$ reproduces the $x^{2}+6x$ but introduces an extra $+9$ that we must correct for.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the quadratic using the bracket",
          "workingLatex": "x^{2}+6x+11=(x+3)^{2}-9+11",
          "explanation": "Replacing $x^{2}+6x$ with $(x+3)^{2}-9$ keeps the expression equal by subtracting the extra $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constants",
          "workingLatex": "-9+11=2",
          "explanation": "Combining the constant terms gives $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the completed-square form",
          "workingLatex": "y=(x+3)^{2}+2",
          "explanation": "This form shows the transformations at a glance: the bracket gives a horizontal shift and the constant a vertical shift.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the bracket",
          "workingLatex": "(x+3): \\text{ translation } 3 \\text{ units left}",
          "explanation": "Adding $3$ inside the bracket moves the parabola $3$ units to the left.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the counterintuitive direction",
          "workingLatex": "x+3=0 \\;\\Rightarrow\\; x=-3",
          "explanation": "The vertex, once at $x=0$, now sits where $x+3=0$, i.e. $x=-3$, confirming the leftward shift.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the constant",
          "workingLatex": "+2: \\text{ translation } 2 \\text{ units up}",
          "explanation": "Adding $2$ outside the bracket lifts the whole curve up by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full sequence",
          "workingLatex": "3 \\text{ left} \\to 2 \\text{ up}",
          "explanation": "The mapping consists of a translation $3$ units left followed by a translation $2$ units up.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the base vertex",
          "workingLatex": "y=x^{2}: \\text{ vertex } (0,0)",
          "explanation": "The parabola $y=x^{2}$ starts with its vertex at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Track the vertex through the translations",
          "workingLatex": "(0,0)\\;\\to\\;(-3,0)\\;\\to\\;(-3,2)",
          "explanation": "Shifting $3$ left then $2$ up moves the vertex to $(-3,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm with the completed-square form",
          "workingLatex": "y=(x+3)^{2}+2 \\;\\Rightarrow\\; \\text{vertex } (-3,2)",
          "explanation": "The minimum of $(x+3)^{2}+2$ occurs when the bracket is zero, giving the vertex $(-3,2)$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "y=(x+3)^{2}+2;\\; 3 \\text{ left},\\; 2 \\text{ up};\\; \\text{vertex } (-3,2)",
          "explanation": "The completed-square form is $y=(x+3)^{2}+2$, giving a translation $3$ left and $2$ up, with vertex $(-3,2)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=(x+3)^{2}+2$; translation $3$ left and $2$ up; vertex $(-3,2)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": ["combined transformations", "asymptotes", "order of transformations"],
    "questionText": "The curve $y=\\dfrac{1}{x}$ is transformed to $C: y=\\dfrac{2}{x+1}-1$. Describe the transformations, state both asymptotes, and give the coordinates of the $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the base and target curves",
          "workingLatex": "y=\\dfrac{1}{x} \\;\\longrightarrow\\; y=\\dfrac{2}{x+1}-1",
          "explanation": "Comparing the two forms lets us identify each transformation and track the asymptotes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the base asymptotes",
          "workingLatex": "y=\\dfrac{1}{x}: \\quad x=0,\\; y=0",
          "explanation": "The reciprocal curve has a vertical asymptote at $x=0$ and a horizontal asymptote at $y=0$, which we will follow through each change.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the vertical stretch",
          "workingLatex": "y=\\dfrac{2}{x}",
          "explanation": "Multiplying the function by $2$ doubles every output, a vertical stretch of scale factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the stretch",
          "workingLatex": "\\text{vertical stretch, scale factor } 2",
          "explanation": "Every height is doubled, but a height of $0$ stays $0$, so the horizontal asymptote is not yet moved.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Replace x with x+1",
          "workingLatex": "y=\\dfrac{2}{x+1}",
          "explanation": "Adding $1$ inside the denominator shifts the graph horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the horizontal shift",
          "workingLatex": "\\text{translation } 1 \\text{ unit left}",
          "explanation": "Replacing $x$ with $x+1$ moves the curve $1$ unit to the left, since features occur at smaller $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract 1 from the function",
          "workingLatex": "y=\\dfrac{2}{x+1}-1",
          "explanation": "Subtracting $1$ outside lowers the whole curve, completing the target equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the vertical shift",
          "workingLatex": "\\text{translation } 1 \\text{ unit down}",
          "explanation": "The $-1$ moves every point down by $1$, a vertical translation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the full sequence",
          "workingLatex": "\\text{stretch sf } 2 \\to 1 \\text{ left} \\to 1 \\text{ down}",
          "explanation": "The transformations are a vertical stretch scale factor $2$, then a translation $1$ left and $1$ down.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Track the vertical asymptote",
          "workingLatex": "x=0 \\;\\longrightarrow\\; x=-1",
          "explanation": "The horizontal shift of $1$ left carries the vertical asymptote from $x=0$ to $x=-1$; the stretch and vertical shift do not affect it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Track the horizontal asymptote",
          "workingLatex": "y=0 \\;\\to\\; y=0 \\;\\to\\; y=-1",
          "explanation": "The stretch leaves the horizontal asymptote at $y=0$, then the downward shift lowers it to $y=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State both asymptotes",
          "workingLatex": "x=-1,\\quad y=-1",
          "explanation": "The transformed curve $C$ has vertical asymptote $x=-1$ and horizontal asymptote $y=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Set up the y-intercept",
          "workingLatex": "x=0",
          "explanation": "The $y$-intercept is found by substituting $x=0$ into the equation of $C$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=\\dfrac{2}{0+1}-1=2-1=1",
          "explanation": "Substituting $x=0$ gives $\\dfrac{2}{1}-1=1$, so the curve crosses the $y$-axis at height $1$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "\\text{stretch sf } 2,\\; 1 \\text{ left},\\; 1 \\text{ down};\\; x=-1,\\; y=-1;\\; (0,1)",
          "explanation": "The transformations are a vertical stretch scale factor $2$ then a translation $1$ left and $1$ down; the asymptotes are $x=-1$ and $y=-1$, and the $y$-intercept is $(0,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Vertical stretch scale factor $2$, translation $1$ left and $1$ down; asymptotes $x=-1$ and $y=-1$; $y$-intercept $(0,1)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "interval",
    "tags": ["range", "combined transformations"],
    "questionText": "The function $y=f(x)$ has range $2\\le f(x)\\le 8$. Find the range of $y=-f(x)+10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given range",
          "workingLatex": "2\\le f(x)\\le 8",
          "explanation": "The range tells us the smallest and largest outputs of $f$, which we transform to find the new range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break the new function into transformations",
          "workingLatex": "y=-f(x)+10",
          "explanation": "The new function applies a reflection $-f(x)$ and then a vertical shift $+10$, so we handle each in turn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the reflection",
          "workingLatex": "-f(x): \\text{ reflection in the } x\\text{-axis}",
          "explanation": "Multiplying the function by $-1$ flips every output to the opposite sign, reflecting the graph in the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the shift",
          "workingLatex": "+10: \\text{ translation } 10 \\text{ units up}",
          "explanation": "Adding $10$ raises every point by $10$, a vertical translation applied after the reflection.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Start from the given inequality",
          "workingLatex": "2\\le f(x)\\le 8",
          "explanation": "We manipulate this inequality step by step to mirror the transformations acting on $f(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply all parts by minus one",
          "workingLatex": "-1\\times 2,\\; -1\\times f(x),\\; -1\\times 8",
          "explanation": "To build $-f(x)$ we multiply every part of the inequality by $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Flip the inequality signs",
          "workingLatex": "-2\\ge -f(x)\\ge -8",
          "explanation": "Multiplying an inequality by a negative number reverses the direction of both inequality signs.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rewrite in increasing order",
          "workingLatex": "-8\\le -f(x)\\le -2",
          "explanation": "Rewriting from smallest to largest makes the bounds clear: $-f(x)$ runs from $-8$ up to $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add ten to all parts",
          "workingLatex": "-8+10\\le -f(x)+10\\le -2+10",
          "explanation": "Applying the $+10$ translation means adding $10$ to every part of the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the lower bound",
          "workingLatex": "-8+10=2",
          "explanation": "The new smallest value of $y$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the upper bound",
          "workingLatex": "-2+10=8",
          "explanation": "The new largest value of $y$ is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the resulting range",
          "workingLatex": "2\\le -f(x)+10\\le 8",
          "explanation": "Combining the bounds gives the range of the transformed function.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the result",
          "workingLatex": "2\\le y\\le 8",
          "explanation": "Interestingly, the reflection and the shift of $10$ cancel out in their effect on the extremes, so the range is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Explain why the range is symmetric here",
          "workingLatex": "\\text{midpoint } \\tfrac{2+8}{2}=5,\\quad 10-5=5",
          "explanation": "The original range is centred on $5$, and reflecting then shifting up by $10$ keeps it centred on $5$, which is why the interval maps onto itself.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "2\\le y\\le 8",
          "explanation": "The range of $y=-f(x)+10$ is $2\\le y\\le 8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $2\\le y\\le 8$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "equation",
    "tags": ["order of transformations", "combined transformations", "quadratic graphs"],
    "questionText": "Show that applying a vertical stretch of scale factor $2$ and then a translation of $3$ units up to the curve $y=x^2$ gives a different curve from applying the translation first and then the stretch. Give both resulting equations.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the starting curve and the two operations.",
          "workingLatex": "y=x^2, \\quad \\text{operations: vertical stretch s.f. } 2 \\text{ and translation } 3 \\text{ up}",
          "explanation": "We have one starting curve and two operations, and the question is whether the final curve depends on the order we do them in.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for a vertical stretch.",
          "workingLatex": "y=f(x) \\;\\longrightarrow\\; y=2f(x)",
          "explanation": "A vertical stretch of scale factor $2$ multiplies every $y$-coordinate by $2$, so it acts on the whole output of the function.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Order A: apply the stretch to y=x^2 first.",
          "workingLatex": "y=2\\left(x^2\\right)=2x^2",
          "explanation": "Multiplying $x^2$ by $2$ pulls the curve away from the $x$-axis, giving a steeper parabola $y=2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the rule for a vertical translation up.",
          "workingLatex": "y=f(x) \\;\\longrightarrow\\; y=f(x)+3",
          "explanation": "A translation of $3$ units up adds $3$ to the output, lifting every point on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Order A: now translate the stretched curve 3 up.",
          "workingLatex": "y=2x^2+3",
          "explanation": "Adding $3$ to $2x^2$ raises the already-stretched parabola, so Order A gives $y=2x^2+3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Order B: start again from the original curve.",
          "workingLatex": "y=x^2",
          "explanation": "To compare fairly we reset to the same starting parabola before applying the operations in the reverse order.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Order B: apply the translation 3 up first.",
          "workingLatex": "y=x^2+3",
          "explanation": "This time we lift the basic parabola $3$ units before doing anything else, giving $y=x^2+3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Order B: now apply the vertical stretch to this curve.",
          "workingLatex": "y=2\\left(x^2+3\\right)",
          "explanation": "The stretch multiplies the entire current output by $2$, and the current output is $x^2+3$, so the whole bracket is doubled.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket to simplify Order B.",
          "workingLatex": "y=2x^2+6",
          "explanation": "Because the stretch acts after the shift, the $+3$ is also doubled to $+6$, giving $y=2x^2+6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the two resulting equations.",
          "workingLatex": "\\text{Order A: } y=2x^2+3 \\qquad \\text{Order B: } y=2x^2+6",
          "explanation": "The two equations have the same $2x^2$ term but different constants, so they are genuinely different curves.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test a single point to confirm the difference.",
          "workingLatex": "x=0:\\; \\text{Order A } y=3, \\quad \\text{Order B } y=6",
          "explanation": "At $x=0$ the curves cross the $y$-axis at different heights, a concrete check that they cannot be the same curve.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain why the order changes the outcome.",
          "workingLatex": "\\text{stretch after shift } \\Rightarrow 2\\times 3 = 6, \\quad \\text{stretch before shift } \\Rightarrow 3 \\text{ unaffected}",
          "explanation": "When the vertical stretch comes after the vertical translation it multiplies the shift as well; when it comes first the later $+3$ is added on untouched.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion.",
          "workingLatex": "2x^2+3 \\neq 2x^2+6 \\Rightarrow \\text{order matters}",
          "explanation": "Since a vertical stretch and a vertical translation do not commute, the order in which they are applied changes the final curve.",
          "diagram": null
        }
      ],
      "finalAnswer": "Stretch then translate gives $y=2x^2+3$; translate then stretch gives $y=2x^2+6$. The equations differ, so the order matters."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": ["horizontal stretch", "combined transformations", "quadratic graphs"],
    "questionText": "The function is $f(x)=x^2$. Write $y=f(2x-6)$ in the form $f\\left(2(x-3)\\right)$, describe it as a horizontal stretch followed by a translation, give the equation of the curve, and state where the curve meets the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out the composed function.",
          "workingLatex": "y=f(2x-6)=(2x-6)^2",
          "explanation": "Since $f$ squares its input, we replace the input of $f$ by $2x-6$, giving $(2x-6)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor the inside expression.",
          "workingLatex": "2x-6=2(x-3)",
          "explanation": "Taking out the coefficient of $x$ rewrites the input in the standard form $a(x-b)$, which makes the separate horizontal operations visible.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the function in factored form.",
          "workingLatex": "y=f\\big(2(x-3)\\big)",
          "explanation": "In this form the number multiplying $x$ controls the stretch and the number subtracted from $x$ controls the shift.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall that horizontal transformations act on the input in the opposite way to what they look like.",
          "workingLatex": "f(ax)\\Rightarrow \\text{stretch s.f. } \\tfrac{1}{a}, \\qquad f(x-b)\\Rightarrow \\text{translate } b \\text{ right}",
          "explanation": "Changes inside the function affect the $x$-direction and are 'inverted', so a factor of $a$ compresses by $\\dfrac{1}{a}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the stretch part first.",
          "workingLatex": "f(x)\\;\\longrightarrow\\; f(2x): \\text{ horizontal stretch s.f. } \\tfrac{1}{2}",
          "explanation": "Replacing $x$ by $2x$ squeezes the curve towards the $y$-axis, halving all horizontal distances.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the translation part second.",
          "workingLatex": "f(2x)\\;\\longrightarrow\\; f\\big(2(x-3)\\big): \\text{ translate } 3 \\text{ right}",
          "explanation": "Once factored, replacing $x$ by $x-3$ shifts the already-stretched curve $3$ units in the positive $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State why the stretch must come before the translation.",
          "workingLatex": "f(2(x-3)) : \\text{stretch s.f. } \\tfrac{1}{2} \\text{ then shift } 3 \\text{ right}",
          "explanation": "Because the factor $2$ sits outside the bracket $(x-3)$, the squeezing happens first and the shift of $3$ is measured after the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the explicit equation of the curve.",
          "workingLatex": "y=(2x-6)^2",
          "explanation": "This is just the composed function written out; it is the equation of the transformed parabola.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set y=0 to find where the curve meets the x-axis.",
          "workingLatex": "(2x-6)^2=0",
          "explanation": "The curve meets the $x$-axis where its height is zero, so we solve the equation with $y$ set to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the square root.",
          "workingLatex": "2x-6=0",
          "explanation": "A squared bracket equals zero only when the bracket itself is zero, and this happens as a single (repeated) case.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x.",
          "workingLatex": "2x=6 \\Rightarrow x=3",
          "explanation": "Rearranging gives the single $x$-value where the parabola touches the axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the repeated root.",
          "workingLatex": "x=3 \\text{ (repeated root)}",
          "explanation": "Because the factor is squared, the curve touches the $x$-axis rather than crossing it, consistent with $3$ right of the original vertex at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the point of contact.",
          "workingLatex": "(3,0)",
          "explanation": "The stretched-and-shifted parabola has its minimum on the $x$-axis at $x=3$, matching the transformations found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=f(2(x-3))$ is a horizontal stretch of scale factor $\\dfrac{1}{2}$ then a translation $3$ units right; the equation is $y=(2x-6)^2$, meeting the $x$-axis at $(3,0)$ (repeated root)."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": ["combined transformations", "turning points", "domain and range"],
    "questionText": "The curve $y=f(x)$ has a minimum at $(-2,-5)$. State the coordinates of the minimum of $y=f(x-1)+4$, and the coordinates of the minimum of $y=2f(x)+1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the known feature of the curve.",
          "workingLatex": "\\text{minimum of } y=f(x) \\text{ at } (-2,-5)",
          "explanation": "Transformations move key points in predictable ways, so we track the minimum point through each change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformations in y=f(x-1)+4.",
          "workingLatex": "f(x-1): \\text{ translate } 1 \\text{ right}, \\qquad +4: \\text{ translate } 4 \\text{ up}",
          "explanation": "Inside the function $x-1$ shifts horizontally, while $+4$ outside shifts vertically; neither reflects or stretches, so a minimum stays a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the horizontal shift to the x-coordinate.",
          "workingLatex": "x: -2 \\;\\longrightarrow\\; -2+1=-1",
          "explanation": "A translation $1$ unit right adds $1$ to the $x$-coordinate of every point, including the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the vertical shift to the y-coordinate.",
          "workingLatex": "y: -5 \\;\\longrightarrow\\; -5+4=-1",
          "explanation": "A translation $4$ units up adds $4$ to the $y$-coordinate of the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the first minimum.",
          "workingLatex": "(-1,-1)",
          "explanation": "Combining the two shifts moves the minimum of $y=f(x-1)+4$ to $(-1,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the transformations in y=2f(x)+1.",
          "workingLatex": "2f(x): \\text{ vertical stretch s.f. } 2, \\qquad +1: \\text{ translate } 1 \\text{ up}",
          "explanation": "The factor $2$ multiplies the output, and the $+1$ then shifts it up; both are vertical, so the $x$-coordinate is untouched.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "The x-coordinate is unchanged.",
          "workingLatex": "x=-2",
          "explanation": "Vertical transformations do not move points sideways, so the minimum keeps $x=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the vertical stretch to the y-coordinate first.",
          "workingLatex": "y: -5 \\;\\longrightarrow\\; 2\\times(-5)=-10",
          "explanation": "The stretch multiplies the height by $2$, so $-5$ becomes $-10$; this must be done before the $+1$ because the stretch acts on the current output.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the vertical translation second.",
          "workingLatex": "y: -10 \\;\\longrightarrow\\; -10+1=-9",
          "explanation": "Adding $1$ after the stretch lifts the stretched minimum by one unit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the second minimum.",
          "workingLatex": "(-2,-9)",
          "explanation": "Combining the stretch and shift places the minimum of $y=2f(x)+1$ at $(-2,-9)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Highlight why the order matters here.",
          "workingLatex": "2\\times(-5)+1=-9 \\neq 2\\times(-5+1)=-8",
          "explanation": "Stretching first and adding after gives $-9$; doing it the other way would give $-8$, so the stated order is essential.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm both points remain minima.",
          "workingLatex": "\\text{s.f. } 2>0 \\Rightarrow \\text{no reflection, minimum stays a minimum}",
          "explanation": "Because the stretch factor is positive there is no flip, so both transformed curves still have minima rather than maxima.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise the two answers.",
          "workingLatex": "f(x-1)+4:\\,(-1,-1), \\qquad 2f(x)+1:\\,(-2,-9)",
          "explanation": "The two minima have been tracked through their respective transformations.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=f(x-1)+4$ has minimum $(-1,-1)$; $y=2f(x)+1$ has minimum $(-2,-9)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": ["reflection", "combined transformations", "quadratic graphs"],
    "questionText": "The curve $y=x^2$ is mapped onto $y=(4-x)^2$. By writing $(4-x)^2$ in another form, describe the single transformation that achieves this, explaining why the reflection is not visible.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the target equation.",
          "workingLatex": "y=(4-x)^2",
          "explanation": "We want the single transformation that carries $y=x^2$ onto this curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Notice the input has a negative x term.",
          "workingLatex": "4-x = -(x-4)",
          "explanation": "Factoring out $-1$ separates a reflection part $(-x)$ from a translation part, so we can see what each piece does.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute this back and square.",
          "workingLatex": "(4-x)^2=\\big(-(x-4)\\big)^2",
          "explanation": "Rewriting the bracket as a negative of $(x-4)$ prepares us to use the fact that squaring removes the sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the fact that squaring removes the sign.",
          "workingLatex": "\\big(-(x-4)\\big)^2=(x-4)^2",
          "explanation": "Since $(-a)^2=a^2$, the minus sign inside disappears once we square, leaving a clean squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the simplified equation.",
          "workingLatex": "y=(x-4)^2",
          "explanation": "The target curve is identical to $(x-4)^2$, a form we recognise immediately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the translation rule.",
          "workingLatex": "y=f(x-a)\\Rightarrow \\text{translate } a \\text{ right}",
          "explanation": "Replacing $x$ by $x-a$ shifts a curve $a$ units in the positive $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the shift.",
          "workingLatex": "a=4 \\Rightarrow \\text{translate } 4 \\text{ units right}",
          "explanation": "Comparing $(x-4)^2$ with $x^2$ shows the parabola has moved its vertex from $x=0$ to $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the single transformation.",
          "workingLatex": "\\text{translation } \\begin{pmatrix}4\\\\0\\end{pmatrix}",
          "explanation": "A single translation of $4$ units right maps $y=x^2$ onto $y=(4-x)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Examine the apparent reflection interpretation.",
          "workingLatex": "y=(4-x)^2=f(-x+4)=f\\big(-(x-4)\\big)",
          "explanation": "Read literally, the $-x$ suggests a reflection in the $y$-axis followed by a translation, so we should check what that reflection does.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test the symmetry of the base curve.",
          "workingLatex": "f(-x)=(-x)^2=x^2=f(x)",
          "explanation": "The parabola $y=x^2$ is symmetric about the $y$-axis, so reflecting it in the $y$-axis leaves it exactly where it was.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the reflection is invisible.",
          "workingLatex": "\\text{reflection in } y\\text{-axis maps } y=x^2 \\text{ onto itself}",
          "explanation": "Because $f(-x)=f(x)$, the reflection produces no visible change, so only the translation remains observable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reconcile the two views.",
          "workingLatex": "\\text{reflection (hidden)} + \\text{translate } 4 \\text{ right} \\equiv \\text{translate } 4 \\text{ right}",
          "explanation": "The hidden reflection and the shift together are equivalent to just the shift, which is why one transformation suffices.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final description.",
          "workingLatex": "y=x^2 \\to y=(x-4)^2 : \\text{ translation } 4 \\text{ right}",
          "explanation": "The single visible transformation is a translation of $4$ units in the positive $x$-direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4-x)^2=(x-4)^2$, so the single transformation is a translation of $4$ units right; the $y$-axis reflection is hidden because $y=x^2$ is symmetric about the $y$-axis."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": ["trigonometric graphs", "combined transformations", "domain and range"],
    "questionText": "The function is $f(x)=\\sin x$ for $0^{\\circ}\\le x\\le 360^{\\circ}$. Describe the transformations giving $y=\\sin(x-30^{\\circ})+2$, state the range, and give the coordinates of the maximum point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the base function and interval.",
          "workingLatex": "f(x)=\\sin x, \\quad 0^{\\circ}\\le x\\le 360^{\\circ}",
          "explanation": "We begin with a standard sine wave that completes one full cycle over the given interval.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the change inside the function.",
          "workingLatex": "\\sin(x-30^{\\circ})",
          "explanation": "The $x-30^{\\circ}$ inside the sine controls a horizontal movement of the wave.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe the horizontal translation.",
          "workingLatex": "f(x-30^{\\circ}): \\text{ translate } 30^{\\circ} \\text{ right}",
          "explanation": "Replacing $x$ by $x-30^{\\circ}$ delays the wave, sliding every feature $30^{\\circ}$ in the positive $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the change outside the function.",
          "workingLatex": "\\sin(x-30^{\\circ})+2",
          "explanation": "The $+2$ added on the outside raises the whole curve vertically.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the vertical translation.",
          "workingLatex": "+2: \\text{ translate } 2 \\text{ up}",
          "explanation": "Adding $2$ to the output lifts the centre line of the wave from $y=0$ to $y=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the descriptions.",
          "workingLatex": "\\text{translate } 30^{\\circ} \\text{ right and } 2 \\text{ up}",
          "explanation": "One change is horizontal and the other vertical, so they act independently and the order does not matter.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the range of the basic sine function.",
          "workingLatex": "-1\\le \\sin(x-30^{\\circ})\\le 1",
          "explanation": "A sine value always lies between $-1$ and $1$ regardless of any horizontal shift.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add 2 to each bound to get the new range.",
          "workingLatex": "-1+2\\le y\\le 1+2",
          "explanation": "The vertical shift adds $2$ to every output value, so we add $2$ to both ends of the range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range.",
          "workingLatex": "1\\le y\\le 3",
          "explanation": "The wave now oscillates between $1$ and $3$; the vertical shift changed the range while the horizontal shift did not.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Locate the maximum of the sine part.",
          "workingLatex": "\\sin(x-30^{\\circ})=1 \\text{ when } x-30^{\\circ}=90^{\\circ}",
          "explanation": "Sine reaches its peak value of $1$ when its argument equals $90^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for the x-coordinate.",
          "workingLatex": "x=90^{\\circ}+30^{\\circ}=120^{\\circ}",
          "explanation": "Adding $30^{\\circ}$ to both sides gives the $x$-value of the peak, consistent with the $30^{\\circ}$ rightward shift.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the maximum lies in the given interval.",
          "workingLatex": "0^{\\circ}\\le 120^{\\circ}\\le 360^{\\circ} \\;\\checkmark",
          "explanation": "The maximum occurs at $x=120^{\\circ}$, which is inside the stated domain, so it is a genuine peak of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the y-coordinate of the maximum.",
          "workingLatex": "y=1+2=3",
          "explanation": "At the peak the sine part is $1$, and adding the vertical shift of $2$ gives a maximum height of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the maximum point.",
          "workingLatex": "(120^{\\circ},\\,3)",
          "explanation": "The highest point of the transformed curve is at $(120^{\\circ},3)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation $30^{\\circ}$ right and $2$ up; range $1\\le y\\le 3$; maximum point $(120^{\\circ},\\,3)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": ["exponential graphs", "reflection", "combined transformations"],
    "questionText": "The curve $y=e^{x}$ has asymptote $y=0$. Write the equation of $y=-e^{x}+3$, and state its asymptote, its $x$-intercept and its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the base curve and its asymptote.",
          "workingLatex": "y=e^x, \\quad \\text{asymptote } y=0",
          "explanation": "The exponential curve approaches the $x$-axis as $x\\to-\\infty$, so its horizontal asymptote is $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the transformed equation.",
          "workingLatex": "y=-e^x+3",
          "explanation": "We analyse this by identifying the reflection and translation built into it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the reflection.",
          "workingLatex": "-e^x: \\text{ reflection in the } x\\text{-axis}",
          "explanation": "The minus sign in front of $e^x$ negates every output, flipping the curve upside down across the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the vertical translation.",
          "workingLatex": "+3: \\text{ translate } 3 \\text{ up}",
          "explanation": "Adding $3$ after the reflection lifts the whole flipped curve upwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Track the asymptote through the reflection.",
          "workingLatex": "y=0 \\;\\longrightarrow\\; y=0",
          "explanation": "Reflecting the line $y=0$ in the $x$-axis leaves it fixed, since it is the axis of reflection itself.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Track the asymptote through the translation.",
          "workingLatex": "y=0 \\;\\longrightarrow\\; y=3",
          "explanation": "The vertical shift of $3$ raises the asymptote to $y=3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the asymptote of the new curve.",
          "workingLatex": "y=3",
          "explanation": "As $x\\to-\\infty$, $e^x\\to0$, so $-e^x+3\\to3$; the curve approaches $y=3$ from below.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set y=0 to find the x-intercept.",
          "workingLatex": "-e^x+3=0",
          "explanation": "The curve crosses the $x$-axis where its height is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange for the exponential.",
          "workingLatex": "e^x=3",
          "explanation": "Moving $e^x$ to the other side isolates the exponential so we can undo it with a logarithm.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take natural logs.",
          "workingLatex": "x=\\ln 3",
          "explanation": "The natural logarithm is the inverse of $e^x$, so it recovers the exponent directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the x-intercept.",
          "workingLatex": "(\\ln 3,\\,0)",
          "explanation": "The curve meets the $x$-axis at $x=\\ln 3\\approx1.10$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set x=0 to find the y-intercept.",
          "workingLatex": "y=-e^0+3",
          "explanation": "The $y$-intercept is the height of the curve when $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate using e^0=1.",
          "workingLatex": "y=-1+3=2",
          "explanation": "Since $e^0=1$, the reflected term is $-1$, and adding $3$ gives $2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the y-intercept.",
          "workingLatex": "(0,\\,2)",
          "explanation": "The curve crosses the $y$-axis at $(0,2)$, below its asymptote at $y=3$ as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-e^x+3$; asymptote $y=3$; $x$-intercept $(\\ln 3,\\,0)$; $y$-intercept $(0,\\,2)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["completing the square", "combined transformations", "quadratic graphs"],
    "questionText": "The function is $f(x)=x^2$. The curve $y=g(x)$ is defined by $g(x)=f(x+2)-3$. Find $g(x)$ in expanded form and state the coordinates of its vertex.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out g using the definition of f.",
          "workingLatex": "g(x)=f(x+2)-3=(x+2)^2-3",
          "explanation": "Since $f$ squares its input, replacing the input by $x+2$ gives $(x+2)^2$, and then we subtract $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the horizontal transformation.",
          "workingLatex": "f(x+2): \\text{ translate } 2 \\text{ left}",
          "explanation": "Replacing $x$ by $x+2$ shifts the parabola $2$ units in the negative $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the vertical transformation.",
          "workingLatex": "-3: \\text{ translate } 3 \\text{ down}",
          "explanation": "Subtracting $3$ from the output lowers the whole curve by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the squared bracket.",
          "workingLatex": "(x+2)^2=x^2+4x+4",
          "explanation": "Multiplying out $(x+2)(x+2)$ gives the standard three-term quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract 3 to complete the expansion.",
          "workingLatex": "g(x)=x^2+4x+4-3",
          "explanation": "We now include the vertical shift by taking $3$ away from the expanded expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the constant.",
          "workingLatex": "g(x)=x^2+4x+1",
          "explanation": "Combining $4-3$ gives the final expanded form of $g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the vertex of the base parabola.",
          "workingLatex": "y=x^2 \\text{ has vertex } (0,0)",
          "explanation": "The untransformed parabola has its lowest point at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the horizontal shift to the vertex.",
          "workingLatex": "x: 0 \\;\\longrightarrow\\; 0-2=-2",
          "explanation": "The translation $2$ units left subtracts $2$ from the vertex's $x$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the vertical shift to the vertex.",
          "workingLatex": "y: 0 \\;\\longrightarrow\\; 0-3=-3",
          "explanation": "The translation $3$ units down subtracts $3$ from the vertex's $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the vertex.",
          "workingLatex": "(-2,\\,-3)",
          "explanation": "Combining both shifts places the vertex of $g$ at $(-2,-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify by completing the square on the expanded form.",
          "workingLatex": "x^2+4x+1=(x+2)^2-4+1",
          "explanation": "Half the coefficient of $x$ is $2$, so we form $(x+2)^2$ and correct the constant to check our vertex.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the completed square.",
          "workingLatex": "=(x+2)^2-3",
          "explanation": "This matches the original transformed form, confirming our expansion is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Read off the vertex from completed-square form.",
          "workingLatex": "(x+2)^2-3 \\Rightarrow \\text{vertex } (-2,-3)",
          "explanation": "A quadratic $a(x-h)^2+k$ has vertex $(h,k)$, so $(x+2)^2-3$ confirms the vertex $(-2,-3)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g(x)=x^2+4x+1$ with vertex $(-2,\\,-3)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": ["vertical stretch", "combined transformations", "domain and range"],
    "questionText": "Curve $A$ is $y=x^2$ and curve $B$ is $y=\\tfrac{1}{2}x^2-4$. Describe the transformations mapping $A$ onto $B$ and state the range of $B$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down both curves.",
          "workingLatex": "A:\\; y=x^2, \\qquad B:\\; y=\\tfrac{1}{2}x^2-4",
          "explanation": "We compare the two equations to see what has changed between them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the coefficient change.",
          "workingLatex": "x^2 \\;\\longrightarrow\\; \\tfrac{1}{2}x^2",
          "explanation": "The output has been multiplied by $\\dfrac{1}{2}$, which is a vertical scaling of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe the vertical stretch.",
          "workingLatex": "\\text{vertical stretch s.f. } \\tfrac{1}{2}",
          "explanation": "Multiplying every $y$-value by $\\dfrac{1}{2}$ halves the height of the curve, making it wider and flatter.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the constant change.",
          "workingLatex": "-4: \\text{ translate } 4 \\text{ down}",
          "explanation": "Subtracting $4$ from the output shifts the whole curve down by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Establish the correct order.",
          "workingLatex": "y=\\tfrac{1}{2}\\left(x^2\\right)-4",
          "explanation": "The $\\dfrac{1}{2}$ multiplies only $x^2$ and the $-4$ is added afterwards, so the stretch is applied first and then the translation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check why the order matters.",
          "workingLatex": "\\tfrac{1}{2}(x^2)-4 \\neq \\tfrac{1}{2}(x^2-4)=\\tfrac{1}{2}x^2-2",
          "explanation": "Translating first would only lower the curve by $2$ after stretching, so the stretch-then-shift order is the correct one.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the combined transformation.",
          "workingLatex": "\\text{vertical stretch s.f. } \\tfrac{1}{2} \\text{ then translate } 4 \\text{ down}",
          "explanation": "These two vertical operations together map curve A onto curve B.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine the shape of B.",
          "workingLatex": "\\text{coefficient } \\tfrac{1}{2}>0 \\Rightarrow \\text{parabola opens upwards}",
          "explanation": "A positive leading coefficient means the curve has a minimum, so its range is bounded below.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Locate the minimum's x-coordinate.",
          "workingLatex": "\\text{vertex at } x=0",
          "explanation": "Neither transformation was horizontal, so the vertex stays on the $y$-axis at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum y-value.",
          "workingLatex": "y=\\tfrac{1}{2}(0)^2-4=-4",
          "explanation": "Substituting $x=0$ gives the lowest point of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the minimum point.",
          "workingLatex": "(0,\\,-4)",
          "explanation": "The vertex has moved from the origin down to $(0,-4)$ because of the translation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Deduce the range.",
          "workingLatex": "y\\ge -4",
          "explanation": "Since the parabola opens upwards from its minimum at $-4$, all output values are at least $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the vertical shift set the range.",
          "workingLatex": "\\text{vertical transformations change the range, not the domain}",
          "explanation": "The downward translation is what fixed the lowest value at $-4$, illustrating that vertical changes control the range.",
          "diagram": null
        }
      ],
      "finalAnswer": "Vertical stretch of scale factor $\\dfrac{1}{2}$ then a translation $4$ units down; range of B is $y\\ge -4$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "interval",
    "tags": ["domain and range", "combined transformations", "vertical stretch"],
    "questionText": "The curve $y=f(x)$ has domain $1\\le x\\le 7$ and range $-3\\le f(x)\\le 5$. Find the domain and range of $y=2f(x-1)+3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the given domain and range.",
          "workingLatex": "1\\le x\\le 7, \\qquad -3\\le f(x)\\le 5",
          "explanation": "The domain is the set of allowed inputs and the range is the set of outputs; each transformation affects one or the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify all three transformations.",
          "workingLatex": "f(x-1): \\text{shift right}, \\quad 2f: \\text{stretch}, \\quad +3: \\text{shift up}",
          "explanation": "Sorting the changes into horizontal and vertical types tells us which affect the domain and which affect the range.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note which change affects the domain.",
          "workingLatex": "f(x-1): \\text{ translate } 1 \\text{ right}",
          "explanation": "Only the horizontal shift $x-1$ moves the input values, so it alone changes the domain.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Shift the lower domain endpoint.",
          "workingLatex": "1 \\;\\longrightarrow\\; 1+1=2",
          "explanation": "A translation $1$ unit right adds $1$ to each $x$-boundary, so the left end moves from $1$ to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Shift the upper domain endpoint.",
          "workingLatex": "7 \\;\\longrightarrow\\; 7+1=8",
          "explanation": "The right boundary similarly moves from $7$ to $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the new domain.",
          "workingLatex": "2\\le x\\le 8",
          "explanation": "The domain has slid one unit to the right; its width is unchanged because there is no horizontal stretch.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note which changes affect the range.",
          "workingLatex": "2f(x)+3: \\text{ vertical stretch s.f. } 2 \\text{ then } +3",
          "explanation": "The vertical stretch and vertical shift both act on the output, so together they reshape the range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the stretch to the lower range value.",
          "workingLatex": "-3 \\;\\longrightarrow\\; 2\\times(-3)=-6",
          "explanation": "The stretch multiplies each output by $2$, so the smallest value $-3$ becomes $-6$ before the shift.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the shift to that value.",
          "workingLatex": "-6+3=-3",
          "explanation": "Adding $3$ after the stretch lifts the lowest value to $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the stretch to the upper range value.",
          "workingLatex": "5 \\;\\longrightarrow\\; 2\\times 5=10",
          "explanation": "The largest output $5$ is doubled to $10$ by the vertical stretch.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the shift to that value.",
          "workingLatex": "10+3=13",
          "explanation": "Adding $3$ raises the top of the range to $13$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the new range.",
          "workingLatex": "-3\\le y\\le 13",
          "explanation": "Because the stretch factor is positive the smaller value stays the lower bound, giving the range $-3$ to $13$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the separation of effects.",
          "workingLatex": "\\text{horizontal shift} \\to \\text{domain}, \\quad \\text{vertical stretch/shift} \\to \\text{range}",
          "explanation": "The horizontal translation changed only the domain and the vertical operations changed only the range, exactly as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "Domain $2\\le x\\le 8$; range $-3\\le y\\le 13$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "coordinates",
    "tags": ["modulus graphs", "combined transformations", "solving equations"],
    "questionText": "The function is $f(x)=|x|$. The curve is $C:\\; y=3|x-2|-4$. Describe the transformations, state the coordinates of the vertex, and solve $3|x-2|-4=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the base function and target curve.",
          "workingLatex": "f(x)=|x|, \\qquad C:\\; y=3|x-2|-4",
          "explanation": "The modulus function is a V-shape with its vertex at the origin; we track how each change moves and reshapes it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inside change.",
          "workingLatex": "|x-2|: \\text{ translate } 2 \\text{ right}",
          "explanation": "Replacing $x$ by $x-2$ inside the modulus shifts the V horizontally $2$ units in the positive $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the multiplying factor.",
          "workingLatex": "3|x-2|: \\text{ vertical stretch s.f. } 3",
          "explanation": "Multiplying the output by $3$ steepens the arms of the V, tripling every height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the outside constant.",
          "workingLatex": "-4: \\text{ translate } 4 \\text{ down}",
          "explanation": "Subtracting $4$ lowers the whole curve by $4$ units.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the full order of transformations.",
          "workingLatex": "\\text{translate } 2 \\text{ right}, \\text{ stretch s.f. } 3, \\text{ translate } 4 \\text{ down}",
          "explanation": "The horizontal shift happens inside, then the vertical stretch, then the vertical shift outside, so this order builds the curve correctly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Start tracking the vertex from the origin.",
          "workingLatex": "\\text{vertex of } |x| \\text{ at } (0,0)",
          "explanation": "The corner point of the V is the key feature to follow through the transformations.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the horizontal shift to the vertex.",
          "workingLatex": "(0,0)\\;\\longrightarrow\\;(2,0)",
          "explanation": "Moving $2$ right sends the corner from $x=0$ to $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the vertical stretch to the vertex.",
          "workingLatex": "(2,0)\\;\\longrightarrow\\;(2,\\,3\\times 0)=(2,0)",
          "explanation": "The stretch multiplies the height by $3$, but the vertex is at height $0$, so it stays put during the stretch.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the vertical shift to the vertex.",
          "workingLatex": "(2,0)\\;\\longrightarrow\\;(2,-4)",
          "explanation": "Lowering the curve $4$ units drops the corner to a height of $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the vertex.",
          "workingLatex": "(2,\\,-4)",
          "explanation": "The lowest point of curve C is its vertex at $(2,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the equation to solve.",
          "workingLatex": "3|x-2|-4=0",
          "explanation": "We want the $x$-values where the curve meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Isolate the modulus.",
          "workingLatex": "3|x-2|=4 \\Rightarrow |x-2|=\\dfrac{4}{3}",
          "explanation": "Adding $4$ and dividing by $3$ leaves the modulus alone so we can split into two cases.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Take the positive case.",
          "workingLatex": "x-2=\\dfrac{4}{3} \\Rightarrow x=2+\\dfrac{4}{3}=\\dfrac{10}{3}",
          "explanation": "A modulus equals a positive number when its inside equals either $+$ or $-$ that number; here the positive case gives $\\dfrac{10}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Take the negative case.",
          "workingLatex": "x-2=-\\dfrac{4}{3} \\Rightarrow x=2-\\dfrac{4}{3}=\\dfrac{2}{3}",
          "explanation": "The negative case gives the other intersection at $x=\\dfrac{2}{3}$, symmetric about the vertex's $x=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Translation $2$ right, vertical stretch s.f. $3$, then translation $4$ down; vertex $(2,\\,-4)$; solutions $x=\\dfrac{10}{3}$ and $x=\\dfrac{2}{3}$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": ["modulus graphs", "odd and even functions", "combined transformations"],
    "questionText": "The function is $f(x)=x^3-2x$. Explain how to obtain the graph of $y=f(|x|)$ from $y=f(x)$, state whether the result is odd or even, and give the value of $y=f(|x|)$ at $x=-2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function.",
          "workingLatex": "f(x)=x^3-2x",
          "explanation": "We will study how replacing the input $x$ by $|x|$ changes the graph.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Consider the effect for non-negative x.",
          "workingLatex": "x\\ge 0: \\; |x|=x \\Rightarrow f(|x|)=f(x)",
          "explanation": "When $x$ is zero or positive the modulus leaves it unchanged, so the graph is identical to $f$ on the right of the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consider the effect for negative x.",
          "workingLatex": "x<0: \\; |x|=-x \\Rightarrow f(|x|)=f(-x)",
          "explanation": "When $x$ is negative the modulus turns it positive, so the left-hand output copies the value from the matching positive input.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Describe the construction.",
          "workingLatex": "\\text{keep } x\\ge 0 \\text{ part of } f, \\text{ reflect it in the } y\\text{-axis}",
          "explanation": "We retain the right-hand branch of $f$ and mirror it across the $y$-axis to create the left-hand branch, discarding the original left part.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Emphasise the original left branch is replaced.",
          "workingLatex": "\\text{original } x<0 \\text{ branch of } f \\text{ is discarded}",
          "explanation": "The values $f$ used to take for negative $x$ play no role; the mirror image of the right branch takes their place.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up a test for symmetry.",
          "workingLatex": "g(x)=f(|x|)",
          "explanation": "To classify the result we compare $g(-x)$ with $g(x)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate g at -x.",
          "workingLatex": "g(-x)=f(|-x|)=f(|x|)",
          "explanation": "Since $|-x|=|x|$, feeding in $-x$ gives exactly the same value as feeding in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with g(x).",
          "workingLatex": "g(-x)=g(x)",
          "explanation": "The outputs at $x$ and $-x$ are equal, which is the defining property of an even function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the symmetry classification.",
          "workingLatex": "g(x)=f(|x|) \\text{ is even}",
          "explanation": "An even function is symmetric about the $y$-axis, matching the mirror-image construction we described.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Begin evaluating at x=-2.",
          "workingLatex": "g(-2)=f(|-2|)",
          "explanation": "We substitute $x=-2$ and first deal with the modulus inside.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the modulus.",
          "workingLatex": "|-2|=2 \\Rightarrow g(-2)=f(2)",
          "explanation": "The modulus of $-2$ is $2$, so the value we need is $f(2)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate f(2).",
          "workingLatex": "f(2)=2^3-2(2)=8-4=4",
          "explanation": "Substituting $x=2$ into $x^3-2x$ gives $4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the value and contrast with f(-2).",
          "workingLatex": "g(-2)=4, \\qquad f(-2)=(-2)^3-2(-2)=-4",
          "explanation": "The value of $y=f(|x|)$ at $x=-2$ is $4$, whereas the original $f(-2)=-4$, showing the left branch really has been replaced.",
          "diagram": null
        }
      ],
      "finalAnswer": "Take the $x\\ge 0$ part of $f$ and reflect it in the $y$-axis; the result is even; at $x=-2$ the value is $f(2)=4$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": ["trigonometric graphs", "combined transformations", "domain and range"],
    "questionText": "Describe the transformations mapping $y=\\cos x$ onto $y=4\\cos\\left(\\tfrac{1}{2}x\\right)$, and state the amplitude, the period and the range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down both curves.",
          "workingLatex": "y=\\cos x \\;\\longrightarrow\\; y=4\\cos\\!\\left(\\tfrac{1}{2}x\\right)",
          "explanation": "We compare the two to see the change outside the cosine and the change inside its argument.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the factor outside the cosine.",
          "workingLatex": "4\\cos(\\cdots): \\text{ vertical stretch s.f. } 4",
          "explanation": "Multiplying the output by $4$ stretches the wave vertically, quadrupling its height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the factor inside the cosine.",
          "workingLatex": "\\cos\\!\\left(\\tfrac{1}{2}x\\right): \\text{ horizontal stretch}",
          "explanation": "The $\\dfrac{1}{2}$ multiplying $x$ scales the wave horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the horizontal scale factor.",
          "workingLatex": "\\text{s.f.}=\\dfrac{1}{1/2}=2",
          "explanation": "A factor $a$ inside gives a horizontal stretch of scale factor $\\dfrac{1}{a}$, so $\\dfrac{1}{2}$ inside means a stretch of scale factor $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the combined transformation.",
          "workingLatex": "\\text{vertical stretch s.f. } 4 \\text{ and horizontal stretch s.f. } 2",
          "explanation": "One stretch acts vertically and the other horizontally; because they act on different axes their order does not matter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the amplitude of the base curve.",
          "workingLatex": "y=\\cos x \\text{ has amplitude } 1",
          "explanation": "The amplitude is the maximum distance of the wave from its centre line, which is $1$ for $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the vertical stretch to the amplitude.",
          "workingLatex": "\\text{amplitude}=4\\times 1=4",
          "explanation": "The vertical stretch of scale factor $4$ multiplies the amplitude by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the amplitude.",
          "workingLatex": "\\text{amplitude}=4",
          "explanation": "The wave now rises and falls $4$ units from its centre line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the period of the base curve.",
          "workingLatex": "y=\\cos x \\text{ has period } 360^{\\circ}",
          "explanation": "One full cosine cycle takes $360^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the horizontal stretch to the period.",
          "workingLatex": "\\text{period}=2\\times 360^{\\circ}=720^{\\circ}",
          "explanation": "A horizontal stretch of scale factor $2$ doubles the length of each cycle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm using the period formula.",
          "workingLatex": "\\text{period}=\\dfrac{360^{\\circ}}{1/2}=720^{\\circ}",
          "explanation": "Dividing $360^{\\circ}$ by the coefficient $\\dfrac{1}{2}$ confirms the stretched period of $720^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recall the range of the base cosine.",
          "workingLatex": "-1\\le \\cos\\!\\left(\\tfrac{1}{2}x\\right)\\le 1",
          "explanation": "A cosine value always lies between $-1$ and $1$ whatever the horizontal scaling.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply the vertical stretch to the range.",
          "workingLatex": "-4\\le y\\le 4",
          "explanation": "Multiplying by $4$ stretches the bounds to $-4$ and $4$; the horizontal stretch does not affect the range.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise all three features.",
          "workingLatex": "\\text{amplitude } 4, \\text{ period } 720^{\\circ}, \\text{ range } -4\\le y\\le 4",
          "explanation": "The vertical stretch fixed the amplitude and range, while the horizontal stretch fixed the period.",
          "diagram": null
        }
      ],
      "finalAnswer": "Vertical stretch s.f. $4$ and horizontal stretch s.f. $2$; amplitude $4$; period $720^{\\circ}$; range $-4\\le y\\le 4$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": ["turning points", "reflection", "combined transformations"],
    "questionText": "A quartic curve $y=f(x)$ has turning points at $(-2,3)$, $(0,-1)$ and $(2,3)$. State the turning points of $y=f(x)-1$ and the turning points of $y=f(-x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given turning points.",
          "workingLatex": "(-2,3), \\; (0,-1), \\; (2,3)",
          "explanation": "Turning points move rigidly under translations and reflections, so we transform each one in turn.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the first transformation.",
          "workingLatex": "y=f(x)-1: \\text{ translate } 1 \\text{ down}",
          "explanation": "Subtracting $1$ from the output lowers the whole curve, so every turning point drops by $1$ in the $y$-direction only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Transform the first point.",
          "workingLatex": "(-2,3)\\;\\longrightarrow\\;(-2,\\,3-1)=(-2,2)",
          "explanation": "The $x$-coordinate is unchanged and the $y$-coordinate decreases by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Transform the second point.",
          "workingLatex": "(0,-1)\\;\\longrightarrow\\;(0,\\,-1-1)=(0,-2)",
          "explanation": "Again only the height changes, giving $(0,-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Transform the third point.",
          "workingLatex": "(2,3)\\;\\longrightarrow\\;(2,\\,3-1)=(2,2)",
          "explanation": "The last turning point drops to $(2,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the turning points of f(x)-1.",
          "workingLatex": "(-2,2), \\; (0,-2), \\; (2,2)",
          "explanation": "All three points have simply moved down by $1$ unit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the nature of these points is unchanged.",
          "workingLatex": "\\text{translation preserves maxima and minima}",
          "explanation": "A vertical shift does not flip the curve, so each maximum stays a maximum and each minimum stays a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the second transformation.",
          "workingLatex": "y=f(-x): \\text{ reflection in the } y\\text{-axis}",
          "explanation": "Replacing $x$ by $-x$ mirrors the curve left-to-right, so each turning point's $x$-coordinate changes sign while its height stays fixed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reflect the first point.",
          "workingLatex": "(-2,3)\\;\\longrightarrow\\;(2,3)",
          "explanation": "Negating the $x$-coordinate sends $-2$ to $2$, keeping the height $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reflect the second point.",
          "workingLatex": "(0,-1)\\;\\longrightarrow\\;(0,-1)",
          "explanation": "The point on the $y$-axis has $x=0$, which is unchanged by the reflection, so it stays fixed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reflect the third point.",
          "workingLatex": "(2,3)\\;\\longrightarrow\\;(-2,3)",
          "explanation": "Negating $x=2$ gives $-2$, again keeping the height $3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the turning points of f(-x).",
          "workingLatex": "(2,3), \\; (0,-1), \\; (-2,3)",
          "explanation": "The outer two turning points swap sides while the central one is unmoved.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on the symmetry.",
          "workingLatex": "\\{(-2,3),(0,-1),(2,3)\\} \\text{ is symmetric, so the set is unchanged}",
          "explanation": "Because the original turning points were already symmetric about the $y$-axis, the reflection produces the same set of points, just relabelled.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=f(x)-1$: $(-2,2),\\,(0,-2),\\,(2,2)$; $y=f(-x)$: $(2,3),\\,(0,-1),\\,(-2,3)$."
    }
  },
  {
    "id": "al.y2.pure.further-transformations.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Further transformations",
    "subtopicId": "al.y2.pure.further-transformations",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "coordinates",
    "tags": ["completing the square", "reflection", "combined transformations", "domain and range"],
    "questionText": "The curve $C$ has equation $y=x^2-6x+13$. (a) By completing the square, describe the transformations mapping $y=x^2$ onto $C$. (b) State the minimum point and the range of $C$. (c) $C$ is then reflected in the $x$-axis; write the equation of the reflected curve and state its maximum point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the equation of C.",
          "workingLatex": "y=x^2-6x+13",
          "explanation": "Completing the square will reveal the vertex form, from which the transformations follow directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x.",
          "workingLatex": "\\tfrac{1}{2}\\times(-6)=-3",
          "explanation": "The number inside the squared bracket is half the coefficient of $x$, so we compute $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the squared bracket and note its expansion.",
          "workingLatex": "(x-3)^2=x^2-6x+9",
          "explanation": "Squaring $(x-3)$ reproduces the $x^2-6x$ part but introduces an extra $+9$ that we must correct for.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the equation using the bracket.",
          "workingLatex": "y=(x-3)^2-9+13",
          "explanation": "We replace $x^2-6x$ by $(x-3)^2-9$, subtracting $9$ to cancel the extra term, then keep the original $+13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constants.",
          "workingLatex": "y=(x-3)^2+4",
          "explanation": "Combining $-9+13$ gives $+4$, so C is written in completed-square (vertex) form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the horizontal transformation.",
          "workingLatex": "(x-3)^2: \\text{ translate } 3 \\text{ right}",
          "explanation": "The $x-3$ inside the square shifts the parabola $3$ units in the positive $x$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the vertical transformation.",
          "workingLatex": "+4: \\text{ translate } 4 \\text{ up}",
          "explanation": "The $+4$ outside lifts the curve $4$ units, completing part (a).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate the minimum from the vertex form.",
          "workingLatex": "y=(x-3)^2+4 \\Rightarrow \\text{vertex } (3,4)",
          "explanation": "A completed square $a(x-h)^2+k$ has its vertex at $(h,k)$, so the vertex is $(3,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm it is a minimum.",
          "workingLatex": "(x-3)^2\\ge 0 \\Rightarrow y\\ge 4",
          "explanation": "A squared term is never negative, so the smallest value of $y$ is $4$, occurring at $x=3$; the point is a minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the minimum point and range.",
          "workingLatex": "\\text{minimum } (3,4), \\qquad \\text{range } y\\ge 4",
          "explanation": "The upward parabola starts at its lowest point $(3,4)$, so its outputs are all at least $4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the reflection in the x-axis.",
          "workingLatex": "y=f(x)\\;\\longrightarrow\\;y=-f(x)",
          "explanation": "Reflecting in the $x$-axis negates every $y$-value, so we put a minus sign in front of the whole expression.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the reflected equation in vertex form.",
          "workingLatex": "y=-\\big((x-3)^2+4\\big)=-(x-3)^2-4",
          "explanation": "Negating the completed-square form flips the parabola to open downwards with its turning point moved to $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Expand to give the reflected equation.",
          "workingLatex": "y=-(x^2-6x+9)-4=-x^2+6x-13",
          "explanation": "Expanding and simplifying gives the reflected curve in the same form as the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the maximum of the reflected curve.",
          "workingLatex": "\\text{vertex } (3,4)\\;\\longrightarrow\\;(3,-4), \\text{ now a maximum}",
          "explanation": "The reflection keeps the $x$-coordinate but negates the $y$-coordinate, so the former minimum $(3,4)$ becomes the maximum $(3,-4)$ of the downward parabola.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $y=(x-3)^2+4$: translation $3$ right and $4$ up. (b) Minimum $(3,4)$, range $y\\ge 4$. (c) Reflected curve $y=-(x-3)^2-4=-x^2+6x-13$, maximum $(3,-4)$."
    }
  },
];
