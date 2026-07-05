import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.mech.forces-newton.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "weight",
      "mass",
      "w-equals-mg",
      "forces"
    ],
    "questionText": "Find the weight of a particle of mass $5\\ \\text{kg}$ (take $g = 9.8\\ \\text{m s}^{-2}$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what is being asked.",
          "workingLatex": "\\text{Find } W \\text{ (the weight, a force).}",
          "explanation": "Weight is the pull of gravity on the particle, so the answer will be a force measured in newtons, not a mass in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the weight formula.",
          "workingLatex": "W = mg",
          "explanation": "Every mass near the Earth is pulled downward, and the size of that pull is the mass multiplied by the gravitational acceleration $g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values.",
          "workingLatex": "m = 5\\ \\text{kg}, \\quad g = 9.8\\ \\text{m s}^{-2}",
          "explanation": "Listing the quantities with their units makes it clear that mass is in kilograms and $g$ is an acceleration, so the product comes out in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula.",
          "workingLatex": "W = 5 \\times 9.8",
          "explanation": "Replacing the letters with the numbers turns the general rule into a single calculation we can evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Carry out the multiplication.",
          "workingLatex": "W = 49\\ \\text{N}",
          "explanation": "Multiplying gives the size of the gravitational force, and because kilograms times metres per second squared equals newtons, the unit is N.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "W = 49\\ \\text{N}",
          "explanation": "This is the downward force gravity exerts on the particle, distinct from its mass of $5\\ \\text{kg}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$W = 49\\ \\text{N}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "weight",
      "mass",
      "w-equals-mg",
      "rearranging"
    ],
    "questionText": "A particle has weight $49\\ \\text{N}$; find its mass (take $g = 9.8\\ \\text{m s}^{-2}$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify what is being asked.",
          "workingLatex": "\\text{Find } m \\text{ (the mass, in kg).}",
          "explanation": "This time we are given the force of gravity and must work backwards to the mass, so the answer will be in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the weight formula.",
          "workingLatex": "W = mg",
          "explanation": "The same rule links weight and mass; here $W$ is known and $m$ is the unknown we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to make $m$ the subject.",
          "workingLatex": "m = \\frac{W}{g}",
          "explanation": "Dividing both sides by $g$ isolates the mass, because $g$ was multiplying it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values.",
          "workingLatex": "m = \\frac{49}{9.8}",
          "explanation": "Putting in the weight and $g$ gives a single division to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Carry out the division.",
          "workingLatex": "m = 5\\ \\text{kg}",
          "explanation": "Dividing the newtons by the acceleration cancels the force units and leaves kilograms, the correct unit for mass.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "m = 5\\ \\text{kg}",
          "explanation": "The particle's mass is $5\\ \\text{kg}$; notice weight and mass are different quantities with different units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m = 5\\ \\text{kg}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "resultant-force",
      "same-direction",
      "adding-forces",
      "1d"
    ],
    "questionText": "Two horizontal forces of $10\\ \\text{N}$ and $6\\ \\text{N}$ act on a particle in the same direction. Find the resultant force.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A single particle drawn as a dot. Two horizontal arrows point to the right (the same direction): one labelled 10 N and one labelled 6 N, both acting on the particle.",
      "alt": "A particle with two rightward force arrows of 10 N and 6 N."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the situation.",
          "workingLatex": "10\\ \\text{N} \\rightarrow, \\quad 6\\ \\text{N} \\rightarrow",
          "explanation": "Both forces pull the particle the same way, so together they push harder in that one direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State how to combine forces in the same direction.",
          "workingLatex": "\\text{Resultant} = \\text{sum of the forces}",
          "explanation": "When forces act along the same line and the same way, their effects simply add up to a single larger force.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the two forces.",
          "workingLatex": "R = 10 + 6",
          "explanation": "Since both arrows point the same direction we add their magnitudes with no cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the sum.",
          "workingLatex": "R = 16\\ \\text{N}",
          "explanation": "The single force equivalent to the two together has size $16\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the direction.",
          "workingLatex": "R = 16\\ \\text{N} \\rightarrow",
          "explanation": "The resultant points the same way as the two original forces, because nothing opposed them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "R = 16\\ \\text{N} \\text{ in the direction of the two forces}",
          "explanation": "One force of $16\\ \\text{N}$ would have exactly the same effect as the $10\\ \\text{N}$ and $6\\ \\text{N}$ forces combined.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 16\\ \\text{N}$ in the direction of the two forces"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "resultant-force",
      "opposing-forces",
      "magnitude-direction",
      "1d"
    ],
    "questionText": "Two horizontal forces act on a particle: $12\\ \\text{N}$ to the right and $5\\ \\text{N}$ to the left. Find the magnitude and direction of the resultant force.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A single particle drawn as a dot. One horizontal arrow of 12 N points to the right; a second horizontal arrow of 5 N points to the left. The arrows act in opposite directions on the particle.",
      "alt": "A particle with a 12 N force to the right and a 5 N force to the left."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a positive direction.",
          "workingLatex": "\\text{Take right as positive } (+).",
          "explanation": "Picking one direction as positive lets us treat opposing forces as positive and negative numbers, which makes combining them easy.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write each force with its sign.",
          "workingLatex": "+12\\ \\text{N}, \\quad -5\\ \\text{N}",
          "explanation": "The rightward force is positive and the leftward force is negative, because they act in opposite directions along the same line.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State how opposing forces combine.",
          "workingLatex": "R = (+12) + (-5)",
          "explanation": "Forces on the same line add, but opposite directions partly cancel, so we subtract the smaller from the larger.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the resultant.",
          "workingLatex": "R = 12 - 5 = 7\\ \\text{N}",
          "explanation": "The $5\\ \\text{N}$ to the left cancels $5\\ \\text{N}$ of the rightward force, leaving $7\\ \\text{N}$ unbalanced.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign for direction.",
          "workingLatex": "R = +7\\ \\text{N} \\Rightarrow \\text{to the right}",
          "explanation": "A positive result means the leftover force points in the direction we called positive, which is to the right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "R = 7\\ \\text{N to the right}",
          "explanation": "The two forces are equivalent to a single $7\\ \\text{N}$ force acting to the right, since the rightward force was the stronger one.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 7\\ \\text{N}$ to the right"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "f-equals-ma",
      "resultant-force"
    ],
    "questionText": "A resultant force $F = ma$ acts on a particle of mass $4\\ \\text{kg}$, giving it an acceleration of $3\\ \\text{m s}^{-2}$. Find $F$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Newton's second law.",
          "workingLatex": "F = ma",
          "explanation": "The resultant force on a particle equals its mass times the acceleration that force produces.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values.",
          "workingLatex": "m = 4\\ \\text{kg}, \\quad a = 3\\ \\text{m s}^{-2}",
          "explanation": "Both the mass and the acceleration are given, so we can find the force directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula.",
          "workingLatex": "F = 4 \\times 3",
          "explanation": "Replacing $m$ and $a$ with their values turns the law into a single multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the product.",
          "workingLatex": "F = 12\\ \\text{N}",
          "explanation": "Multiplying kilograms by metres per second squared gives newtons, the unit of force.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the answer.",
          "workingLatex": "F = 12\\ \\text{N}",
          "explanation": "A resultant force of $12\\ \\text{N}$ is exactly what is needed to accelerate this $4\\ \\text{kg}$ particle at $3\\ \\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result is sensible.",
          "workingLatex": "\\frac{F}{m} = \\frac{12}{4} = 3\\ \\text{m s}^{-2} = a \\; \\checkmark",
          "explanation": "Dividing the force back by the mass recovers the given acceleration, confirming the answer is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$F = 12\\ \\text{N}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "f-equals-ma",
      "acceleration",
      "rearranging"
    ],
    "questionText": "A resultant force of $20\\ \\text{N}$ acts on a particle of mass $5\\ \\text{kg}$. Find its acceleration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Newton's second law.",
          "workingLatex": "F = ma",
          "explanation": "The resultant force equals mass times acceleration; here the force and mass are known and the acceleration is unknown.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make $a$ the subject.",
          "workingLatex": "a = \\frac{F}{m}",
          "explanation": "Dividing both sides by the mass isolates the acceleration, because mass was multiplying it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the known values.",
          "workingLatex": "F = 20\\ \\text{N}, \\quad m = 5\\ \\text{kg}",
          "explanation": "Writing the values out keeps track of which quantity is the force and which is the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the rearranged formula.",
          "workingLatex": "a = \\frac{20}{5}",
          "explanation": "Putting in the force and mass reduces the problem to a single division.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the division.",
          "workingLatex": "a = 4\\ \\text{m s}^{-2}",
          "explanation": "Newtons divided by kilograms gives metres per second squared, the unit of acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "a = 4\\ \\text{m s}^{-2}",
          "explanation": "The particle speeds up by $4\\ \\text{m s}^{-1}$ every second in the direction of the resultant force.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 4\\ \\text{m s}^{-2}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "f-equals-ma",
      "mass",
      "rearranging"
    ],
    "questionText": "A resultant force of $18\\ \\text{N}$ gives a particle an acceleration of $6\\ \\text{m s}^{-2}$. Find its mass.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Newton's second law.",
          "workingLatex": "F = ma",
          "explanation": "Force equals mass times acceleration; here the force and acceleration are known and we want the mass.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make $m$ the subject.",
          "workingLatex": "m = \\frac{F}{a}",
          "explanation": "Dividing both sides by the acceleration isolates the mass, since acceleration was multiplying it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the known values.",
          "workingLatex": "F = 18\\ \\text{N}, \\quad a = 6\\ \\text{m s}^{-2}",
          "explanation": "Noting the values with units keeps the force and acceleration clearly separate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the rearranged formula.",
          "workingLatex": "m = \\frac{18}{6}",
          "explanation": "Replacing the letters with numbers leaves a single division to carry out.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the division.",
          "workingLatex": "m = 3\\ \\text{kg}",
          "explanation": "Newtons divided by metres per second squared gives kilograms, the unit of mass.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "m = 3\\ \\text{kg}",
          "explanation": "A $3\\ \\text{kg}$ particle is exactly what a $18\\ \\text{N}$ force would accelerate at $6\\ \\text{m s}^{-2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m = 3\\ \\text{kg}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "newtons-first-law",
      "equilibrium",
      "resultant-force",
      "balanced-forces"
    ],
    "questionText": "A particle is in equilibrium under a $9\\ \\text{N}$ force acting to the east together with a single unknown force. State Newton's first law and find the unknown force.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A single particle drawn as a dot with a horizontal arrow of 9 N pointing east (to the right). A second, unknown force acts on the same particle and the particle stays in equilibrium.",
      "alt": "A particle with a 9 N force to the east and an unknown balancing force."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State Newton's first law.",
          "workingLatex": "\\text{Equilibrium} \\Rightarrow \\text{resultant force} = 0",
          "explanation": "Newton's first law says a particle stays at rest or moves at constant velocity unless a resultant force acts, so 'in equilibrium' means the forces exactly balance and the resultant is zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the balance of horizontal forces.",
          "workingLatex": "9\\ \\text{N (east)} + F = 0",
          "explanation": "For the total force to be zero, the unknown force $F$ must combine with the $9\\ \\text{N}$ force to give nothing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve for the unknown force's size.",
          "workingLatex": "|F| = 9\\ \\text{N}",
          "explanation": "To cancel a $9\\ \\text{N}$ push, the unknown force must be exactly the same size, $9\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the direction.",
          "workingLatex": "\\text{direction of } F = \\text{west}",
          "explanation": "It must point the opposite way to the eastward force so the two pulls oppose and cancel.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine size and direction.",
          "workingLatex": "F = 9\\ \\text{N to the west}",
          "explanation": "Equal in magnitude and opposite in direction is exactly what balances the given force.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "F = 9\\ \\text{N (west)}, \\quad \\text{resultant} = 0",
          "explanation": "The unknown force is $9\\ \\text{N}$ to the west, and together with the eastward force it produces zero resultant, as equilibrium requires.",
          "diagram": null
        }
      ],
      "finalAnswer": "By Newton's first law the resultant force is zero, so the unknown force is $9\\ \\text{N}$ to the west."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "f-equals-ma",
      "acceleration"
    ],
    "questionText": "A particle of mass $2\\ \\text{kg}$ experiences a resultant force of $10\\ \\text{N}$. Find its acceleration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Newton's second law.",
          "workingLatex": "F = ma",
          "explanation": "The resultant force equals mass times acceleration, linking the force to the motion it causes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make $a$ the subject.",
          "workingLatex": "a = \\frac{F}{m}",
          "explanation": "Dividing by the mass isolates the acceleration, which is what we want to find.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the known values.",
          "workingLatex": "F = 10\\ \\text{N}, \\quad m = 2\\ \\text{kg}",
          "explanation": "Recording the values with units confirms which is the force and which is the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values.",
          "workingLatex": "a = \\frac{10}{2}",
          "explanation": "Putting the numbers in leaves a single division to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the division.",
          "workingLatex": "a = 5\\ \\text{m s}^{-2}",
          "explanation": "Newtons divided by kilograms gives metres per second squared, the unit of acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer.",
          "workingLatex": "a = 5\\ \\text{m s}^{-2}",
          "explanation": "The particle's speed increases by $5\\ \\text{m s}^{-1}$ each second in the direction of the resultant force.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 5\\ \\text{m s}^{-2}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "weight",
      "unit-conversion",
      "w-equals-mg",
      "grams-to-kg"
    ],
    "questionText": "A ball has mass $800\\ \\text{g}$. Convert this mass to kilograms and find its weight (take $g = 9.8\\ \\text{m s}^{-2}$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note why a conversion is needed.",
          "workingLatex": "W = mg \\text{ needs } m \\text{ in kg}",
          "explanation": "The weight formula only gives newtons when the mass is in kilograms, so the grams must be converted first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the gram-to-kilogram relationship.",
          "workingLatex": "1000\\ \\text{g} = 1\\ \\text{kg}",
          "explanation": "There are $1000$ grams in a kilogram, so we divide a number of grams by $1000$ to get kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert the mass.",
          "workingLatex": "m = \\frac{800}{1000} = 0.8\\ \\text{kg}",
          "explanation": "Dividing $800\\ \\text{g}$ by $1000$ gives $0.8\\ \\text{kg}$, the mass in the units the formula expects.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the weight formula.",
          "workingLatex": "W = mg",
          "explanation": "Weight is the mass multiplied by the gravitational acceleration $g$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the converted mass and $g$.",
          "workingLatex": "W = 0.8 \\times 9.8",
          "explanation": "Using the mass in kilograms guarantees the result comes out in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the product.",
          "workingLatex": "W = 7.84\\ \\text{N}",
          "explanation": "Multiplying gives the gravitational force on the ball, measured in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer.",
          "workingLatex": "m = 0.8\\ \\text{kg}, \\quad W = 7.84\\ \\text{N}",
          "explanation": "The ball's mass is $0.8\\ \\text{kg}$ and its weight is $7.84\\ \\text{N}$; the conversion was essential to get a correct value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$m = 0.8\\ \\text{kg}$, $W = 7.84\\ \\text{N}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "resultant-force",
      "collinear-forces",
      "sign-convention",
      "newtons-laws"
    ],
    "questionText": "Three horizontal forces act on a particle along the same straight line: a force of $8\\ \\text{N}$ to the right, a force of $3\\ \\text{N}$ to the left, and a force of $2\\ \\text{N}$ to the right. Find the magnitude and direction of the resultant force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a positive direction.",
          "workingLatex": "\\text{right} = +\\ , \\qquad \\text{left} = -",
          "explanation": "All three forces lie along one line, so we only need to track a single direction. Choosing right as positive lets us replace 'left/right' with plus and minus signs, turning the problem into simple addition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write each force with its sign.",
          "workingLatex": "+8\\ \\text{N}, \\quad -3\\ \\text{N}, \\quad +2\\ \\text{N}",
          "explanation": "The two rightward forces keep the positive sign and the leftward force becomes negative. This encodes the direction of each force into the number itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the forces to find the resultant.",
          "workingLatex": "R = 8 - 3 + 2",
          "explanation": "The resultant is just the single force that has the same overall effect as all the forces together, and for collinear forces that is simply their signed sum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Carry out the arithmetic.",
          "workingLatex": "R = 7\\ \\text{N}",
          "explanation": "Working left to right, $8 - 3 = 5$ and $5 + 2 = 7$. The value is positive, which is the information we need for the direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the sign as a direction.",
          "workingLatex": "R = +7\\ \\text{N} \\Rightarrow \\text{directed to the right}",
          "explanation": "Because we chose right as positive, a positive answer means the net push is to the right. The magnitude is the size of the number, $7\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the resultant force.",
          "workingLatex": "|R| = 7\\ \\text{N} \\ \\text{to the right}",
          "explanation": "We report both parts a force needs: its size ($7\\ \\text{N}$) and its direction (to the right). This single force could replace all three originals.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7\\ \\text{N}$ to the right"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "resultant-force",
      "perpendicular-forces",
      "pythagoras",
      "newtons-laws"
    ],
    "questionText": "Two forces act on a particle: a force of $3\\ \\text{N}$ due east and a force of $4\\ \\text{N}$ due north. Find the magnitude of the resultant force.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A single particle at the origin with two force arrows: one arrow of length 3 N pointing east (right), and one arrow of length 4 N pointing north (up). The two arrows are at right angles to each other.",
      "alt": "A particle acted on by a 3 N eastward force and a 4 N northward force at right angles."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note that the two forces are perpendicular.",
          "workingLatex": "\\text{east} \\perp \\text{north}",
          "explanation": "East and north are at right angles to each other. When forces are perpendicular they act along independent directions, so they cannot be added straight together as numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the forces as two sides of a right-angled triangle.",
          "workingLatex": "F_x = 3\\ \\text{N}, \\qquad F_y = 4\\ \\text{N}",
          "explanation": "Placing the two arrows tip to tail forms a right angle, and the resultant is the straight line joining the start to the finish. That line is the hypotenuse of a right-angled triangle with legs $3$ and $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Pythagoras' theorem.",
          "workingLatex": "|R| = \\sqrt{F_x^2 + F_y^2} = \\sqrt{3^2 + 4^2}",
          "explanation": "For a right-angled triangle the hypotenuse is found from the squares of the two legs. This is the standard way to combine two perpendicular forces into one resultant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the squares.",
          "workingLatex": "|R| = \\sqrt{9 + 16} = \\sqrt{25}",
          "explanation": "Squaring gives $3^2 = 9$ and $4^2 = 16$, and adding them gives $25$. We square first because Pythagoras combines the areas of the squares on the two legs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root.",
          "workingLatex": "|R| = 5\\ \\text{N}",
          "explanation": "The square root of $25$ is $5$, so the single force equivalent to the two together has magnitude $5\\ \\text{N}$. This is the classic $3$-$4$-$5$ triangle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the magnitude of the resultant.",
          "workingLatex": "|R| = 5\\ \\text{N}",
          "explanation": "The question asks only for the size of the resultant, so $5\\ \\text{N}$ is the complete answer. This force points somewhere between east and north.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\ \\text{N}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "normal-reaction",
      "weight",
      "equilibrium",
      "newtons-first-law"
    ],
    "questionText": "A box of mass $6\\ \\text{kg}$ rests on a horizontal table. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the normal reaction force exerted by the table on the box.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A box sitting on a horizontal table. An arrow labelled W points vertically downward from the centre of the box (its weight), and an arrow labelled R points vertically upward from the base of the box (the normal reaction from the table).",
      "alt": "A box on a table with weight W acting down and normal reaction R acting up."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the vertical forces on the box.",
          "workingLatex": "\\text{down: } W, \\qquad \\text{up: } R",
          "explanation": "Only two forces act vertically: the weight $W$ pulling the box down, and the normal reaction $R$ from the table pushing it up. Naming them clearly is the first step in any force problem.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State that the box is in equilibrium.",
          "workingLatex": "\\text{box at rest} \\Rightarrow \\text{resultant} = 0",
          "explanation": "The box rests on the table and does not move, so by Newton's first law the forces on it must balance. This tells us the upward and downward forces are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the balance of vertical forces.",
          "workingLatex": "R = W",
          "explanation": "Balancing 'up equals down' gives the reaction equal to the weight. This is why a heavier object presses on the surface more, and the surface pushes back harder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the weight in terms of mass and gravity.",
          "workingLatex": "W = mg",
          "explanation": "Weight is the pull of gravity on the mass, found by multiplying the mass by the gravitational acceleration $g$. This is what turns a mass in kilograms into a force in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the given values.",
          "workingLatex": "R = 6 \\times 9.8",
          "explanation": "The mass is $6\\ \\text{kg}$ and $g = 9.8\\ \\text{m s}^{-2}$, so we multiply the two together to get the reaction in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the normal reaction.",
          "workingLatex": "R = 58.8\\ \\text{N}",
          "explanation": "Multiplying gives $58.8\\ \\text{N}$. This is both the box's weight and, by the balance, the force the table pushes up with.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 58.8\\ \\text{N}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resultant-force",
      "acceleration",
      "f-equals-ma"
    ],
    "questionText": "A particle of mass $6\\ \\text{kg}$ experiences a forward driving force of $15\\ \\text{N}$ and a resistance of $3\\ \\text{N}$ opposing its motion. Find the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the horizontal forces.",
          "workingLatex": "\\text{forward: } 15\\ \\text{N}, \\qquad \\text{backward: } 3\\ \\text{N}",
          "explanation": "The driving force pushes the particle forward while the resistance pushes back against the motion. These two forces act along the same line in opposite directions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the resultant force.",
          "workingLatex": "F = 15 - 3",
          "explanation": "Because the forces are opposite, the net force is the difference between them. We subtract the resistance because it works against the driving force.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the resultant.",
          "workingLatex": "F = 12\\ \\text{N} \\ \\text{forward}",
          "explanation": "The driving force wins by $12\\ \\text{N}$, so there is a net forward push. Only this leftover force actually accelerates the particle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Newton's second law.",
          "workingLatex": "F = ma",
          "explanation": "Newton's second law says the resultant force equals mass times acceleration. This links the net push we just found to how quickly the particle speeds up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to make acceleration the subject.",
          "workingLatex": "a = \\dfrac{F}{m} = \\dfrac{12}{6}",
          "explanation": "Dividing the resultant force by the mass isolates the acceleration. A larger force gives more acceleration, while more mass resists it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the acceleration.",
          "workingLatex": "a = 2\\ \\text{m s}^{-2}",
          "explanation": "Dividing $12$ by $6$ gives $2$. The units are metres per second squared because the force is in newtons and the mass in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer.",
          "workingLatex": "a = 2\\ \\text{m s}^{-2} \\ \\text{in the direction of motion}",
          "explanation": "The acceleration points the same way as the net force, so the particle speeds up in its forward direction of travel.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2\\ \\text{m s}^{-2}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "force-diagram",
      "weight",
      "normal-reaction",
      "equilibrium"
    ],
    "questionText": "A book rests on a horizontal table. Name the forces acting on the book and state which pair of forces balances.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A book lying flat on a horizontal table. An arrow labelled W (weight) points vertically downward from the book, and an arrow labelled R (normal reaction) points vertically upward from where the book meets the table. The two arrows are equal in length.",
      "alt": "A book on a table with weight acting downward and normal reaction acting upward, drawn equal in length."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Consider what pulls the book down.",
          "workingLatex": "W = mg \\ \\text{(downward)}",
          "explanation": "Every object with mass is pulled toward the Earth by gravity. This downward force is the book's weight, written $W$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Consider what the table does.",
          "workingLatex": "R \\ \\text{(upward)}",
          "explanation": "The table surface pushes back on the book, perpendicular to the surface. This upward push is called the normal reaction $R$; without it the book would fall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the forces acting on the book.",
          "workingLatex": "\\{\\, W \\ (\\text{down}), \\ R \\ (\\text{up}) \\,\\}",
          "explanation": "Only two forces act on the resting book: its weight pulling it down and the normal reaction pushing it up. There is no horizontal push or pull.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note that the book is in equilibrium.",
          "workingLatex": "\\text{book at rest} \\Rightarrow \\text{resultant} = 0",
          "explanation": "The book stays still, so by Newton's first law the forces on it must cancel out. That means the up and down forces are equal in size.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State which pair balances.",
          "workingLatex": "R = W",
          "explanation": "The weight and the normal reaction balance one another: the same magnitude but opposite directions, so the book neither sinks nor lifts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the conclusion.",
          "workingLatex": "\\text{Forces: } W \\text{ and } R; \\quad R = W",
          "explanation": "The two forces on the book are its weight $W$ (down) and the normal reaction $R$ (up), and it is these two that balance to keep the book in equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "The forces are the weight $W$ acting downward and the normal reaction $R$ from the table acting upward. These two forces balance, with $R = W$, keeping the book in equilibrium."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "newtons-third-law",
      "action-reaction",
      "weight",
      "gravity"
    ],
    "questionText": "State Newton's third law of motion. Hence give the reaction force to 'the Earth pulling a ball downward with its weight'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Newton's third law.",
          "workingLatex": "\\text{action} \\longleftrightarrow \\text{reaction}",
          "explanation": "Newton's third law says that whenever one body exerts a force on another, the second body exerts an equal and opposite force back on the first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the key feature of the pair.",
          "workingLatex": "|F_{A\\to B}| = |F_{B\\to A}|, \\quad \\text{opposite directions}",
          "explanation": "The two forces are always equal in magnitude and opposite in direction. This equal-and-opposite pairing is the heart of the third law.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note that the pair acts on different bodies.",
          "workingLatex": "F_{A\\to B} \\text{ on } B, \\qquad F_{B\\to A} \\text{ on } A",
          "explanation": "Crucially, the action and reaction act on two different objects, not the same one. That is why they do not simply cancel and leave nothing happening.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the given force.",
          "workingLatex": "\\text{Earth} \\xrightarrow{\\ W\\ } \\text{ball (downward)}",
          "explanation": "The stated force is the Earth pulling the ball down, which is the ball's weight. Here the Earth is body $A$ and the ball is body $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Swap the roles to find the reaction.",
          "workingLatex": "\\text{ball} \\xrightarrow{\\ W\\ } \\text{Earth (upward)}",
          "explanation": "The reaction is found by swapping who pushes whom: the ball pulls the Earth. It has the same size as the weight but the opposite (upward) direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the reaction force.",
          "workingLatex": "F_{\\text{ball}\\to\\text{Earth}} = W \\ \\text{upward}",
          "explanation": "So the reaction is the ball pulling the Earth upward with a gravitational force equal to its weight. It acts on the Earth, not on the ball.",
          "diagram": null
        }
      ],
      "finalAnswer": "Newton's third law: when one body exerts a force on a second body, the second exerts an equal and opposite force on the first (the two forces act on different bodies). The reaction to the Earth pulling the ball down with its weight is the ball pulling the Earth upward with an equal gravitational force."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "driving-force",
      "f-equals-ma",
      "acceleration"
    ],
    "questionText": "A car of mass $1000\\ \\text{kg}$ accelerates at $2\\ \\text{m s}^{-2}$ along a smooth, straight, horizontal road with no resistance. Find the driving force acting on the car.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the horizontal forces.",
          "workingLatex": "\\text{driving force } D, \\qquad \\text{resistance} = 0",
          "explanation": "The road is smooth and there is no resistance, so the only horizontal force acting on the car is the driving force. Nothing opposes the motion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the resultant force.",
          "workingLatex": "F = D - 0 = D",
          "explanation": "With no resistance to subtract, the resultant force is simply the driving force itself. This makes the driving force the sole cause of the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law.",
          "workingLatex": "F = ma",
          "explanation": "Newton's second law connects the resultant force to the mass and acceleration. Since the resultant equals the driving force, we can find $D$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values.",
          "workingLatex": "D = 1000 \\times 2",
          "explanation": "The mass is $1000\\ \\text{kg}$ and the acceleration is $2\\ \\text{m s}^{-2}$, so we multiply them together to get the force in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the driving force.",
          "workingLatex": "D = 2000\\ \\text{N}",
          "explanation": "Multiplying gives $2000\\ \\text{N}$. A heavier car or a bigger acceleration would each require a larger driving force.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer.",
          "workingLatex": "D = 2000\\ \\text{N}",
          "explanation": "The driving force needed to give this car that acceleration on a smooth road is $2000\\ \\text{N}$, acting in the direction of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2000\\ \\text{N}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "equilibrium",
      "resultant-force",
      "newtons-first-law",
      "collinear-forces"
    ],
    "questionText": "A particle is in equilibrium under three horizontal forces acting along the same line: $7\\ \\text{N}$ to the right, $4\\ \\text{N}$ to the left, and an unknown force. Find the magnitude and direction of the unknown force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the condition for equilibrium.",
          "workingLatex": "\\text{equilibrium} \\Rightarrow \\text{resultant} = 0",
          "explanation": "By Newton's first law, a particle in equilibrium has zero resultant force. So all three forces must add up to nothing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a positive direction.",
          "workingLatex": "\\text{right} = +\\ , \\qquad \\text{left} = -",
          "explanation": "Taking right as positive lets us handle the collinear forces with signs, so equilibrium becomes a simple equation that sums to zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine the two known forces.",
          "workingLatex": "7 - 4 = 3\\ \\text{N} \\ \\text{(net right)}",
          "explanation": "The known forces give a net $3\\ \\text{N}$ to the right. On their own they would push the particle right, so something must cancel this.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the equilibrium equation.",
          "workingLatex": "3 + X = 0",
          "explanation": "For the total to be zero, the unknown force $X$ must exactly cancel the leftover $3\\ \\text{N}$. Setting their sum to zero captures equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the unknown force.",
          "workingLatex": "X = -3\\ \\text{N}",
          "explanation": "Rearranging gives $X = -3$. The negative sign is meaningful: it tells us the direction of the missing force.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign.",
          "workingLatex": "X = 3\\ \\text{N} \\ \\text{to the left}",
          "explanation": "A negative value means the force points left, since we chose right as positive. Its magnitude is $3\\ \\text{N}$, exactly balancing the net rightward push.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer.",
          "workingLatex": "|X| = 3\\ \\text{N} \\ \\text{to the left}",
          "explanation": "The unknown force is $3\\ \\text{N}$ to the left, which restores the balance and keeps the particle in equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\ \\text{N}$ to the left"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "weight",
      "mass-vs-weight",
      "gravity",
      "w-equals-mg"
    ],
    "questionText": "A piece of an astronaut's equipment has mass $12\\ \\text{kg}$. Find its weight on Earth (where $g = 9.8\\ \\text{m s}^{-2}$) and on the Moon (where $g = 1.6\\ \\text{m s}^{-2}$), and comment on whether its mass changes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula for weight.",
          "workingLatex": "W = mg",
          "explanation": "Weight is the force of gravity on an object, equal to its mass multiplied by the local gravitational acceleration $g$. Because $g$ differs between places, so does the weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the weight on Earth.",
          "workingLatex": "W_{\\text{Earth}} = 12 \\times 9.8",
          "explanation": "On Earth we use $g = 9.8\\ \\text{m s}^{-2}$, multiplying it by the mass of $12\\ \\text{kg}$ to get the gravitational force in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the Earth weight.",
          "workingLatex": "W_{\\text{Earth}} = 117.6\\ \\text{N}",
          "explanation": "Multiplying gives $117.6\\ \\text{N}$. This is how hard the equipment presses down under Earth's gravity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Calculate the weight on the Moon.",
          "workingLatex": "W_{\\text{Moon}} = 12 \\times 1.6",
          "explanation": "The Moon has weaker gravity, $g = 1.6\\ \\text{m s}^{-2}$, so we multiply this smaller value by the same mass of $12\\ \\text{kg}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the Moon weight.",
          "workingLatex": "W_{\\text{Moon}} = 19.2\\ \\text{N}",
          "explanation": "Multiplying gives $19.2\\ \\text{N}$, much less than on Earth. The weaker gravity pulls on the equipment far less strongly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Comment on the mass.",
          "workingLatex": "m = 12\\ \\text{kg} \\ \\text{(unchanged)}",
          "explanation": "Mass measures the amount of matter in the object, and moving it does not add or remove any matter. So the mass stays $12\\ \\text{kg}$ everywhere; only the weight changes because $g$ changes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "W_{\\text{Earth}} = 117.6\\ \\text{N}, \\quad W_{\\text{Moon}} = 19.2\\ \\text{N}, \\quad m = 12\\ \\text{kg}",
          "explanation": "The equipment weighs $117.6\\ \\text{N}$ on Earth and $19.2\\ \\text{N}$ on the Moon, but its mass remains $12\\ \\text{kg}$ in both places.",
          "diagram": null
        }
      ],
      "finalAnswer": "Weight on Earth $= 117.6\\ \\text{N}$; weight on Moon $= 19.2\\ \\text{N}$. The mass does not change; it stays $12\\ \\text{kg}$ in both places, since only the gravitational field strength $g$ differs."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resultant-force",
      "f-equals-ma",
      "acceleration"
    ],
    "questionText": "A resultant force acts on a particle of mass $50\\ \\text{kg}$, giving it an acceleration of $0.5\\ \\text{m s}^{-2}$. Find the magnitude of the resultant force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the known quantities.",
          "workingLatex": "m = 50\\ \\text{kg}, \\qquad a = 0.5\\ \\text{m s}^{-2}",
          "explanation": "We are told the mass of the particle and its acceleration. These are exactly the two quantities Newton's second law needs to find a force.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State Newton's second law.",
          "workingLatex": "F = ma",
          "explanation": "The resultant force equals mass times acceleration. This law tells us the single force responsible for producing the given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "F = 50 \\times 0.5",
          "explanation": "Putting in $m = 50\\ \\text{kg}$ and $a = 0.5\\ \\text{m s}^{-2}$ lets us calculate the force directly by multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the force.",
          "workingLatex": "F = 25\\ \\text{N}",
          "explanation": "Multiplying $50$ by $0.5$ is the same as halving $50$, giving $25\\ \\text{N}$. The units are newtons because kilograms times metres per second squared give newtons.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the result is reasonable.",
          "workingLatex": "a = \\dfrac{F}{m} = \\dfrac{25}{50} = 0.5\\ \\text{m s}^{-2} \\ \\checkmark",
          "explanation": "Dividing the force back by the mass recovers the given acceleration, confirming the answer is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer.",
          "workingLatex": "F = 25\\ \\text{N}",
          "explanation": "The resultant force acting on the particle has magnitude $25\\ \\text{N}$, directed the same way as the acceleration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$25\\ \\text{N}$"
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "resultant-force",
      "vectors",
      "ij-notation",
      "magnitude"
    ],
    "questionText": "Two forces $(\\mathbf{i} + 2\\mathbf{j})\\ \\text{N}$ and $(3\\mathbf{i} - \\mathbf{j})\\ \\text{N}$ act on a particle. Find the resultant force as a vector, and find its magnitude.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the resultant force is",
          "workingLatex": "\\mathbf{R} = \\mathbf{F}_1 + \\mathbf{F}_2",
          "explanation": "The resultant is the single force that has the same overall effect as all the forces together, so we find it simply by adding the force vectors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the two forces",
          "workingLatex": "\\mathbf{F}_1 = \\mathbf{i} + 2\\mathbf{j}, \\quad \\mathbf{F}_2 = 3\\mathbf{i} - \\mathbf{j}",
          "explanation": "Setting the forces out in i, j form lets us line up the matching components neatly before adding them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the i-components",
          "workingLatex": "1 + 3 = 4",
          "explanation": "The i-components both point along the same horizontal direction, so they simply add to give the total horizontal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the j-components",
          "workingLatex": "2 + (-1) = 1",
          "explanation": "The j-components are added separately, because the horizontal and vertical directions are independent and never affect each other.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the resultant vector",
          "workingLatex": "\\mathbf{R} = 4\\mathbf{i} + \\mathbf{j}\\ \\text{N}",
          "explanation": "Recombining the totalled components gives the resultant force as one vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up Pythagoras for the magnitude",
          "workingLatex": "|\\mathbf{R}| = \\sqrt{4^2 + 1^2}",
          "explanation": "The magnitude is the length of the vector; because its two components are at right angles, Pythagoras' theorem gives that length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the magnitude",
          "workingLatex": "|\\mathbf{R}| = \\sqrt{17} \\approx 4.12\\ \\text{N}",
          "explanation": "Taking the square root gives the size of the resultant force in newtons, rounded to three significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{R} = 4\\mathbf{i} + \\mathbf{j}\\ \\text{N}$, with magnitude $\\sqrt{17} \\approx 4.12\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "newtons-second-law",
      "acceleration",
      "vectors",
      "ij-notation"
    ],
    "questionText": "A resultant force $\\mathbf{F} = (6\\mathbf{i} + 8\\mathbf{j})\\ \\text{N}$ acts on a particle of mass $2\\ \\text{kg}$. Find the acceleration of the particle as a vector, and find its magnitude.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall Newton's second law",
          "workingLatex": "\\mathbf{F} = m\\mathbf{a}",
          "explanation": "Newton's second law says the resultant force on a particle equals its mass times its acceleration, and in vector form this holds for both directions at once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make the acceleration the subject",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathbf{F}}{m}",
          "explanation": "We want the acceleration, so we divide the resultant force by the mass; dividing a vector by a number just scales each component.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the force and mass",
          "workingLatex": "\\mathbf{a} = \\dfrac{6\\mathbf{i} + 8\\mathbf{j}}{2}",
          "explanation": "Putting in the given values sets up the division we need to carry out.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide each component by the mass",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}\\ \\text{m s}^{-2}",
          "explanation": "Each component is halved separately, because the same mass resists acceleration equally in every direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the acceleration vector",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}\\ \\text{m s}^{-2}",
          "explanation": "This is the full answer for the acceleration as a vector, showing both its horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up Pythagoras for the magnitude",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{3^2 + 4^2}",
          "explanation": "The magnitude is the length of the acceleration vector; its components are perpendicular, so Pythagoras gives the length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the magnitude",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{25} = 5\\ \\text{m s}^{-2}",
          "explanation": "Completing the square root gives the size of the acceleration; the neat 3, 4, 5 pattern confirms the working.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}\\ \\text{m s}^{-2}$, with magnitude $5\\ \\text{m s}^{-2}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "newtons-second-law",
      "resultant-force",
      "acceleration",
      "vectors"
    ],
    "questionText": "A particle of mass $3\\ \\text{kg}$ is acted on by two forces $(4\\mathbf{i} + \\mathbf{j})\\ \\text{N}$ and $(2\\mathbf{i} - 5\\mathbf{j})\\ \\text{N}$. Find the acceleration of the particle as a vector, and find its magnitude.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the method",
          "workingLatex": "\\text{Step 1: find } \\mathbf{R}. \\quad \\text{Step 2: use } \\mathbf{F} = m\\mathbf{a}.",
          "explanation": "Newton's second law needs the single resultant force, so we first combine the two forces and then divide by the mass.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the two forces",
          "workingLatex": "\\mathbf{F}_1 = 4\\mathbf{i} + \\mathbf{j}, \\quad \\mathbf{F}_2 = 2\\mathbf{i} - 5\\mathbf{j}",
          "explanation": "Laying the forces out in component form makes it easy to add matching directions together.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the i-components",
          "workingLatex": "4 + 2 = 6",
          "explanation": "The horizontal parts add directly to give the total horizontal force on the particle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the j-components",
          "workingLatex": "1 + (-5) = -4",
          "explanation": "The vertical parts add separately; the negative total tells us the resultant points downward in the j-direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the resultant force",
          "workingLatex": "\\mathbf{R} = 6\\mathbf{i} - 4\\mathbf{j}\\ \\text{N}",
          "explanation": "Combining the totals gives the single resultant force that drives the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply Newton's second law",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathbf{R}}{m}",
          "explanation": "Rearranging F = ma, the acceleration is the resultant force divided by the mass.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "\\mathbf{a} = \\dfrac{6\\mathbf{i} - 4\\mathbf{j}}{3}",
          "explanation": "Putting in the resultant and the 3 kg mass sets up the division for each component.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide each component by 3",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j}\\ \\text{m s}^{-2}",
          "explanation": "Sharing the mass across each direction gives the acceleration vector; the j-part stays as a fraction to keep it exact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the magnitude of the resultant force",
          "workingLatex": "|\\mathbf{R}| = \\sqrt{6^2 + (-4)^2} = \\sqrt{52} = 2\\sqrt{13}\\ \\text{N}",
          "explanation": "It is neatest to find the length of the resultant first, since the acceleration is just a scaled version of it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Divide by the mass to get the acceleration magnitude",
          "workingLatex": "|\\mathbf{a}| = \\dfrac{|\\mathbf{R}|}{m} = \\dfrac{2\\sqrt{13}}{3} \\approx 2.40\\ \\text{m s}^{-2}",
          "explanation": "Because acceleration is the resultant divided by the mass, its length is the resultant's length divided by the mass.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{a} = 2\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j}\\ \\text{m s}^{-2}$, with magnitude $\\dfrac{2\\sqrt{13}}{3} \\approx 2.40\\ \\text{m s}^{-2}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resistance",
      "acceleration",
      "suvat"
    ],
    "questionText": "A car of mass $1200\\ \\text{kg}$ has a driving force of $3000\\ \\text{N}$ and experiences a constant resistance of $600\\ \\text{N}$. Find the acceleration of the car, and then find the time it takes to reach a speed of $20\\ \\text{m s}^{-1}$ starting from rest.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A car on a horizontal road moving to the right. A driving force of 3000 N acts forwards (to the right) and a resistance force of 600 N acts backwards (to the left).",
      "alt": "Car with a 3000 N driving force forward and a 600 N resistance force backward."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the horizontal forces",
          "workingLatex": "\\text{Forward: } 3000\\ \\text{N}, \\quad \\text{Backward: } 600\\ \\text{N}",
          "explanation": "The motion is horizontal, so we only need the forces along that line: the driving force pushing forward and the resistance opposing it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the resultant force",
          "workingLatex": "F = 3000 - 600",
          "explanation": "The resistance acts against the driving force, so we subtract it to find the net force actually accelerating the car.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the resultant",
          "workingLatex": "F = 2400\\ \\text{N}",
          "explanation": "This positive net force is directed forwards, so the car speeds up in the direction it is travelling.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Newton's second law",
          "workingLatex": "F = ma",
          "explanation": "The net force equals mass times acceleration, which lets us turn the force into an acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for acceleration",
          "workingLatex": "a = \\dfrac{F}{m}",
          "explanation": "We want the acceleration, so we divide the net force by the car's mass.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and evaluate",
          "workingLatex": "a = \\dfrac{2400}{1200} = 2\\ \\text{m s}^{-2}",
          "explanation": "Dividing gives the acceleration; every second the car gains 2 m/s of speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List the known values for the second part",
          "workingLatex": "u = 0, \\quad v = 20, \\quad a = 2, \\quad t = ?",
          "explanation": "The acceleration is constant, so we can use the suvat equations; we list what we know to choose the right one.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choose a suitable suvat equation",
          "workingLatex": "v = u + at",
          "explanation": "This equation links the quantities we have (u, v, a) with the time we want, and does not need the distance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the known values",
          "workingLatex": "20 = 0 + 2t",
          "explanation": "Putting in the starting speed, final speed and acceleration leaves a simple equation for the time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the time",
          "workingLatex": "t = \\dfrac{20}{2} = 10\\ \\text{s}",
          "explanation": "Dividing both sides by the acceleration gives the time needed to build up to 20 m/s from rest.",
          "diagram": null
        }
      ],
      "finalAnswer": "The acceleration is $2\\ \\text{m s}^{-2}$, and the car reaches $20\\ \\text{m s}^{-1}$ after $10\\ \\text{s}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "friction",
      "acceleration",
      "horizontal-motion"
    ],
    "questionText": "A box of mass $8\\ \\text{kg}$ is pulled along a rough horizontal floor by a horizontal force of $40\\ \\text{N}$. A friction force of $16\\ \\text{N}$ opposes the motion. Find the acceleration of the box.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A box resting on a rough horizontal floor. A horizontal pulling force of 40 N acts to the right, and a friction force of 16 N acts to the left, opposing the motion.",
      "alt": "Box on floor with 40 N pull to the right and 16 N friction to the left."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the horizontal forces",
          "workingLatex": "\\text{Pull: } 40\\ \\text{N}, \\quad \\text{Friction: } 16\\ \\text{N}",
          "explanation": "The box moves horizontally, so we focus on the forces along that direction: the pull driving it and the friction resisting it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the direction of friction",
          "workingLatex": "\\text{Friction opposes motion} \\Rightarrow \\text{acts backward}",
          "explanation": "Friction always acts against the direction of sliding, so it points opposite to the pull and reduces the net force.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the resultant force",
          "workingLatex": "F = 40 - 16",
          "explanation": "Because friction opposes the pull, we subtract it to find the net force that actually accelerates the box.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the resultant",
          "workingLatex": "F = 24\\ \\text{N}",
          "explanation": "The positive result means the net force points forward, so the box accelerates in the direction it is pulled.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply Newton's second law",
          "workingLatex": "F = ma",
          "explanation": "The net horizontal force equals mass times acceleration, which connects the force to the motion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for acceleration",
          "workingLatex": "a = \\dfrac{F}{m}",
          "explanation": "We want the acceleration, so we divide the net force by the box's mass.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "a = \\dfrac{24}{8}",
          "explanation": "Putting in the net force and the mass sets up the final calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "(40 - 16)/8 = 24/8 = 3",
          "explanation": "The pulling force beats friction by 24 N; spread over the 8 kg mass this gives 3 m/s^2, and the box accelerates in the direction of the pull.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the acceleration",
          "workingLatex": "a = 3\\ \\text{m s}^{-2}",
          "explanation": "The box speeds up by 3 m/s every second while these forces continue to act.",
          "diagram": null
        }
      ],
      "finalAnswer": "The acceleration of the box is $3\\ \\text{m s}^{-2}$ in the direction of the pull."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "equilibrium",
      "resultant-force",
      "vectors",
      "magnitude"
    ],
    "questionText": "A particle is in equilibrium under three forces: $(5\\mathbf{i} + 3\\mathbf{j})\\ \\text{N}$, $(-2\\mathbf{i} + \\mathbf{j})\\ \\text{N}$ and $\\mathbf{F}$. Find $\\mathbf{F}$ and its magnitude.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equilibrium condition",
          "workingLatex": "\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F} = \\mathbf{0}",
          "explanation": "A particle in equilibrium has zero resultant force, so all the forces acting on it must add up to the zero vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make F the subject",
          "workingLatex": "\\mathbf{F} = -(\\mathbf{F}_1 + \\mathbf{F}_2)",
          "explanation": "The unknown force must exactly cancel the other two, so it equals the negative of their sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the i-components of the known forces",
          "workingLatex": "5 + (-2) = 3",
          "explanation": "We combine the horizontal parts of the two known forces to find their total in the i-direction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the j-components of the known forces",
          "workingLatex": "3 + 1 = 4",
          "explanation": "We combine the vertical parts separately to find their total in the j-direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the sum of the known forces",
          "workingLatex": "\\mathbf{F}_1 + \\mathbf{F}_2 = 3\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "This is the combined pull of the first two forces, which the third force must balance out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Negate to find F",
          "workingLatex": "\\mathbf{F} = -(3\\mathbf{i} + 4\\mathbf{j}) = -3\\mathbf{i} - 4\\mathbf{j}\\ \\text{N}",
          "explanation": "Reversing the sign of each component gives a force equal in size but opposite in direction, so everything cancels.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up Pythagoras for the magnitude",
          "workingLatex": "|\\mathbf{F}| = \\sqrt{(-3)^2 + (-4)^2}",
          "explanation": "The magnitude is the length of F; squaring removes the signs, and its perpendicular components let us use Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the forces balance",
          "workingLatex": "(5 - 2 - 3)\\mathbf{i} + (3 + 1 - 4)\\mathbf{j} = \\mathbf{0}",
          "explanation": "Adding all three forces, including our $\\mathbf{F}$, returns the zero vector, confirming the particle really is in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the magnitude",
          "workingLatex": "|\\mathbf{F}| = \\sqrt{25} = 5\\ \\text{N}",
          "explanation": "Taking the square root gives the size of the balancing force in newtons.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{F} = -3\\mathbf{i} - 4\\mathbf{j}\\ \\text{N}$, with magnitude $5\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "equilibrium",
      "vectors",
      "ij-notation",
      "components"
    ],
    "questionText": "A particle is in equilibrium under two forces $(7\\mathbf{i} - 2\\mathbf{j})\\ \\text{N}$ and $(P\\mathbf{i} + Q\\mathbf{j})\\ \\text{N}$. Find the values of $P$ and $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equilibrium condition",
          "workingLatex": "(7\\mathbf{i} - 2\\mathbf{j}) + (P\\mathbf{i} + Q\\mathbf{j}) = \\mathbf{0}",
          "explanation": "In equilibrium the resultant force is zero, so the two forces acting on the particle must add to the zero vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Group the components together",
          "workingLatex": "(7 + P)\\mathbf{i} + (-2 + Q)\\mathbf{j} = \\mathbf{0}",
          "explanation": "Collecting the i and j terms lets us treat the horizontal and vertical directions separately, since each must balance on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the i-component to zero",
          "workingLatex": "7 + P = 0",
          "explanation": "For the zero vector the total i-component must be zero, giving an equation for P.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for P",
          "workingLatex": "P = -7",
          "explanation": "The second force must have a horizontal part that exactly cancels the first, so it points the opposite way with the same size.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the j-component to zero",
          "workingLatex": "-2 + Q = 0",
          "explanation": "Likewise the total vertical component must be zero, which gives an equation for Q.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for Q",
          "workingLatex": "Q = 2",
          "explanation": "The second force needs an upward part of 2 N to cancel the first force's downward 2 N.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the forces balance",
          "workingLatex": "(7 - 7)\\mathbf{i} + (-2 + 2)\\mathbf{j} = \\mathbf{0}",
          "explanation": "Adding the two forces with $P = -7$ and $Q = 2$ gives the zero vector, confirming equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "(P\\mathbf{i} + Q\\mathbf{j}) = -(7\\mathbf{i} - 2\\mathbf{j})",
          "explanation": "The second force is exactly the negative of the first: equal in magnitude but opposite in direction, which is what balance between just two forces demands.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the results",
          "workingLatex": "P = -7, \\quad Q = 2",
          "explanation": "Together these make the second force the exact opposite of the first, so the particle stays in equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = -7$ and $Q = 2$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "resolving-forces",
      "components",
      "trigonometry",
      "horizontal-vertical"
    ],
    "questionText": "A force of magnitude $20\\ \\text{N}$ acts at $30^\\circ$ above the horizontal. Resolve it into its horizontal and vertical components.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A single force of magnitude 20 N drawn as an arrow pointing up and to the right, making an angle of 30 degrees with the horizontal.",
      "alt": "A 20 N force at 30 degrees above the horizontal."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what resolving means",
          "workingLatex": "\\text{Split } 20\\ \\text{N} \\text{ into horizontal and vertical parts}",
          "explanation": "Resolving replaces one slanted force with two perpendicular forces that together have exactly the same effect, which is much easier to work with.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the horizontal component formula",
          "workingLatex": "F_x = F\\cos\\theta",
          "explanation": "The horizontal side of the right-angled triangle of components is adjacent to the angle, so we use cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "F_x = 20\\cos 30^\\circ",
          "explanation": "Putting in the magnitude and the angle above the horizontal sets up the horizontal part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the exact value of cos 30",
          "workingLatex": "F_x = 20 \\times \\dfrac{\\sqrt{3}}{2} = 10\\sqrt{3}",
          "explanation": "Using the exact value keeps the answer precise before we round it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the horizontal component",
          "workingLatex": "F_x \\approx 17.3\\ \\text{N}",
          "explanation": "This is how strongly the force pushes along the horizontal direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the vertical component formula",
          "workingLatex": "F_y = F\\sin\\theta",
          "explanation": "The vertical side of the triangle is opposite the angle, so we use sine for it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "F_y = 20\\sin 30^\\circ",
          "explanation": "Putting in the magnitude and angle sets up the vertical part.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with Pythagoras",
          "workingLatex": "\\sqrt{(10\\sqrt{3})^2 + 10^2} = \\sqrt{300 + 100} = \\sqrt{400} = 20\\ \\text{N}",
          "explanation": "Recombining the two components must return the original 20 N, which it does — a reassuring check that the resolving is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the vertical component",
          "workingLatex": "F_y = 20 \\times \\dfrac{1}{2} = 10\\ \\text{N}",
          "explanation": "This is how strongly the force pulls in the vertical direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "Horizontal component $10\\sqrt{3} \\approx 17.3\\ \\text{N}$; vertical component $10\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "resolving-forces",
      "newtons-second-law",
      "tension",
      "acceleration"
    ],
    "questionText": "A sledge of mass $10\\ \\text{kg}$ rests on smooth horizontal ice. It is pulled by a rope with tension $25\\ \\text{N}$ at $40^\\circ$ above the horizontal. Find the horizontal acceleration of the sledge.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A sledge on smooth horizontal ice. A rope attached to the sledge is pulled with a tension of 25 N, making an angle of 40 degrees above the horizontal.",
      "alt": "Sledge on ice pulled by a rope at 25 N and 40 degrees above the horizontal."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which forces cause horizontal motion",
          "workingLatex": "\\text{Smooth ice} \\Rightarrow \\text{no friction}",
          "explanation": "Because the ice is smooth there is no friction, so the only horizontal force is the horizontal part of the rope's tension.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the tension horizontally",
          "workingLatex": "T_x = T\\cos\\theta",
          "explanation": "Only the component of the tension along the direction of motion pulls the sledge forward, and that is the horizontal component, using cosine.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "T_x = 25\\cos 40^\\circ",
          "explanation": "Putting in the tension and its angle above the horizontal gives the forward pull.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the horizontal force",
          "workingLatex": "T_x = 25 \\times 0.7660 \\approx 19.15\\ \\text{N}",
          "explanation": "This is the net horizontal force on the sledge, since nothing else acts horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply Newton's second law horizontally",
          "workingLatex": "T_x = ma",
          "explanation": "Along the horizontal direction the net force equals mass times acceleration, which links the pull to the motion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for the acceleration",
          "workingLatex": "a = \\dfrac{T_x}{m}",
          "explanation": "We divide the horizontal force by the mass to find how quickly the sledge speeds up.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "a = \\dfrac{19.15}{10}",
          "explanation": "Putting in the horizontal force and the 10 kg mass sets up the final division.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note why the vertical part is ignored",
          "workingLatex": "\\text{smooth ice, vertical balance} \\Rightarrow \\text{only horizontal force drives motion}",
          "explanation": "The vertical component of the tension is balanced by the weight and the normal reaction, so on smooth ice only the horizontal component produces the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the acceleration",
          "workingLatex": "a \\approx 1.92\\ \\text{m s}^{-2}",
          "explanation": "The vertical part of the tension does not affect horizontal motion here, so this is the sledge's horizontal acceleration.",
          "diagram": null
        }
      ],
      "finalAnswer": "The horizontal acceleration is approximately $1.92\\ \\text{m s}^{-2}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "weight",
      "normal-reaction",
      "lift-problem"
    ],
    "questionText": "A person of mass $60\\ \\text{kg}$ stands on the floor of a lift that is accelerating upward at $1.5\\ \\text{m s}^{-2}$. Find the normal reaction force from the lift floor on the person. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A person standing on the floor of a lift. The normal reaction force R from the floor acts upward on the person, the weight acts downward, and the lift accelerates upward at 1.5 m per second squared.",
      "alt": "Person in a lift with upward reaction R, downward weight, accelerating upward."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the vertical forces on the person",
          "workingLatex": "\\text{Up: } R, \\quad \\text{Down: } W = mg",
          "explanation": "Two forces act on the person: the floor pushes up with the normal reaction R, and gravity pulls down with the weight.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out the weight",
          "workingLatex": "W = mg = 60 \\times 9.8 = 588\\ \\text{N}",
          "explanation": "The weight is mass times gravity; this is the downward pull on the person.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide the direction of the resultant",
          "workingLatex": "\\text{Accelerates upward} \\Rightarrow \\text{resultant is upward}",
          "explanation": "Since the person accelerates upward, the net force must point upward, which means R is larger than the weight.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Newton's second law upward",
          "workingLatex": "R - W = ma",
          "explanation": "Taking up as positive, the net force is R minus the weight, and this equals mass times the upward acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for R",
          "workingLatex": "R = W + ma",
          "explanation": "We add the weight and the force needed to accelerate the person, giving the total upward push the floor must supply.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out the accelerating term",
          "workingLatex": "ma = 60 \\times 1.5 = 90\\ \\text{N}",
          "explanation": "This is the extra force needed on top of supporting the weight, to produce the upward acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the terms together",
          "workingLatex": "R = 588 + 90",
          "explanation": "The floor must both hold the weight up and provide the accelerating force, so we add the two contributions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sanity-check against the weight",
          "workingLatex": "R = 678\\ \\text{N} > mg = 588\\ \\text{N}",
          "explanation": "The reaction exceeds the person’s weight of 588 N because the floor must not only support the weight but also supply the extra upward force that accelerates the person.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the normal reaction",
          "workingLatex": "R = 678\\ \\text{N}",
          "explanation": "The reaction is greater than the 588 N weight, which is why the person feels heavier as the lift accelerates upward.",
          "diagram": null
        }
      ],
      "finalAnswer": "The normal reaction force from the lift floor is $678\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resultant-force",
      "vectors",
      "acceleration",
      "direction"
    ],
    "questionText": "A particle of mass $2\\ \\text{kg}$ is acted on by two forces $(10\\mathbf i + 4\\mathbf j)\\ \\text{N}$ and $(-2\\mathbf i + 6\\mathbf j)\\ \\text{N}$. Find the magnitude and direction (the angle measured to the $\\mathbf i$-direction) of the acceleration of the particle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on the plan.",
          "workingLatex": "\\mathbf F = \\mathbf F_1 + \\mathbf F_2, \\qquad \\mathbf F = m\\mathbf a",
          "explanation": "Several forces act at once, but a particle only responds to their combined effect. So we first add the forces to get one resultant, then use Newton's second law to turn that resultant into an acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the two forces.",
          "workingLatex": "\\mathbf F_1 = 10\\mathbf i + 4\\mathbf j, \\qquad \\mathbf F_2 = -2\\mathbf i + 6\\mathbf j",
          "explanation": "Writing them in component form lets us add the $\\mathbf i$ parts and the $\\mathbf j$ parts separately, which is far cleaner than working with directions and lengths.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the $\\mathbf i$-components.",
          "workingLatex": "10 + (-2) = 8",
          "explanation": "The $\\mathbf i$-direction acts independently of the $\\mathbf j$-direction, so the horizontal pulls simply combine by ordinary addition.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the $\\mathbf j$-components.",
          "workingLatex": "4 + 6 = 10",
          "explanation": "In the same way, the two vertical pulls add together on their own to give the total effect in the $\\mathbf j$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the resultant force.",
          "workingLatex": "\\mathbf F = 8\\mathbf i + 10\\mathbf j \\ \\text{N}",
          "explanation": "These two combined components are exactly the single force that has the same effect as the original pair acting together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply Newton's second law.",
          "workingLatex": "\\mathbf a = \\frac{\\mathbf F}{m}",
          "explanation": "Newton's second law says the resultant force equals mass times acceleration. Rearranging for $\\mathbf a$ lets us find how the particle actually moves.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide the resultant by the mass.",
          "workingLatex": "\\mathbf a = \\frac{8\\mathbf i + 10\\mathbf j}{2} = 4\\mathbf i + 5\\mathbf j \\ \\text{m s}^{-2}",
          "explanation": "Dividing a vector by a number just scales each component, so both the $\\mathbf i$ and $\\mathbf j$ parts are halved to give the acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the magnitude using Pythagoras.",
          "workingLatex": "|\\mathbf a| = \\sqrt{4^2 + 5^2}",
          "explanation": "The two components are at right angles, so the actual size of the acceleration is the hypotenuse of a right-angled triangle with sides $4$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the magnitude.",
          "workingLatex": "|\\mathbf a| = \\sqrt{16 + 25} = \\sqrt{41} \\approx 6.40 \\ \\text{m s}^{-2}",
          "explanation": "Squaring and adding gives $41$, and the square root gives the single number that measures how quickly the speed is changing.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the direction angle.",
          "workingLatex": "\\tan\\theta = \\frac{a_y}{a_x} = \\frac{5}{4}",
          "explanation": "The angle to the $\\mathbf i$-direction is found from the right-angled triangle: the tangent of that angle is the $\\mathbf j$-component over the $\\mathbf i$-component.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for the angle.",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\frac{5}{4}\\right) \\approx 51.3^\\circ",
          "explanation": "Taking the inverse tangent undoes the tangent and delivers the angle. Both components are positive, so the acceleration points up and to the right, confirming this is the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the final answer.",
          "workingLatex": "|\\mathbf a| \\approx 6.40 \\ \\text{m s}^{-2}, \\quad \\theta \\approx 51.3^\\circ",
          "explanation": "We now have both requested quantities: how large the acceleration is and the direction in which it acts relative to $\\mathbf i$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Magnitude $\\approx 6.40 \\ \\text{m s}^{-2}$ (i.e. $\\sqrt{41}\\ \\text{m s}^{-2}$), directed at $\\approx 51.3^\\circ$ above the $\\mathbf i$-direction."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resultant-force",
      "suvat",
      "driving-force",
      "resistance"
    ],
    "questionText": "A car of mass $900\\ \\text{kg}$ accelerates uniformly from rest to $24\\ \\text{m s}^{-1}$ in $12\\ \\text{s}$ along a straight horizontal road. Find the resultant force on the car, and hence the driving force produced by the engine if the total resistance to motion is $300\\ \\text{N}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the motion data.",
          "workingLatex": "u = 0, \\quad v = 24, \\quad t = 12",
          "explanation": "The car starts from rest, so its initial velocity is zero. Listing the known motion quantities shows we can find the acceleration before touching any forces.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a suvat equation for acceleration.",
          "workingLatex": "v = u + at",
          "explanation": "We know the two velocities and the time and want the acceleration, so this is the suvat equation that links exactly those quantities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for the acceleration.",
          "workingLatex": "a = \\frac{v - u}{t}",
          "explanation": "Acceleration is the change in velocity divided by the time taken, which is just this equation solved for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute and evaluate.",
          "workingLatex": "a = \\frac{24 - 0}{12} = 2 \\ \\text{m s}^{-2}",
          "explanation": "The speed rises by $24\\ \\text{m s}^{-1}$ over $12\\ \\text{s}$, so it gains $2\\ \\text{m s}^{-1}$ every second.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply Newton's second law for the resultant.",
          "workingLatex": "F_{\\text{res}} = ma",
          "explanation": "The resultant force is what actually produces the acceleration, so multiplying the mass by the acceleration gives its size directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the resultant force.",
          "workingLatex": "F_{\\text{res}} = 900 \\times 2 = 1800 \\ \\text{N}",
          "explanation": "This $1800\\ \\text{N}$ is the net forward force after every horizontal push and drag has been combined.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the horizontal forces.",
          "workingLatex": "\\text{Driving force } D \\ (\\text{forward}), \\quad \\text{Resistance } 300\\ \\text{N} \\ (\\text{backward})",
          "explanation": "Along the road the engine drives the car forwards while resistance opposes the motion, so the resultant is the difference between them.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write Newton's second law along the road.",
          "workingLatex": "D - 300 = F_{\\text{res}}",
          "explanation": "Taking the direction of motion as positive, the driving force counts positively and the resistance negatively, and together they make the resultant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the resultant found earlier.",
          "workingLatex": "D - 300 = 1800",
          "explanation": "We already know the net force is $1800\\ \\text{N}$, so we can put that in and solve for the one unknown, the driving force.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the driving force.",
          "workingLatex": "D = 1800 + 300 = 2100 \\ \\text{N}",
          "explanation": "The engine must push hard enough both to overcome the $300\\ \\text{N}$ of resistance and to supply the $1800\\ \\text{N}$ needed to accelerate, hence $2100\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answers.",
          "workingLatex": "F_{\\text{res}} = 1800 \\ \\text{N}, \\qquad D = 2100 \\ \\text{N}",
          "explanation": "Both requested quantities are found: the net force driving the acceleration, and the larger engine force needed once resistance is included.",
          "diagram": null
        }
      ],
      "finalAnswer": "Resultant force $= 1800 \\ \\text{N}$; driving force $= 2100 \\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "smooth-plane",
      "acceleration",
      "suvat",
      "distance"
    ],
    "questionText": "A block of mass $5\\ \\text{kg}$ rests on a smooth horizontal plane. It is pushed by a constant horizontal force of $30\\ \\text{N}$. Find the acceleration of the block, and the distance it travels in the first $4\\ \\text{s}$, starting from rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the horizontal forces.",
          "workingLatex": "\\text{Push} = 30\\ \\text{N}, \\quad \\text{Friction} = 0",
          "explanation": "The plane is described as smooth, which means there is no friction. So the only horizontal force acting is the applied push.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply Newton's second law.",
          "workingLatex": "F = ma",
          "explanation": "The net horizontal force equals the mass times the acceleration, and here the net force is simply the $30\\ \\text{N}$ push.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for the acceleration.",
          "workingLatex": "a = \\frac{F}{m}",
          "explanation": "Solving for $a$ isolates the quantity we want in terms of the force we know and the mass we are given.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the acceleration.",
          "workingLatex": "a = \\frac{30}{5} = 6 \\ \\text{m s}^{-2}",
          "explanation": "Dividing the force by the mass shows the block speeds up by $6\\ \\text{m s}^{-1}$ every second.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List the motion data for the distance.",
          "workingLatex": "u = 0, \\quad a = 6, \\quad t = 4",
          "explanation": "The block starts from rest, and because the force is constant the acceleration is constant too, so suvat equations apply over the $4\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the right suvat equation.",
          "workingLatex": "s = ut + \\tfrac{1}{2}at^2",
          "explanation": "We know the initial velocity, the acceleration and the time and want the displacement, so this is the equation that connects exactly those.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values.",
          "workingLatex": "s = (0)(4) + \\tfrac{1}{2}(6)(4)^2",
          "explanation": "Putting the numbers in keeps the two contributions separate: one from the starting speed and one from the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the first term.",
          "workingLatex": "(0)(4) = 0",
          "explanation": "Because the block starts from rest, the part of the distance due to initial speed contributes nothing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the second term.",
          "workingLatex": "\\tfrac{1}{2}(6)(16) = 48",
          "explanation": "Squaring the time gives $16$, and multiplying by half the acceleration gives the whole distance travelled under the push.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the distance.",
          "workingLatex": "s = 48 \\ \\text{m}",
          "explanation": "Adding the two contributions gives the total displacement over the first four seconds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answers.",
          "workingLatex": "a = 6 \\ \\text{m s}^{-2}, \\qquad s = 48 \\ \\text{m}",
          "explanation": "We have both the acceleration produced by the force and the distance covered while that acceleration acts.",
          "diagram": null
        }
      ],
      "finalAnswer": "Acceleration $= 6 \\ \\text{m s}^{-2}$; distance in the first $4\\ \\text{s}$ is $48 \\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resultant-force",
      "friction",
      "acceleration"
    ],
    "questionText": "Two people push a cart of mass $60\\ \\text{kg}$ in the same direction along a straight horizontal path, with horizontal forces of $50\\ \\text{N}$ and $40\\ \\text{N}$. A friction force of $30\\ \\text{N}$ opposes the motion. Find the acceleration of the cart.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a positive direction.",
          "workingLatex": "\\text{Take the direction of motion as positive.}",
          "explanation": "Fixing a positive direction lets us give each force a clear sign, so forces helping the motion are positive and forces opposing it are negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the driving forces.",
          "workingLatex": "50 \\ \\text{N} \\ (\\text{forward}), \\quad 40 \\ \\text{N} \\ (\\text{forward})",
          "explanation": "Both people push the same way, so both of their forces act forwards and count positively.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the two pushes.",
          "workingLatex": "50 + 40 = 90 \\ \\text{N}",
          "explanation": "Since they act in the same direction, the pushes simply add to give the total forward force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Account for friction.",
          "workingLatex": "\\text{Friction} = 30 \\ \\text{N} \\ (\\text{backward})",
          "explanation": "Friction always opposes the motion, so it acts in the negative direction and will be subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the resultant force.",
          "workingLatex": "F_{\\text{res}} = 90 - 30 = 60 \\ \\text{N}",
          "explanation": "The net force is what is left of the forward push once friction has been taken away, and it points forwards.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply Newton's second law.",
          "workingLatex": "F_{\\text{res}} = ma",
          "explanation": "The resultant force is exactly what produces the acceleration, so we relate the two through Newton's second law.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for the acceleration.",
          "workingLatex": "a = \\frac{F_{\\text{res}}}{m}",
          "explanation": "Dividing the net force by the mass isolates the acceleration we are asked to find.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the numbers.",
          "workingLatex": "a = \\frac{60}{60}",
          "explanation": "Putting in the resultant force and the mass of the cart leaves a single division to carry out.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the acceleration.",
          "workingLatex": "a = 1 \\ \\text{m s}^{-2}",
          "explanation": "The cart speeds up by $1\\ \\text{m s}^{-1}$ every second in the direction it is being pushed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer.",
          "workingLatex": "a = 1 \\ \\text{m s}^{-2} \\ \\text{in the direction of motion}",
          "explanation": "This is the acceleration produced by the combined pushes once friction has been overcome.",
          "diagram": null
        }
      ],
      "finalAnswer": "Acceleration $= 1 \\ \\text{m s}^{-2}$ in the direction of the push."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "vectors",
      "constant-force",
      "suvat",
      "speed"
    ],
    "questionText": "A constant force $(12\\mathbf i - 5\\mathbf j)\\ \\text{N}$ acts on a particle of mass $1\\ \\text{kg}$ which is initially at rest. Find the speed of the particle after $3\\ \\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply Newton's second law.",
          "workingLatex": "\\mathbf a = \\frac{\\mathbf F}{m}",
          "explanation": "A constant force produces a constant acceleration, and we get it by dividing the force vector by the mass.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the acceleration vector.",
          "workingLatex": "\\mathbf a = \\frac{12\\mathbf i - 5\\mathbf j}{1} = 12\\mathbf i - 5\\mathbf j \\ \\text{m s}^{-2}",
          "explanation": "Because the mass is $1\\ \\text{kg}$, the acceleration has the same numerical components as the force.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the magnitude of the acceleration.",
          "workingLatex": "|\\mathbf a| = \\sqrt{12^2 + (-5)^2}",
          "explanation": "The two components are perpendicular, so the actual size of the acceleration is the hypotenuse of a right-angled triangle with sides $12$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the magnitude.",
          "workingLatex": "|\\mathbf a| = \\sqrt{144 + 25} = \\sqrt{169} = 13 \\ \\text{m s}^{-2}",
          "explanation": "This tidy result of $13$ tells us how fast the speed grows each second in the fixed direction of the force.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the initial condition.",
          "workingLatex": "u = 0",
          "explanation": "The particle starts at rest, so its initial speed is zero and all of its final speed comes from the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the suvat equation for speed.",
          "workingLatex": "v = u + at",
          "explanation": "Since the acceleration is constant and along a fixed line, the speed builds up linearly and we can use this equation with magnitudes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values.",
          "workingLatex": "v = 0 + 13 \\times 3",
          "explanation": "Putting in the acceleration magnitude and the time gives the speed reached after three seconds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the speed.",
          "workingLatex": "v = 39 \\ \\text{m s}^{-1}",
          "explanation": "Multiplying $13\\ \\text{m s}^{-2}$ by $3\\ \\text{s}$ gives the speed the particle has gained from rest.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check using the velocity vector.",
          "workingLatex": "\\mathbf v = \\mathbf a t = 3(12\\mathbf i - 5\\mathbf j) = 36\\mathbf i - 15\\mathbf j",
          "explanation": "As a check, we can scale the acceleration by the time to get the velocity vector directly, which should have the same magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the magnitude of the velocity.",
          "workingLatex": "|\\mathbf v| = \\sqrt{36^2 + 15^2} = \\sqrt{1521} = 39 \\ \\text{m s}^{-1}",
          "explanation": "The vector route gives the same $39\\ \\text{m s}^{-1}$, confirming our answer is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer.",
          "workingLatex": "v = 39 \\ \\text{m s}^{-1}",
          "explanation": "This is the speed of the particle three seconds after the force begins to act.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed after $3\\ \\text{s}$ is $39 \\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "equilibrium",
      "vectors",
      "resultant-force",
      "balancing-forces"
    ],
    "questionText": "A particle is in equilibrium under the action of three forces $(3\\mathbf i + 7\\mathbf j)\\ \\text{N}$, $(-5\\mathbf i + 2\\mathbf j)\\ \\text{N}$ and $\\mathbf F$. Find $\\mathbf F$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for equilibrium.",
          "workingLatex": "\\mathbf F_1 + \\mathbf F_2 + \\mathbf F = \\mathbf 0",
          "explanation": "A particle in equilibrium has zero resultant force, so all the forces acting on it must add up to the zero vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to isolate the unknown force.",
          "workingLatex": "\\mathbf F = -(\\mathbf F_1 + \\mathbf F_2)",
          "explanation": "The unknown force must exactly cancel the combined effect of the other two, so it is the negative of their sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the two known forces.",
          "workingLatex": "\\mathbf F_1 = 3\\mathbf i + 7\\mathbf j, \\qquad \\mathbf F_2 = -5\\mathbf i + 2\\mathbf j",
          "explanation": "Listing them in component form lets us combine the $\\mathbf i$ parts and the $\\mathbf j$ parts separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the $\\mathbf i$-components.",
          "workingLatex": "3 + (-5) = -2",
          "explanation": "The horizontal parts combine on their own, giving a net pull of $-2$ in the $\\mathbf i$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the $\\mathbf j$-components.",
          "workingLatex": "7 + 2 = 9",
          "explanation": "Likewise the vertical parts add independently, giving a net pull of $9$ in the $\\mathbf j$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the sum of the two known forces.",
          "workingLatex": "\\mathbf F_1 + \\mathbf F_2 = -2\\mathbf i + 9\\mathbf j",
          "explanation": "This is the combined force of the first two, which the third force must counteract completely.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Negate the sum.",
          "workingLatex": "\\mathbf F = -(-2\\mathbf i + 9\\mathbf j)",
          "explanation": "For balance, $\\mathbf F$ must point exactly opposite to that combined force and be the same size, so we change the sign of each component.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to get the force.",
          "workingLatex": "\\mathbf F = 2\\mathbf i - 9\\mathbf j \\ \\text{N}",
          "explanation": "Distributing the minus sign flips both components, giving the force needed to hold the particle in equilibrium.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the balance.",
          "workingLatex": "(-2\\mathbf i + 9\\mathbf j) + (2\\mathbf i - 9\\mathbf j) = \\mathbf 0",
          "explanation": "Adding our answer back to the other two forces gives the zero vector, confirming the particle is indeed in equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf F = 2\\mathbf i - 9\\mathbf j \\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "resolving-forces",
      "resultant-force",
      "trigonometry",
      "magnitude"
    ],
    "questionText": "Two forces act on a particle: a force of $6\\ \\text{N}$ due east, and a force of $8\\ \\text{N}$ acting at $60^\\circ$ above the eastward direction. By resolving into perpendicular components, find the magnitude of the resultant force.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A particle at the origin with two forces acting on it. One force of 6 N points horizontally to the right (due east). A second force of 8 N points up and to the right, at an angle of 60 degrees measured anticlockwise from the eastward direction.",
      "alt": "A 6 N force due east and an 8 N force at 60 degrees above east, both acting from a single point."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up perpendicular directions.",
          "workingLatex": "\\mathbf i = \\text{east}, \\qquad \\mathbf j = \\text{north}",
          "explanation": "Resolving means splitting each force into two perpendicular directions. Taking east and north as our axes lets us handle the two forces with the same reference.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the $6\\ \\text{N}$ force.",
          "workingLatex": "6\\ \\text{N due east} \\;\\Rightarrow\\; (6, \\ 0)",
          "explanation": "This force points straight along the eastward axis, so all of it lies in the $\\mathbf i$-direction and none in the $\\mathbf j$-direction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve the eastward part of the $8\\ \\text{N}$ force.",
          "workingLatex": "8\\cos 60^\\circ = 8 \\times \\tfrac{1}{2} = 4",
          "explanation": "The component along east is the adjacent side of the angle, found by multiplying the force by the cosine of $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Resolve the northward part of the $8\\ \\text{N}$ force.",
          "workingLatex": "8\\sin 60^\\circ = 8 \\times \\tfrac{\\sqrt3}{2} = 4\\sqrt3 \\approx 6.93",
          "explanation": "The component along north is the opposite side of the angle, found by multiplying the force by the sine of $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the eastward components.",
          "workingLatex": "R_x = 6 + 4 = 10",
          "explanation": "The total force to the east is just the sum of the eastward parts of the two forces.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the northward components.",
          "workingLatex": "R_y = 0 + 4\\sqrt3 = 4\\sqrt3 \\approx 6.93",
          "explanation": "Only the $8\\ \\text{N}$ force has a northward part, so the total in that direction comes entirely from it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the magnitude with Pythagoras.",
          "workingLatex": "|\\mathbf R| = \\sqrt{R_x^2 + R_y^2} = \\sqrt{10^2 + (4\\sqrt3)^2}",
          "explanation": "The east and north totals are at right angles, so the size of the resultant is the hypotenuse of the triangle they form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square the components.",
          "workingLatex": "10^2 = 100, \\qquad (4\\sqrt3)^2 = 16 \\times 3 = 48",
          "explanation": "Squaring each component prepares them to be added. Note $(4\\sqrt3)^2$ becomes $48$ once the square root is squared away.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the squares.",
          "workingLatex": "100 + 48 = 148",
          "explanation": "Adding the squared components gives the square of the resultant's length.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the square root.",
          "workingLatex": "|\\mathbf R| = \\sqrt{148} \\approx 12.2 \\ \\text{N}",
          "explanation": "The square root undoes the squaring and gives the actual size of the combined force.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer.",
          "workingLatex": "|\\mathbf R| \\approx 12.2 \\ \\text{N}",
          "explanation": "This single force has the same effect as the $6\\ \\text{N}$ and $8\\ \\text{N}$ forces acting together.",
          "diagram": null
        }
      ],
      "finalAnswer": "Magnitude of the resultant $= \\sqrt{148} \\approx 12.2 \\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "friction",
      "resultant-force",
      "rough-surface"
    ],
    "questionText": "A box of mass $5\\ \\text{kg}$ is pulled along a rough horizontal floor by a horizontal force of $25\\ \\text{N}$ and accelerates at $2\\ \\text{m s}^{-2}$. Find the magnitude of the friction force between the box and the floor.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a positive direction.",
          "workingLatex": "\\text{Take the direction of motion (the pull) as positive.}",
          "explanation": "Setting a positive direction lets us assign signs cleanly: the pull is positive and the friction, opposing the motion, is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the horizontal forces.",
          "workingLatex": "\\text{Pull} = 25\\ \\text{N} \\ (\\text{forward}), \\quad \\text{Friction} = F \\ (\\text{backward})",
          "explanation": "Only two horizontal forces act: the applied pull and the friction that resists it. The friction is the unknown we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write Newton's second law along the floor.",
          "workingLatex": "25 - F = ma",
          "explanation": "The net forward force is the pull minus the friction, and this net force is what produces the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the $ma$ term.",
          "workingLatex": "ma = 5 \\times 2 = 10 \\ \\text{N}",
          "explanation": "Multiplying the mass by the given acceleration tells us the net force required to produce that acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the equation.",
          "workingLatex": "25 - F = 10",
          "explanation": "Replacing $ma$ with its value leaves a simple equation with only the friction force unknown.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for the friction.",
          "workingLatex": "F = 25 - 10",
          "explanation": "Moving the terms across shows the friction is the part of the pull that does not go into accelerating the box.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the friction force.",
          "workingLatex": "F = 15 \\ \\text{N}",
          "explanation": "Of the $25\\ \\text{N}$ pull, $10\\ \\text{N}$ produces the acceleration and the remaining $15\\ \\text{N}$ is used up overcoming friction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the direction.",
          "workingLatex": "F = 15 \\ \\text{N opposing the motion}",
          "explanation": "Friction always acts against the direction of sliding, so this $15\\ \\text{N}$ points backwards along the floor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer.",
          "workingLatex": "F = 15 \\ \\text{N}",
          "explanation": "This is the size of the friction force between the box and the rough floor.",
          "diagram": null
        }
      ],
      "finalAnswer": "Friction force $= 15 \\ \\text{N}$ (acting against the motion)."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "simultaneous-equations",
      "mass",
      "resultant-force"
    ],
    "questionText": "A resultant force $F$ gives a particle an acceleration of $4\\ \\text{m s}^{-2}$. When the force is increased by $6\\ \\text{N}$, the acceleration becomes $6\\ \\text{m s}^{-2}$. Find the mass of the particle and the original force $F$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State Newton's second law for both situations.",
          "workingLatex": "F = ma",
          "explanation": "The same particle obeys $F = ma$ in each case, so we can write one equation for each acceleration and solve them together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for the first case.",
          "workingLatex": "F = 4m",
          "explanation": "With the original force the acceleration is $4\\ \\text{m s}^{-2}$, so the force equals the mass times $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the equation for the second case.",
          "workingLatex": "F + 6 = 6m",
          "explanation": "Increasing the force by $6\\ \\text{N}$ raises the acceleration to $6\\ \\text{m s}^{-2}$, so the new force equals the mass times $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise two equations in two unknowns.",
          "workingLatex": "\\begin{cases} F = 4m \\\\ F + 6 = 6m \\end{cases}",
          "explanation": "We have two relationships linking the unknown force and mass, which is enough to pin both of them down.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract the first equation from the second.",
          "workingLatex": "(F + 6) - F = 6m - 4m",
          "explanation": "Subtracting eliminates the unknown $F$, leaving a single equation in the mass alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify both sides.",
          "workingLatex": "6 = 2m",
          "explanation": "The $F$ terms cancel and the $m$ terms combine, giving a clean relationship for the mass.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the mass.",
          "workingLatex": "m = \\frac{6}{2} = 3 \\ \\text{kg}",
          "explanation": "Dividing both sides by $2$ gives the mass of the particle directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute back to find the force.",
          "workingLatex": "F = 4m = 4 \\times 3",
          "explanation": "Putting the mass into the first equation recovers the original force.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the original force.",
          "workingLatex": "F = 12 \\ \\text{N}",
          "explanation": "This is the resultant force that produced the first acceleration of $4\\ \\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the second case.",
          "workingLatex": "F + 6 = 18 = 6 \\times 3 \\ \\checkmark",
          "explanation": "The increased force of $18\\ \\text{N}$ divided by the mass of $3\\ \\text{kg}$ gives $6\\ \\text{m s}^{-2}$, matching the data and confirming our answers.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answers.",
          "workingLatex": "m = 3 \\ \\text{kg}, \\qquad F = 12 \\ \\text{N}",
          "explanation": "Both requested quantities are found and consistent with the two given accelerations.",
          "diagram": null
        }
      ],
      "finalAnswer": "Mass $= 3 \\ \\text{kg}$; original force $F = 12 \\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "deceleration",
      "braking-force",
      "resultant-force"
    ],
    "questionText": "A car of mass $1500\\ \\text{kg}$ brakes and decelerates uniformly at $5\\ \\text{m s}^{-2}$. Find the magnitude of the resultant braking force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the given quantities.",
          "workingLatex": "m = 1500 \\ \\text{kg}, \\quad \\text{deceleration} = 5 \\ \\text{m s}^{-2}",
          "explanation": "We are told the mass of the car and how quickly it is slowing down, which is all we need to find the force.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the deceleration.",
          "workingLatex": "|a| = 5 \\ \\text{m s}^{-2}",
          "explanation": "A deceleration is an acceleration acting opposite to the motion; its magnitude is $5\\ \\text{m s}^{-2}$, which is what matters for the size of the force.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State Newton's second law.",
          "workingLatex": "F = ma",
          "explanation": "The resultant force on the car equals its mass times its acceleration, and this is what the brakes provide.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work with magnitudes.",
          "workingLatex": "|F| = m\\,|a|",
          "explanation": "Since we only want the size of the braking force, we multiply the mass by the magnitude of the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values.",
          "workingLatex": "|F| = 1500 \\times 5",
          "explanation": "Putting in the car's mass and the deceleration magnitude leaves a single multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the force.",
          "workingLatex": "|F| = 7500 \\ \\text{N}",
          "explanation": "Multiplying gives the size of the net force needed to slow the car at this rate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Attach the correct units.",
          "workingLatex": "|F| = 7500 \\ \\text{N}",
          "explanation": "Mass in kilograms times acceleration in metres per second squared gives force in newtons, so the answer is in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the direction.",
          "workingLatex": "\\text{Force acts backwards, opposing the motion.}",
          "explanation": "Because the car is slowing, the resultant braking force points opposite to the direction of travel, which is why it reduces the speed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer.",
          "workingLatex": "|F| = 7500 \\ \\text{N}",
          "explanation": "This is the magnitude of the resultant braking force acting on the car.",
          "diagram": null
        }
      ],
      "finalAnswer": "Resultant braking force $= 7500 \\ \\text{N}$ (directed opposite to the motion)."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "vectors",
      "acceleration",
      "magnitude",
      "direction"
    ],
    "questionText": "A particle of mass $4\\ \\text{kg}$ is acted on by a resultant force $(16\\mathbf{i} - 12\\mathbf{j})\\ \\text{N}$. Find the magnitude of the acceleration and the angle it makes with the direction of $\\mathbf{i}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State Newton's second law in vector form.",
          "workingLatex": "\\mathbf{F} = m\\mathbf{a}",
          "explanation": "A single particle accelerates in the exact direction of the resultant force acting on it, so once we know the force and the mass we can recover the acceleration directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the known quantities.",
          "workingLatex": "m = 4\\ \\text{kg}, \\qquad \\mathbf{F} = (16\\mathbf{i} - 12\\mathbf{j})\\ \\text{N}",
          "explanation": "Listing what we have keeps the vector components clearly separated, which matters because we will treat the $\\mathbf{i}$ and $\\mathbf{j}$ directions independently.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to make the acceleration the subject.",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathbf{F}}{m}",
          "explanation": "Dividing the force by the mass is just undoing the multiplication in $\\mathbf{F}=m\\mathbf{a}$; the mass is a scalar, so it divides each component equally.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide each component by the mass.",
          "workingLatex": "\\mathbf{a} = \\tfrac{1}{4}(16\\mathbf{i} - 12\\mathbf{j}) = (4\\mathbf{i} - 3\\mathbf{j})\\ \\text{m s}^{-2}",
          "explanation": "Sharing the division across the components is valid because a scalar scales a vector by acting on each part separately, giving the acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the magnitude using Pythagoras.",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{a_x^{\\,2} + a_y^{\\,2}}",
          "explanation": "The two components are at right angles, so the size of the acceleration is the hypotenuse of a right-angled triangle formed by them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the components.",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{4^{2} + (-3)^{2}} = \\sqrt{16 + 9}",
          "explanation": "Squaring removes the sign, so the negative $\\mathbf{j}$ component contributes the same amount to the length as a positive one would.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to find the magnitude.",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{25} = 5\\ \\text{m s}^{-2}",
          "explanation": "This is the classic 3-4-5 triangle, giving a clean value for the size of the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the angle from the components.",
          "workingLatex": "\\tan\\theta = \\dfrac{a_y}{a_x} = \\dfrac{-3}{4}",
          "explanation": "The angle a vector makes with the $\\mathbf{i}$ direction is fixed by the ratio of its vertical component to its horizontal component.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the size of the angle.",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\dfrac{3}{4}\\right) = 36.9^\\circ",
          "explanation": "We take the inverse tangent of the numerical ratio to find how far the acceleration is turned away from the $\\mathbf{i}$ direction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the direction.",
          "workingLatex": "a_x > 0,\\ a_y < 0 \\;\\Rightarrow\\; 36.9^\\circ \\text{ below the } \\mathbf{i} \\text{ direction}",
          "explanation": "The positive $\\mathbf{i}$ and negative $\\mathbf{j}$ components place the acceleration in the fourth quadrant, so it points below the horizontal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|\\mathbf{a}| = 5\\ \\text{m s}^{-2}$, directed at $36.9^\\circ$ below the $\\mathbf{i}$ direction (i.e. $\\theta = -36.9^\\circ$)."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "tension",
      "cable",
      "lift",
      "newtons-second-law",
      "vertical-motion"
    ],
    "questionText": "A crate of mass $20\\ \\text{kg}$ is raised vertically by a cable and accelerates upward at $2\\ \\text{m s}^{-2}$. Find the tension in the cable. (Take $g = 9.8\\ \\text{m s}^{-2}$.)",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A crate hangs from a single vertical cable attached above it. An upward arrow labelled T marks the cable tension, a downward arrow labelled mg marks the weight, and an upward arrow labelled a = 2 m s^-2 shows the direction of acceleration.",
      "alt": "Crate on a vertical cable with tension up, weight down, accelerating upward."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the forces on the crate.",
          "workingLatex": "\\text{Tension } T \\text{ (up)}, \\qquad \\text{Weight } mg \\text{ (down)}",
          "explanation": "Only two vertical forces act: the cable pulls up and gravity pulls down. Their imbalance is what accelerates the crate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the weight of the crate.",
          "workingLatex": "W = mg = 20 \\times 9.8 = 196\\ \\text{N}",
          "explanation": "Weight is the pull of gravity on the mass; we need its value because it opposes the tension.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a positive direction.",
          "workingLatex": "\\text{Take upward as positive (direction of acceleration).}",
          "explanation": "Choosing up as positive matches the direction of motion, so the acceleration comes out positive and signs stay intuitive.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Newton's second law vertically.",
          "workingLatex": "T - mg = ma",
          "explanation": "The resultant upward force (tension minus weight) equals mass times acceleration; this is Newton's second law along the vertical line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to make the tension the subject.",
          "workingLatex": "T = mg + ma = m(g + a)",
          "explanation": "The tension must both hold up the weight and provide the extra force to accelerate the crate, so it is larger than the weight alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values.",
          "workingLatex": "T = 20(9.8 + 2)",
          "explanation": "We insert the mass and add the acceleration to $g$ inside the bracket, combining the two demands on the cable.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify inside the bracket.",
          "workingLatex": "T = 20 \\times 11.8",
          "explanation": "Adding $g$ and $a$ first keeps the arithmetic tidy before the final multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the tension.",
          "workingLatex": "T = 236\\ \\text{N}",
          "explanation": "This is the force the cable must exert to lift the crate while speeding it up.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the result.",
          "workingLatex": "236\\ \\text{N} > 196\\ \\text{N} = W",
          "explanation": "Because the crate is accelerating upward, the tension is greater than the weight, which is exactly what we expect physically.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 236\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "tension",
      "cable",
      "lowering",
      "newtons-second-law",
      "vertical-motion"
    ],
    "questionText": "A crate of mass $20\\ \\text{kg}$ is lowered vertically by a cable and accelerates downward at $2\\ \\text{m s}^{-2}$. Find the tension in the cable. (Take $g = 9.8\\ \\text{m s}^{-2}$.)",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A crate hangs from a single vertical cable. An upward arrow labelled T marks the cable tension, a downward arrow labelled mg marks the weight, and a downward arrow labelled a = 2 m s^-2 shows the direction of acceleration.",
      "alt": "Crate on a vertical cable with tension up, weight down, accelerating downward."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the forces on the crate.",
          "workingLatex": "\\text{Tension } T \\text{ (up)}, \\qquad \\text{Weight } mg \\text{ (down)}",
          "explanation": "The same two vertical forces act, but now the crate accelerates downward, so gravity must win over the tension.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the weight of the crate.",
          "workingLatex": "W = mg = 20 \\times 9.8 = 196\\ \\text{N}",
          "explanation": "We compute the downward gravitational pull, which we will compare with the upward tension.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a positive direction.",
          "workingLatex": "\\text{Take downward as positive (direction of acceleration).}",
          "explanation": "Matching the positive direction to the motion keeps the acceleration positive and the signs easy to read.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Newton's second law vertically.",
          "workingLatex": "mg - T = ma",
          "explanation": "With downward positive, the resultant is the weight minus the tension, and this net downward force produces the downward acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to make the tension the subject.",
          "workingLatex": "T = mg - ma = m(g - a)",
          "explanation": "The cable now only needs to partly support the crate, since gravity is doing some of the accelerating, so the tension is less than the weight.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values.",
          "workingLatex": "T = 20(9.8 - 2)",
          "explanation": "We subtract the acceleration from $g$ inside the bracket because the downward acceleration reduces how hard the cable must pull.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify inside the bracket.",
          "workingLatex": "T = 20 \\times 7.8",
          "explanation": "Combining $g$ and $a$ first simplifies the final multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the tension.",
          "workingLatex": "T = 156\\ \\text{N}",
          "explanation": "This is the reduced force in the cable while the crate is being let down with acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sanity check the result.",
          "workingLatex": "156\\ \\text{N} < 196\\ \\text{N} = W",
          "explanation": "Because the crate accelerates downward, the tension is smaller than the weight, which matches our physical expectation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T = 156\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resistance",
      "acceleration",
      "suvat",
      "resultant-force"
    ],
    "questionText": "A boat of mass $500\\ \\text{kg}$ has a forward engine thrust of $800\\ \\text{N}$ and experiences a water resistance of $300\\ \\text{N}$. Find its acceleration and the distance it travels to reach a speed of $10\\ \\text{m s}^{-1}$ from rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the horizontal forces.",
          "workingLatex": "\\text{Thrust } 800\\ \\text{N (forward)}, \\quad \\text{Resistance } 300\\ \\text{N (backward)}",
          "explanation": "The engine drives the boat forward while the water pushes back; the difference between them is what accelerates the boat.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the resultant forward force.",
          "workingLatex": "F = 800 - 300 = 500\\ \\text{N}",
          "explanation": "Only the net force matters for acceleration, so we subtract the opposing resistance from the driving thrust.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law.",
          "workingLatex": "F = ma \\;\\Rightarrow\\; a = \\dfrac{F}{m}",
          "explanation": "The resultant force and the mass together fix the acceleration, so we divide one by the other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the acceleration.",
          "workingLatex": "a = \\dfrac{500}{500} = 1\\ \\text{m s}^{-2}",
          "explanation": "A net force of $500\\ \\text{N}$ on $500\\ \\text{kg}$ gives a neat acceleration of one metre per second squared.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List the motion quantities for the second part.",
          "workingLatex": "u = 0, \\quad v = 10\\ \\text{m s}^{-1}, \\quad a = 1\\ \\text{m s}^{-2}, \\quad s = ?",
          "explanation": "Because the resultant force is constant, the acceleration is constant, so the suvat equations apply.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the suvat equation without time.",
          "workingLatex": "v^{2} = u^{2} + 2as",
          "explanation": "We are not told or asked about time, so we pick the equation linking speed, acceleration and distance directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the known values.",
          "workingLatex": "10^{2} = 0^{2} + 2(1)s",
          "explanation": "Putting in the initial and final speeds and the acceleration leaves distance as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the equation.",
          "workingLatex": "100 = 2s",
          "explanation": "Squaring the final speed and clearing the zero initial speed reduces the equation to a simple linear form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the distance.",
          "workingLatex": "s = \\dfrac{100}{2} = 50\\ \\text{m}",
          "explanation": "Dividing gives the distance the boat covers while building up to the required speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 1\\ \\text{m s}^{-2}$ and the boat travels $50\\ \\text{m}$ to reach $10\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "resultant-force",
      "perpendicular-forces",
      "pythagoras",
      "newtons-second-law",
      "acceleration"
    ],
    "questionText": "A particle of mass $2\\ \\text{kg}$ is acted on by two forces: $10\\ \\text{N}$ due east and $24\\ \\text{N}$ due north. Find the magnitude of the resultant force and the magnitude of the acceleration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise that the two forces are perpendicular.",
          "workingLatex": "10\\ \\text{N (east)} \\perp 24\\ \\text{N (north)}",
          "explanation": "East and north are at right angles, so the two forces form the two shorter sides of a right-angled triangle and can be combined with Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the magnitude of the resultant.",
          "workingLatex": "F = \\sqrt{10^{2} + 24^{2}}",
          "explanation": "The resultant is the diagonal of the rectangle built from the two forces, which is the hypotenuse of the right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square each component.",
          "workingLatex": "F = \\sqrt{100 + 576}",
          "explanation": "Squaring each force gives the areas that add under the square root to produce the length of the resultant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the squares.",
          "workingLatex": "F = \\sqrt{676}",
          "explanation": "Combining the two squared terms readies us to take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the square root.",
          "workingLatex": "F = 26\\ \\text{N}",
          "explanation": "This is a 5-12-13 triangle scaled by two, giving a clean value for the size of the resultant force.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the direction of the resultant.",
          "workingLatex": "\\tan\\theta = \\dfrac{24}{10} \\;\\Rightarrow\\; \\theta = 67.4^\\circ \\text{ N of E}",
          "explanation": "The ratio of the north component to the east component fixes the bearing of the resultant, confirming it leans strongly northward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply Newton's second law.",
          "workingLatex": "F = ma \\;\\Rightarrow\\; a = \\dfrac{F}{m}",
          "explanation": "The acceleration is produced by the resultant force, so dividing the resultant by the mass gives its size.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the magnitude of the acceleration.",
          "workingLatex": "a = \\dfrac{26}{2} = 13\\ \\text{m s}^{-2}",
          "explanation": "Dividing the $26\\ \\text{N}$ resultant by the $2\\ \\text{kg}$ mass gives the acceleration's magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the direction of the acceleration.",
          "workingLatex": "\\mathbf{a} \\parallel \\mathbf{F}",
          "explanation": "Acceleration always points along the resultant force, so it too is directed $67.4^\\circ$ north of east.",
          "diagram": null
        }
      ],
      "finalAnswer": "Resultant force $= 26\\ \\text{N}$ and acceleration magnitude $= 13\\ \\text{m s}^{-2}$ (both directed $67.4^\\circ$ north of east)."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "vectors",
      "suvat",
      "acceleration",
      "speed"
    ],
    "questionText": "A particle of mass $3\\ \\text{kg}$ has a resultant force $(9\\mathbf{i} + 12\\mathbf{j})\\ \\text{N}$ acting on it and starts from rest. Find its speed after $5\\ \\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State Newton's second law in vector form.",
          "workingLatex": "\\mathbf{F} = m\\mathbf{a} \\;\\Rightarrow\\; \\mathbf{a} = \\dfrac{\\mathbf{F}}{m}",
          "explanation": "The resultant force fixes the acceleration; dividing by the mass gives the acceleration vector directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the known quantities.",
          "workingLatex": "m = 3\\ \\text{kg}, \\qquad \\mathbf{F} = (9\\mathbf{i} + 12\\mathbf{j})\\ \\text{N}",
          "explanation": "Keeping the components explicit lets us divide the force cleanly into its acceleration components.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the acceleration vector.",
          "workingLatex": "\\mathbf{a} = \\tfrac{1}{3}(9\\mathbf{i} + 12\\mathbf{j}) = (3\\mathbf{i} + 4\\mathbf{j})\\ \\text{m s}^{-2}",
          "explanation": "Dividing each component by the mass gives the acceleration in vector form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the magnitude of the acceleration.",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{3^{2} + 4^{2}} = \\sqrt{25} = 5\\ \\text{m s}^{-2}",
          "explanation": "Since the force is constant, so is the acceleration; its magnitude comes from the perpendicular components via Pythagoras.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note that constant force means constant acceleration.",
          "workingLatex": "\\mathbf{F} \\text{ constant} \\;\\Rightarrow\\; \\mathbf{a} \\text{ constant}",
          "explanation": "A fixed force produces a fixed acceleration, which is exactly the condition that lets us use the suvat equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "List the motion quantities.",
          "workingLatex": "u = 0, \\quad a = 5\\ \\text{m s}^{-2}, \\quad t = 5\\ \\text{s}",
          "explanation": "The particle starts from rest, and the acceleration acts in a fixed direction, so its speed grows steadily from zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose the suvat equation for velocity.",
          "workingLatex": "v = u + at",
          "explanation": "This equation links the changing speed to the acceleration and the elapsed time, which is exactly what we need.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values.",
          "workingLatex": "v = 0 + 5 \\times 5",
          "explanation": "Starting from rest removes the initial term, leaving the product of acceleration and time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the speed.",
          "workingLatex": "v = 25\\ \\text{m s}^{-1}",
          "explanation": "This is the magnitude of the velocity after five seconds, i.e. the particle's speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Optional check using the velocity vector.",
          "workingLatex": "\\mathbf{v} = (3\\mathbf{i}+4\\mathbf{j})\\times 5 = (15\\mathbf{i}+20\\mathbf{j}), \\quad |\\mathbf{v}| = \\sqrt{15^2+20^2} = 25",
          "explanation": "Building the velocity vector and taking its magnitude gives the same speed, confirming the answer is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed after $5\\ \\text{s}$ is $25\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "resolving-forces",
      "tension",
      "smooth-surface",
      "newtons-second-law",
      "acceleration"
    ],
    "questionText": "A sledge of mass $15\\ \\text{kg}$ rests on smooth horizontal ice and is pulled by a rope with tension $50\\ \\text{N}$ at $20^\\circ$ above the horizontal. Find its horizontal acceleration.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A sledge sits on a horizontal ice surface. A rope leaves the sledge at 20 degrees above the horizontal, pulling up and to the right, labelled with tension 50 N and angle 20 degrees. The weight acts down and the normal reaction acts up from the ice.",
      "alt": "Sledge on smooth ice pulled by a rope inclined at 20 degrees to the horizontal."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which direction produces the acceleration.",
          "workingLatex": "\\text{Horizontal motion along the ice}",
          "explanation": "The sledge moves horizontally across the ice, so only the horizontal part of the tension drives it forward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the tension into horizontal and vertical parts.",
          "workingLatex": "T_x = T\\cos 20^\\circ, \\qquad T_y = T\\sin 20^\\circ",
          "explanation": "A rope pulling at an angle acts partly forwards and partly upwards; the cosine component points along the motion and the sine component lifts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the effect of the smooth ice.",
          "workingLatex": "\\text{Smooth} \\;\\Rightarrow\\; \\text{no friction force}",
          "explanation": "Because the ice is smooth there is no horizontal resistance, so the horizontal tension component is the only horizontal force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the horizontal component of the tension.",
          "workingLatex": "T_x = 50\\cos 20^\\circ",
          "explanation": "This is the part of the pull that actually accelerates the sledge along the ice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the horizontal component.",
          "workingLatex": "T_x = 50 \\times 0.9397 = 46.98\\ \\text{N}",
          "explanation": "Using $\\cos 20^\\circ \\approx 0.9397$ gives the numerical size of the forward force.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply Newton's second law horizontally.",
          "workingLatex": "T\\cos 20^\\circ = ma",
          "explanation": "The single horizontal force equals mass times horizontal acceleration, which is Newton's second law along the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for the acceleration.",
          "workingLatex": "a = \\dfrac{T\\cos 20^\\circ}{m} = \\dfrac{46.98}{15}",
          "explanation": "Dividing the forward force by the mass isolates the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the acceleration.",
          "workingLatex": "a = 3.13\\ \\text{m s}^{-2}",
          "explanation": "This is the horizontal acceleration of the sledge, rounded to three significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on the vertical direction.",
          "workingLatex": "R + T\\sin 20^\\circ = mg \\;\\Rightarrow\\; \\text{no vertical motion}",
          "explanation": "The upward tension component and the normal reaction together balance the weight, so the sledge stays on the ice and the vertical forces do not affect the horizontal acceleration.",
          "diagram": null
        }
      ],
      "finalAnswer": "Horizontal acceleration $a \\approx 3.13\\ \\text{m s}^{-2}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "newtons-second-law",
      "vectors",
      "change-in-velocity",
      "resultant-force",
      "acceleration"
    ],
    "questionText": "A particle of mass $2\\ \\text{kg}$ changes its velocity from $(\\mathbf{i} + 2\\mathbf{j})\\ \\text{m s}^{-1}$ to $(5\\mathbf{i} - 2\\mathbf{j})\\ \\text{m s}^{-1}$ in $2\\ \\text{s}$. Find the constant resultant force acting on it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise that a constant force gives constant acceleration.",
          "workingLatex": "\\mathbf{F} \\text{ constant} \\;\\Rightarrow\\; \\mathbf{a} \\text{ constant}",
          "explanation": "Since the force is constant, the acceleration is too, so we can find it from the total change in velocity over the time taken.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the acceleration formula.",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathbf{v} - \\mathbf{u}}{t}",
          "explanation": "Acceleration is the rate of change of velocity, so we subtract the initial from the final velocity and divide by the time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the change in the horizontal component.",
          "workingLatex": "\\Delta v_x = 5 - 1 = 4\\ \\text{m s}^{-1}",
          "explanation": "Working one direction at a time avoids mistakes; the $\\mathbf{i}$ component grows by four.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the change in the vertical component.",
          "workingLatex": "\\Delta v_y = -2 - 2 = -4\\ \\text{m s}^{-1}",
          "explanation": "The $\\mathbf{j}$ component drops by four, so this change is negative, meaning the vertical velocity reverses and grows downward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the change in velocity as a vector.",
          "workingLatex": "\\mathbf{v} - \\mathbf{u} = (4\\mathbf{i} - 4\\mathbf{j})\\ \\text{m s}^{-1}",
          "explanation": "Reassembling the two component changes gives the total change in velocity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by the time to get the acceleration.",
          "workingLatex": "\\mathbf{a} = \\tfrac{1}{2}(4\\mathbf{i} - 4\\mathbf{j}) = (2\\mathbf{i} - 2\\mathbf{j})\\ \\text{m s}^{-2}",
          "explanation": "Sharing the change over the two seconds gives the constant acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply Newton's second law.",
          "workingLatex": "\\mathbf{F} = m\\mathbf{a}",
          "explanation": "The resultant force is the mass times the acceleration, applied to each component of the acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute and multiply.",
          "workingLatex": "\\mathbf{F} = 2(2\\mathbf{i} - 2\\mathbf{j}) = (4\\mathbf{i} - 4\\mathbf{j})\\ \\text{N}",
          "explanation": "Multiplying each component by the mass gives the resultant force vector.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the magnitude of the force.",
          "workingLatex": "|\\mathbf{F}| = \\sqrt{4^{2} + (-4)^{2}} = \\sqrt{32} = 4\\sqrt{2} \\approx 5.66\\ \\text{N}",
          "explanation": "The size of the force follows from Pythagoras on its perpendicular components, giving a useful single value alongside the vector.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{F} = (4\\mathbf{i} - 4\\mathbf{j})\\ \\text{N}$, of magnitude $4\\sqrt{2} \\approx 5.66\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "driving-force",
      "resistance",
      "resultant-force",
      "acceleration"
    ],
    "questionText": "A lorry of mass $2000\\ \\text{kg}$ needs to accelerate at $1.5\\ \\text{m s}^{-2}$ against a total resistance of $700\\ \\text{N}$. Find the required driving force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the horizontal forces.",
          "workingLatex": "\\text{Driving force } D \\text{ (forward)}, \\quad \\text{Resistance } 700\\ \\text{N (backward)}",
          "explanation": "The engine's driving force pushes forward while the total resistance opposes it; the difference must accelerate the lorry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known quantities.",
          "workingLatex": "m = 2000\\ \\text{kg}, \\quad a = 1.5\\ \\text{m s}^{-2}, \\quad R = 700\\ \\text{N}",
          "explanation": "Collecting the values shows we know everything except the driving force, which is what we must find.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law along the motion.",
          "workingLatex": "D - R = ma",
          "explanation": "The resultant forward force is the driving force minus the resistance, and this net force produces the required acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for the driving force.",
          "workingLatex": "D = ma + R",
          "explanation": "The driving force must both overcome the resistance and supply the extra force for the acceleration, so we add the two contributions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the force needed to accelerate the mass.",
          "workingLatex": "ma = 2000 \\times 1.5 = 3000\\ \\text{N}",
          "explanation": "This term is the force purely required to give the lorry its acceleration, ignoring resistance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the resistance to find the driving force.",
          "workingLatex": "D = 3000 + 700 = 3700\\ \\text{N}",
          "explanation": "Adding the resistance accounts for the extra push needed to cancel the backward force as well as accelerate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the two contributions",
          "workingLatex": "3000\\ \\text{N (to accelerate)} + 700\\ \\text{N (to overcome resistance)}",
          "explanation": "The driving force does two jobs: 3000 N provides the acceleration of the mass and 700 N overcomes the resistance, giving 3700 N in all.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sanity-check the resultant",
          "workingLatex": "3700 - 700 = 3000 = 2000 \\times 1.5",
          "explanation": "Subtracting the resistance from the driving force returns the resultant 3000 N, which equals mass times acceleration — confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State and check the answer.",
          "workingLatex": "D = 3700\\ \\text{N} > 700\\ \\text{N}",
          "explanation": "The driving force exceeds the resistance, which it must if the lorry is to accelerate rather than merely move at constant speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "Required driving force $D = 3700\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "resolving-forces",
      "normal-reaction",
      "tension",
      "equilibrium",
      "newtons-second-law"
    ],
    "questionText": "A box of mass $4\\ \\text{kg}$ rests on a smooth horizontal table and is pulled by a light rope at $30^\\circ$ above the horizontal with tension $12\\ \\text{N}$. Find the normal reaction from the table and the horizontal acceleration. (Take $g = 9.8\\ \\text{m s}^{-2}$.)",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A box rests on a horizontal table. A light rope leaves the box at 30 degrees above the horizontal, pulling up and to the right, labelled tension 12 N and angle 30 degrees. The weight mg acts downward, and the normal reaction R acts vertically upward from the table.",
      "alt": "Box on a smooth table pulled by a rope at 30 degrees, showing tension, weight and normal reaction."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify all the forces on the box.",
          "workingLatex": "\\text{Weight } mg \\text{ (down)}, \\ \\text{Normal } R \\text{ (up)}, \\ \\text{Tension } T \\text{ at } 30^\\circ",
          "explanation": "Three forces act: gravity down, the table's reaction up, and the angled rope tension, so we resolve into horizontal and vertical directions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the tension into components.",
          "workingLatex": "T_x = T\\cos 30^\\circ, \\qquad T_y = T\\sin 30^\\circ",
          "explanation": "The angled pull has a horizontal part that moves the box and a vertical part that helps lift it off the table.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the weight.",
          "workingLatex": "mg = 4 \\times 9.8 = 39.2\\ \\text{N}",
          "explanation": "The weight is needed for the vertical balance, since the table and the rope's vertical component together support it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the vertical balance.",
          "workingLatex": "R + T\\sin 30^\\circ - mg = 0",
          "explanation": "The box does not move vertically, so the upward forces (normal reaction plus the tension's vertical component) exactly balance the weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for the normal reaction.",
          "workingLatex": "R = mg - T\\sin 30^\\circ",
          "explanation": "The rope takes part of the box's weight, so the table only needs to supply the remainder as the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values.",
          "workingLatex": "R = 39.2 - 12 \\times 0.5",
          "explanation": "Using $\\sin 30^\\circ = 0.5$, the vertical component of the tension is subtracted from the weight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the normal reaction.",
          "workingLatex": "R = 39.2 - 6 = 33.2\\ \\text{N}",
          "explanation": "The reaction is less than the full weight, showing the rope is helping to hold the box up.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply Newton's second law horizontally.",
          "workingLatex": "T\\cos 30^\\circ = ma",
          "explanation": "The table is smooth, so the only horizontal force is the tension's horizontal component, which produces the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the horizontal force.",
          "workingLatex": "T\\cos 30^\\circ = 12 \\times 0.8660 = 10.39\\ \\text{N}",
          "explanation": "Using $\\cos 30^\\circ \\approx 0.8660$ gives the size of the forward force on the box.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the acceleration.",
          "workingLatex": "a = \\dfrac{10.39}{4} = 2.60\\ \\text{m s}^{-2}",
          "explanation": "Dividing the forward force by the mass gives the horizontal acceleration of the box.",
          "diagram": null
        }
      ],
      "finalAnswer": "Normal reaction $R = 33.2\\ \\text{N}$ and horizontal acceleration $a \\approx 2.60\\ \\text{m s}^{-2}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "equilibrium",
      "vectors",
      "resultant-force",
      "i-j-vectors"
    ],
    "questionText": "A particle of mass $2\\ \\text{kg}$ is in equilibrium under three forces $(3\\mathbf{i} + 4\\mathbf{j})\\ \\text{N}$, $(-\\mathbf{i} + 2\\mathbf{j})\\ \\text{N}$ and $(P\\mathbf{i} + Q\\mathbf{j})\\ \\text{N}$. Find $P$ and $Q$, and the magnitude of the third force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for equilibrium.",
          "workingLatex": "\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = \\mathbf{0}",
          "explanation": "A particle in equilibrium has zero resultant force, since there is no acceleration. So the three force vectors must add up to the zero vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the vector sum of all three forces.",
          "workingLatex": "(3\\mathbf{i} + 4\\mathbf{j}) + (-\\mathbf{i} + 2\\mathbf{j}) + (P\\mathbf{i} + Q\\mathbf{j}) = \\mathbf{0}",
          "explanation": "We simply add the two known forces to the unknown force and set the total equal to zero. Working with $\\mathbf{i}$ and $\\mathbf{j}$ components keeps the two directions completely separate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect the $\\mathbf{i}$ (horizontal) components.",
          "workingLatex": "(3 - 1 + P)\\mathbf{i}",
          "explanation": "Because $\\mathbf{i}$ and $\\mathbf{j}$ are perpendicular, their components never mix. Gathering the $\\mathbf{i}$ terms lets us treat the horizontal direction on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the $\\mathbf{j}$ (vertical) components.",
          "workingLatex": "(4 + 2 + Q)\\mathbf{j}",
          "explanation": "In the same way we gather the $\\mathbf{j}$ terms, which describe the vertical direction independently of the horizontal one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the $\\mathbf{i}$ component equal to zero.",
          "workingLatex": "3 - 1 + P = 0 \\ \\Rightarrow\\ 2 + P = 0",
          "explanation": "For the resultant to be the zero vector, the total horizontal component must itself be zero. This gives one equation in $P$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $P$.",
          "workingLatex": "P = -2",
          "explanation": "Subtracting $2$ from both sides isolates $P$. The negative sign tells us the third force points in the $-\\mathbf{i}$ direction horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the $\\mathbf{j}$ component equal to zero.",
          "workingLatex": "4 + 2 + Q = 0 \\ \\Rightarrow\\ 6 + Q = 0",
          "explanation": "The total vertical component must also vanish for equilibrium, giving a second independent equation, this time in $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for $Q$.",
          "workingLatex": "Q = -6",
          "explanation": "Subtracting $6$ from both sides isolates $Q$. Again the negative sign means the third force acts downwards in the $-\\mathbf{j}$ direction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write down the third force vector.",
          "workingLatex": "\\mathbf{F}_3 = (-2\\mathbf{i} - 6\\mathbf{j})\\ \\text{N}",
          "explanation": "Placing our values of $P$ and $Q$ back into $P\\mathbf{i} + Q\\mathbf{j}$ gives the full third force. It exactly cancels the combined effect of the other two.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note that the mass is not needed here.",
          "workingLatex": "a = 0 \\ \\Rightarrow\\ m \\text{ irrelevant to equilibrium}",
          "explanation": "Because the particle is in equilibrium the acceleration is zero, so the $2\\ \\text{kg}$ mass plays no part in finding the forces. It is deliberately included to test that understanding.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the formula for the magnitude of a vector.",
          "workingLatex": "|\\mathbf{F}_3| = \\sqrt{P^2 + Q^2}",
          "explanation": "The magnitude of a force written in component form is found with Pythagoras, since the components are perpendicular sides of a right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the components.",
          "workingLatex": "|\\mathbf{F}_3| = \\sqrt{(-2)^2 + (-6)^2} = \\sqrt{4 + 36}",
          "explanation": "Squaring removes the negative signs, so the direction of each component does not affect the size of the force.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the surd.",
          "workingLatex": "|\\mathbf{F}_3| = \\sqrt{40} = 2\\sqrt{10}",
          "explanation": "We take out the factor $4$ as $\\sqrt{4} = 2$, leaving the tidy exact form $2\\sqrt{10}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Give the decimal value.",
          "workingLatex": "|\\mathbf{F}_3| \\approx 6.32\\ \\text{N}",
          "explanation": "Evaluating $2\\sqrt{10}$ gives a magnitude of about $6.32\\ \\text{N}$, which is the size of the balancing force.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final results.",
          "workingLatex": "P = -2, \\quad Q = -6, \\quad |\\mathbf{F}_3| = 2\\sqrt{10} \\approx 6.32\\ \\text{N}",
          "explanation": "Collecting everything: the missing components are $P = -2$ and $Q = -6$, and the third force has magnitude $2\\sqrt{10} \\approx 6.32\\ \\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = -2$, $Q = -6$, and the magnitude of the third force is $2\\sqrt{10} \\approx 6.32\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resistance",
      "suvat",
      "car-motion"
    ],
    "questionText": "A car of mass $1000\\ \\text{kg}$ has a driving force of $2500\\ \\text{N}$ acting against a constant resistance of $500\\ \\text{N}$. Find its acceleration. When the car reaches $30\\ \\text{m s}^{-1}$ the engine is switched off, and the resistance remains $500\\ \\text{N}$. Find how much further the car travels before stopping.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the horizontal forces while the engine drives the car.",
          "workingLatex": "\\text{driving force} = 2500\\ \\text{N}, \\quad \\text{resistance} = 500\\ \\text{N}",
          "explanation": "The motion is horizontal, so only the forward driving force and the backward resistance affect the acceleration. Weight and normal reaction act vertically and cancel.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the resultant force in the direction of motion.",
          "workingLatex": "F = 2500 - 500 = 2000\\ \\text{N}",
          "explanation": "Taking the forward direction as positive, we subtract the resistance from the driving force. The remaining $2000\\ \\text{N}$ is the net force pushing the car forward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law.",
          "workingLatex": "F = ma \\ \\Rightarrow\\ 2000 = 1000a",
          "explanation": "The resultant force equals mass times acceleration. Substituting the resultant and the mass gives an equation for the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the acceleration.",
          "workingLatex": "a = \\frac{2000}{1000} = 2\\ \\text{m s}^{-2}",
          "explanation": "Dividing the resultant force by the mass gives an acceleration of $2\\ \\text{m s}^{-2}$ while the engine is on.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Now consider the second phase, with the engine off.",
          "workingLatex": "\\text{only force} = 500\\ \\text{N (resistance, backwards)}",
          "explanation": "Once the engine is off there is no driving force, so the resistance is the only horizontal force. It now acts alone to slow the car.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the resultant force in this phase.",
          "workingLatex": "F = -500\\ \\text{N}",
          "explanation": "The resistance opposes the motion, so relative to the forward direction it is negative. This will produce a deceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply Newton's second law again.",
          "workingLatex": "-500 = 1000a",
          "explanation": "The same law applies: the net force equals mass times acceleration. The negative net force gives a negative acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the deceleration.",
          "workingLatex": "a = \\frac{-500}{1000} = -0.5\\ \\text{m s}^{-2}",
          "explanation": "The acceleration is $-0.5\\ \\text{m s}^{-2}$; the minus sign confirms the car is slowing down at a steady rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the known quantities for the stopping phase.",
          "workingLatex": "u = 30\\ \\text{m s}^{-1}, \\quad v = 0, \\quad a = -0.5\\ \\text{m s}^{-2}",
          "explanation": "The car starts this phase at $30\\ \\text{m s}^{-1}$ and comes to rest, so the final velocity is $0$. The acceleration is constant, so we can use a suvat equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Choose the suvat equation without time.",
          "workingLatex": "v^2 = u^2 + 2as",
          "explanation": "We want distance $s$ and we are not told the time, so the equation linking $v$, $u$, $a$ and $s$ is the natural choice.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the known values.",
          "workingLatex": "0^2 = 30^2 + 2(-0.5)s",
          "explanation": "Putting in $v = 0$, $u = 30$ and $a = -0.5$ gives a single equation in the unknown distance $s$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the equation.",
          "workingLatex": "0 = 900 - s",
          "explanation": "Here $30^2 = 900$ and $2(-0.5) = -1$, so the term becomes $-s$. The equation is now easy to rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for the distance.",
          "workingLatex": "s = 900\\ \\text{m}",
          "explanation": "Rearranging gives $s = 900$. So after the engine is switched off the car rolls a further $900\\ \\text{m}$ before stopping.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answers.",
          "workingLatex": "a = 2\\ \\text{m s}^{-2}, \\quad s = 900\\ \\text{m}",
          "explanation": "The acceleration while driving is $2\\ \\text{m s}^{-2}$, and the car travels a further $900\\ \\text{m}$ before coming to rest.",
          "diagram": null
        }
      ],
      "finalAnswer": "Acceleration $= 2\\ \\text{m s}^{-2}$; the car travels a further $900\\ \\text{m}$ before stopping."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "lift-problem",
      "tension",
      "newtons-second-law",
      "cable"
    ],
    "questionText": "A lift of mass $800\\ \\text{kg}$ starts from rest and accelerates upward at $1.2\\ \\text{m s}^{-2}$, then moves at constant speed, then decelerates at $1.5\\ \\text{m s}^{-2}$ to stop. Find the tension in the supporting cable during each of the three phases. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A rectangular lift car hangs from a single vertical cable attached to its top. An upward arrow on the cable is labelled T (tension). A downward arrow from the centre of the car is labelled mg = 800g (weight). To the side, three phases are indicated: phase 1 accelerating upward, phase 2 constant speed, phase 3 decelerating.",
      "alt": "A lift suspended by a cable with tension T upward and weight mg downward, moving through three phases."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the forces acting on the lift.",
          "workingLatex": "\\text{tension } T \\text{ (up)}, \\quad \\text{weight } mg \\text{ (down)}",
          "explanation": "The lift is held only by the cable, so the two vertical forces are the tension pulling up and the weight pulling down. Everything happens in the vertical direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Calculate the weight of the lift.",
          "workingLatex": "mg = 800 \\times 9.8 = 7840\\ \\text{N}",
          "explanation": "Weight is mass times gravitational acceleration. This $7840\\ \\text{N}$ downward force is the same in every phase, since neither the mass nor $g$ changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write Newton's second law, taking up as positive.",
          "workingLatex": "T - mg = ma",
          "explanation": "Choosing up as positive, the resultant is tension minus weight. Setting this equal to $ma$ lets us find the tension for any given acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Phase 1: use the upward acceleration.",
          "workingLatex": "a = +1.2\\ \\text{m s}^{-2}",
          "explanation": "In the first phase the lift accelerates upward, so the acceleration is positive. A positive resultant means the tension must exceed the weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for the tension in phase 1.",
          "workingLatex": "T_1 = m(g + a) = 800(9.8 + 1.2)",
          "explanation": "Making $T$ the subject gives $T = m(g+a)$. This clearly shows the tension is larger than the weight while accelerating upward.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the phase 1 tension.",
          "workingLatex": "T_1 = 800 \\times 11 = 8800\\ \\text{N}",
          "explanation": "Adding $9.8 + 1.2 = 11$ and multiplying by $800$ gives $8800\\ \\text{N}$. The cable must pull harder than the weight to speed the lift upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Phase 2: constant speed means zero acceleration.",
          "workingLatex": "a = 0",
          "explanation": "Moving at constant speed means no acceleration, so the resultant force is zero. The tension and weight must be exactly balanced.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the phase 2 tension.",
          "workingLatex": "T_2 = mg = 800 \\times 9.8 = 7840\\ \\text{N}",
          "explanation": "With zero resultant, $T = mg$. The tension simply supports the weight, giving $7840\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Phase 3: interpret the deceleration.",
          "workingLatex": "a = -1.5\\ \\text{m s}^{-2}",
          "explanation": "The lift is still moving upward but slowing down, so its acceleration points downward and is therefore negative in our chosen direction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange for the tension in phase 3.",
          "workingLatex": "T_3 = m(g + a) = 800(9.8 - 1.5)",
          "explanation": "Using the same $T = m(g+a)$ with a negative acceleration reduces the tension below the weight, as expected when the lift is being slowed on its way up.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the phase 3 tension.",
          "workingLatex": "T_3 = 800 \\times 8.3 = 6640\\ \\text{N}",
          "explanation": "Here $9.8 - 1.5 = 8.3$, and multiplying by $800$ gives $6640\\ \\text{N}$. The cable pulls less than the weight, letting the lift decelerate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the three tensions as a sanity check.",
          "workingLatex": "T_1 > T_2 > T_3 \\ \\Leftrightarrow\\ 8800 > 7840 > 6640",
          "explanation": "The pattern makes physical sense: greatest tension when accelerating up, equal to the weight at constant speed, and least when decelerating. This consistency gives confidence in the answers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final tensions for the three phases.",
          "workingLatex": "T_1 = 8800\\ \\text{N}, \\quad T_2 = 7840\\ \\text{N}, \\quad T_3 = 6640\\ \\text{N}",
          "explanation": "The cable tension is $8800\\ \\text{N}$ while accelerating up, $7840\\ \\text{N}$ at constant speed, and $6640\\ \\text{N}$ while decelerating to a stop.",
          "diagram": null
        }
      ],
      "finalAnswer": "Phase 1: $T = 8800\\ \\text{N}$; Phase 2: $T = 7840\\ \\text{N}$; Phase 3: $T = 6640\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "vectors",
      "newtons-second-law",
      "suvat-vectors",
      "i-j-vectors"
    ],
    "questionText": "A particle of mass $2\\ \\text{kg}$ is acted on by a constant resultant force $(5\\mathbf{i} + 2\\mathbf{j}) + (\\mathbf{i} - 6\\mathbf{j})\\ \\text{N}$. It starts from rest at the origin. Find its position vector after $4\\ \\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Combine the two forces into a single resultant.",
          "workingLatex": "\\mathbf{F} = (5\\mathbf{i} + 2\\mathbf{j}) + (\\mathbf{i} - 6\\mathbf{j})",
          "explanation": "The net effect of several forces is their vector sum. We add the two given forces before doing anything else.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the $\\mathbf{i}$ components.",
          "workingLatex": "5 + 1 = 6",
          "explanation": "The $\\mathbf{i}$ terms combine independently of the $\\mathbf{j}$ terms because the directions are perpendicular. The total horizontal component is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the $\\mathbf{j}$ components.",
          "workingLatex": "2 + (-6) = -4",
          "explanation": "Adding the vertical parts gives $-4$; the negative shows the net force points in the $-\\mathbf{j}$ direction vertically.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the resultant force.",
          "workingLatex": "\\mathbf{F} = (6\\mathbf{i} - 4\\mathbf{j})\\ \\text{N}",
          "explanation": "Combining the components gives the single resultant force acting on the particle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply Newton's second law in vector form.",
          "workingLatex": "\\mathbf{F} = m\\mathbf{a} \\ \\Rightarrow\\ \\mathbf{a} = \\frac{\\mathbf{F}}{m}",
          "explanation": "Newton's second law works component by component, so the acceleration vector is the force vector divided by the mass.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the acceleration.",
          "workingLatex": "\\mathbf{a} = \\frac{1}{2}(6\\mathbf{i} - 4\\mathbf{j}) = (3\\mathbf{i} - 2\\mathbf{j})\\ \\text{m s}^{-2}",
          "explanation": "Dividing each component by the mass $2\\ \\text{kg}$ gives the acceleration $3\\mathbf{i} - 2\\mathbf{j}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note that the acceleration is constant.",
          "workingLatex": "\\mathbf{F} \\text{ constant} \\ \\Rightarrow\\ \\mathbf{a} \\text{ constant}",
          "explanation": "A constant resultant force produces a constant acceleration, which means the vector suvat equations apply.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the initial conditions.",
          "workingLatex": "\\mathbf{u} = \\mathbf{0}, \\quad \\mathbf{r}_0 = \\mathbf{0}",
          "explanation": "\"From rest\" means the initial velocity is the zero vector, and \"at the origin\" means the starting position is also the zero vector.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Choose the displacement suvat equation.",
          "workingLatex": "\\mathbf{r} = \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^2",
          "explanation": "This equation gives position from initial velocity, acceleration and time, which is exactly what we need.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the initial velocity.",
          "workingLatex": "\\mathbf{r} = \\mathbf{0}(4) + \\tfrac{1}{2}\\mathbf{a}t^2 = \\tfrac{1}{2}\\mathbf{a}t^2",
          "explanation": "Since the particle starts from rest, the $\\mathbf{u}t$ term is zero and only the acceleration term contributes to the displacement.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the acceleration and time.",
          "workingLatex": "\\mathbf{r} = \\tfrac{1}{2}(3\\mathbf{i} - 2\\mathbf{j})(4)^2",
          "explanation": "Putting in $\\mathbf{a} = 3\\mathbf{i} - 2\\mathbf{j}$ and $t = 4$ prepares the expression for evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the scalar factor.",
          "workingLatex": "\\tfrac{1}{2}(4)^2 = \\tfrac{1}{2} \\times 16 = 8",
          "explanation": "Working out the numerical multiplier first keeps the vector arithmetic simple. Here it is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Multiply the vector by the scalar.",
          "workingLatex": "\\mathbf{r} = 8(3\\mathbf{i} - 2\\mathbf{j})",
          "explanation": "Scaling a vector multiplies each component by the same number, so we distribute the $8$ across both components.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Write the final position vector.",
          "workingLatex": "\\mathbf{r} = (24\\mathbf{i} - 16\\mathbf{j})\\ \\text{m}",
          "explanation": "Multiplying out gives the displacement from the origin. As the particle started at the origin, this is also its position after $4\\ \\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{r} = (24\\mathbf{i} - 16\\mathbf{j})\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "resultant-force",
      "cosine-rule",
      "newtons-second-law",
      "combining-forces"
    ],
    "questionText": "Two forces of magnitudes $8\\ \\text{N}$ and $6\\ \\text{N}$ act on a $2\\ \\text{kg}$ particle, with a $60^\\circ$ angle between them. Using the cosine rule, find the magnitude of the resultant force and hence the acceleration of the particle.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Two force vectors act from a single point: one of magnitude 8 N and one of magnitude 6 N, with a 60 degree angle between their directions. A dashed parallelogram is completed, and its diagonal from the common point represents the resultant force R.",
      "alt": "Two forces of 8 N and 6 N with 60 degrees between them, and their resultant shown as the diagonal of a parallelogram."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide how to combine the two forces.",
          "workingLatex": "\\text{resultant} = \\text{vector sum of the two forces}",
          "explanation": "The single force equivalent to two forces is their resultant, found by placing them tip-to-tail to form a triangle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the interior angle of the vector triangle.",
          "workingLatex": "180^\\circ - 60^\\circ = 120^\\circ",
          "explanation": "When the second force is redrawn tip-to-tail after the first, the angle inside the triangle is the supplement of the $60^\\circ$ between the forces. So the interior angle is $120^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the cosine rule for the resultant.",
          "workingLatex": "R^2 = 8^2 + 6^2 - 2(8)(6)\\cos 120^\\circ",
          "explanation": "The cosine rule relates the third side of a triangle to the other two sides and the angle between them. Here the third side is the resultant $R$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Insert the value of the cosine.",
          "workingLatex": "\\cos 120^\\circ = -\\tfrac{1}{2}",
          "explanation": "The cosine of $120^\\circ$ is $-\\tfrac{1}{2}$. The negative sign is what makes the resultant larger than a simple difference of the forces.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the squared terms.",
          "workingLatex": "8^2 + 6^2 = 64 + 36 = 100",
          "explanation": "Working out the two squares first keeps the calculation organised. Their sum is $100$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the cosine term.",
          "workingLatex": "-2(8)(6)\\left(-\\tfrac{1}{2}\\right) = +48",
          "explanation": "The two negative signs combine to give a positive contribution of $48$, which increases the resultant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the parts to find $R^2$.",
          "workingLatex": "R^2 = 100 + 48 = 148",
          "explanation": "Combining the squared terms with the cosine term gives $R^2 = 148$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root.",
          "workingLatex": "R = \\sqrt{148} = 2\\sqrt{37}",
          "explanation": "The magnitude is the positive square root. Factoring out $4$ gives the exact form $2\\sqrt{37}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the resultant as a decimal.",
          "workingLatex": "R \\approx 12.17\\ \\text{N}",
          "explanation": "Evaluating the surd gives a resultant force of about $12.17\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply Newton's second law to find the acceleration.",
          "workingLatex": "R = ma \\ \\Rightarrow\\ a = \\frac{R}{m}",
          "explanation": "The resultant force causes the acceleration, so we divide it by the mass to find how fast the particle speeds up.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the resultant and the mass.",
          "workingLatex": "a = \\frac{12.17}{2}",
          "explanation": "Dividing the resultant $12.17\\ \\text{N}$ by the mass $2\\ \\text{kg}$ gives the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the acceleration.",
          "workingLatex": "a \\approx 6.08\\ \\text{m s}^{-2}",
          "explanation": "The acceleration is about $6.08\\ \\text{m s}^{-2}$, in the direction of the resultant force.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answers.",
          "workingLatex": "R = 2\\sqrt{37} \\approx 12.17\\ \\text{N}, \\quad a \\approx 6.08\\ \\text{m s}^{-2}",
          "explanation": "The resultant force has magnitude $2\\sqrt{37} \\approx 12.17\\ \\text{N}$ and produces an acceleration of about $6.08\\ \\text{m s}^{-2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Resultant $R = 2\\sqrt{37} \\approx 12.17\\ \\text{N}$; acceleration $a \\approx 6.08\\ \\text{m s}^{-2}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "resolving",
      "friction",
      "normal-reaction",
      "newtons-second-law"
    ],
    "questionText": "A block of mass $10\\ \\text{kg}$ rests on a rough horizontal floor and is pulled by a rope at $30^\\circ$ above the horizontal with tension $60\\ \\text{N}$, against a friction force of $20\\ \\text{N}$. Find the acceleration of the block and the normal reaction from the floor. Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A block sits on a horizontal floor. A rope from the top of the block goes up to the right at 30 degrees above the horizontal, labelled tension 60 N. A friction arrow of 20 N points horizontally backwards (left) along the floor. The weight 10g acts vertically down from the centre, and the normal reaction R acts vertically up from the floor.",
      "alt": "A block on a floor pulled by a rope at 30 degrees, with friction, weight and normal reaction marked."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List all forces acting on the block.",
          "workingLatex": "T = 60\\ \\text{N (at } 30^\\circ), \\quad F = 20\\ \\text{N}, \\quad W = 10g, \\quad R",
          "explanation": "There are four forces: the rope tension at an angle, friction opposing motion, the weight downward, and the normal reaction upward from the floor.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the tension into horizontal and vertical parts.",
          "workingLatex": "T_x = 60\\cos 30^\\circ, \\quad T_y = 60\\sin 30^\\circ",
          "explanation": "A force at an angle is easiest to handle by splitting it into horizontal and vertical components, which act along the directions of motion and of the reaction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the horizontal component of the tension.",
          "workingLatex": "T_x = 60\\cos 30^\\circ = 30\\sqrt{3} \\approx 51.96\\ \\text{N}",
          "explanation": "The horizontal part drives the block forward. Using $\\cos 30^\\circ = \\tfrac{\\sqrt{3}}{2}$ gives $30\\sqrt{3} \\approx 51.96\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the vertical component of the tension.",
          "workingLatex": "T_y = 60\\sin 30^\\circ = 60 \\times \\tfrac{1}{2} = 30\\ \\text{N}",
          "explanation": "The vertical part lifts the block slightly, using $\\sin 30^\\circ = \\tfrac{1}{2}$. This will reduce how hard the floor pushes back.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply Newton's second law horizontally.",
          "workingLatex": "T\\cos 30^\\circ - F = ma",
          "explanation": "Along the floor the resultant is the forward pull minus friction. This equals mass times acceleration, since the block accelerates horizontally.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the horizontal values.",
          "workingLatex": "51.96 - 20 = 10a",
          "explanation": "Putting in the horizontal component of tension and the friction force gives an equation for the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the net horizontal force.",
          "workingLatex": "31.96 = 10a",
          "explanation": "The forward pull exceeds friction by about $31.96\\ \\text{N}$, and this net force drives the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the acceleration.",
          "workingLatex": "a = \\frac{31.96}{10} \\approx 3.20\\ \\text{m s}^{-2}",
          "explanation": "Dividing the net force by the mass gives an acceleration of about $3.20\\ \\text{m s}^{-2}$ along the floor.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the vertical equation.",
          "workingLatex": "R + T\\sin 30^\\circ - W = 0",
          "explanation": "The block does not move vertically, so the vertical forces balance: the reaction plus the upward pull of the rope equal the weight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Calculate the weight.",
          "workingLatex": "W = 10 \\times 9.8 = 98\\ \\text{N}",
          "explanation": "The weight is mass times $g$, giving $98\\ \\text{N}$ acting downward.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange for the normal reaction.",
          "workingLatex": "R = W - T\\sin 30^\\circ = 98 - 30",
          "explanation": "Making $R$ the subject shows that the upward pull of the rope reduces the reaction below the full weight.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the normal reaction.",
          "workingLatex": "R = 68\\ \\text{N}",
          "explanation": "Subtracting the vertical component of tension from the weight gives a normal reaction of $68\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answers.",
          "workingLatex": "a \\approx 3.20\\ \\text{m s}^{-2}, \\quad R = 68\\ \\text{N}",
          "explanation": "The block accelerates at about $3.20\\ \\text{m s}^{-2}$ and the floor pushes up with a normal reaction of $68\\ \\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Acceleration $\\approx 3.20\\ \\text{m s}^{-2}$; normal reaction $R = 68\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "driving-force",
      "resistance",
      "newtons-second-law",
      "car-motion"
    ],
    "questionText": "A car of mass $1400\\ \\text{kg}$ accelerates uniformly from rest to $20\\ \\text{m s}^{-1}$ in $10\\ \\text{s}$, then travels at constant speed. The resistance to motion is constant at $200\\ \\text{N}$. Find the driving force during the acceleration phase and during the constant-speed phase.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise there are two phases to analyse.",
          "workingLatex": "\\text{Phase 1: accelerating}, \\quad \\text{Phase 2: constant speed}",
          "explanation": "The car behaves differently in each phase, so we treat them separately. The driving force will not be the same in both.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the data for the acceleration phase.",
          "workingLatex": "u = 0, \\quad v = 20\\ \\text{m s}^{-1}, \\quad t = 10\\ \\text{s}",
          "explanation": "The car starts from rest and reaches $20\\ \\text{m s}^{-1}$ in $10\\ \\text{s}$. With uniform acceleration we can find $a$ from these values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use a suvat equation to find the acceleration.",
          "workingLatex": "a = \\frac{v - u}{t}",
          "explanation": "Acceleration is the change in velocity divided by the time taken, which follows from $v = u + at$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the acceleration.",
          "workingLatex": "a = \\frac{20 - 0}{10} = 2\\ \\text{m s}^{-2}",
          "explanation": "Substituting gives an acceleration of $2\\ \\text{m s}^{-2}$ during the first phase.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write Newton's second law horizontally for phase 1.",
          "workingLatex": "D - R = ma",
          "explanation": "The resultant along the road is the driving force minus the resistance. This equals mass times acceleration while the car speeds up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values.",
          "workingLatex": "D - 200 = 1400 \\times 2",
          "explanation": "Putting in the resistance, the mass and the acceleration leaves the driving force $D$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "D - 200 = 2800",
          "explanation": "The product $1400 \\times 2 = 2800\\ \\text{N}$ is the net forward force needed for this acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the driving force in phase 1.",
          "workingLatex": "D = 2800 + 200 = 3000\\ \\text{N}",
          "explanation": "Adding back the resistance gives the total driving force of $3000\\ \\text{N}$, which must overcome resistance and still accelerate the car.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Consider the constant-speed phase.",
          "workingLatex": "a = 0",
          "explanation": "At constant speed there is no acceleration, so the resultant horizontal force must be zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply Newton's second law for phase 2.",
          "workingLatex": "D - R = 0",
          "explanation": "With zero resultant, the driving force exactly balances the resistance; neither speeds up nor slows the car.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for the driving force in phase 2.",
          "workingLatex": "D = R = 200\\ \\text{N}",
          "explanation": "The driving force only needs to match the $200\\ \\text{N}$ resistance to keep the speed constant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the two driving forces.",
          "workingLatex": "3000\\ \\text{N} \\gg 200\\ \\text{N}",
          "explanation": "The car needs a much larger force to accelerate than to cruise, which matches everyday experience of pressing the accelerator harder to speed up.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answers.",
          "workingLatex": "D_{\\text{accel}} = 3000\\ \\text{N}, \\quad D_{\\text{constant}} = 200\\ \\text{N}",
          "explanation": "The driving force is $3000\\ \\text{N}$ while accelerating and $200\\ \\text{N}$ while travelling at constant speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "Driving force $= 3000\\ \\text{N}$ during acceleration; $= 200\\ \\text{N}$ at constant speed."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "vectors",
      "newtons-second-law",
      "suvat-vectors",
      "i-j-vectors"
    ],
    "questionText": "A particle of mass $5\\ \\text{kg}$ has a resultant force giving acceleration $\\mathbf{a} = (2\\mathbf{i} - \\mathbf{j})\\ \\text{m s}^{-2}$. At $t = 0$ it is at the origin with velocity $(\\mathbf{i} + 3\\mathbf{j})\\ \\text{m s}^{-1}$. Find the force acting on the particle, and its velocity and position at $t = 3\\ \\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use Newton's second law to find the force.",
          "workingLatex": "\\mathbf{F} = m\\mathbf{a}",
          "explanation": "The force producing a given acceleration is simply the mass times that acceleration, applied to each component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the mass and acceleration.",
          "workingLatex": "\\mathbf{F} = 5(2\\mathbf{i} - \\mathbf{j})",
          "explanation": "Multiplying the acceleration vector by the mass $5\\ \\text{kg}$ scales both components by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write out the force vector.",
          "workingLatex": "\\mathbf{F} = (10\\mathbf{i} - 5\\mathbf{j})\\ \\text{N}",
          "explanation": "Distributing the $5$ gives the resultant force of $10\\mathbf{i} - 5\\mathbf{j}$ newtons.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note that the acceleration is constant.",
          "workingLatex": "\\mathbf{a} = (2\\mathbf{i} - \\mathbf{j}) \\text{ constant}",
          "explanation": "A constant resultant force means constant acceleration, so the vector suvat equations can be used for velocity and position.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the equation for velocity.",
          "workingLatex": "\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t",
          "explanation": "This relates the velocity at time $t$ to the initial velocity and the acceleration, which is exactly what we need first.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the initial velocity, acceleration and time.",
          "workingLatex": "\\mathbf{v} = (\\mathbf{i} + 3\\mathbf{j}) + (2\\mathbf{i} - \\mathbf{j})(3)",
          "explanation": "Putting in $\\mathbf{u} = \\mathbf{i} + 3\\mathbf{j}$, $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j}$ and $t = 3$ sets up the velocity calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the acceleration term.",
          "workingLatex": "(2\\mathbf{i} - \\mathbf{j})(3) = 6\\mathbf{i} - 3\\mathbf{j}",
          "explanation": "Multiplying the acceleration by the time scales each component by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the vectors to find the velocity.",
          "workingLatex": "\\mathbf{v} = (1 + 6)\\mathbf{i} + (3 - 3)\\mathbf{j} = 7\\mathbf{i}",
          "explanation": "Adding the components, the $\\mathbf{j}$ parts cancel, leaving a velocity of $7\\mathbf{i}\\ \\text{m s}^{-1}$ directed purely along $\\mathbf{i}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Choose the equation for position.",
          "workingLatex": "\\mathbf{r} = \\mathbf{u}t + \\tfrac{1}{2}\\mathbf{a}t^2",
          "explanation": "Position is found from the initial velocity and the acceleration over time. As the particle starts at the origin, $\\mathbf{r}$ is also its displacement.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the $\\mathbf{u}t$ term.",
          "workingLatex": "(\\mathbf{i} + 3\\mathbf{j})(3) = 3\\mathbf{i} + 9\\mathbf{j}",
          "explanation": "The distance travelled at the initial velocity over $3\\ \\text{s}$ is this vector, before acceleration is taken into account.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the acceleration term.",
          "workingLatex": "\\tfrac{1}{2}(2\\mathbf{i} - \\mathbf{j})(3)^2 = \\tfrac{1}{2}(2\\mathbf{i} - \\mathbf{j})(9)",
          "explanation": "First square the time to get $9$, then apply the half. This term captures how the acceleration adds to the displacement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the acceleration term.",
          "workingLatex": "\\tfrac{9}{2}(2\\mathbf{i} - \\mathbf{j}) = 9\\mathbf{i} - 4.5\\mathbf{j}",
          "explanation": "Multiplying gives $9\\mathbf{i} - 4.5\\mathbf{j}$, the contribution of the acceleration to the position.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the two contributions.",
          "workingLatex": "\\mathbf{r} = (3\\mathbf{i} + 9\\mathbf{j}) + (9\\mathbf{i} - 4.5\\mathbf{j})",
          "explanation": "The total position is the sum of the velocity term and the acceleration term.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Write the final position vector.",
          "workingLatex": "\\mathbf{r} = (12\\mathbf{i} + 4.5\\mathbf{j})\\ \\text{m}",
          "explanation": "Adding the components gives the position after $3\\ \\text{s}$: $12\\mathbf{i} + 4.5\\mathbf{j}$ metres.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State all three results.",
          "workingLatex": "\\mathbf{F} = (10\\mathbf{i} - 5\\mathbf{j})\\ \\text{N}, \\quad \\mathbf{v} = 7\\mathbf{i}\\ \\text{m s}^{-1}, \\quad \\mathbf{r} = (12\\mathbf{i} + 4.5\\mathbf{j})\\ \\text{m}",
          "explanation": "Collecting the answers: the force is $10\\mathbf{i} - 5\\mathbf{j}\\ \\text{N}$, the velocity at $3\\ \\text{s}$ is $7\\mathbf{i}\\ \\text{m s}^{-1}$, and the position is $12\\mathbf{i} + 4.5\\mathbf{j}\\ \\text{m}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\mathbf{F} = (10\\mathbf{i} - 5\\mathbf{j})\\ \\text{N}$; $\\mathbf{v} = 7\\mathbf{i}\\ \\text{m s}^{-1}$; $\\mathbf{r} = (12\\mathbf{i} + 4.5\\mathbf{j})\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "lift-problem",
      "normal-reaction",
      "newtons-second-law",
      "apparent-weight"
    ],
    "questionText": "A person of mass $75\\ \\text{kg}$ stands on bathroom scales in a lift. Find the scale reading (the normal reaction) when the lift accelerates upward at $1.5\\ \\text{m s}^{-2}$, and separately when it accelerates downward at $1.5\\ \\text{m s}^{-2}$. What acceleration would make the reading zero? Take $g = 9.8\\ \\text{m s}^{-2}$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A person stands on bathroom scales on the floor of a lift. The normal reaction R from the scales acts upward on the person, and the weight mg = 75g acts downward. An arrow beside the lift shows the direction of acceleration, which is varied in the question.",
      "alt": "A person on scales in a lift with normal reaction R upward and weight mg downward."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the forces acting on the person.",
          "workingLatex": "R \\text{ (up)}, \\quad mg \\text{ (down)}",
          "explanation": "Only two forces act on the person: the normal reaction from the scales pushing up, and their weight pulling down. The scale reading equals this normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write Newton's second law, taking up as positive.",
          "workingLatex": "R - mg = ma",
          "explanation": "With up positive, the resultant is reaction minus weight, and this equals mass times acceleration. This single equation covers all cases.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Calculate the person's weight.",
          "workingLatex": "mg = 75 \\times 9.8 = 735\\ \\text{N}",
          "explanation": "The weight is mass times $g$, giving $735\\ \\text{N}$. This is the reading a stationary or constant-speed lift would show.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Case 1: lift accelerating upward.",
          "workingLatex": "a = +1.5\\ \\text{m s}^{-2}",
          "explanation": "Accelerating upward gives a positive acceleration, so the reaction must be greater than the weight to produce it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for the reaction.",
          "workingLatex": "R = m(g + a) = 75(9.8 + 1.5)",
          "explanation": "Making $R$ the subject shows the scales read more than the true weight when accelerating up. This is the feeling of being pressed down.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the upward-acceleration reading.",
          "workingLatex": "R = 75 \\times 11.3 = 847.5\\ \\text{N}",
          "explanation": "Adding $9.8 + 1.5 = 11.3$ and multiplying by $75$ gives $847.5\\ \\text{N}$, greater than the true weight as expected.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case 2: lift accelerating downward.",
          "workingLatex": "a = -1.5\\ \\text{m s}^{-2}",
          "explanation": "Accelerating downward makes the acceleration negative in our chosen direction, so the reaction should be less than the weight.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the reaction formula.",
          "workingLatex": "R = m(g + a) = 75(9.8 - 1.5)",
          "explanation": "Using the same formula with a negative acceleration reduces the reading below the weight, matching the light feeling when a lift starts descending.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the downward-acceleration reading.",
          "workingLatex": "R = 75 \\times 8.3 = 622.5\\ \\text{N}",
          "explanation": "Here $9.8 - 1.5 = 8.3$, so the scales read $622.5\\ \\text{N}$, less than the true weight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Case 3: set the reading to zero.",
          "workingLatex": "R = 0",
          "explanation": "A zero reading means the scales exert no force at all, so the only force on the person is their weight.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply Newton's second law with zero reaction.",
          "workingLatex": "0 - mg = ma \\ \\Rightarrow\\ -mg = ma",
          "explanation": "Putting $R = 0$ into the equation leaves only the weight producing the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for the acceleration.",
          "workingLatex": "a = -g = -9.8\\ \\text{m s}^{-2}",
          "explanation": "The mass cancels, leaving an acceleration equal to $g$ downward. The person and lift are in free fall together.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the zero-reading result.",
          "workingLatex": "|a| = 9.8\\ \\text{m s}^{-2} \\text{ downward}",
          "explanation": "The reading is zero only when the lift accelerates downward at $9.8\\ \\text{m s}^{-2}$, that is, in free fall. This is the sensation of weightlessness.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answers.",
          "workingLatex": "R_{\\uparrow} = 847.5\\ \\text{N}, \\quad R_{\\downarrow} = 622.5\\ \\text{N}, \\quad a_{R=0} = 9.8\\ \\text{m s}^{-2}\\text{ down}",
          "explanation": "The scales read $847.5\\ \\text{N}$ accelerating up, $622.5\\ \\text{N}$ accelerating down, and zero only in free fall at $9.8\\ \\text{m s}^{-2}$ downward.",
          "diagram": null
        }
      ],
      "finalAnswer": "Upward: $R = 847.5\\ \\text{N}$; downward: $R = 622.5\\ \\text{N}$; the reading is zero when the lift accelerates downward at $9.8\\ \\text{m s}^{-2}$ (free fall)."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "equilibrium",
      "resolving",
      "tension",
      "trigonometry"
    ],
    "questionText": "A particle is in equilibrium under three forces: a $10\\ \\text{N}$ force acting horizontally, a weight $W\\ \\text{N}$ acting vertically downward, and a tension $T$ in a string at $50^\\circ$ above the horizontal. By resolving horizontally and vertically, find $T$ and $W$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A single point (the particle) has three forces acting on it: a horizontal 10 N force pointing to the left, a string pulling up and to the right at 50 degrees above the horizontal with tension T, and a weight W pointing straight down. The three forces are in equilibrium.",
      "alt": "A particle in equilibrium under a horizontal 10 N force, a weight W downward, and a tension T at 50 degrees above the horizontal."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equilibrium condition.",
          "workingLatex": "\\text{resultant} = \\mathbf{0}",
          "explanation": "In equilibrium the forces balance, so the components in each direction must separately sum to zero. We resolve horizontally and vertically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve the tension into components.",
          "workingLatex": "T_x = T\\cos 50^\\circ, \\quad T_y = T\\sin 50^\\circ",
          "explanation": "The string is at an angle, so we split its tension into a horizontal part $T\\cos 50^\\circ$ and a vertical part $T\\sin 50^\\circ$ to compare with the other forces.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve horizontally.",
          "workingLatex": "T\\cos 50^\\circ = 10",
          "explanation": "The only horizontal forces are the tension's horizontal component and the $10\\ \\text{N}$ force. For balance they must be equal and opposite, giving this equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Resolve vertically.",
          "workingLatex": "T\\sin 50^\\circ = W",
          "explanation": "Vertically, the tension's upward component must support the downward weight. Setting them equal gives the vertical equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the horizontal equation for $T$.",
          "workingLatex": "T = \\frac{10}{\\cos 50^\\circ}",
          "explanation": "Dividing both sides by $\\cos 50^\\circ$ isolates the tension. The horizontal equation is chosen first because it contains only $T$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Insert the value of the cosine.",
          "workingLatex": "\\cos 50^\\circ \\approx 0.6428",
          "explanation": "Evaluating the cosine prepares the calculation. A larger angle would give a smaller cosine and hence a larger tension.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the tension.",
          "workingLatex": "T = \\frac{10}{0.6428} \\approx 15.56\\ \\text{N}",
          "explanation": "Dividing gives a tension of about $15.56\\ \\text{N}$ in the string.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute $T$ into the vertical equation.",
          "workingLatex": "W = T\\sin 50^\\circ = 15.56 \\times \\sin 50^\\circ",
          "explanation": "With the tension known, the vertical equation gives the weight directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Insert the value of the sine.",
          "workingLatex": "\\sin 50^\\circ \\approx 0.7660",
          "explanation": "Evaluating the sine allows the final multiplication for the weight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the weight.",
          "workingLatex": "W = 15.56 \\times 0.7660 \\approx 11.92\\ \\text{N}",
          "explanation": "Multiplying gives a weight of about $11.92\\ \\text{N}$ supported by the string.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check with an independent relation.",
          "workingLatex": "W = 10\\tan 50^\\circ",
          "explanation": "Dividing the vertical equation by the horizontal one eliminates $T$, giving $W = 10\\tan 50^\\circ$. This is a quick independent check.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the check.",
          "workingLatex": "10\\tan 50^\\circ \\approx 10 \\times 1.1918 = 11.92\\ \\text{N}",
          "explanation": "This matches the earlier value of $W$, confirming the working is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answers.",
          "workingLatex": "T \\approx 15.56\\ \\text{N}, \\quad W \\approx 11.92\\ \\text{N}",
          "explanation": "The tension in the string is about $15.56\\ \\text{N}$ and the weight is about $11.92\\ \\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T \\approx 15.56\\ \\text{N}$ and $W \\approx 11.92\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "resultant-force",
      "vectors",
      "newtons-second-law",
      "acceleration",
      "components"
    ],
    "questionText": "A particle of mass $3\\ \\text{kg}$ is acted on by three forces $(a\\mathbf{i} + 3\\mathbf{j})\\ \\text{N}$, $(4\\mathbf{i} + b\\mathbf{j})\\ \\text{N}$ and $(-2\\mathbf{i} - 5\\mathbf{j})\\ \\text{N}$, giving a resultant of $(5\\mathbf{i} - 4\\mathbf{j})\\ \\text{N}$. Find $a$ and $b$, and hence the acceleration vector and its magnitude.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the resultant as the vector sum of the three forces.",
          "workingLatex": "(a\\mathbf{i}+3\\mathbf{j})+(4\\mathbf{i}+b\\mathbf{j})+(-2\\mathbf{i}-5\\mathbf{j}) = 5\\mathbf{i}-4\\mathbf{j}",
          "explanation": "The resultant of several forces acting on a body is just their vector sum. Setting that sum equal to the given resultant lets us compare the two sides component by component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect the $\\mathbf{i}$-components on the left.",
          "workingLatex": "a+4+(-2) = 5",
          "explanation": "Two vectors are equal only when their horizontal ($\\mathbf{i}$) parts match. So the $\\mathbf{i}$ terms on the left must add up to the $\\mathbf{i}$ term on the right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the $\\mathbf{i}$-equation.",
          "workingLatex": "a+2 = 5",
          "explanation": "Combining the known numbers $4-2=2$ leaves a simple equation in the single unknown $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $a$.",
          "workingLatex": "a = 3",
          "explanation": "Subtracting $2$ from both sides isolates $a$, giving its value directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the $\\mathbf{j}$-components on the left.",
          "workingLatex": "3+b+(-5) = -4",
          "explanation": "The same reasoning applies vertically: the $\\mathbf{j}$ parts on the left must equal the $\\mathbf{j}$ part of the resultant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the $\\mathbf{j}$-equation.",
          "workingLatex": "b-2 = -4",
          "explanation": "Combining $3-5=-2$ reduces this to a single equation in $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $b$.",
          "workingLatex": "b = -2",
          "explanation": "Adding $2$ to both sides gives $b$. The negative value simply means that force's $\\mathbf{j}$-component points in the $-\\mathbf{j}$ direction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State Newton's second law.",
          "workingLatex": "\\mathbf{F} = m\\mathbf{a}",
          "explanation": "The resultant force and the acceleration are linked by Newton's second law: the net force equals mass times acceleration, and both are vectors pointing the same way.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange to make acceleration the subject.",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathbf{F}}{m} = \\dfrac{5\\mathbf{i}-4\\mathbf{j}}{3}",
          "explanation": "Dividing the resultant force by the mass gives the acceleration. Dividing a vector by a scalar just scales each component.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write out the acceleration vector.",
          "workingLatex": "\\mathbf{a} = \\tfrac{5}{3}\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j} \\ \\text{m s}^{-2}",
          "explanation": "Each component of the force is divided by $3$, giving the acceleration components in $\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the magnitude of the acceleration.",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{\\left(\\tfrac{5}{3}\\right)^2 + \\left(\\tfrac{4}{3}\\right)^2}",
          "explanation": "The magnitude of a vector is found with Pythagoras: square each component, add, then square-root. This gives the size of the acceleration regardless of direction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the terms under the root.",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{\\tfrac{25}{9}+\\tfrac{16}{9}} = \\sqrt{\\tfrac{41}{9}}",
          "explanation": "Both fractions share the denominator $9$, so the numerators add to $41$, leaving a single surd to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the magnitude.",
          "workingLatex": "|\\mathbf{a}| = \\dfrac{\\sqrt{41}}{3} \\approx 2.13 \\ \\text{m s}^{-2}",
          "explanation": "Taking the square root of the fraction and evaluating gives the numerical size of the acceleration to three significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$ and $b = -2$; the acceleration is $\\mathbf{a} = \\tfrac{5}{3}\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j} \\ \\text{m s}^{-2}$ with magnitude $\\dfrac{\\sqrt{41}}{3} \\approx 2.13 \\ \\text{m s}^{-2}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "driving-force",
      "resistance",
      "maximum-speed",
      "acceleration"
    ],
    "questionText": "A car of mass $1200\\ \\text{kg}$ experiences a constant resistance $R$. Its engine provides a driving force of $4000\\ \\text{N}$, and the car has a maximum speed at which the acceleration is zero. If at maximum speed the resistance $R$ balances the drive, find $R$; then find the car's acceleration when the driving force is $4000\\ \\text{N}$ and the resistance is $1600\\ \\text{N}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the maximum-speed condition.",
          "workingLatex": "\\text{max speed} \\;\\Rightarrow\\; a = 0",
          "explanation": "A car reaches its maximum speed exactly when it can no longer accelerate. At that instant the acceleration is zero, which is the key that unlocks the value of the resistance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply Newton's second law along the direction of motion.",
          "workingLatex": "D - R = ma",
          "explanation": "The net forward force is the driving force $D$ minus the resistance $R$. Newton's second law equates this to mass times acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the zero-acceleration condition.",
          "workingLatex": "D - R = 1200 \\times 0 = 0",
          "explanation": "With $a=0$ at top speed, the right-hand side vanishes, so the driving force and resistance must be equal and opposite.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the resistance.",
          "workingLatex": "R = D = 4000 \\ \\text{N}",
          "explanation": "Rearranging shows the resistance balances the full driving force at maximum speed, so $R = 4000\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Comment on the balance of forces.",
          "workingLatex": "D = R = 4000 \\ \\text{N}",
          "explanation": "At top speed nothing is left over to change the motion: the engine's push is entirely used up overcoming resistance, so the speed stays constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the second scenario, where the resistance is smaller.",
          "workingLatex": "D = 4000 \\ \\text{N}, \\quad R' = 1600 \\ \\text{N}",
          "explanation": "At lower speeds the resistance is smaller (here $1600\\ \\text{N}$), so the engine force is no longer fully cancelled and the car can accelerate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the net forward force.",
          "workingLatex": "F_{\\text{net}} = D - R' = 4000 - 1600",
          "explanation": "The resultant driving the car forward is the excess of the driving force over the resistance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the net force.",
          "workingLatex": "F_{\\text{net}} = 2400 \\ \\text{N}",
          "explanation": "Subtracting gives a positive resultant of $2400\\ \\text{N}$, confirming the car accelerates forward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State Newton's second law for the acceleration.",
          "workingLatex": "F_{\\text{net}} = ma",
          "explanation": "The net force and the acceleration are linked by $F = ma$; we know the force and the mass, so we can find the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange for acceleration.",
          "workingLatex": "a = \\dfrac{F_{\\text{net}}}{m}",
          "explanation": "Dividing the net force by the mass isolates the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the numbers.",
          "workingLatex": "a = \\dfrac{2400}{1200}",
          "explanation": "Putting in the net force of $2400\\ \\text{N}$ and mass $1200\\ \\text{kg}$ prepares the final division.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the acceleration.",
          "workingLatex": "a = 2 \\ \\text{m s}^{-2}",
          "explanation": "The division gives an acceleration of $2\\ \\text{m s}^{-2}$ in the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the complete result.",
          "workingLatex": "R = 4000 \\ \\text{N}, \\quad a = 2 \\ \\text{m s}^{-2}",
          "explanation": "Both parts are now answered: the resistance at top speed and the acceleration when the resistance drops to $1600\\ \\text{N}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 4000\\ \\text{N}$; when the resistance is $1600\\ \\text{N}$ the acceleration is $a = 2\\ \\text{m s}^{-2}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resultant-force",
      "vectors",
      "magnitude-direction",
      "kinematics"
    ],
    "questionText": "A particle of mass $5\\ \\text{kg}$ has acceleration $\\mathbf{a} = (6\\mathbf{i} - 8\\mathbf{j})\\ \\text{m s}^{-2}$. Find the resultant force, its magnitude and the angle it makes with $\\mathbf{i}$; then find the particle's speed after $5\\ \\text{s}$ if it starts from rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State Newton's second law in vector form.",
          "workingLatex": "\\mathbf{F} = m\\mathbf{a}",
          "explanation": "The resultant force is mass times acceleration. Since the acceleration is a vector, the force it produces points the same way and is found component by component.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the mass and acceleration.",
          "workingLatex": "\\mathbf{F} = 5(6\\mathbf{i} - 8\\mathbf{j})",
          "explanation": "Multiplying the acceleration vector by the mass scales each component by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the resultant force vector.",
          "workingLatex": "\\mathbf{F} = (30\\mathbf{i} - 40\\mathbf{j}) \\ \\text{N}",
          "explanation": "Carrying out the multiplication gives the resultant force in component form, in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the magnitude of the force.",
          "workingLatex": "|\\mathbf{F}| = \\sqrt{30^2 + 40^2}",
          "explanation": "The size of a force vector comes from Pythagoras on its two perpendicular components.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify inside the root.",
          "workingLatex": "|\\mathbf{F}| = \\sqrt{900 + 1600} = \\sqrt{2500}",
          "explanation": "Squaring and adding the components gives $2500$, a perfect square, which makes the root exact.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the magnitude.",
          "workingLatex": "|\\mathbf{F}| = 50 \\ \\text{N}",
          "explanation": "The square root of $2500$ is $50$, so the resultant force has magnitude $50\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the angle the force makes with $\\mathbf{i}$.",
          "workingLatex": "\\tan\\theta = \\dfrac{-40}{30}",
          "explanation": "The angle to the $\\mathbf{i}$-axis is found from the ratio of the $\\mathbf{j}$-component to the $\\mathbf{i}$-component. The negative $\\mathbf{j}$-part tells us the force points below the horizontal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the inverse tangent.",
          "workingLatex": "\\theta = \\arctan\\!\\left(\\dfrac{40}{30}\\right) \\approx 53.1^\\circ",
          "explanation": "Ignoring the sign gives the acute angle of $53.1^\\circ$; the sign tells us on which side of the axis it lies.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the direction clearly.",
          "workingLatex": "\\theta \\approx -53.1^\\circ \\ \\text{(i.e. } 53.1^\\circ \\text{ below } \\mathbf{i})",
          "explanation": "Because the $\\mathbf{j}$-component is negative, the force is directed $53.1^\\circ$ below the positive $\\mathbf{i}$-direction, equivalently an angle of $-53.1^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the magnitude of the acceleration for the speed calculation.",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{6^2 + 8^2} = \\sqrt{36+64}",
          "explanation": "To find how fast the particle is moving we need the size of its acceleration, again from Pythagoras on the acceleration components.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the acceleration magnitude.",
          "workingLatex": "|\\mathbf{a}| = \\sqrt{100} = 10 \\ \\text{m s}^{-2}",
          "explanation": "The components give $100$ under the root, so the acceleration has size $10\\ \\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use the constant-acceleration equation for speed.",
          "workingLatex": "v = u + |\\mathbf{a}|\\,t, \\quad u = 0",
          "explanation": "The acceleration is constant, so speed grows linearly with time. Starting from rest means the initial speed $u$ is zero.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute and evaluate the speed.",
          "workingLatex": "v = 0 + 10 \\times 5 = 50 \\ \\text{m s}^{-1}",
          "explanation": "Multiplying the acceleration by the $5\\ \\text{s}$ elapsed gives a final speed of $50\\ \\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Resultant force $\\mathbf{F} = (30\\mathbf{i} - 40\\mathbf{j})\\ \\text{N}$, magnitude $50\\ \\text{N}$ at $53.1^\\circ$ below the $\\mathbf{i}$-direction ($-53.1^\\circ$); speed after $5\\ \\text{s}$ is $50\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "resolving-forces",
      "friction",
      "newtons-second-law",
      "resultant-force",
      "acceleration"
    ],
    "questionText": "A sledge of mass $25\\ \\text{kg}$ on a rough horizontal surface is pulled by two ropes, each with tension $40\\ \\text{N}$, angled at $30^\\circ$ on either side of the direction of motion (in the horizontal plane). The total friction is $30\\ \\text{N}$. Find the resultant forward force and the acceleration.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A sledge shown from above on a horizontal surface. Two ropes attach at its front, one going out to the left at 30 degrees above the line of motion and one to the right at 30 degrees below the line of motion, each labelled with tension 40 N. A central arrow shows the direction of motion. A friction force of 30 N is drawn pointing backward, opposite to the motion.",
      "alt": "Plan view of a sledge pulled by two symmetric ropes at 30 degrees either side of the motion, with friction opposing."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the direction of motion as the reference direction.",
          "workingLatex": "\\text{forward} = \\text{direction of motion}",
          "explanation": "Because the two ropes are symmetric about the line of motion, resolving along and across that line is the cleanest choice. Only the forward components will drive the sledge.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Resolve one rope along the direction of motion.",
          "workingLatex": "T\\cos30^\\circ = 40\\cos30^\\circ",
          "explanation": "Each rope makes $30^\\circ$ with the direction of motion, so its useful forward pull is the tension times the cosine of that angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the forward component of one rope.",
          "workingLatex": "40\\cos30^\\circ = 40 \\times \\tfrac{\\sqrt{3}}{2} = 20\\sqrt{3} \\approx 34.64 \\ \\text{N}",
          "explanation": "Using $\\cos30^\\circ = \\tfrac{\\sqrt3}{2}$ gives about $34.64\\ \\text{N}$ of forward pull from a single rope.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the forward components of both ropes.",
          "workingLatex": "F_{\\text{ropes}} = 2 \\times 40\\cos30^\\circ = 2 \\times 20\\sqrt{3} \\approx 69.28 \\ \\text{N}",
          "explanation": "The two ropes pull forward equally, so their forward components simply add, doubling the single-rope value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the sideways components.",
          "workingLatex": "40\\sin30^\\circ = 40 \\times \\tfrac{1}{2} = 20 \\ \\text{N} \\ \\text{(each side)}",
          "explanation": "Each rope also has a component perpendicular to the motion. These are equal in size but point to opposite sides of the line of motion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the perpendicular components.",
          "workingLatex": "20 - 20 = 0 \\ \\text{N} \\ \\text{sideways}",
          "explanation": "Because the ropes are symmetric, their sideways pulls cancel exactly, so the sledge is not pushed off course and there is no net perpendicular force.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce the friction force opposing motion.",
          "workingLatex": "F_{\\text{fric}} = 30 \\ \\text{N} \\ \\text{(backward)}",
          "explanation": "Friction always acts against the direction of motion, so it reduces the net forward force by its full $30\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the net forward (resultant) force.",
          "workingLatex": "F_{\\text{net}} = 2 \\times 40\\cos30^\\circ - 30",
          "explanation": "The resultant forward force is the combined forward pull of the ropes minus the friction that opposes it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the resultant forward force.",
          "workingLatex": "F_{\\text{net}} = 69.28 - 30 = 39.28 \\ \\text{N}",
          "explanation": "Subtracting friction from the rope pull leaves a net forward force of about $39.3\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State Newton's second law.",
          "workingLatex": "F_{\\text{net}} = ma",
          "explanation": "The resultant forward force accelerates the sledge according to $F = ma$; we know the force and the mass.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange for the acceleration.",
          "workingLatex": "a = \\dfrac{F_{\\text{net}}}{m} = \\dfrac{39.28}{25}",
          "explanation": "Dividing the net force by the sledge's mass gives its acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the acceleration.",
          "workingLatex": "a \\approx 1.57 \\ \\text{m s}^{-2}",
          "explanation": "The division gives an acceleration of about $1.57\\ \\text{m s}^{-2}$ along the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the complete result.",
          "workingLatex": "F_{\\text{net}} \\approx 39.3 \\ \\text{N}, \\quad a \\approx 1.57 \\ \\text{m s}^{-2}",
          "explanation": "Both requested quantities are now found: the resultant forward force and the resulting acceleration.",
          "diagram": null
        }
      ],
      "finalAnswer": "Resultant forward force $\\approx 39.3\\ \\text{N}$; acceleration $\\approx 1.57\\ \\text{m s}^{-2}$ in the direction of motion."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "lift-problem",
      "normal-reaction",
      "newtons-second-law",
      "weight",
      "acceleration"
    ],
    "questionText": "A person of mass $70\\ \\text{kg}$ stands in a lift. Find the force the floor exerts on the person when the lift (a) accelerates upward at $2\\ \\text{m s}^{-2}$, (b) accelerates downward at $2\\ \\text{m s}^{-2}$, and (c) moves at constant velocity ($g = 9.8$).",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A person standing on the floor of a lift. Two forces act on the person: the weight mg pointing straight down, and the normal reaction R from the floor pointing straight up. An arrow beside the lift indicates the direction of its acceleration.",
      "alt": "A person in a lift with weight acting down and floor reaction acting up."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the forces on the person.",
          "workingLatex": "R \\ (\\text{up}), \\quad mg \\ (\\text{down})",
          "explanation": "Only two forces act on the person: the floor's push upward (the normal reaction $R$, which is what the floor exerts) and gravity pulling down. The reading of a scale would equal $R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the person's weight.",
          "workingLatex": "mg = 70 \\times 9.8 = 686 \\ \\text{N}",
          "explanation": "The weight is mass times gravitational acceleration; this fixed downward force is the same in every part of the question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write Newton's second law, taking up as positive.",
          "workingLatex": "R - mg = ma",
          "explanation": "The net upward force equals mass times the upward acceleration. This single equation handles all three cases by changing the value of $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (a): substitute an upward acceleration of $2\\ \\text{m s}^{-2}$.",
          "workingLatex": "R = m(g+a) = 70(9.8 + 2)",
          "explanation": "For upward acceleration $a$ is positive. Rearranging gives $R = m(g+a)$: the floor must push harder than the weight to accelerate the person up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the reaction for part (a).",
          "workingLatex": "R = 70 \\times 11.8 = 826 \\ \\text{N}",
          "explanation": "The floor exerts $826\\ \\text{N}$, more than the weight, which is why a person feels heavier as a lift accelerates upward.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the part (a) result.",
          "workingLatex": "826 > 686",
          "explanation": "The reaction exceeds the weight by exactly $ma = 140\\ \\text{N}$, the extra force needed to produce the upward acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Part (b): a downward acceleration means $a = -2\\ \\text{m s}^{-2}$.",
          "workingLatex": "R = m(g+a) = 70(9.8 + (-2))",
          "explanation": "With up taken as positive, accelerating downward makes $a$ negative. The same formula applies with $a = -2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify for part (b).",
          "workingLatex": "R = 70(9.8 - 2) = 70 \\times 7.8",
          "explanation": "Subtracting the downward acceleration from $g$ gives the effective value the floor must supply.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the reaction for part (b).",
          "workingLatex": "R = 546 \\ \\text{N}",
          "explanation": "The floor exerts only $546\\ \\text{N}$, less than the weight, which is why a person feels lighter as a lift accelerates downward.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (c): constant velocity means zero acceleration.",
          "workingLatex": "a = 0 \\;\\Rightarrow\\; R - mg = 0",
          "explanation": "Moving at constant velocity means no acceleration, so the net force is zero and the reaction simply balances the weight.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for the reaction in part (c).",
          "workingLatex": "R = mg = 686 \\ \\text{N}",
          "explanation": "With no acceleration, the floor's push equals the weight exactly, so the person feels their normal weight.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the three cases.",
          "workingLatex": "826 \\ \\text{N} > 686 \\ \\text{N} > 546 \\ \\text{N}",
          "explanation": "The reaction is largest when accelerating up, normal at constant velocity, and smallest when accelerating down, matching everyday experience in a lift.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the complete set of answers.",
          "workingLatex": "R_a = 826 \\ \\text{N}, \\quad R_b = 546 \\ \\text{N}, \\quad R_c = 686 \\ \\text{N}",
          "explanation": "These three values are the forces the floor exerts on the person in the three situations.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $826\\ \\text{N}$; (b) $546\\ \\text{N}$; (c) $686\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "resistance",
      "kinematics",
      "deceleration",
      "suvat"
    ],
    "questionText": "A boat of mass $800\\ \\text{kg}$ has engine thrust $1200\\ \\text{N}$ and water resistance $400\\ \\text{N}$. Starting from rest, find its speed after travelling $200\\ \\text{m}$. The engine is then switched off (resistance still $400\\ \\text{N}$); find how much further the boat travels before stopping.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the forces in the driven phase.",
          "workingLatex": "\\text{thrust} = 1200 \\ \\text{N}, \\quad \\text{resistance} = 400 \\ \\text{N}",
          "explanation": "While the engine runs, the thrust drives the boat forward and the water resistance opposes it. The difference determines the motion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the net forward force.",
          "workingLatex": "F_{\\text{net}} = 1200 - 400 = 800 \\ \\text{N}",
          "explanation": "Subtracting the resistance from the thrust gives the resultant force pushing the boat forward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law for the acceleration.",
          "workingLatex": "a = \\dfrac{F_{\\text{net}}}{m} = \\dfrac{800}{800}",
          "explanation": "Dividing the net force by the mass gives the acceleration during the driven phase.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the acceleration.",
          "workingLatex": "a = 1 \\ \\text{m s}^{-2}",
          "explanation": "The boat accelerates at a steady $1\\ \\text{m s}^{-2}$ while the engine is on.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the constant-acceleration equation without time.",
          "workingLatex": "v^2 = u^2 + 2as",
          "explanation": "We know the acceleration and the distance but not the time, so the equation linking speed and distance is the natural choice.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the driven-phase values.",
          "workingLatex": "v^2 = 0^2 + 2 \\times 1 \\times 200 = 400",
          "explanation": "Starting from rest means $u=0$; putting in $a=1$ and $s=200$ gives the square of the speed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the speed after $200\\ \\text{m}$.",
          "workingLatex": "v = \\sqrt{400} = 20 \\ \\text{m s}^{-1}",
          "explanation": "Taking the square root gives a speed of $20\\ \\text{m s}^{-1}$ at the moment the engine is switched off.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the coasting phase after the engine stops.",
          "workingLatex": "F = -400 \\ \\text{N} \\ \\text{(resistance only)}",
          "explanation": "With the engine off, only the water resistance acts, so the net force is $400\\ \\text{N}$ backward, which will slow the boat.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the deceleration.",
          "workingLatex": "a = \\dfrac{-400}{800} = -0.5 \\ \\text{m s}^{-2}",
          "explanation": "Dividing the resistive force by the mass gives a negative acceleration: the boat is decelerating at $0.5\\ \\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the speed-distance equation again.",
          "workingLatex": "v^2 = u^2 + 2as, \\quad u = 20, \\ v = 0",
          "explanation": "The boat coasts to rest, so the final speed is $0$; the initial speed of this phase is the $20\\ \\text{m s}^{-1}$ found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the coasting values.",
          "workingLatex": "0 = 20^2 + 2(-0.5)s",
          "explanation": "Putting in the values gives an equation for the coasting distance $s$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify and solve for the distance.",
          "workingLatex": "0 = 400 - s \\;\\Rightarrow\\; s = 400 \\ \\text{m}",
          "explanation": "The term $2(-0.5)s$ is $-s$, so rearranging gives a coasting distance of $400\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the complete result.",
          "workingLatex": "v = 20 \\ \\text{m s}^{-1}, \\quad s_{\\text{extra}} = 400 \\ \\text{m}",
          "explanation": "The boat reaches $20\\ \\text{m s}^{-1}$ after $200\\ \\text{m}$, then coasts a further $400\\ \\text{m}$ before stopping.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed after $200\\ \\text{m}$ is $20\\ \\text{m s}^{-1}$; after the engine is switched off the boat travels a further $400\\ \\text{m}$ before stopping."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "equilibrium",
      "resolving-forces",
      "tension",
      "strings",
      "trigonometry"
    ],
    "questionText": "A particle hangs in equilibrium supported by two light strings: one horizontal with tension $T_1$, and one at $40^\\circ$ above the horizontal with tension $T_2$. The particle's weight is $30\\ \\text{N}$. By resolving, find $T_1$ and $T_2$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A particle in equilibrium. One light string runs horizontally to the left with tension T1. A second string runs up and to the right at 40 degrees above the horizontal with tension T2. The weight of 30 N acts vertically downward from the particle.",
      "alt": "A hanging particle held by a horizontal string and a string at 40 degrees, with weight acting down."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equilibrium condition.",
          "workingLatex": "\\text{equilibrium} \\;\\Rightarrow\\; \\text{resultant} = \\mathbf{0}",
          "explanation": "In equilibrium the forces balance, so the total force is zero. Resolving in two perpendicular directions gives two equations from this single condition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the three forces.",
          "workingLatex": "T_1 \\ (\\text{horizontal}), \\quad T_2 \\ (40^\\circ \\text{ above horizontal}), \\quad 30 \\ \\text{N} \\ (\\text{down})",
          "explanation": "The particle is held by the two string tensions and pulled down by its weight. Only $T_2$ is angled, so only it has both horizontal and vertical parts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve vertically.",
          "workingLatex": "T_2\\sin40^\\circ = 30",
          "explanation": "Only the sloping string has an upward component. It alone must support the full weight, so its vertical component equals $30\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $T_2$.",
          "workingLatex": "T_2 = \\dfrac{30}{\\sin40^\\circ}",
          "explanation": "Dividing by $\\sin40^\\circ$ isolates the tension in the sloping string.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Insert the value of the sine.",
          "workingLatex": "\\sin40^\\circ \\approx 0.6428",
          "explanation": "Evaluating the sine of $40^\\circ$ prepares the numerical division.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate $T_2$.",
          "workingLatex": "T_2 = \\dfrac{30}{0.6428} \\approx 46.7 \\ \\text{N}",
          "explanation": "The division gives the tension in the sloping string as about $46.7\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Resolve horizontally.",
          "workingLatex": "T_2\\cos40^\\circ = T_1",
          "explanation": "The horizontal component of the sloping string pulls one way; the horizontal string must pull back with equal force to keep the particle in place.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the value of $T_2$.",
          "workingLatex": "T_1 = 46.7\\cos40^\\circ",
          "explanation": "Using the tension just found lets us compute the horizontal string's tension directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Insert the value of the cosine.",
          "workingLatex": "\\cos40^\\circ \\approx 0.7660",
          "explanation": "Evaluating $\\cos40^\\circ$ prepares the final multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate $T_1$.",
          "workingLatex": "T_1 = 46.7 \\times 0.7660 \\approx 35.8 \\ \\text{N}",
          "explanation": "Multiplying gives the tension in the horizontal string as about $35.8\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check with a direct relation.",
          "workingLatex": "T_1 = \\dfrac{30}{\\tan40^\\circ} \\approx \\dfrac{30}{0.8391} \\approx 35.8 \\ \\text{N}",
          "explanation": "Dividing the two resolved equations eliminates $T_2$ and gives $T_1$ via the tangent, confirming the same value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the tensions",
          "workingLatex": "T_2 > T_1\\ \\text{(the inclined string carries the weight)}",
          "explanation": "The inclined string has the larger tension because it alone has a vertical component to hold up the weight, while the horizontal string only balances the sideways pull.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the complete result.",
          "workingLatex": "T_1 \\approx 35.8 \\ \\text{N}, \\quad T_2 \\approx 46.7 \\ \\text{N}",
          "explanation": "Both tensions are now found; the sloping string carries the larger load because it also supports the weight.",
          "diagram": null
        }
      ],
      "finalAnswer": "$T_1 \\approx 35.8\\ \\text{N}$ and $T_2 \\approx 46.7\\ \\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "resolving-forces",
      "normal-reaction",
      "equilibrium",
      "tension",
      "reasoning"
    ],
    "questionText": "A box of mass $8\\ \\text{kg}$ rests on a smooth horizontal table and is pulled by a light rope at an angle $\\theta$ above the horizontal with tension $50\\ \\text{N}$. Find the value of $\\theta$ for which the box is on the point of lifting off the table (normal reaction zero), and comment ($g = 9.8$).",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A box resting on a horizontal table. A light rope leaves the box at an angle theta above the horizontal, with tension 50 N along it. The weight mg acts downward and the normal reaction R acts upward from the table.",
      "alt": "A box on a table pulled by a rope at angle theta, showing weight, tension and normal reaction."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the vertical forces on the box.",
          "workingLatex": "mg \\ (\\text{down}), \\quad R \\ (\\text{up}), \\quad T\\sin\\theta \\ (\\text{up})",
          "explanation": "Vertically, gravity pulls the box down while the table's normal reaction and the upward part of the tension push it up. These must balance while the box stays on the table.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the vertical equilibrium equation.",
          "workingLatex": "R + T\\sin\\theta = mg",
          "explanation": "As long as the box rests on the table there is no vertical acceleration, so the upward forces exactly balance the weight.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the point-of-lifting condition.",
          "workingLatex": "R = 0",
          "explanation": "The box is on the verge of lifting off exactly when the table no longer needs to push, i.e. the normal reaction has fallen to zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $R = 0$ into the equation.",
          "workingLatex": "T\\sin\\theta = mg",
          "explanation": "With the reaction gone, the vertical component of the tension alone would have to support the full weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for $\\sin\\theta$.",
          "workingLatex": "\\sin\\theta = \\dfrac{mg}{T}",
          "explanation": "Dividing by the tension isolates the sine of the required angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the weight of the box.",
          "workingLatex": "mg = 8 \\times 9.8 = 78.4 \\ \\text{N}",
          "explanation": "Multiplying the mass by $g$ gives the box's weight, the downward force the tension would need to overcome.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the numbers.",
          "workingLatex": "\\sin\\theta = \\dfrac{78.4}{50}",
          "explanation": "Putting the weight over the tension gives the value that $\\sin\\theta$ would have to take.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the ratio.",
          "workingLatex": "\\sin\\theta = 1.568",
          "explanation": "The division gives a value greater than one, which is a red flag for the sine function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the range of the sine function.",
          "workingLatex": "-1 \\le \\sin\\theta \\le 1",
          "explanation": "The sine of any angle can never exceed $1$, so a required value of $1.568$ cannot be achieved by any real angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude that no such angle exists.",
          "workingLatex": "\\sin\\theta = 1.568 > 1 \\;\\Rightarrow\\; \\text{no solution}",
          "explanation": "Because no angle has a sine of $1.568$, there is no value of $\\theta$ that makes the normal reaction zero with this tension.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the greatest possible upward pull.",
          "workingLatex": "T\\sin\\theta \\le T = 50 \\ \\text{N} \\ \\text{(at } \\theta = 90^\\circ)",
          "explanation": "The largest upward component occurs when the rope is vertical, giving an upward pull equal to the full tension of $50\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the maximum pull with the weight.",
          "workingLatex": "50 \\ \\text{N} < 78.4 \\ \\text{N}",
          "explanation": "Even a vertical pull of $50\\ \\text{N}$ is less than the weight of $78.4\\ \\text{N}$, so the tension can never lift the box.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion and comment.",
          "workingLatex": "\\text{No } \\theta \\text{ exists; the box cannot be lifted off.}",
          "explanation": "Since the maximum upward tension is smaller than the weight, the normal reaction stays positive for every angle, so the box never leaves the table with a $50\\ \\text{N}$ tension.",
          "diagram": null
        }
      ],
      "finalAnswer": "There is no such $\\theta$: it would require $\\sin\\theta = \\dfrac{78.4}{50} = 1.568 > 1$, which is impossible. The greatest upward pull is $50\\ \\text{N}$ (rope vertical), still less than the weight $78.4\\ \\text{N}$, so the box can never lift off the table with this tension."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "resultant-force",
      "vectors",
      "newtons-second-law",
      "components",
      "parallel-condition"
    ],
    "questionText": "A particle of mass $2\\ \\text{kg}$ is acted on by forces $(10\\mathbf{i} + k\\mathbf{j})\\ \\text{N}$ and $(-4\\mathbf{i} + 2\\mathbf{j})\\ \\text{N}$. Given that the acceleration is parallel to $\\mathbf{i}$, find $k$ and the resulting acceleration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form the resultant force as a vector sum.",
          "workingLatex": "\\mathbf{F} = (10\\mathbf{i} + k\\mathbf{j}) + (-4\\mathbf{i} + 2\\mathbf{j})",
          "explanation": "The net force is the vector sum of the two applied forces. Adding them component by component gives the resultant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the $\\mathbf{i}$-components.",
          "workingLatex": "10 + (-4) = 6",
          "explanation": "The horizontal parts add to $6$, giving the $\\mathbf{i}$-component of the resultant force.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the $\\mathbf{j}$-components.",
          "workingLatex": "k + 2",
          "explanation": "The vertical parts add to $k+2$, which is the $\\mathbf{j}$-component of the resultant and depends on the unknown $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the resultant force.",
          "workingLatex": "\\mathbf{F} = 6\\mathbf{i} + (k+2)\\mathbf{j}",
          "explanation": "Collecting the components gives the resultant in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret 'acceleration parallel to $\\mathbf{i}$'.",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathbf{F}}{m} \\;\\Rightarrow\\; \\mathbf{a} \\parallel \\mathbf{F}",
          "explanation": "Since acceleration is the force divided by the mass, it always points the same way as the resultant force. For the acceleration to be parallel to $\\mathbf{i}$, the force must have no $\\mathbf{j}$-component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the $\\mathbf{j}$-component to zero.",
          "workingLatex": "k + 2 = 0",
          "explanation": "A vector parallel to $\\mathbf{i}$ has zero vertical component, so the $\\mathbf{j}$-part of the resultant must vanish.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $k$.",
          "workingLatex": "k = -2",
          "explanation": "Subtracting $2$ from both sides gives the value of $k$ that removes the vertical force.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the resultant force with $k = -2$.",
          "workingLatex": "\\mathbf{F} = 6\\mathbf{i} + 0\\mathbf{j} = 6\\mathbf{i} \\ \\text{N}",
          "explanation": "With the vertical component gone, the resultant force points purely along $\\mathbf{i}$ with magnitude $6\\ \\text{N}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply Newton's second law.",
          "workingLatex": "\\mathbf{a} = \\dfrac{\\mathbf{F}}{m} = \\dfrac{6\\mathbf{i}}{2}",
          "explanation": "Dividing the resultant force by the mass of $2\\ \\text{kg}$ gives the acceleration vector.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the acceleration.",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{i} \\ \\text{m s}^{-2}",
          "explanation": "The acceleration is $3\\ \\text{m s}^{-2}$ directed along $\\mathbf{i}$, confirming it is parallel to $\\mathbf{i}$ as required.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the magnitude.",
          "workingLatex": "|\\mathbf{a}| = 3 \\ \\text{m s}^{-2}",
          "explanation": "Since the acceleration lies entirely along $\\mathbf{i}$, its magnitude is simply $3\\ \\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the condition",
          "workingLatex": "k + 2 = 0 \\Rightarrow \\text{the } \\mathbf{j}\\text{-forces cancel}",
          "explanation": "With $k = -2$ the two vertical components ($k$ and $+2$) cancel, so the net force — and hence the acceleration — points purely along $\\mathbf{i}$, exactly as required.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the complete result.",
          "workingLatex": "k = -2, \\quad \\mathbf{a} = 3\\mathbf{i} \\ \\text{m s}^{-2}",
          "explanation": "Both requested quantities are found: the value of $k$ and the resulting acceleration.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = -2$; the acceleration is $\\mathbf{a} = 3\\mathbf{i}\\ \\text{m s}^{-2}$ (magnitude $3\\ \\text{m s}^{-2}$, along $\\mathbf{i}$)."
    }
  },
  {
    "id": "al.y1.mech.forces-newton.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Forces and Newton's laws",
    "subtopicId": "al.y1.mech.forces-newton",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": [
      "newtons-second-law",
      "driving-force",
      "resistance",
      "constant-speed",
      "suvat"
    ],
    "questionText": "A car of mass $1500\\ \\text{kg}$ pulls away from rest: for the first $8\\ \\text{s}$ the driving force is $3000\\ \\text{N}$ with a resistance of $600\\ \\text{N}$; it then maintains constant speed. Find the acceleration and the speed reached in the first phase, the driving force needed to maintain constant speed, and the distance travelled in the first phase.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the forces in the first phase.",
          "workingLatex": "D = 3000 \\ \\text{N}, \\quad R = 600 \\ \\text{N}",
          "explanation": "During the first $8\\ \\text{s}$ the engine drives the car forward with $3000\\ \\text{N}$ while a resistance of $600\\ \\text{N}$ opposes the motion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the net forward force.",
          "workingLatex": "F_{\\text{net}} = 3000 - 600 = 2400 \\ \\text{N}",
          "explanation": "The resultant force accelerating the car is the driving force minus the resistance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply Newton's second law.",
          "workingLatex": "a = \\dfrac{F_{\\text{net}}}{m} = \\dfrac{2400}{1500}",
          "explanation": "Dividing the net force by the mass gives the acceleration during the first phase.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the acceleration.",
          "workingLatex": "a = 1.6 \\ \\text{m s}^{-2}",
          "explanation": "The car accelerates at a steady $1.6\\ \\text{m s}^{-2}$ while the driving force exceeds the resistance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the equation for speed from acceleration and time.",
          "workingLatex": "v = u + at",
          "explanation": "The acceleration is constant and we know the time, so this equation gives the speed reached at the end of the first phase.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values.",
          "workingLatex": "v = 0 + 1.6 \\times 8",
          "explanation": "Starting from rest means $u=0$; putting in $a=1.6$ and $t=8$ prepares the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the speed.",
          "workingLatex": "v = 12.8 \\ \\text{m s}^{-1}",
          "explanation": "The car reaches $12.8\\ \\text{m s}^{-1}$ at the end of the first phase, which becomes its constant cruising speed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the constant-speed condition.",
          "workingLatex": "a = 0 \\;\\Rightarrow\\; F_{\\text{net}} = 0",
          "explanation": "Moving at constant speed means no acceleration, so the resultant force is zero and the forces must balance.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Balance the driving force against the resistance.",
          "workingLatex": "D' = R = 600 \\ \\text{N}",
          "explanation": "With zero net force the driving force must exactly equal the resistance, so only $600\\ \\text{N}$ is needed to hold the speed steady.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Choose the equation for the first-phase distance.",
          "workingLatex": "s = ut + \\tfrac{1}{2}at^2",
          "explanation": "The distance travelled under constant acceleration from a known start follows this standard equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the first-phase values.",
          "workingLatex": "s = 0 \\times 8 + \\tfrac{1}{2} \\times 1.6 \\times 8^2",
          "explanation": "With $u=0$ the first term vanishes; the second term uses $a=1.6$ and $t=8$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the arithmetic.",
          "workingLatex": "s = \\tfrac{1}{2} \\times 1.6 \\times 64 = 0.8 \\times 64",
          "explanation": "Squaring the time gives $64$, and half of $1.6$ is $0.8$, leaving a single multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the distance.",
          "workingLatex": "s = 51.2 \\ \\text{m}",
          "explanation": "The car covers $51.2\\ \\text{m}$ during the first $8\\ \\text{s}$ of acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the complete set of results.",
          "workingLatex": "a = 1.6 \\ \\text{m s}^{-2}, \\ v = 12.8 \\ \\text{m s}^{-1}, \\ D' = 600 \\ \\text{N}, \\ s = 51.2 \\ \\text{m}",
          "explanation": "All four requested quantities are now found for the accelerating phase and the subsequent constant-speed phase.",
          "diagram": null
        }
      ],
      "finalAnswer": "Acceleration $1.6\\ \\text{m s}^{-2}$; speed reached $12.8\\ \\text{m s}^{-1}$; driving force for constant speed $600\\ \\text{N}$; distance in the first phase $51.2\\ \\text{m}$."
    }
  }
];
