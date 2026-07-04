import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.tangents-normals.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "gradient",
      "differentiation",
      "curve"
    ],
    "questionText": "Find the gradient of the curve $y=x^2-3x+2$ at the point $(4,6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the curve and recall what gradient means",
          "workingLatex": "y=x^2-3x+2",
          "explanation": "The gradient of a curve at a point is the value of $\\frac{dy}{dx}$ at that point. So the first move is always to differentiate the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate term by term using the power rule",
          "workingLatex": "\\frac{dy}{dx}=2x-3",
          "explanation": "Multiply by the power and drop the power by one: $x^2$ becomes $2x$ and $-3x$ becomes $-3$. The constant $+2$ has no $x$ in it, so it differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the x-coordinate of the point",
          "workingLatex": "x=4",
          "explanation": "The gradient function $\\frac{dy}{dx}$ works for every $x$; to get the gradient at this particular point we use its $x$-coordinate, which is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 4 into the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2(4)-3",
          "explanation": "Replacing $x$ with $4$ evaluates the gradient exactly at the point we care about.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the multiplication",
          "workingLatex": "=8-3",
          "explanation": "Do the $2\\times4$ first following the order of operations, which gives $8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to the numerical value",
          "workingLatex": "=5",
          "explanation": "Subtracting gives the single number that is the gradient at this point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "m=5",
          "explanation": "So at $(4,6)$ the curve is rising with a gradient of $5$: for every $1$ unit across, the curve climbs $5$ units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m=5$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "gradient",
      "differentiation",
      "curve"
    ],
    "questionText": "Find the gradient of the curve $y=x^3$ at the point where $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the curve and recall what gradient means",
          "workingLatex": "y=x^3",
          "explanation": "The gradient of a curve at a point equals $\\frac{dy}{dx}$ evaluated there, so we begin by differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate using the power rule",
          "workingLatex": "\\frac{dy}{dx}=3x^2",
          "explanation": "Bring the power $3$ down as a multiplier and reduce the power by one, turning $x^3$ into $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the x-value to use",
          "workingLatex": "x=2",
          "explanation": "We want the gradient at the point where $x=2$, so this is the value we substitute in.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 2 into the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3(2)^2",
          "explanation": "Putting $x=2$ into $3x^2$ gives the exact gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deal with the power first",
          "workingLatex": "=3\\times4",
          "explanation": "Following the order of operations, square the $2$ before multiplying, so $(2)^2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out",
          "workingLatex": "=12",
          "explanation": "Multiplying $3$ by $4$ gives the numerical gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "m=12",
          "explanation": "At $x=2$ the curve $y=x^3$ is steep, with a gradient of $12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m=12$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "gradient",
      "differentiation",
      "curve"
    ],
    "questionText": "Find the gradient of the curve $y=2x^2+5x$ at the point where $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the curve and recall what gradient means",
          "workingLatex": "y=2x^2+5x",
          "explanation": "To find a gradient on a curve we need $\\frac{dy}{dx}$, so we start by differentiating the equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{dy}{dx}=4x+5",
          "explanation": "For $2x^2$ multiply by the power and drop it by one to get $4x$; for $5x$ the derivative is just the coefficient $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the x-value to use",
          "workingLatex": "x=1",
          "explanation": "The gradient function holds for all $x$; we want it at $x=1$, so this is what we substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 1 into the gradient function",
          "workingLatex": "\\frac{dy}{dx}=4(1)+5",
          "explanation": "Replacing $x$ with $1$ gives the gradient exactly at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the multiplication",
          "workingLatex": "=4+5",
          "explanation": "Multiplying $4$ by $1$ leaves $4$, which we then add to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add to simplify",
          "workingLatex": "=9",
          "explanation": "Adding gives the single value of the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "m=9",
          "explanation": "So at $x=1$ the curve has gradient $9$, meaning it is rising steeply there.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m=9$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "gradient",
      "differentiation",
      "curve"
    ],
    "questionText": "Find the gradient of the curve $y=x^2-7$ at the point $(3,2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the point actually lies on the curve",
          "workingLatex": "(3)^2-7=9-7=2",
          "explanation": "Substituting $x=3$ into the curve gives $y=2$, which matches the point $(3,2)$. This confirms the point is really on the curve before we work out its gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall that gradient comes from the derivative",
          "workingLatex": "y=x^2-7",
          "explanation": "The gradient at a point is $\\frac{dy}{dx}$ evaluated there, so we differentiate the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate using the power rule",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The $x^2$ term becomes $2x$, and the constant $-7$ differentiates to $0$ because it has no effect on the steepness.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the x-coordinate of the point",
          "workingLatex": "x=3",
          "explanation": "We use the $x$-coordinate of $(3,2)$ to evaluate the gradient at exactly that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x = 3 into the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2(3)",
          "explanation": "Replacing $x$ with $3$ gives the gradient at the point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out the value",
          "workingLatex": "=6",
          "explanation": "Multiplying $2$ by $3$ gives the numerical gradient.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "m=6",
          "explanation": "So at $(3,2)$ the curve has gradient $6$: it is climbing steeply at that point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m=6$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "gradient",
      "differentiation",
      "curve"
    ],
    "questionText": "Find the gradient of the curve $y=4x-x^2$ at the point where $x=3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the curve and recall what gradient means",
          "workingLatex": "y=4x-x^2",
          "explanation": "The gradient at a point is $\\frac{dy}{dx}$ evaluated there, so we begin by differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{dy}{dx}=4-2x",
          "explanation": "The $4x$ term differentiates to $4$, and the $-x^2$ term becomes $-2x$ by the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the x-value to use",
          "workingLatex": "x=3",
          "explanation": "We want the gradient where $x=3$, so this is the value to substitute into the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x = 3 into the gradient function",
          "workingLatex": "\\frac{dy}{dx}=4-2(3)",
          "explanation": "Replacing $x$ with $3$ gives the exact gradient at that point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the multiplication",
          "workingLatex": "=4-6",
          "explanation": "Do $2\\times3=6$ first, following the order of operations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to the numerical value",
          "workingLatex": "=-2",
          "explanation": "Subtracting $6$ from $4$ gives a negative result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the gradient",
          "workingLatex": "m=-2",
          "explanation": "The negative gradient of $-2$ tells us the curve is falling at $x=3$: as $x$ increases, $y$ is decreasing there.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m=-2$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=x^2$ at the point $(2,4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the point lies on the curve",
          "workingLatex": "(2)^2=4",
          "explanation": "Substituting $x=2$ gives $y=4$, matching the point $(2,4)$, so the point is on the curve and a tangent there makes sense.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to get the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The tangent's gradient equals the curve's gradient at the point, which is given by $\\frac{dy}{dx}$. Differentiating $x^2$ gives $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the x-coordinate to find the gradient",
          "workingLatex": "\\frac{dy}{dx}=2(2)",
          "explanation": "Putting $x=2$ into the gradient function gives the slope of the tangent at that exact point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "m=4",
          "explanation": "So the tangent line has gradient $4$; this is the $m$ we will use in the straight-line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-4=4(x-2)",
          "explanation": "A line through $(a,b)$ with gradient $m$ satisfies $y-b=m(x-a)$. Here $(a,b)=(2,4)$ and $m=4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-4=4x-8",
          "explanation": "Multiplying out $4(x-2)$ gives $4x-8$, clearing the bracket ready to tidy up.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make y the subject",
          "workingLatex": "y=4x-4",
          "explanation": "Adding $4$ to both sides gives the tangent in the familiar $y=mx+c$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=4x-4$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=x^2-3x$ at the point $(4,4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the point lies on the curve",
          "workingLatex": "(4)^2-3(4)=16-12=4",
          "explanation": "Substituting $x=4$ gives $y=4$, which matches $(4,4)$, so the point really is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to get the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-3",
          "explanation": "The tangent's slope is the curve's gradient here. Differentiating $x^2-3x$ gives $2x-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the x-coordinate to find the gradient",
          "workingLatex": "\\frac{dy}{dx}=2(4)-3",
          "explanation": "Putting $x=4$ into the gradient function gives the slope of the tangent at the point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "m=5",
          "explanation": "Working out $8-3$ gives $5$, so the tangent line has gradient $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-4=5(x-4)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(4,4)$ and gradient $5$ sets up the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-4=5x-20",
          "explanation": "Multiplying out $5(x-4)$ gives $5x-20$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make y the subject",
          "workingLatex": "y=5x-16",
          "explanation": "Adding $4$ to both sides gives $-20+4=-16$, so the tangent is $y=5x-16$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=5x-16$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=x^2+1$ at the point where $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y=(2)^2+1=5",
          "explanation": "We are only given the $x$-value, so first substitute $x=2$ into the curve to find $y$. The point of contact is $(2,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to get the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The tangent's slope equals the curve's gradient at the point. Differentiating $x^2+1$ gives $2x$, since the constant $+1$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x = 2 to find the gradient",
          "workingLatex": "\\frac{dy}{dx}=2(2)",
          "explanation": "Putting $x=2$ into the gradient function gives the slope of the tangent at that point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "m=4",
          "explanation": "So the tangent line has gradient $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-5=4(x-2)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(2,5)$ and gradient $4$ builds the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-5=4x-8",
          "explanation": "Multiplying out $4(x-2)$ gives $4x-8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make y the subject",
          "workingLatex": "y=4x-3",
          "explanation": "Adding $5$ to both sides gives $-8+5=-3$, so the tangent is $y=4x-3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=4x-3$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=x^3$ at the point $(1,1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the point lies on the curve",
          "workingLatex": "(1)^3=1",
          "explanation": "Substituting $x=1$ gives $y=1$, matching $(1,1)$, so the point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to get the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2",
          "explanation": "The tangent's slope is the curve's gradient at the point. Differentiating $x^3$ by the power rule gives $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x = 1 to find the gradient",
          "workingLatex": "\\frac{dy}{dx}=3(1)^2",
          "explanation": "Putting $x=1$ into the gradient function gives the slope of the tangent at the point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "m=3",
          "explanation": "Since $(1)^2=1$, the gradient is $3\\times1=3$, so the tangent line has gradient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-1=3(x-1)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(1,1)$ and gradient $3$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-1=3x-3",
          "explanation": "Multiplying out $3(x-1)$ gives $3x-3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make y the subject",
          "workingLatex": "y=3x-2",
          "explanation": "Adding $1$ to both sides gives $-3+1=-2$, so the tangent is $y=3x-2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=3x-2$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=2x^2-x$ at the point where $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y=2(2)^2-2=6",
          "explanation": "Only the $x$-value is given, so substitute $x=2$ into the curve: $2\\times4-2=6$. The point of contact is $(2,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to get the gradient function",
          "workingLatex": "\\frac{dy}{dx}=4x-1",
          "explanation": "The tangent's slope equals the curve's gradient at the point. Differentiating $2x^2-x$ gives $4x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x = 2 to find the gradient",
          "workingLatex": "\\frac{dy}{dx}=4(2)-1",
          "explanation": "Putting $x=2$ into the gradient function gives the slope of the tangent at the point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "m=7",
          "explanation": "Working out $8-1$ gives $7$, so the tangent line has gradient $7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-6=7(x-2)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(2,6)$ and gradient $7$ builds the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-6=7x-14",
          "explanation": "Multiplying out $7(x-2)$ gives $7x-14$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make y the subject",
          "workingLatex": "y=7x-8",
          "explanation": "Adding $6$ to both sides gives $-14+6=-8$, so the tangent is $y=7x-8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=7x-8$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=x^2-4x+5$ at the point $(1,2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the point lies on the curve",
          "workingLatex": "(1)^2-4(1)+5=1-4+5=2",
          "explanation": "Substituting $x=1$ gives $y=2$, which matches $(1,2)$, so the point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to get the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-4",
          "explanation": "The tangent's slope is the curve's gradient at the point. Differentiating $x^2-4x+5$ gives $2x-4$; the constant $+5$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute x = 1 to find the gradient",
          "workingLatex": "\\frac{dy}{dx}=2(1)-4",
          "explanation": "Putting $x=1$ into the gradient function gives the slope of the tangent at the point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the gradient",
          "workingLatex": "m=-2",
          "explanation": "Working out $2-4$ gives $-2$, so the tangent line has a negative gradient of $-2$ and slopes downward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-2=-2(x-1)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(1,2)$ and gradient $-2$ sets up the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-2=-2x+2",
          "explanation": "Multiplying out $-2(x-1)$ gives $-2x+2$; note that $-2\\times-1=+2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make y the subject",
          "workingLatex": "y=-2x+4",
          "explanation": "Adding $2$ to both sides gives $2+2=4$, so the tangent is $y=-2x+4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-2x+4$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "normal",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the gradient of the normal to the curve $y=x^2$ at the point $(2,4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=(2)^2=4",
          "explanation": "It is always worth checking the point really sits on the curve. Substituting $x=2$ into $y=x^2$ gives $4$, which matches the $y$-coordinate of $(2,4)$, so the point is valid.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The derivative $\\frac{dy}{dx}$ measures the gradient of the curve at any $x$. Applying the power rule to $x^2$ brings the power down and reduces it by one, giving $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=2$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=2\\times 2=4",
          "explanation": "The gradient of the curve at $(2,4)$ is the value of $\\frac{dy}{dx}$ there. Putting $x=2$ into $2x$ gives $4$, so the tangent at this point has gradient $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the perpendicular-gradient rule for the normal",
          "workingLatex": "m_{n}=-\\frac{1}{m_{t}}",
          "explanation": "The normal is the line at right angles to the tangent. Perpendicular gradients multiply to give $-1$, so the normal gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the tangent gradient",
          "workingLatex": "m_{n}=-\\frac{1}{4}",
          "explanation": "Replacing $m_{t}$ with $4$ gives a normal gradient of $-\\frac{1}{4}$. It is negative because the tangent gradient was positive, so the two lines slope opposite ways.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the gradients are perpendicular",
          "workingLatex": "4\\times\\left(-\\frac{1}{4}\\right)=-1",
          "explanation": "A quick check: multiplying the tangent gradient by the normal gradient should give $-1$. It does, confirming the lines are perpendicular and the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{4}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "normal",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the gradient of the normal to the curve $y=x^3$ at the point $(1,1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=(1)^3=1",
          "explanation": "Substituting $x=1$ into $y=x^3$ gives $1$, which matches the $y$-coordinate of $(1,1)$. The point is on the curve, so we can safely find gradients there.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2",
          "explanation": "The derivative gives the gradient of the curve at any point. Differentiating $x^3$ by the power rule multiplies by the power $3$ and lowers it by one, giving $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=1$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=3\\times 1^2=3",
          "explanation": "The tangent gradient is the value of $\\frac{dy}{dx}$ at $x=1$. Since $1^2=1$, this gives $3\\times 1=3$, so the tangent has gradient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the perpendicular-gradient rule for the normal",
          "workingLatex": "m_{n}=-\\frac{1}{m_{t}}",
          "explanation": "The normal is perpendicular to the tangent, and perpendicular gradients have a product of $-1$. So the normal gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the tangent gradient",
          "workingLatex": "m_{n}=-\\frac{1}{3}",
          "explanation": "Taking the negative reciprocal of $3$ means flipping it to $\\frac{1}{3}$ and changing the sign, giving $-\\frac{1}{3}$ for the normal gradient.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the gradients are perpendicular",
          "workingLatex": "3\\times\\left(-\\frac{1}{3}\\right)=-1",
          "explanation": "Multiplying the tangent and normal gradients gives $-1$, exactly as perpendicular lines require. This confirms the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{3}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "normal",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the gradient of the normal to the curve $y=4x-x^2$ at the point $(3,3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=4\\times 3-(3)^2=12-9=3",
          "explanation": "Substituting $x=3$ into $y=4x-x^2$ gives $12-9=3$, which matches the $y$-coordinate of $(3,3)$. The point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=4-2x",
          "explanation": "Differentiate term by term: the $4x$ becomes $4$, and $-x^2$ becomes $-2x$ by the power rule. This gives the gradient of the curve at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=3$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3}=4-2\\times 3=-2",
          "explanation": "The tangent gradient is $\\frac{dy}{dx}$ at $x=3$. Here $4-6=-2$, so the tangent slopes downwards with gradient $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the perpendicular-gradient rule for the normal",
          "workingLatex": "m_{n}=-\\frac{1}{m_{t}}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the tangent gradient",
          "workingLatex": "m_{n}=-\\frac{1}{-2}=\\frac{1}{2}",
          "explanation": "Taking the negative reciprocal of $-2$ flips it to $-\\frac{1}{2}$ and the extra minus sign makes it positive, giving $\\frac{1}{2}$. When the tangent slopes down, the normal slopes up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the gradients are perpendicular",
          "workingLatex": "-2\\times\\frac{1}{2}=-1",
          "explanation": "Multiplying the tangent gradient by the normal gradient gives $-1$, confirming the two lines meet at right angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "normal",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the gradient of the normal to the curve $y=x^2+x$ at the point $(-1,0)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=(-1)^2+(-1)=1-1=0",
          "explanation": "Substituting $x=-1$ into $y=x^2+x$ gives $1-1=0$, which matches the $y$-coordinate of $(-1,0)$. The point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x+1",
          "explanation": "Differentiate each term: $x^2$ becomes $2x$ and $x$ becomes $1$. So the gradient of the curve at any point is $2x+1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=-1$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=-1}=2\\times(-1)+1=-1",
          "explanation": "The tangent gradient is $\\frac{dy}{dx}$ at $x=-1$. Here $-2+1=-1$, so the tangent has gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the perpendicular-gradient rule for the normal",
          "workingLatex": "m_{n}=-\\frac{1}{m_{t}}",
          "explanation": "Since the normal is perpendicular to the tangent, its gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the tangent gradient",
          "workingLatex": "m_{n}=-\\frac{1}{-1}=1",
          "explanation": "The negative reciprocal of $-1$ is $1$: flipping $-1$ leaves $-1$, and the extra minus sign makes it $+1$. So the normal gradient is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the gradients are perpendicular",
          "workingLatex": "-1\\times 1=-1",
          "explanation": "Multiplying the two gradients gives $-1$, exactly as perpendicular lines require, so the answer is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "normal",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the gradient of the normal to the curve $y=2x^2$ at the point $(2,8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=2\\times(2)^2=2\\times 4=8",
          "explanation": "Substituting $x=2$ into $y=2x^2$ gives $2\\times 4=8$, which matches the $y$-coordinate of $(2,8)$. The point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=4x",
          "explanation": "The constant multiplier $2$ stays, and differentiating $x^2$ gives $2x$. Multiplying, $2\\times 2x=4x$, so the gradient function is $4x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=2$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=4\\times 2=8",
          "explanation": "The tangent gradient is $\\frac{dy}{dx}$ at $x=2$, which is $4\\times 2=8$. So the tangent at $(2,8)$ has gradient $8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the perpendicular-gradient rule for the normal",
          "workingLatex": "m_{n}=-\\frac{1}{m_{t}}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the tangent gradient",
          "workingLatex": "m_{n}=-\\frac{1}{8}",
          "explanation": "Taking the negative reciprocal of $8$ flips it to $\\frac{1}{8}$ and changes the sign, giving $-\\frac{1}{8}$. A steep tangent produces a shallow normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the gradients are perpendicular",
          "workingLatex": "8\\times\\left(-\\frac{1}{8}\\right)=-1",
          "explanation": "The product of the tangent and normal gradients is $-1$, confirming they are perpendicular and the answer is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{8}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "normal",
      "equation",
      "differentiation"
    ],
    "questionText": "Find the equation of the normal to the curve $y=x^2$ at the point $(1,1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=(1)^2=1",
          "explanation": "Substituting $x=1$ into $y=x^2$ gives $1$, matching the point $(1,1)$. The point is on the curve, so the normal genuinely passes through it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The derivative gives the gradient of the curve at any $x$. Differentiating $x^2$ by the power rule gives $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=1$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=2\\times 1=2",
          "explanation": "The tangent gradient at $(1,1)$ is $\\frac{dy}{dx}$ evaluated at $x=1$, which is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal gradient (negative reciprocal)",
          "workingLatex": "m_{n}=-\\frac{1}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $2$, which is $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the line in point-gradient form",
          "workingLatex": "y-1=-\\frac{1}{2}(x-1)",
          "explanation": "A line through $(a,b)$ with gradient $m$ is $y-b=m(x-a)$. Using the point $(1,1)$ and normal gradient $-\\frac{1}{2}$ gives this equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-1=-\\frac{1}{2}x+\\frac{1}{2}",
          "explanation": "Multiplying $-\\frac{1}{2}$ through the bracket gives $-\\frac{1}{2}x$ and $-\\frac{1}{2}\\times(-1)=+\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to make $y$ the subject",
          "workingLatex": "y=-\\frac{1}{2}x+\\frac{3}{2}",
          "explanation": "Adding $1$ to both sides combines $\\frac{1}{2}+1=\\frac{3}{2}$, giving the normal in the tidy form $y=-\\frac{1}{2}x+\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the point satisfies the equation",
          "workingLatex": "-\\frac{1}{2}\\times 1+\\frac{3}{2}=1",
          "explanation": "Substituting $x=1$ gives $y=1$, matching the original point. This confirms the normal really passes through $(1,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-\\frac{1}{2}x+\\frac{3}{2}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "normal",
      "equation",
      "differentiation"
    ],
    "questionText": "Find the equation of the normal to the curve $y=x^2$ at the point $(3,9)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=(3)^2=9",
          "explanation": "Substituting $x=3$ into $y=x^2$ gives $9$, matching the point $(3,9)$. The point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "Differentiating $x^2$ by the power rule gives $2x$, which is the gradient of the curve at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=3$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3}=2\\times 3=6",
          "explanation": "The tangent gradient at $(3,9)$ is $\\frac{dy}{dx}$ at $x=3$, which is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal gradient (negative reciprocal)",
          "workingLatex": "m_{n}=-\\frac{1}{6}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $6$, which is $-\\frac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the line in point-gradient form",
          "workingLatex": "y-9=-\\frac{1}{6}(x-3)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(3,9)$ and gradient $-\\frac{1}{6}$ sets up the equation of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-9=-\\frac{1}{6}x+\\frac{1}{2}",
          "explanation": "Multiplying out gives $-\\frac{1}{6}x$, and $-\\frac{1}{6}\\times(-3)=\\frac{3}{6}=\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to make $y$ the subject",
          "workingLatex": "y=-\\frac{1}{6}x+\\frac{19}{2}",
          "explanation": "Adding $9$ to both sides gives the constant $\\frac{1}{2}+9=\\frac{19}{2}$, so the normal is $y=-\\frac{1}{6}x+\\frac{19}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the point satisfies the equation",
          "workingLatex": "-\\frac{1}{6}\\times 3+\\frac{19}{2}=-\\frac{1}{2}+\\frac{19}{2}=9",
          "explanation": "Substituting $x=3$ gives $y=9$, matching the original point, so the normal passes through $(3,9)$ as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-\\frac{1}{6}x+\\frac{19}{2}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "normal",
      "equation",
      "differentiation"
    ],
    "questionText": "Find the equation of the normal to the curve $y=x^2-4x$ at the point $(1,-3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=(1)^2-4\\times 1=1-4=-3",
          "explanation": "Substituting $x=1$ into $y=x^2-4x$ gives $1-4=-3$, matching the point $(1,-3)$. The point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-4",
          "explanation": "Differentiate term by term: $x^2$ becomes $2x$ and $-4x$ becomes $-4$. This is the gradient of the curve at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=1$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=2\\times 1-4=-2",
          "explanation": "The tangent gradient at $(1,-3)$ is $\\frac{dy}{dx}$ at $x=1$, which is $2-4=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal gradient (negative reciprocal)",
          "workingLatex": "m_{n}=-\\frac{1}{-2}=\\frac{1}{2}",
          "explanation": "The negative reciprocal of $-2$ is $\\frac{1}{2}$: flipping gives $-\\frac{1}{2}$ and the extra minus sign makes it positive. So the normal gradient is $\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the line in point-gradient form",
          "workingLatex": "y-(-3)=\\frac{1}{2}(x-1)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(1,-3)$ and gradient $\\frac{1}{2}$. Subtracting $-3$ becomes adding $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y+3=\\frac{1}{2}x-\\frac{1}{2}",
          "explanation": "The left side becomes $y+3$, and multiplying $\\frac{1}{2}$ through the bracket gives $\\frac{1}{2}x-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to make $y$ the subject",
          "workingLatex": "y=\\frac{1}{2}x-\\frac{7}{2}",
          "explanation": "Subtracting $3$ from both sides gives the constant $-\\frac{1}{2}-3=-\\frac{7}{2}$, so the normal is $y=\\frac{1}{2}x-\\frac{7}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the point satisfies the equation",
          "workingLatex": "\\frac{1}{2}\\times 1-\\frac{7}{2}=\\frac{1}{2}-\\frac{7}{2}=-3",
          "explanation": "Substituting $x=1$ gives $y=-3$, matching the original point, so the normal passes through $(1,-3)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\frac{1}{2}x-\\frac{7}{2}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "normal",
      "equation",
      "differentiation"
    ],
    "questionText": "Find the equation of the normal to the curve $y=x^2-3$ at the point where $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the $y$-coordinate of the point",
          "workingLatex": "y=(2)^2-3=4-3=1",
          "explanation": "Only the $x$-value is given, so we first find $y$ by substituting $x=2$ into the curve. This gives $y=1$, so the point is $(2,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "Differentiating $x^2-3$: the $x^2$ becomes $2x$ and the constant $-3$ differentiates to $0$. So the gradient function is $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=2$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=2\\times 2=4",
          "explanation": "The tangent gradient at $(2,1)$ is $\\frac{dy}{dx}$ at $x=2$, which is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal gradient (negative reciprocal)",
          "workingLatex": "m_{n}=-\\frac{1}{4}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $4$, which is $-\\frac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the line in point-gradient form",
          "workingLatex": "y-1=-\\frac{1}{4}(x-2)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(2,1)$ and gradient $-\\frac{1}{4}$ sets up the equation of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-1=-\\frac{1}{4}x+\\frac{1}{2}",
          "explanation": "Multiplying out gives $-\\frac{1}{4}x$, and $-\\frac{1}{4}\\times(-2)=\\frac{2}{4}=\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to make $y$ the subject",
          "workingLatex": "y=-\\frac{1}{4}x+\\frac{3}{2}",
          "explanation": "Adding $1$ to both sides gives the constant $\\frac{1}{2}+1=\\frac{3}{2}$, so the normal is $y=-\\frac{1}{4}x+\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the point satisfies the equation",
          "workingLatex": "-\\frac{1}{4}\\times 2+\\frac{3}{2}=-\\frac{1}{2}+\\frac{3}{2}=1",
          "explanation": "Substituting $x=2$ gives $y=1$, matching the point $(2,1)$, so the normal passes through it as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-\\frac{1}{4}x+\\frac{3}{2}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "normal",
      "equation",
      "differentiation"
    ],
    "questionText": "Find the equation of the normal to the curve $y=x^3$ at the point $(2,8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=(2)^3=8",
          "explanation": "Substituting $x=2$ into $y=x^3$ gives $8$, matching the point $(2,8)$. The point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2",
          "explanation": "Differentiating $x^3$ by the power rule multiplies by $3$ and lowers the power by one, giving $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=2$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=3\\times 2^2=12",
          "explanation": "The tangent gradient at $(2,8)$ is $\\frac{dy}{dx}$ at $x=2$. Since $2^2=4$, this gives $3\\times 4=12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal gradient (negative reciprocal)",
          "workingLatex": "m_{n}=-\\frac{1}{12}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $12$, which is $-\\frac{1}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the line in point-gradient form",
          "workingLatex": "y-8=-\\frac{1}{12}(x-2)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(2,8)$ and gradient $-\\frac{1}{12}$ sets up the equation of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-8=-\\frac{1}{12}x+\\frac{1}{6}",
          "explanation": "Multiplying out gives $-\\frac{1}{12}x$, and $-\\frac{1}{12}\\times(-2)=\\frac{2}{12}=\\frac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to make $y$ the subject",
          "workingLatex": "y=-\\frac{1}{12}x+\\frac{49}{6}",
          "explanation": "Adding $8$ to both sides gives the constant $\\frac{1}{6}+8=\\frac{1}{6}+\\frac{48}{6}=\\frac{49}{6}$, so the normal is $y=-\\frac{1}{12}x+\\frac{49}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the point satisfies the equation",
          "workingLatex": "-\\frac{1}{12}\\times 2+\\frac{49}{6}=-\\frac{1}{6}+\\frac{49}{6}=\\frac{48}{6}=8",
          "explanation": "Substituting $x=2$ gives $y=8$, matching the original point, so the normal passes through $(2,8)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-\\frac{1}{12}x+\\frac{49}{6}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "normal",
      "equation",
      "differentiation"
    ],
    "questionText": "Find the equation of the normal to the curve $y=2x^2-x$ at the point $(1,1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the point lies on the curve",
          "workingLatex": "y=2\\times(1)^2-1=2-1=1",
          "explanation": "Substituting $x=1$ into $y=2x^2-x$ gives $2-1=1$, matching the point $(1,1)$. The point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=4x-1",
          "explanation": "Differentiate term by term: $2x^2$ becomes $4x$ and $-x$ becomes $-1$. So the gradient function is $4x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute $x=1$ to find the tangent gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=4\\times 1-1=3",
          "explanation": "The tangent gradient at $(1,1)$ is $\\frac{dy}{dx}$ at $x=1$, which is $4-1=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the normal gradient (negative reciprocal)",
          "workingLatex": "m_{n}=-\\frac{1}{3}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $3$, which is $-\\frac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the line in point-gradient form",
          "workingLatex": "y-1=-\\frac{1}{3}(x-1)",
          "explanation": "Using $y-b=m(x-a)$ with the point $(1,1)$ and gradient $-\\frac{1}{3}$ sets up the equation of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-1=-\\frac{1}{3}x+\\frac{1}{3}",
          "explanation": "Multiplying out gives $-\\frac{1}{3}x$, and $-\\frac{1}{3}\\times(-1)=\\frac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to make $y$ the subject",
          "workingLatex": "y=-\\frac{1}{3}x+\\frac{4}{3}",
          "explanation": "Adding $1$ to both sides gives the constant $\\frac{1}{3}+1=\\frac{4}{3}$, so the normal is $y=-\\frac{1}{3}x+\\frac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the point satisfies the equation",
          "workingLatex": "-\\frac{1}{3}\\times 1+\\frac{4}{3}=-\\frac{1}{3}+\\frac{4}{3}=\\frac{3}{3}=1",
          "explanation": "Substituting $x=1$ gives $y=1$, matching the original point, so the normal passes through $(1,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-\\frac{1}{3}x+\\frac{4}{3}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "fractional powers"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=\\sqrt{x}$ at the point where $x=4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y=\\sqrt{4}=2",
          "explanation": "A tangent touches the curve at one specific point, so we first need its full coordinates. Substituting $x=4$ into $y=\\sqrt{x}$ gives $y=2$, so the point of contact is $(4,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve as a power of x",
          "workingLatex": "y=x^{\\frac{1}{2}}",
          "explanation": "The power rule needs $x$ written in the form $x^n$. A square root is a power of one half, so $\\sqrt{x}=x^{\\frac{1}{2}}$. Rewriting first makes differentiating straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate using the power rule",
          "workingLatex": "\\frac{dy}{dx}=\\frac{1}{2}x^{-\\frac{1}{2}}",
          "explanation": "Multiply by the power and reduce the power by one: $\\frac{1}{2}\\times x^{\\frac{1}{2}-1}=\\frac{1}{2}x^{-\\frac{1}{2}}$. This derivative gives the gradient of the curve at any value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the derivative in surd form",
          "workingLatex": "\\frac{dy}{dx}=\\frac{1}{2\\sqrt{x}}",
          "explanation": "A negative power means a reciprocal, so $x^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{x}}$. Writing the gradient this way makes substituting a number cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x=4 to find the gradient",
          "workingLatex": "m=\\frac{1}{2\\sqrt{4}}=\\frac{1}{2\\times 2}",
          "explanation": "The gradient of the tangent equals the derivative evaluated at the point of contact. Putting $x=4$ into the gradient function measures the slope right where the line touches the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the gradient",
          "workingLatex": "m=\\frac{1}{4}",
          "explanation": "Since $2\\times 2=4$, the gradient of the tangent is $\\frac{1}{4}$. This single number is the slope of the straight line we are building.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-2=\\frac{1}{4}(x-4)",
          "explanation": "A straight line through $(4,2)$ with gradient $\\frac{1}{4}$ satisfies $y-y_1=m(x-x_1)$. This form guarantees the line passes through the exact point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y-2=\\frac{1}{4}x-1",
          "explanation": "Multiply $\\frac{1}{4}$ by each term inside the bracket: $\\frac{1}{4}\\times x=\\frac{1}{4}x$ and $\\frac{1}{4}\\times(-4)=-1$. This clears the bracket ready to isolate $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into y = mx + c form",
          "workingLatex": "y=\\frac{1}{4}x+1",
          "explanation": "Add $2$ to both sides, and $-1+2=1$. The tangent is now written neatly in slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the point lies on the line",
          "workingLatex": "\\frac{1}{4}\\times 4+1=2",
          "explanation": "Substituting $x=4$ back into the equation gives $y=2$, which matches the point of contact, confirming the tangent equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\frac{1}{4}x+1$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "normal",
      "gradient",
      "differentiation",
      "negative powers"
    ],
    "questionText": "Find the equation of the normal to the curve $y=\\frac{1}{x}$ at the point where $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y=\\frac{1}{2}",
          "explanation": "The normal passes through the point on the curve, so we need its coordinates first. Substituting $x=2$ into $y=\\frac{1}{x}$ gives $y=\\frac{1}{2}$, so the point is $\\left(2,\\frac{1}{2}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve as a power of x",
          "workingLatex": "y=x^{-1}",
          "explanation": "A reciprocal is a negative power, so $\\frac{1}{x}=x^{-1}$. Writing it in index form lets us apply the power rule directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate using the power rule",
          "workingLatex": "\\frac{dy}{dx}=-x^{-2}",
          "explanation": "Multiply by the power and reduce it by one: $(-1)\\times x^{-1-1}=-x^{-2}$. This gives the gradient of the curve at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the derivative in fraction form",
          "workingLatex": "\\frac{dy}{dx}=-\\frac{1}{x^2}",
          "explanation": "The negative power becomes a reciprocal, so $-x^{-2}=-\\frac{1}{x^2}$. This is tidier for substituting a value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the tangent at x=2",
          "workingLatex": "m_t=-\\frac{1}{2^2}=-\\frac{1}{4}",
          "explanation": "Evaluating the derivative at $x=2$ gives the slope of the curve there, which is the tangent gradient. Here $-\\frac{1}{2^2}=-\\frac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_n=-\\frac{1}{m_t}=-\\frac{1}{-\\frac{1}{4}}=4",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient. Flipping $-\\frac{1}{4}$ and changing the sign gives $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-\\frac{1}{2}=4(x-2)",
          "explanation": "The normal passes through $\\left(2,\\frac{1}{2}\\right)$ with gradient $4$, so it satisfies $y-y_1=m(x-x_1)$. This anchors the line to the correct point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y-\\frac{1}{2}=4x-8",
          "explanation": "Multiply $4$ by each term: $4\\times x=4x$ and $4\\times(-2)=-8$. This removes the bracket ready to solve for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into y = mx + c form",
          "workingLatex": "y=4x-\\frac{15}{2}",
          "explanation": "Add $\\frac{1}{2}$ to both sides: $-8+\\frac{1}{2}=-\\frac{16}{2}+\\frac{1}{2}=-\\frac{15}{2}$. This gives the normal in slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the lines are perpendicular",
          "workingLatex": "-\\frac{1}{4}\\times 4=-1",
          "explanation": "Multiplying the tangent and normal gradients gives $-1$, confirming they are perpendicular and the normal has been found correctly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=4x-\\frac{15}{2}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "stationary point"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=x+\\frac{4}{x}$ at the point where $x=2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y=2+\\frac{4}{2}=4",
          "explanation": "The tangent touches the curve at the point above $x=2$, so we find its height first. Substituting gives $2+2=4$, so the point of contact is $(2,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve using powers of x",
          "workingLatex": "y=x+4x^{-1}",
          "explanation": "To differentiate the $\\frac{4}{x}$ term with the power rule, write it as $4x^{-1}$. The $x$ term is already a power of $x$, so it stays as it is.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{dy}{dx}=1-4x^{-2}",
          "explanation": "The derivative of $x$ is $1$, and for $4x^{-1}$ we multiply by the power and reduce it: $4\\times(-1)x^{-2}=-4x^{-2}$. Together this is the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the derivative in fraction form",
          "workingLatex": "\\frac{dy}{dx}=1-\\frac{4}{x^2}",
          "explanation": "The negative power becomes a reciprocal, so $-4x^{-2}=-\\frac{4}{x^2}$. This makes the substitution easier to read.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x=2 into the gradient function",
          "workingLatex": "m=1-\\frac{4}{2^2}",
          "explanation": "The tangent gradient is the derivative at the point of contact, so we replace $x$ with $2$. This evaluates the slope exactly where the line meets the curve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the fraction",
          "workingLatex": "\\frac{4}{2^2}=\\frac{4}{4}=1",
          "explanation": "Working out the fractional term first keeps the arithmetic clear: $2^2=4$, and $\\frac{4}{4}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to find the gradient",
          "workingLatex": "m=1-1=0",
          "explanation": "The gradient comes out as $0$. A zero gradient means the tangent is horizontal, so $(2,4)$ is a stationary point of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the zero gradient",
          "workingLatex": "m=0",
          "explanation": "A horizontal line has the same $y$-value everywhere. Because the gradient is $0$, the tangent is a flat line passing through $(2,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-4=0(x-2)",
          "explanation": "Applying $y-y_1=m(x-x_1)$ with $m=0$ means the right-hand side vanishes, since multiplying by zero removes the $x$ dependence entirely.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify to the tangent equation",
          "workingLatex": "y=4",
          "explanation": "With the bracket gone, we are left with $y=4$. The tangent is the horizontal line at height $4$, exactly through the point of contact.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=4$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "x-axis",
      "differentiation",
      "fractional powers"
    ],
    "questionText": "The tangent to the curve $y=\\sqrt{x}$ at the point where $x=9$ meets the $x$-axis. Find the coordinates of the point where the tangent crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y=\\sqrt{9}=3",
          "explanation": "We first locate where the tangent touches the curve. Substituting $x=9$ into $y=\\sqrt{x}$ gives $y=3$, so the point of contact is $(9,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve as a power of x",
          "workingLatex": "y=x^{\\frac{1}{2}}",
          "explanation": "A square root is a power of one half, so $\\sqrt{x}=x^{\\frac{1}{2}}$. In index form the power rule can be applied directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate using the power rule",
          "workingLatex": "\\frac{dy}{dx}=\\frac{1}{2}x^{-\\frac{1}{2}}",
          "explanation": "Multiply by the power and reduce it by one: $\\frac{1}{2}\\times x^{\\frac{1}{2}-1}=\\frac{1}{2}x^{-\\frac{1}{2}}$. This gives the gradient at any point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the derivative in surd form",
          "workingLatex": "\\frac{dy}{dx}=\\frac{1}{2\\sqrt{x}}",
          "explanation": "The negative power becomes a reciprocal, so $x^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{x}}$. This makes the substitution neater.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x=9 to find the gradient",
          "workingLatex": "m=\\frac{1}{2\\sqrt{9}}=\\frac{1}{2\\times 3}",
          "explanation": "The tangent gradient is the derivative at $x=9$. Since $\\sqrt{9}=3$, the denominator becomes $2\\times 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the gradient",
          "workingLatex": "m=\\frac{1}{6}",
          "explanation": "Because $2\\times 3=6$, the gradient of the tangent is $\\frac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-3=\\frac{1}{6}(x-9)",
          "explanation": "The tangent passes through $(9,3)$ with gradient $\\frac{1}{6}$, so it satisfies $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y-3=\\frac{1}{6}x-\\frac{3}{2}",
          "explanation": "Multiply $\\frac{1}{6}$ by each term: $\\frac{1}{6}\\times x=\\frac{1}{6}x$ and $\\frac{1}{6}\\times(-9)=-\\frac{9}{6}=-\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into y = mx + c form",
          "workingLatex": "y=\\frac{1}{6}x+\\frac{3}{2}",
          "explanation": "Add $3$ to both sides: $-\\frac{3}{2}+3=\\frac{3}{2}$. The tangent equation is now ready to work with.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set y=0 for the x-axis crossing",
          "workingLatex": "0=\\frac{1}{6}x+\\frac{3}{2}",
          "explanation": "Every point on the $x$-axis has $y=0$. Setting $y=0$ in the tangent equation locates where the line crosses that axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x",
          "workingLatex": "\\frac{1}{6}x=-\\frac{3}{2}\\Rightarrow x=-9",
          "explanation": "Subtract $\\frac{3}{2}$, then multiply both sides by $6$: $-\\frac{3}{2}\\times 6=-9$. So the line meets the $x$-axis at $x=-9$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the coordinates of the crossing point",
          "workingLatex": "(-9,\\,0)",
          "explanation": "Combining $x=-9$ with $y=0$ gives the crossing point $(-9,0)$, which is the coordinate asked for.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(-9,0)$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "normal",
      "gradient",
      "differentiation",
      "negative powers"
    ],
    "questionText": "Find the equation of the normal to the curve $y=\\frac{6}{x}$ at the point where $x=3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y=\\frac{6}{3}=2",
          "explanation": "The normal passes through the point on the curve above $x=3$. Substituting gives $y=2$, so the point is $(3,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve as a power of x",
          "workingLatex": "y=6x^{-1}",
          "explanation": "A reciprocal is a negative power, so $\\frac{6}{x}=6x^{-1}$. This lets us differentiate with the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate using the power rule",
          "workingLatex": "\\frac{dy}{dx}=-6x^{-2}",
          "explanation": "Multiply by the power and reduce it: $6\\times(-1)x^{-2}=-6x^{-2}$. This is the gradient function of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the derivative in fraction form",
          "workingLatex": "\\frac{dy}{dx}=-\\frac{6}{x^2}",
          "explanation": "The negative power becomes a reciprocal, so $-6x^{-2}=-\\frac{6}{x^2}$. This is easier to substitute into.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the tangent at x=3",
          "workingLatex": "m_t=-\\frac{6}{3^2}=-\\frac{6}{9}=-\\frac{2}{3}",
          "explanation": "Evaluating the derivative at $x=3$ gives the slope of the curve there. Simplifying $-\\frac{6}{9}$ gives $-\\frac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_n=-\\frac{1}{m_t}=-\\frac{1}{-\\frac{2}{3}}=\\frac{3}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal. Flipping $-\\frac{2}{3}$ and changing the sign gives $\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-2=\\frac{3}{2}(x-3)",
          "explanation": "The normal passes through $(3,2)$ with gradient $\\frac{3}{2}$, so it satisfies $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y-2=\\frac{3}{2}x-\\frac{9}{2}",
          "explanation": "Multiply $\\frac{3}{2}$ by each term: $\\frac{3}{2}\\times x=\\frac{3}{2}x$ and $\\frac{3}{2}\\times(-3)=-\\frac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into y = mx + c form",
          "workingLatex": "y=\\frac{3}{2}x-\\frac{5}{2}",
          "explanation": "Add $2$ to both sides: $-\\frac{9}{2}+2=-\\frac{9}{2}+\\frac{4}{2}=-\\frac{5}{2}$. This gives the normal in slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the lines are perpendicular",
          "workingLatex": "-\\frac{2}{3}\\times\\frac{3}{2}=-1",
          "explanation": "The product of the tangent and normal gradients is $-1$, confirming they are perpendicular and the normal is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\frac{3}{2}x-\\frac{5}{2}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "fractional powers"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=3\\sqrt{x}$ at the point where $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y=3\\sqrt{1}=3",
          "explanation": "The tangent touches the curve above $x=1$. Since $\\sqrt{1}=1$, we get $y=3$, so the point of contact is $(1,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve as a power of x",
          "workingLatex": "y=3x^{\\frac{1}{2}}",
          "explanation": "A square root is a power of one half, so $3\\sqrt{x}=3x^{\\frac{1}{2}}$. This form is ready for the power rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate using the power rule",
          "workingLatex": "\\frac{dy}{dx}=3\\times\\frac{1}{2}x^{-\\frac{1}{2}}",
          "explanation": "Multiply by the power and reduce it by one, keeping the coefficient $3$: $3\\times\\frac{1}{2}x^{\\frac{1}{2}-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the coefficient",
          "workingLatex": "\\frac{dy}{dx}=\\frac{3}{2}x^{-\\frac{1}{2}}",
          "explanation": "Combining $3\\times\\frac{1}{2}=\\frac{3}{2}$ tidies the gradient function into a single coefficient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the derivative in surd form",
          "workingLatex": "\\frac{dy}{dx}=\\frac{3}{2\\sqrt{x}}",
          "explanation": "The negative power becomes a reciprocal, so $x^{-\\frac{1}{2}}=\\frac{1}{\\sqrt{x}}$, giving $\\frac{3}{2\\sqrt{x}}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x=1 to find the gradient",
          "workingLatex": "m=\\frac{3}{2\\sqrt{1}}=\\frac{3}{2}",
          "explanation": "The tangent gradient is the derivative at $x=1$. Since $\\sqrt{1}=1$, the gradient is $\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-3=\\frac{3}{2}(x-1)",
          "explanation": "The tangent passes through $(1,3)$ with gradient $\\frac{3}{2}$, so it satisfies $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y-3=\\frac{3}{2}x-\\frac{3}{2}",
          "explanation": "Multiply $\\frac{3}{2}$ by each term: $\\frac{3}{2}\\times x=\\frac{3}{2}x$ and $\\frac{3}{2}\\times(-1)=-\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into y = mx + c form",
          "workingLatex": "y=\\frac{3}{2}x+\\frac{3}{2}",
          "explanation": "Add $3$ to both sides: $-\\frac{3}{2}+3=\\frac{3}{2}$. This gives the tangent equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the point lies on the line",
          "workingLatex": "\\frac{3}{2}\\times 1+\\frac{3}{2}=3",
          "explanation": "Substituting $x=1$ gives $y=3$, matching the point of contact, so the tangent equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\frac{3}{2}x+\\frac{3}{2}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "normal",
      "y-axis",
      "differentiation",
      "negative powers"
    ],
    "questionText": "The normal to the curve $y=x-\\frac{9}{x}$ at the point where $x=3$ crosses the $y$-axis. Find the coordinates of the point where the normal crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y=3-\\frac{9}{3}=0",
          "explanation": "The normal passes through the point on the curve above $x=3$. Since $\\frac{9}{3}=3$, we get $3-3=0$, so the point is $(3,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve using powers of x",
          "workingLatex": "y=x-9x^{-1}",
          "explanation": "Write the $\\frac{9}{x}$ term as $9x^{-1}$ so the power rule applies. The $x$ term is already a power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{dy}{dx}=1+9x^{-2}",
          "explanation": "The derivative of $x$ is $1$. For $-9x^{-1}$, multiply by the power and reduce it: $-9\\times(-1)x^{-2}=+9x^{-2}$. Note the sign becomes positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the derivative in fraction form",
          "workingLatex": "\\frac{dy}{dx}=1+\\frac{9}{x^2}",
          "explanation": "The negative power becomes a reciprocal, so $9x^{-2}=\\frac{9}{x^2}$. This makes the substitution clearer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the tangent at x=3",
          "workingLatex": "m_t=1+\\frac{9}{3^2}=1+1=2",
          "explanation": "Evaluating the derivative at $x=3$ gives the tangent gradient. Since $\\frac{9}{9}=1$, the gradient is $1+1=2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_n=-\\frac{1}{m_t}=-\\frac{1}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $2$, which is $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-0=-\\frac{1}{2}(x-3)",
          "explanation": "The normal passes through $(3,0)$ with gradient $-\\frac{1}{2}$, so it satisfies $y-y_1=m(x-x_1)$. Here $y_1=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand to get the line equation",
          "workingLatex": "y=-\\frac{1}{2}x+\\frac{3}{2}",
          "explanation": "Multiply $-\\frac{1}{2}$ by each term: $-\\frac{1}{2}\\times x=-\\frac{1}{2}x$ and $-\\frac{1}{2}\\times(-3)=\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set x=0 for the y-axis crossing",
          "workingLatex": "y=-\\frac{1}{2}(0)+\\frac{3}{2}",
          "explanation": "Every point on the $y$-axis has $x=0$. Setting $x=0$ in the normal equation finds where the line crosses that axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify to find the y-value",
          "workingLatex": "y=\\frac{3}{2}",
          "explanation": "The first term vanishes because it is multiplied by zero, leaving $y=\\frac{3}{2}$. This is the height of the crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coordinates of the crossing point",
          "workingLatex": "\\left(0,\\,\\frac{3}{2}\\right)",
          "explanation": "Combining $x=0$ with $y=\\frac{3}{2}$ gives the crossing point $\\left(0,\\frac{3}{2}\\right)$, which is the coordinate asked for.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(0,\\frac{3}{2}\\right)$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "negative powers"
    ],
    "questionText": "Find the equation of the tangent to the curve $y=x^2-\\frac{1}{x}$ at the point where $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y=1^2-\\frac{1}{1}=0",
          "explanation": "The tangent touches the curve above $x=1$. Since $1^2=1$ and $\\frac{1}{1}=1$, we get $1-1=0$, so the point of contact is $(1,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve using powers of x",
          "workingLatex": "y=x^2-x^{-1}",
          "explanation": "Write the $\\frac{1}{x}$ term as $x^{-1}$ so the power rule applies. The $x^2$ term is already a power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{dy}{dx}=2x+x^{-2}",
          "explanation": "The derivative of $x^2$ is $2x$. For $-x^{-1}$, multiply by the power and reduce it: $-1\\times(-1)x^{-2}=+x^{-2}$. The sign becomes positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the derivative in fraction form",
          "workingLatex": "\\frac{dy}{dx}=2x+\\frac{1}{x^2}",
          "explanation": "The negative power becomes a reciprocal, so $x^{-2}=\\frac{1}{x^2}$. This makes the substitution clearer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x=1 into the gradient function",
          "workingLatex": "m=2(1)+\\frac{1}{1^2}",
          "explanation": "The tangent gradient is the derivative at the point of contact, so replace $x$ with $1$ in each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate each term",
          "workingLatex": "m=2+1",
          "explanation": "Working the terms out: $2(1)=2$ and $\\frac{1}{1^2}=1$. Keeping them separate avoids slips.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to find the gradient",
          "workingLatex": "m=3",
          "explanation": "Adding gives $2+1=3$, so the gradient of the tangent is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-0=3(x-1)",
          "explanation": "The tangent passes through $(1,0)$ with gradient $3$, so it satisfies $y-y_1=m(x-x_1)$. Here $y_1=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand to get the tangent equation",
          "workingLatex": "y=3x-3",
          "explanation": "Multiply $3$ by each term: $3\\times x=3x$ and $3\\times(-1)=-3$. This gives the tangent in slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the point lies on the line",
          "workingLatex": "3(1)-3=0",
          "explanation": "Substituting $x=1$ gives $y=0$, matching the point of contact, so the tangent equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=3x-3$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "normal",
      "gradient",
      "differentiation",
      "negative powers"
    ],
    "questionText": "Find the equation of the normal to the curve $y=2x-\\frac{1}{x^2}$ at the point where $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point",
          "workingLatex": "y=2(1)-\\frac{1}{1^2}=1",
          "explanation": "The normal passes through the point on the curve above $x=1$. Since $2(1)=2$ and $\\frac{1}{1^2}=1$, we get $2-1=1$, so the point is $(1,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve using powers of x",
          "workingLatex": "y=2x-x^{-2}",
          "explanation": "Write the $\\frac{1}{x^2}$ term as $x^{-2}$ so the power rule applies. The $2x$ term is already a power of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{dy}{dx}=2+2x^{-3}",
          "explanation": "The derivative of $2x$ is $2$. For $-x^{-2}$, multiply by the power and reduce it: $-1\\times(-2)x^{-3}=+2x^{-3}$. The sign becomes positive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the derivative in fraction form",
          "workingLatex": "\\frac{dy}{dx}=2+\\frac{2}{x^3}",
          "explanation": "The negative power becomes a reciprocal, so $2x^{-3}=\\frac{2}{x^3}$. This makes the substitution easier to read.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the tangent at x=1",
          "workingLatex": "m_t=2+\\frac{2}{1^3}=2+2=4",
          "explanation": "Evaluating the derivative at $x=1$ gives the tangent gradient. Since $\\frac{2}{1}=2$, the gradient is $2+2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_n=-\\frac{1}{m_t}=-\\frac{1}{4}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $4$, which is $-\\frac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-1=-\\frac{1}{4}(x-1)",
          "explanation": "The normal passes through $(1,1)$ with gradient $-\\frac{1}{4}$, so it satisfies $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y-1=-\\frac{1}{4}x+\\frac{1}{4}",
          "explanation": "Multiply $-\\frac{1}{4}$ by each term: $-\\frac{1}{4}\\times x=-\\frac{1}{4}x$ and $-\\frac{1}{4}\\times(-1)=\\frac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into y = mx + c form",
          "workingLatex": "y=-\\frac{1}{4}x+\\frac{5}{4}",
          "explanation": "Add $1$ to both sides: $\\frac{1}{4}+1=\\frac{1}{4}+\\frac{4}{4}=\\frac{5}{4}$. This gives the normal in slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the lines are perpendicular",
          "workingLatex": "4\\times\\left(-\\frac{1}{4}\\right)=-1",
          "explanation": "The product of the tangent and normal gradients is $-1$, confirming they are perpendicular and the normal is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-\\frac{1}{4}x+\\frac{5}{4}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "x-axis",
      "differentiation",
      "negative powers"
    ],
    "questionText": "The tangent to the curve $y=\\frac{1}{x}$ at the point where $x=1$ crosses the $x$-axis. Find the coordinates of the point where the tangent crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the y-coordinate of the point of contact",
          "workingLatex": "y=\\frac{1}{1}=1",
          "explanation": "The tangent touches the curve above $x=1$. Substituting into $y=\\frac{1}{x}$ gives $y=1$, so the point of contact is $(1,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the curve as a power of x",
          "workingLatex": "y=x^{-1}",
          "explanation": "A reciprocal is a negative power, so $\\frac{1}{x}=x^{-1}$. This lets us apply the power rule directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate using the power rule",
          "workingLatex": "\\frac{dy}{dx}=-x^{-2}",
          "explanation": "Multiply by the power and reduce it: $(-1)x^{-1-1}=-x^{-2}$. This gives the gradient of the curve at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the derivative in fraction form",
          "workingLatex": "\\frac{dy}{dx}=-\\frac{1}{x^2}",
          "explanation": "The negative power becomes a reciprocal, so $-x^{-2}=-\\frac{1}{x^2}$. This makes the substitution cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute x=1 to find the gradient",
          "workingLatex": "m=-\\frac{1}{1^2}=-1",
          "explanation": "The tangent gradient is the derivative at $x=1$. Since $1^2=1$, the gradient is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-1=-1(x-1)",
          "explanation": "The tangent passes through $(1,1)$ with gradient $-1$, so it satisfies $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the bracket",
          "workingLatex": "y-1=-x+1",
          "explanation": "Multiply $-1$ by each term: $-1\\times x=-x$ and $-1\\times(-1)=+1$. This clears the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange into y = mx + c form",
          "workingLatex": "y=-x+2",
          "explanation": "Add $1$ to both sides: $1+1=2$. The tangent equation is now ready to work with.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set y=0 for the x-axis crossing",
          "workingLatex": "0=-x+2",
          "explanation": "Every point on the $x$-axis has $y=0$. Setting $y=0$ in the tangent equation locates where the line crosses that axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for x",
          "workingLatex": "x=2",
          "explanation": "Adding $x$ to both sides gives $x=2$, so the tangent meets the $x$-axis at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the coordinates of the crossing point",
          "workingLatex": "(2,\\,0)",
          "explanation": "Combining $x=2$ with $y=0$ gives the crossing point $(2,0)$, which is the coordinate asked for.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,0)$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "stationary point"
    ],
    "questionText": "Find the coordinates of the points on the curve $y=x^3-3x$ where the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret what a horizontal tangent means",
          "workingLatex": "\\frac{dy}{dx}=0",
          "explanation": "A horizontal line has gradient $0$. Since $\\frac{dy}{dx}$ measures the gradient of the curve, the tangent is horizontal exactly where $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=3x^2-3",
          "explanation": "Differentiate term by term using the power rule: $x^3$ becomes $3x^2$ and $-3x$ becomes $-3$. This gradient function tells us the slope at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient function equal to zero",
          "workingLatex": "3x^2-3=0",
          "explanation": "To find where the gradient is zero, we set the gradient function equal to $0$ and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide through by 3 to simplify",
          "workingLatex": "x^2-1=0",
          "explanation": "Both terms share a factor of $3$. Dividing the whole equation by $3$ keeps it balanced and leaves cleaner numbers to work with.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to isolate the squared term",
          "workingLatex": "x^2=1",
          "explanation": "Adding $1$ to both sides isolates $x^2$, so we can take the square root next.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x=\\pm 1",
          "explanation": "Taking the square root of both sides gives two solutions, $x=1$ and $x=-1$. Both roots matter — a curve can have a horizontal tangent at more than one point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate when x = 1",
          "workingLatex": "y=(1)^3-3(1)=1-3=-2",
          "explanation": "Substitute $x=1$ into the original curve to find the height of the curve at that point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the y-coordinate when x = -1",
          "workingLatex": "y=(-1)^3-3(-1)=-1+3=2",
          "explanation": "Substitute $x=-1$ into the curve. Note $(-1)^3=-1$ and $-3\\times(-1)=+3$, which gives $y=2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the gradient really is zero at each point",
          "workingLatex": "3(1)^2-3=0,\\quad 3(-1)^2-3=0",
          "explanation": "Substituting each $x$ back into the gradient function gives $0$ both times, confirming the tangents are genuinely horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the two points",
          "workingLatex": "(1,-2)\\ \\text{and}\\ (-1,2)",
          "explanation": "These are the two points on the curve where the tangent line is horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $(1,-2)$ and $(-1,2)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "stationary point"
    ],
    "questionText": "Find the coordinates of the point on the curve $y=x^2-6x+5$ where the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret what a horizontal tangent means",
          "workingLatex": "\\frac{dy}{dx}=0",
          "explanation": "A horizontal tangent has gradient $0$. Because $\\frac{dy}{dx}$ gives the gradient of the curve, we look for where $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=2x-6",
          "explanation": "Differentiate each term: $x^2$ becomes $2x$, $-6x$ becomes $-6$, and the constant $+5$ differentiates to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient function equal to zero",
          "workingLatex": "2x-6=0",
          "explanation": "The tangent is horizontal where the gradient is zero, so we equate the gradient function to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the equation",
          "workingLatex": "2x=6",
          "explanation": "Add $6$ to both sides to gather the $x$-term on its own, ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x=3",
          "explanation": "Dividing both sides by $2$ gives the single $x$-value where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 3 into the curve",
          "workingLatex": "y=(3)^2-6(3)+5",
          "explanation": "To find the height of the curve at this point, put $x=3$ back into the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to find the y-coordinate",
          "workingLatex": "y=9-18+5=-4",
          "explanation": "Working through the arithmetic gives $y=-4$, so the point is $(3,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the gradient is zero there",
          "workingLatex": "2(3)-6=0",
          "explanation": "Substituting $x=3$ into the gradient function returns $0$, confirming the tangent is horizontal at this point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recognise the nature of this point",
          "workingLatex": "y=(x-3)^2-4",
          "explanation": "Completing the square shows the curve is a parabola opening upwards with vertex at $(3,-4)$, so this horizontal-tangent point is its minimum turning point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the point",
          "workingLatex": "(3,-4)",
          "explanation": "This is the only point on the curve where the tangent is horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $(3,-4)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "stationary point"
    ],
    "questionText": "Find the coordinates of the points on the curve $y=2x^3-3x^2-12x$ where the tangent is horizontal.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret what a horizontal tangent means",
          "workingLatex": "\\frac{dy}{dx}=0",
          "explanation": "A horizontal tangent has gradient $0$, and $\\frac{dy}{dx}$ gives the gradient of the curve, so we solve $\\frac{dy}{dx}=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=6x^2-6x-12",
          "explanation": "Apply the power rule to each term: $2x^3$ gives $6x^2$, $-3x^2$ gives $-6x$, and $-12x$ gives $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the gradient function equal to zero",
          "workingLatex": "6x^2-6x-12=0",
          "explanation": "The tangent is horizontal where the gradient is zero, so we equate the gradient function to $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide through by 6 to simplify",
          "workingLatex": "x^2-x-2=0",
          "explanation": "Every term shares a factor of $6$. Dividing by $6$ leaves a simple quadratic that is easy to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the quadratic",
          "workingLatex": "(x-2)(x+1)=0",
          "explanation": "We need two numbers that multiply to $-2$ and add to $-1$; those are $-2$ and $+1$, giving these factors.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x=2\\ \\text{or}\\ x=-1",
          "explanation": "Setting each factor to zero gives the two $x$-values where the gradient is zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 2 into the curve",
          "workingLatex": "y=2(2)^3-3(2)^2-12(2)",
          "explanation": "Put $x=2$ back into the original equation to find the corresponding height of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the y-coordinate at x = 2",
          "workingLatex": "y=16-12-24=-20",
          "explanation": "Working through the arithmetic gives $y=-20$, so one point is $(2,-20)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = -1 into the curve",
          "workingLatex": "y=2(-1)^3-3(-1)^2-12(-1)",
          "explanation": "Put $x=-1$ into the original equation, taking care with the signs of the odd and even powers.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the y-coordinate at x = -1",
          "workingLatex": "y=-2-3+12=7",
          "explanation": "Here $2(-1)^3=-2$, $-3(-1)^2=-3$ and $-12(-1)=+12$, giving $y=7$, so the other point is $(-1,7)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the gradient is zero at each point",
          "workingLatex": "6(2)^2-6(2)-12=0,\\quad 6(-1)^2-6(-1)-12=0",
          "explanation": "Substituting each $x$ into the gradient function returns $0$ both times, confirming both tangents are horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the two points",
          "workingLatex": "(2,-20)\\ \\text{and}\\ (-1,7)",
          "explanation": "These are the two points on the curve where the tangent line is horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is horizontal at $(2,-20)$ and $(-1,7)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the points on the curve $y=x^3-3x^2$ where the tangent has gradient $9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the condition on the gradient",
          "workingLatex": "\\frac{dy}{dx}=9",
          "explanation": "The gradient of the tangent equals $\\frac{dy}{dx}$. We want the tangent to have gradient $9$, so we set the gradient function equal to $9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=3x^2-6x",
          "explanation": "Differentiate term by term: $x^3$ gives $3x^2$ and $-3x^2$ gives $-6x$. This is the gradient at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation for the required gradient",
          "workingLatex": "3x^2-6x=9",
          "explanation": "Set the gradient function equal to the target gradient of $9$ to find the relevant $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move everything to one side",
          "workingLatex": "3x^2-6x-9=0",
          "explanation": "Subtract $9$ from both sides so the equation equals zero, which is the standard form for solving a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide through by 3",
          "workingLatex": "x^2-2x-3=0",
          "explanation": "Every term is divisible by $3$. Dividing keeps the equation balanced and simplifies the factorising.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(x-3)(x+1)=0",
          "explanation": "Two numbers that multiply to $-3$ and add to $-2$ are $-3$ and $+1$, giving these factors.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x=3\\ \\text{or}\\ x=-1",
          "explanation": "Setting each factor to zero gives the two $x$-values where the gradient equals $9$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 3 into the curve",
          "workingLatex": "y=(3)^3-3(3)^2=27-27=0",
          "explanation": "Put $x=3$ into the original equation to find the height of the curve; this gives $y=0$, so one point is $(3,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = -1 into the curve",
          "workingLatex": "y=(-1)^3-3(-1)^2=-1-3=-4",
          "explanation": "Put $x=-1$ into the curve. Note $(-1)^3=-1$ and $-3(-1)^2=-3$, giving $y=-4$, so the other point is $(-1,-4)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the gradient equals 9 at each point",
          "workingLatex": "3(3)^2-6(3)=9,\\quad 3(-1)^2-6(-1)=9",
          "explanation": "Substituting each $x$ into the gradient function returns $9$ both times, confirming the tangents have the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the two points",
          "workingLatex": "(3,0)\\ \\text{and}\\ (-1,-4)",
          "explanation": "These are the two points on the curve where the tangent has gradient $9$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent has gradient $9$ at $(3,0)$ and $(-1,-4)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the point on the curve $y=x^2-3x$ where the tangent has gradient $-1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the condition on the gradient",
          "workingLatex": "\\frac{dy}{dx}=-1",
          "explanation": "The tangent's gradient equals $\\frac{dy}{dx}$. We want a tangent of gradient $-1$, so we set the gradient function equal to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=2x-3",
          "explanation": "Differentiate each term: $x^2$ becomes $2x$ and $-3x$ becomes $-3$. This gives the gradient at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation for the required gradient",
          "workingLatex": "2x-3=-1",
          "explanation": "Set the gradient function equal to the target gradient $-1$ to find the $x$-value we need.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the equation",
          "workingLatex": "2x=2",
          "explanation": "Add $3$ to both sides to collect the $x$-term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for x",
          "workingLatex": "x=1",
          "explanation": "Dividing both sides by $2$ gives the single $x$-value where the gradient is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = 1 into the curve",
          "workingLatex": "y=(1)^2-3(1)",
          "explanation": "Put $x=1$ back into the original equation to find the height of the curve at this point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to find the y-coordinate",
          "workingLatex": "y=1-3=-2",
          "explanation": "The arithmetic gives $y=-2$, so the point is $(1,-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the gradient equals -1 there",
          "workingLatex": "2(1)-3=-1",
          "explanation": "Substituting $x=1$ into the gradient function returns $-1$, confirming the tangent has the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the point",
          "workingLatex": "(1,-2)",
          "explanation": "This is the point on the curve where the tangent has gradient $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent has gradient $-1$ at $(1,-2)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "parallel",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the point on the curve $y=x^2-2x+3$ where the tangent is parallel to the line $y=4x-1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'parallel to the line'",
          "workingLatex": "m_{\\text{tangent}}=m_{\\text{line}}",
          "explanation": "Parallel lines have equal gradients. So the tangent we want must have the same gradient as the given line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the gradient of the given line",
          "workingLatex": "y=4x-1\\ \\Rightarrow\\ m=4",
          "explanation": "The line is in the form $y=mx+c$, so its gradient is the coefficient of $x$, which is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=2x-2",
          "explanation": "Differentiate term by term: $x^2$ gives $2x$, $-2x$ gives $-2$, and the constant $+3$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient function equal to 4",
          "workingLatex": "2x-2=4",
          "explanation": "The tangent must have gradient $4$ to be parallel to the line, so we set the gradient function equal to $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the equation",
          "workingLatex": "2x=6",
          "explanation": "Add $2$ to both sides to collect the $x$-term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x=3",
          "explanation": "Dividing both sides by $2$ gives the $x$-value where the tangent is parallel to the line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 3 into the curve",
          "workingLatex": "y=(3)^2-2(3)+3",
          "explanation": "Put $x=3$ back into the original equation to find the height of the curve at this point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to find the y-coordinate",
          "workingLatex": "y=9-6+3=6",
          "explanation": "Working through the arithmetic gives $y=6$, so the point is $(3,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the gradient matches the line",
          "workingLatex": "2(3)-2=4",
          "explanation": "Substituting $x=3$ into the gradient function returns $4$, the same as the line's gradient, so the tangent there really is parallel to it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the point",
          "workingLatex": "(3,6)",
          "explanation": "This is the point on the curve where the tangent is parallel to $y=4x-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to $y=4x-1$ at $(3,6)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "parallel",
      "equation of tangent"
    ],
    "questionText": "The tangent to the curve $y=x^2-4x+1$ at a point $P$ is parallel to the line $y=2x+7$. Find the coordinates of $P$ and the equation of the tangent at $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'parallel to the line'",
          "workingLatex": "m_{\\text{tangent}}=m_{\\text{line}}",
          "explanation": "Parallel lines share the same gradient, so the tangent at $P$ must have the same gradient as the given line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the gradient of the given line",
          "workingLatex": "y=2x+7\\ \\Rightarrow\\ m=2",
          "explanation": "The line is in the form $y=mx+c$, so its gradient is the coefficient of $x$, which is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=2x-4",
          "explanation": "Differentiate term by term: $x^2$ gives $2x$, $-4x$ gives $-4$, and the constant $+1$ gives $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient function equal to 2",
          "workingLatex": "2x-4=2",
          "explanation": "For the tangent to be parallel to the line, its gradient must be $2$, so we set the gradient function equal to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the equation",
          "workingLatex": "2x=6",
          "explanation": "Add $4$ to both sides to gather the $x$-term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the x-coordinate of P",
          "workingLatex": "x=3",
          "explanation": "Dividing both sides by $2$ gives the $x$-coordinate of the point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute x = 3 into the curve",
          "workingLatex": "y=(3)^2-4(3)+1",
          "explanation": "Put $x=3$ into the original curve equation to find the $y$-coordinate of $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to find the y-coordinate of P",
          "workingLatex": "y=9-12+1=-2",
          "explanation": "The arithmetic gives $y=-2$, so the point of contact is $P(3,-2)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the gradient of the tangent",
          "workingLatex": "m=2",
          "explanation": "The tangent has the same gradient as the line, so its gradient is $2$. We now have a point and a gradient, enough to write the line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the point-gradient form of a line",
          "workingLatex": "y-(-2)=2(x-3)",
          "explanation": "The equation of a line through $(a,b)$ with gradient $m$ is $y-b=m(x-a)$. Substitute $a=3$, $b=-2$ and $m=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Expand the bracket",
          "workingLatex": "y+2=2x-6",
          "explanation": "Simplify the left side and multiply out the right side to remove the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Rearrange into y = mx + c form",
          "workingLatex": "y=2x-8",
          "explanation": "Subtract $2$ from both sides to isolate $y$, giving the equation of the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the answer",
          "workingLatex": "2(3)-8=-2",
          "explanation": "The tangent passes through $P(3,-2)$ since $2(3)-8=-2$, and its gradient $2$ matches the given line, so it is parallel as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P=(3,-2)$ and the tangent is $y=2x-8$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "parallel",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the points on the curve $y=x^3+3x$ where the tangent is parallel to the line $y=15x+4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'parallel to the line'",
          "workingLatex": "m_{\\text{tangent}}=m_{\\text{line}}",
          "explanation": "Parallel lines have equal gradients, so the tangents we want must have the same gradient as the given line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the gradient of the given line",
          "workingLatex": "y=15x+4\\ \\Rightarrow\\ m=15",
          "explanation": "The line is in $y=mx+c$ form, so its gradient is the coefficient of $x$, which is $15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=3x^2+3",
          "explanation": "Differentiate term by term: $x^3$ gives $3x^2$ and $3x$ gives $3$. This is the gradient at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the gradient function equal to 15",
          "workingLatex": "3x^2+3=15",
          "explanation": "For a tangent parallel to the line, its gradient must be $15$, so we set the gradient function equal to $15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the equation",
          "workingLatex": "3x^2=12",
          "explanation": "Subtract $3$ from both sides to isolate the term containing $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to isolate x squared",
          "workingLatex": "x^2=4",
          "explanation": "Dividing both sides by $3$ leaves $x^2$ on its own, ready to square-root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x=\\pm 2",
          "explanation": "Taking the square root gives two solutions, $x=2$ and $x=-2$, so there are two points to find.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 2 into the curve",
          "workingLatex": "y=(2)^3+3(2)=8+6=14",
          "explanation": "Put $x=2$ into the original equation to get the height of the curve; this gives $y=14$, so one point is $(2,14)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = -2 into the curve",
          "workingLatex": "y=(-2)^3+3(-2)=-8-6=-14",
          "explanation": "Put $x=-2$ into the curve. Note $(-2)^3=-8$ and $3(-2)=-6$, giving $y=-14$, so the other point is $(-2,-14)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the gradient matches the line",
          "workingLatex": "3(2)^2+3=15,\\quad 3(-2)^2+3=15",
          "explanation": "Substituting each $x$ into the gradient function returns $15$ both times, matching the line's gradient, so both tangents are parallel to it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the two points",
          "workingLatex": "(2,14)\\ \\text{and}\\ (-2,-14)",
          "explanation": "These are the two points on the curve where the tangent is parallel to $y=15x+4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent is parallel to $y=15x+4$ at $(2,14)$ and $(-2,-14)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "differentiation"
    ],
    "questionText": "Find the coordinates of the points on the curve $y=2x^3-3x^2$ where the tangent has gradient $12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the condition on the gradient",
          "workingLatex": "\\frac{dy}{dx}=12",
          "explanation": "The gradient of the tangent equals $\\frac{dy}{dx}$. We want a tangent of gradient $12$, so we set the gradient function equal to $12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=6x^2-6x",
          "explanation": "Apply the power rule: $2x^3$ gives $6x^2$ and $-3x^2$ gives $-6x$. This is the gradient at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equation for the required gradient",
          "workingLatex": "6x^2-6x=12",
          "explanation": "Set the gradient function equal to the target gradient of $12$ to find the relevant $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move everything to one side",
          "workingLatex": "6x^2-6x-12=0",
          "explanation": "Subtract $12$ from both sides so the equation equals zero, the standard form for solving a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide through by 6",
          "workingLatex": "x^2-x-2=0",
          "explanation": "Every term is divisible by $6$. Dividing keeps the equation balanced and simplifies the factorising.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic",
          "workingLatex": "(x-2)(x+1)=0",
          "explanation": "Two numbers that multiply to $-2$ and add to $-1$ are $-2$ and $+1$, giving these factors.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x=2\\ \\text{or}\\ x=-1",
          "explanation": "Setting each factor to zero gives the two $x$-values where the gradient equals $12$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 2 into the curve",
          "workingLatex": "y=2(2)^3-3(2)^2=16-12=4",
          "explanation": "Put $x=2$ into the original equation to find the height of the curve; this gives $y=4$, so one point is $(2,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = -1 into the curve",
          "workingLatex": "y=2(-1)^3-3(-1)^2=-2-3=-5",
          "explanation": "Put $x=-1$ into the curve. Note $2(-1)^3=-2$ and $-3(-1)^2=-3$, giving $y=-5$, so the other point is $(-1,-5)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the gradient equals 12 at each point",
          "workingLatex": "6(2)^2-6(2)=12,\\quad 6(-1)^2-6(-1)=12",
          "explanation": "Substituting each $x$ into the gradient function returns $12$ both times, confirming the tangents have the required gradient.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the two points",
          "workingLatex": "(2,4)\\ \\text{and}\\ (-1,-5)",
          "explanation": "These are the two points on the curve where the tangent has gradient $12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent has gradient $12$ at $(2,4)$ and $(-1,-5)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "normal",
      "gradient",
      "differentiation",
      "coordinate geometry",
      "y-intercept"
    ],
    "questionText": "The curve $C$ has equation $y=x^2-4x+5$. The normal to $C$ at the point $P(3,2)$ meets the $y$-axis at the point $Q$. Find the coordinates of $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P lies on the curve",
          "workingLatex": "y=(3)^2-4(3)+5=9-12+5=2",
          "explanation": "Before working with the point it is worth confirming it really is on the curve. Substituting $x=3$ gives $y=2$, which matches $P(3,2)$, so $P$ is genuinely on $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-4",
          "explanation": "The derivative tells us the gradient of the curve at any $x$. Differentiating term by term with the power rule turns $x^2$ into $2x$ and $-4x$ into $-4$; the constant $+5$ disappears.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at P",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3}=2(3)-4=2",
          "explanation": "The tangent gradient is the value of the gradient function at $x=3$. Substituting gives $2$, so the curve is rising with gradient $2$ at $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}}=-\\frac{1}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient. Flipping $2$ and changing the sign gives $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y-2=-\\frac{1}{2}(x-3)",
          "explanation": "A straight line through a known point $(3,2)$ with a known gradient is captured exactly by $y-y_1=m(x-x_1)$. This is the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-2=-\\frac{1}{2}x+\\frac{3}{2}",
          "explanation": "Multiplying $-\\frac{1}{2}$ into $(x-3)$ gives $-\\frac{1}{2}x+\\frac{3}{2}$. Keeping the fractions exact avoids rounding errors later.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make y the subject",
          "workingLatex": "y=-\\frac{1}{2}x+\\frac{7}{2}",
          "explanation": "Adding $2$ (which is $\\frac{4}{2}$) to both sides combines with $\\frac{3}{2}$ to give $\\frac{7}{2}$. This is the tidy equation of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the fact that the y-axis has x = 0",
          "workingLatex": "x=0",
          "explanation": "Every point on the $y$-axis has $x$-coordinate $0$. So to find where the normal meets the $y$-axis we set $x=0$ in its equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute to find the y-coordinate of Q",
          "workingLatex": "y=-\\frac{1}{2}(0)+\\frac{7}{2}=\\frac{7}{2}",
          "explanation": "With $x=0$ the first term vanishes, leaving $y=\\frac{7}{2}$. This is the height at which the normal crosses the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the coordinates of Q",
          "workingLatex": "Q=\\left(0,\\ \\frac{7}{2}\\right)",
          "explanation": "Combining $x=0$ with the value just found gives the crossing point. This is the required point $Q$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q=\\left(0,\\ \\frac{7}{2}\\right)$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "coordinate geometry",
      "axis intercepts"
    ],
    "questionText": "The curve $C$ has equation $y=x^2-6x+10$. The tangent to $C$ at the point $A(4,2)$ crosses the $x$-axis and the $y$-axis. Find the coordinates of both crossing points.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that A lies on the curve",
          "workingLatex": "y=(4)^2-6(4)+10=16-24+10=2",
          "explanation": "Substituting $x=4$ gives $y=2$, matching $A(4,2)$. Confirming the point is on the curve makes sure the tangent is being taken at the right place.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-6",
          "explanation": "The derivative gives the gradient of the curve at any point. The power rule turns $x^2$ into $2x$ and $-6x$ into $-6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at A",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=4}=2(4)-6=2",
          "explanation": "Evaluating the gradient function at $x=4$ gives the slope of the tangent there, which is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-2=2(x-4)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with the point $A(4,2)$ and gradient $2$ gives the equation of the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the tangent equation",
          "workingLatex": "y=2x-6",
          "explanation": "Expanding gives $y-2=2x-8$, and adding $2$ to both sides leaves $y=2x-6$. This clean form makes the intercepts easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set y = 0 to find the x-axis crossing",
          "workingLatex": "0=2x-6",
          "explanation": "A point on the $x$-axis has $y=0$. Substituting $y=0$ into the tangent equation lets us solve for where it crosses.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "2x=6\\ \\Rightarrow\\ x=3",
          "explanation": "Rearranging gives $x=3$, so the tangent cuts the $x$-axis at $(3,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set x = 0 to find the y-axis crossing",
          "workingLatex": "y=2(0)-6",
          "explanation": "A point on the $y$-axis has $x=0$. Substituting $x=0$ into the tangent equation gives the $y$-intercept.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the y-intercept",
          "workingLatex": "y=-6",
          "explanation": "With $x=0$ the equation gives $y=-6$, so the tangent cuts the $y$-axis at $(0,-6)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State both crossing points",
          "workingLatex": "(3,\\,0)\\quad\\text{and}\\quad(0,\\,-6)",
          "explanation": "Collecting the results, the tangent meets the axes at $(3,0)$ and $(0,-6)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangent crosses the $x$-axis at $(3,0)$ and the $y$-axis at $(0,-6)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "normal",
      "gradient",
      "differentiation",
      "distance",
      "coordinate geometry"
    ],
    "questionText": "The curve $C$ has equation $y=x^2$. The normal to $C$ at the point $P(2,4)$ meets the $y$-axis at the point $Q$. Find the exact length of $PQ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P lies on the curve",
          "workingLatex": "y=(2)^2=4",
          "explanation": "Substituting $x=2$ into $y=x^2$ gives $y=4$, which matches $P(2,4)$, so $P$ is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The derivative of $x^2$ by the power rule is $2x$; this gives the gradient of the curve at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at P",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=2(2)=4",
          "explanation": "Evaluating at $x=2$ gives the tangent gradient of $4$ at $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}}=-\\frac{1}{4}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $4$, which is $-\\frac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y-4=-\\frac{1}{4}(x-2)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $P(2,4)$ and gradient $-\\frac{1}{4}$ gives the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the normal equation",
          "workingLatex": "y=-\\frac{1}{4}x+\\frac{9}{2}",
          "explanation": "Expanding gives $y-4=-\\frac{1}{4}x+\\frac{1}{2}$, and adding $4$ gives $\\frac{1}{2}+4=\\frac{9}{2}$ for the intercept term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find Q by setting x = 0",
          "workingLatex": "y=-\\frac{1}{4}(0)+\\frac{9}{2}=\\frac{9}{2}\\ \\Rightarrow\\ Q=\\left(0,\\ \\frac{9}{2}\\right)",
          "explanation": "The $y$-axis has $x=0$; substituting gives the height $\\frac{9}{2}$, so $Q=\\left(0,\\tfrac{9}{2}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the distance formula for PQ",
          "workingLatex": "PQ=\\sqrt{(x_Q-x_P)^2+(y_Q-y_P)^2}",
          "explanation": "The length of a segment is found from the horizontal and vertical gaps between its ends using Pythagoras' theorem.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the horizontal and vertical differences",
          "workingLatex": "x_Q-x_P=0-2=-2,\\qquad y_Q-y_P=\\frac{9}{2}-4=\\frac{1}{2}",
          "explanation": "Subtracting the coordinates of $P(2,4)$ from $Q\\left(0,\\tfrac{9}{2}\\right)$ gives the gaps of $-2$ across and $\\frac{1}{2}$ up.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute into the distance formula",
          "workingLatex": "PQ=\\sqrt{(-2)^2+\\left(\\frac{1}{2}\\right)^2}=\\sqrt{4+\\frac{1}{4}}=\\sqrt{\\frac{17}{4}}",
          "explanation": "Squaring removes the signs; $4+\\frac{1}{4}=\\frac{17}{4}$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the surd",
          "workingLatex": "PQ=\\frac{\\sqrt{17}}{2}",
          "explanation": "The square root of $\\frac{17}{4}$ splits as $\\frac{\\sqrt{17}}{\\sqrt{4}}=\\frac{\\sqrt{17}}{2}$, which is the exact length.",
          "diagram": null
        }
      ],
      "finalAnswer": "$PQ=\\dfrac{\\sqrt{17}}{2}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "tangent",
      "normal",
      "gradient",
      "differentiation",
      "distance"
    ],
    "questionText": "The curve $C$ has equation $y=x^2-4x+7$. At the point $A(3,4)$ both the tangent and the normal to $C$ are drawn. The tangent meets the $x$-axis at $S$ and the normal meets the $x$-axis at $T$. Find the distance $ST$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that A lies on the curve",
          "workingLatex": "y=(3)^2-4(3)+7=9-12+7=4",
          "explanation": "Substituting $x=3$ gives $y=4$, matching $A(3,4)$, so the point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-4",
          "explanation": "The power rule gives the gradient of the curve at any $x$ as $2x-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at A",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3}=2(3)-4=2",
          "explanation": "Evaluating at $x=3$ gives the tangent gradient of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the tangent equation",
          "workingLatex": "y-4=2(x-3)\\ \\Rightarrow\\ y=2x-2",
          "explanation": "Using point-gradient form with $A(3,4)$ and gradient $2$, then simplifying, gives the tangent $y=2x-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find where the tangent meets the x-axis (point S)",
          "workingLatex": "0=2x-2\\ \\Rightarrow\\ x=1,\\quad S=(1,0)",
          "explanation": "Setting $y=0$ and solving gives $x=1$, so the tangent crosses the $x$-axis at $S(1,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}}=-\\frac{1}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $2$, giving $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the normal equation",
          "workingLatex": "y-4=-\\frac{1}{2}(x-3)\\ \\Rightarrow\\ y=-\\frac{1}{2}x+\\frac{11}{2}",
          "explanation": "Point-gradient form with gradient $-\\frac{1}{2}$ gives $y-4=-\\frac{1}{2}x+\\frac{3}{2}$; adding $4=\\frac{8}{2}$ gives the intercept $\\frac{11}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find where the normal meets the x-axis (point T)",
          "workingLatex": "0=-\\frac{1}{2}x+\\frac{11}{2}\\ \\Rightarrow\\ x=11,\\quad T=(11,0)",
          "explanation": "Setting $y=0$ gives $\\frac{1}{2}x=\\frac{11}{2}$, so $x=11$ and the normal crosses the $x$-axis at $T(11,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recognise both points lie on the x-axis",
          "workingLatex": "S=(1,0),\\qquad T=(11,0)",
          "explanation": "Since $S$ and $T$ share the same $y$-coordinate of $0$, the distance between them is simply the gap in their $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the distance ST",
          "workingLatex": "ST=11-1=10",
          "explanation": "The horizontal separation is $11-1=10$, so the distance $ST$ is $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$ST=10$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "point on line",
      "coordinate geometry"
    ],
    "questionText": "The curve $C$ has equation $y=x^2-5$. The tangent to $C$ at the point $P(3,4)$ passes through the point $(k,10)$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P lies on the curve",
          "workingLatex": "y=(3)^2-5=9-5=4",
          "explanation": "Substituting $x=3$ gives $y=4$, matching $P(3,4)$, so the tangent is being taken at a genuine point of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The derivative of $x^2-5$ is $2x$; the constant $-5$ contributes nothing to the gradient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at P",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3}=2(3)=6",
          "explanation": "Evaluating at $x=3$ gives the tangent gradient of $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-4=6(x-3)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $P(3,4)$ and gradient $6$ gives the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the tangent equation",
          "workingLatex": "y=6x-14",
          "explanation": "Expanding gives $y-4=6x-18$; adding $4$ leaves $y=6x-14$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the fact that (k, 10) lies on the tangent",
          "workingLatex": "10=6k-14",
          "explanation": "If the point $(k,10)$ is on the tangent, its coordinates must satisfy the line's equation. Substituting $x=k$ and $y=10$ gives an equation in $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the equation",
          "workingLatex": "6k=24",
          "explanation": "Adding $14$ to both sides isolates the $6k$ term, giving $6k=24$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for k",
          "workingLatex": "k=4",
          "explanation": "Dividing both sides by $6$ gives $k=4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the answer",
          "workingLatex": "6(4)-14=24-14=10\\ \\checkmark",
          "explanation": "Substituting $k=4$ back into the tangent gives $y=10$, confirming the point $(4,10)$ really lies on the tangent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=4$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "tangent",
      "cubic",
      "differentiation",
      "distance",
      "coordinate geometry"
    ],
    "questionText": "The curve $C$ has equation $y=x^3-4x$. The tangent to $C$ at the point $P(2,0)$ meets the $y$-axis at the point $Q$. Find the distance $OQ$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P lies on the curve",
          "workingLatex": "y=(2)^3-4(2)=8-8=0",
          "explanation": "Substituting $x=2$ gives $y=0$, matching $P(2,0)$, so $P$ is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=3x^2-4",
          "explanation": "The power rule turns $x^3$ into $3x^2$ and $-4x$ into $-4$, giving the gradient of the curve at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at P",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=3(2)^2-4=12-4=8",
          "explanation": "Evaluating at $x=2$ gives the tangent gradient of $8$; note $(2)^2=4$ so $3\\times4=12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-0=8(x-2)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $P(2,0)$ and gradient $8$ gives the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the tangent equation",
          "workingLatex": "y=8x-16",
          "explanation": "Expanding $8(x-2)$ gives $8x-16$; since the point had $y=0$ there is nothing further to add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set x = 0 to find Q on the y-axis",
          "workingLatex": "y=8(0)-16=-16",
          "explanation": "The $y$-axis has $x=0$; substituting gives $y=-16$, so the tangent crosses the $y$-axis at that height.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the coordinates of Q",
          "workingLatex": "Q=(0,-16)",
          "explanation": "Combining $x=0$ with $y=-16$ gives the crossing point $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the distance from the origin",
          "workingLatex": "OQ=\\sqrt{(0-0)^2+(-16-0)^2}",
          "explanation": "The distance from $O(0,0)$ to $Q$ uses Pythagoras. Because both points are on the $y$-axis, only the vertical gap contributes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the distance",
          "workingLatex": "OQ=\\sqrt{256}=16",
          "explanation": "Squaring $-16$ gives $256$, and its square root is $16$. So $Q$ is $16$ units below the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$OQ=16$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "midpoint",
      "axis intercepts"
    ],
    "questionText": "The curve $C$ has equation $y=x^2-4x+1$. The tangent to $C$ at the point $P(3,-2)$ meets the $x$-axis at $A$ and the $y$-axis at $B$. Find the coordinates of the midpoint of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P lies on the curve",
          "workingLatex": "y=(3)^2-4(3)+1=9-12+1=-2",
          "explanation": "Substituting $x=3$ gives $y=-2$, matching $P(3,-2)$, so the point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-4",
          "explanation": "The power rule gives the gradient of the curve at any $x$ as $2x-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at P",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3}=2(3)-4=2",
          "explanation": "Evaluating at $x=3$ gives the tangent gradient of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-(-2)=2(x-3)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $P(3,-2)$ and gradient $2$; the double negative comes from $y_1=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the tangent equation",
          "workingLatex": "y=2x-8",
          "explanation": "Expanding gives $y+2=2x-6$; subtracting $2$ leaves $y=2x-8$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find A where the tangent meets the x-axis",
          "workingLatex": "0=2x-8\\ \\Rightarrow\\ x=4,\\quad A=(4,0)",
          "explanation": "Setting $y=0$ and solving gives $x=4$, so the tangent meets the $x$-axis at $A(4,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find B where the tangent meets the y-axis",
          "workingLatex": "y=2(0)-8=-8,\\quad B=(0,-8)",
          "explanation": "Setting $x=0$ gives $y=-8$, so the tangent meets the $y$-axis at $B(0,-8)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the midpoint formula",
          "workingLatex": "M=\\left(\\frac{x_A+x_B}{2},\\ \\frac{y_A+y_B}{2}\\right)",
          "explanation": "The midpoint of a segment is the average of the endpoints' coordinates, taken separately in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the coordinates of A and B",
          "workingLatex": "M=\\left(\\frac{4+0}{2},\\ \\frac{0+(-8)}{2}\\right)",
          "explanation": "Placing $A(4,0)$ and $B(0,-8)$ into the formula prepares each average for evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the midpoint",
          "workingLatex": "M=(2,-4)",
          "explanation": "The averages give $\\frac{4}{2}=2$ and $\\frac{-8}{2}=-4$, so the midpoint of $AB$ is $(2,-4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The midpoint of $AB$ is $(2,-4)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "tags": [
      "normal",
      "gradient",
      "differentiation",
      "distance",
      "coordinate geometry"
    ],
    "questionText": "The curve $C$ has equation $y=x^2$. The normal to $C$ at the point $P(1,1)$ meets the $x$-axis at the point $A$. Find the exact length of $PA$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P lies on the curve",
          "workingLatex": "y=(1)^2=1",
          "explanation": "Substituting $x=1$ into $y=x^2$ gives $y=1$, matching $P(1,1)$, so the point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The derivative of $x^2$ is $2x$, giving the gradient of the curve at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at P",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=2(1)=2",
          "explanation": "Evaluating at $x=1$ gives the tangent gradient of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}}=-\\frac{1}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $2$, which is $-\\frac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y-1=-\\frac{1}{2}(x-1)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $P(1,1)$ and gradient $-\\frac{1}{2}$ gives the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the normal equation",
          "workingLatex": "y=-\\frac{1}{2}x+\\frac{3}{2}",
          "explanation": "Expanding gives $y-1=-\\frac{1}{2}x+\\frac{1}{2}$; adding $1=\\frac{2}{2}$ gives the intercept $\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find A where the normal meets the x-axis",
          "workingLatex": "0=-\\frac{1}{2}x+\\frac{3}{2}\\ \\Rightarrow\\ x=3,\\quad A=(3,0)",
          "explanation": "Setting $y=0$ gives $\\frac{1}{2}x=\\frac{3}{2}$, so $x=3$ and the normal meets the $x$-axis at $A(3,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the distance formula for PA",
          "workingLatex": "PA=\\sqrt{(x_A-x_P)^2+(y_A-y_P)^2}",
          "explanation": "The length of $PA$ comes from Pythagoras applied to the horizontal and vertical gaps between $P$ and $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the differences",
          "workingLatex": "x_A-x_P=3-1=2,\\qquad y_A-y_P=0-1=-1",
          "explanation": "Subtracting the coordinates of $P(1,1)$ from $A(3,0)$ gives gaps of $2$ across and $-1$ down.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the distance",
          "workingLatex": "PA=\\sqrt{(2)^2+(-1)^2}=\\sqrt{4+1}=\\sqrt{5}",
          "explanation": "Squaring gives $4+1=5$, so the exact length is $\\sqrt{5}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$PA=\\sqrt{5}$"
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "tangent",
      "gradient",
      "differentiation",
      "distance",
      "axis intercepts"
    ],
    "questionText": "The curve $C$ has equation $y=x^2-3x-3$. The tangent to $C$ at the point $P(3,-3)$ meets the $x$-axis at $A$ and the $y$-axis at $B$. Find the exact length of $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that P lies on the curve",
          "workingLatex": "y=(3)^2-3(3)-3=9-9-3=-3",
          "explanation": "Substituting $x=3$ gives $y=-3$, matching $P(3,-3)$, so the point is on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate to find the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x-3",
          "explanation": "The power rule gives the gradient of the curve at any $x$ as $2x-3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the tangent at P",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3}=2(3)-3=3",
          "explanation": "Evaluating at $x=3$ gives the tangent gradient of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-(-3)=3(x-3)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with $P(3,-3)$ and gradient $3$; the $y_1=-3$ gives the double negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the tangent equation",
          "workingLatex": "y=3x-12",
          "explanation": "Expanding gives $y+3=3x-9$; subtracting $3$ leaves $y=3x-12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find A where the tangent meets the x-axis",
          "workingLatex": "0=3x-12\\ \\Rightarrow\\ x=4,\\quad A=(4,0)",
          "explanation": "Setting $y=0$ and solving gives $x=4$, so the tangent meets the $x$-axis at $A(4,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find B where the tangent meets the y-axis",
          "workingLatex": "y=3(0)-12=-12,\\quad B=(0,-12)",
          "explanation": "Setting $x=0$ gives $y=-12$, so the tangent meets the $y$-axis at $B(0,-12)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the distance formula for AB",
          "workingLatex": "AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}",
          "explanation": "The length of $AB$ comes from Pythagoras applied to the horizontal and vertical gaps between $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the differences",
          "workingLatex": "x_B-x_A=0-4=-4,\\qquad y_B-y_A=-12-0=-12",
          "explanation": "Subtracting the coordinates of $A(4,0)$ from $B(0,-12)$ gives gaps of $-4$ across and $-12$ down.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute into the distance formula",
          "workingLatex": "AB=\\sqrt{(-4)^2+(-12)^2}=\\sqrt{16+144}=\\sqrt{160}",
          "explanation": "Squaring removes the signs; $16+144=160$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the surd",
          "workingLatex": "AB=\\sqrt{16\\times10}=4\\sqrt{10}",
          "explanation": "Since $160=16\\times10$ and $\\sqrt{16}=4$, the surd simplifies to $4\\sqrt{10}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB=4\\sqrt{10}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q051",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "cubic",
      "repeated root",
      "differentiation"
    ],
    "questionText": "The tangent to the curve $y=x^3$ at the point $(1,1)$ meets the curve again at the point $Q$. Find the coordinates of $Q$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve to get the gradient function",
          "workingLatex": "y=x^3 \\implies \\frac{dy}{dx}=3x^2",
          "explanation": "The derivative $\\frac{dy}{dx}$ gives the gradient of the curve at any point. By the power rule, $x^3$ differentiates to $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the tangent at $x=1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=3(1)^2=3",
          "explanation": "The tangent touches the curve at $(1,1)$, so its gradient equals the curve's gradient there. Substituting $x=1$ into $3x^2$ gives $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the equation of the tangent in point-gradient form",
          "workingLatex": "y-1=3(x-1)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with the point $(1,1)$ and gradient $m=3$ fixes the unique line that touches the curve there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the tangent to the form $y=mx+c$",
          "workingLatex": "y=3x-2",
          "explanation": "Expanding $3(x-1)=3x-3$ and adding the $1$ gives $y=3x-2$. This is the tangent we now intersect with the curve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the curve equal to the tangent to find all intersections",
          "workingLatex": "x^3=3x-2",
          "explanation": "At any point where the line meets the curve, both equations give the same $y$ for the same $x$, so we can equate them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into a cubic equal to zero",
          "workingLatex": "x^3-3x+2=0",
          "explanation": "Bringing every term to one side gives a cubic whose roots are exactly the $x$-coordinates of the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the key idea: a tangent produces a repeated root",
          "workingLatex": "(x-1)^2 \\text{ is a factor}",
          "explanation": "Because the line only touches (does not cross) the curve at $x=1$, that value is a double root of the cubic. Hence $(x-1)^2$ divides it exactly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor out one $(x-1)$",
          "workingLatex": "x^3-3x+2=(x-1)(x^2+x-2)",
          "explanation": "Dividing the cubic by $(x-1)$ leaves a quadratic. You can expand the right-hand side to check it returns the original cubic.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the remaining quadratic",
          "workingLatex": "x^2+x-2=(x-1)(x+2)",
          "explanation": "We need two numbers multiplying to $-2$ and adding to $+1$: these are $-1$ and $+2$. As expected, $(x-1)$ appears again, confirming the double root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the cubic in fully factored form",
          "workingLatex": "(x-1)^2(x+2)=0",
          "explanation": "The squared factor marks the point of tangency at $x=1$; the single factor gives one new root at $x=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify where the tangent meets the curve again",
          "workingLatex": "x=-2",
          "explanation": "The double root $x=1$ is the touching point. The remaining root $x=-2$ is the second point $Q$ we are asked for.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the $y$-coordinate of $Q$ from the curve",
          "workingLatex": "y=(-2)^3=-8",
          "explanation": "Substitute $x=-2$ into $y=x^3$ to get the height of $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check that $Q$ also lies on the tangent",
          "workingLatex": "3(-2)-2=-8 \\; \\checkmark",
          "explanation": "As a safeguard, $x=-2$ in $y=3x-2$ also gives $-8$, so $Q$ genuinely lies on both the curve and the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coordinates of $Q$",
          "workingLatex": "Q=(-2,-8)",
          "explanation": "This is the point where the tangent at $(1,1)$ meets the cubic a second time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q=(-2,-8)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q052",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "cubic",
      "repeated root",
      "differentiation"
    ],
    "questionText": "The tangent to the curve $y=x^3$ at the point $(2,8)$ meets the curve again at $Q$. Find the coordinates of $Q$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "y=x^3 \\implies \\frac{dy}{dx}=3x^2",
          "explanation": "The derivative gives the gradient of $y=x^3$ at any point. The power rule turns $x^3$ into $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the tangent at $x=2$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=3(2)^2=12",
          "explanation": "The tangent touches at $(2,8)$, so its gradient is the value of $3x^2$ when $x=2$, which is $12$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-8=12(x-2)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with the point $(2,8)$ and $m=12$ gives the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the tangent",
          "workingLatex": "y=12x-16",
          "explanation": "Expanding $12(x-2)=12x-24$ and adding $8$ gives $y=12x-16$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the curve equal to the tangent",
          "workingLatex": "x^3=12x-16",
          "explanation": "Intersection points share the same $x$ and $y$, so equating the two expressions locates them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into a cubic equal to zero",
          "workingLatex": "x^3-12x+16=0",
          "explanation": "Collecting all terms on one side gives a cubic whose roots are the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use tangency to spot a repeated root",
          "workingLatex": "(x-2)^2 \\text{ is a factor}",
          "explanation": "The line touches the curve at $x=2$, so $x=2$ is a double root and $(x-2)^2$ must be a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor out one $(x-2)$",
          "workingLatex": "x^3-12x+16=(x-2)(x^2+2x-8)",
          "explanation": "Dividing the cubic by $(x-2)$ leaves the quadratic $x^2+2x-8$; expanding back confirms this is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the quadratic",
          "workingLatex": "x^2+2x-8=(x-2)(x+4)",
          "explanation": "Two numbers multiplying to $-8$ and adding to $+2$ are $-2$ and $+4$. The repeated $(x-2)$ confirms the double root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the cubic fully factored",
          "workingLatex": "(x-2)^2(x+4)=0",
          "explanation": "The squared factor is the point of contact at $x=2$; the single factor gives the new root $x=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the second intersection",
          "workingLatex": "x=-4",
          "explanation": "Discarding the double root, the tangent meets the curve again where $x=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the $y$-coordinate of $Q$",
          "workingLatex": "y=(-4)^3=-64",
          "explanation": "Substituting $x=-4$ into $y=x^3$ gives the height of $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check $Q$ lies on the tangent",
          "workingLatex": "12(-4)-16=-64 \\; \\checkmark",
          "explanation": "Substituting $x=-4$ into $y=12x-16$ also gives $-64$, confirming the point lies on both.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coordinates of $Q$",
          "workingLatex": "Q=(-4,-64)",
          "explanation": "This is where the tangent at $(2,8)$ meets the cubic again.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q=(-4,-64)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q053",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "cubic",
      "repeated root",
      "differentiation"
    ],
    "questionText": "The tangent to the curve $y=x^3-2x$ at the point $(1,-1)$ meets the curve again at $Q$. Find the coordinates of $Q$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "y=x^3-2x \\implies \\frac{dy}{dx}=3x^2-2",
          "explanation": "Differentiate each term: $x^3$ gives $3x^2$ and $-2x$ gives $-2$. This is the gradient function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the tangent at $x=1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=3(1)^2-2=1",
          "explanation": "The tangent touches at $(1,-1)$, so its gradient is $3x^2-2$ evaluated at $x=1$, which is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-(-1)=1(x-1)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with the point $(1,-1)$ and gradient $1$. Note $y-y_1$ becomes $y+1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the tangent",
          "workingLatex": "y=x-2",
          "explanation": "$y+1=x-1$ rearranges to $y=x-2$, the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the curve equal to the tangent",
          "workingLatex": "x^3-2x=x-2",
          "explanation": "At an intersection the curve and line agree, so we equate the two expressions for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into a cubic equal to zero",
          "workingLatex": "x^3-3x+2=0",
          "explanation": "Moving $x-2$ across gives $x^3-2x-x+2=x^3-3x+2=0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use tangency to spot a repeated root",
          "workingLatex": "(x-1)^2 \\text{ is a factor}",
          "explanation": "The tangent touches at $x=1$, so this is a double root of the cubic and $(x-1)^2$ divides it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor out one $(x-1)$",
          "workingLatex": "x^3-3x+2=(x-1)(x^2+x-2)",
          "explanation": "Dividing by $(x-1)$ leaves the quadratic $x^2+x-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the quadratic",
          "workingLatex": "x^2+x-2=(x-1)(x+2)",
          "explanation": "Numbers multiplying to $-2$ and adding to $+1$ are $-1$ and $+2$, so $(x-1)$ reappears as expected.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the cubic fully factored",
          "workingLatex": "(x-1)^2(x+2)=0",
          "explanation": "The double factor $(x-1)^2$ is the contact point; the single factor gives $x=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the second intersection",
          "workingLatex": "x=-2",
          "explanation": "Setting aside the repeated root, the tangent meets the curve again at $x=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the $y$-coordinate from the curve",
          "workingLatex": "y=(-2)^3-2(-2)=-8+4=-4",
          "explanation": "Substitute $x=-2$ into $y=x^3-2x$: $(-2)^3=-8$ and $-2(-2)=+4$, giving $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check $Q$ lies on the tangent",
          "workingLatex": "(-2)-2=-4 \\; \\checkmark",
          "explanation": "Substituting $x=-2$ into $y=x-2$ also gives $-4$, confirming both pass through $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coordinates of $Q$",
          "workingLatex": "Q=(-2,-4)",
          "explanation": "This is where the tangent at $(1,-1)$ meets the curve a second time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q=(-2,-4)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q054",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "cubic",
      "repeated root",
      "differentiation"
    ],
    "questionText": "The tangent to the curve $y=x^3$ at the point $(-1,-1)$ meets the curve again at $Q$. Find the coordinates of $Q$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "y=x^3 \\implies \\frac{dy}{dx}=3x^2",
          "explanation": "The power rule turns $x^3$ into $3x^2$, giving the gradient at any $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the tangent at $x=-1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=-1}=3(-1)^2=3",
          "explanation": "Squaring removes the sign, so $3(-1)^2=3$. The tangent at $(-1,-1)$ has gradient $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-(-1)=3(x-(-1))",
          "explanation": "With the point $(-1,-1)$ and $m=3$, both subtractions of a negative become additions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the tangent",
          "workingLatex": "y=3x+2",
          "explanation": "$y+1=3(x+1)=3x+3$, so $y=3x+2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the curve equal to the tangent",
          "workingLatex": "x^3=3x+2",
          "explanation": "Equating the curve and the line locates every point they share.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into a cubic equal to zero",
          "workingLatex": "x^3-3x-2=0",
          "explanation": "Moving all terms to one side gives this cubic, whose roots are the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use tangency to spot a repeated root",
          "workingLatex": "(x+1)^2 \\text{ is a factor}",
          "explanation": "The tangent touches at $x=-1$, so $x=-1$ is a double root and $(x+1)^2$ is a factor of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor out one $(x+1)$",
          "workingLatex": "x^3-3x-2=(x+1)(x^2-x-2)",
          "explanation": "Dividing the cubic by $(x+1)$ leaves the quadratic $x^2-x-2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the quadratic",
          "workingLatex": "x^2-x-2=(x+1)(x-2)",
          "explanation": "Numbers multiplying to $-2$ and adding to $-1$ are $+1$ and $-2$, so $(x+1)$ reappears.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the cubic fully factored",
          "workingLatex": "(x+1)^2(x-2)=0",
          "explanation": "The double factor is the contact point at $x=-1$; the single factor gives $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Identify the second intersection",
          "workingLatex": "x=2",
          "explanation": "Ignoring the repeated root, the tangent meets the curve again where $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the $y$-coordinate of $Q$",
          "workingLatex": "y=(2)^3=8",
          "explanation": "Substitute $x=2$ into $y=x^3$ to get the height of $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check $Q$ lies on the tangent",
          "workingLatex": "3(2)+2=8 \\; \\checkmark",
          "explanation": "Substituting $x=2$ into $y=3x+2$ also gives $8$, confirming the point lies on both.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coordinates of $Q$",
          "workingLatex": "Q=(2,8)",
          "explanation": "This is where the tangent at $(-1,-1)$ meets the cubic again.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q=(2,8)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q055",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "normal",
      "perpendicular gradient",
      "parabola",
      "differentiation"
    ],
    "questionText": "The normal to the curve $y=x^2$ at the point $(1,1)$ meets the curve again at $Q$. Find the coordinates of $Q$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "y=x^2 \\implies \\frac{dy}{dx}=2x",
          "explanation": "The derivative $2x$ gives the gradient of the parabola at any point, which we need for the normal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the tangent at $x=1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=2(1)=2",
          "explanation": "At the point $(1,1)$ the tangent has gradient $2$; the normal is perpendicular to this tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}}=-\\frac{1}{2}",
          "explanation": "Perpendicular gradients multiply to $-1$, so the normal gradient is the negative reciprocal of $2$, namely $-\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y-1=-\\frac{1}{2}(x-1)",
          "explanation": "Using $y-y_1=m(x-x_1)$ with the point $(1,1)$ and the normal gradient $-\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the normal",
          "workingLatex": "y=-\\frac{1}{2}x+\\frac{3}{2}",
          "explanation": "Expanding gives $y=-\\tfrac12 x+\\tfrac12+1=-\\tfrac12 x+\\tfrac32$, the equation of the normal line.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the curve equal to the normal",
          "workingLatex": "x^2=-\\frac{1}{2}x+\\frac{3}{2}",
          "explanation": "Where the normal meets the curve, both give the same $y$, so we equate the two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fractions by multiplying by $2$",
          "workingLatex": "2x^2=-x+3",
          "explanation": "Multiplying every term by $2$ removes the halves and makes the algebra tidier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange into a quadratic equal to zero",
          "workingLatex": "2x^2+x-3=0",
          "explanation": "Collecting all terms on one side gives a quadratic whose roots are the two intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the known root at the point $P$",
          "workingLatex": "x=1 \\text{ is a root}",
          "explanation": "The normal starts at $P(1,1)$, which lies on the curve, so $x=1$ must satisfy this quadratic. Checking: $2+1-3=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise using the known root",
          "workingLatex": "2x^2+x-3=(x-1)(2x+3)",
          "explanation": "Since $x=1$ is a root, $(x-1)$ is a factor; the other factor must be $(2x+3)$ to reproduce the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the remaining factor",
          "workingLatex": "2x+3=0 \\implies x=-\\frac{3}{2}",
          "explanation": "Setting the second factor to zero gives the other intersection at $x=-\\tfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the $y$-coordinate of $Q$",
          "workingLatex": "y=\\left(-\\frac{3}{2}\\right)^2=\\frac{9}{4}",
          "explanation": "Substitute $x=-\\tfrac{3}{2}$ into $y=x^2$; squaring the fraction gives $\\tfrac{9}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check $Q$ lies on the normal",
          "workingLatex": "-\\frac{1}{2}\\left(-\\frac{3}{2}\\right)+\\frac{3}{2}=\\frac{3}{4}+\\frac{6}{4}=\\frac{9}{4} \\; \\checkmark",
          "explanation": "Substituting into the normal also gives $\\tfrac{9}{4}$, confirming $Q$ lies on both the curve and the normal.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coordinates of $Q$",
          "workingLatex": "Q=\\left(-\\frac{3}{2},\\frac{9}{4}\\right)",
          "explanation": "This is where the normal at $(1,1)$ meets the parabola again.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q=\\left(-\\dfrac{3}{2},\\dfrac{9}{4}\\right)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q056",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "normal",
      "perpendicular gradient",
      "parabola",
      "differentiation"
    ],
    "questionText": "The normal to the curve $y=x^2-4x$ at the point $(1,-3)$ meets the curve again at $Q$. Find the coordinates of $Q$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the curve",
          "workingLatex": "y=x^2-4x \\implies \\frac{dy}{dx}=2x-4",
          "explanation": "Differentiating term by term gives $2x-4$, the gradient of the curve at any point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the tangent at $x=1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=2(1)-4=-2",
          "explanation": "At $(1,-3)$ the tangent gradient is $2(1)-4=-2$. The normal will be perpendicular to this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the normal",
          "workingLatex": "m_{\\text{normal}}=-\\frac{1}{-2}=\\frac{1}{2}",
          "explanation": "The normal gradient is the negative reciprocal of the tangent gradient: $-\\tfrac{1}{-2}=\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y-(-3)=\\frac{1}{2}(x-1)",
          "explanation": "Using the point $(1,-3)$ and gradient $\\tfrac12$; note $y-(-3)$ becomes $y+3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the normal",
          "workingLatex": "y=\\frac{1}{2}x-\\frac{7}{2}",
          "explanation": "Expanding gives $y+3=\\tfrac12 x-\\tfrac12$, so $y=\\tfrac12 x-\\tfrac12-3=\\tfrac12 x-\\tfrac72$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the curve equal to the normal",
          "workingLatex": "x^2-4x=\\frac{1}{2}x-\\frac{7}{2}",
          "explanation": "Equating curve and normal finds every point they share.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fractions by multiplying by $2$",
          "workingLatex": "2x^2-8x=x-7",
          "explanation": "Multiplying through by $2$ removes the halves and simplifies the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange into a quadratic equal to zero",
          "workingLatex": "2x^2-9x+7=0",
          "explanation": "Bringing $x-7$ to the left gives $2x^2-8x-x+7=2x^2-9x+7=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the known root at the point $P$",
          "workingLatex": "x=1 \\text{ is a root}",
          "explanation": "The normal passes through $P(1,-3)$ which is on the curve, so $x=1$ solves the quadratic. Checking: $2-9+7=0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise using the known root",
          "workingLatex": "2x^2-9x+7=(x-1)(2x-7)",
          "explanation": "With $(x-1)$ as one factor, the other must be $(2x-7)$ to reproduce the middle and constant terms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the remaining factor",
          "workingLatex": "2x-7=0 \\implies x=\\frac{7}{2}",
          "explanation": "The second factor gives the other intersection at $x=\\tfrac{7}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the $y$-coordinate of $Q$",
          "workingLatex": "y=\\left(\\frac{7}{2}\\right)^2-4\\left(\\frac{7}{2}\\right)=\\frac{49}{4}-14=-\\frac{7}{4}",
          "explanation": "Substitute $x=\\tfrac72$ into the curve: $\\tfrac{49}{4}-14=\\tfrac{49}{4}-\\tfrac{56}{4}=-\\tfrac{7}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check $Q$ lies on the normal",
          "workingLatex": "\\frac{1}{2}\\left(\\frac{7}{2}\\right)-\\frac{7}{2}=\\frac{7}{4}-\\frac{14}{4}=-\\frac{7}{4} \\; \\checkmark",
          "explanation": "The normal gives the same $y$, confirming $Q$ lies on both curve and normal.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the coordinates of $Q$",
          "workingLatex": "Q=\\left(\\frac{7}{2},-\\frac{7}{4}\\right)",
          "explanation": "This is where the normal at $(1,-3)$ meets the curve again.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q=\\left(\\dfrac{7}{2},-\\dfrac{7}{4}\\right)$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q057",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "tangent",
      "discriminant",
      "point of contact",
      "parabola"
    ],
    "questionText": "Show that the line $y=4x-4$ is a tangent to the curve $y=x^2$, and find the point of contact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy for showing a line is a tangent",
          "workingLatex": "\\text{curve}=\\text{line}\\ \\Rightarrow\\ \\text{repeated root}",
          "explanation": "A line is a tangent to a curve when they meet at exactly one point. Setting the two equal and showing the resulting quadratic has a repeated root proves this.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the curve equal to the line",
          "workingLatex": "x^2=4x-4",
          "explanation": "Any intersection point satisfies both equations, so we equate the two expressions for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange into a quadratic equal to zero",
          "workingLatex": "x^2-4x+4=0",
          "explanation": "Bringing all terms to one side gives a quadratic whose number of roots decides how many times the line meets the curve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the coefficients",
          "workingLatex": "a=1,\\quad b=-4,\\quad c=4",
          "explanation": "Writing the quadratic as $ax^2+bx+c=0$ lets us apply the discriminant test.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the discriminant and what it tells us",
          "workingLatex": "\\Delta=b^2-4ac",
          "explanation": "The discriminant decides the number of real roots: $\\Delta>0$ gives two, $\\Delta=0$ gives one repeated root, and $\\Delta<0$ gives none.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the coefficients into the discriminant",
          "workingLatex": "\\Delta=(-4)^2-4(1)(4)",
          "explanation": "Insert $a=1$, $b=-4$, $c=4$ into $b^2-4ac$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the discriminant",
          "workingLatex": "\\Delta=16-16=0",
          "explanation": "The discriminant is exactly zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the line is a tangent",
          "workingLatex": "\\Delta=0 \\Rightarrow \\text{one repeated root} \\Rightarrow \\text{tangent}",
          "explanation": "Since $\\Delta=0$, the quadratic has a single repeated root, so the line meets the curve at exactly one point. That is precisely what it means for the line to be a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the repeated root by factorising",
          "workingLatex": "x^2-4x+4=(x-2)^2",
          "explanation": "A zero discriminant means the quadratic is a perfect square; here it factorises to $(x-2)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the point of contact",
          "workingLatex": "(x-2)^2=0 \\implies x=2",
          "explanation": "The repeated root gives the single shared $x$-coordinate, $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the $y$-coordinate of the contact point",
          "workingLatex": "y=(2)^2=4",
          "explanation": "Substitute $x=2$ into the curve $y=x^2$ to get $y=4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm tangency with a gradient check",
          "workingLatex": "\\frac{dy}{dx}=2x,\\quad \\left.\\frac{dy}{dx}\\right|_{x=2}=4",
          "explanation": "As a second confirmation, the curve's gradient at $x=2$ is $4$, which matches the line's gradient of $4$ — the line and curve travel in the same direction at contact.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion and the point of contact",
          "workingLatex": "(2,4)",
          "explanation": "Both the discriminant and the gradient check confirm $y=4x-4$ is a tangent, touching the curve at $(2,4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta=0$, so $y=4x-4$ is a tangent; the point of contact is $(2,4)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q058",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "tangent",
      "discriminant",
      "point of contact",
      "parabola"
    ],
    "questionText": "Show that the line $y=4x-5$ is a tangent to the curve $y=x^2-2x+4$, and find the point of contact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy",
          "workingLatex": "\\text{curve}=\\text{line}\\ \\Rightarrow\\ \\text{repeated root}",
          "explanation": "To show a line touches a curve, equate them and show the resulting quadratic has a single repeated root (discriminant zero).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the curve equal to the line",
          "workingLatex": "x^2-2x+4=4x-5",
          "explanation": "Points common to the curve and line satisfy both equations, so we equate the two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move every term to one side",
          "workingLatex": "x^2-2x+4-4x+5=0",
          "explanation": "Subtracting the line from the curve collects all terms on the left ready to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify into a quadratic",
          "workingLatex": "x^2-6x+9=0",
          "explanation": "Combining $-2x-4x=-6x$ and $4+5=9$ gives the tidy quadratic $x^2-6x+9=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficients",
          "workingLatex": "a=1,\\quad b=-6,\\quad c=9",
          "explanation": "Reading off $ax^2+bx+c=0$ prepares us to use the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the discriminant",
          "workingLatex": "\\Delta=b^2-4ac",
          "explanation": "The sign of $\\Delta$ tells us how many times the line meets the curve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coefficients",
          "workingLatex": "\\Delta=(-6)^2-4(1)(9)",
          "explanation": "Insert $a=1$, $b=-6$, $c=9$ into $b^2-4ac$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the discriminant",
          "workingLatex": "\\Delta=36-36=0",
          "explanation": "The discriminant comes out exactly zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude tangency",
          "workingLatex": "\\Delta=0 \\Rightarrow \\text{tangent}",
          "explanation": "A zero discriminant means one repeated root, so the line meets the curve at exactly one point — it is a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the repeated root",
          "workingLatex": "x^2-6x+9=(x-3)^2=0 \\implies x=3",
          "explanation": "The perfect-square factorisation gives the single contact value $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the $y$-coordinate of contact",
          "workingLatex": "y=(3)^2-2(3)+4=7",
          "explanation": "Substitute $x=3$ into the curve: $9-6+4=7$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check using the line",
          "workingLatex": "4(3)-5=7 \\; \\checkmark",
          "explanation": "The line gives the same $y=7$ at $x=3$, confirming the point lies on both.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm with a gradient check",
          "workingLatex": "\\frac{dy}{dx}=2x-2,\\quad \\left.\\frac{dy}{dx}\\right|_{x=3}=4",
          "explanation": "The curve's gradient at $x=3$ is $4$, exactly the line's gradient, giving an independent confirmation of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion and point of contact",
          "workingLatex": "(3,7)",
          "explanation": "So $y=4x-5$ is a tangent to the curve, touching it at $(3,7)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta=0$, so $y=4x-5$ is a tangent; the point of contact is $(3,7)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q059",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "tangent",
      "discriminant",
      "point of contact",
      "parabola"
    ],
    "questionText": "Show that the line $y=x-1$ is a tangent to the curve $y=x^2-3x+3$, and find the point of contact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy",
          "workingLatex": "\\text{curve}=\\text{line}\\ \\Rightarrow\\ \\text{repeated root}",
          "explanation": "A line is a tangent precisely when equating it with the curve gives a quadratic with a repeated root, i.e. discriminant zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the curve equal to the line",
          "workingLatex": "x^2-3x+3=x-1",
          "explanation": "We look for points common to both by equating their $y$-values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move every term to one side",
          "workingLatex": "x^2-3x+3-x+1=0",
          "explanation": "Subtracting the line collects all terms on the left.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify into a quadratic",
          "workingLatex": "x^2-4x+4=0",
          "explanation": "Combining $-3x-x=-4x$ and $3+1=4$ gives $x^2-4x+4=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficients",
          "workingLatex": "a=1,\\quad b=-4,\\quad c=4",
          "explanation": "Reading off $ax^2+bx+c=0$ lets us test the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the discriminant",
          "workingLatex": "\\Delta=b^2-4ac",
          "explanation": "Its value decides how many real intersection points the line and curve share.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coefficients",
          "workingLatex": "\\Delta=(-4)^2-4(1)(4)",
          "explanation": "Insert $a=1$, $b=-4$, $c=4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the discriminant",
          "workingLatex": "\\Delta=16-16=0",
          "explanation": "The discriminant is exactly zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude tangency",
          "workingLatex": "\\Delta=0 \\Rightarrow \\text{tangent}",
          "explanation": "With one repeated root the line meets the curve at a single point, so it is a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the repeated root",
          "workingLatex": "x^2-4x+4=(x-2)^2=0 \\implies x=2",
          "explanation": "The perfect square gives the single contact value $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the $y$-coordinate of contact",
          "workingLatex": "y=(2)^2-3(2)+3=1",
          "explanation": "Substitute $x=2$ into the curve: $4-6+3=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check using the line",
          "workingLatex": "(2)-1=1 \\; \\checkmark",
          "explanation": "The line gives $y=1$ too, so the point lies on both curve and line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm with a gradient check",
          "workingLatex": "\\frac{dy}{dx}=2x-3,\\quad \\left.\\frac{dy}{dx}\\right|_{x=2}=1",
          "explanation": "The curve's gradient at $x=2$ is $1$, equal to the line's gradient, confirming tangency independently.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion and point of contact",
          "workingLatex": "(2,1)",
          "explanation": "Hence $y=x-1$ is a tangent to the curve, touching it at $(2,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Delta=0$, so $y=x-1$ is a tangent; the point of contact is $(2,1)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "questionDiagram": null,
    "id": "al.y1.pure.tangents-normals.q060",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "tangent",
      "cubic",
      "repeated root",
      "point of contact"
    ],
    "questionText": "Show that the line $y=3x$ is a tangent to the curve $y=x^3+2$, and find the point of contact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy for a cubic",
          "workingLatex": "\\text{curve}=\\text{line}\\ \\Rightarrow\\ \\text{repeated root}",
          "explanation": "A line is a tangent to a curve where the equation curve $=$ line has a repeated root. For a cubic this shows up as a squared factor $(x-a)^2$ at the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the curve equal to the line",
          "workingLatex": "x^3+2=3x",
          "explanation": "Points shared by the curve and line satisfy both, so we equate the two expressions for $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange into a cubic equal to zero",
          "workingLatex": "x^3-3x+2=0",
          "explanation": "Moving $3x$ across gives a cubic whose roots are the intersection $x$-values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Plan how to detect the repeated root",
          "workingLatex": "\\text{seek } (x-a)^2 \\text{ factor}",
          "explanation": "If the line is a tangent, one root is repeated. We first find a root, then check whether it appears twice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test $x=1$ as a root",
          "workingLatex": "(1)^3-3(1)+2=0",
          "explanation": "Substituting $x=1$ gives $1-3+2=0$, so $x=1$ is a root of the cubic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out $(x-1)$",
          "workingLatex": "x^3-3x+2=(x-1)(x^2+x-2)",
          "explanation": "Dividing the cubic by $(x-1)$ leaves the quadratic $x^2+x-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "x^2+x-2=(x-1)(x+2)",
          "explanation": "Two numbers multiplying to $-2$ and adding to $+1$ are $-1$ and $+2$; note $(x-1)$ appears a second time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the cubic fully factored",
          "workingLatex": "(x-1)^2(x+2)=0",
          "explanation": "The factor $(x-1)$ occurs twice, so $x=1$ is a repeated (double) root, while $x=-2$ is a separate single root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the repeated root",
          "workingLatex": "(x-1)^2 \\Rightarrow \\text{tangent at } x=1",
          "explanation": "The double root $x=1$ means the line touches the curve there rather than crossing it — that is exactly what makes it a tangent. (It also crosses the curve once more at $x=-2$.)",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the $y$-coordinate of the contact point",
          "workingLatex": "y=(1)^3+2=3",
          "explanation": "Substitute $x=1$ into the curve $y=x^3+2$ to get $y=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cross-check using the line",
          "workingLatex": "3(1)=3 \\; \\checkmark",
          "explanation": "The line $y=3x$ gives $y=3$ at $x=1$ as well, so the contact point lies on both.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm with a gradient check",
          "workingLatex": "\\frac{dy}{dx}=3x^2,\\quad \\left.\\frac{dy}{dx}\\right|_{x=1}=3",
          "explanation": "The curve's gradient at $x=1$ is $3$, matching the line's gradient of $3$, an independent confirmation of tangency.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion and point of contact",
          "workingLatex": "(1,3)",
          "explanation": "The repeated root and the matching gradient both show $y=3x$ is a tangent to $y=x^3+2$, with point of contact $(1,3)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-1)^2$ is a repeated root, so $y=3x$ is a tangent; the point of contact is $(1,3)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "tangent",
      "area",
      "triangle",
      "axes"
    ],
    "questionText": "The curve is $y=x^2$. The tangent to the curve at the point $P(4,16)$ crosses the $x$-axis at $A$ and the $y$-axis at $B$. Find the area of triangle $OAB$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the curve, the point, and the plan",
          "workingLatex": "y=x^2, \\quad P(4,16)",
          "explanation": "To build the tangent line we first need its gradient at $P$, which comes from the derivative. Once we have the tangent's equation we can find where it meets each axis and then the area.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve to get the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The derivative gives the gradient of the curve at any $x$. By the power rule, $x^2$ differentiates to $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the gradient at $x=4$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=4}=2\\times 4=8",
          "explanation": "The tangent touches the curve at $P$, so it must have the same gradient as the curve there. Substituting $x=4$ gives a tangent gradient of $8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent using point-gradient form",
          "workingLatex": "y-16=8(x-4)",
          "explanation": "A line through $(4,16)$ with gradient $8$ has the form $y-y_1=m(x-x_1)$. This guarantees the line passes through $P$ and has the correct slope.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand and simplify into $y=mx+c$ form",
          "workingLatex": "y=8x-16",
          "explanation": "Expanding $8(x-4)=8x-32$ and adding $16$ gives $y=8x-16$. This form makes the intercepts easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $A$ by setting $y=0$ for the $x$-axis",
          "workingLatex": "0=8x-16",
          "explanation": "Every point on the $x$-axis has $y=0$, so setting $y=0$ locates where the tangent crosses it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the $x$-intercept",
          "workingLatex": "8x=16 \\Rightarrow x=2, \\quad A(2,0)",
          "explanation": "Rearranging gives $x=2$, so the tangent meets the $x$-axis at $A(2,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find $B$ by setting $x=0$ for the $y$-axis",
          "workingLatex": "y=8(0)-16=-16, \\quad B(0,-16)",
          "explanation": "Every point on the $y$-axis has $x=0$; substituting gives the $y$-intercept $B(0,-16)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the triangle $OAB$",
          "workingLatex": "O(0,0),\\ A(2,0),\\ B(0,-16)",
          "explanation": "Because $A$ lies on the $x$-axis and $B$ on the $y$-axis, the triangle has a right angle at the origin $O$, so the two axis-segments serve as its base and height.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the base and height as lengths",
          "workingLatex": "OA=|2|=2, \\quad OB=|-16|=16",
          "explanation": "Lengths are positive, so we take the magnitudes of the intercepts. The sign of $B$ only tells us it lies below the origin.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the area formula for a right triangle",
          "workingLatex": "\\text{Area}=\\frac{1}{2}\\times OA\\times OB",
          "explanation": "For a right-angled triangle the two perpendicular sides act as base and height, so the area is half their product.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the two lengths",
          "workingLatex": "=\\frac{1}{2}\\times 2\\times 16",
          "explanation": "Putting in $OA=2$ and $OB=16$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the area",
          "workingLatex": "=16",
          "explanation": "Half of $32$ is $16$, giving the area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State and sanity-check the answer",
          "workingLatex": "\\text{Area}=16",
          "explanation": "The tangent $y=8x-16$ genuinely passes through $(4,16)$ since $8\\times 4-16=16$, so the intercepts and area are trustworthy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Area}=16$ square units."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "tangent",
      "reciprocal",
      "area",
      "triangle"
    ],
    "questionText": "The curve is $y=\\dfrac{12}{x}$. The tangent at the point $P(2,6)$ meets the $x$-axis at $A$ and the $y$-axis at $B$. Find the area of triangle $OAB$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the curve and check the point",
          "workingLatex": "y=\\frac{12}{x}=12x^{-1}, \\quad P(2,6)",
          "explanation": "Writing $\\frac{12}{x}$ as $12x^{-1}$ lets us use the power rule. Check $P$ lies on the curve: $\\frac{12}{2}=6$, so $P(2,6)$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate using the power rule",
          "workingLatex": "\\frac{dy}{dx}=-12x^{-2}=-\\frac{12}{x^2}",
          "explanation": "The power rule on $12x^{-1}$ multiplies by $-1$ and lowers the power to $-2$, giving $-12x^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the gradient at $x=2$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=-\\frac{12}{4}=-3",
          "explanation": "Substituting $x=2$ gives the tangent gradient $-3$. The negative sign reflects that this curve is decreasing here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-6=-3(x-2)",
          "explanation": "A line through $(2,6)$ with gradient $-3$ is $y-y_1=m(x-x_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to $y=mx+c$ form",
          "workingLatex": "y=-3x+12",
          "explanation": "Expanding $-3(x-2)=-3x+6$ and adding $6$ gives $y=-3x+12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $A$ by setting $y=0$",
          "workingLatex": "0=-3x+12",
          "explanation": "The $x$-axis is where $y=0$, so set the tangent equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the $x$-intercept",
          "workingLatex": "3x=12 \\Rightarrow x=4, \\quad A(4,0)",
          "explanation": "So the tangent crosses the $x$-axis at $A(4,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find $B$ by setting $x=0$",
          "workingLatex": "y=-3(0)+12=12, \\quad B(0,12)",
          "explanation": "Setting $x=0$ gives the $y$-intercept $B(0,12)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Describe the triangle $OAB$",
          "workingLatex": "O(0,0),\\ A(4,0),\\ B(0,12)",
          "explanation": "With $A$ on the $x$-axis and $B$ on the $y$-axis, triangle $OAB$ is right-angled at $O$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify base and height",
          "workingLatex": "OA=4, \\quad OB=12",
          "explanation": "The perpendicular axis-segments are the base and height of the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the right-triangle area formula",
          "workingLatex": "\\text{Area}=\\frac{1}{2}\\times OA\\times OB",
          "explanation": "Half the product of the two perpendicular sides gives the area.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the lengths",
          "workingLatex": "=\\frac{1}{2}\\times 4\\times 12",
          "explanation": "Insert $OA=4$ and $OB=12$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the area",
          "workingLatex": "=24",
          "explanation": "Half of $48$ is $24$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sanity-check with a known property",
          "workingLatex": "\\text{Area}=24",
          "explanation": "Notice $P(2,6)$ is exactly the midpoint of $AB$ — a known property of tangents to $y=\\frac{k}{x}$ — which confirms our working.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Area}=24$ square units."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "tangent",
      "normal",
      "area",
      "triangle"
    ],
    "questionText": "The curve is $y=x^2$. At the point $P(2,4)$ the tangent meets the $x$-axis at $A$ and the normal meets the $x$-axis at $C$. Find the area of triangle $ACP$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the point and the plan",
          "workingLatex": "y=x^2, \\quad P(2,4)",
          "explanation": "We need both the tangent and the normal at $P$. Their crossings with the $x$-axis give two vertices, and $P$ is the third.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The power rule gives the gradient function $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the tangent gradient at $x=2$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=4",
          "explanation": "At $x=2$ the curve's gradient, and hence the tangent's gradient, is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent equation",
          "workingLatex": "y-4=4(x-2) \\Rightarrow y=4x-4",
          "explanation": "Point-gradient form through $(2,4)$, then expanded to slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $A$, the tangent's $x$-intercept",
          "workingLatex": "0=4x-4 \\Rightarrow x=1, \\quad A(1,0)",
          "explanation": "Setting $y=0$ finds where the tangent meets the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}}=-\\frac{1}{4}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y-4=-\\frac{1}{4}(x-2)",
          "explanation": "The normal passes through the same point $P$ but with the perpendicular gradient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the normal equation",
          "workingLatex": "y=-\\frac{1}{4}x+\\frac{9}{2}",
          "explanation": "Expanding $-\\frac{1}{4}(x-2)=-\\frac{1}{4}x+\\frac{1}{2}$ and adding $4$ gives the constant $\\frac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find $C$, the normal's $x$-intercept",
          "workingLatex": "0=-\\frac{1}{4}x+\\frac{9}{2} \\Rightarrow x=18, \\quad C(18,0)",
          "explanation": "Multiplying through by $4$ gives $0=-x+18$, so $x=18$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List the triangle's vertices",
          "workingLatex": "A(1,0),\\ C(18,0),\\ P(2,4)",
          "explanation": "Two vertices lie on the $x$-axis, while the third, $P$, sits above it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the base along the $x$-axis",
          "workingLatex": "AC=18-1=17",
          "explanation": "The base runs along the $x$-axis from $A$ to $C$, so its length is the difference of the $x$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the height above the $x$-axis",
          "workingLatex": "h=4",
          "explanation": "The height is the perpendicular distance from $P$ to the $x$-axis, which is simply $P$'s $y$-coordinate, $4$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply the area formula",
          "workingLatex": "\\text{Area}=\\frac{1}{2}\\times 17\\times 4",
          "explanation": "Area of a triangle is half the base times the height.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the area",
          "workingLatex": "=34",
          "explanation": "$\\frac{1}{2}\\times 68=34$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify perpendicularity",
          "workingLatex": "4\\times\\left(-\\frac{1}{4}\\right)=-1",
          "explanation": "The tangent and normal gradients multiply to $-1$, confirming they are perpendicular, so the construction is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Area}=34$ square units."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "tangent",
      "discriminant",
      "parameter"
    ],
    "questionText": "The line $y=3x+c$ is a tangent to the curve $y=x^2+x+4$. Find the value of the constant $c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tangency condition",
          "workingLatex": "\\text{tangent} \\Leftrightarrow \\text{discriminant}=0",
          "explanation": "A line is a tangent when it touches the curve at exactly one point. Setting curve equal to line gives a quadratic; a single repeated root means its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the curve equal to the line",
          "workingLatex": "x^2+x+4=3x+c",
          "explanation": "At any intersection the $y$-values match, so we equate the two expressions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move everything to one side",
          "workingLatex": "x^2+x+4-3x-c=0",
          "explanation": "Collecting all terms on the left forms a standard quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the quadratic",
          "workingLatex": "x^2-2x+(4-c)=0",
          "explanation": "Combining $x-3x=-2x$ leaves the constant term as $4-c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficients",
          "workingLatex": "A=1,\\quad B=-2,\\quad C=4-c",
          "explanation": "Labelling the quadratic's coefficients lets us apply the discriminant formula cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the discriminant condition",
          "workingLatex": "B^2-4AC=0",
          "explanation": "For a repeated (tangent) root the discriminant $B^2-4AC$ must equal zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coefficients",
          "workingLatex": "(-2)^2-4(1)(4-c)=0",
          "explanation": "Insert $B=-2$, $A=1$ and $C=4-c$ into the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "4-16+4c=0",
          "explanation": "Here $-4(4-c)=-16+4c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect the constant terms",
          "workingLatex": "4c-12=0",
          "explanation": "Combining $4-16=-12$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for $c$",
          "workingLatex": "c=3",
          "explanation": "Dividing by $4$ gives the value of the constant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the point of contact",
          "workingLatex": "x^2-2x+1=0 \\Rightarrow (x-1)^2=0",
          "explanation": "Substituting $c=3$ gives a perfect square, confirming a single repeated root at $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the $y$-coordinate of contact",
          "workingLatex": "x=1,\\quad y=3(1)+3=6",
          "explanation": "Using the tangent $y=3x+3$ at $x=1$ gives the contact point $(1,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the point lies on the curve",
          "workingLatex": "1^2+1+4=6",
          "explanation": "The point satisfies the curve as well, confirming the line touches it there. So $c=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c=3$ (the line $y=3x+3$ touches the curve at $(1,6)$)."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "tangent",
      "discriminant",
      "parameter"
    ],
    "questionText": "The line $y=mx+2$ is a tangent to the curve $y=x^2-4x+6$. Find the two possible values of the constant $m$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tangency condition",
          "workingLatex": "\\text{tangent} \\Leftrightarrow \\text{discriminant}=0",
          "explanation": "One touching point means the quadratic formed by equating line and curve has a repeated root, so its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the curve equal to the line",
          "workingLatex": "x^2-4x+6=mx+2",
          "explanation": "Match the $y$-values where the line meets the curve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect terms on one side",
          "workingLatex": "x^2-4x+6-mx-2=0",
          "explanation": "Bring everything to the left to form a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Group the $x$-terms and constants",
          "workingLatex": "x^2-(4+m)x+4=0",
          "explanation": "Combining $-4x-mx=-(4+m)x$ and $6-2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficients",
          "workingLatex": "A=1,\\quad B=-(4+m),\\quad C=4",
          "explanation": "Note that $B$ depends on the unknown $m$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the discriminant condition",
          "workingLatex": "B^2-4AC=0",
          "explanation": "Set the discriminant to zero for tangency.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the coefficients",
          "workingLatex": "(4+m)^2-4(1)(4)=0",
          "explanation": "Since $B^2=(4+m)^2$ and $4AC=16$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "(4+m)^2-16=0",
          "explanation": "Because $4\\times 4=16$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Isolate the square",
          "workingLatex": "(4+m)^2=16",
          "explanation": "Move $16$ across to prepare for a square root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the square root of both sides",
          "workingLatex": "4+m=\\pm 4",
          "explanation": "Taking both roots is what produces two possible values of $m$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the positive case",
          "workingLatex": "4+m=4 \\Rightarrow m=0",
          "explanation": "The first tangent is the horizontal line $y=2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve the negative case",
          "workingLatex": "4+m=-4 \\Rightarrow m=-8",
          "explanation": "The second tangent has gradient $-8$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the $m=0$ tangent",
          "workingLatex": "x^2-4x+4=0 \\Rightarrow x=2,\\ (2,2)",
          "explanation": "With $m=0$ the contact point is $(2,2)$, and $2^2-4(2)+6=2$ checks out.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the $m=-8$ tangent",
          "workingLatex": "x^2+4x+4=0 \\Rightarrow x=-2,\\ (-2,18)",
          "explanation": "With $m=-8$ the contact point is $(-2,18)$, and $(-2)^2-4(-2)+6=18$ checks out.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State both answers",
          "workingLatex": "m=0 \\ \\text{or} \\ m=-8",
          "explanation": "Both values give a genuine tangent, so both are valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m=0$ or $m=-8$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "tangent",
      "gradient",
      "parameter"
    ],
    "questionText": "The curve $y=x^2+kx+3$ has a tangent of gradient $7$ at the point where $x=2$. Find the value of $k$ and the equation of the tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Connect the gradient to the derivative",
          "workingLatex": "\\text{gradient of tangent}=\\left.\\frac{dy}{dx}\\right|_{x=2}",
          "explanation": "The tangent's gradient equals the curve's derivative at that $x$. We use the given gradient to pin down $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate term by term",
          "workingLatex": "\\frac{d}{dx}(x^2)=2x,\\ \\frac{d}{dx}(kx)=k,\\ \\frac{d}{dx}(3)=0",
          "explanation": "$k$ is a constant coefficient, so $kx$ differentiates to $k$; the constant $3$ vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the gradient function",
          "workingLatex": "\\frac{dy}{dx}=2x+k",
          "explanation": "Adding the pieces gives the gradient function in terms of $x$ and $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the derivative at $x=2$ equal to $7$",
          "workingLatex": "2(2)+k=7",
          "explanation": "The derivative at $x=2$ must equal the given gradient $7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the left side",
          "workingLatex": "4+k=7",
          "explanation": "Since $2\\times 2=4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $k$",
          "workingLatex": "k=3",
          "explanation": "Subtracting $4$ from both sides.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the full curve",
          "workingLatex": "y=x^2+3x+3",
          "explanation": "Substituting $k=3$ back into the equation of the curve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the $y$-coordinate at $x=2$",
          "workingLatex": "y=(2)^2+3(2)+3",
          "explanation": "We need the point where the tangent touches, so evaluate the curve at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the point of contact",
          "workingLatex": "=4+6+3=13, \\quad (2,13)",
          "explanation": "So the tangent touches the curve at $(2,13)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use point-gradient form with $m=7$",
          "workingLatex": "y-13=7(x-2)",
          "explanation": "A line through $(2,13)$ with the required gradient $7$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Expand the bracket",
          "workingLatex": "y=7x-14+13",
          "explanation": "Distributing $7$ over $(x-2)$ gives $7x-14$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify to the tangent equation",
          "workingLatex": "y=7x-1",
          "explanation": "Combining $-14+13=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the gradient",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=2}=2(2)+3=7",
          "explanation": "The derivative at $x=2$ is indeed $7$, matching the requirement.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the point satisfies the tangent",
          "workingLatex": "7(2)-1=13",
          "explanation": "The point $(2,13)$ lies on $y=7x-1$, confirming both results.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k=3$ and the tangent is $y=7x-1$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "tangent",
      "normal",
      "area",
      "triangle"
    ],
    "questionText": "The curve is $y=x^2$. At the point $P(1,1)$ the tangent meets the $y$-axis at $B$ and the normal meets the $y$-axis at $C$. Find the area of triangle $BCP$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the point and the plan",
          "workingLatex": "y=x^2, \\quad P(1,1)",
          "explanation": "We need the tangent and normal at $P$, their $y$-axis crossings $B$ and $C$, and then the triangle they form with $P$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=2x",
          "explanation": "The power rule gives the gradient function $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the tangent gradient at $x=1$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1}=2",
          "explanation": "At $x=1$ the curve's gradient, and so the tangent's, is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the tangent equation",
          "workingLatex": "y-1=2(x-1) \\Rightarrow y=2x-1",
          "explanation": "Point-gradient form through $(1,1)$, expanded to slope-intercept form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $B$, the tangent's $y$-intercept",
          "workingLatex": "x=0:\\ y=-1, \\quad B(0,-1)",
          "explanation": "The $y$-axis is where $x=0$; the tangent meets it at $B(0,-1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the normal gradient",
          "workingLatex": "m_{\\text{normal}}=-\\frac{1}{2}",
          "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the normal in point-gradient form",
          "workingLatex": "y-1=-\\frac{1}{2}(x-1)",
          "explanation": "The normal passes through $P$ with the perpendicular gradient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the normal equation",
          "workingLatex": "y=-\\frac{1}{2}x+\\frac{3}{2}",
          "explanation": "Expanding $-\\frac{1}{2}(x-1)=-\\frac{1}{2}x+\\frac{1}{2}$ and adding $1$ gives $\\frac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find $C$, the normal's $y$-intercept",
          "workingLatex": "x=0:\\ y=\\frac{3}{2}, \\quad C\\left(0,\\tfrac{3}{2}\\right)",
          "explanation": "Setting $x=0$ gives the $y$-intercept $C\\left(0,\\tfrac{3}{2}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the base along the $y$-axis",
          "workingLatex": "BC=\\frac{3}{2}-(-1)=\\frac{5}{2}",
          "explanation": "Both $B$ and $C$ lie on the $y$-axis, so the base length is the difference of their $y$-coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the height from $P$ to the $y$-axis",
          "workingLatex": "h=1",
          "explanation": "The height is the horizontal distance from $P$ to the $y$-axis, i.e. $P$'s $x$-coordinate, $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Apply the area formula",
          "workingLatex": "\\text{Area}=\\frac{1}{2}\\times\\frac{5}{2}\\times 1",
          "explanation": "Half the base times the height.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the area",
          "workingLatex": "=\\frac{5}{4}",
          "explanation": "$\\frac{1}{2}\\times\\frac{5}{2}=\\frac{5}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify perpendicularity",
          "workingLatex": "2\\times\\left(-\\frac{1}{2}\\right)=-1",
          "explanation": "The tangent and normal gradients multiply to $-1$, so they are perpendicular and the working is sound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Area}=\\frac{5}{4}$ (i.e. $1.25$) square units."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "discriminant",
      "parameter",
      "coordinates"
    ],
    "questionText": "The line $y=x+c$ is a tangent to the curve $y=x^2-5x+10$. Find the value of $c$ and the coordinates of the point of contact.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tangency condition",
          "workingLatex": "\\text{tangent} \\Leftrightarrow \\text{discriminant}=0",
          "explanation": "Touching at exactly one point means the quadratic formed has a repeated root, so its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the curve equal to the line",
          "workingLatex": "x^2-5x+10=x+c",
          "explanation": "Equate the two expressions to find the intersection.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect terms on one side",
          "workingLatex": "x^2-5x+10-x-c=0",
          "explanation": "Bring everything to the left to form a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the quadratic",
          "workingLatex": "x^2-6x+(10-c)=0",
          "explanation": "Combining $-5x-x=-6x$ leaves the constant term $10-c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficients",
          "workingLatex": "A=1,\\quad B=-6,\\quad C=10-c",
          "explanation": "Labelling the coefficients ready for the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the discriminant condition",
          "workingLatex": "(-6)^2-4(1)(10-c)=0",
          "explanation": "Set $B^2-4AC=0$ for a repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand",
          "workingLatex": "36-40+4c=0",
          "explanation": "Here $-4(10-c)=-40+4c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "4c-4=0",
          "explanation": "Combining $36-40=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for $c$",
          "workingLatex": "c=1",
          "explanation": "Dividing by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the $x$-coordinate of contact",
          "workingLatex": "x^2-6x+9=0 \\Rightarrow (x-3)^2=0",
          "explanation": "With $c=1$ the quadratic is a perfect square, giving the repeated root $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the $y$-coordinate of contact",
          "workingLatex": "y=x+1=3+1=4",
          "explanation": "Using the tangent line $y=x+1$ at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the point of contact",
          "workingLatex": "(3,4)",
          "explanation": "So the line touches the curve at $(3,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the point lies on the curve",
          "workingLatex": "3^2-5(3)+10=9-15+10=4",
          "explanation": "The point also satisfies the curve, confirming tangency. So $c=1$ and contact is at $(3,4)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c=1$ and the point of contact is $(3,4)$."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "tangent",
      "cubic",
      "area",
      "triangle"
    ],
    "questionText": "The curve is $y=x^3$. The tangent at the point $P(3,27)$ crosses the $x$-axis at $A$ and the $y$-axis at $B$. Find the area of triangle $OAB$, where $O$ is the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the point and set the plan",
          "workingLatex": "y=x^3, \\quad P(3,27)",
          "explanation": "Check $P$ lies on the curve: $3^3=27$, so $P(3,27)$ is valid. We now build the tangent and find its axis crossings.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the curve",
          "workingLatex": "\\frac{dy}{dx}=3x^2",
          "explanation": "The power rule on $x^3$ gives $3x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the gradient at $x=3$",
          "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=3}=3(3)^2",
          "explanation": "Substitute $x=3$ to get the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the gradient",
          "workingLatex": "=3\\times 9=27",
          "explanation": "So the tangent gradient at $P$ is $27$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the tangent in point-gradient form",
          "workingLatex": "y-27=27(x-3)",
          "explanation": "A line through $(3,27)$ with gradient $27$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y=27x-81+27",
          "explanation": "Distributing $27$ over $(x-3)$ gives $27x-81$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the tangent equation",
          "workingLatex": "y=27x-54",
          "explanation": "Combining $-81+27=-54$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find $A$ by setting $y=0$",
          "workingLatex": "0=27x-54",
          "explanation": "The $x$-axis is where $y=0$, so set the tangent to zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the $x$-intercept",
          "workingLatex": "27x=54 \\Rightarrow x=2, \\quad A(2,0)",
          "explanation": "Dividing by $27$ gives $x=2$, so $A(2,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find $B$ by setting $x=0$",
          "workingLatex": "x=0:\\ y=-54, \\quad B(0,-54)",
          "explanation": "Setting $x=0$ gives the $y$-intercept $B(0,-54)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Describe the triangle $OAB$",
          "workingLatex": "O(0,0),\\ A(2,0),\\ B(0,-54)",
          "explanation": "The triangle is right-angled at $O$ because $A$ and $B$ lie on the two axes.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify base and height",
          "workingLatex": "OA=2, \\quad OB=54",
          "explanation": "Take the magnitudes of the intercepts as the two perpendicular sides.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply the area formula",
          "workingLatex": "\\text{Area}=\\frac{1}{2}\\times 2\\times 54",
          "explanation": "Half the product of the perpendicular sides.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the area",
          "workingLatex": "=54",
          "explanation": "$\\frac{1}{2}\\times 108=54$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Sanity-check the tangent through $P$",
          "workingLatex": "27\\times 3-54=27",
          "explanation": "The tangent passes through $P$ since $27(3)-54=27$, confirming the intercepts and area.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Area}=54$ square units."
    }
  },
  {
    "id": "al.y1.pure.tangents-normals.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Tangents and normals",
    "subtopicId": "al.y1.pure.tangents-normals",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "tangent",
      "discriminant",
      "parameter",
      "coordinates"
    ],
    "questionText": "The line $y=mx$ passes through the origin and is a tangent to the curve $y=x^2+4$. Find the two possible values of $m$ and the coordinates of each point of contact.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tangency condition",
          "workingLatex": "\\text{tangent} \\Leftrightarrow \\text{discriminant}=0",
          "explanation": "A line touching the curve once gives a quadratic with a repeated root, so its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the curve equal to the line",
          "workingLatex": "x^2+4=mx",
          "explanation": "Equate the curve and the line $y=mx$ to find where they meet.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange into a quadratic",
          "workingLatex": "x^2-mx+4=0",
          "explanation": "Collect all terms on one side to form a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the coefficients",
          "workingLatex": "A=1,\\quad B=-m,\\quad C=4",
          "explanation": "Here $B$ carries the unknown gradient $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the discriminant",
          "workingLatex": "B^2-4AC=m^2-16",
          "explanation": "Since $B^2=(-m)^2=m^2$ and $4AC=16$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the discriminant to zero",
          "workingLatex": "m^2-16=0",
          "explanation": "Tangency requires the discriminant to vanish.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Isolate $m^2$",
          "workingLatex": "m^2=16",
          "explanation": "Rearrange to prepare for a square root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "m=\\pm 4",
          "explanation": "Both signs are valid, giving two tangents to the curve from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute $m=4$ into the quadratic",
          "workingLatex": "x^2-4x+4=0 \\Rightarrow (x-2)^2=0",
          "explanation": "With $m=4$ the quadratic is a perfect square, so $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the first point of contact",
          "workingLatex": "x=2:\\ y=4(2)=8, \\quad (2,8)",
          "explanation": "Using $y=mx=4x$, the contact point is $(2,8)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute $m=-4$ into the quadratic",
          "workingLatex": "x^2+4x+4=0 \\Rightarrow (x+2)^2=0",
          "explanation": "With $m=-4$ the quadratic is again a perfect square, so $x=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the second point of contact",
          "workingLatex": "x=-2:\\ y=-4(-2)=8, \\quad (-2,8)",
          "explanation": "Using $y=-4x$, the contact point is $(-2,8)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify both points lie on the curve",
          "workingLatex": "(\\pm 2)^2+4=8",
          "explanation": "Both points satisfy $y=x^2+4$, confirming they lie on the curve.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State both answers",
          "workingLatex": "m=4\\ \\text{at}\\ (2,8); \\quad m=-4\\ \\text{at}\\ (-2,8)",
          "explanation": "Both tangents are valid; by symmetry they touch the curve at mirror-image points.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m=4$ (touching at $(2,8)$) or $m=-4$ (touching at $(-2,8)$)."
    }
  }
];
