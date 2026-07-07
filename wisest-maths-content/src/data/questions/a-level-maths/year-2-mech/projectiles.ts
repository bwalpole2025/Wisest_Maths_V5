import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Mechanics · Projectiles
 * Horizontal and angled projection; resolving; time of flight, range, greatest height;
 * trajectory equation; clearance problems. 70 questions with full worked solutions.
 */
export const questions: Question[] = 
[
  {
    "id": "al.y2.mech.projectiles.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "independence",
      "components",
      "projectile"
    ],
    "questionText": "A particle is projected with initial speed $u$ at an angle $\\alpha$ above the horizontal. Explain why the horizontal and vertical motions can be treated separately, and state the acceleration in each direction (ignoring air resistance).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the only force",
          "workingLatex": "\\text{Weight acts vertically downward}",
          "explanation": "With no air resistance, the only force is gravity, which acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal acceleration",
          "workingLatex": "a_x = 0",
          "explanation": "Gravity has no horizontal component, so horizontal velocity stays constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical acceleration",
          "workingLatex": "a_y = -g = -9.8\\,\\text{m s}^{-2}",
          "explanation": "Gravity causes constant downward acceleration $g = 9.8\\,\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State horizontal motion",
          "workingLatex": "x = (u\\cos\\alpha)\\,t",
          "explanation": "Horizontal displacement grows uniformly because speed $u\\cos\\alpha$ is constant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State vertical motion",
          "workingLatex": "y = (u\\sin\\alpha)\\,t - \\tfrac{1}{2}gt^2",
          "explanation": "Vertical motion is SUVAT with initial speed $u\\sin\\alpha$ and acceleration $-g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain independence",
          "workingLatex": "\\text{No horizontal force } \\Rightarrow \\text{ motions are independent}",
          "explanation": "Because horizontal acceleration is zero, vertical equations can be solved without affecting horizontal motion, and vice versa.",
          "diagram": null
        }
      ],
      "finalAnswer": "Horizontal acceleration is $0$; vertical acceleration is $-g$. Motions are independent because gravity acts only vertically."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "components",
      "resolving"
    ],
    "questionText": "A particle is projected with speed $20\\,\\text{m s}^{-1}$ at $30°$ above the horizontal. Find the horizontal and vertical components of the initial velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Draw a velocity triangle",
          "workingLatex": "u, \\quad \\alpha \\text{ above horizontal}",
          "explanation": "Resolve the initial velocity into horizontal and vertical parts using trigonometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal component",
          "workingLatex": "u_x = u\\cos\\alpha = 20\\cos 30°",
          "explanation": "$u_x = u\\cos\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $u_x$",
          "workingLatex": "u_x = 17.32\\,\\text{m s}^{-1}",
          "explanation": "Horizontal component: $17.32\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertical component",
          "workingLatex": "u_y = u\\sin\\alpha = 20\\sin 30°",
          "explanation": "$u_y = u\\sin\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate $u_y$",
          "workingLatex": "u_y = 10\\,\\text{m s}^{-1}",
          "explanation": "Vertical component: $10\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify with Pythagoras",
          "workingLatex": "u_x^2 + u_y^2 = 400 \\approx 400",
          "explanation": "Components should combine to give the original speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 17.32\\,\\text{m s}^{-1}$, $u_y = 10\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "components",
      "resolving"
    ],
    "questionText": "A ball is projected with speed $15\\,\\text{m s}^{-1}$ at $40°$ above the horizontal. Find $u_x$ and $u_y$, the horizontal and vertical components of the initial velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontally",
          "workingLatex": "u_x = 15\\cos 40°",
          "explanation": "Horizontal speed uses cosine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $u_x$",
          "workingLatex": "u_x = 11.49\\,\\text{m s}^{-1}",
          "explanation": "$u_x = 11.49\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "u_y = 15\\sin 40°",
          "explanation": "Vertical speed uses sine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $u_y$",
          "workingLatex": "u_y = 9.64\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 9.64\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note signs",
          "workingLatex": "\\text{Both components positive for projection above horizontal}",
          "explanation": "The angle is above the horizontal, so both components are positive initially.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 11.49, \\quad u_y = 9.64",
          "explanation": "Components: $11.49\\,\\text{m s}^{-1}$ and $9.64\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 11.49\\,\\text{m s}^{-1}$, $u_y = 9.64\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "components",
      "resolving"
    ],
    "questionText": "A ball is projected with speed $25\\,\\text{m s}^{-1}$ at $60°$ above the horizontal. Find $u_x$ and $u_y$, the horizontal and vertical components of the initial velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontally",
          "workingLatex": "u_x = 25\\cos 60°",
          "explanation": "Horizontal speed uses cosine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $u_x$",
          "workingLatex": "u_x = 12.50\\,\\text{m s}^{-1}",
          "explanation": "$u_x = 12.50\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "u_y = 25\\sin 60°",
          "explanation": "Vertical speed uses sine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $u_y$",
          "workingLatex": "u_y = 21.65\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 21.65\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note signs",
          "workingLatex": "\\text{Both components positive for projection above horizontal}",
          "explanation": "The angle is above the horizontal, so both components are positive initially.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 12.50, \\quad u_y = 21.65",
          "explanation": "Components: $12.50\\,\\text{m s}^{-1}$ and $21.65\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 12.50\\,\\text{m s}^{-1}$, $u_y = 21.65\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "components",
      "resolving"
    ],
    "questionText": "A ball is projected with speed $10\\,\\text{m s}^{-1}$ at $53°$ above the horizontal. Find $u_x$ and $u_y$, the horizontal and vertical components of the initial velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontally",
          "workingLatex": "u_x = 10\\cos 53°",
          "explanation": "Horizontal speed uses cosine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $u_x$",
          "workingLatex": "u_x = 6.02\\,\\text{m s}^{-1}",
          "explanation": "$u_x = 6.02\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "u_y = 10\\sin 53°",
          "explanation": "Vertical speed uses sine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $u_y$",
          "workingLatex": "u_y = 7.99\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 7.99\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note signs",
          "workingLatex": "\\text{Both components positive for projection above horizontal}",
          "explanation": "The angle is above the horizontal, so both components are positive initially.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 6.02, \\quad u_y = 7.99",
          "explanation": "Components: $6.02\\,\\text{m s}^{-1}$ and $7.99\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 6.02\\,\\text{m s}^{-1}$, $u_y = 7.99\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "components",
      "resolving"
    ],
    "questionText": "A ball is projected with speed $30\\,\\text{m s}^{-1}$ at $25°$ above the horizontal. Find $u_x$ and $u_y$, the horizontal and vertical components of the initial velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontally",
          "workingLatex": "u_x = 30\\cos 25°",
          "explanation": "Horizontal speed uses cosine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $u_x$",
          "workingLatex": "u_x = 27.19\\,\\text{m s}^{-1}",
          "explanation": "$u_x = 27.19\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "u_y = 30\\sin 25°",
          "explanation": "Vertical speed uses sine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $u_y$",
          "workingLatex": "u_y = 12.68\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 12.68\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note signs",
          "workingLatex": "\\text{Both components positive for projection above horizontal}",
          "explanation": "The angle is above the horizontal, so both components are positive initially.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 27.19, \\quad u_y = 12.68",
          "explanation": "Components: $27.19\\,\\text{m s}^{-1}$ and $12.68\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 27.19\\,\\text{m s}^{-1}$, $u_y = 12.68\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "components",
      "resolving"
    ],
    "questionText": "A ball is projected with speed $18\\,\\text{m s}^{-1}$ at $70°$ above the horizontal. Find $u_x$ and $u_y$, the horizontal and vertical components of the initial velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontally",
          "workingLatex": "u_x = 18\\cos 70°",
          "explanation": "Horizontal speed uses cosine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $u_x$",
          "workingLatex": "u_x = 6.16\\,\\text{m s}^{-1}",
          "explanation": "$u_x = 6.16\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "u_y = 18\\sin 70°",
          "explanation": "Vertical speed uses sine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $u_y$",
          "workingLatex": "u_y = 16.91\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 16.91\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note signs",
          "workingLatex": "\\text{Both components positive for projection above horizontal}",
          "explanation": "The angle is above the horizontal, so both components are positive initially.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 6.16, \\quad u_y = 16.91",
          "explanation": "Components: $6.16\\,\\text{m s}^{-1}$ and $16.91\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 6.16\\,\\text{m s}^{-1}$, $u_y = 16.91\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "components",
      "resolving"
    ],
    "questionText": "A ball is projected with speed $40\\,\\text{m s}^{-1}$ at $45°$ above the horizontal. Find $u_x$ and $u_y$, the horizontal and vertical components of the initial velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve horizontally",
          "workingLatex": "u_x = 40\\cos 45°",
          "explanation": "Horizontal speed uses cosine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $u_x$",
          "workingLatex": "u_x = 28.28\\,\\text{m s}^{-1}",
          "explanation": "$u_x = 28.28\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically",
          "workingLatex": "u_y = 40\\sin 45°",
          "explanation": "Vertical speed uses sine of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate $u_y$",
          "workingLatex": "u_y = 28.28\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 28.28\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note signs",
          "workingLatex": "\\text{Both components positive for projection above horizontal}",
          "explanation": "The angle is above the horizontal, so both components are positive initially.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 28.28, \\quad u_y = 28.28",
          "explanation": "Components: $28.28\\,\\text{m s}^{-1}$ and $28.28\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 28.28\\,\\text{m s}^{-1}$, $u_y = 28.28\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "horizontal-projection",
      "time-of-flight",
      "cliff"
    ],
    "questionText": "A stone is projected horizontally with speed $10\\,\\text{m s}^{-1}$ from the top of a cliff $80\\,\\text{m}$ high. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the time taken to reach the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^2",
          "explanation": "Taking the ground as $y = 0$, the vertical displacement is $h - \\tfrac{1}{2}gt^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set $y = 0$ at impact",
          "workingLatex": "0 = h - \\tfrac{1}{2}gt^2",
          "explanation": "When the stone hits the ground, vertical displacement from the launch point is $-h$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $t$",
          "workingLatex": "\\tfrac{1}{2}gt^2 = 80",
          "explanation": "$\\tfrac{1}{2}gt^2 = 80$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $t$",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{160}{9.8}} = 4.04\\,\\text{s}",
          "explanation": "$t = 4.04\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note horizontal motion",
          "workingLatex": "x = 10t = 40.41\\,\\text{m}",
          "explanation": "In this time the stone travels $40.41\\,\\text{m}$ horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 4.04\\,\\text{s}",
          "explanation": "Time to reach the ground: $4.04\\,\\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 4.04\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "horizontal-projection",
      "time-of-flight",
      "cliff"
    ],
    "questionText": "A stone is projected horizontally with speed $15\\,\\text{m s}^{-1}$ from the top of a cliff $45\\,\\text{m}$ high. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the time taken to reach the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^2",
          "explanation": "Taking the ground as $y = 0$, the vertical displacement is $h - \\tfrac{1}{2}gt^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set $y = 0$ at impact",
          "workingLatex": "0 = h - \\tfrac{1}{2}gt^2",
          "explanation": "When the stone hits the ground, vertical displacement from the launch point is $-h$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $t$",
          "workingLatex": "\\tfrac{1}{2}gt^2 = 45",
          "explanation": "$\\tfrac{1}{2}gt^2 = 45$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $t$",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{90}{9.8}} = 3.03\\,\\text{s}",
          "explanation": "$t = 3.03\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note horizontal motion",
          "workingLatex": "x = 15t = 45.46\\,\\text{m}",
          "explanation": "In this time the stone travels $45.46\\,\\text{m}$ horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 3.03\\,\\text{s}",
          "explanation": "Time to reach the ground: $3.03\\,\\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 3.03\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "horizontal-projection",
      "time-of-flight",
      "cliff"
    ],
    "questionText": "A stone is projected horizontally with speed $8\\,\\text{m s}^{-1}$ from the top of a cliff $125\\,\\text{m}$ high. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the time taken to reach the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^2",
          "explanation": "Taking the ground as $y = 0$, the vertical displacement is $h - \\tfrac{1}{2}gt^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set $y = 0$ at impact",
          "workingLatex": "0 = h - \\tfrac{1}{2}gt^2",
          "explanation": "When the stone hits the ground, vertical displacement from the launch point is $-h$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $t$",
          "workingLatex": "\\tfrac{1}{2}gt^2 = 125",
          "explanation": "$\\tfrac{1}{2}gt^2 = 125$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $t$",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{250}{9.8}} = 5.05\\,\\text{s}",
          "explanation": "$t = 5.05\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note horizontal motion",
          "workingLatex": "x = 8t = 40.41\\,\\text{m}",
          "explanation": "In this time the stone travels $40.41\\,\\text{m}$ horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 5.05\\,\\text{s}",
          "explanation": "Time to reach the ground: $5.05\\,\\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 5.05\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "horizontal-projection",
      "time-of-flight",
      "cliff"
    ],
    "questionText": "A stone is projected horizontally with speed $20\\,\\text{m s}^{-1}$ from the top of a cliff $20\\,\\text{m}$ high. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the time taken to reach the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^2",
          "explanation": "Taking the ground as $y = 0$, the vertical displacement is $h - \\tfrac{1}{2}gt^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set $y = 0$ at impact",
          "workingLatex": "0 = h - \\tfrac{1}{2}gt^2",
          "explanation": "When the stone hits the ground, vertical displacement from the launch point is $-h$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $t$",
          "workingLatex": "\\tfrac{1}{2}gt^2 = 20",
          "explanation": "$\\tfrac{1}{2}gt^2 = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $t$",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{40}{9.8}} = 2.02\\,\\text{s}",
          "explanation": "$t = 2.02\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note horizontal motion",
          "workingLatex": "x = 20t = 40.41\\,\\text{m}",
          "explanation": "In this time the stone travels $40.41\\,\\text{m}$ horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 2.02\\,\\text{s}",
          "explanation": "Time to reach the ground: $2.02\\,\\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 2.02\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "horizontal-projection",
      "range"
    ],
    "questionText": "A ball is projected horizontally at $12\\,\\text{m s}^{-1}$ from a platform $50\\,\\text{m}$ above level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal distance travelled before hitting the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find time to reach the ground",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{100}{9.8}} = 3.19\\,\\text{s}",
          "explanation": "Vertical SUVAT gives $t = 3.19\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal speed is constant",
          "workingLatex": "u_x = 12\\,\\text{m s}^{-1}",
          "explanation": "No horizontal acceleration, so speed stays at the launch value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate horizontal distance",
          "workingLatex": "R = u_x \\times t = 12 \\times 3.19",
          "explanation": "Range equals horizontal speed multiplied by flight time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "R = 38.33\\,\\text{m}",
          "explanation": "Horizontal distance: $38.33\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{The ball lands 38.33 m from the base of the platform}",
          "explanation": "This is the horizontal range from the point directly below the launch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 38.33\\,\\text{m}",
          "explanation": "Range $= 38.33\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 38.33\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "horizontal-projection",
      "range"
    ],
    "questionText": "A ball is projected horizontally at $20\\,\\text{m s}^{-1}$ from a platform $80\\,\\text{m}$ above level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal distance travelled before hitting the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find time to reach the ground",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{160}{9.8}} = 4.04\\,\\text{s}",
          "explanation": "Vertical SUVAT gives $t = 4.04\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal speed is constant",
          "workingLatex": "u_x = 20\\,\\text{m s}^{-1}",
          "explanation": "No horizontal acceleration, so speed stays at the launch value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate horizontal distance",
          "workingLatex": "R = u_x \\times t = 20 \\times 4.04",
          "explanation": "Range equals horizontal speed multiplied by flight time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "R = 80.81\\,\\text{m}",
          "explanation": "Horizontal distance: $80.81\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{The ball lands 80.81 m from the base of the platform}",
          "explanation": "This is the horizontal range from the point directly below the launch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 80.81\\,\\text{m}",
          "explanation": "Range $= 80.81\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 80.81\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "horizontal-projection",
      "range"
    ],
    "questionText": "A ball is projected horizontally at $25\\,\\text{m s}^{-1}$ from a platform $45\\,\\text{m}$ above level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal distance travelled before hitting the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find time to reach the ground",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{90}{9.8}} = 3.03\\,\\text{s}",
          "explanation": "Vertical SUVAT gives $t = 3.03\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal speed is constant",
          "workingLatex": "u_x = 25\\,\\text{m s}^{-1}",
          "explanation": "No horizontal acceleration, so speed stays at the launch value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate horizontal distance",
          "workingLatex": "R = u_x \\times t = 25 \\times 3.03",
          "explanation": "Range equals horizontal speed multiplied by flight time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "R = 75.76\\,\\text{m}",
          "explanation": "Horizontal distance: $75.76\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{The ball lands 75.76 m from the base of the platform}",
          "explanation": "This is the horizontal range from the point directly below the launch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 75.76\\,\\text{m}",
          "explanation": "Range $= 75.76\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 75.76\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "horizontal-projection",
      "range"
    ],
    "questionText": "A ball is projected horizontally at $30\\,\\text{m s}^{-1}$ from a platform $20\\,\\text{m}$ above level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal distance travelled before hitting the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find time to reach the ground",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{40}{9.8}} = 2.02\\,\\text{s}",
          "explanation": "Vertical SUVAT gives $t = 2.02\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal speed is constant",
          "workingLatex": "u_x = 30\\,\\text{m s}^{-1}",
          "explanation": "No horizontal acceleration, so speed stays at the launch value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate horizontal distance",
          "workingLatex": "R = u_x \\times t = 30 \\times 2.02",
          "explanation": "Range equals horizontal speed multiplied by flight time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "R = 60.61\\,\\text{m}",
          "explanation": "Horizontal distance: $60.61\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{The ball lands 60.61 m from the base of the platform}",
          "explanation": "This is the horizontal range from the point directly below the launch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 60.61\\,\\text{m}",
          "explanation": "Range $= 60.61\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 60.61\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "time-to-max-height",
      "vertical-motion"
    ],
    "questionText": "A particle is projected with speed $24\\,\\text{m s}^{-1}$ at $40°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the time taken to reach the greatest height.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical initial speed",
          "workingLatex": "u_y = 24\\sin 40° = 15.43\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 15.43\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At greatest height $v_y = 0$",
          "workingLatex": "v_y = u_y - gt = 0",
          "explanation": "Vertical velocity becomes zero at the top of the trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for $t$",
          "workingLatex": "t = \\dfrac{u_y}{g} = \\dfrac{15.43}{9.8}",
          "explanation": "Rearranging gives time to maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "t = 1.57\\,\\text{s}",
          "explanation": "$t = 1.57\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note symmetry",
          "workingLatex": "\\text{Total flight time} = 2t = 3.15\\,\\text{s}",
          "explanation": "For launch and landing at the same height, total time is twice this value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 1.57\\,\\text{s}",
          "explanation": "Time to greatest height: $1.57\\,\\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 1.57\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "max-height",
      "vertical-motion"
    ],
    "questionText": "A projectile is launched with speed $30\\,\\text{m s}^{-1}$ at $53°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the greatest height reached.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the max height formula",
          "workingLatex": "H = \\dfrac{u_y^2}{2g} = \\dfrac{u^2\\sin^2\\alpha}{2g}",
          "explanation": "At the top, vertical kinetic energy is converted to gravitational potential.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find $u_y$",
          "workingLatex": "u_y = 30\\sin 53° = 23.96\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 23.96\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "H = \\dfrac{(23.96)^2}{2 \\times 9.8}",
          "explanation": "Square the vertical component and divide by $2g$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "H = 29.29\\,\\text{m}",
          "explanation": "Greatest height: $29.29\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative via SUVAT",
          "workingLatex": "v_y^2 = u_y^2 - 2gH \\Rightarrow H = 29.29\\,\\text{m}",
          "explanation": "Using $v_y = 0$ at the top gives the same result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H = 29.29\\,\\text{m}",
          "explanation": "Maximum height $= 29.29\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H = 29.29\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "time-of-flight",
      "max-height",
      "range",
      "angled-projection"
    ],
    "questionText": "A particle is projected from level ground with speed $20\\,\\text{m s}^{-1}$ at $30°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find (a) the time of flight, (b) the greatest height, and (c) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity",
          "workingLatex": "u_x = 17.32\\,\\text{m s}^{-1}, \\quad u_y = 10\\,\\text{m s}^{-1}",
          "explanation": "Horizontal: $17.32\\,\\text{m s}^{-1}$; vertical: $10\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Time to go up equals time to come down; total time is $2u_y/g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate time of flight",
          "workingLatex": "T = \\dfrac{2 \\times 10}{9.8} = 2.04\\,\\text{s}",
          "explanation": "(a) $T = 2.04\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g}",
          "explanation": "Use vertical SUVAT with $v_y = 0$ at the top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate greatest height",
          "workingLatex": "H = \\dfrac{(10)^2}{2 \\times 9.8} = 5.10\\,\\text{m}",
          "explanation": "(b) $H = 5.10\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): horizontal range",
          "workingLatex": "R = u_x \\times T",
          "explanation": "Range equals horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate range",
          "workingLatex": "R = 17.32 \\times 2.04 = 35.35\\,\\text{m}",
          "explanation": "(c) $R = 35.35\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g} = 35.35\\,\\text{m}",
          "explanation": "Using $R = u^2\\sin 2\\alpha / g$ confirms $35.35\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "T = 2.04\\,\\text{s}, \\quad H = 5.10\\,\\text{m}, \\quad R = 35.35\\,\\text{m}",
          "explanation": "All three key projectile quantities found from resolving and SUVAT.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $T = 2.04\\,\\text{s}$; (b) $H = 5.10\\,\\text{m}$; (c) $R = 35.35\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "time-of-flight",
      "max-height",
      "range",
      "angled-projection"
    ],
    "questionText": "A particle is projected from level ground with speed $25\\,\\text{m s}^{-1}$ at $45°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find (a) the time of flight, (b) the greatest height, and (c) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity",
          "workingLatex": "u_x = 17.68\\,\\text{m s}^{-1}, \\quad u_y = 17.68\\,\\text{m s}^{-1}",
          "explanation": "Horizontal: $17.68\\,\\text{m s}^{-1}$; vertical: $17.68\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Time to go up equals time to come down; total time is $2u_y/g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate time of flight",
          "workingLatex": "T = \\dfrac{2 \\times 17.68}{9.8} = 3.61\\,\\text{s}",
          "explanation": "(a) $T = 3.61\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g}",
          "explanation": "Use vertical SUVAT with $v_y = 0$ at the top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate greatest height",
          "workingLatex": "H = \\dfrac{(17.68)^2}{2 \\times 9.8} = 15.94\\,\\text{m}",
          "explanation": "(b) $H = 15.94\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): horizontal range",
          "workingLatex": "R = u_x \\times T",
          "explanation": "Range equals horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate range",
          "workingLatex": "R = 17.68 \\times 3.61 = 63.78\\,\\text{m}",
          "explanation": "(c) $R = 63.78\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g} = 63.78\\,\\text{m}",
          "explanation": "Using $R = u^2\\sin 2\\alpha / g$ confirms $63.78\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "T = 3.61\\,\\text{s}, \\quad H = 15.94\\,\\text{m}, \\quad R = 63.78\\,\\text{m}",
          "explanation": "All three key projectile quantities found from resolving and SUVAT.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $T = 3.61\\,\\text{s}$; (b) $H = 15.94\\,\\text{m}$; (c) $R = 63.78\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "time-of-flight",
      "max-height",
      "range",
      "angled-projection"
    ],
    "questionText": "A particle is projected from level ground with speed $15\\,\\text{m s}^{-1}$ at $60°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find (a) the time of flight, (b) the greatest height, and (c) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity",
          "workingLatex": "u_x = 7.50\\,\\text{m s}^{-1}, \\quad u_y = 12.99\\,\\text{m s}^{-1}",
          "explanation": "Horizontal: $7.50\\,\\text{m s}^{-1}$; vertical: $12.99\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Time to go up equals time to come down; total time is $2u_y/g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate time of flight",
          "workingLatex": "T = \\dfrac{2 \\times 12.99}{9.8} = 2.65\\,\\text{s}",
          "explanation": "(a) $T = 2.65\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g}",
          "explanation": "Use vertical SUVAT with $v_y = 0$ at the top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate greatest height",
          "workingLatex": "H = \\dfrac{(12.99)^2}{2 \\times 9.8} = 8.61\\,\\text{m}",
          "explanation": "(b) $H = 8.61\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): horizontal range",
          "workingLatex": "R = u_x \\times T",
          "explanation": "Range equals horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate range",
          "workingLatex": "R = 7.50 \\times 2.65 = 19.88\\,\\text{m}",
          "explanation": "(c) $R = 19.88\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g} = 19.88\\,\\text{m}",
          "explanation": "Using $R = u^2\\sin 2\\alpha / g$ confirms $19.88\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "T = 2.65\\,\\text{s}, \\quad H = 8.61\\,\\text{m}, \\quad R = 19.88\\,\\text{m}",
          "explanation": "All three key projectile quantities found from resolving and SUVAT.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $T = 2.65\\,\\text{s}$; (b) $H = 8.61\\,\\text{m}$; (c) $R = 19.88\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "time-of-flight",
      "max-height",
      "range",
      "angled-projection"
    ],
    "questionText": "A particle is projected from level ground with speed $30\\,\\text{m s}^{-1}$ at $40°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find (a) the time of flight, (b) the greatest height, and (c) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity",
          "workingLatex": "u_x = 22.98\\,\\text{m s}^{-1}, \\quad u_y = 19.28\\,\\text{m s}^{-1}",
          "explanation": "Horizontal: $22.98\\,\\text{m s}^{-1}$; vertical: $19.28\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Time to go up equals time to come down; total time is $2u_y/g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate time of flight",
          "workingLatex": "T = \\dfrac{2 \\times 19.28}{9.8} = 3.94\\,\\text{s}",
          "explanation": "(a) $T = 3.94\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g}",
          "explanation": "Use vertical SUVAT with $v_y = 0$ at the top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate greatest height",
          "workingLatex": "H = \\dfrac{(19.28)^2}{2 \\times 9.8} = 18.97\\,\\text{m}",
          "explanation": "(b) $H = 18.97\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): horizontal range",
          "workingLatex": "R = u_x \\times T",
          "explanation": "Range equals horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate range",
          "workingLatex": "R = 22.98 \\times 3.94 = 90.44\\,\\text{m}",
          "explanation": "(c) $R = 90.44\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g} = 90.44\\,\\text{m}",
          "explanation": "Using $R = u^2\\sin 2\\alpha / g$ confirms $90.44\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "T = 3.94\\,\\text{s}, \\quad H = 18.97\\,\\text{m}, \\quad R = 90.44\\,\\text{m}",
          "explanation": "All three key projectile quantities found from resolving and SUVAT.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $T = 3.94\\,\\text{s}$; (b) $H = 18.97\\,\\text{m}$; (c) $R = 90.44\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "time-of-flight",
      "max-height",
      "range",
      "angled-projection"
    ],
    "questionText": "A particle is projected from level ground with speed $18\\,\\text{m s}^{-1}$ at $50°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find (a) the time of flight, (b) the greatest height, and (c) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity",
          "workingLatex": "u_x = 11.57\\,\\text{m s}^{-1}, \\quad u_y = 13.79\\,\\text{m s}^{-1}",
          "explanation": "Horizontal: $11.57\\,\\text{m s}^{-1}$; vertical: $13.79\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Time to go up equals time to come down; total time is $2u_y/g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate time of flight",
          "workingLatex": "T = \\dfrac{2 \\times 13.79}{9.8} = 2.81\\,\\text{s}",
          "explanation": "(a) $T = 2.81\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g}",
          "explanation": "Use vertical SUVAT with $v_y = 0$ at the top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate greatest height",
          "workingLatex": "H = \\dfrac{(13.79)^2}{2 \\times 9.8} = 9.70\\,\\text{m}",
          "explanation": "(b) $H = 9.70\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): horizontal range",
          "workingLatex": "R = u_x \\times T",
          "explanation": "Range equals horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate range",
          "workingLatex": "R = 11.57 \\times 2.81 = 32.56\\,\\text{m}",
          "explanation": "(c) $R = 32.56\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g} = 32.56\\,\\text{m}",
          "explanation": "Using $R = u^2\\sin 2\\alpha / g$ confirms $32.56\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "T = 2.81\\,\\text{s}, \\quad H = 9.70\\,\\text{m}, \\quad R = 32.56\\,\\text{m}",
          "explanation": "All three key projectile quantities found from resolving and SUVAT.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $T = 2.81\\,\\text{s}$; (b) $H = 9.70\\,\\text{m}$; (c) $R = 32.56\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "time-of-flight",
      "max-height",
      "range",
      "angled-projection"
    ],
    "questionText": "A particle is projected from level ground with speed $35\\,\\text{m s}^{-1}$ at $25°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find (a) the time of flight, (b) the greatest height, and (c) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity",
          "workingLatex": "u_x = 31.72\\,\\text{m s}^{-1}, \\quad u_y = 14.79\\,\\text{m s}^{-1}",
          "explanation": "Horizontal: $31.72\\,\\text{m s}^{-1}$; vertical: $14.79\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Time to go up equals time to come down; total time is $2u_y/g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate time of flight",
          "workingLatex": "T = \\dfrac{2 \\times 14.79}{9.8} = 3.02\\,\\text{s}",
          "explanation": "(a) $T = 3.02\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g}",
          "explanation": "Use vertical SUVAT with $v_y = 0$ at the top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate greatest height",
          "workingLatex": "H = \\dfrac{(14.79)^2}{2 \\times 9.8} = 11.16\\,\\text{m}",
          "explanation": "(b) $H = 11.16\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): horizontal range",
          "workingLatex": "R = u_x \\times T",
          "explanation": "Range equals horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate range",
          "workingLatex": "R = 31.72 \\times 3.02 = 95.76\\,\\text{m}",
          "explanation": "(c) $R = 95.76\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g} = 95.76\\,\\text{m}",
          "explanation": "Using $R = u^2\\sin 2\\alpha / g$ confirms $95.76\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "T = 3.02\\,\\text{s}, \\quad H = 11.16\\,\\text{m}, \\quad R = 95.76\\,\\text{m}",
          "explanation": "All three key projectile quantities found from resolving and SUVAT.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $T = 3.02\\,\\text{s}$; (b) $H = 11.16\\,\\text{m}$; (c) $R = 95.76\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "time-of-flight",
      "max-height",
      "range",
      "angled-projection"
    ],
    "questionText": "A particle is projected from level ground with speed $22\\,\\text{m s}^{-1}$ at $70°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find (a) the time of flight, (b) the greatest height, and (c) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity",
          "workingLatex": "u_x = 7.52\\,\\text{m s}^{-1}, \\quad u_y = 20.67\\,\\text{m s}^{-1}",
          "explanation": "Horizontal: $7.52\\,\\text{m s}^{-1}$; vertical: $20.67\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Time to go up equals time to come down; total time is $2u_y/g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate time of flight",
          "workingLatex": "T = \\dfrac{2 \\times 20.67}{9.8} = 4.22\\,\\text{s}",
          "explanation": "(a) $T = 4.22\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g}",
          "explanation": "Use vertical SUVAT with $v_y = 0$ at the top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate greatest height",
          "workingLatex": "H = \\dfrac{(20.67)^2}{2 \\times 9.8} = 21.81\\,\\text{m}",
          "explanation": "(b) $H = 21.81\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): horizontal range",
          "workingLatex": "R = u_x \\times T",
          "explanation": "Range equals horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate range",
          "workingLatex": "R = 7.52 \\times 4.22 = 31.75\\,\\text{m}",
          "explanation": "(c) $R = 31.75\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g} = 31.75\\,\\text{m}",
          "explanation": "Using $R = u^2\\sin 2\\alpha / g$ confirms $31.75\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "T = 4.22\\,\\text{s}, \\quad H = 21.81\\,\\text{m}, \\quad R = 31.75\\,\\text{m}",
          "explanation": "All three key projectile quantities found from resolving and SUVAT.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $T = 4.22\\,\\text{s}$; (b) $H = 21.81\\,\\text{m}$; (c) $R = 31.75\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": [
      "time-of-flight",
      "max-height",
      "range",
      "angled-projection"
    ],
    "questionText": "A particle is projected from level ground with speed $40\\,\\text{m s}^{-1}$ at $35°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find (a) the time of flight, (b) the greatest height, and (c) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity",
          "workingLatex": "u_x = 32.77\\,\\text{m s}^{-1}, \\quad u_y = 22.94\\,\\text{m s}^{-1}",
          "explanation": "Horizontal: $32.77\\,\\text{m s}^{-1}$; vertical: $22.94\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Time to go up equals time to come down; total time is $2u_y/g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate time of flight",
          "workingLatex": "T = \\dfrac{2 \\times 22.94}{9.8} = 4.68\\,\\text{s}",
          "explanation": "(a) $T = 4.68\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g}",
          "explanation": "Use vertical SUVAT with $v_y = 0$ at the top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate greatest height",
          "workingLatex": "H = \\dfrac{(22.94)^2}{2 \\times 9.8} = 26.86\\,\\text{m}",
          "explanation": "(b) $H = 26.86\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): horizontal range",
          "workingLatex": "R = u_x \\times T",
          "explanation": "Range equals horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate range",
          "workingLatex": "R = 32.77 \\times 4.68 = 153.42\\,\\text{m}",
          "explanation": "(c) $R = 153.42\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g} = 153.42\\,\\text{m}",
          "explanation": "Using $R = u^2\\sin 2\\alpha / g$ confirms $153.42\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Summarise",
          "workingLatex": "T = 4.68\\,\\text{s}, \\quad H = 26.86\\,\\text{m}, \\quad R = 153.42\\,\\text{m}",
          "explanation": "All three key projectile quantities found from resolving and SUVAT.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $T = 4.68\\,\\text{s}$; (b) $H = 26.86\\,\\text{m}$; (c) $R = 153.42\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula",
      "find-speed"
    ],
    "questionText": "A particle is projected from level ground at $30°$ above the horizontal and lands $40\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the initial speed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For launch from level ground, range depends on $u$, $\\alpha$, and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute known values",
          "workingLatex": "40 = \\dfrac{u^2 \\sin 60°}{9.8}",
          "explanation": "$R = 40\\,\\text{m}$, $\\alpha = 30°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{40 \\times 9.8}{\\sin 60°} = 452.6",
          "explanation": "$u^2 = 452.6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "u = 21.28\\,\\text{m s}^{-1}",
          "explanation": "$u = 21.28\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the range",
          "workingLatex": "R = \\dfrac{21.28^2 \\times \\sin 60°}{9.8} = 40\\,\\text{m}",
          "explanation": "Substituting back confirms the given range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $u > 0$",
          "workingLatex": "u = 21.28 > 0",
          "explanation": "Speed must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note two angles give same range",
          "workingLatex": "\\alpha = 30° \\text{ and } 60° \\text{ give the same range for fixed } u",
          "explanation": "Complementary angles produce the same horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "u = 21.28\\,\\text{m s}^{-1}",
          "explanation": "Initial speed: $21.28\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method summary",
          "workingLatex": "\\text{Range formula } \\Rightarrow \\text{ solve for } u",
          "explanation": "When range and angle are known, rearrange $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u = 21.28\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula",
      "find-speed"
    ],
    "questionText": "A particle is projected from level ground at $45°$ above the horizontal and lands $60\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the initial speed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For launch from level ground, range depends on $u$, $\\alpha$, and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute known values",
          "workingLatex": "60 = \\dfrac{u^2 \\sin 90°}{9.8}",
          "explanation": "$R = 60\\,\\text{m}$, $\\alpha = 45°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{60 \\times 9.8}{\\sin 90°} = 588",
          "explanation": "$u^2 = 588$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "u = 24.25\\,\\text{m s}^{-1}",
          "explanation": "$u = 24.25\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the range",
          "workingLatex": "R = \\dfrac{24.25^2 \\times \\sin 90°}{9.8} = 60\\,\\text{m}",
          "explanation": "Substituting back confirms the given range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $u > 0$",
          "workingLatex": "u = 24.25 > 0",
          "explanation": "Speed must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note two angles give same range",
          "workingLatex": "\\alpha = 45° \\text{ and } 45° \\text{ give the same range for fixed } u",
          "explanation": "Complementary angles produce the same horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "u = 24.25\\,\\text{m s}^{-1}",
          "explanation": "Initial speed: $24.25\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method summary",
          "workingLatex": "\\text{Range formula } \\Rightarrow \\text{ solve for } u",
          "explanation": "When range and angle are known, rearrange $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u = 24.25\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula",
      "find-speed"
    ],
    "questionText": "A particle is projected from level ground at $60°$ above the horizontal and lands $25\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the initial speed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For launch from level ground, range depends on $u$, $\\alpha$, and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute known values",
          "workingLatex": "25 = \\dfrac{u^2 \\sin 120°}{9.8}",
          "explanation": "$R = 25\\,\\text{m}$, $\\alpha = 60°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{25 \\times 9.8}{\\sin 120°} = 282.9",
          "explanation": "$u^2 = 282.9$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "u = 16.82\\,\\text{m s}^{-1}",
          "explanation": "$u = 16.82\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the range",
          "workingLatex": "R = \\dfrac{16.82^2 \\times \\sin 120°}{9.8} = 25\\,\\text{m}",
          "explanation": "Substituting back confirms the given range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $u > 0$",
          "workingLatex": "u = 16.82 > 0",
          "explanation": "Speed must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note two angles give same range",
          "workingLatex": "\\alpha = 60° \\text{ and } 30° \\text{ give the same range for fixed } u",
          "explanation": "Complementary angles produce the same horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "u = 16.82\\,\\text{m s}^{-1}",
          "explanation": "Initial speed: $16.82\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method summary",
          "workingLatex": "\\text{Range formula } \\Rightarrow \\text{ solve for } u",
          "explanation": "When range and angle are known, rearrange $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u = 16.82\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula",
      "find-speed"
    ],
    "questionText": "A particle is projected from level ground at $25°$ above the horizontal and lands $80\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the initial speed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For launch from level ground, range depends on $u$, $\\alpha$, and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute known values",
          "workingLatex": "80 = \\dfrac{u^2 \\sin 50°}{9.8}",
          "explanation": "$R = 80\\,\\text{m}$, $\\alpha = 25°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{80 \\times 9.8}{\\sin 50°} = 1023.4",
          "explanation": "$u^2 = 1023.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "u = 31.99\\,\\text{m s}^{-1}",
          "explanation": "$u = 31.99\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the range",
          "workingLatex": "R = \\dfrac{31.99^2 \\times \\sin 50°}{9.8} = 80\\,\\text{m}",
          "explanation": "Substituting back confirms the given range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $u > 0$",
          "workingLatex": "u = 31.99 > 0",
          "explanation": "Speed must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note two angles give same range",
          "workingLatex": "\\alpha = 25° \\text{ and } 65° \\text{ give the same range for fixed } u",
          "explanation": "Complementary angles produce the same horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "u = 31.99\\,\\text{m s}^{-1}",
          "explanation": "Initial speed: $31.99\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method summary",
          "workingLatex": "\\text{Range formula } \\Rightarrow \\text{ solve for } u",
          "explanation": "When range and angle are known, rearrange $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u = 31.99\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula",
      "find-speed"
    ],
    "questionText": "A particle is projected from level ground at $40°$ above the horizontal and lands $50\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the initial speed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For launch from level ground, range depends on $u$, $\\alpha$, and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute known values",
          "workingLatex": "50 = \\dfrac{u^2 \\sin 80°}{9.8}",
          "explanation": "$R = 50\\,\\text{m}$, $\\alpha = 40°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{50 \\times 9.8}{\\sin 80°} = 497.6",
          "explanation": "$u^2 = 497.6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "u = 22.31\\,\\text{m s}^{-1}",
          "explanation": "$u = 22.31\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the range",
          "workingLatex": "R = \\dfrac{22.31^2 \\times \\sin 80°}{9.8} = 50\\,\\text{m}",
          "explanation": "Substituting back confirms the given range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $u > 0$",
          "workingLatex": "u = 22.31 > 0",
          "explanation": "Speed must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note two angles give same range",
          "workingLatex": "\\alpha = 40° \\text{ and } 50° \\text{ give the same range for fixed } u",
          "explanation": "Complementary angles produce the same horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "u = 22.31\\,\\text{m s}^{-1}",
          "explanation": "Initial speed: $22.31\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method summary",
          "workingLatex": "\\text{Range formula } \\Rightarrow \\text{ solve for } u",
          "explanation": "When range and angle are known, rearrange $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u = 22.31\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula",
      "find-speed"
    ],
    "questionText": "A particle is projected from level ground at $50°$ above the horizontal and lands $35\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the initial speed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For launch from level ground, range depends on $u$, $\\alpha$, and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute known values",
          "workingLatex": "35 = \\dfrac{u^2 \\sin 100°}{9.8}",
          "explanation": "$R = 35\\,\\text{m}$, $\\alpha = 50°$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{35 \\times 9.8}{\\sin 100°} = 348.3",
          "explanation": "$u^2 = 348.3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "u = 18.66\\,\\text{m s}^{-1}",
          "explanation": "$u = 18.66\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify the range",
          "workingLatex": "R = \\dfrac{18.66^2 \\times \\sin 100°}{9.8} = 35\\,\\text{m}",
          "explanation": "Substituting back confirms the given range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $u > 0$",
          "workingLatex": "u = 18.66 > 0",
          "explanation": "Speed must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note two angles give same range",
          "workingLatex": "\\alpha = 50° \\text{ and } 40° \\text{ give the same range for fixed } u",
          "explanation": "Complementary angles produce the same horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "u = 18.66\\,\\text{m s}^{-1}",
          "explanation": "Initial speed: $18.66\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Method summary",
          "workingLatex": "\\text{Range formula } \\Rightarrow \\text{ solve for } u",
          "explanation": "When range and angle are known, rearrange $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u = 18.66\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trajectory",
      "height-at-distance"
    ],
    "questionText": "A particle is projected with speed $20\\,\\text{m s}^{-1}$ at $30°$ above the horizontal from level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the height of the particle when it is $15\\,\\text{m}$ horizontally from the launch point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Horizontal motion",
          "workingLatex": "u_x = 17.32\\,\\text{m s}^{-1}",
          "explanation": "Horizontal speed: $17.32\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find time to reach $x = x_target$",
          "workingLatex": "t = \\dfrac{x}{u_x} = \\dfrac{15}{17.32} = 0.87\\,\\text{s}",
          "explanation": "When $x = 15\\,\\text{m}$, $t = 0.87\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion equation",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^2",
          "explanation": "Substitute the time into the vertical displacement formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "y = 10 \\times 0.87 - \\tfrac{1}{2} \\times 9.8 \\times (0.87)^2",
          "explanation": "$u_y = 10\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "y = 4.99\\,\\text{m}",
          "explanation": "Height at $x = 15\\,\\text{m}$: $4.99\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $y \\ge 0$",
          "workingLatex": "y = 4.99 \\ge 0",
          "explanation": "The particle is still above ground at this point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative: trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "The Cartesian equation of the path gives the same height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{At 15 m horizontally, height is 4.99 m}",
          "explanation": "This is a point on the parabolic trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "y = 4.99\\,\\text{m}",
          "explanation": "Height $= 4.99\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 4.99\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trajectory",
      "height-at-distance"
    ],
    "questionText": "A particle is projected with speed $25\\,\\text{m s}^{-1}$ at $45°$ above the horizontal from level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the height of the particle when it is $20\\,\\text{m}$ horizontally from the launch point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Horizontal motion",
          "workingLatex": "u_x = 17.68\\,\\text{m s}^{-1}",
          "explanation": "Horizontal speed: $17.68\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find time to reach $x = x_target$",
          "workingLatex": "t = \\dfrac{x}{u_x} = \\dfrac{20}{17.68} = 1.13\\,\\text{s}",
          "explanation": "When $x = 20\\,\\text{m}$, $t = 1.13\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion equation",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^2",
          "explanation": "Substitute the time into the vertical displacement formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "y = 17.68 \\times 1.13 - \\tfrac{1}{2} \\times 9.8 \\times (1.13)^2",
          "explanation": "$u_y = 17.68\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "y = 13.73\\,\\text{m}",
          "explanation": "Height at $x = 20\\,\\text{m}$: $13.73\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $y \\ge 0$",
          "workingLatex": "y = 13.73 \\ge 0",
          "explanation": "The particle is still above ground at this point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative: trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "The Cartesian equation of the path gives the same height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{At 20 m horizontally, height is 13.73 m}",
          "explanation": "This is a point on the parabolic trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "y = 13.73\\,\\text{m}",
          "explanation": "Height $= 13.73\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 13.73\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trajectory",
      "height-at-distance"
    ],
    "questionText": "A particle is projected with speed $30\\,\\text{m s}^{-1}$ at $40°$ above the horizontal from level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the height of the particle when it is $25\\,\\text{m}$ horizontally from the launch point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Horizontal motion",
          "workingLatex": "u_x = 22.98\\,\\text{m s}^{-1}",
          "explanation": "Horizontal speed: $22.98\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find time to reach $x = x_target$",
          "workingLatex": "t = \\dfrac{x}{u_x} = \\dfrac{25}{22.98} = 1.09\\,\\text{s}",
          "explanation": "When $x = 25\\,\\text{m}$, $t = 1.09\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion equation",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^2",
          "explanation": "Substitute the time into the vertical displacement formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "y = 19.28 \\times 1.09 - \\tfrac{1}{2} \\times 9.8 \\times (1.09)^2",
          "explanation": "$u_y = 19.28\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "y = 15.18\\,\\text{m}",
          "explanation": "Height at $x = 25\\,\\text{m}$: $15.18\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $y \\ge 0$",
          "workingLatex": "y = 15.18 \\ge 0",
          "explanation": "The particle is still above ground at this point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative: trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "The Cartesian equation of the path gives the same height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{At 25 m horizontally, height is 15.18 m}",
          "explanation": "This is a point on the parabolic trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "y = 15.18\\,\\text{m}",
          "explanation": "Height $= 15.18\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 15.18\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "trajectory",
      "height-at-distance"
    ],
    "questionText": "A particle is projected with speed $18\\,\\text{m s}^{-1}$ at $60°$ above the horizontal from level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the height of the particle when it is $10\\,\\text{m}$ horizontally from the launch point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Horizontal motion",
          "workingLatex": "u_x = 9\\,\\text{m s}^{-1}",
          "explanation": "Horizontal speed: $9\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find time to reach $x = x_target$",
          "workingLatex": "t = \\dfrac{x}{u_x} = \\dfrac{10}{9} = 1.11\\,\\text{s}",
          "explanation": "When $x = 10\\,\\text{m}$, $t = 1.11\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion equation",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^2",
          "explanation": "Substitute the time into the vertical displacement formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "y = 15.59 \\times 1.11 - \\tfrac{1}{2} \\times 9.8 \\times (1.11)^2",
          "explanation": "$u_y = 15.59\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "y = 11.27\\,\\text{m}",
          "explanation": "Height at $x = 10\\,\\text{m}$: $11.27\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check $y \\ge 0$",
          "workingLatex": "y = 11.27 \\ge 0",
          "explanation": "The particle is still above ground at this point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative: trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "The Cartesian equation of the path gives the same height.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret",
          "workingLatex": "\\text{At 10 m horizontally, height is 11.27 m}",
          "explanation": "This is a point on the parabolic trajectory.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "y = 11.27\\,\\text{m}",
          "explanation": "Height $= 11.27\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 11.27\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "max-height",
      "speed",
      "components"
    ],
    "questionText": "A particle is projected with speed $24\\,\\text{m s}^{-1}$ at $40°$ above the horizontal. Find the speed of the particle at its greatest height.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "At greatest height",
          "workingLatex": "v_y = 0",
          "explanation": "The vertical component of velocity is zero at the top of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal speed is unchanged",
          "workingLatex": "v_x = u_x = u\\cos\\alpha",
          "explanation": "No horizontal acceleration means $v_x$ stays constant throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Speed at the top",
          "workingLatex": "v = v_x = u\\cos\\alpha",
          "explanation": "When $v_y = 0$, the speed equals the horizontal component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "v = 24\\cos 40°",
          "explanation": "$u = 24\\,\\text{m s}^{-1}$, $\\alpha = 40°$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "v = 18.39\\,\\text{m s}^{-1}",
          "explanation": "Speed at greatest height: $18.39\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with launch speed",
          "workingLatex": "v = 18.39 < u = 24",
          "explanation": "Speed is less than at launch because the vertical component has been lost.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Energy interpretation",
          "workingLatex": "\\text{Vertical KE converted to gravitational PE}",
          "explanation": "Kinetic energy decreases as the particle rises.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note direction",
          "workingLatex": "\\text{Velocity is purely horizontal at the top}",
          "explanation": "The velocity vector points horizontally at the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v = 18.39\\,\\text{m s}^{-1}",
          "explanation": "Speed at greatest height $= 18.39\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 18.39\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "max-height",
      "speed",
      "components"
    ],
    "questionText": "A particle is projected with speed $30\\,\\text{m s}^{-1}$ at $53°$ above the horizontal. Find the speed of the particle at its greatest height.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "At greatest height",
          "workingLatex": "v_y = 0",
          "explanation": "The vertical component of velocity is zero at the top of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal speed is unchanged",
          "workingLatex": "v_x = u_x = u\\cos\\alpha",
          "explanation": "No horizontal acceleration means $v_x$ stays constant throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Speed at the top",
          "workingLatex": "v = v_x = u\\cos\\alpha",
          "explanation": "When $v_y = 0$, the speed equals the horizontal component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "v = 30\\cos 53°",
          "explanation": "$u = 30\\,\\text{m s}^{-1}$, $\\alpha = 53°$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "v = 18.05\\,\\text{m s}^{-1}",
          "explanation": "Speed at greatest height: $18.05\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with launch speed",
          "workingLatex": "v = 18.05 < u = 30",
          "explanation": "Speed is less than at launch because the vertical component has been lost.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Energy interpretation",
          "workingLatex": "\\text{Vertical KE converted to gravitational PE}",
          "explanation": "Kinetic energy decreases as the particle rises.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note direction",
          "workingLatex": "\\text{Velocity is purely horizontal at the top}",
          "explanation": "The velocity vector points horizontally at the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v = 18.05\\,\\text{m s}^{-1}",
          "explanation": "Speed at greatest height $= 18.05\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 18.05\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "max-height",
      "speed",
      "components"
    ],
    "questionText": "A particle is projected with speed $20\\,\\text{m s}^{-1}$ at $60°$ above the horizontal. Find the speed of the particle at its greatest height.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "At greatest height",
          "workingLatex": "v_y = 0",
          "explanation": "The vertical component of velocity is zero at the top of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal speed is unchanged",
          "workingLatex": "v_x = u_x = u\\cos\\alpha",
          "explanation": "No horizontal acceleration means $v_x$ stays constant throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Speed at the top",
          "workingLatex": "v = v_x = u\\cos\\alpha",
          "explanation": "When $v_y = 0$, the speed equals the horizontal component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "v = 20\\cos 60°",
          "explanation": "$u = 20\\,\\text{m s}^{-1}$, $\\alpha = 60°$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "v = 10\\,\\text{m s}^{-1}",
          "explanation": "Speed at greatest height: $10\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with launch speed",
          "workingLatex": "v = 10 < u = 20",
          "explanation": "Speed is less than at launch because the vertical component has been lost.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Energy interpretation",
          "workingLatex": "\\text{Vertical KE converted to gravitational PE}",
          "explanation": "Kinetic energy decreases as the particle rises.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note direction",
          "workingLatex": "\\text{Velocity is purely horizontal at the top}",
          "explanation": "The velocity vector points horizontally at the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v = 10\\,\\text{m s}^{-1}",
          "explanation": "Speed at greatest height $= 10\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 10\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "max-height",
      "speed",
      "components"
    ],
    "questionText": "A particle is projected with speed $35\\,\\text{m s}^{-1}$ at $25°$ above the horizontal. Find the speed of the particle at its greatest height.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "At greatest height",
          "workingLatex": "v_y = 0",
          "explanation": "The vertical component of velocity is zero at the top of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal speed is unchanged",
          "workingLatex": "v_x = u_x = u\\cos\\alpha",
          "explanation": "No horizontal acceleration means $v_x$ stays constant throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Speed at the top",
          "workingLatex": "v = v_x = u\\cos\\alpha",
          "explanation": "When $v_y = 0$, the speed equals the horizontal component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute",
          "workingLatex": "v = 35\\cos 25°",
          "explanation": "$u = 35\\,\\text{m s}^{-1}$, $\\alpha = 25°$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate",
          "workingLatex": "v = 31.72\\,\\text{m s}^{-1}",
          "explanation": "Speed at greatest height: $31.72\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with launch speed",
          "workingLatex": "v = 31.72 < u = 35",
          "explanation": "Speed is less than at launch because the vertical component has been lost.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Energy interpretation",
          "workingLatex": "\\text{Vertical KE converted to gravitational PE}",
          "explanation": "Kinetic energy decreases as the particle rises.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note direction",
          "workingLatex": "\\text{Velocity is purely horizontal at the top}",
          "explanation": "The velocity vector points horizontally at the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "v = 31.72\\,\\text{m s}^{-1}",
          "explanation": "Speed at greatest height $= 31.72\\,\\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 31.72\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "time-of-flight"
    ],
    "questionText": "A ball is projected from ground level with speed $20\\,\\text{m s}^{-1}$ at $30°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the time of flight.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = 20\\sin 30° = 10\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 10\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Time of flight formula",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Launch and landing at the same height: total time is twice the time to max height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "T = \\dfrac{2 \\times 10}{9.8}",
          "explanation": "Substitute $u_y$ and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "T = 2.04\\,\\text{s}",
          "explanation": "$T = 2.04\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check via symmetry",
          "workingLatex": "t_{\\text{up}} = \\dfrac{u_y}{g} = 1.02\\,\\text{s}",
          "explanation": "Time to top is $1.02\\,\\text{s}$; double gives $2.04\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Horizontal distance in this time",
          "workingLatex": "R = u\\cos\\alpha \\times T = 35.35\\,\\text{m}",
          "explanation": "Range can be found once time of flight is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify landing",
          "workingLatex": "y = u_y T - \\tfrac{1}{2}gT^2 = 0",
          "explanation": "Substituting $T = 2u_y/g$ gives $y = 0$, confirming return to ground level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "T = 2.04\\,\\text{s}",
          "explanation": "Time of flight $= 2.04\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Physical meaning",
          "workingLatex": "\\text{The ball is in the air for 2.04 s}",
          "explanation": "This is the total duration from launch to landing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 2.04\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "time-of-flight"
    ],
    "questionText": "A ball is projected from ground level with speed $25\\,\\text{m s}^{-1}$ at $45°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the time of flight.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = 25\\sin 45° = 17.68\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 17.68\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Time of flight formula",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Launch and landing at the same height: total time is twice the time to max height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "T = \\dfrac{2 \\times 17.68}{9.8}",
          "explanation": "Substitute $u_y$ and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "T = 3.61\\,\\text{s}",
          "explanation": "$T = 3.61\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check via symmetry",
          "workingLatex": "t_{\\text{up}} = \\dfrac{u_y}{g} = 1.80\\,\\text{s}",
          "explanation": "Time to top is $1.80\\,\\text{s}$; double gives $3.61\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Horizontal distance in this time",
          "workingLatex": "R = u\\cos\\alpha \\times T = 63.78\\,\\text{m}",
          "explanation": "Range can be found once time of flight is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify landing",
          "workingLatex": "y = u_y T - \\tfrac{1}{2}gT^2 = 0",
          "explanation": "Substituting $T = 2u_y/g$ gives $y = 0$, confirming return to ground level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "T = 3.61\\,\\text{s}",
          "explanation": "Time of flight $= 3.61\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Physical meaning",
          "workingLatex": "\\text{The ball is in the air for 3.61 s}",
          "explanation": "This is the total duration from launch to landing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 3.61\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "time-of-flight"
    ],
    "questionText": "A ball is projected from ground level with speed $15\\,\\text{m s}^{-1}$ at $60°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the time of flight.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = 15\\sin 60° = 12.99\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 12.99\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Time of flight formula",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Launch and landing at the same height: total time is twice the time to max height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "T = \\dfrac{2 \\times 12.99}{9.8}",
          "explanation": "Substitute $u_y$ and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "T = 2.65\\,\\text{s}",
          "explanation": "$T = 2.65\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check via symmetry",
          "workingLatex": "t_{\\text{up}} = \\dfrac{u_y}{g} = 1.33\\,\\text{s}",
          "explanation": "Time to top is $1.33\\,\\text{s}$; double gives $2.65\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Horizontal distance in this time",
          "workingLatex": "R = u\\cos\\alpha \\times T = 19.88\\,\\text{m}",
          "explanation": "Range can be found once time of flight is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify landing",
          "workingLatex": "y = u_y T - \\tfrac{1}{2}gT^2 = 0",
          "explanation": "Substituting $T = 2u_y/g$ gives $y = 0$, confirming return to ground level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "T = 2.65\\,\\text{s}",
          "explanation": "Time of flight $= 2.65\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Physical meaning",
          "workingLatex": "\\text{The ball is in the air for 2.65 s}",
          "explanation": "This is the total duration from launch to landing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 2.65\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "time-of-flight"
    ],
    "questionText": "A ball is projected from ground level with speed $32\\,\\text{m s}^{-1}$ at $40°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the time of flight.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = 32\\sin 40° = 20.57\\,\\text{m s}^{-1}",
          "explanation": "$u_y = 20.57\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Time of flight formula",
          "workingLatex": "T = \\dfrac{2u_y}{g}",
          "explanation": "Launch and landing at the same height: total time is twice the time to max height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "T = \\dfrac{2 \\times 20.57}{9.8}",
          "explanation": "Substitute $u_y$ and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "T = 4.20\\,\\text{s}",
          "explanation": "$T = 4.20\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check via symmetry",
          "workingLatex": "t_{\\text{up}} = \\dfrac{u_y}{g} = 2.10\\,\\text{s}",
          "explanation": "Time to top is $2.10\\,\\text{s}$; double gives $4.20\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Horizontal distance in this time",
          "workingLatex": "R = u\\cos\\alpha \\times T = 102.90\\,\\text{m}",
          "explanation": "Range can be found once time of flight is known.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify landing",
          "workingLatex": "y = u_y T - \\tfrac{1}{2}gT^2 = 0",
          "explanation": "Substituting $T = 2u_y/g$ gives $y = 0$, confirming return to ground level.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "T = 4.20\\,\\text{s}",
          "explanation": "Time of flight $= 4.20\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Physical meaning",
          "workingLatex": "\\text{The ball is in the air for 4.20 s}",
          "explanation": "This is the total duration from launch to landing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 4.20\\,\\text{s}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula"
    ],
    "questionText": "A particle is projected from level ground with speed $20\\,\\text{m s}^{-1}$ at $30°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For projection from and to the same horizontal level.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $\\sin 2\\alpha$",
          "workingLatex": "\\sin 60° = 0.8660",
          "explanation": "$\\sin 60° = 0.8660$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "R = \\dfrac{20^2 \\times 0.8660}{9.8}",
          "explanation": "$u = 20\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "R = 35.35\\,\\text{m}",
          "explanation": "Range $= 35.35\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 17.32 \\times 2.04 = 35.35\\,\\text{m}",
          "explanation": "Using $R = u\\cos\\alpha \\times 2u\\sin\\alpha/g$ confirms the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note maximum range at $45°$",
          "workingLatex": "\\text{Maximum range when } \\sin 2\\alpha = 1 \\Rightarrow \\alpha = 45°",
          "explanation": "$\\sin 2\\alpha$ is maximised at $\\alpha = 45°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with complementary angle",
          "workingLatex": "\\alpha = 60° \\text{ gives the same range}",
          "explanation": "$\\sin 60° = \\sin 120°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "R = 35.35\\,\\text{m}",
          "explanation": "Horizontal range $= 35.35\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "\\text{The particle lands 35.35 m from the launch point}",
          "explanation": "Measured horizontally along the ground.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 35.35\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula"
    ],
    "questionText": "A particle is projected from level ground with speed $25\\,\\text{m s}^{-1}$ at $45°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For projection from and to the same horizontal level.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $\\sin 2\\alpha$",
          "workingLatex": "\\sin 90° = 1",
          "explanation": "$\\sin 90° = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "R = \\dfrac{25^2 \\times 1}{9.8}",
          "explanation": "$u = 25\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "R = 63.78\\,\\text{m}",
          "explanation": "Range $= 63.78\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 17.68 \\times 3.61 = 63.78\\,\\text{m}",
          "explanation": "Using $R = u\\cos\\alpha \\times 2u\\sin\\alpha/g$ confirms the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note maximum range at $45°$",
          "workingLatex": "\\text{Maximum range when } \\sin 2\\alpha = 1 \\Rightarrow \\alpha = 45°",
          "explanation": "$\\sin 2\\alpha$ is maximised at $\\alpha = 45°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with complementary angle",
          "workingLatex": "\\alpha = 45° \\text{ gives the same range}",
          "explanation": "$\\sin 90° = \\sin 90°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "R = 63.78\\,\\text{m}",
          "explanation": "Horizontal range $= 63.78\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "\\text{The particle lands 63.78 m from the launch point}",
          "explanation": "Measured horizontally along the ground.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 63.78\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula"
    ],
    "questionText": "A particle is projected from level ground with speed $30\\,\\text{m s}^{-1}$ at $40°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For projection from and to the same horizontal level.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $\\sin 2\\alpha$",
          "workingLatex": "\\sin 80° = 0.9848",
          "explanation": "$\\sin 80° = 0.9848$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "R = \\dfrac{30^2 \\times 0.9848}{9.8}",
          "explanation": "$u = 30\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "R = 90.44\\,\\text{m}",
          "explanation": "Range $= 90.44\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 22.98 \\times 3.94 = 90.44\\,\\text{m}",
          "explanation": "Using $R = u\\cos\\alpha \\times 2u\\sin\\alpha/g$ confirms the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note maximum range at $45°$",
          "workingLatex": "\\text{Maximum range when } \\sin 2\\alpha = 1 \\Rightarrow \\alpha = 45°",
          "explanation": "$\\sin 2\\alpha$ is maximised at $\\alpha = 45°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with complementary angle",
          "workingLatex": "\\alpha = 50° \\text{ gives the same range}",
          "explanation": "$\\sin 80° = \\sin 100°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "R = 90.44\\,\\text{m}",
          "explanation": "Horizontal range $= 90.44\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "\\text{The particle lands 90.44 m from the launch point}",
          "explanation": "Measured horizontally along the ground.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 90.44\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "range-formula"
    ],
    "questionText": "A particle is projected from level ground with speed $18\\,\\text{m s}^{-1}$ at $60°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "For projection from and to the same horizontal level.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate $\\sin 2\\alpha$",
          "workingLatex": "\\sin 120° = 0.8660",
          "explanation": "$\\sin 120° = 0.8660$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "R = \\dfrac{18^2 \\times 0.8660}{9.8}",
          "explanation": "$u = 18\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "R = 28.63\\,\\text{m}",
          "explanation": "Range $= 28.63\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 9 \\times 3.18 = 28.63\\,\\text{m}",
          "explanation": "Using $R = u\\cos\\alpha \\times 2u\\sin\\alpha/g$ confirms the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note maximum range at $45°$",
          "workingLatex": "\\text{Maximum range when } \\sin 2\\alpha = 1 \\Rightarrow \\alpha = 45°",
          "explanation": "$\\sin 2\\alpha$ is maximised at $\\alpha = 45°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with complementary angle",
          "workingLatex": "\\alpha = 30° \\text{ gives the same range}",
          "explanation": "$\\sin 120° = \\sin 60°$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "R = 28.63\\,\\text{m}",
          "explanation": "Horizontal range $= 28.63\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Context",
          "workingLatex": "\\text{The particle lands 28.63 m from the launch point}",
          "explanation": "Measured horizontally along the ground.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 28.63\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "projection-from-height",
      "range"
    ],
    "questionText": "A particle is projected with speed $20\\,\\text{m s}^{-1}$ at $30°$ above the horizontal from a point $10\\,\\text{m}$ above level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up vertical motion from height $h$",
          "workingLatex": "y = 10 + u_y t - \\tfrac{1}{2}gt^2",
          "explanation": "Launch height $10\\,\\text{m}$; ground at $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve velocity",
          "workingLatex": "u_x = 17.32, \\quad u_y = 10",
          "explanation": "Components: $17.32\\,\\text{m s}^{-1}$ and $10\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve $y = 0$ for $t$",
          "workingLatex": "\\tfrac{1}{2}gt^2 - u_y t - h = 0",
          "explanation": "Quadratic in $t$; take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the quadratic formula",
          "workingLatex": "t = \\dfrac{u_y + \\sqrt{u_y^2 + 2gh}}{g}",
          "explanation": "The positive sign gives the time when the particle lands.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate discriminant",
          "workingLatex": "u_y^2 + 2gh = 296",
          "explanation": "$u_y^2 + 2gh = 296$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find time of flight",
          "workingLatex": "T = 2.78\\,\\text{s}",
          "explanation": "$T = 2.78\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate horizontal range",
          "workingLatex": "R = u_x T = 17.32 \\times 2.78 = 48.08\\,\\text{m}",
          "explanation": "Range $= 48.08\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note longer flight than from ground",
          "workingLatex": "T = 2.78\\,\\text{s} > \\dfrac{2u_y}{g} = 2.04\\,\\text{s}",
          "explanation": "Launching from a height increases the time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify $y$ at $t = T$",
          "workingLatex": "y = 0",
          "explanation": "Substituting $T$ back gives zero vertical displacement from ground.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "R = 48.08\\,\\text{m}",
          "explanation": "Horizontal range $= 48.08\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 48.08\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "projection-from-height",
      "range"
    ],
    "questionText": "A particle is projected with speed $25\\,\\text{m s}^{-1}$ at $45°$ above the horizontal from a point $15\\,\\text{m}$ above level ground. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up vertical motion from height $h$",
          "workingLatex": "y = 15 + u_y t - \\tfrac{1}{2}gt^2",
          "explanation": "Launch height $15\\,\\text{m}$; ground at $y = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve velocity",
          "workingLatex": "u_x = 17.68, \\quad u_y = 17.68",
          "explanation": "Components: $17.68\\,\\text{m s}^{-1}$ and $17.68\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve $y = 0$ for $t$",
          "workingLatex": "\\tfrac{1}{2}gt^2 - u_y t - h = 0",
          "explanation": "Quadratic in $t$; take the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the quadratic formula",
          "workingLatex": "t = \\dfrac{u_y + \\sqrt{u_y^2 + 2gh}}{g}",
          "explanation": "The positive sign gives the time when the particle lands.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate discriminant",
          "workingLatex": "u_y^2 + 2gh = 606.5",
          "explanation": "$u_y^2 + 2gh = 606.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find time of flight",
          "workingLatex": "T = 4.32\\,\\text{s}",
          "explanation": "$T = 4.32\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate horizontal range",
          "workingLatex": "R = u_x T = 17.68 \\times 4.32 = 76.31\\,\\text{m}",
          "explanation": "Range $= 76.31\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note longer flight than from ground",
          "workingLatex": "T = 4.32\\,\\text{s} > \\dfrac{2u_y}{g} = 3.61\\,\\text{s}",
          "explanation": "Launching from a height increases the time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify $y$ at $t = T$",
          "workingLatex": "y = 0",
          "explanation": "Substituting $T$ back gives zero vertical displacement from ground.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "R = 76.31\\,\\text{m}",
          "explanation": "Horizontal range $= 76.31\\,\\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 76.31\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "trajectory-equation",
      "cartesian"
    ],
    "questionText": "A particle is projected with speed $20\\,\\text{m s}^{-1}$ at $30°$ above the horizontal from the origin. Taking $g = 9.8\\,\\text{m s}^{-2}$, use the equation of the trajectory $y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}$ to find the height when $x = 10\\,\\text{m}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "This Cartesian form eliminates $t$ and gives $y$ as a function of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify known values",
          "workingLatex": "u = 20, \\quad \\alpha = 30°, \\quad x = 10\\,\\text{m}",
          "explanation": "Substitute these into the equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate $\\tan\\alpha$",
          "workingLatex": "\\tan 30° = 0.5774",
          "explanation": "$\\tan 30° = 0.5774$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the coefficient of $x^2$",
          "workingLatex": "\\dfrac{g}{2u^2\\cos^2\\alpha} = 0.01633",
          "explanation": "Coefficient: $0.01633$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute $x = {x51}$",
          "workingLatex": "y = 10 \\times 0.5774 - 0.01633 \\times 10^2",
          "explanation": "Evaluate each term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "y = 4.14\\,\\text{m}",
          "explanation": "Height: $4.14\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with parametric method",
          "workingLatex": "t = x/u_x = 0.58\\,\\text{s}, \\quad y = 4.14\\,\\text{m}",
          "explanation": "Using $t = x/u_x$ in $y = u_y t - \\tfrac{1}{2}gt^2$ gives the same answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the parabolic shape",
          "workingLatex": "y = Ax - Bx^2 \\quad (\\text{parabola})",
          "explanation": "The trajectory is a parabola opening downward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the domain",
          "workingLatex": "0 \\le x \\le R",
          "explanation": "Valid for $x$ between launch and landing.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check $y > 0$",
          "workingLatex": "y = 4.14 > 0",
          "explanation": "The point is above ground.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret",
          "workingLatex": "\\text{At } x = 10\\,\\text{m, height is } 4.14\\,\\text{m}",
          "explanation": "A point on the flight path.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "y = 4.14\\,\\text{m}",
          "explanation": "Height $= 4.14\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "When to use this equation",
          "workingLatex": "\\text{Use when given } x \\text{ and needing } y \\text{ without finding } t",
          "explanation": "The trajectory equation is efficient for clearance problems.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 4.14\\,\\text{m}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "find-angle",
      "two-solutions",
      "range"
    ],
    "questionText": "A particle is projected from level ground with speed $20\\,\\text{m s}^{-1}$ and lands $30\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the two possible angles of projection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "Rearrange to find the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $\\sin 2\\alpha$",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{Rg}{u^2} = 0.7350",
          "explanation": "$\\sin 2\\alpha = 0.7350$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $2\\alpha$",
          "workingLatex": "2\\alpha = \\sin^{-1}(0.7350)",
          "explanation": "Take the inverse sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First solution",
          "workingLatex": "\\alpha = 23.7°",
          "explanation": "One angle: $\\alpha = 23.7°$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second solution from symmetry",
          "workingLatex": "\\alpha = 90° - 23.7° = 66.3°",
          "explanation": "Complementary angle: $\\alpha = 66.3°$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify first angle",
          "workingLatex": "R = \\dfrac{20^2 \\sin 47.3°}{9.8} = 30\\,\\text{m}",
          "explanation": "Confirms the range for the first angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify second angle",
          "workingLatex": "R = \\dfrac{20^2 \\sin 132.7°}{9.8} = 30\\,\\text{m}",
          "explanation": "Both angles give the same range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Physical interpretation",
          "workingLatex": "\\text{Two launch angles give the same range for fixed speed}",
          "explanation": "The lower angle gives a flatter, faster trajectory; the higher angle gives a steeper path.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the lower and higher angles",
          "workingLatex": "\\alpha_1 = 23.7°, \\quad \\alpha_2 = 66.3°",
          "explanation": "Lower: $23.7°$; higher: $66.3°$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note maximum possible range",
          "workingLatex": "R_{\\max} = \\dfrac{u^2}{g} = 40.82\\,\\text{m} \\text{ at } \\alpha = 45°",
          "explanation": "The given range must not exceed this.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check feasibility",
          "workingLatex": "30 \\le 40.82",
          "explanation": "The target range is achievable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\alpha = 23.7° \\text{ or } 66.3°",
          "explanation": "Two possible angles: $23.7°$ and $66.3°$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam tip",
          "workingLatex": "\\text{Always give both angles unless one is excluded by context}",
          "explanation": "Unless the problem specifies a low or high trajectory, both are valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 23.7°$ or $\\alpha = 66.3°$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "find-angle",
      "two-solutions",
      "range"
    ],
    "questionText": "A particle is projected from level ground with speed $25\\,\\text{m s}^{-1}$ and lands $40\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the two possible angles of projection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "Rearrange to find the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $\\sin 2\\alpha$",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{Rg}{u^2} = 0.6272",
          "explanation": "$\\sin 2\\alpha = 0.6272$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $2\\alpha$",
          "workingLatex": "2\\alpha = \\sin^{-1}(0.6272)",
          "explanation": "Take the inverse sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First solution",
          "workingLatex": "\\alpha = 19.4°",
          "explanation": "One angle: $\\alpha = 19.4°$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second solution from symmetry",
          "workingLatex": "\\alpha = 90° - 19.4° = 70.6°",
          "explanation": "Complementary angle: $\\alpha = 70.6°$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify first angle",
          "workingLatex": "R = \\dfrac{25^2 \\sin 38.8°}{9.8} = 40\\,\\text{m}",
          "explanation": "Confirms the range for the first angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify second angle",
          "workingLatex": "R = \\dfrac{25^2 \\sin 141.2°}{9.8} = 40\\,\\text{m}",
          "explanation": "Both angles give the same range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Physical interpretation",
          "workingLatex": "\\text{Two launch angles give the same range for fixed speed}",
          "explanation": "The lower angle gives a flatter, faster trajectory; the higher angle gives a steeper path.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the lower and higher angles",
          "workingLatex": "\\alpha_1 = 19.4°, \\quad \\alpha_2 = 70.6°",
          "explanation": "Lower: $19.4°$; higher: $70.6°$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note maximum possible range",
          "workingLatex": "R_{\\max} = \\dfrac{u^2}{g} = 63.78\\,\\text{m} \\text{ at } \\alpha = 45°",
          "explanation": "The given range must not exceed this.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check feasibility",
          "workingLatex": "40 \\le 63.78",
          "explanation": "The target range is achievable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\alpha = 19.4° \\text{ or } 70.6°",
          "explanation": "Two possible angles: $19.4°$ and $70.6°$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam tip",
          "workingLatex": "\\text{Always give both angles unless one is excluded by context}",
          "explanation": "Unless the problem specifies a low or high trajectory, both are valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 19.4°$ or $\\alpha = 70.6°$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "find-angle",
      "two-solutions",
      "range"
    ],
    "questionText": "A particle is projected from level ground with speed $30\\,\\text{m s}^{-1}$ and lands $50\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the two possible angles of projection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "Rearrange to find the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $\\sin 2\\alpha$",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{Rg}{u^2} = 0.5444",
          "explanation": "$\\sin 2\\alpha = 0.5444$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $2\\alpha$",
          "workingLatex": "2\\alpha = \\sin^{-1}(0.5444)",
          "explanation": "Take the inverse sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First solution",
          "workingLatex": "\\alpha = 16.5°",
          "explanation": "One angle: $\\alpha = 16.5°$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second solution from symmetry",
          "workingLatex": "\\alpha = 90° - 16.5° = 73.5°",
          "explanation": "Complementary angle: $\\alpha = 73.5°$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify first angle",
          "workingLatex": "R = \\dfrac{30^2 \\sin 33.0°}{9.8} = 50\\,\\text{m}",
          "explanation": "Confirms the range for the first angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify second angle",
          "workingLatex": "R = \\dfrac{30^2 \\sin 147.0°}{9.8} = 50\\,\\text{m}",
          "explanation": "Both angles give the same range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Physical interpretation",
          "workingLatex": "\\text{Two launch angles give the same range for fixed speed}",
          "explanation": "The lower angle gives a flatter, faster trajectory; the higher angle gives a steeper path.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the lower and higher angles",
          "workingLatex": "\\alpha_1 = 16.5°, \\quad \\alpha_2 = 73.5°",
          "explanation": "Lower: $16.5°$; higher: $73.5°$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note maximum possible range",
          "workingLatex": "R_{\\max} = \\dfrac{u^2}{g} = 91.84\\,\\text{m} \\text{ at } \\alpha = 45°",
          "explanation": "The given range must not exceed this.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check feasibility",
          "workingLatex": "50 \\le 91.84",
          "explanation": "The target range is achievable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\alpha = 16.5° \\text{ or } 73.5°",
          "explanation": "Two possible angles: $16.5°$ and $73.5°$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam tip",
          "workingLatex": "\\text{Always give both angles unless one is excluded by context}",
          "explanation": "Unless the problem specifies a low or high trajectory, both are valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 16.5°$ or $\\alpha = 73.5°$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "find-angle",
      "two-solutions",
      "range"
    ],
    "questionText": "A particle is projected from level ground with speed $15\\,\\text{m s}^{-1}$ and lands $12\\,\\text{m}$ away. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the two possible angles of projection.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 2\\alpha}{g}",
          "explanation": "Rearrange to find the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for $\\sin 2\\alpha$",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{Rg}{u^2} = 0.5227",
          "explanation": "$\\sin 2\\alpha = 0.5227$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find $2\\alpha$",
          "workingLatex": "2\\alpha = \\sin^{-1}(0.5227)",
          "explanation": "Take the inverse sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First solution",
          "workingLatex": "\\alpha = 15.8°",
          "explanation": "One angle: $\\alpha = 15.8°$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second solution from symmetry",
          "workingLatex": "\\alpha = 90° - 15.8° = 74.2°",
          "explanation": "Complementary angle: $\\alpha = 74.2°$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify first angle",
          "workingLatex": "R = \\dfrac{15^2 \\sin 31.5°}{9.8} = 12\\,\\text{m}",
          "explanation": "Confirms the range for the first angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify second angle",
          "workingLatex": "R = \\dfrac{15^2 \\sin 148.5°}{9.8} = 12\\,\\text{m}",
          "explanation": "Both angles give the same range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Physical interpretation",
          "workingLatex": "\\text{Two launch angles give the same range for fixed speed}",
          "explanation": "The lower angle gives a flatter, faster trajectory; the higher angle gives a steeper path.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the lower and higher angles",
          "workingLatex": "\\alpha_1 = 15.8°, \\quad \\alpha_2 = 74.2°",
          "explanation": "Lower: $15.8°$; higher: $74.2°$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note maximum possible range",
          "workingLatex": "R_{\\max} = \\dfrac{u^2}{g} = 22.96\\,\\text{m} \\text{ at } \\alpha = 45°",
          "explanation": "The given range must not exceed this.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check feasibility",
          "workingLatex": "12 \\le 22.96",
          "explanation": "The target range is achievable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\alpha = 15.8° \\text{ or } 74.2°",
          "explanation": "Two possible angles: $15.8°$ and $74.2°$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam tip",
          "workingLatex": "\\text{Always give both angles unless one is excluded by context}",
          "explanation": "Unless the problem specifies a low or high trajectory, both are valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 15.8°$ or $\\alpha = 74.2°$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "clearance",
      "trajectory",
      "barrier"
    ],
    "questionText": "A particle is projected with speed $20\\,\\text{m s}^{-1}$ at $30°$ above the horizontal from ground level. A vertical wall of height $5\\,\\text{m}$ stands at a horizontal distance of $15\\,\\text{m}$ from the launch point. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle clears the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "Use the Cartesian equation of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x =$ wall distance",
          "workingLatex": "y = 15\\tan 30° - \\dfrac{9.8 \\times 15^2}{2 \\times 20^2 \\cos^2 30°}",
          "explanation": "Find height when $x = 15\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\tan\\alpha$ and $\\cos\\alpha$",
          "workingLatex": "\\tan 30° = 0.5774, \\quad \\cos 30° = 0.8660",
          "explanation": "Trigonometric values for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate height at the wall",
          "workingLatex": "y = 4.99\\,\\text{m}",
          "explanation": "Trajectory height at the wall: $4.99\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with wall height",
          "workingLatex": "y = 4.99\\,\\text{m} \\quad \\text{vs} \\quad h_{\\text{wall}} = 5\\,\\text{m}",
          "explanation": "Does the projectile clear the obstacle?",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The projectile does not clear the wall}",
          "explanation": "The path is below the wall top at this distance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Shortfall",
          "workingLatex": "\\text{Short by 0.01 m}",
          "explanation": "How much the projectile passes above or below the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: find time to wall",
          "workingLatex": "t = \\dfrac{15}{u\\cos\\alpha} = 0.87\\,\\text{s}",
          "explanation": "Then use $y = u_y t - \\tfrac{1}{2}gt^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm with parametric",
          "workingLatex": "y = 4.99\\,\\text{m}",
          "explanation": "Both methods agree.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Practical context",
          "workingLatex": "\\text{Wall at 15 m, height 5 m}",
          "explanation": "Common exam scenario: does the ball clear a fence or building?",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "What if it just clears?",
          "workingLatex": "y = 5 \\Rightarrow \\text{adjust } u \\text{ or } \\alpha",
          "explanation": "Setting $y = h_{\\text{wall}}$ finds the minimum speed or angle needed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State answer clearly",
          "workingLatex": "\\text{Projectile hits below the 5 m wall at 15 m}",
          "explanation": "Does not clear the wall.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Key technique",
          "workingLatex": "\\text{Trajectory equation avoids finding } t \\text{ first}",
          "explanation": "Substitute the horizontal distance directly into $y(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The projectile does not clear the wall; height at $x = 15\\,\\text{m}$ is $4.99\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "clearance",
      "trajectory",
      "barrier"
    ],
    "questionText": "A particle is projected with speed $25\\,\\text{m s}^{-1}$ at $45°$ above the horizontal from ground level. A vertical wall of height $8\\,\\text{m}$ stands at a horizontal distance of $20\\,\\text{m}$ from the launch point. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle clears the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "Use the Cartesian equation of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x =$ wall distance",
          "workingLatex": "y = 20\\tan 45° - \\dfrac{9.8 \\times 20^2}{2 \\times 25^2 \\cos^2 45°}",
          "explanation": "Find height when $x = 20\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\tan\\alpha$ and $\\cos\\alpha$",
          "workingLatex": "\\tan 45° = 1, \\quad \\cos 45° = 0.7071",
          "explanation": "Trigonometric values for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate height at the wall",
          "workingLatex": "y = 13.73\\,\\text{m}",
          "explanation": "Trajectory height at the wall: $13.73\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with wall height",
          "workingLatex": "y = 13.73\\,\\text{m} \\quad \\text{vs} \\quad h_{\\text{wall}} = 8\\,\\text{m}",
          "explanation": "Does the projectile clear the obstacle?",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The projectile clears the wall}",
          "explanation": "Height exceeds wall top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Margin of clearance",
          "workingLatex": "\\text{Clearance = 5.73 m}",
          "explanation": "How much the projectile passes above or below the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: find time to wall",
          "workingLatex": "t = \\dfrac{20}{u\\cos\\alpha} = 1.13\\,\\text{s}",
          "explanation": "Then use $y = u_y t - \\tfrac{1}{2}gt^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm with parametric",
          "workingLatex": "y = 13.73\\,\\text{m}",
          "explanation": "Both methods agree.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Practical context",
          "workingLatex": "\\text{Wall at 20 m, height 8 m}",
          "explanation": "Common exam scenario: does the ball clear a fence or building?",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "What if it just clears?",
          "workingLatex": "y = 8 \\Rightarrow \\text{adjust } u \\text{ or } \\alpha",
          "explanation": "Setting $y = h_{\\text{wall}}$ finds the minimum speed or angle needed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State answer clearly",
          "workingLatex": "\\text{Projectile clears the 8 m wall at 20 m}",
          "explanation": "Clears the wall.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Key technique",
          "workingLatex": "\\text{Trajectory equation avoids finding } t \\text{ first}",
          "explanation": "Substitute the horizontal distance directly into $y(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The projectile clears the wall; height at $x = 20\\,\\text{m}$ is $13.73\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "clearance",
      "trajectory",
      "barrier"
    ],
    "questionText": "A particle is projected with speed $30\\,\\text{m s}^{-1}$ at $40°$ above the horizontal from ground level. A vertical wall of height $10\\,\\text{m}$ stands at a horizontal distance of $25\\,\\text{m}$ from the launch point. Taking $g = 9.8\\,\\text{m s}^{-2}$, determine whether the particle clears the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "Use the Cartesian equation of the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute $x =$ wall distance",
          "workingLatex": "y = 25\\tan 40° - \\dfrac{9.8 \\times 25^2}{2 \\times 30^2 \\cos^2 40°}",
          "explanation": "Find height when $x = 25\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\tan\\alpha$ and $\\cos\\alpha$",
          "workingLatex": "\\tan 40° = 0.8391, \\quad \\cos 40° = 0.7660",
          "explanation": "Trigonometric values for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate height at the wall",
          "workingLatex": "y = 15.18\\,\\text{m}",
          "explanation": "Trajectory height at the wall: $15.18\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with wall height",
          "workingLatex": "y = 15.18\\,\\text{m} \\quad \\text{vs} \\quad h_{\\text{wall}} = 10\\,\\text{m}",
          "explanation": "Does the projectile clear the obstacle?",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclusion",
          "workingLatex": "\\text{The projectile clears the wall}",
          "explanation": "Height exceeds wall top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Margin of clearance",
          "workingLatex": "\\text{Clearance = 5.18 m}",
          "explanation": "How much the projectile passes above or below the wall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative: find time to wall",
          "workingLatex": "t = \\dfrac{25}{u\\cos\\alpha} = 1.09\\,\\text{s}",
          "explanation": "Then use $y = u_y t - \\tfrac{1}{2}gt^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm with parametric",
          "workingLatex": "y = 15.18\\,\\text{m}",
          "explanation": "Both methods agree.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Practical context",
          "workingLatex": "\\text{Wall at 25 m, height 10 m}",
          "explanation": "Common exam scenario: does the ball clear a fence or building?",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "What if it just clears?",
          "workingLatex": "y = 10 \\Rightarrow \\text{adjust } u \\text{ or } \\alpha",
          "explanation": "Setting $y = h_{\\text{wall}}$ finds the minimum speed or angle needed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State answer clearly",
          "workingLatex": "\\text{Projectile clears the 10 m wall at 25 m}",
          "explanation": "Clears the wall.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Key technique",
          "workingLatex": "\\text{Trajectory equation avoids finding } t \\text{ first}",
          "explanation": "Substitute the horizontal distance directly into $y(x)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The projectile clears the wall; height at $x = 25\\,\\text{m}$ is $15.18\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "minimum-speed",
      "clearance",
      "trajectory"
    ],
    "questionText": "A particle is projected at $30°$ above the horizontal from ground level. A wall of height $6\\,\\text{m}$ is at a horizontal distance of $15\\,\\text{m}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the minimum initial speed needed to clear the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the clearance condition",
          "workingLatex": "y(15) \\ge 6",
          "explanation": "At $x = 15\\,\\text{m}$, the trajectory must be at least $6\\,\\text{m}$ high.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "Express height in terms of $u$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the wall position",
          "workingLatex": "6 = 15\\tan 30° - \\dfrac{9.8 \\times 15^2}{2u^2\\cos^2 30°}",
          "explanation": "Set $y$ equal to the wall height for the minimum-speed case.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{gx^2}{2\\cos^2\\alpha(x\\tan\\alpha - h)}",
          "explanation": "Isolate $u^2$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the denominator",
          "workingLatex": "x\\tan\\alpha - h = 2.66",
          "explanation": "Denominator: $2.66$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate $u^2$",
          "workingLatex": "u^2 = 552.6",
          "explanation": "$u^2 = 552.6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find minimum speed",
          "workingLatex": "u_{\\min} = 23.51\\,\\text{m s}^{-1}",
          "explanation": "$u_{\\min} = 23.51\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify clearance at $u_{min}$",
          "workingLatex": "y = 6\\,\\text{m} = h_{\\text{wall}}",
          "explanation": "At minimum speed, the trajectory just touches the top of the wall.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "\\text{Any speed } u \\ge 23.51 \\text{ clears the wall at angle } 30°",
          "explanation": "Faster launches give higher trajectories.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check angle is suitable",
          "workingLatex": "\\tan 30° > h/x",
          "explanation": "Need $x\\tan\\alpha > h$ for a real solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Energy perspective",
          "workingLatex": "\\text{More speed } \\Rightarrow \\text{ higher trajectory}",
          "explanation": "Greater initial kinetic energy allows the particle to rise higher.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "u_{\\min} = 23.51\\,\\text{m s}^{-1}",
          "explanation": "Minimum speed: $23.51\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam strategy",
          "workingLatex": "\\text{Set } y(x) = h \\text{ and solve for } u",
          "explanation": "Equality gives the borderline case; inequality gives the minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{\\min} = 23.51\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "minimum-speed",
      "clearance",
      "trajectory"
    ],
    "questionText": "A particle is projected at $45°$ above the horizontal from ground level. A wall of height $8\\,\\text{m}$ is at a horizontal distance of $20\\,\\text{m}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the minimum initial speed needed to clear the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the clearance condition",
          "workingLatex": "y(20) \\ge 8",
          "explanation": "At $x = 20\\,\\text{m}$, the trajectory must be at least $8\\,\\text{m}$ high.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "Express height in terms of $u$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the wall position",
          "workingLatex": "8 = 20\\tan 45° - \\dfrac{9.8 \\times 20^2}{2u^2\\cos^2 45°}",
          "explanation": "Set $y$ equal to the wall height for the minimum-speed case.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{gx^2}{2\\cos^2\\alpha(x\\tan\\alpha - h)}",
          "explanation": "Isolate $u^2$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the denominator",
          "workingLatex": "x\\tan\\alpha - h = 12",
          "explanation": "Denominator: $12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate $u^2$",
          "workingLatex": "u^2 = 326.7",
          "explanation": "$u^2 = 326.7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find minimum speed",
          "workingLatex": "u_{\\min} = 18.07\\,\\text{m s}^{-1}",
          "explanation": "$u_{\\min} = 18.07\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify clearance at $u_{min}$",
          "workingLatex": "y = 8\\,\\text{m} = h_{\\text{wall}}",
          "explanation": "At minimum speed, the trajectory just touches the top of the wall.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "\\text{Any speed } u \\ge 18.07 \\text{ clears the wall at angle } 45°",
          "explanation": "Faster launches give higher trajectories.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check angle is suitable",
          "workingLatex": "\\tan 45° > h/x",
          "explanation": "Need $x\\tan\\alpha > h$ for a real solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Energy perspective",
          "workingLatex": "\\text{More speed } \\Rightarrow \\text{ higher trajectory}",
          "explanation": "Greater initial kinetic energy allows the particle to rise higher.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "u_{\\min} = 18.07\\,\\text{m s}^{-1}",
          "explanation": "Minimum speed: $18.07\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam strategy",
          "workingLatex": "\\text{Set } y(x) = h \\text{ and solve for } u",
          "explanation": "Equality gives the borderline case; inequality gives the minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{\\min} = 18.07\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "minimum-speed",
      "clearance",
      "trajectory"
    ],
    "questionText": "A particle is projected at $40°$ above the horizontal from ground level. A wall of height $7\\,\\text{m}$ is at a horizontal distance of $18\\,\\text{m}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the minimum initial speed needed to clear the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the clearance condition",
          "workingLatex": "y(18) \\ge 7",
          "explanation": "At $x = 18\\,\\text{m}$, the trajectory must be at least $7\\,\\text{m}$ high.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "Express height in terms of $u$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the wall position",
          "workingLatex": "7 = 18\\tan 40° - \\dfrac{9.8 \\times 18^2}{2u^2\\cos^2 40°}",
          "explanation": "Set $y$ equal to the wall height for the minimum-speed case.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{gx^2}{2\\cos^2\\alpha(x\\tan\\alpha - h)}",
          "explanation": "Isolate $u^2$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the denominator",
          "workingLatex": "x\\tan\\alpha - h = 8.10",
          "explanation": "Denominator: $8.10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate $u^2$",
          "workingLatex": "u^2 = 333.8",
          "explanation": "$u^2 = 333.8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find minimum speed",
          "workingLatex": "u_{\\min} = 18.27\\,\\text{m s}^{-1}",
          "explanation": "$u_{\\min} = 18.27\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify clearance at $u_{min}$",
          "workingLatex": "y = 7\\,\\text{m} = h_{\\text{wall}}",
          "explanation": "At minimum speed, the trajectory just touches the top of the wall.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "\\text{Any speed } u \\ge 18.27 \\text{ clears the wall at angle } 40°",
          "explanation": "Faster launches give higher trajectories.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check angle is suitable",
          "workingLatex": "\\tan 40° > h/x",
          "explanation": "Need $x\\tan\\alpha > h$ for a real solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Energy perspective",
          "workingLatex": "\\text{More speed } \\Rightarrow \\text{ higher trajectory}",
          "explanation": "Greater initial kinetic energy allows the particle to rise higher.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "u_{\\min} = 18.27\\,\\text{m s}^{-1}",
          "explanation": "Minimum speed: $18.27\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam strategy",
          "workingLatex": "\\text{Set } y(x) = h \\text{ and solve for } u",
          "explanation": "Equality gives the borderline case; inequality gives the minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{\\min} = 18.27\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "minimum-speed",
      "clearance",
      "trajectory"
    ],
    "questionText": "A particle is projected at $35°$ above the horizontal from ground level. A wall of height $5\\,\\text{m}$ is at a horizontal distance of $12\\,\\text{m}$. Taking $g = 9.8\\,\\text{m s}^{-2}$, find the minimum initial speed needed to clear the wall.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the clearance condition",
          "workingLatex": "y(12) \\ge 5",
          "explanation": "At $x = 12\\,\\text{m}$, the trajectory must be at least $5\\,\\text{m}$ high.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^2}{2u^2\\cos^2\\alpha}",
          "explanation": "Express height in terms of $u$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the wall position",
          "workingLatex": "5 = 12\\tan 35° - \\dfrac{9.8 \\times 12^2}{2u^2\\cos^2 35°}",
          "explanation": "Set $y$ equal to the wall height for the minimum-speed case.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $u^2$",
          "workingLatex": "u^2 = \\dfrac{gx^2}{2\\cos^2\\alpha(x\\tan\\alpha - h)}",
          "explanation": "Isolate $u^2$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the denominator",
          "workingLatex": "x\\tan\\alpha - h = 3.40",
          "explanation": "Denominator: $3.40$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate $u^2$",
          "workingLatex": "u^2 = 309.1",
          "explanation": "$u^2 = 309.1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find minimum speed",
          "workingLatex": "u_{\\min} = 17.58\\,\\text{m s}^{-1}",
          "explanation": "$u_{\\min} = 17.58\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify clearance at $u_{min}$",
          "workingLatex": "y = 5\\,\\text{m} = h_{\\text{wall}}",
          "explanation": "At minimum speed, the trajectory just touches the top of the wall.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret",
          "workingLatex": "\\text{Any speed } u \\ge 17.58 \\text{ clears the wall at angle } 35°",
          "explanation": "Faster launches give higher trajectories.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check angle is suitable",
          "workingLatex": "\\tan 35° > h/x",
          "explanation": "Need $x\\tan\\alpha > h$ for a real solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Energy perspective",
          "workingLatex": "\\text{More speed } \\Rightarrow \\text{ higher trajectory}",
          "explanation": "Greater initial kinetic energy allows the particle to rise higher.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "u_{\\min} = 17.58\\,\\text{m s}^{-1}",
          "explanation": "Minimum speed: $17.58\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Exam strategy",
          "workingLatex": "\\text{Set } y(x) = h \\text{ and solve for } u",
          "explanation": "Equality gives the borderline case; inequality gives the minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{\\min} = 17.58\\,\\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y2.mech.projectiles.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "horizontal-projection",
      "impact-speed",
      "multi-part"
    ],
    "questionText": "A stone is projected horizontally with speed $15\\,\\text{m s}^{-1}$ from the top of a cliff $100\\,\\text{m}$ high. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the time to hit the ground,\n(b) the horizontal distance from the base of the cliff,\n(c) the speed of the stone when it hits the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion: find time to ground",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{200}{9.8}} = 4.52\\,\\text{s}",
          "explanation": "Time of flight: $4.52\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal range",
          "workingLatex": "R = u t = 15 \\times 4.52 = 67.76\\,\\text{m}",
          "explanation": "Range: $67.76\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical velocity at impact",
          "workingLatex": "v_y = gt = 9.8 \\times 4.52 = 44.27\\,\\text{m s}^{-1}",
          "explanation": "Downward speed at impact: $44.27\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Horizontal velocity at impact",
          "workingLatex": "v_x = 15\\,\\text{m s}^{-1}",
          "explanation": "Unchanged throughout the flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed at impact",
          "workingLatex": "v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{15^2 + 44.27^2} = 46.74\\,\\text{m s}^{-1}",
          "explanation": "Impact speed: $46.74\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direction at impact",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x} = 2.951",
          "explanation": "Angle below horizontal: $\\theta = 71.3°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Displacement vector",
          "workingLatex": "\\text{Horizontal: 67.76 m, vertical: 100 m}",
          "explanation": "Total displacement from launch to impact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Independence of motions",
          "workingLatex": "\\text{Horizontal and vertical calculated separately}",
          "explanation": "Key principle for all projectile problems.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Energy check (optional)",
          "workingLatex": "\\tfrac{1}{2}mv^2 = \\tfrac{1}{2}mu^2 + mgh",
          "explanation": "Kinetic energy at impact equals initial KE plus gravitational PE lost.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise (a) time",
          "workingLatex": "t = 4.52\\,\\text{s}",
          "explanation": "Time: $4.52\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise (b) range",
          "workingLatex": "R = 67.76\\,\\text{m}",
          "explanation": "Range: $67.76\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise (c) impact speed",
          "workingLatex": "v = 46.74\\,\\text{m s}^{-1}",
          "explanation": "Speed at impact: $46.74\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context",
          "workingLatex": "\\text{Stone falls 100 m while travelling 67.76 m horizontally}",
          "explanation": "Typical cliff-projection scenario.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Method recap",
          "workingLatex": "\\text{Find } t \\text{ from vertical, then use for horizontal}",
          "explanation": "Always solve vertical motion first for horizontal projection.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "t = 4.52\\,\\text{s}, \\quad R = 67.76\\,\\text{m}, \\quad v = 46.74\\,\\text{m s}^{-1}",
          "explanation": "Complete description of the motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = 4.52\\,\\text{s}$; (b) $R = 67.76\\,\\text{m}$; (c) $v = 46.74\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "horizontal-projection",
      "impact-speed",
      "multi-part"
    ],
    "questionText": "A stone is projected horizontally with speed $25\\,\\text{m s}^{-1}$ from the top of a cliff $45\\,\\text{m}$ high. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the time to hit the ground,\n(b) the horizontal distance from the base of the cliff,\n(c) the speed of the stone when it hits the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion: find time to ground",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{90}{9.8}} = 3.03\\,\\text{s}",
          "explanation": "Time of flight: $3.03\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal range",
          "workingLatex": "R = u t = 25 \\times 3.03 = 75.76\\,\\text{m}",
          "explanation": "Range: $75.76\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical velocity at impact",
          "workingLatex": "v_y = gt = 9.8 \\times 3.03 = 29.70\\,\\text{m s}^{-1}",
          "explanation": "Downward speed at impact: $29.70\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Horizontal velocity at impact",
          "workingLatex": "v_x = 25\\,\\text{m s}^{-1}",
          "explanation": "Unchanged throughout the flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed at impact",
          "workingLatex": "v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{25^2 + 29.70^2} = 38.82\\,\\text{m s}^{-1}",
          "explanation": "Impact speed: $38.82\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direction at impact",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x} = 1.188",
          "explanation": "Angle below horizontal: $\\theta = 49.9°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Displacement vector",
          "workingLatex": "\\text{Horizontal: 75.76 m, vertical: 45 m}",
          "explanation": "Total displacement from launch to impact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Independence of motions",
          "workingLatex": "\\text{Horizontal and vertical calculated separately}",
          "explanation": "Key principle for all projectile problems.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Energy check (optional)",
          "workingLatex": "\\tfrac{1}{2}mv^2 = \\tfrac{1}{2}mu^2 + mgh",
          "explanation": "Kinetic energy at impact equals initial KE plus gravitational PE lost.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise (a) time",
          "workingLatex": "t = 3.03\\,\\text{s}",
          "explanation": "Time: $3.03\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise (b) range",
          "workingLatex": "R = 75.76\\,\\text{m}",
          "explanation": "Range: $75.76\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise (c) impact speed",
          "workingLatex": "v = 38.82\\,\\text{m s}^{-1}",
          "explanation": "Speed at impact: $38.82\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context",
          "workingLatex": "\\text{Stone falls 45 m while travelling 75.76 m horizontally}",
          "explanation": "Typical cliff-projection scenario.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Method recap",
          "workingLatex": "\\text{Find } t \\text{ from vertical, then use for horizontal}",
          "explanation": "Always solve vertical motion first for horizontal projection.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "t = 3.03\\,\\text{s}, \\quad R = 75.76\\,\\text{m}, \\quad v = 38.82\\,\\text{m s}^{-1}",
          "explanation": "Complete description of the motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = 3.03\\,\\text{s}$; (b) $R = 75.76\\,\\text{m}$; (c) $v = 38.82\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "horizontal-projection",
      "impact-speed",
      "multi-part"
    ],
    "questionText": "A stone is projected horizontally with speed $20\\,\\text{m s}^{-1}$ from the top of a cliff $80\\,\\text{m}$ high. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the time to hit the ground,\n(b) the horizontal distance from the base of the cliff,\n(c) the speed of the stone when it hits the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion: find time to ground",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{160}{9.8}} = 4.04\\,\\text{s}",
          "explanation": "Time of flight: $4.04\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal range",
          "workingLatex": "R = u t = 20 \\times 4.04 = 80.81\\,\\text{m}",
          "explanation": "Range: $80.81\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical velocity at impact",
          "workingLatex": "v_y = gt = 9.8 \\times 4.04 = 39.60\\,\\text{m s}^{-1}",
          "explanation": "Downward speed at impact: $39.60\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Horizontal velocity at impact",
          "workingLatex": "v_x = 20\\,\\text{m s}^{-1}",
          "explanation": "Unchanged throughout the flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed at impact",
          "workingLatex": "v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{20^2 + 39.60^2} = 44.36\\,\\text{m s}^{-1}",
          "explanation": "Impact speed: $44.36\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direction at impact",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x} = 1.980",
          "explanation": "Angle below horizontal: $\\theta = 63.2°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Displacement vector",
          "workingLatex": "\\text{Horizontal: 80.81 m, vertical: 80 m}",
          "explanation": "Total displacement from launch to impact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Independence of motions",
          "workingLatex": "\\text{Horizontal and vertical calculated separately}",
          "explanation": "Key principle for all projectile problems.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Energy check (optional)",
          "workingLatex": "\\tfrac{1}{2}mv^2 = \\tfrac{1}{2}mu^2 + mgh",
          "explanation": "Kinetic energy at impact equals initial KE plus gravitational PE lost.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise (a) time",
          "workingLatex": "t = 4.04\\,\\text{s}",
          "explanation": "Time: $4.04\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise (b) range",
          "workingLatex": "R = 80.81\\,\\text{m}",
          "explanation": "Range: $80.81\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise (c) impact speed",
          "workingLatex": "v = 44.36\\,\\text{m s}^{-1}",
          "explanation": "Speed at impact: $44.36\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context",
          "workingLatex": "\\text{Stone falls 80 m while travelling 80.81 m horizontally}",
          "explanation": "Typical cliff-projection scenario.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Method recap",
          "workingLatex": "\\text{Find } t \\text{ from vertical, then use for horizontal}",
          "explanation": "Always solve vertical motion first for horizontal projection.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "t = 4.04\\,\\text{s}, \\quad R = 80.81\\,\\text{m}, \\quad v = 44.36\\,\\text{m s}^{-1}",
          "explanation": "Complete description of the motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = 4.04\\,\\text{s}$; (b) $R = 80.81\\,\\text{m}$; (c) $v = 44.36\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "horizontal-projection",
      "impact-speed",
      "multi-part"
    ],
    "questionText": "A stone is projected horizontally with speed $30\\,\\text{m s}^{-1}$ from the top of a cliff $60\\,\\text{m}$ high. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the time to hit the ground,\n(b) the horizontal distance from the base of the cliff,\n(c) the speed of the stone when it hits the ground.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion: find time to ground",
          "workingLatex": "t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{120}{9.8}} = 3.50\\,\\text{s}",
          "explanation": "Time of flight: $3.50\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal range",
          "workingLatex": "R = u t = 30 \\times 3.50 = 104.98\\,\\text{m}",
          "explanation": "Range: $104.98\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical velocity at impact",
          "workingLatex": "v_y = gt = 9.8 \\times 3.50 = 34.29\\,\\text{m s}^{-1}",
          "explanation": "Downward speed at impact: $34.29\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Horizontal velocity at impact",
          "workingLatex": "v_x = 30\\,\\text{m s}^{-1}",
          "explanation": "Unchanged throughout the flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Speed at impact",
          "workingLatex": "v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{30^2 + 34.29^2} = 45.56\\,\\text{m s}^{-1}",
          "explanation": "Impact speed: $45.56\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direction at impact",
          "workingLatex": "\\tan\\theta = \\dfrac{v_y}{v_x} = 1.143",
          "explanation": "Angle below horizontal: $\\theta = 48.8°$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Displacement vector",
          "workingLatex": "\\text{Horizontal: 104.98 m, vertical: 60 m}",
          "explanation": "Total displacement from launch to impact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Independence of motions",
          "workingLatex": "\\text{Horizontal and vertical calculated separately}",
          "explanation": "Key principle for all projectile problems.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Energy check (optional)",
          "workingLatex": "\\tfrac{1}{2}mv^2 = \\tfrac{1}{2}mu^2 + mgh",
          "explanation": "Kinetic energy at impact equals initial KE plus gravitational PE lost.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise (a) time",
          "workingLatex": "t = 3.50\\,\\text{s}",
          "explanation": "Time: $3.50\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Summarise (b) range",
          "workingLatex": "R = 104.98\\,\\text{m}",
          "explanation": "Range: $104.98\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Summarise (c) impact speed",
          "workingLatex": "v = 45.56\\,\\text{m s}^{-1}",
          "explanation": "Speed at impact: $45.56\\,\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Context",
          "workingLatex": "\\text{Stone falls 60 m while travelling 104.98 m horizontally}",
          "explanation": "Typical cliff-projection scenario.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Method recap",
          "workingLatex": "\\text{Find } t \\text{ from vertical, then use for horizontal}",
          "explanation": "Always solve vertical motion first for horizontal projection.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "t = 3.50\\,\\text{s}, \\quad R = 104.98\\,\\text{m}, \\quad v = 45.56\\,\\text{m s}^{-1}",
          "explanation": "Complete description of the motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = 3.50\\,\\text{s}$; (b) $R = 104.98\\,\\text{m}$; (c) $v = 45.56\\,\\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "comprehensive",
      "angled-projection",
      "multi-part"
    ],
    "questionText": "A particle is projected from level ground with speed $25\\,\\text{m s}^{-1}$ at $40°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the time to reach greatest height,\n(b) the greatest height,\n(c) the speed at greatest height,\n(d) the time of flight,\n(e) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = 19.15\\,\\text{m s}^{-1}, \\quad u_y = 16.07\\,\\text{m s}^{-1}",
          "explanation": "Components: $19.15\\,\\text{m s}^{-1}$ horizontal, $16.07\\,\\text{m s}^{-1}$ vertical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Time to greatest height",
          "workingLatex": "t = \\dfrac{u_y}{g} = 1.64\\,\\text{s}",
          "explanation": "Time to top: $1.64\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g} = 13.18\\,\\text{m}",
          "explanation": "Maximum height: $13.18\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Speed at greatest height",
          "workingLatex": "v = u_x = 19.15\\,\\text{m s}^{-1}",
          "explanation": "Speed at top: $19.15\\,\\text{m s}^{-1}$ (horizontal only).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(d) Time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g} = 3.28\\,\\text{s}",
          "explanation": "Total time: $3.28\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(e) Horizontal range",
          "workingLatex": "R = u_x T = 62.81\\,\\text{m}",
          "explanation": "Range: $62.81\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 80°}{g} = 62.81\\,\\text{m}",
          "explanation": "Confirms using $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Height at half the flight time",
          "workingLatex": "y_{T/2} = 13.18\\,\\text{m}",
          "explanation": "At $t = T/2$: height $= 13.18\\,\\text{m}$ (not the maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Velocity components at landing",
          "workingLatex": "v_x = 19.15\\,\\text{m s}^{-1}, \\quad v_y = -16.07\\,\\text{m s}^{-1}",
          "explanation": "Vertical component is equal in magnitude but opposite to launch.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Speed at landing equals launch speed",
          "workingLatex": "v_{\\text{land}} = u = 25\\,\\text{m s}^{-1}",
          "explanation": "Energy conservation: same height means same speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Symmetry of motion",
          "workingLatex": "\\text{Time up = time down; speed at landing = launch speed}",
          "explanation": "The trajectory is symmetric about the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Equation of trajectory",
          "workingLatex": "y = x\\tan 40° - \\dfrac{gx^2}{2u^2\\cos^2 40°}",
          "explanation": "Cartesian form for any point on the path.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Maximum range comparison",
          "workingLatex": "R_{\\max} \\text{ at } 45° = 63.78\\,\\text{m}",
          "explanation": "Given range $62.81\\,\\text{m}$ compared with maximum possible $63.78\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise key results",
          "workingLatex": "t_{\\text{up}} = 1.64\\,\\text{s}, \\quad H = 13.18\\,\\text{m}, \\quad R = 62.81\\,\\text{m}",
          "explanation": "The three most commonly requested quantities.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 1.64\\,\\text{s},\\ (b)\\ 13.18\\,\\text{m},\\ (c)\\ 19.15\\,\\text{m s}^{-1},\\ (d)\\ 3.28\\,\\text{s},\\ (e)\\ 62.81\\,\\text{m}",
          "explanation": "Complete solution to all parts.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Problem-solving framework",
          "workingLatex": "\\text{Resolve } \\rightarrow \\text{ vertical SUVAT } \\rightarrow \\text{ horizontal } \\times t",
          "explanation": "Systematic approach for any projectile question.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $1.64\\,\\text{s}$; (b) $13.18\\,\\text{m}$; (c) $19.15\\,\\text{m s}^{-1}$; (d) $3.28\\,\\text{s}$; (e) $62.81\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "comprehensive",
      "angled-projection",
      "multi-part"
    ],
    "questionText": "A particle is projected from level ground with speed $30\\,\\text{m s}^{-1}$ at $35°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the time to reach greatest height,\n(b) the greatest height,\n(c) the speed at greatest height,\n(d) the time of flight,\n(e) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = 24.57\\,\\text{m s}^{-1}, \\quad u_y = 17.21\\,\\text{m s}^{-1}",
          "explanation": "Components: $24.57\\,\\text{m s}^{-1}$ horizontal, $17.21\\,\\text{m s}^{-1}$ vertical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Time to greatest height",
          "workingLatex": "t = \\dfrac{u_y}{g} = 1.76\\,\\text{s}",
          "explanation": "Time to top: $1.76\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g} = 15.11\\,\\text{m}",
          "explanation": "Maximum height: $15.11\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Speed at greatest height",
          "workingLatex": "v = u_x = 24.57\\,\\text{m s}^{-1}",
          "explanation": "Speed at top: $24.57\\,\\text{m s}^{-1}$ (horizontal only).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(d) Time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g} = 3.51\\,\\text{s}",
          "explanation": "Total time: $3.51\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(e) Horizontal range",
          "workingLatex": "R = u_x T = 86.30\\,\\text{m}",
          "explanation": "Range: $86.30\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 70°}{g} = 86.30\\,\\text{m}",
          "explanation": "Confirms using $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Height at half the flight time",
          "workingLatex": "y_{T/2} = 15.11\\,\\text{m}",
          "explanation": "At $t = T/2$: height $= 15.11\\,\\text{m}$ (not the maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Velocity components at landing",
          "workingLatex": "v_x = 24.57\\,\\text{m s}^{-1}, \\quad v_y = -17.21\\,\\text{m s}^{-1}",
          "explanation": "Vertical component is equal in magnitude but opposite to launch.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Speed at landing equals launch speed",
          "workingLatex": "v_{\\text{land}} = u = 30\\,\\text{m s}^{-1}",
          "explanation": "Energy conservation: same height means same speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Symmetry of motion",
          "workingLatex": "\\text{Time up = time down; speed at landing = launch speed}",
          "explanation": "The trajectory is symmetric about the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Equation of trajectory",
          "workingLatex": "y = x\\tan 35° - \\dfrac{gx^2}{2u^2\\cos^2 35°}",
          "explanation": "Cartesian form for any point on the path.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Maximum range comparison",
          "workingLatex": "R_{\\max} \\text{ at } 45° = 91.84\\,\\text{m}",
          "explanation": "Given range $86.30\\,\\text{m}$ compared with maximum possible $91.84\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise key results",
          "workingLatex": "t_{\\text{up}} = 1.76\\,\\text{s}, \\quad H = 15.11\\,\\text{m}, \\quad R = 86.30\\,\\text{m}",
          "explanation": "The three most commonly requested quantities.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 1.76\\,\\text{s},\\ (b)\\ 15.11\\,\\text{m},\\ (c)\\ 24.57\\,\\text{m s}^{-1},\\ (d)\\ 3.51\\,\\text{s},\\ (e)\\ 86.30\\,\\text{m}",
          "explanation": "Complete solution to all parts.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Problem-solving framework",
          "workingLatex": "\\text{Resolve } \\rightarrow \\text{ vertical SUVAT } \\rightarrow \\text{ horizontal } \\times t",
          "explanation": "Systematic approach for any projectile question.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $1.76\\,\\text{s}$; (b) $15.11\\,\\text{m}$; (c) $24.57\\,\\text{m s}^{-1}$; (d) $3.51\\,\\text{s}$; (e) $86.30\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "comprehensive",
      "angled-projection",
      "multi-part"
    ],
    "questionText": "A particle is projected from level ground with speed $20\\,\\text{m s}^{-1}$ at $50°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the time to reach greatest height,\n(b) the greatest height,\n(c) the speed at greatest height,\n(d) the time of flight,\n(e) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = 12.86\\,\\text{m s}^{-1}, \\quad u_y = 15.32\\,\\text{m s}^{-1}",
          "explanation": "Components: $12.86\\,\\text{m s}^{-1}$ horizontal, $15.32\\,\\text{m s}^{-1}$ vertical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Time to greatest height",
          "workingLatex": "t = \\dfrac{u_y}{g} = 1.56\\,\\text{s}",
          "explanation": "Time to top: $1.56\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g} = 11.98\\,\\text{m}",
          "explanation": "Maximum height: $11.98\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Speed at greatest height",
          "workingLatex": "v = u_x = 12.86\\,\\text{m s}^{-1}",
          "explanation": "Speed at top: $12.86\\,\\text{m s}^{-1}$ (horizontal only).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(d) Time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g} = 3.13\\,\\text{s}",
          "explanation": "Total time: $3.13\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(e) Horizontal range",
          "workingLatex": "R = u_x T = 40.20\\,\\text{m}",
          "explanation": "Range: $40.20\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 100°}{g} = 40.20\\,\\text{m}",
          "explanation": "Confirms using $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Height at half the flight time",
          "workingLatex": "y_{T/2} = 11.98\\,\\text{m}",
          "explanation": "At $t = T/2$: height $= 11.98\\,\\text{m}$ (not the maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Velocity components at landing",
          "workingLatex": "v_x = 12.86\\,\\text{m s}^{-1}, \\quad v_y = -15.32\\,\\text{m s}^{-1}",
          "explanation": "Vertical component is equal in magnitude but opposite to launch.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Speed at landing equals launch speed",
          "workingLatex": "v_{\\text{land}} = u = 20\\,\\text{m s}^{-1}",
          "explanation": "Energy conservation: same height means same speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Symmetry of motion",
          "workingLatex": "\\text{Time up = time down; speed at landing = launch speed}",
          "explanation": "The trajectory is symmetric about the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Equation of trajectory",
          "workingLatex": "y = x\\tan 50° - \\dfrac{gx^2}{2u^2\\cos^2 50°}",
          "explanation": "Cartesian form for any point on the path.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Maximum range comparison",
          "workingLatex": "R_{\\max} \\text{ at } 45° = 40.82\\,\\text{m}",
          "explanation": "Given range $40.20\\,\\text{m}$ compared with maximum possible $40.82\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise key results",
          "workingLatex": "t_{\\text{up}} = 1.56\\,\\text{s}, \\quad H = 11.98\\,\\text{m}, \\quad R = 40.20\\,\\text{m}",
          "explanation": "The three most commonly requested quantities.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 1.56\\,\\text{s},\\ (b)\\ 11.98\\,\\text{m},\\ (c)\\ 12.86\\,\\text{m s}^{-1},\\ (d)\\ 3.13\\,\\text{s},\\ (e)\\ 40.20\\,\\text{m}",
          "explanation": "Complete solution to all parts.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Problem-solving framework",
          "workingLatex": "\\text{Resolve } \\rightarrow \\text{ vertical SUVAT } \\rightarrow \\text{ horizontal } \\times t",
          "explanation": "Systematic approach for any projectile question.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $1.56\\,\\text{s}$; (b) $11.98\\,\\text{m}$; (c) $12.86\\,\\text{m s}^{-1}$; (d) $3.13\\,\\text{s}$; (e) $40.20\\,\\text{m}$."
    }
  },
  {
    "id": "al.y2.mech.projectiles.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectiles",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "tags": [
      "comprehensive",
      "angled-projection",
      "multi-part"
    ],
    "questionText": "A particle is projected from level ground with speed $35\\,\\text{m s}^{-1}$ at $30°$ above the horizontal. Taking $g = 9.8\\,\\text{m s}^{-2}$, find:\n\n(a) the time to reach greatest height,\n(b) the greatest height,\n(c) the speed at greatest height,\n(d) the time of flight,\n(e) the horizontal range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = 30.31\\,\\text{m s}^{-1}, \\quad u_y = 17.50\\,\\text{m s}^{-1}",
          "explanation": "Components: $30.31\\,\\text{m s}^{-1}$ horizontal, $17.50\\,\\text{m s}^{-1}$ vertical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Time to greatest height",
          "workingLatex": "t = \\dfrac{u_y}{g} = 1.79\\,\\text{s}",
          "explanation": "Time to top: $1.79\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Greatest height",
          "workingLatex": "H = \\dfrac{u_y^2}{2g} = 15.62\\,\\text{m}",
          "explanation": "Maximum height: $15.62\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Speed at greatest height",
          "workingLatex": "v = u_x = 30.31\\,\\text{m s}^{-1}",
          "explanation": "Speed at top: $30.31\\,\\text{m s}^{-1}$ (horizontal only).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(d) Time of flight",
          "workingLatex": "T = \\dfrac{2u_y}{g} = 3.57\\,\\text{s}",
          "explanation": "Total time: $3.57\\,\\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(e) Horizontal range",
          "workingLatex": "R = u_x T = 108.25\\,\\text{m}",
          "explanation": "Range: $108.25\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify range formula",
          "workingLatex": "R = \\dfrac{u^2\\sin 60°}{g} = 108.25\\,\\text{m}",
          "explanation": "Confirms using $R = u^2\\sin 2\\alpha/g$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Height at half the flight time",
          "workingLatex": "y_{T/2} = 15.62\\,\\text{m}",
          "explanation": "At $t = T/2$: height $= 15.62\\,\\text{m}$ (not the maximum).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Velocity components at landing",
          "workingLatex": "v_x = 30.31\\,\\text{m s}^{-1}, \\quad v_y = -17.50\\,\\text{m s}^{-1}",
          "explanation": "Vertical component is equal in magnitude but opposite to launch.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Speed at landing equals launch speed",
          "workingLatex": "v_{\\text{land}} = u = 35\\,\\text{m s}^{-1}",
          "explanation": "Energy conservation: same height means same speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Symmetry of motion",
          "workingLatex": "\\text{Time up = time down; speed at landing = launch speed}",
          "explanation": "The trajectory is symmetric about the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Equation of trajectory",
          "workingLatex": "y = x\\tan 30° - \\dfrac{gx^2}{2u^2\\cos^2 30°}",
          "explanation": "Cartesian form for any point on the path.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Maximum range comparison",
          "workingLatex": "R_{\\max} \\text{ at } 45° = 125\\,\\text{m}",
          "explanation": "Given range $108.25\\,\\text{m}$ compared with maximum possible $125\\,\\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise key results",
          "workingLatex": "t_{\\text{up}} = 1.79\\,\\text{s}, \\quad H = 15.62\\,\\text{m}, \\quad R = 108.25\\,\\text{m}",
          "explanation": "The three most commonly requested quantities.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Final answers",
          "workingLatex": "(a)\\ 1.79\\,\\text{s},\\ (b)\\ 15.62\\,\\text{m},\\ (c)\\ 30.31\\,\\text{m s}^{-1},\\ (d)\\ 3.57\\,\\text{s},\\ (e)\\ 108.25\\,\\text{m}",
          "explanation": "Complete solution to all parts.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Problem-solving framework",
          "workingLatex": "\\text{Resolve } \\rightarrow \\text{ vertical SUVAT } \\rightarrow \\text{ horizontal } \\times t",
          "explanation": "Systematic approach for any projectile question.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $1.79\\,\\text{s}$; (b) $15.62\\,\\text{m}$; (c) $30.31\\,\\text{m s}^{-1}$; (d) $3.57\\,\\text{s}$; (e) $108.25\\,\\text{m}$."
    }
  }
];
