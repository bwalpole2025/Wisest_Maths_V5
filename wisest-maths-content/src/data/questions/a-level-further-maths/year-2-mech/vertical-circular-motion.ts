import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q001",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.2\\ \\text{kg}$ is attached to a light inextensible string of length $1.2\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $8\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 8^{2} - 4(9.8)(1.2) = 16.96",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 4.118\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.118\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q002",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.25\\ \\text{kg}$ is attached to a light inextensible string of length $1.5\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $9\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 9^{2} - 4(9.8)(1.5) = 22.2",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 4.712\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.712\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q003",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.3\\ \\text{kg}$ is attached to a light inextensible string of length $2\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $10\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 10^{2} - 4(9.8)(2) = 21.6",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 4.648\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.648\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q004",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.35\\ \\text{kg}$ is attached to a light inextensible string of length $2.4\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $11\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 11^{2} - 4(9.8)(2.4) = 26.92",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 5.188\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5.188\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q005",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.4\\ \\text{kg}$ is attached to a light inextensible string of length $2.8\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $12\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 12^{2} - 4(9.8)(2.8) = 34.24",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 5.851\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5.851\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q006",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.45\\ \\text{kg}$ is attached to a light inextensible string of length $3\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $12.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 12.5^{2} - 4(9.8)(3) = 38.65",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 6.217\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6.217\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q007",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.5\\ \\text{kg}$ is attached to a light inextensible string of length $1.8\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $9\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 9^{2} - 4(9.8)(1.8) = 10.44",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 3.231\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3.231\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q008",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.6\\ \\text{kg}$ is attached to a light inextensible string of length $2.2\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $10.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 10.5^{2} - 4(9.8)(2.2) = 24.01",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 4.9\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.9\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q009",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.75\\ \\text{kg}$ is attached to a light inextensible string of length $2.6\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $11.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 11.5^{2} - 4(9.8)(2.6) = 30.33",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 5.507\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5.507\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q010",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.8\\ \\text{kg}$ is attached to a light inextensible string of length $3.5\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $13\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 13^{2} - 4(9.8)(3.5) = 31.8",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 5.639\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5.639\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q011",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $0.9\\ \\text{kg}$ is attached to a light inextensible string of length $4\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $14\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 14^{2} - 4(9.8)(4) = 39.2",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 6.261\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6.261\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "Energy links the speed at the bottom and top of the circle.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q012",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "energy",
      "speed",
      "top"
    ],
    "questionText": "A particle of mass $1\\ \\text{kg}$ is attached to a light inextensible string of length $2.5\\ \\text{m}$ and moves in a vertical circle. At the lowest point its speed is $11\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find its speed at the highest point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose energy levels",
          "workingLatex": "h_{\\text{top}} - h_{\\text{bottom}} = 2r",
          "explanation": "The top of the circle is two radii above the bottom, so this is the vertical height gained.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use conservation of mechanical energy",
          "workingLatex": "\\tfrac12 mu^{2} = \\tfrac12 mv^{2} + mg(2r)",
          "explanation": "With no resistance, kinetic energy lost becomes gravitational potential energy gained.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass",
          "workingLatex": "u^{2} = v^{2} + 4gr",
          "explanation": "Mass appears in every term, so the speed relationship does not depend on the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the top speed",
          "workingLatex": "v^{2} = u^{2} - 4gr",
          "explanation": "The top speed is smaller because the particle has climbed against gravity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "v^{2} = 11^{2} - 4(9.8)(2.5) = 23",
          "explanation": "Insert the given bottom speed, radius and value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v = 4.796\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4.796\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q013",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $0.2\\ \\text{kg}$ moves in a vertical circle on a light string of length $0.8\\ \\text{m}$. At the lowest point its speed is $4\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.2\\left(\\dfrac{4^{2}}{0.8}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 5.96\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=5.96\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q014",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $0.25\\ \\text{kg}$ moves in a vertical circle on a light string of length $1\\ \\text{m}$. At the lowest point its speed is $5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.25\\left(\\dfrac{5^{2}}{1}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 8.7\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=8.7\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q015",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $0.3\\ \\text{kg}$ moves in a vertical circle on a light string of length $1.2\\ \\text{m}$. At the lowest point its speed is $6\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.3\\left(\\dfrac{6^{2}}{1.2}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 11.94\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=11.94\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q016",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $0.4\\ \\text{kg}$ moves in a vertical circle on a light string of length $1.5\\ \\text{m}$. At the lowest point its speed is $7\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.4\\left(\\dfrac{7^{2}}{1.5}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 16.987\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=16.987\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q017",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $0.5\\ \\text{kg}$ moves in a vertical circle on a light string of length $2\\ \\text{m}$. At the lowest point its speed is $8\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.5\\left(\\dfrac{8^{2}}{2}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 20.9\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=20.9\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q018",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $0.6\\ \\text{kg}$ moves in a vertical circle on a light string of length $2.4\\ \\text{m}$. At the lowest point its speed is $9\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.6\\left(\\dfrac{9^{2}}{2.4}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 26.13\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=26.13\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q019",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $0.75\\ \\text{kg}$ moves in a vertical circle on a light string of length $3\\ \\text{m}$. At the lowest point its speed is $10\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.75\\left(\\dfrac{10^{2}}{3}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 32.35\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=32.35\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q020",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $0.8\\ \\text{kg}$ moves in a vertical circle on a light string of length $1.6\\ \\text{m}$. At the lowest point its speed is $7.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.8\\left(\\dfrac{7.5^{2}}{1.6}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 35.965\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=35.965\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q021",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $0.9\\ \\text{kg}$ moves in a vertical circle on a light string of length $2.5\\ \\text{m}$. At the lowest point its speed is $9.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.9\\left(\\dfrac{9.5^{2}}{2.5}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 41.31\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=41.31\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q022",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $1\\ \\text{kg}$ moves in a vertical circle on a light string of length $3.2\\ \\text{m}$. At the lowest point its speed is $11\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 1\\left(\\dfrac{11^{2}}{3.2}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 47.612\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=47.612\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q023",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $1.2\\ \\text{kg}$ moves in a vertical circle on a light string of length $4\\ \\text{m}$. At the lowest point its speed is $12\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 1.2\\left(\\dfrac{12^{2}}{4}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 54.96\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=54.96\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the lowest point, tension points towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q024",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "bottom"
    ],
    "questionText": "A particle of mass $1.5\\ \\text{kg}$ moves in a vertical circle on a light string of length $3.5\\ \\text{m}$. At the lowest point its speed is $10.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string at this instant.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the bottom, inward is upward}",
          "explanation": "Centripetal acceleration always points towards the centre of the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{upward},\\quad mg\\ \\text{downward}",
          "explanation": "At the bottom, tension acts towards the centre while weight acts away from it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T - mg = m\\dfrac{u^{2}}{r}",
          "explanation": "The resultant inward force must provide the centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\left(\\dfrac{u^{2}}{r}+g\\right)",
          "explanation": "Tension must support weight and also pull the particle into circular motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 1.5\\left(\\dfrac{10.5^{2}}{3.5}+9.8\\right)",
          "explanation": "Use the speed at the bottom in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 61.95\\ \\text{N}",
          "explanation": "The answer is a force, so the unit is newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=61.95\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q025",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $0.2\\ \\text{kg}$ moves in a vertical circle on a light string of length $0.8\\ \\text{m}$. At the highest point its speed is $4\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.2\\dfrac{4^{2}}{0.8} - 0.2(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 2.04\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=2.04\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q026",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $0.3\\ \\text{kg}$ moves in a vertical circle on a light string of length $1\\ \\text{m}$. At the highest point its speed is $4.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.3\\dfrac{4.5^{2}}{1} - 0.3(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 3.135\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=3.135\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q027",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $0.4\\ \\text{kg}$ moves in a vertical circle on a light string of length $1.2\\ \\text{m}$. At the highest point its speed is $5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.4\\dfrac{5^{2}}{1.2} - 0.4(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 4.413\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=4.413\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q028",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $0.5\\ \\text{kg}$ moves in a vertical circle on a light string of length $1.5\\ \\text{m}$. At the highest point its speed is $5.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.5\\dfrac{5.5^{2}}{1.5} - 0.5(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 5.183\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=5.183\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q029",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $0.6\\ \\text{kg}$ moves in a vertical circle on a light string of length $2\\ \\text{m}$. At the highest point its speed is $6\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.6\\dfrac{6^{2}}{2} - 0.6(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 4.92\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=4.92\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q030",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $0.75\\ \\text{kg}$ moves in a vertical circle on a light string of length $2.4\\ \\text{m}$. At the highest point its speed is $6.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.75\\dfrac{6.5^{2}}{2.4} - 0.75(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 5.853\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=5.853\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q031",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $0.8\\ \\text{kg}$ moves in a vertical circle on a light string of length $2.8\\ \\text{m}$. At the highest point its speed is $7\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.8\\dfrac{7^{2}}{2.8} - 0.8(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 6.16\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=6.16\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q032",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $0.9\\ \\text{kg}$ moves in a vertical circle on a light string of length $3\\ \\text{m}$. At the highest point its speed is $7.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 0.9\\dfrac{7.5^{2}}{3} - 0.9(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 8.055\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=8.055\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q033",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $1\\ \\text{kg}$ moves in a vertical circle on a light string of length $3.2\\ \\text{m}$. At the highest point its speed is $8\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 1\\dfrac{8^{2}}{3.2} - 1(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 10.2\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=10.2\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q034",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $1.1\\ \\text{kg}$ moves in a vertical circle on a light string of length $3.5\\ \\text{m}$. At the highest point its speed is $8.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 1.1\\dfrac{8.5^{2}}{3.5} - 1.1(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 11.927\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=11.927\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q035",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $1.2\\ \\text{kg}$ moves in a vertical circle on a light string of length $4\\ \\text{m}$. At the highest point its speed is $9\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 1.2\\dfrac{9^{2}}{4} - 1.2(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 12.54\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=12.54\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "At the highest point, both weight and tension point towards the centre.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q036",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "tension",
      "centripetal-force",
      "top"
    ],
    "questionText": "A particle of mass $1.4\\ \\text{kg}$ moves in a vertical circle on a light string of length $4.5\\ \\text{m}$. At the highest point its speed is $9.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the tension in the string.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the radial direction",
          "workingLatex": "\\text{At the top, inward is downward}",
          "explanation": "The centre is below the particle at the highest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List radial forces",
          "workingLatex": "T\\ \\text{downward},\\quad mg\\ \\text{downward}",
          "explanation": "Both tension and weight act towards the centre at the top.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law radially",
          "workingLatex": "T + mg = m\\dfrac{v^{2}}{r}",
          "explanation": "The combined inward forces provide the centripetal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for tension",
          "workingLatex": "T = m\\dfrac{v^{2}}{r} - mg",
          "explanation": "Weight contributes to the centripetal force, so tension is the extra force needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute",
          "workingLatex": "T = 1.4\\dfrac{9.5^{2}}{4.5} - 1.4(9.8)",
          "explanation": "Use the speed at the top in the radial equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Calculate",
          "workingLatex": "T = 14.358\\ \\text{N}",
          "explanation": "A positive value means the string is taut at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T=14.358\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q037",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $0.5\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=4.9",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(0.5)=24.5",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=4.95\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 4.95\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 4.95\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q038",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $0.8\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=7.84",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(0.8)=39.2",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=6.261\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 6.261\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 6.261\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q039",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $1\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=9.8",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(1)=49",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=7\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 7\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 7\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q040",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $1.2\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=11.76",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(1.2)=58.8",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=7.668\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 7.668\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 7.668\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q041",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $1.5\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=14.7",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(1.5)=73.5",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=8.573\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 8.573\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 8.573\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q042",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $1.8\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=17.64",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(1.8)=88.2",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=9.391\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 9.391\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 9.391\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q043",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $2\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=19.6",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(2)=98",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=9.899\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 9.899\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 9.899\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q044",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $2.4\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=23.52",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(2.4)=117.6",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=10.844\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 10.844\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 10.844\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q045",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $2.8\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=27.44",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(2.8)=137.2",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=11.713\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 11.713\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 11.713\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q046",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $3\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=29.4",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(3)=147",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=12.124\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 12.124\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 12.124\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q047",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $3.5\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=34.3",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(3.5)=171.5",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=13.096\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 13.096\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 13.096\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The limiting case for a complete circle occurs at the top.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q048",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "minimum-speed",
      "complete-circle",
      "energy",
      "tension"
    ],
    "questionText": "A particle attached to a light inextensible string of length $4\\ \\text{m}$ is projected from the lowest point of a vertical circle. Taking $g=9.8\\ \\text{m s}^{-2}$, find the minimum initial speed needed for the particle to complete the circle with the string taut.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limiting top condition",
          "workingLatex": "T_{\\text{top}} = 0",
          "explanation": "For the least possible speed that still completes the circle, the string is just taut at the top.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply radial motion at the top",
          "workingLatex": "T+mg=m\\dfrac{v_{t}^{2}}{r}",
          "explanation": "At the top, weight acts towards the centre and helps provide centripetal acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum top speed",
          "workingLatex": "mg=m\\dfrac{v_{t}^{2}}{r}\\Rightarrow v_{t}^{2}=gr=39.2",
          "explanation": "The mass cancels, leaving the smallest allowable top speed squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Relate bottom and top by energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv_t^{2}+mg(2r)",
          "explanation": "The particle must gain height $2r$ when moving from bottom to top.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel mass",
          "workingLatex": "u^{2}=v_t^{2}+4gr",
          "explanation": "Only speeds and radius matter in this energy relation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the limiting top speed",
          "workingLatex": "u^{2}=gr+4gr",
          "explanation": "Using the limiting top speed gives the limiting bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "u^{2}=5gr=5(9.8)(4)=196",
          "explanation": "The standard complete-circle condition from the bottom is $u^2\\ge 5gr$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "u=14\\ \\text{m s}^{-1}",
          "explanation": "Speed is positive, so take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the condition",
          "workingLatex": "u\\ge 14\\ \\text{m s}^{-1}",
          "explanation": "Any smaller speed would make the string go slack before or at the top.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u\\ge 14\\ \\text{m s}^{-1}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 60 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q049",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $0.4\\ \\text{kg}$ is attached to a light string of length $1\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $7\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $60^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 60^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=1(1-\\tfrac12)=0.5",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=7^{2}-2(9.8)(0.5)=39.2",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=6.261\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=0.4\\left(\\dfrac{39.2}{1}+9.8(\\tfrac12)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=17.64\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=6.261\\ \\text{m s}^{-1},\\quad T=17.64\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 60 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q050",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $0.5\\ \\text{kg}$ is attached to a light string of length $1.2\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $8\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $60^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 60^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=1.2(1-\\tfrac12)=0.6",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=8^{2}-2(9.8)(0.6)=52.24",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=7.228\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=0.5\\left(\\dfrac{52.24}{1.2}+9.8(\\tfrac12)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=24.217\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=7.228\\ \\text{m s}^{-1},\\quad T=24.217\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 90 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q051",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $0.6\\ \\text{kg}$ is attached to a light string of length $1.5\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $8.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $90^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 90^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=1.5(1-0)=1.5",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=8.5^{2}-2(9.8)(1.5)=42.85",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=6.546\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=0.6\\left(\\dfrac{42.85}{1.5}+9.8(0)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=17.14\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=6.546\\ \\text{m s}^{-1},\\quad T=17.14\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 60 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q052",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $0.75\\ \\text{kg}$ is attached to a light string of length $1.8\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $9.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $60^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 60^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=1.8(1-\\tfrac12)=0.9",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=9.5^{2}-2(9.8)(0.9)=72.61",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=8.521\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=0.75\\left(\\dfrac{72.61}{1.8}+9.8(\\tfrac12)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=33.929\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=8.521\\ \\text{m s}^{-1},\\quad T=33.929\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 90 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q053",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $0.8\\ \\text{kg}$ is attached to a light string of length $2\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $10\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $90^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 90^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=2(1-0)=2",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=10^{2}-2(9.8)(2)=60.8",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=7.797\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=0.8\\left(\\dfrac{60.8}{2}+9.8(0)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=24.32\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=7.797\\ \\text{m s}^{-1},\\quad T=24.32\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 120 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q054",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $0.9\\ \\text{kg}$ is attached to a light string of length $2.2\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $10.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $120^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 120^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=2.2(1--\\tfrac12)=3.3",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=10.5^{2}-2(9.8)(3.3)=45.57",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=6.751\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=0.9\\left(\\dfrac{45.57}{2.2}+9.8(-\\tfrac12)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=14.232\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=6.751\\ \\text{m s}^{-1},\\quad T=14.232\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 60 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q055",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $1\\ \\text{kg}$ is attached to a light string of length $2.5\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $11.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $60^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 60^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=2.5(1-\\tfrac12)=1.25",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=11.5^{2}-2(9.8)(1.25)=107.75",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=10.38\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=1\\left(\\dfrac{107.75}{2.5}+9.8(\\tfrac12)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=48\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=10.38\\ \\text{m s}^{-1},\\quad T=48\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 90 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q056",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $1.1\\ \\text{kg}$ is attached to a light string of length $2.8\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $12\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $90^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 90^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=2.8(1-0)=2.8",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=12^{2}-2(9.8)(2.8)=89.12",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=9.44\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=1.1\\left(\\dfrac{89.12}{2.8}+9.8(0)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=35.011\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=9.44\\ \\text{m s}^{-1},\\quad T=35.011\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 120 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q057",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $1.2\\ \\text{kg}$ is attached to a light string of length $3\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $13\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $120^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 120^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=3(1--\\tfrac12)=4.5",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=13^{2}-2(9.8)(4.5)=80.8",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=8.989\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=1.2\\left(\\dfrac{80.8}{3}+9.8(-\\tfrac12)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=26.44\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=8.989\\ \\text{m s}^{-1},\\quad T=26.44\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 60 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q058",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $1.4\\ \\text{kg}$ is attached to a light string of length $3.5\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $14\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $60^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 60^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=3.5(1-\\tfrac12)=1.75",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=14^{2}-2(9.8)(1.75)=161.7",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=12.716\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=1.4\\left(\\dfrac{161.7}{3.5}+9.8(\\tfrac12)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=71.54\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=12.716\\ \\text{m s}^{-1},\\quad T=71.54\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 90 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q059",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $1.5\\ \\text{kg}$ is attached to a light string of length $4\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $15\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $90^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 90^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=4(1-0)=4",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=15^{2}-2(9.8)(4)=146.6",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=12.108\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=1.5\\left(\\dfrac{146.6}{4}+9.8(0)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=54.975\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=12.108\\ \\text{m s}^{-1},\\quad T=54.975\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The particle is at 120 degrees from the lowest point.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q060",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "general-angle",
      "energy",
      "tension",
      "centripetal-force"
    ],
    "questionText": "A particle of mass $1.8\\ \\text{kg}$ is attached to a light string of length $4.5\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $16\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the speed and the tension when the string makes an angle of $120^{\\circ}$ with the downward vertical.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Measure the height gained",
          "workingLatex": "h=r(1-\\cos 120^{\\circ})",
          "explanation": "At an angle measured from the bottom, the vertical rise is found from the circle geometry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the geometry",
          "workingLatex": "h=4.5(1--\\tfrac12)=6.75",
          "explanation": "This gives the gain in gravitational potential energy from the lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use conservation of energy",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mgh",
          "explanation": "The loss of kinetic energy equals the gain in gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass",
          "workingLatex": "v^{2}=u^{2}-2gh",
          "explanation": "The mass cancels because both energy terms contain $m$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the speed squared",
          "workingLatex": "v^{2}=16^{2}-2(9.8)(6.75)=123.7",
          "explanation": "The speed is lower than at the bottom after gaining height.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the speed",
          "workingLatex": "v=11.122\\ \\text{m s}^{-1}",
          "explanation": "Take the positive square root because speed is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "From the bottom-angle convention, the inward component of weight is $-mg\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for tension",
          "workingLatex": "T=m\\left(\\dfrac{v^{2}}{r}+g\\cos\\theta\\right)",
          "explanation": "Tension supplies whatever inward force is not supplied by weight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute",
          "workingLatex": "T=1.8\\left(\\dfrac{123.7}{4.5}+9.8(-\\tfrac12)\\right)",
          "explanation": "Use the speed at this angle, not the initial bottom speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the tension",
          "workingLatex": "T=40.66\\ \\text{N}",
          "explanation": "A positive tension shows the string remains taut at this position.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v=11.122\\ \\text{m s}^{-1},\\quad T=40.66\\ \\text{N}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q061",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $1\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $5.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(9.8)-30.25}{3(9.8)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.3622",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=111.2^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=3.55\\quad (v=1.884\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=111.2^{\\circ}$ from the downward vertical"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q062",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $1.2\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $6.2\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(11.76)-38.44}{3(11.76)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.4229",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=115^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=4.973\\quad (v=2.23\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=115^{\\circ}$ from the downward vertical"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q063",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $1.5\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $7\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(14.7)-49}{3(14.7)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.4444",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=116.4^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=6.533\\quad (v=2.556\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=116.4^{\\circ}$ from the downward vertical"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q064",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $1.8\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $7.6\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(17.64)-57.76}{3(17.64)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.4248",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=115.1^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=7.493\\quad (v=2.737\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=115.1^{\\circ}$ from the downward vertical"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q065",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $2\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $8.4\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(19.6)-70.56}{3(19.6)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.5333",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=122.2^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=10.453\\quad (v=3.233\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=122.2^{\\circ}$ from the downward vertical"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q066",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $2.4\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $9\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(23.52)-81}{3(23.52)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.4813",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=118.8^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=11.32\\quad (v=3.365\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=118.8^{\\circ}$ from the downward vertical"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q067",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $2.8\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $10\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(27.44)-100}{3(27.44)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.5481",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=123.2^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=15.04\\quad (v=3.878\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=123.2^{\\circ}$ from the downward vertical"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q068",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $3\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $10.5\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(29.4)-110.25}{3(29.4)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.5833",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=125.7^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=17.15\\quad (v=4.141\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=125.7^{\\circ}$ from the downward vertical"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q069",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $3.5\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $11.8\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(34.3)-139.24}{3(34.3)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.6865",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=133.4^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=23.547\\quad (v=4.852\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=133.4^{\\circ}$ from the downward vertical"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Mechanics (Further Mechanics 2)",
    "subtopic": "Vertical circular motion",
    "subtopicId": "fm.y2.mech.vertical-circular",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "vertical-circle",
      "description": "A particle attached to a light inextensible string moves in a vertical circle. The diagram shows the lowest point, highest point, radius and direction towards the centre.",
      "caption": "The string goes slack when its tension first reaches zero.",
      "alt": "Vertical circular motion diagram with a particle on a string and the centre of the circle labelled."
    },
    "id": "fm.y2.mech.vertical-circular.q070",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "vertical-circular-motion",
      "slack-string",
      "energy",
      "centripetal-force",
      "general-angle"
    ],
    "questionText": "A particle is attached to a light inextensible string of length $4\\ \\text{m}$ and projected from the lowest point of a vertical circle with speed $12.8\\ \\text{m s}^{-1}$. Taking $g=9.8\\ \\text{m s}^{-2}$, find the angle from the downward vertical at which the string first becomes slack.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the angle",
          "workingLatex": "\\theta=\\text{angle from the downward vertical}",
          "explanation": "Measuring from the bottom makes the height gained easy to express.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height gained",
          "workingLatex": "h=r(1-\\cos\\theta)",
          "explanation": "The particle is higher than the lowest point by this vertical distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use energy from the bottom",
          "workingLatex": "\\tfrac12 mu^{2}=\\tfrac12 mv^{2}+mg r(1-\\cos\\theta)",
          "explanation": "As the particle rises, kinetic energy is converted into gravitational potential energy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel mass and rearrange",
          "workingLatex": "v^{2}=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "This gives the speed squared at a general angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the slack condition",
          "workingLatex": "T=0",
          "explanation": "The string first goes slack when it can no longer pull the particle towards the centre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the radial equation",
          "workingLatex": "T-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "With the bottom-angle convention, weight contributes $-mg\\cos\\theta$ inward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set tension to zero",
          "workingLatex": "-mg\\cos\\theta=m\\dfrac{v^{2}}{r}",
          "explanation": "At the instant of slackness, only the radial component of weight is available.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the energy expression",
          "workingLatex": "-gr\\cos\\theta=u^{2}-2gr(1-\\cos\\theta)",
          "explanation": "Multiplying by $r/m$ combines the radial equation with energy.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect cosine terms",
          "workingLatex": "3gr\\cos\\theta=2gr-u^{2}",
          "explanation": "Collecting terms isolates the angle of slackness.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for cosine",
          "workingLatex": "\\cos\\theta=\\dfrac{2gr-u^{2}}{3gr}=\\dfrac{2(39.2)-163.84}{3(39.2)}",
          "explanation": "The ratio is dimensionless, as a cosine should be.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cosine",
          "workingLatex": "\\cos\\theta=-0.7265",
          "explanation": "A negative value means the particle has passed the side of the circle before the string goes slack.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the angle",
          "workingLatex": "\\theta=136.6^{\\circ}",
          "explanation": "Use inverse cosine and keep the angle between $0^{\\circ}$ and $180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the speed at slackness",
          "workingLatex": "v^{2}=28.48\\quad (v=5.337\\ \\text{m s}^{-1})",
          "explanation": "The positive speed confirms the particle is still moving when the string becomes slack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta=136.6^{\\circ}$ from the downward vertical"
    }
  }
];
