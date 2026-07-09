import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q001",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $8\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $6\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=8",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=6",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{6}{8}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.75",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.75\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.75$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q002",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $10\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $5\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=10",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=5",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{5}{10}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.5",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.5\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q003",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $12\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $9\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=12",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=9",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{9}{12}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.75",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.75\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.75$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q004",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $9\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $3\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=9",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=3",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{3}{9}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.333",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.333\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.333$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q005",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $14\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $7\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=14",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=7",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{7}{14}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.5",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.5\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q006",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $16\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $12\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=16",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=12",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{12}{16}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.75",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.75\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.75$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q007",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $6\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $4.5\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=6",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=4.5",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{4.5}{6}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.75",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.75\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.75$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q008",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $18\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $9\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=18",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=9",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{9}{18}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.5",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.5\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q009",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $15\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $6\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=15",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=6",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{6}{15}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.4",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.4\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q010",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $20\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $10\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=20",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=10",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{10}{20}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.5",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.5\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q011",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $11\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $8.25\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=11",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=8.25",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{8.25}{11}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.75",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.75\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.75$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $13\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $6.5\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=13",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=6.5",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{6.5}{13}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.5",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.5\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $7\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $2.8\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=7",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=2.8",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{2.8}{7}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.4",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.4\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $24\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $18\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=24",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=18",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{18}{24}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.75",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.75\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.75$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "coefficient-of-restitution",
      "normal-components"
    ],
    "questionText": "Two smooth spheres collide obliquely. Immediately before impact, their relative speed along the line of centres is $21\\ \\text{m s}^{-1}$. Immediately after impact, their relative speed of separation along the line of centres is $14.7\\ \\text{m s}^{-1}$. Find the coefficient of restitution.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the normal direction",
          "workingLatex": "\\text{Normal direction} = \\text{line of centres}",
          "explanation": "For smooth spheres, restitution is applied only along the line joining the centres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the speed of approach",
          "workingLatex": "\\text{speed of approach}=21",
          "explanation": "The approach speed is the closing speed before the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the speed of separation",
          "workingLatex": "\\text{speed of separation}=14.7",
          "explanation": "The separation speed is the opening speed after the impact in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "e=\\dfrac{\\text{speed of separation}}{\\text{speed of approach}}",
          "explanation": "The coefficient of restitution compares normal separation after impact with normal approach before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "e=\\dfrac{14.7}{21}",
          "explanation": "Only the normal components are used; tangential components do not affect $e$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "e=0.7",
          "explanation": "The result is dimensionless because it is a ratio of two speeds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value",
          "workingLatex": "0\\le 0.7\\le 1",
          "explanation": "A physically realistic impact has coefficient of restitution between 0 and 1.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e=0.7$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q016",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $2\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $3\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $6\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.5$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=6,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "2(6)+3(0)=2v_A+3v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.5(6-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=3",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=0.6,\\quad v_B=3.6",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=0.6,\\quad v_B=3.6",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=0.6\\ \\text{m s}^{-1}$ and $v_B=3.6\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q017",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $3\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $2\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $5\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.6$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=5,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "3(5)+2(0)=3v_A+2v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.6(5-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=3",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=1.8,\\quad v_B=4.8",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=1.8,\\quad v_B=4.8",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=1.8\\ \\text{m s}^{-1}$ and $v_B=4.8\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q018",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $4\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $5\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $7\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.4$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=7,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "4(7)+5(0)=4v_A+5v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.4(7-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=2.8",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=1.556,\\quad v_B=4.356",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=1.556,\\quad v_B=4.356",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=1.556\\ \\text{m s}^{-1}$ and $v_B=4.356\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q019",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $5\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $3\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $8\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.75$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=8,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "5(8)+3(0)=5v_A+3v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.75(8-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=6",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=2.75,\\quad v_B=8.75",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=2.75,\\quad v_B=8.75",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=2.75\\ \\text{m s}^{-1}$ and $v_B=8.75\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q020",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $2\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $1\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $9\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.8$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=9,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "2(9)+1(0)=2v_A+1v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.8(9-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=7.2",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=3.6,\\quad v_B=10.8",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=3.6,\\quad v_B=10.8",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=3.6\\ \\text{m s}^{-1}$ and $v_B=10.8\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q021",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $6\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $4\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $5\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.5$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=5,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "6(5)+4(0)=6v_A+4v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.5(5-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=2.5",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=2,\\quad v_B=4.5",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=2,\\quad v_B=4.5",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=2\\ \\text{m s}^{-1}$ and $v_B=4.5\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q022",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $3\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $7\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $10\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.3$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=10,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "3(10)+7(0)=3v_A+7v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.3(10-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=3",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=0.9,\\quad v_B=3.9",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=0.9,\\quad v_B=3.9",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=0.9\\ \\text{m s}^{-1}$ and $v_B=3.9\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q023",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $8\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $2\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $6\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.7$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=6,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "8(6)+2(0)=8v_A+2v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.7(6-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=4.2",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=3.96,\\quad v_B=8.16",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=3.96,\\quad v_B=8.16",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=3.96\\ \\text{m s}^{-1}$ and $v_B=8.16\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q024",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $5\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $5\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $4\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.6$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=4,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "5(4)+5(0)=5v_A+5v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.6(4-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=2.4",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=0.8,\\quad v_B=3.2",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=0.8,\\quad v_B=3.2",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=0.8\\ \\text{m s}^{-1}$ and $v_B=3.2\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q025",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $7\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $3\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $9\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.5$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=9,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "7(9)+3(0)=7v_A+3v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.5(9-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=4.5",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=4.95,\\quad v_B=9.45",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=4.95,\\quad v_B=9.45",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=4.95\\ \\text{m s}^{-1}$ and $v_B=9.45\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q026",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $4\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $1\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $8\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.25$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=8,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "4(8)+1(0)=4v_A+1v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.25(8-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=2",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=6,\\quad v_B=8",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=6,\\quad v_B=8",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=6\\ \\text{m s}^{-1}$ and $v_B=8\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q027",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $9\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $6\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $7\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.8$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=7,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "9(7)+6(0)=9v_A+6v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.8(7-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=5.6",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=1.96,\\quad v_B=7.56",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=1.96,\\quad v_B=7.56",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=1.96\\ \\text{m s}^{-1}$ and $v_B=7.56\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q028",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $1\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $2\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $12\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.5$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=12,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "1(12)+2(0)=1v_A+2v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.5(12-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=6",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=0,\\quad v_B=6",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=0,\\quad v_B=6",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=0\\ \\text{m s}^{-1}$ and $v_B=6\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q029",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $6\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $9\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $5\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.4$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=5,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "6(5)+9(0)=6v_A+9v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.4(5-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=2",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=0.8,\\quad v_B=2.8",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=0.8,\\quad v_B=2.8",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=0.8\\ \\text{m s}^{-1}$ and $v_B=2.8\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q030",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "momentum",
      "restitution",
      "normal-velocities"
    ],
    "questionText": "Smooth sphere $A$ of mass $10\\ \\text{kg}$ collides obliquely with a smooth sphere $B$ of mass $5\\ \\text{kg}$, initially at rest. Before impact, the component of $A$'s velocity along the line of centres is $6\\ \\text{m s}^{-1}$ towards $B$. The coefficient of restitution is $0.9$. Find the components of velocity of $A$ and $B$ along the line of centres after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the positive normal direction",
          "workingLatex": "\\text{Positive direction: from }A\\text{ towards }B",
          "explanation": "A sign convention lets momentum and restitution be written consistently.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocities",
          "workingLatex": "u_A=6,\\quad u_B=0",
          "explanation": "Only the components along the line of centres change in a smooth impact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of normal momentum",
          "workingLatex": "10(6)+5(0)=10v_A+5v_B",
          "explanation": "There is no external impulse along the line of centres during the short impact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use Newton's law of restitution",
          "workingLatex": "v_B-v_A=0.9(6-0)",
          "explanation": "Separation speed after impact equals $e$ times the approach speed before impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify restitution",
          "workingLatex": "v_B-v_A=5.4",
          "explanation": "This gives a second linear equation for the two unknown normal components.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the simultaneous equations",
          "workingLatex": "v_A=2.2,\\quad v_B=7.6",
          "explanation": "Solving momentum together with restitution gives the normal components after impact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the signs",
          "workingLatex": "v_A=2.2,\\quad v_B=7.6",
          "explanation": "A positive value means motion in the original normal direction; a negative value would mean rebound.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_A=2.2\\ \\text{m s}^{-1}$ and $v_B=7.6\\ \\text{m s}^{-1}$ along the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q031",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $2\\ \\text{kg}$ moves at $10\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $3\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $30^{\\circ}$ with the line of centres. The coefficient of restitution is $0.5$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=10\\cos 30^{\\circ},\\quad u_{At}=10\\sin 30^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=8.66,\\quad u_{At}=5",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=5",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "2(8.66)+3(0)=2v_{An}+3v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.5(8.66-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=0.866",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(0.866)^{2}+(5)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=5.074\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|5|}{|0.866|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=80.174^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=5.074\\ \\text{m s}^{-1}$, at $80.174^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q032",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $3\\ \\text{kg}$ moves at $12\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $4\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $40^{\\circ}$ with the line of centres. The coefficient of restitution is $0.6$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=12\\cos 40^{\\circ},\\quad u_{At}=12\\sin 40^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=9.193,\\quad u_{At}=7.713",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=7.713",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "3(9.193)+4(0)=3v_{An}+4v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.6(9.193-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=0.788",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(0.788)^{2}+(7.713)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=7.754\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|7.713|}{|0.788|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=84.167^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=7.754\\ \\text{m s}^{-1}$, at $84.167^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q033",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $4\\ \\text{kg}$ moves at $9\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $2\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $25^{\\circ}$ with the line of centres. The coefficient of restitution is $0.75$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=9\\cos 25^{\\circ},\\quad u_{At}=9\\sin 25^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=8.157,\\quad u_{At}=3.804",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=3.804",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "4(8.157)+2(0)=4v_{An}+2v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.75(8.157-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=3.399",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(3.399)^{2}+(3.804)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=5.101\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|3.804|}{|3.399|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=48.218^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=5.101\\ \\text{m s}^{-1}$, at $48.218^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q034",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $5\\ \\text{kg}$ moves at $11\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $3\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $35^{\\circ}$ with the line of centres. The coefficient of restitution is $0.4$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=11\\cos 35^{\\circ},\\quad u_{At}=11\\sin 35^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=9.011,\\quad u_{At}=6.309",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=6.309",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "5(9.011)+3(0)=5v_{An}+3v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.4(9.011-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=4.28",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(4.28)^{2}+(6.309)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=7.624\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|6.309|}{|4.28|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=55.848^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=7.624\\ \\text{m s}^{-1}$, at $55.848^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q035",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $2\\ \\text{kg}$ moves at $14\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $5\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $45^{\\circ}$ with the line of centres. The coefficient of restitution is $0.5$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=14\\cos 45^{\\circ},\\quad u_{At}=14\\sin 45^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=9.899,\\quad u_{At}=9.899",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=9.899",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "2(9.899)+5(0)=2v_{An}+5v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.5(9.899-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=-0.707",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(-0.707)^{2}+(9.899)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=9.925\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|9.899|}{|-0.707|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=85.914^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=9.925\\ \\text{m s}^{-1}$, at $85.914^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q036",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $6\\ \\text{kg}$ moves at $8\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $4\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $20^{\\circ}$ with the line of centres. The coefficient of restitution is $0.8$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=8\\cos 20^{\\circ},\\quad u_{At}=8\\sin 20^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=7.518,\\quad u_{At}=2.736",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=2.736",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "6(7.518)+4(0)=6v_{An}+4v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.8(7.518-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=2.105",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(2.105)^{2}+(2.736)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=3.452\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|2.736|}{|2.105|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=52.429^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=3.452\\ \\text{m s}^{-1}$, at $52.429^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q037",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $3\\ \\text{kg}$ moves at $13\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $6\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $50^{\\circ}$ with the line of centres. The coefficient of restitution is $0.3$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=13\\cos 50^{\\circ},\\quad u_{At}=13\\sin 50^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=8.356,\\quad u_{At}=9.959",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=9.959",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "3(8.356)+6(0)=3v_{An}+6v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.3(8.356-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=1.114",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(1.114)^{2}+(9.959)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=10.021\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|9.959|}{|1.114|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=83.616^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=10.021\\ \\text{m s}^{-1}$, at $83.616^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q038",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $7\\ \\text{kg}$ moves at $10\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $5\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $60^{\\circ}$ with the line of centres. The coefficient of restitution is $0.6$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=10\\cos 60^{\\circ},\\quad u_{At}=10\\sin 60^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=5,\\quad u_{At}=8.66",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=8.66",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "7(5)+5(0)=7v_{An}+5v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.6(5-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=1.667",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(1.667)^{2}+(8.66)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=8.819\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|8.66|}{|1.667|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=79.107^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=8.819\\ \\text{m s}^{-1}$, at $79.107^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q039",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $4\\ \\text{kg}$ moves at $15\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $7\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $30^{\\circ}$ with the line of centres. The coefficient of restitution is $0.5$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=15\\cos 30^{\\circ},\\quad u_{At}=15\\sin 30^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=12.99,\\quad u_{At}=7.5",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=7.5",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "4(12.99)+7(0)=4v_{An}+7v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.5(12.99-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=0.59",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(0.59)^{2}+(7.5)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=7.523\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|7.5|}{|0.59|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=85.498^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=7.523\\ \\text{m s}^{-1}$, at $85.498^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q040",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $5\\ \\text{kg}$ moves at $12\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $2\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $55^{\\circ}$ with the line of centres. The coefficient of restitution is $0.7$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=12\\cos 55^{\\circ},\\quad u_{At}=12\\sin 55^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=6.883,\\quad u_{At}=9.83",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=9.83",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "5(6.883)+2(0)=5v_{An}+2v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.7(6.883-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=3.54",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(3.54)^{2}+(9.83)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=10.448\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|9.83|}{|3.54|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=70.196^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=10.448\\ \\text{m s}^{-1}$, at $70.196^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q041",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $8\\ \\text{kg}$ moves at $9\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $3\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $40^{\\circ}$ with the line of centres. The coefficient of restitution is $0.25$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=9\\cos 40^{\\circ},\\quad u_{At}=9\\sin 40^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=6.894,\\quad u_{At}=5.785",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=5.785",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "8(6.894)+3(0)=8v_{An}+3v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.25(6.894-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=4.544",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(4.544)^{2}+(5.785)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=7.356\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|5.785|}{|4.544|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=51.851^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=7.356\\ \\text{m s}^{-1}$, at $51.851^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q042",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $3\\ \\text{kg}$ moves at $16\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $5\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $35^{\\circ}$ with the line of centres. The coefficient of restitution is $0.8$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=16\\cos 35^{\\circ},\\quad u_{At}=16\\sin 35^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=13.106,\\quad u_{At}=9.177",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=9.177",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "3(13.106)+5(0)=3v_{An}+5v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.8(13.106-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=-1.638",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(-1.638)^{2}+(9.177)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=9.322\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|9.177|}{|-1.638|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=79.878^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=9.322\\ \\text{m s}^{-1}$, at $79.878^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q043",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $6\\ \\text{kg}$ moves at $11\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $7\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $25^{\\circ}$ with the line of centres. The coefficient of restitution is $0.6$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=11\\cos 25^{\\circ},\\quad u_{At}=11\\sin 25^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=9.969,\\quad u_{At}=4.649",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=4.649",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "6(9.969)+7(0)=6v_{An}+7v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.6(9.969-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=1.38",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(1.38)^{2}+(4.649)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=4.849\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|4.649|}{|1.38|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=73.462^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=4.849\\ \\text{m s}^{-1}$, at $73.462^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q044",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $2\\ \\text{kg}$ moves at $18\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $4\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $45^{\\circ}$ with the line of centres. The coefficient of restitution is $0.4$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=18\\cos 45^{\\circ},\\quad u_{At}=18\\sin 45^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=12.728,\\quad u_{At}=12.728",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=12.728",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "2(12.728)+4(0)=2v_{An}+4v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.4(12.728-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=0.849",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(0.849)^{2}+(12.728)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=12.756\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|12.728|}{|0.849|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=86.186^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=12.756\\ \\text{m s}^{-1}$, at $86.186^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q045",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $9\\ \\text{kg}$ moves at $10\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $6\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $50^{\\circ}$ with the line of centres. The coefficient of restitution is $0.5$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=10\\cos 50^{\\circ},\\quad u_{At}=10\\sin 50^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=6.428,\\quad u_{At}=7.66",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=7.66",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "9(6.428)+6(0)=9v_{An}+6v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.5(6.428-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=2.571",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(2.571)^{2}+(7.66)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=8.08\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|7.66|}{|2.571|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=71.446^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=8.08\\ \\text{m s}^{-1}$, at $71.446^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q046",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $4\\ \\text{kg}$ moves at $14\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $3\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $20^{\\circ}$ with the line of centres. The coefficient of restitution is $0.9$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=14\\cos 20^{\\circ},\\quad u_{At}=14\\sin 20^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=13.156,\\quad u_{At}=4.788",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=4.788",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "4(13.156)+3(0)=4v_{An}+3v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.9(13.156-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=2.443",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(2.443)^{2}+(4.788)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=5.376\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|4.788|}{|2.443|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=62.967^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=5.376\\ \\text{m s}^{-1}$, at $62.967^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q047",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $5\\ \\text{kg}$ moves at $13\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $8\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $60^{\\circ}$ with the line of centres. The coefficient of restitution is $0.35$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=13\\cos 60^{\\circ},\\quad u_{At}=13\\sin 60^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=6.5,\\quad u_{At}=11.258",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=11.258",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "5(6.5)+8(0)=5v_{An}+8v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.35(6.5-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=1.1",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(1.1)^{2}+(11.258)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=11.312\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|11.258|}{|1.1|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=84.42^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=11.312\\ \\text{m s}^{-1}$, at $84.42^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q048",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $7\\ \\text{kg}$ moves at $12\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $2\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $30^{\\circ}$ with the line of centres. The coefficient of restitution is $0.65$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=12\\cos 30^{\\circ},\\quad u_{At}=12\\sin 30^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=10.392,\\quad u_{At}=6",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=6",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "7(10.392)+2(0)=7v_{An}+2v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.65(10.392-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=6.582",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(6.582)^{2}+(6)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=8.906\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|6|}{|6.582|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=42.352^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=8.906\\ \\text{m s}^{-1}$, at $42.352^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q049",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $3\\ \\text{kg}$ moves at $15\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $9\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $40^{\\circ}$ with the line of centres. The coefficient of restitution is $0.55$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=15\\cos 40^{\\circ},\\quad u_{At}=15\\sin 40^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=11.491,\\quad u_{At}=9.642",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=9.642",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "3(11.491)+9(0)=3v_{An}+9v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.55(11.491-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=-1.867",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(-1.867)^{2}+(9.642)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=9.821\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|9.642|}{|-1.867|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=79.04^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=9.821\\ \\text{m s}^{-1}$, at $79.04^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q050",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "resolving-velocity",
      "stationary-sphere",
      "direction-after-impact"
    ],
    "questionText": "Smooth sphere $A$ of mass $6\\ \\text{kg}$ moves at $16\\ \\text{m s}^{-1}$ and collides obliquely with a smooth sphere $B$ of mass $5\\ \\text{kg}$ initially at rest. The direction of motion of $A$ before impact makes an angle of $25^{\\circ}$ with the line of centres. The coefficient of restitution is $0.7$. Find the speed of $A$ after impact and the angle its path then makes with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve the initial velocity of A",
          "workingLatex": "u_{An}=16\\cos 25^{\\circ},\\quad u_{At}=16\\sin 25^{\\circ}",
          "explanation": "The normal component is along the line of centres; the tangential component is perpendicular to it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the components",
          "workingLatex": "u_{An}=14.501,\\quad u_{At}=6.762",
          "explanation": "These two perpendicular components describe the incoming velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the smooth-sphere fact",
          "workingLatex": "v_{At}=u_{At}=6.762",
          "explanation": "A smooth impact has no tangential impulse, so the tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up normal momentum",
          "workingLatex": "6(14.501)+5(0)=6v_{An}+5v_{Bn}",
          "explanation": "Momentum is conserved in the normal direction for the two-sphere system.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.7(14.501-0)",
          "explanation": "Restitution compares separation and approach along the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the normal component of A",
          "workingLatex": "v_{An}=3.296",
          "explanation": "Only this normal component of $A$ is changed by the collision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine perpendicular components",
          "workingLatex": "|v_A|=\\sqrt{(3.296)^{2}+(6.762)^{2}}",
          "explanation": "Speed comes from Pythagoras because normal and tangential components are perpendicular.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Calculate the speed",
          "workingLatex": "|v_A|=7.522\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the final velocity of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle to the line of centres",
          "workingLatex": "\\tan\\theta=\\dfrac{|6.762|}{|3.296|}",
          "explanation": "The angle is measured using the tangential component over the normal component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=64.016^{\\circ}",
          "explanation": "The absolute values give the acute angle made with the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|v_A|=7.522\\ \\text{m s}^{-1}$, at $64.016^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q051",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $2\\ \\text{kg}$ moves at $10\\ \\text{m s}^{-1}$ at an angle of $30^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $3\\ \\text{kg}$ at rest. The coefficient of restitution is $0.5$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=10\\cos 30^{\\circ}=8.66",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "2(8.66)=2v_{An}+3v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.5(8.66)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=0.866,\\quad v_{Bn}=5.196",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|2(0.866-8.66)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=15.588\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|3(5.196-0)|=15.588\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=33.75\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=15.588\\ \\text{N s}$ and kinetic energy lost $=33.75\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q052",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $3\\ \\text{kg}$ moves at $12\\ \\text{m s}^{-1}$ at an angle of $45^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $2\\ \\text{kg}$ at rest. The coefficient of restitution is $0.6$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=12\\cos 45^{\\circ}=8.485",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "3(8.485)=3v_{An}+2v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.6(8.485)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=3.055,\\quad v_{Bn}=8.146",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|3(3.055-8.485)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=16.292\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|2(8.146-0)|=16.292\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=27.648\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=16.292\\ \\text{N s}$ and kinetic energy lost $=27.648\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q053",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $4\\ \\text{kg}$ moves at $14\\ \\text{m s}^{-1}$ at an angle of $35^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $5\\ \\text{kg}$ at rest. The coefficient of restitution is $0.4$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=14\\cos 35^{\\circ}=11.468",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "4(11.468)=4v_{An}+5v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.4(11.468)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=2.548,\\quad v_{Bn}=7.136",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|4(2.548-11.468)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=35.679\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|5(7.136-0)|=35.679\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=122.75\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=35.679\\ \\text{N s}$ and kinetic energy lost $=122.75\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q054",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $5\\ \\text{kg}$ moves at $9\\ \\text{m s}^{-1}$ at an angle of $25^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $3\\ \\text{kg}$ at rest. The coefficient of restitution is $0.75$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=9\\cos 25^{\\circ}=8.157",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "5(8.157)=5v_{An}+3v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.75(8.157)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=2.804,\\quad v_{Bn}=8.921",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|5(2.804-8.157)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=26.764\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|3(8.921-0)|=26.764\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=27.289\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=26.764\\ \\text{N s}$ and kinetic energy lost $=27.289\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q055",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $6\\ \\text{kg}$ moves at $11\\ \\text{m s}^{-1}$ at an angle of $50^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $4\\ \\text{kg}$ at rest. The coefficient of restitution is $0.5$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=11\\cos 50^{\\circ}=7.071",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "6(7.071)=6v_{An}+4v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.5(7.071)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=2.828,\\quad v_{Bn}=6.364",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|6(2.828-7.071)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=25.454\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|4(6.364-0)|=25.454\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=44.995\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=25.454\\ \\text{N s}$ and kinetic energy lost $=44.995\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q056",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $3\\ \\text{kg}$ moves at $13\\ \\text{m s}^{-1}$ at an angle of $40^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $7\\ \\text{kg}$ at rest. The coefficient of restitution is $0.3$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=13\\cos 40^{\\circ}=9.959",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "3(9.959)=3v_{An}+7v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.3(9.959)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=0.896,\\quad v_{Bn}=3.884",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|3(0.896-9.959)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=27.187\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|7(3.884-0)|=27.187\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=94.76\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=27.187\\ \\text{N s}$ and kinetic energy lost $=94.76\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q057",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $8\\ \\text{kg}$ moves at $10\\ \\text{m s}^{-1}$ at an angle of $60^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $5\\ \\text{kg}$ at rest. The coefficient of restitution is $0.8$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=10\\cos 60^{\\circ}=5",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "8(5)=8v_{An}+5v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.8(5)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=1.538,\\quad v_{Bn}=5.538",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|8(1.538-5)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=27.692\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|5(5.538-0)|=27.692\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=13.846\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=27.692\\ \\text{N s}$ and kinetic energy lost $=13.846\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q058",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $4\\ \\text{kg}$ moves at $16\\ \\text{m s}^{-1}$ at an angle of $30^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $2\\ \\text{kg}$ at rest. The coefficient of restitution is $0.65$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=16\\cos 30^{\\circ}=13.856",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "4(13.856)=4v_{An}+2v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.65(13.856)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=6.235,\\quad v_{Bn}=15.242",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|4(6.235-13.856)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=30.484\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|2(15.242-0)|=30.484\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=73.92\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=30.484\\ \\text{N s}$ and kinetic energy lost $=73.92\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q059",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $7\\ \\text{kg}$ moves at $12\\ \\text{m s}^{-1}$ at an angle of $55^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $6\\ \\text{kg}$ at rest. The coefficient of restitution is $0.45$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=12\\cos 55^{\\circ}=6.883",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "7(6.883)=7v_{An}+6v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.45(6.883)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=2.277,\\quad v_{Bn}=5.374",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|7(2.277-6.883)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=32.244\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|6(5.374-0)|=32.244\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=61.031\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=32.244\\ \\text{N s}$ and kinetic energy lost $=61.031\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q060",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "impulse",
      "kinetic-energy-loss",
      "line-of-centres"
    ],
    "questionText": "Smooth sphere $A$ of mass $5\\ \\text{kg}$ moves at $15\\ \\text{m s}^{-1}$ at an angle of $20^{\\circ}$ to the line of centres and collides with a smooth sphere $B$ of mass $9\\ \\text{kg}$ at rest. The coefficient of restitution is $0.7$. Find the magnitude of the impulse during the impact and the kinetic energy lost.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Resolve A along the line of centres",
          "workingLatex": "u_{An}=15\\cos 20^{\\circ}=14.095",
          "explanation": "The impulse acts along the line of centres, so this is the component that matters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the initial normal velocity of B",
          "workingLatex": "u_{Bn}=0",
          "explanation": "Sphere $B$ is initially at rest.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply normal momentum",
          "workingLatex": "5(14.095)=5v_{An}+9v_{Bn}",
          "explanation": "Normal momentum is conserved during the collision.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.7(14.095)",
          "explanation": "Restitution gives the normal separation speed after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for final normal velocities",
          "workingLatex": "v_{An}=-1.309,\\quad v_{Bn}=8.558",
          "explanation": "These values determine the change in momentum of either sphere.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find impulse on A",
          "workingLatex": "J=\\left|5(-1.309-14.095)\\right|",
          "explanation": "Impulse equals change in momentum in the direction of the impulse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate impulse",
          "workingLatex": "J=77.021\\ \\text{N s}",
          "explanation": "The same magnitude acts on $B$ in the opposite direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check using B",
          "workingLatex": "J=|9(8.558-0)|=77.021\\ \\text{N s}",
          "explanation": "Equal and opposite impulses are a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the energy-loss formula",
          "workingLatex": "\\Delta E=\\tfrac12\\dfrac{m_A m_B}{m_A+m_B}(1-e^2)(u_{An}-u_{Bn})^2",
          "explanation": "Only the relative normal motion loses kinetic energy in a smooth oblique impact.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute and calculate",
          "workingLatex": "\\Delta E=162.847\\ \\text{J}",
          "explanation": "Tangential kinetic energy is unchanged because there is no tangential impulse.",
          "diagram": null
        }
      ],
      "finalAnswer": "$J=77.021\\ \\text{N s}$ and kinetic energy lost $=162.847\\ \\text{J}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q061",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "two-moving-spheres",
      "simultaneous-equations",
      "oblique-components"
    ],
    "questionText": "Smooth sphere $A$ of mass $5\\ \\text{kg}$ moves at $12\\ \\text{m s}^{-1}$ at an angle of $35^{\\circ}$ to the line of centres. It collides with smooth sphere $B$ of mass $3\\ \\text{kg}$, whose velocity component along the same line is $2\\ \\text{m s}^{-1}$ in the same positive direction. The coefficient of restitution is $0.6$. Find the velocities of both spheres along the line of centres after impact, and hence the speed and direction of $A$ after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose axes",
          "workingLatex": "\\text{Normal axis along the line of centres; tangential axis perpendicular}",
          "explanation": "This separates the direction affected by impact from the direction unaffected by impact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve A before impact",
          "workingLatex": "u_{An}=12\\cos 35^{\\circ},\\quad u_{At}=12\\sin 35^{\\circ}",
          "explanation": "The given angle is measured from the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate A's components",
          "workingLatex": "u_{An}=9.83,\\quad u_{At}=6.883",
          "explanation": "The normal component enters the collision equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record B's normal component",
          "workingLatex": "u_{Bn}=2",
          "explanation": "Only $B$'s normal component is needed for the line-of-centres calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the approach speed",
          "workingLatex": "u_{An}-u_{Bn}=7.83",
          "explanation": "The spheres approach along the normal if this relative speed is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write conservation of normal momentum",
          "workingLatex": "5(9.83)+3(2)=5v_{An}+3v_{Bn}",
          "explanation": "The internal impulse between the spheres cannot change total normal momentum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.6(9.83-2)",
          "explanation": "Restitution connects the final separation speed to the initial approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the two equations",
          "workingLatex": "v_{An}=5.132,\\quad v_{Bn}=9.83",
          "explanation": "This gives both final normal components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Keep A's tangential component",
          "workingLatex": "v_{At}=u_{At}=6.883",
          "explanation": "Smooth spheres exert no tangential impulse on one another.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find A's final speed",
          "workingLatex": "|v_A|=\\sqrt{(5.132)^2+(6.883)^2}=8.586",
          "explanation": "The final speed combines perpendicular normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find A's final angle",
          "workingLatex": "\\tan\\theta=\\dfrac{|6.883|}{|5.132|}",
          "explanation": "This gives the angle between $A$'s final path and the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=53.292^{\\circ}",
          "explanation": "A larger tangential component makes the path more oblique after impact.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the direction",
          "workingLatex": "v_{An}=5.132\\ \\text{and}\\ v_{At}=6.883",
          "explanation": "The signs of the components determine which side of the line of centres the sphere moves on.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_{An}=5.132\\ \\text{m s}^{-1}$, $v_{Bn}=9.83\\ \\text{m s}^{-1}$, and $A$ has speed $8.586\\ \\text{m s}^{-1}$ at $53.292^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q062",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "two-moving-spheres",
      "simultaneous-equations",
      "oblique-components"
    ],
    "questionText": "Smooth sphere $A$ of mass $4\\ \\text{kg}$ moves at $14\\ \\text{m s}^{-1}$ at an angle of $30^{\\circ}$ to the line of centres. It collides with smooth sphere $B$ of mass $6\\ \\text{kg}$, whose velocity component along the same line is $1\\ \\text{m s}^{-1}$ in the same positive direction. The coefficient of restitution is $0.5$. Find the velocities of both spheres along the line of centres after impact, and hence the speed and direction of $A$ after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose axes",
          "workingLatex": "\\text{Normal axis along the line of centres; tangential axis perpendicular}",
          "explanation": "This separates the direction affected by impact from the direction unaffected by impact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve A before impact",
          "workingLatex": "u_{An}=14\\cos 30^{\\circ},\\quad u_{At}=14\\sin 30^{\\circ}",
          "explanation": "The given angle is measured from the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate A's components",
          "workingLatex": "u_{An}=12.124,\\quad u_{At}=7",
          "explanation": "The normal component enters the collision equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record B's normal component",
          "workingLatex": "u_{Bn}=1",
          "explanation": "Only $B$'s normal component is needed for the line-of-centres calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the approach speed",
          "workingLatex": "u_{An}-u_{Bn}=11.124",
          "explanation": "The spheres approach along the normal if this relative speed is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write conservation of normal momentum",
          "workingLatex": "4(12.124)+6(1)=4v_{An}+6v_{Bn}",
          "explanation": "The internal impulse between the spheres cannot change total normal momentum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.5(12.124-1)",
          "explanation": "Restitution connects the final separation speed to the initial approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the two equations",
          "workingLatex": "v_{An}=2.112,\\quad v_{Bn}=7.675",
          "explanation": "This gives both final normal components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Keep A's tangential component",
          "workingLatex": "v_{At}=u_{At}=7",
          "explanation": "Smooth spheres exert no tangential impulse on one another.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find A's final speed",
          "workingLatex": "|v_A|=\\sqrt{(2.112)^2+(7)^2}=7.312",
          "explanation": "The final speed combines perpendicular normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find A's final angle",
          "workingLatex": "\\tan\\theta=\\dfrac{|7|}{|2.112|}",
          "explanation": "This gives the angle between $A$'s final path and the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=73.207^{\\circ}",
          "explanation": "A larger tangential component makes the path more oblique after impact.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the direction",
          "workingLatex": "v_{An}=2.112\\ \\text{and}\\ v_{At}=7",
          "explanation": "The signs of the components determine which side of the line of centres the sphere moves on.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_{An}=2.112\\ \\text{m s}^{-1}$, $v_{Bn}=7.675\\ \\text{m s}^{-1}$, and $A$ has speed $7.312\\ \\text{m s}^{-1}$ at $73.207^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q063",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "two-moving-spheres",
      "simultaneous-equations",
      "oblique-components"
    ],
    "questionText": "Smooth sphere $A$ of mass $7\\ \\text{kg}$ moves at $10\\ \\text{m s}^{-1}$ at an angle of $45^{\\circ}$ to the line of centres. It collides with smooth sphere $B$ of mass $5\\ \\text{kg}$, whose velocity component along the same line is $3\\ \\text{m s}^{-1}$ in the same positive direction. The coefficient of restitution is $0.4$. Find the velocities of both spheres along the line of centres after impact, and hence the speed and direction of $A$ after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose axes",
          "workingLatex": "\\text{Normal axis along the line of centres; tangential axis perpendicular}",
          "explanation": "This separates the direction affected by impact from the direction unaffected by impact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve A before impact",
          "workingLatex": "u_{An}=10\\cos 45^{\\circ},\\quad u_{At}=10\\sin 45^{\\circ}",
          "explanation": "The given angle is measured from the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate A's components",
          "workingLatex": "u_{An}=7.071,\\quad u_{At}=7.071",
          "explanation": "The normal component enters the collision equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record B's normal component",
          "workingLatex": "u_{Bn}=3",
          "explanation": "Only $B$'s normal component is needed for the line-of-centres calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the approach speed",
          "workingLatex": "u_{An}-u_{Bn}=4.071",
          "explanation": "The spheres approach along the normal if this relative speed is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write conservation of normal momentum",
          "workingLatex": "7(7.071)+5(3)=7v_{An}+5v_{Bn}",
          "explanation": "The internal impulse between the spheres cannot change total normal momentum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.4(7.071-3)",
          "explanation": "Restitution connects the final separation speed to the initial approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the two equations",
          "workingLatex": "v_{An}=4.696,\\quad v_{Bn}=6.325",
          "explanation": "This gives both final normal components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Keep A's tangential component",
          "workingLatex": "v_{At}=u_{At}=7.071",
          "explanation": "Smooth spheres exert no tangential impulse on one another.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find A's final speed",
          "workingLatex": "|v_A|=\\sqrt{(4.696)^2+(7.071)^2}=8.489",
          "explanation": "The final speed combines perpendicular normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find A's final angle",
          "workingLatex": "\\tan\\theta=\\dfrac{|7.071|}{|4.696|}",
          "explanation": "This gives the angle between $A$'s final path and the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=56.41^{\\circ}",
          "explanation": "A larger tangential component makes the path more oblique after impact.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the direction",
          "workingLatex": "v_{An}=4.696\\ \\text{and}\\ v_{At}=7.071",
          "explanation": "The signs of the components determine which side of the line of centres the sphere moves on.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_{An}=4.696\\ \\text{m s}^{-1}$, $v_{Bn}=6.325\\ \\text{m s}^{-1}$, and $A$ has speed $8.489\\ \\text{m s}^{-1}$ at $56.41^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q064",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "two-moving-spheres",
      "simultaneous-equations",
      "oblique-components"
    ],
    "questionText": "Smooth sphere $A$ of mass $6\\ \\text{kg}$ moves at $16\\ \\text{m s}^{-1}$ at an angle of $25^{\\circ}$ to the line of centres. It collides with smooth sphere $B$ of mass $2\\ \\text{kg}$, whose velocity component along the same line is $4\\ \\text{m s}^{-1}$ in the same positive direction. The coefficient of restitution is $0.75$. Find the velocities of both spheres along the line of centres after impact, and hence the speed and direction of $A$ after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose axes",
          "workingLatex": "\\text{Normal axis along the line of centres; tangential axis perpendicular}",
          "explanation": "This separates the direction affected by impact from the direction unaffected by impact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve A before impact",
          "workingLatex": "u_{An}=16\\cos 25^{\\circ},\\quad u_{At}=16\\sin 25^{\\circ}",
          "explanation": "The given angle is measured from the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate A's components",
          "workingLatex": "u_{An}=14.501,\\quad u_{At}=6.762",
          "explanation": "The normal component enters the collision equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record B's normal component",
          "workingLatex": "u_{Bn}=4",
          "explanation": "Only $B$'s normal component is needed for the line-of-centres calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the approach speed",
          "workingLatex": "u_{An}-u_{Bn}=10.501",
          "explanation": "The spheres approach along the normal if this relative speed is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write conservation of normal momentum",
          "workingLatex": "6(14.501)+2(4)=6v_{An}+2v_{Bn}",
          "explanation": "The internal impulse between the spheres cannot change total normal momentum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.75(14.501-4)",
          "explanation": "Restitution connects the final separation speed to the initial approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the two equations",
          "workingLatex": "v_{An}=9.907,\\quad v_{Bn}=17.782",
          "explanation": "This gives both final normal components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Keep A's tangential component",
          "workingLatex": "v_{At}=u_{At}=6.762",
          "explanation": "Smooth spheres exert no tangential impulse on one another.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find A's final speed",
          "workingLatex": "|v_A|=\\sqrt{(9.907)^2+(6.762)^2}=11.994",
          "explanation": "The final speed combines perpendicular normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find A's final angle",
          "workingLatex": "\\tan\\theta=\\dfrac{|6.762|}{|9.907|}",
          "explanation": "This gives the angle between $A$'s final path and the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=34.316^{\\circ}",
          "explanation": "A larger tangential component makes the path more oblique after impact.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the direction",
          "workingLatex": "v_{An}=9.907\\ \\text{and}\\ v_{At}=6.762",
          "explanation": "The signs of the components determine which side of the line of centres the sphere moves on.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_{An}=9.907\\ \\text{m s}^{-1}$, $v_{Bn}=17.782\\ \\text{m s}^{-1}$, and $A$ has speed $11.994\\ \\text{m s}^{-1}$ at $34.316^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q065",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "vector",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "two-moving-spheres",
      "simultaneous-equations",
      "oblique-components"
    ],
    "questionText": "Smooth sphere $A$ of mass $8\\ \\text{kg}$ moves at $13\\ \\text{m s}^{-1}$ at an angle of $40^{\\circ}$ to the line of centres. It collides with smooth sphere $B$ of mass $3\\ \\text{kg}$, whose velocity component along the same line is $2\\ \\text{m s}^{-1}$ in the same positive direction. The coefficient of restitution is $0.65$. Find the velocities of both spheres along the line of centres after impact, and hence the speed and direction of $A$ after impact.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose axes",
          "workingLatex": "\\text{Normal axis along the line of centres; tangential axis perpendicular}",
          "explanation": "This separates the direction affected by impact from the direction unaffected by impact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve A before impact",
          "workingLatex": "u_{An}=13\\cos 40^{\\circ},\\quad u_{At}=13\\sin 40^{\\circ}",
          "explanation": "The given angle is measured from the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate A's components",
          "workingLatex": "u_{An}=9.959,\\quad u_{At}=8.356",
          "explanation": "The normal component enters the collision equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record B's normal component",
          "workingLatex": "u_{Bn}=2",
          "explanation": "Only $B$'s normal component is needed for the line-of-centres calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the approach speed",
          "workingLatex": "u_{An}-u_{Bn}=7.959",
          "explanation": "The spheres approach along the normal if this relative speed is positive.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write conservation of normal momentum",
          "workingLatex": "8(9.959)+3(2)=8v_{An}+3v_{Bn}",
          "explanation": "The internal impulse between the spheres cannot change total normal momentum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write restitution",
          "workingLatex": "v_{Bn}-v_{An}=0.65(9.959-2)",
          "explanation": "Restitution connects the final separation speed to the initial approach speed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the two equations",
          "workingLatex": "v_{An}=6.377,\\quad v_{Bn}=11.55",
          "explanation": "This gives both final normal components.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Keep A's tangential component",
          "workingLatex": "v_{At}=u_{At}=8.356",
          "explanation": "Smooth spheres exert no tangential impulse on one another.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find A's final speed",
          "workingLatex": "|v_A|=\\sqrt{(6.377)^2+(8.356)^2}=10.512",
          "explanation": "The final speed combines perpendicular normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find A's final angle",
          "workingLatex": "\\tan\\theta=\\dfrac{|8.356|}{|6.377|}",
          "explanation": "This gives the angle between $A$'s final path and the line of centres.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Calculate the angle",
          "workingLatex": "\\theta=52.65^{\\circ}",
          "explanation": "A larger tangential component makes the path more oblique after impact.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the direction",
          "workingLatex": "v_{An}=6.377\\ \\text{and}\\ v_{At}=8.356",
          "explanation": "The signs of the components determine which side of the line of centres the sphere moves on.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v_{An}=6.377\\ \\text{m s}^{-1}$, $v_{Bn}=11.55\\ \\text{m s}^{-1}$, and $A$ has speed $10.512\\ \\text{m s}^{-1}$ at $52.65^{\\circ}$ to the line of centres."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q066",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "reverse-problem",
      "angle",
      "stationary-sphere"
    ],
    "questionText": "Smooth sphere $A$ of mass $5\\ \\text{kg}$ moves at $12\\ \\text{m s}^{-1}$ and strikes a smooth sphere $B$ of mass $2\\ \\text{kg}$ initially at rest. The coefficient of restitution is $0.5$. After impact, $A$ moves at an angle of $45^{\\circ}$ to the line of centres. Find the angle that $A$'s original path made with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let the required initial angle be alpha",
          "workingLatex": "u_{An}=12\\cos\\alpha,\\quad u_{At}=12\\sin\\alpha",
          "explanation": "The incoming speed is split into normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the smooth impact condition",
          "workingLatex": "v_{At}=u_{At}=12\\sin\\alpha",
          "explanation": "The tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the normal impact formula for B initially at rest",
          "workingLatex": "v_{An}=\\dfrac{m_A-e m_B}{m_A+m_B}u_{An}",
          "explanation": "This follows from combining momentum with restitution in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the masses and e",
          "workingLatex": "v_{An}=\\dfrac{5-0.5(2)}{5+2}(12\\cos\\alpha)",
          "explanation": "The fraction tells us how much of $A$'s normal component remains after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the multiplier",
          "workingLatex": "v_{An}=0.571(12\\cos\\alpha)",
          "explanation": "The multiplier is positive here, so $A$ continues in the positive normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the final angle",
          "workingLatex": "\\tan 45^{\\circ}=\\dfrac{v_{At}}{v_{An}}",
          "explanation": "Angle to the line of centres is tangential component divided by normal component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the component expressions",
          "workingLatex": "\\tan 45^{\\circ}=\\dfrac{12\\sin\\alpha}{0.571(12\\cos\\alpha)}",
          "explanation": "The common speed cancels.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tan alpha",
          "workingLatex": "\\tan\\alpha=0.571\\tan 45^{\\circ}",
          "explanation": "This converts the final angle condition into the initial angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate alpha",
          "workingLatex": "\\alpha=\\tan^{-1}(0.571\\tan 45^{\\circ})=29.745^{\\circ}",
          "explanation": "The inverse tangent gives the required incoming angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by computing components",
          "workingLatex": "u_{An}=10.419,\\quad u_{At}=5.954,\\quad v_{An}=5.954",
          "explanation": "These components would give the stated final angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\alpha=29.745^{\\circ}",
          "explanation": "This is the angle between $A$'s original path and the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$29.745^{\\circ}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q067",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "reverse-problem",
      "angle",
      "stationary-sphere"
    ],
    "questionText": "Smooth sphere $A$ of mass $6\\ \\text{kg}$ moves at $15\\ \\text{m s}^{-1}$ and strikes a smooth sphere $B$ of mass $3\\ \\text{kg}$ initially at rest. The coefficient of restitution is $0.4$. After impact, $A$ moves at an angle of $50^{\\circ}$ to the line of centres. Find the angle that $A$'s original path made with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let the required initial angle be alpha",
          "workingLatex": "u_{An}=15\\cos\\alpha,\\quad u_{At}=15\\sin\\alpha",
          "explanation": "The incoming speed is split into normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the smooth impact condition",
          "workingLatex": "v_{At}=u_{At}=15\\sin\\alpha",
          "explanation": "The tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the normal impact formula for B initially at rest",
          "workingLatex": "v_{An}=\\dfrac{m_A-e m_B}{m_A+m_B}u_{An}",
          "explanation": "This follows from combining momentum with restitution in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the masses and e",
          "workingLatex": "v_{An}=\\dfrac{6-0.4(3)}{6+3}(15\\cos\\alpha)",
          "explanation": "The fraction tells us how much of $A$'s normal component remains after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the multiplier",
          "workingLatex": "v_{An}=0.533(15\\cos\\alpha)",
          "explanation": "The multiplier is positive here, so $A$ continues in the positive normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the final angle",
          "workingLatex": "\\tan 50^{\\circ}=\\dfrac{v_{At}}{v_{An}}",
          "explanation": "Angle to the line of centres is tangential component divided by normal component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the component expressions",
          "workingLatex": "\\tan 50^{\\circ}=\\dfrac{15\\sin\\alpha}{0.533(15\\cos\\alpha)}",
          "explanation": "The common speed cancels.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tan alpha",
          "workingLatex": "\\tan\\alpha=0.533\\tan 50^{\\circ}",
          "explanation": "This converts the final angle condition into the initial angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate alpha",
          "workingLatex": "\\alpha=\\tan^{-1}(0.533\\tan 50^{\\circ})=32.44^{\\circ}",
          "explanation": "The inverse tangent gives the required incoming angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by computing components",
          "workingLatex": "u_{An}=12.659,\\quad u_{At}=8.046,\\quad v_{An}=6.752",
          "explanation": "These components would give the stated final angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\alpha=32.44^{\\circ}",
          "explanation": "This is the angle between $A$'s original path and the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$32.44^{\\circ}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q068",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "reverse-problem",
      "angle",
      "stationary-sphere"
    ],
    "questionText": "Smooth sphere $A$ of mass $7\\ \\text{kg}$ moves at $10\\ \\text{m s}^{-1}$ and strikes a smooth sphere $B$ of mass $2\\ \\text{kg}$ initially at rest. The coefficient of restitution is $0.6$. After impact, $A$ moves at an angle of $35^{\\circ}$ to the line of centres. Find the angle that $A$'s original path made with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let the required initial angle be alpha",
          "workingLatex": "u_{An}=10\\cos\\alpha,\\quad u_{At}=10\\sin\\alpha",
          "explanation": "The incoming speed is split into normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the smooth impact condition",
          "workingLatex": "v_{At}=u_{At}=10\\sin\\alpha",
          "explanation": "The tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the normal impact formula for B initially at rest",
          "workingLatex": "v_{An}=\\dfrac{m_A-e m_B}{m_A+m_B}u_{An}",
          "explanation": "This follows from combining momentum with restitution in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the masses and e",
          "workingLatex": "v_{An}=\\dfrac{7-0.6(2)}{7+2}(10\\cos\\alpha)",
          "explanation": "The fraction tells us how much of $A$'s normal component remains after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the multiplier",
          "workingLatex": "v_{An}=0.644(10\\cos\\alpha)",
          "explanation": "The multiplier is positive here, so $A$ continues in the positive normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the final angle",
          "workingLatex": "\\tan 35^{\\circ}=\\dfrac{v_{At}}{v_{An}}",
          "explanation": "Angle to the line of centres is tangential component divided by normal component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the component expressions",
          "workingLatex": "\\tan 35^{\\circ}=\\dfrac{10\\sin\\alpha}{0.644(10\\cos\\alpha)}",
          "explanation": "The common speed cancels.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tan alpha",
          "workingLatex": "\\tan\\alpha=0.644\\tan 35^{\\circ}",
          "explanation": "This converts the final angle condition into the initial angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate alpha",
          "workingLatex": "\\alpha=\\tan^{-1}(0.644\\tan 35^{\\circ})=24.287^{\\circ}",
          "explanation": "The inverse tangent gives the required incoming angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by computing components",
          "workingLatex": "u_{An}=9.115,\\quad u_{At}=4.113,\\quad v_{An}=5.874",
          "explanation": "These components would give the stated final angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\alpha=24.287^{\\circ}",
          "explanation": "This is the angle between $A$'s original path and the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$24.287^{\\circ}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q069",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "reverse-problem",
      "angle",
      "stationary-sphere"
    ],
    "questionText": "Smooth sphere $A$ of mass $8\\ \\text{kg}$ moves at $14\\ \\text{m s}^{-1}$ and strikes a smooth sphere $B$ of mass $3\\ \\text{kg}$ initially at rest. The coefficient of restitution is $0.5$. After impact, $A$ moves at an angle of $40^{\\circ}$ to the line of centres. Find the angle that $A$'s original path made with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let the required initial angle be alpha",
          "workingLatex": "u_{An}=14\\cos\\alpha,\\quad u_{At}=14\\sin\\alpha",
          "explanation": "The incoming speed is split into normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the smooth impact condition",
          "workingLatex": "v_{At}=u_{At}=14\\sin\\alpha",
          "explanation": "The tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the normal impact formula for B initially at rest",
          "workingLatex": "v_{An}=\\dfrac{m_A-e m_B}{m_A+m_B}u_{An}",
          "explanation": "This follows from combining momentum with restitution in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the masses and e",
          "workingLatex": "v_{An}=\\dfrac{8-0.5(3)}{8+3}(14\\cos\\alpha)",
          "explanation": "The fraction tells us how much of $A$'s normal component remains after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the multiplier",
          "workingLatex": "v_{An}=0.591(14\\cos\\alpha)",
          "explanation": "The multiplier is positive here, so $A$ continues in the positive normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the final angle",
          "workingLatex": "\\tan 40^{\\circ}=\\dfrac{v_{At}}{v_{An}}",
          "explanation": "Angle to the line of centres is tangential component divided by normal component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the component expressions",
          "workingLatex": "\\tan 40^{\\circ}=\\dfrac{14\\sin\\alpha}{0.591(14\\cos\\alpha)}",
          "explanation": "The common speed cancels.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tan alpha",
          "workingLatex": "\\tan\\alpha=0.591\\tan 40^{\\circ}",
          "explanation": "This converts the final angle condition into the initial angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate alpha",
          "workingLatex": "\\alpha=\\tan^{-1}(0.591\\tan 40^{\\circ})=26.374^{\\circ}",
          "explanation": "The inverse tangent gives the required incoming angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by computing components",
          "workingLatex": "u_{An}=12.543,\\quad u_{At}=6.219,\\quad v_{An}=7.412",
          "explanation": "These components would give the stated final angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\alpha=26.374^{\\circ}",
          "explanation": "This is the angle between $A$'s original path and the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$26.374^{\\circ}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Oblique impact of spheres",
    "subtopicId": "fm.y2.mech.oblique-spheres",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "oblique-spheres",
      "description": "Two smooth spheres collide obliquely. The line of centres is shown as the normal direction, with tangential directions perpendicular to it.",
      "caption": "Resolve velocities parallel and perpendicular to the line of centres.",
      "alt": "Oblique impact of two smooth spheres showing the line of centres and perpendicular tangential direction."
    },
    "id": "fm.y2.mech.oblique-spheres.q070",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "numeric",
    "tags": [
      "oblique-impact",
      "smooth-spheres",
      "reverse-problem",
      "angle",
      "stationary-sphere"
    ],
    "questionText": "Smooth sphere $A$ of mass $9\\ \\text{kg}$ moves at $16\\ \\text{m s}^{-1}$ and strikes a smooth sphere $B$ of mass $4\\ \\text{kg}$ initially at rest. The coefficient of restitution is $0.3$. After impact, $A$ moves at an angle of $55^{\\circ}$ to the line of centres. Find the angle that $A$'s original path made with the line of centres.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let the required initial angle be alpha",
          "workingLatex": "u_{An}=16\\cos\\alpha,\\quad u_{At}=16\\sin\\alpha",
          "explanation": "The incoming speed is split into normal and tangential components.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the smooth impact condition",
          "workingLatex": "v_{At}=u_{At}=16\\sin\\alpha",
          "explanation": "The tangential component of $A$ is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the normal impact formula for B initially at rest",
          "workingLatex": "v_{An}=\\dfrac{m_A-e m_B}{m_A+m_B}u_{An}",
          "explanation": "This follows from combining momentum with restitution in the normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the masses and e",
          "workingLatex": "v_{An}=\\dfrac{9-0.3(4)}{9+4}(16\\cos\\alpha)",
          "explanation": "The fraction tells us how much of $A$'s normal component remains after impact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the multiplier",
          "workingLatex": "v_{An}=0.6(16\\cos\\alpha)",
          "explanation": "The multiplier is positive here, so $A$ continues in the positive normal direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the final angle",
          "workingLatex": "\\tan 55^{\\circ}=\\dfrac{v_{At}}{v_{An}}",
          "explanation": "Angle to the line of centres is tangential component divided by normal component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the component expressions",
          "workingLatex": "\\tan 55^{\\circ}=\\dfrac{16\\sin\\alpha}{0.6(16\\cos\\alpha)}",
          "explanation": "The common speed cancels.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tan alpha",
          "workingLatex": "\\tan\\alpha=0.6\\tan 55^{\\circ}",
          "explanation": "This converts the final angle condition into the initial angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Calculate alpha",
          "workingLatex": "\\alpha=\\tan^{-1}(0.6\\tan 55^{\\circ})=40.593^{\\circ}",
          "explanation": "The inverse tangent gives the required incoming angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check by computing components",
          "workingLatex": "u_{An}=12.15,\\quad u_{At}=10.411,\\quad v_{An}=7.29",
          "explanation": "These components would give the stated final angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\alpha=40.593^{\\circ}",
          "explanation": "This is the angle between $A$'s original path and the line of centres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$40.593^{\\circ}$"
    }
  }
];
