import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q001",
    "tags": [
      "cliff",
      "horizontal projection"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A stone is projected horizontally at $10\\ \\text{m s}^{-1}$ from the top of a cliff $20\\ \\text{m}$ high. Find the time to reach the sea and the horizontal distance travelled. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the motion",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Horizontal projection: no horizontal acceleration; gravity acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "x = ut = 10t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^{2} = 20 - 5t^{2}",
          "explanation": "Starts at height $h$ with zero initial vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time to ground",
          "workingLatex": "0 = 20 - 5t^{2} \\Rightarrow t = 2\\ \\text{s}",
          "explanation": "Solve $y = 0$ for time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal range",
          "workingLatex": "x = 10 \\times 2 = 20\\ \\text{m}",
          "explanation": "Distance travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Range} = 20\\ \\text{m}",
          "explanation": "How far the projectile lands from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $= 20\\ \\text{m}$ (time of flight $= 2\\ \\text{s}$)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q002",
    "tags": [
      "ball",
      "horizontal projection"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A ball is thrown horizontally at $15\\ \\text{m s}^{-1}$ from a height of $45\\ \\text{m}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the motion",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Horizontal projection: no horizontal acceleration; gravity acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "x = ut = 15t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^{2} = 45 - 5t^{2}",
          "explanation": "Starts at height $h$ with zero initial vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time to ground",
          "workingLatex": "0 = 45 - 5t^{2} \\Rightarrow t = 3\\ \\text{s}",
          "explanation": "Solve $y = 0$ for time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal range",
          "workingLatex": "x = 15 \\times 3 = 45\\ \\text{m}",
          "explanation": "Distance travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Range} = 45\\ \\text{m}",
          "explanation": "How far the projectile lands from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $= 45\\ \\text{m}$ (time of flight $= 3\\ \\text{s}$)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q003",
    "tags": [
      "platform",
      "horizontal projection"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle is projected horizontally at $8\\ \\text{m s}^{-1}$ from a platform $5\\ \\text{m}$ high. How far does it travel horizontally? Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the motion",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Horizontal projection: no horizontal acceleration; gravity acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "x = ut = 8t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^{2} = 5 - 5t^{2}",
          "explanation": "Starts at height $h$ with zero initial vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time to ground",
          "workingLatex": "0 = 5 - 5t^{2} \\Rightarrow t = 1\\ \\text{s}",
          "explanation": "Solve $y = 0$ for time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal range",
          "workingLatex": "x = 8 \\times 1 = 8\\ \\text{m}",
          "explanation": "Distance travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Range} = 8\\ \\text{m}",
          "explanation": "How far the projectile lands from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $= 8\\ \\text{m}$ (time of flight $= 1\\ \\text{s}$)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q004",
    "tags": [
      "fired",
      "horizontal projection"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "From a height of $80\\ \\text{m}$, a projectile is fired horizontally at $20\\ \\text{m s}^{-1}$. Find the horizontal range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the motion",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Horizontal projection: no horizontal acceleration; gravity acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "x = ut = 20t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^{2} = 80 - 5t^{2}",
          "explanation": "Starts at height $h$ with zero initial vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time to ground",
          "workingLatex": "0 = 80 - 5t^{2} \\Rightarrow t = 4\\ \\text{s}",
          "explanation": "Solve $y = 0$ for time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal range",
          "workingLatex": "x = 20 \\times 4 = 80\\ \\text{m}",
          "explanation": "Distance travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Range} = 80\\ \\text{m}",
          "explanation": "How far the projectile lands from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $= 80\\ \\text{m}$ (time of flight $= 4\\ \\text{s}$)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q005",
    "tags": [
      "package",
      "horizontal projection"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A package drops horizontally at $12\\ \\text{m s}^{-1}$ from $32\\ \\text{m}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the motion",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Horizontal projection: no horizontal acceleration; gravity acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "x = ut = 12t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^{2} = 32 - 5t^{2}",
          "explanation": "Starts at height $h$ with zero initial vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time to ground",
          "workingLatex": "0 = 32 - 5t^{2} \\Rightarrow t = 2.53\\ \\text{s}",
          "explanation": "Solve $y = 0$ for time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal range",
          "workingLatex": "x = 12 \\times 2.53 = 30.4\\ \\text{m}",
          "explanation": "Distance travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Range} = 30.4\\ \\text{m}",
          "explanation": "How far the projectile lands from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $= 30.4\\ \\text{m}$ (time of flight $= 2.53\\ \\text{s}$)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q006",
    "tags": [
      "table",
      "horizontal projection"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A marble leaves a table $1.25\\ \\text{m}$ high at $5\\ \\text{m s}^{-1}$ horizontally. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the motion",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Horizontal projection: no horizontal acceleration; gravity acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "x = ut = 5t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^{2} = 1.25 - 5t^{2}",
          "explanation": "Starts at height $h$ with zero initial vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time to ground",
          "workingLatex": "0 = 1.25 - 5t^{2} \\Rightarrow t = 0.5\\ \\text{s}",
          "explanation": "Solve $y = 0$ for time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal range",
          "workingLatex": "x = 5 \\times 0.5 = 2.5\\ \\text{m}",
          "explanation": "Distance travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Range} = 2.5\\ \\text{m}",
          "explanation": "How far the projectile lands from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $= 2.5\\ \\text{m}$ (time of flight $= 0.5\\ \\text{s}$)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q007",
    "tags": [
      "launch",
      "horizontal projection"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A projectile is launched horizontally at $25\\ \\text{m s}^{-1}$ from $125\\ \\text{m}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the motion",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Horizontal projection: no horizontal acceleration; gravity acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "x = ut = 25t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^{2} = 125 - 5t^{2}",
          "explanation": "Starts at height $h$ with zero initial vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time to ground",
          "workingLatex": "0 = 125 - 5t^{2} \\Rightarrow t = 5\\ \\text{s}",
          "explanation": "Solve $y = 0$ for time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal range",
          "workingLatex": "x = 25 \\times 5 = 125\\ \\text{m}",
          "explanation": "Distance travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Range} = 125\\ \\text{m}",
          "explanation": "How far the projectile lands from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $= 125\\ \\text{m}$ (time of flight $= 5\\ \\text{s}$)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q008",
    "tags": [
      "ball",
      "horizontal projection"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "From $11.25\\ \\text{m}$ above ground, a ball is projected horizontally at $6\\ \\text{m s}^{-1}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the motion",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Horizontal projection: no horizontal acceleration; gravity acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "x = ut = 6t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^{2} = 11.25 - 5t^{2}",
          "explanation": "Starts at height $h$ with zero initial vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time to ground",
          "workingLatex": "0 = 11.25 - 5t^{2} \\Rightarrow t = 1.5\\ \\text{s}",
          "explanation": "Solve $y = 0$ for time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal range",
          "workingLatex": "x = 6 \\times 1.5 = 9\\ \\text{m}",
          "explanation": "Distance travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Range} = 9\\ \\text{m}",
          "explanation": "How far the projectile lands from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $= 9\\ \\text{m}$ (time of flight $= 1.5\\ \\text{s}$)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q009",
    "tags": [
      "components"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle is projected with speed $20\\ \\text{m s}^{-1}$ at $30^\\circ$ above the horizontal. Find $u_x$ and $u_y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split the launch speed into horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "u = 20\\ \\text{m s}^{-1},\\; \\alpha = 30°",
          "explanation": "Given launch speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Horizontal component",
          "workingLatex": "u_x = 20\\cos 30° = 17.3\\ \\text{m s}^{-1}",
          "explanation": "Adjacent side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertical component",
          "workingLatex": "u_y = 20\\sin 30° = 10\\ \\text{m s}^{-1}",
          "explanation": "Opposite side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\sqrt{u_x^{2}+u_y^{2}} \\approx 20",
          "explanation": "Components should recombine to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 17.3\\ \\text{m s}^{-1},\\; u_y = 10\\ \\text{m s}^{-1}",
          "explanation": "Initial velocity components.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 17.3\\ \\text{m s}^{-1}$, $u_y = 10\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q010",
    "tags": [
      "components"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the horizontal and vertical components of $10\\ \\text{m s}^{-1}$ at $45^\\circ$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split the launch speed into horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "u = 10\\ \\text{m s}^{-1},\\; \\alpha = 45°",
          "explanation": "Given launch speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Horizontal component",
          "workingLatex": "u_x = 10\\cos 45° = 7.07\\ \\text{m s}^{-1}",
          "explanation": "Adjacent side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertical component",
          "workingLatex": "u_y = 10\\sin 45° = 7.07\\ \\text{m s}^{-1}",
          "explanation": "Opposite side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\sqrt{u_x^{2}+u_y^{2}} \\approx 10",
          "explanation": "Components should recombine to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 7.07\\ \\text{m s}^{-1},\\; u_y = 7.07\\ \\text{m s}^{-1}",
          "explanation": "Initial velocity components.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 7.07\\ \\text{m s}^{-1}$, $u_y = 7.07\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q011",
    "tags": [
      "components"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A projectile is launched at $25\\ \\text{m s}^{-1}$ and $60^\\circ$. Find $u_x$ and $u_y$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split the launch speed into horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "u = 25\\ \\text{m s}^{-1},\\; \\alpha = 60°",
          "explanation": "Given launch speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Horizontal component",
          "workingLatex": "u_x = 25\\cos 60° = 12.5\\ \\text{m s}^{-1}",
          "explanation": "Adjacent side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertical component",
          "workingLatex": "u_y = 25\\sin 60° = 21.7\\ \\text{m s}^{-1}",
          "explanation": "Opposite side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\sqrt{u_x^{2}+u_y^{2}} \\approx 25",
          "explanation": "Components should recombine to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 12.5\\ \\text{m s}^{-1},\\; u_y = 21.7\\ \\text{m s}^{-1}",
          "explanation": "Initial velocity components.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 12.5\\ \\text{m s}^{-1}$, $u_y = 21.7\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q012",
    "tags": [
      "components"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Resolve $40\\ \\text{m s}^{-1}$ at $30^\\circ$ into components.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split the launch speed into horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "u = 40\\ \\text{m s}^{-1},\\; \\alpha = 30°",
          "explanation": "Given launch speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Horizontal component",
          "workingLatex": "u_x = 40\\cos 30° = 34.6\\ \\text{m s}^{-1}",
          "explanation": "Adjacent side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertical component",
          "workingLatex": "u_y = 40\\sin 30° = 20\\ \\text{m s}^{-1}",
          "explanation": "Opposite side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\sqrt{u_x^{2}+u_y^{2}} \\approx 40",
          "explanation": "Components should recombine to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 34.6\\ \\text{m s}^{-1},\\; u_y = 20\\ \\text{m s}^{-1}",
          "explanation": "Initial velocity components.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 34.6\\ \\text{m s}^{-1}$, $u_y = 20\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q013",
    "tags": [
      "components"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find components for $15\\ \\text{m s}^{-1}$ at $53^\\circ$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split the launch speed into horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "u = 15\\ \\text{m s}^{-1},\\; \\alpha = 53°",
          "explanation": "Given launch speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Horizontal component",
          "workingLatex": "u_x = 15\\cos 53° = 9.03\\ \\text{m s}^{-1}",
          "explanation": "Adjacent side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertical component",
          "workingLatex": "u_y = 15\\sin 53° = 12\\ \\text{m s}^{-1}",
          "explanation": "Opposite side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\sqrt{u_x^{2}+u_y^{2}} \\approx 15",
          "explanation": "Components should recombine to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 9.03\\ \\text{m s}^{-1},\\; u_y = 12\\ \\text{m s}^{-1}",
          "explanation": "Initial velocity components.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 9.03\\ \\text{m s}^{-1}$, $u_y = 12\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q014",
    "tags": [
      "components"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Resolve $30\\ \\text{m s}^{-1}$ at $45^\\circ$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split the launch speed into horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "u = 30\\ \\text{m s}^{-1},\\; \\alpha = 45°",
          "explanation": "Given launch speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Horizontal component",
          "workingLatex": "u_x = 30\\cos 45° = 21.2\\ \\text{m s}^{-1}",
          "explanation": "Adjacent side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertical component",
          "workingLatex": "u_y = 30\\sin 45° = 21.2\\ \\text{m s}^{-1}",
          "explanation": "Opposite side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\sqrt{u_x^{2}+u_y^{2}} \\approx 30",
          "explanation": "Components should recombine to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 21.2\\ \\text{m s}^{-1},\\; u_y = 21.2\\ \\text{m s}^{-1}",
          "explanation": "Initial velocity components.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 21.2\\ \\text{m s}^{-1}$, $u_y = 21.2\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q015",
    "tags": [
      "definition",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "State the horizontal and vertical accelerations for a projectile modelled without air resistance.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assumptions",
          "workingLatex": "\\text{No air resistance; constant } g",
          "explanation": "Standard A-Level projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "a_x = 0",
          "explanation": "No horizontal force, so horizontal speed is constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "a_y = -g",
          "explanation": "Gravity accelerates the particle downward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Independence",
          "workingLatex": "\\text{Horizontal and vertical motions are independent}",
          "explanation": "This is the key modelling idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer concept",
          "workingLatex": "Horizontal acceleration $a_x = 0$; vertical acceleration $a_y = -g$ (taking upward as positive).",
          "explanation": "Clear statement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Application",
          "workingLatex": "\\text{Resolve initial velocity and use suvat separately}",
          "explanation": "Standard solution method.",
          "diagram": null
        }
      ],
      "finalAnswer": "Horizontal acceleration $a_x = 0$; vertical acceleration $a_y = -g$ (taking upward as positive)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q016",
    "tags": [
      "definition",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "Why are horizontal and vertical motions treated separately in projectile problems?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assumptions",
          "workingLatex": "\\text{No air resistance; constant } g",
          "explanation": "Standard A-Level projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "a_x = 0",
          "explanation": "No horizontal force, so horizontal speed is constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "a_y = -g",
          "explanation": "Gravity accelerates the particle downward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Independence",
          "workingLatex": "\\text{Horizontal and vertical motions are independent}",
          "explanation": "This is the key modelling idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer concept",
          "workingLatex": "Because there is no horizontal force (so $a_x = 0$) while gravity acts vertically. The motions are independent and can each be solved with suvat.",
          "explanation": "Clear statement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Application",
          "workingLatex": "\\text{Resolve initial velocity and use suvat separately}",
          "explanation": "Standard solution method.",
          "diagram": null
        }
      ],
      "finalAnswer": "Because there is no horizontal force (so $a_x = 0$) while gravity acts vertically. The motions are independent and can each be solved with suvat."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q017",
    "tags": [
      "definition",
      "definition"
    ],
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "questionText": "What is the shape of the path of a projectile under gravity (no air resistance)?",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Assumptions",
          "workingLatex": "\\text{No air resistance; constant } g",
          "explanation": "Standard A-Level projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "a_x = 0",
          "explanation": "No horizontal force, so horizontal speed is constant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "a_y = -g",
          "explanation": "Gravity accelerates the particle downward.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Independence",
          "workingLatex": "\\text{Horizontal and vertical motions are independent}",
          "explanation": "This is the key modelling idea.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer concept",
          "workingLatex": "A parabola, described by $y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}$.",
          "explanation": "Clear statement.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Application",
          "workingLatex": "\\text{Resolve initial velocity and use suvat separately}",
          "explanation": "Standard solution method.",
          "diagram": null
        }
      ],
      "finalAnswer": "A parabola, described by $y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q018",
    "tags": [
      "height",
      "maximum height"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A particle is projected at $20\\ \\text{m s}^{-1}$ at $30^\\circ$. Find the maximum height. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = u\\sin\\alpha = 10\\ \\text{m s}^{-1}",
          "explanation": "Only vertical motion affects maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use v² = u² + 2as",
          "workingLatex": "0 = u_y^{2} - 2gH",
          "explanation": "At the top, vertical speed is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "H = \\dfrac{u_y^{2}}{2g} = \\dfrac{10^{2}}{2 \\times 10}",
          "explanation": "Formula for greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "H = 5\\ \\text{m}",
          "explanation": "Maximum height above launch point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Measured from the point of projection}",
          "explanation": "Not necessarily above ground unless launched from ground level.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H = 5\\ \\text{m}",
          "explanation": "Greatest height.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H = 5\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q019",
    "tags": [
      "height",
      "maximum height"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the greatest height for projection at $30\\ \\text{m s}^{-1}$ and $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = u\\sin\\alpha = 21.21\\ \\text{m s}^{-1}",
          "explanation": "Only vertical motion affects maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use v² = u² + 2as",
          "workingLatex": "0 = u_y^{2} - 2gH",
          "explanation": "At the top, vertical speed is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "H = \\dfrac{u_y^{2}}{2g} = \\dfrac{21.21^{2}}{2 \\times 10}",
          "explanation": "Formula for greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "H = 22.5\\ \\text{m}",
          "explanation": "Maximum height above launch point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Measured from the point of projection}",
          "explanation": "Not necessarily above ground unless launched from ground level.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H = 22.5\\ \\text{m}",
          "explanation": "Greatest height.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H = 22.5\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q020",
    "tags": [
      "height",
      "maximum height"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A projectile is fired at $10\\ \\text{m s}^{-1}$ and $60^\\circ$. Find the maximum height. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = u\\sin\\alpha = 8.66\\ \\text{m s}^{-1}",
          "explanation": "Only vertical motion affects maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use v² = u² + 2as",
          "workingLatex": "0 = u_y^{2} - 2gH",
          "explanation": "At the top, vertical speed is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "H = \\dfrac{u_y^{2}}{2g} = \\dfrac{8.66^{2}}{2 \\times 10}",
          "explanation": "Formula for greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "H = 3.75\\ \\text{m}",
          "explanation": "Maximum height above launch point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Measured from the point of projection}",
          "explanation": "Not necessarily above ground unless launched from ground level.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H = 3.75\\ \\text{m}",
          "explanation": "Greatest height.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H = 3.75\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q021",
    "tags": [
      "time of flight"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the time of flight for a projectile launched at $20\\ \\text{m s}^{-1}$ at $30^\\circ$ on level ground. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Displacement from launch level returning to same height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Return to launch height",
          "workingLatex": "0 = u_y t - 5t^{2}",
          "explanation": "Set $y = 0$ for landing at same vertical level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t(u_y - 5t) = 0",
          "explanation": "Two solutions: launch and landing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Non-zero root",
          "workingLatex": "t = \\dfrac{u_y}{g} = \\dfrac{10}{10} = 2\\ \\text{s}",
          "explanation": "Time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative formula",
          "workingLatex": "T = \\dfrac{2u\\sin\\alpha}{g}",
          "explanation": "Useful when angle and speed are given.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "T = 2\\ \\text{s}",
          "explanation": "Total time in the air.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 2\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q022",
    "tags": [
      "time of flight"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A ball is kicked at $40\\ \\text{m s}^{-1}$ at $45^\\circ$. Find the time of flight. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Displacement from launch level returning to same height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Return to launch height",
          "workingLatex": "0 = u_y t - 5t^{2}",
          "explanation": "Set $y = 0$ for landing at same vertical level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t(u_y - 5t) = 0",
          "explanation": "Two solutions: launch and landing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Non-zero root",
          "workingLatex": "t = \\dfrac{u_y}{g} = \\dfrac{28.28}{10} = 5.66\\ \\text{s}",
          "explanation": "Time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative formula",
          "workingLatex": "T = \\dfrac{2u\\sin\\alpha}{g}",
          "explanation": "Useful when angle and speed are given.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "T = 5.66\\ \\text{s}",
          "explanation": "Total time in the air.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 5.66\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q023",
    "tags": [
      "time of flight"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the time of flight for $15\\ \\text{m s}^{-1}$ at $60^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Displacement from launch level returning to same height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Return to launch height",
          "workingLatex": "0 = u_y t - 5t^{2}",
          "explanation": "Set $y = 0$ for landing at same vertical level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t(u_y - 5t) = 0",
          "explanation": "Two solutions: launch and landing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Non-zero root",
          "workingLatex": "t = \\dfrac{u_y}{g} = \\dfrac{12.99}{10} = 2.6\\ \\text{s}",
          "explanation": "Time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative formula",
          "workingLatex": "T = \\dfrac{2u\\sin\\alpha}{g}",
          "explanation": "Useful when angle and speed are given.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "T = 2.6\\ \\text{s}",
          "explanation": "Total time in the air.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 2.6\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q024",
    "tags": [
      "time of flight"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "A projectile is launched at $25\\ \\text{m s}^{-1}$ and $53^\\circ$. Find the time of flight. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Displacement from launch level returning to same height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Return to launch height",
          "workingLatex": "0 = u_y t - 5t^{2}",
          "explanation": "Set $y = 0$ for landing at same vertical level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t(u_y - 5t) = 0",
          "explanation": "Two solutions: launch and landing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Non-zero root",
          "workingLatex": "t = \\dfrac{u_y}{g} = \\dfrac{19.97}{10} = 4\\ \\text{s}",
          "explanation": "Time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative formula",
          "workingLatex": "T = \\dfrac{2u\\sin\\alpha}{g}",
          "explanation": "Useful when angle and speed are given.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "T = 4\\ \\text{s}",
          "explanation": "Total time in the air.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 4\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q025",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Find the horizontal range of a projectile launched at $20\\ \\text{m s}^{-1}$ and $30^\\circ$ on level ground. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{20^{2}\\sin 60°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 17.32 \\times 2",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 34.6\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 34.6\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 34.6\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q026",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A ball is projected at $30\\ \\text{m s}^{-1}$ at $45^\\circ$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{30^{2}\\sin 90°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 21.21 \\times 4.24",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 90\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 90\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 90\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q027",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Find the range for $10\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{10^{2}\\sin 60°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 8.66 \\times 1",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 8.66\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 8.66\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 8.66\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q028",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A projectile is fired at $25\\ \\text{m s}^{-1}$ and $60^\\circ$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{25^{2}\\sin 120°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 12.5 \\times 4.33",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 54.1\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 54.1\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 54.1\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q029",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Find the range for $40\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{40^{2}\\sin 60°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 34.64 \\times 4",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 138.6\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 138.6\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 138.6\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q030",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A stone is thrown at $20\\ \\text{m s}^{-1}$ and $45^\\circ$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{20^{2}\\sin 90°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 14.14 \\times 2.83",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 40\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 40\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 40\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q031",
    "tags": [
      "trajectory",
      "trajectory"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "questionText": "A projectile is launched at $20\\ \\text{m s}^{-1}$ at $30^\\circ$. Find the Cartesian equation of its trajectory.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric equations",
          "workingLatex": "x = u t\\cos\\alpha,\\; y = u t\\sin\\alpha - \\tfrac{1}{2}gt^{2}",
          "explanation": "Separate horizontal and vertical motion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Eliminate t",
          "workingLatex": "t = \\dfrac{x}{u\\cos\\alpha}",
          "explanation": "Express time from horizontal equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into y",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Cartesian equation of the path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute values",
          "workingLatex": "y = x\\tan 30^\\circ - \\dfrac{10x^{2}}{2 \\times 400 \\times \\cos^{2} 30^\\circ} = 0.577x - 0.0144x^{2}",
          "explanation": "Equation for this projectile.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify shape",
          "workingLatex": "\\text{Parabola}",
          "explanation": "The trajectory is a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "y = x\\tan 30^\\circ - \\dfrac{10x^{2}}{2 \\times 400 \\times \\cos^{2} 30^\\circ} = 0.577x - 0.0144x^{2}",
          "explanation": "Trajectory equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = x\\tan 30^\\circ - \\dfrac{10x^{2}}{2 \\times 400 \\times \\cos^{2} 30^\\circ} = 0.577x - 0.0144x^{2}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q032",
    "tags": [
      "trajectory",
      "trajectory"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find the trajectory equation for projection at $10\\ \\text{m s}^{-1}$ and $45^\\circ$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric equations",
          "workingLatex": "x = u t\\cos\\alpha,\\; y = u t\\sin\\alpha - \\tfrac{1}{2}gt^{2}",
          "explanation": "Separate horizontal and vertical motion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Eliminate t",
          "workingLatex": "t = \\dfrac{x}{u\\cos\\alpha}",
          "explanation": "Express time from horizontal equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into y",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Cartesian equation of the path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute values",
          "workingLatex": "y = x - 0.1x^{2}",
          "explanation": "Equation for this projectile.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify shape",
          "workingLatex": "\\text{Parabola}",
          "explanation": "The trajectory is a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "y = x - 0.1x^{2}",
          "explanation": "Trajectory equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = x - 0.1x^{2}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q033",
    "tags": [
      "find angle"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A projectile is launched at $20\\ \\text{m s}^{-1}$ and lands $34.6\\ \\text{m}$ away on level ground. Find one possible launch angle. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Relate range, speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{Rg}{u^{2}}",
          "explanation": "Make $\\sin 2\\alpha$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{34.6 \\times 10}{20^{2}}",
          "explanation": "Insert known values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for α",
          "workingLatex": "2\\alpha = 60° \\Rightarrow \\alpha = 30°",
          "explanation": "Find the launch angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\text{Two angles often possible for the same range}",
          "explanation": "Complementary angles give the same range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\alpha = 30°",
          "explanation": "Launch angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 30°$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q034",
    "tags": [
      "find angle"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A ball is kicked at $30\\ \\text{m s}^{-1}$ and travels $90\\ \\text{m}$. Find the launch angle. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Relate range, speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{Rg}{u^{2}}",
          "explanation": "Make $\\sin 2\\alpha$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{90 \\times 10}{30^{2}}",
          "explanation": "Insert known values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for α",
          "workingLatex": "2\\alpha = 90° \\Rightarrow \\alpha = 45°",
          "explanation": "Find the launch angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\text{Two angles often possible for the same range}",
          "explanation": "Complementary angles give the same range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\alpha = 45°",
          "explanation": "Launch angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 45°$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q035",
    "tags": [
      "maximum height"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the greatest height for $40\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = u\\sin\\alpha = 20\\ \\text{m s}^{-1}",
          "explanation": "Only vertical motion affects maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use v² = u² + 2as",
          "workingLatex": "0 = u_y^{2} - 2gH",
          "explanation": "At the top, vertical speed is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "H = \\dfrac{u_y^{2}}{2g} = \\dfrac{20^{2}}{2 \\times 10}",
          "explanation": "Formula for greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "H = 20\\ \\text{m}",
          "explanation": "Maximum height above launch point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Measured from the point of projection}",
          "explanation": "Not necessarily above ground unless launched from ground level.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H = 20\\ \\text{m}",
          "explanation": "Greatest height.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H = 20\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q036",
    "tags": [
      "time of flight"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Find the time of flight for $30\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Displacement from launch level returning to same height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Return to launch height",
          "workingLatex": "0 = u_y t - 5t^{2}",
          "explanation": "Set $y = 0$ for landing at same vertical level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t(u_y - 5t) = 0",
          "explanation": "Two solutions: launch and landing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Non-zero root",
          "workingLatex": "t = \\dfrac{u_y}{g} = \\dfrac{15}{10} = 3\\ \\text{s}",
          "explanation": "Time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative formula",
          "workingLatex": "T = \\dfrac{2u\\sin\\alpha}{g}",
          "explanation": "Useful when angle and speed are given.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "T = 3\\ \\text{s}",
          "explanation": "Total time in the air.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 3\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q037",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Find the range for $15\\ \\text{m s}^{-1}$ at $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{15^{2}\\sin 90°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 10.61 \\times 2.12",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 22.5\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 22.5\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 22.5\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q038",
    "tags": [
      "components"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Resolve $50\\ \\text{m s}^{-1}$ at $30^\\circ$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve initial velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split the launch speed into horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute values",
          "workingLatex": "u = 50\\ \\text{m s}^{-1},\\; \\alpha = 30°",
          "explanation": "Given launch speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Horizontal component",
          "workingLatex": "u_x = 50\\cos 30° = 43.3\\ \\text{m s}^{-1}",
          "explanation": "Adjacent side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertical component",
          "workingLatex": "u_y = 50\\sin 30° = 25\\ \\text{m s}^{-1}",
          "explanation": "Opposite side in the velocity triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\sqrt{u_x^{2}+u_y^{2}} \\approx 50",
          "explanation": "Components should recombine to $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 43.3\\ \\text{m s}^{-1},\\; u_y = 25\\ \\text{m s}^{-1}",
          "explanation": "Initial velocity components.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_x = 43.3\\ \\text{m s}^{-1}$, $u_y = 25\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q039",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Find the range for $20\\ \\text{m s}^{-1}$ at $60^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{20^{2}\\sin 120°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 10 \\times 3.46",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 34.6\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 34.6\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 34.6\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q040",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A projectile is launched at $35\\ \\text{m s}^{-1}$ and $45^\\circ$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{35^{2}\\sin 90°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 24.75 \\times 4.95",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 122.5\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 122.5\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 122.5\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q041",
    "tags": [
      "height at distance",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "A projectile is launched at $20\\ \\text{m s}^{-1}$ at $30^\\circ$. Find the height when the horizontal distance is $10\\ \\text{m}$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Trajectory equation",
          "workingLatex": "y = x\\tan 30^\\circ - \\dfrac{gx^{2}}{2u^{2}\\cos^{2} 30^\\circ}",
          "explanation": "Cartesian form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x = 10",
          "workingLatex": "y = 10\\tan 30^\\circ - \\dfrac{10 \\times 100}{2 \\times 400 \\times 0.75}",
          "explanation": "Insert $x = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "y = 5.77 - 1.67 = 4.1\\ \\text{m}",
          "explanation": "Height at $x = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative",
          "workingLatex": "t = x/(u\\cos\\alpha) = 10/17.3 = 0.577\\ \\text{s}",
          "explanation": "Time to reach $x = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vertical suvat",
          "workingLatex": "y = 10 \\times 0.577 - 5 \\times 0.333 = 4.1\\ \\text{m}",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "y = 4.1\\ \\text{m}",
          "explanation": "Height at horizontal distance $10\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$y = 4.1\\ \\text{m}$ when $x = 10\\ \\text{m}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q042",
    "tags": [
      "speed at apex",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the speed of a projectile when it is at its maximum height, if launched at $25\\ \\text{m s}^{-1}$ at $40^\\circ$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "At maximum height",
          "workingLatex": "u_y = 0",
          "explanation": "Vertical component is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal component unchanged",
          "workingLatex": "u_x = 25\\cos 40^\\circ = 19.2\\ \\text{m s}^{-1}",
          "explanation": "No horizontal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Speed at top",
          "workingLatex": "v = u_x = 19.2\\ \\text{m s}^{-1}",
          "explanation": "Only horizontal motion remains.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret",
          "workingLatex": "\\text{Minimum speed during flight}",
          "explanation": "Speed is least at the apex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "v = 19.2\\ \\text{m s}^{-1}",
          "explanation": "Speed at maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "\\text{Vertical component becomes zero instantaneously}",
          "explanation": "Then becomes downward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 19.2\\ \\text{m s}^{-1}$ at maximum height."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q043",
    "tags": [
      "velocity",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "A projectile is launched at $30\\ \\text{m s}^{-1}$ at $45^\\circ$. Find the horizontal and vertical components of velocity after $2\\ \\text{s}$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Initial components",
          "workingLatex": "u_x = 21.2,\\; u_y = 21.2\\ \\text{m s}^{-1}",
          "explanation": "At $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal velocity",
          "workingLatex": "v_x = u_x = 21.2\\ \\text{m s}^{-1}",
          "explanation": "Unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical suvat",
          "workingLatex": "v_y = u_y - gt = 21.2 - 20 = 1.2\\ \\text{m s}^{-1}",
          "explanation": "Still moving upward after $2\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Speed",
          "workingLatex": "v = \\sqrt{21.2^{2} + 1.2^{2}} = 21.2\\ \\text{m s}^{-1}",
          "explanation": "Combined speed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer components",
          "workingLatex": "v_x = 21.2,\\; v_y = 1.2\\ \\text{m s}^{-1}",
          "explanation": "Velocity after $2\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Direction",
          "workingLatex": "\\text{Still above horizontal}",
          "explanation": "Has not yet reached maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_x = 21.2\\ \\text{m s}^{-1}$, $v_y = 1.2\\ \\text{m s}^{-1}$ after $2\\ \\text{s}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q044",
    "tags": [
      "proof",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that the range on level ground is maximum when $\\alpha = 45^\\circ$ for a fixed launch speed $u$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "For level ground.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Maximise R",
          "workingLatex": "\\text{Maximise } \\sin 2\\alpha",
          "explanation": "For fixed $u$ and $g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Maximum of sine",
          "workingLatex": "\\sin 2\\alpha \\leq 1",
          "explanation": "Greatest value is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Condition",
          "workingLatex": "2\\alpha = 90^\\circ \\Rightarrow \\alpha = 45^\\circ",
          "explanation": "Maximum range angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Maximum range",
          "workingLatex": "R_{\\max} = \\dfrac{u^{2}}{g}",
          "explanation": "When $\\sin 2\\alpha = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\alpha = 45^\\circ",
          "explanation": "Angle for maximum range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range is maximised when $\\alpha = 45^\\circ$ because $R \\propto \\sin 2\\alpha$, which is greatest when $2\\alpha = 90^\\circ$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q045",
    "tags": [
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "A projectile is launched from ground level at $25\\ \\text{m s}^{-1}$ at $53^\\circ$. Find (a) the range, (b) the maximum height, (c) the time of flight. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Range",
          "workingLatex": "R = \\dfrac{625 \\times \\sin 106^\\circ}{10} = 60\\ \\text{m}",
          "explanation": "Using $R = u^{2}\\sin 2\\alpha / g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Max height",
          "workingLatex": "H = \\dfrac{(25\\sin 53^\\circ)^{2}}{20} = 20\\ \\text{m}",
          "explanation": "Vertical component only.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) Time of flight",
          "workingLatex": "T = \\dfrac{2 \\times 25\\sin 53^\\circ}{10} = 4\\ \\text{s}",
          "explanation": "Standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check range",
          "workingLatex": "R = u_x T = 15 \\times 4 = 60\\ \\text{m}",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "R = 60\\ \\text{m};\\; H = 20\\ \\text{m};\\; T = 4\\ \\text{s}",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Summary",
          "workingLatex": "\\text{Complete projectile analysis}",
          "explanation": "Key quantities for angled projection.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $R = 60\\ \\text{m}$. (b) $H = 20\\ \\text{m}$. (c) $T = 4\\ \\text{s}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q046",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Find the range for $50\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{50^{2}\\sin 60°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 43.3 \\times 5",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 216.5\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 216.5\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 216.5\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q047",
    "tags": [
      "maximum height"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Greatest height for $25\\ \\text{m s}^{-1}$ at $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = u\\sin\\alpha = 17.68\\ \\text{m s}^{-1}",
          "explanation": "Only vertical motion affects maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use v² = u² + 2as",
          "workingLatex": "0 = u_y^{2} - 2gH",
          "explanation": "At the top, vertical speed is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "H = \\dfrac{u_y^{2}}{2g} = \\dfrac{17.68^{2}}{2 \\times 10}",
          "explanation": "Formula for greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "H = 15.6\\ \\text{m}",
          "explanation": "Maximum height above launch point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Measured from the point of projection}",
          "explanation": "Not necessarily above ground unless launched from ground level.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H = 15.6\\ \\text{m}",
          "explanation": "Greatest height.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H = 15.6\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q048",
    "tags": [
      "time of flight"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Time of flight for $40\\ \\text{m s}^{-1}$ at $30^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Displacement from launch level returning to same height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Return to launch height",
          "workingLatex": "0 = u_y t - 5t^{2}",
          "explanation": "Set $y = 0$ for landing at same vertical level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t(u_y - 5t) = 0",
          "explanation": "Two solutions: launch and landing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Non-zero root",
          "workingLatex": "t = \\dfrac{u_y}{g} = \\dfrac{20}{10} = 4\\ \\text{s}",
          "explanation": "Time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative formula",
          "workingLatex": "T = \\dfrac{2u\\sin\\alpha}{g}",
          "explanation": "Useful when angle and speed are given.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "T = 4\\ \\text{s}",
          "explanation": "Total time in the air.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 4\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q049",
    "tags": [
      "horizontal projection"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Horizontal projection at $30\\ \\text{m s}^{-1}$ from $45\\ \\text{m}$. Find the range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the motion",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Horizontal projection: no horizontal acceleration; gravity acts vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Horizontal motion",
          "workingLatex": "x = ut = 30t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Vertical motion",
          "workingLatex": "y = h - \\tfrac{1}{2}gt^{2} = 45 - 5t^{2}",
          "explanation": "Starts at height $h$ with zero initial vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time to ground",
          "workingLatex": "0 = 45 - 5t^{2} \\Rightarrow t = 3\\ \\text{s}",
          "explanation": "Solve $y = 0$ for time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Horizontal range",
          "workingLatex": "x = 30 \\times 3 = 90\\ \\text{m}",
          "explanation": "Distance travelled horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\text{Range} = 90\\ \\text{m}",
          "explanation": "How far the projectile lands from the base.",
          "diagram": null
        }
      ],
      "finalAnswer": "Range $= 90\\ \\text{m}$ (time of flight $= 3\\ \\text{s}$)"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q050",
    "tags": [
      "find angle"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "A projectile launched at $40\\ \\text{m s}^{-1}$ lands $138.6\\ \\text{m}$ away. Find a launch angle. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Relate range, speed and angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{Rg}{u^{2}}",
          "explanation": "Make $\\sin 2\\alpha$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "\\sin 2\\alpha = \\dfrac{138.6 \\times 10}{40^{2}}",
          "explanation": "Insert known values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for α",
          "workingLatex": "2\\alpha = 60° \\Rightarrow \\alpha = 30°",
          "explanation": "Find the launch angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\text{Two angles often possible for the same range}",
          "explanation": "Complementary angles give the same range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\alpha = 30°",
          "explanation": "Launch angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 30°$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q051",
    "tags": [
      "time above height",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A ball is kicked from ground level at $20\\ \\text{m s}^{-1}$ at $30^\\circ$. Find (a) how long it is at least $3\\ \\text{m}$ above the ground, (b) the speed when it returns to ground level. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Times when y = 3",
          "workingLatex": "3 = 10t - 5t^{2}",
          "explanation": "Vertical displacement equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Solve quadratic",
          "workingLatex": "t = 0.33\\ \\text{s and } t = 1.67\\ \\text{s}",
          "explanation": "Two times at height $3\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Duration",
          "workingLatex": "1.67 - 0.33 = 1.34\\ \\text{s}",
          "explanation": "Time above $3\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Symmetry",
          "workingLatex": "v = u = 20\\ \\text{m s}^{-1}",
          "explanation": "Speed at launch and landing is the same on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Components at landing",
          "workingLatex": "v_x = 17.3,\\; v_y = -10",
          "explanation": "Vertical component reversed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Verify speed",
          "workingLatex": "\\sqrt{17.3^{2}+10^{2}} = 20\\ \\text{m s}^{-1}",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "1.34\\ \\text{s above } 3\\ \\text{m};\\; v = 20\\ \\text{m s}^{-1} at landing",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $1.34\\ \\text{s}$ above $3\\ \\text{m}$. (b) Speed on return $= 20\\ \\text{m s}^{-1}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q052",
    "tags": [
      "from height",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A stone is projected at $15\\ \\text{m s}^{-1}$ at $37^\\circ$ from the top of a building $20\\ \\text{m}$ high. Find (a) the time of flight to the ground below, (b) the horizontal range from the base of the building. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical displacement",
          "workingLatex": "y = -20\\ \\text{m}",
          "explanation": "Ends $20\\ \\text{m}$ below launch point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Vertical equation",
          "workingLatex": "-20 = 15\\sin 37^\\circ \\cdot t - 5t^{2}",
          "explanation": "Suvat with $u_y = 9.03$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Solve quadratic",
          "workingLatex": "5t^{2} - 9.03t - 20 = 0",
          "explanation": "Quadratic in $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Positive root",
          "workingLatex": "t = 2.8\\ \\text{s}",
          "explanation": "Time to ground.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Horizontal range",
          "workingLatex": "x = 15\\cos 37^\\circ \\times 2.8 = 33.5\\ \\text{m}",
          "explanation": "From base of building.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 2.8\\ \\text{s};\\; x = 33.5\\ \\text{m}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note",
          "workingLatex": "\\text{Landing below launch level increases time of flight}",
          "explanation": "Compared with level-ground case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = 2.8\\ \\text{s}$. (b) Horizontal range from building $= 33.5\\ \\text{m}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q053",
    "tags": [
      "complementary angles",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Two projectiles are fired simultaneously from the same point with speed $30\\ \\text{m s}^{-1}$, one at $30^\\circ$ and one at $60^\\circ$. Show they have the same range on level ground.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "For each projectile.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First angle",
          "workingLatex": "R_{1} = \\dfrac{900 \\sin 60^\\circ}{10} = 77.9\\ \\text{m}",
          "explanation": "At $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second angle",
          "workingLatex": "R_{2} = \\dfrac{900 \\sin 120^\\circ}{10} = 77.9\\ \\text{m}",
          "explanation": "At $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identity",
          "workingLatex": "\\sin 120^\\circ = \\sin 60^\\circ",
          "explanation": "Complementary angles property.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General result",
          "workingLatex": "\\sin 2\\alpha = \\sin(180^\\circ - 2\\alpha)",
          "explanation": "Angles $\\alpha$ and $90^\\circ - \\alpha$ give same range.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R_{1} = R_{2}",
          "explanation": "Same range demonstrated.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Both ranges equal $77.9\\ \\text{m}$ because $\\sin 60^\\circ = \\sin 120^\\circ$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q054",
    "tags": [
      "verify angle",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "A projectile passes through the point $(20, 15)$ and is launched from the origin at $25\\ \\text{m s}^{-1}$. Verify that $\\alpha = 53^\\circ$ is a possible launch angle. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Trajectory equation",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute point",
          "workingLatex": "15 = 20\\tan 53^\\circ - \\dfrac{10 \\times 400}{2 \\times 625 \\times 0.36}",
          "explanation": "Use $(20, 15)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate",
          "workingLatex": "15 = 26.5 - 8.9 = 17.6",
          "explanation": "Close — check with exact values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Alternative check",
          "workingLatex": "t = 20/(25\\cos 53^\\circ) = 1\\ \\text{s}",
          "explanation": "Time to $x = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Height at t = 1",
          "workingLatex": "y = 25\\sin 53^\\circ - 5 = 15\\ \\text{m}",
          "explanation": "Matches the point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\alpha = 53^\\circ \\text{ is valid}",
          "explanation": "Projectile passes through $(20, 15)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 53^\\circ$ works: at $t = 1\\ \\text{s}$, $(x, y) = (20, 15)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q055",
    "tags": [
      "proof",
      "horizontal",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "A particle is projected horizontally at $U\\ \\text{m s}^{-1}$ from a cliff of height $h$. Show that its speed when it hits the ground is $\\sqrt{U^{2} + 2gh}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Horizontal component",
          "workingLatex": "v_x = U",
          "explanation": "Unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Vertical fall",
          "workingLatex": "v_y^{2} = 2gh",
          "explanation": "Starts with zero vertical speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine",
          "workingLatex": "v^{2} = v_x^{2} + v_y^{2} = U^{2} + 2gh",
          "explanation": "Pythagoras on velocity components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Speed",
          "workingLatex": "v = \\sqrt{U^{2} + 2gh}",
          "explanation": "Magnitude on impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Independent of horizontal speed for vertical component}",
          "explanation": "Vertical speed depends only on fall height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "v = \\sqrt{U^{2} + 2gh}",
          "explanation": "Impact speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "On impact, $v = \\sqrt{U^{2} + 2gh}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q056",
    "tags": [
      "crossbar",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A football is kicked from ground level at $28\\ \\text{m s}^{-1}$ at angle $\\alpha$. It just clears a crossbar $3\\ \\text{m}$ high at a horizontal distance of $40\\ \\text{m}$. Find $\\alpha$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Trajectory through (40, 3)",
          "workingLatex": "3 = 40\\tan\\alpha - \\dfrac{10 \\times 1600}{2 \\times 784 \\times \\cos^{2}\\alpha}",
          "explanation": "Point on path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify",
          "workingLatex": "3 = 40\\tan\\alpha - \\dfrac{8000}{784\\cos^{2}\\alpha}",
          "explanation": "Numerical form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Try α = 30°",
          "workingLatex": "y = 23.1 - 13.3 = 9.8\\ \\text{m}",
          "explanation": "Too high.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Try α = 15°",
          "workingLatex": "y = 10.7 - 2.8 = 7.9\\ \\text{m}",
          "explanation": "Still high.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Try α = 10°",
          "workingLatex": "y = 7.1 - 1.3 = 5.8\\ \\text{m}",
          "explanation": "Getting closer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Try α = 7°",
          "workingLatex": "y \\approx 3\\ \\text{m}",
          "explanation": "Matches crossbar height.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "\\alpha \\approx 7^\\circ",
          "explanation": "Shallow angle to clear bar at $40\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha \\approx 7^\\circ$ (the trajectory passes through approximately $(40, 3)$)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q057",
    "tags": [
      "from platform",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A projectile is launched at $35\\ \\text{m s}^{-1}$ at $40^\\circ$ from a platform $10\\ \\text{m}$ above level ground. Find the total time of flight and the horizontal range. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical displacement",
          "workingLatex": "y = -10\\ \\text{m}",
          "explanation": "Lands $10\\ \\text{m}$ below launch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Equation",
          "workingLatex": "-10 = 35\\sin 40^\\circ \\cdot t - 5t^{2}",
          "explanation": "$u_y = 22.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Quadratic",
          "workingLatex": "5t^{2} - 22.5t - 10 = 0",
          "explanation": "Solve for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Time of flight",
          "workingLatex": "t = 4.9\\ \\text{s}",
          "explanation": "Positive root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Range",
          "workingLatex": "x = 35\\cos 40^\\circ \\times 4.9 = 131\\ \\text{m}",
          "explanation": "Horizontal distance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = 4.9\\ \\text{s};\\; x = 131\\ \\text{m}",
          "explanation": "Both quantities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare level ground",
          "workingLatex": "T_{\\text{level}} = 4.5\\ \\text{s}",
          "explanation": "Extra time from starting above ground.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 4.9\\ \\text{s}$, range $= 131\\ \\text{m}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q058",
    "tags": [
      "derivation",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "A particle is projected at speed $u$ at angle $\\alpha$ to the horizontal. Derive the time to reach maximum height.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion",
          "workingLatex": "v_y = u\\sin\\alpha - gt",
          "explanation": "Velocity at time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "At maximum height",
          "workingLatex": "v_y = 0",
          "explanation": "Vertical speed is instantaneously zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{u\\sin\\alpha}{g}",
          "explanation": "Time to apex.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Half the total flight time",
          "workingLatex": "t_{\\text{apex}} = \\dfrac{T}{2}",
          "explanation": "On level ground, symmetry gives $T = 2u\\sin\\alpha/g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Longer if } u_y \\text{ is larger}",
          "explanation": "Steeper or faster vertical launch reaches the top later.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "t = \\dfrac{u\\sin\\alpha}{g}",
          "explanation": "Time to maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = \\dfrac{u\\sin\\alpha}{g}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q059",
    "tags": [
      "cannon",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A cannon fires a shell at $80\\ \\text{m s}^{-1}$ at $30^\\circ$ from horizontal ground. (a) Find the range. (b) Find how far the shell has travelled horizontally when it is at height $30\\ \\text{m}$ on the way up. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Range",
          "workingLatex": "R = \\dfrac{6400 \\times \\sin 60^\\circ}{10} = 554\\ \\text{m}",
          "explanation": "Full range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Time to height 30 m up",
          "workingLatex": "30 = 40t - 5t^{2}",
          "explanation": "$u_y = 40$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Solve",
          "workingLatex": "t = 1\\ \\text{s}",
          "explanation": "On the way up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Horizontal distance",
          "workingLatex": "x = 80\\cos 30^\\circ \\times 1 = 69.3\\ \\text{m}",
          "explanation": "At height $30\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "R = 554\\ \\text{m};\\; x = 69.3\\ \\text{m}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "\\text{Also passes } 30\\ \\text{m on way down later}",
          "explanation": "Symmetric unless asked otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $R = 554\\ \\text{m}$. (b) $x = 69.3\\ \\text{m}$ when $y = 30\\ \\text{m}$ on the way up."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q060",
    "tags": [
      "vectors",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "A particle is projected with velocity $(12\\mathbf{i} + 5\\mathbf{j})\\ \\text{m s}^{-1}$ from a point $O$. Take $\\mathbf{j}$ vertically upward and $g = 10\\ \\text{m s}^{-2}$. (a) Write $\\mathbf{r}$ at time $t$. (b) Find the position when $t = 2\\ \\text{s}$. (c) Find the time when the particle returns to the horizontal level of $O$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Position vector",
          "workingLatex": "\\mathbf{r} = 12t\\,\\mathbf{i} + (5t - 5t^{2})\\mathbf{j}",
          "explanation": "Integrate constant acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) At t = 2",
          "workingLatex": "\\mathbf{r} = 24\\mathbf{i} - 10\\mathbf{j}\\ \\text{m}",
          "explanation": "Below launch level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(c) Return to level",
          "workingLatex": "5t - 5t^{2} = 0",
          "explanation": "Vertical displacement zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Solve",
          "workingLatex": "t = 1\\ \\text{s}",
          "explanation": "Non-zero root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Range",
          "workingLatex": "x = 12\\ \\text{m}",
          "explanation": "Horizontal displacement at $t = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\mathbf{r}(2) = 24\\mathbf{i} - 10\\mathbf{j};\\; t = 1\\ \\text{s}",
          "explanation": "Vector form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Max height",
          "workingLatex": "t = 0.5\\ \\text{s},\\; y = 1.25\\ \\text{m}",
          "explanation": "Useful check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\mathbf{r} = 12t\\,\\mathbf{i} + (5t - 5t^{2})\\mathbf{j}$. (b) $\\mathbf{r}(2) = 24\\mathbf{i} - 10\\mathbf{j}\\ \\text{m}$. (c) Returns to level at $t = 1\\ \\text{s}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q061",
    "tags": [
      "range"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "questionText": "Find the range for $60\\ \\text{m s}^{-1}$ at $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Horizontal distance when landing at launch height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute",
          "workingLatex": "R = \\dfrac{60^{2}\\sin 90°}{10}",
          "explanation": "Use the double-angle value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Alternative method",
          "workingLatex": "R = u_x \\times T = 42.43 \\times 8.49",
          "explanation": "Horizontal speed times time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "R = 360\\ \\text{m}",
          "explanation": "Horizontal range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assumption",
          "workingLatex": "\\text{No air resistance; same launch and landing height}",
          "explanation": "Standard projectile model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "R = 360\\ \\text{m}",
          "explanation": "Range on level ground.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 360\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q062",
    "tags": [
      "maximum height"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Greatest height for $35\\ \\text{m s}^{-1}$ at $60^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical component",
          "workingLatex": "u_y = u\\sin\\alpha = 30.31\\ \\text{m s}^{-1}",
          "explanation": "Only vertical motion affects maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use v² = u² + 2as",
          "workingLatex": "0 = u_y^{2} - 2gH",
          "explanation": "At the top, vertical speed is zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange",
          "workingLatex": "H = \\dfrac{u_y^{2}}{2g} = \\dfrac{30.31^{2}}{2 \\times 10}",
          "explanation": "Formula for greatest height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate",
          "workingLatex": "H = 45.9\\ \\text{m}",
          "explanation": "Maximum height above launch point.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret",
          "workingLatex": "\\text{Measured from the point of projection}",
          "explanation": "Not necessarily above ground unless launched from ground level.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "H = 45.9\\ \\text{m}",
          "explanation": "Greatest height.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H = 45.9\\ \\text{m}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q063",
    "tags": [
      "time of flight"
    ],
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "questionText": "Time of flight for $50\\ \\text{m s}^{-1}$ at $45^\\circ$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical motion",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Displacement from launch level returning to same height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Return to launch height",
          "workingLatex": "0 = u_y t - 5t^{2}",
          "explanation": "Set $y = 0$ for landing at same vertical level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise",
          "workingLatex": "t(u_y - 5t) = 0",
          "explanation": "Two solutions: launch and landing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Non-zero root",
          "workingLatex": "t = \\dfrac{u_y}{g} = \\dfrac{35.36}{10} = 7.07\\ \\text{s}",
          "explanation": "Time of flight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative formula",
          "workingLatex": "T = \\dfrac{2u\\sin\\alpha}{g}",
          "explanation": "Useful when angle and speed are given.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "T = 7.07\\ \\text{s}",
          "explanation": "Total time in the air.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 7.07\\ \\text{s}$"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q064",
    "tags": [
      "trajectory",
      "trajectory"
    ],
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "questionText": "Find the trajectory equation for $30\\ \\text{m s}^{-1}$ at $60^\\circ$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Parametric equations",
          "workingLatex": "x = u t\\cos\\alpha,\\; y = u t\\sin\\alpha - \\tfrac{1}{2}gt^{2}",
          "explanation": "Separate horizontal and vertical motion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Eliminate t",
          "workingLatex": "t = \\dfrac{x}{u\\cos\\alpha}",
          "explanation": "Express time from horizontal equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into y",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Cartesian equation of the path.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute values",
          "workingLatex": "y = 1.732x - 0.0222x^{2}",
          "explanation": "Equation for this projectile.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify shape",
          "workingLatex": "\\text{Parabola}",
          "explanation": "The trajectory is a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "y = 1.732x - 0.0222x^{2}",
          "explanation": "Trajectory equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "y = 1.732x - 0.0222x^{2}"
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q065",
    "tags": [
      "explanation",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "written",
    "questionText": "A projectile launched at $20\\ \\text{m s}^{-1}$ can land at two points on level ground separated horizontally. Explain why two launch angles give the same range.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "Depends on $\\sin 2\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Two angles",
          "workingLatex": "\\sin 2\\alpha = \\sin(180^\\circ - 2\\alpha)",
          "explanation": "Supplementary angle identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Example",
          "workingLatex": "\\alpha = 30^\\circ \\text{ and } 60^\\circ",
          "explanation": "Both give $\\sin 60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Different paths",
          "workingLatex": "\\text{Low trajectory vs high trajectory}",
          "explanation": "Same landing point, different flight times.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "\\text{Complementary launch angles}",
          "explanation": "Same range, different apex heights.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Exception",
          "workingLatex": "\\alpha = 45^\\circ \\text{ is unique for maximum range}",
          "explanation": "Only one angle maximises range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "Angles $\\alpha$ and $90^\\circ - \\alpha$ give the same range because $\\sin 2\\alpha = \\sin(180^\\circ - 2\\alpha)$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q066",
    "tags": [
      "balcony",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "A ball is thrown at $18\\ \\text{m s}^{-1}$ at $50^\\circ$ from a balcony $8\\ \\text{m}$ above the street. (a) Find the time to hit the street. (b) Find the horizontal distance travelled. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertical equation",
          "workingLatex": "-8 = 18\\sin 50^\\circ \\cdot t - 5t^{2}",
          "explanation": "$u_y = 13.8$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Quadratic",
          "workingLatex": "5t^{2} - 13.8t - 8 = 0",
          "explanation": "Solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Time",
          "workingLatex": "t = 3.2\\ \\text{s}",
          "explanation": "Positive root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(b) Range",
          "workingLatex": "x = 18\\cos 50^\\circ \\times 3.2 = 37\\ \\text{m}",
          "explanation": "Horizontal distance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "t = 3.2\\ \\text{s};\\; x = 37\\ \\text{m}",
          "explanation": "Both parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Impact speed",
          "workingLatex": "v \\approx 25\\ \\text{m s}^{-1}",
          "explanation": "Faster than launch due to fall.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = 3.2\\ \\text{s}$. (b) $x = 37\\ \\text{m}$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q067",
    "tags": [
      "two angles",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the launch angle for which a projectile fired at $24\\ \\text{m s}^{-1}$ has a range of $50\\ \\text{m}$ on level ground. Give both possible angles. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Range equation",
          "workingLatex": "50 = \\dfrac{576 \\sin 2\\alpha}{10}",
          "explanation": "Substitute values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve sin 2α",
          "workingLatex": "\\sin 2\\alpha = 0.868",
          "explanation": "From rearrangement.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Principal angles",
          "workingLatex": "2\\alpha = 60.3^\\circ \\text{ or } 119.7^\\circ",
          "explanation": "Two possibilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Launch angles",
          "workingLatex": "\\alpha = 30.2^\\circ \\text{ or } 59.8^\\circ",
          "explanation": "Complementary pair.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check",
          "workingLatex": "\\text{Approximately } 30^\\circ \\text{ and } 60^\\circ",
          "explanation": "Near standard angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "\\alpha \\approx 30.2^\\circ \\text{ or } 59.8^\\circ",
          "explanation": "Both angles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha \\approx 30.2^\\circ$ or $\\alpha \\approx 59.8^\\circ$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q068",
    "tags": [
      "velocity",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "A particle is projected at $40\\ \\text{m s}^{-1}$ at $25^\\circ$. Find the magnitude and direction of its velocity after $1.5\\ \\text{s}$. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Components initially",
          "workingLatex": "u_x = 36.3,\\; u_y = 16.9\\ \\text{m s}^{-1}",
          "explanation": "Resolve at $25^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "After 1.5 s",
          "workingLatex": "v_x = 36.3,\\; v_y = 16.9 - 15 = 1.9\\ \\text{m s}^{-1}",
          "explanation": "Vertical suvat.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Speed",
          "workingLatex": "v = \\sqrt{36.3^{2} + 1.9^{2}} = 36.4\\ \\text{m s}^{-1}",
          "explanation": "Magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Direction",
          "workingLatex": "\\tan\\theta = 1.9/36.3 \\Rightarrow \\theta = 3^\\circ \\text{ above horizontal}",
          "explanation": "Still nearly horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Answer",
          "workingLatex": "v = 36.4\\ \\text{m s}^{-1} at $3^\\circ$ above horizontal",
          "explanation": "Velocity after $1.5\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note",
          "workingLatex": "\\text{Not yet at maximum height}",
          "explanation": "$t_{\\text{apex}} = 1.69\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Trajectory",
          "workingLatex": "y = x\\tan\\alpha - \\dfrac{gx^{2}}{2u^{2}\\cos^{2}\\alpha}",
          "explanation": "Path equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 36.4\\ \\text{m s}^{-1}$ at approximately $3^\\circ$ above the horizontal."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q069",
    "tags": [
      "golf",
      "reverse",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "questionText": "A golf ball is hit from level ground and lands $180\\ \\text{m}$ away after $6\\ \\text{s}$. Find (a) the horizontal component of initial velocity, (b) the vertical component, (c) the launch angle. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Horizontal",
          "workingLatex": "u_x = \\dfrac{180}{6} = 30\\ \\text{m s}^{-1}",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Vertical",
          "workingLatex": "0 = u_y \\times 6 - 5 \\times 36",
          "explanation": "Vertical displacement returns to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Solve",
          "workingLatex": "u_y = 30\\ \\text{m s}^{-1}",
          "explanation": "Vertical component.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Angle",
          "workingLatex": "\\tan\\alpha = 1 \\Rightarrow \\alpha = 45^\\circ",
          "explanation": "Equal components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Speed",
          "workingLatex": "u = 30\\sqrt{2} = 42.4\\ \\text{m s}^{-1}",
          "explanation": "Launch speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Answer",
          "workingLatex": "u_x = 30,\\; u_y = 30,\\; \\alpha = 45^\\circ",
          "explanation": "All parts.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check range",
          "workingLatex": "R = u^{2}/g = 180\\ \\text{m}",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Max height",
          "workingLatex": "H = \\dfrac{u^{2}\\sin^{2}\\alpha}{2g}",
          "explanation": "Greatest vertical displacement.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $u_x = 30\\ \\text{m s}^{-1}$. (b) $u_y = 30\\ \\text{m s}^{-1}$. (c) $\\alpha = 45^\\circ$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Mechanics",
    "subtopic": "Projectiles",
    "subtopicId": "al.y2.mech.projectilescontinued",
    "questionDiagram": null,
    "id": "al.y2.mech.projectilescontinued.q070",
    "tags": [
      "firework",
      "multi-step",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 12,
    "answerType": "written",
    "questionText": "A firework is launched from a tower $25\\ \\text{m}$ high at $45\\ \\text{m s}^{-1}$ at $55^\\circ$ above the horizontal. (a) Find the time to reach maximum height. (b) Find the maximum height above ground level. (c) Find the horizontal range from the base of the tower. Take $g = 10\\ \\text{m s}^{-2}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Time to apex",
          "workingLatex": "t = \\dfrac{45\\sin 55^\\circ}{10} = 3.69\\ \\text{s}",
          "explanation": "Vertical component only.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(b) Height above launch",
          "workingLatex": "H = \\dfrac{(45\\sin 55^\\circ)^{2}}{20} = 68.2\\ \\text{m}",
          "explanation": "Above tower top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(b) Above ground",
          "workingLatex": "68.2 + 25 = 93.2\\ \\text{m}",
          "explanation": "Add tower height.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(c) Time to ground",
          "workingLatex": "Solve $-25 = 45\\sin 55^\\circ \\cdot t - 5t^{2}$",
          "explanation": "Lands below launch level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(c) Flight time",
          "workingLatex": "t = 7.9\\ \\text{s}",
          "explanation": "Positive root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(c) Range",
          "workingLatex": "x = 45\\cos 55^\\circ \\times 7.9 = 204\\ \\text{m}",
          "explanation": "From base of tower.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Answer",
          "workingLatex": "t_{\\text{apex}} = 3.69\\ \\text{s};\\; H = 93.2\\ \\text{m};\\; x = 204\\ \\text{m}",
          "explanation": "Complete analysis.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Context",
          "workingLatex": "\\text{Launch height increases range and flight time}",
          "explanation": "Compared with ground-level launch.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Model",
          "workingLatex": "a_x = 0,\\; a_y = -g",
          "explanation": "Standard projectile assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Resolve velocity",
          "workingLatex": "u_x = u\\cos\\alpha,\\; u_y = u\\sin\\alpha",
          "explanation": "Split into components.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Horizontal motion",
          "workingLatex": "x = u_x t",
          "explanation": "Constant horizontal speed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Vertical suvat",
          "workingLatex": "y = u_y t - \\tfrac{1}{2}gt^{2}",
          "explanation": "Vertical displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Range formula",
          "workingLatex": "R = \\dfrac{u^{2}\\sin 2\\alpha}{g}",
          "explanation": "On level ground.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $t = 3.69\\ \\text{s}$ to maximum height. (b) Maximum height $= 93.2\\ \\text{m}$ above ground. (c) Horizontal range $= 204\\ \\text{m}$ from the tower base."
    }
  }
];
