import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.circles.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "circles",
      "centre-radius",
      "standard-form"
    ],
    "questionText": "A circle has equation $(x-2)^2+(y-3)^2=25$. Write down the coordinates of its centre and the length of its radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "Every circle can be written in this form, where $(a,b)$ is the centre and $r$ is the radius. Matching our equation to it lets us read the values straight off.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare with our equation",
          "workingLatex": "(x-2)^2+(y-3)^2=25",
          "explanation": "We line our circle up against the standard form so each part corresponds: the number in the first bracket links to $a$, the second to $b$, and the right-hand side to $r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the x-coordinate of the centre",
          "workingLatex": "x-a=x-2 \\Rightarrow a=2",
          "explanation": "The bracket is $(x-2)$ and the standard form has $(x-a)$, so we flip the sign of the number inside to get $a=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the y-coordinate of the centre",
          "workingLatex": "y-b=y-3 \\Rightarrow b=3",
          "explanation": "The same idea applies to the $y$ bracket: $(y-3)$ matches $(y-b)$, so $b=3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the centre",
          "workingLatex": "(a,b)=(2,3)",
          "explanation": "The centre is simply the pair $(a,b)$ we have just found.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the radius",
          "workingLatex": "r^2=25 \\Rightarrow r=\\sqrt{25}=5",
          "explanation": "The right-hand side is $r^2$, so we take the positive square root to get the radius $r=5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "(x-2)^2+(y-3)^2=5^2",
          "explanation": "Rewriting the right-hand side as $5^2$ confirms the radius is $5$ and that everything is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre $(2,3)$, radius $5$."
    }
  },
  {
    "id": "al.y1.pure.circles.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "circles",
      "centre-radius",
      "sign-flip"
    ],
    "questionText": "A circle has equation $(x+4)^2+(y-1)^2=36$. Write down the coordinates of its centre and the length of its radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "The centre is $(a,b)$ and the radius is $r$, so we compare our equation to this template to read the values off.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare with our equation",
          "workingLatex": "(x+4)^2+(y-1)^2=36",
          "explanation": "Notice the first bracket has a plus sign, which we must handle carefully when finding the centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the x-coordinate of the centre",
          "workingLatex": "x+4=x-(-4) \\Rightarrow a=-4",
          "explanation": "A plus inside the bracket means the coordinate is negative: rewriting $(x+4)$ as $(x-(-4))$ shows $a=-4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the y-coordinate of the centre",
          "workingLatex": "y-1 \\Rightarrow b=1",
          "explanation": "The $y$ bracket is a straightforward subtraction, so $b=1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the centre",
          "workingLatex": "(a,b)=(-4,1)",
          "explanation": "Combining the two coordinates gives the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the radius",
          "workingLatex": "r^2=36 \\Rightarrow r=\\sqrt{36}=6",
          "explanation": "Taking the positive square root of the right-hand side gives the radius $r=6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "(x+4)^2+(y-1)^2=6^2",
          "explanation": "Writing $36$ as $6^2$ confirms the radius, and flipping the signs of $(-4,1)$ back inside the brackets reproduces the original equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre $(-4,1)$, radius $6$."
    }
  },
  {
    "id": "al.y1.pure.circles.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "circles",
      "centre-radius",
      "sign-flip"
    ],
    "questionText": "A circle has equation $(x+5)^2+(y+2)^2=49$. Write down the coordinates of its centre and the length of its radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "The centre is $(a,b)$ and the radius is $r$; comparing to this form lets us extract both.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare with our equation",
          "workingLatex": "(x+5)^2+(y+2)^2=49",
          "explanation": "Both brackets contain plus signs, so we expect both coordinates of the centre to be negative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the x-coordinate",
          "workingLatex": "x+5=x-(-5) \\Rightarrow a=-5",
          "explanation": "Rewriting $(x+5)$ as $(x-(-5))$ makes the flipped sign clear, giving $a=-5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the y-coordinate",
          "workingLatex": "y+2=y-(-2) \\Rightarrow b=-2",
          "explanation": "The same reasoning applies to the $y$ bracket, so $b=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the centre",
          "workingLatex": "(a,b)=(-5,-2)",
          "explanation": "Both flipped signs combine to give a centre in the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the radius",
          "workingLatex": "r^2=49 \\Rightarrow r=\\sqrt{49}=7",
          "explanation": "The positive square root of $49$ gives the radius $r=7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "(x+5)^2+(y+2)^2=7^2",
          "explanation": "Writing $49$ as $7^2$ and flipping $(-5,-2)$ back into the brackets recovers the original equation, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre $(-5,-2)$, radius $7$."
    }
  },
  {
    "id": "al.y1.pure.circles.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "circles",
      "centre-radius",
      "surd-radius"
    ],
    "questionText": "A circle has equation $(x-3)^2+(y-6)^2=20$. Write down the coordinates of its centre and give the radius as a simplified surd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "As always, the centre is $(a,b)$ and the radius is $r$, found by comparing to this template.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the centre",
          "workingLatex": "a=3,\\ b=6 \\Rightarrow (3,6)",
          "explanation": "Both brackets are subtractions, so the signs stay as they are and the centre is $(3,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify r squared",
          "workingLatex": "r^2=20",
          "explanation": "The right-hand side of the equation is always $r^2$, so here $r^2=20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "r=\\sqrt{20}",
          "explanation": "The radius is the positive square root of $r^2$. Since $20$ is not a perfect square, we will simplify the surd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split off a square factor",
          "workingLatex": "\\sqrt{20}=\\sqrt{4\\times 5}",
          "explanation": "We look for the largest perfect-square factor of $20$, which is $4$, and rewrite the number as a product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{4\\times 5}=\\sqrt{4}\\,\\sqrt{5}=2\\sqrt{5}",
          "explanation": "The square root of the perfect square comes out as a whole number, leaving $2\\sqrt{5}$ in simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "(2\\sqrt{5})^2=4\\times 5=20",
          "explanation": "Squaring our simplified radius returns $20$, matching the right-hand side, so the surd is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre $(3,6)$, radius $2\\sqrt{5}$."
    }
  },
  {
    "id": "al.y1.pure.circles.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "circles",
      "centre-radius",
      "origin"
    ],
    "questionText": "A circle has equation $x^2+y^2=81$. Write down the coordinates of its centre and the length of its radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "The centre is $(a,b)$ and the radius is $r$. We compare our equation to this to read the values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite to match the form",
          "workingLatex": "(x-0)^2+(y-0)^2=81",
          "explanation": "There are no numbers being subtracted inside the brackets, which is the same as subtracting $0$, so we make that explicit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the centre",
          "workingLatex": "a=0,\\ b=0",
          "explanation": "With zeros in both brackets, the centre coordinates are both $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the centre",
          "workingLatex": "(a,b)=(0,0)",
          "explanation": "A circle of this form is centred at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the radius",
          "workingLatex": "r^2=81 \\Rightarrow r=\\sqrt{81}=9",
          "explanation": "Taking the positive square root of $81$ gives the radius $r=9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "x^2+y^2=9^2",
          "explanation": "Writing $81$ as $9^2$ confirms the radius and shows the equation is consistent with a circle centred at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre $(0,0)$, radius $9$."
    }
  },
  {
    "id": "al.y1.pure.circles.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "circles",
      "form-equation",
      "centre-radius"
    ],
    "questionText": "Find the equation of the circle with centre $(4,7)$ and radius $3$. Give your answer in the form $(x-a)^2+(y-b)^2=r^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "This template lets us build a circle's equation once we know its centre $(a,b)$ and radius $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the centre values",
          "workingLatex": "a=4,\\ b=7",
          "explanation": "The centre is given directly, so $a$ and $b$ are just its coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the radius",
          "workingLatex": "r=3",
          "explanation": "The radius is stated in the question, so we can use it directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute r squared",
          "workingLatex": "r^2=3^2=9",
          "explanation": "The standard form needs $r^2$ rather than $r$, so we square the radius.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the form",
          "workingLatex": "(x-4)^2+(y-7)^2=9",
          "explanation": "We place $a=4$, $b=7$ and $r^2=9$ into the template to build the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by reading back",
          "workingLatex": "(x-4)^2+(y-7)^2=9 \\Rightarrow \\text{centre }(4,7),\\ r=3",
          "explanation": "Reading the equation back gives the centre $(4,7)$ and radius $3$, exactly as required, so the equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-4)^2+(y-7)^2=9$"
    }
  },
  {
    "id": "al.y1.pure.circles.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "circles",
      "form-equation",
      "sign-flip"
    ],
    "questionText": "Find the equation of the circle with centre $(-3,5)$ and radius $4$. Give your answer in the form $(x-a)^2+(y-b)^2=r^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "We build the equation from the centre $(a,b)$ and radius $r$ using this template.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the centre values",
          "workingLatex": "a=-3,\\ b=5",
          "explanation": "The centre is given, so $a=-3$ and $b=5$ come straight from its coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Handle the negative coordinate",
          "workingLatex": "x-a=x-(-3)=x+3",
          "explanation": "Subtracting a negative number turns into addition, so the first bracket becomes $(x+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the y-bracket",
          "workingLatex": "y-b=y-5",
          "explanation": "Since $b=5$ is positive, the $y$ bracket is a straightforward subtraction, $(y-5)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute r squared",
          "workingLatex": "r^2=4^2=16",
          "explanation": "The template uses $r^2$, so we square the radius to get $16$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Assemble the equation",
          "workingLatex": "(x+3)^2+(y-5)^2=16",
          "explanation": "Combining the two brackets with $r^2=16$ gives the full equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by reading back",
          "workingLatex": "(x+3)^2+(y-5)^2=16 \\Rightarrow \\text{centre }(-3,5),\\ r=4",
          "explanation": "Flipping the signs inside the brackets recovers the centre $(-3,5)$ and $\\sqrt{16}=4$, confirming the equation is right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x+3)^2+(y-5)^2=16$"
    }
  },
  {
    "id": "al.y1.pure.circles.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "circles",
      "form-equation",
      "origin"
    ],
    "questionText": "Find the equation of the circle with centre at the origin and radius $10$. Give your answer in the form $x^2+y^2=r^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "We start from the general circle equation and simplify it for a centre at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the centre values",
          "workingLatex": "a=0,\\ b=0",
          "explanation": "The origin is the point $(0,0)$, so both centre coordinates are $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the brackets",
          "workingLatex": "(x-0)^2+(y-0)^2=x^2+y^2",
          "explanation": "Subtracting $0$ leaves the variables unchanged, so the brackets collapse to $x^2+y^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute r squared",
          "workingLatex": "r^2=10^2=100",
          "explanation": "We square the radius because the equation uses $r^2$ on the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation",
          "workingLatex": "x^2+y^2=100",
          "explanation": "Putting the simplified left-hand side together with $r^2=100$ gives the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check by reading back",
          "workingLatex": "x^2+y^2=100 \\Rightarrow \\text{centre }(0,0),\\ r=\\sqrt{100}=10",
          "explanation": "The equation describes a circle centred at the origin with radius $\\sqrt{100}=10$, matching the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2+y^2=100$"
    }
  },
  {
    "id": "al.y1.pure.circles.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "circles",
      "surd-radius",
      "centre-radius"
    ],
    "questionText": "A circle has equation $(x-1)^2+(y+2)^2=45$. Find the radius of the circle, giving your answer as a simplified surd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall where the radius lives",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "In the standard form the right-hand side is $r^2$, so that is where we look to find the radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify r squared",
          "workingLatex": "r^2=45",
          "explanation": "Comparing our equation to the template, the right-hand side gives $r^2=45$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the square root",
          "workingLatex": "r=\\sqrt{45}",
          "explanation": "The radius is the positive square root of $r^2$. Since $45$ is not a perfect square, we simplify the surd.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split off a square factor",
          "workingLatex": "\\sqrt{45}=\\sqrt{9\\times 5}",
          "explanation": "The largest perfect-square factor of $45$ is $9$, so we write $45$ as $9\\times 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{9\\times 5}=\\sqrt{9}\\,\\sqrt{5}=3\\sqrt{5}",
          "explanation": "The root of the perfect square becomes the whole number $3$, leaving $3\\sqrt{5}$ in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "(3\\sqrt{5})^2=9\\times 5=45",
          "explanation": "Squaring $3\\sqrt{5}$ returns $45$, matching $r^2$, so the simplified radius is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "Radius $=3\\sqrt{5}$."
    }
  },
  {
    "id": "al.y1.pure.circles.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "circles",
      "point-on-circle",
      "substitution"
    ],
    "questionText": "A circle has equation $(x-2)^2+(y-1)^2=25$. Determine whether the point $(5,5)$ lies on the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the test",
          "workingLatex": "(x-2)^2+(y-1)^2=25",
          "explanation": "A point lies on a circle exactly when its coordinates satisfy the circle's equation, so we will substitute the point in and compare the two sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the point",
          "workingLatex": "(5-2)^2+(5-1)^2",
          "explanation": "We put $x=5$ and $y=5$ into the left-hand side of the equation to evaluate it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the brackets",
          "workingLatex": "(3)^2+(4)^2",
          "explanation": "Working out each bracket first keeps the arithmetic tidy before squaring.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square each term",
          "workingLatex": "9+16",
          "explanation": "Squaring $3$ gives $9$ and squaring $4$ gives $16$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the results",
          "workingLatex": "9+16=25",
          "explanation": "Adding the two squares gives the value of the left-hand side for this point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with r squared",
          "workingLatex": "25=25",
          "explanation": "The left-hand side equals the right-hand side $r^2=25$, so the point satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "(5,5)\\ \\text{lies on the circle}",
          "explanation": "Because both sides match exactly, the point sits precisely on the circle rather than inside or outside it.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes: substituting gives $25=25$, so $(5,5)$ lies on the circle."
    }
  },
  {
    "id": "al.y1.pure.circles.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "circles",
      "form-equation",
      "point-on-circle"
    ],
    "questionText": "A circle has centre $(1,2)$ and passes through the point $(4,6)$. Find $r^2$ and hence write down the equation of the circle in the form $(x-a)^2+(y-b)^2=r^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the radius",
          "workingLatex": "r=\\text{distance from }(1,2)\\text{ to }(4,6)",
          "explanation": "The radius is the distance from the centre to any point on the circle, so the radius equals the distance from $(1,2)$ to the given point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the distance-squared formula",
          "workingLatex": "r^2=(x_2-x_1)^2+(y_2-y_1)^2",
          "explanation": "We work with $r^2$ directly using Pythagoras, which avoids taking a square root only to square it again later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coordinates",
          "workingLatex": "r^2=(4-1)^2+(6-2)^2",
          "explanation": "Subtracting the centre's coordinates from the point's coordinates gives the horizontal and vertical gaps.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the brackets",
          "workingLatex": "r^2=(3)^2+(4)^2",
          "explanation": "The horizontal gap is $3$ and the vertical gap is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "r^2=9+16=25",
          "explanation": "Squaring and adding gives $r^2=25$, which is all the equation needs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the equation",
          "workingLatex": "(x-1)^2+(y-2)^2=25",
          "explanation": "We place the centre $(1,2)$ into the brackets and $r^2=25$ on the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the point fits",
          "workingLatex": "(4-1)^2+(6-2)^2=9+16=25",
          "explanation": "Substituting the point $(4,6)$ back into the equation gives $25$, confirming it lies on the circle we found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r^2=25$, so the circle is $(x-1)^2+(y-2)^2=25$."
    }
  },
  {
    "id": "al.y1.pure.circles.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "circles",
      "equation-of-circle",
      "surd-radius"
    ],
    "questionText": "Find the equation of the circle with centre $(2,-3)$ and radius $\\sqrt{13}$. Give your answer in the form $(x-a)^2+(y-b)^2=r^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "Any circle can be written using its centre $(a,b)$ and radius $r$. Slotting the numbers into this template is all that is needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the centre",
          "workingLatex": "a=2,\\quad b=-3",
          "explanation": "The centre $(2,-3)$ gives the values of $a$ and $b$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the radius",
          "workingLatex": "r=\\sqrt{13}",
          "explanation": "The radius is given as the surd $\\sqrt{13}$, so we keep it in that exact form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the radius",
          "workingLatex": "r^2=(\\sqrt{13})^2=13",
          "explanation": "The right-hand side of the equation is $r^2$, and squaring a square root simply removes it, leaving $13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the x-part",
          "workingLatex": "(x-2)^2",
          "explanation": "Replacing $a$ with $2$ gives the $x$ bracket. We subtract the centre coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the y-part",
          "workingLatex": "(y-(-3))^2=(y+3)^2",
          "explanation": "Because $b=-3$ is negative, subtracting it becomes adding, turning the bracket into $(y+3)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the full equation",
          "workingLatex": "(x-2)^2+(y+3)^2=13",
          "explanation": "Putting the two brackets together with $r^2=13$ on the right gives the finished equation of the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-2)^2+(y+3)^2=13$"
    }
  },
  {
    "id": "al.y1.pure.circles.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "centre",
      "diameter",
      "midpoint"
    ],
    "questionText": "The points $A(1,2)$ and $B(7,10)$ are the endpoints of a diameter of a circle. Find the coordinates of the centre of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Link the centre to the diameter",
          "workingLatex": "\\text{centre}=\\text{midpoint of }AB",
          "explanation": "The centre sits exactly halfway along any diameter, so it is the midpoint of $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the midpoint formula",
          "workingLatex": "\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)",
          "explanation": "The midpoint averages the two $x$-coordinates and the two $y$-coordinates separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Average the x-coordinates",
          "workingLatex": "\\frac{1+7}{2}=\\frac{8}{2}=4",
          "explanation": "Adding the $x$-values and halving gives the $x$-coordinate of the centre.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Average the y-coordinates",
          "workingLatex": "\\frac{2+10}{2}=\\frac{12}{2}=6",
          "explanation": "Doing the same with the $y$-values gives the $y$-coordinate of the centre.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the centre",
          "workingLatex": "(4,6)",
          "explanation": "Combining the two averages gives the coordinates of the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check it is genuinely halfway",
          "workingLatex": "1+3=4,\\quad 7-3=4",
          "explanation": "The $x$-value $4$ is $3$ across from both $1$ and $7$, confirming the point is truly in the middle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4,6)$"
    }
  },
  {
    "id": "al.y1.pure.circles.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "circles",
      "radius",
      "diameter",
      "distance"
    ],
    "questionText": "The points $A(-1,2)$ and $B(5,10)$ are the ends of a diameter of a circle. Find the radius of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the approach",
          "workingLatex": "r=\\tfrac{1}{2}\\times\\text{diameter}",
          "explanation": "The distance from $A$ to $B$ is the full diameter, and the radius is half of that.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the distance formula",
          "workingLatex": "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
          "explanation": "The length between two points comes from Pythagoras applied to the horizontal and vertical gaps.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the coordinates",
          "workingLatex": "d=\\sqrt{(5-(-1))^2+(10-2)^2}",
          "explanation": "Take away the coordinates of $A$ from those of $B$; subtracting $-1$ becomes adding.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify inside the root",
          "workingLatex": "=\\sqrt{6^2+8^2}=\\sqrt{36+64}",
          "explanation": "The gaps are $6$ across and $8$ up, and squaring each prepares them to be added.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the diameter",
          "workingLatex": "=\\sqrt{100}=10",
          "explanation": "Adding gives $100$, whose square root is a clean $10$: this is the diameter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve to get the radius",
          "workingLatex": "r=\\frac{10}{2}=5",
          "explanation": "Halving the diameter gives the radius, which is a tidy whole number here.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r=5$"
    }
  },
  {
    "id": "al.y1.pure.circles.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "circles",
      "equation-of-circle",
      "diameter"
    ],
    "questionText": "The points $A(2,1)$ and $B(8,9)$ are the endpoints of a diameter of a circle. Find the equation of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide what is needed",
          "workingLatex": "\\text{need centre and radius}",
          "explanation": "To write a circle equation we need its centre (the midpoint) and its radius (half the diameter).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the centre as the midpoint",
          "workingLatex": "\\left(\\frac{2+8}{2},\\frac{1+9}{2}\\right)=(5,5)",
          "explanation": "Averaging the coordinates of $A$ and $B$ gives the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the diameter length",
          "workingLatex": "d=\\sqrt{(8-2)^2+(9-1)^2}",
          "explanation": "The distance from $A$ to $B$ is the diameter, found with the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the diameter",
          "workingLatex": "=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10",
          "explanation": "The gaps of $6$ and $8$ give a diameter of $10$, a familiar right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Get the radius and its square",
          "workingLatex": "r=\\frac{10}{2}=5,\\quad r^2=25",
          "explanation": "Half the diameter is the radius, and squaring it gives the number for the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "This template takes the centre $(a,b)$ and the squared radius.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "(x-5)^2+(y-5)^2=25",
          "explanation": "Putting in centre $(5,5)$ and $r^2=25$ produces the equation of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with endpoint A",
          "workingLatex": "(2-5)^2+(1-5)^2=9+16=25\\ \\checkmark",
          "explanation": "Point $A(2,1)$ satisfies the equation, confirming it really lies on the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-5)^2+(y-5)^2=25$"
    }
  },
  {
    "id": "al.y1.pure.circles.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "circles",
      "point-position",
      "distance"
    ],
    "questionText": "A circle has equation $(x-2)^2+(y-1)^2=25$. Determine whether the point $P(8,9)$ lies inside, on, or outside the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify centre and radius",
          "workingLatex": "\\text{centre}=(2,1),\\quad r=5",
          "explanation": "Comparing with the standard form gives the centre $(2,1)$ and radius $\\sqrt{25}=5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the distance to P",
          "workingLatex": "d=\\sqrt{(8-2)^2+(9-1)^2}",
          "explanation": "The key idea is to measure how far $P$ is from the centre and compare it with the radius.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify inside the root",
          "workingLatex": "=\\sqrt{6^2+8^2}=\\sqrt{36+64}",
          "explanation": "The horizontal and vertical gaps are $6$ and $8$, which we square and add.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the distance",
          "workingLatex": "=\\sqrt{100}=10",
          "explanation": "The distance from the centre to $P$ comes out as a clean $10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the radius",
          "workingLatex": "d=10,\\quad r=5",
          "explanation": "Now we hold the distance next to the radius to see which is larger.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Draw the conclusion",
          "workingLatex": "10>5\\ \\Rightarrow\\ \\text{outside}",
          "explanation": "Because $P$ is further from the centre than the radius, it lies outside the circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm using squares",
          "workingLatex": "d^2=100>25=r^2",
          "explanation": "Comparing squared values avoids surds and confirms the same result: outside.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P$ lies outside the circle, since its distance $10$ from the centre is greater than the radius $5$."
    }
  },
  {
    "id": "al.y1.pure.circles.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "axis-intercepts",
      "origin"
    ],
    "questionText": "A circle has equation $x^2+y^2=36$. Find the coordinates of the points where the circle crosses the $x$-axis and the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the centre and radius",
          "workingLatex": "\\text{centre}=(0,0),\\quad r=6",
          "explanation": "This circle is centred at the origin with radius $\\sqrt{36}=6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the x-axis condition",
          "workingLatex": "y=0",
          "explanation": "Every point on the $x$-axis has $y=0$, so we set $y$ to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute and solve",
          "workingLatex": "x^2+0^2=36\\ \\Rightarrow\\ x^2=36",
          "explanation": "With $y=0$ the equation collapses to a simple equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the x-axis crossings",
          "workingLatex": "x=\\pm6\\ \\Rightarrow\\ (6,0),\\ (-6,0)",
          "explanation": "A square root gives both a positive and a negative solution, one crossing on each side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the y-axis condition",
          "workingLatex": "x=0",
          "explanation": "Every point on the $y$-axis has $x=0$, so we set $x$ to zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and solve",
          "workingLatex": "0^2+y^2=36\\ \\Rightarrow\\ y^2=36",
          "explanation": "With $x=0$ the equation reduces to a simple equation in $y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-axis crossings",
          "workingLatex": "y=\\pm6\\ \\Rightarrow\\ (0,6),\\ (0,-6)",
          "explanation": "Again the square root gives two points, one above and one below the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x$-axis: $(6,0)$ and $(-6,0)$; $y$-axis: $(0,6)$ and $(0,-6)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "axis-intercepts",
      "y-axis"
    ],
    "questionText": "A circle has equation $(x-3)^2+(y-2)^2=25$. Find the coordinates of the points where the circle crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the y-axis condition",
          "workingLatex": "x=0",
          "explanation": "Points on the $y$-axis all have $x=0$, so that is the value to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x = 0",
          "workingLatex": "(0-3)^2+(y-2)^2=25",
          "explanation": "Putting $x=0$ into the equation leaves an equation involving only $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the constant",
          "workingLatex": "9+(y-2)^2=25",
          "explanation": "The term $(0-3)^2$ evaluates to $9$, tidying the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the y-bracket",
          "workingLatex": "(y-2)^2=16",
          "explanation": "Subtracting $9$ from both sides leaves the squared bracket on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "y-2=\\pm4",
          "explanation": "Undoing the square gives two possibilities, one positive and one negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for y",
          "workingLatex": "y=6\\ \\text{or}\\ y=-2",
          "explanation": "Adding $2$ to each case gives the two $y$-values where the circle meets the axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the coordinates",
          "workingLatex": "(0,6),\\ (0,-2)",
          "explanation": "Each $y$-value pairs with $x=0$ to give a crossing point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check a point",
          "workingLatex": "(0-3)^2+(6-2)^2=9+16=25\\ \\checkmark",
          "explanation": "Testing $(0,6)$ confirms it satisfies the original equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(0,6)$ and $(0,-2)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "diameter",
      "endpoints"
    ],
    "questionText": "A circle has equation $(x-5)^2+(y-2)^2=16$. Find the coordinates of the two ends of the horizontal diameter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify centre and radius",
          "workingLatex": "\\text{centre}=(5,2),\\quad r=\\sqrt{16}=4",
          "explanation": "Reading from the standard form gives centre $(5,2)$ and radius $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the horizontal diameter",
          "workingLatex": "y=2\\ \\text{(level with the centre)}",
          "explanation": "A horizontal diameter runs left-to-right through the centre, so its $y$-value stays at $2$; the ends sit one radius each side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Move one radius right",
          "workingLatex": "(5+4,\\,2)=(9,2)",
          "explanation": "Adding the radius to the $x$-coordinate reaches the right-hand end of the diameter.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Move one radius left",
          "workingLatex": "(5-4,\\,2)=(1,2)",
          "explanation": "Subtracting the radius from the $x$-coordinate reaches the left-hand end.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the two ends",
          "workingLatex": "(1,2),\\ (9,2)",
          "explanation": "These two points are the ends of the horizontal diameter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check a point on the circle",
          "workingLatex": "(9-5)^2+(2-2)^2=16+0=16\\ \\checkmark",
          "explanation": "Testing $(9,2)$ satisfies the equation, confirming it lies on the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,2)$ and $(9,2)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "equation",
    "tags": [
      "circles",
      "equation-of-circle",
      "through-origin"
    ],
    "questionText": "Find the equation of the circle with centre $(3,4)$ that passes through the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret passing through the origin",
          "workingLatex": "r=\\text{distance from }(3,4)\\text{ to }(0,0)",
          "explanation": "If the circle passes through the origin, then the origin is on the circle, so its distance from the centre equals the radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the distance",
          "workingLatex": "r=\\sqrt{(3-0)^2+(4-0)^2}",
          "explanation": "The distance formula measures the gap from the centre $(3,4)$ to the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the radius",
          "workingLatex": "=\\sqrt{9+16}=\\sqrt{25}=5",
          "explanation": "The classic $3$, $4$, $5$ triangle gives a clean radius of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the radius",
          "workingLatex": "r^2=25",
          "explanation": "The right-hand side of the circle equation uses $r^2$, which is $25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the equation",
          "workingLatex": "(x-3)^2+(y-4)^2=25",
          "explanation": "Substituting the centre $(3,4)$ and $r^2=25$ into the standard form gives the equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the origin lies on it",
          "workingLatex": "(0-3)^2+(0-4)^2=9+16=25\\ \\checkmark",
          "explanation": "Substituting $(0,0)$ gives $25$, confirming the origin really is on the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-3)^2+(y-4)^2=25$"
    }
  },
  {
    "id": "al.y1.pure.circles.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "centre-radius",
      "extreme-points"
    ],
    "questionText": "A circle has equation $(x-2)^2+(y-5)^2=16$. State the centre and radius, then find the coordinates of the highest and lowest points on the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Compare to the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "Matching the given equation to this template lets us read off the centre and radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the centre",
          "workingLatex": "\\text{centre}=(2,5)",
          "explanation": "The numbers subtracted inside the brackets give the centre directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the radius",
          "workingLatex": "r=\\sqrt{16}=4",
          "explanation": "The right-hand side is $r^2$, so the radius is its square root, $4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the extreme points",
          "workingLatex": "\\text{highest/lowest are directly above/below centre}",
          "explanation": "The top and bottom of a circle are found by moving one radius straight up and straight down from the centre, keeping $x$ fixed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the highest point",
          "workingLatex": "(2,\\,5+4)=(2,9)",
          "explanation": "Adding the radius to the $y$-coordinate reaches the top of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the lowest point",
          "workingLatex": "(2,\\,5-4)=(2,1)",
          "explanation": "Subtracting the radius from the $y$-coordinate reaches the bottom of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the top point",
          "workingLatex": "(2-2)^2+(9-5)^2=0+16=16\\ \\checkmark",
          "explanation": "Testing $(2,9)$ satisfies the equation, confirming it is on the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre $(2,5)$, radius $4$; highest point $(2,9)$ and lowest point $(2,1)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "equation",
    "tags": [
      "circles",
      "equation-of-circle",
      "surd-radius"
    ],
    "questionText": "A circle has centre $(1,1)$ and passes through the point $(5,3)$. Find the radius as a simplified surd, and write the equation of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret passing through a point",
          "workingLatex": "r=\\text{distance from }(1,1)\\text{ to }(5,3)",
          "explanation": "Since the circle passes through $(5,3)$, that point is on the circle, so its distance from the centre is the radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the distance",
          "workingLatex": "r=\\sqrt{(5-1)^2+(3-1)^2}",
          "explanation": "The distance formula measures the gap between the centre and the given point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify inside the root",
          "workingLatex": "=\\sqrt{4^2+2^2}=\\sqrt{16+4}=\\sqrt{20}",
          "explanation": "The gaps are $4$ across and $2$ up, and squaring then adding gives $20$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{20}=\\sqrt{4\\times5}=2\\sqrt{5}",
          "explanation": "Pulling out the square factor $4$ from $20$ gives the tidy surd $2\\sqrt{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find r squared",
          "workingLatex": "r^2=(\\sqrt{20})^2=20",
          "explanation": "For the equation we need $r^2$, and squaring the root simply gives back $20$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the standard form",
          "workingLatex": "(x-a)^2+(y-b)^2=r^2",
          "explanation": "This template uses the centre $(a,b)$ and the squared radius.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "(x-1)^2+(y-1)^2=20",
          "explanation": "Putting in centre $(1,1)$ and $r^2=20$ gives the equation of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the given point",
          "workingLatex": "(5-1)^2+(3-1)^2=16+4=20\\ \\checkmark",
          "explanation": "Substituting $(5,3)$ gives $20$, confirming the point lies on the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r=2\\sqrt{5}$, and the equation is $(x-1)^2+(y-1)^2=20$."
    }
  },
  {
    "id": "al.y1.pure.circles.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "circles",
      "completing-the-square",
      "centre-radius"
    ],
    "questionText": "The circle $C$ has equation $x^2+y^2-6x-8y+9=0$. By completing the square, find the coordinates of the centre of $C$ and the length of its radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "(x^2-6x)+(y^2-8y)+9=0",
          "explanation": "The general form hides the centre and radius. Collecting the two x-terms together and the two y-terms together sets up each pair so that completing the square can turn them into perfect squares.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x",
          "workingLatex": "x^2-6x=(x-3)^2-9",
          "explanation": "Half of the coefficient $-6$ is $-3$, so the bracket is $(x-3)^2$. Squaring that bracket adds an extra $9$, so we subtract $9$ to keep the value unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in y",
          "workingLatex": "y^2-8y=(y-4)^2-16",
          "explanation": "Half of $-8$ is $-4$, giving $(y-4)^2$. That square secretly includes a $+16$, so subtracting $16$ balances the expression exactly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both completed squares back in",
          "workingLatex": "(x-3)^2-9+(y-4)^2-16+9=0",
          "explanation": "Replacing each grouped pair with its completed-square version keeps the equation equivalent, and now every variable sits inside a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the constant terms",
          "workingLatex": "(x-3)^2+(y-4)^2-16=0",
          "explanation": "The loose numbers are $-9-16+9=-16$. Tidying them into a single constant moves us close to the standard circle form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into centre-radius form",
          "workingLatex": "(x-3)^2+(y-4)^2=16",
          "explanation": "Moving the constant to the right gives the standard form $(x-a)^2+(y-b)^2=r^2$, which displays the centre and radius directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the centre",
          "workingLatex": "\\text{centre}=(3,4)",
          "explanation": "The centre is the point that makes both brackets zero. Since $(x-3)$ and $(y-4)$ vanish at $x=3$ and $y=4$, the centre is $(3,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the radius",
          "workingLatex": "r=\\sqrt{16}=4",
          "explanation": "The right-hand side equals $r^2$, so the radius is its positive square root. A radius is a length, so we keep only the positive value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the general-form formula",
          "workingLatex": "\\text{centre}=(-g,-f),\\quad r=\\sqrt{g^2+f^2-c}=\\sqrt{9+16-9}=4",
          "explanation": "With $2g=-6$, $2f=-8$, $c=9$ we get $g=-3$, $f=-4$, so the centre is $(3,4)$ and $r=\\sqrt{16}=4$. This matches the completed-square result, confirming the work.",
          "diagram": null
        }
      ],
      "finalAnswer": "The centre of $C$ is $(3,4)$ and the radius is $4$."
    }
  },
  {
    "id": "al.y1.pure.circles.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "circles",
      "completing-the-square",
      "centre-radius"
    ],
    "questionText": "A circle has equation $x^2+y^2+10x-4y+13=0$. Find the coordinates of its centre and the length of its radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "(x^2+10x)+(y^2-4y)+13=0",
          "explanation": "Bringing the x-terms together and the y-terms together prepares each pair for completing the square, which is how the centre and radius are revealed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x",
          "workingLatex": "x^2+10x=(x+5)^2-25",
          "explanation": "Half of $10$ is $5$, so the bracket is $(x+5)^2$. Expanding that bracket introduces $+25$, so we subtract $25$ to leave the value unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in y",
          "workingLatex": "y^2-4y=(y-2)^2-4",
          "explanation": "Half of $-4$ is $-2$, giving $(y-2)^2$, which carries a hidden $+4$. Subtracting $4$ keeps everything balanced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both completed squares back in",
          "workingLatex": "(x+5)^2-25+(y-2)^2-4+13=0",
          "explanation": "Swapping each grouped pair for its perfect-square form keeps the equation equivalent while exposing the structure of a circle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the constant terms",
          "workingLatex": "(x+5)^2+(y-2)^2-16=0",
          "explanation": "The constants combine as $-25-4+13=-16$. Collapsing them into one number brings us to the standard form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into centre-radius form",
          "workingLatex": "(x+5)^2+(y-2)^2=16",
          "explanation": "Moving the constant across gives $(x-a)^2+(y-b)^2=r^2$, from which the centre and radius can be read straight off.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the centre, watching the signs",
          "workingLatex": "\\text{centre}=(-5,2)",
          "explanation": "The bracket $(x+5)$ is really $(x-(-5))$, so the x-coordinate of the centre is $-5$, not $+5$. The $(y-2)$ bracket gives $y=2$, so the centre is $(-5,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the radius",
          "workingLatex": "r=\\sqrt{16}=4",
          "explanation": "The right-hand side is $r^2=16$, so the radius is its positive square root, $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the general-form formula",
          "workingLatex": "r=\\sqrt{g^2+f^2-c}=\\sqrt{25+4-13}=\\sqrt{16}=4",
          "explanation": "Here $2g=10$, $2f=-4$, $c=13$, so $g=5$, $f=-2$ and centre $(-g,-f)=(-5,2)$ with $r=4$. This agrees with the completed-square answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The centre is $(-5,2)$ and the radius is $4$."
    }
  },
  {
    "id": "al.y1.pure.circles.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "circles",
      "completing-the-square",
      "surd-radius"
    ],
    "questionText": "The circle $C$ has equation $x^2+y^2-2x-4y-3=0$. Find the centre of $C$ and show that its radius can be written as $2\\sqrt{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "(x^2-2x)+(y^2-4y)-3=0",
          "explanation": "Separating the x-terms from the y-terms lets each pair be completed into a perfect square independently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x",
          "workingLatex": "x^2-2x=(x-1)^2-1",
          "explanation": "Half of $-2$ is $-1$, so the bracket is $(x-1)^2$, which contains an extra $+1$. Subtracting $1$ preserves the value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in y",
          "workingLatex": "y^2-4y=(y-2)^2-4",
          "explanation": "Half of $-4$ is $-2$, giving $(y-2)^2$ with a hidden $+4$, so we subtract $4$ to stay balanced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both completed squares back in",
          "workingLatex": "(x-1)^2-1+(y-2)^2-4-3=0",
          "explanation": "Replacing each pair with its completed-square form keeps the equation the same while making the circle structure visible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the constant terms",
          "workingLatex": "(x-1)^2+(y-2)^2-8=0",
          "explanation": "The constants total $-1-4-3=-8$. Gathering them into one value prepares the standard form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into centre-radius form",
          "workingLatex": "(x-1)^2+(y-2)^2=8",
          "explanation": "Moving the $-8$ across gives the standard circle equation, so the right-hand side equals $r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the centre",
          "workingLatex": "\\text{centre}=(1,2)",
          "explanation": "The brackets vanish when $x=1$ and $y=2$, so the centre of the circle is $(1,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the radius as a square root",
          "workingLatex": "r=\\sqrt{8}",
          "explanation": "Since $r^2=8$ and $8$ is not a perfect square, the radius is the surd $\\sqrt{8}$, which we now simplify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{8}=\\sqrt{4}\\times\\sqrt{2}=2\\sqrt{2}",
          "explanation": "Splitting off the largest square factor, $4$, lets us take its root as $2$, leaving $\\sqrt{2}$ behind. So the radius in exact form is $2\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify using the general-form formula",
          "workingLatex": "r=\\sqrt{g^2+f^2-c}=\\sqrt{1+4+3}=\\sqrt{8}=2\\sqrt{2}",
          "explanation": "With $g=-1$, $f=-2$, $c=-3$, the formula gives centre $(1,2)$ and $r=\\sqrt{8}=2\\sqrt{2}$, confirming both results.",
          "diagram": null
        }
      ],
      "finalAnswer": "The centre is $(1,2)$ and the radius is $\\sqrt{8}=2\\sqrt{2}$."
    }
  },
  {
    "id": "al.y1.pure.circles.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "circles",
      "completing-the-square",
      "point-position"
    ],
    "questionText": "The circle $C$ has equation $x^2+y^2-6x-4y-12=0$. Find the centre and radius of $C$, and hence determine whether the point $P(8,6)$ lies inside, on, or outside the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "(x^2-6x)+(y^2-4y)-12=0",
          "explanation": "Collecting like variables together is the first move in completing the square, which will convert this to a form where the centre and radius are visible.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x",
          "workingLatex": "x^2-6x=(x-3)^2-9",
          "explanation": "Half of $-6$ is $-3$, so the bracket is $(x-3)^2$, which hides a $+9$. We subtract $9$ to keep the expression equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in y",
          "workingLatex": "y^2-4y=(y-2)^2-4",
          "explanation": "Half of $-4$ is $-2$, giving $(y-2)^2$ with an extra $+4$, so subtracting $4$ balances it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back and combine constants",
          "workingLatex": "(x-3)^2-9+(y-2)^2-4-12=0",
          "explanation": "Putting the completed squares back in leaves loose constants $-9-4-12=-25$ ready to be collected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write in centre-radius form",
          "workingLatex": "(x-3)^2+(y-2)^2=25",
          "explanation": "Moving the constant to the right gives the standard form, so $r^2=25$ sits on the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the centre and radius",
          "workingLatex": "\\text{centre}=(3,2),\\quad r=\\sqrt{25}=5",
          "explanation": "The brackets give centre $(3,2)$, and the positive square root of $25$ gives radius $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the test for the point's position",
          "workingLatex": "d^2=(x_P-3)^2+(y_P-2)^2",
          "explanation": "A point is inside, on, or outside a circle according to whether its distance from the centre is less than, equal to, or greater than the radius. Comparing squared distances avoids square roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the squared distance from the centre to P",
          "workingLatex": "d^2=(8-3)^2+(6-2)^2=5^2+4^2",
          "explanation": "Substituting $P(8,6)$ and centre $(3,2)$ measures how far $P$ sits from the centre, using the differences in each coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the squared distance",
          "workingLatex": "d^2=25+16=41",
          "explanation": "The squared distance from the centre to $P$ is $41$, which we now compare against $r^2=25$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare and conclude",
          "workingLatex": "41>25\\ \\Rightarrow\\ d>r",
          "explanation": "Since the squared distance $41$ exceeds $r^2=25$, the point is farther from the centre than the radius, so $P(8,6)$ lies outside the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "The centre is $(3,2)$ and the radius is $5$. Since the distance from the centre to $P(8,6)$ satisfies $d^2=41>25=r^2$, the point $P$ lies outside the circle."
    }
  },
  {
    "id": "al.y1.pure.circles.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "circles",
      "completing-the-square",
      "surd-radius"
    ],
    "questionText": "The circle $C$ has equation $x^2+y^2-3x+5y+4=0$. Find the coordinates of the centre and the exact length of the radius of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "(x^2-3x)+(y^2+5y)+4=0",
          "explanation": "Odd coefficients simply mean the completed brackets will contain fractions, but the method is unchanged: group the variables first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x",
          "workingLatex": "x^2-3x=\\left(x-\\frac{3}{2}\\right)^2-\\frac{9}{4}",
          "explanation": "Half of $-3$ is $-\\tfrac{3}{2}$, so the bracket is $\\left(x-\\tfrac{3}{2}\\right)^2$. Squaring it adds $\\tfrac{9}{4}$, which we subtract to keep balance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in y",
          "workingLatex": "y^2+5y=\\left(y+\\frac{5}{2}\\right)^2-\\frac{25}{4}",
          "explanation": "Half of $5$ is $\\tfrac{5}{2}$, giving $\\left(y+\\tfrac{5}{2}\\right)^2$ with a hidden $\\tfrac{25}{4}$, so subtract $\\tfrac{25}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both completed squares back in",
          "workingLatex": "\\left(x-\\frac{3}{2}\\right)^2-\\frac{9}{4}+\\left(y+\\frac{5}{2}\\right)^2-\\frac{25}{4}+4=0",
          "explanation": "Replacing each pair keeps the equation equivalent; the fractions just need careful handling when the constants are combined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the constant terms",
          "workingLatex": "-\\frac{9}{4}-\\frac{25}{4}+4=-\\frac{34}{4}+\\frac{16}{4}=-\\frac{9}{2}",
          "explanation": "Writing $4$ as $\\tfrac{16}{4}$ gives a common denominator, and $-9-25+16=-18$, so the constants collapse to $-\\tfrac{18}{4}=-\\tfrac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write in centre-radius form",
          "workingLatex": "\\left(x-\\frac{3}{2}\\right)^2+\\left(y+\\frac{5}{2}\\right)^2=\\frac{9}{2}",
          "explanation": "Moving the constant to the right leaves the standard form, so $r^2=\\tfrac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the centre",
          "workingLatex": "\\text{centre}=\\left(\\frac{3}{2},-\\frac{5}{2}\\right)",
          "explanation": "The brackets vanish at $x=\\tfrac{3}{2}$ and $y=-\\tfrac{5}{2}$, so the centre has half-integer coordinates $\\left(\\tfrac{3}{2},-\\tfrac{5}{2}\\right)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root for the radius",
          "workingLatex": "r=\\sqrt{\\frac{9}{2}}",
          "explanation": "The radius is the positive root of $r^2=\\tfrac{9}{2}$, which we now simplify into a tidy surd.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify and rationalise",
          "workingLatex": "r=\\frac{3}{\\sqrt{2}}=\\frac{3\\sqrt{2}}{2}",
          "explanation": "Since $\\sqrt{9}=3$, we get $\\tfrac{3}{\\sqrt{2}}$; multiplying top and bottom by $\\sqrt{2}$ removes the surd from the denominator, giving $\\tfrac{3\\sqrt{2}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify using the general-form formula",
          "workingLatex": "r=\\sqrt{g^2+f^2-c}=\\sqrt{\\frac{9}{4}+\\frac{25}{4}-4}=\\sqrt{\\frac{9}{2}}",
          "explanation": "With $g=-\\tfrac{3}{2}$, $f=\\tfrac{5}{2}$, $c=4$, the formula reproduces centre $\\left(\\tfrac{3}{2},-\\tfrac{5}{2}\\right)$ and $r^2=\\tfrac{9}{2}$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "The centre is $\\left(\\tfrac{3}{2},-\\tfrac{5}{2}\\right)$ and the radius is $\\sqrt{\\tfrac{9}{2}}=\\tfrac{3\\sqrt{2}}{2}$."
    }
  },
  {
    "id": "al.y1.pure.circles.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "completing-the-square",
      "axis-intercepts"
    ],
    "questionText": "The circle $C$ has equation $x^2+y^2-4x-10y+21=0$. Find the centre and radius of $C$, and find the coordinates of the points where $C$ crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "(x^2-4x)+(y^2-10y)+21=0",
          "explanation": "Grouping the variables prepares each pair for completing the square, giving the centre and radius before we tackle the axis crossings.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x",
          "workingLatex": "x^2-4x=(x-2)^2-4",
          "explanation": "Half of $-4$ is $-2$, so the bracket is $(x-2)^2$, carrying a hidden $+4$ that we subtract.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in y",
          "workingLatex": "y^2-10y=(y-5)^2-25",
          "explanation": "Half of $-10$ is $-5$, giving $(y-5)^2$ with an extra $+25$, so subtracting $25$ keeps balance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back and combine constants",
          "workingLatex": "(x-2)^2-4+(y-5)^2-25+21=0",
          "explanation": "With the squares restored, the loose constants are $-4-25+21=-8$, ready to be collected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write in centre-radius form",
          "workingLatex": "(x-2)^2+(y-5)^2=8",
          "explanation": "Moving the constant across gives the standard form with $r^2=8$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the centre and radius",
          "workingLatex": "\\text{centre}=(2,5),\\quad r=\\sqrt{8}=2\\sqrt{2}",
          "explanation": "The centre is $(2,5)$ and the radius simplifies from $\\sqrt{8}$ to $2\\sqrt{2}$ by taking out the square factor $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the y-axis condition",
          "workingLatex": "x=0",
          "explanation": "Every point on the $y$-axis has $x=0$. Substituting $x=0$ into the circle's equation finds exactly where the curve meets that axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute x = 0 into the original equation",
          "workingLatex": "y^2-10y+21=0",
          "explanation": "Setting $x=0$ removes the $x^2$ and $-4x$ terms, leaving a quadratic in $y$ whose roots are the crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise the quadratic in y",
          "workingLatex": "(y-3)(y-7)=0",
          "explanation": "We need two numbers multiplying to $21$ and adding to $-10$; those are $-3$ and $-7$, giving this factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for y and state the points",
          "workingLatex": "y=3\\ \\text{or}\\ y=7\\ \\Rightarrow\\ (0,3),\\ (0,7)",
          "explanation": "Each factor set to zero gives a root, so the circle crosses the $y$-axis at $(0,3)$ and $(0,7)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify a crossing point lies on C",
          "workingLatex": "(0-2)^2+(3-5)^2=4+4=8=r^2",
          "explanation": "Checking $(0,3)$ against the centre-radius form gives $8$, matching $r^2$, which confirms the point genuinely lies on the circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "The centre is $(2,5)$ with radius $2\\sqrt{2}$, and $C$ crosses the $y$-axis at $(0,3)$ and $(0,7)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "circles",
      "completing-the-square",
      "diameter"
    ],
    "questionText": "The circle $C$ has equation $x^2+y^2+8x-6y-11=0$. Find the centre and radius of $C$, and hence state the length of its diameter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "(x^2+8x)+(y^2-6y)-11=0",
          "explanation": "Collecting the variables together sets up completing the square, which produces the radius that the diameter depends on.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x",
          "workingLatex": "x^2+8x=(x+4)^2-16",
          "explanation": "Half of $8$ is $4$, so the bracket is $(x+4)^2$, which hides a $+16$ that we subtract to stay equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in y",
          "workingLatex": "y^2-6y=(y-3)^2-9",
          "explanation": "Half of $-6$ is $-3$, giving $(y-3)^2$ with an extra $+9$, so we subtract $9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back and combine constants",
          "workingLatex": "(x+4)^2-16+(y-3)^2-9-11=0",
          "explanation": "Restoring the completed squares leaves constants $-16-9-11=-36$ to be gathered.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write in centre-radius form",
          "workingLatex": "(x+4)^2+(y-3)^2=36",
          "explanation": "Moving the constant across gives the standard form with $r^2=36$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the centre",
          "workingLatex": "\\text{centre}=(-4,3)",
          "explanation": "The bracket $(x+4)$ means the x-coordinate is $-4$, and $(y-3)$ gives $y=3$, so the centre is $(-4,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the radius",
          "workingLatex": "r=\\sqrt{36}=6",
          "explanation": "The radius is the positive square root of $r^2=36$, giving $6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the diameter",
          "workingLatex": "d=2r=2\\times 6=12",
          "explanation": "The diameter is a full width across the circle, which is exactly twice the radius, so $d=12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the radius with the general-form formula",
          "workingLatex": "r=\\sqrt{g^2+f^2-c}=\\sqrt{16+9+11}=\\sqrt{36}=6",
          "explanation": "With $g=4$, $f=-3$, $c=-11$, the formula returns $r=6$, confirming the radius and hence the diameter of $12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The centre is $(-4,3)$ with radius $6$, so the diameter of $C$ has length $12$."
    }
  },
  {
    "id": "al.y1.pure.circles.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "circles",
      "completing-the-square",
      "through-origin"
    ],
    "questionText": "The circle $C$ has equation $x^2+y^2-8x+6y=0$. Find the centre and radius of $C$, and verify that $C$ passes through the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "(x^2-8x)+(y^2+6y)=0",
          "explanation": "There is no constant term here, which already hints the origin may lie on the circle. Grouping the variables sets up completing the square as usual.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square in x",
          "workingLatex": "x^2-8x=(x-4)^2-16",
          "explanation": "Half of $-8$ is $-4$, so the bracket is $(x-4)^2$, which contains a hidden $+16$ that we subtract.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in y",
          "workingLatex": "y^2+6y=(y+3)^2-9",
          "explanation": "Half of $6$ is $3$, giving $(y+3)^2$ with an extra $+9$, so subtracting $9$ keeps the value unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute both completed squares back in",
          "workingLatex": "(x-4)^2-16+(y+3)^2-9=0",
          "explanation": "With no original constant, the only loose numbers are the $-16$ and $-9$ produced by completing the square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write in centre-radius form",
          "workingLatex": "(x-4)^2+(y+3)^2=25",
          "explanation": "Combining $-16-9=-25$ and moving it across gives the standard form with $r^2=25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the centre",
          "workingLatex": "\\text{centre}=(4,-3)",
          "explanation": "The brackets vanish at $x=4$ and $y=-3$, so the centre is $(4,-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the radius",
          "workingLatex": "r=\\sqrt{25}=5",
          "explanation": "The radius is the positive square root of $r^2=25$, which is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the origin using the constant term",
          "workingLatex": "0^2+0^2-8(0)+6(0)=0",
          "explanation": "Because the equation has no constant term, substituting $(0,0)$ gives $0=0$, so the origin satisfies the equation and lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm with the distance from the centre",
          "workingLatex": "\\sqrt{(0-4)^2+(0+3)^2}=\\sqrt{16+9}=\\sqrt{25}=5=r",
          "explanation": "The distance from the centre $(4,-3)$ to the origin equals the radius $5$, which confirms geometrically that the origin sits exactly on $C$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The centre is $(4,-3)$ and the radius is $5$. Since the equation has no constant term, $(0,0)$ satisfies it, and the distance from the centre to the origin equals the radius, so $C$ passes through the origin."
    }
  },
  {
    "id": "al.y1.pure.circles.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "circles",
      "completing-the-square",
      "rearranging"
    ],
    "questionText": "A circle $C$ satisfies $x^2+y^2+2y=6x+6$. Rearrange the equation and, by completing the square, find the centre and radius of $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Move every term to one side",
          "workingLatex": "x^2+y^2+2y-6x-6=0",
          "explanation": "Before completing the square, all terms must sit on one side equal to zero. Subtracting $6x$ and $6$ from both sides collects everything on the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Reorder into the standard general form",
          "workingLatex": "x^2-6x+y^2+2y-6=0",
          "explanation": "Rewriting the terms in the usual order, x-terms then y-terms then the constant, makes the completing-the-square structure easy to follow.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Group the x-terms and y-terms",
          "workingLatex": "(x^2-6x)+(y^2+2y)-6=0",
          "explanation": "Bracketing the variable pairs separates the work in x from the work in y.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square in x",
          "workingLatex": "x^2-6x=(x-3)^2-9",
          "explanation": "Half of $-6$ is $-3$, so the bracket is $(x-3)^2$, which hides a $+9$ that we subtract.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete the square in y",
          "workingLatex": "y^2+2y=(y+1)^2-1",
          "explanation": "Half of $2$ is $1$, giving $(y+1)^2$ with an extra $+1$, so subtracting $1$ keeps balance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back and combine constants",
          "workingLatex": "(x-3)^2-9+(y+1)^2-1-6=0",
          "explanation": "Restoring the squares leaves constants $-9-1-6=-16$ to gather into one number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write in centre-radius form",
          "workingLatex": "(x-3)^2+(y+1)^2=16",
          "explanation": "Moving the constant to the right gives the standard form with $r^2=16$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the centre and radius",
          "workingLatex": "\\text{centre}=(3,-1),\\quad r=\\sqrt{16}=4",
          "explanation": "The brackets give centre $(3,-1)$, remembering that $(y+1)$ means $y=-1$, and the radius is the positive root $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify using the general-form formula",
          "workingLatex": "r=\\sqrt{g^2+f^2-c}=\\sqrt{9+1+6}=\\sqrt{16}=4",
          "explanation": "With $g=-3$, $f=1$, $c=-6$, the formula gives centre $(3,-1)$ and $r=4$, matching the completed-square result.",
          "diagram": null
        }
      ],
      "finalAnswer": "Rearranged, the equation is $x^2+y^2-6x+2y-6=0$, giving centre $(3,-1)$ and radius $4$."
    }
  },
  {
    "id": "al.y1.pure.circles.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "circles",
      "completing-the-square",
      "general-form"
    ],
    "questionText": "A circle has centre $(-2,3)$ and radius $5$. Write its equation in the general form $x^2+y^2+2gx+2fy+c=0$, and state the values of $g$, $f$ and $c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the centre-radius form",
          "workingLatex": "(x+2)^2+(y-3)^2=25",
          "explanation": "The standard form $(x-a)^2+(y-b)^2=r^2$ uses the centre $(-2,3)$, so the brackets are $(x+2)$ and $(y-3)$, and the right side is $5^2=25$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the x-bracket",
          "workingLatex": "(x+2)^2=x^2+4x+4",
          "explanation": "Expanding the perfect square multiplies the bracket by itself, producing the middle term $2\\times 2\\times x=4x$ and the constant $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the y-bracket",
          "workingLatex": "(y-3)^2=y^2-6y+9",
          "explanation": "Similarly, expanding $(y-3)^2$ gives the middle term $-6y$ and the constant $9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the expansions in",
          "workingLatex": "x^2+4x+4+y^2-6y+9=25",
          "explanation": "Replacing each bracket with its expansion turns the compact form into a full quadratic in $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the constant terms on the left",
          "workingLatex": "x^2+y^2+4x-6y+13=25",
          "explanation": "Adding the loose numbers $4+9=13$ and tidying the order groups the equation towards general form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Move everything to one side",
          "workingLatex": "x^2+y^2+4x-6y-12=0",
          "explanation": "Subtracting $25$ from both sides sets the equation equal to zero, which is the required general form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Match the x-coefficient to find g",
          "workingLatex": "2g=4\\ \\Rightarrow\\ g=2",
          "explanation": "Comparing $4x$ with the template term $2gx$ shows $2g=4$, so $g=2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Match the y-coefficient to find f",
          "workingLatex": "2f=-6\\ \\Rightarrow\\ f=-3",
          "explanation": "Comparing $-6y$ with $2fy$ gives $2f=-6$, so $f=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify c",
          "workingLatex": "c=-12",
          "explanation": "The constant term in the general form is $c$, which here is $-12$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify centre and radius from g, f, c",
          "workingLatex": "(-g,-f)=(-2,3),\\quad r=\\sqrt{g^2+f^2-c}=\\sqrt{4+9+12}=\\sqrt{25}=5",
          "explanation": "The recovered centre $(-2,3)$ and radius $5$ match the given data, confirming the expansion and the values of $g$, $f$ and $c$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equation is $x^2+y^2+4x-6y-12=0$, with $g=2$, $f=-3$ and $c=-12$."
    }
  },
  {
    "id": "al.y1.pure.circles.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "circles",
      "diameter",
      "equation-of-circle"
    ],
    "questionText": "The points $A(1,2)$ and $B(7,10)$ are the endpoints of a diameter of a circle. Find the equation of the circle, giving your answer in the form $x^2+y^2+ax+by+c=0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the endpoints of the diameter",
          "workingLatex": "A(1,2),\\quad B(7,10)",
          "explanation": "The two given points sit on opposite ends of a diameter, so the segment $AB$ passes straight through the centre. This is the key fact that unlocks both the centre and the radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Centre x-coordinate (midpoint of A and B)",
          "workingLatex": "\\frac{1+7}{2}=4",
          "explanation": "The centre is exactly halfway along the diameter, so it is the midpoint of $A$ and $B$. Averaging the two $x$-values gives the $x$-coordinate of the centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Centre y-coordinate",
          "workingLatex": "\\frac{2+10}{2}=6\\;\\Rightarrow\\;\\text{centre }(4,6)",
          "explanation": "Averaging the two $y$-values in the same way completes the centre. The centre of the circle is therefore $(4,6)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Length of the diameter AB",
          "workingLatex": "AB=\\sqrt{(7-1)^2+(10-2)^2}",
          "explanation": "The radius is half the diameter, so we first measure $AB$ using the distance formula, which is just Pythagoras applied to the horizontal and vertical gaps.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the distance",
          "workingLatex": "=\\sqrt{36+64}=\\sqrt{100}=10",
          "explanation": "Squaring the gaps and adding gives $100$, whose square root is a clean $10$. The full diameter has length $10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Radius is half the diameter",
          "workingLatex": "r=\\tfrac{1}{2}\\times 10=5",
          "explanation": "Since the diameter is twice the radius, halving $10$ gives the radius. Every point on the circle is a distance $5$ from the centre.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute r squared",
          "workingLatex": "r^2=5^2=25",
          "explanation": "The circle equation uses $r^2$ rather than $r$, so we record the squared radius ready to substitute in.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the standard form",
          "workingLatex": "(x-4)^2+(y-6)^2=25",
          "explanation": "Placing the centre $(4,6)$ and $r^2=25$ into $(x-a)^2+(y-b)^2=r^2$ gives the standard form of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand both brackets",
          "workingLatex": "x^2-8x+16+y^2-12y+36=25",
          "explanation": "To reach the requested general form we multiply out each squared bracket, which spreads the centre information into linear terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect constants on one side",
          "workingLatex": "x^2+y^2-8x-12y+27=0",
          "explanation": "Moving $25$ across and combining the constant terms $16+36-25=27$ gives the tidy general form asked for.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify endpoint A lies on the circle",
          "workingLatex": "(1-4)^2+(2-6)^2=9+16=25\\;\\checkmark",
          "explanation": "Substituting $A(1,2)$ into the standard form returns exactly $r^2=25$, confirming the endpoint sits on the circle and the equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre $(4,6)$, radius $5$; equation $x^2+y^2-8x-12y+27=0$."
    }
  },
  {
    "id": "al.y1.pure.circles.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "circles",
      "radius",
      "equation-of-circle"
    ],
    "questionText": "A circle has centre $C(2,5)$ and passes through the point $P(5,7)$. Find the equation of the circle, leaving $r^2$ as an integer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the centre and a point on the circle",
          "workingLatex": "C(2,5),\\quad P(5,7)",
          "explanation": "The centre is given directly, and $P$ lies on the circle. The distance between them is exactly the radius, since every point on a circle is the same distance from its centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "The radius equals the distance CP",
          "workingLatex": "r=\\sqrt{(5-2)^2+(7-5)^2}",
          "explanation": "We use the distance formula between $C$ and $P$. Working with the squared form is convenient because the equation of a circle only needs $r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the coordinate differences",
          "workingLatex": "r=\\sqrt{3^2+2^2}",
          "explanation": "The horizontal gap is $5-2=3$ and the vertical gap is $7-5=2$. These are the two legs of the right triangle whose hypotenuse is the radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square each difference",
          "workingLatex": "r=\\sqrt{9+4}",
          "explanation": "Squaring removes the signs and prepares the sum under the root. Adding these gives the value of $r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State r squared",
          "workingLatex": "r^2=13",
          "explanation": "The sum $9+4=13$ is the squared radius. It is a whole number even though the radius itself is not, so we keep it as $13$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the radius as a surd",
          "workingLatex": "r=\\sqrt{13}",
          "explanation": "For completeness the actual radius is $\\sqrt{13}$, but the equation only requires $r^2$, so leaving it as $13$ keeps the answer exact and clean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the standard form",
          "workingLatex": "(x-2)^2+(y-5)^2=r^2",
          "explanation": "We drop the centre $(2,5)$ into $(x-a)^2+(y-b)^2=r^2$. The signs flip because the formula subtracts the centre coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Insert r squared",
          "workingLatex": "(x-2)^2+(y-5)^2=13",
          "explanation": "Replacing $r^2$ with $13$ gives the finished equation of the circle in standard form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify that P satisfies the equation",
          "workingLatex": "(5-2)^2+(7-5)^2=9+4=13\\;\\checkmark",
          "explanation": "Putting $P(5,7)$ back in returns $13$, matching the right-hand side. This confirms $P$ lies on the circle and the equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-2)^2+(y-5)^2=13$, with $r^2=13$."
    }
  },
  {
    "id": "al.y1.pure.circles.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "line-intersection",
      "quadratic"
    ],
    "questionText": "Find the coordinates of the points where the line $y=x+1$ meets the circle $x^2+y^2=25$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down both equations",
          "workingLatex": "x^2+y^2=25,\\qquad y=x+1",
          "explanation": "The points of intersection must satisfy both equations at once. Combining them will give a single equation whose solutions are exactly those crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the line into the circle",
          "workingLatex": "x^2+(x+1)^2=25",
          "explanation": "Replacing $y$ with $x+1$ removes one variable, leaving an equation purely in $x$. This is the standard way to find where a line cuts a circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the squared bracket",
          "workingLatex": "x^2+x^2+2x+1=25",
          "explanation": "Expanding $(x+1)^2$ as $x^2+2x+1$ lets us collect everything into a single quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine like terms",
          "workingLatex": "2x^2+2x+1=25",
          "explanation": "Adding the two $x^2$ terms tidies the left-hand side into standard quadratic shape.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Bring all terms to one side",
          "workingLatex": "2x^2+2x-24=0",
          "explanation": "Subtracting $25$ sets the quadratic equal to zero, which is required before factorising or using the formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide through by the common factor 2",
          "workingLatex": "x^2+x-12=0",
          "explanation": "Every coefficient is even, so dividing by $2$ gives simpler numbers that factorise easily.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic",
          "workingLatex": "(x+4)(x-3)=0",
          "explanation": "We need two numbers multiplying to $-12$ and adding to $+1$; these are $+4$ and $-3$, giving the factorised form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x=-4\\quad\\text{or}\\quad x=3",
          "explanation": "Setting each bracket to zero gives the two $x$-coordinates of the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the matching y-values",
          "workingLatex": "y=x+1:\\; x=-4\\Rightarrow y=-3,\\; x=3\\Rightarrow y=4",
          "explanation": "Each $x$ is fed back into the simpler line equation to recover its $y$-partner, giving complete coordinates.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the intersection points",
          "workingLatex": "(-4,-3)\\quad\\text{and}\\quad(3,4)",
          "explanation": "Pairing each $x$ with its $y$ gives the two points where the line crosses the circle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the first point on the circle",
          "workingLatex": "(-4)^2+(-3)^2=16+9=25\\;\\checkmark",
          "explanation": "Substituting $(-4,-3)$ into the circle gives $25$, confirming it truly lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the second point on the circle",
          "workingLatex": "3^2+4^2=9+16=25\\;\\checkmark",
          "explanation": "Substituting $(3,4)$ also returns $25$, so both points check out and the solution is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line meets the circle at $(-4,-3)$ and $(3,4)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "line-intersection",
      "horizontal-line"
    ],
    "questionText": "The circle $(x-1)^2+(y+2)^2=25$ is cut by the horizontal line $y=1$. Find the coordinates of the two points of intersection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the circle and the line",
          "workingLatex": "(x-1)^2+(y+2)^2=25,\\qquad y=1",
          "explanation": "The intersection points lie on both the circle and the line $y=1$. Since the line fixes $y$, we can substitute a single number and solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute y = 1 into the circle",
          "workingLatex": "(x-1)^2+(1+2)^2=25",
          "explanation": "Replacing $y$ with $1$ turns the two-variable equation into one involving only $x$, which is much easier to handle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the constant term",
          "workingLatex": "(x-1)^2+9=25",
          "explanation": "The bracket $(1+2)^2$ evaluates to $9$, a fixed number, leaving just the $x$-bracket to work with.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the x-bracket",
          "workingLatex": "(x-1)^2=16",
          "explanation": "Subtracting $9$ from both sides leaves the squared term alone, ready to undo by taking a square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root of both sides",
          "workingLatex": "x-1=\\pm 4",
          "explanation": "A square can come from a positive or negative base, so we keep both signs. This is what produces the two separate intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x=5\\quad\\text{or}\\quad x=-3",
          "explanation": "Adding $1$ to each option gives the two $x$-coordinates where the line meets the circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the intersection points",
          "workingLatex": "(5,1)\\quad\\text{and}\\quad(-3,1)",
          "explanation": "Both points share $y=1$ from the line, so we pair each $x$ with that fixed height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the first point",
          "workingLatex": "(5-1)^2+(1+2)^2=16+9=25\\;\\checkmark",
          "explanation": "Substituting $(5,1)$ into the circle gives $25$, confirming it lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the second point",
          "workingLatex": "(-3-1)^2+(1+2)^2=16+9=25\\;\\checkmark",
          "explanation": "Substituting $(-3,1)$ also returns $25$, so both points are confirmed and the solution is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line $y=1$ meets the circle at $(5,1)$ and $(-3,1)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "tangent",
      "discriminant"
    ],
    "questionText": "Show that the line $3x+4y=25$ is a tangent to the circle $x^2+y^2=25$, and find the coordinates of the point of contact.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down both equations",
          "workingLatex": "x^2+y^2=25,\\qquad 3x+4y=25",
          "explanation": "A tangent touches a circle at exactly one point. If we substitute the line into the circle we expect a quadratic with a single repeated solution, which is what we will test for.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the line to make x the subject",
          "workingLatex": "x=\\frac{25-4y}{3}",
          "explanation": "Isolating $x$ lets us substitute it into the circle. Choosing $x$ keeps the arithmetic manageable here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the circle",
          "workingLatex": "\\left(\\frac{25-4y}{3}\\right)^2+y^2=25",
          "explanation": "Replacing $x$ produces one equation in $y$ only. Its number of solutions will reveal how many times the line meets the circle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply through by 9 to clear the fraction",
          "workingLatex": "(25-4y)^2+9y^2=225",
          "explanation": "Multiplying every term by $9$ removes the denominator, giving a cleaner equation to expand.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the squared bracket",
          "workingLatex": "625-200y+16y^2+9y^2=225",
          "explanation": "Expanding $(25-4y)^2$ gives $625-200y+16y^2$. We now collect all terms to form a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect terms into a quadratic",
          "workingLatex": "25y^2-200y+400=0",
          "explanation": "Combining the $y^2$ terms and moving $225$ across gives a quadratic set equal to zero, ready to analyse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the common factor 25",
          "workingLatex": "y^2-8y+16=0",
          "explanation": "Every coefficient is divisible by $25$, so simplifying makes the discriminant test and factorising much easier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the discriminant",
          "workingLatex": "b^2-4ac=(-8)^2-4(1)(16)=64-64=0",
          "explanation": "The discriminant tells us how many real roots exist. A value of zero means exactly one repeated root, the signature of a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the discriminant",
          "workingLatex": "b^2-4ac=0\\;\\Rightarrow\\;\\text{line is a tangent}",
          "explanation": "Because the quadratic has a single repeated solution, the line touches the circle at one point only, proving it is a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the repeated root for y",
          "workingLatex": "(y-4)^2=0\\;\\Rightarrow\\;y=4",
          "explanation": "The quadratic is a perfect square, so its single root is $y=4$, the height of the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the matching x-coordinate",
          "workingLatex": "x=\\frac{25-4(4)}{3}=\\frac{9}{3}=3",
          "explanation": "Substituting $y=4$ back into the rearranged line gives $x=3$, completing the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the point lies on the circle",
          "workingLatex": "3^2+4^2=9+16=25\\;\\checkmark",
          "explanation": "The point $(3,4)$ satisfies the circle equation exactly, confirming the point of contact and the whole argument.",
          "diagram": null
        }
      ],
      "finalAnswer": "The discriminant is $0$, so the line is a tangent; the point of contact is $(3,4)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": [
      "circles",
      "discriminant",
      "no-intersection"
    ],
    "questionText": "Show that the line $y=x+5$ does not intersect the circle $x^2+y^2=9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down both equations",
          "workingLatex": "x^2+y^2=9,\\qquad y=x+5",
          "explanation": "If the line and circle never meet, then substituting one into the other should give a quadratic with no real solutions. We will check the discriminant to decide.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the line into the circle",
          "workingLatex": "x^2+(x+5)^2=9",
          "explanation": "Replacing $y$ with $x+5$ produces a single equation in $x$ whose real roots would be the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the squared bracket",
          "workingLatex": "x^2+x^2+10x+25=9",
          "explanation": "Expanding $(x+5)^2$ as $x^2+10x+25$ lets us gather everything into one quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine like terms",
          "workingLatex": "2x^2+10x+16=0",
          "explanation": "Adding the two $x^2$ terms and moving $9$ across gives a quadratic set to zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the common factor 2",
          "workingLatex": "x^2+5x+8=0",
          "explanation": "All coefficients are even, so dividing by $2$ gives smaller numbers to work with in the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the discriminant",
          "workingLatex": "b^2-4ac=5^2-4(1)(8)",
          "explanation": "The discriminant $b^2-4ac$ decides how many real solutions a quadratic has, which corresponds to how many times the line meets the circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the discriminant",
          "workingLatex": "=25-32=-7",
          "explanation": "The result is negative. A negative discriminant means the quadratic has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the negative discriminant",
          "workingLatex": "b^2-4ac<0\\;\\Rightarrow\\;\\text{no real solutions}",
          "explanation": "With no real values of $x$ satisfying the combined equation, there are no shared points between the line and the circle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\text{The line }y=x+5\\text{ misses the circle.}",
          "explanation": "Because no intersection points exist, the line passes entirely outside the circle without touching it, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "The discriminant is $-7<0$, so there are no real solutions; the line does not intersect the circle."
    }
  },
  {
    "id": "al.y1.pure.circles.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "x-axis",
      "quadratic"
    ],
    "questionText": "Find the coordinates of the points where the circle $x^2+y^2-10x-4y+16=0$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the condition for the x-axis",
          "workingLatex": "y=0",
          "explanation": "Every point on the $x$-axis has $y=0$. Setting $y=0$ in the circle equation finds exactly where the curve meets that axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute y = 0 into the circle",
          "workingLatex": "x^2-10x+16=0",
          "explanation": "Putting $y=0$ removes the $y^2$ and $y$ terms, leaving a quadratic purely in $x$ whose roots are the crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the quadratic formula",
          "workingLatex": "x=\\frac{10\\pm\\sqrt{(-10)^2-4(1)(16)}}{2}",
          "explanation": "This quadratic does not factorise obviously, so the formula is a safe route. We insert $a=1$, $b=-10$, $c=16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify inside the square root",
          "workingLatex": "x=\\frac{10\\pm\\sqrt{100-64}}{2}",
          "explanation": "Evaluating $b^2-4ac$ gives $100-64$, the quantity under the root that determines the two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the discriminant",
          "workingLatex": "x=\\frac{10\\pm\\sqrt{36}}{2}",
          "explanation": "The discriminant is $36$, a perfect square, which promises two clean whole-number roots.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "x=\\frac{10\\pm 6}{2}",
          "explanation": "Since $\\sqrt{36}=6$, the two solutions split into a plus and a minus branch.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the two x-values",
          "workingLatex": "x=8\\quad\\text{or}\\quad x=2",
          "explanation": "Evaluating $\\frac{10+6}{2}=8$ and $\\frac{10-6}{2}=2$ gives the two points where the circle cuts the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the crossing points",
          "workingLatex": "(8,0)\\quad\\text{and}\\quad(2,0)",
          "explanation": "Each root pairs with $y=0$, giving the coordinates on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the point (8,0)",
          "workingLatex": "8^2-10(8)+16=64-80+16=0\\;\\checkmark",
          "explanation": "Substituting $(8,0)$ into the original equation gives $0$, confirming the point lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the point (2,0)",
          "workingLatex": "2^2-10(2)+16=4-20+16=0\\;\\checkmark",
          "explanation": "Substituting $(2,0)$ also gives $0$, so both crossing points are confirmed and the solution is complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "The circle crosses the $x$-axis at $(2,0)$ and $(8,0)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "circles",
      "three-points",
      "equation-of-circle"
    ],
    "questionText": "A circle passes through the three points $O(0,0)$, $A(6,0)$ and $B(0,8)$. Find the equation of the circle in the form $(x-a)^2+(y-b)^2=r^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the general circle equation",
          "workingLatex": "x^2+y^2+Dx+Ey+F=0",
          "explanation": "Any circle can be written in this general form with three unknowns $D$, $E$ and $F$. Three points give three equations, which is exactly enough to pin them down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the origin O(0,0)",
          "workingLatex": "0+0+0+0+F=0\\;\\Rightarrow\\;F=0",
          "explanation": "Because $O$ is the origin, all terms except $F$ vanish, immediately telling us $F=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute A(6,0)",
          "workingLatex": "36+6D+F=0",
          "explanation": "Putting $A(6,0)$ into the general form uses only the $x$-terms, giving an equation linking $D$ and $F$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for D",
          "workingLatex": "36+6D=0\\;\\Rightarrow\\;D=-6",
          "explanation": "Since $F=0$, the equation reduces to $36+6D=0$, which rearranges to $D=-6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute B(0,8)",
          "workingLatex": "64+8E+F=0",
          "explanation": "Putting $B(0,8)$ into the general form uses only the $y$-terms, giving an equation for $E$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for E",
          "workingLatex": "64+8E=0\\;\\Rightarrow\\;E=-8",
          "explanation": "With $F=0$ again, the equation becomes $64+8E=0$, giving $E=-8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Assemble the general equation",
          "workingLatex": "x^2+y^2-6x-8y=0",
          "explanation": "Placing $D=-6$, $E=-8$ and $F=0$ into the general form gives the circle through all three points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the centre",
          "workingLatex": "\\left(-\\tfrac{D}{2},-\\tfrac{E}{2}\\right)=(3,4)",
          "explanation": "The centre of $x^2+y^2+Dx+Ey+F=0$ is $(-D/2,-E/2)$, which here gives $(3,4)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the radius",
          "workingLatex": "r=\\sqrt{3^2+4^2}=\\sqrt{25}=5",
          "explanation": "The radius is the distance from the centre $(3,4)$ to any of the points, for instance the origin, giving a clean $r=5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the standard form",
          "workingLatex": "(x-3)^2+(y-4)^2=25",
          "explanation": "Placing the centre $(3,4)$ and $r^2=25$ into the standard form gives the requested equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify A(6,0)",
          "workingLatex": "(6-3)^2+(0-4)^2=9+16=25\\;\\checkmark",
          "explanation": "Substituting $A(6,0)$ returns $25$, confirming it lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify B(0,8)",
          "workingLatex": "(0-3)^2+(8-4)^2=9+16=25\\;\\checkmark",
          "explanation": "Substituting $B(0,8)$ also returns $25$, so all three points lie on the circle and the equation is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-3)^2+(y-4)^2=25$ (centre $(3,4)$, radius $5$)."
    }
  },
  {
    "id": "al.y1.pure.circles.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "diameter",
      "centre-radius"
    ],
    "questionText": "The points $A(-3,2)$ and $B(5,8)$ are the endpoints of a diameter of a circle. Find the coordinates of the centre of the circle and the length of its radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the endpoints of the diameter",
          "workingLatex": "A(-3,2),\\quad B(5,8)",
          "explanation": "A diameter runs from one side of the circle through the centre to the other, so $A$ and $B$ are equally spaced about the centre. This lets us find the centre as their midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Centre x-coordinate (midpoint)",
          "workingLatex": "\\frac{-3+5}{2}=1",
          "explanation": "Averaging the two $x$-values locates the centre horizontally, since the centre sits exactly halfway between the endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Centre y-coordinate",
          "workingLatex": "\\frac{2+8}{2}=5\\;\\Rightarrow\\;\\text{centre }(1,5)",
          "explanation": "Averaging the two $y$-values completes the centre, giving $(1,5)$ as the middle of the diameter.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Length of the diameter AB",
          "workingLatex": "AB=\\sqrt{(5-(-3))^2+(8-2)^2}",
          "explanation": "The radius is half the diameter, so we first measure $AB$ using the distance formula on the horizontal and vertical gaps.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the distance",
          "workingLatex": "=\\sqrt{64+36}=\\sqrt{100}=10",
          "explanation": "Squaring the gaps $8$ and $6$ and adding gives $100$, whose square root is a clean $10$ for the full diameter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Radius is half the diameter",
          "workingLatex": "r=\\tfrac{1}{2}\\times 10=5",
          "explanation": "Halving the diameter gives the radius, so every point on the circle is a distance $5$ from the centre.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the distance from centre to A",
          "workingLatex": "\\sqrt{(-3-1)^2+(2-5)^2}=\\sqrt{16+9}=5\\;\\checkmark",
          "explanation": "The distance from the centre $(1,5)$ to $A$ should equal the radius. It gives $5$, confirming $A$ lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the distance from centre to B",
          "workingLatex": "\\sqrt{(5-1)^2+(8-5)^2}=\\sqrt{16+9}=5\\;\\checkmark",
          "explanation": "The distance from the centre to $B$ is also $5$, matching the radius and confirming the centre is correctly placed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the results",
          "workingLatex": "\\text{centre }(1,5),\\quad r=5",
          "explanation": "Both endpoints sit a distance $5$ from $(1,5)$, so the centre is $(1,5)$ and the radius is $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre $(1,5)$ and radius $5$."
    }
  },
  {
    "id": "al.y1.pure.circles.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "circles",
      "tangent",
      "radius"
    ],
    "questionText": "The circle $C$ has equation $(x-2)^2+(y-3)^2=25$. The point $P(5,7)$ lies on $C$. Find the equation of the tangent to $C$ at $P$, giving your answer in the form $y=mx+c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the centre and radius",
          "workingLatex": "(x-2)^2+(y-3)^2=25 \\Rightarrow C(2,3),\\; r=5",
          "explanation": "The equation is already in completed-square form $(x-a)^2+(y-b)^2=r^2$, so the centre is $(2,3)$ and the radius is $\\sqrt{25}=5$. We only really need the centre here, because it tells us the direction of the radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the tangent-radius fact",
          "workingLatex": "\\text{tangent} \\perp \\text{radius at } P",
          "explanation": "At the point of contact the tangent just touches the circle, and the radius drawn to that point meets it at a right angle. So once we know the gradient of the radius $CP$, the tangent's gradient follows immediately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the radius CP",
          "workingLatex": "m_{CP}=\\dfrac{7-3}{5-2}=\\dfrac{4}{3}",
          "explanation": "Using the gradient formula between the centre $C(2,3)$ and the point $P(5,7)$ gives the steepness of the radius that ends at $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the negative reciprocal for the tangent gradient",
          "workingLatex": "m_{t}=-\\dfrac{1}{m_{CP}}=-\\dfrac{3}{4}",
          "explanation": "Perpendicular gradients multiply to $-1$, so we flip the fraction and change the sign. This turns the radius gradient $\\tfrac{4}{3}$ into the tangent gradient $-\\tfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the line through P with this gradient",
          "workingLatex": "y-7=-\\dfrac{3}{4}(x-5)",
          "explanation": "The tangent passes through $P(5,7)$ and has gradient $-\\tfrac{3}{4}$, so the point-gradient form gives the line straight away.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "y-7=-\\dfrac{3}{4}x+\\dfrac{15}{4}",
          "explanation": "Multiplying $-\\tfrac{3}{4}$ through $(x-5)$ spreads the gradient across the bracket, leaving the equation ready to rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make y the subject",
          "workingLatex": "y=-\\dfrac{3}{4}x+\\dfrac{15}{4}+7",
          "explanation": "Adding $7$ to both sides isolates $y$ so that the equation is in the requested $y=mx+c$ shape.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the constant terms",
          "workingLatex": "y=-\\dfrac{3}{4}x+\\dfrac{43}{4}",
          "explanation": "Writing $7$ as $\\tfrac{28}{4}$ lets us add the constants over a common denominator: $\\tfrac{15}{4}+\\tfrac{28}{4}=\\tfrac{43}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the tangent passes through P",
          "workingLatex": "-\\dfrac{3}{4}(5)+\\dfrac{43}{4}=\\dfrac{-15+43}{4}=\\dfrac{28}{4}=7",
          "explanation": "Substituting $x=5$ returns $y=7$, confirming the line really does pass through the point of contact $P(5,7)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify perpendicularity",
          "workingLatex": "m_{CP}\\times m_{t}=\\dfrac{4}{3}\\times\\left(-\\dfrac{3}{4}\\right)=-1",
          "explanation": "The product of the radius and tangent gradients is $-1$, which is exactly the condition for perpendicular lines, so our tangent is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-\\dfrac{3}{4}x+\\dfrac{43}{4}$"
    }
  },
  {
    "id": "al.y1.pure.circles.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "circles",
      "tangent",
      "radius"
    ],
    "questionText": "The circle $C$ has equation $(x-1)^2+(y-2)^2=25$. The point $P(4,6)$ lies on $C$. Find the equation of the tangent to $C$ at $P$ in the form $ax+by+c=0$, where $a$, $b$ and $c$ are integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the centre",
          "workingLatex": "(x-1)^2+(y-2)^2=25 \\Rightarrow C(1,2)",
          "explanation": "From the completed-square form the centre is $(1,2)$. The centre fixes the direction of the radius to $P$, which is all we need to find the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the tangent-radius fact",
          "workingLatex": "\\text{tangent} \\perp \\text{radius } CP",
          "explanation": "A tangent meets the radius at its point of contact at a right angle. So we first find the gradient of the radius $CP$, then rotate it by $90^{\\circ}$ using the negative reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient of the radius CP",
          "workingLatex": "m_{CP}=\\dfrac{6-2}{4-1}=\\dfrac{4}{3}",
          "explanation": "The gradient formula between $C(1,2)$ and $P(4,6)$ measures how steeply the radius rises as it reaches $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the negative reciprocal",
          "workingLatex": "m_{t}=-\\dfrac{3}{4}",
          "explanation": "Flipping $\\tfrac{4}{3}$ and changing the sign gives the perpendicular gradient, because perpendicular gradients multiply to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the line through P",
          "workingLatex": "y-6=-\\dfrac{3}{4}(x-4)",
          "explanation": "The tangent passes through $P(4,6)$ with gradient $-\\tfrac{3}{4}$, so point-gradient form captures it directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "4(y-6)=-3(x-4)",
          "explanation": "Multiplying both sides by $4$ removes the denominator, which is helpful because the final form asks for integer coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand both sides",
          "workingLatex": "4y-24=-3x+12",
          "explanation": "Expanding the brackets prepares the equation to be gathered onto one side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect all terms on one side",
          "workingLatex": "3x+4y-36=0",
          "explanation": "Moving every term to the left keeps the $x$ coefficient positive and gives the requested $ax+by+c=0$ form with integers $a=3$, $b=4$, $c=-36$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify P satisfies the equation",
          "workingLatex": "3(4)+4(6)-36=12+24-36=0",
          "explanation": "Substituting $P(4,6)$ gives $0$, confirming the point of contact lies on our tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify perpendicularity",
          "workingLatex": "\\dfrac{4}{3}\\times\\left(-\\dfrac{3}{4}\\right)=-1",
          "explanation": "The radius and tangent gradients multiply to $-1$, so the line is genuinely perpendicular to $CP$ as a tangent must be.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3x+4y-36=0$"
    }
  },
  {
    "id": "al.y1.pure.circles.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "circles",
      "normal",
      "radius"
    ],
    "questionText": "The circle $C$ has equation $(x-3)^2+(y-1)^2=25$. The point $P(7,4)$ lies on $C$. Find the equation of the normal to $C$ at $P$, giving your answer in the form $y=mx+c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the centre",
          "workingLatex": "(x-3)^2+(y-1)^2=25 \\Rightarrow C(3,1)",
          "explanation": "From the completed-square form the centre is $(3,1)$. The centre is the key point for a normal, as we will see next.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what a normal is",
          "workingLatex": "\\text{normal at } P \\text{ passes through } C",
          "explanation": "The normal is perpendicular to the tangent, and the radius is also perpendicular to the tangent. So the normal lies along the radius, meaning it simply passes through both $P$ and the centre $C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the gradient through P and C",
          "workingLatex": "m=\\dfrac{4-1}{7-3}=\\dfrac{3}{4}",
          "explanation": "Because the normal is the line through $P(7,4)$ and $C(3,1)$, its gradient is just the gradient of the radius itself.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the line through P",
          "workingLatex": "y-4=\\dfrac{3}{4}(x-7)",
          "explanation": "Using point-gradient form with $P(7,4)$ and gradient $\\tfrac{3}{4}$ gives the normal directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the bracket",
          "workingLatex": "y-4=\\dfrac{3}{4}x-\\dfrac{21}{4}",
          "explanation": "Distributing $\\tfrac{3}{4}$ across $(x-7)$ spreads the gradient over the bracket ready for rearranging.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make y the subject",
          "workingLatex": "y=\\dfrac{3}{4}x-\\dfrac{21}{4}+4",
          "explanation": "Adding $4$ to both sides isolates $y$ into the $y=mx+c$ form we want.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the constants",
          "workingLatex": "y=\\dfrac{3}{4}x-\\dfrac{5}{4}",
          "explanation": "Writing $4$ as $\\tfrac{16}{4}$ gives $-\\tfrac{21}{4}+\\tfrac{16}{4}=-\\tfrac{5}{4}$ for the intercept.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the centre lies on the normal",
          "workingLatex": "\\dfrac{3}{4}(3)-\\dfrac{5}{4}=\\dfrac{9-5}{4}=1",
          "explanation": "Substituting $x=3$ gives $y=1$, confirming the normal passes through the centre $C(3,1)$ as it must.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the point P lies on the normal",
          "workingLatex": "\\dfrac{3}{4}(7)-\\dfrac{5}{4}=\\dfrac{21-5}{4}=4",
          "explanation": "Substituting $x=7$ gives $y=4$, so the line also passes through $P(7,4)$. Passing through both points confirms our normal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=\\dfrac{3}{4}x-\\dfrac{5}{4}$"
    }
  },
  {
    "id": "al.y1.pure.circles.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "circles",
      "tangent",
      "radius"
    ],
    "questionText": "The circle $C$ has equation $x^2+y^2-4x-6y-12=0$. (a) Show that the point $P(6,6)$ lies on $C$. (b) Find the equation of the tangent to $C$ at $P$, giving your answer in the form $y=mx+c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute P into the circle equation",
          "workingLatex": "(6)^2+(6)^2-4(6)-6(6)-12",
          "explanation": "To show a point lies on the circle we check that its coordinates satisfy the equation, so we substitute $x=6$ and $y=6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the substitution",
          "workingLatex": "36+36-24-36-12=0",
          "explanation": "The left-hand side equals $0$, which matches the right-hand side, so $P(6,6)$ does lie on $C$. Part (a) is complete.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the centre by completing the square",
          "workingLatex": "(x-2)^2+(y-3)^2=12+4+9=25",
          "explanation": "Grouping $x^2-4x$ into $(x-2)^2-4$ and $y^2-6y$ into $(y-3)^2-9$ rewrites the circle in standard form, revealing centre $(2,3)$ and radius $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the tangent-radius fact",
          "workingLatex": "\\text{tangent} \\perp \\text{radius } CP",
          "explanation": "The tangent at $P$ is perpendicular to the radius $CP$, so the gradient of $CP$ leads us to the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the gradient of the radius CP",
          "workingLatex": "m_{CP}=\\dfrac{6-3}{6-2}=\\dfrac{3}{4}",
          "explanation": "The gradient between the centre $C(2,3)$ and $P(6,6)$ gives the steepness of the radius at the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the negative reciprocal",
          "workingLatex": "m_{t}=-\\dfrac{4}{3}",
          "explanation": "Flipping $\\tfrac{3}{4}$ and changing the sign gives the perpendicular gradient for the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the line through P",
          "workingLatex": "y-6=-\\dfrac{4}{3}(x-6)",
          "explanation": "The tangent passes through $P(6,6)$ with gradient $-\\tfrac{4}{3}$, so point-gradient form gives its equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "y-6=-\\dfrac{4}{3}x+8",
          "explanation": "Multiplying $-\\tfrac{4}{3}$ by $-6$ gives $+8$, spreading the gradient across the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Make y the subject",
          "workingLatex": "y=-\\dfrac{4}{3}x+14",
          "explanation": "Adding $6$ to both sides gives $8+6=14$ as the intercept, producing the requested $y=mx+c$ form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the tangent passes through P",
          "workingLatex": "-\\dfrac{4}{3}(6)+14=-8+14=6",
          "explanation": "Substituting $x=6$ returns $y=6$, confirming the tangent passes through the point of contact $P(6,6)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(6,6)$ satisfies the equation, giving $0=0$, so it lies on $C$. (b) $y=-\\dfrac{4}{3}x+14$"
    }
  },
  {
    "id": "al.y1.pure.circles.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "equation",
    "tags": [
      "circles",
      "tangent",
      "radius"
    ],
    "questionText": "A circle has centre $C(1,1)$ and the point $P(4,3)$ is a point of contact of a tangent to the circle. Find the equation of the tangent at $P$, giving your answer in the form $y=mx+c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tangent-radius fact",
          "workingLatex": "\\text{tangent} \\perp \\text{radius } CP",
          "explanation": "At the point of contact the tangent is perpendicular to the radius. So the plan is to find the gradient of $CP$ first, then turn it into the tangent gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the radius CP",
          "workingLatex": "m_{CP}=\\dfrac{3-1}{4-1}=\\dfrac{2}{3}",
          "explanation": "Using the gradient formula between $C(1,1)$ and $P(4,3)$ gives a fractional gradient of $\\tfrac{2}{3}$ for the radius.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the negative reciprocal",
          "workingLatex": "m_{t}=-\\dfrac{3}{2}",
          "explanation": "Flipping the fraction $\\tfrac{2}{3}$ and changing the sign gives $-\\tfrac{3}{2}$, the gradient perpendicular to the radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the line through P",
          "workingLatex": "y-3=-\\dfrac{3}{2}(x-4)",
          "explanation": "The tangent passes through $P(4,3)$ with gradient $-\\tfrac{3}{2}$, so point-gradient form gives its equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the bracket",
          "workingLatex": "y-3=-\\dfrac{3}{2}x+6",
          "explanation": "Multiplying $-\\tfrac{3}{2}$ by $-4$ gives $+6$, distributing the gradient across the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make y the subject",
          "workingLatex": "y=-\\dfrac{3}{2}x+9",
          "explanation": "Adding $3$ to both sides gives $6+3=9$ as the intercept, giving the requested $y=mx+c$ form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the tangent passes through P",
          "workingLatex": "-\\dfrac{3}{2}(4)+9=-6+9=3",
          "explanation": "Substituting $x=4$ returns $y=3$, so the line passes through the point of contact $P(4,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify perpendicularity",
          "workingLatex": "\\dfrac{2}{3}\\times\\left(-\\dfrac{3}{2}\\right)=-1",
          "explanation": "The product of the radius and tangent gradients is $-1$, confirming the two lines are perpendicular exactly as a tangent requires.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final tangent equation",
          "workingLatex": "y=-\\dfrac{3}{2}x+9",
          "explanation": "Both checks pass, so this is the tangent to the circle at $P$ in the required form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y=-\\dfrac{3}{2}x+9$"
    }
  },
  {
    "id": "al.y1.pure.circles.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "circles",
      "chord",
      "intersection"
    ],
    "questionText": "The circle $C$ has equation $x^2+y^2=25$. The line $l$ with equation $y=x+1$ intersects $C$ at the points $A$ and $B$. Find the exact length of the chord $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the line into the circle",
          "workingLatex": "x^2+(x+1)^2=25",
          "explanation": "The chord's endpoints lie on both the line and the circle. Replacing $y$ with $x+1$ in the circle equation finds the $x$-coordinates where they meet.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the bracket",
          "workingLatex": "x^2+x^2+2x+1=25",
          "explanation": "Expanding $(x+1)^2$ as $x^2+2x+1$ prepares the equation to be tidied into a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to a quadratic",
          "workingLatex": "2x^2+2x-24=0",
          "explanation": "Collecting like terms and moving the $25$ across gives a quadratic whose two roots are the $x$-coordinates of $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide through by 2",
          "workingLatex": "x^2+x-12=0",
          "explanation": "Dividing by the common factor $2$ leaves smaller numbers that are easier to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise the quadratic",
          "workingLatex": "(x+4)(x-3)=0",
          "explanation": "We need two numbers multiplying to $-12$ and adding to $1$; those are $+4$ and $-3$, giving the factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "x=-4 \\quad \\text{or} \\quad x=3",
          "explanation": "Setting each factor to zero gives the two $x$-coordinates where the line cuts the circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the matching y-coordinates",
          "workingLatex": "A(-4,-3),\\quad B(3,4)",
          "explanation": "Substituting each $x$ into $y=x+1$ gives the endpoints: $x=-4$ gives $y=-3$, and $x=3$ gives $y=4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the distance formula",
          "workingLatex": "AB=\\sqrt{(3-(-4))^2+(4-(-3))^2}",
          "explanation": "The chord length is the straight-line distance between $A$ and $B$, found with the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate inside the root",
          "workingLatex": "AB=\\sqrt{7^2+7^2}=\\sqrt{98}",
          "explanation": "Both differences work out to $7$, so the length is $\\sqrt{49+49}=\\sqrt{98}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{98}=\\sqrt{49\\times2}=7\\sqrt{2}",
          "explanation": "Factoring out the perfect square $49$ simplifies the surd to the exact value $7\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the endpoints lie on the circle",
          "workingLatex": "(-4)^2+(-3)^2=25,\\quad 3^2+4^2=25",
          "explanation": "Both points satisfy $x^2+y^2=25$, confirming they genuinely lie on the circle and our chord is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB=7\\sqrt{2}$"
    }
  },
  {
    "id": "al.y1.pure.circles.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "chord",
      "perpendicular"
    ],
    "questionText": "The circle $C$ has centre $(2,3)$ and equation $(x-2)^2+(y-3)^2=25$. A chord of $C$ lies along the line $x+y=9$. Find the coordinates of the midpoint of this chord.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the chord-bisector fact",
          "workingLatex": "\\text{midpoint} = \\text{foot of } \\perp \\text{ from } C",
          "explanation": "The perpendicular from the centre to a chord always bisects it. So the midpoint of the chord is exactly where the perpendicular from $C$ meets the chord's line.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the gradient of the chord line",
          "workingLatex": "x+y=9 \\Rightarrow y=-x+9,\\; m=-1",
          "explanation": "Rearranging the chord's line into $y=mx+c$ form shows it has gradient $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the perpendicular gradient",
          "workingLatex": "m_{\\perp}=1",
          "explanation": "The perpendicular from the centre has gradient equal to the negative reciprocal of $-1$, which is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the perpendicular through the centre",
          "workingLatex": "y-3=1(x-2)\\;\\Rightarrow\\; y=x+1",
          "explanation": "This line passes through the centre $C(2,3)$ with gradient $1$, so it is the perpendicular that hits the midpoint of the chord.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the chord line",
          "workingLatex": "x+(x+1)=9",
          "explanation": "The midpoint lies on both lines. Substituting $y=x+1$ into $x+y=9$ solves for their intersection.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for x",
          "workingLatex": "2x+1=9 \\Rightarrow 2x=8 \\Rightarrow x=4",
          "explanation": "Simplifying and rearranging gives the $x$-coordinate of the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the y-coordinate",
          "workingLatex": "y=4+1=5",
          "explanation": "Substituting $x=4$ back into $y=x+1$ gives the $y$-coordinate, so the midpoint is $M(4,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify M lies on the chord line",
          "workingLatex": "4+5=9",
          "explanation": "The point $M(4,5)$ satisfies $x+y=9$, so it really does lie on the chord as required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify CM is perpendicular to the chord",
          "workingLatex": "m_{CM}=\\dfrac{5-3}{4-2}=1,\\quad 1\\times(-1)=-1",
          "explanation": "The gradient from $C$ to $M$ is $1$, and its product with the chord gradient $-1$ is $-1$, confirming perpendicularity and that $M$ is the midpoint.",
          "diagram": null
        }
      ],
      "finalAnswer": "$M(4,5)$"
    }
  },
  {
    "id": "al.y1.pure.circles.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "circles",
      "chord",
      "perpendicular"
    ],
    "questionText": "A chord of a circle of radius $13$ cm lies at a perpendicular distance of $5$ cm from the centre. Find the length of the chord.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the right-angled triangle",
          "workingLatex": "\\text{radius = hypotenuse},\\; d=\\text{one leg},\\; \\tfrac{L}{2}=\\text{other leg}",
          "explanation": "The perpendicular from the centre bisects the chord, forming a right-angled triangle. Its hypotenuse is the radius, one leg is the distance $d$, and the other leg is half the chord.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the Pythagorean relation",
          "workingLatex": "\\left(\\dfrac{L}{2}\\right)^2+d^2=r^2",
          "explanation": "Applying Pythagoras to that triangle links half the chord, the perpendicular distance, and the radius.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given values",
          "workingLatex": "\\left(\\dfrac{L}{2}\\right)^2+5^2=13^2",
          "explanation": "We are told $r=13$ and $d=5$, so we place these into the relation to solve for the half-chord.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the squares",
          "workingLatex": "\\left(\\dfrac{L}{2}\\right)^2+25=169",
          "explanation": "Computing $5^2=25$ and $13^2=169$ turns the equation into simple numbers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the half-chord squared",
          "workingLatex": "\\left(\\dfrac{L}{2}\\right)^2=144",
          "explanation": "Subtracting $25$ from both sides leaves the square of half the chord.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "\\dfrac{L}{2}=12",
          "explanation": "Since $\\sqrt{144}=12$, half the chord is $12$ cm. We take the positive root because a length is positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the full chord length",
          "workingLatex": "L=2\\times12=24",
          "explanation": "The perpendicular splits the chord into two equal halves, so doubling gives the full length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with Pythagoras",
          "workingLatex": "12^2+5^2=144+25=169=13^2",
          "explanation": "The half-chord, distance, and radius form a $5$-$12$-$13$ right triangle, confirming the arithmetic is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "L=24\\text{ cm}",
          "explanation": "The chord has length $24$ cm.",
          "diagram": null
        }
      ],
      "finalAnswer": "The chord is $24$ cm long."
    }
  },
  {
    "id": "al.y1.pure.circles.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "diameter",
      "midpoint"
    ],
    "questionText": "The circle $C$ has centre $(2,3)$ and equation $(x-2)^2+(y-3)^2=25$. The point $A(6,6)$ lies on $C$. The point $B$ is diametrically opposite $A$. (a) Find the coordinates of $B$. (b) Hence write down the length of the diameter $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the key idea",
          "workingLatex": "C \\text{ is the midpoint of diameter } AB",
          "explanation": "A diameter passes through the centre, and the centre sits exactly halfway along it. So $C(2,3)$ is the midpoint of $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the midpoint equations",
          "workingLatex": "\\left(\\dfrac{6+x_B}{2},\\dfrac{6+y_B}{2}\\right)=(2,3)",
          "explanation": "The midpoint of $A(6,6)$ and $B(x_B,y_B)$ must equal the centre, so we match each coordinate separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the x-coordinate of B",
          "workingLatex": "\\dfrac{6+x_B}{2}=2 \\Rightarrow 6+x_B=4 \\Rightarrow x_B=-2",
          "explanation": "Setting the average of the $x$-values equal to $2$ and rearranging gives the $x$-coordinate of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the y-coordinate of B",
          "workingLatex": "\\dfrac{6+y_B}{2}=3 \\Rightarrow 6+y_B=6 \\Rightarrow y_B=0",
          "explanation": "Doing the same for the $y$-values gives the $y$-coordinate of $B$, so $B(-2,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify B lies on the circle",
          "workingLatex": "(-2-2)^2+(0-3)^2=16+9=25",
          "explanation": "Substituting $B(-2,0)$ into the circle equation gives $25$, confirming $B$ is on the circle, as any diameter endpoint must be.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the radius",
          "workingLatex": "r=\\sqrt{25}=5",
          "explanation": "The equation shows $r^2=25$, so the radius is $5$. The diameter is simply twice this.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the diameter from the radius",
          "workingLatex": "AB=2r=2\\times5=10",
          "explanation": "Since $A$ and $B$ are opposite ends of a diameter, the distance between them is $2r=10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with the distance formula",
          "workingLatex": "AB=\\sqrt{(6-(-2))^2+(6-0)^2}=\\sqrt{64+36}",
          "explanation": "Computing the straight-line distance between $A(6,6)$ and $B(-2,0)$ provides an independent check on the length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the two results agree",
          "workingLatex": "\\sqrt{100}=10",
          "explanation": "The distance formula also gives $10$, matching $2r$. Both methods agree, so the answers are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $B(-2,0)$. (b) $AB=10$."
    }
  },
  {
    "id": "al.y1.pure.circles.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "circles",
      "tangent-length",
      "general-form",
      "complete-the-square"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 - 6x + 4y - 12 = 0$. The point $T$ has coordinates $(8, 10)$. Show that $T$ lies outside $C$, and find the exact length of the tangent drawn from $T$ to $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the equation",
          "workingLatex": "x^2 + y^2 - 6x + 4y - 12 = 0",
          "explanation": "This circle is written in expanded (general) form. To find its centre and radius we first rewrite it in completed-square form, because that form shows the centre and radius directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group the x and y terms",
          "workingLatex": "(x^2 - 6x) + (y^2 + 4y) - 12 = 0",
          "explanation": "Collecting the $x$-terms together and the $y$-terms together lets us complete the square on each bracket independently.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in x",
          "workingLatex": "x^2 - 6x = (x-3)^2 - 9",
          "explanation": "Half of the coefficient of $x$ is $-3$, so the bracket is $(x-3)^2$. Squaring $-3$ adds $9$, so we subtract $9$ to keep the value unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square in y",
          "workingLatex": "y^2 + 4y = (y+2)^2 - 4",
          "explanation": "Half of the coefficient of $y$ is $2$, giving $(y+2)^2$, and we subtract the $4$ this introduces so nothing is added overall.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the completed-square form",
          "workingLatex": "(x-3)^2 - 9 + (y+2)^2 - 4 - 12 = 0 \\;\\Rightarrow\\; (x-3)^2 + (y+2)^2 = 25",
          "explanation": "Moving the constants to the right collects them as $9 + 4 + 12 = 25$. The right-hand side is the radius squared.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the centre and radius",
          "workingLatex": "C = (3,\\,-2), \\quad r = 5",
          "explanation": "Comparing with $(x-a)^2+(y-b)^2=r^2$ gives centre $(3,-2)$ and radius $\\sqrt{25}=5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the distance from C to T",
          "workingLatex": "|CT|^2 = (8-3)^2 + (10-(-2))^2",
          "explanation": "The distance from the centre to the external point $T$ comes from Pythagoras on the differences in coordinates. We keep it squared for now to avoid an unnecessary root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the horizontal and vertical parts",
          "workingLatex": "(8-3)^2 = 25, \\qquad (10+2)^2 = 144",
          "explanation": "The horizontal gap is $5$ and the vertical gap is $12$; squaring each gives $25$ and $144$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add to get CT squared",
          "workingLatex": "|CT|^2 = 25 + 144 = 169",
          "explanation": "Summing the squared gaps gives the square of the distance from the centre to $T$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm T is outside the circle",
          "workingLatex": "|CT| = 13 > 5 = r",
          "explanation": "Since the distance from the centre to $T$ (which is $13$) is greater than the radius $5$, the point $T$ lies outside the circle, so a real tangent exists.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall the tangent-length formula",
          "workingLatex": "L = \\sqrt{|CT|^2 - r^2}",
          "explanation": "The radius meets the tangent at a right angle, so the radius, the tangent and the line $CT$ form a right-angled triangle with $CT$ as the hypotenuse. Rearranging Pythagoras gives this formula.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the known values",
          "workingLatex": "L = \\sqrt{169 - 25}",
          "explanation": "We place $|CT|^2 = 169$ and $r^2 = 25$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify",
          "workingLatex": "L = \\sqrt{144} = 12",
          "explanation": "The difference is a perfect square, so the tangent length is exactly $12$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sanity check with Pythagoras",
          "workingLatex": "5^2 + 12^2 = 25 + 144 = 169 = |CT|^2",
          "explanation": "The radius, tangent and $CT$ satisfy Pythagoras exactly, confirming the right angle and the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T$ lies outside $C$ because $|CT| = 13 > 5$, and the exact length of the tangent from $T$ to $C$ is $12$."
    }
  },
  {
    "id": "al.y1.pure.circles.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "circles",
      "tangent",
      "discriminant",
      "gradient"
    ],
    "questionText": "The line $y = mx + 5$ is a tangent to the circle $x^2 + y^2 = 5$. Find the two possible values of the gradient $m$, and write down the equation of each tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle and line",
          "workingLatex": "x^2 + y^2 = 5, \\qquad y = mx + 5",
          "explanation": "The line passes through the fixed point $(0,5)$ whatever the gradient $m$. We want the gradients for which it just touches the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret tangency",
          "workingLatex": "\\text{tangent} \\iff \\text{discriminant} = 0",
          "explanation": "A tangent meets a circle exactly once. After substituting the line into the circle we obtain a quadratic in $x$, and a single (repeated) root occurs precisely when its discriminant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the line into the circle",
          "workingLatex": "x^2 + (mx + 5)^2 = 5",
          "explanation": "Replacing $y$ by $mx+5$ forces the intersection points to lie on both the line and the circle at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "x^2 + m^2x^2 + 10mx + 25 = 5",
          "explanation": "Expanding $(mx+5)^2$ gives $m^2x^2 + 10mx + 25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect into a quadratic in x",
          "workingLatex": "(1 + m^2)x^2 + 10mx + 20 = 0",
          "explanation": "Grouping the $x^2$ terms and moving the $5$ across leaves a standard quadratic $ax^2+bx+c=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the coefficients",
          "workingLatex": "a = 1 + m^2, \\quad b = 10m, \\quad c = 20",
          "explanation": "Reading off $a$, $b$ and $c$ lets us build the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the discriminant",
          "workingLatex": "\\Delta = b^2 - 4ac",
          "explanation": "The discriminant $b^2-4ac$ controls how many real roots the quadratic has.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the coefficients",
          "workingLatex": "\\Delta = (10m)^2 - 4(1 + m^2)(20)",
          "explanation": "We insert our $a$, $b$ and $c$, ready to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand",
          "workingLatex": "\\Delta = 100m^2 - 80 - 80m^2",
          "explanation": "Squaring $10m$ gives $100m^2$, and expanding $4(1+m^2)(20) = 80 + 80m^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify",
          "workingLatex": "\\Delta = 20m^2 - 80",
          "explanation": "Combining the $m^2$ terms gives $100m^2 - 80m^2 = 20m^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the tangency condition",
          "workingLatex": "20m^2 - 80 = 0",
          "explanation": "For a repeated root we set the discriminant equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for m",
          "workingLatex": "m^2 = 4 \\;\\Rightarrow\\; m = \\pm 2",
          "explanation": "Dividing by $20$ gives $m^2 = 4$, whose two solutions correspond to the two tangents drawn from the external point $(0,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the tangent lines",
          "workingLatex": "y = 2x + 5 \\quad \\text{and} \\quad y = -2x + 5",
          "explanation": "Each gradient produces one tangent line through $(0,5)$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the case m = 2",
          "workingLatex": "5x^2 + 20x + 20 = 0 \\;\\Rightarrow\\; (x+2)^2 = 0",
          "explanation": "With $m=2$ the quadratic becomes $5x^2+20x+20=0$, that is $x^2+4x+4=0$, a perfect square with the single repeated root $x=-2$. This confirms the line touches the circle exactly once.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m = 2$ or $m = -2$, giving the tangents $y = 2x + 5$ and $y = -2x + 5$."
    }
  },
  {
    "id": "al.y1.pure.circles.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "circles",
      "tangent",
      "perpendicular-distance"
    ],
    "questionText": "The line $x + y = k$ is a tangent to the circle $(x-2)^2 + (y-3)^2 = 8$. Using the perpendicular-distance condition, find the two possible values of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle",
          "workingLatex": "(x-2)^2 + (y-3)^2 = 8",
          "explanation": "The circle has centre $(2,3)$ and radius $\\sqrt{8}$. A tangent sits exactly one radius from the centre, which we will use directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the radius",
          "workingLatex": "r = \\sqrt{8} = 2\\sqrt{2}",
          "explanation": "Taking the square root of $8$ and simplifying gives the radius $2\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the line in general form",
          "workingLatex": "x + y = k \\;\\Rightarrow\\; x + y - k = 0",
          "explanation": "Putting the line as $px+qy+s=0$ lets us use the perpendicular-distance formula, here with $p=1$, $q=1$, $s=-k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the tangency condition",
          "workingLatex": "\\frac{|p a + q b + s|}{\\sqrt{p^2 + q^2}} = r",
          "explanation": "A line is a tangent exactly when the perpendicular distance from the centre to the line equals the radius.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the centre and coefficients",
          "workingLatex": "\\frac{|(1)(2) + (1)(3) - k|}{\\sqrt{1^2 + 1^2}} = 2\\sqrt{2}",
          "explanation": "We put the centre $(2,3)$ and the coefficients into the distance formula and set it equal to the radius.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify numerator and denominator",
          "workingLatex": "\\frac{|5 - k|}{\\sqrt{2}} = 2\\sqrt{2}",
          "explanation": "The numerator becomes $|5-k|$ and the denominator $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the denominator",
          "workingLatex": "|5 - k| = 2\\sqrt{2}\\times\\sqrt{2} = 4",
          "explanation": "Multiplying both sides by $\\sqrt{2}$ removes the fraction, and $2\\sqrt{2}\\times\\sqrt{2} = 2\\times 2 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Split the modulus",
          "workingLatex": "5 - k = 4 \\quad \\text{or} \\quad 5 - k = -4",
          "explanation": "An absolute value equal to $4$ means the inside is either $+4$ or $-4$, giving the two tangent positions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve each case",
          "workingLatex": "k = 1 \\quad \\text{or} \\quad k = 9",
          "explanation": "Rearranging each equation gives the two values of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify k = 1",
          "workingLatex": "\\frac{|5 - 1|}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2} = r",
          "explanation": "The perpendicular distance equals the radius, so $x+y=1$ is indeed a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify k = 9",
          "workingLatex": "\\frac{|5 - 9|}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2} = r",
          "explanation": "Again the distance equals the radius, confirming $x+y=9$ is a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the two answers",
          "workingLatex": "k = 1 \\;\\text{and}\\; k = 9",
          "explanation": "The two lines are parallel and sit on opposite sides of the circle, each just touching it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the result",
          "workingLatex": "k = 1 \\;\\text{or}\\; k = 9",
          "explanation": "Both values satisfy the tangency condition exactly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 1$ or $k = 9$."
    }
  },
  {
    "id": "al.y1.pure.circles.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "circles",
      "chord",
      "general-form",
      "perpendicular-distance"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 - 6x - 8y = 0$. The line $3x + 4y = 10$ cuts $C$ in a chord. Find the exact length of that chord.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle in general form",
          "workingLatex": "x^2 + y^2 - 6x - 8y = 0",
          "explanation": "We first rewrite the circle in completed-square form to find its centre and radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group the terms",
          "workingLatex": "(x^2 - 6x) + (y^2 - 8y) = 0",
          "explanation": "Collecting the $x$-terms and $y$-terms readies each bracket for completing the square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in x",
          "workingLatex": "x^2 - 6x = (x-3)^2 - 9",
          "explanation": "Half of $-6$ is $-3$, so the bracket is $(x-3)^2$, and we subtract the $9$ it introduces.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square in y",
          "workingLatex": "y^2 - 8y = (y-4)^2 - 16",
          "explanation": "Half of $-8$ is $-4$, giving $(y-4)^2$, and we subtract $16$ to compensate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the standard form",
          "workingLatex": "(x-3)^2 + (y-4)^2 = 25",
          "explanation": "Bringing the $-9$ and $-16$ to the right gives $25$ on the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State centre and radius",
          "workingLatex": "C = (3, 4), \\quad r = 5",
          "explanation": "The centre is $(3,4)$ and the radius is $\\sqrt{25}=5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the line in general form",
          "workingLatex": "3x + 4y = 10 \\;\\Rightarrow\\; 3x + 4y - 10 = 0",
          "explanation": "We write the line as $px+qy+s=0$ so that we can use the perpendicular-distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the perpendicular distance",
          "workingLatex": "d = \\frac{|3(3) + 4(4) - 10|}{\\sqrt{3^2 + 4^2}}",
          "explanation": "The perpendicular from the centre bisects the chord, so its length $d$ is the key quantity. We compute it with the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate",
          "workingLatex": "d = \\frac{|9 + 16 - 10|}{5} = \\frac{15}{5}",
          "explanation": "The numerator is $|15| = 15$ and the denominator $\\sqrt{25}=5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the distance",
          "workingLatex": "d = 3",
          "explanation": "The centre is a perpendicular distance of $3$ from the line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the line cuts the circle",
          "workingLatex": "d = 3 < 5 = r",
          "explanation": "Since the distance is less than the radius, the line genuinely crosses the circle, so a chord exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use the half-chord relationship",
          "workingLatex": "\\left(\\tfrac{L}{2}\\right)^2 + d^2 = r^2",
          "explanation": "The radius to an end of the chord, the perpendicular distance $d$, and half the chord form a right-angled triangle with the radius as hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute known values",
          "workingLatex": "\\left(\\tfrac{L}{2}\\right)^2 = 25 - 9 = 16",
          "explanation": "Placing $r=5$ and $d=3$ and rearranging isolates the square of the half-chord.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for the half-chord",
          "workingLatex": "\\tfrac{L}{2} = 4",
          "explanation": "Taking the positive root gives half the chord length.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the full chord",
          "workingLatex": "L = 2 \\times 4 = 8",
          "explanation": "Doubling the half-chord gives the full chord length.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Sanity check",
          "workingLatex": "8 < 2r = 10",
          "explanation": "The chord (length $8$) is shorter than the diameter ($10$), exactly as a genuine chord must be.",
          "diagram": null
        }
      ],
      "finalAnswer": "The chord has length $8$."
    }
  },
  {
    "id": "al.y1.pure.circles.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "circles",
      "tangent-length",
      "external-point"
    ],
    "questionText": "Two tangents are drawn from the point $P(7, 13)$ to the circle $(x-2)^2 + (y-1)^2 = 25$. Find the distance from $P$ to the centre, and the length of each tangent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle",
          "workingLatex": "(x-2)^2 + (y-1)^2 = 25",
          "explanation": "The circle has centre $C=(2,1)$ and radius $r=5$. Tangents from a single external point are equal in length, so we only need to work one out.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the external point",
          "workingLatex": "P = (7, 13)",
          "explanation": "Both tangents start at $P$ and touch the circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the distance from P to the centre",
          "workingLatex": "|CP|^2 = (7-2)^2 + (13-1)^2",
          "explanation": "By Pythagoras on the coordinate differences we find the distance from the centre to $P$, keeping it squared for now.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the parts",
          "workingLatex": "(7-2)^2 = 25, \\qquad (13-1)^2 = 144",
          "explanation": "The horizontal gap is $5$ and the vertical gap is $12$; squaring gives $25$ and $144$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add them",
          "workingLatex": "|CP|^2 = 25 + 144 = 169",
          "explanation": "Summing the squared gaps gives the square of the distance from the centre to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the distance",
          "workingLatex": "|CP| = \\sqrt{169} = 13",
          "explanation": "The distance from the centre to $P$ is $13$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm P is external",
          "workingLatex": "|CP| = 13 > 5 = r",
          "explanation": "Because $P$ is further from the centre than the radius, it lies outside the circle and two real tangents exist.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the tangent-length formula",
          "workingLatex": "L = \\sqrt{|CP|^2 - r^2}",
          "explanation": "The tangent meets the radius at right angles, so the radius, tangent and $CP$ form a right-angled triangle with $CP$ as the hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "L = \\sqrt{169 - 25}",
          "explanation": "We place $|CP|^2 = 169$ and $r^2 = 25$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify",
          "workingLatex": "L = \\sqrt{144} = 12",
          "explanation": "The difference is a perfect square, so each tangent has length $12$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use symmetry for the second tangent",
          "workingLatex": "L_1 = L_2 = 12",
          "explanation": "The two tangents from $P$ are mirror images in the line $CP$, so they have exactly the same length.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify with Pythagoras",
          "workingLatex": "r^2 + L^2 = 25 + 144 = 169 = |CP|^2",
          "explanation": "The radius, tangent length and $CP$ satisfy Pythagoras exactly, confirming the right angle at each point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the results",
          "workingLatex": "|CP| = 13, \\quad L = 12",
          "explanation": "The distance from $P$ to the centre is $13$ and each tangent has length $12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distance from $P$ to the centre is $13$, and each of the two tangents has length $12$."
    }
  },
  {
    "id": "al.y1.pure.circles.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "circles",
      "tangent",
      "parallel-lines"
    ],
    "questionText": "Find the equations of the two tangents to the circle $x^2 + y^2 = 20$ that are parallel to the line $y = 2x + 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle",
          "workingLatex": "x^2 + y^2 = 20",
          "explanation": "The circle is centred at the origin with radius $\\sqrt{20}$. Tangents parallel to a given line all share that line's gradient.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the radius",
          "workingLatex": "r = \\sqrt{20} = 2\\sqrt{5}",
          "explanation": "Simplifying $\\sqrt{20}$ gives $2\\sqrt{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the required gradient",
          "workingLatex": "y = 2x + 7 \\;\\Rightarrow\\; m = 2",
          "explanation": "Parallel lines have equal gradients, so every tangent we seek has gradient $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the family of parallel lines",
          "workingLatex": "y = 2x + c",
          "explanation": "We keep the gradient $2$ and let the intercept $c$ vary; the correct values of $c$ make the line a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to general form",
          "workingLatex": "2x - y + c = 0",
          "explanation": "Writing the line as $px+qy+s=0$ with $p=2$, $q=-1$, $s=c$ lets us apply the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the tangency condition",
          "workingLatex": "\\frac{|2(0) - (0) + c|}{\\sqrt{2^2 + (-1)^2}} = r",
          "explanation": "A tangent lies exactly one radius from the centre, so we set the perpendicular distance from the origin equal to $r$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "\\frac{|c|}{\\sqrt{5}} = 2\\sqrt{5}",
          "explanation": "The numerator reduces to $|c|$ and the denominator to $\\sqrt{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for c",
          "workingLatex": "|c| = 2\\sqrt{5}\\times\\sqrt{5} = 10",
          "explanation": "Multiplying both sides by $\\sqrt{5}$ gives $|c| = 10$, since $2\\sqrt{5}\\times\\sqrt{5} = 2\\times 5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take both signs",
          "workingLatex": "c = 10 \\quad \\text{or} \\quad c = -10",
          "explanation": "The modulus gives two intercepts, one tangent on each side of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the tangent equations",
          "workingLatex": "y = 2x + 10 \\quad \\text{and} \\quad y = 2x - 10",
          "explanation": "Each value of $c$ produces one tangent line parallel to the given line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify c = 10",
          "workingLatex": "\\frac{|10|}{\\sqrt{5}} = \\frac{10}{\\sqrt{5}} = 2\\sqrt{5} = r",
          "explanation": "The distance from the centre equals the radius, confirming tangency.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify c = -10",
          "workingLatex": "\\frac{|-10|}{\\sqrt{5}} = 2\\sqrt{5} = r",
          "explanation": "The second line is the same distance away on the opposite side, so it too is a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the result",
          "workingLatex": "y = 2x + 10, \\quad y = 2x - 10",
          "explanation": "These are the two tangents to the circle that are parallel to $y = 2x + 7$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The two tangents are $y = 2x + 10$ and $y = 2x - 10$."
    }
  },
  {
    "id": "al.y1.pure.circles.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "circles",
      "line-circle-intersection",
      "perpendicular-distance"
    ],
    "questionText": "The circle $C$ has equation $(x-3)^2 + (y+1)^2 = 16$ and $\\ell$ is the line $3x - 4y + 5 = 0$. Find the exact perpendicular distance from the centre of $C$ to $\\ell$, and hence state whether $\\ell$ cuts, touches, or misses the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle",
          "workingLatex": "(x-3)^2 + (y+1)^2 = 16",
          "explanation": "Whether a line cuts, touches or misses a circle depends only on how the perpendicular distance from the centre compares with the radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State centre and radius",
          "workingLatex": "C = (3, -1), \\quad r = \\sqrt{16} = 4",
          "explanation": "Comparing with $(x-a)^2+(y-b)^2=r^2$ gives centre $(3,-1)$ and radius $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the line",
          "workingLatex": "3x - 4y + 5 = 0",
          "explanation": "The line is already in the form $px+qy+s=0$ with $p=3$, $q=-4$, $s=5$, ready for the distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\frac{|p a + q b + s|}{\\sqrt{p^2 + q^2}}",
          "explanation": "This gives the perpendicular (shortest) distance from the centre $(a,b)$ to the line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the centre",
          "workingLatex": "d = \\frac{|3(3) - 4(-1) + 5|}{\\sqrt{3^2 + (-4)^2}}",
          "explanation": "We insert the centre $(3,-1)$ and the line's coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "|9 + 4 + 5| = 18",
          "explanation": "Working out $3(3)=9$, $-4(-1)=+4$ and $+5$ gives $18$ inside the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the denominator",
          "workingLatex": "\\sqrt{9 + 16} = \\sqrt{25} = 5",
          "explanation": "The denominator $\\sqrt{3^2+(-4)^2}$ is $\\sqrt{25}=5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the exact distance",
          "workingLatex": "d = \\frac{18}{5}",
          "explanation": "The exact perpendicular distance from the centre to the line is $\\tfrac{18}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write it as a decimal",
          "workingLatex": "d = 3.6",
          "explanation": "Expressing $\\tfrac{18}{5}$ as $3.6$ makes the comparison with the radius easy.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the comparison rule",
          "workingLatex": "d < r \\Rightarrow \\text{cuts}, \\quad d = r \\Rightarrow \\text{touches}, \\quad d > r \\Rightarrow \\text{misses}",
          "explanation": "The line crosses the circle when the centre is nearer than the radius, just touches when the distance equals the radius, and misses when the distance is greater.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the radius",
          "workingLatex": "3.6 < 4",
          "explanation": "The perpendicular distance $3.6$ is less than the radius $4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude",
          "workingLatex": "d = \\tfrac{18}{5} < 4 \\Rightarrow \\text{the line cuts } C",
          "explanation": "Since the centre is closer to the line than the radius, the line is a secant, meeting the circle at two distinct points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final statement",
          "workingLatex": "d = \\tfrac{18}{5}, \\quad \\text{two intersection points}",
          "explanation": "The exact perpendicular distance is $\\tfrac{18}{5}$, and being less than the radius it confirms the line cuts the circle at two points.",
          "diagram": null
        }
      ],
      "finalAnswer": "The perpendicular distance is $\\dfrac{18}{5}$ ($=3.6$), which is less than the radius $4$, so the line cuts the circle at two points."
    }
  },
  {
    "id": "al.y1.pure.circles.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "point-of-contact",
      "tangent"
    ],
    "questionText": "Tangents are drawn from the external point $P(7, 1)$ to the circle $x^2 + y^2 = 25$. Find the coordinates of the two points where these tangents touch the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle",
          "workingLatex": "x^2 + y^2 = 25",
          "explanation": "The circle is centred at the origin $O$ with radius $5$. We want the two points where the tangents from $P$ touch it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check P is external",
          "workingLatex": "P = (7, 1), \\quad |OP|^2 = 7^2 + 1^2 = 50 > 25",
          "explanation": "Since $P$ is further than the radius from the centre, it lies outside the circle and two tangents exist.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the right angle at the contact point",
          "workingLatex": "\\angle OAP = 90^\\circ",
          "explanation": "A tangent is perpendicular to the radius at the point of contact $A$, so $OA$ and $PA$ meet at a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate A using the right angle",
          "workingLatex": "A \\text{ lies on the circle with diameter } OP",
          "explanation": "An angle of $90^\\circ$ at $A$ subtended by $OP$ means $A$ lies on the circle that has $OP$ as a diameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the centre of that circle",
          "workingLatex": "M = \\left(\\tfrac{0+7}{2}, \\tfrac{0+1}{2}\\right) = (3.5,\\, 0.5)",
          "explanation": "The centre of the circle on diameter $OP$ is the midpoint of $O$ and $P$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find its radius squared",
          "workingLatex": "\\left(\\tfrac{|OP|}{2}\\right)^2 = \\tfrac{50}{4} = 12.5",
          "explanation": "Its radius is half of $|OP|$, so its radius squared is $\\tfrac{50}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write its equation",
          "workingLatex": "(x - 3.5)^2 + (y - 0.5)^2 = 12.5",
          "explanation": "This auxiliary circle passes through $O$, $P$ and the two points of contact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand it",
          "workingLatex": "x^2 - 7x + 12.25 + y^2 - y + 0.25 = 12.5",
          "explanation": "Expanding both brackets prepares it for comparison with the original circle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "x^2 + y^2 - 7x - y = 0",
          "explanation": "The constants $12.25 + 0.25 = 12.5$ cancel with the right-hand side, leaving this tidy equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract the original circle",
          "workingLatex": "(x^2 + y^2 - 7x - y) - (x^2 + y^2) = 0 - 25",
          "explanation": "Both contact points satisfy both circle equations, so subtracting eliminates the squared terms and leaves the straight line through them.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Obtain the line of contact",
          "workingLatex": "-7x - y = -25 \\;\\Rightarrow\\; 7x + y = 25",
          "explanation": "This line (the chord of contact) passes through both points where the tangents touch.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make y the subject",
          "workingLatex": "y = 25 - 7x",
          "explanation": "Expressing $y$ in terms of $x$ lets us substitute back into the original circle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute into the circle",
          "workingLatex": "x^2 + (25 - 7x)^2 = 25",
          "explanation": "Replacing $y$ in $x^2+y^2=25$ gives an equation in $x$ alone for the contact points.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Expand",
          "workingLatex": "x^2 + 625 - 350x + 49x^2 = 25",
          "explanation": "Expanding $(25-7x)^2$ gives $625 - 350x + 49x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Form a quadratic",
          "workingLatex": "50x^2 - 350x + 600 = 0 \\;\\Rightarrow\\; x^2 - 7x + 12 = 0",
          "explanation": "Collecting terms and dividing by $50$ simplifies to a neat quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Solve for x",
          "workingLatex": "(x - 3)(x - 4) = 0 \\;\\Rightarrow\\; x = 3 \\ \\text{or} \\ x = 4",
          "explanation": "Factorising gives the two $x$-coordinates of the contact points.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Find the matching y-values",
          "workingLatex": "x=3: \\ y = 25 - 21 = 4; \\qquad x=4: \\ y = 25 - 28 = -3",
          "explanation": "Substituting each $x$ back into $y = 25 - 7x$ gives the corresponding $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 18,
          "description": "State and check the contact points",
          "workingLatex": "(3,4):\\ 9+16=25 \\ \\checkmark \\qquad (4,-3):\\ 16+9=25 \\ \\checkmark",
          "explanation": "Both points satisfy the original circle equation, confirming they lie on it. These are the two points of contact.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tangents touch the circle at $(3, 4)$ and $(4, -3)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "circles",
      "shortest-distance",
      "external-point"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 - 4x - 6y - 3 = 0$ and $P$ is the point $(14, 8)$. Find the shortest distance and the greatest distance from $P$ to the circle $C$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle in general form",
          "workingLatex": "x^2 + y^2 - 4x - 6y - 3 = 0",
          "explanation": "We first rewrite the circle in completed-square form to read off its centre and radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group the terms",
          "workingLatex": "(x^2 - 4x) + (y^2 - 6y) - 3 = 0",
          "explanation": "Collecting the $x$-terms and $y$-terms prepares each for completing the square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in x",
          "workingLatex": "x^2 - 4x = (x-2)^2 - 4",
          "explanation": "Half of $-4$ is $-2$, giving $(x-2)^2$, and we subtract the $4$ introduced.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square in y",
          "workingLatex": "y^2 - 6y = (y-3)^2 - 9",
          "explanation": "Half of $-6$ is $-3$, giving $(y-3)^2$, and we subtract $9$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the standard form",
          "workingLatex": "(x-2)^2 + (y-3)^2 = 16",
          "explanation": "Moving $-4$, $-9$ and $-3$ to the right gives $4+9+3 = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State centre and radius",
          "workingLatex": "C = (2, 3), \\quad r = 4",
          "explanation": "The centre is $(2,3)$ and the radius $\\sqrt{16}=4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the external point",
          "workingLatex": "P = (14, 8)",
          "explanation": "The nearest and farthest points of the circle both lie on the straight line through $P$ and the centre.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the distance to the centre",
          "workingLatex": "|CP|^2 = (14-2)^2 + (8-3)^2",
          "explanation": "By Pythagoras on the coordinate differences we find the distance from the centre to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the parts",
          "workingLatex": "(14-2)^2 = 144, \\qquad (8-3)^2 = 25",
          "explanation": "The horizontal gap is $12$ and the vertical gap is $5$, giving $144$ and $25$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add",
          "workingLatex": "|CP|^2 = 144 + 25 = 169",
          "explanation": "Summing the squared gaps gives the square of the distance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the distance",
          "workingLatex": "|CP| = \\sqrt{169} = 13",
          "explanation": "The distance from the centre to $P$ is $13$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm P is outside",
          "workingLatex": "|CP| = 13 > 4 = r",
          "explanation": "Since $P$ is further from the centre than the radius, it lies outside the circle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the shortest distance",
          "workingLatex": "d_{\\min} = |CP| - r = 13 - 4 = 9",
          "explanation": "The nearest point of the circle lies on the segment $CP$, one radius in from the centre towards $P$, so the shortest distance is $|CP|$ minus the radius.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the greatest distance",
          "workingLatex": "d_{\\max} = |CP| + r = 13 + 4 = 17",
          "explanation": "The farthest point lies on the same line but on the opposite side of the circle, one radius beyond the centre from $P$, so the greatest distance is $|CP|$ plus the radius.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Sanity check",
          "workingLatex": "d_{\\max} - d_{\\min} = 17 - 9 = 8 = 2r",
          "explanation": "The nearest and farthest points are a full diameter apart, and $17 - 9 = 8 = 2\\times 4$ confirms the two answers are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "The shortest distance from $P$ to the circle is $9$, and the greatest distance is $17$."
    }
  },
  {
    "id": "al.y1.pure.circles.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "circles",
      "chord",
      "perpendicular-distance"
    ],
    "questionText": "The circle $C$ has equation $x^2 + y^2 - 10x + 4y + 4 = 0$. A chord of $C$ has length $8$. Find the perpendicular distance from the centre of $C$ to that chord.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle in general form",
          "workingLatex": "x^2 + y^2 - 10x + 4y + 4 = 0",
          "explanation": "We first find the centre and radius by completing the square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group the terms",
          "workingLatex": "(x^2 - 10x) + (y^2 + 4y) + 4 = 0",
          "explanation": "Collecting the $x$-terms and $y$-terms readies each bracket for completing the square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square in x",
          "workingLatex": "x^2 - 10x = (x-5)^2 - 25",
          "explanation": "Half of $-10$ is $-5$, giving $(x-5)^2$, and we subtract $25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square in y",
          "workingLatex": "y^2 + 4y = (y+2)^2 - 4",
          "explanation": "Half of $4$ is $2$, giving $(y+2)^2$, and we subtract $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the standard form",
          "workingLatex": "(x-5)^2 + (y+2)^2 = 25",
          "explanation": "Combining the constants $-25 - 4 + 4 = -25$ and moving it across gives $25$ on the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State centre and radius",
          "workingLatex": "C = (5, -2), \\quad r = 5",
          "explanation": "The centre is $(5,-2)$ and the radius $\\sqrt{25}=5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the chord length",
          "workingLatex": "L = 8",
          "explanation": "The chord in question has length $8$; we want the perpendicular distance from the centre to it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the perpendicular from the centre",
          "workingLatex": "\\text{the perpendicular from } C \\text{ bisects the chord}",
          "explanation": "The perpendicular from the centre to a chord always cuts it exactly in half, creating two equal right-angled triangles.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the half-chord",
          "workingLatex": "\\frac{L}{2} = 4",
          "explanation": "Half of the chord length $8$ is $4$; this is one leg of the right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the right-angle relationship",
          "workingLatex": "\\left(\\tfrac{L}{2}\\right)^2 + d^2 = r^2",
          "explanation": "Half the chord, the perpendicular distance $d$, and the radius form a right-angled triangle with the radius as the hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute known values",
          "workingLatex": "4^2 + d^2 = 5^2",
          "explanation": "We insert the half-chord $4$ and the radius $5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify",
          "workingLatex": "16 + d^2 = 25",
          "explanation": "Squaring gives $16$ and $25$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for d squared",
          "workingLatex": "d^2 = 25 - 16 = 9",
          "explanation": "Subtracting isolates $d^2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find d",
          "workingLatex": "d = 3",
          "explanation": "Taking the positive root gives the perpendicular distance, which must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Sanity check",
          "workingLatex": "4^2 + 3^2 = 16 + 9 = 25 = 5^2",
          "explanation": "The half-chord, distance and radius satisfy Pythagoras, and $d=3$ is less than the radius $5$, as any genuine chord requires.",
          "diagram": null
        }
      ],
      "finalAnswer": "The perpendicular distance from the centre to the chord is $3$."
    }
  },
  {
    "id": "al.y1.pure.circles.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "circles",
      "angle-in-semicircle",
      "gradients",
      "pythagoras"
    ],
    "questionText": "A circle has centre $C(3,2)$. The points $A(-2,2)$ and $B(8,2)$ are the ends of a diameter, and $P(6,6)$ lies on the circle. Prove that $\\angle APB = 90^\\circ$, first using gradients and then confirming the result with Pythagoras' theorem.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the given information",
          "workingLatex": "A(-2,2),\\; B(8,2),\\; P(6,6),\\; C(3,2)",
          "explanation": "We list the three key points. $A$ and $B$ are said to be the ends of a diameter, and $P$ sits on the circle, so we expect the angle-in-a-semicircle result to apply.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm AB is a diameter",
          "workingLatex": "\\text{Midpoint }AB=\\left(\\frac{-2+8}{2},\\frac{2+2}{2}\\right)=(3,2)=C",
          "explanation": "A diameter always passes through the centre, so its midpoint must be $C$. Since the midpoint of $AB$ is exactly $(3,2)$, we have confirmed $AB$ is a genuine diameter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm P lies on the circle",
          "workingLatex": "(6-3)^2+(6-2)^2=3^2+4^2=9+16=25=r^2",
          "explanation": "The radius is half the diameter. Checking that $P$ is a distance $5$ from the centre confirms $P$ is truly on the circle, so the semicircle theorem is available to us.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gradient of AP",
          "workingLatex": "m_{AP}=\\frac{6-2}{6-(-2)}=\\frac{4}{8}=\\frac{1}{2}",
          "explanation": "The gradient measures the steepness of the line joining $A$ to $P$. We divide the change in $y$ by the change in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Gradient of BP",
          "workingLatex": "m_{BP}=\\frac{6-2}{6-8}=\\frac{4}{-2}=-2",
          "explanation": "In the same way we find the gradient of $BP$. A negative value tells us this line slopes downwards from left to right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the gradients",
          "workingLatex": "m_{AP}\\times m_{BP}=\\frac{1}{2}\\times(-2)=-1",
          "explanation": "Two lines are perpendicular exactly when the product of their gradients is $-1$. This is the algebraic fingerprint of a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the lines are perpendicular",
          "workingLatex": "AP\\perp BP",
          "explanation": "Because the gradients multiply to $-1$, the segments $AP$ and $BP$ meet at right angles at $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Begin Pythagoras check: AP squared",
          "workingLatex": "AP^2=(6-(-2))^2+(6-2)^2=8^2+4^2=64+16=80",
          "explanation": "To verify independently, we compute the squared side lengths. Squaring avoids surds until the very end and keeps the arithmetic exact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "BP squared",
          "workingLatex": "BP^2=(6-8)^2+(6-2)^2=(-2)^2+4^2=4+16=20",
          "explanation": "We find the squared length of the second short side of the triangle in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "AB squared (the diameter)",
          "workingLatex": "AB^2=(8-(-2))^2+(2-2)^2=10^2+0=100",
          "explanation": "The diameter $AB$ would be the hypotenuse if the angle at $P$ is a right angle, so we compute its squared length too.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test the converse of Pythagoras",
          "workingLatex": "AP^2+BP^2=80+20=100",
          "explanation": "The converse of Pythagoras says that if the two shorter squared sides add to the longest squared side, the triangle must be right-angled.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare with AB squared",
          "workingLatex": "AP^2+BP^2=100=AB^2",
          "explanation": "The sums match exactly, so the right angle sits opposite the hypotenuse $AB$ — that is, at $P$. This agrees with the gradient argument.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "\\angle APB=90^\\circ",
          "explanation": "Both methods confirm the classic result: the angle subtended at the circle by a diameter is a right angle (the angle in a semicircle).",
          "diagram": null
        }
      ],
      "finalAnswer": "Proven: the gradients of $AP$ and $BP$ multiply to $-1$, and $AP^2+BP^2=80+20=100=AB^2$, so $\\angle APB=90^\\circ$ (angle in a semicircle)."
    }
  },
  {
    "id": "al.y1.pure.circles.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "diameter",
      "angle-in-semicircle",
      "coordinate-geometry"
    ],
    "questionText": "A circle has equation $(x-4)^2+(y-3)^2=25$. The point $P(1,7)$ lies on the circle and $PQ$ is a diameter. Find the coordinates of $Q$. The point $R(8,6)$ also lies on the circle; verify that $R$ sees the diameter $PQ$ at a right angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify centre and radius",
          "workingLatex": "C(4,3),\\quad r=\\sqrt{25}=5",
          "explanation": "Reading straight from the equation $(x-a)^2+(y-b)^2=r^2$, the centre is $(4,3)$ and the radius is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check P lies on the circle",
          "workingLatex": "(1-4)^2+(7-3)^2=(-3)^2+4^2=9+16=25",
          "explanation": "Before using $P$ as one end of a diameter, we confirm it genuinely lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the centre as the midpoint of PQ",
          "workingLatex": "C=\\left(\\frac{x_P+x_Q}{2},\\frac{y_P+y_Q}{2}\\right)",
          "explanation": "A diameter passes through the centre, and the centre is the midpoint of that diameter. This gives us equations linking $P$ and $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for Q",
          "workingLatex": "Q=(2\\cdot4-1,\\;2\\cdot3-7)=(7,-1)",
          "explanation": "Rearranging the midpoint formula, $Q=2C-P$. Doubling the centre and subtracting $P$ gives the opposite end of the diameter.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify Q lies on the circle",
          "workingLatex": "(7-4)^2+(-1-3)^2=3^2+(-4)^2=9+16=25",
          "explanation": "As a safety check, $Q$ must also be a distance $5$ from the centre. It is, confirming our diameter endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check R lies on the circle",
          "workingLatex": "(8-4)^2+(6-3)^2=4^2+3^2=16+9=25",
          "explanation": "We confirm $R(8,6)$ is on the circle so that the semicircle theorem applies to the angle at $R$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Gradient of RP",
          "workingLatex": "m_{RP}=\\frac{7-6}{1-8}=\\frac{1}{-7}=-\\frac{1}{7}",
          "explanation": "We measure the slope of the line joining $R$ to one end of the diameter, $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Gradient of RQ",
          "workingLatex": "m_{RQ}=\\frac{-1-6}{7-8}=\\frac{-7}{-1}=7",
          "explanation": "Now the slope of the line joining $R$ to the other end of the diameter, $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply the gradients",
          "workingLatex": "m_{RP}\\times m_{RQ}=-\\frac{1}{7}\\times7=-1",
          "explanation": "A product of $-1$ is the tell-tale sign that the two lines meet at a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the angle result",
          "workingLatex": "\\angle PRQ=90^\\circ",
          "explanation": "Since $RP$ and $RQ$ are perpendicular, $R$ views the diameter at a right angle, exactly as the semicircle theorem predicts.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm with Pythagoras: RP squared",
          "workingLatex": "RP^2=(1-8)^2+(7-6)^2=49+1=50",
          "explanation": "An independent Pythagoras check strengthens the proof. We start with the squared length of $RP$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "RQ squared",
          "workingLatex": "RQ^2=(7-8)^2+(-1-6)^2=1+49=50",
          "explanation": "Then the squared length of $RQ$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "PQ squared (the diameter)",
          "workingLatex": "PQ^2=(7-1)^2+(-1-7)^2=36+64=100",
          "explanation": "The diameter is the potential hypotenuse, so we compute its squared length.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Apply the converse of Pythagoras",
          "workingLatex": "RP^2+RQ^2=50+50=100=PQ^2",
          "explanation": "The two shorter squared sides add to the diameter's squared length, confirming the right angle sits at $R$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final result",
          "workingLatex": "Q=(7,-1),\\quad \\angle PRQ=90^\\circ",
          "explanation": "We have located the far end of the diameter and verified, by two methods, that $R$ subtends a right angle on it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$Q=(7,-1)$; the gradients of $RP$ and $RQ$ give $-\\tfrac{1}{7}\\times 7=-1$ and $RP^2+RQ^2=100=PQ^2$, so $\\angle PRQ=90^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.circles.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "equation",
    "tags": [
      "circles",
      "circumcircle",
      "right-angled-triangle",
      "diameter"
    ],
    "questionText": "The triangle $ABC$ has vertices $A(0,0)$, $B(1,7)$ and $C(8,6)$. Show that the triangle is right-angled, and hence find the equation of its circumcircle (the circle passing through all three vertices).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the strategy",
          "workingLatex": "A(0,0),\\; B(1,7),\\; C(8,6)",
          "explanation": "If the triangle is right-angled, the hypotenuse is a diameter of the circumcircle (angle in a semicircle). We first find the right angle, then use the hypotenuse to build the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Squared length AB",
          "workingLatex": "AB^2=(1-0)^2+(7-0)^2=1+49=50",
          "explanation": "We compare the three squared side lengths to test for a right angle, avoiding surds by keeping everything squared.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Squared length BC",
          "workingLatex": "BC^2=(8-1)^2+(6-7)^2=49+1=50",
          "explanation": "The second squared side length.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Squared length AC",
          "workingLatex": "AC^2=(8-0)^2+(6-0)^2=64+36=100",
          "explanation": "The third and largest squared side length; if a right angle exists, $AC$ is the hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test Pythagoras",
          "workingLatex": "AB^2+BC^2=50+50=100=AC^2",
          "explanation": "The two smaller squared sides add to the largest squared side, so by the converse of Pythagoras the triangle is right-angled.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate the right angle",
          "workingLatex": "\\angle ABC=90^\\circ",
          "explanation": "The right angle lies opposite the hypotenuse $AC$, which means it sits at vertex $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the diameter",
          "workingLatex": "\\text{Hypotenuse } AC \\text{ is a diameter}",
          "explanation": "Because $B$ sees $AC$ at a right angle, $AC$ must be a diameter of the circle through $A$, $B$ and $C$ — the semicircle theorem in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the centre",
          "workingLatex": "\\text{Centre}=\\left(\\frac{0+8}{2},\\frac{0+6}{2}\\right)=(4,3)",
          "explanation": "The centre of the circle is the midpoint of the diameter $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the radius",
          "workingLatex": "r=\\frac{1}{2}AC=\\frac{1}{2}\\sqrt{100}=5,\\quad r^2=25",
          "explanation": "The radius is half the diameter. Working with $r^2$ keeps the final equation tidy.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the equation",
          "workingLatex": "(x-4)^2+(y-3)^2=25",
          "explanation": "Substituting the centre and $r^2$ into the standard circle form gives the circumcircle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify A lies on it",
          "workingLatex": "(0-4)^2+(0-3)^2=16+9=25\\;\\checkmark",
          "explanation": "We confirm each vertex satisfies the equation. Starting with $A$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify B lies on it",
          "workingLatex": "(1-4)^2+(7-3)^2=9+16=25\\;\\checkmark",
          "explanation": "Vertex $B$ also lies on the circle, which is the crucial check since $B$ was not an endpoint of the diameter.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify C lies on it",
          "workingLatex": "(8-4)^2+(6-3)^2=16+9=25\\;\\checkmark",
          "explanation": "Vertex $C$ satisfies the equation too, so all three vertices are on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answer",
          "workingLatex": "(x-4)^2+(y-3)^2=25",
          "explanation": "The triangle is right-angled at $B$, and its circumcircle has centre $(4,3)$ and radius $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Right-angled at $B$ since $AB^2+BC^2=100=AC^2$; the circumcircle is $(x-4)^2+(y-3)^2=25$."
    }
  },
  {
    "id": "al.y1.pure.circles.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "equation",
    "tags": [
      "circles",
      "general-form",
      "three-points",
      "simultaneous-equations"
    ],
    "questionText": "Find the equation of the circle that passes through the three points $(6,6)$, $(7,3)$ and $(-1,7)$. Use the general form $x^2+y^2+2gx+2fy+c=0$ and solve for $g$, $f$ and $c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the general form",
          "workingLatex": "x^2+y^2+2gx+2fy+c=0",
          "explanation": "The general equation of a circle has three unknowns $g$, $f$ and $c$, so three points give exactly enough information to pin them down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute (6,6)",
          "workingLatex": "36+36+12g+12f+c=0\\;\\Rightarrow\\;12g+12f+c=-72",
          "explanation": "Each point on the circle must satisfy the equation. Substituting the first point gives our first linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute (7,3)",
          "workingLatex": "49+9+14g+6f+c=0\\;\\Rightarrow\\;14g+6f+c=-58",
          "explanation": "The second point produces a second linear equation in $g$, $f$ and $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute (-1,7)",
          "workingLatex": "1+49-2g+14f+c=0\\;\\Rightarrow\\;-2g+14f+c=-50",
          "explanation": "The third point completes the system of three simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Eliminate c (equation 2 minus 1)",
          "workingLatex": "(14g+6f)-(12g+12f)=-58-(-72)\\;\\Rightarrow\\;2g-6f=14",
          "explanation": "Subtracting pairs of equations removes the shared constant $c$, reducing the problem to two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the first reduced equation",
          "workingLatex": "g-3f=7",
          "explanation": "Dividing by $2$ makes the numbers smaller and easier to handle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Eliminate c (equation 1 minus 3)",
          "workingLatex": "(12g+12f)-(-2g+14f)=-72-(-50)\\;\\Rightarrow\\;14g-2f=-22",
          "explanation": "A second subtraction removes $c$ again, giving another equation in just $g$ and $f$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the second reduced equation",
          "workingLatex": "7g-f=-11",
          "explanation": "Dividing by $2$ tidies this equation too.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Express g in terms of f",
          "workingLatex": "g=7+3f",
          "explanation": "Rearranging $g-3f=7$ lets us substitute for $g$ in the other equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for f",
          "workingLatex": "7(7+3f)-f=-11\\;\\Rightarrow\\;49+20f=-11\\;\\Rightarrow\\;f=-3",
          "explanation": "Substituting and collecting terms leaves a single equation in $f$, which we solve directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for g",
          "workingLatex": "g=7+3(-3)=-2",
          "explanation": "Back-substituting $f=-3$ into $g=7+3f$ gives $g$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for c",
          "workingLatex": "12(-2)+12(-3)+c=-72\\;\\Rightarrow\\;-60+c=-72\\;\\Rightarrow\\;c=-12",
          "explanation": "With $g$ and $f$ known, the first original equation delivers $c$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the circle equation",
          "workingLatex": "x^2+y^2-4x-6y-12=0",
          "explanation": "Substituting $2g=-4$, $2f=-6$ and $c=-12$ gives the circle in general form.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find centre and radius",
          "workingLatex": "\\text{Centre}=(-g,-f)=(2,3),\\quad r=\\sqrt{g^2+f^2-c}=\\sqrt{4+9+12}=5",
          "explanation": "Interpreting the coefficients confirms a genuine circle (a positive radius) and gives its geometry: centre $(2,3)$, radius $5$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify a point",
          "workingLatex": "(7-2)^2+(3-3)^2=25+0=25=r^2\\;\\checkmark",
          "explanation": "Checking $(7,3)$ against the centre-radius form confirms the answer is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the final answer",
          "workingLatex": "x^2+y^2-4x-6y-12=0\\;\\;\\text{i.e.}\\;\\;(x-2)^2+(y-3)^2=25",
          "explanation": "The circle through the three given points has centre $(2,3)$ and radius $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2+y^2-4x-6y-12=0$, equivalently $(x-2)^2+(y-3)^2=25$ (centre $(2,3)$, radius $5$)."
    }
  },
  {
    "id": "al.y1.pure.circles.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "circles",
      "touching-circles",
      "distance-between-centres",
      "radii"
    ],
    "questionText": "Two circles have equations $x^2+y^2=9$ and $x^2+y^2-12x-16y+51=0$. Show that the circles touch, state whether the contact is internal or external, and find the point of contact.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read off the first circle",
          "workingLatex": "x^2+y^2=9\\;\\Rightarrow\\; C_1=(0,0),\\; r_1=3",
          "explanation": "The first circle is already in standard form, so its centre and radius can be read directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Complete the square for the second circle",
          "workingLatex": "(x^2-12x)+(y^2-16y)+51=0",
          "explanation": "The second circle is in general form, so we group the $x$ and $y$ terms ready to complete the square and reveal its centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete both squares",
          "workingLatex": "(x-6)^2-36+(y-8)^2-64+51=0",
          "explanation": "Completing the square rewrites each quadratic pair as a perfect square, introducing constants we must balance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify centre and radius",
          "workingLatex": "(x-6)^2+(y-8)^2=49\\;\\Rightarrow\\; C_2=(6,8),\\; r_2=7",
          "explanation": "Tidying the constants gives the standard form, from which the second centre and radius are clear.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distance between the centres",
          "workingLatex": "d=\\sqrt{(6-0)^2+(8-0)^2}=\\sqrt{36+64}=\\sqrt{100}=10",
          "explanation": "The key to touching is comparing the gap between centres with the radii. We compute that gap first.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sum of the radii",
          "workingLatex": "r_1+r_2=3+7=10",
          "explanation": "For external contact the centres are exactly the two radii apart, so we compute the sum of the radii.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare distance with sum of radii",
          "workingLatex": "d=10=r_1+r_2",
          "explanation": "Since the distance between centres equals the sum of the radii, the circles meet at a single point and neither overlaps the other.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rule out internal contact",
          "workingLatex": "|r_2-r_1|=|7-3|=4\\neq 10",
          "explanation": "Internal touching would require the distance to equal the difference of radii. It does not, so the contact is external.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the contact point",
          "workingLatex": "T=C_1+\\frac{r_1}{r_1+r_2}\\,(C_2-C_1)",
          "explanation": "The point of contact lies on the line joining the centres, dividing it in the ratio of the radii $r_1:r_2$ measured from $C_1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the contact point",
          "workingLatex": "T=(0,0)+\\frac{3}{10}(6,8)=\\left(\\frac{18}{10},\\frac{24}{10}\\right)=\\left(\\frac{9}{5},\\frac{12}{5}\\right)",
          "explanation": "Substituting the numbers locates the single shared point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify T is on the first circle",
          "workingLatex": "\\left(\\tfrac{9}{5}\\right)^2+\\left(\\tfrac{12}{5}\\right)^2=\\frac{81+144}{25}=\\frac{225}{25}=9\\;\\checkmark",
          "explanation": "The contact point must satisfy the first circle's equation, and it does.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify T is on the second circle",
          "workingLatex": "\\left(\\tfrac{9}{5}-6\\right)^2+\\left(\\tfrac{12}{5}-8\\right)^2=\\frac{441+784}{25}=\\frac{1225}{25}=49\\;\\checkmark",
          "explanation": "It also satisfies the second circle's equation, confirming it is the shared point.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "d=r_1+r_2\\;\\Rightarrow\\;\\text{touch externally at }\\left(\\tfrac{9}{5},\\tfrac{12}{5}\\right)",
          "explanation": "Because the centres are exactly the sum of the radii apart, the circles touch externally at a unique point.",
          "diagram": null
        }
      ],
      "finalAnswer": "The centres are $10$ apart and $r_1+r_2=10$, so the circles touch externally at $\\left(\\tfrac{9}{5},\\tfrac{12}{5}\\right)$."
    }
  },
  {
    "id": "al.y1.pure.circles.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "equation",
    "tags": [
      "circles",
      "tangent",
      "radius-perpendicular",
      "point-of-contact"
    ],
    "questionText": "The circle $(x-2)^2+(y-3)^2=25$ has centre $C$, and the point $P(5,7)$ lies on it. Find the equation of the tangent to the circle at $P$, and prove that this tangent is perpendicular to the radius $CP$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the centre",
          "workingLatex": "C=(2,3),\\quad r=5",
          "explanation": "The centre and radius come straight from the standard form of the equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm P lies on the circle",
          "workingLatex": "(5-2)^2+(7-3)^2=9+16=25\\;\\checkmark",
          "explanation": "We check that $P$ is really on the circle, since the tangent is defined at a point of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gradient of the radius CP",
          "workingLatex": "m_{CP}=\\frac{7-3}{5-2}=\\frac{4}{3}",
          "explanation": "The tangent's direction is fixed by the radius it meets, so we find the gradient of $CP$ first.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gradient of the tangent",
          "workingLatex": "m_{t}=-\\frac{1}{m_{CP}}=-\\frac{3}{4}",
          "explanation": "A tangent is perpendicular to the radius at the point of contact, so its gradient is the negative reciprocal of the radius gradient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the point-gradient form",
          "workingLatex": "y-7=-\\frac{3}{4}(x-5)",
          "explanation": "With the tangent gradient and the known point $P$, the straight-line equation follows immediately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "4(y-7)=-3(x-5)\\;\\Rightarrow\\;4y-28=-3x+15",
          "explanation": "Multiplying through by $4$ removes the fraction and makes rearranging cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the tangent tidily",
          "workingLatex": "3x+4y=43",
          "explanation": "Collecting the terms gives a neat implicit form for the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test perpendicularity of gradients",
          "workingLatex": "m_{CP}\\times m_{t}=\\frac{4}{3}\\times\\left(-\\frac{3}{4}\\right)=-1",
          "explanation": "The defining test of perpendicular lines is that their gradients multiply to $-1$, which we now confirm directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the perpendicular conclusion",
          "workingLatex": "CP\\perp \\text{tangent}",
          "explanation": "Since the gradients multiply to $-1$, the radius and tangent are indeed perpendicular at $P$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm tangency via distance from centre",
          "workingLatex": "d=\\frac{|3(2)+4(3)-43|}{\\sqrt{3^2+4^2}}=\\frac{|6+12-43|}{5}=\\frac{25}{5}=5",
          "explanation": "A line touches a circle exactly when its perpendicular distance from the centre equals the radius. We compute that distance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the distance",
          "workingLatex": "d=5=r",
          "explanation": "The distance from the centre to the line equals the radius, so the line really is a tangent, meeting the circle at exactly one point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check P satisfies the tangent",
          "workingLatex": "3(5)+4(7)=15+28=43\\;\\checkmark",
          "explanation": "Finally, $P$ lies on the tangent line, confirming it passes through the point of contact.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "3x+4y=43",
          "explanation": "The tangent at $P(5,7)$ is $3x+4y=43$, and it is perpendicular to the radius $CP$ as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Tangent: $3x+4y=43$. It is perpendicular to $CP$ since $\\tfrac{4}{3}\\times\\left(-\\tfrac{3}{4}\\right)=-1$, and its distance from $C$ equals the radius $5$."
    }
  },
  {
    "id": "al.y1.pure.circles.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "equation",
    "tags": [
      "circles",
      "tangent",
      "external-point",
      "quadratic"
    ],
    "questionText": "Find the equations of the two tangents drawn from the external point $(3,1)$ to the circle $x^2+y^2=5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle",
          "workingLatex": "x^2+y^2=5\\;\\Rightarrow\\;\\text{centre }(0,0),\\; r=\\sqrt{5}",
          "explanation": "The circle is centred at the origin with radius $\\sqrt5$, which makes the tangency condition especially simple.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the point is external",
          "workingLatex": "3^2+1^2=10>5",
          "explanation": "Since the point is further from the centre than the radius, it lies outside the circle and exactly two tangents can be drawn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write a line through the point",
          "workingLatex": "y-1=m(x-3)\\;\\Rightarrow\\;y=mx+(1-3m)",
          "explanation": "Every non-vertical line through $(3,1)$ has this form; the two tangents correspond to two special gradients $m$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the intercept",
          "workingLatex": "c=1-3m",
          "explanation": "Writing the line as $y=mx+c$ isolates its $y$-intercept, which the tangency condition will constrain.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the tangency condition",
          "workingLatex": "\\frac{|c|}{\\sqrt{1+m^2}}=\\sqrt{5}\\;\\Rightarrow\\;c^2=5(1+m^2)",
          "explanation": "A line touches a circle centred at the origin when its perpendicular distance from the origin equals the radius. Squaring removes the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for c",
          "workingLatex": "(1-3m)^2=5(1+m^2)",
          "explanation": "Replacing $c$ with $1-3m$ turns the condition into a single equation in the gradient $m$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand both sides",
          "workingLatex": "1-6m+9m^2=5+5m^2",
          "explanation": "Expanding lets us collect terms into a standard quadratic in $m$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the quadratic",
          "workingLatex": "4m^2-6m-4=0\\;\\Rightarrow\\;2m^2-3m-2=0",
          "explanation": "Bringing everything to one side and dividing by $2$ gives a tidy quadratic whose roots are the two tangent gradients.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise",
          "workingLatex": "(2m+1)(m-2)=0",
          "explanation": "Factorising is quicker than the formula here and reveals both gradients at once.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Read off the gradients",
          "workingLatex": "m=2\\quad\\text{or}\\quad m=-\\tfrac{1}{2}",
          "explanation": "The two solutions are the gradients of the two tangents from the external point.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "First tangent (m = 2)",
          "workingLatex": "y-1=2(x-3)\\;\\Rightarrow\\;y=2x-5",
          "explanation": "Substituting the first gradient back through $(3,1)$ gives the first tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Second tangent (m = -1/2)",
          "workingLatex": "y-1=-\\tfrac{1}{2}(x-3)\\;\\Rightarrow\\;x+2y=5",
          "explanation": "Substituting the second gradient and clearing the fraction gives the second tangent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the first tangent",
          "workingLatex": "c=-5:\\;c^2=25,\\;5(1+2^2)=25\\;\\checkmark",
          "explanation": "Checking $c^2=5(1+m^2)$ confirms $y=2x-5$ genuinely touches the circle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the second tangent",
          "workingLatex": "c=\\tfrac{5}{2}:\\;c^2=\\tfrac{25}{4},\\;5\\left(1+\\tfrac{1}{4}\\right)=\\tfrac{25}{4}\\;\\checkmark",
          "explanation": "The same check confirms $x+2y=5$ is also a tangent.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answer",
          "workingLatex": "y=2x-5\\quad\\text{and}\\quad x+2y=5",
          "explanation": "These are the two tangents from $(3,1)$ to the circle. Note their gradients multiply to $-1$, so the tangents are themselves perpendicular.",
          "diagram": null
        }
      ],
      "finalAnswer": "The two tangents are $y=2x-5$ and $x+2y=5$ (gradients $2$ and $-\\tfrac{1}{2}$)."
    }
  },
  {
    "id": "al.y1.pure.circles.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "circles",
      "line-intersection",
      "chord",
      "triangle-area"
    ],
    "questionText": "The line $y=x$ meets the circle $(x-3)^2+(y-2)^2=25$ at the points $A$ and $B$. Find the coordinates of $A$ and $B$, the length of the chord $AB$, and the area of triangle $ABC$, where $C$ is the centre of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the circle and line",
          "workingLatex": "(x-3)^2+(y-2)^2=25,\\quad y=x,\\quad C=(3,2)",
          "explanation": "We will substitute the line into the circle to find where they cross. The centre $C=(3,2)$ and radius $5$ are read from the equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the line",
          "workingLatex": "(x-3)^2+(x-2)^2=25",
          "explanation": "Replacing $y$ with $x$ reduces the problem to a single equation in $x$ for the intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the brackets",
          "workingLatex": "x^2-6x+9+x^2-4x+4=25",
          "explanation": "Expanding prepares the equation for collecting like terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect terms",
          "workingLatex": "2x^2-10x+13=25\\;\\Rightarrow\\;2x^2-10x-12=0",
          "explanation": "Gathering terms and moving everything to one side produces a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the quadratic",
          "workingLatex": "x^2-5x-6=0",
          "explanation": "Dividing through by $2$ gives a simpler quadratic that factorises neatly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise and solve",
          "workingLatex": "(x-6)(x+1)=0\\;\\Rightarrow\\;x=6\\;\\text{or}\\;x=-1",
          "explanation": "The two roots are the $x$-coordinates of the two intersection points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the intersection points",
          "workingLatex": "A=(6,6),\\quad B=(-1,-1)",
          "explanation": "Since $y=x$ on the line, the $y$-coordinates equal the $x$-coordinates, giving the two points.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Length of the chord AB",
          "workingLatex": "AB=\\sqrt{(6-(-1))^2+(6-(-1))^2}=\\sqrt{49+49}=\\sqrt{98}=7\\sqrt{2}",
          "explanation": "The chord length is the distance between $A$ and $B$, found with the distance formula and simplified as a surd.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Perpendicular distance from centre to the line",
          "workingLatex": "d=\\frac{|3-2|}{\\sqrt{1^2+(-1)^2}}=\\frac{1}{\\sqrt{2}}",
          "explanation": "Writing the line as $x-y=0$, the perpendicular distance from $C(3,2)$ is the height of the triangle from $C$ down to the chord.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cross-check with the half-chord",
          "workingLatex": "\\sqrt{r^2-d^2}=\\sqrt{25-\\tfrac{1}{2}}=\\sqrt{\\tfrac{49}{2}}=\\frac{7}{\\sqrt{2}}=\\tfrac{1}{2}AB\\;\\checkmark",
          "explanation": "The perpendicular from the centre bisects the chord, so half the chord should equal $\\sqrt{r^2-d^2}$. It matches $\\tfrac{1}{2}\\times7\\sqrt2$, confirming our values.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the triangle area",
          "workingLatex": "\\text{Area}=\\tfrac{1}{2}\\times AB\\times d",
          "explanation": "Taking the chord $AB$ as the base, the height is the perpendicular distance $d$ from the centre, so the area is half base times height.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the area",
          "workingLatex": "\\text{Area}=\\tfrac{1}{2}\\times 7\\sqrt{2}\\times\\frac{1}{\\sqrt{2}}=\\tfrac{1}{2}\\times 7=\\frac{7}{2}",
          "explanation": "The $\\sqrt2$ factors cancel neatly, leaving a clean numerical area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answers",
          "workingLatex": "A(6,6),\\;B(-1,-1),\\;AB=7\\sqrt{2},\\;\\text{Area}=\\tfrac{7}{2}",
          "explanation": "We have the intersection points, the chord length and the area of the triangle formed with the centre.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A=(6,6)$, $B=(-1,-1)$, chord $AB=7\\sqrt{2}$, and the area of triangle $ABC$ is $\\tfrac{7}{2}$."
    }
  },
  {
    "id": "al.y1.pure.circles.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinates",
    "tags": [
      "circles",
      "nearest-point",
      "farthest-point",
      "distance"
    ],
    "questionText": "A circle has equation $(x-1)^2+(y-2)^2=25$ and $P(10,14)$ is an external point. Find the points on the circle that are nearest to and farthest from $P$, and state the corresponding distances.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify centre and radius",
          "workingLatex": "C=(1,2),\\quad r=5",
          "explanation": "The nearest and farthest points always lie on the straight line through the centre and the external point, so we start from the centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Vector from centre to P",
          "workingLatex": "\\vec{CP}=(10-1,\\;14-2)=(9,12)",
          "explanation": "This vector points from the centre straight towards $P$, giving the direction along which the closest and farthest points lie.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distance from centre to P",
          "workingLatex": "|CP|=\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15",
          "explanation": "The length of this vector is how far $P$ is from the centre, a key ingredient for the final distances.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm P is external",
          "workingLatex": "|CP|=15>5=r",
          "explanation": "Since $P$ is farther than the radius, it lies outside the circle, so distinct nearest and farthest points exist.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the unit vector towards P",
          "workingLatex": "\\hat{u}=\\frac{1}{15}(9,12)=\\left(\\tfrac{3}{5},\\tfrac{4}{5}\\right)",
          "explanation": "Dividing by the length gives a direction vector of length $1$, which we can scale by the radius to step onto the circle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Nearest point on the circle",
          "workingLatex": "N=C+r\\,\\hat{u}=(1,2)+5\\left(\\tfrac{3}{5},\\tfrac{4}{5}\\right)=(4,6)",
          "explanation": "Stepping from the centre a distance $r$ towards $P$ lands on the point of the circle closest to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify N is on the circle",
          "workingLatex": "(4-1)^2+(6-2)^2=9+16=25\\;\\checkmark",
          "explanation": "We confirm $N$ genuinely lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Farthest point on the circle",
          "workingLatex": "F=C-r\\,\\hat{u}=(1,2)-5\\left(\\tfrac{3}{5},\\tfrac{4}{5}\\right)=(-2,-2)",
          "explanation": "Stepping in the opposite direction reaches the diametrically opposite point, which is farthest from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify F is on the circle",
          "workingLatex": "(-2-1)^2+(-2-2)^2=9+16=25\\;\\checkmark",
          "explanation": "We confirm $F$ is also on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Nearest distance",
          "workingLatex": "PN=|CP|-r=15-5=10",
          "explanation": "Because $N$ lies between the centre and $P$, the shortest distance is simply the centre distance minus the radius.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Farthest distance",
          "workingLatex": "PF=|CP|+r=15+5=20",
          "explanation": "The farthest point sits beyond the centre from $P$, so its distance is the centre distance plus the radius.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify nearest distance directly",
          "workingLatex": "PN=\\sqrt{(10-4)^2+(14-6)^2}=\\sqrt{36+64}=\\sqrt{100}=10\\;\\checkmark",
          "explanation": "Computing the distance from $P$ to $N$ directly confirms the $10$ we obtained.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify farthest distance directly",
          "workingLatex": "PF=\\sqrt{(10-(-2))^2+(14-(-2))^2}=\\sqrt{144+256}=\\sqrt{400}=20\\;\\checkmark",
          "explanation": "The direct distance to $F$ confirms the $20$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answers",
          "workingLatex": "\\text{Nearest }(4,6),\\;PN=10;\\quad\\text{Farthest }(-2,-2),\\;PF=20",
          "explanation": "We have the two extreme points on the circle and their distances from $P$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Nearest point $(4,6)$ at distance $10$; farthest point $(-2,-2)$ at distance $20$."
    }
  },
  {
    "id": "al.y1.pure.circles.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Circles",
    "subtopicId": "al.y1.pure.circles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "circles",
      "general-form",
      "tangent",
      "triangle-area"
    ],
    "questionText": "A circle has equation $x^2+y^2-4x-2y-20=0$. By completing the square, find its centre and radius. The point $P(6,4)$ lies on the circle; find the tangent to the circle at $P$, the points where this tangent crosses the coordinate axes, and hence the area of the triangle enclosed by the tangent and the two axes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the general form",
          "workingLatex": "x^2+y^2-4x-2y-20=0",
          "explanation": "The circle is given in general form; completing the square will reveal its centre and radius.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group x and y terms",
          "workingLatex": "(x^2-4x)+(y^2-2y)=20",
          "explanation": "We collect the $x$ terms and $y$ terms separately, ready to form perfect squares.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete both squares",
          "workingLatex": "(x-2)^2-4+(y-1)^2-1=20",
          "explanation": "Each quadratic pair becomes a perfect square, generating constants we must account for.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off centre and radius",
          "workingLatex": "(x-2)^2+(y-1)^2=25\\;\\Rightarrow\\;C=(2,1),\\;r=5",
          "explanation": "Balancing the constants gives standard form, so the centre is $(2,1)$ and the radius is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm P lies on the circle",
          "workingLatex": "(6-2)^2+(4-1)^2=16+9=25\\;\\checkmark",
          "explanation": "We check $P(6,4)$ is on the circle before finding the tangent there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Gradient of the radius CP",
          "workingLatex": "m_{CP}=\\frac{4-1}{6-2}=\\frac{3}{4}",
          "explanation": "The tangent is perpendicular to this radius, so we find the radius gradient first.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Gradient of the tangent",
          "workingLatex": "m_t=-\\frac{1}{m_{CP}}=-\\frac{4}{3}",
          "explanation": "The tangent gradient is the negative reciprocal of the radius gradient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Point-gradient form of the tangent",
          "workingLatex": "y-4=-\\frac{4}{3}(x-6)",
          "explanation": "Using $P$ and the tangent gradient gives the equation of the tangent line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the tangent",
          "workingLatex": "3(y-4)=-4(x-6)\\;\\Rightarrow\\;3y-12=-4x+24\\;\\Rightarrow\\;4x+3y=36",
          "explanation": "Clearing the fraction and rearranging gives a tidy implicit equation for the tangent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the x-axis intercept",
          "workingLatex": "y=0:\\;4x=36\\;\\Rightarrow\\;x=9\\;\\Rightarrow\\;(9,0)",
          "explanation": "Setting $y=0$ finds where the tangent crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the y-axis intercept",
          "workingLatex": "x=0:\\;3y=36\\;\\Rightarrow\\;y=12\\;\\Rightarrow\\;(0,12)",
          "explanation": "Setting $x=0$ finds where the tangent crosses the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the triangle",
          "workingLatex": "\\text{Legs along axes: }9\\text{ and }12",
          "explanation": "The tangent and the two axes bound a right-angled triangle with the right angle at the origin, its legs equal to the two intercepts.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the area",
          "workingLatex": "\\text{Area}=\\tfrac{1}{2}\\times 9\\times 12=54",
          "explanation": "For a right-angled triangle the area is half the product of the two perpendicular legs.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify perpendicularity of tangent and radius",
          "workingLatex": "m_{CP}\\times m_t=\\frac{3}{4}\\times\\left(-\\frac{4}{3}\\right)=-1\\;\\checkmark",
          "explanation": "The gradients multiply to $-1$, confirming the tangent is perpendicular to the radius at $P$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify tangency via distance",
          "workingLatex": "d=\\frac{|4(2)+3(1)-36|}{\\sqrt{4^2+3^2}}=\\frac{|-25|}{5}=5=r\\;\\checkmark",
          "explanation": "The perpendicular distance from the centre to the line equals the radius, confirming a genuine tangent.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the final answer",
          "workingLatex": "\\text{Tangent }4x+3y=36,\\;\\text{Area}=54",
          "explanation": "The circle has centre $(2,1)$ and radius $5$; the tangent at $P$ is $4x+3y=36$, meeting the axes at $(9,0)$ and $(0,12)$, enclosing a triangle of area $54$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Centre $(2,1)$, radius $5$; tangent $4x+3y=36$ meets the axes at $(9,0)$ and $(0,12)$; enclosed triangle area $=54$."
    }
  }
];
