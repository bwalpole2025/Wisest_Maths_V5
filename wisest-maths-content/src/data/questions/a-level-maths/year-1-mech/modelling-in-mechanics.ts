import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.mech.modelling.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "si-units",
      "base-quantities",
      "recall"
    ],
    "questionText": "The SI system is built from a small set of base units. State the base quantity that each of the following units is used to measure: the kilogram (kg), the metre (m) and the second (s).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what an SI base unit is",
          "workingLatex": "\\text{base unit} \\to \\text{one fundamental quantity}",
          "explanation": "The SI system chooses one standard unit for each basic physical quantity. Every other unit in mechanics is later built out of these. Matching a base unit to its quantity is simply recalling which fundamental idea it measures.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the quantity measured by the kilogram",
          "workingLatex": "\\text{kg} \\to \\text{mass}",
          "explanation": "The kilogram measures how much matter an object contains, which we call its mass. This is why we quote the mass of a car or a ball in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the quantity measured by the metre",
          "workingLatex": "\\text{m} \\to \\text{length (distance)}",
          "explanation": "The metre measures length, the distance between two points in space. Anything to do with how far or how long something is comes back to the metre.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the quantity measured by the second",
          "workingLatex": "\\text{s} \\to \\text{time}",
          "explanation": "The second measures time, the duration over which events happen. In mechanics we use it to say how long a motion lasts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the three pairings together",
          "workingLatex": "\\text{kg}:\\text{mass}, \\quad \\text{m}:\\text{length}, \\quad \\text{s}:\\text{time}",
          "explanation": "Listing the pairs side by side makes the pattern clear: each base unit is tied to exactly one basic quantity, with no overlap between them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{kg} = \\text{mass}, \\;\\; \\text{m} = \\text{length}, \\;\\; \\text{s} = \\text{time}",
          "explanation": "So the kilogram measures mass, the metre measures length (distance) and the second measures time. These three quantities underpin almost all of Year 1 mechanics.",
          "diagram": null
        }
      ],
      "finalAnswer": "The kilogram (kg) measures $\\text{mass}$, the metre (m) measures $\\text{length (distance)}$, and the second (s) measures $\\text{time}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "classification",
    "tags": [
      "si-units",
      "base-units",
      "derived-units",
      "classification"
    ],
    "questionText": "From the following list, state which are SI base units and which are derived units: metre, newton, second, m/s and kilogram.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the difference between base and derived units",
          "workingLatex": "\\text{base: fundamental} \\qquad \\text{derived: built from base units}",
          "explanation": "A base unit stands on its own as a fundamental measurement, while a derived unit is made by combining base units. The test is whether a unit can be written in terms of others.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the three base units we expect here",
          "workingLatex": "\\text{base units in mechanics: } \\text{kg}, \\ \\text{m}, \\ \\text{s}",
          "explanation": "For Year 1 mechanics the base units we meet are the kilogram, metre and second. Any unit that is exactly one of these is a base unit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classify the metre and the second",
          "workingLatex": "\\text{metre} \\to \\text{base}, \\qquad \\text{second} \\to \\text{base}",
          "explanation": "The metre measures length and the second measures time; both are fundamental quantities, so these are base units.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the kilogram",
          "workingLatex": "\\text{kilogram} \\to \\text{base}",
          "explanation": "The kilogram measures mass, another fundamental quantity, so it too is a base unit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Classify m/s",
          "workingLatex": "\\text{m/s} = \\frac{\\text{m}}{\\text{s}} \\to \\text{derived}",
          "explanation": "The unit m/s is a metre divided by a second, so it is made from two base units. Because it is built from base units, it is a derived unit; it measures speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the newton",
          "workingLatex": "1\\,\\text{N} = 1\\,\\text{kg}\\,\\text{m/s}^2 \\to \\text{derived}",
          "explanation": "The newton comes from force = mass times acceleration, so it equals a kilogram metre per second squared. Since it is a combination of base units, it is a derived unit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full classification",
          "workingLatex": "\\text{base: metre, second, kilogram} \\quad\\vert\\quad \\text{derived: newton, m/s}",
          "explanation": "So the metre, second and kilogram are base units, while the newton and m/s are derived units because they are built from those base units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Base units: metre, second, kilogram. Derived units: newton, m/s."
    }
  },
  {
    "id": "al.y1.mech.modelling.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "units",
    "tags": [
      "derived-units",
      "speed",
      "acceleration"
    ],
    "questionText": "State the standard SI units used to measure (a) speed and (b) acceleration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how the units of a quantity follow from its definition",
          "workingLatex": "\\text{units of a quantity} \\gets \\text{its defining formula}",
          "explanation": "The unit of any quantity is found by putting the units of its ingredients into its definition. So to get the units of speed and acceleration we start from what each one means.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the definition of speed",
          "workingLatex": "\\text{speed} = \\frac{\\text{distance}}{\\text{time}}",
          "explanation": "Speed measures how much distance is covered in a given time, so it is distance divided by time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the SI units for distance and time",
          "workingLatex": "\\text{units of speed} = \\frac{\\text{m}}{\\text{s}} = \\text{m/s}",
          "explanation": "Distance is measured in metres and time in seconds, so speed is metres per second, written m/s or $\\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the definition of acceleration",
          "workingLatex": "\\text{acceleration} = \\frac{\\text{change in velocity}}{\\text{time}}",
          "explanation": "Acceleration measures how quickly velocity changes, so it is a change in velocity (which has speed units) divided by the time taken.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the SI units for velocity and time",
          "workingLatex": "\\text{units of acceleration} = \\frac{\\text{m/s}}{\\text{s}} = \\text{m/s}^2",
          "explanation": "A velocity in m/s divided by a time in seconds gives m/s divided by s, which is metres per second squared, written m/s$^2$ or $\\text{m s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the two units",
          "workingLatex": "\\text{(a) } \\text{m/s} \\qquad \\text{(b) } \\text{m/s}^2",
          "explanation": "So speed is measured in metres per second (m/s) and acceleration in metres per second squared (m/s$^2$). Both are derived from the base units metre and second.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Speed is measured in $\\text{m/s}$; (b) acceleration is measured in $\\text{m/s}^2$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "units",
    "tags": [
      "newton",
      "base-units",
      "force"
    ],
    "questionText": "The newton (N) is the SI unit of force. Express the newton in terms of the SI base units kilogram, metre and second.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the equation that defines force",
          "workingLatex": "F = ma",
          "explanation": "A force is defined through Newton's second law as mass times acceleration. This equation is what links the newton to the base units, because units on both sides must match.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the SI unit of each quantity on the right",
          "workingLatex": "m \\to \\text{kg}, \\qquad a \\to \\text{m/s}^2",
          "explanation": "Mass is measured in kilograms and acceleration in metres per second squared. Replacing each symbol by its unit turns the formula into a units equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine the units on the right-hand side",
          "workingLatex": "\\text{unit of } F = \\text{kg} \\times \\text{m/s}^2",
          "explanation": "Multiplying the units together, exactly as the formula multiplies the quantities, gives the unit of force as a kilogram times metres per second squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the product neatly as base units",
          "workingLatex": "\\text{kg} \\times \\text{m/s}^2 = \\frac{\\text{kg}\\,\\text{m}}{\\text{s}^2} = \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}",
          "explanation": "Writing the metres on top and the seconds squared on the bottom shows the combination of kilogram, metre and second clearly, using only the three base units.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify this combination as the newton",
          "workingLatex": "1\\,\\text{N} = 1\\,\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}",
          "explanation": "One newton is precisely the force that gives a one kilogram mass an acceleration of one metre per second squared, so the newton equals kg m s$^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the base-unit form of the newton",
          "workingLatex": "\\text{N} = \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}",
          "explanation": "So the newton is not a base unit itself; it is a derived unit equal to a kilogram metre per second squared, built entirely from kg, m and s.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1\\,\\text{N} = 1\\,\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}$ (kilogram metre per second squared)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "classification",
    "tags": [
      "scalars-vectors",
      "classification",
      "kinematics"
    ],
    "questionText": "Classify each of the following quantities as a scalar or a vector: distance, displacement, speed and velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the test for scalar versus vector",
          "workingLatex": "\\text{scalar: size only} \\qquad \\text{vector: size and direction}",
          "explanation": "A scalar is fully described by a number and its unit, whereas a vector also needs a direction. For each quantity we just ask whether direction is part of its meaning.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Consider distance",
          "workingLatex": "\\text{distance} = \\text{total length travelled}",
          "explanation": "Distance is how far something has travelled in total, such as 5 km. It records a length without caring about which way you went, so no direction is attached.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consider displacement",
          "workingLatex": "\\text{displacement} = 5\\,\\text{km due east}",
          "explanation": "Displacement is how far and in what direction you end up from the start. The phrase 'due east' is essential, so a direction is built into the quantity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider speed",
          "workingLatex": "\\text{speed} = 30\\,\\text{m/s}",
          "explanation": "Speed tells you how fast something moves, for example 30 m/s, but says nothing about direction. It is the size of the motion only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider velocity",
          "workingLatex": "\\text{velocity} = 30\\,\\text{m/s due east}",
          "explanation": "Velocity is speed together with a direction, such as 30 m/s due east. Because the direction is part of the information, velocity carries both size and direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sort the quantities into the two groups",
          "workingLatex": "\\text{no direction: distance, speed} \\quad\\vert\\quad \\text{with direction: displacement, velocity}",
          "explanation": "Distance and speed have size only, while displacement and velocity also carry a direction. This grouping decides the classification.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the classification",
          "workingLatex": "\\text{scalars: distance, speed} \\qquad \\text{vectors: displacement, velocity}",
          "explanation": "So distance and speed are scalars, and displacement and velocity are the corresponding vectors. Each scalar has a vector partner that adds the missing direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "Scalars: distance and speed. Vectors: displacement and velocity."
    }
  },
  {
    "id": "al.y1.mech.modelling.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "classification",
    "tags": [
      "scalars-vectors",
      "mass",
      "weight",
      "time"
    ],
    "questionText": "State whether each of the following is a scalar or a vector quantity: (a) mass, (b) weight, (c) time. Give your answers as a short list.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the difference between a scalar and a vector",
          "workingLatex": "\\text{scalar: size only} \\qquad \\text{vector: size and direction}",
          "explanation": "A scalar is fully described by a single number together with its unit. A vector needs a direction as well. So for each quantity we simply ask whether a direction is part of what it means.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Classify the mass",
          "workingLatex": "\\text{mass} = 6\\,\\text{kg} \\ \\Rightarrow \\ \\textbf{scalar}",
          "explanation": "Mass measures how much matter an object contains. It has a size but no direction, so it is a scalar.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Classify the weight",
          "workingLatex": "\\mathbf{W} = m\\mathbf{g} \\ \\text{acts downward} \\ \\Rightarrow \\ \\textbf{vector}",
          "explanation": "Weight is the force of gravity pulling an object downward. A force always has a direction (here, towards the ground), so weight is a vector.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Classify the time",
          "workingLatex": "\\text{time} = 5\\,\\text{s} \\ \\Rightarrow \\ \\textbf{scalar}",
          "explanation": "Time is measured by a single number of seconds and does not point in any direction, so it is a scalar.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the three classifications",
          "workingLatex": "\\text{mass: scalar}, \\quad \\text{weight: vector}, \\quad \\text{time: scalar}",
          "explanation": "Gathering the results together makes the pattern clear: only weight, being a force, carries a direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final list",
          "workingLatex": "\\text{(a) scalar} \\quad \\text{(b) vector} \\quad \\text{(c) scalar}",
          "explanation": "Mass and time are scalars because each has size only, while weight is a vector because it has both a size and a downward direction.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) mass is a $\\textbf{scalar}$; (b) weight is a $\\textbf{vector}$; (c) time is a $\\textbf{scalar}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "weight",
      "mass-and-weight",
      "force-calculation"
    ],
    "questionText": "A particle has mass $6\\,\\text{kg}$. Taking $g = 9.8\\,\\text{m/s}^2$, find its weight.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the formula linking weight and mass",
          "workingLatex": "W = mg",
          "explanation": "Weight is the downward force of gravity on an object, and it is found by multiplying the mass by the acceleration due to gravity. This is the key relationship in every weight calculation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the given values",
          "workingLatex": "m = 6\\,\\text{kg}, \\qquad g = 9.8\\,\\text{m/s}^2",
          "explanation": "Listing the known quantities before substituting keeps the calculation tidy and makes sure the right numbers go in the right places.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "W = 6 \\times 9.8",
          "explanation": "Putting the mass and gravity straight into $W = mg$ turns the general rule into a single multiplication we can evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Carry out the multiplication",
          "workingLatex": "6 \\times 9.8 = 58.8",
          "explanation": "Multiplying six by nine point eight gives fifty-eight point eight, the numerical size of the weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Attach the correct unit",
          "workingLatex": "W = 58.8\\,\\text{N}",
          "explanation": "Weight is a force, and forces are measured in newtons (N), so we label the answer with N rather than kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "W = 58.8\\,\\text{N}",
          "explanation": "The particle's weight is 58.8 newtons, the gravitational force pulling it downward.",
          "diagram": null
        }
      ],
      "finalAnswer": "The weight is $58.8\\,\\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "weight",
      "mass-and-weight",
      "force-calculation"
    ],
    "questionText": "A suitcase has mass $15\\,\\text{kg}$. Taking $g = 9.8\\,\\text{m/s}^2$, find its weight in newtons.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the weight formula",
          "workingLatex": "W = mg",
          "explanation": "The weight of an object is its mass multiplied by the acceleration due to gravity. This single formula is all we need to turn a mass into a force.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the known values",
          "workingLatex": "m = 15\\,\\text{kg}, \\qquad g = 9.8\\,\\text{m/s}^2",
          "explanation": "The suitcase has a mass of 15 kilograms, and we are told to use 9.8 for gravity. Noting these first avoids any mix-up when we substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "W = 15 \\times 9.8",
          "explanation": "Replacing $m$ with 15 and $g$ with 9.8 turns the formula into one straightforward multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the product",
          "workingLatex": "15 \\times 9.8 = 147",
          "explanation": "Fifteen lots of nine point eight equals 147. A handy check is $15 \\times 10 = 150$, and we take away $15 \\times 0.2 = 3$ to reach 147.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Attach the unit of force",
          "workingLatex": "W = 147\\,\\text{N}",
          "explanation": "Because weight is a force, its unit is the newton, so we write the answer as 147 N.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "W = 147\\,\\text{N}",
          "explanation": "The suitcase weighs 147 newtons, which is the downward pull of gravity on its 15 kg of mass.",
          "diagram": null
        }
      ],
      "finalAnswer": "The weight is $147\\,\\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "weight",
      "mass-and-weight",
      "rearrangement"
    ],
    "questionText": "An object has weight $78.4\\,\\text{N}$. Taking $g = 9.8\\,\\text{m/s}^2$, find its mass in kilograms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the relationship between weight and mass",
          "workingLatex": "W = mg",
          "explanation": "Weight equals mass times gravity. This time the weight is known and the mass is unknown, so we will need to rearrange the formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make the mass the subject",
          "workingLatex": "m = \\frac{W}{g}",
          "explanation": "Dividing both sides of $W = mg$ by $g$ leaves the mass on its own. To find a mass from a weight we therefore divide the weight by gravity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values",
          "workingLatex": "W = 78.4\\,\\text{N}, \\qquad g = 9.8\\,\\text{m/s}^2",
          "explanation": "The weight is 78.4 newtons and gravity is 9.8, so these are the two numbers to feed into the rearranged formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the rearranged formula",
          "workingLatex": "m = \\frac{78.4}{9.8}",
          "explanation": "Placing the weight over gravity sets up the single division that gives the mass.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Carry out the division",
          "workingLatex": "\\frac{78.4}{9.8} = 8",
          "explanation": "Dividing 78.4 by 9.8 gives exactly 8. You can check this the other way round: $8 \\times 9.8 = 78.4$, which matches the given weight.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Attach the correct unit",
          "workingLatex": "m = 8\\,\\text{kg}",
          "explanation": "Mass is measured in kilograms, not newtons, so the answer is labelled kg.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "m = 8\\,\\text{kg}",
          "explanation": "The object has a mass of 8 kilograms, the amount of matter that produces a weight of 78.4 N under gravity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The mass is $8\\,\\text{kg}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "mass",
      "grams-kilograms"
    ],
    "questionText": "Convert a mass of $4500\\,\\text{g}$ into kilograms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how grams relate to kilograms",
          "workingLatex": "1000\\,\\text{g} = 1\\,\\text{kg}",
          "explanation": "There are one thousand grams in a single kilogram. This one fact is the whole basis of the conversion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide which operation is needed",
          "workingLatex": "\\text{grams} \\to \\text{kilograms}: \\ \\div\\,1000",
          "explanation": "Going from grams to the larger kilogram unit means the number should get smaller, so we divide by 1000 rather than multiply.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the conversion",
          "workingLatex": "4500\\,\\text{g} = \\frac{4500}{1000}\\,\\text{kg}",
          "explanation": "Writing the mass as 4500 divided by 1000 turns the conversion into a simple calculation in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Carry out the division",
          "workingLatex": "\\frac{4500}{1000} = 4.5",
          "explanation": "Dividing by 1000 moves the decimal point three places to the left, turning 4500 into 4.5.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Attach the unit",
          "workingLatex": "4500\\,\\text{g} = 4.5\\,\\text{kg}",
          "explanation": "The result is now in the larger unit, so we label it kg to show the mass in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "4.5\\,\\text{kg}",
          "explanation": "A mass of 4500 grams is the same as 4.5 kilograms, which is the SI unit we use in mechanics.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4500\\,\\text{g} = 4.5\\,\\text{kg}$"
    }
  },
  {
    "id": "al.y1.mech.modelling.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "mass",
      "tonnes"
    ],
    "questionText": "A lorry has a mass of $3.2$ tonnes. Convert this mass into kilograms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion between tonnes and kilograms",
          "workingLatex": "1\\,\\text{tonne} = 1000\\,\\text{kg}",
          "explanation": "A tonne is a metric unit of mass equal to one thousand kilograms. Knowing this single fact is all we need to change from tonnes into kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the mass we are given",
          "workingLatex": "m = 3.2\\,\\text{tonnes}",
          "explanation": "Recording the starting value clearly makes sure we convert the right number and keep track of its units throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide the operation needed",
          "workingLatex": "\\text{tonnes} \\to \\text{kg}: \\ \\times 1000",
          "explanation": "Each tonne is worth 1000 kilograms, so to find how many kilograms there are we multiply the number of tonnes by 1000. Since a kilogram is a smaller unit than a tonne, we expect a larger number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the mass by 1000",
          "workingLatex": "m = 3.2 \\times 1000\\,\\text{kg}",
          "explanation": "Replacing each tonne by 1000 kilograms turns the conversion into a simple multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Carry out the multiplication",
          "workingLatex": "3.2 \\times 1000 = 3200",
          "explanation": "Multiplying by 1000 moves the decimal point three places to the right, changing $3.2$ into $3200$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the mass in kilograms",
          "workingLatex": "m = 3200\\,\\text{kg}",
          "explanation": "So the lorry's mass is 3200 kilograms, which is the SI unit of mass we use when working with forces and Newton's laws.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3.2\\,\\text{tonnes} = 3200\\,\\text{kg}$"
    }
  },
  {
    "id": "al.y1.mech.modelling.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "length"
    ],
    "questionText": "(a) Convert a length of $350\\,\\text{cm}$ into metres. (b) Convert a length of $45\\,\\text{mm}$ into metres.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversions to the metre",
          "workingLatex": "1\\,\\text{m} = 100\\,\\text{cm}, \\qquad 1\\,\\text{m} = 1000\\,\\text{mm}",
          "explanation": "The metre is the SI unit of length. There are 100 centimetres and 1000 millimetres in one metre, and these two facts let us rewrite either measurement in metres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide the operation for part (a)",
          "workingLatex": "\\text{cm} \\to \\text{m}: \\ \\div 100",
          "explanation": "Because 100 centimetres make a single metre, we divide the number of centimetres by 100. A metre is a larger unit than a centimetre, so the value should get smaller.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert 350 cm to metres",
          "workingLatex": "350\\,\\text{cm} = \\frac{350}{100}\\,\\text{m}",
          "explanation": "Dividing the length by 100 tells us how many whole metres, and fractions of a metre, the 350 centimetres make up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify part (a)",
          "workingLatex": "\\frac{350}{100} = 3.5",
          "explanation": "Dividing by 100 moves the decimal point two places to the left, so $350$ becomes $3.5$ metres.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide the operation for part (b)",
          "workingLatex": "\\text{mm} \\to \\text{m}: \\ \\div 1000",
          "explanation": "There are 1000 millimetres in a metre, so to change millimetres into metres we divide by 1000. Again the metre is the larger unit, so we expect a smaller number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Convert 45 mm to metres",
          "workingLatex": "45\\,\\text{mm} = \\frac{45}{1000}\\,\\text{m} = 0.045\\,\\text{m}",
          "explanation": "Dividing by 1000 moves the decimal point three places to the left, turning $45$ into $0.045$ metres.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State both answers",
          "workingLatex": "\\text{(a) } 3.5\\,\\text{m} \\qquad \\text{(b) } 0.045\\,\\text{m}",
          "explanation": "Both lengths are now expressed in metres, the standard SI unit, ready to be used consistently in any mechanics calculation.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $350\\,\\text{cm} = 3.5\\,\\text{m}$; (b) $45\\,\\text{mm} = 0.045\\,\\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.modelling.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "speed",
      "kmh-to-ms"
    ],
    "questionText": "A train travels at a steady speed of $90\\,\\text{km/h}$. Convert this speed into metres per second.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the two unit facts we need",
          "workingLatex": "1\\,\\text{km} = 1000\\,\\text{m}, \\qquad 1\\,\\text{h} = 3600\\,\\text{s}",
          "explanation": "A speed in km/h mixes kilometres and hours, so to reach m/s we need to know that a kilometre is 1000 metres and an hour is $60 \\times 60 = 3600$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the speed as distance over time",
          "workingLatex": "90\\,\\text{km/h} = \\frac{90\\,\\text{km}}{1\\,\\text{h}}",
          "explanation": "Expressing the speed as a fraction makes clear which units sit on the top and which on the bottom, so we know exactly what to replace.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace kilometres with metres",
          "workingLatex": "= \\frac{90 \\times 1000\\,\\text{m}}{1\\,\\text{h}} = \\frac{90000\\,\\text{m}}{1\\,\\text{h}}",
          "explanation": "Swapping each kilometre for 1000 metres multiplies the distance on top by 1000, so the numerator becomes 90000 metres.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace the hour with seconds",
          "workingLatex": "= \\frac{90000\\,\\text{m}}{3600\\,\\text{s}}",
          "explanation": "An hour is 3600 seconds, so the denominator becomes 3600 seconds and the fraction is now measured in metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the fraction",
          "workingLatex": "\\frac{90000}{3600} = 25",
          "explanation": "Dividing 90000 by 3600 gives 25, so the numerical value of the speed in the new units is 25.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the useful shortcut",
          "workingLatex": "\\text{km/h} \\to \\text{m/s}: \\ \\div 3.6",
          "explanation": "Because 1000 divided by 3600 equals $1/3.6$, dividing any km/h value by $3.6$ gives m/s directly. As a check, $90 \\div 3.6 = 25$, matching our answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Attach the correct units",
          "workingLatex": "90\\,\\text{km/h} = 25\\,\\text{m/s}",
          "explanation": "The units of the simplified fraction are metres per second, so the speed of the train is 25 m/s.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final converted speed",
          "workingLatex": "v = 25\\,\\text{m/s}",
          "explanation": "This is the form we use in mechanics, since metres and seconds are the standard SI units for distance and time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$90\\,\\text{km/h} = 25\\,\\text{m/s}$"
    }
  },
  {
    "id": "al.y1.mech.modelling.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "particle"
    ],
    "questionText": "In mechanics we often model an object as a particle. (a) Explain what is meant by modelling an object as a particle. (b) State one physical feature of the object that this assumption allows us to ignore.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of a particle model",
          "workingLatex": "\\text{particle} = \\text{a point with mass, but no size}",
          "explanation": "A particle is an idealised object: it still has mass, but we imagine all of that mass concentrated at a single point with no length, width or height.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe what modelling as a particle means",
          "workingLatex": "\\text{treat the whole body as one point mass}",
          "explanation": "Modelling an object as a particle means we replace the real, extended body by a single point that carries its entire mass. This lets us describe its motion using the motion of that one point.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the effect on the forces",
          "workingLatex": "\\text{all forces act at the same point}",
          "explanation": "Because the object is shrunk to a point, every force acting on it is taken to act at that same point. This removes any turning effect, so we never have to consider the body rotating.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify a feature we may ignore",
          "workingLatex": "\\text{ignore: size and dimensions of the object}",
          "explanation": "Since the body is treated as a point, its actual size and dimensions no longer matter. We do not need to worry about how large the object is.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain why this is a helpful simplification",
          "workingLatex": "\\text{no rotation, no need for the object's shape}",
          "explanation": "Ignoring size means we can also ignore the object's shape and any spinning motion, which greatly simplifies the mathematics while still giving accurate results when the size is unimportant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{particle: point mass; ignores size/dimensions}",
          "explanation": "In summary, modelling as a particle treats the object as a point mass, which allows us to ignore its size and dimensions (and therefore any rotation).",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) Modelling an object as a particle means treating it as a single point that carries all of the object's mass. (b) This allows us to ignore the size and dimensions of the object (and therefore any rotation)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "light",
      "string"
    ],
    "questionText": "In mechanics problems, a string or rod is often described as 'light'. Explain what the modelling assumption 'light' means, and state its main consequence when analysing forces.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of the word 'light'",
          "workingLatex": "\\text{light} \\Rightarrow \\text{mass treated as zero}",
          "explanation": "In modelling, 'light' is shorthand for 'having negligible mass'. We assume the string or rod is so light compared with the other objects that its mass can be taken as zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the consequence for weight",
          "workingLatex": "W = mg = 0 \\times g = 0",
          "explanation": "Since weight is mass times $g$, a mass of zero means the string or rod has no weight of its own. There is no downward force to include for the connector itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe the effect on the tension",
          "workingLatex": "\\text{tension is the same all along the string}",
          "explanation": "Because there is no weight pulling different parts of a light string down by different amounts, the tension does not change along its length. The pull is the same at every point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Extend the idea over a pulley",
          "workingLatex": "T_{\\text{one side}} = T_{\\text{other side}}",
          "explanation": "For a light string passing over a smooth pulley, the equal tension throughout means the tension on both sides of the pulley is the same, which simplifies the force analysis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Summarise the modelling benefit",
          "workingLatex": "\\text{ignore the connector's own weight}",
          "explanation": "Treating the connector as light lets us leave its weight out of the equations entirely, so we only account for the forces from the objects it joins.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{light} = \\text{massless} \\Rightarrow \\text{constant tension}",
          "explanation": "In summary, 'light' means the string or rod has negligible mass, so it has no weight of its own and the tension is constant throughout it.",
          "diagram": null
        }
      ],
      "finalAnswer": "'Light' means the string or rod has negligible mass (treated as zero), so it has no weight of its own. The main consequence is that the tension is the same at every point along it."
    }
  },
  {
    "id": "al.y1.mech.modelling.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "smooth",
      "friction"
    ],
    "questionText": "In a mechanics model a surface is described as 'smooth'. Explain what this assumption means, and state which force is therefore taken to be zero.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall which force acts along a contact surface",
          "workingLatex": "\\text{contact forces: normal reaction } \\perp \\text{ surface}, \\ \\text{friction } \\parallel \\text{ surface}",
          "explanation": "When one object rests on another there are two contact forces: the normal reaction pushing at right angles to the surface, and friction acting along the surface. The word 'smooth' is a statement about the second of these.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the role of friction",
          "workingLatex": "\\text{friction opposes (or tends to oppose) motion along the surface}",
          "explanation": "Friction is the force that resists an object sliding across a surface. On a rough surface it can be quite large; the modelling word 'smooth' is used to describe the opposite extreme.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Give the meaning of 'smooth'",
          "workingLatex": "\\text{smooth} \\equiv \\text{surface exerts no friction}",
          "explanation": "Describing a surface as smooth means we are assuming it is perfectly slippery, so it offers no resistance to sliding. It is an idealisation that keeps the model simple.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the force taken to be zero",
          "workingLatex": "F_{\\text{friction}} = 0",
          "explanation": "If there is no resistance to sliding then the frictional force has magnitude zero. This is the key consequence of the smooth assumption.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note what force still acts",
          "workingLatex": "R \\ne 0 \\ \\text{(normal reaction still present)}",
          "explanation": "Smoothness only removes friction; the surface still pushes back on the object with a normal reaction. It is worth being clear that 'smooth' does not mean 'no contact force at all'.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{smooth} \\Rightarrow \\text{no friction} \\Rightarrow F_{\\text{friction}} = 0",
          "explanation": "So a smooth surface is one modelled as having no friction, and the force taken to be zero is the frictional force.",
          "diagram": null
        }
      ],
      "finalAnswer": "A 'smooth' surface is one assumed to exert no friction (it is treated as perfectly slippery), so the frictional force is taken to be zero, $F_{\\text{friction}} = 0$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "inextensible",
      "string"
    ],
    "questionText": "In a mechanics model a string is described as 'inextensible'. Explain what this assumption means, and state what it tells us about the string's length while it is in use.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Break the word into its meaning",
          "workingLatex": "\\text{in-} + \\text{extensible} = \\text{not able to be extended}",
          "explanation": "The word 'inextensible' is built from 'extensible', meaning able to be stretched, with the prefix 'in-' reversing it. So the word literally says the string cannot be stretched.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the physical assumption",
          "workingLatex": "\\text{inextensible} \\equiv \\text{the string does not stretch under tension}",
          "explanation": "Modelling a string as inextensible means we assume it keeps the same length no matter how hard it is pulled. Real strings stretch a little, but we ignore that to simplify the problem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe the effect on the string's length",
          "workingLatex": "L = \\text{constant}",
          "explanation": "If the string cannot stretch, its length stays fixed throughout the motion. The length is a constant rather than something that changes with the applied force.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Give the consequence for connected objects",
          "workingLatex": "a_1 = a_2 \\ \\text{(objects joined by the string share acceleration)}",
          "explanation": "Because the length is fixed, two objects joined by the string move together: they have the same speed and the same acceleration. This is the main reason the assumption is so useful.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note what is being idealised",
          "workingLatex": "\\Delta L = 0 \\ \\text{(no extension modelled)}",
          "explanation": "In reality a taut string extends by a tiny amount, but treating that extension as zero removes an unknown and makes the mathematics manageable without noticeably changing the answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "\\text{inextensible} \\Rightarrow L \\text{ fixed while in use}",
          "explanation": "So an inextensible string is one assumed not to stretch, which tells us its length remains constant the whole time it is being used.",
          "diagram": null
        }
      ],
      "finalAnswer": "'Inextensible' means the string is assumed not to stretch under tension, so its length stays constant (fixed) throughout the motion."
    }
  },
  {
    "id": "al.y1.mech.modelling.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "forces",
      "normal-reaction",
      "weight"
    ],
    "questionText": "A book rests on a horizontal table. Name the two forces acting on the book and state the direction of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the pull of gravity",
          "workingLatex": "\\text{weight } W = mg",
          "explanation": "Every object with mass is pulled towards the Earth by gravity. This pull is the book's weight, and it is the first force we should always look for.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the direction of the weight",
          "workingLatex": "W \\text{ acts vertically downwards}",
          "explanation": "Gravity always pulls straight down towards the centre of the Earth, so the weight of the book acts vertically downwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the force from the table",
          "workingLatex": "\\text{normal reaction } R",
          "explanation": "The table is a solid surface, and it pushes back on anything resting on it. This supporting push is called the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the direction of the reaction",
          "workingLatex": "R \\text{ acts vertically upwards (perpendicular to the table)}",
          "explanation": "The normal reaction acts at right angles to the surface. Since the table is horizontal, that direction is vertically upwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the two forces are consistent with rest",
          "workingLatex": "R = W \\ \\text{(book in equilibrium)}",
          "explanation": "The book is not moving, so the upward reaction must exactly balance the downward weight. This is a helpful check that we have the two forces and their directions right.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "W \\downarrow \\ \\text{and} \\ R \\uparrow",
          "explanation": "So the two forces on the book are its weight, acting vertically downwards, and the normal reaction from the table, acting vertically upwards.",
          "diagram": null
        }
      ],
      "finalAnswer": "The two forces are the weight $W$ acting vertically downwards and the normal reaction $R$ from the table acting vertically upwards."
    }
  },
  {
    "id": "al.y1.mech.modelling.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "forces",
      "tension",
      "weight"
    ],
    "questionText": "A ball hangs at rest from a vertical string attached to a ceiling. Name the two forces acting on the ball and state the direction of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the pull of gravity",
          "workingLatex": "\\text{weight } W = mg",
          "explanation": "As with any object that has mass, gravity pulls the ball towards the Earth. This gravitational pull is its weight, the first force to identify.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the direction of the weight",
          "workingLatex": "W \\text{ acts vertically downwards}",
          "explanation": "Gravity acts straight down towards the centre of the Earth, so the ball's weight acts vertically downwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the force from the string",
          "workingLatex": "\\text{tension } T",
          "explanation": "A taut string pulls on whatever is attached to it. This pulling force along the string is called the tension, and it is what holds the ball up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the direction of the tension",
          "workingLatex": "T \\text{ acts vertically upwards, along the string towards the ceiling}",
          "explanation": "Tension always pulls along the string, away from the object and towards the point of support. Since the string is vertical, the tension on the ball acts vertically upwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the forces are consistent with rest",
          "workingLatex": "T = W \\ \\text{(ball in equilibrium)}",
          "explanation": "The ball hangs at rest, so the upward tension must exactly balance the downward weight. This balance confirms our two forces and their directions are sensible.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "W \\downarrow \\ \\text{and} \\ T \\uparrow",
          "explanation": "So the two forces on the ball are its weight, acting vertically downwards, and the tension in the string, acting vertically upwards.",
          "diagram": null
        }
      ],
      "finalAnswer": "The two forces are the weight $W$ acting vertically downwards and the tension $T$ in the string acting vertically upwards (along the string towards the ceiling)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "modelling-cycle",
      "stages",
      "recall"
    ],
    "questionText": "State, in the correct order, the main stages of the mathematical modelling cycle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the first stage",
          "workingLatex": "1.\\ \\text{Real-world problem}",
          "explanation": "The cycle begins with a genuine situation we want to understand, such as the motion of a car or a ball. This is the starting point everything else is built on.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the second stage",
          "workingLatex": "2.\\ \\text{Make assumptions and set up a mathematical model}",
          "explanation": "We simplify the situation by making assumptions (for example, treating an object as a particle or a surface as smooth) and translate it into equations. This turns a messy real problem into one we can actually work with.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the third stage",
          "workingLatex": "3.\\ \\text{Solve the mathematical problem}",
          "explanation": "With a model in place, we do the mathematics to obtain predictions or answers. This is the purely mathematical part of the cycle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the fourth stage",
          "workingLatex": "4.\\ \\text{Interpret the solution in context}",
          "explanation": "We translate the mathematical answer back into the language of the original problem, so that the numbers mean something in the real situation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the fifth stage",
          "workingLatex": "5.\\ \\text{Compare with reality / test against observations}",
          "explanation": "We check the predictions against what actually happens or against experimental data, to judge how good the model is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the sixth stage",
          "workingLatex": "6.\\ \\text{Refine the model if necessary, then repeat}",
          "explanation": "If the model does not match reality well enough, we adjust the assumptions and go round again. This is why it is called a cycle rather than a one-off procedure.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summarise the ordered cycle",
          "workingLatex": "\\text{problem} \\to \\text{model} \\to \\text{solve} \\to \\text{interpret} \\to \\text{compare} \\to \\text{refine} \\to \\cdots",
          "explanation": "Putting the stages together gives the full modelling cycle in order, ending by looping back so the model can be improved repeatedly.",
          "diagram": null
        }
      ],
      "finalAnswer": "The modelling cycle, in order: (1) real-world problem, (2) make assumptions and set up a mathematical model, (3) solve the mathematical problem, (4) interpret the solution in context, (5) compare the predictions with reality, (6) refine the model if needed and repeat the cycle."
    }
  },
  {
    "id": "al.y1.mech.modelling.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "written",
    "tags": [
      "choosing-model",
      "particle",
      "justification"
    ],
    "questionText": "A footballer kicks a small ball across a large pitch. Give one reason why it is reasonable to model the ball as a particle in this situation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what a particle model means",
          "workingLatex": "\\text{particle: all the mass treated as a single point}",
          "explanation": "Modelling an object as a particle means we imagine its whole mass concentrated at one point and ignore its size and shape. This is only sensible when the object's dimensions do not affect the motion we care about.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the size of the ball to the pitch",
          "workingLatex": "\\text{ball diameter} \\approx 0.2\\,\\text{m}, \\qquad \\text{pitch length} \\approx 100\\,\\text{m}",
          "explanation": "The ball is only about twenty centimetres across, while the pitch it travels along is around a hundred metres long. The ball is tiny compared with the distances involved in its journey.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "See why the size can be ignored",
          "workingLatex": "\\frac{\\text{ball size}}{\\text{distance travelled}} \\ \\text{is very small}",
          "explanation": "Because the ball's size is a negligible fraction of the distance it covers, treating it as having no size introduces only a tiny error in describing where it is.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the justification",
          "workingLatex": "\\text{size} \\ll \\text{distance} \\ \\Rightarrow \\ \\text{model as a particle}",
          "explanation": "Since the ball is very small in comparison to the pitch, its dimensions have almost no effect on its path, so replacing it by a point is a reasonable simplification.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the benefit of the model",
          "workingLatex": "\\text{no rotation or shape effects to track}",
          "explanation": "By ignoring the ball's size we also avoid having to describe how it spins or deforms, which lets us focus simply on the position and speed of the ball as it crosses the pitch.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Give the final reason",
          "workingLatex": "\\text{reason: ball is small compared with the pitch}",
          "explanation": "The clearest single reason is that the ball is very small relative to the pitch it moves across, so its dimensions can be neglected and modelling it as a particle is justified.",
          "diagram": null
        }
      ],
      "finalAnswer": "The ball is very small compared with the size of the pitch, so its dimensions can be neglected; this makes modelling it as a particle (a point mass) reasonable."
    }
  },
  {
    "id": "al.y1.mech.modelling.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "show",
    "tags": [
      "unit-consistency",
      "speed",
      "base-units"
    ],
    "questionText": "The speed of an object is found from $\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}$. Using SI base units, show that this calculation gives units of metres per second.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the defining formula",
          "workingLatex": "\\text{speed} = \\frac{\\text{distance}}{\\text{time}}",
          "explanation": "Speed is defined as a distance divided by the time taken to cover it. To find its units we simply track what happens to the units of distance and time in this division.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the SI base unit of distance",
          "workingLatex": "[\\text{distance}] = \\text{m}",
          "explanation": "In the SI system length, and therefore distance, is measured in metres. The square brackets here are shorthand for 'the units of'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the SI base unit of time",
          "workingLatex": "[\\text{time}] = \\text{s}",
          "explanation": "Time in the SI system is measured in seconds. This is the second base unit we need for the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the units into the formula",
          "workingLatex": "[\\text{speed}] = \\frac{[\\text{distance}]}{[\\text{time}]} = \\frac{\\text{m}}{\\text{s}}",
          "explanation": "Because the units divide in exactly the same way as the quantities, putting metres on top and seconds on the bottom gives the units of speed directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the combined unit",
          "workingLatex": "\\frac{\\text{m}}{\\text{s}} = \\text{m/s}",
          "explanation": "A metre divided by a second is written as metres per second, the familiar unit of speed. Nothing cancels, so this fraction is already in its simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the unit in index form",
          "workingLatex": "\\text{m/s} = \\text{m}\\,\\text{s}^{-1}",
          "explanation": "Writing 'per second' as $\\text{s}^{-1}$ is just another way of showing the division. This index form is the standard way to record derived units in mechanics.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "[\\text{speed}] = \\text{m/s} \\ \\ (\\text{as required})",
          "explanation": "Dividing a distance in metres by a time in seconds gives metres per second, so the calculation does indeed produce units of m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "Dividing distance (m) by time (s) gives $\\dfrac{\\text{m}}{\\text{s}} = \\text{m/s} = \\text{m}\\,\\text{s}^{-1}$, as required."
    }
  },
  {
    "id": "al.y1.mech.modelling.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "units",
    "tags": [
      "derived-units",
      "newton",
      "base-units"
    ],
    "questionText": "Force is defined by $F = ma$. Using this relation, express the newton in SI base units, showing clearly how each unit arises, and hence state the base units of a $20\\,\\text{N}$ force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the defining relation for force",
          "workingLatex": "F = ma",
          "explanation": "Newton's second law says a force equals mass times acceleration. Since the newton is defined through this equation, its base units must come from multiplying the units of mass and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the SI base unit of mass",
          "workingLatex": "[m] = \\text{kg}",
          "explanation": "Mass is one of the SI base quantities and is measured in kilograms. This is the first ingredient in the units of force.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the units of acceleration",
          "workingLatex": "[a] = \\text{m/s}^2 = \\text{m}\\,\\text{s}^{-2}",
          "explanation": "Acceleration is a change in velocity (m/s) per second, so its units are metres per second per second, written $\\text{m}\\,\\text{s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the units together",
          "workingLatex": "[F] = [m]\\,[a] = \\text{kg} \\times \\text{m}\\,\\text{s}^{-2}",
          "explanation": "The units of a product are the product of the units. Multiplying the kilograms of mass by the $\\text{m}\\,\\text{s}^{-2}$ of acceleration builds up the units of force.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine into a single expression",
          "workingLatex": "[F] = \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}",
          "explanation": "Collecting the factors together gives kilogram metre per second squared. There is nothing to cancel, so this is the force expressed purely in base units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Define the newton",
          "workingLatex": "1\\,\\text{N} = 1\\,\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}",
          "explanation": "One newton is exactly the force that gives a mass of one kilogram an acceleration of one metre per second squared, so the newton is a shorthand for $\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Scale up to a 20 N force",
          "workingLatex": "20\\,\\text{N} = 20 \\times 1\\,\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}",
          "explanation": "A force of 20 N is just twenty of these unit newtons, so we multiply the base-unit expression by 20 while the units themselves stay the same.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the 20 N force in base units",
          "workingLatex": "20\\,\\text{N} = 20\\,\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}",
          "explanation": "The number 20 sits in front and the base units are unchanged, so a 20 N force is 20 kilogram metre per second squared.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\text{N} = \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}, \\quad 20\\,\\text{N} = 20\\,\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}",
          "explanation": "The newton is defined as $\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}$, and a 20 N force therefore has base units of $20\\,\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1\\,\\text{N} = \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}$, so a $20\\,\\text{N}$ force has base units $20\\,\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "derived-units",
      "energy",
      "base-units"
    ],
    "questionText": "A physical quantity has units $\\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2}$. By building these up from base units, identify a mechanical quantity with these units and name its SI unit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out the given units",
          "workingLatex": "[Q] = \\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2}",
          "explanation": "We are given a combination of base units and asked which mechanical quantity it belongs to. The plan is to regroup these units until they match a formula we recognise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate the mass factor from the rest",
          "workingLatex": "\\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2} = \\text{kg} \\times \\left(\\text{m}^2\\,\\text{s}^{-2}\\right)",
          "explanation": "Pulling the kilogram out to the front leaves the length and time units together. Isolating the mass this way makes it easier to recognise what the remaining part represents.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the remaining units as a speed squared",
          "workingLatex": "\\text{m}^2\\,\\text{s}^{-2} = \\left(\\text{m}\\,\\text{s}^{-1}\\right)^2",
          "explanation": "Since $\\text{m}\\,\\text{s}^{-1}$ is the unit of speed, squaring it gives $\\text{m}^2\\,\\text{s}^{-2}$. So the bracketed part is exactly the units of a speed multiplied by itself.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the whole unit in that form",
          "workingLatex": "[Q] = \\text{kg} \\times \\left(\\text{m}\\,\\text{s}^{-1}\\right)^2",
          "explanation": "Putting the pieces back together, the units read as a mass times a speed squared. This structure strongly suggests a formula involving mass and the square of a velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall a mechanical formula with mass times speed squared",
          "workingLatex": "E_k = \\tfrac{1}{2}mv^2",
          "explanation": "Kinetic energy is one half of mass times velocity squared. The factor of a half is just a pure number with no units, so it does not affect the unit analysis.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the units of that formula",
          "workingLatex": "\\left[\\tfrac{1}{2}mv^2\\right] = \\text{kg} \\times \\left(\\text{m}\\,\\text{s}^{-1}\\right)^2 = \\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2}",
          "explanation": "Working out the units of $\\tfrac{1}{2}mv^2$ reproduces exactly the units we started with, confirming that this quantity is an energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note that work has the same units",
          "workingLatex": "W = Fd, \\quad [Fd] = \\left(\\text{kg}\\,\\text{m}\\,\\text{s}^{-2}\\right)\\times\\text{m} = \\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2}",
          "explanation": "Work done is force times distance, and force times length gives the same combination of base units. This makes sense because work and energy are really the same kind of quantity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Name the SI unit",
          "workingLatex": "1\\,\\text{J} = 1\\,\\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2}",
          "explanation": "The SI unit for energy and work is the joule, defined as exactly this combination of base units. So the given units are one joule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "[Q] = \\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2} = \\text{J} \\ (\\text{energy})",
          "explanation": "The units $\\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2}$ belong to energy (or equivalently work), and its SI unit is the joule.",
          "diagram": null
        }
      ],
      "finalAnswer": "The quantity is energy (or work): $\\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2}$, whose SI unit is the joule ($\\text{J}$)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "derived-units",
      "acceleration",
      "units"
    ],
    "questionText": "An object starts from rest and its velocity increases by $6\\,\\text{m/s}$ every $2\\,\\text{s}$. Using units, explain why acceleration is measured in $\\text{m/s}^2$ and state the acceleration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of acceleration",
          "workingLatex": "a = \\frac{\\text{change in velocity}}{\\text{time taken}}",
          "explanation": "Acceleration measures how quickly velocity changes, so it is a change in velocity divided by the time over which that change happens. Its units follow directly from this definition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the units of the change in velocity",
          "workingLatex": "[\\Delta v] = \\text{m/s}",
          "explanation": "A change in velocity is still a velocity, so it is measured in metres per second. This is the quantity on the top of the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the units of the time",
          "workingLatex": "[t] = \\text{s}",
          "explanation": "The time over which the velocity changes is measured in seconds, which is the quantity on the bottom of the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide the units",
          "workingLatex": "[a] = \\frac{\\text{m/s}}{\\text{s}} = \\frac{\\text{m}}{\\text{s}} \\times \\frac{1}{\\text{s}}",
          "explanation": "Dividing metres per second by seconds means dividing by seconds a second time. This is why a second factor of 'per second' appears in the units.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to the standard unit",
          "workingLatex": "[a] = \\frac{\\text{m}}{\\text{s}^2} = \\text{m/s}^2",
          "explanation": "Combining the two 'per second' factors gives per second squared, so acceleration comes out in metres per second squared. This explains why $\\text{m/s}^2$ is the natural unit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the given numbers",
          "workingLatex": "a = \\frac{6\\,\\text{m/s}}{2\\,\\text{s}}",
          "explanation": "The velocity rises by 6 m/s over a time of 2 s, so we put 6 m/s on top and 2 s on the bottom of the acceleration formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Carry out the division",
          "workingLatex": "a = \\frac{6}{2} = 3",
          "explanation": "Dividing the number 6 by the number 2 gives 3. The units are handled separately and give $\\text{m/s}^2$ as shown above.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Attach the units to the value",
          "workingLatex": "a = 3\\,\\text{m/s}^2",
          "explanation": "Combining the value with the unit we derived, the acceleration is 3 metres per second squared. This means the velocity gains 3 m/s during every second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "a = 3\\,\\text{m/s}^2",
          "explanation": "Because acceleration is a velocity (m/s) divided by a time (s) it must be measured in $\\text{m/s}^2$, and for this object that acceleration is 3 m/s squared.",
          "diagram": null
        }
      ],
      "finalAnswer": "Acceleration is velocity (m/s) divided by time (s), giving $\\text{m/s}^2$; here $a = \\dfrac{6}{2} = 3\\,\\text{m/s}^2$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "scalars-vectors",
      "distance-displacement",
      "contextual"
    ],
    "questionText": "A hiker walks $300\\,\\text{m}$ due east and then $400\\,\\text{m}$ due north. Explain the difference between the total distance travelled and the magnitude of the displacement, and find both values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what distance measures",
          "workingLatex": "\\text{distance} = \\text{total length of path walked (a scalar)}",
          "explanation": "Distance keeps a running total of every metre the hiker actually covers along the ground, no matter which way each part points. Because it ignores direction it is a scalar.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what displacement measures",
          "workingLatex": "\\text{displacement} = \\text{straight-line change in position (a vector)}",
          "explanation": "Displacement only cares about where the hiker ends up compared with the start: the straight arrow from start to finish. It has both a size and a direction, so it is a vector.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the two legs to get the total distance",
          "workingLatex": "\\text{distance} = 300 + 400",
          "explanation": "For distance we simply add the length of each part of the walk together, since every metre travelled counts once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the total distance",
          "workingLatex": "\\text{distance} = 700\\,\\text{m}",
          "explanation": "The two legs sum to 700 m, the full length of ground the hiker's feet cover on the journey.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the two legs are perpendicular",
          "workingLatex": "\\text{east} \\perp \\text{north}",
          "explanation": "East and north are at right angles to each other. This means the start point, the corner where the hiker turns, and the finish point form a right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up Pythagoras for the displacement magnitude",
          "workingLatex": "|\\mathbf{s}| = \\sqrt{300^2 + 400^2}",
          "explanation": "The displacement is the hypotenuse joining start to finish. Because the two legs meet at a right angle, its length is found with Pythagoras' theorem.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Square each leg",
          "workingLatex": "300^2 = 90000, \\qquad 400^2 = 160000",
          "explanation": "Squaring each leg is the first step of Pythagoras; these are the areas of the squares on the two shorter sides.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the squares",
          "workingLatex": "90000 + 160000 = 250000",
          "explanation": "Adding the two squared legs gives the square of the hypotenuse's length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the square root",
          "workingLatex": "|\\mathbf{s}| = \\sqrt{250000} = 500\\,\\text{m}",
          "explanation": "The square root undoes the squaring and gives the actual straight-line distance from start to finish, which is 500 m.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the two results",
          "workingLatex": "700\\,\\text{m} \\ne 500\\,\\text{m}",
          "explanation": "The distance (700 m) is larger than the displacement (500 m) because the hiker walked along two sides of the triangle rather than the direct diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\text{distance} = 700\\,\\text{m}, \\qquad |\\mathbf{s}| = 500\\,\\text{m}",
          "explanation": "So the total distance travelled is 700 m (path length, a scalar), while the magnitude of the displacement is 500 m (the straight-line gap between start and finish, part of a vector).",
          "diagram": null
        }
      ],
      "finalAnswer": "Distance $= 700\\,\\text{m}$ (total path length, a scalar); magnitude of displacement $= 500\\,\\text{m}$ (straight-line change in position, a vector)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "scalars-vectors",
      "speed-velocity",
      "contextual"
    ],
    "questionText": "A car drives once around a circular track of circumference $800\\,\\text{m}$, returning to its starting point after $40\\,\\text{s}$. Explain the difference between speed and velocity in this situation, and find the average speed and the average velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of average speed",
          "workingLatex": "\\text{average speed} = \\dfrac{\\text{distance travelled}}{\\text{time taken}}",
          "explanation": "Average speed uses the total distance covered along the path. It is a scalar, so it only asks how much ground was covered, not in which direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the definition of average velocity",
          "workingLatex": "\\text{average velocity} = \\dfrac{\\text{displacement}}{\\text{time taken}}",
          "explanation": "Average velocity uses displacement, the straight-line change in position. It is a vector, so both its size and its direction matter.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the distance travelled",
          "workingLatex": "\\text{distance} = 800\\,\\text{m}",
          "explanation": "Going once around the track means the car covers the full circumference, so the distance travelled is 800 m.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the average speed",
          "workingLatex": "\\text{average speed} = \\dfrac{800}{40}",
          "explanation": "Dividing the 800 m of path by the 40 s taken gives the average speed of the car.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the average speed",
          "workingLatex": "\\text{average speed} = 20\\,\\text{m/s}",
          "explanation": "The division gives 20 m/s, the typical rate at which the car covers ground over the lap.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the displacement",
          "workingLatex": "\\text{displacement} = 0\\,\\text{m}",
          "explanation": "The car finishes exactly where it started, so its change in position is zero. There is no straight-line gap between the start and the end.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the average velocity",
          "workingLatex": "\\text{average velocity} = \\dfrac{0}{40}",
          "explanation": "Average velocity divides the displacement by the time. With a displacement of zero, the numerator is zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the average velocity",
          "workingLatex": "\\text{average velocity} = 0\\,\\text{m/s}",
          "explanation": "Zero divided by 40 is zero, so the average velocity over the whole lap is zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why the two answers differ",
          "workingLatex": "\\text{speed} = 20\\,\\text{m/s} \\ne \\text{velocity} = 0\\,\\text{m/s}",
          "explanation": "The car was clearly moving, so its average speed is a healthy 20 m/s. But because it returned to its start, its net change in position is nil, making the average velocity zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{average speed} = 20\\,\\text{m/s}, \\qquad \\text{average velocity} = 0\\,\\text{m/s}",
          "explanation": "So the average speed is 20 m/s (based on distance), while the average velocity is 0 m/s (based on displacement), showing why the direction-aware vector can vanish even when the scalar does not.",
          "diagram": null
        }
      ],
      "finalAnswer": "Average speed $= 20\\,\\text{m/s}$ (distance $\\div$ time); average velocity $= 0\\,\\text{m/s}$ (the car returns to its start, so displacement is zero)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "weight",
      "mass-and-weight",
      "gravity",
      "moon"
    ],
    "questionText": "An astronaut's equipment has mass $12\\,\\text{kg}$. Taking $g = 9.8\\,\\text{m/s}^2$ on Earth and $g = 1.6\\,\\text{m/s}^2$ on the Moon, find the weight of the equipment in each place and comment on how its mass compares.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the relationship between weight and mass",
          "workingLatex": "W = mg",
          "explanation": "Weight is the pull of gravity on an object and equals its mass multiplied by the local gravitational acceleration. This is the key formula for the whole question.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that mass is a fixed property",
          "workingLatex": "m = 12\\,\\text{kg}",
          "explanation": "Mass measures the amount of matter in the equipment. That amount does not change when the equipment is moved, so we use the same 12 kg for both places.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the Earth values",
          "workingLatex": "W_{\\text{Earth}} = 12 \\times 9.8",
          "explanation": "On Earth gravity gives an acceleration of 9.8 m/s^2, so we multiply the 12 kg mass by 9.8 to get its weight there.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the weight on Earth",
          "workingLatex": "W_{\\text{Earth}} = 117.6\\,\\text{N}",
          "explanation": "The multiplication gives 117.6 newtons, the force with which Earth's gravity pulls the equipment downward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the Moon values",
          "workingLatex": "W_{\\text{Moon}} = 12 \\times 1.6",
          "explanation": "The Moon's gravity is much weaker, giving an acceleration of only 1.6 m/s^2, so we multiply the same 12 kg by 1.6.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the weight on the Moon",
          "workingLatex": "W_{\\text{Moon}} = 19.2\\,\\text{N}",
          "explanation": "This gives 19.2 newtons, a much smaller downward pull than on Earth because the Moon's gravity is far weaker.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two weights",
          "workingLatex": "\\frac{W_{\\text{Earth}}}{W_{\\text{Moon}}} = \\frac{117.6}{19.2} \\approx 6.1",
          "explanation": "The equipment weighs roughly six times as much on Earth as on the Moon, which matches the fact that Earth's gravity is about six times stronger.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on the mass",
          "workingLatex": "m_{\\text{Earth}} = m_{\\text{Moon}} = 12\\,\\text{kg}",
          "explanation": "Although the weight changes with location, the mass is unchanged. The equipment still contains the same amount of matter wherever it is.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why mass stays the same",
          "workingLatex": "m \\text{ is intrinsic}, \\quad W \\text{ depends on } g",
          "explanation": "Mass is a property of the object itself, so it does not depend on gravity. Weight, being a force, shrinks or grows with the local strength of gravity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "W_{\\text{Earth}} = 117.6\\,\\text{N}, \\quad W_{\\text{Moon}} = 19.2\\,\\text{N}, \\quad m = 12\\,\\text{kg} \\text{ both}",
          "explanation": "So the equipment weighs 117.6 N on Earth and 19.2 N on the Moon, yet its mass is 12 kg in both places, illustrating that weight depends on gravity while mass does not.",
          "diagram": null
        }
      ],
      "finalAnswer": "Weight on Earth $= 117.6\\,\\text{N}$; weight on the Moon $= 19.2\\,\\text{N}$; the mass is $12\\,\\text{kg}$ in both places (mass is unchanged, only weight varies with gravity)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "weight",
      "composite",
      "mass-and-weight"
    ],
    "questionText": "Three identical crates, each of mass $25\\,\\text{kg}$, are stacked on a floor. Taking $g = 9.8\\,\\text{m/s}^2$, find the total weight of the stack and hence the force the floor must support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the total mass of the stack",
          "workingLatex": "m = 3 \\times 25",
          "explanation": "The three crates behave as one combined object resting on the floor, so we first add their masses together by multiplying 25 kg by 3.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the total mass",
          "workingLatex": "m = 75\\,\\text{kg}",
          "explanation": "The three 25 kg crates make a total mass of 75 kg for the whole stack.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the weight formula",
          "workingLatex": "W = mg",
          "explanation": "Weight is the downward gravitational force on the stack and equals its total mass multiplied by g.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "W = 75 \\times 9.8",
          "explanation": "We insert the total mass of 75 kg and the value of g as 9.8 m/s^2 to find the weight.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the total weight",
          "workingLatex": "W = 735\\,\\text{N}",
          "explanation": "Multiplying gives 735 newtons, the total downward pull of gravity on the whole stack.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consider the stack in equilibrium",
          "workingLatex": "\\text{stack at rest} \\Rightarrow \\text{forces balance}",
          "explanation": "The stack is not moving, so the upward push from the floor must exactly balance the downward weight. The forces on the stack cancel out.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Relate the floor's force to the weight",
          "workingLatex": "R = W",
          "explanation": "The floor's supporting force (the normal reaction) must equal the weight it holds up, otherwise the stack would accelerate up or down.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the force on the floor",
          "workingLatex": "R = 735\\,\\text{N}",
          "explanation": "Since the reaction equals the weight, the floor must support a force of 735 N.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "W = 735\\,\\text{N}, \\qquad R = 735\\,\\text{N}",
          "explanation": "So the stack weighs 735 N, and because it rests in equilibrium the floor must support that same 735 N.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total weight $= 735\\,\\text{N}$, so the floor must support a force of $735\\,\\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "weight",
      "rearrangement",
      "mass-and-weight"
    ],
    "questionText": "A shopping bag has weight $34.3\\,\\text{N}$. Taking $g = 9.8\\,\\text{m/s}^2$, find its mass, and hence find the combined weight of two such bags.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the weight formula",
          "workingLatex": "W = mg",
          "explanation": "Weight equals mass times g. Here we know the weight and want the mass, so we will rearrange this relationship.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make mass the subject",
          "workingLatex": "m = \\dfrac{W}{g}",
          "explanation": "Dividing both sides by g isolates the mass. This lets us work backwards from a known weight to the mass that produced it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "m = \\dfrac{34.3}{9.8}",
          "explanation": "We put in the bag's weight of 34.3 N and g as 9.8 m/s^2 ready to compute the mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the mass",
          "workingLatex": "m = 3.5\\,\\text{kg}",
          "explanation": "Dividing 34.3 by 9.8 gives 3.5, so the bag has a mass of 3.5 kg.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider two identical bags",
          "workingLatex": "\\text{two bags: same weight each}",
          "explanation": "Each bag is identical, so each one has a weight of 34.3 N. To find the combined weight we account for both.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two weights",
          "workingLatex": "W_{\\text{total}} = 2 \\times 34.3",
          "explanation": "Weight is a force, and two equal forces pulling the same way simply add, so we double the single-bag weight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the combined weight",
          "workingLatex": "W_{\\text{total}} = 68.6\\,\\text{N}",
          "explanation": "Doubling 34.3 N gives 68.6 N for the pair of bags.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check via the combined mass",
          "workingLatex": "W_{\\text{total}} = (2 \\times 3.5) \\times 9.8 = 7 \\times 9.8 = 68.6\\,\\text{N}",
          "explanation": "As a check, two bags have a total mass of 7 kg, and 7 times 9.8 also gives 68.6 N, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "m = 3.5\\,\\text{kg}, \\qquad W_{\\text{total}} = 68.6\\,\\text{N}",
          "explanation": "So each bag has a mass of 3.5 kg, and two bags together have a combined weight of 68.6 N.",
          "diagram": null
        }
      ],
      "finalAnswer": "Mass $= 3.5\\,\\text{kg}$; combined weight of two bags $= 68.6\\,\\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "speed",
      "kmh-to-ms"
    ],
    "questionText": "A train travels at a steady speed of $144\\,\\text{km/h}$. (a) Convert this speed to metres per second. (b) Hence find how far the train travels in $25\\,\\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the conversion building blocks",
          "workingLatex": "1\\,\\text{km} = 1000\\,\\text{m}, \\qquad 1\\,\\text{h} = 3600\\,\\text{s}",
          "explanation": "Every km/h to m/s conversion rests on two facts: a kilometre is one thousand metres and an hour is 3600 seconds (that is $60 \\times 60$). Once these are written down the rest is just substitution.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express the speed as distance over time",
          "workingLatex": "144\\,\\text{km/h} = \\frac{144\\,\\text{km}}{1\\,\\text{h}}",
          "explanation": "Writing the speed as a fraction makes it clear which units sit on top (kilometres) and which sit underneath (hours), so we know exactly what to replace.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace kilometres with metres",
          "workingLatex": "= \\frac{144 \\times 1000\\,\\text{m}}{1\\,\\text{h}} = \\frac{144000\\,\\text{m}}{1\\,\\text{h}}",
          "explanation": "Swapping each kilometre for 1000 metres multiplies the top of the fraction by 1000, converting the distance into metres.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace the hour with seconds",
          "workingLatex": "= \\frac{144000\\,\\text{m}}{3600\\,\\text{s}}",
          "explanation": "One hour is 3600 seconds, so the denominator becomes 3600 seconds and the units are now metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the fraction",
          "workingLatex": "\\frac{144000}{3600} = 40",
          "explanation": "Dividing 144000 by 3600 gives 40, so the speed is 40 metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with the standard shortcut",
          "workingLatex": "\\text{shortcut: } 144 \\div 3.6 = 40",
          "explanation": "Dividing a km/h value by 3.6 always gives the m/s value, and $144 \\div 3.6 = 40$ confirms our answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the converted speed",
          "workingLatex": "144\\,\\text{km/h} = 40\\,\\text{m/s}",
          "explanation": "This is the speed in SI units, the form we always use in mechanics calculations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the distance relationship for steady speed",
          "workingLatex": "s = v t",
          "explanation": "At a constant speed the distance travelled is simply the speed multiplied by the time, since the train covers the same amount each second.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the speed and the time",
          "workingLatex": "s = 40\\,\\text{m/s} \\times 25\\,\\text{s}",
          "explanation": "Using the converted speed keeps the units consistent: metres per second multiplied by seconds leaves metres, which is what we want for a distance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the distance",
          "workingLatex": "s = 1000\\,\\text{m}",
          "explanation": "Multiplying 40 by 25 gives 1000, so in 25 seconds the train travels 1000 metres, which is one kilometre.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $144\\,\\text{km/h} = 40\\,\\text{m/s}$; (b) in $25\\,\\text{s}$ the train travels $1000\\,\\text{m}$ (i.e. $1\\,\\text{km}$)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "speed",
      "ms-to-kmh"
    ],
    "questionText": "A cyclist travels at $12\\,\\text{m/s}$. (a) Convert this speed to kilometres per hour. (b) State, with a reason, whether the cyclist exceeds a $40\\,\\text{km/h}$ speed limit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the conversion building blocks",
          "workingLatex": "1\\,\\text{m} = \\frac{1}{1000}\\,\\text{km}, \\qquad 1\\,\\text{s} = \\frac{1}{3600}\\,\\text{h}",
          "explanation": "Going from m/s to km/h uses the same two facts in reverse: a metre is a thousandth of a kilometre and a second is a $3600$th of an hour.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express the speed as distance over time",
          "workingLatex": "12\\,\\text{m/s} = \\frac{12\\,\\text{m}}{1\\,\\text{s}}",
          "explanation": "Writing the speed as a fraction shows clearly which unit to replace on the top (metres) and which on the bottom (seconds).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert the metres to kilometres",
          "workingLatex": "= \\frac{12 \\times \\frac{1}{1000}\\,\\text{km}}{1\\,\\text{s}} = \\frac{0.012\\,\\text{km}}{1\\,\\text{s}}",
          "explanation": "Each metre is 0.001 km, so 12 metres is 0.012 km. This puts the distance into kilometres.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert the seconds to hours",
          "workingLatex": "= \\frac{0.012\\,\\text{km}}{\\frac{1}{3600}\\,\\text{h}} = 0.012 \\times 3600\\,\\text{km/h}",
          "explanation": "Dividing by one 3600th of an hour is the same as multiplying by 3600, which brings the time into hours and finishes the unit change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the arithmetic",
          "workingLatex": "0.012 \\times 3600 = 43.2",
          "explanation": "Carrying out the multiplication gives 43.2, so the speed is 43.2 kilometres per hour.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with the standard shortcut",
          "workingLatex": "\\text{shortcut: } 12 \\times 3.6 = 43.2",
          "explanation": "Multiplying an m/s value by 3.6 always gives the km/h value, and $12 \\times 3.6 = 43.2$ confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the converted speed",
          "workingLatex": "12\\,\\text{m/s} = 43.2\\,\\text{km/h}",
          "explanation": "This is the cyclist's speed expressed in the units used by the speed limit, so the two can now be compared directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the speed limit",
          "workingLatex": "43.2\\,\\text{km/h} > 40\\,\\text{km/h}",
          "explanation": "Placing the two values side by side, 43.2 is clearly larger than 40, so the cyclist is above the limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\text{the cyclist exceeds the limit}",
          "explanation": "Since the converted speed of 43.2 km/h is greater than 40 km/h, the cyclist does break the speed limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $12\\,\\text{m/s} = 43.2\\,\\text{km/h}$; (b) since $43.2 > 40$, the cyclist does exceed the $40\\,\\text{km/h}$ limit."
    }
  },
  {
    "id": "al.y1.mech.modelling.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "density",
      "compound-units"
    ],
    "questionText": "A metal block has density $8\\,\\text{g/cm}^3$. Convert this density into $\\text{kg/m}^3$, showing clearly how the mass factor and the length factor combine.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two units that must change",
          "workingLatex": "\\text{density} = \\frac{\\text{mass}}{\\text{volume}} = 8\\,\\text{g/cm}^3",
          "explanation": "Density is a compound unit built from a mass over a volume, so we must convert grams into kilograms and cubic centimetres into cubic metres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the mass conversion factor",
          "workingLatex": "1\\,\\text{g} = \\frac{1}{1000}\\,\\text{kg} = 0.001\\,\\text{kg}",
          "explanation": "There are 1000 grams in a kilogram, so a single gram is one thousandth of a kilogram. This is the mass factor.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the length conversion factor",
          "workingLatex": "1\\,\\text{cm} = \\frac{1}{100}\\,\\text{m} = 0.01\\,\\text{m}",
          "explanation": "A centimetre is one hundredth of a metre. Volume involves length cubed, so we start from this single-length factor before cubing it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cube the length factor to get the volume factor",
          "workingLatex": "1\\,\\text{cm}^3 = (0.01\\,\\text{m})^3 = 10^{-6}\\,\\text{m}^3",
          "explanation": "A cubic centimetre is a cube with 0.01 m sides, so its volume is $0.01^3 = 10^{-6}$ cubic metres. Cubing the length is what makes volume conversions so much larger than length ones.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the density as a fraction of units",
          "workingLatex": "8\\,\\text{g/cm}^3 = \\frac{8\\,\\text{g}}{1\\,\\text{cm}^3}",
          "explanation": "Setting it out as grams over cubic centimetres shows exactly where each conversion factor will be substituted.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the mass factor on the top",
          "workingLatex": "= \\frac{8 \\times 0.001\\,\\text{kg}}{1\\,\\text{cm}^3}",
          "explanation": "Replacing grams with kilograms scales the numerator by 0.001, converting the mass part of the unit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the volume factor on the bottom",
          "workingLatex": "= \\frac{8 \\times 0.001\\,\\text{kg}}{10^{-6}\\,\\text{m}^3}",
          "explanation": "Replacing the cubic centimetre with $10^{-6}$ cubic metres converts the volume part, so both units are now SI.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the two numerical factors",
          "workingLatex": "= 8 \\times \\frac{0.001}{10^{-6}}\\,\\text{kg/m}^3 = 8 \\times 1000\\,\\text{kg/m}^3",
          "explanation": "The mass factor divided by the volume factor is $0.001 \\div 10^{-6} = 1000$. This single number captures how the two conversions combine.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Carry out the multiplication",
          "workingLatex": "8 \\times 1000 = 8000",
          "explanation": "Multiplying the original 8 by the combined factor of 1000 gives 8000.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the converted density",
          "workingLatex": "8\\,\\text{g/cm}^3 = 8000\\,\\text{kg/m}^3",
          "explanation": "So the block's density in SI units is 8000 kilograms per cubic metre.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sanity check against a known density",
          "workingLatex": "\\text{water: } 1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3",
          "explanation": "Water has density 1 g/cm cubed, which is 1000 kg/m cubed, so a metal being eight times denser than water at 8000 kg/m cubed is entirely reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8\\,\\text{g/cm}^3 = 8000\\,\\text{kg/m}^3$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "acceleration",
      "compound-units"
    ],
    "questionText": "The acceleration of a vehicle is quoted as $36\\,\\text{km/h per second}$ (its speed increases by $36\\,\\text{km/h}$ every second). Convert this acceleration into $\\text{m/s}^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the quoted acceleration",
          "workingLatex": "a = 36\\,\\text{km/h per second} = \\frac{36\\,\\text{km/h}}{1\\,\\text{s}}",
          "explanation": "The phrase means the velocity changes by 36 km/h during each second, so the acceleration is a change of velocity (36 km/h) divided by a time (1 s).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide which part needs converting",
          "workingLatex": "\\text{convert } 36\\,\\text{km/h} \\to \\text{m/s}, \\ \\text{keep the } \\text{per second}",
          "explanation": "Only the velocity, quoted in km/h, is in the wrong units. The 'per second' is already in seconds, so we just convert the 36 km/h and leave the time alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the conversion building blocks",
          "workingLatex": "1\\,\\text{km} = 1000\\,\\text{m}, \\qquad 1\\,\\text{h} = 3600\\,\\text{s}",
          "explanation": "These are the same two facts used for any km/h conversion: a kilometre is 1000 metres and an hour is 3600 seconds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert the velocity 36 km/h to m/s",
          "workingLatex": "36\\,\\text{km/h} = \\frac{36 \\times 1000\\,\\text{m}}{3600\\,\\text{s}}",
          "explanation": "Replacing kilometres with metres on top and the hour with 3600 seconds on the bottom rewrites the velocity in metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the velocity",
          "workingLatex": "= \\frac{36000}{3600}\\,\\text{m/s} = 10\\,\\text{m/s}",
          "explanation": "Dividing 36000 by 3600 gives 10, so 36 km/h is the same as 10 m/s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with the standard shortcut",
          "workingLatex": "\\text{shortcut: } 36 \\div 3.6 = 10",
          "explanation": "Dividing the km/h value by 3.6 gives the m/s value, and $36 \\div 3.6 = 10$ confirms the conversion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the converted velocity back",
          "workingLatex": "a = \\frac{10\\,\\text{m/s}}{1\\,\\text{s}}",
          "explanation": "Now the velocity change is in m/s while the time is still 1 s, so the acceleration is 10 m/s of extra speed for every second.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the compound unit",
          "workingLatex": "\\frac{\\text{m/s}}{\\text{s}} = \\text{m/s}^2",
          "explanation": "A velocity in metres per second divided by a time in seconds leaves metres per second squared, the standard unit of acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the converted acceleration",
          "workingLatex": "a = 10\\,\\text{m/s}^2",
          "explanation": "Combining the number and the unit, the acceleration is 10 metres per second squared.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the result",
          "workingLatex": "\\text{speed rises by } 10\\,\\text{m/s every second}",
          "explanation": "An acceleration of 10 m/s squared means the speed increases by 10 m/s each second, which matches the original description once both are in SI units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$36\\,\\text{km/h per second} = 10\\,\\text{m/s}^2$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "contextual",
      "effects"
    ],
    "questionText": "A child slides down a straight playground slide. State two modelling assumptions you would make when analysing this motion and, for each, describe its simplifying effect on the problem.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the purpose of a modelling assumption",
          "workingLatex": "\\text{assumption: simplify reality so the mechanics becomes tractable}",
          "explanation": "A modelling assumption deliberately ignores a real-world detail that would make the mathematics too complicated, in exchange for an answer that is close enough to be useful.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the assumptions available for a sliding object",
          "workingLatex": "\\text{particle} \\ , \\ \\text{smooth surface} \\ , \\ \\text{no air resistance} \\ , \\ \\text{rigid slide}",
          "explanation": "For a body sliding down a slope the standard assumptions are to treat the body as a particle, to treat the surface as smooth, and to neglect air resistance. We only need to choose and justify two.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the first assumption",
          "workingLatex": "\\text{Assumption 1: model the child as a particle}",
          "explanation": "Treating the child as a particle means imagining all of the child's mass concentrated at a single point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Describe the effect of the first assumption",
          "workingLatex": "\\text{effect: ignore size, shape and rotation; forces act at one point}",
          "explanation": "With the child as a particle we do not have to consider the child's dimensions, how they are sitting, or any tumbling and turning. Every force can be taken to act at the same point, which removes rotation from the problem entirely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the second assumption",
          "workingLatex": "\\text{Assumption 2: model the slide as smooth}",
          "explanation": "A smooth slide is one where we assume there is no friction between the child and the surface.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the effect of the second assumption",
          "workingLatex": "\\text{effect: no friction force; only } \\mathbf{W} \\text{ and } \\mathbf{R} \\text{ act}",
          "explanation": "Assuming the slide is smooth removes the friction force from the analysis, so the only forces on the child are the weight and the normal reaction from the surface. This makes the resultant force much easier to find.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Acknowledge the trade-off",
          "workingLatex": "\\text{trade-off: real slides have friction, so the model is approximate}",
          "explanation": "Both assumptions lose some realism, since a real child has size and a real slide has friction. The answers are therefore approximate, but they are close enough to be useful and can be refined later.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Show how the forces reduce",
          "workingLatex": "\\text{forces} = \\{ \\mathbf{W}, \\ \\mathbf{R} \\}",
          "explanation": "Taken together, the two assumptions cut the force diagram down to just the weight acting downwards and the normal reaction perpendicular to the slide.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the consequence for the motion",
          "workingLatex": "\\text{constant resultant} \\Rightarrow \\text{constant acceleration down the slope}",
          "explanation": "Because the remaining forces are constant, the resultant force is constant, so the child slides with constant acceleration and the standard constant-acceleration equations may be used.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the two assumptions and their effects",
          "workingLatex": "\\text{particle} \\to \\text{no size/rotation}; \\quad \\text{smooth} \\to \\text{no friction}",
          "explanation": "In summary, modelling the child as a particle removes size and rotation, and modelling the slide as smooth removes friction, leaving a simple problem with a constant acceleration.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two suitable assumptions: (1) treat the child as a $\\textbf{particle}$, so the whole mass acts at one point and we ignore the child's size, shape and any rotation; (2) assume the slide is $\\textbf{smooth}$, so there is no friction and the only forces are the weight and the normal reaction, giving a constant acceleration down the slope."
    }
  },
  {
    "id": "al.y1.mech.modelling.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "light",
      "inextensible",
      "pulley"
    ],
    "questionText": "A load is raised by a light, inextensible string that passes over a pulley. Explain the effect of each of the assumptions 'light' and 'inextensible' on how the string is treated in the model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what 'light' means for the string",
          "workingLatex": "\\text{'light'} \\Rightarrow \\text{mass of string} \\approx 0",
          "explanation": "Calling the string 'light' is shorthand for saying its mass is so small compared with the load that we treat it as zero. This single idea is what lets us simplify how the string behaves.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Give the first effect of 'light'",
          "workingLatex": "\\text{weight of string} = mg = 0",
          "explanation": "Because weight is mass times g, a string with no mass has no weight. So we never draw a weight force for the string itself and it adds nothing to the forces we must balance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Give the second effect of 'light'",
          "workingLatex": "\\text{tension is the same all along the string}",
          "explanation": "If the string had mass, different parts would need different tensions to support their own weight. With no weight to carry, the tension cannot change from point to point, so it is constant throughout.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Summarise the modelling gain from 'light'",
          "workingLatex": "\\text{one value } T \\text{ describes the whole string}",
          "explanation": "A single tension value can therefore be used everywhere in the string. This keeps the equations simple because we handle one unknown tension rather than a tension that varies along the length.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State what 'inextensible' means for the string",
          "workingLatex": "\\text{'inextensible'} \\Rightarrow \\text{string does not stretch}",
          "explanation": "An inextensible string keeps a fixed length no matter how large the tension becomes. It never behaves like an elastic band, so its length is treated as constant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the length as constant",
          "workingLatex": "\\text{length } \\ell = \\text{constant}",
          "explanation": "Because the string cannot lengthen or shorten, the total length stays the same throughout the motion. This fixed length is the key to linking the two ends together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Deduce the effect on the speeds of the ends",
          "workingLatex": "\\text{both ends move with the same speed}",
          "explanation": "If one end of a fixed-length string moves, the other end must move by exactly the same amount to keep the length constant over the pulley. So both ends share the same speed at every instant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce the effect on the accelerations of the ends",
          "workingLatex": "\\text{both ends have the same acceleration magnitude } a",
          "explanation": "Since the speeds match at all times, their rates of change also match. This means the load and whatever is attached at the other end accelerate with the same magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain how the two assumptions work together at the pulley",
          "workingLatex": "\\text{load and other end are linked over the pulley by } T \\text{ and } a",
          "explanation": "Together the assumptions let us treat the two connected masses as a single linked system: 'light' gives them one common tension, and 'inextensible' gives them one common acceleration. That is exactly what makes the pulley problem solvable.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the overall conclusion",
          "workingLatex": "\\text{light} \\to \\text{no weight, constant } T; \\quad \\text{inextensible} \\to \\text{same speed and } a",
          "explanation": "In summary, 'light' removes the string's weight and makes the tension the same everywhere, while 'inextensible' forces the two ends to move and accelerate together. These are the two ideas that make the string easy to include in the model.",
          "diagram": null
        }
      ],
      "finalAnswer": "'Light' means the string has no mass, so it has no weight and the tension $T$ is the same all along it. 'Inextensible' means its length is fixed, so the two ends move with equal speed and equal acceleration magnitude, linking the connected masses over the pulley."
    }
  },
  {
    "id": "al.y1.mech.modelling.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "smooth",
      "rough",
      "friction"
    ],
    "questionText": "Explain the difference between modelling a surface as 'smooth' and as 'rough', and describe how each choice changes the forces included in the model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the contact forces a surface can exert",
          "workingLatex": "\\text{a surface can push perpendicular (normal) and rub along (friction)}",
          "explanation": "When an object rests on a surface, the surface can push outwards at right angles to itself and can also drag along its face. Deciding between smooth and rough is really about whether that second, along-the-surface force is present.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define a smooth surface",
          "workingLatex": "\\text{'smooth'} \\Rightarrow \\text{no friction}",
          "explanation": "A smooth surface is modelled as perfectly slippery, so there is no rubbing force between it and the object. This is an idealisation that keeps the model simple.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the friction force for a smooth surface",
          "workingLatex": "F = 0",
          "explanation": "With no friction at all, the frictional force is exactly zero. Nothing acts along the surface to resist an object sliding across it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State which contact force remains for a smooth surface",
          "workingLatex": "\\text{only the normal reaction } R \\text{ is included}",
          "explanation": "So on a smooth surface the only contact force we draw is the normal reaction, acting perpendicular to the surface. This is why objects on smooth slopes always tend to slide.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Define a rough surface",
          "workingLatex": "\\text{'rough'} \\Rightarrow \\text{friction is present}",
          "explanation": "A rough surface grips the object, so a frictional force does act between them. This is the more realistic case for most everyday surfaces.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the direction of friction on a rough surface",
          "workingLatex": "F \\text{ acts along the surface, opposing motion or tendency to move}",
          "explanation": "Friction always points along the surface in the direction that resists sliding. If the object is moving it opposes the motion; if it is still it opposes the direction it is about to slip.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the size limit on friction",
          "workingLatex": "F \\le \\mu R",
          "explanation": "The frictional force can grow only up to a maximum of the coefficient of friction times the normal reaction. Below that limit it takes whatever value is needed to keep the object in place.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State which contact forces are included for a rough surface",
          "workingLatex": "\\text{both the normal reaction } R \\text{ and friction } F \\text{ are included}",
          "explanation": "So a rough surface adds a second contact force to the diagram: the friction, alongside the normal reaction. There is now one more force to account for in the equations.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the overall conclusion",
          "workingLatex": "\\text{smooth: } R \\text{ only} \\quad\\Big|\\quad \\text{rough: } R \\text{ and } F",
          "explanation": "In short, choosing 'smooth' means the model has the normal reaction alone, while choosing 'rough' adds a frictional force along the surface. That extra force is the whole difference between the two models.",
          "diagram": null
        }
      ],
      "finalAnswer": "A 'smooth' surface has no friction, so the only contact force is the normal reaction $R$. A 'rough' surface does have friction, so the model also includes a frictional force $F$ (with $F \\le \\mu R$) acting along the surface to oppose motion."
    }
  },
  {
    "id": "al.y1.mech.modelling.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "smooth-peg",
      "tension"
    ],
    "questionText": "In a model, a string passes over a smooth peg. Explain what 'smooth peg' means and state what it tells you about the tension on the two sides of the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the set-up",
          "workingLatex": "\\text{a string is draped over a fixed peg}",
          "explanation": "Picture a string hanging over a small fixed peg, with one part of the string on each side. The question is how the peg affects the string that runs across it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what 'smooth' means for the peg",
          "workingLatex": "\\text{'smooth peg'} \\Rightarrow \\text{no friction between string and peg}",
          "explanation": "Describing the peg as smooth means there is no friction where the string touches it. The contact is treated as perfectly slippery.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Deduce there is no frictional force from the peg",
          "workingLatex": "F_{\\text{peg}} = 0",
          "explanation": "Since there is no friction at the contact, the peg exerts no force along the string. Nothing grips the string to hold it back as it lies over the peg.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain the effect on the string's ability to slide",
          "workingLatex": "\\text{string can slide freely over the peg}",
          "explanation": "With no rubbing force resisting it, the string can move freely across the peg. The peg only changes the direction of the string, not the pull carried within it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reason about the tension either side",
          "workingLatex": "\\text{no friction} \\Rightarrow \\text{tension is not altered by the peg}",
          "explanation": "Friction is the only thing that could make the pull differ from one side to the other. Because there is none, the tension carried into the peg on one side must come out unchanged on the other.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the equality of tensions",
          "workingLatex": "T_1 = T_2 = T",
          "explanation": "So the tension on the two sides of the string is the same. We can use a single value T for the whole string, which is exactly what makes the smooth-peg assumption useful.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Contrast with a rough peg",
          "workingLatex": "\\text{rough peg} \\Rightarrow \\text{friction could make } T_1 \\ne T_2",
          "explanation": "It is worth seeing why the assumption matters: a rough peg would grip the string, and that friction could support a difference in pull, allowing the two tensions to be unequal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note this matches a smooth pulley",
          "workingLatex": "\\text{same rule as a smooth pulley}",
          "explanation": "A smooth peg behaves just like a smooth pulley in this respect. Both simply redirect the string while keeping the tension equal on each side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the overall conclusion",
          "workingLatex": "\\text{smooth peg} \\Rightarrow \\text{equal tension both sides}",
          "explanation": "In summary, 'smooth peg' means frictionless contact, and its consequence is that the tension is equal on both sides of the string. That equal tension is the piece of information we use when forming the equations.",
          "diagram": null
        }
      ],
      "finalAnswer": "'Smooth peg' means there is no friction between the string and the peg, so the string slides freely over it. This tells us the tension is the same on both sides of the string, $T_1 = T_2 = T$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "diagram",
    "tags": [
      "forces",
      "force-diagram",
      "car"
    ],
    "questionText": "A car is driven at a steady speed along a straight, level road. Draw and label a force diagram showing the four forces acting on the car.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the car as a particle",
          "workingLatex": "\\text{treat the car as a single particle}",
          "explanation": "For a force diagram we model the car as a particle, a single point where all the forces act. This avoids worrying about its shape and lets us focus purely on the forces.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the weight",
          "workingLatex": "W = mg \\ \\text{acting vertically downwards}",
          "explanation": "Gravity pulls the car straight down with a weight equal to its mass times g. Weight always points vertically downwards, towards the centre of the Earth.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the normal reaction",
          "workingLatex": "R \\ \\text{acting vertically upwards from the road}",
          "explanation": "The road pushes back on the car at right angles to its surface. Because the road is level, this normal reaction R points straight up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the driving force",
          "workingLatex": "D \\ \\text{acting horizontally, in the direction of motion}",
          "explanation": "The engine turns the wheels, which push the road backwards; the road pushes the car forwards. This driving force D acts horizontally in the direction the car is travelling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the resistance",
          "workingLatex": "F \\ \\text{acting horizontally, opposing the motion}",
          "explanation": "Air resistance and other frictional effects push back against the car. This total resistance F acts horizontally, directly opposite to the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the vertical condition",
          "workingLatex": "R = W",
          "explanation": "The car does not move up or down, so the vertical forces must balance. The upward reaction therefore equals the downward weight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the horizontal condition",
          "workingLatex": "D = F",
          "explanation": "Steady speed means no acceleration, so the horizontal forces must also balance. The driving force therefore equals the resistance, which is why the speed stays constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Present the labelled force diagram",
          "workingLatex": "\\text{four arrows: } W \\downarrow, \\ R \\uparrow, \\ D \\rightarrow, \\ F \\leftarrow",
          "explanation": "Drawing all four forces from the particle gives a clear picture: weight down, reaction up, driving force forward and resistance backward. The balanced pairs show why the motion is steady.",
          "diagram": {
            "kind": "descriptive",
            "description": "A car drawn as a rectangle sitting on a horizontal line representing the level road. Four force arrows come from the centre of the car: weight W points vertically downwards, the normal reaction R points vertically upwards, the driving force D points horizontally forwards in the direction of travel, and the resistance F points horizontally backwards. The up arrow R and down arrow W are equal in length, and the forward arrow D and backward arrow F are equal in length.",
            "alt": "Force diagram of a car on a level road showing weight down, normal reaction up, driving force forward and resistance backward, with R equal to W and D equal to F."
          }
        },
        {
          "stepNumber": 9,
          "description": "List the four forces",
          "workingLatex": "W, \\ R, \\ D, \\ F",
          "explanation": "The four forces acting on the car are its weight, the normal reaction from the road, the driving force, and the resistance. These are the complete set for a car on a level road.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the overall conclusion",
          "workingLatex": "R = W \\quad \\text{and} \\quad D = F",
          "explanation": "In summary, the diagram shows two balanced pairs of forces. The vertical pair keeps the car on the road, and the equal horizontal pair keeps it moving at a steady speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "The four forces are the weight $W$ (down), the normal reaction $R$ (up), the driving force $D$ (forward) and the resistance $F$ (backward). At steady speed on a level road $R = W$ and $D = F$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "diagram",
    "tags": [
      "forces",
      "force-diagram",
      "inclined-plane"
    ],
    "questionText": "A box lies at rest on a rough plane inclined to the horizontal. Draw a force diagram labelling the three forces acting on the box.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Model the box as a particle",
          "workingLatex": "\\text{treat the box as a single particle on the plane}",
          "explanation": "We model the box as a particle so that all the forces can be drawn from one point. This keeps the diagram clean and focuses attention on the forces themselves.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the weight",
          "workingLatex": "W = mg \\ \\text{acting vertically downwards}",
          "explanation": "Gravity pulls the box straight down with weight mg. This is always vertical, regardless of how the plane is tilted, because it points towards the Earth.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add the normal reaction",
          "workingLatex": "R \\ \\text{perpendicular to the inclined surface}",
          "explanation": "The plane pushes the box away from its surface at right angles. On a slope this normal reaction R is perpendicular to the plane, so it leans away from the vertical.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Stress that R is not vertical",
          "workingLatex": "R \\ne \\text{vertical (it is at right angles to the slope)}",
          "explanation": "It is a common slip to draw R straight up. Because the surface is tilted, the reaction tilts with it, staying perpendicular to the plane rather than to the ground.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the plane is rough so friction acts",
          "workingLatex": "\\text{rough plane} \\Rightarrow \\text{friction } F \\text{ is present}",
          "explanation": "The plane is described as rough, so a frictional force acts between the box and the surface. This friction is what allows the box to stay at rest on the slope.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine the direction of friction",
          "workingLatex": "F \\ \\text{acts up the slope, along the surface}",
          "explanation": "The box tends to slide down the slope under gravity, so friction opposes that tendency by acting up the slope. Friction always lies along the surface, not across it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the equilibrium condition",
          "workingLatex": "\\text{box at rest} \\Rightarrow \\text{forces are in equilibrium}",
          "explanation": "Since the box does not move, the three forces must balance one another. The friction and normal reaction together hold the box against its weight.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Present the labelled force diagram",
          "workingLatex": "\\text{three arrows: } W \\downarrow, \\ R \\perp \\text{plane}, \\ F \\ \\text{up the slope}",
          "explanation": "Drawing the three forces from the box shows the whole picture: weight straight down, reaction perpendicular to the slope, and friction up the slope. Their arrangement makes clear how the box stays in place.",
          "diagram": {
            "kind": "descriptive",
            "description": "A box drawn as a small rectangle resting on a line that slopes up from left to right, representing the inclined plane, with the angle to the horizontal marked at the bottom left. Three force arrows come from the box: weight W points vertically downwards, the normal reaction R points away from the surface at right angles to the slope, and the friction F points up the slope along the surface. The box is at rest.",
            "alt": "Force diagram of a box at rest on a rough inclined plane showing weight vertically down, normal reaction perpendicular to the plane, and friction acting up the slope."
          }
        },
        {
          "stepNumber": 9,
          "description": "List the three forces",
          "workingLatex": "W, \\ R, \\ F",
          "explanation": "The three forces acting on the box are its weight, the normal reaction perpendicular to the plane, and the friction along the plane. These are all the forces in this model.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the overall conclusion",
          "workingLatex": "W \\downarrow, \\quad R \\perp \\text{plane}, \\quad F \\ \\text{up the slope}",
          "explanation": "In summary, the box carries three forces: weight vertically down, a normal reaction at right angles to the slope, and friction acting up the slope to stop it sliding. Together they keep the box in equilibrium.",
          "diagram": null
        }
      ],
      "finalAnswer": "The three forces are the weight $W = mg$ (vertically down), the normal reaction $R$ (perpendicular to the inclined surface) and the friction $F$ (acting up the slope). As the box is at rest, these three forces are in equilibrium."
    }
  },
  {
    "id": "al.y1.mech.modelling.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "forces",
      "tension-thrust",
      "trailer"
    ],
    "questionText": "A car tows a trailer along a straight, level road using a rigid tow-bar. The car and trailer are accelerating in the direction of motion. State the horizontal forces acting on the trailer, and name the type of force acting in the tow-bar, justifying your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the situation and the direction of motion",
          "workingLatex": "\\text{Car tows trailer; the system accelerates forwards on level ground}",
          "explanation": "The trailer is dragged along by the car through the tow-bar, and the whole system is speeding up in the forward direction. Fixing this direction first makes it straightforward to say which way each force points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide which forces are being asked about",
          "workingLatex": "\\text{Consider horizontal forces only}",
          "explanation": "The question asks for the horizontal forces. The trailer's weight and the normal reaction from the road are both vertical, so they play no part here and can be set aside.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the connection between car and trailer",
          "workingLatex": "\\text{The rigid tow-bar joins the trailer to the car}",
          "explanation": "The only thing pulling the trailer forwards is the tow-bar linking it to the car. Whatever force acts along that bar is what drives the trailer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Name the first horizontal force",
          "workingLatex": "\\mathbf{T}: \\ \\text{tow-bar force on the trailer, acting forwards}",
          "explanation": "The tow-bar exerts a force on the trailer in the direction of motion, forwards. This is the force that makes the trailer accelerate along with the car.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Name the second horizontal force",
          "workingLatex": "\\mathbf{R}: \\ \\text{resistance on the trailer, acting backwards}",
          "explanation": "As the trailer moves it meets friction at its wheels and air resistance, both of which oppose the motion and therefore point backwards.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm these are the only horizontal forces",
          "workingLatex": "\\text{Horizontal forces on trailer} = \\{\\mathbf{T}, \\ \\mathbf{R}\\}",
          "explanation": "Nothing else touches the trailer horizontally, so the forward tow-bar force and the backward resistance together form the complete set of horizontal forces.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply Newton's second law along the road",
          "workingLatex": "T - R = ma",
          "explanation": "Taking forwards as positive, the resultant horizontal force is the forward tow-bar force minus the backward resistance, and this resultant produces the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the fact that the trailer accelerates",
          "workingLatex": "a > 0 \\ \\Rightarrow \\ T - R > 0 \\ \\Rightarrow \\ T > R",
          "explanation": "Because the trailer is speeding up, the resultant force must point forwards, so the tow-bar force is larger than the resistance and genuinely pulls the trailer along.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decide whether the tow-bar is stretched or compressed",
          "workingLatex": "\\text{Bar pulls the trailer forwards} \\ \\Rightarrow \\ \\text{the bar is stretched}",
          "explanation": "The bar has to pull the trailer along behind the car, so it is being stretched between the two vehicles rather than squashed together.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Name the type of force in the tow-bar",
          "workingLatex": "\\text{A stretched connector carries a } \\textbf{tension}",
          "explanation": "A rod or bar that is being stretched is in tension. So while the system accelerates the tow-bar force is a tension. (If the car braked instead, the bar would be compressed and the force would be a thrust.)",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\text{Forward tension } \\mathbf{T}, \\quad \\text{backward resistance } \\mathbf{R}",
          "explanation": "The trailer feels two horizontal forces: the forward pull of the tow-bar and the backward resistance to motion. Because the tow-bar is stretched, the force in it is a tension.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two horizontal forces act on the trailer: the forward tow-bar force $\\mathbf{T}$ and the backward resistance $\\mathbf{R}$. Since the system accelerates, the tow-bar is stretched, so the force in it is a $\\textbf{tension}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "forces",
      "force-diagram",
      "friction"
    ],
    "questionText": "A sledge is pulled across rough horizontal ground by a rope that is inclined at an angle above the horizontal. List all four forces acting on the sledge, giving the direction of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the situation",
          "workingLatex": "\\text{Sledge on rough horizontal ground, pulled by a rope above the horizontal}",
          "explanation": "Picturing the sledge on the ground with a rope leading upwards and forwards helps us track down every force before listing them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start with the force every object has",
          "workingLatex": "\\text{Every mass on Earth is pulled downwards by gravity}",
          "explanation": "Whatever else is happening, the Earth pulls the sledge downwards. This force is always present, so it is a natural place to begin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First force: weight",
          "workingLatex": "\\mathbf{W} = mg \\ \\text{vertically downwards}",
          "explanation": "The weight is the gravitational pull on the sledge, equal to mass times g, and it always acts straight down towards the centre of the Earth.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider the contact with the ground",
          "workingLatex": "\\text{Sledge rests on the surface} \\ \\Rightarrow \\ \\text{surface pushes back}",
          "explanation": "Because the sledge presses down on the ground, the ground pushes back up on it. This contact push is the normal reaction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second force: normal reaction",
          "workingLatex": "\\mathbf{N} \\ \\text{perpendicular to the ground} = \\text{vertically upwards}",
          "explanation": "The normal reaction always acts at right angles to the surface. The ground is horizontal, so this force points straight up.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consider the rope",
          "workingLatex": "\\text{The rope is taut and pulls the sledge}",
          "explanation": "The rope is being used to drag the sledge, so it is taut and pulls on the sledge along its own line.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Third force: tension",
          "workingLatex": "\\mathbf{T} \\ \\text{along the rope, forwards and upwards at the given angle}",
          "explanation": "The tension acts along the rope, away from the sledge. Since the rope is inclined above the horizontal, this pull is directed both forwards and upwards.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Consider that the ground is rough",
          "workingLatex": "\\text{Rough surface} + \\text{motion} \\ \\Rightarrow \\ \\text{friction acts}",
          "explanation": "A rough surface resists sliding. As the sledge moves across it (or tends to move), friction is brought into play.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Fourth force: friction",
          "workingLatex": "\\mathbf{F} \\ \\text{horizontal, opposing the motion (backwards)}",
          "explanation": "Friction acts along the surface and always opposes the motion, so it points horizontally backwards, against the direction the sledge is being pulled.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the list is complete",
          "workingLatex": "\\{\\mathbf{W}, \\ \\mathbf{N}, \\ \\mathbf{T}, \\ \\mathbf{F}\\}",
          "explanation": "Weight, normal reaction, tension and friction are the four forces acting; nothing else is in contact with the sledge and no other field acts on it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the four forces and their directions",
          "workingLatex": "\\mathbf{W}\\ \\downarrow, \\quad \\mathbf{N}\\ \\uparrow, \\quad \\mathbf{T}\\ \\nearrow, \\quad \\mathbf{F}\\ \\leftarrow",
          "explanation": "Weight acts downwards, the normal reaction upwards, the tension forwards and up along the rope, and friction horizontally backwards.",
          "diagram": null
        }
      ],
      "finalAnswer": "Weight $\\mathbf{W}=mg$ vertically downwards; normal reaction $\\mathbf{N}$ vertically upwards; tension $\\mathbf{T}$ along the rope (forwards and up); friction $\\mathbf{F}$ horizontally backwards, opposing the motion."
    }
  },
  {
    "id": "al.y1.mech.modelling.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "modelling-cycle",
      "stages",
      "identify"
    ],
    "questionText": "A student investigating a rolling toy car (i) sets up equations describing its motion, (ii) uses them to make a prediction, (iii) runs an experiment to test it, and then (iv) adjusts their assumptions. Match each of these four actions to a stage of the modelling cycle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the stages of the modelling cycle",
          "workingLatex": "\\text{set up model} \\to \\text{predict} \\to \\text{test against reality} \\to \\text{refine}",
          "explanation": "The modelling cycle moves from setting up a mathematical model, to using it to predict, to comparing with the real world, and then to refining it. Naming the stages first lets us slot each action into place.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the four actions to be matched",
          "workingLatex": "\\text{(i) equations}, \\ \\text{(ii) prediction}, \\ \\text{(iii) experiment}, \\ \\text{(iv) adjust assumptions}",
          "explanation": "The student does four things in turn, and each one lines up with a distinct stage of the cycle, so we take them one at a time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Match action (i): setting up equations",
          "workingLatex": "\\text{(i) setting up equations} \\ \\to \\ \\text{formulate the mathematical model}",
          "explanation": "Writing equations for the toy car turns the real situation into mathematics. This is the stage where the model itself is created from the chosen assumptions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain the first match",
          "workingLatex": "\\text{assumptions} + \\text{variables} \\ \\Rightarrow \\ \\text{equations}",
          "explanation": "Choosing variables and building relationships between them is exactly what setting up a model means, so this action belongs to the formulation stage.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match action (ii): making a prediction",
          "workingLatex": "\\text{(ii) making a prediction} \\ \\to \\ \\text{solve / analyse the model}",
          "explanation": "Once the equations exist, using them to work out what should happen is the analysis stage. The prediction is the output of solving the model.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain the second match",
          "workingLatex": "\\text{equations} \\ \\Rightarrow \\ \\text{predicted outcome}",
          "explanation": "A prediction comes straight from carrying out the mathematics of the model, so it fits the stage of using the model to make predictions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Match action (iii): running an experiment",
          "workingLatex": "\\text{(iii) running an experiment} \\ \\to \\ \\text{compare with the real world}",
          "explanation": "Carrying out the experiment gathers real data to hold up against the prediction. This is the stage where the model is tested against reality.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the third match",
          "workingLatex": "\\text{prediction} \\ \\text{vs.} \\ \\text{measured result}",
          "explanation": "The experiment provides the observations that let us judge whether the model is good enough, which is the comparison and validation stage.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Match action (iv): adjusting assumptions",
          "workingLatex": "\\text{(iv) adjusting assumptions} \\ \\to \\ \\text{refine the model}",
          "explanation": "If the prediction and experiment disagree, changing the assumptions improves the model. This closes the loop and is the refinement stage.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the four matches together",
          "workingLatex": "\\text{(i) set up} \\ \\to \\ \\text{(ii) solve} \\ \\to \\ \\text{(iii) test} \\ \\to \\ \\text{(iv) refine}",
          "explanation": "Setting up equations is formulating the model, making a prediction is solving it, running the experiment is testing it against reality, and adjusting assumptions is refining it.",
          "diagram": null
        }
      ],
      "finalAnswer": "Setting up equations = formulating the model; making a prediction = solving/analysing the model; running the experiment = comparing the model with the real world; adjusting assumptions = refining the model."
    }
  },
  {
    "id": "al.y1.mech.modelling.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "modelling-cycle",
      "refinement"
    ],
    "questionText": "A model predicts that a ball will travel a horizontal distance of $50\\,\\text{m}$, but in an experiment it actually travels $42\\,\\text{m}$. Explain how the modelling cycle is used to refine the model, giving one specific refinement that could be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the prediction and the actual result",
          "workingLatex": "\\text{predicted} = 50\\,\\text{m}, \\qquad \\text{actual} = 42\\,\\text{m}",
          "explanation": "The model says 50 m but the ball really travels 42 m. Laying both figures side by side is the first move in judging the model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compare the two values",
          "workingLatex": "50 - 42 = 8\\,\\text{m} \\ \\text{overestimate}",
          "explanation": "The model predicts 8 m further than reality, so it overestimates the range. Comparing prediction with observation is the interpret-and-compare stage of the modelling cycle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express the size of the error",
          "workingLatex": "\\frac{8}{42} \\approx 0.19 = 19\\%",
          "explanation": "An error of about 19% is large enough to matter, so the model is not yet good enough and the cycle should continue rather than stop here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret what the overestimate suggests",
          "workingLatex": "\\text{predicted range too large} \\ \\Rightarrow \\ \\text{a retarding effect is missing}",
          "explanation": "If the real ball stops short of the prediction, something must be slowing it down that the model left out. An overestimate points to a resisting force being ignored.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Return to the assumptions stage",
          "workingLatex": "\\text{revisit the simplifying assumptions of the model}",
          "explanation": "The modelling cycle now sends us back to the assumptions we made when building the model, to find which one caused the gap between prediction and reality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the likely faulty assumption",
          "workingLatex": "\\text{assumed: no air resistance on the ball}",
          "explanation": "A common simplification is to ignore air resistance. Leaving that force out lets the ball fly too far, which matches the overestimate we found.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State a specific refinement",
          "workingLatex": "\\text{Refinement: include air resistance in the model}",
          "explanation": "Adding a resistive force opposing the motion is a concrete improvement that should bring the predicted range down closer to the measured 42 m.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rebuild and re-solve the model",
          "workingLatex": "\\text{new equations with resistance} \\ \\Rightarrow \\ \\text{new prediction}",
          "explanation": "With the extra force included, we redo the mathematics to obtain a fresh prediction that we expect to be nearer the true value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test again and repeat if needed",
          "workingLatex": "\\text{compare new prediction with } 42\\,\\text{m}; \\ \\text{repeat the cycle}",
          "explanation": "The improved model is tested once more. If it is still not close enough, the cycle repeats until prediction and measurement agree well.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise the use of the cycle",
          "workingLatex": "\\text{compare} \\ \\to \\ \\text{refine (add air resistance)} \\ \\to \\ \\text{re-test}",
          "explanation": "The modelling cycle compares the prediction with reality, refines the model by including air resistance, then re-tests, looping until the model is accurate enough.",
          "diagram": null
        }
      ],
      "finalAnswer": "Compare prediction (50 m) with reality (42 m): the 8 m overestimate shows a resisting force is missing. Refine the model by including air resistance, re-solve for a new prediction, then re-test; repeat the cycle until it is accurate enough."
    }
  },
  {
    "id": "al.y1.mech.modelling.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "choosing-model",
      "skydiver",
      "air-resistance"
    ],
    "questionText": "Explain why a skydiver in free fall should not be modelled as a particle moving under gravity alone, and state which force must be included in a realistic model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the proposed simple model",
          "workingLatex": "\\text{Model: a particle falling under gravity alone}",
          "explanation": "The suggested model treats the skydiver as a point mass with only their weight acting. We test it by following through what it predicts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the acceleration this model gives",
          "workingLatex": "a = g = 9.8\\,\\text{m/s}^2 \\ \\text{(constant, downwards)}",
          "explanation": "With gravity as the only force, Newton's second law gives a constant downward acceleration of g, unchanging for the whole fall.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the predicted velocity",
          "workingLatex": "v = gt \\ \\text{increases without limit}",
          "explanation": "A constant acceleration means the speed keeps growing steadily and never stops increasing, so the model predicts an ever-faster skydiver.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall what really happens",
          "workingLatex": "\\text{In reality the speed levels off at a terminal velocity}",
          "explanation": "Real skydivers reach a maximum, roughly constant speed called the terminal velocity, rather than speeding up without end.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the disagreement",
          "workingLatex": "\\text{model: } v \\to \\infty \\quad \\text{vs.} \\quad \\text{reality: } v \\to v_{\\text{term}}",
          "explanation": "The model and the real world clearly disagree, which tells us the gravity-alone assumption is not adequate for a skydiver.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Look at the skydiver's physical features",
          "workingLatex": "\\text{large surface area moving through the air}",
          "explanation": "A skydiver is spread out and presents a big area to the air rushing past, so their interaction with the air cannot reasonably be ignored.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the missing force",
          "workingLatex": "\\text{air resistance opposes the motion, acting upwards}",
          "explanation": "The air pushes back on the falling skydiver with a resistive force directed upwards, against the fall. This is the force the simple model leaves out.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain how this force changes the motion",
          "workingLatex": "\\text{air resistance grows as the speed increases}",
          "explanation": "The faster the skydiver falls, the stronger the air resistance becomes, so it does not stay negligible as the simple model assumes.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain terminal velocity",
          "workingLatex": "\\text{air resistance} = \\text{weight} \\ \\Rightarrow \\ a = 0",
          "explanation": "When the growing air resistance balances the weight, the resultant force is zero and the acceleration stops, giving the constant terminal velocity seen in reality.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "\\text{Include air resistance in the model}",
          "explanation": "Because ignoring air resistance predicts an impossible ever-increasing speed, the skydiver must not be modelled under gravity alone; air resistance must be included.",
          "diagram": null
        }
      ],
      "finalAnswer": "Under gravity alone the model predicts a constantly increasing speed ($v=gt$), but a real skydiver reaches a constant terminal velocity, so the model is wrong. It fails because it omits $\\textbf{air resistance}$, which grows with speed until it balances the weight; this force must be included."
    }
  },
  {
    "id": "al.y1.mech.modelling.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "choosing-model",
      "air-resistance",
      "evaluation"
    ],
    "questionText": "A golf ball is driven a short distance across level ground. Discuss whether ignoring air resistance is a reasonable assumption for this situation, giving one point in favour of the assumption and one point against it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the modelling decision to be judged",
          "workingLatex": "\\text{Assumption: air resistance} = 0",
          "explanation": "The question asks us to weigh up a single simplifying assumption. To judge it fairly we look at what the assumption removes from the model and then ask whether that removal matters for this particular motion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what air resistance is",
          "workingLatex": "\\text{air resistance: a force opposing motion through the air}",
          "explanation": "Air resistance (drag) is a backwards force that pushes against an object as it moves through the air. Ignoring it means treating weight as the only significant force once the ball has left the club.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall what makes air resistance large or small",
          "workingLatex": "\\text{drag grows with speed and with surface area}",
          "explanation": "Drag depends on how fast the object moves, its size and shape, and how long it is in the air. A slow, small, dense object over a short path feels little drag; a fast, large, light object over a long path feels a lot.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Describe the golf ball's relevant features",
          "workingLatex": "\\text{golf ball: small, smooth-ish, dense (heavy for its size)}",
          "explanation": "A golf ball is small and dense, so its weight is large compared with the drag its little surface can gather. That physical picture is what we use to build the argument for the assumption.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Give the point in favour of ignoring air resistance",
          "workingLatex": "\\text{For: short distance} \\Rightarrow \\text{little time for drag to act}",
          "explanation": "Because the ball travels only a short distance, it is in flight for a short time, so the drag force acts only briefly and its total effect on the path is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain why this supports the assumption",
          "workingLatex": "\\text{small total effect} \\Rightarrow \\text{simpler model, little error}",
          "explanation": "If drag changes the motion only slightly, dropping it makes the mathematics much simpler while the predicted range and time of flight stay close to reality. That is exactly when a simplifying assumption is worthwhile.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the point against ignoring air resistance",
          "workingLatex": "\\text{Against: a driven ball moves very fast}",
          "explanation": "A golf drive launches the ball at high speed, and drag rises steeply as speed increases (roughly with the square of the speed), so at high speed the resisting force is far from negligible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why this argues against the assumption",
          "workingLatex": "\\text{high speed} \\Rightarrow \\text{noticeable drag, real range differs}",
          "explanation": "At such speeds the drag noticeably slows the ball, so a model that ignores it will tend to over-predict the distance travelled. In fact golf balls are dimpled precisely to manage air flow, showing the air matters.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Weigh the two points against each other",
          "workingLatex": "\\text{short distance (for)} \\; \\text{vs} \\; \\text{high speed (against)}",
          "explanation": "The short path pushes us towards ignoring drag, but the high launch speed pushes the other way. Which wins depends on how short 'a short distance' really is compared with a full drive.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State a reasoned conclusion",
          "workingLatex": "\\text{reasonable as a first model; check for a full drive}",
          "explanation": "For a genuinely short, low chip the assumption is reasonable and gives a simple, close estimate. For a fast, full-length drive it is less safe, so ignoring air resistance is acceptable as a first approximation but should be reviewed if accuracy matters.",
          "diagram": null
        }
      ],
      "finalAnswer": "Ignoring air resistance is a reasonable first assumption. For: over a short distance the ball is in the air only briefly, so drag has little time to affect the motion. Against: a driven ball travels very fast and drag grows sharply with speed, so the resisting force is not truly negligible and the model may over-predict the range."
    }
  },
  {
    "id": "al.y1.mech.modelling.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "uniform",
      "rod"
    ],
    "questionText": "A footbridge is modelled as a uniform rod. Explain what the word 'uniform' means in this context, and explain why treating the bridge as uniform is a helpful assumption when locating its centre of mass.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the modelling statement",
          "workingLatex": "\\text{footbridge} \\;\\to\\; \\text{uniform rod}",
          "explanation": "The bridge is being replaced by an idealised object. To answer well we separate the two ideas being used: 'rod' describes the shape, and 'uniform' describes how the mass is spread along it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the 'rod' part of the model",
          "workingLatex": "\\text{rod: long and thin, treated as a straight line of length } L",
          "explanation": "Modelling the bridge as a rod means its length matters but its width and thickness are ignored, so we can treat it as a one-dimensional straight object. This sets the stage for the meaning of 'uniform'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State what 'uniform' means",
          "workingLatex": "\\text{uniform: mass spread evenly along the whole length}",
          "explanation": "'Uniform' tells us the material is distributed evenly, so every part of the bridge is as heavy as every other equal-length part. There are no heavy lumps at one end and light sections at the other.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Express uniform as constant mass per unit length",
          "workingLatex": "\\frac{\\text{mass}}{\\text{length}} = \\text{constant along the rod}",
          "explanation": "A precise way to say this is that the mass per unit length is the same everywhere. Any half-metre of the bridge weighs the same as any other half-metre, wherever you take it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Contrast with a non-uniform bridge",
          "workingLatex": "\\text{non-uniform: e.g. heavier supports at one end}",
          "explanation": "If the bridge were non-uniform, some regions would carry more mass than others, and the balance point would be pulled towards the heavier region. Assuming uniformity deliberately rules this complication out.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall what the centre of mass is",
          "workingLatex": "\\text{centre of mass: the single balance point of the object}",
          "explanation": "The centre of mass is the point where we can imagine all the weight acting, so the object would balance if supported there. Locating it is what the uniform assumption is meant to make easy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use symmetry of an even mass distribution",
          "workingLatex": "\\text{even mass} \\Rightarrow \\text{symmetric about the midpoint}",
          "explanation": "When mass is spread evenly along a straight rod, the arrangement looks the same from either end. The mass on the left of the midpoint exactly mirrors the mass on the right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce the location of the centre of mass",
          "workingLatex": "\\text{centre of mass at the midpoint} = \\tfrac{1}{2}L",
          "explanation": "Because the two halves balance each other exactly, the centre of mass sits at the geometric centre, halfway along the rod. No calculation of individual masses is needed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why this is helpful for calculations",
          "workingLatex": "W = mg \\text{ acts as one force at the midpoint}",
          "explanation": "Knowing the balance point lets us treat the whole weight as a single force acting at the middle. This turns a spread-out bridge into one manageable force in the right place, which is exactly what moment and equilibrium calculations need.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the overall conclusion",
          "workingLatex": "\\text{uniform} \\Rightarrow \\text{centre of mass known instantly (midpoint)}",
          "explanation": "So 'uniform' means mass evenly distributed, giving constant mass per unit length. It is helpful because the symmetry places the centre of mass at the midpoint immediately, greatly simplifying any analysis of the bridge.",
          "diagram": null
        }
      ],
      "finalAnswer": "'Uniform' means the bridge's mass is spread evenly along its length, so the mass per unit length is constant everywhere. This is helpful because the even, symmetric distribution places the centre of mass exactly at the midpoint of the rod, so the whole weight can be taken to act at that single point without any further calculation."
    }
  },
  {
    "id": "al.y1.mech.modelling.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "show",
    "tags": [
      "unit-consistency",
      "suvat",
      "dimensional-check"
    ],
    "questionText": "The equation $v = u + at$ relates velocities $u$ and $v$, acceleration $a$ and time $t$. By checking the units of every term, show that this equation is dimensionally consistent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what dimensional consistency requires",
          "workingLatex": "\\text{every term must share the same units}",
          "explanation": "An equation can only be correct if all the quantities being added or equated are measured in the same units. Our whole task is to work out the units of each term and check they match.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the SI units of each basic quantity",
          "workingLatex": "[v]=[u]=\\text{m/s}, \\quad [a]=\\text{m/s}^2, \\quad [t]=\\text{s}",
          "explanation": "We list the units first so nothing is guessed later. Velocity is measured in metres per second, acceleration in metres per second squared, and time in seconds. Square brackets are shorthand for 'the units of'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the units of the left-hand side",
          "workingLatex": "[v] = \\text{m/s}",
          "explanation": "The left-hand side is simply the velocity $v$, so its units are metres per second. This is the target that both terms on the right must also produce.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the units of the first term on the right",
          "workingLatex": "[u] = \\text{m/s}",
          "explanation": "The first term on the right is the initial velocity $u$, which is also measured in metres per second. So far the left side and this term already agree.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the second term as a product of its units",
          "workingLatex": "[at] = [a]\\times[t] = \\left(\\text{m/s}^2\\right)\\times\\left(\\text{s}\\right)",
          "explanation": "The units of a product are the product of the units, so the units of $at$ are the units of acceleration multiplied by the units of time. We now simplify this product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the units using powers of seconds",
          "workingLatex": "= \\frac{\\text{m}}{\\text{s}^2}\\times \\text{s} = \\frac{\\text{m}\\cdot \\text{s}}{\\text{s}^2}",
          "explanation": "Writing m/s squared as a fraction makes the cancelling clear: we have metres over seconds-squared, all multiplied by one factor of seconds on the top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor of seconds",
          "workingLatex": "\\frac{\\text{m}\\cdot \\text{s}}{\\text{s}^2} = \\frac{\\text{m}}{\\text{s}}",
          "explanation": "One factor of seconds on top cancels one of the two on the bottom, leaving metres over seconds. The units of acceleration times time therefore reduce to metres per second.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the units of the second term",
          "workingLatex": "[at] = \\text{m/s}",
          "explanation": "So the term $at$ has units of metres per second, exactly the same units as a velocity. This makes sense, since multiplying a rate of change of velocity by a time should return a velocity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the units of all three terms",
          "workingLatex": "[v]=\\text{m/s}, \\;\\; [u]=\\text{m/s}, \\;\\; [at]=\\text{m/s}",
          "explanation": "Laying the three results side by side shows every term is measured in metres per second. There is no mismatch anywhere in the equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note why matching units matter",
          "workingLatex": "\\text{only like units may be added or equated}",
          "explanation": "Since $u$ and $at$ share the same units, adding them is meaningful, and since their sum matches $v$, the equation is balanced. If any term differed we could not add or equate them at all.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\therefore \\; v = u + at \\text{ is dimensionally consistent}",
          "explanation": "Every term carries units of metres per second, so the equation is dimensionally consistent. This check does not prove the formula is correct, but a formula that failed it could not be right.",
          "diagram": null
        }
      ],
      "finalAnswer": "Each term has units of $\\text{m/s}$: $[v]=\\text{m/s}$, $[u]=\\text{m/s}$ and $[at]=(\\text{m/s}^2)(\\text{s})=\\text{m/s}$. As all three terms share the same units, $v=u+at$ is dimensionally consistent."
    }
  },
  {
    "id": "al.y1.mech.modelling.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "show",
    "tags": [
      "unit-consistency",
      "suvat",
      "dimensional-check"
    ],
    "questionText": "The equation $s = ut + \\tfrac{1}{2}at^2$ gives displacement $s$ in terms of initial velocity $u$, acceleration $a$ and time $t$. Verify that every term has the units of length, and explain why the factor $\\tfrac{1}{2}$ does not affect the units.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the aim of the check",
          "workingLatex": "\\text{show each term has units of length (m)}",
          "explanation": "Displacement is a length, so for the equation to make sense every term on the right must also be a length. We will find the units of each term and confirm they all come out in metres.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the units of the basic quantities",
          "workingLatex": "[s]=\\text{m}, \\;\\; [u]=\\text{m/s}, \\;\\; [a]=\\text{m/s}^2, \\;\\; [t]=\\text{s}",
          "explanation": "We record the units first so each step is a simple substitution. Displacement is in metres, velocity in metres per second, acceleration in metres per second squared, and time in seconds.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the units of the left-hand side",
          "workingLatex": "[s] = \\text{m}",
          "explanation": "The left-hand side is the displacement $s$, whose units are metres. This is the length that both terms on the right are expected to match.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the first term as a product of units",
          "workingLatex": "[ut] = [u]\\times[t] = \\left(\\text{m/s}\\right)\\times\\left(\\text{s}\\right)",
          "explanation": "The units of $ut$ are the units of velocity multiplied by the units of time. We now simplify this product to see what single unit it leaves.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel seconds in the first term",
          "workingLatex": "\\frac{\\text{m}}{\\text{s}}\\times \\text{s} = \\text{m}",
          "explanation": "The seconds on the bottom cancel with the factor of seconds we multiply by, leaving metres. So $ut$ is a length, which fits the idea that speed times time gives a distance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Separate the number from the units in the second term",
          "workingLatex": "\\left[\\tfrac{1}{2}at^2\\right] = [a]\\times[t]^2",
          "explanation": "Units are carried only by the physical quantities, not by plain numbers. So to find the units of the second term we look at $a$ and $t^2$ and set the numerical factor aside for now.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain why the one-half is dimensionless",
          "workingLatex": "\\tfrac{1}{2}\\text{ is a pure number} \\Rightarrow \\text{no units}",
          "explanation": "The factor $\\tfrac{1}{2}$ is just a counting number with no measurement attached, so it has no units of its own. Multiplying by it scales the size of the term but cannot change whether it is a length, a time, or anything else.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the units of the second term as a product",
          "workingLatex": "[a]\\times[t]^2 = \\left(\\text{m/s}^2\\right)\\times\\left(\\text{s}^2\\right)",
          "explanation": "The units of acceleration are multiplied by the units of time squared. Squaring the seconds gives seconds-squared, which we can now cancel against the seconds-squared in the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the seconds-squared",
          "workingLatex": "\\frac{\\text{m}}{\\text{s}^2}\\times \\text{s}^2 = \\text{m}",
          "explanation": "The seconds-squared on top and bottom cancel exactly, leaving metres. So $\\tfrac{1}{2}at^2$ is also a length, in agreement with the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the units of every term",
          "workingLatex": "[s]=\\text{m}, \\;\\; [ut]=\\text{m}, \\;\\; \\left[\\tfrac{1}{2}at^2\\right]=\\text{m}",
          "explanation": "All three terms are measured in metres, so they can validly be added and equated. The equation passes the unit check with every term a length.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "\\therefore \\text{ consistent; } \\tfrac{1}{2}\\text{ is dimensionless}",
          "explanation": "Every term has units of length, so the equation is dimensionally consistent. The $\\tfrac{1}{2}$ only rescales the numerical value; because it is a pure number it leaves the units untouched.",
          "diagram": null
        }
      ],
      "finalAnswer": "Every term has units of length: $[ut]=(\\text{m/s})(\\text{s})=\\text{m}$ and $[\\tfrac{1}{2}at^2]=(\\text{m/s}^2)(\\text{s}^2)=\\text{m}$, matching $[s]=\\text{m}$. The factor $\\tfrac{1}{2}$ is a pure number with no units, so it changes only the size of the term, not its units."
    }
  },
  {
    "id": "al.y1.mech.modelling.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "show",
    "tags": [
      "unit-consistency",
      "force",
      "error-check"
    ],
    "questionText": "A student writes 'force $=$ mass $\\times$ velocity'. By comparing the units on each side, show that this equation is not dimensionally consistent, and state the correct relationship for force.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "\\text{compare } [\\text{force}] \\text{ with } [\\text{mass}\\times\\text{velocity}]",
          "explanation": "To test the student's equation we find the units of each side separately. If the two sides do not have the same units, the equation cannot be correct.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the correct definition of force",
          "workingLatex": "F = ma",
          "explanation": "Force is defined through Newton's second law as mass times acceleration. We use this trusted relationship to work out what units a force must have.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the units of force",
          "workingLatex": "[F] = [m]\\times[a] = \\text{kg}\\times\\text{m/s}^2",
          "explanation": "Multiplying the units of mass by the units of acceleration gives the units of force. This combination, kilogram metre per second squared, is what we call a newton.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the units of the left-hand side",
          "workingLatex": "[\\text{LHS}] = \\text{kg}\\,\\text{m/s}^2 = \\text{N}",
          "explanation": "So the left-hand side, the force, has units of kilogram metre per second squared, written as the newton (N). This is our benchmark for the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List the units on the right-hand side",
          "workingLatex": "[m] = \\text{kg}, \\qquad [v] = \\text{m/s}",
          "explanation": "The student's right-hand side is mass times velocity. Mass is measured in kilograms and velocity in metres per second, so we multiply these units together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the units of the right-hand side",
          "workingLatex": "[\\text{RHS}] = [m]\\times[v] = \\text{kg}\\times\\text{m/s} = \\text{kg}\\,\\text{m/s}",
          "explanation": "Combining the units gives kilogram metre per second. This is a perfectly real quantity, but we must check whether it equals the units of a force.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Place the two sides side by side",
          "workingLatex": "[\\text{LHS}] = \\text{kg}\\,\\text{m/s}^2, \\quad [\\text{RHS}] = \\text{kg}\\,\\text{m/s}",
          "explanation": "Comparing directly, the left side has seconds-squared on the bottom while the right side has only seconds. The two sets of units are not the same.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the mismatch precisely",
          "workingLatex": "\\frac{[\\text{LHS}]}{[\\text{RHS}]} = \\frac{\\text{kg}\\,\\text{m/s}^2}{\\text{kg}\\,\\text{m/s}} = \\frac{1}{\\text{s}} \\neq 1",
          "explanation": "Dividing one side's units by the other's leaves a leftover factor of one-over-seconds. Because this is not equal to 1, the two sides differ by an extra factor of time, confirming the mismatch.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State that the equation fails the check",
          "workingLatex": "\\text{kg}\\,\\text{m/s}^2 \\neq \\text{kg}\\,\\text{m/s}",
          "explanation": "Since the units do not match, the equation 'force = mass times velocity' is not dimensionally consistent and therefore cannot be a correct physical law.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret what mass times velocity actually is",
          "workingLatex": "\\text{mass}\\times\\text{velocity} = \\text{momentum, not force}",
          "explanation": "The quantity the student wrote, mass times velocity, is actually momentum, which is a different physical idea. Recognising this shows where the confusion lies rather than just labelling the equation wrong.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the correct relationship and verify it",
          "workingLatex": "F = ma, \\quad [ma]=\\text{kg}\\,\\text{m/s}^2 = \\text{N}",
          "explanation": "The correct relationship is force equals mass times acceleration. Its units are kilogram metre per second squared, exactly the newton, so both sides now agree and the equation is dimensionally consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "Left side: $[F]=\\text{kg}\\,\\text{m/s}^2=\\text{N}$. Right side: $[mv]=\\text{kg}\\,\\text{m/s}$. These differ by a factor of $1/\\text{s}$, so the equation is not dimensionally consistent (mass $\\times$ velocity is momentum, not force). The correct relationship is $F = ma$, whose units $\\text{kg}\\,\\text{m/s}^2$ match the newton."
    }
  },
  {
    "id": "al.y1.mech.modelling.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "acceleration",
      "compound-units",
      "gravity"
    ],
    "questionText": "The acceleration due to gravity is $g = 9.8\\,\\text{m/s}^2$. Express $g$ in units of km/h per second, and then in km/h per hour, showing every conversion step.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret what the acceleration means",
          "workingLatex": "g = 9.8\\,\\text{m/s}^2 \\ \\Rightarrow\\ \\text{velocity rises } 9.8\\,\\text{m/s each second}",
          "explanation": "Acceleration of 9.8 metres per second squared means the speed grows by 9.8 metres per second during every single second. Reading g this way tells us exactly which pieces have units we must convert.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the conversion needed for part one",
          "workingLatex": "\\text{Part 1: rewrite the } 9.8\\,\\text{m/s velocity change in km/h}",
          "explanation": "The units km/h per second still measure how the velocity changes each second, so only the velocity part (the metres per second) needs rewriting into kilometres per hour.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the building-block conversions",
          "workingLatex": "1\\,\\text{m} = \\tfrac{1}{1000}\\,\\text{km}, \\qquad 1\\,\\text{s} = \\tfrac{1}{3600}\\,\\text{h}",
          "explanation": "These are the two building blocks for the swap: a metre is a thousandth of a kilometre and a second is one part in 3600 of an hour.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert one metre per second to km/h",
          "workingLatex": "1\\,\\text{m/s} = \\frac{1/1000\\,\\text{km}}{1/3600\\,\\text{h}} = \\frac{3600}{1000}\\,\\text{km/h} = 3.6\\,\\text{km/h}",
          "explanation": "Dividing the distance conversion by the time conversion turns metres per second into kilometres per hour, and the arithmetic gives the well-known factor of 3.6.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Scale the velocity change of 9.8 m/s",
          "workingLatex": "9.8\\,\\text{m/s} = 9.8 \\times 3.6\\,\\text{km/h} = 35.28\\,\\text{km/h}",
          "explanation": "Multiplying the velocity change of 9.8 m/s by 3.6 expresses that same change in km/h.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State g in km/h per second",
          "workingLatex": "g = 35.28\\ \\text{(km/h) per second}",
          "explanation": "So each second the velocity increases by 35.28 km/h; this is g measured in km/h per second.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up part two",
          "workingLatex": "\\text{Part 2: convert the per second into per hour}",
          "explanation": "The second part keeps the velocity in km/h but measures the change over an hour instead of a second, so only the time on the bottom changes.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall seconds in an hour",
          "workingLatex": "1\\,\\text{h} = 3600\\,\\text{s}",
          "explanation": "There are 3600 seconds in an hour, the single fact needed to scale from a per-second rate up to a per-hour rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Relate the per-hour gain to the per-second gain",
          "workingLatex": "\\text{velocity gained in 1 h} = 3600 \\times (\\text{gain in 1 s})",
          "explanation": "If the velocity climbs by a fixed amount each second, then over 3600 seconds it climbs by 3600 times as much, so we multiply the per-second gain by 3600.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the per-second gain",
          "workingLatex": "= 3600 \\times 35.28\\,\\text{km/h}",
          "explanation": "Substituting the per-second gain of 35.28 km/h ready to be scaled up.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Carry out the multiplication",
          "workingLatex": "= 127008\\,\\text{km/h}",
          "explanation": "Carrying out the multiplication gives the velocity change per hour.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State g in km/h per hour",
          "workingLatex": "g = 127008\\ \\text{km/h per hour}",
          "explanation": "So expressed in km/h per hour, g is 127008.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check with a single combined calculation",
          "workingLatex": "9.8 \\times 3.6 \\times 3600 = 127008 \\ \\checkmark",
          "explanation": "Combining the single metre-per-second-to-km/h factor with the 3600 seconds-per-hour factor confirms the number, a reassuring check.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State both results",
          "workingLatex": "g \\approx 35.28\\ \\text{km/h per s} \\ \\text{and}\\ 127008\\ \\text{km/h per h}",
          "explanation": "The same acceleration looks very different in these units, which is exactly why mechanics sticks to metres and seconds.",
          "diagram": null
        }
      ],
      "finalAnswer": "$g = 35.28\\ \\text{km/h per second} = 127008\\ \\text{km/h per hour}$"
    }
  },
  {
    "id": "al.y1.mech.modelling.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "unit-conversion",
      "density",
      "mass-and-weight",
      "compound-units"
    ],
    "questionText": "A liquid has density $1.03\\,\\text{g/cm}^3$. Convert this to $\\text{kg/m}^3$, then find the mass of $2.5\\,\\text{m}^3$ of the liquid in kg and its weight in newtons (take $g = 9.8\\,\\text{m/s}^2$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the given density",
          "workingLatex": "\\rho = 1.03\\,\\text{g/cm}^3",
          "explanation": "The density is given in grams per cubic centimetre, the everyday units, but mechanics works in kilograms and metres, so a conversion is needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the goal of the conversion",
          "workingLatex": "\\text{Goal: express } \\rho \\text{ in kg/m}^3",
          "explanation": "Setting the target clearly keeps the conversion organised: we must change both the mass unit and the volume unit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert grams to kilograms",
          "workingLatex": "1\\,\\text{g} = 0.001\\,\\text{kg}",
          "explanation": "A gram is one thousandth of a kilogram, handling the top of the density fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert cubic centimetres to cubic metres",
          "workingLatex": "1\\,\\text{cm} = 0.01\\,\\text{m} \\ \\Rightarrow\\ 1\\,\\text{cm}^3 = (0.01)^3\\,\\text{m}^3 = 10^{-6}\\,\\text{m}^3",
          "explanation": "A centimetre is a hundredth of a metre, and cubing that shrinks a cubic centimetre to a millionth of a cubic metre; this handles the bottom of the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two conversions",
          "workingLatex": "1\\,\\text{g/cm}^3 = \\frac{0.001\\,\\text{kg}}{10^{-6}\\,\\text{m}^3} = 1000\\,\\text{kg/m}^3",
          "explanation": "Dividing the kilogram value by the cubic-metre value shows that one gram per cubic centimetre equals a thousand kilograms per cubic metre.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the factor to the given density",
          "workingLatex": "\\rho = 1.03 \\times 1000 = 1030\\,\\text{kg/m}^3",
          "explanation": "Since the conversion multiplies by 1000, the given 1.03 simply becomes 1030 in the new units.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the density in SI units",
          "workingLatex": "\\rho = 1030\\,\\text{kg/m}^3",
          "explanation": "The density is now in SI units, ready to combine with a volume measured in cubic metres.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the mass relation",
          "workingLatex": "m = \\rho V",
          "explanation": "Mass is density multiplied by volume, because density tells us the mass packed into each cubic metre.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the density and volume",
          "workingLatex": "m = 1030 \\times 2.5",
          "explanation": "With density in kg/m3 and volume in m3 the units now agree, so substituting them directly will yield a mass in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the mass",
          "workingLatex": "m = 2575\\,\\text{kg}",
          "explanation": "Each cubic metre carries 1030 kg, so 2.5 cubic metres carry 2.5 times as much; the product is the sample's mass.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the mass",
          "workingLatex": "\\text{mass of } 2.5\\,\\text{m}^3 = 2575\\,\\text{kg}",
          "explanation": "So the 2.5 cubic metres of liquid has a mass of 2575 kg.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recall the weight relation",
          "workingLatex": "W = mg",
          "explanation": "Weight is mass times g, the pull of gravity on that mass.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute the mass and g",
          "workingLatex": "W = 2575 \\times 9.8",
          "explanation": "Weight is how hard gravity pulls each kilogram, so we substitute the mass and g = 9.8.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the weight",
          "workingLatex": "W = 25235\\,\\text{N}",
          "explanation": "Every kilogram feels a 9.8 N pull, so multiplying the mass by 9.8 gives the total downward force in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State all results",
          "workingLatex": "\\rho = 1030\\,\\text{kg/m}^3, \\ m = 2575\\,\\text{kg}, \\ W = 25235\\,\\text{N}",
          "explanation": "So the liquid weighs about 25235 N, the downward force gravity exerts on the 2.5 cubic metres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\rho = 1030\\,\\text{kg/m}^3$; mass $= 2575\\,\\text{kg}$; weight $= 25235\\,\\text{N}$"
    }
  },
  {
    "id": "al.y1.mech.modelling.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "weight",
      "gravity",
      "planets",
      "multi-part"
    ],
    "questionText": "A robotic probe has mass $240\\,\\text{kg}$. (a) Find its weight on Earth (take $g = 9.8\\,\\text{m/s}^2$). (b) On Mars its weight is $888\\,\\text{N}$; find the value of $g$ on Mars. (c) State, with reason, whether the probe's mass changes between the two planets.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the probe's mass",
          "workingLatex": "m = 240\\,\\text{kg}",
          "explanation": "The probe's mass is the same quantity wherever it is; we will use it in each part.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the weight relation for part (a)",
          "workingLatex": "\\text{(a)}\\quad W = mg",
          "explanation": "Weight is the gravitational force on the mass, found from W = mg.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the Earth values",
          "workingLatex": "W = 240 \\times 9.8",
          "explanation": "On Earth each kilogram is pulled with 9.8 N, so we substitute that value of g alongside the probe's mass.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the weight on Earth",
          "workingLatex": "W = 2352\\,\\text{N}",
          "explanation": "Multiplying the 240 kg by the 9.8 N pull on each kilogram totals the gravitational force, the weight on Earth.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the Earth weight",
          "workingLatex": "\\text{Weight on Earth} = 2352\\,\\text{N}",
          "explanation": "So on Earth gravity pulls the probe down with a force of 2352 N.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange the weight relation for part (b)",
          "workingLatex": "\\text{(b)}\\quad W = mg \\ \\Rightarrow\\ g = \\frac{W}{m}",
          "explanation": "To find the Martian g we rearrange W = mg, dividing the known weight by the mass.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note why dividing works",
          "workingLatex": "m \\text{ fixed} \\ \\Rightarrow\\ \\text{smaller } W \\text{ means smaller } g",
          "explanation": "The mass is unchanged, so the smaller Martian weight must come from a smaller g; dividing isolates that value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the Martian values",
          "workingLatex": "g_{\\text{Mars}} = \\frac{888}{240}",
          "explanation": "We substitute the measured Martian weight over the fixed mass so the division can reveal the pull per kilogram there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the Martian gravity",
          "workingLatex": "g_{\\text{Mars}} = 3.7\\,\\text{m/s}^2",
          "explanation": "Sharing the 888 N of weight across the 240 kg gives the force felt by each kilogram, which is exactly g on Mars.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the Martian gravity",
          "workingLatex": "g_{\\text{Mars}} = 3.7\\,\\text{m/s}^2",
          "explanation": "So on Mars each kilogram is pulled with only 3.7 N, giving g = 3.7 m/s squared.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sense-check against Earth",
          "workingLatex": "3.7 < 9.8 \\ \\Rightarrow\\ \\text{Mars pulls more weakly}",
          "explanation": "This is well below Earth's 9.8, which fits the fact that Mars is smaller and pulls more weakly.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recall the meaning of mass for part (c)",
          "workingLatex": "\\text{(c)}\\quad \\text{mass} = \\text{amount of matter in the probe}",
          "explanation": "Mass measures the amount of matter making up the probe, a property of the object itself.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Explain what gravity actually changes",
          "workingLatex": "\\text{gravity changes } W, \\text{ not } m",
          "explanation": "Gravity changes how hard that matter is pulled, so it changes the weight, but it does not add or remove any matter.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion for the mass",
          "workingLatex": "m = 240\\,\\text{kg on Earth and on Mars}",
          "explanation": "Hence the mass stays 240 kg on both planets; only the weight differs.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Collect all three answers",
          "workingLatex": "2352\\,\\text{N}, \\quad g_{\\text{Mars}} = 3.7\\,\\text{m/s}^2, \\quad m = 240\\,\\text{kg unchanged}",
          "explanation": "Collecting the three results gives a full picture of how weight varies with gravity while mass does not.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $2352\\,\\text{N}$; (b) $g_{\\text{Mars}} = 3.7\\,\\text{m/s}^2$; (c) the mass is unchanged at $240\\,\\text{kg}$ because mass is the amount of matter, independent of gravity."
    }
  },
  {
    "id": "al.y1.mech.modelling.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": [
      "weight",
      "unit-conversion",
      "composite",
      "percentage"
    ],
    "questionText": "A lorry has mass $7.5$ tonnes and carries a load of mass $2500\\,\\text{kg}$. Convert all masses to kg, find the total weight of the loaded lorry (take $g = 9.8\\,\\text{m/s}^2$), and find the percentage by which the total weight increases when the load is added.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given masses",
          "workingLatex": "\\text{lorry} = 7.5\\,\\text{tonnes}, \\quad \\text{load} = 2500\\,\\text{kg}",
          "explanation": "The two masses are given in different units, so before adding them we must express both in kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the tonne conversion",
          "workingLatex": "1\\,\\text{tonne} = 1000\\,\\text{kg}",
          "explanation": "A tonne is a thousand kilograms, the fact needed to convert the lorry's mass.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert the lorry's mass",
          "workingLatex": "7.5\\,\\text{tonnes} = 7.5 \\times 1000 = 7500\\,\\text{kg}",
          "explanation": "Multiplying 7.5 by 1000 converts the lorry's mass into kilograms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the load is already in kg",
          "workingLatex": "\\text{load} = 2500\\,\\text{kg}",
          "explanation": "The load is already given in kilograms, so it needs no conversion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the masses",
          "workingLatex": "M = 7500 + 2500 = 10000\\,\\text{kg}",
          "explanation": "Adding the two masses gives the mass of the loaded lorry.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the total mass",
          "workingLatex": "\\text{total mass} = 10000\\,\\text{kg}",
          "explanation": "So loaded, the lorry and cargo together are 10000 kg.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the weight relation",
          "workingLatex": "W = Mg",
          "explanation": "The total weight is the total mass times g.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the total mass and g",
          "workingLatex": "W = 10000 \\times 9.8",
          "explanation": "Every kilogram of the loaded lorry is pulled with 9.8 N, so we substitute the total mass and g = 9.8.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the total weight",
          "workingLatex": "W = 98000\\,\\text{N}",
          "explanation": "Multiplying the 10000 kg by the 9.8 N pull on each kilogram gives the loaded lorry's total weight.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the total weight",
          "workingLatex": "\\text{total weight} = 98000\\,\\text{N}",
          "explanation": "So gravity pulls the loaded lorry down with 98000 N.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the weight of the empty lorry",
          "workingLatex": "W_{\\text{lorry}} = 7500 \\times 9.8 = 73500\\,\\text{N}",
          "explanation": "For the percentage change we also need the weight of the empty lorry, found the same way.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the increase in weight",
          "workingLatex": "\\Delta W = 98000 - 73500 = 24500\\,\\text{N}",
          "explanation": "The increase in weight is the loaded weight minus the empty weight, which equals the weight of the load itself.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the percentage-increase formula",
          "workingLatex": "\\text{percentage increase} = \\frac{\\Delta W}{W_{\\text{lorry}}} \\times 100\\%",
          "explanation": "A percentage increase compares the extra weight to the original empty weight.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Substitute the values",
          "workingLatex": "= \\frac{24500}{73500} \\times 100\\%",
          "explanation": "Substituting the increase and the original weight.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compute the percentage",
          "workingLatex": "= 33.3\\%\\ \\text{(1 d.p.)}",
          "explanation": "Working out the fraction gives an increase of about 33.3 percent.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the final results",
          "workingLatex": "W = 98000\\,\\text{N}, \\quad \\text{increase} \\approx 33.3\\%",
          "explanation": "So adding the load raises the lorry's weight to 98000 N, about a third more than before.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total weight $= 98000\\,\\text{N}$; the weight increases by about $33.3\\%$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "crane",
      "pulley",
      "effects"
    ],
    "questionText": "A crane lifts a heavy steel beam using a cable that passes over a pulley. List four modelling assumptions you would make and, for each, explain precisely how it simplifies the mathematics.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Explain what a modelling assumption is",
          "workingLatex": "\\text{Modelling assumption: a simplification that makes the maths workable.}",
          "explanation": "A modelling assumption deliberately ignores a small real-world detail so the situation can be described with manageable equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the objects involved",
          "workingLatex": "\\text{Objects: steel beam, cable, pulley, crane.}",
          "explanation": "Naming the parts helps target each assumption at the object it simplifies.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State assumption one",
          "workingLatex": "\\text{1. Model the beam as a } \\mathbf{particle}.",
          "explanation": "Treating the beam as a particle imagines its whole mass squeezed to a single point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Give the effect of assumption one",
          "workingLatex": "\\Rightarrow \\text{all forces act at one point; no size, no rotation, no moments.}",
          "explanation": "With no size to worry about, every force acts through one point, so we never have to consider the beam turning or balance moments about it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State assumption two",
          "workingLatex": "\\text{2. The cable is } \\mathbf{light}\\ (\\text{negligible mass}).",
          "explanation": "A light cable is assumed to have no mass worth counting.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Give the effect of assumption two",
          "workingLatex": "\\Rightarrow \\text{ignore the cable's weight; tension is the only cable force.}",
          "explanation": "Because it is weightless, the cable adds no force of its own and the tension is the same all along it, which keeps the force diagram simple.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State assumption three",
          "workingLatex": "\\text{3. The cable is } \\mathbf{inextensible}.",
          "explanation": "An inextensible cable cannot stretch, so its length is fixed.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Give the effect of assumption three",
          "workingLatex": "\\Rightarrow \\text{beam and cable end share one acceleration } a.",
          "explanation": "That means the beam moves exactly as the cable end moves, so both share a single acceleration and we need only one equation of motion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State assumption four",
          "workingLatex": "\\text{4. The pulley is } \\mathbf{smooth}\\ (\\text{frictionless}).",
          "explanation": "A smooth pulley is assumed frictionless at its axle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Give the effect of assumption four",
          "workingLatex": "\\Rightarrow \\text{tension } T \\text{ is equal on both sides of the pulley.}",
          "explanation": "With no friction, the pulley merely redirects the cable, so the tension is identical on both sides and does not change as it turns.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine the assumptions",
          "workingLatex": "\\text{Together: treat the beam as one particle with } T \\text{ constant.}",
          "explanation": "Put together, these let us treat the beam as one particle pulled by a single constant tension.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Show the resulting equation",
          "workingLatex": "\\text{Newton's second law: } T - mg = ma",
          "explanation": "Newton's second law then reduces to a single clean equation linking tension, weight and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note the trade-off",
          "workingLatex": "\\text{Trade-off: simpler equations, slightly less realistic.}",
          "explanation": "These simplifications trade a little realism for a solvable model, which is acceptable as long as the ignored effects are genuinely small.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the four assumptions",
          "workingLatex": "\\text{particle, light cable, inextensible cable, smooth pulley}",
          "explanation": "Summarising the four assumptions and their effects shows how each one removes a specific complication.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the overall conclusion",
          "workingLatex": "\\Rightarrow \\text{a real crane becomes one particle obeying } T - mg = ma.",
          "explanation": "Together the four assumptions turn a messy real crane into a single particle obeying one equation of motion.",
          "diagram": null
        }
      ],
      "finalAnswer": "Four assumptions: (1) the beam is a $\\mathbf{particle}$ (forces act at one point, no moments); (2) the cable is $\\mathbf{light}$ (its weight is ignored, tension is constant); (3) the cable is $\\mathbf{inextensible}$ (beam and cable share one acceleration); (4) the pulley is $\\mathbf{smooth}$ (tension equal on both sides). Together the beam obeys $T - mg = ma$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": [
      "modelling-assumptions",
      "bead",
      "smooth",
      "evaluation"
    ],
    "questionText": "A small bead is threaded on a smooth circular wire that is fixed in a vertical plane. Explain what is meant by modelling the object as a 'bead' and the wire as 'smooth', describing the simplifying effect of each assumption, and discuss one way in which this model might be unrealistic.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two modelling words to explain",
          "workingLatex": "\\text{model: a } \\textbf{bead} \\text{ on a } \\textbf{smooth} \\text{ wire}",
          "explanation": "There are two idealising words in the description. Dealing with them one at a time keeps the explanation clear: 'bead' tells us how to treat the object, and 'smooth' tells us how to treat the contact with the wire.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what 'bead' means",
          "workingLatex": "\\text{bead} \\Rightarrow \\text{treat the object as a particle}",
          "explanation": "Calling the object a bead means we model it as a particle: a single point that carries all of the object's mass. We ignore its physical dimensions entirely.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Give the simplifying effect of the bead assumption",
          "workingLatex": "\\text{all mass at one point; no size, no shape, no rotation}",
          "explanation": "Because the mass sits at one point, every force acts through that same point. This removes any turning effects, so we never have to worry about the bead spinning or toppling and can use simple straight-line force balances.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note how the bead sits on the wire",
          "workingLatex": "\\text{the wire passes through the hole in the bead}",
          "explanation": "A bead is threaded onto the wire, so the wire surrounds it. This is different from an object resting on top of a surface, and it changes what the contact force can do.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Deduce the direction of the wire's reaction",
          "workingLatex": "\\mathbf{R} \\perp \\text{wire, directed along the radius (either way)}",
          "explanation": "The reaction from the wire is always perpendicular to the wire. Because the wire threads through the bead, this reaction can point either inwards or outwards along the radius, whichever is needed to keep the bead on the wire.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State what 'smooth' means",
          "workingLatex": "\\text{smooth} \\Rightarrow \\text{no friction between bead and wire}",
          "explanation": "Describing the wire as smooth means we assume there is no friction where the bead touches it. Nothing resists the bead sliding along the wire.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Give the simplifying effect of the smooth assumption",
          "workingLatex": "\\text{contact force} = \\text{normal reaction only}",
          "explanation": "With no friction, the only force the wire exerts is the normal reaction. This cuts the number of unknown forces and means we do not need a separate friction term in our equations.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the energy consequence of smoothness",
          "workingLatex": "\\text{no energy lost to friction as the bead moves}",
          "explanation": "Because friction is the usual way mechanical energy is lost, a smooth wire means the bead's energy is conserved as it slides. This makes energy methods much easier to apply.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the effects on the forces",
          "workingLatex": "\\text{forces on bead: weight } W \\text{ and reaction } \\mathbf{R}",
          "explanation": "Putting both assumptions together, only two forces act on the bead: its weight and the normal reaction. A situation with just two forces is about as simple as a mechanics problem can be.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain why these assumptions make the problem workable",
          "workingLatex": "\\text{fewer, simpler forces} \\Rightarrow \\text{simpler equations}",
          "explanation": "The point of modelling is to strip a real situation down to something we can actually calculate. Treating the object as a particle and the wire as smooth leaves clean equations that can be solved by hand.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Begin the evaluation by choosing a limitation",
          "workingLatex": "\\text{real surfaces are never perfectly smooth}",
          "explanation": "To judge the model we ask where it departs from reality. The clearest weak point is the smoothness assumption, because no real wire is completely frictionless.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain the unrealistic feature",
          "workingLatex": "\\text{in reality friction always acts to some degree}",
          "explanation": "A genuine bead sliding on a genuine wire would feel a small resisting friction force. By setting friction to zero, the model leaves out something that is always present in practice.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the effect of ignoring friction",
          "workingLatex": "\\text{model over-predicts speed; motion never dies away}",
          "explanation": "Without friction the model predicts the bead keeps more energy than it really would, so it moves faster than a real bead and never gradually comes to rest. The predictions are therefore an optimistic overestimate.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the overall conclusion",
          "workingLatex": "\\text{a useful but idealised approximation of reality}",
          "explanation": "The bead-and-smooth-wire model is not exactly true, but it captures the important physics with equations we can solve, which is exactly what a good model is meant to do.",
          "diagram": null
        }
      ],
      "finalAnswer": "'Bead' means the object is treated as a particle (all its mass at a single point, with no size), so the wire's reaction acts along the radius; 'smooth' means there is no friction, so the only contact force is the normal reaction and no energy is lost to friction. The model is unrealistic because a real wire is never perfectly smooth, so friction would slow the bead and the model over-predicts its motion."
    }
  },
  {
    "id": "al.y1.mech.modelling.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "diagram",
    "tags": [
      "forces",
      "pulley",
      "connected-particles",
      "tension"
    ],
    "questionText": "Particles $A$ and $B$, of masses $3\\,\\text{kg}$ and $5\\,\\text{kg}$ respectively, are joined by a light inextensible string that passes over a smooth fixed pulley. The system is released from rest with the string taut. Draw a labelled force diagram for each particle, and explain why the tension is the same throughout the string.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the modelling assumptions in the set-up",
          "workingLatex": "\\text{light, inextensible string; smooth pulley; } A, B \\text{ particles}",
          "explanation": "Before drawing anything it helps to note the idealisations. The string is light and inextensible, the pulley is smooth, and the two objects are particles. Each of these controls what appears on the diagrams.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the forces acting on particle A",
          "workingLatex": "\\text{on } A:\\ \\text{weight } 3g \\text{ down, tension } T \\text{ up}",
          "explanation": "Particle A is pulled down by gravity and pulled up by the string. Those are the only two forces on it, since the string is the only thing touching it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the forces acting on particle B",
          "workingLatex": "\\text{on } B:\\ \\text{weight } 5g \\text{ down, tension } T \\text{ up}",
          "explanation": "In the same way, particle B feels its weight downwards and the string tension upwards. Again there are just two forces because nothing else is in contact with it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Draw the two labelled force diagrams",
          "workingLatex": "\\text{diagram: } A \\text{ and } B \\text{ each with } T \\uparrow \\text{ and weight } \\downarrow",
          "explanation": "Each particle gets its own free-body diagram: a dot with the tension arrow pointing up toward the pulley and the weight arrow pointing straight down. Keeping the diagrams separate stops the forces getting muddled.",
          "diagram": {
            "kind": "descriptive",
            "description": "Two separate free-body diagrams side by side, with a small circle representing the smooth pulley drawn above and between them. Left diagram: particle A shown as a dot, an upward arrow labelled T (tension) toward the pulley and a shorter downward arrow labelled 3g = 29.4 N (weight). Right diagram: particle B shown as a dot, an upward arrow labelled T (tension) toward the pulley and a longer downward arrow labelled 5g = 49 N (weight).",
            "alt": "Free-body diagrams for particles A and B, each with tension T upward toward a pulley and weight downward, A weighing 29.4 N and B weighing 49 N."
          }
        },
        {
          "stepNumber": 5,
          "description": "Write the weight of particle A",
          "workingLatex": "W_A = 3g = 3 \\times 9.8 = 29.4\\,\\text{N}",
          "explanation": "The weight of any object is its mass times g. For A this gives 29.4 N, which is the length of the downward arrow on its diagram.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the weight of particle B",
          "workingLatex": "W_B = 5g = 5 \\times 9.8 = 49\\,\\text{N}",
          "explanation": "Doing the same for B gives 49 N. Because B is heavier its weight arrow is drawn longer than A's, which foreshadows which way the system will move.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the direction in which the string pulls",
          "workingLatex": "\\text{tension pulls each particle up, toward the pulley}",
          "explanation": "A taut string can only pull, never push, and it pulls along its own length. On each side the string runs up to the pulley, so the tension on each particle points upwards.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the 'light string' assumption",
          "workingLatex": "\\text{light} \\Rightarrow \\text{string has negligible mass}",
          "explanation": "Modelling the string as light means we treat its mass as zero. This is the key fact behind the tension being constant, so it is worth stating explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Deduce constant tension along a light string",
          "workingLatex": "\\text{no mass to accelerate} \\Rightarrow T \\text{ constant along the string}",
          "explanation": "By Newton's second law, any difference in tension along the string would have to accelerate the mass of that piece of string. With no mass, no tension difference is needed, so the tension is the same all along a single length of string.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Use the 'smooth pulley' assumption",
          "workingLatex": "\\text{smooth pulley} \\Rightarrow \\text{no friction at the pulley}",
          "explanation": "A smooth pulley exerts no friction on the string running over it. Friction is the only thing that could make the tension differ from one side of the pulley to the other.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Deduce the tension is unchanged over the pulley",
          "workingLatex": "\\text{string slides freely} \\Rightarrow T_{\\text{left}} = T_{\\text{right}}",
          "explanation": "Because there is no friction to grip the string, the pulley simply redirects it. The pull it carries around the curve is unchanged, so the tension is the same on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the two results",
          "workingLatex": "T_{A\\text{-side}} = T_{B\\text{-side}} = T",
          "explanation": "Putting the light-string and smooth-pulley facts together, the tension is constant along each side and unchanged over the pulley, so a single value T describes the whole string.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note which particle moves which way",
          "workingLatex": "5g > 3g \\Rightarrow B \\text{ descends and } A \\text{ rises}",
          "explanation": "The heavier particle B wins the tug of war, so when released B moves down and A moves up. This does not change the tension being shared, but it confirms the physical picture.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm the tension magnitude is shared",
          "workingLatex": "\\text{one continuous string} \\Rightarrow \\text{one value } T \\text{ throughout}",
          "explanation": "It is the same physical string threading over the pulley, so there is only one tension in it. Both particles are held by that same value T.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion",
          "workingLatex": "\\therefore\\ T \\text{ is identical on both sides of the pulley}",
          "explanation": "Therefore the tension is the same throughout the string: a direct consequence of the string being light and the pulley being smooth.",
          "diagram": null
        }
      ],
      "finalAnswer": "Each particle has its weight acting downwards ($29.4\\,\\text{N}$ on $A$, $49\\,\\text{N}$ on $B$) and the tension $T$ acting upwards toward the pulley. The tension is the same throughout because the string is light (so no tension difference is needed to accelerate a massless string) and the pulley is smooth (so the string slides over it without friction), giving a single value $T$ on both sides."
    }
  },
  {
    "id": "al.y1.mech.modelling.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "forces",
      "evaluation",
      "force-diagram",
      "incline"
    ],
    "questionText": "A student draws a force diagram for a car of mass $m$ accelerating up a straight hill. Their diagram shows only the weight of the car and a driving force directed up the slope. Identify the forces that are missing, explain the role of each force acting on the car, and write a corrected list of all the forces.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the situation being modelled",
          "workingLatex": "\\text{car accelerating up an inclined road}",
          "explanation": "The car is on a slope and speeding up as it climbs. Picturing this clearly tells us what physical effects the diagram ought to include.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List what the student already included",
          "workingLatex": "\\text{given: weight } W \\text{ and driving force } D",
          "explanation": "The student has the pull of gravity and the forward push from the engine. These are genuine forces, but a car on a road always has more acting on it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Ask what the road surface must do",
          "workingLatex": "\\text{a surface pushes back on whatever presses on it}",
          "explanation": "The car presses down on the road, and by Newton's third law the road must push back. A force diagram that leaves this out has the car sinking into the road, which cannot be right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the first missing force",
          "workingLatex": "\\text{missing: the normal reaction } \\mathbf{R}",
          "explanation": "The push from the road is the normal reaction. It is the first force the student has forgotten.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the role of the normal reaction",
          "workingLatex": "\\mathbf{R} \\perp \\text{road surface}",
          "explanation": "The normal reaction acts perpendicular to the road and supports the car, balancing the part of the weight that presses into the slope. Without it the car would not stay on the road.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Ask what opposes the car's motion",
          "workingLatex": "\\text{moving through air and over the road creates resistance}",
          "explanation": "A real car pushes air out of the way and meets rolling resistance at the tyres. Anything moving through air or over a surface experiences a resisting force.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the second missing force",
          "workingLatex": "\\text{missing: resistance } \\mathbf{F} \\ (\\text{air + rolling})",
          "explanation": "These combined resisting effects form the resistance to motion, the second force the student has omitted.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the role of the resistance",
          "workingLatex": "\\mathbf{F} \\text{ acts down the slope, opposing the motion}",
          "explanation": "Resistance always acts against the direction of travel. Since the car moves up the slope, the resistance points down the slope, working against the driving force.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Clarify the weight already shown",
          "workingLatex": "W = mg \\text{ acts vertically downwards}",
          "explanation": "The weight is correct as drawn. It always acts vertically downwards, not along the slope, and equals the mass times g.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Clarify the driving force already shown",
          "workingLatex": "D \\text{ acts up the slope (forward friction from the tyres)}",
          "explanation": "The driving force is also correct. It is really the forward grip of the driven tyres on the road, and it points up the slope in the direction the car is trying to go.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the directions relative to the slope",
          "workingLatex": "\\mathbf{R} \\perp \\text{slope}, \\quad D \\text{ up slope}, \\quad \\mathbf{F} \\text{ down slope}",
          "explanation": "Lining up the directions helps check the diagram: the reaction is perpendicular to the road, while the driving force and resistance act along the slope in opposite senses.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Relate the forces to the acceleration",
          "workingLatex": "\\text{accelerating up} \\Rightarrow \\text{net force acts up the slope}",
          "explanation": "Because the car speeds up as it climbs, the forces along the slope cannot balance: the driving force must beat the resistance plus the weight component, giving a net force up the slope. This is a useful consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Begin the corrected list of forces",
          "workingLatex": "1.\\ \\text{Weight } W = mg \\ (\\text{vertically down})",
          "explanation": "Now we assemble the complete list. First the weight, acting vertically downwards, which was already present.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Continue the corrected list",
          "workingLatex": "2.\\ \\mathbf{R} \\ (\\perp \\text{road}); \\qquad 3.\\ D \\ (\\text{up the slope})",
          "explanation": "Next the normal reaction perpendicular to the road, and the driving force up the slope. The reaction is the newly added supporting force.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Complete the corrected list",
          "workingLatex": "4.\\ \\mathbf{F} \\ (\\text{resistance, down the slope})",
          "explanation": "Finally the resistance, acting down the slope against the motion. With all four forces the diagram now represents the real situation, and the two missing forces were the normal reaction and the resistance.",
          "diagram": null
        }
      ],
      "finalAnswer": "The diagram is missing the normal reaction $\\mathbf{R}$ (the road pushing perpendicular to its surface, supporting the car) and the resistance $\\mathbf{F}$ (air resistance and rolling resistance, acting down the slope against the motion). The full list of forces is: weight $W = mg$ vertically down, normal reaction $\\mathbf{R}$ perpendicular to the road, driving force $D$ up the slope, and resistance $\\mathbf{F}$ down the slope."
    }
  },
  {
    "id": "al.y1.mech.modelling.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "diagram",
    "tags": [
      "forces",
      "lift",
      "normal-reaction",
      "weight"
    ],
    "questionText": "A person of mass $70\\,\\text{kg}$ stands on the horizontal floor of a lift which is at rest. Taking $g = 9.8\\,\\text{m/s}^2$, draw and label a force diagram for the person, describe the contact force between the person and the floor, and explain how the normal reaction is related to the person's weight while the lift is at rest, giving the value of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the modelling assumptions",
          "workingLatex": "\\text{person modelled as a particle on a horizontal floor}",
          "explanation": "We treat the person as a single particle standing on the flat lift floor. This lets us represent all the forces as arrows through one point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the forces acting on the person",
          "workingLatex": "\\text{weight } W \\text{ down, normal reaction } R \\text{ up}",
          "explanation": "Two forces act on the person: gravity pulling them down, and the floor pushing them up. Nothing else is in contact with them, so these are the only two.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Draw the labelled force diagram",
          "workingLatex": "\\text{diagram: dot with } R \\uparrow \\text{ and } W \\downarrow",
          "explanation": "The free-body diagram is a dot for the person with the normal reaction arrow pointing up and the weight arrow pointing down. At rest the arrows are equal in length, showing the forces balance.",
          "diagram": {
            "kind": "descriptive",
            "description": "A free-body diagram of the person modelled as a dot resting on a horizontal floor line. An upward arrow from the dot is labelled R (normal reaction). A downward arrow from the dot is labelled W = 686 N (weight). The two arrows are drawn equal in length to indicate the forces balance.",
            "alt": "Force diagram of a person on a lift floor: normal reaction R upward equal in length to weight W = 686 N downward."
          }
        },
        {
          "stepNumber": 4,
          "description": "Write the weight formula",
          "workingLatex": "W = mg",
          "explanation": "The weight of the person is their mass multiplied by the gravitational field strength g. This converts the mass in kilograms into a force in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Calculate the weight",
          "workingLatex": "W = 70 \\times 9.8 = 686\\,\\text{N}",
          "explanation": "Putting in 70 kg and 9.8 m/s^2 gives a weight of 686 N acting vertically downwards.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Describe the contact force",
          "workingLatex": "R \\perp \\text{floor, pushing up on the person}",
          "explanation": "The contact force between the person and the floor is the normal reaction R. It acts perpendicular to the floor, pushing straight up on the soles of the person's feet.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Relate the contact force to Newton's third law",
          "workingLatex": "\\text{floor pushes person up; person pushes floor down}",
          "explanation": "The push is one half of a Newton's-third-law pair: the person presses down on the floor and the floor presses back up on the person with an equal and opposite force.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note that the lift is stationary",
          "workingLatex": "\\text{lift at rest} \\Rightarrow a = 0",
          "explanation": "The lift is at rest and staying at rest, so the person has zero acceleration. This is the key fact that fixes the relationship between the two forces.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply Newton's second law vertically",
          "workingLatex": "R - W = ma",
          "explanation": "Taking up as positive, the resultant upward force is the reaction minus the weight, and by Newton's second law this equals mass times acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the zero acceleration",
          "workingLatex": "R - W = 70 \\times 0 = 0",
          "explanation": "Since the acceleration is zero, the right-hand side is zero. The two forces must therefore have no resultant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Rearrange for the normal reaction",
          "workingLatex": "R = W",
          "explanation": "Rearranging shows the normal reaction is exactly equal to the weight. At rest the floor pushes up with precisely the force needed to support the person.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the value of the reaction",
          "workingLatex": "R = 686\\,\\text{N}",
          "explanation": "Because R equals W, the normal reaction is also 686 N. Both forces share the same magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the equality",
          "workingLatex": "\\text{at rest, reaction exactly balances weight}",
          "explanation": "The equality R = W is the mathematical statement that the person is in equilibrium: the upward push balances the downward pull, so they stay put.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Note when this equality would fail",
          "workingLatex": "\\text{if the lift accelerated, } R \\neq W",
          "explanation": "This clean balance is special to the lift being at rest or moving at constant speed. If the lift accelerated up or down, the reaction would no longer equal the weight, which is why the 'at rest' condition matters.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion with both values",
          "workingLatex": "W = R = 686\\,\\text{N}",
          "explanation": "So while the lift is at rest the weight and the normal reaction are equal, each having the value 686 N.",
          "diagram": null
        }
      ],
      "finalAnswer": "The person has weight $W = 686\\,\\text{N}$ acting vertically downwards and a normal reaction $R$ from the floor acting vertically upwards; this normal reaction is the contact force, perpendicular to the floor. While the lift is at rest the acceleration is zero, so $R = W$, giving $R = 686\\,\\text{N}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "modelling-cycle",
      "application",
      "stopping-distance"
    ],
    "questionText": "A company wants to predict the stopping distance of one of its cars from a given speed. Describe how the modelling cycle would be applied to this problem, naming each stage of the cycle and giving a concrete example of what happens at that stage.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the real-world problem (Stage 1)",
          "workingLatex": "\\textbf{1. Real problem: } \\text{predict the car's stopping distance}",
          "explanation": "The modelling cycle always begins with a genuine question from the real world. Here it is the company's need to know how far the car travels before it stops from a given speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Begin setting up the model (Stage 2)",
          "workingLatex": "\\textbf{2. Set up a model: } \\text{make simplifying assumptions}",
          "explanation": "The second stage turns the messy real situation into something manageable by making assumptions. We deliberately ignore complications so the maths stays tractable.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Give concrete example assumptions",
          "workingLatex": "\\text{car = particle, level road, constant deceleration, ignore air resistance}",
          "explanation": "For example: treat the car as a particle, assume the road is level, take the braking deceleration to be constant, and ignore air resistance. Each assumption removes a source of difficulty.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Define the variables in the model",
          "workingLatex": "u = \\text{initial speed}, \\quad a = \\text{deceleration}, \\quad s = \\text{distance}",
          "explanation": "Still within setting up the model, we name the quantities we care about. Choosing clear symbols now makes the mathematics in the next stage easier to write down.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Formulate the mathematics (Stage 3)",
          "workingLatex": "\\textbf{3. Formulate: } v^2 = u^2 - 2as",
          "explanation": "The third stage translates the model into equations. With constant deceleration the relevant suvat equation links the speeds, the deceleration and the distance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the stopping condition",
          "workingLatex": "\\text{stops} \\Rightarrow v = 0 \\Rightarrow s = \\dfrac{u^2}{2a}",
          "explanation": "The car stopping means its final speed is zero. Setting v = 0 and rearranging gives a formula for the braking distance in terms of the starting speed and deceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Insert concrete numbers",
          "workingLatex": "u = 20\\,\\text{m/s}, \\quad a = 5\\,\\text{m/s}^2",
          "explanation": "To make the example concrete, suppose the car starts at 20 m/s and brakes at a steady 5 m/s^2. These are the values the company might measure for its car.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the mathematics (Stage 4)",
          "workingLatex": "\\textbf{4. Solve: } s = \\dfrac{20^2}{2 \\times 5} = \\dfrac{400}{10} = 40\\,\\text{m}",
          "explanation": "The fourth stage is the actual calculation. Substituting the numbers gives a predicted braking distance of 40 m. This is where the mathematics does its work.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the solution (Stage 5)",
          "workingLatex": "\\textbf{5. Interpret: } \\text{braking distance} \\approx 40\\,\\text{m}",
          "explanation": "The fifth stage translates the number back into the real problem: from 20 m/s the model says the car needs about 40 m of road to brake to a halt.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with reality (Stage 6)",
          "workingLatex": "\\textbf{6. Compare: } \\text{test against measured / Highway Code data}",
          "explanation": "The sixth stage checks the prediction against reality. The company would run braking tests, or compare with published Highway Code figures, to see whether 40 m is trustworthy.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note a discrepancy found in testing",
          "workingLatex": "\\text{real stopping distance} > 40\\,\\text{m}",
          "explanation": "In practice the measured stopping distance comes out larger than 40 m. A mismatch like this is not a failure; it is exactly the information the cycle is designed to reveal.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain the cause of the discrepancy",
          "workingLatex": "\\text{we ignored reaction time and road / tyre conditions}",
          "explanation": "The gap arises because the model left out the driver's reaction time before braking and assumed ideal grip. Identifying which assumption is responsible tells us how to improve the model.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Refine the model (Stage 7)",
          "workingLatex": "\\textbf{7. Refine: } \\text{add thinking distance} = u t",
          "explanation": "The seventh stage improves the model by relaxing a weak assumption. Here we add a thinking distance, the distance travelled during the driver's reaction time t before the brakes are applied.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Give the improved calculation",
          "workingLatex": "u t = 20 \\times 0.7 = 14\\,\\text{m} \\Rightarrow \\text{total} \\approx 40 + 14 = 54\\,\\text{m}",
          "explanation": "Using a reaction time of 0.7 s adds 14 m of thinking distance, so the refined stopping distance becomes about 54 m, which should sit much closer to the measured value.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Repeat the cycle",
          "workingLatex": "\\text{re-test the refined model, adjust again if needed}",
          "explanation": "The refined model is tested again, and if it still disagrees the company loops back and improves it further. The modelling cycle is meant to be repeated until the predictions are good enough.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the overall conclusion",
          "workingLatex": "\\text{problem} \\to \\text{model} \\to \\text{maths} \\to \\text{solve} \\to \\text{interpret} \\to \\text{compare} \\to \\text{refine}",
          "explanation": "In summary the company moves through the whole cycle: state the problem, set up a model, formulate and solve the mathematics, interpret and compare the result, then refine and repeat. Each pass makes the stopping-distance prediction more reliable.",
          "diagram": null
        }
      ],
      "finalAnswer": "Apply the modelling cycle: (1) state the real problem — predict the stopping distance; (2) set up a model with assumptions (car as a particle, level road, constant deceleration, ignore air resistance) and define $u, a, s$; (3) formulate the maths, giving $s = u^2/(2a)$; (4) solve it, e.g. $s = 20^2/(2\\times 5) = 40\\,\\text{m}$; (5) interpret — the braking distance is about $40\\,\\text{m}$; (6) compare with measured or Highway Code data; (7) refine (add thinking distance $ut = 20\\times 0.7 = 14\\,\\text{m}$, giving $\\approx 54\\,\\text{m}$) and repeat the cycle until the prediction is accurate enough."
    }
  },
  {
    "id": "al.y1.mech.modelling.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "choosing-model",
      "evaluation",
      "limitations",
      "braking"
    ],
    "questionText": "A car braking to a stop is modelled as a particle moving with constant deceleration on a smooth road. Evaluate three limitations of this model and, for each limitation, describe a refinement that would make the prediction more realistic.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the model to be evaluated",
          "workingLatex": "\\text{car braking} \\Rightarrow \\text{particle, constant deceleration, smooth road}",
          "explanation": "The scenario replaces a real car with a single point (a particle) that slows at a fixed rate on a road with no resistive forces other than the braking. Naming the model clearly is the first step, because every limitation we find is really a place where one of these assumptions breaks down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the assumptions the model makes",
          "workingLatex": "\\text{(i) particle} \\quad \\text{(ii) constant deceleration } a \\quad \\text{(iii) smooth road}",
          "explanation": "Writing the assumptions out separately gives us a checklist. A modelling evaluation works by taking each assumption in turn and asking how far it departs from reality, so listing them now organises the whole answer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the prediction the model gives",
          "workingLatex": "v^2 = u^2 - 2as \\;\\Rightarrow\\; s = \\frac{u^2}{2a}",
          "explanation": "With constant deceleration the stopping distance follows directly from the SUVAT relation with final speed zero. This clean formula is exactly what makes the model attractive, and it is the prediction whose realism we are testing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recognise the value of the simple model",
          "workingLatex": "\\text{simple} \\Rightarrow \\text{quick estimate of stopping distance}",
          "explanation": "Before criticising the model it is fair to note its strength: it needs only the initial speed and one deceleration value, yet gives a usable estimate. Refinements are only worth adding if the extra accuracy justifies the extra complexity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Limitation 1 — the constant deceleration",
          "workingLatex": "\\text{real braking: } a = a(t) \\text{ is not constant}",
          "explanation": "In practice the braking is not steady: the driver presses the pedal harder or softer, anti-lock brakes pulse the force on and off, and the grip changes as the wheels approach locking. Assuming a single fixed value of a smooths over all of this.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Refinement for limitation 1",
          "workingLatex": "\\text{model } a \\text{ as a function of time or speed}",
          "explanation": "A more realistic model lets the deceleration vary, for example rising to a peak then easing off, built from data of the actual braking profile. This captures the way real stopping distance differs from the constant-rate prediction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Limitation 2 — the smooth road ignores resistance",
          "workingLatex": "\\text{smooth} \\Rightarrow \\text{air resistance and rolling resistance ignored}",
          "explanation": "Calling the road smooth removes air resistance and rolling resistance from the picture. At higher speeds air resistance in particular is far from negligible, so the model leaves out forces that genuinely help to slow the car.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Refinement for limitation 2",
          "workingLatex": "\\text{add a resistive force } R = kv \\text{ or } R = kv^2",
          "explanation": "Including a resistance that grows with speed adds an extra decelerating force that is largest at the start of the stop. This makes the predicted deceleration bigger at high speed, matching how real cars scrub off the first part of their speed more quickly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Limitation 3 — the particle ignores size and conditions",
          "workingLatex": "\\text{particle} \\Rightarrow \\text{no size, no weight transfer, fixed grip}",
          "explanation": "Treating the car as a point ignores its length and the way weight shifts onto the front wheels during braking, and it assumes the same grip everywhere. A wet or icy road changes the available friction dramatically, which a single smooth particle cannot represent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Refinement for limitation 3",
          "workingLatex": "\\text{rigid body} + \\text{variable friction coefficient } \\mu",
          "explanation": "Modelling the car as an extended rigid body allows weight transfer to be included, and letting the friction coefficient depend on the road surface accounts for wet or icy conditions. This gives stopping distances that respond to the state of the road.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the trade-off of refining",
          "workingLatex": "\\text{more realism} \\Rightarrow \\text{more parameters, harder maths}",
          "explanation": "Every refinement adds quantities that must be measured and equations that are harder to solve, often needing numerical methods. Good modelling balances accuracy against this extra effort rather than always choosing the most detailed option.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State when the simple model is acceptable",
          "workingLatex": "\\text{low speed, dry level road} \\Rightarrow \\text{simple model adequate}",
          "explanation": "At modest speeds on a dry, level road the ignored effects are small, so the constant-deceleration smooth model gives a good estimate. Recognising when a model is good enough is as important as knowing how to improve it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise limitation 1 and its refinement",
          "workingLatex": "\\text{constant } a \\;\\to\\; a(t)",
          "explanation": "The first weakness was the fixed deceleration, resolved by letting a vary through the stop. This is usually the most important refinement because braking force genuinely changes moment to moment.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise limitation 2 and its refinement",
          "workingLatex": "\\text{smooth} \\;\\to\\; \\text{include } R(v)",
          "explanation": "The second weakness was ignoring resistance, resolved by adding a speed-dependent resistive force. This matters most at high speed where air resistance is large.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise limitation 3 and its refinement",
          "workingLatex": "\\text{particle} \\;\\to\\; \\text{rigid body, variable } \\mu",
          "explanation": "The third weakness was the point-particle with fixed grip, resolved by using an extended body and a friction coefficient that depends on conditions. This matters most on wet or icy roads.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the overall conclusion",
          "workingLatex": "\\text{model useful but limited by (i)--(iii); refine as needed}",
          "explanation": "The particle model with constant deceleration on a smooth road gives a fast, useful first estimate, but its three assumptions each limit accuracy. Refining the deceleration, adding resistance, and allowing variable friction each bring the prediction closer to real stopping behaviour.",
          "diagram": null
        }
      ],
      "finalAnswer": "Three limitations: (i) constant deceleration is unrealistic — let $a$ vary with time or speed; (ii) a smooth road ignores air and rolling resistance — add a resistive force $R=kv^2$; (iii) the particle model ignores size, weight transfer and changing grip — use a rigid body with a variable friction coefficient $\\mu$. Each refinement improves realism at the cost of greater complexity."
    }
  },
  {
    "id": "al.y1.mech.modelling.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "choosing-model",
      "skydiver",
      "phases",
      "evaluation"
    ],
    "questionText": "A skydiver jumps from a plane, falls freely for a time, then opens a parachute and descends to the ground. Discuss why a single constant-acceleration model is inadequate for the whole descent, describing how the forces and the motion differ in each phase.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model to be evaluated",
          "workingLatex": "\\text{whole descent modelled with constant } a = g = 9.8\\,\\text{m/s}^2",
          "explanation": "The proposal is to treat the entire fall, from leaving the plane to landing, as motion with one fixed acceleration equal to gravity. We test this by tracking how the real forces and the motion change during the jump.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the condition for constant acceleration",
          "workingLatex": "a = \\text{constant} \\iff \\mathbf{F}_{\\text{net}} = \\text{constant}",
          "explanation": "By Newton's second law, the acceleration is constant only when the resultant force is constant. So the model can only be valid if the total force on the skydiver never changes throughout the descent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Phase 1 — forces just after jumping",
          "workingLatex": "W = mg \\text{ down}, \\quad \\text{air resistance small}",
          "explanation": "Immediately after leaving the plane the skydiver moves slowly, so air resistance is tiny and the weight dominates. The resultant force is almost the full weight, giving an acceleration close to g.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Phase 1 — the motion",
          "workingLatex": "a \\approx g \\Rightarrow \\text{speed increases rapidly}",
          "explanation": "With nearly the full weight unbalanced the skydiver accelerates downwards at close to 9.8 m/s squared, so the speed climbs quickly. At this instant the constant-acceleration model looks reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Air resistance grows with speed",
          "workingLatex": "R = R(v), \\quad R \\text{ increases as } v \\text{ increases}",
          "explanation": "Air resistance is not fixed: the faster you fall, the larger the drag force becomes. As the speed builds, this upward force grows and starts to cancel part of the weight.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "The falling acceleration decreases",
          "workingLatex": "a = g - \\frac{R(v)}{m} \\Rightarrow a \\text{ decreases}",
          "explanation": "The resultant is now weight minus a growing drag, so the downward acceleration steadily falls below g. Already the acceleration is changing, which the single constant value cannot capture.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Terminal velocity reached in free fall",
          "workingLatex": "R = mg \\Rightarrow \\mathbf{F}_{\\text{net}} = 0, \\quad a = 0",
          "explanation": "When drag grows until it balances the weight, the resultant force is zero. At this point the acceleration is zero, not g, which directly contradicts the constant-acceleration assumption.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Motion at the first terminal velocity",
          "workingLatex": "a = 0 \\Rightarrow v = v_{T1} \\text{ (constant)}",
          "explanation": "With no resultant force the skydiver falls at a steady terminal speed, typically around 50 m/s. The motion is now constant velocity, a completely different behaviour from steady acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Phase 2 — the parachute opens",
          "workingLatex": "R \\text{ increases sharply (large canopy area)}",
          "explanation": "Opening the parachute suddenly presents a huge area to the air, so the drag force increases enormously. The force picture changes abruptly, which no single constant force can describe.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "The net force now points upward",
          "workingLatex": "R > mg \\Rightarrow \\mathbf{F}_{\\text{net}} \\text{ upward}",
          "explanation": "Just after the canopy opens the drag exceeds the weight, so the resultant force acts upwards. The direction of the resultant has reversed compared with the free-fall phase.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Motion just after opening",
          "workingLatex": "a \\text{ upward} \\Rightarrow \\text{skydiver decelerates}",
          "explanation": "An upward resultant on a downward-moving skydiver produces a deceleration, so the speed drops quickly. This rapid slowing is felt as a strong jolt and is the opposite of accelerating under gravity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Speed falls toward a new balance",
          "workingLatex": "v \\downarrow \\Rightarrow R \\downarrow \\text{ until } R = mg",
          "explanation": "As the skydiver slows, the drag decreases again until it once more balances the weight. The system settles toward a new equilibrium at a much lower speed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "The second terminal velocity",
          "workingLatex": "R = mg \\Rightarrow a = 0, \\quad v = v_{T2} \\ll v_{T1}",
          "explanation": "A second terminal velocity is reached, far slower than the first because the canopy generates the same drag at a much lower speed. Again the acceleration here is zero, not g.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Motion down to the ground",
          "workingLatex": "v = v_{T2} \\text{ constant until landing}",
          "explanation": "The skydiver descends at this safe, steady speed until landing. This final constant-velocity phase is what makes the parachute useful, and it is another stage with zero acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Collect how the acceleration varies",
          "workingLatex": "a: \\; g \\to 0 \\to \\text{(negative)} \\to 0",
          "explanation": "Across the descent the acceleration runs through g at the start, zero at the first terminal velocity, a negative (upward) value when the parachute opens, and zero again at the second terminal velocity. It is nowhere near constant.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Conclude the single model is inadequate",
          "workingLatex": "a \\neq \\text{constant} \\Rightarrow \\text{single constant-acceleration model fails}",
          "explanation": "Because the resultant force and hence the acceleration change repeatedly, a model using one fixed acceleration cannot describe the whole descent. It would badly overestimate the landing speed by ignoring air resistance entirely.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Suggest a better modelling approach",
          "workingLatex": "\\text{piecewise model with speed-dependent } R(v)",
          "explanation": "A realistic model splits the descent into phases and includes a resistance force that depends on speed, solving each phase separately. This captures the free fall, both terminal velocities, and the sharp deceleration when the parachute opens.",
          "diagram": null
        }
      ],
      "finalAnswer": "A single constant-acceleration model fails because the resultant force is not constant: in free fall $a$ starts near $g$ then falls to zero at terminal velocity; when the parachute opens the drag exceeds the weight so the resultant acts upward and the skydiver decelerates to a new, much lower terminal velocity. The acceleration therefore varies ($g \\to 0 \\to$ negative $\\to 0$), so a piecewise model with a speed-dependent resistance $R(v)$ is needed."
    }
  },
  {
    "id": "al.y1.mech.modelling.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": [
      "choosing-model",
      "projectile",
      "air-resistance",
      "refinement"
    ],
    "questionText": "A model of a thrown ball that ignores air resistance predicts a range of $45\\,\\text{m}$, but the ball actually travels $39\\,\\text{m}$. Explain, in terms of the assumptions made, why the real range is shorter, and describe how you would refine the model and test the improvement.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the prediction and the observation",
          "workingLatex": "\\text{model: } 45\\,\\text{m}, \\quad \\text{actual: } 39\\,\\text{m}",
          "explanation": "The idealised projectile model predicts a range of 45 m, but the ball really travels 39 m, a shortfall of 6 m. Our task is to explain this gap through the assumptions the model makes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the assumptions of the projectile model",
          "workingLatex": "\\text{(i) no air resistance} \\quad \\text{(ii) particle} \\quad \\text{(iii) constant } g, \\text{ level ground}",
          "explanation": "The standard projectile model rests on a few assumptions. Each one is a possible source of error, so listing them lets us pinpoint which are responsible for the ball falling short.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the key assumption",
          "workingLatex": "\\text{no air resistance} \\Rightarrow \\text{only gravity acts}",
          "explanation": "The most significant assumption is that air resistance is ignored, leaving gravity as the only force. This is exactly the assumption a real ball violates, so it is the natural place to look for the missing 6 m.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Describe the effect of air resistance",
          "workingLatex": "R \\text{ opposes motion}, \\quad R = R(v)",
          "explanation": "Air resistance always acts opposite to the direction of travel and grows with speed. Because the ball is moving throughout its flight, this backward force is present the whole time and continually removes energy.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Effect on the horizontal motion",
          "workingLatex": "\\text{ideal: } v_x \\text{ constant}; \\quad \\text{real: } v_x \\text{ decreases}",
          "explanation": "In the ideal model nothing acts horizontally, so the horizontal speed stays constant. In reality the horizontal component of air resistance slows the ball down as it flies, so it covers less ground each second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consequence for the range",
          "workingLatex": "v_x \\downarrow \\Rightarrow \\text{horizontal distance} \\downarrow",
          "explanation": "Since range is horizontal speed multiplied by time in the air, a horizontal speed that keeps dropping produces a shorter range. This is the main reason the real distance of 39 m is less than the predicted 45 m.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Effect on the vertical motion",
          "workingLatex": "\\text{real: reduced maximum height and time of flight}",
          "explanation": "Air resistance also acts on the vertical motion, lowering the maximum height reached and changing the time in the air. This further reduces how far the ball can travel before landing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Consider the particle assumption",
          "workingLatex": "\\text{particle} \\Rightarrow \\text{no spin, no shape}",
          "explanation": "Modelling the ball as a point ignores its size, surface and any spin. A spinning or rough ball experiences sideways and lift forces that a point cannot, adding further differences from the ideal path.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Consider the remaining assumptions",
          "workingLatex": "g \\text{ constant}, \\quad \\text{launch height} = \\text{landing height}",
          "explanation": "Taking g as constant and the ground as level is very accurate over a short throw, so these assumptions contribute almost nothing to the error. This helps confirm that air resistance is the dominant cause.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Quantify the discrepancy",
          "workingLatex": "45 - 39 = 6\\,\\text{m}, \\quad \\frac{6}{45} \\approx 13\\%",
          "explanation": "The ball falls short by 6 m, about 13% of the predicted range. A discrepancy of this size is consistent with drag being significant rather than negligible for this throw.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude the cause",
          "workingLatex": "\\text{shortfall} \\Leftarrow \\text{ignored air resistance}",
          "explanation": "Putting the pieces together, ignoring air resistance is what makes the model overshoot. Because real drag continually slows the ball, especially horizontally, the actual range must be shorter than the frictionless prediction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Propose a refinement",
          "workingLatex": "\\text{add } R = kv \\text{ or } R = kv^2 \\text{ opposing the velocity}",
          "explanation": "The natural refinement is to include a resistance force directed against the ball's velocity and increasing with speed. This directly represents the physical effect we identified as the cause of the shortfall.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Acknowledge the cost of the refinement",
          "workingLatex": "\\text{equations no longer solvable by simple SUVAT}",
          "explanation": "Adding a speed-dependent force couples the horizontal and vertical motion and makes the equations too hard for the basic constant-acceleration formulas. A numerical, step-by-step method is usually needed to find the new range.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Design a test — collect data",
          "workingLatex": "\\text{measure the real range at several speeds and angles}",
          "explanation": "To test the improved model we throw the ball under measured conditions and record the actual ranges. Using several launch speeds and angles gives a fair spread of cases to compare against.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compare predictions with measurements",
          "workingLatex": "\\text{compare } |\\text{predicted} - \\text{measured}| \\text{ for both models}",
          "explanation": "We then compute the range from both the original and the refined model and compare each with the measurements. The refinement is worthwhile only if it consistently reduces the size of the error.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the conclusion",
          "workingLatex": "\\text{refined model closer} \\Rightarrow \\text{air resistance confirmed}",
          "explanation": "If the model with air resistance predicts values much nearer to the measured 39 m across the tests, we can be confident the shortfall was caused by drag and that the refinement genuinely improves the predictions.",
          "diagram": null
        }
      ],
      "finalAnswer": "The frictionless model overshoots because it ignores air resistance. Real drag acts against the ball's motion and grows with speed, so the horizontal speed falls throughout the flight and the ball covers less ground, giving 39 m instead of 45 m (about 13% short). Refine the model by adding a resistive force $R=kv^2$ opposing the velocity (solved numerically), then test it by measuring real ranges at several speeds and angles and checking that the refined predictions have a smaller error."
    }
  },
  {
    "id": "al.y1.mech.modelling.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "choosing-model",
      "friction",
      "smooth-rough",
      "evaluation"
    ],
    "questionText": "A box is released on a ramp inclined at angle $\\theta$ to the horizontal. A first model assumes the ramp is smooth and predicts that the box always slides, yet in reality the box sometimes stays still. Evaluate why the smooth model fails and explain how introducing a rough surface with friction resolves the discrepancy.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the first model",
          "workingLatex": "\\text{ramp assumed smooth (frictionless)}",
          "explanation": "The first model treats the ramp surface as smooth, meaning no friction acts between the box and the slope. We follow this assumption through to see what motion it predicts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the forces in the smooth model",
          "workingLatex": "W = mg \\text{ down}, \\quad N \\perp \\text{ slope}",
          "explanation": "On a smooth ramp only two forces act: the weight pulling straight down and the normal reaction pushing perpendicular to the surface. With no friction, nothing acts along the slope except part of the weight.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Resolve the weight along the slope",
          "workingLatex": "\\text{component down slope} = mg\\sin\\theta",
          "explanation": "Splitting the weight into components, the part directed down the slope is mg sin theta, where theta is the angle of inclination. This is the force that would drive the box downhill.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the resultant along the slope",
          "workingLatex": "F_{\\text{along}} = mg\\sin\\theta - 0 = mg\\sin\\theta",
          "explanation": "Because the smooth model provides no opposing force along the surface, the resultant along the slope is simply mg sin theta. For any positive angle this is greater than zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the smooth model's prediction",
          "workingLatex": "mg\\sin\\theta > 0 \\Rightarrow \\text{box always slides}",
          "explanation": "A non-zero resultant down the slope means the box must accelerate downhill for every angle above the horizontal. So the smooth model predicts the box can never stay at rest on the ramp.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the observation",
          "workingLatex": "\\text{observed: box sometimes remains stationary}",
          "explanation": "In reality the box is sometimes seen to rest on the ramp without sliding. This directly contradicts the smooth model, so the model must be missing something physical.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Diagnose the missing force",
          "workingLatex": "\\text{equilibrium impossible with only } W, N",
          "explanation": "For the box to stay still the forces along the slope must balance, but weight and normal reaction alone cannot do this. There must be a further force acting up the slope that the smooth model left out.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Introduce a rough surface with friction",
          "workingLatex": "\\text{rough ramp} \\Rightarrow \\text{friction } F \\text{ acts}",
          "explanation": "Modelling the surface as rough adds a friction force between the box and the ramp. Friction acts along the surface and opposes the tendency to move, so here it points up the slope.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the equilibrium condition",
          "workingLatex": "F = mg\\sin\\theta \\text{ for the box to stay still}",
          "explanation": "If the box is stationary, friction must exactly balance the component of weight down the slope. This is possible because friction adjusts itself, up to a limit, to whatever is needed to prevent motion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the maximum available friction",
          "workingLatex": "F_{\\max} = \\mu N = \\mu mg\\cos\\theta",
          "explanation": "Friction cannot grow without bound; its largest value is mu times the normal reaction, and here the normal reaction is mg cos theta. This ceiling is what decides whether equilibrium is actually achievable.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Condition for the box to stay still",
          "workingLatex": "mg\\sin\\theta \\le \\mu mg\\cos\\theta \\Rightarrow \\tan\\theta \\le \\mu",
          "explanation": "The box remains at rest provided the required friction does not exceed the maximum available, which simplifies to tan theta at most mu. Dividing through by mg cos theta removes the mass, so it is the angle and the roughness that matter.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Condition for the box to slide",
          "workingLatex": "\\tan\\theta > \\mu \\Rightarrow \\text{box slides}",
          "explanation": "If the slope is steep enough that tan theta exceeds mu, friction cannot supply the force needed and the box slides. The same rough model therefore predicts sliding for steep ramps and rest for shallow ones.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Show the rough model matches reality",
          "workingLatex": "\\text{rest if } \\tan\\theta \\le \\mu, \\quad \\text{slide if } \\tan\\theta > \\mu",
          "explanation": "The rough model reproduces both observed outcomes: whether the box moves now depends sensibly on the angle and the surface roughness. This is exactly the behaviour the smooth model could not produce.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Explain why the smooth model failed",
          "workingLatex": "\\mu = 0 \\Rightarrow \\text{rest only if } \\theta = 0",
          "explanation": "The smooth model is just the special case mu equals zero, for which the box can only rest on flat ground. Setting friction to zero removed the very force responsible for holding the box in place, so the model could never predict rest on a slope.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion",
          "workingLatex": "\\text{friction essential; smooth valid only when } \\mu \\text{ negligible}",
          "explanation": "Introducing a rough surface with friction resolves the discrepancy by allowing equilibrium up to a critical angle. The smooth model is only appropriate when friction is genuinely negligible, such as a very slippery surface.",
          "diagram": null
        }
      ],
      "finalAnswer": "The smooth model gives a resultant $mg\\sin\\theta>0$ down the slope for every angle, so it predicts the box always slides and can never explain the box resting. Adding friction on a rough surface introduces a force up the slope of at most $F_{\\max}=\\mu mg\\cos\\theta$; the box stays still when $\\tan\\theta\\le\\mu$ and slides when $\\tan\\theta>\\mu$. This reproduces both observed outcomes, showing friction is essential and the smooth model ($\\mu=0$) is valid only when friction is negligible."
    }
  },
  {
    "id": "al.y1.mech.modelling.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": [
      "choosing-model",
      "uniform-rod",
      "rigid",
      "evaluation"
    ],
    "questionText": "An engineer models a straight footbridge as a uniform, rigid rod resting on two supports. Discuss the strengths and limitations of the 'uniform', 'rigid' and 'rod' assumptions for this real bridge, and suggest one refinement.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the model",
          "workingLatex": "\\text{footbridge} \\to \\text{uniform, rigid rod on two supports}",
          "explanation": "The engineer replaces the real bridge with a uniform rigid rod resting on two supports. Each of the three words uniform, rigid and rod is a separate assumption we can examine for strengths and weaknesses.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the purpose of the model",
          "workingLatex": "\\text{take moments} \\Rightarrow \\text{support reactions}",
          "explanation": "The point of this model is usually to find the reaction forces at the two supports by taking moments. Knowing whether it is fit for that purpose guides how strict we need to be about each assumption.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Meaning of the 'rod' assumption",
          "workingLatex": "\\text{rod} \\Rightarrow \\text{length matters, width and depth ignored}",
          "explanation": "Calling the bridge a rod means we keep its length but treat its width and thickness as negligible, reducing it to a one-dimensional object. Forces and distances are then measured only along its length.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Strength of the 'rod' assumption",
          "workingLatex": "\\text{1-D} \\Rightarrow \\text{moments are simple}",
          "explanation": "Reducing the bridge to a line makes taking moments straightforward, since every force acts at a clear distance along a single axis. For finding support reactions this simplification is usually perfectly adequate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Limitation of the 'rod' assumption",
          "workingLatex": "\\text{real deck has width and depth}",
          "explanation": "A real footbridge has a broad deck and structural depth, and loads can sit off to one side. The rod model cannot represent sideways position or twisting, so it misses effects that a wide deck genuinely experiences.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Meaning of the 'uniform' assumption",
          "workingLatex": "\\text{uniform} \\Rightarrow \\text{weight evenly spread, centre of mass at midpoint}",
          "explanation": "Uniform means the mass is spread evenly along the bridge, so its weight can be taken to act at the exact midpoint. This single central weight makes the moment calculation very clean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Strength of the 'uniform' assumption",
          "workingLatex": "W \\text{ acts at centre} \\Rightarrow \\text{one weight force}",
          "explanation": "With a uniform bridge the whole weight is a single force at the middle, so we avoid dealing with the weight of every separate part. For a symmetric, evenly built walkway this is a reasonable approximation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Limitation of the 'uniform' assumption",
          "workingLatex": "\\text{real bridge: extra mass at railings, towers; deck varies}",
          "explanation": "Real bridges are rarely uniform: railings, lamp posts, thicker sections near the supports and a heavy deck shift the true centre of mass. Placing the weight at the midpoint can then give the wrong reactions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Meaning of the 'rigid' assumption",
          "workingLatex": "\\text{rigid} \\Rightarrow \\text{does not bend or deform}",
          "explanation": "Rigid means the bridge keeps its shape exactly, never bending or sagging under load. The distances used in the moment equation then stay fixed no matter how heavy the load.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Strength of the 'rigid' assumption",
          "workingLatex": "\\text{fixed geometry} \\Rightarrow \\text{moment equation stays valid}",
          "explanation": "Assuming rigidity keeps the geometry constant, so the lever arms in the moment calculation do not change as people cross. This makes the reaction forces easy to compute and is fine for small loads.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Limitation of the 'rigid' assumption",
          "workingLatex": "\\text{real bridge flexes, sags and can vibrate}",
          "explanation": "In reality a footbridge bends under load, sags in the middle and can sway or vibrate as people walk. A rigid model ignores this flexing, so it cannot predict deflection, internal stress or resonance.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Explain why the ignored flexing matters",
          "workingLatex": "\\text{ignoring flex} \\Rightarrow \\text{miss stress and resonance}",
          "explanation": "Deflection and vibration are central to whether a bridge is safe and comfortable to use, and footbridges have failed through resonance. Leaving these out means the rigid model is unsuitable for a full safety analysis.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Assess overall fitness for purpose",
          "workingLatex": "\\text{good for reactions, weak for stress and vibration}",
          "explanation": "Taken together, the uniform rigid rod model gives a quick, reliable estimate of the support reactions but says nothing about bending or vibration. It is a sound starting point rather than a complete description.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Suggest a refinement",
          "workingLatex": "\\text{model as an elastic beam that can bend}",
          "explanation": "A natural refinement is to treat the bridge as an elastic beam that deflects under load, which allows bending, stress and natural frequencies to be found. Adding non-uniform mass and moving pedestrian loads would improve it further.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the conclusion",
          "workingLatex": "\\text{assumptions reasonable for reactions; refine for real behaviour}",
          "explanation": "The uniform, rigid and rod assumptions are reasonable for a first estimate of the support reactions, but each hides real features of the bridge. Modelling it as a bending beam captures the deflection and vibration that the rigid rod cannot.",
          "diagram": null
        }
      ],
      "finalAnswer": "The 'rod' assumption reduces the bridge to one dimension, making moments simple but ignoring the deck's width and depth; the 'uniform' assumption puts the weight at the midpoint, which is clean but wrong if railings, towers or a heavy deck shift the centre of mass; the 'rigid' assumption fixes the geometry so the reactions are easy to find, but ignores real bending, sagging and vibration (including resonance). The model is a sound first estimate of the support reactions; one refinement is to treat the bridge as an elastic beam that can bend (with non-uniform mass and moving loads)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "units",
    "tags": [
      "unit-consistency",
      "drag",
      "constant-units"
    ],
    "questionText": "The resistance to a moving car is modelled by $F = kv^2$, where $F$ is a force measured in newtons and $v$ is a speed measured in $\\text{m/s}$. Determine the SI base units of the constant $k$, showing your reasoning.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the model and identify the target",
          "workingLatex": "F = kv^2 \\qquad [k] = \\,?",
          "explanation": "The whole task is to find the units of the constant $k$. Everything else in the formula has known units, so $k$ must carry exactly the units needed to make both sides of the equation agree.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the units of the quantities we already know",
          "workingLatex": "[F] = \\text{N}, \\qquad [v] = \\text{m}\\,\\text{s}^{-1}",
          "explanation": "The force is measured in newtons and the speed in metres per second. Writing metres per second as $\\text{m}\\,\\text{s}^{-1}$ keeps every unit as a power, which makes the algebra of units much cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express the newton in SI base units",
          "workingLatex": "1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-2}",
          "explanation": "A newton is not a base unit; it is defined through $F = ma$ as the force that gives $1\\,\\text{kg}$ an acceleration of $1\\,\\text{m}\\,\\text{s}^{-2}$. Rewriting it in base units lets us compare it directly with the units of $v$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the principle of unit consistency",
          "workingLatex": "[\\text{left side}] = [\\text{right side}]",
          "explanation": "For any physical equation to make sense the units on the left must match the units on the right. This single requirement is enough to pin down the units of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the unit equation for the model",
          "workingLatex": "[F] = [k]\\,[v]^2",
          "explanation": "Replacing each symbol by its units turns the physical formula into an equation purely about units. The numerical value of $k$ is irrelevant here; only its units matter.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Make the units of k the subject",
          "workingLatex": "[k] = \\dfrac{[F]}{[v]^2}",
          "explanation": "Dividing both sides by $[v]^2$ isolates the units of $k$. This mirrors rearranging the original formula as $k = F/v^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the units of v squared",
          "workingLatex": "[v]^2 = (\\text{m}\\,\\text{s}^{-1})^2 = \\text{m}^2\\cdot\\text{s}^{-2}",
          "explanation": "Squaring a speed squares its units, so each factor's exponent doubles: metres become $\\text{m}^2$ and $\\text{s}^{-1}$ becomes $\\text{s}^{-2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the units of F and v squared",
          "workingLatex": "[k] = \\dfrac{\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-2}}{\\text{m}^2\\cdot\\text{s}^{-2}}",
          "explanation": "Putting the base units of the newton on top and the units of $v^2$ on the bottom gives a single fraction of units that we can now simplify.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Group the like base units together",
          "workingLatex": "= \\text{kg}\\times\\dfrac{\\text{m}}{\\text{m}^2}\\times\\dfrac{\\text{s}^{-2}}{\\text{s}^{-2}}",
          "explanation": "Separating the fraction into a kilogram part, a metre part and a second part lets us deal with each base unit on its own, exactly like collecting like terms in ordinary algebra.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the powers of metres",
          "workingLatex": "\\dfrac{\\text{m}}{\\text{m}^2} = \\text{m}^{1-2} = \\text{m}^{-1}",
          "explanation": "Dividing powers of the same unit subtracts the indices, so one metre over two metres leaves $\\text{m}^{-1}$, meaning metres in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the powers of seconds",
          "workingLatex": "\\dfrac{\\text{s}^{-2}}{\\text{s}^{-2}} = \\text{s}^{0} = 1",
          "explanation": "The seconds cancel completely because both top and bottom carry $\\text{s}^{-2}$. Any unit raised to the power zero is just the number $1$, so seconds drop out of the answer.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the surviving factors",
          "workingLatex": "[k] = \\text{kg}\\cdot\\text{m}^{-1}",
          "explanation": "Only the kilogram and the $\\text{m}^{-1}$ survive, since the seconds cancelled. This is the units of $k$ written in pure base-unit form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Write the result in a more familiar form",
          "workingLatex": "\\text{kg}\\cdot\\text{m}^{-1} = \\text{kg/m}",
          "explanation": "Because $\\text{m}^{-1}$ means metres on the bottom, the units can equally be read as kilograms per metre, which is a natural way to state them.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State and interpret the result",
          "workingLatex": "\\boxed{[k] = \\text{kg}\\,\\text{m}^{-1} = \\text{kg/m}}",
          "explanation": "So $k$ has units of kilograms per metre. This makes sense physically: $k$ effectively measures how much resisting force is produced per unit of speed-squared, and the units are exactly those that convert an $\\text{m}^2\\,\\text{s}^{-2}$ into a newton.",
          "diagram": null
        }
      ],
      "finalAnswer": "The constant $k$ has SI base units $\\text{kg}\\,\\text{m}^{-1}$ (equivalently $\\text{kg/m}$)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "units",
    "tags": [
      "unit-consistency",
      "drag",
      "constant-units"
    ],
    "questionText": "A proposed resistance formula is $F = av + bv^2$, where $F$ is measured in newtons and $v$ in $\\text{m/s}$. By requiring unit consistency, find the SI base units of the constants $a$ and $b$, and explain why $a$ and $b$ cannot have the same units.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model and state the targets",
          "workingLatex": "F = av + bv^2 \\qquad [a] = \\,? \\quad [b] = \\,?",
          "explanation": "We must find the units of both $a$ and $b$. Each constant sits in a different term, so we will treat the two terms separately once we know the rule that governs them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known units",
          "workingLatex": "[F] = \\text{N}, \\qquad [v] = \\text{m}\\,\\text{s}^{-1}",
          "explanation": "The force is in newtons and the speed in metres per second. These are the only quantities whose units we already know, so everything must be built from them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express the newton in base units",
          "workingLatex": "1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-2}",
          "explanation": "Writing the newton through $F = ma$ in base units of kilograms, metres and seconds lets us compare it cleanly with powers of the speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the key rule about adding terms",
          "workingLatex": "[av] = [bv^2] = [F] = \\text{N}",
          "explanation": "You can only add quantities that share the same units, and a sum has the units of its parts. Since $av + bv^2$ must be a force, each separate term must itself have the units of a newton.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the unit equation for the first term",
          "workingLatex": "[a]\\,[v] = \\text{N} \\;\\Rightarrow\\; [a] = \\dfrac{[F]}{[v]}",
          "explanation": "Because $av$ must be a newton, dividing by the units of $v$ isolates the units of $a$. This is the same as rearranging $a = F/v$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the units into a",
          "workingLatex": "[a] = \\dfrac{\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-2}}{\\text{m}\\cdot\\text{s}^{-1}}",
          "explanation": "Placing the base units of the newton over the units of the speed gives a fraction of units ready to be simplified one base unit at a time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the metres and seconds for a",
          "workingLatex": "= \\text{kg}\\cdot\\text{m}^{1-1}\\cdot\\text{s}^{-2-(-1)} = \\text{kg}\\cdot\\text{s}^{-1}",
          "explanation": "The single metre on top cancels the metre below, leaving $\\text{m}^0 = 1$. For seconds, $-2 - (-1) = -1$, so one power of seconds remains in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the units of a",
          "workingLatex": "[a] = \\text{kg}\\,\\text{s}^{-1} = \\text{kg/s}",
          "explanation": "So $a$ has units of kilograms per second. Physically this term models a resistance that grows in direct proportion to the speed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the unit equation for the second term",
          "workingLatex": "[b]\\,[v]^2 = \\text{N} \\;\\Rightarrow\\; [b] = \\dfrac{[F]}{[v]^2}",
          "explanation": "The same reasoning applies to $bv^2$: it must be a newton, so dividing by the units of $v^2$ isolates the units of $b$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the units of v squared",
          "workingLatex": "[v]^2 = (\\text{m}\\,\\text{s}^{-1})^2 = \\text{m}^2\\cdot\\text{s}^{-2}",
          "explanation": "Squaring the speed doubles each exponent, giving $\\text{m}^2\\cdot\\text{s}^{-2}$, which is what we divide by to find $b$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the units into b",
          "workingLatex": "[b] = \\dfrac{\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-2}}{\\text{m}^2\\cdot\\text{s}^{-2}}",
          "explanation": "Placing the newton's base units over $\\text{m}^2\\cdot\\text{s}^{-2}$ sets up a fraction we can simplify base unit by base unit.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the metres and seconds for b",
          "workingLatex": "= \\text{kg}\\cdot\\text{m}^{1-2}\\cdot\\text{s}^{-2-(-2)} = \\text{kg}\\cdot\\text{m}^{-1}",
          "explanation": "The seconds cancel entirely, while metres give $\\text{m}^{1-2} = \\text{m}^{-1}$. So $b$ has units of kilograms per metre.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the units of b",
          "workingLatex": "[b] = \\text{kg}\\,\\text{m}^{-1} = \\text{kg/m}",
          "explanation": "So $b$ is measured in kilograms per metre, matching the constant found for a pure $v^2$ resistance law.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare the units of a and b",
          "workingLatex": "\\dfrac{[a]}{[b]} = \\dfrac{\\text{kg}\\,\\text{s}^{-1}}{\\text{kg}\\,\\text{m}^{-1}} = \\text{m}\\,\\text{s}^{-1} = [v]",
          "explanation": "Dividing the two sets of units leaves exactly the units of a speed. This is the heart of the reason they must differ.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Explain why a and b cannot share units",
          "workingLatex": "[a] = \\text{kg}\\,\\text{s}^{-1} \\neq \\text{kg}\\,\\text{m}^{-1} = [b]",
          "explanation": "The two terms multiply different powers of the speed, $v$ and $v^2$, and those powers have different units. To turn each into the same newton, the constants must supply units that differ by one factor of speed. Hence $a$ and $b$ are forced to be unequal in their units.",
          "diagram": null
        }
      ],
      "finalAnswer": "$[a] = \\text{kg}\\,\\text{s}^{-1}$ (kg/s) and $[b] = \\text{kg}\\,\\text{m}^{-1}$ (kg/m); they differ because $v$ and $v^2$ carry different units, so $[a]/[b] = \\text{m}\\,\\text{s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "show",
    "tags": [
      "unit-consistency",
      "energy",
      "error-check"
    ],
    "questionText": "A student proposes that kinetic energy is given by $E = \\tfrac{1}{2}mv$, where $m$ is a mass in $\\text{kg}$ and $v$ a speed in $\\text{m/s}$. The units of energy are $\\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}$. By carrying out a full unit check, show that the formula is wrong, and determine the power of $v$ needed to make it consistent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the proposed formula and the target units",
          "workingLatex": "E = \\tfrac{1}{2}mv, \\qquad [E] = \\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}",
          "explanation": "We are told what energy should measure in base units. The plan is to work out the units the student's formula actually produces and compare the two.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that the numerical factor has no units",
          "workingLatex": "\\left[\\tfrac{1}{2}\\right] = 1",
          "explanation": "The $\\tfrac{1}{2}$ is a pure number, so it carries no units and cannot affect a unit check. Only the symbols $m$ and $v$ contribute units.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the units of the variables",
          "workingLatex": "[m] = \\text{kg}, \\qquad [v] = \\text{m}\\,\\text{s}^{-1}",
          "explanation": "Mass is measured in kilograms and speed in metres per second. These are the raw ingredients whose units combine on the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State what a valid formula requires",
          "workingLatex": "[\\text{RHS}] \\overset{?}{=} [E]",
          "explanation": "For the formula to be acceptable, the units produced by the right-hand side must exactly equal the units of energy. If they differ, the formula cannot be correct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the units of the right-hand side",
          "workingLatex": "\\left[\\tfrac{1}{2}mv\\right] = [m]\\,[v] = \\text{kg}\\times\\text{m}\\,\\text{s}^{-1}",
          "explanation": "Multiplying the units of the mass by the units of the speed gives the units the student's expression actually has.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the right-hand side units",
          "workingLatex": "= \\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-1}",
          "explanation": "Combining the factors, the formula delivers kilograms times metres per second. Notice this is in fact the units of momentum, not energy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with the required energy units",
          "workingLatex": "\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-1} \\;\\text{vs}\\; \\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}",
          "explanation": "Setting the two side by side lets us check each base unit in turn. The kilograms already agree, so attention turns to the metres and the seconds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Point out the mismatch in metres",
          "workingLatex": "\\text{m}^{1} \\neq \\text{m}^{2}",
          "explanation": "Energy needs metres to the power two, but the formula only supplies metres to the power one. This is a genuine disagreement.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Point out the mismatch in seconds",
          "workingLatex": "\\text{s}^{-1} \\neq \\text{s}^{-2}",
          "explanation": "Energy needs seconds to the power minus two, but the formula gives only minus one. The powers of seconds also fail to match.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the formula is wrong",
          "workingLatex": "\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-1} \\neq \\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}",
          "explanation": "Because the metres and the seconds do not match, the right-hand side does not have the units of energy. The proposed formula $E = \\tfrac{1}{2}mv$ is therefore dimensionally impossible and must be wrong.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the corrected form with an unknown power",
          "workingLatex": "E = \\tfrac{1}{2}m v^{\\,n}",
          "explanation": "To repair the formula we let the speed appear to some unknown power $n$ and use unit consistency to decide what $n$ has to be.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the units of the corrected right-hand side",
          "workingLatex": "[m]\\,[v]^n = \\text{kg}\\cdot(\\text{m}\\,\\text{s}^{-1})^n = \\text{kg}\\cdot\\text{m}^{n}\\cdot\\text{s}^{-n}",
          "explanation": "Raising the speed to the power $n$ raises each of its base units to the power $n$, so metres become $\\text{m}^n$ and $\\text{s}^{-1}$ becomes $\\text{s}^{-n}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Match the powers of metres",
          "workingLatex": "\\text{m}^{n} = \\text{m}^{2} \\;\\Rightarrow\\; n = 2",
          "explanation": "For the metres to agree with the energy units, the exponent $n$ must equal $2$. This is our candidate value.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the powers of seconds",
          "workingLatex": "\\text{s}^{-n} = \\text{s}^{-2} \\;\\Rightarrow\\; n = 2 \\;\\checkmark",
          "explanation": "The seconds independently require $n = 2$ as well. Both base units give the same answer, so the value is consistent rather than a coincidence.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the corrected formula",
          "workingLatex": "E = \\tfrac{1}{2}mv^{2} \\qquad [E] = \\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}\\;\\checkmark",
          "explanation": "With $n = 2$ the right-hand side has units $\\text{kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2}$, exactly the units of energy. This confirms the familiar kinetic energy formula $E = \\tfrac{1}{2}mv^2$ and shows the student left out the square.",
          "diagram": null
        }
      ],
      "finalAnswer": "The formula $E=\\tfrac{1}{2}mv$ gives units $\\text{kg}\\,\\text{m}\\,\\text{s}^{-1}$ (momentum), not $\\text{kg}\\,\\text{m}^2\\,\\text{s}^{-2}$, so it is wrong; consistency requires the power $n=2$, giving $E = \\tfrac{1}{2}mv^{2}$."
    }
  },
  {
    "id": "al.y1.mech.modelling.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "units",
    "tags": [
      "unit-consistency",
      "dimensional-analysis",
      "pendulum"
    ],
    "questionText": "The period $T$ of a simple pendulum is thought to satisfy $T = k\\,l^{a}g^{b}$, where $l$ is a length in $\\text{m}$, $g$ is measured in $\\text{m/s}^2$ and $k$ is a dimensionless constant. Using unit consistency alone, determine the values of $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the model and state the targets",
          "workingLatex": "T = k\\,l^{a}g^{b} \\qquad a = \\,? \\quad b = \\,?",
          "explanation": "We want the powers $a$ and $b$. Unit consistency alone will force them to take specific values, without us needing to solve any physics of the pendulum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the units of each quantity",
          "workingLatex": "[T] = \\text{s}, \\quad [l] = \\text{m}, \\quad [g] = \\text{m}\\,\\text{s}^{-2}",
          "explanation": "The period is a time in seconds, the length is in metres and the acceleration $g$ is metres per second squared. These are the ingredients of the unit equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note that the constant contributes no units",
          "workingLatex": "[k] = 1",
          "explanation": "Since $k$ is dimensionless it has no units, so all the units on the right-hand side must come from the $l^a$ and $g^b$ factors alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the consistency requirement",
          "workingLatex": "[l^{a}g^{b}] = [T] = \\text{s}",
          "explanation": "For the formula to hold, the combined units of $l^a g^b$ must equal a time in seconds. This is the equation that determines $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the units of the length factor",
          "workingLatex": "[l^{a}] = \\text{m}^{a}",
          "explanation": "Raising the length to the power $a$ raises its unit to the same power, giving metres to the power $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the units of the gravity factor",
          "workingLatex": "[g^{b}] = (\\text{m}\\,\\text{s}^{-2})^{b} = \\text{m}^{b}\\cdot\\text{s}^{-2b}",
          "explanation": "Raising $g$ to the power $b$ raises each of its base units to that power, so metres become $\\text{m}^b$ and $\\text{s}^{-2}$ becomes $\\text{s}^{-2b}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the right-hand side units",
          "workingLatex": "[l^{a}g^{b}] = \\text{m}^{a}\\cdot\\text{m}^{b}\\cdot\\text{s}^{-2b} = \\text{m}^{a+b}\\cdot\\text{s}^{-2b}",
          "explanation": "Multiplying the two factors adds the powers of metres, giving $\\text{m}^{a+b}$, while the seconds appear only from $g$, as $\\text{s}^{-2b}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the left-hand side in base-unit form",
          "workingLatex": "[T] = \\text{s} = \\text{m}^{0}\\cdot\\text{s}^{1}",
          "explanation": "Writing seconds as $\\text{m}^0\\,\\text{s}^1$ shows explicitly that the target has no metres and exactly one power of seconds. This makes the comparison of powers straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the unit equation",
          "workingLatex": "\\text{m}^{a+b}\\cdot\\text{s}^{-2b} = \\text{m}^{0}\\cdot\\text{s}^{1}",
          "explanation": "Setting the units of the right-hand side equal to the units of $T$ gives one equation whose two sides must match base unit by base unit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the powers of metres",
          "workingLatex": "a + b = 0",
          "explanation": "The powers of metres on each side must be equal. Since the period has no metres, we need $a + b = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the powers of seconds",
          "workingLatex": "-2b = 1",
          "explanation": "Likewise the powers of seconds must match. The right-hand side has $\\text{s}^{-2b}$ and the period has $\\text{s}^{1}$, giving $-2b = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve the seconds equation for b",
          "workingLatex": "b = -\\tfrac{1}{2}",
          "explanation": "Dividing $-2b = 1$ by $-2$ gives $b = -\\tfrac{1}{2}$. The negative power means $g$ ends up in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute b into the metres equation",
          "workingLatex": "a + \\left(-\\tfrac{1}{2}\\right) = 0",
          "explanation": "Putting the value of $b$ into $a + b = 0$ leaves a simple equation for the remaining unknown $a$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for a",
          "workingLatex": "a = \\tfrac{1}{2}",
          "explanation": "Adding $\\tfrac{1}{2}$ to both sides gives $a = \\tfrac{1}{2}$, so the length appears under a square root.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Write the resulting formula",
          "workingLatex": "T = k\\,l^{1/2}g^{-1/2} = k\\sqrt{\\dfrac{l}{g}}",
          "explanation": "Substituting the powers back rewrites the model as $k\\sqrt{l/g}$, since $l^{1/2}/g^{1/2}$ is the square root of $l$ over $g$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the values and check against the known result",
          "workingLatex": "\\boxed{a = \\tfrac{1}{2}, \\quad b = -\\tfrac{1}{2}}",
          "explanation": "So $a = \\tfrac{1}{2}$ and $b = -\\tfrac{1}{2}$. This agrees with the standard pendulum formula $T = 2\\pi\\sqrt{l/g}$, where the constant $k = 2\\pi$, confirming that unit consistency alone pins down the powers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = \\tfrac{1}{2}$ and $b = -\\tfrac{1}{2}$, giving $T = k\\sqrt{l/g}$ (consistent with $T = 2\\pi\\sqrt{l/g}$)."
    }
  },
  {
    "id": "al.y1.mech.modelling.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Modelling in mechanics",
    "subtopicId": "al.y1.mech.modelling",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": [
      "mass-and-weight",
      "unit-conversion",
      "tension",
      "synthesis"
    ],
    "questionText": "A cable can safely support a tension of $5\\,\\text{kN}$. A crate of mass $350\\,\\text{kg}$ hangs in equilibrium from the cable. Taking $g = 9.8\\,\\text{m/s}^2$: (a) convert the safe tension to newtons, (b) find the crate's weight, (c) decide whether the cable is safe, and (d) find the largest mass, to the nearest kilogram, that the cable could safely support.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given information",
          "workingLatex": "T_{\\max} = 5\\,\\text{kN}, \\quad m = 350\\,\\text{kg}, \\quad g = 9.8\\,\\text{m/s}^2",
          "explanation": "Gathering the data first keeps the problem organised. We have a safe tension limit, the mass of the crate and the value of $g$ to use throughout.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the meaning of the kilonewton prefix",
          "workingLatex": "1\\,\\text{kN} = 1000\\,\\text{N}",
          "explanation": "The prefix kilo means one thousand, so a kilonewton is a thousand newtons. We must work in newtons because that is the unit weight will come out in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert the safe tension to newtons",
          "workingLatex": "T_{\\max} = 5 \\times 1000 = 5000\\,\\text{N}",
          "explanation": "Multiplying $5$ by $1000$ gives the safe tension as $5000\\,\\text{N}$. This is the largest pull the cable can take without failing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the weight formula",
          "workingLatex": "W = mg",
          "explanation": "Weight is the gravitational force on a mass and equals mass times gravitational acceleration. It is a force, so it will be measured in newtons.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use equilibrium to link tension and weight",
          "workingLatex": "T = W = mg",
          "explanation": "Since the crate hangs in equilibrium, the upward tension in the cable exactly balances the downward weight. So the tension the cable actually carries equals the crate's weight.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the numbers for the weight",
          "workingLatex": "W = 350 \\times 9.8",
          "explanation": "Putting the crate's mass and the value of $g$ into $W = mg$ sets up the arithmetic for the weight.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Calculate the weight",
          "workingLatex": "W = 3430\\,\\text{N}",
          "explanation": "Working out $350 \\times 9.8$ gives $3430$, so the crate weighs $3430\\,\\text{N}$. This is the tension the cable is actually experiencing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the tension in the cable",
          "workingLatex": "T = 3430\\,\\text{N}",
          "explanation": "By the equilibrium condition, the cable's tension equals the weight, $3430\\,\\text{N}$. Now we can test this against the safe limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the actual tension with the safe limit",
          "workingLatex": "3430\\,\\text{N} \\;<\\; 5000\\,\\text{N}",
          "explanation": "We check whether the tension the cable carries stays below its safe maximum. Here $3430$ is comfortably less than $5000$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State whether the cable is safe",
          "workingLatex": "T < T_{\\max} \\;\\Rightarrow\\; \\text{safe}",
          "explanation": "Because the actual tension is below the safe limit, the cable can hold the crate without risk of failure. The cable is safe.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the condition for the largest mass",
          "workingLatex": "T_{\\max} = m_{\\max}\\,g",
          "explanation": "The heaviest crate the cable can hold is the one whose weight just reaches the safe tension. Setting the weight equal to $T_{\\max}$ gives the limiting case.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the safe tension and g",
          "workingLatex": "5000 = m_{\\max} \\times 9.8",
          "explanation": "Replacing $T_{\\max}$ by $5000\\,\\text{N}$ and $g$ by $9.8$ gives an equation with the maximum mass as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Rearrange to make the mass the subject",
          "workingLatex": "m_{\\max} = \\dfrac{5000}{9.8}",
          "explanation": "Dividing both sides by $9.8$ isolates the maximum mass. This is the mass whose weight is exactly the safe tension.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the maximum mass",
          "workingLatex": "m_{\\max} = 510.20\\ldots\\,\\text{kg}",
          "explanation": "Carrying out the division gives about $510.2\\,\\text{kg}$. We must now round carefully, because the mass has to stay at or below this value to remain safe.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Round down to keep within the safe limit",
          "workingLatex": "511 \\times 9.8 = 5007.8\\,\\text{N} > 5000\\,\\text{N}",
          "explanation": "Rounding up to $511\\,\\text{kg}$ would need a tension of $5007.8\\,\\text{N}$, which exceeds the safe limit. So we cannot round up; we must take the whole number just below $510.2$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the largest safe mass",
          "workingLatex": "\\boxed{m_{\\max} = 510\\,\\text{kg}} \\quad (510 \\times 9.8 = 4998\\,\\text{N} < 5000)",
          "explanation": "A mass of $510\\,\\text{kg}$ produces a tension of $4998\\,\\text{N}$, which is within the safe limit, so $510\\,\\text{kg}$ is the largest whole-number mass the cable can safely support.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $5\\,\\text{kN} = 5000\\,\\text{N}$; (b) weight $= 3430\\,\\text{N}$; (c) since $3430\\,\\text{N} < 5000\\,\\text{N}$ the cable is safe; (d) the largest safe mass is $510\\,\\text{kg}$."
    }
  }
];
