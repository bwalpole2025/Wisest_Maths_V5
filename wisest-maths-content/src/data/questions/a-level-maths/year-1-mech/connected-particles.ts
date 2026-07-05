import { Question } from "@/lib/types";

export const questions: Question[] = [
{
  "id": "al.y1.mech.connected-particles.q001",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["newtons-third-law", "action-reaction", "forces", "concept"],
  "questionText": "A book rests on a horizontal table and presses down on the table with a force of $12\\ \\text{N}$. Using Newton's third law, state the magnitude and direction of the paired force, and say what it acts on.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the given (action) force.",
        "workingLatex": "\\text{Book on table} = 12\\ \\text{N} \\downarrow",
        "explanation": "The force we are told about is the push of the book down onto the table, so this is one half of the action–reaction pair.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall Newton's third law.",
        "workingLatex": "\\text{Every force has an equal and opposite reaction.}",
        "explanation": "Whenever object A pushes on object B, object B pushes back on A with the same size of force in the opposite direction.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Name the two objects involved.",
        "workingLatex": "A = \\text{book}, \\quad B = \\text{table}",
        "explanation": "The pair always acts between the same two bodies, so the reaction is the table pushing on the book.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Match the magnitude.",
        "workingLatex": "|\\text{reaction}| = 12\\ \\text{N}",
        "explanation": "The reaction is exactly as strong as the action, so its size is also $12\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Reverse the direction.",
        "workingLatex": "\\text{Direction} = \\uparrow",
        "explanation": "The book pushes down, so the table pushes up on the book by the same amount.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the paired force.",
        "workingLatex": "12\\ \\text{N} \\uparrow \\text{ (table on book)}",
        "explanation": "The reaction is a $12\\ \\text{N}$ upward force exerted by the table on the book — note it acts on the book, not the table.",
        "diagram": null
      }
    ],
    "finalAnswer": "$12\\ \\text{N}$ vertically upwards, exerted by the table on the book."
  }
},
{
  "id": "al.y1.mech.connected-particles.q002",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "numeric",
  "tags": ["lift", "normal-reaction", "equilibrium", "weight"],
  "questionText": "A person of mass $60\\ \\text{kg}$ stands in a lift that is at rest. Modelling the person as a particle, find the normal reaction from the lift floor. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "lift",
      "person": true,
      "reaction": "R",
      "weight": "60g",
      "caption": "Person (60 kg) standing in a stationary lift.",
      "alt": "A person in a lift with upward reaction R and downward weight."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the forces on the person.",
        "workingLatex": "R \\uparrow, \\quad W = mg \\downarrow",
        "explanation": "Two forces act: the floor pushes up with reaction $R$, and gravity pulls the person's weight down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the condition for a lift at rest.",
        "workingLatex": "a = 0 \\Rightarrow \\text{forces balance}",
        "explanation": "Since the lift is not moving, the person is in equilibrium, so the upward and downward forces must be equal.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the balance equation.",
        "workingLatex": "R = mg",
        "explanation": "Equilibrium means the reaction exactly supports the weight.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "R = 60 \\times 9.8",
        "explanation": "Using the mass and gravitational acceleration turns the rule into a number.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate.",
        "workingLatex": "R = 588\\ \\text{N}",
        "explanation": "The floor pushes up with $588\\ \\text{N}$, matching the person's weight.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "R = 588\\ \\text{N}",
        "explanation": "At rest the reaction equals the weight, so the person feels their normal weight.",
        "diagram": null
      }
    ],
    "finalAnswer": "$R = 588\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q003",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["blocks-in-contact", "system", "f-equals-ma", "acceleration"],
  "questionText": "Two blocks $A$ and $B$, of masses $3\\ \\text{kg}$ and $2\\ \\text{kg}$, are in contact on a smooth horizontal surface. A horizontal force of $20\\ \\text{N}$ is applied to $A$, pushing the blocks toward $B$. Find the acceleration of the blocks.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "A",
          "shape": "block"
        },
        {
          "label": "B",
          "shape": "block"
        }
      ],
      "connectors": [
        "contact"
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "20\\,\\text{N}",
          "accent": true
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "20 N pushes blocks A and B (in contact) along a smooth surface.",
      "alt": "Blocks A and B in contact, a 20 N force pushing A into B."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Treat the two blocks as one system.",
        "workingLatex": "M = 3 + 2 = 5\\ \\text{kg}",
        "explanation": "Because the blocks stay in contact they move together with the same acceleration, so we can add their masses and treat them as a single object.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the driving force on the system.",
        "workingLatex": "F = 20\\ \\text{N}",
        "explanation": "The internal push between the blocks cancels out for the whole system, so only the external $20\\ \\text{N}$ force accelerates it.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law.",
        "workingLatex": "F = Ma",
        "explanation": "The resultant force on the system equals its total mass times the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the known values.",
        "workingLatex": "20 = 5a",
        "explanation": "Putting in the force and total mass leaves one unknown, the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{20}{5} = 4\\ \\text{m s}^{-2}",
        "explanation": "Dividing the force by the total mass gives the acceleration the pair share.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "a = 4\\ \\text{m s}^{-2}",
        "explanation": "Both blocks accelerate together at $4\\ \\text{m s}^{-2}$ in the direction of the applied force.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 4\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q004",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["blocks-in-contact", "contact-force", "newtons-third-law", "f-equals-ma"],
  "questionText": "Two blocks $A$ ($3\\ \\text{kg}$) and $B$ ($2\\ \\text{kg}$) are in contact on a smooth horizontal surface. A horizontal force of $20\\ \\text{N}$ pushes $A$ toward $B$, giving both blocks an acceleration of $4\\ \\text{m s}^{-2}$. Find the force that $A$ exerts on $B$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "B",
          "shape": "block"
        }
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "R",
          "accent": true
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "Block B alone: the contact force R from A drives it forward.",
      "alt": "Block B alone with the contact force from A acting on it."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide which block to isolate.",
        "workingLatex": "\\text{Consider block } B \\text{ alone.}",
        "explanation": "The contact force is what pushes $B$, so looking at $B$ on its own lets us find that force directly with Newton's second law.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the only horizontal force on B.",
        "workingLatex": "\\text{Contact force } C \\text{ from } A",
        "explanation": "The applied $20\\ \\text{N}$ acts on $A$, not $B$. The only thing pushing $B$ forward is the contact force from $A$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Note why the applied force does not act directly on B.",
        "workingLatex": "20\\ \\text{N} \\text{ acts on } A \\text{ only}",
        "explanation": "Block $B$ never feels the applied push itself; it is set moving purely by $A$ pressing against it, so that press is the force we want.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write Newton's second law for B.",
        "workingLatex": "C = m_B\\, a",
        "explanation": "The resultant force on $B$ is just $C$, and it accelerates $B$ at the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the shared acceleration.",
        "workingLatex": "a = 4\\ \\text{m s}^{-2}",
        "explanation": "Both blocks move together, so $B$ has the same acceleration as the whole system.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "C = 2 \\times 4",
        "explanation": "Block $B$ has mass $2\\ \\text{kg}$ and accelerates at $4\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the contact force.",
        "workingLatex": "C = 8\\ \\text{N}",
        "explanation": "A push of $8\\ \\text{N}$ is exactly what is needed to accelerate the $2\\ \\text{kg}$ block at $4\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with block A.",
        "workingLatex": "20 - C = m_A a = 3 \\times 4 = 12 \\Rightarrow C = 8\\ \\text{N}",
        "explanation": "Looking at $A$, the applied force minus the reaction from $B$ must give $A$'s share of the acceleration — this agrees, confirming the answer.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Interpret using Newton's third law.",
        "workingLatex": "B \\text{ on } A = 8\\ \\text{N (opposite)}",
        "explanation": "By Newton's third law $B$ pushes back on $A$ with the same $8\\ \\text{N}$ in the opposite direction, which is why the check worked.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answer.",
        "workingLatex": "C = 8\\ \\text{N}",
        "explanation": "The force $A$ exerts on $B$ is $8\\ \\text{N}$ in the direction of motion.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A$ exerts a force of $8\\ \\text{N}$ on $B$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q005",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["car-trailer", "tow-bar", "system", "acceleration"],
  "questionText": "A car of mass $1200\\ \\text{kg}$ tows a trailer of mass $300\\ \\text{kg}$ along a straight horizontal road. The engine provides a driving force of $3000\\ \\text{N}$ and there are no resistances to motion. Find the acceleration of the car and trailer.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "\\text{car}",
          "shape": "car"
        },
        {
          "label": "\\text{trailer}",
          "shape": "trailer"
        }
      ],
      "connectors": [
        "bar"
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "3000\\,\\text{N}",
          "accent": true
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "Car (1200 kg) towing a trailer (300 kg); 3000 N driving force.",
      "alt": "Car towing a trailer with a 3000 N driving force."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Model the car and trailer as one system.",
        "workingLatex": "M = 1200 + 300 = 1500\\ \\text{kg}",
        "explanation": "The tow-bar keeps them moving together, so for the acceleration we can treat them as a single mass and ignore the internal tow-bar force.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the external force.",
        "workingLatex": "F = 3000\\ \\text{N}",
        "explanation": "With no resistances, the only external horizontal force on the whole system is the driving force.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law to the system.",
        "workingLatex": "F = Ma",
        "explanation": "The driving force accelerates the combined mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "3000 = 1500a",
        "explanation": "Insert the driving force and the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{3000}{1500} = 2\\ \\text{m s}^{-2}",
        "explanation": "Dividing the force by the total mass gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "a = 2\\ \\text{m s}^{-2}",
        "explanation": "The car and trailer both accelerate forwards at $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q006",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["car-trailer", "tow-bar", "tension", "f-equals-ma"],
  "questionText": "A car of mass $1200\\ \\text{kg}$ tows a trailer of mass $300\\ \\text{kg}$ with a driving force of $3000\\ \\text{N}$ and no resistances, giving an acceleration of $2\\ \\text{m s}^{-2}$. Find the tension in the tow-bar.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "\\text{trailer}",
          "shape": "trailer"
        }
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "T",
          "accent": true
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "Trailer alone: the tow-bar tension T pulls it forward.",
      "alt": "Trailer alone with tow-bar tension T acting forwards."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Isolate the trailer.",
        "workingLatex": "\\text{Consider the trailer alone.}",
        "explanation": "The tow-bar tension is the only forward force on the trailer, so isolating it lets us find the tension straight away.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the horizontal force on the trailer.",
        "workingLatex": "T \\text{ (tow-bar tension)}",
        "explanation": "The driving force acts on the car, not the trailer. The trailer is dragged forward only by the tension in the tow-bar.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Note there are no resistances on the trailer.",
        "workingLatex": "\\text{No resistance} \\Rightarrow \\text{resultant} = T",
        "explanation": "Because the road is modelled as offering no resistance, the tension is the whole resultant force on the trailer.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write Newton's second law for the trailer.",
        "workingLatex": "T = m_{\\text{trailer}}\\, a",
        "explanation": "The resultant force on the trailer equals its mass times the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the shared acceleration.",
        "workingLatex": "a = 2\\ \\text{m s}^{-2}",
        "explanation": "The trailer accelerates at the same rate as the car it is attached to.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "T = 300 \\times 2",
        "explanation": "The trailer has mass $300\\ \\text{kg}$ and accelerates at $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 600\\ \\text{N}",
        "explanation": "A pull of $600\\ \\text{N}$ is what accelerates the trailer at $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check using the car.",
        "workingLatex": "3000 - T = 1200 \\times 2 = 2400 \\Rightarrow T = 600\\ \\text{N}",
        "explanation": "For the car, the driving force minus the tension gives the car's share of the acceleration; this matches, confirming the tension.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 600\\ \\text{N}",
        "explanation": "The tow-bar carries a tension of $600\\ \\text{N}$ while the system accelerates.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 600\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q007",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["connected-string", "smooth-table", "system", "acceleration"],
  "questionText": "Two particles $P$ ($4\\ \\text{kg}$) and $Q$ ($6\\ \\text{kg}$) are joined by a light inextensible string and lie on a smooth horizontal table. A horizontal force of $30\\ \\text{N}$ is applied to $Q$, dragging $P$ behind it. Find the acceleration of the particles.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "P",
          "shape": "particle"
        },
        {
          "label": "Q",
          "shape": "particle"
        }
      ],
      "connectors": [
        "string"
      ],
      "forces": [
        {
          "body": 1,
          "dir": "right",
          "label": "30\\,\\text{N}",
          "accent": true
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "P and Q joined by a string on a smooth table; 30 N applied to Q.",
      "alt": "Two particles joined by a string, a 30 N force pulling on Q."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Treat both particles as one system.",
        "workingLatex": "M = 4 + 6 = 10\\ \\text{kg}",
        "explanation": "A light inextensible string keeps $P$ and $Q$ moving together with one acceleration, so we can add their masses.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the external force.",
        "workingLatex": "F = 30\\ \\text{N}",
        "explanation": "The string tension is internal to the system, so only the applied $30\\ \\text{N}$ drives the whole thing.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law.",
        "workingLatex": "F = Ma",
        "explanation": "The external force equals total mass times the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "30 = 10a",
        "explanation": "Insert the force and the combined mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{30}{10} = 3\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the acceleration both particles share.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "a = 3\\ \\text{m s}^{-2}",
        "explanation": "Both particles accelerate at $3\\ \\text{m s}^{-2}$ in the direction of the pull.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 3\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q008",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["connected-string", "tension", "smooth-table", "f-equals-ma"],
  "questionText": "Two particles $P$ ($4\\ \\text{kg}$) and $Q$ ($6\\ \\text{kg}$) are joined by a light inextensible string on a smooth table. A force of $30\\ \\text{N}$ applied to $Q$ gives the system an acceleration of $3\\ \\text{m s}^{-2}$, with $P$ trailing behind. Find the tension in the string.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "P",
          "shape": "particle"
        }
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "T",
          "accent": true
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "Particle P alone: the string tension T pulls it forward.",
      "alt": "Particle P alone with string tension T acting forwards."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Isolate the trailing particle.",
        "workingLatex": "\\text{Consider } P \\text{ alone.}",
        "explanation": "The only horizontal force on $P$ is the string tension, so isolating $P$ gives the tension directly.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the force on P.",
        "workingLatex": "T \\text{ (string tension)}",
        "explanation": "The $30\\ \\text{N}$ pull is applied to $Q$; particle $P$ is dragged along only by the tension.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Note the table is smooth.",
        "workingLatex": "\\text{No friction} \\Rightarrow \\text{resultant on } P = T",
        "explanation": "With a smooth table there is nothing to oppose the tension, so the tension is the whole resultant force on $P$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write Newton's second law for P.",
        "workingLatex": "T = m_P\\, a",
        "explanation": "The resultant force on $P$ is $T$, accelerating it at the shared rate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the acceleration.",
        "workingLatex": "a = 3\\ \\text{m s}^{-2}",
        "explanation": "The string is inextensible, so $P$ has the same acceleration as the system.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "T = 4 \\times 3",
        "explanation": "Particle $P$ has mass $4\\ \\text{kg}$ and accelerates at $3\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 12\\ \\text{N}",
        "explanation": "A tension of $12\\ \\text{N}$ accelerates the $4\\ \\text{kg}$ particle at $3\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check using Q.",
        "workingLatex": "30 - T = 6 \\times 3 = 18 \\Rightarrow T = 12\\ \\text{N}",
        "explanation": "For $Q$, the applied force minus the tension gives $Q$'s share of the acceleration; the agreement confirms the tension.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 12\\ \\text{N}",
        "explanation": "The string is under a tension of $12\\ \\text{N}$ as the system accelerates.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 12\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q009",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["lift", "normal-reaction", "accelerating-up", "apparent-weight"],
  "questionText": "A person of mass $70\\ \\text{kg}$ stands on the floor of a lift that is accelerating upwards at $2\\ \\text{m s}^{-2}$. Find the normal reaction between the person and the floor. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "lift",
      "person": true,
      "reaction": "R",
      "weight": "70g",
      "accel": {
        "dir": "up",
        "label": "a"
      },
      "caption": "Person (70 kg) in a lift accelerating upward.",
      "alt": "Person in an upward-accelerating lift with reaction R and weight."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the forces on the person.",
        "workingLatex": "R \\uparrow, \\quad W = 70g \\downarrow",
        "explanation": "The floor pushes up with reaction $R$ and gravity pulls the weight down; these are the only vertical forces.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the weight for comparison.",
        "workingLatex": "W = 70 \\times 9.8 = 686\\ \\text{N}",
        "explanation": "Knowing the weight lets us check at the end that the reaction is larger, as it should be for upward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose a positive direction.",
        "workingLatex": "\\text{Take up as positive.}",
        "explanation": "The acceleration is upward, so calling up positive keeps the signs natural.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply Newton's second law vertically.",
        "workingLatex": "R - mg = ma",
        "explanation": "The resultant upward force (reaction minus weight) produces the upward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Make R the subject.",
        "workingLatex": "R = m(g + a)",
        "explanation": "Rearranging shows the reaction must exceed the weight to accelerate the person upward.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "R = 70(9.8 + 2)",
        "explanation": "Insert the mass, $g$ and the upward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify inside the bracket.",
        "workingLatex": "R = 70 \\times 11.8",
        "explanation": "Adding $g$ and $a$ gives the effective acceleration the floor must supply against.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate.",
        "workingLatex": "R = 826\\ \\text{N}",
        "explanation": "The reaction is larger than the weight of $686\\ \\text{N}$, which is why the person feels heavier when the lift accelerates up.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "R = 826\\ \\text{N}",
        "explanation": "The floor pushes up with $826\\ \\text{N}$ during the upward acceleration.",
        "diagram": null
      }
    ],
    "finalAnswer": "$R = 826\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q010",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["lift", "normal-reaction", "accelerating-down", "apparent-weight"],
  "questionText": "A person of mass $50\\ \\text{kg}$ stands in a lift that is accelerating downwards at $1.5\\ \\text{m s}^{-2}$. Find the normal reaction from the floor. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "lift",
      "person": true,
      "reaction": "R",
      "weight": "50g",
      "accel": {
        "dir": "down",
        "label": "a"
      },
      "caption": "Person (50 kg) in a lift accelerating downward.",
      "alt": "Person in a downward-accelerating lift with reaction R and weight."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the vertical forces.",
        "workingLatex": "R \\uparrow, \\quad W = 50g \\downarrow",
        "explanation": "As before the floor's reaction acts up and the weight acts down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the weight for comparison.",
        "workingLatex": "W = 50 \\times 9.8 = 490\\ \\text{N}",
        "explanation": "The reaction should come out below this value, because the person is accelerating downward.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the positive direction as the acceleration.",
        "workingLatex": "\\text{Take down as positive.}",
        "explanation": "The lift accelerates downward, so taking down as positive makes the acceleration positive and keeps the algebra simple.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply Newton's second law.",
        "workingLatex": "mg - R = ma",
        "explanation": "Downward is positive, so the weight is positive and the reaction is negative; their resultant gives the downward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Make R the subject.",
        "workingLatex": "R = m(g - a)",
        "explanation": "Rearranging shows the reaction is now less than the weight, because the person is accelerating downward.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "R = 50(9.8 - 1.5)",
        "explanation": "Insert the mass, $g$ and the downward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify inside the bracket.",
        "workingLatex": "R = 50 \\times 8.3",
        "explanation": "Subtracting the acceleration from $g$ gives the reduced effective pull the floor resists.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate.",
        "workingLatex": "R = 415\\ \\text{N}",
        "explanation": "The reaction is smaller than the weight of $490\\ \\text{N}$, which is why the person feels lighter as the lift accelerates down.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "R = 415\\ \\text{N}",
        "explanation": "The floor pushes up with $415\\ \\text{N}$ during the downward acceleration.",
        "diagram": null
      }
    ],
    "finalAnswer": "$R = 415\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q011",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["car-trailer", "resistance", "system", "acceleration"],
  "questionText": "A car of mass $1000\\ \\text{kg}$ tows a trailer of mass $250\\ \\text{kg}$ along a straight horizontal road. The engine's driving force is $2500\\ \\text{N}$. Resistances of $400\\ \\text{N}$ act on the car and $100\\ \\text{N}$ on the trailer. Find the acceleration.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "\\text{car}",
          "shape": "car"
        },
        {
          "label": "\\text{trailer}",
          "shape": "trailer"
        }
      ],
      "connectors": [
        "bar"
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "2500\\,\\text{N}",
          "accent": true
        },
        {
          "body": 0,
          "dir": "left",
          "label": "400\\,\\text{N}"
        },
        {
          "body": 1,
          "dir": "left",
          "label": "100\\,\\text{N}"
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "Car and trailer: 2500 N drive, resistances 400 N and 100 N.",
      "alt": "Car and trailer with driving force and two resistances."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Model the car and trailer as one system.",
        "workingLatex": "M = 1000 + 250 = 1250\\ \\text{kg}",
        "explanation": "Joined by the tow-bar they share one acceleration, so the total mass is what the resultant force acts on.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the external horizontal forces.",
        "workingLatex": "2500\\ \\text{N} \\rightarrow, \\quad 400\\ \\text{N} \\leftarrow, \\quad 100\\ \\text{N} \\leftarrow",
        "explanation": "The tow-bar tension is internal and cancels, leaving the driving force forwards and the two resistances backwards.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Combine the resistances.",
        "workingLatex": "R_{\\text{total}} = 400 + 100 = 500\\ \\text{N}",
        "explanation": "Both resistances point backwards, so they add to give the total force opposing motion.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the resultant force.",
        "workingLatex": "F = 2500 - 500",
        "explanation": "Subtract the total resistance from the driving force to get the net forward force.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the resultant.",
        "workingLatex": "F = 2000\\ \\text{N}",
        "explanation": "After overcoming the total resistance, $2000\\ \\text{N}$ is left to accelerate the system.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Apply Newton's second law.",
        "workingLatex": "F = Ma",
        "explanation": "The resultant force accelerates the whole mass.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the values.",
        "workingLatex": "2000 = 1250a",
        "explanation": "Insert the resultant force and total mass.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{2000}{1250} = 1.6\\ \\text{m s}^{-2}",
        "explanation": "Divide the net force by the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "a = 1.6\\ \\text{m s}^{-2}",
        "explanation": "The car and trailer accelerate forwards at $1.6\\ \\text{m s}^{-2}$; this value is used next to find the tow-bar tension.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.6\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q012",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["car-trailer", "resistance", "tension", "tow-bar"],
  "questionText": "For the car ($1000\\ \\text{kg}$) and trailer ($250\\ \\text{kg}$) of the previous problem — driving force $2500\\ \\text{N}$, resistances $400\\ \\text{N}$ (car) and $100\\ \\text{N}$ (trailer), acceleration $1.6\\ \\text{m s}^{-2}$ — find the tension in the tow-bar.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "\\text{trailer}",
          "shape": "trailer"
        }
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "T",
          "accent": true
        },
        {
          "body": 0,
          "dir": "left",
          "label": "100\\,\\text{N}"
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "Trailer alone: tension T forward, 100 N resistance back.",
      "alt": "Trailer alone with tension forwards and 100 N resistance backwards."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Isolate the trailer.",
        "workingLatex": "\\text{Consider the trailer alone.}",
        "explanation": "The tow-bar tension only shows up when we look at one body, so we isolate the trailer to reveal it.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the horizontal forces on the trailer.",
        "workingLatex": "T \\rightarrow, \\quad 100\\ \\text{N} \\leftarrow",
        "explanation": "The trailer is pulled forward by the tension and held back by its own $100\\ \\text{N}$ resistance.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the resultant force on the trailer.",
        "workingLatex": "\\text{Resultant} = T - 100",
        "explanation": "The forward tension and backward resistance combine into a single net forward force.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply Newton's second law to the trailer.",
        "workingLatex": "T - 100 = m_{\\text{trailer}}\\, a",
        "explanation": "The resultant forward force on the trailer equals its mass times the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values.",
        "workingLatex": "T - 100 = 250 \\times 1.6",
        "explanation": "Insert the trailer's mass and the acceleration found earlier.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the right-hand side.",
        "workingLatex": "T - 100 = 400",
        "explanation": "The trailer needs a net $400\\ \\text{N}$ to accelerate at $1.6\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the tension.",
        "workingLatex": "T = 400 + 100 = 500\\ \\text{N}",
        "explanation": "The tension must both overcome the resistance and provide the accelerating force.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check using the car.",
        "workingLatex": "2500 - 400 - T = 1000 \\times 1.6 = 1600 \\Rightarrow T = 500\\ \\text{N}",
        "explanation": "For the car, driving force minus its resistance and the tension gives its accelerating force; this matches.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 500\\ \\text{N}",
        "explanation": "The tow-bar carries a tension of $500\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 500\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q013",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["connected-string", "smooth-table", "system", "acceleration"],
  "questionText": "Particles $P$ ($5\\ \\text{kg}$) and $Q$ ($3\\ \\text{kg}$) are joined by a light inextensible string on a smooth horizontal table. A horizontal force of $24\\ \\text{N}$ is applied to $P$, with $Q$ trailing. Find the acceleration.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Combine the particles into one system.",
        "workingLatex": "M = 5 + 3 = 8\\ \\text{kg}",
        "explanation": "The string keeps them together, so they share one acceleration and we add the masses.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the external force.",
        "workingLatex": "F = 24\\ \\text{N}",
        "explanation": "Only the applied force is external; the tension is internal to the system.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law.",
        "workingLatex": "F = Ma",
        "explanation": "The external force accelerates the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "24 = 8a",
        "explanation": "Insert the force and combined mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{24}{8} = 3\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "a = 3\\ \\text{m s}^{-2}",
        "explanation": "Both particles accelerate at $3\\ \\text{m s}^{-2}$ in the direction of the pull.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 3\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q014",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["connected-string", "tension", "smooth-table", "f-equals-ma"],
  "questionText": "Particles $P$ ($5\\ \\text{kg}$) and $Q$ ($3\\ \\text{kg}$) are joined by a light inextensible string on a smooth table. A force of $24\\ \\text{N}$ on $P$ gives acceleration $3\\ \\text{m s}^{-2}$, with $Q$ trailing. Find the tension in the string.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Isolate the trailing particle.",
        "workingLatex": "\\text{Consider } Q \\text{ alone.}",
        "explanation": "The only horizontal force on $Q$ is the tension, so isolating $Q$ gives it directly.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the force on Q.",
        "workingLatex": "T \\text{ (string tension)}",
        "explanation": "The applied $24\\ \\text{N}$ acts on $P$; particle $Q$ is dragged only by the tension in the string.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Note the table is smooth.",
        "workingLatex": "\\text{No friction} \\Rightarrow \\text{resultant on } Q = T",
        "explanation": "With nothing to oppose it, the tension is the whole resultant force on $Q$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write Newton's second law for Q.",
        "workingLatex": "T = m_Q\\, a",
        "explanation": "The tension is the resultant force on $Q$, accelerating it at the shared rate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the acceleration.",
        "workingLatex": "a = 3\\ \\text{m s}^{-2}",
        "explanation": "The inextensible string means $Q$ shares the system's acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "T = 3 \\times 3",
        "explanation": "Particle $Q$ has mass $3\\ \\text{kg}$ and accelerates at $3\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate.",
        "workingLatex": "T = 9\\ \\text{N}",
        "explanation": "A tension of $9\\ \\text{N}$ accelerates the $3\\ \\text{kg}$ particle at $3\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check using P.",
        "workingLatex": "24 - T = 5 \\times 3 = 15 \\Rightarrow T = 9\\ \\text{N}",
        "explanation": "For $P$, the applied force minus the tension gives its accelerating force; the match confirms the tension.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 9\\ \\text{N}",
        "explanation": "The string is under a tension of $9\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 9\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q015",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["light-rod", "thrust", "blocks", "f-equals-ma"],
  "questionText": "Two blocks $A$ ($2\\ \\text{kg}$) and $B$ ($3\\ \\text{kg}$) are joined by a light rod and rest on a smooth horizontal surface, with $A$ behind $B$. A horizontal force of $15\\ \\text{N}$ is applied to $A$, pushing the blocks forwards. Find the acceleration and the force in the rod, stating whether it is a tension or a thrust.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "A",
          "shape": "block"
        },
        {
          "label": "B",
          "shape": "block"
        }
      ],
      "connectors": [
        "rod"
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "15\\,\\text{N}",
          "accent": true
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "Light rod joining A and B; 15 N applied to A on a smooth surface.",
      "alt": "Blocks A and B joined by a rod, a 15 N push on A."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the acceleration from the whole system.",
        "workingLatex": "M = 2 + 3 = 5\\ \\text{kg}",
        "explanation": "The rod keeps the blocks moving together, so their combined mass is what the external force accelerates.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply Newton's second law to the system.",
        "workingLatex": "15 = 5a",
        "explanation": "Only the $15\\ \\text{N}$ push is external; the rod force is internal and cancels for the whole system.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{15}{5} = 3\\ \\text{m s}^{-2}",
        "explanation": "Dividing the force by the total mass gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Isolate the front block to find the rod force.",
        "workingLatex": "\\text{Consider } B \\text{ alone.}",
        "explanation": "The rod is the only thing pushing $B$ forward, so looking at $B$ reveals the rod force.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Identify the force on B.",
        "workingLatex": "F_{\\text{rod}} \\text{ (from the rod)}",
        "explanation": "Block $B$ does not feel the applied push directly; it is moved only by the rod.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write Newton's second law for B.",
        "workingLatex": "F_{\\text{rod}} = m_B\\, a",
        "explanation": "The rod force is the resultant force on $B$, accelerating it at $3\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the values.",
        "workingLatex": "F_{\\text{rod}} = 3 \\times 3 = 9\\ \\text{N}",
        "explanation": "The $3\\ \\text{kg}$ front block needs $9\\ \\text{N}$ to accelerate at $3\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Decide tension or thrust.",
        "workingLatex": "\\text{Rod pushes } B \\text{ forwards} \\Rightarrow \\text{thrust}",
        "explanation": "Because the rod is pushing the front block forward (rather than pulling it back), the rod is in compression, so the force is a thrust.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "a = 3\\ \\text{m s}^{-2}, \\quad \\text{thrust} = 9\\ \\text{N}",
        "explanation": "A rod (unlike a string) can push as well as pull, which is why a thrust is possible here.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 3\\ \\text{m s}^{-2}$; the rod is in thrust (compression) of $9\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q016",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["car-caravan", "resistance", "driving-force", "reverse-problem"],
  "questionText": "A car of mass $900\\ \\text{kg}$ tows a caravan of mass $600\\ \\text{kg}$ on a straight horizontal road. Resistances of $300\\ \\text{N}$ (car) and $200\\ \\text{N}$ (caravan) act. The car accelerates at $0.5\\ \\text{m s}^{-2}$. Find the driving force of the engine.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "\\text{car}",
          "shape": "car"
        },
        {
          "label": "\\text{caravan}",
          "shape": "trailer"
        }
      ],
      "connectors": [
        "bar"
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "F",
          "accent": true
        },
        {
          "body": 0,
          "dir": "left",
          "label": "300\\,\\text{N}"
        },
        {
          "body": 1,
          "dir": "left",
          "label": "200\\,\\text{N}"
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "Car towing a caravan; driving force F unknown, resistances 300 N and 200 N.",
      "alt": "Car and caravan with unknown driving force and two resistances."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Model the whole system together.",
        "workingLatex": "M = 900 + 600 = 1500\\ \\text{kg}",
        "explanation": "Since the driving force is external and acts on the whole system, we work with the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Add the resistances.",
        "workingLatex": "R_{\\text{total}} = 300 + 200 = 500\\ \\text{N}",
        "explanation": "Both resistances oppose motion, so together they hold the system back with $500\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law to the system.",
        "workingLatex": "D - R_{\\text{total}} = Ma",
        "explanation": "The driving force must overcome the total resistance and still provide the accelerating force.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "D - 500 = 1500 \\times 0.5",
        "explanation": "Insert the total mass, acceleration and combined resistance.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the right-hand side.",
        "workingLatex": "D - 500 = 750",
        "explanation": "The system needs $750\\ \\text{N}$ of net force to accelerate at $0.5\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the driving force.",
        "workingLatex": "D = 750 + 500",
        "explanation": "The engine must supply the accelerating force plus enough to beat the resistances.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the driving force.",
        "workingLatex": "D = 1250\\ \\text{N}",
        "explanation": "A driving force of $1250\\ \\text{N}$ produces the required acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Sense-check the size.",
        "workingLatex": "1250 > 500",
        "explanation": "The driving force exceeds the total resistance, which it must for the system to accelerate forwards rather than slow down.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "D = 1250\\ \\text{N}",
        "explanation": "The engine's driving force is $1250\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$D = 1250\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q017",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["car-caravan", "tension", "tow-bar", "resistance"],
  "questionText": "For the car ($900\\ \\text{kg}$) and caravan ($600\\ \\text{kg}$) accelerating at $0.5\\ \\text{m s}^{-2}$ with caravan resistance $200\\ \\text{N}$, find the tension in the tow-bar.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Isolate the caravan.",
        "workingLatex": "\\text{Consider the caravan alone.}",
        "explanation": "The tow-bar tension appears only when we look at the caravan by itself.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the horizontal forces on the caravan.",
        "workingLatex": "T \\rightarrow, \\quad 200\\ \\text{N} \\leftarrow",
        "explanation": "The caravan is pulled forward by the tension and held back by its own resistance.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the resultant force on the caravan.",
        "workingLatex": "\\text{Resultant} = T - 200",
        "explanation": "Combining the forward tension and backward resistance gives the net force.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply Newton's second law to the caravan.",
        "workingLatex": "T - 200 = 600 \\times 0.5",
        "explanation": "The net forward force gives the caravan its share of the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the right-hand side.",
        "workingLatex": "T - 200 = 300",
        "explanation": "The caravan needs $300\\ \\text{N}$ of net force to accelerate at $0.5\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the tension.",
        "workingLatex": "T = 300 + 200 = 500\\ \\text{N}",
        "explanation": "The tension supplies both the accelerating force and the force to overcome the caravan's resistance.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Interpret the two contributions to the tension.",
        "workingLatex": "T = 300\\ (\\text{accelerate}) + 200\\ (\\text{resistance})",
        "explanation": "The tension splits neatly into the part that accelerates the caravan and the part that overcomes its resistance.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check consistency with the car.",
        "workingLatex": "1250 - 300 - T = 900 \\times 0.5 = 450 \\Rightarrow T = 500\\ \\text{N}",
        "explanation": "Using the driving force $1250\\ \\text{N}$ found earlier, the car equation gives the same tension, confirming the result.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 500\\ \\text{N}",
        "explanation": "The tow-bar tension is $500\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 500\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q018",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "numeric",
  "tags": ["lift", "normal-reaction", "at-rest", "weight"],
  "questionText": "A parcel of mass $8\\ \\text{kg}$ rests on the floor of a stationary lift. Find the normal reaction on the parcel. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the forces on the parcel.",
        "workingLatex": "R \\uparrow, \\quad 8g \\downarrow",
        "explanation": "The floor pushes up on the parcel with reaction $R$; gravity pulls its weight down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Use the fact that the lift is at rest.",
        "workingLatex": "a = 0",
        "explanation": "No acceleration means the parcel is in equilibrium.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the balance of forces.",
        "workingLatex": "R = mg",
        "explanation": "In equilibrium the reaction balances the weight exactly.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "R = 8 \\times 9.8",
        "explanation": "Use the parcel's mass and $g$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate.",
        "workingLatex": "R = 78.4\\ \\text{N}",
        "explanation": "The floor supports the parcel with a force equal to its weight.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "R = 78.4\\ \\text{N}",
        "explanation": "At rest the reaction and weight are equal, so $R = 78.4\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$R = 78.4\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q019",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["lift", "constant-velocity", "normal-reaction", "equilibrium"],
  "questionText": "A person of mass $65\\ \\text{kg}$ stands in a lift moving upwards at a constant speed of $3\\ \\text{m s}^{-1}$. Find the normal reaction from the floor. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the forces on the person.",
        "workingLatex": "R \\uparrow, \\quad 65g \\downarrow",
        "explanation": "The floor pushes up with reaction $R$ and gravity pulls the weight down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Interpret 'constant speed'.",
        "workingLatex": "v = \\text{constant} \\Rightarrow a = 0",
        "explanation": "Moving at a steady speed in a straight line means there is no acceleration, even though the lift is moving.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the consequence for the forces.",
        "workingLatex": "\\text{Forces are balanced.}",
        "explanation": "With zero acceleration the person is in equilibrium, so the up and down forces are equal.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the equilibrium equation.",
        "workingLatex": "R = mg",
        "explanation": "The reaction simply balances the weight, exactly as if the lift were at rest.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Note the speed itself does not enter.",
        "workingLatex": "R \\text{ independent of } v",
        "explanation": "The reaction depends on the acceleration, not the speed, so the value of $3\\ \\text{m s}^{-1}$ is a distractor here.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "R = 65 \\times 9.8",
        "explanation": "Insert the mass and $g$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate.",
        "workingLatex": "R = 637\\ \\text{N}",
        "explanation": "The reaction equals the weight because the speed is constant.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Interpret what the person feels.",
        "workingLatex": "R = mg \\Rightarrow \\text{normal weight}",
        "explanation": "Because the reaction equals the weight, the person feels exactly their usual weight during the steady rise.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "R = 637\\ \\text{N}",
        "explanation": "Constant velocity, not being at rest, is the key: any steady speed gives the same reaction as standing still.",
        "diagram": null
      }
    ],
    "finalAnswer": "$R = 637\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q020",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["lift", "normal-reaction", "find-acceleration", "direction"],
  "questionText": "A person of mass $80\\ \\text{kg}$ stands in a lift. The normal reaction from the floor is measured to be $920\\ \\text{N}$. Find the magnitude and direction of the acceleration of the lift. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Compute the weight.",
        "workingLatex": "mg = 80 \\times 9.8 = 784\\ \\text{N}",
        "explanation": "We need the weight to compare with the measured reaction.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compare the reaction with the weight.",
        "workingLatex": "R = 920\\ \\text{N} > 784\\ \\text{N}",
        "explanation": "The reaction is larger than the weight, which hints the lift accelerates upwards.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose up as positive.",
        "workingLatex": "\\text{Take up as positive.}",
        "explanation": "Since the reaction beats the weight, the net force is up, so up is the natural positive direction.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply Newton's second law.",
        "workingLatex": "R - mg = ma",
        "explanation": "The resultant upward force equals mass times acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values.",
        "workingLatex": "920 - 784 = 80a",
        "explanation": "Insert the reaction, the weight and the mass.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the left-hand side.",
        "workingLatex": "136 = 80a",
        "explanation": "The net upward force is $136\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{136}{80} = 1.7\\ \\text{m s}^{-2}",
        "explanation": "Dividing the net force by the mass gives the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Interpret the sign.",
        "workingLatex": "a = 1.7\\ \\text{m s}^{-2} \\text{ upwards}",
        "explanation": "A positive value confirms the acceleration is upward — the lift could be moving up and speeding up, or moving down and slowing down.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "a = 1.7\\ \\text{m s}^{-2} \\uparrow",
        "explanation": "The lift accelerates upward at $1.7\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.7\\ \\text{m s}^{-2}$, directed upwards."
  }
},
{
  "id": "al.y1.mech.connected-particles.q021",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["lift", "cable-tension", "accelerating-up", "f-equals-ma"],
  "questionText": "A lift of mass $500\\ \\text{kg}$ is raised by a vertical cable and accelerates upwards at $1.2\\ \\text{m s}^{-2}$. Find the tension in the cable. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "lift",
      "cable": "T",
      "weight": "500g",
      "accel": {
        "dir": "up",
        "label": "a"
      },
      "caption": "Lift (500 kg) raised by a cable, accelerating upward.",
      "alt": "Lift on a cable with tension up and weight down, accelerating upward."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the forces on the lift.",
        "workingLatex": "T \\uparrow, \\quad Mg \\downarrow",
        "explanation": "The cable pulls the lift up with tension $T$; gravity pulls its weight down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the weight for comparison.",
        "workingLatex": "Mg = 500 \\times 9.8 = 4900\\ \\text{N}",
        "explanation": "The tension should exceed this, since the lift accelerates upward.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Take up as positive.",
        "workingLatex": "\\text{Up} = +",
        "explanation": "The acceleration is upward, so taking up as positive keeps everything consistent.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply Newton's second law.",
        "workingLatex": "T - Mg = Ma",
        "explanation": "The net upward force (tension minus weight) accelerates the lift.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Make T the subject.",
        "workingLatex": "T = M(g + a)",
        "explanation": "To accelerate the lift up, the tension must exceed the weight.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "T = 500(9.8 + 1.2)",
        "explanation": "Insert the mass, $g$ and the upward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the bracket.",
        "workingLatex": "T = 500 \\times 11",
        "explanation": "Adding $g$ and $a$ gives $11\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate.",
        "workingLatex": "T = 5500\\ \\text{N}",
        "explanation": "The tension exceeds the weight of $4900\\ \\text{N}$, as expected for upward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 5500\\ \\text{N}",
        "explanation": "The cable must carry $5500\\ \\text{N}$ while lifting.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 5500\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q022",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["lift", "cable-tension", "reaction", "person-in-lift"],
  "questionText": "A lift of mass $800\\ \\text{kg}$ carries a person of mass $60\\ \\text{kg}$ and accelerates upwards at $1.5\\ \\text{m s}^{-2}$. Find (a) the tension in the supporting cable, and (b) the reaction between the person and the floor. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "lift",
      "person": true,
      "cable": "T",
      "reaction": "R",
      "weight": "mg",
      "accel": {
        "dir": "up",
        "label": "a"
      },
      "caption": "Lift (800 kg) carrying a person (60 kg), accelerating upward.",
      "alt": "Lift with a person, cable tension and floor reaction, accelerating up."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "For the cable, take the lift and person as one system.",
        "workingLatex": "M = 800 + 60 = 860\\ \\text{kg}",
        "explanation": "The cable supports everything it lifts, so for the tension we use the combined mass.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the forces on the system.",
        "workingLatex": "T \\uparrow, \\quad Mg \\downarrow",
        "explanation": "The cable tension acts up on the whole system; the total weight acts down.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law to the whole system.",
        "workingLatex": "T - Mg = Ma",
        "explanation": "The cable tension minus the total weight gives the net upward force on the whole system.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Make T the subject.",
        "workingLatex": "T = M(g + a)",
        "explanation": "The tension must beat the total weight to accelerate everything up.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values.",
        "workingLatex": "T = 860(9.8 + 1.5)",
        "explanation": "Insert the combined mass, $g$ and the upward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the bracket.",
        "workingLatex": "T = 860 \\times 11.3",
        "explanation": "Adding $g$ and $a$ gives an effective $11.3\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 9718\\ \\text{N}",
        "explanation": "The cable carries $9718\\ \\text{N}$ while lifting the loaded lift.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "For the reaction, isolate the person.",
        "workingLatex": "\\text{Consider the person alone.}",
        "explanation": "The reaction only appears when we treat the person as a separate body inside the lift.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Identify the forces on the person.",
        "workingLatex": "R \\uparrow, \\quad 60g \\downarrow",
        "explanation": "The floor pushes up with reaction $R$; the person's weight pulls down.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Apply Newton's second law to the person.",
        "workingLatex": "R - 60g = 60a",
        "explanation": "The net upward force on the person gives them the same acceleration as the lift.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Make R the subject and substitute.",
        "workingLatex": "R = 60(9.8 + 1.5) = 60 \\times 11.3",
        "explanation": "The reaction must exceed the person's weight to accelerate them upward.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the reaction.",
        "workingLatex": "R = 678\\ \\text{N}",
        "explanation": "The floor pushes up on the person with $678\\ \\text{N}$, more than their $588\\ \\text{N}$ weight.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State both answers.",
        "workingLatex": "T = 9718\\ \\text{N}, \\quad R = 678\\ \\text{N}",
        "explanation": "The person feels heavier ($678\\ \\text{N}$ instead of $588\\ \\text{N}$) exactly because the lift is accelerating upward.",
        "diagram": null
      }
    ],
    "finalAnswer": "Cable tension $T = 9718\\ \\text{N}$; reaction $R = 678\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q023",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["lift", "scales", "find-acceleration", "apparent-weight"],
  "questionText": "A person of mass $60\\ \\text{kg}$ stands on bathroom scales inside a lift. The scales read $540\\ \\text{N}$. Find the magnitude and direction of the acceleration of the lift. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the scale reading.",
        "workingLatex": "R = 540\\ \\text{N}",
        "explanation": "Bathroom scales measure the normal reaction they push up with, so the reading is the reaction $R$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the weight.",
        "workingLatex": "mg = 60 \\times 9.8 = 588\\ \\text{N}",
        "explanation": "The weight lets us compare against the reading.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compare reading and weight.",
        "workingLatex": "540 < 588",
        "explanation": "The reading is less than the weight, so the person feels lighter — the lift must be accelerating downward.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Take down as positive.",
        "workingLatex": "\\text{Down} = +",
        "explanation": "The net force is downward, so choosing down positive gives a positive acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Apply Newton's second law.",
        "workingLatex": "mg - R = ma",
        "explanation": "The weight (down) beats the reaction (up), and the difference accelerates the person down.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "588 - 540 = 60a",
        "explanation": "Insert the weight, reaction and mass.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify.",
        "workingLatex": "48 = 60a",
        "explanation": "The net downward force is $48\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{48}{60} = 0.8\\ \\text{m s}^{-2}",
        "explanation": "Dividing the net force by the mass gives the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "a = 0.8\\ \\text{m s}^{-2} \\downarrow",
        "explanation": "The lift accelerates downward at $0.8\\ \\text{m s}^{-2}$, which is why the scales under-read.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 0.8\\ \\text{m s}^{-2}$, directed downwards."
  }
},
{
  "id": "al.y1.mech.connected-particles.q024",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["lift", "scales", "find-acceleration", "accelerating-up"],
  "questionText": "A person of mass $75\\ \\text{kg}$ stands on scales in a lift. The scales read $825\\ \\text{N}$. Find the magnitude and direction of the lift's acceleration. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the reading as the reaction.",
        "workingLatex": "R = 825\\ \\text{N}",
        "explanation": "The scales measure the reaction pushing up on the person.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the weight.",
        "workingLatex": "mg = 75 \\times 9.8 = 735\\ \\text{N}",
        "explanation": "We compare the reading with the weight to decide the direction.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compare reading and weight.",
        "workingLatex": "825 > 735",
        "explanation": "The reading exceeds the weight, so the person feels heavier and the lift accelerates upward.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply Newton's second law (up positive).",
        "workingLatex": "R - mg = ma",
        "explanation": "The reaction beats the weight, and the surplus accelerates the person up.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values.",
        "workingLatex": "825 - 735 = 75a",
        "explanation": "Insert the reaction, weight and mass.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify.",
        "workingLatex": "90 = 75a",
        "explanation": "The net upward force is $90\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{90}{75} = 1.2\\ \\text{m s}^{-2}",
        "explanation": "Dividing the net force by the mass gives the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Interpret the direction.",
        "workingLatex": "a = 1.2\\ \\text{m s}^{-2} \\uparrow",
        "explanation": "A positive value with up as positive means the acceleration points upward.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "a = 1.2\\ \\text{m s}^{-2} \\uparrow",
        "explanation": "The lift accelerates upward at $1.2\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.2\\ \\text{m s}^{-2}$, directed upwards."
  }
},
{
  "id": "al.y1.mech.connected-particles.q025",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["lift", "cable-tension", "maximum", "acceleration"],
  "questionText": "A lift carrying its load has total mass $1000\\ \\text{kg}$. The supporting cable can safely hold a tension of at most $12000\\ \\text{N}$. Find the greatest upward acceleration with which the lift can be raised. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Use the maximum tension.",
        "workingLatex": "T_{\\max} = 12000\\ \\text{N}",
        "explanation": "The greatest acceleration comes from pulling as hard as the cable safely allows.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the forces on the lift.",
        "workingLatex": "T \\uparrow, \\quad Mg \\downarrow",
        "explanation": "The cable tension acts up and the total weight acts down.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law (up positive).",
        "workingLatex": "T - Mg = Ma",
        "explanation": "The net upward force is the tension minus the weight, and it produces the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "12000 - 1000 \\times 9.8 = 1000a",
        "explanation": "Use the maximum tension and the total weight.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Compute the weight and simplify.",
        "workingLatex": "12000 - 9800 = 1000a",
        "explanation": "The weight is $9800\\ \\text{N}$, leaving a surplus force.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the surplus force.",
        "workingLatex": "2200 = 1000a",
        "explanation": "Only $2200\\ \\text{N}$ is available to accelerate the lift once its weight is supported.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{2200}{1000} = 2.2\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the greatest safe upward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Interpret the limit.",
        "workingLatex": "a \\le 2.2\\ \\text{m s}^{-2}",
        "explanation": "Any faster acceleration would need a tension above the safe limit, so this is the maximum.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "a_{\\max} = 2.2\\ \\text{m s}^{-2}",
        "explanation": "The lift can be raised with at most $2.2\\ \\text{m s}^{-2}$ of acceleration.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a_{\\max} = 2.2\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q026",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["hoisting", "rope-tension", "find-acceleration", "crate"],
  "questionText": "A crate of mass $40\\ \\text{kg}$ is lifted vertically by a rope with tension $450\\ \\text{N}$. Find the acceleration of the crate. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the forces on the crate.",
        "workingLatex": "T = 450\\ \\text{N} \\uparrow, \\quad mg \\downarrow",
        "explanation": "The rope pulls up; gravity pulls down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the weight.",
        "workingLatex": "mg = 40 \\times 9.8 = 392\\ \\text{N}",
        "explanation": "Since the tension of $450\\ \\text{N}$ exceeds the weight, the crate accelerates upward.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Take up as positive.",
        "workingLatex": "\\text{Up} = +",
        "explanation": "The net force is upward, so up is the natural positive direction.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply Newton's second law.",
        "workingLatex": "T - mg = ma",
        "explanation": "The net upward force accelerates the crate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values.",
        "workingLatex": "450 - 392 = 40a",
        "explanation": "Insert the tension, weight and mass.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify.",
        "workingLatex": "58 = 40a",
        "explanation": "The surplus upward force is $58\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{58}{40} = 1.45\\ \\text{m s}^{-2}",
        "explanation": "Dividing the net force by the mass gives the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Interpret the direction.",
        "workingLatex": "a > 0 \\Rightarrow \\text{upward}",
        "explanation": "The acceleration is positive with up taken as positive, so the crate speeds up as it rises.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "a = 1.45\\ \\text{m s}^{-2} \\uparrow",
        "explanation": "The crate accelerates upward at $1.45\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.45\\ \\text{m s}^{-2}$ upwards."
  }
},
{
  "id": "al.y1.mech.connected-particles.q027",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["hoisting", "rope-tension", "suvat", "crate"],
  "questionText": "A crate of mass $40\\ \\text{kg}$ is lifted from rest by a rope with constant tension $450\\ \\text{N}$. Find (a) the acceleration, (b) the speed after $3\\ \\text{s}$, and (c) the height risen in that time. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up Newton's second law for the crate.",
        "workingLatex": "T - mg = ma",
        "explanation": "The rope tension up minus the weight down gives the net force that accelerates the crate.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the weight.",
        "workingLatex": "mg = 40 \\times 9.8 = 392\\ \\text{N}",
        "explanation": "We need the weight before solving for the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute to find the acceleration.",
        "workingLatex": "450 - 392 = 40a",
        "explanation": "Insert the tension, weight and mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify.",
        "workingLatex": "58 = 40a",
        "explanation": "The surplus force above the weight is $58\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = 1.45\\ \\text{m s}^{-2}",
        "explanation": "This constant acceleration lets us use the suvat equations for the motion.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "List the suvat values.",
        "workingLatex": "u = 0, \\ a = 1.45, \\ t = 3",
        "explanation": "The crate starts from rest, so $u = 0$, and the acceleration is constant.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Choose the equation for the speed.",
        "workingLatex": "v = u + at",
        "explanation": "With constant acceleration, velocity increases linearly with time.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute for the speed.",
        "workingLatex": "v = 0 + 1.45 \\times 3",
        "explanation": "Insert the initial speed, acceleration and time.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the speed.",
        "workingLatex": "v = 4.35\\ \\text{m s}^{-1}",
        "explanation": "After $3\\ \\text{s}$ the crate is rising at $4.35\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Choose the equation for the height.",
        "workingLatex": "s = ut + \\tfrac{1}{2}at^2",
        "explanation": "This suvat equation gives displacement from the initial speed, acceleration and time.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute for the height.",
        "workingLatex": "s = 0 + \\tfrac{1}{2}(1.45)(3^2)",
        "explanation": "With $u = 0$ only the acceleration term contributes.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the height.",
        "workingLatex": "s = \\tfrac{1}{2}(1.45)(9) = 6.525\\ \\text{m}",
        "explanation": "The crate rises $6.525\\ \\text{m}$ in the first three seconds.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "a = 1.45\\ \\text{m s}^{-2}, \\ v = 4.35\\ \\text{m s}^{-1}, \\ s = 6.525\\ \\text{m}",
        "explanation": "Finding the acceleration from forces first is what unlocks the suvat parts.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.45\\ \\text{m s}^{-2}$; $v = 4.35\\ \\text{m s}^{-1}$; $s = 6.525\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q028",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["connected-string", "smooth-table", "system", "acceleration"],
  "questionText": "Two particles of masses $6\\ \\text{kg}$ and $4\\ \\text{kg}$ are joined by a light inextensible string on a smooth horizontal table. A horizontal force of $20\\ \\text{N}$ is applied to the $6\\ \\text{kg}$ particle, dragging the $4\\ \\text{kg}$ particle behind. Find the acceleration.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Combine the two particles.",
        "workingLatex": "M = 6 + 4 = 10\\ \\text{kg}",
        "explanation": "The string ties them together, so they share an acceleration and the masses add.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the external force.",
        "workingLatex": "F = 20\\ \\text{N}",
        "explanation": "Only the applied force is external; the tension is internal to the system.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law to the system.",
        "workingLatex": "20 = 10a",
        "explanation": "The external force accelerates the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{20}{10} = 2\\ \\text{m s}^{-2}",
        "explanation": "Dividing the force by the total mass gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Note the direction of motion.",
        "workingLatex": "\\text{Along the applied force}",
        "explanation": "The table is smooth and nothing opposes the pull, so the acceleration points in the direction of the applied force.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "a = 2\\ \\text{m s}^{-2}",
        "explanation": "Both particles accelerate at $2\\ \\text{m s}^{-2}$ in the direction of the pull.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q029",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["connected-string", "tension", "smooth-table", "f-equals-ma"],
  "questionText": "For the two particles of masses $6\\ \\text{kg}$ and $4\\ \\text{kg}$ joined by a string on a smooth table, a $20\\ \\text{N}$ force on the $6\\ \\text{kg}$ particle produces an acceleration of $2\\ \\text{m s}^{-2}$, with the $4\\ \\text{kg}$ particle trailing. Find the tension in the string.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Isolate the trailing particle.",
        "workingLatex": "\\text{Consider the } 4\\ \\text{kg} \\text{ particle alone.}",
        "explanation": "The string tension is the only horizontal force on the trailing particle.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply Newton's second law.",
        "workingLatex": "T = 4a",
        "explanation": "The tension provides all the acceleration of the trailing $4\\ \\text{kg}$ particle.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the acceleration.",
        "workingLatex": "T = 4 \\times 2",
        "explanation": "The acceleration is $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate.",
        "workingLatex": "T = 8\\ \\text{N}",
        "explanation": "A tension of $8\\ \\text{N}$ accelerates the $4\\ \\text{kg}$ particle at $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check using the 6 kg particle.",
        "workingLatex": "20 - T = 6 \\times 2 = 12 \\Rightarrow T = 8\\ \\text{N}",
        "explanation": "Applied force minus tension gives the leading particle's accelerating force; the match confirms $T$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "T = 8\\ \\text{N}",
        "explanation": "The string carries a tension of $8\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 8\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q030",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["train", "multiple-couplings", "system", "tension"],
  "questionText": "A locomotive of mass $6000\\ \\text{kg}$ pulls two trucks along a straight horizontal track. Truck $A$ ($3000\\ \\text{kg}$) is coupled directly behind the locomotive and truck $B$ ($2000\\ \\text{kg}$) behind $A$. The driving force is $22000\\ \\text{N}$ and resistances are negligible. Find (a) the acceleration, (b) the tension in the coupling between the locomotive and $A$, and (c) the tension in the coupling between $A$ and $B$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "\\text{engine}",
          "shape": "engine"
        },
        {
          "label": "A",
          "shape": "block"
        },
        {
          "label": "B",
          "shape": "block"
        }
      ],
      "connectors": [
        "coupling",
        "coupling"
      ],
      "forces": [
        {
          "body": 0,
          "dir": "right",
          "label": "F",
          "accent": true
        }
      ],
      "accel": {
        "dir": "right",
        "label": "a"
      },
      "caption": "Locomotive pulling trucks A and B along a horizontal track.",
      "alt": "Locomotive pulling truck A then truck B, two coupling tensions."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Take the whole train as one system.",
        "workingLatex": "M = 6000 + 3000 + 2000 = 11000\\ \\text{kg}",
        "explanation": "All three parts move together, so the driving force accelerates the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply Newton's second law to the whole train.",
        "workingLatex": "22000 = 11000a",
        "explanation": "With no resistance, only the driving force is external.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{22000}{11000} = 2\\ \\text{m s}^{-2}",
        "explanation": "Every part of the train accelerates at $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the loco–A coupling: isolate everything behind it.",
        "workingLatex": "\\text{Consider } A + B \\text{ together.}",
        "explanation": "The tension in the first coupling is the only forward force on the trucks behind it, so isolating $A$ and $B$ together reveals it.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Compute the mass behind the first coupling.",
        "workingLatex": "m_{A+B} = 3000 + 2000 = 5000\\ \\text{kg}",
        "explanation": "The first coupling has to drag both trucks.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Apply Newton's second law to A + B.",
        "workingLatex": "T_1 = m_{A+B}\\, a = 5000 \\times 2",
        "explanation": "The tension provides the acceleration for the two trucks it pulls.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the first tension.",
        "workingLatex": "T_1 = 10000\\ \\text{N}",
        "explanation": "The locomotive–$A$ coupling carries $10000\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the A–B coupling: isolate truck B.",
        "workingLatex": "\\text{Consider truck } B \\text{ alone.}",
        "explanation": "Only the second coupling pulls truck $B$, so isolating $B$ gives that tension.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Apply Newton's second law to B.",
        "workingLatex": "T_2 = m_B\\, a = 2000 \\times 2",
        "explanation": "The tension accelerates the last truck at $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the second tension.",
        "workingLatex": "T_2 = 4000\\ \\text{N}",
        "explanation": "The $A$–$B$ coupling carries $4000\\ \\text{N}$, less than the first coupling because it pulls less mass.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Sense-check the couplings.",
        "workingLatex": "T_1 > T_2",
        "explanation": "Couplings nearer the front carry more tension because they drag more of the train — a useful check.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Verify with truck A alone.",
        "workingLatex": "T_1 - T_2 = m_A a = 3000 \\times 2 = 6000 \\Rightarrow 10000 - 4000 = 6000\\ \\checkmark",
        "explanation": "For truck $A$, the front coupling pulls it forward and the rear coupling pulls it back; the net force matches its own mass times acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "a = 2\\ \\text{m s}^{-2}, \\ T_1 = 10000\\ \\text{N}, \\ T_2 = 4000\\ \\text{N}",
        "explanation": "Working from the whole system to smaller pieces gives the acceleration first, then each tension.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2\\ \\text{m s}^{-2}$; $T_1 = 10000\\ \\text{N}$ (loco–A); $T_2 = 4000\\ \\text{N}$ (A–B)."
  }
},
{
  "id": "al.y1.mech.connected-particles.q031",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "two-hanging-masses", "acceleration"],
  "questionText": "Two particles of masses $5\\ \\text{kg}$ and $3\\ \\text{kg}$ hang from the ends of a light inextensible string passing over a smooth fixed pulley. The system is released from rest. Find the acceleration of the particles. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "atwood",
      "left": {
        "label": "5\\,\\text{kg}"
      },
      "right": {
        "label": "3\\,\\text{kg}"
      },
      "descending": "left",
      "showWeights": true,
      "caption": "5 kg and 3 kg over a smooth fixed pulley; 5 kg descends.",
      "alt": "Pulley with 5 kg and 3 kg masses hanging, 5 kg descending."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide which mass moves down.",
        "workingLatex": "5\\ \\text{kg} > 3\\ \\text{kg} \\Rightarrow 5\\ \\text{kg descends}",
        "explanation": "The heavier mass wins, so it accelerates downward while the lighter mass accelerates upward; both share the same speed and acceleration because the string is inextensible.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note the tension is the same throughout.",
        "workingLatex": "T \\text{ equal on both sides}",
        "explanation": "A light string over a smooth pulley has one common tension, since there is no mass or friction to make it differ.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law to the 5 kg mass.",
        "workingLatex": "5g - T = 5a",
        "explanation": "Taking down as positive for the descending mass, its weight pulls down and the tension pulls up.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply Newton's second law to the 3 kg mass.",
        "workingLatex": "T - 3g = 3a",
        "explanation": "Taking up as positive for the rising mass, the tension pulls up and its weight pulls down.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Add the two equations to eliminate T.",
        "workingLatex": "5g - 3g = 5a + 3a",
        "explanation": "Adding cancels the unknown tension because it appears with opposite signs, leaving only the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify both sides.",
        "workingLatex": "2g = 8a",
        "explanation": "The net driving weight is the weight difference, and the total mass being accelerated is the sum.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the value of g.",
        "workingLatex": "2 \\times 9.8 = 8a",
        "explanation": "Insert $g = 9.8$ to get a number on the left.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Simplify the left-hand side.",
        "workingLatex": "19.6 = 8a",
        "explanation": "The weight difference provides $19.6\\ \\text{N}$ of net force.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{19.6}{8} = 2.45\\ \\text{m s}^{-2}",
        "explanation": "Dividing the net force by the total mass gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answer.",
        "workingLatex": "a = 2.45\\ \\text{m s}^{-2}",
        "explanation": "The $5\\ \\text{kg}$ mass descends and the $3\\ \\text{kg}$ mass rises, both at $2.45\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2.45\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q032",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "tension", "two-hanging-masses"],
  "questionText": "Two particles of masses $5\\ \\text{kg}$ and $3\\ \\text{kg}$ hang over a smooth pulley on a light inextensible string and accelerate at $2.45\\ \\text{m s}^{-2}$. Find the tension in the string. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Choose the easier particle to isolate.",
        "workingLatex": "\\text{Use the } 3\\ \\text{kg mass.}",
        "explanation": "Either particle gives the tension, but the rising one has a simple equation with only tension and weight.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the forces on the 3 kg mass.",
        "workingLatex": "T \\uparrow, \\quad 3g \\downarrow",
        "explanation": "The tension pulls it up and its weight pulls it down.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write Newton's second law (up positive).",
        "workingLatex": "T - 3g = 3a",
        "explanation": "The rising mass accelerates upward, so the tension must exceed its weight.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Make T the subject.",
        "workingLatex": "T = 3(g + a)",
        "explanation": "Rearranging collects the weight and accelerating force into one bracket.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values.",
        "workingLatex": "T = 3(9.8 + 2.45)",
        "explanation": "Insert $g$ and the acceleration found earlier.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the bracket.",
        "workingLatex": "T = 3 \\times 12.25",
        "explanation": "Adding $g$ and $a$ gives $12.25$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 36.75\\ \\text{N}",
        "explanation": "The tension is $36.75\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with the 5 kg mass.",
        "workingLatex": "5g - T = 49 - 36.75 = 12.25 = 5 \\times 2.45\\ \\checkmark",
        "explanation": "The descending mass equation gives the same acceleration, confirming the tension.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 36.75\\ \\text{N}",
        "explanation": "Notice the tension lies between the two weights ($29.4\\ \\text{N}$ and $49\\ \\text{N}$), as it must.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 36.75\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q033",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "force-on-pulley", "tension"],
  "questionText": "Particles of masses $8\\ \\text{kg}$ and $2\\ \\text{kg}$ hang over a smooth fixed pulley on a light inextensible string and are released from rest. Find (a) the acceleration, (b) the tension, and (c) the force exerted on the pulley by the string. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "atwood",
      "left": {
        "label": "8\\,\\text{kg}"
      },
      "right": {
        "label": "2\\,\\text{kg}"
      },
      "descending": "left",
      "showWeights": true,
      "caption": "8 kg and 2 kg over a smooth fixed pulley.",
      "alt": "Pulley with 8 kg and 2 kg masses, both string segments vertical."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the heavier (descending) mass.",
        "workingLatex": "8\\ \\text{kg descends}, \\ 2\\ \\text{kg rises}",
        "explanation": "The greater weight drives the motion downward on its side.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the 8 kg mass.",
        "workingLatex": "8g - T = 8a",
        "explanation": "Down is positive for the descending mass; weight down, tension up.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the 2 kg mass.",
        "workingLatex": "T - 2g = 2a",
        "explanation": "Up is positive for the rising mass; tension up, weight down.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "(8 - 2)g = (8 + 2)a",
        "explanation": "The weight difference drives the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify.",
        "workingLatex": "6g = 10a",
        "explanation": "Net driving force is $6g$; total mass is $10\\ \\text{kg}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{6 \\times 9.8}{10} = 5.88\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Find the tension from the 2 kg mass.",
        "workingLatex": "T = 2(g + a) = 2(9.8 + 5.88)",
        "explanation": "The rising mass gives the simplest tension equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 2 \\times 15.68 = 31.36\\ \\text{N}",
        "explanation": "The tension is $31.36\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check the tension with the 8 kg mass.",
        "workingLatex": "8g - T = 78.4 - 31.36 = 47.04 = 8 \\times 5.88\\ \\checkmark",
        "explanation": "The descending mass equation gives the same acceleration, confirming $T$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Consider the forces on the pulley.",
        "workingLatex": "\\text{Both segments pull down with } T",
        "explanation": "Each side of the string hangs vertically and pulls down on the pulley with tension $T$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Add the two pulls.",
        "workingLatex": "F = T + T = 2T",
        "explanation": "Because both pulls are vertically downward, they simply add.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the force on the pulley.",
        "workingLatex": "F = 2 \\times 31.36 = 62.72\\ \\text{N}",
        "explanation": "The string pulls the pulley down with $62.72\\ \\text{N}$, so its support must push up with the same force.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Note this is less than the total weight.",
        "workingLatex": "62.72 < (8+2)g = 98",
        "explanation": "The force on the pulley is below the combined weight because the masses are accelerating rather than hanging in equilibrium.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the answers.",
        "workingLatex": "a = 5.88\\ \\text{m s}^{-2}, \\ T = 31.36\\ \\text{N}, \\ F = 62.72\\ \\text{N}",
        "explanation": "Acceleration and tension come from the two particles; the pulley force is twice the tension.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 5.88\\ \\text{m s}^{-2}$; $T = 31.36\\ \\text{N}$; force on pulley $= 62.72\\ \\text{N}$ downward."
  }
},
{
  "id": "al.y1.mech.connected-particles.q034",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "acceleration", "two-hanging-masses"],
  "questionText": "Particles of masses $9\\ \\text{kg}$ and $6\\ \\text{kg}$ hang over a smooth pulley on a light inextensible string and are released from rest. Find the acceleration. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the descending mass.",
        "workingLatex": "9\\ \\text{kg descends}, \\ 6\\ \\text{kg rises}",
        "explanation": "The heavier $9\\ \\text{kg}$ mass moves down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the 9 kg mass.",
        "workingLatex": "9g - T = 9a",
        "explanation": "Down positive: weight down, tension up.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the 6 kg mass.",
        "workingLatex": "T - 6g = 6a",
        "explanation": "Up positive: tension up, weight down.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "(9 - 6)g = (9 + 6)a",
        "explanation": "Adding removes the tension and leaves the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify.",
        "workingLatex": "3g = 15a",
        "explanation": "The net force is the weight difference $3g$ on a total mass of $15\\ \\text{kg}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute g.",
        "workingLatex": "3 \\times 9.8 = 15a",
        "explanation": "Insert $g = 9.8$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the left side.",
        "workingLatex": "29.4 = 15a",
        "explanation": "The net driving force is $29.4\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{29.4}{15} = 1.96\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "a = 1.96\\ \\text{m s}^{-2}",
        "explanation": "Both masses accelerate at $1.96\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.96\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q035",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "tension", "two-hanging-masses"],
  "questionText": "Particles of masses $9\\ \\text{kg}$ and $6\\ \\text{kg}$ hang over a smooth pulley and accelerate at $1.96\\ \\text{m s}^{-2}$. Find the tension in the string. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Isolate the rising 6 kg mass.",
        "workingLatex": "\\text{Use the } 6\\ \\text{kg mass.}",
        "explanation": "The rising particle has the simplest tension equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify its forces.",
        "workingLatex": "T \\uparrow, \\quad 6g \\downarrow",
        "explanation": "Tension up, weight down.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law (up positive).",
        "workingLatex": "T - 6g = 6a",
        "explanation": "The tension exceeds the weight because the mass accelerates upward.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Make T the subject.",
        "workingLatex": "T = 6(g + a)",
        "explanation": "Group the weight and accelerating force.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values.",
        "workingLatex": "T = 6(9.8 + 1.96)",
        "explanation": "Insert $g$ and the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the bracket.",
        "workingLatex": "T = 6 \\times 11.76",
        "explanation": "Adding gives $11.76$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate.",
        "workingLatex": "T = 70.56\\ \\text{N}",
        "explanation": "The tension is $70.56\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with the 9 kg mass.",
        "workingLatex": "9g - T = 88.2 - 70.56 = 17.64 = 9 \\times 1.96\\ \\checkmark",
        "explanation": "The descending-mass equation gives the same acceleration, confirming the tension.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 70.56\\ \\text{N}",
        "explanation": "The tension lies between the two weights $58.8\\ \\text{N}$ and $88.2\\ \\text{N}$, as expected.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 70.56\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q036",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "suvat", "acceleration"],
  "questionText": "Particles of masses $6\\ \\text{kg}$ and $4\\ \\text{kg}$ hang over a smooth pulley on a light inextensible string, released from rest. Find (a) the acceleration, (b) the speed of the particles after $2\\ \\text{s}$, and (c) the distance moved in that time. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the descending mass.",
        "workingLatex": "6\\ \\text{kg descends}, \\ 4\\ \\text{kg rises}",
        "explanation": "The heavier mass falls and drives the system.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the 6 kg mass.",
        "workingLatex": "6g - T = 6a",
        "explanation": "Down positive for the descending mass.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the 4 kg mass.",
        "workingLatex": "T - 4g = 4a",
        "explanation": "Up positive for the rising mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "(6 - 4)g = (6 + 4)a",
        "explanation": "The weight difference drives the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "2g = 10a \\Rightarrow a = \\dfrac{2 \\times 9.8}{10} = 1.96\\ \\text{m s}^{-2}",
        "explanation": "This constant acceleration lets us use the suvat equations next.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "List the suvat values.",
        "workingLatex": "u = 0, \\ a = 1.96, \\ t = 2",
        "explanation": "The system starts from rest, so $u = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Find the speed after 2 s.",
        "workingLatex": "v = u + at",
        "explanation": "Constant acceleration means velocity grows linearly.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute for the speed.",
        "workingLatex": "v = 0 + 1.96 \\times 2",
        "explanation": "Insert the values.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the speed.",
        "workingLatex": "v = 3.92\\ \\text{m s}^{-1}",
        "explanation": "After $2\\ \\text{s}$ each particle moves at $3.92\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Choose the equation for the distance.",
        "workingLatex": "s = ut + \\tfrac{1}{2}at^2",
        "explanation": "This suvat equation gives displacement from the initial speed, acceleration and time.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute the values.",
        "workingLatex": "s = 0 + \\tfrac{1}{2}(1.96)(2^2)",
        "explanation": "With $u = 0$ only the acceleration term contributes.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the distance.",
        "workingLatex": "s = \\tfrac{1}{2}(1.96)(4) = 3.92\\ \\text{m}",
        "explanation": "Each particle moves $3.92\\ \\text{m}$ in the two seconds.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "a = 1.96\\ \\text{m s}^{-2}, \\ v = 3.92\\ \\text{m s}^{-1}, \\ s = 3.92\\ \\text{m}",
        "explanation": "The force analysis gives the acceleration, which then feeds the kinematics.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.96\\ \\text{m s}^{-2}$; $v = 3.92\\ \\text{m s}^{-1}$; $s = 3.92\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q037",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "find-mass", "reverse-problem"],
  "questionText": "A particle of mass $5\\ \\text{kg}$ hangs over a smooth pulley, connected by a light inextensible string to a particle of unknown mass $m$. When released, the $5\\ \\text{kg}$ mass descends with acceleration $1.4\\ \\text{m s}^{-2}$. Find $m$. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the standard result for the acceleration.",
        "workingLatex": "(5 - m)g = (5 + m)a",
        "explanation": "For two hanging masses, the weight difference drives the total mass; since the $5\\ \\text{kg}$ mass descends, it is the heavier one.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Substitute the known values.",
        "workingLatex": "(5 - m)(9.8) = (5 + m)(1.4)",
        "explanation": "Insert $g$ and the given acceleration, leaving $m$ as the only unknown.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Expand both brackets.",
        "workingLatex": "49 - 9.8m = 7 + 1.4m",
        "explanation": "Multiplying out prepares the equation for collecting the $m$ terms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Gather the m terms on one side.",
        "workingLatex": "49 - 7 = 1.4m + 9.8m",
        "explanation": "Move the constants to the left and the $m$ terms to the right.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify both sides.",
        "workingLatex": "42 = 11.2m",
        "explanation": "Combine like terms.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for m.",
        "workingLatex": "m = \\dfrac{42}{11.2} = 3.75\\ \\text{kg}",
        "explanation": "Dividing gives the unknown mass.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check the mass is lighter than 5 kg.",
        "workingLatex": "3.75 < 5\\ \\checkmark",
        "explanation": "The unknown mass must be lighter for the $5\\ \\text{kg}$ mass to descend, which it is.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify the acceleration.",
        "workingLatex": "a = \\dfrac{(5-3.75)9.8}{8.75} = \\dfrac{12.25}{8.75} = 1.4\\ \\checkmark",
        "explanation": "Substituting back reproduces the given acceleration, confirming the answer.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "m = 3.75\\ \\text{kg}",
        "explanation": "The unknown particle has mass $3.75\\ \\text{kg}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$m = 3.75\\ \\text{kg}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q038",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "acceleration", "tension"],
  "questionText": "Particles of masses $10\\ \\text{kg}$ and $6\\ \\text{kg}$ hang over a smooth pulley on a light inextensible string, released from rest. Find the acceleration and the tension. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the descending mass.",
        "workingLatex": "10\\ \\text{kg descends}, \\ 6\\ \\text{kg rises}",
        "explanation": "The heavier mass falls.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the 10 kg mass.",
        "workingLatex": "10g - T = 10a",
        "explanation": "Down positive for the descending mass.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the 6 kg mass.",
        "workingLatex": "T - 6g = 6a",
        "explanation": "Up positive for the rising mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "(10 - 6)g = (10 + 6)a",
        "explanation": "The weight difference drives the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "4g = 16a \\Rightarrow a = \\dfrac{4 \\times 9.8}{16} = 2.45\\ \\text{m s}^{-2}",
        "explanation": "Dividing the net force by the total mass gives the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Use the 6 kg mass for the tension.",
        "workingLatex": "T = 6(g + a)",
        "explanation": "The rising mass gives the simplest tension equation.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the values.",
        "workingLatex": "T = 6(9.8 + 2.45) = 6 \\times 12.25",
        "explanation": "Insert $g$ and the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 73.5\\ \\text{N}",
        "explanation": "The tension is $73.5\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check with the 10 kg mass.",
        "workingLatex": "10g - T = 98 - 73.5 = 24.5 = 10 \\times 2.45\\ \\checkmark",
        "explanation": "The descending-mass equation agrees, confirming both results.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answers.",
        "workingLatex": "a = 2.45\\ \\text{m s}^{-2}, \\ T = 73.5\\ \\text{N}",
        "explanation": "Adding the equations gave the acceleration; one particle gave the tension.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2.45\\ \\text{m s}^{-2}$; $T = 73.5\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q039",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "force-on-support", "tension"],
  "questionText": "Particles of masses $3\\ \\text{kg}$ and $2\\ \\text{kg}$ hang over a smooth pulley fixed to a beam, on a light inextensible string, released from rest. Find (a) the acceleration, (b) the tension, and (c) the force the pulley exerts on the beam. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "atwood",
      "left": {
        "label": "3\\,\\text{kg}"
      },
      "right": {
        "label": "2\\,\\text{kg}"
      },
      "descending": "left",
      "mount": "beam",
      "showWeights": true,
      "caption": "3 kg and 2 kg over a pulley fixed to a beam.",
      "alt": "Pulley on a beam with 3 kg and 2 kg masses hanging."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the descending mass.",
        "workingLatex": "3\\ \\text{kg descends}, \\ 2\\ \\text{kg rises}",
        "explanation": "The $3\\ \\text{kg}$ mass is heavier, so it falls.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the 3 kg mass.",
        "workingLatex": "3g - T = 3a",
        "explanation": "Down positive for the descending mass.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the 2 kg mass.",
        "workingLatex": "T - 2g = 2a",
        "explanation": "Up positive for the rising mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "(3 - 2)g = (3 + 2)a",
        "explanation": "The weight difference drives the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "g = 5a \\Rightarrow a = \\dfrac{9.8}{5} = 1.96\\ \\text{m s}^{-2}",
        "explanation": "Dividing the net force by the total mass gives the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the tension from the 2 kg mass.",
        "workingLatex": "T = 2(g + a) = 2(9.8 + 1.96)",
        "explanation": "The rising mass gives the simplest equation.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 2 \\times 11.76 = 23.52\\ \\text{N}",
        "explanation": "The tension is $23.52\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with the 3 kg mass.",
        "workingLatex": "3g - T = 29.4 - 23.52 = 5.88 = 3 \\times 1.96\\ \\checkmark",
        "explanation": "The descending-mass equation agrees, confirming the tension.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Consider the pull on the pulley.",
        "workingLatex": "\\text{Each side pulls down with } T",
        "explanation": "Both string segments hang vertically, so each pulls the pulley straight down with tension $T$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Add the two pulls.",
        "workingLatex": "F = 2T = 2 \\times 23.52",
        "explanation": "The two downward pulls combine directly.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate the force on the pulley.",
        "workingLatex": "F = 47.04\\ \\text{N}",
        "explanation": "The string pulls the pulley down with $47.04\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Relate to the force on the beam.",
        "workingLatex": "\\text{Beam holds the pulley up with } 47.04\\ \\text{N}",
        "explanation": "By Newton's third law, the pulley pulls down on the beam with the same $47.04\\ \\text{N}$ that the beam supports it with.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "a = 1.96\\ \\text{m s}^{-2}, \\ T = 23.52\\ \\text{N}, \\ F = 47.04\\ \\text{N}",
        "explanation": "The force on the beam is twice the tension because both string segments are vertical.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.96\\ \\text{m s}^{-2}$; $T = 23.52\\ \\text{N}$; force on beam $= 47.04\\ \\text{N}$ downward."
  }
},
{
  "id": "al.y1.mech.connected-particles.q040",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["pulley", "equal-masses", "equilibrium", "tension"],
  "questionText": "Two particles, each of mass $4\\ \\text{kg}$, hang over a smooth pulley on a light inextensible string. Explain what happens when they are released, and find the tension in the string. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Compare the two weights.",
        "workingLatex": "4g = 4g",
        "explanation": "The masses are equal, so the two sides pull down with exactly the same weight.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Deduce the acceleration.",
        "workingLatex": "a = 0",
        "explanation": "With no weight difference there is nothing to make one side win, so the system stays in balance and does not accelerate.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set up the equation for one particle.",
        "workingLatex": "T - 4g = 4a",
        "explanation": "Take either particle; tension up and weight down.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use the zero acceleration.",
        "workingLatex": "T - 4g = 0",
        "explanation": "Because $a = 0$, the tension simply balances the weight.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the tension.",
        "workingLatex": "T = 4g = 4 \\times 9.8",
        "explanation": "The tension equals the weight of one particle.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate.",
        "workingLatex": "T = 39.2\\ \\text{N}",
        "explanation": "Each particle simply hangs in equilibrium supported by the tension.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the answer.",
        "workingLatex": "a = 0, \\quad T = 39.2\\ \\text{N}",
        "explanation": "Equal masses stay at rest (or move at constant speed), and the tension equals one weight.",
        "diagram": null
      }
    ],
    "finalAnswer": "The system stays in equilibrium ($a = 0$); tension $T = 39.2\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q041",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "smooth-table", "acceleration"],
  "questionText": "A particle $A$ of mass $3\\ \\text{kg}$ lies on a smooth horizontal table. A light inextensible string attached to $A$ runs over a smooth pulley at the edge of the table and carries a particle $B$ of mass $2\\ \\text{kg}$ hanging freely. The system is released from rest. Find the acceleration. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "tablePulley",
      "table": {
        "label": "A\\;3\\,\\text{kg}"
      },
      "hanging": {
        "label": "B\\;2\\,\\text{kg}"
      },
      "showTension": true,
      "caption": "A (3 kg) on a smooth table, B (2 kg) hanging over an edge pulley.",
      "alt": "Table mass A connected over an edge pulley to hanging mass B."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the motion.",
        "workingLatex": "B \\text{ falls}, \\ A \\text{ slides, same } a",
        "explanation": "As $B$ falls it pulls $A$ across the table; the inextensible string means both have the same acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the forces on A.",
        "workingLatex": "T \\text{ horizontal}; \\ \\text{weight balanced by } R",
        "explanation": "On the smooth table the only horizontal force on $A$ is the tension; the vertical weight and normal reaction cancel.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law to A.",
        "workingLatex": "T = 3a",
        "explanation": "The tension is the whole resultant force on $A$ along the table.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Identify the forces on B.",
        "workingLatex": "2g \\downarrow, \\quad T \\uparrow",
        "explanation": "The hanging mass is pulled down by its weight and up by the tension.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Apply Newton's second law to B.",
        "workingLatex": "2g - T = 2a",
        "explanation": "Down is positive for the falling mass, so weight minus tension gives its accelerating force.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Add the equations to eliminate T.",
        "workingLatex": "2g = 3a + 2a",
        "explanation": "Adding removes the tension because it appears as $+T$ and $-T$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify.",
        "workingLatex": "2g = 5a",
        "explanation": "The hanging weight drives the whole $5\\ \\text{kg}$ of the system.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute g.",
        "workingLatex": "19.6 = 5a",
        "explanation": "Insert $g = 9.8$ so $2g = 19.6\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{19.6}{5} = 3.92\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answer.",
        "workingLatex": "a = 3.92\\ \\text{m s}^{-2}",
        "explanation": "$A$ slides and $B$ falls, both at $3.92\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 3.92\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q042",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "tension", "smooth-table"],
  "questionText": "For particle $A$ ($3\\ \\text{kg}$) on a smooth table connected over a pulley to hanging particle $B$ ($2\\ \\text{kg}$), accelerating at $3.92\\ \\text{m s}^{-2}$, find the tension in the string. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Choose the table mass to isolate.",
        "workingLatex": "\\text{Use } A.",
        "explanation": "On $A$ the tension is the only horizontal force, giving the simplest equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the horizontal force on A.",
        "workingLatex": "T \\text{ (tension)}",
        "explanation": "The smooth table means friction is absent, so nothing opposes the tension.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law to A.",
        "workingLatex": "T = 3a",
        "explanation": "The tension gives $A$ its acceleration along the table.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the acceleration.",
        "workingLatex": "a = 3.92\\ \\text{m s}^{-2}",
        "explanation": "The whole system accelerates at this rate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the value.",
        "workingLatex": "T = 3 \\times 3.92",
        "explanation": "Insert the mass of $A$ and the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 11.76\\ \\text{N}",
        "explanation": "The string tension is $11.76\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check with the hanging mass.",
        "workingLatex": "2g - T = 19.6 - 11.76 = 7.84 = 2 \\times 3.92\\ \\checkmark",
        "explanation": "The hanging-mass equation gives the same acceleration, confirming the tension.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Interpret the size of the tension.",
        "workingLatex": "T < 2g = 19.6\\ \\text{N}",
        "explanation": "The tension is less than $B$'s weight, which is exactly why $B$ is able to accelerate downward.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 11.76\\ \\text{N}",
        "explanation": "The string carries a tension of $11.76\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 11.76\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q043",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "suvat", "tension"],
  "questionText": "A particle $A$ ($6\\ \\text{kg}$) on a smooth table is connected by a light inextensible string over a smooth edge pulley to a hanging particle $B$ ($4\\ \\text{kg}$). The system is released from rest. Find (a) the acceleration, (b) the tension, and (c) the speed of $B$ after it has fallen $1\\ \\text{m}$. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "tablePulley",
      "table": {
        "label": "A\\;6\\,\\text{kg}"
      },
      "hanging": {
        "label": "B\\;4\\,\\text{kg}"
      },
      "showTension": true,
      "caption": "A (6 kg) on a smooth table joined over an edge pulley to B (4 kg).",
      "alt": "6 kg table mass connected over a pulley to a 4 kg hanging mass."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the motion.",
        "workingLatex": "B \\text{ falls}, \\ A \\text{ slides, same } a",
        "explanation": "The inextensible string gives both particles the same acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for A (table).",
        "workingLatex": "T = 6a",
        "explanation": "Tension is the only horizontal force on the smooth table.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for B (hanging).",
        "workingLatex": "4g - T = 4a",
        "explanation": "Weight down minus tension up gives $B$'s accelerating force.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "4g = 10a",
        "explanation": "The hanging weight drives the total $10\\ \\text{kg}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{4 \\times 9.8}{10} = 3.92\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the tension from A.",
        "workingLatex": "T = 6 \\times 3.92 = 23.52\\ \\text{N}",
        "explanation": "Substituting the acceleration into $A$'s equation gives the tension.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check with B.",
        "workingLatex": "4g - T = 39.2 - 23.52 = 15.68 = 4 \\times 3.92\\ \\checkmark",
        "explanation": "The hanging-mass equation agrees, confirming the values.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Set up the kinematics for the fall.",
        "workingLatex": "u = 0, \\ a = 3.92, \\ s = 1",
        "explanation": "The acceleration is constant, so we can use suvat for the $1\\ \\text{m}$ fall from rest.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Choose the equation without time.",
        "workingLatex": "v^2 = u^2 + 2as",
        "explanation": "We know $u$, $a$ and $s$ and want $v$, so this equation is ideal.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the values.",
        "workingLatex": "v^2 = 0 + 2(3.92)(1)",
        "explanation": "Insert the initial speed, acceleration and distance.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Simplify.",
        "workingLatex": "v^2 = 7.84",
        "explanation": "The square of the speed after the fall.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Take the square root.",
        "workingLatex": "v = \\sqrt{7.84} = 2.8\\ \\text{m s}^{-1}",
        "explanation": "The positive root gives the speed of $B$ after falling $1\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "a = 3.92\\ \\text{m s}^{-2}, \\ T = 23.52\\ \\text{N}, \\ v = 2.8\\ \\text{m s}^{-1}",
        "explanation": "The forces give the acceleration and tension; suvat then gives the speed.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 3.92\\ \\text{m s}^{-2}$; $T = 23.52\\ \\text{N}$; $v = 2.8\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q044",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "smooth-table", "acceleration"],
  "questionText": "A particle of mass $4\\ \\text{kg}$ on a smooth table is connected over a smooth edge pulley to a hanging particle of mass $1\\ \\text{kg}$. Find the acceleration when released from rest. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the motion.",
        "workingLatex": "\\text{Both share acceleration } a",
        "explanation": "The string is inextensible, so the sliding mass and the falling mass have the same acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the forces on the table mass.",
        "workingLatex": "T \\text{ horizontal only}",
        "explanation": "On the smooth table only the tension acts horizontally.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the table mass.",
        "workingLatex": "T = 4a",
        "explanation": "The tension accelerates the $4\\ \\text{kg}$ mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Newton's second law for the hanging mass.",
        "workingLatex": "1 \\cdot g - T = 1 \\cdot a",
        "explanation": "The $1\\ \\text{kg}$ mass has weight $g$ down and tension up.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Add the equations.",
        "workingLatex": "g = 5a",
        "explanation": "Adding removes the tension and combines the masses.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute g.",
        "workingLatex": "9.8 = 5a",
        "explanation": "Insert $g = 9.8$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{9.8}{5} = 1.96\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Sense-check the size.",
        "workingLatex": "1.96 < g",
        "explanation": "The acceleration is well below $g$ because the light hanging mass must drag the much heavier table mass.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "a = 1.96\\ \\text{m s}^{-2}",
        "explanation": "The system accelerates at $1.96\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.96\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q045",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "tension", "smooth-table"],
  "questionText": "A $4\\ \\text{kg}$ mass on a smooth table is connected over a pulley to a hanging $1\\ \\text{kg}$ mass, accelerating at $1.96\\ \\text{m s}^{-2}$. Find the tension in the string. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Isolate the table mass.",
        "workingLatex": "\\text{Use the } 4\\ \\text{kg mass.}",
        "explanation": "Its only horizontal force is the tension, giving the simplest equation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note the table is smooth.",
        "workingLatex": "\\text{No friction}",
        "explanation": "So the tension is the whole horizontal resultant.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law.",
        "workingLatex": "T = 4a",
        "explanation": "The tension accelerates the table mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the acceleration.",
        "workingLatex": "a = 1.96\\ \\text{m s}^{-2}",
        "explanation": "Found from the whole system previously.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute.",
        "workingLatex": "T = 4 \\times 1.96",
        "explanation": "Insert the mass and acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate.",
        "workingLatex": "T = 7.84\\ \\text{N}",
        "explanation": "The tension is $7.84\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check with the hanging mass.",
        "workingLatex": "g - T = 9.8 - 7.84 = 1.96 = 1 \\times 1.96\\ \\checkmark",
        "explanation": "The hanging-mass equation gives the same acceleration, confirming the tension.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Interpret.",
        "workingLatex": "T < g = 9.8\\ \\text{N}",
        "explanation": "The tension is less than the hanging weight, allowing that mass to fall.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "T = 7.84\\ \\text{N}",
        "explanation": "The string carries a tension of $7.84\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$T = 7.84\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q046",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "suvat", "tension"],
  "questionText": "A $5\\ \\text{kg}$ particle on a smooth table is connected over a smooth pulley to a hanging $5\\ \\text{kg}$ particle, released from rest. Find (a) the acceleration, (b) the tension, (c) the distance moved in $1.5\\ \\text{s}$, and (d) the speed then. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the motion.",
        "workingLatex": "\\text{Both share acceleration } a",
        "explanation": "The inextensible string ties the two accelerations together.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the table mass.",
        "workingLatex": "T = 5a",
        "explanation": "Only the tension acts horizontally on the smooth table.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the hanging mass.",
        "workingLatex": "5g - T = 5a",
        "explanation": "Weight down minus tension up gives the falling mass its acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "5g = 10a",
        "explanation": "The hanging weight drives the total $10\\ \\text{kg}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{5 \\times 9.8}{10} = 4.9\\ \\text{m s}^{-2}",
        "explanation": "Notice this is exactly half of $g$, since the driving weight acts on twice its own mass.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the tension.",
        "workingLatex": "T = 5 \\times 4.9 = 24.5\\ \\text{N}",
        "explanation": "Substituting into the table-mass equation gives the tension.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check with the hanging mass.",
        "workingLatex": "5g - T = 49 - 24.5 = 24.5 = 5 \\times 4.9\\ \\checkmark",
        "explanation": "The equations agree, confirming the values.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Set up the kinematics.",
        "workingLatex": "u = 0, \\ a = 4.9, \\ t = 1.5",
        "explanation": "The acceleration is constant, so suvat applies.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Find the distance.",
        "workingLatex": "s = ut + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(4.9)(1.5^2)",
        "explanation": "With $u = 0$ only the acceleration term contributes.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the distance.",
        "workingLatex": "s = \\tfrac{1}{2}(4.9)(2.25) = 5.5125\\ \\text{m}",
        "explanation": "The particles move about $5.51\\ \\text{m}$ in the $1.5\\ \\text{s}$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Find the speed.",
        "workingLatex": "v = u + at = 0 + 4.9 \\times 1.5",
        "explanation": "Velocity grows linearly under constant acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the speed.",
        "workingLatex": "v = 7.35\\ \\text{m s}^{-1}",
        "explanation": "After $1.5\\ \\text{s}$ each particle moves at $7.35\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "a = 4.9, \\ T = 24.5\\ \\text{N}, \\ s = 5.5125\\ \\text{m}, \\ v = 7.35\\ \\text{m s}^{-1}",
        "explanation": "Forces give acceleration and tension; kinematics give distance and speed.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 4.9\\ \\text{m s}^{-2}$; $T = 24.5\\ \\text{N}$; $s = 5.5125\\ \\text{m}$; $v = 7.35\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q047",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "find-mass", "reverse-problem"],
  "questionText": "A particle of mass $4\\ \\text{kg}$ on a smooth table is connected over a smooth pulley to a hanging particle of mass $m$. The system accelerates at $2.8\\ \\text{m s}^{-2}$. Find $m$. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write Newton's second law for each particle.",
        "workingLatex": "T = 4a, \\qquad mg - T = ma",
        "explanation": "The table mass is driven by the tension; the hanging mass by its weight minus the tension.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Add to get the system equation.",
        "workingLatex": "mg = (4 + m)a",
        "explanation": "Adding eliminates the tension and gives the standard result for this arrangement.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the known values.",
        "workingLatex": "9.8m = (4 + m)(2.8)",
        "explanation": "Insert $g$ and the given acceleration, leaving $m$ as the only unknown.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Expand the right-hand side.",
        "workingLatex": "9.8m = 11.2 + 2.8m",
        "explanation": "Multiplying out prepares the equation to collect $m$ terms.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Collect the m terms.",
        "workingLatex": "9.8m - 2.8m = 11.2",
        "explanation": "Bring the $m$ terms together on one side.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify.",
        "workingLatex": "7m = 11.2",
        "explanation": "Combine like terms.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for m.",
        "workingLatex": "m = \\dfrac{11.2}{7} = 1.6\\ \\text{kg}",
        "explanation": "Dividing gives the hanging mass.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify the acceleration.",
        "workingLatex": "a = \\dfrac{1.6 \\times 9.8}{5.6} = \\dfrac{15.68}{5.6} = 2.8\\ \\checkmark",
        "explanation": "Substituting back reproduces the given acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "m = 1.6\\ \\text{kg}",
        "explanation": "The hanging particle has mass $1.6\\ \\text{kg}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$m = 1.6\\ \\text{kg}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q048",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "find-mass", "reverse-problem"],
  "questionText": "A particle of mass $M$ on a smooth table is connected over a smooth pulley to a hanging particle of mass $3\\ \\text{kg}$. The system accelerates at $4.2\\ \\text{m s}^{-2}$. Find $M$. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write Newton's second law for each particle.",
        "workingLatex": "T = Ma, \\qquad 3g - T = 3a",
        "explanation": "The table mass is driven by the tension; the hanging mass by its weight minus the tension.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Add to get the system equation.",
        "workingLatex": "3g = (M + 3)a",
        "explanation": "Adding eliminates the tension.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the known values.",
        "workingLatex": "3 \\times 9.8 = (M + 3)(4.2)",
        "explanation": "Insert $g$ and the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the left-hand side.",
        "workingLatex": "29.4 = 4.2(M + 3)",
        "explanation": "The hanging weight is $29.4\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Expand the right-hand side.",
        "workingLatex": "29.4 = 4.2M + 12.6",
        "explanation": "Multiplying out isolates the $M$ term.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Collect terms.",
        "workingLatex": "29.4 - 12.6 = 4.2M",
        "explanation": "Move the constant to the left.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify.",
        "workingLatex": "16.8 = 4.2M",
        "explanation": "Combine the numbers on the left.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Solve for M.",
        "workingLatex": "M = \\dfrac{16.8}{4.2} = 4\\ \\text{kg}",
        "explanation": "Dividing gives the table mass.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Verify the acceleration.",
        "workingLatex": "a = \\dfrac{3 \\times 9.8}{7} = 4.2\\ \\checkmark",
        "explanation": "Substituting back reproduces the given acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answer.",
        "workingLatex": "M = 4\\ \\text{kg}",
        "explanation": "The table particle has mass $4\\ \\text{kg}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$M = 4\\ \\text{kg}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q049",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "force-on-pulley", "resultant"],
  "questionText": "A particle $A$ ($4\\ \\text{kg}$) on a smooth table is connected over a smooth edge pulley to a hanging particle $B$ ($3\\ \\text{kg}$). Find (a) the acceleration, (b) the tension, and (c) the magnitude of the force exerted on the pulley by the string. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "tablePulley",
      "table": {
        "label": "A\\;4\\,\\text{kg}"
      },
      "hanging": {
        "label": "B\\;3\\,\\text{kg}"
      },
      "showTension": true,
      "caption": "A (4 kg) on a smooth table, B (3 kg) hanging over an edge pulley.",
      "alt": "Edge pulley with one horizontal and one vertical string segment."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the motion.",
        "workingLatex": "\\text{Both share acceleration } a",
        "explanation": "The inextensible string gives $A$ and $B$ the same acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for A.",
        "workingLatex": "T = 4a",
        "explanation": "Only the tension acts horizontally on the smooth table.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for B.",
        "workingLatex": "3g - T = 3a",
        "explanation": "Weight down minus tension up drives the hanging mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "3g = 7a",
        "explanation": "The hanging weight drives the total $7\\ \\text{kg}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{3 \\times 9.8}{7} = 4.2\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the tension.",
        "workingLatex": "T = 4 \\times 4.2 = 16.8\\ \\text{N}",
        "explanation": "Substituting into $A$'s equation gives the tension.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Describe the two pulls on the pulley.",
        "workingLatex": "T \\text{ horizontal}, \\ T \\text{ vertical}",
        "explanation": "One string segment leaves the pulley horizontally (toward $A$) and the other vertically (down toward $B$), each with tension $T$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Note the pulls are perpendicular.",
        "workingLatex": "90^{\\circ} \\text{ between them}",
        "explanation": "Because one pull is horizontal and the other vertical, they are at right angles, so we combine them with Pythagoras.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Write the resultant magnitude.",
        "workingLatex": "F = \\sqrt{T^2 + T^2} = T\\sqrt{2}",
        "explanation": "Two equal perpendicular forces combine to $\\sqrt{2}$ times one of them.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the tension.",
        "workingLatex": "F = 16.8\\sqrt{2}",
        "explanation": "Insert $T = 16.8\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate.",
        "workingLatex": "F \\approx 23.76\\ \\text{N}",
        "explanation": "The string pulls the pulley with about $23.76\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "State the direction.",
        "workingLatex": "45^{\\circ} \\text{ below the horizontal}",
        "explanation": "The resultant of two equal perpendicular pulls bisects them, pointing at $45^{\\circ}$ into the corner where the string bends.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "a = 4.2\\ \\text{m s}^{-2}, \\ T = 16.8\\ \\text{N}, \\ F \\approx 23.76\\ \\text{N}",
        "explanation": "The two string segments here are perpendicular, so the pulley force is $T\\sqrt{2}$, not $2T$ as in a vertical pulley.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 4.2\\ \\text{m s}^{-2}$; $T = 16.8\\ \\text{N}$; force on pulley $= 16.8\\sqrt{2} \\approx 23.76\\ \\text{N}$ at $45^{\\circ}$ below the horizontal."
  }
},
{
  "id": "al.y1.mech.connected-particles.q050",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "acceleration", "tension"],
  "questionText": "A $7\\ \\text{kg}$ particle on a smooth table is connected over a smooth pulley to a hanging $3\\ \\text{kg}$ particle, released from rest. Find the acceleration and the tension. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the motion.",
        "workingLatex": "\\text{Both share acceleration } a",
        "explanation": "The inextensible string keeps the accelerations equal.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify forces on the table mass.",
        "workingLatex": "T \\text{ horizontal only}",
        "explanation": "The smooth table means only the tension acts horizontally.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the table mass.",
        "workingLatex": "T = 7a",
        "explanation": "Tension accelerates the $7\\ \\text{kg}$ mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Newton's second law for the hanging mass.",
        "workingLatex": "3g - T = 3a",
        "explanation": "Weight down minus tension up gives the falling mass its acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Add to eliminate T.",
        "workingLatex": "3g = 10a",
        "explanation": "The hanging weight drives the total $10\\ \\text{kg}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute g and simplify.",
        "workingLatex": "29.4 = 10a",
        "explanation": "The hanging weight is $29.4\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{29.4}{10} = 2.94\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the tension from the table mass.",
        "workingLatex": "T = 7 \\times 2.94 = 20.58\\ \\text{N}",
        "explanation": "Substituting the acceleration gives the tension.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check with the hanging mass.",
        "workingLatex": "3g - T = 29.4 - 20.58 = 8.82 = 3 \\times 2.94\\ \\checkmark",
        "explanation": "The hanging-mass equation agrees, confirming both values.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answers.",
        "workingLatex": "a = 2.94\\ \\text{m s}^{-2}, \\ T = 20.58\\ \\text{N}",
        "explanation": "Adding the equations gave the acceleration; the table mass gave the tension.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2.94\\ \\text{m s}^{-2}$; $T = 20.58\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q051",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["newtons-third-law", "action-reaction", "concept"],
  "questionText": "A person pushes horizontally on a wall with a force of $40\\ \\text{N}$. Using Newton's third law, state the force the wall exerts on the person.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the action force.",
        "workingLatex": "\\text{Person on wall} = 40\\ \\text{N (into the wall)}",
        "explanation": "The force we are given is the person pushing on the wall.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall Newton's third law.",
        "workingLatex": "\\text{Action and reaction are equal and opposite.}",
        "explanation": "The wall must push back on the person with a force of the same size in the opposite direction.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Identify the two bodies.",
        "workingLatex": "\\text{person} \\leftrightarrow \\text{wall}",
        "explanation": "The pair acts between the person and the wall, so the reaction is the wall pushing on the person.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Match the magnitude.",
        "workingLatex": "40\\ \\text{N}",
        "explanation": "Equal in size to the push, so also $40\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Reverse the direction.",
        "workingLatex": "\\text{away from the wall}",
        "explanation": "The person pushes into the wall, so the wall pushes back out on the person.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the reaction.",
        "workingLatex": "40\\ \\text{N away from the wall, on the person}",
        "explanation": "This is why pushing a wall tends to push you backwards.",
        "diagram": null
      }
    ],
    "finalAnswer": "$40\\ \\text{N}$ directed away from the wall, acting on the person."
  }
},
{
  "id": "al.y1.mech.connected-particles.q052",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["connected-string", "smooth-table", "system", "acceleration"],
  "questionText": "Two particles of masses $2\\ \\text{kg}$ and $3\\ \\text{kg}$ are joined by a light inextensible string on a smooth horizontal table. A horizontal force of $10\\ \\text{N}$ is applied. Find the acceleration.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Combine the masses.",
        "workingLatex": "M = 2 + 3 = 5\\ \\text{kg}",
        "explanation": "The string ties the particles together, so they share one acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the external force.",
        "workingLatex": "F = 10\\ \\text{N}",
        "explanation": "Only the applied force is external; the tension is internal.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law.",
        "workingLatex": "F = Ma",
        "explanation": "The external force accelerates the combined mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute.",
        "workingLatex": "10 = 5a",
        "explanation": "Insert the force and total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve.",
        "workingLatex": "a = \\dfrac{10}{5} = 2\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "a = 2\\ \\text{m s}^{-2}",
        "explanation": "Both particles accelerate at $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q053",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["pulley", "rough-table", "friction", "suvat"],
  "questionText": "A particle $A$ of mass $4\\ \\text{kg}$ lies on a rough horizontal table with coefficient of friction $\\mu = 0.25$. It is connected by a light inextensible string over a smooth edge pulley to a hanging particle $B$ of mass $3\\ \\text{kg}$. The system is released from rest. Find (a) the acceleration, (b) the tension, and (c) the distance moved in the first $1\\ \\text{s}$. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "tablePulley",
      "table": {
        "label": "A\\;4\\,\\text{kg}",
        "rough": true
      },
      "hanging": {
        "label": "B\\;3\\,\\text{kg}"
      },
      "showTension": true,
      "caption": "Rough table (friction coefficient 0.25): A (4 kg), hanging B (3 kg).",
      "alt": "Rough-table mass A connected over a pulley to hanging mass B."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the motion.",
        "workingLatex": "B \\text{ falls}, \\ A \\text{ slides, same } a",
        "explanation": "The inextensible string gives both the same acceleration; friction on $A$ opposes its sliding.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the normal reaction on A.",
        "workingLatex": "R = 4g = 39.2\\ \\text{N}",
        "explanation": "On the horizontal table $A$'s weight is balanced by the normal reaction, so $R = 4g$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the friction force.",
        "workingLatex": "F_r = \\mu R = 0.25 \\times 39.2 = 9.8\\ \\text{N}",
        "explanation": "The moving particle experiences friction $\\mu R$ opposing its motion.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Newton's second law for A.",
        "workingLatex": "T - F_r = 4a",
        "explanation": "The tension pulls $A$ toward the pulley; friction pulls back.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Newton's second law for B.",
        "workingLatex": "3g - T = 3a",
        "explanation": "Weight down minus tension up drives the hanging mass.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Add the equations to eliminate T.",
        "workingLatex": "3g - F_r = 7a",
        "explanation": "Adding removes the tension, leaving the net driving force (hanging weight minus friction) on the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the values.",
        "workingLatex": "29.4 - 9.8 = 7a",
        "explanation": "Insert the hanging weight and the friction.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Solve for the acceleration.",
        "workingLatex": "19.6 = 7a \\Rightarrow a = 2.8\\ \\text{m s}^{-2}",
        "explanation": "Dividing the net force by the total mass gives the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Find the tension from A.",
        "workingLatex": "T = 4a + F_r = 4(2.8) + 9.8",
        "explanation": "Rearranging $A$'s equation gives the tension.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 11.2 + 9.8 = 21\\ \\text{N}",
        "explanation": "The tension is $21\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Check with B.",
        "workingLatex": "3g - T = 29.4 - 21 = 8.4 = 3 \\times 2.8\\ \\checkmark",
        "explanation": "The hanging-mass equation agrees, confirming the values.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Set up the kinematics.",
        "workingLatex": "u = 0, \\ a = 2.8, \\ t = 1",
        "explanation": "The acceleration is constant while both particles move.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Find the distance.",
        "workingLatex": "s = ut + \\tfrac{1}{2}at^2 = \\tfrac{1}{2}(2.8)(1^2)",
        "explanation": "With $u = 0$ only the acceleration term contributes.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Evaluate and state the answers.",
        "workingLatex": "s = 1.4\\ \\text{m}; \\ a = 2.8\\ \\text{m s}^{-2}, \\ T = 21\\ \\text{N}",
        "explanation": "Friction lowers the acceleration compared with a smooth table, but the method is the same.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2.8\\ \\text{m s}^{-2}$; $T = 21\\ \\text{N}$; $s = 1.4\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q054",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["car-trailer", "braking", "thrust", "tow-bar"],
  "questionText": "A car of mass $1000\\ \\text{kg}$ tows a trailer of mass $500\\ \\text{kg}$. While moving, the driver brakes, producing a braking force of $3000\\ \\text{N}$ on the car. Ignoring other resistances, find the deceleration and the force in the tow-bar, stating whether it is a tension or a thrust.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "train",
      "bodies": [
        {
          "label": "\\text{car}",
          "shape": "car"
        },
        {
          "label": "\\text{trailer}",
          "shape": "trailer"
        }
      ],
      "connectors": [
        "bar"
      ],
      "forces": [
        {
          "body": 0,
          "dir": "left",
          "label": "3000\\,\\text{N}",
          "accent": true
        }
      ],
      "accel": {
        "dir": "left",
        "label": "a"
      },
      "caption": "Car braking (3000 N) while towing a trailer.",
      "alt": "Car braking while towing a trailer, tow-bar force unknown."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Take the whole system for the deceleration.",
        "workingLatex": "M = 1000 + 500 = 1500\\ \\text{kg}",
        "explanation": "The braking force acts on the whole connected system, so use the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the external force.",
        "workingLatex": "3000\\ \\text{N backwards}",
        "explanation": "With no other resistances, the only external horizontal force is the braking force opposing the motion.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law.",
        "workingLatex": "3000 = 1500a",
        "explanation": "The braking force produces a deceleration; taking the backward direction as positive keeps $a$ positive.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the deceleration.",
        "workingLatex": "a = \\dfrac{3000}{1500} = 2\\ \\text{m s}^{-2}",
        "explanation": "The system slows at $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Isolate the trailer.",
        "workingLatex": "\\text{Consider the trailer alone.}",
        "explanation": "The brakes act on the car, not the trailer, so we look at the trailer to find what slows it.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Identify the force that decelerates the trailer.",
        "workingLatex": "\\text{Only the tow-bar force } P",
        "explanation": "Nothing else acts horizontally on the trailer, so the tow-bar must provide the force that slows it down.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Apply Newton's second law to the trailer.",
        "workingLatex": "P = 500 \\times 2",
        "explanation": "The trailer decelerates at $2\\ \\text{m s}^{-2}$, so the required force is mass times deceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the force.",
        "workingLatex": "P = 1000\\ \\text{N}",
        "explanation": "A force of $1000\\ \\text{N}$ backwards is needed to slow the trailer.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Decide tension or thrust.",
        "workingLatex": "\\text{Bar pushes trailer backwards} \\Rightarrow \\text{thrust}",
        "explanation": "The bar must push the trailer backwards to slow it, so the bar is compressed — a thrust, not a tension.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Contrast with the accelerating case.",
        "workingLatex": "\\text{accelerating} \\to \\text{tension}, \\ \\text{braking} \\to \\text{thrust}",
        "explanation": "When accelerating, the bar pulls the trailer (tension); when braking, it pushes back (thrust).",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the answers.",
        "workingLatex": "a = 2\\ \\text{m s}^{-2}, \\ \\text{thrust} = 1000\\ \\text{N}",
        "explanation": "The system decelerates at $2\\ \\text{m s}^{-2}$ with a $1000\\ \\text{N}$ thrust in the tow-bar.",
        "diagram": null
      }
    ],
    "finalAnswer": "Deceleration $2\\ \\text{m s}^{-2}$; tow-bar in thrust of $1000\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q055",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["pulley", "rough-table", "friction", "equilibrium-check"],
  "questionText": "A particle of mass $5\\ \\text{kg}$ on a rough table experiences a constant frictional resistance of $7\\ \\text{N}$ when moving. It is connected over a smooth pulley to a hanging particle of mass $2\\ \\text{kg}$. Find (a) the acceleration and (b) the tension. (c) If the hanging particle were replaced by one of mass $0.6\\ \\text{kg}$, would the system move? Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the motion and forces.",
        "workingLatex": "\\text{Friction } 7\\ \\text{N opposes the } 5\\ \\text{kg mass}",
        "explanation": "The hanging mass drives the system; friction resists the table mass.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Check the system moves.",
        "workingLatex": "2g = 19.6 > 7 \\Rightarrow \\text{moves}",
        "explanation": "The hanging weight exceeds the friction, so motion begins.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the table mass.",
        "workingLatex": "T - 7 = 5a",
        "explanation": "Tension pulls it toward the pulley; friction pulls back.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Newton's second law for the hanging mass.",
        "workingLatex": "2g - T = 2a",
        "explanation": "Weight down minus tension up drives the falling mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Add to eliminate T.",
        "workingLatex": "2g - 7 = 7a",
        "explanation": "The net driving force is the hanging weight minus friction, on the total $7\\ \\text{kg}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "19.6 - 7 = 7a",
        "explanation": "Insert the hanging weight and friction.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the acceleration.",
        "workingLatex": "12.6 = 7a \\Rightarrow a = 1.8\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the tension.",
        "workingLatex": "T = 5a + 7 = 5(1.8) + 7",
        "explanation": "Rearranging the table-mass equation gives the tension.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 9 + 7 = 16\\ \\text{N}",
        "explanation": "The tension is $16\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Check with the hanging mass.",
        "workingLatex": "2g - T = 19.6 - 16 = 3.6 = 2 \\times 1.8\\ \\checkmark",
        "explanation": "The equations agree, confirming the results.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Consider the lighter hanging mass.",
        "workingLatex": "0.6g = 0.6 \\times 9.8 = 5.88\\ \\text{N}",
        "explanation": "A $0.6\\ \\text{kg}$ mass has weight $5.88\\ \\text{N}$, the force trying to start the motion.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Compare with the friction.",
        "workingLatex": "5.88 < 7",
        "explanation": "The driving weight is less than the maximum friction the table can supply.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Conclude for part (c).",
        "workingLatex": "\\text{No motion — stays at rest}",
        "explanation": "Since the pull is smaller than the friction available, static friction holds everything in place.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the answers.",
        "workingLatex": "a = 1.8\\ \\text{m s}^{-2}, \\ T = 16\\ \\text{N}, \\ \\text{(c) no}",
        "explanation": "With the $2\\ \\text{kg}$ mass the system accelerates; with the $0.6\\ \\text{kg}$ mass it does not move.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.8\\ \\text{m s}^{-2}$; $T = 16\\ \\text{N}$; (c) no — the $0.6\\ \\text{kg}$ weight ($5.88\\ \\text{N}$) is less than the friction ($7\\ \\text{N}$)."
  }
},
{
  "id": "al.y1.mech.connected-particles.q056",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["lift", "constant-velocity", "normal-reaction", "equilibrium"],
  "questionText": "A person of mass $90\\ \\text{kg}$ stands in a lift descending at a constant speed of $2\\ \\text{m s}^{-1}$. Find the normal reaction from the floor. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the constant speed.",
        "workingLatex": "v = \\text{constant} \\Rightarrow a = 0",
        "explanation": "A steady speed means no acceleration, whether going up or down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the equilibrium condition.",
        "workingLatex": "R = mg",
        "explanation": "With zero acceleration the reaction balances the weight.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "R = 90 \\times 9.8",
        "explanation": "Insert the mass and $g$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate.",
        "workingLatex": "R = 882\\ \\text{N}",
        "explanation": "The reaction equals the weight.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Note the direction of travel does not matter.",
        "workingLatex": "\\text{descending, but } a = 0",
        "explanation": "Only acceleration changes the reaction; moving down at constant speed feels the same as standing still.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "R = 882\\ \\text{N}",
        "explanation": "The floor supports the person with $882\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$R = 882\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q057",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["car-trailer", "braking", "resistance", "thrust"],
  "questionText": "A car of mass $800\\ \\text{kg}$ tows a trailer of mass $200\\ \\text{kg}$. The driver brakes with a force of $2500\\ \\text{N}$ on the car. Resistances of $200\\ \\text{N}$ (car) and $300\\ \\text{N}$ (trailer) also act. Find the deceleration and the force in the tow-bar, stating whether it is a tension or a thrust.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Take the whole system.",
        "workingLatex": "M = 800 + 200 = 1000\\ \\text{kg}",
        "explanation": "For the deceleration, use the total mass with all external forces.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Add all the backward forces.",
        "workingLatex": "2500 + 200 + 300 = 3000\\ \\text{N}",
        "explanation": "The braking force and both resistances all oppose the motion, so they add.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law.",
        "workingLatex": "3000 = 1000a",
        "explanation": "Taking backwards as positive, the total resistive force gives the deceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the deceleration.",
        "workingLatex": "a = \\dfrac{3000}{1000} = 3\\ \\text{m s}^{-2}",
        "explanation": "The system slows at $3\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Isolate the trailer.",
        "workingLatex": "\\text{Forces: resistance } 300\\ \\text{N back, tow-bar } P",
        "explanation": "The trailer has no brakes, so its own resistance and the tow-bar force are all that act on it.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Set up the trailer equation (forward positive).",
        "workingLatex": "P - 300 = 200 \\times (-3)",
        "explanation": "The trailer decelerates, so its acceleration is $-3$ taking forward as positive; the resistance acts backwards.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify.",
        "workingLatex": "P - 300 = -600",
        "explanation": "The trailer needs a net backward force of $600\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Solve for the tow-bar force.",
        "workingLatex": "P = -600 + 300 = -300\\ \\text{N}",
        "explanation": "The negative sign means the tow-bar force on the trailer points backwards.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Interpret the sign.",
        "workingLatex": "300\\ \\text{N backwards} \\Rightarrow \\text{thrust}",
        "explanation": "The bar pushes the trailer backwards, so it is in compression — a thrust of $300\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Sense-check with the trailer alone.",
        "workingLatex": "\\tfrac{300}{200} = 1.5 < 3",
        "explanation": "The trailer's own resistance would only slow it at $1.5\\ \\text{m s}^{-2}$, so the bar must add extra braking — consistent with a thrust.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Interpret the thrust physically.",
        "workingLatex": "\\text{Trailer presses forward on the car}",
        "explanation": "When braking, the trailer tends to keep moving and pushes forward on the car through the bar, so the bar pushes back on the trailer — that is the thrust.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Verify with the car.",
        "workingLatex": "-2500 - 200 + 300 = 800 \\times (-3) = -2400\\ \\checkmark",
        "explanation": "For the car, braking and its resistance act backward while the trailer pushes it forward with $300\\ \\text{N}$; the net gives the car's deceleration, confirming everything.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "a = 3\\ \\text{m s}^{-2}, \\ \\text{thrust} = 300\\ \\text{N}",
        "explanation": "The system decelerates at $3\\ \\text{m s}^{-2}$ with a $300\\ \\text{N}$ thrust in the tow-bar.",
        "diagram": null
      }
    ],
    "finalAnswer": "Deceleration $3\\ \\text{m s}^{-2}$; tow-bar in thrust of $300\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q058",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "acceleration", "tension"],
  "questionText": "Particles of masses $12\\ \\text{kg}$ and $8\\ \\text{kg}$ hang over a smooth pulley on a light inextensible string, released from rest. Find the acceleration and the tension. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the descending mass.",
        "workingLatex": "12\\ \\text{kg descends}, \\ 8\\ \\text{kg rises}",
        "explanation": "The heavier mass falls.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the 12 kg mass.",
        "workingLatex": "12g - T = 12a",
        "explanation": "Down positive for the descending mass.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the 8 kg mass.",
        "workingLatex": "T - 8g = 8a",
        "explanation": "Up positive for the rising mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "(12 - 8)g = (12 + 8)a",
        "explanation": "The weight difference drives the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "4g = 20a \\Rightarrow a = \\dfrac{4 \\times 9.8}{20} = 1.96\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the tension from the 8 kg mass.",
        "workingLatex": "T = 8(g + a) = 8(9.8 + 1.96)",
        "explanation": "The rising mass gives the simplest tension equation.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 8 \\times 11.76 = 94.08\\ \\text{N}",
        "explanation": "The tension is $94.08\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with the 12 kg mass.",
        "workingLatex": "12g - T = 117.6 - 94.08 = 23.52 = 12 \\times 1.96\\ \\checkmark",
        "explanation": "The descending-mass equation agrees, confirming the values.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answers.",
        "workingLatex": "a = 1.96\\ \\text{m s}^{-2}, \\ T = 94.08\\ \\text{N}",
        "explanation": "The tension lies between the two weights, as expected.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 1.96\\ \\text{m s}^{-2}$; $T = 94.08\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q059",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["pulley", "rough-table", "find-friction", "coefficient"],
  "questionText": "A particle of mass $8\\ \\text{kg}$ on a rough horizontal table is connected over a smooth pulley to a hanging particle of mass $6\\ \\text{kg}$. When released the system accelerates at $2.8\\ \\text{m s}^{-2}$. Find (a) the frictional force on the table mass and (b) the coefficient of friction. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Newton's second law for the hanging mass.",
        "workingLatex": "6g - T = 6a",
        "explanation": "Weight down minus tension up drives the hanging mass.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the table mass.",
        "workingLatex": "T - F_r = 8a",
        "explanation": "Tension pulls it forward; the unknown friction $F_r$ pulls back.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add the equations to eliminate T.",
        "workingLatex": "6g - F_r = 14a",
        "explanation": "Adding removes the tension, leaving the friction as the only unknown.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "58.8 - F_r = 14 \\times 2.8",
        "explanation": "Insert the hanging weight, total mass and acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the right-hand side.",
        "workingLatex": "58.8 - F_r = 39.2",
        "explanation": "The net driving force needed is $39.2\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the friction.",
        "workingLatex": "F_r = 58.8 - 39.2 = 19.6\\ \\text{N}",
        "explanation": "The friction opposing the motion is $19.6\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Find the normal reaction on the table mass.",
        "workingLatex": "R = 8g = 78.4\\ \\text{N}",
        "explanation": "On the horizontal table the weight is balanced by the normal reaction.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Use the friction model.",
        "workingLatex": "F_r = \\mu R \\Rightarrow \\mu = \\dfrac{F_r}{R}",
        "explanation": "For a moving particle the friction equals $\\mu R$, so $\\mu$ is the ratio of friction to normal reaction.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the values.",
        "workingLatex": "\\mu = \\dfrac{19.6}{78.4}",
        "explanation": "Insert the friction and normal reaction.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the coefficient.",
        "workingLatex": "\\mu = 0.25",
        "explanation": "The coefficient of friction is a reasonable value between $0$ and $1$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Find the tension as a check.",
        "workingLatex": "T = 6g - 6a = 58.8 - 16.8 = 42\\ \\text{N}",
        "explanation": "The hanging-mass equation gives the tension, which we can use to double-check the friction.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Verify with the table-mass equation.",
        "workingLatex": "T - F_r = 42 - 19.6 = 22.4 = 8 \\times 2.8\\ \\checkmark",
        "explanation": "The table-mass equation is satisfied, confirming both the friction and the coefficient.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "F_r = 19.6\\ \\text{N}, \\ \\mu = 0.25",
        "explanation": "The friction is $19.6\\ \\text{N}$ and the coefficient of friction is $0.25$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$F_r = 19.6\\ \\text{N}$; $\\mu = 0.25$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q060",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["blocks-in-contact", "system", "acceleration", "smooth"],
  "questionText": "Two blocks, each of mass $5\\ \\text{kg}$, are in contact on a smooth horizontal surface. A horizontal force of $30\\ \\text{N}$ pushes them along. Find the acceleration.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Treat the blocks as one system.",
        "workingLatex": "M = 5 + 5 = 10\\ \\text{kg}",
        "explanation": "In contact, the blocks move together, so add the masses.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the external force.",
        "workingLatex": "F = 30\\ \\text{N}",
        "explanation": "The internal contact force cancels for the whole system.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law.",
        "workingLatex": "F = Ma",
        "explanation": "The applied force accelerates the combined mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute.",
        "workingLatex": "30 = 10a",
        "explanation": "Insert the force and total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve.",
        "workingLatex": "a = \\dfrac{30}{10} = 3\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "a = 3\\ \\text{m s}^{-2}",
        "explanation": "Both blocks accelerate at $3\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 3\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q061",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "string-goes-slack", "two-phase"],
  "questionText": "Particles of masses $5\\ \\text{kg}$ and $3\\ \\text{kg}$ hang over a smooth pulley on a light inextensible string, released from rest. The $5\\ \\text{kg}$ mass descends $1\\ \\text{m}$ and hits the floor, where it stays. Find (a) the acceleration during the first phase, (b) the speed when the $5\\ \\text{kg}$ mass lands, and (c) the further height the $3\\ \\text{kg}$ mass rises after the string goes slack. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "mechanics",
      "scene": "atwood",
      "left": {
        "label": "5\\,\\text{kg}"
      },
      "right": {
        "label": "3\\,\\text{kg}"
      },
      "descending": "left",
      "slackSide": "left",
      "caption": "The 5 kg has landed; its side of the string now hangs slack.",
      "alt": "Atwood machine where the heavier mass lands and the string goes slack."
    },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the descending mass.",
        "workingLatex": "5\\ \\text{kg descends}, \\ 3\\ \\text{kg rises}",
        "explanation": "The heavier mass falls and drives the system during the first phase.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the 5 kg mass.",
        "workingLatex": "5g - T = 5a",
        "explanation": "Down positive for the descending mass.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the 3 kg mass.",
        "workingLatex": "T - 3g = 3a",
        "explanation": "Up positive for the rising mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "2g = 8a \\Rightarrow a = 2.45\\ \\text{m s}^{-2}",
        "explanation": "The weight difference drives the total mass, giving the first-phase acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the kinematics for the descent.",
        "workingLatex": "u = 0, \\ a = 2.45, \\ s = 1",
        "explanation": "Both particles start from rest and share this acceleration until the $5\\ \\text{kg}$ mass lands.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Use the equation without time.",
        "workingLatex": "v^2 = u^2 + 2as",
        "explanation": "We want the speed after moving $1\\ \\text{m}$, so this equation suits.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute.",
        "workingLatex": "v^2 = 0 + 2(2.45)(1) = 4.9",
        "explanation": "Insert the acceleration and distance.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the landing speed.",
        "workingLatex": "v = \\sqrt{4.9} \\approx 2.21\\ \\text{m s}^{-1}",
        "explanation": "Both masses are moving at this speed at the instant the $5\\ \\text{kg}$ mass lands.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note what happens at landing.",
        "workingLatex": "\\text{String goes slack}",
        "explanation": "Once the $5\\ \\text{kg}$ mass is on the floor the string can no longer pull, so the $3\\ \\text{kg}$ mass is now free.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Describe the second phase.",
        "workingLatex": "3\\ \\text{kg moves up at } 2.21, \\ \\text{only gravity acts}",
        "explanation": "The $3\\ \\text{kg}$ mass rises as a free particle, decelerating under gravity alone.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Set the new deceleration.",
        "workingLatex": "a = -g = -9.8\\ \\text{m s}^{-2}",
        "explanation": "With the string slack, gravity is the only force, so the deceleration is $g$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Use v²=u²-2gh at the highest point.",
        "workingLatex": "0 = v^2 - 2gh \\Rightarrow h = \\dfrac{v^2}{2g}",
        "explanation": "At the top the mass is momentarily at rest, so the final velocity is zero.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Substitute the values.",
        "workingLatex": "h = \\dfrac{4.9}{2 \\times 9.8}",
        "explanation": "Use $v^2 = 4.9$ from the first phase, avoiding the surd.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Evaluate the extra height.",
        "workingLatex": "h = \\dfrac{4.9}{19.6} = 0.25\\ \\text{m}",
        "explanation": "The $3\\ \\text{kg}$ mass rises a further $0.25\\ \\text{m}$ after the string goes slack.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "State the answers.",
        "workingLatex": "a = 2.45\\ \\text{m s}^{-2}, \\ v \\approx 2.21\\ \\text{m s}^{-1}, \\ h = 0.25\\ \\text{m}",
        "explanation": "The two-phase idea is key: connected motion until the mass lands, then free motion under gravity.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2.45\\ \\text{m s}^{-2}$; $v = \\sqrt{4.9} \\approx 2.21\\ \\text{m s}^{-1}$; further rise $= 0.25\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q062",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["pulley", "table-and-hanging", "string-goes-slack", "two-phase"],
  "questionText": "A particle $A$ ($6\\ \\text{kg}$) on a smooth table is connected over a smooth edge pulley to a hanging particle $B$ ($4\\ \\text{kg}$), released from rest. $B$ falls $1\\ \\text{m}$ to the floor and stops. Find (a) the common speed when $B$ lands, and (b) the distance $A$ travels in the next $0.5\\ \\text{s}$. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the first-phase acceleration.",
        "workingLatex": "T = 6a, \\quad 4g - T = 4a",
        "explanation": "Set up Newton's second law for the table mass and the hanging mass while both move together.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Add to eliminate T.",
        "workingLatex": "4g = 10a",
        "explanation": "The hanging weight drives the total $10\\ \\text{kg}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{4 \\times 9.8}{10} = 3.92\\ \\text{m s}^{-2}",
        "explanation": "This holds while $B$ is still falling.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set up the kinematics for the fall.",
        "workingLatex": "u = 0, \\ a = 3.92, \\ s = 1",
        "explanation": "Both start from rest; the fall is $1\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the speed when B lands.",
        "workingLatex": "v^2 = 2(3.92)(1) = 7.84",
        "explanation": "Use $v^2 = u^2 + 2as$ with $u = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Take the square root.",
        "workingLatex": "v = \\sqrt{7.84} = 2.8\\ \\text{m s}^{-1}",
        "explanation": "Both particles are moving at $2.8\\ \\text{m s}^{-1}$ when $B$ lands.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Describe the second phase.",
        "workingLatex": "\\text{String slack; } A \\text{ on smooth table}",
        "explanation": "Once $B$ lands the string goes slack, and $A$ slides on a smooth table with no horizontal force.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Apply Newton's first law to A.",
        "workingLatex": "F = 0 \\Rightarrow \\text{constant velocity}",
        "explanation": "With no horizontal force, $A$ continues at the constant speed it already had.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State A's speed in the second phase.",
        "workingLatex": "v = 2.8\\ \\text{m s}^{-1}",
        "explanation": "$A$ keeps the speed it reached at the moment the string went slack.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Set up the second-phase distance.",
        "workingLatex": "s = vt \\ (a = 0)",
        "explanation": "At constant velocity distance is simply speed times time.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute.",
        "workingLatex": "s = 2.8 \\times 0.5",
        "explanation": "Insert the speed and the $0.5\\ \\text{s}$ interval.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the distance.",
        "workingLatex": "s = 1.4\\ \\text{m}",
        "explanation": "$A$ slides a further $1.4\\ \\text{m}$ in the next half-second.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "v = 2.8\\ \\text{m s}^{-1}, \\ s = 1.4\\ \\text{m}",
        "explanation": "The key is that $A$ stops accelerating but does not stop moving when the string goes slack.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 2.8\\ \\text{m s}^{-1}$; $A$ travels a further $1.4\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q063",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["connected-string", "string-breaks", "maximum-force", "smooth-table"],
  "questionText": "Particles $P$ ($6\\ \\text{kg}$) and $Q$ ($4\\ \\text{kg}$) are joined by a light inextensible string on a smooth table, with $Q$ trailing. A horizontal force $F$ is applied to $P$. The string will break if its tension exceeds $20\\ \\text{N}$. Find the greatest value of $F$ that can be applied without breaking the string. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Note which particle the tension accelerates.",
        "workingLatex": "\\text{Tension pulls the trailing } Q",
        "explanation": "The string tension is the only force on $Q$, so it determines when the string breaks.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the system acceleration in terms of F.",
        "workingLatex": "a = \\dfrac{F}{6 + 4} = \\dfrac{F}{10}",
        "explanation": "The applied force accelerates the whole $10\\ \\text{kg}$ system.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the tension from Q.",
        "workingLatex": "T = 4a",
        "explanation": "Isolating the trailing particle, the tension gives it its acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Express T in terms of F.",
        "workingLatex": "T = 4 \\times \\dfrac{F}{10} = 0.4F",
        "explanation": "Substituting the acceleration links the tension directly to the applied force.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the breaking condition.",
        "workingLatex": "T \\le 20",
        "explanation": "The string survives as long as the tension does not exceed $20\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute for T.",
        "workingLatex": "0.4F \\le 20",
        "explanation": "Replace the tension with its expression in $F$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve the inequality.",
        "workingLatex": "F \\le \\dfrac{20}{0.4} = 50",
        "explanation": "Dividing gives the largest force allowed.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the maximum force.",
        "workingLatex": "F_{\\max} = 50\\ \\text{N}",
        "explanation": "At this force the tension is exactly at the limit.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Find the acceleration at that force.",
        "workingLatex": "a = \\dfrac{50}{10} = 5\\ \\text{m s}^{-2}",
        "explanation": "The whole system accelerates at $5\\ \\text{m s}^{-2}$ when $F = 50\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Check the tension at that force.",
        "workingLatex": "T = 4 \\times 5 = 20\\ \\text{N}\\ \\checkmark",
        "explanation": "The tension reaches exactly $20\\ \\text{N}$, the breaking point.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Interpret the limit.",
        "workingLatex": "F > 50 \\Rightarrow T > 20 \\Rightarrow \\text{breaks}",
        "explanation": "Any larger force pushes the tension over the limit and snaps the string.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Note the weights are irrelevant here.",
        "workingLatex": "\\text{Horizontal, smooth} \\Rightarrow g \\text{ not used}",
        "explanation": "Because the motion is horizontal on a smooth table, gravity does not enter the calculation.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answer.",
        "workingLatex": "F_{\\max} = 50\\ \\text{N}",
        "explanation": "The greatest force that keeps the string intact is $50\\ \\text{N}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$F_{\\max} = 50\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q064",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["lift", "two-phase", "normal-reaction", "acceleration-deceleration"],
  "questionText": "A person of mass $70\\ \\text{kg}$ is in a lift. During take-off the lift accelerates upwards at $1.5\\ \\text{m s}^{-2}$; as it nears the top it decelerates at $1.2\\ \\text{m s}^{-2}$ while still moving up. Find the normal reaction on the person during (a) the acceleration phase and (b) the deceleration phase. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Note the weight for reference.",
        "workingLatex": "mg = 70 \\times 9.8 = 686\\ \\text{N}",
        "explanation": "Comparing each reaction with the weight tells us whether the person feels heavier or lighter.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Phase (a): acceleration is upward.",
        "workingLatex": "a = +1.5\\ \\text{m s}^{-2} \\ (\\text{up})",
        "explanation": "Speeding up while moving up means the acceleration points upward.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law (up positive).",
        "workingLatex": "R_1 - mg = ma",
        "explanation": "The reaction must exceed the weight to accelerate the person up.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Make R the subject.",
        "workingLatex": "R_1 = m(g + a) = 70(9.8 + 1.5)",
        "explanation": "Group the weight and the accelerating force.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the first reaction.",
        "workingLatex": "R_1 = 70 \\times 11.3 = 791\\ \\text{N}",
        "explanation": "During take-off the person feels heavier, at $791\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Phase (b): the lift decelerates while moving up.",
        "workingLatex": "a = -1.2\\ \\text{m s}^{-2} \\ (\\text{acceleration is downward})",
        "explanation": "Slowing down while moving up means the acceleration points downward.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Newton's second law again (up positive).",
        "workingLatex": "R_2 - mg = m(-1.2)",
        "explanation": "Now the resultant force is downward, so the reaction is less than the weight.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Make R the subject.",
        "workingLatex": "R_2 = m(g - 1.2) = 70(9.8 - 1.2)",
        "explanation": "Subtracting because the acceleration opposes the motion.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Simplify the bracket.",
        "workingLatex": "R_2 = 70 \\times 8.6",
        "explanation": "The effective value is $8.6\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the second reaction.",
        "workingLatex": "R_2 = 602\\ \\text{N}",
        "explanation": "While decelerating near the top the person feels lighter, at $602\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Compare the two phases.",
        "workingLatex": "R_1 = 791 > 686 > 602 = R_2",
        "explanation": "The reaction is above the weight when accelerating up and below it when decelerating.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Interpret the feeling.",
        "workingLatex": "\\text{heavier} \\to \\text{normal} \\to \\text{lighter}",
        "explanation": "This matches the everyday sensation of a lift pressing up on you at take-off and easing off near the top.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "R_1 = 791\\ \\text{N}, \\ R_2 = 602\\ \\text{N}",
        "explanation": "The direction of the acceleration, not the direction of motion, decides each reaction.",
        "diagram": null
      }
    ],
    "finalAnswer": "$R_1 = 791\\ \\text{N}$ (accelerating up); $R_2 = 602\\ \\text{N}$ (decelerating)."
  }
},
{
  "id": "al.y1.mech.connected-particles.q065",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "acceleration", "tension"],
  "questionText": "Particles of masses $11\\ \\text{kg}$ and $9\\ \\text{kg}$ hang over a smooth pulley on a light inextensible string, released from rest. Find the acceleration and the tension. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the descending mass.",
        "workingLatex": "11\\ \\text{kg descends}, \\ 9\\ \\text{kg rises}",
        "explanation": "The heavier mass falls.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the 11 kg mass.",
        "workingLatex": "11g - T = 11a",
        "explanation": "Down positive for the descending mass.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the 9 kg mass.",
        "workingLatex": "T - 9g = 9a",
        "explanation": "Up positive for the rising mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "(11 - 9)g = (11 + 9)a",
        "explanation": "The weight difference drives the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "2g = 20a \\Rightarrow a = \\dfrac{2 \\times 9.8}{20} = 0.98\\ \\text{m s}^{-2}",
        "explanation": "The small weight difference on a large total mass gives a small acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the tension from the 9 kg mass.",
        "workingLatex": "T = 9(g + a) = 9(9.8 + 0.98)",
        "explanation": "The rising mass gives the simplest tension equation.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the tension.",
        "workingLatex": "T = 9 \\times 10.78 = 97.02\\ \\text{N}",
        "explanation": "The tension is $97.02\\ \\text{N}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with the 11 kg mass.",
        "workingLatex": "11g - T = 107.8 - 97.02 = 10.78 = 11 \\times 0.98\\ \\checkmark",
        "explanation": "The descending-mass equation agrees, confirming the values.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answers.",
        "workingLatex": "a = 0.98\\ \\text{m s}^{-2}, \\ T = 97.02\\ \\text{N}",
        "explanation": "The tension sits between the weights $88.2\\ \\text{N}$ and $107.8\\ \\text{N}$, as expected.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 0.98\\ \\text{m s}^{-2}$; $T = 97.02\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q066",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "numeric",
  "tags": ["lift", "normal-reaction", "at-rest", "weight"],
  "questionText": "A person of mass $55\\ \\text{kg}$ stands in a stationary lift. Find the normal reaction from the floor. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the forces.",
        "workingLatex": "R \\uparrow, \\quad 55g \\downarrow",
        "explanation": "The floor pushes up and gravity pulls the weight down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Use the fact that the lift is at rest.",
        "workingLatex": "a = 0",
        "explanation": "No acceleration means equilibrium.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the balance.",
        "workingLatex": "R = mg",
        "explanation": "The reaction balances the weight.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute.",
        "workingLatex": "R = 55 \\times 9.8",
        "explanation": "Insert the mass and $g$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate.",
        "workingLatex": "R = 539\\ \\text{N}",
        "explanation": "The floor supports the person with a force equal to their weight.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "R = 539\\ \\text{N}",
        "explanation": "At rest, the reaction equals the weight.",
        "diagram": null
      }
    ],
    "finalAnswer": "$R = 539\\ \\text{N}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q067",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "suvat", "time-to-land"],
  "questionText": "Particles of masses $7\\ \\text{kg}$ and $3\\ \\text{kg}$ hang over a smooth pulley on a light inextensible string. The $7\\ \\text{kg}$ mass starts $1.96\\ \\text{m}$ above the floor and the system is released from rest. Find (a) the acceleration, (b) the tension, (c) the time for the $7\\ \\text{kg}$ mass to reach the floor, and (d) its speed on landing. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the descending mass.",
        "workingLatex": "7\\ \\text{kg descends}, \\ 3\\ \\text{kg rises}",
        "explanation": "The heavier mass falls toward the floor.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Newton's second law for the 7 kg mass.",
        "workingLatex": "7g - T = 7a",
        "explanation": "Down positive for the descending mass.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Newton's second law for the 3 kg mass.",
        "workingLatex": "T - 3g = 3a",
        "explanation": "Up positive for the rising mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add to eliminate T.",
        "workingLatex": "4g = 10a \\Rightarrow a = 3.92\\ \\text{m s}^{-2}",
        "explanation": "The weight difference drives the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the tension from the 3 kg mass.",
        "workingLatex": "T = 3(g + a) = 3 \\times 13.72 = 41.16\\ \\text{N}",
        "explanation": "The rising mass gives the tension directly.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Set up the kinematics for the descent.",
        "workingLatex": "u = 0, \\ a = 3.92, \\ s = 1.96",
        "explanation": "The $7\\ \\text{kg}$ mass falls $1.96\\ \\text{m}$ from rest.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Use s = ut + ½at² for the time.",
        "workingLatex": "1.96 = 0 + \\tfrac{1}{2}(3.92)t^2",
        "explanation": "We know the distance and acceleration and want the time.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Simplify.",
        "workingLatex": "1.96 = 1.96\\,t^2",
        "explanation": "Since $\\tfrac{1}{2}(3.92) = 1.96$, the numbers line up neatly.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve for the time.",
        "workingLatex": "t^2 = 1 \\Rightarrow t = 1\\ \\text{s}",
        "explanation": "Taking the positive root gives the time to reach the floor.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Find the landing speed.",
        "workingLatex": "v = u + at = 0 + 3.92 \\times 1",
        "explanation": "Velocity grows linearly under constant acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate the speed.",
        "workingLatex": "v = 3.92\\ \\text{m s}^{-1}",
        "explanation": "The $7\\ \\text{kg}$ mass lands at $3.92\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check with v² = 2as.",
        "workingLatex": "v^2 = 2(3.92)(1.96) = 15.3664 \\Rightarrow v = 3.92\\ \\checkmark",
        "explanation": "The alternative equation gives the same speed, confirming the result.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "a = 3.92, \\ T = 41.16\\ \\text{N}, \\ t = 1\\ \\text{s}, \\ v = 3.92\\ \\text{m s}^{-1}",
        "explanation": "Forces give the acceleration and tension; suvat gives the time and landing speed.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 3.92\\ \\text{m s}^{-2}$; $T = 41.16\\ \\text{N}$; $t = 1\\ \\text{s}$; $v = 3.92\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q068",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["pulley", "atwood", "string-goes-slack", "greatest-height"],
  "questionText": "Following the previous problem (masses $7\\ \\text{kg}$ and $3\\ \\text{kg}$, the $7\\ \\text{kg}$ falling $1.96\\ \\text{m}$ and reaching $3.92\\ \\text{m s}^{-1}$ before landing), find the greatest height the $3\\ \\text{kg}$ mass reaches above its starting position. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Note how far the 3 kg has already risen.",
        "workingLatex": "1.96\\ \\text{m (phase 1)}",
        "explanation": "While connected, the $3\\ \\text{kg}$ mass rises exactly as far as the $7\\ \\text{kg}$ mass falls, namely $1.96\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State its speed when the string goes slack.",
        "workingLatex": "v = 3.92\\ \\text{m s}^{-1} \\ \\text{upward}",
        "explanation": "At the instant the $7\\ \\text{kg}$ mass lands, the $3\\ \\text{kg}$ mass is moving up at the common speed.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Describe the second phase.",
        "workingLatex": "\\text{String slack; only gravity acts}",
        "explanation": "The $3\\ \\text{kg}$ mass is now a free particle, decelerating under gravity.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set the deceleration.",
        "workingLatex": "a = -g = -9.8\\ \\text{m s}^{-2}",
        "explanation": "Gravity alone slows the rising mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Use v² = u² - 2gh at the top.",
        "workingLatex": "0 = u^2 - 2gh",
        "explanation": "At the highest point the mass is momentarily at rest, so the final velocity is zero.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rearrange for the extra height.",
        "workingLatex": "h = \\dfrac{u^2}{2g}",
        "explanation": "Solve for the height gained in the free phase.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Compute u².",
        "workingLatex": "u^2 = 3.92^2 = 15.3664",
        "explanation": "Square the speed at which the string goes slack.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute.",
        "workingLatex": "h = \\dfrac{15.3664}{19.6}",
        "explanation": "Insert $u^2$ and $2g = 19.6$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the extra height.",
        "workingLatex": "h = 0.784\\ \\text{m}",
        "explanation": "The mass rises a further $0.784\\ \\text{m}$ after the string goes slack.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Add the two phases.",
        "workingLatex": "H = 1.96 + 0.784",
        "explanation": "The total rise above the start is the connected rise plus the free rise.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate the total height.",
        "workingLatex": "H = 2.744\\ \\text{m}",
        "explanation": "The greatest height above the start is $2.744\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Note what happens next.",
        "workingLatex": "\\text{then it falls back}",
        "explanation": "After reaching the top the mass falls again, so $2.744\\ \\text{m}$ is the greatest height.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answer.",
        "workingLatex": "H = 2.744\\ \\text{m}",
        "explanation": "Splitting the motion into a connected phase and a free phase gives the total rise.",
        "diagram": null
      }
    ],
    "finalAnswer": "Greatest height above start $= 1.96 + 0.784 = 2.744\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q069",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["connected-string", "smooth-table", "system", "acceleration"],
  "questionText": "Two particles of masses $3\\ \\text{kg}$ and $5\\ \\text{kg}$ are joined by a light inextensible string on a smooth horizontal table. A horizontal force of $16\\ \\text{N}$ is applied. Find the acceleration.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Combine the masses.",
        "workingLatex": "M = 3 + 5 = 8\\ \\text{kg}",
        "explanation": "The string keeps the particles together, so they share an acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the external force.",
        "workingLatex": "F = 16\\ \\text{N}",
        "explanation": "Only the applied force is external.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply Newton's second law.",
        "workingLatex": "F = Ma",
        "explanation": "The external force accelerates the total mass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute.",
        "workingLatex": "16 = 8a",
        "explanation": "Insert the force and total mass.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve.",
        "workingLatex": "a = \\dfrac{16}{8} = 2\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the shared acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "a = 2\\ \\text{m s}^{-2}",
        "explanation": "Both particles accelerate at $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.connected-particles.q070",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Connected particles",
  "subtopicId": "al.y1.mech.connected-particles",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["lift", "cable-tension", "reaction", "two-phase"],
  "questionText": "A lift of mass $1000\\ \\text{kg}$ carries a person of mass $80\\ \\text{kg}$. Find (a) the cable tension and (b) the reaction on the person while accelerating upwards at $2\\ \\text{m s}^{-2}$, and then (c) the cable tension and (d) the reaction once the lift moves upward at constant speed. Take $g = 9.8\\ \\text{m s}^{-2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Combine the masses for the cable.",
        "workingLatex": "M = 1000 + 80 = 1080\\ \\text{kg}",
        "explanation": "The cable supports the lift and the person together.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Phase (a): apply Newton's second law to the system.",
        "workingLatex": "T_1 - Mg = Ma",
        "explanation": "The cable tension minus the total weight gives the upward accelerating force.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Make the tension the subject and substitute.",
        "workingLatex": "T_1 = M(g + a) = 1080(9.8 + 2)",
        "explanation": "The tension must beat the total weight to accelerate everything up.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate the accelerating tension.",
        "workingLatex": "T_1 = 1080 \\times 11.8 = 12744\\ \\text{N}",
        "explanation": "The cable carries $12744\\ \\text{N}$ during the upward acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Reaction on the person while accelerating.",
        "workingLatex": "R_1 = 80(g + a) = 80 \\times 11.8",
        "explanation": "Isolating the person, the floor reaction must exceed their weight to accelerate them up.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the reaction.",
        "workingLatex": "R_1 = 944\\ \\text{N}",
        "explanation": "The person feels heavier, at $944\\ \\text{N}$, during the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Phase (c): constant speed means zero acceleration.",
        "workingLatex": "a = 0",
        "explanation": "At constant velocity the system is in equilibrium.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the cable tension now.",
        "workingLatex": "T_2 = Mg = 1080 \\times 9.8",
        "explanation": "With no acceleration the tension only supports the total weight.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate.",
        "workingLatex": "T_2 = 10584\\ \\text{N}",
        "explanation": "The cable now carries $10584\\ \\text{N}$, less than during acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Find the reaction now.",
        "workingLatex": "R_2 = 80g = 80 \\times 9.8 = 784\\ \\text{N}",
        "explanation": "At constant speed the reaction equals the person's weight.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Compare the two phases.",
        "workingLatex": "T_1 > T_2, \\quad R_1 > R_2",
        "explanation": "Both the tension and the reaction are larger while accelerating than at constant speed.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Interpret.",
        "workingLatex": "\\text{heavier when accelerating, normal at constant speed}",
        "explanation": "Only the acceleration phase raises the forces above their equilibrium values.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "T_1 = 12744, \\ R_1 = 944, \\ T_2 = 10584, \\ R_2 = 784\\ \\text{N}",
        "explanation": "The whole system gives the cable tension; the person alone gives the reaction, in each phase.",
        "diagram": null
      }
    ],
    "finalAnswer": "Accelerating: $T_1 = 12744\\ \\text{N}$, $R_1 = 944\\ \\text{N}$. Constant speed: $T_2 = 10584\\ \\text{N}$, $R_2 = 784\\ \\text{N}$."
  }
},
];
