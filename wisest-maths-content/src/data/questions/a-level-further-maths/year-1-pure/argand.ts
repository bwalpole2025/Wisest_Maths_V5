import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q001",
    "tags": [
      "3-4-5",
      "modulus"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z = 3+4i$. Find $|z|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the modulus formula",
          "workingLatex": "|z| = \\sqrt{a^{2} + b^{2}}",
          "explanation": "On an Argand diagram, $|z|$ is the distance from the origin to the point $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify coordinates",
          "workingLatex": "z = 3+4i \\Rightarrow a = 3,\\; b = 4",
          "explanation": "Read the real part as the horizontal coordinate and the imaginary part as the vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each part",
          "workingLatex": "a^{2} = 9,\\quad b^{2} = 16",
          "explanation": "Square the real and imaginary components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add under the root",
          "workingLatex": "a^{2} + b^{2} = 25",
          "explanation": "The sum gives the squared distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "|z| = 5",
          "explanation": "The modulus is the non-negative square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric meaning",
          "workingLatex": "|z| = 5 \\text{ units from the origin}",
          "explanation": "This length is the radius if $z$ lies on a circle centred at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z| = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q002",
    "tags": [
      "5-12-13",
      "modulus"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z = 5+12i$. Find $|z|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the modulus formula",
          "workingLatex": "|z| = \\sqrt{a^{2} + b^{2}}",
          "explanation": "On an Argand diagram, $|z|$ is the distance from the origin to the point $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify coordinates",
          "workingLatex": "z = 5+12i \\Rightarrow a = 5,\\; b = 12",
          "explanation": "Read the real part as the horizontal coordinate and the imaginary part as the vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each part",
          "workingLatex": "a^{2} = 25,\\quad b^{2} = 144",
          "explanation": "Square the real and imaginary components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add under the root",
          "workingLatex": "a^{2} + b^{2} = 169",
          "explanation": "The sum gives the squared distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "|z| = 13",
          "explanation": "The modulus is the non-negative square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric meaning",
          "workingLatex": "|z| = 13 \\text{ units from the origin}",
          "explanation": "This length is the radius if $z$ lies on a circle centred at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z| = 13$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q003",
    "tags": [
      "sqrt2",
      "modulus"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z = 1+1i$. Find $|z|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the modulus formula",
          "workingLatex": "|z| = \\sqrt{a^{2} + b^{2}}",
          "explanation": "On an Argand diagram, $|z|$ is the distance from the origin to the point $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify coordinates",
          "workingLatex": "z = 1+1i \\Rightarrow a = 1,\\; b = 1",
          "explanation": "Read the real part as the horizontal coordinate and the imaginary part as the vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each part",
          "workingLatex": "a^{2} = 1,\\quad b^{2} = 1",
          "explanation": "Square the real and imaginary components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add under the root",
          "workingLatex": "a^{2} + b^{2} = 2",
          "explanation": "The sum gives the squared distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "|z| = \\sqrt{2}",
          "explanation": "The modulus is the non-negative square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric meaning",
          "workingLatex": "|z| = \\sqrt{2} \\text{ units from the origin}",
          "explanation": "This length is the radius if $z$ lies on a circle centred at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z| = \\sqrt{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q004",
    "tags": [
      "negative-real",
      "modulus"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z = -3+4i$. Find $|z|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the modulus formula",
          "workingLatex": "|z| = \\sqrt{a^{2} + b^{2}}",
          "explanation": "On an Argand diagram, $|z|$ is the distance from the origin to the point $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify coordinates",
          "workingLatex": "z = -3+4i \\Rightarrow a = -3,\\; b = 4",
          "explanation": "Read the real part as the horizontal coordinate and the imaginary part as the vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each part",
          "workingLatex": "a^{2} = 9,\\quad b^{2} = 16",
          "explanation": "Square the real and imaginary components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add under the root",
          "workingLatex": "a^{2} + b^{2} = 25",
          "explanation": "The sum gives the squared distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "|z| = 5",
          "explanation": "The modulus is the non-negative square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric meaning",
          "workingLatex": "|z| = 5 \\text{ units from the origin}",
          "explanation": "This length is the radius if $z$ lies on a circle centred at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z| = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q005",
    "tags": [
      "6-8-10",
      "modulus"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z = 6+8i$. Find $|z|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the modulus formula",
          "workingLatex": "|z| = \\sqrt{a^{2} + b^{2}}",
          "explanation": "On an Argand diagram, $|z|$ is the distance from the origin to the point $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify coordinates",
          "workingLatex": "z = 6+8i \\Rightarrow a = 6,\\; b = 8",
          "explanation": "Read the real part as the horizontal coordinate and the imaginary part as the vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each part",
          "workingLatex": "a^{2} = 36,\\quad b^{2} = 64",
          "explanation": "Square the real and imaginary components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add under the root",
          "workingLatex": "a^{2} + b^{2} = 100",
          "explanation": "The sum gives the squared distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "|z| = 10",
          "explanation": "The modulus is the non-negative square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric meaning",
          "workingLatex": "|z| = 10 \\text{ units from the origin}",
          "explanation": "This length is the radius if $z$ lies on a circle centred at the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z| = 10$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q006",
    "tags": [
      "pure-imaginary",
      "modulus"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z = 5i$. Find $|z|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the modulus formula",
          "workingLatex": "|z| = \\sqrt{a^{2} + b^{2}}",
          "explanation": "On an Argand diagram, $|z|$ is the distance from the origin to the point $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify coordinates",
          "workingLatex": "z = 5i \\Rightarrow a = 0,\\; b = 5",
          "explanation": "Read the real part as the horizontal coordinate and the imaginary part as the vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each part",
          "workingLatex": "a^{2} = 0,\\quad b^{2} = 25",
          "explanation": "Square the real and imaginary components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add under the root",
          "workingLatex": "a^{2} + b^{2} = 25",
          "explanation": "The sum gives the squared distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "|z| = 5",
          "explanation": "The modulus is the non-negative square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric meaning",
          "workingLatex": "|z| = 5 \\text{ units from the origin}",
          "explanation": "This length is the radius if $z$ lies on a circle centred at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z| = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q007",
    "tags": [
      "pure-real",
      "modulus"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z = 7$. Find $|z|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the modulus formula",
          "workingLatex": "|z| = \\sqrt{a^{2} + b^{2}}",
          "explanation": "On an Argand diagram, $|z|$ is the distance from the origin to the point $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify coordinates",
          "workingLatex": "z = 7 \\Rightarrow a = 7,\\; b = 0",
          "explanation": "Read the real part as the horizontal coordinate and the imaginary part as the vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each part",
          "workingLatex": "a^{2} = 49,\\quad b^{2} = 0",
          "explanation": "Square the real and imaginary components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add under the root",
          "workingLatex": "a^{2} + b^{2} = 49",
          "explanation": "The sum gives the squared distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "|z| = 7",
          "explanation": "The modulus is the non-negative square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric meaning",
          "workingLatex": "|z| = 7 \\text{ units from the origin}",
          "explanation": "This length is the radius if $z$ lies on a circle centred at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z| = 7$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q008",
    "tags": [
      "both-negative",
      "modulus"
    ],
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z = -5-12i$. Find $|z|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the modulus formula",
          "workingLatex": "|z| = \\sqrt{a^{2} + b^{2}}",
          "explanation": "On an Argand diagram, $|z|$ is the distance from the origin to the point $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify coordinates",
          "workingLatex": "z = -5-12i \\Rightarrow a = -5,\\; b = -12",
          "explanation": "Read the real part as the horizontal coordinate and the imaginary part as the vertical coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each part",
          "workingLatex": "a^{2} = 25,\\quad b^{2} = 144",
          "explanation": "Square the real and imaginary components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add under the root",
          "workingLatex": "a^{2} + b^{2} = 169",
          "explanation": "The sum gives the squared distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root",
          "workingLatex": "|z| = 13",
          "explanation": "The modulus is the non-negative square root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric meaning",
          "workingLatex": "|z| = 13 \\text{ units from the origin}",
          "explanation": "This length is the radius if $z$ lies on a circle centred at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z| = 13$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q009",
    "tags": [
      "positive-real",
      "argument"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = 1$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = 1 \\text{ lies in quadrant }1",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{0}{1}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = 0",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = 0 \\text{ is in quadrant }1",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = 0",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q010",
    "tags": [
      "positive-imaginary",
      "argument"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = 1i$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = 1i \\text{ lies in quadrant }4",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{1}{0}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = \\frac{\\pi}{2}",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = \\frac{\\pi}{2} \\text{ is in quadrant }4",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = \\frac{\\pi}{2}",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = \\frac{\\pi}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q011",
    "tags": [
      "negative-real",
      "argument"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = -1$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = -1 \\text{ lies in quadrant }2",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{0}{-1}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = \\pi",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = \\pi \\text{ is in quadrant }2",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = \\pi",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = \\pi$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q012",
    "tags": [
      "negative-imaginary",
      "argument"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = -1i$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = -1i \\text{ lies in quadrant }4",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{-1}{0}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = -\\frac{\\pi}{2}",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = -\\frac{\\pi}{2} \\text{ is in quadrant }4",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = -\\frac{\\pi}{2}",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = -\\frac{\\pi}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q013",
    "tags": [
      "pi/4",
      "argument"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = 1+1i$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = 1+1i \\text{ lies in quadrant }1",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{1}{1}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = \\frac{\\pi}{4}",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = \\frac{\\pi}{4} \\text{ is in quadrant }1",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = \\frac{\\pi}{4}",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = \\frac{\\pi}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q014",
    "tags": [
      "-pi/4",
      "argument"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = 1-1i$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = 1-1i \\text{ lies in quadrant }4",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{-1}{1}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = -\\frac{\\pi}{4}",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = -\\frac{\\pi}{4} \\text{ is in quadrant }4",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = -\\frac{\\pi}{4}",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = -\\frac{\\pi}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q015",
    "tags": [
      "3pi/4",
      "argument"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = -1+1i$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = -1+1i \\text{ lies in quadrant }2",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{1}{-1}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = \\frac{3\\pi}{4}",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = \\frac{3\\pi}{4} \\text{ is in quadrant }2",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = \\frac{3\\pi}{4}",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = \\frac{3\\pi}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q016",
    "tags": [
      "-3pi/4",
      "argument"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = -1-1i$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = -1-1i \\text{ lies in quadrant }3",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{-1}{-1}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = -\\frac{3\\pi}{4}",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = -\\frac{3\\pi}{4} \\text{ is in quadrant }3",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = -\\frac{3\\pi}{4}",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = -\\frac{3\\pi}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q017",
    "tags": [
      "pi/3",
      "argument"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = 1+1.7320508075688772i$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = 1+1.7320508075688772i \\text{ lies in quadrant }1",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{1.7320508075688772}{1}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = \\frac{\\pi}{3}",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = \\frac{\\pi}{3} \\text{ is in quadrant }1",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = \\frac{\\pi}{3}",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = \\frac{\\pi}{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q018",
    "tags": [
      "quadrant-2",
      "argument"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the principal argument of $z = -3+4i$, giving your answer in radians.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "The principal argument is measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Plot mentally",
          "workingLatex": "z = -3+4i \\text{ lies in quadrant }2",
          "explanation": "The signs of $a$ and $b$ tell you which quadrant the point is in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use $\\tan\\theta = b/a$",
          "workingLatex": "\\tan\\theta = \\frac{4}{-3}",
          "explanation": "The argument satisfies $\\tan\\theta = \\dfrac{b}{a}$, adjusted for the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find reference angle",
          "workingLatex": "\\theta = \\pi - \\tan^{-1}\\!\\left(\\frac{4}{3}\\right)",
          "explanation": "Choose the angle in $(-\\pi,\\pi]$ that matches the quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify quadrant",
          "workingLatex": "\\arg(z) = \\pi - \\tan^{-1}\\!\\left(\\frac{4}{3}\\right) \\text{ is in quadrant }2",
          "explanation": "Confirm the sign of both $\\cos\\theta$ and $\\sin\\theta$ matches $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\arg(z) = \\pi - \\tan^{-1}\\!\\left(\\frac{4}{3}\\right)",
          "explanation": "State the principal argument in radians.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\arg(z) = \\pi - \\tan^{-1}\\!\\left(\\frac{4}{3}\\right)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q019",
    "tags": [
      "pure-real",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 2$ in the form $r(\\cos\\theta + i\\sin\\theta)$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $z = a + bi$",
          "workingLatex": "z = 2",
          "explanation": "Start from rectangular (Cartesian) form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{2^{2} + 0^{2}} = 2",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find argument",
          "workingLatex": "\\theta = \\arg(z) = 0",
          "explanation": "Determine the principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write mod–arg form",
          "workingLatex": "z = 2\\bigl(\\cos 0 + i\\sin 0\\bigr)",
          "explanation": "Substitute $r$ and $\\theta$ into $z = r(\\cos\\theta + i\\sin\\theta)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponential form",
          "workingLatex": "z = 2e^{i0}",
          "explanation": "Equivalently, $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "r\\cos\\theta \\approx 2,\\; r\\sin\\theta \\approx 0",
          "explanation": "The real and imaginary parts should recover $a$ and $b$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2\\bigl(\\cos 0 + i\\sin 0\\bigr)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q020",
    "tags": [
      "pure-imaginary",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 3i$ in the form $r(\\cos\\theta + i\\sin\\theta)$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $z = a + bi$",
          "workingLatex": "z = 3i",
          "explanation": "Start from rectangular (Cartesian) form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{0^{2} + 3^{2}} = 3",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find argument",
          "workingLatex": "\\theta = \\arg(z) = \\frac{\\pi}{2}",
          "explanation": "Determine the principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write mod–arg form",
          "workingLatex": "z = 3\\bigl(\\cos \\frac{\\pi}{2} + i\\sin \\frac{\\pi}{2}\\bigr)",
          "explanation": "Substitute $r$ and $\\theta$ into $z = r(\\cos\\theta + i\\sin\\theta)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponential form",
          "workingLatex": "z = 3e^{i\\frac{\\pi}{2}}",
          "explanation": "Equivalently, $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "r\\cos\\theta \\approx 0,\\; r\\sin\\theta \\approx 3",
          "explanation": "The real and imaginary parts should recover $a$ and $b$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 3\\bigl(\\cos \\frac{\\pi}{2} + i\\sin \\frac{\\pi}{2}\\bigr)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q021",
    "tags": [
      "3-4-5",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 3+4i$ in the form $r(\\cos\\theta + i\\sin\\theta)$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $z = a + bi$",
          "workingLatex": "z = 3+4i",
          "explanation": "Start from rectangular (Cartesian) form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{3^{2} + 4^{2}} = 5",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find argument",
          "workingLatex": "\\theta = \\arg(z) = \\tan^{-1}\\!\\left(\\frac{4}{3}\\right)",
          "explanation": "Determine the principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write mod–arg form",
          "workingLatex": "z = 5\\bigl(\\cos \\tan^{-1}\\!\\left(\\frac{4}{3}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{4}{3}\\right)\\bigr)",
          "explanation": "Substitute $r$ and $\\theta$ into $z = r(\\cos\\theta + i\\sin\\theta)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponential form",
          "workingLatex": "z = 5e^{i\\tan^{-1}\\!\\left(\\frac{4}{3}\\right)}",
          "explanation": "Equivalently, $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "r\\cos\\theta \\approx 3,\\; r\\sin\\theta \\approx 4",
          "explanation": "The real and imaginary parts should recover $a$ and $b$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 5\\bigl(\\cos \\tan^{-1}\\!\\left(\\frac{4}{3}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{4}{3}\\right)\\bigr)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q022",
    "tags": [
      "negative-real",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = -4$ in the form $r(\\cos\\theta + i\\sin\\theta)$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $z = a + bi$",
          "workingLatex": "z = -4",
          "explanation": "Start from rectangular (Cartesian) form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{-4^{2} + 0^{2}} = 4",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find argument",
          "workingLatex": "\\theta = \\arg(z) = \\pi",
          "explanation": "Determine the principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write mod–arg form",
          "workingLatex": "z = 4\\bigl(\\cos \\pi + i\\sin \\pi\\bigr)",
          "explanation": "Substitute $r$ and $\\theta$ into $z = r(\\cos\\theta + i\\sin\\theta)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponential form",
          "workingLatex": "z = 4e^{i\\pi}",
          "explanation": "Equivalently, $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "r\\cos\\theta \\approx -4,\\; r\\sin\\theta \\approx 0",
          "explanation": "The real and imaginary parts should recover $a$ and $b$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 4\\bigl(\\cos \\pi + i\\sin \\pi\\bigr)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q023",
    "tags": [
      "pi/4",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 5+5i$ in the form $r(\\cos\\theta + i\\sin\\theta)$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $z = a + bi$",
          "workingLatex": "z = 5+5i",
          "explanation": "Start from rectangular (Cartesian) form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{5^{2} + 5^{2}} = \\sqrt{50}",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find argument",
          "workingLatex": "\\theta = \\arg(z) = \\tan^{-1}\\!\\left(\\frac{5}{5}\\right)",
          "explanation": "Determine the principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write mod–arg form",
          "workingLatex": "z = \\sqrt{50}\\bigl(\\cos \\tan^{-1}\\!\\left(\\frac{5}{5}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{5}{5}\\right)\\bigr)",
          "explanation": "Substitute $r$ and $\\theta$ into $z = r(\\cos\\theta + i\\sin\\theta)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{50}e^{i\\tan^{-1}\\!\\left(\\frac{5}{5}\\right)}",
          "explanation": "Equivalently, $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "r\\cos\\theta \\approx 5,\\; r\\sin\\theta \\approx 5",
          "explanation": "The real and imaginary parts should recover $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{50}\\bigl(\\cos \\tan^{-1}\\!\\left(\\frac{5}{5}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{5}{5}\\right)\\bigr)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q024",
    "tags": [
      "3pi/4",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = -2+2i$ in the form $r(\\cos\\theta + i\\sin\\theta)$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $z = a + bi$",
          "workingLatex": "z = -2+2i",
          "explanation": "Start from rectangular (Cartesian) form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{-2^{2} + 2^{2}} = \\sqrt{8}",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find argument",
          "workingLatex": "\\theta = \\arg(z) = \\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)",
          "explanation": "Determine the principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write mod–arg form",
          "workingLatex": "z = \\sqrt{8}\\bigl(\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right) + i\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)\\bigr)",
          "explanation": "Substitute $r$ and $\\theta$ into $z = r(\\cos\\theta + i\\sin\\theta)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{8}e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)}",
          "explanation": "Equivalently, $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "r\\cos\\theta \\approx -2,\\; r\\sin\\theta \\approx 2",
          "explanation": "The real and imaginary parts should recover $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{8}\\bigl(\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right) + i\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)\\bigr)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q025",
    "tags": [
      "pi/4",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 6+6i$ in the form $r(\\cos\\theta + i\\sin\\theta)$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $z = a + bi$",
          "workingLatex": "z = 6+6i",
          "explanation": "Start from rectangular (Cartesian) form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{6^{2} + 6^{2}} = \\sqrt{72}",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find argument",
          "workingLatex": "\\theta = \\arg(z) = \\tan^{-1}\\!\\left(\\frac{6}{6}\\right)",
          "explanation": "Determine the principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write mod–arg form",
          "workingLatex": "z = \\sqrt{72}\\bigl(\\cos \\tan^{-1}\\!\\left(\\frac{6}{6}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{6}{6}\\right)\\bigr)",
          "explanation": "Substitute $r$ and $\\theta$ into $z = r(\\cos\\theta + i\\sin\\theta)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{72}e^{i\\tan^{-1}\\!\\left(\\frac{6}{6}\\right)}",
          "explanation": "Equivalently, $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "r\\cos\\theta \\approx 6,\\; r\\sin\\theta \\approx 6",
          "explanation": "The real and imaginary parts should recover $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{72}\\bigl(\\cos \\tan^{-1}\\!\\left(\\frac{6}{6}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{6}{6}\\right)\\bigr)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q026",
    "tags": [
      "quadrant-2",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = -5+12i$ in the form $r(\\cos\\theta + i\\sin\\theta)$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $z = a + bi$",
          "workingLatex": "z = -5+12i",
          "explanation": "Start from rectangular (Cartesian) form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{-5^{2} + 12^{2}} = 13",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find argument",
          "workingLatex": "\\theta = \\arg(z) = \\pi - \\tan^{-1}\\!\\left(\\frac{12}{5}\\right)",
          "explanation": "Determine the principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write mod–arg form",
          "workingLatex": "z = 13\\bigl(\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{12}{5}\\right) + i\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{12}{5}\\right)\\bigr)",
          "explanation": "Substitute $r$ and $\\theta$ into $z = r(\\cos\\theta + i\\sin\\theta)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exponential form",
          "workingLatex": "z = 13e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{12}{5}\\right)}",
          "explanation": "Equivalently, $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check",
          "workingLatex": "r\\cos\\theta \\approx -5,\\; r\\sin\\theta \\approx 12",
          "explanation": "The real and imaginary parts should recover $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 13\\bigl(\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{12}{5}\\right) + i\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{12}{5}\\right)\\bigr)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q027",
    "tags": [
      "pi/3",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 2\\bigl(\\cos \\frac{\\pi}{3} + i\\sin \\frac{\\pi}{3}\\bigr)$, write $z$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write mod–arg form",
          "workingLatex": "z = 2\\bigl(\\cos \\frac{\\pi}{3} + i\\sin \\frac{\\pi}{3}\\bigr)",
          "explanation": "Expand using $a + bi = r\\cos\\theta + ri\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $\\cos\\theta$",
          "workingLatex": "\\cos \\frac{\\pi}{3} = 1/2",
          "explanation": "Substitute the cosine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\sin\\theta$",
          "workingLatex": "\\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}",
          "explanation": "Substitute the sine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Real part",
          "workingLatex": "a = r\\cos\\theta = 2 \\times 1/2 = 1",
          "explanation": "Multiply the modulus by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "b = r\\sin\\theta = 2 \\times \\frac{\\sqrt{3}}{2} = 1.7320508075688772",
          "explanation": "Multiply the modulus by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rectangular form",
          "workingLatex": "z = 1+1.7320508075688772i",
          "explanation": "Combine into $a + bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1+1.7320508075688772i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q028",
    "tags": [
      "pi/4",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 5\\bigl(\\cos \\frac{\\pi}{4} + i\\sin \\frac{\\pi}{4}\\bigr)$, write $z$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write mod–arg form",
          "workingLatex": "z = 5\\bigl(\\cos \\frac{\\pi}{4} + i\\sin \\frac{\\pi}{4}\\bigr)",
          "explanation": "Expand using $a + bi = r\\cos\\theta + ri\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $\\cos\\theta$",
          "workingLatex": "\\cos \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}",
          "explanation": "Substitute the cosine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\sin\\theta$",
          "workingLatex": "\\sin \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}",
          "explanation": "Substitute the sine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Real part",
          "workingLatex": "a = r\\cos\\theta = 5 \\times \\frac{\\sqrt{2}}{2} = 5",
          "explanation": "Multiply the modulus by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "b = r\\sin\\theta = 5 \\times \\frac{\\sqrt{2}}{2} = 5",
          "explanation": "Multiply the modulus by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rectangular form",
          "workingLatex": "z = 5+5i",
          "explanation": "Combine into $a + bi$ form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 5+5i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q029",
    "tags": [
      "pi/6",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 4\\bigl(\\cos \\frac{\\pi}{6} + i\\sin \\frac{\\pi}{6}\\bigr)$, write $z$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write mod–arg form",
          "workingLatex": "z = 4\\bigl(\\cos \\frac{\\pi}{6} + i\\sin \\frac{\\pi}{6}\\bigr)",
          "explanation": "Expand using $a + bi = r\\cos\\theta + ri\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $\\cos\\theta$",
          "workingLatex": "\\cos \\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}",
          "explanation": "Substitute the cosine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\sin\\theta$",
          "workingLatex": "\\sin \\frac{\\pi}{6} = 1/2",
          "explanation": "Substitute the sine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Real part",
          "workingLatex": "a = r\\cos\\theta = 4 \\times \\frac{\\sqrt{3}}{2} = 3.4641016151377544",
          "explanation": "Multiply the modulus by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "b = r\\sin\\theta = 4 \\times 1/2 = 2",
          "explanation": "Multiply the modulus by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rectangular form",
          "workingLatex": "z = 3.4641016151377544+2i",
          "explanation": "Combine into $a + bi$ form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 3.4641016151377544+2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q030",
    "tags": [
      "pi/2",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 3\\bigl(\\cos \\frac{\\pi}{2} + i\\sin \\frac{\\pi}{2}\\bigr)$, write $z$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write mod–arg form",
          "workingLatex": "z = 3\\bigl(\\cos \\frac{\\pi}{2} + i\\sin \\frac{\\pi}{2}\\bigr)",
          "explanation": "Expand using $a + bi = r\\cos\\theta + ri\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $\\cos\\theta$",
          "workingLatex": "\\cos \\frac{\\pi}{2} = 0",
          "explanation": "Substitute the cosine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\sin\\theta$",
          "workingLatex": "\\sin \\frac{\\pi}{2} = 1",
          "explanation": "Substitute the sine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Real part",
          "workingLatex": "a = r\\cos\\theta = 3 \\times 0 = 0",
          "explanation": "Multiply the modulus by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "b = r\\sin\\theta = 3 \\times 1 = 3",
          "explanation": "Multiply the modulus by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rectangular form",
          "workingLatex": "z = 3i",
          "explanation": "Combine into $a + bi$ form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 3i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q031",
    "tags": [
      "pi",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 6\\bigl(\\cos \\pi + i\\sin \\pi\\bigr)$, write $z$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write mod–arg form",
          "workingLatex": "z = 6\\bigl(\\cos \\pi + i\\sin \\pi\\bigr)",
          "explanation": "Expand using $a + bi = r\\cos\\theta + ri\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $\\cos\\theta$",
          "workingLatex": "\\cos \\pi = -1",
          "explanation": "Substitute the cosine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\sin\\theta$",
          "workingLatex": "\\sin \\pi = 0",
          "explanation": "Substitute the sine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Real part",
          "workingLatex": "a = r\\cos\\theta = 6 \\times -1 = -6",
          "explanation": "Multiply the modulus by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "b = r\\sin\\theta = 6 \\times 0 = 0",
          "explanation": "Multiply the modulus by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rectangular form",
          "workingLatex": "z = -6",
          "explanation": "Combine into $a + bi$ form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q032",
    "tags": [
      "-pi/3",
      "mod-arg-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Given $z = 2\\bigl(\\cos -\\frac{\\pi}{3} + i\\sin -\\frac{\\pi}{3}\\bigr)$, write $z$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write mod–arg form",
          "workingLatex": "z = 2\\bigl(\\cos -\\frac{\\pi}{3} + i\\sin -\\frac{\\pi}{3}\\bigr)",
          "explanation": "Expand using $a + bi = r\\cos\\theta + ri\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate $\\cos\\theta$",
          "workingLatex": "\\cos -\\frac{\\pi}{3} = 1/2",
          "explanation": "Substitute the cosine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\sin\\theta$",
          "workingLatex": "\\sin -\\frac{\\pi}{3} = -\\frac{\\sqrt{3}}{2}",
          "explanation": "Substitute the sine of the given angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Real part",
          "workingLatex": "a = r\\cos\\theta = 2 \\times 1/2 = 1",
          "explanation": "Multiply the modulus by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Imaginary part",
          "workingLatex": "b = r\\sin\\theta = 2 \\times -\\frac{\\sqrt{3}}{2} = -1.7320508075688772",
          "explanation": "Multiply the modulus by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rectangular form",
          "workingLatex": "z = 1-1.7320508075688772i",
          "explanation": "Combine into $a + bi$ form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 1-1.7320508075688772i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q033",
    "tags": [
      "exp",
      "exponential-form",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 3e^{i\\frac{\\pi}{4}}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Exponential form is equivalent to mod–arg form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 3e^{i\\frac{\\pi}{4}} = 3\\bigl(\\cos \\frac{\\pi}{4} + i\\sin \\frac{\\pi}{4}\\bigr)",
          "explanation": "Rewrite using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand real part",
          "workingLatex": "\\text{Re}(z) = 3\\cos \\frac{\\pi}{4} = 2.1213203435596424",
          "explanation": "Multiply $r$ by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand imaginary part",
          "workingLatex": "\\text{Im}(z) = 3\\sin \\frac{\\pi}{4} = 2.1213203435596424",
          "explanation": "Multiply $r$ by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "z = 2.1213203435596424+2.1213203435596424i",
          "explanation": "Write as $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Plot",
          "workingLatex": "\\text{Point } (2.1213203435596424,2.1213203435596424) \\text{ on Argand diagram}",
          "explanation": "The point lies at distance $3$ from the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2.1213203435596424+2.1213203435596424i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q034",
    "tags": [
      "exp",
      "exponential-form",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 2e^{i\\frac{\\pi}{2}}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Exponential form is equivalent to mod–arg form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{2}} = 2\\bigl(\\cos \\frac{\\pi}{2} + i\\sin \\frac{\\pi}{2}\\bigr)",
          "explanation": "Rewrite using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand real part",
          "workingLatex": "\\text{Re}(z) = 2\\cos \\frac{\\pi}{2} = 0",
          "explanation": "Multiply $r$ by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand imaginary part",
          "workingLatex": "\\text{Im}(z) = 2\\sin \\frac{\\pi}{2} = 2",
          "explanation": "Multiply $r$ by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "z = 2i",
          "explanation": "Write as $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Plot",
          "workingLatex": "\\text{Point } (0,2) \\text{ on Argand diagram}",
          "explanation": "The point lies at distance $2$ from the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q037",
    "tags": [
      "exp",
      "exponential-form",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = 1+1.7320508075688772i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{3.9999999999999996}",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find argument",
          "workingLatex": "\\theta = \\frac{\\pi}{3}",
          "explanation": "Principal argument in radians.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mod–arg form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}\\bigl(\\cos \\frac{\\pi}{3} + i\\sin \\frac{\\pi}{3}\\bigr)",
          "explanation": "Standard polar form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Euler's formula",
          "workingLatex": "z = \\sqrt{3.9999999999999996}e^{i\\frac{\\pi}{3}}",
          "explanation": "Replace $\\cos\\theta + i\\sin\\theta$ with $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\sqrt{3.9999999999999996}e^{i\\frac{\\pi}{3}} = 1+1.7320508075688772i",
          "explanation": "Check by expanding back to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z = \\sqrt{3.9999999999999996}e^{i\\frac{\\pi}{3}}",
          "explanation": "Exponential form with $r > 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{3.9999999999999996}e^{i\\frac{\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q035",
    "tags": [
      "exp",
      "exponential-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 5e^{i\\pi}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Exponential form is equivalent to mod–arg form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 5e^{i\\pi} = 5\\bigl(\\cos \\pi + i\\sin \\pi\\bigr)",
          "explanation": "Rewrite using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand real part",
          "workingLatex": "\\text{Re}(z) = 5\\cos \\pi = -5",
          "explanation": "Multiply $r$ by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand imaginary part",
          "workingLatex": "\\text{Im}(z) = 5\\sin \\pi = 0",
          "explanation": "Multiply $r$ by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "z = -5",
          "explanation": "Write as $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Plot",
          "workingLatex": "\\text{Point } (-5,0) \\text{ on Argand diagram}",
          "explanation": "The point lies at distance $5$ from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = -5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q036",
    "tags": [
      "exp",
      "exponential-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Express $z = 4e^{i-\\frac{\\pi}{6}}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Exponential form is equivalent to mod–arg form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "z = 4e^{i-\\frac{\\pi}{6}} = 4\\bigl(\\cos -\\frac{\\pi}{6} + i\\sin -\\frac{\\pi}{6}\\bigr)",
          "explanation": "Rewrite using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand real part",
          "workingLatex": "\\text{Re}(z) = 4\\cos -\\frac{\\pi}{6} = 3.4641016151377544",
          "explanation": "Multiply $r$ by $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand imaginary part",
          "workingLatex": "\\text{Im}(z) = 4\\sin -\\frac{\\pi}{6} = -2",
          "explanation": "Multiply $r$ by $\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine",
          "workingLatex": "z = 3.4641016151377544-2i",
          "explanation": "Write as $a + bi$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Plot",
          "workingLatex": "\\text{Point } (3.4641016151377544,-2) \\text{ on Argand diagram}",
          "explanation": "The point lies at distance $4$ from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 3.4641016151377544-2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q038",
    "tags": [
      "exp",
      "exponential-form",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write $z = -2+2i$ in the form $re^{i\\theta}$, where $r > 0$ and $-\\pi < \\theta \\leq \\pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find modulus",
          "workingLatex": "r = |z| = \\sqrt{8}",
          "explanation": "Compute the distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find argument",
          "workingLatex": "\\theta = \\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)",
          "explanation": "Principal argument in radians.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Mod–arg form",
          "workingLatex": "z = \\sqrt{8}\\bigl(\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right) + i\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)\\bigr)",
          "explanation": "Standard polar form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Euler's formula",
          "workingLatex": "z = \\sqrt{8}e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)}",
          "explanation": "Replace $\\cos\\theta + i\\sin\\theta$ with $e^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify",
          "workingLatex": "\\sqrt{8}e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)} = -2+2i",
          "explanation": "Check by expanding back to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z = \\sqrt{8}e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)}",
          "explanation": "Exponential form with $r > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{8}e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{2}{2}\\right)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q039",
    "tags": [
      "plotting",
      "representation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe how to represent $z = 4+3i$ on an Argand diagram. State the coordinates of the point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Argand diagram axes",
          "workingLatex": "\\text{Re}(z) \\text{ horizontal, Im}(z) \\text{ vertical}",
          "explanation": "The real axis is horizontal and the imaginary axis is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read coordinates",
          "workingLatex": "z = 4+3i \\Rightarrow (4, 3)",
          "explanation": "Treat $a$ as the $x$-coordinate and $b$ as the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Plot the point",
          "workingLatex": "\\text{Mark } (4,3)",
          "explanation": "Move $4$ along the real axis and $3$ parallel to the imaginary axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction from origin",
          "workingLatex": "\\text{Vector } \\overrightarrow{OZ} = (4,3)",
          "explanation": "Draw a line segment from $O$ to the point $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus as length",
          "workingLatex": "|z| = 5",
          "explanation": "The length $OZ$ equals the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z \\text{ is represented by } (4,3)",
          "explanation": "The point $Z$ represents the complex number $z$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z$ is plotted at the point $(4, 3)$ with $|z| = 5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q040",
    "tags": [
      "plotting",
      "representation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe how to represent $z = -2+5i$ on an Argand diagram. State the coordinates of the point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Argand diagram axes",
          "workingLatex": "\\text{Re}(z) \\text{ horizontal, Im}(z) \\text{ vertical}",
          "explanation": "The real axis is horizontal and the imaginary axis is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read coordinates",
          "workingLatex": "z = -2+5i \\Rightarrow (-2, 5)",
          "explanation": "Treat $a$ as the $x$-coordinate and $b$ as the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Plot the point",
          "workingLatex": "\\text{Mark } (-2,5)",
          "explanation": "Move $2$ along the real axis and $5$ parallel to the imaginary axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction from origin",
          "workingLatex": "\\text{Vector } \\overrightarrow{OZ} = (-2,5)",
          "explanation": "Draw a line segment from $O$ to the point $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus as length",
          "workingLatex": "|z| = \\sqrt{29}",
          "explanation": "The length $OZ$ equals the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z \\text{ is represented by } (-2,5)",
          "explanation": "The point $Z$ represents the complex number $z$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z$ is plotted at the point $(-2, 5)$ with $|z| = \\sqrt{29}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q041",
    "tags": [
      "plotting",
      "representation"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "questionText": "Describe how to represent $z = -4i$ on an Argand diagram. State the coordinates of the point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Argand diagram axes",
          "workingLatex": "\\text{Re}(z) \\text{ horizontal, Im}(z) \\text{ vertical}",
          "explanation": "The real axis is horizontal and the imaginary axis is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read coordinates",
          "workingLatex": "z = -4i \\Rightarrow (0, -4)",
          "explanation": "Treat $a$ as the $x$-coordinate and $b$ as the $y$-coordinate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Plot the point",
          "workingLatex": "\\text{Mark } (0,-4)",
          "explanation": "Move $0$ along the real axis and $4$ parallel to the imaginary axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction from origin",
          "workingLatex": "\\text{Vector } \\overrightarrow{OZ} = (0,-4)",
          "explanation": "Draw a line segment from $O$ to the point $Z$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Modulus as length",
          "workingLatex": "|z| = 4",
          "explanation": "The length $OZ$ equals the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z \\text{ is represented by } (0,-4)",
          "explanation": "The point $Z$ represents the complex number $z$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z$ is plotted at the point $(0, -4)$ with $|z| = 4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q042",
    "tags": [
      "distance",
      "distance",
      "geometry"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z_1 = 1+2i$ and $z_2 = 4+6i$. Find $|z_2 - z_1|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distance formula",
          "workingLatex": "|z_2 - z_1| = \\sqrt{(a_2-a_1)^{2} + (b_2-b_1)^{2}}",
          "explanation": "The modulus of the difference gives the distance between two points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract",
          "workingLatex": "z_2 - z_1 = (4+6i) - (1+2i) = 3+4i",
          "explanation": "Subtract complex numbers component-wise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square differences",
          "workingLatex": "(3)^{2} + (4)^{2} = 9 + 16 = 25",
          "explanation": "Apply Pythagoras on the Argand plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square root",
          "workingLatex": "|z_2 - z_1| = 5",
          "explanation": "Take the non-negative root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Distance between } (1,2) \\text{ and } (4,6)",
          "explanation": "This is the straight-line distance on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "|z_2 - z_1| = 5",
          "explanation": "The separation of the two complex numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z_2 - z_1| = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q043",
    "tags": [
      "distance",
      "distance",
      "geometry"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z_1 = 0$ and $z_2 = 3+4i$. Find $|z_2 - z_1|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distance formula",
          "workingLatex": "|z_2 - z_1| = \\sqrt{(a_2-a_1)^{2} + (b_2-b_1)^{2}}",
          "explanation": "The modulus of the difference gives the distance between two points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract",
          "workingLatex": "z_2 - z_1 = (3+4i) - (0) = 3+4i",
          "explanation": "Subtract complex numbers component-wise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square differences",
          "workingLatex": "(3)^{2} + (4)^{2} = 9 + 16 = 25",
          "explanation": "Apply Pythagoras on the Argand plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square root",
          "workingLatex": "|z_2 - z_1| = 5",
          "explanation": "Take the non-negative root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Distance between } (0,0) \\text{ and } (3,4)",
          "explanation": "This is the straight-line distance on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "|z_2 - z_1| = 5",
          "explanation": "The separation of the two complex numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z_2 - z_1| = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q044",
    "tags": [
      "distance",
      "distance",
      "geometry"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z_1 = -1+1i$ and $z_2 = 2+5i$. Find $|z_2 - z_1|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distance formula",
          "workingLatex": "|z_2 - z_1| = \\sqrt{(a_2-a_1)^{2} + (b_2-b_1)^{2}}",
          "explanation": "The modulus of the difference gives the distance between two points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Subtract",
          "workingLatex": "z_2 - z_1 = (2+5i) - (-1+1i) = 3+4i",
          "explanation": "Subtract complex numbers component-wise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square differences",
          "workingLatex": "(3)^{2} + (4)^{2} = 9 + 16 = 25",
          "explanation": "Apply Pythagoras on the Argand plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square root",
          "workingLatex": "|z_2 - z_1| = 5",
          "explanation": "Take the non-negative root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Distance between } (-1,1) \\text{ and } (2,5)",
          "explanation": "This is the straight-line distance on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "|z_2 - z_1| = 5",
          "explanation": "The separation of the two complex numbers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z_2 - z_1| = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q045",
    "tags": [
      "combined",
      "mod-arg-form",
      "exponential-form"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $z = 8+6i$, find $|z|$, $\\arg(z)$, and express $z$ in the forms $r(\\cos\\theta + i\\sin\\theta)$ and $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = 10",
          "explanation": "Distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\tan^{-1}\\!\\left(\\frac{6}{8}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trigonometric form",
          "workingLatex": "z = 10(\\cos \\tan^{-1}\\!\\left(\\frac{6}{8}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{6}{8}\\right))",
          "explanation": "Modulus–argument form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 10e^{i\\tan^{-1}\\!\\left(\\frac{6}{8}\\right)}",
          "explanation": "Euler form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify cosine",
          "workingLatex": "10\\cos \\tan^{-1}\\!\\left(\\frac{6}{8}\\right) = 8",
          "explanation": "Real part check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify sine",
          "workingLatex": "10\\sin \\tan^{-1}\\!\\left(\\frac{6}{8}\\right) = 6",
          "explanation": "Imaginary part check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (8,6),\\; |z|=10",
          "explanation": "Geometric summary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Angle interpretation",
          "workingLatex": "\\text{Anticlockwise } \\tan^{-1}\\!\\left(\\frac{6}{8}\\right) \\text{ from positive Re axis}",
          "explanation": "How the argument appears on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "z = 10(\\cos \\tan^{-1}\\!\\left(\\frac{6}{8}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{6}{8}\\right)) = 10e^{i\\tan^{-1}\\!\\left(\\frac{6}{8}\\right)}",
          "explanation": "Both forms equivalent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z|=10$, $\\arg(z)=\\tan^{-1}\\!\\left(\\frac{6}{8}\\right)$, $z=10(\\cos \\tan^{-1}\\!\\left(\\frac{6}{8}\\right)+i\\sin \\tan^{-1}\\!\\left(\\frac{6}{8}\\right))=10e^{i\\tan^{-1}\\!\\left(\\frac{6}{8}\\right)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q046",
    "tags": [
      "combined",
      "mod-arg-form",
      "exponential-form"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $z = -7+24i$, find $|z|$, $\\arg(z)$, and express $z$ in the forms $r(\\cos\\theta + i\\sin\\theta)$ and $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = 25",
          "explanation": "Distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trigonometric form",
          "workingLatex": "z = 25(\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right) + i\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right))",
          "explanation": "Modulus–argument form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 25e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right)}",
          "explanation": "Euler form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify cosine",
          "workingLatex": "25\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right) = -7",
          "explanation": "Real part check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify sine",
          "workingLatex": "25\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right) = 24",
          "explanation": "Imaginary part check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (-7,24),\\; |z|=25",
          "explanation": "Geometric summary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Angle interpretation",
          "workingLatex": "\\text{Anticlockwise } \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right) \\text{ from positive Re axis}",
          "explanation": "How the argument appears on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "z = 25(\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right) + i\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right)) = 25e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right)}",
          "explanation": "Both forms equivalent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z|=25$, $\\arg(z)=\\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right)$, $z=25(\\cos \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right)+i\\sin \\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right))=25e^{i\\pi - \\tan^{-1}\\!\\left(\\frac{24}{7}\\right)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q047",
    "tags": [
      "combined",
      "mod-arg-form",
      "exponential-form"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $z = 1-1.7320508075688772i$, find $|z|$, $\\arg(z)$, and express $z$ in the forms $r(\\cos\\theta + i\\sin\\theta)$ and $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{3.9999999999999996}",
          "explanation": "Distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = -\\frac{\\pi}{3}",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trigonometric form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}(\\cos -\\frac{\\pi}{3} + i\\sin -\\frac{\\pi}{3})",
          "explanation": "Modulus–argument form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}e^{i-\\frac{\\pi}{3}}",
          "explanation": "Euler form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify cosine",
          "workingLatex": "\\sqrt{3.9999999999999996}\\cos -\\frac{\\pi}{3} = 1",
          "explanation": "Real part check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify sine",
          "workingLatex": "\\sqrt{3.9999999999999996}\\sin -\\frac{\\pi}{3} = -1.7320508075688772",
          "explanation": "Imaginary part check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (1,-1.7320508075688772),\\; |z|=\\sqrt{3.9999999999999996}",
          "explanation": "Geometric summary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Angle interpretation",
          "workingLatex": "\\text{Anticlockwise } -\\frac{\\pi}{3} \\text{ from positive Re axis}",
          "explanation": "How the argument appears on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "z = \\sqrt{3.9999999999999996}(\\cos -\\frac{\\pi}{3} + i\\sin -\\frac{\\pi}{3}) = \\sqrt{3.9999999999999996}e^{i-\\frac{\\pi}{3}}",
          "explanation": "Both forms equivalent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z|=\\sqrt{3.9999999999999996}$, $\\arg(z)=-\\frac{\\pi}{3}$, $z=\\sqrt{3.9999999999999996}(\\cos -\\frac{\\pi}{3}+i\\sin -\\frac{\\pi}{3})=\\sqrt{3.9999999999999996}e^{i-\\frac{\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q048",
    "tags": [
      "combined",
      "mod-arg-form",
      "exponential-form"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $z = -4-4i$, find $|z|$, $\\arg(z)$, and express $z$ in the forms $r(\\cos\\theta + i\\sin\\theta)$ and $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{32}",
          "explanation": "Distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trigonometric form",
          "workingLatex": "z = \\sqrt{32}(\\cos -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right) + i\\sin -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right))",
          "explanation": "Modulus–argument form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{32}e^{i-\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right)}",
          "explanation": "Euler form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify cosine",
          "workingLatex": "\\sqrt{32}\\cos -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right) = -4",
          "explanation": "Real part check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify sine",
          "workingLatex": "\\sqrt{32}\\sin -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right) = -4",
          "explanation": "Imaginary part check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (-4,-4),\\; |z|=\\sqrt{32}",
          "explanation": "Geometric summary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Angle interpretation",
          "workingLatex": "\\text{Anticlockwise } -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right) \\text{ from positive Re axis}",
          "explanation": "How the argument appears on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "z = \\sqrt{32}(\\cos -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right) + i\\sin -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right)) = \\sqrt{32}e^{i-\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right)}",
          "explanation": "Both forms equivalent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z|=\\sqrt{32}$, $\\arg(z)=-\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right)$, $z=\\sqrt{32}(\\cos -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right)+i\\sin -\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right))=\\sqrt{32}e^{i-\\pi + \\tan^{-1}\\!\\left(\\frac{4}{4}\\right)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q049",
    "tags": [
      "combined",
      "mod-arg-form",
      "exponential-form"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $z = 10$, find $|z|$, $\\arg(z)$, and express $z$ in the forms $r(\\cos\\theta + i\\sin\\theta)$ and $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = 10",
          "explanation": "Distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = 0",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trigonometric form",
          "workingLatex": "z = 10(\\cos 0 + i\\sin 0)",
          "explanation": "Modulus–argument form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 10e^{i0}",
          "explanation": "Euler form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify cosine",
          "workingLatex": "10\\cos 0 = 10",
          "explanation": "Real part check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify sine",
          "workingLatex": "10\\sin 0 = 0",
          "explanation": "Imaginary part check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (10,0),\\; |z|=10",
          "explanation": "Geometric summary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Angle interpretation",
          "workingLatex": "\\text{Anticlockwise } 0 \\text{ from positive Re axis}",
          "explanation": "How the argument appears on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "z = 10(\\cos 0 + i\\sin 0) = 10e^{i0}",
          "explanation": "Both forms equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z|=10$, $\\arg(z)=0$, $z=10(\\cos 0+i\\sin 0)=10e^{i0}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q050",
    "tags": [
      "combined",
      "mod-arg-form",
      "exponential-form"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $z = -6i$, find $|z|$, $\\arg(z)$, and express $z$ in the forms $r(\\cos\\theta + i\\sin\\theta)$ and $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = 6",
          "explanation": "Distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = -\\frac{\\pi}{2}",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trigonometric form",
          "workingLatex": "z = 6(\\cos -\\frac{\\pi}{2} + i\\sin -\\frac{\\pi}{2})",
          "explanation": "Modulus–argument form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = 6e^{i-\\frac{\\pi}{2}}",
          "explanation": "Euler form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify cosine",
          "workingLatex": "6\\cos -\\frac{\\pi}{2} = 0",
          "explanation": "Real part check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify sine",
          "workingLatex": "6\\sin -\\frac{\\pi}{2} = -6",
          "explanation": "Imaginary part check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (0,-6),\\; |z|=6",
          "explanation": "Geometric summary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Angle interpretation",
          "workingLatex": "\\text{Anticlockwise } -\\frac{\\pi}{2} \\text{ from positive Re axis}",
          "explanation": "How the argument appears on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "z = 6(\\cos -\\frac{\\pi}{2} + i\\sin -\\frac{\\pi}{2}) = 6e^{i-\\frac{\\pi}{2}}",
          "explanation": "Both forms equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z|=6$, $\\arg(z)=-\\frac{\\pi}{2}$, $z=6(\\cos -\\frac{\\pi}{2}+i\\sin -\\frac{\\pi}{2})=6e^{i-\\frac{\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q051",
    "tags": [
      "combined",
      "mod-arg-form",
      "exponential-form"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $z = 2+3.4641016151377544i$, find $|z|$, $\\arg(z)$, and express $z$ in the forms $r(\\cos\\theta + i\\sin\\theta)$ and $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{15.999999999999998}",
          "explanation": "Distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right)",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trigonometric form",
          "workingLatex": "z = \\sqrt{15.999999999999998}(\\cos \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right))",
          "explanation": "Modulus–argument form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{15.999999999999998}e^{i\\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right)}",
          "explanation": "Euler form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify cosine",
          "workingLatex": "\\sqrt{15.999999999999998}\\cos \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right) = 2",
          "explanation": "Real part check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify sine",
          "workingLatex": "\\sqrt{15.999999999999998}\\sin \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right) = 3.4641016151377544",
          "explanation": "Imaginary part check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (2,3.4641016151377544),\\; |z|=\\sqrt{15.999999999999998}",
          "explanation": "Geometric summary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Angle interpretation",
          "workingLatex": "\\text{Anticlockwise } \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right) \\text{ from positive Re axis}",
          "explanation": "How the argument appears on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "z = \\sqrt{15.999999999999998}(\\cos \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right) + i\\sin \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right)) = \\sqrt{15.999999999999998}e^{i\\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right)}",
          "explanation": "Both forms equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z|=\\sqrt{15.999999999999998}$, $\\arg(z)=\\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right)$, $z=\\sqrt{15.999999999999998}(\\cos \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right)+i\\sin \\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right))=\\sqrt{15.999999999999998}e^{i\\tan^{-1}\\!\\left(\\frac{3.4641016151377544}{2}\\right)}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q052",
    "tags": [
      "combined",
      "mod-arg-form",
      "exponential-form"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "For $z = -1+1.7320508075688772i$, find $|z|$, $\\arg(z)$, and express $z$ in the forms $r(\\cos\\theta + i\\sin\\theta)$ and $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "r = |z| = \\sqrt{3.9999999999999996}",
          "explanation": "Distance from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\theta = \\frac{2\\pi}{3}",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Trigonometric form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}(\\cos \\frac{2\\pi}{3} + i\\sin \\frac{2\\pi}{3})",
          "explanation": "Modulus–argument form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Exponential form",
          "workingLatex": "z = \\sqrt{3.9999999999999996}e^{i\\frac{2\\pi}{3}}",
          "explanation": "Euler form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify cosine",
          "workingLatex": "\\sqrt{3.9999999999999996}\\cos \\frac{2\\pi}{3} = -1",
          "explanation": "Real part check.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify sine",
          "workingLatex": "\\sqrt{3.9999999999999996}\\sin \\frac{2\\pi}{3} = 1.7320508075688772",
          "explanation": "Imaginary part check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand position",
          "workingLatex": "\\text{Point } (-1,1.7320508075688772),\\; |z|=\\sqrt{3.9999999999999996}",
          "explanation": "Geometric summary.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Angle interpretation",
          "workingLatex": "\\text{Anticlockwise } \\frac{2\\pi}{3} \\text{ from positive Re axis}",
          "explanation": "How the argument appears on the diagram.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summary",
          "workingLatex": "z = \\sqrt{3.9999999999999996}(\\cos \\frac{2\\pi}{3} + i\\sin \\frac{2\\pi}{3}) = \\sqrt{3.9999999999999996}e^{i\\frac{2\\pi}{3}}",
          "explanation": "Both forms equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z|=\\sqrt{3.9999999999999996}$, $\\arg(z)=\\frac{2\\pi}{3}$, $z=\\sqrt{3.9999999999999996}(\\cos \\frac{2\\pi}{3}+i\\sin \\frac{2\\pi}{3})=\\sqrt{3.9999999999999996}e^{i\\frac{2\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q053",
    "tags": [
      "origin-centre",
      "locus",
      "circle"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the locus of points $z$ satisfying $|z - (0)| = 5$. Give the centre and radius.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the locus",
          "workingLatex": "|z - (0)| = 5",
          "explanation": "Points $z$ whose distance from $0$ is exactly $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Centre of circle",
          "workingLatex": "\\text{Centre } C = (0, 0)",
          "explanation": "The fixed point $0$ is the centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Radius",
          "workingLatex": "\\text{Radius } = 5",
          "explanation": "The modulus condition fixes the radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cartesian equation",
          "workingLatex": "(x - 0)^{2} + (y - 0)^{2} = 25",
          "explanation": "Let $z = x + yi$ and use $|z - c|^{2} = r^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand if needed",
          "workingLatex": "x^{2} - 0x + 0 + y^{2} - 0y + 0 = 25",
          "explanation": "Expand the squares of the binomials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe locus",
          "workingLatex": "\\text{Circle centre } (0,0),\\; \\text{radius } 5",
          "explanation": "A circle on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example point",
          "workingLatex": "z = 5 \\text{ lies on the locus}",
          "explanation": "Points on the positive real direction from $C$ satisfy the equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|(5) - (0)| = 5",
          "explanation": "Substitute a boundary point to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Circle: centre } 0,\\; r = 5",
          "explanation": "Standard description of the locus.",
          "diagram": null
        }
      ],
      "finalAnswer": "Circle with centre $0$ and radius $5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q054",
    "tags": [
      "shifted-centre",
      "locus",
      "circle"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the locus of points $z$ satisfying $|z - (2+3i)| = 4$. Give the centre and radius.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the locus",
          "workingLatex": "|z - (2+3i)| = 4",
          "explanation": "Points $z$ whose distance from $2+3i$ is exactly $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Centre of circle",
          "workingLatex": "\\text{Centre } C = (2, 3)",
          "explanation": "The fixed point $2+3i$ is the centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Radius",
          "workingLatex": "\\text{Radius } = 4",
          "explanation": "The modulus condition fixes the radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cartesian equation",
          "workingLatex": "(x - 2)^{2} + (y - 3)^{2} = 16",
          "explanation": "Let $z = x + yi$ and use $|z - c|^{2} = r^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand if needed",
          "workingLatex": "x^{2} - 4x + 4 + y^{2} - 6y + 9 = 16",
          "explanation": "Expand the squares of the binomials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe locus",
          "workingLatex": "\\text{Circle centre } (2,3),\\; \\text{radius } 4",
          "explanation": "A circle on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example point",
          "workingLatex": "z = 6+3i \\text{ lies on the locus}",
          "explanation": "Points on the positive real direction from $C$ satisfy the equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|(6+3i) - (2+3i)| = 4",
          "explanation": "Substitute a boundary point to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Circle: centre } 2+3i,\\; r = 4",
          "explanation": "Standard description of the locus.",
          "diagram": null
        }
      ],
      "finalAnswer": "Circle with centre $2+3i$ and radius $4$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q055",
    "tags": [
      "shifted-centre",
      "locus",
      "circle"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the locus of points $z$ satisfying $|z - (-1+2i)| = 3$. Give the centre and radius.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the locus",
          "workingLatex": "|z - (-1+2i)| = 3",
          "explanation": "Points $z$ whose distance from $-1+2i$ is exactly $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Centre of circle",
          "workingLatex": "\\text{Centre } C = (-1, 2)",
          "explanation": "The fixed point $-1+2i$ is the centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Radius",
          "workingLatex": "\\text{Radius } = 3",
          "explanation": "The modulus condition fixes the radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cartesian equation",
          "workingLatex": "(x - -1)^{2} + (y - 2)^{2} = 9",
          "explanation": "Let $z = x + yi$ and use $|z - c|^{2} = r^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand if needed",
          "workingLatex": "x^{2} - -2x + 1 + y^{2} - 4y + 4 = 9",
          "explanation": "Expand the squares of the binomials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe locus",
          "workingLatex": "\\text{Circle centre } (-1,2),\\; \\text{radius } 3",
          "explanation": "A circle on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example point",
          "workingLatex": "z = 2+2i \\text{ lies on the locus}",
          "explanation": "Points on the positive real direction from $C$ satisfy the equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|(2+2i) - (-1+2i)| = 3",
          "explanation": "Substitute a boundary point to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Circle: centre } -1+2i,\\; r = 3",
          "explanation": "Standard description of the locus.",
          "diagram": null
        }
      ],
      "finalAnswer": "Circle with centre $-1+2i$ and radius $3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q057",
    "tags": [
      "locus",
      "circle"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The point $z = 4+4i$ lies on the circle $|z - (1+1i)| = r$. Find $r$ and write the equation of the locus.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Locus condition",
          "workingLatex": "|z - (1+1i)| = r",
          "explanation": "We need the distance from $z$ to $1+1i$ to equal $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute point",
          "workingLatex": "|(4+4i) - (1+1i)| = r",
          "explanation": "The point $z = 4+4i$ lies on the locus, so it satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract",
          "workingLatex": "|3+3i| = r",
          "explanation": "Simplify the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "\\sqrt{3^{2} + 3^{2}} = r",
          "explanation": "Apply the modulus formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute",
          "workingLatex": "\\sqrt{18} = r",
          "explanation": "Evaluate the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $r$",
          "workingLatex": "r = \\sqrt{18}",
          "explanation": "The radius is the distance from the centre to the given point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equation of locus",
          "workingLatex": "|z - (1+1i)| = \\sqrt{18}",
          "explanation": "Write the locus in complex form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cartesian form",
          "workingLatex": "(x-1)^{2}+(y-1)^{2}=18",
          "explanation": "Equivalent circle equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "|z - (1+1i)| = \\sqrt{18}",
          "explanation": "The required locus.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z - (1+1i)| = \\sqrt{18}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q058",
    "tags": [
      "locus",
      "circle"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "The point $z = 1+2i$ lies on the circle $|z - (-2)| = r$. Find $r$ and write the equation of the locus.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Locus condition",
          "workingLatex": "|z - (-2)| = r",
          "explanation": "We need the distance from $z$ to $-2$ to equal $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute point",
          "workingLatex": "|(1+2i) - (-2)| = r",
          "explanation": "The point $z = 1+2i$ lies on the locus, so it satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract",
          "workingLatex": "|3+2i| = r",
          "explanation": "Simplify the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "\\sqrt{3^{2} + 2^{2}} = r",
          "explanation": "Apply the modulus formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute",
          "workingLatex": "\\sqrt{13} = r",
          "explanation": "Evaluate the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $r$",
          "workingLatex": "r = \\sqrt{13}",
          "explanation": "The radius is the distance from the centre to the given point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equation of locus",
          "workingLatex": "|z - (-2)| = \\sqrt{13}",
          "explanation": "Write the locus in complex form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cartesian form",
          "workingLatex": "(x--2)^{2}+(y-0)^{2}=13",
          "explanation": "Equivalent circle equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "|z - (-2)| = \\sqrt{13}",
          "explanation": "The required locus.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z - (-2)| = \\sqrt{13}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q056",
    "tags": [
      "shifted-centre",
      "locus",
      "circle"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the locus of points $z$ satisfying $|z - (4-1i)| = 2$. Give the centre and radius.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the locus",
          "workingLatex": "|z - (4-1i)| = 2",
          "explanation": "Points $z$ whose distance from $4-1i$ is exactly $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Centre of circle",
          "workingLatex": "\\text{Centre } C = (4, -1)",
          "explanation": "The fixed point $4-1i$ is the centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Radius",
          "workingLatex": "\\text{Radius } = 2",
          "explanation": "The modulus condition fixes the radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cartesian equation",
          "workingLatex": "(x - 4)^{2} + (y - -1)^{2} = 4",
          "explanation": "Let $z = x + yi$ and use $|z - c|^{2} = r^{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand if needed",
          "workingLatex": "x^{2} - 8x + 16 + y^{2} - -2y + 1 = 4",
          "explanation": "Expand the squares of the binomials.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe locus",
          "workingLatex": "\\text{Circle centre } (4,-1),\\; \\text{radius } 2",
          "explanation": "A circle on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Example point",
          "workingLatex": "z = 6-1i \\text{ lies on the locus}",
          "explanation": "Points on the positive real direction from $C$ satisfy the equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "|(6-1i) - (4-1i)| = 2",
          "explanation": "Substitute a boundary point to confirm.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Circle: centre } 4-1i,\\; r = 2",
          "explanation": "Standard description of the locus.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Circle with centre $4-1i$ and radius $2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q059",
    "tags": [
      "locus",
      "circle"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "The point $z = 3+1i$ lies on the circle $|z - (3-2i)| = r$. Find $r$ and write the equation of the locus.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Locus condition",
          "workingLatex": "|z - (3-2i)| = r",
          "explanation": "We need the distance from $z$ to $3-2i$ to equal $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute point",
          "workingLatex": "|(3+1i) - (3-2i)| = r",
          "explanation": "The point $z = 3+1i$ lies on the locus, so it satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract",
          "workingLatex": "|3i| = r",
          "explanation": "Simplify the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "\\sqrt{0^{2} + 3^{2}} = r",
          "explanation": "Apply the modulus formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute",
          "workingLatex": "\\sqrt{9} = r",
          "explanation": "Evaluate the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $r$",
          "workingLatex": "r = 3",
          "explanation": "The radius is the distance from the centre to the given point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Equation of locus",
          "workingLatex": "|z - (3-2i)| = 3",
          "explanation": "Write the locus in complex form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cartesian form",
          "workingLatex": "(x-3)^{2}+(y--2)^{2}=9",
          "explanation": "Equivalent circle equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "|z - (3-2i)| = 3",
          "explanation": "The required locus.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|z - (3-2i)| = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q060",
    "tags": [
      "verification",
      "locus",
      "circle"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Does $z = 3+4i$ lie on the locus $|z - (0)| = 5$? Justify your answer.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Locus",
          "workingLatex": "|z - (0)| = 5",
          "explanation": "Circle of radius $5$ centred at $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test point",
          "workingLatex": "z = 3+4i",
          "explanation": "Check whether this point satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute difference",
          "workingLatex": "z - (0) = 3+4i",
          "explanation": "Subtract centre from $z$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Modulus",
          "workingLatex": "|3+4i| = 5",
          "explanation": "Distance from centre to $z$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare",
          "workingLatex": "5 = 5",
          "explanation": "The point lies on the circle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "z = 3+4i \\text{ lies on the locus}",
          "explanation": "Final verdict.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Circle locus",
          "workingLatex": "|z-a|=r",
          "explanation": "A circle with centre $a$ and radius $r$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Ray locus",
          "workingLatex": "\\arg(z-a)=\\theta",
          "explanation": "A half-line from $a$ at angle $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes. $|z - (0)| = 5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q061",
    "tags": [
      "from-origin",
      "locus",
      "ray"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the locus of points $z$ satisfying $\\arg(z - (0)) = \\frac{\\pi}{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the locus",
          "workingLatex": "\\arg(z - (0)) = \\frac{\\pi}{4}",
          "explanation": "The argument of $z - c$ is fixed, so $z - c$ points in one direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate origin",
          "workingLatex": "\\text{Let } w = z - (0)",
          "explanation": "Shift the centre to the origin mentally.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fixed direction",
          "workingLatex": "\\arg(w) = \\frac{\\pi}{4}",
          "explanation": "All $w$ lie on a half-line from the origin at angle $\\frac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Half-line from centre",
          "workingLatex": "\\text{Ray from } (0,0) \\text{ at angle } \\frac{\\pi}{4}",
          "explanation": "Translate the ray back: start at $C$ and draw at angle $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cartesian form",
          "workingLatex": "y - 0 = \\tan(\\frac{\\pi}{4})(x - 0)",
          "explanation": "Convert to a line equation (excluding the centre point).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exclude centre",
          "workingLatex": "z \\neq 0",
          "explanation": "The centre itself is not on the ray since $w = 0$ has undefined argument.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch description",
          "workingLatex": "\\text{Half-line from } 0 \\text{ at } \\frac{\\pi}{4}",
          "explanation": "A ray, not a full line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example point",
          "workingLatex": "z = 3 \\text{ if } \\frac{\\pi}{4} = 0",
          "explanation": "Points along the ray satisfy the condition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Ray from } 0,\\; \\arg = \\frac{\\pi}{4}",
          "explanation": "Half-line locus.",
          "diagram": null
        }
      ],
      "finalAnswer": "Half-line (ray) from $0$ at angle $\\frac{\\pi}{4}$ radians from the positive real axis."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q062",
    "tags": [
      "shifted",
      "locus",
      "ray"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the locus of points $z$ satisfying $\\arg(z - (2+1i)) = \\frac{\\pi}{2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the locus",
          "workingLatex": "\\arg(z - (2+1i)) = \\frac{\\pi}{2}",
          "explanation": "The argument of $z - c$ is fixed, so $z - c$ points in one direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate origin",
          "workingLatex": "\\text{Let } w = z - (2+1i)",
          "explanation": "Shift the centre to the origin mentally.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fixed direction",
          "workingLatex": "\\arg(w) = \\frac{\\pi}{2}",
          "explanation": "All $w$ lie on a half-line from the origin at angle $\\frac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Half-line from centre",
          "workingLatex": "\\text{Ray from } (2,1) \\text{ at angle } \\frac{\\pi}{2}",
          "explanation": "Translate the ray back: start at $C$ and draw at angle $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cartesian form",
          "workingLatex": "y - 1 = \\tan(\\frac{\\pi}{2})(x - 2)",
          "explanation": "Convert to a line equation (excluding the centre point).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exclude centre",
          "workingLatex": "z \\neq 2+1i",
          "explanation": "The centre itself is not on the ray since $w = 0$ has undefined argument.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch description",
          "workingLatex": "\\text{Half-line from } 2+1i \\text{ at } \\frac{\\pi}{2}",
          "explanation": "A ray, not a full line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example point",
          "workingLatex": "z = 5+1i \\text{ if } \\frac{\\pi}{2} = 0",
          "explanation": "Points along the ray satisfy the condition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Ray from } 2+1i,\\; \\arg = \\frac{\\pi}{2}",
          "explanation": "Half-line locus.",
          "diagram": null
        }
      ],
      "finalAnswer": "Half-line (ray) from $2+1i$ at angle $\\frac{\\pi}{2}$ radians from the positive real axis."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q063",
    "tags": [
      "shifted",
      "locus",
      "ray"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the locus of points $z$ satisfying $\\arg(z - (-1+3i)) = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the locus",
          "workingLatex": "\\arg(z - (-1+3i)) = 0",
          "explanation": "The argument of $z - c$ is fixed, so $z - c$ points in one direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate origin",
          "workingLatex": "\\text{Let } w = z - (-1+3i)",
          "explanation": "Shift the centre to the origin mentally.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fixed direction",
          "workingLatex": "\\arg(w) = 0",
          "explanation": "All $w$ lie on a half-line from the origin at angle $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Half-line from centre",
          "workingLatex": "\\text{Ray from } (-1,3) \\text{ at angle } 0",
          "explanation": "Translate the ray back: start at $C$ and draw at angle $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cartesian form",
          "workingLatex": "y - 3 = \\tan(0)(x - -1)",
          "explanation": "Convert to a line equation (excluding the centre point).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exclude centre",
          "workingLatex": "z \\neq -1+3i",
          "explanation": "The centre itself is not on the ray since $w = 0$ has undefined argument.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch description",
          "workingLatex": "\\text{Half-line from } -1+3i \\text{ at } 0",
          "explanation": "A ray, not a full line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example point",
          "workingLatex": "z = 2+3i \\text{ if } 0 = 0",
          "explanation": "Points along the ray satisfy the condition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Ray from } -1+3i,\\; \\arg = 0",
          "explanation": "Half-line locus.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Half-line (ray) from $-1+3i$ at angle $0$ radians from the positive real axis."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q064",
    "tags": [
      "shifted",
      "locus",
      "ray"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the locus of points $z$ satisfying $\\arg(z - (1-2i)) = -\\frac{\\pi}{3}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the locus",
          "workingLatex": "\\arg(z - (1-2i)) = -\\frac{\\pi}{3}",
          "explanation": "The argument of $z - c$ is fixed, so $z - c$ points in one direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate origin",
          "workingLatex": "\\text{Let } w = z - (1-2i)",
          "explanation": "Shift the centre to the origin mentally.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Fixed direction",
          "workingLatex": "\\arg(w) = -\\frac{\\pi}{3}",
          "explanation": "All $w$ lie on a half-line from the origin at angle $-\\frac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Half-line from centre",
          "workingLatex": "\\text{Ray from } (1,-2) \\text{ at angle } -\\frac{\\pi}{3}",
          "explanation": "Translate the ray back: start at $C$ and draw at angle $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cartesian form",
          "workingLatex": "y - -2 = \\tan(-\\frac{\\pi}{3})(x - 1)",
          "explanation": "Convert to a line equation (excluding the centre point).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exclude centre",
          "workingLatex": "z \\neq 1-2i",
          "explanation": "The centre itself is not on the ray since $w = 0$ has undefined argument.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sketch description",
          "workingLatex": "\\text{Half-line from } 1-2i \\text{ at } -\\frac{\\pi}{3}",
          "explanation": "A ray, not a full line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Example point",
          "workingLatex": "z = 4-2i \\text{ if } -\\frac{\\pi}{3} = 0",
          "explanation": "Points along the ray satisfy the condition.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Ray from } 1-2i,\\; \\arg = -\\frac{\\pi}{3}",
          "explanation": "Half-line locus.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Half-line (ray) from $1-2i$ at angle $-\\frac{\\pi}{3}$ radians from the positive real axis."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q065",
    "tags": [
      "disc",
      "locus",
      "region"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Is $z = 3+1i$ inside the region $|z - (0)| < 5$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Region",
          "workingLatex": "|z - (0)| < 5",
          "explanation": "Interior of a disc (not including the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test point",
          "workingLatex": "z = 3+1i",
          "explanation": "Determine if this point is inside the disc.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distance from centre",
          "workingLatex": "|z - (0)| = |3+1i| = \\sqrt{10}",
          "explanation": "Compute the distance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with radius",
          "workingLatex": "3.1622776601683795 < 5",
          "explanation": "Less than the radius, so inside.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Point } (3,1) \\text{ is inside the disc}",
          "explanation": "Visual interpretation on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z = 3+1i \\text{ is inside the region}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Circle locus",
          "workingLatex": "|z-a|=r",
          "explanation": "A circle with centre $a$ and radius $r$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Ray locus",
          "workingLatex": "\\arg(z-a)=\\theta",
          "explanation": "A half-line from $a$ at angle $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes, $|z - (0)| = 3.1622776601683795 < 5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q066",
    "tags": [
      "disc",
      "locus",
      "region"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Is $z = 5+5i$ inside the region $|z - (2+2i)| < 3$?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Region",
          "workingLatex": "|z - (2+2i)| < 3",
          "explanation": "Interior of a disc (not including the boundary).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test point",
          "workingLatex": "z = 5+5i",
          "explanation": "Determine if this point is inside the disc.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Distance from centre",
          "workingLatex": "|z - (2+2i)| = |3+3i| = \\sqrt{18}",
          "explanation": "Compute the distance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with radius",
          "workingLatex": "4.242640687119285 > 3",
          "explanation": "Greater than or equal to the radius, so outside.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Geometric meaning",
          "workingLatex": "\\text{Point } (5,5) \\text{ is outside the disc}",
          "explanation": "Visual interpretation on the Argand diagram.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "z = 5+5i \\text{ is outside the region}",
          "explanation": "Final classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argand diagram",
          "workingLatex": "\\text{Re horizontal, Im vertical}",
          "explanation": "Plot $a+bi$ at coordinates $(a,b)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Modulus",
          "workingLatex": "|z|=\\sqrt{a^{2}+b^{2}}",
          "explanation": "Distance from the origin to the point.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Principal argument",
          "workingLatex": "-\\pi < \\arg(z) \\leq \\pi",
          "explanation": "Angle measured anticlockwise from the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Mod–arg form",
          "workingLatex": "z=r(\\cos\\theta+i\\sin\\theta)",
          "explanation": "Polar form with modulus $r$ and argument $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta}=\\cos\\theta+i\\sin\\theta",
          "explanation": "Links exponential and trigonometric forms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Circle locus",
          "workingLatex": "|z-a|=r",
          "explanation": "A circle with centre $a$ and radius $r$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Ray locus",
          "workingLatex": "\\arg(z-a)=\\theta",
          "explanation": "A half-line from $a$ at angle $\\theta$.",
          "diagram": null
        }
      ],
      "finalAnswer": "No, $|z - (2+2i)| = 4.242640687119285 \\geq 3$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q067",
    "tags": [
      "perpendicular-bisector",
      "combined",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "On an Argand diagram, $z_1 = 1 + 2i$ and $z_2 = 4 - i$. Find (a) $|z_1|$, (b) $\\arg(z_1)$, (c) $z_2 - z_1$, (d) $|z_2 - z_1|$, and (e) describe the locus $|z - z_1| = |z_2 - z_1|$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Modulus of $z_1$",
          "workingLatex": "|z_1| = \\sqrt{1^{2}+2^{2}} = \\sqrt{5}",
          "explanation": "Distance from origin to $(1,2)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Argument of $z_1$",
          "workingLatex": "\\arg(z_1) = \\tan^{-1}(2) \\approx 1.107 \\text{ rad}",
          "explanation": "Quadrant I: principal argument is $\\tan^{-1}(2)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) Difference",
          "workingLatex": "z_2 - z_1 = (4-i)-(1+2i) = 3-3i",
          "explanation": "Subtract component-wise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(d) Distance",
          "workingLatex": "|z_2 - z_1| = |3-3i| = \\sqrt{18} = 3\\sqrt{2}",
          "explanation": "Modulus of the difference vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(e) Interpret locus",
          "workingLatex": "|z - z_1| = |z_2 - z_1|",
          "explanation": "Points equidistant from $z_1$ and $z_2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(e) Perpendicular bisector",
          "workingLatex": "\\text{Perpendicular bisector of } z_1 \\text{ and } z_2",
          "explanation": "The locus is the set of points equidistant from two fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Midpoint",
          "workingLatex": "M = \\frac{z_1+z_2}{2} = \\frac{5+i}{2} = 2.5+0.5i",
          "explanation": "The line passes through the midpoint.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Gradient of $z_1 z_2$",
          "workingLatex": "\\text{Gradient} = \\frac{-1-2}{4-1} = -1",
          "explanation": "Slope of the segment joining $z_1$ and $z_2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Perpendicular gradient",
          "workingLatex": "m_{\\perp} = 1",
          "explanation": "Perpendicular lines have gradients multiplying to $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Line equation",
          "workingLatex": "y - 0.5 = 1(x - 2.5)",
          "explanation": "Line through $M$ with gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify",
          "workingLatex": "y = x - 2",
          "explanation": "Cartesian equation of the perpendicular bisector.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify distance",
          "workingLatex": "|z_1 - z_2| = 3\\sqrt{2}",
          "explanation": "Both ends of the segment are $|z_2-z_1|$ from points on the line.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summary",
          "workingLatex": "(a)\\sqrt{5},\\; (b)\\tan^{-1}(2),\\; (c)3-3i,\\; (d)3\\sqrt{2},\\; (e)y=x-2",
          "explanation": "Complete multi-part Argand problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\sqrt{5}$. (b) $\\tan^{-1}(2)$. (c) $3-3i$. (d) $3\\sqrt{2}$. (e) Perpendicular bisector: $y = x - 2$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q068",
    "tags": [
      "intersection",
      "loci",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The complex number $z$ satisfies $|z - 2| = 3$ and $\\arg(z + 1) = \\frac{\\pi}{4}$. Find $z$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First locus",
          "workingLatex": "|z - 2| = 3",
          "explanation": "Circle centre $2$ (i.e. $(2,0)$) radius $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second locus",
          "workingLatex": "\\arg(z + 1) = \\frac{\\pi}{4}",
          "explanation": "Ray from $-1$ at angle $\\pi/4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write $z = x + yi$",
          "workingLatex": "z + 1 = (x+1) + yi",
          "explanation": "For the argument condition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Argument equation",
          "workingLatex": "\\frac{y}{x+1} = \\tan\\frac{\\pi}{4} = 1",
          "explanation": "So $y = x + 1$ (with $x + 1 > 0$).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Circle equation",
          "workingLatex": "(x-2)^{2} + y^{2} = 9",
          "explanation": "From $|z-2|=3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $y = x + 1$",
          "workingLatex": "(x-2)^{2} + (x+1)^{2} = 9",
          "explanation": "Replace $y$ in the circle equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand",
          "workingLatex": "x^{2}-4x+4 + x^{2}+2x+1 = 9",
          "explanation": "Expand both squares.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "2x^{2} - 2x - 4 = 0 \\Rightarrow x^{2} - x - 2 = 0",
          "explanation": "Collect terms and divide by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise",
          "workingLatex": "(x-2)(x+1) = 0",
          "explanation": "Quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for $x$",
          "workingLatex": "x = 2 \\text{ or } x = -1",
          "explanation": "Two candidates.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check argument condition",
          "workingLatex": "x + 1 > 0 \\Rightarrow x = 2 \\text{ only}",
          "explanation": "Reject $x = -1$ since $\\arg$ requires positive real part of $z+1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find $y$",
          "workingLatex": "y = x + 1 = 3",
          "explanation": "From the ray equation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify on circle",
          "workingLatex": "|2+3i - 2| = |3i| = 3",
          "explanation": "Substitute $z=2+3i$ into $|z-2|=3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Answer",
          "workingLatex": "z = 2 + 3i",
          "explanation": "Intersection of circle and ray.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2 + 3i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q069",
    "tags": [
      "de-moivre",
      "powers",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Express $z = -1 + i\\sqrt{3}$ in exponential form and hence find $z^{3}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Modulus",
          "workingLatex": "|z| = \\sqrt{(-1)^{2}+3} = 2",
          "explanation": "Compute $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\arg(z) = \\pi - \\tan^{-1}(\\sqrt{3}) = \\frac{2\\pi}{3}",
          "explanation": "Quadrant II: $120°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = 2e^{i\\cdot 2\\pi/3}",
          "explanation": "Write $z = re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "De Moivre",
          "workingLatex": "z^{3} = (2e^{i\\cdot 2\\pi/3})^{3} = 8e^{i\\cdot 2\\pi}",
          "explanation": "When raising to a power, raise $r$ to the power and multiply the argument by the power.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify exponent",
          "workingLatex": "8e^{i\\cdot 2\\pi} = 8(\\cos 2\\pi + i\\sin 2\\pi)",
          "explanation": "Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate trig",
          "workingLatex": "\\cos 2\\pi = 1,\\; \\sin 2\\pi = 0",
          "explanation": "Full rotation returns to the positive real axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Result",
          "workingLatex": "z^{3} = 8",
          "explanation": "Purely real answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by expansion",
          "workingLatex": "(-1+i\\sqrt{3})^{3}",
          "explanation": "Alternative check using algebra.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand",
          "workingLatex": "(-1+i\\sqrt{3})^{2} = 1 - 3 - 2i\\sqrt{3} = -2 - 2i\\sqrt{3}",
          "explanation": "Square first.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Multiply again",
          "workingLatex": "(-2-2i\\sqrt{3})(-1+i\\sqrt{3}) = 2 - 6 + \\cdots = 8",
          "explanation": "Confirms $z^{3}=8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric view",
          "workingLatex": "\\text{Triple rotation by } 120° \\text{ gives } 360°",
          "explanation": "Three steps of $120°$ returns to the starting direction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cube roots link",
          "workingLatex": "z \\text{ is a cube root of } 8",
          "explanation": "Related to roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "z = 2e^{i\\cdot 2\\pi/3},\\; z^{3} = 8",
          "explanation": "Exponential form and cube.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = 2e^{i\\cdot 2\\pi/3}$ and $z^{3} = 8$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Argand diagrams",
    "subtopicId": "fm.y1.pure.argand",
    "questionDiagram": null,
    "id": "fm.y1.pure.argand.q070",
    "tags": [
      "region",
      "optimisation",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Sketch and describe the region on the Argand diagram defined by $|z - 1| \\leq 2$ and $\\frac{\\pi}{4} \\leq \\arg(z) \\leq \\frac{\\pi}{2}$. Find the maximum value of $|z|$ in this region.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "First condition",
          "workingLatex": "|z - 1| \\leq 2",
          "explanation": "Closed disc centre $(1,0)$ radius $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Second condition",
          "workingLatex": "\\frac{\\pi}{4} \\leq \\arg(z) \\leq \\frac{\\pi}{2}",
          "explanation": "Sector between angles $45°$ and $90°$ from the origin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Intersection",
          "workingLatex": "\\text{Disc} \\cap \\text{sector}",
          "explanation": "The region is the overlap of both conditions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Boundary points",
          "workingLatex": "\\text{Arc of disc in the sector, plus radial edges}",
          "explanation": "The region has curved and straight boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Max $|z|$ strategy",
          "workingLatex": "|z| \\text{ maximised at the farthest point from origin in the region}",
          "explanation": "Look on the boundary of the feasible set.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Candidate on ray $\\arg z = \\pi/2$",
          "workingLatex": "z = 1 + 2i \\text{ (top of disc)}",
          "explanation": "Point on disc boundary at angle $\\pi/2$ from origin? Check: $|1+2i|=\\sqrt{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Candidate on ray $\\arg z = \\pi/4$",
          "workingLatex": "\\text{Intersection of ray and disc}",
          "explanation": "Solve $|z-1|=2$ with $\\arg z = \\pi/4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Ray parametric",
          "workingLatex": "z = t(1+i),\\; t > 0",
          "explanation": "Points on $\\arg z = \\pi/4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "|t(1+i) - 1| = 2",
          "explanation": "Apply disc equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve",
          "workingLatex": "|(t-1) + ti| = 2 \\Rightarrow (t-1)^{2}+t^{2} = 4",
          "explanation": "Expand modulus squared.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Quadratic",
          "workingLatex": "2t^{2} - 2t - 3 = 0",
          "explanation": "Simplify.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Positive root",
          "workingLatex": "t = \\frac{1+\\sqrt{7}}{2}",
          "explanation": "Take positive $t$ for first quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare moduli",
          "workingLatex": "|z| = t\\sqrt{2} \\approx 2.65;\\; |1+2i| = \\sqrt{5} \\approx 2.24",
          "explanation": "The point on $\\pi/4$ boundary gives larger $|z|$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Maximum",
          "workingLatex": "|z|_{\\max} = \\frac{(1+\\sqrt{7})\\sqrt{2}}{2}",
          "explanation": "Farthest boundary point from origin.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Description",
          "workingLatex": "\\text{Sector of disc in Q1 between } \\pi/4 \\text{ and } \\pi/2",
          "explanation": "Complete region description.",
          "diagram": null
        }
      ],
      "finalAnswer": "Region: intersection of disc $|z-1|\\leq 2$ with sector $\\frac{\\pi}{4} \\leq \\arg(z) \\leq \\frac{\\pi}{2}$. Maximum $|z| = \\dfrac{(1+\\sqrt{7})\\sqrt{2}}{2}$."
    }
  }
];
